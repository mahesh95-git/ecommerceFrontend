import React, { useState } from "react";
import InputField from "./InputField";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
function ShippingInfo() {
  const [streetAddress, SetstreetAddress] = useState("");
  const [streetAddress2, SetstreetAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [phone, setPhone] = useState(0);
  const { user } = useSelector((state) => state.user);
  const {totalAmount}=useSelector((state)=>state.userCart)
  
  const handleInfo = async (e) => {
    e.preventDefault();
    
    try {
      const resp = await axios.post(
        "http://localhost:4000/api/v1/create-payment-intent",
        {
          name: user.name || "",
          phone: phone,
          address: {
            line1: streetAddress,
            postal_code: pinCode,
            city: city,
            state: state,
            country: country,
          },
          amount:totalAmount
        },
        {
          withCredentials: true,
        }
      );

      navigate(`/payment`, {
        state: {
          client_secret: resp.data.client_secret,
        },
      });
    } catch (error) {
    
      toast.error(error.message);
    }
  };
  return (
    <div className="shipping_info">
      <h3>Shipping Info</h3>
      <form onSubmit={handleInfo}>
        <InputField
          lable={"Street Address"}
          setValue={SetstreetAddress}
          value={streetAddress}
          required={true}
          placeholder={"Street Address 1"}
          classes={"shipping_info_input"}
        />
          <InputField
          lable={"Street Address"}
          setValue={SetstreetAddress2}
          value={streetAddress2}
          required={false}
          placeholder={"Street Address 2 Optional"}
          classes={"shipping_info_input"}
        />

        <InputField
          setValue={setCity}
          value={city}
          required={true}
          lable={"City"}
          placeholder={"City"}
          classes={"shipping_info_input"}
        />
        <InputField
          value={phone}
          setValue={setPhone}
          type={Number}
          required={true}
          lable={"Phone"}
          placeholder={"Phone Optional"}
          classes={"shipping_info_input"}
        />
        <InputField
          value={state}
          setValue={setState}
          required={true}
          lable={"State"}
          placeholder={"State"}
          classes={"shipping_info_input"}
        />
        <InputField
          value={pinCode}
          setValue={setPinCode}
          required={true}
          lable={"Pin code"}
          placeholder={"Pin code"}
          classes={"shipping_info_input"}
        />
        <InputField
          value={country}
          setValue={setCountry}
          required={true}
          lable={"Country"}
          placeholder={"Country"}
          classes={"shipping_info_input"}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default ShippingInfo;

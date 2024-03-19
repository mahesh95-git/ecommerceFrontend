import { Link } from "react-router-dom";
function CategoryName() {
  const categorys = [
    {
      name: "MENS",
      img: "/mem.png",
    },
    {
      name: "WOMANS",
      img: "womem.png",
    },
    {
      name: "KIDS",
      img: "kids.png",
    },
    
 
  ];
  return (
    <div className="container-3">
      {categorys &&
        categorys.map((value) => (
          <div className="container-3-1" key={value.name}>
            <Link to={`/products/${(value.name.toLowerCase())}cloth`}>
              <img src={value.img} alt="" />
              <div>{value.name}</div>
            </Link>
     
          </div>
        ))}
    </div>
  );
}

export default CategoryName;

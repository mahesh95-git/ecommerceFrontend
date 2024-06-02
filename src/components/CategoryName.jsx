import { Link } from "react-router-dom";
function CategoryName() {
  const categorys = [
    {
      name: "MEN'S CLOTH",
      img: "/mem.png",
    },
    {
      name: "WOMEN'S CLOTH",
      img: "women.png",
    },
    {
      name: "KID'S CLOTH",
      img: "kids.png",
    },
    
 
  ];
  return (
    <div className="container-3">
      {categorys &&
        categorys.map((value) => (
          <div className="container-3-1" key={value.name}>
            <Link to={`/products/${(value.name.split("'")[0].toLowerCase())}`}>
              <img src={value.img} alt="" />
              <div>{value.name}</div>
            </Link>
     
          </div>
        ))}
    </div>
  );
}

export default CategoryName;

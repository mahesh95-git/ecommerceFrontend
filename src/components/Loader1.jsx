function Loader1({count=5}) {
const temp=new Array(count).fill()
  return <div className="container-20">
{
temp.map((_,index)=><div className="container-20-1" key={index}>
</div>
)
}
  </div>;
}

export default Loader1;

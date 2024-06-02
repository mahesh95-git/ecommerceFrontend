import Admin_list_all from "./Admin_list_all";
function Admin_infoListing({ data, columns,title,field ,manage}) {
  return (
    <div className="container-28">
      <div className="container-28-1">
        <h3>{title&&title.toUpperCase()}</h3>
      </div>
      <div className="container-28-2">
        <Admin_list_all data={data} columns={columns} field={field}  manage={manage}/>
      </div>
    </div>
  );
}

export default Admin_infoListing;

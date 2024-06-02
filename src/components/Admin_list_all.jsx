
import { Link } from "react-router-dom";

function Admin_list_all({ data, columns, manage, field }) {


  return (

    <div className="container-29">
      <table className="container-29-1">
        <thead>
          <tr>
            {columns.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data&&data.map((val, idx) => (
            <tr key={idx}>
              <td>{val[field[0]]}</td>
              <td>
                <img
                  src={
                    Array.isArray(val[field[1]])
                      ? val[field[1]][0].url
                      :val[field[1]]?.url
                  }
                  alt=""
                />
              </td>
              <td>{val[field[2]]}</td>
              <td>{val[field[3]]}</td>
              <td>{val[field[4]]}</td>
              <td>
                <span className="manage">
                  <Link to={`/${manage}/${val[field[0]]}`}>manage</Link>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Admin_list_all;

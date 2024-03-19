import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

function ReactTable({ data, columns }) {
  const handlePrevious = () => {};
  const handleNext = () => {};

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
          {data.map((val, idx) => (
            <tr key={idx}>
              <td>
                <img src={val[columns[0].toLowerCase()]} alt="" />
              </td>
              <td>{val[columns[1].toLowerCase()]}</td>
              <td>{val[columns[2].toLowerCase()]}</td>
              <td>{val[columns[3].toLowerCase()]}</td>
              <td>{val[columns[4].toLowerCase()]}</td>
              <td>
                <span className="manage"><Link to="/manageOrder">manage</Link></span>
              </td>
              <td>{`${val.date.getDate()}/${val.date.getMonth()}/${val.date.getFullYear()}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container-29-2">
        <div className="navigation">
          <div onClick={handlePrevious} className="bg-green">
            <GrPrevious />
          </div>
          <p>1 of 3</p>
          <div onClick={handleNext} className="bg-green">
            <GrNext />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactTable;

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
  
const AssetTableRow = (props) => {
  const { _id, units, bought_price, asset } = props.obj;
  
  const deleteStudent = () => {
    axios.delete("" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  return (
    <tr>
      <td>{units}</td>
      <td>{bought_price}</td>
      <td>{asset}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-student/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteStudent} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default AssetTableRow;
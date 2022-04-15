import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AssetTableRow from "./AssetTableRow";
  
const AssetList = () => {
  const [assets, setAssets] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/owned/")
      .then(({ data }) => {
        setAssets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return assets.map((res, i) => {
      return <AssetTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Units</th>
            <th>Bought Price</th>
            <th>Assets</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default AssetList;
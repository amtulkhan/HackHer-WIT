import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export default function ReviewTable(props) {
  const [selectedRows, setSelectedRows] = useState([]);
  const rowData = props.reviewList;
  console.log(props.reviewList);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "resource", headerName: "Resources", width: 130 },
    { field: "description", headerName: "Description", width: 300 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleButton1Click(params.row.id)}
          >
            Ongoing
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleButton2Click(params.row.id)}
          >
            Chase
          </Button>
        </div>
      ),
    },
  ];
  const handleButton1Click = () => {
    console.log("Amtul");
  };
  const handleButton2Click = () => {
    console.log("Khan");
  };

  //   const handleRaiseSubmit = () => {
  //     if (selectedRows.length == 0) {
  //       alert("Please select at least one access");
  //     } else {
  //       const softwareList = selectedRows.map((selectedId) => {
  //         return rowData.find((item) => item.id == selectedId);
  //       });
  //       setUpdateData({
  //         gpn: employeeGPN,
  //         softwareList: softwareList,
  //       });
  //       console.log(softwareList);
  //     }
  //   };
  console.log("reviee");

  return (
    <Grid
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={10}>
        <DataGrid
          rows={rowData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          getSelectedRows
        />
      </Grid>
    </Grid>
  );
}

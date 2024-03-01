import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "resource", headerName: "Resources", width: 130 },
  { field: "description", headerName: "Description", width: 300 },
];

export default function DataTable(props) {
  const [selectedRows, setSelectedRows] = useState([]);
  const employeeGPN = props.listData.list.gpn;
  const rowData = props.listData.list.softwares;
  const [updateData, setUpdateData] = useState({
    gpn: "",
    softwareList: [],
  });

  const handleRaiseSubmit = () => {
    if (selectedRows.length == 0) {
      alert("Please select at least one access");
    } else {
      const softwareList = selectedRows.map((selectedId) => {
        return rowData.find((item) => item.id == selectedId);
      });
      setUpdateData({
        gpn: employeeGPN,
        softwareList: softwareList,
      });
      console.log("software", softwareList);
      props.setReviewList(softwareList);
      props.setMiddleContent("Review Page");
    }
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={8}>
        <DataGrid
          rows={rowData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onRowSelectionModelChange={setSelectedRows}
          getSelectedRows
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleRaiseSubmit}>
          Raise Request
        </Button>
      </Grid>
    </Grid>
  );
}

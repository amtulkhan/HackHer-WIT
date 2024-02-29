import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "resource", headerName: "Resources", width: 130 },
  { field: "description", headerName: "Description", width: 200 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable(props) {
  const [selectedRows, setSelectedRows] = useState([]);
  const employeeGPN = props.listData.list.gpn;
  const rowData = props.listData.list.softwares;

  const handleSelectionChange = (selection) => {
    setSelectedRows(selection);
  };
  const handleRaiseSubmit = () => {
    console.log(selectedRows);
    console.log(employeeGPN);
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={7}>
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
          onRowSelectionModelChange={handleSelectionChange}
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

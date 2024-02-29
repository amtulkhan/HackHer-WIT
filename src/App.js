import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import DataTable from "./Components/DataTable/dataTable";
import SideBar from "./Components/Sidebar/sideBar.js";
import NavBar from "./Components/Navbar/navbar.js";

function App() {
  return (
    <div className="App">
      <Grid container xs={12} direction="column" justifyContent="center">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="baseline"
          justifyContent="space-between"
          xs={12}
        >
          <Grid item xs={2}>
            <SideBar />
          </Grid>
          <Grid item xs={8}>
            <DataTable />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

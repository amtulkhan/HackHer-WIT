import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import DataTable from "./Components/DataTable/dataTable";
import SideBar  from "./Components/SideBar/sideBar.js";
import NavBar from "./Components/NavBar/navBar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container xs={12}>
        <Grid container alignItems="flex-end" xs={8}>
          {/* <DataTable /> */}
          <SideBar/>

        </Grid>
      </Grid>
    </div>
  );
}

export default App;

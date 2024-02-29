import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import DataTable from "./Components/DataTable/dataTable";
import SideBar  from "./Components/SideBar/sideBar.js";
import NavBar from "./Components/Navbar/navbar.js"
import InputForm from "./Components/InputForm/inputForm.js";
import { useState } from "react";
function App() {
  const [middleContent, setMiddleContent] = useState("landing");
  const handleMiddleContent = () => {
    if (middleContent === "table") {
      return <DataTable />;
    } else if (middleContent === "landing") {
      
      return <InputForm/> ;
    } else {
      console.log("review");
      return "Review Page";
    }
  };
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
          spacing={3}
        >
          <Grid item xs={2}>
            <SideBar />
          </Grid>
          <Grid item xs={8} justifyContent="center">
            {handleMiddleContent()}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

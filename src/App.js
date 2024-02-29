import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import DataTable from "./Components/DataTable/dataTable";
import SideBar from "./Components/Sidebar/sideBar.js";
import NavBar from "./Components/Navbar/navbar.js";
import { useState } from "react";
import Form from "./Components/Sidebar/Form.js";

function App() {
  const [middleContent, setMiddleContent] = useState("landing");
  const [listData, setListData] = useState();

  const handleMiddleContent = () => {
    if (middleContent === "table") {
      return <DataTable />;
    } else if (middleContent === "landing") {
      return (
        <Form
          middleContent={middleContent}
          setMiddleContent={setMiddleContent}
        />
      );
      console.log("home");
      return "Welcome Home";
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
        >
          <Grid item xs={2}>
            <SideBar />
          </Grid>
          <Grid item xs={8}>
            {middleContent === "landing" ? (
              <Form
                middleContent={middleContent}
                setMiddleContent={setMiddleContent}
                setListData={setListData}
              />
            ) : middleContent === "table" ? (
              <DataTable listData={listData} />
            ) : (
              "Review Page"
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import DataTable from "./Components/DataTable/dataTable";
import SideBar from "./Components/Sidebar/sideBar.js";
import NavBar from "./Components/Navbar/navbar.js";
import InputForm from "./Components/InputForm/inputForm.js";
import Form from "./Components/InputForm/Form.js";
import AdminForm from "./Components/InputForm/adminForm.js";
import AdminTable from "./Components/AdminTable/adminTable.js";
import { useState } from "react";
import ReviewTable from "./Components/ReviewTable/reviewTable.js";

function App() {
  const [middleContent, setMiddleContent] = useState("landing");
  const [listData, setListData] = useState({
    gpn: "",
    list: [],
  });
  const [reviewList, setReviewList] = useState([]);

  const handleMiddleContent = () => {
    if (middleContent === "table") {
      return <DataTable />;
    } else if (middleContent === "landing") {
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
          spacing={3}
        >
          <Grid item xs={2}>
            <SideBar setMiddleContent={setMiddleContent} />
          </Grid>
          <Grid item xs={8} justifyContent="center">
            {middleContent === "landing" ? (
              <Form
                middleContent={middleContent}
                setMiddleContent={setMiddleContent}
                setListData={setListData}
              />
            ) : middleContent === "table" ? (
              <DataTable
                listData={listData}
                setMiddleContent={setMiddleContent}
                setReviewList={setReviewList}
              />
            ) : middleContent === "admin" ? (
              <AdminTable setMiddleContent={setMiddleContent} />
            ) : (
              <ReviewTable reviewList={reviewList} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Grid, TextField, Button, MenuItem } from "@mui/material";
import axios from "axios";
import "./form.css";

const Form = (props) => {
  const [formData, setFormData] = useState({
    projectname: "",
    role: "",
    gpin: "",
  });

  const [receivedData, setReceivedData] = useState(null); // State to store received data

  const roles = ["Developer", "Tester", "Business Analyst"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(
        "http://localhost:8080/api/user/save",
        formData
      );
      alert("Submit Successfull");
      setReceivedData(response.data);
      if (response.data) {
        props.setMiddleContent("table");
      }
      props.setListData({
        gpn: formData.gpin,
        list: response.data,
      });
      // If the response is successful, you can do something here
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid className="form-container" container spacing={2}>
          <Grid item xs={8}>
            <TextField
              className="text-field"
              type="text"
              name="gpin"
              value={formData.gpin}
              onChange={handleChange}
              placeholder="GPIN"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              className="text-field "
              type="text"
              name="projectname"
              value={formData.projectname}
              onChange={handleChange}
              placeholder="Project Name"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              className="text-field "
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role"
              select
              fullWidth
              id="role"
              label="Role"
              variant="outlined"
              defaultValue=""
            >
              {roles.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={8}>
            <button
              type="submit"
              variant="contained"
              color="primary"
              className="submit-button "
              // onClick={alert('Data saved successfully')}
            >
              Submit
            </button>
          </Grid>
        </Grid>
      </form>
      {receivedData && (
        <div>
          <h2>Received Data:</h2>
          <pre>{JSON.stringify(receivedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Form;

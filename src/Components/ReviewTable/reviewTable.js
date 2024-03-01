import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ReviewTable(props) {
  const form = useRef();
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
            onClick={() => handleChase(params.row.id)}
          >
            Chase
          </Button>
        </div>
      ),
    },
  ];
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_57mgky8", "template_6s603l2", form.current, {
        publicKey: "rGNN8i5q_-RB8PGfj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleButton1Click = () => {
    console.log("Amtul");
  };
  const handleChase = () => {
    const emailData = {
      // Your static email data
      to_name: "Recipient Name",
      from_name: "Your Name",
      message: "Your message goes here...",
    };
    const dummyForm = document.createElement("form");
    const sendEmail = (e) => {
      emailjs
        .sendForm("service_57mgky8", "template_6s603l2", dummyForm, {
          publicKey: "rGNN8i5q_-RB8PGfj",
          data: emailData,
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };
    sendEmail();
    alert("Email sent to approver");
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
        <form ref={form} onSubmit={sendEmail} style={{ display: "none" }}>
          <label>Name</label>
          <input type="text" name="user_name" value={"Amtul"} />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={"amtulmaswaraahmed@gmail.com"}
          />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Grid>
    </Grid>
  );
}

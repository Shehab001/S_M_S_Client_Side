import { CleaningServices } from "@mui/icons-material";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import Loader from "../Small/Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Teacher = () => {
  const [spin, setSpin] = useState(false);
  const [students, setStudents] = useState([]);
  var data = [];
  var attendance = [];
  // console.log("hi", attendance.length);

  const axios = require("axios");

  useEffect(() => {
    setSpin(true);
    axios
      .get("http://localhost:5000/student")
      .then(function (res) {
        // handle success
        setStudents(res.data);
        setSpin(false);
        // console.log(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [axios]);

  const handleSubmit = () => {
    setSpin(true);
    console.log(attendance);
    // Send a POST request
    axios({
      method: "post",
      url: "http://localhost:5000/attendance",
      data: attendance,
    })
      .then((res) => {
        if (res.data.acknowledged === true) {
          toast.success("Attendance Saved");
        }
        setSpin(false);
      })
      .catch(function (error) {
        // handle error
        setSpin(false);
        console.log(error);
      });
  };

  students.map(
    (student) => (
      attendance.push({
        name: student.name,
        id: student.id,
        attendance: true,
        time: new Date().toString().slice(0, 15),
      }),
      // console.log("at", attendance),
      data.push({
        col1: student.id,
        col2: student.name,
        //  col3: new Date().toString().slice(0, 15),
        col3: (
          <Checkbox
            name="cb"
            defaultChecked
            onChange={(e) => {
              console.log(e.target.checked, student.id);
              for (const i of attendance) {
                if (i.id == student.id) {
                  i.attendance = e.target.checked;
                }
                console.log(attendance);
              }
            }}
          />
        ),
      })
    )
  );
  //   const data = [
  //     {
  //       col1: "Hello",
  //       col2: "World",
  //       col4: <Checkbox name="cb" defaultChecked onChange={() => alert("hlw")} />,
  //     },
  //     {
  //       col1: "react-table",
  //       col2: "rocks",
  //       col4: <Checkbox name="cb" defaultChecked onChange={() => alert("hi")} />,
  //     },
  //     {
  //       col1: "whatever",
  //       col2: "you want",
  //       col4: (
  //         <Checkbox name="cb" defaultChecked onChange={() => alert("ahoy")} />
  //       ),
  //     },
  //   ];

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "col1",
      },
      {
        Header: "Name",
        accessor: "col2", // accessor is the "key" in the data
      },

      //   {
      //     Header: "Time",
      //     accessor: "col3",
      //   },
      {
        Header: "Attendance",
        accessor: "col3",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      <ToastContainer position="top-center" autoClose={500} />
      <Typography
        sx={{
          fontFamily: "jest",
          letterSpacing: "1px",
          fontSize: { md: "35px", xs: "20px" },
          fontWeight: "bold",
          color: "Black4",
          textDecoration: "underline",
          fontStyle: "italic",
          my: 5,
        }}
      >
        Attendance Sheet
      </Typography>
      <Box></Box>
      {spin === true ? (
        <Box sx={{ width: "300px", mx: "auto" }}>
          <Loader></Loader>
        </Box>
      ) : (
        <>
          {" "}
          <Box sx={{ mb: 10 }}>
            <table
              {...getTableProps()}
              style={{ border: "solid 1px blue", width: "100%" }}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        style={{
                          borderBottom: "solid 3px red",
                          background: "aliceblue",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {/* {console.log(column)} */}
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: "10px",
                              // border: "solid 1px gray",
                              background: "papayawhip",
                            }}
                          >
                            {/* {console.log(cell.column.Header)} */}
                            {/* {console.log(cell)} */}
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Box>
              <Button
                sx={{ mt: 5, "&:hover": { transform: "scale(1.1)" } }}
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Teacher;

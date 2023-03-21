import { Box, Checkbox, Divider, TextField, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import Loader from "../Small/Loader/Loader";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
const axios = require("axios");

const Parents = () => {
  const [spin, setSpin] = useState(false);
  const [students, setStudents] = useState([]);
  const [list, setList] = useState("");
  console.log(list);
  var data = [];

  useEffect(() => {
    setSpin(true);
    axios
      .get("https://sms-server-side.vercel.app/attendance")
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
  }, []);

  students.map((student) =>
    data.push({
      col1: student.id,
      col2: student.name,
      col3: student.time,
      col4:
        student.attendance === true ? (
          <CheckIcon sx={{ color: "green" }}></CheckIcon>
        ) : (
          <ClearIcon sx={{ color: "red" }}></ClearIcon>
        ),
    })
  );

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

      {
        Header: "Date",
        accessor: "col3",
      },
      {
        Header: "Attendance",
        accessor: "col4",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <Box mx={{ md: 10, sm: 5, xs: 0 }}>
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
            mt: 5,
          }}
        >
          Attendance Sheet
        </Typography>

        {spin === true ? (
          <Box sx={{ width: "300px", mx: "auto" }}>
            <Loader></Loader>
          </Box>
        ) : (
          <>
            <TextField
              sx={{ float: "left", mb: 3 }}
              label="ID"
              id="outlined-size-small"
              placeholder="ID"
              size="small"
              onChange={(event) => {
                setList(event.target.value);
              }}
            />

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
                  {rows
                    .filter((data) => {
                      if (data.values.col1 == list) {
                        return data;
                      } else if (list === "") {
                        return data;
                      }
                    })
                    .map((row) => {
                      console.log(row.values.col1);
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
            </Box>
          </>
        )}
      </>
    </Box>
  );
};

export default Parents;

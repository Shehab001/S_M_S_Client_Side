import { Box } from "@mui/system";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext, useEffect, useState } from "react";
import { useTable } from "react-table";
import Loader from "../Small/Loader/Loader";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, Divider, TextField, Typography } from "@mui/material";
import { AuthContext } from "../../Context/Context";
import { Translate } from "@mui/icons-material";
const axios = require("axios");

const Admin = () => {
  const { user } = useContext(AuthContext);
  const [route, setRoute] = useState(false);
  const [spin, setSpin] = useState(false);
  const [persons, setPersons] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [list, setList] = useState("");
  const [fresh, setFresh] = useState(false);
  console.log(teacher);

  var data = [];

  useEffect(() => {
    setSpin(true);
    axios
      .get("http://localhost:5000/student")
      .then(function (res) {
        // handle success
        setPersons(res.data);
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

    axios
      .get("http://localhost:5000/teacher")
      .then(function (res) {
        // handle success
        setTeacher(res.data);
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
  }, [fresh]);

  const handleDelete = (id) => {
    // console.log(id);
    setSpin(true);
    axios
      .get(`http://localhost:5000/deletestudent/${id}`)
      .then(function (res) {
        // handle success
        setSpin(false);
        console.log(res);
        if (res.data.deletedCount > 0) {
          toast.success("Deleted");
          setFresh(!fresh);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        toast.error("Error");
        setSpin(false);
      })
      .finally(function () {
        // always executed
      });
  };
  const handleDeleteTeacher = (id) => {
    // console.log(id);
    setSpin(true);
    axios
      .get(`http://localhost:5000/deleteteacher/${id}`)
      .then(function (res) {
        // handle success
        setSpin(false);
        console.log(res);
        if (res.data.deletedCount > 0) {
          toast.success("Deleted");
          setFresh(!fresh);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        toast.error("Error");
        setSpin(false);
      })
      .finally(function () {
        // always executed
      });
  };

  // console.log(personss);
  route === true
    ? persons.map((person) =>
        data.push({
          col1: person.id,
          col2: person.name,
          col3: person.email,
          col4: person.phone,
          col5: person.address.city,
          col6: (
            <ClearIcon
              sx={{
                color: "red",
                cursor: "pointer",
                "&:hover": { transform: "scale(1.5)" },
              }}
              onClick={() => handleDelete(person.name)}
            ></ClearIcon>
          ),
        })
      )
    : teacher.map((person) =>
        data.push({
          col1: person.id,
          col2: `${person.firstName} ${person.lastName}`,
          col3: person.email,
          col4: person.phone,
          col5: person.ad,
          col6: (
            <ClearIcon
              sx={{
                color: "red",
                cursor: "pointer",
                "&:hover": { transform: "scale(1.5)" },
              }}
              onClick={() => handleDeleteTeacher(person.name)}
            ></ClearIcon>
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
        Header: "Email",
        accessor: "col3",
      },
      {
        Header: "Phone",
        accessor: "col4",
      },
      {
        Header: "Address",
        accessor: "col5",
      },
      {
        Header: "Action",
        accessor: "col6",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <Box mx={{ md: 10, sm: 5, xs: 0 }}>
      <ToastContainer position="top-center" autoClose={500} />
      <Box>
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
          Welcome {user.displayName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "jest",
              letterSpacing: "1px",
              fontSize: { md: "20px", xs: "16px" },
              fontWeight: "bold",
              color: "Black4",

              textAlign: "start",
            }}
          >
            {route === false ? "All Student" : "All Teacher"}
          </Typography>
          <TextField
            label="Id"
            id="outlined-size-small"
            placeholder="Search With Id"
            size="small"
            onChange={(event) => {
              setList(event.target.value);
            }}
          />
          <Box display={"flex"}>
            <Button
              variant="contained"
              size="small"
              sx={{
                fontFamily: "jest",
                letterSpacing: "1px",
                backgroundColor: "#222222",
                "&:hover": {
                  background: "#6e3e37",
                },
                fontSize: "10px",
                mr: 1,
              }}
              onClick={() => {
                setRoute(false);
              }}
            >
              All Student
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                fontFamily: "jest",
                letterSpacing: "1px",
                backgroundColor: "#222222",
                "&:hover": {
                  background: "#6e3e37",
                },
                fontSize: "10px",
              }}
              onClick={() => {
                setRoute(true);
              }}
            >
              All Teacher
            </Button>
          </Box>
        </Box>

        <Divider sx={{ color: "black", mt: 1, mb: 10 }}></Divider>
      </Box>
      {spin === true ? (
        <Box sx={{ width: "300px", mx: "auto", mb: 10 }}>
          <Loader></Loader>
        </Box>
      ) : (
        <>
          <Box sx={{ mb: 10, width: "100%" }}>
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
                    //console.log(row.values.col1);
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
                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "7px",
                                    sm: "10px",
                                    md: "16px",
                                  },
                                  fontFamily: "jest",
                                  letterSpacing: { xs: 0, sm: "1px" },
                                }}
                              >
                                {" "}
                                {cell.render("Cell")}
                              </Typography>
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
    </Box>
  );
};

export default Admin;

var x = [
  {
    age: "35",
    class: " 8",
    email: "babu@xyz.com",
    firstName: "Ramesh",
    id: "202",
    lastName: "Babu",
  },
];

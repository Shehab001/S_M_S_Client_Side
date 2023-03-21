import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import Admin from "../AdminPanel/Admin";
import Parents from "../Parents/Parents";
import Loader from "../Small/Loader/Loader";
import Teacher from "../TeacherPanel/Teacher";
const axios = require("axios");

const Dashboard = () => {
  const [spin, setSpin] = useState(false);
  const [data, setData] = useState("");
  const { user } = useContext(AuthContext);
  //console.log(user.uid, data);

  useEffect(() => {
    setSpin(true);
    axios
      .get(`https://sms-server-side.vercel.app/user/${user.uid}`)
      .then(function (res) {
        // handle success
        setData(res.data?.role);
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
  }, [user]);
  return (
    <>
      {spin === true ? (
        <Box sx={{ width: "300px", mx: "auto", mb: 10 }}>
          <Loader></Loader>
        </Box>
      ) : (
        <Box>
          {data === "admin" && <Admin></Admin>}
          {data === "student" && <Parents></Parents>}
          {data === "teacher" && <Teacher></Teacher>}
        </Box>
      )}
    </>
  );
};

export default Dashboard;

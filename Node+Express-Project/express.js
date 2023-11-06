// we want "express" module inside const express
const express = require("express");
// Initialize
const noddy = express();
// We are asking to noddy to use json format of express
noddy.use(express.json());
// HTTP method: GET
noddy.get("/", (request,response) => {
  return response.json({Data: "Hello Guys"});
});

noddy.get("/b", (request,response) => {
  return response.json({Data: "Hello route b people"});
});
// : is used to indicate CHANGE or TRANSFORMATION
// noddy.get("/b/:name", (request,response) => {
//   const students = [
//     {
//       id: 1,
//       name: "student 1"
//     },
//     {
//       id: 2,
//       name: "student 2"
//     },
//     {
//       id: 3,
//       name: "student 3"
//     },
//     {
//       id: 4,
//       name: "student 4"
//     },
//     {
//       id: 5,
//       name: "student 5"
//     },
//   ]
//   const studentID = request.params.name;
//   console.log(studentID);
//   const getStudent = students.filter((student) => student.name === (studentID));
//   return response.json({Data: getStudent});
// });

noddy.get("/b/:id", (request,response) => {
  const students = [
    {
      id: 1,
      name: "student 1"
    },
    {
      id: 2,
      name: "student 2"
    },
    {
      id: 3,
      name: "student 3"
    },
    {
      id: 4,
      name: "student 4"
    },
    {
      id: 5,
      name: "student 5"
    },
  ]
  const studentID = request.params.id;
  console.log(studentID);
  const getStudent = students.filter((student) => student.id === parseInt(studentID));
  return response.json({Data: getStudent});
});

noddy.listen(3000, () => {
  console.log("Server on port 3000 is up & running.");
});

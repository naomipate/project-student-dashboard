import React, { useState } from "react";
// import Studentlist from "./Components/Studentlist";
import studentData from "./data/data.json";

function Cohortlist() {
  function handleCohortList() {
    let cohortCodes = [
      ...new Set(studentData.map((studentObj) => studentObj.cohort.cohortCode)),
    ];
    let cohorts = [];
    cohortCodes.forEach((code) => {
      let cohortStudents = studentData.filter((student) => {
        return student.cohort.cohortCode === code;
      });
      let cohortDate = new Date(cohortStudents[0].cohort.cohortStartDate);
      cohorts.push({
        code: code,
        studentData: cohortStudents,
        cohortBegins: cohortDate,
      });
    });

    cohorts.sort((a, b) => a.cohortBegins - b.cohortBegins);
    console.log(cohorts);

    return cohorts.map((cohort) => {
      return (
        <li>
          <a href="#">{cohort.code.replace(/([a-zA-Z]*)(\d*)/g, "$1 $2")}</a>
        </li>
      );
    });
  }

  return (
    <>
      <h3>Choose a Class by Start Date</h3>
      <ul>
        <li>
          <a href="./App.js">All Students</a>
        </li>
        {handleCohortList(studentData)}
      </ul>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <div>{/* <Studentlist /> */}</div>
      <div>{Cohortlist(studentData)}</div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Studentlist from "./Components/Studentlist";
import Cohortlist from "./Components/Cohortlist";
import studentData from "./data/data.json";

/*
Here is our main "App" function that will the Parent of all our components and functions.
*/
function App() {
  let [cohortPrompt, setCohortPrompt] = useState("All Students");
  /* 
        Creating a new spread array of the cohortCodes from studentData.
        */
  let cohortCodes = [
    ...new Set(studentData.map((studentObj) => studentObj.cohort.cohortCode)),
  ];
  /* 
        Below I am making an empty array to store the objects holding the filtered cohortCodes, 
        the matching studentData, and the matching dates the cohorts begin for sorting purposes.
        */
  let cohorts = [];
  cohortCodes.forEach((code) => {
    let cohortStudents = studentData.filter((student) => {
      return student.cohort.cohortCode === code;
    });
    let cohortDate = new Date(cohortStudents[0].cohort.cohortStartDate);
    cohorts.push({
      code: code.replace(/([a-zA-Z]*)(\d*)/g, "$1 $2"),
      studentData: cohortStudents,
      cohortBegins: cohortDate,
    });
  });

  /*
        sorting the cohort dates so ensure the cohort list returns in a date sorted format.
        */
  cohorts.sort((a, b) => a.cohortBegins - b.cohortBegins);
  cohorts = [
    { code: "All Students", studentData: studentData, cohortBegins: null },
    ...cohorts,
  ];

  function handleCohortCode(cohortCode) {
    setCohortPrompt(cohortCode);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container" onSubmit={handleSubmit}>
      <h1>Student Dashboard</h1>
      <div className="row">
        <div className="col-2">
          <h3>Choose a Class by Start Date</h3>
          <Cohortlist cohorts={cohorts} handleCohortCode={handleCohortCode} />
        </div>
        <div className="col-6">
          <Studentlist cohorts={cohorts} cohortCode={cohortPrompt} />
        </div>
      </div>
    </div>
  );
}

export default App;

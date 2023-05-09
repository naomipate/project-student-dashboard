import React from "react";

function Studentlist({ cohorts, cohortCode }) {
  let cohort = cohorts.filter((cohortObj) => cohortObj.code === cohortCode)[0];
  return (
    <div>
      <h2>{cohort.code}</h2>
      <p>Total Students: {cohort.studentData.length}</p>
      {cohort.studentData.map((studentDataObj) => {
        return (
          <div key={studentDataObj.id}>
            <img src={studentDataObj.profilePhoto} alt="Student Profile" />
            <h4>
              {studentDataObj.names.preferredName +
                " " +
                studentDataObj.names.middleName +
                " " +
                studentDataObj.names.surname}
            </h4>
            <p>{studentDataObj.username}</p>
            <p>{studentDataObj.dob}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Studentlist;

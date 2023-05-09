import React from "react";
import studentData from "../data/data.json";

function Studentlist() {
  return (
    <div>
      {studentData.map((studentDataObj) => {
        return (
          <>
            <h2>All Students</h2>
            <p>Total Students: {studentData.length}</p>
            <h4>
              {studentDataObj.names.preferredName +
                " " +
                studentDataObj.names.middleName +
                " " +
                studentDataObj.names.surname}
            </h4>
            <p>{studentDataObj.username}</p>
            <img src={studentDataObj.profilePhoto} alt="Profile of student" />
          </>
        );
      })}
    </div>
  );
}

export default Studentlist;

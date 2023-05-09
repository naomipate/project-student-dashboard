import React from "react";

function Studentlist({ cohorts, cohortCode }) {
  let cohort = cohorts.filter((cohortObj) => cohortObj.code === cohortCode)[0];

  function handleTrackToGraduate(studentDataObj) {
    let onTrack = true;
    const minumumCodeWarsScore = 600;
    if (
      studentDataObj.certifications.resume === onTrack &&
      studentDataObj.certifications.linkedin === onTrack &&
      studentDataObj.certifications.github === onTrack &&
      studentDataObj.certifications.mockInterview === onTrack &&
      studentDataObj.codewars.current.total >= minumumCodeWarsScore
    ) {
      return "On Track to Graduate";
    }
  }

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
            <p>
              {"Birthday: " +
                new Intl.DateTimeFormat("en-US", {
                  dateStyle: "long",
                }).format(new Date(studentDataObj.dob))}
            </p>
            <button>Show More...</button>
            <h3>{handleTrackToGraduate(studentDataObj)}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Studentlist;

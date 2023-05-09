import React, { useState } from "react";

function Studentlist({ cohorts, cohortCode }) {
  let cohort = cohorts.filter((cohortObj) => cohortObj.code === cohortCode)[0];
  const showMore = true;
  let [showMoreBtn, setShowMoreBtn] = useState(false);

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

  function getShowMoreText() {
    if (showMoreBtn) {
      return "Show Less...";
    } else {
      return "Show More...";
    }
  }

  function handleAdditionalStudentDetails() {}

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
            <div>
              {" "}
              <button onClick={() => setShowMoreBtn(!showMoreBtn)}>
                {getShowMoreText()}
              </button>
            </div>
            {showMoreBtn && <div>LOOK AT ME</div>}

            <h3>{handleTrackToGraduate(studentDataObj)}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Studentlist;

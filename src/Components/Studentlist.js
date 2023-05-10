import React, { useState } from "react";

function Studentlist({ cohorts, cohortCode }) {
  let cohort = cohorts.filter((cohortObj) => cohortObj.code === cohortCode)[0];
  let [showMoreBtn, setShowMoreBtn] = useState({});

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

  function getShowMoreText(id) {
    if (showMoreBtn[id]) {
      return "Show Less...";
    } else {
      return "Show More...";
    }
  }

  function updateShowMore(id, value) {
    let newShowMoreBtn = { ...showMoreBtn };
    newShowMoreBtn[id] = value;
    setShowMoreBtn(newShowMoreBtn);
  }

  function getProgress(studentDataObj) {
    return (
      (studentDataObj.codewars.current.total /
        studentDataObj.codewars.goal.total) *
      100
    ).toFixed(2);
  }

  function getProgressClassName(studentDataObj) {
    const goalAchieved = 100;
    const halfwayThere = 50;
    let progress = getProgress(studentDataObj);
    if (progress >= goalAchieved) {
      return "text-success";
    } else if (progress <= goalAchieved && progress >= halfwayThere) {
      return "text-warning";
    } else if (progress < halfwayThere) {
      return "text-danger";
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
            <div>
              {" "}
              <button
                onClick={() =>
                  updateShowMore(
                    studentDataObj.id,
                    !showMoreBtn[studentDataObj.id]
                  )
                }
              >
                {getShowMoreText(studentDataObj.id)}
              </button>
            </div>
            {showMoreBtn[studentDataObj.id] && (
              <div>
                <div>
                  <h4>Codewars</h4>
                  <p>
                    Progress:
                    <span className={getProgressClassName(studentDataObj)}>
                      {" " + getProgress(studentDataObj) + "%"}
                    </span>
                  </p>
                  <p>
                    {"Current Total: " + studentDataObj.codewars.current.total}
                  </p>
                  <p>
                    {"Total Last Week: " +
                      studentDataObj.codewars.current.lastWeek}
                  </p>
                  <p>
                    {"Current Weekly Total Goal: " +
                      studentDataObj.codewars.goal.total}
                  </p>
                  <p>
                    {"Last Week's Total Goal: " +
                      studentDataObj.codewars.goal.lastWeek}
                  </p>
                </div>
                <div>
                  <h4>Cohort Scores</h4>
                  <p>
                    {"Assignments: " +
                      (studentDataObj.cohort.scores.assignments * 100).toFixed(
                        2
                      ) +
                      " %"}
                  </p>
                  <p>
                    {"Projects: " +
                      (studentDataObj.cohort.scores.projects * 100).toFixed(2) +
                      " %"}
                  </p>
                  <p>
                    {"Assessments: " +
                      (studentDataObj.cohort.scores.assessments * 100).toFixed(
                        2
                      ) +
                      " %"}
                  </p>
                </div>
                <div>
                  <h4>Certifications Received</h4>
                  <p>
                    {"Resume: " +
                      (studentDataObj.certifications.resume ? "✅" : "❌")}
                  </p>
                  <p>
                    {"LinkedIn: " +
                      (studentDataObj.certifications.linkedin ? "✅" : "❌")}
                  </p>
                  <p>
                    {"GitHub: " +
                      (studentDataObj.certifications.github ? "✅" : "❌")}
                  </p>
                  <p>
                    {"Mock Interview: " +
                      (studentDataObj.certifications.mockInterview
                        ? "✅"
                        : "❌")}
                  </p>
                </div>
                <div>
                  <h4>1-on-1 Notes</h4>
                  <form>
                    <label className="">{"Commenter Name "}</label>
                    <input id="commenter-name" type="text"></input>
                    <br />
                    <label id="comment-label">{"Comment "}</label>
                    <input id="comment" type="text"></input>
                    <button type="submit">Add Note</button>
                    <hr />
                    <ul>
                      <li>
                        {studentDataObj.notes.forEach((element) => {
                          return `${element.commenter} says, "${element.comment}"`;
                        })}
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            )}
            <h3>{handleTrackToGraduate(studentDataObj)}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Studentlist;

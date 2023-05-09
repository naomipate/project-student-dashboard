import React from "react";

function Cohortlist({ cohorts, handleCohortCode }) {
  /*
      Here is the base format of the Cohort list.
      */
  /*
        I used regex to mtach the grouping of the words and years so I could input a space
        to make the cohorts have a "human readable" name.
        */
  return (
    <>
      <ul>
        {cohorts.map((cohort) => {
          return (
            <li
              className="cohort-list"
              key={cohort.code}
              onClick={() => {
                console.log(cohort);
                handleCohortCode(cohort.code);
              }}
            >
              {cohort.code}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cohortlist;

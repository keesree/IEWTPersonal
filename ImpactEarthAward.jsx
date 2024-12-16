import React, { useState } from "react";

const Awards = () => {
  const [awards, setAwards] = useState([
    {
      id: 1,
      title: "Digital Badge Award",
      description: "[put something here]",
    },
    {
      id: 2,
      title: "Individual of the Year",
      description: "[put something here]",
    },
    {
      id: 3,
      title: "Community Organization of the Year",
      description: "[put something here]",
    },
  ]);

  return (
    <div>
      <br />

      <h1>Impact Earth Awards</h1>
      <br />

      <p>
        The <strong>Impact Earth Awards</strong> recognize individuals and organizations who have made a significant impact through their positive stories and actions. These awards honor the power of storytelling in inspiring change and encouraging others to make a difference.
      </p>
      <br />

      {/* Spacer line */}
      <p className="spacer">---</p>
      <br />

      <div className="awardCategories">
        {awards.map((award) => (
          <div key={award.id} className="awardCategory">
            <h2>{award.title}</h2>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;

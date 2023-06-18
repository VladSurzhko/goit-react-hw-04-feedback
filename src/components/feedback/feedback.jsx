import React, { useState } from "react";
import style from "../feedback/feedbackstyle.module.css";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/statistic";
import Options from "../Options/Options.jsx"


const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    if (type === "good") {
      setGood((prevGood) => prevGood + 1);
    } else if (type === "neutral") {
      setNeutral((prevNeutral) => prevNeutral + 1);
    } else if (type === "bad") {
      setBad((prevBad) => prevBad + 1);
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const feedbackPercentage = () => {
    const totalFeed = totalFeedback();
    return totalFeed > 0 ? Math.round((good / totalFeed) * 100) : 0;
  };

  const totalFeed = totalFeedback();
  const positivePercentage = feedbackPercentage();
  
      return (
        <div className={style.block}>
          <Section title="Please leave feedback">
            <Options
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={handleFeedback}
            />
          </Section>
  
          <Section title="Statistic">
            {totalFeed > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeed}
                positivePercentage={positivePercentage}
              />
            ) : (
              <p className={style.message}>There is no feedback</p>
            )}
          </Section>
        </div>
      );
    }
  
  
  export default Feedback;








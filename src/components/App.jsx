import React, { useState } from 'react';
import { Statistics } from './statistics/Statistics';
import { Buttons } from './buttons/Buttons';
import { Section } from './title/Section-title';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackClick = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
  const thisState = ['good', 'neutral', 'bad'];
  const totalFeedbackCount = good + neutral + bad;
  return (
    <div>
      <Section title={'Please leave feedback'}>
        <Buttons
          handleFeedbackClick={handleFeedbackClick}
          options={thisState}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbackCount}
        />
        <Notification
          message={'There is no feedback'}
          option={totalFeedbackCount}
        />
      </Section>
    </div>
  );
};

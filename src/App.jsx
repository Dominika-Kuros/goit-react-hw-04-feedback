import { useState } from 'react';
import { Section } from './components/Section/Section';
import { Statistics } from './components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from './components/Notification/Notification';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setState(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };
  const { good, neutral, bad } = state;

  const options = Object.keys(state);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () =>
    Math.floor((good / (good + neutral + bad)) * 100 || 0);
  return (
    <>
      <Section title="Please Leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback yet...'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

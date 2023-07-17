import React, { Component } from 'react';
import css from './App.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Statistics/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const feedbackType = event.currentTarget.textContent.toLowerCase();
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    return this.state.good !== 0
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0) + '%'
      : '0';
  }

  render() {
    const { good, neutral, bad } = this.state;
    const statisticsContent =
      good === 0 && neutral === 0 && bad === 0 ? (
        <Notification message={' No feedback given '} />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      );

    return (
      <div className={css.app}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>{statisticsContent}</Section>
      </div>
    );
  }
}

export default App;

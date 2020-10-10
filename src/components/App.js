import React, { Component } from "react";
import Section from "./Sections";
import Layout from "./Layout";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  counterFeedback = (stateName) => {
    this.setState((state) => {
      return {
        [stateName]: (state[stateName] += 1),
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.counterFeedback} />
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Layout>
    );
  }
}

import React, { Component } from 'react';
import { Statistics } from './statistics/Statistics';
import { Buttons } from './buttons/Buttons';
import { Section } from './title/Section-title';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  handleFeedbackClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
    this.totalFeedbackCalk();
  };
  totalFeedbackCalk = () => {
    this.setState(prevState => ({
      total: prevState['total'] + 1,
    }));
  };
  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <Buttons
            handleFeedbackClick={this.handleFeedbackClick}
            options={Object.keys(this.state)}
          />
          
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
          />
          <Notification
            message={'There is no feedback'}
            option={this.state.total}
          />
        </Section>
      </div>
    );
  }
}

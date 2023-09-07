import { Component } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onLevelFeedback = option => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     [option]: prevState[option] + 1,
  //   }));
  // };

  onLevelFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    //console.log('setState', this.setState)
    console.log('setState - option', option);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (good === 0) return 0;
    //return  Math.round((good/this.countTotalFeedback()*100))
    return ((good / this.countTotalFeedback()) * 100).toFixed(1);
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <Feedback
            options={['good', 'neutral', 'bad']}
            onLevelFeedback={this.onLevelFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              netural={this.state.netural}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            // <Notification message="There is no feedback"></Notification>
            <p>There is no feedback</p>
          )}
        </Section>
      </Container>
    );
  }
}

//<Section title="Statistics">
//<p>Good: {this.state.good}</p>
//<p>Netural: {this.state.netural}</p>
//<p>Bad: {this.state.bad}</p>
//<p>Total: {this.countTotalFeedback()}</p>
//<p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
//{/* <Notification message="There is no feedback"></Notification> */}
//</Section >

// export const App = () => {
//   return (
//     <Container>
//       {/* React homework template */}
//     </Container>
//   );
// };

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

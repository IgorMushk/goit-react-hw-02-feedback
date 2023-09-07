import { Component } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';

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
    console.log('setState - option', option)
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <Feedback
            options={['good', 'neutral', 'bad']}
            onLevelFeedback={this.onLevelFeedback}/>
        </Section>
        <section>
          <h2>Statistics</h2>
          <p>Good: 3</p>
          <p>Netural: 2</p>
          <p>Bad: 2</p>
          <p>Total: 7</p>
          <p>Positive feedback: 43%</p>
          {/* <Notification message="There is no feedback"></Notification> */}
        </section>
      </Container>
    );
  }
}

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

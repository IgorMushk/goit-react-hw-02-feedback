import { Component } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
    <Container>
      <Section  title="">
      </Section>
      <section>
        <h2>Statistics</h2>
        {/* <Notification message="There is no feedback"></Notification> */}
        <p>Good: 3</p>
        <p>Netural: 2</p>
        <p>Bad: 2</p>
        <p>Total: 7</p>
        <p>Positive feedback: 43%</p>
      </section>
    </Container>
    )
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

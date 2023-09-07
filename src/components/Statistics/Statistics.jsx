export const Statistics = ({ good, netural, bad, total, positiveFeedbackPercent }) => {
  return (
    <>
      <ul>
        <li><p>Good: <span>{good}</span></p></li>
        <li><p>Netural: <span>{netural}</span></p></li>
        <li><p>Bad: <span>{bad}</span></p></li>
        <li><p>Total: <span>{total}</span></p></li>
        <li><p>Positive feedback: <span>{positiveFeedbackPercent}%</span></p></li>
      </ul>
    </>
  );
};

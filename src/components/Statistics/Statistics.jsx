export const Statistics = ({ good, netural, bad, total, positivePercentage }) => {
    //console.log('total', total);
    //console.log('positivePercentage', positivePercentage);
  return (
    <>
      <ul>
        <li><p>Good: <span>{good}</span></p></li>
        <li><p>Netural: <span>{netural}</span></p></li>
        <li><p>Bad: <span>{bad}</span></p></li>
        <li><p>Total: <span>{total}</span></p></li>
        <li><p>Positive feedback: <span>{positivePercentage? positivePercentage:'0'}%</span></p></li>
      </ul>
    </>
  );
};

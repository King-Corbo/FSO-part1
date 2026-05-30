import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ frontText, value, rearText }) => (
  <p>
    {frontText} {value} {rearText}{" "}
  </p>
);

const Statistics = ({ good, neutral, bad, count, sum, positive }) => {
  if (count === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <table>
        <tr>
          <td>
            <StatisticLine frontText="good" value="" rearText="" />
          </td>
          <td>
            <StatisticLine frontText="" value={good} rearText="" />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine frontText="neutral" value="" rearText="" />
          </td>
          <td>
            <StatisticLine frontText="" value={neutral} rearText="" />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine frontText="bad" value="" rearText="" />
          </td>
          <td>
            <StatisticLine frontText="" value={bad} rearText="" />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine frontText="all" value="" rearText="" />
          </td>
          <td>
            <StatisticLine frontText="" value={count} rearText="" />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine frontText="average" value="" rearText="" />
          </td>
          <td>
            <StatisticLine frontText="" value={sum / count} rearText="" />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine frontText="positive" value="" rearText="" />
          </td>
          <td>
            <StatisticLine
              frontText=""
              value={(positive * 100) / count}
              rearText="%"
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [positive, setPositive] = useState(0);

  const goodClickHandler = () => {
    const newGood = good + 1;
    const newCount = count + 1;
    const newSum = sum + 1;
    const newPositive = positive + 1;
    setPositive(newPositive);
    setSum(newSum);
    setCount(newCount);
    setGood(newGood);
  };
  const neutralClickHandler = () => {
    const newNeutral = neutral + 1;
    const newCount = count + 1;
    setCount(newCount);
    setNeutral(newNeutral);
  };
  const badClickHandler = () => {
    const newBad = bad + 1;
    const newCount = count + 1;
    const newSum = sum - 1;
    setSum(newSum);
    setCount(newCount);
    setBad(newBad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodClickHandler} text="good"></Button>
      <Button onClick={neutralClickHandler} text="neutral"></Button>
      <Button onClick={badClickHandler} text="bad"></Button>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        count={count}
        sum={sum}
        positive={positive}
      />
    </div>
  );
};

export default App;

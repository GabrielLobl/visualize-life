import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import "./App.css";

function App() {
  const rowDict = { month: 27, year: 6, week: 65 };
  const colDict = { month: 40, year: 15, week: 72 };

  const [policy, setPolicy] = useState(true);
  const [age, setAge] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState("month");
  const [grid, setGrid] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const exitPolicy = () => {
    setPolicy(false);
  };
  const enterPolicy = () => {
    setPolicy(true);
  };

  const resetAge = () => {
    setAge(0);
    setSubmitted(false);
  };
  const changeTime = () => {
    console.log(`switch time from ${time}`);
    switch (time) {
      case "month":
        setTime("year");
        break;
      case "year":
        setTime("week");
        break;
      case "week":
        setTime("month");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // console.log(time);
    setGrid(() => {
      // console.log(`grid with new time ${time}`);
      const rows = [];
      for (let i = 0; i < rowDict[time]; i++) {
        rows.push(
          Array.from(Array(colDict[time]), (x, y) => y + i * colDict[time])
        );
      }
      return rows;
    });
  }, [time]);

  const textField = <p>enter your age:</p>;
  const inputField = (
    <form>
      <input
        className="field"
        autoFocus={true}
        value={age ? age : ""}
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        className="btn"
        onClick={handleSubmit}
        style={{ fontWeight: 700 }}
      >
        visualize
      </button>
    </form>
  );

  const MonthGrid = () => {
    // console.log("renders " + time);
    return (
      <FadeIn transitionDuration={2000}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${colDict[time]}, 28px)`,
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                key={`${i}-${k}`}
                style={{
                  width: 20,
                  height: 20,
                  margin: 3,
                  backgroundColor: grid[i][k] < age * 12 ? "white" : undefined,
                  border: "solid 1px",
                  borderColor: `rgba(255, 255, 255, ${1 - i / 27})`,
                  borderRadius: 20,
                }}
              />
            ))
          )}
        </div>
      </FadeIn>
    );
  };

  const YearGrid = () => {
    // console.log("renders " + time);
    return (
      <FadeIn transitionDuration={2000}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${colDict[time]}, 81px)`,
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                key={`${i}-${k}`}
                style={{
                  width: 60,
                  height: 60,
                  margin: 10,
                  backgroundColor: grid[i][k] < age ? "white" : undefined,
                  border: "solid 1px",
                  borderColor: `rgba(255, 255, 255, ${1 - i / 6})`,
                  borderRadius: 10,
                }}
              />
            ))
          )}
        </div>
      </FadeIn>
    );
  };

  const WeekGrid = () => {
    // console.log("renders " + time);
    return (
      <FadeIn transitionDuration={3000}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${colDict[time]}, 14px)`,
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                key={`${i}-${k}`}
                style={{
                  width: 8,
                  height: 8,
                  margin: 2,
                  backgroundColor: grid[i][k] < age * 52 ? "white" : undefined,
                  border: `solid 0.1px rgba(255, 255, 255, ${1 - i / 65})`,
                  borderRadius: 8,
                }}
              />
            ))
          )}
        </div>
      </FadeIn>
    );
  };

  const gridDict = {
    month: <MonthGrid />,
    year: <YearGrid />,
    week: <WeekGrid />,
  };

  const timeframe = (
    <button className="btn" onClick={changeTime} style={{ fontWeight: 700 }}>
      {time}s
    </button>
  );

  const resetButton = (
    <button className="btn-small" onClick={resetAge}>
      reset
    </button>
  );

  const policyButton = (
    <button className="btn-small" onClick={enterPolicy}>
      policy
    </button>
  );

  const privacyPolicy = (
    <>
      <h2>Privacy Policy</h2>
      <p className="btn-small">
        This chrome extension does not save any data from it's users.
      </p>
      <br />
      <p className="btn-small">
        All information (the age entered) is saved in the user's chrome storage.
      </p>
      <br />
      <button className="btn-small" onClick={exitPolicy}>
        exit
      </button>
    </>
  );

  return (
    <FadeIn transitionDuration={1000}>
      <div className="App">
        {policy ? (
          privacyPolicy
        ) : (
          <>
            <header className="App-header">
              {submitted ? <> your life in{timeframe}</> : textField}
            </header>
            {submitted ? gridDict[time] : inputField}
            {submitted ? resetButton : null}
            {policyButton}
          </>
        )}
      </div>
    </FadeIn>
  );
}

export default App;

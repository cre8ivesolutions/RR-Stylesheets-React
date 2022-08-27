import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ad from './component/ad';
import anotherAd from './component/anotherAd';

const appStyle ={
  display:"flex",
}
const styledText = {
  fontSize: "2rem",
  textAlign: "center",
  margin: "1em",
  border: ".5em dotted maroon",
  padding: ".75em",
};
const styledText2 = {
  fontSize: "1rem",
  textAlign: "left",
  margin: ".5em",
  border: ".25em solid darkgreen",
  padding: ".5em",
  display: "flexbox",
  width: "25vw",
};
const styledText3 = {
  fontSize: "3rem",
  textAlign: "right",
  margin: ".5em",
  border: ".25em dashed blue",
  padding: "1em",
  display: "flexbox",
  width: "50vw",
  color: "darkgrey"
};

function App() {
  let ad1 = ad();
  let ad2 = anotherAd();
  return (
    <div className="App">
      <h1 style={styledText}>Bootstrap in React</h1>
      <div style={appStyle}>
        <h2 style={styledText2}>{ad1}</h2>
        <h2 style={styledText3}>{ad2}</h2>
      </div>
    </div>
  );

}

export default App;

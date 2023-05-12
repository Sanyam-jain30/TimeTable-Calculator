import { useState } from 'react';
import './App.css';
// import TimeTableTemplate from './TimeTableTemplate';
import { Navigate } from "react-router-dom";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState({});
  const [output, setOutput] = useState([
    ['', '', '', '', '', '', '', '', '', 0],
    ['', '', '', '', '', '', '', '', '', 0],
    ['', '', '', '', '', '', '', '', '', 0],
    ['', '', '', '', '', '', '', '', '', 0],
    ['', '', '', '', '', '', '', '', '', 0],
    ['', '', '', '', '', '', '', '', '', 0]
  ]);
  const subject = ['Maths', 'Physics', 'Chemistry', 'Biology', 'History', 'English'];
  const analytic = ['HR Analytics', 'Human Value And Professional Ethics Analytics', 'Social Media & Web Analytics', 'Supply Chain Analytics' , 'Healthcare Analytics', 'Marketing Analytics'];
  // var library = 1;
  // var ccr = 1;
  // var club = 2;

  function handleSubmit(e){
    e.preventDefault();
    console.log("Input: ", input);
    var eve = 6*3;

    if(parseInt(input['lab'])>=1){
      var labs = subject.slice(0, parseInt(input['lab']));
      var index = new Set();

      while(index.size < parseInt(input['lab'])){
        index.add(Math.floor(Math.random()*5));
      }

      let temp = output;
      let i = 0;
      index.forEach(ele => {
        temp[ele][8] = labs[i]+" Lab";
        temp[ele][7] = labs[i]+" Lab";
        temp[ele][6] = labs[i]+" Lab";
        eve -= 3;
        i++;
      });
      for(let i=0;i<temp.length;i++){
        temp[i][9] = parseInt(input['numtheory']);
      }
      setOutput(temp);
    }
    if(parseInt(input['analytic'])>=1){
      var analytics = analytic.slice(0, parseInt(input['analytic']));

      let temp = output;
      for(let i=0;i<analytics.length;i++){
        temp[i][4] = analytics[i];
        temp[i][5] = analytics[i];
      }
      setOutput(temp);
    }
    let temp = output;
    for(let i=0;i<temp.length;i++){
      if(temp[i][8] === ''){
        temp[i][6] = "Club";
        temp[i][7] = "Club";
        temp[i][8] = "Library";
        eve -= 3;
        break;
      }
    }
    setOutput(temp);
    if(parseInt(input['theory'])>=1){
      var theory = subject.slice(0, parseInt(input['theory']));
      let temp = output;

      for(let i=0;i<theory.length;i++){
        for(let j=0;j<temp.length;j++){
          if(!temp[j][8].startsWith(theory[i]) && temp[j][0].length===0 && temp[i][9]>0){
            temp[j][0] = theory[i];
            temp[i][9]-=1;
            break;
          }
        }
      }
      
      for(let i=0;i<theory.length;i++){
        let m = 2;
        let a = 3;
        let j = 0;
        while(m>0){
          if(j>=temp.length && m>0){
            j = 0;
          }
          if(temp[j][9]>0 && !temp[j][8].startsWith(theory[i])){
            let x = Math.floor(Math.random()*5)+1;
            if(temp[j][x] === ''){
              temp[j][x] = theory[i];
              temp[j][9]-=1;
              m--;
            }
          }
          j++;
        }
        j = 0;
        while(a>0){
          if(j>=temp.length && a>0){
            if(a === 3) break;
            j = 0;
          }
          if(temp[j][9]>0 && !temp[j][8].startsWith(theory[i])){
            let x = Math.floor(Math.random()*2)+6;
            if(temp[j][x] === ''){
              temp[j][x] = theory[i];
              temp[j][9]-=1;
              a--;
            }
          }
          j++;
        }
        setOutput(temp);
      }
    }
    temp = output;
    for(let i=0;i<temp.length;i++){
      for(let j=0;j<temp[i].length;j++){
        if(temp[i][j] === ''){
          temp[i][j] = 'CCR';
          i = temp.length;
          break;
        }
      }
    }
    setOutput(temp);
    setSubmitted(true);
  }

  function handleTheoryChange(e){
    var temp = input;
    temp['theory'] = e.target.value;
    setInput(temp);
  }

  function handleAnalyticChange(e){
    var temp = input;
    temp['analytic'] = e.target.value;
    setInput(temp);
  }

  function handleLabChange(e){
    var temp = input;
    temp['lab'] = e.target.value;
    setInput(temp);
  }

  function handleTheoryPeriodsChange(e){
    var temp = input;
    temp['numtheory'] = e.target.value;
    setInput(temp);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="big-container">
          <div className="small-container">
            <label htmlFor="theory">Theory subjects</label>
            <input name="theory" placeholder="(Max 6)" onChange={handleTheoryChange}></input>
          </div>
          <div className="small-container">
            <label htmlFor="analytic">Analytic subjects</label>
            <input name="analytic" placeholder="(Max 6)" onChange={handleAnalyticChange}></input>
          </div>
          <div className="small-container">
            <label htmlFor="lab">Lab subjects</label>
            <input name="lab" placeholder="(Max 6)" onChange={handleLabChange}></input>
          </div>
          <div className="small-container">
            <label htmlFor="theory-periods">Theory periods per day</label>
            <input name="theory-periods" placeholder="(Max 6)" onChange={handleTheoryPeriodsChange}></input>
          </div>
        </div>
        <button className="btn" type="submit">Generate Time Table</button>
      </form>
      {submitted && <Navigate to="/timetable" state={output} replace={true} />}
    </div>
  );
}

export default App;
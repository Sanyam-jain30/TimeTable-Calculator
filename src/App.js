import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimeTable from './TimeTable';
import TimeTableTemplate from './TimeTableTemplate';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' exact element={<TimeTable />} />
            <Route path='/timetable' exact element={<TimeTableTemplate />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import "./TimeTable.css";

function TimeTableTemplate(){
    var subject = new Set();
    var analytic = new Set();
    var lab = new Set();

    var skip = 0;
    const location = useLocation();
    console.log(location.state);

    return(
        <div className="container">
            <h1>Time Table</h1>
            <table className="table">
                <tr>
                    <th>Day</th>
                    <th>9am - 9:55am</th>
                    <th>9:56am - 10:50am</th>
                    <th className="break" rowSpan="7">Break</th>
                    <th>11:05am - 12:00pm</th>
                    <th>12:00pm - 12:55pm</th>
                    <th className="lunch" rowSpan="7">Lunch</th>
                    <th>1:51pm - 2:45pm</th>
                    <th>2:46pm - 3:40pm</th>
                    <th className="break" rowSpan="7">Break</th>
                    <th>3:56pm - 4:40pm</th>
                    <th>4:41pm - 5:20pm</th>
                    <th>5:26pm - 6:10pm</th>
                </tr>
                <tr>
                    <td><b>Monday</b></td>
                    {location.state[0].slice(0, 9).map(function(ele, index){
                        if(skip >= 1){
                            skip--;
                        }
                        else{
                            if(ele.toString().endsWith('Lab')){
                                    skip = 2;
                                    lab.add(ele.toString());
                                    return <td className="content" key={index} colSpan="3">{ele}</td>;
                            } 
                            else if(ele.toString().startsWith('Club')){
                                    skip = 1;
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().endsWith('Analytics')){
                                    skip = 1;
                                    analytic.add(ele.toString());
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().length===0){
                                return <td key={index}></td>;
                            }
                            else{
                                    if(!ele.toString().startsWith('CCR'))  subject.add(ele.toString());
                                    return <td className="content" key={index}>{ele}</td>;
                            }
                        }
                        return '';
                    })}
                </tr>
                <tr>
                    <td><b>Tuesday</b></td>
                    {location.state[1].slice(0, 9).map(function(ele, index){
                       if(skip >= 1){
                            skip--;
                        }
                        else{
                            if(ele.toString().endsWith('Lab')){
                                    skip = 2;
                                    lab.add(ele.toString());
                                    return <td className="content" key={index} colSpan="3">{ele}</td>;
                            } 
                            else if(ele.toString().startsWith('Club')){
                                    skip = 1;
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().endsWith('Analytics')){
                                    skip = 1;
                                    analytic.add(ele.toString());
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().length===0){
                                return <td key={index}></td>;
                            }
                            else{
                                if(!ele.toString().startsWith('CCR'))  subject.add(ele.toString());
                                    return <td className="content" key={index}>{ele}</td>;
                            }
                        }
                        return '';
                    })}
                </tr>
                <tr>
                    <td><b>Wednesday</b></td>
                    {location.state[2].slice(0, 9).map(function(ele, index){
                       if(skip >= 1){
                            skip--;
                        }
                        else{
                            if(ele.toString().endsWith('Lab')){
                                    skip = 2;
                                    lab.add(ele.toString());
                                    return <td className="content" key={index} colSpan="3">{ele}</td>;
                            } 
                            else if(ele.toString().startsWith('Club')){
                                    skip = 1;
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().endsWith('Analytics')){
                                    skip = 1;
                                    analytic.add(ele.toString());
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().length===0){
                                return <td key={index}></td>;
                            }
                            else{
                                if(!ele.toString().startsWith('CCR'))  subject.add(ele.toString());
                                    return <td className="content" key={index}>{ele}</td>;
                            }
                        }
                        return '';
                    })}
                </tr>
                <tr>
                    <td><b>Thursday</b></td>
                    {location.state[3].slice(0, 9).map(function(ele, index){
                       if(skip >= 1){
                            skip--;
                        }
                        else{
                            if(ele.toString().endsWith('Lab')){
                                    skip = 2;
                                    lab.add(ele.toString());
                                    return <td className="content" key={index} colSpan="3">{ele}</td>;
                            } 
                            else if(ele.toString().startsWith('Club')){
                                    skip = 1;
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().endsWith('Analytics')){
                                    skip = 1;
                                    analytic.add(ele.toString());
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().length===0){
                                return <td key={index}></td>;
                            }
                            else{
                                if(!ele.toString().startsWith('CCR'))  subject.add(ele.toString());
                                    return <td className="content" key={index}>{ele}</td>;
                            }
                        }
                        return '';
                    })}
                </tr>
                <tr>
                    <td><b>Friday</b></td>
                    {location.state[4].slice(0, 9).map(function(ele, index){
                       if(skip >= 1){
                            skip--;
                        }
                        else{
                            if(ele.toString().endsWith('Lab')){
                                    skip = 2;
                                    lab.add(ele.toString());
                                    return <td className="content" key={index} colSpan="3">{ele}</td>;
                            } 
                            else if(ele.toString().startsWith('Club')){
                                    skip = 1;
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().endsWith('Analytics')){
                                    skip = 1;
                                    analytic.add(ele.toString());
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().length===0){
                                return <td key={index}></td>;
                            }
                            else{
                                if(!ele.toString().startsWith('CCR'))  subject.add(ele.toString());
                                    return <td className="content" key={index}>{ele}</td>;
                            }
                        }
                        return '';
                    })}
                </tr>
                <tr>
                    <td><b>Saturday</b></td>
                    {location.state[5].slice(0, 9).map(function(ele, index){
                       if(skip >= 1){
                            skip--;
                        }
                        else{
                            if(ele.toString().endsWith('Lab')){
                                    skip = 2;
                                    lab.add(ele.toString());
                                    return <td className="content" key={index} colSpan="3">{ele}</td>;
                            } 
                            else if(ele.toString().startsWith('Club')){
                                    skip = 1;
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().endsWith('Analytics')){
                                    skip = 1;
                                    analytic.add(ele.toString());
                                    return <td className="content" key={index} colSpan="2">{ele}</td>;
                            }
                            else if(ele.toString().length===0){
                                    return <td key={index}></td>;
                            }
                            else{
                                    if(!ele.toString().startsWith('CCR'))    subject.add(ele.toString());
                                    return <td className="content" key={index}>{ele}</td>;
                            }
                        }
                        return '';
                    })}
                </tr>
            </table>
            {subject && 
            <ul>
                <h2>Subjects</h2>
                {Array.from(subject).map(function(ele, index){
                    return <li key={index}>{ele}</li>
                })}
            </ul>}
            {analytic &&
            <ul>
                <h2>Analytics</h2>
                {Array.from(analytic).map(function(ele, index){
                    return <li key={index}>{ele}</li>
                })}
            </ul>}
            {lab &&
            <ul>
                <h2>Labs</h2>
                {Array.from(lab).map(function(ele, index){
                    return <li key={index}>{ele}</li>
                })}
            </ul>}
        </div>
    )
}

export default TimeTableTemplate;
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ManagerLoginForm from './ManagerLoginForm'
import "./../App.css"

export class ManagerPage extends Component {
    constructor (){
        super ();
        this.state = {
            employees : [],
            isChecked: false
        }
    }

    template (args){
        return (
            <p>args</p>
        )
    }

    componentDidMount(){
        const apiUrl = "/getemployeerecords";
        let record = this.state.employees;
        fetch(apiUrl)
        .then (response => response.json())
        .then (data => this.setState({
            employees: data
        }))
    }

    
    render() { 
    const tableStyle = {
            border: '1px solid black'
        }
        return (
            <div className="row">
                <div className=".col-9">
                <h2 style = {{color: 'blue'}}>View Employee records</h2>
                <table style = {{width:"100%"}} className="uppertable">
                    <tr style = {{color : 'teal'}}>
                        <th style = {{width:"100%"}}>Employee_id</th>
                        <th style = {{width:"100%"}}>First Name</th>  
                        <th style = {{width:"100%"}}>Last Name</th> 
                        <th style = {{width:"100%"}}>Position</th> 
                        <th style = {{width:"100%"}}>Salary</th>
                    </tr>
                </table>

                <p>{this.state.employees.map (record => (

                    <table style ={{width:"50%"}} >
                        
                        <tr>

                            <th className="EmployeeRecords">
                                <td style = {{width:"15%"}}>{record[0]}</td>
                                <td style = {{width:"25%"}}>{record[1]}</td>
                                <td style = {{width:"15%"}}>{record[2]}</td>
                                <td style = {{width:"20%"}}>{record[3]}</td>
                                <td style = {{width:"5%"}} >{record[4]}</td>
                            {/* <p>{record[0]} {record[1]} {record[2]} {record[3]} {record[4]}</p> */}
                            </th>
                     
                        </tr>

                    </table>
                ))}
                </p>
                </div>
                <div className=".col-3">
 
                </div>
            </div>
        )
    }
}

export default ManagerPage

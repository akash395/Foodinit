import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ManagerLoginForm from './ManagerLoginForm'


export class ManagerPage extends Component {
    constructor (){
        super ();
        this.state = {
            employees : []
            
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
            <div>
                <h2 style = {{color: 'blue'}}>View Employee records</h2>
                <table style = {tableStyle}>
                    <tr style = {{color : 'teal'}}>
                        <th style = {tableStyle}>Employee_id</th>
                        <th style = {tableStyle}>First Name</th>  
                        <th style = {tableStyle}>Last Name</th> 
                        <th style = {tableStyle}>Position</th> 
                        <th style = {tableStyle}>Salary</th>
                    </tr>
                </table>
                <p>{this.state.employees.map (record => (
                    <table style = {tableStyle}>
                        
                        <tr>
                            <td style = {tableStyle}>{record[0]}</td>
                            <td style = {tableStyle}>{record[1]}</td>
                            <td style = {tableStyle}>{record[2]}</td>
                            <td style = {tableStyle}>{record[3]}</td>
                            <td style = {tableStyle}>{record[4]}</td>
                        </tr>

                    </table>
                ))}</p>

                
            </div>
        )
    }
}

export default ManagerPage

import React, { Component } from 'react';
import '../../style/studentList.scss';
import {addStudent, fetchStudents} from "../utils/http";

class StudentList extends Component {
    state = {
        students:[],
        name:''
    }

    componentDidMount() {
        fetchStudents()
            .then((response) => {
                this.setState({
                    students:response
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleNameChange = (event) => {
        this.setState({
            name:event.target.value,
        })
    }

    handleAddStudent = (event) => {
        event.preventDefault();
        if (event.keyCode === 13){
            addStudent(this.state.name)
                .then(date => this.setState({
                    students:date,
                    name:''
                }))
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div id='main'>
                <h1>学员列表</h1>
                <div className='list'>
                    {
                        this.state.students.map((student) => (
                            <div key={student.id} className='student'>
                                <label>{student.id}. </label>
                                {student.name}
                            </div>
                        ))
                    }
                    <input
                        placeholder="+添加学员"
                        className='nameInput'
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        onKeyUp={this.handleAddStudent}
                    />
                </div>
            </div>
        )
    }
}

export default StudentList;
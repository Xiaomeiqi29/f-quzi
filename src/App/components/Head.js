import React, { Component } from 'react';
import '../../style/head.scss';
import {addStudent, fetchTeam, getGroupTeam} from "../utils/http";

class Head extends Component {

    constructor(props) {
        super(props);
        this.state ={
            teams:[]
        }
    }

    // componentDidMount() {
    //     fetchTeam()
    //         .then((res) => {
    //             if(res[0].teamStudent.length > 0) {
    //                 this.setState({
    //                     teams: res
    //                 })
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    handleGroup = () => {
        getGroupTeam()
            .then(date => {
                this.setState({
                    teams:date
                })
            })
            .catch(err => console.log(err))
    }

    TeamSection = (props) => {
        const {team} = props;
        return(
            <div className="teamSection">
                <input type="text" className="team-name"/>
                <div className="team-member">
                    {team.teamStudent.map((student) => (
                        <div className="teamStudent" key={student.id}>
                            <label>{student.id}. </label>
                            {student.name}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="head">
                <h1>分组列表</h1>
                <button onClick={this.handleGroup}>分组学员</button>
                <main>
                    {
                        this.state.teams.map((team) =>(
                        <this.TeamSection team={team} key={team.teamName}/>
                        ))
                    }
                </main>
            </div>
        );
    }
}

export default Head;

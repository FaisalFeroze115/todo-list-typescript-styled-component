import React from 'react'
import { ITask } from '../Interfaces'
import styled from 'styled-components'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <Task>
            <Content>
                <span>{task.taskName}</span>
                <span>{task.deadLine}</span>
            </Content>
            <button onClick={()=>{completeTask(task.taskName)}}>X</button>
        </Task>
    )
}

const Task = styled.div`
    width: 500px;
    height: 50px;
    display: flex;
    color: #fff;
    margin: 15px;

    button{
        flex: 20%;
        height: 100%;
        border: none;
        background-color: lightseagreen;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        color: #fff;
        cursor: pointer;
    }
`;

const Content = styled.div`
    flex: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        display: grid;
        place-items: center;
        border: 1px solid #fff;
        width: 100%;
        height: 100%;
        font-size: 18px;
        border-right: none;
        background-color: tomato;
    }
`;


export default TodoTask

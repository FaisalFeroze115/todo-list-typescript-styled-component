import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components'
import {ITask} from './Interfaces'
import TodoTask from './components/TodoTask';

const App:React.FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadLine] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === 'task'){
      setTask(event.target.value);
    }else{
      setDeadLine(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadLine: deadline,
    }
    setTodo([...todo, newTask])
    setTask('');
    setDeadLine(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(todo.filter((task)=>{
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <AppContainer>
      <Header>
        <InputContainer>
          <input onChange={handleChange} name="task" value={task} type="text" placeholder="Task...." />
          <input onChange={handleChange} name="deadline" value={deadline} type="number" placeholder="Deadline (in Days)...."/>
        </InputContainer>
        <button onClick={addTask}>Add Task</button>
      </Header>
      <TodoList>
        {todo.map((task: ITask, key:number)=>{
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </TodoList>
    </AppContainer>
  );
}

const Header = styled.div`
  flex: 30%;
  background-color: tomato;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    width: 70px;
    height: 87px;
    border: none;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    padding-left: 10px;
    cursor: pointer;
  }
`;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  input{
    width: 200px;
    height: 40px;
    border: none;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    padding-left: 10px;
    font-size: 17px;
    border: 1px solid grey;
  }
`;

const TodoList = styled.div`
  flex: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
`;


export default App;

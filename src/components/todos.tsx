import { ChangeEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import Todolist from "./todolist";
import Table from "react-bootstrap/Table";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export interface TaskList {
  taskName: string;
  deadline: number;
}

export default function Todos() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todolist, setTodolist] = useState<TaskList[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const tasks = { taskName: task, deadline: deadline };
    setTodolist([...todolist, tasks]);
    console.log(todolist);
    setTask("");
    setDeadline(0);
  };


  const deleteTask = (taskToDelete: string): void => {
   setTodolist(todolist.filter((task) =>{
    return task.taskName != taskToDelete
   }))
  }

  return (
    <>
      <div className="pt-5"></div>
      <div className="App">
        <Container>
          <Row>
            <Col lg="2"></Col>
            <Col lg="8">
              <InputGroup>
                <Form.Control
                  aria-label="task"
                  placeholder="Task..."
                  name="task"
                  value={task}
                  type="text"
                  onChange={handleChange}
                />
                <Form.Control
                  aria-label="dealine"
                  placeholder="Days to complete..."
                  name="deadline"
                  type="number"
                  value={deadline}
                  onChange={handleChange}
                />
                <Button variant="dark" size="lg" onClick={addTask}>
                  Add
                </Button>
              </InputGroup>{" "}
            </Col>
            <Col lg="2"></Col>
          </Row>
        </Container>
        <div className="pt-5"></div>
        <h1 style={{ fontFamily: "cursive" }}>MY TODO LIST</h1>
        {todolist.map((task: TaskList, key: number) => {
          return <Todolist key={key} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </>
  );
}

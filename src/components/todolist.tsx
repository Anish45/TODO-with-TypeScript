import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { TaskList } from "./todos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Propstyle {
  task: TaskList;
  deleteTask(taskToDelete: string): void;
}

export default function todolist({ task, deleteTask }: Propstyle) {
  return (
    <>
      <div className="App">
        <Container>
          <Row className="pt-3">
            <Col>{task.taskName}</Col>
            <Col>{task.deadline}</Col>
            <Col>
              <Button variant="danger" onClick={() => deleteTask(task.taskName)}>Delete</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

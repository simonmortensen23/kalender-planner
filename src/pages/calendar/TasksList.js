import React, { useEffect, useState } from "react";


import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { axiosReq } from "../../api/axiosDefault";
import CalenderPost from "./CalenderPost";
import { useCurrentUser, useSetCurrentUser } from '../../context/CurrentUserContext'



function TasksList(props) {
  const {
    owner
  } = props;
  const [tasks, setTasks] = useState({ results: []})
  const [hasLoaded, setHasLoaded] = useState(false)
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const isOwner = currentUser?.username === owner; 
  
  

  useEffect(() => {
    const fetchTasks = async () => {
        try {
            const { data } = await axiosReq.get(`/calender/`);
            setTasks(data);
            setHasLoaded(true);
          } catch (err) {
            console.log(err);
          }
        };
    
        setHasLoaded(false);
        fetchTasks();
      }, []);

    const loggedInView = <>{hasLoaded ? (
        <>
          {tasks.results.length ? (
            tasks.results.map((task) => (
              <CalenderPost key={task.id} {...task} setPosts={setTasks} />
            ))
          ) : (
            <Container>
              <p>No results</p>
            </Container>
          )}
        </>
      ) : (
        <Container>
          <p>Loading</p>
        </Container>
      )}</>
      
    const loggedOutView = <><h1>Welcome to your taskmanager</h1> <p>Log in to see your list of tasks</p></>


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        
        {currentUser ? loggedInView : loggedOutView}
      </Col>
    </Row>
  );
}

export default TasksList;
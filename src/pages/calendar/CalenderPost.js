import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCurrentUser } from "../../context/CurrentUserContext";


const CalenderPost = (props) => {
  const {
    id,
    owner,
    title,
    task_info,
    due_date,
    task_status,
    created_at,
    updated_at,
    taskOverview,
  } = props;

  const currentUser = useCurrentUser();
  const isOwner = currentUser?.username === owner; 

  return (
    <Card>
      <Card.Body>
        <Link to={`/calender/${id}`}>
          {owner}
          </Link>
      </Card.Body>
      <Card.Body>
        {title && <Card.Title className='text-center'>{title}</Card.Title>}
        {task_info && <Card.Text className='text-center'>{task_info}</Card.Text>}
        <ListGroup className="list-group-flush">
        {task_status && <ListGroup.Item>Status: {task_status}</ListGroup.Item>}
        {created_at && <ListGroup.Item>Created at: {created_at}</ListGroup.Item>}
        {updated_at && <ListGroup.Item>Updated at: {updated_at}</ListGroup.Item>}
        {due_date && <ListGroup.Item>Due date: {due_date}</ListGroup.Item>}
      </ListGroup>
        
        
        {isOwner && taskOverview && "Edit"}
      </Card.Body>
    </Card>
  ) 
  
}

export default CalenderPost
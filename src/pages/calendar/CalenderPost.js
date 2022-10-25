import React from 'react'
import { Card } from 'react-bootstrap';
import { useCurrentUser } from "../../context/CurrentUserContext";


const CalenderPost = (props) => {
  const {
    id,
    owner,
    title,
    task_info,
    due_date,
    status,
    created_at,
    updated_at,
    taskOverview,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner; 

  return (
    <Card>
      <Card.Body>
        
          {owner}
          <span className="align-items-end">{updated_at}</span>
          {is_owner && taskOverview && "Hello"}
      </Card.Body>
      <Card.Body>
        {title && <Card.Title className='text-center'>{title}</Card.Title>}
        {task_info && <Card.Text>{task_info}</Card.Text>}
        {status && <Card.Text>{status}</Card.Text>}
        {due_date && <Card.Text>{due_date}</Card.Text>}

      </Card.Body>
    </Card>
  ) 
  
}

export default CalenderPost
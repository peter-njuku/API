import { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col, Button, Form, Card, Spinner, Alert } from 'react-bootstrap';
import { FaSearch, FaTimes, FaCheck } from 'react-icons/fa';


export default function App(){
  const [userId, setUserId] = useState(1);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchToDos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
      setTodos(response.data);
    } catch (err) {
      setError('Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchToDos();
  }, [userId]);

  return(
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className='text-center'>
        <h1>TODO API EXPLORER</h1>

        <Form.Group className='mb-3'>
          <Form.Control
          type='number'
          min="1"
          max="10"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder='Enter User ID (1-10)'
          className='mb-2'
          />
          <Button
            variant='primary'
            onClick={fetchToDos}
            disabled={loading}
          >
            {loading ? <Spinner size='sm' /> : <FaSearch />}
            Search
          </Button>
        </Form.Group>
        {error && (
          <Alert variant='danger'>
            {error}
          </Alert>
        )}
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {todos.map(todo =>(
          <Col key={todo.id}>
            <Card className='h-100'>
              <Card.Body>
                <Card.Title>{todo.title}</Card.Title>
                <Card.Text className='d-flex justify-content-between align-items-center'>
                  <small>User: {todo.userId}</small>
                  <small>
                    { todo.completed ? <FaCheck className='text-success' /> : <FaTimes className='text-danger' />}
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )

}

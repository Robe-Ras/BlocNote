import { useState } from "react";
import { Button, ButtonGroup, Stack, Modal } from "react-bootstrap";

const Counter = () => {
  // Counter
  const [count, setCount] = useState(0); 
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Stack className="Counter" gap={3} direction="horizontal">
      <h1>Counter</h1>
      <ButtonGroup>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
      </ButtonGroup>

      <Button onClick={handleShow}>Toggle modal</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Counting: {count}</Modal.Body>
      </Modal>
      <p>Counting: {count}</p>
    </Stack>
  );
};

export default Counter;

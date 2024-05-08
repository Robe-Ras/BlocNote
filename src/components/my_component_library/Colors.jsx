import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function Colors() {
  const [color, setColor] = useState("primary");
  const lastColor = (a) => {
    setColor(a);
  };

  return (
    <div className="Colors">
      <h1>Last Color</h1>
      <ButtonGroup className="w-50">
        <Button variant="primary" onClick={() => lastColor('primary')}>
          primary
        </Button>
        <Button variant="secondary" onClick={() => lastColor('secondary')}>secondary</Button>
        <Button variant="warning" onClick={() => lastColor('warning')}>warning</Button>
        <Button variant="success" onClick={() => lastColor('success')}>success</Button>
      </ButtonGroup>
      <p>
        <strong>Last Color : </strong>
        {color}
      </p>
    </div>
  );
}
export default Colors;

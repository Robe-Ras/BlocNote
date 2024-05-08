import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const Customer = (props) => {
  const { firstName, lastName, email, phone, job, avatar } = props.data;

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={avatar} />
    <Card.Body>
      <Card.Title>{firstName} {lastName}</Card.Title>
      <Card.Text>
      {job}
      </Card.Text>
      <Stack direction="horizontal" gap={3}>
        <Button href={`tel:${phone}`} variant="primary">Appeler</Button>
        <Button href={`mailto:${email}`} variant="primary" className="ms-auto">Email</Button>
        </Stack>
    </Card.Body>
  </Card>
  );
};

export default Customer;
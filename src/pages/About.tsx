import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  const shopName = 'Our Online Store';
  const yearFounded = '2020';
  const founderName = 'John Doe';
  const numberOfEmployees = '10';
  const missionStatement =
    'Our mission is to provide high-quality products at affordable prices to customers all over the world.';

  return (
    <Container>
      <h1>About {shopName}</h1>
      <Row>
        <Col xs={12} md={6}>
          <img
            src="/imgs/shop.jpg"
            alt={`${shopName} Logo`}
            className="img-fluid rounded mb-3"
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col xs={12} md={6}>
          <h2>Our Story</h2>
          <p>
            {shopName} was founded in {yearFounded} by {founderName} with a team
            of {numberOfEmployees} employees.
          </p>
          <p>{missionStatement}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 className="mt-5">Welcome to Our Online Store</h1>
          <p>Shop our latest collections and find great deals</p>
          <Link to="/store">
            <Button variant="primary" className="p-3 mt-3 fs-5">
              Shop Now
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src="/imgs/cart.png"
            alt="Shopping Cart"
            className="img-fluid mt-5"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

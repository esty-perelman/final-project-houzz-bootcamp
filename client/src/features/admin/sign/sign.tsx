import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Sign() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Link to="/login">sgin in</Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Link to="register">sgin up</Link>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
}

export default Sign;

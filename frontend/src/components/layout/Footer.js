import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
export default function Footer() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              {" "}
              E<i className="fas fa-code"></i>A copyright 2021
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

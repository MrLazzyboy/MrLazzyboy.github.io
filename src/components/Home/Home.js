import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Col, Row, Button, Grid } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Exonlab Partner Network</h2>
                    <p>Find IoT solutions for your business all over the world</p>
                </Jumbotron>
                    <Row>
                      <Col md="6" className="align-right">
                        <Link to="/solutions">
                          <Button bsStyle="primary">Solutions</Button>
                        </Link>
                      </Col>
                      <Col md="6">
                        <Link to="/devices">
                          <Button bsStyle="primary">Devices</Button>
                            </Link>
                      </Col>
                    </Row>
            </Grid>
        );
    }
}

export default Home;
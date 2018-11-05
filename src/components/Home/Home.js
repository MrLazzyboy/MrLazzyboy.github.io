import React, {Component} from 'react';
import { Col, Grid, FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <Grid className="container main">
                <Grid className="search">
                <Col>
                  <Col>
                    <h2>Exonlab Partner Network</h2>
                    <p>Find IoT solutions for your business all over the world</p>
                  </Col>
                  <Col md={6} className="search-input">
                    <FormGroup>
                        <InputGroup>
                            <FormControl
                                type="text"
                                placeholder="..."
                            />
                            <InputGroup.Button>
                                <Button>Search</Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                  </Col>
                </Col>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
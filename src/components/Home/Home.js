import React, {Component} from 'react';
import {
  Col,
  Grid,
  FormControl,
  FormGroup,
  InputGroup,
  Button,
  Row,
  Image } from 'react-bootstrap';
import './Home.scss';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
      const style = {
		position: "relative",
	    height: "230px"
      };
        return (
          <div>
            <Grid className="main">
                <Col className="about container">
                  <h2>Marketplace</h2>
                  <p>Find IoT solutions for your business all over the world</p>
                </Col>
                <Col className="search-input container">
                  <Row>
                    <FormGroup>
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="search..."
                    />
                    <InputGroup.Button>
                      <Button>Search</Button>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
                    <Row>
                   <Col className="float-left" md="6">
                     <Link to="/devices"><h3>Our devices</h3></Link>
                         <p>538 (+13 last month)</p>
                     </Col>
                   <Col className="float-right" md="6">
                     <Link to="/solutions"><h3>Solutions</h3></Link>
                         <p>234 (+22 last month)</p>
                     </Col>
                 </Row>
                  </Row>
              </Col>
            </Grid>
            <Grid className="new">
              <Grid className="intro">
                <h2>What's happening right now</h2>
                <p>Here are all the latest products.</p>
              </Grid>
			  <Grid>
				<Row>
				  <Col xs={4} md={4}>
					<Image src="/image/item1.jpeg" alt="242x200" style={style} />
					<h3>LOKA PRIMIS (RC4)</h3>
					<p>LOKA’s first low cost / low power tracker, with expansion capabilities.</p>
				  </Col>
				  <Col xs={4} md={4}>
					<Image src="/image/item2.jpeg" alt="242x200" style={style}/>
					  <h3>eSense Pro CO2 - RC4</h3>
					  <p>High quality battery powered environmental sensor to detect temperature, relative humidity, VOC, air pressure and CO2</p>
				  </Col>
				  <Col xs={4} md={4}>
					<Image src="/image/item3.jpeg" alt="242x200" style={style} />
					<h3>Ikarya watch</h3>
					<p>A smartwatch to help you age well and stay healthy. 1st Sigfox ready smartwatch already widely deployed.</p>
				  </Col>
				</Row>
			  </Grid>
            </Grid>
		  </div>
        );
    }
}

export default Home;
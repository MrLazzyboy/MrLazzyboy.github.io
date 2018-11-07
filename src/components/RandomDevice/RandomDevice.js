import React, {Component} from 'react';
import {
  Col,
  Grid,
  Row,
  Image
} from 'react-bootstrap';
import "./RandomDevice.scss"

class RandomDevice extends Component {
  render() {
	return (
	  <Grid>
		<Col className="wrapper">
		  <Col className="title">
			<h1>LOKA PRIMIS (RC4)</h1>
			<span>LOKA’s first low cost / low power tracker, with expansion capabilities.</span>
		  </Col>
		  <Row className="product">
			<Col md="8" className="panel-left">
			  <Col className="anchors">
				<a href="#general">General</a>
				<a href="#certification">Certification</a>
				<a href="#functional">Functional</a>
				<a href="#business">Business</a>
				<a href="#technical">Technical</a>
				<a href="#reviews">Reviews</a>
			  </Col>
			  <Col id="general">
				<Image src="/image/full.jpeg" />
				<Col className="general-description">
				  <p>LOKA Solutions first device. Focused on asset tracking, with its geolocations capabilities. It wants to show what assets have a reflective thought. </p>
				  <p>LOKA PRIMIS devices are managed in the LOKA MIND IoT Cloud Platform.</p>
				  <p>This device has an expandable capability that allow one to buy it with an External Temperature Sensor or a GPS. It also is possible to adapt to one of two different connectivity networks: </p>
				  <p>- Sigfox  (Available for  RCZ1 | RCZ2 | RCZ4)</p>
				  <p>- NB-IoT. </p>
				</Col>
			  </Col>
			  <Col id="certification">
				<h3>Certification info</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			  </Col>
			  <Col id="functional">
				<h3>Functional info</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			  </Col>
			  <Col id="business">
				<h3>Business info</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			  </Col>
			  <Col id="technical">
				<h3>Technical info</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			  </Col>
			  <Col id="reviews">
				<h3>Reviews</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			  </Col>
			</Col>
			<Col md="4" className="panel-right" />
		  </Row>
		</Col>

	  </Grid>
	);
  }
}

export default RandomDevice;
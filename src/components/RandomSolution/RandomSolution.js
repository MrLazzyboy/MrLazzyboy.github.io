import React, {Component} from 'react';
import {
  Col,
  Grid,
  Row,
  Image
} from 'react-bootstrap';
import "./RandomSolution.scss"

class RandomSolution extends Component {
  render() {
	return (
	  <Grid>
		<Col className="wrapper">
		  <Col className="title">
			<h1>e-Silos</h1>
			<span>e-Silos turn your grain silos storage in a 100 % on line tool. With ultrasonic sensors and gas detection, connected to the cloud, applying analytics tools, that bring information. </span>
		  </Col>
		   <Col className="product">
			  <Col className="anchors">
				<a href="#general">General</a>
				<a href="#certification">Certification</a>
				<a href="#functional">Functional</a>
				<a href="#business">Business</a>
				<a href="#technical">Technical</a>
				<a href="#reviews">Reviews</a>
			  </Col>
			  <Col id="general">
				<Image src="/image/full2.jpeg" />
				<Col className="general-description">
				  <h4>Commercial gains:</h4>
				  <p>-Commercial and management teams have real time visibility over the stored volume of grains in the silos</p>
				  <p>-Easy control, no unnecessary travels</p>
				  <p>-Inventory in real time, available online, accessible from anywhere</p>
				  <p>-Auto diagnosis of the digital measurements collected from the silos for exeption/anomalies detection. Ex: gas control (H2S | CO | CH4)</p>
                  <h4>Financial gains:</h4>
				  <p>-Saves time</p>
				  <p>-Optimizes control and storage time, avoiding overstocking </p>
				  <p>-No more surprise when loading, prevents silos overload and returns</p>
				  <p>-Prevents out of stock</p>
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
		</Col>

	  </Grid>
	);
  }
}

export default RandomSolution;
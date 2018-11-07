import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Col,
  Grid,
  Row,
  Checkbox,
  Button,
  InputGroup,
  FormControl,
  FormGroup, Image
} from 'react-bootstrap';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import './Solutions.scss';
import 'react-accessible-accordion/dist/minimal-example.css';

class Solutions extends Component {
  render() {
	const style = {
	  position: "relative",
	  height: "140px",
	  width: "auto",
	  top: "0",
	  marginLeft: "-15px"
	};

	return (
	  <Grid className="devices-main">
		<Row>
		  <Col md="3" className="devices-filters">
			<Accordion accordion={false}>
			  <AccordionItem className="filter-item">
				<AccordionItemTitle>
				  <h4>Product Available</h4>
				</AccordionItemTitle>
				<AccordionItemBody className="filter-body">
				  <Checkbox>Commercially Available</Checkbox>
				  <Checkbox>Sample</Checkbox>
				  <Checkbox>In Development</Checkbox>
				  <Checkbox>Discontinued</Checkbox>
				</AccordionItemBody>
			  </AccordionItem>
			  <AccordionItem className="filter-item">
				<AccordionItemTitle>
				  <h4>Buy Online</h4>
				</AccordionItemTitle>
				<AccordionItemBody className="filter-body">
				  <Checkbox>Available for purchase online</Checkbox>
				  <Checkbox>Show all products</Checkbox>
				</AccordionItemBody>
			  </AccordionItem>
			  <AccordionItem className="filter-item">
				<AccordionItemTitle>
				  <h4>Zone</h4>
				</AccordionItemTitle>
				<AccordionItemBody className="filter-body">
				  <Checkbox>RC1 - Europe, Iran, Kenya, Oman, South Africa, Tunisia, United Arab Emirates</Checkbox>
				  <Checkbox>RC4 - Australia, Hong Kong, Malaysia, New Zealand, Singapore, Taiwan, Thailand ; Argentina, Chile, Colombia, Costa Rica, Ecuador, El Salvador, Guatemala, Honduras, Panama, Peru.</Checkbox>
				  <Checkbox>RC2 - USA, Mexico, Brazil</Checkbox>
				  <Checkbox>RC3 - Japan</Checkbox>
				</AccordionItemBody>
			  </AccordionItem>
			  <AccordionItem className="filter-item">
				<AccordionItemTitle>
				  <h4>Sector</h4>
				</AccordionItemTitle>
				<AccordionItemBody className="filter-body">
				  <Checkbox>Industry</Checkbox>
				  <Checkbox>Utilities</Checkbox>
				  <Checkbox>All sectors</Checkbox>
				  <Checkbox>Pubclic Sector</Checkbox>
				  <Checkbox>Agriculture</Checkbox>
				  <Checkbox>Home</Checkbox>
				  <Checkbox>Transport&Logistics</Checkbox>
				  <Checkbox>Retails</Checkbox>
				  <Checkbox>Health</Checkbox>
				</AccordionItemBody>
			  </AccordionItem>
			  <AccordionItem className="filter-item">
				<AccordionItemTitle>
				  <h4>Use Case</h4>
				</AccordionItemTitle>
				<AccordionItemBody className="filter-body">
				  <Checkbox>Temperature Monitoring</Checkbox>
				  <Checkbox>Universal Acquisition Transmitter</Checkbox>
				  <Checkbox>Trackers</Checkbox>
				  <Checkbox>Consumption Meters</Checkbox>
				  <Checkbox>Buttons</Checkbox>
				  <Checkbox>Building & Office monitoring</Checkbox>
				  <Checkbox>Monitor Environmental Conditions</Checkbox>
				  <Checkbox>Monitor Asset Usage</Checkbox>
				  <Checkbox>Parking & Road traffic monitoring</Checkbox>
				  <Checkbox>Water Infrastructure Operation</Checkbox>
				  <Checkbox>Waste Management</Checkbox>
				  <Checkbox>Secure Better</Checkbox>
				</AccordionItemBody>
			  </AccordionItem>
			  <AccordionItem className="filter-item">
				<AccordionItemTitle>
				  <h4>Sensor</h4>
				</AccordionItemTitle>
				<AccordionItemBody className="filter-body">
				  <Checkbox>Temperature</Checkbox>
				  <Checkbox>Accelerometer</Checkbox>
				  <Checkbox>Humidity</Checkbox>
				  <Checkbox>Pressure</Checkbox>
				  <Checkbox>Flow</Checkbox>
				  <Checkbox>GPS</Checkbox>
				  <Checkbox>Ultrasonic</Checkbox>
				  <Checkbox>Light</Checkbox>
				  <Checkbox>Magnetometer</Checkbox>
				  <Checkbox>Water flow/Consumption</Checkbox>
				  <Checkbox>Barometer</Checkbox>
				</AccordionItemBody>
			  </AccordionItem>
			</Accordion>
		  </Col>
		  <Col md="9" className="devices-list">
			<Col className="list-about">
			  <Row>
				<Col md="8">
				  <h2>Solutions</h2>
				  <p>A solution includes one or several devices, a cloud app and SIGFOX subscription. </p>
				</Col>
				<Col md="4" className="list-button">
				  <Button>Contact us</Button>
				</Col>
			  </Row>
			</Col>
			<Col md="12" className="list-search">
			  <FormGroup>
				<InputGroup>
				  <FormControl
					type="text"
					placeholder="Search for components, devices or solutions..."
				  />
				  <InputGroup.Button>
					<Button>Search</Button>
				  </InputGroup.Button>
				</InputGroup>
			  </FormGroup>
			</Col>
			<Col md="12" className="search-result">
				<Col md="4" className="search-item">
				  <Link to="/solution">
				  <Image src="/image/1.jpeg" alt="242x200" style={style}/>
				  <h3>E-SILOS</h3>
				  <p>Follow the curing process of concrete live. Optimize your production, assure your quality and reduce your costs.</p>
				  <hr/>
				  <div className="description">
					<p>Type: Solution</p>
					<p>Status: Available</p>
					<p>MADE BY: AGRUSDATA</p>
				  </div>
				  </Link>
				</Col>
			  <Col md="4" className="search-item">
				<Image src="/image/2.jpeg" alt="242x200" style={style}/>
				<h3>MATRIX IN-SITU</h3>
				<p>Follow the curing process of concrete live. Optimize your production, assure your quality and reduce your costs.</p>
				<hr/>
				<div className="description">
				  <p>Type: Solution</p>
				  <p>Status: Available</p>
				  <p>MADE BY: SENSOHIVE</p>
				</div>
			  </Col>
			  <Col md="4" className="search-item">
				<Image src="/image/3.jpeg" alt="242x200" style={style}/>
				<h3>MATRIX PRECAST</h3>
				<p>Follow the curing process of concrete live. Optimize your production, assure your quality and reduce your costs.</p>
				<hr/>
				<div className="description">
				  <p>Type: Solution</p>
				  <p>Status: Available</p>
				  <p>MADE BY: SENSOHIVE</p>
				</div>
			  </Col>
			  <Col md="4" className="search-item">
				<Image src="/image/1.jpeg" alt="242x200" style={style}/>
				<h3>E-SILOS</h3>
				<p>Follow the curing process of concrete live. Optimize your production, assure your quality and reduce your costs.</p>
				<hr/>
				<div className="description">
				  <p>Type: Solution</p>
				  <p>Status: Available</p>
				  <p>MADE BY: AGRUSDATA</p>
				</div>
			  </Col>
			  <Col md="4" className="search-item">
				<Image src="/image/2.jpeg" alt="242x200" style={style}/>
				<h3>MATRIX IN-SITU</h3>
				<p>Follow the curing process of concrete live. Optimize your production, assure your quality and reduce your costs.</p>
				<hr/>
				<div className="description">
				  <p>Type: Solution</p>
				  <p>Status: Available</p>
				  <p>MADE BY: SENSOHIVE</p>
				</div>
			  </Col>
			  <Col md="4" className="search-item">
				<Image src="/image/3.jpeg" alt="242x200" style={style}/>
				<h3>MATRIX PRECAST</h3>
				<p>Follow the curing process of concrete live. Optimize your production, assure your quality and reduce your costs.</p>
				<hr/>
				<div className="description">
				  <p>Type: Solution</p>
				  <p>Status: Available</p>
				  <p>MADE BY: SENSOHIVE</p>
				</div>
			  </Col>
			  <Col md="4" className="search-item">
				<Image src="/image/1.jpeg" alt="242x200" style={style}/>
				<h3>E-SILOS</h3>
				<p>Follow the curing process of concrete live. Optimize your production, assure your quality and reduce your costs.</p>
				<hr/>
				<div className="description">
				  <p>Type: Solution</p>
				  <p>Status: Available</p>
				  <p>MADE BY: AGRUSDATA</p>
				</div>
			  </Col>
			  <Col md="4" className="search-item">
				<Image src="/image/2.jpeg" alt="242x200" style={style}/>
				<h3>MATRIX IN-SITU</h3>
				<p>Follow the curing process of concrete live. Optimize your production, assure your quality and reduce your costs.</p>
				<hr/>
				<div className="description">
				  <p>Type: Solution</p>
				  <p>Status: Available</p>
				  <p>MADE BY: SENSOHIVE</p>
				</div>
			  </Col>
			  <Col md="4" className="search-item">
				<Image src="/image/3.jpeg" alt="242x200" style={style}/>
				<h3>MATRIX PRECAST</h3>
				<p>Follow the curing process of concrete live. Optimize your production, assure your quality and reduce your costs.</p>
				<hr/>
				<div className="description">
				  <p>Type: Solution</p>
				  <p>Status: Available</p>
				  <p>MADE BY: SENSOHIVE</p>
				</div>
			  </Col>
			</Col>
		  </Col>
		</Row>
	  </Grid>
	);
  }
}

export default Solutions;
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

import './Devices.scss';
import 'react-accessible-accordion/dist/minimal-example.css';

class Devices extends Component {
    render() {
	  const style = {
		position: "relative",
		height: "130px"
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
				  <AccordionItem className="filter-item">
					<AccordionItemTitle>
					  <h4>Battery Life</h4>
					</AccordionItemTitle>
					<AccordionItemBody className="filter-body">
					  <Checkbox>Less than 1 year</Checkbox>
					  <Checkbox>1 - 5 years</Checkbox>
					  <Checkbox>5 - 10 years</Checkbox>
					  <Checkbox>10+ years</Checkbox>
					</AccordionItemBody>
				  </AccordionItem>
				  <AccordionItem className="filter-item">
					<AccordionItemTitle>
					  <h4>Certification</h4>
					</AccordionItemTitle>
					<AccordionItemBody className="filter-body">
					  <Checkbox>Sertified</Checkbox>
					</AccordionItemBody>
				  </AccordionItem>
				</Accordion>
			  </Col>
			  <Col md="9" className="devices-list">
				<Col className="list-about">
				  <Row>
					<Col md="8">
					  <h2>Devices</h2>
					  <p>A device includes hardware system, ready to be used on a solution.</p>
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
					<Link to="/device">
					<Image src="/image/item1.jpeg" alt="242x200" style={style}/>
					<h3>LOKA PRIMIS (RC4)</h3>
					<p>LOKA’s first low cost / low power tracker, with expansion capabilities.</p>
					<hr/>
					<div className="description">
					  <p>Type: Device</p>
					  <p>Status: Available</p>
					  <p>MADE BY: LOCA</p>
					</div>
					</Link>
				  </Col>
				  <Col md="4" className="search-item">
					<Image src="/image/item2.jpeg" alt="242x200" style={style}/>
					<h3>LOKA PRIMIS (RC4)</h3>
					<p>LOKA’s first low cost / low power tracker, with expansion capabilities.</p>
					<hr/>
					<div className="description">
					  <p>Type: Device</p>
					  <p>Status: Available</p>
					  <p>MADE BY: LOCA</p>
					</div>
				  </Col>
				  <Col md="4" className="search-item">
					<Image src="/image/item3.jpeg" alt="242x200" style={style}/>
					<h3>LOKA PRIMIS (RC4)</h3>
					<p>LOKA’s first low cost / low power tracker, with expansion capabilities.</p>
					<hr/>
					<div className="description">
					  <p>Type: Device</p>
					  <p>Status: Available</p>
					  <p>MADE BY: LOCA</p>
					</div>
				  </Col>
				  <Col md="4" className="search-item">
					<Image src="/image/item1.jpeg" alt="242x200" style={style}/>
					<h3>LOKA PRIMIS (RC4)</h3>
					<p>LOKA’s first low cost / low power tracker, with expansion capabilities.</p>
					<hr/>
					<div className="description">
					  <p>Type: Device</p>
					  <p>Status: Available</p>
					  <p>MADE BY: LOCA</p>
					</div>
				  </Col>
				  <Col md="4" className="search-item">
					<Image src="/image/item2.jpeg" alt="242x200" style={style}/>
					<h3>LOKA PRIMIS (RC4)</h3>
					<p>LOKA’s first low cost / low power tracker, with expansion capabilities.</p>
					<hr/>
					<div className="description">
					  <p>Type: Device</p>
					  <p>Status: Available</p>
					  <p>MADE BY: LOCA</p>
					</div>
				  </Col>
				  <Col md="4" className="search-item">
					<Image src="/image/item3.jpeg" alt="242x200" style={style}/>
					<h3>LOKA PRIMIS (RC4)</h3>
					<p>LOKA’s first low cost / low power tracker, with expansion capabilities.</p>
					<hr/>
					<div className="description">
					  <p>Type: Device</p>
					  <p>Status: Available</p>
					  <p>MADE BY: LOCA</p>
					</div>
				  </Col>
				  <Col md="4" className="search-item">
					<Image src="/image/item1.jpeg" alt="242x200" style={style}/>
					<h3>LOKA PRIMIS (RC4)</h3>
					<p>LOKA’s first low cost / low power tracker, with expansion capabilities.</p>
					<hr/>
					<div className="description">
					  <p>Type: Device</p>
					  <p>Status: Available</p>
					  <p>MADE BY: LOCA</p>
					</div>
				  </Col>
				</Col>
			  </Col>
			</Row>
		  </Grid>
        );
    }
}

export default Devices;
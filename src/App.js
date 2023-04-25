import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import GaugeChart from './lib' 

const App = () => {
  const [currentPercent, setCurrentPercent] = useState();
  const [arcs, setArcs] = useState([0.5, 0.3, 0.2])

	useEffect(() => {
		const timer = setTimeout(() => {
      setCurrentPercent(Math.random());
      setArcs([0.1, 0.5, 0.4])
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	});

	const chartStyle = {
		height: 250,
	}

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={{ offset: 3, span: 6 }}>
            <h6>Average Engine Efficiency</h6>
            <GaugeChart style={chartStyle} />
          </Col>
        </Row>
        <Row>
         <Col xs={12} lg={6}>
            <GaugeChart
							style={chartStyle}
              nrOfLevels={30}
              colors={['#FF5F6D', '#FFC371']}
              arcWidth={0.3}
              percent={0.65}
            />
            <h6>Average Engine Load</h6>
          </Col>
          <Col xs={12} lg={6}>
            <GaugeChart
							id="gauge-chart4"
							style={chartStyle}
							nrOfLevels={10}
							arcPadding={0.1}
							cornerRadius={3}
							percent={0.6}
						/>
            <h6>Average Fuel Pressure</h6>
          </Col>
          <Col xs={12} lg={6}>
           
            <GaugeChart
              id="gauge-chart5"
							style={chartStyle}
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={0.37}
              arcPadding={0.02}
            />
            <h6>Average Coolant Temparature</h6>
          </Col>
          <Col xs={12} lg={6}>
            <GaugeChart
              id="gauge-chart8"
              style={chartStyle}
              nrOfLevels={30}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              arcWidth={0.3}
              percent={0.70}
              formatTextValue={value => value + 'rpm'}
             />
            <h6>Average Engine Speed</h6>
          </Col>
        </Row>
			
      </Container>
    </>
  )
};

export default App

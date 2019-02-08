import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList'
import ForecastExtended  from './components/ForecastExtended'
import './App.css';

const cities = [
  "Manzanillo,mx",
  "Colima,mx",
  "Guadalajara,mx",
  "Washington,us",
  "New York,us",
  "Chicago,us",
  "Madrid,es",
  "Buenos Aires,ar"
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      city : null
    }
  }

  handleSelectedLocation = city => {
    this.setState( { city } )
    console.log('handleSelectedLocation ', city);
  }

  render() {
    const {city} = this.state
    return (
      <Grid>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Weather App
          </Typography>
          </Toolbar>
        </AppBar>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper >
              <div className="details">
              { city 
                ? <ForecastExtended city={this.state.city} /> 
                : <h1>You need to select one city</h1>
              }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
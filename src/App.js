import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList'
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
  render() {
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
            <LocationList cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation='4'>
              <div className="details"></div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
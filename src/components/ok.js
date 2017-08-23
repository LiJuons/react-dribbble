import React, { Component } from 'react';
import { View, Grid, Row, Col } from 'react-flexbox-grid';

export default class Ok extends Component {

    render() {
        return (
          <Grid fluid>
            <Row>
              <Col xs={6}>
                asa
              </Col>
              <Col xs={6} md={3}>
                <p>Hello, world!</p>
              </Col>
            </Row>
          </Grid>

        );
    }
}

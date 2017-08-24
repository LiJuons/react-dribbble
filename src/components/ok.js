import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

export default class Ok extends Component {

    render() {
      return (
        <Grid>
          <Row>
            <Col xs={6} md={3}>Hello, world!</Col>
          </Row>
        </Grid>
      );
    }
}

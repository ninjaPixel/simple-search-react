import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.handleWatchMovieClick = this.handleWatchMovieClick.bind(this);
        
    }
    
    handleWatchMovieClick(event) {
        analytics.track('Watch movie button clicked', {title: this.props.movie.title});
    }
    
    render() {
        return (
          <Row>
              <Col xs={12} sm={6}>
                  <h1>{this.props.movie.title}</h1>
                  <p>{this.props.movie.detailedPlot}</p>
                  <Button  bsStyle="primary" onClick={this.handleWatchMovieClick}>Watch movie</Button>
              </Col>
          </Row>
        );
    }
}


Movie.propTypes = {
    movie: React.PropTypes.object,
};

export default Movie;
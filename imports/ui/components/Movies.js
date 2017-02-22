import React from 'react';
import { Alert, Row, Col, Panel, FormControl, Image, Button } from 'react-bootstrap';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: null };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNewsletterButtonClick = this.handleNewsletterButtonClick.bind(this);
  }

  handleSearch(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
    this.props.searchQuery.set(searchTerm);
  }
  
  handleNewsletterButtonClick(event){
    analytics.track('Newsletter button clicked',{label:'Hello',value:'World!'});
  }

  render() {
    const { movies } = this.props;
    console.log('movies',movies)
    return (<div className="Movies">
      <Button bsStyle="primary" onClick={this.handleNewsletterButtonClick} className="NewsletterButton">Sign up for our newsletter</Button>
      <div className="MovieSearch">
        <i className="fa fa-search" />
        <FormControl
          type="search"
          onKeyUp={ this.handleSearch }
          placeholder="What do you want to watch?"
          className="Search"
        />
      </div>
      <div className="Movies-list">
        { movies.length > 0 ? movies.map(({ title, year, rated, plot, poster, _id }) => (
          <Panel key={_id} header={`${title} - ${year}`}>
            <Row>
              <Col xs={ 12 } sm={ 3 }>
                <Image src={ poster } alt={ title } responsive />
              </Col>
              <Col xs={ 12 } sm={ 9 }>
                <p><strong>Rated:</strong> { rated }</p>
                <p>{ plot }</p>
              </Col>
            </Row>
          </Panel>
        )) : <Alert>Sorry, goober. No movies found for '{ this.state.searchTerm }.'</Alert> }
      </div>
    </div>);
  }
}

Movies.propTypes = {
  movies: React.PropTypes.array,
  searchQuery: React.PropTypes.object,
};

export default Movies;

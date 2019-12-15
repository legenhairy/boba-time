import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import BobaList from '../components/BobaList/BobaList';

class ResultsPage extends Component {
  
  constructor(props) {
  	super(props);
  	this.state = {
  	  shops: [] /*when the results page loads, we have the list of shops at that location*/	
  	}
  }

  componentDidMount() {
    /*in here, we will fetch the list of shops based on location */
  }


  render() {
  	return (
	  	<div>
	  	  <BobaList />
		    <Map
		  	  google={this.props.google}	
		  	  zoom={8}
		  	  style={mapStyles}	
		  	  initialCenter={{ lat: 37.774, lng: -122.393}}	
		    />	  
  		</div>
  	);
  }
}

const mapStyles = {
  width: '50%',
  height: '50%'
}

export default GoogleApiWrapper({apiKey: process.env.mapKey})(ResultsPage);
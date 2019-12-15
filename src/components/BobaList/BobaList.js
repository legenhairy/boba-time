import React from 'react';

class BobaList extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  bobaArr: []
  	}
  }

  render() {
  	return (
  	  <div className='boba-container'>
  	  	<p>Here we will render a boba item</p>
  	  </div>
  	);
  }

}

export default BobaList;
import React, {Component} from 'react';
import YellowTShirtForm from '../../components/yellowTShirts/YellowTShirtForm.js'
import Request from '../../helpers/request.js';

class YellowTShirtFormContainer extends Component {
  constructor(props){
    super(props);

    this.handleYellowTShirtPost = this.handleYellowTShirtPost.bind(this);
  }

  handleYellowTShirtPost(yellowTShirt) {
    const request = new Request();
    request.post('/api/yellowTShirts', yellowTShirt).then(() => {
      window.location = '/yellowTShirts'
    })
  }

  render() {
    return <YellowTShirtForm handleYellowTShirtPost={this.handleYellowTShirtPost}/>
  }
}

export default YellowTShirtFormContainer;

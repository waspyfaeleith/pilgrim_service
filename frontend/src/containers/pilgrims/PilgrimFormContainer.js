import React, {Component} from 'react';
import PilgrimForm from '../../components/pilgrims/PilgrimForm.js'
import Request from '../../helpers/request.js';

class PilgrimFormContainer extends Component {
  constructor(props){
    super(props);

    this.handlePilgrimPost = this.handlePilgrimPost.bind(this);
  }

  handlePilgrimPost(pilgrim) {
    const request = new Request();
    request.post('/api/pilgrims', pilgrim).then(() => {
      window.location = '/pilgrims'
    })
  }

  render() {
    return <PilgrimForm handlePilgrimPost={this.handlePilgrimPost}/>
  }
}

export default PilgrimFormContainer;

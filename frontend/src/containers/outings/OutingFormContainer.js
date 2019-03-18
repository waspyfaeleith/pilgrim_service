import React, {Component} from 'react';
import OutingForm from '../../components/outings/OutingForm.js'
import Request from '../../helpers/request.js';

class OutingFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {pilgrims: [], helpers: []};

    this.handleOutingPost = this.handleOutingPost.bind(this);
  }

  componentDidMount(){
    let pilgrims = [];
    let helpers = [];
    let request = new Request()
    request.get('/api/pilgrims').then((data) => {
      pilgrims = data._embedded.pilgrims;
      request.get('/api/yellowTShirts/').then((data) => {
        helpers = data._embedded.yellowTShirts;
        this.setState({pilgrims: pilgrims, helpers: helpers});
      })
    })
  }

  handleOutingPost(outing) {
    const request = new Request();
    request.post('/api/outings', outing).then(() => {
      window.location = '/outings'
    })
  }

  render() {
    console.log("Pilgrims:",this.state.pilgrims);
    console.log("Helpers:",this.state.helpers);
    return <OutingForm pilgrims={this.state.pilgrims} helpers={this.state.helpers} handleOutingPost={this.handleOutingPost}/>
  }
}

export default OutingFormContainer;

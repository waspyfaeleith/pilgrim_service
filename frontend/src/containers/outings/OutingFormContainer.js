import React, {Component} from 'react';
import OutingForm from '../../components/outings/OutingForm.js'
import Request from '../../helpers/request.js';

class OutingFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {pilgrims: [], yellowTShirts: []};

    this.handleOutingPost = this.handleOutingPost.bind(this);
  }

  componentDidMount(){
    let pilgrims = [];
    let yellowTShirts = [];
    let request = new Request()
    request.get('/api/pilgrims').then((data) => {
      pilgrims = data._embedded.pilgrims;
      request.get('/api/yellowTShirts/').then((data) => {
        yellowTShirts = data._embedded.yellowTShirts;
        this.setState({pilgrims: pilgrims, yellowTShirts: yellowTShirts});
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
    return <OutingForm pilgrims={this.state.pilgrims} yellowTShirts={this.state.yellowTShirts} handleOutingPost={this.handleOutingPost}/>
  }
}

export default OutingFormContainer;

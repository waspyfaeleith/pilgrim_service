import React, {Component} from 'react';
import PilgrimList from '../../components/pilgrims/PilgrimList.js';

import Request from '../../helpers/request.js';

class PilgrimListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {pilgrims: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/pilgrims').then((data) => {
      this.setState({pilgrims: data._embedded.pilgrims})
    })
  }


  render(){
    return (
     <PilgrimList pilgrims = {this.state.pilgrims} />
    )
  }
}

export default PilgrimListContainer;

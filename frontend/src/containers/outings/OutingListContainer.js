import React, {Component} from 'react';
import OutingList from '../../components/outings/OutingList.js';

import Request from '../../helpers/request.js';

class OutingListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {outings: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/outings').then((data) => {
      this.setState({outings: data._embedded.outings})
    })
  }


  render(){
    return (
      <OutingList outings = {this.state.outings} />
    )
  }
}

export default OutingListContainer;

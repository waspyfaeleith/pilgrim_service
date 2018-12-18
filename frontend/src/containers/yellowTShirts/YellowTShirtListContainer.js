import React, {Component} from 'react';
import YellowTShirtList from '../../components/yellowTShirts/YellowTShirtList.js';

import Request from '../../helpers/request.js';

class YellowTShirtListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {yellowTShirts: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/yellowTShirts').then((data) => {
      this.setState({yellowTShirts: data._embedded.yellowTShirts})
    })
  }


  render(){
    return (
     <YellowTShirtList yellowTShirts = {this.state.yellowTShirts} />
    )
  }
}

export default YellowTShirtListContainer;

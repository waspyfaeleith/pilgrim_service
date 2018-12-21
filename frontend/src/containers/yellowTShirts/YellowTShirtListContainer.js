import React, {Component, Fragment} from 'react';
//import YellowTShirtList from '../../components/yellowTShirts/YellowTShirtList.js';
import YellowTShirtGroupContainer from './YellowTShirtGroupContainer.js';

import Request from '../../helpers/request.js';

class YellowTShirtListContainer extends Component {
  constructor(props){
    super(props);
    //this.state = {yellowTShirts: []}
  }

  // componentDidMount(){
  //   let request = new Request()
  //   request.get('/api/yellowTShirts').then((data) => {
  //     this.setState({yellowTShirts: data._embedded.yellowTShirts})
  //   })
  // }


  render(){
    return (
     <Fragment>
        <YellowTShirtGroupContainer group = "S"/>
        <YellowTShirtGroupContainer className = "groupList" group = "D"/>
        <YellowTShirtGroupContainer className = "groupList" group = "L"/>
     </Fragment>
    )
  }
}

export default YellowTShirtListContainer;

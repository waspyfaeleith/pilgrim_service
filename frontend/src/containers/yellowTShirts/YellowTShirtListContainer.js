import React, {Component, Fragment} from 'react';
//import YellowTShirtList from '../../components/yellowTShirts/YellowTShirtList.js';
import YellowTShirtGroupContainer from './YellowTShirtGroupContainer.js';

class YellowTShirtListContainer extends Component {
  // constructor(props){
  //   super(props);
  //   //this.state = {yellowTShirts: []}
  // }

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
          <div className = "groupList lGroup">
            <YellowTShirtGroupContainer  group = "D"/>
          </div>
          <div className = "groupList">
            <YellowTShirtGroupContainer group = "L"/>
          </div>
     </Fragment>
    )
  }
}

export default YellowTShirtListContainer;

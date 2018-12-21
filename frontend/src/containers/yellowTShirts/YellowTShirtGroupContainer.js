import React, {Component, Fragment} from 'react';
import Request from '../../helpers/request.js';
import YellowTShirtList from '../../components/yellowTShirts/YellowTShirtList.js';

class YellowTShirtGroupContainer extends Component {
  constructor(props){
    super(props);
    this.state = {yellowTShirts: []}
  }

  componentDidMount(){
    let request = new Request()
    let url = '/api/yellowTShirts/group/'+ this.props.group;
    request.get(url).then((data) => {
      console.log("data:", data)
      this.setState({yellowTShirts: data})
    })
  }

  render() {
     return(
        <Fragment>
          <h3>{this.props.group} Group</h3>
          <YellowTShirtList yellowTShirts = {this.state.yellowTShirts} />
        </Fragment>
     )
   }

}

export default YellowTShirtGroupContainer;

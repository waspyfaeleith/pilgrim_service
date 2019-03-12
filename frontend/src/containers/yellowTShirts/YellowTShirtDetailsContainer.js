import React, {Component} from 'react';
import YellowTShirtDetails from '../../components/yellowTShirts/YellowTShirtDetails.js'
import Request from '../../helpers/request.js';

class YellowTShirtDetailsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {yellowTShirt: null}
  }

  componentDidMount(){
    if (!this.props.match.params) {
      return null;
    }
    console.log("id:", this.props.match.params.id);
    let request = new Request()
    let url = '/api/yellowTShirts/'+ this.props.match.params.id;
    request.get(url).then((data) => {
      console.log("data:", data)
      this.setState({yellowTShirt: data})
    })
  }

  render() {
    return <YellowTShirtDetails yellowTShirt={this.state.yellowTShirt}/>
  }
}

export default YellowTShirtDetailsContainer;

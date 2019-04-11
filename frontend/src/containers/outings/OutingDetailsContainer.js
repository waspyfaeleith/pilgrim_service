import React, {Component} from 'react';
import OutingDetails from '../../components/outings/OutingDetails.js'
import Request from '../../helpers/request.js';

class OutingDetailsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {outing: null};

    this.handleOutingUpdate = this.handleOutingUpdate.bind(this);
  }

  componentDidUpdate() {
    console.log("UPDATED");
  }

  componentDidMount() {
    console.log("Mounted!");
    console.log("props:", this.props);
    if (!this.props.match.params) {
      return null;
    }
    console.log("id:", this.props.match.params.id);
    let request = new Request()
    let url = '/api/outings/'+ this.props.match.params.id +'?projection=embedAllFromOuting';
    request.get(url).then((data) => {
      console.log("data:", data)
      this.setState({outing: data})
    })
    console.log("URL:", url);
  }

  handleOutingUpdate() {
    // const request = new Request();
    // request.post('/api/outings/', yellowTShirt).then(() => {
    //   window.location = '/outings'
    // })
    console.log("marking outing returned:", this.state.outing.id);
    let outing = this.state.outing;
    outing.timeIn = new Date();
    console.log(outing);
    const request = new Request();
    let url = '/api/outings/'+ this.state.outing.id + '/markReturned';
    request.get(url).then((data) => {
        console.log("data:", data)
        window.location = '/outings';
        //this.setState({outing: data})
      })

    // request.post('/api/outings/', outing).then(() => {
    //   this.setState({outing: outing})
      //window.location = '/outings'
    //})
  }

  render() {
    //console.log("State:", this.state);
    // console.log("Outing:", this.state.outing);
    return <OutingDetails outing={this.state.outing} handleOutingUpdate={this.handleOutingUpdate}/>
  }
}

export default OutingDetailsContainer;

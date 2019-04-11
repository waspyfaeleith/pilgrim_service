import React, {Component} from 'react';
import OutingForm from '../../components/outings/OutingForm.js'
import Request from '../../helpers/request.js';

class OutingFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      pilgrims: [],
      yellowTShirts: [],
      currentPilgrim: null,
      currentYellowTShirts:[]
    };

    this.handlePilgrimSelected = this.handlePilgrimSelected.bind(this);
    this.handleYellowTShirtSelected = this.handleYellowTShirtSelected.bind(this);
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

  handlePilgrimSelected(index) {
    console.log("Pilgrims: ", this.state.pilgrims);
    const selectedPilgrim = this.state.pilgrims[index];
    this.setState({currentPilgrim: selectedPilgrim})
  }

  // handleYellowTShirtSelected(index) {
  //   console.log("Yellow T Shirts: ", this.state.yellowTShirts);
  //   const selectedYellowTShirt = this.state.yellowTShirts[index];
  //   let selectedYellowTShirts = this.state.currentYellowTShirts;
  //   console.log("Selecting:", selectedYellowTShirt)
  //   selectedYellowTShirts.push(selectedYellowTShirt._links.self.href)
  //   this.setState({currentYellowTShirts: selectedYellowTShirts})
  // }
  handleYellowTShirtSelected(values) {
    console.log("selected: ", values);
    let selectedYellowTShirts = [];
    for (var index of values) {
      const selectedYellowTShirt = this.state.yellowTShirts[parseInt(index)];
      selectedYellowTShirts.push(selectedYellowTShirt._links.self.href);
    }
    this.setState({currentYellowTShirts: selectedYellowTShirts})
  }


  handleOutingPost() {
    console.log("handleOutingPost");
    const outing = {
        "pilgrim": this.state.currentPilgrim._links.self.href,
        "yellowTShirts": this.state.currentYellowTShirts
      }
      console.log("Creating outing:", outing);
    const request = new Request();
    request.post('/api/outings', outing).then(() => {
      window.location = '/outings'
    })
  }

  render() {
    //console.log("Pilgrims:",this.state.pilgrims);
    //console.log("Helpers:",this.state.helpers);
    return <OutingForm pilgrims={this.state.pilgrims} yellowTShirts={this.state.yellowTShirts}
    onPilgrimSelected={this.handlePilgrimSelected} onYellowTShirtSelected={this.handleYellowTShirtSelected} handleOutingPost={this.handleOutingPost}/>
  }
}

export default OutingFormContainer;

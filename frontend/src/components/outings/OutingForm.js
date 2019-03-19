import React, {Component} from 'react';
import PilgrimSelector from '../pilgrims/PilgrimSelector'
import YellowTShirtSelector from '../yellowTShirts/YellowTShirtSelector'

class OutingForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("SUBMITTING FORM!!!")
    this.props.handleOutingPost();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <PilgrimSelector pilgrims={this.props.pilgrims} onPilgrimSelected={this.props.onPilgrimSelected}/>
        <YellowTShirtSelector yellowTShirts={this.props.yellowTShirts} onYellowTShirtSelected={this.props.onYellowTShirtSelected}/>
        <input type="submit" value="Save" />
      </form>
  )}

}

export default OutingForm;

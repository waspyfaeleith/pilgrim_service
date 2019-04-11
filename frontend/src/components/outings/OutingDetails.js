import React, {Component} from 'react';
import DateFromSQLDate from '../helpers/DateFromSQLDate.js';
import TimeFromSQLDate from '../helpers/TimeFromSQLDate.js';
import YellowTShirtList from '../yellowTShirts/YellowTShirtList.js'

class OutingDetails extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log("MOUNTED! props:", this.props);
    if (!this.props.outing) {
      return null;
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleOutingUpdate();
  }

  render() {

    if (!this.props.outing) {
      return null;
    } else {
      console.log("Outing:", this.props.outing);
    return (
      <React.Fragment>
        <p> Date: <DateFromSQLDate dateTime={this.props.outing.timeOut.to}/></p>
        <p>Pilgrim: {this.props.outing.pilgrim.name}</p>
        Out With: <YellowTShirtList yellowTShirts = {this.props.outing.yellowTShirts} />
        <p> Time Out: <TimeFromSQLDate dateTime={this.props.outing.timeOut}/></p>
        <p> Time In: <TimeFromSQLDate dateTime={this.props.outing.timeIn}/></p>
        <form onSubmit={this.handleSubmit}>
            <button type="submit">Mark Returned</button>
        </form>
      </React.Fragment>
    )
  }
  }
}

export default OutingDetails;

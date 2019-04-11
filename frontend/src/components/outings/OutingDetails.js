import React, {Component} from 'react';
import DateFromSQLDate from '../helpers/DateFromSQLDate.js';
import TimeFromSQLDate from '../helpers/TimeFromSQLDate.js';
import YellowTShirtNameList from '../yellowTShirts/YellowTShirtNameList.js'
import MarkReturnedForm from './MarkReturnedForm.js'

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
      let returned;
      if (this.props.timeIn) {
        returned = <TimeFromSQLDate status="In" dateTime={this.props.outing.timeIn}/>
      } else {
        returned =   <MarkReturnedForm handleSubmit={this.handleSubmit}/>
      }
      console.log("Outing:", this.props.outing);
      return (
        <React.Fragment>
          <p> Date: <DateFromSQLDate dateTime={this.props.outing.timeOut}/></p>
          <p>Pilgrim: {this.props.outing.pilgrim.name}</p>
          Out With: <YellowTShirtNameList yellowTShirts = {this.props.outing.yellowTShirts} />
          <p><TimeFromSQLDate status="Out" dateTime={this.props.outing.timeOut}/></p>
          <p>
            {returned}
          </p>


      </React.Fragment>
    )
  }
  }
}

export default OutingDetails;

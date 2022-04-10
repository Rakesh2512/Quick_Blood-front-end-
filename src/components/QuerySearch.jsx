import React, { Component, } from 'react';
import axios from 'axios';


class QuerySearch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          bloodgroup:"",
          location:"",
          donar:[]
      }
      this.chaangeHandle=this.chaangeHandle.bind(this)
      this.retriveWelcomeMessage=this.retriveWelcomeMessage.bind(this)

    }
    retriveWelcomeMessage(e){
        const query=this.state
        console.log(query)
         axios.get("http://localhost:9091/donar/"+this.state.bloodgroup+"/"+this.state.location,).then(rep=>{
             console.log(rep)
             this.setState({donar:rep.data})
         })
    }
    chaangeHandle(event){
        this.setState({
           [event.target.name]:event.target.value
        })
    }
    
  render() {

    return (
        <>
          <div className="bd">
                   <div className="row">
                       <div className="col-lg-6">
                            <div className="sidebar2">
                            <table className="styled-table">
                                <tr>
                                    <td>BloodGroup:</td>
                                    <td><input type="text" name="bloodgroup" value={this.state.bloodgroup} onChange={this.chaangeHandle}/></td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td><input type="text" name="location" value={this.state.location} onChange={this.chaangeHandle}/></td>
                                </tr>
                                <tr>
                                    <td><button onClick={this.retriveWelcomeMessage}>Get Required List</button></td>
                                    <td></td>
                                </tr>
                            </table>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sidebar1">
                                <p className="tx">Required Donor List</p>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Bloodgroup</th>
                                            <th>Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.donar.map(
                                                donar=>
                                                <tr key={donar.id}>
                                                    <td>{donar.id}</td>
                                                    <td>{donar.name}</td>
                                                    <td>{donar.age}</td>
                                                    <td>{donar.bloodgroup}</td>
                                                    <td>{donar.location}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
  }

}

export default QuerySearch;

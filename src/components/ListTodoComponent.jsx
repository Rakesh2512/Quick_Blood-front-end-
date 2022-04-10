import React,{Component} from "react"
import AuthenticatedSerivce from "./AuthenticatedSerivce"
import QuickBloodDataSevice from "./QuickBloodDataSevice"
import './Home.css';
import axios from "axios"

class ListTodoComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         age:0,
         bloodgroup:"",
         location:"",
         mobile:"",
         posts: [],
      }
      this.changeMethod=this.changeMethod.bind(this)
      this.registerData=this.registerData.bind(this)
    }
    changeMethod(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    registerData(){
        console.log(this.state)
        axios.post("http://localhost:9091/donar",this.state).then(response=>{
            console.log(response)
            this.props.navigate("/welcome/:name")
        })
    }
    componentDidMount() {
        axios.get("http://localhost:9091/alldonar").then(rep=>{
             console.log(rep)
             this.setState({posts:rep.data})
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
                                    <td>Name:</td>
                                    <td><input name="name" type={this.state.name} onChange={this.changeMethod}></input></td>
                                </tr>
                                <tr>
                                    <td>Age:</td>
                                    <td><input name="age" type={this.state.age} onChange={this.changeMethod}></input></td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td><input name="location" type={this.state.location} onChange={this.changeMethod}></input></td>
                                </tr>
                                <tr>
                                    <td>Contact:</td>
                                    <td><input name="mobile" type={this.state.mobile} onChange={this.changeMethod}></input></td>
                                </tr>
                                <tr>
                                    <td>Blood Group:</td>
                                    <td><input name="bloodgroup" type={this.state.bloodgroup} onChange={this.changeMethod}></input></td>
                                </tr>
                                <tr>
                                    <td><button  onClick={this.registerData}>Donate</button></td>
                                    <td></td>
                                </tr>
                            </table>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sidebar1">
                                <p className="tx">Thank You for Register</p>
                                <div className="table1">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Age</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.posts.map(
                                                    alldonar=>
                                                    <tr className="tr1" key={alldonar.id}>
                                                        <td><b><h3>{alldonar.name}</h3></b></td>
                                                        <td><b><h3>{alldonar.age}</h3></b></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )        
    }
}
export default ListTodoComponent
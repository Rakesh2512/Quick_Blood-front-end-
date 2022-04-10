import React,{Component} from "react"

class ListTodoComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todos:[
             {id:1,description:'learn react'},
             {id:2,description:'learn react'},
             {id:3,description:'learn react'}
         ]
      }
    }
    
    render() {
        return (
            <div></div>
        )        
    }
}
export default ListTodoComponent
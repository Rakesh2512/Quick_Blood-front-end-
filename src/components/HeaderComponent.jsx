import React,{Component} from "react"
import {Link} from "react-router-dom"
import AuthenticatedSerivce from "./AuthenticatedSerivce"
class HeaderComponent extends Component {
    
    render() {
        const isUserLogged=AuthenticatedSerivce.isUserLoggedIn()
        console.log(isUserLogged)
        return (
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a className='navbar-brand'>QuickBlood</a></div>
                    <ul className='navbar-nav'>
                        {isUserLogged &&<li ><Link className='nav-link' to="/welcome/gokul">Home</Link></li>}
                        {isUserLogged && <li ><Link className='nav-link' to="/todos">Want To donate</Link></li>}
                        {isUserLogged && <li ><Link className='nav-link' to="/query">Looking For Blood</Link></li>}
                        {isUserLogged && <li ><Link className='nav-link' to="/about">About</Link></li>}


                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        {!isUserLogged &&<li ><Link className='nav-link' to="/login">Login</Link></li>}
                        {isUserLogged &&<li ><Link className='nav-link' to="/logout" onClick={AuthenticatedSerivce.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )        
    }
}
export default HeaderComponent
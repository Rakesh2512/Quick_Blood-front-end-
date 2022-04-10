import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'

import withNavigation from './WithNavigation';
import withParams from './WithParms';
import AuthenticationRoute from './AuthenticationRoute';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import ListTodoComponent from './ListTodoComponent';
import FooterComponent from './FooterComponent';
import QuerySearch from './QuerySearch';
import Sucessful from './Sucessful';
import About from './About';
class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);

        const ListTodoWithNavigation = withNavigation(ListTodoComponent);

        const WelcomeComponentWithParams = withParams(WelcomeComponent);

        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<AuthenticationRoute>
                            <WelcomeComponentWithParams/>
                        </AuthenticationRoute>}/>
                        <Route path="/todos" element={<AuthenticationRoute>
                            <ListTodoWithNavigation/>
                        </AuthenticationRoute>}/> 
                        <Route path="/query" element={<AuthenticationRoute>
                            <QuerySearch/>
                        </AuthenticationRoute>}/> 
                        <Route path="/about" element={<AuthenticationRoute>
                            <About/>
                        </AuthenticationRoute>}/> 
                        <Route path="/sucess" element={<AuthenticationRoute>
                            <Sucessful/>
                        </AuthenticationRoute>}/>
                        <Route path="/logout" element={<LogoutComponent/>}/>
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                   <FooterComponent/>
                </Router>
            </div>
        )
    }
}



function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}



// class HeaderComponent extends Component {
    
//     render() {
//         const isUserLogged=AuthenticatedSerivce.isUserLoggedIn()
//         console.log(isUserLogged)
//         return (
//             <header>
//                 <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
//                     <div><a className='navbar-brand'>QuickBlood</a></div>
//                     <ul className='navbar-nav'>
//                         {isUserLogged &&<li ><Link className='nav-link' to="/welcome/gokul">Home</Link></li>}
//                         {isUserLogged && <li ><Link className='nav-link' to="/todos">Todos</Link></li>}
//                     </ul>
//                     <ul className='navbar-nav navbar-collapse justify-content-end'>
//                         {!isUserLogged &&<li ><Link className='nav-link' to="/login">Login</Link></li>}
//                         {isUserLogged &&<li ><Link className='nav-link' to="/logout" onClick={AuthenticatedSerivce.logout}>Logout</Link></li>}
//                     </ul>
//                 </nav>
//             </header>
//         )        
//     }
// }



export default TodoApp

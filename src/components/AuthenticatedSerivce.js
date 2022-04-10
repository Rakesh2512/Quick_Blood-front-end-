class AuthenticatedService{
    registrationSucessfulLogin(username,password){
        console.log("registrationSucessfulLogin")
        sessionStorage.setItem("AuthenticatedUser",username);
        
        
    }
    logout(){
        sessionStorage.removeItem('AuthenticatedUser');
    }
    isUserLoggedIn(){
        let user= sessionStorage.getItem("AuthenticatedUser")
        console.log("clarify")
        if(user===null) return false;
        return true;
    }

}
export default  new AuthenticatedService()
function LoginComponent(){
  function onSignClick(e){
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const email = emailInput.value;
    const password = passwordInput.value;
    if(email =="codergsk@gmail.com" && password =="12345"){
      //login
      localStorage.setItem("loggedIn",true);
      window.location.href ="/";
    }else{
      alert("Email and password are wrong");
    }
  }
    return<div>Login
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={onSignClick}>Submit</button>
</form>
    </div>
}

export default LoginComponent;
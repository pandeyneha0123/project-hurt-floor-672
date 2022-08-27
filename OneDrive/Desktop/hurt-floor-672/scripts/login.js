function openLogin() {
    var div = document.getElementById("loginContainer");
    div.style.visibility = "visible";
  }
  function closeLogin() {
    var div = document.getElementById("loginContainer");
    var login = document.getElementById("login");
    var content = `
    <div class="login__cross">
    <button onclick="closeLogin()">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>
  </div>
  <img
    src="https://static.cure.fit/assets/images/curefit_login_logo.svg"
    alt="logo"
  />
  <img
    src="https://static.cure.fit/assets/images/curefit-name.svg"
    alt="name"
  />
  <input type="phone" placeholder="Enter your phone number" />
  <button class="login__continueBtn">Continue</button>
  <li>
    By Continuing you agree to the
    <em style="color: red">Terms of Services</em> and
    <em style="color: red">Privacy policy</em>.
  </li>
  <button class="login__google" onclick="changelayout()">
    Continue with <i class="fa fa-google" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <i class="fa fa-envelope-o" aria-hidden="true"></i>
  </button>
    `;


    login.innerHTML = content;
    div.style.visibility = "hidden";
  }
  function changelayout() {
    var div = document.getElementById("login");
    var content = `
    <div class="login__cross">
      <button onclick="closeLogin()">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <img
      src="https://static.cure.fit/assets/images/curefit_login_logo.svg"
      alt="logo"
    />
    <img
      src="https://static.cure.fit/assets/images/curefit-name.svg"
      alt="name"
    />
    <button  class=" google login__options" style="margin: 10px auto" >
      <img
        src="https://static.cure.fit/assets/images/google-new.svg"
        alt="google"
      />
      <h4 style="color: white">Sign in with Google</h4>
    </button>
    <button class="facebook login__options" style="margin: 10px auto">
      <img
        src="https://static.cure.fit/assets/images/facebook-new.svg"
        alt="facebook"
      />
      <h4 style=" color: white">Sign in with Facebook</h4>
    </button>
    <button class="login__options" style="color: black ; margin: 10px auto" >
      <img
        src="https://static.cure.fit/assets/images/mail-new.svg"
        alt="email"
      />
      <h4>Sign in with email</h4>
    </button>
    <button class="login__options" id="signUp__btn" style="color: black ; margin: 10px auto"  onclick="signUp()">
      <img
        src="https://static.cure.fit/assets/images/user-new.svg"
        alt="signUp"
      />
      <h4>Create new account</h4>
    </button>
    `;


    div.innerHTML = content;
  }
//   document.getElementById("signUp_btn").addEventListener("click",signUp);

  function signUp() {
    var div = document.getElementById("login");

    var content = `
    <div class="signUp__back" >
    <button onclick="changelayout()"><i class="fa fa-chevron-left" aria-hidden="true" style="color: "#fd306b""></i></button>
    </div>
    <h1>Create an account</h1>    
    
    <input class="signUp__inputs" id="username" type="text" placeholder="Name" required /> <br><br>
    <input class="signUp__inputs" id="gender" type="text" placeholder="Gender" required /><br><br>
    <input class="signUp__inputs" id="phone" type="phone" placeholder="Phone" required /><br><br>
    <input class="signUp__inputs" id="email" type="text" placeholder="Email Id" required /> <br><br>
  
    <input class="signUp__inputs" id="dob" placeholder="Date of Birth" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" required /> <br><br>
    <input class="signUp__inputs" id="password" type="password" placeholder="Password" required />
    
    
    <p> <input type="checkbox"  class="checkbox" id="checkbox" required> By Continuing you agree to the
      <em style="color: red">Terms of Services</em> and
      <em style="color: red">Privacy policy</em>.</p>
      <button class="signUp__button" onclick="createUser()" > Create </button>
    `;

    div.innerHTML = content;
  }

  function createUser() {
    var username= document.getElementById('username').value.trim();
    var email= document.getElementById('email').value.trim();
    var password= document.getElementById('password').value.trim();
    var phone= document.getElementById('phone').value.trim();
  var checkbox= document.getElementById('checkbox').checked;
  var gender= document.getElementById('gender').value.trim();
  var dob= document.getElementById('dob').value.trim();
  // console.log(checkbox, typeof(checkbox))
if(username == "" || password == "" || phone == "" || email == "" || gender == "" && dob == ""){
  alert("Please fill all the values")
  return
}
    if(phone.split("").length !== 10){
      alert('Please enter valid Phone number');
      return
    }

    if(checkbox == false){
      alert('Please check the terms and conditions')
      return
    }
  


    var user = {};
    user.username = username;
    user.email = email;
    user.password = password;
    user.phone= phone;
    user.gender = gender;
    user.dob=dob;


    var data = JSON.parse(localStorage.getItem("data"));
    console.log(typeof(data),data);


    if(data == null){
    data=[user];
    }
    else{
      data.push(user);
    }
    console.log(data)
    localStorage.setItem("data",  JSON.stringify(data));
    localStorage.setItem("user",  JSON.stringify(user));

    window.location.href='/pages/loggedIn.html'


  }

  function login(){
    var number = document.getElementById("userphone").value;
    var data = JSON.parse(localStorage.getItem("user"));

if(data.phone === number){
  window.location.href='/pages/loggedIn.html'
}

else{
  alert("User not found");
return
}



  }
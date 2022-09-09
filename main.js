// Menu
function openMenu() {
    const btn = document.getElementById("menuContent").style.display = "initial";
    if (document.getElementById("menuContent").style.display = "intial") {
      return document.getElementById("Switch").style.display = "none"
    }   
}

function closeMenu() {
    const btn = document.getElementById("menuContent").style.display = "none";
    if (document.getElementById("menuContent").style.display = "none") {
      return document.getElementById("Switch").style.display = "initial"
    }   
}

// Market Menu.....
function Market() {
  const btn = document.getElementById("MarketMen").style.display = "initial";
}

function closeMarket() {
  const btn = document.getElementById("MarketMen").style.display = "none";
}
// Market Menu.....


// Menu

// RegForm
function signUp() {
    const btn = document.getElementById("Register").style.display = "none";
    if (document.getElementById("Register").style.display = "none") {
      return document.getElementById("Login").style.display = "none"
    }
}

function Login() {
  const btn = document.getElementById("Register").style.display = "none";
  if (document.getElementById("Register").style.display = "none") {
    return document.getElementById("SignUp").style.display = "none"
  }
}
// RegForm


// SignUp Form
function Submit() {
    const btn = document.getElementById("SignUp").style.display = "none";
}
// SignUp Form

// Login
function SignIn() {
  const btn = document.getElementById("Login").style.display = "none";
}

// LoaderAnimation
const myTimeout = setTimeout(myLoader, 1000);

function myLoader() {
  document.getElementById("Loader").style.display = "none";
}
// LoaderAnimation

// DocSetup 

  function DocGen() {
    const btn = document.getElementById("DocSetup").style.display = "initial";
    if (document.getElementById("DocSetup").style.display = "initial") {
      return document.getElementById("Main").style.display = "none";
    }
  }


// DocSetup


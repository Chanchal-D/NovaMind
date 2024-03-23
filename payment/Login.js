const form = document.getElementById('SingUp')
const form1 = document.getElementById('login')
const error=document.getElementById('formerror')
form.addEventListener('submit', registerUser)
form1.addEventListener('submit', login1)

var x = document.getElementById("login");
var y = document.getElementById("SingUp");
var z = document.getElementById("btn");
var log = document.getElementById('log')
var reg = document.getElementById('reg')
var hom = document.getElementById('home')
hom.style.height = "430px"
log.style.textDecoration = "underline"
reg.style.textDecoration = "none"
function SingUp() {
     hom.style.height = "680px"
     log.style.textDecoration = "none"
     reg.style.textDecoration = "underline"
     x.style.left = "-400px";
     y.style.left = "50px";
     z.style.left = "110px";
}
function login() {
     hom.style.height = "430px"
     log.style.textDecoration = "underline"
     reg.style.textDecoration = "none"
     x.style.left = "50px";
     y.style.left = "450px";
     z.style.left = "0x";
}
function seterror(error) {
     document.getElementById('formerror').innerHTML = error;
}

function svalidation() {
     returnval = true;
     return returnval;
}
function lvalidation() {
     returnval = true;
     return returnval;
}




async function login1(event) {
     event.preventDefault()
     if (document.getElementById("restaurant").checked) {

          const email = document.getElementById('Email').value
          const password = document.getElementById('Password').value

          const result = await fetch('/api/login1', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                    email,
                    password
               })
          }).then((res) => res.json())

          if (result.status === 'ok') {
               // everythign went fine
               console.log('Got the token: ', result.data)
               localStorage.setItem('token', result.data)
               // alert('Success')
               window.location.href = "Dashboard.html";
          } else {
               error.innerHTML=result.error
          }
     }
     else if (document.getElementById("ngos").checked) {

          const email = document.getElementById('Email').value
          const password = document.getElementById('Password').value

          const result = await fetch('/api/login2', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                    email,
                    password
               })
          }).then((res) => res.json())

          if (result.status === 'ok') {
               // everythign went fine
               console.log('Got the token: ', result.data)
               localStorage.setItem('token', result.data)
               window.location.href = "Dashboard.html";
          } else {
               error.innerHTML=result.error
          }
     }
     else {
          error.innerHTML='*Please Select NGOs or Restaurant'
     }
}






async function registerUser(event) {
     event.preventDefault()
     if (document.getElementById("NGOs").checked) {
          const email = document.getElementById('email').value
          const username = document.getElementById('username').value
          const contact = document.getElementById('contact').value
          const password = document.getElementById('password').value
          const cpassword = document.getElementById('cpassword').value
          const address = document.getElementById('address').value
          const pincode = document.getElementById('pincode').value
          // const image = document.getElementById('myFile')
          if (password.length <= 8) {
               error.innerHTML='The Password must be 8 character'
          }
          else if (password != cpassword) {
               error.innerHTML='The conform password and password are not some'
              }
          else if (contact.length != 10) {
               error.innerHTML='length of Contact number must be 10'
          }
          else if (pincode.length != 6) {
               error.innerHTML='Pincode length must be 6 digit'
          }
          else {
               const result = await fetch('/api/register1', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                         email,
                         username,
                         contact,
                         address,
                         password,
                         pincode,

                    })
               }).then((res) => res.json())

               if (result.status === 'ok') {
                    window.location.href = "Dashboard.html";
                    // alert('Success')
               }
               else {
               error.innerHTML=result.error
                    // 
               }
          }
     }
     else if (document.getElementById("Restaurant").checked) {
          const email = document.getElementById('email').value
          const username = document.getElementById('username').value
          const contact = document.getElementById('contact').value
          const password = document.getElementById('password').value
          const cpassword = document.getElementById('cpassword').value
          const address = document.getElementById('address').value
          const pincode = document.getElementById('pincode').value
          if (password.length <= 8) {
               error.innerHTML='The Password must be 8 character'
          }
          else if (password != cpassword) {
               error.innerHTML='The conform password and password are not some'
              }
          else if (contact.length != 10) {
               error.innerHTML='length of Contact number must be 10'
          }
          else if (pincode.length != 6) {
               error.innerHTML='Pincode length must be 6 digit'
          }
          else {
               const result = await fetch('/api/register2', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                         email,
                         address,
                         username,
                         contact,
                         password,
                         pincode
                    })
               }).then((res) => res.json())

               if (result.status === 'ok') {
                    window.location.href = "Dashboard.html";
                    // alert('Success')
               }
               else {
                    error.innerHTML=result.error
                    // 
               }

          }
     }
     else {
          error.innerHTML='*Please Select NGOs or Restaurant';
          // alert('*Please Select NGOs or Restaurant');
     }
}


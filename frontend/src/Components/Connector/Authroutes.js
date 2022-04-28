


export const register = ({ username, password , email},setuser) =>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "name": username,
    "username": username,
    "admin": 0,
    "password": password,
    "email": email
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:5000/api/auth/register", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}













export const login = ({password , email},setuser) =>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "email": email,
    "password": password
  });

  
  var requestOptions = {
    method: 'POST',
    cors : 'no-cors',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:5000/api/auth/login", requestOptions)
    .then(response => response.json())
    .then(result =>  {
     setuser(result)
     console.log(result)
    })
    .catch(error => console.log('error', error));


}












// const addanswer = ({token,answer,question}) =>{
// // here the qusetion means qusetion id
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer " + token);
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "answer": answer,
//   "question": question
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://127.0.0.1:5000/api/answers/addanswer", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }











// const login = ({email, username, password}) =>{

//     axios.post("http://localhost:5000/api/auth/login",{
//         email,
//         username,
//         password
//     })
//     .then(res => {return res})
//     .catch(err => {return err})
// }
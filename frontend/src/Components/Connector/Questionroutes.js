export const famousquestion = ({token},setcurrentQuestion) =>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:5000/api/question/fquest", requestOptions)
      .then(response => response.json())
      .then(result => {
        setcurrentQuestion(result.popular_questions)
      }
        )
      
      .catch(error => console.log('error', error));
  }

  

export const allquestions = ({token},setcurrentQuestions) =>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:5000/api/questions/all", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.questions)
        if(Array.isArray(result.questions)){
          setcurrentQuestions(result.questions)
        }
        else{
          setcurrentQuestions([{
            question : "hello there",
            id : "1",
            authour : "kumar",
            likes : 30,
            dislikes : 20
            }])
        }
      })
      .catch(error => console.log('error', error));
  }
  
  
  
  
  
export const addquestion = ({token},question) =>{
  console.log(question)
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    'question': question
  });


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    // mode : 'no-cors',
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:5000/api/question/add", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  
  
 
export const questionsearch = ({token},query,setcurrentQuestions) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "query": query
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:5000/api/questions/search", requestOptions)
    .then(response => response.json())
    .then(result => {
      setcurrentQuestions(result.results)
    })
    .catch(error => console.log('error', error));
  
  }
  
export const likeques = ({token},questionid) =>{
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + token);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "question_id": questionid
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:5000/api/like/addquestlike", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}


export const dislikeques = ({token},questionid) =>{
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + token);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "question_id": questionid
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:5000/api/like/removequestlike", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}


export const getrecents = ({token},setcurrentQuestions) =>{
var myHeaders = new Headers();myHeaders.append("Authorization", "Bearer " + token);


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://127.0.0.1:5000/api/question/new", requestOptions)
  .then(response => response.json())
  .then(result => {
    setcurrentQuestions(result.results)
    console.log(result)
  })
  .catch(error => console.log('error', error));
}


export const getmyquestions = ({token},setcurrentQuestions) =>{
  console.log("question called from the connector")

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+ token);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://127.0.0.1:5000/api/question/myquest", requestOptions)
  .then(response => response.json())
  .then(result => {
  console.log(result.results)
  if(result.results){
      setcurrentQuestions(result.results)
    }
  else{
    console.log(result)
  }

  })
  .catch(error => console.log('error', error));
}
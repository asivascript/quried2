

export const addanswer = ({token},questionid,answer) =>{
    // here the qusetion means qusetion id
    console.log(questionid,answer)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "answer": answer,
      "question": questionid
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:5000/api/answers/addanswer", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }
    
    
    
    
 


export const getanswers = ( { token },question,setcurrentAnswers ) =>{
    // here the qusetion means qusetion id
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "question": question
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:5000/api/answers/getanswers", requestOptions)
      .then(response => response.json())
      .then(result => {
        setcurrentAnswers(result.results)

      })
      .catch(error => console.log('error', error));
    }
    
    
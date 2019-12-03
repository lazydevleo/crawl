const performGetRequest1 = _ => {
    var resultElement = document.getElementById('container');
    resultElement.innerHTML = '';
    
    axios.get('http://localhost:5500/parse')
    // axios.get('https://ruddycrawler.herokuapp.com/parse')
      .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
      })
      .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
      });   
  }


  const generateSuccessHTMLOutput = (response) =>{
       let value = `<table>
       <tr>
        <th>Name</th>
        <th>URL</th>
       </tr>`

      if(response && Array.isArray(response)){
        response.forEach(element => {
            value += `<tr> 
            <td>${element.name}</td>
            <td>${element.url}</td>
           </tr>`
        });
    }

    value += `</table>`

    return value
  }


  const generateErrorHTMLOutput = (error) => {
    return  `<h4>Result</h4>' + 
            '<h5>Error Occured:</h5> 
            <p>${error}</p>`
            
  }

  performGetRequest1()





// goal: pass an array of employees to our function and loop through array

function empHtmlInfo (data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  
    <div class="card text-center ">
        <div class="card-header">
    
          <h1>${managerData.ename}</h1>
          <h2>${managerData.empId}</h2>
        </div>
        <div class="bg-dark card-body">
          <h3 class="card-title">Employee Info </h3>
          <h5 class="card-title">${managerData.email} </h5>
          <h5 class="card-title">${managerData.office} </h5>
          
        </div>
       
        </div>
      
</body>
</html>`
};

module.exports = empHtmlInfo;



// goal: pass an array of employees to our function and loop through array

function internInfo(internInfo) {
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
    
          <h1>${internInfo.ename}</h1>
          <h2>${internInfo.empId}</h2>
        </div>
        <div class="bg-dark card-body">
          <h3 class="card-title">Intern's Info </h3>
          <h4 class="card-title">${internInfo.email} </h4>
          <h4 class="card-title">${internInfo.school} </h4>
         
        </div>
      
        </div>
      
</body>
</html>`
};

module.exports = internInfo;
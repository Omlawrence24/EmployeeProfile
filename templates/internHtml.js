




function internInfo(internInfo) {
  return `
  <div class="card" style="width: 30rem;">
    <div class="card-body">
    <div class="card text-center ">
        <div class="card-header">
       <h1  class="card-title">Intern Info </h1>
          <h1>${internInfo.ename}</h1>
          <h2>${internInfo.empId}</h2>
        </div>
        <div class="bg-trans card-body">
       
          <h4 class="card-title">${internInfo.email} </h4>
          <h4 class="card-title">${internInfo.school} </h4>
         
        </div>
        </div>
        </div>
        </div>`
    
};

module.exports = internInfo;
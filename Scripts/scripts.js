
$(onReady);

function onReady(){
    console.log("salary calculator");
    $('#submit').on('click', getInput);
}

let employeeData = [];

function getInput(){
    event.preventDefault();
    
    let input = {};

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let ID = $("#ID").val();
    let jobTitle = $("#jobTitle").val();
    let salary = $("#salary").val();

    input.firstName = firstName;
    input.lastName = lastName;
    input.ID = ID;
    input.jobTitle = jobTitle;
    input.salary = salary;

    employeeData.push(input);
    console.log(employeeData);

    if(firstName.length == 0 ||lastName.length == 0 || ID.length == 0 || jobTitle.length == 0 || salary.length == 0){
        console.log("Please make sure to fill out the form")
    }else {
        render(input);    
    }

}


function render(input){
    $(`
        <tr class="employeeInfo" >
            <td class="employeeInfo" id="emp-firstName">${input.firstName}</td>
            <td class="employeeInfo" id="emp-lastName">${input.lastName}</td> 
            <td class="employeeInfo" id="emp-emp-ID">${input.ID}</td> 
            <td class="employeeInfo" id="emp-JobTitle">${input.jobTitle}</td> 
            <td class="employeeInfo" id="emp-salary">${input.salary}</td>   
        </tr> 
    `).appendTo($('#employee-table'))
}
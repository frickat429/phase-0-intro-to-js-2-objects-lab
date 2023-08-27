const employee = {
    name: "Lee",
    address: "11 Broadway, 2nd Floor, New York, NY 10004"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, ...{[key]: value}} 
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newemployee ={...employee[key]}
    delete newemployee[key]
    return newemployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}







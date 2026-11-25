console.log("   =========== Employee Management System ==========   ");

const all_emp = []

function add_emp(name, email, eid){
    let index = all_emp.findIndex((emp)=>emp.eid===eid)
    if(all_emp[index]){
        return `Employee ID : ${eid}, already Exists !`
    }
    else{
        let emps = {
            name:name,
            email:email,
            eid:eid
        }
        all_emp.push(emps)
        return `Employee ${name} added Successfully !!`
    }
}

console.log(add_emp('pavan', 'Pavan@gmail.com', 101));
// console.log(all_emp);
console.log(add_emp('kumar', 'pavan@2', 102));


function update_emp(id, newdata){
    const index = all_emp.findIndex((emp)=>emp.eid ===id)
    const emp = all_emp[index]
    if (index !== -1){
    Object.assign(emp, newdata)
    return `${emp.name} Updated Successfully !!`
    }
    else{
        return `${id} not Found !!`
    }
}


function delete_emp(id){
    const index = all_emp.findIndex((emp)=>emp.eid === id)

    if (index !== -1){
        all_emp.splice(index, 1)
        return `Employee ID: ${id} Deleted Successfully !`
    }
    else{
        return `${id} Not Found !`
    }
}

function search_emp(emp_id){
    const index = all_emp.findIndex((emp)=> emp.eid === emp_id)

    if (index !== -1){
        return all_emp[index]
    }
    else{
        return `${emp_id} Not Found !`
    }

}

function list_emp() {
    console.log(all_emp);
    
}



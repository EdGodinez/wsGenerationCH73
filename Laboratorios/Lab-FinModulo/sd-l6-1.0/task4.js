// Task 4: delUser(number)

export function delUser(id){
    return fetch(`http://localhost:3000/users/${id}`, {method: "DELETE"});
}

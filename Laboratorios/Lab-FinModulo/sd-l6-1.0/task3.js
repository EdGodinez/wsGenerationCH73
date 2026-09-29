// Task 3: addUser(first_name, last_name, email)

export function addUser(first_name, last_name, email) {
    
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {

        const maxId = Math.max(...data.map(user=> user.id));
        const newId = maxId + 1;

        const newUser = {
            id: newId,
            first_name: first_name,
            last_name: last_name,
            email: email
        };

        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify(newUser)

        });
    });
}


// Task 2: listUsers()

export function listUsers() {
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(data => {

            const users = data.map(user => {
                return `{
  id: ${user.id},
  first_name: '${user.first_name}',
  last_name: '${user.last_name}',
  email: '${user.email}'
}`;
            });

            console.log("[");
            console.log(users.join(",\n"));
            console.log("]");
        });
}


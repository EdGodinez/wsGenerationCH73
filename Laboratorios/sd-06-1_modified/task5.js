

// Type your code below this line!
class FriendsList{
    constructor(arrayFriends){
        this.arrayFriends = arrayFriends;
    }
}

const cantidad = Number(process.argv[3]);

const friends = [];

for (let i = 1; i <= cantidad; i++){
    friends[i - 1] = process.argv[3 + i];
}

const list = new FriendsList(friends);
console.log(list.arrayFriends)


// Type your code above this line!


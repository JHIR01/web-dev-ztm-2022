var database = [
    {
        username: "andrei",
        password: "Supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "indgrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired form all the learning!"
    },
    {
        username: "Sally",
        timeline: "JavaScript is so cool!"
    }
]

var userNamePrompt = prompt("What's your username?: ");
var passwordPrompt = prompt("What's your password?: ");

function isUserValid(username, password){
    for(var i = 0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password){
            console.log(newsFeed);
            return true;
        } 
    }
    return false;
}

function signIn(user, pass){
    if(isUserValid(user, pass)){
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and or password!");
    }
}

signIn(userNamePrompt, passwordPrompt);
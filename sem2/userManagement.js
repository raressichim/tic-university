export const registerUser = (user) => {
    let users = JSON.parse(localStorage.getItem('users')) || []
    console.log("I want to register")
    users.push(user)
    localStorage.setItem('users',JSON.stringify(users))

    console.log('New user added',user)
}
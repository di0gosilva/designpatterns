class User { 
    constructor(id, nome, email) {
        this.id = id
        this.nome = nome
        this.email = email
    }
}

class userRepo {
    constructor() {
        this.users = []
    }
    addUser(user) {
        this.users.push(user)
    }
    deleteUser(id) {
        this.users = this.users.filter(user => user.id !== id)
    }
    getUserById(id) {
        this.users = this.users.find(user => user.id === id)
    }
    getAllUsers() {
        return this.users
    }
}

const userRepo1 = new userRepo()
const user = new User(1, "Diogo", 'e@e.com')
userRepo1.addUser(user)
const user2 = new User(2, "João", 'e@e.com')
userRepo1.addUser(user2)
userRepo1.deleteUser(1)
console.log(userRepo1.getAllUsers())


export default class UserModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        
    }
    
    static add(name, email, password){
        const newUser = new UserModel(user.length +1 , name, email, password)
        user.push(newUser)
    }

    static isValidUser(email, password){
        const result = user.find(user => user.email === email && user.password === password)
        return result 
    }
}

var user = []
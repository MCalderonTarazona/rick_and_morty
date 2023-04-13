const users = require("../utils/users")

const login = (req, res) => {
    const {email, password} = req.query;
    const accept = users.find(element => email === element.email && password === element.password);
    if(accept){
        res.status(200).json({access: true})
    } else {
        res.status(404).json({access: false})
    } 
}

module.exports = login;


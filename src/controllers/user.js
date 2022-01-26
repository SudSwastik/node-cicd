const User = require('../models/user');

exports.postUser = (req,res) => {
    const user = new User(req.body);
    user.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}


exports.getUsers = (req,res) => {
    User.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}


exports.getUserById = (req,res) => {
    User.findById(req.params.userId)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.updateUserById = (req,res) => {
    User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.deleteUserById = (req,res) => {
    User.findByIdAndDelete(req.params.userId)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}
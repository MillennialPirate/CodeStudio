const router = require('express').Router();
const User = require('../models/userModel');
//displaying all things in database 
router.route('/displayUsers').get((req, res) => {
    User.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json('Error');
    })
})
//adding new user 
router.route('/createUser').post((req, res) => {
    const uid = req.body.uid;
    const name = req.body.name; 
    const pen = req.body.pen;
    const newUSer = new User({
        name : name, 
        uid : uid, 
        pen : pen
    });
    newUSer.save()
    .then(() => res.json('User added successfully'))
    .catch(err => res.status(400).json('Error'));
})
module.exports = router;
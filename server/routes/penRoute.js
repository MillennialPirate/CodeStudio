const router = require('express').Router();
let Pen = require('../models/penModel');
//displaying all the pens 
// router.route('/getPens').get((req, res) => {
//     Pen.find()
//     .then((pens) => res.json(pens))
//     .catch((err) => res.status(400).json('Error'));
// })


//deleting pens 
router.route('/deletePen').post((req, res) => {
    const penId = req.body._id; 
    const myQuery = {_id : penId};
    Pen.deleteOne(myQuery)
    .then(() => {res.json('Deleted successfully')})
    .catch(() => {res.json('Error')});
})
//displaying pens according to the user id 
router.route('/getPenByUser').post((req, res) => {
    const uid = req.body.uid; 
    Pen.find({uid : uid})
    .then((pens) => res.json(pens))
    .catch((err) => res.status(400).json('Error'));
})
//for updating the pens details 
router.route('/editPen').post((req, res) => {
    const penId = req.body._id;
    const html = req.body.html;
    const css = req.body.css;
    const js = req.body.js;
    const topic = req.body.topic;
    //the updation part 
    const myQuery = {_id : penId};
    const newVal = {$set : {
        html : html, 
        css : css, 
        js : js, 
        topic : topic
    }}
    Pen.updateOne(myQuery, newVal)
    .then(() => {res.json('Updated succesfully')})
    .catch((err) => {res.status(400).json(err)});
})
//adding pens to the database
router.route('/addPen').post((req, res) => {
    const uid = req.body.uid; 
    const topic = req.body.topic;
    const html = req.body.html; 
    const css = req.body.css;
    const js = req.body.js;
    const newPen = new Pen({ 
        topic : topic,
        html : html,
        css : css,
        js : js, 
        uid : uid
    });
    newPen.save()
    .then(() => res.json('Pen added succesfully'))
    .catch((err) => {res.status(400).json(err)});
});
module.exports = router;
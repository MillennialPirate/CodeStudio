const router = require('express').Router();
let Pen = require('../models/penModel');
//displaying all the pens 
router.route('/getPens').get((req, res) => {
    Pen.find()
    .then((pens) => res.json(pens))
    .catch((err) => res.status(400).json('Error'));
})
//displaying pens according to the user id 
router.route('/getPenByUser').post((req, res) => {
    const uid = req.body.uid; 
    Pen.find({uid : uid})
    .then((pens) => res.json(pens))
    .catch((err) => res.status(400).json('Error'));
})
//adding pens to the database
router.route('/addPen').post((req, res) => {
    const penId = req.body.penId;
    const uid = req.body.uid; 
    const topic = req.body.topic;
    const html = req.body.html; 
    const css = req.body.css;
    const js = req.body.js;
    const newPen = new Pen({
        penId : penId, 
        topic : topic,
        html : html,
        css : css,
        js : js, 
        uid : uid
    });
    newPen.save()
    .then(() => res.json('Pen added succesfully'))
    .catch((err) => {res.status(400).json('Error')});
});
module.exports = router;
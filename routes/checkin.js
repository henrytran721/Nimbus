exports.viewCheckin = function(req, res) {
    console.log(req.params.step)

    res.render('checkin', {
        'stepName': req.params.step
    }); 
    
}
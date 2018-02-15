var data = require("../progress_data.json");

exports.viewProgress = function(req, res) {
    res.render('progress', {
        "topic": data['topic'],
        "progress_data":data['progress']
    });
}
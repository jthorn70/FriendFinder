var friendList = require("../app/data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendList)
    });
};

app.post("/api/friends", function(req, res) {
    var newFriendScores = req.body.scores;
    var ScoreArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    for (var i = 0; i < friendList.length; i++) {
        var scoreDif = 0;
        for (var j = 0; j < newFriendScores.length; j++) {
            scoreDif += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
        }
        ScoreArray.push(scoreDif);
    };

for (var i = 0; i < ScoreArray.length; i++) {
    if (ScoreArray[i] <= ScoreArray[bestMatch]) {
        bestMatch = i;
    };
};
var matchedFriend = friendList[bestMatch];
res.json(matchedFriend);

friendList.push(req.body);

});
const informationCampus = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${informationCampus.firstName} and I'm an student of ${informationCampus.campus}`,
    e : "oO",
    T : "U "
}));
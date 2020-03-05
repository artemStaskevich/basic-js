module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var turns, seconds;

    turns = 1*(1-Math.pow(2, disksNumber))/(1-2);
    seconds = (1*(1-Math.pow(2, disksNumber))/(1-2))/(turnsSpeed/3600);

    return {turns: turns, seconds: seconds};
}
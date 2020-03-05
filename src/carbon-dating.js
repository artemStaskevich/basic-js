const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(string) {
  if(typeof string != 'string'){
    return false;
  }

  var lastActivity = parseFloat(string);
  if (typeof lastActivity != NaN && lastActivity >0 && lastActivity < MODERN_ACTIVITY){
    var res = Math.ceil(Math.log(MODERN_ACTIVITY/lastActivity)/(0.693/HALF_LIFE_PERIOD));
    return res;
  }  else {
    return false;
  }
};
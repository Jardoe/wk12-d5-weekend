const Request = require('../helpers/request.js');

  let url = null;

const MTGData = function(){
}

MTGData.prototype.getData = function (onComplete) {
  const request = new Request(url);
  request.get((data) => {
    console.log(data);
    onComplete(data);
  })
};

MTGData.prototype.urlBuilder = function(userInput){
  let newUrl = "https://api.magicthegathering.io/v1/cards?name="
  url = (newUrl + userInput);
  console.log(url);
  return url;
}

module.exports = MTGData;

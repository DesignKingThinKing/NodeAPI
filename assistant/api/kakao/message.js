'use strict';

let postMessage = (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  return res.json({
    "message" : {
      "text" : getOutputText(data)
      }
  })
};

let getOutputText = data => {
  let output = data.output;
  if(output.text && Array.isArray(output.text)){
    return output.text.join('\\n');
  }
  else if(output.text){
    return output.text;
  }
  else return "";
}

module.exports = {
    'initialize': function(app, options) {
        app.post('/api/kakao/message', postMessage);
    }
};
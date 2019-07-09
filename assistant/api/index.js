'use strict';

console.log('APIs initialize');

const conversation = require('./message');
const kakao_keyboard = require('./kakao/keyboard');
const kakao_message = require('./kakao/message');

module.exports = {
    'initialize': (app, options) => {
        conversation.initialize(app, options);
        kakao_keyboard.initialize(app, options);
        kakao_message.initialize(app, options);
    }
};
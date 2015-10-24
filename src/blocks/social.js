"use strict";

/*
  Social Buttons Block
*/

var Block = require('../block');
var stToHTML = require('../to-html');

module.exports = Block.extend({

  type: 'Social',

  title: function(){ return i18n.t('blocks:social:title'); },

  editorHTML: [
    '<div class="st-block__inputs st-block__dropzone">',
    '<span class="st-icon">twitter</span>',
    '<p class="twitter-tweet" align="center">Тут появятся социальные кнопки.</p>',
    '</div>'
  ].join("\n"),

  scribeOptions: {
    allowBlockElements: false,
    tags: {
      p: false
    }
  },

  icon_name: 'twitter',

  loadData: function(data){
    if (this.options.convertFromMarkdown && data.format !== "html") {
      this.setTextBlockHTML(stToHTML(data.text, this.type));
    } else {
      this.setTextBlockHTML(data.text);
    }
  }
});

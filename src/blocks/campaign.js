"use strict";

/*
  Campaign Block
*/

var Block = require('../block');
var stToHTML = require('../to-html');

module.exports = Block.extend({

  type: 'Campaign',

  title: function(){ return i18n.t('blocks:сampaign:title'); },

  editorHTML: [
    '<div class="st-block__inputs st-block__dropzone">',
    '<span class="st-icon">poll</span>',
    '<p class="twitter-tweet" align="center">Тут появится статистика об успехах компании.</p>',
    '</div>'
  ].join("\n"),

  scribeOptions: {
    allowBlockElements: false,
    tags: {
      p: false
    }
  },

  icon_name: 'poll',

  loadData: function(data){
    if (this.options.convertFromMarkdown && data.format !== "html") {
      this.setTextBlockHTML(stToHTML(data.text, this.type));
    } else {
      this.setTextBlockHTML(data.text);
    }
  }
});

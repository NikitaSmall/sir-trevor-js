/*
  Text Block
*/

var template = '<div class="<%= className %>" contenteditable="true"></div>';

SirTrevor.BlockTypes.TextBlock = new SirTrevor.BlockType({ 
  title: "Text",
  className: "text-block",
  toolbarEnabled: true,
  dropEnabled: false,
  limit: 0,
  editorHTML: function() {
    return _.template(template, this);
  },
});
var Backbone = require('backbone');

var bookListItemTemplate = require('../../templates/book_list_item.hbs');
var bookDetailTemplate = require('../../templates/book_detail.hbs');

var BookListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addBook)
  },
  render: function(){
    return this;
  },
  addBook: function(book){
    var bookItem = new BookItemView({model: book});
    this.$el.append(bookItem.render().el);
  }
});

var BookItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: bookListItemTemplate,
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

var BookDetailView = Backbone.View.extend({
  className: 'well',
  template: bookDetailTemplate,
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

module.exports = {
  BookListView: BookListView,
  BookItemView: BookItemView,
  BookDetailView: BookDetailView
}

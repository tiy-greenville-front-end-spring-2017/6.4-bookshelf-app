var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/book_list');
var models = require('./models/book');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'book/:id/': 'showBook'
  },
  initialize: function(){
    this.bookShelf = new models.BookCollection();
  },
  index: function(){
    var bookListing = new views.BookListView({collection: this.bookShelf});
    $('.app').html(bookListing.render().el);

    // this.bookShelf.add({'title': 'JS the good parts'});
    this.bookShelf.fetch();
  },
  showBook: function(id){
    var book = this.bookShelf.findWhere({'_id': id});
    var bookDetail = new views.BookDetailView({model: book});
    $('.app').html(bookDetail.render().el);
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;

(function(){
  'use strict';

  angular.module('readingList', [])

  .controller('ReadingListController', function(){
    this.books = books;
    this.genres = genres;
    this.showForm = false;
  })

  .directive('bookGenres', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/book-genres.html',
      scope: {
        genres: '='
      }
    }
  })

  .directive('bookCover', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/book-cover.html',
      replace: true
    }
  })

  .directive('reviewForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/review-form.html',
      replace: true,
      controller: function(){
        this.book = {genres:{}};

        this.addReview = function(form){
          books.push(this.book);
          this.book = {genres:{}};
          form.$setPristine();
        }
      },
      controllerAs: 'reviewFormCtrl',
      scope: {
        books: '=',
        genres: '='
      }
    }
  });


  var genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

  var books = [
    {
      title: 'A Game of Thrones: A Song of Ice and Fire',
      author: 'George R.R. Martin',
      isbn: '0553593714',
      review: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
      rating: 4,
      genres: { 'non-fiction': true, fantasy: true }
    }
  ];
})();

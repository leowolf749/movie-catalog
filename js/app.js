

const app = angular.module('MovieApp', []);

app.controller('MovieList', function ($scope, MovieService){
    $scope.movie = '';
    $scope.movies = MovieService.getMovies();

    $scope.newMovie = function () {
        MovieService.addMovie($scope.movieTitle, $scope.movieDirector, $scope.movieRelease, $scope.movieGenre, $scope.isGood);
        $scope.movieTitle = '';
        $scope.movieDirector = '';
        $scope.movieRelease = '';
        $scope.movieGenre = '';
        $scope.isGood = null;

    }

    $scope.fresh = function () {
        $scope.isGood = true;
        
    }

    $scope.rotten = function () {
        $scope.isGood = false;
        
    }
    
});

app.factory('MovieService', function () {
    let movies = [];

    return {
        addMovie: function (title, director, release, genre, isGood) {
            movies.push({
                title: title,
                director: director,
                release: release,
                genre: genre,
                isGood: null,
    
            });
        },
        getMovies: function () {
            return movies;
        },
    };
});
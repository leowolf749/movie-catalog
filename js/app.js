

const app = angular.module('MovieApp', []);

app.controller('MovieList', function ($scope, MovieService){
    $scope.movie = '';
    $scope.movies = MovieService.getMovies();

    $scope.newMovie = function () {
        MovieService.addMovie($scope.movieTitle, $scope.movieDirector, $scope.movieRelease, $scope.movieGenre, $scope.isFresh, $scope.isRotten);
        $scope.movieTitle = '';
        $scope.movieDirector = '';
        $scope.movieRelease = '';
        $scope.movieGenre = '';

    }

    $scope.fresh = function (target) {
        MovieService.markAsFresh(target);
        // console.log(`Marking ${target.title} as fresh`);
        
    }

    $scope.rotten = function (target) {
        MovieService.markAsRotten(target);
        
    }
    
});

app.factory('MovieService', function () {
    let movies = [];

    return {
        addMovie: function (title, director, release, genre, isFresh, isRotten) {
            movies.push({
                title: title,
                director: director,
                release: release,
                genre: genre,
                isFresh: null,
                isRotten: null,
            });
        },
        getMovies: function () {
            return movies;
        },
        markAsFresh(good) {
            good.isFresh = true;
        },
        markAsRotten(bad) {
            bad.isRotten = true;
        },
    };
});
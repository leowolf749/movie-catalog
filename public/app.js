(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


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
},{}]},{},[1]);

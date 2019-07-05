'use strict';

angular.
  module('rickAndMortyApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<character-list></character-list>'
        }).
        when('/character/:id', {
          template: '<character-detail></character-detail>'
        }).
        otherwise('/');
    }
  ]);

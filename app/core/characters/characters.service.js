"use strict";

angular.module("core.characters").factory("Characters", [
  "$resource",
  function($resource) {
    return $resource(
      "https://rickandmortyapi.com/api/character",
      {},
      {
        query: {
          method: "GET",
          isArray: false,
        },
        get: {
          method: "GET",
          url: "https://rickandmortyapi.com/api/character/:id",
          params: {
            id: 2
          }
        }
      }
    );
  }
]);

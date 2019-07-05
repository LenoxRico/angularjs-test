'use strict';

angular.module('characterDetail')
.component('characterDetail',{
    templateUrl:'character-detail/character-detail.template.html',
    controller:[
        '$routeParams',
        'Characters',
        function characterDetailController($routeParams,Characters){
            this.character = Characters.get({id: $routeParams.id});
        }
    ]
})
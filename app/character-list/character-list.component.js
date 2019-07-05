'use strict';

angular.module('characterList')
.component('characterList',{
    templateUrl:'character-list/character-list.template.html',
    controller:[
        'Characters',
        function CharacterListController(Characters){
            this.characters= Characters.query();
            this.orderProp = "created";
        }
    ]
})
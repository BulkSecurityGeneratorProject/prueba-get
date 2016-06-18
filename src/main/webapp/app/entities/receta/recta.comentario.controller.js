/**
 * Created by David on 18/06/2016.
 */
'use strict';

angular.module('pruebapractica2App')
    .controller('recetaComentarioController', function ($scope, $rootScope, $stateParams, entity, Receta,Comentario,ParseLinks) {

        entity.$promise.then(function(data){
            console.log(data);
            var link = entity.$httpHeaders('link');

            $scope.links = ParseLinks.parse(link);

            $scope.savedReceta = data;
        });





    });

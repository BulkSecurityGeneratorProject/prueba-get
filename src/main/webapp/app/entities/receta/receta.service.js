(function() {
    'use strict';
    angular
        .module('pruebaGetApp')
        .factory('Receta', Receta);

    Receta.$inject = ['$resource'];

    function Receta ($resource) {
        var resourceUrl =  'api/recetas/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            /*'getRecetasComentarios': {
                method: 'GET',
                isArray: true,
                url: 'api/recetasComentarios/{id}'
            },*/
            'update': { method:'PUT' }
        });
    }
})();

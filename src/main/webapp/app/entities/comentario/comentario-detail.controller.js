(function() {
    'use strict';

    angular
        .module('pruebaGetApp')
        .controller('ComentarioDetailController', ComentarioDetailController);

    ComentarioDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'Comentario', 'Receta'];

    function ComentarioDetailController($scope, $rootScope, $stateParams, DataUtils, entity, Comentario, Receta) {
        var vm = this;

        vm.comentario = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('pruebaGetApp:comentarioUpdate', function(event, result) {
            vm.comentario = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

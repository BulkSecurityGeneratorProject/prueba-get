(function() {
    'use strict';

    angular
        .module('pruebaGetApp')
        .controller('RecetaDetailController', RecetaDetailController);

    RecetaDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'Receta', 'Comentario'];

    function RecetaDetailController($scope, $rootScope, $stateParams, DataUtils, entity, Receta, Comentario) {
        var vm = this;

        vm.receta = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('pruebaGetApp:recetaUpdate', function(event, result) {
            vm.receta = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

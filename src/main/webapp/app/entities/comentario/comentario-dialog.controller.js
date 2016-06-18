(function() {
    'use strict';

    angular
        .module('pruebaGetApp')
        .controller('ComentarioDialogController', ComentarioDialogController);

    ComentarioDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Comentario', 'Receta'];

    function ComentarioDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Comentario, Receta) {
        var vm = this;

        vm.comentario = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.recetas = Receta.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.comentario.id !== null) {
                Comentario.update(vm.comentario, onSaveSuccess, onSaveError);
            } else {
                Comentario.save(vm.comentario, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('pruebaGetApp:comentarioUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.fecha = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();

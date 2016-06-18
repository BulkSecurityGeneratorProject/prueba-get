'use strict';

describe('Controller Tests', function() {

    describe('Comentario Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockComentario, MockReceta;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockComentario = jasmine.createSpy('MockComentario');
            MockReceta = jasmine.createSpy('MockReceta');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Comentario': MockComentario,
                'Receta': MockReceta
            };
            createController = function() {
                $injector.get('$controller')("ComentarioDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pruebaGetApp:comentarioUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});

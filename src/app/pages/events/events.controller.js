(function() {
    'use strict';
    
    angular
        .module('after')
        .controller('EventsController', EventsController);
    
        /** @ngInject */
        function EventsController($scope, $stateParams) {
            var ctrl = this;
            var eventId = $stateParams.id;

            activate();
            
            function activate() {
            
            }
        }
})();

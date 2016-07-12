(function() {
    'use strict';
    
    angular
        .module('after')
        .controller('EventController', EventController);

        /** @ngInject */
        function EventController($firebaseObject, $scope, $stateParams) {
            var ctrl = this;
            var id = $stateParams.id;
            activate();

            function activate() {
                var ref = firebase.database().ref('/events/' + id);
                var obj = $firebaseObject(ref);
                obj.$loaded().then(function (data) {
                    ctrl.events = data;
                })
            }


        }
})();

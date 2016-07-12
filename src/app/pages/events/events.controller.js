(function() {
    'use strict';
    
    angular
        .module('after')
        .controller('EventsController', EventsController);
    
        /** @ngInject */
        function EventsController($firebaseObject, $scope, $stateParams) {
            var ctrl = this;
            var zipcode = $stateParams.id;

            activate();
            
            function activate() {
                var ref = firebase.database().ref('/events/').orderByChild('eventZipcode');
                var obj = $firebaseObject(ref);
                obj.$loaded().then(function (data) {
                    ctrl.events = data;
                    console.log(ctrl.events);
                })
            }
        }
})();

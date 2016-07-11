(function () {
  'use strict';

  angular
    .module('after')
    .controller('EventModalCtrl', EventModalCtrl);

  /** @ngInject */
  function EventModalCtrl($firebaseArray, $uibModalInstance, event) {
    var ctrl = this;

    ctrl.addEvent = !event;
    ctrl.event = event;
    ctrl.dismiss =  $uibModalInstance.dismiss;
    ctrl.saveInfo = saveInfo;
    var userId = localStorage.getItem('userId');


    

    activate();

    function activate() {
    }

    function saveInfo(form) {
      console.log(form.eventDate);
      console.log(form.eventStartTime.toLocaleTimeString());

      var event = {
        eventName:        form.eventName,
        eventDescription: form.eventDescription,
        eventAddress:     form.eventAddress,
        eventZipcode:     form.eventZipcode,
        eventDate:        form.eventDate.getUTCDate(),
        eventStartTime:   form.eventStartTime.toLocaleTimeString(),
        eventEndTime:     form.eventEndTime.toLocaleTimeString(),
        eventService:     form.eventService
      };

      var newKey = firebase.database().ref().push().key;

      var updates = {};
      updates['/events/'+ newKey] = event;
      updates['/orgs/'+ userId + '/events/'+ newKey] = event;

      firebase.database().ref().update(updates);

      $uibModalInstance.close();
    }
  }
})();

(function () {
  'use strict';

  angular
    .module('after')
    .controller('EventModalCtrl', EventModalCtrl);

  /** @ngInject */
  function EventModalCtrl ($firebaseObject, $uibModalInstance, event) {
    var ctrl = this;

    ctrl.addEvent = !event;
    ctrl.event    = event;
    ctrl.dismiss  = $uibModalInstance.dismiss;
    ctrl.saveInfo = saveInfo;
    var userId    = localStorage.getItem('userId');

    activate();

    function activate() {

    }


    function saveInfo(form) {
      console.log(form.eventDate);
      console.log(form.eventStartTime.toLocaleTimeString());

      var newKey = firebase.database().ref().push().key;

      var ref = firebase.database().ref().child('orgs/' + userId);
      var obj = $firebaseObject(ref);
      obj.$loaded().then(function (org) {

        var event = {
          eventAddress:     form.eventAddress,
          eventDate:        form.eventDate.getUTCDate(),
          eventDescription: form.eventDescription,
          eventEmail:       org.email,
          eventEndTime:     form.eventEndTime.toLocaleTimeString(),
          eventId:          newKey,
          eventName:        form.eventName,
          eventPhone:       org.phone,
          eventService:     form.eventService,
          eventStartTime:   form.eventStartTime.toLocaleTimeString(),
          eventZipcode:     form.eventZipcode
        };

        var updates                                      = {};
        updates['/events/' + newKey]                     = event;
        updates['/orgs/' + userId + '/events/' + newKey] = event;

        firebase.database().ref().update(updates);

        $uibModalInstance.close();
      })
    }
  }
})();

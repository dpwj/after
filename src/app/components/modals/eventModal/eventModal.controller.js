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
      console.log(form);
      console.log(form.date);
      console.log(typeof form.date);
      var ref = firebase.database().ref().child('orgs/'+ userId + '/events');

      $firebaseArray(ref).$add({
        eventName: form.eventName,
        eventDescription: form.eventDescription,
        eventAddress: form.eventAddress,
        eventZipcode: form.eventZipcode,
        eventDate: form.eventDate,
        eventStartTime: form.eventStartTime,
        eventEndTime: form.eventEndTime,

      });



      // $uibModalInstance.close();
    }
  }
})();

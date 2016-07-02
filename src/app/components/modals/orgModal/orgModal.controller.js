(function () {
  'use strict';

  angular
    .module('after')
    .controller('OrgModalCtrl', OrgModalCtrl);

  /** @ngInject */
  function OrgModalCtrl($firebaseArray, $firebaseObject, $uibModalInstance, org) {

    var ctrl = this;
    var id = org.$id;
    ctrl.org = org;

    ctrl.dismiss  = $uibModalInstance.dismiss;
    ctrl.saveInfo = saveInfo;
    console.log(ctrl.org);

    activate();

    function activate() {

    }

    function saveInfo(form) {
      console.log(form);
      var ref = firebase.database().ref().child('orgs/' + id);
      ref.update({
        email:      form.email,
        firstName:  form.firstName,
        // lastName:   form.lastName,
        orgName:    form.orgName,
        // orgAddress: form.address,
        // orgZipcode: form.address,
        phone:      form.phone,
        userName:   form.userName,
        userId:     id,
        mission:    form.mission
      });

      $uibModalInstance.close();
    }
  }
})();

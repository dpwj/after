(function () {
  'use strict';

  angular
    .module('after')
    .controller('OrgModalCtrl', OrgModalCtrl);

  /** @ngInject */
  function OrgModalCtrl($firebaseArray, $firebaseObject, $uibModalInstance) {
    var ref  = firebase.database().ref('orgs');
    var db   = $firebaseArray(ref);
    var ctrl = this;

    ctrl.dismiss  = $uibModalInstance.dismiss;
    ctrl.saveInfo = saveInfo;

    activate();

    function activate() {
      ref.orderByChild('email').equalTo("livac@yahoo.com")
        .once('value', function (snap) {
          console.log('accounts matching email address', snap.val())
        });
      // db.$loaded()
      //   .then(function (x) {
      //     console.log(x);

          // var rec = db.$getRecord('-KLVNDe9DEafgRL_0F37');
          // console.log(rec);
          // ctrl.org = rec;
        // })
        // .catch(function (error) {
        //   console.log("Error:", error);
        // });
    }

    function saveInfo(form) {
      console.log(form);


      $uibModalInstance.close();
    }
  }
})();

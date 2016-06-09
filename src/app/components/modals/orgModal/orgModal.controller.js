(function () {
  'use strict';

  angular
    .module('after')
    .controller('OrgModalCtrl', OrgModalCtrl);

  /** @ngInject */
  function OrgModalCtrl($uibModalInstance) {
    var ctrl = this;

    ctrl.dismiss = $uibModalInstance.dismiss;
    ctrl.saveInfo = saveInfo;

    activate();

    function activate() {
    }

    function saveInfo(form) {
      console.log(form);
    }
  }
})();

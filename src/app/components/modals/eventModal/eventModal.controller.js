(function () {
  'use strict';

  angular
    .module('after')
    .controller('EventModalCtrl', EventModalCtrl);

  /** @ngInject */
  function EventModalCtrl($uibModalInstance) {
    var ctrl = this;

    ctrl.addEvent = true;
    ctrl.dismiss =  $uibModalInstance.dismiss;
    ctrl.saveInfo = saveInfo;


    activate();

    function activate() {
    }

    function saveInfo(formData) {
      console.log(formData);


      $uibModalInstance.close();
    }
  }
})();

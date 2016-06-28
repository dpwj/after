(function () {
  'use strict';

  angular
    .module('after')
    .controller('OrgController', OrgController);

  /** @ngInject */
  function OrgController($scope, $uibModal, AuthService) {
    var ctrl = this;

    ctrl.addEvent          = addEvent;
    ctrl.editOrgInfo       = editOrgInfo;

    activate();

    function activate() {
      AuthService.isLoggedIn();
    }

    function addEvent() {
      $uibModal.open({
        templateUrl: '../../../app/components/modals/eventModal/eventModal.html',
        controller:  'EventModalCtrl',
        controllerAs: 'ctrl',
        size: 'lg',
        resolve:     {
          items: function () {
            return $scope.items;
          }
        }
      });
    }

    function editOrgInfo() {
      console.log('Open Org Modal');
      $uibModal.open({
        templateUrl: '../../../app/components/modals/orgModal/orgModal.html',
        controller:  'OrgModalCtrl',
        controllerAs: 'ctrl',
        size: 'lg'
        // resolve:     {
        //   items: function () {
        //     return $scope.items;
        //   }
        // }
      });
    }
  }
})();

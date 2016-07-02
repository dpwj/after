(function () {
  'use strict';

  angular
    .module('after')
    .controller('OrgController', OrgController);

  /** @ngInject */
  function OrgController($firebaseObject, $scope, $uibModal, AuthService) {
    var ref = firebase.database().ref().child('orgs');

    var ctrl = this;
    var userId;
    ctrl.addEvent    = addEvent;
    ctrl.editOrgInfo = editOrgInfo;

    activate();

    function activate() {
      AuthService.isLoggedIn();

      getOrgInformation();
    }

    function addEvent() {
      $uibModal.open({
        templateUrl:  '../../../app/components/modals/eventModal/eventModal.html',
        controller:   'EventModalCtrl',
        controllerAs: 'ctrl',
        size:         'lg',
        resolve:      {
          items: function () {
            return $scope.items;
          }
        }
      });
    }

    function editOrgInfo(org) {
      console.log('Open Org Modal');
      $uibModal.open({
        templateUrl:  '../../../app/components/modals/orgModal/orgModal.html',
        controller:   'OrgModalCtrl',
        controllerAs: 'ctrl',
        size:         'lg',
        resolve:     {
          org: org
        }
      });
    }

    function getOrgInformation() {
      userId = localStorage.getItem('userId');
      console.log(userId);
      
      var ref = firebase.database().ref().child('orgs/'+ userId);
      var obj = $firebaseObject(ref);
      obj.$loaded().then(function (data) {
        console.log(data);
        ctrl.org = data;
      })
    }
  }
})();

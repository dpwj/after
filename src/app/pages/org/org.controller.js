(function () {
  'use strict';

  angular
    .module('after')
    .controller('OrgController', OrgController);

  /** @ngInject */
  function OrgController($firebaseArray, $firebaseObject,  $scope, $uibModal, AuthService) {
    var ref = firebase.database().ref().child('orgs');

    var ctrl = this;
    var userId = localStorage.getItem('userId');

    ctrl.addEvent    = addEvent;
    ctrl.editOrgInfo = editOrgInfo;
    ctrl.remove = remove;

    activate();

    function activate() {
      AuthService.isLoggedIn();

      getOrgInformation();
      fetchEvents();
    }

    function addEvent(event) {
      $uibModal.open({
        templateUrl:  '../../../app/components/modals/eventModal/eventModal.html',
        controller:   'EventModalCtrl',
        controllerAs: 'ctrl',
        size:         'lg',
        resolve:      {
         event: event
        }
      });
    }

    function editOrgInfo(org) {
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
      var ref = firebase.database().ref().child('orgs/'+ userId);
      var obj = $firebaseObject(ref);
      obj.$loaded().then(function (data) {
        console.log(data);
        ctrl.org = data;
      })
    }

    function fetchEvents() {
      var ref = firebase.database().ref().child('orgs/' + userId + '/events');
      var list = $firebaseArray(ref);
      list.$loaded()
        .then(function (x) {
          ctrl.events = x;
        })
        .catch(function (error) {
          console.log("Error:", error);
        });
    }

    function remove(id) {
      var ref = firebase.database().ref().child('orgs/' + userId + '/events/' + id);
      var obj = $firebaseObject(ref);
      obj.$remove();
    }

  }
})();

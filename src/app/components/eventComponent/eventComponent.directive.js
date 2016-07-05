;(function () {
  'use strict';

  angular
    .module('after')
    .directive('afEventComponent', afEventComponent);

  function afEventComponent() {
    var directive = {
      link: link,
      restrict: 'E',
      scope:{
        events: '@'
      },
      templateUrl: 'app/components/eventComponent/eventComponent.html'

    };

    return directive;

    function link(scope) {
      var ctrl = this;
      console.log(scope.events);
      var obj = JSON.parse(scope.events);
      console.log(obj);
    }
  }
})();

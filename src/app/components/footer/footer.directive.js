;(function () {
  'use strict';

  angular
    .module('after')
    .directive('afFooter', afFooter);

  function afFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html'
    };

    return directive;
  }
})();

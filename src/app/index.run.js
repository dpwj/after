(function() {
  'use strict';

  angular
    .module('fullSail')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

(function() {
  'use strict';

  angular
    .module('tutorsGurukul')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

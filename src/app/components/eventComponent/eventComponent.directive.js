;(function () {
  'use strict';

  angular
    .module('after')
    .directive('afEventComponent', afEventComponent);

  function afEventComponent() {
    var directive = {
      link: link,
      restrict: 'E',
      $scope:{},
      templateUrl: 'app/components/eventComponent/eventComponent.html'

    };

    return directive;

    function link($scope) {
      var ctrl = this;
      $scope.events = [
        {
         "id": "1",
          "date": "02/02/1988",
          "description": "this is the description",
          "end_time": "5:00 pm",
          "event_name": "Food Drive",
          "start_time": "12:30 pm"
        }
        // {
        //   "id":          "1",
        //   "date":        "02/02/1988",
        //   "description": "this is the description",
        //   "end_time":    "5:00 pm",
        //   "event_name":  "Food Drive",
        //   "start_time":  "12:30 pm"
        // }, {
        //   "id":          "1",
        //   "date":        "02/02/1988",
        //   "description": "this is the description",
        //   "end_time":    "5:00 pm",
        //   "event_name":  "Food Drive",
        //   "start_time":  "12:30 pm"
        // }, {
        //   "id":          "1",
        //   "date":        "02/02/1988",
        //   "description": "this is the description",
        //   "end_time":    "5:00 pm",
        //   "event_name":  "Food Drive",
        //   "start_time":  "12:30 pm"
        // }
      ];
    }
  }
})();

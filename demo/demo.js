var app = angular.module('rzSliderDemo', ['rzModule', 'ui.bootstrap'])

app.controller('MainCtrl', function($scope, $rootScope, $timeout, $uibModal) {
  //Minimal slider config
  $scope.minSlider = {
    value: 10,
  }
  $scope.amcustDebugSlider = {
    value: 7,
    options: {
      showTicks: 1,
      showTicksValues: 1,
      floor: 4,
      ceil: 12,
      step: 1,
      showSelectionBar: false,
      showAdvice: 10,
      customBtnPlus: function(value) {
        console.log('!!! amcust: customBtnPlus(' + value + ')');
        // $scope.$broadcast('rzSliderForceRender')
        // positionTrackingHandle(value);
      }
    },
  }

  $scope.customBtnPlus = function(getValue) {
    console.log('!!! amcust: broadcast(' + getValue + ')');
    setTimeout(function(){
        console.log('!!! amcust: boradcast... amcustFunc(' + getValue + ')');
        $scope.$broadcast('rzSliderForceRender');
        $scope.$broadcast('amcustFunc', getValue);
    }, 10);
}

  /* 
  vm.refreshSlider = function() {
  $timeout(function() {
    $scope.$broadcast('rzSliderForceRender')
  })
}
*/

})

app.directive('clickableLabel', function() {
  return {
    restrict: 'E',
    scope: { label: '=' },
    replace: true,
    template:
      "<button ng-click='onclick(label)' style='cursor: pointer;'>click me - {{label}}</button>",
    link: function(scope, elem, attrs) {
      scope.onclick = function(label) {
        console.log("I'm " + label);
        scope.amcustDebugSlider.options.showAdvice = 1;
      }
    },
  }
})

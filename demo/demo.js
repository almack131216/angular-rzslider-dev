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
      showAdvice: 10
    },
  }

  $scope.customBtnMinus = function() {
    console.log('!!! amcust: customBtnMinus()(' + $scope.amcustDebugSlider.value + ')');
    if($scope.amcustDebugSlider.value > $scope.amcustDebugSlider.options.floor) {
      $scope.amcustDebugSlider.value--;
    }
  }

  $scope.customBtnPlus = function() {
    console.log('!!! amcust: customBtnPlus()(' + $scope.amcustDebugSlider.value + ')');
    if($scope.amcustDebugSlider.value < $scope.amcustDebugSlider.options.ceil) {
      $scope.amcustDebugSlider.value++;
    }
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

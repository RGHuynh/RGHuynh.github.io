(function(){
  var config = {
    templateUrl: '/app/components/navigation/menuButton/menuButton.component.html',
    controller: menuButtonCtrl
  }

  function menuButtonCtrl($scope) {
    var ctrl = this;
    $scope.checked = true;
  }
  
  angular
    .module('rghuynhApp')
    .component('menuButton', config)
})();
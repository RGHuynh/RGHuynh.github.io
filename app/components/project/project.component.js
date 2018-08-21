(function(){
  var config = {
    templateUrl: '/app/components/project/project.component.html',
    bindings: {
      data: '<'
    }
  };
  
  angular
    .module('rghuynhApp')
    .component('project', config)
})();
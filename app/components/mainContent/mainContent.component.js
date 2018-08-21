(function(){
  var config = {
    templateUrl: '/app/components/mainContent/mainContent.component.html',
    controller: mainController
  }

  function mainController(projectService){
    var ctrl = this;

    ctrl.projects = projectService.getProjects
  }
  
  angular
    .module('rghuynhApp')
    .component('mainContent', config)
})();
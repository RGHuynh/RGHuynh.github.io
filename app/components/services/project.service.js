(function(){
  angular
    .module('rghuynhApp')
    .factory('projectService', projectService)

    function projectService(){
      var projects = [
        {
          url: 'https://random-restaurant46.herokuapp.com/',
          img: '/app/assets/images/randomRestaurant.svg'
        }
      ]

      var service = {
        getProjects: getProjects
      }

      function getProjects() {
        return projects
      }

      return service
 
    }
})();
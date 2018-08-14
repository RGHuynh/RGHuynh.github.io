(function(){
  angular
    .module('rghuynhApp')
    .config(function route($routeProvider){
      $routeProvider
        .when('/', {
          template: '<homepage />'
        })
    })
})()
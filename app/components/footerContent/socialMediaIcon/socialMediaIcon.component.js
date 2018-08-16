(function(){
  var config = {
    templateUrl: '/app/components/footerContent/socialMediaIcon/socialMediaIcon.component.html',
    bindings: {
      data: '<'
    }
  };

  angular
    .module('rghuynhApp')
    .component('socialMediaIcon', config)
})();
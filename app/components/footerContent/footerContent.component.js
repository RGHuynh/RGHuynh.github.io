(function(){
  var config = {
    templateUrl: '/app/components/footerContent/footerContent.component.html',
    controller: footerContentController
  };
  
  function footerContentController(socialMediaIconService) {
    var ctrl = this;

    ctrl.getSocialMedia = socialMediaIconService.getSocialMedia;
  }
  
  angular
  .module('rghuynhApp')
  .component('footerContent', config)
})();
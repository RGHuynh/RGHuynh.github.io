(function(){
  angular
    .module('rghuynhApp')
    .factory('socialMediaIconService', socialMediaIconService)

    function socialMediaIconService(){
      var service = {
        getSocialMedia: getSocialMedia
      };

      var socialMedia = [
      {
        url: 'https://github.com/RGHuynh',
        icon: '/app/assets/images/github.svg'
      },
      {
        url: "https://dribbble.com/RGHuynh",
        icon: '/app/assets/images/dribble.svg'
      },
      {
        url: "https://www.linkedin.com/in/randallhuynh/",
        icon: "/app/assets/images/linkedIn.svg"
      }
    ]

      function getSocialMedia() {
        return socialMedia;
      }

      return service;
    }
})();
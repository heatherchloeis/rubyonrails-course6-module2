(function () {
  "use strict";

  angular
  	.module("module2.cities")
  	.directive("m2Cities", CitiesDirective);
  	//m2-cities

  CitiesDirective.$inject = ["module2.APP_CONFIG"];
  function CitiesDirective(APP_CONFIG) {
  	var directive = {
  	  templateUrl: APP_CONFIG.cities_html,
  	  replace: true,
  	  bindToController: true,
  	  controller: "module2.cities.CityController",
  	  controllerAs: "citiesVM",
  	  restrict: "E",
  	  scope: {},
  	  link: link
  	};
  	return directive;

  	function link(scope, element, attrs) {
  	  console.log("CitiesDirective", scope);
  	}
  }

})();
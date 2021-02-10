angular.module("plantaoSti").config(function ($routeProvider) {
  $routeProvider.when("/plantoes", {
    templateUrl: "view/plantoes.html",
    controller: "plantaoStiCtrl",
    resolve: {
      plantoes: function (plantoesAPI) {
        return plantoesAPI.getPlantoes();
      },
    },
  });

  $routeProvider.when("/plantao/:id", {
    templateUrl: "view/detalhesPlantao.html",
    controller: "detalhesPlantaoCtrl",
    resolve: {
      plantoes: function (plantoesAPI, $route) {
        return plantoesAPI.getPlantao($route.current.params.id);
      },
    },
  });

  $routeProvider.when("/farmacias", {
    templateUrl: "view/farmacias.html",
    controller: "plantaoStiCtrl",
    resolve: {
      plantoes: function (plantoesAPI) {
        return plantoesAPI.getPlantoes();
      },
    },
  });

  $routeProvider.when("/farmacia/:id", {
    templateUrl: "view/detalhesFarmacia.html",
    controller: "detalhesFarmaciaCtrl",
    resolve: {
      plantoes: function (plantoesAPI, $route) {
        return plantoesAPI.getPlantao($route.current.params.id);
      },
    },
  });

  $routeProvider.otherwise({redirectTo: "/plantao"});
});

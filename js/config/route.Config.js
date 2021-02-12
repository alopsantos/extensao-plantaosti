angular.module("plantaoSti").config(function ($routeProvider) {
  $routeProvider.when("/plantao/:id", {
    templateUrl: "view/plantao.html",
    controller: "detalhePlantaoCtrl",
    resolve: {
      plantao: function (plantoesAPI, $route) {
        return plantoesAPI.getPlantao($route.current.params.id);
      },
    },
  });

   $routeProvider.when("/plantoes", {
    templateUrl: "view/plantoes.html",
    controller: "listaPlantoesCtrl",
    resolve: {
      plantoes: function (plantoesAPI) {
        return plantoesAPI.getPlantoes();
      },
    },
  });

/*
  $routeProvider.when("/detalhesPlantao/:id", {
    templateUrl: "view/detalhesPlantao.html",
    controller: "detalhePlantaoCtrl",
    resolve: {
      plantao: function (plantoesAPI, $route) {
        return plantoesAPI.getPlantao($route.current.params.id);
      },
    },
  });

  $routeProvider.when("/farmacias", {
    templateUrl: "view/farmacias.html",
    controller: "novoContatoCtrl",
    resolve: {
      farmacias: function (operadorasAPI) {
        return operadorasAPI.getFarmacias();
      },
    },
  });

  $routeProvider.when("/detalhesFarmacia/:id", {
    templateUrl: "view/detalhesFarmacia.html",
    controller: "novoContatoCtrl",
    resolve: {
      farmacia: function (contatosAPI, $route) {
        return contatosAPI.getContato($route.current.params.id);
      },
    },
  });
 */
  $routeProvider.otherwise({ redirectTo: "/plantoes" });
});

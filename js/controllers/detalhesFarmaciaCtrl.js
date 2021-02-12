angular
  .module("plantaoSti")
  .controller(
    "detalhesFarmaciaCtrl",
    function ($scope, farmacia) {
      $scope.farmacia = farmacia.data;
    }
  );

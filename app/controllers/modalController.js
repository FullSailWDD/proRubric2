<<<<<<< HEAD
angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);
angular.module('myApp').controller('myCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'hello.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });


  };


<<<<<<< HEAD
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
=======
=======
myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, data, $http, $route) {
  $scope.data = data;
  $scope.selected = {
    data: $scope.data
  };
    console.log("Scopre.data modalInstance",$scope.data);
>>>>>>> 3767008f4d24c9a37c3d27531119fefdd31db1e9
$scope.update = function() {
  console.log("======", $scope.data);
  $http.put('/api/courses/' + $scope.data._id, $scope.data).success(function(response) {
  $modalInstance.close();
})
};
<<<<<<< HEAD
})
>>>>>>> 71c8907b9548e71ebb41a62cb93ea92f3aa8d0da
=======

$scope.reloadRoute = function(){
  $route.reload();
};

})
>>>>>>> 3767008f4d24c9a37c3d27531119fefdd31db1e9


angular.module("jeviteca").controller("AlbumsCtrl", function($scope, Albums) {
        $scope.albums = Albums.data;
});

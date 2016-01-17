angular.module("jeviteca").service("GenresService", function ($http) {
    this.getData = function () {
        return $http.get("data/genres.json");
    }
})
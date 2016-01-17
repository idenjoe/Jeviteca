angular.module("jeviteca").service("AlbumsService", function ($q, $filter, $http) {
    this.getData = function () {
        return $http.get("data/albums.json");
    }

    this.getAlbumDetailData = function (id) {
        var deferred = $q.defer();
        this.getData().then(function(data) {
            deferred.resolve($filter("filter")(data.data, { id: id })[0]);
        });
        return deferred.promise;
    }
})

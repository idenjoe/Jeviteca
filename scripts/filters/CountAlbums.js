angular.module("jeviteca").filter("countAlbums", function() {
        return function(albums) {
            return albums.length + " álbumes";
        };
    });
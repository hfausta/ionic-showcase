angular.module('ionic_showcase.services', [])

.factory('List', function() {
	var list = [
		{ userId: 0, name: 'Henry'},
		{ userId: 1, name: 'Lianne'},
		{ userId: 2, name: 'Gin'}
	];
	
	return {
		all: function() {
			return list;
		},
		
		get: function(userId) {
			for(var v in list) {
				if(list[v].userId === parseInt(userId)) {
					return list[v];
				}
			}
		},
		
		add: function(user) {
			if(this.get(user.userId) == null) {
				list.push({ userId: parseInt(user.userId), name: user.name});
			} else {
				return "Insert Failed - ID already exists";
			}
			
			return "Insert Success - Check user list";
		},
		
		remove: function(userId) {
			for(var v in list) {
				if(list[v].userId === parseInt(userId)) {
					list.splice(v, 1);
					
					return "Successfully removed user";
				}
			}
		}
	}
})

.factory('Scanner', function($q) {
	
	return {
		scan: function() {
			var deferred = $q.defer();
			
			cordova.plugins.barcodeScanner.scan(
				function(result) {
					deferred.resolve(JSON.stringify(result));
				},
				function(error) {
					alert("Scanning failed: " + error);
					deferred.reject();
				}
			);
			
			return deferred.promise;
		}
	}
})
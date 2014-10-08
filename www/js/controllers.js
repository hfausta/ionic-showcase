angular.module('ionic_showcase.controllers', [])

.controller('ListController', function($scope, List) {
	$scope.list = List.all();
})

.controller('ListDetailsController', function($scope, 
	$stateParams, List) {
	$scope.item = List.get($stateParams.itemId);
})

.controller('FormController', function($scope, $ionicModal, List) {
	$ionicModal.fromTemplateUrl('templates/modal.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	})
	
	$scope.addItem = function(item) {
		$scope.message = List.add(item);
		
		$scope.modal.show();
	}
	
	$scope.closeModal = function() {
		$scope.modal.hide();
		
		$scope.empty = { 'id' : '', 'name' : ''};
	}
})

.controller('ScannerController', function($scope, ListSrv) {
	$scope.results = 0;
	
	$scope.scan = function() {
		ListSrv.scan($scope).then(function(success){
			$scope.results = success;
		}, function(error){
			
		});
	}
})
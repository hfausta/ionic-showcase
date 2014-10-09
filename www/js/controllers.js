angular.module('ionic_showcase.controllers', [])

.controller('MenuController', function($scope, $state, 
	$ionicModal, $ionicPopup, List) {
	$scope.showAdd = function() {
		if($state.current.name === 'showcase.list-add') {
			return true;
		} else {
			return false;
		}
	}
	
	/*
		Declare modal
	*/
	$ionicModal.fromTemplateUrl('templates/modal.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	})
	
	$scope.openModal = function() {
		$scope.modal.show();
	}
	
	$scope.closeModal = function() {
		$scope.modal.hide();
	}
	
	$scope.addItem = function(item) {
		message = List.add(item);
		
		$ionicPopup.alert({
			title: "Submission Status",
			template: message
		})
	}
})

.controller('ListController', function($scope, List) {
	$scope.list = List.all();
})

.controller('ListDetailsController', function($scope, 
	$stateParams, List) {
	$scope.item = List.get($stateParams.itemId);
})

.controller('FormController', function($scope, $ionicPopup, List) {
	$scope.addItem = function(item) {
		message = List.add(item);
		
		$ionicPopup.alert({
			title: "Submission Status",
			template: message
		})
	}
})

.controller('ScannerController', function($scope, Scanner) {
	$scope.results = 0;
	
	$scope.scan = function() {
		Scanner.scan($scope).then(
			function(success) {
				$scope.results = success;
			}, 
			function(error) {
				
			}
		);
	}
})

.controller('ListAddController', function($scope) {
	
})
angular.module('ionic_showcase.controllers', [])

.controller('MenuController', function($scope, $state, 
	$ionicModal, $ionicPopup, List) {
	$scope.showAdd = function() {
		if($state.current.name === 'showcase.list-add') {
			$scope.add = "Add Item";
			return true;
		} else if($state.current.name === 'showcase.cards') {
			$scope.add = "Add Card";
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
		$scope.item = {}
		
		if($state.current.name === 'showcase.list-add') {
			$scope.title = "Item";
			$scope.type = "item";
		} else {
			$scope.title = "Card";
			$scope.type = "card";
		}
		
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
		
		$scope.modal.hide();
	}
})

.controller('ListController', function($scope, $ionicPopup, List) {
	$scope.list = List.all();
	
	$scope.deleteItem = function(item) {
		$ionicPopup.confirm({
			title: 'Delete Card',
			template: 'Are you sure you want to remove user '+ item.name + ' ?'
		}).then(function(res) {
			if(res) {
				message = List.remove(item.userId);
				
				$ionicPopup.alert({
					title: "Deletion Status",
					template: message
				})	
			}
		})
	}
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
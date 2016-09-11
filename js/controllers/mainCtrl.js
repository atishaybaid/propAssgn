angular.module('propApp').controller('mainCtrl',['$scope',function($scope){
	console.log("mainCtrl called");
	$scope.chartType='';
	$scope.generateGraphs = function(type){
		$scope.chartType = type;
		

	};

	$scope.closeModel = function(){
				$scope.chartType = '';

			};
}])

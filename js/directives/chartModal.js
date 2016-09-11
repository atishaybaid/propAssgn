angular.module('propApp').directive('chartModal',['d3ChartGenetrator','fussionChartGenerator',function(d3ChartGenetrator,fussionChartGenerator){
	return{
		templateUrl:'js/views/chartModal.html',
		link:function(scope,elm,attr){
			d3ChartGenetrator.chartGenetator();
			fussionChartGenerator.generate();


			scope.closeChart = function(){
				scope.chartType = '';
				
			};


			

		}
	}

}]);

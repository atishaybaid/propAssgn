angular.module('propApp').directive('illustrationModal',function(){
	return{
		templateUrl:'js/views/illustrationModal.html',
		link:function(scope,elm,attr){
			scope.data={lStatus:33}
			scope.$watch('data.lStatus',function(value){
				console.log(value);
			})



			

		}
	}

});

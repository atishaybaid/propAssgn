angular.module('propApp').directive('chartModal',['d3ChartGenetrator',function(d3ChartGenetrator){
	return{
		scope:{},
		templateUrl:'js/views/chartModal.html',
		link:function(scope,elm,attr){
			d3ChartGenetrator.chartGenetator();

			/*var margin = {top: 20, right: 20, bottom: 40, left: 50},
	    	width = 575 - margin.left - margin.right,
	    	height = 350 - margin.top - margin.bottom;

	    	var x = d3.scale.linear()
			    .domain([0, d3.max(data, function(d) { return d.x; })])
			    .range([0, width]);

			var y = d3.scale.linear()
			    .domain([0, d3.max(data, function(d) { return d.y; })])
			    .range([height, 0]);

			var xAxis = d3.svg.axis()
			    .scale(x)
			    .orient("bottom");

			var yAxis = d3.svg.axis()
			    .scale(y)
			    .orient("left");

			var area = d3.svg.area()
		    .x(function(d) { return x(d.x); })
		    .y0(height)
		    .y1(function(d) { return y(d.y); });


		    var svg = d3.select("svg#area-graph")
   	 .attr("width", width + margin.left + margin.right)
   	 .attr("height", height + margin.top + margin.bottom)
  	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("path")
    .datum(data)
    .attr("class", "area")
    .attr("d", area);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
		
*/
		}
	}

}]);
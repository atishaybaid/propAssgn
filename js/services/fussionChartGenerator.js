angular.module('propApp').service('fussionChartGenerator',function(){
	this.generate = function(){
		FusionCharts.ready(function () {
  			  var cricketChart = new FusionCharts({
        type: 'area2d',
        renderAt: 'chart-container',
        width: '400',
        height: '200',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Cricket stats",
                "xAxisName": "Year",
                "yAxisName": "Runs",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "plotBorderAlpha": "10",
                "usePlotGradientColor": "0",
                "plotFillAlpha": "50",
                "showXAxisLine": "1",
                "axisLineAlpha": "25",
                "divLineAlpha": "10",
                "showValues": "1",
                "showAlternateHGridColor": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
            },
            
            "data": [
                {
                    "label": "2010",
                    "value": "2080"
                }, 
                {
                    "label": "2011",
                    "value": "1460"
                }, 
                {
                    "label": "2012",
                    "value": "3300"
                }, 
                {
                    "label": "2013",
                    "value": "1990"
                }, 
                {
                    "label": "2014",
                    "value": "5529"
                }, 
                {
                    "label": "2015",
                    "value": "5803"
                }, 
                {
                    "label": "2016",
                    "value": "5300"
                }
            ]
        }
    })
    .render()
   
  
	})
	
	}

})
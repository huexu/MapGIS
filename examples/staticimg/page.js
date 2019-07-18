$(document).ready(function(){
	var extent = [0, 0, 768, 697];
	var projection = new ol.proj.Projection({
	  code: 'xkcd-image',
	  units: 'pixels',
	  extent: extent
	});

	var map = new ol.Map({
	  layers: [
	    new ol.layer.Image({
	      source: new ol.source.ImageStatic({
	        url: '../resources/staticimage/GF1_PMS1_E115.8_N40.8_20150623_L1A0000877774_browser.jpg',
	        projection: projection,
	        imageExtent: extent
	      })
	    })
	  ],
	  controls:[],
	  target: 'map',
	  view: new ol.View({
	    projection: projection,
	    center: ol.extent.getCenter(extent),
	    zoom: 2
	  })
	});
	
	//使地图默认鼠标形状为漫游形状
	var element = map.getTargetElement();
	var host = ATGis._getScriptLocation()+"../../css/imgs/";
	element.style.cursor = "url("+ host +"DragPanControl.cur),default";
});

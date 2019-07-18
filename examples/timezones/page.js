$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	configs["Settings"]["initBaseLayer"]="baselayer_satellite";

	//初始化地图
	ATGis.initMap("map",configs);
	var lyattrs = {id:'countriesgeojson',url:'../resources/kml/timezones.kml'};
	lyattrs["styleFunction"] = styleFunction;
	ATGis.emitter.emit("addLayer",lyattrs,"kml");
	
	//事件
	ATGis.emitter.emit("getMap",function(mapobj){
		var info = $('<div id="info" style="position: absolute;height: 1px;width: 1px;z-index: 100;"></div>');
		info.tooltip({
		  animation: false,
		  trigger: 'manual'
		});
		$("#map").append(info);
		var displayFeatureInfo = function(pixel) {
			  info.css({
			    left: pixel[0] + 'px',
			    top: (pixel[1] - 15) + 'px'
			  });
			  var feature = mapobj.forEachFeatureAtPixel(pixel, function(feature, layer) {
			    return feature;
			  });
			  if (feature) {
			    info.tooltip('hide')
			        .attr('data-original-title', feature.get('name'))
			        .tooltip('fixTitle')
			        .tooltip('show');
			  } else {
			    info.tooltip('hide');
			  }
			};
			mapobj.on('pointermove', function(evt) {
				  if (evt.dragging) {
				    info.tooltip('hide');
				    return;
				  }
				  displayFeatureInfo(mapobj.getEventPixel(evt.originalEvent));
				});

			mapobj.on('click', function(evt) {
				  displayFeatureInfo(evt.pixel);
				});
	});
}


/**
 * feature 样式渲染
 */
var styleFunction = function(feature, resolution) {
	  var offset = 0;
	  var name = feature.get('name'); // e.g. GMT -08:30
	  var match = name.match(/([\-+]\d{2}):(\d{2})$/);
	  if (match) {
	    var hours = parseInt(match[1], 10);
	    var minutes = parseInt(match[2], 10);
	    offset = 60 * hours + minutes;
	  }
	  var date = new Date();
	  var local = new Date(date.getTime() +
	      (date.getTimezoneOffset() + offset) * 60000);
	  // offset from local noon (in hours)
	  var delta = Math.abs(12 - local.getHours() + (local.getMinutes() / 60));
	  if (delta > 12) {
	    delta = 24 - delta;
	  }
	  var opacity = 0.5 * (1 - delta / 12);
	  return [new ol.style.Style({
	    fill: new ol.style.Fill({
	      color: [0xff, 0xff, 0x33, opacity]
	    }),
	    stroke: new ol.style.Stroke({
	      color: '#ffffff'
	    })
	  })];
	};
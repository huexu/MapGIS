$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

var map;
var features = new ol.Collection();
function initPage(configs){
	//初始化地图
	ATGis.initMap("map",configs);
	ATGis.emitter.emit("getMap",function(mapObj){
		map = mapObj;
	});
	
	var featureOverlay = new ol.layer.Vector({
	  source: new ol.source.Vector({features: features}),
	  style: new ol.style.Style({
	    fill: new ol.style.Fill({
	      color: 'rgba(255, 255, 255, 0.2)'
	    }),
	    stroke: new ol.style.Stroke({
	      color: '#ffcc33',
	      width: 2
	    }),
	    image: new ol.style.Circle({
	      radius: 7,
	      fill: new ol.style.Fill({
	        color: '#ffcc33'
	      })
	    })
	  })
	});
	featureOverlay.setMap(map);

	var modify = new ol.interaction.Modify({
		  features: features,
		  // the SHIFT key must be pressed to delete vertices, so
		  // that new vertices can be drawn at the same position
		  // of existing vertices
		  deleteCondition: function(event) {
		    return ol.events.condition.shiftKeyOnly(event) &&
		        ol.events.condition.singleClick(event);
		  }
		});
	
	/*modify.handleUpEvent = function(evt) {
		alert(11)
		  var feature = evt.element;
		  var formatter = new ol.format.WKT();
		    var wkt = formatter.writeFeature(feature);
		    alert(wkt)
		  this.addFeature_(feature);
		};
	console.log(modify);*/
	
		map.addInteraction(modify);
		
		addInteraction();
}

var draw; // global so we can remove it later
function addInteraction() {
  draw = new ol.interaction.Draw({
    features: features,
    type:"Polygon"
  });
  map.addInteraction(draw);
}

$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	configs["Settings"]["initBaseLayer"]="baselayer_satellite";
	//初始化地图
	ATGis.initMap("map",configs);
	
	ATGis.emitter.emit("getMap",function(mapObj){
		mapObj.on('moveend', function(){
			  var extent = mapObj.getView().calculateExtent(mapObj.getSize());
			  var bottomLeft = ol.extent.getBottomLeft(extent);
			  var topRight = ol.extent.getTopRight(extent);
			  var bound = "left:"+bottomLeft[0]+" \r\n";
			  bound += "bottom:"+bottomLeft[1]+" \r\n";
			  bound += "right:"+topRight[0]+" \r\n";
			  bound += "top:"+topRight[1];
			  alert(bound);
		});
	});
}
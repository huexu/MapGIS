$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	configs["Settings"]["initBaseLayer"]="baselayer_satellite";
	
	//初始化地图
	ATGis.initMap("domMap",configs);
	//隐藏工具栏
//	$("#map_title").hide();
	//初始化复制地图
	ATGis.emitter.emit("getMap",function(mapObj){
		var canvasMap = new ol.Map({
			  target: 'canvasMap',
			  layers: mapObj.getLayers(),
			  view: mapObj.getView(),
			  controls:[]
		});
	});
}
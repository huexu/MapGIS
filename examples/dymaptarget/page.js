$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	configs["Settings"]["initBaseLayer"]="baselayer_satellite";
	
	//初始化地图
	ATGis.initMap("map1",configs);
	$("#map_title").hide();
	
	var teleportButton = document.getElementById('teleport');
	ATGis.emitter.emit("getMap",function(map){
		teleportButton.addEventListener('click', function() {
		   var target = map.getTarget() === 'map1' ? 'map2' : 'map1';
		   map.setTarget(target);
		}, false);
	});
}
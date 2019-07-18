$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	configs["Settings"]["initBaseLayer"]="baselayer_satellite";
	var tools = configs["Tools"];
	tools["CurtainControl"]["display"]=true;
	
	//初始化地图
	ATGis.initMap("map",configs);
}
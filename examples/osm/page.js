$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	configs["Settings"]["initBaseLayer"]="baselayer_vector";
	configs["BaseLayers"]["baselayer_vector"]["layerGroup"]=[{
		"url":"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
		"zoomlevels": 17,
		"name":"OSMLayers",
		"format": "image/png",
		"layerType" : "osm"
	}];
	var tools = configs["Tools"];
	tools["NorthCompass"]["display"]=true;
	//初始化地图
	ATGis.initMap("map",configs);
}
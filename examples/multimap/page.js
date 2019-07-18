$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	//底图设置
	configs["Settings"]["initBaseLayer"]="baselayer_vector";
	configs["BaseLayers"]["baselayer_vector"]["layerGroup"]=[{
		"url" : "http://172.172.9.231:1080/geoserver/ATMap/wms?request=GetMap",
		"zoomlevels": 17,
		"name":"BaseLayers",
		"format": "image/png",
		"serverType" : "geoserver",
		"layerType" : "wms"
	}];
	var tools = configs["Tools"];
	tools["MultiMap"]["display"]=true;
	ATGis.MMTREEURL = ctx+"examples/resources/layerplay/layerplayData.datajson";
	ATGis.MMConditions = {};
	ATGis.MMTREEINITNODES = ["131b9e2f-1a0e-423e-84e8-07d24e3f8579"];
	
	//初始化地图
	ATGis.initMap("map",configs);
	$("#map").css("background","#fff");
}
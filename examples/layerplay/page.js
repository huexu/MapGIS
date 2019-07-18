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
	//开放图层轮播工具
	var tools = configs["Tools"];
	tools["LayerPlay"]["display"]=true;
	//设置轮播图层数据获取URL
	ATGis.MMTREEURL = ctx+"examples/resources/layerplay/layerplayData.datajson";
	//设置获取轮播图层参数
	ATGis.MMConditions = {};
	
	//初始化地图
	ATGis.initMap("map",configs);
	$("#map").css("background","#fff");
	

	//将地图zoom到北京测试数据范围
	var bjwkt = "POLYGON((115.413810759699 39.4419782606562,115.413810759699 41.0592842621624,117.499198761641 41.0592842621624,117.499198761641 39.4419782606562,115.413810759699 39.4419782606562))";
	ATGis.emitter.emit("zoomToExtent",bjwkt);
}
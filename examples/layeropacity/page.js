$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	configs["Settings"]["initBaseLayer"]="baselayer_satellite";
	var tools = configs["Tools"];
	tools["LayerOpcity"]["display"]=true;
	//初始化地图
	ATGis.initMap("map",configs);
}

function afterMapLoad(){
	var lyattrs = {id:'world',displayName:"世界矢量地图",url:'http://172.24.3.152:8080/geoserver/wms',name:'ATMap:BaseLayers',serverType:'geoserver',bbox:""};
	ATGis.emitter.emit("addLayer",lyattrs,'wms');
	ATGis.emitter.emit("zoomToCenter",-97.9,40.15,"pan");
}
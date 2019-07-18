$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	var tools = configs["Tools"];
	tools["LayerSpy"]["display"]=true;
	//重新设置滤镜图层，默认的图层是baseLayer0
	ATGis.LayerSpylid = "baseLayer1";
	
	//初始化地图
	ATGis.initMap("map",configs);
}
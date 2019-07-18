$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	var tools = configs["Tools"];
	tools["DrawPoint"]["display"]=true;
	tools["DrawLine"]["display"]=true;
	tools["DrawRect"]["display"]=true;
	tools["DrawPolygon"]["display"]=true;
	
	//初始化地图
	ATGis.initMap("map",configs);
}

/**
 * 绘制feature回调
 */
function toSetWkt(wkt,type){
	alert(type+" : "+wkt);
}
$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	var tools = configs["Tools"];
	tools["DrawSquare"]["display"]=true;
	tools["DrawCircle"]["display"]=true;
	tools["DrawArrow"]["display"]=true;
	
	//初始化地图
	ATGis.initMap("map",configs);
}

/**
 * 绘制feature回调
 */
function toSetWkt(wkt,type){
	alert(type+" : "+wkt);
}
/**
 * 绘制圆回调
 * @param center
 * @param radius
 */
function toSetCircle(center,radius){
	alert("圆心："+center+" 半径："+radius);
}
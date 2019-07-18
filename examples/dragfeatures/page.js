$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
//	configs["Settings"]["initBaseLayer"]="baselayer_satellite";
	var tools = configs["Tools"];
	tools["DragFeature"]["display"]=true;
	
	//初始化地图
	ATGis.initMap("map",configs);
}

/**
 * 地图加载回调
 */
function afterMapLoad(){
	var pointFeature = new ol.Feature(new ol.geom.Point([117, 39]));

	var lineFeature = new ol.Feature(
	    new ol.geom.LineString([[110, 38], [119, 45],[140, 45]]));

	var polygonFeature = new ol.Feature(
	    new ol.geom.Polygon([[[106.5, 35.3], [116.5, 20.3],
	        [116.6, 36], [120.9, 37.1], [106.5, 35.3]]]));
	ATGis.emitter.emit("addFeatureOnMap","myVectorLayer",pointFeature);
	ATGis.emitter.emit("addFeatureOnMap","myVectorLayer",lineFeature);
	ATGis.emitter.emit("addFeatureOnMap","myVectorLayer",polygonFeature);
	
}
/**
 * feature 拖曳后回调
 * @param feat :feature对象
 * @param wkt ：feature的WKT
 */
function handleFeatsUpdate(feat,wkt){
	console.log(feat);
    alert("新位置featureWKT:"+wkt);
}
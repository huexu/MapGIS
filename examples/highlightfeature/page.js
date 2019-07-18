$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	var tools = configs["Tools"];
	tools["HighlightFeature"]["display"]=true;
	
	//初始化地图
	ATGis.initMap("map",configs);
	
	//添加矢量图层
	var lyattrs = {id:'countriesgeojson',url:'../resources/countries.geojson'};
	ATGis.emitter.emit("addLayer",lyattrs,'geojson');
}

function HLFeatureHandle(features){
	console.log(features);
	//alert("我高亮了"+features.getLength()+"个feature, 已输入到控制台");
}
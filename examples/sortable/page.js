$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	//初始化地图
	ATGis.initMap("map",configs);
}

function afterMapLoad(){
	var lyattrs = {id:'world',displayName:"世界矢量地图",url:'http://172.24.3.239:8181/geoserver/wms',name:'atcenter:ds_product_imagery',serverType:'geoserver',bbox:""};
	ATGis.emitter.emit("addLayer",lyattrs,'wms');
	
	var lyattrs2 = {id:'scene',displayName:"景数据",url:'http://172.24.3.239:8181/geoserver/wms',name:'atcenter:ap_product',serverType:'geoserver',bbox:""};
	ATGis.emitter.emit("addLayer",lyattrs2,'wms');
	
	var lyattrs3 = {id:'worldscene',displayName:"科学数据",url:'http://172.24.3.239:8181/geoserver/wms',name:'postgis_datashare:sp_science_data_base_globalwater',serverType:'geoserver',bbox:""};
	ATGis.emitter.emit("addLayer",lyattrs3,'wms');
	
}

$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	configs["Settings"]["initBaseLayer"]="baselayer_satellite";
	var tools = configs["Tools"];
	tools["RegionNav"]["display"]=true;
	ATGis.RegionTreeDataURL = ctx+"examples/resources/regionnav/regionTreeData.datajson";
	ATGis.RegionTreeClickURL = ctx+"examples/resources/regionnav/HNRegion.datajson";
	//初始化地图
	ATGis.initMap("map",configs);
	var warnningInfo = "用户区划导航树点击事件目前写死了河南省Json，请在业务应用action中动态改变！";
	alert(warnningInfo);
}
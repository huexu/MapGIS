$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
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
	tools["NorthCompass"]["display"]=true;
	//初始化地图
	ATGis.initMap("map",configs);
	ATGis.emitter.emit("registLayerClickLisn",["markerly"],popupWin);
	$("#map").css("background","#fff");
	
	//测试动态图层方法
	testAddLayers();
	//测试工具
	testTools();
}

function toSetWkt(wkt,currentTool){
	alert(wkt)
}

function popupWin(poidata){
	if(poidata){
		var content = poidata.name;
		ATGis.emitter.emit("overLayPopUp",content);
	}
}

function testAddLayers(){
	var layerbtn = document.getElementById('wmsly');
	layerbtn.addEventListener('click', function() {
		//先清除上次加载的同名图层
		ATGis.emitter.emit("removeLayer",'states');
		var lyattrs = {id:'states',url:'http://172.24.3.152:8080/geoserver/wms',name:'ATMap:BaseLayers',serverType:'geoserver',bbox:""};
		ATGis.emitter.emit("addLayer",lyattrs,'wms');
		ATGis.emitter.emit("zoomToCenter",-97.9,40.15,"pan");
	}, false);
	
	var geojsonly = document.getElementById('geojsonly');
	geojsonly.addEventListener('click', function() {
		//先清除上次加载的同名图层
		ATGis.emitter.emit("removeLayer",'countriesgeojson');
		var lyattrs = {id:'countriesgeojson',url:'../resources/countries.geojson'};
		ATGis.emitter.emit("addLayer",lyattrs,'geojson');
	}, false);
	
	var kmlly = document.getElementById('kmlly');
	kmlly.addEventListener('click', function() {
		//先清除上次加载的同名图层
		ATGis.emitter.emit("removeLayer",'countriesgeojson');
		var lyattrs = {id:'countriesgeojson',url:'../resources/kml/2012-02-10.kml'};
		ATGis.emitter.emit("addLayer",lyattrs,'kml');
		ATGis.emitter.emit("getMap",function(mapobj){
			mapobj.getView().setZoom(9);
			ATGis.emitter.emit("zoomToCenter",7.5,46.5,"pan");
		});
	}, false);
	
	
	var clearly = document.getElementById('clearly');
	clearly.addEventListener('click', function() {
		ATGis.emitter.emit("removeLayer",'states');
		ATGis.emitter.emit("removeLayer",'imagely');
		ATGis.emitter.emit("removeLayer",'countriesgeojson');
		ATGis.emitter.emit("removeFeatureOnMap",'testwktfeature',"feat1");
	}, false);
	
	var wktly = document.getElementById('wktly');
	wktly.addEventListener('click', function() {
		var wkt = $(this).attr("title");
		ATGis.emitter.emit("readWktToFeature",'testwktfeature',wkt,true,true,true,ATGis.DEFAULTSTYLE["tempVector"],"feat1");
	}, false);
	
	var imagely = document.getElementById('imagely');
	imagely.addEventListener('click', function() {
		//先清除上次加载的同名图层
		ATGis.emitter.emit("removeLayer",'imagely');
		var url = '../resources/staticimage/GF1_PMS1_E115.8_N40.8_20150623_L1A0000877774_browser.jpg';
		var lyattrs = {id:'imagely',url:url,wkt:'polygon((115.47776 40.64599,115.81566 40.58309,115.73357 40.32250,115.39693 40.38528,115.47776 40.64599))',bbox:[115.47776,40.62181,115.81566,40.64599]};
		ATGis.emitter.emit("addLayer",lyattrs,'image');
	}, false);
	
	//添加marker图层
	var poidatas = [{name:'marker1',x:-97.9,y:40.15},{name:"marker2",x:106,y:30}];
	var mkly = document.getElementById('markerly');
	mkly.addEventListener('click',function(){
		ATGis.emitter.emit("clearLayer",'markerly');
		var iconurl = ctx+"scripts/ATMap/map3/css/imgs/icon_dw.png";
		ATGis.emitter.emit("addMarkerLayer","markerly",poidatas,iconurl);
	});
	//清除marker
	var clearmkly = document.getElementById('clearmkly');
	clearmkly.addEventListener('click',function(){
		ATGis.emitter.emit("clearLayer",'markerly');
	});
}

/**
 * 测试工具
 */
function testTools(){
	var rotateAroundRome = document.getElementById('rotate-around-rome');
	rotateAroundRome.addEventListener('click', function() {
		ATGis.emitter.emit("rotateAround");
	}, false);
	
	var panToLondon = document.getElementById('pan-to-london');
	panToLondon.addEventListener('click', function() {
		ATGis.emitter.emit("zoomToCenter",-0.12755, 51.507222,"pan");
	}, false);
	
	var elasticToMoscow = document.getElementById('elastic-to-moscow');
	elasticToMoscow.addEventListener('click', function() {
		ATGis.emitter.emit("zoomToCenter",37.6178, 55.7517,"elastic");
	}, false);
	
	var bounceToIstanbul = document.getElementById('bounce-to-istanbul');
	bounceToIstanbul.addEventListener('click', function() {
		ATGis.emitter.emit("zoomToCenter",28.9744, 41.0128,"bounce");
	}, false);
	
	var spinToRome = document.getElementById('spin-to-rome');
	spinToRome.addEventListener('click', function() {
		ATGis.emitter.emit("zoomToCenter",12.5, 41.9,"spinto");
	}, false);
	
	var flyToBern = document.getElementById('fly-to-bern');
	flyToBern.addEventListener('click', function() {
		ATGis.emitter.emit("zoomToCenter",7.4458, 46.95,"flyto");
	}, false);
	
	var spiralToMadrid = document.getElementById('spiral-to-madrid');
	spiralToMadrid.addEventListener('click', function() {
		ATGis.emitter.emit("zoomToCenter",-3.683333, 40.4,"spiralTo");
	}, false);
	
	var zoom2wktextent = document.getElementById('zoom2wktextent');
	zoom2wktextent.addEventListener('click', function() {
		var wkt = $(this).attr("title");
		ATGis.emitter.emit("zoomToExtent",wkt);
	}, false);
}

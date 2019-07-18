$(document).ready(function(){
	var url = ctx + "scripts/ATMap/common/data/mapconfig3_zh.datajson";
	ATGis.getResources(url,initPage);
});

function initPage(configs){
	configs["Settings"]["initBaseLayer"]="baselayer_satellite";
	//初始化地图
	ATGis.initMap("map",configs);
}

function afterMapLoad(){
	ATGis.emitter.emit("getLayer","baseLayer1",function(layer){
		layer.on('precompose', function(event) {
			var ctx = event.context;
			ctx.save();
			ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
			ctx.scale(3, 3);
			ctx.translate(-75, -80);
			ctx.beginPath();
			ctx.moveTo(75, 40);
			ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
			ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
			ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
			ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
			ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
			ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
			ctx.clip();
			ctx.setTransform(1, 0, 0, 1, 0, 0);
		});
		
		layer.on('postcompose', function(event) {
			var ctx = event.context;
			ctx.restore();
		});
	});
}
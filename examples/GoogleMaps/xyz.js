$(document).ready(function(){
	var projection = ol.proj.get("EPSG:900913");
    var projectionExtent = projection.getExtent();
	var maxResolution = ol.extent.getWidth(projectionExtent)/256*2;
	var resolutions = new Array(16);
	var z;
	for (z = 0; z < 16; ++z) {
		resolutions[z] = maxResolution / Math.pow(2, z);
	}
	var tileOrigin = ol.extent.getTopLeft(projectionExtent);
	var layerAttrs = {
		url:"http://mt0.google.cn/vt?lyrs=m&hl=zh-CN&z={z}&y={x}&x={y}"	
	}
		var map = new ol.Map({
		  target: 'map',
		  controls: [
				new ol.control.MousePosition({
					  coordinateFormat: ol.coordinate.createStringXY(4),
					  projection: "EPSG:4326",
					  className: 'mouse-position',
					  target: document.getElementById('mouse-position'),
					  undefinedHTML: '&nbsp;'
					})   
		             ],
		  layers: [
				new ol.layer.Tile({
					extent: projection.getExtent(),
					source: new ol.source.TileImage({
						tileUrlFunction: function(tileCoord, pixelRatio, projection) {
							var z = tileCoord[0]+1;
							var x = tileCoord[1];
							var y = -tileCoord[2]-1;
							var n = Math.pow(2, z + 1); 
							x = x % n;
							if (x * n < 0) {
								x = x + n;
							}
							return layerAttrs.url.replace('{z}', z.toString())
							.replace('{y}', y.toString())
							.replace('{x}', x.toString());
						},
						projection: projection,
						tileGrid: new ol.tilegrid.TileGrid({
							origin: tileOrigin,
							resolutions: resolutions,
							tileSize: 256
						})
					})
				}),
		    new ol.layer.Vector({
		      source: new ol.source.Vector({
		    	projection: "EPSG:4326",
		        url: "../resources/countries.geojson",
		        format: new ol.format.GeoJSON()
		      })
		    })
		  ],
		  view: new ol.View({
			projection: ol.proj.get("EPSG:900913"),
		    center: [12893431.37055, 3331732.41112],
		    zoom: 2
		  })
		});
});

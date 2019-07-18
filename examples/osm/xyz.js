$(document).ready(function(){
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
		      source: new ol.source.OSM({
		      //  url: 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
		    	  url:'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
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
			projection: ol.proj.get("EPSG:3857"),
		    center: [-472202, 7530279],
		    zoom: 2
		  })
		});
});

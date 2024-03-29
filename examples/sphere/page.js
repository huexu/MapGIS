﻿$(document).ready(function(){
	proj4.defs('ESRI:53009', '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 ' +
    '+b=6371000 +units=m +no_defs');

// Configure the Sphere Mollweide projection object with an extent,
// and a world extent. These are required for the Graticule.
var sphereMollweideProjection = new ol.proj.Projection({
  code: 'ESRI:53009',
  extent: [-9009954.605703328, -9009954.605703328,
    9009954.605703328, 9009954.605703328],
  worldExtent: [-179, -90, 179, 90]
});

var map = new ol.Map({
  keyboardEventTarget: document,
  layers: [
    new ol.layer.Vector({
      source: new ol.source.Vector({
        url: '../resources/countries.geojson',
        format: new ol.format.GeoJSON()
      })
    })
  ],
  renderer: 'canvas',
  target: 'sphereMap',
  view: new ol.View({
    center: [0, 0],
    projection: sphereMollweideProjection,
    resolutions: [65536, 32768, 16384, 8192, 4096, 2048],
    zoom: 1
  }),
  controls:[]
});
var graticule = new ol.Graticule({
  map: map
});
});
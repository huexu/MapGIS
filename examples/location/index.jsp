<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
	<title>定位示例</title>
	<script>
    	var ctx = "<%=path%>/";
    </script>
	<%@ include file="../includes/scripts.jsp" %>
	<script src="page.js" type="text/javascript"></script>
  </head>
  <body>
    <!-- 地图 -->
      <div id="map" class="map">
      </div>
      <div class="row-fluid">
        <div class="toolbar">
        	定位示例：
          <button id="rotate-around-rome">Rotate(Shift+drag可拖拽任意角度)</button>
          <button id="pan-to-london">Pan to London</button>
          <button id="elastic-to-moscow">Elastic to Moscow</button>
          <button id="bounce-to-istanbul">Bounce to Istanbul</button>
          <button id="spin-to-rome">Spin to Rome</button>
          <button id="fly-to-bern">Fly to Bern</button>
          <button id="spiral-to-madrid">Spiral to Madrid</button>
          <button id="zoom2wktextent" title="polygon((115.416906 41.059203,117.508256 41.059203,117.508256 39.442154,115.416906 39.442154,115.416906 41.059203))">zoom2WKT</button>
          
        </div>
        <div class="toolbar" style="top:95px;">
        	加载图层示例：
          <button id="wmsly">加载WMSLayer</button>
          <button id="geojsonly">加载GeoJson</button>
          <button id="kmlly">加载KML</button>
          <button id="wktly" title="polygon((115.416906 41.059203,117.508256 41.059203,117.508256 39.442154,115.416906 39.442154,115.416906 41.059203))">加载WKT</button>
          <button id="imagely">贴图</button>
          <button id="clearly">清除图层</button>
          <button id="markerly">加载markers</button>
          <button id="clearmkly">清除marker图层</button>
        </div>
      </div>
  </body>
</html>

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
	<title>球面地图样例</title>
	<script>
    	var ctx = "<%=path%>/";
    </script>
	<script src="<%=path%>/scripts/ATMap/lib/proj4.js"></script>
	<%@ include file="../includes/scripts.jsp" %>
	<script src="page.js" type="text/javascript"></script>
    
  </head>
  <body>
    <!-- 地图 -->
     <div id="sphereMap" class="map"></div>
  </body>
</html>

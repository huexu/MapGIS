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
	<title>地图复制样例</title>
	<script>
    	var ctx = "<%=path%>/";
    </script>
	<%@ include file="../includes/scripts.jsp" %>
	<script src="page.js" type="text/javascript"></script>
    
  </head>
  <body>
    <!-- 地图 -->
    	<table style="width:100%;height:100%;">
    		<tr>
    			<td style="width:50%">
    				<div id="domMap" class="map"></div>
    			</td>
    			<td style="width:50%">
    				<div id="canvasMap" class="map"></div>
    			</td>
    		</tr>
    	</table>
  </body>
</html>

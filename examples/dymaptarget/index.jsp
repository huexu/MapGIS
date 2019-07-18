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
	<title>切换动态地图元素样例</title>
	<script>
    	var ctx = "<%=path%>/";
    </script>
	<%@ include file="../includes/scripts.jsp" %>
	<script src="page.js" type="text/javascript"></script>
    
  </head>
  <body>
    <!-- 地图 -->
    <table style="width:100%;height:500px;">
   	  <tr style="height:450px;">
   	 	<td style="width:50%;"><div id="map1" class="map" style="height:450px;border:2px solid blue;"></div></td>
   	 	<td style="width:50%;"><div id="map2" class="map" style="height:450px;border:2px solid blue;"></div></td>
   	  </tr>
   	  <tr style="height:50px;">
   	  	<td colspan="2">
   	  		<input id="teleport" type="button" value="切换地图target" />
   	  	</td>
   	  </tr>
    </table>
      
  </body>
</html>

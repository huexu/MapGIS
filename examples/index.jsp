<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="shortcut icon" href="<%=path %>/favicon.ico" />
<script src="<%=path %>/plugins/jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
<style type="text/css">
li{line-height:25px;}
</style>
<title>Index</title>
<script type="text/javascript">
	$(document).ready(function(){
		$("li a").bind("click",function(){
			var url = this.id;
			window.open(url,"_blank");
		});
	});
</script>
</head>
<body>
	<ul>
		<li ><a id="location" href="javascript:void(0)">加载资源及定位示例（20150728）</a></li>
		<li ><a id="layerspy" href="javascript:void(0)">地图滤镜功能（20150729）</a></li>
		<li ><a id="curtain" href="javascript:void(0)">图层拉帘功能（20150729）</a></li>
		<li ><a id="regionnav" href="javascript:void(0)">用户区域导航功能（20150730）</a></li>
		<li ><a id="layeropacity" href="javascript:void(0)">图层透明度设置（20150730）</a></li>
		<li ><a id="layerplay" href="javascript:void(0)">图层轮播（20150731）</a></li>
		<li ><a id="drawRegularfeatures" href="javascript:void(0)">地图常规标绘feature（20150803）</a></li>
		<li ><a id="drawAdvFeatures" href="javascript:void(0)">地图高级标绘feature（20150803）</a></li>
		<li ><a id="dragfeatures" href="javascript:void(0)">地图拖曳feature（20150804）</a></li>
		<!-- <li ><a id="Modifyfeatures" href="javascript:void(0)">地图编辑feature（20151013）</a></li> -->
		<li ><a id="timezones" href="javascript:void(0)">展示时区（20150804）</a></li>
		<li ><a id="multimap" href="javascript:void(0)">多期对比（20150805）</a></li>
		<li ><a id="selectfeature" href="javascript:void(0)">选择Feature（20150806）</a></li>
		<li ><a id="highlightfeature" href="javascript:void(0)">mouseover高亮Feature（20150806）</a></li>
		<li ><a id="layerclipping" href="javascript:void(0)">图层裁剪（20150806）</a></li>
		<li ><a id="mapextent" href="javascript:void(0)">获取地图窗口当前四至（20150806）</a></li>
		<li ><a id="side2side" href="javascript:void(0)">地图复制（20150810）</a></li>
		<li ><a id="sphere" href="javascript:void(0)">球面地图（20150810）</a></li>
		<li ><a id="staticimg" href="javascript:void(0)">加载静态图片底图（20150810）</a></li>
		<li ><a id="dymaptarget" href="javascript:void(0)">动态切换地图target（20150810）</a></li>
		<li ><a id="osm" href="javascript:void(0)">加载OpenStreetMap底图（20151013）</a></li>
		<li ><a id="osm" href="javascript:void(0)">加载混合投影图层（20151013）</a></li>
		<li ><a id="sortable" href="javascript:void(0)">图例图层层次拖曳（20151014）</a></li>
		<li ><a id="GoogleMaps" href="javascript:void(0)">加载Google Maps底图（20151016）</a></li>
	</ul>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>地图框架页</title>
<link rel="shortcut icon" href="<%=path %>/favicon.ico" />
</head>
<body>
	<div style="position:absolute;top:10%;left:20%;">
		<h1>地图样例</h1>
		<div><a href="<%=path %>/scripts/ATMap/map2/map.jsp" > >>基于OL2的地图样例map2.jsp</a><font style="color:red;">（IE8+/Chrome/火狐等）</font></div><br/>
		<div><a href="<%=path %>/scripts/ATMap/map3/map.jsp" > >>基于OL3的地图样例map3.jsp</a><font style="color:red;">（IE9+/Chrome/火狐等）</font>	<a href="<%=path %>/examples" title="Click here to view ATMap3 demo"> View Demo</a></div><br/>
		<div><a href="<%=path %>/scripts/ATMap/skylineEarth/earth.jsp" > >>基于Skyline的三维地图样例map3.jsp</a><font style="color:red;">（IE8+）</font></div>
	</div>
	
	<div style="position:absolute;top:35%;left:10%;">
		<ul style="line-height:35px;">
			<li>1:地图的配置文件在{scripts/ATMap/common/data}文件夹下,支持国际化底图,根据业务需求可动态读取不同的配置来初始化不同的底图,默认英文底图;</li>
			<li>2:地图支持国际化，国际化文件在{scripts/ATMap/common/lang}文件夹下，可根据业务需求动态加载；</li>
			<li>3:页面初始化文件在{scripts/ATMap/common/bussiness/portalmap.js}中，map2和map3共用，根据MAPVERSION判断加载哪个配置文件；</li>
			<li>4:基于OL3的Map对浏览器的要求比较高，需支持html5，IE仅支持IE9及以上，Chrome/Firefox等浏览器都可以，需根据项目应用场景合理选择地图；</li>
			<li>5:基于OL3的地图加载效率比OL2高，且各种特效较多，展示比较绚丽，从持续发展的角度推荐使用OL3，毕竟由OL2<span style="color:red;font-size:18px;font-weight:bold;">不能直接</span>升级为OL3；
			从稳定性角度出发，推荐使用OL2，毕竟系统做的比较多比较成熟，OL3虽好，但在咱们公司产品中只在即时服务系统中用了，可能存在bug，后期还会不断完善，封装地图新组件；</li>
		</ul>
	</div>
</body>
</html>
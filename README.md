# MapGIS
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃           						ChangeLog File v1     				              ┃
┃                                              	                    ┃
┃		= 初始版本; + 功能增加; - 功能取消; > 功能修改; * Bug修改	         ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


v1.2-20150906
========================================
+ 注册设置图层zindex方法setZIndex --atmap.js xuhu20150906
+ 新增图层顺序控制工具,使图层叠加顺序可在图例中调整  --legend.js xuhu20150907
+ 初始化地图时进行浏览器兼容性判断 --page-behaviour.js xuhu20150918
+ OL3框架添加ATGis-min.js，生产环境下可以引用 --ATGis-min.js xuhu20150924


v1.1-20150706
========================================
+ OL2添加地图工具栏点击时高亮 --mapcontrols.js, xuhu20150706
+ OpenLayers2添加KMZFormat --OpenLayers.js, xuhu20150708
> OL2完善图层透明度功能，使与图例联动 --legend.js&layeropacity.js xuhu20150710
> 添加天地图底图切片水印，使切片未加载时展示水印 --bgImg.gif&rsp.js.js&page-behaviour.js|ATGis-min.js xuhu20150713
* OL2默认多期对比初始为左右布局，修正在其它布局下关系统对比时，再次打开工具时添加的地图窗口展示范围不一至问题 --multimap.js xuhu20150717
+ OL3添加地图工具激活后的鼠标手势 -- atmap.js xuhu20150718
* 修改量距量面工具，修正OL2量距功能不准确问题 --OpenLayers.js xuhu20150720
> 修改贴图注册方法addImageLayers、addImage2Layer、removeImage2Layer，从业务bussfuncs.js移至rspmap.js--bussfuncs.js&rspmap.js ,liufei20150721
+ 添加poi点方法addMarker，添加poi点图层方法addMarkerLayer，bussfuncs.js&rspmap.js ,liufei20150723
* 升级OL3到3.7.0 --ol.js,ol.css xuhu20150729
+ 新增OL3滤镜工具 --LayerSpy.js xuhu20150729
+ 新增OL3拉帘工具 --curtaincontrol.js xuhu20150729
+ 新增OL3用户区划导航工具 --regionnva.js xuhu20150730
+ 新增OL3地图旋转及指北针 --mapcontrol.js xuhu20150730
+ 新增OL3地图图层透明度设置工具 --layeropacity.js xuhu20150730
> 修改图例组件，使图层透明度工具激活时图例中显隐控制无效 --legend.js xuhu20150730
+ 新增OL3地图图层轮播工具 --layerplay.js xuhu20150731
> 添加点击指北针时使旋转的地图指北 --mapcontrol.js xuhu20150731
+ 新增OL3矢量绘制工具，包括点/线/面/矩形/方形和圆形 --atmap.js xuhu20150803
+ 新增OL3矢量拖曳工具，使可移动矢量位置 --dragfeature.js xuhu20150804
> 修改加载geojson图层方法，使兼容ol v3.7 --atmap.js xuhu20150804
+ 封装加载KML图层方法 --atmap.js xuhu20150804
+ 封装OL3矢量绘制工具添加绘制箭头工具,可用于最短路径等导航指引  --atmap.js xuhu20150804
+ 封装OL3实现多期对比工具 --multimap.js xuhu20150805
+ 封装OL3实现鼠标高亮Feature --page-behaviour.js xuhu20150806
+ 封装OL3实现点击选择Feature --page-behaviour.js xuhu20150806
+ OL3地图框架集成OSM地图底图 --atmap.js xuhu20150813
+ 添加ClearMap回调方法afterMapCleared --atmap.js xuhu 20150822


v1.0-20150616
========================================
= 初始版本

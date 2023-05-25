import{_ as s,c as n,o as a,O as l}from"./chunks/framework.41379913.js";const d=JSON.parse('{"title":"SVG矢量图，放大不会失真，适合大面贴图，通常动画较少或者较简单，标签和css去画","description":"","frontmatter":{},"headers":[],"relativePath":"blog/2023/5/25/svg.md"}'),p={name:"blog/2023/5/25/svg.md"},e=l(`<h1 id="svg矢量图-放大不会失真-适合大面贴图-通常动画较少或者较简单-标签和css去画" tabindex="-1">SVG矢量图，放大不会失真，适合大面贴图，通常动画较少或者较简单，标签和css去画 <a class="header-anchor" href="#svg矢量图-放大不会失真-适合大面贴图-通常动画较少或者较简单-标签和css去画" aria-label="Permalink to &quot;SVG矢量图，放大不会失真，适合大面贴图，通常动画较少或者较简单，标签和css去画&quot;">​</a></h1><blockquote><p>标签</p></blockquote><ul><li>svg</li><li>line 画线段</li><li>rect 画矩形</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    .line1{</span></span>
<span class="line"><span style="color:#A6ACCD;">        stroke: black;</span></span>
<span class="line"><span style="color:#A6ACCD;">        stroke-width: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    .line2{</span></span>
<span class="line"><span style="color:#A6ACCD;">        stroke: pink;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">//viewBox 可以做地图比例尺</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;svg width=&#39;500px&#39; height=&#39;300px&#39; viewBox = &#39;0,0,250,150&#39; style=&#39;border:1px solid black;&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // x1 y1 ：水平垂直坐标；x2 y2 ： 水平垂直坐标 两点决定一条线段</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;line x1=&#39;100&#39; y1=&#39;100&#39; x2=&#39;200&#39; y2=&#39;100&#39; class=&quot;line1&quot;&gt;&lt;/line&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;line x1=&#39;200&#39; y1=&#39;100&#39; x2=&#39;200&#39; y2=&#39;200&#39; class=&quot;line2&quot;&gt;&lt;/line&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // x y ：水平垂直坐标 ；rx相当于border-radius</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;rect height=&#39;50&#39; width=&#39;100&#39; x=&#39;0&#39; y=&#39;0&#39; rx =&#39;10&#39;&gt;&lt;/rect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/svg&gt;</span></span></code></pre></div><p><img src="https://note.youdao.com/yws/res/7/WEBRESOURCEcf657afe601fd9ec24df905936feea57" alt="7.png"></p><ul><li>circle 画圆</li><li>ellipse 画椭圆</li><li>polyline 画折线</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">circle{</span></span>
<span class="line"><span style="color:#A6ACCD;">    fill: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke: thistle;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">polyline{</span></span>
<span class="line"><span style="color:#A6ACCD;">    fill: transparent; //图形默认都是填充的，这个样式可以将填充干掉</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke: violet; // 相当于canvas里面的stroke画笔</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;svg width=&#39;500px&#39; height=&#39;300px&#39; style=&#39;border:1px solid black;&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // r 半径  cx ：x坐标   cy ： y坐标</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;circle r=&#39;50&#39; cx=&#39;100&#39; cy =&#39;200&#39;&gt;&lt;/circle&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // rx 水平半径 ；cy 垂直半径   </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ellipse rx = &#39;100&#39; ry=&#39;50&#39; cx = &#39;300&#39; cy =&#39;100&#39;&gt;&lt;/ellipse&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // points 坐标 </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;polyline points=&#39;0 0,50 50,50 100,100 100 ,100 50&#39;&gt;&lt;/polyline&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/svg&gt;</span></span></code></pre></div><p><img src="https://note.youdao.com/yws/res/a/WEBRESOURCEe628948b455010ddc1fc2527d472fa8a" alt="1.png"></p><ul><li>polygon 画多边形</li><li>text 文本</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">polygon{</span></span>
<span class="line"><span style="color:#A6ACCD;">    fill: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke: violet;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">text{</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke:springgreen;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 跟折线的本质区别就是，会自动封闭，首尾相连</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;polygon points=&#39;0 0,50 50,50 100,100 100 ,100 50&#39;&gt;&lt;/polygon&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 只有x y坐标</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;text x= &#39;200&#39; y=&#39;50&#39;&gt;chaoqun&lt;/text&gt;</span></span></code></pre></div><p><img src="https://note.youdao.com/yws/res/4/WEBRESOURCE179fd385fe198840b553cbde030ddb84" alt="2.png"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">polyline{ //折线的补充样式</span></span>
<span class="line"><span style="color:#A6ACCD;">    fill: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke: violet;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fill-opacity: 0.3;</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke-opacity: 0.5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke-linecap: round;</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke-linejoin: bevel;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ul><li>path路径</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">path{</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke:steelblue;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fill: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// M L H V区分大小，大写是绝对位置，小写是相对位置</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;path d=&#39;M 100 100 L 200 100&#39;&gt;&lt;/path&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// M = moveTo   L = lineTo   H 水平移动多少距离  V垂直移动多少距离   z不区分大小写，表示闭合</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;path d=&#39;M 100 100 H 200 V 200 z &#39;&gt;&lt;/path&gt;</span></span></code></pre></div><p><img src="https://note.youdao.com/yws/res/b/WEBRESOURCE467c59d14b34fb37b97ad230088f13bb" alt="3.png"></p><ul><li>画圆弧</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">path{</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke:steelblue;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fill: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//                  A:水平半径，垂直半径，选择角度，顺逆时针，大弧小弧，终点位置 </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;path d= &#39;M 100 100 A 100 50 90 1 0 150 200&#39;&gt;&lt;/path&gt;</span></span></code></pre></div><p><img src="https://note.youdao.com/yws/res/7/WEBRESOURCE6c5004f28d9a1da80257d7117c0c05d7" alt="4.png"></p><ul><li>defs 定义</li><li>linearGradient线性渐变</li><li>stop 定义颜色</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;defs&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //linearGradient 里面的数值决定渐变方向 x2 = &#39;100%&#39; y2 = &#39;100%&#39; 相当于 right bottom</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;linearGradient id=&#39;bg1&#39; x1 =&#39;0&#39; y1 =&#39;0&#39; x2 = &#39;100%&#39; y2 = &#39;100%&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        //offset 数值决定渐变颜色的比例</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;stop offset=&#39;0%&#39; style=&quot;stop-color:rgb(255,255,0)&quot;&gt;&lt;/stop&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;stop offset=&#39;100%&#39; style=&quot;stop-color:rgb(255,0,0)&quot;&gt;&lt;/stop&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/linearGradient&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/defs&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 在样式中使用url引入线性渐变即可</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;rect x=&#39;100&#39; y =&#39;100&#39; height=&#39;100&#39; width=&#39;300px&#39; style=&quot;fill:url(#bg1)&quot;&gt;&lt;/rect&gt;</span></span></code></pre></div><p><img src="https://note.youdao.com/yws/res/1/WEBRESOURCE4610291fc77b8c493f50ba3c88890ce1" alt="5.png"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">画虚线：</span></span>
<span class="line"><span style="color:#A6ACCD;">.line2{</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke: pink;</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke-width: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke-dasharray: 10px; 画虚线</span></span>
<span class="line"><span style="color:#A6ACCD;">    stroke-dashoffset: 10px; 配合它可以做动画</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;line x1=&#39;200&#39; y1=&#39;100&#39; x2=&#39;200&#39; y2=&#39;300&#39; class=&quot;line2&quot;&gt;&lt;/line&gt;</span></span></code></pre></div><p><img src="https://note.youdao.com/yws/res/b/WEBRESOURCEe091b75288960f6eed895db540fd12db" alt="6.png"></p>`,23),t=[e];function o(c,i,r,C,A,y){return a(),n("div",null,t)}const D=s(p,[["render",o]]);export{d as __pageData,D as default};

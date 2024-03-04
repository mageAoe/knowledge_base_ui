import{_ as s,c as a,o as n,O as l}from"./chunks/framework.41379913.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"flutter/MaterialApp.md"}'),p={name:"flutter/MaterialApp.md"},e=l(`<h3 id="materialapp-去掉debug图标" tabindex="-1">MaterialApp 去掉debug图标 <a class="header-anchor" href="#materialapp-去掉debug图标" aria-label="Permalink to &quot;MaterialApp 去掉debug图标&quot;">​</a></h3><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    debugShowCheckedModeBanner</span><span style="color:#89DDFF;">:false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//去掉debug图标</span></span>
<span class="line"><span style="color:#A6ACCD;">    home</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Tabs</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="全局配置主题" tabindex="-1">全局配置主题 <a class="header-anchor" href="#全局配置主题" aria-label="Permalink to &quot;全局配置主题&quot;">​</a></h3><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StatelessWidget</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;">({super</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">@override</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Widget</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">build</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">BuildContext</span><span style="color:#A6ACCD;"> context) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">      theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ThemeData</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        primaryColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Colors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">blue</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        appBarTheme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AppBarTheme</span><span style="color:#A6ACCD;">(  </span><span style="color:#676E95;font-style:italic;">// 全局appbar居中</span></span>
<span class="line"><span style="color:#A6ACCD;">          centerTitle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">// home: const Tabs(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      initialRoute</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;/&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      onGenerateRoute</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> onGenerateRoute</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,4),o=[e];function r(t,c,i,C,A,y){return n(),a("div",null,o)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};
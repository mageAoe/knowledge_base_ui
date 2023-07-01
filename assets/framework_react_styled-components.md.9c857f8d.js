import{_ as s,c as n,o as a,O as l}from"./chunks/framework.41379913.js";const b=JSON.parse('{"title":"styled-components","description":"","frontmatter":{},"headers":[],"relativePath":"framework/react/styled-components.md"}'),p={name:"framework/react/styled-components.md"},e=l(`<h1 id="styled-components" tabindex="-1">styled-components <a class="header-anchor" href="#styled-components" aria-label="Permalink to &quot;styled-components&quot;">​</a></h1><p>它是通过JavaScript改变CSS编写方式的解决方案之一，从根本上解决常规CSS编写的一些弊端。 通过JavaScript来为CSS赋能，我们能达到常规CSS所不好处理的逻辑复杂、函数方法、复用、避免干扰。样式书写 将直接依附在JSX上面，HTML、CSS、JS三者再次内聚。all in js的思想</p><h2 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Component</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> styled </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">styled-components</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">StyledFooter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">styled</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">footer</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">      background:yellow</span></span>
<span class="line"><span style="color:#C3E88D;">      ul{</span></span>
<span class="line"><span style="color:#C3E88D;">        display:flex</span></span>
<span class="line"><span style="color:#C3E88D;">        li{</span></span>
<span class="line"><span style="color:#C3E88D;">          flex:1</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"><span style="color:#C3E88D;">      }</span></span>
<span class="line"><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">StyledFooter</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">首页</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">列表</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我的</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">StyledFooter</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="透传prop" tabindex="-1">透传prop <a class="header-anchor" href="#透传prop" aria-label="Permalink to &quot;透传prop&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> StyledInput </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> styled</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">color: red;</span></span>
<span class="line"><span style="color:#C3E88D;">background: yellow;</span></span>
<span class="line"><span style="color:#C3E88D;">border: none;</span></span>
<span class="line"><span style="color:#C3E88D;">border-radius: 3px;</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">StyledInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">okok</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="基于props做样式判断" tabindex="-1">基于props做样式判断 <a class="header-anchor" href="#基于props做样式判断" aria-label="Permalink to &quot;基于props做样式判断&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> StyledButton </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> styled</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">button</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">background:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bg </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&#39;}</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*&lt;StyledButton&gt;click&lt;/StyledButton&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;StyledButton bg=&quot;red&quot;&gt;click&lt;/StyledButton&gt;*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="样式化任意组件-一定要写classname" tabindex="-1">样式化任意组件(一定要写className ) <a class="header-anchor" href="#样式化任意组件-一定要写classname" aria-label="Permalink to &quot;样式化任意组件(一定要写className )&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Child </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">className</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">child</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> StyledChild </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">styled</span><span style="color:#A6ACCD;">(Child)</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">	background:red;</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">StyledChild</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="扩展样式" tabindex="-1">扩展样式 <a class="header-anchor" href="#扩展样式" aria-label="Permalink to &quot;扩展样式&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MyButton </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> styled</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">button</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">background:yellow;</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> BigButton </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">styled</span><span style="color:#A6ACCD;">(MyButton)</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">height:100px;</span></span>
<span class="line"><span style="color:#C3E88D;">width:100px;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="加动画" tabindex="-1">加动画 <a class="header-anchor" href="#加动画" aria-label="Permalink to &quot;加动画&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> styled</span><span style="color:#89DDFF;">,{</span><span style="color:#A6ACCD;">keyframes</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">styled-components</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rotate360 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">keyframes</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">from {</span></span>
<span class="line"><span style="color:#C3E88D;">transform: rotate(0deg);</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#C3E88D;">to {</span></span>
<span class="line"><span style="color:#C3E88D;">transform: rotate(360deg);</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Rotate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> styled</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">div</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">width:100px;</span></span>
<span class="line"><span style="color:#C3E88D;">height:100px;</span></span>
<span class="line"><span style="color:#C3E88D;">background:yellow;</span></span>
<span class="line"><span style="color:#C3E88D;">animation:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">rotate360</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> 1s linear infinite;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,14),o=[e];function t(r,c,y,i,D,F){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{b as __pageData,d as default};
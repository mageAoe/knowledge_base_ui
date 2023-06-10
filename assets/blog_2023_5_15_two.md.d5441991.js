import{_ as s,c as a,o as n,O as l}from"./chunks/framework.41379913.js";const F=JSON.parse('{"title":"VUE 使用iconfont 动态加载不转义的问题","description":"","frontmatter":{},"headers":[],"relativePath":"blog/2023/5/15/two.md"}'),e={name:"blog/2023/5/15/two.md"},o=l(`<h1 id="vue-使用iconfont-动态加载不转义的问题" tabindex="-1">VUE 使用iconfont 动态加载不转义的问题 <a class="header-anchor" href="#vue-使用iconfont-动态加载不转义的问题" aria-label="Permalink to &quot;VUE 使用iconfont 动态加载不转义的问题&quot;">​</a></h1><h2 id="手牵手教学" tabindex="-1">手牵手教学 <a class="header-anchor" href="#手牵手教学" aria-label="Permalink to &quot;手牵手教学&quot;">​</a></h2><ul><li>我们正常使用图片是这种class的形式</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">iconfont icon-xxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>但是万一我们的图标是后台返回的，而不是写死的，那么这种class写法不行了，得使用<code>unicode</code></p></li><li><p>那么正常我们使用是这样</p></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">iconfont</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&amp;</span><span style="color:#A6ACCD;">#x33</span><span style="color:#89DDFF;">;&lt;/</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>而要动态的渲染，肯定是</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;i class=&quot;iconfont&quot;&gt;{{ xxx }}&lt;/i&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但是vue并不能识别，所以我们需要手动更改一下</p><blockquote><p>将下载的 iconfont.css里面的图片前面加个 <code>\\u</code></p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 示例</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">icon</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">money</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">before </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\ue663</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>然后使用时</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">meta: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      unicode: &#39;\\ue663&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      title: &#39;管理&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,13),p=[o];function t(c,r,i,d,u,D){return n(),a("div",null,p)}const b=s(e,[["render",t]]);export{F as __pageData,b as default};

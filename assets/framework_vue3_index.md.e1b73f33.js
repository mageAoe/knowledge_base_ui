import{_ as s,c as a,o,O as e}from"./chunks/framework.9e160f5c.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"framework/vue3/index.md"}'),n={name:"framework/vue3/index.md"},l=e(`<h2 id="vue3" tabindex="-1">VUE3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;VUE3&quot;">​</a></h2><h3 id="v-memo" tabindex="-1">V-memo <a class="header-anchor" href="#v-memo" aria-label="Permalink to &quot;V-memo&quot;">​</a></h3><h3 id="vue-config-js-中publicpath" tabindex="-1">vue.config.js 中publicPath <a class="header-anchor" href="#vue-config-js-中publicpath" aria-label="Permalink to &quot;vue.config.js 中publicPath&quot;">​</a></h3><ol><li><p>首先在根目录下建立一个.env的文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">VUE_APP_PATH = &#39;./&#39;</span></span></code></pre></div></li><li><p>修改vue.config.js 文件的publicPath属性</p></li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">publicPath</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VUE_APP_PATH </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span></code></pre></div><ol start="3"><li>这样就能实现 生产环境与开发环境下的 运行</li></ol>`,6),t=[l];function p(c,r,i,D,u,d){return o(),a("div",null,t)}const y=s(n,[["render",p]]);export{_ as __pageData,y as default};

import{_ as s,c as a,o as n,O as l}from"./chunks/framework.41379913.js";const d=JSON.parse('{"title":"vue3+vite+ts：使用@符号，找不到模块","description":"","frontmatter":{},"headers":[],"relativePath":"blog/one.md"}'),o={name:"blog/one.md"},p=l(`<h1 id="vue3-vite-ts-使用-符号-找不到模块" tabindex="-1">vue3+vite+ts：使用@符号，找不到模块 <a class="header-anchor" href="#vue3-vite-ts-使用-符号-找不到模块" aria-label="Permalink to &quot;vue3+vite+ts：使用@符号，找不到模块&quot;">​</a></h1><h2 id="报错问题" tabindex="-1">报错问题 <a class="header-anchor" href="#报错问题" aria-label="Permalink to &quot;报错问题&quot;">​</a></h2><blockquote><p>情况说明：在.vue后缀的文件中 导入.vue组件 import Drawers from &#39;@/components/Drawer/index.vue&#39; 找不到模块“../../../../components/Drawer/index”或其相应的类型声明</p></blockquote><h2 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h2><h4 id="第一步" tabindex="-1">第一步 <a class="header-anchor" href="#第一步" aria-label="Permalink to &quot;第一步&quot;">​</a></h4><ul><li>配置vite.config.ts</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">resolve</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">alias</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="第二步" tabindex="-1">第二步 <a class="header-anchor" href="#第二步" aria-label="Permalink to &quot;第二步&quot;">​</a></h4><ul><li>在文件的根目录下 新建一个 <code>env.d.ts</code>的文件</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DefineComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">DefineComponent</span><span style="color:#89DDFF;">&lt;{},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">component</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="第三步" tabindex="-1">第三步 <a class="header-anchor" href="#第三步" aria-label="Permalink to &quot;第三步&quot;">​</a></h4><ul><li>修改 <code>tsconfig.json</code> 文件</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">@</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">@/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>最后就不报错了 <img src="https://img2023.cnblogs.com/blog/2450634/202303/2450634-20230322161358894-531250427.png" alt=""></li></ul><h2 id="补充" tabindex="-1">补充 <a class="header-anchor" href="#补充" aria-label="Permalink to &quot;补充&quot;">​</a></h2><ul><li>vscode在引入文件时默认是不会加上 <code>.vue </code>后缀的</li><li>如果不想用上面的方法，就得这样写</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Drawer </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../../../components/Drawer/index.vue</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,17),e=[p];function t(r,c,i,D,F,y){return n(),a("div",null,e)}const C=s(o,[["render",t]]);export{d as __pageData,C as default};
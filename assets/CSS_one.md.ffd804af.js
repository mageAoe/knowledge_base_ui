import{_ as s,c as n,o as a,O as l}from"./chunks/framework.41379913.js";const A=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/one.md"}'),p={name:"CSS/one.md"},o=l(`<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="高度塌陷的解决方案" tabindex="-1">高度塌陷的解决方案 <a class="header-anchor" href="#高度塌陷的解决方案" aria-label="Permalink to &quot;高度塌陷的解决方案&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box1</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> red solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            * 根据W3C的标准，在页面中元素都一个隐含的属性叫做Block Formatting Context</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *     简称BFC，该属性可以设置打开或者关闭，默认是关闭的。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            * 当开启元素的BFC以后，元素将会具有如下的特性：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *     1.父元素的垂直外边距不会和子元素重叠</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *     2.开启BFC的元素不会被浮动元素所覆盖</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *     3.开启BFC的元素可以包含浮动的子元素</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            * 如何开启元素的BFC</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *     1.设置元素浮动</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *         - 使用这种方式开启，虽然可以撑开父元素，但是会导致父元素的宽度丢失</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *             而且使用这种方式也会导致下边的元素上移，不能解决问题</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *     2.设置元素绝对定位</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *     3.设置元素为inline-block</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *         - 可以解决问题，但是会导致宽度丢失，不推荐使用这种方式</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *     4.将元素的overflow设置为一个非visible的值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            * 推荐方式：将overflow设置为hidden是副作用最小的开启BFC的方式。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/*overflow: hidden;*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *但是在IE6及以下的浏览器中并不支持BFC，所以使用这种方式不能兼容IE6。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            * 在IE6中虽然没有BFC，但是具有另一个隐含的属性叫做hasLayout，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            * 该属性的作用和BFC类似，所在IE6浏览器可以通过开hasLayout来解决该问题</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            * 开启方式很多，我们直接使用一种副作用最小的：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *     直接将元素的zoom设置为1即可</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            * zoom表示放大的意思，后边跟着一个数值，写几就将元素放大几倍</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            * zoom:1表示不放大元素，但是通过该样式可以开启hasLayout</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            * zoom这个样式，只在IE中支持，其他浏览器都不支持</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">zoom</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box2</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box3</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,3),t=[o];function e(c,r,y,i,D,F){return a(),n("div",null,t)}const f=s(p,[["render",e]]);export{A as __pageData,f as default};

import{_ as n,c as e,o as l,O as s,z as a}from"./chunks/framework.41379913.js";const x=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{},"headers":[],"relativePath":"framework/RegExp/index.md"}'),p={name:"framework/RegExp/index.md"},t=s(`<h1 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h1><p>转义字符 \\</p><p>\\f 换页符</p><p>\\n回车</p><p>\\r行结束</p><p>\\t缩进</p><p>\\v 垂直制表符</p><h2 id="regexp" tabindex="-1">RegExp <a class="header-anchor" href="#regexp" aria-label="Permalink to &quot;RegExp&quot;">​</a></h2><h4 id="创建形式" tabindex="-1">创建形式 <a class="header-anchor" href="#创建形式" aria-label="Permalink to &quot;创建形式&quot;">​</a></h4><ul><li>第一种</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">i 忽视大小写</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">g 全局匹配</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m 执行多行匹配</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /abc/ i,g,m</span></span></code></pre></div><ul><li>第二种</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var reg = new RegExp(&#39;abc&#39;,&#39;i&#39;)</span></span></code></pre></div><h2 id="test" tabindex="-1">test <a class="header-anchor" href="#test" aria-label="Permalink to &quot;test&quot;">​</a></h2><p>reg.test(str) 返回true ，false</p><h2 id="match" tabindex="-1">match <a class="header-anchor" href="#match" aria-label="Permalink to &quot;match&quot;">​</a></h2><p>string.match(reg) 返回匹配成功的值</p><p>match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。</p><p>该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。</p><p><strong>返回值</strong> : 存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var str=&quot;1 plus 2 equal 3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">document.write(str.match(/\\d+/g)) //1,2,3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><h2 id="exec" tabindex="-1">exec() <a class="header-anchor" href="#exec" aria-label="Permalink to &quot;exec()&quot;">​</a></h2><p>reg.exec(str)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">lastIndex  与exec相辅相成</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var reg  =  /ab/g;</span></span>
<span class="line"><span style="color:#A6ACCD;">var str = &#39;abababab&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(reg.exec(str)) // [&quot;ab&quot;, index: 0, input: &quot;abababab&quot;, groups: undefined]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(reg.lastIndex) //2,与上面的index一起的，还可以修改</span></span></code></pre></div><h2 id="search-返回匹配到的位置" tabindex="-1">search() 返回匹配到的位置 <a class="header-anchor" href="#search-返回匹配到的位置" aria-label="Permalink to &quot;search() 返回匹配到的位置&quot;">​</a></h2><p>str.search(reg)</p><p>Search方法:用于检索字符串中指定的子字符串或者是正则匹配到的子字符串，并返回下标</p><h2 id="split" tabindex="-1">split() <a class="header-anchor" href="#split" aria-label="Permalink to &quot;split()&quot;">​</a></h2><p>str.split(reg)</p><p>split() 方法用于把一个字符串分割成字符串数组。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var str=&quot;How are you doing today?&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">document.write(str.split(/\\s/g)) //How,are,you,doing,today?</span></span></code></pre></div><h2 id="replace" tabindex="-1">replace() <a class="header-anchor" href="#replace" aria-label="Permalink to &quot;replace()&quot;">​</a></h2><p>str.replace(reg)</p><p>Replace，用于在字符串中，用字符串替换另一些字符，或者替换正则匹配到的字符串</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(\\w)\\1，这个括号后面跟着的就相当于使用前面的规则</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//aabb 反过来</span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /(\\w)\\1(\\w)\\2/;</span></span>
<span class="line"><span style="color:#A6ACCD;">var str = &#39;aabb&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">str.replace(reg,&#39;$2$2$1$1&#39;) // bbaa</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">将the-first-name 换成小驼峰</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /-(\\w)/g</span></span>
<span class="line"><span style="color:#A6ACCD;">var str = &#39;the-first-name&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">str.replace(reg,function($,$1){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return $1.toUpperCase()</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><hr><h2 id="regexp的使用方法" tabindex="-1">RegExp的使用方法 <a class="header-anchor" href="#regexp的使用方法" aria-label="Permalink to &quot;RegExp的使用方法&quot;">​</a></h2><ul><li>匹配多个连续的数字</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">一个[]代表匹配一位数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /[0-9][0-9][0-9]/g</span></span></code></pre></div><ul><li>匹配除了什么</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">匹配前面不是a，后面不是b的数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /[^a][^b]/g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var str = &#39;ab1cd&#39; //[&#39;b1&#39;,&#39;cb&#39;]</span></span></code></pre></div><ul><li>匹配括号</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">这里面的  |  是或的意思，表示可以匹配abc0-9，也可以匹配bcd0-9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /(abc|bcd)[0-9]/g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var str = &#39;bcd2&#39;</span></span></code></pre></div><h2 id="元字符" tabindex="-1">元字符 <a class="header-anchor" href="#元字符" aria-label="Permalink to &quot;元字符&quot;">​</a></h2><p>\\w</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\w  === [0-9A-z_]</span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /\\w/g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var str = &#39;46fwge&#39;//[&quot;4&quot;, &quot;6&quot;, &quot;f&quot;, &quot;w&quot;, &quot;g&quot;, &quot;e&quot;]</span></span></code></pre></div><p>\\W</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">就是除了小w的全都能匹配</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\\W === [^\\w]</span></span></code></pre></div><p>\\d</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d === [0-9]</span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /\\d\\d\\d/g;</span></span>
<span class="line"><span style="color:#A6ACCD;">var str = &#39;123&#39; //&#39;123&#39;</span></span></code></pre></div><p>\\D</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">除了小d的规则都能匹配</span></span>
<span class="line"><span style="color:#A6ACCD;">\\D === [^\\d]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /\\D/g</span></span>
<span class="line"><span style="color:#A6ACCD;">var str = &#39;a123b&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">var res = str.match(reg) // [&quot;a&quot;, &quot;b&quot;]</span></span></code></pre></div><p>\\s</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\s === [\\t\\f\\n\\r\\v]</span></span></code></pre></div><p>\\S</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\S === [^\\s]</span></span></code></pre></div><p>\\b</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\b === 单词边界</span></span></code></pre></div><p>\\B</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\B === 非单词边界</span></span></code></pre></div><p>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">. === [^\\r\\n]</span></span></code></pre></div><h2 id="量词" tabindex="-1">量词 <a class="header-anchor" href="#量词" aria-label="Permalink to &quot;量词&quot;">​</a></h2>`,64),o=a("p",{"1,infinity":""},"n+ ",-1),c=a("p",{"0,infinity":""},"n* ",-1),r=a("p",{"0,1":""},"n? ",-1),i=a("p",null,"n{x} {x} 匹配个",-1),C=a("p",null,"n{x,y} {3,5} 填多少都可以",-1),d=a("p",null,"n{x,} {1,} === n+",-1),h=a("p",{"2，":""},"还可以写",-1),A=s(`<p>n$ 匹配任何结尾为n的字符串</p><p>^n 匹配任何开头为n的字符串</p><ul><li>正向预查 、正向断言</li></ul><p>?=n</p><p>?!n</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">只匹配出a后面有b的那个a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var str = &#39;abaaaaa&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /a(?=b)/g</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">只匹配出a后面没有b的那个a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var str = &#39;abaaaaa&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = /a(?！b)/g</span></span></code></pre></div><p>最全的常用正则表达式大全：<a href="https://zhuanlan.zhihu.com/p/33683962" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/33683962</a></p><p><a href="https://mp.weixin.qq.com/s?src=3&amp;timestamp=1634268555&amp;ver=1&amp;signature=UjH5AXilQDbckV1N3Kjh9RCGhWCbGALOc4NP2W56*Ar6D25rZTncjy4En*LmCHbL0mYOdLy8pwfIYCNd7F-IONFHyLsmvR35O1q5Kj-NFvNDwfBWIdiN2Hj01E-e-owke2HX2J3czkKP-BLu1TD-EE*kAnsucvWzXJaino0bLFQ=" target="_blank" rel="noreferrer">最全的常用正则表达式大全</a></p><p><a href="https://regexper.com/#%2F%5E%5C%2Fapi%5C%2Fblog%5C%2F%5B%5E%2F%5D%2B%24%2F" target="_blank" rel="noreferrer">https://regexper.com/#%2F^\\%2Fapi\\%2Fblog\\%2F[^%2F]%2B%24%2F</a></p><p><a href="https://www.zhihu.com/question/48219401/answer/742444326" target="_blank" rel="noreferrer">你是如何学会正则表达式的？</a></p><p><a href="https://any86.github.io/any-rule/" target="_blank" rel="noreferrer">正则大全</a></p>`,12),g=[t,o,c,r,i,C,d,h,A];function u(y,b,m,D,v,_){return l(),e("div",null,g)}const f=n(p,[["render",u]]);export{x as __pageData,f as default};
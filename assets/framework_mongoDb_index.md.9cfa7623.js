import{_ as s,c as n,o as a,O as e}from"./chunks/framework.41379913.js";const C=JSON.parse('{"title":"mongoDB","description":"","frontmatter":{},"headers":[],"relativePath":"framework/mongoDb/index.md"}'),l={name:"framework/mongoDb/index.md"},p=e(`<h1 id="mongodb" tabindex="-1">mongoDB <a class="header-anchor" href="#mongodb" aria-label="Permalink to &quot;mongoDB&quot;">​</a></h1><h2 id="mongodb简介" tabindex="-1">mongoDB简介 <a class="header-anchor" href="#mongodb简介" aria-label="Permalink to &quot;mongoDB简介&quot;">​</a></h2><p>什么是mongodb</p><p>mongodb是由c++语言编写的，是一个基于分布式文件存储的开源数据库系统</p><p>在高负荷的情况下，添加更多的节点，可以保证服务器性能</p><p>mongodb 目的是在为web应用提供可扩展的高性能数据存储方案</p><p>mobgodb是以 key：value的键值对的形式存在，与json相似</p><p>1.database 数据库</p><p>2.collection 集合或文档</p><blockquote><blockquote><p>mongod 启动mongodb</p></blockquote></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt;show dbs</span></span>
<span class="line"><span style="color:#A6ACCD;">//显示mongo里有多少数据库</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;db</span></span>
<span class="line"><span style="color:#A6ACCD;">//显示当前进入的库</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;use + 库名</span></span>
<span class="line"><span style="color:#A6ACCD;">//切换数据库目录</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><blockquote><p>数据库命名</p></blockquote></blockquote><p>不能是控字符串（“”）</p><p>不能含有 空格 、 $ /，\\</p><p>应该全是 小写</p><p>有一些数据库名是保留的 。admin</p><p>local 数据库不能被复制 ，只能存储当前服务器的数据</p><blockquote><p>文档的键是字符串，键可以使用任意utf-8</p></blockquote><p>-- 键不能含有\\0 这个字符用来表示键结尾的</p><p>--和$有特别的意义，只有在特定环境下使用</p><p>--以下划线‘_’开头的键是保留的</p><table><thead><tr><th>Timestamp</th><th>时间戳。记录文档修改和添加的具体时间</th></tr></thead><tbody><tr><td>Object</td><td>用于内嵌文档</td></tr><tr><td>Null</td><td>用于创建空值</td></tr><tr><td>symbol</td><td>符号。该数据类型基本上等同于字符串类型，但不同的是，它一般采用特殊符号类型的语言</td></tr><tr><td>Data</td><td>日期时间。用unix时间格式来存储当前日期活时间，你可以指定自己的日期时间:创建data对象，传入年月日信息</td></tr><tr><td>object id</td><td>对象ID 用于创建文档ID</td></tr><tr><td>binary data</td><td>二进制数据</td></tr></tbody></table><blockquote><p>objectid objectid 类似一个主键，可以很快去生成：</p></blockquote><p>前4个字符串表示创建unix时间戳，格林尼治时间UTC时间，比北京时间晚了8个小时</p><p>接下来的3个字符节是机器标识符</p><p>紧接着的两个字符由进程id 组成PID</p><p>最后三个字符是随机数</p><blockquote><p>objectid保存了创建的时间戳，可以通过getTimestamp函数来获取文档的创建时间</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在cmd中使用</span></span>
<span class="line"><span style="color:#A6ACCD;">var newobject = Objectid()</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;newobject</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//下面三个获取格林尼治时间</span></span>
<span class="line"><span style="color:#A6ACCD;">newobject.getTimestamp()</span></span>
<span class="line"><span style="color:#A6ACCD;">ISOData()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var data = new Data()</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;data</span></span>
<span class="line"><span style="color:#A6ACCD;">ISOdata()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var data2 = ISOData()</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;data2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>objectid转字符串</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">newobjdext.str</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="mongodb-创建数据库" tabindex="-1">mongodb 创建数据库 <a class="header-anchor" href="#mongodb-创建数据库" aria-label="Permalink to &quot;mongodb 创建数据库&quot;">​</a></h2><p>use + 要创建的数据库名</p><blockquote><p>db 查看</p></blockquote><blockquote><p>db.创建的数据库名.insert（{}） 中间插入的是一个对象</p></blockquote><p>//查看数据库内容</p><blockquote><p>db.aa.find()</p></blockquote><h2 id="配置运行环境" tabindex="-1">配置运行环境 <a class="header-anchor" href="#配置运行环境" aria-label="Permalink to &quot;配置运行环境&quot;">​</a></h2><p>下载安装mongodb</p><p>配置环境变量</p><p>D:\\Program Files\\MongoDB\\Server\\4.4\\bin</p><p>然后再cmd中输入mongod</p><p>需要手动再D盘的根目录下创建一个data\\db文件</p><p>然后cme启动时输入：mongod --dbpath d:\\data\\db --port 2271</p><p>port后面跟的是端口号，可以更改</p><p>cmd中输入mongo启动就可以在浏览器中访问了</p><h2 id="陪制启动安装的时候遇到得问题" tabindex="-1">陪制启动安装的时候遇到得问题 <a class="header-anchor" href="#陪制启动安装的时候遇到得问题" aria-label="Permalink to &quot;陪制启动安装的时候遇到得问题&quot;">​</a></h2><blockquote><p>启动mongodb的服务，提示Windows无法启动MongoDB Server服务(位于本地计算机上)</p></blockquote><h2 id="配置服务开机启动" tabindex="-1">配置服务开机启动 <a class="header-anchor" href="#配置服务开机启动" aria-label="Permalink to &quot;配置服务开机启动&quot;">​</a></h2><p>管理员运行cmd</p><p>运行如下命令</p><p>1、必须是在根目录下已经创建好了logs跟db文件</p><p>logs下有个MongoDB.log文件</p><p>sc.exe create MongoDB binpath= &quot;&quot;D:\\Program Files\\MongoDB\\Server\\4.4\\bin\\mongod.exe&quot; --service --config=&quot;D:\\Program Files\\MongoDB\\Server\\4.4.mongod.cfg&quot;&quot; DisplayName= &quot;MongoDB&quot; start= &quot;auto&quot;</p><p><a href="https://blog.csdn.net/yqwang75457/article/details/84949915" target="_blank" rel="noreferrer">链接中有解决办法</a></p><blockquote><p>SC] CreateService 失败 1073: 指定的服务已存在</p></blockquote><p><a href="https://blog.csdn.net/ak739105231/article/details/106635485/" target="_blank" rel="noreferrer">链接中有解决办法</a></p><h2 id="插入文档" tabindex="-1">插入文档 <a class="header-anchor" href="#插入文档" aria-label="Permalink to &quot;插入文档&quot;">​</a></h2><p>文档的数据结构和JSON基本一样</p><p>所有储存在集合中的数据都是BSON格式</p><p>BSON是一种类似json的一种二进制形式存储格式，简称Binary json</p><p>mongodb 使用insert（）或save（）方法插入数据</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.mydata.inert({ })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>查询</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.mydata.find()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="更新文档" tabindex="-1">更新文档 <a class="header-anchor" href="#更新文档" aria-label="Permalink to &quot;更新文档&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.mydata.update({ </span></span>
<span class="line"><span style="color:#A6ACCD;">    query,</span></span>
<span class="line"><span style="color:#A6ACCD;">    update,</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">     upsert:</span></span>
<span class="line"><span style="color:#A6ACCD;">     multi:</span></span>
<span class="line"><span style="color:#A6ACCD;">     writConern:</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//nMatched 选择</span></span>
<span class="line"><span style="color:#A6ACCD;">//nUpserted  插入</span></span>
<span class="line"><span style="color:#A6ACCD;">//nModifind 修改</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>使用</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.mydata.update({ },{$set:{ }})</span></span>
<span class="line"><span style="color:#A6ACCD;">//$set是保存原来的数据，并插入一条，修改，更新，不替换之前的内容</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.mydata.update({},{$set:{}},{multi:true})</span></span>
<span class="line"><span style="color:#A6ACCD;">//匹配多条，修改并保存，multi：允许更新多条数据</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.mydate.update({cc:123 },{$set{}},{multi:true,upsert:true})</span></span>
<span class="line"><span style="color:#A6ACCD;">//upsert 在更新时如果没有当前条件匹配的文档，就会创造条件去更新</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>参数说明</p><p>query ：update的查询条件，类似sql update</p><p>update：update的对象和一些更新的操作符（$in），</p><p>upsert：可选，如果不存在update的记录，是否插入objNew，true为插入，默认为false，不插入</p><p>multi：可选，mobgodb默认是false，只要更新找到的第一条记录，如果这个参数为true，就把俺条件查出来多条记录全部更新</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#  插入单条数据</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; var document = db.collection.insertOne({&quot;a&quot;: 3})</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; document</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;acknowledged&quot; : true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;insertedId&quot; : ObjectId(&quot;571a218011a82a1d94c02333&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  插入多条数据</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; var res = db.collection.insertMany([{&quot;b&quot;: 3}, {&#39;c&#39;: 4}])</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; res</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;acknowledged&quot; : true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;insertedIds&quot; : [</span></span>
<span class="line"><span style="color:#A6ACCD;">                ObjectId(&quot;571a22a911a82a1d94c02337&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">                ObjectId(&quot;571a22a911a82a1d94c02338&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>状元笔记</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.collection.updateOne() 向指定集合更新单个文档</span></span>
<span class="line"><span style="color:#A6ACCD;">db.collection.updateMany() 向指定集合更新多个文档</span></span>
<span class="line"><span style="color:#A6ACCD;">首先我们在test集合里插入测试数据</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">use test</span></span>
<span class="line"><span style="color:#A6ACCD;">db.test_collection.insert( [</span></span>
<span class="line"><span style="color:#A6ACCD;">{&quot;name&quot;:&quot;abc&quot;,&quot;age&quot;:&quot;25&quot;,&quot;status&quot;:&quot;zxc&quot;},</span></span>
<span class="line"><span style="color:#A6ACCD;">{&quot;name&quot;:&quot;dec&quot;,&quot;age&quot;:&quot;19&quot;,&quot;status&quot;:&quot;qwe&quot;},</span></span>
<span class="line"><span style="color:#A6ACCD;">{&quot;name&quot;:&quot;asd&quot;,&quot;age&quot;:&quot;30&quot;,&quot;status&quot;:&quot;nmn&quot;},</span></span>
<span class="line"><span style="color:#A6ACCD;">] )</span></span>
<span class="line"><span style="color:#A6ACCD;">更新单个文档</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; db.test_collection.updateOne({&quot;name&quot;:&quot;abc&quot;},{$set:{&quot;age&quot;:&quot;28&quot;}})</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;acknowledged&quot; : true, &quot;matchedCount&quot; : 1, &quot;modifiedCount&quot; : 1 }</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; db.test_collection.find()</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;_id&quot; : ObjectId(&quot;59c8ba673b92ae498a5716af&quot;), &quot;name&quot; : &quot;abc&quot;, &quot;age&quot; : &quot;28&quot;, &quot;status&quot; : &quot;zxc&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;_id&quot; : ObjectId(&quot;59c8ba673b92ae498a5716b0&quot;), &quot;name&quot; : &quot;dec&quot;, &quot;age&quot; : &quot;19&quot;, &quot;status&quot; : &quot;qwe&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;_id&quot; : ObjectId(&quot;59c8ba673b92ae498a5716b1&quot;), &quot;name&quot; : &quot;asd&quot;, &quot;age&quot; : &quot;30&quot;, &quot;status&quot; : &quot;nmn&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">更新多个文档</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; db.test_collection.updateMany({&quot;age&quot;:{$gt:&quot;10&quot;}},{$set:{&quot;status&quot;:&quot;xyz&quot;}})</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;acknowledged&quot; : true, &quot;matchedCount&quot; : 3, &quot;modifiedCount&quot; : 3 }</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; db.test_collection.find()</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;_id&quot; : ObjectId(&quot;59c8ba673b92ae498a5716af&quot;), &quot;name&quot; : &quot;abc&quot;, &quot;age&quot; : &quot;28&quot;, &quot;status&quot; : &quot;xyz&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;_id&quot; : ObjectId(&quot;59c8ba673b92ae498a5716b0&quot;), &quot;name&quot; : &quot;dec&quot;, &quot;age&quot; : &quot;19&quot;, &quot;status&quot; : &quot;xyz&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;_id&quot; : ObjectId(&quot;59c8ba673b92ae498a5716b1&quot;), &quot;name&quot; : &quot;asd&quot;, &quot;age&quot; : &quot;30&quot;, &quot;status&quot; : &quot;xyz&quot; }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="查询" tabindex="-1">查询 <a class="header-anchor" href="#查询" aria-label="Permalink to &quot;查询&quot;">​</a></h2><blockquote><p>查询数据</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.mydate.find(query,option)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>query:可选 ，使用查询操作符指定查询条件</p><p>option： 可选，查询时返回文档中所有键值</p><blockquote><p>pretty（），查询出来的数据是json格式的</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.mydate.find().pretty()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">findOen（）</span></span>
<span class="line"><span style="color:#A6ACCD;">//只能查询出来一条</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.mydata.find().limit(1 ) //读一条</span></span>
<span class="line"><span style="color:#A6ACCD;">.skip( //忽略)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>多条件查询</p></blockquote><p>//这个只能使用不同条件进行查询 比如 ： name || size</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt;db.mydate.find(key1:value1,key2:value2).pretty()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>多条件查询</p></blockquote><p>//可以使用相同的条件来查询不同的数据</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt;db.mydate.find(</span></span>
<span class="line"><span style="color:#A6ACCD;">{$or</span></span>
<span class="line"><span style="color:#A6ACCD;">    [{</span></span>
<span class="line"><span style="color:#A6ACCD;">        {key:value},{key:value}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>各种符号</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$gt -- &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">$gte -- &gt;=</span></span>
<span class="line"><span style="color:#A6ACCD;">$lt -- &lt;</span></span>
<span class="line"><span style="color:#A6ACCD;">$lte -- &lt;=</span></span>
<span class="line"><span style="color:#A6ACCD;">$ne -- !=</span></span>
<span class="line"><span style="color:#A6ACCD;">$eq -- =</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>使用</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt;db.mydate.find({age:{$gt:20}}).pretty()</span></span>
<span class="line"><span style="color:#A6ACCD;">//查询年龄大于20的数据</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>排序</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//升序</span></span>
<span class="line"><span style="color:#A6ACCD;">db.mydata.find().sort({key:+value}) // value是正值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//降序 value是负值</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>语法</p></blockquote><h2 id="mongodb-创建数据库-1" tabindex="-1">mongodb 创建数据库 <a class="header-anchor" href="#mongodb-创建数据库-1" aria-label="Permalink to &quot;mongodb 创建数据库&quot;">​</a></h2><p>use + 要创建的数据库名</p><p>db 查看 db.创建的数据库名.insert（{}） 中间插入的是一个对象</p><p>//查看数据库内容</p><p>db.aa.find()</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt;use aaa</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;db</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.dropDatabase()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//删除数据库，默认为test，可以通过db查看当前数据库名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>创建集合</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.createCollection(&#39;ai&#39;,option)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// option可选参数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">option可以使如下的参数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.createCollection(&#39;dev&#39;,{capped:true,size:1555555，max:5})</span></span>
<span class="line"><span style="color:#A6ACCD;">{&#39;ok&#39;:1} //创建一个dev的数据库集合，大小，最大存5条数据</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><table><thead><tr><th>capped</th><th>（可选）如果是true，则会创建固定集合，固定集合是指有着固定大小的集合，当达到最大值时，他会自动覆盖最早的文档，当该值为true时，必须指定size参数</th></tr></thead><tbody><tr><td>autoindexid</td><td>（可选）如果为true，自动在_id字段创建索引，默认为false</td></tr><tr><td>size</td><td>（可选）为固定集合指定一个最大值，如果capped为true，也需要指定该字段</td></tr><tr><td>max</td><td>（可选）指定固定集合中包含文档的最大数量</td></tr></tbody></table><blockquote><p>删除集合</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.collection.drop()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>show tables 查询集合</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt;show tables</span></span>
<span class="line"><span style="color:#A6ACCD;">或者</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;show collections</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="删除文档" tabindex="-1">删除文档 <a class="header-anchor" href="#删除文档" aria-label="Permalink to &quot;删除文档&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt;db.mydata.remove({key:value})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//多条件删除</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;db.mydate.remove({$or[{key:value},{key:value}]})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>只删除一条数据</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt;db.mydate.remove({key:value},{justOne:true})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="复习知识" tabindex="-1">复习知识 <a class="header-anchor" href="#复习知识" aria-label="Permalink to &quot;复习知识&quot;">​</a></h2><p>基本概念： 数据库（database） 集合（collection） 文档（document）</p><ol><li><p>show dbs 显示所有的数据库</p></li><li><p>ues + 数据库名 进入数据库 ，如果没有数据库名，就会新建一个库</p></li><li><p>use 进入表后会提示 switched to db xxxx</p></li><li><p>然后使用 show collection 查询集合</p></li><li><p>db 显示当前所在的数据库</p></li></ol><p>数据库的（增删改查）</p><pre><code>插入：insert
db.sudty.insert(name:&quot;sun&quot;,age:18)  表示向当前数据库集合sudty中插入数据 。sudty是可以自己随便设置的
</code></pre><p>要插入多个数据需要用到数组 db.sudty.insert([{}，{}，{}]) 向文档中插入数据，数据库会自动生成一个_id id还可以我们自己指定，如果我们指定了数据库就不会再添加了，如果自己指定id，它必须是唯一的</p><p>db.sudty.insert({_id:&#39;hello&#39;,name:&#39;sunchaoqun&#39;})</p><p>集合使用show collection 查询</p><p>查询：find（） db.sudty.find() find()里面可以接收一个对象作为条件参数 db.sudty.find({_id:&#39;hello&#39;})</p><pre><code>db.findOne({age:&#39;28&#39;}) 这个方法表示，只能查询返回一个age：28的数据

db.sudty.find({}).count()查询该集合里面有多少个数
</code></pre><p>查询内嵌的对象</p><p>db.sudty.find({&quot;hobby.like&quot;:&#39;apply&#39;});</p><p>修改：update 直接使用update更新会覆盖修改的整条数据 $set 可以用来修改文档中的指定属性 $unset 可以用来删除文档的指定属性</p><pre><code>db.sudty.updateMany()同时修改符合条件的文档

db.sudty.updateOne()修改一个符合条件的文档

db.sudty.replaceOne()替换一个文档
	
db.sudty.update({name:&quot;sun&quot;},
{
$set:{age:&#39;24&#39;},
{
multi:true 是否多个
}
})
</code></pre><p>db.sudty.update({name:&#39;覃敏&#39;},{$set:{hobby:{like:[&quot;apply&quot;,&quot;sdsg&quot;]}}})</p><p>db.sudty.update({name:&#39;覃敏&#39;},{$push:{&quot;hobby.like&quot;:&quot;ace&quot;}})</p><p>db.sudty.update({name:&#39;覃敏&#39;},{$addToSet:{hobby:{like:[&quot;apply&quot;,&quot;sdsg&quot;]}}}) 跟$set一样的</p><p>删除：</p><p>删除集合bd.sudty.drop();</p><p>清空集合</p><p>db.sudty.remove({}); 不推荐使用</p><p>如果删除一个或多个，可以第二个参数传值一个true，则只会删除一个 如果传递一个空对象，则会全部删除</p><p>db.sudty.deleteOne() db.sudty.deleteMany() db.dropDatabase()删除数据库</p><p>先查到name：sun；再移除age，后面属性随便填写 db.sudty.update({name:&quot;sun&quot;},{$unset:{age:1}})</p><p>客户端：NoSQL Manager for Mongodb freeware</p><p>vue+express +mongodb +axsio</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 报错</span></span>
<span class="line"><span style="color:#FFCB6B;">Warning</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> unable to run listCollections</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">	attempting to approximate collection names by parsing connectionStatus</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>解决方案 原因是mongo设置了用户名和密码，所以登陆的时候需要指定用户名和密码</p><div class="language-cmd line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># mongodb://用户名:密码@localhost:</span><span style="color:#F78C6C;">27017</span></span>
<span class="line"><span style="color:#A6ACCD;">root@c87416afb49d:/# mongo mongodb://root@rootlocalhost:</span><span style="color:#F78C6C;">27017</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,144),t=[p];function o(r,c,i,u,b,d){return a(),n("div",null,t)}const A=s(l,[["render",o]]);export{C as __pageData,A as default};

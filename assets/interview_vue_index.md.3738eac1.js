import{_ as e,c as a,o as l,O as i}from"./chunks/framework.41379913.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/vue/index.md"}'),o={name:"interview/vue/index.md"},t=i(`<h2 id="v-if和v-show的区别" tabindex="-1">v-if和v-show的区别？ <a class="header-anchor" href="#v-if和v-show的区别" aria-label="Permalink to &quot;v-if和v-show的区别？&quot;">​</a></h2><p>都可以控制元素的显示与隐藏</p><ol><li>v-show时控制元素的display值来让元素显示与隐藏；v-if显示隐藏时把DOM元素整个添加和删除</li><li>v-if有一个局部编译、卸载的过程，切换这个过程中会适当的销毁和重建内部的事件监听和子组件；v-show只是简单的css切换</li><li>v-if才是真正的条件渲染；v-show从false到true的时候不会触发组件的生命周期，v-if会触发生命周期</li><li>v-if的切换效率比较低 v-show的切换效率比较高</li></ol><h2 id="如何理解mvvm的" tabindex="-1">如何理解MVVM的？ <a class="header-anchor" href="#如何理解mvvm的" aria-label="Permalink to &quot;如何理解MVVM的？&quot;">​</a></h2><p>是 model-view-viewModel的缩写。前端开发的架构模式 M： 模型，对象的就是data数据 v： 视图，用户界面，DOM VM: 视图模型；VUE的实例对象，链接view和Model的桥梁 核心是提供view和viewModel的双向数据绑定，当数据改变的时候，viewModel能监听到数据的变化，自动更新视图，当用户操作视图的时候，viewModel也可以监听到视图的变化，然后通过数据进行改变，这就实现了双向数据绑定；ViewModel通过双向绑定吧View和Model连接起来，他们之间的同步是自动的，不需要人为干涉，所以我们自己需要关注业务逻辑即可，不需要操作DOM，同时也不需要关注数据的状态问题，因为他是由MVVM管理的</p><h2 id="v-for中的key值得作用是什么" tabindex="-1">v-for中的key值得作用是什么 <a class="header-anchor" href="#v-for中的key值得作用是什么" aria-label="Permalink to &quot;v-for中的key值得作用是什么&quot;">​</a></h2><p>key 属性是DOM元素的唯一标识 作用：</p><ol><li>提高虚拟DOM的更新</li><li>若不设置key，可能会触发一些bug</li><li>为了触发过度效果</li></ol><h2 id="说一下你对vue生命周期的理解" tabindex="-1">说一下你对vue生命周期的理解 <a class="header-anchor" href="#说一下你对vue生命周期的理解" aria-label="Permalink to &quot;说一下你对vue生命周期的理解&quot;">​</a></h2><p>组件从创建到销毁的过程就是它的生命周期</p><p>创建: beforeCreate 在这个阶段属性和方法都不能使用 created 这里是实例创建完成之后，在这里完成了数据检测，可以使用数据，修改数据，不会触发updated，也不会更新视图 挂载 beforeMount 完成了模板的编译，虚拟DOM也完成创建，即将渲染 Mounted 把编译好的模板挂载到页面，这里可以发送异步请求也可以访问DOM节点 更新 beforeUpdate 组件数据更新之前使用，数据是新的，页面上的数据是旧的，组件即将更新，准备渲染，可以改数据 updated render重新做了渲染，这时数据和页面都是新的，避免在此更新数据 销毁 beforeDestroy 实例销毁前，在这里实例还可以用，可以清除定时器等等 destroyed 组件已被销毁了，全部都销毁 使用了keep-alive时多出两个周期 activited 组件激活时 deactivited 组件被销毁时</p><h2 id="在created和mounted去请求数据-有什么区别" tabindex="-1">在created和mounted去请求数据，有什么区别 <a class="header-anchor" href="#在created和mounted去请求数据-有什么区别" aria-label="Permalink to &quot;在created和mounted去请求数据，有什么区别&quot;">​</a></h2><p>created：在渲染前调用，通常先初始化属性，然后做渲染</p><p>mounted：在模板渲染完成后，一般都是初始化页面后，在对元素节点进行操作 在这里请求数据可能会出现闪屏的问题</p><p>一般用created比较多 请求的数据对DOM有影响，那么就使用created 如果请求的数据对DOM无关，可以放在mounted</p><h2 id="vue中的修饰符有哪些" tabindex="-1">vue中的修饰符有哪些？ <a class="header-anchor" href="#vue中的修饰符有哪些" aria-label="Permalink to &quot;vue中的修饰符有哪些？&quot;">​</a></h2><ol><li>事件修饰符 .stop : 阻止冒泡 .prevent ： 阻止默认行为 .capture ：内部元素触发的事件现在次处理 .self ： 只有在event.target是当前元素时触发 .once ：事件只触发一次 .passive ：立即触发默认行为 .native ： 把当前元素作为原生标签看待</li><li>按键修饰符 .keyup : 键盘抬起 .keydown ：键盘按下</li><li>系统修饰符 .ctrl .alt .meta</li><li>鼠标修饰符 .left : 鼠标左键 .right ：鼠标右键 .middle ： 鼠标中键</li><li>表单修饰符 .lazy ： 等输入完之后再显示 .trim ： 删除内容前后的空格 .number ： 输入是数字或转为数字</li></ol><h2 id="elementui是怎么做表单验证的" tabindex="-1">elementUi是怎么做表单验证的？ <a class="header-anchor" href="#elementui是怎么做表单验证的" aria-label="Permalink to &quot;elementUi是怎么做表单验证的？&quot;">​</a></h2><ol><li>在表单中加rules属性，然后再data里写校验规则</li><li>内部添加规则</li><li>自定义函数校验</li></ol><h2 id="vue如何进行组件通信" tabindex="-1">vue如何进行组件通信 <a class="header-anchor" href="#vue如何进行组件通信" aria-label="Permalink to &quot;vue如何进行组件通信&quot;">​</a></h2><ol><li>父传子 props： 父组件使用自定义属性，子组件使用props接收 $ref</li><li>子传父 $emit : 绑定自定义事件</li><li>兄弟 事件总线 层级较低，可以考虑中间人</li><li>vuex</li></ol><h2 id="keep-alive是什么-怎么使用" tabindex="-1">keep-alive是什么？怎么使用 <a class="header-anchor" href="#keep-alive是什么-怎么使用" aria-label="Permalink to &quot;keep-alive是什么？怎么使用&quot;">​</a></h2><p>Vue的一个内置组件，包裹组件的时候，会缓存不活跃的组件实例，并不是销毁他们 作用： 把组件切换的状态保存在内存里，防止重复渲染DOM节点，减少加载时间和性能消耗，提高用户</p><h2 id="vue路由怎么传参的" tabindex="-1">vue路由怎么传参的 <a class="header-anchor" href="#vue路由怎么传参的" aria-label="Permalink to &quot;vue路由怎么传参的&quot;">​</a></h2><p>params传参 this.$router.push({name:&#39;index&#39;,params:{id: 123}}) 路由属性传参 this.$router.push({name: &#39;index/\${item.id}&#39;}) query传参(可以解决页面刷新参数丢失的问题) this.$router.push({name:&#39;index&#39;,query:{id: 123}})</p><h2 id="history模式和hash模式的区别" tabindex="-1">history模式和hash模式的区别 <a class="header-anchor" href="#history模式和hash模式的区别" aria-label="Permalink to &quot;history模式和hash模式的区别&quot;">​</a></h2><ol><li>hash的路由地址上有#号，history模式没有</li><li>在做回车刷新的时候，hash模式会加载对应页面；history会报错404</li><li>hash模式支持低版本浏览器，history不支持，因为是H5新增的API</li><li>hash不会重新加载页面，单页面应用必备</li><li>history有历史记录，H5新增了pushState和replaceState去修改历史记录</li><li>history需要后台配置</li></ol><h2 id="路由拦截是怎么实现的" tabindex="-1">路由拦截是怎么实现的 <a class="header-anchor" href="#路由拦截是怎么实现的" aria-label="Permalink to &quot;路由拦截是怎么实现的&quot;">​</a></h2><p>路由拦截 需要在路由配置中添加一个字段，它是用于判断路由是否需要拦截</p><p>再使用路由守卫</p><h2 id="说一下vue的动态路由" tabindex="-1">说一下vue的动态路由 <a class="header-anchor" href="#说一下vue的动态路由" aria-label="Permalink to &quot;说一下vue的动态路由&quot;">​</a></h2><p>要在路由配置里设置meta属性，扩展权限相关的字段，在路由导航守卫里通过判断这个权限标识，实现路由的动态增加和跳转</p><p>根据用户登录的账号，返回用户角色 前端再根据角色，跟路由表的meta.role进行匹配 把匹配搭配的路由形成可访问的路由</p><h2 id="如何解决刷新后二次加载路由" tabindex="-1">如何解决刷新后二次加载路由 <a class="header-anchor" href="#如何解决刷新后二次加载路由" aria-label="Permalink to &quot;如何解决刷新后二次加载路由&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">1.</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reload</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#F78C6C;">2.</span><span style="color:#A6ACCD;"> matcher</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRouter</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> = </span><span style="color:#82AAFF;">resetRouter</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newRouter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">  </span><span style="color:#82AAFF;">createRouter</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">matcher</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">newRouter</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">matcher</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="vuex-刷新数据会丢失吗-怎么解决" tabindex="-1">vuex 刷新数据会丢失吗？怎么解决 <a class="header-anchor" href="#vuex-刷新数据会丢失吗-怎么解决" aria-label="Permalink to &quot;vuex 刷新数据会丢失吗？怎么解决&quot;">​</a></h2><p>vuex肯定会重新获取数据，页面也会丢失数据</p><ol><li>把数据直接保存在浏览器缓存里（cookie localStorage sessionStorage）</li><li>页面刷新的时候，再次请求数据，达到可以动态更新的方法</li></ol><h2 id="computed和watch的区别" tabindex="-1">computed和watch的区别 <a class="header-anchor" href="#computed和watch的区别" aria-label="Permalink to &quot;computed和watch的区别&quot;">​</a></h2><ol><li>computed是计算属性</li><li>watch是监听，监听的是data中数据的变化</li><li>computed是支持缓存的，依赖的属性值发生变化，计算属性才会重新计算，否则用缓存；watch不支持缓存</li><li>computed不支持异步，watch是可以异步操作</li><li>computed是第一次加载就监听，watch是不监听</li><li>computed函数中必须return，watch不用</li></ol><h2 id="vue的双向数据绑定原理是什么" tabindex="-1">vue的双向数据绑定原理是什么 <a class="header-anchor" href="#vue的双向数据绑定原理是什么" aria-label="Permalink to &quot;vue的双向数据绑定原理是什么&quot;">​</a></h2><p>通过数据劫持和发布订阅者模式来实现，同时利用Object.defineProperty()劫持各个属性的setter和getter，在数据发生改变的时候发布消息给订阅者，触发对应的监听回调渲染视图，也就是说数据和视图是同步的，数据发生改变，视图跟着发生改变，视图改变，数据也会发生改变</p><ol><li>需要observer的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter</li><li>compile模板解析指令，把模板中的变量替换成数据，然后初始化渲染视图，同时把每个指令对应的节点绑定上更新函数，添加订阅者，如果数据变化，收到通知，更新视图</li><li>watcher 订阅者是Observer和compile之间的通信桥梁，作用： <ol><li>在自身实例化的时候往订阅器内添加自己</li><li>自身要有一个update()方法</li><li>等待属性变动时，调用自身update方法，触发compile这种的回调</li></ol></li><li>MVVM作为数据绑定的入口，整合了observer、compile和watcher三者，通过observer来监听自己的数据变化，通过compile解析模板指令，最后利用watcher把observer和compile联系起来，最终达到数据更新视图更新，视图更新数据更新的效果</li></ol><h2 id="了解diff算法和虚拟dom吗" tabindex="-1">了解diff算法和虚拟DOM吗 <a class="header-anchor" href="#了解diff算法和虚拟dom吗" aria-label="Permalink to &quot;了解diff算法和虚拟DOM吗&quot;">​</a></h2><p>虚拟DOM： 描述元素和元素之间的关系，创建一个JS对象 如果组件内有响应的数据，数据发生改变的时候，render函数会生成一个新的虚拟DOM，这个新的虚拟DOM会和旧的虚拟DOM进行对比，找到需要修改的虚拟DOM内容，然后去对应的真实DOM中修改</p><p>diff算法就是虚拟DOM的比对时用的，返回一个patch对象，这个对象的作用就是存储两个节点不同的地方，最后用patch里记录的信息进行更新真实DOM 步骤： 1. JS对象表示真实的DOM结构，要生成一个虚拟DOM，再用虚拟DOM构建一个真实DOM树，渲染到页面 2. 状态改变生成新的虚拟DOM，跟旧的虚拟DOM进行比对，这个比对的过程就是DIFF算法，利用patch记录差异 3. 把记录的差异用在第一个虚拟DOM生成的真实DOM上，视图就更新了</p><h2 id="vue-和jquery区别是什么" tabindex="-1">vue 和jquery区别是什么 <a class="header-anchor" href="#vue-和jquery区别是什么" aria-label="Permalink to &quot;vue 和jquery区别是什么&quot;">​</a></h2><ol><li>原理不同 vue就是数据绑定，jq是先获取dom再处理</li><li>着重点不同 vue是数据驱动，jq是着重与页面</li><li>操作不同</li></ol><h2 id="vuex的响应式处理" tabindex="-1">vuex的响应式处理 <a class="header-anchor" href="#vuex的响应式处理" aria-label="Permalink to &quot;vuex的响应式处理&quot;">​</a></h2><p>vuex是vue的状态管理工具 Vue.use（vuex），调用install方法，通过applyMixin（vue）在任意组件内执行this.$store就可以访问到store对象</p><h2 id="如何封装一个组件" tabindex="-1">如何封装一个组件 <a class="header-anchor" href="#如何封装一个组件" aria-label="Permalink to &quot;如何封装一个组件&quot;">​</a></h2><ol><li>使用Vue.extend() 创建一个组件</li><li>使用Vue.components()方法注册组件</li><li>如果子组件需要数据，可以在props中接收定义</li><li>子组件修改好数据，要把数据传递给父组件，可以用emit()方法</li></ol><h2 id="vue中如何做强制刷新" tabindex="-1">vue中如何做强制刷新？ <a class="header-anchor" href="#vue中如何做强制刷新" aria-label="Permalink to &quot;vue中如何做强制刷新？&quot;">​</a></h2><ol><li>localtion.reload()</li><li>this.$router.go(0)</li><li>provide和inject</li></ol><h2 id="vue3和vue2有哪些区别" tabindex="-1">vue3和vue2有哪些区别？ <a class="header-anchor" href="#vue3和vue2有哪些区别" aria-label="Permalink to &quot;vue3和vue2有哪些区别？&quot;">​</a></h2><ol><li>双向数据绑定的原理不同，v2是Object.property，v3是proxy</li><li>是否支持多个根节点</li><li>API不同，v2是配置式，v3是组合式</li><li>定义数据变量方法不同</li><li>生命周期不同</li><li>传值不同</li><li>指令和插槽不同</li><li>main.js不同</li></ol><h2 id="vue的性能优化怎么做" tabindex="-1">vue的性能优化怎么做 <a class="header-anchor" href="#vue的性能优化怎么做" aria-label="Permalink to &quot;vue的性能优化怎么做&quot;">​</a></h2><ol><li>编码优化 不要把所有数据都放在data中 v-for时给每个元素绑定事件用事件代理 keep-alive缓存组件 尽可能拆分组件，提高复用性、维护性 key值要保证唯一 合理使用路由懒加载，异步组件 数据持久化存储的使用尽量用防抖、节流优化</li><li>加载优化 按需加载 内容懒加载 图片懒加载</li><li>用户体验 骨架屏</li><li>SEO优化 预渲染 服务端渲染SSR</li><li>打包优化 CDN形式加载第三方模块 多线程打包 抽离公共文件</li><li>缓存和压缩 客户端缓存、服务端缓存 服务端GZIP压缩</li></ol><h2 id="首屏优化该如何去做" tabindex="-1">首屏优化该如何去做 <a class="header-anchor" href="#首屏优化该如何去做" aria-label="Permalink to &quot;首屏优化该如何去做&quot;">​</a></h2><ol><li>使用路由懒加载</li><li>非首屏组件使用异步组件</li><li>首屏不重要的组件延迟加载</li><li>静态资源放在CDN上</li><li>减少首屏上JS\\CSS等资源文件的大小</li><li>使用服务端渲染</li><li>减少DOM的数量和层级</li><li>使用精灵图请求</li><li>做一些loading</li><li>开启GZIP压缩</li><li>图片懒加载</li></ol><h2 id="vue3的性能为什么比vue2好" tabindex="-1">vue3的性能为什么比vue2好 <a class="header-anchor" href="#vue3的性能为什么比vue2好" aria-label="Permalink to &quot;vue3的性能为什么比vue2好&quot;">​</a></h2><ol><li>diff算法的优化</li><li>静态提升</li><li>事件侦听缓存</li></ol><h2 id="vue3为什么使用proxy" tabindex="-1">vue3为什么使用proxy？ <a class="header-anchor" href="#vue3为什么使用proxy" aria-label="Permalink to &quot;vue3为什么使用proxy？&quot;">​</a></h2><ol><li>proxy可以代理整个对象，defineproperty只代理对象上的某个属性</li><li>proxy对代理对象的监听更加丰富</li><li>proxy代理对象会生成新的对象，不会修改被代理对象本身</li><li>proxy不兼容IE</li></ol><h2 id="seo-如何优化" tabindex="-1">SEO 如何优化 <a class="header-anchor" href="#seo-如何优化" aria-label="Permalink to &quot;SEO 如何优化&quot;">​</a></h2><ol><li>SSR服务端渲染</li><li>预渲染 prerender-spa-plugin</li></ol><h2 id="echarts有用过吗-常用的组件有哪些" tabindex="-1">Echarts有用过吗？常用的组件有哪些 <a class="header-anchor" href="#echarts有用过吗-常用的组件有哪些" aria-label="Permalink to &quot;Echarts有用过吗？常用的组件有哪些&quot;">​</a></h2><p>title 标题组件 show text link toolbox 工具栏组件 导出图片 数据视图 切换 缩放 show orient feature tooltip 提示组件 markPoint 标注点 markLine 图标的标线</p><h2 id="uniapp-有没有做过分包" tabindex="-1">uniapp 有没有做过分包 <a class="header-anchor" href="#uniapp-有没有做过分包" aria-label="Permalink to &quot;uniapp 有没有做过分包&quot;">​</a></h2><p>分包作用： 优化小程序的下载和启动速度 <img src="https://img2023.cnblogs.com/blog/2450634/202303/2450634-20230301163828766-35455622.png" alt=""></p><p>小程序启动默认下载主包并启动页面，当用户进入分包时，才会下载对应的分包，下载完进行展示</p><h2 id="webpack打包和不打包的区别" tabindex="-1">webpack打包和不打包的区别 <a class="header-anchor" href="#webpack打包和不打包的区别" aria-label="Permalink to &quot;webpack打包和不打包的区别&quot;">​</a></h2><ol><li>运行效率</li><li>对技术的支持不够</li></ol><h2 id="webpack-是怎么打包的-babel是做什么的" tabindex="-1">webpack 是怎么打包的，babel是做什么的 <a class="header-anchor" href="#webpack-是怎么打包的-babel是做什么的" aria-label="Permalink to &quot;webpack 是怎么打包的，babel是做什么的&quot;">​</a></h2><p>wbepack会把js css image看做一个模块，用import、require引入 找到入口文件，通过入口文件找到关联的依赖文件，把他们打包到一起 把bundle文件，拆分成多个小的文件，异步按需加载所需要的文件 如果一个被多个文件引用，打包时只会生成一个文件 如果引用的文件没有调用，不会打包，如果引入的变量和方法没有调用也不会打包 对于多个入口文件，加入引入了相同的代码，可以用插件把他抽离到公共文件中</p><p>babel： 用于给语法降级的</p><h2 id="git如何合并、拉取代码" tabindex="-1">git如何合并、拉取代码 <a class="header-anchor" href="#git如何合并、拉取代码" aria-label="Permalink to &quot;git如何合并、拉取代码&quot;">​</a></h2><p>拉取代码： git pull 查看状态： git sattus 合并： git merge</p><h2 id="git-如何解决冲突问题" tabindex="-1">git 如何解决冲突问题 <a class="header-anchor" href="#git-如何解决冲突问题" aria-label="Permalink to &quot;git 如何解决冲突问题&quot;">​</a></h2><ol><li>两个分支中修改了同一个文件</li><li>两个分支中修改了同一个文件的名字</li></ol>`,80),r=[t];function s(n,p,h,c,u,d){return l(),a("div",null,r)}const m=e(o,[["render",s]]);export{b as __pageData,m as default};
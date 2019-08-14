# ztab
<div>简单的令人发指的tab页插件，送给面逼荣</div>

<div>css代码 可自行定义active的样式</div>
<div>.z-tab-head.active{</div>
  <div>background: #aaa;</div>
<div>}</div>

html代码 给好id或者class  注意 z-tab-head 和 z-tab-content 两个class不能少  可自行添加别的class
<div>&lt;div id=&quot;headbox&quot;&gt;</div>
  <div>&lt;div class=&quot;z-tab-head&quot;&gt;aa&lt;/div&gt;</div>
  <div>&lt;div class=&quot;z-tab-head&quot;&gt;bb&lt;/div&gt;</div>
  <div>&lt;div class=&quot;z-tab-head&quot;&gt;ss&lt;/div&gt;</div>
  <div>&lt;div class=&quot;z-tab-head&quot;&gt;dd&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
<div>&lt;div id=&quot;conbox&quot;&gt;</div>
  <div>&lt;div class=&quot;z-tab-content&quot;&gt;aaaaaaaaaaaaaaaaaa&lt;/div&gt;</div>
  <div>&lt;div class=&quot;z-tab-content&quot;&gt;bbbbbbbbbbbbbbbbbbb&lt;/div&gt;</div>
  <div>&lt;div class=&quot;z-tab-content&quot;&gt;cccccccccccccccccc&lt;/div&gt;</div>
  <div>&lt;div class=&quot;z-tab-content&quot;&gt;dddddddddddddd&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>

<div>js代码</div>
<div>// 实例化插件</div>
<div>var tabBox = new Ztab({</div>
  <div>head: '#headbox',	// 头部id或者class （id是#  class是. 不用多说了吧）</div>
  <div>content: '#conbox', // 内容id或者class </div>
  <div>// active: 1,	// 默认选中的标签索引, 不传的话默认值是0</div>
<div>});</div>
<div>// tabBox.tab(0);	// 切换tab的方法 如果需要可使用 不需要可不写</div>

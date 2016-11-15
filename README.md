## Redux

redux是一种思想，是一种解决问题的方式，不是redux必须依靠redux.js，就好像这世上根本就没有一个Flux框架一样。

所以要在Angular1中实现Redux，最重要的是搞清楚Redux有哪些关键的角色，不同的角色是干什么的，准确来说是提供了什么接口。如果你愿意的话，还可以实现一些原生的方法例如 combineRedux

## 两种逻辑

前端逻辑有两种：

1. UI逻辑：例如什么按钮能点，什么不能点，输入满足多少个字符才允许提交，格式是否为邮件等等。这些逻辑和业务无关
2. 业务逻辑：添加数据，读取数据

MVC中Controller不好的地方：同时包含部分业务逻辑和UI逻辑。

而Component思想则为我们把UI逻辑封装了起来，隔离了UI逻辑和业务逻辑

## test list

### Keywords[View/Data]

- 启用编辑[pass]
- 取消编辑[pass]
- 清空[pass]
- 删除单个单词[pass]
- 添加单词(回车或者点击搜索按钮)[pass]
- 单词向上移动[pass]
- 单词向下移动[pass]
- 单词向上移动到顶端[pass]
- 单词向下移动到底部[pass]
- 最大不超过10个单词[pass]
- 不允许添加重复[pass]
- [TODO]不允许重复添加提示
- [TODO]最大10个单词提示
- [V2 TODO]XSS攻击

### 数据来源[View/Data]

- 勾选[pass]
- 取消勾选[pass]
- 全部选择[pass]
- 全部取消选择[pass]

### 时间范围[View/Data]

- 选择[pass]

### 地铁选择[View/Data]

- 点击删除单个[pass]
- 清空[pass]
- 添加[pass]


## todoMVC

todoMVC只供你了解语法，实际上的开发复杂的多，todoMVC里也有很多不规范的地方，比如

1. `$scope.$watch(todos)`不是一个好的用法
2. 即使`$scope.$watch`是好的用法，todos通常也需要通过网络请求，同时数据还包括页面信息

## 如何划分/抽象出模型（Domain Model）

1. Textual Analysis
	- 当初步划分出Model之后，当一个Model发生修改或者业务逻辑时，完全不涉及另一个Model，说明划分是成功的
2. One case to make it change

## 是否需要把分页pager也划分为一个Model

1. 如果pager抽象为一个Model的话，以后新增的关于数据信息，比如pieces per page、last update timestamp怎么办？
2. 想象一下，当用户在点击下一页或者上一页时，有任何的业务逻辑变化产生吗？没有
3. 仔细想来，“页数”这件事和Model没有任何关系，它纯粹是检索出来的数据的衍生产物。如果用户能接受一个网页上显示所有的数据（比如上万条），那么久不会有页数这个问题
4. 综上，页数应该被划分为meta信息
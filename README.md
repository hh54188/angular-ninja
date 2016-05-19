## 如何划分/抽象出模型（Domain Model）

1. Textual Analysis
	- 当初步划分出Model之后，当一个Model发生修改或者业务逻辑时，完全不涉及另一个Model，说明划分是成功的
2. One case to make it change

## 是否需要把分页pager也划分为一个Model

1. 如果pager抽象为一个Model的话，以后新增的关于数据信息，比如pieces per page、last update timestamp怎么办？
2. 想象一下，当用户在点击下一页或者上一页时，有任何的业务逻辑变化产生吗？没有
3. 仔细想来，“页数”这件事和Model没有任何关系，它纯粹是检索出来的数据的衍生产物。如果用户能接受一个网页上显示所有的数据（比如上万条），那么久不会有页数这个问题
4. 综上，页数应该被划分为meta信息
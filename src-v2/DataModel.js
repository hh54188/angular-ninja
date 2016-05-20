angular.module('app')
.factory('DataModel', 
	['FilterModel', 'DataRepo',
	function(FilterModel, DataRepo){
		
		// function PropertyConstructor(name, alias, visible) {
		// 	this.name = name,
		// 	this.alias = alias,
		// 	this.visible = visible || false;
		// }

		// var dataModelProperties = [
		// 	new PropertyConstructor('source', '来源', true),
		// 	new PropertyConstructor('title', '标题', true),
		// 	new PropertyConstructor('url', '链接', false),
		// 	new PropertyConstructor('date', '抓取时间', false),
		// 	new PropertyConstructor('price', '价格', false)
		// ]

		return {
			getDataByPage: function (pageNum) {
				return {
					records: [
						{
							source: 'example',
							title: 'example',
							url: 'http://www.example.com/',
							date: +new Date,
							price: ''
						}
					],
					metaInfo: {
						pageInfo: {
							total: 5,
							cur: 1
						}
					}
				}
			},
			getData: function () {
				return this.getDataByPage(1);
			}
		}
}])
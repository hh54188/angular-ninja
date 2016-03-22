/*
	A module is a collection of services, directives, controllers, filters, and configuration information
	Usage：
		angular.module(name, [requires], [configFn]);
 */
angular.module('app').factory('FilterService', function(){
	
	var properties = [
		{
			desc: '数据来源',
			propertyName: 'source',
			groupName: 'source'
		}
	];

	var keywords = [];

	return {
		get: function () {
			console.log("This is the get method from FilterService");
		}
	}
})
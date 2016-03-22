angular.module('app').factory('GlobalConfigService', function(){
	
	var filterProperty = [
		{
			name: 'source',
			alias: '数据来源'
		}
	];

	return {
		getFilterProperty: function () {
			return filterPropertyNames;
		}
	}
});
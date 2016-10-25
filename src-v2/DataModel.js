angular.module('app')
.factory('DataModel', 
	['$rootScope', 'DataRepo', 'KeywordsModel', 'SourcesModel', 'TimeRangesModel', 'SubwaysModel',
	function($rootScope, DataRepo, KeywordsModel, SourcesModel, TimeRangesModel, SubwaysModel){

		return {
			getDataByPage: function (pageNum) {
				pageNum = pageNum || 1;
				return DataRepo.getData(pageNum);

			}
		}
}])
angular.module('app')
.factory('DataModel', 
	['$rootScope', 'DataRepo', 'KeywordsModel', 'SourcesModel', 'TimeRangesModel', 'SubwaysModel',
	function($rootScope, DataRepo, KeywordsModel, SourcesModel, TimeRangesModel, SubwaysModel){
		
		// $rootScope.$on('filterChanged', function (event) {
		// 	var selectedSourcesNames = SourcesModel.getSelectedSources();
		// 	var selectedInterval = TimeRangesModel.getSelectedInterval();
		// 	var keywords = KeywordsModel.getKeywords();
		// 	var subways = SubwaysModel.getSelectedSubways();
		// })

		return {
			getDataByPage: function (pageNum) {
				return DataRepo.getRepo();

			},
			getData: function () {
				return this.getDataByPage(1);
			}
		}
}])
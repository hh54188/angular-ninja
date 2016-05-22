angular.module('app')
.factory('DataModel', 
	['$rootScope', 'DataRepo', 'KeywordsModel', 'SourcesModel', 'TimeRangesModel', 
	function($rootScope, DataRepo, KeywordsModel, SourcesModel, TimeRangesModel){
		
		$rootScope.$on('filterChanged', function (event) {
			var selectedSourcesNames = SourcesModel.getSelectedSources();
			var selectedInterval = TimeRangesModel.getSelectedInterval();
			var keywords = KeywordsModel.getKeywords();
		})

		return {
			getDataByPage: function (pageNum) {
				return DataRepo.getRepo();

			},
			getData: function () {
				return this.getDataByPage(1);
			}
		}
}])
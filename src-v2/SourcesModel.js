angular.module('app')
.factory('SourcesModel', 
	['SourcesRepo', function(SourcesRepo){

		return {
			getSources: function () {
				var sourceOptions = SourcesRepo.getPlainSources();
				var unselectedSources = SourcesRepo.getUnselectedSources();

				sourceOptions.forEach(function (option) {
					option.checked = true;
					unselectedSources.forEach(function (selectedSourceName) {
						if (option.name === selectedSourceName) {
							option.checked = false;
						}
					})
				});

				return sourceOptions;			
			},
			setUnselectedSources: function (sourcesWithCheckStatus) {
				var unselectedSources = sourcesWithCheckStatus.filter(function (source) {
					return source.checked === false;
				}).map(function (temp) {
					return temp.name;
				});

				SourcesRepo.setUnselectedSources(unselectedSources);
			},
			getSelectedSources: function () {
				return SourcesRepo.getSelectedSources();
			}
		}
}]);
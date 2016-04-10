app.directive('pager', function () {
	var template = 
		'<ul class="pagination">' +
			'<li ng-show="showPrevBtn"  class="pager-btn-prev">' +
				'<a href="#" aria-label="Previous">' +
				    '<span aria-hidden="true">Prev</span>' +
				'</a>' +
			'</li>' +  
			'<li ng-show="showFirstPage"><a href="#">1</a></li>' +
			'<li ng-show="showPrevEllipsis"><a href="#">...</a></li>' +
			'<li ng-class="{active:page == curPage}" ng-repeat="page in range">' +
				'<a href="#">{{page}}</a>' + 
			'</li>' +
			'<li ng-show="showNextEllipsis"><a href="#">...</a></li>' +
			'<li ng-show="showLastPage"><a href="#">{{lastPage}}</a></li>' +
			'<li ng-show="showNextBtn" class="pager-btn-next">' +
				'<a href="#" aria-label="Next">' +
			    	'<span aria-hidden="true">Next</span>' +
			  	'</a>' +
			'</li>' +
		'</ul>';

	var controller = function ($scope) {
	}

	return {
		restrict: 'AE',
		template: template,
		scope: {
			totalPageCount: '@',
			curPage: '@' // 从1开始
		},
		controller: controller,
		link: function ($scope, $element, attrs, controller) {

			// https://docs.angularjs.org/api/ng/function/angular.element
			var $ = angular.element;

			var disabledClass = 'hide'; // 或者是hide
			var activeClass = 'active';
			$scope.activeClass = activeClass;

			var nakedElement = $element[0]; 

			var prevBtn = nakedElement.querySelector('.pager-btn-prev');
			var nextBtn = nakedElement.querySelector('.pager-btn-next');

			$scope.showPrevBtn = true;
			$scope.showNextBtn = true;

			$scope.showFirstPage = false;
			$scope.showLastPage = false;

			$scope.showPrevEllipsis = false;
			$scope.showNextEllipsis = false;

			$scope.curPage = parseInt($scope.curPage, 10) || 1;
			$scope.totalPageCount = parseInt($scope.totalPageCount, 10);
			$scope.displayPages = 7; // 简单模式不提倡修改

			$scope.lastPage = $scope.totalPageCount;
			$scope.range = [];

			function initPageRange(first, count) {
				var arr = [];
				for (var i = 0; i < count; i++) {
					arr.push(first + i);
				}
				return arr;
			}

			if ($scope.totalPageCount <= $scope.displayPages) {
				$scope.range = initPageRange(1, $scope.totalPageCount);
				console.log($scope.range);
				return;
			}

			if ($scope.curPage - 1 > 2 
				&& $scope.lastPage - $scope.curPage > 2) {
				
				$scope.showPrevEllipsis = true;
				$scope.showNextEllipsis = true;

				$scope.showFirstPage = true;
				$scope.showLastPage = true;
				$scope.range = initPageRange($scope.curPage - 1, 3);

				if ($scope.curPage === 1) {
					$(prevBtn).addClass(disabledClass);
				} else if ($scope.curPage === $scope.lastPage) {
					$(nextBtn).addClass(disabledClass);
				}	
			} else if ($scope.curPage - 1 <= 4) {
				$scope.range = initPageRange(1, 5);
				$scope.showNextEllipsis = true;
				$scope.showLastPage = true;

				if ($scope.curPage === 1) {
					$(prevBtn).addClass(disabledClass);
				} else if ($scope.curPage === $scope.lastPage) {
					$(nextBtn).addClass(disabledClass);
				}						

			} else if ($scope.lastPage - $scope.curPage <= 4) {
				$scope.range = initPageRange($scope.lastPage - 4, 5);
				$scope.showPrevEllipsis = true;
				$scope.showFirstPage = true;

				if ($scope.curPage === 1) {
					$(prevBtn).addClass(disabledClass);
				} else if ($scope.curPage === $scope.lastPage) {
					$(nextBtn).addClass(disabledClass);
				}						
			}

			// API:
			$scope.$on('pager:setTotalPageCount', function () {

			});

			$scope.$on('pager:setCurPage', function (event, data) {
				// $scope.curPage = data.curPage;
				// $scope.showPrevBtn = false;	
			});
		}    
	}
})
angular.module('app').directive('pager', function () {
	var template = 
		'<ul class="pagination">' +
			'<li ng-click="goPrevPage()" ng-show="showPrevBtn"  class="pager-btn-prev">' +
				'<a href="#" aria-label="Previous">' +
				    '<span aria-hidden="true">Prev</span>' +
				'</a>' +
			'</li>' +  
			'<li ng-click="goPage(1)" ng-show="showFirstPage"><a href="#">1</a></li>' +
			'<li ng-show="showPrevEllipsis"><a href="#">...</a></li>' +
			'<li ng-click="goPage(page)" ng-class="{active:page == curPage}" ng-repeat="page in range">' +
				'<a href="#">{{page}}</a>' + 
			'</li>' +
			'<li ng-show="showNextEllipsis"><a href="#">...</a></li>' +
			'<li ng-click="goPage(lastPage)" ng-show="showLastPage"><a href="#">{{lastPage}}</a></li>' +
			'<li ng-click="goNextPage()" ng-show="showNextBtn" class="pager-btn-next">' +
				'<a href="#" aria-label="Next">' +
			    	'<span aria-hidden="true">Next</span>' +
			  	'</a>' +
			'</li>' +
		'</ul>';

	var controller = function ($scope) {
		
		$scope.goPrevPage = function () {
			$scope.goPageAction({
				pageNum: parseInt($scope.curPage, 10) - 1
			});
		}

		$scope.goNextPage = function () {
			$scope.goPageAction({
				pageNum: parseInt($scope.curPage, 10) + 1
			});
		}

		$scope.goPage = function (page) {
			$scope.goPageAction({
				pageNum: parseInt(page, 10)
			});
		}
	}

	return {
		restrict: 'AE',
		template: template,
		scope: {
			goPrevPageAction: '&',
			goNextPageAction: '&',
			goPageAction: '&',
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

			var render;
			// 每一次当前页和总页数发生改变时
			// $scope上的变量都要发生更改，因此需要重新执行渲染逻辑
			(render = function(){
				// 重置按钮状态
				$(prevBtn).removeClass(disabledClass);
				$(nextBtn).removeClass(disabledClass);

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

				// 决定是否显示“前一页”和“后一页”按钮
				function decideWhetherShowPrevAndNextButton() {
					
					if ($scope.curPage === 1) {
						$scope.showPrevBtn = false;
					}

					if ($scope.curPage === $scope.lastPage) {
						$scope.showNextBtn = false;
					}					
				}

				// 当页数小于等于7时，显示所有页数按钮
				// 1,2,3,4,5,6,7
				if ($scope.totalPageCount <= $scope.displayPages) {
					$scope.range = initPageRange(1, $scope.totalPageCount);
					decideWhetherShowPrevAndNextButton();
					return;
				}


				// 当页数处于中央，两头省略号都要出现：
				// 1,...5,6,7...10
				if ($scope.curPage - 1 > 2 
					&& $scope.lastPage - $scope.curPage > 2) {

					$scope.showPrevEllipsis = true;
					$scope.showNextEllipsis = true;

					$scope.showFirstPage = true;
					$scope.showLastPage = true;
					$scope.range = initPageRange($scope.curPage - 1, 3);
					
					decideWhetherShowPrevAndNextButton();
				// 当页数比较靠近第一页时
				// 隐藏前置省略号
				// 1,2,3,4...,10
				} else if ($scope.curPage - 1 <= 4) {

					$scope.range = initPageRange(1, 5);
					$scope.showNextEllipsis = true;
					$scope.showLastPage = true;

					$scope.showPrevBtn = true;
					$scope.showNextBtn = true;					
					
					decideWhetherShowPrevAndNextButton();						
				// 当页数比较靠近最后时
				// 隐藏后置省略号
				// 1,...8,9,10
				} else if ($scope.lastPage - $scope.curPage <= 4) {

					$scope.range = initPageRange($scope.lastPage - 4, 5);
					$scope.showPrevEllipsis = true;
					$scope.showFirstPage = true;

					$scope.showPrevBtn = true;
					$scope.showNextBtn = true;

					decideWhetherShowPrevAndNextButton();
				}

			})();

			// API:
			$scope.$on('pager:setTotalPageCount', function (event, data) {
				$scope.totalPageCount = data.totalPage;
				render();
			});

			$scope.$on('pager:setCurPage', function (event, data) {
				$scope.curPage = data.curPage;
				render();
			});
		}    
	}
})
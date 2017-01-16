var app = new Vue({
    el: '#app',
    data: {
    	keyword: '',
    	keywords: ['word1', 'word2'],
        maxWordsCount: 10,
        formIsAvailable: true,
        latestData: {
            data: [],
            pagination: {
                total: 10,
                cur: 1
            }
        },
        searchedData: {
            data: [],
            pagination: {
                total: 10,
                cur: 1
            }            
        } 
    },
    watch: {
        keywords: {
            deep: true,
            handler: function () {
                console.log('keywords Changed!');
            }
        },
        'searchedData.pagination': {
            deep: true,
            handler: function () {
                console.log('searchedData.pagination Changed!--->', JSON.stringify(this.searchedData.pagination));
                this.search();
            }
        },
        'latestData.pagination' : {
            deep: true,
            handler: function () {
                console.log('latestData.pagination Changed!--->', JSON.stringify(this.latestData.pagination));
                this.fetch();
            }
        }
    },
    methods: { 
    	validate: function (value) {
    		// 如果没有值，返回
    		if (!value) {
    			return 1;
    		}

    		// 如果已经有该词则不再添加
    		if (this.keywords.indexOf(value) > -1) {
    			return 2;
    		}

    		return 0;
    	},
    	errorCodeMapping: function (errorCode) {
    		errorCode = parseInt(errorCode);
    		var message = '填写有误';
    		switch(errorCode) {
    			case 1: message = '未填写关键词'; break;
    			case 2: message = '该关键词已存在'; break; 
    		}
    		return message;
    	},
    	showError: function (message) {
    		var errorLabel = document.querySelector('#label-error');
    		var content = errorLabel.querySelector('.content');
    		content.innerHTML = message;
    		errorLabel.style.display = '';
    	},
    	hideError: function () {
    		var errorLabel = document.querySelector('#label-error');
    		errorLabel.style.display = 'none';
    	},
    	submitHandler: function (event) {
    		event.preventDefault();
    		var form = event.target;
    		var keywordInput = form.querySelector('#input-keyword');
    		var validateResult = this.validate(this.keyword);
    		
    		if (validateResult > 0) {
    			this.showError(this.errorCodeMapping(validateResult));
    			this.keyword = '';
    			return;
    		}

    		this.hideError();
    		this.keywords.push(this.keyword);
    		this.keyword = '';
            // 搜索词发生修改时需要重置当前页数
            this.searchedData.pagination.cur = 1;

            this.search();
    	},
        enableForm: function () {
            this.formIsAvailable = true;
        },
        disableForm: function () {
            this.formIsAvailable = false;
        },
        swtichToSearchResultTab: function () {
            PubSub.publish('swtichToSearchResultTab');
        },
        fetch: function () {
            console.log('fetch');
            this.disableForm();
            $.ajax({
                url: 'http://example.com/',
                dataType: 'json',
                timeout: 1000 * 1,
                data: {
                    page: this.latestData.pagination.cur
                },
                success: function (data, textStatus, jqXHR) {

                }.bind(this),
                error: function (jqXHR, textStatus, errorThrown) {

                }.bind(this),
                complete: function (jqXHR, textStatus) {
                    this.enableForm();
                }.bind(this)              
            });            
        },
        search: function () {
            console.log('search');
            this.disableForm();
            this.swtichToSearchResultTab();

            var parameters = {
                keywords: this.keywords.join('_'),
                page: this.searchedData.pagination.cur
            };

            $.ajax({
                url: 'http://example.com/',
                dataType: 'json',
                timeout: 1000 * 1,
                data: parameters,
                success: function (data, textStatus, jqXHR) {

                }.bind(this),
                error: function (jqXHR, textStatus, errorThrown) {

                }.bind(this),
                complete: function (jqXHR, textStatus) {
                    this.enableForm();
                }.bind(this)
            });
        },
    	deleteWordHandler: function (event) {
    		var target = event.target;
    		var wordToDelete = target.getAttribute('data-word');
    		var wordIndex = this.keywords.indexOf(wordToDelete);
    		this.keywords.splice(wordIndex);
    	}
    }
});
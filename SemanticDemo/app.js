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
        searchData: {
            data: [],
            pagination: {
                total: 10,
                cur: 1
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

            this.fetch();
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
            this.disableForm();
            this.swtichToSearchResultTab();
            var timeoutCounter = setInterval(function () {
                if (!this.formIsAvailable) {
                    this.enableForm();
                }
            }.bind(this), 1000 * 3);
        },
    	deleteWordHandler: function (event) {
    		var target = event.target;
    		var wordToDelete = target.getAttribute('data-word');
    		var wordIndex = this.keywords.indexOf(wordToDelete);
    		this.keywords.splice(wordIndex);
    	}
    }
});
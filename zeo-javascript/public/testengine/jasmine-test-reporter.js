jasmine.TestReporter = function(doc) {
	this.document = doc || document;
	this.suiteDivs = {};
	this.logRunningSpecs = false;
    this._reportNode = document.body;
};

jasmine.TestReporter.prototype.setReportNode = function(node) {
    this._reportNode = node || this._reportNode;
};

jasmine.TestReporter.prototype.createDom = function(type, attrs, childrenVarArgs) {
	var el = document.createElement(type);

	for (var i = 2; i < arguments.length; i++) {
		var child = arguments[i];

		if (typeof child === 'string') {
			el.appendChild(document.createTextNode(child));
		} else {
			if (child) {
				el.appendChild(child);
			}
		}
	}

	for (var attr in attrs) {
		if (attr == "className") {
			el[attr] = attrs[attr];
		} else {
			el.setAttribute(attr, attrs[attr]);
		}
	}

	return el;
};

jasmine.TestReporter.prototype.reportRunnerStarting = function(runner) {
};

jasmine.TestReporter.prototype.reportRunnerResults = function(runner) {
    var tasks = runner.queue.blocks;
    for(var i = 0; i < tasks.length; ++i) {
        var task = tasks[i];
        var taskState = 'no-tests';

        if(task instanceof jasmine.Suite) {
            // Get task results
            var taskResults = this._createDescribeResults(task, true);
            var childNodes = this._reportNode.childNodes;
            if(childNodes.length > 0) {
                this._reportNode.insertBefore(taskResults.node, childNodes[0]);
            } else {
                this._reportNode.appendChild(taskResults.node);
            }
            // Check if need to continue
            if(taskResults.state === 'failed') {
                return;
            }
        } else {
            // ToDo: Report error - first level tasks must be suits (describes)
        }
    }
};

jasmine.TestReporter.prototype._createDescribeResults = function(suite, isTopTask) {
    var descNode = this.createDom('div', {className:'task'});
    var descTitleNode = this.createDom('div', {className:isTopTask?'description top':'description item'});
    descTitleNode.innerHTML = suite.description;
    descNode.appendChild(descTitleNode);

    var results;
    var tasks = suite.queue.blocks;
    var taskState = 'no-tests';
    for(var i = 0; i < tasks.length; ++i) {
        var task = tasks[i];

        if(task instanceof jasmine.Suite) {
            results = this._createDescribeResults(task, false);
            descNode.appendChild(results.node);
        } else if(task instanceof jasmine.Spec) {
            results = this._createItResults(task);
            descNode.appendChild(results.node);
        }
        if(results.state === 'failed' || (results.state === 'passed' && taskState === 'no-tests')) {
            taskState = results.state;
        }
    }
    descTitleNode.classList.add(taskState);
    descNode.classList.add(taskState);
    return {node:descNode, state:taskState };
};

jasmine.TestReporter.prototype._createItResults = function(spec) {
    var itNode = this.createDom('div', {className:'sub-task'});
    var itTitleNode = this.createDom('div', {className:'description'});
    itTitleNode.innerHTML = spec.description;
    itNode.appendChild(itTitleNode);

    var failedCount = spec.results_.failedCount;
    var resultClass = (failedCount > 0) ? 'failed' : 'passed';
    itNode.classList.add(resultClass);

    return {node:itNode, state:resultClass };
};



jasmine.TestReporter.prototype.reportSuiteResults = function(suite) {};

jasmine.TestReporter.prototype.reportSpecStarting = function(spec) {};

jasmine.TestReporter.prototype.reportSpecResults = function(spec) {};

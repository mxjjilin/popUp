window.onload = function() {
	// body...
	var oBtn = document.getElementById('btn');
	var oMask = document.getElementById('mask');
	var oBox = document.getElementById('box');
	var oClose = document.getElementById('close');

	function oCloseFn() {
		oMask.style.display = 'none';
		oBox.style.display = 'none';
	}

	function addEvent(elem, event, fn) {
		if (elem.addEventListener) {
			elem.addEventListener(event, fn, false);
		} else if (elem.attachEvent) {
			elem.attachEvent('on' + event, fn);
		} else {
			elem['on' + event] = fn;
		}
	}

	function oBtnFn() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
		//遮罩层
		oMask.style.display = 'block';
		oMask.style.width = Math.max(document.documentElement.clientWidth, document.body.offsetWidth) + 'px';
		// alert("oMask.style.width");
		oMask.style.height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight) + 'px';

		//弹出层
		oBox.style.display = 'block';
		oBox.style.left = (document.documentElement.clientWidth - oBox.offsetWidth) / 2 + scrollLeft + 'px';
		oBox.style.top = (document.documentElement.clientHeight - oBox.offsetHeight) / 2 + scrollTop + 'px';

	}
	addEvent(oBtn, "click", oBtnFn);

	addEvent(oClose, "click", oCloseFn);
	window.onscroll = function() {
		if (oBox.style.display == 'none')
			return;


		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
		oBox.style.display = 'block';
		oBox.style.left = (document.documentElement.clientWidth - oBox.offsetWidth) / 2 + scrollLeft + 'px';
		oBox.style.top = (document.documentElement.clientHeight - oBox.offsetHeight) / 2 + scrollTop + 'px';
	};
	window.onresize = function() {
		if (oMask.style.display == 'none')
			return;


		oMask.style.width = Math.max(document.documentElement.clientWidth, document.body.offsetWidth) + 'px';
		oMask.style.height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight) + 'px';
		if (oBox.style.display == 'none')
			return;


		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
		//遮罩层
		oBox.style.display = 'block';
		oBox.style.left = (document.documentElement.clientWidth - oBox.offsetWidth) / 2 + scrollLeft + 'px';
		oBox.style.top = (document.documentElement.clientHeight - oBox.offsetHeight) / 2 + scrollTop + 'px';


	};


};
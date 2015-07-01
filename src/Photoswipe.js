'use strict';

var React = require('react');

var Photoswipe = module.exports = React.createClass({
	openPhotoSwipe: function() {
		var pswpElement = document.querySelectorAll('.pswp')[0];
		// build items array
		var items = [
		    {
		        src: 'https://lh3.googleusercontent.com/-lXmBoaWzAAU/Unc9N6-zNZI/AAAAAAAAAPE/e_KqkD3zhNU/DSC_0209.JPG',
		        w: 512,
		        h: 511
		    },
		    {
		        src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
		        w: 1024,
		        h: 683
		    }
		];
		var options = {
		    history: false,
		    focus: false,
		    showAnimationDuration: 0,
		    hideAnimationDuration: 0
		};
		var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	},
	render: function () {
		return(
			<div>
			<button id="btn" onClick={this.openPhotoSwipe}>Open Photos</button>
			    <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
			        <div className="pswp__bg"></div>
			        <div className="pswp__scroll-wrap">
			            <div className="pswp__container">
			                <div className="pswp__item"></div>
			                <div className="pswp__item"></div>
			                <div className="pswp__item"></div>
			            </div>
			            <div className="pswp__ui pswp__ui--hidden">
			                <div className="pswp__top-bar">
			                    <div className="pswp__counter"></div>
			                    <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
			                    <button className="pswp__button pswp__button--share" title="Share"></button>
			                    <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
			                    <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button> 
			                    <div className="pswp__preloader">
			                        <div className="pswp__preloader__icn">
			                          <div className="pswp__preloader__cut">
			                            <div className="pswp__preloader__donut"></div>
			                          </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
			                    <div className="pswp__share-tooltip"></div> 
			                </div>
			                <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
			                </button>
			                <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
			                </button>
			                <div className="pswp__caption">
			                    <div className="pswp__caption__center"></div>
			                </div>
						</div>
		            </div>
			    </div>
		    </div>
		)
	}
})
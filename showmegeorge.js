/*
 * ShowMeGeorge
 * version 0.5
 * Aug 6, 2012
 */
var ShowMeGeorge = {
		easterEgg: '',
		eggLength: 0,
		keyHistory: '',
		match: '',
		imgPath: "https://s3.amazonaws.com/ShowMeGeorge/",
		imgArray: ["george1.png","george2.png","george3.png","george4.png","george5.png"],
		
		init: function(){
			var self = ShowMeGeorge;
			self.easterEgg = "SHOWMEGEORGE";
			self.eggLength = self.easterEgg.length;
			self.keyHistory = "";

			window.onkeydown = function(e){
				self.keyHistory += String.fromCharCode(e.which);
				
				self.match = self.keyHistory.match(self.easterEgg);
				if(self.match){
					self.blastOff();
				} else if (self.keyHistory.length > 30) {
					self.keyHistory = self.keyHistory.substr((self.keyHistory.length - self.eggLength - 1));
				}
			}
		},
		
		blastOff: function(){
			var self = ShowMeGeorge;
			
			self.createImageElement();
			if(document.images.length < 300)
				setTimeout(self.blastOff,100);
		},

		createImageElement: function(){
			var self = ShowMeGeorge;
			var _height = window.innerHeight;
			var _width = window.innerWidth;
			var _top = Math.floor( Math.random() * _height ) - 100;
			var _left = Math.floor( Math.random() * _width  ) - 100;
			
			var george = document.createElement("img");
			george.setAttribute("src", self.imgPath + self.imgArray[Math.floor(Math.random() * 5)]);
			george.setAttribute( 'style', 'position: fixed; z-index: 9998; top: ' + _top + 'px; left: ' + _left + 'px;' );
			
			document.body.appendChild(george);
			
			return george;
		}
};

window.onload = ShowMeGeorge.init;
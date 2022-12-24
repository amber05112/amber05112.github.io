(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"畫美女2_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[807,0,153,408],[807,410,153,408],[625,0,180,465],[581,467,192,322],[314,669,231,138],[280,436,299,231],[0,718,312,103],[547,791,85,30],[962,0,54,128]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_11 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["畫美女2_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgwFAgEMAAAhAHMBgLAAAMAAABAHg");
	mask.setTransform(307.825,205.225);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.0804,0.0804);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,615.6,410.5), null);


(lib.手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(307.8,205.2,1,1,0,0,0,307.8,205.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手, new cjs.Rectangle(0,0,615.7,410.5), null);


// stage content:
(lib.畫美女2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 手12
	this.instance = new lib.手();
	this.instance.setTransform(435.8,375.7,1,1,0,0,0,307.8,205.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(385).to({_off:false},0).wait(1).to({x:427.2,y:382.9},0).wait(1).to({x:423.4,y:387.95},0).wait(1).to({x:426.1,y:393},0).wait(1).to({x:429.4,y:398.45},0).wait(1).to({x:434.8,y:402.8},0).wait(1).to({x:440.55,y:407.15},0).wait(1).to({x:442.7,y:412.55},0).wait(1).to({x:441,y:417.75},0).wait(1).to({x:437.3,y:421.95},0).wait(1).to({x:433.6,y:428.5},0).wait(1).to({y:432.05},0).wait(1).to({y:437.8},0).wait(1).to({y:438.45},0).wait(2));

	// 遮12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_385 = new cjs.Graphics().p("AnXBhIAAjBIOvAAIAADBg");
	var mask_graphics_386 = new cjs.Graphics().p("AnXB6IAAjzIOvAAIAADzg");
	var mask_graphics_387 = new cjs.Graphics().p("AnXCTIAAklIOvAAIAAElg");
	var mask_graphics_388 = new cjs.Graphics().p("AnXCsIAAlXIOvAAIAAFXg");
	var mask_graphics_389 = new cjs.Graphics().p("AnXDFIAAmJIOvAAIAAGJg");
	var mask_graphics_390 = new cjs.Graphics().p("AnXDeIAAm7IOvAAIAAG7g");
	var mask_graphics_391 = new cjs.Graphics().p("AnXD3IAAntIOvAAIAAHtg");
	var mask_graphics_392 = new cjs.Graphics().p("AnXEPIAAodIOvAAIAAIdg");
	var mask_graphics_393 = new cjs.Graphics().p("AnXEoIAApPIOvAAIAAJPg");
	var mask_graphics_394 = new cjs.Graphics().p("AnXFBIAAqBIOvAAIAAKBg");
	var mask_graphics_395 = new cjs.Graphics().p("AnXFaIAAqzIOvAAIAAKzg");
	var mask_graphics_396 = new cjs.Graphics().p("AnXFzIAArlIOvAAIAALlg");
	var mask_graphics_397 = new cjs.Graphics().p("AnXGMIAAsXIOvAAIAAMXg");
	var mask_graphics_398 = new cjs.Graphics().p("AnXGkIAAtHIOvAAIAANHg");
	var mask_graphics_399 = new cjs.Graphics().p("AN7brIAAt7IOwAAIAAN7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(385).to({graphics:mask_graphics_385,x:319.75,y:274.775}).wait(1).to({graphics:mask_graphics_386,x:319.75,y:277.275}).wait(1).to({graphics:mask_graphics_387,x:319.75,y:279.75}).wait(1).to({graphics:mask_graphics_388,x:319.75,y:282.25}).wait(1).to({graphics:mask_graphics_389,x:319.75,y:284.725}).wait(1).to({graphics:mask_graphics_390,x:319.75,y:287.225}).wait(1).to({graphics:mask_graphics_391,x:319.75,y:289.7}).wait(1).to({graphics:mask_graphics_392,x:319.75,y:292.225}).wait(1).to({graphics:mask_graphics_393,x:319.75,y:294.725}).wait(1).to({graphics:mask_graphics_394,x:319.75,y:297.2}).wait(1).to({graphics:mask_graphics_395,x:319.75,y:299.7}).wait(1).to({graphics:mask_graphics_396,x:319.75,y:302.175}).wait(1).to({graphics:mask_graphics_397,x:319.75,y:304.675}).wait(1).to({graphics:mask_graphics_398,x:319.75,y:307.15}).wait(1).to({graphics:mask_graphics_399,x:183.475,y:177.0942}).wait(1));

	// lady12
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(385).to({_off:false},0).wait(15));

	// 手11
	this.instance_2 = new lib.手();
	this.instance_2.setTransform(282.6,358.05,1,1,0,0,0,307.8,205.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(380).to({_off:false},0).wait(1).to({y:353.35},0).wait(1).to({x:287.6,y:350.45},0).wait(1).to({x:290.5,y:356.75},0).wait(1).to({_off:true},1).wait(15));

	// 遮11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_380 = new cjs.Graphics().p("AiJCYIAAkvIETAAIAAEvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(380).to({graphics:mask_1_graphics_380,x:169.625,y:262.5}).wait(20));

	// lady11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(380).to({_off:false},0).wait(20));

	// 手10
	this.instance_3 = new lib.手();
	this.instance_3.setTransform(343.8,363.45,1,1,0,0,0,307.8,205.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(365).to({_off:false},0).wait(1).to({x:348.05,y:366},0).wait(1).to({x:350.55,y:367.35},0).wait(1).to({x:353.65,y:369},0).wait(1).to({x:356.55,y:370.05},0).wait(1).to({x:360.4},0).wait(1).to({x:363.4},0).wait(1).to({x:366.7},0).wait(1).to({x:370.05,y:371.15},0).wait(1).to({x:373.05,y:370.1},0).wait(1).to({x:376.6,y:367.9},0).wait(1).to({x:379.85,y:366.9},0).wait(1).to({x:381.45,y:366.8},0).to({_off:true},3).wait(20));

	// 遮10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_365 = new cjs.Graphics().p("AgpCYIAAkvIBTAAIAAEvg");
	var mask_2_graphics_366 = new cjs.Graphics().p("Ag5CYIAAkvIBzAAIAAEvg");
	var mask_2_graphics_367 = new cjs.Graphics().p("AhJCYIAAkvICTAAIAAEvg");
	var mask_2_graphics_368 = new cjs.Graphics().p("AhZCYIAAkvICzAAIAAEvg");
	var mask_2_graphics_369 = new cjs.Graphics().p("AhqCYIAAkvIDVAAIAAEvg");
	var mask_2_graphics_370 = new cjs.Graphics().p("Ah6CYIAAkvID1AAIAAEvg");
	var mask_2_graphics_371 = new cjs.Graphics().p("AiKCYIAAkvIEWAAIAAEvg");
	var mask_2_graphics_372 = new cjs.Graphics().p("AibCYIAAkvIE3AAIAAEvg");
	var mask_2_graphics_373 = new cjs.Graphics().p("AirCYIAAkvIFXAAIAAEvg");
	var mask_2_graphics_374 = new cjs.Graphics().p("Ai7CYIAAkvIF3AAIAAEvg");
	var mask_2_graphics_375 = new cjs.Graphics().p("AjLCYIAAkvIGXAAIAAEvg");
	var mask_2_graphics_376 = new cjs.Graphics().p("AjcCYIAAkvIG5AAIAAEvg");
	var mask_2_graphics_377 = new cjs.Graphics().p("AjsCYIAAkvIHZAAIAAEvg");
	var mask_2_graphics_378 = new cjs.Graphics().p("Aj8CYIAAkvIH5AAIAAEvg");
	var mask_2_graphics_379 = new cjs.Graphics().p("AM4WaIAAkwIIbAAIAAEwg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(365).to({graphics:mask_2_graphics_365,x:222.775,y:271.55}).wait(1).to({graphics:mask_2_graphics_366,x:224.4,y:271.55}).wait(1).to({graphics:mask_2_graphics_367,x:226.025,y:271.55}).wait(1).to({graphics:mask_2_graphics_368,x:227.65,y:271.55}).wait(1).to({graphics:mask_2_graphics_369,x:229.3,y:271.55}).wait(1).to({graphics:mask_2_graphics_370,x:230.925,y:271.55}).wait(1).to({graphics:mask_2_graphics_371,x:232.55,y:271.55}).wait(1).to({graphics:mask_2_graphics_372,x:234.2,y:271.55}).wait(1).to({graphics:mask_2_graphics_373,x:235.825,y:271.55}).wait(1).to({graphics:mask_2_graphics_374,x:237.45,y:271.55}).wait(1).to({graphics:mask_2_graphics_375,x:239.075,y:271.55}).wait(1).to({graphics:mask_2_graphics_376,x:240.725,y:271.55}).wait(1).to({graphics:mask_2_graphics_377,x:242.35,y:271.55}).wait(1).to({graphics:mask_2_graphics_378,x:243.975,y:271.55}).wait(1).to({graphics:mask_2_graphics_379,x:136.2667,y:143.375}).wait(21));

	// lady_下嘴唇
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhgAfQgWgWgpggIgsglQgFgFgCgGQASADAgACIAzAEQAXAEAxAPQAwAOAQADQAYAEAsgFIA8gFIgBgCIAEAAQAVADANAGIATALIgYAXIgkAmQgdAYggAAQiRAAgpgog");
	this.shape_1.setTransform(243.275,275);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(365).to({_off:false},0).wait(35));

	// 手9
	this.instance_4 = new lib.手();
	this.instance_4.setTransform(342.7,360.05,1,1,0,0,0,307.8,205.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(352).to({_off:false},0).wait(1).to({x:346.25,y:359.35},0).wait(1).to({x:350.45,y:357.05},0).wait(1).to({x:354.45},0).wait(1).to({x:357.9,y:357.1},0).wait(1).to({x:362.1,y:357.25},0).wait(1).to({x:365},0).wait(1).to({x:369.15},0).wait(1).to({x:372.65,y:359},0).wait(1).to({x:377.15,y:361.7},0).wait(1).to({x:378.75,y:365.45},0).wait(1).to({x:379.05,y:366.3},0).to({_off:true},2).wait(35));

	// 遮9 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_350 = new cjs.Graphics().p("AhKDPIAAmcICVAAIAAGcg");
	var mask_3_graphics_351 = new cjs.Graphics().p("AhdDPIAAmcIC7AAIAAGcg");
	var mask_3_graphics_352 = new cjs.Graphics().p("AhwDPIAAmcIDhAAIAAGcg");
	var mask_3_graphics_353 = new cjs.Graphics().p("AiDDPIAAmcIEHAAIAAGcg");
	var mask_3_graphics_354 = new cjs.Graphics().p("AiXDPIAAmcIEvAAIAAGcg");
	var mask_3_graphics_355 = new cjs.Graphics().p("AiqDPIAAmcIFUAAIAAGcg");
	var mask_3_graphics_356 = new cjs.Graphics().p("Ai9DPIAAmcIF6AAIAAGcg");
	var mask_3_graphics_357 = new cjs.Graphics().p("AjQDPIAAmcIGhAAIAAGcg");
	var mask_3_graphics_358 = new cjs.Graphics().p("AjjDPIAAmcIHHAAIAAGcg");
	var mask_3_graphics_359 = new cjs.Graphics().p("Aj2DPIAAmcIHsAAIAAGcg");
	var mask_3_graphics_360 = new cjs.Graphics().p("AkJDPIAAmcIISAAIAAGcg");
	var mask_3_graphics_361 = new cjs.Graphics().p("AkcDPIAAmcII5AAIAAGcg");
	var mask_3_graphics_362 = new cjs.Graphics().p("AkvDPIAAmcIJfAAIAAGcg");
	var mask_3_graphics_363 = new cjs.Graphics().p("AlCDPIAAmcIKFAAIAAGcg");
	var mask_3_graphics_364 = new cjs.Graphics().p("AKiWxIAAmdIKsAAIAAGdg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(350).to({graphics:mask_3_graphics_350,x:210.675,y:270.65}).wait(1).to({graphics:mask_3_graphics_351,x:212.575,y:270.65}).wait(1).to({graphics:mask_3_graphics_352,x:214.475,y:270.65}).wait(1).to({graphics:mask_3_graphics_353,x:216.375,y:270.65}).wait(1).to({graphics:mask_3_graphics_354,x:218.3,y:270.65}).wait(1).to({graphics:mask_3_graphics_355,x:220.2,y:270.65}).wait(1).to({graphics:mask_3_graphics_356,x:222.1,y:270.65}).wait(1).to({graphics:mask_3_graphics_357,x:224,y:270.65}).wait(1).to({graphics:mask_3_graphics_358,x:225.9,y:270.65}).wait(1).to({graphics:mask_3_graphics_359,x:227.8,y:270.65}).wait(1).to({graphics:mask_3_graphics_360,x:229.7,y:270.65}).wait(1).to({graphics:mask_3_graphics_361,x:231.625,y:270.65}).wait(1).to({graphics:mask_3_graphics_362,x:233.525,y:270.65}).wait(1).to({graphics:mask_3_graphics_363,x:235.425,y:270.65}).wait(1).to({graphics:mask_3_graphics_364,x:135.7564,y:145.65}).wait(36));

	// lady上嘴唇
	this.instance_5 = new lib.CachedBmp_2();
	this.instance_5.setTransform(222.15,258.7,0.5,0.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(350).to({_off:false},0).wait(50));

	// 手8
	this.instance_6 = new lib.手();
	this.instance_6.setTransform(274.7,494.7,1,1,0,0,0,307.8,205.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(331).to({_off:false},0).wait(1).to({x:284.1},0).wait(1).to({x:292},0).wait(1).to({x:300.9},0).wait(1).to({x:310.15,y:492.5},0).wait(1).to({x:318.4,y:489.85},0).wait(1).to({x:327.25,y:487.35},0).wait(1).to({x:335.3,y:485.15},0).wait(1).to({x:344.4,y:483},0).wait(1).to({x:353.45,y:477.6},0).wait(1).to({x:361.85,y:473.9},0).wait(1).to({x:369.55,y:470.05},0).wait(1).to({x:379.15,y:465.5},0).wait(1).to({x:387.2,y:460.15},0).wait(1).to({x:395.9,y:456.1},0).wait(1).to({x:404.55,y:451.95},0).wait(1).to({x:413.3,y:448.6},0).wait(1).to({x:422.05},0).wait(1).to({x:426.9,y:449.6},0).to({_off:true},1).wait(50));

	// 遮8 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_331 = new cjs.Graphics().p("EAIIAiMIAAvAIEQAAIAAPAg");
	var mask_4_graphics_332 = new cjs.Graphics().p("AiyHgIAAu/IFlAAIAAO/g");
	var mask_4_graphics_333 = new cjs.Graphics().p("AjdHgIAAu/IG7AAIAAO/g");
	var mask_4_graphics_334 = new cjs.Graphics().p("AkJHgIAAu/IISAAIAAO/g");
	var mask_4_graphics_335 = new cjs.Graphics().p("Ak0HgIAAu/IJpAAIAAO/g");
	var mask_4_graphics_336 = new cjs.Graphics().p("AlfHgIAAu/IK/AAIAAO/g");
	var mask_4_graphics_337 = new cjs.Graphics().p("AmKHgIAAu/IMVAAIAAO/g");
	var mask_4_graphics_338 = new cjs.Graphics().p("Am1HgIAAu/INrAAIAAO/g");
	var mask_4_graphics_339 = new cjs.Graphics().p("AngHgIAAu/IPBAAIAAO/g");
	var mask_4_graphics_340 = new cjs.Graphics().p("AoLHgIAAu/IQXAAIAAO/g");
	var mask_4_graphics_341 = new cjs.Graphics().p("Ao2HgIAAu/IRtAAIAAO/g");
	var mask_4_graphics_342 = new cjs.Graphics().p("AphHgIAAu/ITDAAIAAO/g");
	var mask_4_graphics_343 = new cjs.Graphics().p("AqMHgIAAu/IUZAAIAAO/g");
	var mask_4_graphics_344 = new cjs.Graphics().p("Aq3HgIAAu/IVwAAIAAO/g");
	var mask_4_graphics_345 = new cjs.Graphics().p("ArjHgIAAu/IXHAAIAAO/g");
	var mask_4_graphics_346 = new cjs.Graphics().p("AsOHgIAAu/IYdAAIAAO/g");
	var mask_4_graphics_347 = new cjs.Graphics().p("As5HgIAAu/IZzAAIAAO/g");
	var mask_4_graphics_348 = new cjs.Graphics().p("AtkHgIAAu/IbJAAIAAO/g");
	var mask_4_graphics_349 = new cjs.Graphics().p("EgD/AiMIAAvAIcgAAIAAPAg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(331).to({graphics:mask_4_graphics_331,x:79.225,y:218.8295}).wait(1).to({graphics:mask_4_graphics_332,x:149.175,y:389.65}).wait(1).to({graphics:mask_4_graphics_333,x:153.475,y:389.65}).wait(1).to({graphics:mask_4_graphics_334,x:157.8,y:389.65}).wait(1).to({graphics:mask_4_graphics_335,x:162.1,y:389.65}).wait(1).to({graphics:mask_4_graphics_336,x:166.425,y:389.65}).wait(1).to({graphics:mask_4_graphics_337,x:170.725,y:389.65}).wait(1).to({graphics:mask_4_graphics_338,x:175.05,y:389.65}).wait(1).to({graphics:mask_4_graphics_339,x:179.35,y:389.65}).wait(1).to({graphics:mask_4_graphics_340,x:183.7,y:389.65}).wait(1).to({graphics:mask_4_graphics_341,x:188.025,y:389.65}).wait(1).to({graphics:mask_4_graphics_342,x:192.325,y:389.65}).wait(1).to({graphics:mask_4_graphics_343,x:196.65,y:389.65}).wait(1).to({graphics:mask_4_graphics_344,x:200.95,y:389.65}).wait(1).to({graphics:mask_4_graphics_345,x:205.275,y:389.65}).wait(1).to({graphics:mask_4_graphics_346,x:209.575,y:389.65}).wait(1).to({graphics:mask_4_graphics_347,x:213.9,y:389.65}).wait(1).to({graphics:mask_4_graphics_348,x:218.2,y:389.65}).wait(1).to({graphics:mask_4_graphics_349,x:156.869,y:218.8295}).wait(51));

	// lady08
	this.instance_7 = new lib.CachedBmp_3();
	this.instance_7.setTransform(153.35,351.75,0.5,0.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(331).to({_off:false},0).wait(69));

	// 手7
	this.instance_8 = new lib.手();
	this.instance_8.setTransform(393.9,396.9,1,1,0,0,0,307.8,205.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(300).to({_off:false},0).wait(1).to({x:392.35,y:402.8},0).wait(1).to({y:408.45},0).wait(1).to({y:413.55},0).wait(1).to({y:418.9},0).wait(1).to({x:395.3,y:425.2},0).wait(1).to({x:397.95,y:430.8},0).wait(1).to({x:402.75,y:435.9},0).wait(1).to({x:410,y:439.65},0).wait(1).to({y:440.85},0).wait(3).to({x:419.55},0).wait(1).to({x:427.35},0).wait(1).to({x:433.5},0).wait(1).to({x:440.35,y:437.6},0).wait(1).to({x:448,y:435.45},0).wait(1).to({x:453.95},0).wait(1).to({x:461.3,y:433.85},0).wait(1).to({x:467.45},0).wait(1).to({x:474.95,y:431.3},0).wait(1).to({x:482.05},0).wait(1).to({x:488.6,y:434.15},0).wait(1).to({x:495.45,y:436.3},0).wait(1).to({x:503.1,y:439.25},0).wait(1).to({x:509.55,y:444.75},0).wait(1).to({x:516,y:451.95},0).wait(1).to({x:522.75,y:460},0).wait(1).to({x:529.75,y:472.65},0).wait(1).to({x:536.3,y:489.7},0).wait(1).to({_off:true},1).wait(69));

	// 遮7_ (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_300 = new cjs.Graphics().p("ANnXuIAAiFIJRAAIAACFg");
	var mask_5_graphics_301 = new cjs.Graphics().p("AkoBeIAAi7IJRAAIAAC7g");
	var mask_5_graphics_302 = new cjs.Graphics().p("AkoB6IAAjzIJRAAIAADzg");
	var mask_5_graphics_303 = new cjs.Graphics().p("AkoCWIAAkqIJRAAIAAEqg");
	var mask_5_graphics_304 = new cjs.Graphics().p("AkoCxIAAlhIJRAAIAAFhg");
	var mask_5_graphics_305 = new cjs.Graphics().p("AkoDNIAAmZIJRAAIAAGZg");
	var mask_5_graphics_306 = new cjs.Graphics().p("AkoDoIAAnPIJRAAIAAHPg");
	var mask_5_graphics_307 = new cjs.Graphics().p("AkoEEIAAoHIJRAAIAAIHg");
	var mask_5_graphics_308 = new cjs.Graphics().p("AkoEgIAAo/IJRAAIAAI/g");
	var mask_5_graphics_309 = new cjs.Graphics().p("AkoE7IAAp1IJRAAIAAJ1g");
	var mask_5_graphics_310 = new cjs.Graphics().p("ANncDIAAquIJRAAIAAKug");
	var mask_5_graphics_311 = new cjs.Graphics().p("ANncDIAAquIJRAAIAAKug");
	var mask_5_graphics_312 = new cjs.Graphics().p("AAjJjIAAoZIl/AAIAAqtIJRAAIAADcIBoAAIAAPqg");
	var mask_5_graphics_313 = new cjs.Graphics().p("AAAJjIAAoZIl/AAIAAqtIJRAAIAADcICuAAIAAPqg");
	var mask_5_graphics_314 = new cjs.Graphics().p("AghJjIAAoZImAAAIAAqtIJRAAIAADcIDyAAIAAPqg");
	var mask_5_graphics_315 = new cjs.Graphics().p("AhDJjIAAoZImAAAIAAqtIJRAAIAADcIE2AAIAAPqg");
	var mask_5_graphics_316 = new cjs.Graphics().p("AhlJjIAAoZImAAAIAAqtIJRAAIAADcIF6AAIAAPqg");
	var mask_5_graphics_317 = new cjs.Graphics().p("AiHJjIAAoZImAAAIAAqtIJRAAIAADcIG+AAIAAPqg");
	var mask_5_graphics_318 = new cjs.Graphics().p("AiqJjIAAoZImAAAIAAqtIJRAAIAADcIIEAAIAAPqg");
	var mask_5_graphics_319 = new cjs.Graphics().p("AjMJjIAAoZImAAAIAAqtIJRAAIAADcIJIAAIAAPqg");
	var mask_5_graphics_320 = new cjs.Graphics().p("AjuJjIAAoZImAAAIAAqtIJSAAIAADcIKLAAIAAPqg");
	var mask_5_graphics_321 = new cjs.Graphics().p("AkQJjIAAoZImAAAIAAqtIJSAAIAADcILPAAIAAPqg");
	var mask_5_graphics_322 = new cjs.Graphics().p("AkzJjIAAoZImAAAIAAqtIJSAAIAADcIMUAAIAAPqg");
	var mask_5_graphics_323 = new cjs.Graphics().p("AlVJjIAAoZImAAAIAAqtIJSAAIAADcINZAAIAAPqg");
	var mask_5_graphics_324 = new cjs.Graphics().p("Al3JjIAAoZImAAAIAAqtIJSAAIAADcIOdAAIAAPqg");
	var mask_5_graphics_325 = new cjs.Graphics().p("AmZJjIAAoZImAAAIAAqtIJSAAIAADcIPhAAIAAPqg");
	var mask_5_graphics_326 = new cjs.Graphics().p("Am7JjIAAoZImAAAIAAqtIJSAAIAADcIQlAAIAAPqg");
	var mask_5_graphics_327 = new cjs.Graphics().p("AneJjIAAoZImAAAIAAqtIJSAAIAADcIRqAAIAAPqg");
	var mask_5_graphics_328 = new cjs.Graphics().p("AoAJjIAAoZImAAAIAAqtIJSAAIAADcISvAAIAAPqg");
	var mask_5_graphics_329 = new cjs.Graphics().p("AoiJjIAAoZImAAAIAAqtIJSAAIAADcITzAAIAAPqg");
	var mask_5_graphics_330 = new cjs.Graphics().p("ANncDIAAquIJRAAIAAKug");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(300).to({graphics:mask_5_graphics_300,x:146.439,y:151.8}).wait(1).to({graphics:mask_5_graphics_301,x:263.2,y:299.725}).wait(1).to({graphics:mask_5_graphics_302,x:263.2,y:302.475}).wait(1).to({graphics:mask_5_graphics_303,x:263.2,y:305.25}).wait(1).to({graphics:mask_5_graphics_304,x:263.2,y:308.025}).wait(1).to({graphics:mask_5_graphics_305,x:263.2,y:310.825}).wait(1).to({graphics:mask_5_graphics_306,x:263.2,y:313.575}).wait(1).to({graphics:mask_5_graphics_307,x:263.2,y:316.35}).wait(1).to({graphics:mask_5_graphics_308,x:263.2,y:319.125}).wait(1).to({graphics:mask_5_graphics_309,x:263.2,y:321.875}).wait(1).to({graphics:mask_5_graphics_310,x:146.439,y:179.4689}).wait(1).to({graphics:mask_5_graphics_311,x:146.439,y:179.4689}).wait(1).to({graphics:mask_5_graphics_312,x:268.425,y:351.5}).wait(1).to({graphics:mask_5_graphics_313,x:271.85,y:351.5}).wait(1).to({graphics:mask_5_graphics_314,x:275.275,y:351.5}).wait(1).to({graphics:mask_5_graphics_315,x:278.7,y:351.5}).wait(1).to({graphics:mask_5_graphics_316,x:282.1,y:351.5}).wait(1).to({graphics:mask_5_graphics_317,x:285.525,y:351.5}).wait(1).to({graphics:mask_5_graphics_318,x:288.95,y:351.5}).wait(1).to({graphics:mask_5_graphics_319,x:292.375,y:351.5}).wait(1).to({graphics:mask_5_graphics_320,x:295.8,y:351.5}).wait(1).to({graphics:mask_5_graphics_321,x:299.225,y:351.5}).wait(1).to({graphics:mask_5_graphics_322,x:302.65,y:351.5}).wait(1).to({graphics:mask_5_graphics_323,x:306.075,y:351.5}).wait(1).to({graphics:mask_5_graphics_324,x:309.5,y:351.5}).wait(1).to({graphics:mask_5_graphics_325,x:312.925,y:351.5}).wait(1).to({graphics:mask_5_graphics_326,x:316.325,y:351.5}).wait(1).to({graphics:mask_5_graphics_327,x:319.75,y:351.5}).wait(1).to({graphics:mask_5_graphics_328,x:323.175,y:351.5}).wait(1).to({graphics:mask_5_graphics_329,x:326.6,y:351.5}).wait(1).to({graphics:mask_5_graphics_330,x:146.439,y:179.4689}).wait(70));

	// lady07
	this.instance_9 = new lib.CachedBmp_4();
	this.instance_9.setTransform(270.45,282.15,0.5,0.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(300).to({_off:false},0).wait(100));

	// 手6
	this.instance_10 = new lib.手();
	this.instance_10.setTransform(410.4,352.05,1,1,0,0,0,307.8,205.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(263).to({_off:false},0).wait(1).to({x:407.05,y:357.85},0).wait(1).to({x:404.55,y:363.45},0).wait(1).to({y:368.45},0).wait(1).to({x:400.35,y:372.9},0).wait(1).to({x:397.7,y:378.95},0).wait(1).to({x:393.8,y:382.9},0).wait(1).to({x:389.9,y:386.35},0).wait(1).to({x:386.5,y:390.55},0).wait(1).to({x:381.55,y:395.25},0).wait(1).to({x:377.15,y:398.9},0).wait(1).to({x:371.65,y:402.05},0).wait(1).to({y:400.45},0).wait(1).to({x:364.55,y:404.15},0).wait(1).to({x:359.85},0).wait(3).to({x:347},0).wait(1).to({x:339.1,y:400.5},0).wait(1).to({x:329.9,y:395},0).wait(1).to({x:322.25,y:387.95},0).wait(1).to({x:316.75,y:381.15},0).wait(1).to({x:308.7,y:372.05},0).wait(1).to({x:302.65,y:361},0).wait(1).to({x:297.25,y:346.25},0).wait(1).to({x:297.4,y:340.85},0).to({_off:true},12).wait(100));

	// 遮6 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_263 = new cjs.Graphics().p("AOuQMICFjnILXGkIiFDng");
	var mask_6_graphics_264 = new cjs.Graphics().p("Am7hGICgkWILXGjIihEWg");
	var mask_6_graphics_265 = new cjs.Graphics().p("AnJguIC8lGILXGjIi8FGg");
	var mask_6_graphics_266 = new cjs.Graphics().p("AnXgWIDYl2ILXGjIjYF2g");
	var mask_6_graphics_267 = new cjs.Graphics().p("AnkABIDzmlILXGkIj0Glg");
	var mask_6_graphics_268 = new cjs.Graphics().p("AnyAYIEPnUILWGlIkPHTg");
	var mask_6_graphics_269 = new cjs.Graphics().p("AoAAwIEqoDILXGkIkqIDg");
	var mask_6_graphics_270 = new cjs.Graphics().p("AoOBIIFGozILWGkIlFIzg");
	var mask_6_graphics_271 = new cjs.Graphics().p("AobBgIFhpjILWGkIlhJjg");
	var mask_6_graphics_272 = new cjs.Graphics().p("AopB4IF9qTILWGkIl9KTg");
	var mask_6_graphics_273 = new cjs.Graphics().p("Ao3CQIGZrDILWGkImZLDg");
	var mask_6_graphics_274 = new cjs.Graphics().p("AJ/USIG0ryILXGkIm0Lyg");
	var mask_6_graphics_275 = new cjs.Graphics().p("AJ/USIG0ryILXGkIm0Lyg");
	var mask_6_graphics_276 = new cjs.Graphics().p("AjRC+IhUAwIhnicIE/oHIHbESIiRD7IAQAJIhiFOIjsAHg");
	var mask_6_graphics_277 = new cjs.Graphics().p("AhREdIglg/IiwBmIixknIDMkcIDfCAICQj8IF0DXIkLIgg");
	var mask_6_graphics_278 = new cjs.Graphics().p("AJ/USIG0ryILXGkIm0Lyg");
	var mask_6_graphics_279 = new cjs.Graphics().p("AJ/USIG0ryILXGkIm0Lyg");
	var mask_6_graphics_280 = new cjs.Graphics().p("An4FyIgeBAIiRgnIA9jfIgDgHIAFgEIBumaIBVi6ICRAnIgMCCIBviLIArhCIBMiDICYA5IIzFFIAWASIlAIsIiSCvIgigTIkWh2IgPgKIA0BaIgwASIgwAiIiwBPg");
	var mask_6_graphics_281 = new cjs.Graphics().p("AoUFpIgmA1IiWgoIA+joIgCgHIAFgFIBympIBviYICWAoIAMB4ICBhxIAhgqIBPiHICUAYIJHFQIARAVIlMI/IikCFIgkgUIkMhFIgOgLIAiA7IgvAGIgsAoIi6A9g");
	var mask_6_graphics_282 = new cjs.Graphics().p("AovFmIgvApIicgpIBBjxIgCgHIAFgFIB2m4ICIh4ICcAqIAmBuICohnIBRiNICRgKIJcFdIALAXIlYJUIi3BZIgkgVIgmAGIjcgaIgOgMIAPAbIgtgEIgpAtIjDArg");
	var mask_6_graphics_283 = new cjs.Graphics().p("ApLFuIg4AfIihgsIBDj4IgBgIIAFgGIB6nHICihXIChArIA/BkICig+IANAKIBTiRICNgsIJxFpIAGAZIlkJpIjJAtIgmgVIgTAZIjkAFIgOgOIgDgFIgsgOIglAyIjNAZg");
	var mask_6_graphics_284 = new cjs.Graphics().p("AgfIWIgUglIgsgYIgiA3IjWAGIkQinIhBASIilgsIBEkAIgBgIIAGgIIB+nVIC8g2IClAtIBYBaIC0glIACAkIBXiXICJhNIKFF1IABAcIlwJ8IjdADIgmgXIgBAtIjsAig");
	var mask_6_graphics_285 = new cjs.Graphics().p("AgMIoIgnhFIgqgiIgfA8IjfgMIkqiWIhKAHIirgtIBHkJIAAgJIAFgIICCnlIDWgUICrAtIBxBRIDDgLIgHA9IBaicICFhuIKaGBIgFAdIl7KRIjvgoIgogYIARBAIj1BCg");
	var mask_6_graphics_286 = new cjs.Graphics().p("AAFI7Ig4hkIgpgtIgbBCIjpgfIlDiGIhTgEIixgvIBJkRIACgIIADgJICGn0IDxAMICwAvICKBGIDTAQIgQBVIBdifICBiQIKuGMIgLAgImGKlIkChUIgogXIAiBTIj9Beg");
	var mask_6_graphics_287 = new cjs.Graphics().p("Ag0HKIgng4IgYBHIjxgxIldh1IhcgQIi2gwIBNkhIADgKICLoEIEJAuIC2AxICjA8IDlAoIgbBvIBgikIB9iyILDGZIgRAjImSK4IkUh/IgqgYIA0BnIkEB9g");
	var mask_6_graphics_288 = new cjs.Graphics().p("AJ/USIG0ryILXGkIm0Lyg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(263).to({graphics:mask_6_graphics_263,x:180.2486,y:145.5527}).wait(1).to({graphics:mask_6_graphics_264,x:316.1,y:260.975}).wait(1).to({graphics:mask_6_graphics_265,x:314.725,y:263.375}).wait(1).to({graphics:mask_6_graphics_266,x:313.325,y:265.775}).wait(1).to({graphics:mask_6_graphics_267,x:311.95,y:268.175}).wait(1).to({graphics:mask_6_graphics_268,x:310.575,y:270.55}).wait(1).to({graphics:mask_6_graphics_269,x:309.175,y:272.975}).wait(1).to({graphics:mask_6_graphics_270,x:307.8,y:275.35}).wait(1).to({graphics:mask_6_graphics_271,x:306.425,y:277.75}).wait(1).to({graphics:mask_6_graphics_272,x:305.025,y:280.15}).wait(1).to({graphics:mask_6_graphics_273,x:303.65,y:282.55}).wait(1).to({graphics:mask_6_graphics_274,x:180.2097,y:171.8473}).wait(1).to({graphics:mask_6_graphics_275,x:180.2097,y:171.8473}).wait(1).to({graphics:mask_6_graphics_276,x:281.9,y:295.75}).wait(1).to({graphics:mask_6_graphics_277,x:287.425,y:303.325}).wait(1).to({graphics:mask_6_graphics_278,x:180.2097,y:171.8473}).wait(1).to({graphics:mask_6_graphics_279,x:180.2097,y:171.8473}).wait(1).to({graphics:mask_6_graphics_280,x:292.25,y:288.875}).wait(1).to({graphics:mask_6_graphics_281,x:287.825,y:288.7}).wait(1).to({graphics:mask_6_graphics_282,x:283.4,y:288.05}).wait(1).to({graphics:mask_6_graphics_283,x:278.975,y:286.2}).wait(1).to({graphics:mask_6_graphics_284,x:274.6,y:285.1}).wait(1).to({graphics:mask_6_graphics_285,x:270.425,y:286.1}).wait(1).to({graphics:mask_6_graphics_286,x:266.3,y:287.05}).wait(1).to({graphics:mask_6_graphics_287,x:262.15,y:288.05}).wait(1).to({graphics:mask_6_graphics_288,x:180.2097,y:171.8473}).wait(112));

	// lady06
	this.instance_11 = new lib.CachedBmp_5();
	this.instance_11.setTransform(179.55,246.75,0.5,0.5);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(263).to({_off:false},0).wait(137));

	// 手5
	this.instance_12 = new lib.手();
	this.instance_12.setTransform(300.3,367.85,1,1,0,0,0,307.8,205.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(230).to({_off:false},0).wait(1).to({y:373.9},0).wait(1).to({y:379.7},0).wait(1).to({y:386},0).wait(1).to({y:393.85},0).wait(1).to({x:303.2,y:400.4},0).wait(1).to({y:407.75},0).wait(1).to({y:414.05},0).wait(1).to({y:420.9},0).wait(1).to({x:304.75,y:426.65},0).wait(1).to({y:433.45},0).wait(1).to({y:440.05},0).wait(1).to({y:447.4},0).wait(1).to({y:454.7},0).wait(1).to({x:302.15,y:460.45},0).wait(1).to({x:298.25,y:467.8},0).wait(1).to({y:467.55},0).wait(1).to({x:291.7,y:476.25},0).wait(1).to({x:285.95,y:479.65},0).wait(1).to({x:278.6,y:483.1},0).wait(1).to({x:270.5,y:486.8},0).wait(1).to({x:265.25,y:489.4},0).wait(1).to({x:259.75},0).wait(1).to({x:254.2,y:492.8},0).wait(1).to({x:248.7,y:495.45},0).wait(1).to({x:242.4},0).wait(1).to({x:236.45,y:500.3},0).wait(1).to({x:231.6,y:503.9},0).wait(1).to({x:226.9,y:507.8},0).wait(1).to({x:222.2,y:512.35},0).wait(1).to({x:217.9,y:517.6},0).wait(1).to({x:214,y:523.5},0).wait(1).to({x:213.5},0).to({_off:true},1).wait(137));

	// 遮5 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_230 = new cjs.Graphics().p("AEiVVIAAjmIRIAAIAADmg");
	var mask_7_graphics_231 = new cjs.Graphics().p("AojCVIAAkpIRHAAIAAEpg");
	var mask_7_graphics_232 = new cjs.Graphics().p("AojC2IAAlrIRHAAIAAFrg");
	var mask_7_graphics_233 = new cjs.Graphics().p("AojDYIAAmvIRHAAIAAGvg");
	var mask_7_graphics_234 = new cjs.Graphics().p("AojD6IAAnzIRHAAIAAHzg");
	var mask_7_graphics_235 = new cjs.Graphics().p("AojEcIAAo2IRHAAIAAI2g");
	var mask_7_graphics_236 = new cjs.Graphics().p("AojE9IAAp5IRHAAIAAJ5g");
	var mask_7_graphics_237 = new cjs.Graphics().p("AojFfIAAq9IRHAAIAAK9g");
	var mask_7_graphics_238 = new cjs.Graphics().p("AojGAIAAr/IRHAAIAAL/g");
	var mask_7_graphics_239 = new cjs.Graphics().p("AojGiIAAtDIRHAAIAANDg");
	var mask_7_graphics_240 = new cjs.Graphics().p("AojHEIAAuHIRHAAIAAOHg");
	var mask_7_graphics_241 = new cjs.Graphics().p("AojHmIAAvKIRHAAIAAPKg");
	var mask_7_graphics_242 = new cjs.Graphics().p("AojIHIAAwNIRHAAIAAQNg");
	var mask_7_graphics_243 = new cjs.Graphics().p("AojIpIAAxRIRHAAIAARRg");
	var mask_7_graphics_244 = new cjs.Graphics().p("AojJKIAAyTIRHAAIAASTg");
	var mask_7_graphics_245 = new cjs.Graphics().p("AEidOIAAzYIRIAAIAATYg");
	var mask_7_graphics_246 = new cjs.Graphics().p("AEidOIAAzYIRIAAIAATYg");
	var mask_7_graphics_247 = new cjs.Graphics().p("AhuK+IkUlwIhEgEIgEhaIjgkpIAAAAIDgioIAuqtIAIAAIHqgrII/AAIAXD3IAAO7IgEAlImkAAIinAMICOC8IChEDIkXDSg");
	var mask_7_graphics_248 = new cjs.Graphics().p("Ah6LsIkal3IhCgJIgJhaIjlkvIDlirIBbqkIAJgBIHJhXIJLAAIAsDnIAAPOIgHAiImsAAIiSAZICQC/ICAEDIkdDXg");
	var mask_7_graphics_249 = new cjs.Graphics().p("AiGMaIkfl+IhCgNIgNhbIjpk0IAAAAIDpiwICJqbIAJgBIGoiCIJXAAIBBDXIAAPhIgJAfIm1AAIh9AlICTDEIBeECIkiDbg");
	var mask_7_graphics_250 = new cjs.Graphics().p("AiSNIIklmEIhBgSIgShcIjsk7IAAAAIDsiyIC4qSIAIgBIGIiuIJiAAIBYDGIAAP0IgNAdIm9AAIhoAyICWDHIA8ECIkoDfg");
	var mask_7_graphics_251 = new cjs.Graphics().p("AieN2IkqmMIhAgWIgWhbIjxlCIgBAAIDxi1IDmqJIAJgDIFnjYIJtAAIBtC1IAAQHIgQAbInGAAIhSA+ICZDKIAbEDIkvDjg");
	var mask_7_graphics_252 = new cjs.Graphics().p("AipOlIkwmUIg/gbIgbhcIj2lHIgBAAID3i4IETqBIAIgCIFHkEIJ4AAICEClIAAQZIgUAZInOAAIg9BKICbDOIgGEDIkzDng");
	var mask_7_graphics_253 = new cjs.Graphics().p("Ai1PTIk2mbIg+gfIgfhcIj6lNIgBgBID7i7IFBp4IAIgDIEmkvIKEAAICZCUIAAQtIgXAWInWAAIgoBWICeDSIgpEDIk4Drg");
	var mask_7_graphics_254 = new cjs.Graphics().p("AjBQCIk7mjIg9gkIgkhcIj/lTIAAgBID/i+IFvpvIAIgEIEFlaIKPAAICvCDIAARAIgZAUInfAAIgTBjIChDVIhKEDIk/Dwg");
	var mask_7_graphics_255 = new cjs.Graphics().p("AoNJ0Ig8gpIgphcIkDlZIgBgBIEEjCIGdpmIAIgEIDkmFIKbAAIDFBzIAARTIgdARInnAAIABBvICkDZIhrEDIlED0Ik2Akg");
	var mask_7_graphics_256 = new cjs.Graphics().p("AofKJIg7gtIgthdIkIlfIAAAAIEIjGIHLpeIAIgDIDDmyIKnAAIDaBjIAARmIggAOInwAAIAXB8ICnDdIiNEDIlKD3Ik/BJg");
	var mask_7_graphics_257 = new cjs.Graphics().p("AowKdIg6gxIgyhdIkMlkIgBgCIENjJIH4pUIAIgEICjndIKyAAIDxBSIAAR5IgjAMIn4AAIArCIICpDhIiuEDIlPD8IlKBsg");
	var mask_7_graphics_258 = new cjs.Graphics().p("ApBKzIg6g2Ig2heIkQlqIgBgBIERjMIImpMIAIgFICDoIIK8AAIEHBCIAASLIgmAKIoBAAIBBCVICsDkIjQEDIlVD/IlUCRg");
	var mask_7_graphics_259 = new cjs.Graphics().p("ApTLIIg4g7Ig7heIkUlwIgBgBIEVjQIJUpDIAIgFIBjozILHAAIEcAxIAASeIgpAIIoJAAIBWChICvDoIjyECIlaEFIlfC0g");
	var mask_7_graphics_260 = new cjs.Graphics().p("ApkLdIg4g/Ig/hfIkZl2IgBgBIEajUIKCo5IAIgGIBCpeILTAAIEyAgIAASyIgtAFIoRAAIBrCtICyDsIkUECIlfEIIlqDZg");
	var mask_7_graphics_261 = new cjs.Graphics().p("Ap1LxIg3hDIlhnbIgBgBIEejXIK4o3IAhqJILeAAIFIAQIAATEIpKADICAC5IC1DwIk1ECIllENIl0D8g");
	var mask_7_graphics_262 = new cjs.Graphics().p("AEidOIAAzYIRIAAIAATYg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(230).to({graphics:mask_7_graphics_230,x:138.625,y:136.525}).wait(1).to({graphics:mask_7_graphics_231,x:222.425,y:264.9}).wait(1).to({graphics:mask_7_graphics_232,x:222.425,y:268.25}).wait(1).to({graphics:mask_7_graphics_233,x:222.425,y:271.625}).wait(1).to({graphics:mask_7_graphics_234,x:222.425,y:274.975}).wait(1).to({graphics:mask_7_graphics_235,x:222.425,y:278.35}).wait(1).to({graphics:mask_7_graphics_236,x:222.425,y:281.725}).wait(1).to({graphics:mask_7_graphics_237,x:222.425,y:285.075}).wait(1).to({graphics:mask_7_graphics_238,x:222.425,y:288.45}).wait(1).to({graphics:mask_7_graphics_239,x:222.425,y:291.8}).wait(1).to({graphics:mask_7_graphics_240,x:222.425,y:295.175}).wait(1).to({graphics:mask_7_graphics_241,x:222.425,y:298.55}).wait(1).to({graphics:mask_7_graphics_242,x:222.425,y:301.9}).wait(1).to({graphics:mask_7_graphics_243,x:222.425,y:305.275}).wait(1).to({graphics:mask_7_graphics_244,x:222.425,y:308.625}).wait(1).to({graphics:mask_7_graphics_245,x:138.625,y:187.001}).wait(1).to({graphics:mask_7_graphics_246,x:138.625,y:187.001}).wait(1).to({graphics:mask_7_graphics_247,x:208.9,y:345.45}).wait(1).to({graphics:mask_7_graphics_248,x:206.375,y:346.475}).wait(1).to({graphics:mask_7_graphics_249,x:203.825,y:347.475}).wait(1).to({graphics:mask_7_graphics_250,x:201.3,y:348.5}).wait(1).to({graphics:mask_7_graphics_251,x:198.75,y:349.5}).wait(1).to({graphics:mask_7_graphics_252,x:196.2,y:350.525}).wait(1).to({graphics:mask_7_graphics_253,x:193.675,y:351.525}).wait(1).to({graphics:mask_7_graphics_254,x:191.125,y:352.55}).wait(1).to({graphics:mask_7_graphics_255,x:188.575,y:355.35}).wait(1).to({graphics:mask_7_graphics_256,x:186.05,y:358.175}).wait(1).to({graphics:mask_7_graphics_257,x:183.5,y:361}).wait(1).to({graphics:mask_7_graphics_258,x:180.975,y:363.8}).wait(1).to({graphics:mask_7_graphics_259,x:178.425,y:366.625}).wait(1).to({graphics:mask_7_graphics_260,x:175.875,y:369.45}).wait(1).to({graphics:mask_7_graphics_261,x:173.35,y:372.25}).wait(1).to({graphics:mask_7_graphics_262,x:138.625,y:187.001}).wait(138));

	// lady05
	this.instance_13 = new lib.CachedBmp_6();
	this.instance_13.setTransform(96.75,268.65,0.5,0.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(230).to({_off:false},0).wait(170));

	// 手4
	this.instance_14 = new lib.手();
	this.instance_14.setTransform(299.6,257.45,1,1,0,0,0,307.8,205.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(190).to({_off:false},0).wait(1).to({x:282.05,y:260.85},0).wait(1).to({x:277.35,y:258.2},0).wait(1).to({x:272.4},0).wait(1).to({x:267.15},0).wait(1).to({x:262.4,y:259.25},0).wait(1).to({x:257.7},0).wait(1).to({x:253,y:262.65},0).wait(1).to({x:249.35,y:265.8},0).wait(1).to({x:243.85},0).wait(1).to({x:240.15,y:270.25},0).wait(1).to({x:235.65,y:275.5},0).wait(1).to({x:231.95,y:279.2},0).wait(2).to({x:227.75,y:286.3},0).wait(1).to({x:224.65,y:293.8},0).wait(1).to({x:221.5,y:300.75},0).wait(1).to({y:307.85},0).wait(1).to({y:315.2},0).wait(1).to({x:224.1,y:322.3},0).wait(1).to({x:230.35,y:331.45},0).wait(1).to({x:245.3,y:352.05},0).wait(1).to({x:252.9,y:366.75},0).wait(1).to({x:244.5,y:372},0).wait(1).to({x:240.8,y:374.9},0).wait(1).to({x:236.85,y:379.35},0).wait(1).to({y:385.6},0).wait(1).to({x:233.95,y:391.4},0).wait(1).to({x:241.3,y:401.9},0).wait(1).to({x:256.25,y:413.95},0).wait(1).to({x:264.65,y:422.6},0).wait(1).to({x:260.75,y:428.9},0).wait(1).to({x:255,y:434.4},0).wait(1).to({x:251.85,y:440.15},0).wait(1).to({x:250.85,y:446.8},0).wait(1).to({x:253.95,y:454.1},0).wait(1).to({x:261.45,y:462.7},0).wait(1).to({x:272.85,y:471.5},0).wait(1).to({x:280.95,y:479.95},0).wait(1).to({x:283.6,y:484.15},0).to({_off:true},1).wait(170));

	// 遮4 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_190 = new cjs.Graphics().p("AIhE4IFQhbIC0KhIlQBag");
	var mask_8_graphics_191 = new cjs.Graphics().p("AkZkcIF/hnIC0KgIl/Bng");
	var mask_8_graphics_192 = new cjs.Graphics().p("AkwkWIGthzIC0KgImtBzg");
	var mask_8_graphics_193 = new cjs.Graphics().p("AlIkPIHdiBIC0KgIndCAg");
	var mask_8_graphics_194 = new cjs.Graphics().p("AlgkJIINiNIC0KgIoNCNg");
	var mask_8_graphics_195 = new cjs.Graphics().p("Al3kDII7iZIC0KgIo7CZg");
	var mask_8_graphics_196 = new cjs.Graphics().p("AmPj8IJrinIC0KgIprCng");
	var mask_8_graphics_197 = new cjs.Graphics().p("Amnj2IKbizIC0KgIqbCzg");
	var mask_8_graphics_198 = new cjs.Graphics().p("Am+jwILJi/IC0KgIrJDAg");
	var mask_8_graphics_199 = new cjs.Graphics().p("AnWjpIL5jNIC0KgIr5DNg");
	var mask_8_graphics_200 = new cjs.Graphics().p("AnujjIMpjZIC0KgIspDZg");
	var mask_8_graphics_201 = new cjs.Graphics().p("AoFjdINXjlIC0KgItXDlg");
	var mask_8_graphics_202 = new cjs.Graphics().p("AgWGDIOHjyIC0KhIuIDyg");
	var mask_8_graphics_203 = new cjs.Graphics().p("AgWGDIOHjyIC0KhIuIDyg");
	var mask_8_graphics_204 = new cjs.Graphics().p("Al9D2IlThbIA1jFIDWAqIgwjSIIWiyIBsgZIBKgaICzgwIBtE/IBdFYIhUAbIAeAIICzA+Ig1DFIobhoIjfBKIjOAwg");
	var mask_8_graphics_205 = new cjs.Graphics().p("Al7EZIldheIA3jJIDRAWIgrjXIIMjRIBvgWIBGgeIC4gxICBErIBfFiIhMAeIAfAJICoBIIg3DLIoQg9IjaBXIjUAqg");
	var mask_8_graphics_206 = new cjs.Graphics().p("Al5E8IlnhgIA4jRIDOAIIgljdIIAjxIBygUIBCgiIC9gzICUEYIBiFsIhFAhIAgAIICeBVIg4DQIoFgSIjWBkIjaAlg");
	var mask_8_graphics_207 = new cjs.Graphics().p("Al3FgIlxhjIA6jWIDJgKIggjjIH3kRIB1gQIA8gnIDCg1ICoEGIBlF2Ig9AjIAhAJICTBeIg6DWIn6AaIjQBxIjhAgg");
	var mask_8_graphics_208 = new cjs.Graphics().p("Al1GDIl7hlIA8jcIDEgbIgZjpIHrkxIB4gNIA4grIDHg2IC8DyIBnGAIg1AmIAhAJICIBpIg6DcInvBEIjNB/IjmAag");
	var mask_8_graphics_209 = new cjs.Graphics().p("AlzGnImEhpIA8jhIDAgsIgTjvIHglQIB7gKIAzgwIDNg3IDPDfIBqGKIgtAoIAiAJIB9B1Ig8DhInkBvIjICMIjsAUg");
	var mask_8_graphics_210 = new cjs.Graphics().p("AlyHKImNhrIA+jmIC7g+IgOj1IHWlvIB+gHIAvg1IDSg4IDiDLIBsGUIgkAsIAiAJIBzB/Ig+DoInZCaIjDCZIjyAOg");
	var mask_8_graphics_211 = new cjs.Graphics().p("AlwHuImXhuIBAjtIC3hOIgIj7IHKmPICBgEIArg5IDXg6ID2C5IBvGeIgWAcIgHASIAjAKIBoCJIg/DtInODGIi/CmIj3AIg");
	var mask_8_graphics_212 = new cjs.Graphics().p("AluIRImhhwIBBjzICzhfIgCkBIG/mvICEgBIAmg9IDdg7IEJClIByGoIgTAeIgCATIAkAKIBdCVIhBDyInCDxIi7CzIj9ACg");
	var mask_8_graphics_213 = new cjs.Graphics().p("AibL4IjRjFImrhzIBDj4ICuhwIAEkIIG0nOICHACIAihCIDhg9IEdCTIB0GyIgRAgIAEATIAmALIBSCfIhDD4Im3EcIi2DBg");
	var mask_8_graphics_214 = new cjs.Graphics().p("AiLMTIjfjAIm1h1IBEj+ICqiCIAKkNIGpntICKAEIAdhGIDng+IEwCAIB3G7IgPAjIAKATIAmALIBICqIhFD+ImsFHIixDNg");
	var mask_8_graphics_215 = new cjs.Graphics().p("Ah7MvIjti7Im+h4IBFkEICmiTIAOkTIGfoNICOAIIAYhLIDrg/IFEBsIB6HGIgNAkIAQAUIAmALIA9C3IhGECImgFyIitDbg");
	var mask_8_graphics_216 = new cjs.Graphics().p("AhrNKIj7i2InIh6IBHkKIChijIAVkZIGTotICRALIAUhQIDwhAIFYBZIB8HPIgKAnIAUAUIAoALIAyDCIhHEIImWGdIioDog");
	var mask_8_graphics_217 = new cjs.Graphics().p("AhaNmIkKixInSh9IBJkPICci1IAbkfIGIpMICVAOIAQhUID0hCIFrBFIB/HaIgIApIAaAUIApALIAnDNIhIEOImLHIIijD1g");
	var mask_8_graphics_218 = new cjs.Graphics().p("AhKOCIkYitInch/IBKkVICYjGIAhklIF9psICYARIALhYID6hEIF/AzICBHjIgGArIAgAVIAqAMIAcDXIhKEUIl/HzIigEDg");
	var mask_8_graphics_219 = new cjs.Graphics().p("Ag6OdIkninInliCIBMkbICTjXIAnkrIFyqLICbAUIAHhdID/hFIGSAfICEHtIgEAuIAlAVIArAMIASDjIhMEZIl0IeIiaEQg");
	var mask_8_graphics_220 = new cjs.Graphics().p("AgqO5Ik1ijInviFIBNkfICPjpIAtkxIFnqrICeAXIAChhIEEhGIGmAMICHH3IgCAwIArAVIAsAMIAHDuIhOEfIlpJJIiVEdg");
	var mask_8_graphics_221 = new cjs.Graphics().p("AgcPYIlCidIn5iIIBOklICLj6IAyk3IFbrLIChAaIgBhlIEJhIIG5gHICKIBIAAAyIAxAWIAsAMIgDD5IhPElIlfJ0IiQEqg");
	var mask_8_graphics_222 = new cjs.Graphics().p("AgRP9IlRiYIoDiKIBQksICHkKIA4k9IFRrqICkAdIgHhrIEOhIIHNgbICMILIADA0IA2AXIAuAMIgPEEIhQEqIlTKgIiME3g");
	var mask_8_graphics_223 = new cjs.Graphics().p("AgGQiIlfiTIoNiNIBSkxICBkbIA+lDIFGsKICoAgIgLhvIEThKIHhguICOIVIAFA3IBqAjIgZEPIhSEwIlILLIiIFEg");
	var mask_8_graphics_224 = new cjs.Graphics().p("AAERHIltiOIoWiQIBTk2IB9ktIBElIIE7sqICqAjIgPhzIEZhMIHzhBICRIfIAHA5IBxAkIgkEaIhTE2Ik9L2IiDFQg");
	var mask_8_graphics_225 = new cjs.Graphics().p("AAPRsIl8iJIogiSIBVk8IB5k+IBKlPIEvtJICuAmIgTh4IEdhMIIHhUICUIoIAJA7IB3AlIguElIhWE7IkxMhIh/Feg");
	var mask_8_graphics_226 = new cjs.Graphics().p("AAZSRImJiEIoqiUIBWlCIB1lPIBPlVIEltpICwApIgYh8IEjhOIIbhnICWIyIAMA9IB+AmIg6EvIhXFBIkmNNIh6Frg");
	var mask_8_graphics_227 = new cjs.Graphics().p("AAkS3ImYh/IoziXIBYlJIBwlfIBWlbIEZuJIC0AsIgdiAIEohQIIuh6ICZI8IAOBAICEAlIhEE7IhYFHImRTwg");
	var mask_8_graphics_228 = new cjs.Graphics().p("AAvTbImmh5Io9ibIBZlNIBslxIBblhIEOuoIC3AvIghiFIEthQIJCiOICrKIICLAmIhPFGIhZFMImBUpg");
	var mask_8_graphics_229 = new cjs.Graphics().p("AgWGDIOHjyIC0KhIuIDyg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(190).to({graphics:mask_8_graphics_190,x:106.1139,y:98.4315}).wait(1).to({graphics:mask_8_graphics_191,x:184.025,y:159.325}).wait(1).to({graphics:mask_8_graphics_192,x:181.675,y:159.975}).wait(1).to({graphics:mask_8_graphics_193,x:179.3,y:160.6}).wait(1).to({graphics:mask_8_graphics_194,x:176.95,y:161.225}).wait(1).to({graphics:mask_8_graphics_195,x:174.575,y:161.875}).wait(1).to({graphics:mask_8_graphics_196,x:172.25,y:162.5}).wait(1).to({graphics:mask_8_graphics_197,x:169.875,y:163.1}).wait(1).to({graphics:mask_8_graphics_198,x:167.5,y:163.75}).wait(1).to({graphics:mask_8_graphics_199,x:165.15,y:164.375}).wait(1).to({graphics:mask_8_graphics_200,x:162.775,y:165}).wait(1).to({graphics:mask_8_graphics_201,x:160.425,y:165.65}).wait(1).to({graphics:mask_8_graphics_202,x:106.1414,y:106.0218}).wait(1).to({graphics:mask_8_graphics_203,x:106.1414,y:106.0218}).wait(1).to({graphics:mask_8_graphics_204,x:152.55,y:169.925}).wait(1).to({graphics:mask_8_graphics_205,x:151.475,y:173.6}).wait(1).to({graphics:mask_8_graphics_206,x:150.4,y:177.25}).wait(1).to({graphics:mask_8_graphics_207,x:149.325,y:180.9}).wait(1).to({graphics:mask_8_graphics_208,x:148.25,y:184.575}).wait(1).to({graphics:mask_8_graphics_209,x:147.175,y:188.225}).wait(1).to({graphics:mask_8_graphics_210,x:146.125,y:191.85}).wait(1).to({graphics:mask_8_graphics_211,x:145.025,y:195.525}).wait(1).to({graphics:mask_8_graphics_212,x:143.95,y:199.175}).wait(1).to({graphics:mask_8_graphics_213,x:142.875,y:203}).wait(1).to({graphics:mask_8_graphics_214,x:141.825,y:206.95}).wait(1).to({graphics:mask_8_graphics_215,x:140.75,y:210.9}).wait(1).to({graphics:mask_8_graphics_216,x:139.675,y:214.85}).wait(1).to({graphics:mask_8_graphics_217,x:138.575,y:218.775}).wait(1).to({graphics:mask_8_graphics_218,x:137.5,y:222.725}).wait(1).to({graphics:mask_8_graphics_219,x:136.45,y:226.675}).wait(1).to({graphics:mask_8_graphics_220,x:135.375,y:230.625}).wait(1).to({graphics:mask_8_graphics_221,x:134.5,y:234.2}).wait(1).to({graphics:mask_8_graphics_222,x:133.95,y:237.175}).wait(1).to({graphics:mask_8_graphics_223,x:133.4,y:240.175}).wait(1).to({graphics:mask_8_graphics_224,x:132.875,y:243.15}).wait(1).to({graphics:mask_8_graphics_225,x:132.35,y:246.125}).wait(1).to({graphics:mask_8_graphics_226,x:131.825,y:249.125}).wait(1).to({graphics:mask_8_graphics_227,x:131.25,y:252.1}).wait(1).to({graphics:mask_8_graphics_228,x:130.725,y:255.1}).wait(1).to({graphics:mask_8_graphics_229,x:106.1414,y:106.0218}).wait(171));

	// lady04
	this.instance_15 = new lib.CachedBmp_7();
	this.instance_15.setTransform(99.25,158.25,0.5,0.5);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(190).to({_off:false},0).wait(210));

	// 手3
	this.instance_16 = new lib.手();
	this.instance_16.setTransform(320.8,245,1,1,0,0,0,307.8,205.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(142).to({_off:false},0).wait(1).to({x:318.35,y:250.35},0).wait(1).to({y:255.7},0).wait(1).to({y:263.35},0).wait(1).to({x:316.05,y:268.9},0).wait(1).to({y:275.2},0).wait(1).to({x:312.8,y:280.95},0).wait(1).to({x:309.75,y:286.5},0).wait(1).to({x:306.3,y:292.4},0).wait(1).to({x:299.45,y:296.6},0).wait(1).to({y:298.7},0).wait(1).to({x:294.3,y:300.75},0).wait(1).to({x:286.65,y:304.05},0).wait(1).to({x:278.8,y:306.15},0).wait(1).to({x:273.65,y:308.45},0).wait(1).to({x:268.5},0).wait(1).to({x:264.7,y:311.15},0).wait(1).to({x:261.1,y:313.65},0).wait(1).to({x:257.5,y:315.9},0).wait(1).to({x:254.65,y:319.15},0).wait(1).to({x:252.35,y:322},0).wait(1).to({x:250.05,y:324.5},0).wait(1).to({y:326.8},0).wait(1).to({y:330.1},0).wait(1).to({y:332.55},0).wait(1).to({y:334.85},0).wait(1).to({x:252.5,y:338.9},0).wait(1).to({x:255.05,y:344.2},0).wait(1).to({x:258.95,y:347.6},0).wait(1).to({x:262.85,y:351.4},0).wait(1).to({x:269.65,y:358.05},0).wait(1).to({x:272.3,y:361.55},0).wait(1).to({x:276.4,y:363.6},0).wait(1).to({x:279.05,y:366.35},0).wait(1).to({x:281.35,y:367.85},0).wait(1).to({x:283.75,y:370.45},0).wait(1).to({x:283.15,y:377.05},0).wait(1).to({x:281.05,y:386.4},0).wait(1).to({x:278.4,y:398.25},0).wait(1).to({y:403.05},0).wait(1).to({x:276.3,y:410.3},0).wait(1).to({x:278.6,y:414.35},0).wait(1).to({x:283.1,y:418.25},0).wait(1).to({x:286.45,y:423.15},0).wait(1).to({x:282.45,y:429.6},0).wait(1).to({x:279.6,y:435.55},0).wait(1).to({x:276.55,y:441.7},0).wait(1).to({x:274.3,y:447.35},0).to({_off:true},1).wait(210));

	// 遮3 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_142 = new cjs.Graphics().p("AFxJJIA0jFINjDoIg0DFg");
	var mask_9_graphics_143 = new cjs.Graphics().p("AnTANIBFkBINiDoIhFEBg");
	var mask_9_graphics_144 = new cjs.Graphics().p("AnbArIBVk9INiDoIhVE9g");
	var mask_9_graphics_145 = new cjs.Graphics().p("AnjBKIBll7INiDoIhlF6g");
	var mask_9_graphics_146 = new cjs.Graphics().p("AnsBoIB2m3INjDoIh2G3g");
	var mask_9_graphics_147 = new cjs.Graphics().p("AnzCGICFnzINiDoIiFHzg");
	var mask_9_graphics_148 = new cjs.Graphics().p("An8CkICXovINhDoIiVIvg");
	var mask_9_graphics_149 = new cjs.Graphics().p("AoEDDICnptINiDoIinJtg");
	var mask_9_graphics_150 = new cjs.Graphics().p("AoMDhIC3qpINiDoIi3Kpg");
	var mask_9_graphics_151 = new cjs.Graphics().p("ADeNaIDHrmINjDoIjHLng");
	var mask_9_graphics_152 = new cjs.Graphics().p("ADeNaIDHrmINjDoIjHLng");
	var mask_9_graphics_153 = new cjs.Graphics().p("AjDElIkzh9IDPqrIMeCJIhcKyIkXAGIAhBiIiUBlg");
	var mask_9_graphics_154 = new cjs.Graphics().p("AiuE+IkyinIDYpyILaAsIAPJ/IkOBXIgCBPIh8Bmg");
	var mask_9_graphics_155 = new cjs.Graphics().p("AjIFwIkvjSIDgo3IKWgyIB5JLIkECqIglA8IhlBng");
	var mask_9_graphics_156 = new cjs.Graphics().p("AjhG4Ikuj8IDon9IJTiRIDkIZIj8D7IhIApIhNBog");
	var mask_9_graphics_157 = new cjs.Graphics().p("AomDHIDwnDIIPjwIFOHoIjzFLIhrAWIg1BqImOAmg");
	var mask_9_graphics_158 = new cjs.Graphics().p("Ao+DEID4mJIHMlOIG5G0IjrGeIiNACIgeBrIm8Bog");
	var mask_9_graphics_159 = new cjs.Graphics().p("ApWDBIEBlPIGImsIIjGCIjhHvIixgRIgFBtInsCog");
	var mask_9_graphics_160 = new cjs.Graphics().p("AptC+IEIkVIFGoKIKNFOIjZJCIjTglIASBvIoaDpg");
	var mask_9_graphics_161 = new cjs.Graphics().p("AqEC7IEQjbIECpoIL4EbIjQKUIj3g5IAqBwIpIErg");
	var mask_9_graphics_162 = new cjs.Graphics().p("ADeNaIDHrmINjDoIjHLng");
	var mask_9_graphics_163 = new cjs.Graphics().p("ADeNaIDHrmINjDoIjHLng");
	var mask_9_graphics_164 = new cjs.Graphics().p("AmqHGIgJARIk/i4IA/huICeBbIgxhUIEYiiIC/rGINiDpIjHLlIkahLIBCBxIp3Fsg");
	var mask_9_graphics_165 = new cjs.Graphics().p("AmjHPIgSAeIk/i4IBMiEICQBUIgshNIEYiiIC/rGINiDpIjHLlIkahLIBCBxIp3Fsg");
	var mask_9_graphics_166 = new cjs.Graphics().p("AmdHWIgaAuIk/i5IBYiZICEBMIgohGIEYiiIC/rGINiDpIjHLlIkahLIBCBxIp3Fsg");
	var mask_9_graphics_167 = new cjs.Graphics().p("ADeNaIDHrmINjDoIjHLng");
	var mask_9_graphics_168 = new cjs.Graphics().p("ADeNaIDHrmINjDoIjHLng");
	var mask_9_graphics_169 = new cjs.Graphics().p("AtXIUIFzhkIi0hoIBlivIB3BEIgkg+IEYihIC/rHINhDoIjHLmIkZhLIBBBxIprFmIhDhdIoyCWg");
	var mask_9_graphics_170 = new cjs.Graphics().p("AtXH6IFzhjIi0hoIBlivIB3BEIgkg+IEYihIC/rHINhDoIjHLmIkZhLIBBBwIpfFfIgzgmIpACZg");
	var mask_9_graphics_171 = new cjs.Graphics().p("AtXHhIFzhkIi0hnIBliwIB3BFIgkg/IEYihIC/rGINhDoIjHLlIkZhLIBBBxIpTFZIgjAOIpPCdg");
	var mask_9_graphics_172 = new cjs.Graphics().p("AtXHHIFyhjIizhnIBliwIB3BEIgkg+IEYihIC/rHINhDpIjHLlIkZhLIBBBxIpIFSIgTBDIpcCig");
	var mask_9_graphics_173 = new cjs.Graphics().p("AtXGuIFyhjIizhoIBlivIB3BEIgkg+IEYihIC/rHINhDoIjHLmIkZhLIBBBxIo9FLIgCB4IprCmg");
	var mask_9_graphics_174 = new cjs.Graphics().p("AtYGVIFzhjIizhoIBlivIB3BEIgkg+IEYihIC/rHINiDoIjHLmIkahLIBCBwIoxFFIAOCuIp6Cpg");
	var mask_9_graphics_175 = new cjs.Graphics().p("AtYF7IFzhjIizhnIBliwIB3BFIgkg/IEYihIC/rGINiDoIjHLlIkahLIBCBxIomE+IAfDjIqICtg");
	var mask_9_graphics_176 = new cjs.Graphics().p("AtYFhIFzhjIizhmIBlivIB3BDIgkg9IEYiiIC/rHINiDpIjHLlIkahLIBCBxIoaE3IAvEYIqXCxg");
	var mask_9_graphics_177 = new cjs.Graphics().p("AtYFIIFzhjIizhnIBliuIB3BDIgkg9IEYiiIC/rHINiDoIjHLmIkahKIBCBwIoPEwIBAFOIqlC1g");
	var mask_9_graphics_178 = new cjs.Graphics().p("AtYEvIFzhjIizhnIBliuIB3BEIgkg+IEYiiIC/rHINiDoIjHLmIkahKIBCBvIoDEqIBPGDIqzC5g");
	var mask_9_graphics_179 = new cjs.Graphics().p("AtYEVIFyhjIiyhmIBlivIB3BEIgkg+IEYiiIC/rHINiDpIjHLlIkahKIBCBwIn4EkIBfG4IrAC9g");
	var mask_9_graphics_180 = new cjs.Graphics().p("AtYD8IFyhjIiyhnIBliuIB3BEIgkg+IEYiiIC/rHINiDoIjHLnIkahLIBCBwInsEdIBvHtIrPDBg");
	var mask_9_graphics_181 = new cjs.Graphics().p("AtYDjIFyhjIiyhnIBliuIB3BEIgkg+IEYiiIC/rHINiDoIjHLnIkahLIBCBwInhEVICAIkIrdDEg");
	var mask_9_graphics_182 = new cjs.Graphics().p("AtYDJIFyhjIiyhmIBlivIB3BFIgkg/IEYiiIC/rGINiDoIjHLmIkahLIBCBxInVEPICQJYIrsDIg");
	var mask_9_graphics_183 = new cjs.Graphics().p("AtYCvIFyhjIiyhkIBliwIB3BEIgkg+IEYiiIC/rHINiDpIjHLmIkahLIBCBxInKEIIChKNIr6DMg");
	var mask_9_graphics_184 = new cjs.Graphics().p("AtYCWIFxhjIiwhlIBlivIB2BEIgkg+IEYiiIC/rHINiDoIjHLnIkahLIBCBxIm+EBICyLDIsJDQg");
	var mask_9_graphics_185 = new cjs.Graphics().p("AtYB9IFxhjIiwhlIBlivIB2BEIgkg+IEYiiIC/rHINiDoIjHLnIkahLIBCBwImzD7IDDL4IsXDUg");
	var mask_9_graphics_186 = new cjs.Graphics().p("AtYBjIFxhiIiwhlIBliwIB2BFIgkg/IEYiiIC/rGINiDoIjHLmIkahLIBCBxImnD0IDSMtIslDYg");
	var mask_9_graphics_187 = new cjs.Graphics().p("AtYBKIFxhiIiwhlIBliwIB2BEIgkg+IEYiiIC/rHINiDpIjHLmIkahLIBCBxImcDtIDjNiIszDdg");
	var mask_9_graphics_188 = new cjs.Graphics().p("AtYAwIFwhhIivhmIBlivIB2BEIgkg+IEYiiIC/rHINiDoIjHLnIkahLIBCBxImRDmID0OYItCDgg");
	var mask_9_graphics_189 = new cjs.Graphics().p("ADeNaIDHrmINjDoIjHLng");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(142).to({graphics:mask_9_graphics_142,x:128.8306,y:81.7201}).wait(1).to({graphics:mask_9_graphics_143,x:210.85,y:145}).wait(1).to({graphics:mask_9_graphics_144,x:210.05,y:148.05}).wait(1).to({graphics:mask_9_graphics_145,x:209.225,y:151.1}).wait(1).to({graphics:mask_9_graphics_146,x:208.4,y:154.175}).wait(1).to({graphics:mask_9_graphics_147,x:207.575,y:157.2}).wait(1).to({graphics:mask_9_graphics_148,x:206.75,y:160.275}).wait(1).to({graphics:mask_9_graphics_149,x:205.925,y:163.325}).wait(1).to({graphics:mask_9_graphics_150,x:205.125,y:166.375}).wait(1).to({graphics:mask_9_graphics_151,x:128.7896,y:109.0748}).wait(1).to({graphics:mask_9_graphics_152,x:128.7896,y:109.0748}).wait(1).to({graphics:mask_9_graphics_153,x:198.625,y:179.45}).wait(1).to({graphics:mask_9_graphics_154,x:193.625,y:182.475}).wait(1).to({graphics:mask_9_graphics_155,x:193.25,y:183}).wait(1).to({graphics:mask_9_graphics_156,x:192.875,y:181.325}).wait(1).to({graphics:mask_9_graphics_157,x:192.525,y:181.575}).wait(1).to({graphics:mask_9_graphics_158,x:192.175,y:183.175}).wait(1).to({graphics:mask_9_graphics_159,x:191.8,y:184.75}).wait(1).to({graphics:mask_9_graphics_160,x:191.425,y:186.35}).wait(1).to({graphics:mask_9_graphics_161,x:191.05,y:187.95}).wait(1).to({graphics:mask_9_graphics_162,x:128.7896,y:109.0748}).wait(1).to({graphics:mask_9_graphics_163,x:128.7896,y:109.0748}).wait(1).to({graphics:mask_9_graphics_164,x:182.1,y:189.55}).wait(1).to({graphics:mask_9_graphics_165,x:181.9,y:189.55}).wait(1).to({graphics:mask_9_graphics_166,x:181.725,y:189.55}).wait(1).to({graphics:mask_9_graphics_167,x:128.7896,y:109.0748}).wait(1).to({graphics:mask_9_graphics_168,x:128.7896,y:109.0748}).wait(1).to({graphics:mask_9_graphics_169,x:171.95,y:192.075}).wait(1).to({graphics:mask_9_graphics_170,x:171.95,y:194.6}).wait(1).to({graphics:mask_9_graphics_171,x:171.95,y:197.125}).wait(1).to({graphics:mask_9_graphics_172,x:171.95,y:199.65}).wait(1).to({graphics:mask_9_graphics_173,x:171.95,y:202.175}).wait(1).to({graphics:mask_9_graphics_174,x:171.925,y:204.7}).wait(1).to({graphics:mask_9_graphics_175,x:171.925,y:207.225}).wait(1).to({graphics:mask_9_graphics_176,x:171.925,y:209.75}).wait(1).to({graphics:mask_9_graphics_177,x:171.925,y:212.275}).wait(1).to({graphics:mask_9_graphics_178,x:171.925,y:214.8}).wait(1).to({graphics:mask_9_graphics_179,x:171.925,y:217.35}).wait(1).to({graphics:mask_9_graphics_180,x:171.925,y:219.875}).wait(1).to({graphics:mask_9_graphics_181,x:171.925,y:222.4}).wait(1).to({graphics:mask_9_graphics_182,x:171.925,y:224.925}).wait(1).to({graphics:mask_9_graphics_183,x:171.925,y:227.45}).wait(1).to({graphics:mask_9_graphics_184,x:171.9,y:229.975}).wait(1).to({graphics:mask_9_graphics_185,x:171.9,y:232.5}).wait(1).to({graphics:mask_9_graphics_186,x:171.9,y:235.025}).wait(1).to({graphics:mask_9_graphics_187,x:171.9,y:237.55}).wait(1).to({graphics:mask_9_graphics_188,x:171.9,y:240.075}).wait(1).to({graphics:mask_9_graphics_189,x:128.7896,y:109.0748}).wait(211));

	// lady03
	this.instance_17 = new lib.CachedBmp_8();
	this.instance_17.setTransform(128,146.85,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_9();
	this.instance_18.setTransform(128,146.85,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},142).to({state:[{t:this.instance_18}]},45).wait(213));

	// 手2
	this.instance_19 = new lib.手();
	this.instance_19.setTransform(313.9,208.25,1,1,0,0,0,307.8,205.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(83).to({_off:false},0).wait(1).to({x:320.45,y:200.8},0).wait(1).to({x:326.15,y:197.5},0).wait(1).to({x:330.75,y:192.9},0).wait(1).to({x:336.5,y:189.25},0).wait(1).to({x:341.7,y:184.65},0).wait(1).to({x:347.65,y:181.4},0).wait(1).to({x:354.7},0).wait(1).to({x:361.6,y:176.6},0).wait(1).to({x:365.25},0).wait(1).to({x:370.2},0).wait(1).to({x:374.2},0).wait(1).to({x:378.2},0).wait(1).to({x:382.4},0).wait(1).to({x:386.75},0).wait(1).to({x:391.9,y:180.25},0).wait(1).to({x:397.1},0).wait(1).to({x:402.45,y:183.9},0).wait(1).to({x:408.95,y:188.1},0).wait(1).to({x:414.5,y:191.15},0).wait(1).to({x:420.6,y:194.05},0).wait(1).to({x:425.35,y:197.85},0).wait(1).to({x:430.7,y:201.5},0).wait(1).to({x:436.05,y:206.5},0).wait(1).to({x:440.45,y:208.8},0).wait(1).to({x:443.1,y:214},0).wait(1).to({x:445.4,y:219.7},0).wait(1).to({y:225.8},0).wait(1).to({x:447.7,y:231.7},0).wait(1).to({y:239.15},0).wait(1).to({y:245.45},0).wait(1).to({y:252.9},0).wait(1).to({y:259.2},0).wait(1).to({x:445.6,y:268.55},0).wait(1).to({x:443.5,y:276.2},0).wait(1).to({y:282.5},0).wait(1).to({x:440.45,y:289.8},0).wait(1).to({y:291.7},0).wait(1).to({y:294.15},0).wait(1).to({x:438.9,y:297.6},0).wait(1).to({y:300.75},0).wait(1).to({x:438,y:304},0).wait(1).to({x:437.2,y:306.3},0).wait(1).to({x:435.85,y:309.2},0).wait(1).to({x:432.65},0).wait(1).to({x:430.95,y:308},0).wait(1).to({x:426.7,y:305.05},0).wait(1).to({x:422.55,y:300.75},0).wait(1).to({x:417.5,y:297.3},0).wait(1).to({x:412.2,y:293.75},0).wait(1).to({x:407.4,y:290.85},0).wait(1).to({x:402.9,y:287.3},0).wait(1).to({x:397.4,y:284},0).wait(1).to({x:392.5,y:281.3},0).wait(1).to({x:387,y:278.35},0).wait(1).to({x:382.6,y:274.8},0).wait(1).to({x:377.45,y:271.4},0).wait(1).to({x:372.8,y:268.45},0).wait(1).to({x:369,y:265.3},0).to({_off:true},1).wait(258));

	// 遮2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_83 = new cjs.Graphics().p("AGlDgICeieIIyIxIieCfg");
	var mask_10_graphics_84 = new cjs.Graphics().p("Al+ixIDNjNIIwIwIjNDNg");
	var mask_10_graphics_85 = new cjs.Graphics().p("AmWiaID9j8IIwIxIj8D8g");
	var mask_10_graphics_86 = new cjs.Graphics().p("AmuiCIEsksIIxIxIksErg");
	var mask_10_graphics_87 = new cjs.Graphics().p("AnFhqIFblbIIwIwIlaFbg");
	var mask_10_graphics_88 = new cjs.Graphics().p("AndhTIGKmKIIxIxImKGKg");
	var mask_10_graphics_89 = new cjs.Graphics().p("An0g7IG5m5IIwIwIm5G5g");
	var mask_10_graphics_90 = new cjs.Graphics().p("AoMgkIHpnoIIwIwInoHpg");
	var mask_10_graphics_91 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");
	var mask_10_graphics_92 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");
	var mask_10_graphics_93 = new cjs.Graphics().p("AgwHyIn+n+IHmnnIA8glIAbAcIBLA0IDdg7IAmBJIBMEfICGChIgtBBIgdAYIABAWIgsALIhzBgIk5E5g");
	var mask_10_graphics_94 = new cjs.Graphics().p("AgxH8IoIoHIHwnxIA9gRIAbAdIBSAkIDhg8IAzA0IBOElIB4CvIggBFIgfAWIgFASIgtAMIh9BWIk/E/g");
	var mask_10_graphics_95 = new cjs.Graphics().p("ApFgHIH7n6IA9ADIAdAdIBXAVIDlg+IBBAgIBQEqIBpC9IgSBLIgiATIgKAPIguANIiGBKIlGFGIhAAEg");
	var mask_10_graphics_96 = new cjs.Graphics().p("ApQgJIIEoEIA/AYIAdAdIBeAFIDpg/IBOAMIBREwIBbDJIgEBQIgkAQIgQAOIgvAMIiPBAIlMFMIhCAag");
	var mask_10_graphics_97 = new cjs.Graphics().p("ApggHIIOoOIBAAsIAdAfIBkgMIDuhAIBbgIIBSE2IBNDXIAKBUIg9AYIguAMIiZA3IlTFSIhDAvg");
	var mask_10_graphics_98 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");
	var mask_10_graphics_99 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");
	var mask_10_graphics_100 = new cjs.Graphics().p("AjRHhInenfIHInHIBSg3IAOgMIBpBMIDng+IBHgEIAggPIB1gVIAmBXIASgkIDUA5IgFA7IhcFZIAYCCIghAOIgmAHIgWAsIhigaIhiASIh5BXIg/A1Ij9D+g");
	var mask_10_graphics_101 = new cjs.Graphics().p("AjhHxInsntIHVnUIBUgeIAQgLIByA4IDthAIBAANIAdgUIB4gLIA0BOIAXgcIDaA6IAJA1IheFjIAMCGIgdATIgnAEIgeAiIhkgbIhlAJIiDBBIhFAxIkDEEg");
	var mask_10_graphics_102 = new cjs.Graphics().p("AjzICIn6n7IHinhIBXgFIARgKIB7AlID0hCIA4AdIAagZIB7gBIBABEIAegTIDgA8IAXAvIhhFrIACCLIgaAYIgoABIglAXIhogcIhoACIiMAqIhLAsIkLEMg");
	var mask_10_graphics_103 = new cjs.Graphics().p("AsNAHIHvnuIBaAVIASgJICEAQID7hDIAwAtIAWgdIB/AIIBOA6IAjgKIDlA+IAmAnIhkF3IgJCOIgWAdIgqgDIgsANIhqgcIhrgHIiWATIhQApIkTESIhsAZg");
	var mask_10_graphics_104 = new cjs.Graphics().p("AstAFIH9n8IBbAuIAUgIICNgDIEChGIAoA+IASgiICDASIBaAxIAqgDIDsBAIAzAiIhmGAIgUCSIgTAiIgrgGIgzADIhugeIhtgPIihgDIhWAkIkZEaIhvA4g");
	var mask_10_graphics_105 = new cjs.Graphics().p("AtNACIIKoJIBeBHIAVgHICWgWIEIhIIAhBPIAPgoICGAcIBnAoIAwAGIDyBBIBBAcIhpGKIgfCVIgPAnIhngQIhwgfIhwgWIirgaIhbAeIkhEiIhyBWg");
	var mask_10_graphics_106 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");
	var mask_10_graphics_107 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");
	var mask_10_graphics_108 = new cjs.Graphics().p("AoPHDInBnBIGtmsIB4hkIBnBUICrguIBGgLIAggLIC0gnIAiBaIAPgnIC6AyIBlAnIBYASIDxBYIgdCTIBngbIBtEXIgEACIk3B5IglBmIgegHIhugnIhHASIgVg3IkPhjIhdAPIjfC9IjQDPg");
	var mask_10_graphics_109 = new cjs.Graphics().p("AoPHPInMnMIG3m1IBOgvIAuglIBsBIICvgvIBCgBIAfgPIC3gdIAqBUIATghIC+AyIBYAyIBbAMIDlBsIgUCWIBjgMIBwEdIgEADIk+B7IgtBhIgfgEIhpgxIhEAIIgWg4IkDh6IhQACIgJACIiuB1Ig+AyIjUDUg");
	var mask_10_graphics_110 = new cjs.Graphics().p("AoRHbInWnWIHBm/IBQghIAxgjIByA8ICzgvIA+AIIAcgRIC8gVIAyBPIAWgdIDDA0IBLA7IBcAGIDbCCIgLCXIBeAEIByEjIgDAEIlFB+Ig2BcIgfgCIhkg7IhBgCIgXg6Ij2iRIhMgIIgJABIi4BiIhBAwIjZDZg");
	var mask_10_graphics_111 = new cjs.Graphics().p("AoSHnIngngIHKnJIBSgSIAzgiIB4AxIC3gxIA6ASIAbgUIDAgMIA5BLIAagZIDHA1IA+BFIBeABIDRCUIgDCcIBaASIB0EqIgCADIlMCBIg/BXIggAAIhfhDIg9gOIgXg6IjqinIhIgUIgKAAIjCBQIhEAuIjeDdg");
	var mask_10_graphics_112 = new cjs.Graphics().p("AHoHHIg7gXIgXg8Ijei+IhEgeIgKAAIjLA8IhIArIjjDiIiHgGInqnqIHUnUIBTgDIA1ggIB+AlIC8gyIA2AcIAYgYIDEgCIBCBFIAdgUIDMA3IAxBNIBggEIDFCpIAGCeIBWAgIB2ExIgBAEIlUCEIhHBTIggABg");
	var mask_10_graphics_113 = new cjs.Graphics().p("AHpHfIg4giIgXg+IjSjTIhBgqIgKAAIjUApIhMAoIjnDnIiLAQIn0nzIHdndIBWAKIA4geICEAZIC/gyIAyAlIAWgaIDIAGIBKBAIAhgPIDPA3IAmBYIBhgKIC7C+IAPCgIBRAvIB5E4IgBADIlaCHIhQBPIghACg");
	var mask_10_graphics_114 = new cjs.Graphics().p("AHqH1Ig1grIgYg/IjGjrIg8g0IgLgBIjdAXIhQAmIjrDrIiOAoIn+n+IHnnnIBXAYIA7gcICKAOIDCg0IAuAvIAVgdIDMAPIBRA6IAmgJIDTA4IAZBhIBigOICwDRIAYCjIBMA+IB8E+IAAAEIliCKIhYBJIghAFg");
	var mask_10_graphics_115 = new cjs.Graphics().p("AHrINIgyg2IgZhAIi5kCIg4g/IgMgBIjmADIhUAkIjvDwIiQA/IoJoIIHwnxIBZAnIA+gaICQACIDGg2IApA5IAUggIDQAYIBZA1IApgEIDXA5IANBrIBkgVICkDmIAiClIBIBOIB+FEIAAAFIlpCMIhgBFIgjAHg");
	var mask_10_graphics_116 = new cjs.Graphics().p("AHrIkIguhAIgahBIitkZIg0hKIgLgBIjxgQIhWAhIj1D1IiTBVIoToSIH6n6IBbA1IBAgYICWgKIDKg3IAmBDIAQgjIDVAhIBhAxIAtAAIDbA6IAAB0IBmgaICaD6IAqCoIBDBdICBFLIAAAEIlvCPIhqBBIgiAIg");
	var mask_10_graphics_117 = new cjs.Graphics().p("AHAHxIgahDIjRmEIgLgCIj7giIhZAeIj6D6IiWBsIodocIIEoEIBdBEIBCgXICcgWIDOg3IAiBMIAOgmIDZAqIBpArIAxAFIDfA8IgNB9IBogfICPEOIAzCrIA/BsICDFQIABAGIl3CRIhyA8IgjALg");
	var mask_10_graphics_118 = new cjs.Graphics().p("AHEH+IgbhEIjBmmIkPg3IheAcIj+D9IiYCEIonomIINoOIBfBSIBEgVICighIDTg5IAdBWIAMgqIDdA0IBxAmIA0AKIDlA9IgaCHIBqgkICDEhIA8CuIA6B7ICGFWIABAHIl9CTIh7A4IgjANg");
	var mask_10_graphics_119 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");
	var mask_10_graphics_120 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");
	var mask_10_graphics_121 = new cjs.Graphics().p("AJRLOIgmgRIgBAAIAAAAIgFgDIACgJIgmiHIjyptIhXgjIi8g0IhQAQIgSAEIg5AyIlrFpIgfgVIoXoXIH+n9IAegWIA9A+IAmAcIF/hnIBBgGIAEARIAZA+IAQgkIIMCNIBeAsIgGAVIgMBmIBjgTIE6MmIAgClIhUAiIiIBIIAOAEICuBQIgmCOIgLAYg");
	var mask_10_graphics_122 = new cjs.Graphics().p("AJNLaIgegXIgBAAIgDgDIACgJIgaiKIj0pyIhOguIi/gzIhPAJIgTAFIg8AsIluFtIgggNIoboaIICoCIAfgNIA+A+IAnAVIGChnIA6AIIAEARIAdAuIAWgcIIPCOIBJA5IgFAVIAKA/IgBATIBZACIE9MtIgFCWIhVAhIhOBGIAPAEICGBpIgmCPIgPASg");
	var mask_10_graphics_123 = new cjs.Graphics().p("AI4LpIgVgcIgBAAIgDgFIADgIIgNiNIj1p3IhGg4IjBgzIhQACIgTAFIhAAoIlxFwIgfgEIogofIIGoGIAfgEIA+A/IAqAOIGGhpIAyAWIAEASIALAEIAWAaIAbgUIIUCPIA0BGIgGAVIAeAqIAAATIBRAZIE/MzIgqCHIhWAiIgTBDIAOAEIBgCAIgnCRIgRANg");
	var mask_10_graphics_124 = new cjs.Graphics().p("AIjL3IgMghIAAAAIAAgBIgCgEIADgJIAAiOIj4p9Ig+hCIjCg0IhQgEIgTAFIhEAjIlzFzIghAFIokojIIKoKIAfAEIBABAIAsAHIGIhpIAqAjIAFASIALgIIAbAWIAfgMIIYCQIAfBTIgGAWIAxAVIACATIBIAvIFCM6IhPB4IhXAiIAmBAIAPAEIA5CZIgnCRIgVAIg");
	var mask_10_graphics_125 = new cjs.Graphics().p("AIOMGIgDgmIAAgBIAAAAIgBgGIACgJIAPiQIj6qBIg2hNIjFg1IhRgJIgSAFIhHAeIl3F2IggAOIoponIIPoPIAeANIBABAIAvAAIGMhqIAiAyIAFARIALgTIAfARIAkgEIIdCSIAKBgIgHAWIBFAAIAEATIA+BFIFFNBIh1BpIhXAiIBgA+IAPAEIASCwIgnCTIgYADg");
	var mask_10_graphics_126 = new cjs.Graphics().p("AOqOHImwh0IAEgrIAAgCIABgFIADgJIAaiTIj7qHIguhWIjGg2IhRgQIhdAfIl6F5IghAXIotosIIToTIAfAXIBABAIAxgHIGPhrIAbA/IAFASIAMgfIAjANIAoAFIIhCSIgMBtIgFAXIBYgWIAFATIA1BcIFINIIiaBZIhYAjICbA7IAOAEIgVDIIgnCVg");
	var mask_10_graphics_127 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");
	var mask_10_graphics_128 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");
	var mask_10_graphics_129 = new cjs.Graphics().p("AFTNTIB7jWIBRhbIkjrsIkahMIhgAaImeGdIoyoxIIYoXIBgBgIHFh6IAYBfIALgsIJ6CqIgmCRIBrgqIF+PTIkYBtIDkA9IhkF2IlGhXIheCjg");
	var mask_10_graphics_130 = new cjs.Graphics().p("AEgM2ICAjfIB+g2IkirrIkahMIhgAaImeGdIoyoxIIYoXIBgBgIHFh6IAYBfIALgsIJ6CqIgmCRIBrgqIF+PTIkYBtIDkA9IhkF2IlGhXIheCjg");
	var mask_10_graphics_131 = new cjs.Graphics().p("ADsMYICGjoICsgPIkirrIkahMIhgAaImeGdIoyoxIIYoXIBgBgIHFh6IAYBfIALgsIJ6CqIgmCRIBrgqIF+PTIkYBtIDkA9IhkF2IlGhXIheCjg");
	var mask_10_graphics_132 = new cjs.Graphics().p("AC5L7ICLjxIDaAWIkirqIkahMIhgAaImeGdIoyoxIIYoXIBgBgIHFh6IAYBfIALgsIJ6CqIgmCRIBrgqIF+PTIkYBtIDkA9IhkF2IlGhXIheCjg");
	var mask_10_graphics_133 = new cjs.Graphics().p("ACGLdICRj6IEHA8IkirpIkahMIhgAaImeGdIoyoxIIYoXIBgBgIHFh6IAYBfIALgsIJ6CqIgmCRIBrgqIF+PTIkYBtIDkA9IhkF2IlGhXIheCjg");
	var mask_10_graphics_134 = new cjs.Graphics().p("ABSLAICXkDIE0BiIkhrpIkahMIhgAaImeGdIoyoxIIYoXIBgBgIHFh6IAYBfIALgsIJ6CqIgmCRIBrgqIF+PTIkYBtIDkA9IhkF2IlGhXIheCjg");
	var mask_10_graphics_135 = new cjs.Graphics().p("AAfKhICbkMIFjCJIkhroIkahMIhgAaImeGcIoyowIIYoYIBgBgIHFh5IAYBfIALgsIJ6CqIgmCQIBrgqIF+PUIkYBtIDkA9IhkF2IlGhYIheCkg");
	var mask_10_graphics_136 = new cjs.Graphics().p("AgTKEICfkVIGRCvIkhroIkahMIhgAaImeGcIoyowIIYoYIBgBgIHFh5IAYBfIALgsIJ6CqIgmCQIBrgqIF+PUIkYBtIDkA9IhkF2IlGhYIheCkg");
	var mask_10_graphics_137 = new cjs.Graphics().p("AhGJnICkkeIG/DTIkhrmIkahMIhgAaImeGcIoyowIIYoYIBgBgIHFh5IAYBfIALgsIJ6CqIgmCQIBrgqIF+PUIkYBtIDkA9IhkF2IlGhYIheCkg");
	var mask_10_graphics_138 = new cjs.Graphics().p("Ah6JJICqknIHsD6IkgrmIkahMIhgAaImeGcIoyowIIYoYIBgBgIHFh5IAYBfIALgsIJ6CqIgmCQIBrgqIF+PUIkYBtIDkA9IhkF2IlGhYIheCkg");
	var mask_10_graphics_139 = new cjs.Graphics().p("AisIrICukwIIaEgIkgrlIkahMIhgAaImeGcIoyowIIYoYIBgBgIHFh5IAYBfIALgsIJ6CqIgmCQIBrgqIF+PUIkYBtIDkA9IhkF2IlGhYIheCkg");
	var mask_10_graphics_140 = new cjs.Graphics().p("AjgIOIC1k5IJHFFIkgrkIkahMIhgAaImeGcIoyowIIYoYIBgBgIHFh5IAYBfIALgsIJ6CqIgmCQIBrgqIF+PUIkYBtIDkA9IhkF2IlGhYIheCkg");
	var mask_10_graphics_141 = new cjs.Graphics().p("ADoDhIIXoXIIyIxIoYIXg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(83).to({graphics:mask_10_graphics_83,x:114.0665,y:78.5515}).wait(1).to({graphics:mask_10_graphics_84,x:194.525,y:118.775}).wait(1).to({graphics:mask_10_graphics_85,x:196.85,y:116.45}).wait(1).to({graphics:mask_10_graphics_86,x:199.2,y:114.1}).wait(1).to({graphics:mask_10_graphics_87,x:201.55,y:111.775}).wait(1).to({graphics:mask_10_graphics_88,x:203.875,y:109.425}).wait(1).to({graphics:mask_10_graphics_89,x:206.225,y:107.075}).wait(1).to({graphics:mask_10_graphics_90,x:208.55,y:104.75}).wait(1).to({graphics:mask_10_graphics_91,x:132.8747,y:78.6138}).wait(1).to({graphics:mask_10_graphics_92,x:132.8747,y:78.6138}).wait(1).to({graphics:mask_10_graphics_93,x:212,y:102.375}).wait(1).to({graphics:mask_10_graphics_94,x:213.1,y:102.325}).wait(1).to({graphics:mask_10_graphics_95,x:214.225,y:101.9}).wait(1).to({graphics:mask_10_graphics_96,x:215.325,y:102.1}).wait(1).to({graphics:mask_10_graphics_97,x:216.95,y:101.9}).wait(1).to({graphics:mask_10_graphics_98,x:132.8747,y:78.6138}).wait(1).to({graphics:mask_10_graphics_99,x:132.8747,y:78.6138}).wait(1).to({graphics:mask_10_graphics_100,x:224.9,y:100.925}).wait(1).to({graphics:mask_10_graphics_101,x:227.875,y:100.7}).wait(1).to({graphics:mask_10_graphics_102,x:231.075,y:100.375}).wait(1).to({graphics:mask_10_graphics_103,x:234.25,y:100.35}).wait(1).to({graphics:mask_10_graphics_104,x:237.45,y:100.625}).wait(1).to({graphics:mask_10_graphics_105,x:240.625,y:100.85}).wait(1).to({graphics:mask_10_graphics_106,x:132.8747,y:78.6138}).wait(1).to({graphics:mask_10_graphics_107,x:132.8747,y:78.6138}).wait(1).to({graphics:mask_10_graphics_108,x:253.75,y:100.925}).wait(1).to({graphics:mask_10_graphics_109,x:254.9,y:100.75}).wait(1).to({graphics:mask_10_graphics_110,x:256.025,y:100.6}).wait(1).to({graphics:mask_10_graphics_111,x:257.175,y:100.4}).wait(1).to({graphics:mask_10_graphics_112,x:258.3,y:102.675}).wait(1).to({graphics:mask_10_graphics_113,x:259.45,y:105.3}).wait(1).to({graphics:mask_10_graphics_114,x:260.575,y:107.9}).wait(1).to({graphics:mask_10_graphics_115,x:261.7,y:110.525}).wait(1).to({graphics:mask_10_graphics_116,x:262.875,y:113.15}).wait(1).to({graphics:mask_10_graphics_117,x:264.025,y:115.775}).wait(1).to({graphics:mask_10_graphics_118,x:265.2,y:118.4}).wait(1).to({graphics:mask_10_graphics_119,x:132.8747,y:78.6138}).wait(1).to({graphics:mask_10_graphics_120,x:132.8747,y:78.6138}).wait(1).to({graphics:mask_10_graphics_121,x:264.975,y:129.05}).wait(1).to({graphics:mask_10_graphics_122,x:263.85,y:130.625}).wait(1).to({graphics:mask_10_graphics_123,x:264.35,y:131.875}).wait(1).to({graphics:mask_10_graphics_124,x:264.85,y:133.175}).wait(1).to({graphics:mask_10_graphics_125,x:265.35,y:134.425}).wait(1).to({graphics:mask_10_graphics_126,x:265.85,y:135.85}).wait(1).to({graphics:mask_10_graphics_127,x:132.8747,y:78.6138}).wait(1).to({graphics:mask_10_graphics_128,x:132.8747,y:78.6138}).wait(1).to({graphics:mask_10_graphics_129,x:266.35,y:141.175}).wait(1).to({graphics:mask_10_graphics_130,x:266.35,y:141.175}).wait(1).to({graphics:mask_10_graphics_131,x:266.35,y:141.175}).wait(1).to({graphics:mask_10_graphics_132,x:266.35,y:141.175}).wait(1).to({graphics:mask_10_graphics_133,x:266.35,y:141.175}).wait(1).to({graphics:mask_10_graphics_134,x:266.35,y:141.175}).wait(1).to({graphics:mask_10_graphics_135,x:266.35,y:141.2}).wait(1).to({graphics:mask_10_graphics_136,x:266.35,y:141.2}).wait(1).to({graphics:mask_10_graphics_137,x:266.35,y:141.2}).wait(1).to({graphics:mask_10_graphics_138,x:266.35,y:141.2}).wait(1).to({graphics:mask_10_graphics_139,x:266.35,y:141.2}).wait(1).to({graphics:mask_10_graphics_140,x:266.35,y:141.2}).wait(1).to({graphics:mask_10_graphics_141,x:132.8747,y:78.6138}).wait(259));

	// lady02
	this.instance_20 = new lib.CachedBmp_10();
	this.instance_20.setTransform(195.3,77.3,0.5,0.5);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(83).to({_off:false},0).wait(317));

	// 手
	this.instance_21 = new lib.手();
	this.instance_21.setTransform(216.2,308.55,1,1,0,0,0,307.8,205.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({x:204.4,y:290.1},0).wait(1).to({x:194.9,y:272.4},0).wait(1).to({x:191.3,y:254.35},0).wait(1).to({y:235.95},0).wait(1).to({x:196.55,y:216.95},0).wait(1).to({x:208.7,y:199.2},0).wait(1).to({x:207.7},0).wait(1).to({x:214.9,y:194.95},0).wait(1).to({x:227.35,y:189.35},0).wait(1).to({x:238.5},0).wait(1).to({x:244.1,y:187.25},0).wait(1).to({x:246},0).wait(1).to({y:185.6},0).wait(1).to({x:247.5},0).wait(1).to({x:258.85,y:188.95},0).wait(1).to({x:266},0).wait(1).to({x:271.7,y:192.5},0).wait(1).to({x:278,y:195.4},0).wait(1).to({x:283.75,y:198},0).wait(1).to({x:289.65,y:201.6},0).wait(1).to({x:294.05,y:206.4},0).wait(1).to({x:299.75,y:210.6},0).wait(1).to({x:305,y:216.1},0).wait(1).to({y:217.35},0).wait(1).to({x:310.25,y:222.8},0).wait(1).to({x:315.5,y:230.15},0).wait(1).to({x:320.95,y:236.25},0).wait(1).to({x:326.65,y:244.9},0).wait(1).to({x:331.9,y:251.4},0).wait(1).to({x:338.85,y:259.4},0).wait(1).to({x:343.5,y:268.65},0).wait(1).to({x:349.6,y:274.75},0).wait(1).to({x:355.05,y:280.65},0).wait(1).to({x:359.65,y:287.55},0).wait(1).to({x:363.4,y:295.1},0).wait(1).to({x:369.1,y:301.85},0).wait(1).to({x:374.15,y:309.05},0).wait(1).to({x:378.85,y:316.75},0).wait(1).to({x:384.55,y:324.15},0).wait(1).to({x:390.1,y:331.05},0).wait(1).to({x:396.5,y:338.3},0).wait(1).to({x:402.2,y:344.35},0).wait(1).to({x:408.25,y:350.9},0).wait(1).to({x:414.95,y:356.75},0).wait(1).to({x:422,y:362.8},0).wait(1).to({x:429.05,y:369.35},0).wait(1).to({x:435.6,y:374.9},0).wait(1).to({x:442.45,y:380.95},0).wait(1).to({x:449.85,y:386.35},0).wait(1).to({x:458.1,y:391.4},0).wait(1).to({x:466.85,y:395.95},0).wait(1).to({x:476.9,y:398.3},0).wait(1).to({x:476.8,y:398.65},0).wait(1).to({x:477.45},0).wait(1).to({y:398.85},0).wait(1).to({x:480.3},0).wait(1).to({x:483},0).wait(1).to({x:485},0).wait(1).to({x:488.35,y:396.85},0).wait(1).to({x:490.7},0).wait(1).to({x:492.4,y:396.15},0).wait(1).to({x:494.1,y:393.1},0).wait(1).to({x:495.9,y:390.45},0).wait(1).to({x:497.4,y:386},0).wait(1).to({x:496.9,y:381.55},0).wait(1).to({y:378.2},0).wait(1).to({y:376},0).wait(1).to({x:495.4,y:372.4},0).wait(1).to({x:492.85,y:367.35},0).wait(1).to({x:488.7,y:359.4},0).wait(1).to({x:486.25,y:355.9},0).wait(1).to({x:483.85,y:352},0).wait(1).to({x:480.7,y:347.1},0).wait(1).to({x:476.05,y:341.55},0).wait(1).to({x:470.95,y:335.25},0).wait(1).to({x:466.65,y:330.15},0).wait(1).to({x:463.1,y:325.6},0).wait(1).to({x:460.5,y:322.05},0).wait(1).to({x:457.3,y:318.25},0).wait(1).to({x:454.4,y:315.05},0).wait(1).to({x:452.1,y:312.05},0).wait(1).to({y:308.55},0).to({_off:true},1).wait(317));

	// 遮 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AmoB0IAAjnINQAAIAADng");
	var mask_11_graphics_1 = new cjs.Graphics().p("AmoDPIAAmdINQAAIAAGdg");
	var mask_11_graphics_2 = new cjs.Graphics().p("AmoEqIAApTINQAAIAAJTg");
	var mask_11_graphics_3 = new cjs.Graphics().p("AmoGFIAAsJINQAAIAAMJg");
	var mask_11_graphics_4 = new cjs.Graphics().p("AmoHgIAAu/INQAAIAAO/g");
	var mask_11_graphics_5 = new cjs.Graphics().p("AmoI7IAAx1INQAAIAAR1g");
	var mask_11_graphics_6 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AmaLjIgOhNIAAzeIAaAAIC9iZICBBuICbgPIFRAqIAHBHIgIBEIANBPIAARKIh8AXg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AmMLkIgchAIAAzrIAZAAIACAAIC/icICGBHICXgeIFBBUIANBFIgRBAIAcBCIAARWIhoAtg");
	var mask_11_graphics_10 = new cjs.Graphics().p("Al+LsIgqgzIAAz4IAZAAIACAAIDBicICMAdICTgtIEwB+IAVBDIgZA9IApA1IAARhIhTBDg");
	var mask_11_graphics_11 = new cjs.Graphics().p("AlxMJIg3gmIAA0FIAaAAIABAAIDDieICSgLICPg9IEgCpIAcBBIgjA6IA4AnIAARsIg+Bag");
	var mask_11_graphics_12 = new cjs.Graphics().p("AljMmIhFgaIAA0RIAaAAIABAAIDFigICYgzICLhNIEQDTIAiBAIgqA2IBFAbIAAR3IgpBwg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AlVNDIhTgNIAA0eIAaAAIABgBIDHihICehbICIhdID+D9IAqA+Ig0AzIBUANIAASEIgVCGg");
	var mask_11_graphics_14 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_15 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_16 = new cjs.Graphics().p("AnjNfIAA0qIAaAAIHxmTICgDGIAchnIEABEIhLEZIgsgPIAAUQg");
	var mask_11_graphics_17 = new cjs.Graphics().p("AoCNfIAA0qIAaAAIHxmTIChDHIAbhoIE9BVIhRExIhjgdIAAT1g");
	var mask_11_graphics_18 = new cjs.Graphics().p("AogNfIAA0qIAZAAIHzmTICfDHIAchoIF6BlIhYFJIiZgrIAATbg");
	var mask_11_graphics_19 = new cjs.Graphics().p("Ao/NfIAA0qIAZAAIHzmTICgDHIAchoIG3B2IhfFhIjQg5IAATAg");
	var mask_11_graphics_20 = new cjs.Graphics().p("ApeNfIAA0qIAaAAIHymTICgDHIAchoIH1CHIhlF5IkIhHIAASlg");
	var mask_11_graphics_21 = new cjs.Graphics().p("Ap9NfIAA0qIAaAAIHymTICgDHIAchnIIzCWIhsGSIk/hWIAASLg");
	var mask_11_graphics_22 = new cjs.Graphics().p("AqbNfIAA0qIAZAAIHzmTICgDIIAchoIJvCnIhyGqIl1hkIAARwg");
	var mask_11_graphics_23 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_24 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_25 = new cjs.Graphics().p("AruLyIgfnIIAAr0IAbAAIEUjfIBwhQIAvgoIBLg3ICsDFIAfhiIKdDNIAfgWIB7CSIi7CyIglCrIhxgZIhWBIIhohsIgegHIhggdIguP3IlcgOInlAgg");
	var mask_11_graphics_26 = new cjs.Graphics().p("AriL3Ig8m3IAAsJIAagBIEcjmIBzhFIAtgqIBPgzIC1DCIAlhcIKhDpIAggUIB9CXIioC4IgcCvIhqgSIhaBJIhrhiIgfgEIhhghIhbOYIkTgbIhNgCInTBBg");
	var mask_11_graphics_27 = new cjs.Graphics().p("ArVL9IhbmnIAAseIAPAAIAMgBIEjjsIB1g7IAtgtIBRgvIDADAIAphXIKlEFIAigRICACbIiWC/IgTCwIhlgLIhbBMIhvhXIgggEIhhgkIiJM7IkVgpIhOgDInBBhg");
	var mask_11_graphics_28 = new cjs.Graphics().p("ArIMCIh6mWIAAszIAQAAIAMgCIErjxIB2gwIAtgwIBUgrIDKC8IASgbIAIgWIATgfIKqEgIAigPICECgIiEDGIgKCzIhegFIheBOIh0hMIgfgCIhjgpIi2LdIkWg2IhQgEImvCAg");
	var mask_11_graphics_29 = new cjs.Graphics().p("Aq8MHIiYmEIAAtJIARAAIAMgCIEyj4IB5gmIArgxIBYgpIDUC6IATgaIAKgUIAUgcIKvE8IAigMICICjIhyDOIgBC1Ig1ADIgjAAIhhBQIh3hDIghAAIhigtIjkJ+IkYhCIhRgHImeCig");
	var mask_11_graphics_30 = new cjs.Graphics().p("AqvMMIi2lzIAAtdIAQAAIANgDIE6j+IB6gcIArg0IBbgkIDeC2IAVgYIAKgUIAWgYIK0FXIAigIICLCnIhfDUIAHC4IguAJIgjABIhjBSIh7g3IghABIhkgxIkRIgIkZhRIhUgHImLDCg");
	var mask_11_graphics_31 = new cjs.Graphics().p("AqjMRIjUliIAAtyIARAAIANgDIFCkFIB7gRIAqg3IBfggIDoCzIAXgWIALgVIAYgTIK4FzIAjgFICOCrIhNDaIAQC7IgnAPIgjACIhmBUIiAgsIghADIhkg2IlAHCIkZheIhXgIIl5Dig");
	var mask_11_graphics_32 = new cjs.Graphics().p("AqWMXIjzlSIAAuHIASAAIAMgDIFKkLIB9gHIAqg5IBhgdIDzCxIAZgUIAMgVIAZgQIK9GPIAjgCICSCvIg7DiIAZC9IghAUIgkAEIhnBWIiEgiIgiAEIhkg5IltFjIkchrIhYgKIlnEDg");
	var mask_11_graphics_33 = new cjs.Graphics().p("AqKMdIkRlBIAAudIASAAIANgDIFSkSIB+AEIAqg8IBkgZID9CvIAbgTIALgWIAcgLILCGrIAkABICUCyIgoDpIAiDBIgaAZIgkAFIhqBYIiIgXIgiAGIhmg+ImbEFIkdh4IhagLIlVEjg");
	var mask_11_graphics_34 = new cjs.Graphics().p("AqHMhIkvkwIAAuxIASAAIANgEIFZkXICBANIAog9IBngWIEICrIAcgQIANgVIAdgIILGHHIAlADICYC3IgWDwIAqDDIgSAeIglAIIhtBaIiMgOIgiAIIhmhBInJCmIkeiGIhcgMIlDFEg");
	var mask_11_graphics_35 = new cjs.Graphics().p("AvWICIAAvGIATAAIAOgFIFgkdICCAYIAohAIBrgSIERCoIAfgOIAOgWIAegDILLHiIAlAGICbC6IgDD5IAyDFIgLAjIgmAKIhuBcIiQgDIgjAKIhohGIn1BIIkgiUIhegNIkxFkIAAALg");
	var mask_11_graphics_36 = new cjs.Graphics().p("Av1ITIAAvbIATAAIAOgGIFokjICEAiIAnhCIBugPIEbCmIAhgNIAPgWIAgACILPH9IAmAJICfC/IAOD/IA8DIIgFAoIgmAMIhxBdIiUAJIgkAKIhnhJIokgWIkhiiIhfgOIkgGEIAAAXg");
	var mask_11_graphics_37 = new cjs.Graphics().p("AwVIjIAAvwIAUAAIANgGIFwkpICGAtIAmhFIBxgLIElCiIAjgKIAQgWIAiAFILTIZIAnAMICiDDIAgEGIBFDKIACAuIgmANIh0BgIiYATIgkAMIhphNIpQh1IkjivIhigPIkNGlIAAAhg");
	var mask_11_graphics_38 = new cjs.Graphics().p("Aw4I0IAAwGIAUAAIAOgGIF3kvICJA3IAlhHIB0gIIEwCgIAkgJIARgWIAjAKILYI0IAnAPICmDGIAyEOIBODNIAJA0IgnAOIh2BhIicAeIglAOIhphRIp9jUIkli8IhkgQIj7HFIAAAtg");
	var mask_11_graphics_39 = new cjs.Graphics().p("AKNLsIqrkyIknjJIhlgSIjpHlIAAA5InIjcIAAwZIAUAAIAPgHIF+k2ICLBBIAlhJIB2gEIE6CdIAngHIASgWIAkAOILdJQIAnASICpDKIBFEVIBXDPIAPA5IgnAQIh4BkIihAoIglAQg");
	var mask_11_graphics_40 = new cjs.Graphics().p("AKnMKIrZmQIkojWIhngUIjXIGIAABEInljLIAAwvIAUAAIAOgHIGHk8ICMBMIAkhMIB6AAIFECaIApgFIATgXIAmATILgJrIAoAWICtDOIBXEbIBgDSIAWA+IgoASIh6BmIilAyIgmASg");
	var mask_11_graphics_41 = new cjs.Graphics().p("ALCMvIsHnvIkpjkIhpgVIjFImIAABQIoEi6IAAxEIAVAAIAOgIIGPlCICOBWIAjhOIB9AEIFOCXIArgEIAUgWIAoAXILkKHIApAYICwDSIBpEiIBpDVIAdBEIgpATIh8BoIipA9IgmATg");
	var mask_11_graphics_42 = new cjs.Graphics().p("ALdNTIs0pOIkrjxIhrgVIizJFIAABbIojipIAAxYIAWAAIAOgJIGWlIICQBhIAihRICBAHIFYCUIAtgBIAUgXIAqAbILpKjIAqAbICzDWIB8EqICUEgIgoAVIiABqIitBIIgmAUg");
	var mask_11_graphics_43 = new cjs.Graphics().p("AL3N3ItiqsIksj+IhsgXIiiJmIAABmIpAiYIAAxuIAWAAIAOgJIGelOICRBrIAihTICEALIFiCRIAvAAIAVgWIArAfILuK+IAqAeIC2DaICOExIClEoIgpAXIiCBrIixBTIgnAWg");
	var mask_11_graphics_44 = new cjs.Graphics().p("AMRObIuPsLIkukLIhugYIiQKGIAAByIpeiIIAAyCIAWAAIAPgJIGmlVICTB2IAhhWICHAPIFsCOIAwACIAXgXIAtAjILyLbIAqAgIC6DeIChE4IC0EwIgqAYIiEBuIi1BeIgoAXg");
	var mask_11_graphics_45 = new cjs.Graphics().p("AMsO/Iu9tpIkvkZIhwgZIh+KmIAAB9Ip9h2IAAyYIAXAAIAPgJIGtlbICVCAIAghYICKASIF3CMIAyAEIAXgYIAvAoIL3L1IArAkIC9DjICyE/IDFE3IgrAaIiGBwIjhCBg");
	var mask_11_graphics_46 = new cjs.Graphics().p("ANHPjI0bzuIhygaIhsLHIAACIIqbhlIAAytIAXAAIAPgKIG0lhICXCKIAghaICNAVIGBCJIA0AGIAYgXIAxAsIL7MRIArAmIDBDnIDEFGIDUE/IgrAcIiIByIjmCNg");
	var mask_11_graphics_47 = new cjs.Graphics().p("ANiQHI1L1aIh0gbIhaLnIAACUIq5hVIAAzBIAXAAIAQgKIG8loICYCUIAghcICQAZIGLCGIA2AIIAZgXIAyAvIL/MtIAsApIDEDrIDYFNIDjFIIgsAeIiKBzIjqCZg");
	var mask_11_graphics_48 = new cjs.Graphics().p("AN8QrI153FIh2geIhIMJIAACeIrYhDIAAzXIAYAAIHTl4ICbCeIAeheICTAdIGWCCIA4AKIAagXINkOpIDHDuIDpFUID0FQIgsAfIiOB1IjvCmg");
	var mask_11_graphics_49 = new cjs.Graphics().p("AoRniIh5geIg2MnIAACrIr2gyIAAzsIAZAAIHbl/ICcCpIAdhhICXAgIGfCAIA7ALIAagXINrPMIDLDzID7FaIEDFYIi8CYIj0Cyg");
	var mask_11_graphics_50 = new cjs.Graphics().p("AomoqIh6gfIgkNIIAAC2IsUgiIAA0AIAYAAIHjmGICfCzIAdhjICZAkIGqB9IA8ANIAbgXINyPuIDOD3IEOFiIESFfIi/CcIj4C+g");
	var mask_11_graphics_51 = new cjs.Graphics().p("Ao6pyIh8ghIgSNpIAADCIszgRIAA0WIAZAAIHrmMICgC+IAchmICdAnIHyCKIAcgYIN4QSIDSD7IJCLQIm/Fpg");
	var mask_11_graphics_52 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_53 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_54 = new cjs.Graphics().p("ApLq6Ih+giIAARXItRAAIAA0rIAaAAIHymTICiDIIAbhoIKfC0IAdgYMAavAgIIhxByIgUBIIg1gOIkDDXg");
	var mask_11_graphics_55 = new cjs.Graphics().p("ApHq6Ih+giIAARXItRAAIAA0rIAaAAIHymTICiDIIAbhoIKfC0IAdgYIanf+IhKBlIgbBmIhNgVIkDDXg");
	var mask_11_graphics_56 = new cjs.Graphics().p("ApDq6Ih+giIAARXItRAAIAA0rIAaAAIHymTICiDIIAbhoIKfC0IAdgYIagf0IgjBYIgjCDIhlgbIkDDXg");
	var mask_11_graphics_57 = new cjs.Graphics().p("ApBq6Ih+giIAARXItRAAIAA0rIAaAAIHymTICiDIIAbhoIKeC0IAdgYIaYfqIAFBKIgrChIh9ghIkDDXg");
	var mask_11_graphics_58 = new cjs.Graphics().p("ApRq6Ih+giIAARXItRAAIAA0rIAaAAIHymTICiDIIAbhoIKfC0IAdgYIaPfhIAtA8Ig0C/IiTgoIkDDXg");
	var mask_11_graphics_59 = new cjs.Graphics().p("Aphq6Ih9giIAARXItRAAIAA0rIAZAAIHzmTIChDIIAchoIKeC0IAdgYIaHfXIBUAvIg6DcIitguIkCDXg");
	var mask_11_graphics_60 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_61 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_62 = new cjs.Graphics().p("APDT5I5Z+fIhFgcIg0gOIgPA2IAAQSIgmAKIslAAIgGgXIAA0UIAZAAIHqmMIALgEICVC4IAMAJIAVhSIAJgRIJ8CrIAiACIACACIAcgOIY8d9IBNA3IAfACIBWAhIgEBFIBZBaIADAEIhjBjIgkgVIgIAUIhDgEIgwgSIgSgBIg3gPIhzBAIiWB+g");
	var mask_11_graphics_63 = new cjs.Graphics().p("APJUVI5h+oIg/gjIg1gPIgdAkIAAQXIgdAUIsoAAIgMgSIAA0ZIAaAAIHsmNIAKgBICWC5IAKACIAWhTIAMgKIJ/CrIAhgFIABACIAcgDIZDeFIBOAVIAegFIBRApIAKBCIBbBaIABAEIhkBkIglgHIgKATIg+AKIgtgXIgPAFIg4gPIh4AnIiYB+g");
	var mask_11_graphics_64 = new cjs.Graphics().p("AqZqEIg6grIg2gOIgrARIAAQcIgTAdIssAAIgSgMIAA0eIAaAAIHumQIAKAEICXC6IAIgFIAWhTIAQgGIKBCsIAggLIABACIAbAIIZKeOIBRgPIAcgLIBNAyIAYA9IBbBbIgBAFIhkBkIglAIIgMASIg6AXIgrgbIgMAKIg4gPIh/AOIiYB/IhhALg");
	var mask_11_graphics_65 = new cjs.Graphics().p("AqbqCIg1gzIg2gOIg6gBIAAQhIgJAnIsvAAIgZgGIAA0lIAaAAIHwmRIAJAIICZC7IAGgNIAWhTIAUAAIKECtIAegSIABACIAaATIZReWIBuhEIBIA7IAnA6IBcBbIgEAFIhkBlIglAWIgOARIg2AlIgoggIgJAQIg5gPIiFgMIiZCAIhkAxg");
	var mask_11_graphics_66 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_67 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");
	var mask_11_graphics_68 = new cjs.Graphics().p("AMESKI4C83Ih7gmIgJCDIAAPJIhZAHIr0AAIgEg2IAAz1IAZAAIHdmCIAXgPIChDEIAehlIKeCzIAdgUISwWhICICeIEzE/IABACIBsheIAvAxIDAhdIBZCaIiMBgIAjAkIgzA8Ih9B5IgZAdIgkggIgHAVIjBgnIhDA0IiYBwIgqAjg");
	var mask_11_graphics_69 = new cjs.Graphics().p("AMUSdI4G89Ih4gqIgTB2IAAPMIhSANIr3AAIgIgyIAAz5IAaAAIHemDIAXgMICJCpIAXAWIAQg9IAQgkIJZCgIAiAGIAlANIAcgRIS0WmIB1CEIE7EWIABACIBqhOIAuAzIC8hIIBZCaIh7BlIAiAkIgtA9Ih/B3IgVAdIgFgEIgfgXIgHAWIi+gaIgMAKIgmAXIgQAPIibBkIgqAjg");
	var mask_11_graphics_70 = new cjs.Graphics().p("AMlSwI4L9DIh2gvIgbBpIAAPPIhMAUIr5AAIgMgvIAAz8IAZAAIHgmEIAXgKICJCqIAWASIARg+IASggIJaChIAiADIAkAOIAcgMIS4WpIBiBpIFDDuIABACIBog8IAuAyIC2gxIBZCaIhqBqIAhAlIglA+IiCB1IgRAdIgEgEIgfgSIgIAVIi7gMIgMAKIgmATIgPAPIieBYIgqAjg");
	var mask_11_graphics_71 = new cjs.Graphics().p("AM2TCI4Q9IIhzg0IglBdIAAPRIhFAbIr8AAIgQgqIAA0BIAZAAIABAAIHhmFIAWgHICKCqIAWAMIAQg8IAVgeIJcCiIAhACIAjAPIAcgKIS7WvIBPBOIFNDFIABACIBlgrIAtA0ICxgeIBaCcIhaBuIAhAmIgfA/IiEBzIgNAdIgDgDIgfgNIgJAUIi4ACIgLAKIgmANIgOAQIiiBOIgrAjg");
	var mask_11_graphics_72 = new cjs.Graphics().p("ANHTVI4U9NIhxg6IguBQIAAPVIhAAhIr9AAIgUgmIAA0EIAZAAIABgBIHimGIAWgEICKCqIAVAIIAQg9IAXgZIJeCiIAhgBIAiARIAcgGIS/WzIA8AyIFVCeIABACIBkgbIAsA1ICrgIIBaCcIhJBzIAhAnIgYBAIiHBxIgJAdIgCgCIgfgJIgKAUIi0APIgMAKIgmAJIgNARIilBBIgrAjg");
	var mask_11_graphics_73 = new cjs.Graphics().p("ANYToI4Z9TIhug+IgGAFIgyA+IAAPYIg5AoIsAAAIgYgjIAA0IIAZAAIABAAIHkmIIAWgBICKCrIAUACIAQg8IAagWIJfCiIAhgDIAiATIAbgCITCW2IAqAYIFdB2IABABIBigKIArA2ICmAOIBbCcIg5B4IAgAoIgRBBIiJBuIgFAeIgBgCIgfgEIgLATIixAdIgMAKIgmAFIgMARIioA1IgrAkg");
	var mask_11_graphics_74 = new cjs.Graphics().p("ANpT7I4e9YIhshDIgGADIg6A0IAAPbIgzAuIsCAAIgcggIAA0LIAZAAIABAAIHlmJIAWABICLCsIASgCIARg+IAbgSIJiCkIAggGIAhAUIAbABITGW8IAXgDIFlBNIABACIBgAGIArA3IChAjIBaCdIgnB9IAfAoIgLBDIiLBsIgBAdIgfgBIgMAUIiuAqIgMAKIglAAIgMASIirApIgrAjg");
	var mask_11_graphics_75 = new cjs.Graphics().p("AN2UQI4j9eIhohIIgHABIhEAoIAAPeIgsA1IsEAAIghgbIAA0QIAaAAIABAAIHnmKIAUAFICMCrIASgHIAQg9IAegOIJjCjIAggIIAgAXIAbAEITKXBIAFgfIFsAlIACACIBeAXIApA3ICcA6IBbCcIgXCDIAfAoIgEBEIiNBpIACAfIAAAAIgeADIgMATIisA4IgLALIgmgGIgLASIiuAeIgrAkg");
	var mask_11_graphics_76 = new cjs.Graphics().p("AqqpMIhnhNIgHgBIhMAdIAAPiIgmA7IsHAAIgkgXIAA0UIAZAAIABAAIHpmMIAVAIICMCsIAQgLIARg+IAggKIJlCkIAfgKIAgAXIAaAIITOXFIgOg6IF1gCIABABIBcApIApA4ICXBOIBbCdIgGCHIAdAqIAEBEIiQBoIAHAeIABABIgfAHIgNATIioBGIgMAKIglgJIgLASIixASIgrAkIjFAag");
	var mask_11_graphics_77 = new cjs.Graphics().p("AqppLIhkhRIgJgEIhUAUIAAPkIgfBCIsJAAIgpgUIAA0XIAaAAIABAAIHqmNIAUAKICMCuIAQgRIARg+IAigHIJnClIAfgNIAfAZIAaAMITRXJIghhUIF+grIABACIBbA4IAnA5ICRBkIBcCeIALCMIAcApIAKBHIiRBlIAKAeIACADIgeALIgOASIimBTIgKALIgmgOIgKATIi0AGIgrAkIjJAzg");
	var mask_11_graphics_78 = new cjs.Graphics().p("AqopJIhihWIgJgGIhdAJIAAPnIgZBIIsMAAIgsgPIAA0bIAaAAIABgBIHsmNIAUAMICMCuIAPgVIAQg/IAlgCIJpClIAegPIAeAaIAaAQITVXNIgzhvIGFhTIABACIBZBJIAnA6ICMB5IBcCeIAbCRIAdAqIAQBIIiUBjIAPAeIADAEIggAPIgNASIiiBhIgMAKIgmgSIgJATIi3gFIgrAjIjLBNg");
	var mask_11_graphics_79 = new cjs.Graphics().p("AqopHIhehbIgLgIIhlgCIAAPqIgTBPIsOAAIgwgLIAA0fIAaAAIABgBIHtmPIATAQICOCuIAOgaIAQg+IAnAAIJrCmIAegRIA3AvITYXSIhGiKIGOh8IABACIBXBaIAmA7ICHCOIBcCfIAsCWIAcArIAYBIIiXBiIASAeIAFAEIggAUIgPARIifBuIgLALIgmgXIgIAUIi6gRIgsAkIjNBmg");
	var mask_11_graphics_80 = new cjs.Graphics().p("AqopGIhmhqIhugMIAAPtIgMBWIsQAAIg1gIIAA0jIAaAAIABgBIHumPIAUATICOCuIAMgfIARg+IAqAEIJsCnIAdgUIA3AzITbXXIhZilIGXikIABACIBVBrIAlA8ICCCkIBcCfIA9CaIAbAsIAeBKIiZBeIAXAfIAFAFIgfAYIgQASIicB7IgMALIglgcIgHAVIi+gdIgsAkIjQB/g");
	var mask_11_graphics_81 = new cjs.Graphics().p("AqmpEIhmhxIh1gXIAAPwIgHBdIsSAAIg4gEIAA0nIAZAAIABgBIHwmRICiDFIAchjIAsAIIJuCnIAdgVIUVYTIhsi/IGfjNIABACID0FyIBcCfIBOCgIAaAsIAlBLIibBdIAhAkIggAcIgQARIikCUIgmggIgGAVIjBgpIgsAkIjUCag");
	var mask_11_graphics_82 = new cjs.Graphics().p("AiOSlIAA0qINQAAIAAUqg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:98.8,y:226.225}).wait(1).to({graphics:mask_11_graphics_1,x:98.8,y:217.125}).wait(1).to({graphics:mask_11_graphics_2,x:98.8,y:208.05}).wait(1).to({graphics:mask_11_graphics_3,x:98.8,y:198.95}).wait(1).to({graphics:mask_11_graphics_4,x:98.8,y:189.85}).wait(1).to({graphics:mask_11_graphics_5,x:98.8,y:180.775}).wait(1).to({graphics:mask_11_graphics_6,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_7,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_8,x:98.8,y:164}).wait(1).to({graphics:mask_11_graphics_9,x:98.8,y:163.9}).wait(1).to({graphics:mask_11_graphics_10,x:98.8,y:163.05}).wait(1).to({graphics:mask_11_graphics_11,x:98.8,y:160.15}).wait(1).to({graphics:mask_11_graphics_12,x:98.8,y:157.275}).wait(1).to({graphics:mask_11_graphics_13,x:98.8,y:154.4}).wait(1).to({graphics:mask_11_graphics_14,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_15,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_16,x:104.725,y:151.525}).wait(1).to({graphics:mask_11_graphics_17,x:107.8,y:151.525}).wait(1).to({graphics:mask_11_graphics_18,x:110.875,y:151.525}).wait(1).to({graphics:mask_11_graphics_19,x:113.95,y:151.525}).wait(1).to({graphics:mask_11_graphics_20,x:117.025,y:151.525}).wait(1).to({graphics:mask_11_graphics_21,x:120.1,y:151.525}).wait(1).to({graphics:mask_11_graphics_22,x:123.175,y:151.525}).wait(1).to({graphics:mask_11_graphics_23,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_24,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_25,x:134.5,y:151.4}).wait(1).to({graphics:mask_11_graphics_26,x:136.275,y:151.3}).wait(1).to({graphics:mask_11_graphics_27,x:138.05,y:151.175}).wait(1).to({graphics:mask_11_graphics_28,x:139.825,y:151.05}).wait(1).to({graphics:mask_11_graphics_29,x:141.6,y:150.95}).wait(1).to({graphics:mask_11_graphics_30,x:143.375,y:150.825}).wait(1).to({graphics:mask_11_graphics_31,x:145.15,y:150.725}).wait(1).to({graphics:mask_11_graphics_32,x:146.925,y:150.575}).wait(1).to({graphics:mask_11_graphics_33,x:148.7,y:150.45}).wait(1).to({graphics:mask_11_graphics_34,x:151.475,y:150.35}).wait(1).to({graphics:mask_11_graphics_35,x:154.6,y:150.775}).wait(1).to({graphics:mask_11_graphics_36,x:157.725,y:151.225}).wait(1).to({graphics:mask_11_graphics_37,x:160.95,y:151.675}).wait(1).to({graphics:mask_11_graphics_38,x:164.425,y:152.15}).wait(1).to({graphics:mask_11_graphics_39,x:167.9,y:156.025}).wait(1).to({graphics:mask_11_graphics_40,x:171.375,y:159.95}).wait(1).to({graphics:mask_11_graphics_41,x:174.825,y:163.275}).wait(1).to({graphics:mask_11_graphics_42,x:178.3,y:166.625}).wait(1).to({graphics:mask_11_graphics_43,x:181.775,y:169.975}).wait(1).to({graphics:mask_11_graphics_44,x:185.25,y:173.3}).wait(1).to({graphics:mask_11_graphics_45,x:188.725,y:176.65}).wait(1).to({graphics:mask_11_graphics_46,x:192.175,y:179.975}).wait(1).to({graphics:mask_11_graphics_47,x:195.65,y:183.3}).wait(1).to({graphics:mask_11_graphics_48,x:199.125,y:186.65}).wait(1).to({graphics:mask_11_graphics_49,x:202.6,y:190}).wait(1).to({graphics:mask_11_graphics_50,x:206.05,y:193.325}).wait(1).to({graphics:mask_11_graphics_51,x:209.525,y:196.65}).wait(1).to({graphics:mask_11_graphics_52,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_53,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_54,x:212.6,y:200}).wait(1).to({graphics:mask_11_graphics_55,x:212.2,y:200}).wait(1).to({graphics:mask_11_graphics_56,x:211.8,y:200}).wait(1).to({graphics:mask_11_graphics_57,x:211.625,y:200}).wait(1).to({graphics:mask_11_graphics_58,x:213.2,y:200}).wait(1).to({graphics:mask_11_graphics_59,x:214.775,y:200}).wait(1).to({graphics:mask_11_graphics_60,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_61,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_62,x:221.15,y:199.25}).wait(1).to({graphics:mask_11_graphics_63,x:222.225,y:198.5}).wait(1).to({graphics:mask_11_graphics_64,x:223.325,y:198.125}).wait(1).to({graphics:mask_11_graphics_65,x:224.5,y:199.075}).wait(1).to({graphics:mask_11_graphics_66,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_67,x:70.625,y:118.9275}).wait(1).to({graphics:mask_11_graphics_68,x:231.175,y:199.475}).wait(1).to({graphics:mask_11_graphics_69,x:230.625,y:198.95}).wait(1).to({graphics:mask_11_graphics_70,x:230.075,y:198.45}).wait(1).to({graphics:mask_11_graphics_71,x:229.525,y:197.95}).wait(1).to({graphics:mask_11_graphics_72,x:228.975,y:197.425}).wait(1).to({graphics:mask_11_graphics_73,x:228.425,y:196.9}).wait(1).to({graphics:mask_11_graphics_74,x:227.875,y:196.3}).wait(1).to({graphics:mask_11_graphics_75,x:227.7,y:195.65}).wait(1).to({graphics:mask_11_graphics_76,x:228.125,y:196.25}).wait(1).to({graphics:mask_11_graphics_77,x:228.7,y:196.875}).wait(1).to({graphics:mask_11_graphics_78,x:229.3,y:197.525}).wait(1).to({graphics:mask_11_graphics_79,x:229.9,y:198.125}).wait(1).to({graphics:mask_11_graphics_80,x:230.5,y:198.75}).wait(1).to({graphics:mask_11_graphics_81,x:231.075,y:199.375}).wait(1).to({graphics:mask_11_graphics_82,x:70.625,y:118.9275}).wait(318));

	// lady01
	this.instance_22 = new lib.CachedBmp_11();
	this.instance_22.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(400));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(120.5,224.4,723.7,504.4);
// library properties:
lib.properties = {
	id: '93E2A4A1DD0E5C4E877B9AF1D9025E97',
	width: 474,
	height: 506,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1671915462541", id:"Image"},
		{src:"images/畫美女2_atlas_1.png?1671915462492", id:"畫美女2_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['93E2A4A1DD0E5C4E877B9AF1D9025E97'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
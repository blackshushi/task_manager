!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).pixiParticles=t()}}(function(){return function r(n,o,h){function l(i,t){if(!o[i]){if(!n[i]){var e="function"==typeof require&&require;if(!t&&e)return e(i,!0);if(p)return p(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var a=o[i]={exports:{}};n[i][0].call(a.exports,function(t){var e=n[i][1][t];return l(e||t)},a,a.exports,r,n,o,h)}return o[i].exports}for(var p="function"==typeof require&&require,t=0;t<h.length;t++)l(h[t]);return l}({1:[function(t,e,i){"use strict";var s,a=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(i,"__esModule",{value:!0});var r=t("./Particle"),p=PIXI.Texture,n=function(i){function t(t){var e=i.call(this,t)||this;return e.textures=null,e.duration=0,e.framerate=0,e.elapsed=0,e.loop=!1,e}return a(t,i),t.prototype.init=function(){this.Particle_init(),this.elapsed=0,this.framerate<0&&(this.duration=this.maxLife,this.framerate=this.textures.length/this.duration)},t.prototype.applyArt=function(t){this.textures=t.textures,this.framerate=t.framerate,this.duration=t.duration,this.loop=t.loop},t.prototype.update=function(t){var e=this.Particle_update(t);if(0<=e){this.elapsed+=t,this.elapsed>this.duration&&(this.loop?this.elapsed=this.elapsed%this.duration:this.elapsed=this.duration-1e-6);var i=this.elapsed*this.framerate+1e-7|0;this.texture=this.textures[i]||PIXI.Texture.EMPTY}return e},t.prototype.destroy=function(){this.Particle_destroy(),this.textures=null},t.parseArt=function(t){for(var e,i,s,a,r,n=[],o=0;o<t.length;++o){e=t[o],n[o]=i={},i.textures=r=[],s=e.textures;for(var h=0;h<s.length;++h)if("string"==typeof(a=s[h]))r.push(p.fromImage(a));else if(a instanceof p)r.push(a);else{var l=a.count||1;for(a="string"==typeof a.texture?p.fromImage(a.texture):a.texture;0<l;--l)r.push(a)}"matchLife"==e.framerate?(i.framerate=-1,i.duration=0,i.loop=!1):(i.loop=!!e.loop,i.framerate=0<e.framerate?e.framerate:60,i.duration=r.length/i.framerate)}return n},t}(r.default);i.default=n},{"./Particle":3}],2:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("./ParticleUtils"),s=t("./Particle"),o=t("./PropertyNode"),a=PIXI.ticker.shared,r=new PIXI.Point,h=function(){function t(t,e,i){this._particleConstructor=s.default,this.particleImages=null,this.startAlpha=null,this.startSpeed=null,this.minimumSpeedMultiplier=1,this.acceleration=null,this.maxSpeed=NaN,this.startScale=null,this.minimumScaleMultiplier=1,this.startColor=null,this.minLifetime=0,this.maxLifetime=0,this.minStartRotation=0,this.maxStartRotation=0,this.noRotation=!1,this.minRotationSpeed=0,this.maxRotationSpeed=0,this.particleBlendMode=0,this.customEase=null,this.extraData=null,this._frequency=1,this.spawnChance=1,this.maxParticles=1e3,this.emitterLifetime=-1,this.spawnPos=null,this.spawnType=null,this._spawnFunc=null,this.spawnRect=null,this.spawnCircle=null,this.particlesPerWave=1,this.particleSpacing=0,this.angleStart=0,this.rotation=0,this.ownerPos=null,this._prevEmitterPos=null,this._prevPosIsValid=!1,this._posChanged=!1,this._parent=null,this.addAtBack=!1,this.particleCount=0,this._emit=!1,this._spawnTimer=0,this._emitterLife=-1,this._activeParticlesFirst=null,this._activeParticlesLast=null,this._poolFirst=null,this._origConfig=null,this._origArt=null,this._autoUpdate=!1,this._destroyWhenComplete=!1,this._completeCallback=null,this.parent=t,e&&i&&this.init(e,i),this.recycle=this.recycle,this.update=this.update,this.rotate=this.rotate,this.updateSpawnPos=this.updateSpawnPos,this.updateOwnerPos=this.updateOwnerPos}return Object.defineProperty(t.prototype,"frequency",{get:function(){return this._frequency},set:function(t){this._frequency="number"==typeof t&&0<t?t:1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"particleConstructor",{get:function(){return this._particleConstructor},set:function(t){if(t!=this._particleConstructor){this._particleConstructor=t,this.cleanup();for(var e=this._poolFirst;e;e=e.next)e.destroy();this._poolFirst=null,this._origConfig&&this._origArt&&this.init(this._origArt,this._origConfig)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},set:function(t){this.cleanup(),this._parent=t},enumerable:!0,configurable:!0}),t.prototype.init=function(t,e){if(t&&e){this.cleanup(),this._origConfig=e,this._origArt=t,t=Array.isArray(t)?t.slice():[t];var i=this._particleConstructor;this.particleImages=i.parseArt?i.parseArt(t):t,e.alpha?this.startAlpha=o.default.createList(e.alpha):this.startAlpha=new o.default(1,0),e.speed?(this.startSpeed=o.default.createList(e.speed),this.minimumSpeedMultiplier=e.speed.minimumSpeedMultiplier||1):(this.minimumSpeedMultiplier=1,this.startSpeed=new o.default(0,0));var s,a=e.acceleration;switch(a&&(a.x||a.y)?(this.startSpeed.next=null,this.acceleration=new PIXI.Point(a.x,a.y),this.maxSpeed=e.maxSpeed||NaN):this.acceleration=new PIXI.Point,e.scale?(this.startScale=o.default.createList(e.scale),this.minimumScaleMultiplier=e.scale.minimumScaleMultiplier||1):(this.startScale=new o.default(1,0),this.minimumScaleMultiplier=1),e.color?this.startColor=o.default.createList(e.color):this.startColor=new o.default({r:255,g:255,b:255},0),e.startRotation?(this.minStartRotation=e.startRotation.min,this.maxStartRotation=e.startRotation.max):this.minStartRotation=this.maxStartRotation=0,e.noRotation&&(this.minStartRotation||this.maxStartRotation)?this.noRotation=!!e.noRotation:this.noRotation=!1,e.rotationSpeed?(this.minRotationSpeed=e.rotationSpeed.min,this.maxRotationSpeed=e.rotationSpeed.max):this.minRotationSpeed=this.maxRotationSpeed=0,this.minLifetime=e.lifetime.min,this.maxLifetime=e.lifetime.max,this.particleBlendMode=n.default.getBlendMode(e.blendMode),e.ease?this.customEase="function"==typeof e.ease?e.ease:n.default.generateEase(e.ease):this.customEase=null,i.parseData?this.extraData=i.parseData(e.extraData):this.extraData=e.extraData||null,this.spawnRect=this.spawnCircle=null,this.particlesPerWave=1,e.particlesPerWave&&1<e.particlesPerWave&&(this.particlesPerWave=e.particlesPerWave),this.particleSpacing=0,this.angleStart=0,e.spawnType){case"rect":this.spawnType="rect",this._spawnFunc=this._spawnRect;var r=e.spawnRect;this.spawnRect=new PIXI.Rectangle(r.x,r.y,r.w,r.h);break;case"circle":this.spawnType="circle",this._spawnFunc=this._spawnCircle,s=e.spawnCircle,this.spawnCircle=new PIXI.Circle(s.x,s.y,s.r);break;case"ring":this.spawnType="ring",this._spawnFunc=this._spawnRing,s=e.spawnCircle,this.spawnCircle=new PIXI.Circle(s.x,s.y,s.r),this.spawnCircle.minRadius=s.minR;break;case"burst":this.spawnType="burst",this._spawnFunc=this._spawnBurst,this.particleSpacing=e.particleSpacing,this.angleStart=e.angleStart?e.angleStart:0;break;case"point":default:this.spawnType="point",this._spawnFunc=this._spawnPoint}this.frequency=e.frequency,this.spawnChance="number"==typeof e.spawnChance&&0<e.spawnChance?e.spawnChance:1,this.emitterLifetime=e.emitterLifetime||-1,this.maxParticles=0<e.maxParticles?e.maxParticles:1e3,this.addAtBack=!!e.addAtBack,this.rotation=0,this.ownerPos=new PIXI.Point,this.spawnPos=new PIXI.Point(e.pos.x,e.pos.y),this._prevEmitterPos=this.spawnPos.clone(),this._prevPosIsValid=!1,this._spawnTimer=0,this.emit=void 0===e.emit||!!e.emit,this.autoUpdate=void 0!==e.autoUpdate&&!!e.autoUpdate}},t.prototype.recycle=function(t){t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next),t==this._activeParticlesLast&&(this._activeParticlesLast=t.prev),t==this._activeParticlesFirst&&(this._activeParticlesFirst=t.next),t.prev=null,t.next=this._poolFirst,(this._poolFirst=t).parent&&t.parent.removeChild(t),--this.particleCount},t.prototype.rotate=function(t){if(this.rotation!=t){var e=t-this.rotation;this.rotation=t,n.default.rotatePoint(e,this.spawnPos),this._posChanged=!0}},t.prototype.updateSpawnPos=function(t,e){this._posChanged=!0,this.spawnPos.x=t,this.spawnPos.y=e},t.prototype.updateOwnerPos=function(t,e){this._posChanged=!0,this.ownerPos.x=t,this.ownerPos.y=e},t.prototype.resetPositionTracking=function(){this._prevPosIsValid=!1},Object.defineProperty(t.prototype,"emit",{get:function(){return this._emit},set:function(t){this._emit=!!t,this._emitterLife=this.emitterLifetime},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){this._autoUpdate&&!t?a.remove(this.update,this):!this._autoUpdate&&t&&a.add(this.update,this),this._autoUpdate=!!t},enumerable:!0,configurable:!0}),t.prototype.playOnceAndDestroy=function(t){this.autoUpdate=!0,this.emit=!0,this._destroyWhenComplete=!0,this._completeCallback=t},t.prototype.playOnce=function(t){this.emit=!0,this._completeCallback=t},t.prototype.update=function(t){if(this._autoUpdate&&(t=t/PIXI.settings.TARGET_FPMS/1e3),this._parent){var e,i,s,a,r;for(i=this._activeParticlesFirst;i;i=s)s=i.next,i.update(t);this._prevPosIsValid&&(a=this._prevEmitterPos.x,r=this._prevEmitterPos.y);var n=this.ownerPos.x+this.spawnPos.x,o=this.ownerPos.y+this.spawnPos.y;if(this._emit)for(this._spawnTimer-=t;this._spawnTimer<=0;){if(0<this._emitterLife&&(this._emitterLife-=this._frequency,this._emitterLife<=0)){this._spawnTimer=0,this._emitterLife=0,this.emit=!1;break}if(this.particleCount>=this.maxParticles)this._spawnTimer+=this._frequency;else{var h=void 0;if(h=this.minLifetime==this.maxLifetime?this.minLifetime:Math.random()*(this.maxLifetime-this.minLifetime)+this.minLifetime,-this._spawnTimer<h){var l=void 0,p=void 0;if(this._prevPosIsValid&&this._posChanged){var c=1+this._spawnTimer/t;l=(n-a)*c+a,p=(o-r)*c+r}else l=n,p=o;e=0;for(var u=Math.min(this.particlesPerWave,this.maxParticles-this.particleCount);e<u;++e)if(!(this.spawnChance<1&&Math.random()>=this.spawnChance)){var d=void 0;if(this._poolFirst?(d=this._poolFirst,this._poolFirst=this._poolFirst.next,d.next=null):d=new this.particleConstructor(this),1<this.particleImages.length?d.applyArt(this.particleImages[Math.floor(Math.random()*this.particleImages.length)]):d.applyArt(this.particleImages[0]),d.alphaList.reset(this.startAlpha),1!=this.minimumSpeedMultiplier&&(d.speedMultiplier=Math.random()*(1-this.minimumSpeedMultiplier)+this.minimumSpeedMultiplier),d.speedList.reset(this.startSpeed),d.acceleration.x=this.acceleration.x,d.acceleration.y=this.acceleration.y,d.maxSpeed=this.maxSpeed,1!=this.minimumScaleMultiplier&&(d.scaleMultiplier=Math.random()*(1-this.minimumScaleMultiplier)+this.minimumScaleMultiplier),d.scaleList.reset(this.startScale),d.colorList.reset(this.startColor),this.minRotationSpeed==this.maxRotationSpeed?d.rotationSpeed=this.minRotationSpeed:d.rotationSpeed=Math.random()*(this.maxRotationSpeed-this.minRotationSpeed)+this.minRotationSpeed,d.noRotation=this.noRotation,d.maxLife=h,d.blendMode=this.particleBlendMode,d.ease=this.customEase,d.extraData=this.extraData,this._spawnFunc(d,l,p,e),d.init(),d.update(-this._spawnTimer),d.parent){var f=this._parent.children;if(f[0]==d)f.shift();else if(f[f.length-1]==d)f.pop();else{var m=f.indexOf(d);f.splice(m,1)}this.addAtBack?f.unshift(d):f.push(d)}else this.addAtBack?this._parent.addChildAt(d,0):this._parent.addChild(d);this._activeParticlesLast?((this._activeParticlesLast.next=d).prev=this._activeParticlesLast,this._activeParticlesLast=d):this._activeParticlesLast=this._activeParticlesFirst=d,++this.particleCount}}this._spawnTimer+=this._frequency}}this._posChanged&&(this._prevEmitterPos.x=n,this._prevEmitterPos.y=o,this._prevPosIsValid=!0,this._posChanged=!1),this._emit||this._activeParticlesFirst||(this._completeCallback&&this._completeCallback(),this._destroyWhenComplete&&this.destroy())}},t.prototype._spawnPoint=function(t,e,i){this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,t.position.x=e,t.position.y=i},t.prototype._spawnRect=function(t,e,i){this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,r.x=Math.random()*this.spawnRect.width+this.spawnRect.x,r.y=Math.random()*this.spawnRect.height+this.spawnRect.y,0!==this.rotation&&n.default.rotatePoint(this.rotation,r),t.position.x=e+r.x,t.position.y=i+r.y},t.prototype._spawnCircle=function(t,e,i){this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,r.x=Math.random()*this.spawnCircle.radius,r.y=0,n.default.rotatePoint(360*Math.random(),r),r.x+=this.spawnCircle.x,r.y+=this.spawnCircle.y,0!==this.rotation&&n.default.rotatePoint(this.rotation,r),t.position.x=e+r.x,t.position.y=i+r.y},t.prototype._spawnRing=function(t,e,i){var s=this.spawnCircle;this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,s.minRadius==s.radius?r.x=Math.random()*(s.radius-s.minRadius)+s.minRadius:r.x=s.radius,r.y=0;var a=360*Math.random();t.rotation+=a,n.default.rotatePoint(a,r),r.x+=this.spawnCircle.x,r.y+=this.spawnCircle.y,0!==this.rotation&&n.default.rotatePoint(this.rotation,r),t.position.x=e+r.x,t.position.y=i+r.y},t.prototype._spawnBurst=function(t,e,i,s){0===this.particleSpacing?t.rotation=360*Math.random():t.rotation=this.angleStart+this.particleSpacing*s+this.rotation,t.position.x=e,t.position.y=i},t.prototype.cleanup=function(){var t,e;for(t=this._activeParticlesFirst;t;t=e)e=t.next,this.recycle(t),t.parent&&t.parent.removeChild(t);this._activeParticlesFirst=this._activeParticlesLast=null,this.particleCount=0},t.prototype.destroy=function(){var t;this.autoUpdate=!1,this.cleanup();for(var e=this._poolFirst;e;e=t)t=e.next,e.destroy();this._poolFirst=this._parent=this.particleImages=this.spawnPos=this.ownerPos=this.startColor=this.startScale=this.startAlpha=this.startSpeed=this.customEase=this._completeCallback=null},t}();i.default=h},{"./Particle":3,"./ParticleUtils":4,"./PropertyNode":7}],3:[function(t,e,i){"use strict";var s,a=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(i,"__esModule",{value:!0});var r=t("./ParticleUtils"),n=t("./PropertyList"),o=function(i){function s(t){var e=i.call(this)||this;return e.emitter=t,e.anchor.x=e.anchor.y=.5,e.velocity=new PIXI.Point,e.maxLife=0,e.age=0,e.ease=null,e.extraData=null,e.alphaList=new n.default,e.speedList=new n.default,e.speedMultiplier=1,e.acceleration=new PIXI.Point,e.maxSpeed=NaN,e.scaleList=new n.default,e.scaleMultiplier=1,e.colorList=new n.default(!0),e._doAlpha=!1,e._doScale=!1,e._doSpeed=!1,e._doAcceleration=!1,e._doColor=!1,e._doNormalMovement=!1,e._oneOverLife=0,e.next=null,e.prev=null,e.init=e.init,e.Particle_init=s.prototype.init,e.update=e.update,e.Particle_update=s.prototype.update,e.Sprite_destroy=i.prototype.destroy,e.Particle_destroy=s.prototype.destroy,e.applyArt=e.applyArt,e.kill=e.kill,e}return a(s,i),s.prototype.init=function(){this.age=0,this.velocity.x=this.speedList.current.value*this.speedMultiplier,this.velocity.y=0,r.default.rotatePoint(this.rotation,this.velocity),this.noRotation?this.rotation=0:this.rotation*=r.default.DEG_TO_RADS,this.rotationSpeed*=r.default.DEG_TO_RADS,this.alpha=this.alphaList.current.value,this.scale.x=this.scale.y=this.scaleList.current.value,this._doAlpha=!!this.alphaList.current.next,this._doSpeed=!!this.speedList.current.next,this._doScale=!!this.scaleList.current.next,this._doColor=!!this.colorList.current.next,this._doAcceleration=0!==this.acceleration.x||0!==this.acceleration.y,this._doNormalMovement=this._doSpeed||0!==this.speedList.current.value||this._doAcceleration,this._oneOverLife=1/this.maxLife;var t=this.colorList.current.value;this.tint=r.default.combineRGBComponents(t.r,t.g,t.b),this.visible=!0},s.prototype.applyArt=function(t){this.texture=t||PIXI.Texture.EMPTY},s.prototype.update=function(t){if(this.age+=t,this.age>=this.maxLife)return this.kill(),-1;var e=this.age*this._oneOverLife;if(this.ease&&(e=4==this.ease.length?this.ease(e,0,1,1):this.ease(e)),this._doAlpha&&(this.alpha=this.alphaList.interpolate(e)),this._doScale){var i=this.scaleList.interpolate(e)*this.scaleMultiplier;this.scale.x=this.scale.y=i}if(this._doNormalMovement){if(this._doSpeed){var s=this.speedList.interpolate(e)*this.speedMultiplier;r.default.normalize(this.velocity),r.default.scaleBy(this.velocity,s)}else if(this._doAcceleration&&(this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.maxSpeed)){var a=r.default.length(this.velocity);a>this.maxSpeed&&r.default.scaleBy(this.velocity,this.maxSpeed/a)}this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t}return this._doColor&&(this.tint=this.colorList.interpolate(e)),0!==this.rotationSpeed?this.rotation+=this.rotationSpeed*t:this.acceleration&&!this.noRotation&&(this.rotation=Math.atan2(this.velocity.y,this.velocity.x)),e},s.prototype.kill=function(){this.emitter.recycle(this)},s.prototype.destroy=function(){this.parent&&this.parent.removeChild(this),this.Sprite_destroy(),this.emitter=this.velocity=this.colorList=this.scaleList=this.alphaList=this.speedList=this.ease=this.next=this.prev=null},s.parseArt=function(t){var e;for(e=t.length;0<=e;--e)"string"==typeof t[e]&&(t[e]=PIXI.Texture.fromImage(t[e]));if(r.default.verbose)for(e=t.length-1;0<e;--e)if(t[e].baseTexture!=t[e-1].baseTexture){window.console&&console.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");break}return t},s.parseData=function(t){return t},s}(PIXI.Sprite);i.default=o},{"./ParticleUtils":4,"./PropertyList":6}],4:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=PIXI.BLEND_MODES,u=t("./PropertyNode"),d={verbose:!1,DEG_TO_RADS:Math.PI/180,rotatePoint:function(t,e){if(t){t*=d.DEG_TO_RADS;var i=Math.sin(t),s=Math.cos(t),a=e.x*s-e.y*i,r=e.x*i+e.y*s;e.x=a,e.y=r}},combineRGBComponents:function(t,e,i){return t<<16|e<<8|i},normalize:function(t){var e=1/d.length(t);t.x*=e,t.y*=e},scaleBy:function(t,e){t.x*=e,t.y*=e},length:function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},hexToRGB:function(t,e){var i;return e||(e={}),"#"==t.charAt(0)?t=t.substr(1):0===t.indexOf("0x")&&(t=t.substr(2)),8==t.length&&(i=t.substr(0,2),t=t.substr(2)),e.r=parseInt(t.substr(0,2),16),e.g=parseInt(t.substr(2,2),16),e.b=parseInt(t.substr(4,2),16),i&&(e.a=parseInt(i,16)),e},generateEase:function(a){var r=a.length,n=1/r;return function(t){var e,i,s=r*t|0;return e=(t-s*n)*r,(i=a[s]||a[r-1]).s+e*(2*(1-e)*(i.cp-i.s)+e*(i.e-i.s))}},getBlendMode:function(t){if(!t)return s.NORMAL;for(t=t.toUpperCase();0<=t.indexOf(" ");)t=t.replace(" ","_");return s[t]||s.NORMAL},createSteppedGradient:function(t,e){void 0===e&&(e=10),("number"!=typeof e||e<=0)&&(e=10);var i=new u.default(t[0].value,t[0].time);i.isStepped=!0;for(var s=i,a=t[0],r=1,n=t[r],o=1;o<e;++o){for(var h=o/e;h>n.time;)a=n,n=t[++r];h=(h-a.time)/(n.time-a.time);var l=d.hexToRGB(a.value),p=d.hexToRGB(n.value),c={};c.r=(p.r-l.r)*h+l.r,c.g=(p.g-l.g)*h+l.g,c.b=(p.b-l.b)*h+l.b,s.next=new u.default(c,o/e),s=s.next}return i}};i.default=d},{"./PropertyNode":7}],5:[function(t,e,i){"use strict";var s,a=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(i,"__esModule",{value:!0});var r=t("./ParticleUtils"),n=t("./Particle"),o=new PIXI.Point,h=["pow","sqrt","abs","floor","round","ceil","E","PI","sin","cos","tan","asin","acos","atan","atan2","log"],l=new RegExp(["[01234567890\\.\\*\\-\\+\\/\\(\\)x ,]"].concat(h).join("|"),"g"),p=function(i){function t(t){var e=i.call(this,t)||this;return e.path=null,e.initialRotation=0,e.initialPosition=new PIXI.Point,e.movement=0,e}return a(t,i),t.prototype.init=function(){this.initialRotation=this.rotation,this.Particle_init(),this.path=this.extraData.path,this._doNormalMovement=!this.path,this.movement=0,this.initialPosition.x=this.position.x,this.initialPosition.y=this.position.y},t.prototype.update=function(t){var e=this.Particle_update(t);if(0<=e&&this.path){var i=this.speedList.interpolate(e)*this.speedMultiplier;this.movement+=i*t,o.x=this.movement,o.y=this.path(this.movement),r.default.rotatePoint(this.initialRotation,o),this.position.x=this.initialPosition.x+o.x,this.position.y=this.initialPosition.y+o.y}return e},t.prototype.destroy=function(){this.Particle_destroy(),this.path=this.initialPosition=null},t.parseArt=function(t){return n.default.parseArt(t)},t.parseData=function(t){var e={};if(t&&t.path)try{e.path=function(t){for(var e=t.match(l),i=e.length-1;0<=i;--i)0<=h.indexOf(e[i])&&(e[i]="Math."+e[i]);return t=e.join(""),new Function("x","return "+t+";")}(t.path)}catch(t){r.default.verbose&&console.error("PathParticle: error in parsing path expression"),e.path=null}else r.default.verbose&&console.error("PathParticle requires a path string in extraData!"),e.path=null;return e},t}(n.default);i.default=p},{"./Particle":3,"./ParticleUtils":4}],6:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("./ParticleUtils"),s=function(){function t(t){void 0===t&&(t=!1),this.current=null,this.next=null,this.isColor=!!t,this.interpolate=null,this.ease=null}return t.prototype.reset=function(t){this.current=t,this.next=t.next,this.next&&1<=this.next.time?this.interpolate=this.isColor?r:a:t.isStepped?this.interpolate=this.isColor?p:l:this.interpolate=this.isColor?h:o,this.ease=this.current.ease},t}();function a(t){return this.ease&&(t=this.ease(t)),(this.next.value-this.current.value)*t+this.current.value}function r(t){this.ease&&(t=this.ease(t));var e=this.current.value,i=this.next.value,s=(i.r-e.r)*t+e.r,a=(i.g-e.g)*t+e.g,r=(i.b-e.b)*t+e.b;return n.default.combineRGBComponents(s,a,r)}function o(t){for(this.ease&&(t=this.ease(t));t>this.next.time;)this.current=this.next,this.next=this.next.next;return t=(t-this.current.time)/(this.next.time-this.current.time),(this.next.value-this.current.value)*t+this.current.value}function h(t){for(this.ease&&(t=this.ease(t));t>this.next.time;)this.current=this.next,this.next=this.next.next;t=(t-this.current.time)/(this.next.time-this.current.time);var e=this.current.value,i=this.next.value,s=(i.r-e.r)*t+e.r,a=(i.g-e.g)*t+e.g,r=(i.b-e.b)*t+e.b;return n.default.combineRGBComponents(s,a,r)}function l(t){for(this.ease&&(t=this.ease(t));this.next&&t>this.next.time;)this.current=this.next,this.next=this.next.next;return this.current.value}function p(t){for(this.ease&&(t=this.ease(t));this.next&&t>this.next.time;)this.current=this.next,this.next=this.next.next;var e=this.current.value;return n.default.combineRGBComponents(e.r,e.g,e.b)}i.default=s},{"./ParticleUtils":4}],7:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("./ParticleUtils"),a=function(){function n(t,e,i){this.value="string"==typeof t?s.default.hexToRGB(t):t,this.time=e,this.next=null,this.isStepped=!1,this.ease=i?"function"==typeof i?i:s.default.generateEase(i):null}return n.createList=function(t){if(Array.isArray(t.list)){var e=t.list,i=void 0,s=void 0;if(s=i=new n(e[0].value,e[0].time,t.ease),2<e.length||2===e.length&&e[1].value!==e[0].value)for(var a=1;a<e.length;++a)i.next=new n(e[a].value,e[a].time),i=i.next;return s.isStepped=!!t.isStepped,s}var r=new n(t.start,0);return t.end!==t.start&&(r.next=new n(t.end,1)),r},n}();i.default=a},{"./ParticleUtils":4}],8:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("./ParticleUtils.js");i.ParticleUtils=s.default;var a=t("./Particle.js");i.Particle=a.default;var r=t("./Emitter.js");i.Emitter=r.default;var n=t("./PathParticle.js");i.PathParticle=n.default;var o=t("./AnimatedParticle.js");i.AnimatedParticle=o.default},{"./AnimatedParticle.js":1,"./Emitter.js":2,"./Particle.js":3,"./ParticleUtils.js":4,"./PathParticle.js":5}],9:[function(t,e,i){"use strict";if(Object.defineProperty(i,"__esModule",{value:!0}),"undefined"==typeof PIXI)throw"pixi-particles requires pixi.js to be loaded first";PIXI.particles||(PIXI.particles={});var s=t("./particles");for(var a in s)PIXI.particles[a]=s[a]},{"./particles":8}]},{},[9])(9)});
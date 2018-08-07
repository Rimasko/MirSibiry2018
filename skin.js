// Garden Gnome Software - Skin
// Pano2VR 5.0.1/15068
// Filename: NewDesign2527.ggsk
// Generated Пн авг 6 12:28:07 2018

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/showpam__o.png';
		preLoadImg.src=basePath + 'images/goprev__o.png';
		preLoadImg.src=basePath + 'images/gotohome__o.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._controller=document.createElement('div');
		this._controller__img=document.createElement('img');
		this._controller__img.className='ggskin ggskin_svg';
		this._controller__img.setAttribute('src',basePath + 'MobilemapIconstAndText/plashka_bttns_bck.png');
		this._controller__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 8vh;height: 50vh;-webkit-user-drag:none;pointer-events:none;');
		this._controller__img['ondragstart']=function() { return false; };
		this._controller.appendChild(this._controller__img);
		this._controller.ggId="controller";
		
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container ';
		this._controller.ggType='container';
		hs ='';
		hs+='height : 50vh;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : inherit;';
		hs+='width : 8vh;';
		this._controller.setAttribute('style',hs);
		this._controller.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		me._controller.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._controller.ggCurrentLogicStatePosition = -1;
		this._controller.ggUpdateConditionTimer=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800) || 
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller.style[domTransition]='left none, top none';
				if (me._controller.ggCurrentLogicStatePosition == 0) {
					me._controller.style.left='5px';
					me._controller.ggTop=-125;
					me._controller.ggUpdatePosition();
				}
				else {
					me._controller.style.left='5px';
					me._controller.ggTop=-140;
					me._controller.ggUpdatePosition();
				}
			}
		}
		this._controller.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._zoomin=document.createElement('div');
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin__imgo=document.createElement('img');
		this._zoomin__imgo.className='ggskin ggskin_svg';
		this._zoomin__imgo.setAttribute('src',basePath + 'images/zoomin__o.svg');
		this._zoomin__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoomin__imgo['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__imgo);
		this._zoomin.ggId="zoomin";

		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg ';
		this._zoomin.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11.5%;';
		hs+='left : 13%;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomin.onmouseover=function () {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
		}
		this._zoomin.onmouseout=function () {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
		}
		this._zoomin.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin__text=document.createElement('div');
		this._tt_zoomin.className='ggskin ggskin_textdiv';
		this._tt_zoomin.ggTextDiv=this._tt_zoomin__text;
		this._tt_zoomin.ggId="tt_zoomin";
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		this._tt_zoomin.className='ggskin ggskin_text ';
		this._tt_zoomin.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 7vh;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_zoomin.setAttribute('style',hs);
		this._tt_zoomin.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin__text.setAttribute('style',hs);
		this._tt_zoomin__text.innerHTML="\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c";
		this._tt_zoomin.appendChild(this._tt_zoomin__text);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_zoomin.ggCurrentLogicStateVisible = -1;
		this._tt_zoomin.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['zoomin'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomin.style[domTransition]='';
				if (me._tt_zoomin.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
					me._tt_zoomin.ggVisible=true;
				}
				else {
					me._tt_zoomin.style.visibility="hidden";
					me._tt_zoomin.ggVisible=false;
				}
			}
		}
		this._tt_zoomin.ggUpdatePosition=function () {
		}
		this._tt_zoomin_white=document.createElement('div');
		this._tt_zoomin_white__text=document.createElement('div');
		this._tt_zoomin_white.className='ggskin ggskin_textdiv';
		this._tt_zoomin_white.ggTextDiv=this._tt_zoomin_white__text;
		this._tt_zoomin_white.ggId="tt_zoomin_white";
		this._tt_zoomin_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin_white.ggVisible=true;
		this._tt_zoomin_white.className='ggskin ggskin_text ';
		this._tt_zoomin_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_zoomin_white.setAttribute('style',hs);
		this._tt_zoomin_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin_white__text.setAttribute('style',hs);
		this._tt_zoomin_white__text.innerHTML="\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c";
		this._tt_zoomin_white.appendChild(this._tt_zoomin_white__text);
		me._tt_zoomin_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_zoomin_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_zoomin_white.ggUpdatePosition=function () {
		}
		this._tt_zoomin.appendChild(this._tt_zoomin_white);
		this._zoomin.appendChild(this._tt_zoomin);
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout__imgo=document.createElement('img');
		this._zoomout__imgo.className='ggskin ggskin_svg';
		this._zoomout__imgo.setAttribute('src',basePath + 'images/zoomout__o.svg');
		this._zoomout__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoomout__imgo['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__imgo);
		this._zoomout.ggId="zoomout";


		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg ';
		this._zoomout.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11.5%;';
		hs+='left : 13%;';
		hs+='position : absolute;';
		hs+='top : 37%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomout.onmouseover=function () {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
		}
		this._zoomout.onmouseout=function () {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
		}
		this._zoomout.ggUpdatePosition=function () {

		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout__text=document.createElement('div');
		this._tt_zoomout.className='ggskin ggskin_textdiv';
		this._tt_zoomout.ggTextDiv=this._tt_zoomout__text;
		this._tt_zoomout.ggId="tt_zoomout";
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		this._tt_zoomout.className='ggskin ggskin_text ';
		this._tt_zoomout.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 7vh;';
		hs+='position : absolute;';
		hs+='top :25%;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_zoomout.setAttribute('style',hs);
		this._tt_zoomout.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout__text.setAttribute('style',hs);
		this._tt_zoomout__text.innerHTML="\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c";
		this._tt_zoomout.appendChild(this._tt_zoomout__text);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_zoomout.ggCurrentLogicStateVisible = -1;
		this._tt_zoomout.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['zoomout'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomout.style[domTransition]='';
				if (me._tt_zoomout.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
					me._tt_zoomout.ggVisible=true;
				}
				else {
					me._tt_zoomout.style.visibility="hidden";
					me._tt_zoomout.ggVisible=false;
				}
			}
		}
		this._tt_zoomout.ggUpdatePosition=function () {
		}
		this._tt_zoomout_white=document.createElement('div');
		this._tt_zoomout_white__text=document.createElement('div');
		this._tt_zoomout_white.className='ggskin ggskin_textdiv';
		this._tt_zoomout_white.ggTextDiv=this._tt_zoomout_white__text;
		this._tt_zoomout_white.ggId="tt_zoomout_white";
		this._tt_zoomout_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout_white.ggVisible=true;
		this._tt_zoomout_white.className='ggskin ggskin_text ';
		this._tt_zoomout_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_zoomout_white.setAttribute('style',hs);
		this._tt_zoomout_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout_white__text.setAttribute('style',hs);
		this._tt_zoomout_white__text.innerHTML="\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c";
		this._tt_zoomout_white.appendChild(this._tt_zoomout_white__text);
		me._tt_zoomout_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_zoomout_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_zoomout_white.ggUpdatePosition=function () {
		}
		this._tt_zoomout.appendChild(this._tt_zoomout_white);
		this._zoomout.appendChild(this._tt_zoomout);
		this._controller.appendChild(this._zoomout);
		this._button_simplex_auto_rotate=document.createElement('div');
		this._button_simplex_auto_rotate.ggId="button_simplex_auto_rotate";


		this._button_simplex_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_simplex_auto_rotate.ggVisible=true;
		this._button_simplex_auto_rotate.className='ggskin ggskin_container ';
		this._button_simplex_auto_rotate.ggType='container';
		hs ='';
		hs+='height : 11.5%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 76%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		this._button_simplex_auto_rotate.setAttribute('style',hs);
		this._button_simplex_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._button_simplex_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_simplex_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_simplex_auto_rotate.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._button_stop_auto_rotate=document.createElement('div');
		this._button_stop_auto_rotate__img=document.createElement('img');
		this._button_stop_auto_rotate__img.className='ggskin ggskin_svg';
		this._button_stop_auto_rotate__img.setAttribute('src',basePath + 'images/button_stop_auto_rotate.svg');
		this._button_stop_auto_rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_stop_auto_rotate__img['ondragstart']=function() { return false; };
		this._button_stop_auto_rotate.appendChild(this._button_stop_auto_rotate__img);
		this._button_stop_auto_rotate__imgo=document.createElement('img');
		this._button_stop_auto_rotate__imgo.className='ggskin ggskin_svg';
		this._button_stop_auto_rotate__imgo.setAttribute('src',basePath + 'images/button_stop_auto_rotate__o.svg');
		this._button_stop_auto_rotate__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_stop_auto_rotate__imgo['ondragstart']=function() { return false; };
		this._button_stop_auto_rotate.appendChild(this._button_stop_auto_rotate__imgo);
		this._button_stop_auto_rotate.ggId="button stop auto rotate";
		this._button_stop_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_stop_auto_rotate.ggVisible=false;
		this._button_stop_auto_rotate.className='ggskin ggskin_svg ';
		this._button_stop_auto_rotate.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._button_stop_auto_rotate.setAttribute('style',hs);
		this._button_stop_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._button_stop_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_stop_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_stop_auto_rotate.onclick=function () {
			me.player.stopAutorotate();
			me._button_stop_auto_rotate.style[domTransition]='none';
			me._button_stop_auto_rotate.style.visibility='hidden';
			me._button_stop_auto_rotate.ggVisible=false;
			me._button_start_auto_rotate.style[domTransition]='none';
			me._button_start_auto_rotate.style.visibility=(Number(me._button_start_auto_rotate.style.opacity)>0||!me._button_start_auto_rotate.style.opacity)?'inherit':'hidden';
			me._button_start_auto_rotate.ggVisible=true;
		}
		this._button_stop_auto_rotate.onmouseover=function () {
			me._button_stop_auto_rotate__img.style.visibility='hidden';
			me._button_stop_auto_rotate__imgo.style.visibility='inherit';
			me.elementMouseOver['button_stop_auto_rotate']=true;
		}
		this._button_stop_auto_rotate.onmouseout=function () {
			me._button_stop_auto_rotate__img.style.visibility='inherit';
			me._button_stop_auto_rotate__imgo.style.visibility='hidden';
			me.elementMouseOver['button_stop_auto_rotate']=false;
		}
		this._button_stop_auto_rotate.ontouchend=function () {
			me.elementMouseOver['button_stop_auto_rotate']=false;
		}
		this._button_stop_auto_rotate.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate=document.createElement('div');
		this._tt_stop_auto_rotate__text=document.createElement('div');
		this._tt_stop_auto_rotate.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate.ggTextDiv=this._tt_stop_auto_rotate__text;
		this._tt_stop_auto_rotate.ggId="tt_stop_auto_rotate";
		this._tt_stop_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate.ggVisible=false;
		this._tt_stop_auto_rotate.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate.ggType='text';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 10vh;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._tt_stop_auto_rotate.setAttribute('style',hs);
		this._tt_stop_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate__text.innerHTML="\u0410\u0432\u0442\u043e\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0432\u044b\u043a\u043b";
		this._tt_stop_auto_rotate.appendChild(this._tt_stop_auto_rotate__text);
		me._tt_stop_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_stop_auto_rotate.ggCurrentLogicStateVisible = -1;
		this._tt_stop_auto_rotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_stop_auto_rotate'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_stop_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_stop_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_stop_auto_rotate.style[domTransition]='';
				if (me._tt_stop_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_stop_auto_rotate.style.visibility=(Number(me._tt_stop_auto_rotate.style.opacity)>0||!me._tt_stop_auto_rotate.style.opacity)?'inherit':'hidden';
					me._tt_stop_auto_rotate.ggVisible=true;
				}
				else {
					me._tt_stop_auto_rotate.style.visibility="hidden";
					me._tt_stop_auto_rotate.ggVisible=false;
				}
			}
		}
		this._tt_stop_auto_rotate.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate_white=document.createElement('div');
		this._tt_stop_auto_rotate_white__text=document.createElement('div');
		this._tt_stop_auto_rotate_white.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate_white.ggTextDiv=this._tt_stop_auto_rotate_white__text;
		this._tt_stop_auto_rotate_white.ggId="tt_stop_auto_rotate_white";
		this._tt_stop_auto_rotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate_white.ggVisible=true;
		this._tt_stop_auto_rotate_white.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_stop_auto_rotate_white.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate_white__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white__text.innerHTML="\u0410\u0432\u0442\u043e\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0432\u044b\u043a\u043b";
		this._tt_stop_auto_rotate_white.appendChild(this._tt_stop_auto_rotate_white__text);
		me._tt_stop_auto_rotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_stop_auto_rotate_white.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate.appendChild(this._tt_stop_auto_rotate_white);
		this._button_stop_auto_rotate.appendChild(this._tt_stop_auto_rotate);
		this._button_simplex_auto_rotate.appendChild(this._button_stop_auto_rotate);
		this._button_start_auto_rotate=document.createElement('div');
		this._button_start_auto_rotate__img=document.createElement('img');
		this._button_start_auto_rotate__img.className='ggskin ggskin_svg';
		this._button_start_auto_rotate__img.setAttribute('src',basePath + 'images/button_start_auto_rotate.svg');
		this._button_start_auto_rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_start_auto_rotate__img['ondragstart']=function() { return false; };
		this._button_start_auto_rotate.appendChild(this._button_start_auto_rotate__img);
		this._button_start_auto_rotate__imgo=document.createElement('img');
		this._button_start_auto_rotate__imgo.className='ggskin ggskin_svg';
		this._button_start_auto_rotate__imgo.setAttribute('src',basePath + 'images/button_start_auto_rotate__o.svg');
		this._button_start_auto_rotate__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_start_auto_rotate__imgo['ondragstart']=function() { return false; };
		this._button_start_auto_rotate.appendChild(this._button_start_auto_rotate__imgo);
		this._button_start_auto_rotate.ggId="button start auto rotate";
		this._button_start_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_start_auto_rotate.ggVisible=true;
		this._button_start_auto_rotate.className='ggskin ggskin_svg ';
		this._button_start_auto_rotate.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._button_start_auto_rotate.setAttribute('style',hs);
		this._button_start_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._button_start_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_start_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_start_auto_rotate.onclick=function () {
			me.player.startAutorotate(0.1,5,1);
			me._button_start_auto_rotate.style[domTransition]='none';
			me._button_start_auto_rotate.style.visibility='hidden';
			me._button_start_auto_rotate.ggVisible=false;
			me._button_stop_auto_rotate.style[domTransition]='none';
			me._button_stop_auto_rotate.style.visibility=(Number(me._button_stop_auto_rotate.style.opacity)>0||!me._button_stop_auto_rotate.style.opacity)?'inherit':'hidden';
			me._button_stop_auto_rotate.ggVisible=true;
		}
		this._button_start_auto_rotate.onmouseover=function () {
			me._button_start_auto_rotate__img.style.visibility='hidden';
			me._button_start_auto_rotate__imgo.style.visibility='inherit';
			me.elementMouseOver['button_start_auto_rotate']=true;
		}
		this._button_start_auto_rotate.onmouseout=function () {
			me._button_start_auto_rotate__img.style.visibility='inherit';
			me._button_start_auto_rotate__imgo.style.visibility='hidden';
			me.elementMouseOver['button_start_auto_rotate']=false;
		}
		this._button_start_auto_rotate.ontouchend=function () {
			me.elementMouseOver['button_start_auto_rotate']=false;
		}
		this._button_start_auto_rotate.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate=document.createElement('div');
		this._tt_start_auto_rotate__text=document.createElement('div');
		this._tt_start_auto_rotate.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate.ggTextDiv=this._tt_start_auto_rotate__text;
		this._tt_start_auto_rotate.ggId="tt_start_auto_rotate";
		this._tt_start_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate.ggVisible=false;
		this._tt_start_auto_rotate.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 7vh;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_start_auto_rotate.setAttribute('style',hs);
		this._tt_start_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate__text.setAttribute('style',hs);
		this._tt_start_auto_rotate__text.innerHTML="\u0410\u0432\u0442\u043e\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0432\u043a\u043b";
		this._tt_start_auto_rotate.appendChild(this._tt_start_auto_rotate__text);
		me._tt_start_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_start_auto_rotate.ggCurrentLogicStateVisible = -1;
		this._tt_start_auto_rotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_start_auto_rotate'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_start_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_start_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_start_auto_rotate.style[domTransition]='';
				if (me._tt_start_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_start_auto_rotate.style.visibility=(Number(me._tt_start_auto_rotate.style.opacity)>0||!me._tt_start_auto_rotate.style.opacity)?'inherit':'hidden';
					me._tt_start_auto_rotate.ggVisible=true;
				}
				else {
					me._tt_start_auto_rotate.style.visibility="hidden";
					me._tt_start_auto_rotate.ggVisible=false;
				}
			}
		}
		this._tt_start_auto_rotate.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate_white=document.createElement('div');
		this._tt_start_auto_rotate_white__text=document.createElement('div');
		this._tt_start_auto_rotate_white.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate_white.ggTextDiv=this._tt_start_auto_rotate_white__text;
		this._tt_start_auto_rotate_white.ggId="tt_start_auto_rotate_white";
		this._tt_start_auto_rotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate_white.ggVisible=true;
		this._tt_start_auto_rotate_white.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_start_auto_rotate_white.setAttribute('style',hs);
		this._tt_start_auto_rotate_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate_white__text.setAttribute('style',hs);
		this._tt_start_auto_rotate_white__text.innerHTML="\u0410\u0432\u0442\u043e\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0432\u043a\u043b";
		this._tt_start_auto_rotate_white.appendChild(this._tt_start_auto_rotate_white__text);
		me._tt_start_auto_rotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_start_auto_rotate_white.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate.appendChild(this._tt_start_auto_rotate_white);
		this._button_start_auto_rotate.appendChild(this._tt_start_auto_rotate);
		this._button_simplex_auto_rotate.appendChild(this._button_start_auto_rotate);
		this._controller.appendChild(this._button_simplex_auto_rotate);
		this._info=document.createElement('div');
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'images/info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info__imgo=document.createElement('img');
		this._info__imgo.className='ggskin ggskin_svg';
		this._info__imgo.setAttribute('src',basePath + 'images/info__o.svg');
		this._info__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._info__imgo['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__imgo);
		this._info.ggId="info";

	
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg ';
		this._info.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11.5%;';
		hs+='left : 12%;';
		hs+='position : absolute;';
		hs+='top : 87%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		this._info.setAttribute('style',hs);
		this._info.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility=(Number(me._userdata.style.opacity)>0||!me._userdata.style.opacity)?'inherit':'hidden';
			me._userdata.ggVisible=true;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility=(Number(me._screentint.style.opacity)>0||!me._screentint.style.opacity)?'inherit':'hidden';
			me._screentint.ggVisible=true;
		}
		this._info.onmouseover=function () {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
			me.elementMouseOver['info']=true;
		}
		this._info.onmouseout=function () {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
			me.elementMouseOver['info']=false;
		}
		this._info.ontouchend=function () {
			me.elementMouseOver['info']=false;
		}
		this._info.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._tt_info=document.createElement('div');
		this._tt_info__text=document.createElement('div');
		this._tt_info.className='ggskin ggskin_textdiv';
		this._tt_info.ggTextDiv=this._tt_info__text;
		this._tt_info.ggId="tt_info";
		this._tt_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info.ggVisible=false;
		this._tt_info.className='ggskin ggskin_text ';
		this._tt_info.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 8vh;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_info.setAttribute('style',hs);
		this._tt_info.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info__text.setAttribute('style',hs);
		this._tt_info__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e";
		this._tt_info.appendChild(this._tt_info__text);
		me._tt_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_info.ggCurrentLogicStateVisible = -1;
		this._tt_info.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['info'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_info.style[domTransition]='';
				if (me._tt_info.ggCurrentLogicStateVisible == 0) {
					me._tt_info.style.visibility=(Number(me._tt_info.style.opacity)>0||!me._tt_info.style.opacity)?'inherit':'hidden';
					me._tt_info.ggVisible=true;
				}
				else {
					me._tt_info.style.visibility="hidden";
					me._tt_info.ggVisible=false;
				}
			}
		}
		this._tt_info.ggUpdatePosition=function () {
		}
		this._tt_info_white=document.createElement('div');
		this._tt_info_white__text=document.createElement('div');
		this._tt_info_white.className='ggskin ggskin_textdiv';
		this._tt_info_white.ggTextDiv=this._tt_info_white__text;
		this._tt_info_white.ggId="tt_info_white";
		this._tt_info_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info_white.ggVisible=true;
		this._tt_info_white.className='ggskin ggskin_text ';
		this._tt_info_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_info_white.setAttribute('style',hs);
		this._tt_info_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info_white__text.setAttribute('style',hs);
		this._tt_info_white__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e";
		this._tt_info_white.appendChild(this._tt_info_white__text);
		me._tt_info_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_info_white.ggUpdatePosition=function () {
		}
		this._tt_info.appendChild(this._tt_info_white);
		this._info.appendChild(this._tt_info);
		this._controller.appendChild(this._info);
		this._button_simplex_fullscreen=document.createElement('div');
		this._button_simplex_fullscreen.ggId="button_simplex_fullscreen";

		this._button_simplex_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_simplex_fullscreen.ggVisible=true;
		this._button_simplex_fullscreen.className='ggskin ggskin_container ';
		this._button_simplex_fullscreen.ggType='container';
		hs ='';
		hs+='height : 11.5%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 1%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		this._button_simplex_fullscreen.setAttribute('style',hs);
		this._button_simplex_fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_simplex_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_simplex_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._button_simplex_fullscreen.ggCurrentLogicStateVisible = -1;
		this._button_simplex_fullscreen.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_simplex_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_simplex_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_simplex_fullscreen.style[domTransition]='';
				if (me._button_simplex_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_simplex_fullscreen.style.visibility="hidden";
					me._button_simplex_fullscreen.ggVisible=false;
				}
				else {
					me._button_simplex_fullscreen.style.visibility=(Number(me._button_simplex_fullscreen.style.opacity)>0||!me._button_simplex_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_simplex_fullscreen.ggVisible=true;
				}
			}
		}
		this._button_simplex_fullscreen.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._button_simplex_fullscreen.ggNodeChange=function () {
			me._button_simplex_fullscreen.ggUpdateConditionNodeChange();
		}
		this._button_image_normalscreen=document.createElement('div');
		this._button_image_normalscreen__img=document.createElement('img');
		this._button_image_normalscreen__img.className='ggskin ggskin_svg';
		this._button_image_normalscreen__img.setAttribute('src',basePath + 'images/button_image_normalscreen.svg');
		this._button_image_normalscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_normalscreen__img['ondragstart']=function() { return false; };
		this._button_image_normalscreen.appendChild(this._button_image_normalscreen__img);
		this._button_image_normalscreen__imgo=document.createElement('img');
		this._button_image_normalscreen__imgo.className='ggskin ggskin_svg';
		this._button_image_normalscreen__imgo.setAttribute('src',basePath + 'images/button_image_normalscreen__o.svg');
		this._button_image_normalscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_normalscreen__imgo['ondragstart']=function() { return false; };
		this._button_image_normalscreen.appendChild(this._button_image_normalscreen__imgo);
		this._button_image_normalscreen.ggId="button_image_normalscreen";
		this._button_image_normalscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_normalscreen.ggVisible=false;
		this._button_image_normalscreen.className='ggskin ggskin_svg ';
		this._button_image_normalscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 3%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 102%;';
		this._button_image_normalscreen.setAttribute('style',hs);
		this._button_image_normalscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_normalscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_normalscreen.onclick=function () {
			me.player.exitFullscreen();
		}
		this._button_image_normalscreen.onmouseover=function () {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_normalscreen']=true;
		}
		this._button_image_normalscreen.onmouseout=function () {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		this._button_image_normalscreen.ontouchend=function () {
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		me._button_image_normalscreen.ggCurrentLogicStateVisible = -1;
		this._button_image_normalscreen.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		this._button_image_normalscreen.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._button_image_normalscreen.ggUpdateConditionResize();
		}
		this._tt_exit_fullscreen=document.createElement('div');
		this._tt_exit_fullscreen__text=document.createElement('div');
		this._tt_exit_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_exit_fullscreen.ggTextDiv=this._tt_exit_fullscreen__text;
		this._tt_exit_fullscreen.ggId="tt_exit_fullscreen";
		this._tt_exit_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_exit_fullscreen.ggVisible=false;
		this._tt_exit_fullscreen.className='ggskin ggskin_text ';
		this._tt_exit_fullscreen.ggType='text';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 7vh;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._tt_exit_fullscreen.setAttribute('style',hs);
		this._tt_exit_fullscreen.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 278px;';
		hs+='height: 26px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_exit_fullscreen__text.setAttribute('style',hs);
		this._tt_exit_fullscreen__text.innerHTML="\u0412\u044b\u0445\u043e\u0434 \u0438\u0437 \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0436\u0438\u043c\u0430";
		this._tt_exit_fullscreen.appendChild(this._tt_exit_fullscreen__text);
		me._tt_exit_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_exit_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_exit_fullscreen.ggCurrentLogicStateVisible = -1;
		this._tt_exit_fullscreen.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_image_normalscreen'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_exit_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_exit_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_exit_fullscreen.style[domTransition]='';
				if (me._tt_exit_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_exit_fullscreen.style.visibility=(Number(me._tt_exit_fullscreen.style.opacity)>0||!me._tt_exit_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_exit_fullscreen.ggVisible=true;
				}
				else {
					me._tt_exit_fullscreen.style.visibility="hidden";
					me._tt_exit_fullscreen.ggVisible=false;
				}
			}
		}
		this._tt_exit_fullscreen.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._tt_exit_fullscreen_white=document.createElement('div');
		this._tt_exit_fullscreen_white__text=document.createElement('div');
		this._tt_exit_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_exit_fullscreen_white.ggTextDiv=this._tt_exit_fullscreen_white__text;
		this._tt_exit_fullscreen_white.ggId="tt_exit_fullscreen_white";
		this._tt_exit_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_exit_fullscreen_white.ggVisible=true;
		this._tt_exit_fullscreen_white.className='ggskin ggskin_text ';
		this._tt_exit_fullscreen_white.ggType='text';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 279px;';
		this._tt_exit_fullscreen_white.setAttribute('style',hs);
		this._tt_exit_fullscreen_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 279px;';
		hs+='height: 35px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_exit_fullscreen_white__text.setAttribute('style',hs);
		this._tt_exit_fullscreen_white__text.innerHTML="\u0412\u044b\u0445\u043e\u0434 \u0438\u0437 \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0436\u0438\u043c\u0430";
		this._tt_exit_fullscreen_white.appendChild(this._tt_exit_fullscreen_white__text);
		me._tt_exit_fullscreen_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_exit_fullscreen_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_exit_fullscreen_white.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._tt_exit_fullscreen.appendChild(this._tt_exit_fullscreen_white);
		this._button_image_normalscreen.appendChild(this._tt_exit_fullscreen);
		this._button_simplex_fullscreen.appendChild(this._button_image_normalscreen);
		this._button_image_fullscreen=document.createElement('div');
		this._button_image_fullscreen__img=document.createElement('img');
		this._button_image_fullscreen__img.className='ggskin ggskin_svg';
		this._button_image_fullscreen__img.setAttribute('src',basePath + 'images/button_image_fullscreen.svg');
		this._button_image_fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_fullscreen__img['ondragstart']=function() { return false; };
		this._button_image_fullscreen.appendChild(this._button_image_fullscreen__img);
		this._button_image_fullscreen__imgo=document.createElement('img');
		this._button_image_fullscreen__imgo.className='ggskin ggskin_svg';
		this._button_image_fullscreen__imgo.setAttribute('src',basePath + 'images/button_image_fullscreen__o.svg');
		this._button_image_fullscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_fullscreen__imgo['ondragstart']=function() { return false; };
		this._button_image_fullscreen.appendChild(this._button_image_fullscreen__imgo);
		this._button_image_fullscreen.ggId="button_image_fullscreen";
		this._button_image_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_fullscreen.ggVisible=true;
		this._button_image_fullscreen.className='ggskin ggskin_svg ';
		this._button_image_fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0;';
		hs+='position : absolute;';
		hs+='top : 0;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._button_image_fullscreen.setAttribute('style',hs);
		this._button_image_fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_fullscreen.onclick=function () {
			me.player.enterFullscreen();
		}
		this._button_image_fullscreen.onmouseover=function () {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_fullscreen']=true;
		}
		this._button_image_fullscreen.onmouseout=function () {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		this._button_image_fullscreen.ontouchend=function () {
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ggCurrentLogicStateVisible = -1;
		this._button_image_fullscreen.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		this._button_image_fullscreen.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._button_image_fullscreen.ggUpdateConditionResize();
		}
		this._tt_enter_fullscreen=document.createElement('div');
		this._tt_enter_fullscreen__text=document.createElement('div');
		this._tt_enter_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_enter_fullscreen.ggTextDiv=this._tt_enter_fullscreen__text;
		this._tt_enter_fullscreen.ggId="tt_enter_fullscreen";
		this._tt_enter_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_enter_fullscreen.ggVisible=false;
		this._tt_enter_fullscreen.className='ggskin ggskin_text ';
		this._tt_enter_fullscreen.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 7vh;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_enter_fullscreen.setAttribute('style',hs);
		this._tt_enter_fullscreen.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_enter_fullscreen__text.setAttribute('style',hs);
		this._tt_enter_fullscreen__text.innerHTML="\u041f\u043e\u043b\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d";
		this._tt_enter_fullscreen.appendChild(this._tt_enter_fullscreen__text);
		me._tt_enter_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_enter_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_enter_fullscreen.ggCurrentLogicStateVisible = -1;
		this._tt_enter_fullscreen.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_image_fullscreen'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_fullscreen.style[domTransition]='';
				if (me._tt_enter_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_fullscreen.style.visibility=(Number(me._tt_enter_fullscreen.style.opacity)>0||!me._tt_enter_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_enter_fullscreen.ggVisible=true;
				}
				else {
					me._tt_enter_fullscreen.style.visibility="hidden";
					me._tt_enter_fullscreen.ggVisible=false;
				}
			}
		}
		this._tt_enter_fullscreen.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._tt_enter_fullscreen_white=document.createElement('div');
		this._tt_enter_fullscreen_white__text=document.createElement('div');
		this._tt_enter_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_enter_fullscreen_white.ggTextDiv=this._tt_enter_fullscreen_white__text;
		this._tt_enter_fullscreen_white.ggId="tt_enter_fullscreen_white";
		this._tt_enter_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_enter_fullscreen_white.ggVisible=true;
		this._tt_enter_fullscreen_white.className='ggskin ggskin_text ';
		this._tt_enter_fullscreen_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_enter_fullscreen_white.setAttribute('style',hs);
		this._tt_enter_fullscreen_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_enter_fullscreen_white__text.setAttribute('style',hs);
		this._tt_enter_fullscreen_white__text.innerHTML="\u041f\u043e\u043b\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d";
		this._tt_enter_fullscreen_white.appendChild(this._tt_enter_fullscreen_white__text);
		me._tt_enter_fullscreen_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_enter_fullscreen_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_enter_fullscreen_white.ggUpdatePosition=function () {
		}
		this._tt_enter_fullscreen.appendChild(this._tt_enter_fullscreen_white);
		this._button_image_fullscreen.appendChild(this._tt_enter_fullscreen);
		this._button_simplex_fullscreen.appendChild(this._button_image_fullscreen);
		this._controller.appendChild(this._button_simplex_fullscreen);
		this._showpam=document.createElement('div');
		this._showpam__img=document.createElement('img');
		this._showpam__img.className='ggskin ggskin_button';
		this._showpam__img.setAttribute('src',basePath + 'images/showpam.png');
		this._showpam__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._showpam__img.className='ggskin ggskin_button';
		this._showpam__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._showpam__img);
		this._showpam.appendChild(this._showpam__img);
		this._showpam.ggId="ShowPam";


		this._showpam.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._showpam.ggVisible=true;
		this._showpam.className='ggskin ggskin_button ';
		this._showpam.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11.5%;';
		hs+='left : 14%;';
		hs+='position : absolute;';
		hs+='top : 13%;';
		hs+='visibility : inherit;';
		hs+='width : 72%;';
		this._showpam.setAttribute('style',hs);
		this._showpam.style[domTransform + 'Origin']='50% 50%';
		me._showpam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._showpam.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._showpam.onclick=function () {
			if ((me.player.getViewerSize().width <= 600) || (me.player.getIsMobile() == true))
			{
				if( me.mapforMobile.style.visibility==='hidden')
				 me.mapforMobile.style.visibility='inherit';
				 else
				 me.mapforMobile.style.visibility='hidden';
			}
			else{
		me._chemamap.ggVisible = !me._chemamap.ggVisible;
		me._chemamap.style[domTransition]='none';
		me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
			}	
		}
		this._showpam.onmouseover=function () {
			me._maptext.style[domTransition]='none';
			me._maptext.style.visibility=(Number(me._maptext.style.opacity)>0||!me._maptext.style.opacity)?'inherit':'hidden';
			me._maptext.ggVisible=true;
			me._showpam__img.src=basePath + 'images/showpam__o.png';
		}
		this._showpam.onmouseout=function () {
			me._maptext.style[domTransition]='none';
			me._maptext.style.visibility='hidden';
			me._maptext.ggVisible=false;
			me._showpam__img.src=basePath + 'images/showpam.png';
		}
		this._showpam.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._maptext=document.createElement('div');
		this._maptext__text=document.createElement('div');
		this._maptext.className='ggskin ggskin_textdiv';
		this._maptext.ggTextDiv=this._maptext__text;
		this._maptext.ggId="mapText";
		this._maptext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._maptext.ggVisible=false;
		this._maptext.className='ggskin ggskin_text ';
		this._maptext.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 7vh;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : hidden;';
		hs+='width : 164px;';
		this._maptext.setAttribute('style',hs);
		this._maptext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 164px;';
		hs+='height: auto;';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._maptext__text.setAttribute('style',hs);
		this._maptext__text.innerHTML="\u041a\u0430\u0440\u0442\u0430";
		this._maptext.appendChild(this._maptext__text);
		me._maptext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._maptext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._maptext.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._maptextback=document.createElement('div');
		this._maptextback__text=document.createElement('div');
		this._maptextback.className='ggskin ggskin_textdiv';
		this._maptextback.ggTextDiv=this._maptextback__text;
		this._maptextback.ggId="mapTextback";
		this._maptextback.ggLeft=-81;
		this._maptextback.ggTop=-17;
		this._maptextback.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._maptextback.ggVisible=true;
		this._maptextback.className='ggskin ggskin_text ';
		this._maptextback.ggType='text';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -84px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 162px;';
		this._maptextback.setAttribute('style',hs);
		this._maptextback.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._maptextback__text.setAttribute('style',hs);
		this._maptextback__text.innerHTML="\u041a\u0430\u0440\u0442\u0430";
		this._maptextback.appendChild(this._maptextback__text);
		me._maptextback.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._maptextback.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._maptextback.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 1 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 1 + h/2) + 'px';
			}
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((164-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._maptext.appendChild(this._maptextback);
		this._showpam.appendChild(this._maptext);
		this._controller.appendChild(this._showpam);
		this._goprev=document.createElement('div');
		this._goprev__img=document.createElement('img');
		this._goprev__img.className='ggskin ggskin_button';
		this._goprev__img.setAttribute('src',basePath + 'images/goprev.png');
		this._goprev__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: auto;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._goprev__img.className='ggskin ggskin_button';
		this._goprev__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._goprev__img);
		this._goprev.appendChild(this._goprev__img);
		this._goprev.ggId="GoPrev";

		this._goprev.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._goprev.ggVisible=true;
		this._goprev.className='ggskin ggskin_button ';
		this._goprev.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11.5%;';
		hs+='left : 13%;';
		hs+='position : absolute;';
		hs+='top : 61%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		this._goprev.setAttribute('style',hs);
		this._goprev.style[domTransform + 'Origin']='50% 50%';
		me._goprev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._goprev.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._goprev.onclick=function () {
			var GoprevPoint = getLastScene();
		   if(GoprevPoint!=null)
		   {
			  if(GoprevPoint.XYZOr==null)
			  {
				me.player.openNext("{node77}","");
			  }
			  else
			  {
			  me.player.openNext(GoprevPoint.name,GoprevPoint.XYZOr.pan+"\/"+GoprevPoint.XYZOr.tilt+"\/"+GoprevPoint.XYZOr.hfov);
			  }
			  nodes.pop();
		   }
		   else{
			me.player.openNext("{node77}","");
		   }
		}
		this._goprev.onmouseover=function () {
			me._goprevtext.style[domTransition]='none';
			me._goprevtext.style.visibility=(Number(me._goprevtext.style.opacity)>0||!me._goprevtext.style.opacity)?'inherit':'hidden';
			me._goprevtext.ggVisible=true;
			me._goprev__img.src=basePath + 'images/goprev__o.png';
		}
		this._goprev.onmouseout=function () {
			me._goprevtext.style[domTransition]='none';
			me._goprevtext.style.visibility='hidden';
			me._goprevtext.ggVisible=false;
			me._goprev__img.src=basePath + 'images/goprev.png';
		}
		this._goprev.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._goprevtext=document.createElement('div');
		this._goprevtext__text=document.createElement('div');
		this._goprevtext.className='ggskin ggskin_textdiv';
		this._goprevtext.ggTextDiv=this._goprevtext__text;
		this._goprevtext.ggId="goprevText";
		this._goprevtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._goprevtext.ggVisible=false;
		this._goprevtext.className='ggskin ggskin_text ';
		this._goprevtext.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 7vh;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : hidden;';
		hs+='width : 164px;';
		this._goprevtext.setAttribute('style',hs);
		this._goprevtext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 164px;';
		hs+='height: auto;';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._goprevtext__text.setAttribute('style',hs);
		this._goprevtext__text.innerHTML="\u041d\u0430\u0437\u0430\u0434";
		this._goprevtext.appendChild(this._goprevtext__text);
		me._goprevtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._goprevtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._goprevtext.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._goprevtextback=document.createElement('div');
		this._goprevtextback__text=document.createElement('div');
		this._goprevtextback.className='ggskin ggskin_textdiv';
		this._goprevtextback.ggTextDiv=this._goprevtextback__text;
		this._goprevtextback.ggId="goprevTextback";
		this._goprevtextback.ggLeft=-81;
		this._goprevtextback.ggTop=-17;
		this._goprevtextback.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._goprevtextback.ggVisible=true;
		this._goprevtextback.className='ggskin ggskin_text ';
		this._goprevtextback.ggType='text';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -81px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 162px;';
		this._goprevtextback.setAttribute('style',hs);
		this._goprevtextback.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._goprevtextback__text.setAttribute('style',hs);
		this._goprevtextback__text.innerHTML="\u041d\u0430\u0437\u0430\u0434";
		this._goprevtextback.appendChild(this._goprevtextback__text);
		me._goprevtextback.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._goprevtextback.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._goprevtextback.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 1 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 1 + h/2) + 'px';
			}
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((164-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._goprevtext.appendChild(this._goprevtextback);
		this._goprev.appendChild(this._goprevtext);
		this._controller.appendChild(this._goprev);
		this._gotohome=document.createElement('div');
		this._gotohome__img=document.createElement('img');
		this._gotohome__img.className='ggskin ggskin_button';
		this._gotohome__img.setAttribute('src',basePath + 'images/gotohome.png');
		this._gotohome__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gotohome__img.className='ggskin ggskin_button';
		this._gotohome__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gotohome__img);
		this._gotohome.appendChild(this._gotohome__img);
		this._gotohome.ggId="GotoHome";
		this._gotohome.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };

		this._gotohome.ggVisible=true;
		this._gotohome.className='ggskin ggskin_button ';
		this._gotohome.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11.5%;';
		hs+='left : 13%;';
		hs+='position : absolute;';
		hs+='top : 49%;';
		hs+='visibility : inherit;';
		hs+='width : 72%;';
		this._gotohome.setAttribute('style',hs);
		this._gotohome.style[domTransform + 'Origin']='50% 50%';
		me._gotohome.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gotohome.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gotohome.onclick=function () {
			var GoprevPoint = getLastScene();
		   if(GoprevPoint!=null)
		   {
			  if(GoprevPoint.XYZOr==null)
			  {
				me.player.openNext("{node77}","");
			  }
			  else
			  {
			  me.player.openNext("{node77}",GoprevPoint.XYZOr.pan+"\/"+GoprevPoint.XYZOr.tilt+"\/"+GoprevPoint.XYZOr.hfov);
			  }
			  nodes.pop();
		   }
		   else{
			me.player.openNext("{node77}","");
		   }
		}
		this._gotohome.onmouseover=function () {
			me._gotohome__img.src=basePath + 'images/gotohome__o.png';
			me.elementMouseOver['gotohome']=true;
		}
		this._gotohome.onmouseout=function () {
			me._gotohometext.style[domTransition]='none';
			me._gotohometext.style.visibility='hidden';
			me._gotohometext.ggVisible=false;
			me._gotohome__img.src=basePath + 'images/gotohome.png';
			me.elementMouseOver['gotohome']=false;
		}
		this._gotohome.ontouchend=function () {
			me.elementMouseOver['gotohome']=false;
		}
		this._gotohome.ggUpdatePosition=function () {
		
		}
		this._gotohometext=document.createElement('div');
		this._gotohometext__text=document.createElement('div');
		this._gotohometext.className='ggskin ggskin_textdiv';
		this._gotohometext.ggTextDiv=this._gotohometext__text;
		this._gotohometext.ggId="goToHomeText";
		this._gotohometext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gotohometext.ggVisible=false;
		this._gotohometext.className='ggskin ggskin_text ';
		this._gotohometext.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 7vh;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : hidden;';
		hs+='width : 164px;';
		this._gotohometext.setAttribute('style',hs);
		this._gotohometext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 164px;';
		hs+='height: auto;';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._gotohometext__text.setAttribute('style',hs);
		this._gotohometext__text.innerHTML="\u0414\u043e\u043c\u043e\u0439";
		this._gotohometext.appendChild(this._gotohometext__text);
		me._gotohometext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gotohometext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gotohometext.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._tgotohomeextback=document.createElement('div');
		this._tgotohomeextback__text=document.createElement('div');
		this._tgotohomeextback.className='ggskin ggskin_textdiv';
		this._tgotohomeextback.ggTextDiv=this._tgotohomeextback__text;
		this._tgotohomeextback.ggId="TGotoHomeextback";
		this._tgotohomeextback.ggLeft=-81;
		this._tgotohomeextback.ggTop=-17;
		this._tgotohomeextback.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tgotohomeextback.ggVisible=true;
		this._tgotohomeextback.className='ggskin ggskin_text ';
		this._tgotohomeextback.ggType='text';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -84px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 162px;';
		this._tgotohomeextback.setAttribute('style',hs);
		this._tgotohomeextback.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tgotohomeextback__text.setAttribute('style',hs);
		this._tgotohomeextback__text.innerHTML="\u0414\u043e\u043c\u043e\u0439";
		this._tgotohomeextback.appendChild(this._tgotohomeextback__text);
		me._tgotohomeextback.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tgotohomeextback.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tgotohomeextback.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 1 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 1 + h/2) + 'px';
			}
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((164-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gotohometext.appendChild(this._tgotohomeextback);
		this._gotohome.appendChild(this._gotohometext);
		this._controller.appendChild(this._gotohome);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-105;
		this._loading.ggTop=-30;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle ';
		this._loadingbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		this._loadingbg.setAttribute('style',hs);
		this._loadingbg.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbg);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle ';
		this._loadingbar.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		this._loadingbar.setAttribute('style',hs);
		this._loadingbar.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._screentint=document.createElement('div');
		this._screentint.ggId="screentint";
		this._screentint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint.ggVisible=false;
		this._screentint.className='ggskin ggskin_rectangle ';
		this._screentint.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 1px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._screentint.setAttribute('style',hs);
		this._screentint.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		me._screentint.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._screentint);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggLeft=-120;
		this._userdata.ggTop=-80;
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container ';
		this._userdata.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : -120px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		this._userdata.setAttribute('style',hs);
		this._userdata.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		me._userdata.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._userdata.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle ';
		this._userdatabg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='height : 138px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 238px;';
		this._userdatabg.setAttribute('style',hs);
		this._userdatabg.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdatabg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdatabg.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._userdatabg);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text ';
		this._title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._title.setAttribute('style',hs);
		this._title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._title.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text ';
		this._description.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._description.setAttribute('style',hs);
		this._description.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description__text.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		this._description.appendChild(this._description__text);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._description.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._description.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text ';
		this._author.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._author.setAttribute('style',hs);
		this._author.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.ggUserdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		me._author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._author.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._author.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime__text=document.createElement('div');
		this._datetime.className='ggskin ggskin_textdiv';
		this._datetime.ggTextDiv=this._datetime__text;
		this._datetime.ggId="datetime";
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		this._datetime.className='ggskin ggskin_text ';
		this._datetime.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._datetime.setAttribute('style',hs);
		this._datetime.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime__text.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			var hs=me.ggUserdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime.ggUpdateText();
		this._datetime.appendChild(this._datetime__text);
		me._datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._datetime.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._datetime.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright__text=document.createElement('div');
		this._copyright.className='ggskin ggskin_textdiv';
		this._copyright.ggTextDiv=this._copyright__text;
		this._copyright.ggId="copyright";
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		this._copyright.className='ggskin ggskin_text ';
		this._copyright.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._copyright.setAttribute('style',hs);
		this._copyright.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright__text.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		this._copyright.appendChild(this._copyright__text);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._copyright.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._copyright.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._copyright);
		this._userdata_close=document.createElement('div');
		this._userdata_close__img=document.createElement('img');
		this._userdata_close__img.className='ggskin ggskin_svg';
		this._userdata_close__img.setAttribute('src',basePath + 'images/userdata_close.svg');
		this._userdata_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._userdata_close__img['ondragstart']=function() { return false; };
		this._userdata_close.appendChild(this._userdata_close__img);
		this._userdata_close__imgo=document.createElement('img');
		this._userdata_close__imgo.className='ggskin ggskin_svg';
		this._userdata_close__imgo.setAttribute('src',basePath + 'images/userdata_close__o.svg');
		this._userdata_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._userdata_close__imgo['ondragstart']=function() { return false; };
		this._userdata_close.appendChild(this._userdata_close__imgo);
		this._userdata_close.ggId="userdata_close";
		this._userdata_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata_close.ggVisible=true;
		this._userdata_close.className='ggskin ggskin_svg ';
		this._userdata_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 207px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._userdata_close.setAttribute('style',hs);
		this._userdata_close.style[domTransform + 'Origin']='50% 50%';
		me._userdata_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdata_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdata_close.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
		}
		this._userdata_close.onmouseover=function () {
			me._userdata_close__img.style.visibility='hidden';
			me._userdata_close__imgo.style.visibility='inherit';
		}
		this._userdata_close.onmouseout=function () {
			me._userdata_close__img.style.visibility='inherit';
			me._userdata_close__imgo.style.visibility='hidden';
		}
		this._userdata_close.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._userdata_close);
		this.divSkin.appendChild(this._userdata);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggLeft=-148;
		this._information.ggTop=-150;
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information.ggVisible=false;
		this._information.className='ggskin ggskin_container ';
		this._information.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -148px;';
		hs+='position : absolute;';
		hs+='top : -150px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._information.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._informationbg=document.createElement('div');
		this._informationbg.ggId="informationbg";
		this._informationbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._informationbg.ggVisible=true;
		this._informationbg.className='ggskin ggskin_rectangle ';
		this._informationbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 2px solid #ffffff;';
		hs+='height : 248px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 298px;';
		this._informationbg.setAttribute('style',hs);
		this._informationbg.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._informationbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._informationbg.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._informationbg);
		this._info_text_body=document.createElement('div');
		this._info_text_body__text=document.createElement('div');
		this._info_text_body.className='ggskin ggskin_textdiv';
		this._info_text_body.ggTextDiv=this._info_text_body__text;
		this._info_text_body.ggId="info_text_body";
		this._info_text_body.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_body.ggVisible=true;
		this._info_text_body.className='ggskin ggskin_text ';
		this._info_text_body.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		this._info_text_body.setAttribute('style',hs);
		this._info_text_body.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 274px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_text_body__text.setAttribute('style',hs);
		this._info_text_body__text.innerHTML="";
		this._info_text_body.appendChild(this._info_text_body__text);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_body.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_text_body.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._info_text_body);
		this._info_title=document.createElement('div');
		this._info_title__text=document.createElement('div');
		this._info_title.className='ggskin ggskin_textdiv';
		this._info_title.ggTextDiv=this._info_title__text;
		this._info_title.ggId="info_title";
		this._info_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_title.ggVisible=true;
		this._info_title.className='ggskin ggskin_text ';
		this._info_title.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 99px;';
		this._info_title.setAttribute('style',hs);
		this._info_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 99px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_title__text.setAttribute('style',hs);
		this._info_title__text.innerHTML="";
		this._info_title.appendChild(this._info_title__text);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_title.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._info_title);
		this._ht_info_close=document.createElement('div');
		this._ht_info_close__img=document.createElement('img');
		this._ht_info_close__img.className='ggskin ggskin_svg';
		this._ht_info_close__img.setAttribute('src',basePath + 'images/ht_info_close.svg');
		this._ht_info_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_info_close__img['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__img);
		this._ht_info_close__imgo=document.createElement('img');
		this._ht_info_close__imgo.className='ggskin ggskin_svg';
		this._ht_info_close__imgo.setAttribute('src',basePath + 'images/ht_info_close__o.svg');
		this._ht_info_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_info_close__imgo['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__imgo);
		this._ht_info_close.ggId="ht_info_close";
		this._ht_info_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info_close.ggVisible=true;
		this._ht_info_close.className='ggskin ggskin_svg ';
		this._ht_info_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._ht_info_close.setAttribute('style',hs);
		this._ht_info_close.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_info_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_info_close.onclick=function () {
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
		}
		this._ht_info_close.onmouseover=function () {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		this._ht_info_close.onmouseout=function () {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		this._ht_info_close.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._ht_info_close);
		this.divSkin.appendChild(this._information);
		this._image_popup=document.createElement('div');
		this._image_popup.ggId="image_popup";
		this._image_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup.ggVisible=false;
		this._image_popup.className='ggskin ggskin_container ';
		this._image_popup.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._image_popup.setAttribute('style',hs);
		this._image_popup.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		me._image_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup.onclick=function () {
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.ggText="";
			me._popup_image__img.src=me._popup_image.ggText;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
		}
		this._image_popup.ggUpdatePosition=function () {
		}
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_svg';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.svg');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img['ondragstart']=function() { return false; };
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading_image";
		this._loading_image.ggLeft=-20;
		this._loading_image.ggTop=-20;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_svg ';
		this._loading_image.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._image_popup.appendChild(this._loading_image);
		this._popup_image=document.createElement('div');
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		this._popup_image__img.setAttribute('src',basePath + '');
		this._popup_image__img['ondragstart']=function() { return false; };
		hs ='';
		this._popup_image.appendChild(this._popup_image__img);
		this._popup_image.ggId="popup_image";
		this._popup_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image.ggVisible=true;
		this._popup_image.className='ggskin ggskin_external ';
		this._popup_image.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._popup_image.setAttribute('style',hs);
		this._popup_image.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_image.ggUpdatePosition=function () {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;');
			};
		}
		this._image_popup.appendChild(this._popup_image);
		this.divSkin.appendChild(this._image_popup);
		this._chemamap=document.createElement('div');
		this._chemamap__img=document.createElement('img');
		this._chemamap__img.className='ggskin ggskin_image';
		this._chemamap__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Map_big.jpg');
		this._chemamap__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._chemamap__img.className='ggskin ggskin_image';
		this._chemamap__img['ondragstart']=function() { return false; };
		
		
		me.player.checkLoaded.push(this._chemamap__img);
		
		this._chemamap.appendChild(this._chemamap__img);
		
		this._chemamap.ggId="ChemaMap";
		this._chemamap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._chemamap.ggVisible=false;
		this._chemamap.className='ggskin ggskin_image ';
		this._chemamap.ggType='image';
		hs ='';
		hs+='height : 36vw;';
		hs+='left :25%;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : hidden;';
		hs+='width: 50%;';
		this._chemamap.setAttribute('style',hs);
		this._chemamap.style[domTransform + 'Origin']='0% 100%';
		me._chemamap.ggIsActive=function() {
			return false;
		}
		me._chemamap.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._chemamap.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		
		this._museum=document.createElement('div');
		this._museum__img=document.createElement('img');
		this._museum__img.className='ggskin ggskin_button';
		this._museum__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Museum_txt.png');
		this._museum__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._museum__img.className='ggskin ggskin_button';
		this._museum__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._museum__img);
		this._museum.appendChild(this._museum__img);
		this._museum.ggId="Museum";
		this._museum.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._museum.ggVisible=true;
		this._museum.className='ggskin ggskin_button ';
		this._museum.ggType='button';
		hs ='';
		hs+='height : 1.5vw;';
		hs+='left : 72%;';
		hs+='position : absolute;';
		hs+='top : 42%;';
		hs+='visibility : inherit;';
		hs+='width : 8vw;';
		this._museum.setAttribute('style',hs);
		this._museum.style[domTransform + 'Origin']='50% 50%';
		me._museum.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._museum.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._museum.onclick=function () {
			
			me._chemamap.ggVisible = !me._chemamap.ggVisible;
			me._chemamap.style[domTransition]='none';
			me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
			
			pushNode("{node1}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
			
			me.player.openNext("{node1}","");
		}
		this._museum.onmouseover=function () {
			me.elementMouseOver['museum']=true;
		}
		this._museum.onmouseout=function () {
			me._museumname.style[domTransition]='none';
			me._museumname.style.visibility='hidden';
			me._museumname.ggVisible=false;
			me.elementMouseOver['museum']=false;
		}
		this._museum.ontouchend=function () {
			me.elementMouseOver['museum']=false;
		}
		this._museum.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._museumname=document.createElement('div');
		this._museumname__text=document.createElement('div');
		this._museumname.className='ggskin ggskin_textdiv';
		this._museumname.ggTextDiv=this._museumname__text;
		this._museumname.ggId="MuseumName";
		this._museumname.ggLeft=-29;
		this._museumname.ggTop=-54;
		this._museumname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._museumname.ggVisible=false;
		this._museumname.className='ggskin ggskin_text ';
		this._museumname.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -29px;';
		hs+='position : absolute;';
		hs+='top : -54px;';
		hs+='visibility : hidden;';
		hs+='width : 57px;';
		this._museumname.setAttribute('style',hs);
		this._museumname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 57px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._museumname__text.setAttribute('style',hs);
		this._museumname__text.innerHTML="\u041c\u0443\u0437\u0435\u0439 \u041b\u0435\u043d\u0438\u043d\u0430";
		this._museumname.appendChild(this._museumname__text);
		me._museumname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._museumname.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._museumname.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._museum.appendChild(this._museumname);
		this._chemamap.appendChild(this._museum);
		
		this._obshi=document.createElement('div');
		this._obshi__img=document.createElement('img');
		this._obshi__img.className='ggskin ggskin_button';
		this._obshi__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Overview_txt.png');
		this._obshi__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._obshi__img.className='ggskin ggskin_button';
		this._obshi__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._obshi__img);
		this._obshi.appendChild(this._obshi__img);
		this._obshi.ggId="Obshi";
		this._obshi.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._obshi.ggVisible=true;
		this._obshi.className='ggskin ggskin_button ';
		this._obshi.ggType='button';
		hs ='';
		hs+='height : 1.5vw;';
		hs+='left :25%;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width :  8vw;';
		this._obshi.setAttribute('style',hs);
		this._obshi.style[domTransform + 'Origin']='50% 50%';
		me._obshi.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._obshi.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._obshi.onclick=function () {
			me._chemamap.ggVisible = !me._chemamap.ggVisible;
			me._chemamap.style[domTransition]='none';
			me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
			
			pushNode("{node77}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
			
			me.player.openNext("{node77}","");
		}
		this._obshi.onmouseover=function () {
			me.elementMouseOver['obshi']=true;
		}
		this._obshi.onmouseout=function () {
			me._obshiname.style[domTransition]='none';
			me._obshiname.style.visibility='hidden';
			me._obshiname.ggVisible=false;
			me.elementMouseOver['obshi']=false;
		}
		this._obshi.ontouchend=function () {
			me.elementMouseOver['obshi']=false;
		}
		this._obshi.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._obshiname=document.createElement('div');
		this._obshiname__text=document.createElement('div');
		this._obshiname.className='ggskin ggskin_textdiv';
		this._obshiname.ggTextDiv=this._obshiname__text;
		this._obshiname.ggId="ObshiName";
		this._obshiname.ggLeft=-53;
		this._obshiname.ggTop=-57;
		this._obshiname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._obshiname.ggVisible=false;
		this._obshiname.className='ggskin ggskin_text ';
		this._obshiname.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -53px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 108px;';
		this._obshiname.setAttribute('style',hs);
		this._obshiname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 108px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._obshiname__text.setAttribute('style',hs);
		this._obshiname__text.innerHTML="\u041e\u0431\u0449\u0438\u0439 \u0432\u0438\u0434";
		this._obshiname.appendChild(this._obshiname__text);
		me._obshiname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._obshiname.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._obshiname.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._obshi.appendChild(this._obshiname);
		this._chemamap.appendChild(this._obshi);
		this._palatochgor=document.createElement('div');
		this._palatochgor__img=document.createElement('img');
		this._palatochgor__img.className='ggskin ggskin_button';
		this._palatochgor__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Camp_txt.png');
		this._palatochgor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._palatochgor__img.className='ggskin ggskin_button';
		this._palatochgor__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._palatochgor__img);
		this._palatochgor.appendChild(this._palatochgor__img);
		this._palatochgor.ggId="PalatochGor";
		this._palatochgor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._palatochgor.ggVisible=true;
		this._palatochgor.className='ggskin ggskin_button ';
		this._palatochgor.ggType='button';
		hs ='';
		hs+='height : 1.5vw;';
		hs+='left : 4%;';
		hs+='position : absolute;';
		hs+='top :65%;';
		hs+='visibility : inherit;';
		hs+='width : 9vw;';
		this._palatochgor.setAttribute('style',hs);
		this._palatochgor.style[domTransform + 'Origin']='50% 50%';
		me._palatochgor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._palatochgor.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._palatochgor.onclick=function () {
			me._chemamap.ggVisible = !me._chemamap.ggVisible;
			me._chemamap.style[domTransition]='none';
			me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
			
			pushNode("{node74}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
			
			me.player.openNext("{node74}","");
		}
		this._palatochgor.onmouseover=function () {
			me.elementMouseOver['palatochgor']=true;
		}
		this._palatochgor.onmouseout=function () {
			me._palatochname.style[domTransition]='none';
			me._palatochname.style.visibility='hidden';
			me._palatochname.ggVisible=false;
			me.elementMouseOver['palatochgor']=false;
		}
		this._palatochgor.ontouchend=function () {
			me.elementMouseOver['palatochgor']=false;
		}
		this._palatochgor.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._palatochname=document.createElement('div');
		this._palatochname__text=document.createElement('div');
		this._palatochname.className='ggskin ggskin_textdiv';
		this._palatochname.ggTextDiv=this._palatochname__text;
		this._palatochname.ggId="PalatochName";
		this._palatochname.ggLeft=-53;
		this._palatochname.ggTop=-57;
		this._palatochname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._palatochname.ggVisible=false;
		this._palatochname.className='ggskin ggskin_text ';
		this._palatochname.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -53px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 108px;';
		this._palatochname.setAttribute('style',hs);
		this._palatochname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 108px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._palatochname__text.setAttribute('style',hs);
		this._palatochname__text.innerHTML="\u041f\u0430\u043b\u0430\u0442\u043e\u0447\u043d\u044b\u0439 \u0433\u043e\u0440\u043e\u0434\u043e\u043a";
		this._palatochname.appendChild(this._palatochname__text);
		me._palatochname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._palatochname.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._palatochname.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._palatochgor.appendChild(this._palatochname);
		this._chemamap.appendChild(this._palatochgor);

		this._market=document.createElement('div');
this._market__img=document.createElement('img');
this._market__img.className='ggskin ggskin_button';
this._market__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Market_txt.png');
this._market__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
this._market__img.className='ggskin ggskin_button';
this._market__img['ondragstart']=function() { return false; };
me.player.checkLoaded.push(this._market__img);
this._market.appendChild(this._market__img);
this._market.ggId="PalatochGor";
this._market.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
this._market.ggVisible=true;
this._market.className='ggskin ggskin_button ';
this._market.ggType='button';
hs ='';
hs+='height : 1.5vw;';
hs+='left : 25%;';
hs+='position : absolute;';
hs+='top : 52%;';
hs+='visibility : inherit;';
hs+='width : 6vw;';
this._market.setAttribute('style',hs);
this._market.style[domTransform + 'Origin']='50% 50%';
me._market.ggIsActive=function() {
    if ((this.parentNode) && (this.parentNode.ggIsActive)) {
        return this.parentNode.ggIsActive();
    }
    return false;
}
me._market.ggElementNodeId=function() {
    if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
        return this.parentNode.ggElementNodeId();
    }
    return me.player.getCurrentNode();
}
this._market.onclick=function () {
    me._chemamap.ggVisible = !me._chemamap.ggVisible;
    me._chemamap.style[domTransition]='none';
    me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
    
    pushNode("{node96}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
    
    me.player.openNext("{node96}","");
}
this._market.onmouseover=function () {
    me.elementMouseOver['_market']=true;
}
this._market.onmouseout=function () {
    me.marketname.style[domTransition]='none';
    me.marketname.style.visibility='hidden';
    me.marketname.ggVisible=false;
    me.elementMouseOver['_market']=false;
}
this._market.ontouchend=function () {
    me.elementMouseOver['_market']=false;
}
this._market.ggUpdatePosition=function () {
    this.style[domTransition]='none';
    if (this.parentNode) {
        var w=this.parentNode.offsetWidth;
            this.style.left=(this.ggLeft - 0 + w/2) + 'px';
        var h=this.parentNode.offsetHeight;
            this.style.top=(this.ggTop - 0 + h/2) + 'px';
    }
}
this.marketname=document.createElement('div');
this.marketname__text=document.createElement('div');
this.marketname.className='ggskin ggskin_textdiv';
this.marketname.ggTextDiv=this.marketname__text;
this.marketname.ggId="PalatochName";
this.marketname.ggLeft=-53;
this.marketname.ggTop=-57;
this.marketname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
this.marketname.ggVisible=false;
this.marketname.className='ggskin ggskin_text ';
this.marketname.ggType='text';
hs ='';
hs+='height : 27px;';
hs+='left : -53px;';
hs+='position : absolute;';
hs+='top : -57px;';
hs+='visibility : hidden;';
hs+='width : 108px;';
this.marketname.setAttribute('style',hs);
this.marketname.style[domTransform + 'Origin']='50% 50%';
hs ='position:absolute;';
hs+='left: 0px;';
hs+='top:  0px;';
hs+='width: 108px;';
hs+='height: auto;';
hs+='background: #ffffff;';
hs+='background: rgba(255,255,255,0.784314);';
hs+='border: 1px solid #000000;';
hs+='border: 1px solid rgba(0,0,0,0.392157);';
hs+=cssPrefix + 'background-clip: padding-box;';
hs+='background-clip: padding-box;';
hs+='color: #000000;';
hs+='text-align: center;';
hs+='white-space: pre-wrap;';
hs+='padding: 0px 1px 0px 1px;';
hs+='overflow: hidden;';
this.marketname__text.setAttribute('style',hs);
this.marketname__text.innerHTML="Ярмарка";
this.marketname.appendChild(this.marketname__text);
me.marketname.ggIsActive=function() {
    if ((this.parentNode) && (this.parentNode.ggIsActive)) {
        return this.parentNode.ggIsActive();
    }
    return false;
}
me.marketname.ggElementNodeId=function() {
    if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
        return this.parentNode.ggElementNodeId();
    }
    return me.player.getCurrentNode();
}
this.marketname.ggUpdatePosition=function () {
    this.style[domTransition]='none';
    if (this.parentNode) {
        var w=this.parentNode.offsetWidth;
            this.style.left=(this.ggLeft - 0 + w/2) + 'px';
        var h=this.parentNode.offsetHeight;
            this.style.top=(this.ggTop - 0 + h/2) + 'px';
    }
}
this._market.appendChild(this.marketname);
this._chemamap.appendChild(this._market);



this.besedka=document.createElement('div');
this.besedka__img=document.createElement('img');
this.besedka__img.className='ggskin ggskin_button';
this.besedka__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Gazebo_txt.png');
this.besedka__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
this.besedka__img.className='ggskin ggskin_button';
this.besedka__img['ondragstart']=function() { return false; };
me.player.checkLoaded.push(this.besedka__img);
this.besedka.appendChild(this.besedka__img);
this.besedka.ggId="Besedka";
this.besedka.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
this.besedka.ggVisible=true;
this.besedka.className='ggskin ggskin_button ';
this.besedka.ggType='button';
hs ='';
hs+='height : 1.5vw;';
hs+='left : 58%;';
hs+='position : absolute;';
hs+='top : 43%;';
hs+='visibility : inherit;';
hs+='width : 5vw;';
this.besedka.setAttribute('style',hs);
this.besedka.style[domTransform + 'Origin']='50% 50%';
me.besedka.ggIsActive=function() {
    if ((this.parentNode) && (this.parentNode.ggIsActive)) {
        return this.parentNode.ggIsActive();
    }
    return false;
}
me.besedka.ggElementNodeId=function() {
    if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
        return this.parentNode.ggElementNodeId();
    }
    return me.player.getCurrentNode();
}
this.besedka.onclick=function () {
    me._chemamap.ggVisible = !me._chemamap.ggVisible;
    me._chemamap.style[domTransition]='none';
    me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
    
    pushNode("{node79}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
    
    me.player.openNext("{node79}","");
}
this.besedka.onmouseover=function () {
    me.elementMouseOver['besedka']=true;
}
this.besedka.onmouseout=function () {
    me.besedkaName.style[domTransition]='none';
    me.besedkaName.style.visibility='hidden';
    me.besedkaName.ggVisible=false;
    me.elementMouseOver['besedka']=false;
}
this.besedka.ontouchend=function () {
    me.elementMouseOver['besedka']=false;
}
this.besedka.ggUpdatePosition=function () {
    this.style[domTransition]='none';
    if (this.parentNode) {
        var w=this.parentNode.offsetWidth;
            this.style.left=(this.ggLeft - 0 + w/2) + 'px';
        var h=this.parentNode.offsetHeight;
            this.style.top=(this.ggTop - 0 + h/2) + 'px';
    }
}
this.besedkaName=document.createElement('div');
this.besedkaName__text=document.createElement('div');
this.besedkaName.className='ggskin ggskin_textdiv';
this.besedkaName.ggTextDiv=this.besedkaName__text;
this.besedkaName.ggId="besedkahName";
this.besedkaName.ggLeft=-53;
this.besedkaName.ggTop=-57;
this.besedkaName.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
this.besedkaName.ggVisible=false;
this.besedkaName.className='ggskin ggskin_text ';
this.besedkaName.ggType='text';
hs ='';
hs+='height : 27px;';
hs+='left : -53px;';
hs+='position : absolute;';
hs+='top : -57px;';
hs+='visibility : hidden;';
hs+='width : 108px;';
this.besedkaName.setAttribute('style',hs);
this.besedkaName.style[domTransform + 'Origin']='50% 50%';
hs ='position:absolute;';
hs+='left: 0px;';
hs+='top:  0px;';
hs+='width: 108px;';
hs+='height: auto;';
hs+='background: #ffffff;';
hs+='background: rgba(255,255,255,0.784314);';
hs+='border: 1px solid #000000;';
hs+='border: 1px solid rgba(0,0,0,0.392157);';
hs+=cssPrefix + 'background-clip: padding-box;';
hs+='background-clip: padding-box;';
hs+='color: #000000;';
hs+='text-align: center;';
hs+='white-space: pre-wrap;';
hs+='padding: 0px 1px 0px 1px;';
hs+='overflow: hidden;';
this.besedkaName__text.setAttribute('style',hs);
this.besedkaName__text.innerHTML="Беседка";
this.besedkaName.appendChild(this.besedkaName__text);
me.besedkaName.ggIsActive=function() {
    if ((this.parentNode) && (this.parentNode.ggIsActive)) {
        return this.parentNode.ggIsActive();
    }
    return false;
}
me.besedkaName.ggElementNodeId=function() {
    if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
        return this.parentNode.ggElementNodeId();
    }
    return me.player.getCurrentNode();
}
this.besedkaName.ggUpdatePosition=function () {
    this.style[domTransition]='none';
    if (this.parentNode) {
        var w=this.parentNode.offsetWidth;
            this.style.left=(this.ggLeft - 0 + w/2) + 'px';
        var h=this.parentNode.offsetHeight;
            this.style.top=(this.ggTop - 0 + h/2) + 'px';
    }
}
this.besedka.appendChild(this.besedkaName);
this._chemamap.appendChild(this.besedka);



this.esibir=document.createElement('div');
this.esibir__img=document.createElement('img');
this.esibir__img.className='ggskin ggskin_button';
this.esibir__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Eniseyskaya_Sibir_txt.png');
this.esibir__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
this.esibir__img.className='ggskin ggskin_button';
this.esibir__img['ondragstart']=function() { return false; };
me.player.checkLoaded.push(this.esibir__img);
this.esibir.appendChild(this.esibir__img);
this.esibir.ggId="esibir";
this.esibir.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
this.esibir.ggVisible=true;
this.esibir.className='ggskin ggskin_button ';
this.esibir.ggType='button';
hs ='';
hs+='height : 1.5vw;';
hs+='left : 47%;';
hs+='position : absolute;';
hs+='top : 18%;';
hs+='visibility : inherit;';
hs+='width : 9vw;';
this.esibir.setAttribute('style',hs);
this.esibir.style[domTransform + 'Origin']='50% 50%';
me.esibir.ggIsActive=function() {
    if ((this.parentNode) && (this.parentNode.ggIsActive)) {
        return this.parentNode.ggIsActive();
    }
    return false;
}
me.esibir.ggElementNodeId=function() {
    if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
        return this.parentNode.ggElementNodeId();
    }
    return me.player.getCurrentNode();
}
this.esibir.onclick=function () {
    me._chemamap.ggVisible = !me._chemamap.ggVisible;
    me._chemamap.style[domTransition]='none';
    me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
    
    pushNode("{node116}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
    
    me.player.openNext("{node116}","");
}
this.esibir.onmouseover=function () {
    me.elementMouseOver['esibir']=true;
}
this.esibir.onmouseout=function () {
    me.esibirName.style[domTransition]='none';
    me.esibirName.style.visibility='hidden';
    me.esibirName.ggVisible=false;
    me.elementMouseOver['esibir']=false;
}
this.esibir.ontouchend=function () {
    me.elementMouseOver['esibir']=false;
}
this.esibir.ggUpdatePosition=function () {
    this.style[domTransition]='none';
    if (this.parentNode) {
        var w=this.parentNode.offsetWidth;
            this.style.left=(this.ggLeft - 0 + w/2) + 'px';
        var h=this.parentNode.offsetHeight;
            this.style.top=(this.ggTop - 0 + h/2) + 'px';
    }
}
this.esibirName=document.createElement('div');
this.esibirName__text=document.createElement('div');
this.esibirName.className='ggskin ggskin_textdiv';
this.esibirName.ggTextDiv=this.esibirName__text;
this.esibirName.ggId="esibirhName";
this.esibirName.ggLeft=-53;
this.esibirName.ggTop=-57;
this.esibirName.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
this.esibirName.ggVisible=false;
this.esibirName.className='ggskin ggskin_text ';
this.esibirName.ggType='text';
hs ='';
hs+='height : 27px;';
hs+='left : -53px;';
hs+='position : absolute;';
hs+='top : -57px;';
hs+='visibility : hidden;';
hs+='width : 108px;';
this.esibirName.setAttribute('style',hs);
this.esibirName.style[domTransform + 'Origin']='50% 50%';
hs ='position:absolute;';
hs+='left: 0px;';
hs+='top:  0px;';
hs+='width: 108px;';
hs+='height: auto;';
hs+='background: #ffffff;';
hs+='background: rgba(255,255,255,0.784314);';
hs+='border: 1px solid #000000;';
hs+='border: 1px solid rgba(0,0,0,0.392157);';
hs+=cssPrefix + 'background-clip: padding-box;';
hs+='background-clip: padding-box;';
hs+='color: #000000;';
hs+='text-align: center;';
hs+='white-space: pre-wrap;';
hs+='padding: 0px 1px 0px 1px;';
hs+='overflow: hidden;';
this.esibirName__text.setAttribute('style',hs);
this.esibirName__text.innerHTML="Енисейская Сибирь";
this.esibirName.appendChild(this.esibirName__text);
me.esibirName.ggIsActive=function() {
    if ((this.parentNode) && (this.parentNode.ggIsActive)) {
        return this.parentNode.ggIsActive();
    }
    return false;
}
me.esibirName.ggElementNodeId=function() {
    if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
        return this.parentNode.ggElementNodeId();
    }
    return me.player.getCurrentNode();
}
this.esibirName.ggUpdatePosition=function () {
    this.style[domTransition]='none';
    if (this.parentNode) {
        var w=this.parentNode.offsetWidth;
            this.style.left=(this.ggLeft - 0 + w/2) + 'px';
        var h=this.parentNode.offsetHeight;
            this.style.top=(this.ggTop - 0 + h/2) + 'px';
    }
}
this.esibir.appendChild(this.esibirName);
this._chemamap.appendChild(this.esibir);


this._glavscen=document.createElement('div');
		this._glavscen__img=document.createElement('img');
		this._glavscen__img.className='ggskin ggskin_button';
		this._glavscen__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Main_stage_txt.png');
		this._glavscen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._glavscen__img.className='ggskin ggskin_button';
		this._glavscen__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._glavscen__img);
		this._glavscen.appendChild(this._glavscen__img);
		this._glavscen.ggId="GlavScen";
		this._glavscen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._glavscen.ggVisible=true;
		this._glavscen.className='ggskin ggskin_button ';
		this._glavscen.ggType='button';
		hs ='';
		hs+='height : 1.5vw;';
		hs+='left : 48%;';
		hs+='position : absolute;';
		hs+='top : 30%;';
		hs+='visibility : inherit;';
		hs+='width : 8vw;';
		this._glavscen.setAttribute('style',hs);
		this._glavscen.style[domTransform + 'Origin']='50% 50%';
		me._glavscen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._glavscen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._glavscen.onclick=function () {
			
			me._chemamap.ggVisible = !me._chemamap.ggVisible;
			me._chemamap.style[domTransition]='none';
			me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
			
			pushNode("{node70}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
			me.player.openNext("{node70}","");
		}
		this._glavscen.onmouseover=function () {
			me.elementMouseOver['glavscen']=true;
		}
		this._glavscen.onmouseout=function () {
			me._glavname.style[domTransition]='none';
			me._glavname.style.visibility='hidden';
			me._glavname.ggVisible=false;
			me.elementMouseOver['glavscen']=false;
		}
		this._glavscen.ontouchend=function () {
			me.elementMouseOver['glavscen']=false;
		}
		this._glavscen.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._glavname=document.createElement('div');
		this._glavname__text=document.createElement('div');
		this._glavname.className='ggskin ggskin_textdiv';
		this._glavname.ggTextDiv=this._glavname__text;
		this._glavname.ggId="GlavName";
		this._glavname.ggLeft=-64;
		this._glavname.ggTop=-54;
		this._glavname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._glavname.ggVisible=false;
		this._glavname.className='ggskin ggskin_text ';
		this._glavname.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -54px;';
		hs+='visibility : hidden;';
		hs+='width : 127px;';
		this._glavname.setAttribute('style',hs);
		this._glavname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 127px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._glavname__text.setAttribute('style',hs);
		this._glavname__text.innerHTML="\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0446\u0435\u043d\u0430";
		this._glavname.appendChild(this._glavname__text);
		me._glavname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._glavname.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._glavname.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._glavscen.appendChild(this._glavname);
		this._chemamap.appendChild(this._glavscen);
		this._obrad=document.createElement('div');
		this._obrad__img=document.createElement('img');
		this._obrad__img.className='ggskin ggskin_button';
		this._obrad__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Tribal_txt.png');
		this._obrad__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._obrad__img.className='ggskin ggskin_button';
		this._obrad__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._obrad__img);
		this._obrad.appendChild(this._obrad__img);
		this._obrad.ggId="Obrad";
		this._obrad.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._obrad.ggVisible=true;
		this._obrad.className='ggskin ggskin_button ';
		this._obrad.ggType='button';
		hs ='';
		hs+='height : 1.5vw;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : 65%;';
		hs+='visibility : inherit;';
		hs+='width : 8vw;';
		this._obrad.setAttribute('style',hs);
		this._obrad.style[domTransform + 'Origin']='50% 50%';
		me._obrad.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._obrad.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._obrad.onclick=function () {
			me._chemamap.ggVisible = !me._chemamap.ggVisible;
			me._chemamap.style[domTransition]='none';
			me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
			
			pushNode("{node73}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
			
			me.player.openNext("{node73}","");
		}
		this._obrad.onmouseover=function () {
			me.elementMouseOver['obrad']=true;
		}
		this._obrad.onmouseout=function () {
			me._obradname.style[domTransition]='none';
			me._obradname.style.visibility='hidden';
			me._obradname.ggVisible=false;
			me.elementMouseOver['obrad']=false;
		}
		this._obrad.ontouchend=function () {
			me.elementMouseOver['obrad']=false;
		}
		this._obrad.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._obradname=document.createElement('div');
		this._obradname__text=document.createElement('div');
		this._obradname.className='ggskin ggskin_textdiv';
		this._obradname.ggTextDiv=this._obradname__text;
		this._obradname.ggId="ObradName";
		this._obradname.ggLeft=-53;
		this._obradname.ggTop=-57;
		this._obradname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._obradname.ggVisible=false;
		this._obradname.className='ggskin ggskin_text ';
		this._obradname.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -53px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 108px;';
		this._obradname.setAttribute('style',hs);
		this._obradname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 108px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._obradname__text.setAttribute('style',hs);
		this._obradname__text.innerHTML="\u041e\u0431\u0440\u044f\u0434\u043e\u0432\u0430\u044f \u043f\u043e\u043b\u044f\u043d\u0430";
		this._obradname.appendChild(this._obradname__text);
		me._obradname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._obradname.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._obradname.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._obrad.appendChild(this._obradname);
		this._chemamap.appendChild(this._obrad);
		this._guavlenok=document.createElement('div');
		this._guavlenok__img=document.createElement('img');
		this._guavlenok__img.className='ggskin ggskin_button';
		this._guavlenok__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Juravlenok_txt.png');
		this._guavlenok__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._guavlenok__img.className='ggskin ggskin_button';
		this._guavlenok__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._guavlenok__img);
		this._guavlenok.appendChild(this._guavlenok__img);
		this._guavlenok.ggId="Guavlenok";
		this._guavlenok.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._guavlenok.ggVisible=true;
		this._guavlenok.className='ggskin ggskin_button ';
		this._guavlenok.ggType='button';
		hs ='';
		hs+='height : 1.5vw;';
		hs+='left : 38%;';
		hs+='position : absolute;';
		hs+='top : 70%;';
		hs+='visibility : inherit;';
		hs+='width : 7vw;';
		this._guavlenok.setAttribute('style',hs);
		this._guavlenok.style[domTransform + 'Origin']='50% 50%';
		me._guavlenok.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._guavlenok.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._guavlenok.onclick=function () {
			me._chemamap.ggVisible = !me._chemamap.ggVisible;
			me._chemamap.style[domTransition]='none';
			me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
			
			pushNode("{node72}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
			me.player.openNext("{node72}","");
		}
		this._guavlenok.onmouseover=function () {
			pushNode("{node72}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
			
			me.elementMouseOver['guavlenok']=true;
		}
		this._guavlenok.onmouseout=function () {
			me._guravname.style[domTransition]='none';
			me._guravname.style.visibility='hidden';
			me._guravname.ggVisible=false;
			me.elementMouseOver['guavlenok']=false;
		}
		this._guavlenok.ontouchend=function () {
			me.elementMouseOver['guavlenok']=false;
		}
		this._guavlenok.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._guravname=document.createElement('div');
		this._guravname__text=document.createElement('div');
		this._guravname.className='ggskin ggskin_textdiv';
		this._guravname.ggTextDiv=this._guravname__text;
		this._guravname.ggId="GuravName";
		this._guravname.ggLeft=-53;
		this._guravname.ggTop=-57;
		this._guravname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._guravname.ggVisible=false;
		this._guravname.className='ggskin ggskin_text ';
		this._guravname.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -53px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 108px;';
		this._guravname.setAttribute('style',hs);
		this._guravname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 108px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._guravname__text.setAttribute('style',hs);
		this._guravname__text.innerHTML="\u0416\u0443\u0440\u0430\u0432\u043b\u0435\u043d\u043e\u043a";
		this._guravname.appendChild(this._guravname__text);
		me._guravname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._guravname.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._guravname.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._guavlenok.appendChild(this._guravname);
		this._chemamap.appendChild(this._guavlenok);
		this._ploshad=document.createElement('div');
		this._ploshad__img=document.createElement('img');
		this._ploshad__img.className='ggskin ggskin_button';
		this._ploshad__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Square_txt.png');
		this._ploshad__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ploshad__img.className='ggskin ggskin_button';
		this._ploshad__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._ploshad__img);
		this._ploshad.appendChild(this._ploshad__img);
		this._ploshad.ggId="Ploshad";
		this._ploshad.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ploshad.ggVisible=true;
		this._ploshad.className='ggskin ggskin_button ';
		this._ploshad.ggType='button';
		hs ='';
		hs+='height : 1.5vw;';
		hs+='left : 75%;';
		hs+='position : absolute;';
		hs+='top : 53%;';
		hs+='visibility : inherit;';
		hs+='width : 5vw;';
		this._ploshad.setAttribute('style',hs);
		this._ploshad.style[domTransform + 'Origin']='50% 50%';
		me._ploshad.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ploshad.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ploshad.onclick=function () {
			me._chemamap.ggVisible = !me._chemamap.ggVisible;
			me._chemamap.style[domTransition]='none';
			me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
			
			pushNode("{node75}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
		
			me.player.openNext("{node75}","");
		}
		this._ploshad.onmouseover=function () {
			me.elementMouseOver['ploshad']=true;
		}
		this._ploshad.onmouseout=function () {
			me._ploshadname.style[domTransition]='none';
			me._ploshadname.style.visibility='hidden';
			me._ploshadname.ggVisible=false;
			me.elementMouseOver['ploshad']=false;
		}
		this._ploshad.ontouchend=function () {
			me.elementMouseOver['ploshad']=false;
		}
		this._ploshad.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._ploshadname=document.createElement('div');
		this._ploshadname__text=document.createElement('div');
		this._ploshadname.className='ggskin ggskin_textdiv';
		this._ploshadname.ggTextDiv=this._ploshadname__text;
		this._ploshadname.ggId="PloshadName";
		this._ploshadname.ggLeft=-53;
		this._ploshadname.ggTop=-57;
		this._ploshadname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ploshadname.ggVisible=false;
		this._ploshadname.className='ggskin ggskin_text ';
		this._ploshadname.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -53px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 108px;';
		this._ploshadname.setAttribute('style',hs);
		this._ploshadname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 108px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._ploshadname__text.setAttribute('style',hs);
		this._ploshadname__text.innerHTML="\u041f\u043b\u043e\u0449\u0430\u0434\u044c";
		this._ploshadname.appendChild(this._ploshadname__text);
		me._ploshadname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ploshadname.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ploshadname.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._ploshad.appendChild(this._ploshadname);
		this._chemamap.appendChild(this._ploshad);

		this._trapes=document.createElement('div');
		this._trapes__img=document.createElement('img');
		this._trapes__img.className='ggskin ggskin_button';
		this._trapes__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Trapeznaya_txt.png');
		this._trapes__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._trapes__img.className='ggskin ggskin_button';
		this._trapes__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._trapes__img);
		this._trapes.appendChild(this._trapes__img);
		this._trapes.ggId="Trapes";
		this._trapes.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._trapes.ggVisible=true;
		this._trapes.className='ggskin ggskin_button ';
		this._trapes.ggType='button';
		hs ='';
		hs+='height : 1.5vw;';
		hs+='left : 37%;';
		hs+='position : absolute;';
		hs+='top : 38%;';
		hs+='visibility : inherit;';
		hs+='width : 6vw;';
		this._trapes.setAttribute('style',hs);
		this._trapes.style[domTransform + 'Origin']='50% 50%';
		me._trapes.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._trapes.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._trapes.onclick=function () {
			me._chemamap.ggVisible = !me._chemamap.ggVisible;
			me._chemamap.style[domTransition]='none';
			me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
			
			pushNode("{node76}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
			
			me.player.openNext("{node78}","");
		}
		this._trapes.onmouseover=function () {
			me.elementMouseOver['trapes']=true;
		}
		this._trapes.onmouseout=function () {
			me._trapesname.style[domTransition]='none';
			me._trapesname.style.visibility='hidden';
			me._trapesname.ggVisible=false;
			me.elementMouseOver['trapes']=false;
		}
		this._trapes.ontouchend=function () {
			me.elementMouseOver['trapes']=false;
		}
		this._trapes.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._trapesname=document.createElement('div');
		this._trapesname__text=document.createElement('div');
		this._trapesname.className='ggskin ggskin_textdiv';
		this._trapesname.ggTextDiv=this._trapesname__text;
		this._trapesname.ggId="Trapesname";
		this._trapesname.ggLeft=-53;
		this._trapesname.ggTop=-57;
		this._trapesname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._trapesname.ggVisible=false;
		this._trapesname.className='ggskin ggskin_text ';
		this._trapesname.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -53px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 108px;';
		this._trapesname.setAttribute('style',hs);
		this._trapesname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 108px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._trapesname__text.setAttribute('style',hs);
		this._trapesname__text.innerHTML="\u0422\u0440\u0430\u043f\u0435\u0437\u043d\u0430\u044f";
		this._trapesname.appendChild(this._trapesname__text);
		me._trapesname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._trapesname.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._trapesname.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._trapes.appendChild(this._trapesname);
		this._chemamap.appendChild(this._trapes);
		
		this._masterov=document.createElement('div');
		this._masterov__img=document.createElement('img');
		this._masterov__img.className='ggskin ggskin_button';
		this._masterov__img.setAttribute('src',basePath + 'MobilemapIconstAndText/Craft_txt.png');
		this._masterov__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._masterov__img.className='ggskin ggskin_button';
		this._masterov__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._masterov__img);
		this._masterov.appendChild(this._masterov__img);
		this._masterov.ggId="Masterov";
		this._masterov.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._masterov.ggVisible=true;
		this._masterov.className='ggskin ggskin_button ';
		this._masterov.ggType='button';
		hs ='';
		hs+='height : 1.5vw;';
		hs+='left : 45%;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='visibility : inherit;';
		hs+='width : 8vw;';
		this._masterov.setAttribute('style',hs);
		this._masterov.style[domTransform + 'Origin']='50% 50%';
		me._masterov.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._masterov.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._masterov.onclick=function () {
			me._chemamap.ggVisible = !me._chemamap.ggVisible;
			me._chemamap.style[domTransition]='none';
			me._chemamap.style.visibility=((me._chemamap.ggVisible)&&(Number(me._chemamap.style.opacity)>0||!me._chemamap.style.opacity))?'inherit':'hidden';
			
			pushNode("{node71}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
			
			me.player.openNext("{node71}","");
		}
		this._masterov.onmouseover=function () {
			me.elementMouseOver['masterov']=true;
		}
		this._masterov.onmouseout=function () {
			me._masterovname.style[domTransition]='none';
			me._masterovname.style.visibility='hidden';
			me._masterovname.ggVisible=false;
			me.elementMouseOver['masterov']=false;
		}
		this._masterov.ontouchend=function () {
			me.elementMouseOver['masterov']=false;
		}
		this._masterov.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._masterovname=document.createElement('div');
		this._masterovname__text=document.createElement('div');
		this._masterovname.className='ggskin ggskin_textdiv';
		this._masterovname.ggTextDiv=this._masterovname__text;
		this._masterovname.ggId="MasterovName";
		this._masterovname.ggLeft=-53;
		this._masterovname.ggTop=-57;
		this._masterovname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._masterovname.ggVisible=false;
		this._masterovname.className='ggskin ggskin_text ';
		this._masterovname.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -53px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 108px;';
		this._masterovname.setAttribute('style',hs);
		this._masterovname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 108px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0.392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._masterovname__text.setAttribute('style',hs);
		this._masterovname__text.innerHTML="\u0413\u043e\u0440\u043e\u0434 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432";
		this._masterovname.appendChild(this._masterovname__text);
		me._masterovname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._masterovname.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._masterovname.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._masterov.appendChild(this._masterovname);
		this._chemamap.appendChild(this._masterov);
		this.divSkin.appendChild(this._chemamap);

		this.mapforMobile = document.createElement('div');
		this.mapforMobile.innerHTML = ' <div id="thumbnail-slider">             <div class="inner">                 <ul>                     <li>                         <div>                             <a onclick="loadScene77()" class="thumb" href="MobilemapIconstAndText/Baloon_icon.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Overview_txt.png">                         </div>                     </li>                     <li>                         <div>                             <a  onclick="loadScene71()" class="thumb" href="MobilemapIconstAndText/Craft_icon.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Craft_txt.png">                         </div>                     </li>                     <li>                         <div>                             <a   onclick="loadScene74()" class="thumb" href="MobilemapIconstAndText/Camp_icon.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Camp_txt.png">                         </div>                     </li>                     <li>                         <div>                             <a  onclick="loadScene79()" class="thumb" href="MobilemapIconstAndText/Enisey_icon.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Eniseyskaya_Sibir_txt.png">                         </div>                     </li>                     <li>                         <div>                             <a  onclick="loadScene79()" class="thumb" href="MobilemapIconstAndText/Gazebo_icon.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Gazebo_txt.png">                         </div>                     </li>                     <li>                         <div>                             <a  onclick="loadScene72()" class="thumb" href="MobilemapIconstAndText/House_icon.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Juravlenok_txt.png">                         </div>                     </li>                     <li>                         <div>                             <a  onclick="loadScene96()" class="thumb" href="MobilemapIconstAndText/Market_icon.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Market_txt.png">                         </div>                     </li>                     <li>                         <div>                             <a  onclick="loadScene1()" class="thumb" href="MobilemapIconstAndText/Museum_icon.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Museum_txt.png">                         </div>                     </li>                     <li>                         <div>                             <a  onclick="loadScene70()" class="thumb" href="MobilemapIconstAndText/Stage_icon.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Main_stage_txt.png">                         </div>                     </li>                     <li>                         <div>                             <a  onclick="loadScene78()" class="thumb" href="MobilemapIconstAndText/Stove_icon.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Trapeznaya_txt.png">                         </div>                     </li>                     <li>                         <div>                             <a  onclick="loadScene73()" class="thumb" href="MobilemapIconstAndText/Obradovaya.png"></a>                             <img class="thumb-text" src="MobilemapIconstAndText/Tribal_txt.png">                         </div>                     </li>                  </ul>             </div>         </div>';
		this.mapforMobile.style.visibility='hidden';
		this.mapforMobile.style[domTransform + 'Origin']='0% 100%';
		this.divSkin.appendChild(this.mapforMobile);

		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._button_simplex_fullscreen.ggNodeChange();
		me.ggHotspotCallChildFunctions('ggNodeChange');
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._controller.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseOver['zoomin']) {
		}
		me._tt_zoomin.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseOver['zoomout']) {
		}
		me._tt_zoomout.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_stop_auto_rotate']) {
		}
		me._tt_stop_auto_rotate.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_start_auto_rotate']) {
		}
		me._tt_start_auto_rotate.ggUpdateConditionTimer();
		if (me.elementMouseOver['info']) {
		}
		me._tt_info.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_image_normalscreen']) {
		}
		me._tt_exit_fullscreen.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_image_fullscreen']) {
		}
		me._tt_enter_fullscreen.ggUpdateConditionTimer();
		if (me.elementMouseOver['gotohome']) {
			me._gotohometext.style[domTransition]='none';
			me._gotohometext.style.visibility=(Number(me._gotohometext.style.opacity)>0||!me._gotohometext.style.opacity)?'inherit':'hidden';
			me._gotohometext.ggVisible=true;
		}
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._title.ggUpdateText();
		me._description.ggUpdateText();
		me._author.ggUpdateText();
		me._datetime.ggUpdateText();
		me._copyright.ggUpdateText();
		if (me.elementMouseOver['glavscen']) {
			me._glavname.style[domTransition]='none';
			me._glavname.style.visibility=(Number(me._glavname.style.opacity)>0||!me._glavname.style.opacity)?'inherit':'hidden';
			me._glavname.ggVisible=true;
		}
		if (me.elementMouseOver['museum']) {
			me._museumname.style[domTransition]='none';
			me._museumname.style.visibility=(Number(me._museumname.style.opacity)>0||!me._museumname.style.opacity)?'inherit':'hidden';
			me._museumname.ggVisible=true;
		}
		if (me.elementMouseOver['obrad']) {
			me._obradname.style[domTransition]='none';
			me._obradname.style.visibility=(Number(me._obradname.style.opacity)>0||!me._obradname.style.opacity)?'inherit':'hidden';
			me._obradname.ggVisible=true;
		}
		if (me.elementMouseOver['trapes']) {
			me._trapesname.style[domTransition]='none';
			me._trapesname.style.visibility=(Number(me._trapesname.style.opacity)>0||!me._trapesname.style.opacity)?'inherit':'hidden';
			me._trapesname.ggVisible=true;
		}
		if (me.elementMouseOver['obshi']) {
			me._obshiname.style[domTransition]='none';
			me._obshiname.style.visibility=(Number(me._obshiname.style.opacity)>0||!me._obshiname.style.opacity)?'inherit':'hidden';
			me._obshiname.ggVisible=true;
		}
		if (me.elementMouseOver['palatochgor']) {
			me._palatochname.style[domTransition]='none';
			me._palatochname.style.visibility=(Number(me._palatochname.style.opacity)>0||!me._palatochname.style.opacity)?'inherit':'hidden';
			me._palatochname.ggVisible=true;
		}
		if (me.elementMouseOver['masterov']) {
			me._masterovname.style[domTransition]='none';
			me._masterovname.style.visibility=(Number(me._masterovname.style.opacity)>0||!me._masterovname.style.opacity)?'inherit':'hidden';
			me._masterovname.ggVisible=true;
		}
		if (me.elementMouseOver['guavlenok']) {
			me._guravname.style[domTransition]='none';
			me._guravname.style.visibility=(Number(me._guravname.style.opacity)>0||!me._guravname.style.opacity)?'inherit':'hidden';
			me._guravname.ggVisible=true;
		}
		if (me.elementMouseOver['ploshad']) {
			me._ploshadname.style[domTransition]='none';
			me._ploshadname.style.visibility=(Number(me._ploshadname.style.opacity)>0||!me._ploshadname.style.opacity)?'inherit':'hidden';
			me._ploshadname.ggVisible=true;
		}
		if (me.elementMouseOver['_market']) {
			me.marketname.style[domTransition]='none';
			me.marketname.style.visibility=(Number(me.marketname.style.opacity)>0||!me.marketname.style.opacity)?'inherit':'hidden';
			me.marketname.ggVisible=true;
		}
		if (me.elementMouseOver['besedka']) {
			me.besedkaName.style[domTransition]='none';
			me.besedkaName.style.visibility=(Number(me.besedkaName.style.opacity)>0||!me.besedkaName.style.opacity)?'inherit':'hidden';
			me.besedkaName.ggVisible=true;
		}
		if (me.elementMouseOver['esibir']) {
			me.esibirName.style[domTransition]='none';
			me.esibirName.style.visibility=(Number(me.esibirName.style.opacity)>0||!me.esibirName.style.opacity)?'inherit':'hidden';
			me.esibirName.ggVisible=true;
		}
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_node') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				pushNode(me.hotspot.url,{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
				
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hsimage_node0=document.createElement('div');
			this._hsimage_node0__img=document.createElement('img');
			this._hsimage_node0__img.className='ggskin ggskin_svg';
			this._hsimage_node0__img.setAttribute('src',basePath + 'images/hsimage_node0.svg');
			this._hsimage_node0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hsimage_node0__img['ondragstart']=function() { return false; };
			this._hsimage_node0.appendChild(this._hsimage_node0__img);
			this._hsimage_node0.ggId="hsimage_node";
			this._hsimage_node0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage_node0.ggVisible=true;
			this._hsimage_node0.className='ggskin ggskin_svg ';
			this._hsimage_node0.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._hsimage_node0.setAttribute('style',hs);
			this._hsimage_node0.style[domTransform + 'Origin']='50% 50%';
			me._hsimage_node0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsimage_node0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsimage_node0.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hsimage_node0);
			this._hotspot_preview0=document.createElement('div');
			this._hotspot_preview0.ggId="hotspot_preview";
			this._hotspot_preview0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_preview0.ggVisible=false;
			this._hotspot_preview0.className='ggskin ggskin_container ';
			this._hotspot_preview0.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -73px;';
			hs+='position : absolute;';
			hs+='top : -128px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			this._hotspot_preview0.setAttribute('style',hs);
			this._hotspot_preview0.style[domTransform + 'Origin']='50% 50%';
			me._hotspot_preview0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot_preview0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hotspot_preview0.ggCurrentLogicStateVisible = -1;
			this._hotspot_preview0.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hotspot_preview0.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hotspot_preview0.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hotspot_preview0.style[domTransition]='';
					if (me._hotspot_preview0.ggCurrentLogicStateVisible == 0) {
						me._hotspot_preview0.style.visibility=(Number(me._hotspot_preview0.style.opacity)>0||!me._hotspot_preview0.style.opacity)?'inherit':'hidden';
						me._hotspot_preview0.ggVisible=true;
					}
					else {
						me._hotspot_preview0.style.visibility="hidden";
						me._hotspot_preview0.ggVisible=false;
					}
				}
			}
			this._hotspot_preview0.ggUpdatePosition=function () {
			}
			this._preview_picture_frame_1=document.createElement('div');
			this._preview_picture_frame_1.ggId="preview_picture_frame ";
			this._preview_picture_frame_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_picture_frame_1.ggVisible=true;
			this._preview_picture_frame_1.className='ggskin ggskin_rectangle ';
			this._preview_picture_frame_1.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			this._preview_picture_frame_1.setAttribute('style',hs);
			this._preview_picture_frame_1.style[domTransform + 'Origin']='50% 50%';
			me._preview_picture_frame_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_picture_frame_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_picture_frame_1.ggUpdatePosition=function () {
			}
			this._hotspot_preview0.appendChild(this._preview_picture_frame_1);
			this._preview_nodeimage1=document.createElement('div');
			this._preview_nodeimage1__img=document.createElement('img');
			this._preview_nodeimage1__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage1__img.setAttribute('src',basePath + "images/preview_nodeimage0_" + nodeId + ".png");
			this._preview_nodeimage1.ggNodeId=nodeId;
			this._preview_nodeimage1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._preview_nodeimage1__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage1__img['ondragstart']=function() { return false; };
			this._preview_nodeimage1.appendChild(this._preview_nodeimage1__img);
			this._preview_nodeimage1.ggId="Preview NodeImage";
			this._preview_nodeimage1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_nodeimage1.ggVisible=true;
			this._preview_nodeimage1.className='ggskin ggskin_nodeimage ';
			this._preview_nodeimage1.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._preview_nodeimage1.setAttribute('style',hs);
			this._preview_nodeimage1.style[domTransform + 'Origin']='50% 50%';
			me._preview_nodeimage1.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._preview_nodeimage1.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._preview_nodeimage1.ggUpdatePosition=function () {
			}
			this._hotspot_preview0.appendChild(this._preview_nodeimage1);
			this._tooltip_bg0=document.createElement('div');
			this._tooltip_bg0.ggId="tooltip_bg";
			this._tooltip_bg0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_bg0.ggVisible=true;
			this._tooltip_bg0.className='ggskin ggskin_rectangle ';
			this._tooltip_bg0.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._tooltip_bg0.setAttribute('style',hs);
			this._tooltip_bg0.style[domTransform + 'Origin']='50% 50%';
			me._tooltip_bg0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_bg0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_bg0.ggUpdatePosition=function () {
			}
			this._hotspot_preview0.appendChild(this._tooltip_bg0);
			this._tooltip_drop_shadow0=document.createElement('div');
			this._tooltip_drop_shadow0__text=document.createElement('div');
			this._tooltip_drop_shadow0.className='ggskin ggskin_textdiv';
			this._tooltip_drop_shadow0.ggTextDiv=this._tooltip_drop_shadow0__text;
			this._tooltip_drop_shadow0.ggId="tooltip_drop_shadow";
			this._tooltip_drop_shadow0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_drop_shadow0.ggVisible=true;
			this._tooltip_drop_shadow0.className='ggskin ggskin_text ';
			this._tooltip_drop_shadow0.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._tooltip_drop_shadow0.setAttribute('style',hs);
			this._tooltip_drop_shadow0.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip_drop_shadow0__text.setAttribute('style',hs);
			this._tooltip_drop_shadow0__text.innerHTML=me.hotspot.title;
			this._tooltip_drop_shadow0.appendChild(this._tooltip_drop_shadow0__text);
			me._tooltip_drop_shadow0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_drop_shadow0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_drop_shadow0.ggUpdatePosition=function () {
			}
			this._hotspot_preview0.appendChild(this._tooltip_drop_shadow0);
			this._tooltip0=document.createElement('div');
			this._tooltip0__text=document.createElement('div');
			this._tooltip0.className='ggskin ggskin_textdiv';
			this._tooltip0.ggTextDiv=this._tooltip0__text;
			this._tooltip0.ggId="tooltip";
			this._tooltip0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip0.ggVisible=true;
			this._tooltip0.className='ggskin ggskin_text ';
			this._tooltip0.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._tooltip0.setAttribute('style',hs);
			this._tooltip0.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip0__text.setAttribute('style',hs);
			this._tooltip0__text.innerHTML=me.hotspot.title;
			this._tooltip0.appendChild(this._tooltip0__text);
			me._tooltip0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip0.ggUpdatePosition=function () {
			}
			this._hotspot_preview0.appendChild(this._tooltip0);
			this._checkmark_tick0=document.createElement('div');
			this._checkmark_tick0__img=document.createElement('img');
			this._checkmark_tick0__img.className='ggskin ggskin_svg';
			this._checkmark_tick0__img.setAttribute('src',basePath + 'images/checkmark_tick0.svg');
			this._checkmark_tick0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._checkmark_tick0__img['ondragstart']=function() { return false; };
			this._checkmark_tick0.appendChild(this._checkmark_tick0__img);
			this._checkmark_tick0.ggId="checkmark_tick";
			this._checkmark_tick0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._checkmark_tick0.ggVisible=false;
			this._checkmark_tick0.className='ggskin ggskin_svg ';
			this._checkmark_tick0.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			this._checkmark_tick0.setAttribute('style',hs);
			this._checkmark_tick0.style[domTransform + 'Origin']='50% 50%';
			me._checkmark_tick0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._checkmark_tick0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._checkmark_tick0.ggCurrentLogicStateVisible = -1;
			this._checkmark_tick0.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._checkmark_tick0.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._checkmark_tick0.style[domTransition]='';
					if (me._checkmark_tick0.ggCurrentLogicStateVisible == 0) {
						me._checkmark_tick0.style.visibility=(Number(me._checkmark_tick0.style.opacity)>0||!me._checkmark_tick0.style.opacity)?'inherit':'hidden';
						me._checkmark_tick0.ggVisible=true;
					}
					else {
						me._checkmark_tick0.style.visibility="hidden";
						me._checkmark_tick0.ggVisible=false;
					}
				}
			}
			this._checkmark_tick0.ggUpdatePosition=function () {
			}
			this._checkmark_tick0.ggNodeChange=function () {
				me._checkmark_tick0.ggUpdateConditionNodeChange();
			}
			this._hotspot_preview0.appendChild(this._checkmark_tick0);
			this.__div.appendChild(this._hotspot_preview0);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hotspot_preview0.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_info') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 330px;';
			hs+='position : absolute;';
			hs+='top : 28px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				// me.skin._information.ggVisible = !me.skin._information.ggVisible;
				// me.skin._information.style[domTransition]='none';
				// me.skin._information.style.visibility=((me.skin._information.ggVisible)&&(Number(me.skin._information.style.opacity)>0||!me.skin._information.style.opacity))?'inherit':'hidden';
				// me.skin._info_title.ggText="<b>"+me.hotspot.title+"<\/b>";
				// me.skin._info_title__text.innerHTML=me.skin._info_title.ggText;
				// if (me.skin._info_title.ggUpdateText) {
				// 	me.skin._info_title.ggUpdateText=function() {
				// 		var hs="<b>"+me.hotspot.title+"<\/b>";
				// 		if (hs!=this.ggText) {
				// 			this.ggText=hs;
				// 			this.ggTextDiv.innerHTML=hs;
				// 			if (this.ggUpdatePosition) this.ggUpdatePosition();
				// 		}
				// 	}
				// }
				// me.skin._info_text_body.ggText=me.hotspot.description;
				// me.skin._info_text_body__text.innerHTML=me.skin._info_text_body.ggText;
				// if (me.skin._info_text_body.ggUpdateText) {
				// 	me.skin._info_text_body.ggUpdateText=function() {
				// 		var hs=me.hotspot.description;
				// 		if (hs!=this.ggText) {
				// 			this.ggText=hs;
				// 			this.ggTextDiv.innerHTML=hs;
				// 			if (this.ggUpdatePosition) this.ggUpdatePosition();
				// 		}
				// 	}
				// }
				// me.skin._screentint.style[domTransition]='none';
				// me.skin._screentint.style.visibility=(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity)?'inherit':'hidden';
				// me.skin._screentint.ggVisible=true;
				// me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_info_image=document.createElement('div');
			this._ht_info_image__img=document.createElement('img');
			this._ht_info_image__img.className='ggskin ggskin_svg';
			this._ht_info_image__img.setAttribute('src',basePath + 'images/ht_info_image.svg');
			this._ht_info_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_info_image__img['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__img);
			this._ht_info_image.ggId="ht_info_image";
			this._ht_info_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_image.ggVisible=true;
			this._ht_info_image.className='ggskin ggskin_svg ';
			this._ht_info_image.ggType='svg';
			hs ='';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -17px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_info_image.setAttribute('style',hs);
			this._ht_info_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_info_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_info_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_info_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_info_image);
			this._tt_information=document.createElement('div');
			this._tt_information__text=document.createElement('div');
			this._tt_information.className='ggskin ggskin_textdiv';
			this._tt_information.ggTextDiv=this._tt_information__text;
			this._tt_information.ggId="tt_information";
			this._tt_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_information.ggVisible=false;
			this._tt_information.className='ggskin ggskin_text ';
			this._tt_information.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 20px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			this._tt_information.setAttribute('style',hs);
			this._tt_information.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 95px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.784314);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tt_information__text.setAttribute('style',hs);
			this._tt_information__text.innerHTML=me.hotspot.title+" "+me.hotspot.description;
			this._tt_information.appendChild(this._tt_information__text);
			me._tt_information.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_information.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_information.ggCurrentLogicStateVisible = -1;
			this._tt_information.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_information.style[domTransition]='';
					if (me._tt_information.ggCurrentLogicStateVisible == 0) {
						me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
						me._tt_information.ggVisible=true;
					}
					else {
						me._tt_information.style.visibility="hidden";
						me._tt_information.ggVisible=false;
					}
				}
			}
			this._tt_information.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._tt_information);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_information.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_image') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 435px;';
			hs+='position : absolute;';
			hs+='top : 28px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._image_popup.style[domTransition]='none';
				me.skin._image_popup.style.visibility=(Number(me.skin._image_popup.style.opacity)>0||!me.skin._image_popup.style.opacity)?'inherit':'hidden';
				me.skin._image_popup.ggVisible=true;
				me.skin._popup_image.ggText=me.player.getBasePath()+""+me.hotspot.url;
				me.skin._popup_image__img.src=me.skin._popup_image.ggText;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility=(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity)?'inherit':'hidden';
				me.skin._screentint.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hstext_image=document.createElement('div');
			this._hstext_image__text=document.createElement('div');
			this._hstext_image.className='ggskin ggskin_textdiv';
			this._hstext_image.ggTextDiv=this._hstext_image__text;
			this._hstext_image.ggId="hstext_image";
			this._hstext_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext_image.ggVisible=false;
			this._hstext_image.className='ggskin ggskin_text ';
			this._hstext_image.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -51px;';
			hs+='position : absolute;';
			hs+='top : 20px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			this._hstext_image.setAttribute('style',hs);
			this._hstext_image.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 95px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext_image__text.setAttribute('style',hs);
			this._hstext_image__text.innerHTML=me.hotspot.title;
			this._hstext_image.appendChild(this._hstext_image__text);
			me._hstext_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext_image.ggCurrentLogicStateVisible = -1;
			this._hstext_image.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext_image.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext_image.style[domTransition]='';
					if (me._hstext_image.ggCurrentLogicStateVisible == 0) {
						me._hstext_image.style.visibility=(Number(me._hstext_image.style.opacity)>0||!me._hstext_image.style.opacity)?'inherit':'hidden';
						me._hstext_image.ggVisible=true;
					}
					else {
						me._hstext_image.style.visibility="hidden";
						me._hstext_image.ggVisible=false;
					}
				}
			}
			this._hstext_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hstext_image);
			this._hsimage_image=document.createElement('div');
			this._hsimage_image__img=document.createElement('img');
			this._hsimage_image__img.className='ggskin ggskin_svg';
			this._hsimage_image__img.setAttribute('src',basePath + 'images/hsimage_image.svg');
			this._hsimage_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hsimage_image__img['ondragstart']=function() { return false; };
			this._hsimage_image.appendChild(this._hsimage_image__img);
			this._hsimage_image.ggId="hsimage_image";
			this._hsimage_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage_image.ggVisible=true;
			this._hsimage_image.className='ggskin ggskin_svg ';
			this._hsimage_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -24px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._hsimage_image.setAttribute('style',hs);
			this._hsimage_image.style[domTransform + 'Origin']='50% 50%';
			me._hsimage_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsimage_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsimage_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hsimage_image);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext_image.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_url') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_url";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 538px;';
			hs+='position : absolute;';
			hs+='top : 27px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hsimage_url=document.createElement('div');
			this._hsimage_url__img=document.createElement('img');
			this._hsimage_url__img.className='ggskin ggskin_svg';
			this._hsimage_url__img.setAttribute('src',basePath + 'images/hsimage_url.svg');
			this._hsimage_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hsimage_url__img['ondragstart']=function() { return false; };
			this._hsimage_url.appendChild(this._hsimage_url__img);
			this._hsimage_url.ggId="hsimage_url";
			this._hsimage_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage_url.ggVisible=true;
			this._hsimage_url.className='ggskin ggskin_svg ';
			this._hsimage_url.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._hsimage_url.setAttribute('style',hs);
			this._hsimage_url.style[domTransform + 'Origin']='50% 50%';
			me._hsimage_url.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsimage_url.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsimage_url.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hsimage_url);
			this._hstext_url=document.createElement('div');
			this._hstext_url__text=document.createElement('div');
			this._hstext_url.className='ggskin ggskin_textdiv';
			this._hstext_url.ggTextDiv=this._hstext_url__text;
			this._hstext_url.ggId="hstext_url";
			this._hstext_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext_url.ggVisible=true;
			this._hstext_url.className='ggskin ggskin_text ';
			this._hstext_url.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='opacity : 0;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			this._hstext_url.setAttribute('style',hs);
			this._hstext_url.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext_url__text.setAttribute('style',hs);
			this._hstext_url__text.innerHTML=me.hotspot.title;
			this._hstext_url.appendChild(this._hstext_url__text);
			me._hstext_url.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext_url.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext_url.ggCurrentLogicStateAlpha = -1;
			this._hstext_url.ggUpdateConditionTimer=function () {
				var newLogicStateAlpha;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateAlpha = 0;
				}
				else {
					newLogicStateAlpha = -1;
				}
				if (me._hstext_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
					me._hstext_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
					me._hstext_url.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
					if (me._hstext_url.ggCurrentLogicStateAlpha == 0) {
						me._hstext_url.style.visibility=me._hstext_url.ggVisible?'inherit':'hidden';
						me._hstext_url.style.opacity=1;
					}
					else {
						me._hstext_url.style.visibility="hidden";
						me._hstext_url.style.opacity=0;
					}
				}
			}
			this._hstext_url.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext_url);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext_url.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='HotGo') {
			this.__div=document.createElement('div');
			this.__div.ggId="HotGo";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 174px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
		} else
		if (hotspot.skinid=='ht_GO') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_GO";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hsimage_node=document.createElement('div');
			this._hsimage_node__img=document.createElement('img');
			this._hsimage_node__img.className='ggskin ggskin_svg';
			this._hsimage_node__img.setAttribute('src',basePath + 'images/hsimage_node.svg');
			this._hsimage_node__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hsimage_node__img['ondragstart']=function() { return false; };
			this._hsimage_node.appendChild(this._hsimage_node__img);
			this._hsimage_node.ggId="hsimage_node";
			this._hsimage_node.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage_node.ggVisible=true;
			this._hsimage_node.className='ggskin ggskin_svg ';
			this._hsimage_node.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -14px;';
			hs+='position : absolute;';
			hs+='top : 24px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._hsimage_node.setAttribute('style',hs);
			this._hsimage_node.style[domTransform + 'Origin']='50% 50%';
			me._hsimage_node.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsimage_node.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsimage_node.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hsimage_node);
			this._hotspot_preview=document.createElement('div');
			this._hotspot_preview.ggId="hotspot_preview";
			this._hotspot_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_preview.ggVisible=false;
			this._hotspot_preview.className='ggskin ggskin_container ';
			this._hotspot_preview.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -73px;';
			hs+='position : absolute;';
			hs+='top : -128px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			this._hotspot_preview.setAttribute('style',hs);
			this._hotspot_preview.style[domTransform + 'Origin']='50% 50%';
			me._hotspot_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hotspot_preview.ggCurrentLogicStateVisible = -1;
			this._hotspot_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hotspot_preview.style[domTransition]='';
					if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
						me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
						me._hotspot_preview.ggVisible=true;
					}
					else {
						me._hotspot_preview.style.visibility="hidden";
						me._hotspot_preview.ggVisible=false;
					}
				}
			}
			this._hotspot_preview.ggUpdatePosition=function () {
			}
			this._preview_picture_frame_0=document.createElement('div');
			this._preview_picture_frame_0.ggId="preview_picture_frame ";
			this._preview_picture_frame_0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_picture_frame_0.ggVisible=true;
			this._preview_picture_frame_0.className='ggskin ggskin_rectangle ';
			this._preview_picture_frame_0.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			this._preview_picture_frame_0.setAttribute('style',hs);
			this._preview_picture_frame_0.style[domTransform + 'Origin']='50% 50%';
			me._preview_picture_frame_0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_picture_frame_0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_picture_frame_0.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._preview_picture_frame_0);
			this._preview_nodeimage0=document.createElement('div');
			this._preview_nodeimage0__img=document.createElement('img');
			this._preview_nodeimage0__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage0__img.setAttribute('src',basePath + "images/preview_nodeimage0_" + nodeId + ".png");
			this._preview_nodeimage0.ggNodeId=nodeId;
			this._preview_nodeimage0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._preview_nodeimage0__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage0__img['ondragstart']=function() { return false; };
			this._preview_nodeimage0.appendChild(this._preview_nodeimage0__img);
			this._preview_nodeimage0.ggId="Preview NodeImage";
			this._preview_nodeimage0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_nodeimage0.ggVisible=true;
			this._preview_nodeimage0.className='ggskin ggskin_nodeimage ';
			this._preview_nodeimage0.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._preview_nodeimage0.setAttribute('style',hs);
			this._preview_nodeimage0.style[domTransform + 'Origin']='50% 50%';
			me._preview_nodeimage0.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._preview_nodeimage0.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._preview_nodeimage0.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._preview_nodeimage0);
			this._tooltip_bg=document.createElement('div');
			this._tooltip_bg.ggId="tooltip_bg";
			this._tooltip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_bg.ggVisible=true;
			this._tooltip_bg.className='ggskin ggskin_rectangle ';
			this._tooltip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._tooltip_bg.setAttribute('style',hs);
			this._tooltip_bg.style[domTransform + 'Origin']='50% 50%';
			me._tooltip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_bg.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._tooltip_bg);
			this._tooltip_drop_shadow=document.createElement('div');
			this._tooltip_drop_shadow__text=document.createElement('div');
			this._tooltip_drop_shadow.className='ggskin ggskin_textdiv';
			this._tooltip_drop_shadow.ggTextDiv=this._tooltip_drop_shadow__text;
			this._tooltip_drop_shadow.ggId="tooltip_drop_shadow";
			this._tooltip_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_drop_shadow.ggVisible=true;
			this._tooltip_drop_shadow.className='ggskin ggskin_text ';
			this._tooltip_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._tooltip_drop_shadow.setAttribute('style',hs);
			this._tooltip_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip_drop_shadow__text.setAttribute('style',hs);
			this._tooltip_drop_shadow__text.innerHTML=me.hotspot.title;
			this._tooltip_drop_shadow.appendChild(this._tooltip_drop_shadow__text);
			me._tooltip_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_drop_shadow.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._tooltip_drop_shadow);
			this._tooltip=document.createElement('div');
			this._tooltip__text=document.createElement('div');
			this._tooltip.className='ggskin ggskin_textdiv';
			this._tooltip.ggTextDiv=this._tooltip__text;
			this._tooltip.ggId="tooltip";
			this._tooltip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip.ggVisible=true;
			this._tooltip.className='ggskin ggskin_text ';
			this._tooltip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._tooltip.setAttribute('style',hs);
			this._tooltip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip__text.setAttribute('style',hs);
			this._tooltip__text.innerHTML=me.hotspot.title;
			this._tooltip.appendChild(this._tooltip__text);
			me._tooltip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._tooltip);
			this._checkmark_tick=document.createElement('div');
			this._checkmark_tick__img=document.createElement('img');
			this._checkmark_tick__img.className='ggskin ggskin_svg';
			this._checkmark_tick__img.setAttribute('src',basePath + 'images/checkmark_tick.svg');
			this._checkmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._checkmark_tick__img['ondragstart']=function() { return false; };
			this._checkmark_tick.appendChild(this._checkmark_tick__img);
			this._checkmark_tick.ggId="checkmark_tick";
			this._checkmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._checkmark_tick.ggVisible=false;
			this._checkmark_tick.className='ggskin ggskin_svg ';
			this._checkmark_tick.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			this._checkmark_tick.setAttribute('style',hs);
			this._checkmark_tick.style[domTransform + 'Origin']='50% 50%';
			me._checkmark_tick.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._checkmark_tick.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._checkmark_tick.ggCurrentLogicStateVisible = -1;
			this._checkmark_tick.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._checkmark_tick.style[domTransition]='';
					if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
						me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
						me._checkmark_tick.ggVisible=true;
					}
					else {
						me._checkmark_tick.style.visibility="hidden";
						me._checkmark_tick.ggVisible=false;
					}
				}
			}
			this._checkmark_tick.ggUpdatePosition=function () {
			}
			this._checkmark_tick.ggNodeChange=function () {
				me._checkmark_tick.ggUpdateConditionNodeChange();
			}
			this._hotspot_preview.appendChild(this._checkmark_tick);
			this.__div.appendChild(this._hotspot_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hotspot_preview.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_Obsh') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_Obsh";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				pushNode(me.hotspot.url,{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
				
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_obshhsimage_node0=document.createElement('div');
			this._ht_obshhsimage_node0__img=document.createElement('img');
			this._ht_obshhsimage_node0__img.className='ggskin ggskin_svg';
			this._ht_obshhsimage_node0__img.setAttribute('src',basePath + 'images/ht_obshhsimage_node0.svg');
			this._ht_obshhsimage_node0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_obshhsimage_node0__img['ondragstart']=function() { return false; };
			this._ht_obshhsimage_node0.appendChild(this._ht_obshhsimage_node0__img);
			this._ht_obshhsimage_node0__imgo=document.createElement('img');
			this._ht_obshhsimage_node0__imgo.className='ggskin ggskin_svg';
			this._ht_obshhsimage_node0__imgo.setAttribute('src',basePath + 'images/ht_obshhsimage_node0__o.svg');
			this._ht_obshhsimage_node0__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_obshhsimage_node0__imgo['ondragstart']=function() { return false; };
			this._ht_obshhsimage_node0.appendChild(this._ht_obshhsimage_node0__imgo);
			this._ht_obshhsimage_node0.ggId="ht_Obshhsimage_node";
			this._ht_obshhsimage_node0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_obshhsimage_node0.ggVisible=true;
			this._ht_obshhsimage_node0.className='ggskin ggskin_svg ';
			this._ht_obshhsimage_node0.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 37px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 37px;';
			this._ht_obshhsimage_node0.setAttribute('style',hs);
			this._ht_obshhsimage_node0.style[domTransform + 'Origin']='50% 50%';
			me._ht_obshhsimage_node0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_obshhsimage_node0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_obshhsimage_node0.onmouseover=function () {
				me._ht_obshhsimage_node0__img.style.visibility='hidden';
				me._ht_obshhsimage_node0__imgo.style.visibility='inherit';
			}
			this._ht_obshhsimage_node0.onmouseout=function () {
				me._ht_obshhsimage_node0__img.style.visibility='inherit';
				me._ht_obshhsimage_node0__imgo.style.visibility='hidden';
			}
			this._ht_obshhsimage_node0.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_obshhsimage_node0);
			this._ht_obsh_preview=document.createElement('div');
			this._ht_obsh_preview.ggId="ht_Obsh_preview";
			this._ht_obsh_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_obsh_preview.ggVisible=false;
			this._ht_obsh_preview.className='ggskin ggskin_container ';
			this._ht_obsh_preview.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -73px;';
			hs+='position : absolute;';
			hs+='top : -128px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			this._ht_obsh_preview.setAttribute('style',hs);
			this._ht_obsh_preview.style[domTransform + 'Origin']='50% 50%';
			me._ht_obsh_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_obsh_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._ht_obsh_preview.ggCurrentLogicStateVisible = -1;
			this._ht_obsh_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._ht_obsh_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._ht_obsh_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._ht_obsh_preview.style[domTransition]='';
					if (me._ht_obsh_preview.ggCurrentLogicStateVisible == 0) {
						me._ht_obsh_preview.style.visibility=(Number(me._ht_obsh_preview.style.opacity)>0||!me._ht_obsh_preview.style.opacity)?'inherit':'hidden';
						me._ht_obsh_preview.ggVisible=true;
					}
					else {
						me._ht_obsh_preview.style.visibility="hidden";
						me._ht_obsh_preview.ggVisible=false;
					}
				}
			}
			this._ht_obsh_preview.ggUpdatePosition=function () {
			}
			this._preview_picture_frame_=document.createElement('div');
			this._preview_picture_frame_.ggId="preview_picture_frame ";
			this._preview_picture_frame_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_picture_frame_.ggVisible=true;
			this._preview_picture_frame_.className='ggskin ggskin_rectangle ';
			this._preview_picture_frame_.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			this._preview_picture_frame_.setAttribute('style',hs);
			this._preview_picture_frame_.style[domTransform + 'Origin']='50% 50%';
			me._preview_picture_frame_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_picture_frame_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_picture_frame_.ggUpdatePosition=function () {
			}
			this._ht_obsh_preview.appendChild(this._preview_picture_frame_);
			this._preview_nodeimage=document.createElement('div');
			this._preview_nodeimage__img=document.createElement('img');
			this._preview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage__img.setAttribute('src',basePath + "images/preview_nodeimage0_" + nodeId + ".png");
			this._preview_nodeimage.ggNodeId=nodeId;
			this._preview_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._preview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage__img['ondragstart']=function() { return false; };
			this._preview_nodeimage.appendChild(this._preview_nodeimage__img);
			this._preview_nodeimage.ggId="Preview NodeImage";
			this._preview_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_nodeimage.ggVisible=true;
			this._preview_nodeimage.className='ggskin ggskin_nodeimage ';
			this._preview_nodeimage.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._preview_nodeimage.setAttribute('style',hs);
			this._preview_nodeimage.style[domTransform + 'Origin']='50% 50%';
			me._preview_nodeimage.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._preview_nodeimage.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._preview_nodeimage.ggUpdatePosition=function () {
			}
			this._ht_obsh_preview.appendChild(this._preview_nodeimage);
			this._ht_obshtooltip_bg=document.createElement('div');
			this._ht_obshtooltip_bg.ggId="ht_Obshtooltip_bg";
			this._ht_obshtooltip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_obshtooltip_bg.ggVisible=true;
			this._ht_obshtooltip_bg.className='ggskin ggskin_rectangle ';
			this._ht_obshtooltip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._ht_obshtooltip_bg.setAttribute('style',hs);
			this._ht_obshtooltip_bg.style[domTransform + 'Origin']='50% 50%';
			me._ht_obshtooltip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_obshtooltip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_obshtooltip_bg.ggUpdatePosition=function () {
			}
			this._ht_obsh_preview.appendChild(this._ht_obshtooltip_bg);
			this._ht_obshtooltip_drop_shadow=document.createElement('div');
			this._ht_obshtooltip_drop_shadow__text=document.createElement('div');
			this._ht_obshtooltip_drop_shadow.className='ggskin ggskin_textdiv';
			this._ht_obshtooltip_drop_shadow.ggTextDiv=this._ht_obshtooltip_drop_shadow__text;
			this._ht_obshtooltip_drop_shadow.ggId="ht_Obshtooltip_drop_shadow";
			this._ht_obshtooltip_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_obshtooltip_drop_shadow.ggVisible=true;
			this._ht_obshtooltip_drop_shadow.className='ggskin ggskin_text ';
			this._ht_obshtooltip_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._ht_obshtooltip_drop_shadow.setAttribute('style',hs);
			this._ht_obshtooltip_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._ht_obshtooltip_drop_shadow__text.setAttribute('style',hs);
			this._ht_obshtooltip_drop_shadow__text.innerHTML=me.hotspot.title;
			this._ht_obshtooltip_drop_shadow.appendChild(this._ht_obshtooltip_drop_shadow__text);
			me._ht_obshtooltip_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_obshtooltip_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_obshtooltip_drop_shadow.ggUpdatePosition=function () {
			}
			this._ht_obsh_preview.appendChild(this._ht_obshtooltip_drop_shadow);
			this._ht_obshtooltip=document.createElement('div');
			this._ht_obshtooltip__text=document.createElement('div');
			this._ht_obshtooltip.className='ggskin ggskin_textdiv';
			this._ht_obshtooltip.ggTextDiv=this._ht_obshtooltip__text;
			this._ht_obshtooltip.ggId="ht_Obshtooltip";
			this._ht_obshtooltip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_obshtooltip.ggVisible=true;
			this._ht_obshtooltip.className='ggskin ggskin_text ';
			this._ht_obshtooltip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._ht_obshtooltip.setAttribute('style',hs);
			this._ht_obshtooltip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._ht_obshtooltip__text.setAttribute('style',hs);
			this._ht_obshtooltip__text.innerHTML=me.hotspot.title;
			this._ht_obshtooltip.appendChild(this._ht_obshtooltip__text);
			me._ht_obshtooltip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_obshtooltip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_obshtooltip.ggUpdatePosition=function () {
			}
			this._ht_obsh_preview.appendChild(this._ht_obshtooltip);
			this._ht_obshcheckmark_tick=document.createElement('div');
			this._ht_obshcheckmark_tick__img=document.createElement('img');
			this._ht_obshcheckmark_tick__img.className='ggskin ggskin_svg';
			this._ht_obshcheckmark_tick__img.setAttribute('src',basePath + 'images/ht_obshcheckmark_tick.svg');
			this._ht_obshcheckmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_obshcheckmark_tick__img['ondragstart']=function() { return false; };
			this._ht_obshcheckmark_tick.appendChild(this._ht_obshcheckmark_tick__img);
			this._ht_obshcheckmark_tick.ggId="ht_Obshcheckmark_tick";
			this._ht_obshcheckmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_obshcheckmark_tick.ggVisible=false;
			this._ht_obshcheckmark_tick.className='ggskin ggskin_svg ';
			this._ht_obshcheckmark_tick.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			this._ht_obshcheckmark_tick.setAttribute('style',hs);
			this._ht_obshcheckmark_tick.style[domTransform + 'Origin']='50% 50%';
			me._ht_obshcheckmark_tick.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_obshcheckmark_tick.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._ht_obshcheckmark_tick.ggCurrentLogicStateVisible = -1;
			this._ht_obshcheckmark_tick.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._ht_obshcheckmark_tick.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._ht_obshcheckmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._ht_obshcheckmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._ht_obshcheckmark_tick.style[domTransition]='';
					if (me._ht_obshcheckmark_tick.ggCurrentLogicStateVisible == 0) {
						me._ht_obshcheckmark_tick.style.visibility=(Number(me._ht_obshcheckmark_tick.style.opacity)>0||!me._ht_obshcheckmark_tick.style.opacity)?'inherit':'hidden';
						me._ht_obshcheckmark_tick.ggVisible=true;
					}
					else {
						me._ht_obshcheckmark_tick.style.visibility="hidden";
						me._ht_obshcheckmark_tick.ggVisible=false;
					}
				}
			}
			this._ht_obshcheckmark_tick.ggUpdatePosition=function () {
			}
			this._ht_obshcheckmark_tick.ggNodeChange=function () {
				me._ht_obshcheckmark_tick.ggUpdateConditionNodeChange();
			}
			this._ht_obsh_preview.appendChild(this._ht_obshcheckmark_tick);
			this.__div.appendChild(this._ht_obsh_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._ht_obsh_preview.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_GoFly";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {pushNode(me.hotspot.url,{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
				
			me.player.openUrl(me.hotspot.url,me.hotspot.target);
			me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_obshhsimage_node=document.createElement('div');
			this._ht_obshhsimage_node__img=document.createElement('img');
			this._ht_obshhsimage_node__img.className='ggskin ggskin_svg';
			this._ht_obshhsimage_node__img.setAttribute('src',basePath + 'images/ht_obshhsimage_node.svg');
			this._ht_obshhsimage_node__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_obshhsimage_node__img['ondragstart']=function() { return false; };
			this._ht_obshhsimage_node.appendChild(this._ht_obshhsimage_node__img);
			this._ht_obshhsimage_node__imgo=document.createElement('img');
			this._ht_obshhsimage_node__imgo.className='ggskin ggskin_svg';
			this._ht_obshhsimage_node__imgo.setAttribute('src',basePath + 'images/ht_obshhsimage_node__o.svg');
			this._ht_obshhsimage_node__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_obshhsimage_node__imgo['ondragstart']=function() { return false; };
			this._ht_obshhsimage_node.appendChild(this._ht_obshhsimage_node__imgo);
			this._ht_obshhsimage_node.ggId="ht_Obshhsimage_node";
			this._ht_obshhsimage_node.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_obshhsimage_node.ggVisible=true;
			this._ht_obshhsimage_node.className='ggskin ggskin_svg ';
			this._ht_obshhsimage_node.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 37px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 37px;';
			this._ht_obshhsimage_node.setAttribute('style',hs);
			this._ht_obshhsimage_node.style[domTransform + 'Origin']='50% 50%';
			me._ht_obshhsimage_node.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_obshhsimage_node.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_obshhsimage_node.onmouseover=function () {
				me._ht_obshhsimage_node__img.style.visibility='hidden';
				me._ht_obshhsimage_node__imgo.style.visibility='inherit';
			}
			this._ht_obshhsimage_node.onmouseout=function () {
				me._ht_obshhsimage_node__img.style.visibility='inherit';
				me._ht_obshhsimage_node__imgo.style.visibility='hidden';
			}
			this._ht_obshhsimage_node.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_obshhsimage_node);
			this._ht_gofly_preview=document.createElement('div');
			this._ht_gofly_preview.ggId="ht_GoFly_preview";
			this._ht_gofly_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_gofly_preview.ggVisible=false;
			this._ht_gofly_preview.className='ggskin ggskin_container ';
			this._ht_gofly_preview.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -73px;';
			hs+='position : absolute;';
			hs+='top : -128px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			this._ht_gofly_preview.setAttribute('style',hs);
			this._ht_gofly_preview.style[domTransform + 'Origin']='50% 50%';
			me._ht_gofly_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_gofly_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._ht_gofly_preview.ggCurrentLogicStateVisible = -1;
			this._ht_gofly_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._ht_gofly_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._ht_gofly_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._ht_gofly_preview.style[domTransition]='';
					if (me._ht_gofly_preview.ggCurrentLogicStateVisible == 0) {
						me._ht_gofly_preview.style.visibility=(Number(me._ht_gofly_preview.style.opacity)>0||!me._ht_gofly_preview.style.opacity)?'inherit':'hidden';
						me._ht_gofly_preview.ggVisible=true;
					}
					else {
						me._ht_gofly_preview.style.visibility="hidden";
						me._ht_gofly_preview.ggVisible=false;
					}
				}
			}
			this._ht_gofly_preview.ggUpdatePosition=function () {
			}
			this._ht_goflypreview_picture_frame_=document.createElement('div');
			this._ht_goflypreview_picture_frame_.ggId="ht_GoFlypreview_picture_frame ";
			this._ht_goflypreview_picture_frame_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_goflypreview_picture_frame_.ggVisible=true;
			this._ht_goflypreview_picture_frame_.className='ggskin ggskin_rectangle ';
			this._ht_goflypreview_picture_frame_.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			this._ht_goflypreview_picture_frame_.setAttribute('style',hs);
			this._ht_goflypreview_picture_frame_.style[domTransform + 'Origin']='50% 50%';
			me._ht_goflypreview_picture_frame_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_goflypreview_picture_frame_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_goflypreview_picture_frame_.ggUpdatePosition=function () {
			}
			this._ht_gofly_preview.appendChild(this._ht_goflypreview_picture_frame_);
			this._ht_goflypreview_nodeimage=document.createElement('div');
			this._ht_goflypreview_nodeimage__img=document.createElement('img');
			this._ht_goflypreview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._ht_goflypreview_nodeimage__img.setAttribute('src',basePath + "images/preview_nodeimage0_" + nodeId + ".png");
			this._ht_goflypreview_nodeimage.ggNodeId=nodeId;
			this._ht_goflypreview_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_goflypreview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._ht_goflypreview_nodeimage__img['ondragstart']=function() { return false; };
			this._ht_goflypreview_nodeimage.appendChild(this._ht_goflypreview_nodeimage__img);
			this._ht_goflypreview_nodeimage.ggId="ht_GoFlyPreview NodeImage";
			this._ht_goflypreview_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_goflypreview_nodeimage.ggVisible=true;
			this._ht_goflypreview_nodeimage.className='ggskin ggskin_nodeimage ';
			this._ht_goflypreview_nodeimage.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._ht_goflypreview_nodeimage.setAttribute('style',hs);
			this._ht_goflypreview_nodeimage.style[domTransform + 'Origin']='50% 50%';
			me._ht_goflypreview_nodeimage.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._ht_goflypreview_nodeimage.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._ht_goflypreview_nodeimage.ggUpdatePosition=function () {
			}
			this._ht_gofly_preview.appendChild(this._ht_goflypreview_nodeimage);
			this._ht_goflytooltip_bg=document.createElement('div');
			this._ht_goflytooltip_bg.ggId="ht_GoFlytooltip_bg";
			this._ht_goflytooltip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_goflytooltip_bg.ggVisible=true;
			this._ht_goflytooltip_bg.className='ggskin ggskin_rectangle ';
			this._ht_goflytooltip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._ht_goflytooltip_bg.setAttribute('style',hs);
			this._ht_goflytooltip_bg.style[domTransform + 'Origin']='50% 50%';
			me._ht_goflytooltip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_goflytooltip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_goflytooltip_bg.ggUpdatePosition=function () {
			}
			this._ht_gofly_preview.appendChild(this._ht_goflytooltip_bg);
			this._ht_goflytooltip_drop_shadow=document.createElement('div');
			this._ht_goflytooltip_drop_shadow__text=document.createElement('div');
			this._ht_goflytooltip_drop_shadow.className='ggskin ggskin_textdiv';
			this._ht_goflytooltip_drop_shadow.ggTextDiv=this._ht_goflytooltip_drop_shadow__text;
			this._ht_goflytooltip_drop_shadow.ggId="ht_GoFlytooltip_drop_shadow";
			this._ht_goflytooltip_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_goflytooltip_drop_shadow.ggVisible=true;
			this._ht_goflytooltip_drop_shadow.className='ggskin ggskin_text ';
			this._ht_goflytooltip_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._ht_goflytooltip_drop_shadow.setAttribute('style',hs);
			this._ht_goflytooltip_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._ht_goflytooltip_drop_shadow__text.setAttribute('style',hs);
			this._ht_goflytooltip_drop_shadow__text.innerHTML=me.hotspot.title;
			this._ht_goflytooltip_drop_shadow.appendChild(this._ht_goflytooltip_drop_shadow__text);
			me._ht_goflytooltip_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_goflytooltip_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_goflytooltip_drop_shadow.ggUpdatePosition=function () {
			}
			this._ht_gofly_preview.appendChild(this._ht_goflytooltip_drop_shadow);
			this._ht_goflyoltip=document.createElement('div');
			this._ht_goflyoltip__text=document.createElement('div');
			this._ht_goflyoltip.className='ggskin ggskin_textdiv';
			this._ht_goflyoltip.ggTextDiv=this._ht_goflyoltip__text;
			this._ht_goflyoltip.ggId="ht_GoFlyoltip";
			this._ht_goflyoltip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_goflyoltip.ggVisible=true;
			this._ht_goflyoltip.className='ggskin ggskin_text ';
			this._ht_goflyoltip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._ht_goflyoltip.setAttribute('style',hs);
			this._ht_goflyoltip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._ht_goflyoltip__text.setAttribute('style',hs);
			this._ht_goflyoltip__text.innerHTML=me.hotspot.title;
			this._ht_goflyoltip.appendChild(this._ht_goflyoltip__text);
			me._ht_goflyoltip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_goflyoltip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_goflyoltip.ggUpdatePosition=function () {
			}
			this._ht_gofly_preview.appendChild(this._ht_goflyoltip);
			this._ht_goflyckmark_tick=document.createElement('div');
			this._ht_goflyckmark_tick__img=document.createElement('img');
			this._ht_goflyckmark_tick__img.className='ggskin ggskin_svg';
			this._ht_goflyckmark_tick__img.setAttribute('src',basePath + 'images/ht_goflyckmark_tick.svg');
			this._ht_goflyckmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_goflyckmark_tick__img['ondragstart']=function() { return false; };
			this._ht_goflyckmark_tick.appendChild(this._ht_goflyckmark_tick__img);
			this._ht_goflyckmark_tick.ggId="ht_GoFlyckmark_tick";
			this._ht_goflyckmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_goflyckmark_tick.ggVisible=false;
			this._ht_goflyckmark_tick.className='ggskin ggskin_svg ';
			this._ht_goflyckmark_tick.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			this._ht_goflyckmark_tick.setAttribute('style',hs);
			this._ht_goflyckmark_tick.style[domTransform + 'Origin']='50% 50%';
			me._ht_goflyckmark_tick.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_goflyckmark_tick.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._ht_goflyckmark_tick.ggCurrentLogicStateVisible = -1;
			this._ht_goflyckmark_tick.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._ht_goflyckmark_tick.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._ht_goflyckmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._ht_goflyckmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._ht_goflyckmark_tick.style[domTransition]='';
					if (me._ht_goflyckmark_tick.ggCurrentLogicStateVisible == 0) {
						me._ht_goflyckmark_tick.style.visibility=(Number(me._ht_goflyckmark_tick.style.opacity)>0||!me._ht_goflyckmark_tick.style.opacity)?'inherit':'hidden';
						me._ht_goflyckmark_tick.ggVisible=true;
					}
					else {
						me._ht_goflyckmark_tick.style.visibility="hidden";
						me._ht_goflyckmark_tick.ggVisible=false;
					}
				}
			}
			this._ht_goflyckmark_tick.ggUpdatePosition=function () {
			}
			this._ht_goflyckmark_tick.ggNodeChange=function () {
				me._ht_goflyckmark_tick.ggUpdateConditionNodeChange();
			}
			this._ht_gofly_preview.appendChild(this._ht_goflyckmark_tick);
			this.__div.appendChild(this._ht_gofly_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._ht_gofly_preview.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};
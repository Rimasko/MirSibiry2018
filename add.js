
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
hs+='left : 4%;';
hs+='position : absolute;';
hs+='top :65%;';
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
    
    pushNode("{node74}",{ "tilt": me.player.getTilt(), "pan": me.player.getPan(),"hfov": me.player.getFov()});
    
    me.player.openNext("{node74}","");
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
this.esibirName__text.innerHTML="Беседка";
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
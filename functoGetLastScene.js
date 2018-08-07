function getNode()
{
	alert("helloworld");
}
var nodes = new Array();
nodes.push("{node77}");

var current = 0;
function pushNode( node ,orient)
{	
	var point = {
		"name": node,
		"XYZOr":orient
	};
	nodes.push(point);
	if(nodes.length-2 >= 0 ){
	nodes[nodes.length-2].XYZOr = orient;
	}
	console.log(orient);
}

function getLastScene()
{   
	if(nodes.length>1)
	{
		 
		return nodes[nodes.length-2];
	}
	else
	return null;

}

function loadScene1() {
	pushNode("{node1}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node1}","");
	skin._showpam.click()

  }
  function loadScene70() {
	pushNode("{node70}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node70}","");
	skin._showpam.click()
  }
  function loadScene71() {
	pushNode("{node71}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node71}","");
	skin._showpam.click()
  }
  function loadScene72() {
	pushNode("{node72}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node72}","");
	skin._showpam.click()
  }
  function loadScene73() {
	pushNode("{node73}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node73}","");
	skin._showpam.click()
  }
  function loadScene74() {
	pushNode("{node74}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node74}","");
	skin._showpam.click()
  }

  function loadScene75() {
	pushNode("{node75}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node75}","");
	skin._showpam.click()
  }
  function loadScene77() {
	pushNode("{node77}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node77}","");
	skin._showpam.click()
  }
  function loadScene78() {
	  pushNode("{node78}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node78}","");
	skin._showpam.click()
	}
	function loadScene79() {
	  pushNode("{node79}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node79}","");
	skin._showpam.click()
	}
	
	function loadScene96() {
	  pushNode("{node96}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node96}","");
	skin._showpam.click()
	}
	function loadScene116() {
	  pushNode("{node116}",{ "tilt": skin.player.getTilt(), "pan": skin.player.getPan(),"hfov": skin.player.getFov()});
	skin.player.openNext("{node116}","");
	skin._showpam.click()
  }




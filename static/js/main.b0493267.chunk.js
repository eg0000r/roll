(this.webpackJsonpchapter_roll=this.webpackJsonpchapter_roll||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),l=(n(13),n(1)),s=n(2),c=n(4),y=n(3),h=n(5),u=[{d:"\u0391",y:"1914",l:"City College of New York"},{d:"\u0392",y:"1914",l:"New York College of Dentistry"},{d:"\u0393",y:"1914",l:"New York University (Square)"},{d:"\u0394",y:"1916",l:"Columbia University"},{d:"\u0395",y:"1917",l:"Boston University"},{d:"\u0396",y:"1918",l:"Harvard University"},{d:"\u0397",y:"1919",l:"Massachusetts Institute of Technology"},{d:"\u0398",y:"1920",l:"Armour Institute of Technology"},{d:"\u0399",y:"1920",l:"University of Pennsylvania"},{d:"\u039a",y:"1920",l:"University of Cincinnati"},{d:"\u039b",y:"1921",l:"University of Chicago"},{d:"\u039c",y:"1921",l:"Vanderbilt University"},{d:"\u039d",y:"1922",l:"University of Michigan"},{d:"\u039e",y:"1923",l:"Northwestern University"},{d:"\u039f",y:"1924",l:"Ohio State University"},{d:"\u03a0",y:"1924",l:"University of Illinois"},{d:"\u03a1",y:"1926",l:"University of Texas"},{d:"\u03a3",y:"1927",l:"University of Southern California"},{d:"\u03a4",y:"1927",l:"Lehigh University"},{d:"\u03a5",y:"1929",l:"University of North Dakota"},{d:"\u03a6",y:"1928",l:"University of Minnesota"},{d:"\u03a7",y:"1928",l:"U.C.L.A."},{d:"\u03a8",y:"1929",l:"Carnegie Mellon University"},{d:"\u03a9",y:"1932",l:"University of Manitoba (Canada)"}],d=(n(14),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(y.a)(t).call(this,e))).buttonDisplay=function(){return n.state.y&&n.state.l?{display:"none"}:{display:"box"}},n.isYear=function(){return n.state.checked?n.state.y?o.a.createElement("span",{className:"correct"},"\u2713"):o.a.createElement("span",{className:"wrong"},"\u2715"):o.a.createElement("span",null)},n.isLocation=function(){return n.state.checked?n.state.l?o.a.createElement("span",{className:"correct"},"\u2713"):o.a.createElement("span",{className:"wrong"},"\u2715"):o.a.createElement("span",null)},n.setYear=function(e){n.setState({year:e.target.value.toString()})},n.setLocation=function(e){n.setState({location:e.target.value.toString()})},n.checkLine=function(){n.setState({checked:!0,y:n.props.chapter.y===n.state.year,l:n.props.chapter.l.toLowerCase()===n.state.location.toLowerCase()}),n.props.chapter.l.toLowerCase()===n.state.location.toLowerCase()===(n.props.chapter.y===n.state.year)&&n.props.hook()},n.state={checked:!1,y:!1,l:!1,year:"",location:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"line"},o.a.createElement("b",null,this.props.chapter.d),o.a.createElement("label",null,"Year: ",o.a.createElement("input",{disabled:this.state.y,onChange:this.setYear})," ",this.isYear()),o.a.createElement("label",null,"Location: ",o.a.createElement("input",{disabled:this.state.l,onChange:this.setLocation})," ",this.isLocation()),o.a.createElement("div",{style:this.buttonDisplay(),onClick:this.checkLine,className:"check"},"+")))}}]),t}(o.a.Component)),m=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(y.a)(t).call(this,e))).newElement=function(){n.setState({elements:n.state.elements.concat([o.a.createElement(d,{key:n.state.elements.length,hook:n.newElement,chapter:u[n.state.elements.length]})])})},n.state={elements:[o.a.createElement(d,{key:0,hook:n.newElement,chapter:u[0]})]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.elements)}}]),t}(o.a.Component);var p=function(){return o.a.createElement("div",{className:"root"},o.a.createElement("h1",null,"Chapter Roll"),o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b0493267.chunk.js.map
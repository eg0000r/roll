(this.webpackJsonpchapter_roll=this.webpackJsonpchapter_roll||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(7),s=n.n(l),o=(n(13),n(1)),r=n(2),c=n(4),h=n(3),y=n(5),u=[{d:"\u0391",y:"1914",l:"City College of New York"},{d:"\u0392",y:"1914",l:"New York College of Dentistry"},{d:"\u0393",y:"1914",l:"New York University (Square)"},{d:"\u0394",y:"1916",l:"Columbia University"},{d:"\u0395",y:"1917",l:"Boston University"},{d:"\u0396",y:"1918",l:"Harvard University"},{d:"\u0397",y:"1919",l:"Massachusetts Institute of Technology"},{d:"\u0398",y:"1920",l:"Armour Institute of Technology"},{d:"\u0399",y:"1920",l:"University of Pennsylvania"},{d:"\u039a",y:"1920",l:"University of Cincinnati"},{d:"\u039b",y:"1921",l:"University of Chicago"},{d:"\u039c",y:"1921",l:"Vanderbilt University"},{d:"\u039d",y:"1922",l:"University of Michigan"},{d:"\u039e",y:"1923",l:"Northwestern University"},{d:"\u039f",y:"1924",l:"Ohio State University"},{d:"\u03a0",y:"1924",l:"University of Illinois"},{d:"\u03a1",y:"1926",l:"University of Texas"},{d:"\u03a3",y:"1927",l:"University of Southern California"},{d:"\u03a4",y:"1927",l:"Lehigh University"},{d:"\u03a5",y:"1929",l:"University of North Dakota"},{d:"\u03a6",y:"1928",l:"University of Minnesota"},{d:"\u03a7",y:"1928",l:"U.C.L.A."},{d:"\u03a8",y:"1929",l:"Carnegie Mellon University"},{d:"\u03a9",y:"1932",l:"University of Manitoba (Canada)"}],d=(n(14),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).buttonDisplay=function(){return n.state.y&&n.state.l?{display:"none"}:{display:"box"}},n.hintDisplay=function(){return n.state.hint?{opacity:1}:n.state.y&&n.state.l?{display:"none"}:{opacity:0}},n.isYear=function(){return n.state.checked?n.state.y?i.a.createElement("span",{className:"correct"},"\u2713"):i.a.createElement("span",{className:"wrong"},"\u2715"):i.a.createElement("span",null)},n.isLocation=function(){return n.state.checked?n.state.l?i.a.createElement("span",{className:"correct"},"\u2713"):i.a.createElement("span",{className:"wrong"},"\u2715"):i.a.createElement("span",null)},n.setYear=function(e){n.setState({year:e.target.value.toString()})},n.setLocation=function(e){n.setState({location:e.target.value.toString()})},n.checkLine=function(){n.setState({checked:!0,y:n.props.chapter.y===n.state.year,l:n.props.chapter.l.toLowerCase()===n.state.location.toLowerCase()}),n.props.chapter.l.toLowerCase()===n.state.location.toLowerCase()&&n.props.chapter.y===n.state.year&&(n.setState({hint:!1}),n.props.hook())},n.toggleHint=function(){n.setState({hint:!n.state.hint})},n.state={hint:!1,checked:!1,y:!1,l:!1,year:"",location:""},n}return Object(y.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"line"},i.a.createElement("b",null,this.props.chapter.d),i.a.createElement("label",null,"Year: ",i.a.createElement("input",{disabled:this.state.y,onChange:this.setYear})," ",this.isYear()),i.a.createElement("label",null,"Location: ",i.a.createElement("input",{disabled:this.state.l,onChange:this.setLocation})," ",this.isLocation()),i.a.createElement("div",{style:this.buttonDisplay(),onClick:this.checkLine,className:"check"},"+"),i.a.createElement("div",{style:this.buttonDisplay(),onClick:this.toggleHint,className:"check"},"?")),i.a.createElement("div",{style:this.hintDisplay(),className:"hint"},i.a.createElement("i",null,this.props.chapter.y)," ",this.props.chapter.l))}}]),t}(i.a.Component)),m=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).newElement=function(){n.state.elements.length<u.length&&n.setState({elements:n.state.elements.concat([i.a.createElement(d,{key:n.state.elements.length,hook:n.newElement,chapter:u[n.state.elements.length]})])})},n.state={elements:[i.a.createElement(d,{key:0,hook:n.newElement,chapter:u[0]})]},n}return Object(y.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.state.elements)}}]),t}(i.a.Component);var p=function(){return i.a.createElement("div",{className:"root"},i.a.createElement("h1",null,"Chapter Roll"),i.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e9307f15.chunk.js.map
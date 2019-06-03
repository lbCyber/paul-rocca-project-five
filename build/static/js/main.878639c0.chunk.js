(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(32)},20:function(e,t,a){},21:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(13),s=a.n(r),i=(a(20),a(3)),o=a(4),l=a(6),u=a(5),p=a(7),m=(a(21),a(11)),g=a.n(m);g.a.initializeApp({apiKey:"AIzaSyDZKEpGpK1Ovh9Y_J6YdUpTDS0vgQJK9QQ",authDomain:"soap-stone.firebaseapp.com",databaseURL:"https://soap-stone.firebaseio.com",projectId:"soap-stone",storageBucket:"soap-stone.appspot.com",messagingSenderId:"869362292948",appId:"1:869362292948:web:685df81a0d081ab4"});var h=g.a,d=function(e){return c.a.createElement("option",{onClick:function(){document.getElementById("structureSelect").blur()},key:e.id,value:e.text},e.text)},f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).selectHandler=function(){var e=Object.assign({},a.state),t=document.getElementById("structureSelect");e.currentStructure=t.value,a.setState({localState:e}),a.props.sendBack(e.currentStructure)},a.state={sentences:[],currentStructure:"blep"},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("select",{id:"structureSelect",className:"structureSelect",onChange:this.selectHandler},c.a.createElement("option",{className:"defOption",val:"null",selected:!0,disabled:!0},"Choose a sentence structure"),this.state.sentences.map(function(e){return c.a.createElement(d,{text:e.text,key:e.id})})))}},{key:"componentDidMount",value:function(){var e=this;h.database().ref("messageData/structure").on("value",function(t){var a=[],n=t.val();for(var c in n)a.push({id:c,text:n[c]});e.setState({sentences:a})})}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={currWords:[],sendBack:a.sendBack},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,this.props.wordText.map(function(t){return c.a.createElement("li",{tabIndex:"200",key:t,className:"word",onClick:function(){e.props.sendBack({word:t})}},t)}))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).callBack=function(e){var t=e.word;a.props.sendBack(t)},a.state={categories:[],activeCat:"null",counter:200},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"wordCats"},this.state.categories.map(function(t){return c.a.createElement("div",{className:"wordCategory",key:t.id},c.a.createElement("h2",{id:t.id+"_header",tabIndex:"200"},t.id),c.a.createElement("ul",{className:t.id,id:t.id},c.a.createElement(b,{wordId:t.id,wordText:t.text,cats:e.state.activeCat,sendBack:e.callBack})))}))}},{key:"componentDidMount",value:function(){var e=this;h.database().ref("messageData/words").on("value",function(t){var a=[],n=t.val();for(var c in n)a.push({id:c,text:n[c]});e.setState({categories:a})})}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).callBackStructure=function(e){var t="****";"****"!==a.state.word&&(t=a.state.word);var n={structure:e,word:t};a.setState({structure:n.structure,word:n.word})},a.callBackWord=function(e){var t={word:e,completeSentence:a.state.structure.replace("****",e)};a.setState({word:t.word,completeSentence:t.completeSentence})},a.backOut=function(){a.props.createMsg()},a.messageSubmit=function(e){e.preventDefault();var t=a.props.page,n=h.database().ref("pages/page"+t+"/messages"),c={message:a.state.completeSentence,posX:a.props.posX,posY:a.props.posY};n.push(c),a.props.createMsg()},a.state={word:"****",structure:"",completeSentence:"",currentPage:e.page},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"msgWindow"},c.a.createElement("h2",{className:"msgHeader"},"Select your message"),c.a.createElement("form",{action:""},c.a.createElement(f,{sendBack:this.callBackStructure}),c.a.createElement("h3",{className:"previewText",tabIndex:"300"},this.state.completeSentence)),c.a.createElement(v,{sendBack:this.callBackWord}),c.a.createElement("div",{className:"messageWindowButtons"},c.a.createElement("button",{className:"submitButton buttonGo",onClick:this.messageSubmit,tabIndex:"301"},"Submit"),c.a.createElement("button",{className:"submitButton buttonLeave",onClick:this.backOut,tabIndex:"302"},"Cancel")))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={signs:a.props.signs,activePage:a.props.page},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=500;return c.a.createElement(c.a.Fragment,null,this.props.signs.map(function(t){var a={top:t.messageData.posY+"px",left:t.messageData.posX+"px"};return c.a.createElement("div",{style:a,className:"droppedSign",key:t.key,"data-label":t.messageData.message,tabIndex:e++})}))}}]),t}(n.Component),E=function(e){return 1===e.page?c.a.createElement("div",{className:"imageCredit"},c.a.createElement("p",{style:{fontSize:"0.9rem",fontStyle:"italic",color:"white"}},c.a.createElement("a",{href:"https://www.flickr.com/photos/24792288@N07/2599310454"},'"Mansfield Pa Area"'),c.a.createElement("span",null,"by ",c.a.createElement("a",{href:"https://www.flickr.com/photos/24792288@N07"},"bonniejeffs"))," is licensed under ",c.a.createElement("a",{href:"https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html",style:{marginRight:"5px"}},"CC BY 2.0"),c.a.createElement("a",{href:"https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",whiteSpace:"none",opacity:".7",marginTop:"2px",marginLeft:"3px",height:"22px !important"}},c.a.createElement("img",{style:{height:"20px",marginRight:"3px",display:"inline-block"},src:"https://ccsearch.creativecommons.org/static/img/cc_icon.svg",alt:""}),c.a.createElement("img",{style:{height:"20px",marginRight:"3px",display:"inline-block"},src:"https://ccsearch.creativecommons.org/static/img/cc-by_icon.svg",alt:""})))):2===e.page?c.a.createElement("div",{className:"imageCredit"},c.a.createElement("p",{style:{fontSize:"0.9rem",fontStyle:"italic",color:"white"}},c.a.createElement("a",{href:"https://www.flickr.com/photos/124019668@N08/21754048328"},'"Kastelburg"'),c.a.createElement("span",null,"by ",c.a.createElement("a",{href:"https://www.flickr.com/photos/124019668@N08"},"mvrein"))," is licensed under ",c.a.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html",style:{marginRight:"5px"}},"CC BY-SA 2.0"),c.a.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",whiteSpace:"none",opacity:".7",marginTop:"2px",marginLeft:"3px",height:"22px !important"}},c.a.createElement("img",{style:{height:"20px",marginRight:"3px",display:"inline-block"},src:"https://ccsearch.creativecommons.org/static/img/cc_icon.svg",alt:""}),c.a.createElement("img",{style:{height:"20px",marginRight:"3px",display:"inline-block"},src:"https://ccsearch.creativecommons.org/static/img/cc-by_icon.svg",alt:""}),c.a.createElement("img",{style:{height:"20px",marginRight:"3px",display:"inline-block"},src:"https://ccsearch.creativecommons.org/static/img/cc-sa_icon.svg",alt:""})))):void 0},w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).messageCreate=function(e){if(!a.state.create){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left,c=e.clientY-t.top;a.setState({create:!0,posX:n,posY:c})}},a.windowMsgToggle=function(){a.setState({create:!1})},a.grabPage=function(e){var t=e;a.props.sendBackPage(t)},a.backgroundPick=function(){return 1===a.props.page?"./assets/back1.jpg":"./assets/back2.jpg"},a.state={create:"",posX:0,posY:0,activePage:1,signs:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({activePage:1}),h.database().ref("pages/page1/messages").on("value",function(t){var a=[],n=t.val();for(var c in n)a.push({key:c,messageData:n[c]});e.setState({signs:a})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.page!==this.props.page){var n=this.props.page;this.setState({activePage:n}),h.database().ref("pages/page"+n+"/messages").on("value",function(e){var t=[],n=e.val();for(var c in n)t.push({key:c,messageData:n[c]});a.setState({signs:t})})}}},{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"fieldContainer"},c.a.createElement("div",{className:"messageField",onClick:this.messageCreate,style:{backgroundImage:"url("+this.backgroundPick()+")"}},this.state.create?c.a.createElement(k,{createMsg:this.windowMsgToggle,posX:this.state.posX,posY:this.state.posY,page:this.props.page}):null,c.a.createElement(y,{page:this.props.page,returnPage:this.grabPage,signs:this.state.signs})),c.a.createElement(E,{page:this.props.page})))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).grabPage=function(e){a.props.sendBackPage(e)},a.state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"buttons"},c.a.createElement("h4",{className:"pageButtons pageButton1",onClick:function(){return e.grabPage(1)}},"Burg"),c.a.createElement("h4",{className:"pageButtons pageButton2",onClick:function(){return e.grabPage(2)}},"Wilds"))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).grabPage=function(e){a.props.sendBackPage(e),console.log(e,"header")},a.state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"Soapstone"),c.a.createElement("ul",{className:"headerList"},c.a.createElement("li",{className:"headerListEntry"},"Click anywhere to leave a message"),c.a.createElement("li",{className:"headerListEntry"},"Scroll anywhere to find one")),c.a.createElement(j,{sendBackPage:this.grabPage}))}}]),t}(n.Component),S=function(){return c.a.createElement("footer",null,c.a.createElement("p",null,"Copyright ","\xa9"," 2019 - Paul Rocca"))},x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).callBackPage=function(t){e.setState({activePage:t}),console.log(t,"app"),console.log(e.state.activePage,"activePage.app")},e.state={activePage:1},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,{sendBackPage:this.callBackPage}),c.a.createElement(w,{page:this.state.activePage}),c.a.createElement(S,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.878639c0.chunk.js.map
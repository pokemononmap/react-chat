(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{240:function(e,t,n){e.exports=n(432)},430:function(e,t,n){},432:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(32),o=n.n(s),i=n(27),c=n(28),l=n(30),u=n(29),m=n(31),p=n(440),d=n(441),h=n(443),g=n(445),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onError=function(e){n.setState({loading:!1,error:e})},n.onSubmit=function(e){n.setState({loading:!0});var t=n.state.username;fetch("http://localhost:3001/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t})}).then(function(e){n.props.loginUser(t)}).catch(n.onError)},n.onChange=function(e){n.setState({username:e.target.value})},n.state={username:null,error:null,loading:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{textAlign:"center",style:{position:"absolute",left:"0",right:"0",paddingTop:"150px"}},r.a.createElement("h1",{style:{fontSize:"40px",color:"#ed4b1a"}},"Welcome!"),r.a.createElement(d.a,null),r.a.createElement("br",null),r.a.createElement(h.a,{onSubmit:this.onSubmit,loading:this.state.loading},r.a.createElement("div",{className:"ui centered grid"},r.a.createElement(h.a.Input,{label:"Enter Your Username",onChange:this.onChange,width:5}),r.a.createElement("div",{className:"row"},r.a.createElement(g.a,{type:"submit",color:"orange"},"Log In"))))))}}]),t}(a.Component),b=n(190),y=n(189),E=n.n(y),v=n(446),O=n(444),j=n(442),w=n(208),S=n(209),U=n(447),k=n(68),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).allUsers=function(e){var t=e.index,a=e.key,s=e.style,o=n.props.users[t];return r.a.createElement("div",{key:a,style:s},r.a.createElement(w.a,{size:"big",style:{width:"100%",position:"relative"},color:"black"},o.id===n.props.currentUser.id?r.a.createElement("span",null," You"):o.name,"online"===o.presence.state&&r.a.createElement(S.a,{name:"circle",color:"green",style:{position:"absolute",right:"5px"}})))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a.Column,{width:3,style:{paddingTop:"50px",backgroundColor:"#ed4b1a"}},r.a.createElement(U.a,{as:"h3",block:!0,style:{width:"100%",position:"relative",backgroundColor:"#ffffff"}},r.a.createElement(U.a.Content,{style:{color:"#ed4b1a"}},"All Users")),r.a.createElement(k.a,null,function(t){var n=t.height,a=t.width;return r.a.createElement(k.b,{height:n,width:a,rowCount:e.props.users.length,rowHeight:50,rowRenderer:e.allUsers,style:{outline:"none"}})}),r.a.createElement("div",{style:{position:"absolute",bottom:"0",left:"0"}}))}}]),t}(a.Component),x=n(448),I=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).messageList=function(e){var t=e.index,a=e.key,s=n.props.messages[t];return r.a.createElement(x.a,{padded:!0,vertical:!0,key:a,style:{fontSize:"15px",color:"#ed4b1a",padding:"20px"}},r.a.createElement(w.a,{attached:"bottom right",color:s.senderId===n.props.currentUser.id?"black":"orange",style:{minWidth:"100px"}},s.senderId===n.props.currentUser.id?"You":s.senderId),s.text)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a.Column,{width:13,style:{paddingTop:"50px",paddingBottom:"50px"}},r.a.createElement(U.a,{as:"h1",block:!0,style:{width:"100%",position:"relative",backgroundColor:"#ffffff",border:"none"},textAlign:"center"},r.a.createElement(U.a.Content,{style:{color:"#ed4b1a"}},"Messages")),r.a.createElement(k.a,null,function(t){var n=t.height,a=t.width;return r.a.createElement(k.b,{height:n,width:a,rowCount:e.props.messages.length,rowHeight:60,rowRenderer:e.messageList,style:{outline:"none"}})}),this.props.children)}}]),t}(a.Component),T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).sendTypingEvent=function(){n.props.currentUser.isTypingIn({roomId:n.props.room.id}).catch(function(e){return console.error("error",e)})},n.onMessageChange=function(e){n.sendTypingEvent(),n.setState({message:e.target.value})},n.onMessageSubmit=function(e){n.props.currentUser.sendMessage({text:n.state.message,roomId:n.props.room.id}),n.setState({message:""})},n.state={message:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"absolute",bottom:"0",left:"0",padding:"10px",width:"100%"}},this.props.children,r.a.createElement(h.a,{onSubmit:this.onMessageSubmit},r.a.createElement(h.a.Input,{placeholder:"Type a Message",value:this.state.message,size:"large",onChange:this.onMessageChange})))}}]),t}(a.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.users.length>0?r.a.createElement("div",{style:{margin:"10px"}},"".concat(this.props.users.slice(0,2).join(" and ")," is typing...")):r.a.createElement("div",null)}}]),t}(a.Component),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={room:null,messages:[],currentUser:{},typingUsers:[]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;new E.a.ChatManager({instanceLocator:"v1:us1:b1e9feac-0831-4538-92be-fa529339f77f",userId:this.props.username,tokenProvider:new E.a.TokenProvider({url:"http://localhost:3001/authenticate"})}).connect().then(function(t){return e.setState({currentUser:t}),t.subscribeToRoom({roomId:"19394053",messageLimit:100,hooks:{onMessage:function(t){return e.setState({messages:Object(b.a)(e.state.messages).concat([t])})},onUserStartedTyping:function(t){return e.setState({typingUsers:Object(b.a)(e.state.typingUsers).concat([t.name])})},onUserStoppedTyping:function(t){return e.setState({typingUsers:e.state.typingUsers.filter(function(e){return e!==t.name})})},onPresenceChanged:function(){return e.forceUpdate()}}})}).then(function(t){e.setState({room:t})})}},{key:"render",value:function(){return this.state.room?r.a.createElement(v.a,{padded:!0,columns:2,className:"chat"},r.a.createElement(C,{users:this.state.room.users,currentUser:this.state.currentUser}),r.a.createElement(I,{messages:this.state.messages,currentUser:this.state.currentUser},r.a.createElement(T,{currentUser:this.state.currentUser,room:this.state.room},r.a.createElement(M,{users:this.state.typingUsers})))):r.a.createElement(O.a,{active:!0},r.a.createElement(j.a,{size:"medium"},"Loading..."))}}]),t}(a.Component),z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).loginUser=function(t){localStorage.setItem("username",t),e.setState({username:t})},e.logoutUser=function(){localStorage.removeItem("username"),e.setState({username:""})},e.state={username:"",offline:!1},window.addEventListener("online",function(){return e.setState({offline:!1})}),window.addEventListener("offline",function(){return e.setState({offline:!0})}),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("username");e&&this.setState({username:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"chat"},this.state.offline?r.a.createElement(p.a,{textAlign:"center",style:{position:"absolute",left:"0",right:"0",paddingTop:"150px"}},r.a.createElement("h1",{style:{fontSize:"40px",color:"#ed4b1a"}},"App Is Offline"),r.a.createElement("p",{style:{fontSize:"20px",color:"#ed4b1a"}},"Check Your Network Connection")):this.state.username?r.a.createElement(L,{username:this.state.username}):r.a.createElement(f,{loginUser:this.loginUser}))}}]),t}(a.Component);n(427),n(430);o.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[240,2,1]]]);
//# sourceMappingURL=main.3adf90da.chunk.js.map
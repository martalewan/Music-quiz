(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s,a,c=n(0),r=n.n(c),i=n(16),o=n.n(i),u=n(4),l=n(11),j=n(26),b=n(25),m="SAVE_USER",O="SET_USER_LOGGED_IN",d="SET_USER_LOGGED_OUT",p="SET_USER_POINTS",f="RESET_USER_POINTS",h="SET_GAME_CONFIG",x="SAVE_AVERAGE_ROUND_TIME",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===m?t.payload:e},_=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return!0;case d:return!1;default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e+t.payload;case f:return t.payload;default:return e}},v={gamePoints:1500,songTimer:15,songNumber:5,numberOfAnswers:4},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;return t.type===h?t.payload:e},S=n(7),w={totalPoints:0,averageTotalTime:0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=v.gamePoints,s=v.songNumber,a=(s*n/100-t.payload/100)/s,c=a.toFixed(1);switch(t.type){case x:return Object(S.a)(Object(S.a)({},e),{},{averageTotalTime:c});case p:return Object(S.a)(Object(S.a)({},e),{},{totalPoints:e.totalPoints+t.payload});case f:return{averageTotalTime:0,totalPoints:t.payload};default:return e}},E=Object(l.combineReducers)({isUserLoggedIn:_,currentUser:g,userPoints:N,gameConfig:y,gameStats:T}),k=Object(l.createStore)(E,Object(b.composeWithDevTools)(Object(l.applyMiddleware)(j.a))),A=n(6),P=n(2),C=n(20),I=n.p+"static/media/music-illustration.9590f7c5.png",L=n(5),G=n.n(L),U=n(9),R=n(3),W=n(1),Y=function(e){var t=e.type,n=e.className,s=e.innerText,a=e.onClickFunc;return Object(W.jsx)("button",{type:t,className:"btn ".concat(n,"__btn"),onClick:a,children:s})},F=n(17),D=function(e){var t=e.placeholder,n=e.className,s=e.formState,a=e.inputName,c=e.inputType,r=Object(R.a)(s,2),i=r[0],o=r[1];return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("label",{id:a,className:"".concat(n,"__label hidden"),children:a}),Object(W.jsx)("input",{type:c,"aria-labelledby":a,placeholder:t,className:"".concat(n,"__input"),value:i[a],onChange:function(e){o((function(t){return Object(S.a)(Object(S.a)({},t),{},Object(F.a)({},a,e.target.value))}))},maxLength:"9",required:!0})]})},z=function(e){return{type:m,payload:e}},M=function(){return{type:O}},B={username:"",password:""},q=function(e){var t=Object(R.a)(e,2),n=t[0],s=t[1];return function(){var e=Object(U.a)(G.a.mark((function e(t){var a,c,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},e.next=3,fetch("/api/users",a);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,t(z(r)),t(M()),s(B),e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){var e=Object(c.useState)(B),t=Object(R.a)(e,2),n=[t[0],t[1]],s="login-form",a=Object(u.b)(),r=function(){var e=Object(U.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a(q(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(W.jsxs)("form",{className:s,onSubmit:r,children:[Object(W.jsx)(D,{formState:n,inputType:"text",inputName:"username",placeholder:"Type your username",className:s}),Object(W.jsx)(Y,{className:"login-form",type:"submit",innerText:"LOGIN"})]})},J=function(e){var t=e.title;return Object(W.jsx)("h1",{children:t})},V=function(){var e=Object(u.c)((function(e){return e})).isUserLoggedIn,t=Object(P.f)();return Object(c.useEffect)((function(){e&&t("/userhub")}),[e]),Object(W.jsxs)("section",{className:"login-wrapper",children:[Object(W.jsx)(J,{title:"Welcome"}),Object(W.jsx)("p",{className:"login-wrapper__description",children:"Enter your username to create a music quiz"}),Object(W.jsx)("img",{className:"img-login",src:I}),Object(W.jsx)(H,{})]})},K=n.p+"static/media/All_I_Want_For_Christmas_Is_You.893ac235.mp3",Q=n.p+"static/media/Break_On_Through.a69b132c.mp3",X=n.p+"static/media/Cant_Get_You_Out_Of_My_Head.82ae7400.mp3",Z=n.p+"static/media/Diamonds_Are_A_Girls_Best_Friend.01b56c51.mp3",$=n.p+"static/media/Feeling_Good.b02bfe0d.mp3",ee=[$,K,Q,X,Z,$,n.p+"static/media/September.0010a8f7.mp3",n.p+"static/media/Get_Lucky.4da7401d.mp3",n.p+"static/media/Hey_Joe.cbdd41fa.mp3",n.p+"static/media/I_Want_To_Hold_Your_Hand.4ca7cc8b.mp3",n.p+"static/media/I_Wanna_Dance_with_Somebody.4a0b47e7.mp3",n.p+"static/media/In_The_End.ce8ffb17.mp3",n.p+"static/media/Its_Raining_Men.e57afa3c.mp3",n.p+"static/media/Sandstorm.ac0e80c6.mp3",n.p+"static/media/U_Cant_Touch_This.696254c5.mp3",n.p+"static/media/Summertime.9f6f42b4.mp3",n.p+"static/media/Vibes_and_Stuff.1f10f2e1.mp3",n.p+"static/media/Wake_Me_Up_Before_You_Go_Go.e3b593cb.mp3",n.p+"static/media/Who_Let_The_Dogs_Out.f70cdc7a.mp3",n.p+"static/media/Wish_You_Were_Here.c36db672.mp3",n.p+"static/media/Work_Bitch.e349f3b4.mp3",n.p+"static/media/Survivor.67e4b78d.mp3"],te=n(27),ne=n.n(te),se=function(e){var t,n=e.playingSong,s=e.songs,a=e.setIsPlaying;return Object(W.jsx)(ne.a,{src:(t=n,s.find((function(e){return e.includes(t)}))),autoPlay:!0,onCanPlay:function(e){return e.target.play()},onPlay:function(){return a(!0)},controls:!0})},ae=n(22),ce=function(e){var t=e.type,n=e.className,s=e.song,a=e.onClickFunc;return Object(W.jsx)("button",{type:t,className:"btn ".concat(n,"__btn-game"),onClick:a,value:s,children:s.replaceAll("_"," ")})},re=function(e){var t=e.time,n=e.timerAction,s=e.setSongPoints,a=e.isPlaying,r=Object(c.useState)(t),i=Object(R.a)(r,2),o=i[0],u=i[1];return Object(c.useEffect)((function(){if("undefined"===typeof a){var e=setInterval((function(){u((function(e){return e-1})),s&&s((function(e){return e-100}))}),1e3),t=setTimeout((function(){n(!1)}),1e3*o);return function(){clearInterval(e),clearTimeout(t)}}return!1}),[]),Object(c.useEffect)((function(){if(a){var e=setInterval((function(){u((function(e){return e-1})),s&&s((function(e){return e-100}))}),1e3),t=setTimeout((function(){n(!1)}),1e3*o);return function(){clearInterval(e),clearTimeout(t)}}return!1}),[a]),Object(W.jsxs)(W.Fragment,{children:[!a&&Object(W.jsx)("p",{className:"song-timer__text",children:"Guess the song title..."}),Object(W.jsx)("h1",{className:"song-timer",children:o})]})},ie=function(e){var t=e.currentSong,n=e.songsList,s=e.setAnswered,a=e.setCorrectAnswer,r=e.setSongPoints,i=e.songPoints,o=e.setNumberOfSongs,l=e.isPlaying,j=Object(c.useState)(),b=Object(R.a)(j,2),m=b[0],O=b[1],d=Object(u.c)((function(e){return e})).gameConfig,f=Object(u.b)(),h=function(e){return Object(ae.a)(e).sort((function(){return Math.random()-.5}))};Object(c.useEffect)((function(){Object(U.a)(G.a.mark((function e(){var s,a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:return s=e.sent,e.next=5,s.filter((function(e){return e!==t}));case 5:a=e.sent,c=a.slice(0,d.numberOfAnswers-1),O(h([t].concat(Object(ae.a)(c)))),r(d.gamePoints);case 9:case"end":return e.stop()}}),e)})))()}),[t]);var x=function(e){return o((function(e){return e-1})),e&&e.target.value===t?(a(!0),f({type:p,payload:i}),s(!0)):(a(!1),s(!0))},g=function(e){return e?(e.preventDefault(),x(e)):x()};return Object(W.jsxs)("article",{className:"quiz__choices",children:[Object(W.jsx)(re,{time:d.songTimer,timerAction:g,setSongPoints:r,isPlaying:l}),m&&m.map((function(e,t){return Object(W.jsx)(ce,{song:e,className:"quiz",onClickFunc:g},t)}))]})},oe=function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch(t,n)},ue=function(){var e=Object(U.a)(G.a.mark((function e(t){var n,s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(u.c)((function(e){return e})),t=e.userPoints,n=e.gameStats,s=e.currentUser,a=Object(S.a)(Object(S.a)({},n),{},{username:s.username});return Object(c.useEffect)((function(){oe(a,"/api/users/stats/high-scores"),oe(a,"/api/users/stats")}),[]),Object(W.jsxs)("article",{className:"game-result",children:[Object(W.jsxs)("h2",{children:["Your total score is ",t]}),Object(W.jsx)(A.b,{className:"link",to:"/leaderboard",children:Object(W.jsx)(Y,{className:"leaderboard",innerText:"LEADERBOARD"})}),Object(W.jsx)(A.b,{className:"link",to:"/",children:Object(W.jsx)(Y,{className:"game-result__exit",type:"submit",innerText:"EXIT QUIZ"})})]})},je=function(e){var t=e.correctAnswer,n=e.setNextSong,s=e.songPoints,a=e.gameOver,r=e.setGameOver,i=e.numberOfSongs,o=Object(u.b)(),l=Object(u.c)((function(e){return e})).userPoints;return Object(c.useEffect)((function(){return 0!==i||(o({type:x,payload:l}),r(!0))}),[i]),Object(W.jsxs)("article",{className:"song-result",children:[t?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("p",{className:"song-result__text emojis",children:"\ud83d\udc4f\ud83c\udffb\ud83d\udc4f\ud83c\udffb\ud83d\udc4f\ud83c\udffb"}),Object(W.jsx)("p",{className:"song-result__text",children:"Good job!"}),Object(W.jsx)("p",{className:"song-result__text",children:"Your answer was correct"}),Object(W.jsxs)("p",{className:"song-result__title",children:["Your result is ",s," points"]})]}):Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("p",{className:"song-result__text emojis",children:"\ud83d\udca9"}),Object(W.jsx)("p",{className:"song-result__text",children:"Sorry!"}),Object(W.jsx)("p",{className:"song-result__text",children:"That was incorrect"})]}),a?Object(W.jsx)(le,{}):Object(W.jsx)(Y,{className:"login-form",type:"submit",innerText:"NEXT SONG",onClickFunc:n})]})},be=function(){var e=Object(U.a)(G.a.mark((function e(t){var n,s,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{"Content-Type":"application/json"}},e.next=3,fetch("/api/songs",n);case 3:return s=e.sent,e.next=6,s.json();case 6:return a=e.sent,t(a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=Object(u.c)((function(e){return e})).gameConfig,t=Object(c.useState)([]),n=Object(R.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(),i=Object(R.a)(r,2),o=i[0],l=i[1],j=Object(c.useState)(0),b=Object(R.a)(j,2),m=b[0],O=b[1],d=Object(c.useState)(!1),p=Object(R.a)(d,2),h=p[0],x=p[1],g=Object(c.useState)(!1),_=Object(R.a)(g,2),N=_[0],v=_[1],y=Object(c.useState)(!0),S=Object(R.a)(y,2),w=S[0],T=S[1],E=Object(c.useState)(e.gamePoints),k=Object(R.a)(E,2),A=k[0],P=k[1],C=Object(c.useState)(e.songNumber),I=Object(R.a)(C,2),L=I[0],G=I[1],U=Object(c.useState)(!1),Y=Object(R.a)(U,2),F=Y[0],D=Y[1],z=Object(c.useState)(!1),M=Object(R.a)(z,2),B=M[0],q=M[1],H=Object(u.b)();Object(c.useEffect)((function(){q(!1),G(e.songNumber),H({type:f,payload:0}),be(a)}),[]),Object(c.useEffect)((function(){l(s[m])}),[s,m]);return Object(W.jsxs)("section",{className:"quiz",children:[w&&Object(W.jsx)(re,{time:3,timerAction:T}),o&&!h&&!w&&!F&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(se,{playingSong:o,songs:ee,setIsPlaying:q}),Object(W.jsx)(ie,{currentSong:o,songsList:s,setAnswered:x,setCorrectAnswer:v,setSongPoints:P,songPoints:A,numberOfSongs:L,setNumberOfSongs:G,isPlaying:B})]}),h&&!w&&Object(W.jsx)(je,{setGameOver:D,gameOver:F,correctAnswer:N,setNextSong:function(){x(!1),T(!0),O((function(e){return e+1}))},songPoints:A,numberOfSongs:L})]})},Oe=n(18),de=n(14),pe=n(19),fe=n.n(pe),he=function(){var e=Object(c.useState)([]),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(u.c)((function(e){return e})).currentUser,i=r.username||"YOU",o=Object(c.useRef)(!0),l=Object(c.useState)(!0),j=Object(R.a)(l,2),b=j[0],m=j[1];Object(c.useEffect)((function(){var e=function(){var e=Object(U.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.current){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,ue("/api/users/stats/".concat(r.userId));case 4:return t=e.sent,m(!1),e.abrupt("return",a(t.reverse()));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),function(){o.current=!1}}),[n]);var O=Object(de.css)(s||(s=Object(Oe.a)(["\n  display: block;\n  margin: 0 auto;\n  margin-top: 40px;\n  "])));return Object(W.jsxs)("section",{className:"welcome-wrapper",children:[Object(W.jsx)(J,{title:"WELCOME ".concat(i.toUpperCase())}),Object(W.jsx)(A.b,{className:"link",to:"/quiz",children:Object(W.jsx)(Y,{className:"start-game",innerText:"START"})}),Object(W.jsx)(A.b,{className:"link",to:"/instructions",children:Object(W.jsx)(Y,{className:"how-to-play",innerText:"HOW TO PLAY"})}),Object(W.jsx)(A.b,{className:"link",to:"/leaderboard",children:Object(W.jsx)(Y,{className:"leaderboard",innerText:"LEADERBOARD"})}),Object(W.jsx)(fe.a,{loading:b,css:O,size:150}),n.length>0&&!b&&n&&Object(W.jsxs)("ul",{className:"welcome-wrapper__user-stats",children:[Object(W.jsx)("h4",{className:"stats-main-title",children:"Your last three games stats"}),n.map((function(e,t){return t<=2&&Object(W.jsxs)("li",{className:"welcome-wrapper__items-stats",children:[Object(W.jsxs)("p",{className:"stats-title-user",children:["Total score: ",Object(W.jsx)("span",{className:"stats-span",children:e.totalPoints})]}),Object(W.jsxs)("p",{className:"stats-title-user",children:["Average time: ",Object(W.jsxs)("span",{className:"stats-span",children:[e.averageTime," s"]})]})]},t)}))]})]})},xe=function(){var e=Object(u.c)((function(e){return e})).gameConfig;return Object(W.jsxs)("section",{className:"instruction-wrapper",children:[Object(W.jsx)("h2",{className:"instruction-wrapper__title",children:"HOW TO PLAY?"}),Object(W.jsx)("p",{className:"instruction-description--title",children:"Welcome to our music quiz!"}),Object(W.jsx)("p",{className:"instruction-description",children:"Music Quiz\u2019 is a fun single-player game where you can test you music knowledge!"}),Object(W.jsx)("p",{className:"instruction-description",children:'Start the game by pressing the "Start" button.'}),Object(W.jsx)("p",{className:"instruction-description",children:"A 3 second countdown will then start. After the countdown, the actual gameplay begins, so be ready! You got 15 seconds to make your guess, with multiple choices. There is ONLY one correct answer."}),Object(W.jsx)("p",{className:"instruction-description",children:"The point system is time based. The faster you get the correct answer, the more points you will recieve. Be aware, wrong answers will award NO points."}),Object(W.jsxs)("p",{className:"instruction-description",children:["Each game consists of ",e.songNumber," rounds. After each game your total score will be displayed and saved to the leaderboard."]}),Object(W.jsx)("p",{className:"instruction-description--last",children:"Good luck and have fun!"}),Object(W.jsx)(A.b,{className:"link",to:"/quiz",children:Object(W.jsx)(Y,{className:"start-game",innerText:"START"})}),Object(W.jsx)(A.b,{className:"link",to:"/userhub",children:Object(W.jsx)(Y,{className:"back",innerText:"BACK"})})]})},ge=function(){var e=Object(c.useState)([]),t=Object(R.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),i=Object(R.a)(r,2),o=i[0],u=i[1];Object(c.useEffect)((function(){Object(U.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue("/api/users/stats/high-scores/top-10");case 2:t=e.sent,s(t.rows),u(!1);case 5:case"end":return e.stop()}}),e)})))()}),[]);var l=Object(de.css)(a||(a=Object(Oe.a)(["\n  display: block;\n  margin: 0 auto;\n  margin-top: 40px;\n"])));return Object(W.jsxs)("div",{className:"leaderboard-page",children:[Object(W.jsx)(fe.a,{loading:o,css:l,size:150}),!o&&Object(W.jsxs)("section",{className:"leaderboard",children:[Object(W.jsx)("h1",{className:"leaderboard__title",children:"Leaderboard"}),Object(W.jsxs)("article",{className:"leaderboard__tags",children:[Object(W.jsx)("h3",{className:"stats-tag-title",children:"Player"}),Object(W.jsx)("h3",{className:"stats-tag-title__score",children:"Score"}),Object(W.jsx)("h3",{className:"stats-tag-title__title",children:"Av time"})]}),n&&Object(W.jsx)("ol",{className:"leaderboard__user-stats",children:n.map((function(e,t){return Object(W.jsxs)("li",{className:"leaderboard__items-stats",children:[Object(W.jsx)("p",{className:"stats-title",children:Object(W.jsx)("span",{className:"stats-span",children:e.username})}),Object(W.jsx)("p",{className:"stats-title",children:Object(W.jsx)("span",{className:"stats-span",children:e.score})}),Object(W.jsx)("p",{className:"stats-title",children:Object(W.jsx)("span",{className:"stats-span",children:e.averageTime})})]},t)}))})]}),Object(W.jsx)(A.b,{className:"link",to:"/userhub",children:Object(W.jsx)(Y,{className:"back",innerText:"BACK"})})]})},_e=function(){var e=Object(u.c)((function(e){return e})).isUserLoggedIn,t=Object(u.b)(),n=Object(P.f)(),s=new C.a;return Object(W.jsxs)("nav",{className:"nav",children:[Object(W.jsx)(A.b,{className:"link",to:"/",children:Object(W.jsx)("p",{className:"nav__logo",children:"MUSICALLY"})}),e&&Object(W.jsx)("button",{className:"nav-logout__btn",onClick:function(){t({type:d}),n("/"),s.remove("user")},children:"LOGOUT"})]})},Ne=function(){var e=Object(u.b)();return Object(c.useEffect)((function(){try{var t=window.location.origin.replace(/^http/,"ws"),n=new WebSocket(t),s=new C.a;n.addEventListener("message",(function(){})),n.addEventListener("open",(function(){}));var a=s.get("user");a&&(e(z(a)),e(M()))}catch(c){console.error(c)}}),[]),Object(W.jsx)(A.a,{children:Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)(_e,{}),Object(W.jsxs)(P.c,{children:[Object(W.jsx)(P.a,{path:"/",element:Object(W.jsx)(V,{})}),Object(W.jsx)(P.a,{path:"/userhub",element:Object(W.jsx)(he,{})}),Object(W.jsx)(P.a,{path:"/quiz",element:Object(W.jsx)(me,{})}),Object(W.jsx)(P.a,{path:"/instructions",element:Object(W.jsx)(xe,{})}),Object(W.jsx)(P.a,{path:"/results",element:Object(W.jsx)(le,{})}),Object(W.jsx)(P.a,{path:"/leaderboard",element:Object(W.jsx)(ge,{})})]})]})})};n(44);o.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(u.a,{store:k,children:Object(W.jsx)(Ne,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.12a8437f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(195)},193:function(e,t,a){e.exports=a.p+"static/media/WatchAnyMovieLogo.a9ab1314.png"},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),l=a.n(r),i=a(8),c=(a(78),a(74)),s=a.n(c),d=a(17),p=a.n(d),m=a(111),u=a.n(m),b=a(229),g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"navbar fixed-bottom  justify-content-center"},o.a.createElement("span",{style:{background:"#1f1e1e",paddingLeft:"25px",paddingRight:"25px",paddingTop:"12px",paddingBottom:"12px",color:"gray",borderRadius:"5px",fontSize:"15px",width:"250px",textAlign:"center"}},"Developed by ",o.a.createElement("span",{style:{color:"red"}},"Amol Dalwai"))))},h=a(231),v=a(232),E=a(102),f=a.n(E),w=a(234),x=a(233),y=a(235),S=a(107),k=a.n(S),j=a(109),O=a.n(j),C=a(110),R=a.n(C),N=a(230),F=a(198),T=a(108),z=a.n(T),A=a(228),L=a(227),D=a(52),_=a(38),I=a.n(_),P=a(105),H=a.n(P),W=function(e){var t=Object(D.a)(),a=Object(L.a)(t.breakpoints.down("xl")),r=Object(L.a)(t.breakpoints.down("xs")),l=o.a.useState(!0),c=Object(i.a)(l,2),s=c[0],d=c[1],m=o.a.useState(!1),u=Object(i.a)(m,2),g=u[0],h=u[1],v=o.a.useState(!1),E=Object(i.a)(v,2),f=E[0],w=E[1],S=o.a.useState(!1),j=Object(i.a)(S,2),C=j[0],T=j[1],_=o.a.useState(!1),P=Object(i.a)(_,2),W=P[0],B=P[1],q=Object(n.useState)(),M=Object(i.a)(q,2),U=M[0],Y=M[1],J=Object(n.useState)(),V=Object(i.a)(J,2),G=V[0],K=V[1],Q=Object(n.useState)(),X=Object(i.a)(Q,2),Z=X[0],$=X[1],ee=Object(n.useState)("https://webinars.motivatingthemasses.com/fromgood2unforgettable/images/poster-loading.gif"),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],oe=Object(n.useState)("Loading..."),re=Object(i.a)(oe,2),le=re[0],ie=re[1],ce=Object(n.useState)("Loading..."),se=Object(i.a)(ce,2),de=se[0],pe=se[1],me=Object(n.useState)("Loading..."),ue=Object(i.a)(me,2),be=ue[0],ge=ue[1],he=Object(n.useState)("Loading..."),ve=Object(i.a)(he,2),Ee=ve[0],fe=ve[1],we=Object(n.useState)("..."),xe=Object(i.a)(we,2),ye=xe[0],Se=xe[1],ke=Object(n.useState)("..."),je=Object(i.a)(ke,2),Oe=je[0],Ce=je[1],Re=Object(n.useState)(),Ne=Object(i.a)(Re,2),Fe=Ne[0],Te=Ne[1],ze=Object(n.useState)("01"),Ae=Object(i.a)(ze,2),Le=Ae[0],De=Ae[1],_e=Object(n.useState)(!0),Ie=Object(i.a)(_e,2),Pe=Ie[0],He=Ie[1],We=Object(n.useState)(""),Be=Object(i.a)(We,2),qe=Be[0],Me=Be[1];p.a.get("https://www.omdbapi.com/?apikey=e630e8d2&i=".concat(e.imval)).then(function(t){ne(t.data.Poster),ie("("+t.data.Year+")"),pe(t.data.Genre),ge(t.data.Plot),fe(t.data.Title),Se("Imdb: "+t.data.imdbRating),Ce("Metascore: "+t.data.Metascore),Te(t.data.Type),Y('javascript:window.location.replace("https://database.gdriveplayer.io/player.php?imdb='.concat(e.imval,'")')),K('javascript:window.location.replace("https://gomo.to/show/'.concat(e.imval,'/01-01")'))});var Ue=function(){d(!1),e.funsetdetailbool()},Ye=function(){h(!1)},Je=function(){w(!1)},Ve=function(){T(!1)},Ge=function(){B(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{open:s,maxWidth:"xs",fullScreen:r,onClose:Ue,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement("div",{className:"movieDataDiv "},o.a.createElement("img",{src:ae,className:"moviePosterDiv",alt:"movie-poster"}),o.a.createElement(A.a,{onClick:Ue,style:{position:"absolute",top:"5px",left:"5px",color:"white",width:"60px",height:"60px",background:"rgb(0,0,0,0.3)",borderRadius:"100%"}},o.a.createElement(I.a,{fontSize:"large"})),o.a.createElement(A.a,{onClick:function(){"movie"===Fe?p.a.get("https://api.themoviedb.org/3/movie/".concat(e.imval,"/videos?api_key=d8bf019d0cca372bd804735f172f67e8")).then(function(e){$("https://www.youtube.com/embed/"+e.data.results[0].key),T(!0)}).catch(function(e){alert("No trailer found for this movie!!!")}):p.a.get("https://api.themoviedb.org/3/find/".concat(e.imval,"?api_key=d8bf019d0cca372bd804735f172f67e8&external_source=imdb_id")).then(function(e){p.a.get("https://api.themoviedb.org/3/tv/"+e.data.tv_results[0].id+"/videos?api_key=d8bf019d0cca372bd804735f172f67e8").then(function(e){$("https://www.youtube.com/embed/"+e.data.results[0].key),T(!0)}).catch(function(e){alert("No trailer found for this web series!!!")})}).catch(function(e){alert("No trailer found for this web series!!")})},style:{position:"absolute",top:"5px",right:"5px",color:"white",width:"50px",height:"50px",background:"rgb(0,0,0,0.3)"}},o.a.createElement(k.a,{fontSize:"large"})),o.a.createElement(b.a,{color:"primary",style:{background:"#b71c1c"},fontSize:"large",onClick:function(){"series"===Fe?w(!0):h(!0)},className:"playBtn"},o.a.createElement(z.a,null)),o.a.createElement("div",{className:"movieContent"},o.a.createElement("h4",null,Ee),o.a.createElement("hr",{style:{background:"white"}}),o.a.createElement("span",{style:{float:"right"}},le),o.a.createElement("span",{style:{float:"left"}},de),o.a.createElement("i",{style:{color:"gray",float:"left",marginTop:"10px"}},be),o.a.createElement(y.a,{label:ye,style:{background:"#ffea00",color:"black",borderRadius:"5px",marginTop:"10px",fontWeight:"bolder"}}),o.a.createElement(y.a,{label:Oe,color:"primary",style:{marginTop:"10px",borderRadius:"5px",marginLeft:"10px",fontWeight:"bolder"}}),o.a.createElement("br",null))),o.a.createElement("div",null,o.a.createElement(x.a,{fullScreen:a,open:g,onClose:Ye,"aria-labelledby":"responsive-dialog-title"},o.a.createElement("iframe",Object.assign({src:U,title:"movieServer",width:"100%",height:"100%",id:"myId",style:{border:"none"}},Pe?{sandbox:"allow-same-origin allow-scripts allow-forms"}:{})),o.a.createElement(A.a,{onClick:Ye,style:{position:"absolute",top:"5px",left:"5px",color:"white",width:"60px",height:"60px",background:"rgb(0,0,0,0.5)",borderRadius:"100%"}},o.a.createElement(I.a,{fontSize:"large"})),o.a.createElement(N.a,{variant:"contained",style:{position:"absolute",top:"5px",right:"12vw",color:"white",width:"190px",height:"50px",background:"rgb(0,0,0,0.5)",padding:"5px",borderRadius:"5px"}},o.a.createElement("select",{style:{background:"rgb(0,0,0,0.5)",color:"white"},value:U,onChange:function(t){"https://videospider.in/getvideo?key=Ez99ULqORLkSi7LH&video_id="===t.target.value?He(!1):He(!0),Y(t.target.value+"".concat(e.imval))}},o.a.createElement("option",{value:"https://database.gdriveplayer.io/player.php?imdb="},"Server 1"),o.a.createElement("option",{value:"https://gomo.to/movie/"},"Server 2"),o.a.createElement("option",{value:"https://123moviesplayer.com/movie/"},"Server 3"),o.a.createElement("option",{value:"https://v2.vidsrc.me/embed/"},"Server 4"),o.a.createElement("option",{value:"https://videospider.in/getvideo?key=Ez99ULqORLkSi7LH&video_id="},"use AdBlocker")),o.a.createElement(F.a,null,o.a.createElement(A.a,{onClick:function(){B(!0),p.a.get("https://yts.mx/api/v2/list_movies.json?query_term=".concat(e.imval)).then(function(t){Me(t.data.data.movies[0].torrents[0].hash+"&dn=&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopentor.org%3A2710&tr=udp%3A%2F%2Ftracker.ccc.de%3A80&tr=udp%3A%2F%2Ftracker.blackunicorn.xyz%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969F"),window.webtor=window.webtor||[],window.webtor.push({id:"player",magnet:"magnet:?xt=urn:btih:"+qe,on:function(e){e.name,window.webtor.TORRENT_FETCHED,e.name,window.webtor.TORRENT_ERROR},imdbId:"".concat(e.imval),lang:"en",i18n:{en:{common:{"prepare to play":"Preparing Video Stream... Please Wait..."},stat:{seeding:"Seeding",waiting:"Client initialization","waiting for peers":"Waiting for peers",from:"from"}}}})}).catch(function(e){alert("No Torrent URL Found ")})}},o.a.createElement(O.a,{color:"primary",fontSize:"large"}))))))),o.a.createElement(x.a,{fullScreen:a,open:f,onClose:Je,"aria-labelledby":"responsive-dialog-title"},o.a.createElement("iframe",{src:G,title:"movieServer",width:"100%",height:"100%",id:"myId",style:{border:"none"},sandbox:"allow-same-origin allow-scripts  allow-forms"}),o.a.createElement("select",{defaultValue:Le,onChange:function(e){De(e.target.value)},style:{position:"absolute",top:"5px",left:"25vw",color:"white",width:"90px",height:"50px",background:"rgb(0,0,0,0.5)",padding:"5px",borderRadius:"5px"}},o.a.createElement("option",{value:"01",selected:"selected"},"Season "),o.a.createElement("option",{value:"01"},"Season 1"),o.a.createElement("option",{value:"02"},"Season 2"),o.a.createElement("option",{value:"03"},"Season 3"),o.a.createElement("option",{value:"04"},"Season 4"),o.a.createElement("option",{value:"02"},"Season 5"),o.a.createElement("option",{value:"06"},"Season 6"),o.a.createElement("option",{value:"07"},"Season 7"),o.a.createElement("option",{value:"08"},"Season 8"),o.a.createElement("option",{value:"09"},"Season 9"),o.a.createElement("option",{value:"10"},"Season 10")),o.a.createElement("select",{value:G,onChange:function(t){K("https://gomo.to/show/"+"".concat(e.imval,"/")+"".concat(Le)+"-"+t.target.value)},style:{position:"absolute",top:"5px",right:"12vw",color:"white",width:"90px",height:"50px",background:"rgb(0,0,0,0.5)",padding:"5px",borderRadius:"5px"}},o.a.createElement("option",{value:"01",selected:"selected"},"Episode"),o.a.createElement("option",{value:"01"},"Ep 1"),o.a.createElement("option",{value:"02"},"Ep 2"),o.a.createElement("option",{value:"03"},"Ep 3"),o.a.createElement("option",{value:"04"},"Ep 4"),o.a.createElement("option",{value:"02"},"Ep 5"),o.a.createElement("option",{value:"06"},"Ep 6"),o.a.createElement("option",{value:"07"},"Ep 7"),o.a.createElement("option",{value:"08"},"Ep 8"),o.a.createElement("option",{value:"09"},"Ep 9"),o.a.createElement("option",{value:"10"},"Ep 10")),o.a.createElement(A.a,{onClick:Je,style:{position:"absolute",top:"5px",left:"5px",color:"white",width:"60px",height:"60px",background:"rgb(0,0,0,0.5)",borderRadius:"100%"}},o.a.createElement(I.a,{fontSize:"large"}))),o.a.createElement(x.a,{fullScreen:a,open:C,onClose:Ve,"aria-labelledby":"responsive-dialog-title"},o.a.createElement("iframe",{src:Z,title:"TrailerServer",width:"100%",height:"100%",id:"myTrailer",style:{border:"none"}}),o.a.createElement(A.a,{onClick:Ve,style:{position:"absolute",top:"5px",left:"5px",color:"white",width:"60px",height:"60px",background:"rgb(0,0,0,0.5)",borderRadius:"100%"}},o.a.createElement(I.a,{fontSize:"large"}))),o.a.createElement(x.a,{fullScreen:a,open:W,onClose:Ge,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(A.a,{onClick:Ge,style:{position:"absolute",top:"5px",left:"5px",color:"white",width:"60px",height:"60px",background:"rgb(0,0,0,0.5)",borderRadius:"100%"}},o.a.createElement(I.a,{fontSize:"large"})),o.a.createElement(F.a,{variant:"contained",color:"secondary",style:{position:"absolute",top:"5px",right:"10px",color:"white",width:"60px",height:"60px",background:"rgb(0,0,0,0.5)",borderRadius:"100%"}},o.a.createElement("a",{href:"magnet:?xt=urn:btih:"+qe,download:!0,style:{textDecoration:"none",color:"white"}},o.a.createElement(R.a,null))),o.a.createElement("div",{id:"player",className:"webtor"}),o.a.createElement(H.a,{type:"text/javascript",src:"https://cdn.jsdelivr.net/npm/@webtor/player-sdk-js/dist/index.min.js"})))},B=function(){var e=Object(n.useState)("avengers"),t=Object(i.a)(e,2),r=t[0],l=t[1],c=Object(n.useState)([]),d=Object(i.a)(c,2),m=d[0],E=d[1],x=Object(n.useState)([]),y=Object(i.a)(x,2),S=y[0],k=y[1],j=o.a.useState(!1),O=Object(i.a)(j,2),C=O[0],R=O[1],N=Object(n.useState)(!1),F=Object(i.a)(N,2),T=F[0],z=F[1],A=Object(n.useState)(),L=Object(i.a)(A,2),D=L[0],_=L[1],I=function(){p.a.get("https://www.omdbapi.com/?apikey=4eb65943&s=".concat(r)).then(function(e){E(e.data.Search.map(function(e){return e}))}).catch(function(e){R(!0)}),P()},P=function(){p.a.get("https://www.omdbapi.com/?apikey=5fcb333a&s=".concat(r,"&page=2")).then(function(e){k(e.data.Search.map(function(e){return e}))}).catch(function(e){})};function H(e){z(!0),_(e)}Object(n.useEffect)(function(){I()},[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{loopDuration:2e3,data:[{image:a(193),imageAnimation:"flip",backgroundColor:"#212121"}]}),o.a.createElement("center",null,o.a.createElement("div",{className:" navbar-dark bg-dark"},o.a.createElement("br",null),o.a.createElement("input",{type:"text",value:r,onChange:function(e){l(e.target.value.toLowerCase())},placeholder:"Search movies/series",style:{height:"57px",width:"250px",borderRadius:"5px",paddingLeft:"30px",color:"white",background:"#212121",border:"2px"}}),o.a.createElement(b.a,{color:"primary","aria-label":"add",style:{background:"#b71c1c",borderRadius:"7px"},onClick:I},o.a.createElement(u.a,null)),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("br",null),o.a.createElement("center",null,o.a.createElement("div",{className:"resultContainer"},m.map(function(e){return o.a.createElement("div",{key:e.imdbID,onClick:function(){return H(e.imdbID)}},o.a.createElement(h.a,{className:"movieCard"},o.a.createElement(v.a,null,o.a.createElement("img",{className:"moviePoster",src:e.Poster,alt:e.Title}),o.a.createElement("span",{variant:"contained",style:{position:"absolute",top:"0px",right:"0px",background:"rgba(0, 0, 0, 0.5)",color:"white",borderRadius:"4px"}},e.Year),o.a.createElement("div",{className:"middle"},o.a.createElement("div",{className:"text"},o.a.createElement(s.a,{className:"playHoverIcon",fontSize:"large",style:{color:"#aa2e25",fontSize:"60px"}}))),o.a.createElement("div",{className:"overlay"},e.Title))))}),S.map(function(e){return o.a.createElement("div",{key:e.imdbID,onClick:function(){return H(e.imdbID)}},o.a.createElement(h.a,{className:"movieCard"},o.a.createElement(v.a,null,o.a.createElement("img",{className:"moviePoster",src:e.Poster,alt:e.Title}),o.a.createElement("span",{variant:"contained",style:{position:"absolute",top:"0px",right:"0px",background:"rgba(0, 0, 0, 0.5)",color:"white",borderRadius:"4px"}},o.a.createElement("b",null," ",e.Year)),o.a.createElement("div",{className:"middle"},o.a.createElement("div",{className:"text"},o.a.createElement(s.a,{className:"playHoverIcon",fontSize:"large",style:{color:"#aa2e25",fontSize:"60px"}}))),o.a.createElement("div",{className:"overlay"},e.Title))))}))),o.a.createElement(w.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:C,autoHideDuration:1500,onClose:function(e,t){"clickaway"!==t&&R(!1)},style:{marginTop:"20vh"},message:"No search results found !!"}),T?o.a.createElement(W,{imval:D,funsetdetailbool:function(){z(!1)}}):null),o.a.createElement(g,null))};a(194);l.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null)),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.894d33f4.chunk.js.map
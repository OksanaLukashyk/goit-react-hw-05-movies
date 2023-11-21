"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{597:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(861),a=n(439),s=n(757),i=n.n(s),c=n(791),o=n(689),u=n(87),p=n(686),l=n(653),m=n(883),d={mainInfoWrp:"MovieCard_mainInfoWrp__4KAtr",posterWrp:"MovieCard_posterWrp__ODbCU",posterImg:"MovieCard_posterImg__ga5JI",posterImgShadow:"MovieCard_posterImgShadow__1hQ45",textInfoWrp:"MovieCard_textInfoWrp__ugpPi",charName:"MovieCard_charName__LETYi",genresList:"MovieCard_genresList__5957d",genreItem:"MovieCard_genreItem__0Cgvp",moreInfoLink:"MovieCard_moreInfoLink__0xA2D",active:"MovieCard_active__4M6Rk",moreInfoWrp:"MovieCard_moreInfoWrp__q+KkV",moreInfoList:"MovieCard_moreInfoList__sJhA8"},f=n(184),v=(0,c.lazy)((function(){return n.e(76).then(n.bind(n,76))})),h=(0,c.lazy)((function(){return n.e(168).then(n.bind(n,168))})),_=function(e){var r=e.movie,n="https://media.comicbook.com/files/img/default-movie.png?auto=webp",t=r.release_date.substring(0,4),a=r.runtime,s=Math.floor(a/60),i=a%60,p=Number(r.vote_average.toFixed(1));return(0,f.jsxs)("div",{className:d.movieCardWrp,children:[(0,f.jsxs)("div",{className:d.mainInfoWrp,children:[(0,f.jsxs)("div",{className:d.posterWrp,children:[(0,f.jsx)("img",{src:r.poster_path?"http://image.tmdb.org/t/p/w500/".concat(r.poster_path):n,alt:r.title,className:d.posterImg}),(0,f.jsx)("img",{src:r.poster_path?"http://image.tmdb.org/t/p/w500/".concat(r.poster_path):n,alt:r.title,className:d.posterImgShadow})]}),(0,f.jsxs)("div",{className:d.textInfoWrp,children:[(0,f.jsxs)("h1",{children:[r.title," ",(0,f.jsxs)("span",{children:["(",t,")"]})]}),(0,f.jsxs)("p",{children:['"',r.tagline,'"']}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{className:d.charName,children:"Duration: "}),s,"h ",i,"m"]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{className:d.charName,children:"Average User Score: "}),p]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:r.overview}),(0,f.jsx)("h3",{children:"Genres:"}),(0,f.jsx)("ul",{className:d.genresList,children:r.genres&&r.genres.map((function(e){return(0,f.jsx)("li",{className:d.genreItem,children:e.name},e.id)}))})]})]}),(0,f.jsxs)("div",{className:d.moreInfoWrp,children:[(0,f.jsx)("h3",{className:d.moreInfo,children:"Additional information"}),(0,f.jsxs)("ul",{className:d.moreInfoList,children:[(0,f.jsx)("li",{className:d.moreInfoItem,children:(0,f.jsx)(u.OL,{className:d.moreInfoLink,to:"cast",children:"Cast"})}),(0,f.jsx)("li",{className:d.moreInfoItem,children:(0,f.jsx)(u.OL,{className:d.moreInfoLink,to:"reviews",children:"Reviews"})})]})]}),(0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)(m.a,{}),children:(0,f.jsxs)(o.Z5,{children:[(0,f.jsx)(o.AW,{path:"cast",element:(0,f.jsx)(v,{})}),(0,f.jsx)(o.AW,{path:"reviews",element:(0,f.jsx)(h,{})})]})})]})},x="MovieDetails_backLinkRef__wcQgO",g=function(){var e,r,n=(0,c.useState)(null),s=(0,a.Z)(n,2),d=s[0],v=s[1],h=(0,c.useState)(!1),g=(0,a.Z)(h,2),j=g[0],I=g[1],w=(0,c.useState)(null),b=(0,a.Z)(w,2),N=b[0],k=b[1],C=(0,o.UO)().movieId,Z=(0,o.TH)(),M=(0,c.useRef)(null!==(e=null===(r=Z.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,c.useEffect)((function(){if(C){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),k(null),e.next=5,(0,l.TP)(C);case 5:r=e.sent,v(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k(e.t0);case 12:return e.prev=12,I(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C]),(0,f.jsxs)("div",{className:"innerPageContainer",children:[(0,f.jsx)(u.rU,{to:M.current,className:x,children:"Go Back"}),null!==N&&p.Notify.failure("Oops, some error occured... Please try reloading the page",{timeout:6e3}),j&&(0,f.jsx)(m.a,{}),null!==d&&(0,f.jsx)(_,{movie:d})]})}},653:function(e,r,n){n.d(r,{Hg:function(){return o},TP:function(){return p},XT:function(){return u},tx:function(){return m},zv:function(){return l}});var t=n(861),a=n(757),s=n.n(a),i=n(340),c="https://api.themoviedb.org/3/";i.Z.defaults.params={api_key:"9b82d38bb9ccc6a083c91c5694927b6b"};var o=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"trending/movie/day"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"search/movie?query=").concat(r));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"movie/").concat(r,"&append_to_response=videos,credits"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"movie/").concat(r,"/credits"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"movie/").concat(r,"/reviews"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=597.d1fd8f62.chunk.js.map
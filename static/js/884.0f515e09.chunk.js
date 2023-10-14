"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{449:function(e,t,n){n.d(t,{Oc:function(){return o},Z4:function(){return u},Zl:function(){return v},jN:function(){return c},ne:function(){return l}});var r=n(861),a=n(757),s=n.n(a),i=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{language:"en-US",api_key:"de598b8a73d0faf19e596baca4221ad4"}}),c=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/all/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t,include_adult:!1,page:1}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"),{params:{page:1}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},884:function(e,t,n){n.r(t);var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(449),u=n(791),o=n(689),l=n(87),v=n(305),d=n(414),p=n(184),m=(0,u.lazy)((function(){return n.e(205).then(n.bind(n,205))})),f=(0,u.lazy)((function(){return n.e(168).then(n.bind(n,168))}));t.default=function(){var e,t,n,s,h,x=(0,o.UO)().movieId,Z=(0,u.useState)(null),j=(0,a.Z)(Z,2),w=j[0],b=j[1],g=(0,o.TH)(),k=(0,u.useRef)(null!==(e=null===g||void 0===g||null===(t=g.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,u.useEffect)((function(){if(x){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.Oc)(x);case 3:t=e.sent,b(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]);var N=Math.floor(10*(null===w||void 0===w?void 0:w.vote_average)),D=null===w||void 0===w||null===(n=w.genres)||void 0===n||null===(s=n.map((function(e){return e.name})))||void 0===s?void 0:s.join(", "),y=null===w||void 0===w||null===(h=w.release_date)||void 0===h?void 0:h.slice(0,4);return(0,p.jsxs)("div",{className:v.Z.movieDetailsContainer,children:[(0,p.jsx)(l.rU,{className:v.Z.movieDetailsBtn,to:k.current,children:"\ud83e\udc14 Go back"}),w?(0,p.jsxs)("div",{className:v.Z.movieDetailsWrap,children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{className:v.Z.movieDetailsImg,src:"https://image.tmdb.org/t/p/w342".concat(w.poster_path),alt:w.title})}),(0,p.jsxs)("div",{className:v.Z.movieDetailsText,children:[(0,p.jsxs)("h1",{className:v.Z.movieDetailsTitle,children:[w.title," (",y,")"]}),(0,p.jsxs)("p",{className:v.Z.movieDetailsScore,children:["User score: ",N,"%"]}),(0,p.jsx)("h2",{className:v.Z.movieDetailsOverviewTitle,children:"Overview"}),(0,p.jsx)("p",{className:v.Z.movieDetailsOverviewText,children:w.overview}),(0,p.jsx)("h3",{className:v.Z.movieDetailsGenresTitle,children:"Genres"}),(0,p.jsx)("p",{className:v.Z.movieDetailsGenresText,children:D})]})]}):null,(0,p.jsxs)("div",{className:v.Z.additionalInformation,children:[(0,p.jsx)("h4",{className:v.Z.movieDetailsAdditionalText,children:"Additional information"}),(0,p.jsx)(l.rU,{className:v.Z.additional,to:"cast",children:"Cast"}),(0,p.jsx)(l.rU,{className:v.Z.additional,to:"reviews",children:"Reviews"})]}),(0,p.jsx)(u.Suspense,{fallback:(0,p.jsx)(d.a,{}),children:(0,p.jsxs)(o.Z5,{children:[(0,p.jsx)(o.AW,{path:"cast",element:(0,p.jsx)(m,{})}),(0,p.jsx)(o.AW,{path:"reviews",element:(0,p.jsx)(f,{})})]})})]})}}}]);
//# sourceMappingURL=884.0f515e09.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{449:function(e,r,t){t.d(r,{Oc:function(){return o},Z4:function(){return i},Zl:function(){return f},jN:function(){return s},ne:function(){return p}});var n=t(861),a=t(757),u=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{language:"en-US",api_key:"de598b8a73d0faf19e596baca4221ad4"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/all/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r,include_adult:!1,page:1}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"),{params:{page:1}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},134:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(87),o=t(689),p=t(449),f=t(305),l=t(184);r.default=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],u=r[1],v=(0,i.lr)(),d=(0,a.Z)(v,2),h=d[0],m=d[1],x=h.get("query"),w=(0,o.TH)(),b=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),m({query:r.currentTarget.elements.searchWord.value});case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){if(null!==x){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Z4)(x);case 3:r=e.sent,t=r.results,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]),(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:b,children:[(0,l.jsx)("input",{name:"searchWord",type:"text",placeholder:"Enter search for a movie",defaultValue:x}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),(0,l.jsx)("ul",{className:f.Z.movieList,children:t.map((function(e){return(0,l.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:w},params:{movieId:e.id},children:e.title||e.name},e.id)}))})]})}}}]);
//# sourceMappingURL=134.7824d1e4.chunk.js.map
(this.webpackJsonpmutantkingsfarm=this.webpackJsonpmutantkingsfarm||[]).push([[17],{315:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return g}));var a=n(2),r=n(8),i=n(14),s=n(0),c=n(6),u=n.n(c),p=n(246),o=n(97),d=n(49),l=n(294),b=n(79),j=n.n(b),y=n(319),m=function(e,t){return new(new j.a(e).eth.Contract)(y,t)},f=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n,r){var i,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=m(t,n),e.prev=1,e.next=4,i.methods.balanceOf(r).call();case 4:return s=e.sent,e.abrupt("return",s);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,a){return e.apply(this,arguments)}}(),O=n(26),x=n(77),h=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],o=n[1],d=Object(p.i)(),l=d.account,b=d.ethereum,j=Object(x.a)().fastRefresh;return Object(s.useEffect)((function(){var t=function(){var t=Object(r.a)(Object(a.a)().mark((function t(){var n;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(b,e,l);case 2:n=t.sent,o(new u.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();l&&b&&t()}),[l,b,e,j]),c},v=function(){var e=Object(x.a)().slowRefresh,t=Object(s.useState)(),n=Object(i.a)(t,2),c=n[0],p=n[1];return Object(s.useEffect)((function(){function e(){return(e=Object(r.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.a)(o,Object(O.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,p(new u.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},g=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],p=n[1],l=Object(x.a)().slowRefresh;return Object(s.useEffect)((function(){var e=function(){var e=Object(r.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.a)(o,Object(O.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,p(new u.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[e,l]),c};t.a=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],o=n[1],d=Object(p.i)(),b=d.account,j=d.ethereum,y=Object(x.a)().fastRefresh;return Object(s.useEffect)((function(){var t=function(){var t=Object(r.a)(Object(a.a)().mark((function t(){var n;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.b)(j,e,b);case 2:n=t.sent,o(new u.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();b&&j&&t()}),[b,j,e,y]),c}},318:function(e,t,n){"use strict";var a=n(7),r=(n(0),n(25)),i=n(246),s=n(92),c=n(5);t.a=function(e){var t=Object(s.a)(),n=Object(i.i)(),u=n.connect,p=n.reset,o=Object(r.H)(u,p).onPresentConnectModal;return Object(c.jsx)(r.d,Object(a.a)(Object(a.a)({onClick:o},e),{},{children:t(292,"Unlock Wallet")}))}},319:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminshipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"OPENSEA_STORE","outputs":[{"internalType":"contract IERC1155","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SIGNER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceYieldToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burn","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"indexes","type":"uint256[]"}],"name":"importSnapShot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMutants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"mintMutant","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceAdminship","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_yield","type":"address"}],"name":"setYieldToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"transferAdminship","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newURI","type":"string"}],"name":"updateURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yieldToken","outputs":[{"internalType":"contract YieldToken","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')},349:function(e,t,n){"use strict";var a=n(2),r=n(8),i=n(14),s=n(0),c=n(246),u=n(49),p=n(317),o=n(26),d=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n,r,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(u.b)(),r=new n.eth.Contract(p,Object(o.i)()),e.next=4,r.methods.getTotalClaimable(t,Object(o.b)()).call();case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=d,b=n(77);t.a=function(){var e=Object(s.useState)("0"),t=Object(i.a)(e,2),n=t[0],u=t[1],p=Object(c.i)().account,o=Object(b.a)().fastRefresh;return Object(s.useEffect)((function(){var e=function(){var e=Object(r.a)(Object(a.a)().mark((function e(){var t;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(p);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p&&e()}),[p,o]),n}},534:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return de}));var a,r,i,s,c,u,p,o,d,l,b,j,y,m=n(35),f=n(0),O=n(1),x=n(25),h=n(92),v=n(94),g=n(2),w=n(8),T=n(14),k=n(246),M=n(6),S=n.n(M),z=n(316),C=n(7),I=n(24),R=n(26),B=n(47),A=n(351),E=n(77),F=function(){var e=Object(f.useState)([]),t=Object(T.a)(e,2),n=t[0],a=t[1],r=Object(k.i)().account,i=Object(E.a)().fastRefresh;return Object(f.useEffect)((function(){var e=function(){var e=Object(w.a)(Object(g.a)().mark((function e(){var t,n,i;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=A.a.map((function(e){return{address:Object(R.e)(),name:"pendingCrowns",params:[e.pid,r]}})),e.next=3,Object(I.a)(B,t);case 3:n=e.sent,i=A.a.map((function(e,t){return Object(C.a)(Object(C.a)({},e),{},{balance:new S.a(n[t])})})),a(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r&&e()}),[r,i]),n},N=n(318),W=n(419),_=n(5),U=function(e){var t=e.value,n=e.decimals,a=e.fontSize,r=void 0===a?"40px":a,i=e.prefix,s=Object(W.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),c=s.countUp,u=s.update,p=Object(f.useRef)(u);return Object(f.useEffect)((function(){p.current(t)}),[t,p]),Object(_.jsxs)(x.B,{bold:!0,fontSize:r,children:[i,c]})},H=function(e){var t=e.earningsSum,n=Object(h.a)();return Object(k.i)().account?Object(_.jsx)(U,{value:t}):Object(_.jsx)(x.B,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},$=function(e){var t=e.cakeBalance,n=Object(h.a)();return Object(k.i)().account?Object(_.jsx)(U,{value:t,fontSize:"24px"}):Object(_.jsx)(x.B,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},P=n(62),K=n(315),L=function(){var e=Object(f.useState)([]),t=Object(T.a)(e,2),n=t[0],a=t[1],r=Object(k.i)().account,i=Object(E.a)().fastRefresh;return Object(f.useEffect)((function(){var e=function(){var e=Object(w.a)(Object(g.a)().mark((function e(){var t,n;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=A.a.map((function(e){return{address:Object(R.e)(),name:"pendingCrowns",params:[e.pid,r]}})),e.next=3,Object(I.a)(B,t);case 3:n=e.sent,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r&&e()}),[r,i]),n},D=n(349),J=n(263),Q=Object(O.e)(x.h)(a||(a=Object(m.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),Y=O.e.div(r||(r=Object(m.a)(["\n  margin-bottom: 16px;\n"]))),V=O.e.img(i||(i=Object(m.a)(["\n  margin-bottom: 16px;\n"]))),G=O.e.div(s||(s=Object(m.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),q=O.e.div(c||(c=Object(m.a)(["\n  margin-top: 24px;\n"]))),X=O.e.div(u||(u=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-around;\n  margin-bottom: 8px;\n"]))),Z=function(){var e=Object(f.useState)(!1),t=Object(T.a)(e,2),n=t[0],a=t[1],r=Object(k.i)().account,i=Object(h.a)(),s=F(),c=Object(J.a)(Object(K.a)(Object(R.a)())),u=Object(J.a)(Object(K.a)(Object(R.b)())),p=Object(P.f)().toNumber(),o=L(),d=Object(D.a)(),l=new S.a(d).div(new S.a(10).pow(18)).toNumber(),b=o.reduce((function(e,t){return e+new S.a(t).div(new S.a(10).pow(18)).toNumber()}),0),j=s.filter((function(e){return e.balance.toNumber()>0})),y=Object(z.a)(j.map((function(e){return e.pid}))).onReward,m=Object(f.useCallback)(Object(w.a)(Object(g.a)().mark((function e(){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,y();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,a(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[y]);return Object(_.jsx)(Q,{children:Object(_.jsxs)(x.i,{children:[Object(_.jsx)(x.n,{size:"xl",mb:"24px",children:i(542,"Farms & Staking")}),Object(_.jsxs)(X,{children:[Object(_.jsx)(V,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(_.jsx)(V,{src:"/images/farms/kings.png",alt:"cake logo",width:64,height:64})]}),Object(_.jsxs)(X,{children:[Object(_.jsxs)(Y,{children:[Object(_.jsx)(G,{children:i(544,"Crowns to Harvest")}),Object(_.jsx)(H,{earningsSum:b}),Object(_.jsxs)(G,{children:["~$",(p*b).toFixed(2)]})]}),Object(_.jsxs)(Y,{children:[Object(_.jsx)(G,{children:i(545,"Kings to Harvest")}),Object(_.jsx)(H,{earningsSum:l}),Object(_.jsxs)(G,{children:["~$",(p*l).toFixed(2)]})]})]}),Object(_.jsxs)(X,{children:[Object(_.jsxs)(Y,{children:[Object(_.jsx)(G,{children:i(546,"Crowns in Wallet")}),Object(_.jsx)($,{cakeBalance:c}),Object(_.jsxs)(G,{children:["~$",(p*c).toFixed(2)]})]}),Object(_.jsxs)(Y,{children:[Object(_.jsx)(G,{children:i(547,"Kings in Wallet")}),Object(_.jsx)($,{cakeBalance:u}),Object(_.jsxs)(G,{children:["~$",(p*u).toFixed(2)]})]})]}),Object(_.jsx)(q,{children:r?Object(_.jsx)(x.d,{id:"harvest-all",disabled:j.length<=0||n,onClick:m,fullWidth:!0,children:n?i(548,"Collecting CROWN"):i(999,"Harvest all (".concat(j.length,")"))}):Object(_.jsx)(N.a,{fullWidth:!0})})]})})},ee=n(282),te=Object(O.e)(x.h)(p||(p=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ne=O.e.div(o||(o=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ae=function(){var e=Object(h.a)(),t=Object(K.d)(),n=Object(K.b)(Object(R.a)()),a=Object(P.c)(),r=Object(P.f)(),i=t?t.minus(n):new ee.a(0),s=Object(J.a)(i),c=r.times(i),u=0;return a&&a[0]&&a[0].crownsPerBlock&&(u=new ee.a(a[0].crownsPerBlock).div(new ee.a(10).pow(18)).toNumber()),Object(_.jsx)(te,{children:Object(_.jsxs)(x.i,{children:[Object(_.jsx)(x.n,{size:"xl",mb:"24px",children:e(534,"Crowns Stats")}),Object(_.jsxs)(ne,{children:[Object(_.jsx)(x.B,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(_.jsx)(U,{fontSize:"14px",value:Object(J.a)(c),decimals:0,prefix:"$"})]}),Object(_.jsxs)(ne,{children:[Object(_.jsx)(x.B,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(_.jsx)(U,{fontSize:"14px",value:Object(J.a)(t),decimals:0})]}),Object(_.jsxs)(ne,{children:[Object(_.jsx)(x.B,{fontSize:"14px",children:e(538,"Total Burned")}),Object(_.jsx)(U,{fontSize:"14px",value:Object(J.a)(n),decimals:0})]}),Object(_.jsxs)(ne,{children:[Object(_.jsx)(x.B,{fontSize:"14px",children:e(10004,"Circulating Supply")}),s&&Object(_.jsx)(U,{fontSize:"14px",value:s,decimals:0})]}),Object(_.jsxs)(ne,{children:[Object(_.jsx)(x.B,{fontSize:"14px",children:e(540,"New CROWN/block")}),Object(_.jsx)(x.B,{bold:!0,fontSize:"14px",children:u})]})]})})},re=Object(O.e)(x.h)(d||(d=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ie=function(){var e=Object(h.a)(),t=Object(P.g)();return Object(_.jsx)(re,{children:Object(_.jsxs)(x.i,{children:[Object(_.jsx)(x.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(U,{value:t.toNumber(),prefix:"$",decimals:2}),Object(_.jsx)(x.B,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},se=n(530),ce=Object(O.e)(x.h)(l||(l=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ue=(O.e.div(b||(b=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(h.a)();return Object(_.jsx)(ce,{children:Object(_.jsxs)(x.i,{children:[Object(_.jsx)(x.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(_.jsx)(se.a,{dataSource:{sourceType:"profile",screenName:"inukings"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),pe=O.e.div(j||(j=Object(m.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),oe=Object(O.e)(x.b)(y||(y=Object(m.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),de=function(){var e=Object(h.a)();return Object(_.jsxs)(v.a,{children:[Object(_.jsxs)(pe,{children:[Object(_.jsx)(x.n,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"InuKings Club")}),Object(_.jsx)(x.B,{children:e(578,"Welcome to the InuKings Club.")})]}),Object(_.jsx)("div",{children:Object(_.jsxs)(oe,{children:[Object(_.jsx)(Z,{}),Object(_.jsx)(ue,{}),Object(_.jsx)(ae,{}),Object(_.jsx)(ie,{})]})})]})}}}]);
//# sourceMappingURL=17.6152e90e.chunk.js.map
(this["webpackJsonpcreate-react-app-with-typescript"]=this["webpackJsonpcreate-react-app-with-typescript"]||[]).push([[0],{306:function(e,t){},448:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(26),i=n.n(a),s=n(500),o=n(507),j=n(32),l=n(24),x=n(102),d=n(61),b=n(34),h=n(508),O=n(12),m=n(484),u=n(513),p=n(509),f=n(501),y=n(502),g=n(504),v=n(512),w=n(505),S=n(136),k=n(497),P=n(503),C=n(506),N=n(485),F=n(268),T=n.n(F),W=n(270),B=n.n(W),G=n(269),I=n.n(G),H=n(4),A=n.n(H),L=n(55),M=n(483),E=n(451),U=n(481),D=n(1);function R(e){return Object(D.jsx)(S.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function z(e){var t=e.accountInfo;if("undefined"===typeof t)return Object(D.jsx)(D.Fragment,{});var n=U.a.from(h.b.formatEther(t.balance)).round(6)+" ETH";return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(R,{children:"Account Details"}),Object(D.jsxs)(M.a,{container:!0,spacing:0,textoverflow:"ellipsis",style:{overflow:"hidden"},children:[Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Address"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:t.address})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Num Txns"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:t.txnCount})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Balance"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:n})})]})]})}var K=Object(m.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:150}}}));function J(e){var t=e.provider,n=Object(b.f)().accountAddr,r=K(e),a=Object(O.a)(r.paper,r.fixedHeight),i=Object(c.useState)(void 0),s=Object(l.a)(i,2),o=s[0],j=s[1];return Object(c.useEffect)(Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(function(){var e=Object(L.a)(A.a.mark((function e(){var c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=[]).push(t.getBalance(n)),c.push(t.getTransactionCount(n)),e.next=5,Promise.all(c);case 5:r=e.sent,j({address:n,balance:r[0],txnCount:r[1]});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();case 2:case"end":return e.stop()}}),e)}))),[t]),"undefined"===typeof o?Object(D.jsx)(D.Fragment,{}):Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(M.a,{container:!0,spacing:3,children:Object(D.jsx)(M.a,{item:!0,xs:12,md:12,lg:12,children:Object(D.jsx)(E.a,{className:a,children:Object(D.jsx)(z,{accountInfo:o})})})})})}var V=n(486),Z=n(490),q=n(489),X=n(487),Y=n(488),Q=n(73);function $(e){return"undefined"===typeof e||null===e?"":e.length<16?e:e.substr(0,8)+"..."+e.substr(e.length-6,e.length)}function _(e){var t=e.block;if("undefined"===typeof t||0===Object.keys(t).length)return Object(D.jsx)(D.Fragment,{});var n=U.a.from(h.b.formatUnits(t.baseFeePerGas,"gwei")).round(3)+" gwei",c=t.gasUsed.mul(t.baseFeePerGas),r=U.a.from(h.b.formatEther(c)).round(6)+" ETH";return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(R,{children:"Block Details"}),Object(D.jsxs)(M.a,{container:!0,spacing:0,textoverflow:"ellipsis",style:{overflow:"hidden"},children:[Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Number"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:t.number})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Hash"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:$(t.hash)})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Parent Hash"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:$(t.parentHash)})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Timestamp"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:new Date(1e3*t.timestamp).toISOString().split(".")[0]+"Z"})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Difficulty"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:t.difficulty})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Miner Addr"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:Object(D.jsx)(N.a,{component:j.b,to:"/account/".concat(t.miner),children:$(t.miner)})})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Num Txns"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:t.transactions.length})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Gas Limit"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:t.gasLimit.toNumber()})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Gas Used"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:t.gasUsed.toNumber()})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Base Fee (per Gas)"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:n})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Burned Fee"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:r})})]})]})}var ee=Object(m.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:350}}}));function te(e){var t=e.provider,n=Object(b.f)().blockNumber,r=Object(c.useState)(void 0),a=Object(l.a)(r,2),i=a[0],s=a[1],o=ee(e),x=Object(O.a)(o.paper,o.fixedHeight);return Object(c.useEffect)(Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(function(){var e=Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,t.getBlockWithTransactions(parseInt(n));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();case 2:case"end":return e.stop()}}),e)}))),[t]),"undefined"===typeof i?Object(D.jsx)(D.Fragment,{}):Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(M.a,{container:!0,spacing:3,children:[Object(D.jsx)(M.a,{item:!0,xs:12,md:12,lg:12,children:Object(D.jsx)(E.a,{className:x,children:Object(D.jsx)(_,{block:i})})}),Object(D.jsx)(M.a,{item:!0,xs:12,children:Object(D.jsxs)(E.a,{className:o.paper,children:[Object(D.jsx)(R,{children:"Block Transactions"}),Object(D.jsxs)(V.a,{size:"small",children:[Object(D.jsx)(X.a,{children:Object(D.jsxs)(Y.a,{children:[Object(D.jsx)(q.a,{children:"Hash"}),Object(D.jsx)(q.a,{children:"Txn Index"}),Object(D.jsx)(q.a,{children:"Txn Type"}),Object(D.jsx)(q.a,{children:"To"}),Object(D.jsx)(q.a,{children:"From"}),Object(D.jsx)(q.a,{children:"Value"}),Object(D.jsx)(q.a,{children:"Nonce"}),Object(D.jsx)(q.a,{align:"right",children:"Gas Limit"})]})}),Object(D.jsx)(Z.a,{children:i.transactions.map((function(e){return Object(D.jsxs)(Y.a,{children:[Object(D.jsx)(q.a,{children:Object(D.jsx)(N.a,{component:j.b,to:"/transaction/".concat(e.hash),children:$(e.hash)})}),Object(D.jsx)(q.a,{children:parseInt(e.transactionIndex)}),Object(D.jsx)(q.a,{children:0===parseInt(e.type,16)?"0 (Legacy)":2===parseInt(e.type,16)?"2 (EIP 1559)":parseInt(e.type,16)}),Object(D.jsx)(q.a,{children:Object(D.jsx)(N.a,{component:j.b,to:"/account/".concat(e.to),children:$(e.to)})}),Object(D.jsx)(q.a,{children:Object(D.jsx)(N.a,{component:j.b,to:"/account/".concat(e.from),children:$(e.from)})}),Object(D.jsx)(q.a,{children:Q.a.from(e.gasLimit).toNumber()}),Object(D.jsx)(q.a,{children:Q.a.from(e.nonce).toNumber()}),Object(D.jsx)(q.a,{align:"right",children:Q.a.from(e.gasLimit).toNumber()})]},e.hash)}))})]})]})})]})})}var ne=n(67),ce=n(491),re=n(492),ae=n(496),ie=n(260),se=n(261),oe=n(46),je=n(135),le=n(274),xe=n(262),de=function(e){var t=e.active,n=e.payload;e.label;return t&&n&&n.length?Object(D.jsxs)("div",{className:"custom-tooltip",children:[Object(D.jsx)("p",{className:"label",children:"Block ".concat(n[0].payload.number)}),Object(D.jsx)("p",{className:"intro",children:"Timestamp ".concat(new Date(1e3*n[0].payload.timestamp).toISOString().split(".")[0])}),Object(D.jsx)("p",{className:"desc",children:"Congestion Level ".concat(n[0].payload.congestionLevel)})]}):null};function be(e){var t=e.blocks?e.blocks.reverse():e.blocks,n=Object(ne.a)();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(R,{children:"Network Congestion"}),Object(D.jsx)(ce.a,{width:"100%",height:"100%",children:Object(D.jsxs)(re.a,{data:t,margin:{top:16,right:16,bottom:0,left:24},children:[Object(D.jsx)(ae.a,{strokeDasharray:"3 3"}),Object(D.jsx)(ie.a,{dataKey:"timestamp",stroke:n.palette.text.secondary}),Object(D.jsx)(se.a,{tickCount:3,type:"number",domain:[0,10],stroke:n.palette.text.secondary,children:Object(D.jsx)(oe.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:n.palette.text.primary},children:"Congestion Level"})}),Object(D.jsx)(je.a,{content:Object(D.jsx)(de,{})}),Object(D.jsx)(le.a,{dataKey:"congestionLevel",stackId:"a",fill:"#82ca9d",children:t.map((function(e,t){return Object(D.jsx)(xe.a,{fill:e.congestionLevel>=0?"#82ca9d":"#d62728"},"cell-".concat(t))}))})]})})]})}function he(e){var t=e.blocks,n=e.gasPriceEstimate;if("undefined"===typeof t||!t.length>0||"undefined"===typeof n)return Object(D.jsx)(D.Fragment,{});var c=Object(ne.a)(),r=t[0],a=U.a.from(h.b.formatUnits(r.baseFeePerGas,"gwei")).round(3)+" gwei",i=U.a.from(h.b.formatUnits(n,"gwei")).round(3)+" gwei";return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(R,{children:"Network Status"}),Object(D.jsxs)(M.a,{container:!0,spacing:0,textoverflow:"ellipsis",style:{overflow:"hidden"},children:[Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Latest Block"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:Object(D.jsx)(N.a,{component:j.b,to:"/block/".concat(r.number),children:r.number})})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Hash"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:$(r.hash)})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Parent Hash"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:$(r.parentHash)})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Timestamp"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:new Date(1e3*r.timestamp).toISOString().split(".")[0]})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Num Txns"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:r.transactions.length})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Base Fee (per Gas)"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:a})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Gas Limit"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:r.gasLimit.toNumber()})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Gas Used"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:r.gasUsed.toNumber()})}),Object(D.jsx)(M.a,{item:!0,xs:12,children:Object(D.jsx)(p.a,{py:2,children:Object(D.jsx)(k.a,{})})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Gas Price Estimate"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:i})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Congestion Level"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{style:{color:r.congestionLevel>5?c.palette.error.dark:c.palette.success.dark,fontWeight:"bold"},children:r.congestionLevel})})]})]})}var Oe=Object(m.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:350}}})),me=15*Math.pow(10,6);function ue(e){var t=Math.round(e/me*5*100)/100;return t=Math.max(0,Math.min(t,10))}function pe(e){var t=e.provider,n=Oe(e),r=Object(O.a)(n.paper,n.fixedHeight),a=Object(c.useState)(void 0),i=Object(l.a)(a,2),s=i[0],o=i[1],x=Object(c.useState)(),d=Object(l.a)(x,2),b=d[0],h=d[1];return Object(c.useEffect)(Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(function(){var e=Object(L.a)(A.a.mark((function e(){var n,c,r,a,i,s,j,x;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.getBlockNumber(),t.getGasPrice()]);case 2:for(n=e.sent,c=Object(l.a)(n,2),r=c[0],a=c[1],i=[],s=r-31;s<=r;s++)i.push(t.getBlock(s));return e.next=10,Promise.all(i);case 10:for((j=e.sent).sort((function(e,t){return t.number-e.number})),x=j.length-2;x>=0;x--)j[x].congestionLevel=ue(j[x+1].gasUsed);j.pop(),h(a),o(j);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();case 2:case"end":return e.stop()}}),e)}))),[t]),"undefined"===typeof s?Object(D.jsx)(D.Fragment,{}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(M.a,{container:!0,spacing:3,children:[Object(D.jsx)(M.a,{item:!0,xs:12,md:5,lg:4,children:Object(D.jsx)(E.a,{className:r,children:Object(D.jsx)(he,{blocks:s,gasPriceEstimate:b})})}),Object(D.jsx)(M.a,{item:!0,xs:12,md:7,lg:8,children:Object(D.jsx)(E.a,{className:r,children:Object(D.jsx)(be,{blocks:s})})})]}),Object(D.jsx)(M.a,{container:!0,spacing:3,children:Object(D.jsx)(M.a,{item:!0,xs:12,children:Object(D.jsxs)(E.a,{className:n.paper,children:[Object(D.jsx)(R,{children:"Recent Blocks"}),Object(D.jsxs)(V.a,{size:"medium",children:[Object(D.jsx)(X.a,{children:Object(D.jsxs)(Y.a,{children:[Object(D.jsx)(q.a,{children:"Number"}),Object(D.jsx)(q.a,{children:"Hash"}),Object(D.jsx)(q.a,{children:"Timestamp"}),Object(D.jsx)(q.a,{children:"Gas Used"}),Object(D.jsx)(q.a,{children:"Gas Limit"}),Object(D.jsx)(q.a,{children:"Num Txns"}),Object(D.jsx)(q.a,{align:"right",children:"Miner Address"})]})}),Object(D.jsx)(Z.a,{children:s&&s.map((function(e){return Object(D.jsxs)(Y.a,{children:[Object(D.jsx)(q.a,{children:Object(D.jsx)(N.a,{component:j.b,to:"/block/".concat(e.number),children:e.number})}),Object(D.jsx)(q.a,{children:$(e.hash)}),Object(D.jsx)(q.a,{children:new Date(1e3*e.timestamp).toISOString().split(".")[0]+"Z"}),Object(D.jsx)(q.a,{children:e.gasUsed.toNumber()}),Object(D.jsx)(q.a,{children:e.gasLimit.toNumber()}),Object(D.jsx)(q.a,{children:e.transactions.length}),Object(D.jsx)(q.a,{align:"right",children:Object(D.jsx)(N.a,{component:j.b,to:"/account/".concat(e.miner),children:$(e.miner)})})]},e.number)}))})]})]})})})]})}var fe=n(452),ye=n(498),ge=n(499),ve=n(263),we=n.n(ve),Se=Object(m.a)({});function ke(e){var t=e.icon,n=e.primary,c=e.to,a=(Se(e),r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return Object(D.jsx)(j.b,Object(d.a)({to:c,ref:t},e))}))}),[c]));return Object(D.jsx)("li",{children:Object(D.jsxs)(fe.a,{button:!0,component:a,children:[t?Object(D.jsx)(ye.a,{children:t}):null,Object(D.jsx)(ge.a,{primary:n})]})})}var Pe=Object(D.jsx)("div",{children:Object(D.jsx)(fe.a,{button:!0,children:Object(D.jsx)(ke,{to:"/",primary:"Dashboard",icon:Object(D.jsx)(we.a,{})})})}),Ce=n(514),Ne=n(264);function Fe(e){var t=e.transaction,n=e.block,c=Object(ne.a)(),r=t.effectiveGasPrice.mul(t.gasUsed),a=U.a.from(h.b.formatEther(r)).round(6)+" ETH",i=n.baseFeePerGas.mul(t.gasUsed),s=U.a.from(h.b.formatEther(i)).round(6)+" ETH",o=r.sub(i),j=U.a.from(h.b.formatEther(o)).round(6)+" ETH",l=U.a.from(h.b.formatUnits(t.effectiveGasPrice,"gwei")).round(3)+" gwei",x=i.mul(100).div(r).toNumber(),d=U.a.from(h.b.formatUnits(i,10)).round(0).toUnsafeFloat(),b=U.a.from(h.b.formatUnits(o,10)).round(0).toUnsafeFloat(),O=[{value:d,fill:c.palette.error.dark},{value:b,fill:c.palette.primary.dark}];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(R,{children:"Fee Info"}),Object(D.jsx)(ce.a,{height:100,children:Object(D.jsx)(Ce.a,{children:Object(D.jsx)(Ne.a,{dataKey:"value",isAnimationActive:!1,data:O,cx:"50%",cy:"50%",outerRadius:40,innerRadius:20,paddingAngle:7,stroke:c.palette.grey.A400})})}),Object(D.jsx)(p.a,{top:0,left:0,bottom:0,right:0,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",children:Object(D.jsx)(S.a,{variant:"caption",component:"div",color:"textSecondary",textalign:"center",gutterBottom:!0,children:"".concat(x,"% of total txn fee burned")})}),Object(D.jsx)("hr",{className:"MuiDivider-root",style:{margin:"10px 0px"}}),Object(D.jsxs)(M.a,{container:!0,spacing:0,pt:20,children:[Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Effective Gas Price"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:l})})]}),Object(D.jsx)("hr",{className:"MuiDivider-root",style:{margin:"10px 0px"}}),Object(D.jsxs)(M.a,{container:!0,spacing:0,pt:20,children:[Object(D.jsx)(M.a,{item:!0,xs:12,md:12,lg:12,style:{marginBottom:"5px"},children:Object(D.jsx)(S.a,{color:"primary",textalign:"center",children:"Fee Totals"})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Burned Fee"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:s})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Tip Fee"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:j})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Total Txn Fee"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:a})})]})]})}function Te(e){var t=e.transaction,n=e.block,c=Object(ne.a)(),r=t.gasLimit.toNumber(),a=t.gasUsed.toNumber(),i=t.gasUsed.mul(100).div(t.gasLimit).toNumber(),s=U.a.from(h.b.formatUnits(n.baseFeePerGas,"gwei")).round(3)+" gwei",o=2===t.type?U.a.from(h.b.formatUnits(t.maxPriorityFeePerGas,"gwei")).round(3)+" gwei":"N/A",j=2===t.type?U.a.from(h.b.formatUnits(t.maxFeePerGas,"gwei")).round(3)+" gwei":"N/A",l=[{value:a,fill:c.palette.primary.dark},{value:r,fill:c.palette.grey.A400}];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(R,{children:"Gas Info"}),Object(D.jsx)(ce.a,{height:100,children:Object(D.jsx)(Ce.a,{children:Object(D.jsx)(Ne.a,{dataKey:"value",isAnimationActive:!1,data:l,cx:"50%",cy:"50%",outerRadius:40,innerRadius:20,paddingAngle:7,stroke:c.palette.grey.A400})})}),Object(D.jsx)(p.a,{top:0,left:0,bottom:0,right:0,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",children:Object(D.jsx)(S.a,{variant:"caption",component:"div",color:"textSecondary",textalign:"center",gutterBottom:!0,children:"".concat(i,"% of gas limit used")})}),Object(D.jsx)("hr",{className:"MuiDivider-root",style:{margin:"10px 0px"}}),Object(D.jsxs)(M.a,{container:!0,spacing:0,pt:20,children:[Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Gas Limit"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:r})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Gas Used"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:a})})]}),Object(D.jsx)("hr",{className:"MuiDivider-root",style:{margin:"10px 0px"}}),Object(D.jsxs)(M.a,{container:!0,spacing:0,pt:20,children:[Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Base Fee (per Gas)"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:"textPrimary",children:s})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Max Tip Fee (per Gas)"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:2===t.type?"textPrimary":"textSecondary",children:o})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Max Fee (per Gas)"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{color:2===t.type?"textPrimary":"textSecondary",children:j})})]})]})}function We(e){var t=e.transaction;if("undefined"===typeof t)return Object(D.jsx)(D.Fragment,{});var n=Object(ne.a)(),c=U.a.from(h.b.formatEther(t.value)).round(6)+" ETH";return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(R,{children:"Transaction Details"}),Object(D.jsxs)(M.a,{container:!0,spacing:0,textoverflow:"ellipsis",style:{overflow:"hidden"},children:[Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Hash"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:$(t.hash)})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Txn Index"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:t.transactionIndex})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Txn Type"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:2===t.type?Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",style:{fontWeight:"bold"},children:t.type+" (EIP 1559)"}):Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:t.type+" (Legacy)"})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Block Number"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:Object(D.jsx)(N.a,{component:j.b,to:"/block/".concat(t.blockNumber),children:t.blockNumber})})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"From"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:Object(D.jsx)(N.a,{component:j.b,to:"/account/".concat(t.from),children:$(t.from)})})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"To"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:Object(D.jsx)(N.a,{component:j.b,to:"/account/".concat(t.to),children:$(t.to)})})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Contract Addr"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:t.contractAddress?"textPrimary":"textSecondary",children:t.contractAddress&&Object(D.jsx)(N.a,{component:j.b,to:"/account/".concat(t.contractAddress),children:$(t.contractAddress)})||"N/A"})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Value"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:c})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Nonce"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:t.nonce})}),Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Confirmations"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{noWrap:!0,color:"textPrimary",children:t.confirmations})})]}),Object(D.jsx)("hr",{className:"MuiDivider-root",style:{margin:"10px 0px"}}),Object(D.jsxs)(M.a,{container:!0,spacing:0,textoverflow:"ellipsis",style:{overflow:"hidden"},children:[Object(D.jsx)(M.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{color:"textSecondary",children:"Status"})}),Object(D.jsx)(M.a,{item:!0,xs:6,container:!0,justifyContent:"flex-end",children:Object(D.jsx)(S.a,{style:0===t.status?{color:n.palette.error.dark,fontWeight:"bold"}:1===t.status?{color:n.palette.success.dark,fontWeight:"bold"}:{},children:0===t.status?"Failure":1===t.status?"Success":t.status})})]})]})}var Be=Object(m.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:360}}}));function Ge(e){var t=e.provider,n=Object(b.f)().txnHash,r=Be(e),a=Object(O.a)(r.paper,r.fixedHeight),i=Object(c.useState)(void 0),s=Object(l.a)(i,2),o=s[0],j=s[1],x=Object(c.useState)(void 0),h=Object(l.a)(x,2),m=h[0],u=h[1];return Object(c.useEffect)(Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(function(){var e=Object(L.a)(A.a.mark((function e(){var c,r,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=[]).push(t.getTransaction(n)),c.push(t.getTransactionReceipt(n)),e.next=5,Promise.all(c);case 5:return r=e.sent,a=Object(d.a)(Object(d.a)({},r[0]),r[1]),u(a),e.t0=j,e.next=11,t.getBlock(a.blockNumber);case 11:e.t1=e.sent,(0,e.t0)(e.t1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();case 2:case"end":return e.stop()}}),e)}))),[t]),"undefined"===typeof m||"undefined"===typeof o?Object(D.jsx)(D.Fragment,{}):Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(M.a,{container:!0,spacing:3,children:[Object(D.jsx)(M.a,{item:!0,xs:4,md:4,lg:4,children:Object(D.jsx)(E.a,{className:a,children:Object(D.jsx)(We,{transaction:m,block:o})})}),Object(D.jsx)(M.a,{item:!0,xs:4,md:4,lg:4,children:Object(D.jsx)(E.a,{className:a,children:Object(D.jsx)(Te,{transaction:m,block:o})})}),Object(D.jsx)(M.a,{item:!0,xs:4,md:4,lg:4,children:Object(D.jsx)(E.a,{className:a,children:Object(D.jsx)(Fe,{transaction:m,block:o})})})]})})}var Ie=n(7),He=n(8),Ae=function(){function e(t){Object(Ie.a)(this,e),this.fwdMap={},this.revMap={},this.fwdMap=Object(d.a)({},t),this.revMap=Object.keys(t).reduce((function(e,n){return Object(d.a)(Object(d.a)({},e),{},Object(x.a)({},t[n],n))}),{})}return Object(He.a)(e,[{key:"get",value:function(e){return this.fwdMap[e]||this.revMap[e]}},{key:"entries",value:function(){Object.entries(this.fwdMap);return Object.entries(this.fwdMap)}}]),e}();function Le(){return Object(D.jsxs)(S.a,{variant:"body2",color:"textSecondary",align:"center",children:["by ",Object(D.jsxs)(N.a,{color:"inherit",href:"https://material-ui.com/",children:[Object(D.jsx)("strong",{children:Object(D.jsx)("em",{children:"jrhite"})})," ","with \u2764\ufe0f for Chainshot BlockExplorer project"]})," ",(new Date).getFullYear(),"."]})}var Me=Object(m.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(x.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:350}}})),Ee=new Ae({1:"Mainnet",3:"Ropsten",4:"Rinkeby",5:"Goerli",42:"Kovan"});function Ue(e){var t=Me(),n=Object(c.useState)(!0),a=Object(l.a)(n,2),i=a[0],o=a[1],j=r.a.useState(null),x=Object(l.a)(j,2),d=x[0],m=x[1],N=Object(c.useState)(new h.a.InfuraProvider("homestead","cd3ebd4d553a4439a21552ba27fc7362")),F=Object(l.a)(N,2),W=F[0],G=F[1],H=Object(c.useState)("Mainnet"),A=Object(l.a)(H,2),L=A[0],M=A[1],E=function(){m(null)},U=function(e){var t=e.target.innerText;M(t),"Mainnet"===t&&(t="homestead"),G(new h.a.InfuraProvider(t.toLowerCase(),"cd3ebd4d553a4439a21552ba27fc7362")),E()};return Object(D.jsxs)("div",{className:t.root,children:[Object(D.jsx)(s.a,{}),Object(D.jsx)(f.a,{position:"absolute",className:Object(O.a)(t.appBar,i&&t.appBarShift),children:Object(D.jsxs)(y.a,{className:t.toolbar,children:[Object(D.jsx)(P.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(O.a)(t.menuButton,i&&t.menuButtonHidden),children:Object(D.jsx)(T.a,{})}),Object(D.jsx)(S.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:L}),Object(D.jsx)(P.a,{"aria-controls":"settings-menu","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit",children:Object(D.jsx)(I.a,{})}),Object(D.jsx)(v.a,{id:"settings-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:E,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Ee.entries().map((function(e){var t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(D.jsx)(w.a,{onClick:U,children:c},n)}))})]})}),Object(D.jsxs)(u.a,{variant:"permanent",classes:{paper:Object(O.a)(t.drawerPaper,!i&&t.drawerPaperClose)},open:i,children:[Object(D.jsx)("div",{className:t.toolbarIcon,children:Object(D.jsx)(P.a,{onClick:function(){o(!1)},children:Object(D.jsx)(B.a,{})})}),Object(D.jsx)(k.a,{}),Object(D.jsx)(g.a,{children:Pe})]}),Object(D.jsxs)("main",{className:t.content,children:[Object(D.jsx)("div",{className:t.appBarSpacer}),Object(D.jsxs)(C.a,{maxWidth:"lg",className:t.container,children:[Object(D.jsxs)(b.c,{children:[Object(D.jsx)(b.a,{exact:!0,path:"/account/:accountAddr",children:Object(D.jsx)(J,{provider:W})}),Object(D.jsx)(b.a,{exact:!0,path:"/block/:blockNumber",children:Object(D.jsx)(te,{provider:W})}),Object(D.jsx)(b.a,{exact:!0,path:"/transaction/:txnHash",children:Object(D.jsx)(Ge,{provider:W})}),Object(D.jsx)(b.a,{exact:!0,path:"/",children:Object(D.jsx)(pe,{provider:W})})]}),Object(D.jsx)(p.a,{pt:4,children:Object(D.jsx)(Le,{})})]})]})]})}function De(){return Object(D.jsx)(j.a,{basename:"/blockexplorer",children:Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(Ue,{})})})}var Re=n(271),ze=n.n(Re),Ke=n(272),Je=Object(Ke.a)({palette:{type:"dark",primary:{main:"#90caf9"},secondary:{main:"#f48fb1"},error:{main:ze.a.A400}}});i.a.render(Object(D.jsxs)(o.a,{theme:Je,children:[Object(D.jsx)(s.a,{}),Object(D.jsx)(De,{})]}),document.querySelector("#root"))}},[[448,1,2]]]);
//# sourceMappingURL=main.b01998fc.chunk.js.map
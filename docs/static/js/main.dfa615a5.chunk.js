(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{14:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var r=e(3),a=e(0),u=e(1),c=e.n(u),i=e(7),o=e.n(i),l=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,u=n.getLCP,c=n.getTTFB;e(t),r(t),a(t),u(t),c(t)}))},s=e(8),f=e(5),h=c.a.memo((function(t){var n=t.x,e=t.y,r=t.state,u=t.handler;return Object(a.jsx)("input",{type:"button",className:r?"alive":"dead",onClick:function(){return u(n,e)}})})),d=c.a.memo((function(t){var n=t.y,e=t.states,r=t.handler;return Object(a.jsx)("div",{className:"row",children:e.map((function(t,e){return Object(a.jsx)(h,{x:e,y:n,state:t,handler:r},e)}))})})),j=[["\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1"],["\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1","\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a0","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1"],["\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a0\u25a1\u25a1\u25a1\u25a0\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a0\u25a0\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1","\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1\u25a1"]],b=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];function v(t,n){return t<0?n-1:t>=n?0:t}function p(t,n,e,r){var a=t[e][n],u=b.map((function(a){var u=n+a[0],c=e+a[1];return"dead"===r?function(t,n,e){return e<0||e>=t.length||n<0||n>=t[e].length?0:t[e][n]?1:0}(t,u,c):function(t,n,e){var r=v(e,t.length),a=v(n,t[r].length);return t[r][a]?1:0}(t,u,c)})).reduce((function(t,n){return t+n}));return 3===u||!(2!==u||!a)}function m(t,n){return t.map((function(t,e){if(e>=n.length)return t.map((function(t){return!1}));var r=n[e];if(t.length>r.length){for(var a=Object(f.a)(r),u=a.length;u<t.length;++u)a.push(!1);return a}return t.filter((function(t,n){return n<r.length&&t!==r[n]}))?r:t}))}function g(t,n,e){for(var r=[],a=0;a<n;++a){for(var u=[],c=0;c<t;++c)u.push(Math.random()<=e);r.push(u)}return r}function O(t){var n=t.width,e=t.height,u=t.rate,i=c.a.useState(!0),o=Object(r.a)(i,2),l=o[0],h=o[1],b=c.a.useState("dead"),v=Object(r.a)(b,2),O=v[0],x=v[1],y=c.a.useState(g(n,e,u)),C=Object(r.a)(y,2),k=C[0],w=C[1];c.a.useEffect((function(){if(!l){var t=setInterval((function(){w((function(t){var n=function(t,n){return t.map((function(e,r){return e.map((function(e,a){return p(t,a,r,n)}))}))}(t,O);return m(t,n)}))}),10);return function(){return clearInterval(t)}}}),[k,l,O]);var S=c.a.useCallback((function(t,n){w((function(e){var r=Object(f.a)(e),a=Object(f.a)(r[n]);return a[t]=!a[t],r[n]=a,r}))}),[]),F=c.a.useCallback((function(){h((function(t){return!t}))}),[]),I=c.a.useCallback((function(t){w((function(n){var e,r=[],a=Object(s.a)(t);try{for(a.s();!(e=a.n()).done;){for(var u=e.value,c=[],i=0;i<u.length;++i){var o=i<u.length&&"\u25a0"===u.charAt(i);c.push(o)}r.push(c)}}catch(l){a.e(l)}finally{a.f()}return m(n,r)}))}),[]),N=c.a.useCallback((function(t){w(g(n,e,t))}),[n,e]),B=c.a.useCallback((function(){x((function(t){return"dead"===t?"periodic":"dead"}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[k.map((function(t,n){return Object(a.jsx)(d,{states:t,y:n,handler:S},n)})),Object(a.jsxs)("div",{children:[j.map((function(t,n){return Object(a.jsx)("input",{className:"ctrl",type:"button",value:"Glider Gun ".concat(n+1),onClick:function(){return I(t)}})})),Object(a.jsx)("input",{className:"ctrl",type:"button",value:"Random",onClick:function(){return N(u)}})]}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:"ctrl",type:"button",value:"Boundary: ".concat(O),onClick:B})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:"ctrl",type:"button",value:l?"Start":"Stop",onClick:F})})]})}e(14);var x,y,C,k=window.location.search.slice(1).split("&").reduce((function(t,n){var e=n.split("="),a=Object(r.a)(e,2),u=a[0],c=a[1];return t[u]=c,t}),{}),w=parseInt(null!==(x=k.width)&&void 0!==x?x:"100"),S=parseInt(null!==(y=k.height)&&void 0!==y?y:"100"),F=parseFloat(null!==(C=k.rate)&&void 0!==C?C:"0.1");o.a.render(Object(a.jsxs)(c.a.StrictMode,{children:[Object(a.jsx)("h1",{children:"Game of Life"}),Object(a.jsx)(O,{width:w,height:S,rate:F})]}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.dfa615a5.chunk.js.map
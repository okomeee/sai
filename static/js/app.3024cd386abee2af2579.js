webpackJsonp([1],{111:function(e,t,n){"use strict";t.a={name:"app"}},112:function(e,t,n){"use strict";var i=n(85),s=n(243),o=n(244),a=n(247);i.a.use(s.a),t.a=new s.a({routes:[{path:"/",component:o.a},{path:"/result",component:a.a}]})},113:function(e,t,n){"use strict";var i=n(114);t.a={name:"Home",data:function(){var e=new i.i,t=new i.j({alpha:!0});t.setPixelRatio(window.devicePixelRatio),t.setClearColor(0,0),t.setSize(300,300);var n=new i.h(45,1,1,100);n.position.set(0,0,30);var s=new i.c(4294967295,3);s.position.set(10,5,20);var o=new i.a(10,10,10),a=new i.g({color:15658734}),r=new i.e(o,a),h=new i.d,c=new i.e(new i.b(1,30,30),new i.f({color:16711680}));c.rotation.y=Math.PI,c.position.set(0,0,-5.001);var d=new i.e(new i.b(1,30,30),new i.f({color:0}));d.rotation.y=3*Math.PI/2,d.position.set(-5.001,2.5,2.5);var w=new i.e(new i.b(1,30,30),new i.f({color:0}));w.rotation.y=3*Math.PI/2,w.position.set(-5.001,-2.5,-2.5);var p=new i.e(new i.b(1,30,30),new i.f({color:0}));p.rotation.x=Math.PI/2,p.position.set(0,-5.001,0);var l=new i.e(new i.b(1,30,30),new i.f({color:0}));l.rotation.x=Math.PI/2,l.position.set(2.5,-5.001,-2.5);var u=new i.e(new i.b(1,30,30),new i.f({color:0}));u.rotation.x=Math.PI/2,u.position.set(-2.5,-5.001,2.5);var b=new i.e(new i.b(1,30,30),new i.f({color:0}));b.rotation.x=3*Math.PI/2,b.position.set(2.5,5.001,2.5);var f=new i.e(new i.b(1,30,30),new i.f({color:0}));f.rotation.x=3*Math.PI/2,f.position.set(2.5,5.001,-2.5);var v=new i.e(new i.b(1,30,30),new i.f({color:0}));v.rotation.x=3*Math.PI/2,v.position.set(-2.5,5.001,2.5);var I=new i.e(new i.b(1,30,30),new i.f({color:0}));I.rotation.x=3*Math.PI/2,I.position.set(-2.5,5.001,-2.5);var m=new i.e(new i.b(1,30,30),new i.f({color:0}));m.rotation.y=Math.PI/2,m.position.set(5.001,0,0);var P=new i.e(new i.b(1,30,30),new i.f({color:0}));P.rotation.y=Math.PI/2,P.position.set(5.001,2.5,2.5);var y=new i.e(new i.b(1,30,30),new i.f({color:0}));y.rotation.y=Math.PI/2,y.position.set(5.001,-2.5,2.5);var g=new i.e(new i.b(1,30,30),new i.f({color:0}));g.rotation.y=Math.PI/2,g.position.set(5.001,-2.5,-2.5);var j=new i.e(new i.b(1,30,30),new i.f({color:0}));j.rotation.y=Math.PI/2,j.position.set(5.001,2.5,-2.5);var R=new i.e(new i.b(1,30,30),new i.f({color:0}));R.position.set(2.5,2.5,5.001);var x=new i.e(new i.b(1,30,30),new i.f({color:0}));x.position.set(2.5,0,5.001);var C=new i.e(new i.b(1,30,30),new i.f({color:0}));C.position.set(2.5,-2.5,5.001);var k=new i.e(new i.b(1,30,30),new i.f({color:0}));k.position.set(-2.5,-2.5,5.001);var M=new i.e(new i.b(1,30,30),new i.f({color:0}));M.position.set(-2.5,0,5.001);var z=new i.e(new i.b(1,30,30),new i.f({color:0}));return z.position.set(-2.5,2.5,5.001),{msg:"Shake the dice",x:0,y:0,z:0,point:"",scene:e,renderer:t,camera:n,light:s,obj:h,cube:r,sphere1:c,sphere21:d,sphere22:w,sphere31:p,sphere32:l,sphere33:u,sphere41:b,sphere42:f,sphere43:v,sphere44:I,sphere51:m,sphere52:P,sphere53:y,sphere54:g,sphere55:j,sphere61:R,sphere62:x,sphere63:C,sphere64:k,sphere65:M,sphere66:z}},created:function(){this.scene.add(this.camera),this.scene.add(this.light),this.obj.add(this.cube),this.obj.add(this.sphere1),this.obj.add(this.sphere21),this.obj.add(this.sphere22),this.obj.add(this.sphere31),this.obj.add(this.sphere32),this.obj.add(this.sphere33),this.obj.add(this.sphere41),this.obj.add(this.sphere42),this.obj.add(this.sphere43),this.obj.add(this.sphere44),this.obj.add(this.sphere51),this.obj.add(this.sphere52),this.obj.add(this.sphere53),this.obj.add(this.sphere54),this.obj.add(this.sphere55),this.obj.add(this.sphere61),this.obj.add(this.sphere62),this.obj.add(this.sphere63),this.obj.add(this.sphere64),this.obj.add(this.sphere65),this.obj.add(this.sphere66),this.scene.add(this.obj)},mounted:function(){this.$refs.vue.appendChild(this.renderer.domElement)},methods:{init:function(){window.addEventListener("devicemotion",this.devicemotionHandler),this.ua=window.navigator.userAgent},devicemotionHandler:function(e){(e.acceleration.x>5||e.acceleration.y>5||e.acceleration.z>5)&&(this.x=e.acceleration.x,this.y=e.acceleration.y,this.z=e.acceleration.z),(this.ua.indexOf("iPhone")>0||this.ua.indexOf("iPad")>0||this.ua.indexOf("iPod")>0)&&(this.x*=-1,this.y*=-1,this.z*=-1)},animate:function(){this.point=requestAnimationFrame(this.animate),this.obj.rotation.x+=Math.random()*this.x*this.z,this.obj.rotation.y+=Math.random()*this.y*this.x,this.renderer.render(this.scene,this.camera)},doOn:function(){var e=this;this.init(),this.animate(),setTimeout(function(){cancelAnimationFrame(e.point)},3e3)}}}},115:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},116:function(e,t,n){"use strict";var i=n(114),s=n(112);t.a={name:"Home",data:function(){var e=new i.i,t=new i.j;t.setPixelRatio(window.devicePixelRatio),t.setSize(500,500);var n=new i.h(90,1,1,100);n.position.set(0,0,20);var s=new i.c(4294967295);s.position.set(0,0,20);var o=new i.a(10,10,10),a=new i.g({color:15658734}),r=new i.e(o,a),h=new i.d,c=new i.e(new i.b(1,30,30),new i.f({color:16711680}));c.rotation.y=Math.PI,c.position.set(0,0,-5.001);var d=new i.e(new i.b(1,30,30),new i.f({color:0}));d.rotation.y=3*Math.PI/2,d.position.set(-5,2.5,2.5);var w=new i.e(new i.b(1,30,30),new i.f({color:0}));w.rotation.y=3*Math.PI/2,w.position.set(-5.001,-2.5,-2.5);var p=new i.e(new i.b(1,30,30),new i.f({color:0}));p.rotation.x=Math.PI/2,p.position.set(0,-5.001,0);var l=new i.e(new i.b(1,30,30),new i.f({color:0}));l.rotation.x=Math.PI/2,l.position.set(2.5,-5.001,-2.5);var u=new i.e(new i.b(1,30,30),new i.f({color:0}));u.rotation.x=Math.PI/2,u.position.set(-2.5,-5.001,2.5);var b=new i.e(new i.b(1,30,30),new i.f({color:0}));b.rotation.x=3*Math.PI/2,b.position.set(2.5,5.001,2.5);var f=new i.e(new i.b(1,30,30),new i.f({color:0}));f.rotation.x=3*Math.PI/2,f.position.set(2.5,5.001,-2.5);var v=new i.e(new i.b(1,30,30),new i.f({color:0}));v.rotation.x=3*Math.PI/2,v.position.set(-2.5,5.001,2.5);var I=new i.e(new i.b(1,30,30),new i.f({color:0}));I.rotation.x=3*Math.PI/2,I.position.set(-2.5,5.001,-2.5);var m=new i.e(new i.b(1,30,30),new i.f({color:0}));m.rotation.y=Math.PI/2,m.position.set(5.001,0,0);var P=new i.e(new i.b(1,30,30),new i.f({color:0}));P.rotation.y=Math.PI/2,P.position.set(5.001,2.5,2.5);var y=new i.e(new i.b(1,30,30),new i.f({color:0}));y.rotation.y=Math.PI/2,y.position.set(5.001,-2.5,2.5);var g=new i.e(new i.b(1,30,30),new i.f({color:0}));g.rotation.y=Math.PI/2,g.position.set(5.001,-2.5,-2.5);var j=new i.e(new i.b(1,30,30),new i.f({color:0}));j.rotation.y=Math.PI/2,j.position.set(5.001,2.5,-2.5);var R=new i.e(new i.b(1,30,30),new i.f({color:0}));R.position.set(2.5,2.5,5.001);var x=new i.e(new i.b(1,30,30),new i.f({color:0}));x.position.set(2.5,0,5.001);var C=new i.e(new i.b(1,30,30),new i.f({color:0}));C.position.set(2.5,-2.5,5.001);var k=new i.e(new i.b(1,30,30),new i.f({color:0}));k.position.set(-2.5,-2.5,5.001);var M=new i.e(new i.b(1,30,30),new i.f({color:0}));M.position.set(-2.5,0,5.001);var z=new i.e(new i.b(1,30,30),new i.f({color:0}));return z.position.set(-2.5,2.5,5.001),{msg:"Shake the dice",flag:"ON",isDraw:!1,point:"",scene:e,renderer:t,camera:n,light:s,obj:h,cube:r,sphere1:c,sphere21:d,sphere22:w,sphere31:p,sphere32:l,sphere33:u,sphere41:b,sphere42:f,sphere43:v,sphere44:I,sphere51:m,sphere52:P,sphere53:y,sphere54:g,sphere55:j,sphere61:R,sphere62:x,sphere63:C,sphere64:k,sphere65:M,sphere66:z}},created:function(){this.scene.add(this.camera),this.scene.add(this.light),this.obj.add(this.cube),this.obj.add(this.sphere1),this.obj.add(this.sphere21),this.obj.add(this.sphere22),this.obj.add(this.sphere31),this.obj.add(this.sphere32),this.obj.add(this.sphere33),this.obj.add(this.sphere41),this.obj.add(this.sphere42),this.obj.add(this.sphere43),this.obj.add(this.sphere44),this.obj.add(this.sphere51),this.obj.add(this.sphere52),this.obj.add(this.sphere53),this.obj.add(this.sphere54),this.obj.add(this.sphere55),this.obj.add(this.sphere61),this.obj.add(this.sphere62),this.obj.add(this.sphere63),this.obj.add(this.sphere64),this.obj.add(this.sphere65),this.obj.add(this.sphere66),this.scene.add(this.obj),this.obj.rotation.x+=1*Math.PI/8,this.renderer.render(this.scene,this.camera)},mounted:function(){this.$refs.vue.appendChild(this.renderer.domElement)},methods:{animate:function(e){e?(this.point=requestAnimationFrame(this.animate),this.obj.rotation.x+=.05,this.obj.rotation.z+=.05,this.renderer.render(this.scene,this.camera)):cancelAnimationFrame(this.point)},doOn:function(){this.isDraw=!this.isDraw,this.isDraw?(this.flag="OFF",this.animate(this.isDraw),setTimeout(function(){s.a.push("/")},3e3)):(this.flag="ON",this.animate(this.isDraw))}}}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(118),s=n.n(i),o=n(124),a=(n.n(o),n(126)),r=(n.n(a),n(127)),h=(n.n(r),n(85)),c=n(130),d=n(176),w=n(240),p=n(112);h.a.config.productionTip=!1,h.a.use(c.a),s()(d).forEach(function(e){return h.a.component(e.name,e)}),new h.a({el:"#app",router:p.a,template:"<App/>",components:{App:w.a}})},124:function(e,t){},126:function(e,t){},127:function(e,t){},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(177);n.d(t,"VOnsCard",function(){return i.a});var s=n(197);n.d(t,"VOnsCol",function(){return s.a});var o=n(199);n.d(t,"VOnsIcon",function(){return o.a});var a=n(201);n.d(t,"VOnsList",function(){return a.a});var r=n(203);n.d(t,"VOnsListHeader",function(){return r.a});var h=n(205);n.d(t,"VOnsListItem",function(){return h.a});var c=n(207);n.d(t,"VOnsListTitle",function(){return c.a});var d=n(209);n.d(t,"VOnsPage",function(){return d.a});var w=n(220);n.d(t,"VOnsRow",function(){return w.a});var p=n(222);n.d(t,"VOnsSplitter",function(){return p.a});var l=n(230);n.d(t,"VOnsSplitterContent",function(){return l.a});var u=n(232);n.d(t,"VOnsSplitterMask",function(){return u.a});var b=n(234);n.d(t,"VOnsSplitterSide",function(){return b.a});var f=n(237);n.d(t,"VOnsToolbar",function(){return f.a});var v=n(238);n.d(t,"VOnsToolbarButton",function(){return v.a})},240:function(e,t,n){"use strict";function i(e){n(241)}var s=n(111),o=n(242),a=n(82),r=i,h=a(s.a,o.a,!1,r,null,null);t.a=h.exports},241:function(e,t){},242:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("router-view")},s=[],o={render:i,staticRenderFns:s};t.a=o},244:function(e,t,n){"use strict";function i(e){n(245)}var s=n(113),o=n(246),a=n(82),r=i,h=a(s.a,o.a,!1,r,"data-v-2c66f7d4",null);t.a=h.exports},245:function(e,t){},246:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-ons-page",[i("v-ons-toolbar",{staticClass:"home-toolbar"},[i("div",{staticClass:"center"},[e._v(e._s(e.msg))])]),e._v(" "),i("div",{staticClass:"header"},[i("img",{attrs:{src:n(115),alt:"vue-logo"}})]),e._v(" "),i("div",{staticStyle:{"text-align":"center",margin:"5% 0"}},[i("button",{on:{click:function(t){e.doOn()}}},[i("p",{staticStyle:{margin:"0","font-size":"20px"}},[e._v("サイコロをふる")])])]),e._v(" "),i("div",{staticStyle:{"text-align":"center",margin:"5% 0"}},[i("div",{ref:"vue",staticClass:"ani"})])],1)},s=[],o={render:i,staticRenderFns:s};t.a=o},247:function(e,t,n){"use strict";function i(e){n(248)}var s=n(116),o=n(249),a=n(82),r=i,h=a(s.a,o.a,!1,r,"data-v-f8b92b4e",null);t.a=h.exports},248:function(e,t){},249:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-ons-page",[i("v-ons-toolbar",{staticClass:"home-toolbar"},[i("div",{staticClass:"center"},[e._v(e._s(e.msg))])]),e._v(" "),i("div",{staticClass:"header"},[i("img",{attrs:{src:n(115),alt:"vue-logo"}})]),e._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("button",[i("p",{staticStyle:{margin:"0","font-size":"20px"}},[e._v(e._s(e.flag))])])]),e._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],ref:"vue",staticClass:"ani"})])],1)},s=[],o={render:i,staticRenderFns:s};t.a=o}},[117]);
//# sourceMappingURL=app.3024cd386abee2af2579.js.map
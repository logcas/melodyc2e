(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/logcas/melodyc2e/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("d81d"),n("c3a6");var r=n("ad06"),i=(n("c194"),n("7744")),a=(n("2994"),n("2bdd")),s=(n("bda7"),n("5e46")),o=(n("da3c"),n("0b33")),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("van-tabs",{attrs:{type:"card",swipeable:"",animated:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tab",{attrs:{title:"全部"}},[n("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.list,(function(t,r){return n("van-cell",{key:t._id,attrs:{"is-link":""},on:{click:function(n){return e.onChangeSong(t,r,"all")}}},[n("div",{staticClass:"like",on:{click:function(n){return e.onLike(t,n)}}},[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:e.isMyLike(t),expression:"isMyLike(item)"}],attrs:{name:"star"}}),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:!e.isMyLike(t),expression:"!isMyLike(item)"}],attrs:{name:"star-o"}})],1),n("div",{staticClass:"cell-content",class:{playing:r===e.currentIndex&&"all"===e.currentType}},[n("span",{directives:[{name:"show",rawName:"v-show",value:r!==e.currentIndex,expression:"index !== currentIndex"}],staticClass:"seq"},[e._v(e._s(r+1))]),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:r===e.currentIndex,expression:"index === currentIndex"}],staticStyle:{"margin-right":"5px"},attrs:{name:"play-circle-o"}}),e._v(" "+e._s(t.name)+" ")],1)])})),1)],1),n("van-tab",{attrs:{title:"我喜欢"}},e._l(e.likeList,(function(t,r){return n("van-cell",{key:t._id,attrs:{"is-link":""},on:{click:function(n){return e.onChangeSong(t,r,"like")}}},[n("div",{staticClass:"like",on:{click:function(n){return e.onLike(t,n)}}},[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:e.isMyLike(t),expression:"isMyLike(item)"}],attrs:{name:"star"}}),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:!e.isMyLike(t),expression:"!isMyLike(item)"}],attrs:{name:"star-o"}})],1),n("div",{staticClass:"cell-content",class:{playing:r===e.currentIndex&&"like"===e.currentType}},[n("span",{directives:[{name:"show",rawName:"v-show",value:r!==e.currentIndex,expression:"index !== currentIndex"}],staticClass:"seq"},[e._v(e._s(r+1))]),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:r===e.currentIndex,expression:"index === currentIndex"}],staticStyle:{"margin-right":"5px"},attrs:{name:"play-circle-o"}}),e._v(" "+e._s(t.name)+" ")],1)])})),1)],1),n("div",{staticClass:"player"},[n("audio",{ref:"player",staticStyle:{display:"none"},attrs:{type:"audio/mpeg"}}),n("div",{staticClass:"player-current"},[e._v(" "+e._s(e.loadingSource?"Loading...":e.currentSongName)+" ")]),n("div",{staticClass:"player-feat"},[n("div",{staticClass:"button second-button",on:{click:e.lastSong}},[n("van-icon",{attrs:{name:"arrow-left"}})],1),n("div",{staticClass:"button main-button"},[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:!e.playing,expression:"!playing"}],attrs:{name:"play-circle-o"},on:{click:e.onPlay}}),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:e.playing,expression:"playing"}],attrs:{name:"pause-circle-o"},on:{click:e.onPause}})],1),n("div",{staticClass:"button second-button",on:{click:e.nextSong}},[n("van-icon",{attrs:{name:"arrow"}})],1)]),n("div",{staticClass:"player-progress",style:{width:e.progress+"%"}})])],1)},u=[],d=(n("a434"),n("b0c0"),n("d3b7"),n("5530")),p=n("2909"),h=(n("99af"),n("caad"),n("4ec9"),n("2532"),n("3ca3"),n("ddb0"),n("d4ec")),f=n("bee2"),g={ALL:"all",LIKE:"like"},v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(h["a"])(this,e),this.currentType=g.ALL,this.listTypes=[g.ALL,g.LIKE].concat(Object(p["a"])(t)),this.lists=new Map,this.currentIndex=0}return Object(f["a"])(e,[{key:"_getOrDefault",value:function(e,t){return this.lists.has(e)||this.lists.set(e,t),this.lists.get(e)}},{key:"_getCurrentList",value:function(){return this.lists.get(this.currentType)}},{key:"addList",value:function(e,t){this.lists.set(e,t)}},{key:"getList",value:function(e){return this._getOrDefault(e,[])}},{key:"setCurrentSong",value:function(e,t){return t=t||this.currentType,this.currentIndex=e,this.setType(t,e),this.getCurrentSong()}},{key:"getCurrentSong",value:function(){var e=this._getCurrentList();return e[this.currentIndex]}},{key:"setType",value:function(e){if(!this.listTypes.includes(e))throw new Error("Invalid List Type");this.currentType=e}},{key:"nextSong",value:function(){var e=this._getCurrentList(),t=e.length,n=this.currentIndex+1;return n=n<t?n:0,this.currentIndex=n,e[n]}},{key:"lastSong",value:function(){var e=this._getCurrentList(),t=e.length,n=this.currentIndex-1;return n=n>=0?n:t-1,this.currentIndex=n,e[n]}},{key:"getIndex",value:function(){return this.currentIndex}},{key:"storeInLocal",value:function(e){var t=this._getOrDefault(e,[]);localStorage.setItem(e,JSON.stringify(t))}},{key:"getFromLocal",value:function(e){try{var t=JSON.parse(localStorage.getItem(e));return t||[]}catch(n){return console.error(n),[]}}}]),e}(),y=new v,m={name:"App",data:function(){return{active:"2",list:[],loading:!1,finished:!1,page:0,q:"",currentIndex:-1,playing:!1,currentSongName:"选一首吧！",currentSongUrl:"",currentType:g.ALL,likeList:[],progress:0,progressTimer:null,loadingSource:!1}},watch:{currentSongUrl:function(e){var t=this.$refs.player;t.src=e,this.onReplay()},playing:function(e){e?this.progressTimer=setInterval(this.onPlayingProgress.bind(this),1e3):clearInterval(this.progressTimer)}},methods:{onPlayingProgress:function(){var e=this.$refs.player.duration,t=this.$refs.player.currentTime;this.progress=t/e*100,console.log(this.progress)},isMyLike:function(e){for(var t=e._id,n=-1,r=0;r<this.likeList.length;++r)if(this.likeList[r]._id===t){n=r;break}return-1!==n},onReplay:function(){this.$refs.player.pause(),this.$refs.player.play(),this.playing=!0},onPause:function(){this.$refs.player.pause(),this.playing=!1},onPlay:function(){this.$refs.player.play(),this.playing=!0},onLike:function(e,t){for(var n=-1,r=0;r<this.likeList.length;++r)if(this.likeList[r]._id===e._id){n=r;break}-1===n?this.likeList.push(e):this.likeList.splice(n,1),y.addList(g.LIKE,this.likeList),y.storeInLocal(g.LIKE),t.stopPropagation()},onChangeSong:function(e,t,n){console.log("change song");var r=y.setCurrentSong(t,n);console.log(r),this.currentSongName=r.name,this.currentSongUrl=r.url,this.currentIndex=t,this.currentType=n},onLoad:function(){var e=this;this.$api.getMelodies(this.page,this.q).then((function(t){var n;console.log(t),(n=e.list).push.apply(n,Object(p["a"])(t.list.map((function(e){return Object(d["a"])({},e,{name:decodeURIComponent(e.name)})})))),e.page++,e.finished=!t.has_more,y.addList(g.ALL,e.list)})).catch((function(){e.finished=!0})).finally((function(){e.loading=!1}))},nextSong:function(){var e=y.nextSong(),t=y.getIndex();console.log("next:",e),e&&(this.currentIndex=t,this.currentSongName=e.name,this.currentSongUrl=e.url)},lastSong:function(){var e=y.lastSong(),t=y.getIndex();console.log("next:",e),e&&(this.currentIndex=t,this.currentSongName=e.name,this.currentSongUrl=e.url)}},created:function(){y.addList(g.ALL,this.list),this.likeList=y.getFromLocal(g.LIKE),y.addList(g.LIKE,this.likeList)},mounted:function(){var e=this,t=this.$refs.player;t.onended=function(){console.log("onend"),e.nextSong()},t.onloadstart=function(){console.log("loadStart"),e.loadingSource=!0},t.onerror=function(){console.log("error"),e.$toast.fail("连接失败，请检查网络")},t.oncanplay=function(){console.log("can play"),e.loadingSource=!1}}},L=m,k=(n("034f"),n("5c64"),n("2877")),x=Object(k["a"])(L,l,u,!1,null,null,null),b=x.exports,w=(n("5cfb"),n("e7e5"),n("d399")),S=n("bc3a"),I=n.n(S),_={development:"http://localhost:3002",production:"http://chameleon.logcas.name"},C=I.a.create({baseURL:_["production"],timeout:1e4});C.interceptors.response.use((function(e){return e.data.data}),(function(e){return e.response?w["a"].fail("服务器开小差啦，请稍后再试"):w["a"].fail("请检查网络"),e}));var O=C,T={getMelodies:function(e,t){return O.get("/melody",{params:{page:e,q:t}})}},N=n("fe3c"),j=n.n(N);j.a.attach(document.body),c["a"].config.productionTip=!1,c["a"].prototype.$api=T;var M=[o["a"],s["a"],a["a"],i["a"],r["a"]];M.map((function(e){return c["a"].use(e)})),new c["a"]({render:function(e){return e(b)}}).$mount("#app")},"5c64":function(e,t,n){"use strict";var r=n("d32a"),i=n.n(r);i.a},"85ec":function(e,t,n){},d32a:function(e,t,n){}});
//# sourceMappingURL=app.4a7e7bd6.js.map
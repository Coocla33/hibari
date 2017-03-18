webpackJsonp([1,2],[,,,,,,,,,,function(t,e,s){s(215);var a=s(1)(s(181),s(246),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";e.a={lang:"English",hibari:"Hibari",strapline:"Stats for Kitsu",notice:{id:"3",content:"This version is very early alpha and is prone to bugs and lack of content"},navigation:{home:"Home",bugs:"Bugs"},home:{user:{head:"User",body:"Search for {username} on Kitsu",placeholder:"enter a username...",action:"Lookup"},anime:{head:"Anime",body:"Search for {anime}",placeholder:"enter an anime...",action:"Lookup"},manga:{head:"Manga",body:"Search for {manga}",placeholder:"enter a manga...",action:"Lookup"}},user:{kitsuProfile:"View on Kitsu",navigation:{profile:"Profile",library:"Library"},sociability:{title:"Sociability",postsCount:"Posts",commentsCount:"Comments",likesGivenCount:"Likes Given",likesReceivedCount:"Likes Received",followingCount:"Followed",followersCount:"Followers"},about:{title:"About"}},bugs:{title:"Bugs",body:"Please create a <a href='//github.com/wopian/hibari/issues/new'>GitHub Issue</a> for any bugs you encounter.",requirements:"The following information is required to aid replication and fixing:",include:{version:"Version:",os:"Operating System:",browser:"Browser:",browserVer:"Browser Version:",replicate:"Steps to replicate:"}},loader:{collectingData:"Collecting Data"}}},function(t,e,s){"use strict";e.a={lang:"日本語",hibari:"ヒバリ",navigation:{home:"ホーム"},home:{user:{head:"ユーザー",body:"Psst, help translate this project",action:"サーチ"},anime:{head:"アニメ"},manga:{head:"マンガ"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(230),n=s.n(a);n.a.install({onUpdateReady:function(){console.log("Updating Web App"),n.a.applyUpdate()},onUpdated:function(){console.log("Updated Web App"),location.reload()}})},function(t,e,s){"use strict";var a=s(4),n=s(261),i=s(260),r=s.n(i),o=s(259),u=s.n(o),l=s(236),c=s.n(l),f=s(238),d=s.n(f),p=s(244),m=s.n(p),v=s(243),h=s.n(v),g=s(234),_=s.n(g),b=s(237),j=s.n(b),y=s(235),k=s.n(y),$=s(233),C=s.n($);a.a.use(n.a),a.a.use(r.a),a.a.use(u.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:c.a},{path:"/@:slug",component:d.a,children:[{path:"",name:"Profile",component:m.a},{path:"library",name:"Library",component:h.a,children:[{path:":status",component:h.a}]}]},{path:"/anime/:query",component:_.a},{path:"/manga/:query",component:j.a},{path:"/bugs",name:"Bugs",component:k.a},{path:"*",component:C.a}]})},function(t,e,s){"use strict";var a=s(4),n=s(263);a.a.use(n.a);var i={user:{},waifu:{},pinnedPost:{},profileLinks:{},favourites:{},anime:{},manga:{}},r={USER:function(t,e){t.user[e[1]]=e[0]},WAIFU:function(t,e){t.waifu[e[1]]=e[0]},PINNEDPOST:function(t,e){t.pinnedPost[e[1]]=e[0]},PROFILELINKS:function(t,e){t.profileLinks[e[1]]=e[0]},FAVOURITES:function(t,e){t.favourites[e[1]]=e[0]},ANIME:function(t,e){t.anime[e[1]]=e[0]},MANGA:function(t,e){t.manga[e[1]]=e[0]}},o={},u=new n.a.Store({state:i,mutations:r,actions:o});e.a=u},,,,function(t,e,s){s(225);var a=s(1)(s(168),s(257),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";var a=s(149),n=s.n(a);s.d(e,"a",function(){return i});var i=n.a.create({baseURL:"https://kitsu.io/api/edge/",headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(241),n=s.n(a),i=s(242),r=s.n(i),o=s(239),u=s.n(o);e.default={name:"app",metaInfo:function(){return{titleTemplate:"%s | "+this.$t("hibari")}},components:{Navbar:n.a,Notice:r.a,Foobar:u.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:{title:"404"}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a);e.default={metaInfo:function(){return{title:""+(this.anime?this.anime.attributes.canonicalTitle:this.query)}},components:{Spinner:n.a},data:function(){return{loading:!1,error:null,query:this.$route.params.query,anime:null}},created:function(){this.checkStore()},methods:{checkStore:function(){this.loading=!0,void 0!==this.$store.state.anime[this.$route.params.query]?(console.info("[HB]: Data retrieved from store"),this.displayData(!0)):(console.info("[HB]: Data retrieved from API"),this.fetchData())},displayData:function(t,e){this.anime=t?this.$store.state.anime[this.query]:e},fetchData:function(){var t=this;this.error=this.anime=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/anime?filter[slug]="+this.$route.params.query,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json","User-Agent":"hibari"}}).then(function(e){if(t.loading=!1,0===e.body.meta.count)t.error="No anime exists";else{var s=void 0;s=e.body.data[0],t.$store.commit("ANIME",[s,t.query]),t.displayData(!1,s)}}).catch(function(e){t.error=e.toString()})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:function(){return{title:this.$t("bugs.title")}},data:function(){return{VERSION:"30aa935"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:function(){return{titleTemplate:this.$t("hibari")+" - "+this.$t("strapline")}},data:function(){return{userInput:"",animeInput:"",mangaInput:""}},methods:{slugify:function(t){return t.trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-_]/g,"").toLowerCase()}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a);e.default={metaInfo:function(){return{title:""+(this.manga?this.manga.attributes.canonicalTitle:this.query)}},components:{Spinner:n.a},data:function(){return{loading:!1,error:null,query:this.$route.params.query,manga:null}},created:function(){this.checkStore()},methods:{checkStore:function(){this.loading=!0,void 0!==this.$store.state.manga[this.$route.params.query]?(console.info("[HB]: Data retrieved from store"),this.displayData(!0)):(console.info("[HB]: Data retrieved from API"),this.fetchData())},displayData:function(t,e){this.manga=t?this.$store.state.manga[this.query]:e},fetchData:function(){var t=this;this.error=this.manga=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/manga?filter[slug]="+this.$route.params.query,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json","User-Agent":"hibari"}}).then(function(e){if(t.loading=!1,0===e.body.meta.count)t.error="No manga exists";else{var s=void 0;s=e.body.data[0],t.$store.commit("MANGA",[s,t.query]),t.displayData(!1,s)}}).catch(function(e){t.error=e.toString()})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(182),n=s.n(a),i=s(183),r=s.n(i),o=s(0),u=s.n(o),l=s(167),c=s(10),f=s.n(c);e.default={metaInfo:function(){return{titleTemplate:(this.user?this.user.attributes.name:this.slug)+"'s %s | "+this.$t("hibari")}},components:{Spinner:f.a},data:function(){return{loading:!1,error:null,slug:this.$route.params.slug,updated:null,user:null,waifu:null,pinnedPost:null,profileLinks:null,favourites:null}},created:function(){this.checkStore()},methods:{checkStore:function(){void 0!==this.$store.state.user[this.$route.params.slug]?(this.displayData(!0),console.info("[HB]: Data retrieved from store")):localStorage.getItem("user-"+this.slug)&&u()().diff(JSON.parse(localStorage.getItem("user-"+this.slug))[0].updated,"minutes")<30?(this.updated=u()(JSON.parse(localStorage.getItem("user-"+this.slug))[0].updated).fromNow(),this.user=JSON.parse(localStorage.getItem("user-"+this.slug))[1].user,this.waifu=JSON.parse(localStorage.getItem("user-"+this.slug))[2].waifu[0],this.pinnedPost=JSON.parse(localStorage.getItem("user-"+this.slug))[3].pinnedPost[0],this.profileLinks=JSON.parse(localStorage.getItem("user-"+this.slug))[4].profileLinks,this.favourites=JSON.parse(localStorage.getItem("user-"+this.slug))[5].favourites,console.info("[HB]: Data retrieved from local storage")):(this.loading=!0,this.fetchData(),console.info("[HB]: Data retrieved from API"))},displayData:function(t,e,s){this.updated=u()().fromNow(),this.user=t?this.$store.state.user[this.slug]:e,this.waifu=t?this.$store.state.waifu[this.slug][0]:s.waifu[0],this.pinnedPost=t?this.$store.state.pinnedPost[this.slug]:s.pinnedPost[0],this.profileLinks=t?this.$store.state.profileLinks[this.slug]:s.profileLinks,this.favourites=t?this.$store.state.favourites[this.slug]:s.favourites,this.loading=!1},fetchData:function(){var t=this;this.error=this.user=null,l.a.get("users?include=waifu,pinnedPost,profileLinks,favorites.item&fields[characters]=slug,image&fields[manga]=slug,posterImage&fields[anime]=slug,posterImage&filter[name]="+this.$route.params.slug).then(function(e){if(e=e.data,0===e.meta.count)t.error="No user exists";else{var s=void 0,a=void 0,n=void 0,i={};s=e.data[0],n=e.data[0].relationships,a=e.included,i.waifu=[],i.pinnedPost=[],i.profileLinks=[],i.favourites={characters:[],manga:[],anime:[]},null!==n.waifu.data&&a.forEach(function(t){n.waifu.data.id===t.id&&i.waifu.push(t)}),null!==n.pinnedPost.data&&a.forEach(function(t){n.pinnedPost.data.id===t.id&&i.pinnedPost.push(t)}),n.profileLinks.data.forEach(function(t){a.forEach(function(e){t.id===e.id&&i.profileLinks.push(e)})}),n.favorites.data.forEach(function(t){a.forEach(function(e){if(t.id===e.id){var s=e.relationships.item.data.type;i.favourites[s].push(r()(e.attributes,a.filter(function(t){return t.id===e.relationships.item.data.id})))}})}),i.favourites.characters.sort(t.numericSort("favRank")),i.favourites.manga.sort(t.numericSort("favRank")),i.favourites.anime.sort(t.numericSort("favRank")),t.$store.commit("USER",[s,t.slug]),t.$store.commit("WAIFU",[i.waifu,t.slug]),t.$store.commit("PINNEDPOST",[i.pinnedPost,t.slug]),t.$store.commit("PROFILELINKS",[i.profileLinks,t.slug]),t.$store.commit("FAVOURITES",[i.favourites,t.slug]),t.saveToLocalStorage(s,i.waifu,i.pinnedPost,i.profileLinks,i.favourites),t.displayData(!1,s,i)}}).catch(function(e){t.error=e.toString()})},numericSort:function(t){return function(e,s){return e[t]>s[t]?1:e[t]<s[t]?-1:0}},saveToLocalStorage:function(t,e,s,a,i){localStorage.getItem("user-"+this.slug)||localStorage.setItem("user-"+this.slug,n()([{updated:u()()},{user:t},{waifu:e},{pinnedPost:s},{profileLinks:a},{favourites:i}],null,"\t"))}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{VERSION:"30aa935"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(4);e.default={components:{language:{props:["code"]}},data:function(){var t=this;return{lang:this.$lang,languages:[{code:"EN"},{code:"JA"}],Select:function(e){console.info("[HB]: Language set to "+e),a.a.config.lang=e.toLowerCase(),t.$cookie.set("lang",e.toLowerCase())}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(240),n=s.n(a);e.default={components:{LanguageSwitcher:n.a},computed:{development:function(){return"localhost"===window.location.hostname}},data:function(){return{position:!(!this.$route.params.slug&&!this.$route.params.query)&&(window.pageYOffset||document.documentElement.scrollTop)<100}},methods:{handleScroll:function(t){(this.$route.params.slug||this.$route.params.query)&&(this.position=(window.pageYOffset||document.documentElement.scrollTop)<100)}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){var t=this;window.addEventListener("scroll",function(){setTimeout(t.handleScroll,250)})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t=this;return{show:!0,Hide:function(){t.show=!t.show,t.$cookie.set("notice",t.show,30),t.$cookie.set("noticeID",t.$t("notice.id"),30)}}},computed:{cookie:function(){return this.$cookie.get("notice")},matches:function(){return!(!parseInt(this.$cookie.get("noticeID"))||parseInt(this.$cookie.get("noticeID"))!==parseInt(this.$t("notice.id")))}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:{title:"Library"},props:[],data:function(){return{loading:!1,error:null}},methods:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:{title:"Profile"},props:["slug","user","waifu","pinned","profileLinks","favourites"],data:function(){return{loading:!1,error:null,favouritesPanel:"anime"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["message"]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,s){function a(t){return s(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":24,"./af.js":24,"./ar":31,"./ar-dz":25,"./ar-dz.js":25,"./ar-kw":26,"./ar-kw.js":26,"./ar-ly":27,"./ar-ly.js":27,"./ar-ma":28,"./ar-ma.js":28,"./ar-sa":29,"./ar-sa.js":29,"./ar-tn":30,"./ar-tn.js":30,"./ar.js":31,"./az":32,"./az.js":32,"./be":33,"./be.js":33,"./bg":34,"./bg.js":34,"./bn":35,"./bn.js":35,"./bo":36,"./bo.js":36,"./br":37,"./br.js":37,"./bs":38,"./bs.js":38,"./ca":39,"./ca.js":39,"./cs":40,"./cs.js":40,"./cv":41,"./cv.js":41,"./cy":42,"./cy.js":42,"./da":43,"./da.js":43,"./de":46,"./de-at":44,"./de-at.js":44,"./de-ch":45,"./de-ch.js":45,"./de.js":46,"./dv":47,"./dv.js":47,"./el":48,"./el.js":48,"./en-au":49,"./en-au.js":49,"./en-ca":50,"./en-ca.js":50,"./en-gb":51,"./en-gb.js":51,"./en-ie":52,"./en-ie.js":52,"./en-nz":53,"./en-nz.js":53,"./eo":54,"./eo.js":54,"./es":56,"./es-do":55,"./es-do.js":55,"./es.js":56,"./et":57,"./et.js":57,"./eu":58,"./eu.js":58,"./fa":59,"./fa.js":59,"./fi":60,"./fi.js":60,"./fo":61,"./fo.js":61,"./fr":64,"./fr-ca":62,"./fr-ca.js":62,"./fr-ch":63,"./fr-ch.js":63,"./fr.js":64,"./fy":65,"./fy.js":65,"./gd":66,"./gd.js":66,"./gl":67,"./gl.js":67,"./gom-latn":68,"./gom-latn.js":68,"./he":69,"./he.js":69,"./hi":70,"./hi.js":70,"./hr":71,"./hr.js":71,"./hu":72,"./hu.js":72,"./hy-am":73,"./hy-am.js":73,"./id":74,"./id.js":74,"./is":75,"./is.js":75,"./it":76,"./it.js":76,"./ja":77,"./ja.js":77,"./jv":78,"./jv.js":78,"./ka":79,"./ka.js":79,"./kk":80,"./kk.js":80,"./km":81,"./km.js":81,"./kn":82,"./kn.js":82,"./ko":83,"./ko.js":83,"./ky":84,"./ky.js":84,"./lb":85,"./lb.js":85,"./lo":86,"./lo.js":86,"./lt":87,"./lt.js":87,"./lv":88,"./lv.js":88,"./me":89,"./me.js":89,"./mi":90,"./mi.js":90,"./mk":91,"./mk.js":91,"./ml":92,"./ml.js":92,"./mr":93,"./mr.js":93,"./ms":95,"./ms-my":94,"./ms-my.js":94,"./ms.js":95,"./my":96,"./my.js":96,"./nb":97,"./nb.js":97,"./ne":98,"./ne.js":98,"./nl":100,"./nl-be":99,"./nl-be.js":99,"./nl.js":100,"./nn":101,"./nn.js":101,"./pa-in":102,"./pa-in.js":102,"./pl":103,"./pl.js":103,"./pt":105,"./pt-br":104,"./pt-br.js":104,"./pt.js":105,"./ro":106,"./ro.js":106,"./ru":107,"./ru.js":107,"./sd":108,"./sd.js":108,"./se":109,"./se.js":109,"./si":110,"./si.js":110,"./sk":111,"./sk.js":111,"./sl":112,"./sl.js":112,"./sq":113,"./sq.js":113,"./sr":115,"./sr-cyrl":114,"./sr-cyrl.js":114,"./sr.js":115,"./ss":116,"./ss.js":116,"./sv":117,"./sv.js":117,"./sw":118,"./sw.js":118,"./ta":119,"./ta.js":119,"./te":120,"./te.js":120,"./tet":121,"./tet.js":121,"./th":122,"./th.js":122,"./tl-ph":123,"./tl-ph.js":123,"./tlh":124,"./tlh.js":124,"./tr":125,"./tr.js":125,"./tzl":126,"./tzl.js":126,"./tzm":128,"./tzm-latn":127,"./tzm-latn.js":127,"./tzm.js":128,"./uk":129,"./uk.js":129,"./ur":130,"./ur.js":130,"./uz":132,"./uz-latn":131,"./uz-latn.js":131,"./uz.js":132,"./vi":133,"./vi.js":133,"./x-pseudo":134,"./x-pseudo.js":134,"./yo":135,"./yo.js":135,"./zh-cn":136,"./zh-cn.js":136,"./zh-hk":137,"./zh-hk.js":137,"./zh-tw":138,"./zh-tw.js":138};a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=229},,,,function(t,e,s){var a=s(1)(s(169),s(249),null,null);t.exports=a.exports},function(t,e,s){s(219);var a=s(1)(s(170),s(251),null,null);t.exports=a.exports},function(t,e,s){s(218);var a=s(1)(s(171),s(250),null,null);t.exports=a.exports},function(t,e,s){s(222);var a=s(1)(s(172),s(254),null,null);t.exports=a.exports},function(t,e,s){s(217);var a=s(1)(s(173),s(248),null,null);t.exports=a.exports},function(t,e,s){s(223);var a=s(1)(s(174),s(255),null,null);t.exports=a.exports},function(t,e,s){s(221);var a=s(1)(s(175),s(253),null,null);t.exports=a.exports},function(t,e,s){s(226);var a=s(1)(s(176),s(258),null,null);t.exports=a.exports},function(t,e,s){s(220);var a=s(1)(s(177),s(252),null,null);t.exports=a.exports},function(t,e,s){s(224);var a=s(1)(s(178),s(256),null,null);t.exports=a.exports},function(t,e,s){s(216);var a=s(1)(s(179),s(247),null,null);t.exports=a.exports},function(t,e,s){s(214);var a=s(1)(s(180),s(245),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.user?s("section",{staticClass:"profile"},[s("div",[s("div",{staticClass:"left"},[s("div",{staticClass:"title"},[s("span",[t._v(t._s(t.$t("user.sociability.title")))])]),s("div",{staticClass:"sociability"},[s("div",{staticClass:"card"},[s("p",[t._v(t._s(t.user.attributes.postsCount))]),s("p",[t._v(t._s(t.$t("user.sociability.postsCount")))])]),s("div",{staticClass:"card"},[s("p",[t._v(t._s(t.user.attributes.commentsCount))]),s("p",[t._v(t._s(t.$t("user.sociability.commentsCount")))])]),s("div",{staticClass:"card"},[s("p",[t._v(t._s(t.user.attributes.likesGivenCount))]),s("p",[t._v(t._s(t.$t("user.sociability.likesGivenCount")))])]),s("div",{staticClass:"card"},[s("p",[t._v(t._s(t.user.attributes.likesReceivedCount))]),s("p",[t._v(t._s(t.$t("user.sociability.likesReceivedCount")))])]),s("div",{staticClass:"card"},[s("p",[t._v(t._s(t.user.attributes.followingCount))]),s("p",[t._v(t._s(t.$t("user.sociability.followingCount")))])]),s("div",{staticClass:"card"},[s("p",[t._v(t._s(t.user.attributes.followersCount))]),s("p",[t._v(t._s(t.$t("user.sociability.followersCount")))])])]),t._m(0),s("div",{staticClass:"recent-activity row"},t._l(4,function(t){return s("div",{staticClass:"col-3"},[s("img",{attrs:{src:"//media.kitsu.io/anime/poster_images/11178/small.jpg?1452886316"}})])})),t._m(1),t._m(2),t._m(3),s("details",[s("summary",[t._v("Show")]),t.user?s("pre",[t._v(t._s(t.user))]):t._e()]),t._m(4),s("details",[s("summary",[t._v("Show")]),t.waifu?s("pre",[t._v(t._s(t.waifu))]):s("pre",[t._v("User has no waifu")])]),t._m(5),s("details",[s("summary",[t._v("Show")]),t.pinned?s("pre",[t._v(t._s(t.pinned))]):s("pre",[t._v("User has no pinned post")])]),t._m(6),s("details",[s("summary",[t._v("Show")]),t.profileLinks?s("pre",[t._v(t._s(t.profileLinks))]):s("pre",[t._v("User has no profile links")])]),t._m(7),s("details",[s("summary",[t._v("Show")]),t.favourites?s("pre",[t._v(t._s(t.favourites))]):s("pre",[t._v("User has no favourites")])])]),s("div",{staticClass:"right"},[t._m(8),s("p",{staticClass:"os"},[t._v(t._s(t.user.attributes.about))]),t.waifu?s("p",{staticClass:"waifu"},[t._v(t._s(t.waifu.attributes.name)),s("span",[t._v(t._s(t.user.attributes.waifuOrHusbando))])]):t._e(),t.favourites?s("div",{staticClass:"favourites"},[t._m(9),s("ul",{staticClass:"nav nav-pills nav-justified"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:"anime"===t.favouritesPanel},on:{click:function(e){t.favouritesPanel="anime"}}},[t._v("Anime")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:"manga"===t.favouritesPanel},on:{click:function(e){t.favouritesPanel="manga"}}},[t._v("Manga")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:"characters"===t.favouritesPanel},on:{click:function(e){t.favouritesPanel="characters"}}},[t._v("Characters")])])]),s("div",{staticClass:"tab-content"},["anime"===t.favouritesPanel?s("div",{staticClass:"tab-pane active"},[s("div",{staticClass:"row"},t._l(t.favourites.anime,function(t){return s("div",{staticClass:"col-3"},[s("router-link",{attrs:{to:"/anime/"+t[0].attributes.slug}},[s("img",{attrs:{src:t[0].attributes.posterImage?t[0].attributes.posterImage.small:"/kitsu/default_poster.jpg"}})])],1)}))]):"manga"===t.favouritesPanel?s("div",{staticClass:"tab-pane active"},[s("div",{staticClass:"row"},t._l(t.favourites.manga,function(t){return s("div",{staticClass:"col-3"},[s("router-link",{attrs:{to:"/manga/"+t[0].attributes.slug}},[s("img",{attrs:{src:t[0].attributes.posterImage?t[0].attributes.posterImage.small:"/kitsu/default_poster.jpg"}})])],1)}))]):"characters"===t.favouritesPanel?s("div",{staticClass:"tab-pane active"},[s("div",{staticClass:"row"},t._l(t.favourites.characters,function(t){return s("div",{staticClass:"col-3"},[s("a",[s("img",{attrs:{src:t[0].attributes.image?t[0].attributes.image.original:"/kitsu/default_poster.jpg"}})])])}))]):t._e()])]):t._e()])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("Recent Activity")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("Anime Stats")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("Manga Stats")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("API User")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("API Waifu")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("API Pinned Post")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("API Profile Links")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("API Favourites")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("About Me")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("span",[t._v("Favourites")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loader"},[s("img",{attrs:{src:"/images/loading.gif"}}),s("p",[t._v(t._s(t.message))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"library"},[s("p",[t._v("Whelp")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"anime"},[t.error?s("section",{staticClass:"error"},[t._v("Error: "+t._s(t.error))]):s("section",{staticClass:"content"},[t.manga&&t.manga.attributes.slug===t.query?s("div",{staticClass:"cover",style:{backgroundImage:"url("+t.manga.attributes.coverImage.original+")"}},[t.manga.attributes.posterImage.large?s("img",{attrs:{src:t.manga.attributes.posterImage.large}}):t._e()]):s("div",{staticClass:"cover"}),s("nav",[s("div",[s("a",{attrs:{href:"//kitsu.io/manga/"+t.query,rel:"noopener",target:"_blank"}},[t._v("Kitsu")])])]),t.loading?s("spinner"):t._e(),s("div",{staticClass:"container"},[s("hr"),s("p",[t._v("Manga")]),t.manga?s("pre",[t._v(t._s(t.manga))]):t._e()])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"error"},[s("h1",[t._v("404")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"bugs"},[s("h2",[t._v(t._s(t.$t("bugs.title")))]),s("p",{domProps:{innerHTML:t._s(t.$t("bugs.body"))}}),s("p",[t._v(t._s(t.$t("bugs.requirements")))]),s("pre",[t._v(t._s(t.$t("bugs.include.version"))+" "+t._s(t.VERSION)+"\n"+t._s(t.$t("bugs.include.os"))+"\n"+t._s(t.$t("bugs.include.browser"))+"\n"+t._s(t.$t("bugs.include.browserVer"))+"\n\n"+t._s(t.$t("bugs.include.replicate"))+"\n1.\n2.")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"anime"},[t.error?s("section",{staticClass:"error"},[t._v("Error: "+t._s(t.error))]):s("section",{staticClass:"content"},[t.anime&&t.anime.attributes.slug===t.query?s("div",{staticClass:"cover",style:{backgroundImage:"url("+t.anime.attributes.coverImage.original+")"}},[t.anime.attributes.posterImage.large?s("img",{attrs:{src:t.anime.attributes.posterImage.large}}):t._e()]):s("div",{staticClass:"cover"}),s("nav",[s("div",[s("a",{attrs:{href:"//kitsu.io/anime/"+t.query,rel:"noopener",target:"_blank"}},[t._v("Kitsu")])])]),t.loading?s("spinner"):t._e(),s("div",{staticClass:"container"},[s("hr"),s("p",[t._v("Anime")]),t.anime?s("pre",[t._v(t._s(t.anime))]):t._e()])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{class:{transparent:t.position}},[s("nav",[s("h1",[t._v(t._s(t.$t("hibari"))),t.development?s("span",[t._v("Dev")]):t._e()]),s("router-link",{attrs:{to:{name:"Home"}}},[t._v(t._s(t.$t("navigation.home")))]),s("router-link",{attrs:{to:{name:"Bugs"}}},[t._v(t._s(t.$t("navigation.bugs")))]),s("language-switcher")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",[s("a",{staticClass:"mr-auto",attrs:{href:"https://github.com/wopian/hibari",rel:"noopener",target:"_blank"}},[t._v("Github")]),s("span",{staticClass:"navbar-text"},[t._v("Version "+t._s(t.VERSION))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"home"},[s("section",{staticClass:"user"},[s("div",[s("p",[t._v(t._s(t.$t("home.user.head")))]),s("p",[t._v(t._s(t.$t("home.user.body",{username:t.slugify(t.userInput)||"a user"})))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{placeholder:t.$t("home.user.placeholder"),type:"text"},domProps:{value:t.userInput},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}}),s("router-link",{attrs:{to:"/@"+t.slugify(t.userInput)}},[t._v(t._s(t.$t("home.user.action")))])],1)]),s("section",{staticClass:"anime"},[s("div",[s("p",[t._v(t._s(t.$t("home.anime.head")))]),s("p",[t._v(t._s(t.$t("home.anime.body",{anime:t.slugify(t.animeInput)||"an anime"})))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.animeInput,expression:"animeInput"}],attrs:{placeholder:t.$t("home.anime.placeholder"),type:"text"},domProps:{value:t.animeInput},on:{input:function(e){e.target.composing||(t.animeInput=e.target.value)}}}),s("router-link",{attrs:{to:"/anime/"+t.slugify(t.animeInput)}},[t._v(t._s(t.$t("home.anime.action")))])],1)]),s("section",{staticClass:"manga"},[s("div",[s("p",[t._v(t._s(t.$t("home.manga.head")))]),s("p",[t._v(t._s(t.$t("home.manga.body",{manga:t.slugify(t.mangaInput)||"a manga"})))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mangaInput,expression:"mangaInput"}],attrs:{placeholder:t.$t("home.manga.placeholder"),type:"text"},domProps:{value:t.mangaInput},on:{input:function(e){e.target.composing||(t.mangaInput=e.target.value)}}}),s("router-link",{attrs:{to:"/manga/"+t.slugify(t.mangaInput)}},[t._v(t._s(t.$t("home.manga.action")))])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"user"},[t.error?s("section",{staticClass:"error"},[t._v("Error: "+t._s(t.error))]):s("section",{staticClass:"content"},[t.user?s("div",{staticClass:"cover",style:{backgroundImage:"url("+(t.user.attributes.coverImage?t.user.attributes.coverImage.original:"/kitsu/default_cover.png")+")"}},[s("div",{staticClass:"container"},[s("img",{attrs:{src:t.user.attributes.avatar?t.user.attributes.avatar.large:"/kitsu/default_avatar.png"}}),s("div",[s("h2",[t._v(t._s(t.user.attributes.name)),t.user.attributes.title?s("span",[t._v(t._s(t.user.attributes.title))]):t._e()]),s("a",{attrs:{href:"//kitsu.io/users/"+t.slug,rel:"noopener",target:"_blank"}},[t._v(t._s(t.$t("user.kitsuProfile")))])])])]):s("div",{staticClass:"cover",style:{backgroundImage:"url(/kitsu/default_cover.png)"}},[s("div",{staticClass:"container"},[s("img",{attrs:{src:"/kitsu/default_avatar.png"}}),s("div",[s("h2",[t._v(t._s(t.slug))]),s("a",{attrs:{href:"//kitsu.io/users/"+t.slug,rel:"noopener",target:"_blank"}},[t._v(t._s(t.$t("user.kitsuProfile")))])])])]),s("nav",[s("div",[s("router-link",{attrs:{to:{name:"Profile"},exact:"exact"}},[t._v(t._s(t.$t("user.navigation.profile")))]),s("router-link",{attrs:{to:{name:"Library"},exact:"exact"}},[t._v(t._s(t.$t("user.navigation.library")))]),t.updated?s("span",[t._v("Updated "+t._s(t.updated))]):t._e()],1)]),s("router-view",{attrs:{slug:t.slug,user:t.user,waifu:t.waifu,pinned:t.pinnedPost,"profile-links":t.profileLinks,favourites:t.favourites}}),t.loading?s("spinner",{attrs:{message:t.$t("loader.collectingData")}}):t._e()],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show&&!t.matches||!t.cookie?s("section",{staticClass:"notice"},[s("div",[s("button",{on:{click:function(e){t.Hide()}}},[s("span",[t._v("×")])]),s("div",[s("p",{domProps:{innerHTML:t._s(t.$t("notice.content"))}})])])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),s("router-view"),s("foobar"),s("notice")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"switcher"},t._l(t.languages,function(e){return s("button",{on:{click:function(s){t.Select(e.code)}}},[t._v(t._s(e.code))])}))},staticRenderFns:[]}},,,,,,,function(t,e){},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(144),n=s.n(a),i=s(4),r=s(147),o=s.n(r),u=s(146),l=s.n(u),c=s(145),f=s.n(c),d=s(148),p=(s.n(d),s(142)),m=s(143),v=s(139),h=s(140),g={en:v.a,ja:h.a};s(141),s.i(d.sync)(m.a,p.a),i.a.use(f.a),i.a.use(l.a),i.a.config.lang=i.a.cookie.get("lang")?i.a.cookie.get("lang"):"en",i.a.config.fallbackLang="en",n()(g).forEach(function(t){i.a.locale(t,g[t])}),new i.a({el:"#app",router:p.a,store:m.a,render:function(t){return t(o.a)}})}],[266]);
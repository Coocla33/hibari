webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e,a){a(232);var s=a(1)(a(189),a(280),"data-v-25161261",null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={lang:"English",hibari:"Hibari",kitsu:"Kitsu",strapline:"Stats for Kitsu",notice:{id:"3",content:"This version is very early alpha and is prone to bugs and lack of content"},navigation:{home:"Home",bugs:"Bugs"},home:{strapline:"Stats for ",user:{head:"Stats for",body:"Search for {username} on Kitsu",placeholder:"Enter a username...",action:"Lookup User"},anime:{head:"Anime",body:"Search for {anime}",placeholder:"enter an anime...",action:"Lookup"},manga:{head:"Manga",body:"Search for {manga}",placeholder:"enter a manga...",action:"Lookup"}},user:{kitsuProfile:"View on Kitsu",navigation:{profile:"Profile",library:"Library"},sociability:{title:"Sociability",postsCount:"Posts",commentsCount:"Comments",likesGivenCount:"Likes Given",likesReceivedCount:"Likes Received",followingCount:"Followed",followersCount:"Followers"},about:{title:"About"}},bugs:{title:"Bugs",body:"Please create a <a href='//github.com/wopian/hibari/issues/new'>GitHub Issue</a> for any bugs you encounter.",requirements:"The following information is required to aid replication and fixing:",include:{version:"Version:",os:"Operating System:",browser:"Browser:",browserVer:"Browser Version:",replicate:"Steps to replicate:"}},loader:{collectingData:"Collecting Data"}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={lang:"日本語",hibari:"ヒバリ",navigation:{home:"ホーム"},home:{user:{head:"ユーザー",body:"Psst, help translate this project",action:"サーチ"},anime:{head:"アニメ"},manga:{head:"マンガ"}}}},function(t,e,a){"use strict";var s=a(261);(function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e})(s).install()},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),i=s(n),r=a(294),o=s(r),l=a(293),u=s(l),c=a(270),d=s(c),f=a(272),m=s(f),v=a(278),p=s(v),g=a(277),h=s(g),_=a(268),b=s(_),C=a(271),j=s(C),k=a(269),y=s(k),$=a(267),w=s($);i.default.use(o.default),i.default.use(u.default),e.default=new o.default({routes:[{path:"/",name:"Home",component:d.default},{path:"/@:slug",component:m.default,children:[{path:"",name:"Profile",component:p.default},{path:"library",name:"Library",component:h.default,children:[{path:":status",component:h.default}]}]},{path:"/anime/:query",component:b.default},{path:"/manga/:query",component:j.default},{path:"/bugs",name:"Bugs",component:y.default},{path:"*",component:w.default}]})},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),i=s(n),r=a(297),o=s(r),l=a(296),u=s(l);i.default.use(o.default);var c={user:{},anime:{},manga:{}},d={USER:function(t,e){t.user[e.slug]||(t.user[e.slug]={user:{},updated:null}),t.user[e.slug].user=e.data.user,t.user[e.slug].updated=e.data.updated},ANIME:function(t,e){t.anime[e[1]]=e[0]},MANGA:function(t,e){t.manga[e[1]]=e[0]}},f={},m=new o.default.Store({plugins:[(0,u.default)({namespace:"hibari",initialState:{},expires:6048e5})],state:c,mutations:d,actions:f});e.default=m},,,,,function(t,e,a){a(243),a(245),a(244);var s=a(1)(a(176),a(291),"data-v-ccd46512",null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Kitsu=void 0;var s=a(218),n=function(t){return t&&t.__esModule?t:{default:t}}(s),i=e.Kitsu=new n.default({apiUrl:"https://kitsu.io/api/edge",logger:!0});i.headers["X-Requested-With"]="Hibari (wopian)",i.headers["X-Forwarded-Host"]="hb.wopian.me"},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(149),i=s(n),r=a(6),o=s(r),l=a(153),u=s(l),c=a(152),d=s(c),f=a(151),m=s(f),v=a(150),p=s(v),g=a(154),h=s(g),_=a(155),b=a(147),C=s(b),j=a(148),k=s(j),y=a(144),$=s(y),w=a(145),x=s(w),I={en:$.default,ja:x.default};a(146);o.default.use(p.default,{id:"UA-46184267-8",router:C.default}),(0,_.sync)(k.default,C.default),o.default.use(m.default),o.default.use(d.default),o.default.use(h.default),C.default.beforeEach(function(t,e,a){window.scrollTo(0,0),a()}),o.default.config.lang=o.default.cookie.get("lang")?o.default.cookie.get("lang"):"en",o.default.config.fallbackLang="en",(0,i.default)(I).forEach(function(t){o.default.locale(t,I[t])}),new o.default({el:"#app",router:C.default,store:k.default,render:function(t){return t(u.default)}})},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(275),i=s(n),r=a(276),o=s(r),l=a(273),u=s(l);e.default={name:"app",metaInfo:function(){return{titleTemplate:"%s | "+this.$t("hibari")}},components:{Navbar:i.default,Notice:o.default,Foobar:u.default}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:{title:"404"}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(14),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={metaInfo:function(){return{title:""+(this.anime?this.anime.attributes.canonicalTitle:this.query)}},components:{Spinner:n.default},data:function(){return{loading:!1,error:null,query:this.$route.params.query,anime:null}},created:function(){this.checkStore()},methods:{checkStore:function(){this.loading=!0,void 0!==this.$store.state.anime[this.$route.params.query]?(console.info("[HB]: Data retrieved from store"),this.displayData(!0)):(console.info("[HB]: Data retrieved from API"),this.fetchData())},displayData:function(t,e){this.anime=t?this.$store.state.anime[this.query]:e},fetchData:function(){this.error=this.anime=null,this.loading=!0}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:function(){return{title:this.$t("bugs.title")}},data:function(){return{VERSION:"0.2.0-37-g3d54c1f"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:function(){return{titleTemplate:this.$t("hibari")+" - "+this.$t("strapline")}},data:function(){return{userInput:"",animeInput:"",mangaInput:""}},methods:{slugify:function(t){return t.trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-_]/g,"").toLowerCase()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(14),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={metaInfo:function(){return{title:""+(this.manga?this.manga.attributes.canonicalTitle:this.query)}},components:{Spinner:n.default},data:function(){return{loading:!1,error:null,query:this.$route.params.query,manga:null}},created:function(){this.checkStore()},methods:{checkStore:function(){this.loading=!0,void 0!==this.$store.state.manga[this.$route.params.query]?(console.info("[HB]: Data retrieved from store"),this.displayData(!0)):(console.info("[HB]: Data retrieved from API"),this.fetchData())},displayData:function(t,e){this.manga=t?this.$store.state.manga[this.query]:e},fetchData:function(){this.error=this.manga=null,this.loading=!0}}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=s(n),r=a(174),o=a(14),l=s(o);r.Kitsu.define("user",{name:"",about:"",location:"",waifuOrHusbando:"",followersCount:"",createdAt:"",followingCount:"",lifeSpentOnAnime:"",birthday:"",gender:"",updatedAt:"",commentsCount:"",favoritesCount:"",likesGivenCount:"",reviewsCount:"",likesReceivedCount:"",postsCount:"",ratingsCount:"",proExpiresAt:"",title:"",avatar:"",coverImage:"",waifu:{jsonApi:"hasOne",type:"characters"},pinnedPost:{jsonApi:"hasOne",type:"posts"},profileLinks:{jsonApi:"hasMany",type:"profileLinks"},favorites:{jsonApi:"hasMany",type:"favorites"}}),r.Kitsu.define("character",{slug:"",name:"",image:""}),r.Kitsu.define("post",{contentFormatted:"",commentsCount:"",postLikesCount:"",spoiler:"",nsfw:"",createdAt:"",editedAt:""}),r.Kitsu.define("profileLink",{url:""}),r.Kitsu.define("favorite",{favRank:"",item:{jsonApi:"hasOne",type:["characters","anime","manga"]}}),r.Kitsu.define("anime",{slug:"",canonicalTitle:"",posterImage:""}),r.Kitsu.define("manga",{slug:"",canonicalTitle:"",posterImage:""}),e.default={metaInfo:function(){return{titleTemplate:(this.user?this.user.name:this.slug)+"'s %s | "+this.$t("hibari")}},components:{Spinner:l.default},data:function(){return{loading:!1,error:null,slug:this.$route.params.slug,updated:null,user:null}},created:function(){this.checkStore()},methods:{checkStore:function(){void 0!==this.$store.state.user[this.$route.params.slug]?(this.displayData(),console.info("[HB]: Data retrieved from store")):(this.loading=!0,this.fetchData(),console.info("[HB]: Data retrieved from API"))},displayData:function(t,e,a){var s=this.$store.state.user[this.$route.params.slug];this.updated=(0,i.default)(s.updated).fromNow(),this.user=s.user,this.loading=!1,(0,i.default)().diff(s.updated,"minutes")>30&&(console.info("[HB]: Refreshing data"),this.fetchData(),console.info("[HB]: Updated store from API"))},fetchData:function(){var t=this;r.Kitsu.findAll("user",{filter:{name:this.$route.params.slug},include:"waifu,pinnedPost,profileLinks,favorites.item",fields:{characters:"slug,image,name",manga:"slug,posterImage,canonicalTitle",anime:"slug,posterImage,canonicalTitle"}}).then(function(e){if(0===e.meta.count)t.error="No user exists";else{var a=(0,i.default)();e=e[0],e.favorites.sort(t.numericSort("favRank")),t.$store.commit("USER",{data:{user:e,updated:a},slug:t.slug}),t.displayData()}}).catch(function(e){t.error=e.toString()})},numericSort:function(t){return function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{VERSION:"0.2.0-37-g3d54c1f"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(6),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={components:{language:{props:["code"]}},data:function(){var t=this;return{lang:this.$lang,languages:[{code:"EN"},{code:"JA"}],Select:function(e){console.info("[HB]: Language set to "+e),n.default.config.lang=e.toLowerCase(),t.$cookie.set("lang",e.toLowerCase())}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(274),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={components:{LanguageSwitcher:n.default},computed:{development:function(){return"localhost"===window.location.hostname}},data:function(){return{position:!(!this.$route.params.slug&&!this.$route.params.query)&&(window.pageYOffset||document.documentElement.scrollTop)<100}},methods:{handleScroll:function(t){(this.$route.params.slug||this.$route.params.query)&&(this.position=(window.pageYOffset||document.documentElement.scrollTop)<100)}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){var t=this;window.addEventListener("scroll",function(){setTimeout(t.handleScroll,250)})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t=this;return{show:!0,Hide:function(){t.show=!t.show,t.$cookie.set("notice",t.show,30),t.$cookie.set("noticeID",t.$t("notice.id"),30)}}},computed:{cookie:function(){return this.$cookie.get("notice")},matches:function(){return!(!parseInt(this.$cookie.get("noticeID"))||parseInt(this.$cookie.get("noticeID"))!==parseInt(this.$t("notice.id")))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:{title:"Library"},props:[],data:function(){return{loading:!1,error:null}},methods:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:{title:"Profile"},props:["slug","user"],data:function(){return{loading:!1,error:null,paginate:["favAnime","favManga","favCharacters"],favoritesPanel:"anime",favoriteAnime:this.user.favorites.filter(function(t){return"anime"===t.item.type}),favoriteManga:this.user.favorites.filter(function(t){return"manga"===t.item.type}),favoriteCharacters:this.user.favorites.filter(function(t){return"characters"===t.item.type})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["message"]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,function(t,e,a){function s(t){return a(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":25,"./af.js":25,"./ar":32,"./ar-dz":26,"./ar-dz.js":26,"./ar-kw":27,"./ar-kw.js":27,"./ar-ly":28,"./ar-ly.js":28,"./ar-ma":29,"./ar-ma.js":29,"./ar-sa":30,"./ar-sa.js":30,"./ar-tn":31,"./ar-tn.js":31,"./ar.js":32,"./az":33,"./az.js":33,"./be":34,"./be.js":34,"./bg":35,"./bg.js":35,"./bn":36,"./bn.js":36,"./bo":37,"./bo.js":37,"./br":38,"./br.js":38,"./bs":39,"./bs.js":39,"./ca":40,"./ca.js":40,"./cs":41,"./cs.js":41,"./cv":42,"./cv.js":42,"./cy":43,"./cy.js":43,"./da":44,"./da.js":44,"./de":47,"./de-at":45,"./de-at.js":45,"./de-ch":46,"./de-ch.js":46,"./de.js":47,"./dv":48,"./dv.js":48,"./el":49,"./el.js":49,"./en-au":50,"./en-au.js":50,"./en-ca":51,"./en-ca.js":51,"./en-gb":52,"./en-gb.js":52,"./en-ie":53,"./en-ie.js":53,"./en-nz":54,"./en-nz.js":54,"./eo":55,"./eo.js":55,"./es":57,"./es-do":56,"./es-do.js":56,"./es.js":57,"./et":58,"./et.js":58,"./eu":59,"./eu.js":59,"./fa":60,"./fa.js":60,"./fi":61,"./fi.js":61,"./fo":62,"./fo.js":62,"./fr":65,"./fr-ca":63,"./fr-ca.js":63,"./fr-ch":64,"./fr-ch.js":64,"./fr.js":65,"./fy":66,"./fy.js":66,"./gd":67,"./gd.js":67,"./gl":68,"./gl.js":68,"./gom-latn":69,"./gom-latn.js":69,"./he":70,"./he.js":70,"./hi":71,"./hi.js":71,"./hr":72,"./hr.js":72,"./hu":73,"./hu.js":73,"./hy-am":74,"./hy-am.js":74,"./id":75,"./id.js":75,"./is":76,"./is.js":76,"./it":77,"./it.js":77,"./ja":78,"./ja.js":78,"./jv":79,"./jv.js":79,"./ka":80,"./ka.js":80,"./kk":81,"./kk.js":81,"./km":82,"./km.js":82,"./kn":83,"./kn.js":83,"./ko":84,"./ko.js":84,"./ky":85,"./ky.js":85,"./lb":86,"./lb.js":86,"./lo":87,"./lo.js":87,"./lt":88,"./lt.js":88,"./lv":89,"./lv.js":89,"./me":90,"./me.js":90,"./mi":91,"./mi.js":91,"./mk":92,"./mk.js":92,"./ml":93,"./ml.js":93,"./mr":94,"./mr.js":94,"./ms":96,"./ms-my":95,"./ms-my.js":95,"./ms.js":96,"./my":97,"./my.js":97,"./nb":98,"./nb.js":98,"./ne":99,"./ne.js":99,"./nl":101,"./nl-be":100,"./nl-be.js":100,"./nl.js":101,"./nn":102,"./nn.js":102,"./pa-in":103,"./pa-in.js":103,"./pl":104,"./pl.js":104,"./pt":106,"./pt-br":105,"./pt-br.js":105,"./pt.js":106,"./ro":107,"./ro.js":107,"./ru":108,"./ru.js":108,"./sd":109,"./sd.js":109,"./se":110,"./se.js":110,"./si":111,"./si.js":111,"./sk":112,"./sk.js":112,"./sl":113,"./sl.js":113,"./sq":114,"./sq.js":114,"./sr":116,"./sr-cyrl":115,"./sr-cyrl.js":115,"./sr.js":116,"./ss":117,"./ss.js":117,"./sv":118,"./sv.js":118,"./sw":119,"./sw.js":119,"./ta":120,"./ta.js":120,"./te":121,"./te.js":121,"./tet":122,"./tet.js":122,"./th":123,"./th.js":123,"./tl-ph":124,"./tl-ph.js":124,"./tlh":125,"./tlh.js":125,"./tr":126,"./tr.js":126,"./tzl":127,"./tzl.js":127,"./tzm":129,"./tzm-latn":128,"./tzm-latn.js":128,"./tzm.js":129,"./uk":130,"./uk.js":130,"./ur":131,"./ur.js":131,"./uz":133,"./uz-latn":132,"./uz-latn.js":132,"./uz.js":133,"./vi":134,"./vi.js":134,"./x-pseudo":135,"./x-pseudo.js":135,"./yo":136,"./yo.js":136,"./zh-cn":137,"./zh-cn.js":137,"./zh-hk":138,"./zh-hk.js":138,"./zh-tw":139,"./zh-tw.js":139};s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id=260},,,,,,,function(t,e,a){a(235);var s=a(1)(a(177),a(283),"data-v-330cfc8e",null);t.exports=s.exports},function(t,e,a){a(237);var s=a(1)(a(178),a(285),"data-v-3c3e8495",null);t.exports=s.exports},function(t,e,a){a(236);var s=a(1)(a(179),a(284),"data-v-33c7eaee",null);t.exports=s.exports},function(t,e,a){a(240);var s=a(1)(a(180),a(288),"data-v-6f215f4e",null);t.exports=s.exports},function(t,e,a){a(234);var s=a(1)(a(181),a(282),null,null);t.exports=s.exports},function(t,e,a){a(241);var s=a(1)(a(182),a(289),"data-v-7c3a003a",null);t.exports=s.exports},function(t,e,a){a(239);var s=a(1)(a(183),a(287),"data-v-4277bd78",null);t.exports=s.exports},function(t,e,a){a(246);var s=a(1)(a(184),a(292),"data-v-d9532614",null);t.exports=s.exports},function(t,e,a){a(238);var s=a(1)(a(185),a(286),"data-v-3dac3d26",null);t.exports=s.exports},function(t,e,a){a(242);var s=a(1)(a(186),a(290),"data-v-bbb88f96",null);t.exports=s.exports},function(t,e,a){a(233);var s=a(1)(a(187),a(281),"data-v-26a164b4",null);t.exports=s.exports},function(t,e,a){a(231),a(230);var s=a(1)(a(188),a(279),"data-v-1b9d8b94",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.user?a("section",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"left col-md-8 col-sm-12"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.$t("user.sociability.title")))])]),a("div",{staticClass:"sociability row"},[a("div",{staticClass:"card card-block"},[a("p",{staticClass:"card-title"},[t._v(t._s(t.user.postsCount))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.$t("user.sociability.postsCount")))])]),a("div",{staticClass:"card card-block"},[a("p",{staticClass:"card-title"},[t._v(t._s(t.user.commentsCount))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.$t("user.sociability.commentsCount")))])]),a("div",{staticClass:"card card-block"},[a("p",{staticClass:"card-title"},[t._v(t._s(t.user.likesGivenCount))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.$t("user.sociability.likesGivenCount")))])]),a("div",{staticClass:"card card-block"},[a("p",{staticClass:"card-title"},[t._v(t._s(t.user.likesReceivedCount))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.$t("user.sociability.likesReceivedCount")))])]),a("div",{staticClass:"card card-block"},[a("p",{staticClass:"card-title"},[t._v(t._s(t.user.followingCount))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.$t("user.sociability.followingCount")))])]),a("div",{staticClass:"card card-block"},[a("p",{staticClass:"card-title"},[t._v(t._s(t.user.followersCount))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.$t("user.sociability.followersCount")))])])]),t._m(0),a("div",{staticClass:"recent-activity row"},t._l(4,function(t){return a("div",{staticClass:"col-3"},[a("img",{attrs:{src:"//media.kitsu.io/anime/poster_images/11178/small.jpg?1452886316"}})])})),t._m(1),t._m(2),t._m(3),a("details",[a("summary",[t._v("Show")]),t.user?a("pre",[t._v(t._s(t.user))]):t._e()])]),a("div",{staticClass:"right col-md-4 col-sm-12"},[t._m(4),a("p",{staticClass:"os"},[t._v(t._s(t.user.about))]),t.user.waifu?a("p",{staticClass:"waifu"},[t._v(t._s(t.user.waifu.name)),a("span",[t._v(t._s(t.user.waifuOrHusbando))])]):t._e(),t.user.favorites.length>0?a("div",{staticClass:"favourites"},[t._m(5),a("ul",{staticClass:"nav nav-pills nav-justified"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"anime"===t.favoritesPanel},on:{click:function(e){t.favoritesPanel="anime"}}},[t._v("Anime")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"manga"===t.favoritesPanel},on:{click:function(e){t.favoritesPanel="manga"}}},[t._v("Manga")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"characters"===t.favoritesPanel},on:{click:function(e){t.favoritesPanel="characters"}}},[t._v("Characters")])])]),a("div",{staticClass:"tab-content"},["anime"===t.favoritesPanel?a("div",{staticClass:"tab-pane active"},[a("paginate",{staticClass:"row",attrs:{name:"favAnime",list:t.favoriteAnime,per:16,tag:"div"}},t._l(t.paginated("favAnime"),function(t){return a("div",{staticClass:"col-3"},[a("router-link",{attrs:{to:"/anime/"+t.item.slug}},[a("img",{attrs:{src:t.item.posterImage?t.item.posterImage.small:"/kitsu/default_poster.jpg"}})])],1)})),a("paginate-links",{attrs:{for:"favAnime",simple:{prev:"Back",next:"Next"},"hide-single-page":!0,classes:{".next > a":"btn",".prev > a":"btn"}}})],1):"manga"===t.favoritesPanel?a("div",{staticClass:"tab-pane active"},[a("paginate",{staticClass:"row",attrs:{name:"favManga",list:t.favoriteManga,per:16,tag:"div"}},t._l(t.paginated("favManga"),function(t){return a("div",{staticClass:"col-3"},[a("router-link",{attrs:{to:"/manga/"+t.item.slug}},[a("img",{attrs:{src:t.item.posterImage?t.item.posterImage.small:"/kitsu/default_poster.jpg"}})])],1)})),a("paginate-links",{attrs:{for:"favManga",simple:{prev:"Back",next:"Next"},"hide-single-page":!0,classes:{".next > a":"btn",".prev > a":"btn"}}})],1):"characters"===t.favoritesPanel?a("div",{staticClass:"tab-pane active"},[a("paginate",{staticClass:"row",attrs:{name:"favCharacters",list:t.favoriteCharacters,per:16,tag:"div"}},t._l(t.paginated("favCharacters"),function(t){return a("div",{staticClass:"col-3"},[a("a",[a("img",{attrs:{src:t.item.image?t.item.image.original:"/kitsu/default_poster.jpg"}})])])})),a("paginate-links",{attrs:{for:"favCharacters",simple:{prev:"Back",next:"Next"},"hide-single-page":!0,classes:{".next > a":"btn",".prev > a":"btn"}}})],1):t._e()])]):t._e()])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("Recent Activity")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("Anime Stats")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("Manga Stats")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("API User")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("About Me")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("Favourites")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"},[a("img",{attrs:{src:"/images/loading.gif"}}),a("p",[t._v(t._s(t.message))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(12,function(e){return a("div",{staticClass:"col-2"},[t._m(0,!0)])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:"//media.kitsu.io/anime/poster_images/11178/small.jpg?1452886316"}}),a("div",{staticClass:"card-block"},[a("p",{staticClass:"card-text"},[t._v("Osomatsu-san")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"anime"},[t.error?a("section",{staticClass:"error"},[t._v("Error: "+t._s(t.error))]):a("section",{staticClass:"content"},[t.manga&&t.manga.attributes.slug===t.query?a("div",{staticClass:"cover",style:{backgroundImage:"url("+t.manga.attributes.coverImage.original+")"}},[t.manga.attributes.posterImage.large?a("img",{attrs:{src:t.manga.attributes.posterImage.large}}):t._e()]):a("div",{staticClass:"cover"}),a("nav",[a("div",[a("a",{attrs:{href:"//kitsu.io/manga/"+t.query,rel:"noopener",target:"_blank"}},[t._v("Kitsu")])])]),t.loading?a("spinner"):t._e(),a("div",{staticClass:"container"},[a("hr"),a("p",[t._v("Manga")]),t.manga?a("pre",[t._v(t._s(t.manga))]):t._e()])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"container"},[a("h1",[t._v("404")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"container"},[a("h2",[t._v(t._s(t.$t("bugs.title")))]),a("p",{domProps:{innerHTML:t._s(t.$t("bugs.body"))}}),a("p",[t._v(t._s(t.$t("bugs.requirements")))]),a("pre",[t._v(t._s(t.$t("bugs.include.version"))+" "+t._s(t.VERSION)+"\n"+t._s(t.$t("bugs.include.os"))+"\n"+t._s(t.$t("bugs.include.browser"))+"\n"+t._s(t.$t("bugs.include.browserVer"))+"\n\n"+t._s(t.$t("bugs.include.replicate"))+"\n1.\n2.")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"anime"},[t.error?a("section",{staticClass:"error"},[t._v("Error: "+t._s(t.error))]):a("section",{staticClass:"content"},[t.anime&&t.anime.attributes.slug===t.query?a("div",{staticClass:"cover",style:{backgroundImage:"url("+t.anime.attributes.coverImage.original+")"}},[t.anime.attributes.posterImage.large?a("img",{attrs:{src:t.anime.attributes.posterImage.large}}):t._e()]):a("div",{staticClass:"cover"}),a("nav",[a("div",[a("a",{attrs:{href:"//kitsu.io/anime/"+t.query,rel:"noopener",target:"_blank"}},[t._v("Kitsu")])])]),t.loading?a("spinner"):t._e(),a("div",{staticClass:"container"},[a("hr"),a("p",[t._v("Anime")]),t.anime?a("pre",[t._v(t._s(t.anime))]):t._e()])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar fixed-top navbar-light",class:{transparent:t.position}},[a("nav",{staticClass:"nav container"},[a("h1",{staticClass:"navbar-brand mb-0"},[t._v(t._s(t.$t("hibari"))),t.development?a("span",[t._v("Dev")]):t._e()]),a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v(t._s(t.$t("navigation.home")))]),a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Bugs"}}},[t._v(t._s(t.$t("navigation.bugs")))]),a("language-switcher")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"navbar"},[a("div",{staticClass:"container nav"},[a("a",{staticClass:"nav-link mr-auto",attrs:{href:"https://github.com/wopian/hibari",rel:"noopener",target:"_blank"}},[t._v("Github")]),a("span",{staticClass:"navbar-text"},[t._v("Version "+t._s(t.VERSION))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"jumbotron"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-7"},[a("h1",[t._v(t._s(t.$t("home.strapline"))),t._m(0)]),a("p",{staticClass:"lead"},[t._v("Extended stats for users, anime and manga.")])]),a("div",{staticClass:"col-sm-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],staticClass:"form-control form-control-lg",attrs:{placeholder:t.$t("home.user.placeholder"),type:"text"},domProps:{value:t.userInput},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}}),a("router-link",{staticClass:"btn btn-lg btn-block",attrs:{to:"/@"+t.slugify(t.userInput)}},[t._v(t._s(t.$t("home.user.action")))])],1)])])]),a("div",{staticClass:"jumbotron"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-7"},[a("h2",[t._v(t._s(t.$t("home.anime.head")))]),a("p",{staticClass:"lead"},[t._v(t._s(t.$t("home.anime.body",{anime:t.slugify(t.animeInput)||"an anime"})))])]),a("div",{staticClass:"col-sm-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.animeInput,expression:"animeInput"}],staticClass:"form-control form-control-lg",attrs:{placeholder:t.$t("home.anime.placeholder"),type:"text"},domProps:{value:t.animeInput},on:{input:function(e){e.target.composing||(t.animeInput=e.target.value)}}}),a("router-link",{staticClass:"btn btn-lg btn-block",attrs:{to:"/anime/"+t.slugify(t.animeInput)}},[t._v(t._s(t.$t("home.anime.action")))])],1)])])]),a("div",{staticClass:"jumbotron"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-7"},[a("h2",[t._v(t._s(t.$t("home.manga.head")))]),a("p",{staticClass:"lead"},[t._v(t._s(t.$t("home.manga.body",{manga:t.slugify(t.mangaInput)||"a manga"})))])]),a("div",{staticClass:"col-sm-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.mangaInput,expression:"mangaInput"}],staticClass:"form-control form-control-lg",attrs:{placeholder:t.$t("home.manga.placeholder"),type:"text"},domProps:{value:t.mangaInput},on:{input:function(e){e.target.composing||(t.mangaInput=e.target.value)}}}),a("router-link",{staticClass:"btn btn-lg btn-block",attrs:{to:"/manga/"+t.slugify(t.mangaInput)}},[t._v(t._s(t.$t("home.manga.action")))])],1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"//kitsu.io"}},[a("strong",[t._v("Kitsu")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[t.error?a("div",{staticClass:"error"},[t._v("Error: "+t._s(t.error))]):a("div",{staticClass:"content"},[t.user?a("div",{staticClass:"cover",style:{backgroundImage:"url("+(t.user.coverImage?t.user.coverImage.original:"/kitsu/default_cover.png")+")"}},[a("div",{staticClass:"container"},[a("img",{attrs:{src:t.user.avatar?t.user.avatar.large:"/kitsu/default_avatar.png"}}),a("div",[a("h2",[t._v(t._s(t.user.name)),t.user.title?a("span",[t._v(t._s(t.user.title))]):t._e()]),a("a",{staticClass:"btn",attrs:{href:"//kitsu.io/users/"+t.slug,rel:"noopener",target:"_blank"}},[t._v(t._s(t.$t("user.kitsuProfile")))])])])]):a("div",{staticClass:"cover",style:{backgroundImage:"url(/kitsu/default_cover.png)"}},[a("div",{staticClass:"container"},[a("img",{attrs:{src:"/kitsu/default_avatar.png"}}),a("div",[a("h2",[t._v(t._s(t.slug))]),a("a",{staticClass:"btn",attrs:{href:"//kitsu.io/users/"+t.slug,rel:"noopener",target:"_blank"}},[t._v(t._s(t.$t("user.kitsuProfile")))])])])]),a("nav",{staticClass:"navbar"},[a("div",{staticClass:"container nav"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"},exact:"exact"}},[t._v(t._s(t.$t("user.navigation.profile")))]),a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Library"},exact:"exact"}},[t._v(t._s(t.$t("user.navigation.library")))]),t.updated?a("div",{staticClass:"navbar-text ml-auto"},[t._v("Updated "+t._s(t.updated))]):t._e()],1)]),a("router-view",{attrs:{slug:t.slug,user:t.user}}),t.loading?a("spinner",{attrs:{message:t.$t("loader.collectingData")}}):t._e()],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show&&!t.matches||!t.cookie?a("section",{staticClass:"alert alert-dismissible"},[a("div",{staticClass:"container"},[a("div",[a("p",{domProps:{innerHTML:t._s(t.$t("notice.content"))}})]),a("button",{staticClass:"close",on:{click:function(e){t.Hide()}}},[a("span",[t._v("×")])])])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view"),a("foobar"),a("notice")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav ml-auto"},t._l(t.languages,function(e){return a("button",{staticClass:"nav-link",on:{click:function(a){t.Select(e.code)}}},[t._v(t._s(e.code))])}))},staticRenderFns:[]}},,,,,,function(t,e){}],[175]);
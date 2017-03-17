webpackJsonp([1,2],[,,,,,,,,,function(t,e,a){a(98);var s=a(0)(a(64),a(127),null,null);t.exports=s.exports},,,,,,,,,,,,,,function(t,e,a){"use strict";e.a={lang:"English",hibari:"Hibari",notice:{id:"3",content:"This version is very early alpha and is prone to bugs and lack of content"},navigation:{home:"Home",bugs:"Bugs"},home:{user:{head:"User",body:"Search for {username} on Kitsu",placeholder:"enter a username...",action:"Lookup"},anime:{head:"Anime",body:"Search for {anime}",placeholder:"enter an anime...",action:"Lookup"},manga:{head:"Manga",body:"Search for {manga}",placeholder:"enter a manga...",action:"Lookup"}},user:{kitsuProfile:"View on Kitsu",navigation:{profile:"Profile",library:"Library"},sociability:{title:"Sociability",postsCount:"Posts",commentsCount:"Comments",likesGivenCount:"Likes Given",likesReceivedCount:"Likes Received",followingCount:"Followed",followersCount:"Followers"},about:{title:"About"}},bugs:{title:"Bugs",body:"Please create a <a href='//github.com/wopian/hibari/issues/new'>GitHub Issue</a> for any bugs you encounter.",requirements:"The following information is required to aid replication and fixing:",include:{version:"Version:",os:"Operating System:",browser:"Browser:",browserVer:"Browser Version:",replicate:"Steps to replicate:"}},loader:{collectingData:"Collecting Data"}}},function(t,e,a){"use strict";e.a={lang:"日本語",hibari:"ヒバリ",navigation:{home:"ホーム"},home:{user:{head:"ユーザー",body:"Psst, help translate this project",action:"サーチ"},anime:{head:"アニメ"},manga:{head:"マンガ"}}}},function(t,e,a){"use strict";var s=a(3),n=a(142),i=a(141),r=a.n(i),o=a(140),u=a.n(o),l=a(117),c=a.n(l),f=a(119),p=a.n(f),d=a(125),m=a.n(d),v=a(124),g=a.n(v),h=a(115),_=a.n(h),b=a(118),y=a.n(b),$=a(116),C=a.n($),k=a(114),I=a.n(k);s.a.use(n.a),s.a.use(r.a),s.a.use(u.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:c.a},{path:"/@:slug",component:p.a,children:[{path:"",name:"Profile",component:m.a},{path:"library",name:"Library",component:g.a,children:[{path:":status",component:g.a}]}]},{path:"/anime/:query",component:_.a},{path:"/manga/:query",component:y.a},{path:"/bugs",name:"Bugs",component:C.a},{path:"*",component:I.a}]})},function(t,e,a){"use strict";var s=a(3),n=a(144);s.a.use(n.a);var i={user:{},waifu:{},pinnedPost:{},profileLinks:{},favourites:{},anime:{},manga:{}},r={USER:function(t,e){t.user[e[1]]=e[0]},WAIFU:function(t,e){t.waifu[e[1]]=e[0]},PINNEDPOST:function(t,e){t.pinnedPost[e[1]]=e[0]},PROFILELINKS:function(t,e){t.profileLinks[e[1]]=e[0]},FAVOURITES:function(t,e){t.favourites[e[1]]=e[0]},ANIME:function(t,e){t.anime[e[1]]=e[0]},MANGA:function(t,e){t.manga[e[1]]=e[0]}},o={},u=new n.a.Store({state:i,mutations:r,actions:o});e.a=u},,,,function(t,e,a){a(108);var s=a(0)(a(51),a(138),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var s=a(32),n=a.n(s);a.d(e,"a",function(){return i});var i=n.a.create({baseURL:"https://kitsu.io/api/edge/",headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(122),n=a.n(s),i=a(123),r=a.n(i),o=a(120),u=a.n(o);e.default={name:"app",metaInfo:{titleTemplate:"%s | Hibari"},components:{Navbar:n.a,Notice:r.a,Foobar:u.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:{title:"404"}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(9),n=a.n(s);e.default={metaInfo:function(){return{title:""+(this.anime?this.anime.attributes.canonicalTitle:this.query)}},components:{Spinner:n.a},data:function(){return{loading:!1,error:null,query:this.$route.params.query,anime:null}},created:function(){this.checkStore()},methods:{checkStore:function(){this.loading=!0,void 0!==this.$store.state.anime[this.$route.params.query]?(console.info("[HB]: Data retrived from store"),this.displayData(!0)):(console.info("[HB]: Data retrived from API"),this.fetchData())},displayData:function(t,e){this.anime=t?this.$store.state.anime[this.query]:e},fetchData:function(){var t=this;this.error=this.anime=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/anime?filter[slug]="+this.$route.params.query,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json","User-Agent":"hibari"}}).then(function(e){if(t.loading=!1,0===e.body.meta.count)t.error="No anime exists";else{var a=void 0;a=e.body.data[0],t.$store.commit("ANIME",[a,t.query]),t.displayData(!1,a)}}).catch(function(e){t.error=e.toString()})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{VERSION:"f030f47"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:{titleTemplate:"Hibari - Stats for Kitsu"},data:function(){return{userInput:"",animeInput:"",mangaInput:""}},methods:{slugify:function(t){return t.trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-_]/g,"").toLowerCase()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(9),n=a.n(s);e.default={metaInfo:function(){return{title:""+(this.manga?this.manga.attributes.canonicalTitle:this.query)}},components:{Spinner:n.a},data:function(){return{loading:!1,error:null,query:this.$route.params.query,manga:null}},created:function(){this.checkStore()},methods:{checkStore:function(){this.loading=!0,void 0!==this.$store.state.manga[this.$route.params.query]?(console.info("[HB]: Data retrived from store"),this.displayData(!0)):(console.info("[HB]: Data retrived from API"),this.fetchData())},displayData:function(t,e){this.manga=t?this.$store.state.manga[this.query]:e},fetchData:function(){var t=this;this.error=this.manga=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/manga?filter[slug]="+this.$route.params.query,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json","User-Agent":"hibari"}}).then(function(e){if(t.loading=!1,0===e.body.meta.count)t.error="No manga exists";else{var a=void 0;a=e.body.data[0],t.$store.commit("MANGA",[a,t.query]),t.displayData(!1,a)}}).catch(function(e){t.error=e.toString()})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(65),n=a.n(s),i=a(66),r=a.n(i),o=a(50),u=a(9),l=a.n(u);e.default={metaInfo:function(){return{titleTemplate:(this.user?this.user.attributes.name:this.slug)+"'s %s | Hibari"}},components:{Spinner:l.a},data:function(){return{loading:!1,error:null,slug:this.$route.params.slug,user:null,waifu:null,pinnedPost:null,profileLinks:null,favourites:null}},created:function(){this.checkStore()},methods:{checkStore:function(){void 0!==this.$store.state.user[this.$route.params.slug]?(this.displayData(!0),console.info("[HB]: Data retrived from store")):localStorage.getItem("user-"+this.slug)&&Date.now()-JSON.parse(localStorage.getItem("user-"+this.slug))[0].updated<18e5?(this.user=JSON.parse(localStorage.getItem("user-"+this.slug))[1].user,this.waifu=JSON.parse(localStorage.getItem("user-"+this.slug))[2].waifu[0],this.pinnedPost=JSON.parse(localStorage.getItem("user-"+this.slug))[3].pinnedPost[0],this.profileLinks=JSON.parse(localStorage.getItem("user-"+this.slug))[4].profileLinks,this.favourites=JSON.parse(localStorage.getItem("user-"+this.slug))[5].favourites,console.info("[HB]: Data retrived from local storage")):(this.loading=!0,this.fetchData(),console.info("[HB]: Data retrived from API"))},displayData:function(t,e,a){this.user=t?this.$store.state.user[this.slug]:e,this.waifu=t?this.$store.state.waifu[this.slug][0]:a.waifu[0],this.pinnedPost=t?this.$store.state.pinnedPost[this.slug]:a.pinnedPost[0],this.profileLinks=t?this.$store.state.profileLinks[this.slug]:a.profileLinks,this.favourites=t?this.$store.state.favourites[this.slug]:a.favourites,this.loading=!1},fetchData:function(){var t=this;this.error=this.user=null,o.a.get("users?include=waifu,pinnedPost,profileLinks,favorites.item&fields[characters]=slug,image&fields[manga]=slug,posterImage&fields[anime]=slug,posterImage&filter[name]="+this.$route.params.slug).then(function(e){if(e=e.data,0===e.meta.count)t.error="No user exists";else{var a=void 0,s=void 0,n=void 0,i={};a=e.data[0],n=e.data[0].relationships,s=e.included,i.waifu=[],i.pinnedPost=[],i.profileLinks=[],i.favourites={characters:[],manga:[],anime:[]},null!==n.waifu.data&&s.forEach(function(t){n.waifu.data.id===t.id&&i.waifu.push(t)}),null!==n.pinnedPost.data&&s.forEach(function(t){n.pinnedPost.data.id===t.id&&i.pinnedPost.push(t)}),n.profileLinks.data.forEach(function(t){s.forEach(function(e){t.id===e.id&&i.profileLinks.push(e)})}),n.favorites.data.forEach(function(t){s.forEach(function(e){if(t.id===e.id){var a=e.relationships.item.data.type;i.favourites[a].push(r()(e.attributes,s.filter(function(t){return t.id===e.relationships.item.data.id})))}})}),i.favourites.characters.sort(t.numericSort("favRank")),i.favourites.manga.sort(t.numericSort("favRank")),i.favourites.anime.sort(t.numericSort("favRank")),t.$store.commit("USER",[a,t.slug]),t.$store.commit("WAIFU",[i.waifu,t.slug]),t.$store.commit("PINNEDPOST",[i.pinnedPost,t.slug]),t.$store.commit("PROFILELINKS",[i.profileLinks,t.slug]),t.$store.commit("FAVOURITES",[i.favourites,t.slug]),t.saveToLocalStorage(a,i.waifu,i.pinnedPost,i.profileLinks,i.favourites),t.displayData(!1,a,i)}}).catch(function(e){t.error=e.toString()})},numericSort:function(t){return function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0}},saveToLocalStorage:function(t,e,a,s,i){localStorage.getItem("user-"+this.slug)||localStorage.setItem("user-"+this.slug,n()([{updated:Date.now()},{user:t},{waifu:e},{pinnedPost:a},{profileLinks:s},{favourites:i}],null,"\t"))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{VERSION:"f030f47"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(3);e.default={components:{language:{props:["code"]}},data:function(){var t=this;return{lang:this.$lang,languages:[{code:"EN"},{code:"JA"}],Select:function(e){console.info("[HB]: Language set to "+e),s.a.config.lang=e.toLowerCase(),t.$cookie.set("lang",e.toLowerCase())}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(121),n=a.n(s);e.default={components:{LanguageSwitcher:n.a},computed:{development:function(){return"localhost"===window.location.hostname}},data:function(){return{position:!(!this.$route.params.slug&&!this.$route.params.query)&&(window.pageYOffset||document.documentElement.scrollTop)<100}},methods:{handleScroll:function(t){(this.$route.params.slug||this.$route.params.query)&&(this.position=(window.pageYOffset||document.documentElement.scrollTop)<100)}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){var t=this;window.addEventListener("scroll",function(){setTimeout(t.handleScroll,250)})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t=this;return{show:!0,Hide:function(){t.show=!t.show,t.$cookie.set("notice",t.show,30),t.$cookie.set("noticeID",t.$t("notice.id"),30)}}},computed:{cookie:function(){return this.$cookie.get("notice")},matches:function(){return!(!parseInt(this.$cookie.get("noticeID"))||parseInt(this.$cookie.get("noticeID"))!==parseInt(this.$t("notice.id")))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:{title:"Library"},props:[],data:function(){return{loading:!1,error:null}},methods:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:{title:"Profile"},props:["slug","user","waifu","pinned","profileLinks","favourites"],data:function(){return{loading:!1,error:null,favouritesPanel:"anime"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["message"]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,a){var s=a(0)(a(52),a(130),null,null);t.exports=s.exports},function(t,e,a){a(102);var s=a(0)(a(53),a(132),null,null);t.exports=s.exports},function(t,e,a){a(101);var s=a(0)(a(54),a(131),null,null);t.exports=s.exports},function(t,e,a){a(105);var s=a(0)(a(55),a(135),null,null);t.exports=s.exports},function(t,e,a){a(100);var s=a(0)(a(56),a(129),null,null);t.exports=s.exports},function(t,e,a){a(106);var s=a(0)(a(57),a(136),null,null);t.exports=s.exports},function(t,e,a){a(104);var s=a(0)(a(58),a(134),null,null);t.exports=s.exports},function(t,e,a){a(109);var s=a(0)(a(59),a(139),null,null);t.exports=s.exports},function(t,e,a){a(103);var s=a(0)(a(60),a(133),null,null);t.exports=s.exports},function(t,e,a){a(107);var s=a(0)(a(61),a(137),null,null);t.exports=s.exports},function(t,e,a){a(99);var s=a(0)(a(62),a(128),null,null);t.exports=s.exports},function(t,e,a){a(97);var s=a(0)(a(63),a(126),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.user?a("section",{staticClass:"profile"},[a("div",[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.$t("user.sociability.title")))])]),a("div",{staticClass:"sociability"},[a("div",{staticClass:"card"},[a("p",[t._v(t._s(t.user.attributes.postsCount))]),a("p",[t._v(t._s(t.$t("user.sociability.postsCount")))])]),a("div",{staticClass:"card"},[a("p",[t._v(t._s(t.user.attributes.commentsCount))]),a("p",[t._v(t._s(t.$t("user.sociability.commentsCount")))])]),a("div",{staticClass:"card"},[a("p",[t._v(t._s(t.user.attributes.likesGivenCount))]),a("p",[t._v(t._s(t.$t("user.sociability.likesGivenCount")))])]),a("div",{staticClass:"card"},[a("p",[t._v(t._s(t.user.attributes.likesReceivedCount))]),a("p",[t._v(t._s(t.$t("user.sociability.likesReceivedCount")))])]),a("div",{staticClass:"card"},[a("p",[t._v(t._s(t.user.attributes.followingCount))]),a("p",[t._v(t._s(t.$t("user.sociability.followingCount")))])]),a("div",{staticClass:"card"},[a("p",[t._v(t._s(t.user.attributes.followersCount))]),a("p",[t._v(t._s(t.$t("user.sociability.followersCount")))])])]),t._m(0),a("div",{staticClass:"recent-activity row"},t._l(4,function(t){return a("div",{staticClass:"col-3"},[a("img",{attrs:{src:"//media.kitsu.io/anime/poster_images/11178/small.jpg?1452886316"}})])})),t._m(1),t._m(2),t._m(3),a("details",[a("summary",[t._v("Show")]),t.user?a("pre",[t._v(t._s(t.user))]):t._e()]),t._m(4),a("details",[a("summary",[t._v("Show")]),t.waifu?a("pre",[t._v(t._s(t.waifu))]):a("pre",[t._v("User has no waifu")])]),t._m(5),a("details",[a("summary",[t._v("Show")]),t.pinned?a("pre",[t._v(t._s(t.pinned))]):a("pre",[t._v("User has no pinned post")])]),t._m(6),a("details",[a("summary",[t._v("Show")]),t.profileLinks?a("pre",[t._v(t._s(t.profileLinks))]):a("pre",[t._v("User has no profile links")])]),t._m(7),a("details",[a("summary",[t._v("Show")]),t.favourites?a("pre",[t._v(t._s(t.favourites))]):a("pre",[t._v("User has no favourites")])])]),a("div",{staticClass:"right"},[t._m(8),a("p",{staticClass:"os"},[t._v(t._s(t.user.attributes.about))]),t.waifu?a("p",{staticClass:"waifu"},[t._v(t._s(t.waifu.attributes.name)),a("span",[t._v(t._s(t.user.attributes.waifuOrHusbando))])]):t._e(),t.favourites?a("div",{staticClass:"favourites"},[t._m(9),a("ul",{staticClass:"nav nav-pills nav-justified"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"anime"===t.favouritesPanel},on:{click:function(e){t.favouritesPanel="anime"}}},[t._v("Anime")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"manga"===t.favouritesPanel},on:{click:function(e){t.favouritesPanel="manga"}}},[t._v("Manga")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"characters"===t.favouritesPanel},on:{click:function(e){t.favouritesPanel="characters"}}},[t._v("Characters")])])]),a("div",{staticClass:"tab-content"},["anime"===t.favouritesPanel?a("div",{staticClass:"tab-pane active"},[a("div",{staticClass:"row"},t._l(t.favourites.anime,function(t){return a("div",{staticClass:"col-3"},[a("router-link",{attrs:{to:"/anime/"+t[0].attributes.slug}},[a("img",{attrs:{src:t[0].attributes.posterImage?t[0].attributes.posterImage.small:"/kitsu/default_poster.jpg"}})])],1)}))]):"manga"===t.favouritesPanel?a("div",{staticClass:"tab-pane active"},[a("div",{staticClass:"row"},t._l(t.favourites.manga,function(t){return a("div",{staticClass:"col-3"},[a("router-link",{attrs:{to:"/manga/"+t[0].attributes.slug}},[a("img",{attrs:{src:t[0].attributes.posterImage?t[0].attributes.posterImage.small:"/kitsu/default_poster.jpg"}})])],1)}))]):"characters"===t.favouritesPanel?a("div",{staticClass:"tab-pane active"},[a("div",{staticClass:"row"},t._l(t.favourites.characters,function(t){return a("div",{staticClass:"col-3"},[a("a",[a("img",{attrs:{src:t[0].attributes.image?t[0].attributes.image.original:"/kitsu/default_poster.jpg"}})])])}))]):t._e()])]):t._e()])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("Recent Activity")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("Anime Stats")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("Manga Stats")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("API User")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("API Waifu")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("API Pinned Post")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("API Profile Links")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("API Favourites")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("About Me")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("Favourites")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"},[a("img",{attrs:{src:"/images/loading.gif"}}),a("p",[t._v(t._s(t.message))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"library"},[a("p",[t._v("Whelp")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"anime"},[t.error?a("section",{staticClass:"error"},[t._v("Error: "+t._s(t.error))]):a("section",{staticClass:"content"},[t.manga&&t.manga.attributes.slug===t.query?a("div",{staticClass:"cover",style:{backgroundImage:"url("+t.manga.attributes.coverImage.original+")"}},[t.manga.attributes.posterImage.large?a("img",{attrs:{src:t.manga.attributes.posterImage.large}}):t._e()]):a("div",{staticClass:"cover"}),a("nav",[a("div",[a("a",{attrs:{href:"//kitsu.io/manga/"+t.query,rel:"noopener",target:"_blank"}},[t._v("Kitsu")])])]),t.loading?a("spinner"):t._e(),a("div",{staticClass:"container"},[a("hr"),a("p",[t._v("Manga")]),t.manga?a("pre",[t._v(t._s(t.manga))]):t._e()])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"error"},[a("h1",[t._v("404")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"bugs"},[a("h2",[t._v(t._s(t.$t("bugs.title")))]),a("p",{domProps:{innerHTML:t._s(t.$t("bugs.body"))}}),a("p",[t._v(t._s(t.$t("bugs.requirements")))]),a("pre",[t._v(t._s(t.$t("bugs.include.version"))+" "+t._s(t.VERSION)+"\n"+t._s(t.$t("bugs.include.os"))+"\n"+t._s(t.$t("bugs.include.browser"))+"\n"+t._s(t.$t("bugs.include.browserVer"))+"\n\n"+t._s(t.$t("bugs.include.replicate"))+"\n1.\n2.")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"anime"},[t.error?a("section",{staticClass:"error"},[t._v("Error: "+t._s(t.error))]):a("section",{staticClass:"content"},[t.anime&&t.anime.attributes.slug===t.query?a("div",{staticClass:"cover",style:{backgroundImage:"url("+t.anime.attributes.coverImage.original+")"}},[t.anime.attributes.posterImage.large?a("img",{attrs:{src:t.anime.attributes.posterImage.large}}):t._e()]):a("div",{staticClass:"cover"}),a("nav",[a("div",[a("a",{attrs:{href:"//kitsu.io/anime/"+t.query,rel:"noopener",target:"_blank"}},[t._v("Kitsu")])])]),t.loading?a("spinner"):t._e(),a("div",{staticClass:"container"},[a("hr"),a("p",[t._v("Anime")]),t.anime?a("pre",[t._v(t._s(t.anime))]):t._e()])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:{transparent:t.position}},[a("nav",[a("h1",[t._v(t._s(t.$t("hibari"))),t.development?a("span",[t._v("Dev")]):t._e()]),a("router-link",{attrs:{to:{name:"Home"}}},[t._v(t._s(t.$t("navigation.home")))]),a("router-link",{attrs:{to:{name:"Bugs"}}},[t._v(t._s(t.$t("navigation.bugs")))]),a("language-switcher")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",[a("a",{staticClass:"mr-auto",attrs:{href:"https://github.com/wopian/hibari",rel:"noopener",target:"_blank"}},[t._v("Github")]),a("span",{staticClass:"navbar-text"},[t._v("Version "+t._s(t.VERSION))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home"},[a("section",{staticClass:"user"},[a("div",[a("p",[t._v(t._s(t.$t("home.user.head")))]),a("p",[t._v(t._s(t.$t("home.user.body",{username:t.slugify(t.userInput)||"a user"})))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{placeholder:t.$t("home.user.placeholder"),type:"text"},domProps:{value:t.userInput},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}}),a("router-link",{attrs:{to:"/@"+t.slugify(t.userInput)}},[t._v(t._s(t.$t("home.user.action")))])],1)]),a("section",{staticClass:"anime"},[a("div",[a("p",[t._v(t._s(t.$t("home.anime.head")))]),a("p",[t._v(t._s(t.$t("home.anime.body",{anime:t.slugify(t.animeInput)||"an anime"})))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.animeInput,expression:"animeInput"}],attrs:{placeholder:t.$t("home.anime.placeholder"),type:"text"},domProps:{value:t.animeInput},on:{input:function(e){e.target.composing||(t.animeInput=e.target.value)}}}),a("router-link",{attrs:{to:"/anime/"+t.slugify(t.animeInput)}},[t._v(t._s(t.$t("home.anime.action")))])],1)]),a("section",{staticClass:"manga"},[a("div",[a("p",[t._v(t._s(t.$t("home.manga.head")))]),a("p",[t._v(t._s(t.$t("home.manga.body",{manga:t.slugify(t.mangaInput)||"a manga"})))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.mangaInput,expression:"mangaInput"}],attrs:{placeholder:t.$t("home.manga.placeholder"),type:"text"},domProps:{value:t.mangaInput},on:{input:function(e){e.target.composing||(t.mangaInput=e.target.value)}}}),a("router-link",{attrs:{to:"/manga/"+t.slugify(t.mangaInput)}},[t._v(t._s(t.$t("home.manga.action")))])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"user"},[t.error?a("section",{staticClass:"error"},[t._v("Error: "+t._s(t.error))]):a("section",{staticClass:"content"},[t.user?a("div",{staticClass:"cover",style:{backgroundImage:"url("+(t.user.attributes.coverImage?t.user.attributes.coverImage.original:"/kitsu/default_cover.png")+")"}},[a("div",{staticClass:"container"},[a("img",{attrs:{src:t.user.attributes.avatar?t.user.attributes.avatar.large:"/kitsu/default_avatar.png"}}),a("div",[a("h2",[t._v(t._s(t.user.attributes.name)),t.user.attributes.title?a("span",[t._v(t._s(t.user.attributes.title))]):t._e()]),a("a",{attrs:{href:"//kitsu.io/users/"+t.slug,rel:"noopener",target:"_blank"}},[t._v(t._s(t.$t("user.kitsuProfile")))])])])]):a("div",{staticClass:"cover",style:{backgroundImage:"url(/kitsu/default_cover.png)"}},[a("div",{staticClass:"container"},[a("img",{attrs:{src:"/kitsu/default_avatar.png"}}),a("div",[a("h2",[t._v(t._s(t.slug))]),a("a",{attrs:{href:"//kitsu.io/users/"+t.slug,rel:"noopener",target:"_blank"}},[t._v(t._s(t.$t("user.kitsuProfile")))])])])]),a("nav",[a("div",[a("router-link",{attrs:{to:{name:"Profile"},exact:"exact"}},[t._v(t._s(t.$t("user.navigation.profile")))]),a("router-link",{attrs:{to:{name:"Library"},exact:"exact"}},[t._v(t._s(t.$t("user.navigation.library")))])],1)]),a("router-view",{attrs:{slug:t.slug,user:t.user,waifu:t.waifu,pinned:t.pinnedPost,"profile-links":t.profileLinks,favourites:t.favourites}}),t.loading?a("spinner",{attrs:{message:t.$t("loader.collectingData")}}):t._e()],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show&&!t.matches||!t.cookie?a("section",{staticClass:"notice"},[a("div",[a("button",{on:{click:function(e){t.Hide()}}},[a("span",[t._v("×")])]),a("div",[a("p",{domProps:{innerHTML:t._s(t.$t("notice.content"))}})])])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view"),a("foobar"),a("notice")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"switcher"},t._l(t.languages,function(e){return a("button",{on:{click:function(a){t.Select(e.code)}}},[t._v(t._s(e.code))])}))},staticRenderFns:[]}},,,,,,function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(27),n=a.n(s),i=a(3),r=a(30),o=a.n(r),u=a(29),l=a.n(u),c=a(28),f=a.n(c),p=a(31),d=(a.n(p),a(25)),m=a(26),v=a(23),g=a(24),h={en:v.a,ja:g.a};a.i(p.sync)(m.a,d.a),i.a.use(f.a),i.a.use(l.a),i.a.config.lang=i.a.cookie.get("lang")?i.a.cookie.get("lang"):"en",i.a.config.fallbackLang="en",n()(h).forEach(function(t){i.a.locale(t,h[t])}),new i.a({el:"#app",router:d.a,store:m.a,render:function(t){return t(o.a)}})}],[146]);
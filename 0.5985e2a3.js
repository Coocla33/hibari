webpackJsonp([0],{53:function(t,e,s){s(68);var r=s(0)(s(63),s(71),null,null);t.exports=r.exports},54:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"set-title",props:["title"],created:function(){document.title=this.title},watch:{title:function(){document.title=this.title}},render:function(){}}},55:function(t,e,s){e=t.exports=s(48)(),e.push([t.i,".loader{height:40px;width:40px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.loader svg path,.loader svg rect{fill:#000}","",{version:3,sources:["/./client/components/Spinner.vue"],names:[],mappings:"AACA,QAAQ,YAAY,WAAW,kBAAkB,QAAQ,SAAS,8BAA+B,CAChG,AACD,kCAAkC,SAAS,CAC1C",file:"Spinner.vue",sourcesContent:["\n.loader{height:40px;width:40px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)\n}\n.loader svg path,.loader svg rect{fill:#000\n}\n"],sourceRoot:"webpack://"}])},56:function(t,e,s){var r=s(55);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s(49)("37e7aaf2",r,!0)},57:function(t,e,s){var r=s(0)(s(54),null,null,null);t.exports=r.exports},58:function(t,e,s){s(56);var r=s(0)(null,s(59),null,null);t.exports=r.exports},59:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loader"},[s("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[s("path",{attrs:{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"}},[s("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])])},staticRenderFns:[]}},63:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(58),n=s.n(r),i=s(57),a=s.n(i);e.default={components:{Spinner:n.a,SetTitle:a.a},data:function(){return{loading:!1,user:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.user=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/users?filter[name]="+this.$route.params.id,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json","User-Agent":"hibari"}}).then(function(e){t.loading=!1,0===e.body.meta.count?t.error="No user exists":t.user=e.body.data[0]}).catch(function(e){t.error=e.toString()})}}}},65:function(t,e,s){e=t.exports=s(48)(),e.push([t.i,"pre{font-size:50%}","",{version:3,sources:["/./client/views/User.vue"],names:[],mappings:"AACA,IAAI,aAAa,CAChB",file:"User.vue",sourcesContent:["\npre{font-size:50%\n}\n"],sourceRoot:"webpack://"}])},68:function(t,e,s){var r=s(65);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s(49)("7c039226",r,!0)},71:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"user"},[s("h1",[t._v("User")]),t._v(" "),t.loading?s("spinner"):t._e(),t._v(" "),t.error?s("div",{staticClass:"error"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),t.user?s("div",{staticClass:"content"},[s("set-title",{attrs:{title:t.user.attributes.name+" - Hibari"}}),t._v(" "),s("p",[t._v(t._s(t.$route.params.id))]),t._v(" "),s("pre",[t._v("\nID: "+t._s(t.user.id)+"\nName: "+t._s(t.user.attributes.name)+"\nPast Names: "+t._s(t.user.attributes.pastNames)+"\n"),t._v("\nLocation: "+t._s(t.user.attributes.location)+"\nWaifu? "+t._s(t.user.attributes.waifuOrHusbando)+"\nFollowers: "+t._s(t.user.attributes.followersCount)+"\nFollowing: "+t._s(t.user.attributes.followingCount)+"\nJoined: "+t._s(t.user.attributes.createdAt)+"\nFacebook: https://facebook.com/"+t._s(t.user.attributes.facebookId)+"\nLife Spent on Anime: "+t._s(t.user.attributes.lifeSpentOnAnime)+"\nBirthday: "+t._s(t.user.attributes.birthday)+"\nGender: "+t._s(t.user.attributes.gender)+"\nLast Updated: "+t._s(t.user.attributes.updatedAt)+"\nFavourites: "+t._s(t.user.attributes.favouritesCount)+"\nRatings: "+t._s(t.user.attributes.ratingsCount)+"\nPosts: "+t._s(t.user.attributes.postsCount)+"\nComments: "+t._s(t.user.attributes.commentsCount)+"\nLikes Given: "+t._s(t.user.attributes.likesGivenCount)+"\nLikes Received: "+t._s(t.user.attributes.likesReceivedCount)+"\nReviews: "+t._s(t.user.attributes.reviewsCount)+"\nPro: "+t._s(t.user.attributes.proExpiresAt)+"\n      ")]),t._v(" "),s("img",{attrs:{src:t.user.attributes.avatar.large}}),t._v(" "),s("img",{attrs:{src:t.user.attributes.coverImage.original}})],1):t._e()],1)},staticRenderFns:[]}}});
(function(t){function e(e){for(var o,s,l=e[0],r=e[1],c=e[2],p=0,d=[];p<l.length;p++)s=l[p],a[s]&&d.push(a[s][0]),a[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var r=n[l];0!==a[r]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/lost-and-found-admin/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07e9":function(t,e,n){},"15a9":function(t,e,n){"use strict";var o=n("f6ff"),a=n.n(o);a.a},"1e22":function(t,e,n){},"3f13":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s={name:"app",created:function(){}},l=s,r=(n("5c0b"),n("2877")),c=Object(r["a"])(l,a,i,!1,null,null,null),u=c.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-aside",{staticClass:"aside",attrs:{width:"200px"}},[n("el-menu",{attrs:{"background-color":"coral","text-color":"white","active-text-color":"#ffd04b","default-active":t.active},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:t.route_index_map.notice}},[t._v("公告管理")]),n("el-menu-item",{attrs:{index:t.route_index_map.lost}},[t._v("失物招领管理")]),n("el-menu-item",{attrs:{index:t.route_index_map.found}},[t._v("寻物启事管理")]),n("el-menu-item",{attrs:{index:t.route_index_map.people}},[t._v("寻人启事管理")]),n("el-menu-item",{attrs:{index:t.route_index_map.user}},[t._v("用户管理")])],1)],1),n("el-main",[n("el-card",[n("router-view")],1)],1)],1)},f=[],m=(n("28a5"),n("cebc")),g=n("2f62"),h={name:"home",data:function(){return{route_index_map:{notice:"1",lost:"2",found:"3",people:"4",user:"5"},active:"1"}},mounted:function(){this.computed_active()},computed:Object(m["a"])({},Object(g["b"])({isLogin:"isLogin"})),methods:{computed_active:function(){var t=this.$route.path,e=t.split("/").pop(),n=this.route_index_map[e];this.active=n||"1"},handleSelect:function(t,e){switch(t!==this.active&&(this.active=t),t){case this.route_index_map.notice:this.$router.push({name:"notice"});break;case this.route_index_map.lost:this.$router.push({name:"post",params:{type:"lost"}});break;case this.route_index_map.found:this.$router.push({name:"post",params:{type:"found"}});break;case this.route_index_map.people:this.$router.push({name:"post",params:{type:"people"}});break;case this.route_index_map.user:this.$router.push({name:"user"})}}}},_=h,v=(n("5f6a"),Object(r["a"])(_,d,f,!1,null,"16324770",null)),b=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"login-form",attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{attrs:{span:8}},[n("el-card",[n("el-form",{attrs:{model:t.loginModel}},[n("el-form-item",{attrs:{label:"账号"}},[n("el-input",{attrs:{placeholder:"请输入账号"},model:{value:t.loginModel.login,callback:function(e){t.$set(t.loginModel,"login",e)},expression:"loginModel.login"}})],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.loginModel.password,callback:function(e){t.$set(t.loginModel,"password",e)},expression:"loginModel.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.login()}}},[t._v("登陆")])],1)],1)],1)],1)],1)},x=[],w=n("bc3a"),$=n.n(w),C=n("4328"),k=n.n(C);function j(t){return t.then(function(t){return 200===t.data.code?Promise.resolve(t.data.data):Promise.reject(t.data)},t.reject)}$.a.defaults.headers.common["Content-Type"]="application/json",$.a.defaults.withCredentials=!0,$.a.defaults.baseURL="/api";var D={user:{login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"admin";return j($.a.post("/user/login",k.a.stringify({login:t,password:e,role:n})))},register:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return j($.a.post("/user/register",k.a.stringify({login:t,password:n,email:o,nickname:e})))},get_users:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return j($.a.get("/user/",{params:{page:t,per_page:e}}))},delete_user:function(t){return j($.a.delete("/user/"+t))}},post:{get_posts:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return j($.a.get("/post",{params:{page:e,per_page:n,type:t}}))},get_post:function(t){return j($.a.get("/post/"+t))},delete_post:function(t){return j($.a.delete("/post/"+t))}},notice:{get_all_notice:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return j($.a.get("/notice"))},get_notice:function(t){return j($.a.get("/notice"+t))},delete_notice:function(t){return j($.a.delete("/notice/"+t))},post_notice:function(t,e){return j($.a.post("/notice",{title:t,content:e}))},put_notice:function(t,e,n){return j($.a.put("/notice/"+t,{title:e,content:n}))}}},S=D,O="UPDATE_USER",M="USER",E={name:"login",data:function(){return{loginModel:{login:"",password:""}}},methods:{login:function(){var t=this;console.log("login"),S.user.login(this.loginModel.login,this.loginModel.password).then(function(e){console.log("data ->",e),t.$store.commit(O,e),t.$message.success("登陆成功"),t.$router.push({name:"home"})}).catch(function(e){401===e.code&&t.$message.error("用户名或密码不正确"),console.log(e)})}}},P=E,Y=(n("15a9"),Object(r["a"])(P,y,x,!1,null,"1e03cf3e",null)),N=Y.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"ID",prop:"id",width:"180"}}),n("el-table-column",{attrs:{label:"账号",prop:"login",width:"180"}}),n("el-table-column",{attrs:{label:"昵称",prop:"nickname",width:"240"}}),n("el-table-column",{attrs:{label:"用户类型",prop:"role",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(t.map_type[e.row.role]))])]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.deletcUser(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticStyle:{height:"10px"}}),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.pagination.total_num,"page-count":t.pagination.total_page,"page-size":t.pagination.current_num,"current-page":t.pagination.current_page},on:{"current-change":t.handleCurrentChange}})],1)},H=[],z={name:"user",data:function(){return{map_type:{admin:"管理员",user:"一般用户"},tableData:[],pagination:{}}},mounted:function(){this.get_users()},watch:{$route:function(t,e){this.init(),this.get_users()}},methods:{init:function(){this.$set(this,"tableData",[])},handleCurrentChange:function(t){this.get_users(t,1)},get_users:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;S.user.get_users(e,n).then(function(e){t.$set(t,"tableData",e.data),t.pagination=e.pagination})},deletcUser:function(t,e){var n=this;S.user.delete_user(e.id).then(function(e){console.log(e),n.tableData.splice(t,1),n.$message.success("删除成功")}).catch(function(t){n.$message.error("删除失败")})}}},L=z,J=Object(r["a"])(L,U,H,!1,null,null,null),I=J.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticClass:"opera",attrs:{type:"flex",justify:"start"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.createNotice}},[t._v("新增")])],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"日期",prop:"updated_time",width:"180"}}),n("el-table-column",{attrs:{label:"标题",prop:"title",width:"180"}}),n("el-table-column",{attrs:{label:"内容",prop:"content",width:"240"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.deletcNotice(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),n("el-dialog",{attrs:{title:t.dialog.title,visible:t.dialog.visible},on:{"update:visible":function(e){return t.$set(t.dialog,"visible",e)}}},[n("el-form",{attrs:{model:t.notice}},[n("el-form-item",{attrs:{label:"标题"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.notice.title,callback:function(e){t.$set(t.notice,"title",e)},expression:"notice.title"}})],1),n("el-form-item",{attrs:{label:"内容"}},[n("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.notice.content,callback:function(e){t.$set(t.notice,"content",e)},expression:"notice.content"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.noticeFormVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCommit(t.notice)}}},[t._v("确 定")])],1)],1)],1)},R=[],A=n("5a0c"),F=n.n(A),V={name:"notice",data:function(){return{tableData:[],notice:{id:null,title:"",content:""},dialog:{visible:!1,currentEdit:-1,title:""}}},mounted:function(){this.getNotices()},methods:{handleEdit:function(t,e){this.notice=JSON.parse(JSON.stringify(e)),this.dialog.currentEdit=t,this.dialog.visible=!0,this.dialog.title="修改公告"},getNotices:function(){var t=this;S.notice.get_all_notice().then(function(e){console.log(e);for(var n=0;n<e.length;n++)e[n].updated_time=F()(1e3*e[n].updated_time).format("YYYY-MM-DD HH:mm:ss");t.$set(t,"tableData",e)}).catch(function(t){console.log(t)})},deletcNotice:function(t,e){var n=this;S.notice.delete_notice(e.id).then(function(e){n.tableData.splice(t,1),n.$message.success("删除成功")}).catch(function(t){n.$message.error("删除失败")})},createNotice:function(){this.notice={title:"",content:""},this.dialog.currentEdit=-1,this.dialog.visible=!0,this.dialog.title="发布公告"},post_notice:function(t){var e=this;S.notice.post_notice(t.title,t.content).then(function(t){t.updated_time=F()(1e3*t.updated_time).format("YYYY-MM-DD HH:mm:ss"),e.tableData.unshift(t),e.$message.success("修改成功")}).catch(function(t){console.error(t),e.$message.error("修改失败")}).then(function(){e.dialog.visible=!1})},put_notice:function(t){var e=this;S.notice.put_notice(t.id,t.title,t.content).then(function(t){t.updated_time=F()(1e3*t.updated_time).format("YYYY-MM-DD HH:mm:ss"),e.$set(e.tableData,e.currentEdit,t),e.$message.success("修改成功")}).catch(function(t){console.error(t),e.$message.success("修改失败")}).then(function(){e.dialog.visible=!1})},handleCommit:function(t){-1!==this.currentEdit?this.put_notice(t):this.post_notice(t)}}},q=V,B=(n("8f2e"),Object(r["a"])(q,T,R,!1,null,"1dcd8723",null)),G=B.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"日期",prop:"updated_time",width:"180"}}),n("el-table-column",{attrs:{label:"标题",prop:"title",width:"180"}}),n("el-table-column",{attrs:{label:"联系人",prop:"contact",width:"240"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.handleCat(e.$index,e.row)}}},[t._v("查看")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.deletcPost(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticStyle:{height:"10px"}}),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.pagination.total_num,"page-count":t.pagination.total_page,"page-size":t.pagination.current_num,"current-page":t.pagination.current_page},on:{"current-change":t.handleCurrentChange}})],1)},Q=[],W={name:"lost",data:function(){return{tableData:[],post:{},dialog:{visible:!1,title:""},pagination:{current_num:0,current_page:0,total_num:0,total_page:0}}},mounted:function(){console.log("prop type ->",this.$route.params),this.getPosts(1,1)},watch:{$route:function(t,e){this.init(),this.getPosts()}},methods:{init:function(){this.$set(this,"tableData",[]),this.pagination={current_num:0,current_page:0,total_num:0,total_page:0}},handleCat:function(t,e){this.$router.push({name:"postDetail",params:{id:e.id}})},getPosts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;S.post.get_posts(this.$route.params.type,e,n).then(function(e){for(var n=e.data,o=0;o<n.length;o++)n[o].updated_time=F()(1e3*n[o].updated_time).format("YYYY-MM-DD HH:mm:ss");t.$set(t,"tableData",n),t.pagination=e.pagination}).catch(function(t){console.log(t)})},deletcPost:function(t,e){var n=this;S.post.delete_post(e.id).then(function(e){console.log(e),n.tableData.splice(t,1),n.$message.success("删除成功")}).catch(function(t){console.log(t),n.$message.error("删除失败")})},handleCommit:function(t){-1!==this.currentEdit?this.put_notice(t):this.post_notice(t)},handleCurrentChange:function(t){this.getPosts(t,1)}}},X=W,Z=Object(r["a"])(X,K,Q,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:18}},[n("el-card",[n("h1",[t._v(t._s(t.post.title))]),n("el-row",{attrs:{type:"flex",justify:"start",align:"middle"}},[n("el-col",{staticClass:"text-left",attrs:{span:4}},[n("el-tag",[t._v("联系人")])],1),n("el-col",{staticClass:"text-left",attrs:{span:6,offset:1}},[t._v(t._s(t.post.contact))])],1),n("div",{staticClass:"divider"}),n("el-row",{attrs:{type:"flex",justify:"start",align:"middle"}},[n("el-col",{staticClass:"text-left",attrs:{span:4}},[n("el-tag",[t._v("电话")])],1),n("el-col",{staticClass:"text-left",attrs:{offset:1,span:6}},[t._v(t._s(t.post.phone))])],1),n("div",{staticClass:"divider"}),n("el-row",{attrs:{type:"flex",align:"middle",justify:"start"}},[n("el-col",{staticClass:"text-left",attrs:{span:4}},[n("el-tag",[t._v("更新时间")])],1),n("el-col",{staticClass:"text-left",attrs:{offset:1,span:8}},[t._v(t._s(t.post.updated_time))])],1),n("div",{staticClass:"divider"}),n("el-row",{attrs:{type:"flex",align:"middle",justify:"start"}},[n("el-col",{staticClass:"text-left",attrs:{span:4}},[n("el-tag",[t._v("文章类型")])],1),n("el-col",{staticClass:"text-left",attrs:{offset:1,span:8}},[t._v(t._s(t.map_type[t.post.type]))])],1),n("div",{staticClass:"divider"}),n("el-card",[t._v(t._s(t.post.content))]),t.hasImg?n("div",[n("div",{staticClass:"divider"}),n("el-image",{attrs:{src:t.post.image}})],1):t._e()],1)],1)],1)},nt=[],ot={name:"post_detail",data:function(){return{map_type:{lost:"寻物启事",found:"失物招领",people:"寻人启事"},post:{}}},computed:{hasImg:function(){return this.post&&null!==this.post.image&&this.post.image.length>0}},mounted:function(){this.get_post()},methods:{get_post:function(){var t=this;console.log("params",this.$route.params),S.post.get_post(this.$route.params.id).then(function(e){t.post=e}).catch(function(t){return console.error})}}},at=ot,it=(n("7e45"),Object(r["a"])(at,et,nt,!1,null,null,null)),st=it.exports;o["default"].use(p["a"]);var lt=new p["a"]({routes:[{path:"/",name:"home",component:b,children:[{path:"",component:G},{path:"/notice",name:"notice",component:G},{path:"/post/:type",name:"post",component:tt},{path:"/user",name:"user",component:I}]},{path:"/post/detail/:id",name:"postDetail",component:st},{path:"/login",name:"login",component:N}]}),rt=lt,ct=n("bd86");o["default"].use(g["a"]);var ut=new g["a"].Store({state:{isLogin:!1,user:{}},mutations:Object(ct["a"])({},O,function(t,e){console.log(O,e),t.user=e,localStorage.setItem(M,JSON.stringify(e)),t.isLogin=!0}),actions:{loadUser:function(t){console.log("loadUser",t);var e=JSON.parse(localStorage.getItem(M));null!==e&&t.commit(O,e)}}}),pt=n("5c96"),dt=n.n(pt);n("0fae"),n("e9ff"),n("c2b1");o["default"].use(dt.a),o["default"].config.productionTip=!1,ut.dispatch("loadUser"),rt.beforeEach(function(t,e,n){console.log("to -> ",t),console.log("login state ",ut.state.isLogin),"/login"!==t.fullPath&&!1===ut.state.isLogin?n("/login"):n()}),new o["default"]({router:rt,store:ut,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(t,e,n){},"5f6a":function(t,e,n){"use strict";var o=n("07e9"),a=n.n(o);a.a},"7e45":function(t,e,n){"use strict";var o=n("3f13"),a=n.n(o);a.a},"8f2e":function(t,e,n){"use strict";var o=n("1e22"),a=n.n(o);a.a},c2b1:function(t,e,n){},e9ff:function(t,e,n){},f6ff:function(t,e,n){}});
//# sourceMappingURL=app.331b2c5c.js.map
import{c as C,b as x,e as F,_ as E,u as U,d as $,f as I,h as N}from"./user-D2yX1KCw.js";import{T as P,g as L}from"./index-DaOWYUs9.js";import{I as V}from"./index-HL7W80wQ.js";import{_ as D}from"./UserDrawer.vuevuetypescriptsetuptruenameUserDrawerlang-C8bR0UYD.js";import{S,v as B,V as M,P as R}from"./@element-plus-b0mvxhbE.js";import{d as v,E as q}from"./element-plus-BMLDilJf.js";import{d as g,f as H,r as i,Z as A,U as t,F as G,ah as K,o as O,c as Z,a as j,O as l,u as s,S as m}from"./@vue-CsViAIeL.js";import"./notData-CvMaLoqa.js";import"./index-QuK0x8D1.js";import"./vue-i18n-CldGudpF.js";import"./@intlify-BrbEMGpa.js";import"./vue-uxj3NNEf.js";import"./pinia-j-FaXOu-.js";import"./axios-B4uVmeYG.js";import"./vue-router-eHVeVfd6.js";import"./nprogress-CN1HEpHx.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./lodash-es-CiJSjksT.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DWeX12Kw.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B55MhO6l.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./print-js-t3lAMS30.js";const z={class:"main-box"},J={class:"table-box"},Q=g({name:"treeProTable"}),xe=g({...Q,setup(W){H(()=>{w(),v({title:"温馨提示",message:"该页面 ProTable 数据不会自动请求，需等待 treeFilter 数据请求完成之后，才会触发表格请求。",type:"info",duration:1e4}),setTimeout(()=>{v({title:"温馨提示",message:"该页面 ProTable 性别搜索框为远程数据搜索，详情可查看代码。",type:"info",duration:1e4})},0)});const n=i(),p=A({departmentId:""}),d=i([]),w=async()=>{const{data:e}=await C();d.value=e,p.departmentId=d.value[1].id},T=e=>{q.success("请注意查看请求参数变化 🤔"),n.value.pageable.pageNum=1,p.departmentId=e},u=i(!1),c=i([]),h=e=>{c.value.length=0,e&&(u.value=!0,setTimeout(()=>{u.value=!1,c.value.push(...L.filter(r=>r.label.includes(e)))},500))},y=[{type:"index",label:"#",width:80},{prop:"username",label:"用户姓名"},{prop:"gender",label:"性别",sortable:!0,isFilterEnum:!1,enum:c.value,search:{el:"select",props:{placeholder:"请输入性别查询",filterable:!0,remote:!0,reserveKeyword:!0,loading:u,remoteMethod:h}},render:e=>t(G,null,[e.row.gender===1?"男":"女"])},{prop:"idCard",label:"身份证号"},{prop:"email",label:"邮箱"},{prop:"address",label:"居住地址"},{prop:"status",label:"用户状态",sortable:!0,tag:!0,enum:x,search:{el:"tree-select"},fieldNames:{label:"userLabel",value:"userStatus"}},{prop:"createTime",label:"创建时间",width:180},{prop:"operation",label:"操作",width:300,fixed:"right"}],k=async e=>{await U($,{id:[e.id]},`删除【${e.username}】用户`),n.value.getTableList()},_=i(null),f=(e,r={})=>{var a;const o={title:e,row:{...r},isView:e==="查看",api:e==="新增"?I:e==="编辑"?N:void 0,getTableList:n.value.getTableList};(a=_.value)==null||a.acceptParams(o)};return(e,r)=>{const o=K("el-button");return O(),Z("div",z,[t(P,{label:"name",title:"部门列表(单选)",data:d.value,"default-value":p.departmentId,onChange:T},null,8,["data","default-value"]),j("div",J,[t(E,{ref_key:"proTable",ref:n,title:"用户列表","row-key":"id",indent:30,columns:y,"request-api":s(F),"request-auto":!1,"init-param":p,"search-col":{xs:1,sm:1,md:2,lg:3,xl:3}},{tableHeader:l(()=>[t(o,{type:"primary",icon:s(S),onClick:r[0]||(r[0]=a=>f("新增"))},{default:l(()=>[m("新增用户")]),_:1},8,["icon"])]),operation:l(a=>[t(o,{type:"primary",link:"",icon:s(B),onClick:b=>f("查看",a.row)},{default:l(()=>[m("查看")]),_:2},1032,["icon","onClick"]),t(o,{type:"primary",link:"",icon:s(M),onClick:b=>f("编辑",a.row)},{default:l(()=>[m("编辑")]),_:2},1032,["icon","onClick"]),t(o,{type:"primary",link:"",icon:s(R),onClick:b=>k(a.row)},{default:l(()=>[m("删除")]),_:2},1032,["icon","onClick"])]),_:1},8,["request-api","init-param"]),t(D,{ref_key:"drawerRef",ref:_},null,512),t(V,{ref:"dialogRef"},null,512)])])}}});export{xe as default};
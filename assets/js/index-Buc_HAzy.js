import{g as S,_ as T,a as L,b as N,u as d,d as p,r as $}from"./user-D4uOcHZT.js";import{d as f,r as D,v as u,o as R,c as U,k as n,w as a,u as i,B,g as c,C as E,D as m,t as V,G as A,b as H,H as b}from"./index-BPbcnTcR.js";import"./notData-CvMaLoqa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const P={class:"table-box"},q=H("span",{style:{color:"var(--el-color-primary)"}},"我是插入在表格最后的内容。若表格有合计行，该内容会位于合计行之上。",-1),G=f({name:"complexProTable"}),J=f({...G,setup(M){const l=D(),_=[{type:"selection",fixed:"left",width:80},{type:"index",label:"#",width:80},{type:"expand",label:"Expand",width:100},{prop:"base",label:"基本信息",headerRender:e=>n(u("el-button"),{type:"primary",onClick:()=>{b.success("我是通过 tsx 语法渲染的表头")}},{default:()=>[e.label]}),_children:[{prop:"username",label:"用户姓名",width:110},{prop:"user.detail.age",label:"年龄",width:100},{prop:"gender",label:"性别",width:100,enum:L,fieldNames:{label:"genderLabel",value:"genderValue"}},{prop:"details",label:"详细资料",_children:[{prop:"idCard",label:"身份证号"},{prop:"email",label:"邮箱"},{prop:"address",label:"居住地址"}]}]},{prop:"status",label:"用户状态",tag:!0,enum:N,fieldNames:{label:"userLabel",value:"userStatus"}},{prop:"createTime",label:"创建时间",width:200},{prop:"operation",label:"操作",fixed:"right",width:230}],w=()=>{l.value.element.setCurrentRow(l.value.tableData[4])},h=e=>{const{columns:r}=e,t=[];return r.forEach((s,o)=>{if(o===0)return t[o]="合计";t[o]="N/A"}),t},g=({rowIndex:e,columnIndex:r})=>{if(r===3)return e%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},y=({rowIndex:e})=>e===2?"warning-row":e===6?"success-row":"",C=(e,r)=>{r.property!="operation"&&b.success("当前行被点击了！")},k=async e=>{await d(p,{id:[e.id]},`删除【${e.username}】用户`),l.value.getTableList()},v=async e=>{await d(p,{id:e},"删除所选用户信息"),l.value.clearSelection(),l.value.getTableList()},x=async e=>{await d($,{id:e.id},`重置【${e.username}】用户密码`),l.value.getTableList()};return(e,r)=>{const t=u("el-button");return R(),U("div",P,[n(T,{ref_key:"proTable",ref:l,title:"用户列表","highlight-current-row":"",columns:_,"request-api":i(S),"row-class-name":y,"span-method":g,"show-summary":!0,"summary-method":h,onRowClick:C},{tableHeader:a(s=>[n(t,{type:"primary",icon:i(B),onClick:r[0]||(r[0]=o=>l.value.element.toggleAllSelection())},{default:a(()=>[c("全选 / 全不选")]),_:1},8,["icon"]),n(t,{type:"primary",icon:i(E),plain:"",onClick:w},{default:a(()=>[c("选中第五行")]),_:1},8,["icon"]),n(t,{type:"danger",icon:i(m),plain:"",onClick:o=>v(s.selectedListIds),disabled:!s.isSelected},{default:a(()=>[c(" 批量删除用户 ")]),_:2},1032,["icon","onClick","disabled"])]),expand:a(s=>[c(V(s.row),1)]),operation:a(s=>[n(t,{type:"primary",link:"",icon:i(A),onClick:o=>x(s.row)},{default:a(()=>[c("重置密码")]),_:2},1032,["icon","onClick"]),n(t,{type:"primary",link:"",icon:i(m),onClick:o=>k(s.row)},{default:a(()=>[c("删除")]),_:2},1032,["icon","onClick"])]),append:a(()=>[q]),_:1},8,["request-api"])])}}});export{J as default};

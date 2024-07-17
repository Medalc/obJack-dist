import{r as V}from"./index-QuK0x8D1.js";import{r as e,d as R,f as k,A as z,o as H,c as Y,a as o,T as O,u as j,bm as L,bk as P}from"./@vue-CsViAIeL.js";import{_ as U}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./vue-i18n-CldGudpF.js";import"./@intlify-BrbEMGpa.js";import"./vue-uxj3NNEf.js";import"./pinia-j-FaXOu-.js";import"./element-plus-BMLDilJf.js";import"./lodash-es-CiJSjksT.js";import"./@element-plus-b0mvxhbE.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DWeX12Kw.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B55MhO6l.js";import"./axios-B4uVmeYG.js";import"./vue-router-eHVeVfd6.js";import"./nprogress-CN1HEpHx.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";const C=()=>{const l=e(0),r=e(0),c=e(""),s=e(0),a=e(0),m=e(0),i=e(0),v=e("");return(()=>{const t=new Date;l.value=t.getFullYear(),r.value=t.getMonth()+1,c.value="日一二三四五六".charAt(t.getDay()),s.value=t.getDate(),a.value=(t.getHours()+"").padStart(2,"0")||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(t.getHours()),m.value=(t.getMinutes()+"").padStart(2,"0")||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(t.getMinutes()),i.value=(t.getSeconds()+"").padStart(2,"0")||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(t.getSeconds()),v.value=`${l.value}年${r.value}月${s.value} ${a.value}:${m.value}:${i.value}`})(),{year:l,month:r,day:s,hour:a,minute:m,second:i,week:c,nowTime:v}},f=l=>(L("data-v-dd2a43cd"),l=l(),P(),l),W={class:"dataScreen-container"},q={class:"dataScreen-header"},G=f(()=>o("div",{class:"header-ct"},[o("div",{class:"header-ct-title"},[o("span",null,"智慧旅游可视化大数据展示平台"),o("div",{class:"header-ct-warning"},"平台高峰预警信息（2条）")])],-1)),J={class:"header-rg"},K=f(()=>o("span",{class:"header-download"},"统计报告",-1)),Q={class:"header-time"},X=f(()=>o("div",{class:"dataScreen-main"},null,-1)),Z=R({name:"dataScreen"}),ee=R({...Z,setup(l){const r=e(null);k(()=>{r.value&&(r.value.style.transform=`scale(${c()}) translate(-50%, -50%)`,r.value.style.width="1920px",r.value.style.height="1080px"),B(),window.addEventListener("resize",s)});const c=(n=1920,u=1080)=>{let d=window.innerWidth/n,p=window.innerHeight/u;return d<p?d:p},s=()=>{r.value&&(r.value.style.transform=`scale(${c()}) translate(-50%, -50%)`),Object.values(a).forEach(n=>{n&&n.resize()})},a={chart1:null,chart2:null,chart3:null,chart4:null,chart5:null,chart6:null,chart7:null,mapChart:null},m=e(),i=e(),v=e(),g=e(),t=e(),x=e(),I=e(),y=e();let A=[{value:200,name:"10岁以下",percentage:"16%"},{value:110,name:"10 - 18岁",percentage:"8%"},{value:150,name:"18 - 30岁",percentage:"12%"},{value:310,name:"30 - 40岁",percentage:"24%"},{value:250,name:"40 - 60岁",percentage:"20%"},{value:260,name:"60岁以上",percentage:"20%"}],E=[{value:79999,name:"峨眉山",percentage:"80%",maxValue:1e5},{value:59999,name:"稻城亚丁",percentage:"60%",maxValue:1e5},{value:49999,name:"九寨沟",percentage:"50%",maxValue:1e5},{value:39999,name:"万里长城",percentage:"40%",maxValue:1e5},{value:29999,name:"北京故宫",percentage:"30%",maxValue:1e5}],T=[{value:40,name:"智慧文旅平台",percentage:"40%"},{value:10,name:"携程",percentage:"10%"},{value:20,name:"飞猪",percentage:"20%"},{value:30,name:"其他渠道",percentage:"30%"}],_=[{label:new Date().getFullYear()-2+"年",value:["184","90","120","0","30","100","80","40","20","510","350","180"]},{label:new Date().getFullYear()-1+"年",value:["118","509","366","162","380","123","321","158","352","474","154","22"]},{label:new Date().getFullYear()+"年",value:["548","259","113","90","69","512","23","49","28","420","313","156"]}],$=[{fromName:"北京",toName:"上海",coords:[[116.4551,40.2539],[121.4648,31.2891]]},{fromName:"上海",toName:"北京",coords:[[121.4648,31.2891],[116.4551,40.2539]]},{fromName:"北京",toName:"广州",coords:[[116.4551,40.2539],[113.5107,23.2196]]},{fromName:"广州",toName:"北京",coords:[[113.5107,23.2196],[116.4551,40.2539]]},{fromName:"北京",toName:"成都",coords:[[116.4551,40.2539],[103.9526,30.7617]]},{fromName:"成都",toName:"北京",coords:[[103.9526,30.7617],[116.4551,40.2539]]},{fromName:"成都",toName:"新疆维吾尔自治区",coords:[[103.9526,30.7617],[85.294711,41.371801]]},{fromName:" 新疆维吾尔自治区",toName:"成都",coords:[[85.294711,41.371801],[103.9526,30.7617]]}];const B=()=>{var n,u,d,p,S,F,D,b;a.chart1=(n=m.value)==null?void 0:n.initChart(.5),a.chart2=(u=i.value)==null?void 0:u.initChart(A),a.chart3=(d=v.value)==null?void 0:d.initChart({data:_,unit:_.map(h=>h.label),columns:["1","2","3","4","5","6","7","8","9","10","11","12"],colors:["#FFA600","#007AFE","#FF4B7A"]}),a.chart4=(p=g.value)==null?void 0:p.initChart({data:E,colors:["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"]}),a.chart5=(S=t.value)==null?void 0:S.initChart({man:.6,woman:.4}),a.chart6=(F=x.value)==null?void 0:F.initChart({unit:["访问量"],data:new Array(30).fill("").map(h=>(h=V(1,2e4),h))}),a.chart7=(D=I.value)==null?void 0:D.initChart({data:T,colors:["#078dbc","#6ad40b","#6172fc","#1786ff","#ffbe2f","#4dc89d","#b797df","#ffd3aa"]}),a.mapChart=(b=y.value)==null?void 0:b.initChart($)},{nowTime:M}=C();let w=null,N=e(M.value);return w=setInterval(()=>{N.value=C().nowTime.value},1e3),z(()=>{window.removeEventListener("resize",s),clearInterval(w),Object.values(a).forEach(n=>n==null?void 0:n.dispose())}),(n,u)=>(H(),Y("div",W,[o("div",{class:"dataScreen",ref_key:"dataScreenRef",ref:r},[o("div",q,[G,o("div",J,[K,o("span",Q,"当前时间："+O(j(N)),1)])]),X],512)]))}}),Fe=U(ee,[["__scopeId","data-v-dd2a43cd"]]);export{Fe as default};
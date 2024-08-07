import{h as c}from"./echarts-uRidhZuW.js";import{d,o as p,c as m}from"./@vue-CsViAIeL.js";import{_ as h}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./zrender-Db2nslL5.js";import"./tslib-BDyQ-Jie.js";const f={class:"echarts",id:"AnnualUseChart"},u=d({__name:"AnnualUseChart",setup(y,{expose:n}){return n({initChart:(t={})=>{const a=document.getElementById("AnnualUseChart"),l=["rgba(254, 219, 101,0.1)","rgba(0, 122, 254,0.1)","rgba(255, 75, 122, 0.1)"],s=c(a),i={tooltip:{trigger:"axis",axisPointer:{type:"none"},borderWidth:0,padding:0,backgroundColor:"transparent",formatter:o=>{let e="";return o.forEach(r=>{e+=`
          <div class="year-item">
            <span class="year-dot" style="background-color: ${r.color};"></span>
            <span class="year-name">${r.seriesName}</span>
            <span class="year-value">${r.data>=1e4?(r.data/1e4).toFixed(2)+"w":r.data}</span>
          </div>
          `}),`
                    <div class="annual-tooTip">
                      <span class="annual-month">${o[0].dataIndex+1}月</span>
                      <div class="annual-list">
                        ${e}
                      </div>
                    </div>
                  `}},legend:{right:"2%",top:"0%",itemWidth:15,itemHeight:6,align:"auto",icon:"rect",itemGap:15,textStyle:{color:"#ebebf0"}},grid:{top:"20%",left:"40",right:"4%",bottom:"15%"},xAxis:[{name:"(月份)",type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{color:"#7ec7ff",padding:0,fontSize:12,formatter:function(o){return o}},splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisTick:{show:!1},data:t.columns}],yAxis:{name:"(人数)",nameTextStyle:{color:"#D6DFEA",fontSize:12,padding:[0,30,0,0]},minInterval:1,splitNumber:5,splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{show:!0,color:"#B9D6D6",padding:0,formatter:function(o){return o>=1e4&&(o=o/1e4+"w"),o}},axisTick:{show:!1}},series:t.data.map((o,e)=>({name:o.label,type:"line",symbol:"circle",showSymbol:!1,smooth:!0,lineStyle:{width:1,color:t.colors[e],borderColor:t.colors[e]},itemStyle:{color:t.colors[e],borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:t.colors[e]},{offset:1,color:l[e]}],global:!1},shadowColor:"rgba(25,163,223, 0.3)",shadowBlur:20},data:o.value}))};return s.setOption(i),s}}),(t,a)=>(p(),m("div",f))}}),A=h(u,[["__scopeId","data-v-a176243d"]]);export{A as default};

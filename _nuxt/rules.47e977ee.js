import{a as U,J as B,A as E,K as L,L as x,o as d,l as u,m as t,w as m,v as h,s as C,G as v,H as g,t as b,u as _,M as w,D as V,b as T,E as k,F,k as D,B as $,r as I,e as M,N as q,I as N,f as O,y as Z}from"./entry.33e0ed7d.js";const A=t("label",null,"Starting",-1),H={class:"grid"},j=["max","required"],G=["min","required"],J=t("label",null,"Every",-1),K={class:"grid"},P=["value"],W=t("label",null,"Interval",-1),Y={class:"grid"},z={role:"list"},Q=t("summary",{"aria-haspopup":"listbox"},"By Week Day",-1),X={role:"listbox"},ee=["value"],te={role:"list"},ne=t("summary",{"aria-haspopup":"listbox"},"By Month",-1),le={role:"listbox"},oe=["value"],se=t("label",null,"Limit Occurrences",-1),ie={class:"grid"},de=t("option",{value:!0},"By Count",-1),ue=t("option",{value:!1},"Until Date",-1),re=[de,ue],ae={class:"mb-3 w-75"},pe=t("label",null,"Set Position",-1),ce=t("small",null," Corresponds to the nth occurence (i.e. 3 for third, -2 for second to last) ",-1),me=U({__name:"Form",props:{fields:{}},setup(o){const n=o,{frequencies:a,weekdays:r,months:p}=B(),y=E();return L(()=>{x(()=>n.fields,()=>y.value.reportValidity())}),(e,l)=>(d(),u("form",{ref_key:"form",ref:y},[A,t("div",H,[m(t("input",{type:"datetime-local","onUpdate:modelValue":l[0]||(l[0]=s=>e.fields.dtstart=s),max:e.fields.dtend??void 0,required:!e.fields.dtstart},null,8,j),[[h,e.fields.dtstart]]),m(t("input",{type:"datetime-local","onUpdate:modelValue":l[1]||(l[1]=s=>e.fields.dtend=s),min:e.fields.dtstart??void 0,required:!e.fields.dtend},null,8,G),[[h,e.fields.dtend]])]),J,t("div",K,[m(t("input",{type:"number","onUpdate:modelValue":l[2]||(l[2]=s=>e.fields.interval=s),min:"1",required:""},null,512),[[h,e.fields.interval]]),m(t("select",{id:"frequency","onUpdate:modelValue":l[3]||(l[3]=s=>e.fields.freq=s),required:""},[(d(!0),u(v,null,g(_(a),({value:s,label:c})=>(d(),u("option",{value:s},b(c),9,P))),256))],512),[[C,e.fields.freq]])]),W,t("div",Y,[t("details",z,[Q,t("ul",X,[(d(!0),u(v,null,g(_(r),({value:s,label:c})=>(d(),u("li",null,[t("label",null,[m(t("input",{type:"checkbox",value:s,"onUpdate:modelValue":l[4]||(l[4]=f=>e.fields.byweekday=f)},null,8,ee),[[w,e.fields.byweekday]]),V(" "+b(c),1)])]))),256))])]),t("details",te,[ne,t("ul",le,[(d(!0),u(v,null,g(_(p),({value:s,label:c})=>(d(),u("li",null,[t("label",null,[m(t("input",{type:"checkbox",value:s,"onUpdate:modelValue":l[5]||(l[5]=f=>e.fields.bymonth=f)},null,8,oe),[[w,e.fields.bymonth]]),V(" "+b(c),1)])]))),256))])])]),se,t("div",ie,[m(t("select",{id:"limit-count","onUpdate:modelValue":l[6]||(l[6]=s=>e.fields.limitByCount=s),required:""},re,512),[[C,e.fields.limitByCount]]),e.fields.limitByCount?m((d(),u("input",{key:0,type:"number",min:1,"onUpdate:modelValue":l[7]||(l[7]=s=>e.fields.count=s)},null,512)),[[h,e.fields.count]]):m((d(),u("input",{key:1,type:"date",required:"","onUpdate:modelValue":l[8]||(l[8]=s=>e.fields.until=s)},null,512)),[[h,e.fields.until]])]),t("div",ae,[pe,m(t("input",{type:"number","onUpdate:modelValue":l[9]||(l[9]=s=>e.fields.bysetpos=s)},null,512),[[h,e.fields.bysetpos]]),ce])],512))}}),ye={key:0,style:{"--border-width":"0"}},_e=t("summary",{role:"button",class:"secondary"},"Exceptions",-1),fe={role:"grid"},he=["onClick"],ve=U({__name:"Exceptions",props:{ruleSet:{}},setup(o){const n=o,a=e=>new Date(M(e)),r=(e,l)=>a(e).valueOf()-a(l).valueOf(),p=T(()=>Object.keys(n.ruleSet.exceptions).filter(e=>{var l;return((l=n.ruleSet.exceptions)==null?void 0:l[e])!==void 0}).sort(r)),y=e=>{q(()=>{var l,s;(l=n.ruleSet.exceptions)==null||delete l[e],(s=n.ruleSet.rdates)==null||delete s[e]})};return(e,l)=>{const s=N;return _(p).length?(d(),u("details",ye,[_e,t("figure",null,[t("table",fe,[t("tbody",null,[(d(!0),u(v,null,g(_(p),c=>{var f;return d(),u("tr",null,[t("th",null,[k(s,{to:`/?year=${("keepLocalTZ"in e?e.keepLocalTZ:_(D))(a(c)).getFullYear()}#${c}`},{default:F(()=>[V(b(("keepLocalTZ"in e?e.keepLocalTZ:_(D))(a(c))),1)]),_:2},1032,["to"])]),t("td",null,b((f=e.ruleSet.exceptions)==null?void 0:f[c]),1),t("td",null,[t("a",{onClick:$(qe=>y(c),["prevent"]),href:"#",class:"contrast"}," Remove ",8,he)])])}),256))])])])])):I("",!0)}}}),be={style:{"--border-width":"0"}},ge={class:"secondary"},Se=U({__name:"index",props:{ruleSet:{}},setup(o){const n=o,{rrule:a}=O(n.ruleSet.fields);return(r,p)=>{var l;const y=me,e=ve;return d(),u("details",be,[t("summary",ge,b(((l=_(a))==null?void 0:l.toText())||"Undefined Rule"),1),k(y,{fields:r.ruleSet.fields},null,8,["fields"]),k(e,{"rule-set":r.ruleSet},null,8,["rule-set"])])}}});let S;const ke=new Uint8Array(16);function Ue(){if(!S&&(S=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!S))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return S(ke)}const i=[];for(let o=0;o<256;++o)i.push((o+256).toString(16).slice(1));function Ve(o,n=0){return(i[o[n+0]]+i[o[n+1]]+i[o[n+2]]+i[o[n+3]]+"-"+i[o[n+4]]+i[o[n+5]]+"-"+i[o[n+6]]+i[o[n+7]]+"-"+i[o[n+8]]+i[o[n+9]]+"-"+i[o[n+10]]+i[o[n+11]]+i[o[n+12]]+i[o[n+13]]+i[o[n+14]]+i[o[n+15]]).toLowerCase()}const Ce=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),R={randomUUID:Ce};function we(o,n,a){if(R.randomUUID&&!n&&!o)return R.randomUUID();o=o||{};const r=o.random||(o.rng||Ue)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,n){a=a||0;for(let p=0;p<16;++p)n[a+p]=r[p];return n}return Ve(r)}const De={class:"grid"},Re=t("div",null,null,-1),$e=["onClick"],Ee=U({__name:"rules",setup(o){const{extensionField:n}=Z(),a=()=>{n.fieldData.ruleSets.push({uuid:we(),fields:{interval:1,freq:1,limitByCount:!0,count:1,byweekday:[],bymonth:[]},exceptions:{},rdates:{},ruleString:""})},r=p=>{q(()=>{const y=n.fieldData.ruleSets.indexOf(p);n.fieldData.ruleSets.splice(y,1)})};return(p,y)=>{const e=Se;return d(),u(v,null,[t("div",{class:"grid"},[t("button",{onClick:a},"Add Rule")]),(d(!0),u(v,null,g(_(n).fieldData.ruleSets,l=>(d(),u("article",null,[k(e,{"rule-set":l},null,8,["rule-set"]),t("footer",null,[t("div",De,[Re,t("button",{onClick:$(s=>r(l),["prevent"]),class:"secondary outline",style:{"--spacing":"0","--line-height":"0.5"}}," Remove Rule ",8,$e)])])]))),256))],64)}}});export{Ee as default};
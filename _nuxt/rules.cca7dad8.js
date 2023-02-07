import{a as k,J as q,A as B,K as E,L,o as d,l as u,m as t,w as y,v,s as V,G as b,H as _,t as x,u as h,M as C,D as U,b as T,E as S,F,k as w,B as R,r as I,e as M,N as $,I as N,f as O,y as Z}from"./entry.dee53fea.js";const A=t("label",null,"Starting",-1),H={class:"grid"},j=["max","required"],G=["min","required"],J=t("label",null,"Every",-1),K={class:"grid"},P=["value"],W=t("label",null,"Interval",-1),Y={class:"grid"},z={role:"list"},Q=t("summary",{"aria-haspopup":"listbox"},"By Week Day",-1),X={role:"listbox"},ee=["value"],te={role:"list"},ne=t("summary",{"aria-haspopup":"listbox"},"By Month",-1),le={role:"listbox"},oe=["value"],se=t("label",null,"Limit Occurrences",-1),ie={class:"grid"},de=t("option",{value:!0},"By Count",-1),ue=t("option",{value:!1},"Until Date",-1),re=[de,ue],ae={class:"mb-3 w-75"},ce=t("label",null,"Set Posiiton",-1),me=t("small",null," Corresponds to the nth occurence (i.e. 3 for third, -2 for second to last) ",-1),ye=k({__name:"Form",props:{fields:null},setup(e){const n=e,{frequencies:r,weekdays:a,months:c}=q(),f=B();return E(()=>{L(()=>n.fields,()=>f.value.reportValidity())}),(s,l)=>(d(),u("form",{ref_key:"form",ref:f},[A,t("div",H,[y(t("input",{type:"datetime-local","onUpdate:modelValue":l[0]||(l[0]=o=>e.fields.dtstart=o),max:e.fields.dtend??void 0,required:!e.fields.dtstart},null,8,j),[[v,e.fields.dtstart]]),y(t("input",{type:"datetime-local","onUpdate:modelValue":l[1]||(l[1]=o=>e.fields.dtend=o),min:e.fields.dtstart??void 0,required:!e.fields.dtend},null,8,G),[[v,e.fields.dtend]])]),J,t("div",K,[y(t("input",{type:"number","onUpdate:modelValue":l[2]||(l[2]=o=>e.fields.interval=o),min:"1",required:""},null,512),[[v,e.fields.interval]]),y(t("select",{id:"frequency","onUpdate:modelValue":l[3]||(l[3]=o=>e.fields.freq=o),required:""},[(d(!0),u(b,null,_(h(r),({value:o,label:m})=>(d(),u("option",{value:o},x(m),9,P))),256))],512),[[V,e.fields.freq]])]),W,t("div",Y,[t("details",z,[Q,t("ul",X,[(d(!0),u(b,null,_(h(a),({value:o,label:m})=>(d(),u("li",null,[t("label",null,[y(t("input",{type:"checkbox",value:o,"onUpdate:modelValue":l[4]||(l[4]=p=>e.fields.byweekday=p)},null,8,ee),[[C,e.fields.byweekday]]),U(" "+x(m),1)])]))),256))])]),t("details",te,[ne,t("ul",le,[(d(!0),u(b,null,_(h(c),({value:o,label:m})=>(d(),u("li",null,[t("label",null,[y(t("input",{type:"checkbox",value:o,"onUpdate:modelValue":l[5]||(l[5]=p=>e.fields.bymonth=p)},null,8,oe),[[C,e.fields.bymonth]]),U(" "+x(m),1)])]))),256))])])]),se,t("div",ie,[y(t("select",{id:"limit-count","onUpdate:modelValue":l[6]||(l[6]=o=>e.fields.limitByCount=o),required:""},re,512),[[V,e.fields.limitByCount]]),e.fields.limitByCount?y((d(),u("input",{key:0,type:"number",min:1,"onUpdate:modelValue":l[7]||(l[7]=o=>e.fields.count=o)},null,512)),[[v,e.fields.count]]):y((d(),u("input",{key:1,type:"date",required:"","onUpdate:modelValue":l[8]||(l[8]=o=>e.fields.until=o)},null,512)),[[v,e.fields.until]])]),t("div",ae,[ce,y(t("input",{type:"number","onUpdate:modelValue":l[9]||(l[9]=o=>e.fields.bysetpos=o)},null,512),[[v,e.fields.bysetpos]]),me])],512))}}),fe={key:0,style:{"--border-width":"0"}},he=t("summary",{role:"button",class:"secondary"},"Exceptions",-1),pe={role:"grid"},ve=["onClick"],be=k({__name:"Exceptions",props:{ruleSet:null},setup(e){const n=e,r=s=>new Date(M(s)),a=(s,l)=>r(s).valueOf()-r(l).valueOf(),c=T(()=>Object.keys(n.ruleSet.exceptions).filter(s=>{var l;return((l=n.ruleSet.exceptions)==null?void 0:l[s])!==void 0}).sort(a)),f=s=>{$(()=>{var l,o;(l=n.ruleSet.exceptions)==null||delete l[s],(o=n.ruleSet.rdates)==null||delete o[s]})};return(s,l)=>{const o=N;return h(c).length?(d(),u("details",fe,[he,t("figure",null,[t("table",pe,[t("tbody",null,[(d(!0),u(b,null,_(h(c),m=>{var p;return d(),u("tr",null,[t("th",null,[S(o,{to:`/?year=${("keepLocalTZ"in s?s.keepLocalTZ:h(w))(r(m)).getFullYear()}#${m}`},{default:F(()=>[U(x(("keepLocalTZ"in s?s.keepLocalTZ:h(w))(r(m))),1)]),_:2},1032,["to"])]),t("td",null,x((p=e.ruleSet.exceptions)==null?void 0:p[m]),1),t("td",null,[t("a",{onClick:R($e=>f(m),["prevent"]),href:"#",class:"contrast"}," Remove ",8,ve)])])}),256))])])])])):I("",!0)}}}),xe={style:{"--border-width":"0"}},_e={class:"secondary"},ge=k({__name:"index",props:{ruleSet:null},setup(e){const n=e,{rrule:r}=O(n.ruleSet.fields);return(a,c)=>{var l;const f=ye,s=be;return d(),u("details",xe,[t("summary",_e,x(((l=h(r))==null?void 0:l.toText())||"Undefined Rule"),1),S(f,{fields:e.ruleSet.fields},null,8,["fields"]),S(s,{"rule-set":e.ruleSet},null,8,["rule-set"])])}}});let g;const Se=new Uint8Array(16);function ke(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(Se)}const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function Ue(e,n=0){return(i[e[n+0]]+i[e[n+1]]+i[e[n+2]]+i[e[n+3]]+"-"+i[e[n+4]]+i[e[n+5]]+"-"+i[e[n+6]]+i[e[n+7]]+"-"+i[e[n+8]]+i[e[n+9]]+"-"+i[e[n+10]]+i[e[n+11]]+i[e[n+12]]+i[e[n+13]]+i[e[n+14]]+i[e[n+15]]).toLowerCase()}const Ve=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),D={randomUUID:Ve};function Ce(e,n,r){if(D.randomUUID&&!n&&!e)return D.randomUUID();e=e||{};const a=e.random||(e.rng||ke)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,n){r=r||0;for(let c=0;c<16;++c)n[r+c]=a[c];return n}return Ue(a)}const we={class:"grid"},De=t("div",null,null,-1),Re=["onClick"],Be=k({__name:"rules",setup(e){const{extensionField:n}=Z(),r=()=>{n.fieldData.ruleSets.push({uuid:Ce(),fields:{interval:1,freq:1,limitByCount:!0,count:1,byweekday:[],bymonth:[]},exceptions:{},rdates:{},ruleString:""})},a=c=>{$(()=>{const f=n.fieldData.ruleSets.indexOf(c);n.fieldData.ruleSets.splice(f,1)})};return(c,f)=>{const s=ge;return d(),u(b,null,[t("div",{class:"grid"},[t("button",{onClick:r},"Add Rule")]),(d(!0),u(b,null,_(h(n).fieldData.ruleSets,l=>(d(),u("article",null,[S(s,{"rule-set":l},null,8,["rule-set"]),t("footer",null,[t("div",we,[De,t("button",{onClick:R(o=>a(l),["prevent"]),class:"secondary outline",style:{"--spacing":"0","--line-height":"0.5"}}," Remove Rule ",8,Re)])])]))),256))],64)}}});export{Be as default};

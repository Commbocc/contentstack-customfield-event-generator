import{a as g,b as m,e as x,f as T,h as K,i as D,k as f,j as $,o as d,l as p,w as y,v as S,m as n,p as R,q as L,t as k,u as s,c as w,r as U,s as V,x as B,y as M,z as O,A as I,B as C,C as N,D as h,E as Z,F as E,G as b,H as F,I as j}from"./entry.33e0ed7d.js";const q={class:"grid"},z=g({__name:"ChangeDate",props:{ruleSet:{},dateKey:{}},setup(v){const t=v,i=m(()=>new Date(x(t.dateKey))),{eventDurationMilliseconds:l}=T(t.ruleSet.fields);return K(()=>{t.ruleSet.rdates[t.dateKey]||(t.ruleSet.rdates[t.dateKey]={start:D(f(i.value)),end:l.value>0?D(f(new Date(i.value.valueOf()+l.value))):void 0})}),$(()=>{t.ruleSet.exceptions[t.dateKey]!=="Rescheduled"&&delete t.ruleSet.rdates[t.dateKey]}),(a,o)=>(d(),p("div",q,[y(n("input",{type:"datetime-local","onUpdate:modelValue":o[0]||(o[0]=e=>a.ruleSet.rdates[t.dateKey].start=e)},null,512),[[S,a.ruleSet.rdates[t.dateKey].start]]),y(n("input",{type:"datetime-local","onUpdate:modelValue":o[1]||(o[1]=e=>a.ruleSet.rdates[t.dateKey].end=e)},null,512),[[S,a.ruleSet.rdates[t.dateKey].end]])]))}}),Y=["id"],A=n("br",null,null,-1),G=n("option",{value:void 0},"Enabled",-1),H=n("option",{value:"Disabled"},"Disabled",-1),J=n("option",{value:"Cancelled"},"Cancelled",-1),P=n("option",{value:"Rescheduled"},"Rescheduled",-1),Q=[G,H,J,P],W=g({__name:"index",props:{instance:{}},setup(v){const t=v,i=R().hash,{extensionField:l}=M(),a=m(()=>L(t.instance.date.toISOString())),o=m(()=>l.fieldData.ruleSets.find(e=>e.uuid===t.instance.setUuid));return(e,c)=>{const u=z;return d(),p("tr",{id:s(a),class:B({highlight:`#${s(a)}`===s(i)})},[n("th",null,[n("strong",null,k(("keepLocalTZ"in e?e.keepLocalTZ:s(f))(e.instance.date).toLocaleString()),1),A,n("small",null,k(("keepLocalTZ"in e?e.keepLocalTZ:s(f))(e.instance.date)),1),s(o).exceptions[s(a)]==="Rescheduled"?(d(),w(u,{key:0,"rule-set":s(o),"date-key":s(a)},null,8,["rule-set","date-key"])):U("",!0)]),n("td",null,[y(n("select",{"onUpdate:modelValue":c[0]||(c[0]=r=>s(o).exceptions[s(a)]=r)},Q,512),[[V,s(o).exceptions[s(a)]]])])],10,Y)}}});const X={class:"grid"},ee={key:0},te={key:1},ne={role:"grid"},ae=g({__name:"index",setup(v){const{sets:t}=O(),{year:i}=R().query,l=I(i?parseInt(i.toString()):new Date().getFullYear()),a=m(()=>{var c;const o=new Date(Date.UTC(l.value,0,0)),e=new Date(Date.UTC(l.value,12,1));return(c=t.value)==null?void 0:c.flatMap(u=>u.rruleSet.between(o,e).map(r=>({date:r,setUuid:u.uuid}))).sort((u,r)=>u.date.valueOf()<r.date.valueOf()?-1:u.date.valueOf()>r.date.valueOf()?1:0)});return(o,e)=>{var r;const c=j,u=W;return d(),p(b,null,[n("div",X,[n("button",{onClick:e[0]||(e[0]=C(_=>l.value--,["prevent"])),class:"secondary"},"‹"),y(n("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=_=>N(l)?l.value=_:null),style:{"text-align":"center"}},null,512),[[S,s(l)]]),n("button",{onClick:e[2]||(e[2]=C(_=>l.value++,["prevent"])),class:"secondary"},"›")]),(r=s(a))!=null&&r.length?(d(),p("figure",te,[n("table",ne,[n("tbody",null,[(d(!0),p(b,null,F(s(a),_=>(d(),w(u,{instance:_},null,8,["instance"]))),256))])])])):(d(),p("article",ee,[h(" There are no instances of this event in "+k(s(l))+", ",1),Z(c,{to:"/rules"},{default:E(()=>[h("adjust the rules")]),_:1}),h(". ")]))],64)}}});export{ae as default};

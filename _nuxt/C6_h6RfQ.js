import{a9 as u,d as c,v as r,I as l,c as d,W as m,N as i,ak as h,al as g,$ as p,am as f}from"./FMw5W1HZ.js";function x(t){throw u({fatal:!0,statusCode:500,statusMessage:`${t} is provided by @nuxt/image. Check your console to install it or run 'npx nuxi@latest module add @nuxt/image'`})}const S={setup:()=>x("<NuxtImg>")},w=c({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const n=r().public.mdc.useNuxtImage?S:"img",e=t,o=l(()=>{var a;if((a=e.src)!=null&&a.startsWith("/")&&!e.src.startsWith("//")){const s=g(p(r().app.baseURL));if(s!=="/"&&!e.src.startsWith(s))return f(s,e.src)}return e.src});return(a,s)=>(d(),m(h(i(n)),{src:i(o),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{w as default};

function e(t){var n,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(a=e(t[n]))&&(r&&(r+=" "),r+=a);else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function o(){for(var t,n,a=0,r="";a<arguments.length;)(t=arguments[a++])&&(n=e(t))&&(r&&(r+=" "),r+=n);return r}const s=(t,n)=>{const a=t.target,r=Number(a.getAttribute("data-index"));n(r)};export{o as c,s as h};

define(["exports","./tslib.es6-42e4f430","preact/jsx-runtime","./utils/UNSAFE_classNames","css!./UNSAFE_Avatar.css","./classNames-e842f86a"],function(s,e,a,i,c,r){"use strict";const n=s=>{var{src:i}=s,c=e.__rest(s,["src"]);const n=r.classNames([j.base,j.image]);return a.jsx(l,Object.assign({},c,{children:a.jsx("div",{class:n,style:{backgroundImage:`url(${i})`}})}))},t=s=>{var{children:i,initials:c}=s,n=e.__rest(s,["children","initials"]);const t=[j.base,j.content,c?j.initials:j.icon,!c&&b],d=c||i;return a.jsx(l,Object.assign({},n,{children:a.jsx("div",Object.assign({"aria-hidden":"true",class:r.classNames(t)},{children:d}))}))},l=({background:s="neutral",size:e="md",shape:i="square",children:c,accessibleLabel:n})=>{const t=r.classNames([d.base,`oj-c-avatar-bg-${s}`,`oj-c-avatar-${e}`,"circle"===i&&d.circle]);return n?a.jsx("div",Object.assign({"aria-label":n,role:"img",class:t},{children:c})):a.jsx("div",Object.assign({class:t},{children:c}))},d={base:"_13mk770",circle:"yy0sv7"},b="_344ciy",j={base:"qbgb1z",content:"ii27zf",image:"zxh4vx",initials:"_1hwuzpa",icon:"_1np3w9"};s.Avatar=function(s){var{children:i,src:c}=s,r=e.__rest(s,["children","src"]);return c&&!i?a.jsx(n,Object.assign({src:c},r)):a.jsx(t,Object.assign({},r,{children:i}))},Object.defineProperty(s,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_Avatar.js.map
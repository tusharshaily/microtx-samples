define(["exports"],function(t){"use strict";function n(t,n){if(!n)return;if(t<=n[0].max)return n[0];let e=n[0].max;for(let r=1;r<n.length;r++){if(e<t&&t<=n[r].max)return n[r];e=n[r].max}}function e(t,n,e){return"track"===t&&(null==n?void 0:n.color)?null==n?void 0:n.color:e}function r(t,n,e){return(null==n?void 0:n.color)&&"indicator"===t?n.color:e}function a(t){return t*Math.PI/180}function o(t){return(t+360)%360}function i(t,n,e){switch(e){case"top":n*=2;break;case"bottom":n=2*n-1;break;case"left":t*=2;break;case"right":t=2*t-1}return{x:t,y:n}}function u(t,n){let e,r;return(t=o(t))<45?(r=.5-.5*Math.tan(a(t)),e=1):t<135?(e=t<90?.5+.5*Math.tan(a(90-t)):.5-.5*Math.tan(a(t-90)),r=0):t<225?(r=t<180?.5-.5*Math.tan(a(180-t)):.5+.5*Math.tan(a(t-180)),e=0):t<315?(e=t<270?.5-.5*Math.tan(a(270-t)):.5+.5*Math.tan(a(t-270)),r=1):(e=1,r=.5+.5*Math.tan(a(360-t))),i(e,r,n)}function l(t){return i(.5,.5,t)}function c(t){return t<=180}function f(t){return t<=90||t>=270}function h(t){return t>=90&&t<=270}function s(t){return t>=180||0===t}t.convertToPolar=function(t,n,e,r){return{radius:Math.sqrt((e-t)**2+(r-n)**2),angle:180*Math.atan2(n-r,e-t)/Math.PI}},t.getCenterCoord=l,t.getCircleSection=function(t,n,e){if(n>180)return"full";const r=o(t+(e?.5:-.5)*n),a=o(t+(e?1:-1)*n);return c(t)&&c(r)&&c(a)?"top":f(t)&&f(r)&&f(a)?"right":h(t)&&h(r)&&h(a)?"left":s(t)&&s(r)&&s(a)?"bottom":"full"},t.getClipPath=function(t,n,e,r){let a=e?t+n:t;const o=u(a,r);let i,c,f=`${100*o.x}% ${100*o.y}%`;do{i=Math.max(a-n,45*(Math.ceil(a/45)-1)),c=u(i,r),f+=`, ${100*c.x}% ${100*c.y}%`,n-=a-i,a=i}while(i>a-n);const h=l(r);return`polygon(${f}, ${100*h.x}% ${100*h.y}%)`},t.getMeterAriaProps=function(t,e,r,a,o,i,u){const l=n(t,u);return{"aria-label":o,"aria-valuenow":`${t}`,"aria-valuemin":`${e}`,"aria-valuetext":`${a} ${(null==l?void 0:l.accessibleLabel)||""}`,"aria-valuemax":`${r}`,"aria-labelledby":i}},t.getPositiveAngle=o,t.getTrackAndIndicatorColor=function(t,a,o,i,u){const l=n(t,u);return{trackColor:e(a,l,o),indicatorColor:r(a,l,i)}},t.validateRange=function(t,n,e,r){if(t>n)throw new RangeError("The min must be lower or equal to max.");if(e<t||e>n)throw new RangeError("The value must be between min and max.");if(r>n-t)throw new RangeError("The step value must be less than the difference of max and min")},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=PRIVATE_meterUtils.js.map
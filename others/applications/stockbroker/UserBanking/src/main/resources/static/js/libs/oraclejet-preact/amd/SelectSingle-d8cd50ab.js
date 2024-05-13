define(["exports","preact/jsx-runtime","preact","preact/compat","./hooks/UNSAFE_useFocusableTextField","./hooks/UNSAFE_useFormContext","./hooks/UNSAFE_useFormFieldContext","./hooks/UNSAFE_useLoadingIndicatorTimer","./hooks/UNSAFE_useTextField","./UNSAFE_Label","./UNSAFE_LiveRegion","./UNSAFE_TextField","./UNSAFE_UserAssistance","./PRIVATE_SelectCommon","preact/hooks","./utils/UNSAFE_mergeProps","./hooks/UNSAFE_useTranslationBundle","./ReadonlyTextFieldInput-8040cb97","./TextFieldInput-428b8905"],function(e,n,o,s,i,t,l,a,r,d,u,c,v,p,F,m,h,b,f){"use strict";const x=s.forwardRef(({ariaDescribedBy:e,assistiveText:s,data:x,helpSourceLink:y,helpSourceText:w,isDisabled:g,isLoading:S,isReadonly:R,isRequired:A,isRequiredShown:E,itemText:D,label:T,labelEdge:C,labelStartWidth:j,messages:k,onCommit:K,onFilter:I,onLoadRange:L,placeholder:U,textAlign:O,userAssistanceDensity:_,valueItem:P,variant:M="default",virtualKeyboard:B},N)=>{const{isDisabled:z,isReadonly:H,labelEdge:q,labelStartWidth:V,textAlign:W,userAssistanceDensity:Y}=t.useFormContext(),$=null!=g?g:z,Z=null!=R?R:H,G=null!=C?C:q,J=null!=j?j:V,Q=null!=O?O:W,X=null!=_?_:Y,{enabledElementRef:ee,focusProps:ne,isFocused:oe,readonlyElementRef:se}=i.useFocusableTextField({isDisabled:$,isReadonly:Z,ref:N}),{collectionProps:ie,dropdownArrowEventHandlers:te,dropdownEventHandlers:le,dropdownRef:ae,inputEventHandlers:re,isDropdownOpen:de,isFocused:ue,isUserFiltering:ce,mainFieldRef:ve,mouseProps:pe,searchText:Fe,userInput:me}=function({data:e,inputRef:n,isDisabled:o,isFocused:s,isReadonly:i,onCommit:t,onFilter:l,valueItem:a}){const{currentRow:r,dropdownRef:d,handleDropdownArrowClick:u,handleDropdownAutoDismiss:c,handleInput:v,handleMainFieldKeyDown:h,handleMainFieldKeyUp:b,isDropdownOpen:f,isFocused:x,isUserFiltering:y,mainFieldRef:w,onCurrentKeyChange:g,onMouseDown:S,searchText:R,selectedKeys:A,setCurrentRow:E,setDropdownOpen:D,setSelectedKeys:T,stopFiltering:C,userInput:j}=p.useSelectCommon({data:e,inputRef:n,isFocused:s,onFilter:l}),k=F.useRef(e),K=F.useRef(f),I=F.useRef(R),L=F.useCallback(e=>{null==t||t({value:e,previousValue:void 0!==a?a.key:void 0})},[t,a]),U=F.useCallback(()=>{D(!1),T(new Set),L(void 0)},[L]),O=F.useCallback(()=>!(!y||""!==j||void 0===a||(U(),0)),[U,y,j,a]);F.useEffect(()=>{x||O()},[x]);const _=F.useCallback(()=>{var e;null===(e=n.current)||void 0===e||e.focus()},[]),P=F.useCallback(()=>{var e,n;null===(n=null===(e=d.current)||void 0===e?void 0:e.parentElement)||void 0===n||n.removeChild(d.current)},[]),M=F.useCallback(e=>{f&&"keydown"===(null==e?void 0:e.type)&&e.code===p.KEYS.TAB&&(void 0!==r&&void 0!==r.rowKey&&(T(new Set([r.rowKey])),L(r.rowKey)),_(),P())},[r,_,f,L]),B=F.useCallback(n=>{var o,s;if(!p.isControlOrFunctionKey(n))switch(n.code){case p.KEYS.TAB:!O()&&f&&null!=e&&e.data.length>0&&(void 0!==r&&void 0!==r.rowKey?(T(new Set([r.rowKey])),L(r.rowKey)):L(null!==(o=null==a?void 0:a.key)&&void 0!==o?o:void 0)),P(),D(!1);break;case p.KEYS.ENTER:!O()&&f&&null!=e&&e.data.length>0&&(D(!1),C(),void 0!==r&&void 0!==r.rowKey?(T(new Set([r.rowKey])),L(r.rowKey)):L(null!==(s=null==a?void 0:a.key)&&void 0!==s?s:void 0))}},[O,r,e,f,L,a]);F.useEffect(()=>{T(void 0===a?void 0:new Set([a.key]))},[a]);const N=F.useCallback(e=>{_(),D(!1),C();const n=e.context.metadata.key;T(new Set([n])),L(n)},[_,L]);F.useEffect(()=>{e!==k.current&&f&&y&&null!=e&&0===e.offset&&e.data.length>0&&E({rowKey:void 0!==R&&(null==R?void 0:R.length)>0?e.data[0].metadata.key:void 0})},[e,f,y,R]),F.useEffect(()=>{f!==K.current&&(!f||y&&void 0!==R&&0!==R.length||E({rowKey:void 0}))},[f,y,R]);const z=F.useMemo(()=>m.mergeProps({onAutoDismiss:c},{onAutoDismiss:M}),[c,M]),H=F.useMemo(()=>m.mergeProps({onInput:v,onKeyDown:h,onKeyUp:b},{onKeyDown:B}),[h,v,b,B]);return F.useEffect(()=>{k.current=e,K.current=f,I.current=R}),{collectionProps:{currentKey:r.rowKey,onCurrentKeyChange:g,onItemAction:N,selectedKeys:A},dropdownArrowEventHandlers:{onClick:u},dropdownEventHandlers:z,dropdownRef:d,inputEventHandlers:H,inputRef:n,isDropdownOpen:f,isFocused:x,isUserFiltering:y,mainFieldRef:w,mouseProps:o||i?{}:{onMouseDown:S},searchText:R,userInput:j}}({data:x,inputRef:ee,isDisabled:$,isFocused:oe,isReadonly:Z,onCommit:K,onFilter:I,valueItem:P}),he=a.useLoadingIndicatorTimer(null!=S&&S),{baseId:be,formFieldContext:fe,inputProps:xe,labelProps:ye,textFieldProps:we,userAssistanceProps:ge}=r.useTextField({ariaDescribedBy:e,isDisabled:$,isFocused:ue,isLoading:he,isReadonly:Z,labelEdge:G,messages:k,styleVariant:M,value:void 0!==P||void 0}),Se=`${be}-dropdown`,Re=function(e,n){return F.useMemo(()=>{var o;return void 0===n?"":null!==(o=p.renderItemText(n,e))&&void 0!==o?o:""},[n,e])}(D,P),Ae="none"!==G?n.jsx(d.Label,Object.assign({},ye,{children:T})):void 0,Ee={label:"none"!==G?Ae:void 0,labelEdge:"none"!==G?G:void 0,labelStartWidth:"none"!==G?J:void 0},De="none"===G?T:void 0,Te=$||Z?"efficient"!==X?void 0:n.jsx(v.InlineUserAssistance,Object.assign({userAssistanceDensity:X},ge)):n.jsx(v.InlineUserAssistance,Object.assign({assistiveText:s,fieldLabel:T,helpSourceLink:y,helpSourceText:w,messages:k,isRequiredShown:E,userAssistanceDensity:X},ge)),Ce=h.useTranslationBundle("@oracle/oraclejet-preact");if(Z)return n.jsx(l.FormFieldContext.Provider,Object.assign({value:fe},{children:n.jsx(c.ReadonlyTextField,Object.assign({role:"presentation",inlineUserAssistance:Te,onBlur:ne.onfocusout,onFocus:ne.onfocusin},Ee,{children:n.jsx(b.ReadonlyTextFieldInput,{ariaDescribedBy:e,ariaLabel:De,ariaLabelledBy:ye.id,as:"div",elementRef:se,hasInsideLabel:void 0!==T&&"inside"===G,textAlign:Q,value:Re})}))}));const je=null!=x&&!p.isBeforeDataFetch(x),ke=void 0!==Ae&&"inside"===G,Ke=de&&je?0===(null==x?void 0:x.totalSize)?Ce.select_noMatchesFound():1===(null==x?void 0:x.totalSize)?Ce.select_oneMatchFound():"exact"===(null==x?void 0:x.sizePrecision)?Ce.select_sizeMatchesFound({TOTAL_SIZE:`${null==x?void 0:x.totalSize}`}):Ce.select_sizeOrMoreMatchesFound({TOTAL_SIZE:`${null==x?void 0:x.totalSize}`}):"",Ie=n.jsxs(o.Fragment,{children:[n.jsx(f.TextFieldInput,Object.assign({ariaAutoComplete:"list",ariaControls:Se,ariaExpanded:de,ariaLabel:De,autoComplete:"off",hasInsideLabel:ke,inputRef:ee,isRequired:A},re,{placeholder:U,role:"combobox",spellcheck:!1,textAlign:Q,type:p.isMobile()?"auto"===B?"search":B:void 0,value:ce?me:Re},xe)),n.jsx(u.LiveRegion,{children:Ke})]}),Le=n.jsx(p.DropdownArrow,Object.assign({isDisabled:$,size:ke?"md":"sm"},te)),Ue=!de||$||Z||!s&&!y||"efficient"!==X&&"reflow"!==X?void 0:n.jsx(p.DropdownUserAssistance,{assistiveText:s,fieldLabel:T,helpSourceLink:y,helpSourceText:w,userAssistanceDensity:X}),Oe=je&&0===(null==x?void 0:x.totalSize),_e=Oe?n.jsx(p.EmptyResults,{}):n.jsx(p.DefaultList,Object.assign({},ie,{accessibleSummary:null!=T?T:"",currentItemVariant:"highlight",data:x,itemText:D,onLoadRange:L,searchText:ce?Fe:void 0,selectionMode:"single"}));return n.jsxs(o.Fragment,{children:[n.jsx(l.FormFieldContext.Provider,Object.assign({value:fe},{children:n.jsx(c.TextField,Object.assign({endContent:he?void 0:Le,inlineUserAssistance:Te,mainContent:Ie,mainFieldRef:ve,onBlur:null==ne?void 0:ne.onfocusout,onFocus:null==ne?void 0:ne.onfocusin},we,Ee,pe))})),n.jsxs(p.Dropdown,Object.assign({dropdownRef:ae,id:Se,isOpen:de&&void 0!==x&&(null===x||x.totalSize>0||p.isBeforeDataFetch(x)||Oe),anchorRef:ve},le,{children:[n.jsx(p.DropdownList,Object.assign({hasBottomGap:void 0===Ue,isLoading:null===x},{children:_e})),Ue]}))]})});e.SelectSingle=x});
//# sourceMappingURL=SelectSingle-d8cd50ab.js.map
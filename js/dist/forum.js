(()=>{var o={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},d:(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const n=flarum.core.compat["forum/app"];var e=o.n(n);const r=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/LogInButtons"];var u=o.n(a);const c=flarum.core.compat["forum/components/LogInButton"];var i=o.n(c);const s=flarum.core.compat["common/utils/extractText"];var f=o.n(s);const l=flarum.core.compat["common/components/Tooltip"];var p=o.n(l);const d=flarum.core.compat["forum/components/SignUpModal"];var v=o.n(d);e().initializers.add("fof/oauth",(function(){var o=!!Number(e().data["fof-oauth.only_icons"]);(0,r.extend)(u().prototype,"items",(function(t){var n=e().forum.attribute("fof-oauth").filter(Boolean),r=n.splice(n.indexOf(n.find((function(o){return"google"===o.name}))),1);n.concat(r).forEach((function(n){var r=n.name,a=n.icon,u="Button FoFLogInButton LogInButton--"+r;o&&"google"!==r&&(u+=" Button--icon"),t.add(r,m("div",{className:"LogInButtonContainer LogInButtonContainer--"+r},m(i(),{className:u,icon:a,path:"/auth/"+r},e().translator.trans("fof-oauth.forum.log_in.with_"+r+"_button",{provider:e().translator.trans("fof-oauth.forum.providers."+r)}))))}))})),o&&((0,r.override)(i().prototype,"view",(function(o,t){var n=o(t);return m(p(),{text:f()(n.children[1])},n)})),(0,r.extend)(u().prototype,"view",(function(o){o.attrs.className+=" FoFLogInButtons--icons"}))),(0,r.extend)(v().prototype,"fields",(function(o){return this.attrs.token&&!this.attrs.username&&o.add("username-help",m("div",null,m("p",null,e().translator.trans("fof-oauth.forum.signup.username_help"))),35),o}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7a16"],{7843:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button-group",{attrs:{title:"Sort",size:"sm"}},[n("b-button",{attrs:{variant:"outline-primary",title:"Sort in acending order (A-Z)",pressed:1===t.value||t.enforce&&-1!==t.value},on:{click:function(e){return t.toggle(1)}}},[n("b-icon-sort-alpha-down")],1),n("b-button",{attrs:{variant:"outline-primary",title:"Sort in descending order (Z-A)",pressed:-1===t.value},on:{click:function(e){return t.toggle(-1)}}},[n("b-icon-sort-alpha-up")],1)],1)},r=[],a=(n("a9e3"),n("7386")),i={id:"SortButtons",components:{BIconSortAlphaDown:a["x"],BIconSortAlphaUp:a["y"]},props:{value:{type:Number,default:0},enforce:{type:Boolean,default:!1}},methods:{toggle:function(t){var e=this.enforce?1:0;this.value!==t&&(e=t),this.$emit("input",e)}}},u=i,l=n("2877"),s=Object(l["a"])(u,o,r,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0d7a16.9a21abf6.js.map
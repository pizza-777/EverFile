(self["webpackChunkever_file"]=self["webpackChunkever_file"]||[]).push([[19],{6881:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("nav",{staticClass:"text-center mt-3"},[t("router-link",{staticClass:"text-secondary",attrs:{to:"/"}},[e._v("Upload")])],1),t("div",{staticClass:"container mt-5"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"text-secondary"},[e._v(" file address: "),t("b-link",{staticClass:"link-secondary",attrs:{href:"https://"+e.explorer+"/accounts/accountDetails?id="+this.$route.params.fileId,target:"_blank"}},[t("b",[e._v(e._s(this.$route.params.fileId))])])],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"text-danger text-center"},[e._v(e._s(e.error))]),t("b-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mt-3 text-secondary"},[t("b-card-text",{staticClass:"mt-2"},[t("b",[e._v("name")]),e._v(": "+e._s(e.file.file_name))]),t("hr"),t("b-card-text",[t("b",[e._v("size")]),e._v(": "+e._s(e.humanFileSize))]),t("hr"),t("b-card-text",[t("b",[e._v("type")]),e._v(": "+e._s(e.file.file_type))]),t("hr"),t("b-button",{attrs:{variant:"outline-secondary",disabled:e.btnLoader},on:{click:function(t){return e._download()}}},[e._v(" Download "),e.btnLoader?t("b-spinner",{staticStyle:{"margin-left":"0.3em"},attrs:{small:""}}):e._e()],1),e.openFileLink?t("b-link",{staticClass:"text-secondary ms-3",attrs:{href:"./#/"+e.fileType+"/"+this.$route.params.fileId,target:"_blank"}},[t("span",{staticClass:"me-2"},[e._v("Open")]),t("span",[t("b-icon-box-arrow-up-right")],1)]):e._e()],1)],1)])},r=[],i=n(6369),o=n(2791),s=n(7008),l=n.n(s),d=n(2379);function c(e){var t=["Bytes","KB","MB","GB","TB"];if(0==e)return"0 Bytes";var n=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,n),2)+" "+t[n]}var u=i["default"].extend({name:"FileView",data(){return{error:!1,file:!1,humanFileSize:!1,show:!1,openFileLink:!1,fileType:"",btnLoader:!1,explorer:"testnet"==d.v.network.broxus?"net.ever.live":"ever.live"}},methods:{async _download(){if(!this.file)return;this.btnLoader=!0;const e=await(0,o.Sv)(this.$route.params.fileId);this.btnLoader=!1,l()(e,this.file.file_name,this.file.file_type)}},mounted(){(0,o.hr)(this.$route.params.fileId).then((e=>{if("undefined"===typeof e)this.error="Not found",this.show=!1;else{this.file=e,this.humanFileSize=c(e.file_size),this.show=!0;const t=e.file_type.match(/html|image/);null!==t&&(this.openFileLink=!0,this.fileType=t[0])}}))}}),f=u,h=n(1001),p=(0,h.Z)(f,a,r,!1,null,null,null),v=p.exports},7008:function(e,t,n){var a,r,i;n(8675),n(3462),n(7380),n(1118),n(2801),function(n,o){r=[],a=o,i="function"===typeof a?a.apply(t,r):a,void 0===i||(e.exports=i)}(0,(function(){return function e(t,n,a){var r,i,o=window,s="application/octet-stream",l=a||s,d=t,c=!n&&!a&&d,u=document.createElement("a"),f=function(e){return String(e)},h=o.Blob||o.MozBlob||o.WebKitBlob||f,p=n||"download";if(h=h.call?h.bind(o):Blob,"true"===String(this)&&(d=[d,l],l=d[0],d=d[1]),c&&c.length<2048&&(p=c.split("/").pop().split("?")[0],u.href=c,-1!==u.href.indexOf(c))){var v=new XMLHttpRequest;return v.open("GET",c,!0),v.responseType="blob",v.onload=function(t){e(t.target.response,p,s)},setTimeout((function(){v.send()}),0),v}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)){if(!(d.length>2096103.424&&h!==f))return navigator.msSaveBlob?navigator.msSaveBlob(y(d),p):_(d);d=y(d),l=d.type||s}else if(/([\x80-\xff])/.test(d)){var m=0,b=new Uint8Array(d.length),w=b.length;for(m;m<w;++m)b[m]=d.charCodeAt(m);d=new h([b],{type:l})}function y(e){var t=e.split(/[:;,]/),n=t[1],a="base64"==t[2]?atob:decodeURIComponent,r=a(t.pop()),i=r.length,o=0,s=new Uint8Array(i);for(o;o<i;++o)s[o]=r.charCodeAt(o);return new h([s],{type:n})}function _(e,t){if("download"in u)return u.href=e,u.setAttribute("download",p),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===t&&setTimeout((function(){o.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,s)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var n=document.createElement("iframe");document.body.appendChild(n),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,s)),n.src=e,setTimeout((function(){document.body.removeChild(n)}),333)}if(r=d instanceof h?d:new h([d],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(r,p);if(o.URL)_(o.URL.createObjectURL(r),!0);else{if("string"===typeof r||r.constructor===f)try{return _("data:"+l+";base64,"+o.btoa(r))}catch(g){return _("data:"+l+","+encodeURIComponent(r))}i=new FileReader,i.onload=function(e){_(this.result)},i.readAsDataURL(r)}return!0}}))}}]);
//# sourceMappingURL=19.609299cd.js.map
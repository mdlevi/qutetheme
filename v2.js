/* font awesome for custom rating icons */
jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">');

/* youtube background videos */
/**
 * jquery.youtube-background v1.0.14 | Nikola Stamatovic <@stamat> | MIT
 */
!function(){"use strict";function t(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function e(e,s){if(e.classList){const t=s.split(" ");for(var i=0;i<t.length;i++){const s=t[i];e.classList.add(s)}}else t(e,className)||(e.className+=" "+className)}function s(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("\\b"+e+"\\b","g"),"")}function i(){let t=!1;var e;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}function a(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function o(t){const e=t.split(/\s?:\s?/i),s=16/9;if(e.length<2)return s;const i=parseInt(e[0],10),a=parseInt(e[1],10);return isNaN(i)||isNaN(a)?s:i/a}function n(t,e,s,i){let a={};if(t)for(let s in e)t.hasOwnProperty(s)||(a[s]=e[s]);else a=e;if(!s)return a;for(let t in a){let e;if(i instanceof Array)for(var o=0;o<i.length;o++){const a=s.getAttribute(i[o]+t);if(a){e=a;break}}else e=s.getAttribute(i+t);null!=e&&(e="false"!==e&&e,e=/^\d+$/.test(e)?parseInt(e,10):e,e=/^\d+\.\d+$/.test(e)?parseFloat(e):e,a[t]=e)}return a}const r=document.createElement("script");r.src="https://www.youtube.com/player_api";const l=document.getElementsByTagName("script")[0];function p(t,e,s,a){this.is_mobile=i(),this.element=t,this.ytid=s,this.uid=a,this.player=null,this.buttons={},this.state={},this.state.play=!1,this.state.mute=!1,this.params={};const r={pause:!1,"play-button":!1,"mute-button":!1,autoplay:!0,muted:!0,loop:!0,mobile:!1,"load-background":!0,resolution:"16:9",onStatusChange:function(){},"inline-styles":!0,"fit-box":!1,offset:200,"start-at":0,"end-at":0,poster:null};this.__init__=function(){this.ytid&&(this.params=n(e,r,this.element,["data-ytbg-","data-vbg-"]),this.params.pause&&(this.params["play-button"]=this.params.pause),this.params.resolution_mod=o(this.params.resolution),this.state.playing=this.params.autoplay,this.state.muted=this.params.muted,this.buildHTML(),this.injectPlayer(),this.params["play-button"]&&this.generateActionButton({name:"play",className:"play-toggle",innerHtml:'<i class="fa"></i>',initialState:!1,stateClassName:"paused",condition_parameter:"autoplay",stateChildClassNames:["fa-pause-circle","fa-play-circle"],actions:["play","pause"]}),this.params["mute-button"]&&this.generateActionButton({name:"mute",className:"mute-toggle",innerHtml:'<i class="fa"></i>',initialState:!0,stateClassName:"muted",condition_parameter:"muted",stateChildClassNames:["fa-volume-up","fa-volume-mute"],actions:["unmute","mute"]}))},this.__init__()}function m(t,e,s,a){this.is_mobile=i(),this.element=t,this.vid=s,this.uid=a,this.player=null,this.buttons={},this.state={},this.state.play=!1,this.state.mute=!1,this.params={};const r={autoplay:!0,muted:!0,loop:!0,mobile:!1,resolution:"16:9","inline-styles":!0,"fit-box":!1,offset:200,"start-at":0,poster:null};this.__init__=function(){this.vid&&(this.params=n(e,r,this.element,["data-ytbg-","data-vbg-"]),this.params.pause&&(this.params["play-button"]=this.params.pause),this.params.resolution_mod=o(this.params.resolution),this.state.playing=this.params.autoplay,this.state.muted=this.params.muted,this.buildHTML(),this.injectPlayer())},this.__init__()}function h(t,e,s,a){this.is_mobile=i(),this.element=t,this.link=s.link,this.ext=s.id,this.uid=a,this.player=null,this.buttons={},this.state={},this.state.play=!1,this.state.mute=!1,this.params={};const r={ogv:"video/ogg",ogm:"video/ogg",ogg:"video/ogg",avi:"video/avi",mp4:"video/mp4",webm:"video/webm"},l={pause:!1,"play-button":!1,"mute-button":!1,autoplay:!0,muted:!0,loop:!0,mobile:!1,resolution:"16:9","inline-styles":!0,"fit-box":!1,offset:200,poster:null};this.__init__=function(){this.link&&this.ext&&(this.mime=r[this.ext.toLowerCase()],this.params=n(e,l,this.element,["data-ytbg-","data-vbg-"]),this.params.pause&&(this.params["play-button"]=this.params.pause),this.params.resolution_mod=o(this.params.resolution),this.state.playing=this.params.autoplay,this.state.muted=this.params.muted,this.buildHTML(),this.injectPlayer(),this.params["play-button"]&&this.generateActionButton({name:"play",className:"play-toggle",innerHtml:'<i class="fa"></i>',initialState:!1,stateClassName:"paused",condition_parameter:"autoplay",stateChildClassNames:["fa-pause-circle","fa-play-circle"],actions:["play","pause"]}),this.params["mute-button"]&&this.generateActionButton({name:"mute",className:"mute-toggle",innerHtml:'<i class="fa"></i>',initialState:!0,stateClassName:"muted",condition_parameter:"muted",stateChildClassNames:["fa-volume-up","fa-volume-mute"],actions:["unmute","mute"]}))},this.__init__()}function u(t,e){this.elements=t,"string"==typeof t&&(this.elements=document.querySelectorAll(t)),this.index={},this.re={},this.re.YOUTUBE=/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i,this.re.VIMEO=/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i,this.re.VIDEO=/\/[^\/]+\.(mp4|ogg|ogv|ogm|webm|avi)\s?$/i,this.__init__=function(){for(let t=0;t<this.elements.length;t++){const s=this.elements[t],i=s.getAttribute("data-youtube")||s.getAttribute("data-vbg"),a=this.getVidID(i);if(!a)continue;const o=this.generateUID(a.id);if(o)switch(a.type){case"YOUTUBE":const t=new p(s,e,a.id,o);this.index[o]=t;break;case"VIMEO":const i=new m(s,e,a.id,o);this.index[o]=i;break;case"VIDEO":const n=new h(s,e,a,o);this.index[o]=n}}this.initYTPlayers()},this.__init__()}var d;l.parentNode.insertBefore(r,l),p.prototype.initYTPlayer=function(){const t=this;window.hasOwnProperty("YT")&&(this.player=new YT.Player(this.uid,{events:{onReady:function(e){t.onVideoPlayerReady(e)},onStateChange:function(e){t.onVideoStateChange(e)},onError:function(t){}}}))},p.prototype.seekTo=function(t){t>0&&this.player.seekTo(t,!0)},p.prototype.onVideoPlayerReady=function(t){this.params.autoplay&&(this.seekTo(this.params["start-at"]),this.player.playVideo())},p.prototype.onVideoStateChange=function(t){0===t.data&&this.params.loop&&(this.seekTo(this.params["start-at"]),this.player.playVideo()),-1===t.data&&this.params.autoplay&&(this.seekTo(this.params["start-at"]),this.player.playVideo(),this.element.dispatchEvent(new CustomEvent("video-background-play",{bubbles:!0,detail:this}))),1===t.data&&(this.iframe.style.opacity=1),this.params.onStatusChange(t)},p.prototype.injectPlayer=function(){this.iframe=document.createElement("iframe"),this.iframe.setAttribute("frameborder",0),this.iframe.setAttribute("allow","autoplay; mute");let t=`https://www.youtube.com/embed/${this.ytid}?&enablejsapi=1&disablekb=1&controls=0&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&modestbranding=1&fs=0`;if(this.params.muted&&(t+="&mute=1"),this.params.autoplay&&(t+="&autoplay=1"),this.params.loop&&(t+="&loop=1"),this.params["end-at"]>0&&(t+=`&end=${this.params["end-at"]}`),this.iframe.src=t,this.uid&&(this.iframe.id=this.uid),this.params["inline-styles"]&&(this.iframe.style.top="50%",this.iframe.style.left="50%",this.iframe.style.transform="translateX(-50%) translateY(-50%)",this.iframe.style.position="absolute",this.iframe.style.opacity=0),this.element.appendChild(this.iframe),this.params["fit-box"])this.iframe.style.width="100%",this.iframe.style.height="100%";else{const t=this;function e(){const e=t.iframe.parentNode.offsetHeight+t.params.offset,s=t.iframe.parentNode.offsetWidth+t.params.offset,i=t.params.resolution_mod;i>s/e?(t.iframe.style.width=e*i+"px",t.iframe.style.height=e+"px"):(t.iframe.style.width=s+"px",t.iframe.style.height=s/i+"px")}if(window.hasOwnProperty("ResizeObserver")){new ResizeObserver((()=>{window.requestAnimationFrame(e)})).observe(this.element)}else window.addEventListener("resize",(()=>{window.requestAnimationFrame(e)}));e()}},p.prototype.buildHTML=function(){const t=this.element.parentNode;e(this.element,"youtube-background video-background");const s={height:"100%",width:"100%","z-index":"0",position:"absolute",overflow:"hidden",top:0,left:0,bottom:0,right:0};if(this.params["mute-button"]||(s["pointer-events"]="none"),(this.params["load-background"]||this.params.poster)&&(this.params["load-background"]&&(s["background-image"]="url(https://img.youtube.com/vi/"+this.ytid+"/maxresdefault.jpg)"),this.params.poster&&(s["background-image"]=this.params.poster),s["background-size"]="cover",s["background-repeat"]="no-repeat",s["background-position"]="center"),this.params["inline-styles"]){for(let t in s)this.element.style[t]=s[t];["absolute","fixed","relative","sticky"].indexOf(t.style.position)||(t.style.position="relative")}if(this.is_mobile&&!this.params.mobile)return this.element;if(this.params["play-button"]||this.params["mute-button"]){const e=document.createElement("div");e.className="video-background-controls",e.style.position="absolute",e.style.top="10px",e.style.right="10px",e.style["z-index"]=2,this.controls_element=e,t.appendChild(e)}return this.element},p.prototype.play=function(){if(this.buttons.hasOwnProperty("play")){const t=this.buttons.play;s(t.element,t.button_properties.stateClassName),e(t.element.firstChild,t.button_properties.stateChildClassNames[0]),s(t.element.firstChild,t.button_properties.stateChildClassNames[1])}this.player&&(this.params["start-at"]&&this.player.getCurrentTime()<this.params["start-at"]&&this.seekTo(this.params["start-at"]),this.player.playVideo(),this.element.dispatchEvent(new CustomEvent("video-background-play",{bubbles:!0,detail:this})))},p.prototype.pause=function(){if(this.buttons.hasOwnProperty("play")){const t=this.buttons.play;e(t.element,t.button_properties.stateClassName),s(t.element.firstChild,t.button_properties.stateChildClassNames[0]),e(t.element.firstChild,t.button_properties.stateChildClassNames[1])}this.player&&(this.player.pauseVideo(),this.element.dispatchEvent(new CustomEvent("video-background-pause",{bubbles:!0,detail:this})))},p.prototype.unmute=function(){if(this.buttons.hasOwnProperty("mute")){const t=this.buttons.mute;s(t.element,t.button_properties.stateClassName),e(t.element.firstChild,t.button_properties.stateChildClassNames[0]),s(t.element.firstChild,t.button_properties.stateChildClassNames[1])}this.player&&(this.player.unMute(),this.element.dispatchEvent(new CustomEvent("video-background-unmute",{bubbles:!0,detail:this})))},p.prototype.mute=function(){if(this.buttons.hasOwnProperty("mute")){const t=this.buttons.mute;e(t.element,t.button_properties.stateClassName),s(t.element.firstChild,t.button_properties.stateChildClassNames[0]),e(t.element.firstChild,t.button_properties.stateChildClassNames[1])}this.player&&(this.player.mute(),this.element.dispatchEvent(new CustomEvent("video-background-mute",{bubbles:!0,detail:this})))},p.prototype.generateActionButton=function(i){const a=document.createElement("button");a.className=i.className,a.innerHTML=i.innerHtml,e(a.firstChild,i.stateChildClassNames[0]),this.params[i.condition_parameter]===i.initialState&&(e(a,i.stateClassName),s(a.firstChild,i.stateChildClassNames[0]),e(a.firstChild,i.stateChildClassNames[1]));const o=this;a.addEventListener("click",(function(e){t(this,i.stateClassName)?(o.state[i.name]=!1,o[i.actions[0]]()):(o.state[i.name]=!0,o[i.actions[1]]())})),this.buttons[i.name]={element:a,button_properties:i},this.controls_element.appendChild(a)},m.prototype.injectPlayer=function(){this.iframe=document.createElement("iframe"),this.iframe.setAttribute("frameborder",0),this.iframe.setAttribute("allow",["autoplay; mute"]);let t="https://player.vimeo.com/video/"+this.vid+"?background=1&controls=0";if(this.params.muted&&(t+="&muted=1"),this.params.autoplay&&(t+="&autoplay=1"),this.params.loop&&(t+="&loop=1&autopause=0"),this.params["start-at"]&&(t+="#t="+this.params["start-at"]+"s"),this.iframe.src=t,this.uid&&(this.iframe.id=this.uid),(this.params["load-background"]||this.params.poster)&&(this.params.poster&&(wrapper_styles["background-image"]=this.params.poster),wrapper_styles["background-size"]="cover",wrapper_styles["background-repeat"]="no-repeat",wrapper_styles["background-position"]="center"),this.params["inline-styles"]&&(this.iframe.style.top="50%",this.iframe.style.left="50%",this.iframe.style.transform="translateX(-50%) translateY(-50%)",this.iframe.style.position="absolute",this.iframe.style.opacity=1),this.element.appendChild(this.iframe),this.params["fit-box"])this.iframe.style.width="100%",this.iframe.style.height="100%";else{const t=this,e=function(){const e=t.iframe.parentNode.offsetHeight+t.params.offset,s=t.iframe.parentNode.offsetWidth+t.params.offset,i=t.params.resolution_mod;i>s/e?(t.iframe.style.width=e*i+"px",t.iframe.style.height=e+"px"):(t.iframe.style.width=s+"px",t.iframe.style.height=s/i+"px")};if(window.hasOwnProperty("ResizeObserver")){new ResizeObserver((()=>{window.requestAnimationFrame(e)})).observe(this.element)}else window.addEventListener("resize",(()=>{window.requestAnimationFrame(e)}));e()}},m.prototype.buildHTML=function(){const t=this.element.parentNode;e(this.element,"youtube-background");const s={height:"100%",width:"100%","z-index":"0",position:"absolute",overflow:"hidden",top:0,left:0,bottom:0,right:0};if((this.params["load-background"]||this.params.poster)&&(this.params.poster&&(s["background-image"]=this.params.poster),s["background-size"]="cover",s["background-repeat"]="no-repeat",s["background-position"]="center"),this.params["mute-button"]||(s["pointer-events"]="none"),this.params["load-background"]&&(s["background-size"]="cover",s["background-repeat"]="no-repeat",s["background-position"]="center"),this.params["inline-styles"]){for(let t in s)this.element.style[t]=s[t];["absolute","fixed","relative","sticky"].indexOf(t.style.position)||(t.style.position="relative")}return this.element},h.prototype.seekTo=function(t){this.player.hasOwnProperty("fastSeek")?this.player.fastSeek(t):this.player.currentTime=t},h.prototype.injectPlayer=function(){this.player=document.createElement("video"),this.player.muted=this.params.muted,this.player.autoplay=this.params.autoplay,this.player.loop=this.params.loop,this.player.playsinline=!0,this.player.setAttribute("id",this.uid),this.params["inline-styles"]&&(this.player.style.top="50%",this.player.style.left="50%",this.player.style.transform="translateX(-50%) translateY(-50%)",this.player.style.position="absolute",this.player.style.opacity=0,this.player.addEventListener("canplay",(t=>{t.target.style.opacity=1})));const t=this,e=document.createElement("source");if(e.setAttribute("src",this.link),e.setAttribute("type",this.mime),this.player.appendChild(e),this.element.appendChild(this.player),this.params["fit-box"])this.player.style.width="100%",this.player.style.height="100%";else{function e(){const e=t.player.parentNode.offsetHeight+t.params.offset,s=t.player.parentNode.offsetWidth+t.params.offset,i=t.params.resolution_mod;i>s/e?(t.player.style.width=e*i+"px",t.player.style.height=e+"px"):(t.player.style.width=s+"px",t.player.style.height=s/i+"px")}if(window.hasOwnProperty("ResizeObserver")){new ResizeObserver((()=>{window.requestAnimationFrame(e)})).observe(this.element)}else window.addEventListener("resize",(()=>{window.requestAnimationFrame(e)}));e()}},h.prototype.buildHTML=function(){const t=this.element.parentNode;e(this.element,"video-background");const s={height:"100%",width:"100%","z-index":"0",position:"absolute",overflow:"hidden",top:0,left:0,bottom:0,right:0};if(this.params["mute-button"]||(s["pointer-events"]="none"),(this.params["load-background"]||this.params.poster)&&(this.params.poster&&(s["background-image"]=`url('${this.params.poster}')`),s["background-size"]="cover",s["background-repeat"]="no-repeat",s["background-position"]="center"),this.params["inline-styles"]){for(let t in s)this.element.style[t]=s[t];["absolute","fixed","relative","sticky"].indexOf(t.style.position)||(t.style.position="relative")}if(this.is_mobile&&!this.params.mobile)return this.element;if(this.params["play-button"]||this.params["mute-button"]){const e=document.createElement("div");e.className="video-background-controls",e.style.position="absolute",e.style.top="10px",e.style.right="10px",e.style["z-index"]=2,this.controls_element=e,t.appendChild(e)}return this.element},h.prototype.play=function(){if(this.buttons.hasOwnProperty("play")){const t=this.buttons.play;s(t.element,t.button_properties.stateClassName),e(t.element.firstChild,t.button_properties.stateChildClassNames[0]),s(t.element.firstChild,t.button_properties.stateChildClassNames[1])}this.player&&(this.player.play(),this.element.dispatchEvent(new CustomEvent("video-background-play",{bubbles:!0,detail:this})))},h.prototype.pause=function(){if(this.buttons.hasOwnProperty("play")){const t=this.buttons.play;e(t.element,t.button_properties.stateClassName),s(t.element.firstChild,t.button_properties.stateChildClassNames[0]),e(t.element.firstChild,t.button_properties.stateChildClassNames[1])}this.player&&(this.player.pause(),this.element.dispatchEvent(new CustomEvent("video-background-pause",{bubbles:!0,detail:this})))},h.prototype.unmute=function(){if(this.buttons.hasOwnProperty("mute")){const t=this.buttons.mute;s(t.element,t.button_properties.stateClassName),e(t.element.firstChild,t.button_properties.stateChildClassNames[0]),s(t.element.firstChild,t.button_properties.stateChildClassNames[1])}this.player&&(this.player.muted=!1,this.element.dispatchEvent(new CustomEvent("video-background-unmute",{bubbles:!0,detail:this})))},h.prototype.mute=function(){if(this.buttons.hasOwnProperty("mute")){const t=this.buttons.mute;e(t.element,t.button_properties.stateClassName),s(t.element.firstChild,t.button_properties.stateChildClassNames[0]),e(t.element.firstChild,t.button_properties.stateChildClassNames[1])}this.player&&(this.player.muted=!0,this.element.dispatchEvent(new CustomEvent("video-background-mute",{bubbles:!0,detail:this})))},h.prototype.generateActionButton=function(i){const a=document.createElement("button");a.className=i.className,a.innerHTML=i.innerHtml,e(a.firstChild,i.stateChildClassNames[0]),this.params[i.condition_parameter]===i.initialState&&(e(a,i.stateClassName),s(a.firstChild,i.stateChildClassNames[0]),e(a.firstChild,i.stateChildClassNames[1]));const o=this;a.addEventListener("click",(function(e){t(this,i.stateClassName)?(o.state[i.name]=!1,o[i.actions[0]]()):(o.state[i.name]=!0,o[i.actions[1]]())})),this.buttons[i.name]={element:a,button_properties:i},this.controls_element.appendChild(a)},u.prototype.getVidID=function(t){if(null!=t)for(let e in this.re){const s=t.match(this.re[e]);if(s&&s.length)return this.re[e].lastIndex=0,{id:s[1],type:e,regex_pts:s,link:t}}return null},u.prototype.generateUID=function(t){let e=t+"-"+a(0,9999);for(;this.index.hasOwnProperty(e);)e=t+"-"+a(0,9999);return e},u.prototype.pauseVideos=function(){for(let t in this.index)this.index[t].pause()},u.prototype.playVideos=function(){for(let t in this.index)this.index[t].play()},u.prototype.initYTPlayers=function(t){const e=this;window.onYouTubeIframeAPIReady=function(){for(let t in e.index)e.index[t]instanceof p&&e.index[t].initYTPlayer();t&&setTimeout(t,100)},window.hasOwnProperty("YT")&&window.YT.loaded&&window.onYouTubeIframeAPIReady()},"function"==typeof jQuery&&((d=jQuery).fn.youtube_background=function(t){const e=d(this);return new u(this,t),e}),window.VideoBackgrounds=u}();

/* custom rating scale */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=function(){function e(){var e=this,n=function(){var n=["br-wrapper"];""!==e.options.theme&&n.push("br-theme-"+e.options.theme),e.$elem.wrap(t("<div />",{"class":n.join(" ")}))},i=function(){e.$elem.unwrap()},a=function(n){return t.isNumeric(n)&&(n=Math.floor(n)),t('option[value="'+n+'"]',e.$elem)},r=function(){var n=e.options.initialRating;return n?a(n):t("option:selected",e.$elem)},o=function(){var n=e.$elem.find('option[value="'+e.options.emptyValue+'"]');return!n.length&&e.options.allowEmpty?(n=t("<option />",{value:e.options.emptyValue}),n.prependTo(e.$elem)):n},l=function(t){var n=e.$elem.data("barrating");return"undefined"!=typeof t?n[t]:n},s=function(t,n){null!==n&&"object"==typeof n?e.$elem.data("barrating",n):e.$elem.data("barrating")[t]=n},u=function(){var t=r(),n=o(),i=t.val(),a=t.data("html")?t.data("html"):t.text(),l=null!==e.options.allowEmpty?e.options.allowEmpty:!!n.length,u=n.length?n.val():null,d=n.length?n.text():null;s(null,{userOptions:e.options,ratingValue:i,ratingText:a,originalRatingValue:i,originalRatingText:a,allowEmpty:l,emptyRatingValue:u,emptyRatingText:d,readOnly:e.options.readonly,ratingMade:!1})},d=function(){e.$elem.removeData("barrating")},c=function(){return l("ratingText")},f=function(){return l("ratingValue")},g=function(){var n=t("<div />",{"class":"br-widget"});return e.$elem.find("option").each(function(){var i,a,r,o;i=t(this).val(),i!==l("emptyRatingValue")&&(a=t(this).text(),r=t(this).data("html"),r&&(a=r),o=t("<a />",{href:"#","data-rating-value":i,"data-rating-text":a,html:e.options.showValues?a:""}),n.append(o))}),e.options.showSelectedRating&&n.append(t("<div />",{text:"","class":"br-current-rating"})),e.options.reverse&&n.addClass("br-reverse"),e.options.readonly&&n.addClass("br-readonly"),n},p=function(){return l("userOptions").reverse?"nextAll":"prevAll"},h=function(t){a(t).prop("selected",!0),l("userOptions").triggerChange&&e.$elem.change()},m=function(){t("option",e.$elem).prop("selected",function(){return this.defaultSelected}),l("userOptions").triggerChange&&e.$elem.change()},v=function(t){t=t?t:c(),t==l("emptyRatingText")&&(t=""),e.options.showSelectedRating&&e.$elem.parent().find(".br-current-rating").text(t)},y=function(t){return Math.round(Math.floor(10*t)/10%1*100)},b=function(){e.$widget.find("a").removeClass(function(t,e){return(e.match(/(^|\s)br-\S+/g)||[]).join(" ")})},w=function(){var n,i,a=e.$widget.find('a[data-rating-value="'+f()+'"]'),r=l("userOptions").initialRating,o=t.isNumeric(f())?f():0,s=y(r);if(b(),a.addClass("br-selected br-current")[p()]().addClass("br-selected"),!l("ratingMade")&&t.isNumeric(r)){if(o>=r||!s)return;n=e.$widget.find("a"),i=a.length?a[l("userOptions").reverse?"prev":"next"]():n[l("userOptions").reverse?"last":"first"](),i.addClass("br-fractional"),i.addClass("br-fractional-"+s)}},$=function(t){return l("allowEmpty")&&l("userOptions").deselectable?f()==t.attr("data-rating-value"):!1},x=function(n){n.on("click.barrating",function(n){var i,a,r=t(this),o=l("userOptions");return n.preventDefault(),i=r.attr("data-rating-value"),a=r.attr("data-rating-text"),$(r)&&(i=l("emptyRatingValue"),a=l("emptyRatingText")),s("ratingValue",i),s("ratingText",a),s("ratingMade",!0),h(i),v(a),w(),o.onSelect.call(e,f(),c(),n),!1})},C=function(e){e.on("mouseenter.barrating",function(){var e=t(this);b(),e.addClass("br-active")[p()]().addClass("br-active"),v(e.attr("data-rating-text"))})},O=function(t){e.$widget.on("mouseleave.barrating blur.barrating",function(){v(),w()})},R=function(e){e.on("touchstart.barrating",function(e){e.preventDefault(),e.stopPropagation(),t(this).click()})},V=function(t){t.on("click.barrating",function(t){t.preventDefault()})},S=function(t){x(t),e.options.hoverState&&(C(t),O(t))},T=function(t){t.off(".barrating")},j=function(t){var n=e.$widget.find("a");l("userOptions").fastClicks&&R(n),t?(T(n),V(n)):S(n)};this.show=function(){l()||(n(),u(),e.$widget=g(),e.$widget.insertAfter(e.$elem),w(),v(),j(e.options.readonly),e.$elem.hide())},this.readonly=function(t){"boolean"==typeof t&&l("readOnly")!=t&&(j(t),s("readOnly",t),e.$widget.toggleClass("br-readonly"))},this.set=function(t){var n=l("userOptions");0!==e.$elem.find('option[value="'+t+'"]').length&&(s("ratingValue",t),s("ratingText",e.$elem.find('option[value="'+t+'"]').text()),s("ratingMade",!0),h(f()),v(c()),w(),n.silent||n.onSelect.call(this,f(),c()))},this.clear=function(){var t=l("userOptions");s("ratingValue",l("originalRatingValue")),s("ratingText",l("originalRatingText")),s("ratingMade",!1),m(),v(c()),w(),t.onClear.call(this,f(),c())},this.destroy=function(){var t=f(),n=c(),a=l("userOptions");T(e.$widget.find("a")),e.$widget.remove(),d(),i(),e.$elem.show(),a.onDestroy.call(this,t,n)}}return e.prototype.init=function(e,n){return this.$elem=t(n),this.options=t.extend({},t.fn.barrating.defaults,e),this.options},e}();t.fn.barrating=function(n,i){return this.each(function(){var a=new e;if(t(this).is("select")||t.error("Sorry, this plugin only works with select fields."),a.hasOwnProperty(n)){if(a.init(i,this),"show"===n)return a.show(i);if(a.$elem.data("barrating"))return a.$widget=t(this).next(".br-widget"),a[n](i)}else{if("object"==typeof n||!n)return i=n,a.init(i,this),a.show();t.error("Method "+n+" does not exist on jQuery.barrating")}})},t.fn.barrating.defaults={theme:"",initialRating:null,allowEmpty:null,emptyValue:"",showValues:!1,showSelectedRating:!0,deselectable:!0,reverse:!1,readonly:!1,fastClicks:!0,hoverState:!0,silent:!1,triggerChange:!0,onSelect:function(t,e,n){},onClear:function(t,e){},onDestroy:function(t,e){}},t.fn.barrating.BarRating=e});
//# sourceMappingURL=jquery.barrating.min.js.map

/* logic */
jQuery(function() {
	'use strict';
	
	/* globals */
	
	/* clean up */
	jQuery('#ytbg').remove();
	jQuery("body#SurveyEngineBody").removeClass("csat-ltr").removeClass("csat-rtl");
	jQuery("body#SurveyEngineBody").css("background-image", "none");
	
	/* center the survey box vertically */
	jQuery("#SkinContent").wrap("<div class='outerContainer'></div>");
	jQuery(".outerContainer").wrapInner("<div class='middleContainer'></div>");
	jQuery(".middleContainer").wrapInner("<div class='innerContainer'></div>");
	
	/* always attach progress bar to the bottom */
	jQuery("#ProgressBar").css("position", "fixed").css("bottom", "0").css("left", "0").css("z-index", "10000").css("min-width", "100%");
	
	/* locals */
	
	/* check if qute is active on survey page */
	if (jQuery("span.qute")[0]) {
		
		/* check if side bar left is activated */
		if (jQuery("span.themeType").attr('id') == 'sideBarLeft') {
			jQuery('div#SkinContent').addClass("sideBarOnTheLeft");
			jQuery('div#Buttons').appendTo(jQuery("div#Questions"));
			
			/* set side bar background */
			var setContentOverlayBackground = jQuery('span.sideBarBackground').attr('id');
			if (typeof setContentOverlayBackground !== "undefined" && setContentOverlayBackground !== "i") {
				jQuery("div#SkinContent div#Questions").css("background-color", setContentOverlayBackground);
			}
			
			/* set sidebar within content box width */
			var setSideBarWidth = jQuery('span.sideBarWidth').attr('id');
			if (typeof setSideBarWidth !== "undefined" && setSideBarWidth !== "i") {
				jQuery("div#SkinContent div#Questions").css("width", setSideBarWidth);
			}
		}
		
		/* check if side bar right is activated */
		else if (jQuery("span.themeType").attr('id') == 'sideBarRight') {
			jQuery('div#SkinContent').addClass("sideBarOnTheRight");
			jQuery('div#Buttons').appendTo(jQuery("div#Questions"));
			
			/* set content overlay background */
			var setContentOverlayBackground = jQuery('span.sideBarBackground').attr('id');
			if (typeof setContentOverlayBackground !== "undefined" && setContentOverlayBackground !== "i") {
				jQuery("div#SkinContent div#Questions").css("background-color", setContentOverlayBackground);
			}
			
			/* set sidebar within content box width */
			var setSideBarWidth = jQuery('span.sideBarWidth').attr('id');
			if (typeof setSideBarWidth !== "undefined" && setSideBarWidth !== "i") {
				jQuery("div#SkinContent div#Questions").css("width", setSideBarWidth);
			}
		}
		
		/* qute without a sidebar but with image as content box background */
		else if (jQuery("span.themeType").attr('id') == 'asContentBackground') {
			jQuery('div#SkinContent').addClass("noSideBar");
		}
		
		/* if img with class asContentBoxBackground exists read src and add image as background for content box */
		if (jQuery("img.asContentBoxBackgroundImage")[0]) {
			var backgroundImage = jQuery('img.asContentBoxBackgroundImage').attr('src');
			var setContentBoxBackgroundOverlay = jQuery('img.asContentBoxBackgroundImage').attr('id');
			
			if (jQuery("span.themeType").attr('id') == 'asContentBoxBackground') {
				jQuery("#Questions, #Buttons").css("background", setContentBoxBackgroundOverlay);
				jQuery('body#SurveyEngineBody #SkinContent').wrapInner('<div id="SurveyContentBackground"></div>');
				jQuery("body#SurveyEngineBody #SkinContent #SurveyContentBackground").css("background", "url(" + backgroundImage + ")");
				jQuery("body#SurveyEngineBody #SurveyContentBackground").css("background-position", "0 0");
				jQuery("body#SurveyEngineBody #SurveyContentBackground").css("background-attachment", "fixed");
				jQuery("body#SurveyEngineBody #SurveyContentBackground").css("background-size", "cover");
				jQuery("body#SurveyEngineBody #SurveyContentBackground").css("background-repeat", "no-repeat");
			} else {
				jQuery("body#SurveyEngineBody #SkinContent").css("background", "url(" + backgroundImage + ")");
				jQuery("body#SurveyEngineBody #SkinContent").css("background-position", "0 0");
				jQuery("body#SurveyEngineBody #SkinContent").css("background-attachment", "fixed");
				jQuery("body#SurveyEngineBody #SkinContent").css("background-size", "cover");
				jQuery("body#SurveyEngineBody #SkinContent").css("	background-repeat", "no-repeat");
			}
			jQuery("img.asContentBoxBackgroundImage").addClass("variableImage");
		}
		
		/* set content overlay background */
		var setBackgroundColor = jQuery('span.backgroundColor').attr('id');
		if (typeof setBackgroundColor !== "undefined" && setBackgroundColor !== "i") {
			jQuery("body#SurveyEngineBody").css("background", setBackgroundColor);
		}
		/* set background of content box */
		var setSkinContentBackground = jQuery('span.contentBoxBackground').attr('id');
		if (typeof setSkinContentBackground !== "undefined" && setSkinContentBackground !== "i") {
			jQuery("div#SkinContent").css("background-color", setSkinContentBackground);
		}
		/* set font color and border colors */
		var setFontColor = jQuery('span.fontColor').attr('id');
		if (typeof setFontColor !== "undefined" && setFontColor !== "i") {
			jQuery("div#SkinContent button, div#SkinContent input, div#SkinContent select, div#SkinContent textarea, div#SkinContent div, div#SkinContent label, div#SkinContent fieldset, div#SkinContent table, div#SkinContent table tr, div#SkinContent table tr td, div#SkinContent span, div#SkinContent div#EndOfSurvey, div#SkinContent label.QuestionText, div#SkinContent label.QuestionText h2, div#SkinContent label.QuestionText h3, div#SkinContent #Buttons input, div#SkinContent ul, div#SkinContent ul li, div#SkinContent #ProgressBar table tr td, div#SkinContent p").css("color", setFontColor);
			jQuery("div#SkinContent input, div#SkinContent textarea, div#SkinContent select, table.ChoiceStructure tr.ChoiceRow label.q-radio, tr.Choice td.AnswerCell label.q-radio").css("border-color", setFontColor);
		}
		/* set survey content box width */
		var surveyContentBoxWidth = jQuery('span.contentBoxWidth').attr('id');
		if (typeof surveyContentBoxWidth !== "undefined" && surveyContentBoxWidth !== "i") {
			jQuery("body#SurveyEngineBody div#SkinContent").addClass("customContentboxWidth");
		}
	} else {
		jQuery("#SkinContent").removeClass("leftSideBar").removeClass("sideBarOnTheLeft").removeClass("asContentBackground").removeClass("videoBackground").removeClass("customContentboxWidth");
	}

	if (jQuery("span.themeType").attr('id') == 'asContentBoxBackground') {
		jQuery('div#SkinContent').addClass("noSideBar");
	}
	
	/* if div with class ytFullBackgroundVideo exists add video as page background */
	if (jQuery(".ytFullBackgroundVideo")[0]) {
		jQuery("img.asPageBackgroundImage").remove();
		var getPageBackgroundBackgroundVideo = jQuery('span.ytFullBackgroundVideo').attr('id');
		getPageBackgroundBackgroundVideo = getPageBackgroundBackgroundVideo.split("-and-");
		var setPageBackgroundVideoId = getPageBackgroundBackgroundVideo[0];
		var setBackgroundOverlay = setBackgroundOverlay = getPageBackgroundBackgroundVideo[1];
		jQuery("body#SurveyEngineBody #Overlay").css("background", setBackgroundOverlay);
		jQuery('<div data-vbg="https://www.youtube.com/watch?v=' + setPageBackgroundVideoId + '" id="ytbg"></div>').insertBefore('body#SurveyEngineBody');
		jQuery('[data-vbg]').youtube_background();
	}
	
	/* if div with class ytBackgroundVideo iexists add the video as content box background */
	if (jQuery(".ytBackgroundVideo")[0]) {
		jQuery("img.asContentBoxBackgroundImage").remove();
		var getContentBoxBackgroundVideo = jQuery('span.ytBackgroundVideo').attr('id');
		getContentBoxBackgroundVideo = getContentBoxBackgroundVideo.split("-and-");
		var setContentBoxBackgroundVideo = getContentBoxBackgroundVideo[0];
		var setContentBoxBackgroundOverlay = "";
		if (jQuery("span.themeType").attr('id') == 'asContentBoxBackground') {
			setContentBoxBackgroundOverlay = getContentBoxBackgroundVideo[1];
		}
		jQuery('<div data-vbg="https://www.youtube.com/watch?v=' + setContentBoxBackgroundVideo + '" id="ytbg"></div>').appendTo('#SkinContent');
		jQuery('[data-vbg]').youtube_background();
		if (jQuery("span.themeType").attr('id') == 'asContentBoxBackground') {
			jQuery("#Questions, #Buttons").css("background", setContentBoxBackgroundOverlay);
		}
	}
	
	/* if id csat-ltr exists add 5 point rating scale coloring from left to right */
	if (jQuery("[id*='csat-ltr']").length > 0) {
		jQuery("body#SurveyEngineBody").addClass("csat-ltr");
	}
	
	/* if id csat-rtl exists add 5 point rating scale coloring from right to left */
	if (jQuery("[id*='csat-rtl']").length > 0) {
		jQuery("body#SurveyEngineBody").addClass("csat-rtl");
	}
	
	/* if image with class asPageBackground exists add it as page background - set transparent color in id of the img */
	if (jQuery(".asPageBackgroundImage")[0]) {
		var setBodyBackgroundImage = jQuery('img.asPageBackgroundImage').attr('src');
		var setBodyBackgroundOverlay = jQuery('img.asPageBackgroundImage').attr('id');
		jQuery('body#SurveyEngineBody').css("background-image", "url(" + setBodyBackgroundImage + ")");
		jQuery("body#SurveyEngineBody").css("background-position", "center center");
		jQuery("body#SurveyEngineBody").css("background-attachment", "fixed");
		jQuery("body#SurveyEngineBody").css("background-size", "cover");
		jQuery("body#SurveyEngineBody").css("	background-repeat", "no-repeat");
		jQuery("body#SurveyEngineBody #Overlay").css("background", setBodyBackgroundOverlay);
	}
	
	/* font rating icons */
	if (jQuery(".ratingScaleIcon")[0]) {
		var getRatingScaleFormats = jQuery('span.ratingScaleIcon').attr('id');
		getRatingScaleFormats = getRatingScaleFormats.split("-and-");
		var getRatingScaleIcon = getRatingScaleFormats[0];
		var getRatingScaleIconColor = getRatingScaleFormats[1];
		var getRatingScaleIconHoverOrSelected = getRatingScaleFormats[2];
		var getRatingScaleIconSize = getRatingScaleFormats[3];
		jQuery("head").append("<style>.br-theme-fontawesome-icons .br-widget a { font-size: " + getRatingScaleIconSize + "!important; } .br-theme-fontawesome-icons .br-widget a:after { content: '\\" + getRatingScaleIcon + "'; color: " + getRatingScaleIconColor + "; } .br-theme-fontawesome-icons .br-widget a.br-active:after { color: " + getRatingScaleIconHoverOrSelected + "; } .br-theme-fontawesome-icons .br-widget a.br-selected:after { color: " + getRatingScaleIconHoverOrSelected + "; }</style>");
		jQuery('select.ChoiceStructure option:first-child').val('');
		
		/* 2. custom rating theme: load font awesome stars */
		jQuery('select.ChoiceStructure').barrating({
			theme: 'fontawesome-icons'
		});
	}
});
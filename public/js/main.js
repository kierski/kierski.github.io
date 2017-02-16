"use strict";particlesJS("particles",{particles:{number:{value:120,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}});var load=function(){setTimeout(function(){document.querySelector("body").classList.add("loaded")},500);var e=document.querySelector("#loader-wrapper"),t=document.querySelector("main.main"),n=function(){["transitionend","webkitTransitionEnd","mozTransitionEnd","oTransitionEnd"].forEach(function(t){e.addEventListener(t,function(){e.style.display="none","none"===e.style.display&&i()},!1)})},i=function(){t.setAttribute("style","visibility: visible; opacity: 1")};n()},header=function(){var e=function(){var e=document.querySelector(".header__bg"),t=document.querySelector(".header__intro"),n=document.querySelector("header.header").nextSibling.nextElementSibling.offsetTop;window.addEventListener("scroll",function(){if(n>=window.pageYOffset){var i=document.querySelector("body").scrollTop;$(e).css({top:-(i/10)+"%"}),$(t).css({top:(50+i/40).toFixed(2)+"%"})}})},t=function(){$(".typed").typed({strings:["My name is A. Kierski","I'm a front-end developer","I love simplicity"],typeSpeed:100,backDelay:900,loop:!0})},n=function(){var e=document.querySelector(".indicator"),t=document.querySelector("header.header").nextSibling.nextElementSibling,n=t.offsetTop,i=document.querySelector("header.header"),o=i.offsetTop;window.addEventListener("scroll",function(){n/2>=window.pageYOffset?e.classList.remove("indicator--animate"):e.classList.add("indicator--animate"),a()}),e.addEventListener("click",function(t){t.preventDefault(),e.href.substr(this.href.lastIndexOf("/")+1)===i.id?$("html,body").animate({scrollTop:o},500):$("html,body").animate({scrollTop:n},500),e.classList.toggle("indicator--animate"),a()});var a=function(){e.classList.contains("indicator--animate")?e.href=i.id:e.href=t.id}};e(),t(),n()},skillbar=function(){var e=$(".about__skills--countbar"),t=!0;$(window).scroll(function(){var n=$(window).scrollTop(),i=$("#about").offset().top;n>=i/1.5&&t&&($(e).each(function(){$(this).animate({width:$(this).attr("data-percent")},3e3)}),t=!1)})};document.addEventListener("DOMContentLoaded",function(e){load(),header(),skillbar()}),console.log("Hi there! 😘 ");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpY2xlcy1jb25maWcuanMiLCJsb2FkLmpzIiwiaGVhZGVyLmpzIiwic2tpbGxiYXIuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbInBhcnRpY2xlc0pTIiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJ0eXBlIiwic3Ryb2tlIiwid2lkdGgiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJpbWFnZSIsInNyYyIsImhlaWdodCIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsInJldGluYV9kZXRlY3QiLCJjb25maWdfZGVtbyIsImhpZGVfY2FyZCIsImJhY2tncm91bmRfY29sb3IiLCJiYWNrZ3JvdW5kX2ltYWdlIiwiYmFja2dyb3VuZF9wb3NpdGlvbiIsImJhY2tncm91bmRfcmVwZWF0IiwiYmFja2dyb3VuZF9zaXplIiwibG9hZCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJsb2FkZXJXcmFwcGVyIiwibWFpbkNvbnRlbnQiLCJyZW1vdmVMb2FkZXIiLCJmb3JFYWNoIiwidHJhbnNpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJzaG93Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImhlYWRlciIsInNjcm9sbEhlYWRlciIsImhlYWRlckJnIiwiaGVhZGVySW50cm8iLCJzZWN0aW9uQmVsb3ciLCJuZXh0U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsIm9mZnNldFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidG9wT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiJCIsImNzcyIsInRvcCIsInRvRml4ZWQiLCJ0eXBlSW50cm8iLCJ0eXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJiYWNrRGVsYXkiLCJsb29wIiwibW92ZVRvU2VjdGlvbiIsImluZGljYXRvciIsInNlY3Rpb25CZWxvd29mZnNldFRvcCIsImhlYWRlcmZmc2V0VG9wIiwiY2hlY2tIYXNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsInN1YnN0ciIsInRoaXMiLCJsYXN0SW5kZXhPZiIsImlkIiwiYW5pbWF0ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwic2tpbGxiYXIiLCJjb3VudGJhcnMiLCJjb3VudGluZyIsInNjcm9sbCIsIndpbmRvd1Njcm9sbFBvc2l0aW9uVG9wIiwib2JqZWN0T2Zmc2V0VG9wIiwib2Zmc2V0IiwiZWFjaCIsImF0dHIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJZQUNBQSxhQUFZLGFBR1JDLFdBQ0VDLFFBQ0VDLE1BQVMsSUFDVEMsU0FDRUMsUUFBVSxFQUNWQyxXQUFjLE1BR2xCQyxPQUNFSixNQUFTLFdBRVhLLE9BQ0VDLEtBQVEsU0FDUkMsUUFDRUMsTUFBUyxFQUNUSixNQUFTLFdBRVhLLFNBQ0VDLFNBQVksR0FFZEMsT0FDRUMsSUFBTyxpQkFDUEosTUFBUyxJQUNUSyxPQUFVLE1BR2RDLFNBQ0VkLE1BQVMsR0FDVGUsUUFBVSxFQUNWQyxNQUNFZCxRQUFVLEVBQ1ZlLE1BQVMsRUFDVEMsWUFBZSxHQUNmQyxNQUFRLElBR1pDLE1BQ0VwQixNQUFTLEVBQ1RlLFFBQVUsRUFDVkMsTUFDRWQsUUFBVSxFQUNWZSxNQUFT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QVMsc0JBQ2hDYixFQUFVTSxLQUFPN0IsRUFBT2lDLEdBRXhCVixFQUFVTSxLQUFPekIsRUFBYTZCLElBT2pDaEMsS0FDQWUsSUFDQU0sS0N0RkllLFNBQVcsV0FFZixHQUFNQyxHQUFZMUIsRUFBRSw0QkFDaEIyQixHQUFXLENBRWYzQixHQUFFSixRQUFRZ0MsT0FBTyxXQUNmLEdBQUlDLEdBQTBCN0IsRUFBRUosUUFBUUcsWUFDcEMrQixFQUFrQjlCLEVBQUUsVUFBVStCLFNBQVM3QixHQUN2QzJCLElBQTJCQyxFQUFnQixLQUN6Q0gsSUFDRjNCLEVBQUUwQixHQUFXTSxLQUFLLFdBQ2hCaEMsRUFBRW1CLE1BQU1HLFNBQ05oRyxNQUFPMEUsRUFBRW1CLE1BQU1jLEtBQUssaUJBQ3BCLE9BRUpOLEdBQVcsS0NmbkJyRCxVQUFTUyxpQkFBaUIsbUJBQW9CLFNBQVVtRCxHSkF4RHZILE9BR0l5RSxTQUNFcUMsYUFHSVUsUUFBQUMsSUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5wYXJ0aWNsZXNKUygncGFydGljbGVzJyxcblxuICB7XG4gICAgXCJwYXJ0aWNsZXNcIjoge1xuICAgICAgXCJudW1iZXJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IDEyMCxcbiAgICAgICAgXCJkZW5zaXR5XCI6IHtcbiAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICAgIFwidmFsdWVfYXJlYVwiOiA4MDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICBcInZhbHVlXCI6IFwiI2ZmZmZmZlwiXG4gICAgICB9LFxuICAgICAgXCJzaGFwZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImNpcmNsZVwiLFxuICAgICAgICBcInN0cm9rZVwiOiB7XG4gICAgICAgICAgXCJ3aWR0aFwiOiAwLFxuICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwb2x5Z29uXCI6IHtcbiAgICAgICAgICBcIm5iX3NpZGVzXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgXCJzcmNcIjogXCJpbWcvZ2l0aHViLnN2Z1wiLFxuICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJvcGFjaXR5XCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAwLjUsXG4gICAgICAgIFwicmFuZG9tXCI6IGZhbHNlLFxuICAgICAgICBcImFuaW1cIjoge1xuICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICAgIFwic3BlZWRcIjogMSxcbiAgICAgICAgICBcIm9wYWNpdHlfbWluXCI6IDAuMSxcbiAgICAgICAgICBcInN5bmNcIjogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2l6ZVwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogNSxcbiAgICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcbiAgICAgICAgXCJhbmltXCI6IHtcbiAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgICBcInNwZWVkXCI6IDQwLFxuICAgICAgICAgIFwic2l6ZV9taW5cIjogMC4xLFxuICAgICAgICAgIFwic3luY1wiOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwiZGlzdGFuY2VcIjogMTUwLFxuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBcIm9wYWNpdHlcIjogMC40LFxuICAgICAgICBcIndpZHRoXCI6IDFcbiAgICAgIH0sXG4gICAgICBcIm1vdmVcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICBcInNwZWVkXCI6IDYsXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibm9uZVwiLFxuICAgICAgICBcInJhbmRvbVwiOiBmYWxzZSxcbiAgICAgICAgXCJzdHJhaWdodFwiOiBmYWxzZSxcbiAgICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLFxuICAgICAgICBcImF0dHJhY3RcIjoge1xuICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICAgIFwicm90YXRlWFwiOiA2MDAsXG4gICAgICAgICAgXCJyb3RhdGVZXCI6IDEyMDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJpbnRlcmFjdGl2aXR5XCI6IHtcbiAgICAgIFwiZGV0ZWN0X29uXCI6IFwiY2FudmFzXCIsXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwib25ob3ZlclwiOiB7XG4gICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1vZGVcIjogXCJyZXB1bHNlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvbmNsaWNrXCI6IHtcbiAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICAgIFwibW9kZVwiOiBcInB1c2hcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlc2l6ZVwiOiB0cnVlXG4gICAgICB9LFxuICAgICAgXCJtb2Rlc1wiOiB7XG4gICAgICAgIFwiZ3JhYlwiOiB7XG4gICAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXG4gICAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJidWJibGVcIjoge1xuICAgICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxuICAgICAgICAgIFwic2l6ZVwiOiA0MCxcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IDIsXG4gICAgICAgICAgXCJvcGFjaXR5XCI6IDgsXG4gICAgICAgICAgXCJzcGVlZFwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwdWxzZVwiOiB7XG4gICAgICAgICAgXCJkaXN0YW5jZVwiOiAyMDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJwdXNoXCI6IHtcbiAgICAgICAgICBcInBhcnRpY2xlc19uYlwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcInBhcnRpY2xlc19uYlwiOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlLFxuICAgIFwiY29uZmlnX2RlbW9cIjoge1xuICAgICAgXCJoaWRlX2NhcmRcIjogZmFsc2UsXG4gICAgICBcImJhY2tncm91bmRfY29sb3JcIjogXCIjYjYxOTI0XCIsXG4gICAgICBcImJhY2tncm91bmRfaW1hZ2VcIjogXCJcIixcbiAgICAgIFwiYmFja2dyb3VuZF9wb3NpdGlvblwiOiBcIjUwJSA1MCVcIixcbiAgICAgIFwiYmFja2dyb3VuZF9yZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICAgIFwiYmFja2dyb3VuZF9zaXplXCI6IFwiY292ZXJcIlxuICAgIH1cbiAgfVxuXG4pO1xuIiwiXG5jb25zdCBsb2FkID0gKCkgPT4ge1xuXG5cdC8vIHBhZ2UgaXMgcmVhZHlcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuXHR9LCA1MDApO1xuXG5cdC8vIHZhcmlhYmxlc1xuXHRjb25zdCBsb2FkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRlci13cmFwcGVyJyk7XG5cdGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbi5tYWluJyk7XG5cblx0Y29uc3QgcmVtb3ZlTG9hZGVyID0gKCkgPT4ge1xuICAgIFsndHJhbnNpdGlvbmVuZCcsICd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ21velRyYW5zaXRpb25FbmQnLCAnb1RyYW5zaXRpb25FbmQnXS5mb3JFYWNoKGZ1bmN0aW9uICh0cmFuc2l0aW9uKSB7XG5cdFx0XHRsb2FkZXJXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsb2FkZXJXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdGlmIChsb2FkZXJXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRcdHNob3dDb250ZW50KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIGZhbHNlKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBzaG93Q29udGVudCA9ICgpID0+IHtcblx0XHRtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6IHZpc2libGU7IG9wYWNpdHk6IDEnKTtcblx0fTtcblxuXHRyZW1vdmVMb2FkZXIoKTtcblxufTtcbiIsIlxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuXG4gIC8vIHNjcm9sbCBoZWFkZXJcbiAgY29uc3Qgc2Nyb2xsSGVhZGVyID0gKCkgPT4ge1xuICBcdGNvbnN0IGhlYWRlckJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYmcnKTtcbiAgXHRjb25zdCBoZWFkZXJJbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2ludHJvJyk7XG4gIFx0Y29uc3Qgc2VjdGlvbkJlbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyLmhlYWRlcicpLm5leHRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5vZmZzZXRUb3A7XG4gIFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcblxuICBcdFx0aWYgKHNlY3Rpb25CZWxvdyA+PSB3aW5kb3cucGFnZVlPZmZzZXQpIHtcbiAgXHRcdFx0Y29uc3QgdG9wT2Zmc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNjcm9sbFRvcDtcbiAgICAgICAgLy8gcHVyZSBKU1xuICBcdFx0XHQvLyBoZWFkZXJCZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RvcDonICsgLSh0b3BPZmZzZXQvMTApICsgJyU7Jyk7XG4gIFx0XHRcdC8vIGhlYWRlckludHJvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndG9wOicgKyAoNTAgKyB0b3BPZmZzZXQgLyA0MCkudG9GaXhlZCgyKSArICclJyk7XG4gICAgICAgIC8vIGpRdWVyeVxuICAgICAgICAkKGhlYWRlckJnKS5jc3Moe1xuICAgICAgICAgJ3RvcCcgOiAtKHRvcE9mZnNldC8xMCkgKyAnJScsXG4gICAgICAgIH0pO1xuICAgICAgICAkKGhlYWRlckludHJvKS5jc3Moe1xuICAgICAgICAgJ3RvcCcgOiAoNTAgKyB0b3BPZmZzZXQgLyA0MCkudG9GaXhlZCgyKSArICclJyxcbiAgICAgICAgfSk7XG4gIFx0XHR9XG5cbiAgXHR9KTtcbiAgfTtcblxuICAvLyB0eXBlZFxuICBjb25zdCB0eXBlSW50cm8gPSAoKSA9PiB7XG4gIFx0JChcIi50eXBlZFwiKS50eXBlZCh7XG4gIFx0XHRzdHJpbmdzOiBbXCJNeSBuYW1lIGlzIEEuIEtpZXJza2lcIiwgXCJJJ20gYSBmcm9udC1lbmQgZGV2ZWxvcGVyXCIsIFwiSSBsb3ZlIHNpbXBsaWNpdHlcIl0sXG4gIFx0XHR0eXBlU3BlZWQ6IDEwMCxcbiAgXHRcdGJhY2tEZWxheTogOTAwLFxuICBcdFx0bG9vcDogdHJ1ZVxuICBcdH0pO1xuICB9O1xuXG4gIC8vIGluZGljYXRvclxuICBjb25zdCBtb3ZlVG9TZWN0aW9uID0gKCkgPT4ge1xuXG4gIFx0Y29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGljYXRvcicpO1xuICBcdGNvbnN0IHNlY3Rpb25CZWxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlci5oZWFkZXInKS5uZXh0U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIFx0Y29uc3Qgc2VjdGlvbkJlbG93b2Zmc2V0VG9wID0gc2VjdGlvbkJlbG93Lm9mZnNldFRvcDtcbiAgXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIuaGVhZGVyJyk7XG4gIFx0Y29uc3QgaGVhZGVyZmZzZXRUb3AgPSBoZWFkZXIub2Zmc2V0VG9wO1xuXG4gIFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICBcdFx0aWYgKHNlY3Rpb25CZWxvd29mZnNldFRvcCAvIDIgPj0gd2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gIFx0XHRcdGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdpbmRpY2F0b3ItLWFuaW1hdGUnKTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3ItLWFuaW1hdGUnKTtcbiAgXHRcdH1cbiAgXHRcdGNoZWNrSGFzaCgpO1xuICBcdH0pO1xuXG4gIFx0Ly8gY2xpY2sgbGlzdGVuZXJcbiAgXHRpbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICBcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIFx0XHRpZiAoaW5kaWNhdG9yLmhyZWYuc3Vic3RyKHRoaXMuaHJlZi5sYXN0SW5kZXhPZignLycpICsgMSkgPT09IGhlYWRlci5pZCkge1xuICBcdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgXHRcdFx0XHRzY3JvbGxUb3A6IGhlYWRlcmZmc2V0VG9wXG4gIFx0XHRcdH0sIDUwMCk7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgXHRcdFx0XHRzY3JvbGxUb3A6IHNlY3Rpb25CZWxvd29mZnNldFRvcFxuICBcdFx0XHR9LCA1MDApO1xuICBcdFx0fVxuXG4gIFx0XHRpbmRpY2F0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnaW5kaWNhdG9yLS1hbmltYXRlJyk7XG4gIFx0XHRjaGVja0hhc2goKTtcbiAgXHR9KTtcblxuICBcdGNvbnN0IGNoZWNrSGFzaCA9ICgpID0+IHtcbiAgXHRcdGlmIChpbmRpY2F0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmRpY2F0b3ItLWFuaW1hdGUnKSkge1xuICBcdFx0XHRpbmRpY2F0b3IuaHJlZiA9IGhlYWRlci5pZDtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdGluZGljYXRvci5ocmVmID0gc2VjdGlvbkJlbG93LmlkO1xuICBcdFx0fVxuICBcdH07XG5cbiAgfTtcblxuICAvLyBmdW5jdGlvbnMgaW5pdFxuICBzY3JvbGxIZWFkZXIoKTtcbiAgdHlwZUludHJvKCk7XG4gIG1vdmVUb1NlY3Rpb24oKTtcblxufTtcbiIsIlxuY29uc3Qgc2tpbGxiYXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgY291bnRiYXJzID0gJCgnLmFib3V0X19za2lsbHMtLWNvdW50YmFyJyk7XG4gIHZhciBjb3VudGluZyA9IHRydWU7XG5cbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgIHZhciB3aW5kb3dTY3JvbGxQb3NpdGlvblRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB2YXIgb2JqZWN0T2Zmc2V0VG9wID0gJCgnI2Fib3V0Jykub2Zmc2V0KCkudG9wO1xuICAgIGlmICh3aW5kb3dTY3JvbGxQb3NpdGlvblRvcCA+PSBvYmplY3RPZmZzZXRUb3AvMS41KSB7XG4gICAgICBpZiAoY291bnRpbmcpIHtcbiAgICAgICAgJChjb3VudGJhcnMpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLmF0dHIoJ2RhdGEtcGVyY2VudCcpXG4gICAgICAgICAgfSwzMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvdW50aW5nID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICB9XG4gIH0pO1xuXG59O1xuIiwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0bG9hZCgpO1xuICBoZWFkZXIoKTtcbiAgc2tpbGxiYXIoKTtcbn0pO1xuXG5jb25zb2xlLmxvZygnSGkgdGhlcmUhIPCfmJggJyApO1xuIl19

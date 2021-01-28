"use strict";/**
 * Trendbuild - WhatsApp Button 
 * Version: 1.0
 * 
 * Ex.:
 * <script id="wbs_trendbuild_script" src="https://wbs.trendbuild.com.br/wbs.js" phone="5561987654321" text="Olá"></script>
 * <script id="wbs_trendbuild_script" src="https://wbs.trendbuild.com.br/wbs.js" phone="5561987654321" text="Olá" align="left"></script>
 * <script id="wbs_trendbuild_script" src="https://wbs.trendbuild.com.br/wbs.js" phone="5561987654321" text="Olá" align="right"></script>
 */(function(a,c){console.log("Trendbuild - WhatsApp Button init");var b=c.getElementById("wbs_trendbuild_script"),d=b.getAttribute("phone"),e=b.getAttribute("text"),f=b.getAttribute("align")||"left",g="https://api.whatsapp.com/send?phone="+d+"&text="+encodeURIComponent(e),h=c.getElementsByTagName("head")[0],i=c.getElementsByTagName("body")[0],j=c.createElement("link");j.setAttribute("rel","stylesheet"),j.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"),h.append(j);var k=c.createElement("a");k.setAttribute("id","wpp_flutuanteV2"),k.setAttribute("title","WhatsApp"),k.setAttribute("style","position: fixed; width: 60px; height: 60px; bottom: 40px; "+f+": 40px; background-color: #25d366; color: #fff; border-radius: 50px; text-align: center; font-size: 30px; box-shadow: 1px 1px 2px #888; z-index: 9999999;"),k.setAttribute("href",g);var l=c.createElement("i");l.setAttribute("class","fa fa-whatsapp "),l.setAttribute("style","margin-top: 16px;"),i.append(k),k.append(l),console.log("phone = "+d),console.log("text = "+e),console.log("align = "+f),console.log("href = "+g),console.log("Trendbuild - WhatsApp Button end")})(window,document);

import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
	<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(66700234, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script> 
<noscript><div><img src="https://mc.yandex.ru/watch/66700234" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-155063631-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-155063631-2');
</script>

<script>
$(function() {
$("#soob").on('click', function() {
gtag('event', 'soob', { 'event_category': 'form', 'event_action': 'submit', });
});
</script>
<script>
$(function() {
$("#gobot").on('click', function() {
gtag('event', 'gobot', { 'event_category': 'form', 'event_action': 'submit', });
});
</script>

`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});
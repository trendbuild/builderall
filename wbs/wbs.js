
/**
 * Trendbuild - WhatsApp Button 
 * Version: 1.0
 * 
 * Ex.:
 * <script id="wbs_trendbuild_script" src="https://wbs.trendbuild.com.br/wbs.js" phone="5561987654321" text="Olá"></script>
 * <script id="wbs_trendbuild_script" src="https://wbs.trendbuild.com.br/wbs.js" phone="5561987654321" text="Olá" align="left"></script>
 * <script id="wbs_trendbuild_script" src="https://wbs.trendbuild.com.br/wbs.js" phone="5561987654321" text="Olá" align="right"></script>
 */
(function (f, b) {

  console.log('Trendbuild - WhatsApp Button init');

  const src = b.getElementById('wbs_trendbuild_script');
  const phone = src.getAttribute('phone');
  const text = src.getAttribute('text');
  const align = src.getAttribute('align') || 'left';
  const href = 'https://api.whatsapp.com/send?phone=' + phone + '&text=' + encodeURIComponent(text);

  let head = b.getElementsByTagName('head')[0];
  let body = b.getElementsByTagName('body')[0];

  let fontawesome = b.createElement('link');
  fontawesome.setAttribute('rel', 'stylesheet');
  fontawesome.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css');
  head.append(fontawesome);

  let link = b.createElement('a');
  link.setAttribute('id', 'wpp_flutuanteV2');
  link.setAttribute('title', 'WhatsApp');
  link.setAttribute('style', 'position: fixed; width: 60px; height: 60px; bottom: 40px; ' + align + ': 40px; background-color: #25d366; color: #fff; border-radius: 50px; text-align: center; font-size: 30px; box-shadow: 1px 1px 2px #888; z-index: 9999999;');
  link.setAttribute('href', href);

  let icon = b.createElement('i');
  icon.setAttribute('class', 'fa fa-whatsapp ');
  icon.setAttribute('style', 'margin-top: 16px;');

  body.append(link);
  link.append(icon);

  console.log('phone = ' + phone);
  console.log('text = ' + text);
  console.log('align = ' + align);
  console.log('href = ' + href);

  console.log('Trendbuild - WhatsApp Button end');

})(window, document);



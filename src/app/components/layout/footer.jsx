'use client';
import { useEffect } from 'react';
import AOS from 'aos'; // AOS import 추가
import 'aos/dist/aos.css'; // AOS CSS 추가

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <>
      {/* <footer class="c-footer">
<div class="o-container">
<div class="c-footer_inner">
<div class="c-footer_top || o-grid -col-2 -col-3@from-small -col-4@from-large -gutters">
<div class="c-footer_logo">
<div>
<span class="c-icon">
<svg class="svg-footer-logo" focusable="false" aria-hidden="true"><use xlink:href="/static/images/sprite.svg#footer-logo"></use></svg>
</span>
</div>
<div class="c-text -label-large">

<ul class="language-selector ">




<li class="language-selector-item ">
<a href="/fr/" class="language-selector-link ">
Français
</a>
</li>


</ul>

</div>
</div>


<div id="grid_item_106905">
<p class="c-text -label-large">Services</p>
<div class="c-footer_current_nav ">

<ul>

<li>
<a href="/advisory" class="c-button -minimal">
<span class="c-button_label">Advisory</span>
</a>
</li>

<li>
<a href="/blockchain" class="c-button -minimal">
<span class="c-button_label">Blockchain</span>
</a>
</li>

<li>
<a href="/product-development" class="c-button -minimal">
<span class="c-button_label">Product Development</span>
</a>
</li>

<li>
<a href="/enterprise-software" class="c-button -minimal">
<span class="c-button_label">Enterprise Software</span>
</a>
</li>

<li>
<a href="/artificial-intelligence-ai" class="c-button -minimal">
<span class="c-button_label">Artificial Intelligence (AI)</span>
</a>
</li>

</ul>

</div>
<style>
#grid_item_106905 {

@media (min-width: 700px) and (max-width: 1199px) {
grid-column-start: 2
}
@media (min-width: 1200px) {
grid-column-start: 3;
}
}
</style>
</div>



<div id="grid_item_106906">
<p class="c-text -label-large"></p>
<div class="c-footer_current_nav no-title">



<ul>


<li class="custom-link">
<a href="/projects" class="c-button -link -large wait-appear-animation" data-scramble-hover="" aria-label="Projects" title="Projects">
<span class="c-button_label" data-scramble-text="">
Projects
</span>

</a>
</li>



<li class="custom-link">
<a href="https://webisoft.com/blog" class="c-button -link -large wait-appear-animation" data-scramble-hover="" target="_blank" aria-label="Blog" title="Blog">
<span class="c-button_label" data-scramble-text="">
Blog
</span>


<span class="c-button_icon">
<span class="c-icon">
<svg class="svg-arrow-up-right" focusable="false" aria-hidden="true"><use xlink:href="/static/images/sprite.svg?v=1#arrow-up-right"></use></svg>
</span>
</span>

<span class="c-button_icon">
<span class="c-icon">
<svg viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg">
<path d="M1.368 0H12.274V10.488L10.716 11.932V6.574C10.716 5.244 10.716 3.933 10.735 2.603L1.083 11.97L0 10.792L9.69 1.425C8.36 1.444 7.03 1.444 5.7 1.444H0L1.368 0Z" fill="currentColor"></path>
</svg>
</span>
</span>

</a>
</li>



<li class="custom-link">
<a href="https://webisoft.com/articles" class="c-button -link -large wait-appear-animation" data-scramble-hover="" target="_blank" aria-label="Articles" title="Articles">
<span class="c-button_label" data-scramble-text="">
Articles
</span>


<span class="c-button_icon">
<span class="c-icon">
<svg class="svg-arrow-up-right" focusable="false" aria-hidden="true"><use xlink:href="/static/images/sprite.svg?v=1#arrow-up-right"></use></svg>
</span>
</span>

<span class="c-button_icon">
<span class="c-icon">
<svg viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg">
<path d="M1.368 0H12.274V10.488L10.716 11.932V6.574C10.716 5.244 10.716 3.933 10.735 2.603L1.083 11.97L0 10.792L9.69 1.425C8.36 1.444 7.03 1.444 5.7 1.444H0L1.368 0Z" fill="currentColor"></path>
</svg>
</span>
</span>

</a>
</li>



<li class="custom-link">
<a href="https://coinkit.com/" class="c-button -link -large wait-appear-animation" data-scramble-hover="" target="_blank" aria-label="Coinkit" title="Coinkit">
<span class="c-button_label" data-scramble-text="">
Coinkit
</span>


<span class="c-button_icon">
<span class="c-icon">
<svg class="svg-arrow-up-right" focusable="false" aria-hidden="true"><use xlink:href="/static/images/sprite.svg?v=1#arrow-up-right"></use></svg>
</span>
</span>

<span class="c-button_icon">
<span class="c-icon">
<svg viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg">
<path d="M1.368 0H12.274V10.488L10.716 11.932V6.574C10.716 5.244 10.716 3.933 10.735 2.603L1.083 11.97L0 10.792L9.69 1.425C8.36 1.444 7.03 1.444 5.7 1.444H0L1.368 0Z" fill="currentColor"></path>
</svg>
</span>
</span>

</a>
</li>


</ul>



</div>
<style>
#grid_item_106906 {

@media (min-width: 700px) and (max-width: 1199px) {
grid-column-start: 3
}
@media (min-width: 1200px) {
grid-column-start: 4;
}
}
</style>
</div>



<div id="grid_item_106911">
<p class="c-text -label-large">Social Media</p>
<div class="c-footer_current_nav ">



<ul>


<li class="custom-link">
<a href="https://www.linkedin.com/company/webisoftdigital/" class="c-button -minimal" target="_blank" aria-label="LinkedIn" title="LinkedIn">
<span class="c-button_label" data-scramble-text="">
LinkedIn
</span>


<span class="c-button_icon">
<span class="c-icon">
<svg class="svg-arrow-up-right" focusable="false" aria-hidden="true"><use xlink:href="/static/images/sprite.svg?v=1#arrow-up-right"></use></svg>
</span>
</span>

<span class="c-button_icon">
<span class="c-icon">
<svg viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg">
<path d="M1.368 0H12.274V10.488L10.716 11.932V6.574C10.716 5.244 10.716 3.933 10.735 2.603L1.083 11.97L0 10.792L9.69 1.425C8.36 1.444 7.03 1.444 5.7 1.444H0L1.368 0Z" fill="currentColor"></path>
</svg>
</span>
</span>

</a>
</li>



<li class="custom-link">
<a href="https://www.facebook.com/WebisoftDigital" class="c-button -minimal" target="_blank" aria-label="Facebook" title="Facebook">
<span class="c-button_label" data-scramble-text="">
Facebook
</span>


<span class="c-button_icon">
<span class="c-icon">
<svg class="svg-arrow-up-right" focusable="false" aria-hidden="true"><use xlink:href="/static/images/sprite.svg?v=1#arrow-up-right"></use></svg>
</span>
</span>

<span class="c-button_icon">
<span class="c-icon">
<svg viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg">
<path d="M1.368 0H12.274V10.488L10.716 11.932V6.574C10.716 5.244 10.716 3.933 10.735 2.603L1.083 11.97L0 10.792L9.69 1.425C8.36 1.444 7.03 1.444 5.7 1.444H0L1.368 0Z" fill="currentColor"></path>
</svg>
</span>
</span>

</a>
</li>



<li class="custom-link">
<a href="https://x.com/webisoft_" class="c-button -minimal" target="_blank" aria-label="Twitter" title="Twitter">
<span class="c-button_label" data-scramble-text="">
Twitter
</span>


<span class="c-button_icon">
<span class="c-icon">
<svg class="svg-arrow-up-right" focusable="false" aria-hidden="true"><use xlink:href="/static/images/sprite.svg?v=1#arrow-up-right"></use></svg>
</span>
</span>

<span class="c-button_icon">
<span class="c-icon">
<svg viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg">
<path d="M1.368 0H12.274V10.488L10.716 11.932V6.574C10.716 5.244 10.716 3.933 10.735 2.603L1.083 11.97L0 10.792L9.69 1.425C8.36 1.444 7.03 1.444 5.7 1.444H0L1.368 0Z" fill="currentColor"></path>
</svg>
</span>
</span>

</a>
</li>


</ul>



</div>
<style>
#grid_item_106911 {

@media (min-width: 700px) and (max-width: 1199px) {
grid-column-start: 3
}
@media (min-width: 1200px) {
grid-column-start: 4;
}
}
</style>
</div>


</div>
<div class="c-footer_bottom || o-grid -col-3@from-small -col-4@from-large -gutters-x">
<h2 class="c-footer_offices_title || c-text -label-large">Office</h2>

<div class="c-tabs  c-footer_offices" data-module-tabs="m107">
<div class="c-tabs_inner">
<div class="c-tabs_list" role="tablist" aria-labelledby="tablist-footer">

<button class="c-button c-tabs_tab -link -large wait-appear-animation" data-tabs="tab" role="tab" id="tab-footer-33" aria-controls="tabpanel-footer-33" aria-selected="true" data-scramble-hover="">
<span class="c-button_label" data-scramble-text="">Canada</span>
</button>

<button class="c-button c-tabs_tab -link -large wait-appear-animation" data-tabs="tab" role="tab" id="tab-footer-34" aria-controls="tabpanel-footer-34" aria-selected="false" data-scramble-hover="" tabindex="-1">
<span class="c-button_label" data-scramble-text="">United States</span>
</button>

</div>
<div class="c-tabs_panel_list" data-tabs="panels-list" style="--list-height: 88px;">

<div class="c-tabs_panel is-active" id="tabpanel-footer-33" role="tabpanel" aria-labelledby="tab-footer-33">
<div class="c-address">
<h3 class="c-address_title || c-text -label-large || u-screen-reader-text@from-small">Canada</h3>
<div class="c-address_inner">
<a class="c-button -minimal" href="https://maps.google.com/?q=460 Saint-Catherine W.  Suite 305  Montreal, Quebec  H3B 1A6" target="_blank">
<span class="c-button_label"><p>460 Saint-Catherine W.<br>
Suite 305<br>
Montreal, Quebec<br>
H3B 1A6</p></span>
</a>
<ul class="c-address_ctas">
<li>
<a class="c-button -minimal" href="/contact">
<span class="c-button_label">Contact us</span>
</a>
</li>
<li>
<a class="c-button -minimal" href="tel:+1(514) 874-3224">
<span class="c-button_label">(514) 874-3224</span>
</a>
</li>
</ul>
</div>
</div>
</div>

<div class="c-tabs_panel is-hidden" id="tabpanel-footer-34" role="tabpanel" aria-labelledby="tab-footer-34">
<div class="c-address">
<h3 class="c-address_title || c-text -label-large || u-screen-reader-text@from-small">United States</h3>
<div class="c-address_inner">
<a class="c-button -minimal" href="https://maps.google.com/?q=333 SE 2nd Avenue  Suite 2000  Miami Florida  33131" target="_blank">
<span class="c-button_label"><p>333 SE 2nd Avenue<br>
Suite 2000<br>
Miami Florida<br>
33131</p></span>
</a>
<ul class="c-address_ctas">
<li>
<a class="c-button -minimal" href="/contact">
<span class="c-button_label">Contact us</span>
</a>
</li>
<li>
<a class="c-button -minimal" href="tel:+1(514) 874-3224">
<span class="c-button_label">(514) 874-3224</span>
</a>
</li>
</ul>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
<div class="c-footer_footer || o-grid -col-2 -col-3@from-small -col-4@from-large -gutters-x">
<p class="c-footer_copyright || c-text -label-small">© 2025 Webisoft</p>
<div class="c-footer_terms">
<a class="c-button -link -small" href="https://webisoft.com/privacy-policy">
<span class="c-button_label">Privacy Policy</span>
</a>
</div>
<div class="c-footer_credits">
<a class="c-button -link -small" href="https://locomotive.ca/" target="_blank" rel="noopener noreferrer">
<span class="c-button_label">Designed by locomotive®</span>
</a>
</div>
</div>
</div>
</div>
</footer> */}
    </>
  );
}

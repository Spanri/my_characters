(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const e of u)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(u){const e={};return u.integrity&&(e.integrity=u.integrity),u.referrerpolicy&&(e.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?e.credentials="include":u.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(u){if(u.ep)return;u.ep=!0;const e=n(u);fetch(u.href,e)}})();const a=[{id:"bank-layout",title:"\u0421\u0430\u0439\u0442 \u0431\u0430\u043D\u043A\u0430",image:"",year:2019,tags:["frontend","Vue"],text:`\u0422\u043E\u043B\u044C\u043A\u043E \u0432\u0435\u0440\u0441\u0442\u043A\u0430. \u0414\u0430\u043B\u0438 \u043C\u0430\u043A\u0435\u0442\u044B \u0434\u0438\u0437\u0430\u0439\u043D\u0430, \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430\u044F, \u043A\u0440\u043E\u0441\u0441\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043D\u0430\u044F (IE11+) \u0432\u0435\u0440\u0441\u0442\u043A\u0430.
        \u0412\u0445\u043E\u0434 \u0438 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0439\u0434\u0443\u0442 \u043F\u0440\u0438 \u043B\u044E\u0431\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u0445 (\u043D\u043E \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u0435\u0441\u0442\u044C).
        \u041F\u043E\u0441\u043B\u0435 \u0432\u0445\u043E\u0434\u0430/\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0435\u0441\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0438 \u041E\u043D\u043B\u0430\u0439\u043D-\u0431\u0430\u043D\u043A/\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u044B, \u0442\u0430\u043C \u043F\u0440\u0438\u043A\u043E\u043B\u044C\u043D\u0430\u044F \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u0438 \u0435\u0449\u0435 \u0432 \u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0430\u0445 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F 1/2/3 \u043D\u0435\u043F\u043B\u043E\u0445\u0430\u044F!
        
        \u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435: \u0432 \u0433\u0438\u0442\u043B\u0430\u0431\u0435 \u0435\u0441\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043D\u0435 \u043F\u043E \u043A\u043E\u0440\u043D\u044E, \u0432\u044B\u0434\u0430\u0441\u0442 \u043E\u0448\u0438\u0431\u043A\u0443 (\u0442\u043E \u0435\u0441\u0442\u044C \u0441 vue-router \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442).`},{id:"12",title:"\u0421\u0430\u0439\u0442 \u0431\u0430\u043D\u043A\u0430 2",image:"",year:2019,tags:["frontend","Vue"],text:"",linkSite:"https://github.com/Spanri/card-payment-page"}],o=t=>`
  <div class="item">
    <img class="item__image" src="${t.image}" />

    <div class="item__content">
      <h2 class="item__title">${t.title}</h2>

      <div class="item__header-description">
        <span class="item__year">${t.year} \u0433\u043E\u0434</span>
        <span class="item__tags">${t.tags.map(i=>"#"+i).join(" ")}</span>
      </div>

      <div class="item__text">${t.text}</div>

      <div class="item__link-site">\u0421\u0430\u0439\u0442: ${t.linkSite?`<a>${t.linkSite}</a>`:'<span class="item__empty">\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E</span>'}</div>
      <div class="item__link-code">\u041A\u043E\u0434: ${t.linkCode?`<a>${t.linkCode}</a>`:'<span class="item__empty">\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E</span>'}</div>
    </div>
  </div>
`;document.querySelector("#app").innerHTML=`
  <div class="header">
    <p class="header__title">\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u0441\u043A\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</p>
    <p class="header__description">\u041A\u043E\u0437\u043B\u043E\u0432\u0430 \u0410\u043D\u043D\u0430<br/>@spanri<br/>github.com/Spanri</p>
  </div>

  ${a.map(o).join("")}
`;

!function(){"use strict";var t={n:function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},d:function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},o:function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}},n=jQuery,e=t.n(n);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){u=!0,o=t},f:function(){try{l||null==e.return||e.return()}finally{if(u)throw o}}}}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,o=void 0,o=function(t,n){if("object"!==a(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(i,"string"),"symbol"===a(o)?o:String(o)),r)}var i,o}var l=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.addButtons(),this.editingEvents(),this.saveEvents()}var n,a,i;return n=t,(a=[{key:"addButtons",value:function(){var t=e()("#rank_math_seo_details, #rank_math_title, #rank_math_description, #rank_math_image_alt, #rank_math_image_title");t.each((function(){var t=e()(this);t.append(' <a href=#" class="dashicons dashicons-edit" title="'+rankMath.bulkEditTitle+'"></a>'),t.wrapInner("<span/>"),t.append(' <span><a href="#" class="button button-primary button-small rank-math-column-save-all">'+rankMath.buttonSaveAll+'</a> <a href="#" class="button-link button-link-delete rank-math-column-cancel-all">'+rankMath.buttonCancel+"</a></span>")})),t.on("click",".dashicons-edit, .rank-math-column-cancel-all",(function(n){n.preventDefault();var a=e()(this).closest("th");e()(this).hasClass("rank-math-column-cancel-all")?(t.removeClass("bulk-editing"),e()(".rank-math-column-cancel","td.bulk-editing.dirty").trigger("click"),e()("td.bulk-editing").removeClass("bulk-editing")):(a.toggleClass("bulk-editing"),e()("td.column-"+a.attr("id")).toggleClass("bulk-editing"))}))}},{key:"editingEvents",value:function(){e()(".rank-math-column-value").on("input",(function(){var t=e()(this),n=t.closest("td");t.val()!==t.prev().text()?n.addClass("dirty"):n.removeClass("dirty")})).on("keypress",(function(t){if(13===t.keyCode)return e()(this).parent().find(".rank-math-column-save").trigger("click"),!1})),e()(".rank-math-column-cancel").on("click",(function(t){t.preventDefault();var n=e()(this).closest("td");n.removeClass("dirty");var a=n.find(".rank-math-column-value").prev(".rank-math-column-display");a.find("span").length&&(a=a.find("span"));var i=a.html(),o=i.match(/<img\s+[^>]*?src=("|')([^"']+)">/gm);if(o){var l,u=r(o);try{for(u.s();!(l=u.n()).done;){var c=l.value,s=c.match(/alt=("|')([^"']+)/gm)[0];s=s.replace('alt="',""),i=i.replaceAll(c,s)}}catch(t){u.e(t)}finally{u.f()}}n.find(".rank-math-column-value").val(i)}))}},{key:"saveEvents",value:function(){var t=this;e()(".rank-math-column-save-all").on("click",(function(n){n.preventDefault();var a=e()(this),r={},i=[];if(e()(".dirty.bulk-editing").each((function(){var t=e()(this),n=parseInt(t.closest("tr").attr("id").replace("post-","")),a=t.find(".rank-math-column-value");i.push(t),r[n]=r[n]||{},r[n][a.data("field")]=a.val()})),e().isEmptyObject(r))return e()(a.next()).trigger("click"),!0;t.save(r).done((function(n){n.success&&(i.forEach((function(n){t.setColumn(n)})),e()(a.next()).trigger("click"))}))})),e()(".rank-math-column-save").on("click",(function(n){n.preventDefault();var a=e()(this).closest(".dirty"),r=parseInt(a.closest("tr").attr("id").replace("post-","")),i=a.find(".rank-math-column-value"),o={};o[r]={},o[r][i.data("field")]=i.val(),t.save(o).done((function(n){n.success&&t.setColumn(a)}))}))}},{key:"setColumn",value:function(t){t.removeClass("dirty bulk-editing");var n=t.find(".rank-math-column-value").prev(".rank-math-column-display");n.find("span").length&&(n=n.find("span"));var e=t.find(".rank-math-column-value").val();n.text(e)}},{key:"save",value:function(t){return e().ajax({url:rankMath.endpoint+"/updateMetaBulk",method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",rankMath.restNonce)},data:{rows:t}})}}])&&o(n.prototype,a),i&&o(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}();e()((function(){new l}))}();
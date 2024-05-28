(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
  var siteNavigation = document.getElementById('site-navigation');

  // Return early if the navigation doesn't exist.
  if (!siteNavigation) {
    return;
  }
  var button = siteNavigation.getElementsByTagName('button')[0];

  // Return early if the button doesn't exist.
  if ('undefined' === typeof button) {
    return;
  }
  var menu = siteNavigation.getElementsByTagName('ul')[0];

  // Hide menu toggle button if menu is empty and return early.
  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }
  if (!menu.classList.contains('nav-menu')) {
    menu.classList.add('nav-menu');
  }

  // Toggle the .toggled class and the aria-expanded value each time the button is clicked.
  button.addEventListener('click', function () {
    siteNavigation.classList.toggle('toggled');
    if (button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', 'false');
    } else {
      button.setAttribute('aria-expanded', 'true');
    }
  });

  // Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
  document.addEventListener('click', function (event) {
    var isClickInside = siteNavigation.contains(event.target);
    if (!isClickInside) {
      siteNavigation.classList.remove('toggled');
      button.setAttribute('aria-expanded', 'false');
    }
  });

  // Get all the link elements within the menu.
  var links = menu.getElementsByTagName('a');

  // Get all the link elements with children within the menu.
  var linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

  // Toggle focus each time a menu link is focused or blurred.
  var _iterator = _createForOfIteratorHelper(links),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      link.addEventListener('focus', toggleFocus, true);
      link.addEventListener('blur', toggleFocus, true);
    }

    // Toggle focus each time a menu link with children receive a touch event.
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(linksWithChildren),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _link = _step2.value;
      _link.addEventListener('touchstart', toggleFocus, false);
    }

    /**
     * Sets or removes .focus class on an element.
     */
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  function toggleFocus() {
    if (event.type === 'focus' || event.type === 'blur') {
      var self = this;
      // Move up through the ancestors of the current link until we hit .nav-menu.
      while (!self.classList.contains('nav-menu')) {
        // On li elements toggle the class .focus.
        if ('li' === self.tagName.toLowerCase()) {
          self.classList.toggle('focus');
        }
        self = self.parentNode;
      }
    }
    if (event.type === 'touchstart') {
      var menuItem = this.parentNode;
      event.preventDefault();
      var _iterator3 = _createForOfIteratorHelper(menuItem.parentNode.children),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var link = _step3.value;
          if (menuItem !== link) {
            link.classList.remove('focus');
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      menuItem.classList.toggle('focus');
    }
  }
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxhQUFXO0VBQ1osSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBRSxpQkFBa0IsQ0FBQzs7RUFFbkU7RUFDQSxJQUFLLENBQUUsY0FBYyxFQUFHO0lBQ3ZCO0VBQ0Q7RUFFQSxJQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsb0JBQW9CLENBQUUsUUFBUyxDQUFDLENBQUUsQ0FBQyxDQUFFOztFQUVuRTtFQUNBLElBQUssV0FBVyxLQUFLLE9BQU8sTUFBTSxFQUFHO0lBQ3BDO0VBQ0Q7RUFFQSxJQUFNLElBQUksR0FBRyxjQUFjLENBQUMsb0JBQW9CLENBQUUsSUFBSyxDQUFDLENBQUUsQ0FBQyxDQUFFOztFQUU3RDtFQUNBLElBQUssV0FBVyxLQUFLLE9BQU8sSUFBSSxFQUFHO0lBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU07SUFDN0I7RUFDRDtFQUVBLElBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBRSxVQUFXLENBQUMsRUFBRztJQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxVQUFXLENBQUM7RUFDakM7O0VBRUE7RUFDQSxNQUFNLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxFQUFFLFlBQVc7SUFDNUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUUsU0FBVSxDQUFDO0lBRTVDLElBQUssTUFBTSxDQUFDLFlBQVksQ0FBRSxlQUFnQixDQUFDLEtBQUssTUFBTSxFQUFHO01BQ3hELE1BQU0sQ0FBQyxZQUFZLENBQUUsZUFBZSxFQUFFLE9BQVEsQ0FBQztJQUNoRCxDQUFDLE1BQU07TUFDTixNQUFNLENBQUMsWUFBWSxDQUFFLGVBQWUsRUFBRSxNQUFPLENBQUM7SUFD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O01BQUMsU0FBQSxHQUFBO1FBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBO01BQUE7UUFBQSxVQUFBLENBQUEsQ0FBQTtNQUFBO01BQ0QsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUUsT0FBUSxDQUFDO0lBQ3JDO0VBQ0Q7QUFDRCxDQUFDLEVBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogRmlsZSBuYXZpZ2F0aW9uLmpzLlxuICpcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyBUQUIga2V5XG4gKiBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yIGRyb3Bkb3duIG1lbnVzLlxuICovXG4oIGZ1bmN0aW9uKCkge1xuXHRjb25zdCBzaXRlTmF2aWdhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2l0ZS1uYXZpZ2F0aW9uJyApO1xuXG5cdC8vIFJldHVybiBlYXJseSBpZiB0aGUgbmF2aWdhdGlvbiBkb2Vzbid0IGV4aXN0LlxuXHRpZiAoICEgc2l0ZU5hdmlnYXRpb24gKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYnV0dG9uID0gc2l0ZU5hdmlnYXRpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdidXR0b24nIClbIDAgXTtcblxuXHQvLyBSZXR1cm4gZWFybHkgaWYgdGhlIGJ1dHRvbiBkb2Vzbid0IGV4aXN0LlxuXHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgYnV0dG9uICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1lbnUgPSBzaXRlTmF2aWdhdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ3VsJyApWyAwIF07XG5cblx0Ly8gSGlkZSBtZW51IHRvZ2dsZSBidXR0b24gaWYgbWVudSBpcyBlbXB0eSBhbmQgcmV0dXJuIGVhcmx5LlxuXHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgbWVudSApIHtcblx0XHRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoICEgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoICduYXYtbWVudScgKSApIHtcblx0XHRtZW51LmNsYXNzTGlzdC5hZGQoICduYXYtbWVudScgKTtcblx0fVxuXG5cdC8vIFRvZ2dsZSB0aGUgLnRvZ2dsZWQgY2xhc3MgYW5kIHRoZSBhcmlhLWV4cGFuZGVkIHZhbHVlIGVhY2ggdGltZSB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRzaXRlTmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCAndG9nZ2xlZCcgKTtcblxuXHRcdGlmICggYnV0dG9uLmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnICkgPT09ICd0cnVlJyApIHtcblx0XHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApO1xuXHRcdH1cblx0fSApO1xuXG5cdC8vIFJlbW92ZSB0aGUgLnRvZ2dsZWQgY2xhc3MgYW5kIHNldCBhcmlhLWV4cGFuZGVkIHRvIGZhbHNlIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIG5hdmlnYXRpb24uXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRjb25zdCBpc0NsaWNrSW5zaWRlID0gc2l0ZU5hdmlnYXRpb24uY29udGFpbnMoIGV2ZW50LnRhcmdldCApO1xuXG5cdFx0aWYgKCAhIGlzQ2xpY2tJbnNpZGUgKSB7XG5cdFx0XHRzaXRlTmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCAndG9nZ2xlZCcgKTtcblx0XHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xuXHRcdH1cblx0fSApO1xuXG5cdC8vIEdldCBhbGwgdGhlIGxpbmsgZWxlbWVudHMgd2l0aGluIHRoZSBtZW51LlxuXHRjb25zdCBsaW5rcyA9IG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdhJyApO1xuXG5cdC8vIEdldCBhbGwgdGhlIGxpbmsgZWxlbWVudHMgd2l0aCBjaGlsZHJlbiB3aXRoaW4gdGhlIG1lbnUuXG5cdGNvbnN0IGxpbmtzV2l0aENoaWxkcmVuID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAucGFnZV9pdGVtX2hhc19jaGlsZHJlbiA+IGEnICk7XG5cblx0Ly8gVG9nZ2xlIGZvY3VzIGVhY2ggdGltZSBhIG1lbnUgbGluayBpcyBmb2N1c2VkIG9yIGJsdXJyZWQuXG5cdGZvciAoIGNvbnN0IGxpbmsgb2YgbGlua3MgKSB7XG5cdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXMnLCB0b2dnbGVGb2N1cywgdHJ1ZSApO1xuXHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lciggJ2JsdXInLCB0b2dnbGVGb2N1cywgdHJ1ZSApO1xuXHR9XG5cblx0Ly8gVG9nZ2xlIGZvY3VzIGVhY2ggdGltZSBhIG1lbnUgbGluayB3aXRoIGNoaWxkcmVuIHJlY2VpdmUgYSB0b3VjaCBldmVudC5cblx0Zm9yICggY29uc3QgbGluayBvZiBsaW5rc1dpdGhDaGlsZHJlbiApIHtcblx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG9nZ2xlRm9jdXMsIGZhbHNlICk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9nZ2xlRm9jdXMoKSB7XG5cdFx0aWYgKCBldmVudC50eXBlID09PSAnZm9jdXMnIHx8IGV2ZW50LnR5cGUgPT09ICdibHVyJyApIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdC8vIE1vdmUgdXAgdGhyb3VnaCB0aGUgYW5jZXN0b3JzIG9mIHRoZSBjdXJyZW50IGxpbmsgdW50aWwgd2UgaGl0IC5uYXYtbWVudS5cblx0XHRcdHdoaWxlICggISBzZWxmLmNsYXNzTGlzdC5jb250YWlucyggJ25hdi1tZW51JyApICkge1xuXHRcdFx0XHQvLyBPbiBsaSBlbGVtZW50cyB0b2dnbGUgdGhlIGNsYXNzIC5mb2N1cy5cblx0XHRcdFx0aWYgKCAnbGknID09PSBzZWxmLnRhZ05hbWUudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0XHRzZWxmLmNsYXNzTGlzdC50b2dnbGUoICdmb2N1cycgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmID0gc2VsZi5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnICkge1xuXHRcdFx0Y29uc3QgbWVudUl0ZW0gPSB0aGlzLnBhcmVudE5vZGU7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Zm9yICggY29uc3QgbGluayBvZiBtZW51SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuICkge1xuXHRcdFx0XHRpZiAoIG1lbnVJdGVtICE9PSBsaW5rICkge1xuXHRcdFx0XHRcdGxpbmsuY2xhc3NMaXN0LnJlbW92ZSggJ2ZvY3VzJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW51SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCAnZm9jdXMnICk7XG5cdFx0fVxuXHR9XG59KCkgKTtcbiJdfQ==

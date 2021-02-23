!(function(t) {
  function n(i) {
    if (e[i]) return e[i].exports
    var o = (e[i] = { i: i, l: !1, exports: {} })
    return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  var e = {}
  ;(n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: i })
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return n.d(e, 'a', e), e
    }),
    (n.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n)
    }),
    (n.p = ''),
    n((n.s = 0))
})([
  function(t, n, e) {
    e(1), (t.exports = e(4))
  },
  function(t, n, e) {
    'use strict'
    var i =
      Object.assign ||
      function(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = arguments[n]
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
        }
        return t
      }
    e(2)
    var o = e(3)
    !(function(t) {
      function n(t) {
        return (
          (t = i({}, c, t)),
          (function(t) {
            return ['nfc-top-left', 'nfc-top-right', 'nfc-bottom-left', 'nfc-bottom-right'].indexOf(t) > -1
          })(t.positionClass) ||
            (console.warn('An invalid notification position class has been specified.'), (t.positionClass = c.positionClass)),
          t.onclick &&
            'function' != typeof t.onclick &&
            (console.warn('Notification on click must be a function.'), (t.onclick = c.onclick)),
          'number' != typeof t.showDuration && (t.showDuration = c.showDuration),
          ((0, o.isString)(t.theme) && 0 !== t.theme.length) ||
            (console.warn('Notification theme must be a string with length'), (t.theme = c.theme)),
          t
        )
      }
      function e(t) {
        return (
          (t = n(t)),
          function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              e = n.title,
              i = n.message,
              c = r(t.positionClass)
            if (!e && !i) return console.warn('Notification must contain a title or a message!')
            var a = (0, o.createElement)('div', 'ncf', t.theme)
            if (
              (!0 === t.closeOnClick &&
                a.addEventListener('click', function() {
                  return c.removeChild(a)
                }),
              t.onclick &&
                a.addEventListener('click', function(n) {
                  return t.onclick(n)
                }),
              t.displayCloseButton)
            ) {
              var s = (0, o.createElement)('button')
              ;(s.innerText = 'X'),
                !1 === t.closeOnClick &&
                  s.addEventListener('click', function() {
                    return c.removeChild(a)
                  }),
                (0, o.append)(a, s)
            }
            if (
              ((0, o.isString)(e) && e.length && (0, o.append)(a, (0, o.createParagraph)('ncf-title')(e)),
              (0, o.isString)(i) && i.length && (0, o.append)(a, (0, o.createParagraph)('nfc-message')(i)),
              (0, o.append)(c, a),
              t.showDuration && t.showDuration > 0)
            ) {
              var l = setTimeout(function() {
                c.removeChild(a), 0 === c.querySelectorAll('.ncf').length && document.body.removeChild(c)
              }, t.showDuration)
              ;(t.closeOnClick || t.displayCloseButton) &&
                a.addEventListener('click', function() {
                  return clearTimeout(l)
                })
            }
          }
        )
      }
      function r(t) {
        var n = document.querySelector('.' + t)
        return n || ((n = (0, o.createElement)('div', 'ncf-container', t)), (0, o.append)(document.body, n)), n
      }
      var c = {
        closeOnClick: !0,
        displayCloseButton: !1,
        positionClass: 'nfc-top-right',
        onclick: !1,
        showDuration: 3500,
        theme: 'success'
      }
      t.createNotification
        ? console.warn('Window already contains a create notification function. Have you included the script twice?')
        : (t.createNotification = e)
    })(window)
  },
  function(t, n, e) {
    'use strict'
    !(function() {
      function t(t) {
        this.el = t
        for (var n = t.className.replace(/^\s+|\s+$/g, '').split(/\s+/), i = 0; i < n.length; i++) e.call(this, n[i])
      }
      if (!(void 0 === window.Element || 'classList' in document.documentElement)) {
        var n = Array.prototype,
          e = n.push,
          i = n.splice,
          o = n.join
        ;(t.prototype = {
          add: function(t) {
            this.contains(t) || (e.call(this, t), (this.el.className = this.toString()))
          },
          contains: function(t) {
            return -1 != this.el.className.indexOf(t)
          },
          item: function(t) {
            return this[t] || null
          },
          remove: function(t) {
            if (this.contains(t)) {
              for (var n = 0; n < this.length && this[n] != t; n++);
              i.call(this, n, 1), (this.el.className = this.toString())
            }
          },
          toString: function() {
            return o.call(this, ' ')
          },
          toggle: function(t) {
            return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t)
          }
        }),
          (window.DOMTokenList = t),
          (function(t, n, e) {
            Object.defineProperty ? Object.defineProperty(t, n, { get: e }) : t.__defineGetter__(n, e)
          })(Element.prototype, 'classList', function() {
            return new t(this)
          })
      }
    })()
  },
  function(t, n, e) {
    'use strict'
    Object.defineProperty(n, '__esModule', { value: !0 })
    var i = (n.partial = function(t) {
        for (var n = arguments.length, e = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) e[i - 1] = arguments[i]
        return function() {
          for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o]
          return t.apply(void 0, e.concat(i))
        }
      }),
      o = ((n.append = function(t) {
        for (var n = arguments.length, e = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) e[i - 1] = arguments[i]
        return e.forEach(function(n) {
          return t.appendChild(n)
        })
      }),
      (n.isString = function(t) {
        return 'string' == typeof t
      }),
      (n.createElement = function(t) {
        for (var n = arguments.length, e = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) e[i - 1] = arguments[i]
        var o = document.createElement(t)
        return (
          e.length &&
            e.forEach(function(t) {
              return o.classList.add(t)
            }),
          o
        )
      })),
      r = function(t, n) {
        return (t.innerText = n), t
      },
      c = function(t) {
        for (var n = arguments.length, e = Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) e[c - 1] = arguments[c]
        return i(r, o.apply(void 0, [t].concat(e)))
      }
    n.createParagraph = function() {
      for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e]
      return c.apply(void 0, ['p'].concat(n))
    }
  },
  function(t, n) {}
])

function copyToClipboard(text, elementId) {
  if( elementId === undefined) {
	  var t = document.createElement('textarea')
	  document.body.appendChild(t)
	  t.value = text
	  t.select()
	  document.execCommand('copy')
	  document.body.removeChild(t)
  }
  else {
	  var range = document.createRange();
	  var selection = window.getSelection();

	  range.selectNodeContents(document.getElementById(elementId));
	  selection.removeAllRanges();
	  selection.addRange(range);

	  document.execCommand('copy');
	  selection.removeAllRanges();
  }
}


function initButton(id, buttonTitle, copyText, elementId) {
  let button = document.createElement('button')
  button.id = id
  button.textContent = buttonTitle
  button.className = 'link-btn d-toolbar-white-icon-btn url-button ng-isolate-scope'
  button.addEventListener(
    'click',
    function() {
	  copyToClipboard(copyText, elementId)
      window.createNotification({
        closeOnClick: true,
        displayCloseButton: true,
        positionClass: 'nfc-top-right',
        showDuration: 3000,
        theme: 'info'
      })({
        title: '클립보드 COPY',
        message: copyText
      })
    },
    false
  )
  return button
}

function appendButton(target) {
  let buttonIds = ['QFD1boxRNX0', 'QFD1boxRNX1', 'QFD1boxRNX2', 'QFD1boxRNX3', 'QFD1boxRNX4']

  var titleElement = target.querySelector('span.subject.ng-binding');
  if( titleElement === null) {
	  return
  }
    
  let title = titleElement.textContent
  let projectName = target.querySelector('span[ng-bind=\\:\\:\\$ctrl\\.post\\.projectCode]').textContent
  let postNumber = target.querySelector('span[ng-bind=\\:\\:\\$ctrl\\.post\\.number]').textContent
  
  let previousNumberButton = target.querySelector('button[id=' + buttonIds[0] + ']')
  if (previousNumberButton && previousNumberButton.textContent === postNumber) {
    return
  }

  let buttonBar = target.querySelector('div.header-right-toolbar.pull-right.layout-align-start-center.layout-row')
  if (previousNumberButton) {
    for (let i = 0; i < buttonIds.length; i++) {
      let button = target.querySelector('button[id=' + buttonIds[i] + ']')
      buttonBar.removeChild(button)
    }
  }
  const regex = new RegExp('\([[a-z0-9A-Z가-힣]*\]) ([a-z0-9가-힣\s]*)')
  const commitMessage = `[${title.replace(regex, '$2')}/${postNumber}]`
  const numberMessage = commitMessage.replace(/ /gi, '-').replace(/\[/gi, '').replace(/\]/gi, '')
  const branchMessage = `${projectName}/${postNumber}`

  let headerLinkLine = target.querySelector('div.header-link-line.layout-align-start-center.layout-row')
  let link = buttonBar.childNodes[1].getAttribute('data-clipboard-text')
  
  console.log('title 값', projectName)
  var numberButton = initButton(buttonIds[0], postNumber, postNumber)
  var commitButton = initButton(buttonIds[1], '커밋메시지',  commitMessage)
  var branchButton = initButton(buttonIds[4], '브랜치명',  branchMessage)
  var pullRequestButton = initButton(buttonIds[2], 'Pull메시지', '#' + projectName + '/' + postNumber + ': ' + title)

  let onelineText = postNumber + '/' + title

  var aTag = document.createElement('a');
  aTag.setAttribute('id', 'clipboard');
  aTag.value = onelineText
  aTag.innerHTML = onelineText.link(link)

  headerLinkLine.appendChild(aTag);
  
  var messageWithLinkButton = initButton(buttonIds[3], '메시지+링크', onelineText, aTag.getAttribute('id'))
  
  buttonBar.appendChild(numberButton)
  buttonBar.appendChild(commitButton)
  buttonBar.appendChild(branchButton)
  buttonBar.appendChild(pullRequestButton)
  buttonBar.appendChild(messageWithLinkButton)
}

function checkAndAppendButton() {
  let targets = document.getElementsByClassName('task-view ng-scope layout-column')
  for (let i = 0; i < targets.length; i++) {
    appendButton(targets[i])
  }
}

setInterval(() => {
  checkAndAppendButton()
}, 1000)
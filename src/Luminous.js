var l =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function(t, i, e) {
          t != Array.prototype && t != Object.prototype && (t[i] = e.value);
        },
  n =
    "undefined" != typeof window && window === this
      ? this
      : "undefined" != typeof global && null != global
      ? global
      : this;
function p() {
  (p = function() {}), n.Symbol || (n.Symbol = q);
}
var r = 0;
function q(t) {
  return "jscomp_symbol_" + (t || "") + r++;
}
for (var t = n, u = ["Object", "assign"], v = 0; v < u.length - 1; v++) {
  var x = u[v];
  x in t || (t[x] = {}), (t = t[x]);
}
var A = u[u.length - 1],
  B = t[A],
  C =
    B ||
    function(t, i) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        if (n)
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }
      return t;
    };
C != B && null != C && l(t, A, { configurable: !0, writable: !0, value: C }),
  (function(t) {
    function i(n) {
      if (e[n]) return e[n].K;
      var o = (e[n] = { la: n, ga: !1, K: {} });
      return t[n].call(o.K, o, o.K, i), (o.ga = !0), o.K;
    }
    var e = {};
    (i.m = t),
      (i.f = e),
      (i.a = function(t, e, n) {
        i.b(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (i.r = function(t) {
        p(),
          p(),
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            (p(),
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.l = function(t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.da) return t;
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            i.a(
              n,
              o,
              function(i) {
                return t[i];
              }.bind(null, o)
            );
        return n;
      }),
      (i.g = function(t) {
        var e =
          t && t.da
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return i.a(e, "a", e), e;
      }),
      (i.b = function(t, i) {
        return Object.prototype.hasOwnProperty.call(t, i);
      }),
      (i.h = ""),
      i((i.u = 0));
  })([
    function(t, i, e) {
      function n(t, i, e) {
        (i = void 0 === i ? {} : i),
          (e = void 0 === e ? {} : e),
          (this.g = Object.assign({}, { ka: !0 }, i)),
          (this.a = t),
          (this.b = e),
          (this.b._gallery = this),
          (this.b._arrowNavigation = this.g.arrowNavigation),
          this.h();
      }
      function o(t, i) {
        if (
          ((i = void 0 === i ? {} : i),
          (this.j = this.j.bind(this)),
          (this.open = this.open.bind(this)),
          (this.close = this.close.bind(this)),
          (this.g = this.g.bind(this)),
          (this.h = !1),
          (this.b = t),
          !h(this.b))
        )
          throw new TypeError(
            "`new Luminous` requires a DOM element as its first argument."
          );
        (t = document),
          "getRootNode" in this.b && (t = this.b.getRootNode()),
          (t = i.appendToNode || (t === document ? document.body : t)),
          (this.a = {
            B: i.namespace || null,
            v: i.sourceAttribute || "href",
            caption: i.caption || null,
            $: i.openTrigger || "click",
            s: i.closeTrigger || "click",
            Z: i.closeWithEscape || !0,
            Y: i.closeOnScroll || !1,
            w: null == i.showCloseButton || i.showCloseButton,
            ea: t,
            X: i.appendToSelector || null,
            ia: i.onOpen || null,
            D: i.onClose || null,
            A: i.includeImgixJSClass || !1,
            fa: i.injectBaseStyles || !0,
            i: i._gallery || null,
            o: i._arrowNavigation || null
          }),
          (i = document.body),
          t && "getRootNode" in t && (i = t.getRootNode()),
          this.a.fa &&
            ((i && i !== document) || (i = document.head),
            i.querySelector(".lum-base-styles") ||
              (((t = document.createElement("style")).type = "text/css"),
              t.classList.add("lum-base-styles"),
              t.appendChild(
                document.createTextNode(
                  "@keyframes lum-noop{0%{zoom:1}}.lum-lightbox{position:fixed;display:none;top:0;right:0;bottom:0;left:0}.lum-lightbox.lum-open{display:block}.lum-lightbox.lum-closing,.lum-lightbox.lum-opening{animation:lum-noop 1ms}.lum-lightbox-inner{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.lum-lightbox-loader{display:none}.lum-lightbox-inner img{max-width:100%;max-height:100%}.lum-lightbox-image-wrapper{vertical-align:middle;display:table-cell;text-align:center}"
                )
              ),
              i.insertBefore(t, i.firstChild))),
          this.m(),
          this.l();
      }
      function s(t) {
        (t = void 0 === t ? {} : t),
          (this.g = this.g.bind(this)),
          (this.I = this.I.bind(this)),
          (this.J = this.J.bind(this)),
          (this.L = this.L.bind(this)),
          (this.u = this.u.bind(this)),
          (this.N = this.N.bind(this)),
          (this.M = this.M.bind(this));
        var i = t,
          e = void 0 === i.B ? null : i.B,
          n = void 0 === i.C ? l() : i.C,
          o = void 0 === i.F ? l() : i.F,
          s = void 0 === i.v ? l() : i.v;
        if (
          ((this.a = {
            B: e,
            C: n,
            F: o,
            v: s,
            caption: void 0 === i.caption ? null : i.caption,
            A: void 0 !== i.A && i.A,
            i: void 0 === i.i ? null : i.i,
            o: void 0 === i.o ? null : i.o,
            w: void 0 === i.w || i.w,
            D: t.D,
            s: void 0 === i.s ? "click" : i.s
          }),
          !h(this.a.C))
        )
          throw new TypeError(
            "`new Lightbox` requires a DOM element passed as `parentEl`."
          );
        (this.h = this.a.F),
          (this.R = this.b("open")),
          (this.W = this.b("opening")),
          (this.T = this.b("closing")),
          (this.U = this.V = !1);
      }
      function h(t) {
        return (
          !!(p && t instanceof ShadowRoot) ||
          (c
            ? t instanceof HTMLElement
            : t &&
              "object" == typeof t &&
              null !== t &&
              1 === t.nodeType &&
              "string" == typeof t.nodeName)
        );
      }
      function r(t, i) {
        i.forEach(function(i) {
          t.classList.add(i);
        });
      }
      function a(t, i) {
        i.forEach(function(i) {
          t.classList.remove(i);
        });
      }
      function l() {
        throw Error("Missing parameter");
      }
      e.r(i);
      var c = "object" == typeof HTMLElement,
        p = "undefined" != typeof ShadowRoot,
        u =
          "undefined" != typeof document &&
          "animation" in document.createElement("div").style;
      (s.prototype.M = function(t) {
        t && "function" == typeof t.preventDefault && t.preventDefault(),
          (t = this.a.D) && "function" == typeof t && t();
      }),
        (s.prototype.aa = function() {
          this.c.addEventListener(this.a.s, this.M),
            this.G && this.G.addEventListener("click", this.M);
        }),
        (s.prototype.b = function(t) {
          var i = ["lum-" + t],
            e = this.a.B;
          return e && i.push(e + "-" + t), i;
        }),
        (s.prototype.ba = function() {
          (this.c = document.createElement("div")),
            r(this.c, this.b("lightbox")),
            (this.f = document.createElement("div")),
            r(this.f, this.b("lightbox-inner")),
            this.c.appendChild(this.f);
          var t = document.createElement("div");
          r(t, this.b("lightbox-loader")),
            this.f.appendChild(t),
            (this.H = document.createElement("div")),
            r(this.H, this.b("lightbox-image-wrapper")),
            this.f.appendChild(this.H),
            r(
              (t = document.createElement("span")),
              this.b("lightbox-position-helper")
            ),
            this.H.appendChild(t),
            (this.m = document.createElement("img")),
            r(this.m, this.b("img")),
            t.appendChild(this.m),
            (this.l = document.createElement("p")),
            r(this.l, this.b("lightbox-caption")),
            t.appendChild(this.l),
            this.a.w &&
              ((this.G = document.createElement("div")),
              r(this.G, this.b("close-button")),
              this.c.appendChild(this.G)),
            this.a.i && this.ca(),
            this.a.C.appendChild(this.c),
            this.P(),
            this.O(),
            this.a.A && this.m.classList.add("imgix-fluid");
        }),
        (s.prototype.ca = function() {
          this.S("previous", this.J), this.S("next", this.I);
        }),
        (s.prototype.S = function(t, i) {
          var e = document.createElement("button");
          (this[t + "Button"] = e),
            (e.innerText = t),
            r(e, this.b(t + "-button")),
            r(e, this.b("gallery-button")),
            this.f.appendChild(e),
            e.addEventListener(
              "click",
              function(t) {
                t.stopPropagation(), i();
              },
              !1
            );
        }),
        (s.prototype.g = function() {
          var t = this.H.style;
          (t.width = this.f.clientWidth + "px"),
            (t.maxWidth = this.f.clientWidth + "px"),
            (t.height = this.f.clientHeight - this.l.clientHeight + "px"),
            (t.maxHeight = this.f.clientHeight - this.l.clientHeight + "px");
        }),
        (s.prototype.O = function() {
          var t = typeof this.a.caption,
            i = "";
          "string" === t
            ? (i = this.a.caption)
            : "function" === t && (i = this.a.caption(this.h)),
            (this.l.innerHTML = i);
        }),
        (s.prototype.P = function() {
          var t = this,
            i = this.h.getAttribute(this.a.v);
          if (!i)
            throw Error(
              "No image URL was found in the " +
                this.a.v +
                " attribute of the trigger."
            );
          var e = this.b("loading");
          this.V || r(this.c, e),
            (this.m.onload = function() {
              a(t.c, e), (t.V = !0);
            }),
            this.m.setAttribute("src", i);
        }),
        (s.prototype.N = function(t) {
          37 == t.keyCode ? this.J() : 39 == t.keyCode && this.I();
        }),
        (s.prototype.I = function() {
          this.a.i &&
            ((this.h = this.a.i.ha(this.h)), this.P(), this.O(), this.g());
        }),
        (s.prototype.J = function() {
          this.a.i &&
            ((this.h = this.a.i.ja(this.h)), this.P(), this.O(), this.g());
        }),
        (s.prototype.open = function() {
          this.U || (this.ba(), this.aa(), (this.U = !0)),
            (this.h = this.a.F),
            this.P(),
            this.O(),
            r(this.c, this.R),
            this.g(),
            window.addEventListener("resize", this.g, !1),
            this.a.o && window.addEventListener("keydown", this.N, !1),
            u &&
              (this.c.addEventListener("animationend", this.L, !1),
              r(this.c, this.W));
        }),
        (s.prototype.close = function() {
          window.removeEventListener("resize", this.g, !1),
            this.a.o && window.removeEventListener("keydown", this.N, !1),
            u
              ? (this.c.addEventListener("animationend", this.u, !1),
                r(this.c, this.T))
              : a(this.c, this.R);
        }),
        (s.prototype.L = function() {
          this.c.removeEventListener("animationend", this.L, !1),
            a(this.c, this.W);
        }),
        (s.prototype.u = function() {
          this.c.removeEventListener("animationend", this.u, !1),
            a(this.c, this.R),
            a(this.c, this.T);
        }),
        (s.prototype.j = function() {
          this.c && this.a.C.removeChild(this.c);
        }),
        (o.prototype.open = function(t) {
          t && "function" == typeof t.preventDefault && t.preventDefault(),
            this.f.open(),
            this.a.Y && window.addEventListener("scroll", this.close, !1),
            (t = this.a.ia) && "function" == typeof t && t(),
            (this.h = !0);
        }),
        (o.prototype.close = function() {
          this.a.Y && window.removeEventListener("scroll", this.close, !1),
            this.f.close();
          var t = this.a.D;
          t && "function" == typeof t && t(), (this.h = !1);
        }),
        (o.prototype.m = function() {
          var t = this.a.ea;
          this.a.X && (t = document.querySelector(this.a.X)),
            (this.f = new s({
              B: this.a.B,
              C: t,
              F: this.b,
              v: this.a.v,
              caption: this.a.caption,
              A: this.a.A,
              w: this.a.w,
              i: this.a.i,
              o: this.a.o,
              s: this.a.s,
              D: this.close
            }));
        }),
        (o.prototype.l = function() {
          this.b.addEventListener(this.a.$, this.open, !1),
            this.a.Z && window.addEventListener("keyup", this.g, !1);
        }),
        (o.prototype.u = function() {
          this.b.removeEventListener(this.a.$, this.open, !1),
            this.f.c && this.f.c.removeEventListener(this.a.s, this.close, !1),
            this.a.Z && window.removeEventListener("keyup", this.g, !1);
        }),
        (o.prototype.g = function(t) {
          this.h && 27 === t.keyCode && this.close();
        }),
        (o.prototype.j = function() {
          this.u(), this.f.j();
        }),
        (o.prototype.open = o.prototype.open),
        (o.prototype.close = o.prototype.close),
        (o.prototype.destroy = o.prototype.j),
        (n.prototype.h = function() {
          this.f = [];
          for (var t = this.a.length, i = 0; i < t; i++) {
            var e = new o(this.a[i], this.b);
            this.f.push(e);
          }
        }),
        (n.prototype.ha = function(t) {
          return (t = Array.prototype.indexOf.call(this.a, t) + 1) >=
            this.a.length
            ? this.a[0]
            : this.a[t];
        }),
        (n.prototype.ja = function(t) {
          return 0 > (t = Array.prototype.indexOf.call(this.a, t) - 1)
            ? this.a[this.a.length - 1]
            : this.a[t];
        }),
        (n.prototype.j = function() {
          this.f.forEach(function(t) {
            return t.j();
          });
        }),
        (n.prototype.destroy = n.prototype.j),
        (window.LuminousGallery = n),
        (window.Luminous = o);
    }
  ]);
//# sourceMappingURL=luminous.min.js.map

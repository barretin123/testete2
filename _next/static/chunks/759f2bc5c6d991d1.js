(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 33525, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "warnOnce", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e => {}
}, 36171, e => {
    e.v("/_next/static/media/logo.486d9ae7.png")
}, 16015, (e, t, i) => {}, 98547, (e, t, i) => {
    var r = e.i(47167);
    e.r(16015);
    var n = e.r(71645),
        s = n && "object" == typeof n && "default" in n ? n : {
            default: n
        },
        a = void 0 !== r.default && r.default.env && !0,
        o = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        l = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    i = t.name,
                    r = void 0 === i ? "stylesheet" : i,
                    n = t.optimizeForSpeed,
                    s = void 0 === n ? a : n;
                d(o(r), "`name` must be a string"), this._name = r, this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}", d("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = s, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                var l = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = l ? l.getAttribute("content") : null
            }
            var t, i = e.prototype;
            return i.setOptimizeForSpeed = function(e) {
                    d("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), d(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                }, i.isOptimizeForSpeed = function() {
                    return this._optimizeForSpeed
                }, i.inject = function() {
                    var e = this;
                    if (d(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (a || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                        return
                    }
                    this._serverSheet = {
                        cssRules: [],
                        insertRule: function(t, i) {
                            return "number" == typeof i ? e._serverSheet.cssRules[i] = {
                                cssText: t
                            } : e._serverSheet.cssRules.push({
                                cssText: t
                            }), i
                        },
                        deleteRule: function(t) {
                            e._serverSheet.cssRules[t] = null
                        }
                    }
                }, i.getSheetForTag = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }, i.getSheet = function() {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                }, i.insertRule = function(e, t) {
                    if (d(o(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var i = this.getSheet();
                        "number" != typeof t && (t = i.cssRules.length);
                        try {
                            i.insertRule(e, t)
                        } catch (t) {
                            return a || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                    } else {
                        var r = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, r))
                    }
                    return this._rulesCount++
                }, i.replaceRule = function(e, t) {
                    if (this._optimizeForSpeed || "undefined" == typeof window) {
                        var i = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !i.cssRules[e]) return e;
                        i.deleteRule(e);
                        try {
                            i.insertRule(t, e)
                        } catch (r) {
                            a || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), i.insertRule(this._deletedRulePlaceholder, e)
                        }
                    } else {
                        var r = this._tags[e];
                        d(r, "old rule at index `" + e + "` not found"), r.textContent = t
                    }
                    return e
                }, i.deleteRule = function(e) {
                    if ("undefined" == typeof window) return void this._serverSheet.deleteRule(e);
                    if (this._optimizeForSpeed) this.replaceRule(e, "");
                    else {
                        var t = this._tags[e];
                        d(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                    }
                }, i.flush = function() {
                    this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                        return e && e.parentNode.removeChild(e)
                    }), this._tags = []) : this._serverSheet.cssRules = []
                }, i.cssRules = function() {
                    var e = this;
                    return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, i) {
                        return i ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules, function(t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t
                        })) : t.push(null), t
                    }, [])
                }, i.makeStyleTag = function(e, t, i) {
                    t && d(o(t), "makeStyleTag accepts only strings as second parameter");
                    var r = document.createElement("style");
                    this._nonce && r.setAttribute("nonce", this._nonce), r.type = "text/css", r.setAttribute("data-" + e, ""), t && r.appendChild(document.createTextNode(t));
                    var n = document.head || document.getElementsByTagName("head")[0];
                    return i ? n.insertBefore(r, i) : n.appendChild(r), r
                }, t = [{
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }],
                function(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }(e.prototype, t), e
        }();

    function d(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".")
    }
    var c = function(e) {
            for (var t = 5381, i = e.length; i;) t = 33 * t ^ e.charCodeAt(--i);
            return t >>> 0
        },
        u = {};

    function f(e, t) {
        if (!t) return "jsx-" + e;
        var i = String(t),
            r = e + i;
        return u[r] || (u[r] = "jsx-" + c(e + "-" + i)), u[r]
    }

    function h(e, t) {
        "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var i = e + t;
        return u[i] || (u[i] = t.replace(/__jsx-style-dynamic-selector/g, e)), u[i]
    }
    var p = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    i = t.styleSheet,
                    r = void 0 === i ? null : i,
                    n = t.optimizeForSpeed,
                    s = void 0 !== n && n;
                this._sheet = r || new l({
                    name: "styled-jsx",
                    optimizeForSpeed: s
                }), this._sheet.inject(), r && "boolean" == typeof s && (this._sheet.setOptimizeForSpeed(s), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }
            var t = e.prototype;
            return t.add = function(e) {
                var t = this;
                void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                    return e[t] = 0, e
                }, {}));
                var i = this.getIdAndRules(e),
                    r = i.styleId,
                    n = i.rules;
                if (r in this._instancesCounts) {
                    this._instancesCounts[r] += 1;
                    return
                }
                var s = n.map(function(e) {
                    return t._sheet.insertRule(e)
                }).filter(function(e) {
                    return -1 !== e
                });
                this._indices[r] = s, this._instancesCounts[r] = 1
            }, t.remove = function(e) {
                var t = this,
                    i = this.getIdAndRules(e).styleId;
                if (function(e, t) {
                        if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                    }(i in this._instancesCounts, "styleId: `" + i + "` not found"), this._instancesCounts[i] -= 1, this._instancesCounts[i] < 1) {
                    var r = this._fromServer && this._fromServer[i];
                    r ? (r.parentNode.removeChild(r), delete this._fromServer[i]) : (this._indices[i].forEach(function(e) {
                        return t._sheet.deleteRule(e)
                    }), delete this._indices[i]), delete this._instancesCounts[i]
                }
            }, t.update = function(e, t) {
                this.add(t), this.remove(e)
            }, t.flush = function() {
                this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }, t.cssRules = function() {
                var e = this,
                    t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                        return [t, e._fromServer[t]]
                    }) : [],
                    i = this._sheet.cssRules();
                return t.concat(Object.keys(this._indices).map(function(t) {
                    return [t, e._indices[t].map(function(e) {
                        return i[e].cssText
                    }).join(e._optimizeForSpeed ? "" : "\n")]
                }).filter(function(e) {
                    return !!e[1]
                }))
            }, t.styles = function(e) {
                var t, i;
                return t = this.cssRules(), void 0 === (i = e) && (i = {}), t.map(function(e) {
                    var t = e[0],
                        r = e[1];
                    return s.default.createElement("style", {
                        id: "__" + t,
                        key: "__" + t,
                        nonce: i.nonce ? i.nonce : void 0,
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    })
                })
            }, t.getIdAndRules = function(e) {
                var t = e.children,
                    i = e.dynamic,
                    r = e.id;
                if (i) {
                    var n = f(r, i);
                    return {
                        styleId: n,
                        rules: Array.isArray(t) ? t.map(function(e) {
                            return h(n, e)
                        }) : [h(n, t)]
                    }
                }
                return {
                    styleId: f(r),
                    rules: Array.isArray(t) ? t : [t]
                }
            }, t.selectFromServer = function() {
                return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                    return e[t.id.slice(2)] = t, e
                }, {})
            }, e
        }(),
        m = n.createContext(null);

    function g() {
        return new p
    }

    function b() {
        return n.useContext(m)
    }
    m.displayName = "StyleSheetContext";
    var x = s.default.useInsertionEffect || s.default.useLayoutEffect,
        v = "undefined" != typeof window ? g() : void 0;

    function y(e) {
        var t = v || b();
        return t && ("undefined" == typeof window ? t.add(e) : x(function() {
            return t.add(e),
                function() {
                    t.remove(e)
                }
        }, [e.id, String(e.dynamic)])), null
    }
    y.dynamic = function(e) {
        return e.map(function(e) {
            return f(e[0], e[1])
        }).join(" ")
    }, i.StyleRegistry = function(e) {
        var t = e.registry,
            i = e.children,
            r = n.useContext(m),
            a = n.useState(function() {
                return r || t || g()
            })[0];
        return s.default.createElement(m.Provider, {
            value: a
        }, i)
    }, i.createStyleRegistry = g, i.style = y, i.useStyleRegistry = b
}, 37902, (e, t, i) => {
    t.exports = e.r(98547).style
}, 88143, (e, t, i) => {
    "use strict";

    function r({
        widthInt: e,
        heightInt: t,
        blurWidth: i,
        blurHeight: r,
        blurDataURL: n,
        objectFit: s
    }) {
        let a = i ? 40 * i : e,
            o = r ? 40 * r : t,
            l = a && o ? `viewBox='0 0 ${a} ${o}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}, 87690, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        VALID_LOADERS: function() {
            return s
        },
        imageConfigDefault: function() {
            return a
        }
    };
    for (var n in r) Object.defineProperty(i, n, {
        enumerable: !0,
        get: r[n]
    });
    let s = ["default", "imgix", "cloudinary", "akamai", "custom"],
        a = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumRedirects: 3,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1
        }
}, 8927, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "getImgProps", {
        enumerable: !0,
        get: function() {
            return l
        }
    }), e.r(33525);
    let r = e.r(88143),
        n = e.r(87690),
        s = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function a(e) {
        return void 0 !== e.default
    }

    function o(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function l({
        src: e,
        sizes: t,
        unoptimized: i = !1,
        priority: l = !1,
        preload: d = !1,
        loading: c,
        className: u,
        quality: f,
        width: h,
        height: p,
        fill: m = !1,
        style: g,
        overrideSrc: b,
        onLoad: x,
        onLoadingComplete: v,
        placeholder: y = "empty",
        blurDataURL: _,
        fetchPriority: j,
        decoding: w = "async",
        layout: S,
        objectFit: R,
        objectPosition: C,
        lazyBoundary: z,
        lazyRoot: P,
        ...N
    }, O) {
        var A;
        let E, k, I, {
                imgConf: F,
                showAltText: M,
                blurComplete: T,
                defaultLoader: D
            } = O,
            $ = F || n.imageConfigDefault;
        if ("allSizes" in $) E = $;
        else {
            let e = [...$.deviceSizes, ...$.imageSizes].sort((e, t) => e - t),
                t = $.deviceSizes.sort((e, t) => e - t),
                i = $.qualities ? .sort((e, t) => e - t);
            E = { ...$,
                allSizes: e,
                deviceSizes: t,
                qualities: i
            }
        }
        if (void 0 === D) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let U = N.loader || D;
        delete N.loader, delete N.srcSet;
        let q = "__next_img_default" in U;
        if (q) {
            if ("custom" === E.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = U;
            U = t => {
                let {
                    config: i,
                    ...r
                } = t;
                return e(r)
            }
        }
        if (S) {
            "fill" === S && (m = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[S];
            e && (g = { ...g,
                ...e
            });
            let i = {
                responsive: "100vw",
                fill: "100vw"
            }[S];
            i && !t && (t = i)
        }
        let G = "",
            B = o(h),
            L = o(p);
        if ((A = e) && "object" == typeof A && (a(A) || void 0 !== A.src)) {
            let t = a(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (k = t.blurWidth, I = t.blurHeight, _ = _ || t.blurDataURL, G = t.src, !m)
                if (B || L) {
                    if (B && !L) {
                        let e = B / t.width;
                        L = Math.round(t.height * e)
                    } else if (!B && L) {
                        let e = L / t.height;
                        B = Math.round(t.width * e)
                    }
                } else B = t.width, L = t.height
        }
        let V = !l && !d && ("lazy" === c || void 0 === c);
        (!(e = "string" == typeof e ? e : G) || e.startsWith("data:") || e.startsWith("blob:")) && (i = !0, V = !1), E.unoptimized && (i = !0), q && !E.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (i = !0);
        let W = o(f),
            Y = Object.assign(m ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: R,
                objectPosition: C
            } : {}, M ? {} : {
                color: "transparent"
            }, g),
            Q = T || "empty" === y ? null : "blur" === y ? `url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:B,heightInt:L,blurWidth:k,blurHeight:I,blurDataURL:_||"",objectFit:Y.objectFit})}")` : `url("${y}")`,
            X = s.includes(Y.objectFit) ? "fill" === Y.objectFit ? "100% 100%" : "cover" : Y.objectFit,
            H = Q ? {
                backgroundSize: X,
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Q
            } : {},
            K = function({
                config: e,
                src: t,
                unoptimized: i,
                width: r,
                quality: n,
                sizes: s,
                loader: a
            }) {
                if (i) return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                };
                let {
                    widths: o,
                    kind: l
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, i, r) {
                    if (r) {
                        let i = /(^|\s)(1?\d?\d)vw/g,
                            n = [];
                        for (let e; e = i.exec(r);) n.push(parseInt(e[2]));
                        if (n.length) {
                            let i = .01 * Math.min(...n);
                            return {
                                widths: t.filter(t => t >= e[0] * i),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof i ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([i, 2 * i].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, r, s), d = o.length - 1;
                return {
                    sizes: s || "w" !== l ? s : "100vw",
                    srcSet: o.map((i, r) => `${a({config:e,src:t,quality:n,width:i})} ${"w"===l?i:r+1}${l}`).join(", "),
                    src: a({
                        config: e,
                        src: t,
                        quality: n,
                        width: o[d]
                    })
                }
            }({
                config: E,
                src: e,
                unoptimized: i,
                width: B,
                quality: W,
                sizes: t,
                loader: U
            }),
            J = V ? "lazy" : c;
        return {
            props: { ...N,
                loading: J,
                fetchPriority: j,
                width: B,
                height: L,
                decoding: w,
                className: u,
                style: { ...Y,
                    ...H
                },
                sizes: K.sizes,
                srcSet: K.srcSet,
                src: b || K.src
            },
            meta: {
                unoptimized: i,
                preload: d || l,
                placeholder: y,
                fill: m
            }
        }
    }
}, 98879, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let r = e.r(71645),
        n = "undefined" == typeof window,
        s = n ? () => {} : r.useLayoutEffect,
        a = n ? () => {} : r.useEffect;

    function o(e) {
        let {
            headManager: t,
            reduceComponentsToState: i
        } = e;

        function o() {
            if (t && t.mountedInstances) {
                let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(i(e))
            }
        }
        return n && (t ? .mountedInstances ? .add(e.children), o()), s(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), s(() => (t && (t._pendingUpdate = o), () => {
            t && (t._pendingUpdate = o)
        })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 25633, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return m
        },
        defaultHead: function() {
            return u
        }
    };
    for (var n in r) Object.defineProperty(i, n, {
        enumerable: !0,
        get: r[n]
    });
    let s = e.r(55682),
        a = e.r(90809),
        o = e.r(43476),
        l = a._(e.r(71645)),
        d = s._(e.r(98879)),
        c = e.r(42732);

    function u() {
        return [(0, o.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, o.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(33525);
    let h = ["name", "httpEquiv", "charSet", "itemProp"];

    function p(e) {
        let t, i, r, n;
        return e.reduce(f, []).reverse().concat(u().reverse()).filter((t = new Set, i = new Set, r = new Set, n = {}, e => {
            let s = !0,
                a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let i = e.key.slice(e.key.indexOf("$") + 1);
                t.has(i) ? s = !1 : t.add(i)
            }
            switch (e.type) {
                case "title":
                case "base":
                    i.has(e.type) ? s = !1 : i.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, i = h.length; t < i; t++) {
                        let i = h[t];
                        if (e.props.hasOwnProperty(i))
                            if ("charSet" === i) r.has(i) ? s = !1 : r.add(i);
                            else {
                                let t = e.props[i],
                                    r = n[i] || new Set;
                                ("name" !== i || !a) && r.has(t) ? s = !1 : (r.add(t), n[i] = r)
                            }
                    }
            }
            return s
        })).reverse().map((e, t) => {
            let i = e.key || t;
            return l.default.cloneElement(e, {
                key: i
            })
        })
    }
    let m = function({
        children: e
    }) {
        let t = (0, l.useContext)(c.HeadManagerContext);
        return (0, o.jsx)(d.default, {
            reduceComponentsToState: p,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), t.exports = i.default)
}, 18556, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let r = e.r(55682)._(e.r(71645)),
        n = e.r(87690),
        s = r.default.createContext(n.imageConfigDefault)
}, 65856, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "RouterContext", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e.r(55682)._(e.r(71645)).default.createContext(null)
}, 18815, (e, t, i) => {
    "use strict";

    function r(e, t) {
        let i = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e, 0) : i
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}, 35420, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let r = e.r(18815);

    function n({
        config: e,
        src: t,
        width: i,
        quality: n
    }) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let s = (0, r.findClosestQuality)(n, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${s}${t.startsWith("/_next/static/media/")&&1?"&dpl=dpl_2nzRkoQY8zC8Ux5NF2FMxAmD3oRw":""}`
    }
    n.__next_img_default = !0;
    let s = n
}, 18581, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let r = e.r(71645);

    function n(e, t) {
        let i = (0, r.useRef)(null),
            n = (0, r.useRef)(null);
        return (0, r.useCallback)(r => {
            if (null === r) {
                let e = i.current;
                e && (i.current = null, e());
                let t = n.current;
                t && (n.current = null, t())
            } else e && (i.current = s(e, r)), t && (n.current = s(t, r))
        }, [e, t])
    }

    function s(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let i = e(t);
            return "function" == typeof i ? i : () => e(null)
        }
    }("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), t.exports = i.default)
}, 5500, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "Image", {
        enumerable: !0,
        get: function() {
            return y
        }
    });
    let r = e.r(55682),
        n = e.r(90809),
        s = e.r(43476),
        a = n._(e.r(71645)),
        o = r._(e.r(74080)),
        l = r._(e.r(25633)),
        d = e.r(8927),
        c = e.r(87690),
        u = e.r(18556);
    e.r(33525);
    let f = e.r(65856),
        h = r._(e.r(35420)),
        p = e.r(18581),
        m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function g(e, t, i, r, n, s, a) {
        let o = e ? .src;
        e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0), i ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let r = !1,
                        n = !1;
                    i.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => r,
                        isPropagationStopped: () => n,
                        persist: () => {},
                        preventDefault: () => {
                            r = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            n = !0, t.stopPropagation()
                        }
                    })
                }
                r ? .current && r.current(e)
            }
        }))
    }

    function b(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let x = (0, a.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: i,
        height: r,
        width: n,
        decoding: o,
        className: l,
        style: d,
        fetchPriority: c,
        placeholder: u,
        loading: f,
        unoptimized: h,
        fill: m,
        onLoadRef: x,
        onLoadingCompleteRef: v,
        setBlurComplete: y,
        setShowAltText: _,
        sizesInput: j,
        onLoad: w,
        onError: S,
        ...R
    }, C) => {
        let z = (0, a.useCallback)(e => {
                e && (S && (e.src = e.src), e.complete && g(e, u, x, v, y, h, j))
            }, [e, u, x, v, y, S, h, j]),
            P = (0, p.useMergedRef)(C, z);
        return (0, s.jsx)("img", { ...R,
            ...b(c),
            loading: f,
            width: n,
            height: r,
            decoding: o,
            "data-nimg": m ? "fill" : "1",
            className: l,
            style: d,
            sizes: i,
            srcSet: t,
            src: e,
            ref: P,
            onLoad: e => {
                g(e.currentTarget, u, x, v, y, h, j)
            },
            onError: e => {
                _(!0), "empty" !== u && y(!0), S && S(e)
            }
        })
    });

    function v({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let i = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...b(t.fetchPriority)
        };
        return e && o.default.preload ? (o.default.preload(t.src, i), null) : (0, s.jsx)(l.default, {
            children: (0, s.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...i
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let y = (0, a.forwardRef)((e, t) => {
        let i = (0, a.useContext)(f.RouterContext),
            r = (0, a.useContext)(u.ImageConfigContext),
            n = (0, a.useMemo)(() => {
                let e = m || r || c.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    i = e.deviceSizes.sort((e, t) => e - t),
                    n = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: i,
                    qualities: n,
                    localPatterns: "undefined" == typeof window ? r ? .localPatterns : e.localPatterns
                }
            }, [r]),
            {
                onLoad: o,
                onLoadingComplete: l
            } = e,
            p = (0, a.useRef)(o);
        (0, a.useEffect)(() => {
            p.current = o
        }, [o]);
        let g = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
            g.current = l
        }, [l]);
        let [b, y] = (0, a.useState)(!1), [_, j] = (0, a.useState)(!1), {
            props: w,
            meta: S
        } = (0, d.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: n,
            blurComplete: b,
            showAltText: _
        });
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(x, { ...w,
                unoptimized: S.unoptimized,
                placeholder: S.placeholder,
                fill: S.fill,
                onLoadRef: p,
                onLoadingCompleteRef: g,
                setBlurComplete: y,
                setShowAltText: j,
                sizesInput: e.sizes,
                ref: t
            }), S.preload ? (0, s.jsx)(v, {
                isAppRouter: !i,
                imgAttributes: w
            }) : null]
        })
    });
    ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), t.exports = i.default)
}, 94909, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return d
        }
    };
    for (var n in r) Object.defineProperty(i, n, {
        enumerable: !0,
        get: r[n]
    });
    let s = e.r(55682),
        a = e.r(8927),
        o = e.r(5500),
        l = s._(e.r(35420));

    function d(e) {
        let {
            props: t
        } = (0, a.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
        return {
            props: t
        }
    }
    let c = o.Image
}, 57688, (e, t, i) => {
    t.exports = e.r(94909)
}, 44457, e => {
    "use strict";
    let t = {
        src: e.i(36171).default,
        width: 1774,
        height: 887,
        blurWidth: 8,
        blurHeight: 4,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAY0lEQVR42i3MPwtAQBzG8Xv/m93iBZgtokg2JRmRSZSSf3fd/Z4nNxg/3+GrSAIEaRwfQ7GU1yeq/UbSm3qWqEKQYmsvna3YtVpO5IOUk8QNw4LnNKJreNzqX4ECWufh6Iz3B2l3WUhNA6GDAAAAAElFTkSuQmCC"
    };
    e.s(["default", 0, t])
}, 47107, e => {
    "use strict";
    let t = ["/fb01", "/fb02", "/fb03", "/fb04", "/fb05", "/fb06", "/fb07", "/fb08", "/fb09", "/fb10"];

    function i(e) {
        for (let i of t)
            if (e === i || e.startsWith(i + "/")) return i;
        return ""
    }
    e.s(["getSlugPrefix", () => i])
}, 51492, e => {
    "use strict";
    var t = e.i(43476),
        i = e.i(71645),
        r = e.i(37902);

    function n({
        onComplete: e
    }) {
        let [n, s] = (0, i.useState)(!1), [a, o] = (0, i.useState)(0), [l, d] = (0, i.useState)("Iniciando verificación segura..."), [c, u] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            s(!0)
        }, []);
        let f = 2 * Math.PI * 70;
        return (0, i.useEffect)(() => {
            let t = setInterval(() => {
                o(i => {
                    let r = i + 1;
                    return (r < 20 ? d("Analizando la firma del navegador...") : r < 40 ? d("Comprobando la conexión segura...") : r < 65 ? d("Validando la dirección IP...") : r < 90 ? d("Verificando la actividad humana...") : d("Finalizando el acceso protegido..."), r >= 100) ? (clearInterval(t), d("Verificación completada correctamente."), u(!0), setTimeout(() => {
                        u(!1), e ? .()
                    }, 1500), 100) : r
                })
            }, 38);
            return () => clearInterval(t)
        }, []), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    width: "100%",
                    height: "100svh",
                    overflow: "hidden",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                className: "jsx-c89691ba7bd8567c wrapper",
                children: [(0, t.jsx)("div", {
                    className: "jsx-c89691ba7bd8567c bg"
                }), (0, t.jsxs)("div", {
                    style: {
                        visibility: n ? "visible" : "hidden"
                    },
                    className: "jsx-c89691ba7bd8567c card",
                    children: [(0, t.jsx)("div", {
                        className: "jsx-c89691ba7bd8567c line"
                    }), (0, t.jsxs)("div", {
                        className: "jsx-c89691ba7bd8567c top",
                        children: [(0, t.jsx)("div", {
                            className: "jsx-c89691ba7bd8567c shield"
                        }), (0, t.jsx)("div", {
                            className: "jsx-c89691ba7bd8567c brand",
                            children: "ACCESO SEGURO"
                        })]
                    }), (0, t.jsx)("div", {
                        className: "jsx-c89691ba7bd8567c loaderWrap",
                        children: (0, t.jsxs)("div", {
                            className: "jsx-c89691ba7bd8567c loader",
                            children: [(0, t.jsxs)("svg", {
                                className: "jsx-c89691ba7bd8567c",
                                children: [(0, t.jsx)("circle", {
                                    cx: "85",
                                    cy: "85",
                                    r: 70,
                                    className: "jsx-c89691ba7bd8567c bgCircle"
                                }), (0, t.jsx)("circle", {
                                    cx: "85",
                                    cy: "85",
                                    r: 70,
                                    style: {
                                        strokeDasharray: f,
                                        strokeDashoffset: f - a / 100 * f
                                    },
                                    className: "jsx-c89691ba7bd8567c progress"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "jsx-c89691ba7bd8567c percent",
                                children: [a, "%"]
                            })]
                        })
                    }), (0, t.jsx)("h1", {
                        className: "jsx-c89691ba7bd8567c title",
                        children: "Verificación de seguridad"
                    }), (0, t.jsx)("div", {
                        className: "jsx-c89691ba7bd8567c subtitle",
                        children: l
                    }), (0, t.jsxs)("div", {
                        className: "jsx-c89691ba7bd8567c checks",
                        children: [(0, t.jsxs)("div", {
                            className: "jsx-c89691ba7bd8567c check",
                            children: [(0, t.jsxs)("div", {
                                className: "jsx-c89691ba7bd8567c left",
                                children: [(0, t.jsx)("div", {
                                    className: `jsx-c89691ba7bd8567c icon ${a>=25?"active":""}`
                                }), (0, t.jsx)("div", {
                                    className: "jsx-c89691ba7bd8567c text",
                                    children: "Integridad del navegador"
                                })]
                            }), (0, t.jsx)("div", {
                                className: `jsx-c89691ba7bd8567c status ${a>=25?"show":""}`,
                                children: "APROBADA"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "jsx-c89691ba7bd8567c check",
                            children: [(0, t.jsxs)("div", {
                                className: "jsx-c89691ba7bd8567c left",
                                children: [(0, t.jsx)("div", {
                                    className: `jsx-c89691ba7bd8567c icon ${a>=55?"active":""}`
                                }), (0, t.jsx)("div", {
                                    className: "jsx-c89691ba7bd8567c text",
                                    children: "Validación de la dirección IP"
                                })]
                            }), (0, t.jsx)("div", {
                                className: `jsx-c89691ba7bd8567c status ${a>=55?"show":""}`,
                                children: "VERIFICADA"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "jsx-c89691ba7bd8567c check",
                            children: [(0, t.jsxs)("div", {
                                className: "jsx-c89691ba7bd8567c left",
                                children: [(0, t.jsx)("div", {
                                    className: `jsx-c89691ba7bd8567c icon ${a>=85?"active":""}`
                                }), (0, t.jsx)("div", {
                                    className: "jsx-c89691ba7bd8567c text",
                                    children: "Análisis de actividad humana"
                                })]
                            }), (0, t.jsx)("div", {
                                className: `jsx-c89691ba7bd8567c status ${a>=85?"show":""}`,
                                children: "APROBADO"
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: "jsx-c89691ba7bd8567c footer",
                        children: "CONEXIÓN PROTEGIDA • PASARELA DE SEGURIDAD"
                    })]
                }), c && (0, t.jsx)("div", {
                    className: "jsx-c89691ba7bd8567c modalOverlay",
                    children: (0, t.jsxs)("div", {
                        className: "jsx-c89691ba7bd8567c modal",
                        children: [(0, t.jsx)("div", {
                            className: "jsx-c89691ba7bd8567c modalGlow"
                        }), (0, t.jsx)("div", {
                            className: "jsx-c89691ba7bd8567c successIcon",
                            children: "✓"
                        }), (0, t.jsx)("div", {
                            className: "jsx-c89691ba7bd8567c modalTitle",
                            children: "Verificación completada"
                        }), (0, t.jsx)("div", {
                            className: "jsx-c89691ba7bd8567c modalText",
                            children: "Conexión segura establecida correctamente."
                        })]
                    })
                })]
            }), (0, t.jsx)(r.default, {
                id: "c89691ba7bd8567c",
                children: "*{box-sizing:border-box;margin:0;padding:0}html,body{background:#fff;width:100%;height:100%;font-family:Inter,Arial,sans-serif;overflow:hidden}.wrapper{background:#fff;justify-content:center;align-items:center;width:100%;height:100svh;min-height:100svh;display:flex;position:relative;overflow:hidden}.bg{background:radial-gradient(circle at 0 0,#00b45a14,#0000 25%),radial-gradient(circle at 100% 100%,#00b45a0d,#0000 25%);position:absolute;inset:0}.card{z-index:2;background:#fff;border:1px solid #e8e8e8;border-radius:28px;width:430px;max-width:92%;padding:42px 34px;animation:.4s fadeUp;position:relative;overflow:hidden;box-shadow:0 10px 40px #0000000f,0 2px 10px #00000008}.top{justify-content:center;align-items:center;gap:10px;margin-bottom:34px;display:flex}.shield{background:#00b75c;border-radius:5px;width:16px;height:16px;box-shadow:0 0 15px #00b75c66}.brand{color:#111;letter-spacing:.5px;font-size:15px;font-weight:700}.loaderWrap{justify-content:center;margin-bottom:30px;display:flex}.loader{width:170px;height:170px;position:relative}.loader svg{width:100%;height:100%;transform:rotate(-90deg)}.bgCircle{fill:none;stroke:#ebebeb;stroke-width:10px}.progress{fill:none;stroke:#00b75c;stroke-width:10px;stroke-linecap:round;filter:drop-shadow(0 0 10px #00b75c59);transition:stroke-dashoffset .2s linear}.percent{color:#111;justify-content:center;align-items:center;font-size:28px;font-weight:700;display:flex;position:absolute;inset:0}.title{text-align:center;color:#111;margin-bottom:12px;font-size:28px}.subtitle{text-align:center;color:#666;min-height:45px;margin-bottom:30px;font-size:14px;line-height:1.7}.checks{flex-direction:column;gap:14px;display:flex}.check{background:#fafafa;border:1px solid #ededed;border-radius:18px;justify-content:space-between;align-items:center;padding:16px 18px;transition:all .3s;display:flex}.left{align-items:center;gap:12px;display:flex}.icon{background:#cfcfcf;border-radius:50%;width:12px;height:12px;transition:all .3s}.active{background:#00b75c;box-shadow:0 0 12px #00b75c80}.text{color:#111;font-size:14px;font-weight:500}.status{color:#00b75c;letter-spacing:.5px;opacity:0;font-size:12px;font-weight:700;transition:all .3s;transform:translate(10px)}.show{opacity:1;transform:translate(0)}.footer{text-align:center;color:#999;letter-spacing:1px;margin-top:26px;font-size:11px}.line{background:linear-gradient(90deg,#0000,#00b75ccc,#0000);width:100%;height:2px;animation:2.5s linear infinite scan;position:absolute;top:0;left:-100%}.modalOverlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:999;background:#ffffffbf;justify-content:center;align-items:center;animation:.25s fadeIn;display:flex;position:fixed;inset:0}.modal{text-align:center;background:#fff;border:1px solid #ebebeb;border-radius:28px;width:340px;padding:38px 30px;animation:.35s modalPop;position:relative;overflow:hidden;box-shadow:0 20px 60px #00000014,0 10px 20px #0000000a}.modalGlow{background:radial-gradient(circle,#00b75c24,#0000 70%);width:220px;height:220px;position:absolute;top:-120px;left:50%;transform:translate(-50%)}.successIcon{color:#fff;z-index:2;background:#00b75c;border-radius:50%;justify-content:center;align-items:center;width:74px;height:74px;margin:0 auto 22px;font-size:34px;display:flex;position:relative;box-shadow:0 0 30px #00b75c59}.modalTitle{color:#111;z-index:2;margin-bottom:10px;font-size:24px;font-weight:700;position:relative}.modalText{color:#666;z-index:2;font-size:14px;line-height:1.7;position:relative}@keyframes scan{to{left:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes modalPop{0%{opacity:0;transform:scale(.9)translateY(10px)}to{opacity:1;transform:scale(1)translateY(0)}}@keyframes fadeUp{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media (height<=760px){.card{zoom:.88}}@media (height<=660px){.card{zoom:.78}}@media (height<=560px){.card{zoom:.68}}"
            })]
        })
    }
    var s = e.i(57688),
        a = e.i(44457),
        o = e.i(18566),
        l = e.i(47107);

    function d() {
        let e = (0, o.useRouter)();
        return (0, i.useEffect)(() => {
            let t = (0, l.getSlugPrefix)(window.location.pathname);
            e.prefetch(t + "/video-1")
        }, [e]), (0, t.jsx)("button", {
            onClick: () => {
                let e = new URLSearchParams(window.location.search),
                    t = (0, l.getSlugPrefix)(window.location.pathname) + "/video-1" + (e.toString() ? "?" + e.toString() : "");
                window.location.href = t
            },
            className: " cta-pulse relative bg-green-600 text-white font-bold py-3  rounded-lg w-full border-b-4 border-green-800 shadow-[0_8px_0_#166534]  hover:bg-green-500 hover:translate-y-[1px]  active:translate-y-[4px] active:shadow-none active:border-b-0 mt-6 transition-all duration-150 ",
            children: "¡Comenzar ahora!"
        })
    }

    function c() {
        let [e, r] = (0, i.useState)(!0);
        return e ? (0, t.jsx)(n, {
            onComplete: () => r(!1)
        }) : (0, t.jsx)("main", {
            className: "min-h-svh bg-gradient-to-b from-white via-white to-slate-50 px-4",
            children: (0, t.jsxs)("div", {
                className: "w-[90%] max-w-3xl mx-auto min-h-svh flex flex-col justify-between py-10",
                children: [(0, t.jsx)("header", {
                    style: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly"
                    },
                    children: (0, t.jsx)(s.default, {
                        style: {
                            position: "relative"
                        },
                        className: "w-40 m-auto",
                        alt: "logo_youtube",
                        src: a.default,
                        priority: !0
                    })
                }), (0, t.jsxs)("div", {
                    className: "flex-1 flex flex-col justify-center text-center p-6 shadow-xl/20 rounded-xl bg-white",
                    children: [(0, t.jsx)("h1", {
                        className: "text-[35px] text-center mb-5 font-bold text-[#282828]",
                        children: "¡Felicidades!"
                    }), (0, t.jsxs)("p", {
                        className: "mt-5 text-gray-600",
                        children: ["Has sido seleccionado para el ", (0, t.jsx)("strong", {
                            className: "text-green-600",
                            children: "nuevo programa de recompensas de Facebook."
                        }), " ¡Disfrútalo!"]
                    }), (0, t.jsxs)("p", {
                        className: "mt-5 font-semibold text-3xl",
                        children: ["Programa de recompensas de ", (0, t.jsx)("strong", {
                            className: "text-[#0376e7]",
                            children: "Facebook"
                        })]
                    }), (0, t.jsxs)("p", {
                        className: "mt-6 text-center text-gray-600 leading-7",
                        children: ["Programa de evaluación para", " ", (0, t.jsx)("span", {
                            className: "font-semibold text-[#065FD4]",
                            children: "grandes"
                        }), " ", "marcas.", (0, t.jsx)("br", {}), "¡Responde con sinceridad y gana!"]
                    }), (0, t.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, t.jsx)(d, {})
                    }), (0, t.jsx)("p", {
                        className: "text-gray-800 mt-10",
                        children: "Seguro • Sin spam"
                    }), (0, t.jsxs)("p", {
                        className: "mt-5 text-gray-600",
                        children: ["Se añadirá un ", (0, t.jsx)("strong", {
                            className: "text-red-600",
                            children: "bono"
                        }), " de", " ", (0, t.jsx)("strong", {
                            className: "text-green-600",
                            children: "US$83"
                        }), " por cada evaluación."]
                    }), (0, t.jsx)("p", {
                        className: "mt-6 font-semibold",
                        children: "¡Evalúa algunos videos sencillos!"
                    })]
                })]
            })
        })
    }
    e.s(["default", () => c], 51492)
}]);
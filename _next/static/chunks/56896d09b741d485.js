(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 33525, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = e => {}
}, 36171, e => {
    e.v("/_next/static/media/logo.486d9ae7.png")
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
}, 88143, (e, t, r) => {
    "use strict";

    function i({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: i,
        blurDataURL: n,
        objectFit: s
    }) {
        let a = r ? 40 * r : e,
            o = i ? 40 * i : t,
            l = a && o ? `viewBox='0 0 ${a} ${o}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}, 87690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        VALID_LOADERS: function() {
            return s
        },
        imageConfigDefault: function() {
            return a
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
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
}, 8927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return l
        }
    }), e.r(33525);
    let i = e.r(88143),
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
        unoptimized: r = !1,
        priority: l = !1,
        preload: d = !1,
        loading: c,
        className: u,
        quality: f,
        width: h,
        height: p,
        fill: m = !1,
        style: g,
        overrideSrc: x,
        onLoad: b,
        onLoadingComplete: y,
        placeholder: v = "empty",
        blurDataURL: w,
        fetchPriority: _,
        decoding: j = "async",
        layout: A,
        objectFit: S,
        objectPosition: C,
        lazyBoundary: R,
        lazyRoot: N,
        ...E
    }, O) {
        var z;
        let P, k, F, {
                imgConf: I,
                showAltText: B,
                blurComplete: M,
                defaultLoader: T
            } = O,
            D = I || n.imageConfigDefault;
        if ("allSizes" in D) P = D;
        else {
            let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
                t = D.deviceSizes.sort((e, t) => e - t),
                r = D.qualities ? .sort((e, t) => e - t);
            P = { ...D,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === T) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let U = E.loader || T;
        delete E.loader, delete E.srcSet;
        let Q = "__next_img_default" in U;
        if (Q) {
            if ("custom" === P.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = U;
            U = t => {
                let {
                    config: r,
                    ...i
                } = t;
                return e(i)
            }
        }
        if (A) {
            "fill" === A && (m = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[A];
            e && (g = { ...g,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[A];
            r && !t && (t = r)
        }
        let L = "",
            G = o(h),
            q = o(p);
        if ((z = e) && "object" == typeof z && (a(z) || void 0 !== z.src)) {
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
            if (k = t.blurWidth, F = t.blurHeight, w = w || t.blurDataURL, L = t.src, !m)
                if (G || q) {
                    if (G && !q) {
                        let e = G / t.width;
                        q = Math.round(t.height * e)
                    } else if (!G && q) {
                        let e = q / t.height;
                        G = Math.round(t.width * e)
                    }
                } else G = t.width, q = t.height
        }
        let W = !l && !d && ("lazy" === c || void 0 === c);
        (!(e = "string" == typeof e ? e : L) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, W = !1), P.unoptimized && (r = !0), Q && !P.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let K = o(f),
            $ = Object.assign(m ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: C
            } : {}, B ? {} : {
                color: "transparent"
            }, g),
            V = M || "empty" === v ? null : "blur" === v ? `url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:G,heightInt:q,blurWidth:k,blurHeight:F,blurDataURL:w||"",objectFit:$.objectFit})}")` : `url("${v}")`,
            J = s.includes($.objectFit) ? "fill" === $.objectFit ? "100% 100%" : "cover" : $.objectFit,
            Y = V ? {
                backgroundSize: J,
                backgroundPosition: $.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V
            } : {},
            H = function({
                config: e,
                src: t,
                unoptimized: r,
                width: i,
                quality: n,
                sizes: s,
                loader: a
            }) {
                if (r) return {
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
                }, r, i) {
                    if (i) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            n = [];
                        for (let e; e = r.exec(i);) n.push(parseInt(e[2]));
                        if (n.length) {
                            let r = .01 * Math.min(...n);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, i, s), d = o.length - 1;
                return {
                    sizes: s || "w" !== l ? s : "100vw",
                    srcSet: o.map((r, i) => `${a({config:e,src:t,quality:n,width:r})} ${"w"===l?r:i+1}${l}`).join(", "),
                    src: a({
                        config: e,
                        src: t,
                        quality: n,
                        width: o[d]
                    })
                }
            }({
                config: P,
                src: e,
                unoptimized: r,
                width: G,
                quality: K,
                sizes: t,
                loader: U
            }),
            Z = W ? "lazy" : c;
        return {
            props: { ...E,
                loading: Z,
                fetchPriority: _,
                width: G,
                height: q,
                decoding: j,
                className: u,
                style: { ...$,
                    ...Y
                },
                sizes: H.sizes,
                srcSet: H.srcSet,
                src: x || H.src
            },
            meta: {
                unoptimized: r,
                preload: d || l,
                placeholder: v,
                fill: m
            }
        }
    }
}, 98879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let i = e.r(71645),
        n = "undefined" == typeof window,
        s = n ? () => {} : i.useLayoutEffect,
        a = n ? () => {} : i.useEffect;

    function o(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function o() {
            if (t && t.mountedInstances) {
                let e = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
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
}, 25633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        default: function() {
            return m
        },
        defaultHead: function() {
            return u
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
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
        let t, r, i, n;
        return e.reduce(f, []).reverse().concat(u().reverse()).filter((t = new Set, r = new Set, i = new Set, n = {}, e => {
            let s = !0,
                a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? s = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? s = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = h.length; t < r; t++) {
                        let r = h[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) i.has(r) ? s = !1 : i.add(r);
                            else {
                                let t = e.props[r],
                                    i = n[r] || new Set;
                                ("name" !== r || !a) && i.has(t) ? s = !1 : (i.add(t), n[r] = i)
                            }
                    }
            }
            return s
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return l.default.cloneElement(e, {
                key: r
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
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 18556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let i = e.r(55682)._(e.r(71645)),
        n = e.r(87690),
        s = i.default.createContext(n.imageConfigDefault)
}, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = e.r(55682)._(e.r(71645)).default.createContext(null)
}, 18815, (e, t, r) => {
    "use strict";

    function i(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}, 35420, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let i = e.r(18815);

    function n({
        config: e,
        src: t,
        width: r,
        quality: n
    }) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let s = (0, i.findClosestQuality)(n, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/_next/static/media/")&&1?"&dpl=dpl_2nzRkoQY8zC8Ux5NF2FMxAmD3oRw":""}`
    }
    n.__next_img_default = !0;
    let s = n
}, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let i = e.r(71645);

    function n(e, t) {
        let r = (0, i.useRef)(null),
            n = (0, i.useRef)(null);
        return (0, i.useCallback)(i => {
            if (null === i) {
                let e = r.current;
                e && (r.current = null, e());
                let t = n.current;
                t && (n.current = null, t())
            } else e && (r.current = s(e, i)), t && (n.current = s(t, i))
        }, [e, t])
    }

    function s(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 5500, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return v
        }
    });
    let i = e.r(55682),
        n = e.r(90809),
        s = e.r(43476),
        a = n._(e.r(71645)),
        o = i._(e.r(74080)),
        l = i._(e.r(25633)),
        d = e.r(8927),
        c = e.r(87690),
        u = e.r(18556);
    e.r(33525);
    let f = e.r(65856),
        h = i._(e.r(35420)),
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

    function g(e, t, r, i, n, s, a) {
        let o = e ? .src;
        e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let i = !1,
                        n = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => i,
                        isPropagationStopped: () => n,
                        persist: () => {},
                        preventDefault: () => {
                            i = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            n = !0, t.stopPropagation()
                        }
                    })
                }
                i ? .current && i.current(e)
            }
        }))
    }

    function x(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, a.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: r,
        height: i,
        width: n,
        decoding: o,
        className: l,
        style: d,
        fetchPriority: c,
        placeholder: u,
        loading: f,
        unoptimized: h,
        fill: m,
        onLoadRef: b,
        onLoadingCompleteRef: y,
        setBlurComplete: v,
        setShowAltText: w,
        sizesInput: _,
        onLoad: j,
        onError: A,
        ...S
    }, C) => {
        let R = (0, a.useCallback)(e => {
                e && (A && (e.src = e.src), e.complete && g(e, u, b, y, v, h, _))
            }, [e, u, b, y, v, A, h, _]),
            N = (0, p.useMergedRef)(C, R);
        return (0, s.jsx)("img", { ...S,
            ...x(c),
            loading: f,
            width: n,
            height: i,
            decoding: o,
            "data-nimg": m ? "fill" : "1",
            className: l,
            style: d,
            sizes: r,
            srcSet: t,
            src: e,
            ref: N,
            onLoad: e => {
                g(e.currentTarget, u, b, y, v, h, _)
            },
            onError: e => {
                w(!0), "empty" !== u && v(!0), A && A(e)
            }
        })
    });

    function y({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...x(t.fetchPriority)
        };
        return e && o.default.preload ? (o.default.preload(t.src, r), null) : (0, s.jsx)(l.default, {
            children: (0, s.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let v = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(f.RouterContext),
            i = (0, a.useContext)(u.ImageConfigContext),
            n = (0, a.useMemo)(() => {
                let e = m || i || c.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    n = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: n,
                    localPatterns: "undefined" == typeof window ? i ? .localPatterns : e.localPatterns
                }
            }, [i]),
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
        let [x, v] = (0, a.useState)(!1), [w, _] = (0, a.useState)(!1), {
            props: j,
            meta: A
        } = (0, d.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: n,
            blurComplete: x,
            showAltText: w
        });
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(b, { ...j,
                unoptimized: A.unoptimized,
                placeholder: A.placeholder,
                fill: A.fill,
                onLoadRef: p,
                onLoadingCompleteRef: g,
                setBlurComplete: v,
                setShowAltText: _,
                sizesInput: e.sizes,
                ref: t
            }), A.preload ? (0, s.jsx)(y, {
                isAppRouter: !r,
                imgAttributes: j
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 94909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return d
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
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
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let c = o.Image
}, 57688, (e, t, r) => {
    t.exports = e.r(94909)
}, 16015, (e, t, r) => {}, 98547, (e, t, r) => {
    var i = e.i(47167);
    e.r(16015);
    var n = e.r(71645),
        s = n && "object" == typeof n && "default" in n ? n : {
            default: n
        },
        a = void 0 !== i.default && i.default.env && !0,
        o = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        l = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    r = t.name,
                    i = void 0 === r ? "stylesheet" : r,
                    n = t.optimizeForSpeed,
                    s = void 0 === n ? a : n;
                d(o(i), "`name` must be a string"), this._name = i, this._deletedRulePlaceholder = "#" + i + "-deleted-rule____{}", d("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = s, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                var l = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = l ? l.getAttribute("content") : null
            }
            var t, r = e.prototype;
            return r.setOptimizeForSpeed = function(e) {
                    d("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), d(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                }, r.isOptimizeForSpeed = function() {
                    return this._optimizeForSpeed
                }, r.inject = function() {
                    var e = this;
                    if (d(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (a || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                        return
                    }
                    this._serverSheet = {
                        cssRules: [],
                        insertRule: function(t, r) {
                            return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                                cssText: t
                            } : e._serverSheet.cssRules.push({
                                cssText: t
                            }), r
                        },
                        deleteRule: function(t) {
                            e._serverSheet.cssRules[t] = null
                        }
                    }
                }, r.getSheetForTag = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }, r.getSheet = function() {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                }, r.insertRule = function(e, t) {
                    if (d(o(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var r = this.getSheet();
                        "number" != typeof t && (t = r.cssRules.length);
                        try {
                            r.insertRule(e, t)
                        } catch (t) {
                            return a || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                    } else {
                        var i = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, i))
                    }
                    return this._rulesCount++
                }, r.replaceRule = function(e, t) {
                    if (this._optimizeForSpeed || "undefined" == typeof window) {
                        var r = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
                        r.deleteRule(e);
                        try {
                            r.insertRule(t, e)
                        } catch (i) {
                            a || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
                        }
                    } else {
                        var i = this._tags[e];
                        d(i, "old rule at index `" + e + "` not found"), i.textContent = t
                    }
                    return e
                }, r.deleteRule = function(e) {
                    if ("undefined" == typeof window) return void this._serverSheet.deleteRule(e);
                    if (this._optimizeForSpeed) this.replaceRule(e, "");
                    else {
                        var t = this._tags[e];
                        d(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                    }
                }, r.flush = function() {
                    this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                        return e && e.parentNode.removeChild(e)
                    }), this._tags = []) : this._serverSheet.cssRules = []
                }, r.cssRules = function() {
                    var e = this;
                    return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, r) {
                        return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t
                        })) : t.push(null), t
                    }, [])
                }, r.makeStyleTag = function(e, t, r) {
                    t && d(o(t), "makeStyleTag accepts only strings as second parameter");
                    var i = document.createElement("style");
                    this._nonce && i.setAttribute("nonce", this._nonce), i.type = "text/css", i.setAttribute("data-" + e, ""), t && i.appendChild(document.createTextNode(t));
                    var n = document.head || document.getElementsByTagName("head")[0];
                    return r ? n.insertBefore(i, r) : n.appendChild(i), i
                }, t = [{
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }],
                function(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }(e.prototype, t), e
        }();

    function d(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".")
    }
    var c = function(e) {
            for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
            return t >>> 0
        },
        u = {};

    function f(e, t) {
        if (!t) return "jsx-" + e;
        var r = String(t),
            i = e + r;
        return u[i] || (u[i] = "jsx-" + c(e + "-" + r)), u[i]
    }

    function h(e, t) {
        "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var r = e + t;
        return u[r] || (u[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), u[r]
    }
    var p = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    r = t.styleSheet,
                    i = void 0 === r ? null : r,
                    n = t.optimizeForSpeed,
                    s = void 0 !== n && n;
                this._sheet = i || new l({
                    name: "styled-jsx",
                    optimizeForSpeed: s
                }), this._sheet.inject(), i && "boolean" == typeof s && (this._sheet.setOptimizeForSpeed(s), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }
            var t = e.prototype;
            return t.add = function(e) {
                var t = this;
                void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                    return e[t] = 0, e
                }, {}));
                var r = this.getIdAndRules(e),
                    i = r.styleId,
                    n = r.rules;
                if (i in this._instancesCounts) {
                    this._instancesCounts[i] += 1;
                    return
                }
                var s = n.map(function(e) {
                    return t._sheet.insertRule(e)
                }).filter(function(e) {
                    return -1 !== e
                });
                this._indices[i] = s, this._instancesCounts[i] = 1
            }, t.remove = function(e) {
                var t = this,
                    r = this.getIdAndRules(e).styleId;
                if (function(e, t) {
                        if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                    }(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                    var i = this._fromServer && this._fromServer[r];
                    i ? (i.parentNode.removeChild(i), delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                        return t._sheet.deleteRule(e)
                    }), delete this._indices[r]), delete this._instancesCounts[r]
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
                    r = this._sheet.cssRules();
                return t.concat(Object.keys(this._indices).map(function(t) {
                    return [t, e._indices[t].map(function(e) {
                        return r[e].cssText
                    }).join(e._optimizeForSpeed ? "" : "\n")]
                }).filter(function(e) {
                    return !!e[1]
                }))
            }, t.styles = function(e) {
                var t, r;
                return t = this.cssRules(), void 0 === (r = e) && (r = {}), t.map(function(e) {
                    var t = e[0],
                        i = e[1];
                    return s.default.createElement("style", {
                        id: "__" + t,
                        key: "__" + t,
                        nonce: r.nonce ? r.nonce : void 0,
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    })
                })
            }, t.getIdAndRules = function(e) {
                var t = e.children,
                    r = e.dynamic,
                    i = e.id;
                if (r) {
                    var n = f(i, r);
                    return {
                        styleId: n,
                        rules: Array.isArray(t) ? t.map(function(e) {
                            return h(n, e)
                        }) : [h(n, t)]
                    }
                }
                return {
                    styleId: f(i),
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

    function x() {
        return n.useContext(m)
    }
    m.displayName = "StyleSheetContext";
    var b = s.default.useInsertionEffect || s.default.useLayoutEffect,
        y = "undefined" != typeof window ? g() : void 0;

    function v(e) {
        var t = y || x();
        return t && ("undefined" == typeof window ? t.add(e) : b(function() {
            return t.add(e),
                function() {
                    t.remove(e)
                }
        }, [e.id, String(e.dynamic)])), null
    }
    v.dynamic = function(e) {
        return e.map(function(e) {
            return f(e[0], e[1])
        }).join(" ")
    }, r.StyleRegistry = function(e) {
        var t = e.registry,
            r = e.children,
            i = n.useContext(m),
            a = n.useState(function() {
                return i || t || g()
            })[0];
        return s.default.createElement(m.Provider, {
            value: a
        }, r)
    }, r.createStyleRegistry = g, r.style = v, r.useStyleRegistry = x
}, 37902, (e, t, r) => {
    t.exports = e.r(98547).style
}, 47107, e => {
    "use strict";
    let t = ["/fb01", "/fb02", "/fb03", "/fb04", "/fb05", "/fb06", "/fb07", "/fb08", "/fb09", "/fb10"];

    function r(e) {
        for (let r of t)
            if (e === r || e.startsWith(r + "/")) return r;
        return ""
    }
    e.s(["getSlugPrefix", () => r])
}, 67204, e => {
    e.v("/_next/static/media/wallet.b006d4cb.png")
}, 98980, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(37902);
    let i = {
        src: e.i(67204).default,
        width: 32,
        height: 32,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR42k2OvQqCYBSGv0RQl9wiDMLJBkfbnNtMkIbuQLAGoRBFgnRsNwRBNBWc/LkCL0AnJ2+nY2T0wjOd9+cgy7Kktm1vfd+7E77v7wmCwNCopmm8ruvuwzDEE1mWnTmOWzMMM0dVVUVJkpyiKNImwjBUgyBQ4zg2keu6Dk3TFEmSsxGKomaCICwVRdnBlIccEBxI9BVs49CgwW9HMDw/DZD6GXAcx2zbPsDspa7rF8rz3BFFccOy7GKC5/mVLMvbNE0fSNd1sSzLa1EUxj+QNkzTlN5eqWfpMyYCvAAAAABJRU5ErkJggg=="
    };
    var n = e.i(57688);

    function s({
        value: e
    }) {
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("div", {
                className: "jsx-c52083d06030ae41 balance-card mr-2 flex items-center gap-3 rounded-xl bg-gradient-to-b from-[#00FF00] to-[#145700] px-3 py-3 shadow-[0_2px_1px_1px_#145700,inset_0_4px_4px_0_rgba(0,0,0,0.25)]",
                children: [(0, t.jsx)(n.default, {
                    src: i,
                    alt: "wallet",
                    className: "h-5 w-5 object-contain"
                }), (0, t.jsxs)("span", {
                    style: {
                        fontFamily: "Roboto"
                    },
                    className: "jsx-c52083d06030ae41 font-['Roboto'] text-[20px] font-extrabold text-white",
                    children: ["US$ ", e]
                })]
            }), (0, t.jsx)(r.default, {
                id: "c52083d06030ae41",
                children: ".balance-card.jsx-c52083d06030ae41{animation:1.8s infinite pulseCard}@keyframes pulseCard{0%{transform:scale(1);box-shadow:0 2px 1px 1px #145700,inset 0 4px 4px #00000040,0 0 #00ff00b3}70%{transform:scale(1.03);box-shadow:0 2px 1px 1px #145700,inset 0 4px 4px #00000040,0 0 0 16px #0f00}to{transform:scale(1);box-shadow:0 2px 1px 1px #145700,inset 0 4px 4px #00000040,0 0 #0f00}}"
            })]
        })
    }
    e.s(["default", () => s], 98980)
}, 75254, e => {
    "use strict";
    var t = e.i(71645);
    let r = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
    var i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let n = (0, t.forwardRef)(({
            color: e = "currentColor",
            size: n = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: a,
            className: o = "",
            children: l,
            iconNode: d,
            ...c
        }, u) => (0, t.createElement)("svg", {
            ref: u,
            ...i,
            width: n,
            height: n,
            stroke: e,
            strokeWidth: a ? 24 * Number(s) / Number(n) : s,
            className: r("lucide", o),
            ...c
        }, [...d.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(l) ? l : [l]])),
        s = (e, i) => {
            let s = (0, t.forwardRef)(({
                className: s,
                ...a
            }, o) => (0, t.createElement)(n, {
                ref: o,
                iconNode: i,
                className: r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, s),
                ...a
            }));
            return s.displayName = `${e}`, s
        };
    e.s(["default", () => s], 75254)
}, 84118, e => {
    e.v("/_next/static/media/unnamed.45b041ed.webp")
}, 45739, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        i = e.i(67881),
        n = e.i(70065),
        s = e.i(417),
        a = e.i(65582),
        o = e.i(41071),
        l = e.i(65157),
        d = e.i(94983),
        c = e.i(62031),
        u = e.i(44457),
        f = e.i(57688);
    let h = {
        src: e.i(84118).default,
        width: 160,
        height: 160,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmh9g+znJn87b0wNua8H3bH6x+95ulj//Z"
    };
    var p = e.i(88192),
        m = e.i(53624);

    function g() {
        return (0, t.jsx)("div", {
            style: {
                position: "relative",
                paddingTop: "56.25%",
                width: "100%"
            },
            children: (0, t.jsx)("iframe", {
                id: "panda-b13a2409-d065-45ca-8bb8-d9eb20d1f7df",
                src: "https://player-vz-2421c5b9-d6c.tv.pandavideo.com.br/embed/?v=b13a2409-d065-45ca-8bb8-d9eb20d1f7df",
                style: {
                    border: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                },
                allow: "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture",
                allowFullScreen: !0,
                fetchPriority: "high"
            })
        })
    }
    var x = e.i(47107),
        b = e.i(98980);

    function y() {
        let [e, y] = (0, r.useState)(0), [v, w] = (0, r.useState)(!1), [_, j] = (0, r.useState)(0), [A, S] = (0, r.useState)(!1), C = t => {
            if (A) return;
            let r = e + 83;
            j(r), y(r), S(!0), w(!0), new Audio("/songs/caching.mp3").play(), setTimeout(() => {
                let e = new URLSearchParams(window.location.search),
                    t = (0, x.getSlugPrefix)(window.location.pathname) + "/video-2" + (e.toString() ? "?" + e.toString() : "");
                window.location.href = t
            }, 2200)
        }, [R, N] = (0, r.useState)(0);
        return (0, r.useEffect)(() => {
            let t = performance.now();
            requestAnimationFrame(function r(i) {
                let n = Math.min((i - t) / 600, 1);
                N(R + (e - R) * n), n < 1 && requestAnimationFrame(r)
            })
        }, [e]), (0, t.jsxs)("div", {
            className: "min-h-screen bg-black text-white",
            children: [(0, t.jsx)("div", {
                className: "hidden md:flex items-center justify-center min-h-screen p-4",
                children: (0, t.jsx)("h2", {
                    className: "text-2xl text-center text-white",
                    children: "Lo sentimos, este sistema solo funciona en teléfonos móviles."
                })
            }), (0, t.jsxs)("div", {
                className: "md:hidden bg-white",
                children: [(0, t.jsxs)("header", {
                    className: "p-2 flex items-center justify-between bg-white",
                    children: [(0, t.jsx)(f.default, {
                        style: {
                            width: "120px",
                            objectFit: "contain"
                        },
                        src: u.default,
                        alt: "Logo",
                        priority: !0
                    }), (0, t.jsx)(b.default, {
                        value: R.toFixed(2)
                    })]
                }), (0, t.jsxs)("section", {
                    className: "mx-3 mb-5 overflow-hidden rounded-2xl border border-gray-200 bg-white text-[#1c1e21] shadow-[0_2px_12px_rgba(0,0,0,0.10)]",
                    children: [(0, t.jsxs)("div", {
                        className: "flex items-start justify-between px-4 pb-2 pt-4",
                        children: [(0, t.jsxs)("div", {
                            className: "flex min-w-0 items-center gap-3",
                            children: [(0, t.jsx)(f.default, {
                                src: h,
                                alt: "Coca-Cola",
                                className: "h-12 w-12 shrink-0 rounded-full border border-gray-200 object-cover"
                            }), (0, t.jsxs)("div", {
                                className: "min-w-0 leading-tight",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [(0, t.jsx)("span", {
                                        className: "truncate text-[16px] font-bold",
                                        children: "Coca-Cola Colombia"
                                    }), (0, t.jsx)("span", {
                                        className: "flex h-4 w-4 items-center justify-center rounded-full bg-[#1b9bf0] text-[11px] font-bold text-white",
                                        children: "✓"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "mt-1 flex items-center gap-1.5 text-[13px] text-[#65676b]",
                                    children: [(0, t.jsx)("span", {
                                        children: "Patrocinado"
                                    }), (0, t.jsx)("span", {
                                        children: "·"
                                    }), (0, t.jsx)(l.Globe2, {
                                        className: "h-3.5 w-3.5"
                                    })]
                                })]
                            })]
                        }), (0, t.jsx)("button", {
                            "aria-label": "Más opciones",
                            className: "rounded-full p-1 text-[#65676b]",
                            children: (0, t.jsx)(o.MoreHorizontal, {
                                className: "h-6 w-6"
                            })
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "px-4 pb-3 text-[15px] leading-5",
                        children: [(0, t.jsx)("p", {
                            children: "Coca-Cola Colombia: Zero"
                        }), (0, t.jsx)("p", {
                            className: "mt-1 font-semibold text-[#0866ff]",
                            children: "#SienteElSabor"
                        })]
                    }), (0, t.jsx)("div", {
                        className: "w-full bg-black",
                        children: (0, t.jsx)(g, {})
                    }), (0, t.jsxs)("div", {
                        className: "px-4",
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-center justify-between border-b border-gray-200 py-3 text-[13px] text-[#65676b]",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-1.5",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center pr-1",
                                    children: [(0, t.jsx)("span", {
                                        className: "z-30 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-[#1877f2] text-[11px] text-white",
                                        children: "👍"
                                    }), (0, t.jsx)("span", {
                                        className: "z-20 -ml-1 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-[#f55368] text-[10px]",
                                        children: "❤️"
                                    }), (0, t.jsx)("span", {
                                        className: "z-10 -ml-1 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-[#f7b125] text-[11px]",
                                        children: "😮"
                                    })]
                                }), (0, t.jsx)("span", {
                                    children: "37.2K"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0, t.jsx)("span", {
                                    children: "748 comentarios"
                                }), (0, t.jsx)("span", {
                                    children: "1,5 mil veces compartido"
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "border-b border-gray-200 grid grid-cols-3 py-1 text-[14px] font-semibold text-[#4b4f56]",
                            children: [(0, t.jsxs)("button", {
                                className: "flex items-center justify-center gap-2 rounded-lg py-2",
                                children: [(0, t.jsx)(s.ThumbsUp, {
                                    className: "h-5 w-5"
                                }), " Me gusta"]
                            }), (0, t.jsxs)("button", {
                                className: "flex items-center justify-center gap-2 rounded-lg py-2",
                                children: [(0, t.jsx)(d.MessageCircle, {
                                    className: "h-5 w-5"
                                }), " Comentar"]
                            }), (0, t.jsxs)("button", {
                                className: "flex items-center justify-center gap-2 rounded-lg py-2",
                                children: [(0, t.jsx)(c.Share2, {
                                    className: "h-5 w-5"
                                }), " Compartir"]
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "hidden px-4 mb-4 bg-white",
                        children: [(0, t.jsx)("h1", {
                            className: "text-xl mb-2",
                            style: {
                                color: "#4B5761"
                            },
                            children: "Pedidos desde el auto. Y una Coca-Cola."
                        }), (0, t.jsx)("p", {
                            className: "text-gray-400 text-sm mb-4",
                            style: {
                                color: "#4B5761"
                            },
                            children: "99 M de visualizaciones - hace 8 meses"
                        }), (0, t.jsxs)("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, t.jsx)(f.default, {
                                    src: h,
                                    alt: "Channel",
                                    className: "w-12 h-12 rounded-full"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        color: "#4B5761"
                                    },
                                    children: "Coca-Cola"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full",
                                children: [(0, t.jsx)("span", {
                                    className: "text-xs",
                                    children: "Socio verificado"
                                }), (0, t.jsx)("div", {
                                    className: "w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center",
                                    children: "✓"
                                })]
                            })]
                        })]
                    }), (0, t.jsx)("style", {
                        children: `
      @keyframes pulseSize {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
      }
      .animate-pulse-size {
        animation: pulseSize 1s ease-in-out infinite;
      }
    `
                    }), (0, t.jsxs)(n.Card, {
                        className: "border-none p-4 shadow-none",
                        children: [(0, t.jsxs)("div", {
                            className: "mb-3 flex items-center justify-between rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700",
                            children: [(0, t.jsx)("span", {
                                children: "Tarea 1 de 3"
                            }), (0, t.jsx)("span", {
                                children: "Recompensa: US$83"
                            })]
                        }), (0, t.jsx)("h3", {
                            style: {
                                color: "#878787"
                            },
                            className: "text-lg text-center mb-2",
                            children: "Envía tu evaluación para recibir:"
                        }), (0, t.jsx)("p", {
                            className: " animate-pulse-size text-black-300 mb-4 text-center ",
                            children: "¿Este video patrocinado coincidió con tus intereses?"
                        }), (0, t.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, t.jsxs)(i.Button, {
                                style: {
                                    background: "linear-gradient(180deg, #22c55e 0%, #15803d 100%)",
                                    color: "#e9e9e9ff",
                                    border: "none",
                                    boxShadow: "0 10px 18px rgba(21, 128, 61, 0.32)"
                                },
                                onClick: () => C(!0),
                                disabled: A,
                                variant: "outline",
                                className: "animate-pulse-size flex-1 text-white",
                                children: [(0, t.jsx)(s.ThumbsUp, {
                                    className: "w-5 h-5 mr-2 text-[#e9e9e9ff]"
                                }), "Sí"]
                            }), (0, t.jsxs)(i.Button, {
                                style: {
                                    background: "linear-gradient(180deg, #ff4d55 0%, #c90812 100%)",
                                    color: "#e9e9e9ff",
                                    border: "none",
                                    boxShadow: "0 10px 18px rgba(201, 8, 18, 0.28)"
                                },
                                onClick: () => C(!1),
                                disabled: A,
                                variant: "outline",
                                className: "animate-pulse-size flex-1 text-white",
                                children: [(0, t.jsx)(a.ThumbsDown, {
                                    size: 48,
                                    className: "mr-2 text-[#e9e9e9ff]"
                                }), "No"]
                            })]
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "px-4 pb-8 space-y-4",
                    children: ["/Group-140.png", "/Group-141-1.png", "/Group-142-1.png", "/Group-143.png"].map((e, r) => (0, t.jsx)("div", {
                        className: "w-[100%]  max-w-4xl rounded-xl overflow-hidden flex items-center justify-center bg-white shadow",
                        children: (0, t.jsx)("img", {
                            src: e,
                            alt: `Imagen ${r+1}`,
                            className: "w-full h-full object-contain"
                        })
                    }, r))
                })]
            }), v && (0, t.jsx)("div", {
                className: "flex justify-center items-center fixed inset-0 z-[9999] bg-black/50",
                children: (0, t.jsxs)("div", {
                    className: "modal flex h-[360px] w-[340px] max-w-[calc(100vw-2rem)] flex-col items-center gap-5 rounded-3xl bg-gray-50 px-8 py-10 text-center shadow-lg",
                    children: [(0, t.jsx)("div", {
                        className: "mx-auto flex size-24 items-center justify-center rounded-full bg-green-100",
                        children: (0, t.jsx)(p.default, {})
                    }), (0, t.jsxs)("div", {
                        className: "text-center space-y-4",
                        children: [(0, t.jsxs)("div", {
                            className: "flex flex-col gap-2 border rounded-lg p-4 bg-green-50 border-green-200",
                            children: [(0, t.jsxs)("div", {
                                className: "text-4xl font-bold text-green-600",
                                children: ["+ US$ ", (0, t.jsx)(m.default, {
                                    start: 0,
                                    end: _.toFixed(),
                                    duration: 2
                                })]
                            }), (0, t.jsx)("div", {
                                className: "text-xs text-green-700",
                                children: "Añadido a tu saldo disponible."
                            })]
                        }), (0, t.jsx)("div", {
                            className: "text-sm text-gray-500",
                            children: "Evaluación confirmada. Cargando la siguiente tarea..."
                        })]
                    })]
                })
            })]
        })
    }
    e.s(["default", () => y], 45739)
}]);
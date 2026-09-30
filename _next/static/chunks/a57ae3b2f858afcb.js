(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 67881, 70065, 417, 65582, 41071, 65157, 94983, 62031, 88192, 53624, e => {
    "use strict";
    let t, n;
    var a, i = e.i(43476),
        r = e.i(71645);

    function s(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    var o = r.forwardRef((e, t) => {
        let {
            children: n,
            ...a
        } = e, s = r.Children.toArray(n), o = s.find(c);
        if (o) {
            let e = o.props.children,
                n = s.map(t => t !== o ? t : r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null);
            return (0, i.jsx)(l, { ...a,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null
            })
        }
        return (0, i.jsx)(l, { ...a,
            ref: t,
            children: n
        })
    });
    o.displayName = "Slot";
    var l = r.forwardRef((e, t) => {
        let {
            children: n,
            ...a
        } = e;
        if (r.isValidElement(n)) {
            var i;
            let e, o, l = (i = n, (o = (e = Object.getOwnPropertyDescriptor(i.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? i.ref : (o = (e = Object.getOwnPropertyDescriptor(i, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? i.props.ref : i.props.ref || i.ref);
            return r.cloneElement(n, { ... function(e, t) {
                    let n = { ...t
                    };
                    for (let a in t) {
                        let i = e[a],
                            r = t[a];
                        /^on[A-Z]/.test(a) ? i && r ? n[a] = (...e) => {
                            r(...e), i(...e)
                        } : i && (n[a] = i) : "style" === a ? n[a] = { ...i,
                            ...r
                        } : "className" === a && (n[a] = [i, r].filter(Boolean).join(" "))
                    }
                    return { ...e,
                        ...n
                    }
                }(a, n.props),
                ref: t ? function(...e) {
                    return t => {
                        let n = !1,
                            a = e.map(e => {
                                let a = s(e, t);
                                return n || "function" != typeof a || (n = !0), a
                            });
                        if (n) return () => {
                            for (let t = 0; t < a.length; t++) {
                                let n = a[t];
                                "function" == typeof n ? n() : s(e[t], null)
                            }
                        }
                    }
                }(t, l) : l
            })
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null
    });
    l.displayName = "SlotClone";
    var d = ({
        children: e
    }) => (0, i.jsx)(i.Fragment, {
        children: e
    });

    function c(e) {
        return r.isValidElement(e) && e.type === d
    }

    function h() {
        for (var e, t, n = 0, a = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = function e(t) {
            var n, a, i = "";
            if ("string" == typeof t || "number" == typeof t) i += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var r = t.length;
                    for (n = 0; n < r; n++) t[n] && (a = e(t[n])) && (i && (i += " "), i += a)
                } else
                    for (a in t) t[a] && (i && (i += " "), i += a);
            return i
        }(e)) && (a && (a += " "), a += t);
        return a
    }
    let u = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        m = (e, t) => {
            if (0 === e.length) return t.classGroupId;
            let n = e[0],
                a = t.nextPart.get(n),
                i = a ? m(e.slice(1), a) : void 0;
            if (i) return i;
            if (0 === t.validators.length) return;
            let r = e.join("-");
            return t.validators.find(({
                validator: e
            }) => e(r)) ? .classGroupId
        },
        f = /^\[(.+)\]$/,
        p = (e, t, n, a) => {
            e.forEach(e => {
                if ("string" == typeof e) {
                    ("" === e ? t : _(t, e)).classGroupId = n;
                    return
                }
                "function" == typeof e ? v(e) ? p(e(a), t, n, a) : t.validators.push({
                    validator: e,
                    classGroupId: n
                }) : Object.entries(e).forEach(([e, i]) => {
                    p(i, _(t, e), n, a)
                })
            })
        },
        _ = (e, t) => {
            let n = e;
            return t.split("-").forEach(e => {
                n.nextPart.has(e) || n.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }), n = n.nextPart.get(e)
            }), n
        },
        v = e => e.isThemeGetter,
        g = /\s+/;

    function b() {
        let e, t, n = 0,
            a = "";
        for (; n < arguments.length;)(e = arguments[n++]) && (t = y(e)) && (a && (a += " "), a += t);
        return a
    }
    let y = e => {
            let t;
            if ("string" == typeof e) return e;
            let n = "";
            for (let a = 0; a < e.length; a++) e[a] && (t = y(e[a])) && (n && (n += " "), n += t);
            return n
        },
        w = e => {
            let t = t => t[e] || [];
            return t.isThemeGetter = !0, t
        },
        M = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        C = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        L = /^\d+\/\d+$/,
        k = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        I = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        x = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        S = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        E = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        P = e => L.test(e),
        O = e => !!e && !Number.isNaN(Number(e)),
        A = e => !!e && Number.isInteger(Number(e)),
        F = e => e.endsWith("%") && O(e.slice(0, -1)),
        T = e => k.test(e),
        D = () => !0,
        z = e => I.test(e) && !x.test(e),
        R = () => !1,
        j = e => S.test(e),
        $ = e => E.test(e),
        U = e => !B(e) && !J(e),
        W = e => et(e, er, R),
        B = e => M.test(e),
        H = e => et(e, es, z),
        N = e => et(e, eo, O),
        G = e => et(e, ea, R),
        V = e => et(e, ei, $),
        q = e => et(e, ed, j),
        J = e => C.test(e),
        K = e => en(e, es),
        Q = e => en(e, el),
        Z = e => en(e, ea),
        X = e => en(e, er),
        Y = e => en(e, ei),
        ee = e => en(e, ed, !0),
        et = (e, t, n) => {
            let a = M.exec(e);
            return !!a && (a[1] ? t(a[1]) : n(a[2]))
        },
        en = (e, t, n = !1) => {
            let a = C.exec(e);
            return !!a && (a[1] ? t(a[1]) : n)
        },
        ea = e => "position" === e || "percentage" === e,
        ei = e => "image" === e || "url" === e,
        er = e => "length" === e || "size" === e || "bg-size" === e,
        es = e => "length" === e,
        eo = e => "number" === e,
        el = e => "family-name" === e,
        ed = e => "shadow" === e,
        ec = function(e, ...t) {
            let n, a, i, r = function(o) {
                var l;
                let d;
                return a = (n = {
                    cache: (e => {
                        if (e < 1) return {
                            get: () => void 0,
                            set: () => {}
                        };
                        let t = 0,
                            n = new Map,
                            a = new Map,
                            i = (i, r) => {
                                n.set(i, r), ++t > e && (t = 0, a = n, n = new Map)
                            };
                        return {
                            get(e) {
                                let t = n.get(e);
                                return void 0 !== t ? t : void 0 !== (t = a.get(e)) ? (i(e, t), t) : void 0
                            },
                            set(e, t) {
                                n.has(e) ? n.set(e, t) : i(e, t)
                            }
                        }
                    })((l = t.reduce((e, t) => t(e), e())).cacheSize),
                    parseClassName: (e => {
                        let {
                            prefix: t,
                            experimentalParseClassName: n
                        } = e, a = e => {
                            let t, n, a = [],
                                i = 0,
                                r = 0,
                                s = 0;
                            for (let t = 0; t < e.length; t++) {
                                let o = e[t];
                                if (0 === i && 0 === r) {
                                    if (":" === o) {
                                        a.push(e.slice(s, t)), s = t + 1;
                                        continue
                                    }
                                    if ("/" === o) {
                                        n = t;
                                        continue
                                    }
                                }
                                "[" === o ? i++ : "]" === o ? i-- : "(" === o ? r++ : ")" === o && r--
                            }
                            let o = 0 === a.length ? e : e.substring(s),
                                l = (t = o).endsWith("!") ? t.substring(0, t.length - 1) : t.startsWith("!") ? t.substring(1) : t;
                            return {
                                modifiers: a,
                                hasImportantModifier: l !== o,
                                baseClassName: l,
                                maybePostfixModifierPosition: n && n > s ? n - s : void 0
                            }
                        };
                        if (t) {
                            let e = t + ":",
                                n = a;
                            a = t => t.startsWith(e) ? n(t.substring(e.length)) : {
                                isExternal: !0,
                                modifiers: [],
                                hasImportantModifier: !1,
                                baseClassName: t,
                                maybePostfixModifierPosition: void 0
                            }
                        }
                        if (n) {
                            let e = a;
                            a = t => n({
                                className: t,
                                parseClassName: e
                            })
                        }
                        return a
                    })(l),
                    sortModifiers: (d = Object.fromEntries(l.orderSensitiveModifiers.map(e => [e, !0])), e => {
                        if (e.length <= 1) return e;
                        let t = [],
                            n = [];
                        return e.forEach(e => {
                            "[" === e[0] || d[e] ? (t.push(...n.sort(), e), n = []) : n.push(e)
                        }), t.push(...n.sort()), t
                    }),
                    ...(e => {
                        let t = (e => {
                                let {
                                    theme: t,
                                    classGroups: n
                                } = e, a = {
                                    nextPart: new Map,
                                    validators: []
                                };
                                for (let e in n) p(n[e], a, e, t);
                                return a
                            })(e),
                            {
                                conflictingClassGroups: n,
                                conflictingClassGroupModifiers: a
                            } = e;
                        return {
                            getClassGroupId: e => {
                                let n = e.split("-");
                                return "" === n[0] && 1 !== n.length && n.shift(), m(n, t) || (e => {
                                    if (f.test(e)) {
                                        let t = f.exec(e)[1],
                                            n = t ? .substring(0, t.indexOf(":"));
                                        if (n) return "arbitrary.." + n
                                    }
                                })(e)
                            },
                            getConflictingClassGroupIds: (e, t) => {
                                let i = n[e] || [];
                                return t && a[e] ? [...i, ...a[e]] : i
                            }
                        }
                    })(l)
                }).cache.get, i = n.cache.set, r = s, s(o)
            };

            function s(e) {
                let t = a(e);
                if (t) return t;
                let r = ((e, t) => {
                    let {
                        parseClassName: n,
                        getClassGroupId: a,
                        getConflictingClassGroupIds: i,
                        sortModifiers: r
                    } = t, s = [], o = e.trim().split(g), l = "";
                    for (let e = o.length - 1; e >= 0; e -= 1) {
                        let t = o[e],
                            {
                                isExternal: d,
                                modifiers: c,
                                hasImportantModifier: h,
                                baseClassName: u,
                                maybePostfixModifierPosition: m
                            } = n(t);
                        if (d) {
                            l = t + (l.length > 0 ? " " + l : l);
                            continue
                        }
                        let f = !!m,
                            p = a(f ? u.substring(0, m) : u);
                        if (!p) {
                            if (!f || !(p = a(u))) {
                                l = t + (l.length > 0 ? " " + l : l);
                                continue
                            }
                            f = !1
                        }
                        let _ = r(c).join(":"),
                            v = h ? _ + "!" : _,
                            g = v + p;
                        if (s.includes(g)) continue;
                        s.push(g);
                        let b = i(p, f);
                        for (let e = 0; e < b.length; ++e) {
                            let t = b[e];
                            s.push(v + t)
                        }
                        l = t + (l.length > 0 ? " " + l : l)
                    }
                    return l
                })(e, n);
                return i(e, r), r
            }
            return function() {
                return r(b.apply(null, arguments))
            }
        }(() => {
            let e = w("color"),
                t = w("font"),
                n = w("text"),
                a = w("font-weight"),
                i = w("tracking"),
                r = w("leading"),
                s = w("breakpoint"),
                o = w("container"),
                l = w("spacing"),
                d = w("radius"),
                c = w("shadow"),
                h = w("inset-shadow"),
                u = w("text-shadow"),
                m = w("drop-shadow"),
                f = w("blur"),
                p = w("perspective"),
                _ = w("aspect"),
                v = w("ease"),
                g = w("animate"),
                b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                y = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
                M = () => [...y(), J, B],
                C = () => ["auto", "hidden", "clip", "visible", "scroll"],
                L = () => ["auto", "contain", "none"],
                k = () => [J, B, l],
                I = () => [P, "full", "auto", ...k()],
                x = () => [A, "none", "subgrid", J, B],
                S = () => ["auto", {
                    span: ["full", A, J, B]
                }, A, J, B],
                E = () => [A, "auto", J, B],
                z = () => ["auto", "min", "max", "fr", J, B],
                R = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
                j = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
                $ = () => ["auto", ...k()],
                et = () => [P, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()],
                en = () => [e, J, B],
                ea = () => [...y(), Z, G, {
                    position: [J, B]
                }],
                ei = () => ["no-repeat", {
                    repeat: ["", "x", "y", "space", "round"]
                }],
                er = () => ["auto", "cover", "contain", X, W, {
                    size: [J, B]
                }],
                es = () => [F, K, H],
                eo = () => ["", "none", "full", d, J, B],
                el = () => ["", O, K, H],
                ed = () => ["solid", "dashed", "dotted", "double"],
                ec = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                eh = () => [O, F, Z, G],
                eu = () => ["", "none", f, J, B],
                em = () => ["none", O, J, B],
                ef = () => ["none", O, J, B],
                ep = () => [O, J, B],
                e_ = () => [P, "full", ...k()];
            return {
                cacheSize: 500,
                theme: {
                    animate: ["spin", "ping", "pulse", "bounce"],
                    aspect: ["video"],
                    blur: [T],
                    breakpoint: [T],
                    color: [D],
                    container: [T],
                    "drop-shadow": [T],
                    ease: ["in", "out", "in-out"],
                    font: [U],
                    "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                    "inset-shadow": [T],
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                    perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                    radius: [T],
                    shadow: [T],
                    spacing: ["px", O],
                    text: [T],
                    "text-shadow": [T],
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", P, B, J, _]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [O, B, J, o]
                    }],
                    "break-after": [{
                        "break-after": b()
                    }],
                    "break-before": [{
                        "break-before": b()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    sr: ["sr-only", "not-sr-only"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: M()
                    }],
                    overflow: [{
                        overflow: C()
                    }],
                    "overflow-x": [{
                        "overflow-x": C()
                    }],
                    "overflow-y": [{
                        "overflow-y": C()
                    }],
                    overscroll: [{
                        overscroll: L()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": L()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": L()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: I()
                    }],
                    "inset-x": [{
                        "inset-x": I()
                    }],
                    "inset-y": [{
                        "inset-y": I()
                    }],
                    start: [{
                        start: I()
                    }],
                    end: [{
                        end: I()
                    }],
                    top: [{
                        top: I()
                    }],
                    right: [{
                        right: I()
                    }],
                    bottom: [{
                        bottom: I()
                    }],
                    left: [{
                        left: I()
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: [A, "auto", J, B]
                    }],
                    basis: [{
                        basis: [P, "full", "auto", o, ...k()]
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["nowrap", "wrap", "wrap-reverse"]
                    }],
                    flex: [{
                        flex: [O, P, "auto", "initial", "none", B]
                    }],
                    grow: [{
                        grow: ["", O, J, B]
                    }],
                    shrink: [{
                        shrink: ["", O, J, B]
                    }],
                    order: [{
                        order: [A, "first", "last", "none", J, B]
                    }],
                    "grid-cols": [{
                        "grid-cols": x()
                    }],
                    "col-start-end": [{
                        col: S()
                    }],
                    "col-start": [{
                        "col-start": E()
                    }],
                    "col-end": [{
                        "col-end": E()
                    }],
                    "grid-rows": [{
                        "grid-rows": x()
                    }],
                    "row-start-end": [{
                        row: S()
                    }],
                    "row-start": [{
                        "row-start": E()
                    }],
                    "row-end": [{
                        "row-end": E()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": z()
                    }],
                    "auto-rows": [{
                        "auto-rows": z()
                    }],
                    gap: [{
                        gap: k()
                    }],
                    "gap-x": [{
                        "gap-x": k()
                    }],
                    "gap-y": [{
                        "gap-y": k()
                    }],
                    "justify-content": [{
                        justify: [...R(), "normal"]
                    }],
                    "justify-items": [{
                        "justify-items": [...j(), "normal"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", ...j()]
                    }],
                    "align-content": [{
                        content: ["normal", ...R()]
                    }],
                    "align-items": [{
                        items: [...j(), {
                            baseline: ["", "last"]
                        }]
                    }],
                    "align-self": [{
                        self: ["auto", ...j(), {
                            baseline: ["", "last"]
                        }]
                    }],
                    "place-content": [{
                        "place-content": R()
                    }],
                    "place-items": [{
                        "place-items": [...j(), "baseline"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", ...j()]
                    }],
                    p: [{
                        p: k()
                    }],
                    px: [{
                        px: k()
                    }],
                    py: [{
                        py: k()
                    }],
                    ps: [{
                        ps: k()
                    }],
                    pe: [{
                        pe: k()
                    }],
                    pt: [{
                        pt: k()
                    }],
                    pr: [{
                        pr: k()
                    }],
                    pb: [{
                        pb: k()
                    }],
                    pl: [{
                        pl: k()
                    }],
                    m: [{
                        m: $()
                    }],
                    mx: [{
                        mx: $()
                    }],
                    my: [{
                        my: $()
                    }],
                    ms: [{
                        ms: $()
                    }],
                    me: [{
                        me: $()
                    }],
                    mt: [{
                        mt: $()
                    }],
                    mr: [{
                        mr: $()
                    }],
                    mb: [{
                        mb: $()
                    }],
                    ml: [{
                        ml: $()
                    }],
                    "space-x": [{
                        "space-x": k()
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": k()
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    size: [{
                        size: et()
                    }],
                    w: [{
                        w: [o, "screen", ...et()]
                    }],
                    "min-w": [{
                        "min-w": [o, "screen", "none", ...et()]
                    }],
                    "max-w": [{
                        "max-w": [o, "screen", "none", "prose", {
                            screen: [s]
                        }, ...et()]
                    }],
                    h: [{
                        h: ["screen", "lh", ...et()]
                    }],
                    "min-h": [{
                        "min-h": ["screen", "lh", "none", ...et()]
                    }],
                    "max-h": [{
                        "max-h": ["screen", "lh", ...et()]
                    }],
                    "font-size": [{
                        text: ["base", n, K, H]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: [a, J, N]
                    }],
                    "font-stretch": [{
                        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", F, B]
                    }],
                    "font-family": [{
                        font: [Q, B, t]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: [i, J, B]
                    }],
                    "line-clamp": [{
                        "line-clamp": [O, "none", J, N]
                    }],
                    leading: [{
                        leading: [r, ...k()]
                    }],
                    "list-image": [{
                        "list-image": ["none", J, B]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "list-style-type": [{
                        list: ["disc", "decimal", "none", J, B]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "placeholder-color": [{
                        placeholder: en()
                    }],
                    "text-color": [{
                        text: en()
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...ed(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: [O, "from-font", "auto", J, H]
                    }],
                    "text-decoration-color": [{
                        decoration: en()
                    }],
                    "underline-offset": [{
                        "underline-offset": [O, "auto", J, B]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: k()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J, B]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    wrap: [{
                        wrap: ["break-word", "anywhere", "normal"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", J, B]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: ea()
                    }],
                    "bg-repeat": [{
                        bg: ei()
                    }],
                    "bg-size": [{
                        bg: er()
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            linear: [{
                                to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, A, J, B],
                            radial: ["", J, B],
                            conic: [A, J, B]
                        }, Y, V]
                    }],
                    "bg-color": [{
                        bg: en()
                    }],
                    "gradient-from-pos": [{
                        from: es()
                    }],
                    "gradient-via-pos": [{
                        via: es()
                    }],
                    "gradient-to-pos": [{
                        to: es()
                    }],
                    "gradient-from": [{
                        from: en()
                    }],
                    "gradient-via": [{
                        via: en()
                    }],
                    "gradient-to": [{
                        to: en()
                    }],
                    rounded: [{
                        rounded: eo()
                    }],
                    "rounded-s": [{
                        "rounded-s": eo()
                    }],
                    "rounded-e": [{
                        "rounded-e": eo()
                    }],
                    "rounded-t": [{
                        "rounded-t": eo()
                    }],
                    "rounded-r": [{
                        "rounded-r": eo()
                    }],
                    "rounded-b": [{
                        "rounded-b": eo()
                    }],
                    "rounded-l": [{
                        "rounded-l": eo()
                    }],
                    "rounded-ss": [{
                        "rounded-ss": eo()
                    }],
                    "rounded-se": [{
                        "rounded-se": eo()
                    }],
                    "rounded-ee": [{
                        "rounded-ee": eo()
                    }],
                    "rounded-es": [{
                        "rounded-es": eo()
                    }],
                    "rounded-tl": [{
                        "rounded-tl": eo()
                    }],
                    "rounded-tr": [{
                        "rounded-tr": eo()
                    }],
                    "rounded-br": [{
                        "rounded-br": eo()
                    }],
                    "rounded-bl": [{
                        "rounded-bl": eo()
                    }],
                    "border-w": [{
                        border: el()
                    }],
                    "border-w-x": [{
                        "border-x": el()
                    }],
                    "border-w-y": [{
                        "border-y": el()
                    }],
                    "border-w-s": [{
                        "border-s": el()
                    }],
                    "border-w-e": [{
                        "border-e": el()
                    }],
                    "border-w-t": [{
                        "border-t": el()
                    }],
                    "border-w-r": [{
                        "border-r": el()
                    }],
                    "border-w-b": [{
                        "border-b": el()
                    }],
                    "border-w-l": [{
                        "border-l": el()
                    }],
                    "divide-x": [{
                        "divide-x": el()
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": el()
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "border-style": [{
                        border: [...ed(), "hidden", "none"]
                    }],
                    "divide-style": [{
                        divide: [...ed(), "hidden", "none"]
                    }],
                    "border-color": [{
                        border: en()
                    }],
                    "border-color-x": [{
                        "border-x": en()
                    }],
                    "border-color-y": [{
                        "border-y": en()
                    }],
                    "border-color-s": [{
                        "border-s": en()
                    }],
                    "border-color-e": [{
                        "border-e": en()
                    }],
                    "border-color-t": [{
                        "border-t": en()
                    }],
                    "border-color-r": [{
                        "border-r": en()
                    }],
                    "border-color-b": [{
                        "border-b": en()
                    }],
                    "border-color-l": [{
                        "border-l": en()
                    }],
                    "divide-color": [{
                        divide: en()
                    }],
                    "outline-style": [{
                        outline: [...ed(), "none", "hidden"]
                    }],
                    "outline-offset": [{
                        "outline-offset": [O, J, B]
                    }],
                    "outline-w": [{
                        outline: ["", O, K, H]
                    }],
                    "outline-color": [{
                        outline: en()
                    }],
                    shadow: [{
                        shadow: ["", "none", c, ee, q]
                    }],
                    "shadow-color": [{
                        shadow: en()
                    }],
                    "inset-shadow": [{
                        "inset-shadow": ["none", h, ee, q]
                    }],
                    "inset-shadow-color": [{
                        "inset-shadow": en()
                    }],
                    "ring-w": [{
                        ring: el()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: en()
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [O, H]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": en()
                    }],
                    "inset-ring-w": [{
                        "inset-ring": el()
                    }],
                    "inset-ring-color": [{
                        "inset-ring": en()
                    }],
                    "text-shadow": [{
                        "text-shadow": ["none", u, ee, q]
                    }],
                    "text-shadow-color": [{
                        "text-shadow": en()
                    }],
                    opacity: [{
                        opacity: [O, J, B]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...ec(), "plus-darker", "plus-lighter"]
                    }],
                    "bg-blend": [{
                        "bg-blend": ec()
                    }],
                    "mask-clip": [{
                        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                    }, "mask-no-clip"],
                    "mask-composite": [{
                        mask: ["add", "subtract", "intersect", "exclude"]
                    }],
                    "mask-image-linear-pos": [{
                        "mask-linear": [O]
                    }],
                    "mask-image-linear-from-pos": [{
                        "mask-linear-from": eh()
                    }],
                    "mask-image-linear-to-pos": [{
                        "mask-linear-to": eh()
                    }],
                    "mask-image-linear-from-color": [{
                        "mask-linear-from": en()
                    }],
                    "mask-image-linear-to-color": [{
                        "mask-linear-to": en()
                    }],
                    "mask-image-t-from-pos": [{
                        "mask-t-from": eh()
                    }],
                    "mask-image-t-to-pos": [{
                        "mask-t-to": eh()
                    }],
                    "mask-image-t-from-color": [{
                        "mask-t-from": en()
                    }],
                    "mask-image-t-to-color": [{
                        "mask-t-to": en()
                    }],
                    "mask-image-r-from-pos": [{
                        "mask-r-from": eh()
                    }],
                    "mask-image-r-to-pos": [{
                        "mask-r-to": eh()
                    }],
                    "mask-image-r-from-color": [{
                        "mask-r-from": en()
                    }],
                    "mask-image-r-to-color": [{
                        "mask-r-to": en()
                    }],
                    "mask-image-b-from-pos": [{
                        "mask-b-from": eh()
                    }],
                    "mask-image-b-to-pos": [{
                        "mask-b-to": eh()
                    }],
                    "mask-image-b-from-color": [{
                        "mask-b-from": en()
                    }],
                    "mask-image-b-to-color": [{
                        "mask-b-to": en()
                    }],
                    "mask-image-l-from-pos": [{
                        "mask-l-from": eh()
                    }],
                    "mask-image-l-to-pos": [{
                        "mask-l-to": eh()
                    }],
                    "mask-image-l-from-color": [{
                        "mask-l-from": en()
                    }],
                    "mask-image-l-to-color": [{
                        "mask-l-to": en()
                    }],
                    "mask-image-x-from-pos": [{
                        "mask-x-from": eh()
                    }],
                    "mask-image-x-to-pos": [{
                        "mask-x-to": eh()
                    }],
                    "mask-image-x-from-color": [{
                        "mask-x-from": en()
                    }],
                    "mask-image-x-to-color": [{
                        "mask-x-to": en()
                    }],
                    "mask-image-y-from-pos": [{
                        "mask-y-from": eh()
                    }],
                    "mask-image-y-to-pos": [{
                        "mask-y-to": eh()
                    }],
                    "mask-image-y-from-color": [{
                        "mask-y-from": en()
                    }],
                    "mask-image-y-to-color": [{
                        "mask-y-to": en()
                    }],
                    "mask-image-radial": [{
                        "mask-radial": [J, B]
                    }],
                    "mask-image-radial-from-pos": [{
                        "mask-radial-from": eh()
                    }],
                    "mask-image-radial-to-pos": [{
                        "mask-radial-to": eh()
                    }],
                    "mask-image-radial-from-color": [{
                        "mask-radial-from": en()
                    }],
                    "mask-image-radial-to-color": [{
                        "mask-radial-to": en()
                    }],
                    "mask-image-radial-shape": [{
                        "mask-radial": ["circle", "ellipse"]
                    }],
                    "mask-image-radial-size": [{
                        "mask-radial": [{
                            closest: ["side", "corner"],
                            farthest: ["side", "corner"]
                        }]
                    }],
                    "mask-image-radial-pos": [{
                        "mask-radial-at": y()
                    }],
                    "mask-image-conic-pos": [{
                        "mask-conic": [O]
                    }],
                    "mask-image-conic-from-pos": [{
                        "mask-conic-from": eh()
                    }],
                    "mask-image-conic-to-pos": [{
                        "mask-conic-to": eh()
                    }],
                    "mask-image-conic-from-color": [{
                        "mask-conic-from": en()
                    }],
                    "mask-image-conic-to-color": [{
                        "mask-conic-to": en()
                    }],
                    "mask-mode": [{
                        mask: ["alpha", "luminance", "match"]
                    }],
                    "mask-origin": [{
                        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                    }],
                    "mask-position": [{
                        mask: ea()
                    }],
                    "mask-repeat": [{
                        mask: ei()
                    }],
                    "mask-size": [{
                        mask: er()
                    }],
                    "mask-type": [{
                        "mask-type": ["alpha", "luminance"]
                    }],
                    "mask-image": [{
                        mask: ["none", J, B]
                    }],
                    filter: [{
                        filter: ["", "none", J, B]
                    }],
                    blur: [{
                        blur: eu()
                    }],
                    brightness: [{
                        brightness: [O, J, B]
                    }],
                    contrast: [{
                        contrast: [O, J, B]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", m, ee, q]
                    }],
                    "drop-shadow-color": [{
                        "drop-shadow": en()
                    }],
                    grayscale: [{
                        grayscale: ["", O, J, B]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [O, J, B]
                    }],
                    invert: [{
                        invert: ["", O, J, B]
                    }],
                    saturate: [{
                        saturate: [O, J, B]
                    }],
                    sepia: [{
                        sepia: ["", O, J, B]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none", J, B]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": eu()
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [O, J, B]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [O, J, B]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": ["", O, J, B]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [O, J, B]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": ["", O, J, B]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [O, J, B]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [O, J, B]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": ["", O, J, B]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": k()
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": k()
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": k()
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", J, B]
                    }],
                    "transition-behavior": [{
                        transition: ["normal", "discrete"]
                    }],
                    duration: [{
                        duration: [O, "initial", J, B]
                    }],
                    ease: [{
                        ease: ["linear", "initial", v, J, B]
                    }],
                    delay: [{
                        delay: [O, J, B]
                    }],
                    animate: [{
                        animate: ["none", g, J, B]
                    }],
                    backface: [{
                        backface: ["hidden", "visible"]
                    }],
                    perspective: [{
                        perspective: [p, J, B]
                    }],
                    "perspective-origin": [{
                        "perspective-origin": M()
                    }],
                    rotate: [{
                        rotate: em()
                    }],
                    "rotate-x": [{
                        "rotate-x": em()
                    }],
                    "rotate-y": [{
                        "rotate-y": em()
                    }],
                    "rotate-z": [{
                        "rotate-z": em()
                    }],
                    scale: [{
                        scale: ef()
                    }],
                    "scale-x": [{
                        "scale-x": ef()
                    }],
                    "scale-y": [{
                        "scale-y": ef()
                    }],
                    "scale-z": [{
                        "scale-z": ef()
                    }],
                    "scale-3d": ["scale-3d"],
                    skew: [{
                        skew: ep()
                    }],
                    "skew-x": [{
                        "skew-x": ep()
                    }],
                    "skew-y": [{
                        "skew-y": ep()
                    }],
                    transform: [{
                        transform: [J, B, "", "none", "gpu", "cpu"]
                    }],
                    "transform-origin": [{
                        origin: M()
                    }],
                    "transform-style": [{
                        transform: ["3d", "flat"]
                    }],
                    translate: [{
                        translate: e_()
                    }],
                    "translate-x": [{
                        "translate-x": e_()
                    }],
                    "translate-y": [{
                        "translate-y": e_()
                    }],
                    "translate-z": [{
                        "translate-z": e_()
                    }],
                    "translate-none": ["translate-none"],
                    accent: [{
                        accent: en()
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    "caret-color": [{
                        caret: en()
                    }],
                    "color-scheme": [{
                        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J, B]
                    }],
                    "field-sizing": [{
                        "field-sizing": ["fixed", "content"]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["auto", "none"]
                    }],
                    resize: [{
                        resize: ["none", "", "y", "x"]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": k()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": k()
                    }],
                    "scroll-my": [{
                        "scroll-my": k()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": k()
                    }],
                    "scroll-me": [{
                        "scroll-me": k()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": k()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": k()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": k()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": k()
                    }],
                    "scroll-p": [{
                        "scroll-p": k()
                    }],
                    "scroll-px": [{
                        "scroll-px": k()
                    }],
                    "scroll-py": [{
                        "scroll-py": k()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": k()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": k()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": k()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": k()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": k()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": k()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", J, B]
                    }],
                    fill: [{
                        fill: ["none", ...en()]
                    }],
                    "stroke-w": [{
                        stroke: [O, K, H, N]
                    }],
                    stroke: [{
                        stroke: ["none", ...en()]
                    }],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    translate: ["translate-x", "translate-y", "translate-none"],
                    "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                },
                orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
            }
        });

    function eh(...e) {
        return ec(h(e))
    }
    let eu = (t = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", n = {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                "icon-sm": "size-8",
                "icon-lg": "size-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }, e => {
        var a;
        if ((null == n ? void 0 : n.variants) == null) return h(t, null == e ? void 0 : e.class, null == e ? void 0 : e.className);
        let {
            variants: i,
            defaultVariants: r
        } = n, s = Object.keys(i).map(t => {
            let n = null == e ? void 0 : e[t],
                a = null == r ? void 0 : r[t];
            if (null === n) return null;
            let s = u(n) || u(a);
            return i[t][s]
        }), o = e && Object.entries(e).reduce((e, t) => {
            let [n, a] = t;
            return void 0 === a || (e[n] = a), e
        }, {});
        return h(t, s, null == n || null == (a = n.compoundVariants) ? void 0 : a.reduce((e, t) => {
            let {
                class: n,
                className: a,
                ...i
            } = t;
            return Object.entries(i).every(e => {
                let [t, n] = e;
                return Array.isArray(n) ? n.includes({ ...r,
                    ...o
                }[t]) : ({ ...r,
                    ...o
                })[t] === n
            }) ? [...e, n, a] : e
        }, []), null == e ? void 0 : e.class, null == e ? void 0 : e.className)
    });

    function em({
        className: e,
        variant: t,
        size: n,
        asChild: a = !1,
        ...r
    }) {
        let s = a ? o : "button";
        return (0, i.jsx)(s, {
            "data-slot": "button",
            className: eh(eu({
                variant: t,
                size: n,
                className: e
            })),
            ...r
        })
    }

    function ef({
        className: e,
        ...t
    }) {
        return (0, i.jsx)("div", {
            "data-slot": "card",
            className: eh("text-card-foreground shadow-xl flex flex-col gap-3 rounded-xl border py-6 bg-white border-gray-400/20 shadow-black/7", e),
            ...t
        })
    }
    e.s(["Button", () => em], 67881), e.s(["Card", () => ef], 70065);
    var ep = e.i(75254);
    let e_ = (0, ep.default)("ThumbsUp", [
        ["path", {
            d: "M7 10v12",
            key: "1qc93n"
        }],
        ["path", {
            d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
            key: "emmmcr"
        }]
    ]);
    e.s(["ThumbsUp", () => e_], 417);
    let ev = (0, ep.default)("ThumbsDown", [
        ["path", {
            d: "M17 14V2",
            key: "8ymqnk"
        }],
        ["path", {
            d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
            key: "m61m77"
        }]
    ]);
    e.s(["ThumbsDown", () => ev], 65582);
    let eg = (0, ep.default)("Ellipsis", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }],
        ["circle", {
            cx: "19",
            cy: "12",
            r: "1",
            key: "1wjl8i"
        }],
        ["circle", {
            cx: "5",
            cy: "12",
            r: "1",
            key: "1pcz8c"
        }]
    ]);
    e.s(["MoreHorizontal", () => eg], 41071);
    let eb = (0, ep.default)("Earth", [
        ["path", {
            d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
            key: "1djwo0"
        }],
        ["path", {
            d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
            key: "1tzkfa"
        }],
        ["path", {
            d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
            key: "14pb5j"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]
    ]);
    e.s(["Globe2", () => eb], 65157);
    let ey = (0, ep.default)("MessageCircle", [
        ["path", {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }]
    ]);
    e.s(["MessageCircle", () => ey], 94983);
    let ew = (0, ep.default)("Share2", [
        ["circle", {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }],
        ["circle", {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }],
        ["circle", {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }],
        ["line", {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49",
            key: "47mynk"
        }],
        ["line", {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49",
            key: "1n3mei"
        }]
    ]);
    e.s(["Share2", () => ew], 62031);
    var eM = Object.defineProperty,
        eC = (e, t, n) => {
            let a;
            return (a = "symbol" != typeof t ? t + "" : t) in e ? eM(e, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[a] = n
        },
        eL = class {
            requestAnimationFrame(e) {
                return requestAnimationFrame(e)
            }
            cancelAnimationFrame(e) {
                cancelAnimationFrame(e)
            }
        },
        ek = class {
            constructor() {
                eC(this, "_lastHandleId", 0), eC(this, "_lastImmediate", null)
            }
            requestAnimationFrame(e) {
                return this._lastHandleId >= Number.MAX_SAFE_INTEGER && (this._lastHandleId = 0), this._lastHandleId += 1, this._lastImmediate = setImmediate(() => {
                    e(Date.now())
                }), this._lastHandleId
            }
            cancelAnimationFrame(e) {
                this._lastImmediate && clearImmediate(this._lastImmediate)
            }
        },
        eI = class {
            constructor() {
                eC(this, "_strategy"), this._strategy = "function" == typeof requestAnimationFrame ? new eL : new ek
            }
            requestAnimationFrame(e) {
                return this._strategy.requestAnimationFrame(e)
            }
            cancelAnimationFrame(e) {
                this._strategy.cancelAnimationFrame(e)
            }
        },
        ex = "u" > typeof window && "u" > typeof window.document,
        eS = new Uint8Array([80, 75, 3, 4]),
        eE = ["v", "ip", "op", "layers", "fr", "w", "h"],
        eP = "0.54.1",
        eO = "@lottiefiles/dotlottie-web",
        eA = (a = "u" > typeof document ? document.currentScript ? .src : void 0, function(e = {}) {
            var t, n, i, r, s = new Promise((e, t) => {
                    n = e, i = t
                }),
                o = Object.assign({}, e),
                l = "./this.program",
                d = "";
            "u" > typeof document && document.currentScript && (d = document.currentScript.src), a && (d = a), d = d.startsWith("blob:") ? "" : d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1), r = async e => {
                if ((e = await fetch(e, {
                        credentials: "same-origin"
                    })).ok) return e.arrayBuffer();
                throw Error(e.status + " : " + e.url)
            };
            var c = e.printErr || console.error.bind(console);
            Object.assign(e, o), o = null, e.thisProgram && (l = e.thisProgram);
            var h, u, m, f, p, _, v, g, b, y, w = e.wasmBinary,
                M = !1;

            function C() {
                var t = h.buffer;
                e.HEAP8 = m = new Int8Array(t), e.HEAP16 = p = new Int16Array(t), e.HEAPU8 = f = new Uint8Array(t), e.HEAPU16 = _ = new Uint16Array(t), e.HEAP32 = v = new Int32Array(t), e.HEAPU32 = g = new Uint32Array(t), e.HEAPF32 = b = new Float32Array(t), e.HEAPF64 = y = new Float64Array(t)
            }
            var L = [],
                k = [],
                I = [],
                x = 0,
                S = null;

            function E(t) {
                throw e.onAbort ? .(t), c(t = "Aborted(" + t + ")"), M = !0, t = new WebAssembly.RuntimeError(t + ". Build with -sASSERTIONS for more info."), i(t), t
            }
            async function P(e) {
                if (!w) try {
                    var t = await r(e);
                    return new Uint8Array(t)
                } catch {}
                if (e == H && w) e = new Uint8Array(w);
                else throw "both async and sync fetching of the wasm failed";
                return e
            }
            async function O(e, t) {
                try {
                    var n = await P(e);
                    return await WebAssembly.instantiate(n, t)
                } catch (e) {
                    c(`failed to asynchronously prepare wasm: ${e}`), E(e)
                }
            }
            async function A(e) {
                var t = H;
                if (!w && "function" == typeof WebAssembly.instantiateStreaming && !t.startsWith("data:application/octet-stream;base64,") && "function" == typeof fetch) try {
                    var n = fetch(t, {
                        credentials: "same-origin"
                    });
                    return await WebAssembly.instantiateStreaming(n, e)
                } catch (e) {
                    c(`wasm streaming compile failed: ${e}`), c("falling back to ArrayBuffer instantiation")
                }
                return O(t, e)
            }
            class F {
                constructor(e) {
                    eC(this, "name", "ExitStatus"), this.message = `Program terminated with exit(${e})`, this.status = e
                }
            }
            var T = t => {
                    for (; 0 < t.length;) t.shift()(e)
                },
                D = e.noExitRuntime || !0,
                z = "u" > typeof TextDecoder ? new TextDecoder : void 0,
                R = (e = 0, t = NaN) => {
                    var n = f,
                        a = e + t;
                    for (t = e; n[t] && !(t >= a);) ++t;
                    if (16 < t - e && n.buffer && z) return z.decode(n.subarray(e, t));
                    for (a = ""; e < t;) {
                        var i = n[e++];
                        if (128 & i) {
                            var r = 63 & n[e++];
                            if ((224 & i) == 192) a += String.fromCharCode((31 & i) << 6 | r);
                            else {
                                var s = 63 & n[e++];
                                65536 > (i = (240 & i) == 224 ? (15 & i) << 12 | r << 6 | s : (7 & i) << 18 | r << 12 | s << 6 | 63 & n[e++]) ? a += String.fromCharCode(i) : (i -= 65536, a += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i))
                            }
                        } else a += String.fromCharCode(i)
                    }
                    return a
                };
            class j {
                constructor(e) {
                    this.Ca = e - 24
                }
            }
            var $ = (e, t, n) => {
                    var a = f;
                    if (0 < n) {
                        n = t + n - 1;
                        for (var i = 0; i < e.length; ++i) {
                            var r = e.charCodeAt(i);
                            if (55296 <= r && 57343 >= r && (r = 65536 + ((1023 & r) << 10) | 1023 & e.charCodeAt(++i)), 127 >= r) {
                                if (t >= n) break;
                                a[t++] = r
                            } else {
                                if (2047 >= r) {
                                    if (t + 1 >= n) break;
                                    a[t++] = 192 | r >> 6
                                } else {
                                    if (65535 >= r) {
                                        if (t + 2 >= n) break;
                                        a[t++] = 224 | r >> 12
                                    } else {
                                        if (t + 3 >= n) break;
                                        a[t++] = 240 | r >> 18, a[t++] = 128 | r >> 12 & 63
                                    }
                                    a[t++] = 128 | r >> 6 & 63
                                }
                                a[t++] = 128 | 63 & r
                            }
                        }
                        a[t] = 0
                    }
                },
                U = {},
                W = e => {
                    for (; e.length;) {
                        var t = e.pop();
                        e.pop()(t)
                    }
                };

            function B(e) {
                return this.fromWireType(g[e >> 2])
            }
            var H, N, G, V, q = {},
                J = {},
                K = {},
                Q = (e, t, n) => {
                    function a(t) {
                        if ((t = n(t)).length !== e.length) throw new N("Mismatched type converter count");
                        for (var a = 0; a < e.length; ++a) X(e[a], t[a])
                    }
                    e.forEach(e => K[e] = t);
                    var i = Array(t.length),
                        r = [],
                        s = 0;
                    t.forEach((e, t) => {
                        J.hasOwnProperty(e) ? i[t] = J[e] : (r.push(e), q.hasOwnProperty(e) || (q[e] = []), q[e].push(() => {
                            i[t] = J[e], ++s === r.length && a(i)
                        }))
                    }), 0 === r.length && a(i)
                },
                Z = e => {
                    for (var t = ""; f[e];) t += G[f[e++]];
                    return t
                };

            function X(e, t, n = {}) {
                return function(e, t, n = {}) {
                    var a = t.name;
                    if (!e) throw new V(`type "${a}" must have a positive integer typeid pointer`);
                    if (J.hasOwnProperty(e)) {
                        if (n.hb) return;
                        throw new V(`Cannot register type '${a}' twice`)
                    }
                    J[e] = t, delete K[e], q.hasOwnProperty(e) && (t = q[e], delete q[e], t.forEach(e => e()))
                }(e, t, n)
            }
            var Y = e => {
                    throw new V(e.Aa.Da.Ba.name + " instance already deleted")
                },
                ee = !1,
                et = () => {},
                en = (e, t, n) => t === n ? e : void 0 === n.Ga || null === (e = en(e, t, n.Ga)) ? null : n.$a(e),
                ea = {},
                ei = {},
                er = (e, t) => {
                    if (!t.Da || !t.Ca) throw new N("makeClassHandle requires ptr and ptrType");
                    if (!!t.Ha != !!t.Fa) throw new N("Both smartPtrType and smartPtr must be specified");
                    return t.count = {
                        value: 1
                    }, es(Object.create(e, {
                        Aa: {
                            value: t,
                            writable: !0
                        }
                    }))
                },
                es = e => typeof FinalizationRegistry > "u" ? (es = e => e, e) : (ee = new FinalizationRegistry(e => {
                    e = e.Aa, --e.count.value, 0 === e.count.value && (e.Fa ? e.Ha.Ka(e.Fa) : e.Da.Ba.Ka(e.Ca))
                }), es = e => {
                    var t = e.Aa;
                    return t.Fa && ee.register(e, {
                        Aa: t
                    }, e), e
                }, et = e => {
                    ee.unregister(e)
                }, es(e));

            function eo() {}
            var el = (e, t) => Object.defineProperty(t, "name", {
                    value: e
                }),
                ed = (e, t, n) => {
                    if (void 0 === e[t].Ea) {
                        var a = e[t];
                        e[t] = function(...a) {
                            if (!e[t].Ea.hasOwnProperty(a.length)) throw new V(`Function '${n}' called with an invalid number of arguments (${a.length}) - expects one of (${e[t].Ea})!`);
                            return e[t].Ea[a.length].apply(this, a)
                        }, e[t].Ea = [], e[t].Ea[a.Na] = a
                    }
                },
                ec = (t, n, a) => {
                    if (e.hasOwnProperty(t)) {
                        if (void 0 === a || void 0 !== e[t].Ea && void 0 !== e[t].Ea[a]) throw new V(`Cannot register public name '${t}' twice`);
                        if (ed(e, t, t), e[t].Ea.hasOwnProperty(a)) throw new V(`Cannot register multiple overloads of a function with the same number of arguments (${a})!`);
                        e[t].Ea[a] = n
                    } else e[t] = n, e[t].Na = a
                };

            function eh(e, t, n, a, i, r, s, o) {
                this.name = e, this.constructor = t, this.Ma = n, this.Ka = a, this.Ga = i, this.bb = r, this.Qa = s, this.$a = o, this.jb = []
            }
            var eu = (e, t, n) => {
                for (; t !== n;) {
                    if (!t.Qa) throw new V(`Expected null or instance of ${n.name}, got an instance of ${t.name}`);
                    e = t.Qa(e), t = t.Ga
                }
                return e
            };

            function em(e, t) {
                if (null === t) {
                    if (this.Ta) throw new V(`null is not a valid ${this.name}`);
                    return 0
                }
                if (!t.Aa) throw new V(`Cannot pass "${eD(t)}" as a ${this.name}`);
                if (!t.Aa.Ca) throw new V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                return eu(t.Aa.Ca, t.Aa.Da.Ba, this.Ba)
            }

            function ef(e, t) {
                if (null === t) {
                    if (this.Ta) throw new V(`null is not a valid ${this.name}`);
                    if (this.Sa) {
                        var n = this.Ua();
                        return null !== e && e.push(this.Ka, n), n
                    }
                    return 0
                }
                if (!t || !t.Aa) throw new V(`Cannot pass "${eD(t)}" as a ${this.name}`);
                if (!t.Aa.Ca) throw new V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                if (!this.Ra && t.Aa.Da.Ra) throw new V(`Cannot convert argument of type ${t.Aa.Ha?t.Aa.Ha.name:t.Aa.Da.name} to parameter type ${this.name}`);
                if (n = eu(t.Aa.Ca, t.Aa.Da.Ba, this.Ba), this.Sa) {
                    if (void 0 === t.Aa.Fa) throw new V("Passing raw pointer to smart pointer is illegal");
                    switch (this.ob) {
                        case 0:
                            if (t.Aa.Ha === this) n = t.Aa.Fa;
                            else throw new V(`Cannot convert argument of type ${t.Aa.Ha?t.Aa.Ha.name:t.Aa.Da.name} to parameter type ${this.name}`);
                            break;
                        case 1:
                            n = t.Aa.Fa;
                            break;
                        case 2:
                            if (t.Aa.Ha === this) n = t.Aa.Fa;
                            else {
                                var a = t.clone();
                                n = this.kb(n, eA(() => a.delete())), null !== e && e.push(this.Ka, n)
                            }
                            break;
                        default:
                            throw new V("Unsupporting sharing policy")
                    }
                }
                return n
            }

            function ep(e, t) {
                if (null === t) {
                    if (this.Ta) throw new V(`null is not a valid ${this.name}`);
                    return 0
                }
                if (!t.Aa) throw new V(`Cannot pass "${eD(t)}" as a ${this.name}`);
                if (!t.Aa.Ca) throw new V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                if (t.Aa.Da.Ra) throw new V(`Cannot convert argument of type ${t.Aa.Da.name} to parameter type ${this.name}`);
                return eu(t.Aa.Ca, t.Aa.Da.Ba, this.Ba)
            }

            function e_(e, t, n, a, i, r, s, o, l, d, c) {
                this.name = e, this.Ba = t, this.Ta = n, this.Ra = a, this.Sa = i, this.ib = r, this.ob = s, this.Ya = o, this.Ua = l, this.kb = d, this.Ka = c, i || void 0 !== t.Ga ? this.toWireType = ef : (this.toWireType = a ? em : ep, this.Ja = null)
            }
            var ev, eg, eb = (t, n, a) => {
                    if (!e.hasOwnProperty(t)) throw new N("Replacing nonexistent public symbol");
                    void 0 !== e[t].Ea && void 0 !== a ? e[t].Ea[a] = n : (e[t] = n, e[t].Na = a)
                },
                ey = (t, n) => {
                    let a;
                    var i = (t = Z(t)).includes("j") ? (a = t, (...t) => ((t, n, a = []) => n = t.includes("j") ? (0, e["dynCall_" + (t = t.replace(/p/g, "i"))])(n, ...a) : ev.get(n)(...a))(a, n, t)) : ev.get(n);
                    if ("function" != typeof i) throw new V(`unknown function pointer with signature ${t}: ${n}`);
                    return i
                },
                ew = e => {
                    var t = Z(e = e7(e));
                    return e5(e), t
                },
                eM = (e, t) => {
                    var n = [],
                        a = {};
                    throw t.forEach(function e(t) {
                        a[t] || J[t] || (K[t] ? K[t].forEach(e) : (n.push(t), a[t] = !0))
                    }), new eg(`${e}: ` + n.map(ew).join([", "]))
                },
                eL = (e, t) => {
                    for (var n = [], a = 0; a < e; a++) n.push(g[t + 4 * a >> 2]);
                    return n
                };

            function ek(e, t, n, a, i) {
                var r = t.length;
                if (2 > r) throw new V("argTypes array size mismatch! Must at least get return value and 'this' types!");
                var s = null !== t[1] && null !== n,
                    o = function(e) {
                        for (var t = 1; t < e.length; ++t)
                            if (null !== e[t] && void 0 === e[t].Ja) return !0;
                        return !1
                    }(t),
                    l = "void" !== t[0].name,
                    d = r - 2,
                    c = Array(d),
                    h = [],
                    u = [];
                return el(e, function(...e) {
                    if (u.length = 0, h.length = s ? 2 : 1, h[0] = i, s) {
                        var n = t[1].toWireType(u, this);
                        h[1] = n
                    }
                    for (var r = 0; r < d; ++r) c[r] = t[r + 2].toWireType(u, e[r]), h.push(c[r]);
                    if (e = a(...h), o) W(u);
                    else
                        for (r = s ? 1 : 2; r < t.length; r++) {
                            var m = 1 === r ? n : c[r - 2];
                            null !== t[r].Ja && t[r].Ja(m)
                        }
                    return l ? t[0].fromWireType(e) : void 0
                })
            }
            var eI, ex = e => {
                    let t = (e = e.trim()).indexOf("(");
                    return -1 !== t ? e.substr(0, t) : e
                },
                eS = [],
                eE = [],
                eP = e => {
                    9 < e && 0 == --eE[e + 1] && (eE[e] = void 0, eS.push(e))
                },
                eO = e => {
                    if (!e) throw new V("Cannot use deleted val. handle = " + e);
                    return eE[e]
                },
                eA = e => {
                    switch (e) {
                        case void 0:
                            return 2;
                        case null:
                            return 4;
                        case !0:
                            return 6;
                        case !1:
                            return 8;
                        default:
                            let t = eS.pop() || eE.length;
                            return eE[t] = e, eE[t + 1] = 1, t
                    }
                },
                eF = {
                    name: "emscripten::val",
                    fromWireType: e => {
                        var t = eO(e);
                        return eP(e), t
                    },
                    toWireType: (e, t) => eA(t),
                    Ia: 8,
                    readValueFromPointer: B,
                    Ja: null
                },
                eT = (e, t) => {
                    var n = J[e];
                    if (void 0 === n) throw e = `${t} has unknown type ${ew(e)}`, new V(e);
                    return n
                },
                eD = e => {
                    if (null === e) return "null";
                    var t = typeof e;
                    return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e
                },
                ez = Object.assign({
                    optional: !0
                }, eF),
                eR = "u" > typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
                ej = (e, t) => {
                    for (var n = e >> 1, a = n + t / 2; !(n >= a) && _[n];) ++n;
                    if (32 < (n <<= 1) - e && eR) return eR.decode(f.subarray(e, n));
                    for (n = "", a = 0; !(a >= t / 2); ++a) {
                        var i = p[e + 2 * a >> 1];
                        if (0 == i) break;
                        n += String.fromCharCode(i)
                    }
                    return n
                },
                e$ = (e, t, n) => {
                    if (n ? ? (n = 0x7fffffff), 2 > n) return 0;
                    n -= 2;
                    var a = t;
                    n = n < 2 * e.length ? n / 2 : e.length;
                    for (var i = 0; i < n; ++i) p[t >> 1] = e.charCodeAt(i), t += 2;
                    return p[t >> 1] = 0, t - a
                },
                eU = e => 2 * e.length,
                eW = (e, t) => {
                    for (var n = 0, a = ""; !(n >= t / 4);) {
                        var i = v[e + 4 * n >> 2];
                        if (0 == i) break;
                        ++n, 65536 <= i ? (i -= 65536, a += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)) : a += String.fromCharCode(i)
                    }
                    return a
                },
                eB = (e, t, n) => {
                    if (n ? ? (n = 0x7fffffff), 4 > n) return 0;
                    var a = t;
                    n = a + n - 4;
                    for (var i = 0; i < e.length; ++i) {
                        var r = e.charCodeAt(i);
                        if (55296 <= r && 57343 >= r && (r = 65536 + ((1023 & r) << 10) | 1023 & e.charCodeAt(++i)), v[t >> 2] = r, (t += 4) + 4 > n) break
                    }
                    return v[t >> 2] = 0, t - a
                },
                eH = e => {
                    for (var t = 0, n = 0; n < e.length; ++n) {
                        var a = e.charCodeAt(n);
                        55296 <= a && 57343 >= a && ++n, t += 4
                    }
                    return t
                },
                eN = 0,
                eG = (e, t, n) => {
                    var a = [];
                    return e = e.toWireType(a, n), a.length && (g[t >> 2] = eA(a)), e
                },
                eV = [],
                eq = Reflect.construct,
                eJ = {},
                eK = e => {
                    if (!(e instanceof F || "unwind" == e)) throw e
                },
                eQ = t => {
                    throw u = t, D || 0 < eN || (e.onExit ? .(t), M = !0), new F(t)
                },
                eZ = {},
                eX = () => {
                    if (!eI) {
                        var e, t = {
                            USER: "web_user",
                            LOGNAME: "web_user",
                            PATH: "/",
                            PWD: "/",
                            HOME: "/home/web_user",
                            LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                            _: l || "./this.program"
                        };
                        for (e in eZ) void 0 === eZ[e] ? delete t[e] : t[e] = eZ[e];
                        var n = [];
                        for (e in t) n.push(`${e}=${t[e]}`);
                        eI = n
                    }
                    return eI
                },
                eY = e => (eY = (() => {
                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return e => crypto.getRandomValues(e);
                    E("initRandomDevice")
                })())(e);
            N = e.InternalError = class extends Error {
                constructor(e) {
                    super(e), this.name = "InternalError"
                }
            };
            for (var e1 = Array(256), e2 = 0; 256 > e2; ++e2) e1[e2] = String.fromCharCode(e2);
            G = e1, V = e.BindingError = class extends Error {
                constructor(e) {
                    super(e), this.name = "BindingError"
                }
            }, Object.assign(eo.prototype, {
                isAliasOf: function(e) {
                    if (!(this instanceof eo && e instanceof eo)) return !1;
                    var t = this.Aa.Da.Ba,
                        n = this.Aa.Ca;
                    e.Aa = e.Aa;
                    var a = e.Aa.Da.Ba;
                    for (e = e.Aa.Ca; t.Ga;) n = t.Qa(n), t = t.Ga;
                    for (; a.Ga;) e = a.Qa(e), a = a.Ga;
                    return t === a && n === e
                },
                clone: function() {
                    if (this.Aa.Ca || Y(this), this.Aa.Pa) return this.Aa.count.value += 1, this;
                    var e = es,
                        t = Object,
                        n = t.create,
                        a = Object.getPrototypeOf(this),
                        i = this.Aa;
                    return e = e(n.call(t, a, {
                        Aa: {
                            value: {
                                count: i.count,
                                Oa: i.Oa,
                                Pa: i.Pa,
                                Ca: i.Ca,
                                Da: i.Da,
                                Fa: i.Fa,
                                Ha: i.Ha
                            }
                        }
                    })), e.Aa.count.value += 1, e.Aa.Oa = !1, e
                },
                delete() {
                    if (this.Aa.Ca || Y(this), this.Aa.Oa && !this.Aa.Pa) throw new V("Object already scheduled for deletion");
                    et(this);
                    var e = this.Aa;
                    --e.count.value, 0 === e.count.value && (e.Fa ? e.Ha.Ka(e.Fa) : e.Da.Ba.Ka(e.Ca)), this.Aa.Pa || (this.Aa.Fa = void 0, this.Aa.Ca = void 0)
                },
                isDeleted: function() {
                    return !this.Aa.Ca
                },
                deleteLater: function() {
                    if (this.Aa.Ca || Y(this), this.Aa.Oa && !this.Aa.Pa) throw new V("Object already scheduled for deletion");
                    return this.Aa.Oa = !0, this
                }
            }), Object.assign(e_.prototype, {
                cb(e) {
                    return this.Ya && (e = this.Ya(e)), e
                },
                Wa(e) {
                    this.Ka ? .(e)
                },
                Ia: 8,
                readValueFromPointer: B,
                fromWireType: function(e) {
                    function t() {
                        return this.Sa ? er(this.Ba.Ma, {
                            Da: this.ib,
                            Ca: n,
                            Ha: this,
                            Fa: e
                        }) : er(this.Ba.Ma, {
                            Da: this,
                            Ca: e
                        })
                    }
                    var n = this.cb(e);
                    if (!n) return this.Wa(e), null;
                    var a = ((e, t) => {
                        if (void 0 === t) throw new V("ptr should not be undefined");
                        for (; e.Ga;) t = e.Qa(t), e = e.Ga;
                        return ei[t]
                    })(this.Ba, n);
                    if (void 0 !== a) return 0 === a.Aa.count.value ? (a.Aa.Ca = n, a.Aa.Fa = e, a.clone()) : (a = a.clone(), this.Wa(e), a);
                    if (!(a = ea[a = this.Ba.bb(n)])) return t.call(this);
                    a = this.Ra ? a.Za : a.pointerType;
                    var i = en(n, this.Ba, a.Ba);
                    return null === i ? t.call(this) : this.Sa ? er(a.Ba.Ma, {
                        Da: a,
                        Ca: i,
                        Ha: this,
                        Fa: e
                    }) : er(a.Ba.Ma, {
                        Da: a,
                        Ca: i
                    })
                }
            }), e3 = Error, (e0 = el("UnboundTypeError", function(e) {
                this.name = "UnboundTypeError", this.message = e, void 0 !== (e = Error(e).stack) && (this.stack = this.toString() + `
` + e.replace(/^Error(:[^\n]*)?\n/, ""))
            })).prototype = Object.create(e3.prototype), e0.prototype.constructor = e0, e0.prototype.toString = function() {
                return void 0 === this.message ? this.name : `${this.name}: ${this.message}`
            }, eg = e.UnboundTypeError = e0, eE.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), e.count_emval_handles = () => eE.length / 2 - 5 - eS.length;
            var e3, e0, e4, e9 = {
                c: (e, t, n, a) => E(`Assertion failed: ${e?R(e):""}, at: ` + [t ? t ? R(t) : "" : "unknown filename", n, a ? a ? R(a) : "" : "unknown function"]),
                j: (e, t, n) => {
                    var a = new j(e);
                    throw g[a.Ca + 16 >> 2] = 0, g[a.Ca + 4 >> 2] = t, g[a.Ca + 8 >> 2] = n, e
                },
                P: () => {},
                M: () => {},
                N: () => {},
                R: function() {},
                O: () => {},
                T: () => E(""),
                w: e => {
                    var t = U[e];
                    delete U[e];
                    var n = t.Ua,
                        a = t.Ka,
                        i = t.Xa;
                    Q([e], i.map(e => e.gb).concat(i.map(e => e.mb)), e => {
                        var r = {};
                        return i.forEach((t, n) => {
                            var a = e[n],
                                s = t.eb,
                                o = t.fb,
                                l = e[n + i.length],
                                d = t.lb,
                                c = t.nb;
                            r[t.ab] = {
                                read: e => a.fromWireType(s(o, e)),
                                write: (e, t) => {
                                    var n = [];
                                    d(c, e, l.toWireType(n, t)), W(n)
                                }
                            }
                        }), [{
                            name: t.name,
                            fromWireType: e => {
                                var t, n = {};
                                for (t in r) n[t] = r[t].read(e);
                                return a(e), n
                            },
                            toWireType: (e, t) => {
                                for (var i in r)
                                    if (!(i in t)) throw TypeError(`Missing field: "${i}"`);
                                var s = n();
                                for (i in r) r[i].write(s, t[i]);
                                return null !== e && e.push(a, s), s
                            },
                            Ia: 8,
                            readValueFromPointer: B,
                            Ja: a
                        }]
                    })
                },
                F: () => {},
                _: (e, t, n, a) => {
                    X(e, {
                        name: t = Z(t),
                        fromWireType: function(e) {
                            return !!e
                        },
                        toWireType: function(e, t) {
                            return t ? n : a
                        },
                        Ia: 8,
                        readValueFromPointer: function(e) {
                            return this.fromWireType(f[e])
                        },
                        Ja: null
                    })
                },
                m: (e, t, n, a, i, r, s, o, l, d, c, h, u) => {
                    c = Z(c), r = ey(i, r), o && (o = ey(s, o)), d && (d = ey(l, d)), u = ey(h, u);
                    var m, f, p = 48 <= (f = (m = (m = c).replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)) && 57 >= f ? `_${m}` : m;
                    ec(p, function() {
                        eM(`Cannot construct ${c} due to unbound types`, [a])
                    }), Q([e, t, n], a ? [a] : [], t => {
                        if (t = t[0], a) var n, i = t.Ba,
                            s = i.Ma;
                        else s = eo.prototype;
                        var l = Object.create(s, {
                            constructor: {
                                value: t = el(c, function(...e) {
                                    if (Object.getPrototypeOf(this) !== l) throw new V("Use 'new' to construct " + c);
                                    if (void 0 === h.La) throw new V(c + " has no accessible constructor");
                                    var t = h.La[e.length];
                                    if (void 0 === t) throw new V(`Tried to invoke ctor of ${c} with invalid number of parameters (${e.length}) - expected (${Object.keys(h.La).toString()}) parameters instead!`);
                                    return t.apply(this, e)
                                })
                            }
                        });
                        t.prototype = l;
                        var h = new eh(c, t, l, u, i, r, o, d);
                        return h.Ga && ((n = h.Ga).Va ? ? (n.Va = []), h.Ga.Va.push(h)), i = new e_(c, h, !0, !1, !1), n = new e_(c + "*", h, !1, !1, !1), s = new e_(c + " const*", h, !1, !0, !1), ea[e] = {
                            pointerType: n,
                            Za: s
                        }, eb(p, t), [i, n, s]
                    })
                },
                r: (e, t, n, a, i, r) => {
                    var s = eL(t, n);
                    i = ey(a, i), Q([], [e], e => {
                        e = e[0];
                        var n = `constructor ${e.name}`;
                        if (void 0 === e.Ba.La && (e.Ba.La = []), void 0 !== e.Ba.La[t - 1]) throw new V(`Cannot register multiple constructors with identical number of parameters (${t-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                        return e.Ba.La[t - 1] = () => {
                            eM(`Cannot construct ${e.name} due to unbound types`, s)
                        }, Q([], s, a => (a.splice(1, 0, null), e.Ba.La[t - 1] = ek(n, a, null, i, r), [])), []
                    })
                },
                d: (e, t, n, a, i, r, s, o) => {
                    var l = eL(n, a);
                    t = ex(t = Z(t)), r = ey(i, r), Q([], [e], e => {
                        function a() {
                            eM(`Cannot call ${i} due to unbound types`, l)
                        }
                        e = e[0];
                        var i = `${e.name}.${t}`;
                        t.startsWith("@@") && (t = Symbol[t.substring(2)]), o && e.Ba.jb.push(t);
                        var d = e.Ba.Ma,
                            c = d[t];
                        return void 0 === c || void 0 === c.Ea && c.className !== e.name && c.Na === n - 2 ? (a.Na = n - 2, a.className = e.name, d[t] = a) : (ed(d, t, i), d[t].Ea[n - 2] = a), Q([], l, a => (a = ek(i, a, e, r, s), void 0 === d[t].Ea ? (a.Na = n - 2, d[t] = a) : d[t].Ea[n - 2] = a, [])), []
                    })
                },
                Y: e => X(e, eF),
                D: (e, t, n, a) => {
                    function i() {}
                    t = Z(t), i.values = {}, X(e, {
                        name: t,
                        constructor: i,
                        fromWireType: function(e) {
                            return this.constructor.values[e]
                        },
                        toWireType: (e, t) => t.value,
                        Ia: 8,
                        readValueFromPointer: ((e, t, n) => {
                            switch (t) {
                                case 1:
                                    return n ? function(e) {
                                        return this.fromWireType(m[e])
                                    } : function(e) {
                                        return this.fromWireType(f[e])
                                    };
                                case 2:
                                    return n ? function(e) {
                                        return this.fromWireType(p[e >> 1])
                                    } : function(e) {
                                        return this.fromWireType(_[e >> 1])
                                    };
                                case 4:
                                    return n ? function(e) {
                                        return this.fromWireType(v[e >> 2])
                                    } : function(e) {
                                        return this.fromWireType(g[e >> 2])
                                    };
                                default:
                                    throw TypeError(`invalid integer width (${t}): ${e}`)
                            }
                        })(t, n, a),
                        Ja: null
                    }), ec(t, i)
                },
                l: (e, t, n) => {
                    var a = eT(e, "enum");
                    t = Z(t), e = a.constructor, a = Object.create(a.constructor.prototype, {
                        value: {
                            value: n
                        },
                        constructor: {
                            value: el(`${a.name}_${t}`, function() {})
                        }
                    }), e.values[n] = a, e[t] = a
                },
                A: (e, t, n) => {
                    X(e, {
                        name: t = Z(t),
                        fromWireType: e => e,
                        toWireType: (e, t) => t,
                        Ia: 8,
                        readValueFromPointer: ((e, t) => {
                            switch (t) {
                                case 4:
                                    return function(e) {
                                        return this.fromWireType(b[e >> 2])
                                    };
                                case 8:
                                    return function(e) {
                                        return this.fromWireType(y[e >> 3])
                                    };
                                default:
                                    throw TypeError(`invalid float width (${t}): ${e}`)
                            }
                        })(t, n),
                        Ja: null
                    })
                },
                v: (e, t, n, a, i, r) => {
                    var s = eL(t, n);
                    e = ex(e = Z(e)), i = ey(a, i), ec(e, function() {
                        eM(`Cannot call ${e} due to unbound types`, s)
                    }, t - 1), Q([], s, n => (eb(e, ek(e, [n[0], null].concat(n.slice(1)), null, i, r), t - 1), []))
                },
                n: (e, t, n, a, i) => {
                    if (t = Z(t), -1 === i && (i = 0xffffffff), i = e => e, 0 === a) {
                        var r = 32 - 8 * n;
                        i = e => e << r >>> r
                    }
                    var s = t.includes("unsigned") ? function(e, t) {
                        return t >>> 0
                    } : function(e, t) {
                        return t
                    };
                    X(e, {
                        name: t,
                        fromWireType: i,
                        toWireType: s,
                        Ia: 8,
                        readValueFromPointer: ((e, t, n) => {
                            switch (t) {
                                case 1:
                                    return n ? e => m[e] : e => f[e];
                                case 2:
                                    return n ? e => p[e >> 1] : e => _[e >> 1];
                                case 4:
                                    return n ? e => v[e >> 2] : e => g[e >> 2];
                                default:
                                    throw TypeError(`invalid integer width (${t}): ${e}`)
                            }
                        })(t, n, 0 !== a),
                        Ja: null
                    })
                },
                g: (e, t, n) => {
                    function a(e) {
                        return new i(m.buffer, g[e + 4 >> 2], g[e >> 2])
                    }
                    var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];
                    X(e, {
                        name: n = Z(n),
                        fromWireType: a,
                        Ia: 8,
                        readValueFromPointer: a
                    }, {
                        hb: !0
                    })
                },
                q: e => {
                    X(e, ez)
                },
                u: (e, t, n, a, i, r, s, o, l, d, c, h) => {
                    n = Z(n), r = ey(i, r), o = ey(s, o), d = ey(l, d), h = ey(c, h), Q([e], [t], e => (e = e[0], [new e_(n, e.Ba, !1, !1, !0, e, a, r, o, d, h)]))
                },
                Z: (e, t) => {
                    X(e, {
                        name: t = Z(t),
                        fromWireType: function(e) {
                            for (var t, n = g[e >> 2], a = e + 4, i = a, r = 0; r <= n; ++r) {
                                var s = a + r;
                                (r == n || 0 == f[s]) && (i = i ? R(i, s - i) : "", void 0 === t ? t = i : (t += "\0", t += i), i = s + 1)
                            }
                            return e5(e), t
                        },
                        toWireType: function(e, t) {
                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                            var n, a = "string" == typeof t;
                            if (!(a || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array)) throw new V("Cannot pass non-string to std::string");
                            if (a)
                                for (var i = n = 0; i < t.length; ++i) {
                                    var r = t.charCodeAt(i);
                                    127 >= r ? n++ : 2047 >= r ? n += 2 : 55296 <= r && 57343 >= r ? (n += 4, ++i) : n += 3
                                } else n = t.length;
                            if (r = (i = e6(4 + n + 1)) + 4, g[i >> 2] = n, a) $(t, r, n + 1);
                            else if (a)
                                for (a = 0; a < n; ++a) {
                                    var s = t.charCodeAt(a);
                                    if (255 < s) throw e5(r), new V("String has UTF-16 code units that do not fit in 8 bits");
                                    f[r + a] = s
                                } else
                                    for (a = 0; a < n; ++a) f[r + a] = t[a];
                            return null !== e && e.push(e5, i), i
                        },
                        Ia: 8,
                        readValueFromPointer: B,
                        Ja(e) {
                            e5(e)
                        }
                    })
                },
                y: (e, t, n) => {
                    if (n = Z(n), 2 === t) var a = ej,
                        i = e$,
                        r = eU,
                        s = e => _[e >> 1];
                    else 4 === t && (a = eW, i = eB, r = eH, s = e => g[e >> 2]);
                    X(e, {
                        name: n,
                        fromWireType: e => {
                            for (var n, i = g[e >> 2], r = e + 4, o = 0; o <= i; ++o) {
                                var l = e + 4 + o * t;
                                (o == i || 0 == s(l)) && (r = a(r, l - r), void 0 === n ? n = r : (n += "\0", n += r), r = l + t)
                            }
                            return e5(e), n
                        },
                        toWireType: (e, a) => {
                            if ("string" != typeof a) throw new V(`Cannot pass non-string to C++ string type ${n}`);
                            var s = r(a),
                                o = e6(4 + s + t);
                            return g[o >> 2] = s / t, i(a, o + 4, s + t), null !== e && e.push(e5, o), o
                        },
                        Ia: 8,
                        readValueFromPointer: B,
                        Ja(e) {
                            e5(e)
                        }
                    })
                },
                x: (e, t, n, a, i, r) => {
                    U[e] = {
                        name: Z(t),
                        Ua: ey(n, a),
                        Ka: ey(i, r),
                        Xa: []
                    }
                },
                i: (e, t, n, a, i, r, s, o, l, d) => {
                    U[e].Xa.push({
                        ab: Z(t),
                        gb: n,
                        eb: ey(a, i),
                        fb: r,
                        mb: s,
                        lb: ey(o, l),
                        nb: d
                    })
                },
                $: (e, t) => {
                    X(e, {
                        pb: !0,
                        name: t = Z(t),
                        Ia: 0,
                        fromWireType: () => {},
                        toWireType: () => {}
                    })
                },
                K: () => {
                    D = !1, eN = 0
                },
                I: () => {
                    throw 1 / 0
                },
                C: (e, t, n) => (e = eO(e), eG(t = eT(t, "emval::as"), n, e)),
                p: (e, t, n, a) => (e = eV[e])(null, t = eO(t), n, a),
                W: eP,
                E: (e, t) => (e = eO(e)) == (t = eO(t)),
                o: (e, t, n) => {
                    var a, i, r = ((e, t) => {
                            for (var n = Array(e), a = 0; a < e; ++a) n[a] = eT(g[t + 4 * a >> 2], "parameter " + a);
                            return n
                        })(e, t),
                        s = r.shift(),
                        o = Array(--e);
                    return a = el(t = `methodCaller<(${r.map(e=>e.name).join(", ")}) => ${s.name}>`, (t, a, i, l) => {
                        for (var d = 0, c = 0; c < e; ++c) o[c] = r[c].readValueFromPointer(l + d), d += r[c].Ia;
                        return eG(s, i, t = 1 === n ? eq(a, o) : a.apply(t, o))
                    }), i = eV.length, eV.push(a), i
                },
                z: e => {
                    9 < e && (eE[e + 1] += 1)
                },
                ca: e => {
                    W(eO(e)), eP(e)
                },
                t: (e, t) => eA(e = (e = eT(e, "_emval_take_value")).readValueFromPointer(t)),
                G: (e, t) => {
                    if (eJ[e] && (clearTimeout(eJ[e].id), delete eJ[e]), !t) return 0;
                    var n = setTimeout(() => {
                        delete eJ[e], (e => {
                            if (!M) try {
                                if (e(), !(D || 0 < eN)) try {
                                    u = e = u, eQ(e)
                                } catch (e) {
                                    eK(e)
                                }
                            } catch (e) {
                                eK(e)
                            }
                        })(() => e8(e, performance.now()))
                    }, t);
                    return eJ[e] = {
                        id: n,
                        qb: t
                    }, 0
                },
                H: (e, t, n, a) => {
                    var i = new Date().getFullYear(),
                        r = new Date(i, 0, 1).getTimezoneOffset();
                    i = new Date(i, 6, 1).getTimezoneOffset(), g[e >> 2] = 60 * Math.max(r, i), v[t >> 2] = +(r != i), e = (t = e => {
                        var t = Math.abs(e);
                        return `UTC${0<=e?"-":"+"}${String(Math.floor(t/60)).padStart(2,"0")}${String(t%60).padStart(2,"0")}`
                    })(r), t = t(i), i < r ? ($(e, n, 17), $(t, a, 17)) : ($(e, a, 17), $(t, n, 17))
                },
                ba: () => performance.now(),
                J: e => {
                    var t = f.length;
                    if (0x80000000 < (e >>>= 0)) return !1;
                    for (var n = 1; 4 >= n; n *= 2) {
                        var a = t * (1 + .2 / n);
                        a = Math.min(a, e + 0x6000000);
                        e: {
                            a = (Math.min(0x80000000, 65536 * Math.ceil(Math.max(e, a) / 65536)) - h.buffer.byteLength + 65535) / 65536 | 0;
                            try {
                                h.grow(a), C();
                                var i = 1;
                                break e
                            } catch {}
                            i = void 0
                        }
                        if (i) return !0
                    }
                    return !1
                },
                V: (e, t) => {
                    var n = 0;
                    return eX().forEach((a, i) => {
                        var r = t + n;
                        for (i = g[e + 4 * i >> 2] = r, r = 0; r < a.length; ++r) m[i++] = a.charCodeAt(r);
                        m[i] = 0, n += a.length + 1
                    }), 0
                },
                X: (e, t) => {
                    var n = eX();
                    g[e >> 2] = n.length;
                    var a = 0;
                    return n.forEach(e => a += e.length + 1), g[t >> 2] = a, 0
                },
                S: () => 52,
                Q: () => 52,
                k: function(e, t) {
                    var n = tn();
                    try {
                        return ev.get(e)(t)
                    } catch (e) {
                        if (tt(n), e !== e + 0) throw e;
                        te(1, 0)
                    }
                },
                f: function(e, t, n) {
                    var a = tn();
                    try {
                        return ev.get(e)(t, n)
                    } catch (e) {
                        if (tt(a), e !== e + 0) throw e;
                        te(1, 0)
                    }
                },
                e: function(e, t, n, a) {
                    var i = tn();
                    try {
                        return ev.get(e)(t, n, a)
                    } catch (e) {
                        if (tt(i), e !== e + 0) throw e;
                        te(1, 0)
                    }
                },
                B: function(e, t, n, a, i, r) {
                    var s = tn();
                    try {
                        return ev.get(e)(t, n, a, i, r)
                    } catch (e) {
                        if (tt(s), e !== e + 0) throw e;
                        te(1, 0)
                    }
                },
                aa: function(e) {
                    var t = tn();
                    try {
                        ev.get(e)()
                    } catch (e) {
                        if (tt(t), e !== e + 0) throw e;
                        te(1, 0)
                    }
                },
                a: function(e, t) {
                    var n = tn();
                    try {
                        ev.get(e)(t)
                    } catch (e) {
                        if (tt(n), e !== e + 0) throw e;
                        te(1, 0)
                    }
                },
                b: function(e, t, n) {
                    var a = tn();
                    try {
                        ev.get(e)(t, n)
                    } catch (e) {
                        if (tt(a), e !== e + 0) throw e;
                        te(1, 0)
                    }
                },
                h: function(e, t, n, a) {
                    var i = tn();
                    try {
                        ev.get(e)(t, n, a)
                    } catch (e) {
                        if (tt(i), e !== e + 0) throw e;
                        te(1, 0)
                    }
                },
                s: function(e, t, n, a, i) {
                    var r = tn();
                    try {
                        ev.get(e)(t, n, a, i)
                    } catch (e) {
                        if (tt(r), e !== e + 0) throw e;
                        te(1, 0)
                    }
                },
                U: eQ,
                L: (e, t) => (eY(f.subarray(e, e + t)), 0)
            };
            !async function() {
                function t(t) {
                    return h = (e4 = t.exports).da, C(), ev = e4.ga, k.unshift(e4.ea), x--, e.monitorRunDependencies ? .(x), 0 == x && S && (t = S, S = null, t()), e4
                }
                x++, e.monitorRunDependencies ? .(x);
                var n = {
                    a: e9
                };
                if (e.instantiateWasm) try {
                    return e.instantiateWasm(n, t)
                } catch (e) {
                    c(`Module.instantiateWasm callback failed with error: ${e}`), i(e)
                }
                H ? ? (H = "DotLottiePlayer.wasm".startsWith("data:application/octet-stream;base64,") ? "DotLottiePlayer.wasm" : e.locateFile ? e.locateFile("DotLottiePlayer.wasm", d) : d + "DotLottiePlayer.wasm");
                try {
                    var a = await A(n);
                    t(a.instance)
                } catch (e) {
                    i(e)
                }
            }();
            var e6 = e => (e6 = e4.fa)(e),
                e5 = e => (e5 = e4.ha)(e),
                e7 = e => (e7 = e4.ia)(e),
                e8 = (e, t) => (e8 = e4.ja)(e, t),
                te = (e, t) => (te = e4.ka)(e, t),
                tt = e => (tt = e4.la)(e),
                tn = () => (tn = e4.ma)();

            function ta() {
                function a() {
                    if (!t && (t = !0, e.calledRun = !0, !M)) {
                        if (T(k), n(e), e.onRuntimeInitialized ? .(), e.postRun)
                            for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
                                var a = e.postRun.shift();
                                I.unshift(a)
                            }
                        T(I)
                    }
                }
                if (!(0 < x)) {
                    if (e.preRun)
                        for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) ! function() {
                            var t = e.preRun.shift();
                            L.unshift(t)
                        }();
                    T(L), 0 < x || (e.setStatus ? (e.setStatus("Running..."), setTimeout(() => {
                        setTimeout(() => e.setStatus(""), 1), a()
                    }, 1)) : a())
                }
            }
            if (e.dynCall_jiii = (t, n, a, i) => (e.dynCall_jiii = e4.na)(t, n, a, i), e.dynCall_jii = (t, n, a) => (e.dynCall_jii = e4.oa)(t, n, a), e.dynCall_vjii = (t, n, a, i, r) => (e.dynCall_vjii = e4.pa)(t, n, a, i, r), e.dynCall_vjfii = (t, n, a, i, r, s) => (e.dynCall_vjfii = e4.qa)(t, n, a, i, r, s), e.dynCall_vjiii = (t, n, a, i, r, s) => (e.dynCall_vjiii = e4.ra)(t, n, a, i, r, s), e.dynCall_vj = (t, n, a) => (e.dynCall_vj = e4.sa)(t, n, a), e.dynCall_vjiiiii = (t, n, a, i, r, s, o, l) => (e.dynCall_vjiiiii = e4.ta)(t, n, a, i, r, s, o, l), e.dynCall_vjiffii = (t, n, a, i, r, s, o, l) => (e.dynCall_vjiffii = e4.ua)(t, n, a, i, r, s, o, l), e.dynCall_vjiiii = (t, n, a, i, r, s, o) => (e.dynCall_vjiiii = e4.va)(t, n, a, i, r, s, o), e.dynCall_viijii = (t, n, a, i, r, s, o) => (e.dynCall_viijii = e4.wa)(t, n, a, i, r, s, o), e.dynCall_iiiiij = (t, n, a, i, r, s, o) => (e.dynCall_iiiiij = e4.xa)(t, n, a, i, r, s, o), e.dynCall_iiiiijj = (t, n, a, i, r, s, o, l, d) => (e.dynCall_iiiiijj = e4.ya)(t, n, a, i, r, s, o, l, d), e.dynCall_iiiiiijj = (t, n, a, i, r, s, o, l, d, c) => (e.dynCall_iiiiiijj = e4.za)(t, n, a, i, r, s, o, l, d, c), S = function e() {
                    t || ta(), t || (S = e)
                }, e.preInit)
                for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) e.preInit.pop()();
            return ta(), s
        }),
        eF = class {
            constructor() {
                throw Error("RendererLoader is a static class and cannot be instantiated.")
            }
            static async _tryLoad(e) {
                return await eA({
                    locateFile: () => e
                })
            }
            static async _loadWithBackup() {
                return this._ModulePromise || (this._ModulePromise = this._tryLoad(this._wasmURL).catch(async e => {
                    let t = `https://unpkg.com/${eO}@${eP}/dist/dotlottie-player.wasm`;
                    console.warn(`Primary WASM load failed from ${this._wasmURL}. Error: ${e.message}`), console.warn(`Attempting to load WASM from backup URL: ${t}`);
                    try {
                        return await this._tryLoad(t)
                    } catch (t) {
                        throw console.error(`Primary WASM URL failed: ${e.message}`), console.error(`Backup WASM URL failed: ${t.message}`), Error("WASM loading failed from all sources.")
                    }
                })), this._ModulePromise
            }
            static async load() {
                return this._loadWithBackup()
            }
            static setWasmUrl(e) {
                e !== this._wasmURL && (this._wasmURL = e, this._ModulePromise = null)
            }
        };
    eC(eF, "_ModulePromise", null), eC(eF, "_wasmURL", `https://cdn.jsdelivr.net/npm/${eO}@${eP}/dist/dotlottie-player.wasm`);
    var eT = class {
            constructor() {
                eC(this, "_eventListeners", new Map)
            }
            addEventListener(e, t) {
                let n = this._eventListeners.get(e);
                n || (n = new Set, this._eventListeners.set(e, n)), n.add(t)
            }
            removeEventListener(e, t) {
                let n = this._eventListeners.get(e);
                n && (t ? (n.delete(t), 0 === n.size && this._eventListeners.delete(e)) : this._eventListeners.delete(e))
            }
            dispatch(e) {
                this._eventListeners.get(e.type) ? .forEach(t => t(e))
            }
            removeAllEventListeners() {
                this._eventListeners.clear()
            }
        },
        eD = class {
            static _initializeObserver() {
                if (this._observer) return;
                let e = e => {
                    e.forEach(e => {
                        let t = this._observedCanvases.get(e.target);
                        t && (e.isIntersecting ? t.unfreeze() : t.freeze())
                    })
                };
                this._observer = new IntersectionObserver(e, {
                    threshold: 0
                })
            }
            static observe(e, t) {
                this._initializeObserver(), this._observedCanvases.has(e) || (this._observedCanvases.set(e, t), this._observer ? .observe(e))
            }
            static unobserve(e) {
                this._observer ? .unobserve(e), this._observedCanvases.delete(e), 0 === this._observedCanvases.size && (this._observer ? .disconnect(), this._observer = null)
            }
        };
    eC(eD, "_observer", null), eC(eD, "_observedCanvases", new Map);
    var ez = class {
        static _initializeObserver() {
            if (this._observer) return;
            let e = e => {
                e.forEach(e => {
                    let t = this._observedCanvases.get(e.target);
                    if (!t) return;
                    let [n, a] = t;
                    clearTimeout(a);
                    let i = setTimeout(() => {
                        n.resize()
                    }, 100);
                    this._observedCanvases.set(e.target, [n, i])
                })
            };
            this._observer = new ResizeObserver(e)
        }
        static observe(e, t) {
            this._initializeObserver(), this._observedCanvases.has(e) || (this._observedCanvases.set(e, [t, 0]), this._observer ? .observe(e))
        }
        static unobserve(e) {
            let t = this._observedCanvases.get(e);
            if (t) {
                let e = t[1];
                e && clearTimeout(e)
            }
            this._observer ? .unobserve(e), this._observedCanvases.delete(e), !this._observedCanvases.size && this._observer && (this._observer.disconnect(), this._observer = null)
        }
    };

    function eR(e) {
        if (e.byteLength < 4) return !1;
        let t = new Uint8Array(e.slice(0, eS.byteLength));
        for (let e = 0; e < eS.length; e += 1)
            if (eS[e] !== t[e]) return !1;
        return !0
    }

    function ej(e) {
        return eE.every(t => Object.prototype.hasOwnProperty.call(e, t))
    }

    function e$(e) {
        if ("string" != typeof e) return ej(e);
        try {
            return ej(JSON.parse(e))
        } catch {
            return !1
        }
    }

    function eU() {
        return 1 + ((ex ? window.devicePixelRatio : 1) - 1) * .75
    }

    function eW(e) {
        let t = e.getBoundingClientRect(),
            n = window.innerHeight || document.documentElement.clientHeight,
            a = window.innerWidth || document.documentElement.clientWidth;
        return !(t.bottom < 0 || t.top > n || t.right < 0 || t.left > a)
    }

    function eB(e) {
        let t = e.target;
        if (t instanceof HTMLCanvasElement) {
            let n = t.getBoundingClientRect();
            if (0 === n.width || 0 === n.height || 0 === t.width || 0 === t.height) return null;
            let a = t.width / n.width,
                i = t.height / n.height,
                r = (e.clientX - n.left) * a,
                s = (e.clientY - n.top) * i;
            return !Number.isFinite(r) || !Number.isFinite(s) || Number.isNaN(r) || Number.isNaN(s) ? null : {
                x: r,
                y: s
            }
        }
        return null
    }

    function eH(e) {
        let t = e.replace("OpenUrl: ", ""),
            n = t.indexOf(" | Target: "),
            a, i; - 1 === n ? (a = t, i = "_blank") : (a = t.substring(0, n), i = t.substring(n + 11)), window.open(a, i)
    }
    eC(ez, "_observer", null), eC(ez, "_observedCanvases", new Map);
    var eN = (e, t) => "reverse" === e ? t.Mode.Reverse : "bounce" === e ? t.Mode.Bounce : "reverse-bounce" === e ? t.Mode.ReverseBounce : t.Mode.Forward,
        eG = (e, t) => {
            let n = new t.VectorFloat;
            return 2 !== e.length || (n.push_back(e[0]), n.push_back(e[1])), n
        },
        eV = (e, t) => {
            var n;
            let a, i;
            return e ? {
                align: (n = e.align ? ? [.5, .5], (a = new t.VectorFloat).push_back(n[0]), a.push_back(n[1]), a),
                fit: (i = e.fit ? ? "contain", "contain" === i ? t.Fit.Contain : "cover" === i ? t.Fit.Cover : "fill" === i ? t.Fit.Fill : "fit-height" === i ? t.Fit.FitHeight : "fit-width" === i ? t.Fit.FitWidth : t.Fit.None)
            } : t.createDefaultLayout()
        },
        eq = class e {
            constructor(t) {
                eC(this, "_canvas"), eC(this, "_context", null), eC(this, "_eventManager"), eC(this, "_animationFrameId", null), eC(this, "_frameManager"), eC(this, "_dotLottieCore", null), eC(this, "_stateMachineId", ""), eC(this, "_stateMachineConfig", null), eC(this, "_isStateMachineRunning", !1), eC(this, "_stateMachineObserverHandle", null), eC(this, "_stateMachineInternalMessageObserver", null), eC(this, "_dotLottieObserverHandle", null), eC(this, "_renderConfig", {}), eC(this, "_isFrozen", !1), eC(this, "_backgroundColor", null), eC(this, "_boundOnClick", null), eC(this, "_boundOnPointerUp", null), eC(this, "_boundOnPointerDown", null), eC(this, "_boundOnPointerMove", null), eC(this, "_boundOnPointerEnter", null), eC(this, "_boundOnPointerLeave", null), this._canvas = t.canvas, this._eventManager = new eT, this._frameManager = new eI, this._renderConfig = { ...t.renderConfig,
                    devicePixelRatio: t.renderConfig ? .devicePixelRatio || eU(),
                    freezeOnOffscreen: t.renderConfig ? .freezeOnOffscreen ? ? !0
                }, eF.load().then(n => {
                    e._wasmModule = n;
                    let a = new n.CallbackObserver;
                    a.setOnLoad(() => {
                        setTimeout(() => {
                            this._eventManager.dispatch({
                                type: "load"
                            })
                        }, 0)
                    }), a.setOnLoadError(() => {
                        setTimeout(() => {
                            this._eventManager.dispatch({
                                type: "loadError",
                                error: Error("failed to load")
                            })
                        }, 0)
                    }), a.setOnPlay(() => {
                        setTimeout(() => {
                            this._eventManager.dispatch({
                                type: "play"
                            })
                        }, 0)
                    }), a.setOnPause(() => {
                        setTimeout(() => {
                            this._eventManager.dispatch({
                                type: "pause"
                            })
                        }, 0)
                    }), a.setOnStop(() => {
                        setTimeout(() => {
                            this._eventManager.dispatch({
                                type: "stop"
                            })
                        }, 0)
                    }), a.setOnLoop(e => {
                        setTimeout(() => {
                            this._eventManager.dispatch({
                                type: "loop",
                                loopCount: e
                            })
                        }, 0)
                    }), a.setOnComplete(() => {
                        setTimeout(() => {
                            this._eventManager.dispatch({
                                type: "complete"
                            })
                        }, 0)
                    }), a.setOnFrame(e => {
                        setTimeout(() => {
                            this._eventManager.dispatch({
                                type: "frame",
                                currentFrame: e
                            })
                        }, 0)
                    }), a.setOnRender(e => {
                        setTimeout(() => {
                            this._eventManager.dispatch({
                                type: "render",
                                currentFrame: e
                            })
                        }, 0)
                    }), this._dotLottieCore = new n.DotLottiePlayer({
                        animationId: t.animationId ? ? "",
                        themeId: t.themeId ? ? "",
                        stateMachineId: "",
                        autoplay: t.autoplay ? ? !1,
                        backgroundColor: 0,
                        loopAnimation: t.loop ? ? !1,
                        loopCount: t.loopCount ? ? 0,
                        mode: eN(t.mode ? ? "forward", n),
                        segment: eG(t.segment ? ? [], n),
                        speed: t.speed ? ? 1,
                        useFrameInterpolation: t.useFrameInterpolation ? ? !0,
                        marker: t.marker ? ? "",
                        layout: eV(t.layout, n)
                    }), this._stateMachineId = t.stateMachineId ? ? "", this._stateMachineConfig = t.stateMachineConfig ? ? null, this._dotLottieObserverHandle = this._dotLottieCore.subscribe(a), this._eventManager.dispatch({
                        type: "ready"
                    }), t.data ? this._loadFromData(t.data) : t.src && this._loadFromSrc(t.src), t.backgroundColor && this.setBackgroundColor(t.backgroundColor)
                }).catch(e => {
                    this._eventManager.dispatch({
                        type: "loadError",
                        error: Error(`Failed to load wasm module: ${e}`)
                    })
                })
            }
            _dispatchError(e) {
                console.error(e), this._eventManager.dispatch({
                    type: "loadError",
                    error: Error(e)
                })
            }
            async _fetchData(e) {
                let t = await fetch(e);
                if (!t.ok) throw Error(`Failed to fetch animation data from URL: ${e}. ${t.status}: ${t.statusText}`);
                let n = await t.arrayBuffer();
                return eR(n) ? n : new TextDecoder().decode(n)
            }
            _loadFromData(e) {
                if (null === this._dotLottieCore) return;
                let t = this._canvas.width,
                    n = this._canvas.height,
                    a = !1;
                if ("string" == typeof e) {
                    if (!e$(e)) return void this._dispatchError("Invalid Lottie JSON string: The provided string does not conform to the Lottie JSON format.");
                    a = this._dotLottieCore.loadAnimationData(e, t, n)
                } else if (e instanceof ArrayBuffer) {
                    if (!eR(e)) return void this._dispatchError("Invalid dotLottie ArrayBuffer: The provided ArrayBuffer does not conform to the dotLottie format.");
                    a = this._dotLottieCore.loadDotLottieData(e, t, n)
                } else {
                    if ("object" != typeof e) return void this._dispatchError(`Unsupported data type for animation data. Expected: 
          - string (Lottie JSON),
          - ArrayBuffer (dotLottie),
          - object (Lottie JSON). 
          Received: ${typeof e}`);
                    if (!e$(e)) return void this._dispatchError("Invalid Lottie JSON object: The provided object does not conform to the Lottie JSON format.");
                    a = this._dotLottieCore.loadAnimationData(JSON.stringify(e), t, n)
                }
                a && (void 0 !== this._renderConfig.quality && this._dotLottieCore.setQuality(this._renderConfig.quality), ex && this.resize(), setTimeout(() => {
                    this._eventManager.dispatch({
                        type: "frame",
                        currentFrame: this.currentFrame
                    })
                }, 0), this._dotLottieCore.render(), this._draw(), this._stateMachineId ? this.stateMachineLoad(this._stateMachineId) && this.stateMachineStart() && this._startAnimationLoop() : this._dotLottieCore.isPlaying() && this._startAnimationLoop(), ex && this._canvas instanceof HTMLCanvasElement && (this._renderConfig.freezeOnOffscreen && (eD.observe(this._canvas, this), eW(this._canvas) || this.freeze()), this._renderConfig.autoResize && ez.observe(this._canvas, this)))
            }
            _loadFromSrc(e) {
                this._fetchData(e).then(e => this._loadFromData(e)).catch(t => this._dispatchError(`Failed to load animation data from URL: ${e}. ${t}`))
            }
            get buffer() {
                return this._dotLottieCore ? this._dotLottieCore.buffer() : null
            }
            get activeAnimationId() {
                return this._dotLottieCore ? .activeAnimationId()
            }
            get activeThemeId() {
                return this._dotLottieCore ? .activeThemeId()
            }
            get layout() {
                let t = this._dotLottieCore ? .config().layout;
                if (t) return {
                    align: [t.align.get(0), t.align.get(1)],
                    fit: (() => {
                        switch (t.fit) {
                            case e._wasmModule ? .Fit.Contain:
                                return "contain";
                            case e._wasmModule ? .Fit.Cover:
                                return "cover";
                            case e._wasmModule ? .Fit.Fill:
                                return "fill";
                            case e._wasmModule ? .Fit.FitHeight:
                                return "fit-height";
                            case e._wasmModule ? .Fit.FitWidth:
                                return "fit-width";
                            case e._wasmModule ? .Fit.None:
                                return "none";
                            default:
                                return "contain"
                        }
                    })()
                }
            }
            get marker() {
                return this._dotLottieCore ? .config().marker
            }
            get manifest() {
                try {
                    let e = this._dotLottieCore ? .manifestString();
                    if (null === this._dotLottieCore || !e) return null;
                    let t = JSON.parse(e);
                    return 0 === Object.keys(t).length ? null : t
                } catch {
                    return null
                }
            }
            get renderConfig() {
                return this._renderConfig
            }
            get segment() {
                let e = this._dotLottieCore ? .config().segment;
                if (e && 2 === e.size()) return [e.get(0), e.get(1)]
            }
            get loop() {
                return this._dotLottieCore ? .config().loopAnimation ? ? !1
            }
            get mode() {
                let t = this._dotLottieCore ? .config().mode;
                return t === e._wasmModule ? .Mode.Reverse ? "reverse" : t === e._wasmModule ? .Mode.Bounce ? "bounce" : t === e._wasmModule ? .Mode.ReverseBounce ? "reverse-bounce" : "forward"
            }
            get isFrozen() {
                return this._isFrozen
            }
            get isStateMachineRunning() {
                return this._isStateMachineRunning
            }
            get backgroundColor() {
                return this._backgroundColor ? ? ""
            }
            get autoplay() {
                return this._dotLottieCore ? .config().autoplay ? ? !1
            }
            get useFrameInterpolation() {
                return this._dotLottieCore ? .config().useFrameInterpolation ? ? !1
            }
            get speed() {
                return this._dotLottieCore ? .config().speed ? ? 0
            }
            get isReady() {
                return null !== this._dotLottieCore
            }
            get isLoaded() {
                return this._dotLottieCore ? .isLoaded() ? ? !1
            }
            get isPlaying() {
                return this._dotLottieCore ? .isPlaying() ? ? !1
            }
            get isPaused() {
                return this._dotLottieCore ? .isPaused() ? ? !1
            }
            get isStopped() {
                return this._dotLottieCore ? .isStopped() ? ? !1
            }
            get currentFrame() {
                return this._dotLottieCore ? Math.round(100 * this._dotLottieCore.currentFrame()) / 100 : 0
            }
            get loopCount() {
                return this._dotLottieCore ? .loopCount() ? ? 0
            }
            get totalFrames() {
                return this._dotLottieCore ? .totalFrames() ? ? 0
            }
            get duration() {
                return this._dotLottieCore ? .duration() ? ? 0
            }
            get segmentDuration() {
                return this._dotLottieCore ? .segmentDuration() ? ? 0
            }
            get canvas() {
                return this._canvas
            }
            load(t) {
                null === this._dotLottieCore || null === e._wasmModule || (this._stopAnimationLoop(), ex && this._canvas instanceof HTMLCanvasElement && (eD.unobserve(this._canvas), ez.unobserve(this._canvas), this._cleanupStateMachineListeners()), this._isFrozen = !1, this._dotLottieCore.setConfig({
                    animationId: t.animationId ? ? "",
                    themeId: t.themeId ? ? "",
                    stateMachineId: "",
                    autoplay: t.autoplay ? ? !1,
                    backgroundColor: 0,
                    loopAnimation: t.loop ? ? !1,
                    loopCount: t.loopCount ? ? 0,
                    mode: eN(t.mode ? ? "forward", e._wasmModule),
                    segment: eG(t.segment ? ? [], e._wasmModule),
                    speed: t.speed ? ? 1,
                    useFrameInterpolation: t.useFrameInterpolation ? ? !0,
                    marker: t.marker ? ? "",
                    layout: eV(t.layout, e._wasmModule)
                }), t.data ? this._loadFromData(t.data) : t.src && this._loadFromSrc(t.src), this.setBackgroundColor(t.backgroundColor ? ? ""))
            }
            _draw() {
                if (null !== this._dotLottieCore && (!this._context && "getContext" in this._canvas && "function" == typeof this._canvas.getContext && (this._context = this._canvas.getContext("2d")), this._context)) {
                    let e = this._dotLottieCore.buffer(),
                        t = this._canvas.width * this._canvas.height * 4;
                    if (e.byteLength !== t) return void console.warn(`Buffer size mismatch: got ${e.byteLength}, expected ${t}`);
                    let n = null,
                        a = new Uint8ClampedArray(e, 0, e.byteLength);
                    typeof ImageData > "u" ? (n = this._context.createImageData(this._canvas.width, this._canvas.height)).data.set(a) : n = new ImageData(a, this._canvas.width, this._canvas.height), this._context.putImageData(n, 0, 0)
                }
            }
            _stopAnimationLoop() {
                null !== this._animationFrameId && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null)
            }
            _startAnimationLoop() {
                null === this._animationFrameId && this._dotLottieCore && !this._isFrozen && (this._dotLottieCore.isPlaying() || this._isStateMachineRunning) && (this._animationFrameId = this._frameManager.requestAnimationFrame(this._animationLoop.bind(this)))
            }
            _animationLoop() {
                if (null === this._dotLottieCore || !this._dotLottieCore.isPlaying() && !this._isStateMachineRunning) return void this._stopAnimationLoop();
                try {
                    this._dotLottieCore.tick() && this._draw(), this._animationFrameId = this._frameManager.requestAnimationFrame(this._animationLoop.bind(this))
                } catch (e) {
                    console.error("Error in animation frame:", e), this._eventManager.dispatch({
                        type: "renderError",
                        error: e
                    }), e instanceof WebAssembly.RuntimeError && this.destroy()
                }
            }
            play() {
                null === this._dotLottieCore || !this.isLoaded || (this._stopAnimationLoop(), (this._dotLottieCore.play() || this._dotLottieCore.isPlaying()) && (this._isFrozen = !1, this._startAnimationLoop()), ex && this._canvas instanceof HTMLCanvasElement && this._renderConfig.freezeOnOffscreen && !eW(this._canvas) && this.freeze())
            }
            pause() {
                null !== this._dotLottieCore && (this._dotLottieCore.pause(), this._stopAnimationLoop())
            }
            stop() {
                if (null === this._dotLottieCore) return;
                let e = this._dotLottieCore.stop();
                this._stopAnimationLoop(), e && (this._eventManager.dispatch({
                    type: "frame",
                    currentFrame: this.currentFrame
                }), this._dotLottieCore.render(), this._draw())
            }
            setFrame(e) {
                null !== this._dotLottieCore && this._dotLottieCore.seek(e) && this._dotLottieCore.render() && this._draw()
            }
            setSpeed(e) {
                null !== this._dotLottieCore && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(),
                    speed: e
                })
            }
            setBackgroundColor(e) {
                null !== this._dotLottieCore && (ex && this._canvas instanceof HTMLCanvasElement ? this._canvas.style.backgroundColor = e : this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(),
                    backgroundColor: function(e) {
                        if (!/^#([\da-f]{6}|[\da-f]{8})$/iu.test(e)) return 0;
                        let t = e.replace("#", "");
                        return parseInt(t = 6 === t.length ? `${t}ff` : t, 16)
                    }(e)
                }), this._backgroundColor = e)
            }
            setLoop(e) {
                null !== this._dotLottieCore && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(),
                    loopAnimation: e
                })
            }
            setLoopCount(e) {
                null !== this._dotLottieCore && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(),
                    loopCount: e
                })
            }
            setUseFrameInterpolation(e) {
                null !== this._dotLottieCore && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(),
                    useFrameInterpolation: e
                })
            }
            addEventListener(e, t) {
                this._eventManager.addEventListener(e, t)
            }
            removeEventListener(e, t) {
                this._eventManager.removeEventListener(e, t)
            }
            destroy() {
                this._stopAnimationLoop(), this._isStateMachineRunning = !1, ex && this._canvas instanceof HTMLCanvasElement && (eD.unobserve(this._canvas), ez.unobserve(this._canvas)), this._stateMachineObserverHandle && (this._dotLottieCore ? .stateMachineUnsubscribe(this._stateMachineObserverHandle), this._stateMachineObserverHandle.delete(), this._stateMachineObserverHandle = null), this._stateMachineInternalMessageObserver && (this._dotLottieCore ? .stateMachineInternalUnsubscribe(this._stateMachineInternalMessageObserver), this._stateMachineInternalMessageObserver.delete(), this._stateMachineInternalMessageObserver = null), this._dotLottieObserverHandle && (this._dotLottieCore ? .unsubscribe(this._dotLottieObserverHandle), this._dotLottieObserverHandle.delete(), this._dotLottieObserverHandle = null), this._dotLottieCore ? .delete(), this._dotLottieCore = null, this._context = null, this._eventManager.dispatch({
                    type: "destroy"
                }), this._eventManager.removeAllEventListeners(), this._cleanupStateMachineListeners()
            }
            freeze() {
                null !== this._animationFrameId && (this._stopAnimationLoop(), this._isFrozen = !0, this._eventManager.dispatch({
                    type: "freeze"
                }))
            }
            unfreeze() {
                null === this._animationFrameId && (this._isFrozen = !1, this._eventManager.dispatch({
                    type: "unfreeze"
                }), this._startAnimationLoop())
            }
            resize() {
                if (!(!this._dotLottieCore || !this.isLoaded)) {
                    if (ex && this._canvas instanceof HTMLCanvasElement) {
                        let e = this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1,
                            {
                                height: t,
                                width: n
                            } = this._canvas.getBoundingClientRect();
                        0 !== t && 0 !== n && (this._canvas.width = n * e, this._canvas.height = t * e)
                    }
                    this._dotLottieCore.resize(this._canvas.width, this._canvas.height) && this._draw()
                }
            }
            setTransform(t) {
                if (!this._dotLottieCore || !e._wasmModule) return !1;
                let n = new e._wasmModule.VectorFloat;
                for (let e of t) n.push_back(e);
                let a = this._dotLottieCore.setTransform(n);
                return a && this._dotLottieCore.render() && this._draw(), a
            }
            getTransform() {
                if (!this._dotLottieCore) return;
                let e = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    t = this._dotLottieCore.getTransform();
                for (let n = 0; n < t.size(); n += 1) e[n] = t.get(n);
                return e
            }
            setSegment(t, n) {
                null === this._dotLottieCore || null === e._wasmModule || this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(),
                    segment: eG([t, n], e._wasmModule)
                })
            }
            setMode(t) {
                null === this._dotLottieCore || null === e._wasmModule || this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(),
                    mode: eN(t, e._wasmModule)
                })
            }
            setRenderConfig(e) {
                let {
                    devicePixelRatio: t,
                    freezeOnOffscreen: n,
                    quality: a,
                    ...i
                } = e;
                this._renderConfig = { ...this._renderConfig,
                    ...i,
                    devicePixelRatio: t || eU(),
                    freezeOnOffscreen: n ? ? !0,
                    ...void 0 !== a && {
                        quality: a
                    }
                }, void 0 !== a && this._dotLottieCore && this._dotLottieCore.setQuality(a), ex && this._canvas instanceof HTMLCanvasElement && (this._renderConfig.autoResize ? ez.observe(this._canvas, this) : ez.unobserve(this._canvas), this._renderConfig.freezeOnOffscreen ? (eD.observe(this._canvas, this), eW(this._canvas) || this.freeze()) : (eD.unobserve(this._canvas), this._isFrozen && this.unfreeze()))
            }
            loadAnimation(e) {
                null === this._dotLottieCore || this._dotLottieCore.activeAnimationId() === e || this._dotLottieCore.loadAnimation(e, this._canvas.width, this._canvas.height) && (void 0 !== this._renderConfig.quality && this._dotLottieCore.setQuality(this._renderConfig.quality), this.resize())
            }
            setMarker(e) {
                null !== this._dotLottieCore && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(),
                    marker: e
                })
            }
            markers() {
                let e = this._dotLottieCore ? .markers();
                if (e) {
                    let t = [];
                    for (let n = 0; n < e.size(); n += 1) {
                        let a = e.get(n);
                        t.push({
                            name: a.name,
                            time: a.time,
                            duration: a.duration
                        })
                    }
                    return t
                }
                return []
            }
            setTheme(e) {
                if (null === this._dotLottieCore) return !1;
                let t = this._dotLottieCore.setTheme(e);
                return t && (this._dotLottieCore.render(), this._draw()), t
            }
            resetTheme() {
                if (null === this._dotLottieCore) return !1;
                let e = this._dotLottieCore.resetTheme();
                return e && (this._dotLottieCore.render(), this._draw()), e
            }
            setThemeData(e) {
                if (null === this._dotLottieCore) return !1;
                let t = this._dotLottieCore.setThemeData(e);
                return t && (this._dotLottieCore.render(), this._draw()), t
            }
            setSlots(e) {
                null !== this._dotLottieCore && this._dotLottieCore.setSlots(e) && (this._dotLottieCore.render(), this._draw())
            }
            setLayout(t) {
                null === this._dotLottieCore || null === e._wasmModule || this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(),
                    layout: eV(t, e._wasmModule)
                })
            }
            setViewport(e, t, n, a) {
                return null !== this._dotLottieCore && this._dotLottieCore.setViewport(e, t, n, a)
            }
            static setWasmUrl(e) {
                eF.setWasmUrl(e)
            }
            tween(t, n) {
                if (!e._wasmModule) return !1;
                let a = new e._wasmModule.VectorFloat;
                for (let e of [0, 0, 1, 1]) a.push_back(e);
                return this._dotLottieCore ? .tween(t, n, a) ? ? !1
            }
            tweenToMarker(t, n) {
                if (!e._wasmModule) return !1;
                let a = new e._wasmModule.VectorFloat;
                for (let e of [0, 0, 1, 1]) a.push_back(e);
                return this._dotLottieCore ? .tweenToMarker(t, n, a) ? ? !1
            }
            animationSize() {
                return {
                    width: this._dotLottieCore ? .animationSize().get(0) ? ? 0,
                    height: this._dotLottieCore ? .animationSize().get(1) ? ? 0
                }
            }
            getLayerBoundingBox(e) {
                let t = this._dotLottieCore ? .getLayerBounds(e);
                if (!t || 8 !== t.size()) return;
                let n = [];
                for (let e = 0; e < 8; e += 1) n.push(t.get(e));
                return n
            }
            static transformThemeToLottieSlots(t, n) {
                return e._wasmModule ? .transformThemeToLottieSlots(t, n) ? ? ""
            }
            _setupStateMachineObservers() {
                if (!this._dotLottieCore || !e._wasmModule) return;
                let t = new e._wasmModule.CallbackStateMachineObserver;
                t.setOnStart(() => {
                    setTimeout(() => {
                        this._isStateMachineRunning = !0, this._eventManager.dispatch({
                            type: "stateMachineStart"
                        }), this._startAnimationLoop()
                    }, 0)
                }), t.setOnStop(() => {
                    setTimeout(() => {
                        this._isStateMachineRunning = !1, this._eventManager.dispatch({
                            type: "stateMachineStop"
                        }), this._dotLottieCore ? .isPlaying() || this._stopAnimationLoop()
                    }, 0)
                }), t.setOnCustomEvent(e => {
                    this._eventManager.dispatch({
                        type: "stateMachineCustomEvent",
                        eventName: e
                    })
                }), t.setOnBooleanInputValueChange((e, t, n) => {
                    this._eventManager.dispatch({
                        type: "stateMachineBooleanInputValueChange",
                        inputName: e,
                        newValue: n,
                        oldValue: t
                    })
                }), t.setOnNumericInputValueChange((e, t, n) => {
                    this._eventManager.dispatch({
                        type: "stateMachineNumericInputValueChange",
                        inputName: e,
                        newValue: n,
                        oldValue: t
                    })
                }), t.setOnStringInputValueChange((e, t, n) => {
                    this._eventManager.dispatch({
                        type: "stateMachineStringInputValueChange",
                        inputName: e,
                        newValue: n,
                        oldValue: t
                    })
                }), t.setOnInputFired(e => {
                    this._eventManager.dispatch({
                        type: "stateMachineInputFired",
                        inputName: e
                    })
                }), t.setOnTransition((e, t) => {
                    this._eventManager.dispatch({
                        type: "stateMachineTransition",
                        fromState: e,
                        toState: t
                    })
                }), t.setOnStateEntered(e => {
                    this._eventManager.dispatch({
                        type: "stateMachineStateEntered",
                        state: e
                    })
                }), t.setOnStateExit(e => {
                    this._eventManager.dispatch({
                        type: "stateMachineStateExit",
                        state: e
                    })
                }), t.setOnError(e => {
                    this._eventManager.dispatch({
                        type: "stateMachineError",
                        error: e
                    })
                });
                let n = new e._wasmModule.CallbackStateMachineInternalObserver;
                n.setOnMessage(e => {
                    ex ? e.startsWith("OpenUrl: ") && eH(e) : this._eventManager.dispatch({
                        type: "stateMachineInternalMessage",
                        message: e
                    })
                }), this._stateMachineObserverHandle = this._dotLottieCore.stateMachineSubscribe(t), this._stateMachineInternalMessageObserver = this._dotLottieCore.stateMachineInternalSubscribe(n)
            }
            _cleanupStateMachineObservers() {
                this._stateMachineObserverHandle && (this._dotLottieCore ? .stateMachineUnsubscribe(this._stateMachineObserverHandle), this._stateMachineObserverHandle.delete(), this._stateMachineObserverHandle = null), this._stateMachineInternalMessageObserver && (this._dotLottieCore ? .stateMachineInternalUnsubscribe(this._stateMachineInternalMessageObserver), this._stateMachineInternalMessageObserver.delete(), this._stateMachineInternalMessageObserver = null)
            }
            stateMachineLoad(t) {
                if (!this._dotLottieCore || !e._wasmModule) return !1;
                this._cleanupStateMachineObservers();
                let n = this._dotLottieCore.stateMachineLoad(t);
                return n && this._setupStateMachineObservers(), n
            }
            stateMachineLoadData(t) {
                if (!this._dotLottieCore || !e._wasmModule) return !1;
                this._cleanupStateMachineObservers();
                let n = this._dotLottieCore.stateMachineLoadData(t);
                return n && this._setupStateMachineObservers(), n
            }
            stateMachineSetConfig(e) {
                this._stateMachineConfig = e
            }
            stateMachineStart() {
                if (null === e._wasmModule || null === this._dotLottieCore) return !1;
                let t = e._wasmModule.createDefaultOpenUrlPolicy();
                if (this._stateMachineConfig) {
                    let n = this._stateMachineConfig.openUrlPolicy;
                    if (n && "boolean" == typeof n.requireUserInteraction && (t.requireUserInteraction = n.requireUserInteraction), n ? .whitelist)
                        for (let a of (t.whitelist = new e._wasmModule.VectorString, n.whitelist)) t.whitelist.push_back(a)
                }
                let n = this._dotLottieCore.stateMachineStart(t);
                return n && (this._isStateMachineRunning = !0, this._setupStateMachineListeners(), this._startAnimationLoop()), n
            }
            stateMachineStop() {
                if (!this._dotLottieCore) return !1;
                let e = this._dotLottieCore.stateMachineStop();
                return e && (this._cleanupStateMachineObservers(), this._isStateMachineRunning = !1, this._cleanupStateMachineListeners(), this._dotLottieCore.isPlaying() || this._stopAnimationLoop()), e
            }
            stateMachineGetStatus() {
                return this._dotLottieCore ? .stateMachineStatus() ? ? ""
            }
            stateMachineGetCurrentState() {
                return this._dotLottieCore ? .stateMachineCurrentState() ? ? ""
            }
            stateMachineGetActiveId() {
                return this._dotLottieCore ? .activeStateMachineId() ? ? ""
            }
            stateMachineOverrideState(e, t = !1) {
                return this._dotLottieCore ? .stateMachineOverrideCurrentState(e, t) ? ? !1
            }
            stateMachineGet(e) {
                return this._dotLottieCore ? .getStateMachine(e) ? ? ""
            }
            stateMachineGetListeners() {
                if (!this._dotLottieCore) return [];
                let e = this._dotLottieCore.stateMachineFrameworkSetup(),
                    t = [];
                for (let n = 0; n < e.size(); n += 1) t.push(e.get(n));
                return t
            }
            stateMachineSetBooleanInput(e, t) {
                return this._dotLottieCore ? .stateMachineSetBooleanInput(e, t) ? ? !1
            }
            stateMachineSetNumericInput(e, t) {
                return this._dotLottieCore ? .stateMachineSetNumericInput(e, t) ? ? !1
            }
            stateMachineSetStringInput(e, t) {
                return this._dotLottieCore ? .stateMachineSetStringInput(e, t) ? ? !1
            }
            stateMachineGetBooleanInput(e) {
                return this._dotLottieCore ? .stateMachineGetBooleanInput(e)
            }
            stateMachineGetNumericInput(e) {
                return this._dotLottieCore ? .stateMachineGetNumericInput(e)
            }
            stateMachineGetStringInput(e) {
                return this._dotLottieCore ? .stateMachineGetStringInput(e)
            }
            stateMachineFireEvent(e) {
                this._dotLottieCore ? .stateMachineFireEvent(e)
            }
            stateMachinePostClickEvent(e, t) {
                this._dotLottieCore ? .stateMachinePostClickEvent(e, t)
            }
            stateMachinePostPointerUpEvent(e, t) {
                this._dotLottieCore ? .stateMachinePostPointerUpEvent(e, t)
            }
            stateMachinePostPointerDownEvent(e, t) {
                this._dotLottieCore ? .stateMachinePostPointerDownEvent(e, t)
            }
            stateMachinePostPointerMoveEvent(e, t) {
                this._dotLottieCore ? .stateMachinePostPointerMoveEvent(e, t)
            }
            stateMachinePostPointerEnterEvent(e, t) {
                this._dotLottieCore ? .stateMachinePostPointerEnterEvent(e, t)
            }
            stateMachinePostPointerExitEvent(e, t) {
                this._dotLottieCore ? .stateMachinePostPointerExitEvent(e, t)
            }
            _onClick(e) {
                let t = eB(e);
                t && this.stateMachinePostClickEvent(t.x, t.y)
            }
            _onPointerUp(e) {
                let t = eB(e);
                t && this.stateMachinePostPointerUpEvent(t.x, t.y)
            }
            _onPointerDown(e) {
                let t = eB(e);
                t && this.stateMachinePostPointerDownEvent(t.x, t.y)
            }
            _onPointerMove(e) {
                let t = eB(e);
                t && this.stateMachinePostPointerMoveEvent(t.x, t.y)
            }
            _onPointerEnter(e) {
                let t = eB(e);
                t && this.stateMachinePostPointerEnterEvent(t.x, t.y)
            }
            _onPointerLeave(e) {
                let t = eB(e);
                t && this.stateMachinePostPointerExitEvent(t.x, t.y)
            }
            _setupStateMachineListeners() {
                if (ex && this._canvas instanceof HTMLCanvasElement && null !== this._dotLottieCore && this.isLoaded) {
                    let e = this.stateMachineGetListeners();
                    this._cleanupStateMachineListeners(), e.includes("Click") && (this._boundOnClick = this._onClick.bind(this), this._canvas.addEventListener("click", this._boundOnClick)), e.includes("PointerUp") && (this._boundOnPointerUp = this._onPointerUp.bind(this), this._canvas.addEventListener("pointerup", this._boundOnPointerUp)), e.includes("PointerDown") && (this._boundOnPointerDown = this._onPointerDown.bind(this), this._canvas.addEventListener("pointerdown", this._boundOnPointerDown)), e.includes("PointerMove") && (this._boundOnPointerMove = this._onPointerMove.bind(this), this._canvas.addEventListener("pointermove", this._boundOnPointerMove)), e.includes("PointerEnter") && (this._boundOnPointerEnter = this._onPointerEnter.bind(this), this._canvas.addEventListener("pointerenter", this._boundOnPointerEnter)), e.includes("PointerExit") && (this._boundOnPointerLeave = this._onPointerLeave.bind(this), this._canvas.addEventListener("pointerleave", this._boundOnPointerLeave))
                }
            }
            _cleanupStateMachineListeners() {
                ex && this._canvas instanceof HTMLCanvasElement && (this._boundOnClick && (this._canvas.removeEventListener("click", this._boundOnClick), this._boundOnClick = null), this._boundOnPointerUp && (this._canvas.removeEventListener("pointerup", this._boundOnPointerUp), this._boundOnPointerUp = null), this._boundOnPointerDown && (this._canvas.removeEventListener("pointerdown", this._boundOnPointerDown), this._boundOnPointerDown = null), this._boundOnPointerMove && (this._canvas.removeEventListener("pointermove", this._boundOnPointerMove), this._boundOnPointerMove = null), this._boundOnPointerEnter && (this._canvas.removeEventListener("pointerenter", this._boundOnPointerEnter), this._boundOnPointerEnter = null), this._boundOnPointerLeave && (this._canvas.removeEventListener("pointerleave", this._boundOnPointerLeave), this._boundOnPointerLeave = null))
            }
        };
    eC(eq, "_wasmModule", null);
    var eJ = class {
            constructor() {
                if (typeof Worker > "u") throw Error("Worker is not supported in this environment.");
                let e = new Blob([new Uint8Array([34, 117, 115, 101, 32, 115, 116, 114, 105, 99, 116, 34, 59, 10, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 121, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 32, 61, 32, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 107, 101, 121, 32, 105, 110, 32, 111, 98, 106, 32, 63, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 123, 32, 101, 110, 117, 109, 101, 114, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 99, 111, 110, 102, 105, 103, 117, 114, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 119, 114, 105, 116, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 118, 97, 108, 117, 101, 32, 125, 41, 32, 58, 32, 111, 98, 106, 91, 107, 101, 121, 93, 32, 61, 32, 118, 97, 108, 117, 101, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 32, 61, 32, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 40, 111, 98, 106, 44, 32, 116, 121, 112, 101, 111, 102, 32, 107, 101, 121, 32, 33, 61, 61, 32, 34, 115, 121, 109, 98, 111, 108, 34, 32, 63, 32, 107, 101, 121, 32, 43, 32, 34, 34, 32, 58, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 97, 110, 105, 109, 97, 116, 105, 111, 110, 45, 102, 114, 97, 109, 101, 45, 109, 97, 110, 97, 103, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 87, 101, 98, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 78, 111, 100, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 34, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 62, 61, 32, 78, 117, 109, 98, 101, 114, 46, 77, 65, 88, 95, 83, 65, 70, 69, 95, 73, 78, 84, 69, 71, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 32, 61, 32, 115, 101, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 40, 68, 97, 116, 101, 46, 110, 111, 119, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 95, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 101, 97, 114, 73, 109, 109, 101, 100, 105, 97, 116, 101, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 114, 97, 116, 101, 103, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 63, 32, 110, 101, 119, 32, 87, 101, 98, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 40, 41, 32, 58, 32, 110, 101, 119, 32, 78, 111, 100, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 110, 115, 116, 97, 110, 116, 115, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 119, 105, 110, 100, 111, 119, 32, 33, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 38, 38, 32, 116, 121, 112, 101, 111, 102, 32, 119, 105, 110, 100, 111, 119, 46, 100, 111, 99, 117, 109, 101, 110, 116, 32, 33, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 59, 10, 32, 32, 118, 97, 114, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 91, 56, 48, 44, 32, 55, 53, 44, 32, 51, 44, 32, 52, 93, 41, 59, 10, 32, 32, 118, 97, 114, 32, 76, 79, 84, 84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68, 65, 84, 79, 82, 89, 95, 70, 73, 69, 76, 68, 83, 32, 61, 32, 91, 34, 118, 34, 44, 32, 34, 105, 112, 34, 44, 32, 34, 111, 112, 34, 44, 32, 34, 108, 97, 121, 101, 114, 115, 34, 44, 32, 34, 102, 114, 34, 44, 32, 34, 119, 34, 44, 32, 34, 104, 34, 93, 59, 10, 32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 32, 61, 32, 34, 48, 46, 53, 52, 46, 49, 34, 59, 10, 32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 32, 61, 32, 34, 64, 108, 111, 116, 116, 105, 101, 102, 105, 108, 101, 115, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 119, 101, 98, 34, 59, 10, 32, 32, 118, 97, 114, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70, 65, 67, 84, 79, 82, 32, 61, 32, 48, 46, 55, 53, 59, 10, 32, 32, 118, 97, 114, 32, 66, 89, 84, 69, 83, 95, 80, 69, 82, 95, 80, 73, 88, 69, 76, 32, 61, 32, 52, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 114, 101, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 106, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108, 101, 32, 61, 32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118, 97, 114, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101, 110, 116, 32, 33, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 63, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 63, 46, 115, 114, 99, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 109, 111, 100, 117, 108, 101, 65, 114, 103, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 109, 111, 100, 117, 108, 101, 65, 114, 103, 44, 32, 97, 97, 44, 32, 98, 97, 44, 32, 99, 97, 32, 61, 32, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 44, 32, 102, 97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 123, 125, 44, 32, 104, 41, 44, 32, 104, 97, 32, 61, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112, 114, 111, 103, 114, 97, 109, 34, 44, 32, 112, 32, 61, 32, 34, 34, 44, 32, 105, 97, 59, 10, 32, 32, 32, 32, 32, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101, 110, 116, 32, 38, 38, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 32, 38, 38, 32, 40, 112, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 32, 38, 38, 32, 40, 112, 32, 61, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 112, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 98, 108, 111, 98, 58, 34, 41, 32, 63, 32, 112, 32, 61, 32, 34, 34, 32, 58, 32, 112, 32, 61, 32, 112, 46, 115, 117, 98, 115, 116, 114, 40, 48, 44, 32, 112, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 91, 63, 35, 93, 46, 42, 47, 44, 32, 34, 34, 41, 46, 108, 97, 115, 116, 73, 110, 100, 101, 120, 79, 102, 40, 34, 47, 34, 41, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 97, 32, 61, 32, 97, 115, 121, 110, 99, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 119, 97, 105, 116, 32, 102, 101, 116, 99, 104, 40, 97, 44, 32, 123, 32, 99, 114, 101, 100, 101, 110, 116, 105, 97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45, 111, 114, 105, 103, 105, 110, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 46, 111, 107, 41, 32, 114, 101, 116, 117, 114, 110, 32, 97, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 69, 114, 114, 111, 114, 40, 97, 46, 115, 116, 97, 116, 117, 115, 32, 43, 32, 34, 32, 58, 32, 34, 32, 43, 32, 97, 46, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 116, 32, 61, 32, 104, 46, 112, 114, 105, 110, 116, 69, 114, 114, 32, 124, 124, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 46, 98, 105, 110, 100, 40, 99, 111, 110, 115, 111, 108, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 104, 44, 32, 102, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 116, 104, 105, 115, 80, 114, 111, 103, 114, 97, 109, 32, 38, 38, 32, 40, 104, 97, 32, 61, 32, 104, 46, 116, 104, 105, 115, 80, 114, 111, 103, 114, 97, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 106, 97, 32, 61, 32, 104, 46, 119, 97, 115, 109, 66, 105, 110, 97, 114, 121, 44, 32, 107, 97, 44, 32, 108, 97, 32, 61, 32, 102, 97, 108, 115, 101, 44, 32, 109, 97, 44, 32, 117, 44, 32, 120, 44, 32, 121, 44, 32, 122, 44, 32, 67, 44, 32, 68, 44, 32, 110, 97, 44, 32, 111, 97, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 112, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 107, 97, 46, 98, 117, 102, 102, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 56, 32, 61, 32, 117, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 56, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 49, 54, 32, 61, 32, 121, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 49, 54, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 85, 56, 32, 61, 32, 120, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 85, 49, 54, 32, 61, 32, 122, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 49, 54, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 51, 50, 32, 61, 32, 67, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 85, 51, 50, 32, 61, 32, 68, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 70, 51, 50, 32, 61, 32, 110, 97, 32, 61, 32, 110, 101, 119, 32, 70, 108, 111, 97, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 72, 69, 65, 80, 70, 54, 52, 32, 61, 32, 111, 97, 32, 61, 32, 110, 101, 119, 32, 70, 108, 111, 97, 116, 54, 52, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 113, 97, 32, 61, 32, 91, 93, 44, 32, 114, 97, 32, 61, 32, 91, 93, 44, 32, 115, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 104, 46, 112, 114, 101, 82, 117, 110, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 70, 32, 61, 32, 48, 44, 32, 71, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 117, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 111, 110, 65, 98, 111, 114, 116, 63, 46, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 34, 65, 98, 111, 114, 116, 101, 100, 40, 34, 32, 43, 32, 97, 32, 43, 32, 34, 41, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 110, 101, 119, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 82, 117, 110, 116, 105, 109, 101, 69, 114, 114, 111, 114, 40, 97, 32, 43, 32, 34, 46, 32, 66, 117, 105, 108, 100, 32, 119, 105, 116, 104, 32, 45, 115, 65, 83, 83, 69, 82, 84, 73, 79, 78, 83, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 105, 110, 102, 111, 46, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 118, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 97, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 100, 97, 116, 97, 58, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 111, 99, 116, 101, 116, 45, 115, 116, 114, 101, 97, 109, 59, 98, 97, 115, 101, 54, 52, 44, 34, 41, 44, 32, 119, 97, 59, 10, 32, 32, 32, 32, 32, 32, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 120, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 106, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 119, 97, 105, 116, 32, 105, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 32, 61, 61, 32, 119, 97, 32, 38, 38, 32, 106, 97, 41, 32, 97, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 106, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 116, 104, 114, 111, 119, 32, 34, 98, 111, 116, 104, 32, 97, 115, 121, 110, 99, 32, 97, 110, 100, 32, 115, 121, 110, 99, 32, 102, 101, 116, 99, 104, 105, 110, 103, 32, 111, 102, 32, 116, 104, 101, 32, 119, 97, 115, 109, 32, 102, 97, 105, 108, 101, 100, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 121, 97, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 119, 97, 105, 116, 32, 120, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 119, 97, 105, 116, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 40, 99, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 97, 115, 121, 110, 99, 104, 114, 111, 110, 111, 117, 115, 108, 121, 32, 112, 114, 101, 112, 97, 114, 101, 32, 119, 97, 115, 109, 58, 32, 36, 123, 100, 125, 96, 41, 44, 32, 117, 97, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 122, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 119, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 106, 97, 32, 38, 38, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 32, 38, 38, 32, 33, 118, 97, 40, 98, 41, 32, 38, 38, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 102, 101, 116, 99, 104, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 102, 101, 116, 99, 104, 40, 98, 44, 32, 123, 32, 99, 114, 101, 100, 101, 110, 116, 105, 97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45, 111, 114, 105, 103, 105, 110, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 119, 97, 105, 116, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 40, 99, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 119, 97, 115, 109, 32, 115, 116, 114, 101, 97, 109, 105, 110, 103, 32, 99, 111, 109, 112, 105, 108, 101, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 100, 125, 96, 41, 44, 32, 116, 40, 34, 102, 97, 108, 108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 121, 97, 40, 98, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 65, 97, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 110, 97, 109, 101, 34, 44, 32, 34, 69, 120, 105, 116, 83, 116, 97, 116, 117, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 96, 80, 114, 111, 103, 114, 97, 109, 32, 116, 101, 114, 109, 105, 110, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 101, 120, 105, 116, 40, 36, 123, 97, 125, 41, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 117, 115, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 66, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 48, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 97, 46, 115, 104, 105, 102, 116, 40, 41, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 67, 97, 32, 61, 32, 104, 46, 110, 111, 69, 120, 105, 116, 82, 117, 110, 116, 105, 109, 101, 32, 124, 124, 32, 116, 114, 117, 101, 44, 32, 68, 97, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 44, 32, 69, 97, 32, 61, 32, 40, 97, 32, 61, 32, 48, 44, 32, 98, 32, 61, 32, 78, 97, 78, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 120, 44, 32, 100, 32, 61, 32, 97, 32, 43, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 61, 32, 97, 59, 32, 99, 91, 98, 93, 32, 38, 38, 32, 33, 40, 98, 32, 62, 61, 32, 100, 41, 59, 32, 41, 32, 43, 43, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 54, 32, 60, 32, 98, 32, 45, 32, 97, 32, 38, 38, 32, 99, 46, 98, 117, 102, 102, 101, 114, 32, 38, 38, 32, 68, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 68, 97, 46, 100, 101, 99, 111, 100, 101, 40, 99, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 100, 32, 61, 32, 34, 34, 59, 32, 97, 32, 60, 32, 98, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 99, 91, 97, 43, 43, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 38, 32, 49, 50, 56, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 99, 91, 97, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 57, 50, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50, 50, 52, 41, 41, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 40, 101, 32, 38, 32, 51, 49, 41, 32, 60, 60, 32, 54, 32, 124, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 99, 91, 97, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 50, 50, 52, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50, 52, 48, 41, 32, 63, 32, 40, 101, 32, 38, 32, 49, 53, 41, 32, 60, 60, 32, 49, 50, 32, 124, 32, 102, 32, 60, 60, 32, 54, 32, 124, 32, 107, 32, 58, 32, 40, 101, 32, 38, 32, 55, 41, 32, 60, 60, 32, 49, 56, 32, 124, 32, 102, 32, 60, 60, 32, 49, 50, 32, 124, 32, 107, 32, 60, 60, 32, 54, 32, 124, 32, 99, 91, 97, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 62, 32, 101, 32, 63, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 32, 58, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51, 54, 44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 53, 53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48, 44, 32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49, 48, 50, 51, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 70, 97, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 67, 97, 32, 61, 32, 97, 32, 45, 32, 50, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 71, 97, 32, 61, 32, 48, 44, 32, 72, 97, 32, 61, 32, 48, 44, 32, 72, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 120, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 60, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 98, 32, 43, 32, 99, 32, 45, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53, 53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 43, 43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40, 40, 102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48, 41, 32, 124, 32, 107, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 50, 55, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 48, 52, 55, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 49, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 57, 50, 32, 124, 32, 102, 32, 62, 62, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 54, 53, 53, 51, 53, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 50, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 50, 50, 52, 32, 124, 32, 102, 32, 62, 62, 32, 49, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 51, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 50, 52, 48, 32, 124, 32, 102, 32, 62, 62, 32, 49, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 62, 62, 32, 49, 50, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 62, 62, 32, 54, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 73, 97, 32, 61, 32, 123, 125, 44, 32, 74, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 46, 112, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 112, 111, 112, 40, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 73, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 68, 91, 97, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 74, 32, 61, 32, 123, 125, 44, 32, 75, 32, 61, 32, 123, 125, 44, 32, 75, 97, 32, 61, 32, 123, 125, 44, 32, 76, 44, 32, 78, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 99, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 46, 108, 101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 97, 46, 108, 101, 110, 103, 116, 104, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 76, 40, 34, 77, 105, 115, 109, 97, 116, 99, 104, 101, 100, 32, 116, 121, 112, 101, 32, 99, 111, 110, 118, 101, 114, 116, 101, 114, 32, 99, 111, 117, 110, 116, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 48, 59, 32, 108, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 108, 41, 32, 77, 40, 97, 91, 108, 93, 44, 32, 103, 91, 108, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 103, 41, 32, 61, 62, 32, 75, 97, 91, 103, 93, 32, 61, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 65, 114, 114, 97, 121, 40, 98, 46, 108, 101, 110, 103, 116, 104, 41, 44, 32, 102, 32, 61, 32, 91, 93, 44, 32, 107, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 103, 41, 32, 63, 32, 101, 91, 108, 93, 32, 61, 32, 75, 91, 103, 93, 32, 58, 32, 40, 102, 46, 112, 117, 115, 104, 40, 103, 41, 44, 32, 74, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 103, 41, 32, 124, 124, 32, 40, 74, 91, 103, 93, 32, 61, 32, 91, 93, 41, 44, 32, 74, 91, 103, 93, 46, 112, 117, 115, 104, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 108, 93, 32, 61, 32, 75, 91, 103, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 43, 43, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 32, 61, 61, 61, 32, 102, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 102, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 76, 97, 44, 32, 79, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 34, 34, 59, 32, 120, 91, 97, 93, 59, 32, 41, 32, 98, 32, 43, 61, 32, 76, 97, 91, 120, 91, 97, 43, 43, 93, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 80, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 77, 97, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 116, 121, 112, 101, 32, 34, 36, 123, 100, 125, 34, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 97, 32, 112, 111, 115, 105, 116, 105, 118, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 116, 121, 112, 101, 105, 100, 32, 112, 111, 105, 110, 116, 101, 114, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 75, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 46, 104, 98, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 116, 121, 112, 101, 32, 39, 36, 123, 100, 125, 39, 32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 75, 91, 97, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 75, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 32, 38, 38, 32, 40, 98, 32, 61, 32, 74, 91, 97, 93, 44, 32, 100, 101, 108, 101, 116, 101, 32, 74, 91, 97, 93, 44, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 101, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 77, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 77, 97, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 79, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 97, 46, 65, 97, 46, 68, 97, 46, 66, 97, 46, 110, 97, 109, 101, 32, 43, 32, 34, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 97, 108, 114, 101, 97, 100, 121, 32, 100, 101, 108, 101, 116, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 80, 97, 32, 61, 32, 102, 97, 108, 115, 101, 44, 32, 81, 97, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 61, 61, 61, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 46, 71, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 82, 97, 40, 97, 44, 32, 98, 44, 32, 99, 46, 71, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 32, 61, 61, 61, 32, 97, 32, 63, 32, 110, 117, 108, 108, 32, 58, 32, 99, 46, 36, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 83, 97, 32, 61, 32, 123, 125, 44, 32, 84, 97, 32, 61, 32, 123, 125, 44, 32, 85, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 98, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 112, 116, 114, 32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 98, 101, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 97, 46, 71, 97, 59, 32, 41, 32, 98, 32, 61, 32, 97, 46, 81, 97, 40, 98, 41, 44, 32, 97, 32, 61, 32, 97, 46, 71, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 84, 97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 86, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 32, 124, 124, 32, 33, 98, 46, 67, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 76, 40, 34, 109, 97, 107, 101, 67, 108, 97, 115, 115, 72, 97, 110, 100, 108, 101, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 112, 116, 114, 32, 97, 110, 100, 32, 112, 116, 114, 84, 121, 112, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 33, 98, 46, 72, 97, 32, 33, 61, 61, 32, 33, 33, 98, 46, 70, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 76, 40, 34, 66, 111, 116, 104, 32, 115, 109, 97, 114, 116, 80, 116, 114, 84, 121, 112, 101, 32, 97, 110, 100, 32, 115, 109, 97, 114, 116, 80, 116, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 99, 111, 117, 110, 116, 32, 61, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 49, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 81, 40, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 97, 44, 32, 123, 32, 65, 97, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 98, 44, 32, 119, 114, 105, 116, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 32, 125, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 81, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 61, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 70, 105, 110, 97, 108, 105, 122, 97, 116, 105, 111, 110, 82, 101, 103, 105, 115, 116, 114, 121, 41, 32, 114, 101, 116, 117, 114, 110, 32, 81, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 98, 44, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 80, 97, 32, 61, 32, 110, 101, 119, 32, 70, 105, 110, 97, 108, 105, 122, 97, 116, 105, 111, 110, 82, 101, 103, 105, 115, 116, 114, 121, 40, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 46, 65, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 45, 98, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 98, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 38, 38, 32, 40, 98, 46, 70, 97, 32, 63, 32, 98, 46, 72, 97, 46, 75, 97, 40, 98, 46, 70, 97, 41, 32, 58, 32, 98, 46, 68, 97, 46, 66, 97, 46, 75, 97, 40, 98, 46, 67, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 81, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 98, 46, 65, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 70, 97, 32, 38, 38, 32, 80, 97, 46, 114, 101, 103, 105, 115, 116, 101, 114, 40, 98, 44, 32, 123, 32, 65, 97, 58, 32, 99, 32, 125, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 81, 97, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 97, 46, 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 81, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 87, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 88, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 89, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 121, 40, 98, 44, 32, 34, 110, 97, 109, 101, 34, 44, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 97, 32, 125, 41, 44, 32, 90, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 97, 91, 98, 93, 46, 69, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 91, 98, 93, 46, 69, 97, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 101, 46, 108, 101, 110, 103, 116, 104, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 70, 117, 110, 99, 116, 105, 111, 110, 32, 39, 36, 123, 99, 125, 39, 32, 99, 97, 108, 108, 101, 100, 32, 119, 105, 116, 104, 32, 97, 110, 32, 105, 110, 118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 36, 123, 101, 46, 108, 101, 110, 103, 116, 104, 125, 41, 32, 45, 32, 101, 120, 112, 101, 99, 116, 115, 32, 111, 110, 101, 32, 111, 102, 32, 40, 36, 123, 97, 91, 98, 93, 46, 69, 97, 125, 41, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 91, 98, 93, 46, 69, 97, 91, 101, 46, 108, 101, 110, 103, 116, 104, 93, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 46, 69, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 46, 69, 97, 91, 100, 46, 78, 97, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 36, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 104, 91, 97, 93, 46, 69, 97, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 104, 91, 97, 93, 46, 69, 97, 91, 99, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 112, 117, 98, 108, 105, 99, 32, 110, 97, 109, 101, 32, 39, 36, 123, 97, 125, 39, 32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 90, 97, 40, 104, 44, 32, 97, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 91, 97, 93, 46, 69, 97, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 99, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 111, 118, 101, 114, 108, 111, 97, 100, 115, 32, 111, 102, 32, 97, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 36, 123, 99, 125, 41, 33, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 91, 97, 93, 46, 69, 97, 91, 99, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 104, 91, 97, 93, 32, 61, 32, 98, 44, 32, 104, 91, 97, 93, 46, 78, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 97, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 91, 94, 97, 45, 122, 65, 45, 90, 48, 45, 57, 95, 93, 47, 103, 44, 32, 34, 36, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 52, 56, 32, 60, 61, 32, 98, 32, 38, 38, 32, 53, 55, 32, 62, 61, 32, 98, 32, 63, 32, 96, 95, 36, 123, 97, 125, 96, 32, 58, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 77, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 75, 97, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 71, 97, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 98, 98, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 81, 97, 32, 61, 32, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 36, 97, 32, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 106, 98, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 98, 32, 33, 61, 61, 32, 99, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 81, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 69, 120, 112, 101, 99, 116, 101, 100, 32, 110, 117, 108, 108, 32, 111, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 99, 46, 110, 97, 109, 101, 125, 44, 32, 103, 111, 116, 32, 97, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 98, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 98, 46, 81, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 46, 71, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 84, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 65, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 101, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 65, 97, 46, 67, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 98, 40, 98, 46, 65, 97, 46, 67, 97, 44, 32, 98, 46, 65, 97, 46, 68, 97, 46, 66, 97, 44, 32, 116, 104, 105, 115, 46, 66, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 102, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 84, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 83, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 85, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 32, 38, 38, 32, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 46, 75, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 32, 124, 124, 32, 33, 98, 46, 65, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 101, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 65, 97, 46, 67, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 82, 97, 32, 38, 38, 32, 98, 46, 65, 97, 46, 68, 97, 46, 82, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 65, 97, 46, 72, 97, 32, 63, 32, 98, 46, 65, 97, 46, 72, 97, 46, 110, 97, 109, 101, 32, 58, 32, 98, 46, 65, 97, 46, 68, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 99, 98, 40, 98, 46, 65, 97, 46, 67, 97, 44, 32, 98, 46, 65, 97, 46, 68, 97, 46, 66, 97, 44, 32, 116, 104, 105, 115, 46, 66, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 83, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 98, 46, 65, 97, 46, 70, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 80, 97, 115, 115, 105, 110, 103, 32, 114, 97, 119, 32, 112, 111, 105, 110, 116, 101, 114, 32, 116, 111, 32, 115, 109, 97, 114, 116, 32, 112, 111, 105, 110, 116, 101, 114, 32, 105, 115, 32, 105, 108, 108, 101, 103, 97, 108, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 116, 104, 105, 115, 46, 111, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 65, 97, 46, 72, 97, 32, 61, 61, 61, 32, 116, 104, 105, 115, 41, 32, 99, 32, 61, 32, 98, 46, 65, 97, 46, 70, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 65, 97, 46, 72, 97, 32, 63, 32, 98, 46, 65, 97, 46, 72, 97, 46, 110, 97, 109, 101, 32, 58, 32, 98, 46, 65, 97, 46, 68, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 98, 46, 65, 97, 46, 70, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 65, 97, 46, 72, 97, 32, 61, 61, 61, 32, 116, 104, 105, 115, 41, 32, 99, 32, 61, 32, 98, 46, 65, 97, 46, 70, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 107, 98, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 98, 40, 40, 41, 32, 61, 62, 32, 100, 91, 34, 100, 101, 108, 101, 116, 101, 34, 93, 40, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 32, 38, 38, 32, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 46, 75, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 85, 110, 115, 117, 112, 112, 111, 114, 116, 105, 110, 103, 32, 115, 104, 97, 114, 105, 110, 103, 32, 112, 111, 108, 105, 99, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 84, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 65, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 101, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 65, 97, 46, 67, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 65, 97, 46, 68, 97, 46, 82, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 65, 97, 46, 68, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 98, 40, 98, 46, 65, 97, 46, 67, 97, 44, 32, 98, 46, 65, 97, 46, 68, 97, 46, 66, 97, 44, 32, 116, 104, 105, 115, 46, 66, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 44, 32, 109, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 66, 97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 84, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 82, 97, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 83, 97, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 105, 98, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 111, 98, 32, 61, 32, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 89, 97, 32, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 85, 97, 32, 61, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 107, 98, 32, 61, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 75, 97, 32, 61, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 98, 46, 71, 97, 32, 63, 32, 116, 104, 105, 115, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 32, 61, 32, 102, 98, 32, 58, 32, 40, 116, 104, 105, 115, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 32, 61, 32, 100, 32, 63, 32, 100, 98, 32, 58, 32, 104, 98, 44, 32, 116, 104, 105, 115, 46, 74, 97, 32, 61, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 106, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 104, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 76, 40, 34, 82, 101, 112, 108, 97, 99, 105, 110, 103, 32, 110, 111, 110, 101, 120, 105, 115, 116, 101, 110, 116, 32, 112, 117, 98, 108, 105, 99, 32, 115, 121, 109, 98, 111, 108, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 104, 91, 97, 93, 46, 69, 97, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 99, 32, 63, 32, 104, 91, 97, 93, 46, 69, 97, 91, 99, 93, 32, 61, 32, 98, 32, 58, 32, 40, 104, 91, 97, 93, 32, 61, 32, 98, 44, 32, 104, 91, 97, 93, 46, 78, 97, 32, 61, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 44, 32, 107, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 91, 93, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 106, 34, 41, 32, 63, 32, 40, 97, 32, 61, 32, 97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 112, 47, 103, 44, 32, 34, 105, 34, 41, 44, 32, 98, 32, 61, 32, 40, 48, 44, 32, 104, 91, 34, 100, 121, 110, 67, 97, 108, 108, 95, 34, 32, 43, 32, 97, 93, 41, 40, 98, 44, 32, 46, 46, 46, 99, 41, 41, 32, 58, 32, 98, 32, 61, 32, 82, 46, 103, 101, 116, 40, 98, 41, 40, 46, 46, 46, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 108, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 46, 46, 46, 99, 41, 32, 61, 62, 32, 107, 98, 40, 97, 44, 32, 98, 44, 32, 99, 41, 44, 32, 83, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 79, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 106, 34, 41, 32, 63, 32, 108, 98, 40, 97, 44, 32, 98, 41, 32, 58, 32, 82, 46, 103, 101, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 112, 111, 105, 110, 116, 101, 114, 32, 119, 105, 116, 104, 32, 115, 105, 103, 110, 97, 116, 117, 114, 101, 32, 36, 123, 97, 125, 58, 32, 36, 123, 98, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 109, 98, 44, 32, 111, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 110, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 79, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 84, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 112, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 102, 93, 32, 124, 124, 32, 75, 91, 102, 93, 32, 124, 124, 32, 40, 75, 97, 91, 102, 93, 32, 63, 32, 75, 97, 91, 102, 93, 46, 102, 111, 114, 69, 97, 99, 104, 40, 99, 41, 32, 58, 32, 40, 100, 46, 112, 117, 115, 104, 40, 102, 41, 44, 32, 101, 91, 102, 93, 32, 61, 32, 116, 114, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 91, 93, 44, 32, 101, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 109, 98, 40, 96, 36, 123, 97, 125, 58, 32, 96, 32, 43, 32, 100, 46, 109, 97, 112, 40, 111, 98, 41, 46, 106, 111, 105, 110, 40, 91, 34, 44, 32, 34, 93, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 113, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 91, 93, 44, 32, 100, 32, 61, 32, 48, 59, 32, 100, 32, 60, 32, 97, 59, 32, 100, 43, 43, 41, 32, 99, 46, 112, 117, 115, 104, 40, 68, 91, 98, 32, 43, 32, 52, 32, 42, 32, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 114, 98, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 49, 59, 32, 98, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 98, 41, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 91, 98, 93, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 97, 91, 98, 93, 46, 74, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 115, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 62, 32, 102, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 97, 114, 103, 84, 121, 112, 101, 115, 32, 97, 114, 114, 97, 121, 32, 115, 105, 122, 101, 32, 109, 105, 115, 109, 97, 116, 99, 104, 33, 32, 77, 117, 115, 116, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 103, 101, 116, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 97, 110, 100, 32, 39, 116, 104, 105, 115, 39, 32, 116, 121, 112, 101, 115, 33, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 98, 91, 49, 93, 32, 38, 38, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 99, 44, 32, 103, 32, 61, 32, 114, 98, 40, 98, 41, 44, 32, 108, 32, 61, 32, 34, 118, 111, 105, 100, 34, 32, 33, 61, 61, 32, 98, 91, 48, 93, 46, 110, 97, 109, 101, 44, 32, 110, 32, 61, 32, 102, 32, 45, 32, 50, 44, 32, 109, 32, 61, 32, 65, 114, 114, 97, 121, 40, 110, 41, 44, 32, 113, 32, 61, 32, 91, 93, 44, 32, 114, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 89, 97, 40, 97, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 65, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 107, 32, 63, 32, 50, 32, 58, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 91, 48, 93, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 118, 32, 61, 32, 98, 91, 49, 93, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 114, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 91, 49, 93, 32, 61, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 119, 32, 61, 32, 48, 59, 32, 119, 32, 60, 32, 110, 59, 32, 43, 43, 119, 41, 32, 109, 91, 119, 93, 32, 61, 32, 98, 91, 119, 32, 43, 32, 50, 93, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 114, 44, 32, 65, 91, 119, 93, 41, 44, 32, 113, 46, 112, 117, 115, 104, 40, 109, 91, 119, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 65, 32, 61, 32, 100, 40, 46, 46, 46, 113, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 41, 32, 74, 97, 40, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 119, 32, 61, 32, 107, 32, 63, 32, 49, 32, 58, 32, 50, 59, 32, 119, 32, 60, 32, 98, 46, 108, 101, 110, 103, 116, 104, 59, 32, 119, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 69, 32, 61, 32, 49, 32, 61, 61, 61, 32, 119, 32, 63, 32, 118, 32, 58, 32, 109, 91, 119, 32, 45, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 98, 91, 119, 93, 46, 74, 97, 32, 38, 38, 32, 98, 91, 119, 93, 46, 74, 97, 40, 69, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 108, 32, 63, 32, 98, 91, 48, 93, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 65, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 116, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 116, 114, 105, 109, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 32, 61, 32, 97, 46, 105, 110, 100, 101, 120, 79, 102, 40, 34, 40, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 45, 49, 32, 33, 61, 61, 32, 98, 32, 63, 32, 97, 46, 115, 117, 98, 115, 116, 114, 40, 48, 44, 32, 98, 41, 32, 58, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 118, 98, 32, 61, 32, 91, 93, 44, 32, 85, 32, 61, 32, 91, 93, 44, 32, 119, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 48, 32, 61, 61, 61, 32, 45, 45, 85, 91, 97, 32, 43, 32, 49, 93, 32, 38, 38, 32, 40, 85, 91, 97, 93, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 118, 98, 46, 112, 117, 115, 104, 40, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 86, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 67, 97, 110, 110, 111, 116, 32, 117, 115, 101, 32, 100, 101, 108, 101, 116, 101, 100, 32, 118, 97, 108, 46, 32, 104, 97, 110, 100, 108, 101, 32, 61, 32, 34, 32, 43, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 85, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 103, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 118, 111, 105, 100, 32, 48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 110, 117, 108, 108, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 116, 114, 117, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 102, 97, 108, 115, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 32, 61, 32, 118, 98, 46, 112, 111, 112, 40, 41, 32, 124, 124, 32, 85, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 91, 98, 93, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 91, 98, 32, 43, 32, 49, 93, 32, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 120, 98, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 34, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 58, 58, 118, 97, 108, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 86, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 103, 98, 40, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 121, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 117, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 120, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 121, 91, 100, 32, 62, 62, 32, 49, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 122, 91, 100, 32, 62, 62, 32, 49, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 67, 91, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 68, 91, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 122, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 75, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32, 97, 32, 61, 32, 96, 36, 123, 98, 125, 32, 104, 97, 115, 32, 117, 110, 107, 110, 111, 119, 110, 32, 116, 121, 112, 101, 32, 36, 123, 111, 98, 40, 97, 41, 125, 96, 44, 32, 110, 101, 119, 32, 80, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 101, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 34, 110, 117, 108, 108, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34, 97, 114, 114, 97, 121, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 61, 32, 98, 32, 63, 32, 97, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 58, 32, 34, 34, 32, 43, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 65, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 110, 97, 91, 99, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 56, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 111, 97, 91, 99, 32, 62, 62, 32, 51, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 102, 108, 111, 97, 116, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 66, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 117, 91, 100, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 120, 91, 100, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 121, 91, 100, 32, 62, 62, 32, 49, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 122, 91, 100, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 67, 91, 100, 32, 62, 62, 32, 50, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 68, 91, 100, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 67, 98, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 123, 32, 111, 112, 116, 105, 111, 110, 97, 108, 58, 32, 116, 114, 117, 101, 32, 125, 44, 32, 120, 98, 41, 44, 32, 68, 98, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 34, 117, 116, 102, 45, 49, 54, 108, 101, 34, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 44, 32, 69, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 32, 62, 62, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 100, 32, 61, 32, 99, 32, 43, 32, 98, 32, 47, 32, 50, 59, 32, 33, 40, 99, 32, 62, 61, 32, 100, 41, 32, 38, 38, 32, 122, 91, 99, 93, 59, 32, 41, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 60, 60, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 51, 50, 32, 60, 32, 99, 32, 45, 32, 97, 32, 38, 38, 32, 68, 98, 41, 32, 114, 101, 116, 117, 114, 110, 32, 68, 98, 46, 100, 101, 99, 111, 100, 101, 40, 120, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 99, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 100, 32, 61, 32, 48, 59, 32, 33, 40, 100, 32, 62, 61, 32, 98, 32, 47, 32, 50, 41, 59, 32, 43, 43, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 121, 91, 97, 32, 43, 32, 50, 32, 42, 32, 100, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 32, 101, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 70, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 63, 63, 32, 40, 99, 32, 61, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 62, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 45, 61, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 99, 32, 60, 32, 50, 32, 42, 32, 97, 46, 108, 101, 110, 103, 116, 104, 32, 63, 32, 99, 32, 47, 32, 50, 32, 58, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 99, 59, 32, 43, 43, 101, 41, 32, 121, 91, 98, 32, 62, 62, 32, 49, 93, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 44, 32, 98, 32, 43, 61, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 91, 98, 32, 62, 62, 32, 49, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 71, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 50, 32, 42, 32, 97, 46, 108, 101, 110, 103, 116, 104, 44, 32, 72, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 48, 44, 32, 100, 32, 61, 32, 34, 34, 59, 32, 33, 40, 99, 32, 62, 61, 32, 98, 32, 47, 32, 52, 41, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 67, 91, 97, 32, 43, 32, 52, 32, 42, 32, 99, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 32, 101, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 60, 61, 32, 101, 32, 63, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51, 54, 44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 53, 53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48, 44, 32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49, 48, 50, 51, 41, 41, 32, 58, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 73, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 63, 63, 32, 40, 99, 32, 61, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 52, 32, 62, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 100, 32, 43, 32, 99, 32, 45, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53, 53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 43, 43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40, 40, 102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48, 41, 32, 124, 32, 107, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 52, 32, 62, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 74, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 48, 44, 32, 99, 32, 61, 32, 48, 59, 32, 99, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 53, 53, 50, 57, 54, 32, 60, 61, 32, 100, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 100, 32, 38, 38, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 75, 98, 32, 61, 32, 48, 44, 32, 76, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 100, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 40, 68, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 103, 98, 40, 100, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 77, 98, 32, 61, 32, 91, 93, 44, 32, 78, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 77, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 98, 46, 112, 117, 115, 104, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 79, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 65, 114, 114, 97, 121, 40, 97, 41, 44, 32, 100, 32, 61, 32, 48, 59, 32, 100, 32, 60, 32, 97, 59, 32, 43, 43, 100, 41, 32, 99, 91, 100, 93, 32, 61, 32, 122, 98, 40, 68, 91, 98, 32, 43, 32, 52, 32, 42, 32, 100, 32, 62, 62, 32, 50, 93, 44, 32, 34, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 34, 32, 43, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 80, 98, 32, 61, 32, 82, 101, 102, 108, 101, 99, 116, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 44, 32, 81, 98, 32, 61, 32, 123, 125, 44, 32, 82, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 97, 32, 124, 124, 32, 34, 117, 110, 119, 105, 110, 100, 34, 32, 61, 61, 32, 97, 41, 41, 32, 116, 104, 114, 111, 119, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 83, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 32, 124, 124, 32, 48, 32, 60, 32, 75, 98, 32, 124, 124, 32, 40, 104, 46, 111, 110, 69, 120, 105, 116, 63, 46, 40, 97, 41, 44, 32, 108, 97, 32, 61, 32, 116, 114, 117, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 65, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 84, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 40, 41, 44, 32, 33, 40, 67, 97, 32, 124, 124, 32, 48, 32, 60, 32, 75, 98, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 32, 61, 32, 97, 32, 61, 32, 109, 97, 44, 32, 83, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 85, 98, 32, 61, 32, 123, 125, 44, 32, 87, 98, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 86, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 83, 69, 82, 58, 32, 34, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 79, 71, 78, 65, 77, 69, 58, 32, 34, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 65, 84, 72, 58, 32, 34, 47, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 87, 68, 58, 32, 34, 47, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 79, 77, 69, 58, 32, 34, 47, 104, 111, 109, 101, 47, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 65, 78, 71, 58, 32, 40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 32, 38, 38, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 46, 108, 97, 110, 103, 117, 97, 103, 101, 115, 32, 38, 38, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 46, 108, 97, 110, 103, 117, 97, 103, 101, 115, 91, 48, 93, 32, 124, 124, 32, 34, 67, 34, 41, 46, 114, 101, 112, 108, 97, 99, 101, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 45, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 95, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 32, 43, 32, 34, 46, 85, 84, 70, 45, 56, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 104, 97, 32, 124, 124, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112, 114, 111, 103, 114, 97, 109, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 85, 98, 41, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 85, 98, 91, 98, 93, 32, 63, 32, 100, 101, 108, 101, 116, 101, 32, 97, 91, 98, 93, 32, 58, 32, 97, 91, 98, 93, 32, 61, 32, 85, 98, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 97, 41, 32, 99, 46, 112, 117, 115, 104, 40, 96, 36, 123, 98, 125, 61, 36, 123, 97, 91, 98, 93, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 98, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 86, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 86, 98, 44, 32, 88, 98, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 114, 121, 112, 116, 111, 32, 38, 38, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 114, 121, 112, 116, 111, 46, 103, 101, 116, 82, 97, 110, 100, 111, 109, 86, 97, 108, 117, 101, 115, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 97, 41, 32, 61, 62, 32, 99, 114, 121, 112, 116, 111, 46, 103, 101, 116, 82, 97, 110, 100, 111, 109, 86, 97, 108, 117, 101, 115, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 97, 40, 34, 105, 110, 105, 116, 82, 97, 110, 100, 111, 109, 68, 101, 118, 105, 99, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 89, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 89, 98, 32, 61, 32, 88, 98, 40, 41, 41, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 76, 32, 61, 32, 104, 46, 73, 110, 116, 101, 114, 110, 97, 108, 69, 114, 114, 111, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 112, 101, 114, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 34, 73, 110, 116, 101, 114, 110, 97, 108, 69, 114, 114, 111, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 90, 98, 32, 61, 32, 65, 114, 114, 97, 121, 40, 50, 53, 54, 41, 44, 32, 36, 98, 32, 61, 32, 48, 59, 32, 50, 53, 54, 32, 62, 32, 36, 98, 59, 32, 43, 43, 36, 98, 41, 32, 90, 98, 91, 36, 98, 93, 32, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 36, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 76, 97, 32, 61, 32, 90, 98, 59, 10, 32, 32, 32, 32, 32, 32, 80, 32, 61, 32, 104, 46, 66, 105, 110, 100, 105, 110, 103, 69, 114, 114, 111, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 112, 101, 114, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 34, 66, 105, 110, 100, 105, 110, 103, 69, 114, 114, 111, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 88, 97, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 65, 108, 105, 97, 115, 79, 102, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 116, 104, 105, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 88, 97, 32, 38, 38, 32, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 88, 97, 41, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 116, 104, 105, 115, 46, 65, 97, 46, 68, 97, 46, 66, 97, 44, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 65, 97, 32, 61, 32, 97, 46, 65, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 46, 65, 97, 46, 68, 97, 46, 66, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 97, 32, 61, 32, 97, 46, 65, 97, 46, 67, 97, 59, 32, 98, 46, 71, 97, 59, 32, 41, 32, 99, 32, 61, 32, 98, 46, 81, 97, 40, 99, 41, 44, 32, 98, 32, 61, 32, 98, 46, 71, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 100, 46, 71, 97, 59, 32, 41, 32, 97, 32, 61, 32, 100, 46, 81, 97, 40, 97, 41, 44, 32, 100, 32, 61, 32, 100, 46, 71, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 61, 61, 61, 32, 100, 32, 38, 38, 32, 99, 32, 61, 61, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 111, 110, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 32, 124, 124, 32, 79, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 65, 97, 46, 80, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 65, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 43, 61, 32, 49, 44, 32, 116, 104, 105, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 81, 44, 32, 98, 32, 61, 32, 79, 98, 106, 101, 99, 116, 44, 32, 99, 32, 61, 32, 98, 46, 99, 114, 101, 97, 116, 101, 44, 32, 100, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79, 102, 40, 116, 104, 105, 115, 41, 44, 32, 101, 32, 61, 32, 116, 104, 105, 115, 46, 65, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 99, 97, 108, 108, 40, 98, 44, 32, 100, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 65, 97, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 123, 32, 99, 111, 117, 110, 116, 58, 32, 101, 46, 99, 111, 117, 110, 116, 44, 32, 79, 97, 58, 32, 101, 46, 79, 97, 44, 32, 80, 97, 58, 32, 101, 46, 80, 97, 44, 32, 67, 97, 58, 32, 101, 46, 67, 97, 44, 32, 68, 97, 58, 32, 101, 46, 68, 97, 44, 32, 70, 97, 58, 32, 101, 46, 70, 97, 44, 32, 72, 97, 58, 32, 101, 46, 72, 97, 32, 125, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 65, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 65, 97, 46, 79, 97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 91, 34, 100, 101, 108, 101, 116, 101, 34, 93, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 32, 124, 124, 32, 79, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 65, 97, 46, 79, 97, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 65, 97, 46, 80, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 79, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100, 32, 102, 111, 114, 32, 100, 101, 108, 101, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 81, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 116, 104, 105, 115, 46, 65, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 45, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 38, 38, 32, 40, 97, 46, 70, 97, 32, 63, 32, 97, 46, 72, 97, 46, 75, 97, 40, 97, 46, 70, 97, 41, 32, 58, 32, 97, 46, 68, 97, 46, 66, 97, 46, 75, 97, 40, 97, 46, 67, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 46, 80, 97, 32, 124, 124, 32, 40, 116, 104, 105, 115, 46, 65, 97, 46, 70, 97, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 32, 61, 32, 118, 111, 105, 100, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 68, 101, 108, 101, 116, 101, 100, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 33, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 76, 97, 116, 101, 114, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 46, 67, 97, 32, 124, 124, 32, 79, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 65, 97, 46, 79, 97, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 65, 97, 46, 80, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 79, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100, 32, 102, 111, 114, 32, 100, 101, 108, 101, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 46, 79, 97, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 105, 98, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 98, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 89, 97, 32, 38, 38, 32, 40, 97, 32, 61, 32, 116, 104, 105, 115, 46, 89, 97, 40, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 87, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 75, 97, 63, 46, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 83, 97, 32, 63, 32, 86, 97, 40, 116, 104, 105, 115, 46, 66, 97, 46, 77, 97, 44, 32, 123, 32, 68, 97, 58, 32, 116, 104, 105, 115, 46, 105, 98, 44, 32, 67, 97, 58, 32, 99, 44, 32, 72, 97, 58, 32, 116, 104, 105, 115, 44, 32, 70, 97, 58, 32, 97, 32, 125, 41, 32, 58, 32, 86, 97, 40, 116, 104, 105, 115, 46, 66, 97, 46, 77, 97, 44, 32, 123, 32, 68, 97, 58, 32, 116, 104, 105, 115, 44, 32, 67, 97, 58, 32, 97, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 99, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 87, 97, 40, 97, 41, 44, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 85, 97, 40, 116, 104, 105, 115, 46, 66, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 100, 46, 65, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 100, 46, 65, 97, 46, 67, 97, 32, 61, 32, 99, 44, 32, 100, 46, 65, 97, 46, 70, 97, 32, 61, 32, 97, 44, 32, 100, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 100, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 87, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 116, 104, 105, 115, 46, 66, 97, 46, 98, 98, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 83, 97, 91, 100, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 100, 41, 32, 114, 101, 116, 117, 114, 110, 32, 98, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 116, 104, 105, 115, 46, 82, 97, 32, 63, 32, 100, 46, 90, 97, 32, 58, 32, 100, 46, 112, 111, 105, 110, 116, 101, 114, 84, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 82, 97, 40, 99, 44, 32, 116, 104, 105, 115, 46, 66, 97, 44, 32, 100, 46, 66, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 32, 61, 61, 61, 32, 101, 32, 63, 32, 98, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 41, 32, 58, 32, 116, 104, 105, 115, 46, 83, 97, 32, 63, 32, 86, 97, 40, 100, 46, 66, 97, 46, 77, 97, 44, 32, 123, 32, 68, 97, 58, 32, 100, 44, 32, 67, 97, 58, 32, 101, 44, 32, 72, 97, 58, 32, 116, 104, 105, 115, 44, 32, 70, 97, 58, 32, 97, 32, 125, 41, 32, 58, 32, 86, 97, 40, 100, 46, 66, 97, 46, 77, 97, 44, 32, 123, 32, 68, 97, 58, 32, 100, 44, 32, 67, 97, 58, 32, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 109, 98, 32, 61, 32, 104, 46, 85, 110, 98, 111, 117, 110, 100, 84, 121, 112, 101, 69, 114, 114, 111, 114, 32, 61, 32, 40, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 89, 97, 40, 98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 69, 114, 114, 111, 114, 40, 100, 41, 46, 115, 116, 97, 99, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 100, 32, 38, 38, 32, 40, 116, 104, 105, 115, 46, 115, 116, 97, 99, 107, 32, 61, 32, 116, 104, 105, 115, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 43, 32, 34, 92, 110, 34, 32, 43, 32, 100, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 94, 69, 114, 114, 111, 114, 40, 58, 91, 94, 92, 110, 93, 42, 41, 63, 92, 110, 47, 44, 32, 34, 34, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 97, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 116, 111, 83, 116, 114, 105, 110, 103, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 63, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 58, 32, 96, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 58, 32, 36, 123, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 40, 69, 114, 114, 111, 114, 44, 32, 34, 85, 110, 98, 111, 117, 110, 100, 84, 121, 112, 101, 69, 114, 114, 111, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 85, 46, 112, 117, 115, 104, 40, 48, 44, 32, 49, 44, 32, 118, 111, 105, 100, 32, 48, 44, 32, 49, 44, 32, 110, 117, 108, 108, 44, 32, 49, 44, 32, 116, 114, 117, 101, 44, 32, 49, 44, 32, 102, 97, 108, 115, 101, 44, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 99, 111, 117, 110, 116, 95, 101, 109, 118, 97, 108, 95, 104, 97, 110, 100, 108, 101, 115, 32, 61, 32, 40, 41, 32, 61, 62, 32, 85, 46, 108, 101, 110, 103, 116, 104, 32, 47, 32, 50, 32, 45, 32, 53, 32, 45, 32, 118, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 99, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 117, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 65, 115, 115, 101, 114, 116, 105, 111, 110, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 97, 32, 63, 32, 69, 97, 40, 97, 41, 32, 58, 32, 34, 34, 125, 44, 32, 97, 116, 58, 32, 96, 32, 43, 32, 91, 98, 32, 63, 32, 98, 32, 63, 32, 69, 97, 40, 98, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34, 117, 110, 107, 110, 111, 119, 110, 32, 102, 105, 108, 101, 110, 97, 109, 101, 34, 44, 32, 99, 44, 32, 100, 32, 63, 32, 100, 32, 63, 32, 69, 97, 40, 100, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34, 117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 34, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 106, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 110, 101, 119, 32, 70, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 67, 97, 32, 43, 32, 49, 54, 32, 62, 62, 32, 50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 67, 97, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 67, 97, 32, 43, 32, 56, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 71, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 97, 43, 43, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 71, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 80, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 78, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 82, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 84, 58, 32, 40, 41, 32, 61, 62, 32, 117, 97, 40, 34, 34, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 73, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 73, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 98, 46, 85, 97, 44, 32, 100, 32, 61, 32, 98, 46, 75, 97, 44, 32, 101, 32, 61, 32, 98, 46, 88, 97, 44, 32, 102, 32, 61, 32, 101, 46, 109, 97, 112, 40, 40, 107, 41, 32, 61, 62, 32, 107, 46, 103, 98, 41, 46, 99, 111, 110, 99, 97, 116, 40, 101, 46, 109, 97, 112, 40, 40, 107, 41, 32, 61, 62, 32, 107, 46, 109, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 97, 93, 44, 32, 102, 44, 32, 40, 107, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 108, 44, 32, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61, 32, 107, 91, 110, 93, 44, 32, 113, 32, 61, 32, 108, 46, 101, 98, 44, 32, 114, 32, 61, 32, 108, 46, 102, 98, 44, 32, 65, 32, 61, 32, 107, 91, 110, 32, 43, 32, 101, 46, 108, 101, 110, 103, 116, 104, 93, 44, 32, 118, 32, 61, 32, 108, 46, 108, 98, 44, 32, 119, 32, 61, 32, 108, 46, 110, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 91, 108, 46, 97, 98, 93, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 58, 32, 40, 69, 41, 32, 61, 62, 32, 109, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 113, 40, 114, 44, 32, 69, 41, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 114, 105, 116, 101, 58, 32, 40, 69, 44, 32, 100, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 66, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 40, 119, 44, 32, 69, 44, 32, 65, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 66, 44, 32, 100, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 40, 66, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 46, 110, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 110, 32, 61, 32, 123, 125, 44, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 109, 32, 105, 110, 32, 103, 41, 32, 110, 91, 109, 93, 32, 61, 32, 103, 91, 109, 93, 46, 114, 101, 97, 100, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 108, 44, 32, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 109, 32, 105, 110, 32, 103, 41, 32, 105, 102, 32, 40, 33, 40, 109, 32, 105, 110, 32, 110, 41, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 77, 105, 115, 115, 105, 110, 103, 32, 102, 105, 101, 108, 100, 58, 32, 34, 36, 123, 109, 125, 34, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 113, 32, 61, 32, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 109, 32, 105, 110, 32, 103, 41, 32, 103, 91, 109, 93, 46, 119, 114, 105, 116, 101, 40, 113, 44, 32, 110, 91, 109, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 108, 32, 38, 38, 32, 108, 46, 112, 117, 115, 104, 40, 100, 44, 32, 113, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 113, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 58, 32, 100, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 70, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 33, 33, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 44, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 32, 63, 32, 99, 32, 58, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 120, 91, 101, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 44, 32, 109, 44, 32, 113, 44, 32, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 79, 40, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 83, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 38, 38, 32, 40, 103, 32, 61, 32, 83, 40, 107, 44, 32, 103, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 32, 38, 38, 32, 40, 110, 32, 61, 32, 83, 40, 108, 44, 32, 110, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 32, 61, 32, 83, 40, 113, 44, 32, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 65, 32, 61, 32, 97, 98, 40, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 36, 97, 40, 65, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 109, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 97, 44, 32, 98, 44, 32, 99, 93, 44, 32, 100, 32, 63, 32, 91, 100, 93, 32, 58, 32, 91, 93, 44, 32, 40, 118, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 118, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 119, 32, 61, 32, 118, 46, 66, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 69, 32, 61, 32, 119, 46, 77, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 69, 32, 61, 32, 88, 97, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 89, 97, 40, 109, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 78, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79, 102, 40, 116, 104, 105, 115, 41, 32, 33, 61, 61, 32, 100, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 85, 115, 101, 32, 39, 110, 101, 119, 39, 32, 116, 111, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 34, 32, 43, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 66, 46, 76, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 109, 32, 43, 32, 34, 32, 104, 97, 115, 32, 110, 111, 32, 97, 99, 99, 101, 115, 115, 105, 98, 108, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 117, 98, 32, 61, 32, 66, 46, 76, 97, 91, 78, 97, 46, 108, 101, 110, 103, 116, 104, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 117, 98, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 84, 114, 105, 101, 100, 32, 116, 111, 32, 105, 110, 118, 111, 107, 101, 32, 99, 116, 111, 114, 32, 111, 102, 32, 36, 123, 109, 125, 32, 119, 105, 116, 104, 32, 105, 110, 118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 40, 36, 123, 78, 97, 46, 108, 101, 110, 103, 116, 104, 125, 41, 32, 45, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 40, 36, 123, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121, 115, 40, 66, 46, 76, 97, 41, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 125, 41, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 105, 110, 115, 116, 101, 97, 100, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 117, 98, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 44, 32, 78, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 69, 44, 32, 123, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 118, 32, 125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 32, 61, 32, 100, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 66, 32, 61, 32, 110, 101, 119, 32, 98, 98, 40, 109, 44, 32, 118, 44, 32, 100, 97, 44, 32, 114, 44, 32, 119, 44, 32, 102, 44, 32, 103, 44, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 66, 46, 71, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 101, 97, 32, 61, 32, 66, 46, 71, 97, 41, 46, 86, 97, 32, 63, 63, 32, 40, 101, 97, 46, 86, 97, 32, 61, 32, 91, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 46, 71, 97, 46, 86, 97, 46, 112, 117, 115, 104, 40, 66, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 32, 61, 32, 110, 101, 119, 32, 105, 98, 40, 109, 44, 32, 66, 44, 32, 116, 114, 117, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 97, 32, 61, 32, 110, 101, 119, 32, 105, 98, 40, 109, 32, 43, 32, 34, 42, 34, 44, 32, 66, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 32, 61, 32, 110, 101, 119, 32, 105, 98, 40, 109, 32, 43, 32, 34, 32, 99, 111, 110, 115, 116, 42, 34, 44, 32, 66, 44, 32, 102, 97, 108, 115, 101, 44, 32, 116, 114, 117, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 97, 91, 97, 93, 32, 61, 32, 123, 32, 112, 111, 105, 110, 116, 101, 114, 84, 121, 112, 101, 58, 32, 101, 97, 44, 32, 90, 97, 58, 32, 69, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 106, 98, 40, 65, 44, 32, 118, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 119, 44, 32, 101, 97, 44, 32, 69, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 113, 98, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 83, 40, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 91, 97, 93, 44, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 103, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 96, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 36, 123, 103, 46, 110, 97, 109, 101, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 103, 46, 66, 97, 46, 76, 97, 32, 38, 38, 32, 40, 103, 46, 66, 97, 46, 76, 97, 32, 61, 32, 91, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 103, 46, 66, 97, 46, 76, 97, 91, 98, 32, 45, 32, 49, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 115, 32, 119, 105, 116, 104, 32, 105, 100, 101, 110, 116, 105, 99, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 40, 36, 123, 98, 32, 45, 32, 49, 125, 41, 32, 102, 111, 114, 32, 99, 108, 97, 115, 115, 32, 39, 36, 123, 103, 46, 110, 97, 109, 101, 125, 39, 33, 32, 79, 118, 101, 114, 108, 111, 97, 100, 32, 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 32, 105, 115, 32, 99, 117, 114, 114, 101, 110, 116, 108, 121, 32, 111, 110, 108, 121, 32, 112, 101, 114, 102, 111, 114, 109, 101, 100, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 99, 111, 117, 110, 116, 44, 32, 110, 111, 116, 32, 97, 99, 116, 117, 97, 108, 32, 116, 121, 112, 101, 32, 105, 110, 102, 111, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 46, 66, 97, 46, 76, 97, 91, 98, 32, 45, 32, 49, 93, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 103, 46, 110, 97, 109, 101, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 107, 44, 32, 40, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 46, 115, 112, 108, 105, 99, 101, 40, 49, 44, 32, 48, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 46, 66, 97, 46, 76, 97, 91, 98, 32, 45, 32, 49, 93, 32, 61, 32, 115, 98, 40, 108, 44, 32, 110, 44, 32, 110, 117, 108, 108, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 113, 98, 40, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 116, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 83, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 91, 97, 93, 44, 32, 40, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 109, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 97, 108, 108, 32, 36, 123, 113, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 32, 61, 32, 110, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 113, 32, 61, 32, 96, 36, 123, 110, 46, 110, 97, 109, 101, 125, 46, 36, 123, 98, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 64, 64, 34, 41, 32, 38, 38, 32, 40, 98, 32, 61, 32, 83, 121, 109, 98, 111, 108, 91, 98, 46, 115, 117, 98, 115, 116, 114, 105, 110, 103, 40, 50, 41, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 38, 38, 32, 110, 46, 66, 97, 46, 106, 98, 46, 112, 117, 115, 104, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 32, 61, 32, 110, 46, 66, 97, 46, 77, 97, 44, 32, 65, 32, 61, 32, 114, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 65, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 65, 46, 69, 97, 32, 38, 38, 32, 65, 46, 99, 108, 97, 115, 115, 78, 97, 109, 101, 32, 33, 61, 61, 32, 110, 46, 110, 97, 109, 101, 32, 38, 38, 32, 65, 46, 78, 97, 32, 61, 61, 61, 32, 99, 32, 45, 32, 50, 32, 63, 32, 40, 109, 46, 78, 97, 32, 61, 32, 99, 32, 45, 32, 50, 44, 32, 109, 46, 99, 108, 97, 115, 115, 78, 97, 109, 101, 32, 61, 32, 110, 46, 110, 97, 109, 101, 44, 32, 114, 91, 98, 93, 32, 61, 32, 109, 41, 32, 58, 32, 40, 90, 97, 40, 114, 44, 32, 98, 44, 32, 113, 41, 44, 32, 114, 91, 98, 93, 46, 69, 97, 91, 99, 32, 45, 32, 50, 93, 32, 61, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 108, 44, 32, 40, 118, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 115, 98, 40, 113, 44, 32, 118, 44, 32, 110, 44, 32, 102, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 114, 91, 98, 93, 46, 69, 97, 32, 63, 32, 40, 118, 46, 78, 97, 32, 61, 32, 99, 32, 45, 32, 50, 44, 32, 114, 91, 98, 93, 32, 61, 32, 118, 41, 32, 58, 32, 114, 91, 98, 93, 46, 69, 97, 91, 99, 32, 45, 32, 50, 93, 32, 61, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 89, 58, 32, 40, 97, 41, 32, 61, 62, 32, 77, 40, 97, 44, 32, 120, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 68, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 118, 97, 108, 117, 101, 115, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 46, 118, 97, 108, 117, 101, 115, 91, 102, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 102, 44, 32, 107, 41, 32, 61, 62, 32, 107, 46, 118, 97, 108, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 121, 98, 40, 98, 44, 32, 99, 44, 32, 100, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 36, 97, 40, 98, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 122, 98, 40, 97, 44, 32, 34, 101, 110, 117, 109, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 100, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 100, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 108, 117, 101, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 99, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 89, 97, 40, 96, 36, 123, 100, 46, 110, 97, 109, 101, 125, 95, 36, 123, 98, 125, 96, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 118, 97, 108, 117, 101, 115, 91, 99, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 65, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 100, 41, 32, 61, 62, 32, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 65, 98, 40, 98, 44, 32, 99, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 113, 98, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 79, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 116, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 83, 40, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 36, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 97, 108, 108, 32, 36, 123, 97, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 45, 32, 49, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 93, 44, 32, 107, 44, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 106, 98, 40, 97, 44, 32, 115, 98, 40, 97, 44, 32, 91, 103, 91, 48, 93, 44, 32, 110, 117, 108, 108, 93, 46, 99, 111, 110, 99, 97, 116, 40, 103, 46, 115, 108, 105, 99, 101, 40, 49, 41, 41, 44, 32, 110, 117, 108, 108, 44, 32, 101, 44, 32, 102, 41, 44, 32, 98, 32, 45, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 49, 32, 61, 61, 61, 32, 101, 32, 38, 38, 32, 40, 101, 32, 61, 32, 52, 50, 57, 52, 57, 54, 55, 50, 57, 53, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 51, 50, 32, 45, 32, 56, 32, 42, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 103, 32, 60, 60, 32, 102, 32, 62, 62, 62, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 98, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 117, 110, 115, 105, 103, 110, 101, 100, 34, 41, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 103, 44, 32, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 32, 62, 62, 62, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 103, 44, 32, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 32, 110, 97, 109, 101, 58, 32, 98, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 101, 44, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 107, 44, 32, 73, 97, 58, 32, 56, 44, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 66, 98, 40, 98, 44, 32, 99, 44, 32, 48, 32, 33, 61, 61, 32, 100, 41, 44, 32, 74, 97, 58, 32, 110, 117, 108, 108, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 103, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 101, 40, 117, 46, 98, 117, 102, 102, 101, 114, 44, 32, 68, 91, 102, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 44, 32, 68, 91, 102, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 91, 73, 110, 116, 56, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 44, 32, 73, 110, 116, 49, 54, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 49, 54, 65, 114, 114, 97, 121, 44, 32, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 70, 108, 111, 97, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 70, 108, 111, 97, 116, 54, 52, 65, 114, 114, 97, 121, 93, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 79, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 32, 110, 97, 109, 101, 58, 32, 99, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 100, 44, 32, 73, 97, 58, 32, 56, 44, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 100, 32, 125, 44, 32, 123, 32, 104, 98, 58, 32, 116, 114, 117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 67, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 44, 32, 109, 44, 32, 113, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 79, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 83, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 83, 40, 107, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 32, 61, 32, 83, 40, 108, 44, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 32, 61, 32, 83, 40, 109, 44, 32, 113, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 91, 97, 93, 44, 32, 91, 98, 93, 44, 32, 40, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 32, 61, 32, 114, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 110, 101, 119, 32, 105, 98, 40, 99, 44, 32, 114, 46, 66, 97, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 116, 114, 117, 101, 44, 32, 114, 44, 32, 100, 44, 32, 102, 44, 32, 103, 44, 32, 110, 44, 32, 113, 41, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 90, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 100, 32, 61, 32, 68, 91, 99, 32, 62, 62, 32, 50, 93, 44, 32, 101, 32, 61, 32, 99, 32, 43, 32, 52, 44, 32, 102, 44, 32, 107, 32, 61, 32, 101, 44, 32, 103, 32, 61, 32, 48, 59, 32, 103, 32, 60, 61, 32, 100, 59, 32, 43, 43, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 101, 32, 43, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 32, 61, 61, 32, 100, 32, 124, 124, 32, 48, 32, 61, 61, 32, 120, 91, 108, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 32, 61, 32, 107, 32, 63, 32, 69, 97, 40, 107, 44, 32, 108, 32, 45, 32, 107, 41, 32, 58, 32, 34, 34, 44, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 102, 32, 63, 32, 102, 32, 61, 32, 107, 32, 58, 32, 40, 102, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 48, 41, 44, 32, 102, 32, 43, 61, 32, 107, 41, 44, 32, 107, 32, 61, 32, 108, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 44, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 38, 38, 32, 40, 100, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 100, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 44, 32, 102, 32, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 102, 32, 124, 124, 32, 100, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 32, 124, 124, 32, 100, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100, 65, 114, 114, 97, 121, 32, 124, 124, 32, 100, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 73, 110, 116, 56, 65, 114, 114, 97, 121, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 34, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 115, 116, 100, 58, 58, 115, 116, 114, 105, 110, 103, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 107, 32, 61, 32, 101, 32, 61, 32, 48, 59, 32, 107, 32, 60, 32, 100, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 100, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 50, 55, 32, 62, 61, 32, 103, 32, 63, 32, 101, 43, 43, 32, 58, 32, 50, 48, 52, 55, 32, 62, 61, 32, 103, 32, 63, 32, 101, 32, 43, 61, 32, 50, 32, 58, 32, 53, 53, 50, 57, 54, 32, 60, 61, 32, 103, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 103, 32, 63, 32, 40, 101, 32, 43, 61, 32, 52, 44, 32, 43, 43, 107, 41, 32, 58, 32, 101, 32, 43, 61, 32, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 101, 32, 61, 32, 100, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 32, 61, 32, 97, 99, 40, 52, 32, 43, 32, 101, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 107, 32, 43, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 107, 32, 62, 62, 32, 50, 93, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 41, 32, 72, 40, 100, 44, 32, 103, 44, 32, 101, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 101, 59, 32, 43, 43, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 100, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 53, 53, 32, 60, 32, 108, 41, 32, 116, 104, 114, 111, 119, 32, 84, 40, 103, 41, 44, 32, 110, 101, 119, 32, 80, 40, 34, 83, 116, 114, 105, 110, 103, 32, 104, 97, 115, 32, 85, 84, 70, 45, 49, 54, 32, 99, 111, 100, 101, 32, 117, 110, 105, 116, 115, 32, 116, 104, 97, 116, 32, 100, 111, 32, 110, 111, 116, 32, 102, 105, 116, 32, 105, 110, 32, 56, 32, 98, 105, 116, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 120, 91, 103, 32, 43, 32, 102, 93, 32, 61, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 102, 111, 114, 32, 40, 102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 101, 59, 32, 43, 43, 102, 41, 32, 120, 91, 103, 32, 43, 32, 102, 93, 32, 61, 32, 100, 91, 102, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 99, 32, 38, 38, 32, 99, 46, 112, 117, 115, 104, 40, 84, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 79, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 69, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 70, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 71, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 122, 91, 103, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 52, 32, 61, 61, 61, 32, 98, 32, 38, 38, 32, 40, 100, 32, 61, 32, 72, 98, 44, 32, 101, 32, 61, 32, 73, 98, 44, 32, 102, 32, 61, 32, 74, 98, 44, 32, 107, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 68, 91, 103, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 68, 91, 103, 32, 62, 62, 32, 50, 93, 44, 32, 110, 44, 32, 109, 32, 61, 32, 103, 32, 43, 32, 52, 44, 32, 113, 32, 61, 32, 48, 59, 32, 113, 32, 60, 61, 32, 108, 59, 32, 43, 43, 113, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 32, 61, 32, 103, 32, 43, 32, 52, 32, 43, 32, 113, 32, 42, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 113, 32, 61, 61, 32, 108, 32, 124, 124, 32, 48, 32, 61, 61, 32, 107, 40, 114, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 100, 40, 109, 44, 32, 114, 32, 45, 32, 109, 41, 44, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 110, 32, 63, 32, 110, 32, 61, 32, 109, 32, 58, 32, 40, 110, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 48, 41, 44, 32, 110, 32, 43, 61, 32, 109, 41, 44, 32, 109, 32, 61, 32, 114, 32, 43, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 115, 116, 114, 105, 110, 103, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 108, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 67, 43, 43, 32, 115, 116, 114, 105, 110, 103, 32, 116, 121, 112, 101, 32, 36, 123, 99, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 110, 32, 61, 32, 102, 40, 108, 41, 44, 32, 109, 32, 61, 32, 97, 99, 40, 52, 32, 43, 32, 110, 32, 43, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 109, 32, 62, 62, 32, 50, 93, 32, 61, 32, 110, 32, 47, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 40, 108, 44, 32, 109, 32, 43, 32, 52, 44, 32, 110, 32, 43, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 103, 32, 38, 38, 32, 103, 46, 112, 117, 115, 104, 40, 84, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 73, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 91, 97, 93, 32, 61, 32, 123, 32, 110, 97, 109, 101, 58, 32, 79, 40, 98, 41, 44, 32, 85, 97, 58, 32, 83, 40, 99, 44, 32, 100, 41, 44, 32, 75, 97, 58, 32, 83, 40, 101, 44, 32, 102, 41, 44, 32, 88, 97, 58, 32, 91, 93, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 91, 97, 93, 46, 88, 97, 46, 112, 117, 115, 104, 40, 123, 32, 97, 98, 58, 32, 79, 40, 98, 41, 44, 32, 103, 98, 58, 32, 99, 44, 32, 101, 98, 58, 32, 83, 40, 100, 44, 32, 101, 41, 44, 32, 102, 98, 58, 32, 102, 44, 32, 109, 98, 58, 32, 107, 44, 32, 108, 98, 58, 32, 83, 40, 103, 44, 32, 108, 41, 44, 32, 110, 98, 58, 32, 110, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 36, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 79, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 40, 97, 44, 32, 123, 32, 112, 98, 58, 32, 116, 114, 117, 101, 44, 32, 110, 97, 109, 101, 58, 32, 98, 44, 32, 73, 97, 58, 32, 48, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 75, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 98, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 73, 110, 102, 105, 110, 105, 116, 121, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 86, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 122, 98, 40, 98, 44, 32, 34, 101, 109, 118, 97, 108, 58, 58, 97, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 76, 98, 40, 98, 44, 32, 99, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 77, 98, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 86, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 40, 110, 117, 108, 108, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 87, 58, 32, 119, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 69, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 86, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 86, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 61, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 111, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 79, 98, 40, 97, 44, 32, 98, 41, 44, 32, 101, 32, 61, 32, 100, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 45, 45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 96, 109, 101, 116, 104, 111, 100, 67, 97, 108, 108, 101, 114, 60, 40, 36, 123, 100, 46, 109, 97, 112, 40, 40, 107, 41, 32, 61, 62, 32, 107, 46, 110, 97, 109, 101, 41, 46, 106, 111, 105, 110, 40, 34, 44, 32, 34, 41, 125, 41, 32, 61, 62, 32, 36, 123, 101, 46, 110, 97, 109, 101, 125, 62, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 78, 98, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 97, 40, 98, 44, 32, 40, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 109, 32, 61, 32, 48, 44, 32, 113, 32, 61, 32, 48, 59, 32, 113, 32, 60, 32, 97, 59, 32, 43, 43, 113, 41, 32, 102, 91, 113, 93, 32, 61, 32, 100, 91, 113, 93, 46, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40, 110, 32, 43, 32, 109, 41, 44, 32, 109, 32, 43, 61, 32, 100, 91, 113, 93, 46, 73, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 32, 61, 32, 49, 32, 61, 61, 61, 32, 99, 32, 63, 32, 80, 98, 40, 103, 44, 32, 102, 41, 32, 58, 32, 103, 46, 97, 112, 112, 108, 121, 40, 107, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 76, 98, 40, 101, 44, 32, 108, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 122, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 40, 85, 91, 97, 32, 43, 32, 49, 93, 32, 43, 61, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 86, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 122, 98, 40, 97, 44, 32, 34, 95, 101, 109, 118, 97, 108, 95, 116, 97, 107, 101, 95, 118, 97, 108, 117, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 103, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 71, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 81, 98, 91, 97, 93, 32, 38, 38, 32, 40, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 81, 98, 91, 97, 93, 46, 105, 100, 41, 44, 32, 100, 101, 108, 101, 116, 101, 32, 81, 98, 91, 97, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 81, 98, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 98, 40, 40, 41, 32, 61, 62, 32, 98, 99, 40, 97, 44, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 81, 98, 91, 97, 93, 32, 61, 32, 123, 32, 105, 100, 58, 32, 99, 44, 32, 113, 98, 58, 32, 98, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 72, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 40, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 41, 41, 46, 103, 101, 116, 70, 117, 108, 108, 89, 101, 97, 114, 40, 41, 44, 32, 102, 32, 61, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 101, 44, 32, 48, 44, 32, 49, 41, 46, 103, 101, 116, 84, 105, 109, 101, 122, 111, 110, 101, 79, 102, 102, 115, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 101, 44, 32, 54, 44, 32, 49, 41, 46, 103, 101, 116, 84, 105, 109, 101, 122, 111, 110, 101, 79, 102, 102, 115, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 54, 48, 32, 42, 32, 77, 97, 116, 104, 46, 109, 97, 120, 40, 102, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 78, 117, 109, 98, 101, 114, 40, 102, 32, 33, 61, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 40, 107, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 77, 97, 116, 104, 46, 97, 98, 115, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 96, 85, 84, 67, 36, 123, 48, 32, 60, 61, 32, 107, 32, 63, 32, 34, 45, 34, 32, 58, 32, 34, 43, 34, 125, 36, 123, 83, 116, 114, 105, 110, 103, 40, 77, 97, 116, 104, 46, 102, 108, 111, 111, 114, 40, 103, 32, 47, 32, 54, 48, 41, 41, 46, 112, 97, 100, 83, 116, 97, 114, 116, 40, 50, 44, 32, 34, 48, 34, 41, 125, 36, 123, 83, 116, 114, 105, 110, 103, 40, 103, 32, 37, 32, 54, 48, 41, 46, 112, 97, 100, 83, 116, 97, 114, 116, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 48, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 98, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 60, 32, 102, 32, 63, 32, 40, 72, 40, 97, 44, 32, 99, 44, 32, 49, 55, 41, 44, 32, 72, 40, 98, 44, 32, 100, 44, 32, 49, 55, 41, 41, 32, 58, 32, 40, 72, 40, 97, 44, 32, 100, 44, 32, 49, 55, 41, 44, 32, 72, 40, 98, 44, 32, 99, 44, 32, 49, 55, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 58, 32, 40, 41, 32, 61, 62, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 120, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 62, 62, 62, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 49, 52, 55, 52, 56, 51, 54, 52, 56, 32, 60, 32, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 49, 59, 32, 52, 32, 62, 61, 32, 99, 59, 32, 99, 32, 42, 61, 32, 50, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 32, 42, 32, 40, 49, 32, 43, 32, 48, 46, 50, 32, 47, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 77, 97, 116, 104, 46, 109, 105, 110, 40, 100, 44, 32, 97, 32, 43, 32, 49, 48, 48, 54, 54, 51, 50, 57, 54, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 40, 77, 97, 116, 104, 46, 109, 105, 110, 40, 50, 49, 52, 55, 52, 56, 51, 54, 52, 56, 44, 32, 54, 53, 53, 51, 54, 32, 42, 32, 77, 97, 116, 104, 46, 99, 101, 105, 108, 40, 77, 97, 116, 104, 46, 109, 97, 120, 40, 97, 44, 32, 100, 41, 32, 47, 32, 54, 53, 53, 51, 54, 41, 41, 32, 45, 32, 107, 97, 46, 98, 117, 102, 102, 101, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 43, 32, 54, 53, 53, 51, 53, 41, 32, 47, 32, 54, 53, 53, 51, 54, 32, 124, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 97, 46, 103, 114, 111, 119, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 86, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 98, 40, 41, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 98, 32, 43, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 68, 91, 97, 32, 43, 32, 52, 32, 42, 32, 101, 32, 62, 62, 32, 50, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 100, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 102, 41, 32, 117, 91, 101, 43, 43, 93, 32, 61, 32, 100, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 91, 101, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 43, 61, 32, 100, 46, 108, 101, 110, 103, 116, 104, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 88, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 87, 98, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 100, 32, 43, 61, 32, 101, 46, 108, 101, 110, 103, 116, 104, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 83, 58, 32, 40, 41, 32, 61, 62, 32, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 81, 58, 32, 40, 41, 32, 61, 62, 32, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 58, 32, 99, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 58, 32, 100, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 58, 32, 101, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 66, 58, 32, 102, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 58, 32, 103, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 58, 32, 104, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 58, 32, 105, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 58, 32, 106, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 58, 32, 107, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 85, 58, 32, 83, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 98, 40, 120, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 97, 32, 43, 32, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 87, 59, 10, 32, 32, 32, 32, 32, 32, 40, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 32, 61, 32, 100, 46, 101, 120, 112, 111, 114, 116, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 97, 32, 61, 32, 87, 46, 100, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 32, 61, 32, 87, 46, 103, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 87, 46, 101, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 70, 45, 45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 109, 111, 110, 105, 116, 111, 114, 82, 117, 110, 68, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 63, 46, 40, 70, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 32, 70, 32, 38, 38, 32, 71, 32, 38, 38, 32, 40, 100, 32, 61, 32, 71, 44, 32, 71, 32, 61, 32, 110, 117, 108, 108, 44, 32, 100, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 87, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 70, 43, 43, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 109, 111, 110, 105, 116, 111, 114, 82, 117, 110, 68, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 63, 46, 40, 70, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 123, 32, 97, 58, 32, 108, 99, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 104, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 40, 98, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 77, 111, 100, 117, 108, 101, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 32, 99, 97, 108, 108, 98, 97, 99, 107, 32, 102, 97, 105, 108, 101, 100, 32, 119, 105, 116, 104, 32, 101, 114, 114, 111, 114, 58, 32, 36, 123, 100, 125, 96, 41, 44, 32, 98, 97, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 97, 32, 63, 63, 32, 40, 119, 97, 32, 61, 32, 118, 97, 40, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 41, 32, 63, 32, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 32, 58, 32, 104, 46, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 32, 63, 32, 104, 46, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 40, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 44, 32, 112, 41, 32, 58, 32, 112, 32, 43, 32, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 119, 97, 105, 116, 32, 122, 97, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 40, 99, 46, 105, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 99, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 97, 99, 32, 61, 32, 87, 46, 102, 97, 41, 40, 97, 41, 44, 32, 84, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 84, 32, 61, 32, 87, 46, 104, 97, 41, 40, 97, 41, 44, 32, 110, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 110, 98, 32, 61, 32, 87, 46, 105, 97, 41, 40, 97, 41, 44, 32, 98, 99, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 98, 99, 32, 61, 32, 87, 46, 106, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32, 88, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 88, 32, 61, 32, 87, 46, 107, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32, 89, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 89, 32, 61, 32, 87, 46, 108, 97, 41, 40, 97, 41, 44, 32, 90, 32, 61, 32, 40, 41, 32, 61, 62, 32, 40, 90, 32, 61, 32, 87, 46, 109, 97, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 105, 32, 61, 32, 87, 46, 110, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 32, 61, 32, 87, 46, 111, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 32, 61, 32, 87, 46, 112, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 102, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 102, 105, 105, 32, 61, 32, 87, 46, 113, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 32, 61, 32, 87, 46, 114, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 32, 61, 32, 87, 46, 115, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 105, 105, 32, 61, 32, 87, 46, 116, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 102, 102, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 102, 102, 105, 105, 32, 61, 32, 87, 46, 117, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 106, 105, 105, 105, 105, 32, 61, 32, 87, 46, 118, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 105, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 105, 106, 105, 105, 32, 61, 32, 87, 46, 119, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 32, 61, 32, 87, 46, 120, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 121, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 41, 32, 61, 62, 32, 40, 104, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 122, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 107, 44, 32, 103, 44, 32, 108, 44, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 99, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 32, 33, 61, 61, 32, 100, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 102, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 32, 33, 61, 61, 32, 103, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 99, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 32, 33, 61, 61, 32, 100, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 106, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61, 32, 102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 99, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 99, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 99, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 32, 33, 61, 61, 32, 99, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61, 32, 102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 107, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 32, 33, 61, 61, 32, 107, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 99, 59, 10, 32, 32, 32, 32, 32, 32, 71, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 99, 32, 124, 124, 32, 111, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 99, 32, 124, 124, 32, 40, 71, 32, 61, 32, 110, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 109, 99, 32, 38, 38, 32, 40, 109, 99, 32, 61, 32, 116, 114, 117, 101, 44, 32, 104, 46, 99, 97, 108, 108, 101, 100, 82, 117, 110, 32, 61, 32, 116, 114, 117, 101, 44, 32, 33, 108, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 97, 40, 114, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 111, 110, 82, 117, 110, 116, 105, 109, 101, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 63, 46, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 46, 112, 111, 115, 116, 82, 117, 110, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 104, 46, 112, 111, 115, 116, 82, 117, 110, 32, 38, 38, 32, 40, 104, 46, 112, 111, 115, 116, 82, 117, 110, 32, 61, 32, 91, 104, 46, 112, 111, 115, 116, 82, 117, 110, 93, 41, 59, 32, 104, 46, 112, 111, 115, 116, 82, 117, 110, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 104, 46, 112, 111, 115, 116, 82, 117, 110, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 97, 40, 115, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 48, 32, 60, 32, 70, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 46, 112, 114, 101, 82, 117, 110, 41, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 104, 46, 112, 114, 101, 82, 117, 110, 32, 38, 38, 32, 40, 104, 46, 112, 114, 101, 82, 117, 110, 32, 61, 32, 91, 104, 46, 112, 114, 101, 82, 117, 110, 93, 41, 59, 32, 104, 46, 112, 114, 101, 82, 117, 110, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 116, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 97, 40, 113, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 60, 32, 70, 32, 124, 124, 32, 40, 104, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 32, 63, 32, 40, 104, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 40, 34, 82, 117, 110, 110, 105, 110, 103, 46, 46, 46, 34, 41, 44, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 104, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 40, 34, 34, 41, 44, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 49, 41, 41, 32, 58, 32, 97, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 46, 112, 114, 101, 73, 110, 105, 116, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 104, 46, 112, 114, 101, 73, 110, 105, 116, 32, 38, 38, 32, 40, 104, 46, 112, 114, 101, 73, 110, 105, 116, 32, 61, 32, 91, 104, 46, 112, 114, 101, 73, 110, 105, 116, 93, 41, 59, 32, 48, 32, 60, 32, 104, 46, 112, 114, 101, 73, 110, 105, 116, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 104, 46, 112, 114, 101, 73, 110, 105, 116, 46, 112, 111, 112, 40, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 111, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 32, 61, 32, 99, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 59, 10, 32, 32, 32, 32, 125, 59, 10, 32, 32, 125, 41, 40, 41, 59, 10, 32, 32, 118, 97, 114, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 112, 108, 97, 121, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32, 99, 114, 101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108, 101, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 114, 101, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 119, 97, 115, 109, 45, 108, 111, 97, 100, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 82, 101, 110, 100, 101, 114, 101, 114, 76, 111, 97, 100, 101, 114, 32, 105, 115, 32, 97, 32, 115, 116, 97, 116, 105, 99, 32, 99, 108, 97, 115, 115, 32, 97, 110, 100, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 100, 46, 34, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 97, 115, 121, 110, 99, 32, 95, 116, 114, 121, 76, 111, 97, 100, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 117, 108, 101, 32, 61, 32, 97, 119, 97, 105, 116, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 112, 108, 97, 121, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 40, 123, 32, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 58, 32, 40, 41, 32, 61, 62, 32, 117, 114, 108, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 84, 114, 105, 101, 115, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 109, 111, 100, 117, 108, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 112, 114, 105, 109, 97, 114, 121, 32, 85, 82, 76, 44, 32, 102, 97, 108, 108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 97, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32, 105, 102, 32, 110, 101, 99, 101, 115, 115, 97, 114, 121, 46, 10, 32, 32, 32, 32, 32, 42, 32, 84, 104, 114, 111, 119, 115, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 105, 102, 32, 98, 111, 116, 104, 32, 85, 82, 76, 115, 32, 102, 97, 105, 108, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60, 77, 111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114, 111, 109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101, 115, 111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 97, 115, 121, 110, 99, 32, 95, 108, 111, 97, 100, 87, 105, 116, 104, 66, 97, 99, 107, 117, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97, 100, 40, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 41, 46, 99, 97, 116, 99, 104, 40, 97, 115, 121, 110, 99, 32, 40, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 97, 99, 107, 117, 112, 85, 114, 108, 32, 61, 32, 96, 104, 116, 116, 112, 115, 58, 47, 47, 117, 110, 112, 107, 103, 46, 99, 111, 109, 47, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65, 83, 77, 32, 108, 111, 97, 100, 32, 102, 97, 105, 108, 101, 100, 32, 102, 114, 111, 109, 32, 36, 123, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 125, 46, 32, 69, 114, 114, 111, 114, 58, 32, 36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 65, 116, 116, 101, 109, 112, 116, 105, 110, 103, 32, 116, 111, 32, 108, 111, 97, 100, 32, 87, 65, 83, 77, 32, 102, 114, 111, 109, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 58, 32, 36, 123, 98, 97, 99, 107, 117, 112, 85, 114, 108, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 119, 97, 105, 116, 32, 116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97, 100, 40, 98, 97, 99, 107, 117, 112, 85, 114, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 97, 99, 107, 117, 112, 69, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65, 83, 77, 32, 85, 82, 76, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 96, 66, 97, 99, 107, 117, 112, 32, 87, 65, 83, 77, 32, 85, 82, 76, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 98, 97, 99, 107, 117, 112, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 87, 65, 83, 77, 32, 108, 111, 97, 100, 105, 110, 103, 32, 102, 97, 105, 108, 101, 100, 32, 102, 114, 111, 109, 32, 97, 108, 108, 32, 115, 111, 117, 114, 99, 101, 115, 46, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 80, 117, 98, 108, 105, 99, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 85, 116, 105, 108, 105, 122, 101, 115, 32, 97, 32, 112, 114, 105, 109, 97, 114, 121, 32, 97, 110, 100, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32, 102, 111, 114, 32, 114, 111, 98, 117, 115, 116, 110, 101, 115, 115, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60, 77, 111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114, 111, 109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101, 115, 111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 97, 115, 121, 110, 99, 32, 108, 111, 97, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 87, 105, 116, 104, 66, 97, 99, 107, 117, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 115, 32, 97, 32, 110, 101, 119, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 32, 97, 110, 100, 32, 105, 110, 118, 97, 108, 105, 100, 97, 116, 101, 115, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 109, 105, 115, 101, 46, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 114, 105, 110, 103, 32, 45, 32, 32, 84, 104, 101, 32, 110, 101, 119, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 117, 114, 108, 32, 61, 61, 61, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 32, 61, 32, 117, 114, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 47, 47, 32, 101, 115, 108, 105, 110, 116, 45, 100, 105, 115, 97, 98, 108, 101, 45, 110, 101, 120, 116, 45, 108, 105, 110, 101, 32, 64, 116, 121, 112, 101, 115, 99, 114, 105, 112, 116, 45, 101, 115, 108, 105, 110, 116, 47, 110, 97, 109, 105, 110, 103, 45, 99, 111, 110, 118, 101, 110, 116, 105, 111, 110, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 44, 32, 34, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 47, 47, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 44, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 101, 100, 32, 117, 115, 105, 110, 103, 32, 112, 97, 99, 107, 97, 103, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 44, 32, 34, 95, 119, 97, 115, 109, 85, 82, 76, 34, 44, 32, 96, 104, 116, 116, 112, 115, 58, 47, 47, 99, 100, 110, 46, 106, 115, 100, 101, 108, 105, 118, 114, 46, 110, 101, 116, 47, 110, 112, 109, 47, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 96, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 101, 118, 101, 110, 116, 45, 109, 97, 110, 97, 103, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 69, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 83, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 115, 101, 116, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 97, 100, 100, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 100, 105, 115, 112, 97, 116, 99, 104, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 101, 118, 101, 110, 116, 46, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 63, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 61, 62, 32, 108, 105, 115, 116, 101, 110, 101, 114, 40, 101, 118, 101, 110, 116, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 65, 108, 108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 99, 108, 101, 97, 114, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 111, 102, 102, 115, 99, 114, 101, 101, 110, 45, 111, 98, 115, 101, 114, 118, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 67, 97, 108, 108, 98, 97, 99, 107, 32, 61, 32, 40, 101, 110, 116, 114, 105, 101, 115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 110, 116, 114, 121, 46, 105, 115, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 110, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 40, 105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 67, 97, 108, 108, 98, 97, 99, 107, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 101, 115, 104, 111, 108, 100, 58, 32, 48, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 104, 97, 115, 40, 99, 97, 110, 118, 97, 115, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 63, 46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 63, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 63, 46, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 114, 101, 115, 105, 122, 101, 45, 111, 98, 115, 101, 114, 118, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 82, 69, 83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84, 73, 77, 69, 32, 61, 32, 49, 48, 48, 59, 10, 32, 32, 118, 97, 114, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 105, 122, 101, 72, 97, 110, 100, 108, 101, 114, 32, 61, 32, 40, 101, 110, 116, 114, 105, 101, 115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 101, 108, 101, 109, 101, 110, 116, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 116, 105, 109, 101, 111, 117, 116, 93, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 116, 105, 109, 101, 111, 117, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 101, 119, 84, 105, 109, 101, 111, 117, 116, 32, 61, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 69, 83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84, 73, 77, 69, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 44, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 110, 101, 119, 84, 105, 109, 101, 111, 117, 116, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 114, 101, 115, 105, 122, 101, 72, 97, 110, 100, 108, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 104, 97, 115, 40, 99, 97, 110, 118, 97, 115, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97, 115, 44, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 48, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 63, 46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101, 116, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 105, 109, 101, 111, 117, 116, 73, 100, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 91, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 105, 109, 101, 111, 117, 116, 73, 100, 41, 32, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 116, 105, 109, 101, 111, 117, 116, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 63, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105, 122, 101, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 46, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 117, 116, 105, 108, 115, 46, 116, 115, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 72, 101, 120, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 47, 94, 35, 40, 91, 92, 100, 97, 45, 102, 93, 123, 54, 125, 124, 91, 92, 100, 97, 45, 102, 93, 123, 56, 125, 41, 36, 47, 105, 117, 46, 116, 101, 115, 116, 40, 99, 111, 108, 111, 114, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 101, 120, 83, 116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65, 73, 110, 116, 40, 99, 111, 108, 111, 114, 72, 101, 120, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 72, 101, 120, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 72, 101, 120, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 101, 116, 32, 104, 101, 120, 32, 61, 32, 99, 111, 108, 111, 114, 72, 101, 120, 46, 114, 101, 112, 108, 97, 99, 101, 40, 34, 35, 34, 44, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 104, 101, 120, 32, 61, 32, 104, 101, 120, 46, 108, 101, 110, 103, 116, 104, 32, 61, 61, 61, 32, 54, 32, 63, 32, 96, 36, 123, 104, 101, 120, 125, 102, 102, 96, 32, 58, 32, 104, 101, 120, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 97, 114, 115, 101, 73, 110, 116, 40, 104, 101, 120, 44, 32, 49, 54, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 102, 105, 108, 101, 68, 97, 116, 97, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 60, 32, 52, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 105, 108, 101, 83, 105, 103, 110, 97, 116, 117, 114, 101, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 102, 105, 108, 101, 68, 97, 116, 97, 46, 115, 108, 105, 99, 101, 40, 48, 44, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 41, 41, 59, 10, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 46, 108, 101, 110, 103, 116, 104, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 91, 105, 93, 32, 33, 61, 61, 32, 102, 105, 108, 101, 83, 105, 103, 110, 97, 116, 117, 114, 101, 91, 105, 93, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 106, 115, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 76, 79, 84, 84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68, 65, 84, 79, 82, 89, 95, 70, 73, 69, 76, 68, 83, 46, 101, 118, 101, 114, 121, 40, 40, 102, 105, 101, 108, 100, 41, 32, 61, 62, 32, 79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 46, 99, 97, 108, 108, 40, 106, 115, 111, 110, 44, 32, 102, 105, 101, 108, 100, 41, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 102, 105, 108, 101, 68, 97, 116, 97, 32, 61, 61, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 95, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 112, 114, 32, 61, 32, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 63, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 58, 32, 49, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 49, 32, 43, 32, 40, 100, 112, 114, 32, 45, 32, 49, 41, 32, 42, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70, 65, 67, 84, 79, 82, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 101, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 99, 116, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 118, 105, 101, 119, 112, 111, 114, 116, 72, 101, 105, 103, 104, 116, 32, 61, 32, 119, 105, 110, 100, 111, 119, 46, 105, 110, 110, 101, 114, 72, 101, 105, 103, 104, 116, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108, 101, 109, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 118, 105, 101, 119, 112, 111, 114, 116, 87, 105, 100, 116, 104, 32, 61, 32, 119, 105, 110, 100, 111, 119, 46, 105, 110, 110, 101, 114, 87, 105, 100, 116, 104, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108, 101, 109, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 33, 40, 114, 101, 99, 116, 46, 98, 111, 116, 116, 111, 109, 32, 60, 32, 48, 32, 124, 124, 32, 114, 101, 99, 116, 46, 116, 111, 112, 32, 62, 32, 118, 105, 101, 119, 112, 111, 114, 116, 72, 101, 105, 103, 104, 116, 32, 124, 124, 32, 114, 101, 99, 116, 46, 114, 105, 103, 104, 116, 32, 60, 32, 48, 32, 124, 124, 32, 114, 101, 99, 116, 46, 108, 101, 102, 116, 32, 62, 32, 118, 105, 101, 119, 112, 111, 114, 116, 87, 105, 100, 116, 104, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 97, 110, 118, 97, 115, 32, 61, 32, 101, 118, 101, 110, 116, 46, 116, 97, 114, 103, 101, 116, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 99, 116, 32, 61, 32, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 114, 101, 99, 116, 46, 119, 105, 100, 116, 104, 32, 61, 61, 61, 32, 48, 32, 124, 124, 32, 114, 101, 99, 116, 46, 104, 101, 105, 103, 104, 116, 32, 61, 61, 61, 32, 48, 32, 124, 124, 32, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 61, 61, 32, 48, 32, 124, 124, 32, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 99, 97, 108, 101, 88, 32, 61, 32, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 47, 32, 114, 101, 99, 116, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 99, 97, 108, 101, 89, 32, 61, 32, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 47, 32, 114, 101, 99, 116, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 40, 101, 118, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 88, 32, 45, 32, 114, 101, 99, 116, 46, 108, 101, 102, 116, 41, 32, 42, 32, 115, 99, 97, 108, 101, 88, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 40, 101, 118, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 89, 32, 45, 32, 114, 101, 99, 116, 46, 116, 111, 112, 41, 32, 42, 32, 115, 99, 97, 108, 101, 89, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 78, 117, 109, 98, 101, 114, 46, 105, 115, 70, 105, 110, 105, 116, 101, 40, 120, 41, 32, 124, 124, 32, 33, 78, 117, 109, 98, 101, 114, 46, 105, 115, 70, 105, 110, 105, 116, 101, 40, 121, 41, 32, 124, 124, 32, 78, 117, 109, 98, 101, 114, 46, 105, 115, 78, 97, 78, 40, 120, 41, 32, 124, 124, 32, 78, 117, 109, 98, 101, 114, 46, 105, 115, 78, 97, 78, 40, 121, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 32, 120, 44, 32, 121, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 97, 110, 100, 108, 101, 79, 112, 101, 110, 85, 114, 108, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 116, 101, 110, 116, 32, 61, 32, 109, 101, 115, 115, 97, 103, 101, 46, 114, 101, 112, 108, 97, 99, 101, 40, 34, 79, 112, 101, 110, 85, 114, 108, 58, 32, 34, 44, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 97, 114, 103, 101, 116, 83, 101, 112, 97, 114, 97, 116, 111, 114, 73, 110, 100, 101, 120, 32, 61, 32, 99, 111, 110, 116, 101, 110, 116, 46, 105, 110, 100, 101, 120, 79, 102, 40, 34, 32, 124, 32, 84, 97, 114, 103, 101, 116, 58, 32, 34, 41, 59, 10, 32, 32, 32, 32, 108, 101, 116, 32, 117, 114, 108, 84, 111, 79, 112, 101, 110, 59, 10, 32, 32, 32, 32, 108, 101, 116, 32, 116, 97, 114, 103, 101, 116, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 97, 114, 103, 101, 116, 83, 101, 112, 97, 114, 97, 116, 111, 114, 73, 110, 100, 101, 120, 32, 61, 61, 61, 32, 45, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 117, 114, 108, 84, 111, 79, 112, 101, 110, 32, 61, 32, 99, 111, 110, 116, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 116, 97, 114, 103, 101, 116, 32, 61, 32, 34, 95, 98, 108, 97, 110, 107, 34, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 117, 114, 108, 84, 111, 79, 112, 101, 110, 32, 61, 32, 99, 111, 110, 116, 101, 110, 116, 46, 115, 117, 98, 115, 116, 114, 105, 110, 103, 40, 48, 44, 32, 116, 97, 114, 103, 101, 116, 83, 101, 112, 97, 114, 97, 116, 111, 114, 73, 110, 100, 101, 120, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 97, 114, 103, 101, 116, 32, 61, 32, 99, 111, 110, 116, 101, 110, 116, 46, 115, 117, 98, 115, 116, 114, 105, 110, 103, 40, 116, 97, 114, 103, 101, 116, 83, 101, 112, 97, 114, 97, 116, 111, 114, 73, 110, 100, 101, 120, 32, 43, 32, 34, 32, 124, 32, 84, 97, 114, 103, 101, 116, 58, 32, 34, 46, 108, 101, 110, 103, 116, 104, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 119, 105, 110, 100, 111, 119, 46, 111, 112, 101, 110, 40, 117, 114, 108, 84, 111, 79, 112, 101, 110, 44, 32, 116, 97, 114, 103, 101, 116, 41, 59, 10, 32, 32, 125, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 32, 61, 32, 40, 109, 111, 100, 101, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114, 115, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 98, 111, 117, 110, 99, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 66, 111, 117, 110, 99, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114, 115, 101, 45, 98, 111, 117, 110, 99, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 66, 111, 117, 110, 99, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 70, 111, 114, 119, 97, 114, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 70, 105, 116, 32, 61, 32, 40, 102, 105, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 67, 111, 110, 116, 97, 105, 110, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 99, 111, 118, 101, 114, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 67, 111, 118, 101, 114, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 108, 108, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 108, 108, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 116, 45, 104, 101, 105, 103, 104, 116, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 116, 72, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 116, 87, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 78, 111, 110, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105, 103, 110, 32, 61, 32, 40, 97, 108, 105, 103, 110, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 97, 108, 105, 103, 110, 91, 48, 93, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 97, 108, 105, 103, 110, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 32, 61, 32, 40, 115, 101, 103, 109, 101, 110, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 115, 101, 103, 109, 101, 110, 116, 46, 108, 101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 50, 41, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 115, 101, 103, 109, 101, 110, 116, 91, 48, 93, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 115, 101, 103, 109, 101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 32, 61, 32, 40, 108, 97, 121, 111, 117, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 99, 114, 101, 97, 116, 101, 68, 101, 102, 97, 117, 108, 116, 76, 97, 121, 111, 117, 116, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105, 103, 110, 40, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 32, 63, 63, 32, 91, 48, 46, 53, 44, 32, 48, 46, 53, 93, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 102, 105, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 70, 105, 116, 40, 108, 97, 121, 111, 117, 116, 46, 102, 105, 116, 32, 63, 63, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 44, 32, 109, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 125, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 61, 32, 99, 108, 97, 115, 115, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 99, 97, 110, 118, 97, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 99, 111, 110, 116, 101, 120, 116, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 34, 44, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 34, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 34, 44, 32, 123, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 105, 115, 70, 114, 111, 122, 101, 110, 34, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 47, 47, 32, 66, 111, 117, 110, 100, 32, 101, 118, 101, 110, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 102, 111, 114, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 99, 97, 110, 118, 97, 115, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 110, 101, 119, 32, 69, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 110, 101, 119, 32, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 58, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 63, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 105, 115, 32, 116, 114, 117, 101, 32, 98, 121, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 111, 32, 112, 114, 101, 118, 101, 110, 116, 32, 117, 110, 110, 101, 99, 101, 115, 115, 97, 114, 121, 32, 114, 101, 110, 100, 101, 114, 105, 110, 103, 32, 119, 104, 101, 110, 32, 116, 104, 101, 32, 99, 97, 110, 118, 97, 115, 32, 105, 115, 32, 111, 102, 102, 115, 99, 114, 101, 101, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 58, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 63, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 63, 63, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 46, 108, 111, 97, 100, 40, 41, 46, 116, 104, 101, 110, 40, 40, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 32, 109, 111, 100, 117, 108, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 76, 111, 97, 100, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 76, 111, 97, 100, 69, 114, 114, 111, 114, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 34, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 80, 108, 97, 121, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 112, 108, 97, 121, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 80, 97, 117, 115, 101, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 112, 97, 117, 115, 101, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 111, 112, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 111, 112, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 76, 111, 111, 112, 40, 40, 108, 111, 111, 112, 67, 111, 117, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 67, 111, 109, 112, 108, 101, 116, 101, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 99, 111, 109, 112, 108, 101, 116, 101, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 70, 114, 97, 109, 101, 40, 40, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 82, 101, 110, 100, 101, 114, 40, 40, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 114, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 101, 109, 101, 73, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 116, 104, 101, 109, 101, 73, 100, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 70, 73, 88, 77, 69, 58, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 105, 100, 32, 105, 115, 32, 110, 111, 116, 32, 117, 115, 101, 102, 117, 108, 44, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 108, 111, 97, 100, 32, 97, 110, 100, 32, 115, 116, 97, 114, 116, 32, 111, 102, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 114, 101, 113, 117, 105, 114, 101, 32, 116, 111, 32, 98, 101, 32, 99, 111, 110, 116, 114, 111, 108, 108, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 102, 114, 97, 109, 101, 119, 111, 114, 107, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 99, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97, 121, 32, 63, 63, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 32, 63, 63, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 58, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 32, 63, 63, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 99, 111, 110, 102, 105, 103, 46, 109, 111, 100, 101, 32, 63, 63, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 99, 111, 110, 102, 105, 103, 46, 115, 101, 103, 109, 101, 110, 116, 32, 63, 63, 32, 91, 93, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 115, 112, 101, 101, 100, 32, 63, 63, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 99, 111, 110, 102, 105, 103, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 32, 63, 63, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 99, 111, 110, 102, 105, 103, 46, 109, 97, 114, 107, 101, 114, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 32, 63, 63, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 114, 101, 97, 100, 121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 46, 99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 119, 97, 115, 109, 32, 109, 111, 100, 117, 108, 101, 58, 32, 36, 123, 101, 114, 114, 111, 114, 125, 96, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 115, 121, 110, 99, 32, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97, 40, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 97, 119, 97, 105, 116, 32, 102, 101, 116, 99, 104, 40, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 114, 101, 115, 112, 111, 110, 115, 101, 46, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 102, 101, 116, 99, 104, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 32, 102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36, 123, 115, 114, 99, 125, 46, 32, 36, 123, 114, 101, 115, 112, 111, 110, 115, 101, 46, 115, 116, 97, 116, 117, 115, 125, 58, 32, 36, 123, 114, 101, 115, 112, 111, 110, 115, 101, 46, 115, 116, 97, 116, 117, 115, 84, 101, 120, 116, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 97, 116, 97, 32, 61, 32, 97, 119, 97, 105, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 41, 46, 100, 101, 99, 111, 100, 101, 40, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 68, 97, 116, 97, 40, 100, 97, 116, 97, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 100, 97, 116, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 68, 111, 116, 76, 111, 116, 116, 105, 101, 68, 97, 116, 97, 40, 100, 97, 116, 97, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61, 32, 34, 111, 98, 106, 101, 99, 116, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 68, 97, 116, 97, 40, 74, 83, 79, 78, 46, 115, 116, 114, 105, 110, 103, 105, 102, 121, 40, 100, 97, 116, 97, 41, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 85, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 100, 97, 116, 97, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 46, 32, 69, 120, 112, 101, 99, 116, 101, 100, 58, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 115, 116, 114, 105, 110, 103, 32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 40, 100, 111, 116, 76, 111, 116, 116, 105, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 111, 98, 106, 101, 99, 116, 32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 41, 46, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 101, 99, 101, 105, 118, 101, 100, 58, 32, 36, 123, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 113, 117, 97, 108, 105, 116, 121, 32, 33, 61, 61, 32, 118, 111, 105, 100, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 81, 117, 97, 108, 105, 116, 121, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 113, 117, 97, 108, 105, 116, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 109, 76, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 109, 76, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 109, 83, 116, 97, 114, 116, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 109, 83, 116, 97, 114, 116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 82, 101, 115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97, 40, 115, 114, 99, 41, 46, 116, 104, 101, 110, 40, 40, 100, 97, 116, 97, 41, 32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41, 41, 46, 99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114, 41, 32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 32, 102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36, 123, 115, 114, 99, 125, 46, 32, 36, 123, 101, 114, 114, 111, 114, 125, 96, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 98, 117, 102, 102, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 98, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 97, 121, 111, 117, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97, 121, 111, 117, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 97, 121, 111, 117, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 91, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 46, 103, 101, 116, 40, 48, 41, 44, 32, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 46, 103, 101, 116, 40, 49, 41, 93, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 116, 58, 32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 108, 97, 121, 111, 117, 116, 46, 102, 105, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 67, 111, 110, 116, 97, 105, 110, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 67, 111, 118, 101, 114, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 118, 101, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 70, 105, 108, 108, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 108, 108, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 70, 105, 116, 72, 101, 105, 103, 104, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 116, 45, 104, 101, 105, 103, 104, 116, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 70, 105, 116, 87, 105, 100, 116, 104, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 70, 105, 116, 46, 78, 111, 110, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 110, 111, 110, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 97, 114, 107, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 109, 97, 110, 105, 102, 101, 115, 116, 83, 116, 114, 105, 110, 103, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 33, 109, 97, 110, 105, 102, 101, 115, 116, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 32, 61, 32, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 109, 97, 110, 105, 102, 101, 115, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121, 115, 40, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 41, 46, 108, 101, 110, 103, 116, 104, 32, 61, 61, 61, 32, 48, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 95, 101, 114, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 101, 103, 109, 101, 110, 116, 32, 38, 38, 32, 115, 101, 103, 109, 101, 110, 116, 46, 115, 105, 122, 101, 40, 41, 32, 61, 61, 61, 32, 50, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 115, 101, 103, 109, 101, 110, 116, 46, 103, 101, 116, 40, 48, 41, 44, 32, 115, 101, 103, 109, 101, 110, 116, 46, 103, 101, 116, 40, 49, 41, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 111, 100, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 109, 111, 100, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 114, 101, 118, 101, 114, 115, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 77, 111, 100, 101, 46, 66, 111, 117, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 98, 111, 117, 110, 99, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 66, 111, 117, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 114, 101, 118, 101, 114, 115, 101, 45, 98, 111, 117, 110, 99, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 70, 114, 111, 122, 101, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 117, 116, 111, 112, 108, 97, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 97, 117, 116, 111, 112, 108, 97, 121, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 112, 101, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 115, 112, 101, 101, 100, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 82, 101, 97, 100, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 33, 61, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 76, 111, 97, 100, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 105, 115, 76, 111, 97, 100, 101, 100, 40, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 80, 97, 117, 115, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 105, 115, 80, 97, 117, 115, 101, 100, 40, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 83, 116, 111, 112, 112, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 105, 115, 83, 116, 111, 112, 112, 101, 100, 40, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 77, 97, 116, 104, 46, 114, 111, 117, 110, 100, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 40, 41, 32, 42, 32, 49, 48, 48, 41, 32, 47, 32, 49, 48, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 100, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 100, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 99, 97, 110, 118, 97, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 101, 109, 101, 73, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 116, 104, 101, 109, 101, 73, 100, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 99, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97, 121, 32, 63, 63, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 32, 63, 63, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 58, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 32, 63, 63, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 99, 111, 110, 102, 105, 103, 46, 109, 111, 100, 101, 32, 63, 63, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 99, 111, 110, 102, 105, 103, 46, 115, 101, 103, 109, 101, 110, 116, 32, 63, 63, 32, 91, 93, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 99, 111, 110, 102, 105, 103, 46, 115, 112, 101, 101, 100, 32, 63, 63, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 99, 111, 110, 102, 105, 103, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 32, 63, 63, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 99, 111, 110, 102, 105, 103, 46, 109, 97, 114, 107, 101, 114, 32, 63, 63, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117, 116, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 63, 63, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 100, 114, 97, 119, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 38, 38, 32, 34, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 34, 32, 105, 110, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 38, 38, 32, 116, 121, 112, 101, 111, 102, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 40, 34, 50, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 117, 102, 102, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 98, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 120, 112, 101, 99, 116, 101, 100, 76, 101, 110, 103, 116, 104, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 42, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 42, 32, 66, 89, 84, 69, 83, 95, 80, 69, 82, 95, 80, 73, 88, 69, 76, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 117, 102, 102, 101, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 101, 120, 112, 101, 99, 116, 101, 100, 76, 101, 110, 103, 116, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 66, 117, 102, 102, 101, 114, 32, 115, 105, 122, 101, 32, 109, 105, 115, 109, 97, 116, 99, 104, 58, 32, 103, 111, 116, 32, 36, 123, 98, 117, 102, 102, 101, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 125, 44, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 36, 123, 101, 120, 112, 101, 99, 116, 101, 100, 76, 101, 110, 103, 116, 104, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100, 65, 114, 114, 97, 121, 40, 98, 117, 102, 102, 101, 114, 44, 32, 48, 44, 32, 98, 117, 102, 102, 101, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 73, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 46, 99, 114, 101, 97, 116, 101, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 46, 100, 97, 116, 97, 46, 115, 101, 116, 40, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 110, 101, 119, 32, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 46, 112, 117, 116, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 105, 109, 97, 103, 101, 68, 97, 116, 97, 44, 32, 48, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 38, 38, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 97, 100, 118, 97, 110, 99, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 116, 105, 99, 107, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 100, 118, 97, 110, 99, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 34, 69, 114, 114, 111, 114, 32, 105, 110, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 102, 114, 97, 109, 101, 58, 34, 44, 32, 101, 114, 114, 111, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 114, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 34, 44, 32, 101, 114, 114, 111, 114, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 114, 114, 111, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 82, 117, 110, 116, 105, 109, 101, 69, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 100, 101, 115, 116, 114, 111, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 108, 97, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 33, 116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 108, 97, 121, 105, 110, 103, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 108, 97, 121, 105, 110, 103, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 38, 38, 32, 33, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97, 109, 101, 40, 102, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 85, 112, 100, 97, 116, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 101, 107, 40, 102, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 114, 97, 109, 101, 85, 112, 100, 97, 116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 114, 101, 110, 100, 101, 114, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101, 101, 100, 40, 115, 112, 101, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 115, 116, 121, 108, 101, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 99, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 104, 101, 120, 83, 116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65, 73, 110, 116, 40, 99, 111, 108, 111, 114, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 99, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 40, 108, 111, 111, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 108, 111, 111, 112, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 67, 111, 117, 110, 116, 40, 108, 111, 111, 112, 67, 111, 117, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 85, 110, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 85, 110, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 117, 110, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 100, 101, 115, 116, 114, 111, 121, 34, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118, 101, 65, 108, 108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 101, 101, 122, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 117, 110, 102, 114, 101, 101, 122, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 115, 105, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 112, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 104, 101, 105, 103, 104, 116, 58, 32, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 44, 32, 119, 105, 100, 116, 104, 58, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 32, 33, 61, 61, 32, 48, 32, 38, 38, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 33, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 42, 32, 100, 112, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 32, 42, 32, 100, 112, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 105, 122, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 105, 122, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 114, 101, 115, 105, 122, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 116, 114, 97, 110, 115, 102, 111, 114, 109, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 99, 111, 110, 115, 116, 32, 118, 97, 108, 32, 111, 102, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 118, 97, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 111, 107, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 32, 61, 32, 91, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 103, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 91, 105, 93, 32, 61, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 86, 101, 99, 116, 111, 114, 46, 103, 101, 116, 40, 105, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115, 116, 97, 114, 116, 70, 114, 97, 109, 101, 44, 32, 101, 110, 100, 70, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 91, 115, 116, 97, 114, 116, 70, 114, 97, 109, 101, 44, 32, 101, 110, 100, 70, 114, 97, 109, 101, 93, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111, 100, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 109, 111, 100, 101, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 44, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 44, 32, 113, 117, 97, 108, 105, 116, 121, 44, 32, 46, 46, 46, 114, 101, 115, 116, 67, 111, 110, 102, 105, 103, 32, 125, 32, 61, 32, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 114, 101, 115, 116, 67, 111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 105, 115, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 44, 32, 105, 116, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 115, 101, 116, 32, 116, 111, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 105, 102, 32, 105, 116, 39, 115, 32, 110, 111, 116, 32, 112, 114, 111, 118, 105, 100, 101, 100, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 58, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 58, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 63, 63, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 113, 117, 97, 108, 105, 116, 121, 32, 33, 61, 61, 32, 118, 111, 105, 100, 32, 48, 32, 38, 38, 32, 123, 32, 113, 117, 97, 108, 105, 116, 121, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 113, 117, 97, 108, 105, 116, 121, 32, 33, 61, 61, 32, 118, 111, 105, 100, 32, 48, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 81, 117, 97, 108, 105, 116, 121, 40, 113, 117, 97, 108, 105, 116, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 82, 101, 115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 32, 61, 61, 61, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 113, 117, 97, 108, 105, 116, 121, 32, 33, 61, 61, 32, 118, 111, 105, 100, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 81, 117, 97, 108, 105, 116, 121, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 113, 117, 97, 108, 105, 116, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 109, 97, 114, 107, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 97, 114, 107, 101, 114, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 117, 108, 116, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 109, 97, 114, 107, 101, 114, 115, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 109, 97, 114, 107, 101, 114, 115, 46, 103, 101, 116, 40, 105, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 46, 112, 117, 115, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46, 110, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 105, 109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46, 116, 105, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 117, 114, 97, 116, 105, 111, 110, 58, 32, 109, 97, 114, 107, 101, 114, 46, 100, 117, 114, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 115, 117, 108, 116, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 115, 101, 116, 84, 104, 101, 109, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 82, 101, 115, 101, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 101, 116, 84, 104, 101, 109, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 101, 109, 101, 82, 101, 115, 101, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 109, 101, 82, 101, 115, 101, 116, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 109, 101, 76, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 108, 111, 116, 115, 40, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 83, 108, 111, 116, 115, 40, 115, 108, 111, 116, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 46, 46, 46, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 46, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 116, 97, 114, 116, 32, 97, 32, 116, 119, 101, 101, 110, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 98, 101, 116, 119, 101, 101, 110, 32, 116, 119, 111, 32, 102, 114, 97, 109, 101, 32, 118, 97, 108, 117, 101, 115, 32, 119, 105, 116, 104, 32, 99, 117, 115, 116, 111, 109, 32, 101, 97, 115, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 102, 114, 97, 109, 101, 32, 45, 32, 83, 116, 97, 114, 116, 105, 110, 103, 32, 102, 114, 97, 109, 101, 32, 118, 97, 108, 117, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 100, 117, 114, 97, 116, 105, 111, 110, 32, 45, 32, 68, 117, 114, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 116, 119, 101, 101, 110, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 119, 101, 101, 110, 32, 119, 97, 115, 32, 115, 116, 97, 114, 116, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 116, 119, 101, 101, 110, 40, 102, 114, 97, 109, 101, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 97, 115, 105, 110, 103, 32, 61, 32, 91, 48, 44, 32, 48, 44, 32, 49, 44, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 99, 111, 110, 115, 116, 32, 118, 97, 108, 32, 111, 102, 32, 101, 97, 115, 105, 110, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 118, 97, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 116, 119, 101, 101, 110, 40, 102, 114, 97, 109, 101, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 44, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 116, 97, 114, 116, 32, 97, 32, 116, 119, 101, 101, 110, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 116, 111, 32, 97, 32, 115, 112, 101, 99, 105, 102, 105, 99, 32, 109, 97, 114, 107, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 109, 97, 114, 107, 101, 114, 32, 45, 32, 84, 104, 101, 32, 109, 97, 114, 107, 101, 114, 32, 110, 97, 109, 101, 32, 116, 111, 32, 116, 119, 101, 101, 110, 32, 116, 111, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 119, 101, 101, 110, 32, 119, 97, 115, 32, 115, 116, 97, 114, 116, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 116, 119, 101, 101, 110, 84, 111, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 97, 115, 105, 110, 103, 32, 61, 32, 91, 48, 44, 32, 48, 44, 32, 49, 44, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 99, 111, 110, 115, 116, 32, 118, 97, 108, 32, 111, 102, 32, 101, 97, 115, 105, 110, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 118, 97, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 116, 119, 101, 101, 110, 84, 111, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 44, 32, 101, 97, 115, 105, 110, 103, 86, 101, 99, 116, 111, 114, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 46, 103, 101, 116, 40, 48, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 46, 103, 101, 116, 40, 49, 41, 32, 63, 63, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 105, 100, 116, 104, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 79, 114, 105, 101, 110, 116, 101, 100, 32, 66, 111, 117, 110, 100, 105, 110, 103, 32, 66, 111, 120, 32, 40, 79, 66, 66, 41, 32, 112, 111, 105, 110, 116, 115, 32, 111, 102, 32, 97, 32, 108, 97, 121, 101, 114, 32, 98, 121, 32, 105, 116, 115, 32, 110, 97, 109, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 108, 97, 121, 101, 114, 78, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 108, 97, 121, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 65, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 56, 32, 110, 117, 109, 98, 101, 114, 115, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 105, 110, 103, 32, 52, 32, 112, 111, 105, 110, 116, 115, 32, 40, 120, 44, 121, 41, 32, 111, 102, 32, 116, 104, 101, 32, 79, 66, 66, 32, 105, 110, 32, 99, 108, 111, 99, 107, 119, 105, 115, 101, 32, 111, 114, 100, 101, 114, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 102, 114, 111, 109, 32, 116, 111, 112, 45, 108, 101, 102, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 91, 120, 48, 44, 32, 121, 48, 44, 32, 120, 49, 44, 32, 121, 49, 44, 32, 120, 50, 44, 32, 121, 50, 44, 32, 120, 51, 44, 32, 121, 51, 93, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 97, 109, 112, 108, 101, 10, 32, 32, 32, 32, 32, 42, 32, 96, 96, 96, 116, 121, 112, 101, 115, 99, 114, 105, 112, 116, 10, 32, 32, 32, 32, 32, 42, 32, 47, 47, 32, 68, 114, 97, 119, 32, 97, 32, 112, 111, 108, 121, 103, 111, 110, 32, 97, 114, 111, 117, 110, 100, 32, 116, 104, 101, 32, 108, 97, 121, 101, 114, 32, 39, 76, 97, 121, 101, 114, 32, 49, 39, 10, 32, 32, 32, 32, 32, 42, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 39, 114, 101, 110, 100, 101, 114, 39, 44, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 32, 61, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 46, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 105, 110, 103, 66, 111, 120, 40, 39, 76, 97, 121, 101, 114, 32, 49, 39, 41, 59, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 105, 102, 32, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 98, 101, 103, 105, 110, 80, 97, 116, 104, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 109, 111, 118, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 48, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 49, 93, 41, 59, 32, 47, 47, 32, 70, 105, 114, 115, 116, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 50, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 51, 93, 41, 59, 32, 47, 47, 32, 83, 101, 99, 111, 110, 100, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 52, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 53, 93, 41, 59, 32, 47, 47, 32, 84, 104, 105, 114, 100, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 54, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 55, 93, 41, 59, 32, 47, 47, 32, 70, 111, 117, 114, 116, 104, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 99, 108, 111, 115, 101, 80, 97, 116, 104, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 115, 116, 114, 111, 107, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 42, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 96, 96, 96, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 105, 110, 103, 66, 111, 120, 40, 108, 97, 121, 101, 114, 78, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 111, 117, 110, 100, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 115, 40, 108, 97, 121, 101, 114, 78, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 111, 117, 110, 100, 115, 41, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 111, 117, 110, 100, 115, 46, 115, 105, 122, 101, 40, 41, 32, 33, 61, 61, 32, 56, 41, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 105, 110, 116, 115, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 56, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 111, 105, 110, 116, 115, 46, 112, 117, 115, 104, 40, 98, 111, 117, 110, 100, 115, 46, 103, 101, 116, 40, 105, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 111, 105, 110, 116, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 84, 104, 101, 109, 101, 84, 111, 76, 111, 116, 116, 105, 101, 83, 108, 111, 116, 115, 40, 116, 104, 101, 109, 101, 44, 32, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 63, 46, 116, 114, 97, 110, 115, 102, 111, 114, 109, 84, 104, 101, 109, 101, 84, 111, 76, 111, 116, 116, 105, 101, 83, 108, 111, 116, 115, 40, 116, 104, 101, 109, 101, 44, 32, 115, 108, 111, 116, 115, 41, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 47, 32, 35, 114, 101, 103, 105, 111, 110, 32, 83, 116, 97, 116, 101, 32, 77, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 67, 97, 108, 108, 98, 97, 99, 107, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 97, 114, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 111, 112, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 40, 40, 101, 118, 101, 110, 116, 78, 97, 109, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 34, 44, 32, 101, 118, 101, 110, 116, 78, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 40, 40, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 32, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 40, 40, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 32, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 40, 40, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 32, 105, 110, 112, 117, 116, 78, 97, 109, 101, 44, 32, 110, 101, 119, 86, 97, 108, 117, 101, 44, 32, 111, 108, 100, 86, 97, 108, 117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 40, 40, 105, 110, 112, 117, 116, 78, 97, 109, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 34, 44, 32, 105, 110, 112, 117, 116, 78, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 40, 40, 102, 114, 111, 109, 83, 116, 97, 116, 101, 44, 32, 116, 111, 83, 116, 97, 116, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 34, 44, 32, 102, 114, 111, 109, 83, 116, 97, 116, 101, 44, 32, 116, 111, 83, 116, 97, 116, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 40, 40, 115, 116, 97, 116, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 34, 44, 32, 115, 116, 97, 116, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 83, 116, 97, 116, 101, 69, 120, 105, 116, 40, 40, 115, 116, 97, 116, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 34, 44, 32, 115, 116, 97, 116, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 69, 114, 114, 111, 114, 40, 40, 101, 114, 114, 111, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 34, 44, 32, 101, 114, 114, 111, 114, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 109, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 67, 97, 108, 108, 98, 97, 99, 107, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 109, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 115, 101, 116, 79, 110, 77, 101, 115, 115, 97, 103, 101, 40, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 101, 115, 115, 97, 103, 101, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 79, 112, 101, 110, 85, 114, 108, 58, 32, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 97, 110, 100, 108, 101, 79, 112, 101, 110, 85, 114, 108, 40, 109, 101, 115, 115, 97, 103, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 34, 44, 32, 109, 101, 115, 115, 97, 103, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 117, 98, 115, 99, 114, 105, 98, 101, 40, 115, 109, 67, 97, 108, 108, 98, 97, 99, 107, 79, 98, 115, 101, 114, 118, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 83, 117, 98, 115, 99, 114, 105, 98, 101, 40, 115, 109, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 85, 110, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 72, 97, 110, 100, 108, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 85, 110, 115, 117, 98, 115, 99, 114, 105, 98, 101, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 76, 111, 97, 100, 32, 97, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 98, 121, 32, 73, 68, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 45, 32, 84, 104, 101, 32, 73, 68, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 116, 111, 32, 108, 111, 97, 100, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 119, 97, 115, 32, 108, 111, 97, 100, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 76, 111, 97, 100, 32, 97, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 102, 114, 111, 109, 32, 100, 97, 116, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 32, 45, 32, 84, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 100, 97, 116, 97, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 119, 97, 115, 32, 108, 111, 97, 100, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 99, 111, 110, 102, 105, 103, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 99, 111, 110, 102, 105, 103, 32, 45, 32, 84, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 99, 111, 110, 102, 105, 103, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 67, 111, 110, 102, 105, 103, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 32, 61, 32, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 116, 97, 114, 116, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 119, 97, 115, 32, 115, 116, 97, 114, 116, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 79, 112, 101, 110, 85, 114, 108, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 99, 114, 101, 97, 116, 101, 68, 101, 102, 97, 117, 108, 116, 79, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 32, 61, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 111, 110, 102, 105, 103, 46, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 32, 38, 38, 32, 116, 121, 112, 101, 111, 102, 32, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 46, 114, 101, 113, 117, 105, 114, 101, 85, 115, 101, 114, 73, 110, 116, 101, 114, 97, 99, 116, 105, 111, 110, 32, 61, 61, 61, 32, 34, 98, 111, 111, 108, 101, 97, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 114, 101, 79, 112, 101, 110, 85, 114, 108, 46, 114, 101, 113, 117, 105, 114, 101, 85, 115, 101, 114, 73, 110, 116, 101, 114, 97, 99, 116, 105, 111, 110, 32, 61, 32, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 46, 114, 101, 113, 117, 105, 114, 101, 85, 115, 101, 114, 73, 110, 116, 101, 114, 97, 99, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 63, 46, 119, 104, 105, 116, 101, 108, 105, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 114, 101, 79, 112, 101, 110, 85, 114, 108, 46, 119, 104, 105, 116, 101, 108, 105, 115, 116, 32, 61, 32, 110, 101, 119, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 83, 116, 114, 105, 110, 103, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 99, 111, 110, 115, 116, 32, 117, 114, 108, 32, 111, 102, 32, 111, 112, 101, 110, 85, 114, 108, 80, 111, 108, 105, 99, 121, 46, 119, 104, 105, 116, 101, 108, 105, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 114, 101, 79, 112, 101, 110, 85, 114, 108, 46, 119, 104, 105, 116, 101, 108, 105, 115, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 114, 116, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 40, 99, 111, 114, 101, 79, 112, 101, 110, 85, 114, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 116, 97, 114, 116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 97, 114, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 116, 97, 114, 116, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 116, 111, 112, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 119, 97, 115, 32, 115, 116, 111, 112, 112, 101, 100, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 111, 112, 112, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 116, 111, 112, 112, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 98, 115, 101, 114, 118, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 82, 117, 110, 110, 105, 110, 103, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 76, 111, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 116, 111, 112, 112, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 117, 115, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 117, 115, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 97, 116, 117, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 117, 115, 40, 41, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 67, 117, 114, 114, 101, 110, 116, 83, 116, 97, 116, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 114, 114, 101, 110, 116, 83, 116, 97, 116, 101, 40, 41, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 97, 99, 116, 105, 118, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 73, 68, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 97, 99, 116, 105, 118, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 73, 68, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 65, 99, 116, 105, 118, 101, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 97, 99, 116, 105, 118, 101, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 40, 41, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 79, 118, 101, 114, 114, 105, 100, 101, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 115, 116, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 97, 116, 101, 32, 45, 32, 84, 104, 101, 32, 115, 116, 97, 116, 101, 32, 116, 111, 32, 111, 118, 101, 114, 114, 105, 100, 101, 32, 116, 111, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 32, 45, 32, 87, 104, 101, 116, 104, 101, 114, 32, 116, 111, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 108, 121, 32, 116, 114, 97, 110, 115, 105, 116, 105, 111, 110, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 116, 114, 117, 101, 32, 105, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 111, 118, 101, 114, 114, 105, 100, 101, 32, 119, 97, 115, 32, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 118, 101, 114, 114, 105, 100, 101, 83, 116, 97, 116, 101, 40, 115, 116, 97, 116, 101, 44, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 32, 61, 32, 102, 97, 108, 115, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 118, 101, 114, 114, 105, 100, 101, 67, 117, 114, 114, 101, 110, 116, 83, 116, 97, 116, 101, 40, 115, 116, 97, 116, 101, 44, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 97, 32, 115, 112, 101, 99, 105, 102, 105, 99, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 98, 121, 32, 73, 68, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 45, 32, 84, 104, 101, 32, 73, 68, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 116, 111, 32, 103, 101, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 100, 97, 116, 97, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 32, 63, 63, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 108, 105, 115, 116, 32, 111, 102, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 65, 114, 114, 97, 121, 32, 111, 102, 32, 108, 105, 115, 116, 101, 110, 101, 114, 32, 110, 97, 109, 101, 115, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 114, 97, 109, 101, 119, 111, 114, 107, 83, 101, 116, 117, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 112, 117, 115, 104, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 46, 103, 101, 116, 40, 105, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 32, 97, 32, 98, 111, 111, 108, 101, 97, 110, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 98, 111, 111, 108, 101, 97, 110, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 118, 97, 108, 117, 101, 32, 45, 32, 84, 104, 101, 32, 98, 111, 111, 108, 101, 97, 110, 32, 118, 97, 108, 117, 101, 32, 116, 111, 32, 115, 101, 116, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 32, 97, 32, 110, 117, 109, 101, 114, 105, 99, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 110, 117, 109, 101, 114, 105, 99, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 118, 97, 108, 117, 101, 32, 45, 32, 84, 104, 101, 32, 110, 117, 109, 101, 114, 105, 99, 32, 118, 97, 108, 117, 101, 32, 116, 111, 32, 115, 101, 116, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 111, 114, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 118, 97, 108, 117, 101, 32, 45, 32, 84, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 118, 97, 108, 117, 101, 32, 116, 111, 32, 115, 101, 116, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 63, 63, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 97, 32, 98, 111, 111, 108, 101, 97, 110, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 98, 111, 111, 108, 101, 97, 110, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 98, 111, 111, 108, 101, 97, 110, 32, 118, 97, 108, 117, 101, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 32, 105, 102, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 97, 32, 110, 117, 109, 101, 114, 105, 99, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 110, 117, 109, 101, 114, 105, 99, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 110, 117, 109, 101, 114, 105, 99, 32, 118, 97, 108, 117, 101, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 32, 105, 102, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 112, 117, 116, 32, 118, 97, 108, 117, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 112, 117, 116, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 115, 116, 114, 105, 110, 103, 32, 118, 97, 108, 117, 101, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 32, 105, 102, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 70, 105, 114, 101, 32, 97, 110, 32, 101, 118, 101, 110, 116, 32, 105, 110, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 110, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 102, 105, 114, 101, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 105, 114, 101, 69, 118, 101, 110, 116, 40, 110, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 105, 114, 101, 69, 118, 101, 110, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 99, 108, 105, 99, 107, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 99, 108, 105, 99, 107, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 99, 108, 105, 99, 107, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 67, 108, 105, 99, 107, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 67, 108, 105, 99, 107, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 117, 112, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 100, 111, 119, 110, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 109, 111, 118, 101, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 101, 110, 116, 101, 114, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 10, 32, 32, 32, 32, 32, 42, 32, 80, 111, 115, 116, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 101, 120, 105, 116, 32, 101, 118, 101, 110, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 116, 97, 116, 101, 32, 109, 97, 99, 104, 105, 110, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 120, 32, 45, 32, 84, 104, 101, 32, 120, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 121, 32, 45, 32, 84, 104, 101, 32, 121, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 112, 111, 105, 110, 116, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 101, 118, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 32, 111, 114, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 63, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 67, 108, 105, 99, 107, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 67, 108, 105, 99, 107, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 115, 105, 116, 105, 111, 110, 32, 61, 32, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 111, 115, 105, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 112, 111, 115, 105, 116, 105, 111, 110, 46, 120, 44, 32, 112, 111, 115, 105, 116, 105, 111, 110, 46, 121, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 33, 61, 61, 32, 110, 117, 108, 108, 32, 38, 38, 32, 116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 67, 108, 105, 99, 107, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 67, 108, 105, 99, 107, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 99, 108, 105, 99, 107, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 85, 112, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 117, 112, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 100, 111, 119, 110, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 109, 111, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 101, 110, 116, 101, 114, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 99, 108, 105, 99, 107, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 67, 108, 105, 99, 107, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 117, 112, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 100, 111, 119, 110, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 109, 111, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 101, 110, 116, 101, 114, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 111, 117, 110, 100, 79, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 47, 32, 35, 101, 110, 100, 114, 101, 103, 105, 111, 110, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 44, 32, 34, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 118, 97, 114, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 119, 111, 114, 107, 101, 114, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 46, 119, 111, 114, 107, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 59, 10, 32, 32, 118, 97, 114, 32, 101, 118, 101, 110, 116, 72, 97, 110, 100, 108, 101, 114, 77, 97, 112, 32, 61, 32, 123, 10, 32, 32, 32, 32, 114, 101, 97, 100, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 97, 100, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 99, 111, 109, 112, 108, 101, 116, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 67, 111, 109, 112, 108, 101, 116, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 97, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 97, 100, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 114, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 111, 112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 108, 97, 121, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 80, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 112, 108, 97, 121, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 80, 97, 117, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 97, 109, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 70, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 102, 114, 97, 109, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 110, 100, 101, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 114, 101, 110, 100, 101, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 70, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117, 110, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 85, 110, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 117, 110, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 101, 115, 116, 114, 111, 121, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 68, 101, 115, 116, 114, 111, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 100, 101, 115, 116, 114, 111, 121, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 101, 115, 108, 105, 110, 116, 45, 100, 105, 115, 97, 98, 108, 101, 45, 110, 101, 120, 116, 45, 108, 105, 110, 101, 32, 110, 111, 45, 115, 101, 99, 114, 101, 116, 115, 47, 110, 111, 45, 115, 101, 99, 114, 101, 116, 115, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 111, 109, 109, 97, 110, 100, 115, 32, 61, 32, 123, 10, 32, 32, 32, 32, 115, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 114, 97, 110, 115, 102, 111, 114, 109, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 103, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 103, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 103, 101, 116, 68, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 83, 116, 97, 116, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 76, 111, 97, 100, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 76, 111, 97, 100, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 80, 97, 117, 115, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 80, 97, 117, 115, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 80, 108, 97, 121, 105, 110, 103, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 83, 116, 111, 112, 112, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 83, 116, 111, 112, 112, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 70, 114, 111, 122, 101, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 70, 114, 111, 122, 101, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 111, 112, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 111, 100, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 112, 101, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 117, 114, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 100, 117, 114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 115, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 115, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 117, 116, 111, 112, 108, 97, 121, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 103, 109, 101, 110, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 97, 121, 111, 117, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 82, 101, 97, 100, 121, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 82, 101, 97, 100, 121, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 110, 105, 102, 101, 115, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 110, 105, 102, 101, 115, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 97, 116, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97, 121, 111, 117, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 108, 97, 121, 111, 117, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 68, 97, 116, 97, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 111, 97, 100, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 67, 108, 105, 99, 107, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 67, 108, 105, 99, 107, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 80, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 118, 97, 108, 117, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 118, 97, 108, 117, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 67, 111, 110, 102, 105, 103, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 67, 111, 110, 102, 105, 103, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 118, 97, 108, 117, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 105, 114, 101, 69, 118, 101, 110, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 105, 114, 101, 69, 118, 101, 110, 116, 40, 110, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 97, 116, 117, 115, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 83, 116, 97, 116, 117, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 67, 117, 114, 114, 101, 110, 116, 83, 116, 97, 116, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 67, 117, 114, 114, 101, 110, 116, 83, 116, 97, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 65, 99, 116, 105, 118, 101, 73, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 65, 99, 116, 105, 118, 101, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 118, 101, 114, 114, 105, 100, 101, 83, 116, 97, 116, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 109, 109, 101, 100, 105, 97, 116, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 79, 118, 101, 114, 114, 105, 100, 101, 83, 116, 97, 116, 101, 40, 115, 116, 97, 116, 101, 44, 32, 105, 109, 109, 101, 100, 105, 97, 116, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 71, 101, 116, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 99, 114, 101, 97, 116, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 104, 97, 115, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 97, 108, 114, 101, 97, 100, 121, 32, 101, 120, 105, 115, 116, 115, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 110, 101, 119, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 115, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 32, 105, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 118, 101, 110, 116, 115, 32, 61, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 111, 109, 112, 108, 101, 116, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 110, 100, 101, 114, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 112, 97, 117, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 112, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 100, 101, 115, 116, 114, 111, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 117, 110, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 97, 100, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 114, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 110, 116, 101, 114, 101, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 97, 116, 101, 69, 120, 105, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 67, 117, 115, 116, 111, 109, 69, 118, 101, 110, 116, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 73, 110, 112, 117, 116, 86, 97, 108, 117, 101, 67, 104, 97, 110, 103, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 112, 117, 116, 70, 105, 114, 101, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 110, 116, 101, 114, 110, 97, 108, 77, 101, 115, 115, 97, 103, 101, 34, 10, 32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 101, 118, 101, 110, 116, 44, 32, 101, 118, 101, 110, 116, 72, 97, 110, 100, 108, 101, 114, 77, 97, 112, 91, 101, 118, 101, 110, 116, 93, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 100, 101, 115, 116, 114, 111, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 100, 101, 108, 101, 116, 101, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 104, 101, 109, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 68, 97, 116, 97, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 104, 101, 109, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 115, 105, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97, 109, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 102, 114, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 70, 114, 97, 109, 101, 40, 102, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111, 100, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 109, 111, 100, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111, 100, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115, 101, 103, 109, 101, 110, 116, 91, 48, 93, 44, 32, 115, 101, 103, 109, 101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101, 101, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 112, 101, 101, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 112, 101, 101, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 83, 112, 101, 101, 100, 40, 115, 112, 101, 101, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 116, 119, 101, 101, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 102, 114, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 117, 114, 97, 116, 105, 111, 110, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 100, 117, 114, 97, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 116, 119, 101, 101, 110, 40, 102, 114, 97, 109, 101, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 116, 119, 101, 101, 110, 84, 111, 77, 97, 114, 107, 101, 114, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 117, 114, 97, 116, 105, 111, 110, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 100, 117, 114, 97, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 116, 119, 101, 101, 110, 84, 111, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 44, 32, 100, 117, 114, 97, 116, 105, 111, 110, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 104, 101, 105, 103, 104, 116, 44, 32, 119, 105, 100, 116, 104, 32, 125, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 105, 100, 116, 104, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111, 112, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 108, 111, 111, 112, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 111, 111, 112, 40, 108, 111, 111, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 67, 111, 117, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 111, 111, 112, 67, 111, 117, 110, 116, 40, 108, 111, 111, 112, 67, 111, 117, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 120, 101, 99, 117, 116, 101, 67, 111, 109, 109, 97, 110, 100, 40, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 101, 116, 104, 111, 100, 32, 61, 32, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 46, 109, 101, 116, 104, 111, 100, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 99, 111, 109, 109, 97, 110, 100, 115, 91, 109, 101, 116, 104, 111, 100, 93, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 109, 109, 97, 110, 100, 115, 91, 109, 101, 116, 104, 111, 100, 93, 40, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 41, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 77, 101, 116, 104, 111, 100, 32, 36, 123, 109, 101, 116, 104, 111, 100, 125, 32, 105, 115, 32, 110, 111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 32, 105, 110, 32, 99, 111, 109, 109, 97, 110, 100, 115, 46, 96, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 10, 32, 32, 115, 101, 108, 102, 46, 111, 110, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 117, 108, 116, 32, 61, 32, 101, 120, 101, 99, 117, 116, 101, 67, 111, 109, 109, 97, 110, 100, 40, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 105, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 105, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 101, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 100, 117, 109, 109, 121, 32, 61, 32, 34, 34, 59, 10, 32, 32, 118, 97, 114, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 119, 111, 114, 107, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32, 100, 117, 109, 109, 121, 59, 10, 125, 41, 40, 41, 59, 10])], {
                        type: "application/javascript"
                    }),
                    t = URL.createObjectURL(e),
                    n = new Worker(t);
                return URL.revokeObjectURL(t), n
            }
        },
        eK = class {
            constructor() {
                eC(this, "_workers", new Map), eC(this, "_animationWorkerMap", new Map)
            }
            getWorker(e) {
                return this._workers.has(e) || this._workers.set(e, new eJ), this._workers.get(e)
            }
            assignAnimationToWorker(e, t) {
                this._animationWorkerMap.set(e, t)
            }
            unassignAnimationFromWorker(e) {
                this._animationWorkerMap.delete(e)
            }
            sendMessage(e, t, n) {
                this.getWorker(e).postMessage(t, n || [])
            }
            terminateWorker(e) {
                let t = this._workers.get(e);
                t && (t.terminate(), this._workers.delete(e))
            }
        };

    function eQ(e, t) {
        if (e instanceof HTMLCanvasElement) {
            let {
                height: n,
                width: a
            } = e.getBoundingClientRect();
            if (0 !== n && 0 !== a) return {
                width: a * t,
                height: n * t
            }
        }
        return {
            width: e.width,
            height: e.height
        }
    }

    function eZ() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
    }
    var eX = class e {
        constructor(t) {
            eC(this, "_eventManager", new eT), eC(this, "_id"), eC(this, "_worker"), eC(this, "_canvas"), eC(this, "_dotLottieInstanceState", {
                loopCount: 0,
                markers: [],
                autoplay: !1,
                backgroundColor: "",
                currentFrame: 0,
                duration: 0,
                loop: !1,
                mode: "forward",
                segment: [0, 0],
                segmentDuration: 0,
                speed: 1,
                totalFrames: 0,
                isLoaded: !1,
                isPlaying: !1,
                isPaused: !1,
                isStopped: !0,
                isFrozen: !1,
                useFrameInterpolation: !1,
                renderConfig: {
                    devicePixelRatio: eU()
                },
                activeAnimationId: "",
                activeThemeId: "",
                layout: void 0,
                marker: void 0,
                isReady: !1,
                manifest: null
            }), eC(this, "_created", !1), eC(this, "_boundOnClick", null), eC(this, "_boundOnPointerUp", null), eC(this, "_boundOnPointerDown", null), eC(this, "_boundOnPointerMove", null), eC(this, "_boundOnPointerEnter", null), eC(this, "_boundOnPointerLeave", null), this._canvas = t.canvas, this._id = `dotlottie-${eZ()}`;
            let n = t.workerId || "defaultWorker";
            this._worker = e._workerManager.getWorker(n), e._workerManager.assignAnimationToWorker(this._id, n), e._wasmUrl && this._sendMessage("setWasmUrl", {
                url: e._wasmUrl
            }), this._create({ ...t,
                renderConfig: { ...t.renderConfig,
                    devicePixelRatio: t.renderConfig ? .devicePixelRatio || eU(),
                    freezeOnOffscreen: t.renderConfig ? .freezeOnOffscreen ? ? !0
                }
            }), this._worker.addEventListener("message", this._handleWorkerEvent.bind(this))
        }
        async _handleWorkerEvent(e) {
            let t = e.data;
            if (!t.id && ("onLoad" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event), ex && this._canvas instanceof HTMLCanvasElement && (this._dotLottieInstanceState.renderConfig.freezeOnOffscreen && (eD.observe(this._canvas, this), eW(this._canvas) || await this.freeze()), this._dotLottieInstanceState.renderConfig.autoResize && ez.observe(this._canvas, this))), "onComplete" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onDestroy" === t.method && t.result.instanceId === this._id && this._eventManager.dispatch(t.result.event), "onUnfreeze" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._dotLottieInstanceState.isFrozen = !1, this._eventManager.dispatch(t.result.event)), "onFrame" === t.method && t.result.instanceId === this._id && (this._dotLottieInstanceState.currentFrame = t.result.event.currentFrame, this._eventManager.dispatch(t.result.event)), "onRender" === t.method && t.result.instanceId === this._id && this._eventManager.dispatch(t.result.event), "onFreeze" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onPause" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onPlay" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStop" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onLoadError" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onRenderError" === t.method && t.result.instanceId === this._id && this._eventManager.dispatch(t.result.event), "onReady" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onLoop" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStateMachineStart" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._setupStateMachineListeners(), this._eventManager.dispatch(t.result.event)), "onStateMachineStop" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._cleanupStateMachineListeners(), this._eventManager.dispatch(t.result.event)), "onStateMachineTransition" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStateMachineStateEntered" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStateMachineStateExit" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStateMachineCustomEvent" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStateMachineError" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStateMachineBooleanInputValueChange" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStateMachineNumericInputValueChange" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStateMachineStringInputValueChange" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStateMachineInputFired" === t.method && t.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), "onStateMachineInternalMessage" === t.method && t.result.instanceId === this._id)) {
                await this._updateDotLottieInstanceState();
                let e = t.result.event;
                e.message.startsWith("OpenUrl: ") && eH(e.message)
            }
        }
        async _create(e) {
            let t;
            t = this._canvas instanceof HTMLCanvasElement ? this._canvas.transferControlToOffscreen() : this._canvas;
            let {
                instanceId: n
            } = await this._sendMessage("create", {
                instanceId: this._id,
                config: { ...e,
                    canvas: t
                },
                ...eQ(this._canvas, e.renderConfig ? .devicePixelRatio || eU())
            }, [t]);
            if (n !== this._id) throw Error("Instance ID mismatch");
            this._created = !0, await this._updateDotLottieInstanceState()
        }
        get loopCount() {
            return this._dotLottieInstanceState.loopCount
        }
        get isLoaded() {
            return this._dotLottieInstanceState.isLoaded
        }
        get isPlaying() {
            return this._dotLottieInstanceState.isPlaying
        }
        get isPaused() {
            return this._dotLottieInstanceState.isPaused
        }
        get isStopped() {
            return this._dotLottieInstanceState.isStopped
        }
        get currentFrame() {
            return this._dotLottieInstanceState.currentFrame
        }
        get isFrozen() {
            return this._dotLottieInstanceState.isFrozen
        }
        get segmentDuration() {
            return this._dotLottieInstanceState.segmentDuration
        }
        get totalFrames() {
            return this._dotLottieInstanceState.totalFrames
        }
        get segment() {
            return this._dotLottieInstanceState.segment
        }
        get speed() {
            return this._dotLottieInstanceState.speed
        }
        get duration() {
            return this._dotLottieInstanceState.duration
        }
        get isReady() {
            return this._dotLottieInstanceState.isReady
        }
        get mode() {
            return this._dotLottieInstanceState.mode
        }
        get canvas() {
            return this._canvas
        }
        get autoplay() {
            return this._dotLottieInstanceState.autoplay
        }
        get backgroundColor() {
            return this._dotLottieInstanceState.backgroundColor
        }
        get loop() {
            return this._dotLottieInstanceState.loop
        }
        get useFrameInterpolation() {
            return this._dotLottieInstanceState.useFrameInterpolation
        }
        get renderConfig() {
            return this._dotLottieInstanceState.renderConfig
        }
        get manifest() {
            return this._dotLottieInstanceState.manifest
        }
        get activeAnimationId() {
            return this._dotLottieInstanceState.activeAnimationId
        }
        get marker() {
            return this._dotLottieInstanceState.marker
        }
        get activeThemeId() {
            return this._dotLottieInstanceState.activeThemeId
        }
        get layout() {
            return this._dotLottieInstanceState.layout
        }
        async play() {
            this._created && (await this._sendMessage("play", {
                instanceId: this._id
            }), await this._updateDotLottieInstanceState(), ex && this._canvas instanceof HTMLCanvasElement && this._dotLottieInstanceState.renderConfig.freezeOnOffscreen && !eW(this._canvas) && await this.freeze())
        }
        async pause() {
            this._created && (await this._sendMessage("pause", {
                instanceId: this._id
            }), await this._updateDotLottieInstanceState())
        }
        async stop() {
            this._created && (await this._sendMessage("stop", {
                instanceId: this._id
            }), await this._updateDotLottieInstanceState())
        }
        async setSpeed(e) {
            this._created && (await this._sendMessage("setSpeed", {
                instanceId: this._id,
                speed: e
            }), await this._updateDotLottieInstanceState())
        }
        async setMode(e) {
            this._created && (await this._sendMessage("setMode", {
                instanceId: this._id,
                mode: e
            }), await this._updateDotLottieInstanceState())
        }
        async setFrame(e) {
            this._created && (await this._sendMessage("setFrame", {
                frame: e,
                instanceId: this._id
            }), await this._updateDotLottieInstanceState())
        }
        async setSegment(e, t) {
            this._created && (await this._sendMessage("setSegment", {
                instanceId: this._id,
                segment: [e, t]
            }), await this._updateDotLottieInstanceState())
        }
        async setRenderConfig(e) {
            if (!this._created) return;
            let {
                devicePixelRatio: t,
                freezeOnOffscreen: n,
                quality: a,
                ...i
            } = e;
            await this._sendMessage("setRenderConfig", {
                instanceId: this._id,
                renderConfig: { ...this._dotLottieInstanceState.renderConfig,
                    ...i,
                    devicePixelRatio: t || eU(),
                    freezeOnOffscreen: n ? ? !0,
                    ...void 0 !== a && {
                        quality: a
                    }
                }
            }), await this._updateDotLottieInstanceState(), ex && this._canvas instanceof HTMLCanvasElement && (this._dotLottieInstanceState.renderConfig.autoResize ? ez.observe(this._canvas, this) : ez.unobserve(this._canvas), this._dotLottieInstanceState.renderConfig.freezeOnOffscreen ? (eD.observe(this._canvas, this), eW(this._canvas) || await this.freeze()) : (eD.unobserve(this._canvas), this._dotLottieInstanceState.isFrozen && await this.unfreeze()))
        }
        async setUseFrameInterpolation(e) {
            this._created && (await this._sendMessage("setUseFrameInterpolation", {
                instanceId: this._id,
                useFrameInterpolation: e
            }), await this._updateDotLottieInstanceState())
        }
        async setTheme(e) {
            if (!this._created) return !1;
            let t = this._sendMessage("setTheme", {
                instanceId: this._id,
                themeId: e
            });
            return await this._updateDotLottieInstanceState(), t
        }
        async load(e) {
            this._created && (await this._sendMessage("load", {
                config: e,
                instanceId: this._id
            }), await this._updateDotLottieInstanceState())
        }
        async setLoop(e) {
            this._created && (await this._sendMessage("setLoop", {
                instanceId: this._id,
                loop: e
            }), await this._updateDotLottieInstanceState())
        }
        async setLoopCount(e) {
            this._created && (await this._sendMessage("setLoopCount", {
                instanceId: this._id,
                loopCount: e
            }), await this._updateDotLottieInstanceState())
        }
        async resize() {
            if (!this._created) return;
            let {
                height: e,
                width: t
            } = eQ(this._canvas, this._dotLottieInstanceState.renderConfig.devicePixelRatio || eU());
            await this._sendMessage("resize", {
                height: e,
                instanceId: this._id,
                width: t
            }), await this._updateDotLottieInstanceState()
        }
        async destroy() {
            this._created && (this._created = !1, await this._sendMessage("destroy", {
                instanceId: this._id
            }), this._cleanupStateMachineListeners(), e._workerManager.unassignAnimationFromWorker(this._id), this._eventManager.removeAllEventListeners(), ex && this._canvas instanceof HTMLCanvasElement && (eD.unobserve(this._canvas), ez.unobserve(this._canvas)))
        }
        async freeze() {
            this._created && (await this._sendMessage("freeze", {
                instanceId: this._id
            }), await this._updateDotLottieInstanceState())
        }
        async unfreeze() {
            this._created && (await this._sendMessage("unfreeze", {
                instanceId: this._id
            }), await this._updateDotLottieInstanceState())
        }
        async setBackgroundColor(e) {
            this._created && (await this._sendMessage("setBackgroundColor", {
                instanceId: this._id,
                backgroundColor: e
            }), await this._updateDotLottieInstanceState())
        }
        async loadAnimation(e) {
            this._created && (await this._sendMessage("loadAnimation", {
                animationId: e,
                instanceId: this._id
            }), await this._updateDotLottieInstanceState())
        }
        async setLayout(e) {
            this._created && (await this._sendMessage("setLayout", {
                instanceId: this._id,
                layout: e
            }), await this._updateDotLottieInstanceState())
        }
        async _updateDotLottieInstanceState() {
            if (!this._created) return;
            let e = await this._sendMessage("getDotLottieInstanceState", {
                instanceId: this._id
            });
            this._dotLottieInstanceState = e.state
        }
        markers() {
            return this._dotLottieInstanceState.markers
        }
        async setMarker(e) {
            this._created && (await this._sendMessage("setMarker", {
                instanceId: this._id,
                marker: e
            }), await this._updateDotLottieInstanceState())
        }
        async setThemeData(e) {
            if (!this._created) return !1;
            let t = await this._sendMessage("setThemeData", {
                instanceId: this._id,
                themeData: e
            });
            return await this._updateDotLottieInstanceState(), t
        }
        async setViewport(e, t, n, a) {
            return !!this._created && this._sendMessage("setViewport", {
                x: e,
                y: t,
                width: n,
                height: a,
                instanceId: this._id
            })
        }
        async animationSize() {
            return this._created ? this._sendMessage("animationSize", {
                instanceId: this._id
            }) : {
                height: 0,
                width: 0
            }
        }
        async tween(e, t) {
            return !!this._created && this._sendMessage("tween", {
                instanceId: this._id,
                frame: e,
                duration: t
            })
        }
        async tweenToMarker(e, t) {
            return !!this._created && this._sendMessage("tweenToMarker", {
                instanceId: this._id,
                marker: e,
                duration: t
            })
        }
        async setTransform(e) {
            return !!this._created && this._sendMessage("setTransform", {
                instanceId: this._id,
                transform: e
            })
        }
        async getTransform() {
            if (this._created) return this._sendMessage("getTransform", {
                instanceId: this._id
            })
        }
        async _sendMessage(e, t, n) {
            let a = {
                id: `dotlottie-request-${eZ()}`,
                method: e,
                params: t
            };
            return this._worker.postMessage(a, n || []), new Promise((t, n) => {
                let i = r => {
                    let s = r.data;
                    s.id === a.id && (this._worker.removeEventListener("message", i), s.error ? n(Error(`Failed to execute method ${e}: ${s.error}`)) : t(s.result))
                };
                this._worker.addEventListener("message", i)
            })
        }
        addEventListener(e, t) {
            this._eventManager.addEventListener(e, t)
        }
        removeEventListener(e, t) {
            this._eventManager.removeEventListener(e, t)
        }
        static setWasmUrl(t) {
            e._wasmUrl = t
        }
        async stateMachineLoad(e) {
            if (!this._created) return !1;
            let t = await this._sendMessage("stateMachineLoad", {
                instanceId: this._id,
                stateMachineId: e
            });
            return await this._updateDotLottieInstanceState(), t
        }
        async stateMachineLoadData(e) {
            if (!this._created) return !1;
            let t = await this._sendMessage("stateMachineLoadData", {
                instanceId: this._id,
                stateMachineData: e
            });
            return await this._updateDotLottieInstanceState(), t
        }
        async stateMachineStart() {
            if (!this._created) return !1;
            let e = await this._sendMessage("stateMachineStart", {
                instanceId: this._id
            });
            return e && (this._setupStateMachineListeners(), await this._updateDotLottieInstanceState()), e
        }
        async stateMachineStop() {
            return !!this._created && (this._cleanupStateMachineListeners(), this._sendMessage("stateMachineStop", {
                instanceId: this._id
            }))
        }
        async stateMachineSetNumericInput(e, t) {
            return !!this._created && this._sendMessage("stateMachineSetNumericInput", {
                instanceId: this._id,
                name: e,
                value: t
            })
        }
        async stateMachineSetBooleanInput(e, t) {
            return !!this._created && this._sendMessage("stateMachineSetBooleanInput", {
                instanceId: this._id,
                name: e,
                value: t
            })
        }
        async stateMachineSetConfig(e) {
            this._created && this._sendMessage("stateMachineSetConfig", {
                instanceId: this._id,
                config: e
            })
        }
        async stateMachineSetStringInput(e, t) {
            return !!this._created && this._sendMessage("stateMachineSetStringInput", {
                instanceId: this._id,
                name: e,
                value: t
            })
        }
        async stateMachineGetNumericInput(e) {
            if (this._created) return this._sendMessage("stateMachineGetNumericInput", {
                instanceId: this._id,
                name: e
            })
        }
        async stateMachineGetBooleanInput(e) {
            if (this._created) return this._sendMessage("stateMachineGetBooleanInput", {
                instanceId: this._id,
                name: e
            })
        }
        async stateMachineGetStringInput(e) {
            if (this._created) return this._sendMessage("stateMachineGetStringInput", {
                instanceId: this._id,
                name: e
            })
        }
        async stateMachineFireEvent(e) {
            this._created && this._sendMessage("stateMachineFireEvent", {
                instanceId: this._id,
                name: e
            })
        }
        async stateMachineGetStatus() {
            return this._created ? this._sendMessage("stateMachineGetStatus", {
                instanceId: this._id
            }) : ""
        }
        async stateMachineGetCurrentState() {
            return this._created ? this._sendMessage("stateMachineGetCurrentState", {
                instanceId: this._id
            }) : ""
        }
        async stateMachineGetActiveId() {
            return this._created ? this._sendMessage("stateMachineGetActiveId", {
                instanceId: this._id
            }) : ""
        }
        async stateMachineOverrideState(e, t = !1) {
            return !!this._created && this._sendMessage("stateMachineOverrideState", {
                instanceId: this._id,
                state: e,
                immediate: t
            })
        }
        async stateMachineGet(e) {
            return this._created ? this._sendMessage("stateMachineGet", {
                instanceId: this._id,
                stateMachineId: e
            }) : ""
        }
        async stateMachineGetListeners() {
            return this._created ? this._sendMessage("stateMachineGetListeners", {
                instanceId: this._id
            }) : []
        }
        async stateMachinePostClickEvent(e, t) {
            if (this._created) return this._sendMessage("stateMachinePostClickEvent", {
                instanceId: this._id,
                x: e,
                y: t
            })
        }
        async stateMachinePostPointerUpEvent(e, t) {
            if (this._created) return this._sendMessage("stateMachinePostPointerUpEvent", {
                instanceId: this._id,
                x: e,
                y: t
            })
        }
        async stateMachinePostPointerDownEvent(e, t) {
            if (this._created) return this._sendMessage("stateMachinePostPointerDownEvent", {
                instanceId: this._id,
                x: e,
                y: t
            })
        }
        async stateMachinePostPointerMoveEvent(e, t) {
            if (this._created) return this._sendMessage("stateMachinePostPointerMoveEvent", {
                instanceId: this._id,
                x: e,
                y: t
            })
        }
        async stateMachinePostPointerEnterEvent(e, t) {
            if (this._created) return this._sendMessage("stateMachinePostPointerEnterEvent", {
                instanceId: this._id,
                x: e,
                y: t
            })
        }
        async stateMachinePostPointerExitEvent(e, t) {
            if (this._created) return this._sendMessage("stateMachinePostPointerExitEvent", {
                instanceId: this._id,
                x: e,
                y: t
            })
        }
        _onClick(e) {
            let t = eB(e);
            t && this._sendMessage("stateMachinePostClickEvent", {
                instanceId: this._id,
                x: t.x,
                y: t.y
            })
        }
        _onPointerUp(e) {
            let t = eB(e);
            t && this._sendMessage("stateMachinePostPointerUpEvent", {
                instanceId: this._id,
                x: t.x,
                y: t.y
            })
        }
        _onPointerDown(e) {
            let t = eB(e);
            t && this._sendMessage("stateMachinePostPointerDownEvent", {
                instanceId: this._id,
                x: t.x,
                y: t.y
            })
        }
        _onPointerMove(e) {
            let t = eB(e);
            t && this._sendMessage("stateMachinePostPointerMoveEvent", {
                instanceId: this._id,
                x: t.x,
                y: t.y
            })
        }
        _onPointerEnter(e) {
            let t = eB(e);
            t && this._sendMessage("stateMachinePostPointerEnterEvent", {
                instanceId: this._id,
                x: t.x,
                y: t.y
            })
        }
        _onPointerLeave(e) {
            let t = eB(e);
            t && this._sendMessage("stateMachinePostPointerExitEvent", {
                instanceId: this._id,
                x: t.x,
                y: t.y
            })
        }
        async _setupStateMachineListeners() {
            if (ex && this._canvas instanceof HTMLCanvasElement && this.isLoaded) {
                let e = await this._sendMessage("stateMachineGetListeners", {
                    instanceId: this._id
                });
                0 !== e.length && (this._cleanupStateMachineListeners(), e.includes("Click") && (this._boundOnClick = this._onClick.bind(this), this._canvas.addEventListener("click", this._boundOnClick)), e.includes("PointerUp") && (this._boundOnPointerUp = this._onPointerUp.bind(this), this._canvas.addEventListener("pointerup", this._boundOnPointerUp)), e.includes("PointerDown") && (this._boundOnPointerDown = this._onPointerDown.bind(this), this._canvas.addEventListener("pointerdown", this._boundOnPointerDown)), e.includes("PointerMove") && (this._boundOnPointerMove = this._onPointerMove.bind(this), this._canvas.addEventListener("pointermove", this._boundOnPointerMove)), e.includes("PointerEnter") && (this._boundOnPointerEnter = this._onPointerEnter.bind(this), this._canvas.addEventListener("pointerenter", this._boundOnPointerEnter)), e.includes("PointerExit") && (this._boundOnPointerLeave = this._onPointerLeave.bind(this), this._canvas.addEventListener("pointerleave", this._boundOnPointerLeave)))
            }
        }
        _cleanupStateMachineListeners() {
            ex && this._canvas instanceof HTMLCanvasElement && (this._boundOnClick && (this._canvas.removeEventListener("click", this._boundOnClick), this._boundOnClick = null), this._boundOnPointerUp && (this._canvas.removeEventListener("pointerup", this._boundOnPointerUp), this._boundOnPointerUp = null), this._boundOnPointerDown && (this._canvas.removeEventListener("pointerdown", this._boundOnPointerDown), this._boundOnPointerDown = null), this._boundOnPointerMove && (this._canvas.removeEventListener("pointermove", this._boundOnPointerMove), this._boundOnPointerMove = null), this._boundOnPointerEnter && (this._canvas.removeEventListener("pointerenter", this._boundOnPointerEnter), this._boundOnPointerEnter = null), this._boundOnPointerLeave && (this._canvas.removeEventListener("pointerleave", this._boundOnPointerLeave), this._boundOnPointerLeave = null))
        }
    };
    eC(eX, "_workerManager", new eK), eC(eX, "_wasmUrl", "");
    var eY = ({
            animationId: e,
            autoplay: t,
            backgroundColor: n,
            className: a,
            createDotLottie: s,
            data: o,
            dotLottieRefCallback: l,
            layout: d,
            loop: c,
            mode: h,
            playOnHover: u,
            renderConfig: m,
            segment: f,
            speed: p,
            src: _,
            stateMachineConfig: v,
            stateMachineId: g,
            style: b,
            themeData: y,
            themeId: w,
            useFrameInterpolation: M,
            workerId: C,
            ...L
        }) => {
            let k = (0, r.useRef)(null),
                I = (0, r.useRef)(null),
                x = (0, r.useRef)(l),
                S = {
                    speed: p,
                    mode: h,
                    loop: c,
                    useFrameInterpolation: M,
                    segment: f,
                    backgroundColor: n,
                    autoplay: t,
                    themeId: w,
                    workerId: C,
                    src: _,
                    data: o,
                    layout: d,
                    renderConfig: m,
                    animationId: e,
                    stateMachineConfig: v,
                    stateMachineId: g
                },
                E = (0, r.useRef)(S);
            x.current = l, E.current = S;
            let P = (0, r.useCallback)(e => {
                I.current = e, e ? k.current = s({ ...E.current,
                    canvas: e
                }) : (k.current ? .destroy(), k.current = null), x.current ? .(k.current)
            }, []);
            return (0, r.useEffect)(() => {
                let e = e => {
                    u && ("mouseenter" === e.type && k.current ? .play(), "mouseleave" === e.type && k.current ? .pause())
                };
                return I.current ? .addEventListener("mouseenter", e), I.current ? .addEventListener("mouseleave", e), () => {
                    I.current ? .removeEventListener("mouseenter", e), I.current ? .removeEventListener("mouseleave", e)
                }
            }, [u]), (0, r.useEffect)(() => {
                k.current ? .setSpeed(p ? ? 1)
            }, [p]), (0, r.useEffect)(() => {
                k.current ? .setMode(h ? ? "forward")
            }, [h]), (0, r.useEffect)(() => {
                k.current ? .setLoop(c ? ? !1)
            }, [c]), (0, r.useEffect)(() => {
                k.current ? .setUseFrameInterpolation(M ? ? !0)
            }, [M]), (0, r.useEffect)(() => {
                "number" == typeof f ? .[0] && "number" == typeof f[1] && k.current ? .setSegment(f[0], f[1])
            }, [f]), (0, r.useEffect)(() => {
                k.current ? .setBackgroundColor(n ? ? "")
            }, [n]), (0, r.useEffect)(() => {
                k.current ? .setRenderConfig(m ? ? {})
            }, [JSON.stringify(m)]), (0, r.useEffect)(() => {
                "string" != typeof o && "object" != typeof o || k.current ? .load({
                    data: o,
                    ...E.current
                })
            }, [o]), (0, r.useEffect)(() => {
                "string" == typeof _ && k.current ? .load({
                    src: _,
                    ...E.current
                })
            }, [_]), (0, r.useEffect)(() => {
                k.current ? .setMarker(L.marker ? ? "")
            }, [L.marker]), (0, r.useEffect)(() => {
                k.current ? .loadAnimation(e ? ? "")
            }, [e]), (0, r.useEffect)(() => {
                "string" == typeof w && k.current ? .setTheme(w)
            }, [w]), (0, r.useEffect)(() => {
                k.current ? .setThemeData(y ? ? "")
            }, [y]), (0, r.useEffect)(() => {
                k.current ? .setLayout(d ? ? {})
            }, [d ? .fit, d ? .align && d.align[0], d ? .align && d.align[1]]), (0, r.useEffect)(() => {
                k.current ? .isLoaded && ("string" == typeof g && g ? k.current.stateMachineLoad(g) && k.current.stateMachineStart() : k.current.stateMachineStop())
            }, [g]), (0, r.useEffect)(() => {
                k.current ? .stateMachineSetConfig(v ? ? null)
            }, [v]), (0, i.jsx)("div", {
                className: a,
                ...!a && {
                    style: {
                        width: "100%",
                        height: "100%",
                        lineHeight: 0,
                        ...b
                    }
                },
                children: (0, i.jsx)("canvas", {
                    ref: P,
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    ...L
                })
            })
        },
        e1 = e => new eq(e),
        e2 = e => (0, i.jsx)(eY, { ...e,
            createDotLottie: e1
        });

    function e3() {
        let [e, t] = (0, r.useState)(!1);
        return (0, r.useEffect)(() => {
            let e = requestAnimationFrame(() => t(!0));
            return () => cancelAnimationFrame(e)
        }, []), (0, i.jsx)("div", {
            className: "h-full w-full transition-opacity duration-200",
            style: {
                opacity: +!!e
            },
            children: (0, i.jsx)(e2, {
                src: "/lotties/check.lottie",
                loop: !1,
                autoplay: !0
            })
        })
    }
    e.s(["default", () => e3], 88192), e.s(["default", 0, function({
        start: e,
        end: t,
        duration: n
    }) {
        let [a, i] = (0, r.useState)(e);
        return (0, r.useEffect)(() => {
            let a, r = null,
                s = o => {
                    r || (r = o);
                    let l = Math.min((o - r) / n, 1);
                    i((1 === l ? 1 : 1 - Math.pow(2, -10 * l)) * (t - e) + e), l < 1 ? a = requestAnimationFrame(s) : i(t)
                };
            return a = requestAnimationFrame(s), () => {
                cancelAnimationFrame(a)
            }
        }, [e, t, n]), Math.round(a)
    }], 53624)
}]);
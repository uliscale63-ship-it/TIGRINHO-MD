
const emojis = ["🐅", "💰", "🏮", "🔔"];

const slots = [
    "slot1", "slot2", "slot3",
    "slot4", "slot5", "slot6",
    "slot7", "slot8", "slot9"
];

const playBtn = document.getElementById("playBtn");

// 🔊 SOM DE CASSINO
const somCassino = new Audio("https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=405921");
somCassino.loop = true;

// CONTROLE
let spinning = false;
let jogadas = 0;
let maxJogadas = 10;


// atualizar saldo na tela
function atualizarSaldo() {
    const spans = document.querySelectorAll("span");

    spans.forEach(el => {
        const pai = el.closest("div");

        if (pai && pai.innerText.includes("SALDO")) {
            el.innerText = saldo + " Kz";
        }
    });
}


// atualizar rodadas
function atualizarRodadas() {
    const rodadasEl = document.querySelector("div span");
    if (rodadasEl) {
        rodadasEl.innerText = jogadas + "/10";
    }
}

// NOTIFICAÇÃO
function showToast(msg) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = msg;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// CONFETE 🎉
function soltarConfete() {
    for (let i = 0; i < 50; i++) {
        const conf = document.createElement("div");
        conf.className = "confetti";
        conf.style.left = Math.random() * 100 + "vw";
        conf.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        conf.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(conf);

        setTimeout(() => conf.remove(), 3000);
    }
}

playBtn.addEventListener("click", () => {
    if (spinning) return;

    if (jogadas >= maxJogadas) {
        showToast("🚫 Você já usou todas as 10 jogadas!");
        return;
    }

    jogadas++;
    spinning = true;
    playBtn.innerText = "...";

    atualizarRodadas();

    // 🔊 inicia som
    somCassino.currentTime = 0;
    somCassino.play();

    let interval = setInterval(() => {
        slots.forEach(id => {
            document.getElementById(id).innerText =
                emojis[Math.floor(Math.random() * emojis.length)];
        });
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        spinning = false;
        playBtn.innerText = "JOGAR";

        // 🔊 parar som
        somCassino.pause();

        // 💰 aumenta saldo a cada rodada
        saldo += 8500;

        atualizarSaldo();
        showToast("🎉 Você ganhou 8500 Kz!");
        soltarConfete();

    }, 2000);
});

















var Ch = e => {
    throw TypeError(e)
}
    ;
var Yl = (e, t, n) => t.has(e) || Ch("Cannot " + n);
var R = (e, t, n) => (Yl(e, t, "read from private field"),
    n ? n.call(e) : t.get(e))
    , J = (e, t, n) => t.has(e) ? Ch("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
    , K = (e, t, n, r) => (Yl(e, t, "write to private field"),
        r ? r.call(e, n) : t.set(e, n),
        n)
    , Le = (e, t, n) => (Yl(e, t, "access private method"),
        n);
var Ls = (e, t, n, r) => ({
    set _(i) {
        K(e, t, i, n)
    },
    get _() {
        return R(e, t, r)
    }
});
function _1(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
            o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function Gg(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Qg = {
    exports: {}
}
    , pl = {}
    , Xg = {
        exports: {}
    }
    , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs = Symbol.for("react.element")
    , V1 = Symbol.for("react.portal")
    , B1 = Symbol.for("react.fragment")
    , z1 = Symbol.for("react.strict_mode")
    , $1 = Symbol.for("react.profiler")
    , U1 = Symbol.for("react.provider")
    , W1 = Symbol.for("react.context")
    , H1 = Symbol.for("react.forward_ref")
    , K1 = Symbol.for("react.suspense")
    , G1 = Symbol.for("react.memo")
    , Q1 = Symbol.for("react.lazy")
    , Th = Symbol.iterator;
function X1(e) {
    return e === null || typeof e != "object" ? null : (e = Th && e[Th] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var Yg = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
}
    , qg = Object.assign
    , Zg = {};
function Yi(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = Zg,
        this.updater = n || Yg
}
Yi.prototype.isReactComponent = {};
Yi.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
    ;
Yi.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
    ;
function Jg() { }
Jg.prototype = Yi.prototype;
function kd(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = Zg,
        this.updater = n || Yg
}
var Rd = kd.prototype = new Jg;
Rd.constructor = kd;
qg(Rd, Yi.prototype);
Rd.isPureReactComponent = !0;
var Eh = Array.isArray
    , ey = Object.prototype.hasOwnProperty
    , Ad = {
        current: null
    }
    , ty = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function ny(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
            t.key !== void 0 && (o = "" + t.key),
            t)
            ey.call(t, r) && !ty.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
            a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: gs,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Ad.current
    }
}
function Y1(e, t) {
    return {
        $$typeof: gs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Nd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === gs
}
function q1(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var Ph = /\/+/g;
function ql(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? q1("" + e.key) : t.toString(36)
}
function aa(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case gs:
                    case V1:
                        s = !0
                }
        }
    if (s)
        return s = e,
            i = i(s),
            e = r === "" ? "." + ql(s, 0) : r,
            Eh(i) ? (n = "",
                e != null && (n = e.replace(Ph, "$&/") + "/"),
                aa(i, t, n, "", function (u) {
                    return u
                })) : i != null && (Nd(i) && (i = Y1(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Ph, "$&/") + "/") + e)),
                    t.push(i)),
            1;
    if (s = 0,
        r = r === "" ? "." : r + ":",
        Eh(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + ql(o, a);
            s += aa(o, t, n, l, i)
        }
    else if (l = X1(e),
        typeof l == "function")
        for (e = l.call(e),
            a = 0; !(o = e.next()).done;)
            o = o.value,
                l = r + ql(o, a++),
                s += aa(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Os(e, t, n) {
    if (e == null)
        return e;
    var r = []
        , i = 0;
    return aa(e, r, "", "", function (o) {
        return t.call(n, o, i++)
    }),
        r
}
function Z1(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
            t.then(function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = n)
            }, function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = n)
            }),
            e._status === -1 && (e._status = 0,
                e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ge = {
    current: null
}
    , la = {
        transition: null
    }
    , J1 = {
        ReactCurrentDispatcher: Ge,
        ReactCurrentBatchConfig: la,
        ReactCurrentOwner: Ad
    };
function ry() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: Os,
    forEach: function (e, t, n) {
        Os(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return Os(e, function () {
            t++
        }),
            t
    },
    toArray: function (e) {
        return Os(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!Nd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = Yi;
Y.Fragment = B1;
Y.Profiler = $1;
Y.PureComponent = kd;
Y.StrictMode = z1;
Y.Suspense = K1;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J1;
Y.act = ry;
Y.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = qg({}, e.props)
        , i = e.key
        , o = e.ref
        , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
            s = Ad.current),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            ey.call(t, l) && !ty.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: gs,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
    ;
Y.createContext = function (e) {
    return e = {
        $$typeof: W1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        e.Provider = {
            $$typeof: U1,
            _context: e
        },
        e.Consumer = e
}
    ;
Y.createElement = ny;
Y.createFactory = function (e) {
    var t = ny.bind(null, e);
    return t.type = e,
        t
}
    ;
Y.createRef = function () {
    return {
        current: null
    }
}
    ;
Y.forwardRef = function (e) {
    return {
        $$typeof: H1,
        render: e
    }
}
    ;
Y.isValidElement = Nd;
Y.lazy = function (e) {
    return {
        $$typeof: Q1,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Z1
    }
}
    ;
Y.memo = function (e, t) {
    return {
        $$typeof: G1,
        type: e,
        compare: t === void 0 ? null : t
    }
}
    ;
Y.startTransition = function (e) {
    var t = la.transition;
    la.transition = {};
    try {
        e()
    } finally {
        la.transition = t
    }
}
    ;
Y.unstable_act = ry;
Y.useCallback = function (e, t) {
    return Ge.current.useCallback(e, t)
}
    ;
Y.useContext = function (e) {
    return Ge.current.useContext(e)
}
    ;
Y.useDebugValue = function () { }
    ;
Y.useDeferredValue = function (e) {
    return Ge.current.useDeferredValue(e)
}
    ;
Y.useEffect = function (e, t) {
    return Ge.current.useEffect(e, t)
}
    ;
Y.useId = function () {
    return Ge.current.useId()
}
    ;
Y.useImperativeHandle = function (e, t, n) {
    return Ge.current.useImperativeHandle(e, t, n)
}
    ;
Y.useInsertionEffect = function (e, t) {
    return Ge.current.useInsertionEffect(e, t)
}
    ;
Y.useLayoutEffect = function (e, t) {
    return Ge.current.useLayoutEffect(e, t)
}
    ;
Y.useMemo = function (e, t) {
    return Ge.current.useMemo(e, t)
}
    ;
Y.useReducer = function (e, t, n) {
    return Ge.current.useReducer(e, t, n)
}
    ;
Y.useRef = function (e) {
    return Ge.current.useRef(e)
}
    ;
Y.useState = function (e) {
    return Ge.current.useState(e)
}
    ;
Y.useSyncExternalStore = function (e, t, n) {
    return Ge.current.useSyncExternalStore(e, t, n)
}
    ;
Y.useTransition = function () {
    return Ge.current.useTransition()
}
    ;
Y.version = "18.3.1";
Xg.exports = Y;
var x = Xg.exports;
const D = Gg(x)
    , iy = _1({
        __proto__: null,
        default: D
    }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eS = x
    , tS = Symbol.for("react.element")
    , nS = Symbol.for("react.fragment")
    , rS = Object.prototype.hasOwnProperty
    , iS = eS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , oS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function oy(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t)
        rS.call(t, r) && !oS.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
            t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: tS,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: iS.current
    }
}
pl.Fragment = nS;
pl.jsx = oy;
pl.jsxs = oy;
Qg.exports = pl;
var w = Qg.exports
    , sy = {
        exports: {}
    }
    , lt = {}
    , ay = {
        exports: {}
    }
    , ly = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(k, A) {
        var I = k.length;
        k.push(A);
        e: for (; 0 < I;) {
            var W = I - 1 >>> 1
                , z = k[W];
            if (0 < i(z, A))
                k[W] = A,
                    k[I] = z,
                    I = W;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var A = k[0]
            , I = k.pop();
        if (I !== A) {
            k[0] = I;
            e: for (var W = 0, z = k.length, X = z >>> 1; W < X;) {
                var q = 2 * (W + 1) - 1
                    , xe = k[q]
                    , De = q + 1
                    , te = k[De];
                if (0 > i(xe, I))
                    De < z && 0 > i(te, xe) ? (k[W] = te,
                        k[De] = I,
                        W = De) : (k[W] = xe,
                            k[q] = I,
                            W = q);
                else if (De < z && 0 > i(te, I))
                    k[W] = te,
                        k[De] = I,
                        W = De;
                else
                    break e
            }
        }
        return A
    }
    function i(k, A) {
        var I = k.sortIndex - A.sortIndex;
        return I !== 0 ? I : k.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var s = Date
            , a = s.now();
        e.unstable_now = function () {
            return s.now() - a
        }
    }
    var l = []
        , u = []
        , c = 1
        , d = null
        , f = 3
        , h = !1
        , v = !1
        , g = !1
        , S = typeof setTimeout == "function" ? setTimeout : null
        , p = typeof clearTimeout == "function" ? clearTimeout : null
        , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(k) {
        for (var A = n(u); A !== null;) {
            if (A.callback === null)
                r(u);
            else if (A.startTime <= k)
                r(u),
                    A.sortIndex = A.expirationTime,
                    t(l, A);
            else
                break;
            A = n(u)
        }
    }
    function b(k) {
        if (g = !1,
            y(k),
            !v)
            if (n(l) !== null)
                v = !0,
                    U(C);
            else {
                var A = n(u);
                A !== null && B(b, A.startTime - k)
            }
    }
    function C(k, A) {
        v = !1,
            g && (g = !1,
                p(P),
                P = -1),
            h = !0;
        var I = f;
        try {
            for (y(A),
                d = n(l); d !== null && (!(d.expirationTime > A) || k && !F());) {
                var W = d.callback;
                if (typeof W == "function") {
                    d.callback = null,
                        f = d.priorityLevel;
                    var z = W(d.expirationTime <= A);
                    A = e.unstable_now(),
                        typeof z == "function" ? d.callback = z : d === n(l) && r(l),
                        y(A)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var X = !0;
            else {
                var q = n(u);
                q !== null && B(b, q.startTime - A),
                    X = !1
            }
            return X
        } finally {
            d = null,
                f = I,
                h = !1
        }
    }
    var T = !1
        , E = null
        , P = -1
        , N = 5
        , M = -1;
    function F() {
        return !(e.unstable_now() - M < N)
    }
    function L() {
        if (E !== null) {
            var k = e.unstable_now();
            M = k;
            var A = !0;
            try {
                A = E(!0, k)
            } finally {
                A ? $() : (T = !1,
                    E = null)
            }
        } else
            T = !1
    }
    var $;
    if (typeof m == "function")
        $ = function () {
            m(L)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel
            , Q = O.port2;
        O.port1.onmessage = L,
            $ = function () {
                Q.postMessage(null)
            }
    } else
        $ = function () {
            S(L, 0)
        }
            ;
    function U(k) {
        E = k,
            T || (T = !0,
                $())
    }
    function B(k, A) {
        P = S(function () {
            k(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function (k) {
            k.callback = null
        }
        ,
        e.unstable_continueExecution = function () {
            v || h || (v = !0,
                U(C))
        }
        ,
        e.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < k ? Math.floor(1e3 / k) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function () {
            return f
        }
        ,
        e.unstable_getFirstCallbackNode = function () {
            return n(l)
        }
        ,
        e.unstable_next = function (k) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var A = 3;
                    break;
                default:
                    A = f
            }
            var I = f;
            f = A;
            try {
                return k()
            } finally {
                f = I
            }
        }
        ,
        e.unstable_pauseExecution = function () { }
        ,
        e.unstable_requestPaint = function () { }
        ,
        e.unstable_runWithPriority = function (k, A) {
            switch (k) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    k = 3
            }
            var I = f;
            f = k;
            try {
                return A()
            } finally {
                f = I
            }
        }
        ,
        e.unstable_scheduleCallback = function (k, A, I) {
            var W = e.unstable_now();
            switch (typeof I == "object" && I !== null ? (I = I.delay,
                I = typeof I == "number" && 0 < I ? W + I : W) : I = W,
            k) {
                case 1:
                    var z = -1;
                    break;
                case 2:
                    z = 250;
                    break;
                case 5:
                    z = 1073741823;
                    break;
                case 4:
                    z = 1e4;
                    break;
                default:
                    z = 5e3
            }
            return z = I + z,
                k = {
                    id: c++,
                    callback: A,
                    priorityLevel: k,
                    startTime: I,
                    expirationTime: z,
                    sortIndex: -1
                },
                I > W ? (k.sortIndex = I,
                    t(u, k),
                    n(l) === null && k === n(u) && (g ? (p(P),
                        P = -1) : g = !0,
                        B(b, I - W))) : (k.sortIndex = z,
                            t(l, k),
                            v || h || (v = !0,
                                U(C))),
                k
        }
        ,
        e.unstable_shouldYield = F,
        e.unstable_wrapCallback = function (k) {
            var A = f;
            return function () {
                var I = f;
                f = A;
                try {
                    return k.apply(this, arguments)
                } finally {
                    f = I
                }
            }
        }
}
)(ly);
ay.exports = ly;
var sS = ay.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aS = x
    , at = sS;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var uy = new Set
    , Bo = {};
function Wr(e, t) {
    _i(e, t),
        _i(e + "Capture", t)
}
function _i(e, t) {
    for (Bo[e] = t,
        e = 0; e < t.length; e++)
        uy.add(t[e])
}
var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , Xu = Object.prototype.hasOwnProperty
    , lS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , kh = {}
    , Rh = {};
function uS(e) {
    return Xu.call(Rh, e) ? !0 : Xu.call(kh, e) ? !1 : lS.test(e) ? Rh[e] = !0 : (kh[e] = !0,
        !1)
}
function cS(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}
function dS(e, t, n, r) {
    if (t === null || typeof t > "u" || cS(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function Qe(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = i,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = o,
        this.removeEmptyString = s
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    je[e] = new Qe(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    je[t] = new Qe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    je[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    je[e] = new Qe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    je[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    je[e] = new Qe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    je[e] = new Qe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    je[e] = new Qe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    je[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Md = /[\-:]([a-z])/g;
function jd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Md, jd);
    je[t] = new Qe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Md, jd);
    je[t] = new Qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Md, jd);
    je[t] = new Qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    je[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
je.xlinkHref = new Qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    je[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function Dd(e, t, n, r) {
    var i = je.hasOwnProperty(t) ? je[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (dS(t, n, i, r) && (n = null),
        r || i === null ? uS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
            r = i.attributeNamespace,
            n === null ? e.removeAttribute(t) : (i = i.type,
                n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var bn = aS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , Is = Symbol.for("react.element")
    , ii = Symbol.for("react.portal")
    , oi = Symbol.for("react.fragment")
    , Ld = Symbol.for("react.strict_mode")
    , Yu = Symbol.for("react.profiler")
    , cy = Symbol.for("react.provider")
    , dy = Symbol.for("react.context")
    , Od = Symbol.for("react.forward_ref")
    , qu = Symbol.for("react.suspense")
    , Zu = Symbol.for("react.suspense_list")
    , Id = Symbol.for("react.memo")
    , On = Symbol.for("react.lazy")
    , fy = Symbol.for("react.offscreen")
    , Ah = Symbol.iterator;
function uo(e) {
    return e === null || typeof e != "object" ? null : (e = Ah && e[Ah] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var me = Object.assign, Zl;
function So(e) {
    if (Zl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Zl = t && t[1] || ""
        }
    return `
` + Zl + e
}
var Jl = !1;
function eu(e, t) {
    if (!e || Jl)
        return "";
    Jl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];)
                a--;
            for (; 1 <= s && 0 <= a; s--,
                a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                                a--,
                                0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                    l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Jl = !1,
            Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? So(e) : ""
}
function fS(e) {
    switch (e.tag) {
        case 5:
            return So(e.type);
        case 16:
            return So("Lazy");
        case 13:
            return So("Suspense");
        case 19:
            return So("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = eu(e.type, !1),
                e;
        case 11:
            return e = eu(e.type.render, !1),
                e;
        case 1:
            return e = eu(e.type, !0),
                e;
        default:
            return ""
    }
}
function Ju(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
        case oi:
            return "Fragment";
        case ii:
            return "Portal";
        case Yu:
            return "Profiler";
        case Ld:
            return "StrictMode";
        case qu:
            return "Suspense";
        case Zu:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case dy:
                return (e.displayName || "Context") + ".Consumer";
            case cy:
                return (e._context.displayName || "Context") + ".Provider";
            case Od:
                var t = e.render;
                return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                        e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
            case Id:
                return t = e.displayName || null,
                    t !== null ? t : Ju(e.type) || "Memo";
            case On:
                t = e._payload,
                    e = e._init;
                try {
                    return Ju(e(t))
                } catch { }
        }
    return null
}
function hS(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
                e = e.displayName || e.name || "",
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ju(t);
        case 8:
            return t === Ld ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
    }
    return null
}
function rr(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}
function hy(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function pS(e) {
    var t = hy(e) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
            , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return i.call(this)
            },
            set: function (s) {
                r = "" + s,
                    o.call(this, s)
            }
        }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
        {
            getValue: function () {
                return r
            },
            setValue: function (s) {
                r = "" + s
            },
            stopTracking: function () {
                e._valueTracker = null,
                    delete e[t]
            }
        }
    }
}
function Fs(e) {
    e._valueTracker || (e._valueTracker = pS(e))
}
function py(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
        , r = "";
    return e && (r = hy(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
            !0) : !1
}
function Ra(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ec(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Nh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
        , r = t.checked != null ? t.checked : t.defaultChecked;
    n = rr(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
}
function my(e, t) {
    t = t.checked,
        t != null && Dd(e, "checked", t, !1)
}
function tc(e, t) {
    my(e, t);
    var n = rr(t.value)
        , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? nc(e, t.type, n) : t.hasOwnProperty("defaultValue") && nc(e, t.type, rr(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Mh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
    }
    n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
}
function nc(e, t, n) {
    (t !== "number" || Ra(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var bo = Array.isArray;
function Si(e, t, n, r) {
    if (e = e.options,
        t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + rr(n),
            t = null,
            i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                    r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function rc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function jh(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
            t = t.defaultValue,
            n != null) {
            if (t != null)
                throw Error(j(92));
            if (bo(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
            n = t
    }
    e._wrapperState = {
        initialValue: rr(n)
    }
}
function gy(e, t) {
    var n = rr(t.value)
        , r = rr(t.defaultValue);
    n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function Dh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function yy(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function ic(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? yy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var _s, vy = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    }
        : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (_s = _s || document.createElement("div"),
            _s.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = _s.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; t.firstChild;)
            e.appendChild(t.firstChild)
    }
});
function zo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Po = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
    , mS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Po).forEach(function (e) {
    mS.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Po[t] = Po[e]
    })
});
function xy(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Po.hasOwnProperty(e) && Po[e] ? ("" + t).trim() : t + "px"
}
function wy(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , i = xy(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : e[n] = i
        }
}
var gS = me({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function oc(e, t) {
    if (t) {
        if (gS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function sc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ac = null;
function Fd(e) {
    return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
}
var lc = null
    , bi = null
    , Ci = null;
function Lh(e) {
    if (e = xs(e)) {
        if (typeof lc != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = xl(t),
            lc(e.stateNode, e.type, t))
    }
}
function Sy(e) {
    bi ? Ci ? Ci.push(e) : Ci = [e] : bi = e
}
function by() {
    if (bi) {
        var e = bi
            , t = Ci;
        if (Ci = bi = null,
            Lh(e),
            t)
            for (e = 0; e < t.length; e++)
                Lh(t[e])
    }
}
function Cy(e, t) {
    return e(t)
}
function Ty() { }
var tu = !1;
function Ey(e, t, n) {
    if (tu)
        return e(t, n);
    tu = !0;
    try {
        return Cy(e, t, n)
    } finally {
        tu = !1,
            (bi !== null || Ci !== null) && (Ty(),
                by())
    }
}
function $o(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = xl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
                r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !r;
            break e;
        default:
            e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var uc = !1;
if (mn)
    try {
        var co = {};
        Object.defineProperty(co, "passive", {
            get: function () {
                uc = !0
            }
        }),
            window.addEventListener("test", co, co),
            window.removeEventListener("test", co, co)
    } catch {
        uc = !1
    }
function yS(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var ko = !1
    , Aa = null
    , Na = !1
    , cc = null
    , vS = {
        onError: function (e) {
            ko = !0,
                Aa = e
        }
    };
function xS(e, t, n, r, i, o, s, a, l) {
    ko = !1,
        Aa = null,
        yS.apply(vS, arguments)
}
function wS(e, t, n, r, i, o, s, a, l) {
    if (xS.apply(this, arguments),
        ko) {
        if (ko) {
            var u = Aa;
            ko = !1,
                Aa = null
        } else
            throw Error(j(198));
        Na || (Na = !0,
            cc = u)
    }
}
function Hr(e) {
    var t = e
        , n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Py(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
            return t.dehydrated
    }
    return null
}
function Oh(e) {
    if (Hr(e) !== e)
        throw Error(j(188))
}
function SS(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Hr(e),
            t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n)
                    return Oh(i),
                        e;
                if (o === r)
                    return Oh(i),
                        t;
                o = o.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = i,
                r = o;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0,
                        n = i,
                        r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                        r = i,
                        n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0,
                            n = o,
                            r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                            r = o,
                            n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function ky(e) {
    return e = SS(e),
        e !== null ? Ry(e) : null
}
function Ry(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = Ry(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ay = at.unstable_scheduleCallback
    , Ih = at.unstable_cancelCallback
    , bS = at.unstable_shouldYield
    , CS = at.unstable_requestPaint
    , ve = at.unstable_now
    , TS = at.unstable_getCurrentPriorityLevel
    , _d = at.unstable_ImmediatePriority
    , Ny = at.unstable_UserBlockingPriority
    , Ma = at.unstable_NormalPriority
    , ES = at.unstable_LowPriority
    , My = at.unstable_IdlePriority
    , ml = null
    , qt = null;
function PS(e) {
    if (qt && typeof qt.onCommitFiberRoot == "function")
        try {
            qt.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
}
var Ot = Math.clz32 ? Math.clz32 : AS
    , kS = Math.log
    , RS = Math.LN2;
function AS(e) {
    return e >>>= 0,
        e === 0 ? 32 : 31 - (kS(e) / RS | 0) | 0
}
var Vs = 64
    , Bs = 4194304;
function Co(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}
function ja(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , i = e.suspendedLanes
        , o = e.pingedLanes
        , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Co(a) : (o &= s,
            o !== 0 && (r = Co(o)))
    } else
        s = n & ~i,
            s !== 0 ? r = Co(s) : o !== 0 && (r = Co(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
        o = t & -t,
        i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
        for (e = e.entanglements,
            t &= r; 0 < t;)
            n = 31 - Ot(t),
                i = 1 << n,
                r |= e[n],
                t &= ~i;
    return r
}
function NS(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}
function MS(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - Ot(o)
            , a = 1 << s
            , l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = NS(a, t)) : l <= t && (e.expiredLanes |= a),
            o &= ~a
    }
}
function dc(e) {
    return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function jy() {
    var e = Vs;
    return Vs <<= 1,
        !(Vs & 4194240) && (Vs = 64),
        e
}
function nu(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ys(e, t, n) {
    e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
            e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - Ot(t),
        e[t] = n
}
function jS(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Ot(n)
            , o = 1 << i;
        t[i] = 0,
            r[i] = -1,
            e[i] = -1,
            n &= ~o
    }
}
function Vd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Ot(n)
            , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
            n &= ~i
    }
}
var ne = 0;
function Dy(e) {
    return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ly, Bd, Oy, Iy, Fy, fc = !1, zs = [], Qn = null, Xn = null, Yn = null, Uo = new Map, Wo = new Map, Fn = [], DS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fh(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Qn = null;
            break;
        case "dragenter":
        case "dragleave":
            Xn = null;
            break;
        case "mouseover":
        case "mouseout":
            Yn = null;
            break;
        case "pointerover":
        case "pointerout":
            Uo.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Wo.delete(t.pointerId)
    }
}
function fo(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
        t !== null && (t = xs(t),
            t !== null && Bd(t)),
        e) : (e.eventSystemFlags |= r,
            t = e.targetContainers,
            i !== null && t.indexOf(i) === -1 && t.push(i),
            e)
}
function LS(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Qn = fo(Qn, e, t, n, r, i),
                !0;
        case "dragenter":
            return Xn = fo(Xn, e, t, n, r, i),
                !0;
        case "mouseover":
            return Yn = fo(Yn, e, t, n, r, i),
                !0;
        case "pointerover":
            var o = i.pointerId;
            return Uo.set(o, fo(Uo.get(o) || null, e, t, n, r, i)),
                !0;
        case "gotpointercapture":
            return o = i.pointerId,
                Wo.set(o, fo(Wo.get(o) || null, e, t, n, r, i)),
                !0
    }
    return !1
}
function _y(e) {
    var t = Cr(e.target);
    if (t !== null) {
        var n = Hr(t);
        if (n !== null) {
            if (t = n.tag,
                t === 13) {
                if (t = Py(n),
                    t !== null) {
                    e.blockedOn = t,
                        Fy(e.priority, function () {
                            Oy(n)
                        });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ua(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = hc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ac = r,
                n.target.dispatchEvent(r),
                ac = null
        } else
            return t = xs(n),
                t !== null && Bd(t),
                e.blockedOn = n,
                !1;
        t.shift()
    }
    return !0
}
function _h(e, t, n) {
    ua(e) && n.delete(t)
}
function OS() {
    fc = !1,
        Qn !== null && ua(Qn) && (Qn = null),
        Xn !== null && ua(Xn) && (Xn = null),
        Yn !== null && ua(Yn) && (Yn = null),
        Uo.forEach(_h),
        Wo.forEach(_h)
}
function ho(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
        fc || (fc = !0,
            at.unstable_scheduleCallback(at.unstable_NormalPriority, OS)))
}
function Ho(e) {
    function t(i) {
        return ho(i, e)
    }
    if (0 < zs.length) {
        ho(zs[0], e);
        for (var n = 1; n < zs.length; n++) {
            var r = zs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Qn !== null && ho(Qn, e),
        Xn !== null && ho(Xn, e),
        Yn !== null && ho(Yn, e),
        Uo.forEach(t),
        Wo.forEach(t),
        n = 0; n < Fn.length; n++)
        r = Fn[n],
            r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Fn.length && (n = Fn[0],
        n.blockedOn === null);)
        _y(n),
            n.blockedOn === null && Fn.shift()
}
var Ti = bn.ReactCurrentBatchConfig
    , Da = !0;
function IS(e, t, n, r) {
    var i = ne
        , o = Ti.transition;
    Ti.transition = null;
    try {
        ne = 1,
            zd(e, t, n, r)
    } finally {
        ne = i,
            Ti.transition = o
    }
}
function FS(e, t, n, r) {
    var i = ne
        , o = Ti.transition;
    Ti.transition = null;
    try {
        ne = 4,
            zd(e, t, n, r)
    } finally {
        ne = i,
            Ti.transition = o
    }
}
function zd(e, t, n, r) {
    if (Da) {
        var i = hc(e, t, n, r);
        if (i === null)
            fu(e, t, r, La, n),
                Fh(e, r);
        else if (LS(i, e, t, n, r))
            r.stopPropagation();
        else if (Fh(e, r),
            t & 4 && -1 < DS.indexOf(e)) {
            for (; i !== null;) {
                var o = xs(i);
                if (o !== null && Ly(o),
                    o = hc(e, t, n, r),
                    o === null && fu(e, t, r, La, n),
                    o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            fu(e, t, r, null, n)
    }
}
var La = null;
function hc(e, t, n, r) {
    if (La = null,
        e = Fd(r),
        e = Cr(e),
        e !== null)
        if (t = Hr(e),
            t === null)
            e = null;
        else if (n = t.tag,
            n === 13) {
            if (e = Py(t),
                e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return La = e,
        null
}
function Vy(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (TS()) {
                case _d:
                    return 1;
                case Ny:
                    return 4;
                case Ma:
                case ES:
                    return 16;
                case My:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Wn = null
    , $d = null
    , ca = null;
function By() {
    if (ca)
        return ca;
    var e, t = $d, n = t.length, r, i = "value" in Wn ? Wn.value : Wn.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return ca = i.slice(e, 1 < r ? 1 - r : void 0)
}
function da(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
}
function $s() {
    return !0
}
function Vh() {
    return !1
}
function ut(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
            this._targetInst = i,
            this.type = r,
            this.nativeEvent = o,
            this.target = s,
            this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
                this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? $s : Vh,
            this.isPropagationStopped = Vh,
            this
    }
    return me(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = $s)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = $s)
        },
        persist: function () { },
        isPersistent: $s
    }),
        t
}
var qi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ud = ut(qi), vs = me({}, qi, {
    view: 0,
    detail: 0
}), _S = ut(vs), ru, iu, po, gl = me({}, vs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Wd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== po && (po && e.type === "mousemove" ? (ru = e.screenX - po.screenX,
            iu = e.screenY - po.screenY) : iu = ru = 0,
            po = e),
            ru)
    },
    movementY: function (e) {
        return "movementY" in e ? e.movementY : iu
    }
}), Bh = ut(gl), VS = me({}, gl, {
    dataTransfer: 0
}), BS = ut(VS), zS = me({}, vs, {
    relatedTarget: 0
}), ou = ut(zS), $S = me({}, qi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), US = ut($S), WS = me({}, qi, {
    clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), HS = ut(WS), KS = me({}, qi, {
    data: 0
}), zh = ut(KS), GS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, QS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, XS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function YS(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = XS[e]) ? !!t[e] : !1
}
function Wd() {
    return YS
}
var qS = me({}, vs, {
    key: function (e) {
        if (e.key) {
            var t = GS[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = da(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? QS[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Wd,
    charCode: function (e) {
        return e.type === "keypress" ? da(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? da(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
    , ZS = ut(qS)
    , JS = me({}, gl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
    , $h = ut(JS)
    , eb = me({}, vs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Wd
    })
    , tb = ut(eb)
    , nb = me({}, qi, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , rb = ut(nb)
    , ib = me({}, gl, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , ob = ut(ib)
    , sb = [9, 13, 27, 32]
    , Hd = mn && "CompositionEvent" in window
    , Ro = null;
mn && "documentMode" in document && (Ro = document.documentMode);
var ab = mn && "TextEvent" in window && !Ro
    , zy = mn && (!Hd || Ro && 8 < Ro && 11 >= Ro)
    , Uh = " "
    , Wh = !1;
function $y(e, t) {
    switch (e) {
        case "keyup":
            return sb.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function Uy(e) {
    return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
}
var si = !1;
function lb(e, t) {
    switch (e) {
        case "compositionend":
            return Uy(t);
        case "keypress":
            return t.which !== 32 ? null : (Wh = !0,
                Uh);
        case "textInput":
            return e = t.data,
                e === Uh && Wh ? null : e;
        default:
            return null
    }
}
function ub(e, t) {
    if (si)
        return e === "compositionend" || !Hd && $y(e, t) ? (e = By(),
            ca = $d = Wn = null,
            si = !1,
            e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return zy && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var cb = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Hh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cb[e.type] : t === "textarea"
}
function Wy(e, t, n, r) {
    Sy(r),
        t = Oa(t, "onChange"),
        0 < t.length && (n = new Ud("onChange", "change", null, n, r),
            e.push({
                event: n,
                listeners: t
            }))
}
var Ao = null
    , Ko = null;
function db(e) {
    t0(e, 0)
}
function yl(e) {
    var t = ui(e);
    if (py(t))
        return e
}
function fb(e, t) {
    if (e === "change")
        return t
}
var Hy = !1;
if (mn) {
    var su;
    if (mn) {
        var au = "oninput" in document;
        if (!au) {
            var Kh = document.createElement("div");
            Kh.setAttribute("oninput", "return;"),
                au = typeof Kh.oninput == "function"
        }
        su = au
    } else
        su = !1;
    Hy = su && (!document.documentMode || 9 < document.documentMode)
}
function Gh() {
    Ao && (Ao.detachEvent("onpropertychange", Ky),
        Ko = Ao = null)
}
function Ky(e) {
    if (e.propertyName === "value" && yl(Ko)) {
        var t = [];
        Wy(t, Ko, e, Fd(e)),
            Ey(db, t)
    }
}
function hb(e, t, n) {
    e === "focusin" ? (Gh(),
        Ao = t,
        Ko = n,
        Ao.attachEvent("onpropertychange", Ky)) : e === "focusout" && Gh()
}
function pb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return yl(Ko)
}
function mb(e, t) {
    if (e === "click")
        return yl(t)
}
function gb(e, t) {
    if (e === "input" || e === "change")
        return yl(t)
}
function yb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var _t = typeof Object.is == "function" ? Object.is : yb;
function Go(e, t) {
    if (_t(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
        , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Xu.call(t, i) || !_t(e[i], t[i]))
            return !1
    }
    return !0
}
function Qh(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function Xh(e, t) {
    var n = Qh(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
                e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Qh(n)
    }
}
function Gy(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Qy() {
    for (var e = window, t = Ra(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ra(e.document)
    }
    return t
}
function Kd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function vb(e) {
    var t = Qy()
        , n = e.focusedElem
        , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Gy(n.ownerDocument.documentElement, n)) {
        if (r !== null && Kd(n)) {
            if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart" in n)
                n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                    , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                    !e.extend && o > r && (i = r,
                        r = o,
                        o = i),
                    i = Xh(n, o);
                var s = Xh(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    o > r ? (e.addRange(t),
                        e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                            e.addRange(t)))
            }
        }
        for (t = [],
            e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
            e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
    }
}
var xb = mn && "documentMode" in document && 11 >= document.documentMode
    , ai = null
    , pc = null
    , No = null
    , mc = !1;
function Yh(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mc || ai == null || ai !== Ra(r) || (r = ai,
        "selectionStart" in r && Kd(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        No && Go(No, r) || (No = r,
            r = Oa(pc, "onSelect"),
            0 < r.length && (t = new Ud("onSelect", "select", null, t, n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = ai)))
}
function Us(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
}
var li = {
    animationend: Us("Animation", "AnimationEnd"),
    animationiteration: Us("Animation", "AnimationIteration"),
    animationstart: Us("Animation", "AnimationStart"),
    transitionend: Us("Transition", "TransitionEnd")
}
    , lu = {}
    , Xy = {};
mn && (Xy = document.createElement("div").style,
    "AnimationEvent" in window || (delete li.animationend.animation,
        delete li.animationiteration.animation,
        delete li.animationstart.animation),
    "TransitionEvent" in window || delete li.transitionend.transition);
function vl(e) {
    if (lu[e])
        return lu[e];
    if (!li[e])
        return e;
    var t = li[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Xy)
            return lu[e] = t[n];
    return e
}
var Yy = vl("animationend")
    , qy = vl("animationiteration")
    , Zy = vl("animationstart")
    , Jy = vl("transitionend")
    , e0 = new Map
    , qh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cr(e, t) {
    e0.set(e, t),
        Wr(t, [e])
}
for (var uu = 0; uu < qh.length; uu++) {
    var cu = qh[uu]
        , wb = cu.toLowerCase()
        , Sb = cu[0].toUpperCase() + cu.slice(1);
    cr(wb, "on" + Sb)
}
cr(Yy, "onAnimationEnd");
cr(qy, "onAnimationIteration");
cr(Zy, "onAnimationStart");
cr("dblclick", "onDoubleClick");
cr("focusin", "onFocus");
cr("focusout", "onBlur");
cr(Jy, "onTransitionEnd");
_i("onMouseEnter", ["mouseout", "mouseover"]);
_i("onMouseLeave", ["mouseout", "mouseover"]);
_i("onPointerEnter", ["pointerout", "pointerover"]);
_i("onPointerLeave", ["pointerout", "pointerover"]);
Wr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var To = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , bb = new Set("cancel close invalid load scroll toggle".split(" ").concat(To));
function Zh(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        wS(r, t, void 0, e),
        e.currentTarget = null
}
function t0(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
            , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                        , l = a.instance
                        , u = a.currentTarget;
                    if (a = a.listener,
                        l !== o && i.isPropagationStopped())
                        break e;
                    Zh(i, a, u),
                        o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                        l = a.instance,
                        u = a.currentTarget,
                        a = a.listener,
                        l !== o && i.isPropagationStopped())
                        break e;
                    Zh(i, a, u),
                        o = l
                }
        }
    }
    if (Na)
        throw e = cc,
        Na = !1,
        cc = null,
        e
}
function ae(e, t) {
    var n = t[wc];
    n === void 0 && (n = t[wc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (n0(t, e, 2, !1),
        n.add(r))
}
function du(e, t, n) {
    var r = 0;
    t && (r |= 4),
        n0(n, e, r, t)
}
var Ws = "_reactListening" + Math.random().toString(36).slice(2);
function Qo(e) {
    if (!e[Ws]) {
        e[Ws] = !0,
            uy.forEach(function (n) {
                n !== "selectionchange" && (bb.has(n) || du(n, !1, e),
                    du(n, !0, e))
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ws] || (t[Ws] = !0,
            du("selectionchange", !1, t))
    }
}
function n0(e, t, n, r) {
    switch (Vy(t)) {
        case 1:
            var i = IS;
            break;
        case 4:
            i = FS;
            break;
        default:
            i = zd
    }
    n = i.bind(null, t, n, e),
        i = void 0,
        !uc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
        r ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
}
function fu(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null;) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                            l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null;) {
                    if (s = Cr(a),
                        s === null)
                        return;
                    if (l = s.tag,
                        l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Ey(function () {
        var u = o
            , c = Fd(n)
            , d = [];
        e: {
            var f = e0.get(e);
            if (f !== void 0) {
                var h = Ud
                    , v = e;
                switch (e) {
                    case "keypress":
                        if (da(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        h = ZS;
                        break;
                    case "focusin":
                        v = "focus",
                            h = ou;
                        break;
                    case "focusout":
                        v = "blur",
                            h = ou;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = ou;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = Bh;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = BS;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = tb;
                        break;
                    case Yy:
                    case qy:
                    case Zy:
                        h = US;
                        break;
                    case Jy:
                        h = rb;
                        break;
                    case "scroll":
                        h = _S;
                        break;
                    case "wheel":
                        h = ob;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = HS;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = $h
                }
                var g = (t & 4) !== 0
                    , S = !g && e === "scroll"
                    , p = g ? f !== null ? f + "Capture" : null : f;
                g = [];
                for (var m = u, y; m !== null;) {
                    y = m;
                    var b = y.stateNode;
                    if (y.tag === 5 && b !== null && (y = b,
                        p !== null && (b = $o(m, p),
                            b != null && g.push(Xo(m, b, y)))),
                        S)
                        break;
                    m = m.return
                }
                0 < g.length && (f = new h(f, v, null, n, c),
                    d.push({
                        event: f,
                        listeners: g
                    }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                    h = e === "mouseout" || e === "pointerout",
                    f && n !== ac && (v = n.relatedTarget || n.fromElement) && (Cr(v) || v[gn]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                    h ? (v = n.relatedTarget || n.toElement,
                        h = u,
                        v = v ? Cr(v) : null,
                        v !== null && (S = Hr(v),
                            v !== S || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null,
                                v = u),
                    h !== v)) {
                    if (g = Bh,
                        b = "onMouseLeave",
                        p = "onMouseEnter",
                        m = "mouse",
                        (e === "pointerout" || e === "pointerover") && (g = $h,
                            b = "onPointerLeave",
                            p = "onPointerEnter",
                            m = "pointer"),
                        S = h == null ? f : ui(h),
                        y = v == null ? f : ui(v),
                        f = new g(b, m + "leave", h, n, c),
                        f.target = S,
                        f.relatedTarget = y,
                        b = null,
                        Cr(c) === u && (g = new g(p, m + "enter", v, n, c),
                            g.target = y,
                            g.relatedTarget = S,
                            b = g),
                        S = b,
                        h && v)
                        t: {
                            for (g = h,
                                p = v,
                                m = 0,
                                y = g; y; y = ni(y))
                                m++;
                            for (y = 0,
                                b = p; b; b = ni(b))
                                y++;
                            for (; 0 < m - y;)
                                g = ni(g),
                                    m--;
                            for (; 0 < y - m;)
                                p = ni(p),
                                    y--;
                            for (; m--;) {
                                if (g === p || p !== null && g === p.alternate)
                                    break t;
                                g = ni(g),
                                    p = ni(p)
                            }
                            g = null
                        }
                    else
                        g = null;
                    h !== null && Jh(d, f, h, g, !1),
                        v !== null && S !== null && Jh(d, S, v, g, !0)
                }
            }
            e: {
                if (f = u ? ui(u) : window,
                    h = f.nodeName && f.nodeName.toLowerCase(),
                    h === "select" || h === "input" && f.type === "file")
                    var C = fb;
                else if (Hh(f))
                    if (Hy)
                        C = gb;
                    else {
                        C = pb;
                        var T = hb
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = mb);
                if (C && (C = C(e, u))) {
                    Wy(d, C, n, c);
                    break e
                }
                T && T(e, f, u),
                    e === "focusout" && (T = f._wrapperState) && T.controlled && f.type === "number" && nc(f, "number", f.value)
            }
            switch (T = u ? ui(u) : window,
            e) {
                case "focusin":
                    (Hh(T) || T.contentEditable === "true") && (ai = T,
                        pc = u,
                        No = null);
                    break;
                case "focusout":
                    No = pc = ai = null;
                    break;
                case "mousedown":
                    mc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    mc = !1,
                        Yh(d, n, c);
                    break;
                case "selectionchange":
                    if (xb)
                        break;
                case "keydown":
                case "keyup":
                    Yh(d, n, c)
            }
            var E;
            if (Hd)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var P = "onCompositionStart";
                            break e;
                        case "compositionend":
                            P = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            P = "onCompositionUpdate";
                            break e
                    }
                    P = void 0
                }
            else
                si ? $y(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (zy && n.locale !== "ko" && (si || P !== "onCompositionStart" ? P === "onCompositionEnd" && si && (E = By()) : (Wn = c,
                $d = "value" in Wn ? Wn.value : Wn.textContent,
                si = !0)),
                T = Oa(u, P),
                0 < T.length && (P = new zh(P, e, null, n, c),
                    d.push({
                        event: P,
                        listeners: T
                    }),
                    E ? P.data = E : (E = Uy(n),
                        E !== null && (P.data = E)))),
                (E = ab ? lb(e, n) : ub(e, n)) && (u = Oa(u, "onBeforeInput"),
                    0 < u.length && (c = new zh("onBeforeInput", "beforeinput", null, n, c),
                        d.push({
                            event: c,
                            listeners: u
                        }),
                        c.data = E))
        }
        t0(d, t)
    })
}
function Xo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Oa(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e
            , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
            o = $o(e, n),
            o != null && r.unshift(Xo(e, o, i)),
            o = $o(e, t),
            o != null && r.push(Xo(e, o, i))),
            e = e.return
    }
    return r
}
function ni(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Jh(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n
            , l = a.alternate
            , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
            i ? (l = $o(n, o),
                l != null && s.unshift(Xo(n, l, a))) : i || (l = $o(n, o),
                    l != null && s.push(Xo(n, l, a)))),
            n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Cb = /\r\n?/g
    , Tb = /\u0000|\uFFFD/g;
function ep(e) {
    return (typeof e == "string" ? e : "" + e).replace(Cb, `
`).replace(Tb, "")
}
function Hs(e, t, n) {
    if (t = ep(t),
        ep(e) !== t && n)
        throw Error(j(425))
}
function Ia() { }
var gc = null
    , yc = null;
function vc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var xc = typeof setTimeout == "function" ? setTimeout : void 0
    , Eb = typeof clearTimeout == "function" ? clearTimeout : void 0
    , tp = typeof Promise == "function" ? Promise : void 0
    , Pb = typeof queueMicrotask == "function" ? queueMicrotask : typeof tp < "u" ? function (e) {
        return tp.resolve(null).then(e).catch(kb)
    }
        : xc;
function kb(e) {
    setTimeout(function () {
        throw e
    })
}
function hu(e, t) {
    var n = t
        , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
            i && i.nodeType === 8)
            if (n = i.data,
                n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                        Ho(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Ho(t)
}
function qn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function np(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Zi = Math.random().toString(36).slice(2)
    , Xt = "__reactFiber$" + Zi
    , Yo = "__reactProps$" + Zi
    , gn = "__reactContainer$" + Zi
    , wc = "__reactEvents$" + Zi
    , Rb = "__reactListeners$" + Zi
    , Ab = "__reactHandles$" + Zi;
function Cr(e) {
    var t = e[Xt];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[gn] || n[Xt]) {
            if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                for (e = np(e); e !== null;) {
                    if (n = e[Xt])
                        return n;
                    e = np(e)
                }
            return t
        }
        e = n,
            n = e.parentNode
    }
    return null
}
function xs(e) {
    return e = e[Xt] || e[gn],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function ui(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function xl(e) {
    return e[Yo] || null
}
var Sc = []
    , ci = -1;
function dr(e) {
    return {
        current: e
    }
}
function le(e) {
    0 > ci || (e.current = Sc[ci],
        Sc[ci] = null,
        ci--)
}
function ie(e, t) {
    ci++,
        Sc[ci] = e.current,
        e.current = t
}
var ir = {}
    , Be = dr(ir)
    , Ze = dr(!1)
    , _r = ir;
function Vi(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return ir;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = i),
        i
}
function Je(e) {
    return e = e.childContextTypes,
        e != null
}
function Fa() {
    le(Ze),
        le(Be)
}
function rp(e, t, n) {
    if (Be.current !== ir)
        throw Error(j(168));
    ie(Be, t),
        ie(Ze, n)
}
function r0(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(j(108, hS(e) || "Unknown", i));
    return me({}, n, r)
}
function _a(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ir,
        _r = Be.current,
        ie(Be, e),
        ie(Ze, Ze.current),
        !0
}
function ip(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = r0(e, t, _r),
        r.__reactInternalMemoizedMergedChildContext = e,
        le(Ze),
        le(Be),
        ie(Be, e)) : le(Ze),
        ie(Ze, n)
}
var cn = null
    , wl = !1
    , pu = !1;
function i0(e) {
    cn === null ? cn = [e] : cn.push(e)
}
function Nb(e) {
    wl = !0,
        i0(e)
}
function fr() {
    if (!pu && cn !== null) {
        pu = !0;
        var e = 0
            , t = ne;
        try {
            var n = cn;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            cn = null,
                wl = !1
        } catch (i) {
            throw cn !== null && (cn = cn.slice(e + 1)),
            Ay(_d, fr),
            i
        } finally {
            ne = t,
                pu = !1
        }
    }
    return null
}
var di = []
    , fi = 0
    , Va = null
    , Ba = 0
    , ft = []
    , ht = 0
    , Vr = null
    , fn = 1
    , hn = "";
function vr(e, t) {
    di[fi++] = Ba,
        di[fi++] = Va,
        Va = e,
        Ba = t
}
function o0(e, t, n) {
    ft[ht++] = fn,
        ft[ht++] = hn,
        ft[ht++] = Vr,
        Vr = e;
    var r = fn;
    e = hn;
    var i = 32 - Ot(r) - 1;
    r &= ~(1 << i),
        n += 1;
    var o = 32 - Ot(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
            r >>= s,
            i -= s,
            fn = 1 << 32 - Ot(t) + i | n << i | r,
            hn = o + e
    } else
        fn = 1 << o | n << i | r,
            hn = e
}
function Gd(e) {
    e.return !== null && (vr(e, 1),
        o0(e, 1, 0))
}
function Qd(e) {
    for (; e === Va;)
        Va = di[--fi],
            di[fi] = null,
            Ba = di[--fi],
            di[fi] = null;
    for (; e === Vr;)
        Vr = ft[--ht],
            ft[ht] = null,
            hn = ft[--ht],
            ft[ht] = null,
            fn = ft[--ht],
            ft[ht] = null
}
var ot = null
    , it = null
    , ce = !1
    , Lt = null;
function s0(e, t) {
    var n = pt(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
            e.flags |= 16) : t.push(n)
}
function op(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                t !== null ? (e.stateNode = t,
                    ot = e,
                    it = qn(t.firstChild),
                    !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                t !== null ? (e.stateNode = t,
                    ot = e,
                    it = null,
                    !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
                t !== null ? (n = Vr !== null ? {
                    id: fn,
                    overflow: hn
                } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = pt(18, null, null, 0),
                    n.stateNode = t,
                    n.return = e,
                    e.child = n,
                    ot = e,
                    it = null,
                    !0) : !1;
        default:
            return !1
    }
}
function bc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Cc(e) {
    if (ce) {
        var t = it;
        if (t) {
            var n = t;
            if (!op(e, t)) {
                if (bc(e))
                    throw Error(j(418));
                t = qn(n.nextSibling);
                var r = ot;
                t && op(e, t) ? s0(r, n) : (e.flags = e.flags & -4097 | 2,
                    ce = !1,
                    ot = e)
            }
        } else {
            if (bc(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
                ce = !1,
                ot = e
        }
    }
}
function sp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    ot = e
}
function Ks(e) {
    if (e !== ot)
        return !1;
    if (!ce)
        return sp(e),
            ce = !0,
            !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !vc(e.type, e.memoizedProps)),
        t && (t = it)) {
        if (bc(e))
            throw a0(),
            Error(j(418));
        for (; t;)
            s0(e, t),
                t = qn(t.nextSibling)
    }
    if (sp(e),
        e.tag === 13) {
        if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
                t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            it = qn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            it = null
        }
    } else
        it = ot ? qn(e.stateNode.nextSibling) : null;
    return !0
}
function a0() {
    for (var e = it; e;)
        e = qn(e.nextSibling)
}
function Bi() {
    it = ot = null,
        ce = !1
}
function Xd(e) {
    Lt === null ? Lt = [e] : Lt.push(e)
}
var Mb = bn.ReactCurrentBatchConfig;
function mo(e, t, n) {
    if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var i = r
                , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (s) {
                var a = i.refs;
                s === null ? delete a[o] : a[o] = s
            }
                ,
                t._stringRef = o,
                t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function Gs(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ap(e) {
    var t = e._init;
    return t(e._payload)
}
function l0(e) {
    function t(p, m) {
        if (e) {
            var y = p.deletions;
            y === null ? (p.deletions = [m],
                p.flags |= 16) : y.push(m)
        }
    }
    function n(p, m) {
        if (!e)
            return null;
        for (; m !== null;)
            t(p, m),
                m = m.sibling;
        return null
    }
    function r(p, m) {
        for (p = new Map; m !== null;)
            m.key !== null ? p.set(m.key, m) : p.set(m.index, m),
                m = m.sibling;
        return p
    }
    function i(p, m) {
        return p = tr(p, m),
            p.index = 0,
            p.sibling = null,
            p
    }
    function o(p, m, y) {
        return p.index = y,
            e ? (y = p.alternate,
                y !== null ? (y = y.index,
                    y < m ? (p.flags |= 2,
                        m) : y) : (p.flags |= 2,
                            m)) : (p.flags |= 1048576,
                                m)
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2),
            p
    }
    function a(p, m, y, b) {
        return m === null || m.tag !== 6 ? (m = Su(y, p.mode, b),
            m.return = p,
            m) : (m = i(m, y),
                m.return = p,
                m)
    }
    function l(p, m, y, b) {
        var C = y.type;
        return C === oi ? c(p, m, y.props.children, b, y.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === On && ap(C) === m.type) ? (b = i(m, y.props),
            b.ref = mo(p, m, y),
            b.return = p,
            b) : (b = va(y.type, y.key, y.props, null, p.mode, b),
                b.ref = mo(p, m, y),
                b.return = p,
                b)
    }
    function u(p, m, y, b) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = bu(y, p.mode, b),
            m.return = p,
            m) : (m = i(m, y.children || []),
                m.return = p,
                m)
    }
    function c(p, m, y, b, C) {
        return m === null || m.tag !== 7 ? (m = Ir(y, p.mode, b, C),
            m.return = p,
            m) : (m = i(m, y),
                m.return = p,
                m)
    }
    function d(p, m, y) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = Su("" + m, p.mode, y),
                m.return = p,
                m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Is:
                    return y = va(m.type, m.key, m.props, null, p.mode, y),
                        y.ref = mo(p, null, m),
                        y.return = p,
                        y;
                case ii:
                    return m = bu(m, p.mode, y),
                        m.return = p,
                        m;
                case On:
                    var b = m._init;
                    return d(p, b(m._payload), y)
            }
            if (bo(m) || uo(m))
                return m = Ir(m, p.mode, y, null),
                    m.return = p,
                    m;
            Gs(p, m)
        }
        return null
    }
    function f(p, m, y, b) {
        var C = m !== null ? m.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return C !== null ? null : a(p, m, "" + y, b);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Is:
                    return y.key === C ? l(p, m, y, b) : null;
                case ii:
                    return y.key === C ? u(p, m, y, b) : null;
                case On:
                    return C = y._init,
                        f(p, m, C(y._payload), b)
            }
            if (bo(y) || uo(y))
                return C !== null ? null : c(p, m, y, b, null);
            Gs(p, y)
        }
        return null
    }
    function h(p, m, y, b, C) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return p = p.get(y) || null,
                a(m, p, "" + b, C);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
                case Is:
                    return p = p.get(b.key === null ? y : b.key) || null,
                        l(m, p, b, C);
                case ii:
                    return p = p.get(b.key === null ? y : b.key) || null,
                        u(m, p, b, C);
                case On:
                    var T = b._init;
                    return h(p, m, y, T(b._payload), C)
            }
            if (bo(b) || uo(b))
                return p = p.get(y) || null,
                    c(m, p, b, C, null);
            Gs(m, b)
        }
        return null
    }
    function v(p, m, y, b) {
        for (var C = null, T = null, E = m, P = m = 0, N = null; E !== null && P < y.length; P++) {
            E.index > P ? (N = E,
                E = null) : N = E.sibling;
            var M = f(p, E, y[P], b);
            if (M === null) {
                E === null && (E = N);
                break
            }
            e && E && M.alternate === null && t(p, E),
                m = o(M, m, P),
                T === null ? C = M : T.sibling = M,
                T = M,
                E = N
        }
        if (P === y.length)
            return n(p, E),
                ce && vr(p, P),
                C;
        if (E === null) {
            for (; P < y.length; P++)
                E = d(p, y[P], b),
                    E !== null && (m = o(E, m, P),
                        T === null ? C = E : T.sibling = E,
                        T = E);
            return ce && vr(p, P),
                C
        }
        for (E = r(p, E); P < y.length; P++)
            N = h(E, p, P, y[P], b),
                N !== null && (e && N.alternate !== null && E.delete(N.key === null ? P : N.key),
                    m = o(N, m, P),
                    T === null ? C = N : T.sibling = N,
                    T = N);
        return e && E.forEach(function (F) {
            return t(p, F)
        }),
            ce && vr(p, P),
            C
    }
    function g(p, m, y, b) {
        var C = uo(y);
        if (typeof C != "function")
            throw Error(j(150));
        if (y = C.call(y),
            y == null)
            throw Error(j(151));
        for (var T = C = null, E = m, P = m = 0, N = null, M = y.next(); E !== null && !M.done; P++,
            M = y.next()) {
            E.index > P ? (N = E,
                E = null) : N = E.sibling;
            var F = f(p, E, M.value, b);
            if (F === null) {
                E === null && (E = N);
                break
            }
            e && E && F.alternate === null && t(p, E),
                m = o(F, m, P),
                T === null ? C = F : T.sibling = F,
                T = F,
                E = N
        }
        if (M.done)
            return n(p, E),
                ce && vr(p, P),
                C;
        if (E === null) {
            for (; !M.done; P++,
                M = y.next())
                M = d(p, M.value, b),
                    M !== null && (m = o(M, m, P),
                        T === null ? C = M : T.sibling = M,
                        T = M);
            return ce && vr(p, P),
                C
        }
        for (E = r(p, E); !M.done; P++,
            M = y.next())
            M = h(E, p, P, M.value, b),
                M !== null && (e && M.alternate !== null && E.delete(M.key === null ? P : M.key),
                    m = o(M, m, P),
                    T === null ? C = M : T.sibling = M,
                    T = M);
        return e && E.forEach(function (L) {
            return t(p, L)
        }),
            ce && vr(p, P),
            C
    }
    function S(p, m, y, b) {
        if (typeof y == "object" && y !== null && y.type === oi && y.key === null && (y = y.props.children),
            typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Is:
                    e: {
                        for (var C = y.key, T = m; T !== null;) {
                            if (T.key === C) {
                                if (C = y.type,
                                    C === oi) {
                                    if (T.tag === 7) {
                                        n(p, T.sibling),
                                            m = i(T, y.props.children),
                                            m.return = p,
                                            p = m;
                                        break e
                                    }
                                } else if (T.elementType === C || typeof C == "object" && C !== null && C.$$typeof === On && ap(C) === T.type) {
                                    n(p, T.sibling),
                                        m = i(T, y.props),
                                        m.ref = mo(p, T, y),
                                        m.return = p,
                                        p = m;
                                    break e
                                }
                                n(p, T);
                                break
                            } else
                                t(p, T);
                            T = T.sibling
                        }
                        y.type === oi ? (m = Ir(y.props.children, p.mode, b, y.key),
                            m.return = p,
                            p = m) : (b = va(y.type, y.key, y.props, null, p.mode, b),
                                b.ref = mo(p, m, y),
                                b.return = p,
                                p = b)
                    }
                    return s(p);
                case ii:
                    e: {
                        for (T = y.key; m !== null;) {
                            if (m.key === T)
                                if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                                    n(p, m.sibling),
                                        m = i(m, y.children || []),
                                        m.return = p,
                                        p = m;
                                    break e
                                } else {
                                    n(p, m);
                                    break
                                }
                            else
                                t(p, m);
                            m = m.sibling
                        }
                        m = bu(y, p.mode, b),
                            m.return = p,
                            p = m
                    }
                    return s(p);
                case On:
                    return T = y._init,
                        S(p, m, T(y._payload), b)
            }
            if (bo(y))
                return v(p, m, y, b);
            if (uo(y))
                return g(p, m, y, b);
            Gs(p, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
            m !== null && m.tag === 6 ? (n(p, m.sibling),
                m = i(m, y),
                m.return = p,
                p = m) : (n(p, m),
                    m = Su(y, p.mode, b),
                    m.return = p,
                    p = m),
            s(p)) : n(p, m)
    }
    return S
}
var zi = l0(!0)
    , u0 = l0(!1)
    , za = dr(null)
    , $a = null
    , hi = null
    , Yd = null;
function qd() {
    Yd = hi = $a = null
}
function Zd(e) {
    var t = za.current;
    le(za),
        e._currentValue = t
}
function Tc(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
            break;
        e = e.return
    }
}
function Ei(e, t) {
    $a = e,
        Yd = hi = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0),
            e.firstContext = null)
}
function xt(e) {
    var t = e._currentValue;
    if (Yd !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
            hi === null) {
            if ($a === null)
                throw Error(j(308));
            hi = e,
                $a.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
        } else
            hi = hi.next = e;
    return t
}
var Tr = null;
function Jd(e) {
    Tr === null ? Tr = [e] : Tr.push(e)
}
function c0(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
        Jd(t)) : (n.next = i.next,
            i.next = n),
        t.interleaved = n,
        yn(e, r)
}
function yn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null;)
        e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var In = !1;
function ef(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function d0(e, t) {
    e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
}
function pn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Zn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        Z & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            r.pending = t,
            yn(e, n)
    }
    return i = r.interleaved,
        i === null ? (t.next = t,
            Jd(r)) : (t.next = i.next,
                i.next = t),
        r.interleaved = t,
        yn(e, n)
}
function fa(e, t, n) {
    if (t = t.updateQueue,
        t !== null && (t = t.shared,
            (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Vd(e, n)
    }
}
function lp(e, t) {
    var n = e.updateQueue
        , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var i = null
            , o = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                    n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
            e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
}
function Ua(e, t, n, r) {
    var i = e.updateQueue;
    In = !1;
    var o = i.firstBaseUpdate
        , s = i.lastBaseUpdate
        , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
            , u = l.next;
        l.next = null,
            s === null ? o = u : s.next = u,
            s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
            a = c.lastBaseUpdate,
            a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
                c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var d = i.baseState;
        s = 0,
            c = u = l = null,
            a = o;
        do {
            var f = a.lane
                , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e
                        , g = a;
                    switch (f = t,
                    h = n,
                    g.tag) {
                        case 1:
                            if (v = g.payload,
                                typeof v == "function") {
                                d = v.call(h, d, f);
                                break e
                            }
                            d = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = g.payload,
                                f = typeof v == "function" ? v.call(h, d, f) : v,
                                f == null)
                                break e;
                            d = me({}, d, f);
                            break e;
                        case 2:
                            In = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                    f = i.effects,
                    f === null ? i.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                    c === null ? (u = c = h,
                        l = d) : c = c.next = h,
                    s |= f;
            if (a = a.next,
                a === null) {
                if (a = i.shared.pending,
                    a === null)
                    break;
                f = a,
                    a = f.next,
                    f.next = null,
                    i.lastBaseUpdate = f,
                    i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
            i.baseState = l,
            i.firstBaseUpdate = u,
            i.lastBaseUpdate = c,
            t = i.shared.interleaved,
            t !== null) {
            i = t;
            do
                s |= i.lane,
                    i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        zr |= s,
            e.lanes = s,
            e.memoizedState = d
    }
}
function up(e, t, n) {
    if (e = t.effects,
        t.effects = null,
        e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
                , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                    r = n,
                    typeof i != "function")
                    throw Error(j(191, i));
                i.call(r)
            }
        }
}
var ws = {}
    , Zt = dr(ws)
    , qo = dr(ws)
    , Zo = dr(ws);
function Er(e) {
    if (e === ws)
        throw Error(j(174));
    return e
}
function tf(e, t) {
    switch (ie(Zo, t),
    ie(qo, e),
    ie(Zt, ws),
    e = t.nodeType,
    e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ic(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
                t = e.namespaceURI || null,
                e = e.tagName,
                t = ic(t, e)
    }
    le(Zt),
        ie(Zt, t)
}
function $i() {
    le(Zt),
        le(qo),
        le(Zo)
}
function f0(e) {
    Er(Zo.current);
    var t = Er(Zt.current)
        , n = ic(t, e.type);
    t !== n && (ie(qo, e),
        ie(Zt, n))
}
function nf(e) {
    qo.current === e && (le(Zt),
        le(qo))
}
var fe = dr(0);
function Wa(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
                t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
            t = t.sibling
    }
    return null
}
var mu = [];
function rf() {
    for (var e = 0; e < mu.length; e++)
        mu[e]._workInProgressVersionPrimary = null;
    mu.length = 0
}
var ha = bn.ReactCurrentDispatcher
    , gu = bn.ReactCurrentBatchConfig
    , Br = 0
    , pe = null
    , Te = null
    , ke = null
    , Ha = !1
    , Mo = !1
    , Jo = 0
    , jb = 0;
function Oe() {
    throw Error(j(321))
}
function of(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!_t(e[n], t[n]))
            return !1;
    return !0
}
function sf(e, t, n, r, i, o) {
    if (Br = o,
        pe = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        ha.current = e === null || e.memoizedState === null ? Ib : Fb,
        e = n(r, i),
        Mo) {
        o = 0;
        do {
            if (Mo = !1,
                Jo = 0,
                25 <= o)
                throw Error(j(301));
            o += 1,
                ke = Te = null,
                t.updateQueue = null,
                ha.current = _b,
                e = n(r, i)
        } while (Mo)
    }
    if (ha.current = Ka,
        t = Te !== null && Te.next !== null,
        Br = 0,
        ke = Te = pe = null,
        Ha = !1,
        t)
        throw Error(j(300));
    return e
}
function af() {
    var e = Jo !== 0;
    return Jo = 0,
        e
}
function Wt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ke === null ? pe.memoizedState = ke = e : ke = ke.next = e,
        ke
}
function wt() {
    if (Te === null) {
        var e = pe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Te.next;
    var t = ke === null ? pe.memoizedState : ke.next;
    if (t !== null)
        ke = t,
            Te = e;
    else {
        if (e === null)
            throw Error(j(310));
        Te = e,
            e = {
                memoizedState: Te.memoizedState,
                baseState: Te.baseState,
                baseQueue: Te.baseQueue,
                queue: Te.queue,
                next: null
            },
            ke === null ? pe.memoizedState = ke = e : ke = ke.next = e
    }
    return ke
}
function es(e, t) {
    return typeof t == "function" ? t(e) : t
}
function yu(e) {
    var t = wt()
        , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = Te
        , i = r.baseQueue
        , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
                o.next = s
        }
        r.baseQueue = i = o,
            n.pending = null
    }
    if (i !== null) {
        o = i.next,
            r = r.baseState;
        var a = s = null
            , l = null
            , u = o;
        do {
            var c = u.lane;
            if ((Br & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                    r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                    s = r) : l = l.next = d,
                    pe.lanes |= c,
                    zr |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a,
            _t(r, t.memoizedState) || (qe = !0),
            t.memoizedState = r,
            t.baseState = s,
            t.baseQueue = l,
            n.lastRenderedState = r
    }
    if (e = n.interleaved,
        e !== null) {
        i = e;
        do
            o = i.lane,
                pe.lanes |= o,
                zr |= o,
                i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function vu(e) {
    var t = wt()
        , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
        , i = n.pending
        , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
                s = s.next;
        while (s !== i);
        _t(o, t.memoizedState) || (qe = !0),
            t.memoizedState = o,
            t.baseQueue === null && (t.baseState = o),
            n.lastRenderedState = o
    }
    return [o, r]
}
function h0() { }
function p0(e, t) {
    var n = pe
        , r = wt()
        , i = t()
        , o = !_t(r.memoizedState, i);
    if (o && (r.memoizedState = i,
        qe = !0),
        r = r.queue,
        lf(y0.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || ke !== null && ke.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            ts(9, g0.bind(null, n, r, i, t), void 0, null),
            Re === null)
            throw Error(j(349));
        Br & 30 || m0(n, t, i)
    }
    return i
}
function m0(e, t, n) {
    e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = pe.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            pe.updateQueue = t,
            t.stores = [e]) : (n = t.stores,
                n === null ? t.stores = [e] : n.push(e))
}
function g0(e, t, n, r) {
    t.value = n,
        t.getSnapshot = r,
        v0(t) && x0(e)
}
function y0(e, t, n) {
    return n(function () {
        v0(t) && x0(e)
    })
}
function v0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !_t(e, n)
    } catch {
        return !0
    }
}
function x0(e) {
    var t = yn(e, 1);
    t !== null && It(t, e, 1, -1)
}
function cp(e) {
    var t = Wt();
    return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: es,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = Ob.bind(null, pe, e),
        [t.memoizedState, e]
}
function ts(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
        t = pe.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            pe.updateQueue = t,
            t.lastEffect = e.next = e) : (n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e)),
        e
}
function w0() {
    return wt().memoizedState
}
function pa(e, t, n, r) {
    var i = Wt();
    pe.flags |= e,
        i.memoizedState = ts(1 | t, n, void 0, r === void 0 ? null : r)
}
function Sl(e, t, n, r) {
    var i = wt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Te !== null) {
        var s = Te.memoizedState;
        if (o = s.destroy,
            r !== null && of(r, s.deps)) {
            i.memoizedState = ts(t, n, o, r);
            return
        }
    }
    pe.flags |= e,
        i.memoizedState = ts(1 | t, n, o, r)
}
function dp(e, t) {
    return pa(8390656, 8, e, t)
}
function lf(e, t) {
    return Sl(2048, 8, e, t)
}
function S0(e, t) {
    return Sl(4, 2, e, t)
}
function b0(e, t) {
    return Sl(4, 4, e, t)
}
function C0(e, t) {
    if (typeof t == "function")
        return e = e(),
            t(e),
            function () {
                t(null)
            }
            ;
    if (t != null)
        return e = e(),
            t.current = e,
            function () {
                t.current = null
            }
}
function T0(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
        Sl(4, 4, C0.bind(null, t, e), n)
}
function uf() { }
function E0(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && of(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
}
function P0(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && of(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
}
function k0(e, t, n) {
    return Br & 21 ? (_t(n, t) || (n = jy(),
        pe.lanes |= n,
        zr |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
            qe = !0),
            e.memoizedState = n)
}
function Db(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4,
        e(!0);
    var r = gu.transition;
    gu.transition = {};
    try {
        e(!1),
            t()
    } finally {
        ne = n,
            gu.transition = r
    }
}
function R0() {
    return wt().memoizedState
}
function Lb(e, t, n) {
    var r = er(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        A0(e))
        N0(t, n);
    else if (n = c0(e, t, n, r),
        n !== null) {
        var i = Ke();
        It(n, e, r, i),
            M0(n, t, r)
    }
}
function Ob(e, t, n) {
    var r = er(e)
        , i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (A0(e))
        N0(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
            o !== null))
            try {
                var s = t.lastRenderedState
                    , a = o(s, n);
                if (i.hasEagerState = !0,
                    i.eagerState = a,
                    _t(a, s)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                        Jd(t)) : (i.next = l.next,
                            l.next = i),
                        t.interleaved = i;
                    return
                }
            } catch { } finally { }
        n = c0(e, t, i, r),
            n !== null && (i = Ke(),
                It(n, e, r, i),
                M0(n, t, r))
    }
}
function A0(e) {
    var t = e.alternate;
    return e === pe || t !== null && t === pe
}
function N0(e, t) {
    Mo = Ha = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
}
function M0(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Vd(e, n)
    }
}
var Ka = {
    readContext: xt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1
}
    , Ib = {
        readContext: xt,
        useCallback: function (e, t) {
            return Wt().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: xt,
        useEffect: dp,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null,
                pa(4194308, 4, C0.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return pa(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return pa(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = Wt();
            return t = t === void 0 ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
        },
        useReducer: function (e, t, n) {
            var r = Wt();
            return t = n !== void 0 ? n(t) : t,
                r.memoizedState = r.baseState = t,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                },
                r.queue = e,
                e = e.dispatch = Lb.bind(null, pe, e),
                [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = Wt();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: cp,
        useDebugValue: uf,
        useDeferredValue: function (e) {
            return Wt().memoizedState = e
        },
        useTransition: function () {
            var e = cp(!1)
                , t = e[0];
            return e = Db.bind(null, e[1]),
                Wt().memoizedState = e,
                [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = pe
                , i = Wt();
            if (ce) {
                if (n === void 0)
                    throw Error(j(407));
                n = n()
            } else {
                if (n = t(),
                    Re === null)
                    throw Error(j(349));
                Br & 30 || m0(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o,
                dp(y0.bind(null, r, o, e), [e]),
                r.flags |= 2048,
                ts(9, g0.bind(null, r, o, n, t), void 0, null),
                n
        },
        useId: function () {
            var e = Wt()
                , t = Re.identifierPrefix;
            if (ce) {
                var n = hn
                    , r = fn;
                n = (r & ~(1 << 32 - Ot(r) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = Jo++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = jb++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
    , Fb = {
        readContext: xt,
        useCallback: E0,
        useContext: xt,
        useEffect: lf,
        useImperativeHandle: T0,
        useInsertionEffect: S0,
        useLayoutEffect: b0,
        useMemo: P0,
        useReducer: yu,
        useRef: w0,
        useState: function () {
            return yu(es)
        },
        useDebugValue: uf,
        useDeferredValue: function (e) {
            var t = wt();
            return k0(t, Te.memoizedState, e)
        },
        useTransition: function () {
            var e = yu(es)[0]
                , t = wt().memoizedState;
            return [e, t]
        },
        useMutableSource: h0,
        useSyncExternalStore: p0,
        useId: R0,
        unstable_isNewReconciler: !1
    }
    , _b = {
        readContext: xt,
        useCallback: E0,
        useContext: xt,
        useEffect: lf,
        useImperativeHandle: T0,
        useInsertionEffect: S0,
        useLayoutEffect: b0,
        useMemo: P0,
        useReducer: vu,
        useRef: w0,
        useState: function () {
            return vu(es)
        },
        useDebugValue: uf,
        useDeferredValue: function (e) {
            var t = wt();
            return Te === null ? t.memoizedState = e : k0(t, Te.memoizedState, e)
        },
        useTransition: function () {
            var e = vu(es)[0]
                , t = wt().memoizedState;
            return [e, t]
        },
        useMutableSource: h0,
        useSyncExternalStore: p0,
        useId: R0,
        unstable_isNewReconciler: !1
    };
function At(e, t) {
    if (e && e.defaultProps) {
        t = me({}, t),
            e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ec(e, t, n, r) {
    t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : me({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var bl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Hr(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ke()
            , i = er(e)
            , o = pn(r, i);
        o.payload = t,
            n != null && (o.callback = n),
            t = Zn(e, o, i),
            t !== null && (It(t, e, i, r),
                fa(t, e, i))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ke()
            , i = er(e)
            , o = pn(r, i);
        o.tag = 1,
            o.payload = t,
            n != null && (o.callback = n),
            t = Zn(e, o, i),
            t !== null && (It(t, e, i, r),
                fa(t, e, i))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ke()
            , r = er(e)
            , i = pn(n, r);
        i.tag = 2,
            t != null && (i.callback = t),
            t = Zn(e, i, r),
            t !== null && (It(t, e, r, n),
                fa(t, e, r))
    }
};
function fp(e, t, n, r, i, o, s) {
    return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Go(n, r) || !Go(i, o) : !0
}
function j0(e, t, n) {
    var r = !1
        , i = ir
        , o = t.contextType;
    return typeof o == "object" && o !== null ? o = xt(o) : (i = Je(t) ? _r : Be.current,
        r = t.contextTypes,
        o = (r = r != null) ? Vi(e, i) : ir),
        t = new t(n, o),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = bl,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = i,
            e.__reactInternalMemoizedMaskedChildContext = o),
        t
}
function hp(e, t, n, r) {
    e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && bl.enqueueReplaceState(t, t.state, null)
}
function Pc(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
        i.state = e.memoizedState,
        i.refs = {},
        ef(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = xt(o) : (o = Je(t) ? _r : Be.current,
        i.context = Vi(e, o)),
        i.state = e.memoizedState,
        o = t.getDerivedStateFromProps,
        typeof o == "function" && (Ec(e, t, o, n),
            i.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            t !== i.state && bl.enqueueReplaceState(i, i.state, null),
            Ua(e, n, i, r),
            i.state = e.memoizedState),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ui(e, t) {
    try {
        var n = ""
            , r = t;
        do
            n += fS(r),
                r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function xu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function kc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Vb = typeof WeakMap == "function" ? WeakMap : Map;
function D0(e, t, n) {
    n = pn(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = t.value;
    return n.callback = function () {
        Qa || (Qa = !0,
            Fc = r),
            kc(e, t)
    }
        ,
        n
}
function L0(e, t, n) {
    n = pn(-1, n),
        n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }
            ,
            n.callback = function () {
                kc(e, t)
            }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        kc(e, t),
            typeof r != "function" && (Jn === null ? Jn = new Set([this]) : Jn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
        n
}
function pp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Vb;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
            i === void 0 && (i = new Set,
                r.set(t, i));
    i.has(n) || (i.add(n),
        e = Jb.bind(null, e, t, n),
        t.then(e, e))
}
function mp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function gp(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = i,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pn(-1, 1),
                t.tag = 2,
                Zn(n, t, 1))),
            n.lanes |= 1),
            e)
}
var Bb = bn.ReactCurrentOwner
    , qe = !1;
function $e(e, t, n, r) {
    t.child = e === null ? u0(t, null, n, r) : zi(t, e.child, n, r)
}
function yp(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Ei(t, i),
        r = sf(e, t, n, r, o, i),
        n = af(),
        e !== null && !qe ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~i,
            vn(e, t, i)) : (ce && n && Gd(t),
                t.flags |= 1,
                $e(e, t, r, i),
                t.child)
}
function vp(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !yf(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = o,
            O0(e, t, o, r, i)) : (e = va(n.type, null, r, t, t.mode, i),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
    }
    if (o = e.child,
        !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : Go,
            n(s, r) && e.ref === t.ref)
            return vn(e, t, i)
    }
    return t.flags |= 1,
        e = tr(o, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
}
function O0(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Go(o, r) && e.ref === t.ref)
            if (qe = !1,
                t.pendingProps = r = o,
                (e.lanes & i) !== 0)
                e.flags & 131072 && (qe = !0);
            else
                return t.lanes = e.lanes,
                    vn(e, t, i)
    }
    return Rc(e, t, n, r, i)
}
function I0(e, t, n) {
    var r = t.pendingProps
        , i = r.children
        , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                ie(mi, nt),
                nt |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    ie(mi, nt),
                    nt |= e,
                    null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = o !== null ? o.baseLanes : n,
                ie(mi, nt),
                nt |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
            t.memoizedState = null) : r = n,
            ie(mi, nt),
            nt |= r;
    return $e(e, t, i, n),
        t.child
}
function F0(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
}
function Rc(e, t, n, r, i) {
    var o = Je(n) ? _r : Be.current;
    return o = Vi(t, o),
        Ei(t, i),
        n = sf(e, t, n, r, o, i),
        r = af(),
        e !== null && !qe ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~i,
            vn(e, t, i)) : (ce && r && Gd(t),
                t.flags |= 1,
                $e(e, t, n, i),
                t.child)
}
function xp(e, t, n, r, i) {
    if (Je(n)) {
        var o = !0;
        _a(t)
    } else
        o = !1;
    if (Ei(t, i),
        t.stateNode === null)
        ma(e, t),
            j0(t, n, r),
            Pc(t, n, r, i),
            r = !0;
    else if (e === null) {
        var s = t.stateNode
            , a = t.memoizedProps;
        s.props = a;
        var l = s.context
            , u = n.contextType;
        typeof u == "object" && u !== null ? u = xt(u) : (u = Je(n) ? _r : Be.current,
            u = Vi(t, u));
        var c = n.getDerivedStateFromProps
            , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && hp(t, s, r, u),
            In = !1;
        var f = t.memoizedState;
        s.state = f,
            Ua(t, r, s, i),
            l = t.memoizedState,
            a !== r || f !== l || Ze.current || In ? (typeof c == "function" && (Ec(t, n, c, r),
                l = t.memoizedState),
                (a = In || fp(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
                    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                    typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                        t.memoizedProps = r,
                        t.memoizedState = l),
                s.props = r,
                s.state = l,
                s.context = u,
                r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                    r = !1)
    } else {
        s = t.stateNode,
            d0(e, t),
            a = t.memoizedProps,
            u = t.type === t.elementType ? a : At(t.type, a),
            s.props = u,
            d = t.pendingProps,
            f = s.context,
            l = n.contextType,
            typeof l == "object" && l !== null ? l = xt(l) : (l = Je(n) ? _r : Be.current,
                l = Vi(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && hp(t, s, r, l),
            In = !1,
            f = t.memoizedState,
            s.state = f,
            Ua(t, r, s, i);
        var v = t.memoizedState;
        a !== d || f !== v || Ze.current || In ? (typeof h == "function" && (Ec(t, n, h, r),
            v = t.memoizedState),
            (u = In || fp(t, n, u, r, f, v, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l),
                typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)),
                typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = v),
            s.props = r,
            s.state = v,
            s.context = l,
            r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                r = !1)
    }
    return Ac(e, t, n, r, o, i)
}
function Ac(e, t, n, r, i, o) {
    F0(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && ip(t, n, !1),
            vn(e, t, o);
    r = t.stateNode,
        Bb.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
        e !== null && s ? (t.child = zi(t, e.child, null, o),
            t.child = zi(t, null, a, o)) : $e(e, t, a, o),
        t.memoizedState = r.state,
        i && ip(t, n, !0),
        t.child
}
function _0(e) {
    var t = e.stateNode;
    t.pendingContext ? rp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rp(e, t.context, !1),
        tf(e, t.containerInfo)
}
function wp(e, t, n, r, i) {
    return Bi(),
        Xd(i),
        t.flags |= 256,
        $e(e, t, n, r),
        t.child
}
var Nc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Mc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function V0(e, t, n) {
    var r = t.pendingProps, i = fe.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        a ? (o = !0,
            t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
        ie(fe, i & 1),
        e === null)
        return Cc(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
                e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
                    null) : (s = r.children,
                        e = r.fallback,
                        o ? (r = t.mode,
                            o = t.child,
                            s = {
                                mode: "hidden",
                                children: s
                            },
                            !(r & 1) && o !== null ? (o.childLanes = 0,
                                o.pendingProps = s) : o = El(s, r, 0, null),
                            e = Ir(e, r, n, null),
                            o.return = t,
                            e.return = t,
                            o.sibling = e,
                            t.child = o,
                            t.child.memoizedState = Mc(n),
                            t.memoizedState = Nc,
                            e) : cf(t, s));
    if (i = e.memoizedState,
        i !== null && (a = i.dehydrated,
            a !== null))
        return zb(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback,
            s = t.mode,
            i = e.child,
            a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = l,
            t.deletions = null) : (r = tr(i, l),
                r.subtreeFlags = i.subtreeFlags & 14680064),
            a !== null ? o = tr(a, o) : (o = Ir(o, s, n, null),
                o.flags |= 2),
            o.return = t,
            r.return = t,
            r.sibling = o,
            t.child = r,
            r = o,
            o = t.child,
            s = e.child.memoizedState,
            s = s === null ? Mc(n) : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions
            },
            o.memoizedState = s,
            o.childLanes = e.childLanes & ~n,
            t.memoizedState = Nc,
            r
    }
    return o = e.child,
        e = o.sibling,
        r = tr(o, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
            n === null ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
}
function cf(e, t) {
    return t = El({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
        t.return = e,
        e.child = t
}
function Qs(e, t, n, r) {
    return r !== null && Xd(r),
        zi(t, e.child, null, n),
        e = cf(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
}
function zb(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
            r = xu(Error(j(422))),
            Qs(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
                t.flags |= 128,
                null) : (o = r.fallback,
                    i = t.mode,
                    r = El({
                        mode: "visible",
                        children: r.children
                    }, i, 0, null),
                    o = Ir(o, i, s, null),
                    o.flags |= 2,
                    r.return = t,
                    o.return = t,
                    r.sibling = o,
                    t.child = r,
                    t.mode & 1 && zi(t, e.child, null, s),
                    t.child.memoizedState = Mc(s),
                    t.memoizedState = Nc,
                    o);
    if (!(t.mode & 1))
        return Qs(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
            r)
            var a = r.dgst;
        return r = a,
            o = Error(j(419)),
            r = xu(o, r, void 0),
            Qs(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
        qe || a) {
        if (r = Re,
            r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
                i !== 0 && i !== o.retryLane && (o.retryLane = i,
                    yn(e, i),
                    It(r, e, i, -1))
        }
        return gf(),
            r = xu(Error(j(421))),
            Qs(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = eC.bind(null, e),
        i._reactRetry = t,
        null) : (e = o.treeContext,
            it = qn(i.nextSibling),
            ot = t,
            ce = !0,
            Lt = null,
            e !== null && (ft[ht++] = fn,
                ft[ht++] = hn,
                ft[ht++] = Vr,
                fn = e.id,
                hn = e.overflow,
                Vr = t),
            t = cf(t, r.children),
            t.flags |= 4096,
            t)
}
function Sp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
        Tc(e.return, t, n)
}
function wu(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
        o.rendering = null,
        o.renderingStartTime = 0,
        o.last = r,
        o.tail = n,
        o.tailMode = i)
}
function B0(e, t, n) {
    var r = t.pendingProps
        , i = r.revealOrder
        , o = r.tail;
    if ($e(e, t, r.children, n),
        r = fe.current,
        r & 2)
        r = r & 1 | 2,
            t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && Sp(e, n, t);
                else if (e.tag === 19)
                    Sp(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        r &= 1
    }
    if (ie(fe, r),
        !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child,
                    i = null; n !== null;)
                    e = n.alternate,
                        e !== null && Wa(e) === null && (i = n),
                        n = n.sibling;
                n = i,
                    n === null ? (i = t.child,
                        t.child = null) : (i = n.sibling,
                            n.sibling = null),
                    wu(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null,
                    i = t.child,
                    t.child = null; i !== null;) {
                    if (e = i.alternate,
                        e !== null && Wa(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling,
                        i.sibling = n,
                        n = i,
                        i = e
                }
                wu(t, !0, n, null, o);
                break;
            case "together":
                wu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
    return t.child
}
function ma(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
}
function vn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
        zr |= t.lanes,
        !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
            n = tr(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null;)
            e = e.sibling,
                n = n.sibling = tr(e, e.pendingProps),
                n.return = t;
        n.sibling = null
    }
    return t.child
}
function $b(e, t, n) {
    switch (t.tag) {
        case 3:
            _0(t),
                Bi();
            break;
        case 5:
            f0(t);
            break;
        case 1:
            Je(t.type) && _a(t);
            break;
        case 4:
            tf(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
                , i = t.memoizedProps.value;
            ie(za, r._currentValue),
                r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (ie(fe, fe.current & 1),
                    t.flags |= 128,
                    null) : n & t.child.childLanes ? V0(e, t, n) : (ie(fe, fe.current & 1),
                        e = vn(e, t, n),
                        e !== null ? e.sibling : null);
            ie(fe, fe.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
                e.flags & 128) {
                if (r)
                    return B0(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState,
                i !== null && (i.rendering = null,
                    i.tail = null,
                    i.lastEffect = null),
                ie(fe, fe.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
                I0(e, t, n)
    }
    return vn(e, t, n)
}
var z0, jc, $0, U0;
z0 = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
jc = function () { }
    ;
$0 = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
            Er(Zt.current);
        var o = null;
        switch (n) {
            case "input":
                i = ec(e, i),
                    r = ec(e, r),
                    o = [];
                break;
            case "select":
                i = me({}, i, {
                    value: void 0
                }),
                    r = me({}, r, {
                        value: void 0
                    }),
                    o = [];
                break;
            case "textarea":
                i = rc(e, i),
                    r = rc(e, r),
                    o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ia)
        }
        oc(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                            n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Bo.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
                r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                                n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                                n[s] = l[s])
                    } else
                        n || (o || (o = []),
                            o.push(u, n)),
                            n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                        a = a ? a.__html : void 0,
                        l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Bo.hasOwnProperty(u) ? (l != null && u === "onScroll" && ae("scroll", e),
                            o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
    ;
U0 = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
    ;
function go(e, t) {
    if (!ce)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t),
                        t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
        , n = 0
        , r = 0;
    if (t)
        for (var i = e.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags & 14680064,
                r |= i.flags & 14680064,
                i.return = e,
                i = i.sibling;
    else
        for (i = e.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags,
                r |= i.flags,
                i.return = e,
                i = i.sibling;
    return e.subtreeFlags |= r,
        e.childLanes = n,
        t
}
function Ub(e, t, n) {
    var r = t.pendingProps;
    switch (Qd(t),
    t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ie(t),
                null;
        case 1:
            return Je(t.type) && Fa(),
                Ie(t),
                null;
        case 3:
            return r = t.stateNode,
                $i(),
                le(Ze),
                le(Be),
                rf(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (e === null || e.child === null) && (Ks(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                    Lt !== null && (Bc(Lt),
                        Lt = null))),
                jc(e, t),
                Ie(t),
                null;
        case 5:
            nf(t);
            var i = Er(Zo.current);
            if (n = t.type,
                e !== null && t.stateNode != null)
                $0(e, t, n, r, i),
                    e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(j(166));
                    return Ie(t),
                        null
                }
                if (e = Er(Zt.current),
                    Ks(t)) {
                    r = t.stateNode,
                        n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Xt] = t,
                    r[Yo] = o,
                    e = (t.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            ae("cancel", r),
                                ae("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ae("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < To.length; i++)
                                ae(To[i], r);
                            break;
                        case "source":
                            ae("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ae("error", r),
                                ae("load", r);
                            break;
                        case "details":
                            ae("toggle", r);
                            break;
                        case "input":
                            Nh(r, o),
                                ae("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            },
                                ae("invalid", r);
                            break;
                        case "textarea":
                            jh(r, o),
                                ae("invalid", r)
                    }
                    oc(n, o),
                        i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Hs(r.textContent, a, e),
                                i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Hs(r.textContent, a, e),
                                    i = ["children", "" + a]) : Bo.hasOwnProperty(s) && a != null && s === "onScroll" && ae("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Fs(r),
                                Mh(r, o, !0);
                            break;
                        case "textarea":
                            Fs(r),
                                Dh(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Ia)
                    }
                    r = i,
                        t.updateQueue = r,
                        r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument,
                        e === "http://www.w3.org/1999/xhtml" && (e = yy(n)),
                        e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                                is: r.is
                            }) : (e = s.createElement(n),
                                n === "select" && (s = e,
                                    r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                        e[Xt] = t,
                        e[Yo] = r,
                        z0(e, t, !1, !1),
                        t.stateNode = e;
                    e: {
                        switch (s = sc(n, r),
                        n) {
                            case "dialog":
                                ae("cancel", e),
                                    ae("close", e),
                                    i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ae("load", e),
                                    i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < To.length; i++)
                                    ae(To[i], e);
                                i = r;
                                break;
                            case "source":
                                ae("error", e),
                                    i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ae("error", e),
                                    ae("load", e),
                                    i = r;
                                break;
                            case "details":
                                ae("toggle", e),
                                    i = r;
                                break;
                            case "input":
                                Nh(e, r),
                                    i = ec(e, r),
                                    ae("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    i = me({}, r, {
                                        value: void 0
                                    }),
                                    ae("invalid", e);
                                break;
                            case "textarea":
                                jh(e, r),
                                    i = rc(e, r),
                                    ae("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        oc(n, i),
                            a = i;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === "style" ? wy(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                                    l != null && vy(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && zo(e, l) : typeof l == "number" && zo(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Bo.hasOwnProperty(o) ? l != null && o === "onScroll" && ae("scroll", e) : l != null && Dd(e, o, l, s))
                            }
                        switch (n) {
                            case "input":
                                Fs(e),
                                    Mh(e, r, !1);
                                break;
                            case "textarea":
                                Fs(e),
                                    Dh(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + rr(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                    o = r.value,
                                    o != null ? Si(e, !!r.multiple, o, !1) : r.defaultValue != null && Si(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Ia)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                    t.flags |= 2097152)
            }
            return Ie(t),
                null;
        case 6:
            if (e && t.stateNode != null)
                U0(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(j(166));
                if (n = Er(Zo.current),
                    Er(Zt.current),
                    Ks(t)) {
                    if (r = t.stateNode,
                        n = t.memoizedProps,
                        r[Xt] = t,
                        (o = r.nodeValue !== n) && (e = ot,
                            e !== null))
                        switch (e.tag) {
                            case 3:
                                Hs(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Hs(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    o && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[Xt] = t,
                        t.stateNode = r
            }
            return Ie(t),
                null;
        case 13:
            if (le(fe),
                r = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ce && it !== null && t.mode & 1 && !(t.flags & 128))
                    a0(),
                        Bi(),
                        t.flags |= 98560,
                        o = !1;
                else if (o = Ks(t),
                    r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(j(318));
                        if (o = t.memoizedState,
                            o = o !== null ? o.dehydrated : null,
                            !o)
                            throw Error(j(317));
                        o[Xt] = t
                    } else
                        Bi(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                    Ie(t),
                        o = !1
                } else
                    Lt !== null && (Bc(Lt),
                        Lt = null),
                        o = !0;
                if (!o)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
                t) : (r = r !== null,
                    r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
                        t.mode & 1 && (e === null || fe.current & 1 ? Pe === 0 && (Pe = 3) : gf())),
                    t.updateQueue !== null && (t.flags |= 4),
                    Ie(t),
                    null);
        case 4:
            return $i(),
                jc(e, t),
                e === null && Qo(t.stateNode.containerInfo),
                Ie(t),
                null;
        case 10:
            return Zd(t.type._context),
                Ie(t),
                null;
        case 17:
            return Je(t.type) && Fa(),
                Ie(t),
                null;
        case 19:
            if (le(fe),
                o = t.memoizedState,
                o === null)
                return Ie(t),
                    null;
            if (r = (t.flags & 128) !== 0,
                s = o.rendering,
                s === null)
                if (r)
                    go(o, !1);
                else {
                    if (Pe !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Wa(e),
                                s !== null) {
                                for (t.flags |= 128,
                                    go(o, !1),
                                    r = s.updateQueue,
                                    r !== null && (t.updateQueue = r,
                                        t.flags |= 4),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;)
                                    o = n,
                                        e = r,
                                        o.flags &= 14680066,
                                        s = o.alternate,
                                        s === null ? (o.childLanes = 0,
                                            o.lanes = e,
                                            o.child = null,
                                            o.subtreeFlags = 0,
                                            o.memoizedProps = null,
                                            o.memoizedState = null,
                                            o.updateQueue = null,
                                            o.dependencies = null,
                                            o.stateNode = null) : (o.childLanes = s.childLanes,
                                                o.lanes = s.lanes,
                                                o.child = s.child,
                                                o.subtreeFlags = 0,
                                                o.deletions = null,
                                                o.memoizedProps = s.memoizedProps,
                                                o.memoizedState = s.memoizedState,
                                                o.updateQueue = s.updateQueue,
                                                o.type = s.type,
                                                e = s.dependencies,
                                                o.dependencies = e === null ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }),
                                        n = n.sibling;
                                return ie(fe, fe.current & 1 | 2),
                                    t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && ve() > Wi && (t.flags |= 128,
                        r = !0,
                        go(o, !1),
                        t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Wa(s),
                        e !== null) {
                        if (t.flags |= 128,
                            r = !0,
                            n = e.updateQueue,
                            n !== null && (t.updateQueue = n,
                                t.flags |= 4),
                            go(o, !0),
                            o.tail === null && o.tailMode === "hidden" && !s.alternate && !ce)
                            return Ie(t),
                                null
                    } else
                        2 * ve() - o.renderingStartTime > Wi && n !== 1073741824 && (t.flags |= 128,
                            r = !0,
                            go(o, !1),
                            t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child,
                    t.child = s) : (n = o.last,
                        n !== null ? n.sibling = s : t.child = s,
                        o.last = s)
            }
            return o.tail !== null ? (t = o.tail,
                o.rendering = t,
                o.tail = t.sibling,
                o.renderingStartTime = ve(),
                t.sibling = null,
                n = fe.current,
                ie(fe, r ? n & 1 | 2 : n & 1),
                t) : (Ie(t),
                    null);
        case 22:
        case 23:
            return mf(),
                r = t.memoizedState !== null,
                e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
                r && t.mode & 1 ? nt & 1073741824 && (Ie(t),
                    t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(j(156, t.tag))
}
function Wb(e, t) {
    switch (Qd(t),
    t.tag) {
        case 1:
            return Je(t.type) && Fa(),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 3:
            return $i(),
                le(Ze),
                le(Be),
                rf(),
                e = t.flags,
                e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 5:
            return nf(t),
                null;
        case 13:
            if (le(fe),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(j(340));
                Bi()
            }
            return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 19:
            return le(fe),
                null;
        case 4:
            return $i(),
                null;
        case 10:
            return Zd(t.type._context),
                null;
        case 22:
        case 23:
            return mf(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var Xs = !1
    , _e = !1
    , Hb = typeof WeakSet == "function" ? WeakSet : Set
    , _ = null;
function pi(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ye(e, t, r)
            }
        else
            n.current = null
}
function Dc(e, t, n) {
    try {
        n()
    } catch (r) {
        ye(e, t, r)
    }
}
var bp = !1;
function Kb(e, t) {
    if (gc = Da,
        e = Qy(),
        Kd(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                        , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                        , a = -1
                        , l = -1
                        , u = 0
                        , c = 0
                        , d = e
                        , f = null;
                    t: for (; ;) {
                        for (var h; d !== n || i !== 0 && d.nodeType !== 3 || (a = s + i),
                            d !== o || r !== 0 && d.nodeType !== 3 || (l = s + r),
                            d.nodeType === 3 && (s += d.nodeValue.length),
                            (h = d.firstChild) !== null;)
                            f = d,
                                d = h;
                        for (; ;) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === i && (a = s),
                                f === o && ++c === r && (l = s),
                                (h = d.nextSibling) !== null)
                                break;
                            d = f,
                                f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (yc = {
        focusedElem: e,
        selectionRange: n
    },
        Da = !1,
        _ = t; _ !== null;)
        if (t = _,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
                _ = e;
        else
            for (; _ !== null;) {
                t = _;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (v !== null) {
                                    var g = v.memoizedProps
                                        , S = v.memoizedState
                                        , p = t.stateNode
                                        , m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : At(t.type, g), S);
                                    p.__reactInternalSnapshotBeforeUpdate = m
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(j(163))
                        }
                } catch (b) {
                    ye(t, t.return, b)
                }
                if (e = t.sibling,
                    e !== null) {
                    e.return = t.return,
                        _ = e;
                    break
                }
                _ = t.return
            }
    return v = bp,
        bp = !1,
        v
}
function jo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                    o !== void 0 && Dc(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Cl(e, t) {
    if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Lc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function W0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
        W0(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
            t !== null && (delete t[Xt],
                delete t[Yo],
                delete t[wc],
                delete t[Rb],
                delete t[Ab])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
}
function H0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Cp(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || H0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
                e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Oc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                t.insertBefore(e, n)) : (t = n,
                    t.appendChild(e)),
                n = n._reactRootContainer,
                n != null || t.onclick !== null || (t.onclick = Ia));
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Oc(e, t, n),
            e = e.sibling; e !== null;)
            Oc(e, t, n),
                e = e.sibling
}
function Ic(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Ic(e, t, n),
            e = e.sibling; e !== null;)
            Ic(e, t, n),
                e = e.sibling
}
var Ae = null
    , Dt = !1;
function An(e, t, n) {
    for (n = n.child; n !== null;)
        K0(e, t, n),
            n = n.sibling
}
function K0(e, t, n) {
    if (qt && typeof qt.onCommitFiberUnmount == "function")
        try {
            qt.onCommitFiberUnmount(ml, n)
        } catch { }
    switch (n.tag) {
        case 5:
            _e || pi(n, t);
        case 6:
            var r = Ae
                , i = Dt;
            Ae = null,
                An(e, t, n),
                Ae = r,
                Dt = i,
                Ae !== null && (Dt ? (e = Ae,
                    n = n.stateNode,
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
            break;
        case 18:
            Ae !== null && (Dt ? (e = Ae,
                n = n.stateNode,
                e.nodeType === 8 ? hu(e.parentNode, n) : e.nodeType === 1 && hu(e, n),
                Ho(e)) : hu(Ae, n.stateNode));
            break;
        case 4:
            r = Ae,
                i = Dt,
                Ae = n.stateNode.containerInfo,
                Dt = !0,
                An(e, t, n),
                Ae = r,
                Dt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!_e && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                i = r = r.next;
                do {
                    var o = i
                        , s = o.destroy;
                    o = o.tag,
                        s !== void 0 && (o & 2 || o & 4) && Dc(n, t, s),
                        i = i.next
                } while (i !== r)
            }
            An(e, t, n);
            break;
        case 1:
            if (!_e && (pi(n, t),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (a) {
                    ye(n, t, a)
                }
            An(e, t, n);
            break;
        case 21:
            An(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (_e = (r = _e) || n.memoizedState !== null,
                An(e, t, n),
                _e = r) : An(e, t, n);
            break;
        default:
            An(e, t, n)
    }
}
function Tp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Hb),
            t.forEach(function (r) {
                var i = tC.bind(null, e, r);
                n.has(r) || (n.add(r),
                    r.then(i, i))
            })
    }
}
function Tt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                    , s = t
                    , a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Ae = a.stateNode,
                                Dt = !1;
                            break e;
                        case 3:
                            Ae = a.stateNode.containerInfo,
                                Dt = !0;
                            break e;
                        case 4:
                            Ae = a.stateNode.containerInfo,
                                Dt = !0;
                            break e
                    }
                    a = a.return
                }
                if (Ae === null)
                    throw Error(j(160));
                K0(o, s, i),
                    Ae = null,
                    Dt = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                    i.return = null
            } catch (u) {
                ye(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            G0(t, e),
                t = t.sibling
}
function G0(e, t) {
    var n = e.alternate
        , r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Tt(t, e),
                $t(e),
                r & 4) {
                try {
                    jo(3, e, e.return),
                        Cl(3, e)
                } catch (g) {
                    ye(e, e.return, g)
                }
                try {
                    jo(5, e, e.return)
                } catch (g) {
                    ye(e, e.return, g)
                }
            }
            break;
        case 1:
            Tt(t, e),
                $t(e),
                r & 512 && n !== null && pi(n, n.return);
            break;
        case 5:
            if (Tt(t, e),
                $t(e),
                r & 512 && n !== null && pi(n, n.return),
                e.flags & 32) {
                var i = e.stateNode;
                try {
                    zo(i, "")
                } catch (g) {
                    ye(e, e.return, g)
                }
            }
            if (r & 4 && (i = e.stateNode,
                i != null)) {
                var o = e.memoizedProps
                    , s = n !== null ? n.memoizedProps : o
                    , a = e.type
                    , l = e.updateQueue;
                if (e.updateQueue = null,
                    l !== null)
                    try {
                        a === "input" && o.type === "radio" && o.name != null && my(i, o),
                            sc(a, s);
                        var u = sc(a, o);
                        for (s = 0; s < l.length; s += 2) {
                            var c = l[s]
                                , d = l[s + 1];
                            c === "style" ? wy(i, d) : c === "dangerouslySetInnerHTML" ? vy(i, d) : c === "children" ? zo(i, d) : Dd(i, c, d, u)
                        }
                        switch (a) {
                            case "input":
                                tc(i, o);
                                break;
                            case "textarea":
                                gy(i, o);
                                break;
                            case "select":
                                var f = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var h = o.value;
                                h != null ? Si(i, !!o.multiple, h, !1) : f !== !!o.multiple && (o.defaultValue != null ? Si(i, !!o.multiple, o.defaultValue, !0) : Si(i, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                        i[Yo] = o
                    } catch (g) {
                        ye(e, e.return, g)
                    }
            }
            break;
        case 6:
            if (Tt(t, e),
                $t(e),
                r & 4) {
                if (e.stateNode === null)
                    throw Error(j(162));
                i = e.stateNode,
                    o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (g) {
                    ye(e, e.return, g)
                }
            }
            break;
        case 3:
            if (Tt(t, e),
                $t(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Ho(t.containerInfo)
                } catch (g) {
                    ye(e, e.return, g)
                }
            break;
        case 4:
            Tt(t, e),
                $t(e);
            break;
        case 13:
            Tt(t, e),
                $t(e),
                i = e.child,
                i.flags & 8192 && (o = i.memoizedState !== null,
                    i.stateNode.isHidden = o,
                    !o || i.alternate !== null && i.alternate.memoizedState !== null || (hf = ve())),
                r & 4 && Tp(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null,
                e.mode & 1 ? (_e = (u = _e) || c,
                    Tt(t, e),
                    _e = u) : Tt(t, e),
                $t(e),
                r & 8192) {
                if (u = e.memoizedState !== null,
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (_ = e,
                        c = e.child; c !== null;) {
                        for (d = _ = c; _ !== null;) {
                            switch (f = _,
                            h = f.child,
                            f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    jo(4, f, f.return);
                                    break;
                                case 1:
                                    pi(f, f.return);
                                    var v = f.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = f,
                                            n = f.return;
                                        try {
                                            t = r,
                                                v.props = t.memoizedProps,
                                                v.state = t.memoizedState,
                                                v.componentWillUnmount()
                                        } catch (g) {
                                            ye(r, n, g)
                                        }
                                    }
                                    break;
                                case 5:
                                    pi(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Pp(d);
                                        continue
                                    }
                            }
                            h !== null ? (h.return = f,
                                _ = h) : Pp(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null,
                    d = e; ;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                i = d.stateNode,
                                    u ? (o = i.style,
                                        typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode,
                                            l = d.memoizedProps.style,
                                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                                            a.style.display = xy("display", s))
                            } catch (g) {
                                ye(e, e.return, g)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null)
                            try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps
                            } catch (g) {
                                ye(e, e.return, g)
                            }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d,
                            d = d.child;
                        continue
                    }
                    if (d === e)
                        break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e)
                            break e;
                        c === d && (c = null),
                            d = d.return
                    }
                    c === d && (c = null),
                        d.sibling.return = d.return,
                        d = d.sibling
                }
            }
            break;
        case 19:
            Tt(t, e),
                $t(e),
                r & 4 && Tp(e);
            break;
        case 21:
            break;
        default:
            Tt(t, e),
                $t(e)
    }
}
function $t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (H0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (zo(i, ""),
                        r.flags &= -33);
                    var o = Cp(e);
                    Ic(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo
                        , a = Cp(e);
                    Oc(e, a, s);
                    break;
                default:
                    throw Error(j(161))
            }
        } catch (l) {
            ye(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Gb(e, t, n) {
    _ = e,
        Q0(e)
}
function Q0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
        var i = _
            , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Xs;
            if (!s) {
                var a = i.alternate
                    , l = a !== null && a.memoizedState !== null || _e;
                a = Xs;
                var u = _e;
                if (Xs = s,
                    (_e = l) && !u)
                    for (_ = i; _ !== null;)
                        s = _,
                            l = s.child,
                            s.tag === 22 && s.memoizedState !== null ? kp(i) : l !== null ? (l.return = s,
                                _ = l) : kp(i);
                for (; o !== null;)
                    _ = o,
                        Q0(o),
                        o = o.sibling;
                _ = i,
                    Xs = a,
                    _e = u
            }
            Ep(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
                _ = o) : Ep(e)
    }
}
function Ep(e) {
    for (; _ !== null;) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            _e || Cl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !_e)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : At(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var o = t.updateQueue;
                            o !== null && up(t, o, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (n = null,
                                    t.child !== null)
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                up(t, s, n)
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var d = c.dehydrated;
                                        d !== null && Ho(d)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(j(163))
                    }
                _e || t.flags & 512 && Lc(t)
            } catch (f) {
                ye(t, t.return, f)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling,
            n !== null) {
            n.return = t.return,
                _ = n;
            break
        }
        _ = t.return
    }
}
function Pp(e) {
    for (; _ !== null;) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
                _ = n;
            break
        }
        _ = t.return
    }
}
function kp(e) {
    for (; _ !== null;) {
        var t = _;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Cl(4, t)
                    } catch (l) {
                        ye(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            ye(t, i, l)
                        }
                    }
                    var o = t.return;
                    try {
                        Lc(t)
                    } catch (l) {
                        ye(t, o, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Lc(t)
                    } catch (l) {
                        ye(t, s, l)
                    }
            }
        } catch (l) {
            ye(t, t.return, l)
        }
        if (t === e) {
            _ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
                _ = a;
            break
        }
        _ = t.return
    }
}
var Qb = Math.ceil
    , Ga = bn.ReactCurrentDispatcher
    , df = bn.ReactCurrentOwner
    , gt = bn.ReactCurrentBatchConfig
    , Z = 0
    , Re = null
    , Se = null
    , Me = 0
    , nt = 0
    , mi = dr(0)
    , Pe = 0
    , ns = null
    , zr = 0
    , Tl = 0
    , ff = 0
    , Do = null
    , Ye = null
    , hf = 0
    , Wi = 1 / 0
    , un = null
    , Qa = !1
    , Fc = null
    , Jn = null
    , Ys = !1
    , Hn = null
    , Xa = 0
    , Lo = 0
    , _c = null
    , ga = -1
    , ya = 0;
function Ke() {
    return Z & 6 ? ve() : ga !== -1 ? ga : ga = ve()
}
function er(e) {
    return e.mode & 1 ? Z & 2 && Me !== 0 ? Me & -Me : Mb.transition !== null ? (ya === 0 && (ya = jy()),
        ya) : (e = ne,
            e !== 0 || (e = window.event,
                e = e === void 0 ? 16 : Vy(e.type)),
            e) : 1
}
function It(e, t, n, r) {
    if (50 < Lo)
        throw Lo = 0,
        _c = null,
        Error(j(185));
    ys(e, n, r),
        (!(Z & 2) || e !== Re) && (e === Re && (!(Z & 2) && (Tl |= n),
            Pe === 4 && _n(e, Me)),
            et(e, r),
            n === 1 && Z === 0 && !(t.mode & 1) && (Wi = ve() + 500,
                wl && fr()))
}
function et(e, t) {
    var n = e.callbackNode;
    MS(e, t);
    var r = ja(e, e === Re ? Me : 0);
    if (r === 0)
        n !== null && Ih(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
    else if (t = r & -r,
        e.callbackPriority !== t) {
        if (n != null && Ih(n),
            t === 1)
            e.tag === 0 ? Nb(Rp.bind(null, e)) : i0(Rp.bind(null, e)),
                Pb(function () {
                    !(Z & 6) && fr()
                }),
                n = null;
        else {
            switch (Dy(r)) {
                case 1:
                    n = _d;
                    break;
                case 4:
                    n = Ny;
                    break;
                case 16:
                    n = Ma;
                    break;
                case 536870912:
                    n = My;
                    break;
                default:
                    n = Ma
            }
            n = nv(n, X0.bind(null, e))
        }
        e.callbackPriority = t,
            e.callbackNode = n
    }
}
function X0(e, t) {
    if (ga = -1,
        ya = 0,
        Z & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (Pi() && e.callbackNode !== n)
        return null;
    var r = ja(e, e === Re ? Me : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ya(e, r);
    else {
        t = r;
        var i = Z;
        Z |= 2;
        var o = q0();
        (Re !== e || Me !== t) && (un = null,
            Wi = ve() + 500,
            Or(e, t));
        do
            try {
                qb();
                break
            } catch (a) {
                Y0(e, a)
            }
        while (!0);
        qd(),
            Ga.current = o,
            Z = i,
            Se !== null ? t = 0 : (Re = null,
                Me = 0,
                t = Pe)
    }
    if (t !== 0) {
        if (t === 2 && (i = dc(e),
            i !== 0 && (r = i,
                t = Vc(e, i))),
            t === 1)
            throw n = ns,
            Or(e, 0),
            _n(e, r),
            et(e, ve()),
            n;
        if (t === 6)
            _n(e, r);
        else {
            if (i = e.current.alternate,
                !(r & 30) && !Xb(i) && (t = Ya(e, r),
                    t === 2 && (o = dc(e),
                        o !== 0 && (r = o,
                            t = Vc(e, o))),
                    t === 1))
                throw n = ns,
                Or(e, 0),
                _n(e, r),
                et(e, ve()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
                case 0:
                case 1:
                    throw Error(j(345));
                case 2:
                    xr(e, Ye, un);
                    break;
                case 3:
                    if (_n(e, r),
                        (r & 130023424) === r && (t = hf + 500 - ve(),
                            10 < t)) {
                        if (ja(e, 0) !== 0)
                            break;
                        if (i = e.suspendedLanes,
                            (i & r) !== r) {
                            Ke(),
                                e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = xc(xr.bind(null, e, Ye, un), t);
                        break
                    }
                    xr(e, Ye, un);
                    break;
                case 4:
                    if (_n(e, r),
                        (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                        i = -1; 0 < r;) {
                        var s = 31 - Ot(r);
                        o = 1 << s,
                            s = t[s],
                            s > i && (i = s),
                            r &= ~o
                    }
                    if (r = i,
                        r = ve() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qb(r / 1960)) - r,
                        10 < r) {
                        e.timeoutHandle = xc(xr.bind(null, e, Ye, un), r);
                        break
                    }
                    xr(e, Ye, un);
                    break;
                case 5:
                    xr(e, Ye, un);
                    break;
                default:
                    throw Error(j(329))
            }
        }
    }
    return et(e, ve()),
        e.callbackNode === n ? X0.bind(null, e) : null
}
function Vc(e, t) {
    var n = Do;
    return e.current.memoizedState.isDehydrated && (Or(e, t).flags |= 256),
        e = Ya(e, t),
        e !== 2 && (t = Ye,
            Ye = n,
            t !== null && Bc(t)),
        e
}
function Bc(e) {
    Ye === null ? Ye = e : Ye.push.apply(Ye, e)
}
function Xb(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                        , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!_t(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
            n.return = t,
                t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
    }
    return !0
}
function _n(e, t) {
    for (t &= ~ff,
        t &= ~Tl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;) {
        var n = 31 - Ot(t)
            , r = 1 << n;
        e[n] = -1,
            t &= ~r
    }
}
function Rp(e) {
    if (Z & 6)
        throw Error(j(327));
    Pi();
    var t = ja(e, 0);
    if (!(t & 1))
        return et(e, ve()),
            null;
    var n = Ya(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = dc(e);
        r !== 0 && (t = r,
            n = Vc(e, r))
    }
    if (n === 1)
        throw n = ns,
        Or(e, 0),
        _n(e, t),
        et(e, ve()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        xr(e, Ye, un),
        et(e, ve()),
        null
}
function pf(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n,
            Z === 0 && (Wi = ve() + 500,
                wl && fr())
    }
}
function $r(e) {
    Hn !== null && Hn.tag === 0 && !(Z & 6) && Pi();
    var t = Z;
    Z |= 1;
    var n = gt.transition
        , r = ne;
    try {
        if (gt.transition = null,
            ne = 1,
            e)
            return e()
    } finally {
        ne = r,
            gt.transition = n,
            Z = t,
            !(Z & 6) && fr()
    }
}
function mf() {
    nt = mi.current,
        le(mi)
}
function Or(e, t) {
    e.finishedWork = null,
        e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
        Eb(n)),
        Se !== null)
        for (n = Se.return; n !== null;) {
            var r = n;
            switch (Qd(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && Fa();
                    break;
                case 3:
                    $i(),
                        le(Ze),
                        le(Be),
                        rf();
                    break;
                case 5:
                    nf(r);
                    break;
                case 4:
                    $i();
                    break;
                case 13:
                    le(fe);
                    break;
                case 19:
                    le(fe);
                    break;
                case 10:
                    Zd(r.type._context);
                    break;
                case 22:
                case 23:
                    mf()
            }
            n = n.return
        }
    if (Re = e,
        Se = e = tr(e.current, null),
        Me = nt = t,
        Pe = 0,
        ns = null,
        ff = Tl = zr = 0,
        Ye = Do = null,
        Tr !== null) {
        for (t = 0; t < Tr.length; t++)
            if (n = Tr[t],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var i = r.next
                    , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                        r.next = s
                }
                n.pending = r
            }
        Tr = null
    }
    return e
}
function Y0(e, t) {
    do {
        var n = Se;
        try {
            if (qd(),
                ha.current = Ka,
                Ha) {
                for (var r = pe.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                        r = r.next
                }
                Ha = !1
            }
            if (Br = 0,
                ke = Te = pe = null,
                Mo = !1,
                Jo = 0,
                df.current = null,
                n === null || n.return === null) {
                Pe = 1,
                    ns = t,
                    Se = null;
                break
            }
            e: {
                var o = e
                    , s = n.return
                    , a = n
                    , l = t;
                if (t = Me,
                    a.flags |= 32768,
                    l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                        , c = a
                        , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                            c.memoizedState = f.memoizedState,
                            c.lanes = f.lanes) : (c.updateQueue = null,
                                c.memoizedState = null)
                    }
                    var h = mp(s);
                    if (h !== null) {
                        h.flags &= -257,
                            gp(h, s, a, o, t),
                            h.mode & 1 && pp(o, u, t),
                            t = h,
                            l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var g = new Set;
                            g.add(l),
                                t.updateQueue = g
                        } else
                            v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            pp(o, u, t),
                                gf();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (ce && a.mode & 1) {
                    var S = mp(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                            gp(S, s, a, o, t),
                            Xd(Ui(l, a));
                        break e
                    }
                }
                o = l = Ui(l, a),
                    Pe !== 4 && (Pe = 2),
                    Do === null ? Do = [o] : Do.push(o),
                    o = s;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536,
                                t &= -t,
                                o.lanes |= t;
                            var p = D0(o, l, t);
                            lp(o, p);
                            break e;
                        case 1:
                            a = l;
                            var m = o.type
                                , y = o.stateNode;
                            if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Jn === null || !Jn.has(y)))) {
                                o.flags |= 65536,
                                    t &= -t,
                                    o.lanes |= t;
                                var b = L0(o, a, t);
                                lp(o, b);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            J0(n)
        } catch (C) {
            t = C,
                Se === n && n !== null && (Se = n = n.return);
            continue
        }
        break
    } while (!0)
}
function q0() {
    var e = Ga.current;
    return Ga.current = Ka,
        e === null ? Ka : e
}
function gf() {
    (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
        Re === null || !(zr & 268435455) && !(Tl & 268435455) || _n(Re, Me)
}
function Ya(e, t) {
    var n = Z;
    Z |= 2;
    var r = q0();
    (Re !== e || Me !== t) && (un = null,
        Or(e, t));
    do
        try {
            Yb();
            break
        } catch (i) {
            Y0(e, i)
        }
    while (!0);
    if (qd(),
        Z = n,
        Ga.current = r,
        Se !== null)
        throw Error(j(261));
    return Re = null,
        Me = 0,
        Pe
}
function Yb() {
    for (; Se !== null;)
        Z0(Se)
}
function qb() {
    for (; Se !== null && !bS();)
        Z0(Se)
}
function Z0(e) {
    var t = tv(e.alternate, e, nt);
    e.memoizedProps = e.pendingProps,
        t === null ? J0(e) : Se = t,
        df.current = null
}
function J0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
            t.flags & 32768) {
            if (n = Wb(n, t),
                n !== null) {
                n.flags &= 32767,
                    Se = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
            else {
                Pe = 6,
                    Se = null;
                return
            }
        } else if (n = Ub(n, t, nt),
            n !== null) {
            Se = n;
            return
        }
        if (t = t.sibling,
            t !== null) {
            Se = t;
            return
        }
        Se = t = e
    } while (t !== null);
    Pe === 0 && (Pe = 5)
}
function xr(e, t, n) {
    var r = ne
        , i = gt.transition;
    try {
        gt.transition = null,
            ne = 1,
            Zb(e, t, n, r)
    } finally {
        gt.transition = i,
            ne = r
    }
    return null
}
function Zb(e, t, n, r) {
    do
        Pi();
    while (Hn !== null);
    if (Z & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
        e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (jS(e, o),
        e === Re && (Se = Re = null,
            Me = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ys || (Ys = !0,
            nv(Ma, function () {
                return Pi(),
                    null
            })),
        o = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || o) {
        o = gt.transition,
            gt.transition = null;
        var s = ne;
        ne = 1;
        var a = Z;
        Z |= 4,
            df.current = null,
            Kb(e, n),
            G0(n, e),
            vb(yc),
            Da = !!gc,
            yc = gc = null,
            e.current = n,
            Gb(n),
            CS(),
            Z = a,
            ne = s,
            gt.transition = o
    } else
        e.current = n;
    if (Ys && (Ys = !1,
        Hn = e,
        Xa = i),
        o = e.pendingLanes,
        o === 0 && (Jn = null),
        PS(n.stateNode),
        et(e, ve()),
        t !== null)
        for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
            i = t[n],
                r(i.value, {
                    componentStack: i.stack,
                    digest: i.digest
                });
    if (Qa)
        throw Qa = !1,
        e = Fc,
        Fc = null,
        e;
    return Xa & 1 && e.tag !== 0 && Pi(),
        o = e.pendingLanes,
        o & 1 ? e === _c ? Lo++ : (Lo = 0,
            _c = e) : Lo = 0,
        fr(),
        null
}
function Pi() {
    if (Hn !== null) {
        var e = Dy(Xa)
            , t = gt.transition
            , n = ne;
        try {
            if (gt.transition = null,
                ne = 16 > e ? 16 : e,
                Hn === null)
                var r = !1;
            else {
                if (e = Hn,
                    Hn = null,
                    Xa = 0,
                    Z & 6)
                    throw Error(j(331));
                var i = Z;
                for (Z |= 4,
                    _ = e.current; _ !== null;) {
                    var o = _
                        , s = o.child;
                    if (_.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (_ = u; _ !== null;) {
                                    var c = _;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            jo(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                            _ = d;
                                    else
                                        for (; _ !== null;) {
                                            c = _;
                                            var f = c.sibling
                                                , h = c.return;
                                            if (W0(c),
                                                c === u) {
                                                _ = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                    _ = f;
                                                break
                                            }
                                            _ = h
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var g = v.child;
                                if (g !== null) {
                                    v.child = null;
                                    do {
                                        var S = g.sibling;
                                        g.sibling = null,
                                            g = S
                                    } while (g !== null)
                                }
                            }
                            _ = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                            _ = s;
                    else
                        e: for (; _ !== null;) {
                            if (o = _,
                                o.flags & 2048)
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        jo(9, o, o.return)
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                p.return = o.return,
                                    _ = p;
                                break e
                            }
                            _ = o.return
                        }
                }
                var m = e.current;
                for (_ = m; _ !== null;) {
                    s = _;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null)
                        y.return = s,
                            _ = y;
                    else
                        e: for (s = m; _ !== null;) {
                            if (a = _,
                                a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Cl(9, a)
                                    }
                                } catch (C) {
                                    ye(a, a.return, C)
                                }
                            if (a === s) {
                                _ = null;
                                break e
                            }
                            var b = a.sibling;
                            if (b !== null) {
                                b.return = a.return,
                                    _ = b;
                                break e
                            }
                            _ = a.return
                        }
                }
                if (Z = i,
                    fr(),
                    qt && typeof qt.onPostCommitFiberRoot == "function")
                    try {
                        qt.onPostCommitFiberRoot(ml, e)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            ne = n,
                gt.transition = t
        }
    }
    return !1
}
function Ap(e, t, n) {
    t = Ui(n, t),
        t = D0(e, t, 1),
        e = Zn(e, t, 1),
        t = Ke(),
        e !== null && (ys(e, 1, t),
            et(e, t))
}
function ye(e, t, n) {
    if (e.tag === 3)
        Ap(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ap(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jn === null || !Jn.has(r))) {
                    e = Ui(n, e),
                        e = L0(t, e, 1),
                        t = Zn(t, e, 1),
                        e = Ke(),
                        t !== null && (ys(t, 1, e),
                            et(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Jb(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        t = Ke(),
        e.pingedLanes |= e.suspendedLanes & n,
        Re === e && (Me & n) === n && (Pe === 4 || Pe === 3 && (Me & 130023424) === Me && 500 > ve() - hf ? Or(e, 0) : ff |= n),
        et(e, t)
}
function ev(e, t) {
    t === 0 && (e.mode & 1 ? (t = Bs,
        Bs <<= 1,
        !(Bs & 130023424) && (Bs = 4194304)) : t = 1);
    var n = Ke();
    e = yn(e, t),
        e !== null && (ys(e, t, n),
            et(e, n))
}
function eC(e) {
    var t = e.memoizedState
        , n = 0;
    t !== null && (n = t.retryLane),
        ev(e, n)
}
function tC(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode
                , i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(j(314))
    }
    r !== null && r.delete(t),
        ev(e, n)
}
var tv;
tv = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ze.current)
            qe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return qe = !1,
                    $b(e, t, n);
            qe = !!(e.flags & 131072)
        }
    else
        qe = !1,
            ce && t.flags & 1048576 && o0(t, Ba, t.index);
    switch (t.lanes = 0,
    t.tag) {
        case 2:
            var r = t.type;
            ma(e, t),
                e = t.pendingProps;
            var i = Vi(t, Be.current);
            Ei(t, n),
                i = sf(null, t, r, e, i, n);
            var o = af();
            return t.flags |= 1,
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    Je(r) ? (o = !0,
                        _a(t)) : o = !1,
                    t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
                    ef(t),
                    i.updater = bl,
                    t.stateNode = i,
                    i._reactInternals = t,
                    Pc(t, r, e, n),
                    t = Ac(null, t, r, !0, o, n)) : (t.tag = 0,
                        ce && o && Gd(t),
                        $e(null, t, i, n),
                        t = t.child),
                t;
        case 16:
            r = t.elementType;
            e: {
                switch (ma(e, t),
                e = t.pendingProps,
                i = r._init,
                r = i(r._payload),
                t.type = r,
                i = t.tag = rC(r),
                e = At(r, e),
                i) {
                    case 0:
                        t = Rc(null, t, r, e, n);
                        break e;
                    case 1:
                        t = xp(null, t, r, e, n);
                        break e;
                    case 11:
                        t = yp(null, t, r, e, n);
                        break e;
                    case 14:
                        t = vp(null, t, r, At(r.type, e), n);
                        break e
                }
                throw Error(j(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : At(r, i),
                Rc(e, t, r, i, n);
        case 1:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : At(r, i),
                xp(e, t, r, i, n);
        case 3:
            e: {
                if (_0(t),
                    e === null)
                    throw Error(j(387));
                r = t.pendingProps,
                    o = t.memoizedState,
                    i = o.element,
                    d0(e, t),
                    Ua(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element,
                    o.isDehydrated)
                    if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache,
                        pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                        transitions: s.transitions
                    },
                        t.updateQueue.baseState = o,
                        t.memoizedState = o,
                        t.flags & 256) {
                        i = Ui(Error(j(423)), t),
                            t = wp(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = Ui(Error(j(424)), t),
                            t = wp(e, t, r, n, i);
                        break e
                    } else
                        for (it = qn(t.stateNode.containerInfo.firstChild),
                            ot = t,
                            ce = !0,
                            Lt = null,
                            n = u0(t, null, r, n),
                            t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (Bi(),
                        r === i) {
                        t = vn(e, t, n);
                        break e
                    }
                    $e(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return f0(t),
                e === null && Cc(t),
                r = t.type,
                i = t.pendingProps,
                o = e !== null ? e.memoizedProps : null,
                s = i.children,
                vc(r, i) ? s = null : o !== null && vc(r, o) && (t.flags |= 32),
                F0(e, t),
                $e(e, t, s, n),
                t.child;
        case 6:
            return e === null && Cc(t),
                null;
        case 13:
            return V0(e, t, n);
        case 4:
            return tf(t, t.stateNode.containerInfo),
                r = t.pendingProps,
                e === null ? t.child = zi(t, null, r, n) : $e(e, t, r, n),
                t.child;
        case 11:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : At(r, i),
                yp(e, t, r, i, n);
        case 7:
            return $e(e, t, t.pendingProps, n),
                t.child;
        case 8:
            return $e(e, t, t.pendingProps.children, n),
                t.child;
        case 12:
            return $e(e, t, t.pendingProps.children, n),
                t.child;
        case 10:
            e: {
                if (r = t.type._context,
                    i = t.pendingProps,
                    o = t.memoizedProps,
                    s = i.value,
                    ie(za, r._currentValue),
                    r._currentValue = s,
                    o !== null)
                    if (_t(o.value, s)) {
                        if (o.children === i.children && !Ze.current) {
                            t = vn(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child,
                            o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            l = pn(-1, n & -n),
                                                l.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next,
                                                    c.next = l),
                                                    u.pending = l
                                            }
                                        }
                                        o.lanes |= n,
                                            l = o.alternate,
                                            l !== null && (l.lanes |= n),
                                            Tc(o.return, n, t),
                                            a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (o.tag === 10)
                                s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return,
                                    s === null)
                                    throw Error(j(341));
                                s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    Tc(s, n, t),
                                    s = o.sibling
                            } else
                                s = o.child;
                            if (s !== null)
                                s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling,
                                        o !== null) {
                                        o.return = s.return,
                                            s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                $e(e, t, i.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return i = t.type,
                r = t.pendingProps.children,
                Ei(t, n),
                i = xt(i),
                r = r(i),
                t.flags |= 1,
                $e(e, t, r, n),
                t.child;
        case 14:
            return r = t.type,
                i = At(r, t.pendingProps),
                i = At(r.type, i),
                vp(e, t, r, i, n);
        case 15:
            return O0(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : At(r, i),
                ma(e, t),
                t.tag = 1,
                Je(r) ? (e = !0,
                    _a(t)) : e = !1,
                Ei(t, n),
                j0(t, r, i),
                Pc(t, r, i, n),
                Ac(null, t, r, !0, e, n);
        case 19:
            return B0(e, t, n);
        case 22:
            return I0(e, t, n)
    }
    throw Error(j(156, t.tag))
}
    ;
function nv(e, t) {
    return Ay(e, t)
}
function nC(e, t, n, r) {
    this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function pt(e, t, n, r) {
    return new nC(e, t, n, r)
}
function yf(e) {
    return e = e.prototype,
        !(!e || !e.isReactComponent)
}
function rC(e) {
    if (typeof e == "function")
        return yf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
            e === Od)
            return 11;
        if (e === Id)
            return 14
    }
    return 2
}
function tr(e, t) {
    var n = e.alternate;
    return n === null ? (n = pt(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
}
function va(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
        typeof e == "function")
        yf(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
            case oi:
                return Ir(n.children, i, o, t);
            case Ld:
                s = 8,
                    i |= 8;
                break;
            case Yu:
                return e = pt(12, n, t, i | 2),
                    e.elementType = Yu,
                    e.lanes = o,
                    e;
            case qu:
                return e = pt(13, n, t, i),
                    e.elementType = qu,
                    e.lanes = o,
                    e;
            case Zu:
                return e = pt(19, n, t, i),
                    e.elementType = Zu,
                    e.lanes = o,
                    e;
            case fy:
                return El(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case cy:
                            s = 10;
                            break e;
                        case dy:
                            s = 9;
                            break e;
                        case Od:
                            s = 11;
                            break e;
                        case Id:
                            s = 14;
                            break e;
                        case On:
                            s = 16,
                                r = null;
                            break e
                    }
                throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = pt(s, n, t, i),
        t.elementType = e,
        t.type = r,
        t.lanes = o,
        t
}
function Ir(e, t, n, r) {
    return e = pt(7, e, r, t),
        e.lanes = n,
        e
}
function El(e, t, n, r) {
    return e = pt(22, e, r, t),
        e.elementType = fy,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
}
function Su(e, t, n) {
    return e = pt(6, e, null, t),
        e.lanes = n,
        e
}
function bu(e, t, n) {
    return t = pt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
}
function iC(e, t, n, r, i) {
    this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = nu(0),
        this.expirationTimes = nu(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = nu(0),
        this.identifierPrefix = r,
        this.onRecoverableError = i,
        this.mutableSourceEagerHydrationData = null
}
function vf(e, t, n, r, i, o, s, a, l) {
    return e = new iC(e, t, n, a, l),
        t === 1 ? (t = 1,
            o === !0 && (t |= 8)) : t = 0,
        o = pt(3, null, null, t),
        e.current = o,
        o.stateNode = e,
        o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        ef(o),
        e
}
function oC(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ii,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function rv(e) {
    if (!e)
        return ir;
    e = e._reactInternals;
    e: {
        if (Hr(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Je(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Je(n))
            return r0(e, n, t)
    }
    return t
}
function iv(e, t, n, r, i, o, s, a, l) {
    return e = vf(n, r, !0, e, i, o, s, a, l),
        e.context = rv(null),
        n = e.current,
        r = Ke(),
        i = er(n),
        o = pn(r, i),
        o.callback = t ?? null,
        Zn(n, o, i),
        e.current.lanes = i,
        ys(e, i, r),
        et(e, r),
        e
}
function Pl(e, t, n, r) {
    var i = t.current
        , o = Ke()
        , s = er(i);
    return n = rv(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = pn(o, s),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = Zn(i, t, s),
        e !== null && (It(e, i, s, o),
            fa(e, i, s)),
        s
}
function qa(e) {
    if (e = e.current,
        !e.child)
        return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}
function Np(e, t) {
    if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function xf(e, t) {
    Np(e, t),
        (e = e.alternate) && Np(e, t)
}
function sC() {
    return null
}
var ov = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
}
    ;
function wf(e) {
    this._internalRoot = e
}
kl.prototype.render = wf.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Pl(e, t, null, null)
}
    ;
kl.prototype.unmount = wf.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $r(function () {
            Pl(null, e, null, null)
        }),
            t[gn] = null
    }
}
    ;
function kl(e) {
    this._internalRoot = e
}
kl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Iy();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++)
            ;
        Fn.splice(n, 0, e),
            n === 0 && _y(e)
    }
}
    ;
function Sf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Rl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Mp() { }
function aC(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var u = qa(s);
                o.call(u)
            }
        }
        var s = iv(t, r, e, 0, null, !1, !1, "", Mp);
        return e._reactRootContainer = s,
            e[gn] = s.current,
            Qo(e.nodeType === 8 ? e.parentNode : e),
            $r(),
            s
    }
    for (; i = e.lastChild;)
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = qa(l);
            a.call(u)
        }
    }
    var l = vf(e, 0, !1, null, null, !1, !1, "", Mp);
    return e._reactRootContainer = l,
        e[gn] = l.current,
        Qo(e.nodeType === 8 ? e.parentNode : e),
        $r(function () {
            Pl(t, l, n, r)
        }),
        l
}
function Al(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var l = qa(s);
                a.call(l)
            }
        }
        Pl(t, s, e, i)
    } else
        s = aC(n, t, e, i, r);
    return qa(s)
}
Ly = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Co(t.pendingLanes);
                n !== 0 && (Vd(t, n | 1),
                    et(t, ve()),
                    !(Z & 6) && (Wi = ve() + 500,
                        fr()))
            }
            break;
        case 13:
            $r(function () {
                var r = yn(e, 1);
                if (r !== null) {
                    var i = Ke();
                    It(r, e, 1, i)
                }
            }),
                xf(e, 1)
    }
}
    ;
Bd = function (e) {
    if (e.tag === 13) {
        var t = yn(e, 134217728);
        if (t !== null) {
            var n = Ke();
            It(t, e, 134217728, n)
        }
        xf(e, 134217728)
    }
}
    ;
Oy = function (e) {
    if (e.tag === 13) {
        var t = er(e)
            , n = yn(e, t);
        if (n !== null) {
            var r = Ke();
            It(n, e, t, r)
        }
        xf(e, t)
    }
}
    ;
Iy = function () {
    return ne
}
    ;
Fy = function (e, t) {
    var n = ne;
    try {
        return ne = e,
            t()
    } finally {
        ne = n
    }
}
    ;
lc = function (e, t, n) {
    switch (t) {
        case "input":
            if (tc(e, n),
                t = n.name,
                n.type === "radio" && t != null) {
                for (n = e; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = xl(r);
                        if (!i)
                            throw Error(j(90));
                        py(r),
                            tc(r, i)
                    }
                }
            }
            break;
        case "textarea":
            gy(e, n);
            break;
        case "select":
            t = n.value,
                t != null && Si(e, !!n.multiple, t, !1)
    }
}
    ;
Cy = pf;
Ty = $r;
var lC = {
    usingClientEntryPoint: !1,
    Events: [xs, ui, xl, Sy, by, pf]
}
    , yo = {
        findFiberByHostInstance: Cr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
    , uC = {
        bundleType: yo.bundleType,
        version: yo.version,
        rendererPackageName: yo.rendererPackageName,
        rendererConfig: yo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: bn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = ky(e),
                e === null ? null : e.stateNode
        },
        findFiberByHostInstance: yo.findFiberByHostInstance || sC,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qs.isDisabled && qs.supportsFiber)
        try {
            ml = qs.inject(uC),
                qt = qs
        } catch { }
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lC;
lt.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Sf(t))
        throw Error(j(200));
    return oC(e, t, null, n)
}
    ;
lt.createRoot = function (e, t) {
    if (!Sf(e))
        throw Error(j(299));
    var n = !1
        , r = ""
        , i = ov;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        t = vf(e, 1, !1, null, null, n, !1, r, i),
        e[gn] = t.current,
        Qo(e.nodeType === 8 ? e.parentNode : e),
        new wf(t)
}
    ;
lt.findDOMNode = function (e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
            Error(j(268, e)));
    return e = ky(t),
        e = e === null ? null : e.stateNode,
        e
}
    ;
lt.flushSync = function (e) {
    return $r(e)
}
    ;
lt.hydrate = function (e, t, n) {
    if (!Rl(t))
        throw Error(j(200));
    return Al(null, e, t, !0, n)
}
    ;
lt.hydrateRoot = function (e, t, n) {
    if (!Sf(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
        , i = !1
        , o = ""
        , s = ov;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        t = iv(t, null, e, 1, n ?? null, i, !1, o, s),
        e[gn] = t.current,
        Qo(e),
        r)
        for (e = 0; e < r.length; e++)
            n = r[e],
                i = n._getVersion,
                i = i(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new kl(t)
}
    ;
lt.render = function (e, t, n) {
    if (!Rl(t))
        throw Error(j(200));
    return Al(null, e, t, !1, n)
}
    ;
lt.unmountComponentAtNode = function (e) {
    if (!Rl(e))
        throw Error(j(40));
    return e._reactRootContainer ? ($r(function () {
        Al(null, null, e, !1, function () {
            e._reactRootContainer = null,
                e[gn] = null
        })
    }),
        !0) : !1
}
    ;
lt.unstable_batchedUpdates = pf;
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Rl(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return Al(e, t, n, !1, r)
}
    ;
lt.version = "18.3.1-next-f1338f8080-20240426";
function sv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv)
        } catch (e) {
            console.error(e)
        }
}
sv(),
    sy.exports = lt;
var Ss = sy.exports;
const av = Gg(Ss);
var lv, jp = Ss;
lv = jp.createRoot,
    jp.hydrateRoot;
const cC = 1
    , dC = 1e6;
let Cu = 0;
function fC() {
    return Cu = (Cu + 1) % Number.MAX_SAFE_INTEGER,
        Cu.toString()
}
const Tu = new Map
    , Dp = e => {
        if (Tu.has(e))
            return;
        const t = setTimeout(() => {
            Tu.delete(e),
                Oo({
                    type: "REMOVE_TOAST",
                    toastId: e
                })
        }
            , dC);
        Tu.set(e, t)
    }
    , hC = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return {
                    ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, cC)
                };
            case "UPDATE_TOAST":
                return {
                    ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? {
                        ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const { toastId: n } = t;
                    return n ? Dp(n) : e.toasts.forEach(r => {
                        Dp(r.id)
                    }
                    ),
                    {
                        ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                            ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    }
    , xa = [];
let wa = {
    toasts: []
};
function Oo(e) {
    wa = hC(wa, e),
        xa.forEach(t => {
            t(wa)
        }
        )
}
function pC({ ...e }) {
    const t = fC()
        , n = i => Oo({
            type: "UPDATE_TOAST",
            toast: {
                ...i,
                id: t
            }
        })
        , r = () => Oo({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return Oo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: i => {
                i || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function mC() {
    const [e, t] = x.useState(wa);
    return x.useEffect(() => (xa.push(t),
        () => {
            const n = xa.indexOf(t);
            n > -1 && xa.splice(n, 1)
        }
    ), [e]),
    {
        ...e,
        toast: pC,
        dismiss: n => Oo({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function Ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (i) {
        if (e == null || e(i),
            n === !1 || !i.defaultPrevented)
            return t == null ? void 0 : t(i)
    }
}
function Lp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function uv(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const o = Lp(i, t);
            return !n && typeof o == "function" && (n = !0),
                o
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const o = r[i];
                    typeof o == "function" ? o() : Lp(e[i], null)
                }
            }
    }
}
function Vt(...e) {
    return x.useCallback(uv(...e), e)
}
function Nl(e, t = []) {
    let n = [];
    function r(o, s) {
        const a = x.createContext(s)
            , l = n.length;
        n = [...n, s];
        const u = d => {
            var p;
            const { scope: f, children: h, ...v } = d
                , g = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a
                , S = x.useMemo(() => v, Object.values(v));
            return w.jsx(g.Provider, {
                value: S,
                children: h
            })
        }
            ;
        u.displayName = o + "Provider";
        function c(d, f) {
            var g;
            const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a
                , v = x.useContext(h);
            if (v)
                return v;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${o}\``)
        }
        return [u, c]
    }
    const i = () => {
        const o = n.map(s => x.createContext(s));
        return function (a) {
            const l = (a == null ? void 0 : a[e]) || o;
            return x.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
        ;
    return i.scopeName = e,
        [r, gC(i, ...t)]
}
function gC(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(i => ({
            useScope: i(),
            scopeName: i.scopeName
        }));
        return function (o) {
            const s = r.reduce((a, { useScope: l, scopeName: u }) => {
                const d = l(o)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
                , {});
            return x.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
        ;
    return n.scopeName = t.scopeName,
        n
}
function zc(e) {
    const t = yC(e)
        , n = x.forwardRef((r, i) => {
            const { children: o, ...s } = r
                , a = x.Children.toArray(o)
                , l = a.find(xC);
            if (l) {
                const u = l.props.children
                    , c = a.map(d => d === l ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : d);
                return w.jsx(t, {
                    ...s,
                    ref: i,
                    children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null
                })
            }
            return w.jsx(t, {
                ...s,
                ref: i,
                children: o
            })
        }
        );
    return n.displayName = `${e}.Slot`,
        n
}
function yC(e) {
    const t = x.forwardRef((n, r) => {
        const { children: i, ...o } = n;
        if (x.isValidElement(i)) {
            const s = SC(i)
                , a = wC(o, i.props);
            return i.type !== x.Fragment && (a.ref = r ? uv(r, s) : s),
                x.cloneElement(i, a)
        }
        return x.Children.count(i) > 1 ? x.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
        t
}
var cv = Symbol("radix.slottable");
function vC(e) {
    const t = ({ children: n }) => w.jsx(w.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
        t.__radixId = cv,
        t
}
function xC(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === cv
}
function wC(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const i = e[r]
            , o = t[r];
        /^on[A-Z]/.test(r) ? i && o ? n[r] = (...a) => {
            const l = o(...a);
            return i(...a),
                l
        }
            : i && (n[r] = i) : r === "style" ? n[r] = {
                ...i,
                ...o
            } : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function SC(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
        , n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
        n = t && "isReactWarning" in t && t.isReactWarning,
        n ? e.props.ref : e.props.ref || e.ref)
}
function bC(e) {
    const t = e + "CollectionProvider"
        , [n, r] = Nl(t)
        , [i, o] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        })
        , s = g => {
            const { scope: S, children: p } = g
                , m = D.useRef(null)
                , y = D.useRef(new Map).current;
            return w.jsx(i, {
                scope: S,
                itemMap: y,
                collectionRef: m,
                children: p
            })
        }
        ;
    s.displayName = t;
    const a = e + "CollectionSlot"
        , l = zc(a)
        , u = D.forwardRef((g, S) => {
            const { scope: p, children: m } = g
                , y = o(a, p)
                , b = Vt(S, y.collectionRef);
            return w.jsx(l, {
                ref: b,
                children: m
            })
        }
        );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
        , d = "data-radix-collection-item"
        , f = zc(c)
        , h = D.forwardRef((g, S) => {
            const { scope: p, children: m, ...y } = g
                , b = D.useRef(null)
                , C = Vt(S, b)
                , T = o(c, p);
            return D.useEffect(() => (T.itemMap.set(b, {
                ref: b,
                ...y
            }),
                () => void T.itemMap.delete(b))),
                w.jsx(f, {
                    [d]: "",
                    ref: C,
                    children: m
                })
        }
        );
    h.displayName = c;
    function v(g) {
        const S = o(e + "CollectionConsumer", g);
        return D.useCallback(() => {
            const m = S.collectionRef.current;
            if (!m)
                return [];
            const y = Array.from(m.querySelectorAll(`[${d}]`));
            return Array.from(S.itemMap.values()).sort((T, E) => y.indexOf(T.ref.current) - y.indexOf(E.ref.current))
        }
            , [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: h
    }, v, r]
}
var CC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
    , tt = CC.reduce((e, t) => {
        const n = zc(`Primitive.${t}`)
            , r = x.forwardRef((i, o) => {
                const { asChild: s, ...a } = i
                    , l = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
                    w.jsx(l, {
                        ...a,
                        ref: o
                    })
            }
            );
        return r.displayName = `Primitive.${t}`,
        {
            ...e,
            [t]: r
        }
    }
        , {});
function dv(e, t) {
    e && Ss.flushSync(() => e.dispatchEvent(t))
}
function or(e) {
    const t = x.useRef(e);
    return x.useEffect(() => {
        t.current = e
    }
    ),
        x.useMemo(() => (...n) => {
            var r;
            return (r = t.current) == null ? void 0 : r.call(t, ...n)
        }
            , [])
}
function TC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = or(e);
    x.useEffect(() => {
        const r = i => {
            i.key === "Escape" && n(i)
        }
            ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
            () => t.removeEventListener("keydown", r, {
                capture: !0
            })
    }
        , [n, t])
}
var EC = "DismissableLayer", $c = "dismissableLayer.update", PC = "dismissableLayer.pointerDownOutside", kC = "dismissableLayer.focusOutside", Op, fv = x.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), bf = x.forwardRef((e, t) => {
    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: o, onInteractOutside: s, onDismiss: a, ...l } = e
        , u = x.useContext(fv)
        , [c, d] = x.useState(null)
        , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
        , [, h] = x.useState({})
        , v = Vt(t, E => d(E))
        , g = Array.from(u.layers)
        , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
        , p = g.indexOf(S)
        , m = c ? g.indexOf(c) : -1
        , y = u.layersWithOutsidePointerEventsDisabled.size > 0
        , b = m >= p
        , C = AC(E => {
            const P = E.target
                , N = [...u.branches].some(M => M.contains(P));
            !b || N || (i == null || i(E),
                s == null || s(E),
                E.defaultPrevented || a == null || a())
        }
            , f)
        , T = NC(E => {
            const P = E.target;
            [...u.branches].some(M => M.contains(P)) || (o == null || o(E),
                s == null || s(E),
                E.defaultPrevented || a == null || a())
        }
            , f);
    return TC(E => {
        m === u.layers.size - 1 && (r == null || r(E),
            !E.defaultPrevented && a && (E.preventDefault(),
                a()))
    }
        , f),
        x.useEffect(() => {
            if (c)
                return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Op = f.body.style.pointerEvents,
                    f.body.style.pointerEvents = "none"),
                    u.layersWithOutsidePointerEventsDisabled.add(c)),
                    u.layers.add(c),
                    Ip(),
                    () => {
                        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Op)
                    }
        }
            , [c, f, n, u]),
        x.useEffect(() => () => {
            c && (u.layers.delete(c),
                u.layersWithOutsidePointerEventsDisabled.delete(c),
                Ip())
        }
            , [c, u]),
        x.useEffect(() => {
            const E = () => h({});
            return document.addEventListener($c, E),
                () => document.removeEventListener($c, E)
        }
            , []),
        w.jsx(tt.div, {
            ...l,
            ref: v,
            style: {
                pointerEvents: y ? b ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: Ee(e.onFocusCapture, T.onFocusCapture),
            onBlurCapture: Ee(e.onBlurCapture, T.onBlurCapture),
            onPointerDownCapture: Ee(e.onPointerDownCapture, C.onPointerDownCapture)
        })
}
);
bf.displayName = EC;
var RC = "DismissableLayerBranch"
    , hv = x.forwardRef((e, t) => {
        const n = x.useContext(fv)
            , r = x.useRef(null)
            , i = Vt(t, r);
        return x.useEffect(() => {
            const o = r.current;
            if (o)
                return n.branches.add(o),
                    () => {
                        n.branches.delete(o)
                    }
        }
            , [n.branches]),
            w.jsx(tt.div, {
                ...e,
                ref: i
            })
    }
    );
hv.displayName = RC;
function AC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = or(e)
        , r = x.useRef(!1)
        , i = x.useRef(() => { }
        );
    return x.useEffect(() => {
        const o = a => {
            if (a.target && !r.current) {
                let l = function () {
                    pv(PC, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", i.current),
                    i.current = l,
                    t.addEventListener("click", i.current, {
                        once: !0
                    })) : l()
            } else
                t.removeEventListener("click", i.current);
            r.current = !1
        }
            , s = window.setTimeout(() => {
                t.addEventListener("pointerdown", o)
            }
                , 0);
        return () => {
            window.clearTimeout(s),
                t.removeEventListener("pointerdown", o),
                t.removeEventListener("click", i.current)
        }
    }
        , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function NC(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = or(e)
        , r = x.useRef(!1);
    return x.useEffect(() => {
        const i = o => {
            o.target && !r.current && pv(kC, n, {
                originalEvent: o
            }, {
                discrete: !1
            })
        }
            ;
        return t.addEventListener("focusin", i),
            () => t.removeEventListener("focusin", i)
    }
        , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Ip() {
    const e = new CustomEvent($c);
    document.dispatchEvent(e)
}
function pv(e, t, n, { discrete: r }) {
    const i = n.originalEvent.target
        , o = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && i.addEventListener(e, t, {
        once: !0
    }),
        r ? dv(i, o) : i.dispatchEvent(o)
}
var MC = bf
    , jC = hv
    , sr = globalThis != null && globalThis.document ? x.useLayoutEffect : () => { }
    , DC = "Portal"
    , mv = x.forwardRef((e, t) => {
        var a;
        const { container: n, ...r } = e
            , [i, o] = x.useState(!1);
        sr(() => o(!0), []);
        const s = n || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return s ? av.createPortal(w.jsx(tt.div, {
            ...r,
            ref: t
        }), s) : null
    }
    );
mv.displayName = DC;
function LC(e, t) {
    return x.useReducer((n, r) => t[n][r] ?? n, e)
}
var Cf = e => {
    const { present: t, children: n } = e
        , r = OC(t)
        , i = typeof n == "function" ? n({
            present: r.isPresent
        }) : x.Children.only(n)
        , o = Vt(r.ref, IC(i));
    return typeof n == "function" || r.isPresent ? x.cloneElement(i, {
        ref: o
    }) : null
}
    ;
Cf.displayName = "Presence";
function OC(e) {
    const [t, n] = x.useState()
        , r = x.useRef(null)
        , i = x.useRef(e)
        , o = x.useRef("none")
        , s = e ? "mounted" : "unmounted"
        , [a, l] = LC(s, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        });
    return x.useEffect(() => {
        const u = Zs(r.current);
        o.current = a === "mounted" ? u : "none"
    }
        , [a]),
        sr(() => {
            const u = r.current
                , c = i.current;
            if (c !== e) {
                const f = o.current
                    , h = Zs(u);
                e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
                    i.current = e
            }
        }
            , [e, l]),
        sr(() => {
            if (t) {
                let u;
                const c = t.ownerDocument.defaultView ?? window
                    , d = h => {
                        const g = Zs(r.current).includes(h.animationName);
                        if (h.target === t && g && (l("ANIMATION_END"),
                            !i.current)) {
                            const S = t.style.animationFillMode;
                            t.style.animationFillMode = "forwards",
                                u = c.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                                }
                                )
                        }
                    }
                    , f = h => {
                        h.target === t && (o.current = Zs(r.current))
                    }
                    ;
                return t.addEventListener("animationstart", f),
                    t.addEventListener("animationcancel", d),
                    t.addEventListener("animationend", d),
                    () => {
                        c.clearTimeout(u),
                            t.removeEventListener("animationstart", f),
                            t.removeEventListener("animationcancel", d),
                            t.removeEventListener("animationend", d)
                    }
            } else
                l("ANIMATION_END")
        }
            , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: x.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
                n(u)
        }
            , [])
    }
}
function Zs(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function IC(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
        , n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
        n = t && "isReactWarning" in t && t.isReactWarning,
        n ? e.props.ref : e.props.ref || e.ref)
}
var FC = iy[" useInsertionEffect ".trim().toString()] || sr;
function _C({ prop: e, defaultProp: t, onChange: n = () => { }
    , caller: r }) {
    const [i, o, s] = VC({
        defaultProp: t,
        onChange: n
    })
        , a = e !== void 0
        , l = a ? e : i;
    {
        const c = x.useRef(e !== void 0);
        x.useEffect(() => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
                c.current = a
        }
            , [a, r])
    }
    const u = x.useCallback(c => {
        var d;
        if (a) {
            const f = BC(c) ? c(e) : c;
            f !== e && ((d = s.current) == null || d.call(s, f))
        } else
            o(c)
    }
        , [a, e, o, s]);
    return [l, u]
}
function VC({ defaultProp: e, onChange: t }) {
    const [n, r] = x.useState(e)
        , i = x.useRef(n)
        , o = x.useRef(t);
    return FC(() => {
        o.current = t
    }
        , [t]),
        x.useEffect(() => {
            var s;
            i.current !== n && ((s = o.current) == null || s.call(o, n),
                i.current = n)
        }
            , [n, i]),
        [n, r, o]
}
function BC(e) {
    return typeof e == "function"
}
var zC = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
    , $C = "VisuallyHidden"
    , Ml = x.forwardRef((e, t) => w.jsx(tt.span, {
        ...e,
        ref: t,
        style: {
            ...zC,
            ...e.style
        }
    }));
Ml.displayName = $C;
var UC = Ml
    , Tf = "ToastProvider"
    , [Ef, WC, HC] = bC("Toast")
    , [gv, Xj] = Nl("Toast", [HC])
    , [KC, jl] = gv(Tf)
    , yv = e => {
        const { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: i = "right", swipeThreshold: o = 50, children: s } = e
            , [a, l] = x.useState(null)
            , [u, c] = x.useState(0)
            , d = x.useRef(!1)
            , f = x.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Tf}\`. Expected non-empty \`string\`.`),
            w.jsx(Ef.Provider, {
                scope: t,
                children: w.jsx(KC, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: i,
                    swipeThreshold: o,
                    toastCount: u,
                    viewport: a,
                    onViewportChange: l,
                    onToastAdd: x.useCallback(() => c(h => h + 1), []),
                    onToastRemove: x.useCallback(() => c(h => h - 1), []),
                    isFocusedToastEscapeKeyDownRef: d,
                    isClosePausedRef: f,
                    children: s
                })
            })
    }
    ;
yv.displayName = Tf;
var vv = "ToastViewport"
    , GC = ["F8"]
    , Uc = "toast.viewportPause"
    , Wc = "toast.viewportResume"
    , xv = x.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = GC, label: i = "Notifications ({hotkey})", ...o } = e
            , s = jl(vv, n)
            , a = WC(n)
            , l = x.useRef(null)
            , u = x.useRef(null)
            , c = x.useRef(null)
            , d = x.useRef(null)
            , f = Vt(t, d, s.onViewportChange)
            , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
            , v = s.toastCount > 0;
        x.useEffect(() => {
            const S = p => {
                var y;
                r.length !== 0 && r.every(b => p[b] || p.code === b) && ((y = d.current) == null || y.focus())
            }
                ;
            return document.addEventListener("keydown", S),
                () => document.removeEventListener("keydown", S)
        }
            , [r]),
            x.useEffect(() => {
                const S = l.current
                    , p = d.current;
                if (v && S && p) {
                    const m = () => {
                        if (!s.isClosePausedRef.current) {
                            const T = new CustomEvent(Uc);
                            p.dispatchEvent(T),
                                s.isClosePausedRef.current = !0
                        }
                    }
                        , y = () => {
                            if (s.isClosePausedRef.current) {
                                const T = new CustomEvent(Wc);
                                p.dispatchEvent(T),
                                    s.isClosePausedRef.current = !1
                            }
                        }
                        , b = T => {
                            !S.contains(T.relatedTarget) && y()
                        }
                        , C = () => {
                            S.contains(document.activeElement) || y()
                        }
                        ;
                    return S.addEventListener("focusin", m),
                        S.addEventListener("focusout", b),
                        S.addEventListener("pointermove", m),
                        S.addEventListener("pointerleave", C),
                        window.addEventListener("blur", m),
                        window.addEventListener("focus", y),
                        () => {
                            S.removeEventListener("focusin", m),
                                S.removeEventListener("focusout", b),
                                S.removeEventListener("pointermove", m),
                                S.removeEventListener("pointerleave", C),
                                window.removeEventListener("blur", m),
                                window.removeEventListener("focus", y)
                        }
                }
            }
                , [v, s.isClosePausedRef]);
        const g = x.useCallback(({ tabbingDirection: S }) => {
            const m = a().map(y => {
                const b = y.ref.current
                    , C = [b, ...sT(b)];
                return S === "forwards" ? C : C.reverse()
            }
            );
            return (S === "forwards" ? m.reverse() : m).flat()
        }
            , [a]);
        return x.useEffect(() => {
            const S = d.current;
            if (S) {
                const p = m => {
                    var C, T, E;
                    const y = m.altKey || m.ctrlKey || m.metaKey;
                    if (m.key === "Tab" && !y) {
                        const P = document.activeElement
                            , N = m.shiftKey;
                        if (m.target === S && N) {
                            (C = u.current) == null || C.focus();
                            return
                        }
                        const L = g({
                            tabbingDirection: N ? "backwards" : "forwards"
                        })
                            , $ = L.findIndex(O => O === P);
                        Eu(L.slice($ + 1)) ? m.preventDefault() : N ? (T = u.current) == null || T.focus() : (E = c.current) == null || E.focus()
                    }
                }
                    ;
                return S.addEventListener("keydown", p),
                    () => S.removeEventListener("keydown", p)
            }
        }
            , [a, g]),
            w.jsxs(jC, {
                ref: l,
                role: "region",
                "aria-label": i.replace("{hotkey}", h),
                tabIndex: -1,
                style: {
                    pointerEvents: v ? void 0 : "none"
                },
                children: [v && w.jsx(Hc, {
                    ref: u,
                    onFocusFromOutsideViewport: () => {
                        const S = g({
                            tabbingDirection: "forwards"
                        });
                        Eu(S)
                    }
                }), w.jsx(Ef.Slot, {
                    scope: n,
                    children: w.jsx(tt.ol, {
                        tabIndex: -1,
                        ...o,
                        ref: f
                    })
                }), v && w.jsx(Hc, {
                    ref: c,
                    onFocusFromOutsideViewport: () => {
                        const S = g({
                            tabbingDirection: "backwards"
                        });
                        Eu(S)
                    }
                })]
            })
    }
    );
xv.displayName = vv;
var wv = "ToastFocusProxy"
    , Hc = x.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e
            , o = jl(wv, n);
        return w.jsx(Ml, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...i,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const a = s.relatedTarget;
                !((u = o.viewport) != null && u.contains(a)) && r()
            }
        })
    }
    );
Hc.displayName = wv;
var bs = "Toast"
    , QC = "toast.swipeStart"
    , XC = "toast.swipeMove"
    , YC = "toast.swipeCancel"
    , qC = "toast.swipeEnd"
    , Sv = x.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...s } = e
            , [a, l] = _C({
                prop: r,
                defaultProp: i ?? !0,
                onChange: o,
                caller: bs
            });
        return w.jsx(Cf, {
            present: n || a,
            children: w.jsx(eT, {
                open: a,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: or(e.onPause),
                onResume: or(e.onResume),
                onSwipeStart: Ee(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }
                ),
                onSwipeMove: Ee(e.onSwipeMove, u => {
                    const { x: c, y: d } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
                }
                ),
                onSwipeCancel: Ee(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }
                ),
                onSwipeEnd: Ee(e.onSwipeEnd, u => {
                    const { x: c, y: d } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                        l(!1)
                }
                )
            })
        })
    }
    );
Sv.displayName = bs;
var [ZC, JC] = gv(bs, {
    onClose() { }
})
    , eT = x.forwardRef((e, t) => {
        const { __scopeToast: n, type: r = "foreground", duration: i, open: o, onClose: s, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...v } = e
            , g = jl(bs, n)
            , [S, p] = x.useState(null)
            , m = Vt(t, O => p(O))
            , y = x.useRef(null)
            , b = x.useRef(null)
            , C = i || g.duration
            , T = x.useRef(0)
            , E = x.useRef(C)
            , P = x.useRef(0)
            , { onToastAdd: N, onToastRemove: M } = g
            , F = or(() => {
                var Q;
                (S == null ? void 0 : S.contains(document.activeElement)) && ((Q = g.viewport) == null || Q.focus()),
                    s()
            }
            )
            , L = x.useCallback(O => {
                !O || O === 1 / 0 || (window.clearTimeout(P.current),
                    T.current = new Date().getTime(),
                    P.current = window.setTimeout(F, O))
            }
                , [F]);
        x.useEffect(() => {
            const O = g.viewport;
            if (O) {
                const Q = () => {
                    L(E.current),
                        u == null || u()
                }
                    , U = () => {
                        const B = new Date().getTime() - T.current;
                        E.current = E.current - B,
                            window.clearTimeout(P.current),
                            l == null || l()
                    }
                    ;
                return O.addEventListener(Uc, U),
                    O.addEventListener(Wc, Q),
                    () => {
                        O.removeEventListener(Uc, U),
                            O.removeEventListener(Wc, Q)
                    }
            }
        }
            , [g.viewport, C, l, u, L]),
            x.useEffect(() => {
                o && !g.isClosePausedRef.current && L(C)
            }
                , [o, C, g.isClosePausedRef, L]),
            x.useEffect(() => (N(),
                () => M()), [N, M]);
        const $ = x.useMemo(() => S ? Rv(S) : null, [S]);
        return g.viewport ? w.jsxs(w.Fragment, {
            children: [$ && w.jsx(tT, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: $
            }), w.jsx(ZC, {
                scope: n,
                onClose: F,
                children: Ss.createPortal(w.jsx(Ef.ItemSlot, {
                    scope: n,
                    children: w.jsx(MC, {
                        asChild: !0,
                        onEscapeKeyDown: Ee(a, () => {
                            g.isFocusedToastEscapeKeyDownRef.current || F(),
                                g.isFocusedToastEscapeKeyDownRef.current = !1
                        }
                        ),
                        children: w.jsx(tt.li, {
                            role: "status",
                            "aria-live": "off",
                            "aria-atomic": !0,
                            tabIndex: 0,
                            "data-state": o ? "open" : "closed",
                            "data-swipe-direction": g.swipeDirection,
                            ...v,
                            ref: m,
                            style: {
                                userSelect: "none",
                                touchAction: "none",
                                ...e.style
                            },
                            onKeyDown: Ee(e.onKeyDown, O => {
                                O.key === "Escape" && (a == null || a(O.nativeEvent),
                                    O.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                                        F()))
                            }
                            ),
                            onPointerDown: Ee(e.onPointerDown, O => {
                                O.button === 0 && (y.current = {
                                    x: O.clientX,
                                    y: O.clientY
                                })
                            }
                            ),
                            onPointerMove: Ee(e.onPointerMove, O => {
                                if (!y.current)
                                    return;
                                const Q = O.clientX - y.current.x
                                    , U = O.clientY - y.current.y
                                    , B = !!b.current
                                    , k = ["left", "right"].includes(g.swipeDirection)
                                    , A = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                                    , I = k ? A(0, Q) : 0
                                    , W = k ? 0 : A(0, U)
                                    , z = O.pointerType === "touch" ? 10 : 2
                                    , X = {
                                        x: I,
                                        y: W
                                    }
                                    , q = {
                                        originalEvent: O,
                                        delta: X
                                    };
                                B ? (b.current = X,
                                    Js(XC, d, q, {
                                        discrete: !1
                                    })) : Fp(X, g.swipeDirection, z) ? (b.current = X,
                                        Js(QC, c, q, {
                                            discrete: !1
                                        }),
                                        O.target.setPointerCapture(O.pointerId)) : (Math.abs(Q) > z || Math.abs(U) > z) && (y.current = null)
                            }
                            ),
                            onPointerUp: Ee(e.onPointerUp, O => {
                                const Q = b.current
                                    , U = O.target;
                                if (U.hasPointerCapture(O.pointerId) && U.releasePointerCapture(O.pointerId),
                                    b.current = null,
                                    y.current = null,
                                    Q) {
                                    const B = O.currentTarget
                                        , k = {
                                            originalEvent: O,
                                            delta: Q
                                        };
                                    Fp(Q, g.swipeDirection, g.swipeThreshold) ? Js(qC, h, k, {
                                        discrete: !0
                                    }) : Js(YC, f, k, {
                                        discrete: !0
                                    }),
                                        B.addEventListener("click", A => A.preventDefault(), {
                                            once: !0
                                        })
                                }
                            }
                            )
                        })
                    })
                }), g.viewport)
            })]
        }) : null
    }
    )
    , tT = e => {
        const { __scopeToast: t, children: n, ...r } = e
            , i = jl(bs, t)
            , [o, s] = x.useState(!1)
            , [a, l] = x.useState(!1);
        return iT(() => s(!0)),
            x.useEffect(() => {
                const u = window.setTimeout(() => l(!0), 1e3);
                return () => window.clearTimeout(u)
            }
                , []),
            a ? null : w.jsx(mv, {
                asChild: !0,
                children: w.jsx(Ml, {
                    ...r,
                    children: o && w.jsxs(w.Fragment, {
                        children: [i.label, " ", n]
                    })
                })
            })
    }
    , nT = "ToastTitle"
    , bv = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return w.jsx(tt.div, {
            ...r,
            ref: t
        })
    }
    );
bv.displayName = nT;
var rT = "ToastDescription"
    , Cv = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return w.jsx(tt.div, {
            ...r,
            ref: t
        })
    }
    );
Cv.displayName = rT;
var Tv = "ToastAction"
    , Ev = x.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim() ? w.jsx(kv, {
            altText: n,
            asChild: !0,
            children: w.jsx(Pf, {
                ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Tv}\`. Expected non-empty \`string\`.`),
            null)
    }
    );
Ev.displayName = Tv;
var Pv = "ToastClose"
    , Pf = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e
            , i = JC(Pv, n);
        return w.jsx(kv, {
            asChild: !0,
            children: w.jsx(tt.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: Ee(e.onClick, i.onClose)
            })
        })
    }
    );
Pf.displayName = Pv;
var kv = x.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...i } = e;
    return w.jsx(tt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t
    })
}
);
function Rv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
            oT(r)) {
            const i = r.ariaHidden || r.hidden || r.style.display === "none"
                , o = r.dataset.radixToastAnnounceExclude === "";
            if (!i)
                if (o) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Rv(r))
        }
    }
    ),
        t
}
function Js(e, t, n, { discrete: r }) {
    const i = n.originalEvent.currentTarget
        , o = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && i.addEventListener(e, t, {
        once: !0
    }),
        r ? dv(i, o) : i.dispatchEvent(o)
}
var Fp = (e, t, n = 0) => {
    const r = Math.abs(e.x)
        , i = Math.abs(e.y)
        , o = r > i;
    return t === "left" || t === "right" ? o && r > n : !o && i > n
}
    ;
function iT(e = () => { }
) {
    const t = or(e);
    sr(() => {
        let n = 0
            , r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)),
            () => {
                window.cancelAnimationFrame(n),
                    window.cancelAnimationFrame(r)
            }
    }
        , [t])
}
function oT(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function sT(e) {
    const t = []
        , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const i = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();)
        t.push(n.currentNode);
    return t
}
function Eu(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
        document.activeElement !== t))
}
var aT = yv
    , Av = xv
    , Nv = Sv
    , Mv = bv
    , jv = Cv
    , Dv = Ev
    , Lv = Pf;
function Ov(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = Ov(e[t])) && (r && (r += " "),
                    r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                    r += n);
    return r
}
function Iv() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = Ov(e)) && (r && (r += " "),
            r += t);
    return r
}
const _p = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
    , Vp = Iv
    , lT = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return Vp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: i, defaultVariants: o } = t
            , s = Object.keys(i).map(u => {
                const c = n == null ? void 0 : n[u]
                    , d = o == null ? void 0 : o[u];
                if (c === null)
                    return null;
                const f = _p(c) || _p(d);
                return i[u][f]
            }
            )
            , a = n && Object.entries(n).reduce((u, c) => {
                let [d, f] = c;
                return f === void 0 || (u[d] = f),
                    u
            }
                , {})
            , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
                let { class: d, className: f, ...h } = c;
                return Object.entries(h).every(v => {
                    let [g, S] = v;
                    return Array.isArray(S) ? S.includes({
                        ...o,
                        ...a
                    }[g]) : {
                        ...o,
                        ...a
                    }[g] === S
                }
                ) ? [...u, d, f] : u
            }
                , []);
        return Vp(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    }
    ;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uT = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
    , Fv = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cT = {
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
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dT = x.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: o, iconNode: s, ...a }, l) => x.createElement("svg", {
    ref: l,
    ...cT,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Fv("lucide", i),
    ...a
}, [...s.map(([u, c]) => x.createElement(u, c)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fT = (e, t) => {
    const n = x.forwardRef(({ className: r, ...i }, o) => x.createElement(dT, {
        ref: o,
        iconNode: t,
        className: Fv(`lucide-${uT(e)}`, r),
        ...i
    }));
    return n.displayName = `${e}`,
        n
}
    ;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hT = fT("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
    , kf = "-"
    , pT = e => {
        const t = gT(e)
            , { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: s => {
                const a = s.split(kf);
                return a[0] === "" && a.length !== 1 && a.shift(),
                    _v(a, t) || mT(s)
            }
            ,
            getConflictingClassGroupIds: (s, a) => {
                const l = n[s] || [];
                return a && r[s] ? [...l, ...r[s]] : l
            }
        }
    }
    , _v = (e, t) => {
        var s;
        if (e.length === 0)
            return t.classGroupId;
        const n = e[0]
            , r = t.nextPart.get(n)
            , i = r ? _v(e.slice(1), r) : void 0;
        if (i)
            return i;
        if (t.validators.length === 0)
            return;
        const o = e.join(kf);
        return (s = t.validators.find(({ validator: a }) => a(o))) == null ? void 0 : s.classGroupId
    }
    , Bp = /^\[(.+)\]$/
    , mT = e => {
        if (Bp.test(e)) {
            const t = Bp.exec(e)[1]
                , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n)
                return "arbitrary.." + n
        }
    }
    , gT = e => {
        const { theme: t, prefix: n } = e
            , r = {
                nextPart: new Map,
                validators: []
            };
        return vT(Object.entries(e.classGroups), n).forEach(([o, s]) => {
            Kc(s, r, o, t)
        }
        ),
            r
    }
    , Kc = (e, t, n, r) => {
        e.forEach(i => {
            if (typeof i == "string") {
                const o = i === "" ? t : zp(t, i);
                o.classGroupId = n;
                return
            }
            if (typeof i == "function") {
                if (yT(i)) {
                    Kc(i(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: i,
                    classGroupId: n
                });
                return
            }
            Object.entries(i).forEach(([o, s]) => {
                Kc(s, zp(t, o), n, r)
            }
            )
        }
        )
    }
    , zp = (e, t) => {
        let n = e;
        return t.split(kf).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }),
                n = n.nextPart.get(r)
        }
        ),
            n
    }
    , yT = e => e.isThemeGetter
    , vT = (e, t) => t ? e.map(([n, r]) => {
        const i = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([s, a]) => [t + s, a])) : o);
        return [n, i]
    }
    ) : e
    , xT = e => {
        if (e < 1)
            return {
                get: () => { }
                ,
                set: () => { }
            };
        let t = 0
            , n = new Map
            , r = new Map;
        const i = (o, s) => {
            n.set(o, s),
                t++,
                t > e && (t = 0,
                    r = n,
                    n = new Map)
        }
            ;
        return {
            get(o) {
                let s = n.get(o);
                if (s !== void 0)
                    return s;
                if ((s = r.get(o)) !== void 0)
                    return i(o, s),
                        s
            },
            set(o, s) {
                n.has(o) ? n.set(o, s) : i(o, s)
            }
        }
    }
    , Vv = "!"
    , wT = e => {
        const { separator: t, experimentalParseClassName: n } = e
            , r = t.length === 1
            , i = t[0]
            , o = t.length
            , s = a => {
                const l = [];
                let u = 0, c = 0, d;
                for (let S = 0; S < a.length; S++) {
                    let p = a[S];
                    if (u === 0) {
                        if (p === i && (r || a.slice(S, S + o) === t)) {
                            l.push(a.slice(c, S)),
                                c = S + o;
                            continue
                        }
                        if (p === "/") {
                            d = S;
                            continue
                        }
                    }
                    p === "[" ? u++ : p === "]" && u--
                }
                const f = l.length === 0 ? a : a.substring(c)
                    , h = f.startsWith(Vv)
                    , v = h ? f.substring(1) : f
                    , g = d && d > c ? d - c : void 0;
                return {
                    modifiers: l,
                    hasImportantModifier: h,
                    baseClassName: v,
                    maybePostfixModifierPosition: g
                }
            }
            ;
        return n ? a => n({
            className: a,
            parseClassName: s
        }) : s
    }
    , ST = e => {
        if (e.length <= 1)
            return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r),
                n = []) : n.push(r)
        }
        ),
            t.push(...n.sort()),
            t
    }
    , bT = e => ({
        cache: xT(e.cacheSize),
        parseClassName: wT(e),
        ...pT(e)
    })
    , CT = /\s+/
    , TT = (e, t) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i } = t
            , o = []
            , s = e.trim().split(CT);
        let a = "";
        for (let l = s.length - 1; l >= 0; l -= 1) {
            const u = s[l]
                , { modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h } = n(u);
            let v = !!h
                , g = r(v ? f.substring(0, h) : f);
            if (!g) {
                if (!v) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (g = r(f),
                    !g) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                v = !1
            }
            const S = ST(c).join(":")
                , p = d ? S + Vv : S
                , m = p + g;
            if (o.includes(m))
                continue;
            o.push(m);
            const y = i(g, v);
            for (let b = 0; b < y.length; ++b) {
                const C = y[b];
                o.push(p + C)
            }
            a = u + (a.length > 0 ? " " + a : a)
        }
        return a
    }
    ;
function ET() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length;)
        (t = arguments[e++]) && (n = Bv(t)) && (r && (r += " "),
            r += n);
    return r
}
const Bv = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Bv(e[r])) && (n && (n += " "),
            n += t);
    return n
}
    ;
function PT(e, ...t) {
    let n, r, i, o = s;
    function s(l) {
        const u = t.reduce((c, d) => d(c), e());
        return n = bT(u),
            r = n.cache.get,
            i = n.cache.set,
            o = a,
            a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = TT(l, n);
        return i(l, c),
            c
    }
    return function () {
        return o(ET.apply(null, arguments))
    }
}
const se = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
        t
}
    , zv = /^\[(?:([a-z-]+):)?(.+)\]$/i
    , kT = /^\d+\/\d+$/
    , RT = new Set(["px", "full", "screen"])
    , AT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
    , NT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
    , MT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
    , jT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
    , DT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
    , sn = e => ki(e) || RT.has(e) || kT.test(e)
    , Nn = e => Ji(e, "length", zT)
    , ki = e => !!e && !Number.isNaN(Number(e))
    , Pu = e => Ji(e, "number", ki)
    , vo = e => !!e && Number.isInteger(Number(e))
    , LT = e => e.endsWith("%") && ki(e.slice(0, -1))
    , G = e => zv.test(e)
    , Mn = e => AT.test(e)
    , OT = new Set(["length", "size", "percentage"])
    , IT = e => Ji(e, OT, $v)
    , FT = e => Ji(e, "position", $v)
    , _T = new Set(["image", "url"])
    , VT = e => Ji(e, _T, UT)
    , BT = e => Ji(e, "", $T)
    , xo = () => !0
    , Ji = (e, t, n) => {
        const r = zv.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    }
    , zT = e => NT.test(e) && !MT.test(e)
    , $v = () => !1
    , $T = e => jT.test(e)
    , UT = e => DT.test(e)
    , WT = () => {
        const e = se("colors")
            , t = se("spacing")
            , n = se("blur")
            , r = se("brightness")
            , i = se("borderColor")
            , o = se("borderRadius")
            , s = se("borderSpacing")
            , a = se("borderWidth")
            , l = se("contrast")
            , u = se("grayscale")
            , c = se("hueRotate")
            , d = se("invert")
            , f = se("gap")
            , h = se("gradientColorStops")
            , v = se("gradientColorStopPositions")
            , g = se("inset")
            , S = se("margin")
            , p = se("opacity")
            , m = se("padding")
            , y = se("saturate")
            , b = se("scale")
            , C = se("sepia")
            , T = se("skew")
            , E = se("space")
            , P = se("translate")
            , N = () => ["auto", "contain", "none"]
            , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
            , F = () => ["auto", G, t]
            , L = () => [G, t]
            , $ = () => ["", sn, Nn]
            , O = () => ["auto", ki, G]
            , Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
            , U = () => ["solid", "dashed", "dotted", "double", "none"]
            , B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
            , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
            , A = () => ["", "0", G]
            , I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            , W = () => [ki, G];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [xo],
                spacing: [sn, Nn],
                blur: ["none", "", Mn, G],
                brightness: W(),
                borderColor: [e],
                borderRadius: ["none", "", "full", Mn, G],
                borderSpacing: L(),
                borderWidth: $(),
                contrast: W(),
                grayscale: A(),
                hueRotate: W(),
                invert: A(),
                gap: L(),
                gradientColorStops: [e],
                gradientColorStopPositions: [LT, Nn],
                inset: F(),
                margin: F(),
                opacity: W(),
                padding: L(),
                saturate: W(),
                scale: W(),
                sepia: A(),
                skew: W(),
                space: L(),
                translate: L()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", G]
                }],
                container: ["container"],
                columns: [{
                    columns: [Mn]
                }],
                "break-after": [{
                    "break-after": I()
                }],
                "break-before": [{
                    "break-before": I()
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
                    object: [...Q(), G]
                }],
                overflow: [{
                    overflow: M()
                }],
                "overflow-x": [{
                    "overflow-x": M()
                }],
                "overflow-y": [{
                    "overflow-y": M()
                }],
                overscroll: [{
                    overscroll: N()
                }],
                "overscroll-x": [{
                    "overscroll-x": N()
                }],
                "overscroll-y": [{
                    "overscroll-y": N()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [g]
                }],
                "inset-x": [{
                    "inset-x": [g]
                }],
                "inset-y": [{
                    "inset-y": [g]
                }],
                start: [{
                    start: [g]
                }],
                end: [{
                    end: [g]
                }],
                top: [{
                    top: [g]
                }],
                right: [{
                    right: [g]
                }],
                bottom: [{
                    bottom: [g]
                }],
                left: [{
                    left: [g]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", vo, G]
                }],
                basis: [{
                    basis: F()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", G]
                }],
                grow: [{
                    grow: A()
                }],
                shrink: [{
                    shrink: A()
                }],
                order: [{
                    order: ["first", "last", "none", vo, G]
                }],
                "grid-cols": [{
                    "grid-cols": [xo]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", vo, G]
                    }, G]
                }],
                "col-start": [{
                    "col-start": O()
                }],
                "col-end": [{
                    "col-end": O()
                }],
                "grid-rows": [{
                    "grid-rows": [xo]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [vo, G]
                    }, G]
                }],
                "row-start": [{
                    "row-start": O()
                }],
                "row-end": [{
                    "row-end": O()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", G]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", G]
                }],
                gap: [{
                    gap: [f]
                }],
                "gap-x": [{
                    "gap-x": [f]
                }],
                "gap-y": [{
                    "gap-y": [f]
                }],
                "justify-content": [{
                    justify: ["normal", ...k()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...k(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...k(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [m]
                }],
                px: [{
                    px: [m]
                }],
                py: [{
                    py: [m]
                }],
                ps: [{
                    ps: [m]
                }],
                pe: [{
                    pe: [m]
                }],
                pt: [{
                    pt: [m]
                }],
                pr: [{
                    pr: [m]
                }],
                pb: [{
                    pb: [m]
                }],
                pl: [{
                    pl: [m]
                }],
                m: [{
                    m: [S]
                }],
                mx: [{
                    mx: [S]
                }],
                my: [{
                    my: [S]
                }],
                ms: [{
                    ms: [S]
                }],
                me: [{
                    me: [S]
                }],
                mt: [{
                    mt: [S]
                }],
                mr: [{
                    mr: [S]
                }],
                mb: [{
                    mb: [S]
                }],
                ml: [{
                    ml: [S]
                }],
                "space-x": [{
                    "space-x": [E]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [E]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
                }],
                "min-w": [{
                    "min-w": [G, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [Mn]
                    }, Mn]
                }],
                h: [{
                    h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [G, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", Mn, Nn]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pu]
                }],
                "font-family": [{
                    font: [xo]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", ki, Pu]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", sn, G]
                }],
                "list-image": [{
                    "list-image": ["none", G]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", G]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [p]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [p]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...U(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", sn, Nn]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", sn, G]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: L()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", G]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [p]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...Q(), FT]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", IT]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, VT]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [v]
                }],
                "gradient-via-pos": [{
                    via: [v]
                }],
                "gradient-to-pos": [{
                    to: [v]
                }],
                "gradient-from": [{
                    from: [h]
                }],
                "gradient-via": [{
                    via: [h]
                }],
                "gradient-to": [{
                    to: [h]
                }],
                rounded: [{
                    rounded: [o]
                }],
                "rounded-s": [{
                    "rounded-s": [o]
                }],
                "rounded-e": [{
                    "rounded-e": [o]
                }],
                "rounded-t": [{
                    "rounded-t": [o]
                }],
                "rounded-r": [{
                    "rounded-r": [o]
                }],
                "rounded-b": [{
                    "rounded-b": [o]
                }],
                "rounded-l": [{
                    "rounded-l": [o]
                }],
                "rounded-ss": [{
                    "rounded-ss": [o]
                }],
                "rounded-se": [{
                    "rounded-se": [o]
                }],
                "rounded-ee": [{
                    "rounded-ee": [o]
                }],
                "rounded-es": [{
                    "rounded-es": [o]
                }],
                "rounded-tl": [{
                    "rounded-tl": [o]
                }],
                "rounded-tr": [{
                    "rounded-tr": [o]
                }],
                "rounded-br": [{
                    "rounded-br": [o]
                }],
                "rounded-bl": [{
                    "rounded-bl": [o]
                }],
                "border-w": [{
                    border: [a]
                }],
                "border-w-x": [{
                    "border-x": [a]
                }],
                "border-w-y": [{
                    "border-y": [a]
                }],
                "border-w-s": [{
                    "border-s": [a]
                }],
                "border-w-e": [{
                    "border-e": [a]
                }],
                "border-w-t": [{
                    "border-t": [a]
                }],
                "border-w-r": [{
                    "border-r": [a]
                }],
                "border-w-b": [{
                    "border-b": [a]
                }],
                "border-w-l": [{
                    "border-l": [a]
                }],
                "border-opacity": [{
                    "border-opacity": [p]
                }],
                "border-style": [{
                    border: [...U(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [a]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [a]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [p]
                }],
                "divide-style": [{
                    divide: U()
                }],
                "border-color": [{
                    border: [i]
                }],
                "border-color-x": [{
                    "border-x": [i]
                }],
                "border-color-y": [{
                    "border-y": [i]
                }],
                "border-color-s": [{
                    "border-s": [i]
                }],
                "border-color-e": [{
                    "border-e": [i]
                }],
                "border-color-t": [{
                    "border-t": [i]
                }],
                "border-color-r": [{
                    "border-r": [i]
                }],
                "border-color-b": [{
                    "border-b": [i]
                }],
                "border-color-l": [{
                    "border-l": [i]
                }],
                "divide-color": [{
                    divide: [i]
                }],
                "outline-style": [{
                    outline: ["", ...U()]
                }],
                "outline-offset": [{
                    "outline-offset": [sn, G]
                }],
                "outline-w": [{
                    outline: [sn, Nn]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: $()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [p]
                }],
                "ring-offset-w": [{
                    "ring-offset": [sn, Nn]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", Mn, BT]
                }],
                "shadow-color": [{
                    shadow: [xo]
                }],
                opacity: [{
                    opacity: [p]
                }],
                "mix-blend": [{
                    "mix-blend": [...B(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": B()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [l]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", Mn, G]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [c]
                }],
                invert: [{
                    invert: [d]
                }],
                saturate: [{
                    saturate: [y]
                }],
                sepia: [{
                    sepia: [C]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [l]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [c]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [d]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [p]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [y]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [C]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
                }],
                duration: [{
                    duration: W()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", G]
                }],
                delay: [{
                    delay: W()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", G]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [b]
                }],
                "scale-x": [{
                    "scale-x": [b]
                }],
                "scale-y": [{
                    "scale-y": [b]
                }],
                rotate: [{
                    rotate: [vo, G]
                }],
                "translate-x": [{
                    "translate-x": [P]
                }],
                "translate-y": [{
                    "translate-y": [P]
                }],
                "skew-x": [{
                    "skew-x": [T]
                }],
                "skew-y": [{
                    "skew-y": [T]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": L()
                }],
                "scroll-mx": [{
                    "scroll-mx": L()
                }],
                "scroll-my": [{
                    "scroll-my": L()
                }],
                "scroll-ms": [{
                    "scroll-ms": L()
                }],
                "scroll-me": [{
                    "scroll-me": L()
                }],
                "scroll-mt": [{
                    "scroll-mt": L()
                }],
                "scroll-mr": [{
                    "scroll-mr": L()
                }],
                "scroll-mb": [{
                    "scroll-mb": L()
                }],
                "scroll-ml": [{
                    "scroll-ml": L()
                }],
                "scroll-p": [{
                    "scroll-p": L()
                }],
                "scroll-px": [{
                    "scroll-px": L()
                }],
                "scroll-py": [{
                    "scroll-py": L()
                }],
                "scroll-ps": [{
                    "scroll-ps": L()
                }],
                "scroll-pe": [{
                    "scroll-pe": L()
                }],
                "scroll-pt": [{
                    "scroll-pt": L()
                }],
                "scroll-pr": [{
                    "scroll-pr": L()
                }],
                "scroll-pb": [{
                    "scroll-pb": L()
                }],
                "scroll-pl": [{
                    "scroll-pl": L()
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
                    "will-change": ["auto", "scroll", "contents", "transform", G]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [sn, Nn, Pu]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
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
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
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
            }
        }
    }
    , HT = PT(WT);
function Kr(...e) {
    return HT(Iv(e))
}
const KT = aT
    , Uv = x.forwardRef(({ className: e, ...t }, n) => w.jsx(Av, {
        ref: n,
        className: Kr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
Uv.displayName = Av.displayName;
const GT = lT("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
    , Wv = x.forwardRef(({ className: e, variant: t, ...n }, r) => w.jsx(Nv, {
        ref: r,
        className: Kr(GT({
            variant: t
        }), e),
        ...n
    }));
Wv.displayName = Nv.displayName;
const QT = x.forwardRef(({ className: e, ...t }, n) => w.jsx(Dv, {
    ref: n,
    className: Kr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
QT.displayName = Dv.displayName;
const Hv = x.forwardRef(({ className: e, ...t }, n) => w.jsx(Lv, {
    ref: n,
    className: Kr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: w.jsx(hT, {
        className: "h-4 w-4"
    })
}));
Hv.displayName = Lv.displayName;
const Kv = x.forwardRef(({ className: e, ...t }, n) => w.jsx(Mv, {
    ref: n,
    className: Kr("text-sm font-semibold", e),
    ...t
}));
Kv.displayName = Mv.displayName;
const Gv = x.forwardRef(({ className: e, ...t }, n) => w.jsx(jv, {
    ref: n,
    className: Kr("text-sm opacity-90", e),
    ...t
}));
Gv.displayName = jv.displayName;
function XT() {
    const { toasts: e } = mC();
    return w.jsxs(KT, {
        children: [e.map(function ({ id: t, title: n, description: r, action: i, ...o }) {
            return w.jsxs(Wv, {
                ...o,
                children: [w.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && w.jsx(Kv, {
                        children: n
                    }), r && w.jsx(Gv, {
                        children: r
                    })]
                }), i, w.jsx(Hv, {})]
            }, t)
        }), w.jsx(Uv, {})]
    })
}
var $p = ["light", "dark"]
    , YT = "(prefers-color-scheme: dark)"
    , qT = x.createContext(void 0)
    , ZT = {
        setTheme: e => { }
        ,
        themes: []
    }
    , JT = () => {
        var e;
        return (e = x.useContext(qT)) != null ? e : ZT
    }
    ;
x.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: i, defaultTheme: o, value: s, attrs: a, nonce: l }) => {
    let u = o === "system"
        , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v => `'${v}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
        , d = i ? $p.includes(o) && o ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
        , f = (v, g = !1, S = !0) => {
            let p = s ? s[v] : v
                , m = g ? v + "|| ''" : `'${p}'`
                , y = "";
            return i && S && !g && $p.includes(v) && (y += `d.style.colorScheme = '${v}';`),
                n === "class" ? g || p ? y += `c.add(${m})` : y += "null" : p && (y += `d[s](n,${m})`),
                y
        }
        , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${YT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(o, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}else{${f(o, !1, !1)};}${d}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var eE = e => {
    switch (e) {
        case "success":
            return rE;
        case "info":
            return oE;
        case "warning":
            return iE;
        case "error":
            return sE;
        default:
            return null
    }
}
    , tE = Array(12).fill(0)
    , nE = ({ visible: e, className: t }) => D.createElement("div", {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e
    }, D.createElement("div", {
        className: "sonner-spinner"
    }, tE.map((n, r) => D.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${r}`
    }))))
    , rE = D.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, D.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    }))
    , iE = D.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, D.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    }))
    , oE = D.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, D.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    }))
    , sE = D.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, D.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    }))
    , aE = D.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, D.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), D.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))
    , lE = () => {
        let [e, t] = D.useState(document.hidden);
        return D.useEffect(() => {
            let n = () => {
                t(document.hidden)
            }
                ;
            return document.addEventListener("visibilitychange", n),
                () => window.removeEventListener("visibilitychange", n)
        }
            , []),
            e
    }
    , Gc = 1
    , uE = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e),
                () => {
                    let t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1)
                }
            ),
                this.publish = e => {
                    this.subscribers.forEach(t => t(e))
                }
                ,
                this.addToast = e => {
                    this.publish(e),
                        this.toasts = [...this.toasts, e]
                }
                ,
                this.create = e => {
                    var t;
                    let { message: n, ...r } = e
                        , i = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Gc++
                        , o = this.toasts.find(a => a.id === i)
                        , s = e.dismissible === void 0 ? !0 : e.dismissible;
                    return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
                        o ? this.toasts = this.toasts.map(a => a.id === i ? (this.publish({
                            ...a,
                            ...e,
                            id: i,
                            title: n
                        }),
                        {
                            ...a,
                            ...e,
                            id: i,
                            dismissible: s,
                            title: n
                        }) : a) : this.addToast({
                            title: n,
                            ...r,
                            dismissible: s,
                            id: i
                        }),
                        i
                }
                ,
                this.dismiss = e => (this.dismissedToasts.add(e),
                    e || this.toasts.forEach(t => {
                        this.subscribers.forEach(n => n({
                            id: t.id,
                            dismiss: !0
                        }))
                    }
                    ),
                    this.subscribers.forEach(t => t({
                        id: e,
                        dismiss: !0
                    })),
                    e),
                this.message = (e, t) => this.create({
                    ...t,
                    message: e
                }),
                this.error = (e, t) => this.create({
                    ...t,
                    message: e,
                    type: "error"
                }),
                this.success = (e, t) => this.create({
                    ...t,
                    type: "success",
                    message: e
                }),
                this.info = (e, t) => this.create({
                    ...t,
                    type: "info",
                    message: e
                }),
                this.warning = (e, t) => this.create({
                    ...t,
                    type: "warning",
                    message: e
                }),
                this.loading = (e, t) => this.create({
                    ...t,
                    type: "loading",
                    message: e
                }),
                this.promise = (e, t) => {
                    if (!t)
                        return;
                    let n;
                    t.loading !== void 0 && (n = this.create({
                        ...t,
                        promise: e,
                        type: "loading",
                        message: t.loading,
                        description: typeof t.description != "function" ? t.description : void 0
                    }));
                    let r = e instanceof Promise ? e : e(), i = n !== void 0, o, s = r.then(async l => {
                        if (o = ["resolve", l],
                            D.isValidElement(l))
                            i = !1,
                                this.create({
                                    id: n,
                                    type: "default",
                                    message: l
                                });
                        else if (dE(l) && !l.ok) {
                            i = !1;
                            let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                                , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: c
                            })
                        } else if (t.success !== void 0) {
                            i = !1;
                            let u = typeof t.success == "function" ? await t.success(l) : t.success
                                , c = typeof t.description == "function" ? await t.description(l) : t.description;
                            this.create({
                                id: n,
                                type: "success",
                                message: u,
                                description: c
                            })
                        }
                    }
                    ).catch(async l => {
                        if (o = ["reject", l],
                            t.error !== void 0) {
                            i = !1;
                            let u = typeof t.error == "function" ? await t.error(l) : t.error
                                , c = typeof t.description == "function" ? await t.description(l) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: c
                            })
                        }
                    }
                    ).finally(() => {
                        var l;
                        i && (this.dismiss(n),
                            n = void 0),
                            (l = t.finally) == null || l.call(t)
                    }
                    ), a = () => new Promise((l, u) => s.then(() => o[0] === "reject" ? u(o[1]) : l(o[1])).catch(u));
                    return typeof n != "string" && typeof n != "number" ? {
                        unwrap: a
                    } : Object.assign(n, {
                        unwrap: a
                    })
                }
                ,
                this.custom = (e, t) => {
                    let n = (t == null ? void 0 : t.id) || Gc++;
                    return this.create({
                        jsx: e(n),
                        id: n,
                        ...t
                    }),
                        n
                }
                ,
                this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
                this.subscribers = [],
                this.toasts = [],
                this.dismissedToasts = new Set
        }
    }
    , Xe = new uE
    , cE = (e, t) => {
        let n = (t == null ? void 0 : t.id) || Gc++;
        return Xe.addToast({
            title: e,
            ...t,
            id: n
        }),
            n
    }
    , dE = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number"
    , fE = cE
    , hE = () => Xe.toasts
    , pE = () => Xe.getActiveToasts();
Object.assign(fE, {
    success: Xe.success,
    info: Xe.info,
    warning: Xe.warning,
    error: Xe.error,
    custom: Xe.custom,
    message: Xe.message,
    promise: Xe.promise,
    dismiss: Xe.dismiss,
    loading: Xe.loading
}, {
    getHistory: hE,
    getToasts: pE
});
function mE(e, { insertAt: t } = {}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
        , r = document.createElement("style");
    r.type = "text/css",
        t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
        r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
mE(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ea(e) {
    return e.label !== void 0
}
var gE = 3
    , yE = "32px"
    , vE = "16px"
    , Up = 4e3
    , xE = 356
    , wE = 14
    , SE = 20
    , bE = 200;
function Et(...e) {
    return e.filter(Boolean).join(" ")
}
function CE(e) {
    let [t, n] = e.split("-")
        , r = [];
    return t && r.push(t),
        n && r.push(n),
        r
}
var TE = e => {
    var t, n, r, i, o, s, a, l, u, c, d;
    let { invert: f, toast: h, unstyled: v, interacting: g, setHeights: S, visibleToasts: p, heights: m, index: y, toasts: b, expanded: C, removeToast: T, defaultRichColors: E, closeButton: P, style: N, cancelButtonStyle: M, actionButtonStyle: F, className: L = "", descriptionClassName: $ = "", duration: O, position: Q, gap: U, loadingIcon: B, expandByDefault: k, classNames: A, icons: I, closeButtonAriaLabel: W = "Close toast", pauseWhenPageIsHidden: z } = e
        , [X, q] = D.useState(null)
        , [xe, De] = D.useState(null)
        , [te, Yr] = D.useState(!1)
        , [Cn, pr] = D.useState(!1)
        , [Tn, qr] = D.useState(!1)
        , [En, Ms] = D.useState(!1)
        , [Kl, js] = D.useState(!1)
        , [Gl, ao] = D.useState(0)
        , [Zr, yh] = D.useState(0)
        , lo = D.useRef(h.duration || O || Up)
        , vh = D.useRef(null)
        , mr = D.useRef(null)
        , A1 = y === 0
        , N1 = y + 1 <= p
        , ct = h.type
        , Jr = h.dismissible !== !1
        , M1 = h.className || ""
        , j1 = h.descriptionClassName || ""
        , Ds = D.useMemo(() => m.findIndex(H => H.toastId === h.id) || 0, [m, h.id])
        , D1 = D.useMemo(() => {
            var H;
            return (H = h.closeButton) != null ? H : P
        }
            , [h.closeButton, P])
        , xh = D.useMemo(() => h.duration || O || Up, [h.duration, O])
        , Ql = D.useRef(0)
        , ei = D.useRef(0)
        , wh = D.useRef(0)
        , ti = D.useRef(null)
        , [L1, O1] = Q.split("-")
        , Sh = D.useMemo(() => m.reduce((H, re, ue) => ue >= Ds ? H : H + re.height, 0), [m, Ds])
        , bh = lE()
        , I1 = h.invert || f
        , Xl = ct === "loading";
    ei.current = D.useMemo(() => Ds * U + Sh, [Ds, Sh]),
        D.useEffect(() => {
            lo.current = xh
        }
            , [xh]),
        D.useEffect(() => {
            Yr(!0)
        }
            , []),
        D.useEffect(() => {
            let H = mr.current;
            if (H) {
                let re = H.getBoundingClientRect().height;
                return yh(re),
                    S(ue => [{
                        toastId: h.id,
                        height: re,
                        position: h.position
                    }, ...ue]),
                    () => S(ue => ue.filter(St => St.toastId !== h.id))
            }
        }
            , [S, h.id]),
        D.useLayoutEffect(() => {
            if (!te)
                return;
            let H = mr.current
                , re = H.style.height;
            H.style.height = "auto";
            let ue = H.getBoundingClientRect().height;
            H.style.height = re,
                yh(ue),
                S(St => St.find(bt => bt.toastId === h.id) ? St.map(bt => bt.toastId === h.id ? {
                    ...bt,
                    height: ue
                } : bt) : [{
                    toastId: h.id,
                    height: ue,
                    position: h.position
                }, ...St])
        }
            , [te, h.title, h.description, S, h.id]);
    let Pn = D.useCallback(() => {
        pr(!0),
            ao(ei.current),
            S(H => H.filter(re => re.toastId !== h.id)),
            setTimeout(() => {
                T(h)
            }
                , bE)
    }
        , [h, T, S, ei]);
    D.useEffect(() => {
        if (h.promise && ct === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let H;
        return C || g || z && bh ? (() => {
            if (wh.current < Ql.current) {
                let re = new Date().getTime() - Ql.current;
                lo.current = lo.current - re
            }
            wh.current = new Date().getTime()
        }
        )() : lo.current !== 1 / 0 && (Ql.current = new Date().getTime(),
            H = setTimeout(() => {
                var re;
                (re = h.onAutoClose) == null || re.call(h, h),
                    Pn()
            }
                , lo.current)),
            () => clearTimeout(H)
    }
        , [C, g, h, ct, z, bh, Pn]),
        D.useEffect(() => {
            h.delete && Pn()
        }
            , [Pn, h.delete]);
    function F1() {
        var H, re, ue;
        return I != null && I.loading ? D.createElement("div", {
            className: Et(A == null ? void 0 : A.loader, (H = h == null ? void 0 : h.classNames) == null ? void 0 : H.loader, "sonner-loader"),
            "data-visible": ct === "loading"
        }, I.loading) : B ? D.createElement("div", {
            className: Et(A == null ? void 0 : A.loader, (re = h == null ? void 0 : h.classNames) == null ? void 0 : re.loader, "sonner-loader"),
            "data-visible": ct === "loading"
        }, B) : D.createElement(nE, {
            className: Et(A == null ? void 0 : A.loader, (ue = h == null ? void 0 : h.classNames) == null ? void 0 : ue.loader),
            visible: ct === "loading"
        })
    }
    return D.createElement("li", {
        tabIndex: 0,
        ref: mr,
        className: Et(L, M1, A == null ? void 0 : A.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[ct], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ct]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : E,
        "data-styled": !(h.jsx || h.unstyled || v),
        "data-mounted": te,
        "data-promise": !!h.promise,
        "data-swiped": Kl,
        "data-removed": Cn,
        "data-visible": N1,
        "data-y-position": L1,
        "data-x-position": O1,
        "data-index": y,
        "data-front": A1,
        "data-swiping": Tn,
        "data-dismissible": Jr,
        "data-type": ct,
        "data-invert": I1,
        "data-swipe-out": En,
        "data-swipe-direction": xe,
        "data-expanded": !!(C || k && te),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": b.length - y,
            "--offset": `${Cn ? Gl : ei.current}px`,
            "--initial-height": k ? "auto" : `${Zr}px`,
            ...N,
            ...h.style
        },
        onDragEnd: () => {
            qr(!1),
                q(null),
                ti.current = null
        }
        ,
        onPointerDown: H => {
            Xl || !Jr || (vh.current = new Date,
                ao(ei.current),
                H.target.setPointerCapture(H.pointerId),
                H.target.tagName !== "BUTTON" && (qr(!0),
                    ti.current = {
                        x: H.clientX,
                        y: H.clientY
                    }))
        }
        ,
        onPointerUp: () => {
            var H, re, ue, St;
            if (En || !Jr)
                return;
            ti.current = null;
            let bt = Number(((H = mr.current) == null ? void 0 : H.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
                , kn = Number(((re = mr.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
                , gr = new Date().getTime() - ((ue = vh.current) == null ? void 0 : ue.getTime())
                , Ct = X === "x" ? bt : kn
                , Rn = Math.abs(Ct) / gr;
            if (Math.abs(Ct) >= SE || Rn > .11) {
                ao(ei.current),
                    (St = h.onDismiss) == null || St.call(h, h),
                    De(X === "x" ? bt > 0 ? "right" : "left" : kn > 0 ? "down" : "up"),
                    Pn(),
                    Ms(!0),
                    js(!1);
                return
            }
            qr(!1),
                q(null)
        }
        ,
        onPointerMove: H => {
            var re, ue, St, bt;
            if (!ti.current || !Jr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                return;
            let kn = H.clientY - ti.current.y
                , gr = H.clientX - ti.current.x
                , Ct = (ue = e.swipeDirections) != null ? ue : CE(Q);
            !X && (Math.abs(gr) > 1 || Math.abs(kn) > 1) && q(Math.abs(gr) > Math.abs(kn) ? "x" : "y");
            let Rn = {
                x: 0,
                y: 0
            };
            X === "y" ? (Ct.includes("top") || Ct.includes("bottom")) && (Ct.includes("top") && kn < 0 || Ct.includes("bottom") && kn > 0) && (Rn.y = kn) : X === "x" && (Ct.includes("left") || Ct.includes("right")) && (Ct.includes("left") && gr < 0 || Ct.includes("right") && gr > 0) && (Rn.x = gr),
                (Math.abs(Rn.x) > 0 || Math.abs(Rn.y) > 0) && js(!0),
                (St = mr.current) == null || St.style.setProperty("--swipe-amount-x", `${Rn.x}px`),
                (bt = mr.current) == null || bt.style.setProperty("--swipe-amount-y", `${Rn.y}px`)
        }
    }, D1 && !h.jsx ? D.createElement("button", {
        "aria-label": W,
        "data-disabled": Xl,
        "data-close-button": !0,
        onClick: Xl || !Jr ? () => { }
            : () => {
                var H;
                Pn(),
                    (H = h.onDismiss) == null || H.call(h, h)
            }
        ,
        className: Et(A == null ? void 0 : A.closeButton, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.closeButton)
    }, (o = I == null ? void 0 : I.close) != null ? o : aE) : null, h.jsx || x.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : D.createElement(D.Fragment, null, ct || h.icon || h.promise ? D.createElement("div", {
        "data-icon": "",
        className: Et(A == null ? void 0 : A.icon, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || F1() : null, h.type !== "loading" ? h.icon || (I == null ? void 0 : I[ct]) || eE(ct) : null) : null, D.createElement("div", {
        "data-content": "",
        className: Et(A == null ? void 0 : A.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, D.createElement("div", {
        "data-title": "",
        className: Et(A == null ? void 0 : A.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? D.createElement("div", {
        "data-description": "",
        className: Et($, j1, A == null ? void 0 : A.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), x.isValidElement(h.cancel) ? h.cancel : h.cancel && ea(h.cancel) ? D.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || M,
        onClick: H => {
            var re, ue;
            ea(h.cancel) && Jr && ((ue = (re = h.cancel).onClick) == null || ue.call(re, H),
                Pn())
        }
        ,
        className: Et(A == null ? void 0 : A.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, x.isValidElement(h.action) ? h.action : h.action && ea(h.action) ? D.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || F,
        onClick: H => {
            var re, ue;
            ea(h.action) && ((ue = (re = h.action).onClick) == null || ue.call(re, H),
                !H.defaultPrevented && Pn())
        }
        ,
        className: Et(A == null ? void 0 : A.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
    ;
function Wp() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function EE(e, t) {
    let n = {};
    return [e, t].forEach((r, i) => {
        let o = i === 1
            , s = o ? "--mobile-offset" : "--offset"
            , a = o ? vE : yE;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = a : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
        n
}
var PE = x.forwardRef(function (e, t) {
    let { invert: n, position: r = "bottom-right", hotkey: i = ["altKey", "KeyT"], expand: o, closeButton: s, className: a, offset: l, mobileOffset: u, theme: c = "light", richColors: d, duration: f, style: h, visibleToasts: v = gE, toastOptions: g, dir: S = Wp(), gap: p = wE, loadingIcon: m, icons: y, containerAriaLabel: b = "Notifications", pauseWhenPageIsHidden: C } = e
        , [T, E] = D.useState([])
        , P = D.useMemo(() => Array.from(new Set([r].concat(T.filter(z => z.position).map(z => z.position)))), [T, r])
        , [N, M] = D.useState([])
        , [F, L] = D.useState(!1)
        , [$, O] = D.useState(!1)
        , [Q, U] = D.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        , B = D.useRef(null)
        , k = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
        , A = D.useRef(null)
        , I = D.useRef(!1)
        , W = D.useCallback(z => {
            E(X => {
                var q;
                return (q = X.find(xe => xe.id === z.id)) != null && q.delete || Xe.dismiss(z.id),
                    X.filter(({ id: xe }) => xe !== z.id)
            }
            )
        }
            , []);
    return D.useEffect(() => Xe.subscribe(z => {
        if (z.dismiss) {
            E(X => X.map(q => q.id === z.id ? {
                ...q,
                delete: !0
            } : q));
            return
        }
        setTimeout(() => {
            av.flushSync(() => {
                E(X => {
                    let q = X.findIndex(xe => xe.id === z.id);
                    return q !== -1 ? [...X.slice(0, q), {
                        ...X[q],
                        ...z
                    }, ...X.slice(q + 1)] : [z, ...X]
                }
                )
            }
            )
        }
        )
    }
    ), []),
        D.useEffect(() => {
            if (c !== "system") {
                U(c);
                return
            }
            if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? U("dark") : U("light")),
                typeof window > "u")
                return;
            let z = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                z.addEventListener("change", ({ matches: X }) => {
                    U(X ? "dark" : "light")
                }
                )
            } catch {
                z.addListener(({ matches: q }) => {
                    try {
                        U(q ? "dark" : "light")
                    } catch (xe) {
                        console.error(xe)
                    }
                }
                )
            }
        }
            , [c]),
        D.useEffect(() => {
            T.length <= 1 && L(!1)
        }
            , [T]),
        D.useEffect(() => {
            let z = X => {
                var q, xe;
                i.every(De => X[De] || X.code === De) && (L(!0),
                    (q = B.current) == null || q.focus()),
                    X.code === "Escape" && (document.activeElement === B.current || (xe = B.current) != null && xe.contains(document.activeElement)) && L(!1)
            }
                ;
            return document.addEventListener("keydown", z),
                () => document.removeEventListener("keydown", z)
        }
            , [i]),
        D.useEffect(() => {
            if (B.current)
                return () => {
                    A.current && (A.current.focus({
                        preventScroll: !0
                    }),
                        A.current = null,
                        I.current = !1)
                }
        }
            , [B.current]),
        D.createElement("section", {
            ref: t,
            "aria-label": `${b} ${k}`,
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0
        }, P.map((z, X) => {
            var q;
            let [xe, De] = z.split("-");
            return T.length ? D.createElement("ol", {
                key: z,
                dir: S === "auto" ? Wp() : S,
                tabIndex: -1,
                ref: B,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": Q,
                "data-y-position": xe,
                "data-lifted": F && T.length > 1 && !o,
                "data-x-position": De,
                style: {
                    "--front-toast-height": `${((q = N[0]) == null ? void 0 : q.height) || 0}px`,
                    "--width": `${xE}px`,
                    "--gap": `${p}px`,
                    ...h,
                    ...EE(l, u)
                },
                onBlur: te => {
                    I.current && !te.currentTarget.contains(te.relatedTarget) && (I.current = !1,
                        A.current && (A.current.focus({
                            preventScroll: !0
                        }),
                            A.current = null))
                }
                ,
                onFocus: te => {
                    te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || I.current || (I.current = !0,
                        A.current = te.relatedTarget)
                }
                ,
                onMouseEnter: () => L(!0),
                onMouseMove: () => L(!0),
                onMouseLeave: () => {
                    $ || L(!1)
                }
                ,
                onDragEnd: () => L(!1),
                onPointerDown: te => {
                    te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || O(!0)
                }
                ,
                onPointerUp: () => O(!1)
            }, T.filter(te => !te.position && X === 0 || te.position === z).map((te, Yr) => {
                var Cn, pr;
                return D.createElement(TE, {
                    key: te.id,
                    icons: y,
                    index: Yr,
                    toast: te,
                    defaultRichColors: d,
                    duration: (Cn = g == null ? void 0 : g.duration) != null ? Cn : f,
                    className: g == null ? void 0 : g.className,
                    descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                    invert: n,
                    visibleToasts: v,
                    closeButton: (pr = g == null ? void 0 : g.closeButton) != null ? pr : s,
                    interacting: $,
                    position: z,
                    style: g == null ? void 0 : g.style,
                    unstyled: g == null ? void 0 : g.unstyled,
                    classNames: g == null ? void 0 : g.classNames,
                    cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                    actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                    removeToast: W,
                    toasts: T.filter(Tn => Tn.position == te.position),
                    heights: N.filter(Tn => Tn.position == te.position),
                    setHeights: M,
                    expandByDefault: o,
                    gap: p,
                    loadingIcon: m,
                    expanded: F,
                    pauseWhenPageIsHidden: C,
                    swipeDirections: e.swipeDirections
                })
            }
            )) : null
        }
        ))
});
const kE = ({ ...e }) => {
    const { theme: t = "system" } = JT();
    return w.jsx(PE, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
    , RE = ["top", "right", "bottom", "left"]
    , ar = Math.min
    , rt = Math.max
    , Za = Math.round
    , ta = Math.floor
    , Jt = e => ({
        x: e,
        y: e
    })
    , AE = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    }
    , NE = {
        start: "end",
        end: "start"
    };
function Qc(e, t, n) {
    return rt(e, ar(t, n))
}
function xn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function wn(e) {
    return e.split("-")[0]
}
function eo(e) {
    return e.split("-")[1]
}
function Rf(e) {
    return e === "x" ? "y" : "x"
}
function Af(e) {
    return e === "y" ? "height" : "width"
}
const ME = new Set(["top", "bottom"]);
function Yt(e) {
    return ME.has(wn(e)) ? "y" : "x"
}
function Nf(e) {
    return Rf(Yt(e))
}
function jE(e, t, n) {
    n === void 0 && (n = !1);
    const r = eo(e)
        , i = Nf(e)
        , o = Af(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = Ja(s)),
        [s, Ja(s)]
}
function DE(e) {
    const t = Ja(e);
    return [Xc(e), t, Xc(t)]
}
function Xc(e) {
    return e.replace(/start|end/g, t => NE[t])
}
const Hp = ["left", "right"]
    , Kp = ["right", "left"]
    , LE = ["top", "bottom"]
    , OE = ["bottom", "top"];
function IE(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? Kp : Hp : t ? Hp : Kp;
        case "left":
        case "right":
            return t ? LE : OE;
        default:
            return []
    }
}
function FE(e, t, n, r) {
    const i = eo(e);
    let o = IE(wn(e), n === "start", r);
    return i && (o = o.map(s => s + "-" + i),
        t && (o = o.concat(o.map(Xc)))),
        o
}
function Ja(e) {
    return e.replace(/left|right|bottom|top/g, t => AE[t])
}
function _E(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Qv(e) {
    return typeof e != "number" ? _E(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function el(e) {
    const { x: t, y: n, width: r, height: i } = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}
function Gp(e, t, n) {
    let { reference: r, floating: i } = e;
    const o = Yt(t)
        , s = Nf(t)
        , a = Af(s)
        , l = wn(t)
        , u = o === "y"
        , c = r.x + r.width / 2 - i.width / 2
        , d = r.y + r.height / 2 - i.height / 2
        , f = r[a] / 2 - i[a] / 2;
    let h;
    switch (l) {
        case "top":
            h = {
                x: c,
                y: r.y - i.height
            };
            break;
        case "bottom":
            h = {
                x: c,
                y: r.y + r.height
            };
            break;
        case "right":
            h = {
                x: r.x + r.width,
                y: d
            };
            break;
        case "left":
            h = {
                x: r.x - i.width,
                y: d
            };
            break;
        default:
            h = {
                x: r.x,
                y: r.y
            }
    }
    switch (eo(t)) {
        case "start":
            h[s] -= f * (n && u ? -1 : 1);
            break;
        case "end":
            h[s] += f * (n && u ? -1 : 1);
            break
    }
    return h
}
const VE = async (e, t, n) => {
    const { placement: r = "bottom", strategy: i = "absolute", middleware: o = [], platform: s } = n
        , a = o.filter(Boolean)
        , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
        , { x: c, y: d } = Gp(u, r, l)
        , f = r
        , h = {}
        , v = 0;
    for (let g = 0; g < a.length; g++) {
        const { name: S, fn: p } = a[g]
            , { x: m, y, data: b, reset: C } = await p({
                x: c,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: i,
                middlewareData: h,
                rects: u,
                platform: s,
                elements: {
                    reference: e,
                    floating: t
                }
            });
        c = m ?? c,
            d = y ?? d,
            h = {
                ...h,
                [S]: {
                    ...h[S],
                    ...b
                }
            },
            C && v <= 50 && (v++,
                typeof C == "object" && (C.placement && (f = C.placement),
                    C.rects && (u = C.rects === !0 ? await s.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: i
                    }) : C.rects),
                    { x: c, y: d } = Gp(u, f, l)),
                g = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: i,
        middlewareData: h
    }
}
    ;
async function rs(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: i, platform: o, rects: s, elements: a, strategy: l } = e
        , { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: f = !1, padding: h = 0 } = xn(t, e)
        , v = Qv(h)
        , S = a[f ? d === "floating" ? "reference" : "floating" : d]
        , p = el(await o.getClippingRect({
            element: (n = await (o.isElement == null ? void 0 : o.isElement(S))) == null || n ? S : S.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
            boundary: u,
            rootBoundary: c,
            strategy: l
        }))
        , m = d === "floating" ? {
            x: r,
            y: i,
            width: s.floating.width,
            height: s.floating.height
        } : s.reference
        , y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating))
        , b = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
            x: 1,
            y: 1
        } : {
            x: 1,
            y: 1
        }
        , C = el(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: y,
            strategy: l
        }) : m);
    return {
        top: (p.top - C.top + v.top) / b.y,
        bottom: (C.bottom - p.bottom + v.bottom) / b.y,
        left: (p.left - C.left + v.left) / b.x,
        right: (C.right - p.right + v.right) / b.x
    }
}
const BE = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const { x: n, y: r, placement: i, rects: o, platform: s, elements: a, middlewareData: l } = t
            , { element: u, padding: c = 0 } = xn(e, t) || {};
        if (u == null)
            return {};
        const d = Qv(c)
            , f = {
                x: n,
                y: r
            }
            , h = Nf(i)
            , v = Af(h)
            , g = await s.getDimensions(u)
            , S = h === "y"
            , p = S ? "top" : "left"
            , m = S ? "bottom" : "right"
            , y = S ? "clientHeight" : "clientWidth"
            , b = o.reference[v] + o.reference[h] - f[h] - o.floating[v]
            , C = f[h] - o.reference[h]
            , T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let E = T ? T[y] : 0;
        (!E || !await (s.isElement == null ? void 0 : s.isElement(T))) && (E = a.floating[y] || o.floating[v]);
        const P = b / 2 - C / 2
            , N = E / 2 - g[v] / 2 - 1
            , M = ar(d[p], N)
            , F = ar(d[m], N)
            , L = M
            , $ = E - g[v] - F
            , O = E / 2 - g[v] / 2 + P
            , Q = Qc(L, O, $)
            , U = !l.arrow && eo(i) != null && O !== Q && o.reference[v] / 2 - (O < L ? M : F) - g[v] / 2 < 0
            , B = U ? O < L ? O - L : O - $ : 0;
        return {
            [h]: f[h] + B,
            data: {
                [h]: Q,
                centerOffset: O - Q - B,
                ...U && {
                    alignmentOffset: B
                }
            },
            reset: U
        }
    }
})
    , zE = function (e) {
        return e === void 0 && (e = {}),
        {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const { placement: i, middlewareData: o, rects: s, initialPlacement: a, platform: l, elements: u } = t
                    , { mainAxis: c = !0, crossAxis: d = !0, fallbackPlacements: f, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: g = !0, ...S } = xn(e, t);
                if ((n = o.arrow) != null && n.alignmentOffset)
                    return {};
                const p = wn(i)
                    , m = Yt(a)
                    , y = wn(a) === a
                    , b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
                    , C = f || (y || !g ? [Ja(a)] : DE(a))
                    , T = v !== "none";
                !f && T && C.push(...FE(a, g, v, b));
                const E = [a, ...C]
                    , P = await rs(t, S)
                    , N = [];
                let M = ((r = o.flip) == null ? void 0 : r.overflows) || [];
                if (c && N.push(P[p]),
                    d) {
                    const O = jE(i, s, b);
                    N.push(P[O[0]], P[O[1]])
                }
                if (M = [...M, {
                    placement: i,
                    overflows: N
                }],
                    !N.every(O => O <= 0)) {
                    var F, L;
                    const O = (((F = o.flip) == null ? void 0 : F.index) || 0) + 1
                        , Q = E[O];
                    if (Q && (!(d === "alignment" ? m !== Yt(Q) : !1) || M.every(k => k.overflows[0] > 0 && Yt(k.placement) === m)))
                        return {
                            data: {
                                index: O,
                                overflows: M
                            },
                            reset: {
                                placement: Q
                            }
                        };
                    let U = (L = M.filter(B => B.overflows[0] <= 0).sort((B, k) => B.overflows[1] - k.overflows[1])[0]) == null ? void 0 : L.placement;
                    if (!U)
                        switch (h) {
                            case "bestFit":
                                {
                                    var $;
                                    const B = ($ = M.filter(k => {
                                        if (T) {
                                            const A = Yt(k.placement);
                                            return A === m || A === "y"
                                        }
                                        return !0
                                    }
                                    ).map(k => [k.placement, k.overflows.filter(A => A > 0).reduce((A, I) => A + I, 0)]).sort((k, A) => k[1] - A[1])[0]) == null ? void 0 : $[0];
                                    B && (U = B);
                                    break
                                }
                            case "initialPlacement":
                                U = a;
                                break
                        }
                    if (i !== U)
                        return {
                            reset: {
                                placement: U
                            }
                        }
                }
                return {}
            }
        }
    };
function Qp(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Xp(e) {
    return RE.some(t => e[t] >= 0)
}
const $E = function (e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const { rects: n } = t
                , { strategy: r = "referenceHidden", ...i } = xn(e, t);
            switch (r) {
                case "referenceHidden":
                    {
                        const o = await rs(t, {
                            ...i,
                            elementContext: "reference"
                        })
                            , s = Qp(o, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: s,
                                referenceHidden: Xp(s)
                            }
                        }
                    }
                case "escaped":
                    {
                        const o = await rs(t, {
                            ...i,
                            altBoundary: !0
                        })
                            , s = Qp(o, n.floating);
                        return {
                            data: {
                                escapedOffsets: s,
                                escaped: Xp(s)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
}
    , Xv = new Set(["left", "top"]);
async function UE(e, t) {
    const { placement: n, platform: r, elements: i } = e
        , o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
        , s = wn(n)
        , a = eo(n)
        , l = Yt(n) === "y"
        , u = Xv.has(s) ? -1 : 1
        , c = o && l ? -1 : 1
        , d = xn(t, e);
    let { mainAxis: f, crossAxis: h, alignmentAxis: v } = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
        l ? {
            x: h * c,
            y: f * u
        } : {
            x: f * u,
            y: h * c
        }
}
const WE = function (e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const { x: i, y: o, placement: s, middlewareData: a } = t
                , l = await UE(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: i + l.x,
                y: o + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
    , HE = function (e) {
        return e === void 0 && (e = {}),
        {
            name: "shift",
            options: e,
            async fn(t) {
                const { x: n, y: r, placement: i } = t
                    , { mainAxis: o = !0, crossAxis: s = !1, limiter: a = {
                        fn: S => {
                            let { x: p, y: m } = S;
                            return {
                                x: p,
                                y: m
                            }
                        }
                    }, ...l } = xn(e, t)
                    , u = {
                        x: n,
                        y: r
                    }
                    , c = await rs(t, l)
                    , d = Yt(wn(i))
                    , f = Rf(d);
                let h = u[f]
                    , v = u[d];
                if (o) {
                    const S = f === "y" ? "top" : "left"
                        , p = f === "y" ? "bottom" : "right"
                        , m = h + c[S]
                        , y = h - c[p];
                    h = Qc(m, h, y)
                }
                if (s) {
                    const S = d === "y" ? "top" : "left"
                        , p = d === "y" ? "bottom" : "right"
                        , m = v + c[S]
                        , y = v - c[p];
                    v = Qc(m, v, y)
                }
                const g = a.fn({
                    ...t,
                    [f]: h,
                    [d]: v
                });
                return {
                    ...g,
                    data: {
                        x: g.x - n,
                        y: g.y - r,
                        enabled: {
                            [f]: o,
                            [d]: s
                        }
                    }
                }
            }
        }
    }
    , KE = function (e) {
        return e === void 0 && (e = {}),
        {
            options: e,
            fn(t) {
                const { x: n, y: r, placement: i, rects: o, middlewareData: s } = t
                    , { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = xn(e, t)
                    , c = {
                        x: n,
                        y: r
                    }
                    , d = Yt(i)
                    , f = Rf(d);
                let h = c[f]
                    , v = c[d];
                const g = xn(a, t)
                    , S = typeof g == "number" ? {
                        mainAxis: g,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...g
                    };
                if (l) {
                    const y = f === "y" ? "height" : "width"
                        , b = o.reference[f] - o.floating[y] + S.mainAxis
                        , C = o.reference[f] + o.reference[y] - S.mainAxis;
                    h < b ? h = b : h > C && (h = C)
                }
                if (u) {
                    var p, m;
                    const y = f === "y" ? "width" : "height"
                        , b = Xv.has(wn(i))
                        , C = o.reference[d] - o.floating[y] + (b && ((p = s.offset) == null ? void 0 : p[d]) || 0) + (b ? 0 : S.crossAxis)
                        , T = o.reference[d] + o.reference[y] + (b ? 0 : ((m = s.offset) == null ? void 0 : m[d]) || 0) - (b ? S.crossAxis : 0);
                    v < C ? v = C : v > T && (v = T)
                }
                return {
                    [f]: h,
                    [d]: v
                }
            }
        }
    }
    , GE = function (e) {
        return e === void 0 && (e = {}),
        {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const { placement: i, rects: o, platform: s, elements: a } = t
                    , { apply: l = () => { }
                        , ...u } = xn(e, t)
                    , c = await rs(t, u)
                    , d = wn(i)
                    , f = eo(i)
                    , h = Yt(i) === "y"
                    , { width: v, height: g } = o.floating;
                let S, p;
                d === "top" || d === "bottom" ? (S = d,
                    p = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (p = d,
                        S = f === "end" ? "top" : "bottom");
                const m = g - c.top - c.bottom
                    , y = v - c.left - c.right
                    , b = ar(g - c[S], m)
                    , C = ar(v - c[p], y)
                    , T = !t.middlewareData.shift;
                let E = b
                    , P = C;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y),
                    (r = t.middlewareData.shift) != null && r.enabled.y && (E = m),
                    T && !f) {
                    const M = rt(c.left, 0)
                        , F = rt(c.right, 0)
                        , L = rt(c.top, 0)
                        , $ = rt(c.bottom, 0);
                    h ? P = v - 2 * (M !== 0 || F !== 0 ? M + F : rt(c.left, c.right)) : E = g - 2 * (L !== 0 || $ !== 0 ? L + $ : rt(c.top, c.bottom))
                }
                await l({
                    ...t,
                    availableWidth: P,
                    availableHeight: E
                });
                const N = await s.getDimensions(a.floating);
                return v !== N.width || g !== N.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };
function Dl() {
    return typeof window < "u"
}
function to(e) {
    return Yv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function st(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function on(e) {
    var t;
    return (t = (Yv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Yv(e) {
    return Dl() ? e instanceof Node || e instanceof st(e).Node : !1
}
function Bt(e) {
    return Dl() ? e instanceof Element || e instanceof st(e).Element : !1
}
function nn(e) {
    return Dl() ? e instanceof HTMLElement || e instanceof st(e).HTMLElement : !1
}
function Yp(e) {
    return !Dl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof st(e).ShadowRoot
}
const QE = new Set(["inline", "contents"]);
function Cs(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: i } = zt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !QE.has(i)
}
const XE = new Set(["table", "td", "th"]);
function YE(e) {
    return XE.has(to(e))
}
const qE = [":popover-open", ":modal"];
function Ll(e) {
    return qE.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const ZE = ["transform", "translate", "scale", "rotate", "perspective"]
    , JE = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
    , eP = ["paint", "layout", "strict", "content"];
function Mf(e) {
    const t = jf()
        , n = Bt(e) ? zt(e) : e;
    return ZE.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || JE.some(r => (n.willChange || "").includes(r)) || eP.some(r => (n.contain || "").includes(r))
}
function tP(e) {
    let t = lr(e);
    for (; nn(t) && !Hi(t);) {
        if (Mf(t))
            return t;
        if (Ll(t))
            return null;
        t = lr(t)
    }
    return null
}
function jf() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const nP = new Set(["html", "body", "#document"]);
function Hi(e) {
    return nP.has(to(e))
}
function zt(e) {
    return st(e).getComputedStyle(e)
}
function Ol(e) {
    return Bt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function lr(e) {
    if (to(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Yp(e) && e.host || on(e);
    return Yp(t) ? t.host : t
}
function qv(e) {
    const t = lr(e);
    return Hi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : nn(t) && Cs(t) ? t : qv(t)
}
function is(e, t, n) {
    var r;
    t === void 0 && (t = []),
        n === void 0 && (n = !0);
    const i = qv(e)
        , o = i === ((r = e.ownerDocument) == null ? void 0 : r.body)
        , s = st(i);
    if (o) {
        const a = Yc(s);
        return t.concat(s, s.visualViewport || [], Cs(i) ? i : [], a && n ? is(a) : [])
    }
    return t.concat(i, is(i, [], n))
}
function Yc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Zv(e) {
    const t = zt(e);
    let n = parseFloat(t.width) || 0
        , r = parseFloat(t.height) || 0;
    const i = nn(e)
        , o = i ? e.offsetWidth : n
        , s = i ? e.offsetHeight : r
        , a = Za(n) !== o || Za(r) !== s;
    return a && (n = o,
        r = s),
    {
        width: n,
        height: r,
        $: a
    }
}
function Df(e) {
    return Bt(e) ? e : e.contextElement
}
function Ri(e) {
    const t = Df(e);
    if (!nn(t))
        return Jt(1);
    const n = t.getBoundingClientRect()
        , { width: r, height: i, $: o } = Zv(t);
    let s = (o ? Za(n.width) : n.width) / r
        , a = (o ? Za(n.height) : n.height) / i;
    return (!s || !Number.isFinite(s)) && (s = 1),
        (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: s,
        y: a
    }
}
const rP = Jt(0);
function Jv(e) {
    const t = st(e);
    return !jf() || !t.visualViewport ? rP : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function iP(e, t, n) {
    return t === void 0 && (t = !1),
        !n || t && n !== st(e) ? !1 : t
}
function Ur(e, t, n, r) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !1);
    const i = e.getBoundingClientRect()
        , o = Df(e);
    let s = Jt(1);
    t && (r ? Bt(r) && (s = Ri(r)) : s = Ri(e));
    const a = iP(o, n, r) ? Jv(o) : Jt(0);
    let l = (i.left + a.x) / s.x
        , u = (i.top + a.y) / s.y
        , c = i.width / s.x
        , d = i.height / s.y;
    if (o) {
        const f = st(o)
            , h = r && Bt(r) ? st(r) : r;
        let v = f
            , g = Yc(v);
        for (; g && r && h !== v;) {
            const S = Ri(g)
                , p = g.getBoundingClientRect()
                , m = zt(g)
                , y = p.left + (g.clientLeft + parseFloat(m.paddingLeft)) * S.x
                , b = p.top + (g.clientTop + parseFloat(m.paddingTop)) * S.y;
            l *= S.x,
                u *= S.y,
                c *= S.x,
                d *= S.y,
                l += y,
                u += b,
                v = st(g),
                g = Yc(v)
        }
    }
    return el({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function Lf(e, t) {
    const n = Ol(e).scrollLeft;
    return t ? t.left + n : Ur(on(e)).left + n
}
function ex(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
        , i = r.left + t.scrollLeft - (n ? 0 : Lf(e, r))
        , o = r.top + t.scrollTop;
    return {
        x: i,
        y: o
    }
}
function oP(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
    const o = i === "fixed"
        , s = on(r)
        , a = t ? Ll(t.floating) : !1;
    if (r === s || a && o)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
        , u = Jt(1);
    const c = Jt(0)
        , d = nn(r);
    if ((d || !d && !o) && ((to(r) !== "body" || Cs(s)) && (l = Ol(r)),
        nn(r))) {
        const h = Ur(r);
        u = Ri(r),
            c.x = h.x + r.clientLeft,
            c.y = h.y + r.clientTop
    }
    const f = s && !d && !o ? ex(s, l, !0) : Jt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
    }
}
function sP(e) {
    return Array.from(e.getClientRects())
}
function aP(e) {
    const t = on(e)
        , n = Ol(e)
        , r = e.ownerDocument.body
        , i = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
        , o = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Lf(e);
    const a = -n.scrollTop;
    return zt(r).direction === "rtl" && (s += rt(t.clientWidth, r.clientWidth) - i),
    {
        width: i,
        height: o,
        x: s,
        y: a
    }
}
function lP(e, t) {
    const n = st(e)
        , r = on(e)
        , i = n.visualViewport;
    let o = r.clientWidth
        , s = r.clientHeight
        , a = 0
        , l = 0;
    if (i) {
        o = i.width,
            s = i.height;
        const u = jf();
        (!u || u && t === "fixed") && (a = i.offsetLeft,
            l = i.offsetTop)
    }
    return {
        width: o,
        height: s,
        x: a,
        y: l
    }
}
const uP = new Set(["absolute", "fixed"]);
function cP(e, t) {
    const n = Ur(e, !0, t === "fixed")
        , r = n.top + e.clientTop
        , i = n.left + e.clientLeft
        , o = nn(e) ? Ri(e) : Jt(1)
        , s = e.clientWidth * o.x
        , a = e.clientHeight * o.y
        , l = i * o.x
        , u = r * o.y;
    return {
        width: s,
        height: a,
        x: l,
        y: u
    }
}
function qp(e, t, n) {
    let r;
    if (t === "viewport")
        r = lP(e, n);
    else if (t === "document")
        r = aP(on(e));
    else if (Bt(t))
        r = cP(t, n);
    else {
        const i = Jv(e);
        r = {
            x: t.x - i.x,
            y: t.y - i.y,
            width: t.width,
            height: t.height
        }
    }
    return el(r)
}
function tx(e, t) {
    const n = lr(e);
    return n === t || !Bt(n) || Hi(n) ? !1 : zt(n).position === "fixed" || tx(n, t)
}
function dP(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = is(e, [], !1).filter(a => Bt(a) && to(a) !== "body")
        , i = null;
    const o = zt(e).position === "fixed";
    let s = o ? lr(e) : e;
    for (; Bt(s) && !Hi(s);) {
        const a = zt(s)
            , l = Mf(s);
        !l && a.position === "fixed" && (i = null),
            (o ? !l && !i : !l && a.position === "static" && !!i && uP.has(i.position) || Cs(s) && !l && tx(e, s)) ? r = r.filter(c => c !== s) : i = a,
            s = lr(s)
    }
    return t.set(e, r),
        r
}
function fP(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
    const s = [...n === "clippingAncestors" ? Ll(t) ? [] : dP(t, this._c) : [].concat(n), r]
        , a = s[0]
        , l = s.reduce((u, c) => {
            const d = qp(t, c, i);
            return u.top = rt(d.top, u.top),
                u.right = ar(d.right, u.right),
                u.bottom = ar(d.bottom, u.bottom),
                u.left = rt(d.left, u.left),
                u
        }
            , qp(t, a, i));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function hP(e) {
    const { width: t, height: n } = Zv(e);
    return {
        width: t,
        height: n
    }
}
function pP(e, t, n) {
    const r = nn(t)
        , i = on(t)
        , o = n === "fixed"
        , s = Ur(e, !0, o, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Jt(0);
    function u() {
        l.x = Lf(i)
    }
    if (r || !r && !o)
        if ((to(t) !== "body" || Cs(i)) && (a = Ol(t)),
            r) {
            const h = Ur(t, !0, o, t);
            l.x = h.x + t.clientLeft,
                l.y = h.y + t.clientTop
        } else
            i && u();
    o && !r && i && u();
    const c = i && !r && !o ? ex(i, a) : Jt(0)
        , d = s.left + a.scrollLeft - l.x - c.x
        , f = s.top + a.scrollTop - l.y - c.y;
    return {
        x: d,
        y: f,
        width: s.width,
        height: s.height
    }
}
function ku(e) {
    return zt(e).position === "static"
}
function Zp(e, t) {
    if (!nn(e) || zt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return on(e) === n && (n = n.ownerDocument.body),
        n
}
function nx(e, t) {
    const n = st(e);
    if (Ll(e))
        return n;
    if (!nn(e)) {
        let i = lr(e);
        for (; i && !Hi(i);) {
            if (Bt(i) && !ku(i))
                return i;
            i = lr(i)
        }
        return n
    }
    let r = Zp(e, t);
    for (; r && YE(r) && ku(r);)
        r = Zp(r, t);
    return r && Hi(r) && ku(r) && !Mf(r) ? n : r || tP(e) || n
}
const mP = async function (e) {
    const t = this.getOffsetParent || nx
        , n = this.getDimensions
        , r = await n(e.floating);
    return {
        reference: pP(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function gP(e) {
    return zt(e).direction === "rtl"
}
const yP = {
    convertOffsetParentRelativeRectToViewportRelativeRect: oP,
    getDocumentElement: on,
    getClippingRect: fP,
    getOffsetParent: nx,
    getElementRects: mP,
    getClientRects: sP,
    getDimensions: hP,
    getScale: Ri,
    isElement: Bt,
    isRTL: gP
};
function rx(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function vP(e, t) {
    let n = null, r;
    const i = on(e);
    function o() {
        var a;
        clearTimeout(r),
            (a = n) == null || a.disconnect(),
            n = null
    }
    function s(a, l) {
        a === void 0 && (a = !1),
            l === void 0 && (l = 1),
            o();
        const u = e.getBoundingClientRect()
            , { left: c, top: d, width: f, height: h } = u;
        if (a || t(),
            !f || !h)
            return;
        const v = ta(d)
            , g = ta(i.clientWidth - (c + f))
            , S = ta(i.clientHeight - (d + h))
            , p = ta(c)
            , y = {
                rootMargin: -v + "px " + -g + "px " + -S + "px " + -p + "px",
                threshold: rt(0, ar(1, l)) || 1
            };
        let b = !0;
        function C(T) {
            const E = T[0].intersectionRatio;
            if (E !== l) {
                if (!b)
                    return s();
                E ? s(!1, E) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }
                    , 1e3)
            }
            E === 1 && !rx(u, e.getBoundingClientRect()) && s(),
                b = !1
        }
        try {
            n = new IntersectionObserver(C, {
                ...y,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C, y)
        }
        n.observe(e)
    }
    return s(!0),
        o
}
function xP(e, t, n, r) {
    r === void 0 && (r = {});
    const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: s = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = r
        , u = Df(e)
        , c = i || o ? [...u ? is(u) : [], ...is(t)] : [];
    c.forEach(p => {
        i && p.addEventListener("scroll", n, {
            passive: !0
        }),
            o && p.addEventListener("resize", n)
    }
    );
    const d = u && a ? vP(u, n) : null;
    let f = -1
        , h = null;
    s && (h = new ResizeObserver(p => {
        let [m] = p;
        m && m.target === u && h && (h.unobserve(t),
            cancelAnimationFrame(f),
            f = requestAnimationFrame(() => {
                var y;
                (y = h) == null || y.observe(t)
            }
            )),
            n()
    }
    ),
        u && !l && h.observe(u),
        h.observe(t));
    let v, g = l ? Ur(e) : null;
    l && S();
    function S() {
        const p = Ur(e);
        g && !rx(g, p) && n(),
            g = p,
            v = requestAnimationFrame(S)
    }
    return n(),
        () => {
            var p;
            c.forEach(m => {
                i && m.removeEventListener("scroll", n),
                    o && m.removeEventListener("resize", n)
            }
            ),
                d == null || d(),
                (p = h) == null || p.disconnect(),
                h = null,
                l && cancelAnimationFrame(v)
        }
}
const wP = WE
    , SP = HE
    , bP = zE
    , CP = GE
    , TP = $E
    , Jp = BE
    , EP = KE
    , PP = (e, t, n) => {
        const r = new Map
            , i = {
                platform: yP,
                ...n
            }
            , o = {
                ...i.platform,
                _c: r
            };
        return VE(e, t, {
            ...i,
            platform: o
        })
    }
    ;
var kP = typeof document < "u"
    , RP = function () { }
    , Sa = kP ? x.useLayoutEffect : RP;
function tl(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
                n !== t.length)
                return !1;
            for (r = n; r-- !== 0;)
                if (!tl(e[r], t[r]))
                    return !1;
            return !0
        }
        if (i = Object.keys(e),
            n = i.length,
            n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, i[r]))
                return !1;
        for (r = n; r-- !== 0;) {
            const o = i[r];
            if (!(o === "_owner" && e.$$typeof) && !tl(e[o], t[o]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function ix(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function em(e, t) {
    const n = ix(e);
    return Math.round(t * n) / n
}
function Ru(e) {
    const t = x.useRef(e);
    return Sa(() => {
        t.current = e
    }
    ),
        t
}
function AP(e) {
    e === void 0 && (e = {});
    const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: o, floating: s } = {}, transform: a = !0, whileElementsMounted: l, open: u } = e
        , [c, d] = x.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1
        })
        , [f, h] = x.useState(r);
    tl(f, r) || h(r);
    const [v, g] = x.useState(null)
        , [S, p] = x.useState(null)
        , m = x.useCallback(k => {
            k !== T.current && (T.current = k,
                g(k))
        }
            , [])
        , y = x.useCallback(k => {
            k !== E.current && (E.current = k,
                p(k))
        }
            , [])
        , b = o || v
        , C = s || S
        , T = x.useRef(null)
        , E = x.useRef(null)
        , P = x.useRef(c)
        , N = l != null
        , M = Ru(l)
        , F = Ru(i)
        , L = Ru(u)
        , $ = x.useCallback(() => {
            if (!T.current || !E.current)
                return;
            const k = {
                placement: t,
                strategy: n,
                middleware: f
            };
            F.current && (k.platform = F.current),
                PP(T.current, E.current, k).then(A => {
                    const I = {
                        ...A,
                        isPositioned: L.current !== !1
                    };
                    O.current && !tl(P.current, I) && (P.current = I,
                        Ss.flushSync(() => {
                            d(I)
                        }
                        ))
                }
                )
        }
            , [f, t, n, F, L]);
    Sa(() => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
            d(k => ({
                ...k,
                isPositioned: !1
            })))
    }
        , [u]);
    const O = x.useRef(!1);
    Sa(() => (O.current = !0,
        () => {
            O.current = !1
        }
    ), []),
        Sa(() => {
            if (b && (T.current = b),
                C && (E.current = C),
                b && C) {
                if (M.current)
                    return M.current(b, C, $);
                $()
            }
        }
            , [b, C, $, M, N]);
    const Q = x.useMemo(() => ({
        reference: T,
        floating: E,
        setReference: m,
        setFloating: y
    }), [m, y])
        , U = x.useMemo(() => ({
            reference: b,
            floating: C
        }), [b, C])
        , B = x.useMemo(() => {
            const k = {
                position: n,
                left: 0,
                top: 0
            };
            if (!U.floating)
                return k;
            const A = em(U.floating, c.x)
                , I = em(U.floating, c.y);
            return a ? {
                ...k,
                transform: "translate(" + A + "px, " + I + "px)",
                ...ix(U.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: A,
                top: I
            }
        }
            , [n, a, U.floating, c.x, c.y]);
    return x.useMemo(() => ({
        ...c,
        update: $,
        refs: Q,
        elements: U,
        floatingStyles: B
    }), [c, $, Q, U, B])
}
const NP = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const { element: r, padding: i } = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Jp({
                element: r.current,
                padding: i
            }).fn(n) : {} : r ? Jp({
                element: r,
                padding: i
            }).fn(n) : {}
        }
    }
}
    , MP = (e, t) => ({
        ...wP(e),
        options: [e, t]
    })
    , jP = (e, t) => ({
        ...SP(e),
        options: [e, t]
    })
    , DP = (e, t) => ({
        ...EP(e),
        options: [e, t]
    })
    , LP = (e, t) => ({
        ...bP(e),
        options: [e, t]
    })
    , OP = (e, t) => ({
        ...CP(e),
        options: [e, t]
    })
    , IP = (e, t) => ({
        ...TP(e),
        options: [e, t]
    })
    , FP = (e, t) => ({
        ...NP(e),
        options: [e, t]
    });
var _P = "Arrow"
    , ox = x.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: i = 5, ...o } = e;
        return w.jsx(tt.svg, {
            ...o,
            ref: t,
            width: r,
            height: i,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : w.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    }
    );
ox.displayName = _P;
var VP = ox;
function BP(e) {
    const [t, n] = x.useState(void 0);
    return sr(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(i => {
                if (!Array.isArray(i) || !i.length)
                    return;
                const o = i[0];
                let s, a;
                if ("borderBoxSize" in o) {
                    const l = o.borderBoxSize
                        , u = Array.isArray(l) ? l[0] : l;
                    s = u.inlineSize,
                        a = u.blockSize
                } else
                    s = e.offsetWidth,
                        a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
                () => r.unobserve(e)
        } else
            n(void 0)
    }
        , [e]),
        t
}
var sx = "Popper"
    , [ax, lx] = Nl(sx)
    , [Yj, ux] = ax(sx)
    , cx = "PopperAnchor"
    , dx = x.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...i } = e
            , o = ux(cx, n)
            , s = x.useRef(null)
            , a = Vt(t, s);
        return x.useEffect(() => {
            o.onAnchorChange((r == null ? void 0 : r.current) || s.current)
        }
        ),
            r ? null : w.jsx(tt.div, {
                ...i,
                ref: a
            })
    }
    );
dx.displayName = cx;
var Of = "PopperContent"
    , [zP, $P] = ax(Of)
    , fx = x.forwardRef((e, t) => {
        var te, Yr, Cn, pr, Tn, qr;
        const { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: o = "center", alignOffset: s = 0, arrowPadding: a = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: c = 0, sticky: d = "partial", hideWhenDetached: f = !1, updatePositionStrategy: h = "optimized", onPlaced: v, ...g } = e
            , S = ux(Of, n)
            , [p, m] = x.useState(null)
            , y = Vt(t, En => m(En))
            , [b, C] = x.useState(null)
            , T = BP(b)
            , E = (T == null ? void 0 : T.width) ?? 0
            , P = (T == null ? void 0 : T.height) ?? 0
            , N = r + (o !== "center" ? "-" + o : "")
            , M = typeof c == "number" ? c : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...c
            }
            , F = Array.isArray(u) ? u : [u]
            , L = F.length > 0
            , $ = {
                padding: M,
                boundary: F.filter(WP),
                altBoundary: L
            }
            , { refs: O, floatingStyles: Q, placement: U, isPositioned: B, middlewareData: k } = AP({
                strategy: "fixed",
                placement: N,
                whileElementsMounted: (...En) => xP(...En, {
                    animationFrame: h === "always"
                }),
                elements: {
                    reference: S.anchor
                },
                middleware: [MP({
                    mainAxis: i + P,
                    alignmentAxis: s
                }), l && jP({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: d === "partial" ? DP() : void 0,
                    ...$
                }), l && LP({
                    ...$
                }), OP({
                    ...$,
                    apply: ({ elements: En, rects: Ms, availableWidth: Kl, availableHeight: js }) => {
                        const { width: Gl, height: ao } = Ms.reference
                            , Zr = En.floating.style;
                        Zr.setProperty("--radix-popper-available-width", `${Kl}px`),
                            Zr.setProperty("--radix-popper-available-height", `${js}px`),
                            Zr.setProperty("--radix-popper-anchor-width", `${Gl}px`),
                            Zr.setProperty("--radix-popper-anchor-height", `${ao}px`)
                    }
                }), b && FP({
                    element: b,
                    padding: a
                }), HP({
                    arrowWidth: E,
                    arrowHeight: P
                }), f && IP({
                    strategy: "referenceHidden",
                    ...$
                })]
            })
            , [A, I] = mx(U)
            , W = or(v);
        sr(() => {
            B && (W == null || W())
        }
            , [B, W]);
        const z = (te = k.arrow) == null ? void 0 : te.x
            , X = (Yr = k.arrow) == null ? void 0 : Yr.y
            , q = ((Cn = k.arrow) == null ? void 0 : Cn.centerOffset) !== 0
            , [xe, De] = x.useState();
        return sr(() => {
            p && De(window.getComputedStyle(p).zIndex)
        }
            , [p]),
            w.jsx("div", {
                ref: O.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...Q,
                    transform: B ? Q.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: xe,
                    "--radix-popper-transform-origin": [(pr = k.transformOrigin) == null ? void 0 : pr.x, (Tn = k.transformOrigin) == null ? void 0 : Tn.y].join(" "),
                    ...((qr = k.hide) == null ? void 0 : qr.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none"
                    }
                },
                dir: e.dir,
                children: w.jsx(zP, {
                    scope: n,
                    placedSide: A,
                    onArrowChange: C,
                    arrowX: z,
                    arrowY: X,
                    shouldHideArrow: q,
                    children: w.jsx(tt.div, {
                        "data-side": A,
                        "data-align": I,
                        ...g,
                        ref: y,
                        style: {
                            ...g.style,
                            animation: B ? void 0 : "none"
                        }
                    })
                })
            })
    }
    );
fx.displayName = Of;
var hx = "PopperArrow"
    , UP = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    }
    , px = x.forwardRef(function (t, n) {
        const { __scopePopper: r, ...i } = t
            , o = $P(hx, r)
            , s = UP[o.placedSide];
        return w.jsx("span", {
            ref: o.onArrowChange,
            style: {
                position: "absolute",
                left: o.arrowX,
                top: o.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[o.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[o.placedSide],
                visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: w.jsx(VP, {
                ...i,
                ref: n,
                style: {
                    ...i.style,
                    display: "block"
                }
            })
        })
    });
px.displayName = hx;
function WP(e) {
    return e !== null
}
var HP = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var S, p, m;
        const { placement: n, rects: r, middlewareData: i } = t
            , s = ((S = i.arrow) == null ? void 0 : S.centerOffset) !== 0
            , a = s ? 0 : e.arrowWidth
            , l = s ? 0 : e.arrowHeight
            , [u, c] = mx(n)
            , d = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[c]
            , f = (((p = i.arrow) == null ? void 0 : p.x) ?? 0) + a / 2
            , h = (((m = i.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
        let v = ""
            , g = "";
        return u === "bottom" ? (v = s ? d : `${f}px`,
            g = `${-l}px`) : u === "top" ? (v = s ? d : `${f}px`,
                g = `${r.floating.height + l}px`) : u === "right" ? (v = `${-l}px`,
                    g = s ? d : `${h}px`) : u === "left" && (v = `${r.floating.width + l}px`,
                        g = s ? d : `${h}px`),
        {
            data: {
                x: v,
                y: g
            }
        }
    }
});
function mx(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var KP = dx
    , GP = fx
    , QP = px
    , [Il, qj] = Nl("Tooltip", [lx])
    , If = lx()
    , gx = "TooltipProvider"
    , XP = 700
    , tm = "tooltip.open"
    , [YP, yx] = Il(gx)
    , vx = e => {
        const { __scopeTooltip: t, delayDuration: n = XP, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: o } = e
            , s = x.useRef(!0)
            , a = x.useRef(!1)
            , l = x.useRef(0);
        return x.useEffect(() => {
            const u = l.current;
            return () => window.clearTimeout(u)
        }
            , []),
            w.jsx(YP, {
                scope: t,
                isOpenDelayedRef: s,
                delayDuration: n,
                onOpen: x.useCallback(() => {
                    window.clearTimeout(l.current),
                        s.current = !1
                }
                    , []),
                onClose: x.useCallback(() => {
                    window.clearTimeout(l.current),
                        l.current = window.setTimeout(() => s.current = !0, r)
                }
                    , [r]),
                isPointerInTransitRef: a,
                onPointerInTransitChange: x.useCallback(u => {
                    a.current = u
                }
                    , []),
                disableHoverableContent: i,
                children: o
            })
    }
    ;
vx.displayName = gx;
var xx = "Tooltip"
    , [Zj, Fl] = Il(xx)
    , qc = "TooltipTrigger"
    , qP = x.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e
            , i = Fl(qc, n)
            , o = yx(qc, n)
            , s = If(n)
            , a = x.useRef(null)
            , l = Vt(t, a, i.onTriggerChange)
            , u = x.useRef(!1)
            , c = x.useRef(!1)
            , d = x.useCallback(() => u.current = !1, []);
        return x.useEffect(() => () => document.removeEventListener("pointerup", d), [d]),
            w.jsx(KP, {
                asChild: !0,
                ...s,
                children: w.jsx(tt.button, {
                    "aria-describedby": i.open ? i.contentId : void 0,
                    "data-state": i.stateAttribute,
                    ...r,
                    ref: l,
                    onPointerMove: Ee(e.onPointerMove, f => {
                        f.pointerType !== "touch" && !c.current && !o.isPointerInTransitRef.current && (i.onTriggerEnter(),
                            c.current = !0)
                    }
                    ),
                    onPointerLeave: Ee(e.onPointerLeave, () => {
                        i.onTriggerLeave(),
                            c.current = !1
                    }
                    ),
                    onPointerDown: Ee(e.onPointerDown, () => {
                        i.open && i.onClose(),
                            u.current = !0,
                            document.addEventListener("pointerup", d, {
                                once: !0
                            })
                    }
                    ),
                    onFocus: Ee(e.onFocus, () => {
                        u.current || i.onOpen()
                    }
                    ),
                    onBlur: Ee(e.onBlur, i.onClose),
                    onClick: Ee(e.onClick, i.onClose)
                })
            })
    }
    );
qP.displayName = qc;
var ZP = "TooltipPortal"
    , [Jj, JP] = Il(ZP, {
        forceMount: void 0
    })
    , Ki = "TooltipContent"
    , wx = x.forwardRef((e, t) => {
        const n = JP(Ki, e.__scopeTooltip)
            , { forceMount: r = n.forceMount, side: i = "top", ...o } = e
            , s = Fl(Ki, e.__scopeTooltip);
        return w.jsx(Cf, {
            present: r || s.open,
            children: s.disableHoverableContent ? w.jsx(Sx, {
                side: i,
                ...o,
                ref: t
            }) : w.jsx(ek, {
                side: i,
                ...o,
                ref: t
            })
        })
    }
    )
    , ek = x.forwardRef((e, t) => {
        const n = Fl(Ki, e.__scopeTooltip)
            , r = yx(Ki, e.__scopeTooltip)
            , i = x.useRef(null)
            , o = Vt(t, i)
            , [s, a] = x.useState(null)
            , { trigger: l, onClose: u } = n
            , c = i.current
            , { onPointerInTransitChange: d } = r
            , f = x.useCallback(() => {
                a(null),
                    d(!1)
            }
                , [d])
            , h = x.useCallback((v, g) => {
                const S = v.currentTarget
                    , p = {
                        x: v.clientX,
                        y: v.clientY
                    }
                    , m = ok(p, S.getBoundingClientRect())
                    , y = sk(p, m)
                    , b = ak(g.getBoundingClientRect())
                    , C = uk([...y, ...b]);
                a(C),
                    d(!0)
            }
                , [d]);
        return x.useEffect(() => () => f(), [f]),
            x.useEffect(() => {
                if (l && c) {
                    const v = S => h(S, c)
                        , g = S => h(S, l);
                    return l.addEventListener("pointerleave", v),
                        c.addEventListener("pointerleave", g),
                        () => {
                            l.removeEventListener("pointerleave", v),
                                c.removeEventListener("pointerleave", g)
                        }
                }
            }
                , [l, c, h, f]),
            x.useEffect(() => {
                if (s) {
                    const v = g => {
                        const S = g.target
                            , p = {
                                x: g.clientX,
                                y: g.clientY
                            }
                            , m = (l == null ? void 0 : l.contains(S)) || (c == null ? void 0 : c.contains(S))
                            , y = !lk(p, s);
                        m ? f() : y && (f(),
                            u())
                    }
                        ;
                    return document.addEventListener("pointermove", v),
                        () => document.removeEventListener("pointermove", v)
                }
            }
                , [l, c, s, u, f]),
            w.jsx(Sx, {
                ...e,
                ref: o
            })
    }
    )
    , [tk, nk] = Il(xx, {
        isInside: !1
    })
    , rk = vC("TooltipContent")
    , Sx = x.forwardRef((e, t) => {
        const { __scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: o, onPointerDownOutside: s, ...a } = e
            , l = Fl(Ki, n)
            , u = If(n)
            , { onClose: c } = l;
        return x.useEffect(() => (document.addEventListener(tm, c),
            () => document.removeEventListener(tm, c)), [c]),
            x.useEffect(() => {
                if (l.trigger) {
                    const d = f => {
                        const h = f.target;
                        h != null && h.contains(l.trigger) && c()
                    }
                        ;
                    return window.addEventListener("scroll", d, {
                        capture: !0
                    }),
                        () => window.removeEventListener("scroll", d, {
                            capture: !0
                        })
                }
            }
                , [l.trigger, c]),
            w.jsx(bf, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: o,
                onPointerDownOutside: s,
                onFocusOutside: d => d.preventDefault(),
                onDismiss: c,
                children: w.jsxs(GP, {
                    "data-state": l.stateAttribute,
                    ...u,
                    ...a,
                    ref: t,
                    style: {
                        ...a.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                    },
                    children: [w.jsx(rk, {
                        children: r
                    }), w.jsx(tk, {
                        scope: n,
                        isInside: !0,
                        children: w.jsx(UC, {
                            id: l.contentId,
                            role: "tooltip",
                            children: i || r
                        })
                    })]
                })
            })
    }
    );
wx.displayName = Ki;
var bx = "TooltipArrow"
    , ik = x.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e
            , i = If(n);
        return nk(bx, n).isInside ? null : w.jsx(QP, {
            ...i,
            ...r,
            ref: t
        })
    }
    );
ik.displayName = bx;
function ok(e, t) {
    const n = Math.abs(t.top - e.y)
        , r = Math.abs(t.bottom - e.y)
        , i = Math.abs(t.right - e.x)
        , o = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, o)) {
        case o:
            return "left";
        case i:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}
function sk(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}
function ak(e) {
    const { top: t, right: n, bottom: r, left: i } = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}
function lk(e, t) {
    const { x: n, y: r } = e;
    let i = !1;
    for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
        const a = t[o]
            , l = t[s]
            , u = a.x
            , c = a.y
            , d = l.x
            , f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (i = !i)
    }
    return i
}
function uk(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
        ck(t)
}
function ck(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        for (; t.length >= 2;) {
            const o = t[t.length - 1]
                , s = t[t.length - 2];
            if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x))
                t.pop();
            else
                break
        }
        t.push(i)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r];
        for (; n.length >= 2;) {
            const o = n[n.length - 1]
                , s = n[n.length - 2];
            if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x))
                n.pop();
            else
                break
        }
        n.push(i)
    }
    return n.pop(),
        t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var dk = vx
    , Cx = wx;
const fk = dk
    , hk = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => w.jsx(Cx, {
        ref: r,
        sideOffset: t,
        className: Kr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
hk.displayName = Cx.displayName;
var _l = class {
    constructor() {
        this.listeners = new Set,
            this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
            this.onSubscribe(),
            () => {
                this.listeners.delete(e),
                    this.onUnsubscribe()
            }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() { }
    onUnsubscribe() { }
}
    , Vl = typeof window > "u" || "Deno" in globalThis;
function Nt() { }
function pk(e, t) {
    return typeof e == "function" ? e(t) : e
}
function mk(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function gk(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Zc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function yk(e, t) {
    return typeof e == "function" ? e(t) : e
}
function nm(e, t) {
    const { type: n = "all", exact: r, fetchStatus: i, predicate: o, queryKey: s, stale: a } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Ff(s, t.options))
                return !1
        } else if (!ss(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || o && !o(t))
}
function rm(e, t) {
    const { exact: n, status: r, predicate: i, mutationKey: o } = e;
    if (o) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (os(t.options.mutationKey) !== os(o))
                return !1
        } else if (!ss(t.options.mutationKey, o))
            return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}
function Ff(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || os)(e)
}
function os(e) {
    return JSON.stringify(e, (t, n) => Jc(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i],
        r), {}) : n)
}
function ss(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ss(e[n], t[n])) : !1
}
function Tx(e, t) {
    if (e === t)
        return e;
    const n = im(e) && im(t);
    if (n || Jc(e) && Jc(t)) {
        const r = n ? e : Object.keys(e)
            , i = r.length
            , o = n ? t : Object.keys(t)
            , s = o.length
            , a = n ? [] : {}
            , l = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const d = n ? c : o[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
                u++) : (a[d] = Tx(e[d], t[d]),
                    a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return i === s && u === i ? e : a
    }
    return t
}
function im(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Jc(e) {
    if (!om(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!om(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function om(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function vk(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function xk(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Tx(e, t) : t
}
function wk(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Sk(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var _f = Symbol();
function Ex(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === _f ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Ar, Vn, Ni, Vg, bk = (Vg = class extends _l {
    constructor() {
        super();
        J(this, Ar);
        J(this, Vn);
        J(this, Ni);
        K(this, Ni, t => {
            if (!Vl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                    () => {
                        window.removeEventListener("visibilitychange", n)
                    }
            }
        }
        )
    }
    onSubscribe() {
        R(this, Vn) || this.setEventListener(R(this, Ni))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, Vn)) == null || t.call(this),
            K(this, Vn, void 0))
    }
    setEventListener(t) {
        var n;
        K(this, Ni, t),
            (n = R(this, Vn)) == null || n.call(this),
            K(this, Vn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }
            ))
    }
    setFocused(t) {
        R(this, Ar) !== t && (K(this, Ar, t),
            this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof R(this, Ar) == "boolean" ? R(this, Ar) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
    ,
    Ar = new WeakMap,
    Vn = new WeakMap,
    Ni = new WeakMap,
    Vg), Px = new bk, Mi, Bn, ji, Bg, Ck = (Bg = class extends _l {
        constructor() {
            super();
            J(this, Mi, !0);
            J(this, Bn);
            J(this, ji);
            K(this, ji, t => {
                if (!Vl && window.addEventListener) {
                    const n = () => t(!0)
                        , r = () => t(!1);
                    return window.addEventListener("online", n, !1),
                        window.addEventListener("offline", r, !1),
                        () => {
                            window.removeEventListener("online", n),
                                window.removeEventListener("offline", r)
                        }
                }
            }
            )
        }
        onSubscribe() {
            R(this, Bn) || this.setEventListener(R(this, ji))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = R(this, Bn)) == null || t.call(this),
                K(this, Bn, void 0))
        }
        setEventListener(t) {
            var n;
            K(this, ji, t),
                (n = R(this, Bn)) == null || n.call(this),
                K(this, Bn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            R(this, Mi) !== t && (K(this, Mi, t),
                this.listeners.forEach(r => {
                    r(t)
                }
                ))
        }
        isOnline() {
            return R(this, Mi)
        }
    }
        ,
        Mi = new WeakMap,
        Bn = new WeakMap,
        ji = new WeakMap,
        Bg), nl = new Ck;
function Tk() {
    let e, t;
    const n = new Promise((i, o) => {
        e = i,
            t = o
    }
    );
    n.status = "pending",
        n.catch(() => { }
        );
    function r(i) {
        Object.assign(n, i),
            delete n.resolve,
            delete n.reject
    }
    return n.resolve = i => {
        r({
            status: "fulfilled",
            value: i
        }),
            e(i)
    }
        ,
        n.reject = i => {
            r({
                status: "rejected",
                reason: i
            }),
                t(i)
        }
        ,
        n
}
function Ek(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function kx(e) {
    return (e ?? "online") === "online" ? nl.isOnline() : !0
}
var Rx = class extends Error {
    constructor(e) {
        super("CancelledError"),
            this.revert = e == null ? void 0 : e.revert,
            this.silent = e == null ? void 0 : e.silent
    }
}
    ;
function Au(e) {
    return e instanceof Rx
}
function Ax(e) {
    let t = !1, n = 0, r = !1, i;
    const o = Tk()
        , s = g => {
            var S;
            r || (f(new Rx(g)),
                (S = e.abort) == null || S.call(e))
        }
        , a = () => {
            t = !0
        }
        , l = () => {
            t = !1
        }
        , u = () => Px.isFocused() && (e.networkMode === "always" || nl.isOnline()) && e.canRun()
        , c = () => kx(e.networkMode) && e.canRun()
        , d = g => {
            var S;
            r || (r = !0,
                (S = e.onSuccess) == null || S.call(e, g),
                i == null || i(),
                o.resolve(g))
        }
        , f = g => {
            var S;
            r || (r = !0,
                (S = e.onError) == null || S.call(e, g),
                i == null || i(),
                o.reject(g))
        }
        , h = () => new Promise(g => {
            var S;
            i = p => {
                (r || u()) && g(p)
            }
                ,
                (S = e.onPause) == null || S.call(e)
        }
        ).then(() => {
            var g;
            i = void 0,
                r || (g = e.onContinue) == null || g.call(e)
        }
        )
        , v = () => {
            if (r)
                return;
            let g;
            const S = n === 0 ? e.initialPromise : void 0;
            try {
                g = S ?? e.fn()
            } catch (p) {
                g = Promise.reject(p)
            }
            Promise.resolve(g).then(d).catch(p => {
                var T;
                if (r)
                    return;
                const m = e.retry ?? (Vl ? 0 : 3)
                    , y = e.retryDelay ?? Ek
                    , b = typeof y == "function" ? y(n, p) : y
                    , C = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, p);
                if (t || !C) {
                    f(p);
                    return
                }
                n++,
                    (T = e.onFail) == null || T.call(e, n, p),
                    vk(b).then(() => u() ? void 0 : h()).then(() => {
                        t ? f(p) : v()
                    }
                    )
            }
            )
        }
        ;
    return {
        promise: o,
        cancel: s,
        continue: () => (i == null || i(),
            o),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? v() : h().then(v),
            o)
    }
}
var Pk = e => setTimeout(e, 0);
function kk() {
    let e = []
        , t = 0
        , n = a => {
            a()
        }
        , r = a => {
            a()
        }
        , i = Pk;
    const o = a => {
        t ? e.push(a) : i(() => {
            n(a)
        }
        )
    }
        , s = () => {
            const a = e;
            e = [],
                a.length && i(() => {
                    r(() => {
                        a.forEach(l => {
                            n(l)
                        }
                        )
                    }
                    )
                }
                )
        }
        ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                    t || s()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            o(() => {
                a(...l)
            }
            )
        }
        ,
        schedule: o,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            i = a
        }
    }
}
var Ue = kk(), Nr, zg, Nx = (zg = class {
    constructor() {
        J(this, Nr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
            mk(this.gcTime) && K(this, Nr, setTimeout(() => {
                this.optionalRemove()
            }
                , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Vl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        R(this, Nr) && (clearTimeout(R(this, Nr)),
            K(this, Nr, void 0))
    }
}
    ,
    Nr = new WeakMap,
    zg), Di, Mr, dt, jr, Fe, ps, Dr, Mt, an, $g, Rk = ($g = class extends Nx {
        constructor(t) {
            super();
            J(this, Mt);
            J(this, Di);
            J(this, Mr);
            J(this, dt);
            J(this, jr);
            J(this, Fe);
            J(this, ps);
            J(this, Dr);
            K(this, Dr, !1),
                K(this, ps, t.defaultOptions),
                this.setOptions(t.options),
                this.observers = [],
                K(this, jr, t.client),
                K(this, dt, R(this, jr).getQueryCache()),
                this.queryKey = t.queryKey,
                this.queryHash = t.queryHash,
                K(this, Di, Nk(this.options)),
                this.state = t.state ?? R(this, Di),
                this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = R(this, Fe)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = {
                ...R(this, ps),
                ...t
            },
                this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && R(this, dt).remove(this)
        }
        setData(t, n) {
            const r = xk(this.state.data, t, this.options);
            return Le(this, Mt, an).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }),
                r
        }
        setState(t, n) {
            Le(this, Mt, an).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, i;
            const n = (r = R(this, Fe)) == null ? void 0 : r.promise;
            return (i = R(this, Fe)) == null || i.cancel(t),
                n ? n.then(Nt).catch(Nt) : Promise.resolve()
        }
        destroy() {
            super.destroy(),
                this.cancel({
                    silent: !0
                })
        }
        reset() {
            this.destroy(),
                this.setState(R(this, Di))
        }
        isActive() {
            return this.observers.some(t => yk(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === _f || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(t => Zc(t.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(t = 0) {
            return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !gk(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }),
                (n = R(this, Fe)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }),
                (n = R(this, Fe)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t),
                this.clearGcTimeout(),
                R(this, dt).notify({
                    type: "observerAdded",
                    query: this,
                    observer: t
                }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
                this.observers.length || (R(this, Fe) && (R(this, Dr) ? R(this, Fe).cancel({
                    revert: !0
                }) : R(this, Fe).cancelRetry()),
                    this.scheduleGc()),
                R(this, dt).notify({
                    type: "observerRemoved",
                    query: this,
                    observer: t
                }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Le(this, Mt, an).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var u, c, d;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                    this.cancel({
                        silent: !0
                    });
                else if (R(this, Fe))
                    return R(this, Fe).continueRetry(),
                        R(this, Fe).promise
            }
            if (t && this.setOptions(t),
                !this.options.queryFn) {
                const f = this.observers.find(h => h.options.queryFn);
                f && this.setOptions(f.options)
            }
            const r = new AbortController
                , i = f => {
                    Object.defineProperty(f, "signal", {
                        enumerable: !0,
                        get: () => (K(this, Dr, !0),
                            r.signal)
                    })
                }
                , o = () => {
                    const f = Ex(this.options, n)
                        , v = (() => {
                            const g = {
                                client: R(this, jr),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return i(g),
                                g
                        }
                        )();
                    return K(this, Dr, !1),
                        this.options.persister ? this.options.persister(f, v, this) : f(v)
                }
                , a = (() => {
                    const f = {
                        fetchOptions: n,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: R(this, jr),
                        state: this.state,
                        fetchFn: o
                    };
                    return i(f),
                        f
                }
                )();
            (u = this.options.behavior) == null || u.onFetch(a, this),
                K(this, Mr, this.state),
                (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Le(this, Mt, an).call(this, {
                    type: "fetch",
                    meta: (d = a.fetchOptions) == null ? void 0 : d.meta
                });
            const l = f => {
                var h, v, g, S;
                Au(f) && f.silent || Le(this, Mt, an).call(this, {
                    type: "error",
                    error: f
                }),
                    Au(f) || ((v = (h = R(this, dt).config).onError) == null || v.call(h, f, this),
                        (S = (g = R(this, dt).config).onSettled) == null || S.call(g, this.state.data, f, this)),
                    this.scheduleGc()
            }
                ;
            return K(this, Fe, Ax({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: f => {
                    var h, v, g, S;
                    if (f === void 0) {
                        l(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(f)
                    } catch (p) {
                        l(p);
                        return
                    }
                    (v = (h = R(this, dt).config).onSuccess) == null || v.call(h, f, this),
                        (S = (g = R(this, dt).config).onSettled) == null || S.call(g, f, this.state.error, this),
                        this.scheduleGc()
                }
                ,
                onError: l,
                onFail: (f, h) => {
                    Le(this, Mt, an).call(this, {
                        type: "failed",
                        failureCount: f,
                        error: h
                    })
                }
                ,
                onPause: () => {
                    Le(this, Mt, an).call(this, {
                        type: "pause"
                    })
                }
                ,
                onContinue: () => {
                    Le(this, Mt, an).call(this, {
                        type: "continue"
                    })
                }
                ,
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0
            })),
                R(this, Fe).start()
        }
    }
        ,
        Di = new WeakMap,
        Mr = new WeakMap,
        dt = new WeakMap,
        jr = new WeakMap,
        Fe = new WeakMap,
        ps = new WeakMap,
        Dr = new WeakMap,
        Mt = new WeakSet,
        an = function (t) {
            const n = r => {
                switch (t.type) {
                    case "failed":
                        return {
                            ...r,
                            fetchFailureCount: t.failureCount,
                            fetchFailureReason: t.error
                        };
                    case "pause":
                        return {
                            ...r,
                            fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...r,
                            fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...r,
                            ...Ak(r.data, this.options),
                            fetchMeta: t.meta ?? null
                        };
                    case "success":
                        return K(this, Mr, void 0),
                        {
                            ...r,
                            data: t.data,
                            dataUpdateCount: r.dataUpdateCount + 1,
                            dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                            error: null,
                            isInvalidated: !1,
                            status: "success",
                            ...!t.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                    case "error":
                        const i = t.error;
                        return Au(i) && i.revert && R(this, Mr) ? {
                            ...R(this, Mr),
                            fetchStatus: "idle"
                        } : {
                            ...r,
                            error: i,
                            errorUpdateCount: r.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: r.fetchFailureCount + 1,
                            fetchFailureReason: i,
                            fetchStatus: "idle",
                            status: "error"
                        };
                    case "invalidate":
                        return {
                            ...r,
                            isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...r,
                            ...t.state
                        }
                }
            }
                ;
            this.state = n(this.state),
                Ue.batch(() => {
                    this.observers.forEach(r => {
                        r.onQueryUpdate()
                    }
                    ),
                        R(this, dt).notify({
                            query: this,
                            type: "updated",
                            action: t
                        })
                }
                )
        }
        ,
        $g);
function Ak(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: kx(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Nk(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
        , n = t !== void 0
        , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Kt, Ug, Mk = (Ug = class extends _l {
    constructor(t = {}) {
        super();
        J(this, Kt);
        this.config = t,
            K(this, Kt, new Map)
    }
    build(t, n, r) {
        const i = n.queryKey
            , o = n.queryHash ?? Ff(i, n);
        let s = this.get(o);
        return s || (s = new Rk({
            client: t,
            queryKey: i,
            queryHash: o,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(i)
        }),
            this.add(s)),
            s
    }
    add(t) {
        R(this, Kt).has(t.queryHash) || (R(this, Kt).set(t.queryHash, t),
            this.notify({
                type: "added",
                query: t
            }))
    }
    remove(t) {
        const n = R(this, Kt).get(t.queryHash);
        n && (t.destroy(),
            n === t && R(this, Kt).delete(t.queryHash),
            this.notify({
                type: "removed",
                query: t
            }))
    }
    clear() {
        Ue.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return R(this, Kt).get(t)
    }
    getAll() {
        return [...R(this, Kt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => nm(n, r))
    }
    findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => nm(t, r)) : n
    }
    notify(t) {
        Ue.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Ue.batch(() => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Ue.batch(() => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
    ,
    Kt = new WeakMap,
    Ug), Gt, ze, Lr, Qt, jn, Wg, jk = (Wg = class extends Nx {
        constructor(t) {
            super();
            J(this, Qt);
            J(this, Gt);
            J(this, ze);
            J(this, Lr);
            this.mutationId = t.mutationId,
                K(this, ze, t.mutationCache),
                K(this, Gt, []),
                this.state = t.state || Dk(),
                this.setOptions(t.options),
                this.scheduleGc()
        }
        setOptions(t) {
            this.options = t,
                this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            R(this, Gt).includes(t) || (R(this, Gt).push(t),
                this.clearGcTimeout(),
                R(this, ze).notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: t
                }))
        }
        removeObserver(t) {
            K(this, Gt, R(this, Gt).filter(n => n !== t)),
                this.scheduleGc(),
                R(this, ze).notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: t
                })
        }
        optionalRemove() {
            R(this, Gt).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, ze).remove(this))
        }
        continue() {
            var t;
            return ((t = R(this, Lr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        }
        async execute(t) {
            var o, s, a, l, u, c, d, f, h, v, g, S, p, m, y, b, C, T, E, P;
            const n = () => {
                Le(this, Qt, jn).call(this, {
                    type: "continue"
                })
            }
                ;
            K(this, Lr, Ax({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (N, M) => {
                    Le(this, Qt, jn).call(this, {
                        type: "failed",
                        failureCount: N,
                        error: M
                    })
                }
                ,
                onPause: () => {
                    Le(this, Qt, jn).call(this, {
                        type: "pause"
                    })
                }
                ,
                onContinue: n,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => R(this, ze).canRun(this)
            }));
            const r = this.state.status === "pending"
                , i = !R(this, Lr).canStart();
            try {
                if (r)
                    n();
                else {
                    Le(this, Qt, jn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: i
                    }),
                        await ((s = (o = R(this, ze).config).onMutate) == null ? void 0 : s.call(o, t, this));
                    const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                    M !== this.state.context && Le(this, Qt, jn).call(this, {
                        type: "pending",
                        context: M,
                        variables: t,
                        isPaused: i
                    })
                }
                const N = await R(this, Lr).start();
                return await ((c = (u = R(this, ze).config).onSuccess) == null ? void 0 : c.call(u, N, t, this.state.context, this)),
                    await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, N, t, this.state.context)),
                    await ((v = (h = R(this, ze).config).onSettled) == null ? void 0 : v.call(h, N, null, this.state.variables, this.state.context, this)),
                    await ((S = (g = this.options).onSettled) == null ? void 0 : S.call(g, N, null, t, this.state.context)),
                    Le(this, Qt, jn).call(this, {
                        type: "success",
                        data: N
                    }),
                    N
            } catch (N) {
                try {
                    throw await ((m = (p = R(this, ze).config).onError) == null ? void 0 : m.call(p, N, t, this.state.context, this)),
                    await ((b = (y = this.options).onError) == null ? void 0 : b.call(y, N, t, this.state.context)),
                    await ((T = (C = R(this, ze).config).onSettled) == null ? void 0 : T.call(C, void 0, N, this.state.variables, this.state.context, this)),
                    await ((P = (E = this.options).onSettled) == null ? void 0 : P.call(E, void 0, N, t, this.state.context)),
                    N
                } finally {
                    Le(this, Qt, jn).call(this, {
                        type: "error",
                        error: N
                    })
                }
            } finally {
                R(this, ze).runNext(this)
            }
        }
    }
        ,
        Gt = new WeakMap,
        ze = new WeakMap,
        Lr = new WeakMap,
        Qt = new WeakSet,
        jn = function (t) {
            const n = r => {
                switch (t.type) {
                    case "failed":
                        return {
                            ...r,
                            failureCount: t.failureCount,
                            failureReason: t.error
                        };
                    case "pause":
                        return {
                            ...r,
                            isPaused: !0
                        };
                    case "continue":
                        return {
                            ...r,
                            isPaused: !1
                        };
                    case "pending":
                        return {
                            ...r,
                            context: t.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: t.isPaused,
                            status: "pending",
                            variables: t.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return {
                            ...r,
                            data: t.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return {
                            ...r,
                            data: void 0,
                            error: t.error,
                            failureCount: r.failureCount + 1,
                            failureReason: t.error,
                            isPaused: !1,
                            status: "error"
                        }
                }
            }
                ;
            this.state = n(this.state),
                Ue.batch(() => {
                    R(this, Gt).forEach(r => {
                        r.onMutationUpdate(t)
                    }
                    ),
                        R(this, ze).notify({
                            mutation: this,
                            type: "updated",
                            action: t
                        })
                }
                )
        }
        ,
        Wg);
function Dk() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var dn, jt, ms, Hg, Lk = (Hg = class extends _l {
    constructor(t = {}) {
        super();
        J(this, dn);
        J(this, jt);
        J(this, ms);
        this.config = t,
            K(this, dn, new Set),
            K(this, jt, new Map),
            K(this, ms, 0)
    }
    build(t, n, r) {
        const i = new jk({
            mutationCache: this,
            mutationId: ++Ls(this, ms)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i),
            i
    }
    add(t) {
        R(this, dn).add(t);
        const n = na(t);
        if (typeof n == "string") {
            const r = R(this, jt).get(n);
            r ? r.push(t) : R(this, jt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (R(this, dn).delete(t)) {
            const n = na(t);
            if (typeof n == "string") {
                const r = R(this, jt).get(n);
                if (r)
                    if (r.length > 1) {
                        const i = r.indexOf(t);
                        i !== -1 && r.splice(i, 1)
                    } else
                        r[0] === t && R(this, jt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = na(t);
        if (typeof n == "string") {
            const r = R(this, jt).get(n)
                , i = r == null ? void 0 : r.find(o => o.state.status === "pending");
            return !i || i === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = na(t);
        if (typeof n == "string") {
            const i = (r = R(this, jt).get(n)) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
            return (i == null ? void 0 : i.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Ue.batch(() => {
            R(this, dn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
                R(this, dn).clear(),
                R(this, jt).clear()
        }
        )
    }
    getAll() {
        return Array.from(R(this, dn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => rm(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => rm(t, n))
    }
    notify(t) {
        Ue.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ue.batch(() => Promise.all(t.map(n => n.continue().catch(Nt))))
    }
}
    ,
    dn = new WeakMap,
    jt = new WeakMap,
    ms = new WeakMap,
    Hg);
function na(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function sm(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, v;
            const r = t.options
                , i = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
                , o = ((h = t.state.data) == null ? void 0 : h.pages) || []
                , s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
                , l = 0;
            const u = async () => {
                let g = !1;
                const S = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                            t.signal)
                    })
                }
                    , p = Ex(t.options, t.fetchOptions)
                    , m = async (y, b, C) => {
                        if (g)
                            return Promise.reject();
                        if (b == null && y.pages.length)
                            return Promise.resolve(y);
                        const E = (() => {
                            const F = {
                                client: t.client,
                                queryKey: t.queryKey,
                                pageParam: b,
                                direction: C ? "backward" : "forward",
                                meta: t.options.meta
                            };
                            return S(F),
                                F
                        }
                        )()
                            , P = await p(E)
                            , { maxPages: N } = t.options
                            , M = C ? Sk : wk;
                        return {
                            pages: M(y.pages, P, N),
                            pageParams: M(y.pageParams, b, N)
                        }
                    }
                    ;
                if (i && o.length) {
                    const y = i === "backward"
                        , b = y ? Ok : am
                        , C = {
                            pages: o,
                            pageParams: s
                        }
                        , T = b(r, C);
                    a = await m(C, T, y)
                } else {
                    const y = e ?? o.length;
                    do {
                        const b = l === 0 ? s[0] ?? r.initialPageParam : am(r, a);
                        if (l > 0 && b == null)
                            break;
                        a = await m(a, b),
                            l++
                    } while (l < y)
                }
                return a
            }
                ;
            t.options.persister ? t.fetchFn = () => {
                var g, S;
                return (S = (g = t.options).persister) == null ? void 0 : S.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
                : t.fetchFn = u
        }
    }
}
function am(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Ok(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ge, zn, $n, Li, Oi, Un, Ii, Fi, Kg, Ik = (Kg = class {
    constructor(e = {}) {
        J(this, ge);
        J(this, zn);
        J(this, $n);
        J(this, Li);
        J(this, Oi);
        J(this, Un);
        J(this, Ii);
        J(this, Fi);
        K(this, ge, e.queryCache || new Mk),
            K(this, zn, e.mutationCache || new Lk),
            K(this, $n, e.defaultOptions || {}),
            K(this, Li, new Map),
            K(this, Oi, new Map),
            K(this, Un, 0)
    }
    mount() {
        Ls(this, Un)._++,
            R(this, Un) === 1 && (K(this, Ii, Px.subscribe(async e => {
                e && (await this.resumePausedMutations(),
                    R(this, ge).onFocus())
            }
            )),
                K(this, Fi, nl.subscribe(async e => {
                    e && (await this.resumePausedMutations(),
                        R(this, ge).onOnline())
                }
                )))
    }
    unmount() {
        var e, t;
        Ls(this, Un)._--,
            R(this, Un) === 0 && ((e = R(this, Ii)) == null || e.call(this),
                K(this, Ii, void 0),
                (t = R(this, Fi)) == null || t.call(this),
                K(this, Fi, void 0))
    }
    isFetching(e) {
        return R(this, ge).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return R(this, zn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, ge).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
            , n = R(this, ge).build(this, t)
            , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Zc(t.staleTime, n)) && this.prefetchQuery(t),
            Promise.resolve(r))
    }
    getQueriesData(e) {
        return R(this, ge).findAll(e).map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
            , i = R(this, ge).get(r.queryHash)
            , o = i == null ? void 0 : i.state.data
            , s = pk(t, o);
        if (s !== void 0)
            return R(this, ge).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Ue.batch(() => R(this, ge).findAll(e).map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, ge).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = R(this, ge);
        Ue.batch(() => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = R(this, ge);
        return Ue.batch(() => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
            this.refetchQueries({
                type: "active",
                ...e
            }, t)))
    }
    cancelQueries(e, t = {}) {
        const n = {
            revert: !0,
            ...t
        }
            , r = Ue.batch(() => R(this, ge).findAll(e).map(i => i.cancel(n)));
        return Promise.all(r).then(Nt).catch(Nt)
    }
    invalidateQueries(e, t = {}) {
        return Ue.batch(() => (R(this, ge).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
            (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
                ...e,
                type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
            }, t)))
    }
    refetchQueries(e, t = {}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
            , r = Ue.batch(() => R(this, ge).findAll(e).filter(i => !i.isDisabled() && !i.isStatic()).map(i => {
                let o = i.fetch(void 0, n);
                return n.throwOnError || (o = o.catch(Nt)),
                    i.state.fetchStatus === "paused" ? Promise.resolve() : o
            }
            ));
        return Promise.all(r).then(Nt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, ge).build(this, t);
        return n.isStaleByTime(Zc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Nt).catch(Nt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = sm(e.pages),
            this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Nt).catch(Nt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = sm(e.pages),
            this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return nl.isOnline() ? R(this, zn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return R(this, ge)
    }
    getMutationCache() {
        return R(this, zn)
    }
    getDefaultOptions() {
        return R(this, $n)
    }
    setDefaultOptions(e) {
        K(this, $n, e)
    }
    setQueryDefaults(e, t) {
        R(this, Li).set(os(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...R(this, Li).values()]
            , n = {};
        return t.forEach(r => {
            ss(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
            n
    }
    setMutationDefaults(e, t) {
        R(this, Oi).set(os(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...R(this, Oi).values()]
            , n = {};
        return t.forEach(r => {
            ss(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
            n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...R(this, $n).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Ff(t.queryKey, t)),
            t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
            t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.queryFn === _f && (t.enabled = !1),
            t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...R(this, $n).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        R(this, ge).clear(),
            R(this, zn).clear()
    }
}
    ,
    ge = new WeakMap,
    zn = new WeakMap,
    $n = new WeakMap,
    Li = new WeakMap,
    Oi = new WeakMap,
    Un = new WeakMap,
    Ii = new WeakMap,
    Fi = new WeakMap,
    Kg), Fk = x.createContext(void 0), _k = ({ client: e, children: t }) => (x.useEffect(() => (e.mount(),
        () => {
            e.unmount()
        }
    ), [e]),
        w.jsx(Fk.Provider, {
            value: e,
            children: t
        }));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function as() {
    return as = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        as.apply(this, arguments)
}
var Kn;
(function (e) {
    e.Pop = "POP",
        e.Push = "PUSH",
        e.Replace = "REPLACE"
}
)(Kn || (Kn = {}));
const lm = "popstate";
function Vk(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let { pathname: o, search: s, hash: a } = r.location;
        return ed("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : rl(i)
    }
    return zk(t, n, null, e)
}
function be(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Mx(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch { }
    }
}
function Bk() {
    return Math.random().toString(36).substr(2, 8)
}
function um(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function ed(e, t, n, r) {
    return n === void 0 && (n = null),
        as({
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: ""
        }, typeof t == "string" ? no(t) : t, {
            state: n,
            key: t && t.key || r || Bk()
        })
}
function rl(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
}
function no(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
            e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
            e = e.substr(0, r)),
            e && (t.pathname = e)
    }
    return t
}
function zk(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: o = !1 } = r
        , s = i.history
        , a = Kn.Pop
        , l = null
        , u = c();
    u == null && (u = 0,
        s.replaceState(as({}, s.state, {
            idx: u
        }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function d() {
        a = Kn.Pop;
        let S = c()
            , p = S == null ? null : S - u;
        u = S,
            l && l({
                action: a,
                location: g.location,
                delta: p
            })
    }
    function f(S, p) {
        a = Kn.Push;
        let m = ed(g.location, S, p);
        u = c() + 1;
        let y = um(m, u)
            , b = g.createHref(m);
        try {
            s.pushState(y, "", b)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            i.location.assign(b)
        }
        o && l && l({
            action: a,
            location: g.location,
            delta: 1
        })
    }
    function h(S, p) {
        a = Kn.Replace;
        let m = ed(g.location, S, p);
        u = c();
        let y = um(m, u)
            , b = g.createHref(m);
        s.replaceState(y, "", b),
            o && l && l({
                action: a,
                location: g.location,
                delta: 0
            })
    }
    function v(S) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href
            , m = typeof S == "string" ? S : rl(S);
        return m = m.replace(/ $/, "%20"),
            be(p, "No window.location.(origin|href) available to create URL for href: " + m),
            new URL(m, p)
    }
    let g = {
        get action() {
            return a
        },
        get location() {
            return e(i, s)
        },
        listen(S) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(lm, d),
                l = S,
                () => {
                    i.removeEventListener(lm, d),
                        l = null
                }
        },
        createHref(S) {
            return t(i, S)
        },
        createURL: v,
        encodeLocation(S) {
            let p = v(S);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: f,
        replace: h,
        go(S) {
            return s.go(S)
        }
    };
    return g
}
var cm;
(function (e) {
    e.data = "data",
        e.deferred = "deferred",
        e.redirect = "redirect",
        e.error = "error"
}
)(cm || (cm = {}));
function $k(e, t, n) {
    return n === void 0 && (n = "/"),
        Uk(e, t, n, !1)
}
function Uk(e, t, n, r) {
    let i = typeof t == "string" ? no(t) : t
        , o = Vf(i.pathname || "/", n);
    if (o == null)
        return null;
    let s = jx(e);
    Wk(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = t2(o);
        a = Jk(s[l], u, r)
    }
    return a
}
function jx(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let i = (o, s, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        l.relativePath.startsWith("/") && (be(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
            l.relativePath = l.relativePath.slice(r.length));
        let u = nr([r, l.relativePath])
            , c = n.concat(l);
        o.children && o.children.length > 0 && (be(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
            jx(o.children, t, c, u)),
            !(o.path == null && !o.index) && t.push({
                path: u,
                score: qk(u, o.index),
                routesMeta: c
            })
    }
        ;
    return e.forEach((o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
            i(o, s);
        else
            for (let l of Dx(o.path))
                i(o, s, l)
    }
    ),
        t
}
function Dx(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let [n, ...r] = t
        , i = n.endsWith("?")
        , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let s = Dx(r.join("/"))
        , a = [];
    return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))),
        i && a.push(...s),
        a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function Wk(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Zk(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Hk = /^:[\w-]+$/
    , Kk = 3
    , Gk = 2
    , Qk = 1
    , Xk = 10
    , Yk = -2
    , dm = e => e === "*";
function qk(e, t) {
    let n = e.split("/")
        , r = n.length;
    return n.some(dm) && (r += Yk),
        t && (r += Gk),
        n.filter(i => !dm(i)).reduce((i, o) => i + (Hk.test(o) ? Kk : o === "" ? Qk : Xk), r)
}
function Zk(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Jk(e, t, n) {
    let { routesMeta: r } = e
        , i = {}
        , o = "/"
        , s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
            , u = a === r.length - 1
            , c = o === "/" ? t : t.slice(o.length) || "/"
            , d = fm({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, c)
            , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = fm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
            !d)
            return null;
        Object.assign(i, d.params),
            s.push({
                params: i,
                pathname: nr([o, d.pathname]),
                pathnameBase: o2(nr([o, d.pathnameBase])),
                route: f
            }),
            d.pathnameBase !== "/" && (o = nr([o, d.pathnameBase]))
    }
    return s
}
function fm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = e2(e.path, e.caseSensitive, e.end)
        , i = t.match(n);
    if (!i)
        return null;
    let o = i[0]
        , s = o.replace(/(.)\/+$/, "$1")
        , a = i.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let { paramName: f, isOptional: h } = c;
            if (f === "*") {
                let g = a[d] || "";
                s = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const v = a[d];
            return h && !v ? u[f] = void 0 : u[f] = (v || "").replace(/%2F/g, "/"),
                u
        }
            , {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}
function e2(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Mx(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
        , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
        i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
        [new RegExp(i, t ? void 0 : "i"), r]
}
function t2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Mx(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
            e
    }
}
function Vf(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
        , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function n2(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? no(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : r2(n, t) : t,
        search: s2(r),
        hash: a2(i)
    }
}
function r2(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
        n.length > 1 ? n.join("/") : "/"
}
function Nu(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function i2(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Lx(e, t) {
    let n = i2(e);
    return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Ox(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = no(e) : (i = as({}, e),
        be(!i.pathname || !i.pathname.includes("?"), Nu("?", "pathname", "search", i)),
        be(!i.pathname || !i.pathname.includes("#"), Nu("#", "pathname", "hash", i)),
        be(!i.search || !i.search.includes("#"), Nu("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
    if (s == null)
        a = n;
    else {
        let d = t.length - 1;
        if (!r && s.startsWith("..")) {
            let f = s.split("/");
            for (; f[0] === "..";)
                f.shift(),
                    d -= 1;
            i.pathname = f.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = n2(i, a)
        , u = s && s !== "/" && s.endsWith("/")
        , c = (o || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
        l
}
const nr = e => e.join("/").replace(/\/\/+/g, "/")
    , o2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
    , s2 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
    , a2 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function l2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Ix = ["post", "put", "patch", "delete"];
new Set(Ix);
const u2 = ["get", ...Ix];
new Set(u2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ls() {
    return ls = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        ls.apply(this, arguments)
}
const Bf = x.createContext(null)
    , c2 = x.createContext(null)
    , Gr = x.createContext(null)
    , Bl = x.createContext(null)
    , Qr = x.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    })
    , Fx = x.createContext(null);
function d2(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    Ts() || be(!1);
    let { basename: r, navigator: i } = x.useContext(Gr)
        , { hash: o, pathname: s, search: a } = Vx(e, {
            relative: n
        })
        , l = s;
    return r !== "/" && (l = s === "/" ? r : nr([r, s])),
        i.createHref({
            pathname: l,
            search: a,
            hash: o
        })
}
function Ts() {
    return x.useContext(Bl) != null
}
function Es() {
    return Ts() || be(!1),
        x.useContext(Bl).location
}
function _x(e) {
    x.useContext(Gr).static || x.useLayoutEffect(e)
}
function Xr() {
    let { isDataRoute: e } = x.useContext(Qr);
    return e ? T2() : f2()
}
function f2() {
    Ts() || be(!1);
    let e = x.useContext(Bf)
        , { basename: t, future: n, navigator: r } = x.useContext(Gr)
        , { matches: i } = x.useContext(Qr)
        , { pathname: o } = Es()
        , s = JSON.stringify(Lx(i, n.v7_relativeSplatPath))
        , a = x.useRef(!1);
    return _x(() => {
        a.current = !0
    }
    ),
        x.useCallback(function (u, c) {
            if (c === void 0 && (c = {}),
                !a.current)
                return;
            if (typeof u == "number") {
                r.go(u);
                return
            }
            let d = Ox(u, JSON.parse(s), o, c.relative === "path");
            e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : nr([t, d.pathname])),
                (c.replace ? r.replace : r.push)(d, c.state, c)
        }, [t, r, s, o, e])
}
function Vx(e, t) {
    let { relative: n } = t === void 0 ? {} : t
        , { future: r } = x.useContext(Gr)
        , { matches: i } = x.useContext(Qr)
        , { pathname: o } = Es()
        , s = JSON.stringify(Lx(i, r.v7_relativeSplatPath));
    return x.useMemo(() => Ox(e, JSON.parse(s), o, n === "path"), [e, s, o, n])
}
function h2(e, t) {
    return p2(e, t)
}
function p2(e, t, n, r) {
    Ts() || be(!1);
    let { navigator: i } = x.useContext(Gr)
        , { matches: o } = x.useContext(Qr)
        , s = o[o.length - 1]
        , a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Es(), c;
    if (t) {
        var d;
        let S = typeof t == "string" ? no(t) : t;
        l === "/" || (d = S.pathname) != null && d.startsWith(l) || be(!1),
            c = S
    } else
        c = u;
    let f = c.pathname || "/"
        , h = f;
    if (l !== "/") {
        let S = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let v = $k(e, {
        pathname: h
    })
        , g = x2(v && v.map(S => Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: nr([l, i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname]),
            pathnameBase: S.pathnameBase === "/" ? l : nr([l, i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
        })), o, n, r);
    return t && g ? x.createElement(Bl.Provider, {
        value: {
            location: ls({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Kn.Pop
        }
    }, g) : g
}
function m2() {
    let e = C2()
        , t = l2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
        , n = e instanceof Error ? e.stack : null
        , i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: i
    }, n) : null, null)
}
const g2 = x.createElement(m2, null);
class y2 extends x.Component {
    constructor(t) {
        super(t),
            this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error
            }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(Qr.Provider, {
            value: this.props.routeContext
        }, x.createElement(Fx.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function v2(e) {
    let { routeContext: t, match: n, children: r } = e
        , i = x.useContext(Bf);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
        x.createElement(Qr.Provider, {
            value: t
        }, r)
}
function x2(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
        , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = s.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || be(!1),
            s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1
        , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
                d.route.id) {
                let { loaderData: f, errors: h } = n
                    , v = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || v) {
                    l = !0,
                        u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((c, d, f) => {
        let h, v = !1, g = null, S = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0,
            g = d.route.errorElement || g2,
            l && (u < 0 && f === 0 ? (v = !0,
                S = null) : u === f && (v = !0,
                    S = d.route.hydrateFallbackElement || null)));
        let p = t.concat(s.slice(0, f + 1))
            , m = () => {
                let y;
                return h ? y = g : v ? y = S : d.route.Component ? y = x.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = c,
                    x.createElement(v2, {
                        match: d,
                        routeContext: {
                            outlet: c,
                            matches: p,
                            isDataRoute: n != null
                        },
                        children: y
                    })
            }
            ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? x.createElement(y2, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: h,
            children: m(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : m()
    }
        , null)
}
var Bx = function (e) {
    return e.UseBlocker = "useBlocker",
        e.UseRevalidator = "useRevalidator",
        e.UseNavigateStable = "useNavigate",
        e
}(Bx || {})
    , il = function (e) {
        return e.UseBlocker = "useBlocker",
            e.UseLoaderData = "useLoaderData",
            e.UseActionData = "useActionData",
            e.UseRouteError = "useRouteError",
            e.UseNavigation = "useNavigation",
            e.UseRouteLoaderData = "useRouteLoaderData",
            e.UseMatches = "useMatches",
            e.UseRevalidator = "useRevalidator",
            e.UseNavigateStable = "useNavigate",
            e.UseRouteId = "useRouteId",
            e
    }(il || {});
function w2(e) {
    let t = x.useContext(Bf);
    return t || be(!1),
        t
}
function S2(e) {
    let t = x.useContext(c2);
    return t || be(!1),
        t
}
function b2(e) {
    let t = x.useContext(Qr);
    return t || be(!1),
        t
}
function zx(e) {
    let t = b2()
        , n = t.matches[t.matches.length - 1];
    return n.route.id || be(!1),
        n.route.id
}
function C2() {
    var e;
    let t = x.useContext(Fx)
        , n = S2(il.UseRouteError)
        , r = zx(il.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function T2() {
    let { router: e } = w2(Bx.UseNavigateStable)
        , t = zx(il.UseNavigateStable)
        , n = x.useRef(!1);
    return _x(() => {
        n.current = !0
    }
    ),
        x.useCallback(function (i, o) {
            o === void 0 && (o = {}),
                n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, ls({
                    fromRouteId: t
                }, o)))
        }, [e, t])
}
function E2(e, t) {
    e == null || e.v7_startTransition,
        e == null || e.v7_relativeSplatPath
}
function ln(e) {
    be(!1)
}
function P2(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: i = Kn.Pop, navigator: o, static: s = !1, future: a } = e;
    Ts() && be(!1);
    let l = t.replace(/^\/*/, "/")
        , u = x.useMemo(() => ({
            basename: l,
            navigator: o,
            static: s,
            future: ls({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, o, s]);
    typeof r == "string" && (r = no(r));
    let { pathname: c = "/", search: d = "", hash: f = "", state: h = null, key: v = "default" } = r
        , g = x.useMemo(() => {
            let S = Vf(c, l);
            return S == null ? null : {
                location: {
                    pathname: S,
                    search: d,
                    hash: f,
                    state: h,
                    key: v
                },
                navigationType: i
            }
        }
            , [l, c, d, f, h, v, i]);
    return g == null ? null : x.createElement(Gr.Provider, {
        value: u
    }, x.createElement(Bl.Provider, {
        children: n,
        value: g
    }))
}
function k2(e) {
    let { children: t, location: n } = e;
    return h2(td(t), n)
}
new Promise(() => { }
);
function td(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r, i) => {
        if (!x.isValidElement(r))
            return;
        let o = [...t, i];
        if (r.type === x.Fragment) {
            n.push.apply(n, td(r.props.children, o));
            return
        }
        r.type !== ln && be(!1),
            !r.props.index || !r.props.children || be(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = td(r.props.children, o)),
            n.push(s)
    }
    ),
        n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function nd() {
    return nd = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        nd.apply(this, arguments)
}
function R2(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
            !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function A2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function N2(e, t) {
    return e.button === 0 && (!t || t === "_self") && !A2(e)
}
const M2 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
    , j2 = "6";
try {
    window.__reactRouterVersion = j2
} catch { }
const D2 = "startTransition"
    , hm = iy[D2];
function L2(e) {
    let { basename: t, children: n, future: r, window: i } = e
        , o = x.useRef();
    o.current == null && (o.current = Vk({
        window: i,
        v5Compat: !0
    }));
    let s = o.current
        , [a, l] = x.useState({
            action: s.action,
            location: s.location
        })
        , { v7_startTransition: u } = r || {}
        , c = x.useCallback(d => {
            u && hm ? hm(() => l(d)) : l(d)
        }
            , [l, u]);
    return x.useLayoutEffect(() => s.listen(c), [s, c]),
        x.useEffect(() => E2(r), [r]),
        x.createElement(P2, {
            basename: t,
            children: n,
            location: a.location,
            navigationType: a.action,
            navigator: s,
            future: r
        })
}
const O2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
    , I2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
    , $x = x.forwardRef(function (t, n) {
        let { onClick: r, relative: i, reloadDocument: o, replace: s, state: a, target: l, to: u, preventScrollReset: c, viewTransition: d } = t, f = R2(t, M2), { basename: h } = x.useContext(Gr), v, g = !1;
        if (typeof u == "string" && I2.test(u) && (v = u,
            O2))
            try {
                let y = new URL(window.location.href)
                    , b = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u)
                    , C = Vf(b.pathname, h);
                b.origin === y.origin && C != null ? u = C + b.search + b.hash : g = !0
            } catch { }
        let S = d2(u, {
            relative: i
        })
            , p = F2(u, {
                replace: s,
                state: a,
                target: l,
                preventScrollReset: c,
                relative: i,
                viewTransition: d
            });
        function m(y) {
            r && r(y),
                y.defaultPrevented || p(y)
        }
        return x.createElement("a", nd({}, f, {
            href: v || S,
            onClick: g || o ? r : m,
            ref: n,
            target: l
        }))
    });
var pm;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration",
        e.UseSubmit = "useSubmit",
        e.UseSubmitFetcher = "useSubmitFetcher",
        e.UseFetcher = "useFetcher",
        e.useViewTransitionState = "useViewTransitionState"
}
)(pm || (pm = {}));
var mm;
(function (e) {
    e.UseFetcher = "useFetcher",
        e.UseFetchers = "useFetchers",
        e.UseScrollRestoration = "useScrollRestoration"
}
)(mm || (mm = {}));
function F2(e, t) {
    let { target: n, replace: r, state: i, preventScrollReset: o, relative: s, viewTransition: a } = t === void 0 ? {} : t
        , l = Xr()
        , u = Es()
        , c = Vx(e, {
            relative: s
        });
    return x.useCallback(d => {
        if (N2(d, n)) {
            d.preventDefault();
            let f = r !== void 0 ? r : rl(u) === rl(c);
            l(e, {
                replace: f,
                state: i,
                preventScrollReset: o,
                relative: s,
                viewTransition: a
            })
        }
    }
        , [u, l, c, r, i, n, e, o, s, a])
}
const zf = x.createContext({});
function $f(e) {
    const t = x.useRef(null);
    return t.current === null && (t.current = e()),
        t.current
}
const Ux = typeof window < "u"
    , Wx = Ux ? x.useLayoutEffect : x.useEffect
    , zl = x.createContext(null);
function Uf(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function ol(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const rn = (e, t, n) => n > t ? t : n < e ? e : n;
let $l = () => { }
    , Gi = () => { }
    ;
const Sn = {}
    , Hx = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Kx(e) {
    return typeof e == "object" && e !== null
}
const Gx = e => /^0[^.\s]+$/u.test(e);
function Qx(e) {
    let t;
    return () => (t === void 0 && (t = e()),
        t)
}
const yt = e => e
    , _2 = (e, t) => n => t(e(n))
    , Ps = (...e) => e.reduce(_2)
    , us = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    }
    ;
class Wf {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Uf(this.subscriptions, t),
            () => ol(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const vt = e => e * 1e3
    , mt = e => e / 1e3;
function Xx(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Yx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
    , V2 = 1e-7
    , B2 = 12;
function z2(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
            o = Yx(s, r, i) - e,
            o > 0 ? n = s : t = s;
    while (Math.abs(o) > V2 && ++a < B2);
    return s
}
function ks(e, t, n, r) {
    if (e === t && n === r)
        return yt;
    const i = o => z2(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : Yx(i(o), t, r)
}
const qx = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
    , Zx = e => t => 1 - e(1 - t)
    , Jx = ks(.33, 1.53, .69, .99)
    , Hf = Zx(Jx)
    , ew = qx(Hf)
    , tw = e => (e *= 2) < 1 ? .5 * Hf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
    , Kf = e => 1 - Math.sin(Math.acos(e))
    , nw = Zx(Kf)
    , rw = qx(Kf)
    , $2 = ks(.42, 0, 1, 1)
    , U2 = ks(0, 0, .58, 1)
    , iw = ks(.42, 0, .58, 1)
    , W2 = e => Array.isArray(e) && typeof e[0] != "number"
    , ow = e => Array.isArray(e) && typeof e[0] == "number"
    , gm = {
        linear: yt,
        easeIn: $2,
        easeInOut: iw,
        easeOut: U2,
        circIn: Kf,
        circInOut: rw,
        circOut: nw,
        backIn: Hf,
        backInOut: ew,
        backOut: Jx,
        anticipate: tw
    }
    , H2 = e => typeof e == "string"
    , ym = e => {
        if (ow(e)) {
            Gi(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            const [t, n, r, i] = e;
            return ks(t, n, r, i)
        } else if (H2(e))
            return Gi(gm[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
                gm[e];
        return e
    }
    , ra = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
    , vm = {
        value: null,
        addProjectionMetrics: null
    };
function K2(e, t) {
    let n = new Set
        , r = new Set
        , i = !1
        , o = !1;
    const s = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
        , l = 0;
    function u(d) {
        s.has(d) && (c.schedule(d),
            e()),
            l++,
            d(a)
    }
    const c = {
        schedule: (d, f = !1, h = !1) => {
            const g = h && i ? n : r;
            return f && s.add(d),
                g.has(d) || g.add(d),
                d
        }
        ,
        cancel: d => {
            r.delete(d),
                s.delete(d)
        }
        ,
        process: d => {
            if (a = d,
                i) {
                o = !0;
                return
            }
            i = !0,
                [n, r] = [r, n],
                n.forEach(u),
                t && vm.value && vm.value.frameloop[t].push(l),
                l = 0,
                n.clear(),
                i = !1,
                o && (o = !1,
                    c.process(d))
        }
    };
    return c
}
const G2 = 40;
function sw(e, t) {
    let n = !1
        , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
        , o = () => n = !0
        , s = ra.reduce((y, b) => (y[b] = K2(o, t ? b : void 0),
            y), {})
        , { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: v } = s
        , g = () => {
            const y = Sn.useManualTiming ? i.timestamp : performance.now();
            n = !1,
                Sn.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, G2), 1)),
                i.timestamp = y,
                i.isProcessing = !0,
                a.process(i),
                l.process(i),
                u.process(i),
                c.process(i),
                d.process(i),
                f.process(i),
                h.process(i),
                v.process(i),
                i.isProcessing = !1,
                n && t && (r = !1,
                    e(g))
        }
        , S = () => {
            n = !0,
                r = !0,
                i.isProcessing || e(g)
        }
        ;
    return {
        schedule: ra.reduce((y, b) => {
            const C = s[b];
            return y[b] = (T, E = !1, P = !1) => (n || S(),
                C.schedule(T, E, P)),
                y
        }
            , {}),
        cancel: y => {
            for (let b = 0; b < ra.length; b++)
                s[ra[b]].cancel(y)
        }
        ,
        state: i,
        steps: s
    }
}
const { schedule: oe, cancel: ur, state: Ne, steps: Mu } = sw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : yt, !0);
let ba;
function Q2() {
    ba = void 0
}
const We = {
    now: () => (ba === void 0 && We.set(Ne.isProcessing || Sn.useManualTiming ? Ne.timestamp : performance.now()),
        ba),
    set: e => {
        ba = e,
            queueMicrotask(Q2)
    }
}
    , aw = e => t => typeof t == "string" && t.startsWith(e)
    , lw = aw("--")
    , X2 = aw("var(--")
    , Gf = e => X2(e) ? Y2.test(e.split("/*")[0].trim()) : !1
    , Y2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function xm(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const ro = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
    , cs = {
        ...ro,
        transform: e => rn(0, 1, e)
    }
    , ia = {
        ...ro,
        default: 1
    }
    , Io = e => Math.round(e * 1e5) / 1e5
    , Qf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function q2(e) {
    return e == null
}
const Z2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
    , Xf = (e, t) => n => !!(typeof n == "string" && Z2.test(n) && n.startsWith(e) || t && !q2(n) && Object.prototype.hasOwnProperty.call(n, t))
    , uw = (e, t, n) => r => {
        if (typeof r != "string")
            return r;
        const [i, o, s, a] = r.match(Qf);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    }
    , J2 = e => rn(0, 255, e)
    , ju = {
        ...ro,
        transform: e => Math.round(J2(e))
    }
    , Pr = {
        test: Xf("rgb", "red"),
        parse: uw("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ju.transform(e) + ", " + ju.transform(t) + ", " + ju.transform(n) + ", " + Io(cs.transform(r)) + ")"
    };
function eR(e) {
    let t = ""
        , n = ""
        , r = ""
        , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
        n = e.substring(3, 5),
        r = e.substring(5, 7),
        i = e.substring(7, 9)) : (t = e.substring(1, 2),
            n = e.substring(2, 3),
            r = e.substring(3, 4),
            i = e.substring(4, 5),
            t += t,
            n += n,
            r += r,
            i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const rd = {
    test: Xf("#"),
    parse: eR,
    transform: Pr.transform
}
    , Rs = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    })
    , Dn = Rs("deg")
    , en = Rs("%")
    , V = Rs("px")
    , tR = Rs("vh")
    , nR = Rs("vw")
    , wm = {
        ...en,
        parse: e => en.parse(e) / 100,
        transform: e => en.transform(e * 100)
    }
    , gi = {
        test: Xf("hsl", "hue"),
        parse: uw("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + en.transform(Io(t)) + ", " + en.transform(Io(n)) + ", " + Io(cs.transform(r)) + ")"
    }
    , we = {
        test: e => Pr.test(e) || rd.test(e) || gi.test(e),
        parse: e => Pr.test(e) ? Pr.parse(e) : gi.test(e) ? gi.parse(e) : rd.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Pr.transform(e) : gi.transform(e),
        getAnimatableNone: e => {
            const t = we.parse(e);
            return t.alpha = 0,
                we.transform(t)
        }
    }
    , rR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function iR(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Qf)) == null ? void 0 : t.length) || 0) + (((n = e.match(rR)) == null ? void 0 : n.length) || 0) > 0
}
const cw = "number"
    , dw = "color"
    , oR = "var"
    , sR = "var("
    , Sm = "${}"
    , aR = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ds(e) {
    const t = e.toString()
        , n = []
        , r = {
            color: [],
            number: [],
            var: []
        }
        , i = [];
    let o = 0;
    const a = t.replace(aR, l => (we.test(l) ? (r.color.push(o),
        i.push(dw),
        n.push(we.parse(l))) : l.startsWith(sR) ? (r.var.push(o),
            i.push(oR),
            n.push(l)) : (r.number.push(o),
                i.push(cw),
                n.push(parseFloat(l))),
        ++o,
        Sm)).split(Sm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function fw(e) {
    return ds(e).values
}
function hw(e) {
    const { split: t, types: n } = ds(e)
        , r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s],
                i[s] !== void 0) {
                const a = n[s];
                a === cw ? o += Io(i[s]) : a === dw ? o += we.transform(i[s]) : o += i[s]
            }
        return o
    }
}
const lR = e => typeof e == "number" ? 0 : we.test(e) ? we.getAnimatableNone(e) : e;
function uR(e) {
    const t = fw(e);
    return hw(e)(t.map(lR))
}
const Ft = {
    test: iR,
    parse: fw,
    createTransformer: hw,
    getAnimatableNone: uR
};
function Du(e, t, n) {
    return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function cR({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360,
        t /= 100,
        n /= 100;
    let i = 0
        , o = 0
        , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
            , l = 2 * n - a;
        i = Du(l, a, e + 1 / 3),
            o = Du(l, a, e),
            s = Du(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
function sl(e, t) {
    return n => n > 0 ? t : e
}
const he = (e, t, n) => e + (t - e) * n
    , Lu = (e, t, n) => {
        const r = e * e
            , i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    }
    , dR = [rd, Pr, gi]
    , fR = e => dR.find(t => t.test(e));
function bm(e) {
    const t = fR(e);
    if ($l(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
        !t)
        return !1;
    let n = t.parse(e);
    return t === gi && (n = cR(n)),
        n
}
const Cm = (e, t) => {
    const n = bm(e)
        , r = bm(t);
    if (!n || !r)
        return sl(e, t);
    const i = {
        ...n
    };
    return o => (i.red = Lu(n.red, r.red, o),
        i.green = Lu(n.green, r.green, o),
        i.blue = Lu(n.blue, r.blue, o),
        i.alpha = he(n.alpha, r.alpha, o),
        Pr.transform(i))
}
    , id = new Set(["none", "hidden"]);
function hR(e, t) {
    return id.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function pR(e, t) {
    return n => he(e, t, n)
}
function Yf(e) {
    return typeof e == "number" ? pR : typeof e == "string" ? Gf(e) ? sl : we.test(e) ? Cm : yR : Array.isArray(e) ? pw : typeof e == "object" ? we.test(e) ? Cm : mR : sl
}
function pw(e, t) {
    const n = [...e]
        , r = n.length
        , i = e.map((o, s) => Yf(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
function mR(e, t) {
    const n = {
        ...e,
        ...t
    }
        , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Yf(e[i])(e[i], t[i]));
    return i => {
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
function gR(e, t) {
    const n = []
        , r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let i = 0; i < t.values.length; i++) {
        const o = t.types[i]
            , s = e.indexes[o][r[o]]
            , a = e.values[s] ?? 0;
        n[i] = a,
            r[o]++
    }
    return n
}
const yR = (e, t) => {
    const n = Ft.createTransformer(t)
        , r = ds(e)
        , i = ds(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? id.has(e) && !i.values.length || id.has(t) && !r.values.length ? hR(e, t) : Ps(pw(gR(r, i), i.values), n) : ($l(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
        sl(e, t))
}
    ;
function mw(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? he(e, t, n) : Yf(e)(e, t)
}
const vR = e => {
    const t = ({ timestamp: n }) => e(n);
    return {
        start: (n = !0) => oe.update(t, n),
        stop: () => ur(t),
        now: () => Ne.isProcessing ? Ne.timestamp : We.now()
    }
}
    , gw = (e, t, n = 10) => {
        let r = "";
        const i = Math.max(Math.round(t / n), 2);
        for (let o = 0; o < i; o++)
            r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0, r.length - 2)})`
    }
    , al = 2e4;
function qf(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < al;)
        t += n,
            r = e.next(t);
    return t >= al ? 1 / 0 : t
}
function xR(e, t = 100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
        , i = Math.min(qf(r), al);
    return {
        type: "keyframes",
        ease: o => r.next(i * o).value / t,
        duration: mt(i)
    }
}
const wR = 5;
function yw(e, t, n) {
    const r = Math.max(t - wR, 0);
    return Xx(n - e(r), t - r)
}
const de = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
    , Ou = .001;
function SR({ duration: e = de.duration, bounce: t = de.bounce, velocity: n = de.velocity, mass: r = de.mass }) {
    let i, o;
    $l(e <= vt(de.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let s = 1 - t;
    s = rn(de.minDamping, de.maxDamping, s),
        e = rn(de.minDuration, de.maxDuration, mt(e)),
        s < 1 ? (i = u => {
            const c = u * s
                , d = c * e
                , f = c - n
                , h = od(u, s)
                , v = Math.exp(-d);
            return Ou - f / h * v
        }
            ,
            o = u => {
                const d = u * s * e
                    , f = d * n + n
                    , h = Math.pow(s, 2) * Math.pow(u, 2) * e
                    , v = Math.exp(-d)
                    , g = od(Math.pow(u, 2), s);
                return (-i(u) + Ou > 0 ? -1 : 1) * ((f - h) * v) / g
            }
        ) : (i = u => {
            const c = Math.exp(-u * e)
                , d = (u - n) * e + 1;
            return -Ou + c * d
        }
            ,
            o = u => {
                const c = Math.exp(-u * e)
                    , d = (n - u) * (e * e);
                return c * d
            }
        );
    const a = 5 / e
        , l = CR(i, o, a);
    if (e = vt(e),
        isNaN(l))
        return {
            stiffness: de.stiffness,
            damping: de.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const bR = 12;
function CR(e, t, n) {
    let r = n;
    for (let i = 1; i < bR; i++)
        r = r - e(r) / t(r);
    return r
}
function od(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const TR = ["duration", "bounce"]
    , ER = ["stiffness", "damping", "mass"];
function Tm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function PR(e) {
    let t = {
        velocity: de.velocity,
        stiffness: de.stiffness,
        damping: de.damping,
        mass: de.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Tm(e, ER) && Tm(e, TR))
        if (t.velocity = 0,
            e.visualDuration) {
            const n = e.visualDuration
                , r = 2 * Math.PI / (n * 1.2)
                , i = r * r
                , o = 2 * rn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: de.mass,
                stiffness: i,
                damping: o
            }
        } else {
            const n = SR({
                ...e,
                velocity: 0
            });
            t = {
                ...t,
                ...n,
                mass: de.mass
            },
                t.isResolvedFromDuration = !0
        }
    return t
}
function ll(e = de.visualDuration, t = de.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let { restSpeed: r, restDelta: i } = n;
    const o = n.keyframes[0]
        , s = n.keyframes[n.keyframes.length - 1]
        , a = {
            done: !1,
            value: o
        }
        , { stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h } = PR({
            ...n,
            velocity: -mt(n.velocity || 0)
        })
        , v = f || 0
        , g = u / (2 * Math.sqrt(l * c))
        , S = s - o
        , p = mt(Math.sqrt(l / c))
        , m = Math.abs(S) < 5;
    r || (r = m ? de.restSpeed.granular : de.restSpeed.default),
        i || (i = m ? de.restDelta.granular : de.restDelta.default);
    let y;
    if (g < 1) {
        const C = od(p, g);
        y = T => {
            const E = Math.exp(-g * p * T);
            return s - E * ((v + g * p * S) / C * Math.sin(C * T) + S * Math.cos(C * T))
        }
    } else if (g === 1)
        y = C => s - Math.exp(-p * C) * (S + (v + p * S) * C);
    else {
        const C = p * Math.sqrt(g * g - 1);
        y = T => {
            const E = Math.exp(-g * p * T)
                , P = Math.min(C * T, 300);
            return s - E * ((v + g * p * S) * Math.sinh(P) + C * S * Math.cosh(P)) / C
        }
    }
    const b = {
        calculatedDuration: h && d || null,
        next: C => {
            const T = y(C);
            if (h)
                a.done = C >= d;
            else {
                let E = C === 0 ? v : 0;
                g < 1 && (E = C === 0 ? vt(v) : yw(y, C, T));
                const P = Math.abs(E) <= r
                    , N = Math.abs(s - T) <= i;
                a.done = P && N
            }
            return a.value = a.done ? s : T,
                a
        }
        ,
        toString: () => {
            const C = Math.min(qf(b), al)
                , T = gw(E => b.next(C * E).value, C, 30);
            return C + "ms " + T
        }
        ,
        toTransition: () => { }
    };
    return b
}
ll.applyToOptions = e => {
    const t = xR(e, 100, ll);
    return e.ease = t.ease,
        e.duration = vt(t.duration),
        e.type = "keyframes",
        e
}
    ;
function sd({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = .5, restSpeed: c }) {
    const d = e[0]
        , f = {
            done: !1,
            value: d
        }
        , h = P => a !== void 0 && P < a || l !== void 0 && P > l
        , v = P => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
    let g = n * t;
    const S = d + g
        , p = s === void 0 ? S : s(S);
    p !== S && (g = p - d);
    const m = P => -g * Math.exp(-P / r)
        , y = P => p + m(P)
        , b = P => {
            const N = m(P)
                , M = y(P);
            f.done = Math.abs(N) <= u,
                f.value = f.done ? p : M
        }
        ;
    let C, T;
    const E = P => {
        h(f.value) && (C = P,
            T = ll({
                keyframes: [f.value, v(f.value)],
                velocity: yw(y, P, f.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c
            }))
    }
        ;
    return E(0),
    {
        calculatedDuration: null,
        next: P => {
            let N = !1;
            return !T && C === void 0 && (N = !0,
                b(P),
                E(P)),
                C !== void 0 && P >= C ? T.next(P - C) : (!N && b(P),
                    f)
        }
    }
}
function kR(e, t, n) {
    const r = []
        , i = n || Sn.mix || mw
        , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || yt : t;
            a = Ps(l, a)
        }
        r.push(a)
    }
    return r
}
function RR(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if (Gi(o === t.length, "Both input and output ranges must be the same length", "range-length"),
        o === 1)
        return () => t[0];
    if (o === 2 && t[0] === t[1])
        return () => t[1];
    const s = e[0] === e[1];
    e[0] > e[o - 1] && (e = [...e].reverse(),
        t = [...t].reverse());
    const a = kR(t, r, i)
        , l = a.length
        , u = c => {
            if (s && c < e[0])
                return t[0];
            let d = 0;
            if (l > 1)
                for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                    ;
            const f = us(e[d], e[d + 1], c);
            return a[d](f)
        }
        ;
    return n ? c => u(rn(e[0], e[o - 1], c)) : u
}
function AR(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = us(0, t, r);
        e.push(he(n, 1, i))
    }
}
function NR(e) {
    const t = [0];
    return AR(t, e.length - 1),
        t
}
function MR(e, t) {
    return e.map(n => n * t)
}
function jR(e, t) {
    return e.map(() => t || iw).splice(0, e.length - 1)
}
function Fo({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = W2(r) ? r.map(ym) : ym(r)
        , o = {
            done: !1,
            value: t[0]
        }
        , s = MR(n && n.length === t.length ? n : NR(t), e)
        , a = RR(s, t, {
            ease: Array.isArray(i) ? i : jR(t, i)
        });
    return {
        calculatedDuration: e,
        next: l => (o.value = a(l),
            o.done = l >= e,
            o)
    }
}
const DR = e => e !== null;
function Zf(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
    const o = e.filter(DR)
        , a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
    return !a || r === void 0 ? o[a] : r
}
const LR = {
    decay: sd,
    inertia: sd,
    tween: Fo,
    keyframes: Fo,
    spring: ll
};
function vw(e) {
    typeof e.type == "string" && (e.type = LR[e.type])
}
class Jf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const OR = e => e / 100;
class eh extends Jf {
    constructor(t) {
        super(),
            this.state = "idle",
            this.startTime = null,
            this.isStopped = !1,
            this.currentTime = 0,
            this.holdTime = null,
            this.playbackSpeed = 1,
            this.stop = () => {
                var r, i;
                const { motionValue: n } = this.options;
                n && n.updatedAt !== We.now() && this.tick(We.now()),
                    this.isStopped = !0,
                    this.state !== "idle" && (this.teardown(),
                        (i = (r = this.options).onStop) == null || i.call(r))
            }
            ,
            this.options = t,
            this.initAnimation(),
            this.play(),
            t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const { options: t } = this;
        vw(t);
        const { type: n = Fo, repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = t;
        let { keyframes: a } = t;
        const l = n || Fo;
        l !== Fo && typeof a[0] != "number" && (this.mixKeyframes = Ps(OR, mw(a[0], a[1])),
            a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        o === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -s
        })),
            u.calculatedDuration === null && (u.calculatedDuration = qf(u));
        const { calculatedDuration: c } = u;
        this.calculatedDuration = c,
            this.resolvedDuration = c + i,
            this.totalDuration = this.resolvedDuration * (r + 1) - i,
            this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n = !1) {
        const { generator: r, totalDuration: i, mixKeyframes: o, mirroredGenerator: s, resolvedDuration: a, calculatedDuration: l } = this;
        if (this.startTime === null)
            return r.next(0);
        const { delay: u = 0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: v, onUpdate: g, finalKeyframe: S } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
            n ? this.currentTime = t : this.updateTime(t);
        const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
            , m = this.playbackSpeed >= 0 ? p < 0 : p > i;
        this.currentTime = Math.max(p, 0),
            this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let y = this.currentTime
            , b = r;
        if (d) {
            const P = Math.min(this.currentTime, i) / a;
            let N = Math.floor(P)
                , M = P % 1;
            !M && P >= 1 && (M = 1),
                M === 1 && N--,
                N = Math.min(N, d + 1),
                !!(N % 2) && (f === "reverse" ? (M = 1 - M,
                    h && (M -= h / a)) : f === "mirror" && (b = s)),
                y = rn(0, 1, M) * a
        }
        const C = m ? {
            done: !1,
            value: c[0]
        } : b.next(y);
        o && (C.value = o(C.value));
        let { done: T } = C;
        !m && l !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
        return E && v !== sd && (C.value = Zf(c, this.options, S, this.speed)),
            g && g(C.value),
            E && this.finish(),
            C
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return mt(this.calculatedDuration)
    }
    get iterationDuration() {
        const { delay: t = 0 } = this.options || {};
        return this.duration + mt(t)
    }
    get time() {
        return mt(this.currentTime)
    }
    set time(t) {
        var n;
        t = vt(t),
            this.currentTime = t,
            this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
            (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(We.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
            n && (this.time = mt(this.currentTime))
    }
    play() {
        var i, o;
        if (this.isStopped)
            return;
        const { driver: t = vR, startTime: n } = this.options;
        this.driver || (this.driver = t(s => this.tick(s))),
            (o = (i = this.options).onPlay) == null || o.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
            this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
            this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
            this.holdTime = null,
            this.state = "running",
            this.driver.start()
    }
    pause() {
        this.state = "paused",
            this.updateTime(We.now()),
            this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
            this.state = "finished",
            this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
            this.teardown(),
            this.state = "finished",
            (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
            this.startTime = 0,
            this.tick(0),
            this.teardown(),
            (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
            this.stopDriver(),
            this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
            this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
            this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
            this.options.ease = "linear",
            this.initAnimation()),
            (n = this.driver) == null || n.stop(),
            t.observe(this)
    }
}
function IR(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const kr = e => e * 180 / Math.PI
    , ad = e => {
        const t = kr(Math.atan2(e[1], e[0]));
        return ld(t)
    }
    , FR = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: ad,
        rotateZ: ad,
        skewX: e => kr(Math.atan(e[1])),
        skewY: e => kr(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    }
    , ld = e => (e = e % 360,
        e < 0 && (e += 360),
        e)
    , Em = ad
    , Pm = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
    , km = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
    , _R = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Pm,
        scaleY: km,
        scale: e => (Pm(e) + km(e)) / 2,
        rotateX: e => ld(kr(Math.atan2(e[6], e[5]))),
        rotateY: e => ld(kr(Math.atan2(-e[2], e[0]))),
        rotateZ: Em,
        rotate: Em,
        skewX: e => kr(Math.atan(e[4])),
        skewY: e => kr(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };
function ud(e) {
    return e.includes("scale") ? 1 : 0
}
function cd(e, t) {
    if (!e || e === "none")
        return ud(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n)
        r = _R,
            i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = FR,
            i = a
    }
    if (!i)
        return ud(t);
    const o = r[t]
        , s = i[1].split(",").map(BR);
    return typeof o == "function" ? o(s) : s[o]
}
const VR = (e, t) => {
    const { transform: n = "none" } = getComputedStyle(e);
    return cd(n, t)
}
    ;
function BR(e) {
    return parseFloat(e.trim())
}
const io = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
    , oo = new Set(io)
    , Rm = e => e === ro || e === V
    , zR = new Set(["x", "y", "z"])
    , $R = io.filter(e => !zR.has(e));
function UR(e) {
    const t = [];
    return $R.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
            r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
        t
}
const Gn = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: (e, { transform: t }) => cd(t, "x"),
    y: (e, { transform: t }) => cd(t, "y")
};
Gn.translateX = Gn.x;
Gn.translateY = Gn.y;
const Fr = new Set;
let dd = !1
    , fd = !1
    , hd = !1;
function xw() {
    if (fd) {
        const e = Array.from(Fr).filter(r => r.needsMeasurement)
            , t = new Set(e.map(r => r.element))
            , n = new Map;
        t.forEach(r => {
            const i = UR(r);
            i.length && (n.set(r, i),
                r.render())
        }
        ),
            e.forEach(r => r.measureInitialState()),
            t.forEach(r => {
                r.render();
                const i = n.get(r);
                i && i.forEach(([o, s]) => {
                    var a;
                    (a = r.getValue(o)) == null || a.set(s)
                }
                )
            }
            ),
            e.forEach(r => r.measureEndState()),
            e.forEach(r => {
                r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
            }
            )
    }
    fd = !1,
        dd = !1,
        Fr.forEach(e => e.complete(hd)),
        Fr.clear()
}
function ww() {
    Fr.forEach(e => {
        e.readKeyframes(),
            e.needsMeasurement && (fd = !0)
    }
    )
}
function WR() {
    hd = !0,
        ww(),
        xw(),
        hd = !1
}
class th {
    constructor(t, n, r, i, o, s = !1) {
        this.state = "pending",
            this.isAsync = !1,
            this.needsMeasurement = !1,
            this.unresolvedKeyframes = [...t],
            this.onComplete = n,
            this.name = r,
            this.motionValue = i,
            this.element = o,
            this.isAsync = s
    }
    scheduleResolve() {
        this.state = "scheduled",
            this.isAsync ? (Fr.add(this),
                dd || (dd = !0,
                    oe.read(ww),
                    oe.resolveKeyframes(xw))) : (this.readKeyframes(),
                        this.complete())
    }
    readKeyframes() {
        const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
        if (t[0] === null) {
            const o = i == null ? void 0 : i.get()
                , s = t[t.length - 1];
            if (o !== void 0)
                t[0] = o;
            else if (r && n) {
                const a = r.readValue(n, s);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = s),
                i && o === void 0 && i.set(t[0])
        }
        IR(t)
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete(t = !1) {
        this.state = "complete",
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            Fr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Fr.delete(this),
            this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const HR = e => e.startsWith("--");
function KR(e, t, n) {
    HR(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const GR = {};
function Sw(e, t) {
    const n = Qx(e);
    return () => GR[t] ?? n()
}
const QR = Sw(() => window.ScrollTimeline !== void 0, "scrollTimeline")
    , bw = Sw(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }
        , "linearEasing")
    , Eo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
    , Am = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Eo([0, .65, .55, 1]),
        circOut: Eo([.55, 0, 1, .45]),
        backIn: Eo([.31, .01, .66, -.59]),
        backOut: Eo([.33, 1.53, .69, .99])
    };
function Cw(e, t) {
    if (e)
        return typeof e == "function" ? bw() ? gw(e, t) : "ease-out" : ow(e) ? Eo(e) : Array.isArray(e) ? e.map(n => Cw(n, t) || Am.easeOut) : Am[e]
}
function XR(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = Cw(a, i);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
        e.animate(c, f)
}
function Tw(e) {
    return typeof e == "function" && "applyToOptions" in e
}
function YR({ type: e, ...t }) {
    return Tw(e) && bw() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
        t.ease ?? (t.ease = "easeOut"),
        t)
}
class Ew extends Jf {
    constructor(t) {
        if (super(),
            this.finishedTime = null,
            this.isStopped = !1,
            this.manualStartTime = null,
            !t)
            return;
        const { element: n, name: r, keyframes: i, pseudoElement: o, allowFlatten: s = !1, finalKeyframe: a, onComplete: l } = t;
        this.isPseudoElement = !!o,
            this.allowFlatten = s,
            this.options = t,
            Gi(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = YR(t);
        this.animation = XR(n, r, i, u, o),
            u.autoplay === !1 && this.animation.pause(),
            this.animation.onfinish = () => {
                if (this.finishedTime = this.time,
                    !o) {
                    const c = Zf(i, this.options, a, this.speed);
                    this.updateMotionValue ? this.updateMotionValue(c) : KR(n, r, c),
                        this.animation.cancel()
                }
                l == null || l(),
                    this.notifyFinished()
            }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
            this.animation.play(),
            this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch { }
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const { state: t } = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
            this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, i;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((i = (r = this.animation).commitStyles) == null || i.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return mt(Number(t))
    }
    get iterationDuration() {
        const { delay: t = 0 } = this.options || {};
        return this.duration + mt(t)
    }
    get time() {
        return mt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.manualStartTime = null,
            this.finishedTime = null,
            this.animation.currentTime = vt(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
            this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({ timeline: t, observe: n }) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
            this.animation.onfinish = null,
            t && QR() ? (this.animation.timeline = t,
                yt) : n(this)
    }
}
const Pw = {
    anticipate: tw,
    backInOut: ew,
    circInOut: rw
};
function qR(e) {
    return e in Pw
}
function ZR(e) {
    typeof e.ease == "string" && qR(e.ease) && (e.ease = Pw[e.ease])
}
const Iu = 10;
class JR extends Ew {
    constructor(t) {
        ZR(t),
            vw(t),
            super(t),
            t.startTime !== void 0 && (this.startTime = t.startTime),
            this.options = t
    }
    updateMotionValue(t) {
        const { motionValue: n, onUpdate: r, onComplete: i, element: o, ...s } = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new eh({
            ...s,
            autoplay: !1
        })
            , l = Math.max(Iu, We.now() - this.startTime)
            , u = rn(0, Iu, l - Iu);
        n.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u),
            a.stop()
    }
}
const Nm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ft.test(e) || e === "0") && !e.startsWith("url("));
function eA(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function tA(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const o = e[e.length - 1]
        , s = Nm(i, t)
        , a = Nm(o, t);
    return $l(s === a, `You are trying to animate ${t} from "${i}" to "${o}". "${s ? o : i}" is not an animatable value.`, "value-not-animatable"),
        !s || !a ? !1 : eA(e) || (n === "spring" || Tw(n)) && r
}
function pd(e) {
    e.duration = 0,
        e.type = "keyframes"
}
const nA = new Set(["opacity", "clipPath", "filter", "transform"])
    , rA = Qx(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function iA(e) {
    var c;
    const { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: s } = e;
    if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current) instanceof HTMLElement))
        return !1;
    const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
    return rA() && n && nA.has(n) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && o !== 0 && s !== "inertia"
}
const oA = 40;
class sA extends Jf {
    constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", keyframes: a, name: l, motionValue: u, element: c, ...d }) {
        var v;
        super(),
            this.stop = () => {
                var g, S;
                this._animation && (this._animation.stop(),
                    (g = this.stopTimeline) == null || g.call(this)),
                    (S = this.keyframeResolver) == null || S.cancel()
            }
            ,
            this.createdAt = We.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            name: l,
            motionValue: u,
            element: c,
            ...d
        }
            , h = (c == null ? void 0 : c.KeyframeResolver) || th;
        this.keyframeResolver = new h(a, (g, S, p) => this.onKeyframesResolved(g, S, f, !p), l, u, c),
            (v = this.keyframeResolver) == null || v.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        var S, p;
        this.keyframeResolver = void 0;
        const { name: o, type: s, velocity: a, delay: l, isHandoff: u, onUpdate: c } = r;
        this.resolvedAt = We.now(),
            tA(t, o, s, a) || ((Sn.instantAnimations || !l) && (c == null || c(Zf(t, r, n))),
                t[0] = t[t.length - 1],
                pd(r),
                r.repeat = 0);
        const f = {
            startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > oA ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
            , h = !u && iA(f)
            , v = (p = (S = f.motionValue) == null ? void 0 : S.owner) == null ? void 0 : p.current
            , g = h ? new JR({
                ...f,
                element: v
            }) : new eh(f);
        g.finished.then(() => {
            this.notifyFinished()
        }
        ).catch(yt),
            this.pendingTimeline && (this.stopTimeline = g.attachTimeline(this.pendingTimeline),
                this.pendingTimeline = void 0),
            this._animation = g
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then(() => { }
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
            WR()),
            this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
            () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
            (t = this.keyframeResolver) == null || t.cancel()
    }
}
function kw(e, t, n, r = 0, i = 1) {
    const o = Array.from(e).sort((u, c) => u.sortNodePosition(c)).indexOf(t)
        , s = e.size
        , a = (s - 1) * r;
    return typeof n == "function" ? n(o, s) : i === 1 ? o * r : a - o * r
}
const aA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function lA(e) {
    const t = aA.exec(e);
    if (!t)
        return [,];
    const [, n, r, i] = t;
    return [`--${n ?? r}`, i]
}
const uA = 4;
function Rw(e, t, n = 1) {
    Gi(n <= uA, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r, i] = lA(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return Hx(s) ? parseFloat(s) : s
    }
    return Gf(i) ? Rw(i, t, n + 1) : i
}
const cA = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
    , dA = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    })
    , fA = {
        type: "keyframes",
        duration: .8
    }
    , hA = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }
    , pA = (e, { keyframes: t }) => t.length > 2 ? fA : oo.has(e) ? e.startsWith("scale") ? dA(t[1]) : cA : hA
    , mA = e => e !== null;
function gA(e, { repeat: t, repeatType: n = "loop" }, r) {
    const i = e.filter(mA)
        , o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
function Aw(e, t) {
    if (e != null && e.inherit && t) {
        const { inherit: n, ...r } = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function nh(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? Aw(n, e) : n
}
function yA({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length
}
const rh = (e, t, n, r = {}, i, o) => s => {
    const a = nh(r, e) || {}
        , l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - vt(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
                a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            s(),
                a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    yA(a) || Object.assign(c, pA(e, c)),
        c.duration && (c.duration = vt(c.duration)),
        c.repeatDelay && (c.repeatDelay = vt(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (pd(c),
        c.delay === 0 && (d = !0)),
        (Sn.instantAnimations || Sn.skipAnimations || i != null && i.shouldSkipAnimations) && (d = !0,
            pd(c),
            c.delay = 0),
        c.allowFlatten = !a.type && !a.ease,
        d && !o && t.get() !== void 0) {
        const f = gA(c.keyframes, a);
        if (f !== void 0) {
            oe.update(() => {
                c.onUpdate(f),
                    c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new eh(c) : new sA(c)
}
    ;
function Mm(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(),
            t[1][r] = n.getVelocity()
    }
    ),
        t
}
function ih(e, t, n, r) {
    if (typeof t == "function") {
        const [i, o] = Mm(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function") {
        const [i, o] = Mm(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}
function Ai(e, t, n) {
    const r = e.getProps();
    return ih(r, t, n !== void 0 ? n : r.custom, e)
}
const Nw = new Set(["width", "height", "top", "left", "right", "bottom", ...io])
    , jm = 30
    , vA = e => !isNaN(parseFloat(e));
class xA {
    constructor(t, n = {}) {
        this.canTrackVelocity = null,
            this.events = {},
            this.updateAndNotify = r => {
                var o;
                const i = We.now();
                if (this.updatedAt !== i && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(r),
                    this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current),
                        this.dependents))
                    for (const s of this.dependents)
                        s.dirty()
            }
            ,
            this.hasAnimated = !1,
            this.setCurrent(t),
            this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
            this.updatedAt = We.now(),
            this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = vA(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t,
            this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Wf);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
                oe.read(() => {
                    this.events.change.getSize() || this.stop()
                }
                )
        }
            : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
            this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
            this.prev = void 0,
            this.prevFrameValue = t,
            this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t),
            this.prev = t,
            this.prevUpdatedAt = this.prevFrameValue = void 0,
            n && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
            this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = We.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > jm)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, jm);
        return Xx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
            new Promise(n => {
                this.hasAnimated = !0,
                    this.animation = t(n),
                    this.events.animationStart && this.events.animationStart.notify()
            }
            ).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
            }
            )
    }
    stop() {
        this.animation && (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
            (n = this.events.destroy) == null || n.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Qi(e, t) {
    return new xA(e, t)
}
const md = e => Array.isArray(e);
function wA(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Qi(n))
}
function SA(e) {
    return md(e) ? e[e.length - 1] || 0 : e
}
function bA(e, t) {
    const n = Ai(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const a = SA(o[s]);
        wA(e, s, a)
    }
}
const Ve = e => !!(e && e.getVelocity);
function CA(e) {
    return !!(Ve(e) && e.add)
}
function gd(e, t) {
    const n = e.getValue("willChange");
    if (CA(n))
        return n.add(t);
    if (!n && Sn.WillChange) {
        const r = new Sn.WillChange("auto");
        e.addValue("willChange", r),
            r.add(t)
    }
}
function oh(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const TA = "framerAppearId"
    , Mw = "data-" + oh(TA);
function jw(e) {
    return e.props[Mw]
}
function EA({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
        r
}
function Dw(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    let { transition: o, transitionEnd: s, ...a } = t;
    const l = e.getDefaultTransition();
    o = o ? Aw(o, l) : l;
    const u = o == null ? void 0 : o.reduceMotion;
    r && (o = r);
    const c = []
        , d = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const h = e.getValue(f, e.latestValues[f] ?? null)
            , v = a[f];
        if (v === void 0 || d && EA(d, f))
            continue;
        const g = {
            delay: n,
            ...nh(o || {}, f)
        }
            , S = h.get();
        if (S !== void 0 && !h.isAnimating && !Array.isArray(v) && v === S && !g.velocity)
            continue;
        let p = !1;
        if (window.MotionHandoffAnimation) {
            const b = jw(e);
            if (b) {
                const C = window.MotionHandoffAnimation(b, f, oe);
                C !== null && (g.startTime = C,
                    p = !0)
            }
        }
        gd(e, f);
        const m = u ?? e.shouldReduceMotion;
        h.start(rh(f, h, v, m && Nw.has(f) ? {
            type: !1
        } : g, e, p));
        const y = h.animation;
        y && c.push(y)
    }
    if (s) {
        const f = () => oe.update(() => {
            s && bA(e, s)
        }
        );
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}
function yd(e, t, n = {}) {
    var l;
    const r = Ai(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let { transition: i = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(Dw(e, r, n)) : () => Promise.resolve()
        , s = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = i;
            return PA(e, t, u, c, d, f, n)
        }
            : () => Promise.resolve()
        , { when: a } = i;
    if (a) {
        const [u, c] = a === "beforeChildren" ? [o, s] : [s, o];
        return u().then(() => c())
    } else
        return Promise.all([o(), s(n.delay)])
}
function PA(e, t, n = 0, r = 0, i = 0, o = 1, s) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
            a.push(yd(l, t, {
                ...s,
                delay: n + (typeof r == "function" ? 0 : r) + kw(e.variantChildren, l, r, i, o)
            }).then(() => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function kA(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => yd(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = yd(e, t, n);
    else {
        const i = typeof t == "function" ? Ai(e, t, n.custom) : t;
        r = Promise.all(Dw(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    }
    )
}
const RA = {
    test: e => e === "auto",
    parse: e => e
}
    , Lw = e => t => t.test(e)
    , Ow = [ro, V, en, Dn, nR, tR, RA]
    , Dm = e => Ow.find(Lw(e));
function AA(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Gx(e) : !0
}
const NA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function MA(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Qf) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = NA.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
        t + "(" + o + i + ")"
}
const jA = /\b([a-z-]*)\(.*?\)/gu
    , vd = {
        ...Ft,
        getAnimatableNone: e => {
            const t = e.match(jA);
            return t ? t.map(MA).join(" ") : e
        }
    }
    , xd = {
        ...Ft,
        getAnimatableNone: e => {
            const t = Ft.parse(e);
            return Ft.createTransformer(e)(t.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
                ...r,
                alpha: 1
            } : r))
        }
    }
    , Lm = {
        ...ro,
        transform: Math.round
    }
    , DA = {
        rotate: Dn,
        rotateX: Dn,
        rotateY: Dn,
        rotateZ: Dn,
        scale: ia,
        scaleX: ia,
        scaleY: ia,
        scaleZ: ia,
        skew: Dn,
        skewX: Dn,
        skewY: Dn,
        distance: V,
        translateX: V,
        translateY: V,
        translateZ: V,
        x: V,
        y: V,
        z: V,
        perspective: V,
        transformPerspective: V,
        opacity: cs,
        originX: wm,
        originY: wm,
        originZ: V
    }
    , sh = {
        borderWidth: V,
        borderTopWidth: V,
        borderRightWidth: V,
        borderBottomWidth: V,
        borderLeftWidth: V,
        borderRadius: V,
        borderTopLeftRadius: V,
        borderTopRightRadius: V,
        borderBottomRightRadius: V,
        borderBottomLeftRadius: V,
        width: V,
        maxWidth: V,
        height: V,
        maxHeight: V,
        top: V,
        right: V,
        bottom: V,
        left: V,
        inset: V,
        insetBlock: V,
        insetBlockStart: V,
        insetBlockEnd: V,
        insetInline: V,
        insetInlineStart: V,
        insetInlineEnd: V,
        padding: V,
        paddingTop: V,
        paddingRight: V,
        paddingBottom: V,
        paddingLeft: V,
        paddingBlock: V,
        paddingBlockStart: V,
        paddingBlockEnd: V,
        paddingInline: V,
        paddingInlineStart: V,
        paddingInlineEnd: V,
        margin: V,
        marginTop: V,
        marginRight: V,
        marginBottom: V,
        marginLeft: V,
        marginBlock: V,
        marginBlockStart: V,
        marginBlockEnd: V,
        marginInline: V,
        marginInlineStart: V,
        marginInlineEnd: V,
        fontSize: V,
        backgroundPositionX: V,
        backgroundPositionY: V,
        ...DA,
        zIndex: Lm,
        fillOpacity: cs,
        strokeOpacity: cs,
        numOctaves: Lm
    }
    , LA = {
        ...sh,
        color: we,
        backgroundColor: we,
        outlineColor: we,
        fill: we,
        stroke: we,
        borderColor: we,
        borderTopColor: we,
        borderRightColor: we,
        borderBottomColor: we,
        borderLeftColor: we,
        filter: vd,
        WebkitFilter: vd,
        mask: xd,
        WebkitMask: xd
    }
    , Iw = e => LA[e]
    , OA = new Set([vd, xd]);
function Fw(e, t) {
    let n = Iw(e);
    return OA.has(n) || (n = Ft),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const IA = new Set(["auto", "none", "0"]);
function FA(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i;) {
        const o = e[r];
        typeof o == "string" && !IA.has(o) && ds(o).values.length && (i = e[r]),
            r++
    }
    if (i && n)
        for (const o of t)
            e[o] = Fw(n, i)
}
class _A extends th {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const { unresolvedKeyframes: t, element: n, name: r } = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(),
                Gf(d))) {
                const f = Rw(d, n.current);
                f !== void 0 && (t[c] = f),
                    c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
            !Nw.has(r) || t.length !== 2)
            return;
        const [i, o] = t
            , s = Dm(i)
            , a = Dm(o)
            , l = xm(i)
            , u = xm(o);
        if (l !== u && Gn[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (s !== a)
            if (Rm(s) && Rm(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                }
            else
                Gn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes: t, name: n } = this
            , r = [];
        for (let i = 0; i < t.length; i++)
            (t[i] === null || AA(t[i])) && r.push(i);
        r.length && FA(t, r, n)
    }
    measureInitialState() {
        const { element: t, unresolvedKeyframes: n, name: r } = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
            this.measuredOrigin = Gn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
            n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const { element: t, name: n, unresolvedKeyframes: r } = this;
        if (!t || !t.current)
            return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const o = r.length - 1
            , s = r[o];
        r[o] = Gn[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
            s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
            (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
                t.getValue(l).set(u)
            }
            ),
            this.resolveNoneKeyframes()
    }
}
const VA = new Set(["opacity", "clipPath", "filter", "transform"]);
function _w(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e).filter(r => r != null)
}
const Vw = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function wd(e) {
    return Kx(e) && "offsetHeight" in e
}
const { schedule: ah, cancel: eD } = sw(queueMicrotask, !1)
    , Rt = {
        x: !1,
        y: !1
    };
function Bw() {
    return Rt.x || Rt.y
}
function BA(e) {
    return e === "x" || e === "y" ? Rt[e] ? null : (Rt[e] = !0,
        () => {
            Rt[e] = !1
        }
    ) : Rt.x || Rt.y ? null : (Rt.x = Rt.y = !0,
        () => {
            Rt.x = Rt.y = !1
        }
    )
}
function zw(e, t) {
    const n = _w(e)
        , r = new AbortController
        , i = {
            passive: !0,
            ...t,
            signal: r.signal
        };
    return [n, i, () => r.abort()]
}
function zA(e) {
    return !(e.pointerType === "touch" || Bw())
}
function $A(e, t, n = {}) {
    const [r, i, o] = zw(e, n);
    return r.forEach(s => {
        let a = !1, l = !1, u;
        const c = () => {
            s.removeEventListener("pointerleave", v)
        }
            , d = S => {
                u && (u(S),
                    u = void 0),
                    c()
            }
            , f = S => {
                a = !1,
                    window.removeEventListener("pointerup", f),
                    window.removeEventListener("pointercancel", f),
                    l && (l = !1,
                        d(S))
            }
            , h = () => {
                a = !0,
                    window.addEventListener("pointerup", f, i),
                    window.addEventListener("pointercancel", f, i)
            }
            , v = S => {
                if (S.pointerType !== "touch") {
                    if (a) {
                        l = !0;
                        return
                    }
                    d(S)
                }
            }
            , g = S => {
                if (!zA(S))
                    return;
                l = !1;
                const p = t(s, S);
                typeof p == "function" && (u = p,
                    s.addEventListener("pointerleave", v, i))
            }
            ;
        s.addEventListener("pointerenter", g, i),
            s.addEventListener("pointerdown", h, i)
    }
    ),
        o
}
const $w = (e, t) => t ? e === t ? !0 : $w(e, t.parentElement) : !1
    , lh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
    , UA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function WA(e) {
    return UA.has(e.tagName) || e.isContentEditable === !0
}
const HA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function KA(e) {
    return HA.has(e.tagName) || e.isContentEditable === !0
}
const Ca = new WeakSet;
function Om(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Fu(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const GA = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Om(() => {
        if (Ca.has(n))
            return;
        Fu(n, "down");
        const i = Om(() => {
            Fu(n, "up")
        }
        )
            , o = () => Fu(n, "cancel");
        n.addEventListener("keyup", i, t),
            n.addEventListener("blur", o, t)
    }
    );
    n.addEventListener("keydown", r, t),
        n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
    ;
function Im(e) {
    return lh(e) && !Bw()
}
const Fm = new WeakSet;
function QA(e, t, n = {}) {
    const [r, i, o] = zw(e, n)
        , s = a => {
            const l = a.currentTarget;
            if (!Im(a) || Fm.has(a))
                return;
            Ca.add(l),
                n.stopPropagation && Fm.add(a);
            const u = t(l, a)
                , c = (h, v) => {
                    window.removeEventListener("pointerup", d),
                        window.removeEventListener("pointercancel", f),
                        Ca.has(l) && Ca.delete(l),
                        Im(h) && typeof u == "function" && u(h, {
                            success: v
                        })
                }
                , d = h => {
                    c(h, l === window || l === document || n.useGlobalTarget || $w(l, h.target))
                }
                , f = h => {
                    c(h, !1)
                }
                ;
            window.addEventListener("pointerup", d, i),
                window.addEventListener("pointercancel", f, i)
        }
        ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
            wd(a) && (a.addEventListener("focus", u => GA(u, i)),
                !WA(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
        o
}
function uh(e) {
    return Kx(e) && "ownerSVGElement" in e
}
const Ta = new WeakMap;
let Ln;
const Uw = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : uh(r) && "getBBox" in r ? r.getBBox()[t] : r[n]
    , XA = Uw("inline", "width", "offsetWidth")
    , YA = Uw("block", "height", "offsetHeight");
function qA({ target: e, borderBoxSize: t }) {
    var n;
    (n = Ta.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return XA(e, t)
            },
            get height() {
                return YA(e, t)
            }
        })
    }
    )
}
function ZA(e) {
    e.forEach(qA)
}
function JA() {
    typeof ResizeObserver > "u" || (Ln = new ResizeObserver(ZA))
}
function eN(e, t) {
    Ln || JA();
    const n = _w(e);
    return n.forEach(r => {
        let i = Ta.get(r);
        i || (i = new Set,
            Ta.set(r, i)),
            i.add(t),
            Ln == null || Ln.observe(r)
    }
    ),
        () => {
            n.forEach(r => {
                const i = Ta.get(r);
                i == null || i.delete(t),
                    i != null && i.size || Ln == null || Ln.unobserve(r)
            }
            )
        }
}
const Ea = new Set;
let yi;
function tN() {
    yi = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Ea.forEach(t => t(e))
    }
        ,
        window.addEventListener("resize", yi)
}
function nN(e) {
    return Ea.add(e),
        yi || tN(),
        () => {
            Ea.delete(e),
                !Ea.size && typeof yi == "function" && (window.removeEventListener("resize", yi),
                    yi = void 0)
        }
}
function _m(e, t) {
    return typeof e == "function" ? nN(e) : eN(e, t)
}
function rN(e) {
    return uh(e) && e.tagName === "svg"
}
const iN = [...Ow, we, Ft]
    , oN = e => iN.find(Lw(e))
    , Vm = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    })
    , vi = () => ({
        x: Vm(),
        y: Vm()
    })
    , Bm = () => ({
        min: 0,
        max: 0
    })
    , Ce = () => ({
        x: Bm(),
        y: Bm()
    })
    , sN = new WeakMap;
function Ul(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function fs(e) {
    return typeof e == "string" || Array.isArray(e)
}
const ch = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
    , dh = ["initial", ...ch];
function Wl(e) {
    return Ul(e.animate) || dh.some(t => fs(e[t]))
}
function Ww(e) {
    return !!(Wl(e) || e.variants)
}
function aN(e, t, n) {
    for (const r in t) {
        const i = t[r]
            , o = n[r];
        if (Ve(i))
            e.addValue(r, i);
        else if (Ve(o))
            e.addValue(r, Qi(i, {
                owner: e
            }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, Qi(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Sd = {
    current: null
}
    , Hw = {
        current: !1
    }
    , lN = typeof window < "u";
function uN() {
    if (Hw.current = !0,
        !!lN)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
                , t = () => Sd.current = e.matches;
            e.addEventListener("change", t),
                t()
        } else
            Sd.current = !1
}
const zm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let ul = {};
function Kw(e) {
    ul = e
}
function cN() {
    return ul
}
class dN {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, skipAnimations: o, blockInitialAnimation: s, visualState: a }, l = {}) {
        this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.shouldSkipAnimations = !1,
            this.values = new Map,
            this.KeyframeResolver = th,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.hasBeenMounted = !1,
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify("Update", this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.renderScheduledAt = 0,
            this.scheduleRender = () => {
                const h = We.now();
                this.renderScheduledAt < h && (this.renderScheduledAt = h,
                    oe.render(this.render, !1, !0))
            }
            ;
        const { latestValues: u, renderState: c } = a;
        this.latestValues = u,
            this.baseTarget = {
                ...u
            },
            this.initialValues = n.initial ? {
                ...u
            } : {},
            this.renderState = c,
            this.parent = t,
            this.props = n,
            this.presenceContext = r,
            this.depth = t ? t.depth + 1 : 0,
            this.reducedMotionConfig = i,
            this.skipAnimationsConfig = o,
            this.options = l,
            this.blockInitialAnimation = !!s,
            this.isControllingVariants = Wl(n),
            this.isVariantNode = Ww(n),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = !!(t && t.current);
        const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const v = f[h];
            u[h] !== void 0 && Ve(v) && v.set(u[h])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const i in this.initialValues)
                (n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
                    this.latestValues[i] = this.initialValues[i];
        this.current = t,
            sN.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((i, o) => this.bindToMotionValue(o, i)),
            this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Hw.current || uN(),
                this.shouldReduceMotion = Sd.current),
            this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
            (r = this.parent) == null || r.addChild(this),
            this.update(this.props, this.presenceContext),
            this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
            ur(this.notifyUpdate),
            ur(this.render),
            this.valueSubscriptions.forEach(n => n()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
                r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set),
            this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
            this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
            n.accelerate && VA.has(t) && this.current instanceof HTMLElement) {
            const { factory: s, keyframes: a, times: l, ease: u, duration: c } = n.accelerate
                , d = new Ew({
                    element: this.current,
                    name: t,
                    keyframes: a,
                    times: l,
                    ease: u,
                    duration: vt(c)
                })
                , f = s(d);
            this.valueSubscriptions.set(t, () => {
                f(),
                    d.cancel()
            }
            );
            return
        }
        const r = oo.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", s => {
            this.latestValues[t] = s,
                this.props.onUpdate && oe.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0),
                this.scheduleRender()
        }
        );
        let o;
        typeof window < "u" && window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
            this.valueSubscriptions.set(t, () => {
                i(),
                    o && o(),
                    n.owner && n.stop()
            }
            )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in ul) {
            const n = ul[t];
            if (!n)
                continue;
            const { isEnabled: r, Feature: i } = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
                this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(),
                    o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ce()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = t,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = n;
        for (let r = 0; r < zm.length; r++) {
            const i = zm[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                delete this.propEventSubscriptions[i]);
            const o = "on" + i
                , s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = aN(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
                () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
            this.bindToMotionValue(t, n),
            this.values.set(t, n),
            this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
            this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Qi(n === null ? void 0 : n, {
            owner: this
        }),
            this.addValue(t, r)),
            r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (Hx(r) || Gx(r)) ? r = parseFloat(r) : !oN(r) && Ft.test(n) && (r = Fw(t, n)),
            this.setBaseTarget(t, Ve(r) ? r.get() : r)),
            Ve(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var o;
        const { initial: n } = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const s = ih(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
            s && (r = s[t])
        }
        if (n && r !== void 0)
            return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Ve(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Wf),
            this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        ah.render(this.render)
    }
}
class Gw extends dN {
    constructor() {
        super(...arguments),
            this.KeyframeResolver = _A
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
        delete n[t],
            delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
            delete this.childSubscription);
        const { children: t } = this.props;
        Ve(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class hr {
    constructor(t) {
        this.isMounted = !1,
            this.node = t
    }
    update() { }
}
function Qw({ top: e, left: t, right: n, bottom: r }) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function fN({ x: e, y: t }) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function hN(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
        , r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function _u(e) {
    return e === void 0 || e === 1
}
function bd({ scale: e, scaleX: t, scaleY: n }) {
    return !_u(e) || !_u(t) || !_u(n)
}
function wr(e) {
    return bd(e) || Xw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Xw(e) {
    return $m(e.x) || $m(e.y)
}
function $m(e) {
    return e && e !== "0%"
}
function cl(e, t, n) {
    const r = e - n
        , i = t * r;
    return n + i
}
function Um(e, t, n, r, i) {
    return i !== void 0 && (e = cl(e, i, r)),
        cl(e, n, r) + t
}
function Cd(e, t = 0, n = 1, r, i) {
    e.min = Um(e.min, t, n, r, i),
        e.max = Um(e.max, t, n, r, i)
}
function Yw(e, { x: t, y: n }) {
    Cd(e.x, t.translate, t.scale, t.originPoint),
        Cd(e.y, n.translate, n.scale, n.originPoint)
}
const Wm = .999999999999
    , Hm = 1.0000000000001;
function pN(e, t, n, r = !1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a],
            s = o.projectionDelta;
        const { visualElement: l } = o.options;
        l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && wi(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
            s && (t.x *= s.x.scale,
                t.y *= s.y.scale,
                Yw(e, s)),
            r && wr(o.latestValues) && wi(e, o.latestValues))
    }
    t.x < Hm && t.x > Wm && (t.x = 1),
        t.y < Hm && t.y > Wm && (t.y = 1)
}
function xi(e, t) {
    e.min = e.min + t,
        e.max = e.max + t
}
function Km(e, t, n, r, i = .5) {
    const o = he(e.min, e.max, i);
    Cd(e, t, n, o, r)
}
function wi(e, t) {
    Km(e.x, t.x, t.scaleX, t.scale, t.originX),
        Km(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function qw(e, t) {
    return Qw(hN(e.getBoundingClientRect(), t))
}
function mN(e, t, n) {
    const r = qw(e, n)
        , { scroll: i } = t;
    return i && (xi(r.x, i.offset.x),
        xi(r.y, i.offset.y)),
        r
}
const gN = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
    , yN = io.length;
function vN(e, t, n) {
    let r = ""
        , i = !0;
    for (let o = 0; o < yN; o++) {
        const s = io[o]
            , a = e[s];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (s.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = s.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = Vw(a, sh[s]);
            if (!l) {
                i = !1;
                const c = gN[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(),
        n ? r = n(t, i ? "" : r) : i && (r = "none"),
        r
}
function fh(e, t, n) {
    const { style: r, vars: i, transformOrigin: o } = e;
    let s = !1
        , a = !1;
    for (const l in t) {
        const u = t[l];
        if (oo.has(l)) {
            s = !0;
            continue
        } else if (lw(l)) {
            i[l] = u;
            continue
        } else {
            const c = Vw(u, sh[l]);
            l.startsWith("origin") ? (a = !0,
                o[l] = c) : r[l] = c
        }
    }
    if (t.transform || (s || n ? r.transform = vN(t, e.transform, n) : r.transform && (r.transform = "none")),
        a) {
        const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
function Zw(e, { style: t, vars: n }, r, i) {
    const o = e.style;
    let s;
    for (s in t)
        o[s] = t[s];
    i == null || i.applyProjectionStyles(o, r);
    for (s in n)
        o.setProperty(s, n[s])
}
function Gm(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const wo = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (V.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Gm(e, t.target.x)
            , r = Gm(e, t.target.y);
        return `${n}% ${r}%`
    }
}
    , xN = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const r = e
                , i = Ft.parse(e);
            if (i.length > 5)
                return r;
            const o = Ft.createTransformer(e)
                , s = typeof i[0] != "number" ? 1 : 0
                , a = n.x.scale * t.x
                , l = n.y.scale * t.y;
            i[0 + s] /= a,
                i[1 + s] /= l;
            const u = he(a, l, .5);
            return typeof i[2 + s] == "number" && (i[2 + s] /= u),
                typeof i[3 + s] == "number" && (i[3 + s] /= u),
                o(i)
        }
    }
    , Td = {
        borderRadius: {
            ...wo,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: wo,
        borderTopRightRadius: wo,
        borderBottomLeftRadius: wo,
        borderBottomRightRadius: wo,
        boxShadow: xN
    };
function Jw(e, { layout: t, layoutId: n }) {
    return oo.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Td[e] || e === "opacity")
}
function hh(e, t, n) {
    var s;
    const r = e.style
        , i = t == null ? void 0 : t.style
        , o = {};
    if (!r)
        return o;
    for (const a in r)
        (Ve(r[a]) || i && Ve(i[a]) || Jw(a, e) || ((s = n == null ? void 0 : n.getValue(a)) == null ? void 0 : s.liveStyle) !== void 0) && (o[a] = r[a]);
    return o
}
function wN(e) {
    return window.getComputedStyle(e)
}
class SN extends Gw {
    constructor() {
        super(...arguments),
            this.type = "html",
            this.renderInstance = Zw
    }
    readValueFromInstance(t, n) {
        var r;
        if (oo.has(n))
            return (r = this.projection) != null && r.isProjecting ? ud(n) : VR(t, n);
        {
            const i = wN(t)
                , o = (lw(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return qw(t, n)
    }
    build(t, n, r) {
        fh(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return hh(t, n, r)
    }
}
const bN = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
    , CN = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
function TN(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? bN : CN;
    e[o.offset] = `${-r}`,
        e[o.array] = `${t} ${n}`
}
const EN = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function e1(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: o = 1, pathOffset: s = 0, ...a }, l, u, c) {
    if (fh(e, a, u),
        l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
        e.style = {};
    const { attrs: d, style: f } = e;
    d.transform && (f.transform = d.transform,
        delete d.transform),
        (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
            delete d.transformOrigin),
        f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
            delete d.transformBox);
    for (const h of EN)
        d[h] !== void 0 && (f[h] = d[h],
            delete d[h]);
    t !== void 0 && (d.x = t),
        n !== void 0 && (d.y = n),
        r !== void 0 && (d.scale = r),
        i !== void 0 && TN(d, i, o, s, !1)
}
const t1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    , n1 = e => typeof e == "string" && e.toLowerCase() === "svg";
function PN(e, t, n, r) {
    Zw(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(t1.has(i) ? i : oh(i), t.attrs[i])
}
function r1(e, t, n) {
    const r = hh(e, t, n);
    for (const i in e)
        if (Ve(e[i]) || Ve(t[i])) {
            const o = io.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}
class kN extends Gw {
    constructor() {
        super(...arguments),
            this.type = "svg",
            this.isSVGTag = !1,
            this.measureInstanceViewportBox = Ce
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (oo.has(n)) {
            const r = Iw(n);
            return r && r.default || 0
        }
        return n = t1.has(n) ? n : oh(n),
            t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return r1(t, n, r)
    }
    build(t, n, r) {
        e1(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        PN(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = n1(t.tagName),
            super.mount(t)
    }
}
const RN = dh.length;
function i1(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? i1(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
            n
    }
    const t = {};
    for (let n = 0; n < RN; n++) {
        const r = dh[n]
            , i = e.props[r];
        (fs(i) || i === !1) && (t[r] = i)
    }
    return t
}
function o1(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const AN = [...ch].reverse()
    , NN = ch.length;
function MN(e) {
    return t => Promise.all(t.map(({ animation: n, options: r }) => kA(e, n, r)))
}
function jN(e) {
    let t = MN(e)
        , n = Qm()
        , r = !0;
    const i = l => (u, c) => {
        var f;
        const d = Ai(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
        if (d) {
            const { transition: h, transitionEnd: v, ...g } = d;
            u = {
                ...u,
                ...g,
                ...v
            }
        }
        return u
    }
        ;
    function o(l) {
        t = l(e)
    }
    function s(l) {
        const { props: u } = e
            , c = i1(e.parent) || {}
            , d = []
            , f = new Set;
        let h = {}
            , v = 1 / 0;
        for (let S = 0; S < NN; S++) {
            const p = AN[S]
                , m = n[p]
                , y = u[p] !== void 0 ? u[p] : c[p]
                , b = fs(y)
                , C = p === l ? m.isActive : null;
            C === !1 && (v = S);
            let T = y === c[p] && y !== u[p] && b;
            if (T && r && e.manuallyAnimateOnMount && (T = !1),
                m.protectedKeys = {
                    ...h
                },
                !m.isActive && C === null || !y && !m.prevProp || Ul(y) || typeof y == "boolean")
                continue;
            if (p === "exit" && m.isActive && C !== !0) {
                m.prevResolvedValues && (h = {
                    ...h,
                    ...m.prevResolvedValues
                });
                continue
            }
            const E = DN(m.prevProp, y);
            let P = E || p === l && m.isActive && !T && b || S > v && b
                , N = !1;
            const M = Array.isArray(y) ? y : [y];
            let F = M.reduce(i(p), {});
            C === !1 && (F = {});
            const { prevResolvedValues: L = {} } = m
                , $ = {
                    ...L,
                    ...F
                }
                , O = B => {
                    P = !0,
                        f.has(B) && (N = !0,
                            f.delete(B)),
                        m.needsAnimating[B] = !0;
                    const k = e.getValue(B);
                    k && (k.liveStyle = !1)
                }
                ;
            for (const B in $) {
                const k = F[B]
                    , A = L[B];
                if (h.hasOwnProperty(B))
                    continue;
                let I = !1;
                md(k) && md(A) ? I = !o1(k, A) : I = k !== A,
                    I ? k != null ? O(B) : f.add(B) : k !== void 0 && f.has(B) ? O(B) : m.protectedKeys[B] = !0
            }
            m.prevProp = y,
                m.prevResolvedValues = F,
                m.isActive && (h = {
                    ...h,
                    ...F
                }),
                r && e.blockInitialAnimation && (P = !1);
            const Q = T && E;
            P && (!Q || N) && d.push(...M.map(B => {
                const k = {
                    type: p
                };
                if (typeof B == "string" && r && !Q && e.manuallyAnimateOnMount && e.parent) {
                    const { parent: A } = e
                        , I = Ai(A, B);
                    if (A.enteringChildren && I) {
                        const { delayChildren: W } = I.transition || {};
                        k.delay = kw(A.enteringChildren, e, W)
                    }
                }
                return {
                    animation: B,
                    options: k
                }
            }
            ))
        }
        if (f.size) {
            const S = {};
            if (typeof u.initial != "boolean") {
                const p = Ai(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                p && p.transition && (S.transition = p.transition)
            }
            f.forEach(p => {
                const m = e.getBaseTarget(p)
                    , y = e.getValue(p);
                y && (y.liveStyle = !0),
                    S[p] = m ?? null
            }
            ),
                d.push({
                    animation: S
                })
        }
        let g = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (g = !1),
            r = !1,
            g ? t(d) : Promise.resolve()
    }
    function a(l, u) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) == null || d.forEach(f => {
            var h;
            return (h = f.animationState) == null ? void 0 : h.setActive(l, u)
        }
        ),
            n[l].isActive = u;
        const c = s(l);
        for (const f in n)
            n[f].protectedKeys = {};
        return c
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Qm()
        }
    }
}
function DN(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !o1(t, e) : !1
}
function yr(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Qm() {
    return {
        animate: yr(!0),
        whileInView: yr(),
        whileHover: yr(),
        whileTap: yr(),
        whileDrag: yr(),
        whileFocus: yr(),
        exit: yr()
    }
}
function Xm(e, t) {
    e.min = t.min,
        e.max = t.max
}
function Pt(e, t) {
    Xm(e.x, t.x),
        Xm(e.y, t.y)
}
function Ym(e, t) {
    e.translate = t.translate,
        e.scale = t.scale,
        e.originPoint = t.originPoint,
        e.origin = t.origin
}
const s1 = 1e-4
    , LN = 1 - s1
    , ON = 1 + s1
    , a1 = .01
    , IN = 0 - a1
    , FN = 0 + a1;
function He(e) {
    return e.max - e.min
}
function _N(e, t, n) {
    return Math.abs(e - t) <= n
}
function qm(e, t, n, r = .5) {
    e.origin = r,
        e.originPoint = he(t.min, t.max, e.origin),
        e.scale = He(n) / He(t),
        e.translate = he(n.min, n.max, e.origin) - e.originPoint,
        (e.scale >= LN && e.scale <= ON || isNaN(e.scale)) && (e.scale = 1),
        (e.translate >= IN && e.translate <= FN || isNaN(e.translate)) && (e.translate = 0)
}
function _o(e, t, n, r) {
    qm(e.x, t.x, n.x, r ? r.originX : void 0),
        qm(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Zm(e, t, n) {
    e.min = n.min + t.min,
        e.max = e.min + He(t)
}
function VN(e, t, n) {
    Zm(e.x, t.x, n.x),
        Zm(e.y, t.y, n.y)
}
function Jm(e, t, n) {
    e.min = t.min - n.min,
        e.max = e.min + He(t)
}
function dl(e, t, n) {
    Jm(e.x, t.x, n.x),
        Jm(e.y, t.y, n.y)
}
function eg(e, t, n, r, i) {
    return e -= t,
        e = cl(e, 1 / n, r),
        i !== void 0 && (e = cl(e, 1 / i, r)),
        e
}
function BN(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (en.test(t) && (t = parseFloat(t),
        t = he(s.min, s.max, t / 100) - s.min),
        typeof t != "number")
        return;
    let a = he(o.min, o.max, r);
    e === o && (a -= t),
        e.min = eg(e.min, t, n, a, i),
        e.max = eg(e.max, t, n, a, i)
}
function tg(e, t, [n, r, i], o, s) {
    BN(e, t[n], t[r], t[i], t.scale, o, s)
}
const zN = ["x", "scaleX", "originX"]
    , $N = ["y", "scaleY", "originY"];
function ng(e, t, n, r) {
    tg(e.x, t, zN, n ? n.x : void 0, r ? r.x : void 0),
        tg(e.y, t, $N, n ? n.y : void 0, r ? r.y : void 0)
}
function rg(e) {
    return e.translate === 0 && e.scale === 1
}
function l1(e) {
    return rg(e.x) && rg(e.y)
}
function ig(e, t) {
    return e.min === t.min && e.max === t.max
}
function UN(e, t) {
    return ig(e.x, t.x) && ig(e.y, t.y)
}
function og(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function u1(e, t) {
    return og(e.x, t.x) && og(e.y, t.y)
}
function sg(e) {
    return He(e.x) / He(e.y)
}
function ag(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function Ht(e) {
    return [e("x"), e("y")]
}
function WN(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
        , o = e.y.translate / t.y
        , s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n) {
        const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: v } = n;
        u && (r = `perspective(${u}px) ${r}`),
            c && (r += `rotate(${c}deg) `),
            d && (r += `rotateX(${d}deg) `),
            f && (r += `rotateY(${f}deg) `),
            h && (r += `skewX(${h}deg) `),
            v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x
        , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
        r || "none"
}
const c1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
    , HN = c1.length
    , lg = e => typeof e == "string" ? parseFloat(e) : e
    , ug = e => typeof e == "number" || V.test(e);
function KN(e, t, n, r, i, o) {
    i ? (e.opacity = he(0, n.opacity ?? 1, GN(r)),
        e.opacityExit = he(t.opacity ?? 1, 0, QN(r))) : o && (e.opacity = he(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let s = 0; s < HN; s++) {
        const a = `border${c1[s]}Radius`;
        let l = cg(t, a)
            , u = cg(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
            u || (u = 0),
            l === 0 || u === 0 || ug(l) === ug(u) ? (e[a] = Math.max(he(lg(l), lg(u), r), 0),
                (en.test(u) || en.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = he(t.rotate || 0, n.rotate || 0, r))
}
function cg(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const GN = d1(0, .5, nw)
    , QN = d1(.5, .95, yt);
function d1(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(us(e, t, r))
}
function XN(e, t, n) {
    const r = Ve(e) ? e : Qi(e);
    return r.start(rh("", r, t, n)),
        r.animation
}
function hs(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r),
        () => e.removeEventListener(t, n)
}
const YN = (e, t) => e.depth - t.depth;
class qN {
    constructor() {
        this.children = [],
            this.isDirty = !1
    }
    add(t) {
        Uf(this.children, t),
            this.isDirty = !0
    }
    remove(t) {
        ol(this.children, t),
            this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(YN),
            this.isDirty = !1,
            this.children.forEach(t)
    }
}
function ZN(e, t) {
    const n = We.now()
        , r = ({ timestamp: i }) => {
            const o = i - n;
            o >= t && (ur(r),
                e(o - t))
        }
        ;
    return oe.setup(r, !0),
        () => ur(r)
}
function Pa(e) {
    return Ve(e) ? e.get() : e
}
class JN {
    constructor() {
        this.members = []
    }
    add(t) {
        Uf(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead)
                continue;
            const i = r.instance;
            i && i.isConnected === !1 && r.isPresent !== !1 && !r.snapshot && ol(this.members, r)
        }
        t.scheduleRender()
    }
    remove(t) {
        if (ol(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i]
                , s = o.instance;
            if (o.isPresent !== !1 && (!s || s.isConnected !== !1)) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
            !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
            this.lead = t,
            t.show(),
            r)) {
            r.instance && r.scheduleRender(),
                t.scheduleRender();
            const i = r.options.layoutDependency
                , o = t.options.layoutDependency;
            if (!(i !== void 0 && o !== void 0 && i === o)) {
                const l = r.instance;
                l && l.isConnected === !1 && !r.snapshot || (t.resumeFrom = r,
                    n && (t.resumeFrom.preserveOpacity = !0),
                    r.snapshot && (t.snapshot = r.snapshot,
                        t.snapshot.latestValues = r.animationValues || r.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0))
            }
            const { crossfade: a } = t.options;
            a === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const { options: n, resumingFrom: r } = t;
            n.onExitComplete && n.onExitComplete(),
                r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const ka = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
    , Vu = ["", "X", "Y", "Z"]
    , eM = 1e3;
let tM = 0;
function Bu(e, t, n, r) {
    const { latestValues: i } = t;
    i[e] && (n[e] = i[e],
        t.setStaticValue(e, 0),
        r && (r[e] = 0))
}
function f1(e) {
    if (e.hasCheckedOptimisedAppear = !0,
        e.root === e)
        return;
    const { visualElement: t } = e.options;
    if (!t)
        return;
    const n = jw(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const { layout: i, layoutId: o } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", oe, !(i || o))
    }
    const { parent: r } = e;
    r && !r.hasCheckedOptimisedAppear && f1(r)
}
function h1({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            this.id = tM++,
                this.animationId = 0,
                this.animationCommitId = 0,
                this.children = new Set,
                this.options = {},
                this.isTreeAnimating = !1,
                this.isAnimationBlocked = !1,
                this.isLayoutDirty = !1,
                this.isProjectionDirty = !1,
                this.isSharedProjectionDirty = !1,
                this.isTransformDirty = !1,
                this.updateManuallyBlocked = !1,
                this.updateBlockedByResize = !1,
                this.isUpdating = !1,
                this.isSVG = !1,
                this.needsReset = !1,
                this.shouldResetTransform = !1,
                this.hasCheckedOptimisedAppear = !1,
                this.treeScale = {
                    x: 1,
                    y: 1
                },
                this.eventHandlers = new Map,
                this.hasTreeAnimated = !1,
                this.layoutVersion = 0,
                this.updateScheduled = !1,
                this.scheduleUpdate = () => this.update(),
                this.projectionUpdateScheduled = !1,
                this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                }
                ,
                this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1,
                        this.nodes.forEach(iM),
                        this.nodes.forEach(lM),
                        this.nodes.forEach(uM),
                        this.nodes.forEach(oM)
                }
                ,
                this.resolvedRelativeTargetAt = 0,
                this.linkedParentVersion = 0,
                this.hasProjected = !1,
                this.isVisible = !0,
                this.animationProgress = 0,
                this.sharedNodes = new Map,
                this.latestValues = s,
                this.root = a ? a.root || a : this,
                this.path = a ? [...a.path, a] : [],
                this.parent = a,
                this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new qN)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Wf),
                this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s) {
            if (this.instance)
                return;
            this.isSVG = uh(s) && !rN(s),
                this.instance = s;
            const { layoutId: a, layout: l, visualElement: u } = this.options;
            if (u && !u.current && u.mount(s),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
                e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                oe.read(() => {
                    d = window.innerWidth
                }
                ),
                    e(s, () => {
                        const h = window.innerWidth;
                        h !== d && (d = h,
                            this.root.updateBlockedByResize = !0,
                            c && c(),
                            c = ZN(f, 250),
                            ka.hasAnimatedSinceResize && (ka.hasAnimatedSinceResize = !1,
                                this.nodes.forEach(hg)))
                    }
                    )
            }
            a && this.root.registerSharedNode(a, this),
                this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0,
                            this.relativeTarget = void 0;
                        return
                    }
                    const v = this.options.transition || u.getDefaultTransition() || pM
                        , { onLayoutAnimationStart: g, onLayoutAnimationComplete: S } = u.getProps()
                        , p = !this.targetLayout || !u1(this.targetLayout, h)
                        , m = !d && f;
                    if (this.options.layoutRoot || this.resumeFrom || m || d && (p || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0);
                        const y = {
                            ...nh(v, "layout"),
                            onPlay: g,
                            onComplete: S
                        };
                        (u.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0,
                            y.type = !1),
                            this.startAnimation(y),
                            this.setAnimationOrigin(c, m)
                    } else
                        d || hg(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = h
                }
                )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
                this.parent && this.parent.children.delete(this),
                this.instance = void 0,
                this.eventHandlers.clear(),
                ur(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
                this.nodes && this.nodes.forEach(cM),
                this.animationId++)
        }
        getTransformTemplate() {
            const { visualElement: s } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0,
                this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && f1(this),
                !this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                    d.updateScroll("snapshot"),
                    d.options.layoutRoot && d.willUpdate(!1)
            }
            const { layoutId: a, layout: l } = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
                this.updateSnapshot(),
                s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
                this.isUpdateBlocked()) {
                this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(dg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(fg);
                return
            }
            this.animationCommitId = this.animationId,
                this.isUpdating ? (this.isUpdating = !1,
                    this.nodes.forEach(aM),
                    this.nodes.forEach(nM),
                    this.nodes.forEach(rM)) : this.nodes.forEach(fg),
                this.clearAllSnapshots();
            const a = We.now();
            Ne.delta = rn(0, 1e3 / 60, a - Ne.timestamp),
                Ne.timestamp = a,
                Ne.isProcessing = !0,
                Mu.update.process(Ne),
                Mu.preRender.process(Ne),
                Mu.render.process(Ne),
                Ne.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
                ah.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(sM),
                this.sharedNodes.forEach(dM)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                oe.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            oe.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
                this.snapshot && !He(this.snapshot.measuredBox.x) && !He(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
                this.layoutVersion++,
                this.layoutCorrected = Ce(),
                this.isLayoutDirty = !1,
                this.projectionDelta = void 0,
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: a } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
                a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                , a = this.projectionDelta && !l1(this.projectionDelta)
                , l = this.getTransformTemplate()
                , u = l ? l(this.latestValues, "") : void 0
                , c = u !== this.prevTransformTemplateValue;
            s && this.instance && (a || wr(this.latestValues) || c) && (i(this.instance, u),
                this.shouldResetTransform = !1,
                this.scheduleRender())
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)),
                mM(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const { visualElement: s } = this.options;
            if (!s)
                return Ce();
            const a = s.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(gM))) {
                const { scroll: c } = this.root;
                c && (xi(a.x, c.offset.x),
                    xi(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(s) {
            var l;
            const a = Ce();
            if (Pt(a, s),
                (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                    , { scroll: d, options: f } = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && Pt(a, s),
                    xi(a.x, d.offset.x),
                    xi(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(s, a = !1) {
            const l = Ce();
            Pt(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && wi(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                    wr(c.latestValues) && wi(l, c.latestValues)
            }
            return wr(this.latestValues) && wi(l, this.latestValues),
                l
        }
        removeTransform(s) {
            const a = Ce();
            Pt(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !wr(u.latestValues))
                    continue;
                bd(u.latestValues) && u.updateSnapshot();
                const c = Ce()
                    , d = u.measurePageBox();
                Pt(c, d),
                    ng(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return wr(this.latestValues) && ng(a, this.latestValues),
                a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
                this.root.scheduleUpdateProjection(),
                this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
                this.layout = void 0,
                this.snapshot = void 0,
                this.prevTransformTemplateValue = void 0,
                this.targetDelta = void 0,
                this.target = void 0,
                this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ne.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(s || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const { layout: c, layoutId: d } = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = Ne.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
                !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
                !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ce(),
                    this.targetWithTransforms = Ce()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                        VN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Pt(this.target, this.layout.layoutBox),
                            Yw(this.target, this.targetDelta)) : Pt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
                        f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || bd(this.parent.latestValues) || Xw(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(s, a, l) {
            this.relativeParent = s,
                this.linkedParentVersion = s.layoutVersion,
                this.forceRelativeParentToResolveTarget(),
                this.relativeTarget = Ce(),
                this.relativeTargetOrigin = Ce(),
                dl(this.relativeTargetOrigin, a, l),
                Pt(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var v;
            const s = this.getLead()
                , a = !!this.resumingFrom || this !== s;
            let l = !0;
            if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1),
                a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
                this.resolvedRelativeTargetAt === Ne.timestamp && (l = !1),
                l)
                return;
            const { layout: u, layoutId: c } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(u || c))
                return;
            Pt(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
                , f = this.treeScale.y;
            pN(this.layoutCorrected, this.treeScale, this.path, a),
                s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox,
                    s.targetWithTransforms = Ce());
            const { target: h } = s;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                    this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ym(this.prevProjectionDelta.x, this.projectionDelta.x),
                Ym(this.prevProjectionDelta.y, this.projectionDelta.y)),
                _o(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
                (this.treeScale.x !== d || this.treeScale.y !== f || !ag(this.projectionDelta.x, this.prevProjectionDelta.x) || !ag(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
                s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = vi(),
                this.projectionDelta = vi(),
                this.projectionDeltaWithTransform = vi()
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot
                , u = l ? l.latestValues : {}
                , c = {
                    ...this.latestValues
                }
                , d = vi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
                this.attemptToResolveRelativeTarget = !a;
            const f = Ce()
                , h = l ? l.source : void 0
                , v = this.layout ? this.layout.source : void 0
                , g = h !== v
                , S = this.getStack()
                , p = !S || S.members.length <= 1
                , m = !!(g && !p && this.options.crossfade === !0 && !this.path.some(hM));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = b => {
                const C = b / 1e3;
                pg(d.x, s.x, C),
                    pg(d.y, s.y, C),
                    this.setTargetDelta(d),
                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (dl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        fM(this.relativeTarget, this.relativeTargetOrigin, f, C),
                        y && UN(this.relativeTarget, y) && (this.isProjectionDirty = !1),
                        y || (y = Ce()),
                        Pt(y, this.relativeTarget)),
                    g && (this.animationValues = c,
                        KN(c, u, this.latestValues, C, m, p)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    this.animationProgress = C
            }
                ,
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            var a, l, u;
            this.notifyListeners("animationStart"),
                (a = this.currentAnimation) == null || a.stop(),
                (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
                this.pendingAnimation && (ur(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                this.pendingAnimation = oe.update(() => {
                    ka.hasAnimatedSinceResize = !0,
                        this.motionValue || (this.motionValue = Qi(0)),
                        this.motionValue.jump(0, !1),
                        this.currentAnimation = XN(this.motionValue, [0, 1e3], {
                            ...s,
                            velocity: 0,
                            isSync: !0,
                            onUpdate: c => {
                                this.mixTargetDelta(c),
                                    s.onUpdate && s.onUpdate(c)
                            }
                            ,
                            onStop: () => { }
                            ,
                            onComplete: () => {
                                s.onComplete && s.onComplete(),
                                    this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                }
                )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
                this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(eM),
                this.currentAnimation.stop()),
                this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && p1(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Ce();
                    const d = He(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min,
                        l.x.max = l.x.min + d;
                    const f = He(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min,
                        l.y.max = l.y.min + f
                }
                Pt(a, l),
                    wi(a, c),
                    _o(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new JN),
                this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var a;
            const { layoutId: s } = this.options;
            return s ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const { layoutId: s } = this.options;
            return s ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const { layoutId: s } = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
            const u = this.getStack();
            u && u.promote(this, l),
                s && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                a && this.setOptions({
                    transition: a
                })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const { visualElement: s } = this.options;
            if (!s)
                return;
            let a = !1;
            const { latestValues: l } = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
                !a)
                return;
            const u = {};
            l.z && Bu("z", s, u, this.animationValues);
            for (let c = 0; c < Vu.length; c++)
                Bu(`rotate${Vu[c]}`, s, u, this.animationValues),
                    Bu(`skew${Vu[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]),
                    this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        applyProjectionStyles(s, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                s.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                    s.visibility = "",
                    s.opacity = "",
                    s.pointerEvents = Pa(a == null ? void 0 : a.pointerEvents) || "",
                    s.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                    s.pointerEvents = Pa(a == null ? void 0 : a.pointerEvents) || ""),
                    this.hasProjected && !wr(this.latestValues) && (s.transform = l ? l({}, "") : "none",
                        this.hasProjected = !1);
                return
            }
            s.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = WN(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)),
                s.transform = d;
            const { x: f, y: h } = this.projectionDelta;
            s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
                u.animationValues ? s.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : s.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const v in Td) {
                if (c[v] === void 0)
                    continue;
                const { correct: g, applyTo: S, isCSSVariable: p } = Td[v]
                    , m = d === "none" ? c[v] : g(c[v], u);
                if (S) {
                    const y = S.length;
                    for (let b = 0; b < y; b++)
                        s[S[b]] = m
                } else
                    p ? this.options.visualElement.renderState.vars[v] = m : s[v] = m
            }
            this.options.layoutId && (s.pointerEvents = u === this ? Pa(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
                this.root.nodes.forEach(dg),
                this.root.sharedNodes.clear()
        }
    }
}
function nM(e) {
    e.updateLayout()
}
function rM(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: i } = e.layout
            , { animationType: o } = e.options
            , s = t.source !== e.layout.source;
        o === "size" ? Ht(d => {
            const f = s ? t.measuredBox[d] : t.layoutBox[d]
                , h = He(f);
            f.min = r[d].min,
                f.max = f.min + h
        }
        ) : p1(o, t.layoutBox, r) && Ht(d => {
            const f = s ? t.measuredBox[d] : t.layoutBox[d]
                , h = He(r[d]);
            f.max = f.min + h,
                e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
                    e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = vi();
        _o(a, r, t.layoutBox);
        const l = vi();
        s ? _o(l, e.applyTransform(i, !0), t.measuredBox) : _o(l, r, t.layoutBox);
        const u = !l1(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const { snapshot: f, layout: h } = d;
                if (f && h) {
                    const v = Ce();
                    dl(v, t.layoutBox, f.layoutBox);
                    const g = Ce();
                    dl(g, r, h.layoutBox),
                        u1(v, g) || (c = !0),
                        d.options.layoutRoot && (e.relativeTarget = g,
                            e.relativeTargetOrigin = v,
                            e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function iM(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function oM(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function sM(e) {
    e.clearSnapshot()
}
function dg(e) {
    e.clearMeasurements()
}
function fg(e) {
    e.isLayoutDirty = !1
}
function aM(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
        e.resetTransform()
}
function hg(e) {
    e.finishAnimation(),
        e.targetDelta = e.relativeTarget = e.target = void 0,
        e.isProjectionDirty = !0
}
function lM(e) {
    e.resolveTargetDelta()
}
function uM(e) {
    e.calcProjection()
}
function cM(e) {
    e.resetSkewAndRotation()
}
function dM(e) {
    e.removeLeadSnapshot()
}
function pg(e, t, n) {
    e.translate = he(t.translate, 0, n),
        e.scale = he(t.scale, 1, n),
        e.origin = t.origin,
        e.originPoint = t.originPoint
}
function mg(e, t, n, r) {
    e.min = he(t.min, n.min, r),
        e.max = he(t.max, n.max, r)
}
function fM(e, t, n, r) {
    mg(e.x, t.x, n.x, r),
        mg(e.y, t.y, n.y, r)
}
function hM(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const pM = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
    , gg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
    , yg = gg("applewebkit/") && !gg("chrome/") ? Math.round : yt;
function vg(e) {
    e.min = yg(e.min),
        e.max = yg(e.max)
}
function mM(e) {
    vg(e.x),
        vg(e.y)
}
function p1(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !_N(sg(t), sg(n), .2)
}
function gM(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const yM = h1({
    attachResizeListener: (e, t) => hs(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
    , zu = {
        current: void 0
    }
    , m1 = h1({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!zu.current) {
                const e = new yM({});
                e.mount(window),
                    e.setOptions({
                        layoutScroll: !0
                    }),
                    zu.current = e
            }
            return zu.current
        }
        ,
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        }
        ,
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    })
    , ph = x.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
function xg(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function vM(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const o = xg(i, t);
            return !n && typeof o == "function" && (n = !0),
                o
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const o = r[i];
                    typeof o == "function" ? o() : xg(e[i], null)
                }
            }
    }
}
function xM(...e) {
    return x.useCallback(vM(...e), e)
}
class wM extends x.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = n.offsetParent
                , i = wd(r) && r.offsetWidth || 0
                , o = wd(r) && r.offsetHeight || 0
                , s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0,
                s.width = n.offsetWidth || 0,
                s.top = n.offsetTop,
                s.left = n.offsetLeft,
                s.right = i - s.width - s.left,
                s.bottom = o - s.height - s.top
        }
        return null
    }
    componentDidUpdate() { }
    render() {
        return this.props.children
    }
}
function SM({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: o }) {
    var f;
    const s = x.useId()
        , a = x.useRef(null)
        , l = x.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        })
        , { nonce: u } = x.useContext(ph)
        , c = ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref)
        , d = xM(a, c);
    return x.useInsertionEffect(() => {
        const { width: h, height: v, top: g, left: S, right: p, bottom: m } = l.current;
        if (t || o === !1 || !a.current || !h || !v)
            return;
        const y = n === "left" ? `left: ${S}` : `right: ${p}`
            , b = r === "bottom" ? `bottom: ${m}` : `top: ${g}`;
        a.current.dataset.motionPopId = s;
        const C = document.createElement("style");
        u && (C.nonce = u);
        const T = i ?? document.head;
        return T.appendChild(C),
            C.sheet && C.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${v}px !important;
            ${y}px !important;
            ${b}px !important;
          }
        `),
            () => {
                T.contains(C) && T.removeChild(C)
            }
    }
        , [t]),
        w.jsx(wM, {
            isPresent: t,
            childRef: a,
            sizeRef: l,
            pop: o,
            children: o === !1 ? e : x.cloneElement(e, {
                ref: d
            })
        })
}
const bM = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s, anchorX: a, anchorY: l, root: u }) => {
    const c = $f(CM)
        , d = x.useId();
    let f = !0
        , h = x.useMemo(() => (f = !1,
        {
            id: d,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: v => {
                c.set(v, !0);
                for (const g of c.values())
                    if (!g)
                        return;
                r && r()
            }
            ,
            register: v => (c.set(v, !1),
                () => c.delete(v))
        }), [n, c, r]);
    return o && f && (h = {
        ...h
    }),
        x.useMemo(() => {
            c.forEach((v, g) => c.set(g, !1))
        }
            , [n]),
        x.useEffect(() => {
            !n && !c.size && r && r()
        }
            , [n]),
        e = w.jsx(SM, {
            pop: s === "popLayout",
            isPresent: n,
            anchorX: a,
            anchorY: l,
            root: u,
            children: e
        }),
        w.jsx(zl.Provider, {
            value: h,
            children: e
        })
}
    ;
function CM() {
    return new Map
}
function g1(e = !0) {
    const t = x.useContext(zl);
    if (t === null)
        return [!0, null];
    const { isPresent: n, onExitComplete: r, register: i } = t
        , o = x.useId();
    x.useEffect(() => {
        if (e)
            return i(o)
    }
        , [e]);
    const s = x.useCallback(() => e && r && r(o), [o, r, e]);
    return !n && r ? [!1, s] : [!0]
}
const oa = e => e.key || "";
function wg(e) {
    const t = [];
    return x.Children.forEach(e, n => {
        x.isValidElement(n) && t.push(n)
    }
    ),
        t
}
const fl = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: s = !1, anchorX: a = "left", anchorY: l = "top", root: u }) => {
    const [c, d] = g1(s)
        , f = x.useMemo(() => wg(e), [e])
        , h = s && !c ? [] : f.map(oa)
        , v = x.useRef(!0)
        , g = x.useRef(f)
        , S = $f(() => new Map)
        , p = x.useRef(new Set)
        , [m, y] = x.useState(f)
        , [b, C] = x.useState(f);
    Wx(() => {
        v.current = !1,
            g.current = f;
        for (let P = 0; P < b.length; P++) {
            const N = oa(b[P]);
            h.includes(N) ? (S.delete(N),
                p.current.delete(N)) : S.get(N) !== !0 && S.set(N, !1)
        }
    }
        , [b, h.length, h.join("-")]);
    const T = [];
    if (f !== m) {
        let P = [...f];
        for (let N = 0; N < b.length; N++) {
            const M = b[N]
                , F = oa(M);
            h.includes(F) || (P.splice(N, 0, M),
                T.push(M))
        }
        return o === "wait" && T.length && (P = T),
            C(wg(P)),
            y(f),
            null
    }
    const { forceRender: E } = x.useContext(zf);
    return w.jsx(w.Fragment, {
        children: b.map(P => {
            const N = oa(P)
                , M = s && !c ? !1 : f === b || h.includes(N)
                , F = () => {
                    if (p.current.has(N))
                        return;
                    if (p.current.add(N),
                        S.has(N))
                        S.set(N, !0);
                    else
                        return;
                    let L = !0;
                    S.forEach($ => {
                        $ || (L = !1)
                    }
                    ),
                        L && (E == null || E(),
                            C(g.current),
                            s && (d == null || d()),
                            r && r())
                }
                ;
            return w.jsx(bM, {
                isPresent: M,
                initial: !v.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: i,
                mode: o,
                root: u,
                onExitComplete: M ? void 0 : F,
                anchorX: a,
                anchorY: l,
                children: P
            }, N)
        }
        )
    })
}
    , y1 = x.createContext({
        strict: !1
    })
    , Sg = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    };
let bg = !1;
function TM() {
    if (bg)
        return;
    const e = {};
    for (const t in Sg)
        e[t] = {
            isEnabled: n => Sg[t].some(r => !!n[r])
        };
    Kw(e),
        bg = !0
}
function v1() {
    return TM(),
        cN()
}
function EM(e) {
    const t = v1();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    Kw(t)
}
const PM = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function hl(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || PM.has(e)
}
let x1 = e => !hl(e);
function kM(e) {
    typeof e == "function" && (x1 = t => t.startsWith("on") ? !hl(t) : e(t))
}
try {
    kM(require("@emotion/is-prop-valid").default)
} catch { }
function RM(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (x1(i) || n === !0 && hl(i) || !t && !hl(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
const Hl = x.createContext({});
function AM(e, t) {
    if (Wl(e)) {
        const { initial: n, animate: r } = e;
        return {
            initial: n === !1 || fs(n) ? n : void 0,
            animate: fs(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function NM(e) {
    const { initial: t, animate: n } = AM(e, x.useContext(Hl));
    return x.useMemo(() => ({
        initial: t,
        animate: n
    }), [Cg(t), Cg(n)])
}
function Cg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const mh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function w1(e, t, n) {
    for (const r in t)
        !Ve(t[r]) && !Jw(r, n) && (e[r] = t[r])
}
function MM({ transformTemplate: e }, t) {
    return x.useMemo(() => {
        const n = mh();
        return fh(n, t, e),
            Object.assign({}, n.vars, n.style)
    }
        , [t])
}
function jM(e, t) {
    const n = e.style || {}
        , r = {};
    return w1(r, n, e),
        Object.assign(r, MM(e, t)),
        r
}
function DM(e, t) {
    const n = {}
        , r = jM(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
        r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
        r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
        e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
        n.style = r,
        n
}
const S1 = () => ({
    ...mh(),
    attrs: {}
});
function LM(e, t, n, r) {
    const i = x.useMemo(() => {
        const o = S1();
        return e1(o, t, n1(r), e.transformTemplate, e.style),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
        , [t]);
    if (e.style) {
        const o = {};
        w1(o, e.style, e),
            i.style = {
                ...o,
                ...i.style
            }
    }
    return i
}
const OM = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function gh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(OM.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function IM(e, t, n, { latestValues: r }, i, o = !1, s) {
    const l = (s ?? gh(e) ? LM : DM)(t, r, i, e)
        , u = RM(t, typeof e == "string", o)
        , c = e !== x.Fragment ? {
            ...u,
            ...l,
            ref: n
        } : {}
        , { children: d } = t
        , f = x.useMemo(() => Ve(d) ? d.get() : d, [d]);
    return x.createElement(e, {
        ...c,
        children: f
    })
}
function FM({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
    return {
        latestValues: _M(n, r, i, e),
        renderState: t()
    }
}
function _M(e, t, n, r) {
    const i = {}
        , o = r(e, {});
    for (const f in o)
        i[f] = Pa(o[f]);
    let { initial: s, animate: a } = e;
    const l = Wl(e)
        , u = Ww(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial),
        a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    if (d && typeof d != "boolean" && !Ul(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const v = ih(e, f[h]);
            if (v) {
                const { transitionEnd: g, transition: S, ...p } = v;
                for (const m in p) {
                    let y = p[m];
                    if (Array.isArray(y)) {
                        const b = c ? y.length - 1 : 0;
                        y = y[b]
                    }
                    y !== null && (i[m] = y)
                }
                for (const m in g)
                    i[m] = g[m]
            }
        }
    }
    return i
}
const b1 = e => (t, n) => {
    const r = x.useContext(Hl)
        , i = x.useContext(zl)
        , o = () => FM(e, t, r, i);
    return n ? o() : $f(o)
}
    , VM = b1({
        scrapeMotionValuesFromProps: hh,
        createRenderState: mh
    })
    , BM = b1({
        scrapeMotionValuesFromProps: r1,
        createRenderState: S1
    })
    , zM = Symbol.for("motionComponentSymbol");
function $M(e, t, n) {
    const r = x.useRef(n);
    x.useInsertionEffect(() => {
        r.current = n
    }
    );
    const i = x.useRef(null);
    return x.useCallback(o => {
        var a;
        o && ((a = e.onMount) == null || a.call(e, o)),
            t && (o ? t.mount(o) : t.unmount());
        const s = r.current;
        if (typeof s == "function")
            if (o) {
                const l = s(o);
                typeof l == "function" && (i.current = l)
            } else
                i.current ? (i.current(),
                    i.current = null) : s(o);
        else
            s && (s.current = o)
    }
        , [t])
}
const C1 = x.createContext({});
function ri(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function UM(e, t, n, r, i, o) {
    var y, b;
    const { visualElement: s } = x.useContext(Hl)
        , a = x.useContext(y1)
        , l = x.useContext(zl)
        , u = x.useContext(ph)
        , c = u.reducedMotion
        , d = u.skipAnimations
        , f = x.useRef(null)
        , h = x.useRef(!1);
    r = r || a.renderer,
        !f.current && r && (f.current = r(e, {
            visualState: t,
            parent: s,
            props: n,
            presenceContext: l,
            blockInitialAnimation: l ? l.initial === !1 : !1,
            reducedMotionConfig: c,
            skipAnimations: d,
            isSVG: o
        }),
            h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const v = f.current
        , g = x.useContext(C1);
    v && !v.projection && i && (v.type === "html" || v.type === "svg") && WM(f.current, n, i, g);
    const S = x.useRef(!1);
    x.useInsertionEffect(() => {
        v && S.current && v.update(n, l)
    }
    );
    const p = n[Mw]
        , m = x.useRef(!!p && !((y = window.MotionHandoffIsComplete) != null && y.call(window, p)) && ((b = window.MotionHasOptimisedAnimation) == null ? void 0 : b.call(window, p)));
    return Wx(() => {
        h.current = !0,
            v && (S.current = !0,
                window.MotionIsMounted = !0,
                v.updateFeatures(),
                v.scheduleRenderMicrotask(),
                m.current && v.animationState && v.animationState.animateChanges())
    }
    ),
        x.useEffect(() => {
            v && (!m.current && v.animationState && v.animationState.animateChanges(),
                m.current && (queueMicrotask(() => {
                    var C;
                    (C = window.MotionHandoffMarkAsComplete) == null || C.call(window, p)
                }
                ),
                    m.current = !1),
                v.enteringChildren = void 0)
        }
        ),
        v
}
function WM(e, t, n, r) {
    const { layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : T1(e.parent)),
        e.projection.setOptions({
            layoutId: i,
            layout: o,
            alwaysMeasureLayout: !!s || a && ri(a),
            visualElement: e,
            animationType: typeof o == "string" ? o : "both",
            initialPromotionConfig: r,
            crossfade: c,
            layoutScroll: l,
            layoutRoot: u
        })
}
function T1(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : T1(e.parent)
}
function $u(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
    r && EM(r);
    const o = n ? n === "svg" : gh(e)
        , s = o ? BM : VM;
    function a(u, c) {
        let d;
        const f = {
            ...x.useContext(ph),
            ...u,
            layoutId: HM(u)
        }
            , { isStatic: h } = f
            , v = NM(u)
            , g = s(u, h);
        if (!h && Ux) {
            KM();
            const S = GM(f);
            d = S.MeasureLayout,
                v.visualElement = UM(e, g, f, i, S.ProjectionNode, o)
        }
        return w.jsxs(Hl.Provider, {
            value: v,
            children: [d && v.visualElement ? w.jsx(d, {
                visualElement: v.visualElement,
                ...f
            }) : null, IM(e, u, $M(g, v.visualElement, c), g, h, t, o)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = x.forwardRef(a);
    return l[zM] = e,
        l
}
function HM({ layoutId: e }) {
    const t = x.useContext(zf).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function KM(e, t) {
    x.useContext(y1).strict
}
function GM(e) {
    const t = v1()
        , { drag: n, layout: r } = t;
    if (!n && !r)
        return {};
    const i = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
function QM(e, t) {
    if (typeof Proxy > "u")
        return $u;
    const n = new Map
        , r = (o, s) => $u(o, s, e, t)
        , i = (o, s) => r(o, s);
    return new Proxy(i, {
        get: (o, s) => s === "create" ? r : (n.has(s) || n.set(s, $u(s, void 0, e, t)),
            n.get(s))
    })
}
const XM = (e, t) => t.isSVG ?? gh(e) ? new kN(t) : new SN(t, {
    allowProjection: e !== x.Fragment
});
class YM extends hr {
    constructor(t) {
        super(t),
            t.animationState || (t.animationState = jN(t))
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        Ul(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const { animate: t } = this.node.getProps()
            , { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
            (t = this.unmountControls) == null || t.call(this)
    }
}
let qM = 0;
class ZM extends hr {
    constructor() {
        super(...arguments),
            this.id = qM++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent: t, onExitComplete: n } = this.node.presenceContext
            , { isPresent: r } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => {
            n(this.id)
        }
        )
    }
    mount() {
        const { register: t, onExitComplete: n } = this.node.presenceContext || {};
        n && n(this.id),
            t && (this.unmount = t(this.id))
    }
    unmount() { }
}
const JM = {
    animation: {
        Feature: YM
    },
    exit: {
        Feature: ZM
    }
};
function As(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const ej = e => t => lh(t) && e(t, As(t));
function Vo(e, t, n, r) {
    return hs(e, t, ej(n), r)
}
const E1 = ({ current: e }) => e ? e.ownerDocument.defaultView : null
    , Tg = (e, t) => Math.abs(e - t);
function tj(e, t) {
    const n = Tg(e.x, t.x)
        , r = Tg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const Eg = new Set(["auto", "scroll"]);
class P1 {
    constructor(t, n, { transformPagePoint: r, contextWindow: i = window, dragSnapToOrigin: o = !1, distanceThreshold: s = 3, element: a } = {}) {
        if (this.startEvent = null,
            this.lastMoveEvent = null,
            this.lastMoveEventInfo = null,
            this.handlers = {},
            this.contextWindow = window,
            this.scrollPositions = new Map,
            this.removeScrollListeners = null,
            this.onElementScroll = h => {
                this.handleScroll(h.target)
            }
            ,
            this.onWindowScroll = () => {
                this.handleScroll(window)
            }
            ,
            this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const h = Wu(this.lastMoveEventInfo, this.history)
                    , v = this.startEvent !== null
                    , g = tj(h.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!v && !g)
                    return;
                const { point: S } = h
                    , { timestamp: p } = Ne;
                this.history.push({
                    ...S,
                    timestamp: p
                });
                const { onStart: m, onMove: y } = this.handlers;
                v || (m && m(this.lastMoveEvent, h),
                    this.startEvent = this.lastMoveEvent),
                    y && y(this.lastMoveEvent, h)
            }
            ,
            this.handlePointerMove = (h, v) => {
                this.lastMoveEvent = h,
                    this.lastMoveEventInfo = Uu(v, this.transformPagePoint),
                    oe.update(this.updatePoint, !0)
            }
            ,
            this.handlePointerUp = (h, v) => {
                this.end();
                const { onEnd: g, onSessionEnd: S, resumeAnimation: p } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && p && p(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const m = Wu(h.type === "pointercancel" ? this.lastMoveEventInfo : Uu(v, this.transformPagePoint), this.history);
                this.startEvent && g && g(h, m),
                    S && S(h, m)
            }
            ,
            !lh(t))
            return;
        this.dragSnapToOrigin = o,
            this.handlers = n,
            this.transformPagePoint = r,
            this.distanceThreshold = s,
            this.contextWindow = i || window;
        const l = As(t)
            , u = Uu(l, this.transformPagePoint)
            , { point: c } = u
            , { timestamp: d } = Ne;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const { onSessionStart: f } = n;
        f && f(t, Wu(u, this.history)),
            this.removeListeners = Ps(Vo(this.contextWindow, "pointermove", this.handlePointerMove), Vo(this.contextWindow, "pointerup", this.handlePointerUp), Vo(this.contextWindow, "pointercancel", this.handlePointerUp)),
            a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n;) {
            const r = getComputedStyle(n);
            (Eg.has(r.overflowX) || Eg.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
                n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
            window.addEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.addEventListener("scroll", this.onWindowScroll),
            this.removeScrollListeners = () => {
                window.removeEventListener("scroll", this.onElementScroll, {
                    capture: !0
                }),
                    window.removeEventListener("scroll", this.onWindowScroll)
            }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
            , i = r ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: t.scrollLeft,
                y: t.scrollTop
            }
            , o = {
                x: i.x - n.x,
                y: i.y - n.y
            };
        o.x === 0 && o.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += o.x,
            this.lastMoveEventInfo.point.y += o.y) : this.history.length > 0 && (this.history[0].x -= o.x,
                this.history[0].y -= o.y),
            this.scrollPositions.set(t, i),
            oe.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            ur(this.updatePoint)
    }
}
function Uu(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Pg(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Wu({ point: e }, t) {
    return {
        point: e,
        delta: Pg(e, k1(t)),
        offset: Pg(e, nj(t)),
        velocity: rj(t, .1)
    }
}
function nj(e) {
    return e[0]
}
function k1(e) {
    return e[e.length - 1]
}
function rj(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
        , r = null;
    const i = k1(e);
    for (; n >= 0 && (r = e[n],
        !(i.timestamp - r.timestamp > vt(t)));)
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && i.timestamp - r.timestamp > vt(t) * 2 && (r = e[1]);
    const o = mt(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
        s.y === 1 / 0 && (s.y = 0),
        s
}
function ij(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? he(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? he(n, e, r.max) : Math.min(e, n)),
        e
}
function kg(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function oj(e, { top: t, left: n, bottom: r, right: i }) {
    return {
        x: kg(e.x, n, i),
        y: kg(e.y, t, r)
    }
}
function Rg(e, t) {
    let n = t.min - e.min
        , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function sj(e, t) {
    return {
        x: Rg(e.x, t.x),
        y: Rg(e.y, t.y)
    }
}
function aj(e, t) {
    let n = .5;
    const r = He(e)
        , i = He(t);
    return i > r ? n = us(t.min, t.max - r, e.min) : r > i && (n = us(e.min, e.max - i, t.min)),
        rn(0, 1, n)
}
function lj(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
        t.max !== void 0 && (n.max = t.max - e.min),
        n
}
const Ed = .35;
function uj(e = Ed) {
    return e === !1 ? e = 0 : e === !0 && (e = Ed),
    {
        x: Ag(e, "left", "right"),
        y: Ag(e, "top", "bottom")
    }
}
function Ag(e, t, n) {
    return {
        min: Ng(e, t),
        max: Ng(e, n)
    }
}
function Ng(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const cj = new WeakMap;
class dj {
    constructor(t) {
        this.openDragLock = null,
            this.isDragging = !1,
            this.currentDirection = null,
            this.originPoint = {
                x: 0,
                y: 0
            },
            this.constraints = !1,
            this.hasMutatedConstraints = !1,
            this.elastic = Ce(),
            this.latestPointerEvent = null,
            this.latestPanInfo = null,
            this.visualElement = t
    }
    start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
        const { presenceContext: i } = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const o = d => {
            n && this.snapToCursor(As(d).point),
                this.stopAnimation()
        }
            , s = (d, f) => {
                const { drag: h, dragPropagation: v, onDragStart: g } = this.getProps();
                if (h && !v && (this.openDragLock && this.openDragLock(),
                    this.openDragLock = BA(h),
                    !this.openDragLock))
                    return;
                this.latestPointerEvent = d,
                    this.latestPanInfo = f,
                    this.isDragging = !0,
                    this.currentDirection = null,
                    this.resolveConstraints(),
                    this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                    Ht(p => {
                        let m = this.getAxisMotionValue(p).get() || 0;
                        if (en.test(m)) {
                            const { projection: y } = this.visualElement;
                            if (y && y.layout) {
                                const b = y.layout.layoutBox[p];
                                b && (m = He(b) * (parseFloat(m) / 100))
                            }
                        }
                        this.originPoint[p] = m
                    }
                    ),
                    g && oe.update(() => g(d, f), !1, !0),
                    gd(this.visualElement, "transform");
                const { animationState: S } = this.visualElement;
                S && S.setActive("whileDrag", !0)
            }
            , a = (d, f) => {
                this.latestPointerEvent = d,
                    this.latestPanInfo = f;
                const { dragPropagation: h, dragDirectionLock: v, onDirectionLock: g, onDrag: S } = this.getProps();
                if (!h && !this.openDragLock)
                    return;
                const { offset: p } = f;
                if (v && this.currentDirection === null) {
                    this.currentDirection = hj(p),
                        this.currentDirection !== null && g && g(this.currentDirection);
                    return
                }
                this.updateAxis("x", f.point, p),
                    this.updateAxis("y", f.point, p),
                    this.visualElement.render(),
                    S && oe.update(() => S(d, f), !1, !0)
            }
            , l = (d, f) => {
                this.latestPointerEvent = d,
                    this.latestPanInfo = f,
                    this.stop(d, f),
                    this.latestPointerEvent = null,
                    this.latestPanInfo = null
            }
            , u = () => {
                const { dragSnapToOrigin: d } = this.getProps();
                (d || this.constraints) && this.startAnimation({
                    x: 0,
                    y: 0
                })
            }
            , { dragSnapToOrigin: c } = this.getProps();
        this.panSession = new P1(t, {
            onSessionStart: o,
            onStart: s,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: E1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
            , i = n || this.latestPanInfo
            , o = this.isDragging;
        if (this.cancel(),
            !o || !i || !r)
            return;
        const { velocity: s } = i;
        this.startAnimation(s);
        const { onDragEnd: a } = this.getProps();
        a && oe.postRender(() => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        t && (t.isAnimationBlocked = !1),
            this.endPanSession();
        const { dragPropagation: r } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
            this.openDragLock = null),
            n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
            this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const { drag: i } = this.getProps();
        if (!r || !sa(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = ij(s, this.constraints[t], this.elastic[t])),
            o.set(s)
    }
    resolveConstraints() {
        var o;
        const { dragConstraints: t, dragElastic: n } = this.getProps()
            , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout
            , i = this.constraints;
        t && ri(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = oj(r.layoutBox, t) : this.constraints = !1,
            this.elastic = uj(n),
            i !== this.constraints && !ri(t) && r && this.constraints && !this.hasMutatedConstraints && Ht(s => {
                this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = lj(r.layoutBox[s], this.constraints[s]))
            }
            )
    }
    resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
        if (!t || !ri(t))
            return !1;
        const r = t.current;
        Gi(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const { projection: i } = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = mN(r, i.root, this.visualElement.getTransformPagePoint());
        let s = sj(i.layout.layoutBox, o);
        if (n) {
            const a = n(fN(s));
            this.hasMutatedConstraints = !!a,
                a && (s = Qw(a))
        }
        return s
    }
    startAnimation(t) {
        const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps()
            , l = this.constraints || {}
            , u = Ht(c => {
                if (!sa(c, n, this.currentDirection))
                    return;
                let d = l && l[c] || {};
                s && (d = {
                    min: 0,
                    max: 0
                });
                const f = i ? 200 : 1e6
                    , h = i ? 40 : 1e7
                    , v = {
                        type: "inertia",
                        velocity: r ? t[c] : 0,
                        bounceStiffness: f,
                        bounceDamping: h,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...o,
                        ...d
                    };
                return this.startAxisValueAnimation(c, v)
            }
            );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return gd(this.visualElement, t),
            r.start(rh(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Ht(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
            , r = this.visualElement.getProps()
            , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Ht(n => {
            const { drag: r } = this.getProps();
            if (!sa(n, r, this.currentDirection))
                return;
            const { projection: i } = this.visualElement
                , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const { min: s, max: a } = i.layout.layoutBox[n]
                    , l = o.get() || 0;
                o.set(t[n] - he(s, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag: t, dragConstraints: n } = this.getProps()
            , { projection: r } = this.visualElement;
        if (!ri(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Ht(s => {
            const a = this.getAxisMotionValue(s);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[s] = aj({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        }
        );
        const { transformTemplate: o } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.constraints = !1,
            this.resolveConstraints(),
            Ht(s => {
                if (!sa(s, t, null))
                    return;
                const a = this.getAxisMotionValue(s)
                    , { min: l, max: u } = this.constraints[s];
                a.set(he(l, u, i[s]))
            }
            ),
            this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        cj.set(this.visualElement, this);
        const t = this.visualElement.current
            , n = Vo(t, "pointerdown", u => {
                const { drag: c, dragListener: d = !0 } = this.getProps()
                    , f = u.target
                    , h = f !== t && KA(f);
                c && d && !h && this.start(u)
            }
            );
        let r;
        const i = () => {
            const { dragConstraints: u } = this.getProps();
            ri(u) && u.current && (this.constraints = this.resolveRefConstraints(),
                r || (r = fj(t, u.current, () => this.scalePositionWithinConstraints())))
        }
            , { projection: o } = this.visualElement
            , s = o.addEventListener("measure", i);
        o && !o.layout && (o.root && o.root.updateScroll(),
            o.updateLayout()),
            oe.read(i);
        const a = hs(window, "resize", () => this.scalePositionWithinConstraints())
            , l = o.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c }) => {
                this.isDragging && c && (Ht(d => {
                    const f = this.getAxisMotionValue(d);
                    f && (this.originPoint[d] += u[d].translate,
                        f.set(f.get() + u[d].translate))
                }
                ),
                    this.visualElement.render())
            }
            );
        return () => {
            a(),
                n(),
                s(),
                l && l(),
                r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
            , { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Ed, dragMomentum: a = !0 } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: a
        }
    }
}
function Mg(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function fj(e, t, n) {
    const r = _m(e, Mg(n))
        , i = _m(t, Mg(n));
    return () => {
        r(),
            i()
    }
}
function sa(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function hj(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
        n
}
class pj extends hr {
    constructor(t) {
        super(t),
            this.removeGroupControls = yt,
            this.removeListeners = yt,
            this.controls = new dj(t)
    }
    mount() {
        const { dragControls: t } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
            this.removeListeners = this.controls.addListeners() || yt
    }
    update() {
        const { dragControls: t } = this.node.getProps()
            , { dragControls: n } = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
            t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
            this.removeListeners(),
            this.controls.isDragging || this.controls.endPanSession()
    }
}
const Hu = e => (t, n) => {
    e && oe.update(() => e(t, n), !1, !0)
}
    ;
class mj extends hr {
    constructor() {
        super(...arguments),
            this.removePointerDownListener = yt
    }
    onPointerDown(t) {
        this.session = new P1(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: E1(this.node)
        })
    }
    createPanHandlers() {
        const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
        return {
            onSessionStart: Hu(t),
            onStart: Hu(n),
            onMove: Hu(r),
            onEnd: (o, s) => {
                delete this.session,
                    i && oe.postRender(() => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Vo(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
            this.session && this.session.end()
    }
}
let Ku = !1;
class gj extends x.Component {
    componentDidMount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props
            , { projection: o } = t;
        o && (n.group && n.group.add(o),
            r && r.register && i && r.register(o),
            Ku && o.root.didUpdate(),
            o.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }
            ),
            o.setOptions({
                ...o.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove()
            })),
            ka.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props
            , { projection: s } = r;
        return s && (s.isPresent = o,
            t.layoutDependency !== n && s.setOptions({
                ...s.options,
                layoutDependency: n
            }),
            Ku = !0,
            i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o ? s.willUpdate() : this.safeToRemove(),
            t.isPresent !== o && (o ? s.promote() : s.relegate() || oe.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove()
            }
            ))),
            null
    }
    componentDidUpdate() {
        const { projection: t } = this.props.visualElement;
        t && (t.root.didUpdate(),
            ah.postRender(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }
            ))
    }
    componentWillUnmount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props
            , { projection: i } = t;
        Ku = !0,
            i && (i.scheduleCheckAfterUnmount(),
                n && n.group && n.group.remove(i),
                r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function R1(e) {
    const [t, n] = g1()
        , r = x.useContext(zf);
    return w.jsx(gj, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: x.useContext(C1),
        isPresent: t,
        safeToRemove: n
    })
}
const yj = {
    pan: {
        Feature: mj
    },
    drag: {
        Feature: pj,
        ProjectionNode: m1,
        MeasureLayout: R1
    }
};
function jg(e, t, n) {
    const { props: r } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
        , o = r[i];
    o && oe.postRender(() => o(t, As(t)))
}
class vj extends hr {
    mount() {
        const { current: t } = this.node;
        t && (this.unmount = $A(t, (n, r) => (jg(this.node, r, "Start"),
            i => jg(this.node, i, "End"))))
    }
    unmount() { }
}
class xj extends hr {
    constructor() {
        super(...arguments),
            this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
            this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
            this.isActive = !1)
    }
    mount() {
        this.unmount = Ps(hs(this.node.current, "focus", () => this.onFocus()), hs(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() { }
}
function Dg(e, t, n) {
    const { props: r } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
        , o = r[i];
    o && oe.postRender(() => o(t, As(t)))
}
class wj extends hr {
    mount() {
        const { current: t } = this.node;
        if (!t)
            return;
        const { globalTapTarget: n, propagate: r } = this.node.props;
        this.unmount = QA(t, (i, o) => (Dg(this.node, o, "Start"),
            (s, { success: a }) => Dg(this.node, s, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() { }
}
const Pd = new WeakMap
    , Gu = new WeakMap
    , Sj = e => {
        const t = Pd.get(e.target);
        t && t(e)
    }
    , bj = e => {
        e.forEach(Sj)
    }
    ;
function Cj({ root: e, ...t }) {
    const n = e || document;
    Gu.has(n) || Gu.set(n, {});
    const r = Gu.get(n)
        , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(bj, {
        root: e,
        ...t
    })),
        r[i]
}
function Tj(e, t, n) {
    const r = Cj(t);
    return Pd.set(e, n),
        r.observe(e),
        () => {
            Pd.delete(e),
                r.unobserve(e)
        }
}
const Ej = {
    some: 0,
    all: 1
};
class Pj extends hr {
    constructor() {
        super(...arguments),
            this.hasEnteredView = !1,
            this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const { viewport: t = {} } = this.node.getProps()
            , { root: n, margin: r, amount: i = "some", once: o } = t
            , s = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: typeof i == "number" ? i : Ej[i]
            }
            , a = l => {
                const { isIntersecting: u } = l;
                if (this.isInView === u || (this.isInView = u,
                    o && !u && this.hasEnteredView))
                    return;
                u && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", u);
                const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps()
                    , f = u ? c : d;
                f && f(l)
            }
            ;
        return Tj(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(kj(t, n)) && this.startObserver()
    }
    unmount() { }
}
function kj({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return n => e[n] !== t[n]
}
const Rj = {
    inView: {
        Feature: Pj
    },
    tap: {
        Feature: wj
    },
    focus: {
        Feature: xj
    },
    hover: {
        Feature: vj
    }
}
    , Aj = {
        layout: {
            ProjectionNode: m1,
            MeasureLayout: R1
        }
    }
    , Nj = {
        ...JM,
        ...Rj,
        ...yj,
        ...Aj
    }
    , ee = QM(Nj, XM)
    , Ns = "/assets/tiger-header-B_edPfGx.png"
    , Mj = "/assets/temple-bg-xbdkwM8g.jpg"
    , so = ({ children: e }) => w.jsxs("div", {
        className: "min-h-screen flex flex-col items-center justify-center relative overflow-hidden",
        children: [w.jsxs("div", {
            className: "absolute inset-0",
            children: [w.jsx("img", {
                src: Mj,
                alt: "",
                className: "w-full h-full object-cover"
            }), w.jsx("div", {
                className: "absolute inset-0",
                style: {
                    background: "linear-gradient(rgba(0,0,0,0.3) 0%, rgba(139,10,10,0.6) 50%, rgba(0,0,0,0.85) 100%)"
                }
            })]
        }), w.jsx("div", {
            className: "relative z-10 w-full max-w-[380px] mx-auto px-6",
            children: e
        })]
    })
    , Rr = ({ children: e }) => w.jsx("div", {
        className: "rounded-2xl p-6 text-center",
        style: {
            background: "linear-gradient(rgba(20,5,5,0.92), rgba(10,2,2,0.96))",
            border: "1px solid rgba(218,165,32,0.3)",
            boxShadow: "0 0 40px rgba(0,0,0,0.5)"
        },
        children: e
    })
    , tn = ({ children: e, onClick: t, type: n = "button", disabled: r }) => w.jsx(ee.button, {
        whileHover: {
            scale: 1.03
        },
        whileTap: {
            scale: .97
        },
        onClick: t,
        type: n,
        disabled: r,
        className: "w-full py-3.5 rounded-xl text-lg font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        style: {
            background: "linear-gradient(135deg, hsl(51,100%,50%), hsl(43,76%,49%), hsl(30,100%,50%))",
            color: "hsl(0,68%,6%)",
            boxShadow: "0 0 35px rgba(255,215,0,0.55)"
        },
        children: e
    })
    , Xi = () => w.jsx("div", {
        className: "my-4 h-px",
        style: {
            background: "linear-gradient(90deg, transparent, rgba(218,165,32,0.4), transparent)"
        }
    })
    , jj = () => {
        const e = Xr();
        return w.jsx(so, {
            children: w.jsx(ee.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .7,
                    ease: "easeOut"
                },
                children: w.jsxs(Rr, {
                    children: [w.jsx(ee.div, {
                        animate: {
                            y: [0, -4, 0]
                        },
                        transition: {
                            repeat: 1 / 0,
                            duration: 2.5,
                            ease: "easeInOut"
                        },
                        className: "flex justify-center mb-2",
                        children: w.jsx("img", {
                            src: Ns,
                            alt: "Fortune Tiger",
                            className: "w-28 h-28 object-contain drop-shadow-2xl"
                        })
                    }), w.jsx(ee.h1, {
                        animate: {
                            scale: [1, 1.02, 1]
                        },
                        transition: {
                            repeat: 1 / 0,
                            duration: 2,
                            ease: "easeInOut"
                        },
                        className: "text-2xl font-extrabold mb-1",
                        style: {
                            background: "linear-gradient(hsl(51,100%,50%), hsl(43,76%,49%), hsl(30,100%,50%))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            filter: "drop-shadow(0 0 10px rgba(255,215,0,0.5))"
                        },
                        children: "PARABÉNS!"
                    }), w.jsx("p", {
                        className: "text-sm font-bold text-card-foreground",
                        children: "Bem-vindo ao Fortune Tiger"
                    }), w.jsx("p", {
                        className: "text-xs mt-1 text-muted-foreground",
                        children: "A sua conta foi selecionada para uma oferta exclusiva"
                    }), w.jsx(Xi, {}), w.jsxs("div", {
                        className: "flex items-center justify-center gap-2 mb-1",
                        children: [w.jsx("span", {
                            className: "text-2xl",
                            children: "🎆"
                        }), w.jsxs("div", {
                            children: [w.jsx("p", {
                                className: "text-xs",
                                style: {
                                    color: "hsl(43,76%,49%)"
                                },
                                children: "Bónus de Boas-Vindas"
                            }), w.jsx("p", {
                                className: "text-2xl font-bold",
                                style: {
                                    background: "linear-gradient(hsl(142,71%,45%), hsl(142,76%,36%))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                },
                                children: "10 Jogadas"
                            })]
                        })]
                    }), w.jsxs("p", {
                        className: "text-xs mb-4",
                        style: {
                            color: "hsl(43,76%,49%)"
                        },
                        children: ["Cada jogada com aposta de ", w.jsx("strong", {
                            children: "1.000 Kz"
                        })]
                    }), w.jsx(Xi, {}), w.jsx("div", {
                        className: "text-left space-y-2 mb-6 px-2",
                        children: [w.jsxs(w.Fragment, {
                            children: ["Jogue ", w.jsx("strong", {
                                children: "10 rodadas gratuitas"
                            }), " no Fortune Tiger"]
                        }), w.jsxs(w.Fragment, {
                            children: ["Acumule ganhos com ", w.jsx("strong", {
                                children: "multiplicadores elevados"
                            })]
                        }), w.jsxs(w.Fragment, {
                            children: ["Levante os seus ganhos ", w.jsx("strong", {
                                children: "após as jogadas"
                            })]
                        })].map((t, n) => w.jsxs(ee.div, {
                            initial: {
                                opacity: 0,
                                x: -10
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: .5 + n * .15
                            },
                            className: "flex items-center gap-2 text-xs",
                            children: [w.jsx("span", {
                                className: "text-base",
                                children: "✅"
                            }), w.jsx("span", {
                                className: "text-card-foreground/80",
                                children: t
                            })]
                        }, n))
                    }), w.jsx(tn, {
                        onClick: () => e("/register"),
                        children: "🐅 Jogar Agora"
                    }), w.jsx("p", {
                        className: "text-[10px] mt-3 text-muted-foreground",
                        children: "Oferta limitada · Apenas para novas contas"
                    })]
                })
            })
        })
    }
    , Lg = ["💰", "💵", "🪙", "💎", "🧧"]
    , Dj = ({ show: e, winAmount: t, onComplete: n }) => {
        const [r, i] = x.useState([]);
        return x.useEffect(() => {
            if (e) {
                const o = Array.from({
                    length: 40
                }, (a, l) => ({
                    id: l,
                    emoji: Lg[Math.floor(Math.random() * Lg.length)],
                    left: Math.random() * 100,
                    delay: Math.random() * 2,
                    duration: 2 + Math.random() * 3,
                    size: 16 + Math.random() * 20
                }));
                i(o);
                const s = setTimeout(() => {
                    n()
                }
                    , 3e3);
                return () => clearTimeout(s)
            } else
                i([])
        }
            , [e, n]),
            w.jsx(fl, {
                children: e && w.jsxs(ee.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    },
                    className: "fixed inset-0 z-50 pointer-events-none overflow-hidden",
                    children: [w.jsx("div", {
                        className: "absolute inset-0 bg-black/60"
                    }), r.map(o => w.jsx(ee.div, {
                        initial: {
                            y: -50,
                            x: `${o.left}vw`,
                            opacity: 0,
                            rotate: 0
                        },
                        animate: {
                            y: "110vh",
                            opacity: [0, 1, 1, .5],
                            rotate: [0, 360, 720]
                        },
                        transition: {
                            duration: o.duration,
                            delay: o.delay,
                            ease: "easeIn"
                        },
                        className: "absolute top-0",
                        style: {
                            fontSize: o.size,
                            left: 0
                        },
                        children: o.emoji
                    }, o.id)), w.jsx("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: w.jsx(ee.div, {
                            initial: {
                                scale: 0,
                                rotate: -10
                            },
                            animate: {
                                scale: [0, 1.3, 1],
                                rotate: [-10, 5, 0]
                            },
                            transition: {
                                duration: .6,
                                ease: "backOut"
                            },
                            className: "text-center",
                            children: w.jsxs(ee.div, {
                                animate: {
                                    scale: [1, 1.05, 1]
                                },
                                transition: {
                                    repeat: 1 / 0,
                                    duration: 1.5
                                },
                                children: [w.jsx("p", {
                                    className: "text-5xl mb-2",
                                    children: "🎉"
                                }), w.jsx("p", {
                                    className: "text-3xl font-extrabold mb-1",
                                    style: {
                                        background: "linear-gradient(hsl(51,100%,50%), hsl(30,100%,50%))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        filter: "drop-shadow(0 0 20px rgba(255,215,0,0.8))"
                                    },
                                    children: "GANHOU!"
                                }), w.jsxs("p", {
                                    className: "text-4xl font-extrabold",
                                    style: {
                                        background: "linear-gradient(hsl(142,71%,45%), hsl(142,76%,36%))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        filter: "drop-shadow(0 0 15px rgba(34,197,94,0.6))"
                                    },
                                    children: ["+", t.toLocaleString(), " Kz"]
                                })]
                            })
                        })
                    })]
                })
            })
    }
    , br = new (window.AudioContext || window.webkitAudioContext);
function kt(e, t, n = "square", r = .15) {
    const i = br.createOscillator()
        , o = br.createGain();
    i.type = n,
        i.frequency.value = e,
        o.gain.value = r,
        o.gain.exponentialRampToValueAtTime(.001, br.currentTime + t),
        i.connect(o),
        o.connect(br.destination),
        i.start(),
        i.stop(br.currentTime + t)
}
const Ut = {
    spin: () => {
        for (let e = 0; e < 8; e++)
            setTimeout(() => kt(800 + e * 50, .05, "square", .08), e * 60)
    }
    ,
    reel: () => {
        kt(600, .03, "square", .06)
    }
    ,
    win: () => {
        [523, 659, 784, 1047].forEach((t, n) => {
            setTimeout(() => kt(t, .3, "sine", .2), n * 150)
        }
        )
    }
    ,
    bigWin: () => {
        [523, 659, 784, 1047, 1319, 1568].forEach((t, n) => {
            setTimeout(() => kt(t, .4, "sine", .25), n * 120)
        }
        ),
            setTimeout(() => {
                for (let t = 0; t < 10; t++)
                    setTimeout(() => kt(2e3 + Math.random() * 2e3, .1, "sine", .05), t * 80)
            }
                , 600)
    }
    ,
    click: () => {
        kt(1e3, .05, "square", .1)
    }
    ,
    deposit: () => {
        kt(440, .15, "sine", .15),
            setTimeout(() => kt(660, .15, "sine", .15), 100),
            setTimeout(() => kt(880, .2, "sine", .15), 200)
    }
    ,
    withdraw: () => {
        for (let e = 0; e < 5; e++)
            setTimeout(() => kt(1200 + Math.random() * 800, .15, "sine", .12), e * 100)
    }
    ,
    success: () => {
        [523, 784, 1047].forEach((t, n) => {
            setTimeout(() => kt(t, .25, "sine", .2), n * 200)
        }
        )
    }
}
    , Sr = () => {
        br.state === "suspended" && br.resume()
    }
    , Og = ["🏮", "🔔", "💰", "🧧", "🐅", "🎆"]
    , Lj = 3
    , Oj = 3
    , Ig = 121e3
    , Qu = 10
    , Ij = 500
    , Fj = () => Og[Math.floor(Math.random() * Og.length)]
    , Fg = () => Array.from({
        length: Lj
    }, () => Array.from({
        length: Oj
    }, Fj))
    , _g = [{
        grid: [["🏮", "🔔", "💰"], ["🧧", "🐅", "🧧"], ["🏮", "🏮", "🏮"]],
        win: 8500
    }, {
        grid: [["💰", "🔔", "🧧"], ["🐅", "🏮", "🎆"], ["🧧", "🔔", "🏮"]],
        win: 0
    }, {
        grid: [["💰", "💰", "💰"], ["🔔", "🏮", "🧧"], ["🐅", "🔔", "🏮"]],
        win: 15e3
    }, {
        grid: [["🧧", "🔔", "🏮"], ["🐅", "🐅", "🐅"], ["💰", "🧧", "🔔"]],
        win: 25e3
    }, {
        grid: [["🔔", "🏮", "🐅"], ["💰", "🧧", "🏮"], ["🎆", "🔔", "🧧"]],
        win: 0
    }, {
        grid: [["🐅", "🏮", "🔔"], ["🏮", "🏮", "🏮"], ["🔔", "💰", "🧧"]],
        win: 12e3
    }, {
        grid: [["💰", "🧧", "🐅"], ["🔔", "💰", "🔔"], ["🐅", "🐅", "🐅"]],
        win: 18e3
    }, {
        grid: [["🏮", "🏮", "🏮"], ["🐅", "🐅", "🐅"], ["💰", "💰", "💰"]],
        win: 22e3
    }, {
        grid: [["🧧", "🏮", "💰"], ["🔔", "🐅", "🧧"], ["🎆", "🔔", "🏮"]],
        win: 0
    }, {
        grid: [["🐅", "🐅", "🐅"], ["💰", "💰", "💰"], ["🧧", "🧧", "🧧"]],
        win: 20500
    }]
    , _j = () => {
        const e = Xr()
            , [t, n] = x.useState(Fg)
            , [r, i] = x.useState(!1)
            , [o, s] = x.useState(0)
            , [a, l] = x.useState(Qu)
            , [u, c] = x.useState(0)
            , [d, f] = x.useState(0)
            , [h, v] = x.useState(!1)
            , [g, S] = x.useState(!1)
            , [p, m] = x.useState(!1)
            , [y, b] = x.useState(!1)
            , C = x.useRef(null)
            , [T] = x.useState(() => localStorage.getItem("playerName") || "Jogador")
            , [E] = x.useState("🐅 Ganhe grandes prémios! 🎰 Multiplicadores até 2500x 💰 Fortune Tiger - O jogo mais popular de Angola! 🏮");
        x.useEffect(() => {
            u >= Ig && m(!0)
        }
            , [u]);
        const P = x.useCallback(() => {
            v(!1)
        }
            , [])
            , N = x.useCallback(() => {
                if (a <= 0 || r || h)
                    return;
                Sr(),
                    Ut.spin(),
                    i(!0),
                    S(!1);
                let F = 0;
                C.current = setInterval(() => {
                    if (n(Fg()),
                        Ut.reel(),
                        F++,
                        F >= 15) {
                        clearInterval(C.current);
                        const L = _g[o % _g.length];
                        n(L.grid),
                            i(!1),
                            l($ => $ - 1),
                            s($ => $ + 1),
                            L.win > 0 ? (f(L.win),
                                c($ => Math.min($ + L.win, Ig)),
                                v(!0),
                                L.win >= 15e3 ? Ut.bigWin() : Ut.win()) : (S(!0),
                                    Ut.click(),
                                    setTimeout(() => S(!1), 2e3))
                    }
                }
                    , 80)
            }
                , [a, r, o, h])
            , M = [1, 2, 3];
        return w.jsxs(so, {
            children: [w.jsx(Dj, {
                show: h,
                winAmount: d,
                onComplete: P
            }), w.jsxs(ee.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5
                },
                className: "w-full",
                onClick: Sr,
                children: [w.jsxs("div", {
                    className: "flex justify-between items-center mb-2",
                    children: [w.jsxs("div", {
                        className: "px-3 py-1 rounded-lg text-xs font-bold",
                        style: {
                            background: "rgba(0,0,0,0.85)",
                            border: "1px solid rgba(218,165,32,0.4)",
                            color: "hsl(43,76%,49%)"
                        },
                        children: ["RODADAS", w.jsx("br", {}), w.jsxs("span", {
                            style: {
                                color: "hsl(142,71%,45%)"
                            },
                            children: [Qu - a, "/", Qu]
                        })]
                    }), w.jsxs("div", {
                        className: "text-center",
                        children: [w.jsx("h1", {
                            className: "text-lg font-extrabold tracking-wider",
                            style: {
                                background: "linear-gradient(hsl(0,80%,50%), hsl(0,70%,40%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            },
                            children: "FORTUNE TIGER"
                        }), w.jsxs("p", {
                            className: "text-[10px] font-semibold",
                            style: {
                                color: "hsl(43,76%,49%)"
                            },
                            children: ["Olá, ", T, " 👋"]
                        })]
                    }), w.jsxs("div", {
                        className: "px-3 py-1 rounded-lg text-xs font-bold text-right",
                        style: {
                            background: "rgba(0,0,0,0.85)",
                            border: "1px solid rgba(218,165,32,0.4)",
                            color: "hsl(43,76%,49%)"
                        },
                        children: ["SALDO", w.jsx("br", {}), w.jsxs("span", {
                            style: {
                                color: "hsl(142,71%,45%)"
                            },
                            children: [u.toLocaleString(), " Kz"]
                        })]
                    })]
                }), w.jsx("div", {
                    className: "flex justify-center -mb-6 relative z-20",
                    children: w.jsx(ee.div, {
                        animate: {
                            y: [0, -3, 0]
                        },
                        transition: {
                            repeat: 1 / 0,
                            duration: 2,
                            ease: "easeInOut"
                        },
                        className: "w-20 h-20 rounded-full flex items-center justify-center overflow-hidden",
                        style: {
                            background: "linear-gradient(135deg, hsl(197,71%,73%), hsl(197,50%,85%))",
                            border: "3px solid hsl(43,76%,49%)",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.4), 0 0 15px rgba(218,165,32,0.3)"
                        },
                        children: w.jsx("img", {
                            src: Ns,
                            alt: "Tiger",
                            className: "w-16 h-16 object-contain"
                        })
                    })
                }), w.jsxs("div", {
                    className: "rounded-2xl pt-10 pb-4 px-2 relative overflow-hidden",
                    style: {
                        background: "linear-gradient(135deg, hsl(43,76%,49%), hsl(51,100%,50%), hsl(43,76%,49%))",
                        boxShadow: "0 0 30px rgba(218,165,32,0.3), inset 0 0 20px rgba(0,0,0,0.2)"
                    },
                    children: [w.jsx(ee.div, {
                        animate: {
                            x: ["-100%", "200%"]
                        },
                        transition: {
                            duration: 3,
                            repeat: 1 / 0,
                            repeatDelay: 2
                        },
                        className: "absolute top-0 left-0 w-1/3 h-full opacity-20 pointer-events-none",
                        style: {
                            background: "linear-gradient(90deg, transparent, white, transparent)"
                        }
                    }), w.jsxs("div", {
                        className: "flex items-stretch gap-1",
                        children: [w.jsx("div", {
                            className: "flex flex-col justify-around py-1",
                            children: M.map(F => w.jsx("div", {
                                className: "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold",
                                style: {
                                    background: "hsl(0,80%,45%)",
                                    color: "white",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
                                },
                                children: F
                            }, `l${F}`))
                        }), w.jsx("div", {
                            className: "flex-1 grid grid-cols-3 gap-1",
                            children: t.flat().map((F, L) => w.jsx(ee.div, {
                                animate: r ? {
                                    y: [0, -10, 10, 0],
                                    scale: [1, .95, 1.05, 1]
                                } : {},
                                transition: {
                                    duration: .08,
                                    repeat: r ? 1 / 0 : 0
                                },
                                className: "flex items-center justify-center text-3xl rounded-lg aspect-square relative",
                                style: {
                                    background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,230,210,0.95))",
                                    boxShadow: "inset 0 2px 6px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.1)"
                                },
                                children: F
                            }, L))
                        }), w.jsx("div", {
                            className: "flex flex-col justify-around py-1",
                            children: [5, 2, 4].map(F => w.jsx("div", {
                                className: "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold",
                                style: {
                                    background: "hsl(0,80%,45%)",
                                    color: "white",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
                                },
                                children: F
                            }, `r${F}`))
                        })]
                    })]
                }), w.jsx("div", {
                    className: "overflow-hidden py-1.5 mt-2 rounded-lg text-xs",
                    style: {
                        background: "rgba(0,0,0,0.85)",
                        border: "1px solid rgba(218,165,32,0.2)"
                    },
                    children: w.jsx(ee.div, {
                        animate: {
                            x: ["100%", "-100%"]
                        },
                        transition: {
                            duration: 12,
                            repeat: 1 / 0,
                            ease: "linear"
                        },
                        className: "whitespace-nowrap",
                        style: {
                            color: "hsl(43,76%,49%)"
                        },
                        children: E
                    })
                }), w.jsx("div", {
                    className: "grid grid-cols-3 gap-2 mt-2 text-center text-[10px]",
                    children: [{
                        label: "SALDO",
                        value: `${u.toLocaleString()} Kz`,
                        icon: "💰"
                    }, {
                        label: "APOSTA",
                        value: `${Ij} Kz`,
                        icon: "🎲"
                    }, {
                        label: "GANHO",
                        value: `${d.toLocaleString()} Kz`,
                        icon: "🏆"
                    }].map(F => w.jsxs("div", {
                        className: "rounded-lg py-2 px-1",
                        style: {
                            background: "rgba(0,0,0,0.85)",
                            border: "1px solid rgba(218,165,32,0.25)"
                        },
                        children: [w.jsxs("div", {
                            className: "text-muted-foreground",
                            children: [F.icon, " ", F.label]
                        }), w.jsx("div", {
                            className: "font-bold text-xs",
                            style: {
                                color: "hsl(43,76%,49%)"
                            },
                            children: F.value
                        })]
                    }, F.label))
                }), w.jsx(fl, {
                    children: g && w.jsxs(ee.div, {
                        initial: {
                            opacity: 0,
                            scale: .5
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: .5
                        },
                        className: "text-center my-3",
                        children: [w.jsx("p", {
                            className: "text-lg font-bold text-muted-foreground",
                            children: "Sem sorte desta vez... 😔"
                        }), w.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Tente novamente!"
                        })]
                    })
                }), w.jsxs("div", {
                    className: "flex items-center justify-center gap-3 mt-3",
                    children: [w.jsx("button", {
                        className: "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer",
                        style: {
                            background: "rgba(0,0,0,0.85)",
                            border: "1px solid rgba(218,165,32,0.4)",
                            color: "hsl(43,76%,49%)"
                        },
                        onClick: () => {
                            Sr(),
                                Ut.click()
                        }
                        ,
                        children: "⚡"
                    }), w.jsx("button", {
                        className: "w-10 h-10 rounded-full flex items-center justify-center text-lg cursor-pointer",
                        style: {
                            background: "rgba(0,0,0,0.85)",
                            border: "1px solid rgba(218,165,32,0.4)",
                            color: "hsl(43,76%,49%)"
                        },
                        onClick: () => {
                            Sr(),
                                Ut.click()
                        }
                        ,
                        children: "−"
                    }), w.jsx(ee.button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        onClick: N,
                        disabled: r || a <= 0 || h,
                        className: "w-16 h-16 rounded-full text-sm font-extrabold cursor-pointer disabled:opacity-50",
                        style: {
                            background: a > 0 ? "linear-gradient(135deg, hsl(142,71%,45%), hsl(142,50%,35%))" : "rgba(100,100,100,0.5)",
                            color: "white",
                            boxShadow: a > 0 ? "0 0 20px rgba(34,197,94,0.4), 0 0 40px rgba(34,197,94,0.1)" : "none",
                            border: "3px solid rgba(255,255,255,0.2)"
                        },
                        children: r ? "..." : "JOGAR"
                    }), w.jsx("button", {
                        className: "w-10 h-10 rounded-full flex items-center justify-center text-lg cursor-pointer",
                        style: {
                            background: "rgba(0,0,0,0.85)",
                            border: "1px solid rgba(218,165,32,0.4)",
                            color: "hsl(43,76%,49%)"
                        },
                        onClick: () => {
                            Sr(),
                                Ut.click()
                        }
                        ,
                        children: "+"
                    }), w.jsx("button", {
                        className: "w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer",
                        style: {
                            background: "rgba(0,0,0,0.85)",
                            border: "1px solid rgba(218,165,32,0.4)",
                            color: "hsl(43,76%,49%)"
                        },
                        onClick: () => {
                            Sr(),
                                Ut.click()
                        }
                        ,
                        children: "AUTO"
                    })]
                }), (p || a <= 0) && !h && w.jsx(ee.div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "mt-3",
                    children: w.jsxs(tn, {
                        onClick: () => {
                            localStorage.setItem("gameBalance", u.toString()),
                                e("/withdraw")
                        }
                        ,
                        children: ["💰 ", p ? `LEVANTAR ${u.toLocaleString()} Kz` : "Sacar"]
                    })
                }), w.jsx(fl, {
                    children: y && w.jsx(ee.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6",
                        children: w.jsxs(ee.div, {
                            initial: {
                                scale: .8
                            },
                            animate: {
                                scale: 1
                            },
                            exit: {
                                scale: .8
                            },
                            className: "rounded-2xl p-6 text-center max-w-sm w-full",
                            style: {
                                background: "linear-gradient(rgba(20,5,5,0.97), rgba(10,2,2,0.99))",
                                border: "1px solid rgba(218,165,32,0.4)",
                                boxShadow: "0 0 60px rgba(218,165,32,0.2)"
                            },
                            children: [w.jsx("div", {
                                className: "text-4xl mb-3",
                                children: "🎉💰🎉"
                            }), w.jsxs("h2", {
                                className: "text-xl font-extrabold mb-2",
                                style: {
                                    background: "linear-gradient(hsl(51,100%,50%), hsl(30,100%,50%))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                },
                                children: ["PARABÉNS, ", T, "!"]
                            }), w.jsx("p", {
                                className: "text-sm text-card-foreground mb-1",
                                children: "O seu saldo está pronto para levantamento!"
                            }), w.jsxs("p", {
                                className: "text-3xl font-extrabold my-3",
                                style: {
                                    background: "linear-gradient(hsl(142,71%,45%), hsl(142,76%,36%))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                },
                                children: [u.toLocaleString(), " Kz"]
                            }), w.jsx("p", {
                                className: "text-xs text-muted-foreground mb-4",
                                children: "Para levantar, faça um depósito mínimo de verificação"
                            }), w.jsx(tn, {
                                onClick: () => e("/deposit"),
                                children: "💰 Depositar para Levantar"
                            }), w.jsx("button", {
                                onClick: () => b(!1),
                                className: "text-xs text-muted-foreground mt-3 underline cursor-pointer block mx-auto",
                                children: "Voltar ao jogo"
                            })]
                        })
                    })
                })]
            })]
        })
    }
    , Vj = () => {
        const e = Xr()
            , [t, n] = x.useState({
                name: "",
                phone: ""
            })
            , r = o => {
                o.preventDefault(),
                    localStorage.setItem("playerName", t.name),
                    localStorage.setItem("playerPhone", t.phone),
                    e("/register-success")
            }
            , i = "w-full px-4 py-3 rounded-xl text-sm outline-none bg-[rgba(255,255,255,0.05)] border border-[rgba(218,165,32,0.25)] text-card-foreground placeholder:text-muted-foreground focus:border-[rgba(218,165,32,0.6)] transition-colors";
        return w.jsx(so, {
            children: w.jsx(ee.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .7
                },
                children: w.jsxs(Rr, {
                    children: [w.jsx("img", {
                        src: Ns,
                        alt: "Fortune Tiger",
                        className: "w-20 h-20 object-contain mx-auto mb-2 drop-shadow-2xl"
                    }), w.jsx("h1", {
                        className: "text-xl font-extrabold mb-1",
                        style: {
                            background: "linear-gradient(hsl(51,100%,50%), hsl(43,76%,49%), hsl(30,100%,50%))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        },
                        children: "CRIAR CONTA"
                    }), w.jsx("p", {
                        className: "text-xs text-muted-foreground mb-4",
                        children: "Registe-se e ganhe 10 jogadas grátis"
                    }), w.jsx(Xi, {}), w.jsxs("form", {
                        onSubmit: r,
                        className: "space-y-3 text-left",
                        children: [w.jsx("input", {
                            className: i,
                            placeholder: "Seu nome",
                            value: t.name,
                            onChange: o => n({
                                ...t,
                                name: o.target.value
                            }),
                            required: !0
                        }), w.jsx("input", {
                            className: i,
                            placeholder: "Número de telefone",
                            type: "tel",
                            value: t.phone,
                            onChange: o => n({
                                ...t,
                                phone: o.target.value
                            }),
                            required: !0
                        }), w.jsx("div", {
                            className: "pt-2",
                            children: w.jsx(tn, {
                                type: "submit",
                                children: "🐅 Registar"
                            })
                        })]
                    }), w.jsxs("p", {
                        className: "text-xs text-muted-foreground mt-4",
                        children: ["Já tem conta?", " ", w.jsx($x, {
                            to: "/login",
                            className: "underline",
                            style: {
                                color: "hsl(43,76%,49%)"
                            },
                            children: "Entrar"
                        })]
                    })]
                })
            })
        })
    }
    , Bj = [{
        user: "@maria_f",
        time: "há 2 minutos",
        text: "Ainda estou emocionada 🙏. Joguei o Fortune Tiger, ganhei e recebi os 115.000 KZ sem complicações. Foi tudo muito rápido e simples. Quem tiver oportunidade, aproveite."
    }, {
        user: "@joao_k",
        time: "há 5 minutos",
        text: "No início pensei que fosse só conversa, mas resolvi tentar. Joguei, ganhei e o dinheiro caiu mesmo. Funcionou certinho 💰"
    }, {
        user: "@ana_luisa",
        time: "há 8 minutos",
        text: "Recebi 98.000 KZ na minha conta! Incrível como funciona rápido. Recomendo a todos! 🐅🎉"
    }, {
        user: "@carlos_m",
        time: "há 12 minutos",
        text: "Já é a segunda vez que jogo e ganho. Desta vez foram 121.000 KZ. Fortune Tiger é real! 🔥"
    }, {
        user: "@sofia_d",
        time: "há 15 minutos",
        text: "Minha amiga me indicou e eu não acreditei até jogar. Ganhei 87.000 KZ nas rodadas grátis! Obrigada Fortune Tiger 🙌"
    }]
    , zj = () => {
        const e = Xr();
        return x.useEffect(() => {
            Sr(),
                Ut.success()
        }
            , []),
            w.jsx(so, {
                children: w.jsxs(ee.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .7
                    },
                    className: "space-y-4",
                    children: [w.jsxs("div", {
                        className: "text-center",
                        children: [w.jsx("img", {
                            src: Ns,
                            alt: "Fortune Tiger",
                            className: "w-20 h-20 object-contain mx-auto mb-2 drop-shadow-2xl"
                        }), w.jsx("h1", {
                            className: "text-xl font-extrabold",
                            style: {
                                background: "linear-gradient(hsl(142,71%,45%), hsl(142,76%,36%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            },
                            children: "Cadastre-se"
                        }), w.jsxs("p", {
                            className: "text-xs text-muted-foreground",
                            children: ["e ganhe ", w.jsx("span", {
                                style: {
                                    color: "hsl(142,71%,45%)"
                                },
                                className: "font-bold",
                                children: "10 rodadas grátis"
                            }), " no Fortune Tiger"]
                        })]
                    }), w.jsxs("div", {
                        className: "rounded-2xl p-5 text-center",
                        style: {
                            background: "rgba(10,2,2,0.9)",
                            border: "1px solid rgba(34,197,94,0.4)",
                            boxShadow: "0 0 30px rgba(34,197,94,0.1)"
                        },
                        children: [w.jsx("div", {
                            className: "text-4xl mb-2",
                            children: "🎉"
                        }), w.jsx("h2", {
                            className: "text-lg font-extrabold mb-1",
                            style: {
                                background: "linear-gradient(hsl(142,71%,45%), hsl(142,76%,36%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            },
                            children: "Parabéns!"
                        }), w.jsx("p", {
                            className: "text-sm font-bold text-card-foreground",
                            children: "Cadastro realizado com sucesso!"
                        }), w.jsxs("p", {
                            className: "text-xs text-muted-foreground mt-1",
                            children: ["Você ganhou ", w.jsx("span", {
                                style: {
                                    color: "hsl(142,71%,45%)"
                                },
                                className: "font-bold",
                                children: "10 rodadas grátis"
                            }), " no Fortune Tiger"]
                        }), w.jsxs("div", {
                            className: "flex items-center justify-center gap-2 my-4",
                            children: [w.jsx("span", {
                                className: "text-2xl",
                                children: "🟨"
                            }), w.jsx("p", {
                                className: "text-2xl font-extrabold",
                                style: {
                                    background: "linear-gradient(hsl(51,100%,50%), hsl(30,100%,50%))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                },
                                children: "10 Rodadas Grátis"
                            })]
                        }), w.jsx(tn, {
                            onClick: () => e("/game"),
                            children: "🐅 Começar a Jogar"
                        })]
                    }), w.jsxs("div", {
                        children: [w.jsx("p", {
                            className: "text-xs font-bold text-muted-foreground mb-3 flex items-center gap-1",
                            children: "💬 Comentários Recentes"
                        }), w.jsx("div", {
                            className: "space-y-3",
                            children: Bj.map((t, n) => w.jsxs(ee.div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .3 + n * .15
                                },
                                className: "rounded-xl px-4 py-3",
                                style: {
                                    background: "rgba(10,2,2,0.8)",
                                    border: "1px solid rgba(218,165,32,0.1)"
                                },
                                children: [w.jsxs("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [w.jsx("span", {
                                        className: "text-xs font-bold text-card-foreground",
                                        children: t.user
                                    }), w.jsx("span", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: t.time
                                    })]
                                }), w.jsx("p", {
                                    className: "text-xs text-muted-foreground leading-relaxed",
                                    children: t.text
                                }), w.jsxs("div", {
                                    className: "flex gap-3 mt-2 text-[10px] text-muted-foreground",
                                    children: [w.jsx("span", {
                                        className: "cursor-pointer",
                                        children: "👍"
                                    }), w.jsx("span", {
                                        className: "cursor-pointer",
                                        children: "👎"
                                    }), w.jsx("span", {
                                        className: "cursor-pointer",
                                        children: "Responder"
                                    })]
                                })]
                            }, n))
                        })]
                    })]
                })
            })
    }
    , $j = () => {
        const e = Xr()
            , [t, n] = x.useState({
                phone: ""
            })
            , r = o => {
                o.preventDefault(),
                    e("/game")
            }
            ;
        return w.jsx(so, {
            children: w.jsx(ee.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .7
                },
                children: w.jsxs(Rr, {
                    children: [w.jsx("img", {
                        src: Ns,
                        alt: "Fortune Tiger",
                        className: "w-20 h-20 object-contain mx-auto mb-2 drop-shadow-2xl"
                    }), w.jsx("h1", {
                        className: "text-xl font-extrabold mb-1",
                        style: {
                            background: "linear-gradient(hsl(51,100%,50%), hsl(43,76%,49%), hsl(30,100%,50%))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        },
                        children: "ENTRAR"
                    }), w.jsx("p", {
                        className: "text-xs text-muted-foreground mb-4",
                        children: "Acesse a sua conta Fortune Tiger"
                    }), w.jsx(Xi, {}), w.jsxs("form", {
                        onSubmit: r,
                        className: "space-y-3 text-left",
                        children: [w.jsx("input", {
                            className: "w-full px-4 py-3 rounded-xl text-sm outline-none bg-[rgba(255,255,255,0.05)] border border-[rgba(218,165,32,0.25)] text-card-foreground placeholder:text-muted-foreground focus:border-[rgba(218,165,32,0.6)] transition-colors",
                            placeholder: "Número de telefone",
                            type: "tel",
                            value: t.phone,
                            onChange: o => n({
                                ...t,
                                phone: o.target.value
                            }),
                            required: !0
                        }), w.jsx("div", {
                            className: "pt-2",
                            children: w.jsx(tn, {
                                type: "submit",
                                children: "🐅 Entrar"
                            })
                        })]
                    }), w.jsxs("p", {
                        className: "text-xs text-muted-foreground mt-4",
                        children: ["Não tem conta?", " ", w.jsx($x, {
                            to: "/register",
                            className: "underline",
                            style: {
                                color: "hsl(43,76%,49%)"
                            },
                            children: "Registar"
                        })]
                    })]
                })
            })
        })
    }
    , Uj = () => {
        const e = x.useRef(null)
            , [t, n] = x.useState(!1);
        x.useEffect(() => {
            const i = setTimeout(() => {
                n(!0)
            }
                , 33e4);
            return () => clearTimeout(i)
        }
            , []),
            x.useEffect(() => {
                const i = document.createElement("div");
                i.innerHTML = '<vturb-smartplayer id="vid-69b42a06ee2947d3ff2d6aa9" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>',
                    e.current && e.current.appendChild(i);
                const o = document.createElement("script");
                return o.src = "https://scripts.converteai.net/2326039f-9178-410d-b464-a4fbd6751c13/players/69b42a06ee2947d3ff2d6aa9/v4/player.js",
                    o.async = !0,
                    document.head.appendChild(o),
                    () => {
                        o.remove(),
                            e.current && (e.current.innerHTML = "")
                    }
            }
                , []);
        const r = () => {
            window.open("https://mentora.ao/produto/0f106c45-721d-465f-b30c-4c96fc900d33", "_blank")
        }
            ;
        return w.jsxs("div", {
            className: "min-h-screen flex flex-col items-center px-4 py-8",
            style: {
                background: "hsl(220,20%,8%)"
            },
            children: [w.jsx("h1", {
                className: "text-xl font-extrabold text-center mb-6 leading-tight",
                style: {
                    background: "linear-gradient(135deg, hsl(51,100%,50%), hsl(43,76%,49%), hsl(30,100%,50%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                },
                children: "ASSISTA O VÍDEO ABAIXO PARA VER COMO RECEBER O SEU DINHEIRO AGORA MESMO"
            }), w.jsx("div", {
                ref: e,
                className: "w-full max-w-md rounded-xl overflow-hidden",
                style: {
                    background: "rgba(0,0,0,0.8)",
                    minHeight: "300px"
                }
            }), t && w.jsx(ee.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "w-full max-w-md mt-6",
                children: w.jsx(tn, {
                    onClick: r,
                    children: "🔒 Pagar Taxa Anti-Robô"
                })
            })]
        })
    }
    , Wj = () => {
        const e = Xr()
            , [t, n] = x.useState("bonus-ended")
            , [r, i] = x.useState(null)
            , [o, s] = x.useState("")
            , [a, l] = x.useState(0)
            , u = parseInt(localStorage.getItem("gameBalance") || "121000");
        x.useEffect(() => {
            if (t !== "verifying")
                return;
            l(0);
            const d = 4e3
                , f = 50;
            let h = 0;
            const v = setInterval(() => {
                h += f,
                    l(Math.min(h / d * 100, 100)),
                    h >= d && (clearInterval(v),
                        n("verified"))
            }
                , f);
            return () => clearInterval(v)
        }
            , [t]);
        const c = () => {
            o.trim() && (localStorage.setItem("withdrawMethod", r === "iban" ? "IBAN" : "Express"),
                localStorage.setItem("withdrawAccount", o),
                n("verifying"))
        }
            ;
        return w.jsx(so, {
            children: w.jsxs(fl, {
                mode: "wait",
                children: [t === "bonus-ended" && w.jsx(ee.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -30
                    },
                    transition: {
                        duration: .5
                    },
                    children: w.jsxs(Rr, {
                        children: [w.jsx("div", {
                            className: "text-5xl mb-4",
                            children: "🎉"
                        }), w.jsx("h1", {
                            className: "text-xl font-extrabold text-card-foreground mb-2",
                            children: "As tuas jogadas bónus terminaram"
                        }), w.jsx("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: "Os ganhos obtidos estão agora disponíveis para levantamento."
                        }), w.jsx(Xi, {}), w.jsx("p", {
                            className: "text-sm text-muted-foreground mt-4",
                            children: "Total ganho"
                        }), w.jsxs("p", {
                            className: "text-4xl font-extrabold my-2",
                            style: {
                                background: "linear-gradient(hsl(142,71%,45%), hsl(142,76%,36%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            },
                            children: [u.toLocaleString(), " Kz"]
                        }), w.jsx("div", {
                            className: "mt-4",
                            children: w.jsx(tn, {
                                onClick: () => n("choose-method"),
                                children: "💰 Sacar"
                            })
                        })]
                    })
                }, "bonus-ended"), t === "choose-method" && w.jsx(ee.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -30
                    },
                    transition: {
                        duration: .5
                    },
                    children: w.jsxs(Rr, {
                        children: [w.jsx("h1", {
                            className: "text-xl font-extrabold text-card-foreground mb-1",
                            children: "Levantamento"
                        }), w.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Escolha o meio de recebimento"
                        }), w.jsxs("p", {
                            className: "text-3xl font-extrabold my-2",
                            style: {
                                background: "linear-gradient(hsl(142,71%,45%), hsl(142,76%,36%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            },
                            children: [u.toLocaleString(), " Kz"]
                        }), w.jsx("p", {
                            className: "text-xs text-muted-foreground mb-6",
                            children: "disponível para levantamento"
                        }), w.jsxs("div", {
                            className: "space-y-3",
                            children: [w.jsxs("button", {
                                onClick: () => {
                                    i("iban"),
                                        n("input-form")
                                }
                                ,
                                className: "w-full flex items-center gap-4 p-4 rounded-xl text-left cursor-pointer transition-all hover:scale-[1.02]",
                                style: {
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.15)"
                                },
                                children: [w.jsx("span", {
                                    className: "text-3xl",
                                    children: "🏦"
                                }), w.jsxs("div", {
                                    children: [w.jsx("p", {
                                        className: "font-bold text-card-foreground",
                                        children: "Registrar IBAN"
                                    }), w.jsx("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Transferência bancária directa"
                                    })]
                                })]
                            }), w.jsxs("button", {
                                onClick: () => {
                                    i("express"),
                                        n("input-form")
                                }
                                ,
                                className: "w-full flex items-center gap-4 p-4 rounded-xl text-left cursor-pointer transition-all hover:scale-[1.02]",
                                style: {
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.15)"
                                },
                                children: [w.jsx("span", {
                                    className: "text-3xl",
                                    children: "📱"
                                }), w.jsxs("div", {
                                    children: [w.jsx("p", {
                                        className: "font-bold text-card-foreground",
                                        children: "Registrar Multicaixa Express"
                                    }), w.jsx("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Receba no seu Express"
                                    })]
                                })]
                            })]
                        })]
                    })
                }, "choose-method"), t === "input-form" && w.jsx(ee.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -30
                    },
                    transition: {
                        duration: .5
                    },
                    children: w.jsxs(Rr, {
                        children: [w.jsx("button", {
                            onClick: () => {
                                n("choose-method"),
                                    s("")
                            }
                            ,
                            className: "text-sm text-muted-foreground mb-4 cursor-pointer flex items-center gap-1",
                            children: "← Voltar"
                        }), w.jsx("h1", {
                            className: "text-xl font-extrabold text-card-foreground mb-4 text-left",
                            children: r === "iban" ? "IBAN" : "Multicaixa Express"
                        }), w.jsx("div", {
                            className: "text-left mb-2",
                            children: w.jsx("label", {
                                className: "text-sm text-muted-foreground",
                                children: r === "iban" ? "Número IBAN" : "Número Express"
                            })
                        }), w.jsx("input", {
                            type: "text",
                            value: o,
                            onChange: d => s(d.target.value),
                            placeholder: r === "iban" ? "AO06 XXXX XXXX XXXX XXXX" : "9XX XXX XXX",
                            className: "w-full p-4 rounded-xl mb-6 text-card-foreground placeholder:text-muted-foreground outline-none",
                            style: {
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.2)"
                            }
                        }), w.jsx(tn, {
                            onClick: c,
                            disabled: !o.trim(),
                            children: "Confirmar Levantamento"
                        })]
                    })
                }, "input-form"), t === "verifying" && w.jsxs(ee.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "fixed inset-0 z-50 flex flex-col items-center justify-center",
                    style: {
                        background: "hsl(220,20%,12%)"
                    },
                    children: [w.jsx(ee.div, {
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 1.2,
                            repeat: 1 / 0,
                            ease: "linear"
                        },
                        className: "w-16 h-16 rounded-full mb-6",
                        style: {
                            border: "4px solid rgba(255,255,255,0.15)",
                            borderTopColor: "rgba(255,255,255,0.7)"
                        }
                    }), w.jsx("h2", {
                        className: "text-xl font-extrabold text-white mb-2",
                        children: "Verificando seus dados"
                    }), w.jsx("p", {
                        className: "text-sm text-muted-foreground mb-6",
                        children: "Por favor aguarde..."
                    }), w.jsx("div", {
                        className: "w-64 h-1.5 rounded-full overflow-hidden",
                        style: {
                            background: "rgba(255,255,255,0.15)"
                        },
                        children: w.jsx(ee.div, {
                            className: "h-full rounded-full",
                            style: {
                                background: "rgba(255,255,255,0.5)",
                                width: `${a}%`
                            }
                        })
                    })]
                }, "verifying"), t === "verified" && w.jsx(ee.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -30
                    },
                    transition: {
                        duration: .5
                    },
                    children: w.jsxs(Rr, {
                        children: [w.jsx("div", {
                            className: "text-5xl mb-4",
                            children: "✅"
                        }), w.jsx("h1", {
                            className: "text-xl font-extrabold mb-1",
                            style: {
                                background: "linear-gradient(hsl(142,71%,45%), hsl(142,76%,36%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            },
                            children: "Dados verificados com sucesso"
                        }), w.jsx("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: "Os seus dados foram validados"
                        }), w.jsx(Xi, {}), w.jsx("p", {
                            className: "text-sm text-muted-foreground mt-4",
                            children: "Total disponível para levantamento"
                        }), w.jsxs("p", {
                            className: "text-4xl font-extrabold my-2",
                            style: {
                                background: "linear-gradient(hsl(142,71%,45%), hsl(142,76%,36%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            },
                            children: [u.toLocaleString(), " Kz"]
                        }), w.jsxs("div", {
                            className: "flex items-center gap-2 my-4 text-sm text-card-foreground",
                            children: [w.jsx("span", {
                                className: "text-xl",
                                children: r === "iban" ? "🏦" : "📱"
                            }), w.jsxs("span", {
                                children: [r === "iban" ? "IBAN" : "Express", ": ", w.jsx("strong", {
                                    children: o
                                })]
                            })]
                        }), w.jsx(tn, {
                            onClick: () => e("/deposit"),
                            children: "💰 Levantar meus ganhos agora"
                        })]
                    })
                }, "verified")]
            })
        })
    }
    , Hj = () => {
        const e = Es();
        return x.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", e.pathname)
        }
            , [e.pathname]),
            w.jsx("div", {
                className: "flex min-h-screen items-center justify-center bg-muted",
                children: w.jsxs("div", {
                    className: "text-center",
                    children: [w.jsx("h1", {
                        className: "mb-4 text-4xl font-bold",
                        children: "404"
                    }), w.jsx("p", {
                        className: "mb-4 text-xl text-muted-foreground",
                        children: "Oops! Page not found"
                    }), w.jsx("a", {
                        href: "/",
                        className: "text-primary underline hover:text-primary/90",
                        children: "Return to Home"
                    })]
                })
            })
    }
    , Kj = new Ik
    , Gj = () => w.jsx(_k, {
        client: Kj,
        children: w.jsxs(fk, {
            children: [w.jsx(XT, {}), w.jsx(kE, {}), w.jsx(L2, {
                children: w.jsxs(k2, {
                    children: [w.jsx(ln, {
                        path: "/",
                        element: w.jsx(jj, {})
                    }), w.jsx(ln, {
                        path: "/game",
                        element: w.jsx(_j, {})
                    }), w.jsx(ln, {
                        path: "/register",
                        element: w.jsx(Vj, {})
                    }), w.jsx(ln, {
                        path: "/register-success",
                        element: w.jsx(zj, {})
                    }), w.jsx(ln, {
                        path: "/login",
                        element: w.jsx($j, {})
                    }), w.jsx(ln, {
                        path: "/deposit",
                        element: w.jsx(Uj, {})
                    }), w.jsx(ln, {
                        path: "/withdraw",
                        element: w.jsx(Wj, {})
                    }), w.jsx(ln, {
                        path: "*",
                        element: w.jsx(Hj, {})
                    })]
                })
            })]
        })
    });
lv(document.getElementById("root")).render(w.jsx(Gj, {}));

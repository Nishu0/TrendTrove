var Ni = Object.create
  , Pn = Object.defineProperty
  , Li = Object.getPrototypeOf
  , Fi = Object.prototype.hasOwnProperty
  , $i = Object.getOwnPropertyNames
  , Di = Object.getOwnPropertyDescriptor
  , Bi = e=>Pn(e, "__esModule", {
    value: !0
})
  , Mt = (e,t)=>()=>(t || (t = {
    exports: {}
},
e(t.exports, t)),
t.exports)
  , zi = (e,t,n)=>{
    if (t && typeof t == "object" || typeof t == "function")
        for (let r of $i(t))
            !Fi.call(e, r) && r !== "default" && Pn(e, r, {
                get: ()=>t[r],
                enumerable: !(n = Di(t, r)) || n.enumerable
            });
    return e
}
  , Ki = e=>zi(Bi(Pn(e != null ? Ni(Li(e)) : {}, "default", e && e.__esModule && "default"in e ? {
    get: ()=>e.default,
    enumerable: !0
} : {
    value: e,
    enumerable: !0
})), e)
  , Hi = Mt(e=>{
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    function t(f, m) {
        const y = Object.create(null)
          , x = f.split(",");
        for (let C = 0; C < x.length; C++)
            y[x[C]] = !0;
        return m ? C=>!!y[C.toLowerCase()] : C=>!!y[C]
    }
    var n = {
        [1]: "TEXT",
        [2]: "CLASS",
        [4]: "STYLE",
        [8]: "PROPS",
        [16]: "FULL_PROPS",
        [32]: "HYDRATE_EVENTS",
        [64]: "STABLE_FRAGMENT",
        [128]: "KEYED_FRAGMENT",
        [256]: "UNKEYED_FRAGMENT",
        [512]: "NEED_PATCH",
        [1024]: "DYNAMIC_SLOTS",
        [2048]: "DEV_ROOT_FRAGMENT",
        [-1]: "HOISTED",
        [-2]: "BAIL"
    }
      , r = {
        [1]: "STABLE",
        [2]: "DYNAMIC",
        [3]: "FORWARDED"
    }
      , i = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"
      , o = t(i)
      , s = 2;
    function c(f, m=0, y=f.length) {
        const x = f.split(/\r?\n/);
        let C = 0;
        const j = [];
        for (let N = 0; N < x.length; N++)
            if (C += x[N].length + 1,
            C >= m) {
                for (let U = N - s; U <= N + s || y > C; U++) {
                    if (U < 0 || U >= x.length)
                        continue;
                    const re = U + 1;
                    j.push(`${re}${" ".repeat(Math.max(3 - String(re).length, 0))}|  ${x[U]}`);
                    const Ee = x[U].length;
                    if (U === N) {
                        const Oe = m - (C - Ee) + 1
                          , Zt = Math.max(1, y > C ? Ee - Oe : y - m);
                        j.push("   |  " + " ".repeat(Oe) + "^".repeat(Zt))
                    } else if (U > N) {
                        if (y > C) {
                            const Oe = Math.max(Math.min(y - C, Ee), 1);
                            j.push("   |  " + "^".repeat(Oe))
                        }
                        C += Ee + 1
                    }
                }
                break
            }
        return j.join(`
`)
    }
    var l = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
      , u = t(l)
      , h = t(l + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected")
      , g = /[>/="'\u0009\u000a\u000c\u0020]/
      , b = {};
    function E(f) {
        if (b.hasOwnProperty(f))
            return b[f];
        const m = g.test(f);
        return m && console.error(`unsafe attribute name: ${f}`),
        b[f] = !m
    }
    var T = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv"
    }
      , D = t("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width")
      , w = t("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
    function O(f) {
        if (Y(f)) {
            const m = {};
            for (let y = 0; y < f.length; y++) {
                const x = f[y]
                  , C = O(ne(x) ? L(x) : x);
                if (C)
                    for (const j in C)
                        m[j] = C[j]
            }
            return m
        } else if (G(f))
            return f
    }
    var S = /;(?![^(]*\))/g
      , M = /:(.+)/;
    function L(f) {
        const m = {};
        return f.split(S).forEach(y=>{
            if (y) {
                const x = y.split(M);
                x.length > 1 && (m[x[0].trim()] = x[1].trim())
            }
        }
        ),
        m
    }
    function q(f) {
        let m = "";
        if (!f)
            return m;
        for (const y in f) {
            const x = f[y]
              , C = y.startsWith("--") ? y : le(y);
            (ne(x) || typeof x == "number" && D(C)) && (m += `${C}:${x};`)
        }
        return m
    }
    function I(f) {
        let m = "";
        if (ne(f))
            m = f;
        else if (Y(f))
            for (let y = 0; y < f.length; y++) {
                const x = I(f[y]);
                x && (m += x + " ")
            }
        else if (G(f))
            for (const y in f)
                f[y] && (m += y + " ");
        return m.trim()
    }
    var K = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
      , ee = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"
      , te = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"
      , V = t(K)
      , pe = t(ee)
      , Dt = t(te)
      , Bt = /["'&<>]/;
    function st(f) {
        const m = "" + f
          , y = Bt.exec(m);
        if (!y)
            return m;
        let x = "", C, j, N = 0;
        for (j = y.index; j < m.length; j++) {
            switch (m.charCodeAt(j)) {
            case 34:
                C = "&quot;";
                break;
            case 38:
                C = "&amp;";
                break;
            case 39:
                C = "&#39;";
                break;
            case 60:
                C = "&lt;";
                break;
            case 62:
                C = "&gt;";
                break;
            default:
                continue
            }
            N !== j && (x += m.substring(N, j)),
            N = j + 1,
            x += C
        }
        return N !== j ? x + m.substring(N, j) : x
    }
    var zt = /^-?>|<!--|-->|--!>|<!-$/g;
    function Kt(f) {
        return f.replace(zt, "")
    }
    function Ht(f, m) {
        if (f.length !== m.length)
            return !1;
        let y = !0;
        for (let x = 0; y && x < f.length; x++)
            y = se(f[x], m[x]);
        return y
    }
    function se(f, m) {
        if (f === m)
            return !0;
        let y = ve(f)
          , x = ve(m);
        if (y || x)
            return y && x ? f.getTime() === m.getTime() : !1;
        if (y = Y(f),
        x = Y(m),
        y || x)
            return y && x ? Ht(f, m) : !1;
        if (y = G(f),
        x = G(m),
        y || x) {
            if (!y || !x)
                return !1;
            const C = Object.keys(f).length
              , j = Object.keys(m).length;
            if (C !== j)
                return !1;
            for (const N in f) {
                const U = f.hasOwnProperty(N)
                  , re = m.hasOwnProperty(N);
                if (U && !re || !U && re || !se(f[N], m[N]))
                    return !1
            }
        }
        return String(f) === String(m)
    }
    function at(f, m) {
        return f.findIndex(y=>se(y, m))
    }
    var qt = f=>f == null ? "" : G(f) ? JSON.stringify(f, Vt, 2) : String(f), Vt = (f,m)=>J(m) ? {
        [`Map(${m.size})`]: [...m.entries()].reduce((y,[x,C])=>(y[`${x} =>`] = C,
        y), {})
    } : Fe(m) ? {
        [`Set(${m.size})`]: [...m.values()]
    } : G(m) && !Y(m) && !$e(m) ? String(m) : m, je = ["bigInt", "optionalChaining", "nullishCoalescingOperator"], Ne = Object.freeze({}), Le = Object.freeze([]), ge = ()=>{}
    , me = ()=>!1, ye = /^on[^a-z]/, _e = f=>ye.test(f), ct = f=>f.startsWith("onUpdate:"), lt = Object.assign, ut = (f,m)=>{
        const y = f.indexOf(m);
        y > -1 && f.splice(y, 1)
    }
    , ft = Object.prototype.hasOwnProperty, be = (f,m)=>ft.call(f, m), Y = Array.isArray, J = f=>ae(f) === "[object Map]", Fe = f=>ae(f) === "[object Set]", ve = f=>f instanceof Date, we = f=>typeof f == "function", ne = f=>typeof f == "string", Ut = f=>typeof f == "symbol", G = f=>f !== null && typeof f == "object", Gt = f=>G(f) && we(f.then) && we(f.catch), dt = Object.prototype.toString, ae = f=>dt.call(f), Wt = f=>ae(f).slice(8, -1), $e = f=>ae(f) === "[object Object]", ht = f=>ne(f) && f !== "NaN" && f[0] !== "-" && "" + parseInt(f, 10) === f, pt = t(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ce = f=>{
        const m = Object.create(null);
        return y=>m[y] || (m[y] = f(y))
    }
    , gt = /-(\w)/g, Yt = ce(f=>f.replace(gt, (m,y)=>y ? y.toUpperCase() : "")), Jt = /\B([A-Z])/g, le = ce(f=>f.replace(Jt, "-$1").toLowerCase()), mt = ce(f=>f.charAt(0).toUpperCase() + f.slice(1)), De = ce(f=>f ? `on${mt(f)}` : ""), Qt = (f,m)=>f !== m && (f === f || m === m), Se = (f,m)=>{
        for (let y = 0; y < f.length; y++)
            f[y](m)
    }
    , xe = (f,m,y)=>{
        Object.defineProperty(f, m, {
            configurable: !0,
            enumerable: !1,
            value: y
        })
    }
    , Be = f=>{
        const m = parseFloat(f);
        return isNaN(m) ? f : m
    }
    , ze, P = ()=>ze || (ze = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    e.EMPTY_ARR = Le,
    e.EMPTY_OBJ = Ne,
    e.NO = me,
    e.NOOP = ge,
    e.PatchFlagNames = n,
    e.babelParserDefaultPlugins = je,
    e.camelize = Yt,
    e.capitalize = mt,
    e.def = xe,
    e.escapeHtml = st,
    e.escapeHtmlComment = Kt,
    e.extend = lt,
    e.generateCodeFrame = c,
    e.getGlobalThis = P,
    e.hasChanged = Qt,
    e.hasOwn = be,
    e.hyphenate = le,
    e.invokeArrayFns = Se,
    e.isArray = Y,
    e.isBooleanAttr = h,
    e.isDate = ve,
    e.isFunction = we,
    e.isGloballyWhitelisted = o,
    e.isHTMLTag = V,
    e.isIntegerKey = ht,
    e.isKnownAttr = w,
    e.isMap = J,
    e.isModelListener = ct,
    e.isNoUnitNumericStyleProp = D,
    e.isObject = G,
    e.isOn = _e,
    e.isPlainObject = $e,
    e.isPromise = Gt,
    e.isReservedProp = pt,
    e.isSSRSafeAttrName = E,
    e.isSVGTag = pe,
    e.isSet = Fe,
    e.isSpecialBooleanAttr = u,
    e.isString = ne,
    e.isSymbol = Ut,
    e.isVoidTag = Dt,
    e.looseEqual = se,
    e.looseIndexOf = at,
    e.makeMap = t,
    e.normalizeClass = I,
    e.normalizeStyle = O,
    e.objectToString = dt,
    e.parseStringStyle = L,
    e.propsToAttrMap = T,
    e.remove = ut,
    e.slotFlagsText = r,
    e.stringifyStyle = q,
    e.toDisplayString = qt,
    e.toHandlerKey = De,
    e.toNumber = Be,
    e.toRawType = Wt,
    e.toTypeString = ae
}
)
  , qi = Mt((e,t)=>{
    t.exports = Hi()
}
)
  , Vi = Mt(e=>{
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = qi(), n = new WeakMap, r = [], i, o = Symbol("iterate"), s = Symbol("Map key iterate");
    function c(a) {
        return a && a._isEffect === !0
    }
    function l(a, d=t.EMPTY_OBJ) {
        c(a) && (a = a.raw);
        const p = g(a, d);
        return d.lazy || p(),
        p
    }
    function u(a) {
        a.active && (b(a),
        a.options.onStop && a.options.onStop(),
        a.active = !1)
    }
    var h = 0;
    function g(a, d) {
        const p = function() {
            if (!p.active)
                return a();
            if (!r.includes(p)) {
                b(p);
                try {
                    return w(),
                    r.push(p),
                    i = p,
                    a()
                } finally {
                    r.pop(),
                    O(),
                    i = r[r.length - 1]
                }
            }
        };
        return p.id = h++,
        p.allowRecurse = !!d.allowRecurse,
        p._isEffect = !0,
        p.active = !0,
        p.raw = a,
        p.deps = [],
        p.options = d,
        p
    }
    function b(a) {
        const {deps: d} = a;
        if (d.length) {
            for (let p = 0; p < d.length; p++)
                d[p].delete(a);
            d.length = 0
        }
    }
    var E = !0
      , T = [];
    function D() {
        T.push(E),
        E = !1
    }
    function w() {
        T.push(E),
        E = !0
    }
    function O() {
        const a = T.pop();
        E = a === void 0 ? !0 : a
    }
    function S(a, d, p) {
        if (!E || i === void 0)
            return;
        let v = n.get(a);
        v || n.set(a, v = new Map);
        let _ = v.get(p);
        _ || v.set(p, _ = new Set),
        _.has(i) || (_.add(i),
        i.deps.push(_),
        i.options.onTrack && i.options.onTrack({
            effect: i,
            target: a,
            type: d,
            key: p
        }))
    }
    function M(a, d, p, v, _, R) {
        const A = n.get(a);
        if (!A)
            return;
        const k = new Set
          , B = F=>{
            F && F.forEach(Q=>{
                (Q !== i || Q.allowRecurse) && k.add(Q)
            }
            )
        }
        ;
        if (d === "clear")
            A.forEach(B);
        else if (p === "length" && t.isArray(a))
            A.forEach((F,Q)=>{
                (Q === "length" || Q >= v) && B(F)
            }
            );
        else
            switch (p !== void 0 && B(A.get(p)),
            d) {
            case "add":
                t.isArray(a) ? t.isIntegerKey(p) && B(A.get("length")) : (B(A.get(o)),
                t.isMap(a) && B(A.get(s)));
                break;
            case "delete":
                t.isArray(a) || (B(A.get(o)),
                t.isMap(a) && B(A.get(s)));
                break;
            case "set":
                t.isMap(a) && B(A.get(o));
                break
            }
        const Ke = F=>{
            F.options.onTrigger && F.options.onTrigger({
                effect: F,
                target: a,
                key: p,
                type: d,
                newValue: v,
                oldValue: _,
                oldTarget: R
            }),
            F.options.scheduler ? F.options.scheduler(F) : F()
        }
        ;
        k.forEach(Ke)
    }
    var L = t.makeMap("__proto__,__v_isRef,__isVue")
      , q = new Set(Object.getOwnPropertyNames(Symbol).map(a=>Symbol[a]).filter(t.isSymbol))
      , I = pe()
      , K = pe(!1, !0)
      , ee = pe(!0)
      , te = pe(!0, !0)
      , V = {};
    ["includes", "indexOf", "lastIndexOf"].forEach(a=>{
        const d = Array.prototype[a];
        V[a] = function(...p) {
            const v = P(this);
            for (let R = 0, A = this.length; R < A; R++)
                S(v, "get", R + "");
            const _ = d.apply(v, p);
            return _ === -1 || _ === !1 ? d.apply(v, p.map(P)) : _
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(a=>{
        const d = Array.prototype[a];
        V[a] = function(...p) {
            D();
            const v = d.apply(this, p);
            return O(),
            v
        }
    }
    );
    function pe(a=!1, d=!1) {
        return function(v, _, R) {
            if (_ === "__v_isReactive")
                return !a;
            if (_ === "__v_isReadonly")
                return a;
            if (_ === "__v_raw" && R === (a ? d ? gt : ce : d ? pt : ht).get(v))
                return v;
            const A = t.isArray(v);
            if (!a && A && t.hasOwn(V, _))
                return Reflect.get(V, _, R);
            const k = Reflect.get(v, _, R);
            return (t.isSymbol(_) ? q.has(_) : L(_)) || (a || S(v, "get", _),
            d) ? k : y(k) ? !A || !t.isIntegerKey(_) ? k.value : k : t.isObject(k) ? a ? De(k) : le(k) : k
        }
    }
    var Dt = st()
      , Bt = st(!0);
    function st(a=!1) {
        return function(p, v, _, R) {
            let A = p[v];
            if (!a && (_ = P(_),
            A = P(A),
            !t.isArray(p) && y(A) && !y(_)))
                return A.value = _,
                !0;
            const k = t.isArray(p) && t.isIntegerKey(v) ? Number(v) < p.length : t.hasOwn(p, v)
              , B = Reflect.set(p, v, _, R);
            return p === P(R) && (k ? t.hasChanged(_, A) && M(p, "set", v, _, A) : M(p, "add", v, _)),
            B
        }
    }
    function zt(a, d) {
        const p = t.hasOwn(a, d)
          , v = a[d]
          , _ = Reflect.deleteProperty(a, d);
        return _ && p && M(a, "delete", d, void 0, v),
        _
    }
    function Kt(a, d) {
        const p = Reflect.has(a, d);
        return (!t.isSymbol(d) || !q.has(d)) && S(a, "has", d),
        p
    }
    function Ht(a) {
        return S(a, "iterate", t.isArray(a) ? "length" : o),
        Reflect.ownKeys(a)
    }
    var se = {
        get: I,
        set: Dt,
        deleteProperty: zt,
        has: Kt,
        ownKeys: Ht
    }
      , at = {
        get: ee,
        set(a, d) {
            return console.warn(`Set operation on key "${String(d)}" failed: target is readonly.`, a),
            !0
        },
        deleteProperty(a, d) {
            return console.warn(`Delete operation on key "${String(d)}" failed: target is readonly.`, a),
            !0
        }
    }
      , qt = t.extend({}, se, {
        get: K,
        set: Bt
    })
      , Vt = t.extend({}, at, {
        get: te
    })
      , je = a=>t.isObject(a) ? le(a) : a
      , Ne = a=>t.isObject(a) ? De(a) : a
      , Le = a=>a
      , ge = a=>Reflect.getPrototypeOf(a);
    function me(a, d, p=!1, v=!1) {
        a = a.__v_raw;
        const _ = P(a)
          , R = P(d);
        d !== R && !p && S(_, "get", d),
        !p && S(_, "get", R);
        const {has: A} = ge(_)
          , k = v ? Le : p ? Ne : je;
        if (A.call(_, d))
            return k(a.get(d));
        if (A.call(_, R))
            return k(a.get(R));
        a !== _ && a.get(d)
    }
    function ye(a, d=!1) {
        const p = this.__v_raw
          , v = P(p)
          , _ = P(a);
        return a !== _ && !d && S(v, "has", a),
        !d && S(v, "has", _),
        a === _ ? p.has(a) : p.has(a) || p.has(_)
    }
    function _e(a, d=!1) {
        return a = a.__v_raw,
        !d && S(P(a), "iterate", o),
        Reflect.get(a, "size", a)
    }
    function ct(a) {
        a = P(a);
        const d = P(this);
        return ge(d).has.call(d, a) || (d.add(a),
        M(d, "add", a, a)),
        this
    }
    function lt(a, d) {
        d = P(d);
        const p = P(this)
          , {has: v, get: _} = ge(p);
        let R = v.call(p, a);
        R ? $e(p, v, a) : (a = P(a),
        R = v.call(p, a));
        const A = _.call(p, a);
        return p.set(a, d),
        R ? t.hasChanged(d, A) && M(p, "set", a, d, A) : M(p, "add", a, d),
        this
    }
    function ut(a) {
        const d = P(this)
          , {has: p, get: v} = ge(d);
        let _ = p.call(d, a);
        _ ? $e(d, p, a) : (a = P(a),
        _ = p.call(d, a));
        const R = v ? v.call(d, a) : void 0
          , A = d.delete(a);
        return _ && M(d, "delete", a, void 0, R),
        A
    }
    function ft() {
        const a = P(this)
          , d = a.size !== 0
          , p = t.isMap(a) ? new Map(a) : new Set(a)
          , v = a.clear();
        return d && M(a, "clear", void 0, void 0, p),
        v
    }
    function be(a, d) {
        return function(v, _) {
            const R = this
              , A = R.__v_raw
              , k = P(A)
              , B = d ? Le : a ? Ne : je;
            return !a && S(k, "iterate", o),
            A.forEach((Ke,F)=>v.call(_, B(Ke), B(F), R))
        }
    }
    function Y(a, d, p) {
        return function(...v) {
            const _ = this.__v_raw
              , R = P(_)
              , A = t.isMap(R)
              , k = a === "entries" || a === Symbol.iterator && A
              , B = a === "keys" && A
              , Ke = _[a](...v)
              , F = p ? Le : d ? Ne : je;
            return !d && S(R, "iterate", B ? s : o),
            {
                next() {
                    const {value: Q, done: Xt} = Ke.next();
                    return Xt ? {
                        value: Q,
                        done: Xt
                    } : {
                        value: k ? [F(Q[0]), F(Q[1])] : F(Q),
                        done: Xt
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }
    function J(a) {
        return function(...d) {
            {
                const p = d[0] ? `on key "${d[0]}" ` : "";
                console.warn(`${t.capitalize(a)} operation ${p}failed: target is readonly.`, P(this))
            }
            return a === "delete" ? !1 : this
        }
    }
    var Fe = {
        get(a) {
            return me(this, a)
        },
        get size() {
            return _e(this)
        },
        has: ye,
        add: ct,
        set: lt,
        delete: ut,
        clear: ft,
        forEach: be(!1, !1)
    }
      , ve = {
        get(a) {
            return me(this, a, !1, !0)
        },
        get size() {
            return _e(this)
        },
        has: ye,
        add: ct,
        set: lt,
        delete: ut,
        clear: ft,
        forEach: be(!1, !0)
    }
      , we = {
        get(a) {
            return me(this, a, !0)
        },
        get size() {
            return _e(this, !0)
        },
        has(a) {
            return ye.call(this, a, !0)
        },
        add: J("add"),
        set: J("set"),
        delete: J("delete"),
        clear: J("clear"),
        forEach: be(!0, !1)
    }
      , ne = {
        get(a) {
            return me(this, a, !0, !0)
        },
        get size() {
            return _e(this, !0)
        },
        has(a) {
            return ye.call(this, a, !0)
        },
        add: J("add"),
        set: J("set"),
        delete: J("delete"),
        clear: J("clear"),
        forEach: be(!0, !0)
    }
      , Ut = ["keys", "values", "entries", Symbol.iterator];
    Ut.forEach(a=>{
        Fe[a] = Y(a, !1, !1),
        we[a] = Y(a, !0, !1),
        ve[a] = Y(a, !1, !0),
        ne[a] = Y(a, !0, !0)
    }
    );
    function G(a, d) {
        const p = d ? a ? ne : ve : a ? we : Fe;
        return (v,_,R)=>_ === "__v_isReactive" ? !a : _ === "__v_isReadonly" ? a : _ === "__v_raw" ? v : Reflect.get(t.hasOwn(p, _) && _ in v ? p : v, _, R)
    }
    var Gt = {
        get: G(!1, !1)
    }
      , dt = {
        get: G(!1, !0)
    }
      , ae = {
        get: G(!0, !1)
    }
      , Wt = {
        get: G(!0, !0)
    };
    function $e(a, d, p) {
        const v = P(p);
        if (v !== p && d.call(a, v)) {
            const _ = t.toRawType(a);
            console.warn(`Reactive ${_} contains both the raw and reactive versions of the same object${_ === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
        }
    }
    var ht = new WeakMap
      , pt = new WeakMap
      , ce = new WeakMap
      , gt = new WeakMap;
    function Yt(a) {
        switch (a) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
        }
    }
    function Jt(a) {
        return a.__v_skip || !Object.isExtensible(a) ? 0 : Yt(t.toRawType(a))
    }
    function le(a) {
        return a && a.__v_isReadonly ? a : Se(a, !1, se, Gt, ht)
    }
    function mt(a) {
        return Se(a, !1, qt, dt, pt)
    }
    function De(a) {
        return Se(a, !0, at, ae, ce)
    }
    function Qt(a) {
        return Se(a, !0, Vt, Wt, gt)
    }
    function Se(a, d, p, v, _) {
        if (!t.isObject(a))
            return console.warn(`value cannot be made reactive: ${String(a)}`),
            a;
        if (a.__v_raw && !(d && a.__v_isReactive))
            return a;
        const R = _.get(a);
        if (R)
            return R;
        const A = Jt(a);
        if (A === 0)
            return a;
        const k = new Proxy(a,A === 2 ? v : p);
        return _.set(a, k),
        k
    }
    function xe(a) {
        return Be(a) ? xe(a.__v_raw) : !!(a && a.__v_isReactive)
    }
    function Be(a) {
        return !!(a && a.__v_isReadonly)
    }
    function ze(a) {
        return xe(a) || Be(a)
    }
    function P(a) {
        return a && P(a.__v_raw) || a
    }
    function f(a) {
        return t.def(a, "__v_skip", !0),
        a
    }
    var m = a=>t.isObject(a) ? le(a) : a;
    function y(a) {
        return Boolean(a && a.__v_isRef === !0)
    }
    function x(a) {
        return N(a)
    }
    function C(a) {
        return N(a, !0)
    }
    var j = class {
        constructor(a, d=!1) {
            this._rawValue = a,
            this._shallow = d,
            this.__v_isRef = !0,
            this._value = d ? a : m(a)
        }
        get value() {
            return S(P(this), "get", "value"),
            this._value
        }
        set value(a) {
            t.hasChanged(P(a), this._rawValue) && (this._rawValue = a,
            this._value = this._shallow ? a : m(a),
            M(P(this), "set", "value", a))
        }
    }
    ;
    function N(a, d=!1) {
        return y(a) ? a : new j(a,d)
    }
    function U(a) {
        M(P(a), "set", "value", a.value)
    }
    function re(a) {
        return y(a) ? a.value : a
    }
    var Ee = {
        get: (a,d,p)=>re(Reflect.get(a, d, p)),
        set: (a,d,p,v)=>{
            const _ = a[d];
            return y(_) && !y(p) ? (_.value = p,
            !0) : Reflect.set(a, d, p, v)
        }
    };
    function Oe(a) {
        return xe(a) ? a : new Proxy(a,Ee)
    }
    var Zt = class {
        constructor(a) {
            this.__v_isRef = !0;
            const {get: d, set: p} = a(()=>S(this, "get", "value"), ()=>M(this, "set", "value"));
            this._get = d,
            this._set = p
        }
        get value() {
            return this._get()
        }
        set value(a) {
            this._set(a)
        }
    }
    ;
    function Mi(a) {
        return new Zt(a)
    }
    function Ri(a) {
        ze(a) || console.warn("toRefs() expects a reactive object but received a plain one.");
        const d = t.isArray(a) ? new Array(a.length) : {};
        for (const p in a)
            d[p] = Yn(a, p);
        return d
    }
    var Pi = class {
        constructor(a, d) {
            this._object = a,
            this._key = d,
            this.__v_isRef = !0
        }
        get value() {
            return this._object[this._key]
        }
        set value(a) {
            this._object[this._key] = a
        }
    }
    ;
    function Yn(a, d) {
        return y(a[d]) ? a[d] : new Pi(a,d)
    }
    var ki = class {
        constructor(a, d, p) {
            this._setter = d,
            this._dirty = !0,
            this.__v_isRef = !0,
            this.effect = l(a, {
                lazy: !0,
                scheduler: ()=>{
                    this._dirty || (this._dirty = !0,
                    M(P(this), "set", "value"))
                }
            }),
            this.__v_isReadonly = p
        }
        get value() {
            const a = P(this);
            return a._dirty && (a._value = this.effect(),
            a._dirty = !1),
            S(a, "get", "value"),
            a._value
        }
        set value(a) {
            this._setter(a)
        }
    }
    ;
    function ji(a) {
        let d, p;
        return t.isFunction(a) ? (d = a,
        p = ()=>{
            console.warn("Write operation failed: computed value is readonly")
        }
        ) : (d = a.get,
        p = a.set),
        new ki(d,p,t.isFunction(a) || !a.set)
    }
    e.ITERATE_KEY = o,
    e.computed = ji,
    e.customRef = Mi,
    e.effect = l,
    e.enableTracking = w,
    e.isProxy = ze,
    e.isReactive = xe,
    e.isReadonly = Be,
    e.isRef = y,
    e.markRaw = f,
    e.pauseTracking = D,
    e.proxyRefs = Oe,
    e.reactive = le,
    e.readonly = De,
    e.ref = x,
    e.resetTracking = O,
    e.shallowReactive = mt,
    e.shallowReadonly = Qt,
    e.shallowRef = C,
    e.stop = u,
    e.toRaw = P,
    e.toRef = Yn,
    e.toRefs = Ri,
    e.track = S,
    e.trigger = M,
    e.triggerRef = U,
    e.unref = re
}
)
  , Ui = Mt((e,t)=>{
    t.exports = Vi()
}
)
  , cn = !1
  , ln = !1
  , Ue = [];
function Gi(e) {
    Wi(e)
}
function Wi(e) {
    Ue.includes(e) || Ue.push(e),
    Yi()
}
function Yi() {
    !ln && !cn && (cn = !0,
    queueMicrotask(Ji))
}
function Ji() {
    cn = !1,
    ln = !0;
    for (let e = 0; e < Ue.length; e++)
        Ue[e]();
    Ue.length = 0,
    ln = !1
}
var Ie, Me, Rt, gr, un = !0;
function Qi(e) {
    un = !1,
    e(),
    un = !0
}
function Zi(e) {
    Ie = e.reactive,
    Rt = e.release,
    Me = t=>e.effect(t, {
        scheduler: n=>{
            un ? Gi(n) : n()
        }
    }),
    gr = e.raw
}
function Jn(e) {
    Me = e
}
function Xi(e) {
    let t = ()=>{}
    ;
    return [r=>{
        let i = Me(r);
        e._x_effects || (e._x_effects = new Set,
        e._x_runEffects = ()=>{
            e._x_effects.forEach(o=>o())
        }
        ),
        e._x_effects.add(i),
        t = ()=>{
            i !== void 0 && (e._x_effects.delete(i),
            Rt(i))
        }
    }
    , ()=>{
        t()
    }
    ]
}
var mr = []
  , yr = []
  , _r = [];
function eo(e) {
    _r.push(e)
}
function to(e) {
    yr.push(e)
}
function no(e) {
    mr.push(e)
}
function ro(e, t, n) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
    e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
    e._x_attributeCleanups[t].push(n)
}
function br(e, t) {
    !e._x_attributeCleanups || Object.entries(e._x_attributeCleanups).forEach(([n,r])=>{
        (t === void 0 || t.includes(n)) && (r.forEach(i=>i()),
        delete e._x_attributeCleanups[n])
    }
    )
}
var kn = new MutationObserver(Ln)
  , jn = !1;
function vr() {
    kn.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }),
    jn = !0
}
function io() {
    oo(),
    kn.disconnect(),
    jn = !1
}
var Ge = []
  , en = !1;
function oo() {
    Ge = Ge.concat(kn.takeRecords()),
    Ge.length && !en && (en = !0,
    queueMicrotask(()=>{
        so(),
        en = !1
    }
    ))
}
function so() {
    Ln(Ge),
    Ge.length = 0
}
function z(e) {
    if (!jn)
        return e();
    io();
    let t = e();
    return vr(),
    t
}
var Nn = !1
  , xt = [];
function ao() {
    Nn = !0
}
function co() {
    Nn = !1,
    Ln(xt),
    xt = []
}
function Ln(e) {
    if (Nn) {
        xt = xt.concat(e);
        return
    }
    let t = []
      , n = []
      , r = new Map
      , i = new Map;
    for (let o = 0; o < e.length; o++)
        if (!e[o].target._x_ignoreMutationObserver && (e[o].type === "childList" && (e[o].addedNodes.forEach(s=>s.nodeType === 1 && t.push(s)),
        e[o].removedNodes.forEach(s=>s.nodeType === 1 && n.push(s))),
        e[o].type === "attributes")) {
            let s = e[o].target
              , c = e[o].attributeName
              , l = e[o].oldValue
              , u = ()=>{
                r.has(s) || r.set(s, []),
                r.get(s).push({
                    name: c,
                    value: s.getAttribute(c)
                })
            }
              , h = ()=>{
                i.has(s) || i.set(s, []),
                i.get(s).push(c)
            }
            ;
            s.hasAttribute(c) && l === null ? u() : s.hasAttribute(c) ? (h(),
            u()) : h()
        }
    i.forEach((o,s)=>{
        br(s, o)
    }
    ),
    r.forEach((o,s)=>{
        mr.forEach(c=>c(s, o))
    }
    );
    for (let o of n)
        t.includes(o) || yr.forEach(s=>s(o));
    t.forEach(o=>{
        o._x_ignoreSelf = !0,
        o._x_ignore = !0
    }
    );
    for (let o of t)
        n.includes(o) || !o.isConnected || (delete o._x_ignoreSelf,
        delete o._x_ignore,
        _r.forEach(s=>s(o)),
        o._x_ignore = !0,
        o._x_ignoreSelf = !0);
    t.forEach(o=>{
        delete o._x_ignoreSelf,
        delete o._x_ignore
    }
    ),
    t = null,
    n = null,
    r = null,
    i = null
}
function et(e, t, n) {
    return e._x_dataStack = [t, ...Ae(n || e)],
    ()=>{
        e._x_dataStack = e._x_dataStack.filter(r=>r !== t)
    }
}
function Qn(e, t) {
    let n = e._x_dataStack[0];
    Object.entries(t).forEach(([r,i])=>{
        n[r] = i
    }
    )
}
function Ae(e) {
    return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? Ae(e.host) : e.parentNode ? Ae(e.parentNode) : []
}
function tt(e) {
    let t = new Proxy({},{
        ownKeys: ()=>Array.from(new Set(e.flatMap(n=>Object.keys(n)))),
        has: (n,r)=>e.some(i=>i.hasOwnProperty(r)),
        get: (n,r)=>(e.find(i=>{
            if (i.hasOwnProperty(r)) {
                let o = Object.getOwnPropertyDescriptor(i, r);
                if (o.get && o.get._x_alreadyBound || o.set && o.set._x_alreadyBound)
                    return !0;
                if ((o.get || o.set) && o.enumerable) {
                    let s = o.get
                      , c = o.set
                      , l = o;
                    s = s && s.bind(t),
                    c = c && c.bind(t),
                    s && (s._x_alreadyBound = !0),
                    c && (c._x_alreadyBound = !0),
                    Object.defineProperty(i, r, {
                        ...l,
                        get: s,
                        set: c
                    })
                }
                return !0
            }
            return !1
        }
        ) || {})[r],
        set: (n,r,i)=>{
            let o = e.find(s=>s.hasOwnProperty(r));
            return o ? o[r] = i : e[e.length - 1][r] = i,
            !0
        }
    });
    return t
}
function wr(e) {
    let t = r=>typeof r == "object" && !Array.isArray(r) && r !== null
      , n = (r,i="")=>{
        Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([o,{value: s, enumerable: c}])=>{
            if (c === !1 || s === void 0)
                return;
            let l = i === "" ? o : `${i}.${o}`;
            typeof s == "object" && s !== null && s._x_interceptor ? r[o] = s.initialize(e, l, o) : t(s) && s !== r && !(s instanceof Element) && n(s, l)
        }
        )
    }
    ;
    return n(e)
}
function Sr(e, t=()=>{}
) {
    let n = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(r, i, o) {
            return e(this.initialValue, ()=>lo(r, i), s=>fn(r, i, s), i, o)
        }
    };
    return t(n),
    r=>{
        if (typeof r == "object" && r !== null && r._x_interceptor) {
            let i = n.initialize.bind(n);
            n.initialize = (o,s,c)=>{
                let l = r.initialize(o, s, c);
                return n.initialValue = l,
                i(o, s, c)
            }
        } else
            n.initialValue = r;
        return n
    }
}
function lo(e, t) {
    return t.split(".").reduce((n,r)=>n[r], e)
}
function fn(e, t, n) {
    if (typeof t == "string" && (t = t.split(".")),
    t.length === 1)
        e[t[0]] = n;
    else {
        if (t.length === 0)
            throw error;
        return e[t[0]] || (e[t[0]] = {}),
        fn(e[t[0]], t.slice(1), n)
    }
}
var xr = {};
function X(e, t) {
    xr[e] = t
}
function dn(e, t) {
    return Object.entries(xr).forEach(([n,r])=>{
        Object.defineProperty(e, `$${n}`, {
            get() {
                return r(t, {
                    Alpine: Pe,
                    interceptor: Sr
                })
            },
            enumerable: !1
        })
    }
    ),
    e
}
function uo(e, t, n, ...r) {
    try {
        return n(...r)
    } catch (i) {
        Qe(i, e, t)
    }
}
function Qe(e, t, n=void 0) {
    Object.assign(e, {
        el: t,
        expression: n
    }),
    console.warn(`Alpine Expression Error: ${e.message}

${n ? 'Expression: "' + n + `"

` : ""}`, t),
    setTimeout(()=>{
        throw e
    }
    , 0)
}
function ie(e, t, n={}) {
    let r;
    return H(e, t)(i=>r = i, n),
    r
}
function H(...e) {
    return Er(...e)
}
var Er = Or;
function fo(e) {
    Er = e
}
function Or(e, t) {
    let n = {};
    dn(n, e);
    let r = [n, ...Ae(e)];
    if (typeof t == "function")
        return ho(r, t);
    let i = go(r, t, e);
    return uo.bind(null, e, t, i)
}
function ho(e, t) {
    return (n=()=>{}
    ,{scope: r={}, params: i=[]}={})=>{
        let o = t.apply(tt([r, ...e]), i);
        Et(n, o)
    }
}
var tn = {};
function po(e, t) {
    if (tn[e])
        return tn[e];
    let n = Object.getPrototypeOf(async function() {}).constructor
      , r = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(() => { ${e} })()` : e
      , o = (()=>{
        try {
            return new n(["__self", "scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`)
        } catch (s) {
            return Qe(s, t, e),
            Promise.resolve()
        }
    }
    )();
    return tn[e] = o,
    o
}
function go(e, t, n) {
    let r = po(t, n);
    return (i=()=>{}
    ,{scope: o={}, params: s=[]}={})=>{
        r.result = void 0,
        r.finished = !1;
        let c = tt([o, ...e]);
        if (typeof r == "function") {
            let l = r(r, c).catch(u=>Qe(u, n, t));
            r.finished ? (Et(i, r.result, c, s, n),
            r.result = void 0) : l.then(u=>{
                Et(i, u, c, s, n)
            }
            ).catch(u=>Qe(u, n, t)).finally(()=>r.result = void 0)
        }
    }
}
function Et(e, t, n, r, i) {
    if (typeof t == "function") {
        let o = t.apply(n, r);
        o instanceof Promise ? o.then(s=>Et(e, s, n, r)).catch(s=>Qe(s, i, t)) : e(o)
    } else
        e(t)
}
var Fn = "x-";
function Re(e="") {
    return Fn + e
}
function mo(e) {
    Fn = e
}
var Ar = {};
function $(e, t) {
    Ar[e] = t
}
function $n(e, t, n) {
    let r = {};
    return Array.from(t).map(Mr((o,s)=>r[o] = s)).filter(Pr).map(vo(r, n)).sort(wo).map(o=>bo(e, o))
}
function yo(e) {
    return Array.from(e).map(Mr()).filter(t=>!Pr(t))
}
var hn = !1
  , Ve = new Map
  , Tr = Symbol();
function _o(e) {
    hn = !0;
    let t = Symbol();
    Tr = t,
    Ve.set(t, []);
    let n = ()=>{
        for (; Ve.get(t).length; )
            Ve.get(t).shift()();
        Ve.delete(t)
    }
      , r = ()=>{
        hn = !1,
        n()
    }
    ;
    e(n),
    r()
}
function bo(e, t) {
    let n = ()=>{}
      , r = Ar[t.type] || n
      , i = []
      , o = g=>i.push(g)
      , [s,c] = Xi(e);
    i.push(c);
    let l = {
        Alpine: Pe,
        effect: s,
        cleanup: o,
        evaluateLater: H.bind(H, e),
        evaluate: ie.bind(ie, e)
    }
      , u = ()=>i.forEach(g=>g());
    ro(e, t.original, u);
    let h = ()=>{
        e._x_ignore || e._x_ignoreSelf || (r.inline && r.inline(e, t, l),
        r = r.bind(r, e, t, l),
        hn ? Ve.get(Tr).push(r) : r())
    }
    ;
    return h.runCleanups = u,
    h
}
var Cr = (e,t)=>({name: n, value: r})=>(n.startsWith(e) && (n = n.replace(e, t)),
{
    name: n,
    value: r
})
  , Ir = e=>e;
function Mr(e=()=>{}
) {
    return ({name: t, value: n})=>{
        let {name: r, value: i} = Rr.reduce((o,s)=>s(o), {
            name: t,
            value: n
        });
        return r !== t && e(r, t),
        {
            name: r,
            value: i
        }
    }
}
var Rr = [];
function Dn(e) {
    Rr.push(e)
}
function Pr({name: e}) {
    return kr().test(e)
}
var kr = ()=>new RegExp(`^${Fn}([^:^.]+)\\b`);
function vo(e, t) {
    return ({name: n, value: r})=>{
        let i = n.match(kr())
          , o = n.match(/:([a-zA-Z0-9\-:]+)/)
          , s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
          , c = t || e[n] || n;
        return {
            type: i ? i[1] : null,
            value: o ? o[1] : null,
            modifiers: s.map(l=>l.replace(".", "")),
            expression: r,
            original: c
        }
    }
}
var pn = "DEFAULT"
  , yt = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "transition", "show", "if", pn, "teleport", "element"];
function wo(e, t) {
    let n = yt.indexOf(e.type) === -1 ? pn : e.type
      , r = yt.indexOf(t.type) === -1 ? pn : t.type;
    return yt.indexOf(n) - yt.indexOf(r)
}
function We(e, t, n={}) {
    e.dispatchEvent(new CustomEvent(t,{
        detail: n,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}
var gn = []
  , Bn = !1;
function jr(e) {
    gn.push(e),
    queueMicrotask(()=>{
        Bn || setTimeout(()=>{
            mn()
        }
        )
    }
    )
}
function mn() {
    for (Bn = !1; gn.length; )
        gn.shift()()
}
function So() {
    Bn = !0
}
function Te(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
        Array.from(e.children).forEach(i=>Te(i, t));
        return
    }
    let n = !1;
    if (t(e, ()=>n = !0),
    n)
        return;
    let r = e.firstElementChild;
    for (; r; )
        Te(r, t),
        r = r.nextElementSibling
}
function Ot(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t)
}
function xo() {
    document.body || Ot("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
    We(document, "alpine:init"),
    We(document, "alpine:initializing"),
    vr(),
    eo(t=>de(t, Te)),
    to(t=>Oo(t)),
    no((t,n)=>{
        $n(t, n).forEach(r=>r())
    }
    );
    let e = t=>!Pt(t.parentElement, !0);
    Array.from(document.querySelectorAll(Fr())).filter(e).forEach(t=>{
        de(t)
    }
    ),
    We(document, "alpine:initialized")
}
var zn = []
  , Nr = [];
function Lr() {
    return zn.map(e=>e())
}
function Fr() {
    return zn.concat(Nr).map(e=>e())
}
function $r(e) {
    zn.push(e)
}
function Dr(e) {
    Nr.push(e)
}
function Pt(e, t=!1) {
    return Kn(e, n=>{
        if ((t ? Fr() : Lr()).some(i=>n.matches(i)))
            return !0
    }
    )
}
function Kn(e, t) {
    if (!!e) {
        if (t(e))
            return e;
        if (e._x_teleportBack && (e = e._x_teleportBack),
        !!e.parentElement)
            return Kn(e.parentElement, t)
    }
}
function Eo(e) {
    return Lr().some(t=>e.matches(t))
}
function de(e, t=Te) {
    _o(()=>{
        t(e, (n,r)=>{
            $n(n, n.attributes).forEach(i=>i()),
            n._x_ignore && r()
        }
        )
    }
    )
}
function Oo(e) {
    Te(e, t=>br(t))
}
function Hn(e, t) {
    return Array.isArray(t) ? Zn(e, t.join(" ")) : typeof t == "object" && t !== null ? Ao(e, t) : typeof t == "function" ? Hn(e, t()) : Zn(e, t)
}
function Zn(e, t) {
    let n = i=>i.split(" ").filter(o=>!e.classList.contains(o)).filter(Boolean)
      , r = i=>(e.classList.add(...i),
    ()=>{
        e.classList.remove(...i)
    }
    );
    return t = t === !0 ? t = "" : t || "",
    r(n(t))
}
function Ao(e, t) {
    let n = c=>c.split(" ").filter(Boolean)
      , r = Object.entries(t).flatMap(([c,l])=>l ? n(c) : !1).filter(Boolean)
      , i = Object.entries(t).flatMap(([c,l])=>l ? !1 : n(c)).filter(Boolean)
      , o = []
      , s = [];
    return i.forEach(c=>{
        e.classList.contains(c) && (e.classList.remove(c),
        s.push(c))
    }
    ),
    r.forEach(c=>{
        e.classList.contains(c) || (e.classList.add(c),
        o.push(c))
    }
    ),
    ()=>{
        s.forEach(c=>e.classList.add(c)),
        o.forEach(c=>e.classList.remove(c))
    }
}
function kt(e, t) {
    return typeof t == "object" && t !== null ? To(e, t) : Co(e, t)
}
function To(e, t) {
    let n = {};
    return Object.entries(t).forEach(([r,i])=>{
        n[r] = e.style[r],
        e.style.setProperty(Io(r), i)
    }
    ),
    setTimeout(()=>{
        e.style.length === 0 && e.removeAttribute("style")
    }
    ),
    ()=>{
        kt(e, n)
    }
}
function Co(e, t) {
    let n = e.getAttribute("style", t);
    return e.setAttribute("style", t),
    ()=>{
        e.setAttribute("style", n || "")
    }
}
function Io(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function yn(e, t=()=>{}
) {
    let n = !1;
    return function() {
        n ? t.apply(this, arguments) : (n = !0,
        e.apply(this, arguments))
    }
}
$("transition", (e,{value: t, modifiers: n, expression: r},{evaluate: i})=>{
    typeof r == "function" && (r = i(r)),
    r ? Mo(e, r, t) : Ro(e, n, t)
}
);
function Mo(e, t, n) {
    Br(e, Hn, ""),
    {
        enter: i=>{
            e._x_transition.enter.during = i
        }
        ,
        "enter-start": i=>{
            e._x_transition.enter.start = i
        }
        ,
        "enter-end": i=>{
            e._x_transition.enter.end = i
        }
        ,
        leave: i=>{
            e._x_transition.leave.during = i
        }
        ,
        "leave-start": i=>{
            e._x_transition.leave.start = i
        }
        ,
        "leave-end": i=>{
            e._x_transition.leave.end = i
        }
    }[n](t)
}
function Ro(e, t, n) {
    Br(e, kt);
    let r = !t.includes("in") && !t.includes("out") && !n
      , i = r || t.includes("in") || ["enter"].includes(n)
      , o = r || t.includes("out") || ["leave"].includes(n);
    t.includes("in") && !r && (t = t.filter((O,S)=>S < t.indexOf("out"))),
    t.includes("out") && !r && (t = t.filter((O,S)=>S > t.indexOf("out")));
    let s = !t.includes("opacity") && !t.includes("scale")
      , c = s || t.includes("opacity")
      , l = s || t.includes("scale")
      , u = c ? 0 : 1
      , h = l ? He(t, "scale", 95) / 100 : 1
      , g = He(t, "delay", 0)
      , b = He(t, "origin", "center")
      , E = "opacity, transform"
      , T = He(t, "duration", 150) / 1e3
      , D = He(t, "duration", 75) / 1e3
      , w = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i && (e._x_transition.enter.during = {
        transformOrigin: b,
        transitionDelay: g,
        transitionProperty: E,
        transitionDuration: `${T}s`,
        transitionTimingFunction: w
    },
    e._x_transition.enter.start = {
        opacity: u,
        transform: `scale(${h})`
    },
    e._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)"
    }),
    o && (e._x_transition.leave.during = {
        transformOrigin: b,
        transitionDelay: g,
        transitionProperty: E,
        transitionDuration: `${D}s`,
        transitionTimingFunction: w
    },
    e._x_transition.leave.start = {
        opacity: 1,
        transform: "scale(1)"
    },
    e._x_transition.leave.end = {
        opacity: u,
        transform: `scale(${h})`
    })
}
function Br(e, t, n={}) {
    e._x_transition || (e._x_transition = {
        enter: {
            during: n,
            start: n,
            end: n
        },
        leave: {
            during: n,
            start: n,
            end: n
        },
        in(r=()=>{}
        , i=()=>{}
        ) {
            _n(e, t, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, r, i)
        },
        out(r=()=>{}
        , i=()=>{}
        ) {
            _n(e, t, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, r, i)
        }
    })
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, n, r) {
    let i = ()=>{
        document.visibilityState === "visible" ? requestAnimationFrame(n) : setTimeout(n)
    }
    ;
    if (t) {
        e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(n) : i() : e._x_transition ? e._x_transition.in(n) : i();
        return
    }
    e._x_hidePromise = e._x_transition ? new Promise((o,s)=>{
        e._x_transition.out(()=>{}
        , ()=>o(r)),
        e._x_transitioning.beforeCancel(()=>s({
            isFromCancelledTransition: !0
        }))
    }
    ) : Promise.resolve(r),
    queueMicrotask(()=>{
        let o = zr(e);
        o ? (o._x_hideChildren || (o._x_hideChildren = []),
        o._x_hideChildren.push(e)) : queueMicrotask(()=>{
            let s = c=>{
                let l = Promise.all([c._x_hidePromise, ...(c._x_hideChildren || []).map(s)]).then(([u])=>u());
                return delete c._x_hidePromise,
                delete c._x_hideChildren,
                l
            }
            ;
            s(e).catch(c=>{
                if (!c.isFromCancelledTransition)
                    throw c
            }
            )
        }
        )
    }
    )
}
;
function zr(e) {
    let t = e.parentNode;
    if (!!t)
        return t._x_hidePromise ? t : zr(t)
}
function _n(e, t, {during: n, start: r, end: i}={}, o=()=>{}
, s=()=>{}
) {
    if (e._x_transitioning && e._x_transitioning.cancel(),
    Object.keys(n).length === 0 && Object.keys(r).length === 0 && Object.keys(i).length === 0) {
        o(),
        s();
        return
    }
    let c, l, u;
    Po(e, {
        start() {
            c = t(e, r)
        },
        during() {
            l = t(e, n)
        },
        before: o,
        end() {
            c(),
            u = t(e, i)
        },
        after: s,
        cleanup() {
            l(),
            u()
        }
    })
}
function Po(e, t) {
    let n, r, i, o = yn(()=>{
        z(()=>{
            n = !0,
            r || t.before(),
            i || (t.end(),
            mn()),
            t.after(),
            e.isConnected && t.cleanup(),
            delete e._x_transitioning
        }
        )
    }
    );
    e._x_transitioning = {
        beforeCancels: [],
        beforeCancel(s) {
            this.beforeCancels.push(s)
        },
        cancel: yn(function() {
            for (; this.beforeCancels.length; )
                this.beforeCancels.shift()();
            o()
        }),
        finish: o
    },
    z(()=>{
        t.start(),
        t.during()
    }
    ),
    So(),
    requestAnimationFrame(()=>{
        if (n)
            return;
        let s = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3
          , c = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        s === 0 && (s = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
        z(()=>{
            t.before()
        }
        ),
        r = !0,
        requestAnimationFrame(()=>{
            n || (z(()=>{
                t.end()
            }
            ),
            mn(),
            setTimeout(e._x_transitioning.finish, s + c),
            i = !0)
        }
        )
    }
    )
}
function He(e, t, n) {
    if (e.indexOf(t) === -1)
        return n;
    const r = e[e.indexOf(t) + 1];
    if (!r || t === "scale" && isNaN(r))
        return n;
    if (t === "duration") {
        let i = r.match(/([0-9]+)ms/);
        if (i)
            return i[1]
    }
    return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [r, e[e.indexOf(t) + 2]].join(" ") : r
}
var bn = !1;
function jt(e, t=()=>{}
) {
    return (...n)=>bn ? t(...n) : e(...n)
}
function ko(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
    bn = !0,
    No(()=>{
        jo(t)
    }
    ),
    bn = !1
}
function jo(e) {
    let t = !1;
    de(e, (r,i)=>{
        Te(r, (o,s)=>{
            if (t && Eo(o))
                return s();
            t = !0,
            i(o, s)
        }
        )
    }
    )
}
function No(e) {
    let t = Me;
    Jn((n,r)=>{
        let i = t(n);
        return Rt(i),
        ()=>{}
    }
    ),
    e(),
    Jn(t)
}
function Kr(e, t) {
    var n;
    return function() {
        var r = this
          , i = arguments
          , o = function() {
            n = null,
            e.apply(r, i)
        };
        clearTimeout(n),
        n = setTimeout(o, t)
    }
}
function Hr(e, t) {
    let n;
    return function() {
        let r = this
          , i = arguments;
        n || (e.apply(r, i),
        n = !0,
        setTimeout(()=>n = !1, t))
    }
}
function Lo(e) {
    e(Pe)
}
var ue = {}
  , Xn = !1;
function Fo(e, t) {
    if (Xn || (ue = Ie(ue),
    Xn = !0),
    t === void 0)
        return ue[e];
    ue[e] = t,
    typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && ue[e].init(),
    wr(ue[e])
}
function $o() {
    return ue
}
var qr = {};
function Do(e, t) {
    qr[e] = t
}
function Bo(e, t) {
    return Object.entries(qr).forEach(([n,r])=>{
        Object.defineProperty(e, n, {
            get() {
                return (...i)=>r.bind(t)(...i)
            },
            enumerable: !1
        })
    }
    ),
    e
}
var zo = {
    get reactive() {
        return Ie
    },
    get release() {
        return Rt
    },
    get effect() {
        return Me
    },
    get raw() {
        return gr
    },
    version: "3.7.1",
    flushAndStopDeferringMutations: co,
    disableEffectScheduling: Qi,
    setReactivityEngine: Zi,
    closestDataStack: Ae,
    skipDuringClone: jt,
    addRootSelector: $r,
    addInitSelector: Dr,
    addScopeToNode: et,
    deferMutations: ao,
    mapAttributes: Dn,
    evaluateLater: H,
    setEvaluator: fo,
    mergeProxies: tt,
    closestRoot: Pt,
    interceptor: Sr,
    transition: _n,
    setStyles: kt,
    mutateDom: z,
    directive: $,
    throttle: Hr,
    debounce: Kr,
    evaluate: ie,
    initTree: de,
    nextTick: jr,
    prefixed: Re,
    prefix: mo,
    plugin: Lo,
    magic: X,
    store: Fo,
    start: xo,
    clone: ko,
    data: Do
}
  , Pe = zo
  , _t = Ki(Ui());
X("nextTick", ()=>jr);
X("dispatch", e=>We.bind(We, e));
X("watch", e=>(t,n)=>{
    let r = H(e, t), i = !0, o;
    Me(()=>r(s=>{
        JSON.stringify(s),
        i ? o = s : queueMicrotask(()=>{
            n(s, o),
            o = s
        }
        ),
        i = !1
    }
    ))
}
);
X("store", $o);
X("data", e=>tt(Ae(e)));
X("root", e=>Pt(e));
X("refs", e=>(e._x_refs_proxy || (e._x_refs_proxy = tt(Ko(e))),
e._x_refs_proxy));
function Ko(e) {
    let t = []
      , n = e;
    for (; n; )
        n._x_refs && t.push(n._x_refs),
        n = n.parentNode;
    return t
}
var nn = {};
function Vr(e) {
    return nn[e] || (nn[e] = 0),
    ++nn[e]
}
function Ho(e, t) {
    return Kn(e, n=>{
        if (n._x_ids && n._x_ids[t])
            return !0
    }
    )
}
function qo(e, t) {
    e._x_ids || (e._x_ids = {}),
    e._x_ids[t] || (e._x_ids[t] = Vr(t))
}
X("id", e=>(t,n=null)=>{
    let r = Ho(e, t)
      , i = r ? r._x_ids[t] : Vr(t);
    return n ? new er(`${t}-${i}-${n}`) : new er(`${t}-${i}`)
}
);
var er = class {
    constructor(e) {
        this.id = e
    }
    toString() {
        return this.id
    }
}
;
X("el", e=>e);
$("teleport", (e,{expression: t},{cleanup: n})=>{
    e.tagName.toLowerCase() !== "template" && Ot("x-teleport can only be used on a <template> tag", e);
    let r = document.querySelector(t);
    r || Ot(`Cannot find x-teleport element for selector: "${t}"`);
    let i = e.content.cloneNode(!0).firstElementChild;
    e._x_teleport = i,
    i._x_teleportBack = e,
    e._x_forwardEvents && e._x_forwardEvents.forEach(o=>{
        i.addEventListener(o, s=>{
            s.stopPropagation(),
            e.dispatchEvent(new s.constructor(s.type,s))
        }
        )
    }
    ),
    et(i, {}, e),
    z(()=>{
        r.appendChild(i),
        de(i),
        i._x_ignore = !0
    }
    ),
    n(()=>i.remove())
}
);
var Ur = ()=>{}
;
Ur.inline = (e,{modifiers: t},{cleanup: n})=>{
    t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0,
    n(()=>{
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
    }
    )
}
;
$("ignore", Ur);
$("effect", (e,{expression: t},{effect: n})=>n(H(e, t)));
function Gr(e, t, n, r=[]) {
    switch (e._x_bindings || (e._x_bindings = Ie({})),
    e._x_bindings[t] = n,
    t = r.includes("camel") ? Qo(t) : t,
    t) {
    case "value":
        Vo(e, n);
        break;
    case "style":
        Go(e, n);
        break;
    case "class":
        Uo(e, n);
        break;
    default:
        Wo(e, t, n);
        break
    }
}
function Vo(e, t) {
    if (e.type === "radio")
        e.attributes.value === void 0 && (e.value = t),
        window.fromModel && (e.checked = tr(e.value, t));
    else if (e.type === "checkbox")
        Number.isInteger(t) ? e.value = t : !Number.isInteger(t) && !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some(n=>tr(n, e.value)) : e.checked = !!t;
    else if (e.tagName === "SELECT")
        Jo(e, t);
    else {
        if (e.value === t)
            return;
        e.value = t
    }
}
function Uo(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
    e._x_undoAddedClasses = Hn(e, t)
}
function Go(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
    e._x_undoAddedStyles = kt(e, t)
}
function Wo(e, t, n) {
    [null, void 0, !1].includes(n) && Xo(t) ? e.removeAttribute(t) : (Zo(t) && (n = t),
    Yo(e, t, n))
}
function Yo(e, t, n) {
    e.getAttribute(t) != n && e.setAttribute(t, n)
}
function Jo(e, t) {
    const n = [].concat(t).map(r=>r + "");
    Array.from(e.options).forEach(r=>{
        r.selected = n.includes(r.value)
    }
    )
}
function Qo(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t,n)=>n.toUpperCase())
}
function tr(e, t) {
    return e == t
}
function Zo(e) {
    return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
}
function Xo(e) {
    return !["aria-pressed", "aria-checked", "aria-expanded"].includes(e)
}
function Wr(e, t, n, r) {
    let i = e
      , o = l=>r(l)
      , s = {}
      , c = (l,u)=>h=>u(l, h);
    if (n.includes("dot") && (t = es(t)),
    n.includes("camel") && (t = ts(t)),
    n.includes("passive") && (s.passive = !0),
    n.includes("capture") && (s.capture = !0),
    n.includes("window") && (i = window),
    n.includes("document") && (i = document),
    n.includes("prevent") && (o = c(o, (l,u)=>{
        u.preventDefault(),
        l(u)
    }
    )),
    n.includes("stop") && (o = c(o, (l,u)=>{
        u.stopPropagation(),
        l(u)
    }
    )),
    n.includes("self") && (o = c(o, (l,u)=>{
        u.target === e && l(u)
    }
    )),
    (n.includes("away") || n.includes("outside")) && (i = document,
    o = c(o, (l,u)=>{
        e.contains(u.target) || e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== !1 && l(u)
    }
    )),
    o = c(o, (l,u)=>{
        rs(t) && is(u, n) || l(u)
    }
    ),
    n.includes("debounce")) {
        let l = n[n.indexOf("debounce") + 1] || "invalid-wait"
          , u = vn(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
        o = Kr(o, u)
    }
    if (n.includes("throttle")) {
        let l = n[n.indexOf("throttle") + 1] || "invalid-wait"
          , u = vn(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
        o = Hr(o, u)
    }
    return n.includes("once") && (o = c(o, (l,u)=>{
        l(u),
        i.removeEventListener(t, o, s)
    }
    )),
    i.addEventListener(t, o, s),
    ()=>{
        i.removeEventListener(t, o, s)
    }
}
function es(e) {
    return e.replace(/-/g, ".")
}
function ts(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t,n)=>n.toUpperCase())
}
function vn(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function ns(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
}
function rs(e) {
    return ["keydown", "keyup"].includes(e)
}
function is(e, t) {
    let n = t.filter(o=>!["window", "document", "prevent", "stop", "once"].includes(o));
    if (n.includes("debounce")) {
        let o = n.indexOf("debounce");
        n.splice(o, vn((n[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (n.length === 0 || n.length === 1 && nr(e.key).includes(n[0]))
        return !1;
    const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(o=>n.includes(o));
    return n = n.filter(o=>!i.includes(o)),
    !(i.length > 0 && i.filter(s=>((s === "cmd" || s === "super") && (s = "meta"),
    e[`${s}Key`])).length === i.length && nr(e.key).includes(n[0]))
}
function nr(e) {
    if (!e)
        return [];
    e = ns(e);
    let t = {
        ctrl: "control",
        slash: "/",
        space: "-",
        spacebar: "-",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "="
    };
    return t[e] = e,
    Object.keys(t).map(n=>{
        if (t[n] === e)
            return n
    }
    ).filter(n=>n)
}
$("model", (e,{modifiers: t, expression: n},{effect: r, cleanup: i})=>{
    let o = H(e, n)
      , s = `${n} = rightSideOfExpression($event, ${n})`
      , c = H(e, s);
    var l = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
    let u = os(e, t, n)
      , h = Wr(e, l, t, b=>{
        c(()=>{}
        , {
            scope: {
                $event: b,
                rightSideOfExpression: u
            }
        })
    }
    );
    i(()=>h());
    let g = H(e, `${n} = __placeholder`);
    e._x_model = {
        get() {
            let b;
            return o(E=>b = E),
            b
        },
        set(b) {
            g(()=>{}
            , {
                scope: {
                    __placeholder: b
                }
            })
        }
    },
    e._x_forceModelUpdate = ()=>{
        o(b=>{
            b === void 0 && n.match(/\./) && (b = ""),
            window.fromModel = !0,
            z(()=>Gr(e, "value", b)),
            delete window.fromModel
        }
        )
    }
    ,
    r(()=>{
        t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate()
    }
    )
}
);
function os(e, t, n) {
    return e.type === "radio" && z(()=>{
        e.hasAttribute("name") || e.setAttribute("name", n)
    }
    ),
    (r,i)=>z(()=>{
        if (r instanceof CustomEvent && r.detail !== void 0)
            return r.detail || r.target.value;
        if (e.type === "checkbox")
            if (Array.isArray(i)) {
                let o = t.includes("number") ? rn(r.target.value) : r.target.value;
                return r.target.checked ? i.concat([o]) : i.filter(s=>!ss(s, o))
            } else
                return r.target.checked;
        else {
            if (e.tagName.toLowerCase() === "select" && e.multiple)
                return t.includes("number") ? Array.from(r.target.selectedOptions).map(o=>{
                    let s = o.value || o.text;
                    return rn(s)
                }
                ) : Array.from(r.target.selectedOptions).map(o=>o.value || o.text);
            {
                let o = r.target.value;
                return t.includes("number") ? rn(o) : t.includes("trim") ? o.trim() : o
            }
        }
    }
    )
}
function rn(e) {
    let t = e ? parseFloat(e) : null;
    return as(t) ? t : e
}
function ss(e, t) {
    return e == t
}
function as(e) {
    return !Array.isArray(e) && !isNaN(e)
}
$("cloak", e=>queueMicrotask(()=>z(()=>e.removeAttribute(Re("cloak")))));
Dr(()=>`[${Re("init")}]`);
$("init", jt((e,{expression: t})=>typeof t == "string" ? !!t.trim() && ie(e, t, {}) : ie(e, t, {})));
$("text", (e,{expression: t},{effect: n, evaluateLater: r})=>{
    let i = r(t);
    n(()=>{
        i(o=>{
            z(()=>{
                e.textContent = o
            }
            )
        }
        )
    }
    )
}
);
$("html", (e,{expression: t},{effect: n, evaluateLater: r})=>{
    let i = r(t);
    n(()=>{
        i(o=>{
            e.innerHTML = o
        }
        )
    }
    )
}
);
Dn(Cr(":", Ir(Re("bind:"))));
$("bind", (e,{value: t, modifiers: n, expression: r, original: i},{effect: o})=>{
    if (!t)
        return cs(e, r, i, o);
    if (t === "key")
        return ls(e, r);
    let s = H(e, r);
    o(()=>s(c=>{
        c === void 0 && r.match(/\./) && (c = ""),
        z(()=>Gr(e, t, c, n))
    }
    ))
}
);
function cs(e, t, n, r) {
    let i = H(e, t)
      , o = [];
    r(()=>{
        for (; o.length; )
            o.pop()();
        i(s=>{
            let c = Object.entries(s).map(([u,h])=>({
                name: u,
                value: h
            }))
              , l = yo(c);
            c = c.map(u=>l.find(h=>h.name === u.name) ? {
                name: `x-bind:${u.name}`,
                value: `"${u.value}"`
            } : u),
            $n(e, c, n).map(u=>{
                o.push(u.runCleanups),
                u()
            }
            )
        }
        )
    }
    )
}
function ls(e, t) {
    e._x_keyExpression = t
}
$r(()=>`[${Re("data")}]`);
$("data", jt((e,{expression: t},{cleanup: n})=>{
    t = t === "" ? "{}" : t;
    let r = {};
    dn(r, e);
    let i = {};
    Bo(i, r);
    let o = ie(e, t, {
        scope: i
    });
    o === void 0 && (o = {}),
    dn(o, e);
    let s = Ie(o);
    wr(s);
    let c = et(e, s);
    s.init && ie(e, s.init),
    n(()=>{
        c(),
        s.destroy && ie(e, s.destroy)
    }
    )
}
));
$("show", (e,{modifiers: t, expression: n},{effect: r})=>{
    let i = H(e, n), o = ()=>z(()=>{
        e.style.display = "none",
        e._x_isShown = !1
    }
    ), s = ()=>z(()=>{
        e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display"),
        e._x_isShown = !0
    }
    ), c = ()=>setTimeout(s), l = yn(g=>g ? s() : o(), g=>{
        typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, g, s, o) : g ? c() : o()
    }
    ), u, h = !0;
    r(()=>i(g=>{
        !h && g === u || (t.includes("immediate") && (g ? c() : o()),
        l(g),
        u = g,
        h = !1)
    }
    ))
}
);
$("for", (e,{expression: t},{effect: n, cleanup: r})=>{
    let i = fs(t)
      , o = H(e, i.items)
      , s = H(e, e._x_keyExpression || "index");
    e._x_prevKeys = [],
    e._x_lookup = {},
    n(()=>us(e, i, o, s)),
    r(()=>{
        Object.values(e._x_lookup).forEach(c=>c.remove()),
        delete e._x_prevKeys,
        delete e._x_lookup
    }
    )
}
);
function us(e, t, n, r) {
    let i = s=>typeof s == "object" && !Array.isArray(s)
      , o = e;
    n(s=>{
        ds(s) && s >= 0 && (s = Array.from(Array(s).keys(), w=>w + 1)),
        s === void 0 && (s = []);
        let c = e._x_lookup
          , l = e._x_prevKeys
          , u = []
          , h = [];
        if (i(s))
            s = Object.entries(s).map(([w,O])=>{
                let S = rr(t, O, w, s);
                r(M=>h.push(M), {
                    scope: {
                        index: w,
                        ...S
                    }
                }),
                u.push(S)
            }
            );
        else
            for (let w = 0; w < s.length; w++) {
                let O = rr(t, s[w], w, s);
                r(S=>h.push(S), {
                    scope: {
                        index: w,
                        ...O
                    }
                }),
                u.push(O)
            }
        let g = []
          , b = []
          , E = []
          , T = [];
        for (let w = 0; w < l.length; w++) {
            let O = l[w];
            h.indexOf(O) === -1 && E.push(O)
        }
        l = l.filter(w=>!E.includes(w));
        let D = "template";
        for (let w = 0; w < h.length; w++) {
            let O = h[w]
              , S = l.indexOf(O);
            if (S === -1)
                l.splice(w, 0, O),
                g.push([D, w]);
            else if (S !== w) {
                let M = l.splice(w, 1)[0]
                  , L = l.splice(S - 1, 1)[0];
                l.splice(w, 0, L),
                l.splice(S, 0, M),
                b.push([M, L])
            } else
                T.push(O);
            D = O
        }
        for (let w = 0; w < E.length; w++) {
            let O = E[w];
            c[O].remove(),
            c[O] = null,
            delete c[O]
        }
        for (let w = 0; w < b.length; w++) {
            let[O,S] = b[w]
              , M = c[O]
              , L = c[S]
              , q = document.createElement("div");
            z(()=>{
                L.after(q),
                M.after(L),
                L._x_currentIfEl && L.after(L._x_currentIfEl),
                q.before(M),
                M._x_currentIfEl && M.after(M._x_currentIfEl),
                q.remove()
            }
            ),
            Qn(L, u[h.indexOf(S)])
        }
        for (let w = 0; w < g.length; w++) {
            let[O,S] = g[w]
              , M = O === "template" ? o : c[O];
            M._x_currentIfEl && (M = M._x_currentIfEl);
            let L = u[S]
              , q = h[S]
              , I = document.importNode(o.content, !0).firstElementChild;
            et(I, Ie(L), o),
            z(()=>{
                M.after(I),
                de(I)
            }
            ),
            typeof q == "object" && Ot("x-for key cannot be an object, it must be a string or an integer", o),
            c[q] = I
        }
        for (let w = 0; w < T.length; w++)
            Qn(c[T[w]], u[h.indexOf(T[w])]);
        o._x_prevKeys = h
    }
    )
}
function fs(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
      , n = /^\s*\(|\)\s*$/g
      , r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
      , i = e.match(r);
    if (!i)
        return;
    let o = {};
    o.items = i[2].trim();
    let s = i[1].replace(n, "").trim()
      , c = s.match(t);
    return c ? (o.item = s.replace(t, "").trim(),
    o.index = c[1].trim(),
    c[2] && (o.collection = c[2].trim())) : o.item = s,
    o
}
function rr(e, t, n, r) {
    let i = {};
    return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map(s=>s.trim()).forEach((s,c)=>{
        i[s] = t[c]
    }
    ) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map(s=>s.trim()).forEach(s=>{
        i[s] = t[s]
    }
    ) : i[e.item] = t,
    e.index && (i[e.index] = n),
    e.collection && (i[e.collection] = r),
    i
}
function ds(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function Yr() {}
Yr.inline = (e,{expression: t},{cleanup: n})=>{
    let r = Pt(e);
    r._x_refs || (r._x_refs = {}),
    r._x_refs[t] = e,
    n(()=>delete r._x_refs[t])
}
;
$("ref", Yr);
$("if", (e,{expression: t},{effect: n, cleanup: r})=>{
    let i = H(e, t)
      , o = ()=>{
        if (e._x_currentIfEl)
            return e._x_currentIfEl;
        let c = e.content.cloneNode(!0).firstElementChild;
        return et(c, {}, e),
        z(()=>{
            e.after(c),
            de(c)
        }
        ),
        e._x_currentIfEl = c,
        e._x_undoIf = ()=>{
            c.remove(),
            delete e._x_currentIfEl
        }
        ,
        c
    }
      , s = ()=>{
        !e._x_undoIf || (e._x_undoIf(),
        delete e._x_undoIf)
    }
    ;
    n(()=>i(c=>{
        c ? o() : s()
    }
    )),
    r(()=>e._x_undoIf && e._x_undoIf())
}
);
$("id", (e,{expression: t},{evaluate: n})=>{
    n(t).forEach(i=>qo(e, i))
}
);
Dn(Cr("@", Ir(Re("on:"))));
$("on", jt((e,{value: t, modifiers: n, expression: r},{cleanup: i})=>{
    let o = r ? H(e, r) : ()=>{}
    ;
    e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []),
    e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let s = Wr(e, t, n, c=>{
        o(()=>{}
        , {
            scope: {
                $event: c
            },
            params: [c]
        })
    }
    );
    i(()=>s())
}
));
Pe.setEvaluator(Or);
Pe.setReactivityEngine({
    reactive: _t.reactive,
    effect: _t.effect,
    release: _t.stop,
    raw: _t.toRaw
});
var hs = Pe
  , W = hs;
function ps(e) {
    e.directive("intersect", (t,{value: n, expression: r, modifiers: i},{evaluateLater: o, cleanup: s})=>{
        let c = o(r)
          , l = {
            rootMargin: ys(i),
            threshold: gs(i)
        }
          , u = new IntersectionObserver(h=>{
            h.forEach(g=>{
                g.isIntersecting !== (n === "leave") && (c(),
                i.includes("once") && u.disconnect())
            }
            )
        }
        ,l);
        u.observe(t),
        s(()=>{
            u.disconnect()
        }
        )
    }
    )
}
function gs(e) {
    if (e.includes("full"))
        return .99;
    if (e.includes("half"))
        return .5;
    if (!e.includes("threshold"))
        return 0;
    let t = e[e.indexOf("threshold") + 1];
    return t === "100" ? 1 : t === "0" ? 0 : Number(`.${t}`)
}
function ms(e) {
    let t = e.match(/^(-?[0-9]+)(px|%)?$/);
    return t ? t[1] + (t[2] || "px") : void 0
}
function ys(e) {
    const t = "margin"
      , n = "0px 0px 0px 0px"
      , r = e.indexOf(t);
    if (r === -1)
        return n;
    let i = [];
    for (let o = 1; o < 5; o++)
        i.push(ms(e[r + o] || ""));
    return i = i.filter(o=>o !== void 0),
    i.length ? i.join(" ").trim() : n
}
var _s = ps;
function bs(e) {
    e.directive("collapse", t),
    t.inline = (n,{modifiers: r})=>{
        !r.includes("min") || (n._x_doShow = ()=>{}
        ,
        n._x_doHide = ()=>{}
        )
    }
    ;
    function t(n, {modifiers: r}) {
        let i = ir(r, "duration", 250) / 1e3
          , o = ir(r, "min", 0)
          , s = !r.includes("min");
        n._x_isShown || (n.style.height = `${o}px`),
        !n._x_isShown && s && (n.hidden = !0),
        n._x_isShown || (n.style.overflow = "hidden");
        let c = (u,h)=>{
            let g = e.setStyles(u, h);
            return h.height ? ()=>{}
            : g
        }
          , l = {
            transitionProperty: "height",
            transitionDuration: `${i}s`,
            transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
        };
        n._x_transition = {
            in(u=()=>{}
            , h=()=>{}
            ) {
                s && (n.hidden = !1),
                s && (n.style.display = null);
                let g = n.getBoundingClientRect().height;
                n.style.height = "auto";
                let b = n.getBoundingClientRect().height;
                g === b && (g = o),
                e.transition(n, e.setStyles, {
                    during: l,
                    start: {
                        height: g + "px"
                    },
                    end: {
                        height: b + "px"
                    }
                }, ()=>n._x_isShown = !0, ()=>{
                    n.style.height == `${b}px` && (n.style.overflow = null)
                }
                )
            },
            out(u=()=>{}
            , h=()=>{}
            ) {
                let g = n.getBoundingClientRect().height;
                e.transition(n, c, {
                    during: l,
                    start: {
                        height: g + "px"
                    },
                    end: {
                        height: o + "px"
                    }
                }, ()=>n.style.overflow = "hidden", ()=>{
                    n._x_isShown = !1,
                    n.style.height == `${o}px` && s && (n.style.display = "none",
                    n.hidden = !0)
                }
                )
            }
        }
    }
}
function ir(e, t, n) {
    if (e.indexOf(t) === -1)
        return n;
    const r = e[e.indexOf(t) + 1];
    if (!r)
        return n;
    if (t === "duration") {
        let i = r.match(/([0-9]+)ms/);
        if (i)
            return i[1]
    }
    if (t === "min") {
        let i = r.match(/([0-9]+)px/);
        if (i)
            return i[1]
    }
    return r
}
var vs = bs;
function ws(e) {
    let t = ()=>{
        let n, r = localStorage;
        return e.interceptor((i,o,s,c,l)=>{
            let u = n || `_x_${c}`
              , h = Ss(u, r) ? xs(u, r) : i;
            return s(h),
            e.effect(()=>{
                let g = o();
                Es(u, g, r),
                s(g)
            }
            ),
            h
        }
        , i=>{
            i.as = o=>(n = o,
            i),
            i.using = o=>(r = o,
            i)
        }
        )
    }
    ;
    Object.defineProperty(e, "$persist", {
        get: ()=>t()
    }),
    e.magic("persist", t)
}
function Ss(e, t) {
    return t.getItem(e) !== null
}
function xs(e, t) {
    return JSON.parse(t.getItem(e, t))
}
function Es(e, t, n) {
    n.setItem(e, JSON.stringify(t))
}
var Os = ws;
const Jr = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
})
  , At = Object.freeze({
    rotate: 0,
    vFlip: !1,
    hFlip: !1
})
  , nt = Object.freeze({
    ...Jr,
    ...At
})
  , wn = Object.freeze({
    ...nt,
    body: "",
    hidden: !1
});
function As(e, t) {
    const n = {};
    !e.hFlip != !t.hFlip && (n.hFlip = !0),
    !e.vFlip != !t.vFlip && (n.vFlip = !0);
    const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (n.rotate = r),
    n
}
function or(e, t) {
    const n = As(e, t);
    for (const r in wn)
        r in At ? r in e && !(r in n) && (n[r] = At[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
    return n
}
function Ts(e, t) {
    const n = e.icons
      , r = e.aliases || Object.create(null)
      , i = Object.create(null);
    function o(s) {
        if (n[s])
            return i[s] = [];
        if (!(s in i)) {
            i[s] = null;
            const c = r[s] && r[s].parent
              , l = c && o(c);
            l && (i[s] = [c].concat(l))
        }
        return i[s]
    }
    return (t || Object.keys(n).concat(Object.keys(r))).forEach(o),
    i
}
function Cs(e, t, n) {
    const r = e.icons
      , i = e.aliases || Object.create(null);
    let o = {};
    function s(c) {
        o = or(r[c] || i[c], o)
    }
    return s(t),
    n.forEach(s),
    or(e, o)
}
function Qr(e, t) {
    const n = [];
    if (typeof e != "object" || typeof e.icons != "object")
        return n;
    e.not_found instanceof Array && e.not_found.forEach(i=>{
        t(i, null),
        n.push(i)
    }
    );
    const r = Ts(e);
    for (const i in r) {
        const o = r[i];
        o && (t(i, Cs(e, i, o)),
        n.push(i))
    }
    return n
}
const Ye = /^[a-z0-9]+(-[a-z0-9]+)*$/
  , ke = (e,t,n,r="")=>{
    const i = e.split(":");
    if (e.slice(0, 1) === "@") {
        if (i.length < 2 || i.length > 3)
            return null;
        r = i.shift().slice(1)
    }
    if (i.length > 3 || !i.length)
        return null;
    if (i.length > 1) {
        const c = i.pop()
          , l = i.pop()
          , u = {
            provider: i.length > 0 ? i[0] : r,
            prefix: l,
            name: c
        };
        return t && !wt(u) ? null : u
    }
    const o = i[0]
      , s = o.split("-");
    if (s.length > 1) {
        const c = {
            provider: r,
            prefix: s.shift(),
            name: s.join("-")
        };
        return t && !wt(c) ? null : c
    }
    if (n && r === "") {
        const c = {
            provider: r,
            prefix: "",
            name: o
        };
        return t && !wt(c, n) ? null : c
    }
    return null
}
  , wt = (e,t)=>e ? !!((e.provider === "" || e.provider.match(Ye)) && (t && e.prefix === "" || e.prefix.match(Ye)) && e.name.match(Ye)) : !1
  , Is = {
    provider: "",
    aliases: {},
    not_found: {},
    ...Jr
};
function on(e, t) {
    for (const n in t)
        if (n in e && typeof e[n] != typeof t[n])
            return !1;
    return !0
}
function Zr(e) {
    if (typeof e != "object" || e === null)
        return null;
    const t = e;
    if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !on(e, Is))
        return null;
    const n = t.icons;
    for (const i in n) {
        const o = n[i];
        if (!i.match(Ye) || typeof o.body != "string" || !on(o, wn))
            return null
    }
    const r = t.aliases || Object.create(null);
    for (const i in r) {
        const o = r[i]
          , s = o.parent;
        if (!i.match(Ye) || typeof s != "string" || !n[s] && !r[s] || !on(o, wn))
            return null
    }
    return t
}
const Tt = Object.create(null);
function Ms(e, t) {
    return {
        provider: e,
        prefix: t,
        icons: Object.create(null),
        missing: new Set
    }
}
function Z(e, t) {
    const n = Tt[e] || (Tt[e] = Object.create(null));
    return n[t] || (n[t] = Ms(e, t))
}
function qn(e, t) {
    return Zr(t) ? Qr(t, (n,r)=>{
        r ? e.icons[n] = r : e.missing.add(n)
    }
    ) : []
}
function Rs(e, t, n) {
    try {
        if (typeof n.body == "string")
            return e.icons[t] = {
                ...n
            },
            !0
    } catch {}
    return !1
}
function Ps(e, t) {
    let n = [];
    return (typeof e == "string" ? [e] : Object.keys(Tt)).forEach(i=>{
        (typeof i == "string" && typeof t == "string" ? [t] : Object.keys(Tt[i] || {})).forEach(s=>{
            const c = Z(i, s);
            n = n.concat(Object.keys(c.icons).map(l=>(i !== "" ? "@" + i + ":" : "") + s + ":" + l))
        }
        )
    }
    ),
    n
}
let Ze = !1;
function ks(e) {
    return typeof e == "boolean" && (Ze = e),
    Ze
}
function rt(e) {
    const t = typeof e == "string" ? ke(e, !0, Ze) : e;
    if (t) {
        const n = Z(t.provider, t.prefix)
          , r = t.name;
        return n.icons[r] || (n.missing.has(r) ? null : void 0)
    }
}
function Xr(e, t) {
    const n = ke(e, !0, Ze);
    if (!n)
        return !1;
    const r = Z(n.provider, n.prefix);
    return Rs(r, n.name, t)
}
function ei(e, t) {
    if (typeof e != "object")
        return !1;
    if (typeof t != "string" && (t = e.provider || ""),
    Ze && !t && !e.prefix) {
        let i = !1;
        return Zr(e) && (e.prefix = "",
        Qr(e, (o,s)=>{
            s && Xr(o, s) && (i = !0)
        }
        )),
        i
    }
    const n = e.prefix;
    if (!wt({
        provider: t,
        prefix: n,
        name: "a"
    }))
        return !1;
    const r = Z(t, n);
    return !!qn(r, e)
}
function js(e) {
    return !!rt(e)
}
function Ns(e) {
    const t = rt(e);
    return t ? {
        ...nt,
        ...t
    } : null
}
const ti = Object.freeze({
    width: null,
    height: null
})
  , ni = Object.freeze({
    ...ti,
    ...At
})
  , Ls = /(-?[0-9.]*[0-9]+[0-9.]*)/g
  , Fs = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Sn(e, t, n) {
    if (t === 1)
        return e;
    if (n = n || 100,
    typeof e == "number")
        return Math.ceil(e * t * n) / n;
    if (typeof e != "string")
        return e;
    const r = e.split(Ls);
    if (r === null || !r.length)
        return e;
    const i = [];
    let o = r.shift()
      , s = Fs.test(o);
    for (; ; ) {
        if (s) {
            const c = parseFloat(o);
            isNaN(c) ? i.push(o) : i.push(Math.ceil(c * t * n) / n)
        } else
            i.push(o);
        if (o = r.shift(),
        o === void 0)
            return i.join("");
        s = !s
    }
}
function Nt(e, t) {
    const n = {
        ...nt,
        ...e
    }
      , r = {
        ...ni,
        ...t
    }
      , i = {
        left: n.left,
        top: n.top,
        width: n.width,
        height: n.height
    };
    let o = n.body;
    [n, r].forEach(E=>{
        const T = []
          , D = E.hFlip
          , w = E.vFlip;
        let O = E.rotate;
        D ? w ? O += 2 : (T.push("translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"),
        T.push("scale(-1 1)"),
        i.top = i.left = 0) : w && (T.push("translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"),
        T.push("scale(1 -1)"),
        i.top = i.left = 0);
        let S;
        switch (O < 0 && (O -= Math.floor(O / 4) * 4),
        O = O % 4,
        O) {
        case 1:
            S = i.height / 2 + i.top,
            T.unshift("rotate(90 " + S.toString() + " " + S.toString() + ")");
            break;
        case 2:
            T.unshift("rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")");
            break;
        case 3:
            S = i.width / 2 + i.left,
            T.unshift("rotate(-90 " + S.toString() + " " + S.toString() + ")");
            break
        }
        O % 2 === 1 && (i.left !== i.top && (S = i.left,
        i.left = i.top,
        i.top = S),
        i.width !== i.height && (S = i.width,
        i.width = i.height,
        i.height = S)),
        T.length && (o = '<g transform="' + T.join(" ") + '">' + o + "</g>")
    }
    );
    const s = r.width
      , c = r.height
      , l = i.width
      , u = i.height;
    let h, g;
    return s === null ? (g = c === null ? "1em" : c === "auto" ? u : c,
    h = Sn(g, l / u)) : (h = s === "auto" ? l : s,
    g = c === null ? Sn(h, u / l) : c === "auto" ? u : c),
    {
        attributes: {
            width: h.toString(),
            height: g.toString(),
            viewBox: i.left.toString() + " " + i.top.toString() + " " + l.toString() + " " + u.toString()
        },
        body: o
    }
}
const $s = /\sid="(\S+)"/g
  , Ds = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Bs = 0;
function ri(e, t=Ds) {
    const n = [];
    let r;
    for (; r = $s.exec(e); )
        n.push(r[1]);
    return n.length && n.forEach(i=>{
        const o = typeof t == "function" ? t(i) : t + (Bs++).toString()
          , s = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])',"g"), "$1" + o + "$3")
    }
    ),
    e
}
const fe = {
    local: !0,
    session: !0
}
  , ii = {
    local: new Set,
    session: new Set
};
let Vn = !1;
function zs(e) {
    Vn = e
}
const sr = "iconify2"
  , Xe = "iconify"
  , oi = Xe + "-count"
  , ar = Xe + "-version"
  , si = 36e5
  , Ks = 168;
function xn(e, t) {
    try {
        return e.getItem(t)
    } catch {}
}
function Un(e, t, n) {
    try {
        return e.setItem(t, n),
        !0
    } catch {}
}
function cr(e, t) {
    try {
        e.removeItem(t)
    } catch {}
}
function En(e, t) {
    return Un(e, oi, t.toString())
}
function On(e) {
    return parseInt(xn(e, oi)) || 0
}
let bt = typeof window > "u" ? {} : window;
function ai(e) {
    const t = e + "Storage";
    try {
        if (bt && bt[t] && typeof bt[t].length == "number")
            return bt[t]
    } catch {}
    fe[e] = !1
}
function ci(e, t) {
    const n = ai(e);
    if (!n)
        return;
    const r = xn(n, ar);
    if (r !== sr) {
        if (r) {
            const c = On(n);
            for (let l = 0; l < c; l++)
                cr(n, Xe + l.toString())
        }
        Un(n, ar, sr),
        En(n, 0);
        return
    }
    const i = Math.floor(Date.now() / si) - Ks
      , o = c=>{
        const l = Xe + c.toString()
          , u = xn(n, l);
        if (typeof u == "string") {
            try {
                const h = JSON.parse(u);
                if (typeof h == "object" && typeof h.cached == "number" && h.cached > i && typeof h.provider == "string" && typeof h.data == "object" && typeof h.data.prefix == "string" && t(h, c))
                    return !0
            } catch {}
            cr(n, l)
        }
    }
    ;
    let s = On(n);
    for (let c = s - 1; c >= 0; c--)
        o(c) || (c === s - 1 ? (s--,
        En(n, s)) : ii[e].add(c))
}
function li() {
    if (!Vn) {
        zs(!0);
        for (const e in fe)
            ci(e, t=>{
                const n = t.data
                  , r = t.provider
                  , i = n.prefix
                  , o = Z(r, i);
                if (!qn(o, n).length)
                    return !1;
                const s = n.lastModified || -1;
                return o.lastModifiedCached = o.lastModifiedCached ? Math.min(o.lastModifiedCached, s) : s,
                !0
            }
            )
    }
}
function ui(e, t) {
    switch (e) {
    case "local":
    case "session":
        fe[e] = t;
        break;
    case "all":
        for (const n in fe)
            fe[n] = t;
        break
    }
}
const An = Object.create(null);
function fi(e, t) {
    An[e] = t
}
function Tn(e) {
    return An[e] || An[""]
}
function Gn(e) {
    let t;
    if (typeof e.resources == "string")
        t = [e.resources];
    else if (t = e.resources,
    !(t instanceof Array) || !t.length)
        return null;
    return {
        resources: t,
        path: e.path || "/",
        maxURL: e.maxURL || 500,
        rotate: e.rotate || 750,
        timeout: e.timeout || 5e3,
        random: e.random === !0,
        index: e.index || 0,
        dataAfterTimeout: e.dataAfterTimeout !== !1
    }
}
const Lt = Object.create(null)
  , qe = ["https://api.simplesvg.com", "https://api.unisvg.com"]
  , St = [];
for (; qe.length > 0; )
    qe.length === 1 || Math.random() > .5 ? St.push(qe.shift()) : St.push(qe.pop());
Lt[""] = Gn({
    resources: ["https://api.iconify.design"].concat(St)
});
function di(e, t) {
    const n = Gn(t);
    return n === null ? !1 : (Lt[e] = n,
    !0)
}
function Ft(e) {
    return Lt[e]
}
function Hs() {
    return Object.keys(Lt)
}
const qs = ()=>{
    let e;
    try {
        if (e = fetch,
        typeof e == "function")
            return e
    } catch {}
}
;
let Ct = qs();
function Vs(e) {
    Ct = e
}
function Us() {
    return Ct
}
function Gs(e, t) {
    const n = Ft(e);
    if (!n)
        return 0;
    let r;
    if (!n.maxURL)
        r = 0;
    else {
        let i = 0;
        n.resources.forEach(s=>{
            i = Math.max(i, s.length)
        }
        );
        const o = t + ".json?icons=";
        r = n.maxURL - i - n.path.length - o.length
    }
    return r
}
function Ws(e) {
    return e === 404
}
const Ys = (e,t,n)=>{
    const r = []
      , i = Gs(e, t)
      , o = "icons";
    let s = {
        type: o,
        provider: e,
        prefix: t,
        icons: []
    }
      , c = 0;
    return n.forEach((l,u)=>{
        c += l.length + 1,
        c >= i && u > 0 && (r.push(s),
        s = {
            type: o,
            provider: e,
            prefix: t,
            icons: []
        },
        c = l.length),
        s.icons.push(l)
    }
    ),
    r.push(s),
    r
}
;
function Js(e) {
    if (typeof e == "string") {
        const t = Ft(e);
        if (t)
            return t.path
    }
    return "/"
}
const Qs = (e,t,n)=>{
    if (!Ct) {
        n("abort", 424);
        return
    }
    let r = Js(t.provider);
    switch (t.type) {
    case "icons":
        {
            const o = t.prefix
              , c = t.icons.join(",")
              , l = new URLSearchParams({
                icons: c
            });
            r += o + ".json?" + l.toString();
            break
        }
    case "custom":
        {
            const o = t.uri;
            r += o.slice(0, 1) === "/" ? o.slice(1) : o;
            break
        }
    default:
        n("abort", 400);
        return
    }
    let i = 503;
    Ct(e + r).then(o=>{
        const s = o.status;
        if (s !== 200) {
            setTimeout(()=>{
                n(Ws(s) ? "abort" : "next", s)
            }
            );
            return
        }
        return i = 501,
        o.json()
    }
    ).then(o=>{
        if (typeof o != "object" || o === null) {
            setTimeout(()=>{
                o === 404 ? n("abort", o) : n("next", i)
            }
            );
            return
        }
        setTimeout(()=>{
            n("success", o)
        }
        )
    }
    ).catch(()=>{
        n("next", i)
    }
    )
}
  , Zs = {
    prepare: Ys,
    send: Qs
};
function Xs(e) {
    const t = {
        loaded: [],
        missing: [],
        pending: []
    }
      , n = Object.create(null);
    e.sort((i,o)=>i.provider !== o.provider ? i.provider.localeCompare(o.provider) : i.prefix !== o.prefix ? i.prefix.localeCompare(o.prefix) : i.name.localeCompare(o.name));
    let r = {
        provider: "",
        prefix: "",
        name: ""
    };
    return e.forEach(i=>{
        if (r.name === i.name && r.prefix === i.prefix && r.provider === i.provider)
            return;
        r = i;
        const o = i.provider
          , s = i.prefix
          , c = i.name
          , l = n[o] || (n[o] = Object.create(null))
          , u = l[s] || (l[s] = Z(o, s));
        let h;
        c in u.icons ? h = t.loaded : s === "" || u.missing.has(c) ? h = t.missing : h = t.pending;
        const g = {
            provider: o,
            prefix: s,
            name: c
        };
        h.push(g)
    }
    ),
    t
}
function hi(e, t) {
    e.forEach(n=>{
        const r = n.loaderCallbacks;
        r && (n.loaderCallbacks = r.filter(i=>i.id !== t))
    }
    )
}
function ea(e) {
    e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0,
    setTimeout(()=>{
        e.pendingCallbacksFlag = !1;
        const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
        if (!t.length)
            return;
        let n = !1;
        const r = e.provider
          , i = e.prefix;
        t.forEach(o=>{
            const s = o.icons
              , c = s.pending.length;
            s.pending = s.pending.filter(l=>{
                if (l.prefix !== i)
                    return !0;
                const u = l.name;
                if (e.icons[u])
                    s.loaded.push({
                        provider: r,
                        prefix: i,
                        name: u
                    });
                else if (e.missing.has(u))
                    s.missing.push({
                        provider: r,
                        prefix: i,
                        name: u
                    });
                else
                    return n = !0,
                    !0;
                return !1
            }
            ),
            s.pending.length !== c && (n || hi([e], o.id),
            o.callback(s.loaded.slice(0), s.missing.slice(0), s.pending.slice(0), o.abort))
        }
        )
    }
    ))
}
let ta = 0;
function na(e, t, n) {
    const r = ta++
      , i = hi.bind(null, n, r);
    if (!t.pending.length)
        return i;
    const o = {
        id: r,
        icons: t,
        callback: e,
        abort: i
    };
    return n.forEach(s=>{
        (s.loaderCallbacks || (s.loaderCallbacks = [])).push(o)
    }
    ),
    i
}
function ra(e, t=!0, n=!1) {
    const r = [];
    return e.forEach(i=>{
        const o = typeof i == "string" ? ke(i, t, n) : i;
        o && r.push(o)
    }
    ),
    r
}
var ia = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};
function oa(e, t, n, r) {
    const i = e.resources.length
      , o = e.random ? Math.floor(Math.random() * i) : e.index;
    let s;
    if (e.random) {
        let I = e.resources.slice(0);
        for (s = []; I.length > 1; ) {
            const K = Math.floor(Math.random() * I.length);
            s.push(I[K]),
            I = I.slice(0, K).concat(I.slice(K + 1))
        }
        s = s.concat(I)
    } else
        s = e.resources.slice(o).concat(e.resources.slice(0, o));
    const c = Date.now();
    let l = "pending", u = 0, h, g = null, b = [], E = [];
    typeof r == "function" && E.push(r);
    function T() {
        g && (clearTimeout(g),
        g = null)
    }
    function D() {
        l === "pending" && (l = "aborted"),
        T(),
        b.forEach(I=>{
            I.status === "pending" && (I.status = "aborted")
        }
        ),
        b = []
    }
    function w(I, K) {
        K && (E = []),
        typeof I == "function" && E.push(I)
    }
    function O() {
        return {
            startTime: c,
            payload: t,
            status: l,
            queriesSent: u,
            queriesPending: b.length,
            subscribe: w,
            abort: D
        }
    }
    function S() {
        l = "failed",
        E.forEach(I=>{
            I(void 0, h)
        }
        )
    }
    function M() {
        b.forEach(I=>{
            I.status === "pending" && (I.status = "aborted")
        }
        ),
        b = []
    }
    function L(I, K, ee) {
        const te = K !== "success";
        switch (b = b.filter(V=>V !== I),
        l) {
        case "pending":
            break;
        case "failed":
            if (te || !e.dataAfterTimeout)
                return;
            break;
        default:
            return
        }
        if (K === "abort") {
            h = ee,
            S();
            return
        }
        if (te) {
            h = ee,
            b.length || (s.length ? q() : S());
            return
        }
        if (T(),
        M(),
        !e.random) {
            const V = e.resources.indexOf(I.resource);
            V !== -1 && V !== e.index && (e.index = V)
        }
        l = "completed",
        E.forEach(V=>{
            V(ee)
        }
        )
    }
    function q() {
        if (l !== "pending")
            return;
        T();
        const I = s.shift();
        if (I === void 0) {
            if (b.length) {
                g = setTimeout(()=>{
                    T(),
                    l === "pending" && (M(),
                    S())
                }
                , e.timeout);
                return
            }
            S();
            return
        }
        const K = {
            status: "pending",
            resource: I,
            callback: (ee,te)=>{
                L(K, ee, te)
            }
        };
        b.push(K),
        u++,
        g = setTimeout(q, e.rotate),
        n(I, t, K.callback)
    }
    return setTimeout(q),
    O
}
function pi(e) {
    const t = {
        ...ia,
        ...e
    };
    let n = [];
    function r() {
        n = n.filter(c=>c().status === "pending")
    }
    function i(c, l, u) {
        const h = oa(t, c, l, (g,b)=>{
            r(),
            u && u(g, b)
        }
        );
        return n.push(h),
        h
    }
    function o(c) {
        return n.find(l=>c(l)) || null
    }
    return {
        query: i,
        find: o,
        setIndex: c=>{
            t.index = c
        }
        ,
        getIndex: ()=>t.index,
        cleanup: r
    }
}
function lr() {}
const sn = Object.create(null);
function sa(e) {
    if (!sn[e]) {
        const t = Ft(e);
        if (!t)
            return;
        const n = pi(t)
          , r = {
            config: t,
            redundancy: n
        };
        sn[e] = r
    }
    return sn[e]
}
function gi(e, t, n) {
    let r, i;
    if (typeof e == "string") {
        const o = Tn(e);
        if (!o)
            return n(void 0, 424),
            lr;
        i = o.send;
        const s = sa(e);
        s && (r = s.redundancy)
    } else {
        const o = Gn(e);
        if (o) {
            r = pi(o);
            const s = e.resources ? e.resources[0] : ""
              , c = Tn(s);
            c && (i = c.send)
        }
    }
    return !r || !i ? (n(void 0, 424),
    lr) : r.query(t, i, n)().abort
}
function aa(e, t) {
    const n = e.lastModifiedCached;
    if (n && n >= t)
        return n === t;
    if (e.lastModifiedCached = t,
    n)
        for (const r in fe)
            ci(r, i=>{
                const o = i.data;
                return i.provider !== e.provider || o.prefix !== e.prefix || o.lastModified === t
            }
            );
    return !0
}
function ca(e, t) {
    Vn || li();
    function n(r) {
        let i;
        if (!fe[r] || !(i = ai(r)))
            return;
        const o = ii[r];
        let s;
        if (o.size)
            o.delete(s = Array.from(o).shift());
        else if (s = On(i),
        !En(i, s + 1))
            return;
        const c = {
            cached: Math.floor(Date.now() / si),
            provider: e.provider,
            data: t
        };
        return Un(i, Xe + s.toString(), JSON.stringify(c))
    }
    t.lastModified && !aa(e, t.lastModified) || !Object.keys(t.icons).length || (t.not_found && (t = Object.assign({}, t),
    delete t.not_found),
    n("local") || n("session"))
}
function ur() {}
function la(e) {
    e.iconsLoaderFlag || (e.iconsLoaderFlag = !0,
    setTimeout(()=>{
        e.iconsLoaderFlag = !1,
        ea(e)
    }
    ))
}
function ua(e, t) {
    e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t,
    e.iconsQueueFlag || (e.iconsQueueFlag = !0,
    setTimeout(()=>{
        e.iconsQueueFlag = !1;
        const {provider: n, prefix: r} = e
          , i = e.iconsToLoad;
        delete e.iconsToLoad;
        let o;
        if (!i || !(o = Tn(n)))
            return;
        o.prepare(n, r, i).forEach(c=>{
            gi(n, c, l=>{
                if (typeof l != "object")
                    c.icons.forEach(u=>{
                        e.missing.add(u)
                    }
                    );
                else
                    try {
                        const u = qn(e, l);
                        if (!u.length)
                            return;
                        const h = e.pendingIcons;
                        h && u.forEach(g=>{
                            h.delete(g)
                        }
                        ),
                        ca(e, l)
                    } catch (u) {
                        console.error(u)
                    }
                la(e)
            }
            )
        }
        )
    }
    ))
}
const fa = e=>{
    const n = Z(e.provider, e.prefix).pendingIcons;
    return !!(n && n.has(e.name))
}
  , Wn = (e,t)=>{
    const n = ra(e, !0, ks())
      , r = Xs(n);
    if (!r.pending.length) {
        let l = !0;
        return t && setTimeout(()=>{
            l && t(r.loaded, r.missing, r.pending, ur)
        }
        ),
        ()=>{
            l = !1
        }
    }
    const i = Object.create(null)
      , o = [];
    let s, c;
    return r.pending.forEach(l=>{
        const {provider: u, prefix: h} = l;
        if (h === c && u === s)
            return;
        s = u,
        c = h,
        o.push(Z(u, h));
        const g = i[u] || (i[u] = Object.create(null));
        g[h] || (g[h] = [])
    }
    ),
    r.pending.forEach(l=>{
        const {provider: u, prefix: h, name: g} = l
          , b = Z(u, h)
          , E = b.pendingIcons || (b.pendingIcons = new Set);
        E.has(g) || (E.add(g),
        i[u][h].push(g))
    }
    ),
    o.forEach(l=>{
        const {provider: u, prefix: h} = l;
        i[u][h].length && ua(l, i[u][h])
    }
    ),
    t ? na(t, r, o) : ur
}
  , da = e=>new Promise((t,n)=>{
    const r = typeof e == "string" ? ke(e, !0) : e;
    if (!r) {
        n(e);
        return
    }
    Wn([r || e], i=>{
        if (i.length && r) {
            const o = rt(r);
            if (o) {
                t({
                    ...nt,
                    ...o
                });
                return
            }
        }
        n(e)
    }
    )
}
);
function mi(e, t) {
    const n = {
        ...e
    };
    for (const r in t) {
        const i = t[r]
          , o = typeof i;
        r in ti ? (i === null || i && (o === "string" || o === "number")) && (n[r] = i) : o === typeof n[r] && (n[r] = r === "rotate" ? i % 4 : i)
    }
    return n
}
const $t = {
    ...ni,
    inline: !1
}
  , an = "iconify"
  , Cn = "iconify-inline"
  , oe = "iconifyData" + Date.now();
let he = [];
function it(e) {
    for (let t = 0; t < he.length; t++) {
        const n = he[t];
        if ((typeof n.node == "function" ? n.node() : n.node) === e)
            return n
    }
}
function yi(e, t=!1) {
    let n = it(e);
    return n ? (n.temporary && (n.temporary = t),
    n) : (n = {
        node: e,
        temporary: t
    },
    he.push(n),
    n)
}
function ha() {
    if (document.documentElement)
        return yi(document.documentElement);
    he.push({
        node: ()=>document.documentElement
    })
}
function pa(e) {
    he = he.filter(t=>e !== t && e !== (typeof t.node == "function" ? t.node() : t.node))
}
function ot() {
    return he
}
function ga(e) {
    const t = document;
    t.readyState && t.readyState !== "loading" ? e() : t.addEventListener("DOMContentLoaded", e)
}
let Je = null;
const ma = {
    childList: !0,
    subtree: !0,
    attributes: !0
};
function _i(e) {
    if (!e.observer)
        return;
    const t = e.observer;
    t.pendingScan || (t.pendingScan = setTimeout(()=>{
        delete t.pendingScan,
        Je && Je(e)
    }
    ))
}
function ya(e, t) {
    if (!e.observer)
        return;
    const n = e.observer;
    if (!n.pendingScan)
        for (let r = 0; r < t.length; r++) {
            const i = t[r];
            if (i.addedNodes && i.addedNodes.length > 0 || i.type === "attributes" && i.target[oe] !== void 0) {
                n.paused || _i(e);
                return
            }
        }
}
function bi(e, t) {
    e.observer.instance.observe(t, ma)
}
function It(e) {
    let t = e.observer;
    if (t && t.instance)
        return;
    const n = typeof e.node == "function" ? e.node() : e.node;
    !n || !window || (t || (t = {
        paused: 0
    },
    e.observer = t),
    t.instance = new window.MutationObserver(ya.bind(null, e)),
    bi(e, n),
    t.paused || _i(e))
}
function fr() {
    ot().forEach(It)
}
function vi(e) {
    if (!e.observer)
        return;
    const t = e.observer;
    t.pendingScan && (clearTimeout(t.pendingScan),
    delete t.pendingScan),
    t.instance && (t.instance.disconnect(),
    delete t.instance)
}
function _a(e) {
    const t = Je !== null;
    if (Je !== e && (Je = e,
    t && ot().forEach(vi)),
    t) {
        fr();
        return
    }
    ga(fr)
}
function In(e) {
    (e ? [e] : ot()).forEach(t=>{
        if (!t.observer) {
            t.observer = {
                paused: 1
            };
            return
        }
        const n = t.observer;
        if (n.paused++,
        n.paused > 1 || !n.instance)
            return;
        n.instance.disconnect()
    }
    )
}
function ba(e) {
    if (e) {
        const t = it(e);
        t && In(t)
    } else
        In()
}
function Mn(e) {
    (e ? [e] : ot()).forEach(t=>{
        if (!t.observer) {
            It(t);
            return
        }
        const n = t.observer;
        if (n.paused && (n.paused--,
        !n.paused)) {
            const r = typeof t.node == "function" ? t.node() : t.node;
            if (r)
                n.instance ? bi(t, r) : It(t);
            else
                return
        }
    }
    )
}
function va(e) {
    if (e) {
        const t = it(e);
        t && Mn(t)
    } else
        Mn()
}
function wi(e, t=!1) {
    const n = yi(e, t);
    return It(n),
    n
}
function Si(e) {
    const t = it(e);
    t && (vi(t),
    pa(e))
}
function wa(e, t) {
    if (e.name !== t.name || e.mode !== t.mode)
        return !0;
    const n = e.customisations
      , r = t.customisations;
    for (const i in $t)
        if (n[i] !== r[i])
            return !0;
    return !1
}
function Sa(e, t=0) {
    const n = e.replace(/^-?[0-9.]*/, "");
    function r(i) {
        for (; i < 0; )
            i += 4;
        return i % 4
    }
    if (n === "") {
        const i = parseInt(e);
        return isNaN(i) ? 0 : r(i)
    } else if (n !== e) {
        let i = 0;
        switch (n) {
        case "%":
            i = 25;
            break;
        case "deg":
            i = 90
        }
        if (i) {
            let o = parseFloat(e.slice(0, e.length - n.length));
            return isNaN(o) ? 0 : (o = o / i,
            o % 1 === 0 ? r(o) : 0)
        }
    }
    return t
}
const xa = /[\s,]+/;
function Ea(e, t) {
    t.split(xa).forEach(n=>{
        switch (n.trim()) {
        case "horizontal":
            e.hFlip = !0;
            break;
        case "vertical":
            e.vFlip = !0;
            break
        }
    }
    )
}
const Oa = ["width", "height"]
  , Aa = ["inline", "hFlip", "vFlip"];
function Ta(e, t) {
    return e === t || e === "true" ? !0 : e === "" || e === "false" ? !1 : null
}
function Ca(e) {
    const t = e.getAttribute("data-icon")
      , n = typeof t == "string" && ke(t, !0);
    if (!n)
        return null;
    const r = {
        ...$t,
        inline: e.classList && e.classList.contains(Cn)
    };
    Oa.forEach(c=>{
        const l = e.getAttribute("data-" + c);
        l && (r[c] = l)
    }
    );
    const i = e.getAttribute("data-rotate");
    typeof i == "string" && (r.rotate = Sa(i));
    const o = e.getAttribute("data-flip");
    typeof o == "string" && Ea(r, o),
    Aa.forEach(c=>{
        const l = "data-" + c
          , u = Ta(e.getAttribute(l), l);
        typeof u == "boolean" && (r[c] = u)
    }
    );
    const s = e.getAttribute("data-mode");
    return {
        name: t,
        icon: n,
        customisations: r,
        mode: s
    }
}
const Ia = "svg." + an + ", i." + an + ", span." + an + ", i." + Cn + ", span." + Cn;
function Ma(e) {
    const t = [];
    return e.querySelectorAll(Ia).forEach(n=>{
        const r = n[oe] || n.tagName.toLowerCase() !== "svg" ? Ca(n) : null;
        r && t.push({
            node: n,
            props: r
        })
    }
    ),
    t
}
function xi(e, t) {
    let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in t)
        n += " " + r + '="' + t[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
}
function Ei(e) {
    const t = new Set(["iconify"]);
    return ["provider", "prefix"].forEach(n=>{
        e[n] && t.add("iconify--" + e[n])
    }
    ),
    t
}
function Oi(e, t, n, r) {
    const i = e.classList;
    if (r) {
        const s = r.classList;
        Array.from(s).forEach(c=>{
            i.add(c)
        }
        )
    }
    const o = [];
    return t.forEach(s=>{
        i.contains(s) ? n.has(s) && o.push(s) : (i.add(s),
        o.push(s))
    }
    ),
    n.forEach(s=>{
        t.has(s) || i.remove(s)
    }
    ),
    o
}
function Ai(e, t, n) {
    const r = e.style;
    (n || []).forEach(o=>{
        r.removeProperty(o)
    }
    );
    const i = [];
    for (const o in t)
        r.getPropertyValue(o) || (i.push(o),
        r.setProperty(o, t[o]));
    return i
}
function Ti(e, t, n) {
    let r;
    try {
        r = document.createElement("span")
    } catch {
        return e
    }
    const i = t.customisations
      , o = Nt(n, i)
      , s = e[oe]
      , c = xi(ri(o.body), {
        "aria-hidden": "true",
        role: "img",
        ...o.attributes
    });
    r.innerHTML = c;
    const l = r.childNodes[0]
      , u = e.attributes;
    for (let T = 0; T < u.length; T++) {
        const D = u.item(T)
          , w = D.name;
        w !== "class" && !l.hasAttribute(w) && l.setAttribute(w, D.value)
    }
    const h = Ei(t.icon)
      , g = Oi(l, h, new Set(s && s.addedClasses), e)
      , b = Ai(l, i.inline ? {
        "vertical-align": "-0.125em"
    } : {}, s && s.addedStyles)
      , E = {
        ...t,
        status: "loaded",
        addedClasses: g,
        addedStyles: b
    };
    return l[oe] = E,
    e.parentNode && e.parentNode.replaceChild(l, e),
    l
}
function Ra(e) {
    return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}
function Pa(e) {
    return 'url("data:image/svg+xml,' + Ra(e) + '")'
}
const ka = {
    display: "inline-block"
}
  , Rn = {
    "background-color": "currentColor"
}
  , Ci = {
    "background-color": "transparent"
}
  , dr = {
    image: "var(--svg)",
    repeat: "no-repeat",
    size: "100% 100%"
}
  , hr = {
    "-webkit-mask": Rn,
    mask: Rn,
    background: Ci
};
for (const e in hr) {
    const t = hr[e];
    for (const n in dr)
        t[e + "-" + n] = dr[n]
}
function pr(e) {
    return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
}
function ja(e, t, n, r) {
    const i = t.customisations
      , o = Nt(n, i)
      , s = o.attributes
      , c = e[oe]
      , l = xi(o.body, {
        ...s,
        width: n.width + "",
        height: n.height + ""
    })
      , u = Ei(t.icon)
      , h = Oi(e, u, new Set(c && c.addedClasses))
      , b = {
        "--svg": Pa(l),
        width: pr(s.width),
        height: pr(s.height),
        ...ka,
        ...r ? Rn : Ci
    };
    i.inline && (b["vertical-align"] = "-0.125em");
    const E = Ai(e, b, c && c.addedStyles)
      , T = {
        ...t,
        status: "loaded",
        addedClasses: h,
        addedStyles: E
    };
    return e[oe] = T,
    e
}
let vt = !1;
function Na() {
    vt || (vt = !0,
    setTimeout(()=>{
        vt && (vt = !1,
        Ce())
    }
    ))
}
function Ce(e, t=!1) {
    const n = Object.create(null);
    function r(i, o) {
        const {provider: s, prefix: c, name: l} = i
          , u = Z(s, c)
          , h = u.icons[l];
        if (h)
            return {
                status: "loaded",
                icon: h
            };
        if (u.missing.has(l))
            return {
                status: "missing"
            };
        if (o && !fa(i)) {
            const g = n[s] || (n[s] = Object.create(null));
            (g[c] || (g[c] = new Set)).add(l)
        }
        return {
            status: "loading"
        }
    }
    (e ? [e] : ot()).forEach(i=>{
        const o = typeof i.node == "function" ? i.node() : i.node;
        if (!o || !o.querySelectorAll)
            return;
        let s = !1
          , c = !1;
        function l(u, h, g) {
            if (c || (c = !0,
            In(i)),
            u.tagName.toUpperCase() !== "SVG") {
                const b = h.mode
                  , E = b === "mask" || (b === "bg" ? !1 : b === "style" ? g.body.indexOf("currentColor") !== -1 : null);
                if (typeof E == "boolean") {
                    ja(u, h, {
                        ...nt,
                        ...g
                    }, E);
                    return
                }
            }
            Ti(u, h, g)
        }
        Ma(o).forEach(({node: u, props: h})=>{
            const g = u[oe];
            if (!g) {
                const {status: E, icon: T} = r(h.icon, !0);
                if (T) {
                    l(u, h, T);
                    return
                }
                s = s || E === "loading",
                u[oe] = {
                    ...h,
                    status: E
                };
                return
            }
            let b;
            if (wa(g, h)) {
                if (b = r(h.icon, g.name !== h.name),
                !b.icon) {
                    s = s || b.status === "loading",
                    Object.assign(g, {
                        ...h,
                        status: b.status
                    });
                    return
                }
            } else {
                if (g.status !== "loading")
                    return;
                if (b = r(h.icon, !1),
                !b.icon) {
                    g.status = b.status;
                    return
                }
            }
            l(u, h, b.icon)
        }
        ),
        i.temporary && !s ? Si(o) : t && s ? wi(o, !0) : c && i.observer && Mn(i)
    }
    );
    for (const i in n) {
        const o = n[i];
        for (const s in o) {
            const c = o[s];
            Wn(Array.from(c).map(l=>({
                provider: i,
                prefix: s,
                name: l
            })), Na)
        }
    }
}
function La(e) {
    const t = it(e);
    t ? Ce(t) : Ce({
        node: e,
        temporary: !0
    }, !0)
}
function Ii(e, t, n=!1) {
    const r = rt(e);
    if (!r)
        return null;
    const i = ke(e)
      , o = mi($t, t || {})
      , s = Ti(document.createElement("span"), {
        name: e,
        icon: i,
        customisations: o
    }, r);
    return n ? s.outerHTML : s
}
function Fa() {
    return "3.0.1"
}
function $a(e, t) {
    return Ii(e, t, !1)
}
function Da(e, t) {
    return Ii(e, t, !0)
}
function Ba(e, t) {
    const n = rt(e);
    if (!n)
        return null;
    const r = mi($t, t || {});
    return Nt(n, r)
}
function za(e) {
    e ? La(e) : Ce()
}
if (typeof document < "u" && typeof window < "u") {
    ha();
    const e = window;
    if (e.IconifyPreload !== void 0) {
        const t = e.IconifyPreload
          , n = "Invalid IconifyPreload syntax.";
        typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach(r=>{
            try {
                (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !ei(r)) && console.error(n)
            } catch {
                console.error(n)
            }
        }
        )
    }
    setTimeout(()=>{
        _a(Ce),
        Ce()
    }
    )
}
function Ka(e, t) {
    ui(e, t !== !1)
}
function Ha(e) {
    ui(e, !0)
}
fi("", Zs);
if (typeof document < "u" && typeof window < "u") {
    li();
    const e = window;
    if (e.IconifyProviders !== void 0) {
        const t = e.IconifyProviders;
        if (typeof t == "object" && t !== null)
            for (const n in t) {
                const r = "IconifyProviders[" + n + "] is invalid.";
                try {
                    const i = t[n];
                    if (typeof i != "object" || !i || i.resources === void 0)
                        continue;
                    di(n, i) || console.error(r)
                } catch {
                    console.error(r)
                }
            }
    }
}
const qa = {
    getAPIConfig: Ft,
    setAPIModule: fi,
    sendAPIQuery: gi,
    setFetch: Vs,
    getFetch: Us,
    listAPIProviders: Hs
}
  , Va = {
    _api: qa,
    addAPIProvider: di,
    loadIcons: Wn,
    loadIcon: da,
    iconExists: js,
    getIcon: Ns,
    listIcons: Ps,
    addIcon: Xr,
    addCollection: ei,
    replaceIDs: ri,
    calculateSize: Sn,
    buildIcon: Nt,
    getVersion: Fa,
    renderSVG: $a,
    renderHTML: Da,
    renderIcon: Ba,
    scan: za,
    observe: wi,
    stopObserving: Si,
    pauseObserver: ba,
    resumeObserver: va,
    enableCache: Ka,
    disableCache: Ha
};
try {
    self.Iconify === void 0 && (self.Iconify = Va)
} catch {}
function Ua() {
    const e = document.querySelectorAll("[data-background]");
    if (typeof e < "u" && e != null)
        for (var t = 0, n = e.length; t < n; t++) {
            let r = e[t].getAttribute("data-background");
            e[t].style.backgroundSize = "cover",
            e[t].style.backgroundRepeat = "no-repeat",
            e[t].style.backgroundImage = `url(${r})`
        }
}
function Ga() {
    return {
        scrolled: !1,
        height: 60,
        mobileOpen: !1,
        scroll() {
            window.scrollY >= this.height ? this.scrolled = !0 : this.scrolled = !1,
            this.searchExpanded = !1
        },
        openMobileMenu() {
            this.mobileOpen = !this.mobileOpen
        },
        openSidebar() {
            this.$store.app.isSiderbarOpen = !0,
            console.log("clicked")
        }
    }
}
function Wa() {
    return {
        closeSidebar() {
            this.$store.app.isSiderbarOpen = !1
        },
        openedMenu: "",
        openSidebarMenu(e) {
            const t = e.target.getAttribute("data-menu");
            this.openedMenu === t ? this.openedMenu = "" : this.openedMenu = t
        }
    }
}
function Ya() {
    return {
        scrolled: !1,
        height: 600,
        scroll(e) {
            const t = document.getElementById("backtotop");
            window.scrollY >= this.height ? (this.scrolled = !0,
            t.classList.add("visible")) : (this.scrolled = !1,
            t.classList.remove("visible"))
        },
        goTop(e) {
            let t = e.target.offsetTop;
            window.scrollTo({
                top: t,
                behavior: "smooth"
            })
        }
    }
}
window.initNavbar = Ga;
window.initSidebar = Wa;
window.initBackToTop = Ya;
window.Alpine = W;
W.plugin(_s);
W.plugin(Os);
W.plugin(vs);
W.store("app", {
    init() {
        this.on = window.matchMedia("(prefers-color-scheme: dark)").matches
    },
    isDark: W.$persist(!1),
    isSidebarOpened: W.$persist(!1),
    isSidebarOpenedMobile: W.$persist(!1),
    activeSidebar: W.$persist("dashboard"),
    activeSidebarMenu: W.$persist(""),
    isPanelOpened: W.$persist(!1)
});
W.start();
document.onreadystatechange = function() {
    document.readyState == "complete" && Ua()
}
;
(function(e, t, n, r, i) {
    e[r] = e[r] || [],
    e[r].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js"
    });
    var o = t.getElementsByTagName(n)[0]
      , s = t.createElement(n)
      , c = r != "dataLayer" ? "&l=" + r : "";
    s.async = !0,
    s.src = "https://www.googletagmanager.com/gtm.js?id=" + i + c,
    o.parentNode.insertBefore(s, o)
}
)(window, document, "script", "dataLayer", "GTM-PV65Z24");

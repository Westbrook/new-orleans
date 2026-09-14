//#region ../design-system/node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, { is: l, defineProperty: u, getOwnPropertyDescriptor: d, getOwnPropertyNames: f, getOwnPropertySymbols: p, getPrototypeOf: m } = Object, ee = globalThis, te = ee.trustedTypes, ne = te ? te.emptyScript : "", re = ee.reactiveElementPolyfillSupport, h = (e, t) => e, ie = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ne : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, ae = (e, t) => !l(e, t), oe = {
	attribute: !0,
	type: String,
	converter: ie,
	reflect: !1,
	useDefault: !1,
	hasChanged: ae
};
Symbol.metadata ??= Symbol("metadata"), ee.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var g = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = oe) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && u(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = d(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? oe;
	}
	static _$Ei() {
		if (this.hasOwnProperty(h("elementProperties"))) return;
		let e = m(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(h("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(h("properties"))) {
			let e = this.properties, t = [...f(e), ...p(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return s(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? ie : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? ie : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? ae)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[h("elementProperties")] = /* @__PURE__ */ new Map(), g[h("finalized")] = /* @__PURE__ */ new Map(), re?.({ ReactiveElement: g }), (ee.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region ../design-system/node_modules/lit-html/lit-html.js
var se = globalThis, ce = (e) => e, le = se.trustedTypes, ue = le ? le.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, de = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, fe = "?" + _, pe = `<${fe}>`, v = document, y = () => v.createComment(""), b = (e) => e === null || typeof e != "object" && typeof e != "function", me = Array.isArray, he = (e) => me(e) || typeof e?.[Symbol.iterator] == "function", ge = "[ 	\n\f\r]", x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _e = /-->/g, ve = />/g, S = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), ye = /'/g, be = /"/g, xe = /^(?:script|style|textarea|title)$/i, Se = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), C = Se(1), w = Se(2), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), Ce = /* @__PURE__ */ new WeakMap(), D = v.createTreeWalker(v, 129);
function we(e, t) {
	if (!me(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return ue === void 0 ? t : ue.createHTML(t);
}
var Te = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = x;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === x ? c[1] === "!--" ? o = _e : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = S) : (xe.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = S) : o = ve : o === S ? c[0] === ">" ? (o = i ?? x, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? S : c[3] === "\"" ? be : ye) : o === be || o === ye ? o = S : o === _e || o === ve ? o = x : (o = S, i = void 0);
		let d = o === S && e[t + 1].startsWith("/>") ? " " : "";
		a += o === x ? n + pe : l >= 0 ? (r.push(s), n.slice(0, l) + de + n.slice(l) + _ + d) : n + _ + (l === -2 ? t : d);
	}
	return [we(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Ee = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Te(t, n);
		if (this.el = e.createElement(l, r), D.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = D.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(de)) {
					let t = u[o++], n = i.getAttribute(e).split(_), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? ke : r[1] === "?" ? Ae : r[1] === "@" ? je : k
					}), i.removeAttribute(e);
				} else e.startsWith(_) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (xe.test(i.tagName)) {
					let e = i.textContent.split(_), t = e.length - 1;
					if (t > 0) {
						i.textContent = le ? le.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], y()), D.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], y());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === fe) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(_, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += _.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = v.createElement("template");
		return n.innerHTML = e, n;
	}
};
function O(e, t, n = e, r) {
	if (t === T) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = b(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = O(e, i._$AS(e, t.values), i, r)), t;
}
var De = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? v).importNode(t, !0);
		D.currentNode = r;
		let i = D.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Oe(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Me(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = D.nextNode(), a++);
		}
		return D.currentNode = v, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Oe = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = O(this, e, t), b(e) ? e === E || e == null || e === "" ? (this._$AH !== E && this._$AR(), this._$AH = E) : e !== this._$AH && e !== T && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? he(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== E && b(this._$AH) ? this._$AA.nextSibling.data = e : this.T(v.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Ee.createElement(we(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new De(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Ce.get(e.strings);
		return t === void 0 && Ce.set(e.strings, t = new Ee(e)), t;
	}
	k(t) {
		me(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(y()), this.O(y()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = ce(e).nextSibling;
			ce(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, k = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = E, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = E;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = O(this, e, t, 0), a = !b(e) || e !== this._$AH && e !== T, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = O(this, r[n + o], t, o), s === T && (s = this._$AH[o]), a ||= !b(s) || s !== this._$AH[o], s === E ? e = E : e !== E && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, ke = class extends k {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === E ? void 0 : e;
	}
}, Ae = class extends k {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== E);
	}
}, je = class extends k {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = O(this, e, t, 0) ?? E) === T) return;
		let n = this._$AH, r = e === E && n !== E || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== E && (n === E || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Me = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		O(this, e);
	}
}, Ne = {
	M: de,
	P: _,
	A: fe,
	C: 1,
	L: Te,
	R: De,
	D: he,
	V: O,
	I: Oe,
	H: k,
	N: Ae,
	U: je,
	B: ke,
	F: Me
}, Pe = se.litHtmlPolyfillSupport;
Pe?.(Ee, Oe), (se.litHtmlVersions ??= []).push("3.3.3");
var Fe = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new Oe(t.insertBefore(y(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Ie = globalThis, A = class extends g {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Fe(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return T;
	}
};
A._$litElement$ = !0, A.finalized = !0, Ie.litElementHydrateSupport?.({ LitElement: A });
var Le = Ie.litElementPolyfillSupport;
Le?.({ LitElement: A }), (Ie.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/static-styles.js
var Re = "data-en-static-styles", ze = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap();
function Ve(e) {
	let t = e.constructor;
	if (ze.has(t)) return ze.get(t);
	let n = t.elementStyles, r = n.length > 0 && n.every((e) => "cssText" in e && typeof e.cssText == "string" && !/@(?:import|namespace)\b/i.test(e.cssText)) ? n : null;
	return ze.set(t, r), r;
}
var He = class {
	#e;
	#t = !1;
	#n;
	#r;
	#i;
	#a;
	#o = [];
	#s = "";
	constructor(e) {
		this.#e = e, e.addController(this);
	}
	hostConnected() {
		if (this.#i && this.#i !== this.#e.ownerDocument) {
			this.#l();
			return;
		}
		if (this.#t) return;
		let e = this.#e.shadowRoot, t = e?.firstElementChild;
		e && t?.localName === "style" && t.getAttribute("data-en-static-styles") === "v1" && (this.#r = e, this.#n = t);
	}
	hostUpdated() {
		this.#t || (this.#t = !0, this.#e.updateComplete.then(() => this.#c(), () => {
			this.#n = void 0;
		}));
	}
	#c() {
		let e = this.#r, n = this.#n;
		if (this.#n = void 0, !t || !e || e !== this.#e.shadowRoot || !n || n.parentNode !== e || n.getAttribute("data-en-static-styles") !== "v1" || !("adoptedStyleSheets" in e) || [...e.querySelectorAll("style, link[rel~=\"stylesheet\" i]")].some((e) => e !== n) || n.getAttributeNames().some((e) => e !== "data-en-static-styles" && e !== "nonce") || !n.sheet || n.sheet.disabled) return;
		let r = Ve(this.#e);
		if (!r) return;
		let i = [...e.adoptedStyleSheets];
		try {
			let t = r.map((e) => e.styleSheet);
			if (t.some((e) => e === void 0)) return;
			let n = t.filter((e) => !i.includes(e));
			e.adoptedStyleSheets = [...n, ...i], this.#o = n;
		} catch {
			try {
				e.adoptedStyleSheets = i;
			} catch {}
			return;
		}
		this.#i = this.#e.ownerDocument, this.#a = r, this.#s = n.nonce, n.remove();
	}
	#l() {
		let e = this.#r, t = this.#a;
		if (!e || e !== this.#e.shadowRoot || !t) return;
		let n = Be.get(t);
		n === void 0 && (n = t.map((e) => e.cssText).join(""), Be.set(t, n));
		let r = this.#e.ownerDocument.createElement("style");
		r.setAttribute(Re, "v1"), this.#s && (r.nonce = this.#s), r.textContent = n, e.insertBefore(r, e.firstChild);
		try {
			e.adoptedStyleSheets = e.adoptedStyleSheets.filter((e) => !this.#o.includes(e));
		} catch {}
		this.#i = void 0, this.#a = void 0, this.#o = [];
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/internal/en-element.js
function Ue(e) {
	return e === "inherit" || e === "small" || e === "large" ? e : "medium";
}
var j = class extends A {
	staticStyles = new He(this);
	static properties = { size: {
		reflect: !0,
		useDefault: !0,
		noAccessor: !0,
		converter: {
			fromAttribute: Ue,
			toAttribute: Ue
		}
	} };
	#e = "medium";
	get size() {
		return this.#e;
	}
	set size(e) {
		let t = this.#e, n = Ue(e);
		this.#e = n;
		let r = this.getAttribute("size") === n ? void 0 : Object.assign(Object.create(this.constructor.getPropertyOptions("size")), { hasChanged: () => !0 });
		this.requestUpdate("size", t, r);
	}
}, We = Object.freeze({
	"--en-border-invalid-width": "2px",
	"--en-border-width": "1px",
	"--en-calendar-hover-opacity": "0.1",
	"--en-calendar-pressed-opacity": "0.16",
	"--en-palette-accent": "rgb(36 87 214 / 1)",
	"--en-palette-action": "rgb(36 87 214 / 1)",
	"--en-color-action": "rgb(36 87 214 / 1)",
	"--en-palette-surface": "rgb(255 255 255 / 1)",
	"--en-color-surface": "rgb(255 255 255 / 1)",
	"--en-color-accent-border": "rgb(181.65277272 203.4391786 246.40882708 / 1)",
	"--en-color-accent-subtle": "rgb(227.10943415 235.68356672 252.33563096 / 1)",
	"--en-palette-emphasis": "rgb(0 0 0 / 1)",
	"--en-color-action-hover": "rgb(31.04856826 77.00062118 191.430243 / 1)",
	"--en-color-action-pressed": "rgb(26.20372458 67.21650774 169.34637937 / 1)",
	"--en-color-action-text": "rgb(36 87 214 / 1)",
	"--en-palette-boundary": "rgb(123 135 152 / 1)",
	"--en-color-boundary": "rgb(123 135 152 / 1)",
	"--en-color-brand": "rgb(36 87 214 / 1)",
	"--en-palette-canvas": "rgb(247 248 250 / 1)",
	"--en-color-canvas": "rgb(247 248 250 / 1)",
	"--en-palette-danger-text": "rgb(180 35 24 / 1)",
	"--en-color-danger-text": "rgb(180 35 24 / 1)",
	"--en-palette-focus": "rgb(36 87 214 / 1)",
	"--en-color-focus": "rgb(36 87 214 / 1)",
	"--en-color-focus-halo": "rgb(36 87 214 / 1)",
	"--en-palette-line": "rgb(214 220 228 / 1)",
	"--en-color-line": "rgb(214 220 228 / 1)",
	"--en-color-link": "rgb(36 87 214 / 1)",
	"--en-palette-foreground-dark": "rgb(16 27 57 / 1)",
	"--en-palette-foreground-light": "rgb(255 255 255 / 1)",
	"--en-color-on-action": "rgb(255 255 255 / 1)",
	"--en-color-on-brand": "rgb(255 255 255 / 1)",
	"--en-color-scrim": "rgb(0 0 0 / 0.45)",
	"--en-palette-selected": "rgb(231 238 255 / 1)",
	"--en-color-selected": "rgb(231 238 255 / 1)",
	"--en-palette-success-text": "rgb(20 108 67 / 1)",
	"--en-color-success-text": "rgb(20 108 67 / 1)",
	"--en-palette-surface-raised": "rgb(255 255 255 / 1)",
	"--en-color-surface-raised": "rgb(255 255 255 / 1)",
	"--en-palette-surface-subtle": "rgb(238 241 245 / 1)",
	"--en-color-surface-subtle": "rgb(238 241 245 / 1)",
	"--en-palette-text": "rgb(27 31 36 / 1)",
	"--en-color-text": "rgb(27 31 36 / 1)",
	"--en-palette-text-muted": "rgb(86 97 113 / 1)",
	"--en-color-text-muted": "rgb(86 97 113 / 1)",
	"--en-palette-warning-text": "rgb(138 75 5 / 1)",
	"--en-color-warning-text": "rgb(138 75 5 / 1)",
	"--en-focus-halo-width": "0px",
	"--en-focus-offset": "2px",
	"--en-focus-width": "2px",
	"--en-rhythm-base": "0.25rem",
	"--en-space-3": "0.75rem",
	"--en-space-control-inline": "0.75rem",
	"--en-radius-control": "0.5rem",
	"--en-focus-accent-width": "0px",
	"--en-space-0": "0rem",
	"--en-layout-panel-preferred": "20rem",
	"--en-space-1": "0.25rem",
	"--en-radius-container": "1rem",
	"--en-shadow-overlay": "0px 4px 16px 0px rgb(0 0 0 / 0.18)",
	"--en-space-1-5": "0.375rem",
	"--en-space-control-block": "0.375rem",
	"--en-focus-inset-offset": "-2px",
	"--en-font-ui-weight": "400",
	"--en-font-label-strong-weight": "600",
	"--en-space-actions": "0.375rem",
	"--en-size-control-min": "2.5rem",
	"--en-duration-immediate": "0ms",
	"--en-duration-enter": "0ms",
	"--en-duration-exit": "0ms",
	"--en-duration-fast": "120ms",
	"--en-duration-focus-enter": "0ms",
	"--en-duration-focus-exit": "0ms",
	"--en-duration-regular": "180ms",
	"--en-duration-slow": "240ms",
	"--en-duration-spin": "800ms",
	"--en-ease-standard": "cubic-bezier(0.2, 0, 0, 1)",
	"--en-ease-enter": "cubic-bezier(0.2, 0, 0, 1)",
	"--en-ease-exit": "cubic-bezier(0.2, 0, 0, 1)",
	"--en-ease-focus-enter": "cubic-bezier(0.2, 0, 0, 1)",
	"--en-ease-focus-exit": "cubic-bezier(0.2, 0, 0, 1)",
	"--en-space-4": "1rem",
	"--en-focus-scroll-margin-block": "1rem",
	"--en-focus-scroll-margin-inline": "1rem",
	"--en-font-body-family": "system-ui, sans-serif",
	"--en-font-body-line-height": "1.5",
	"--en-font-body-size": "1rem",
	"--en-size-type-scale-large": "1.125",
	"--en-font-body-size-large": "1.125rem",
	"--en-size-type-scale-medium": "1",
	"--en-font-body-size-medium": "1rem",
	"--en-size-type-scale-small": "0.9375",
	"--en-font-body-size-small": "0.9375rem",
	"--en-font-body-weight": "400",
	"--en-font-code-family": "ui-monospace, monospace",
	"--en-font-data-family": "system-ui, sans-serif",
	"--en-font-data-line-height": "1.5",
	"--en-font-data-size": "0.875rem",
	"--en-font-data-size-large": "0.984375rem",
	"--en-font-data-size-medium": "0.875rem",
	"--en-font-data-size-small": "0.8203125rem",
	"--en-font-data-weight": "400",
	"--en-font-heading-large-family": "system-ui, sans-serif",
	"--en-font-heading-large-line-height": "1.2",
	"--en-font-heading-large-size": "2rem",
	"--en-font-heading-large-size-large": "2.25rem",
	"--en-font-heading-large-size-medium": "2rem",
	"--en-font-heading-large-size-small": "1.875rem",
	"--en-font-heading-large-weight": "600",
	"--en-font-heading-medium-family": "system-ui, sans-serif",
	"--en-font-heading-medium-line-height": "1.3",
	"--en-font-heading-medium-size": "1.5rem",
	"--en-font-heading-medium-size-large": "1.6875rem",
	"--en-font-heading-medium-size-medium": "1.5rem",
	"--en-font-heading-medium-size-small": "1.40625rem",
	"--en-font-heading-medium-weight": "600",
	"--en-font-heading-small-family": "system-ui, sans-serif",
	"--en-font-heading-small-line-height": "1.4",
	"--en-font-heading-small-size": "1.125rem",
	"--en-font-heading-small-size-large": "1.265625rem",
	"--en-font-heading-small-size-medium": "1.125rem",
	"--en-font-heading-small-size-small": "1.0546875rem",
	"--en-font-heading-small-weight": "600",
	"--en-font-ui-family": "system-ui, sans-serif",
	"--en-font-input-family": "system-ui, sans-serif",
	"--en-font-ui-line-height": "1.5",
	"--en-font-input-line-height": "1.5",
	"--en-font-ui-size": "1rem",
	"--en-font-input-size": "1rem",
	"--en-font-input-size-large": "1.125rem",
	"--en-font-input-size-medium": "1rem",
	"--en-font-input-size-small": "1rem",
	"--en-font-input-weight": "400",
	"--en-font-label-strong-family": "system-ui, sans-serif",
	"--en-font-label-strong-line-height": "1.5",
	"--en-font-label-strong-size": "1rem",
	"--en-font-metadata-family": "system-ui, sans-serif",
	"--en-font-metadata-line-height": "1.5",
	"--en-font-metadata-size": "0.8125rem",
	"--en-font-metadata-size-large": "0.9140625rem",
	"--en-font-metadata-size-medium": "0.8125rem",
	"--en-font-metadata-size-small": "0.8125rem",
	"--en-font-metadata-weight": "400",
	"--en-font-ui-size-large": "1.125rem",
	"--en-font-ui-size-medium": "1rem",
	"--en-font-ui-size-small": "1rem",
	"--en-layout-article-max": "48rem",
	"--en-layout-dialog-collapse": "48rem",
	"--en-layout-form-max": "28rem",
	"--en-size-scale-large": "1.25",
	"--en-layout-form-max-large": "35rem",
	"--en-size-scale-medium": "1",
	"--en-layout-form-max-medium": "28rem",
	"--en-size-scale-small": "0.875",
	"--en-layout-form-max-small": "24.5rem",
	"--en-layout-panel-preferred-large": "25rem",
	"--en-layout-panel-preferred-medium": "20rem",
	"--en-layout-panel-preferred-small": "17.5rem",
	"--en-layout-prose-max": "66ch",
	"--en-motion-surface-offset": "0px",
	"--en-motion-surface-scale": "1",
	"--en-palette-on-action": "rgb(255 255 255 / 1)",
	"--en-radius-choice": "2px",
	"--en-radius-choice-large": "2.5px",
	"--en-radius-choice-medium": "2px",
	"--en-radius-choice-small": "1.75px",
	"--en-radius-container-large": "1.25rem",
	"--en-radius-container-medium": "1rem",
	"--en-radius-container-small": "0.875rem",
	"--en-radius-control-large": "0.625rem",
	"--en-radius-control-medium": "0.5rem",
	"--en-radius-control-small": "0.4375rem",
	"--en-radius-dialog": "1.25rem",
	"--en-radius-dialog-large": "1.5625rem",
	"--en-radius-dialog-medium": "1.25rem",
	"--en-radius-dialog-small": "1.09375rem",
	"--en-radius-pill": "9999px",
	"--en-shadow-dialog": "0px 12px 40px 0px rgb(0 0 0 / 0.18)",
	"--en-size-avatar": "2.5rem",
	"--en-size-avatar-large": "3.125rem",
	"--en-size-avatar-medium": "2.5rem",
	"--en-size-avatar-small": "2.1875rem",
	"--en-size-choice-dot": "8px",
	"--en-size-choice-dot-large": "10px",
	"--en-size-choice-dot-medium": "8px",
	"--en-size-choice-dot-small": "7px",
	"--en-size-choice-mark-block": "10px",
	"--en-size-choice-mark-block-large": "12.5px",
	"--en-size-choice-mark-block-medium": "10px",
	"--en-size-choice-mark-block-small": "8.75px",
	"--en-size-choice-mark-inline": "6px",
	"--en-size-choice-mark-inline-large": "7.5px",
	"--en-size-choice-mark-inline-medium": "6px",
	"--en-size-choice-mark-inline-small": "5.25px",
	"--en-size-choice-mark-stroke": "2px",
	"--en-size-control-large": "3.125rem",
	"--en-size-control-medium": "2.5rem",
	"--en-size-control-small": "2.1875rem",
	"--en-size-icon": "1.125rem",
	"--en-size-icon-large": "1.40625rem",
	"--en-size-icon-medium": "1.125rem",
	"--en-size-icon-small": "0.984375rem",
	"--en-size-icon-stroke": "1.5px",
	"--en-size-progress": "0.5rem",
	"--en-size-progress-large": "0.625rem",
	"--en-size-progress-medium": "0.5rem",
	"--en-size-progress-small": "0.4375rem",
	"--en-size-quote-border": "2px",
	"--en-size-range-length": "12rem",
	"--en-size-range-track": "4px",
	"--en-size-range-track-large": "5px",
	"--en-size-range-track-medium": "4px",
	"--en-size-range-track-small": "3.5px",
	"--en-size-skeleton-line": "1rem",
	"--en-size-skeleton-line-large": "1.25rem",
	"--en-size-skeleton-line-medium": "1rem",
	"--en-size-skeleton-line-small": "0.875rem",
	"--en-size-spinner": "1.25rem",
	"--en-size-spinner-large": "1.5625rem",
	"--en-size-spinner-medium": "1.25rem",
	"--en-size-spinner-small": "1.09375rem",
	"--en-size-spinner-stroke": "2px",
	"--en-size-target-min": "24px",
	"--en-size-splitter": "24px",
	"--en-size-splitter-large": "30px",
	"--en-size-splitter-medium": "24px",
	"--en-size-splitter-small": "21px",
	"--en-size-swatch": "4rem",
	"--en-size-swatch-large": "5rem",
	"--en-size-swatch-medium": "4rem",
	"--en-size-swatch-small": "3.5rem",
	"--en-size-switch-block": "1.5rem",
	"--en-size-switch-block-large": "1.875rem",
	"--en-size-switch-block-medium": "1.5rem",
	"--en-size-switch-block-small": "1.3125rem",
	"--en-size-switch-inline": "2.5rem",
	"--en-size-switch-inline-large": "3.125rem",
	"--en-size-switch-inline-medium": "2.5rem",
	"--en-size-switch-inline-small": "2.1875rem",
	"--en-size-switch-thumb": "1rem",
	"--en-size-switch-thumb-large": "1.25rem",
	"--en-size-switch-thumb-medium": "1rem",
	"--en-size-switch-thumb-small": "0.875rem",
	"--en-size-tab-indicator": "2px",
	"--en-size-target-touch": "2.75rem",
	"--en-space-0-5": "0.125rem",
	"--en-space-12": "3rem",
	"--en-space-16": "4rem",
	"--en-space-2": "0.5rem",
	"--en-space-2-5": "0.625rem",
	"--en-space-5": "1.25rem",
	"--en-space-6": "1.5rem",
	"--en-space-8": "2rem",
	"--en-space-actions-large": "0.46875rem",
	"--en-space-actions-medium": "0.375rem",
	"--en-space-actions-small": "0.328125rem",
	"--en-space-badge-block": "0.125rem",
	"--en-space-badge-block-large": "0.15625rem",
	"--en-space-badge-block-medium": "0.125rem",
	"--en-space-badge-block-small": "0.109375rem",
	"--en-space-badge-inline": "0.5rem",
	"--en-space-badge-inline-large": "0.625rem",
	"--en-space-badge-inline-medium": "0.5rem",
	"--en-space-badge-inline-small": "0.4375rem",
	"--en-space-control-block-large": "0.46875rem",
	"--en-space-control-block-medium": "0.375rem",
	"--en-space-control-block-small": "0.328125rem",
	"--en-space-control-description": "0.375rem",
	"--en-space-control-description-large": "0.46875rem",
	"--en-space-control-description-medium": "0.375rem",
	"--en-space-control-description-small": "0.328125rem",
	"--en-space-control-inline-large": "0.9375rem",
	"--en-space-control-inline-medium": "0.75rem",
	"--en-space-control-inline-small": "0.65625rem",
	"--en-space-fields": "1.5rem",
	"--en-space-fields-large": "1.875rem",
	"--en-space-fields-medium": "1.5rem",
	"--en-space-fields-small": "1.3125rem",
	"--en-space-icon-label": "0.5rem",
	"--en-space-icon-label-large": "0.625rem",
	"--en-space-icon-label-medium": "0.5rem",
	"--en-space-icon-label-small": "0.4375rem",
	"--en-space-label-control": "0.5rem",
	"--en-space-label-control-large": "0.625rem",
	"--en-space-label-control-medium": "0.5rem",
	"--en-space-label-control-small": "0.4375rem",
	"--en-space-panel": "1.5rem",
	"--en-space-panel-large": "1.875rem",
	"--en-space-panel-medium": "1.5rem",
	"--en-space-panel-small": "1.3125rem",
	"--en-space-rows": "0.75rem",
	"--en-space-rows-large": "0.9375rem",
	"--en-space-rows-medium": "0.75rem",
	"--en-space-rows-small": "0.65625rem",
	"--en-space-sections": "2rem",
	"--en-space-sections-large": "2.5rem",
	"--en-space-sections-medium": "2rem",
	"--en-space-sections-small": "1.75rem",
	"--en-space-switch-inset": "0.1875rem",
	"--en-space-switch-inset-large": "0.234375rem",
	"--en-space-switch-inset-medium": "0.1875rem",
	"--en-space-switch-inset-small": "0.1640625rem"
});
function Ge(e) {
	if (!Object.hasOwn(We, e)) throw RangeError("Unknown token " + e);
	return We[e];
}
//#endregion
//#region ../design-system/packages/tokens/dist/sizing.js
var Ke = Object.freeze([
	"small",
	"medium",
	"large"
]);
Object.freeze({
	small: .875,
	medium: 1,
	large: 1.25
}), Object.freeze({
	small: .9375,
	medium: 1,
	large: 1.125
});
var qe = Object.freeze({
	"size.control": "size.control-min",
	"size.icon": "size.icon",
	"size.avatar": "size.avatar",
	"size.swatch": "size.swatch",
	"size.spinner": "size.spinner",
	"size.progress": "size.progress",
	"size.skeleton-line": "size.skeleton-line",
	"size.splitter": "size.splitter",
	"size.switch-inline": "size.switch-inline",
	"size.switch-block": "size.switch-block",
	"size.switch-thumb": "size.switch-thumb",
	"size.choice-mark-inline": "size.choice-mark-inline",
	"size.choice-mark-block": "size.choice-mark-block",
	"size.choice-dot": "size.choice-dot",
	"size.range-track": "size.range-track",
	"space.switch-inset": "space.switch-inset",
	"space.control-inline": "space.control-inline",
	"space.control-block": "space.control-block",
	"space.panel": "space.panel",
	"space.rows": "space.rows",
	"space.actions": "space.actions",
	"space.fields": "space.fields",
	"space.sections": "space.sections",
	"space.icon-label": "space.icon-label",
	"space.label-control": "space.label-control",
	"space.control-description": "space.control-description",
	"space.badge-inline": "space.badge-inline",
	"space.badge-block": "space.badge-block",
	"radius.control": "radius.control",
	"radius.container": "radius.container",
	"radius.dialog": "radius.dialog",
	"radius.choice": "radius.choice",
	"layout.form-max": "layout.form-max",
	"layout.panel-preferred": "layout.panel-preferred",
	"font.ui.size": "font.ui.size",
	"font.input.size": "font.input.size",
	"font.data.size": "font.data.size",
	"font.metadata.size": "font.metadata.size",
	"font.body.size": "font.body.size",
	"font.heading-small.size": "font.heading-small.size",
	"font.heading-medium.size": "font.heading-medium.size",
	"font.heading-large.size": "font.heading-large.size"
}), Je = Object.freeze(Object.entries(qe).map(([e, t]) => Object.freeze({
	role: `--en-${e.replaceAll(".", "-")}`,
	base: `--en-${t.replaceAll(".", "-")}`,
	variants: Object.freeze(Object.fromEntries(Ke.map((t) => [t, `--en-${e.replaceAll(".", "-")}-${t}`])))
})));
//#endregion
//#region ../design-system/packages/styles/dist/internal/values.js
function Ye(e) {
	let t = Ge(e);
	if (!t) throw Error(`Missing stylesheet token default: ${e}`);
	return o`var(${a(e)}, ${a(t)})`;
}
var Xe = new Map(Je.map(({ base: e, role: t }) => [e, `--_en-sized-${t.slice(5)}`]));
function M(e) {
	let t = Ye(e), n = Xe.get(e);
	return n ? o`var(${a(n)}, ${t})` : t;
}
function N(e, t) {
	return o`var(${a(e)}, ${t})`;
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/focus-core.js
function P(e, t, n) {
	return e ? N(`--en-${e}-focus-${t}`, n) : n;
}
function Ze(e) {
	let t = P(e.family, "width", M("--en-focus-width"));
	return {
		width: t,
		offset: P(e.family, "offset", e.inset ? o`calc(0px - ${t})` : M("--en-focus-offset")),
		color: P(e.family, "color", M("--en-color-focus")),
		haloWidth: e.halo === !1 ? o`0px` : P(e.family, "halo-width", M("--en-focus-halo-width")),
		haloColor: P(e.family, "halo-color", M("--en-color-focus-halo"))
	};
}
function F(e = {}) {
	let t = Ze(e);
	return o`max(0px, calc(${t.width} + ${t.offset}), ${t.haloWidth})`;
}
var Qe = o`max(${F()}, ${F({ family: "button" })}, ${F({ family: "input" })}, ${F({
	family: "option",
	inset: !0
})}, ${F({ family: "overlay" })})`;
function $e(e, t = {}) {
	return o`${e} {
    scroll-margin-block: max(${M("--en-focus-scroll-margin-block")}, ${F(t)});
    scroll-margin-inline: max(${M("--en-focus-scroll-margin-inline")}, ${F(t)});
  }`;
}
function I(e, t = {}) {
	return et(o`${e}:focus-visible`, {
		...t,
		restSelector: t.restSelector ?? e
	});
}
function et(e, t = {}) {
	let n = Ze(t), r = t.restSelector, i = r && t.halo !== !1, a = t.baseShadow ?? o`0 0 0 0 transparent`, s = t.baseTransitions ? o`${t.baseTransitions},` : o``;
	return o`
    ${r ? $e(r, t) : o``}
    ${i ? o`${r} {
      box-shadow: 0 0 0 0 ${n.haloColor}, ${a};
      transition: ${s} box-shadow ${M("--en-duration-focus-exit")} ${M("--en-ease-focus-exit")};
    }` : o``}
    ${e} {
      outline: ${n.width} solid ${n.color};
      outline-offset: ${n.offset};
      box-shadow: 0 0 0 ${n.haloWidth} ${n.haloColor}, ${a};
      ${i ? o`transition: ${s} box-shadow ${M("--en-duration-focus-enter")} ${M("--en-ease-focus-enter")};` : o``}
    }
    ${i ? o`@media (prefers-reduced-motion: reduce) {
      ${r}, ${e} { transition: none; }
    }` : o``}
    @media (forced-colors: active) {
      ${e} { outline-color: Highlight; box-shadow: none; }
      ${i ? o`${r}, ${e} { box-shadow: none; transition: none; }` : o``}
    }
  `;
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/sizing.js
function L(e) {
	let t = Je.filter(({ role: t }) => e.cssText.includes(`var(--_en-sized-${t.slice(5)},`)).map(({ role: e, variants: t }) => `--_en-sized-${e.slice(5)}: calc(${Ye(t.small).cssText} * var(--_en-size-small, 0) + ${Ye(t.medium).cssText} * var(--_en-size-medium, 1) + ${Ye(t.large).cssText} * var(--_en-size-large, 0));`).join("\n");
	return t ? o`:host, .en-foundation { ${a(t)} } ${e}` : e;
}
//#endregion
//#region ../design-system/packages/styles/dist/typography.js
var tt = L(o`
  .en-body, .en-prose, .en-heading-small, .en-heading-medium, .en-heading-large, .en-metadata, .en-data {
    margin: 0;
    overflow-wrap: break-word;
  }
  .en-body, .en-prose {
    color: ${M("--en-color-text")};
    font: ${M("--en-font-body-weight")} ${M("--en-font-body-size")} / ${M("--en-font-body-line-height")} ${M("--en-font-body-family")};
  }
  .en-prose {
    max-inline-size: ${N("--en-prose-max-inline-size", M("--en-layout-prose-max"))};
  }
  .en-prose :where(p, ul, ol, dl, blockquote) { margin-block: 0 ${M("--en-space-4")}; }
  .en-prose :where(ul, ol) { padding-inline-start: ${M("--en-space-6")}; }
  .en-heading-small {
    font: ${M("--en-font-heading-small-weight")} ${M("--en-font-heading-small-size")} / ${M("--en-font-heading-small-line-height")} ${M("--en-font-heading-small-family")};
  }
  .en-heading-medium {
    font: ${M("--en-font-heading-medium-weight")} ${M("--en-font-heading-medium-size")} / ${M("--en-font-heading-medium-line-height")} ${M("--en-font-heading-medium-family")};
  }
  .en-heading-large {
    font: ${M("--en-font-heading-large-weight")} ${M("--en-font-heading-large-size")} / ${M("--en-font-heading-large-line-height")} ${M("--en-font-heading-large-family")};
  }
  .en-metadata {
    color: ${M("--en-color-text-muted")};
    font: ${M("--en-font-metadata-weight")} ${M("--en-font-metadata-size")} / ${M("--en-font-metadata-line-height")} ${M("--en-font-metadata-family")};
  }
  .en-data {
    font: ${M("--en-font-data-weight")} ${M("--en-font-data-size")} / ${M("--en-font-data-line-height")} ${M("--en-font-data-family")};
    font-variant-numeric: tabular-nums;
  }
`), nt = o`:host { display: block; min-inline-size: 0; }`, rt = o`:host { display: inline-block; vertical-align: middle; max-inline-size: 100%; }`, it = o`:host { display: inline-flex; align-items: center; justify-content: center; color: inherit; line-height: 0; vertical-align: middle; }`, R = L(o`
  ${o`
  :host, .en-foundation { --_en-size-small: 0; --_en-size-medium: 1; --_en-size-large: 0; }
  :host([size='inherit']), .en-foundation[data-size='inherit'] { --_en-size-small: inherit; --_en-size-medium: inherit; --_en-size-large: inherit; }
  :host([size='small']), .en-foundation[data-size='small'] { --_en-size-small: 1; --_en-size-medium: 0; --_en-size-large: 0; }
  :host([size='medium']), .en-foundation[data-size='medium'] { --_en-size-small: 0; --_en-size-medium: 1; --_en-size-large: 0; }
  :host([size='large']), .en-foundation[data-size='large'] { --_en-size-small: 0; --_en-size-medium: 0; --_en-size-large: 1; }
`}
  :host, .en-foundation {
    box-sizing: border-box;
    color: ${M("--en-color-text")};
    font-family: ${M("--en-font-ui-family")};
    font-size: ${M("--en-font-ui-size")};
    font-weight: ${M("--en-font-ui-weight")};
    line-height: ${M("--en-font-ui-line-height")};
    text-align: start;
  }
  :host *, :host *::before, :host *::after,
  .en-foundation *, .en-foundation *::before, .en-foundation *::after { box-sizing: border-box; }
  :host([hidden]), :host [hidden], .en-foundation [hidden] { display: none !important; }
  :host :where(button, input, textarea, select), .en-foundation :where(button, input, textarea, select) {
    font: inherit;
    letter-spacing: inherit;
    word-spacing: inherit;
  }
  ${$e(o`:where(:host([tabindex]), .en-foundation[tabindex]),
    :where(:host, .en-foundation) :where(button, input, textarea, select, a[href], [tabindex])`)}
  :host(:focus-visible), .en-foundation:focus-visible {
    outline: ${M("--en-focus-width")} solid ${M("--en-color-focus")};
    outline-offset: ${M("--en-focus-offset")};
  }
  .en-sr-only {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  .en-break { overflow-wrap: anywhere; }
  .en-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (forced-colors: active) {
    :host, .en-foundation { color: CanvasText; }
    :host(:focus-visible), .en-foundation:focus-visible { outline-color: Highlight; }
  }
`), at = o`
  .en-button {
    padding-inline: ${N("--en-control-inline-padding", N("--en-button-inline-padding", M("--en-space-control-inline")))};
    display: inline-flex;
    min-inline-size: ${M("--en-size-target-min")};
    align-items: center;
    justify-content: center;
    gap: ${M("--en-space-icon-label")};
    border-color: ${N("--en-button-border-color", M("--en-color-action"))};
    border-radius: ${N("--en-button-radius", M("--en-radius-control"))};
    background: ${N("--en-button-background", M("--en-color-action"))};
    color: ${N("--en-button-color", M("--en-color-on-action"))};
    font-weight: ${M("--en-font-label-strong-weight")};
    text-align: center;
    text-decoration: none;
    white-space: normal;
    overflow-wrap: break-word;
    cursor: pointer;
    transition: background-color ${M("--en-duration-fast")} ${M("--en-ease-standard")},
      border-color ${M("--en-duration-fast")} ${M("--en-ease-standard")};
  }
  @media (hover: hover) { .en-button:where(:not(:disabled):not([aria-disabled='true']):hover) { background: ${N("--en-button-background", M("--en-color-action-hover"))}; } }
  .en-button:where(:not(:disabled):not([aria-disabled='true']):active) { background: ${N("--en-button-background", M("--en-color-action-pressed"))}; }
  .en-button--secondary, .en-button[data-variant='secondary'] {
    background: ${N("--en-button-background", M("--en-color-surface-subtle"))};
    color: ${N("--en-button-color", M("--en-color-text"))};
    border-color: ${N("--en-button-border-color", M("--en-color-boundary"))};
  }
  .en-button--quiet, .en-button[data-variant='ghost'] {
    background: none;
    color: ${N("--en-button-color", M("--en-color-action-text"))};
    border-color: ${N("--en-button-border-color", M("--en-color-line"))};
  }
  @media (hover: hover) { :is(.en-button--secondary, .en-button--quiet, .en-button[data-variant='secondary'], .en-button[data-variant='ghost']):not(:disabled):not([aria-disabled='true']):hover {
    background: ${N("--en-button-background", M("--en-color-selected"))};
  } }
  .en-button--danger, .en-button[data-variant='danger'] {
    background: ${N("--en-button-background", M("--en-color-surface"))};
    color: ${N("--en-button-color", M("--en-color-danger-text"))};
    border-color: ${N("--en-button-border-color", M("--en-color-danger-text"))};
  }
  @media (hover: hover) { :is(.en-button--danger, .en-button[data-variant='danger']):not(:disabled):not([aria-disabled='true']):hover {
    background: ${N("--en-button-background", M("--en-color-surface-subtle"))};
  } }
  .en-button__prefix, .en-button__suffix { display: contents; }
  .en-button__label { min-inline-size: 0; }
  .en-icon-button { padding-inline: ${M("--en-space-2")}; min-inline-size: max(${N("--en-control-min-size", M("--en-size-control-min"))}, ${M("--en-size-target-min")}); }
  /* Explicit button mode; existing stepper/overlay icon recipes retain their layout. */
  .en-button[data-icon-only] {
    --_en-icon-button-side: max(var(--_en-text-control-block-size), calc(max(${N("--en-icon-size", M("--en-size-icon"))}, ${M("--en-size-spinner")}) + 2 * ${M("--en-space-control-block")} + 2 * ${M("--en-border-width")}));
    min-inline-size: var(--_en-icon-button-side);
    min-block-size: var(--_en-icon-button-side);
    inline-size: max-content;
    aspect-ratio: 1;
    padding: ${M("--en-space-control-block")};
    gap: 0;
    flex-shrink: 0;
  }
  .en-button[data-icon-only] > .en-button__label {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  /* Keep one visual glyph while busy. The label and slotted nodes remain intact. */
  .en-button[data-icon-only][aria-busy='true'] > :is(.en-button__prefix, .en-button__suffix) { display: none; }

`, ot = o`background-color ${M("--en-duration-fast")} ${M("--en-ease-standard")}, border-color ${M("--en-duration-fast")} ${M("--en-ease-standard")}`, st = I(o`.en-button`, {
	family: "button",
	baseTransitions: ot
}), ct = o`@media (hover: hover) { .en-button:not(:disabled):not([aria-disabled='true']):hover { background: Highlight !important; color: HighlightText !important; } }`, lt = o`max(0px, ${N("--en-segmented-control-frame-inset", M("--en-space-1"))})`, z = o`calc(${lt} + ${M("--en-border-width")})`;
function ut(e = !1) {
	let t = M(e ? "--en-size-target-touch" : "--en-size-target-min"), n = M("--en-space-control-block"), r = M("--en-border-width"), i = o`max(calc(${M("--en-space-1")} + ${r}), ${z})`;
	return o`max(
    ${N("--en-control-min-size", M("--en-size-control-min"))},
    calc(${t} + 2 * ${i}),
    calc(${M("--en-font-input-size")} * ${M("--en-font-input-line-height")} + 2 * ${n} + 2 * ${r}),
    calc(${M("--en-font-ui-size")} * ${M("--en-font-ui-line-height")} + 2 * max(${n}, ${i}) + 2 * ${r})
  )`;
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/control-shared.js
function dt(e, t = !1) {
	return o`${e} { --_en-text-control-block-size: ${ut(t)}; }`;
}
function ft(e) {
	return o`${e} {
    box-sizing: border-box;
    min-inline-size: 0;
    min-block-size: max(${N("--en-control-min-size", M("--en-size-control-min"))}, ${M("--en-size-target-min")});
    max-inline-size: 100%;
    padding-block: ${M("--en-space-control-block")};
    padding-inline: ${N("--en-control-inline-padding", M("--en-space-control-inline"))};
    border: ${M("--en-border-width")} solid ${N("--en-control-border-color", M("--en-color-boundary"))};
    border-radius: ${N("--en-control-radius", M("--en-radius-control"))};
    background: ${N("--en-control-background", M("--en-color-surface"))};
    color: ${N("--en-control-color", M("--en-color-text"))};
    font: inherit;
    text-align: start;
  }`;
}
function pt(e) {
	return o`${e} { min-block-size: var(--_en-text-control-block-size); }`;
}
function mt(e) {
	return o`${e} {
    color: ${M("--en-color-text-muted")};
    background: ${M("--en-color-surface-subtle")};
    border-color: ${M("--en-color-boundary")};
    cursor: default;
  }`;
}
function ht(e) {
	return o`${e} { min-block-size: max(${N("--en-control-min-size", M("--en-size-control-min"))}, ${M("--en-size-target-touch")}); }`;
}
function gt(e) {
	return o`${e} { min-inline-size: max(${N("--en-control-min-size", M("--en-size-control-min"))}, ${M("--en-size-target-touch")}); }`;
}
function _t(e) {
	return o`${e} { transition: none; }`;
}
function vt(e) {
	return o`${e} { color: CanvasText !important; background: Canvas !important; border-color: ButtonText !important; }`;
}
function yt(e) {
	return o`${e} { color: GrayText !important; border-color: GrayText !important; }`;
}
//#endregion
//#region ../design-system/packages/styles/dist/buttons.js
var bt = L(o`
  ${dt(o`.en-button:not(.en-icon-button), .en-button[data-icon-only]`)}
  ${ft(o`.en-button`)}
  ${pt(o`.en-button:not(.en-icon-button)`)}
  ${at}
  ${mt(o`:is(.en-button):is(:disabled, [aria-disabled='true'])`)}
  ${st}
  @media (any-pointer: coarse) {
    ${dt(o`.en-button:not(.en-icon-button), .en-button[data-icon-only]`, !0)}
    ${ht(o`.en-button`)}
    ${pt(o`.en-button:not(.en-icon-button)`)}
    ${gt(o`.en-icon-button`)}
  }
  @media (prefers-reduced-motion: reduce) { ${_t(o`.en-button`)} }
  @media (forced-colors: active) {
    ${vt(o`.en-button`)}
    ${yt(o`:is(.en-button):is(:disabled, [aria-disabled='true'])`)}
    ${ct}
  }
`), xt = L(o`
  .en-spinner {
    display: inline-block;
    flex: none;
    inline-size: ${M("--en-size-spinner")};
    block-size: ${M("--en-size-spinner")};
    border: ${M("--en-size-spinner-stroke")} solid currentColor;
    border-inline-end-color: ${M("--en-color-line")};
    border-radius: ${M("--en-radius-pill")};
    animation: en-style-spin ${M("--en-duration-spin")} linear infinite;
  }
  @keyframes en-style-spin { to { transform: rotate(1turn); } }
  .en-skeleton { display: block; inline-size: 100%; block-size: ${N("--en-skeleton-size", M("--en-size-skeleton-line"))}; background: ${N("--en-skeleton-color", M("--en-color-surface-subtle"))}; border-radius: ${M("--en-radius-control")}; }
  .en-skeleton[data-shape='circle'] { inline-size: ${N("--en-skeleton-size", M("--en-size-avatar"))}; block-size: ${N("--en-skeleton-size", M("--en-size-avatar"))}; border-radius: ${M("--en-radius-pill")}; }
  .en-skeleton[data-shape='rectangle'] { block-size: ${N("--en-skeleton-size", M("--en-space-16"))}; }
  @media (prefers-reduced-motion: reduce) { .en-spinner { animation: none; } }
  @media (forced-colors: active) { .en-spinner { border-color: CanvasText; border-inline-end-color: GrayText; } .en-skeleton { background: Canvas; border: ${M("--en-border-width")} solid GrayText; } }
`), St = (e) => e ?? E, Ct = (e) => C`
  <button
    class=${e.iconOnly ? "en-button en-icon-button" : "en-button"}
    ?data-icon-only=${e.iconOnly}
    part="control"
    type="button"
    tabindex=${e.tabIndex ?? 0}
    data-variant=${e.variant}
    data-size=${e.size}
    ?disabled=${e.disabled || e.loading}
    aria-busy=${e.loading ? "true" : "false"}
    aria-haspopup=${St(e.popupRole ?? void 0)}
    aria-expanded=${St(e.popupExpanded ?? void 0)}
    aria-disabled=${St(e.ariaDisabled ?? void 0)}
  >
    ${e.loading ? C`<span class="en-spinner" part="indicator" aria-hidden="true"></span>` : null}
    <slot class="en-button__prefix" name="prefix"></slot>
    <span class="en-button__label" part="label"><slot name="label"><slot></slot></slot></span>
    <slot class="en-button__suffix" name="suffix"></slot>
  </button>
`, wt = /* @__PURE__ */ new WeakMap();
function Tt(e, t) {
	wt.set(e, { write: t });
}
//#endregion
//#region ../design-system/packages/elements/dist/button/element.js
var Et = class extends j {
	static properties = {
		variant: { reflect: !0 },
		disabled: {
			type: Boolean,
			reflect: !0
		},
		loading: {
			type: Boolean,
			reflect: !0
		},
		iconOnly: {
			type: Boolean,
			attribute: "icon-only",
			reflect: !0
		},
		popupRole: { attribute: "aria-haspopup" },
		popupExpanded: { attribute: "aria-expanded" },
		disabledSemantics: { attribute: "aria-disabled" },
		descriptionIds: {
			attribute: "aria-describedby",
			hasChanged: () => !0
		}
	};
	static styles = [
		R,
		rt,
		bt,
		xt
	];
	tabStop = 0;
	constructor() {
		super(), this.variant = "primary", this.disabled = !1, this.loading = !1, this.iconOnly = !1, this.popupRole = null, this.popupExpanded = null, this.disabledSemantics = null, this.addEventListener("click", (e) => {
			this.getAttribute("aria-disabled") === "true" && (e.preventDefault(), e.stopImmediatePropagation());
		}, { capture: !0 }), this.descriptionIds = null, Tt(this, (e) => {
			if (this.tabStop === e) return;
			this.tabStop = e;
			let t = this.renderRoot?.querySelector("button");
			t && (t.tabIndex = e), this.requestUpdate();
		});
	}
	connectedCallback() {
		super.connectedCallback(), this.requestUpdate();
	}
	focus(e) {
		this.renderRoot.querySelector("button")?.focus(e);
	}
	render() {
		return Ct({
			variant: this.variant,
			size: this.size,
			disabled: this.disabled,
			loading: this.loading,
			iconOnly: this.iconOnly,
			popupRole: this.popupRole,
			popupExpanded: this.popupExpanded,
			ariaDisabled: this.disabledSemantics,
			tabIndex: this.tabStop
		});
	}
	updated() {
		let e = this.renderRoot.querySelector("button");
		if (!e) return;
		for (let [t, n] of [
			["aria-haspopup", this.popupRole],
			["aria-expanded", this.popupExpanded],
			["aria-disabled", this.disabledSemantics]
		]) n === null ? e.hasAttribute(t) && e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
		if (!("ariaDescribedByElements" in e)) return;
		let t = this.ariaDescribedByElements, n = e.ariaDescribedByElements;
		(n?.length !== t?.length || n?.some((e, n) => e !== t?.[n])) && (e.ariaDescribedByElements = t);
	}
};
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/registration.js
function Dt(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = [], i = /* @__PURE__ */ new Set(), a = (e) => {
		let r = t.get(e.tagName);
		if (r && r.elementClass !== e.elementClass) throw Error(`Conflicting constructors for ${e.tagName}.`);
		if (t.set(e.tagName, e), i.has(e)) return;
		i.add(e);
		let o = n.get(e.tagName) ?? /* @__PURE__ */ new Set();
		n.set(e.tagName, o);
		for (let t of e.dependencies ?? []) o.add(t.tagName), a(t);
	};
	for (let t of e) a(t);
	let o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), c = (e) => {
		if (!(o.has(e) || s.has(e))) {
			s.add(e);
			for (let t of n.get(e) ?? []) c(t);
			s.delete(e), o.add(e), r.push(t.get(e));
		}
	};
	for (let e of t.keys()) c(e);
	return Object.freeze(r);
}
function Ot(e, t) {
	let n = Dt(t), r = /* @__PURE__ */ new Map();
	for (let t of n) {
		let n = r.get(t.elementClass);
		if (n && n !== t.tagName) throw Error(`One constructor cannot define both ${n} and ${t.tagName}.`);
		r.set(t.elementClass, t.tagName);
		let i = e.get(t.tagName);
		if (i && i !== t.elementClass) throw Error(`A different version of ${t.tagName} is already registered.`);
	}
	for (let t of n) e.get(t.tagName) || e.define(t.tagName, t.elementClass);
}
function B(e, t) {
	Ot(e, [t]);
}
//#endregion
//#region ../design-system/packages/elements/dist/define/button.js
B(customElements, {
	tagName: "en-button",
	elementClass: Et
});
//#endregion
//#region ../design-system/packages/styles/dist/internal/focus.js
var kt = o`
  ${st}
  ${I(o`.en-accordion-trigger`, { family: "button" })}
  ${I(o`:where(.en-input, .en-textarea, .en-select, .en-color-control)`, { family: "input" })}
  ${I(o`.en-option`, { family: "option" })}
  ${I(o`:where(.en-link, .en-control:not(.en-color-control), .en-checkbox, .en-radio, .en-switch,
    .en-range, .en-tab, .en-split-separator, .en-rating-item)`)}
`, At = Ze({ family: "input" }), jt = o`
  .en-field-focus-frame {
    position: relative;
    min-inline-size: 0;
    --_en-field-focus-accent-width: ${N("--en-input-focus-accent-width", M("--en-focus-accent-width"))};
  }
  .en-field-focus-frame:not(.en-number-group) { display: grid; }
  .en-field-focus-frame > :is(input, textarea) { display: block; }
  .en-field-focus-frame::after {
    content: '';
    position: absolute;
    pointer-events: none;
    inset-inline: 0;
    inset-block-end: 0;
    box-sizing: border-box;
    block-size: max(var(--_en-field-focus-accent-width), ${N("--en-control-radius", M("--en-radius-control"))});
    border-end-start-radius: ${N("--en-control-radius", M("--en-radius-control"))};
    border-end-end-radius: ${N("--en-control-radius", M("--en-radius-control"))};
    border-block-end: var(--_en-field-focus-accent-width) solid ${N("--en-input-focus-accent-color", M("--en-color-focus"))};
    clip-path: inset(calc(100% - var(--_en-field-focus-accent-width)) 0 0 0);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform ${M("--en-duration-focus-exit")} ${M("--en-ease-focus-exit")};
  }
  .en-number-group.en-field-focus-frame {
    box-shadow: 0 0 0 0 ${At.haloColor};
    transition: box-shadow ${M("--en-duration-focus-exit")} ${M("--en-ease-focus-exit")};
  }
  .en-number-group.en-field-focus-frame:focus-within {
    box-shadow: 0 0 0 ${At.haloWidth} ${At.haloColor};
    transition-duration: ${M("--en-duration-focus-enter")};
    transition-timing-function: ${M("--en-ease-focus-enter")};
  }
  .en-field-focus-frame:focus-within::after {
    transform: scaleX(1);
    transition-duration: ${M("--en-duration-focus-enter")};
    transition-timing-function: ${M("--en-ease-focus-enter")};
  }
  @media (prefers-reduced-motion: reduce) {
    .en-field-focus-frame::after, .en-field-focus-frame:focus-within::after,
    .en-number-group.en-field-focus-frame, .en-number-group.en-field-focus-frame:focus-within { transition: none; }
  }
  @media (forced-colors: active) {
    .en-field-focus-frame::after, .en-field-focus-frame:focus-within::after { border-block-end-color: Highlight; transition: none; }
    .en-number-group.en-field-focus-frame, .en-number-group.en-field-focus-frame:focus-within { box-shadow: none; transition: none; }
  }
`, Mt = L(o`
  .en-alert { display: flex; align-items: flex-start; gap: ${M("--en-space-3")}; min-inline-size: 0; padding: ${M("--en-space-4")}; border: ${M("--en-border-width")} solid ${N("--en-alert-border-color", M("--en-color-accent-border"))}; border-radius: ${M("--en-radius-container")}; background: ${N("--en-alert-background", M("--en-color-surface"))}; color: ${N("--en-alert-color", M("--en-color-text"))}; }
  .en-alert__icon { flex: none; color: ${M("--en-color-action")}; }
  .en-alert__content { min-inline-size: 0; flex: 1 1 auto; overflow-wrap: break-word; }
  .en-alert__close { flex: none; margin-inline-start: auto; }
  .en-alert[data-variant='success'] { border-color: ${N("--en-alert-border-color", M("--en-color-success-text"))}; }
  .en-alert[data-variant='warning'] { border-color: ${N("--en-alert-border-color", M("--en-color-warning-text"))}; }
  .en-alert[data-variant='danger'] { border-color: ${N("--en-alert-border-color", M("--en-color-danger-text"))}; }
  .en-alert[data-variant='success'] .en-alert__icon { color: ${M("--en-color-success-text")}; }
  .en-alert[data-variant='warning'] .en-alert__icon { color: ${M("--en-color-warning-text")}; }
  .en-alert[data-variant='danger'] .en-alert__icon { color: ${M("--en-color-danger-text")}; }
  .en-badge { display: inline-flex; align-items: center; gap: ${M("--en-space-icon-label")}; max-inline-size: 100%; padding-block: ${M("--en-space-badge-block")}; padding-inline: ${M("--en-space-badge-inline")}; border: ${M("--en-border-width")} solid ${M("--en-color-line")}; border-radius: ${N("--en-badge-radius", M("--en-radius-control"))}; background: ${N("--en-badge-background", M("--en-color-surface-subtle"))}; color: ${N("--en-badge-color", M("--en-color-text"))}; font-size: ${M("--en-font-metadata-size")}; line-height: ${M("--en-font-metadata-line-height")}; overflow-wrap: break-word; }
  .en-badge__prefix { display: contents; }
  .en-badge__label { min-inline-size: 0; }
  .en-badge[data-variant='accent'] { background: ${N("--en-badge-background", M("--en-color-accent-subtle"))}; color: ${N("--en-badge-color", M("--en-color-action-text"))}; }
  .en-badge[data-variant='success'] { color: ${N("--en-badge-color", M("--en-color-success-text"))}; }
  .en-badge[data-variant='warning'] { color: ${N("--en-badge-color", M("--en-color-warning-text"))}; }
  .en-badge[data-variant='danger'] { color: ${N("--en-badge-color", M("--en-color-danger-text"))}; }
  .en-progress, .en-progress-track { display: block; inline-size: 100%; block-size: ${N("--en-progress-size", M("--en-size-progress"))}; overflow: hidden; border: 0; border-radius: ${M("--en-radius-pill")}; background: ${N("--en-progress-track-color", M("--en-color-surface-subtle"))}; }
  .en-progress { appearance: none; accent-color: ${N("--en-progress-color", M("--en-color-action"))}; }
  .en-progress-fill { display: block; inline-size: clamp(0%, var(--en-progress-value, 0%), 100%); block-size: 100%; border-radius: inherit; background: ${N("--en-progress-color", M("--en-color-action"))}; }
  .en-progress::-webkit-progress-bar { background: ${N("--en-progress-track-color", M("--en-color-surface-subtle"))}; border-radius: inherit; }
  .en-progress::-webkit-progress-value { background: ${N("--en-progress-color", M("--en-color-action"))}; border-radius: inherit; }
  .en-progress::-moz-progress-bar { background: ${N("--en-progress-color", M("--en-color-action"))}; border-radius: inherit; }
  ${xt}
  @media (forced-colors: active) {
    .en-alert, .en-alert[data-variant], .en-badge, .en-badge[data-variant] { color: CanvasText; background: Canvas; border-color: CanvasText; }
    .en-alert__icon, .en-alert[data-variant] .en-alert__icon { color: CanvasText; }
    .en-progress, .en-progress-track { background: Canvas; border: ${M("--en-border-width")} solid CanvasText; }
    .en-progress-fill { background: Highlight; }
    .en-progress::-webkit-progress-bar { background: Canvas; }
    .en-progress::-webkit-progress-value { background: Highlight; }
    .en-progress::-moz-progress-bar { background: Highlight; }
  }
`), Nt = L(o`
  .en-icon { display: inline-flex; align-items: center; justify-content: center; flex: none; inline-size: ${N("--en-icon-size", M("--en-size-icon"))}; block-size: ${N("--en-icon-size", M("--en-size-icon"))}; vertical-align: middle; color: inherit; }
  .en-icon > :where(svg, img), .en-icon ::slotted(svg), .en-icon ::slotted(img) { display: block; inline-size: 100%; block-size: 100%; }
  svg.en-icon, .en-icon > svg, .en-icon ::slotted(svg) { display: block; stroke-width: ${M("--en-size-icon-stroke")}; }
  .en-avatar { display: inline-grid; place-items: center; vertical-align: middle; flex: none; inline-size: ${N("--en-avatar-size", M("--en-size-avatar"))}; block-size: ${N("--en-avatar-size", M("--en-size-avatar"))}; overflow: hidden; border-radius: ${N("--en-avatar-radius", M("--en-radius-pill"))}; background: ${M("--en-color-surface-subtle")}; color: ${M("--en-color-text")}; }
  .en-avatar__image { display: block; inline-size: 100%; block-size: 100%; object-fit: cover; }
  .en-avatar__fallback { font-weight: ${M("--en-font-label-strong-weight")}; }
  .en-media { display: block; max-inline-size: 100%; block-size: auto; border-radius: ${N("--en-media-radius", M("--en-radius-container"))}; aspect-ratio: ${N("--en-media-aspect-ratio", o`auto`)}; }
  @media (forced-colors: active) { .en-avatar { color: CanvasText; background: Canvas; border: ${M("--en-border-width")} solid CanvasText; } }
`);
L(o`
  :host { inline-size: max(${N("--en-swatch-size", M("--en-size-swatch"))}, ${M("--en-size-target-min")}); min-inline-size: ${M("--en-size-target-min")}; }
  .en-swatch__sample { position: relative; display: block; appearance: none; inline-size: 100%; block-size: max(${N("--en-swatch-size", M("--en-size-swatch"))}, ${M("--en-size-target-min")}); min-inline-size: ${M("--en-size-target-min")}; padding: 0; margin: 0; overflow: hidden; border: ${M("--en-border-width")} solid ${M("--en-color-boundary")}; border-radius: ${M("--en-radius-control")}; background: transparent; color: inherit; cursor: pointer; }
  @media (hover: hover) { .en-swatch__sample:not(:disabled):hover { border-color: ${M("--en-color-action")}; } }
  .en-swatch__sample:disabled { cursor: default; }
  .en-swatch__color { display: block; inline-size: 100%; block-size: 100%; }
  ${kt}
  @media (forced-colors: active) {
    .en-swatch__sample { border-color: ButtonText; background: Canvas; }
  @media (hover: hover) { .en-swatch__sample:not(:disabled):hover { border-color: ButtonText; background: Canvas; } }
    .en-swatch__sample:disabled { border-color: GrayText; }
    .en-swatch__color { forced-color-adjust: none; }
  }
`);
//#endregion
//#region ../design-system/packages/elements/dist/icon/template.js
var Pt = {
	calendar: w`<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M7 3v4m10-4v4M3 11h18"></path>`,
	check: w`<path d="m5 12 4 4L19 6" />`,
	plus: w`<path d="M12 5v14M5 12h14" />`,
	close: w`<path d="m6 6 12 12M18 6 6 18" />`,
	"chevron-left": w`<path d="m15 6-6 6 6 6" />`,
	"chevron-right": w`<path d="m9 6 6 6-6 6" />`,
	"chevron-down": w`<path d="m6 9 6 6 6-6" />`,
	"arrow-right": w`<path d="M4 12h16m-6-6 6 6-6 6" />`,
	search: w`<circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" />`,
	info: w`<circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10v1" />`,
	warning: w`<path d="m12 3 10 18H2L12 3Zm0 6v5m0 3v1" />`,
	sparkles: w`<path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3ZM20 2v4m-2-2h4" />`
}, Ft = (e, t) => C`
  <svg
    class="en-icon"
    part="base"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    focusable="false"
    role=${t ? "img" : E}
    aria-label=${t || E}
    aria-hidden=${t ? E : "true"}
  >${Pt[e] ?? E}</svg>
`, It = class extends j {
	static properties = {
		name: { type: String },
		label: { type: String }
	};
	static styles = [
		R,
		it,
		Nt
	];
	constructor() {
		super(), this.name = "info", this.label = "";
	}
	render() {
		return Ft(this.name, this.label);
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/icon.js
B(customElements, {
	tagName: "en-icon",
	elementClass: It
});
//#endregion
//#region ../design-system/packages/elements/dist/badge/template.js
var Lt = (e) => C`
  <span class="en-badge" part="base" data-variant=${e}>
    <slot class="en-badge__prefix" name="prefix"></slot><span class="en-badge__label" part="label"><slot name="label"><slot></slot></slot></span>
  </span>
`;
//#endregion
//#region ../design-system/packages/elements/dist/define/badge.js
B(customElements, {
	tagName: "en-badge",
	elementClass: class extends j {
		static properties = { variant: { reflect: !0 } };
		static styles = [
			R,
			rt,
			Mt
		];
		constructor() {
			super(), this.variant = "neutral";
		}
		render() {
			return Lt(this.variant);
		}
	}
});
//#endregion
//#region ../design-system/packages/elements/dist/internal/native-surface.js
function V(e, t) {
	e.inert === t && (e.inert = !t);
}
function Rt(e) {
	let t = e.currentTarget;
	e.target === t && (e.newState === "open" && V(t, !0), queueMicrotask(() => {
		if (!t.isConnected) return;
		let e = t.localName === "dialog" ? t.open : t.matches(":popover-open");
		V(t, e);
	}));
}
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/events.js
var zt = /* @__PURE__ */ new WeakMap();
function Bt(e, t, n, r) {
	return new ((e.ownerDocument?.defaultView?.CustomEvent) ?? globalThis.CustomEvent)(t, {
		detail: n,
		bubbles: !0,
		composed: !0,
		cancelable: r
	});
}
function Vt(e, t) {
	if (Object.is(t.previous, t.proposed)) return "unchanged";
	let n = Bt(e, "en-change", Object.freeze({
		previous: t.previous,
		proposed: t.proposed,
		reason: t.reason
	}), !0), r = {
		authorRevision: t.getRevision(),
		acceptedEpoch: zt.get(e)?.acceptedEpoch ?? 0
	}, i = zt.get(e);
	i || (i = {
		acceptedEpoch: 0,
		frames: []
	}, zt.set(e, i));
	let a = i;
	a.frames.push(r);
	let o = !1, s = () => a.frames[a.frames.length - 1] === r && t.getRevision() === r.authorRevision && a.acceptedEpoch === r.acceptedEpoch, c = () => {
		o = !0, t.rollback(t.previous);
	};
	try {
		if (t.stage(t.proposed), !s()) return o = !0, "superseded";
		let i = e.dispatchEvent(n);
		if (!s()) return o = !0, "superseded";
		if (!i) return c(), "canceled";
		let l = t.canCommit?.(t.proposed) ?? !0;
		if (l || n.preventDefault(), !s()) return o = !0, "superseded";
		if (!l) return c(), "canceled";
		a.acceptedEpoch += 1;
		let u = a.acceptedEpoch;
		return o = !0, t.commit?.(t.proposed), t.getRevision() !== r.authorRevision || a.acceptedEpoch !== u ? "superseded" : "committed";
	} catch (e) {
		if (!o && s()) try {
			c();
		} catch (t) {
			throw AggregateError([e, t], "Change transaction and its rollback both failed.");
		}
		throw e;
	} finally {
		a.frames.pop(), a.frames.length === 0 && zt.delete(e);
	}
}
function Ht(e, t) {
	e.dispatchEvent(Bt(e, "en-input", Object.freeze({ ...t }), !1));
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/surface-motion.js
var H = o`clamp(0ms, ${M("--en-duration-enter")}, 500ms)`, U = o`clamp(0ms, ${M("--en-duration-exit")}, 500ms)`, W = o`clamp(0px, ${M("--en-motion-surface-offset")}, 8px)`, Ut = o`clamp(.95, ${M("--en-motion-surface-scale")}, 1)`, Wt = o`var(--_en-surface-duration, 0ms) var(--_en-surface-ease, linear)`, Gt = o`opacity var(--_en-surface-opacity-duration, 0ms) var(--_en-surface-ease, linear), translate ${Wt}, scale ${Wt}, display ${Wt} allow-discrete, overlay ${Wt} allow-discrete`;
function Kt(e, t, n, r, i = o``) {
	let a = o`:where(${e})${i}`, s = o`${t}${i}`, c = o`${n}${i}`;
	return o`
    @supports (transition-behavior: allow-discrete) and (overlay: auto) {
      ${a} {
        --_en-surface-duration: ${U};
        --_en-surface-opacity-duration: ${U};
        --_en-surface-ease: ${M("--en-ease-exit")};
        opacity: 0;
        transition: ${Gt};
      }
      ${s} {
        --_en-surface-duration: ${H};
        /* Modal and menu entry keep content opaque. Fade surfaces reverse
           from their current opacity when reopened during exit. */
        --_en-surface-opacity-duration: ${r === "fade" ? H : o`0ms`};
        --_en-surface-ease: ${M("--en-ease-enter")};
        opacity: 1;
      }
      ${c} { pointer-events: none; }
      ${r === "elevation" ? o`
        /* Opaque command content and its primary focus contour are immediate.
           Elevation adds entry paint without corrupting measured iPhone geometry. */
        @keyframes en-surface-elevation { from { box-shadow: none; } }
        ${s} { animation: en-surface-elevation ${H} ${M("--en-ease-enter")}; }
      ` : o``}
      @starting-style { ${s} { opacity: ${r === "fade" ? 0 : 1}; } }
    }
    @media (prefers-reduced-motion: reduce) {
      ${a} { transition: none !important; animation: none !important; }
    }
    @media (forced-colors: active) {
      ${a} { animation: none; }
    }
  `;
}
var qt = o`
  ${Kt(o`dialog:is(.en-dialog, .en-drawer)`, o`dialog:is(.en-dialog, .en-drawer)[open]`, o`dialog:is(.en-dialog, .en-drawer):not([open])`, "move")}
  @supports (transition-behavior: allow-discrete) and (overlay: auto) {
    dialog:is(.en-dialog, .en-drawer) {
      --_en-surface-x: 0px;
      --_en-surface-y: ${W};
      translate: var(--_en-surface-x) var(--_en-surface-y);
      scale: ${Ut};
    }
    /* Share modal travel distance; attachment selects its axis and sign.
       Keep the drawer unscaled so its attached edge stays flush. */
    dialog.en-drawer { --_en-surface-x: ${W}; --_en-surface-y: 0px; scale: 1; }
    dialog.en-drawer:is([data-placement='start'], [data-placement='left']) { --_en-surface-x: calc(-1 * ${W}); }
    dialog.en-drawer[data-placement='end']:dir(rtl) { --_en-surface-x: calc(-1 * ${W}); }
    dialog.en-drawer[data-placement='start']:dir(rtl) { --_en-surface-x: ${W}; }
    dialog.en-drawer:is([data-placement='top'], [data-placement='bottom']) { --_en-surface-x: 0px; --_en-surface-y: ${W}; }
    dialog.en-drawer[data-placement='top'] { --_en-surface-y: calc(-1 * ${W}); }
    dialog:is(.en-dialog, .en-drawer)[open] { translate: 0px 0px; scale: 1; }
    @starting-style {
      dialog:is(.en-dialog, .en-drawer)[open] {
        translate: var(--_en-surface-x) var(--_en-surface-y);
        scale: ${Ut};
      }
      dialog.en-drawer[open] { scale: 1; }
    }
    dialog:is(.en-dialog, .en-drawer)::backdrop {
      opacity: 0;
      transition: opacity ${U} ${M("--en-ease-exit")}, display ${U} allow-discrete, overlay ${U} allow-discrete;
    }
    dialog:is(.en-dialog, .en-drawer)[open]::backdrop {
      opacity: 1;
      transition: opacity ${H} ${M("--en-ease-enter")}, display ${H} allow-discrete, overlay ${H} allow-discrete;
    }
    dialog:is(.en-dialog, .en-drawer):not([open])::backdrop { pointer-events: none; }
    @starting-style { dialog:is(.en-dialog, .en-drawer)[open]::backdrop { opacity: 0; } }
  }
  @media (prefers-reduced-motion: reduce) {
    dialog:is(.en-dialog, .en-drawer) { translate: none !important; scale: none !important; }
    dialog:is(.en-dialog, .en-drawer)::backdrop { transition: none !important; }
  }
`, Jt = o`
  .en-radio {
    flex: none;
    inline-size: ${M("--en-size-icon")};
    block-size: ${M("--en-size-icon")};
    margin: 0;
    accent-color: ${M("--en-color-action")};
    appearance: none;
    display: inline-grid;
    /* Keep the inline baseline independent of the checked-state grid dot. */
    vertical-align: middle;
    place-items: center;
    box-sizing: border-box;
    border: ${M("--en-border-width")} solid ${M("--en-color-boundary")};
    border-radius: ${M("--en-radius-pill")};
    background: ${M("--en-color-surface")};
    cursor: pointer;
  }
  .en-radio:checked { border-color: ${N("--en-radio-selected-color", M("--en-color-action"))}; }
  .en-radio:checked::before { content: ''; inline-size: ${M("--en-size-choice-dot")}; block-size: ${M("--en-size-choice-dot")}; border-radius: ${M("--en-radius-pill")}; background: ${N("--en-radio-selected-color", M("--en-color-action"))}; }
  .en-radio:disabled { cursor: default; background: ${M("--en-color-surface-subtle")}; border-color: ${M("--en-color-boundary")}; }
  .en-radio:disabled::before { background: ${M("--en-color-text-muted")}; }
  @media (forced-colors: active) {
    .en-radio { accent-color: auto; background: Canvas; border-color: CanvasText; }
    .en-radio:checked { background: Canvas; border-color: CanvasText; }
    .en-radio:checked::before { background: CanvasText; }
    .en-radio:disabled { background: Canvas; border-color: GrayText; }
    .en-radio:disabled::before { background: GrayText; }
    .en-radio:focus-visible { outline-color: CanvasText; }
  }
`;
//#endregion
//#region ../design-system/packages/styles/dist/internal/option-paint.js
function Yt(e) {
	return o`
    ${e.base} {
      /* Reset each row's state slots: a nested option must not inherit its parent's state. */
      --_en-option-selected-background: initial;
      --_en-option-selected-color: initial;
      --_en-option-active-background: initial;
      --_en-option-active-color: initial;
      --_en-option-hover-background: initial;
      --_en-option-hover-color: initial;
      --_en-option-pressed-background: initial;
      --_en-option-pressed-color: initial;
      --_en-option-disabled-background: initial;
      --_en-option-disabled-color: initial;
      --_en-option-rest-background: var(--en-option-rest-background, var(--en-option-background));
      --_en-option-rest-color: var(--en-option-rest-color, var(--en-option-color));
      background: var(--_en-option-disabled-background, var(--_en-option-pressed-background, var(--_en-option-hover-background, var(--_en-option-active-background, var(--_en-option-selected-background, var(--_en-option-rest-background, ${e.restBackground}))))));
      color: var(--_en-option-disabled-color, var(--_en-option-pressed-color, var(--_en-option-hover-color, var(--_en-option-active-color, var(--_en-option-selected-color, var(--_en-option-rest-color, ${e.restColor}))))));
      font-weight: ${N("--en-option-font-weight", o`inherit`)};
    }
    ${e.selected ? o`${e.selected} {
      --_en-option-selected-background: ${N("--en-option-selected-background", N("--en-option-background", M("--en-color-selected")))};
      --_en-option-selected-color: ${N("--en-option-selected-color", N("--en-option-color", e.selectedColor ?? e.restColor))};
      font-weight: ${N("--en-option-selected-font-weight", N("--en-option-font-weight", M("--en-font-label-strong-weight")))};
    }` : o``}
    @media (hover: hover) { ${e.hover} {
      --_en-option-hover-background: ${N("--en-option-hover-background", N("--en-option-background", e.hoverBackground))};
      /* With neither override set, the state slot is invalid and falls through
         to active/selected/rest paint, rather than resetting it. */
      --_en-option-hover-color: var(--en-option-hover-color, var(--en-option-color));
    } }
    ${e.focus ? o`${e.focus} {
      --_en-option-hover-background: ${N("--en-option-hover-background", N("--en-option-background", e.hoverBackground))};
      --_en-option-hover-color: var(--en-option-hover-color, var(--en-option-color));
    }` : o``}
    ${e.active ? o`${e.active} {
      --_en-option-active-background: var(--en-option-active-background, var(--en-option-background));
      --_en-option-active-color: var(--en-option-active-color, var(--en-option-color));
    }` : o``}
    ${e.pressed} {
      --_en-option-pressed-background: var(--en-option-pressed-background, var(--en-option-background));
      --_en-option-pressed-color: var(--en-option-pressed-color, var(--en-option-color));
    }
    ${e.disabled} {
      --_en-option-disabled-background: var(--en-option-disabled-background, var(--en-option-background));
      --_en-option-disabled-color: ${N("--en-option-disabled-color", N("--en-option-color", M("--en-color-text-muted")))};
    }
  `;
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/range.js
var Xt = o`
  block-size: ${M("--en-size-range-track")};
  border: 0;
  border-radius: ${M("--en-radius-pill")};
  background: ${M("--en-color-boundary")};
`, Zt = o`
  box-sizing: border-box;
  inline-size: ${M("--en-size-icon")};
  block-size: ${M("--en-size-icon")};
  border: ${M("--en-border-width")} solid ${M("--en-color-action")};
  border-radius: ${M("--en-radius-pill")};
  background: ${M("--en-color-action")};
`, Qt = o`outline: ${M("--en-focus-width")} solid ${M("--en-color-focus")}; outline-offset: ${M("--en-focus-offset")};`, $t = o`
  @supports selector(input::-webkit-slider-thumb) {
    .en-range { appearance: none; background: none; cursor: pointer; }
    .en-range::-webkit-slider-runnable-track { ${Xt} }
    .en-range::-webkit-slider-thumb { appearance: none; ${Zt} margin-block-start: calc((${M("--en-size-range-track")} - ${M("--en-size-icon")}) / 2); }
    /* Exposed native thumbs own focus. A global halo must not reintroduce a
       rectangular range-host ring; native unsupported fallbacks keep that route. */
    .en-range, .en-range:focus-visible { box-shadow: none; }
    .en-range:focus-visible { outline: none; }
    .en-range:focus-visible::-webkit-slider-thumb { ${Qt} }
    .en-range:disabled::-webkit-slider-thumb { background: ${M("--en-color-text-muted")}; border-color: ${M("--en-color-text-muted")}; }
    @media (forced-colors: active) {
      .en-range::-webkit-slider-runnable-track { background: ButtonText; }
      .en-range::-webkit-slider-thumb { background: Highlight; border-color: Highlight; }
      .en-range:disabled::-webkit-slider-thumb { background: GrayText; border-color: GrayText; }
      .en-range:focus-visible::-webkit-slider-thumb { outline-color: CanvasText; }
    }
  }
  @supports selector(input::-moz-range-thumb) {
    .en-range { appearance: none; background: none; cursor: pointer; }
    .en-range::-moz-range-track { ${Xt} }
    .en-range::-moz-range-thumb { ${Zt} }
    /* Exposed native thumbs own focus. A global halo must not reintroduce a
       rectangular range-host ring; native unsupported fallbacks keep that route. */
    .en-range, .en-range:focus-visible { box-shadow: none; }
    .en-range:focus-visible { outline: none; }
    .en-range:focus-visible::-moz-range-thumb { ${Qt} }
    .en-range:disabled::-moz-range-thumb { background: ${M("--en-color-text-muted")}; border-color: ${M("--en-color-text-muted")}; }
    @media (forced-colors: active) {
      .en-range::-moz-range-track { background: ButtonText; }
      .en-range::-moz-range-thumb { background: Highlight; border-color: Highlight; }
      .en-range:disabled::-moz-range-thumb { background: GrayText; border-color: GrayText; }
      .en-range:focus-visible::-moz-range-thumb { outline-color: CanvasText; }
    }
  }
  .en-range:disabled { cursor: default; }
`, en = o`
  .en-link {
    color: ${M("--en-color-link")};
    text-decoration: underline;
    text-underline-offset: ${M("--en-space-0-5")};
    overflow-wrap: break-word;
  }
  .en-link:visited { color: ${M("--en-color-link")}; }
`, tn = o`.en-link[aria-disabled='true'] { color: ${M("--en-color-text-muted")}; cursor: default; }`, nn = o`.en-link, .en-link:visited { color: LinkText; }`, rn = N("--en-control-inline-padding", N("--en-input-inline-padding", M("--en-space-control-inline"))), an = N("--en-control-radius", M("--en-radius-control")), on = o`max(0px, ${an} - ${M("--en-border-width")})`, sn = o`max(
  ${M("--en-space-control-block")},
  calc((var(--_en-text-control-block-size) - ${M("--en-font-input-size")} * ${M("--en-font-input-line-height")}) / 2 - ${M("--en-border-width")})
)`, cn = L(o`
  /* Compute on each consumer so local token/part overrides retain their scope. */
  ${dt(o`.en-button:not(.en-icon-button), .en-button[data-icon-only], .en-input, .en-textarea, .en-select, .en-number-input, .en-number-step, .en-color-control`)}
  ${ft(o`.en-control, .en-button, .en-input, .en-textarea, .en-select`)}
  ${pt(o`.en-button:not(.en-icon-button), .en-input, .en-textarea, .en-select`)}
  /* Field tokens customize inputs without changing action and choice surfaces.
     Existing direct control overrides retain their higher precedence. */
  .en-input, .en-textarea, .en-select {
    padding-inline: ${rn};
    background: ${N("--en-control-background", N("--en-input-background", M("--en-color-surface")))};
    color: ${N("--en-control-color", N("--en-input-color", M("--en-color-text")))};
  }
  ${at}
  ${en}
  ${mt(o`:is(.en-button, .en-input, .en-textarea, .en-select, .en-control):is(:disabled, [aria-disabled='true'])`)}
  ${tn}
  .en-input, .en-textarea, .en-select {
    inline-size: 100%;
    font: ${M("--en-font-input-weight")} ${M("--en-font-input-size")} / ${M("--en-font-input-line-height")} ${M("--en-font-input-family")};
  }
  /* Use the shared text-field surface and target envelope around the native
     date editor. Keep its fields, separators and calendar-picker activation. */
  .en-input[type='date'] {
    -webkit-appearance: none;
    appearance: none;
    padding-block: ${sn};
  }
  .en-input[type='date']::-webkit-datetime-edit { padding: 0; }
  .en-input[type='date']::-webkit-datetime-edit-fields-wrapper { padding-block: 0; }
  .en-input[type='date']::-webkit-datetime-edit-year-field,
  .en-input[type='date']::-webkit-datetime-edit-month-field,
  .en-input[type='date']::-webkit-datetime-edit-day-field { padding-block: 0; }
  .en-input[type='date']::-webkit-date-and-time-value {
    margin-block: 0;
    text-align: inherit;
  }
  .en-input::placeholder, .en-textarea::placeholder { color: ${M("--en-color-text-muted")}; opacity: 1; }
  .en-text-input, .en-textarea { padding-block: ${sn}; }
  .en-textarea { resize: block; }
  .en-input[aria-invalid='true'], .en-textarea[aria-invalid='true'], .en-select[aria-invalid='true'], .en-control[data-invalid] {
    border-color: ${M("--en-color-danger-text")};
  }
  .en-input:user-invalid, .en-textarea:user-invalid, .en-select:user-invalid { border-color: ${M("--en-color-danger-text")}; }
  /* The text-field marker keeps stronger invalid geometry out of other native controls.
     Preserve border + padding on each edge, including scoped padding/base-border tokens. */
  .en-text-input:is([aria-invalid='true'], :user-invalid) {
    border-width: ${M("--en-border-invalid-width")};
    padding-block: max(0px, calc(${sn} + ${M("--en-border-width")} - ${M("--en-border-invalid-width")}));
    padding-inline: max(0px, calc(${rn} + ${M("--en-border-width")} - ${M("--en-border-invalid-width")}));
  }
  .en-input-group { display: flex; align-items: stretch; gap: ${M("--en-space-1")}; min-inline-size: 0; }
  .en-input-group > .en-input { flex: 1 1 auto; inline-size: 0; min-inline-size: 0; }
  .en-number-group {
    gap: 0;
    padding: 0;
    border: ${M("--en-border-width")} solid ${N("--en-control-border-color", M("--en-color-boundary"))};
    border-radius: ${an};
    background: ${N("--en-control-background", N("--en-input-background", M("--en-color-surface")))};
  }
  .en-number-group[data-invalid] { border-color: ${M("--en-color-danger-text")}; }
  .en-number-group > :is(.en-number-input, .en-number-step) { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${M("--en-border-width")}), ${M("--en-size-target-min")}); }
  .en-number-group > .en-number-input { border: 0; border-radius: 0; background: none; appearance: textfield; }
  .en-number-input::-webkit-inner-spin-button, .en-number-input::-webkit-outer-spin-button { appearance: none; margin: 0; }
  .en-number-step {
    flex: none;
    min-inline-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-min")});
    padding-inline: ${M("--en-space-control-block")};
    border: 0;
    border-inline-start: ${M("--en-border-width")} solid ${M("--en-color-line")};
    border-radius: 0;
    background: ${M("--en-color-surface-subtle")};
    color: ${M("--en-color-text")};
  }
  /* Match the frame's override as well as its token. Keep overflow visible so
     consumer-defined outward focus contours remain intact. */
  .en-number-step:last-child { border-start-end-radius: ${on}; border-end-end-radius: ${on}; }
  .en-number-step:first-child { border-inline-start: 0; border-inline-end: ${M("--en-border-width")} solid ${M("--en-color-line")}; border-start-start-radius: ${on}; border-end-start-radius: ${on}; }

  .en-color-control { cursor: pointer; padding: ${M("--en-space-control-block")}; block-size: var(--_en-text-control-block-size); }
  .en-color-control::-webkit-color-swatch-wrapper { padding: 0; }
  .en-color-control::-webkit-color-swatch { border: ${M("--en-border-width")} solid ${M("--en-color-boundary")}; border-radius: max(0px, ${M("--en-radius-control")} - ${M("--en-space-control-block")}); }
  .en-color-control::-moz-color-swatch { border: ${M("--en-border-width")} solid ${M("--en-color-boundary")}; border-radius: max(0px, ${M("--en-radius-control")} - ${M("--en-space-control-block")}); }
  ${Jt}
  .en-checkbox, .en-switch {
    flex: none;
    inline-size: ${M("--en-size-icon")};
    block-size: ${M("--en-size-icon")};
    margin: 0;
    accent-color: ${M("--en-color-action")};
  }
  .en-checkbox {
    appearance: none;
    display: inline-grid;
    place-items: center;
    box-sizing: border-box;
    border: ${M("--en-border-width")} solid ${M("--en-color-boundary")};
    background: ${M("--en-color-surface")};
    cursor: pointer;
  }
  .en-checkbox { border-radius: ${M("--en-radius-choice")}; }
  .en-checkbox:checked, .en-checkbox:indeterminate { background: ${M("--en-color-action")}; border-color: ${M("--en-color-action")}; }
  .en-checkbox:checked::before {
    content: '';
    box-sizing: border-box;
    inline-size: ${M("--en-size-choice-mark-inline")};
    block-size: ${M("--en-size-choice-mark-block")};
    /* The check is directional artwork, not an inline-layout edge; never mirror it in RTL. */
    border-right: ${M("--en-size-choice-mark-stroke")} solid ${M("--en-color-on-action")};
    border-bottom: ${M("--en-size-choice-mark-stroke")} solid ${M("--en-color-on-action")};
    transform: rotate(45deg);
  }
  .en-checkbox:indeterminate::before { content: ''; inline-size: ${M("--en-size-choice-mark-block")}; block-size: 0; border: 0; border-block-end: ${M("--en-size-choice-mark-stroke")} solid ${M("--en-color-on-action")}; transform: none; }
  .en-checkbox:disabled { cursor: default; background: ${M("--en-color-surface-subtle")}; border-color: ${M("--en-color-boundary")}; }
  .en-checkbox:disabled::before { border-color: ${M("--en-color-text-muted")}; }
  .en-switch {
    position: relative;
    appearance: none;
    box-sizing: border-box;
    inline-size: ${M("--en-size-switch-inline")};
    block-size: ${M("--en-size-switch-block")};
    border: ${M("--en-border-width")} solid ${M("--en-color-boundary")};
    border-radius: ${M("--en-radius-pill")};
    background: ${M("--en-color-surface-subtle")};
    cursor: pointer;
  }
  .en-switch::before {
    content: '';
    position: absolute;
    inset-block-start: ${M("--en-space-switch-inset")};
    inset-inline-start: ${M("--en-space-switch-inset")};
    inline-size: ${M("--en-size-switch-thumb")};
    block-size: ${M("--en-size-switch-thumb")};
    border-radius: ${M("--en-radius-pill")};
    background: ${M("--en-color-text-muted")};
    transition: inset-inline-start ${M("--en-duration-fast")} ${M("--en-ease-standard")};
  }
  .en-switch:checked { background: ${M("--en-color-action")}; border-color: ${M("--en-color-action")}; }
  .en-switch:checked::before { inset-inline-start: calc(100% - ${M("--en-size-switch-thumb")} - ${M("--en-space-switch-inset")}); background: ${M("--en-color-on-action")}; }
  .en-switch:disabled { cursor: default; border-color: ${M("--en-color-boundary")}; background: ${M("--en-color-surface-subtle")}; }
  .en-switch:disabled::before { background: ${M("--en-color-text-muted")}; }
  .en-range { inline-size: 100%; min-inline-size: ${M("--en-size-target-min")}; min-block-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-min")}); margin: 0; accent-color: ${M("--en-color-action")}; }
  .en-range-row { display: flex; align-items: center; gap: ${M("--en-space-3")}; min-inline-size: 0; }
  .en-range-row > .en-range { flex: 1 1 auto; inline-size: 0; }
  .en-range-row[data-editable] { flex-wrap: wrap; }
  .en-range-row > .en-range-editor {
    flex: 0 1 calc(3 * ${M("--en-size-control-min")});
    inline-size: calc(3 * ${M("--en-size-control-min")});
    min-inline-size: min(100%, ${M("--en-size-target-min")});
    font-variant-numeric: tabular-nums;
  }
  /* The value axis alone becomes vertical. Labels, output and number editing
     retain the surrounding writing direction and normal text layout. */
  .en-range-row[data-orientation='vertical'] { flex-direction: column; flex-wrap: nowrap; }
  .en-range-row[data-orientation='vertical'] > .en-range {
    writing-mode: vertical-lr;
    direction: rtl;
    flex: none;
    inline-size: ${N("--en-slider-length", M("--en-size-range-length"))};
    min-inline-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-min")});
    block-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-min")});
  }
  .en-range-row[data-orientation='vertical'] > .en-range-editor {
    flex: none;
    inline-size: min(100%, calc(3 * ${M("--en-size-control-min")}));
  }
  .en-range-error[data-pending] { visibility: hidden; }
  .en-range-row > output { flex: none; font-variant-numeric: tabular-nums; color: ${M("--en-color-text")}; }
  ${kt}
  ${jt}
  ${I(o`.en-number-group > .en-number-input`, {
	family: "input",
	inset: !0,
	halo: !1
})}
  ${I(o`.en-number-group > .en-number-step`, {
	family: "button",
	inset: !0,
	halo: !1
})}
  ${$t}
  @media (any-pointer: coarse) {
    ${dt(o`.en-button:not(.en-icon-button), .en-button[data-icon-only], .en-input, .en-textarea, .en-select, .en-number-input, .en-number-step, .en-color-control`, !0)}
    ${ht(o`.en-button, .en-control, .en-input, .en-textarea, .en-select, .en-range`)}
    .en-range-row[data-orientation='vertical'] > .en-range { min-inline-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-touch")}); }
    ${pt(o`.en-button:not(.en-icon-button), .en-input, .en-textarea, .en-select`)}
    .en-color-control { block-size: var(--_en-text-control-block-size); }
    ${gt(o`.en-icon-button, .en-number-step`)}
    .en-number-group > :is(.en-number-input, .en-number-step) { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${M("--en-border-width")}), ${M("--en-size-target-touch")}); }
  }
  @media (prefers-reduced-motion: reduce) { ${_t(o`.en-button, .en-switch::before`)} }
  @media (forced-colors: active) {
    ${vt(o`.en-button, .en-control, .en-input, .en-textarea, .en-select, .en-number-group`)}
    ${nn}
    ${yt(o`:is(.en-button, .en-control, .en-input, .en-textarea, .en-select):is(:disabled, [aria-disabled='true']), .en-link[aria-disabled='true']`)}
    ${ct}
    .en-checkbox, .en-switch, .en-range { accent-color: auto; }
    .en-checkbox { background: Canvas; border-color: CanvasText; }
    .en-checkbox:checked, .en-checkbox:indeterminate { background: Canvas; border-color: CanvasText; }
    .en-checkbox::before { border-color: CanvasText; }
    .en-checkbox:disabled { background: Canvas; border-color: GrayText; }
    .en-checkbox:disabled::before { border-color: GrayText; }
    .en-checkbox:focus-visible, .en-switch:focus-visible { outline-color: CanvasText; }
    .en-switch { background: Canvas; border-color: ButtonText; }
    .en-switch::before { background: ButtonText; }
    .en-switch:checked { background: Highlight; border-color: Highlight; }
    .en-switch:checked::before { background: HighlightText; }
    .en-switch:disabled { background: Canvas; border-color: GrayText; }
    .en-switch:disabled::before { background: GrayText; }
  }
`), ln = N("--en-option-list-radius", N("--en-overlay-radius", M("--en-radius-container"))), un = o`max(${N("--en-option-list-padding", N("--en-overlay-padding", M("--en-space-1")))}, ${F({
	family: "option",
	inset: !0
})})`, dn = o`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;
L(o`
  /* Styling the closed control does not replace its OS picker. Keep this
     fallback outside base-select; ordinary select pseudos are not portable. */
  @supports selector(:has(> .en-select)) {
    @supports not ((appearance: base-select) and selector(::picker(select))) {
      .en-select {
        -webkit-appearance: none;
        appearance: none;
        padding-inline-end: calc(${rn} + ${M("--en-size-icon")} + ${M("--en-space-icon-label")});
        min-block-size: max(var(--_en-text-control-block-size), calc(${M("--en-size-icon")} + 2 * ${M("--en-space-control-block")} + 2 * ${M("--en-border-width")}));
      }
      .en-field-focus-frame:has(> .en-select)::before {
        content: '';
        position: absolute;
        z-index: 1;
        inset-inline-end: calc(${rn} + ${M("--en-border-width")});
        inset-block-start: 50%;
        translate: 0 -50%;
        inline-size: ${M("--en-size-icon")};
        block-size: ${M("--en-size-icon")};
        color: ${M("--en-color-text-muted")};
        background-color: currentColor;
        mask: ${dn} center / contain no-repeat;
        pointer-events: none;
      }
      @media (forced-colors: active) {
        .en-field-focus-frame:has(> .en-select)::before { forced-color-adjust: none; color: ButtonText; }
        .en-field-focus-frame:has(> .en-select:disabled)::before { color: GrayText; }
      }
    }
  }
  @supports (appearance: base-select) and selector(::picker(select)) {
    .en-select, .en-select::picker(select) { appearance: ${N("--en-select-appearance", o`base-select`)}; }
    .en-select { align-items: center; gap: ${M("--en-space-icon-label")}; }
    .en-select::picker(select) {
      padding: ${un};
      border: ${M("--en-border-width")} solid ${N("--en-option-list-border-color", N("--en-overlay-border-color", M("--en-color-boundary")))};
      border-radius: ${ln};
      background: ${N("--en-option-list-background", N("--en-overlay-background", M("--en-color-surface-raised")))};
      color: ${N("--en-option-list-color", N("--en-overlay-color", M("--en-color-text")))};
      box-shadow: ${N("--en-option-list-shadow", M("--en-shadow-overlay"))};
      max-block-size: min(${N("--en-option-list-max-block-size", N("--en-overlay-max-block-size", M("--en-layout-panel-preferred")))}, calc(100dvh - ${M("--en-space-8")}));
      overflow: auto;
    }
    ${Kt(o`.en-select`, o`.en-select:open`, o`.en-select:not(:open)`, "fade", o`::picker(select)`)}
    .en-select option {
      position: relative;
      min-block-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-min")});
      padding: ${N("--en-option-block-padding", M("--en-space-control-block"))} ${N("--en-option-inline-padding", M("--en-space-control-inline"))};
      border-radius: ${N("--en-option-radius", o`max(0px, ${ln} - ${un} - ${M("--en-border-width")})`)};
    }
    .en-select option + option { margin-block-start: ${N("--en-option-list-gap", o`0px`)}; }
    ${Yt({
	base: o`.en-select option`,
	selected: o`.en-select option:checked`,
	hover: o`.en-select option:not(:disabled):hover`,
	focus: o`.en-select option:not(:disabled):focus-visible`,
	pressed: o`.en-select option:not(:disabled):active`,
	disabled: o`.en-select option:disabled`,
	restBackground: o`transparent`,
	restColor: N("--en-option-list-color", N("--en-overlay-color", o`inherit`)),
	selectedColor: N("--en-option-list-color", N("--en-overlay-color", M("--en-color-action-text"))),
	hoverBackground: M("--en-color-selected")
})}
    .en-select option:not(:disabled):focus-visible { z-index: 1; }
    @media (hover: hover) { .en-select option:not(:disabled):hover { z-index: 1; } }
    /* Native :active is pressed activation, not the combobox's keyboard candidate. */
    ${et(o`.en-select option:not(:disabled):focus-visible`, {
	family: "option",
	inset: !0,
	restSelector: o`.en-select option`
})}
    @media (hover: hover) { ${et(o`.en-select option:not(:disabled):hover`, {
	family: "option",
	inset: !0,
	restSelector: o`.en-select option`
})} }
    .en-select::picker-icon {
      content: '';
      inline-size: ${M("--en-size-icon")};
      block-size: ${M("--en-size-icon")};
      flex: none;
      color: ${M("--en-color-text-muted")};
      background-color: currentColor;
      mask: ${dn} center / contain no-repeat;
    }
    @media (any-pointer: coarse) { .en-select option { min-block-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-touch")}); } }
    @media (forced-colors: active) {
      .en-select::picker(select) { background: Canvas; color: CanvasText; border-color: ButtonText; box-shadow: none; }
      .en-select option { background: Canvas; color: CanvasText; }
      .en-select option:checked, .en-select option:not(:disabled):focus-visible { background: Highlight; color: HighlightText; outline-color: HighlightText; }
      @media (hover: hover) { .en-select option:not(:disabled):hover { background: Highlight; color: HighlightText; outline-color: HighlightText; } }
      .en-select option:disabled { color: GrayText; }
      /* Keep the decorative mask visible while using the user's system colors. */
      .en-select::picker-icon { forced-color-adjust: none; color: ButtonText; }
      .en-select:disabled::picker-icon { color: GrayText; }
    }
  }
`);
var fn = L(o`
  .en-field, .en-rating-field { --_en-field-gap: ${N("--en-field-gap", M("--en-space-label-control"))}; }
  .en-field { display: flex; flex-direction: column; min-inline-size: 0; gap: 0; }
  .en-field > :not(:first-child):not(.en-description),
  .en-choice-content > :not(:first-child):not(.en-description) { margin-block-start: var(--_en-field-gap); }
  /* A fieldset legend already separates its first content through its margin. */
  .en-field > .en-legend + :not(.en-description) { margin-block-start: 0; }
  .en-label { display: block; color: ${M("--en-color-text")}; font-weight: ${M("--en-font-label-strong-weight")}; overflow-wrap: break-word; }
  .en-description, .en-error { margin: 0; font-size: ${M("--en-font-ui-size")}; line-height: ${M("--en-font-body-line-height")}; overflow-wrap: break-word; }
  /* No box or gap is created by the empty fallback. An assigned root remains
     present even when its light DOM is empty: it may render its own shadow. */
  .en-description { display: flow-root; color: ${M("--en-color-text-muted")}; }
  .en-description-fallback,
  .en-description > slot::slotted(:not([hidden])) { display: block; margin-block-start: var(--_en-field-gap); }
  .en-description-fallback:empty { display: none; }
  .en-error { color: ${M("--en-color-danger-text")}; }
  .en-choice { display: flex; align-items: center; gap: ${M("--en-space-icon-label")}; min-block-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-min")}); min-inline-size: ${M("--en-size-target-min")}; cursor: pointer; }
  .en-choice > :where(.en-label, .en-choice-content) { min-inline-size: 0; }
  .en-choice-content { --_en-field-gap: ${N("--en-field-gap", M("--en-space-control-description"))}; display: flex; flex-direction: column; gap: 0; }
  .en-fieldset { margin: 0; padding: 0; min-inline-size: 0; border: 0; }
  .en-legend { padding: 0; margin-block-end: ${M("--en-space-label-control")}; font-weight: ${M("--en-font-label-strong-weight")}; }
  .en-form-stack { display: flex; flex-direction: column; gap: ${M("--en-space-fields")}; }
  .en-validation-summary { padding: ${M("--en-space-panel")}; border: ${M("--en-border-width")} solid ${M("--en-color-danger-text")}; border-radius: ${M("--en-radius-container")}; }
  .en-validation-summary :where(ul, ol) { padding-inline-start: ${M("--en-space-6")}; }
  @media (any-pointer: coarse) { .en-choice { min-block-size: ${M("--en-size-target-touch")}; } }
  @media (forced-colors: active) { .en-label, .en-description, .en-error { color: CanvasText; } .en-validation-summary { border-color: CanvasText; } }
`), pn = `(width < ${Ge("--en-layout-dialog-collapse")})`, mn = L(o`
  .en-dialog, .en-drawer, .en-popover, .en-tooltip {
    box-sizing: border-box;
    min-inline-size: 0;
    max-inline-size: min(${N("--en-overlay-max-inline-size", M("--en-layout-form-max"))}, calc(100% - ${M("--en-space-8")}));
    max-block-size: ${N("--en-overlay-max-block-size", o`calc(100dvh - ${M("--en-space-8")})`)};
    padding: ${N("--en-overlay-padding", M("--en-space-panel"))};
    border: ${M("--en-border-width")} solid ${N("--en-overlay-border-color", M("--en-color-boundary"))};
    border-radius: ${N("--en-overlay-radius", M("--en-radius-dialog"))};
    background: ${N("--en-overlay-background", M("--en-color-surface-raised"))};
    color: ${N("--en-overlay-color", M("--en-color-text"))};
    font: inherit;
    text-align: start;
    overflow: auto;
    box-shadow: ${M("--en-shadow-overlay")};
  }
  ${Kt(o`.en-popover[popover]`, o`.en-popover:popover-open`, o`.en-popover[popover]:not(:popover-open)`, "fade")}
  ${Kt(o`.en-tooltip[popover]`, o`.en-tooltip:popover-open`, o`.en-tooltip[popover]:not(:popover-open)`, "fade")}
  ${qt}
  .en-dialog { position: fixed; inset: 0; margin: auto; box-shadow: ${M("--en-shadow-dialog")}; }
  dialog.en-dialog, dialog.en-drawer { flex-direction: column; gap: ${M("--en-space-4")}; }
  dialog.en-dialog[open], dialog.en-drawer[open] { display: flex; }
  dialog.en-dialog:not([open]), dialog.en-drawer:not([open]) { display: none; }
  .en-dialog::backdrop, .en-drawer::backdrop { background: ${M("--en-color-scrim")}; }
  .en-overlay-header, .en-overlay-footer { display: flex; align-items: center; flex-wrap: wrap; gap: ${M("--en-space-3")}; min-inline-size: 0; }
  .en-overlay-header { justify-content: space-between; }
  .en-overlay-footer { justify-content: flex-end; gap: ${M("--en-space-actions")}; }
  .en-overlay-header > slot, .en-overlay-footer > slot { display: contents; }
  .en-overlay-body {
    --_en-overlay-focus-clearance: ${Qe};
    min-inline-size: 0;
    min-block-size: 0;
    /* Expand the scrollport without moving content or changing the surrounding gaps. */
    margin: calc(0px - var(--_en-overlay-focus-clearance));
    padding: var(--_en-overlay-focus-clearance);
    scroll-padding: var(--_en-overlay-focus-clearance);
    overflow: auto;
  }
  .en-overlay-close { margin-inline-start: auto; }
  .en-popover { position: fixed; display: flex; flex-direction: column; margin: 0; row-gap: ${M("--en-space-4")}; border-radius: ${N("--en-overlay-radius", M("--en-radius-container"))}; }
  [popover].en-popover:not(:popover-open), [popover].en-tooltip:not(:popover-open) { display: none; }
  .en-tooltip { position: fixed; margin: 0; row-gap: ${M("--en-space-2")}; padding: ${N("--en-overlay-padding", M("--en-space-2"))}; border-radius: ${N("--en-overlay-radius", M("--en-radius-control"))}; overflow-wrap: break-word; }
  /* An outside separator is clipped at viewport-flush edges, even for a drawer
     that fills the whole viewport. Keep it separate from the immediate focus cue. */
  :where(.en-drawer) { outline: ${M("--en-border-width")} solid ${N("--en-overlay-border-color", M("--en-color-boundary"))}; outline-offset: 0; }
  ${I(o`:where(.en-dialog, .en-drawer)`, {
	family: "overlay",
	baseShadow: M("--en-shadow-dialog"),
	baseTransitions: Gt
})}
  ${I(o`.en-popover`, {
	family: "overlay",
	baseShadow: M("--en-shadow-overlay"),
	baseTransitions: Gt
})}
  .en-drawer {
    position: fixed;
    margin: 0;
    inset: auto;
    inset-block: 0;
    inset-inline-end: 0;
    inline-size: min(${N("--en-overlay-max-inline-size", M("--en-layout-form-max"))}, 100%);
    max-inline-size: 100%;
    block-size: 100%;
    max-block-size: 100%;
    border-radius: 0;
    border-width: 0;
    box-shadow: ${M("--en-shadow-dialog")};
  }
  .en-drawer[data-placement='start'] { inset-inline-end: auto; inset-inline-start: 0; }
  .en-drawer[data-placement='left'] { inset-inline: auto; left: 0; right: auto; }
  .en-drawer[data-placement='right'] { inset-inline: auto; left: auto; right: 0; }
  .en-drawer[data-placement='top'], .en-drawer[data-placement='bottom'] { inset-inline: 0; inline-size: 100%; block-size: auto; max-block-size: ${N("--en-overlay-max-block-size", o`calc(100dvh - ${M("--en-space-8")})`)}; }
  .en-drawer[data-placement='top'] { inset-block-start: 0; inset-block-end: auto; }
  .en-drawer[data-placement='bottom'] { inset-block-start: auto; inset-block-end: 0; }
  @media (forced-colors: active) {
    .en-dialog, .en-drawer, .en-popover, .en-tooltip { color: CanvasText; background: Canvas; border-color: CanvasText; box-shadow: none; }
    :where(.en-drawer) { outline-color: CanvasText; }
    :where(.en-dialog, .en-drawer, .en-popover):focus-visible { outline-color: Highlight; }
  }
`);
//#endregion
//#region ../design-system/packages/elements/dist/dialog/template.js
function hn(e) {
	return C`
    <dialog class=${e.surfaceClass} part=${e.surfacePart ?? "surface"} data-placement=${e.placement}
      aria-labelledby="en-overlay-heading" closedby=${e.closedBy}
      inert @beforetoggle=${Rt} @cancel=${e.cancel} @close=${e.close}
      @pointerdown=${e.pointerDown} @pointerup=${e.pointerUp}
      @pointercancel=${e.pointerCancel} @keydown=${e.keyDown}>
      <div class="en-overlay-header" part="header">
        <h2 class="en-heading-small" id="en-overlay-heading" part="heading"><slot name="label">${e.label}</slot></h2>
        ${e.dismissible ? C`
          <en-button class="en-overlay-close" variant="ghost" icon-only size="inherit"
            exportparts="control:close" @click=${e.dismiss}>
            <en-icon slot="prefix" name="close" size="inherit"></en-icon>
            <span slot="label">${e.closeLabel}</span>
          </en-button>
        ` : null}
      </div>
      <div class="en-overlay-body" part="body">${e.body ?? C`<slot></slot>`}</div>
      ${e.footer === E ? E : C`<div class="en-overlay-footer" part="footer">${e.footer ?? C`<slot name="footer"></slot>`}</div>`}
    </dialog>`;
}
//#endregion
//#region ../design-system/packages/elements/dist/internal/id-reference.js
function gn(e) {
	let t = e.getRootNode();
	return (t.nodeType === 9 || t.nodeType === 11 && "host" in t) && "getElementById" in t ? t : null;
}
var _n = /* @__PURE__ */ new WeakMap(), vn = class {
	root;
	subscribers = /* @__PURE__ */ new Map();
	resolved = /* @__PURE__ */ new Map();
	observer;
	constructor(e) {
		this.root = e;
		let t = (e.nodeType === 9 ? e : e.ownerDocument)?.defaultView?.MutationObserver;
		this.observer = t ? new t((e) => {
			let t = /* @__PURE__ */ new Set();
			for (let n of e) {
				if (n.type === "childList") {
					if (![...n.addedNodes, ...n.removedNodes].some((e) => e.nodeType === 1)) continue;
					for (let e of this.subscribers.keys()) t.add(e);
					break;
				}
				n.oldValue && t.add(n.oldValue);
				let e = n.target.id;
				e && t.add(e);
			}
			for (let e of t) this.notify(e);
		}) : void 0, this.observer?.observe(e, {
			childList: !0,
			subtree: !0,
			attributes: !0,
			attributeFilter: ["id"],
			attributeOldValue: !0
		});
	}
	notify(e) {
		let t = this.subscribers.get(e);
		if (!t) return;
		let n = this.root.getElementById(e);
		if (!(this.resolved.has(e) && this.resolved.get(e) === n)) {
			this.resolved.set(e, n);
			for (let r of [...t]) this.subscribers.get(e) === t && t.has(r) && r(n);
		}
	}
	subscribe(e, t) {
		let n = this.subscribers.get(e);
		n || this.subscribers.set(e, n = /* @__PURE__ */ new Set()), n.add(t);
		let r = this.root.getElementById(e);
		if (!this.resolved.has(e) || this.resolved.get(e) !== r) {
			this.resolved.set(e, r);
			for (let t of [...n]) this.subscribers.get(e) === n && n.has(t) && t(r);
		} else t(r);
		let i = !1;
		return () => {
			i || (i = !0, n.delete(t), !n.size && this.subscribers.get(e) === n && (this.subscribers.delete(e), this.resolved.delete(e)), this.subscribers.size || (this.observer?.disconnect(), _n.get(this.root) === this && _n.delete(this.root)));
		};
	}
};
function yn(e, t, n) {
	if (!e || !t) return n(null), () => {};
	if (!(e.nodeType === 9 ? e : e.ownerDocument)?.defaultView?.MutationObserver) return n(e.getElementById(t)), () => {};
	let r = _n.get(e);
	return r || _n.set(e, r = new vn(e)), r.subscribe(t, n);
}
//#endregion
//#region ../design-system/packages/elements/dist/dialog/trigger-controller.js
var bn = class {
	host;
	options;
	#e = null;
	#t = "";
	#n;
	#r = null;
	#i = {};
	#a = {};
	constructor(e, t) {
		this.host = e, this.options = t, e.addController(this);
	}
	hostConnected() {
		this.hostUpdated();
	}
	hostUpdated() {
		if (!this.host.isConnected) return;
		let e = gn(this.host), t = typeof this.options.id() == "string" ? this.options.id() : "";
		(!this.#n || e !== this.#e || t !== this.#t) && (this.#n?.(), this.#n = void 0, this.#e = e, this.#t = t, this.#n = yn(e, t, this.accept)), this.sync();
	}
	hostDisconnected() {
		this.#n?.(), this.#n = void 0, this.#e = null, this.#t = "", this.detach();
	}
	accept = (e) => {
		let t = this.host.isConnected && e?.namespaceURI === "http://www.w3.org/1999/xhtml" && (e.localName === "button" || e.localName === "en-button") ? e : null;
		t !== this.#r && (this.detach(), this.#r = t, t && (this.#i = Object.fromEntries(["aria-haspopup", "aria-expanded"].map((e) => [e, t.getAttribute(e)])), t.addEventListener("click", this.click), this.sync()));
	};
	click = (e) => {
		let t = this.#r, n = () => !(!this.host.isConnected || !t?.isConnected || t !== this.#r || this.options.id() !== this.#t || gn(this.host) !== this.#e || this.#e?.getElementById(this.#t) !== t || t.disabled || t.loading || t.matches(":disabled,[aria-disabled=\"true\"]"));
		!e.defaultPrevented && t && n() && (e.preventDefault(), this.options.activate(t, n));
	};
	sync() {
		if (this.#r) for (let [e, t] of Object.entries({
			"aria-haspopup": "dialog",
			"aria-expanded": String(this.options.open())
		})) this.#r.getAttribute(e) !== t && this.#r.setAttribute(e, t), this.#a[e] = t;
	}
	detach() {
		let e = this.#r;
		if (e) {
			e.removeEventListener("click", this.click);
			for (let [t, n] of Object.entries(this.#i)) e.getAttribute(t) === this.#a[t] && (n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
		}
		this.#r = null, this.#i = {}, this.#a = {};
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/dialog/focus.js
function xn(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
	return t;
}
function Sn(e) {
	if (!e?.isConnected || e.matches(":disabled, [hidden], [aria-disabled=\"true\"]")) return;
	let t = e;
	for (; t;) {
		if ("inert" in t && (t.inert || t.hidden)) return;
		t = t.parentNode ?? ("host" in t ? t.host : null);
	}
	e.getClientRects().length && e.focus({ preventScroll: !0 });
}
function Cn(e, t) {
	for (; t;) {
		if (t === e) return !0;
		t = "assignedSlot" in t && t.assignedSlot || t.parentNode || ("host" in t ? t.host : null);
	}
	return !1;
}
//#endregion
//#region ../design-system/packages/elements/dist/define/dialog.js
B(customElements, {
	tagName: "en-dialog",
	elementClass: class extends j {
		static properties = {
			for: {
				type: String,
				reflect: !0
			},
			open: {
				type: Boolean,
				reflect: !0,
				noAccessor: !0
			},
			label: { type: String },
			closeLabel: {
				type: String,
				attribute: "close-label"
			},
			closedBy: {
				type: String,
				attribute: "closedby",
				reflect: !0,
				noAccessor: !0
			},
			dismissible: { type: Boolean },
			backdropDismiss: {
				type: Boolean,
				attribute: "backdrop-dismiss",
				noAccessor: !0
			},
			presentation: {
				type: String,
				reflect: !0
			},
			responsiveQuery: {
				type: String,
				attribute: "responsive-query"
			}
		};
		static styles = [
			R,
			tt,
			cn,
			mn
		];
		#e = !1;
		#t = 0;
		#n = 0;
		#r = 0;
		#i = !1;
		#a = null;
		#o = null;
		#s = null;
		#c = new bn(this, {
			id: () => this.for,
			open: () => this.#r ? this.#i : this.open,
			activate: (e, t) => {
				let n = !this.triggerToggles || !this.open;
				this.requestOpen(n, "trigger", t) === "committed" && n && this.open && t() && (this.#s = {
					element: e,
					revision: this.#n
				});
			}
		});
		#l = null;
		#u = "close-request";
		#d = "closerequest";
		#f = null;
		#p = "";
		#m = !1;
		get open() {
			return this.#e;
		}
		set open(e) {
			let t = this.#e;
			this.#s = null, this.#e = !!e, this.#t++, this.#n++, this.#e && !this.dialog?.open && (this.#i = !1), this.requestUpdate("open", t);
		}
		get closedBy() {
			return this.#d;
		}
		set closedBy(e) {
			let t = this.#d;
			this.#d = e === "any" || e === "none" ? e : "closerequest", this.requestUpdate("closedBy", t), this.requestUpdate("backdropDismiss", t === "any");
		}
		get backdropDismiss() {
			return this.closedBy === "any";
		}
		set backdropDismiss(e) {
			this.closedBy = e ? "any" : "closerequest";
		}
		constructor() {
			super(), this.for = "", this.label = "", this.closeLabel = "Close", this.dismissible = !0, this.presentation = "dialog", this.responsiveQuery = pn;
		}
		show(e = "programmatic") {
			return this.requestOpen(!0, e);
		}
		hide(e = "programmatic") {
			return this.requestOpen(!1, e);
		}
		requestOpen(e, t, n) {
			if (e === this.open) return "unchanged";
			let r = this.open, i = this.#i;
			this.#r++;
			try {
				return Vt(this, {
					previous: r,
					proposed: e,
					reason: t,
					canCommit: n,
					getRevision: () => this.#t,
					stage: (e) => {
						this.#e = e, e && !this.dialog?.open && (this.#i = !1);
					},
					rollback: (t) => {
						this.#e = t, this.#i = i, this.requestUpdate("open", e);
					},
					commit: () => {
						this.#s = null, this.#n++, this.requestUpdate("open", r);
					}
				});
			} finally {
				this.#r--, this.#r || this.requestUpdate("open", r);
			}
		}
		get triggerToggles() {
			return !1;
		}
		get openRevision() {
			return this.#n;
		}
		get surfaceClass() {
			return this.#m ? "en-drawer" : "en-dialog";
		}
		get placement() {
			return this.#m ? "bottom" : "";
		}
		get dialog() {
			return this.renderRoot?.querySelector("dialog") ?? null;
		}
		get effectiveClosedBy() {
			return this.dismissible ? this.closedBy : "none";
		}
		get supportsNativeClosedBy() {
			let e = this.ownerDocument?.defaultView?.HTMLDialogElement?.prototype;
			return e !== void 0 && "closedBy" in e;
		}
		connectedCallback() {
			super.connectedCallback(), this.hasUpdated && this.observePresentation(), this.updateComplete.then(() => {
				this.isConnected && this.syncDialog();
			});
		}
		disconnectedCallback() {
			this.#i = !1, this.dialog?.close(), this.#a = null, this.#o = null, this.#s = null, this.#l = null, this.stopObservingPresentation(), super.disconnectedCallback();
		}
		updated(e) {
			this.observePresentation(), this.syncDialog();
		}
		observePresentation() {
			let e = this.ownerDocument?.defaultView;
			if (!this.isConnected || !e?.matchMedia) return;
			if (this.presentation !== "responsive") {
				this.stopObservingPresentation(), this.setCompactPresentation(!1);
				return;
			}
			let t = this.responsiveQuery.trim() || pn;
			this.#f && this.#p === t || (this.stopObservingPresentation(), this.#p = t, this.#f = e.matchMedia(t), this.#f.addEventListener("change", this.#h), this.setCompactPresentation(this.#f.matches));
		}
		stopObservingPresentation() {
			this.#f?.removeEventListener("change", this.#h), this.#f = null, this.#p = "";
		}
		setCompactPresentation(e) {
			let t = this.#m;
			t !== e && (this.#m = e, this.requestUpdate("compactPresentation", t));
		}
		#h = (e) => {
			this.setCompactPresentation(e.matches);
		};
		syncDialog() {
			let e = this.dialog;
			if (!(!e || !this.isConnected || this.#r)) {
				if (this.#i && !e.open) {
					this.reconcileNativeClose();
					return;
				}
				if (this.open && !e.open) {
					let t = xn(this.ownerDocument);
					this.#o = t && "focus" in t ? t : null;
					let n = this.#s;
					this.#s = null, this.#a = n?.revision === this.#n && n.element.isConnected ? n.element : this.#o, V(e, !0), e.showModal(), this.#i = !0;
				} else if (!this.open && e.open) {
					let t = xn(this.ownerDocument), n = t === this || Cn(e, t);
					this.#i = !1, e.close(), V(e, !1), n && Sn(this.#a), this.#a = null, this.#o = null;
				}
			}
		}
		#g = (e) => {
			e.preventDefault();
			let t = this.#u;
			this.#u = "close-request", this.effectiveClosedBy !== "none" && (t !== "backdrop" || this.effectiveClosedBy === "any") && this.hide(t);
		};
		#_ = () => {
			this.isConnected && this.#i && !this.dialog?.open && this.reconcileNativeClose();
		};
		reconcileNativeClose() {
			this.#i = !1, this.dialog && V(this.dialog, !1), this.open = !1;
			let e = xn(this.ownerDocument);
			(e === this.#o || e === this.ownerDocument.body || e === this.dialog) && Sn(this.#a), this.#a = null, this.#o = null;
		}
		#v(e) {
			let t = this.dialog;
			if (!t || e.target !== t) return !1;
			let n = t.getBoundingClientRect();
			return e.clientX < n.left || e.clientX > n.right || e.clientY < n.top || e.clientY > n.bottom;
		}
		#y = (e) => {
			let t = this.#v(e);
			this.#l = t && e.isPrimary && e.button === 0 ? e.pointerId : null, this.#u = t ? "backdrop" : "close-request";
		};
		#b = (e) => {
			let t = this.#l === e.pointerId && this.#v(e);
			this.#l = null, this.#u = t ? "backdrop" : "close-request", t && this.effectiveClosedBy === "any" && !this.supportsNativeClosedBy && this.hide("backdrop"), queueMicrotask(() => {
				this.#u = "close-request";
			});
		};
		#x = () => {
			this.#l = null, this.#u = "close-request";
		};
		#S = (e) => {
			e.key === "Escape" && !e.defaultPrevented && (this.#u = "escape");
		};
		get dialogView() {
			return {
				surfaceClass: this.surfaceClass,
				placement: this.#m ? "bottom" : this.placement,
				label: this.label,
				closeLabel: this.closeLabel,
				dismissible: this.dismissible,
				closedBy: this.supportsNativeClosedBy ? this.effectiveClosedBy : "closerequest",
				cancel: this.#g,
				close: this.#_,
				dismiss: () => this.hide("close-button"),
				pointerDown: this.#y,
				pointerUp: this.#b,
				pointerCancel: this.#x,
				keyDown: this.#S
			};
		}
		render() {
			return hn(this.dialogView);
		}
	},
	dependencies: [{
		tagName: "en-button",
		elementClass: Et
	}, {
		tagName: "en-icon",
		elementClass: It
	}]
});
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/selection-children.js
var wn = "data-en-selection-children", Tn = "en-selection-", En = {
	select: "en-select-option",
	segmented: "en-segmented-item"
}, Dn = (e) => e.replace(/[\t\n\f\r ]+/g, " ").replace(/^ | $/g, "");
function On(e) {
	return /^en-selection-(?:ssr|client)-(?:0|[1-9]\d*)$/.test(e);
}
function kn(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
	return Object.freeze(t.map((t) => {
		let i = t.attributes, a = (e) => Object.prototype.hasOwnProperty.call(i, e);
		if (t.tagName !== En[e]) throw TypeError(`Expected direct ${En[e]} children.`);
		if (!t.key || r.has(t.key)) throw TypeError("Repeated or missing selection child key.");
		if (r.add(t.key), !a("value") || e === "segmented" && i.value === "") throw TypeError(`${En[e]} requires an explicit ${e === "segmented" ? "nonempty " : ""}value.`);
		if (n.has(i.value)) throw TypeError("Selection child values must be unique.");
		if (n.add(i.value), a("selected") || a("checked")) throw TypeError("Selection children do not own selected or checked state; set the parent value instead.");
		if (a("slot") && !(e === "segmented" && On(i.slot))) throw TypeError("Selection child slot attributes are reserved for internal label projection.");
		if (i.hidden?.toLowerCase() === "until-found") throw TypeError("Selection children do not support hidden=until-found.");
		if (e === "segmented" && (t.interactive || An(t.tagName, i))) throw TypeError("Segmented labels must contain noninteractive content only.");
		if (e === "segmented" && (a("inert") || i["aria-hidden"]?.toLowerCase() === "true")) throw TypeError("Segmented label roots must not be inert or aria-hidden; use hidden to make a choice unavailable.");
		return Object.freeze({
			key: t.key,
			value: i.value,
			label: e === "select" ? Dn(t.text) || Dn(i.label ?? "") : "",
			disabled: a("disabled"),
			hidden: a("hidden")
		});
	}));
}
function An(e, t) {
	let n = (e) => Object.prototype.hasOwnProperty.call(t, e);
	return [
		"button",
		"input",
		"select",
		"textarea",
		"summary",
		"iframe",
		"embed",
		"object"
	].includes(e) || (e === "a" || e === "area") && n("href") || (e === "audio" || e === "video") && n("controls") || n("tabindex") || n("contenteditable") && t.contenteditable !== "false";
}
var jn = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), Nn = class {
	#e;
	#t;
	#n = /* @__PURE__ */ new WeakMap();
	#r = /* @__PURE__ */ new Map();
	#i = 0;
	#a;
	#o = {
		active: !1,
		items: [],
		error: ""
	};
	#s = !1;
	#c = !1;
	#l;
	constructor(e, t) {
		if (this.#e = e, this.#t = t, jn.has(e)) throw TypeError("Only one selection child controller can own a host.");
		jn.set(e, this), e.addController(this);
	}
	get view() {
		return this.#o;
	}
	get initialValue() {
		return this.#l;
	}
	prepare(e) {
		if (e.version !== 1 || e.kind !== this.#t || typeof e.value != "string" || !Array.isArray(e.items)) throw TypeError("Invalid selection child SSR snapshot.");
		let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
		for (let r of e.items) {
			if (!r || typeof r.key != "string" || !r.key || t.has(r.key) || typeof r.value != "string" || n.has(r.value) || this.#t === "segmented" && !r.value || typeof r.label != "string" || typeof r.disabled != "boolean" || typeof r.hidden != "boolean") throw TypeError("Invalid selection child SSR record.");
			t.add(r.key), n.add(r.value);
		}
		this.#o = {
			active: e.items.length > 0,
			items: e.items.map((e) => Object.freeze({ ...e })),
			error: ""
		}, this.#s = !0, this.#c = !0, this.#l = e.value, this.#e.requestUpdate();
	}
	hostConnected() {
		let e = this.#e.getAttribute(wn);
		if (e !== null && !this.#s) {
			this.prepare(JSON.parse(e)), this.#c = !1;
			let t = this.#f();
			this.#o.items.forEach((e) => {
				let n = t.find((t) => this.#t === "segmented" ? t.getAttribute("slot") === `en-selection-${e.key}` && t.getAttribute("value") === e.value : t.getAttribute("value") === e.value);
				if (!n) return;
				this.#n.set(n, e.key);
				let r = n.getAttribute("slot");
				this.#t === "segmented" && r === `en-selection-${e.key}` && this.#u(n, r);
			});
		}
		this.#s || this.refresh();
		let t = this.#e.ownerDocument.defaultView?.MutationObserver;
		t && (this.#a ??= new t(() => this.refresh()), this.#a.observe(this.#e, {
			subtree: !0,
			childList: !0,
			characterData: !0,
			attributes: !0,
			attributeFilter: [
				"value",
				"label",
				"disabled",
				"hidden",
				"selected",
				"checked",
				"slot",
				"tabindex",
				"contenteditable",
				"href",
				"controls",
				"inert",
				"aria-hidden"
			]
		}));
	}
	hostUpdated() {
		this.#s && (this.#s = !1, this.#e.removeAttribute(wn)), this.refresh();
	}
	hostDisconnected() {
		this.#a?.disconnect();
		for (let [e, t] of this.#r) this.#d(e, t);
	}
	#u(e, t) {
		Mn.set(e, this), this.#r.set(e, t), e.getAttribute("slot") !== t && e.setAttribute("slot", t);
	}
	#d(e, t) {
		Mn.get(e) === this && (e.getAttribute("slot") === t && e.removeAttribute("slot"), Mn.delete(e)), this.#r.delete(e);
	}
	#f() {
		return [...this.#e.children ?? []].filter((e) => e.localName === En[this.#t]);
	}
	current() {
		if (this.#c) return this.#o;
		let e = this.#f();
		if (!e.length) return {
			active: !1,
			items: [],
			error: ""
		};
		try {
			let t = e.map((e) => {
				let t = this.#n.get(e);
				t || (t = `client-${++this.#i}`, this.#n.set(e, t));
				let n = Object.fromEntries([...e.attributes].map((e) => [e.name, e.value])), r = this.#r.get(e);
				if (r !== void 0 && Mn.get(e) === this) {
					if (n.slot !== r) throw TypeError("Do not replace or remove an internally owned selection child slot.");
					delete n.slot;
				}
				let i = this.#t === "segmented" && [...e.querySelectorAll("*")].some((e) => An(e.localName, Object.fromEntries([...e.attributes].map((e) => [e.name, e.value]))));
				return {
					key: t,
					tagName: e.localName,
					attributes: n,
					text: e.textContent ?? "",
					interactive: i
				};
			});
			return {
				active: !0,
				items: kn(this.#t, t),
				error: ""
			};
		} catch (e) {
			return {
				active: !0,
				items: [],
				error: e instanceof Error ? e.message : String(e)
			};
		}
	}
	refresh() {
		if (this.#s) return;
		let e = this.current(), t = this.#f();
		for (let [e, n] of this.#r) t.includes(e) || this.#d(e, n);
		!e.error && this.#t === "segmented" && t.forEach((t, n) => {
			let r = `${Tn}${e.items[n].key}`;
			this.#u(t, r);
		}), JSON.stringify(e) !== JSON.stringify(this.#o) && (this.#o = e, this.#e.requestUpdate());
	}
}, Pn = Object.defineProperty, Fn = (e, t, n) => t in e ? Pn(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, In = (e, t, n) => (Fn(e, typeof t == "symbol" ? t : t + "", n), n), Ln = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, Rn = (e, t) => {
	if (Object(t) !== t) throw TypeError("Cannot use the \"in\" operator on this value");
	return e.has(t);
}, zn = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Bn = (e, t, n) => (Ln(e, t, "access private method"), n);
function Vn(e, t) {
	return Object.is(e, t);
}
var G = null, K = !1, Hn = 1, q = /* @__PURE__ */ Symbol("SIGNAL");
function J(e) {
	let t = G;
	return G = e, t;
}
function Un() {
	return G;
}
function Wn() {
	return K;
}
var Gn = {
	version: 0,
	lastCleanEpoch: 0,
	dirty: !1,
	producerNode: void 0,
	producerLastReadVersion: void 0,
	producerIndexOfThis: void 0,
	nextProducerIndex: 0,
	liveConsumerNode: void 0,
	liveConsumerIndexOfThis: void 0,
	consumerAllowSignalWrites: !1,
	consumerIsAlwaysLive: !1,
	producerMustRecompute: () => !1,
	producerRecomputeValue: () => {},
	consumerMarkedDirty: () => {},
	consumerOnSignalRead: () => {}
};
function Kn(e) {
	if (K) throw Error(typeof ngDevMode < "u" && ngDevMode ? "Assertion error: signal read during notification phase" : "");
	if (G === null) return;
	G.consumerOnSignalRead(e);
	let t = G.nextProducerIndex++;
	if (Y(G), t < G.producerNode.length && G.producerNode[t] !== e && rr(G)) {
		let e = G.producerNode[t];
		nr(e, G.producerIndexOfThis[t]);
	}
	G.producerNode[t] !== e && (G.producerNode[t] = e, G.producerIndexOfThis[t] = rr(G) ? tr(e, G, t) : 0), G.producerLastReadVersion[t] = e.version;
}
function qn() {
	Hn++;
}
function Jn(e) {
	if (e.dirty || e.lastCleanEpoch !== Hn) {
		if (!e.producerMustRecompute(e) && !er(e)) {
			e.dirty = !1, e.lastCleanEpoch = Hn;
			return;
		}
		e.producerRecomputeValue(e), e.dirty = !1, e.lastCleanEpoch = Hn;
	}
}
function Yn(e) {
	if (e.liveConsumerNode === void 0) return;
	let t = K;
	K = !0;
	try {
		for (let t of e.liveConsumerNode) t.dirty || Zn(t);
	} finally {
		K = t;
	}
}
function Xn() {
	return G?.consumerAllowSignalWrites !== !1;
}
function Zn(e) {
	var t;
	e.dirty = !0, Yn(e), (t = e.consumerMarkedDirty) == null || t.call(e.wrapper ?? e);
}
function Qn(e) {
	return e && (e.nextProducerIndex = 0), J(e);
}
function $n(e, t) {
	if (J(t), e && e.producerNode !== void 0 && e.producerIndexOfThis !== void 0 && e.producerLastReadVersion !== void 0) {
		if (rr(e)) for (let t = e.nextProducerIndex; t < e.producerNode.length; t++) nr(e.producerNode[t], e.producerIndexOfThis[t]);
		for (; e.producerNode.length > e.nextProducerIndex;) e.producerNode.pop(), e.producerLastReadVersion.pop(), e.producerIndexOfThis.pop();
	}
}
function er(e) {
	Y(e);
	for (let t = 0; t < e.producerNode.length; t++) {
		let n = e.producerNode[t], r = e.producerLastReadVersion[t];
		if (r !== n.version || (Jn(n), r !== n.version)) return !0;
	}
	return !1;
}
function tr(e, t, n) {
	var r;
	if (ir(e), Y(e), e.liveConsumerNode.length === 0) {
		(r = e.watched) == null || r.call(e.wrapper);
		for (let t = 0; t < e.producerNode.length; t++) e.producerIndexOfThis[t] = tr(e.producerNode[t], e, t);
	}
	return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function nr(e, t) {
	var n;
	if (ir(e), Y(e), typeof ngDevMode < "u" && ngDevMode && t >= e.liveConsumerNode.length) throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);
	if (e.liveConsumerNode.length === 1) {
		(n = e.unwatched) == null || n.call(e.wrapper);
		for (let t = 0; t < e.producerNode.length; t++) nr(e.producerNode[t], e.producerIndexOfThis[t]);
	}
	let r = e.liveConsumerNode.length - 1;
	if (e.liveConsumerNode[t] = e.liveConsumerNode[r], e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[r], e.liveConsumerNode.length--, e.liveConsumerIndexOfThis.length--, t < e.liveConsumerNode.length) {
		let n = e.liveConsumerIndexOfThis[t], r = e.liveConsumerNode[t];
		Y(r), r.producerIndexOfThis[n] = t;
	}
}
function rr(e) {
	return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function Y(e) {
	e.producerNode ??= [], e.producerIndexOfThis ??= [], e.producerLastReadVersion ??= [];
}
function ir(e) {
	e.liveConsumerNode ??= [], e.liveConsumerIndexOfThis ??= [];
}
function ar(e) {
	if (Jn(e), Kn(e), e.value === lr) throw e.error;
	return e.value;
}
function or(e) {
	let t = Object.create(ur);
	t.computation = e;
	let n = () => ar(t);
	return n[q] = t, n;
}
var sr = /* @__PURE__ */ Symbol("UNSET"), cr = /* @__PURE__ */ Symbol("COMPUTING"), lr = /* @__PURE__ */ Symbol("ERRORED"), ur = {
	...Gn,
	value: sr,
	dirty: !0,
	error: null,
	equal: Vn,
	producerMustRecompute(e) {
		return e.value === sr || e.value === cr;
	},
	producerRecomputeValue(e) {
		if (e.value === cr) throw Error("Detected cycle in computations.");
		let t = e.value;
		e.value = cr;
		let n = Qn(e), r, i = !1;
		try {
			r = e.computation.call(e.wrapper), i = t !== sr && t !== lr && e.equal.call(e.wrapper, t, r);
		} catch (t) {
			r = lr, e.error = t;
		} finally {
			$n(e, n);
		}
		if (i) {
			e.value = t;
			return;
		}
		e.value = r, e.version++;
	}
};
function dr() {
	throw Error();
}
var fr = dr;
function pr() {
	fr();
}
function mr(e) {
	let t = Object.create(_r);
	t.value = e;
	let n = () => (Kn(t), t.value);
	return n[q] = t, n;
}
function hr() {
	return Kn(this), this.value;
}
function gr(e, t) {
	Xn() || pr(), e.equal.call(e.wrapper, e.value, t) || (e.value = t, vr(e));
}
var _r = {
	...Gn,
	equal: Vn,
	value: void 0
};
function vr(e) {
	e.version++, qn(), Yn(e);
}
var X = Symbol("node"), Z;
((e) => {
	var t, n, r, i;
	class a {
		constructor(r, i = {}) {
			zn(this, n), In(this, t);
			let a = mr(r)[q];
			if (this[X] = a, a.wrapper = this, i) {
				let t = i.equals;
				t && (a.equal = t), a.watched = i[e.subtle.watched], a.unwatched = i[e.subtle.unwatched];
			}
		}
		get() {
			if (!(0, e.isState)(this)) throw TypeError("Wrong receiver type for Signal.State.prototype.get");
			return hr.call(this[X]);
		}
		set(t) {
			if (!(0, e.isState)(this)) throw TypeError("Wrong receiver type for Signal.State.prototype.set");
			if (Wn()) throw Error("Writes to signals not permitted during Watcher callback");
			let n = this[X];
			gr(n, t);
		}
	}
	t = X, n = /* @__PURE__ */ new WeakSet(), e.isState = (e) => typeof e == "object" && Rn(n, e), e.State = a;
	class o {
		constructor(t, n) {
			zn(this, i), In(this, r);
			let a = or(t)[q];
			if (a.consumerAllowSignalWrites = !0, this[X] = a, a.wrapper = this, n) {
				let t = n.equals;
				t && (a.equal = t), a.watched = n[e.subtle.watched], a.unwatched = n[e.subtle.unwatched];
			}
		}
		get() {
			if (!(0, e.isComputed)(this)) throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");
			return ar(this[X]);
		}
	}
	r = X, i = /* @__PURE__ */ new WeakSet(), e.isComputed = (e) => typeof e == "object" && Rn(i, e), e.Computed = o, ((t) => {
		var n, r, i, a;
		function o(e) {
			let t, n = null;
			try {
				n = J(null), t = e();
			} finally {
				J(n);
			}
			return t;
		}
		t.untrack = o;
		function s(t) {
			if (!(0, e.isComputed)(t) && !(0, e.isWatcher)(t)) throw TypeError("Called introspectSources without a Computed or Watcher argument");
			return t[X].producerNode?.map((e) => e.wrapper) ?? [];
		}
		t.introspectSources = s;
		function c(t) {
			if (!(0, e.isComputed)(t) && !(0, e.isState)(t)) throw TypeError("Called introspectSinks without a Signal argument");
			return t[X].liveConsumerNode?.map((e) => e.wrapper) ?? [];
		}
		t.introspectSinks = c;
		function l(t) {
			if (!(0, e.isComputed)(t) && !(0, e.isState)(t)) throw TypeError("Called hasSinks without a Signal argument");
			let n = t[X].liveConsumerNode;
			return n ? n.length > 0 : !1;
		}
		t.hasSinks = l;
		function u(t) {
			if (!(0, e.isComputed)(t) && !(0, e.isWatcher)(t)) throw TypeError("Called hasSources without a Computed or Watcher argument");
			let n = t[X].producerNode;
			return n ? n.length > 0 : !1;
		}
		t.hasSources = u;
		class d {
			constructor(e) {
				zn(this, r), zn(this, i), In(this, n);
				let t = Object.create(Gn);
				t.wrapper = this, t.consumerMarkedDirty = e, t.consumerIsAlwaysLive = !0, t.consumerAllowSignalWrites = !1, t.producerNode = [], this[X] = t;
			}
			watch(...t) {
				if (!(0, e.isWatcher)(this)) throw TypeError("Called unwatch without Watcher receiver");
				Bn(this, i, a).call(this, t);
				let n = this[X];
				n.dirty = !1;
				let r = J(n);
				for (let e of t) Kn(e[X]);
				J(r);
			}
			unwatch(...t) {
				if (!(0, e.isWatcher)(this)) throw TypeError("Called unwatch without Watcher receiver");
				Bn(this, i, a).call(this, t);
				let n = this[X];
				Y(n);
				for (let e = n.producerNode.length - 1; e >= 0; e--) if (t.includes(n.producerNode[e].wrapper)) {
					nr(n.producerNode[e], n.producerIndexOfThis[e]);
					let t = n.producerNode.length - 1;
					if (n.producerNode[e] = n.producerNode[t], n.producerIndexOfThis[e] = n.producerIndexOfThis[t], n.producerNode.length--, n.producerIndexOfThis.length--, n.nextProducerIndex--, e < n.producerNode.length) {
						let t = n.producerIndexOfThis[e], r = n.producerNode[e];
						ir(r), r.liveConsumerIndexOfThis[t] = e;
					}
				}
			}
			getPending() {
				if (!(0, e.isWatcher)(this)) throw TypeError("Called getPending without Watcher receiver");
				return this[X].producerNode.filter((e) => e.dirty).map((e) => e.wrapper);
			}
		}
		n = X, r = /* @__PURE__ */ new WeakSet(), i = /* @__PURE__ */ new WeakSet(), a = function(t) {
			for (let n of t) if (!(0, e.isComputed)(n) && !(0, e.isState)(n)) throw TypeError("Called watch/unwatch without a Computed or State argument");
		}, e.isWatcher = (e) => Rn(r, e), t.Watcher = d;
		function f() {
			return Un()?.wrapper;
		}
		t.currentComputed = f, t.watched = Symbol("watched"), t.unwatched = Symbol("unwatched");
	})(e.subtle ||= {});
})(Z ||= {});
//#endregion
//#region ../design-system/packages/primitives/dist/state/value.js
function yr(e, t = {}) {
	let n = t.normalize ?? ((e) => e), r = t.equals ?? Object.is, i = n(e), a = new Z.State(Object.freeze({
		value: i,
		revision: 0
	})), o = (e) => {
		let t = n(e), i = a.get();
		return !r(i.value, t) && (a.set(Object.freeze({
			value: t,
			revision: i.revision + 1
		})), !0);
	};
	return {
		value: new Z.Computed(() => a.get().value),
		view: new Z.Computed(() => a.get()),
		set: o,
		reset: () => o(i)
	};
}
//#endregion
//#region ../design-system/node_modules/signal-utils/dist/subtle/reaction.ts.js
var br = {
	active: !1,
	lastError: null
}, xr = class {
	original;
	name = "ReactionError";
	constructor(e) {
		this.original = e;
	}
}, Sr = (e, t, n = Object.is) => {
	let r = new Z.Computed(e, { equals: n }), i = r.get(), a = async () => {
		if (await 0, a === void 0) return;
		let e = r.get();
		if (!n(e, i)) try {
			t(e, i);
		} catch (e) {
			if (br) console.error(e), br.lastError = e;
			else throw new xr(e);
		} finally {
			i = e;
		}
		o.watch();
	}, o = new Z.subtle.Watcher(() => a?.());
	return o.watch(r), () => {
		o.unwatch(r), a = void 0;
	};
}, Cr = class {
	#e;
	#t;
	#n;
	#r = 0;
	#i = !1;
	constructor(e, t) {
		this.#e = e, this.#t = t, e.addController(this);
	}
	get snapshot() {
		return this.#t();
	}
	hostConnected() {
		if (this.#i) return;
		this.#n?.();
		let e = ++this.#r;
		this.#n = Sr(this.#t, () => {
			!this.#i && e === this.#r && this.#e.requestUpdate();
		}), this.#e.requestUpdate();
	}
	hostDisconnected() {
		++this.#r, this.#n?.(), this.#n = void 0;
	}
	dispose() {
		this.#i = !0, this.hostDisconnected(), this.#e.removeController(this);
	}
}, wr = [
	"badInput",
	"customError",
	"patternMismatch",
	"rangeOverflow",
	"rangeUnderflow",
	"stepMismatch",
	"tooLong",
	"tooShort",
	"typeMismatch",
	"valueMissing"
], Tr = class {
	#e;
	#t;
	#n = !1;
	constructor(e, t) {
		this.#e = e, this.#t = t, e.addController(this);
	}
	get disabled() {
		return this.#n || (this.#t.disabled?.() ?? !1);
	}
	hostUpdated() {
		this.sync();
	}
	sync() {
		let { internals: e } = this.#t;
		if (typeof e.setFormValue != "function") return;
		let t = this.disabled ? null : this.#t.value();
		e.setFormValue(t, this.#t.state ? this.#t.state() : t);
		let n = this.#t.control?.() ?? null;
		if (n && (n.disabled = this.disabled), typeof e.setValidity != "function") return;
		if (this.disabled) {
			e.setValidity({});
			return;
		}
		let r = this.#t.validate?.();
		if (r) {
			let t = Object.values(r.flags).some(Boolean);
			if (t && !r.message) throw TypeError("Invalid form state requires a localized validation message.");
			e.setValidity(r.flags, t ? r.message : "", r.anchor);
		} else if (n) {
			let t = {};
			for (let e of wr) n.validity[e] && (t[e] = !0);
			e.setValidity(t, n.validationMessage, n);
		} else e.setValidity({});
	}
	formDisabled(e) {
		this.#n = e, this.sync(), this.#e.requestUpdate();
	}
	formReset() {
		this.#t.onReset(), this.sync(), this.#e.requestUpdate();
	}
	formStateRestore(e, t) {
		this.#t.onRestore?.(e, t), this.sync(), this.#e.requestUpdate();
	}
}, Er = L(o`
  /* Recompute for both frame and item; descendant overrides stay effective. */
  .en-segmented-control, .en-segmented-item {
    --_en-text-control-block-size: ${ut()};
  }
  .en-option, .en-tab, .en-accordion-trigger {
    min-inline-size: ${M("--en-size-target-min")};
    min-block-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-min")});
    padding-block: ${M("--en-space-control-block")};
    padding-inline: ${M("--en-space-control-inline")};
    color: ${N("--en-option-color", M("--en-color-text"))};
    font: inherit;
    text-align: start;
    overflow-wrap: break-word;
    cursor: pointer;
  }
  .en-option {
    display: flex;
    align-items: center;
    gap: ${M("--en-space-icon-label")};
    border-radius: ${N("--en-option-radius", M("--en-radius-control"))};
    background: ${N("--en-option-background", M("--en-color-surface"))};
  }
  .en-option[data-active] { background: ${N("--en-option-background", M("--en-color-surface-subtle"))}; }
  @media (hover: hover) { .en-option:hover { background: ${N("--en-option-background", M("--en-color-surface-subtle"))}; } }
  .en-option[aria-selected='true'], .en-option[aria-checked='true'], .en-option[data-selected] {
    background: ${N("--en-option-background", M("--en-color-selected"))};
    font-weight: ${M("--en-font-label-strong-weight")};
  }
  .en-option[aria-disabled='true'] { color: ${M("--en-color-text-muted")}; cursor: default; }
  .en-listbox, .en-tree { display: flex; flex-direction: column; gap: ${M("--en-space-1")}; min-inline-size: 0; }
  .en-tree-group { padding-inline-start: ${M("--en-space-4")}; }
  .en-choice-group, .en-rating, .en-toolbar, .en-segmented { display: flex; align-items: center; flex-wrap: wrap; gap: ${M("--en-space-actions")}; min-inline-size: 0; }
  .en-choice-group[data-orientation='vertical'], .en-choice-group[aria-orientation='vertical'] { flex-direction: column; align-items: stretch; }
  .en-choice-group > slot, .en-rating > slot, .en-toolbar > slot, .en-segmented > slot { display: contents; }
  .en-rating-item, .en-rating-clear, .en-segmented-item {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-inline-size: ${M("--en-size-target-min")};
    min-block-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-min")});
    border: ${M("--en-border-width")} solid transparent;
    border-radius: ${M("--en-radius-control")};
    color: ${M("--en-color-text")};
    cursor: pointer;
    overflow-wrap: break-word;
  }
  .en-rating-values {
    display: flex;
    flex-wrap: wrap;
    gap: ${M("--en-space-0-5")};
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  /* Preserve each target instead of squeezing stars to keep a row on one line. */
  .en-rating-item {
    --_en-rating-target-min: ${M("--en-size-target-min")};
    --_en-rating-target-size: max(${M("--en-size-control-min")}, var(--_en-rating-target-min), calc(${M("--en-size-icon")} + 2 * ${M("--en-space-control-block")} + 2 * ${M("--en-border-width")}));
    flex: 0 0 auto;
    inline-size: var(--_en-rating-target-size);
    block-size: var(--_en-rating-target-size);
    padding: ${M("--en-space-control-block")};
    border-radius: ${N("--en-rating-star-radius", M("--en-radius-control"))};
  }
  .en-rating-clear { max-inline-size: 100%; }
  .en-rating-clear, .en-segmented-item { padding: ${M("--en-space-control-block")} ${M("--en-space-control-inline")}; }
  .en-rating-clear { color: ${M("--en-color-text-muted")}; }
  .en-rating-clear:has(:checked) { background: ${M("--en-color-selected")}; color: ${M("--en-color-action-text")}; border-color: ${M("--en-color-accent-border")}; }
  .en-rating-star { font-size: ${M("--en-size-icon")}; line-height: 1; color: ${M("--en-color-text-muted")}; }
  .en-rating-star[data-filled] { color: ${M("--en-color-action-text")}; }
  .en-rating-item:has(:disabled), .en-rating-clear:has(:disabled), .en-segmented-item[data-disabled] { cursor: default; color: ${M("--en-color-text-muted")}; }
  .en-rating-item:has(:disabled) .en-rating-star { color: ${M("--en-color-text-muted")}; }
  ${et(o`.en-rating-item:has(:focus-visible), .en-rating-clear:has(:focus-visible), .en-segmented-item:has(:focus-visible)`)}
  .en-segmented-control { display: flex; align-items: stretch; flex-wrap: wrap; gap: ${M("--en-space-0-5")}; min-inline-size: 0; min-block-size: var(--_en-text-control-block-size); padding: ${lt}; border: ${M("--en-border-width")} solid ${M("--en-color-line")}; border-radius: ${N("--en-control-radius", M("--en-radius-control"))}; background: ${M("--en-color-surface-subtle")}; }
  .en-segmented-item {
    flex: 1 1 auto;
    /* The shared control height includes the frame; each label keeps its target floor. */
    min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${z}), ${M("--en-size-target-min")});
    padding-block: max(0px, calc(${M("--en-space-control-block")} - ${z}));
    border-radius: max(0px, ${N("--en-control-radius", M("--en-radius-control"))} - ${z});
    text-align: center;
  }
  .en-segmented-item[data-selected] { background: ${M("--en-color-surface")}; border-color: ${M("--en-color-boundary")}; color: ${M("--en-color-action-text")}; font-weight: ${M("--en-font-label-strong-weight")}; }
  @media (hover: hover) { .en-segmented-item:not([data-disabled]):hover { background: ${M("--en-color-selected")}; } }
  .en-segmented-item[data-disabled] { color: ${M("--en-color-text-muted")}; }
  .en-segmented-label { min-inline-size: 0; }
  .en-tabs { min-inline-size: 0; isolation: isolate; }
  .en-tab-list { position: relative; display: flex; flex-wrap: wrap; gap: ${M("--en-space-1")}; min-inline-size: 0; border-block-end: ${M("--en-border-width")} solid ${M("--en-color-line")}; }
  .en-tab-list > slot { display: contents; }
  /* Raise focus paint within the tabs, including over following rows and panels.
     Slotted hosts and native tabs are flex items; their z-index needs no positioning. */
  .en-tab-list:focus-within { z-index: 1; }
  .en-tab-list > slot::slotted(:focus-within), .en-tab-list > .en-tab:focus-within { z-index: 1; }
  .en-tab-list[aria-orientation='vertical'], .en-tab-list[data-orientation='vertical'] { flex-direction: column; border-block-end: 0; border-inline-end: ${M("--en-border-width")} solid ${M("--en-color-line")}; }
  .en-tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${M("--en-space-icon-label")};
    border: 0;
    border-block-end: ${M("--en-size-tab-indicator")} solid ${M("--en-color-line")};
    background: ${N("--en-tab-background", M("--en-color-surface"))};
    color: ${N("--en-tab-color", M("--en-color-text"))};
  }
  @media (hover: hover) { .en-tab:hover { background: ${N("--en-tab-background", M("--en-color-surface-subtle"))}; } }
  .en-tab[aria-selected='true'], :host([role='tab'][aria-selected='true']) .en-tab {
    color: ${N("--en-tab-color", M("--en-color-action-text"))};
    border-block-end-color: ${M("--en-color-action")};
    background: ${N("--en-tab-background", M("--en-color-selected"))};
    font-weight: ${M("--en-font-label-strong-weight")};
  }
  .en-tab[aria-disabled='true'], :host([role='tab'][aria-disabled='true']) .en-tab { color: ${M("--en-color-text-muted")}; cursor: default; }
  .en-tab-panel { min-inline-size: 0; padding-block: ${M("--en-space-4")}; }
  .en-accordion { display: flex; flex-direction: column; min-inline-size: 0; isolation: isolate; }
  .en-accordion > slot { display: contents; }
  /* Keep the focused item's outline above adjacent surfaces within this group.
     Slotted hosts are flex items, so no positioned containing block is needed. */
  .en-accordion > slot::slotted(:focus-within) { z-index: 1; }
  .en-accordion-item { border-block-end: ${M("--en-border-width")} solid ${M("--en-color-line")}; min-inline-size: 0; }
  .en-accordion-trigger { display: flex; align-items: center; justify-content: space-between; gap: ${M("--en-space-icon-label")}; inline-size: 100%; border: 0; background: ${M("--en-color-surface")}; font-weight: ${M("--en-font-label-strong-weight")}; }
  @media (hover: hover) { .en-accordion-trigger:hover { background: ${M("--en-color-surface-subtle")}; } }
  .en-accordion-trigger[aria-disabled='true'], .en-accordion-trigger:disabled { color: ${M("--en-color-text-muted")}; cursor: default; }
  .en-accordion-panel { padding-block: ${M("--en-space-3")} ${M("--en-space-4")}; padding-inline: ${M("--en-space-control-inline")}; }
  ${kt}
  @media (any-pointer: coarse) {
    .en-option, .en-tab, .en-accordion-trigger, .en-rating-item, .en-rating-clear { min-block-size: max(${M("--en-size-control-min")}, ${M("--en-size-target-touch")}); }
    .en-segmented-control, .en-segmented-item { --_en-text-control-block-size: ${ut(!0)}; }
    .en-segmented-item { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${z}), ${M("--en-size-target-touch")}); }
    .en-rating-item { --_en-rating-target-min: ${M("--en-size-target-touch")}; min-inline-size: ${M("--en-size-target-touch")}; }
  }
  @media (forced-colors: active) {
    .en-option, .en-tab, .en-accordion-trigger { background: Canvas; color: CanvasText; }
    .en-option[aria-selected='true'], .en-option[aria-checked='true'], .en-option[data-selected], .en-tab[aria-selected='true'], :host([role='tab'][aria-selected='true']) .en-tab { background: Highlight; color: HighlightText; border-color: Highlight; }
    .en-option[aria-disabled='true'], .en-tab[aria-disabled='true'], :host([role='tab'][aria-disabled='true']) .en-tab { color: GrayText; }
    .en-segmented-control { background: Canvas; border-color: CanvasText; }
    .en-segmented-item { color: CanvasText; }
    .en-segmented-item[data-selected], .en-rating-clear:has(:checked) { background: Highlight; color: HighlightText; border-color: Highlight; }
    @media (hover: hover) { .en-segmented-item:not([data-disabled]):hover { background: Highlight; color: HighlightText; } }
    /* Chromium can draw an opaque text backplate even for explicit system colors.
       Only this text span avoids that second adjustment; its inherited foreground
       and the parent surface still come entirely from the user's system palette. */
    .en-segmented-label { forced-color-adjust: none; color: inherit; background: none; }
    .en-segmented-label[data-rich] { forced-color-adjust: auto; }
    .en-rating-star { color: CanvasText; }
    .en-rating-star[data-filled] { color: Highlight; }
    .en-segmented-item[data-disabled] { background: Canvas; color: GrayText; border-color: GrayText; }
    .en-rating-item:has(:disabled) .en-rating-star, .en-rating-clear:has(:disabled) { color: GrayText; }
    .en-rating-item:has(:focus-visible), .en-rating-clear:has(:focus-visible), .en-segmented-item:has(:focus-visible) { outline-color: Highlight; }
  }
`);
//#endregion
//#region ../design-system/packages/elements/dist/radio-group/navigation.js
function Dr(e, t, n, r) {
	if (n === 0 || t < 0) return;
	let i;
	switch (e) {
		case "ArrowDown":
			i = t + 1;
			break;
		case "ArrowUp":
			i = t - 1;
			break;
		case "ArrowRight":
			i = t + (r ? -1 : 1);
			break;
		case "ArrowLeft":
			i = t + (r ? 1 : -1);
			break;
		case "Home":
			i = 0;
			break;
		case "End":
			i = n - 1;
			break;
		default: return;
	}
	return (i + n) % n;
}
//#endregion
//#region ../design-system/packages/primitives/dist/templates/description.js
function Or(e) {
	return C`<div id="description" part="description" class="en-description"><slot name="description"><span class="en-description-fallback">${e || E}</span></slot></div>`;
}
//#endregion
//#region ../design-system/node_modules/lit-html/directive.js
var kr = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, Ar = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), jr = class {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, t, n) {
		this._$Ct = e, this._$AM = t, this._$Ci = n;
	}
	_$AS(e, t) {
		return this.update(e, t);
	}
	update(e, t) {
		return this.render(...t);
	}
}, { I: Mr } = Ne, Nr = (e) => e, Pr = () => document.createComment(""), Q = (e, t, n) => {
	let r = e._$AA.parentNode, i = t === void 0 ? e._$AB : t._$AA;
	if (n === void 0) n = new Mr(r.insertBefore(Pr(), i), r.insertBefore(Pr(), i), e, e.options);
	else {
		let t = n._$AB.nextSibling, a = n._$AM, o = a !== e;
		if (o) {
			let t;
			n._$AQ?.(e), n._$AM = e, n._$AP !== void 0 && (t = e._$AU) !== a._$AU && n._$AP(t);
		}
		if (t !== i || o) {
			let e = n._$AA;
			for (; e !== t;) {
				let t = Nr(e).nextSibling;
				Nr(r).insertBefore(e, i), e = t;
			}
		}
	}
	return n;
}, $ = (e, t, n = e) => (e._$AI(t, n), e), Fr = {}, Ir = (e, t = Fr) => e._$AH = t, Lr = (e) => e._$AH, Rr = (e) => {
	e._$AR(), e._$AA.remove();
}, zr = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	for (let i = t; i <= n; i++) r.set(e[i], i);
	return r;
}, Br = Ar(class extends jr {
	constructor(e) {
		if (super(e), e.type !== kr.CHILD) throw Error("repeat() can only be used in text expressions");
	}
	dt(e, t, n) {
		let r;
		n === void 0 ? n = t : t !== void 0 && (r = t);
		let i = [], a = [], o = 0;
		for (let t of e) i[o] = r ? r(t, o) : o, a[o] = n(t, o), o++;
		return {
			values: a,
			keys: i
		};
	}
	render(e, t, n) {
		return this.dt(e, t, n).values;
	}
	update(e, [t, n, r]) {
		let i = Lr(e), { values: a, keys: o } = this.dt(t, n, r);
		if (!Array.isArray(i)) return this.ut = o, a;
		let s = this.ut ??= [], c = [], l, u, d = 0, f = i.length - 1, p = 0, m = a.length - 1;
		for (; d <= f && p <= m;) if (i[d] === null) d++;
		else if (i[f] === null) f--;
		else if (s[d] === o[p]) c[p] = $(i[d], a[p]), d++, p++;
		else if (s[f] === o[m]) c[m] = $(i[f], a[m]), f--, m--;
		else if (s[d] === o[m]) c[m] = $(i[d], a[m]), Q(e, c[m + 1], i[d]), d++, m--;
		else if (s[f] === o[p]) c[p] = $(i[f], a[p]), Q(e, i[d], i[f]), f--, p++;
		else if (l === void 0 && (l = zr(o, p, m), u = zr(s, d, f)), l.has(s[d])) {
			if (l.has(s[f])) {
				let t = u.get(o[p]), n = t === void 0 ? null : i[t];
				if (n === null) {
					let t = Q(e, i[d]);
					$(t, a[p]), c[p] = t;
				} else c[p] = $(n, a[p]), Q(e, i[d], n), i[t] = null;
				p++;
			} else Rr(i[f]), f--;
		} else Rr(i[d]), d++;
		for (; p <= m;) {
			let t = Q(e, c[m + 1]);
			$(t, a[p]), c[p++] = t;
		}
		for (; d <= f;) {
			let e = i[d++];
			e !== null && Rr(e);
		}
		return this.ut = o, Ir(e, c), T;
	}
});
//#endregion
//#region ../design-system/packages/elements/dist/segmented-control/template.js
function Vr(e, t, n, r, i, a) {
	return C`<fieldset class="en-fieldset en-field" part="field" ?disabled=${e.disabled}
      aria-describedby=${e.error ? "description child-error" : "description"}>
    <legend class="en-legend en-label" part="label"><slot name="label">${e.label}</slot></legend>
    <div class="en-segmented-control" part="options" @click=${a} @keydown=${n} @focusin=${r} @focusout=${i}>
      ${Br(e.items, (e) => e.key ?? e.value, (n) => C`
        <label class="en-segmented-item" part="option" data-selected=${n.value === e.value ? "" : E}
          data-disabled=${e.disabled || n.disabled ? "" : E} ?hidden=${n.hidden}>
          <input class="en-segmented-input en-sr-only" part="control" type="radio" name=${n.disabled || n.hidden ? E : "choice"}
            value=${n.value} ?checked=${n.value === e.value} ?disabled=${e.disabled || n.disabled || n.hidden}
            ?required=${e.required} tabindex=${!e.disabled && !n.disabled && !n.hidden && n.value === e.tabValue ? 0 : -1}
            @change=${t}>
          <span class="en-segmented-label" part="option-label" ?data-rich=${n.projected}>${n.projected ? C`<slot name=${`${Tn}${n.key}`}></slot>` : n.label || E}</span>
        </label>`)}
    </div>
    ${Or(e.description)}
    ${e.error ? C`<p id="child-error" class="en-error" part="error" role="status">${e.error}</p>` : E}
  </fieldset>`;
}
//#endregion
//#region ../design-system/packages/elements/dist/segmented-control/pointer.js
function Hr(e, t, n) {
	let r, i = Infinity;
	for (let a = 0; a < n.length; a++) {
		let o = n[a], s = Math.max(o.left - e, 0, e - o.right), c = Math.max(o.top - t, 0, t - o.bottom), l = s * s + c * c;
		l < i && (i = l, r = a);
	}
	return r;
}
//#endregion
//#region ../design-system/packages/elements/dist/segmented-control/element.js
var Ur = class extends j {
	static properties = {
		value: { noAccessor: !0 },
		items: { attribute: !1 },
		disabled: {
			type: Boolean,
			reflect: !0
		},
		required: { type: Boolean },
		name: {},
		label: {},
		description: {},
		validationText: { attribute: "validation-text" }
	};
	static styles = [
		R,
		nt,
		fn,
		Er
	];
	static formAssociated = !0;
	model = yr("");
	childOptions = new Nn(this, "segmented");
	hydrationChoice = this.captureHydrationChoice();
	hydrationRevision = 0;
	removedFocus;
	signals = new Cr(this, () => this.model.view.get());
	internals = typeof this.attachInternals == "function" ? this.attachInternals() : void 0;
	revision = 0;
	fieldsetDisabled = !1;
	focusedValue;
	formController = this.internals ? new Tr(this, {
		internals: this.internals,
		value: () => this.selectedItem && !this.selectedItem.disabled && !this.selectedItem.hidden ? this.value : null,
		state: () => this.value,
		disabled: () => this.effectiveDisabled,
		onReset: () => {
			this.value = this.getAttribute("value") ?? "", this.focusedValue = void 0, this.syncControls();
		},
		onRestore: (e) => {
			typeof e == "string" && (this.value = e), this.syncControls();
		},
		validate: () => ({
			flags: this.childOptions.current().error ? { customError: !0 } : this.required && (!this.selectedItem || this.selectedItem.disabled || this.selectedItem.hidden) ? { valueMissing: !0 } : {},
			message: this.childOptions.current().error || this.validationText,
			anchor: this.controls.find((e) => !e.disabled)
		})
	}) : void 0;
	constructor() {
		super(), this.items = [], this.disabled = !1, this.required = !1, this.name = "", this.label = "", this.description = "", this.validationText = "Please select an option.";
	}
	connectedCallback() {
		this.hydrationRevision = this.revision, super.connectedCallback();
	}
	captureHydrationChoice() {
		if (!this.hasAttribute("data-en-selection-children") || !this.shadowRoot) return;
		let e = [...this.shadowRoot.querySelectorAll("input[type=\"radio\"]")];
		return {
			value: e.find((e) => e.checked)?.value ?? "",
			baseline: e.find((e) => e.defaultChecked)?.value ?? ""
		};
	}
	get effectiveItems() {
		return this.childOptions.view.active ? this.childOptions.view.items.map((e) => ({
			...e,
			projected: !0
		})) : this.items;
	}
	currentItems() {
		let e = this.childOptions.current();
		return e.active ? e.items : this.items;
	}
	get value() {
		return this.model.value.get();
	}
	set value(e) {
		++this.revision, this.setValue(String(e ?? ""));
	}
	setValue(e) {
		let t = this.value;
		this.model.set(e), this.requestUpdate("value", t), this.syncControls(), this.formController?.sync();
	}
	get selectedItem() {
		return this.currentItems()?.find((e) => e.value === this.value);
	}
	get effectiveDisabled() {
		return this.disabled || this.fieldsetDisabled;
	}
	get controls() {
		return [...this.renderRoot?.querySelectorAll("input[type=\"radio\"]") ?? []];
	}
	get tabValue() {
		let e = this.effectiveItems?.filter((e) => !e.disabled && !e.hidden) ?? [];
		return e.find((e) => e.value === this.focusedValue)?.value ?? e.find((e) => e.value === this.value)?.value ?? e[0]?.value;
	}
	get form() {
		return this.internals?.form ?? null;
	}
	get validity() {
		return this.internals?.validity;
	}
	get validationMessage() {
		return this.internals?.validationMessage ?? "";
	}
	checkValidity() {
		return this.internals?.checkValidity?.() ?? !0;
	}
	reportValidity() {
		return this.internals?.reportValidity?.() ?? !0;
	}
	focus(e) {
		this.controls.find((e) => e.value === this.tabValue && !e.disabled)?.focus(e);
	}
	formDisabledCallback(e) {
		this.fieldsetDisabled = e, this.formController?.formDisabled(e), this.requestUpdate();
	}
	formResetCallback() {
		this.formController?.formReset();
	}
	formStateRestoreCallback(e, t = "restore") {
		this.formController?.formStateRestore(e, t);
	}
	syncControls() {
		if (this.hydrationChoice && !this.hasUpdated) return;
		let e = this.tabValue;
		for (let t of this.controls) t.checked = t.value === this.value, t.tabIndex = !this.effectiveDisabled && !t.disabled && t.value === e ? 0 : -1;
	}
	propose(e, t) {
		let n = this.currentItems().find((t) => t.value === e);
		!this.effectiveDisabled && n && !n.disabled && !n.hidden && Vt(this, {
			previous: this.value,
			proposed: e,
			reason: t,
			getRevision: () => this.revision,
			stage: (e) => this.setValue(e),
			rollback: (e) => this.setValue(e),
			canCommit: (e) => !this.effectiveDisabled && this.currentItems().some((t) => t.value === e && !t.disabled && !t.hidden)
		}), this.syncControls(), this.requestUpdate();
	}
	handleClick = (e) => {
		if (e.defaultPrevented || e.button !== 0 || e.detail <= 0 || e.target !== e.currentTarget || this.effectiveDisabled) return;
		let t = this.controls.flatMap((e) => {
			let t = e.closest("label");
			if (!t) return [];
			let n = t.getBoundingClientRect();
			return n.width > 0 && n.height > 0 ? [{
				control: e,
				rect: n
			}] : [];
		}), n = Hr(e.clientX, e.clientY, t.map(({ rect: e }) => e)), r = n === void 0 ? void 0 : t[n]?.control;
		r && !r.disabled && (r.focus(), r.click());
	};
	handleChange = (e) => {
		let t = e.target;
		this.focusedValue = t.value, this.propose(t.value, "select");
	};
	handleFocusIn = (e) => {
		let t = e.target;
		t.type === "radio" && (this.focusedValue = t.value, this.syncControls());
	};
	handleFocusOut = (e) => {
		let t = e.relatedTarget;
		t && this.renderRoot.contains(t) || (this.focusedValue = void 0, this.syncControls());
	};
	handleKeyDown = (e) => {
		if (e.defaultPrevented || e.isComposing || e.altKey || e.ctrlKey || e.metaKey || this.effectiveDisabled) return;
		let t = this.controls.filter((e) => !e.disabled), n = t.indexOf(e.target), r = this.ownerDocument.defaultView?.getComputedStyle(this).direction === "rtl", i = Dr(e.key, n, t.length, r);
		if (i === void 0) return;
		e.preventDefault();
		let a = t[i];
		a && (this.focusedValue = a.value, this.propose(a.value, "keyboard"), a.focus());
	};
	willUpdate(e) {
		super.willUpdate(e);
		let t = this.hydrationChoice;
		t && (this.hydrationChoice = void 0, this.revision === this.hydrationRevision && this.value === this.childOptions.initialValue && t.value !== t.baseline && this.propose(t.value, "hydrate"));
		let n = this.shadowRoot?.activeElement;
		n && this.controls.includes(n) && (this.removedFocus = {
			control: n,
			index: this.controls.indexOf(n),
			root: this.getRootNode()
		});
	}
	updated(e) {
		this.syncControls(), this.formController?.sync();
		let t = this.removedFocus;
		if (this.removedFocus = void 0, t && (!t.control.isConnected || t.control.disabled) && this.canRecoverFocus(t)) {
			let e = this.controls.filter((e) => !e.disabled && e.closest("label")?.getClientRects().length);
			e[Math.min(t.index, e.length - 1)]?.focus();
		}
	}
	canRecoverFocus(e) {
		let t = this.ownerDocument;
		if (!this.isConnected || this.effectiveDisabled || this.getRootNode() !== e.root || !t.hasFocus()) return !1;
		let n = this.shadowRoot?.activeElement;
		if (n && n !== e.control) return !1;
		let r = this, i = this.getRootNode();
		for (;;) {
			let e = i.activeElement, n = e === null || i === t && (e === t.body || e === t.documentElement);
			if (e !== r && !n) return !1;
			if (i === t) return !0;
			r = i.host, i = r.getRootNode();
		}
	}
	render() {
		return Vr({
			items: this.effectiveItems,
			value: this.value,
			tabValue: this.tabValue,
			label: this.label,
			description: this.description,
			disabled: this.effectiveDisabled,
			required: this.required,
			error: this.childOptions.view.error
		}, this.handleChange, this.handleKeyDown, this.handleFocusIn, this.handleFocusOut, this.handleClick);
	}
}, Wr = class extends A {
	staticStyles = new He(this);
	static properties = {
		value: {
			noAccessor: !0,
			reflect: !0,
			useDefault: !0
		},
		disabled: {
			type: Boolean,
			noAccessor: !0,
			reflect: !0,
			useDefault: !0
		},
		label: {
			type: String,
			noAccessor: !0,
			reflect: !0,
			useDefault: !0
		}
	};
	#e = "";
	get value() {
		return this.#e;
	}
	set value(e) {
		let t = this.#e;
		this.#e = String(e ?? ""), this.getAttribute("value") !== this.#e && this.setAttribute("value", this.#e);
		let n = this.getAttribute("value") === this.#e ? void 0 : Object.assign(Object.create(this.constructor.getPropertyOptions("value")), { hasChanged: () => !0 });
		this.requestUpdate("value", t, n);
	}
	#t = !1;
	get disabled() {
		return this.#t;
	}
	set disabled(e) {
		let t = this.#t;
		this.#t = !!e, this.hasAttribute("disabled") !== this.#t && this.toggleAttribute("disabled", this.#t), this.requestUpdate("disabled", t);
	}
	#n = "";
	get label() {
		return this.#n;
	}
	set label(e) {
		let t = this.#n;
		this.#n = String(e ?? ""), this.getAttribute("label") !== this.#n && this.setAttribute("label", this.#n), this.requestUpdate("label", t);
	}
}, Gr = class extends Wr {
	static styles = o`:host { display: contents; } :host([hidden]) { display: none !important; }`;
	render() {
		return C`<slot>${this.label || E}</slot>`;
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/segmented-control.js
B(customElements, {
	tagName: "en-segmented-control",
	elementClass: Ur,
	dependencies: [{
		tagName: "en-segmented-item",
		elementClass: Gr
	}]
});
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/editing-controller.js
var Kr = class {
	#e;
	#t;
	#n = null;
	#r;
	#i = !1;
	#a;
	#o = /* @__PURE__ */ new WeakSet();
	constructor(e, t) {
		this.#e = e, this.#t = t, e.addController(this);
	}
	hostConnected() {
		this.#i = !0;
	}
	hostUpdated() {
		this.#c(), this.sync();
	}
	hostDisconnected() {
		this.#i = !1, this.#l(), this.#r?.abort(), this.#r = void 0, this.#n = null;
	}
	sync() {
		let e = this.#n;
		if (!e || this.#t.model.isComposing.get()) return;
		let t = this.#t.model.draft.get();
		e.value !== t && (this.#a = void 0, e.value = t);
	}
	#s(e, t, n) {
		let r = this.#t.model.view.get().revision, i = Object.freeze({
			value: e,
			isComposing: t,
			inputType: n
		});
		return Ht(this.#e, i), this.#t.onInput?.(i), this.#t.model.view.get().revision === r;
	}
	#c() {
		if (!this.#i) return;
		let e = this.#t.control();
		if (e === this.#n || (this.#l(), this.#r?.abort(), this.#n = e, !e)) return;
		let t = e.ownerDocument.defaultView?.AbortController ?? globalThis.AbortController;
		this.#r = new t();
		let n = { signal: this.#r.signal }, r = this.#t.model;
		if (e.addEventListener("compositionstart", () => {
			this.#a = void 0, r.startComposition(), r.setDraft(e.value), this.#e.requestUpdate();
		}, n), e.addEventListener("compositionend", () => {
			let t = e.value, n = r.hasDeferredValue.get();
			r.endComposition(t), this.#a = t, this.#s(t, !1, "insertCompositionText") && !n && t !== r.value.get() && this.#t.onCommit?.(t, "compositionend"), this.sync(), this.#e.requestUpdate();
		}, n), e.addEventListener("input", (t) => {
			let n = t;
			n.isComposing && !r.isComposing.get() && r.startComposition();
			let i = e.value;
			r.setDraft(i);
			let a = r.isComposing.get(), o = this.#s(i, a, n.inputType ?? ""), s = !a && i === this.#a;
			a || (this.#a = void 0), o && !a && !s && i !== r.value.get() && this.#t.onCommit?.(i, "input"), this.sync(), this.#e.requestUpdate();
		}, n), e.addEventListener("change", () => {
			r.isComposing.get() || (r.setDraft(e.value), e.value !== r.value.get() && this.#t.onCommit?.(e.value, "change"), this.sync(), this.#e.requestUpdate());
		}, n), !this.#o.has(e) && (this.#o.add(e), (this.#t.adoptInitialValue?.(e) ?? e.value !== e.defaultValue) && e.value !== r.draft.get())) {
			let t = e.value;
			r.setDraft(t), this.#s(t, !1, "hydrate") && t !== r.value.get() && this.#t.onCommit?.(t, "hydrate");
		}
	}
	#l() {
		this.#t.model.isComposing.get() && this.#t.model.endComposition(this.#n?.value), this.#a = void 0;
	}
};
//#endregion
//#region ../design-system/packages/primitives/dist/state/draft.js
function qr(e = "") {
	let t = new Z.State(Object.freeze({
		value: e,
		draft: e,
		isComposing: !1,
		dirty: !1,
		revision: 0,
		deferredAuthorWrite: !1
	})), n = (e) => {
		let n = t.get(), r = {
			...n,
			...e
		};
		return r.value === n.value && r.draft === n.draft && r.isComposing === n.isComposing && r.deferredAuthorWrite === n.deferredAuthorWrite ? !1 : (t.set(Object.freeze({
			...r,
			dirty: r.value !== r.draft,
			revision: n.revision + 1
		})), !0);
	}, r = (e) => t.get().isComposing ? n({
		value: e,
		deferredAuthorWrite: !0
	}) : n({
		value: e,
		draft: e,
		deferredAuthorWrite: !1
	});
	return {
		value: new Z.Computed(() => t.get().value),
		draft: new Z.Computed(() => t.get().draft),
		isComposing: new Z.Computed(() => t.get().isComposing),
		hasDeferredValue: new Z.Computed(() => t.get().deferredAuthorWrite),
		view: new Z.Computed(() => {
			let { deferredAuthorWrite: e, ...n } = t.get();
			return Object.freeze(n);
		}),
		setValue: r,
		stageValue: (e) => n({ value: e }),
		setDraft: (e) => n({ draft: e }),
		startComposition: () => n({ isComposing: !0 }),
		endComposition: (e) => {
			let r = t.get();
			return n({
				draft: r.deferredAuthorWrite ? r.value : e ?? r.draft,
				isComposing: !1,
				deferredAuthorWrite: !1
			});
		},
		acceptDraft: () => !t.get().isComposing && r(t.get().draft),
		reset: () => r(e)
	};
}
//#endregion
//#region ../design-system/packages/elements/dist/forms-private/form-field.js
var Jr = class extends j {
	static formAssociated = !0;
	static styles = [
		R,
		fn,
		cn,
		o`:host { display: block; }`
	];
	static properties = {
		label: { type: String },
		description: { type: String },
		error: { type: String },
		value: {
			type: String,
			noAccessor: !0
		},
		name: {
			type: String,
			reflect: !0
		},
		disabled: {
			type: Boolean,
			reflect: !0
		},
		required: {
			type: Boolean,
			reflect: !0
		},
		placeholder: { type: String }
	};
	model = qr();
	signal = new Cr(this, () => this.model.view.get());
	internals;
	formAdapter;
	authorRevision = 0;
	initialValue;
	showNativeError = !1;
	nativeErrorMessage = "";
	constructor() {
		super(), this.label = "", this.description = "", this.error = "", this.name = "", this.disabled = !1, this.required = !1, this.placeholder = "", this.internals = typeof this.attachInternals == "function" ? this.attachInternals() : void 0, this.internals && (this.formAdapter = new Tr(this, {
			internals: this.internals,
			control: () => this.controlNode,
			value: () => this.submissionValue,
			state: () => this.value,
			disabled: () => this.disabled,
			validate: () => this.validateAcceptedValue(),
			onReset: () => {
				this.showNativeError = !1, this.value = this.initialValue ?? "";
			},
			onRestore: (e) => {
				typeof e == "string" && (this.value = e);
			}
		})), this.addEventListener("invalid", () => {
			this.showNativeError = !0, this.requestUpdate();
		});
	}
	get value() {
		return this.model.value.get();
	}
	set value(e) {
		let t = this.value;
		this.authorRevision++, this.model.setValue(String(e ?? "")), this.reconcile(), this.syncForm(), this.requestUpdate("value", t);
	}
	get form() {
		return this.internals?.form ?? null;
	}
	get labels() {
		return this.internals?.labels;
	}
	get validity() {
		return this.internals?.validity ?? this.controlNode?.validity;
	}
	get validationMessage() {
		return this.internals?.validationMessage ?? "";
	}
	get willValidate() {
		return this.internals?.willValidate ?? !1;
	}
	willUpdate(e) {
		super.willUpdate(e), this.initialValue === void 0 && (this.initialValue = this.value);
	}
	focus(e) {
		this.controlNode?.focus(e);
	}
	blur() {
		this.controlNode?.blur();
	}
	checkValidity() {
		return this.syncForm(), this.internals?.checkValidity?.() ?? this.controlNode?.checkValidity() ?? !0;
	}
	reportValidity() {
		return this.syncForm(), this.internals?.reportValidity?.() ?? this.controlNode?.reportValidity() ?? !0;
	}
	formResetCallback() {
		this.formAdapter?.formReset();
	}
	formDisabledCallback(e) {
		this.formAdapter?.formDisabled(e);
	}
	formStateRestoreCallback(e, t) {
		this.formAdapter?.formStateRestore(e, t);
	}
	get submissionValue() {
		return this.value;
	}
	get isDisabled() {
		return this.formAdapter?.disabled ?? this.disabled;
	}
	get defaultControlValue() {
		return this.initialValue ?? this.value;
	}
	get controlNode() {
		return this.shadowRoot?.querySelector("#control") ?? null;
	}
	get describedBy() {
		return this.visibleError ? "description error" : "description";
	}
	get visibleError() {
		return this.error || (this.showNativeError ? this.nativeErrorMessage : "");
	}
	get controlAriaInvalid() {
		return this.visibleError ? "true" : E;
	}
	renderControlFrame() {
		return C`<div class="en-field-focus-frame" part="focus-frame">${this.renderControl()}</div>`;
	}
	get valueRevision() {
		return this.authorRevision;
	}
	canCommitValue(e) {
		return !0;
	}
	stageValue(e) {
		let t = this.value;
		this.model.stageValue(e), this.syncForm(), this.requestUpdate("value", t);
	}
	requestValue(e, t) {
		this.isDisabled || Vt(this, {
			previous: this.value,
			proposed: e,
			reason: t,
			getRevision: () => this.authorRevision,
			canCommit: (e) => this.canCommitValue(e),
			stage: (e) => this.stageValue(e),
			rollback: (e) => this.stageValue(e),
			commit: (e) => {
				this.model.setValue(e), this.reconcile(), this.syncForm(), this.requestUpdate();
			}
		});
	}
	updated(e) {
		super.updated(e), this.reconcile(), this.syncForm();
	}
	syncForm() {
		let e = this.nativeErrorMessage;
		this.formAdapter?.sync(), this.nativeErrorMessage = this.validationMessage, this.showNativeError && e !== this.nativeErrorMessage && this.requestUpdate();
	}
	validateAcceptedValue() {
		let e = this.controlNode;
		if (!e) return { flags: {} };
		let t = e.value === this.value ? e : e.cloneNode(!0);
		t !== e && (t.value = this.value), t.setCustomValidity(this.error);
		let n = t.validity;
		return {
			flags: {
				badInput: n.badInput,
				customError: n.customError,
				patternMismatch: n.patternMismatch,
				rangeOverflow: n.rangeOverflow,
				rangeUnderflow: n.rangeUnderflow,
				stepMismatch: n.stepMismatch,
				tooLong: n.tooLong,
				tooShort: n.tooShort,
				typeMismatch: n.typeMismatch,
				valueMissing: n.valueMissing
			},
			message: n.valid ? "" : t.validationMessage,
			anchor: e
		};
	}
	render() {
		return C`<div class="en-field" part="field" data-invalid=${this.visibleError ? "" : E}>
      <label class="en-label" part="label" for="control"><slot name="label">${this.label}</slot></label>
      ${this.renderControlFrame()}
      ${Or(this.description)}
      ${this.visibleError ? C`<div class="en-error" part="error" id="error">${this.visibleError}</div>` : E}
    </div>`;
	}
}, Yr = class extends Jr {
	static properties = {
		...Jr.properties,
		readOnly: {
			type: Boolean,
			attribute: "readonly",
			reflect: !0
		},
		autocomplete: { type: String },
		inputMode: {
			type: String,
			attribute: "inputmode"
		}
	};
	editing = new Kr(this, {
		model: this.model,
		control: () => this.controlNode,
		onCommit: (e, t) => {
			this.readOnly || this.requestValue(e, t);
		}
	});
	constructor() {
		super(), this.readOnly = !1, this.autocomplete = "", this.inputMode = "";
	}
	reconcile() {
		this.editing?.sync();
	}
	select() {
		this.controlNode?.select();
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/search-input.js
B(customElements, {
	tagName: "en-search-input",
	elementClass: class extends Yr {
		renderControl() {
			return C`<input id="control" class="en-input" part="control" type="search"
      name=${this.name} value=${this.defaultControlValue} placeholder=${this.placeholder || E}
      autocomplete=${this.autocomplete || E} inputmode=${this.inputMode || E}
      ?disabled=${this.isDisabled} ?readonly=${this.readOnly} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}>`;
		}
	}
});
//#endregion

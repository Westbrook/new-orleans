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
var se = globalThis, ce = (e) => e, le = se.trustedTypes, ue = le ? le.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, de = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, fe = "?" + _, pe = `<${fe}>`, v = document, me = () => v.createComment(""), he = (e) => e === null || typeof e != "object" && typeof e != "function", ge = Array.isArray, _e = (e) => ge(e) || typeof e?.[Symbol.iterator] == "function", ve = "[ 	\n\f\r]", ye = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, be = /-->/g, xe = />/g, y = RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), Se = /'/g, Ce = /"/g, we = /^(?:script|style|textarea|title)$/i, Te = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), b = Te(1), x = Te(2), S = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Ee = /* @__PURE__ */ new WeakMap(), w = v.createTreeWalker(v, 129);
function De(e, t) {
	if (!ge(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return ue === void 0 ? t : ue.createHTML(t);
}
var Oe = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = ye;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === ye ? c[1] === "!--" ? o = be : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = y) : (we.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = y) : o = xe : o === y ? c[0] === ">" ? (o = i ?? ye, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? y : c[3] === "\"" ? Ce : Se) : o === Ce || o === Se ? o = y : o === be || o === xe ? o = ye : (o = y, i = void 0);
		let d = o === y && e[t + 1].startsWith("/>") ? " " : "";
		a += o === ye ? n + pe : l >= 0 ? (r.push(s), n.slice(0, l) + de + n.slice(l) + _ + d) : n + _ + (l === -2 ? t : d);
	}
	return [De(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, ke = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Oe(t, n);
		if (this.el = e.createElement(l, r), w.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = w.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(de)) {
					let t = u[o++], n = i.getAttribute(e).split(_), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Me : r[1] === "?" ? Ne : r[1] === "@" ? Pe : E
					}), i.removeAttribute(e);
				} else e.startsWith(_) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (we.test(i.tagName)) {
					let e = i.textContent.split(_), t = e.length - 1;
					if (t > 0) {
						i.textContent = le ? le.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], me()), w.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], me());
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
function T(e, t, n = e, r) {
	if (t === S) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = he(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = T(e, i._$AS(e, t.values), i, r)), t;
}
var Ae = class {
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
		w.currentNode = r;
		let i = w.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new je(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Fe(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = w.nextNode(), a++);
		}
		return w.currentNode = v, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, je = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = T(this, e, t), he(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== S && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? _e(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== C && he(this._$AH) ? this._$AA.nextSibling.data = e : this.T(v.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ke.createElement(De(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Ae(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Ee.get(e.strings);
		return t === void 0 && Ee.set(e.strings, t = new ke(e)), t;
	}
	k(t) {
		ge(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(me()), this.O(me()), this, this.options)) : r = n[i], r._$AI(a), i++;
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
}, E = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = C;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = T(this, e, t, 0), a = !he(e) || e !== this._$AH && e !== S, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = T(this, r[n + o], t, o), s === S && (s = this._$AH[o]), a ||= !he(s) || s !== this._$AH[o], s === C ? e = C : e !== C && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Me = class extends E {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === C ? void 0 : e;
	}
}, Ne = class extends E {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== C);
	}
}, Pe = class extends E {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = T(this, e, t, 0) ?? C) === S) return;
		let n = this._$AH, r = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== C && (n === C || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Fe = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		T(this, e);
	}
}, Ie = {
	M: de,
	P: _,
	A: fe,
	C: 1,
	L: Oe,
	R: Ae,
	D: _e,
	V: T,
	I: je,
	H: E,
	N: Ne,
	U: Pe,
	B: Me,
	F: Fe
}, Le = se.litHtmlPolyfillSupport;
Le?.(ke, je), (se.litHtmlVersions ??= []).push("3.3.3");
var Re = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new je(t.insertBefore(me(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, ze = globalThis, D = class extends g {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Re(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return S;
	}
};
D._$litElement$ = !0, D.finalized = !0, ze.litElementHydrateSupport?.({ LitElement: D });
var Be = ze.litElementPolyfillSupport;
Be?.({ LitElement: D }), (ze.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/static-styles.js
var Ve = "data-en-static-styles", He = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap();
function We(e) {
	let t = e.constructor;
	if (He.has(t)) return He.get(t);
	let n = t.elementStyles, r = n.length > 0 && n.every((e) => "cssText" in e && typeof e.cssText == "string" && !/@(?:import|namespace)\b/i.test(e.cssText)) ? n : null;
	return He.set(t, r), r;
}
var Ge = class {
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
		let r = We(this.#e);
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
		let n = Ue.get(t);
		n === void 0 && (n = t.map((e) => e.cssText).join(""), Ue.set(t, n));
		let r = this.#e.ownerDocument.createElement("style");
		r.setAttribute(Ve, "v1"), this.#s && (r.nonce = this.#s), r.textContent = n, e.insertBefore(r, e.firstChild);
		try {
			e.adoptedStyleSheets = e.adoptedStyleSheets.filter((e) => !this.#o.includes(e));
		} catch {}
		this.#i = void 0, this.#a = void 0, this.#o = [];
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/internal/en-element.js
function Ke(e) {
	return e === "inherit" || e === "small" || e === "large" ? e : "medium";
}
var O = class extends D {
	staticStyles = new Ge(this);
	static properties = { size: {
		reflect: !0,
		useDefault: !0,
		noAccessor: !0,
		converter: {
			fromAttribute: Ke,
			toAttribute: Ke
		}
	} };
	#e = "medium";
	get size() {
		return this.#e;
	}
	set size(e) {
		let t = this.#e, n = Ke(e);
		this.#e = n;
		let r = this.getAttribute("size") === n ? void 0 : Object.assign(Object.create(this.constructor.getPropertyOptions("size")), { hasChanged: () => !0 });
		this.requestUpdate("size", t, r);
	}
}, qe = Object.freeze({
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
	"--en-space-12": "3rem",
	"--en-space-2": "0.5rem",
	"--en-space-6": "1.5rem",
	"--en-space-1": "0.25rem",
	"--en-space-8": "2rem",
	"--en-space-0-5": "0.125rem",
	"--en-space-1-5": "0.375rem",
	"--en-focus-accent-width": "0px",
	"--en-space-0": "0rem",
	"--en-layout-panel-preferred": "20rem",
	"--en-radius-container": "1rem",
	"--en-shadow-overlay": "0px 4px 16px 0px rgb(0 0 0 / 0.18)",
	"--en-space-control-block": "0.375rem",
	"--en-focus-inset-offset": "-2px",
	"--en-font-ui-weight": "400",
	"--en-font-label-strong-weight": "600",
	"--en-space-actions": "0.375rem",
	"--en-size-control-min": "2.5rem",
	"--en-space-panel": "1.5rem",
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
	"--en-space-16": "4rem",
	"--en-space-2-5": "0.625rem",
	"--en-space-5": "1.25rem",
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
function Je(e) {
	if (!Object.hasOwn(qe, e)) throw RangeError("Unknown token " + e);
	return qe[e];
}
//#endregion
//#region ../design-system/packages/tokens/dist/sizing.js
var Ye = Object.freeze([
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
var Xe = Object.freeze({
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
}), Ze = Object.freeze(Object.entries(Xe).map(([e, t]) => Object.freeze({
	role: `--en-${e.replaceAll(".", "-")}`,
	base: `--en-${t.replaceAll(".", "-")}`,
	variants: Object.freeze(Object.fromEntries(Ye.map((t) => [t, `--en-${e.replaceAll(".", "-")}-${t}`])))
})));
//#endregion
//#region ../design-system/packages/styles/dist/internal/values.js
function Qe(e) {
	let t = Je(e);
	if (!t) throw Error(`Missing stylesheet token default: ${e}`);
	return o`var(${a(e)}, ${a(t)})`;
}
var $e = new Map(Ze.map(({ base: e, role: t }) => [e, `--_en-sized-${t.slice(5)}`]));
function k(e) {
	let t = Qe(e), n = $e.get(e);
	return n ? o`var(${a(n)}, ${t})` : t;
}
function A(e, t) {
	return o`var(${a(e)}, ${t})`;
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/focus-core.js
function et(e, t, n) {
	return e ? A(`--en-${e}-focus-${t}`, n) : n;
}
function tt(e) {
	let t = et(e.family, "width", k("--en-focus-width"));
	return {
		width: t,
		offset: et(e.family, "offset", e.inset ? o`calc(0px - ${t})` : k("--en-focus-offset")),
		color: et(e.family, "color", k("--en-color-focus")),
		haloWidth: e.halo === !1 ? o`0px` : et(e.family, "halo-width", k("--en-focus-halo-width")),
		haloColor: et(e.family, "halo-color", k("--en-color-focus-halo"))
	};
}
function j(e = {}) {
	let t = tt(e);
	return o`max(0px, calc(${t.width} + ${t.offset}), ${t.haloWidth})`;
}
var nt = o`max(${j()}, ${j({ family: "button" })}, ${j({ family: "input" })}, ${j({
	family: "option",
	inset: !0
})}, ${j({ family: "overlay" })})`;
function M(e, t = {}) {
	return o`${e} {
    scroll-margin-block: max(${k("--en-focus-scroll-margin-block")}, ${j(t)});
    scroll-margin-inline: max(${k("--en-focus-scroll-margin-inline")}, ${j(t)});
  }`;
}
function N(e, t = {}) {
	return P(o`${e}:focus-visible`, {
		...t,
		restSelector: t.restSelector ?? e
	});
}
function P(e, t = {}) {
	let n = tt(t), r = t.restSelector, i = r && t.halo !== !1, a = t.baseShadow ?? o`0 0 0 0 transparent`, s = t.baseTransitions ? o`${t.baseTransitions},` : o``;
	return o`
    ${r ? M(r, t) : o``}
    ${i ? o`${r} {
      box-shadow: 0 0 0 0 ${n.haloColor}, ${a};
      transition: ${s} box-shadow ${k("--en-duration-focus-exit")} ${k("--en-ease-focus-exit")};
    }` : o``}
    ${e} {
      outline: ${n.width} solid ${n.color};
      outline-offset: ${n.offset};
      box-shadow: 0 0 0 ${n.haloWidth} ${n.haloColor}, ${a};
      ${i ? o`transition: ${s} box-shadow ${k("--en-duration-focus-enter")} ${k("--en-ease-focus-enter")};` : o``}
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
function F(e) {
	let t = Ze.filter(({ role: t }) => e.cssText.includes(`var(--_en-sized-${t.slice(5)},`)).map(({ role: e, variants: t }) => `--_en-sized-${e.slice(5)}: calc(${Qe(t.small).cssText} * var(--_en-size-small, 0) + ${Qe(t.medium).cssText} * var(--_en-size-medium, 1) + ${Qe(t.large).cssText} * var(--_en-size-large, 0));`).join("\n");
	return t ? o`:host, .en-foundation { ${a(t)} } ${e}` : e;
}
//#endregion
//#region ../design-system/packages/styles/dist/typography.js
var rt = F(o`
  .en-body, .en-prose, .en-heading-small, .en-heading-medium, .en-heading-large, .en-metadata, .en-data {
    margin: 0;
    overflow-wrap: break-word;
  }
  .en-body, .en-prose {
    color: ${k("--en-color-text")};
    font: ${k("--en-font-body-weight")} ${k("--en-font-body-size")} / ${k("--en-font-body-line-height")} ${k("--en-font-body-family")};
  }
  .en-prose {
    max-inline-size: ${A("--en-prose-max-inline-size", k("--en-layout-prose-max"))};
  }
  .en-prose :where(p, ul, ol, dl, blockquote) { margin-block: 0 ${k("--en-space-4")}; }
  .en-prose :where(ul, ol) { padding-inline-start: ${k("--en-space-6")}; }
  .en-heading-small {
    font: ${k("--en-font-heading-small-weight")} ${k("--en-font-heading-small-size")} / ${k("--en-font-heading-small-line-height")} ${k("--en-font-heading-small-family")};
  }
  .en-heading-medium {
    font: ${k("--en-font-heading-medium-weight")} ${k("--en-font-heading-medium-size")} / ${k("--en-font-heading-medium-line-height")} ${k("--en-font-heading-medium-family")};
  }
  .en-heading-large {
    font: ${k("--en-font-heading-large-weight")} ${k("--en-font-heading-large-size")} / ${k("--en-font-heading-large-line-height")} ${k("--en-font-heading-large-family")};
  }
  .en-metadata {
    color: ${k("--en-color-text-muted")};
    font: ${k("--en-font-metadata-weight")} ${k("--en-font-metadata-size")} / ${k("--en-font-metadata-line-height")} ${k("--en-font-metadata-family")};
  }
  .en-data {
    font: ${k("--en-font-data-weight")} ${k("--en-font-data-size")} / ${k("--en-font-data-line-height")} ${k("--en-font-data-family")};
    font-variant-numeric: tabular-nums;
  }
`), I = o`:host { display: block; min-inline-size: 0; }`, it = o`:host { display: inline-block; vertical-align: middle; max-inline-size: 100%; }`, at = o`:host { display: inline-flex; align-items: center; justify-content: center; color: inherit; line-height: 0; vertical-align: middle; }`, L = F(o`
  ${o`
  :host, .en-foundation { --_en-size-small: 0; --_en-size-medium: 1; --_en-size-large: 0; }
  :host([size='inherit']), .en-foundation[data-size='inherit'] { --_en-size-small: inherit; --_en-size-medium: inherit; --_en-size-large: inherit; }
  :host([size='small']), .en-foundation[data-size='small'] { --_en-size-small: 1; --_en-size-medium: 0; --_en-size-large: 0; }
  :host([size='medium']), .en-foundation[data-size='medium'] { --_en-size-small: 0; --_en-size-medium: 1; --_en-size-large: 0; }
  :host([size='large']), .en-foundation[data-size='large'] { --_en-size-small: 0; --_en-size-medium: 0; --_en-size-large: 1; }
`}
  :host, .en-foundation {
    box-sizing: border-box;
    color: ${k("--en-color-text")};
    font-family: ${k("--en-font-ui-family")};
    font-size: ${k("--en-font-ui-size")};
    font-weight: ${k("--en-font-ui-weight")};
    line-height: ${k("--en-font-ui-line-height")};
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
  ${M(o`:where(:host([tabindex]), .en-foundation[tabindex]),
    :where(:host, .en-foundation) :where(button, input, textarea, select, a[href], [tabindex])`)}
  :host(:focus-visible), .en-foundation:focus-visible {
    outline: ${k("--en-focus-width")} solid ${k("--en-color-focus")};
    outline-offset: ${k("--en-focus-offset")};
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
`), ot = o`
  .en-button {
    padding-inline: ${A("--en-control-inline-padding", A("--en-button-inline-padding", k("--en-space-control-inline")))};
    display: inline-flex;
    min-inline-size: ${k("--en-size-target-min")};
    align-items: center;
    justify-content: center;
    gap: ${k("--en-space-icon-label")};
    border-color: ${A("--en-button-border-color", k("--en-color-action"))};
    border-radius: ${A("--en-button-radius", k("--en-radius-control"))};
    background: ${A("--en-button-background", k("--en-color-action"))};
    color: ${A("--en-button-color", k("--en-color-on-action"))};
    font-weight: ${k("--en-font-label-strong-weight")};
    text-align: center;
    text-decoration: none;
    white-space: normal;
    overflow-wrap: break-word;
    cursor: pointer;
    transition: background-color ${k("--en-duration-fast")} ${k("--en-ease-standard")},
      border-color ${k("--en-duration-fast")} ${k("--en-ease-standard")};
  }
  @media (hover: hover) { .en-button:where(:not(:disabled):not([aria-disabled='true']):hover) { background: ${A("--en-button-background", k("--en-color-action-hover"))}; } }
  .en-button:where(:not(:disabled):not([aria-disabled='true']):active) { background: ${A("--en-button-background", k("--en-color-action-pressed"))}; }
  .en-button--secondary, .en-button[data-variant='secondary'] {
    background: ${A("--en-button-background", k("--en-color-surface-subtle"))};
    color: ${A("--en-button-color", k("--en-color-text"))};
    border-color: ${A("--en-button-border-color", k("--en-color-boundary"))};
  }
  .en-button--quiet, .en-button[data-variant='ghost'] {
    background: none;
    color: ${A("--en-button-color", k("--en-color-action-text"))};
    border-color: ${A("--en-button-border-color", k("--en-color-line"))};
  }
  @media (hover: hover) { :is(.en-button--secondary, .en-button--quiet, .en-button[data-variant='secondary'], .en-button[data-variant='ghost']):not(:disabled):not([aria-disabled='true']):hover {
    background: ${A("--en-button-background", k("--en-color-selected"))};
  } }
  .en-button--danger, .en-button[data-variant='danger'] {
    background: ${A("--en-button-background", k("--en-color-surface"))};
    color: ${A("--en-button-color", k("--en-color-danger-text"))};
    border-color: ${A("--en-button-border-color", k("--en-color-danger-text"))};
  }
  @media (hover: hover) { :is(.en-button--danger, .en-button[data-variant='danger']):not(:disabled):not([aria-disabled='true']):hover {
    background: ${A("--en-button-background", k("--en-color-surface-subtle"))};
  } }
  .en-button__prefix, .en-button__suffix { display: contents; }
  .en-button__label { min-inline-size: 0; }
  .en-icon-button { padding-inline: ${k("--en-space-2")}; min-inline-size: max(${A("--en-control-min-size", k("--en-size-control-min"))}, ${k("--en-size-target-min")}); }
  /* Explicit button mode; existing stepper/overlay icon recipes retain their layout. */
  .en-button[data-icon-only] {
    --_en-icon-button-side: max(var(--_en-text-control-block-size), calc(max(${A("--en-icon-size", k("--en-size-icon"))}, ${k("--en-size-spinner")}) + 2 * ${k("--en-space-control-block")} + 2 * ${k("--en-border-width")}));
    min-inline-size: var(--_en-icon-button-side);
    min-block-size: var(--_en-icon-button-side);
    inline-size: max-content;
    aspect-ratio: 1;
    padding: ${k("--en-space-control-block")};
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

`, st = o`background-color ${k("--en-duration-fast")} ${k("--en-ease-standard")}, border-color ${k("--en-duration-fast")} ${k("--en-ease-standard")}`, ct = N(o`.en-button`, {
	family: "button",
	baseTransitions: st
}), lt = o`@media (hover: hover) { .en-button:not(:disabled):not([aria-disabled='true']):hover { background: Highlight !important; color: HighlightText !important; } }`, ut = o`max(0px, ${A("--en-segmented-control-frame-inset", k("--en-space-1"))})`, R = o`calc(${ut} + ${k("--en-border-width")})`;
function dt(e = !1) {
	let t = k(e ? "--en-size-target-touch" : "--en-size-target-min"), n = k("--en-space-control-block"), r = k("--en-border-width"), i = o`max(calc(${k("--en-space-1")} + ${r}), ${R})`;
	return o`max(
    ${A("--en-control-min-size", k("--en-size-control-min"))},
    calc(${t} + 2 * ${i}),
    calc(${k("--en-font-input-size")} * ${k("--en-font-input-line-height")} + 2 * ${n} + 2 * ${r}),
    calc(${k("--en-font-ui-size")} * ${k("--en-font-ui-line-height")} + 2 * max(${n}, ${i}) + 2 * ${r})
  )`;
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/control-shared.js
function ft(e, t = !1) {
	return o`${e} { --_en-text-control-block-size: ${dt(t)}; }`;
}
function pt(e) {
	return o`${e} {
    box-sizing: border-box;
    min-inline-size: 0;
    min-block-size: max(${A("--en-control-min-size", k("--en-size-control-min"))}, ${k("--en-size-target-min")});
    max-inline-size: 100%;
    padding-block: ${k("--en-space-control-block")};
    padding-inline: ${A("--en-control-inline-padding", k("--en-space-control-inline"))};
    border: ${k("--en-border-width")} solid ${A("--en-control-border-color", k("--en-color-boundary"))};
    border-radius: ${A("--en-control-radius", k("--en-radius-control"))};
    background: ${A("--en-control-background", k("--en-color-surface"))};
    color: ${A("--en-control-color", k("--en-color-text"))};
    font: inherit;
    text-align: start;
  }`;
}
function mt(e) {
	return o`${e} { min-block-size: var(--_en-text-control-block-size); }`;
}
function ht(e) {
	return o`${e} {
    color: ${k("--en-color-text-muted")};
    background: ${k("--en-color-surface-subtle")};
    border-color: ${k("--en-color-boundary")};
    cursor: default;
  }`;
}
function gt(e) {
	return o`${e} { min-block-size: max(${A("--en-control-min-size", k("--en-size-control-min"))}, ${k("--en-size-target-touch")}); }`;
}
function _t(e) {
	return o`${e} { min-inline-size: max(${A("--en-control-min-size", k("--en-size-control-min"))}, ${k("--en-size-target-touch")}); }`;
}
function vt(e) {
	return o`${e} { transition: none; }`;
}
function yt(e) {
	return o`${e} { color: CanvasText !important; background: Canvas !important; border-color: ButtonText !important; }`;
}
function bt(e) {
	return o`${e} { color: GrayText !important; border-color: GrayText !important; }`;
}
//#endregion
//#region ../design-system/packages/styles/dist/buttons.js
var xt = F(o`
  ${ft(o`.en-button:not(.en-icon-button), .en-button[data-icon-only]`)}
  ${pt(o`.en-button`)}
  ${mt(o`.en-button:not(.en-icon-button)`)}
  ${ot}
  ${ht(o`:is(.en-button):is(:disabled, [aria-disabled='true'])`)}
  ${ct}
  @media (any-pointer: coarse) {
    ${ft(o`.en-button:not(.en-icon-button), .en-button[data-icon-only]`, !0)}
    ${gt(o`.en-button`)}
    ${mt(o`.en-button:not(.en-icon-button)`)}
    ${_t(o`.en-icon-button`)}
  }
  @media (prefers-reduced-motion: reduce) { ${vt(o`.en-button`)} }
  @media (forced-colors: active) {
    ${yt(o`.en-button`)}
    ${bt(o`:is(.en-button):is(:disabled, [aria-disabled='true'])`)}
    ${lt}
  }
`), St = F(o`
  .en-spinner {
    display: inline-block;
    flex: none;
    inline-size: ${k("--en-size-spinner")};
    block-size: ${k("--en-size-spinner")};
    border: ${k("--en-size-spinner-stroke")} solid currentColor;
    border-inline-end-color: ${k("--en-color-line")};
    border-radius: ${k("--en-radius-pill")};
    animation: en-style-spin ${k("--en-duration-spin")} linear infinite;
  }
  @keyframes en-style-spin { to { transform: rotate(1turn); } }
  .en-skeleton { display: block; inline-size: 100%; block-size: ${A("--en-skeleton-size", k("--en-size-skeleton-line"))}; background: ${A("--en-skeleton-color", k("--en-color-surface-subtle"))}; border-radius: ${k("--en-radius-control")}; }
  .en-skeleton[data-shape='circle'] { inline-size: ${A("--en-skeleton-size", k("--en-size-avatar"))}; block-size: ${A("--en-skeleton-size", k("--en-size-avatar"))}; border-radius: ${k("--en-radius-pill")}; }
  .en-skeleton[data-shape='rectangle'] { block-size: ${A("--en-skeleton-size", k("--en-space-16"))}; }
  @media (prefers-reduced-motion: reduce) { .en-spinner { animation: none; } }
  @media (forced-colors: active) { .en-spinner { border-color: CanvasText; border-inline-end-color: GrayText; } .en-skeleton { background: Canvas; border: ${k("--en-border-width")} solid GrayText; } }
`), z = (e) => e ?? C, Ct = (e) => b`
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
    aria-haspopup=${z(e.popupRole ?? void 0)}
    aria-expanded=${z(e.popupExpanded ?? void 0)}
    aria-disabled=${z(e.ariaDisabled ?? void 0)}
  >
    ${e.loading ? b`<span class="en-spinner" part="indicator" aria-hidden="true"></span>` : null}
    <slot class="en-button__prefix" name="prefix"></slot>
    <span class="en-button__label" part="label"><slot name="label"><slot></slot></slot></span>
    <slot class="en-button__suffix" name="suffix"></slot>
  </button>
`, wt = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap();
function Tt(e, t) {
	wt.set(e, { write: t });
}
function Et(e) {
	let t = wt.get(e);
	if (t) {
		let e = {};
		return t.owner = e, {
			set(n) {
				t.owner === e && t.write(n);
			},
			release() {
				t.owner === e && (t.owner = void 0, t.write(0));
			}
		};
	}
	let n = B.get(e), r = e.getAttribute("tabindex"), i = {
		owner: {},
		original: n?.last === r ? n.original : r
	};
	B.set(e, i);
	let a = !0;
	return {
		set(t) {
			if (a && B.get(e) === i) {
				if (i.last !== void 0 && e.getAttribute("tabindex") !== i.last) {
					a = !1, B.delete(e);
					return;
				}
				i.last = String(t), e.getAttribute("tabindex") !== i.last && e.setAttribute("tabindex", i.last);
			}
		},
		release() {
			a && B.get(e) === i && (a = !1, B.delete(e), i.last !== void 0 && e.getAttribute("tabindex") === i.last && (i.original === null ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", i.original)));
		}
	};
}
//#endregion
//#region ../design-system/packages/elements/dist/button/element.js
var Dt = class extends O {
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
		L,
		it,
		xt,
		St
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
function Ot(e) {
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
function kt(e, t) {
	let n = Ot(t), r = /* @__PURE__ */ new Map();
	for (let t of n) {
		let n = r.get(t.elementClass);
		if (n && n !== t.tagName) throw Error(`One constructor cannot define both ${n} and ${t.tagName}.`);
		r.set(t.elementClass, t.tagName);
		let i = e.get(t.tagName);
		if (i && i !== t.elementClass) throw Error(`A different version of ${t.tagName} is already registered.`);
	}
	for (let t of n) e.get(t.tagName) || e.define(t.tagName, t.elementClass);
}
function V(e, t) {
	kt(e, [t]);
}
//#endregion
//#region ../design-system/packages/elements/dist/define/button.js
V(customElements, {
	tagName: "en-button",
	elementClass: Dt
});
//#endregion
//#region ../design-system/packages/styles/dist/internal/focus.js
var At = o`
  ${ct}
  ${N(o`.en-accordion-trigger`, { family: "button" })}
  ${N(o`:where(.en-input, .en-textarea, .en-select, .en-color-control)`, { family: "input" })}
  ${N(o`.en-option`, { family: "option" })}
  ${N(o`:where(.en-link, .en-control:not(.en-color-control), .en-checkbox, .en-radio, .en-switch,
    .en-range, .en-tab, .en-split-separator, .en-rating-item)`)}
`, jt = tt({ family: "input" }), Mt = o`
  .en-field-focus-frame {
    position: relative;
    min-inline-size: 0;
    --_en-field-focus-accent-width: ${A("--en-input-focus-accent-width", k("--en-focus-accent-width"))};
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
    block-size: max(var(--_en-field-focus-accent-width), ${A("--en-control-radius", k("--en-radius-control"))});
    border-end-start-radius: ${A("--en-control-radius", k("--en-radius-control"))};
    border-end-end-radius: ${A("--en-control-radius", k("--en-radius-control"))};
    border-block-end: var(--_en-field-focus-accent-width) solid ${A("--en-input-focus-accent-color", k("--en-color-focus"))};
    clip-path: inset(calc(100% - var(--_en-field-focus-accent-width)) 0 0 0);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform ${k("--en-duration-focus-exit")} ${k("--en-ease-focus-exit")};
  }
  .en-number-group.en-field-focus-frame {
    box-shadow: 0 0 0 0 ${jt.haloColor};
    transition: box-shadow ${k("--en-duration-focus-exit")} ${k("--en-ease-focus-exit")};
  }
  .en-number-group.en-field-focus-frame:focus-within {
    box-shadow: 0 0 0 ${jt.haloWidth} ${jt.haloColor};
    transition-duration: ${k("--en-duration-focus-enter")};
    transition-timing-function: ${k("--en-ease-focus-enter")};
  }
  .en-field-focus-frame:focus-within::after {
    transform: scaleX(1);
    transition-duration: ${k("--en-duration-focus-enter")};
    transition-timing-function: ${k("--en-ease-focus-enter")};
  }
  @media (prefers-reduced-motion: reduce) {
    .en-field-focus-frame::after, .en-field-focus-frame:focus-within::after,
    .en-number-group.en-field-focus-frame, .en-number-group.en-field-focus-frame:focus-within { transition: none; }
  }
  @media (forced-colors: active) {
    .en-field-focus-frame::after, .en-field-focus-frame:focus-within::after { border-block-end-color: Highlight; transition: none; }
    .en-number-group.en-field-focus-frame, .en-number-group.en-field-focus-frame:focus-within { box-shadow: none; transition: none; }
  }
`, Nt = F(o`
  .en-alert { display: flex; align-items: flex-start; gap: ${k("--en-space-3")}; min-inline-size: 0; padding: ${k("--en-space-4")}; border: ${k("--en-border-width")} solid ${A("--en-alert-border-color", k("--en-color-accent-border"))}; border-radius: ${k("--en-radius-container")}; background: ${A("--en-alert-background", k("--en-color-surface"))}; color: ${A("--en-alert-color", k("--en-color-text"))}; }
  .en-alert__icon { flex: none; color: ${k("--en-color-action")}; }
  .en-alert__content { min-inline-size: 0; flex: 1 1 auto; overflow-wrap: break-word; }
  .en-alert__close { flex: none; margin-inline-start: auto; }
  .en-alert[data-variant='success'] { border-color: ${A("--en-alert-border-color", k("--en-color-success-text"))}; }
  .en-alert[data-variant='warning'] { border-color: ${A("--en-alert-border-color", k("--en-color-warning-text"))}; }
  .en-alert[data-variant='danger'] { border-color: ${A("--en-alert-border-color", k("--en-color-danger-text"))}; }
  .en-alert[data-variant='success'] .en-alert__icon { color: ${k("--en-color-success-text")}; }
  .en-alert[data-variant='warning'] .en-alert__icon { color: ${k("--en-color-warning-text")}; }
  .en-alert[data-variant='danger'] .en-alert__icon { color: ${k("--en-color-danger-text")}; }
  .en-badge { display: inline-flex; align-items: center; gap: ${k("--en-space-icon-label")}; max-inline-size: 100%; padding-block: ${k("--en-space-badge-block")}; padding-inline: ${k("--en-space-badge-inline")}; border: ${k("--en-border-width")} solid ${k("--en-color-line")}; border-radius: ${A("--en-badge-radius", k("--en-radius-control"))}; background: ${A("--en-badge-background", k("--en-color-surface-subtle"))}; color: ${A("--en-badge-color", k("--en-color-text"))}; font-size: ${k("--en-font-metadata-size")}; line-height: ${k("--en-font-metadata-line-height")}; overflow-wrap: break-word; }
  .en-badge__prefix { display: contents; }
  .en-badge__label { min-inline-size: 0; }
  .en-badge[data-variant='accent'] { background: ${A("--en-badge-background", k("--en-color-accent-subtle"))}; color: ${A("--en-badge-color", k("--en-color-action-text"))}; }
  .en-badge[data-variant='success'] { color: ${A("--en-badge-color", k("--en-color-success-text"))}; }
  .en-badge[data-variant='warning'] { color: ${A("--en-badge-color", k("--en-color-warning-text"))}; }
  .en-badge[data-variant='danger'] { color: ${A("--en-badge-color", k("--en-color-danger-text"))}; }
  .en-progress, .en-progress-track { display: block; inline-size: 100%; block-size: ${A("--en-progress-size", k("--en-size-progress"))}; overflow: hidden; border: 0; border-radius: ${k("--en-radius-pill")}; background: ${A("--en-progress-track-color", k("--en-color-surface-subtle"))}; }
  .en-progress { appearance: none; accent-color: ${A("--en-progress-color", k("--en-color-action"))}; }
  .en-progress-fill { display: block; inline-size: clamp(0%, var(--en-progress-value, 0%), 100%); block-size: 100%; border-radius: inherit; background: ${A("--en-progress-color", k("--en-color-action"))}; }
  .en-progress::-webkit-progress-bar { background: ${A("--en-progress-track-color", k("--en-color-surface-subtle"))}; border-radius: inherit; }
  .en-progress::-webkit-progress-value { background: ${A("--en-progress-color", k("--en-color-action"))}; border-radius: inherit; }
  .en-progress::-moz-progress-bar { background: ${A("--en-progress-color", k("--en-color-action"))}; border-radius: inherit; }
  ${St}
  @media (forced-colors: active) {
    .en-alert, .en-alert[data-variant], .en-badge, .en-badge[data-variant] { color: CanvasText; background: Canvas; border-color: CanvasText; }
    .en-alert__icon, .en-alert[data-variant] .en-alert__icon { color: CanvasText; }
    .en-progress, .en-progress-track { background: Canvas; border: ${k("--en-border-width")} solid CanvasText; }
    .en-progress-fill { background: Highlight; }
    .en-progress::-webkit-progress-bar { background: Canvas; }
    .en-progress::-webkit-progress-value { background: Highlight; }
    .en-progress::-moz-progress-bar { background: Highlight; }
  }
`), Pt = F(o`
  .en-icon { display: inline-flex; align-items: center; justify-content: center; flex: none; inline-size: ${A("--en-icon-size", k("--en-size-icon"))}; block-size: ${A("--en-icon-size", k("--en-size-icon"))}; vertical-align: middle; color: inherit; }
  .en-icon > :where(svg, img), .en-icon ::slotted(svg), .en-icon ::slotted(img) { display: block; inline-size: 100%; block-size: 100%; }
  svg.en-icon, .en-icon > svg, .en-icon ::slotted(svg) { display: block; stroke-width: ${k("--en-size-icon-stroke")}; }
  .en-avatar { display: inline-grid; place-items: center; vertical-align: middle; flex: none; inline-size: ${A("--en-avatar-size", k("--en-size-avatar"))}; block-size: ${A("--en-avatar-size", k("--en-size-avatar"))}; overflow: hidden; border-radius: ${A("--en-avatar-radius", k("--en-radius-pill"))}; background: ${k("--en-color-surface-subtle")}; color: ${k("--en-color-text")}; }
  .en-avatar__image { display: block; inline-size: 100%; block-size: 100%; object-fit: cover; }
  .en-avatar__fallback { font-weight: ${k("--en-font-label-strong-weight")}; }
  .en-media { display: block; max-inline-size: 100%; block-size: auto; border-radius: ${A("--en-media-radius", k("--en-radius-container"))}; aspect-ratio: ${A("--en-media-aspect-ratio", o`auto`)}; }
  @media (forced-colors: active) { .en-avatar { color: CanvasText; background: Canvas; border: ${k("--en-border-width")} solid CanvasText; } }
`);
F(o`
  :host { inline-size: max(${A("--en-swatch-size", k("--en-size-swatch"))}, ${k("--en-size-target-min")}); min-inline-size: ${k("--en-size-target-min")}; }
  .en-swatch__sample { position: relative; display: block; appearance: none; inline-size: 100%; block-size: max(${A("--en-swatch-size", k("--en-size-swatch"))}, ${k("--en-size-target-min")}); min-inline-size: ${k("--en-size-target-min")}; padding: 0; margin: 0; overflow: hidden; border: ${k("--en-border-width")} solid ${k("--en-color-boundary")}; border-radius: ${k("--en-radius-control")}; background: transparent; color: inherit; cursor: pointer; }
  @media (hover: hover) { .en-swatch__sample:not(:disabled):hover { border-color: ${k("--en-color-action")}; } }
  .en-swatch__sample:disabled { cursor: default; }
  .en-swatch__color { display: block; inline-size: 100%; block-size: 100%; }
  ${At}
  @media (forced-colors: active) {
    .en-swatch__sample { border-color: ButtonText; background: Canvas; }
  @media (hover: hover) { .en-swatch__sample:not(:disabled):hover { border-color: ButtonText; background: Canvas; } }
    .en-swatch__sample:disabled { border-color: GrayText; }
    .en-swatch__color { forced-color-adjust: none; }
  }
`);
//#endregion
//#region ../design-system/packages/elements/dist/icon/template.js
var Ft = {
	file: x`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" />`,
	calendar: x`<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M7 3v4m10-4v4M3 11h18"></path>`,
	check: x`<path d="m5 12 4 4L19 6" />`,
	plus: x`<path d="M12 5v14M5 12h14" />`,
	close: x`<path d="m6 6 12 12M18 6 6 18" />`,
	"chevron-left": x`<path d="m15 6-6 6 6 6" />`,
	"chevron-right": x`<path d="m9 6 6 6-6 6" />`,
	"chevron-down": x`<path d="m6 9 6 6 6-6" />`,
	"arrow-right": x`<path d="M4 12h16m-6-6 6 6-6 6" />`,
	search: x`<circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" />`,
	info: x`<circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10v1" />`,
	warning: x`<path d="m12 3 10 18H2L12 3Zm0 6v5m0 3v1" />`,
	sparkles: x`<path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3ZM20 2v4m-2-2h4" />`
}, It = (e, t) => b`
  <svg
    class="en-icon"
    part="base"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    focusable="false"
    role=${t ? "img" : C}
    aria-label=${t || C}
    aria-hidden=${t ? C : "true"}
  >${Ft[e] ?? C}</svg>
`, Lt = class extends O {
	static properties = {
		name: { type: String },
		label: { type: String }
	};
	static styles = [
		L,
		at,
		Pt
	];
	constructor() {
		super(), this.name = "info", this.label = "";
	}
	render() {
		return It(this.name, this.label);
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/icon.js
V(customElements, {
	tagName: "en-icon",
	elementClass: Lt
});
//#endregion
//#region ../design-system/packages/elements/dist/badge/template.js
var Rt = (e) => b`
  <span class="en-badge" part="base" data-variant=${e}>
    <slot class="en-badge__prefix" name="prefix"></slot><span class="en-badge__label" part="label"><slot name="label"><slot></slot></slot></span>
  </span>
`;
//#endregion
//#region ../design-system/packages/elements/dist/define/badge.js
V(customElements, {
	tagName: "en-badge",
	elementClass: class extends O {
		static properties = { variant: { reflect: !0 } };
		static styles = [
			L,
			it,
			Nt
		];
		constructor() {
			super(), this.variant = "neutral";
		}
		render() {
			return Rt(this.variant);
		}
	}
});
//#endregion
//#region ../design-system/packages/elements/dist/internal/native-surface.js
function H(e, t) {
	e.inert === t && (e.inert = !t);
}
function zt(e) {
	let t = e.currentTarget;
	e.target === t && (e.newState === "open" && H(t, !0), queueMicrotask(() => {
		if (!t.isConnected) return;
		let e = t.localName === "dialog" ? t.open : t.matches(":popover-open");
		H(t, e);
	}));
}
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/events.js
var Bt = /* @__PURE__ */ new WeakMap();
function Vt(e, t, n, r) {
	return new ((e.ownerDocument?.defaultView?.CustomEvent) ?? globalThis.CustomEvent)(t, {
		detail: n,
		bubbles: !0,
		composed: !0,
		cancelable: r
	});
}
function U(e, t) {
	if (Object.is(t.previous, t.proposed)) return "unchanged";
	let n = Vt(e, "en-change", Object.freeze({
		previous: t.previous,
		proposed: t.proposed,
		reason: t.reason
	}), !0), r = {
		authorRevision: t.getRevision(),
		acceptedEpoch: Bt.get(e)?.acceptedEpoch ?? 0
	}, i = Bt.get(e);
	i || (i = {
		acceptedEpoch: 0,
		frames: []
	}, Bt.set(e, i));
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
		a.frames.pop(), a.frames.length === 0 && Bt.delete(e);
	}
}
function Ht(e, t) {
	e.dispatchEvent(Vt(e, "en-input", Object.freeze({ ...t }), !1));
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/surface-motion.js
var W = o`clamp(0ms, ${k("--en-duration-enter")}, 500ms)`, G = o`clamp(0ms, ${k("--en-duration-exit")}, 500ms)`, K = o`clamp(0px, ${k("--en-motion-surface-offset")}, 8px)`, Ut = o`clamp(.95, ${k("--en-motion-surface-scale")}, 1)`, Wt = o`var(--_en-surface-duration, 0ms) var(--_en-surface-ease, linear)`, Gt = o`opacity var(--_en-surface-opacity-duration, 0ms) var(--_en-surface-ease, linear), translate ${Wt}, scale ${Wt}, display ${Wt} allow-discrete, overlay ${Wt} allow-discrete`;
function q(e, t, n, r, i = o``) {
	let a = o`:where(${e})${i}`, s = o`${t}${i}`, c = o`${n}${i}`;
	return o`
    @supports (transition-behavior: allow-discrete) and (overlay: auto) {
      ${a} {
        --_en-surface-duration: ${G};
        --_en-surface-opacity-duration: ${G};
        --_en-surface-ease: ${k("--en-ease-exit")};
        opacity: 0;
        transition: ${Gt};
      }
      ${s} {
        --_en-surface-duration: ${W};
        /* Modal and menu entry keep content opaque. Fade surfaces reverse
           from their current opacity when reopened during exit. */
        --_en-surface-opacity-duration: ${r === "fade" ? W : o`0ms`};
        --_en-surface-ease: ${k("--en-ease-enter")};
        opacity: 1;
      }
      ${c} { pointer-events: none; }
      ${r === "elevation" ? o`
        /* Opaque command content and its primary focus contour are immediate.
           Elevation adds entry paint without corrupting measured iPhone geometry. */
        @keyframes en-surface-elevation { from { box-shadow: none; } }
        ${s} { animation: en-surface-elevation ${W} ${k("--en-ease-enter")}; }
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
var Kt = o`
  ${q(o`dialog:is(.en-dialog, .en-drawer)`, o`dialog:is(.en-dialog, .en-drawer)[open]`, o`dialog:is(.en-dialog, .en-drawer):not([open])`, "move")}
  @supports (transition-behavior: allow-discrete) and (overlay: auto) {
    dialog:is(.en-dialog, .en-drawer) {
      --_en-surface-x: 0px;
      --_en-surface-y: ${K};
      translate: var(--_en-surface-x) var(--_en-surface-y);
      scale: ${Ut};
    }
    /* Share modal travel distance; attachment selects its axis and sign.
       Keep the drawer unscaled so its attached edge stays flush. */
    dialog.en-drawer { --_en-surface-x: ${K}; --_en-surface-y: 0px; scale: 1; }
    dialog.en-drawer:is([data-placement='start'], [data-placement='left']) { --_en-surface-x: calc(-1 * ${K}); }
    dialog.en-drawer[data-placement='end']:dir(rtl) { --_en-surface-x: calc(-1 * ${K}); }
    dialog.en-drawer[data-placement='start']:dir(rtl) { --_en-surface-x: ${K}; }
    dialog.en-drawer:is([data-placement='top'], [data-placement='bottom']) { --_en-surface-x: 0px; --_en-surface-y: ${K}; }
    dialog.en-drawer[data-placement='top'] { --_en-surface-y: calc(-1 * ${K}); }
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
      transition: opacity ${G} ${k("--en-ease-exit")}, display ${G} allow-discrete, overlay ${G} allow-discrete;
    }
    dialog:is(.en-dialog, .en-drawer)[open]::backdrop {
      opacity: 1;
      transition: opacity ${W} ${k("--en-ease-enter")}, display ${W} allow-discrete, overlay ${W} allow-discrete;
    }
    dialog:is(.en-dialog, .en-drawer):not([open])::backdrop { pointer-events: none; }
    @starting-style { dialog:is(.en-dialog, .en-drawer)[open]::backdrop { opacity: 0; } }
  }
  @media (prefers-reduced-motion: reduce) {
    dialog:is(.en-dialog, .en-drawer) { translate: none !important; scale: none !important; }
    dialog:is(.en-dialog, .en-drawer)::backdrop { transition: none !important; }
  }
`, qt = o`
  .en-radio {
    flex: none;
    inline-size: ${k("--en-size-icon")};
    block-size: ${k("--en-size-icon")};
    margin: 0;
    accent-color: ${k("--en-color-action")};
    appearance: none;
    display: inline-grid;
    /* Keep the inline baseline independent of the checked-state grid dot. */
    vertical-align: middle;
    place-items: center;
    box-sizing: border-box;
    border: ${k("--en-border-width")} solid ${k("--en-color-boundary")};
    border-radius: ${k("--en-radius-pill")};
    background: ${k("--en-color-surface")};
    cursor: pointer;
  }
  .en-radio:checked { border-color: ${A("--en-radio-selected-color", k("--en-color-action"))}; }
  .en-radio:checked::before { content: ''; inline-size: ${k("--en-size-choice-dot")}; block-size: ${k("--en-size-choice-dot")}; border-radius: ${k("--en-radius-pill")}; background: ${A("--en-radio-selected-color", k("--en-color-action"))}; }
  .en-radio:disabled { cursor: default; background: ${k("--en-color-surface-subtle")}; border-color: ${k("--en-color-boundary")}; }
  .en-radio:disabled::before { background: ${k("--en-color-text-muted")}; }
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
function Jt(e) {
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
      font-weight: ${A("--en-option-font-weight", o`inherit`)};
    }
    ${e.selected ? o`${e.selected} {
      --_en-option-selected-background: ${A("--en-option-selected-background", A("--en-option-background", k("--en-color-selected")))};
      --_en-option-selected-color: ${A("--en-option-selected-color", A("--en-option-color", e.selectedColor ?? e.restColor))};
      font-weight: ${A("--en-option-selected-font-weight", A("--en-option-font-weight", k("--en-font-label-strong-weight")))};
    }` : o``}
    @media (hover: hover) { ${e.hover} {
      --_en-option-hover-background: ${A("--en-option-hover-background", A("--en-option-background", e.hoverBackground))};
      /* With neither override set, the state slot is invalid and falls through
         to active/selected/rest paint, rather than resetting it. */
      --_en-option-hover-color: var(--en-option-hover-color, var(--en-option-color));
    } }
    ${e.focus ? o`${e.focus} {
      --_en-option-hover-background: ${A("--en-option-hover-background", A("--en-option-background", e.hoverBackground))};
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
      --_en-option-disabled-color: ${A("--en-option-disabled-color", A("--en-option-color", k("--en-color-text-muted")))};
    }
  `;
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/range.js
var Yt = o`
  block-size: ${k("--en-size-range-track")};
  border: 0;
  border-radius: ${k("--en-radius-pill")};
  background: ${k("--en-color-boundary")};
`, Xt = o`
  box-sizing: border-box;
  inline-size: ${k("--en-size-icon")};
  block-size: ${k("--en-size-icon")};
  border: ${k("--en-border-width")} solid ${k("--en-color-action")};
  border-radius: ${k("--en-radius-pill")};
  background: ${k("--en-color-action")};
`, Zt = o`outline: ${k("--en-focus-width")} solid ${k("--en-color-focus")}; outline-offset: ${k("--en-focus-offset")};`, Qt = o`
  @supports selector(input::-webkit-slider-thumb) {
    .en-range { appearance: none; background: none; cursor: pointer; }
    .en-range::-webkit-slider-runnable-track { ${Yt} }
    .en-range::-webkit-slider-thumb { appearance: none; ${Xt} margin-block-start: calc((${k("--en-size-range-track")} - ${k("--en-size-icon")}) / 2); }
    /* Exposed native thumbs own focus. A global halo must not reintroduce a
       rectangular range-host ring; native unsupported fallbacks keep that route. */
    .en-range, .en-range:focus-visible { box-shadow: none; }
    .en-range:focus-visible { outline: none; }
    .en-range:focus-visible::-webkit-slider-thumb { ${Zt} }
    .en-range:disabled::-webkit-slider-thumb { background: ${k("--en-color-text-muted")}; border-color: ${k("--en-color-text-muted")}; }
    @media (forced-colors: active) {
      .en-range::-webkit-slider-runnable-track { background: ButtonText; }
      .en-range::-webkit-slider-thumb { background: Highlight; border-color: Highlight; }
      .en-range:disabled::-webkit-slider-thumb { background: GrayText; border-color: GrayText; }
      .en-range:focus-visible::-webkit-slider-thumb { outline-color: CanvasText; }
    }
  }
  @supports selector(input::-moz-range-thumb) {
    .en-range { appearance: none; background: none; cursor: pointer; }
    .en-range::-moz-range-track { ${Yt} }
    .en-range::-moz-range-thumb { ${Xt} }
    /* Exposed native thumbs own focus. A global halo must not reintroduce a
       rectangular range-host ring; native unsupported fallbacks keep that route. */
    .en-range, .en-range:focus-visible { box-shadow: none; }
    .en-range:focus-visible { outline: none; }
    .en-range:focus-visible::-moz-range-thumb { ${Zt} }
    .en-range:disabled::-moz-range-thumb { background: ${k("--en-color-text-muted")}; border-color: ${k("--en-color-text-muted")}; }
    @media (forced-colors: active) {
      .en-range::-moz-range-track { background: ButtonText; }
      .en-range::-moz-range-thumb { background: Highlight; border-color: Highlight; }
      .en-range:disabled::-moz-range-thumb { background: GrayText; border-color: GrayText; }
      .en-range:focus-visible::-moz-range-thumb { outline-color: CanvasText; }
    }
  }
  .en-range:disabled { cursor: default; }
`, $t = o`
  .en-link {
    color: ${k("--en-color-link")};
    text-decoration: underline;
    text-underline-offset: ${k("--en-space-0-5")};
    overflow-wrap: break-word;
  }
  .en-link:visited { color: ${k("--en-color-link")}; }
`, en = o`.en-link[aria-disabled='true'] { color: ${k("--en-color-text-muted")}; cursor: default; }`, tn = o`.en-link, .en-link:visited { color: LinkText; }`, nn = A("--en-control-inline-padding", A("--en-input-inline-padding", k("--en-space-control-inline"))), rn = A("--en-control-radius", k("--en-radius-control")), an = o`max(0px, ${rn} - ${k("--en-border-width")})`, on = o`max(
  ${k("--en-space-control-block")},
  calc((var(--_en-text-control-block-size) - ${k("--en-font-input-size")} * ${k("--en-font-input-line-height")}) / 2 - ${k("--en-border-width")})
)`, sn = F(o`
  /* Compute on each consumer so local token/part overrides retain their scope. */
  ${ft(o`.en-button:not(.en-icon-button), .en-button[data-icon-only], .en-input, .en-textarea, .en-select, .en-number-input, .en-number-step, .en-color-control`)}
  ${pt(o`.en-control, .en-button, .en-input, .en-textarea, .en-select`)}
  ${mt(o`.en-button:not(.en-icon-button), .en-input, .en-textarea, .en-select`)}
  /* Field tokens customize inputs without changing action and choice surfaces.
     Existing direct control overrides retain their higher precedence. */
  .en-input, .en-textarea, .en-select {
    padding-inline: ${nn};
    background: ${A("--en-control-background", A("--en-input-background", k("--en-color-surface")))};
    color: ${A("--en-control-color", A("--en-input-color", k("--en-color-text")))};
  }
  ${ot}
  ${$t}
  ${ht(o`:is(.en-button, .en-input, .en-textarea, .en-select, .en-control):is(:disabled, [aria-disabled='true'])`)}
  ${en}
  .en-input, .en-textarea, .en-select {
    inline-size: 100%;
    font: ${k("--en-font-input-weight")} ${k("--en-font-input-size")} / ${k("--en-font-input-line-height")} ${k("--en-font-input-family")};
  }
  /* Use the shared text-field surface and target envelope around the native
     date editor. Keep its fields, separators and calendar-picker activation. */
  .en-input[type='date'] {
    -webkit-appearance: none;
    appearance: none;
    padding-block: ${on};
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
  .en-input::placeholder, .en-textarea::placeholder { color: ${k("--en-color-text-muted")}; opacity: 1; }
  .en-text-input, .en-textarea { padding-block: ${on}; }
  .en-textarea { resize: block; }
  .en-input[aria-invalid='true'], .en-textarea[aria-invalid='true'], .en-select[aria-invalid='true'], .en-control[data-invalid] {
    border-color: ${k("--en-color-danger-text")};
  }
  .en-input:user-invalid, .en-textarea:user-invalid, .en-select:user-invalid { border-color: ${k("--en-color-danger-text")}; }
  /* The text-field marker keeps stronger invalid geometry out of other native controls.
     Preserve border + padding on each edge, including scoped padding/base-border tokens. */
  .en-text-input:is([aria-invalid='true'], :user-invalid) {
    border-width: ${k("--en-border-invalid-width")};
    padding-block: max(0px, calc(${on} + ${k("--en-border-width")} - ${k("--en-border-invalid-width")}));
    padding-inline: max(0px, calc(${nn} + ${k("--en-border-width")} - ${k("--en-border-invalid-width")}));
  }
  .en-input-group { display: flex; align-items: stretch; gap: ${k("--en-space-1")}; min-inline-size: 0; }
  .en-input-group > .en-input { flex: 1 1 auto; inline-size: 0; min-inline-size: 0; }
  .en-number-group {
    gap: 0;
    padding: 0;
    border: ${k("--en-border-width")} solid ${A("--en-control-border-color", k("--en-color-boundary"))};
    border-radius: ${rn};
    background: ${A("--en-control-background", A("--en-input-background", k("--en-color-surface")))};
  }
  .en-number-group[data-invalid] { border-color: ${k("--en-color-danger-text")}; }
  .en-number-group > :is(.en-number-input, .en-number-step) { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${k("--en-border-width")}), ${k("--en-size-target-min")}); }
  .en-number-group > .en-number-input { border: 0; border-radius: 0; background: none; appearance: textfield; }
  .en-number-input::-webkit-inner-spin-button, .en-number-input::-webkit-outer-spin-button { appearance: none; margin: 0; }
  .en-number-step {
    flex: none;
    min-inline-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")});
    padding-inline: ${k("--en-space-control-block")};
    border: 0;
    border-inline-start: ${k("--en-border-width")} solid ${k("--en-color-line")};
    border-radius: 0;
    background: ${k("--en-color-surface-subtle")};
    color: ${k("--en-color-text")};
  }
  /* Match the frame's override as well as its token. Keep overflow visible so
     consumer-defined outward focus contours remain intact. */
  .en-number-step:last-child { border-start-end-radius: ${an}; border-end-end-radius: ${an}; }
  .en-number-step:first-child { border-inline-start: 0; border-inline-end: ${k("--en-border-width")} solid ${k("--en-color-line")}; border-start-start-radius: ${an}; border-end-start-radius: ${an}; }

  .en-color-control { cursor: pointer; padding: ${k("--en-space-control-block")}; block-size: var(--_en-text-control-block-size); }
  .en-color-control::-webkit-color-swatch-wrapper { padding: 0; }
  .en-color-control::-webkit-color-swatch { border: ${k("--en-border-width")} solid ${k("--en-color-boundary")}; border-radius: max(0px, ${k("--en-radius-control")} - ${k("--en-space-control-block")}); }
  .en-color-control::-moz-color-swatch { border: ${k("--en-border-width")} solid ${k("--en-color-boundary")}; border-radius: max(0px, ${k("--en-radius-control")} - ${k("--en-space-control-block")}); }
  ${qt}
  .en-checkbox, .en-switch {
    flex: none;
    inline-size: ${k("--en-size-icon")};
    block-size: ${k("--en-size-icon")};
    margin: 0;
    accent-color: ${k("--en-color-action")};
  }
  .en-checkbox {
    appearance: none;
    display: inline-grid;
    place-items: center;
    box-sizing: border-box;
    border: ${k("--en-border-width")} solid ${k("--en-color-boundary")};
    background: ${k("--en-color-surface")};
    cursor: pointer;
  }
  .en-checkbox { border-radius: ${k("--en-radius-choice")}; }
  .en-checkbox:checked, .en-checkbox:indeterminate { background: ${k("--en-color-action")}; border-color: ${k("--en-color-action")}; }
  .en-checkbox:checked::before {
    content: '';
    box-sizing: border-box;
    inline-size: ${k("--en-size-choice-mark-inline")};
    block-size: ${k("--en-size-choice-mark-block")};
    /* The check is directional artwork, not an inline-layout edge; never mirror it in RTL. */
    border-right: ${k("--en-size-choice-mark-stroke")} solid ${k("--en-color-on-action")};
    border-bottom: ${k("--en-size-choice-mark-stroke")} solid ${k("--en-color-on-action")};
    transform: rotate(45deg);
  }
  .en-checkbox:indeterminate::before { content: ''; inline-size: ${k("--en-size-choice-mark-block")}; block-size: 0; border: 0; border-block-end: ${k("--en-size-choice-mark-stroke")} solid ${k("--en-color-on-action")}; transform: none; }
  .en-checkbox:disabled { cursor: default; background: ${k("--en-color-surface-subtle")}; border-color: ${k("--en-color-boundary")}; }
  .en-checkbox:disabled::before { border-color: ${k("--en-color-text-muted")}; }
  .en-switch {
    position: relative;
    appearance: none;
    box-sizing: border-box;
    inline-size: ${k("--en-size-switch-inline")};
    block-size: ${k("--en-size-switch-block")};
    border: ${k("--en-border-width")} solid ${k("--en-color-boundary")};
    border-radius: ${k("--en-radius-pill")};
    background: ${k("--en-color-surface-subtle")};
    cursor: pointer;
  }
  .en-switch::before {
    content: '';
    position: absolute;
    inset-block-start: ${k("--en-space-switch-inset")};
    inset-inline-start: ${k("--en-space-switch-inset")};
    inline-size: ${k("--en-size-switch-thumb")};
    block-size: ${k("--en-size-switch-thumb")};
    border-radius: ${k("--en-radius-pill")};
    background: ${k("--en-color-text-muted")};
    transition: inset-inline-start ${k("--en-duration-fast")} ${k("--en-ease-standard")};
  }
  .en-switch:checked { background: ${k("--en-color-action")}; border-color: ${k("--en-color-action")}; }
  .en-switch:checked::before { inset-inline-start: calc(100% - ${k("--en-size-switch-thumb")} - ${k("--en-space-switch-inset")}); background: ${k("--en-color-on-action")}; }
  .en-switch:disabled { cursor: default; border-color: ${k("--en-color-boundary")}; background: ${k("--en-color-surface-subtle")}; }
  .en-switch:disabled::before { background: ${k("--en-color-text-muted")}; }
  .en-range { inline-size: 100%; min-inline-size: ${k("--en-size-target-min")}; min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")}); margin: 0; accent-color: ${k("--en-color-action")}; }
  .en-range-row { display: flex; align-items: center; gap: ${k("--en-space-3")}; min-inline-size: 0; }
  .en-range-row > .en-range { flex: 1 1 auto; inline-size: 0; }
  .en-range-row[data-editable] { flex-wrap: wrap; }
  .en-range-row > .en-range-editor {
    flex: 0 1 calc(3 * ${k("--en-size-control-min")});
    inline-size: calc(3 * ${k("--en-size-control-min")});
    min-inline-size: min(100%, ${k("--en-size-target-min")});
    font-variant-numeric: tabular-nums;
  }
  /* The value axis alone becomes vertical. Labels, output and number editing
     retain the surrounding writing direction and normal text layout. */
  .en-range-row[data-orientation='vertical'] { flex-direction: column; flex-wrap: nowrap; }
  .en-range-row[data-orientation='vertical'] > .en-range {
    writing-mode: vertical-lr;
    direction: rtl;
    flex: none;
    inline-size: ${A("--en-slider-length", k("--en-size-range-length"))};
    min-inline-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")});
    block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")});
  }
  .en-range-row[data-orientation='vertical'] > .en-range-editor {
    flex: none;
    inline-size: min(100%, calc(3 * ${k("--en-size-control-min")}));
  }
  .en-range-error[data-pending] { visibility: hidden; }
  .en-range-row > output { flex: none; font-variant-numeric: tabular-nums; color: ${k("--en-color-text")}; }
  ${At}
  ${Mt}
  ${N(o`.en-number-group > .en-number-input`, {
	family: "input",
	inset: !0,
	halo: !1
})}
  ${N(o`.en-number-group > .en-number-step`, {
	family: "button",
	inset: !0,
	halo: !1
})}
  ${Qt}
  @media (any-pointer: coarse) {
    ${ft(o`.en-button:not(.en-icon-button), .en-button[data-icon-only], .en-input, .en-textarea, .en-select, .en-number-input, .en-number-step, .en-color-control`, !0)}
    ${gt(o`.en-button, .en-control, .en-input, .en-textarea, .en-select, .en-range`)}
    .en-range-row[data-orientation='vertical'] > .en-range { min-inline-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-touch")}); }
    ${mt(o`.en-button:not(.en-icon-button), .en-input, .en-textarea, .en-select`)}
    .en-color-control { block-size: var(--_en-text-control-block-size); }
    ${_t(o`.en-icon-button, .en-number-step`)}
    .en-number-group > :is(.en-number-input, .en-number-step) { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${k("--en-border-width")}), ${k("--en-size-target-touch")}); }
  }
  @media (prefers-reduced-motion: reduce) { ${vt(o`.en-button, .en-switch::before`)} }
  @media (forced-colors: active) {
    ${yt(o`.en-button, .en-control, .en-input, .en-textarea, .en-select, .en-number-group`)}
    ${tn}
    ${bt(o`:is(.en-button, .en-control, .en-input, .en-textarea, .en-select):is(:disabled, [aria-disabled='true']), .en-link[aria-disabled='true']`)}
    ${lt}
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
`), cn = A("--en-option-list-radius", A("--en-overlay-radius", k("--en-radius-container"))), ln = o`max(${A("--en-option-list-padding", A("--en-overlay-padding", k("--en-space-1")))}, ${j({
	family: "option",
	inset: !0
})})`, un = o`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, dn = F(o`
  .en-select { min-inline-size: 0; max-inline-size: 100%; white-space: nowrap; text-overflow: ellipsis; }
  .en-select > button { display: none; }
  /* Styling the closed control does not replace its OS picker. Keep this
     fallback outside base-select; ordinary select pseudos are not portable. */
  @supports selector(:has(> .en-select)) {
    @supports not ((appearance: base-select) and selector(::picker(select))) {
      .en-select {
        -webkit-appearance: none;
        appearance: none;
        padding-inline-end: calc(${nn} + ${k("--en-size-icon")} + ${k("--en-space-icon-label")});
        min-block-size: max(var(--_en-text-control-block-size), calc(${k("--en-size-icon")} + 2 * ${k("--en-space-control-block")} + 2 * ${k("--en-border-width")}));
      }
      .en-field-focus-frame:has(> .en-select)::before {
        content: '';
        position: absolute;
        z-index: 1;
        inset-inline-end: calc(${nn} + ${k("--en-border-width")});
        inset-block-start: 50%;
        translate: 0 -50%;
        inline-size: ${k("--en-size-icon")};
        block-size: ${k("--en-size-icon")};
        color: ${k("--en-color-text-muted")};
        background-color: currentColor;
        mask: ${un} center / contain no-repeat;
        pointer-events: none;
      }
      @media (forced-colors: active) {
        .en-field-focus-frame:has(> .en-select)::before { forced-color-adjust: none; color: ButtonText; }
        .en-field-focus-frame:has(> .en-select:disabled)::before { color: GrayText; }
      }
    }
  }
  @supports (appearance: base-select) and selector(::picker(select)) {
    .en-select, .en-select::picker(select) { appearance: ${A("--en-select-appearance", o`base-select`)}; }
    .en-select { align-items: center; gap: ${k("--en-space-icon-label")}; }
    /* Give the browser-owned label a shrinkable box separate from the caret.
       The implicit select button's anonymous text cannot be truncated reliably. */
    .en-select > button { all: unset; display: block; flex: 1; min-inline-size: 0; }
    .en-select selectedcontent { display: block; min-inline-size: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .en-select::picker(select) {
      padding: ${ln};
      border: ${k("--en-border-width")} solid ${A("--en-option-list-border-color", A("--en-overlay-border-color", k("--en-color-boundary")))};
      border-radius: ${cn};
      background: ${A("--en-option-list-background", A("--en-overlay-background", k("--en-color-surface-raised")))};
      color: ${A("--en-option-list-color", A("--en-overlay-color", k("--en-color-text")))};
      box-shadow: ${A("--en-option-list-shadow", k("--en-shadow-overlay"))};
      max-block-size: min(${A("--en-option-list-max-block-size", A("--en-overlay-max-block-size", k("--en-layout-panel-preferred")))}, calc(100dvh - ${k("--en-space-8")}));
      overflow: auto;
    }
    ${q(o`.en-select`, o`.en-select:open`, o`.en-select:not(:open)`, "fade", o`::picker(select)`)}
    .en-select option {
      white-space: normal; overflow-wrap: anywhere;
      position: relative;
      min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")});
      padding: ${A("--en-option-block-padding", k("--en-space-control-block"))} ${A("--en-option-inline-padding", k("--en-space-control-inline"))};
      border-radius: ${A("--en-option-radius", o`max(0px, ${cn} - ${ln} - ${k("--en-border-width")})`)};
    }
    .en-select option + option { margin-block-start: ${A("--en-option-list-gap", o`0px`)}; }
    ${Jt({
	base: o`.en-select option`,
	selected: o`.en-select option:checked`,
	hover: o`.en-select option:not(:disabled):hover`,
	focus: o`.en-select option:not(:disabled):focus-visible`,
	pressed: o`.en-select option:not(:disabled):active`,
	disabled: o`.en-select option:disabled`,
	restBackground: o`transparent`,
	restColor: A("--en-option-list-color", A("--en-overlay-color", o`inherit`)),
	selectedColor: A("--en-option-list-color", A("--en-overlay-color", k("--en-color-action-text"))),
	hoverBackground: k("--en-color-selected")
})}
    .en-select option:not(:disabled):focus-visible { z-index: 1; }
    @media (hover: hover) { .en-select option:not(:disabled):hover { z-index: 1; } }
    /* Native :active is pressed activation, not the combobox's keyboard candidate. */
    ${P(o`.en-select option:not(:disabled):focus-visible`, {
	family: "option",
	inset: !0,
	restSelector: o`.en-select option`
})}
    @media (hover: hover) { ${P(o`.en-select option:not(:disabled):hover`, {
	family: "option",
	inset: !0,
	restSelector: o`.en-select option`
})} }
    .en-select::picker-icon {
      content: '';
      inline-size: ${k("--en-size-icon")};
      block-size: ${k("--en-size-icon")};
      flex: none;
      color: ${k("--en-color-text-muted")};
      background-color: currentColor;
      mask: ${un} center / contain no-repeat;
    }
    @media (any-pointer: coarse) { .en-select option { min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-touch")}); } }
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
`), fn = F(o`
  .en-field, .en-rating-field { --_en-field-gap: ${A("--en-field-gap", k("--en-space-label-control"))}; }
  .en-field { display: flex; flex-direction: column; min-inline-size: 0; gap: 0; }
  .en-field > :not(:first-child):not(.en-description),
  .en-choice-content > :not(:first-child):not(.en-description) { margin-block-start: var(--_en-field-gap); }
  /* A fieldset legend already separates its first content through its margin. */
  .en-field > .en-legend + :not(.en-description) { margin-block-start: 0; }
  .en-label { display: block; color: ${k("--en-color-text")}; font-weight: ${k("--en-font-label-strong-weight")}; overflow-wrap: break-word; }
  .en-description, .en-error { margin: 0; font-size: ${k("--en-font-ui-size")}; line-height: ${k("--en-font-body-line-height")}; overflow-wrap: break-word; }
  /* No box or gap is created by the empty fallback. An assigned root remains
     present even when its light DOM is empty: it may render its own shadow. */
  .en-description { display: flow-root; color: ${k("--en-color-text-muted")}; }
  .en-description-fallback,
  .en-description > slot::slotted(:not([hidden])) { display: block; margin-block-start: var(--_en-field-gap); }
  .en-description-fallback:empty { display: none; }
  .en-error { color: ${k("--en-color-danger-text")}; }
  .en-choice { display: flex; align-items: center; gap: ${k("--en-space-icon-label")}; min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")}); min-inline-size: ${k("--en-size-target-min")}; cursor: pointer; }
  .en-choice > :where(.en-label, .en-choice-content) { min-inline-size: 0; }
  .en-choice-content { --_en-field-gap: ${A("--en-field-gap", k("--en-space-control-description"))}; display: flex; flex-direction: column; gap: 0; }
  .en-fieldset { margin: 0; padding: 0; min-inline-size: 0; border: 0; }
  .en-legend { padding: 0; margin-block-end: ${k("--en-space-label-control")}; font-weight: ${k("--en-font-label-strong-weight")}; }
  .en-form-stack { display: flex; flex-direction: column; gap: ${k("--en-space-fields")}; }
  .en-validation-summary { padding: ${k("--en-space-panel")}; border: ${k("--en-border-width")} solid ${k("--en-color-danger-text")}; border-radius: ${k("--en-radius-container")}; }
  .en-validation-summary :where(ul, ol) { padding-inline-start: ${k("--en-space-6")}; }
  @media (any-pointer: coarse) { .en-choice { min-block-size: ${k("--en-size-target-touch")}; } }
  @media (forced-colors: active) { .en-label, .en-description, .en-error { color: CanvasText; } .en-validation-summary { border-color: CanvasText; } }
`), pn = `(width < ${Je("--en-layout-dialog-collapse")})`, mn = F(o`
  .en-dialog, .en-drawer, .en-popover, .en-tooltip {
    box-sizing: border-box;
    min-inline-size: 0;
    max-inline-size: min(${A("--en-overlay-max-inline-size", k("--en-layout-form-max"))}, calc(100% - ${k("--en-space-8")}));
    max-block-size: ${A("--en-overlay-max-block-size", o`calc(100dvh - ${k("--en-space-8")})`)};
    padding: ${A("--en-overlay-padding", k("--en-space-panel"))};
    border: ${k("--en-border-width")} solid ${A("--en-overlay-border-color", k("--en-color-boundary"))};
    border-radius: ${A("--en-overlay-radius", k("--en-radius-dialog"))};
    background: ${A("--en-overlay-background", k("--en-color-surface-raised"))};
    color: ${A("--en-overlay-color", k("--en-color-text"))};
    font: inherit;
    text-align: start;
    overflow: auto;
    box-shadow: ${k("--en-shadow-overlay")};
  }
  ${q(o`.en-popover[popover]`, o`.en-popover:popover-open`, o`.en-popover[popover]:not(:popover-open)`, "fade")}
  ${q(o`.en-tooltip[popover]`, o`.en-tooltip:popover-open`, o`.en-tooltip[popover]:not(:popover-open)`, "fade")}
  ${Kt}
  .en-dialog { position: fixed; inset: 0; margin: auto; box-shadow: ${k("--en-shadow-dialog")}; }
  dialog.en-dialog, dialog.en-drawer { flex-direction: column; gap: ${k("--en-space-4")}; }
  dialog.en-dialog[open], dialog.en-drawer[open] { display: flex; }
  dialog.en-dialog:not([open]), dialog.en-drawer:not([open]) { display: none; }
  .en-dialog::backdrop, .en-drawer::backdrop { background: ${k("--en-color-scrim")}; }
  .en-overlay-header, .en-overlay-footer { display: flex; align-items: center; flex-wrap: wrap; gap: ${k("--en-space-3")}; min-inline-size: 0; }
  .en-overlay-header { justify-content: space-between; }
  .en-overlay-footer { justify-content: flex-end; gap: ${k("--en-space-actions")}; }
  .en-overlay-header > slot, .en-overlay-footer > slot { display: contents; }
  .en-overlay-body {
    --_en-overlay-focus-clearance: ${nt};
    min-inline-size: 0;
    min-block-size: 0;
    /* Expand the scrollport without moving content or changing the surrounding gaps. */
    margin: calc(0px - var(--_en-overlay-focus-clearance));
    padding: var(--_en-overlay-focus-clearance);
    scroll-padding: var(--_en-overlay-focus-clearance);
    overflow: auto;
  }
  .en-overlay-close { margin-inline-start: auto; }
  .en-popover { position: fixed; display: flex; flex-direction: column; margin: 0; row-gap: ${k("--en-space-4")}; border-radius: ${A("--en-overlay-radius", k("--en-radius-container"))}; }
  [popover].en-popover:not(:popover-open), [popover].en-tooltip:not(:popover-open) { display: none; }
  .en-tooltip { position: fixed; margin: 0; row-gap: ${k("--en-space-2")}; padding: ${A("--en-overlay-padding", k("--en-space-2"))}; border-radius: ${A("--en-overlay-radius", k("--en-radius-control"))}; overflow-wrap: break-word; }
  /* An outside separator is clipped at viewport-flush edges, even for a drawer
     that fills the whole viewport. Keep it separate from the immediate focus cue. */
  :where(.en-drawer) { outline: ${k("--en-border-width")} solid ${A("--en-overlay-border-color", k("--en-color-boundary"))}; outline-offset: 0; }
  ${N(o`:where(.en-dialog, .en-drawer)`, {
	family: "overlay",
	baseShadow: k("--en-shadow-dialog"),
	baseTransitions: Gt
})}
  ${N(o`.en-popover`, {
	family: "overlay",
	baseShadow: k("--en-shadow-overlay"),
	baseTransitions: Gt
})}
  .en-drawer {
    position: fixed;
    margin: 0;
    inset: auto;
    inset-block: 0;
    inset-inline-end: 0;
    inline-size: min(${A("--en-overlay-max-inline-size", k("--en-layout-form-max"))}, 100%);
    max-inline-size: 100%;
    block-size: 100%;
    max-block-size: 100%;
    border-radius: 0;
    border-width: 0;
    box-shadow: ${k("--en-shadow-dialog")};
  }
  .en-drawer[data-placement='start'] { inset-inline-end: auto; inset-inline-start: 0; }
  .en-drawer[data-placement='left'] { inset-inline: auto; left: 0; right: auto; }
  .en-drawer[data-placement='right'] { inset-inline: auto; left: auto; right: 0; }
  .en-drawer[data-placement='top'], .en-drawer[data-placement='bottom'] { inset-inline: 0; inline-size: 100%; block-size: auto; max-block-size: ${A("--en-overlay-max-block-size", o`calc(100dvh - ${k("--en-space-8")})`)}; }
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
	return b`
    <dialog class=${e.surfaceClass} part=${e.surfacePart ?? "surface"} data-placement=${e.placement}
      aria-labelledby="en-overlay-heading" closedby=${e.closedBy}
      inert @beforetoggle=${zt} @cancel=${e.cancel} @close=${e.close}
      @pointerdown=${e.pointerDown} @pointerup=${e.pointerUp}
      @pointercancel=${e.pointerCancel} @keydown=${e.keyDown}>
      <div class="en-overlay-header" part="header">
        <h2 class="en-heading-small" id="en-overlay-heading" part="heading"><slot name="label">${e.label}</slot></h2>
        ${e.dismissible ? b`
          <en-button class="en-overlay-close" variant="ghost" icon-only size="inherit"
            exportparts="control:close" @click=${e.dismiss}>
            <en-icon slot="prefix" name="close" size="inherit"></en-icon>
            <span slot="label">${e.closeLabel}</span>
          </en-button>
        ` : null}
      </div>
      <div class="en-overlay-body" part="body">${e.body ?? b`<slot></slot>`}</div>
      ${e.footer === C ? C : b`<div class="en-overlay-footer" part="footer">${e.footer ?? b`<slot name="footer"></slot>`}</div>`}
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
V(customElements, {
	tagName: "en-dialog",
	elementClass: class extends O {
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
			L,
			rt,
			sn,
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
				return U(this, {
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
					this.#s = null, this.#a = n?.revision === this.#n && n.element.isConnected ? n.element : this.#o, H(e, !0), e.showModal(), this.#i = !0;
				} else if (!this.open && e.open) {
					let t = xn(this.ownerDocument), n = t === this || Cn(e, t);
					this.#i = !1, e.close(), H(e, !1), n && Sn(this.#a), this.#a = null, this.#o = null;
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
			this.#i = !1, this.dialog && H(this.dialog, !1), this.open = !1;
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
		elementClass: Dt
	}, {
		tagName: "en-icon",
		elementClass: Lt
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
var J = null, Hn = !1, Un = 1, Wn = /* @__PURE__ */ Symbol("SIGNAL");
function Y(e) {
	let t = J;
	return J = e, t;
}
function Gn() {
	return J;
}
function Kn() {
	return Hn;
}
var qn = {
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
function Jn(e) {
	if (Hn) throw Error(typeof ngDevMode < "u" && ngDevMode ? "Assertion error: signal read during notification phase" : "");
	if (J === null) return;
	J.consumerOnSignalRead(e);
	let t = J.nextProducerIndex++;
	if (X(J), t < J.producerNode.length && J.producerNode[t] !== e && ar(J)) {
		let e = J.producerNode[t];
		ir(e, J.producerIndexOfThis[t]);
	}
	J.producerNode[t] !== e && (J.producerNode[t] = e, J.producerIndexOfThis[t] = ar(J) ? rr(e, J, t) : 0), J.producerLastReadVersion[t] = e.version;
}
function Yn() {
	Un++;
}
function Xn(e) {
	if (e.dirty || e.lastCleanEpoch !== Un) {
		if (!e.producerMustRecompute(e) && !nr(e)) {
			e.dirty = !1, e.lastCleanEpoch = Un;
			return;
		}
		e.producerRecomputeValue(e), e.dirty = !1, e.lastCleanEpoch = Un;
	}
}
function Zn(e) {
	if (e.liveConsumerNode === void 0) return;
	let t = Hn;
	Hn = !0;
	try {
		for (let t of e.liveConsumerNode) t.dirty || $n(t);
	} finally {
		Hn = t;
	}
}
function Qn() {
	return J?.consumerAllowSignalWrites !== !1;
}
function $n(e) {
	var t;
	e.dirty = !0, Zn(e), (t = e.consumerMarkedDirty) == null || t.call(e.wrapper ?? e);
}
function er(e) {
	return e && (e.nextProducerIndex = 0), Y(e);
}
function tr(e, t) {
	if (Y(t), e && e.producerNode !== void 0 && e.producerIndexOfThis !== void 0 && e.producerLastReadVersion !== void 0) {
		if (ar(e)) for (let t = e.nextProducerIndex; t < e.producerNode.length; t++) ir(e.producerNode[t], e.producerIndexOfThis[t]);
		for (; e.producerNode.length > e.nextProducerIndex;) e.producerNode.pop(), e.producerLastReadVersion.pop(), e.producerIndexOfThis.pop();
	}
}
function nr(e) {
	X(e);
	for (let t = 0; t < e.producerNode.length; t++) {
		let n = e.producerNode[t], r = e.producerLastReadVersion[t];
		if (r !== n.version || (Xn(n), r !== n.version)) return !0;
	}
	return !1;
}
function rr(e, t, n) {
	var r;
	if (or(e), X(e), e.liveConsumerNode.length === 0) {
		(r = e.watched) == null || r.call(e.wrapper);
		for (let t = 0; t < e.producerNode.length; t++) e.producerIndexOfThis[t] = rr(e.producerNode[t], e, t);
	}
	return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function ir(e, t) {
	var n;
	if (or(e), X(e), typeof ngDevMode < "u" && ngDevMode && t >= e.liveConsumerNode.length) throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);
	if (e.liveConsumerNode.length === 1) {
		(n = e.unwatched) == null || n.call(e.wrapper);
		for (let t = 0; t < e.producerNode.length; t++) ir(e.producerNode[t], e.producerIndexOfThis[t]);
	}
	let r = e.liveConsumerNode.length - 1;
	if (e.liveConsumerNode[t] = e.liveConsumerNode[r], e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[r], e.liveConsumerNode.length--, e.liveConsumerIndexOfThis.length--, t < e.liveConsumerNode.length) {
		let n = e.liveConsumerIndexOfThis[t], r = e.liveConsumerNode[t];
		X(r), r.producerIndexOfThis[n] = t;
	}
}
function ar(e) {
	return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function X(e) {
	e.producerNode ??= [], e.producerIndexOfThis ??= [], e.producerLastReadVersion ??= [];
}
function or(e) {
	e.liveConsumerNode ??= [], e.liveConsumerIndexOfThis ??= [];
}
function sr(e) {
	if (Xn(e), Jn(e), e.value === dr) throw e.error;
	return e.value;
}
function cr(e) {
	let t = Object.create(fr);
	t.computation = e;
	let n = () => sr(t);
	return n[Wn] = t, n;
}
var lr = /* @__PURE__ */ Symbol("UNSET"), ur = /* @__PURE__ */ Symbol("COMPUTING"), dr = /* @__PURE__ */ Symbol("ERRORED"), fr = {
	...qn,
	value: lr,
	dirty: !0,
	error: null,
	equal: Vn,
	producerMustRecompute(e) {
		return e.value === lr || e.value === ur;
	},
	producerRecomputeValue(e) {
		if (e.value === ur) throw Error("Detected cycle in computations.");
		let t = e.value;
		e.value = ur;
		let n = er(e), r, i = !1;
		try {
			r = e.computation.call(e.wrapper), i = t !== lr && t !== dr && e.equal.call(e.wrapper, t, r);
		} catch (t) {
			r = dr, e.error = t;
		} finally {
			tr(e, n);
		}
		if (i) {
			e.value = t;
			return;
		}
		e.value = r, e.version++;
	}
};
function pr() {
	throw Error();
}
var mr = pr;
function hr() {
	mr();
}
function gr(e) {
	let t = Object.create(yr);
	t.value = e;
	let n = () => (Jn(t), t.value);
	return n[Wn] = t, n;
}
function _r() {
	return Jn(this), this.value;
}
function vr(e, t) {
	Qn() || hr(), e.equal.call(e.wrapper, e.value, t) || (e.value = t, br(e));
}
var yr = {
	...qn,
	equal: Vn,
	value: void 0
};
function br(e) {
	e.version++, Yn(), Zn(e);
}
var Z = Symbol("node"), Q;
((e) => {
	var t, n, r, i;
	class a {
		constructor(r, i = {}) {
			zn(this, n), In(this, t);
			let a = gr(r)[Wn];
			if (this[Z] = a, a.wrapper = this, i) {
				let t = i.equals;
				t && (a.equal = t), a.watched = i[e.subtle.watched], a.unwatched = i[e.subtle.unwatched];
			}
		}
		get() {
			if (!(0, e.isState)(this)) throw TypeError("Wrong receiver type for Signal.State.prototype.get");
			return _r.call(this[Z]);
		}
		set(t) {
			if (!(0, e.isState)(this)) throw TypeError("Wrong receiver type for Signal.State.prototype.set");
			if (Kn()) throw Error("Writes to signals not permitted during Watcher callback");
			let n = this[Z];
			vr(n, t);
		}
	}
	t = Z, n = /* @__PURE__ */ new WeakSet(), e.isState = (e) => typeof e == "object" && Rn(n, e), e.State = a;
	class o {
		constructor(t, n) {
			zn(this, i), In(this, r);
			let a = cr(t)[Wn];
			if (a.consumerAllowSignalWrites = !0, this[Z] = a, a.wrapper = this, n) {
				let t = n.equals;
				t && (a.equal = t), a.watched = n[e.subtle.watched], a.unwatched = n[e.subtle.unwatched];
			}
		}
		get() {
			if (!(0, e.isComputed)(this)) throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");
			return sr(this[Z]);
		}
	}
	r = Z, i = /* @__PURE__ */ new WeakSet(), e.isComputed = (e) => typeof e == "object" && Rn(i, e), e.Computed = o, ((t) => {
		var n, r, i, a;
		function o(e) {
			let t, n = null;
			try {
				n = Y(null), t = e();
			} finally {
				Y(n);
			}
			return t;
		}
		t.untrack = o;
		function s(t) {
			if (!(0, e.isComputed)(t) && !(0, e.isWatcher)(t)) throw TypeError("Called introspectSources without a Computed or Watcher argument");
			return t[Z].producerNode?.map((e) => e.wrapper) ?? [];
		}
		t.introspectSources = s;
		function c(t) {
			if (!(0, e.isComputed)(t) && !(0, e.isState)(t)) throw TypeError("Called introspectSinks without a Signal argument");
			return t[Z].liveConsumerNode?.map((e) => e.wrapper) ?? [];
		}
		t.introspectSinks = c;
		function l(t) {
			if (!(0, e.isComputed)(t) && !(0, e.isState)(t)) throw TypeError("Called hasSinks without a Signal argument");
			let n = t[Z].liveConsumerNode;
			return n ? n.length > 0 : !1;
		}
		t.hasSinks = l;
		function u(t) {
			if (!(0, e.isComputed)(t) && !(0, e.isWatcher)(t)) throw TypeError("Called hasSources without a Computed or Watcher argument");
			let n = t[Z].producerNode;
			return n ? n.length > 0 : !1;
		}
		t.hasSources = u;
		class d {
			constructor(e) {
				zn(this, r), zn(this, i), In(this, n);
				let t = Object.create(qn);
				t.wrapper = this, t.consumerMarkedDirty = e, t.consumerIsAlwaysLive = !0, t.consumerAllowSignalWrites = !1, t.producerNode = [], this[Z] = t;
			}
			watch(...t) {
				if (!(0, e.isWatcher)(this)) throw TypeError("Called unwatch without Watcher receiver");
				Bn(this, i, a).call(this, t);
				let n = this[Z];
				n.dirty = !1;
				let r = Y(n);
				for (let e of t) Jn(e[Z]);
				Y(r);
			}
			unwatch(...t) {
				if (!(0, e.isWatcher)(this)) throw TypeError("Called unwatch without Watcher receiver");
				Bn(this, i, a).call(this, t);
				let n = this[Z];
				X(n);
				for (let e = n.producerNode.length - 1; e >= 0; e--) if (t.includes(n.producerNode[e].wrapper)) {
					ir(n.producerNode[e], n.producerIndexOfThis[e]);
					let t = n.producerNode.length - 1;
					if (n.producerNode[e] = n.producerNode[t], n.producerIndexOfThis[e] = n.producerIndexOfThis[t], n.producerNode.length--, n.producerIndexOfThis.length--, n.nextProducerIndex--, e < n.producerNode.length) {
						let t = n.producerIndexOfThis[e], r = n.producerNode[e];
						or(r), r.liveConsumerIndexOfThis[t] = e;
					}
				}
			}
			getPending() {
				if (!(0, e.isWatcher)(this)) throw TypeError("Called getPending without Watcher receiver");
				return this[Z].producerNode.filter((e) => e.dirty).map((e) => e.wrapper);
			}
		}
		n = Z, r = /* @__PURE__ */ new WeakSet(), i = /* @__PURE__ */ new WeakSet(), a = function(t) {
			for (let n of t) if (!(0, e.isComputed)(n) && !(0, e.isState)(n)) throw TypeError("Called watch/unwatch without a Computed or State argument");
		}, e.isWatcher = (e) => Rn(r, e), t.Watcher = d;
		function f() {
			return Gn()?.wrapper;
		}
		t.currentComputed = f, t.watched = Symbol("watched"), t.unwatched = Symbol("unwatched");
	})(e.subtle ||= {});
})(Q ||= {});
//#endregion
//#region ../design-system/packages/primitives/dist/state/value.js
function xr(e, t = {}) {
	let n = t.normalize ?? ((e) => e), r = t.equals ?? Object.is, i = n(e), a = new Q.State(Object.freeze({
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
		value: new Q.Computed(() => a.get().value),
		view: new Q.Computed(() => a.get()),
		set: o,
		reset: () => o(i)
	};
}
//#endregion
//#region ../design-system/node_modules/signal-utils/dist/subtle/reaction.ts.js
var Sr = {
	active: !1,
	lastError: null
}, Cr = class {
	original;
	name = "ReactionError";
	constructor(e) {
		this.original = e;
	}
}, wr = (e, t, n = Object.is) => {
	let r = new Q.Computed(e, { equals: n }), i = r.get(), a = async () => {
		if (await 0, a === void 0) return;
		let e = r.get();
		if (!n(e, i)) try {
			t(e, i);
		} catch (e) {
			if (Sr) console.error(e), Sr.lastError = e;
			else throw new Cr(e);
		} finally {
			i = e;
		}
		o.watch();
	}, o = new Q.subtle.Watcher(() => a?.());
	return o.watch(r), () => {
		o.unwatch(r), a = void 0;
	};
}, Tr = class {
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
		this.#n = wr(this.#t, () => {
			!this.#i && e === this.#r && this.#e.requestUpdate();
		}), this.#e.requestUpdate();
	}
	hostDisconnected() {
		++this.#r, this.#n?.(), this.#n = void 0;
	}
	dispose() {
		this.#i = !0, this.hostDisconnected(), this.#e.removeController(this);
	}
}, Er = [
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
], Dr = class {
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
			for (let e of Er) n.validity[e] && (t[e] = !0);
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
}, Or = F(o`
  /* Recompute for both frame and item; descendant overrides stay effective. */
  .en-segmented-control, .en-segmented-item {
    --_en-text-control-block-size: ${dt()};
  }
  .en-option, .en-tab, .en-accordion-trigger {
    min-inline-size: ${k("--en-size-target-min")};
    min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")});
    padding-block: ${k("--en-space-control-block")};
    padding-inline: ${k("--en-space-control-inline")};
    color: ${A("--en-option-color", k("--en-color-text"))};
    font: inherit;
    text-align: start;
    overflow-wrap: break-word;
    cursor: pointer;
  }
  .en-option {
    display: flex;
    align-items: center;
    gap: ${k("--en-space-icon-label")};
    border-radius: ${A("--en-option-radius", k("--en-radius-control"))};
    background: ${A("--en-option-background", k("--en-color-surface"))};
  }
  .en-option[data-active] { background: ${A("--en-option-background", k("--en-color-surface-subtle"))}; }
  @media (hover: hover) { .en-option:hover { background: ${A("--en-option-background", k("--en-color-surface-subtle"))}; } }
  .en-option[aria-selected='true'], .en-option[aria-checked='true'], .en-option[data-selected] {
    background: ${A("--en-option-background", k("--en-color-selected"))};
    font-weight: ${k("--en-font-label-strong-weight")};
  }
  .en-option[aria-disabled='true'] { color: ${k("--en-color-text-muted")}; cursor: default; }
  .en-listbox, .en-tree { display: flex; flex-direction: column; gap: ${k("--en-space-1")}; min-inline-size: 0; }
  .en-tree-group { padding-inline-start: ${k("--en-space-4")}; }
  .en-choice-group, .en-rating, .en-toolbar, .en-segmented { display: flex; align-items: center; flex-wrap: wrap; gap: ${k("--en-space-actions")}; min-inline-size: 0; }
  .en-choice-group[data-orientation='vertical'], .en-choice-group[aria-orientation='vertical'] { flex-direction: column; align-items: stretch; }
  .en-choice-group > slot, .en-rating > slot, .en-toolbar > slot, .en-segmented > slot { display: contents; }
  .en-rating-item, .en-rating-clear, .en-segmented-item {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-inline-size: ${k("--en-size-target-min")};
    min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")});
    border: ${k("--en-border-width")} solid transparent;
    border-radius: ${k("--en-radius-control")};
    color: ${k("--en-color-text")};
    cursor: pointer;
    overflow-wrap: break-word;
  }
  .en-rating-values {
    display: flex;
    flex-wrap: wrap;
    gap: ${k("--en-space-0-5")};
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  /* Preserve each target instead of squeezing stars to keep a row on one line. */
  .en-rating-item {
    --_en-rating-target-min: ${k("--en-size-target-min")};
    --_en-rating-target-size: max(${k("--en-size-control-min")}, var(--_en-rating-target-min), calc(${k("--en-size-icon")} + 2 * ${k("--en-space-control-block")} + 2 * ${k("--en-border-width")}));
    flex: 0 0 auto;
    inline-size: var(--_en-rating-target-size);
    block-size: var(--_en-rating-target-size);
    padding: ${k("--en-space-control-block")};
    border-radius: ${A("--en-rating-star-radius", k("--en-radius-control"))};
  }
  .en-rating-clear { max-inline-size: 100%; }
  .en-rating-clear, .en-segmented-item { padding: ${k("--en-space-control-block")} ${k("--en-space-control-inline")}; }
  .en-rating-clear { color: ${k("--en-color-text-muted")}; }
  .en-rating-clear:has(:checked) { background: ${k("--en-color-selected")}; color: ${k("--en-color-action-text")}; border-color: ${k("--en-color-accent-border")}; }
  .en-rating-star { font-size: ${k("--en-size-icon")}; line-height: 1; color: ${k("--en-color-text-muted")}; }
  .en-rating-star[data-filled] { color: ${k("--en-color-action-text")}; }
  .en-rating-item:has(:disabled), .en-rating-clear:has(:disabled), .en-segmented-item[data-disabled] { cursor: default; color: ${k("--en-color-text-muted")}; }
  .en-rating-item:has(:disabled) .en-rating-star { color: ${k("--en-color-text-muted")}; }
  ${P(o`.en-rating-item:has(:focus-visible), .en-rating-clear:has(:focus-visible), .en-segmented-item:has(:focus-visible)`)}
  .en-segmented-control { display: flex; align-items: stretch; flex-wrap: wrap; gap: ${k("--en-space-0-5")}; min-inline-size: 0; min-block-size: var(--_en-text-control-block-size); padding: ${ut}; border: ${k("--en-border-width")} solid ${k("--en-color-line")}; border-radius: ${A("--en-control-radius", k("--en-radius-control"))}; background: ${k("--en-color-surface-subtle")}; }
  .en-segmented-item {
    flex: 1 1 auto;
    /* The shared control height includes the frame; each label keeps its target floor. */
    min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${R}), ${k("--en-size-target-min")});
    padding-block: max(0px, calc(${k("--en-space-control-block")} - ${R}));
    border-radius: max(0px, ${A("--en-control-radius", k("--en-radius-control"))} - ${R});
    text-align: center;
  }
  .en-segmented-item[data-selected] { background: ${k("--en-color-surface")}; border-color: ${k("--en-color-boundary")}; color: ${k("--en-color-action-text")}; font-weight: ${k("--en-font-label-strong-weight")}; }
  @media (hover: hover) { .en-segmented-item:not([data-disabled]):hover { background: ${k("--en-color-selected")}; } }
  .en-segmented-item[data-disabled] { color: ${k("--en-color-text-muted")}; }
  .en-segmented-label { min-inline-size: 0; }
  .en-tabs { min-inline-size: 0; isolation: isolate; }
  .en-tab-list { position: relative; display: flex; flex-wrap: wrap; gap: ${k("--en-space-1")}; min-inline-size: 0; border-block-end: ${k("--en-border-width")} solid ${k("--en-color-line")}; }
  .en-tab-list > slot { display: contents; }
  /* Raise focus paint within the tabs, including over following rows and panels.
     Slotted hosts and native tabs are flex items; their z-index needs no positioning. */
  .en-tab-list:focus-within { z-index: 1; }
  .en-tab-list > slot::slotted(:focus-within), .en-tab-list > .en-tab:focus-within { z-index: 1; }
  .en-tab-list[aria-orientation='vertical'], .en-tab-list[data-orientation='vertical'] { flex-direction: column; border-block-end: 0; border-inline-end: ${k("--en-border-width")} solid ${k("--en-color-line")}; }
  .en-tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${k("--en-space-icon-label")};
    border: 0;
    border-block-end: ${k("--en-size-tab-indicator")} solid ${k("--en-color-line")};
    background: ${A("--en-tab-background", k("--en-color-surface"))};
    color: ${A("--en-tab-color", k("--en-color-text"))};
  }
  @media (hover: hover) { .en-tab:hover { background: ${A("--en-tab-background", k("--en-color-surface-subtle"))}; } }
  .en-tab[aria-selected='true'], :host([role='tab'][aria-selected='true']) .en-tab {
    color: ${A("--en-tab-color", k("--en-color-action-text"))};
    border-block-end-color: ${k("--en-color-action")};
    background: ${A("--en-tab-background", k("--en-color-selected"))};
    font-weight: ${k("--en-font-label-strong-weight")};
  }
  .en-tab[aria-disabled='true'], :host([role='tab'][aria-disabled='true']) .en-tab { color: ${k("--en-color-text-muted")}; cursor: default; }
  .en-tab-panel { min-inline-size: 0; padding-block: ${k("--en-space-4")}; }
  .en-accordion { display: flex; flex-direction: column; min-inline-size: 0; isolation: isolate; }
  .en-accordion > slot { display: contents; }
  /* Keep the focused item's outline above adjacent surfaces within this group.
     Slotted hosts are flex items, so no positioned containing block is needed. */
  .en-accordion > slot::slotted(:focus-within) { z-index: 1; }
  .en-accordion-item { border-block-end: ${k("--en-border-width")} solid ${k("--en-color-line")}; min-inline-size: 0; }
  .en-accordion-trigger { display: flex; align-items: center; justify-content: space-between; gap: ${k("--en-space-icon-label")}; inline-size: 100%; border: 0; background: ${k("--en-color-surface")}; font-weight: ${k("--en-font-label-strong-weight")}; }
  @media (hover: hover) { .en-accordion-trigger:hover { background: ${k("--en-color-surface-subtle")}; } }
  .en-accordion-trigger[aria-disabled='true'], .en-accordion-trigger:disabled { color: ${k("--en-color-text-muted")}; cursor: default; }
  .en-accordion-panel { padding-block: ${k("--en-space-3")} ${k("--en-space-4")}; padding-inline: ${k("--en-space-control-inline")}; }
  ${At}
  @media (any-pointer: coarse) {
    .en-option, .en-tab, .en-accordion-trigger, .en-rating-item, .en-rating-clear { min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-touch")}); }
    .en-segmented-control, .en-segmented-item { --_en-text-control-block-size: ${dt(!0)}; }
    .en-segmented-item { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${R}), ${k("--en-size-target-touch")}); }
    .en-rating-item { --_en-rating-target-min: ${k("--en-size-target-touch")}; min-inline-size: ${k("--en-size-target-touch")}; }
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
function kr(e, t, n, r) {
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
function Ar(e) {
	return b`<div id="description" part="description" class="en-description"><slot name="description"><span class="en-description-fallback">${e || C}</span></slot></div>`;
}
//#endregion
//#region ../design-system/node_modules/lit-html/directive.js
var jr = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, Mr = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), Nr = class {
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
}, { I: Pr } = Ie, Fr = (e) => e, Ir = () => document.createComment(""), Lr = (e, t, n) => {
	let r = e._$AA.parentNode, i = t === void 0 ? e._$AB : t._$AA;
	if (n === void 0) n = new Pr(r.insertBefore(Ir(), i), r.insertBefore(Ir(), i), e, e.options);
	else {
		let t = n._$AB.nextSibling, a = n._$AM, o = a !== e;
		if (o) {
			let t;
			n._$AQ?.(e), n._$AM = e, n._$AP !== void 0 && (t = e._$AU) !== a._$AU && n._$AP(t);
		}
		if (t !== i || o) {
			let e = n._$AA;
			for (; e !== t;) {
				let t = Fr(e).nextSibling;
				Fr(r).insertBefore(e, i), e = t;
			}
		}
	}
	return n;
}, $ = (e, t, n = e) => (e._$AI(t, n), e), Rr = {}, zr = (e, t = Rr) => e._$AH = t, Br = (e) => e._$AH, Vr = (e) => {
	e._$AR(), e._$AA.remove();
}, Hr = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	for (let i = t; i <= n; i++) r.set(e[i], i);
	return r;
}, Ur = Mr(class extends Nr {
	constructor(e) {
		if (super(e), e.type !== jr.CHILD) throw Error("repeat() can only be used in text expressions");
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
		let i = Br(e), { values: a, keys: o } = this.dt(t, n, r);
		if (!Array.isArray(i)) return this.ut = o, a;
		let s = this.ut ??= [], c = [], l, u, d = 0, f = i.length - 1, p = 0, m = a.length - 1;
		for (; d <= f && p <= m;) if (i[d] === null) d++;
		else if (i[f] === null) f--;
		else if (s[d] === o[p]) c[p] = $(i[d], a[p]), d++, p++;
		else if (s[f] === o[m]) c[m] = $(i[f], a[m]), f--, m--;
		else if (s[d] === o[m]) c[m] = $(i[d], a[m]), Lr(e, c[m + 1], i[d]), d++, m--;
		else if (s[f] === o[p]) c[p] = $(i[f], a[p]), Lr(e, i[d], i[f]), f--, p++;
		else if (l === void 0 && (l = Hr(o, p, m), u = Hr(s, d, f)), l.has(s[d])) {
			if (l.has(s[f])) {
				let t = u.get(o[p]), n = t === void 0 ? null : i[t];
				if (n === null) {
					let t = Lr(e, i[d]);
					$(t, a[p]), c[p] = t;
				} else c[p] = $(n, a[p]), Lr(e, i[d], n), i[t] = null;
				p++;
			} else Vr(i[f]), f--;
		} else Vr(i[d]), d++;
		for (; p <= m;) {
			let t = Lr(e, c[m + 1]);
			$(t, a[p]), c[p++] = t;
		}
		for (; d <= f;) {
			let e = i[d++];
			e !== null && Vr(e);
		}
		return this.ut = o, zr(e, c), S;
	}
});
//#endregion
//#region ../design-system/packages/elements/dist/segmented-control/template.js
function Wr(e, t, n, r, i, a) {
	return b`<fieldset class="en-fieldset en-field" part="field" ?disabled=${e.disabled}
      aria-describedby=${e.error ? "description child-error" : "description"}>
    <legend class="en-legend en-label" part="label"><slot name="label">${e.label}</slot></legend>
    <div class="en-segmented-control" part="options" @click=${a} @keydown=${n} @focusin=${r} @focusout=${i}>
      ${Ur(e.items, (e) => e.key ?? e.value, (n) => b`
        <label class="en-segmented-item" part="option" data-selected=${n.value === e.value ? "" : C}
          data-disabled=${e.disabled || n.disabled ? "" : C} ?hidden=${n.hidden}>
          <input class="en-segmented-input en-sr-only" part="control" type="radio" name=${n.disabled || n.hidden ? C : "choice"}
            value=${n.value} ?checked=${n.value === e.value} ?disabled=${e.disabled || n.disabled || n.hidden}
            ?required=${e.required} tabindex=${!e.disabled && !n.disabled && !n.hidden && n.value === e.tabValue ? 0 : -1}
            @change=${t}>
          <span class="en-segmented-label" part="option-label" ?data-rich=${n.projected}>${n.projected ? b`<slot name=${`${Tn}${n.key}`}></slot>` : n.label || C}</span>
        </label>`)}
    </div>
    ${Ar(e.description)}
    ${e.error ? b`<p id="child-error" class="en-error" part="error" role="status">${e.error}</p>` : C}
  </fieldset>`;
}
//#endregion
//#region ../design-system/packages/elements/dist/segmented-control/pointer.js
function Gr(e, t, n) {
	let r, i = Infinity;
	for (let a = 0; a < n.length; a++) {
		let o = n[a], s = Math.max(o.left - e, 0, e - o.right), c = Math.max(o.top - t, 0, t - o.bottom), l = s * s + c * c;
		l < i && (i = l, r = a);
	}
	return r;
}
//#endregion
//#region ../design-system/packages/elements/dist/segmented-control/element.js
var Kr = class extends O {
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
		L,
		I,
		fn,
		Or
	];
	static formAssociated = !0;
	model = xr("");
	childOptions = new Nn(this, "segmented");
	hydrationChoice = this.captureHydrationChoice();
	hydrationRevision = 0;
	removedFocus;
	signals = new Tr(this, () => this.model.view.get());
	internals = typeof this.attachInternals == "function" ? this.attachInternals() : void 0;
	revision = 0;
	fieldsetDisabled = !1;
	focusedValue;
	formController = this.internals ? new Dr(this, {
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
		!this.effectiveDisabled && n && !n.disabled && !n.hidden && U(this, {
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
		}), n = Gr(e.clientX, e.clientY, t.map(({ rect: e }) => e)), r = n === void 0 ? void 0 : t[n]?.control;
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
		let t = this.controls.filter((e) => !e.disabled), n = t.indexOf(e.target), r = this.ownerDocument.defaultView?.getComputedStyle(this).direction === "rtl", i = kr(e.key, n, t.length, r);
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
		return Wr({
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
}, qr = class extends D {
	staticStyles = new Ge(this);
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
}, Jr = class extends qr {
	static styles = o`:host { display: contents; } :host([hidden]) { display: none !important; }`;
	render() {
		return b`<slot>${this.label || C}</slot>`;
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/segmented-control.js
V(customElements, {
	tagName: "en-segmented-control",
	elementClass: Kr,
	dependencies: [{
		tagName: "en-segmented-item",
		elementClass: Jr
	}]
});
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/editing-controller.js
var Yr = class {
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
function Xr(e = "") {
	let t = new Q.State(Object.freeze({
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
		value: new Q.Computed(() => t.get().value),
		draft: new Q.Computed(() => t.get().draft),
		isComposing: new Q.Computed(() => t.get().isComposing),
		hasDeferredValue: new Q.Computed(() => t.get().deferredAuthorWrite),
		view: new Q.Computed(() => {
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
var Zr = class extends O {
	static formAssociated = !0;
	static styles = [
		L,
		fn,
		sn,
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
	model = Xr();
	signal = new Tr(this, () => this.model.view.get());
	internals;
	formAdapter;
	authorRevision = 0;
	initialValue;
	showNativeError = !1;
	nativeErrorMessage = "";
	constructor() {
		super(), this.label = "", this.description = "", this.error = "", this.name = "", this.disabled = !1, this.required = !1, this.placeholder = "", this.internals = typeof this.attachInternals == "function" ? this.attachInternals() : void 0, this.internals && (this.formAdapter = new Dr(this, {
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
		return this.visibleError ? "true" : C;
	}
	renderControlFrame() {
		return b`<div class="en-field-focus-frame" part="focus-frame">${this.renderControl()}</div>`;
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
		this.isDisabled || U(this, {
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
		return b`<div class="en-field" part="field" data-invalid=${this.visibleError ? "" : C}>
      <label class="en-label" part="label" for="control"><slot name="label">${this.label}</slot></label>
      ${this.renderControlFrame()}
      ${Ar(this.description)}
      ${this.visibleError ? b`<div class="en-error" part="error" id="error">${this.visibleError}</div>` : C}
    </div>`;
	}
}, Qr = class extends Zr {
	static properties = {
		...Zr.properties,
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
	editing = new Yr(this, {
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
V(customElements, {
	tagName: "en-search-input",
	elementClass: class extends Qr {
		renderControl() {
			return b`<input id="control" class="en-input" part="control" type="search"
      name=${this.name} value=${this.defaultControlValue} placeholder=${this.placeholder || C}
      autocomplete=${this.autocomplete || C} inputmode=${this.inputMode || C}
      ?disabled=${this.isDisabled} ?readonly=${this.readOnly} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}>`;
		}
	}
});
//#endregion
//#region ../design-system/packages/styles/dist/links.js
var $r = F(o`
  ${$t}
  ${en}
  ${N(o`:where(.en-link)`)}
  @media (forced-colors: active) {
    ${tn}
    ${bt(o`.en-link[aria-disabled='true']`)}
  }
`), ei = (e) => b`
  <a
    class="en-link"
    part="control"
    href=${z(e.href)}
    target=${z(e.target)}
    rel=${z(e.rel || (e.target === "_blank" ? "noopener" : void 0))}
    download=${z(e.download)}
  ><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></a>
`;
//#endregion
//#region ../design-system/packages/elements/dist/define/link.js
V(customElements, {
	tagName: "en-link",
	elementClass: class extends O {
		static properties = {
			href: { type: String },
			target: { type: String },
			rel: { type: String },
			download: { type: String }
		};
		static styles = [
			L,
			it,
			$r
		];
		constructor() {
			super(), this.href = void 0, this.target = void 0, this.rel = "", this.download = void 0;
		}
		focus(e) {
			this.renderRoot.querySelector("a")?.focus(e);
		}
		render() {
			return ei(this);
		}
	}
});
//#endregion
//#region ../design-system/packages/styles/dist/internal/breadcrumbs.js
var ti = o`
  .en-breadcrumbs__list, .en-recipe-breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${k("--en-space-2")};
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .en-breadcrumbs__item, .en-recipe-breadcrumbs li {
    display: inline-flex;
    align-items: center;
    gap: ${k("--en-space-2")};
    min-inline-size: 0;
  }
`, ni = F(o`
  .en-section-nav, .en-breadcrumbs, .en-navigation-link, .en-breadcrumbs__label, .en-skip-link {
    box-sizing: border-box;
    min-inline-size: 0;
    max-inline-size: 100%;
    font: ${k("--en-font-ui-weight")} ${k("--en-font-ui-size")} / ${k("--en-font-ui-line-height")} ${k("--en-font-ui-family")};
    text-align: start;
    overflow-wrap: anywhere;
  }
  .en-section-nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${A("--en-navigation-gap", k("--en-space-1"))};
    margin-block: ${k("--en-space-6")};
    padding-block: ${k("--en-space-2")};
    background: ${A("--en-navigation-background", k("--en-color-canvas"))};
    border-block-end: ${k("--en-border-width")} solid ${A("--en-navigation-border-color", k("--en-color-line"))};
  }
  /* Stay in normal flow until a controller or author supplies measured sticky geometry. */
  .en-section-nav--sticky {
    position: var(--en-navigation-position, static);
    inset-block-start: var(--en-navigation-offset, 0px);
    z-index: var(--en-navigation-z-index, 20);
  }
  .en-navigation-link {
    display: inline-flex;
    align-items: center;
    min-inline-size: ${k("--en-size-target-min")};
    min-block-size: ${k("--en-size-target-min")};
    color: ${A("--en-navigation-color", k("--en-color-text-muted"))};
    text-decoration: underline;
    text-underline-offset: ${k("--en-border-width")};
  }
  .en-navigation-link[aria-current]:not([aria-current='false']) {
    color: ${A("--en-navigation-active-color", k("--en-color-text"))};
  }
  @media (hover: hover) { .en-navigation-link:hover {
    color: ${A("--en-navigation-active-color", k("--en-color-text"))};
  } }
  .en-navigation-link[aria-current]:not([aria-current='false']), .en-breadcrumbs__label[aria-current]:not([aria-current='false']) {
    font-weight: ${k("--en-font-label-strong-weight")};
  }
  .en-section-nav .en-navigation-link {
    min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")});
    padding-block: ${k("--en-space-2")};
    padding-inline: ${k("--en-space-control-inline")};
    border-radius: ${A("--en-navigation-link-radius", k("--en-radius-pill"))};
    text-decoration: none;
  }
  .en-section-nav .en-navigation-link[aria-current]:not([aria-current='false']) {
    background: ${A("--en-navigation-active-background", k("--en-color-surface-subtle"))};
  }
  @media (hover: hover) { .en-section-nav .en-navigation-link:hover {
    background: ${A("--en-navigation-active-background", k("--en-color-surface-subtle"))};
  } }
  ${ti}
  .en-breadcrumbs { color: ${A("--en-navigation-color", k("--en-color-text-muted"))}; }
  .en-breadcrumbs__list { gap: ${A("--en-navigation-gap", k("--en-space-2"))}; }
  .en-breadcrumbs__item { max-inline-size: 100%; gap: ${A("--en-navigation-gap", k("--en-space-2"))}; }
  .en-breadcrumbs__label { color: ${A("--en-navigation-active-color", k("--en-color-text"))}; }
  .en-breadcrumbs__separator { flex: none; color: ${k("--en-color-text-muted")}; }
  .en-navigation-target {
    scroll-margin-block-start: calc(var(--en-navigation-height, 0px) + var(--en-navigation-offset, 0px) + ${k("--en-space-6")});
  }
  .en-skip-link {
    position: fixed;
    inset-block-start: ${k("--en-space-3")};
    inset-inline-start: ${k("--en-space-3")};
    z-index: calc(var(--en-navigation-z-index, 20) + 1);
    max-inline-size: calc(100% - 2 * ${k("--en-space-3")});
    min-inline-size: ${k("--en-size-target-min")};
    min-block-size: ${k("--en-size-target-min")};
    padding: ${k("--en-space-3")};
    border: ${k("--en-border-width")} solid ${k("--en-color-boundary")};
    border-radius: ${k("--en-radius-control")};
    background: ${k("--en-color-surface")};
    color: ${k("--en-color-text")};
    text-decoration: underline;
    text-underline-offset: ${k("--en-border-width")};
    transform: translateY(calc(-100% - 2 * ${k("--en-space-3")}));
    transition: none;
  }
  .en-skip-link:focus { transform: none; }
  ${N(o`:where(.en-navigation-link, .en-skip-link)`)}
  @media (any-pointer: coarse) {
    .en-navigation-link, .en-skip-link {
      min-inline-size: ${k("--en-size-target-touch")};
      min-block-size: ${k("--en-size-target-touch")};
    }
    .en-section-nav .en-navigation-link { min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-touch")}); }
  }
  @media (prefers-reduced-motion: reduce) {
    .en-skip-link { transition: none; animation: none; }
  }
  @media (forced-colors: active) {
    .en-section-nav { background: Canvas; border-color: CanvasText; }
    .en-navigation-link { color: LinkText; }
    .en-navigation-link[aria-current]:not([aria-current='false']) { color: LinkText; }
  @media (hover: hover) { .en-navigation-link:hover { color: LinkText; } }
    .en-section-nav .en-navigation-link[aria-current]:not([aria-current='false']) { background: Highlight; color: HighlightText; }
  @media (hover: hover) { .en-section-nav .en-navigation-link:hover { background: Highlight; color: HighlightText; } }
    .en-breadcrumbs, .en-breadcrumbs__label, .en-breadcrumbs__separator { color: CanvasText; }
    .en-skip-link { background: Canvas; color: LinkText; border-color: CanvasText; }
  }
`), ri = o`
  :host { margin-block: ${k("--en-space-6")}; }
  .en-section-nav { margin-block: 0; }
  .en-section-nav > slot:not([hidden]) { display: contents; }
  :host([sticky]) {
    position: var(--en-navigation-position, static);
    inset-block-start: var(--en-navigation-offset, 0px);
    z-index: var(--en-navigation-z-index, 20);
  }
  ::slotted(a) {
    box-sizing: border-box;
    min-inline-size: 0;
    max-inline-size: 100%;
    font: inherit;
    text-align: start;
    overflow-wrap: anywhere;
    color: ${A("--en-navigation-color", k("--en-color-text-muted"))};
  }
  ::slotted(a[href]:not([hidden])) {
    /* Preserve authored inline phrasing and spaces while centering a single line. */
    display: inline-block;
    min-inline-size: ${k("--en-size-target-min")};
    min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")});
    padding-block: max(${k("--en-space-2")}, calc((max(${k("--en-size-control-min")}, ${k("--en-size-target-min")}) - 1lh) / 2));
    padding-inline: ${k("--en-space-control-inline")};
    border-radius: ${A("--en-navigation-link-radius", k("--en-radius-pill"))};
    text-decoration: none;
  }
  ::slotted(a:not([href])), ::slotted(a[href][aria-current]:not([aria-current='false'])) {
    color: ${A("--en-navigation-active-color", k("--en-color-text"))};
  }
  @media (hover: hover) { ::slotted(a[href]:hover) {
    color: ${A("--en-navigation-active-color", k("--en-color-text"))};
  } }
  ::slotted(a[href][aria-current]:not([aria-current='false'])) {
    background: ${A("--en-navigation-active-background", k("--en-color-surface-subtle"))};
  }
  @media (hover: hover) { ::slotted(a[href]:hover) {
    background: ${A("--en-navigation-active-background", k("--en-color-surface-subtle"))};
  } }
  ::slotted(a[aria-current]:not([aria-current='false'])) {
    font-weight: ${k("--en-font-label-strong-weight")};
  }
  ${M(o`::slotted(a[href])`)}
  ${P(o`::slotted(a[href]:focus-visible)`)}
  @media (any-pointer: coarse) {
    ::slotted(a[href]:not([hidden])) {
      min-inline-size: ${k("--en-size-target-touch")};
      min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-touch")});
      padding-block: max(${k("--en-space-2")}, calc((max(${k("--en-size-control-min")}, ${k("--en-size-target-touch")}) - 1lh) / 2));
    }
  }
  @media (forced-colors: active) {
    ::slotted(a[href]) { color: LinkText; }
    ::slotted(a:not([href])) { color: CanvasText; }
    ::slotted(a[href][aria-current]:not([aria-current='false'])) {
      background: Highlight;
      color: HighlightText;
    }
  @media (hover: hover) { ::slotted(a[href]:hover) {
      background: Highlight;
      color: HighlightText;
    } }
  }
`;
o`
  ::slotted(a), ::slotted(span) {
    box-sizing: border-box;
    min-inline-size: 0;
    max-inline-size: 100%;
    font: inherit;
    text-align: start;
    overflow-wrap: anywhere;
  }
  ::slotted(a[href]:not([hidden])) {
    /* Keep authored phrasing in an inline formatting context, including its spaces. */
    display: inline-block;
    min-inline-size: ${k("--en-size-target-min")};
    min-block-size: ${k("--en-size-target-min")};
    padding-block: max(0px, calc((${k("--en-size-target-min")} - 1lh) / 2));
    color: ${A("--en-navigation-color", k("--en-color-text-muted"))};
    text-decoration: underline;
    text-underline-offset: ${k("--en-border-width")};
  }
  ::slotted(span), ::slotted(a:not([href])), ::slotted(a[href][aria-current]:not([aria-current='false'])) {
    color: ${A("--en-navigation-active-color", k("--en-color-text"))};
  }
  @media (hover: hover) { ::slotted(a[href]:hover) {
    color: ${A("--en-navigation-active-color", k("--en-color-text"))};
  } }
  ::slotted(a[aria-current]:not([aria-current='false'])),
  ::slotted(span[aria-current]:not([aria-current='false'])) {
    font-weight: ${k("--en-font-label-strong-weight")};
  }
  ::slotted([hidden]:not([hidden='until-found' i])),
  .en-breadcrumbs__item[hidden], .en-breadcrumbs__diagnostic[hidden] {
    display: none !important;
  }
  ${M(o`::slotted(a[href])`)}
  ${P(o`::slotted(a[href]:focus-visible)`)}
  @media (any-pointer: coarse) {
    ::slotted(a[href]:not([hidden])) {
      min-inline-size: ${k("--en-size-target-touch")};
      min-block-size: ${k("--en-size-target-touch")};
      padding-block: max(0px, calc((${k("--en-size-target-touch")} - 1lh) / 2));
    }
  }
  @media (forced-colors: active) {
    ::slotted(a[href]), ::slotted(a[href][aria-current]:not([aria-current='false'])) { color: LinkText; }
  @media (hover: hover) { ::slotted(a[href]:hover) { color: LinkText; } }
    ::slotted(span), ::slotted(a:not([href])) { color: CanvasText; }
  }
`;
//#endregion
//#region ../design-system/packages/primitives/dist/templates/slotted-navigation.js
function ii({ label: e }) {
	return b`
		<nav class="en-section-nav" part="base" aria-label=${e}>
			<slot></slot>
		</nav>
	`;
}
//#endregion
//#region ../design-system/packages/elements/dist/define/navigation.js
V(customElements, {
	tagName: "en-navigation",
	elementClass: class extends O {
		static properties = {
			label: {
				type: String,
				useDefault: !0
			},
			sticky: {
				type: Boolean,
				reflect: !0,
				useDefault: !0
			}
		};
		static styles = [
			L,
			I,
			ni,
			ri
		];
		constructor() {
			super(), this.label = "Navigation", this.sticky = !1;
		}
		render() {
			return ii({ label: this.label });
		}
	}
});
//#endregion
//#region ../design-system/packages/styles/dist/surfaces.js
var ai = F(o`
  .en-panel, .en-card {
    min-inline-size: 0;
    padding: ${A("--en-surface-padding", k("--en-space-panel"))};
    border: ${k("--en-border-width")} solid ${A("--en-surface-border-color", k("--en-color-line"))};
    border-radius: ${A("--en-surface-radius", k("--en-radius-container"))};
    background: ${A("--en-surface-background", k("--en-color-surface"))};
    color: ${A("--en-surface-color", k("--en-color-text"))};
  }
  .en-card {
    display: flex;
    flex-direction: column;
    gap: ${k("--en-space-4")};
    background: ${A("--en-surface-background", A("--en-card-background", k("--en-color-surface")))};
  }
  .en-card__header, .en-card__body, .en-card__footer { min-inline-size: 0; }
  .en-card__header { font-weight: ${k("--en-font-label-strong-weight")}; }
  .en-card__footer { display: flex; align-items: center; flex-wrap: wrap; gap: ${k("--en-space-actions")}; }
  .en-card__footer > slot { display: contents; }
  .en-inset-surface {
    border-radius: ${A("--en-inset-child-radius", o`max(0px, ${A("--en-inset-outer-radius", k("--en-radius-container"))} - ${A("--en-inset-distance", k("--en-space-2"))})`)};
  }
  .en-divider { margin: 0; border: 0; border-block-start: ${k("--en-border-width")} solid ${A("--en-divider-color", k("--en-color-line"))}; }
  .en-divider[aria-orientation='vertical'] { align-self: stretch; border-block-start: 0; border-inline-start: ${k("--en-border-width")} solid ${A("--en-divider-color", k("--en-color-line"))}; }
  @media (forced-colors: active) {
    .en-panel, .en-card { color: CanvasText; background: Canvas; border-color: CanvasText; }
    .en-divider { border-color: CanvasText; }
  }
`);
F(o`
  .en-stack { display: flex; flex-direction: column; gap: ${A("--en-stack-gap", k("--en-space-rows"))}; min-inline-size: 0; }
  .en-stack[data-direction='horizontal'] { flex-direction: row; align-items: center; }
  .en-stack[data-align='start'] { align-items: flex-start; }
  .en-stack[data-align='center'] { align-items: center; }
  .en-stack[data-align='end'] { align-items: flex-end; }
  .en-stack[data-align='stretch'] { align-items: stretch; }
  .en-stack[data-justify='start'] { justify-content: flex-start; }
  .en-stack[data-justify='center'] { justify-content: center; }
  .en-stack[data-justify='end'] { justify-content: flex-end; }
  .en-stack[data-justify='between'] { justify-content: space-between; }
  .en-stack[data-wrap], .en-stack[data-wrap='true'] { flex-wrap: wrap; }
  .en-stack[data-wrap='false'] { flex-wrap: nowrap; }
  .en-stack[data-gap='small'] { gap: ${A("--en-stack-gap", k("--en-space-2"))}; }
  .en-stack[data-gap='medium'] { gap: ${A("--en-stack-gap", k("--en-space-4"))}; }
  .en-stack[data-gap='large'] { gap: ${A("--en-stack-gap", k("--en-space-6"))}; }
  .en-cluster { display: flex; align-items: center; flex-wrap: wrap; gap: ${A("--en-cluster-gap", k("--en-space-actions"))}; min-inline-size: 0; }
  .en-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, ${A("--en-grid-item-min", k("--en-layout-form-max"))}), 1fr)); gap: ${A("--en-grid-gap", k("--en-space-4"))}; min-inline-size: 0; }
  .en-stack > slot, .en-cluster > slot, .en-grid > slot { display: contents; }
  .en-stack > *, .en-cluster > *, .en-grid > * { min-inline-size: 0; }
  .en-scroll-region { min-inline-size: 0; min-block-size: 0; overflow: auto; scrollbar-gutter: stable; }
  .en-query-region { container-type: inline-size; container-name: en-layout; }
  .en-split-view {
    display: grid;
    isolation: isolate;
    grid-template-columns: minmax(0, calc((100% - max(${k("--en-size-splitter")}, ${k("--en-size-target-min")})) * var(--en-split-ratio, 0.5))) max(${k("--en-size-splitter")}, ${k("--en-size-target-min")}) minmax(0, 1fr);
    min-inline-size: 0;
    min-block-size: 0;
  }
  .en-split-view[data-orientation='vertical'] { grid-template-columns: minmax(0, 1fr); grid-template-rows: minmax(0, calc((100% - max(${k("--en-size-splitter")}, ${k("--en-size-target-min")})) * var(--en-split-ratio, 0.5))) max(${k("--en-size-splitter")}, ${k("--en-size-target-min")}) minmax(0, 1fr); }
  .en-split-pane { min-inline-size: 0; min-block-size: 0; overflow: auto; }
  .en-split-handle { display: block; min-inline-size: 0; min-block-size: 0; }
  /* Raise only the focused grid item above adjacent pane surfaces, locally. */
  .en-split-view > .en-split-handle:focus-visible { z-index: 1; }
  .en-split-separator { display: grid; place-items: center; inline-size: 100%; block-size: 100%; min-inline-size: 0; min-block-size: 0; cursor: col-resize; }
  .en-split-grip { inline-size: ${k("--en-border-width")}; block-size: 100%; background: ${k("--en-color-boundary")}; }
  .en-split-separator[data-orientation='horizontal'], :host([role='separator'][aria-orientation='horizontal']) .en-split-separator { cursor: row-resize; }
  .en-split-separator[data-orientation='horizontal'] .en-split-grip, :host([role='separator'][aria-orientation='horizontal']) .en-split-grip { inline-size: 100%; block-size: ${k("--en-border-width")}; }
  ${At}
  @media (forced-colors: active) { .en-split-grip { background: ButtonText; } }
`);
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/optional-slot-presence.js
var oi = "data-en-optional-slots";
function si(e, t) {
	let n = e.getAttribute(oi);
	if (n === null) return;
	let r;
	try {
		r = JSON.parse(n);
	} catch {
		throw TypeError("Invalid optional-slot SSR metadata.");
	}
	if (!r || typeof r != "object") throw TypeError("Invalid optional-slot SSR metadata.");
	let i = r;
	if (i.version !== 1 || !i.slots || typeof i.slots != "object" || Array.isArray(i.slots) || Object.keys(i.slots).length !== t.length || t.some((e) => typeof i.slots?.[e] != "boolean")) throw TypeError("Invalid optional-slot SSR metadata.");
	return Object.freeze(Object.fromEntries(t.map((e) => [e, i.slots[e]])));
}
//#endregion
//#region ../design-system/packages/elements/dist/card/template.js
var ci = (e) => b`
  <div class="en-card" part="base">
    <div class="en-card__header" part="header" ?hidden=${!e.hasHeader}>
      <slot name="header" @slotchange=${e.onSlotChange}></slot>
    </div>
    <div class="en-card__body" part="body"><slot></slot></div>
    <div class="en-card__footer" part="footer" ?hidden=${!e.hasFooter}>
      <slot name="footer" @slotchange=${e.onSlotChange}></slot>
    </div>
  </div>
`;
//#endregion
//#region ../design-system/packages/elements/dist/define/card.js
V(customElements, {
	tagName: "en-card",
	elementClass: class extends O {
		static properties = {
			hasHeader: { state: !0 },
			hasFooter: { state: !0 }
		};
		static styles = [
			L,
			I,
			ai
		];
		constructor() {
			super(), this.hasHeader = !0, this.hasFooter = !0;
		}
		willUpdate() {
			if (this.hasUpdated) return;
			let e = si(this, ["header", "footer"]);
			e && (this.hasHeader = e.header, this.hasFooter = e.footer);
		}
		firstUpdated() {
			this.removeAttribute(oi);
			for (let e of this.renderRoot.querySelectorAll("slot[name]")) this.syncSlotPresence(e);
		}
		syncSlotPresence(e) {
			let t = e.assignedNodes({ flatten: !0 }).some((e) => e.nodeType === 1 || !!e.textContent?.trim());
			e.name === "header" && (this.hasHeader = t), e.name === "footer" && (this.hasFooter = t);
		}
		onSlotChange = (e) => {
			this.syncSlotPresence(e.currentTarget);
		};
		render() {
			return ci({
				hasHeader: this.hasHeader,
				hasFooter: this.hasFooter,
				onSlotChange: this.onSlotChange
			});
		}
	}
});
//#endregion
//#region ../design-system/node_modules/lit-html/static.js
var li = Symbol.for(""), ui = (e) => {
	if (e?.r === li) return e?._$litStatic$;
}, di = (e) => ({
	_$litStatic$: e,
	r: li
}), fi = /* @__PURE__ */ new Map(), pi = ((e) => (t, ...n) => {
	let r = n.length, i, a, o = [], s = [], c, l = 0, u = !1;
	for (; l < r;) {
		for (c = t[l]; l < r && (a = n[l], (i = ui(a)) !== void 0);) c += i + t[++l], u = !0;
		l !== r && s.push(a), o.push(c), l++;
	}
	if (l === r && o.push(t[r]), u) {
		let e = o.join("$$lit$$");
		(t = fi.get(e)) === void 0 && (o.raw = o, fi.set(e, t = o)), n = s;
	}
	return e(t, ...n);
})(b), mi = class extends Zr {
	static styles = [...Zr.styles, dn];
	static properties = {
		...Zr.properties,
		items: { attribute: !1 }
	};
	childOptions = new Nn(this, "select");
	hydrationChoice = this.captureHydrationChoice();
	hydrationRevision = 0;
	constructor() {
		super(), this.items = [];
	}
	connectedCallback() {
		this.hydrationRevision = this.valueRevision, super.connectedCallback();
	}
	captureHydrationChoice() {
		let e = this.shadowRoot?.querySelector("#control");
		if (e && this.hasAttribute("data-en-selection-children")) return {
			value: e.value,
			baseline: [...e.options].find((e) => e.defaultSelected)?.value ?? [...e.options].find((e) => !e.disabled)?.value ?? ""
		};
	}
	get effectiveItems() {
		return this.childOptions.view.active ? this.childOptions.view.items : this.items;
	}
	currentItems() {
		let e = this.childOptions.current();
		return e.active ? e.items : this.items;
	}
	get visibleError() {
		return this.childOptions?.view.error || super.visibleError;
	}
	get submissionValue() {
		return this.value === "" && this.placeholder ? "" : this.currentItems().some((e) => e.value === this.value && !e.disabled && !e.hidden) ? this.value : null;
	}
	canCommitValue(e) {
		return !this.isDisabled && (e === "" && !!this.placeholder || this.currentItems().some((t) => t.value === e && !t.disabled && !t.hidden));
	}
	validateAcceptedValue() {
		let e = super.validateAcceptedValue(), t = this.childOptions?.current().error;
		if (t) return {
			...e,
			flags: {
				...e.flags,
				customError: !0
			},
			message: t
		};
		if (this.required && this.submissionValue === null) {
			let t = this.controlNode?.cloneNode(!0);
			return t && (t.selectedIndex = -1, t.setCustomValidity("")), {
				...e,
				flags: {
					...e.flags,
					valueMissing: !0
				},
				message: this.error || t?.validationMessage || "Please select an option."
			};
		}
		return e;
	}
	willUpdate(e) {
		super.willUpdate(e);
		let t = this.hydrationChoice;
		t && (this.hydrationChoice = void 0, this.valueRevision === this.hydrationRevision && this.value === this.childOptions.initialValue && t.value !== t.baseline && this.requestValue(t.value, "hydrate"));
	}
	reconcile() {
		let e = this.controlNode;
		if (this.hydrationChoice && !this.hasUpdated) return;
		let t = this.model.draft.get();
		e && e.value !== t && (e.value = t);
	}
	onInput(e) {
		let t = e.target.value;
		this.model.setDraft(t), Ht(this, {
			value: t,
			isComposing: !1,
			inputType: "insertReplacementText"
		});
	}
	onChange(e) {
		let t = e.target.value;
		this.model.setDraft(t), this.requestValue(t, "change"), this.model.setValue(this.value), this.reconcile(), this.syncForm();
	}
	renderControl() {
		let e = this.effectiveItems, t = (e) => di(e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;")), n = !this.hasUpdated && this.childOptions.initialValue !== void 0 ? this.childOptions.initialValue : this.defaultControlValue, r = !this.placeholder && e.length > 0 && !e.some((e) => e.value === n);
		return b`<select id="control" class="en-select" part="control" name=${this.name}
      ?disabled=${this.isDisabled} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}
      @input=${this.onInput} @change=${this.onChange}>
      <button type="button" part="selected-button"><selectedcontent part="selected-content"></selectedcontent></button>
      ${this.placeholder ? pi`<option part="option" value="" ?selected=${n === ""}>${t(this.placeholder)}</option>` : r ? b`<option value="" selected disabled hidden></option>` : C}
      ${Ur(e, (e) => e.key ?? e.value, (e) => pi`<option part="option" value=${e.value} ?selected=${e.value === n}
        ?disabled=${e.disabled} ?hidden=${e.hidden}>${t(e.label || "")}</option>`)}
    </select>`;
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/select.js
V(customElements, {
	tagName: "en-select",
	elementClass: mi,
	dependencies: [{
		tagName: "en-select-option",
		elementClass: class extends qr {
			render() {
				return C;
			}
		}
	}]
});
//#endregion
//#region ../design-system/packages/elements/dist/checkbox/template.js
function hi(e, t) {
	return b`<div part="field" class="en-field">
    <label class="en-choice" part="label">
      <input part="control" class=${`en-${e.kind}`} type=${e.kind === "radio" ? "radio" : "checkbox"}
        role=${e.kind === "switch" ? "switch" : C}
        ?checked=${e.checked} aria-checked=${e.kind === "checkbox" && e.indeterminate ? "mixed" : C}
        .value=${e.value} ?disabled=${e.disabled} ?required=${e.required}
        tabindex=${e.tabIndex} aria-labelledby="label-text" aria-describedby="description"
        @change=${t}>
      <span class="en-label" id="label-text" part="label-text"><slot name="label"><slot>${e.label}</slot></slot></span>
    </label>
    ${Ar(e.description)}
  </div>`;
}
//#endregion
//#region ../design-system/packages/elements/dist/checkbox/choice-base.js
var gi = class extends O {
	static properties = {
		checked: {
			type: Boolean,
			noAccessor: !0
		},
		disabled: {
			type: Boolean,
			reflect: !0
		},
		required: { type: Boolean },
		name: {},
		value: {},
		label: {},
		description: {}
	};
	static styles = [
		L,
		I,
		sn,
		fn,
		Or
	];
	static formAssociated = !0;
	checkedModel = xr(!1);
	signalController = new Tr(this, () => this.checkedModel.view.get());
	authorRevision = 0;
	formDisabled = !1;
	internals = typeof this.attachInternals == "function" ? this.attachInternals() : void 0;
	formController = this.internals ? new Dr(this, {
		internals: this.internals,
		control: () => this.nativeControl,
		value: () => this.formValue,
		state: () => this.checked ? "checked" : "unchecked",
		disabled: () => this.effectiveDisabled,
		onReset: () => {
			this.checked = this.hasAttribute("checked"), this.syncControl();
		},
		onRestore: (e) => {
			typeof e == "string" && (this.checked = e === "checked"), this.syncControl();
		},
		validate: () => this.formValidation()
	}) : void 0;
	constructor() {
		super(), this.disabled = !1, this.required = !1, this.name = "", this.value = "on", this.label = "", this.description = "";
	}
	get checked() {
		return this.checkedModel.value.get();
	}
	set checked(e) {
		++this.authorRevision, this.setChecked(!!e);
	}
	setChecked(e) {
		let t = this.checked;
		this.checkedModel.set(e), this.requestUpdate("checked", t), this.syncForm();
	}
	get mixed() {
		return !1;
	}
	get effectiveDisabled() {
		return this.disabled || this.formDisabled;
	}
	get controlTabIndex() {
		return 0;
	}
	get nativeControl() {
		return this.renderRoot?.querySelector("input") ?? null;
	}
	get formValue() {
		return this.checked ? this.value : null;
	}
	focus(e) {
		this.nativeControl?.focus(e);
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
	formDisabledCallback(e) {
		this.formDisabled = e, this.requestUpdate(), this.formController?.formDisabled(e);
	}
	formResetCallback() {
		this.formController?.formReset();
	}
	formStateRestoreCallback(e, t = "restore") {
		this.formController?.formStateRestore(e, t);
	}
	formValidation() {
		let e = this.required && !this.checked && !this.effectiveDisabled;
		return {
			flags: e ? { valueMissing: !0 } : {},
			message: e ? this.nativeControl?.validationMessage || "Please select this option." : "",
			anchor: this.nativeControl ?? void 0
		};
	}
	syncForm() {
		this.formController?.sync();
	}
	syncControl() {
		this.nativeControl && (this.nativeControl.checked = this.checked, this.nativeControl.indeterminate = this.mixed);
	}
	handleChange(e) {
		if (this.effectiveDisabled) {
			this.syncControl();
			return;
		}
		let t = this.nativeControl?.checked ?? !this.checked;
		U(this, {
			previous: this.checked,
			proposed: t,
			reason: "toggle",
			getRevision: () => this.authorRevision,
			stage: (e) => {
				this.setChecked(e), this.syncControl();
			},
			rollback: (e) => {
				this.setChecked(e), this.syncControl();
			},
			commit: () => {
				this.didCommit(), this.syncForm();
			}
		}), this.syncControl();
	}
	didCommit() {}
	updated(e) {
		this.syncForm(), this.syncControl();
	}
	render() {
		return hi({
			kind: this.kind,
			checked: this.checked,
			indeterminate: this.mixed,
			disabled: this.effectiveDisabled,
			required: this.required,
			value: this.value,
			label: this.label,
			description: this.description,
			tabIndex: this.controlTabIndex
		}, (e) => this.handleChange(e));
	}
}, _i = class extends gi {
	static properties = {
		...gi.properties,
		indeterminate: {
			type: Boolean,
			noAccessor: !0
		}
	};
	mixedState = !1;
	get indeterminate() {
		return this.mixedState;
	}
	set indeterminate(e) {
		++this.authorRevision, this.setIndeterminate(!!e);
	}
	setIndeterminate(e) {
		let t = this.mixedState;
		this.mixedState = e, this.requestUpdate("indeterminate", t), this.syncControl();
	}
	get kind() {
		return "checkbox";
	}
	get mixed() {
		return this.indeterminate;
	}
	didCommit() {
		this.setIndeterminate(!1);
	}
	formResetCallback() {
		this.indeterminate = !1, super.formResetCallback();
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/checkbox.js
V(customElements, {
	tagName: "en-checkbox",
	elementClass: _i
});
//#endregion
//#region ../design-system/packages/elements/dist/accordion-item/template.js
function vi(e, t) {
	return b`
    <section class="en-accordion-item" part="base">
      <div part="heading" role="heading" aria-level=${e.headingLevel}>
        <button id="trigger" class="en-accordion-trigger" part="trigger" type="button"
          aria-expanded=${String(e.open)} aria-controls="panel" ?disabled=${e.disabled}
          @click=${t}>
          <slot name="label"><slot name="heading">${e.label}</slot></slot>
          <span part="indicator" aria-hidden="true">${e.open ? "−" : "+"}</span>
        </button>
      </div>
      <div id="panel" class="en-accordion-panel" part="panel" ?hidden=${!e.open}>
        <slot></slot>
      </div>
    </section>`;
}
//#endregion
//#region ../design-system/packages/primitives/dist/state/disclosure.js
function yi(e = !1) {
	let t = xr(e);
	return {
		open: t.value,
		view: new Q.Computed(() => {
			let { value: e, revision: n } = t.view.get();
			return Object.freeze({
				open: e,
				revision: n
			});
		}),
		setOpen: t.set,
		toggle: () => t.set(!t.value.get()),
		reset: t.reset
	};
}
//#endregion
//#region ../design-system/packages/elements/dist/define/accordion-item.js
V(customElements, {
	tagName: "en-accordion-item",
	elementClass: class extends O {
		static properties = {
			value: {
				type: String,
				reflect: !0
			},
			label: { type: String },
			open: {
				type: Boolean,
				reflect: !0,
				noAccessor: !0
			},
			disabled: {
				type: Boolean,
				reflect: !0
			},
			headingLevel: {
				type: Number,
				attribute: "heading-level"
			}
		};
		static styles = [
			L,
			I,
			Or
		];
		model = yi(!1);
		authorRevision = 0;
		presentedOpen = !1;
		owner;
		constructor() {
			super(), this.value = "", this.label = "", this.disabled = !1, this.headingLevel = 3, new Tr(this, () => this.model.view.get());
		}
		get open() {
			return this.model.open.get();
		}
		set open(e) {
			this.authorRevision += 1;
			let t = this.presentedOpen;
			this.model.setOpen(!!e), this.presentedOpen = this.open, this.requestUpdate("open", t);
		}
		setOwner(e) {
			this.owner = e;
		}
		focus(e) {
			this.renderRoot.querySelector("button")?.focus(e);
		}
		toggle() {
			if (!this.disabled) {
				if (this.owner) {
					this.owner.toggleItem(this);
					return;
				}
				U(this, {
					previous: this.open,
					proposed: !this.open,
					reason: "toggle",
					getRevision: () => this.authorRevision,
					stage: (e) => {
						this.model.setOpen(e);
					},
					rollback: (e) => {
						this.model.setOpen(e);
					},
					commit: () => {
						let e = this.presentedOpen;
						this.presentedOpen = this.open, this.requestUpdate("open", e);
					}
				});
			}
		}
		updated(e) {
			if (e.has("open") && !this.presentedOpen) {
				let e = this.renderRoot.querySelector("#panel"), t = this.ownerDocument.activeElement;
				(t && e?.contains(t) || t && this.contains(t) && t.slot !== "heading" && t.slot !== "label") && this.focus();
			}
		}
		render() {
			let e = Math.max(1, Math.min(6, Math.trunc(this.headingLevel) || 3));
			return vi({
				open: this.presentedOpen,
				disabled: this.disabled,
				label: this.label,
				headingLevel: e
			}, () => this.toggle());
		}
	}
});
//#endregion
//#region ../design-system/packages/elements/dist/alert/template.js
var bi = (e) => b`
  <div class="en-alert" part="base" data-variant=${e.variant} ?hidden=${!e.open}>
    <span class="en-alert__icon" part="icon" aria-hidden="true" ?hidden=${!e.hasIcon}><slot name="icon" @slotchange=${e.onIconChange}></slot></span>
    <div class="en-alert__content" part="content" role="status" aria-atomic="true"><slot></slot></div>
    ${e.dismissible ? b`
      <button
        class="en-button en-icon-button en-alert__close"
        data-variant="ghost"
        part="close"
        type="button"
        aria-label=${e.dismissLabel}
        @click=${e.onDismiss}
      ><svg class="en-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
    ` : null}
  </div>
`;
//#endregion
//#region ../design-system/packages/elements/dist/define/alert.js
V(customElements, {
	tagName: "en-alert",
	elementClass: class extends O {
		static properties = {
			variant: { reflect: !0 },
			dismissible: {
				type: Boolean,
				reflect: !0
			},
			dismissLabel: { attribute: "dismiss-label" },
			open: {
				type: Boolean,
				reflect: !0,
				noAccessor: !0
			},
			hasIcon: { state: !0 }
		};
		static styles = [
			L,
			I,
			sn,
			Nt,
			Pt
		];
		openValue = !0;
		revision = 0;
		constructor() {
			super(), this.variant = "info", this.dismissible = !1, this.dismissLabel = "Dismiss notification", this.hasIcon = !1;
		}
		get open() {
			return this.openValue;
		}
		set open(e) {
			let t = this.openValue;
			this.openValue = !!e, this.revision += 1, this.requestUpdate("open", t);
		}
		dismiss() {
			if (!this.open) return;
			let e = this.open;
			try {
				U(this, {
					previous: e,
					proposed: !1,
					reason: "dismiss",
					getRevision: () => this.revision,
					stage: (e) => {
						this.openValue = e;
					},
					rollback: (e) => {
						this.openValue = e, this.requestUpdate("open", !1);
					}
				});
			} finally {
				this.requestUpdate("open", e);
			}
		}
		onDismiss = () => this.dismiss();
		willUpdate() {
			if (this.hasUpdated) return;
			let e = si(this, ["icon"]);
			e && (this.hasIcon = e.icon);
		}
		firstUpdated() {
			this.removeAttribute(oi);
			let e = this.renderRoot.querySelector("slot[name=\"icon\"]");
			e && this.syncIconPresence(e);
		}
		syncIconPresence(e) {
			this.hasIcon = e.assignedNodes({ flatten: !0 }).some((e) => e.nodeType === 1 || !!e.textContent?.trim());
		}
		onIconChange = (e) => {
			this.syncIconPresence(e.currentTarget);
		};
		render() {
			return bi({
				open: this.open,
				variant: this.variant,
				dismissible: this.dismissible,
				dismissLabel: this.dismissLabel || "Dismiss notification",
				onDismiss: this.onDismiss,
				hasIcon: this.hasIcon,
				onIconChange: this.onIconChange
			});
		}
	}
});
//#endregion
//#region ../design-system/packages/elements/dist/progress-bar/template.js
var xi = (e) => b`
  <progress
    class="en-progress"
    part="track"
    max=${e.max}
    value=${z(e.value)}
    aria-label=${z(e.label || void 0)}
  ></progress>
`;
//#endregion
//#region ../design-system/packages/elements/dist/define/progress-bar.js
V(customElements, {
	tagName: "en-progress-bar",
	elementClass: class extends O {
		static properties = {
			value: { type: Number },
			max: { type: Number },
			label: { type: String }
		};
		static styles = [
			L,
			I,
			Nt
		];
		constructor() {
			super(), this.value = void 0, this.max = 100, this.label = "";
		}
		render() {
			let e = Number.isFinite(this.max) && this.max > 0 ? this.max : 100;
			return xi({
				value: this.value === void 0 || !Number.isFinite(this.value) ? void 0 : Math.max(0, Math.min(e, this.value)),
				max: e,
				label: this.label
			});
		}
	}
});
//#endregion
//#region ../design-system/packages/styles/dist/commands.js
var Si = A("--en-option-list-radius", A("--en-overlay-radius", k("--en-radius-container"))), Ci = o`max(${A("--en-option-list-padding", A("--en-overlay-padding", k("--en-space-1")))}, ${j({
	family: "option",
	inset: !0
})})`, wi = A("--en-option-list-color", A("--en-overlay-color", k("--en-color-text"))), Ti = A("--en-option-list-background", A("--en-overlay-background", k("--en-color-surface-raised"))), Ei = A("--en-option-list-gap", o`0px`), Di = A("--en-option-radius", o`max(0px, ${Si} - ${Ci} - ${k("--en-border-width")})`);
function Oi(e, t = Di) {
	return o`
    ${e} {
      position: relative;
      display: flex;
      align-items: center;
      gap: ${k("--en-space-icon-label")};
      box-sizing: border-box;
      min-inline-size: ${k("--en-size-target-min")};
      min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")});
      max-inline-size: 100%;
      inline-size: 100%;
      margin: 0;
      padding: ${A("--en-option-block-padding", k("--en-space-control-block"))} ${A("--en-option-inline-padding", k("--en-space-control-inline"))};
      border: 0;
      border-radius: ${t};
      font: inherit;
      text-align: start;
      white-space: normal;
      overflow-wrap: anywhere;
      cursor: pointer;
    }
    @media (any-pointer: coarse) {
      ${e} { min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-touch")}); }
    }
  `;
}
function ki(e, t) {
	return Jt({
		base: e,
		hover: o`${e}:not([aria-disabled='true']):hover`,
		active: t,
		pressed: o`${e}:not([aria-disabled='true']):active`,
		disabled: o`${e}[aria-disabled='true']`,
		restBackground: o`transparent`,
		restColor: wi,
		hoverBackground: k("--en-color-surface-subtle")
	});
}
function Ai(e, t) {
	return o`
    ${e} { z-index: 1; }
    ${P(e, {
		family: "option",
		inset: !0,
		restSelector: t
	})}
    @media (forced-colors: active) {
      ${e} { outline-color: HighlightText; background: Highlight; color: HighlightText; }
    }
  `;
}
F(o`
  .en-menu {
    position: fixed;
    inset: auto;
    left: var(--_en-menu-x, 0px);
    top: var(--_en-menu-y, 0px);
    visibility: var(--_en-menu-visibility, hidden);
    display: flex;
    flex-direction: column;
    gap: ${Ei};
    box-sizing: border-box;
    margin: 0;
    inline-size: max-content;
    min-inline-size: min(${k("--en-layout-panel-preferred")}, ${A("--en-overlay-max-inline-size", k("--en-layout-form-max"))}, var(--_en-menu-viewport-width, calc(100dvw - ${k("--en-space-4")})));
    max-inline-size: min(${A("--en-overlay-max-inline-size", k("--en-layout-form-max"))}, var(--_en-menu-viewport-width, calc(100dvw - ${k("--en-space-4")})));
    max-block-size: min(var(--_en-menu-max-height, calc(100dvh - ${k("--en-space-8")})), ${A("--en-option-list-max-block-size", A("--en-overlay-max-block-size", k("--en-layout-panel-preferred")))});
    padding: ${Ci};
    border: ${k("--en-border-width")} solid ${A("--en-option-list-border-color", A("--en-overlay-border-color", k("--en-color-boundary")))};
    border-radius: ${Si};
    background: ${Ti};
    color: ${wi};
    box-shadow: ${A("--en-option-list-shadow", k("--en-shadow-overlay"))};
    font: inherit;
    text-align: start;
    overflow: auto;
    overscroll-behavior: contain;
    scroll-behavior: auto;
  }
  ${q(o`.en-menu[popover]`, o`.en-menu:popover-open`, o`.en-menu[popover]:not(:popover-open)`, "elevation")}
  .en-menu > slot { display: contents; }
  ::slotted(hr[role='separator']) { inline-size: 100%; box-sizing: border-box; border: 0; border-block-start: ${k("--en-border-width")} solid ${k("--en-color-line")}; margin-block: ${k("--en-space-1")}; margin-inline: 0; }
  .en-menu[data-replaced] { background: transparent; border-color: transparent; box-shadow: none; pointer-events: none; }
  .en-menu[data-replaced] > .en-menu-back,
  .en-menu[data-replaced] > slot::slotted(:not(en-menu)) { visibility: hidden; }
  .en-menu[data-replaced] > slot::slotted(en-menu) { pointer-events: auto; }
  .en-menu[data-replacement] { inline-size: var(--_en-menu-replacement-width); min-inline-size: 0; pointer-events: auto; }
  ${Oi(o`.en-menu-back`)}
  ${ki(o`.en-menu-back`, o`.en-menu-back:focus`)}
  .en-menu-back { appearance: none; text-align: start; }
  .en-menu-back-icon { inline-size: 1em; block-size: 1em; flex: 0 0 auto; transform: rotate(90deg); }
  :host(:dir(rtl)) .en-menu-back-icon { transform: rotate(-90deg); }
  ${Ai(o`.en-menu-back:focus`, o`.en-menu-back`)}
  .en-menu[popover]:not(:popover-open), .en-menu[hidden] { display: none; }
  ${P(o`.en-menu:focus`, {
	family: "overlay",
	inset: !0,
	restSelector: o`.en-menu`,
	baseShadow: A("--en-option-list-shadow", k("--en-shadow-overlay")),
	baseTransitions: Gt
})}
  @media (forced-colors: active) {
    .en-menu { color: CanvasText; background: Canvas; border-color: CanvasText; box-shadow: none; }
    .en-menu:focus { outline-color: Highlight; }
  }
`), F(o`
  :host(:focus-within) { position: relative; z-index: 1; }
  ${Oi(o`.en-menu-item`)}
  ${ki(o`.en-menu-item`, o`.en-menu-item:not([aria-disabled='true']):focus`)}
  .en-menu-item { appearance: none; }
  .en-menu-item-check, .en-menu-item-submenu { display: inline-flex; flex: 0 0 auto; inline-size: 1em; block-size: 1em; }
  .en-menu-item-check svg, .en-menu-item-submenu svg { inline-size: 100%; block-size: 100%; }
  .en-menu-item-submenu { transform: rotate(-90deg); }
  :host(:dir(rtl)) .en-menu-item-submenu { transform: rotate(90deg); }
  .en-menu-item-label { flex: 1 1 auto; min-inline-size: 0; }
  .en-menu-item-prefix, .en-menu-item-suffix, .en-menu-item-shortcut { display: contents; }
  .en-menu-item-shortcut { font-family: ${k("--en-font-code-family")}; }
  ::slotted([slot='shortcut']) { margin-inline-start: auto; }
  .en-menu-item[aria-disabled='true'] { cursor: default; }
  @media (forced-colors: active) {
    .en-menu-item { color: CanvasText; background: Canvas; }
    .en-menu-item[aria-disabled='true'] { color: GrayText; }
  }
  ${Ai(o`.en-menu-item:focus`, o`.en-menu-item`)}
  @media (forced-colors: active) {
    .en-menu-item[aria-disabled='true']:focus { color: GrayText; background: Canvas; outline-color: CanvasText; }
  }
`);
var ji = F(o`
  .en-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${k("--en-space-actions")};
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  .en-toolbar > slot { display: contents; }
  .en-toolbar[aria-orientation='vertical'], .en-toolbar[data-orientation='vertical'] {
    flex-direction: column;
    align-items: stretch;
  }
  .en-toolbar > :not(slot) { min-inline-size: 0; max-inline-size: 100%; }
  .en-toolbar > slot::slotted(*) { min-inline-size: 0; max-inline-size: 100%; }
`);
F(o`
  .en-command-palette {
    position: fixed;
    inset: auto;
    left: calc(var(--_en-command-viewport-left, 0px) + var(--_en-command-viewport-width, 100dvw) / 2);
    top: calc(var(--_en-command-viewport-top, 0px) + var(--_en-command-viewport-height, 100dvh) / 2);
    transform: translate(-50%, -50%);
    /* Individual scale composes outside the centering transform. The layout
       origin is already the viewport center; scaling around it avoids drift. */
    transform-origin: 0 0;
    margin: 0;
    inline-size: min(${A("--en-overlay-max-inline-size", k("--en-layout-form-max"))}, max(0px, calc(var(--_en-command-viewport-width, 100dvw) - ${k("--en-space-8")})));
    max-inline-size: max(0px, calc(var(--_en-command-viewport-width, 100dvw) - ${k("--en-space-8")}));
    max-block-size: min(${A("--en-overlay-max-block-size", o`100dvh`)}, max(0px, calc(var(--_en-command-viewport-height, 100dvh) - ${k("--en-space-8")})));
    /* At exceptionally short viewports, retain outer scroll reachability rather
       than clipping the query/close controls to preserve a fixed composition. */
    overflow: auto;
    scroll-behavior: auto;
  }
  .en-command-palette > .en-overlay-header, .en-command-palette > .en-overlay-footer { flex: none; }
  .en-command-palette > .en-overlay-body { display: flex; min-block-size: 0; overflow: visible; }
  .en-command-palette-content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-inline-size: 0;
    min-block-size: 0;
    gap: ${k("--en-space-label-control")};
  }
  .en-command-palette-content > slot { display: contents; }
  .en-command-palette-content > .en-label {
    flex: none;
    color: ${k("--en-color-text")};
    font-weight: ${k("--en-font-label-strong-weight")};
    overflow-wrap: anywhere;
  }
  .en-command-palette-content > .en-field-focus-frame { flex: none; }
  .en-command-palette-input { flex: none; inline-size: 100%; }
  .en-command-list {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: ${Ei};
    box-sizing: border-box;
    min-inline-size: 0;
    min-block-size: 0;
    max-block-size: ${A("--en-option-list-max-block-size", k("--en-layout-panel-preferred"))};
    margin: 0;
    padding: ${Ci};
    border: 0;
    border-radius: ${Si};
    background: ${Ti};
    color: ${wi};
    overflow: auto;
    overscroll-behavior: contain;
    scroll-behavior: auto;
  }
  .en-command-list:empty { display: none; }
  ${Oi(o`.en-command-option`, A("--en-option-radius", o`max(0px, ${Si} - ${Ci})`))}
  .en-command-option { flex: none; }
  ${ki(o`.en-command-option`, o`.en-command-option:not([aria-disabled='true'])[data-active]`)}
  .en-command-label { flex: 1 1 auto; min-inline-size: 0; }
  .en-command-shortcut { flex: 0 1 auto; min-inline-size: 0; margin-inline-start: auto; font-family: ${k("--en-font-code-family")}; }
  .en-command-shortcut:empty { display: none; }
  .en-command-option[aria-disabled='true'] { cursor: default; }
  .en-command-status { flex: none; margin: 0; color: ${k("--en-color-text-muted")}; line-height: ${k("--en-font-body-line-height")}; overflow-wrap: anywhere; }
  .en-command-status:empty { display: none; }
  @media (forced-colors: active) {
    .en-command-list, .en-command-option { color: CanvasText; background: Canvas; }
    .en-command-status { color: CanvasText; }
    .en-command-option[aria-disabled='true'] { color: GrayText; }
  }
  ${Ai(o`.en-command-option:not([aria-disabled='true'])[data-active]`, o`.en-command-option`)}
`);
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/roving-focus.js
var Mi = class {
	#e;
	#t;
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Map();
	#i = null;
	#a;
	#o = !1;
	#s = [];
	#c;
	constructor(e, t) {
		this.#e = e, this.#t = t, e.addController(this);
	}
	get current() {
		return this.#i;
	}
	hostConnected() {
		this.#o = !0, this.#a?.abort();
		let e = this.#e.ownerDocument.defaultView?.AbortController ?? globalThis.AbortController;
		this.#a = new e(), this.#e.addEventListener("keydown", this.#h, {
			signal: this.#a.signal,
			capture: this.#t.keydownCapture
		}), this.#e.addEventListener("focusin", this.#p, { signal: this.#a.signal }), this.#t.recoverFocus && this.#e.addEventListener("focusout", this.#m, { signal: this.#a.signal }), this.refresh();
	}
	hostUpdated() {
		this.#o && this.refresh();
	}
	hostDisconnected() {
		this.#o = !1, this.#c = void 0, this.#s = [], this.#a?.abort(), this.#a = void 0;
		for (let [e, t] of this.#n) this.#f(e, t);
		this.#n.clear();
		for (let e of this.#r.values()) e.release();
		this.#r.clear();
	}
	refresh() {
		let e = this.#t.items(), t = new Set(e);
		for (let [e, n] of this.#r) t.has(e) || (n.release(), this.#r.delete(e));
		for (let [e, n] of this.#n) t.has(e) || (this.#f(e, n), this.#n.delete(e));
		let n = this.#d(e);
		if (this.#t.recoverFocus) {
			let e = n.find((e) => e.matches(":focus-within"));
			e && (this.#i = e, this.#c = {
				item: e,
				root: this.#e.getRootNode()
			});
		}
		let r = this.#c, i = r && !n.includes(r.item), a = i && this.#u(r) ? this.#l(n, r.item) : null;
		a ? this.#i = a : (!this.#i || !n.includes(this.#i)) && (this.#i = this.#l(n, this.#i)), this.#s = [...e];
		for (let t of e) {
			let e = t === this.#i ? 0 : -1;
			if (this.#t.claimTabStop) {
				let n = this.#r.get(t);
				n || this.#r.set(t, n = this.#t.claimTabStop(t)), n.set(e);
			} else this.#n.has(t) || this.#n.set(t, t.getAttribute("tabindex")), t.tabIndex = e;
		}
		i && (this.#c = void 0), a && r && this.#u(r) ? a.focus() : i && !n.length && r && this.#u(r) && this.#t.focusEmpty?.();
	}
	#l(e, t) {
		if (this.#t.recoverFocus && t) {
			let n = this.#s.indexOf(t);
			if (n !== -1) {
				for (let t of this.#s.slice(n + 1)) if (e.includes(t)) return t;
				for (let t of this.#s.slice(0, n).reverse()) if (e.includes(t)) return t;
			}
		}
		return e[0] ?? null;
	}
	#u(e) {
		let t = this.#e.ownerDocument;
		if (!this.#t.recoverFocus || !this.#o || !this.#e.isConnected || this.#e.getRootNode() !== e.root || !t.hasFocus()) return !1;
		let n = e.root.activeElement;
		if (n === e.item) return !0;
		let r = (e, n) => n === null || e === t && (n === t.body || n === t.documentElement);
		if (!r(e.root, n)) return !1;
		let i = e.root;
		for (; i !== t;) {
			let e = i, t = e.host.getRootNode();
			if (t.activeElement !== e.host && !r(t, t.activeElement)) return !1;
			i = t;
		}
		return !0;
	}
	setCurrent(e, { focus: t = !1 } = {}) {
		return this.#d(this.#t.items()).includes(e) ? (this.#i = e, this.refresh(), t && e.focus(), !0) : !1;
	}
	#d(e) {
		return e.filter((e) => !(this.#t.isDisabled?.(e) ?? e.matches("[disabled], [aria-disabled=\"true\"], [hidden], [inert]")));
	}
	#f(e, t) {
		t === null ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", t);
	}
	#p = (e) => {
		let t = this.#d(this.#t.items()), n = e.composedPath().find((e) => t.includes(e));
		this.#t.recoverFocus && (this.#c = n ? {
			item: n,
			root: this.#e.getRootNode()
		} : void 0), n && (this.setCurrent(n), this.#t.onFocus?.(n));
	};
	#m = (e) => {
		let t = this.#c;
		if (t && e.composedPath().includes(t.item)) {
			if (e.relatedTarget) {
				this.#c = void 0;
				return;
			}
			queueMicrotask(() => {
				this.#c === t && this.#d(this.#t.items()).includes(t.item) && (this.#c = void 0);
			});
		}
	};
	#h = (e) => {
		if (e.defaultPrevented || e.isComposing || e.altKey || e.ctrlKey || e.metaKey) return;
		let t = e.composedPath();
		if (t[0]?.matches?.("input, textarea, select, [contenteditable]:not([contenteditable=\"false\"])")) return;
		let n = this.#d(this.#t.items()), r = t.find((e) => n.includes(e));
		if (!r || !n.length) return;
		let i = this.#t.orientation ?? "horizontal", a = this.#t.direction?.() ?? this.#e.ownerDocument.defaultView?.getComputedStyle(this.#e).direction ?? "ltr", o = 0, s = n.indexOf(r);
		if (e.key === "Home") s = 0;
		else if (e.key === "End") s = n.length - 1;
		else {
			if (i !== "vertical" && e.key === "ArrowRight" && (o = a === "rtl" ? -1 : 1), i !== "vertical" && e.key === "ArrowLeft" && (o = a === "rtl" ? 1 : -1), i !== "horizontal" && e.key === "ArrowDown" && (o = 1), i !== "horizontal" && e.key === "ArrowUp" && (o = -1), !o) return;
			s = this.#t.wrap === !1 ? Math.max(0, Math.min(n.length - 1, s + o)) : (s + o + n.length) % n.length;
		}
		e.preventDefault(), this.setCurrent(n[s], { focus: !0 });
	};
};
//#endregion
//#region ../design-system/packages/elements/dist/internal/element-registry.js
function Ni(e) {
	let t = e, n = e.getRootNode();
	return "customElementRegistry" in t ? t.customElementRegistry : "customElementRegistry" in n ? n.customElementRegistry : e.ownerDocument.defaultView?.customElements;
}
//#endregion
//#region ../design-system/packages/elements/dist/toolbar/template.js
var Pi = (e) => b`
  <div class="en-toolbar" part="base" role=${e.nativeNavigation ? "group" : "toolbar"} aria-label=${e.label}
    data-orientation=${e.orientation === "vertical" ? "vertical" : "horizontal"}
    aria-orientation=${e.nativeNavigation ? C : e.orientation === "vertical" ? "vertical" : "horizontal"}>
    <slot @slotchange=${e.onSlotChange}></slot>
  </div>
`;
//#endregion
//#region ../design-system/packages/elements/dist/define/toolbar.js
V(customElements, {
	tagName: "en-toolbar",
	elementClass: class extends O {
		static properties = {
			label: {},
			orientation: { reflect: !0 },
			keyboardNavigation: {
				attribute: "keyboard-navigation",
				reflect: !0
			}
		};
		static styles = [L, ji];
		nativeNavigation = !1;
		observer;
		roving;
		observedRegistries = /* @__PURE__ */ new WeakSet();
		initialized = !1;
		constructor() {
			super(), this.label = "Actions", this.orientation = "horizontal", this.keyboardNavigation = "auto";
			let e = this;
			this.roving = new Mi(this, {
				items: () => this.items(),
				get orientation() {
					return e.orientation === "vertical" ? "vertical" : "horizontal";
				},
				isDisabled: (e) => e.matches(":disabled, [disabled], [loading], [aria-disabled=\"true\"], [hidden], [inert]") || !e.getClientRects().length || e.ownerDocument.defaultView?.getComputedStyle(e).visibility === "hidden",
				claimTabStop: Et,
				keydownCapture: !0,
				recoverFocus: !0
			});
		}
		usesNativeNavigation() {
			return this.keyboardNavigation === "tab" ? !0 : this.children ? Array.from(this.children).some((e) => e.getAttribute("slot") || e.localName === "button" || e.localName === "en-button" ? !1 : [e, ...e.querySelectorAll("*")].some((e) => e.localName.includes("-") || e.matches("button, input:not([type=\"hidden\"]), select, textarea, a[href], area[href], summary, iframe, audio[controls], video[controls], [tabindex], [contenteditable]:not([contenteditable=\"false\"]), [role=\"button\"], [role=\"checkbox\"], [role=\"radio\"], [role=\"switch\"], [role=\"textbox\"], [role=\"combobox\"], [role=\"slider\"], [role=\"spinbutton\"], [role=\"tree\"], [role=\"grid\"], [role=\"listbox\"], [role=\"tablist\"]"))) : !1;
		}
		items() {
			let e = this.usesNativeNavigation();
			if (e !== this.nativeNavigation && (this.nativeNavigation = e, this.requestUpdate()), e || !this.initialized && Array.from(this.children).some((e) => !e.getAttribute("slot") && e.localName === "en-button" && !("updateComplete" in e))) return [];
			let t = Array.from(this.children).filter((e) => !e.getAttribute("slot") && (e.localName === "button" || e.localName === "en-button" && "updateComplete" in e));
			return t.length && (this.initialized = !0), t;
		}
		connectedCallback() {
			super.connectedCallback();
			let e = this.ownerDocument.defaultView?.MutationObserver;
			e && (this.observer = new e(() => this.refresh()), this.observer.observe(this, {
				childList: !0,
				subtree: !0,
				attributes: !0,
				attributeFilter: [
					"disabled",
					"loading",
					"aria-disabled",
					"hidden",
					"inert",
					"slot",
					"style",
					"class",
					"type",
					"href",
					"controls",
					"role",
					"contenteditable",
					"tabindex"
				]
			})), this.refresh();
		}
		observeButtonUpgrade() {
			for (let e of this.children) {
				if (e.localName !== "en-button" || "updateComplete" in e) continue;
				let t = Ni(e);
				t && !this.observedRegistries.has(t) && (this.observedRegistries.add(t), t.whenDefined("en-button").then(() => {
					this.isConnected && this.refresh();
				}));
			}
		}
		disconnectedCallback() {
			this.observer?.disconnect(), this.observer = void 0, super.disconnectedCallback();
		}
		refresh = () => {
			this.isConnected && (this.roving.refresh(), this.observeButtonUpgrade());
		};
		render() {
			return Pi({
				label: this.label,
				orientation: this.orientation,
				nativeNavigation: this.usesNativeNavigation(),
				onSlotChange: this.refresh
			});
		}
	}
});
//#endregion
//#region ../design-system/packages/elements/dist/text-field/element.js
var Fi = class extends Qr {
	static properties = {
		...Qr.properties,
		type: { type: String },
		minLength: {
			type: Number,
			attribute: "minlength"
		},
		maxLength: {
			type: Number,
			attribute: "maxlength"
		},
		pattern: { type: String }
	};
	constructor() {
		super(), this.type = "text", this.minLength = void 0, this.maxLength = void 0, this.pattern = "";
	}
	renderControl() {
		return b`<input id="control" class="en-input en-text-input" part="control"
      type=${[
			"text",
			"email",
			"password",
			"url",
			"tel"
		].includes(this.type) ? this.type : "text"} name=${this.name} value=${this.defaultControlValue}
      placeholder=${this.placeholder || C} autocomplete=${this.autocomplete || C}
      inputmode=${this.inputMode || C} minlength=${this.minLength ?? C}
      maxlength=${this.maxLength ?? C} pattern=${this.pattern || C}
      ?disabled=${this.isDisabled} ?readonly=${this.readOnly} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}>`;
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/text-field.js
V(customElements, {
	tagName: "en-text-field",
	elementClass: Fi
});
//#endregion
//#region ../design-system/packages/elements/dist/textarea/element.js
var Ii = class extends Qr {
	static properties = {
		...Qr.properties,
		rows: { type: Number },
		minLength: {
			type: Number,
			attribute: "minlength"
		},
		maxLength: {
			type: Number,
			attribute: "maxlength"
		}
	};
	constructor() {
		super(), this.rows = 3, this.minLength = void 0, this.maxLength = void 0;
	}
	renderControl() {
		return b`<textarea id="control" class="en-textarea" part="control" name=${this.name}
      rows=${this.rows} placeholder=${this.placeholder || C} autocomplete=${this.autocomplete || C}
      inputmode=${this.inputMode || C} minlength=${this.minLength ?? C} maxlength=${this.maxLength ?? C}
      ?disabled=${this.isDisabled} ?readonly=${this.readOnly} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}></textarea>`;
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/textarea.js
V(customElements, {
	tagName: "en-textarea",
	elementClass: Ii
});
//#endregion
//#region ../design-system/packages/styles/dist/file-upload.js
var Li = F(o`
  .en-file-drop {
    position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: center;
    gap: ${k("--en-space-icon-label")}; min-inline-size: 0; box-sizing: border-box;
    min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-min")});
    padding: ${k("--en-space-control-block")} ${A("--en-control-inline-padding", k("--en-space-control-inline"))};
    border: ${k("--en-border-width")} dashed ${A("--en-control-border-color", k("--en-color-boundary"))};
    border-radius: ${A("--en-control-radius", k("--en-radius-control"))};
    background: ${A("--en-control-background", A("--en-input-background", k("--en-color-surface")))};
    color: ${A("--en-control-color", A("--en-input-color", k("--en-color-text")))};
    font: ${k("--en-font-input-weight")} ${k("--en-font-input-size")} / ${k("--en-font-input-line-height")} ${k("--en-font-input-family")};
    overflow-wrap: anywhere;
  }
  .en-file-input { position: absolute; inset: 0; inline-size: 100%; block-size: 100%; opacity: 0; cursor: pointer; }
  .en-file-drop[data-dragging] { border-style: solid; border-color: ${k("--en-color-action")}; background: ${k("--en-color-selected")}; }
  .en-file-drop[data-disabled] { color: ${k("--en-color-text-muted")}; background: ${k("--en-color-surface-subtle")}; }
  .en-file-drop[data-disabled] .en-file-input { cursor: default; }
  .en-file-drop[data-invalid] { border-color: ${k("--en-color-danger-text")}; }
  .en-file-hint { color: ${k("--en-color-text-muted")}; }
  .en-file-list { display: grid; gap: ${k("--en-space-1")}; margin: 0; padding: 0; list-style: none; }
  .en-file-list[hidden], .en-file-list:empty, .en-file-error:empty { display: none; }
  .en-file-item { display: flex; align-items: center; gap: ${k("--en-space-icon-label")}; min-inline-size: 0; }
  .en-file-name { flex: 1; min-inline-size: 0; overflow-wrap: anywhere; }
  .en-file-remove { flex: none; }
  ${P(o`.en-file-drop:has(> .en-file-input:focus-visible)`, {
	family: "input",
	restSelector: o`.en-file-drop`
})}
  ${M(o`.en-file-input`)}
  @media (any-pointer: coarse) { .en-file-drop { min-block-size: max(${k("--en-size-control-min")}, ${k("--en-size-target-touch")}); } }
  @media (forced-colors: active) {
    .en-file-drop { border-color: ButtonText; background: Canvas; color: CanvasText; }
    .en-file-drop[data-dragging] { border-color: Highlight; }
    .en-file-drop[data-disabled] { opacity: 1; border-color: GrayText; color: GrayText; }
  }
`);
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/file-selection.js
function Ri(e, t) {
	let n = t.toLowerCase().split(",").map((e) => e.trim()).filter((e) => /^\.[^\s,/]+$/.test(e) || /^[\w!#$&^.+-]+\/(?:[\w!#$&^.+-]+|\*)$/.test(e));
	if (!n.length) return !0;
	let r = e.name.toLowerCase(), i = e.type.toLowerCase();
	return n.some((e) => e.startsWith(".") ? r.endsWith(e) : e.endsWith("/*") ? i.startsWith(e.slice(0, -1)) : i === e);
}
function zi(e, t) {
	let n = [];
	for (let r of e) !t.multiple && e.length > 1 && n.push(Object.freeze({
		file: r,
		reason: "multiple"
	})), Ri(r, t.accept) || n.push(Object.freeze({
		file: r,
		reason: "accept"
	})), Number.isFinite(t.maxFileSize) && t.maxFileSize >= 0 && r.size > t.maxFileSize && n.push(Object.freeze({
		file: r,
		reason: "max-file-size"
	}));
	return Object.freeze(n);
}
//#endregion
//#region ../design-system/packages/elements/dist/file-upload/template.js
function Bi(e) {
	return b`
    <div class="en-field" part="field">
      <label id="label" class="en-label" part="label" for="control"><slot name="label">${e.label}</slot></label>
      <div class="en-file-drop" part="dropzone" ?data-dragging=${e.dragging} ?data-disabled=${e.disabled} ?data-invalid=${e.invalid}>
        <span part="choose-label" aria-hidden="true">${e.chooseLabel}</span>
        <span class="en-file-hint" part="drop-label" aria-hidden="true">${e.dropLabel}</span>
        <input id="control" class="en-file-input" part="control" type="file" accept=${e.accept || C}
          ?multiple=${e.multiple} ?disabled=${e.disabled} ?required=${e.required}
          aria-labelledby="label" aria-describedby="description error" aria-invalid=${e.invalid ? "true" : C}
          @click=${e.preparePicker} @cancel=${e.cancelPicker} @change=${e.select}>
      </div>
      <div id="description" class="en-description" part="description"><slot name="description"><span class="en-description-fallback">${e.description}</span></slot></div>
      <ul class="en-file-list" part="list" role="list" ?hidden=${!e.files.length}>
        ${Ur(e.files, (e) => e, (t) => b`
          <li class="en-file-item" part="file">
            <span class="en-file-name" part="file-name">${t.name}</span>
            <en-button class="en-file-remove" part="remove-button" exportparts="control:remove" size="inherit" variant="ghost" icon-only
              ?disabled=${e.disabled} @click=${() => e.remove(t)}>
              <en-icon slot="prefix" name="close" size="inherit"></en-icon>
              <span slot="label">${e.removeLabel(t)}</span>
            </en-button>
          </li>
        `)}
      </ul>
      <div id="error" class="en-error en-file-error" part="error" role="status">${e.error}</div>
    </div>
  `;
}
//#endregion
//#region ../design-system/packages/elements/dist/file-upload/element.js
var Vi = Object.freeze([]), Hi = (e) => {
	let t = e[0];
	return t ? t.reason === "multiple" ? "Choose one file at a time. Your previous selection is unchanged." : t.reason === "max-file-size" ? `${t.file.name} exceeds the maximum file size. Your previous selection is unchanged.` : `${t.file.name} is not an accepted file type. Your previous selection is unchanged.` : "";
};
//#endregion
//#region ../design-system/packages/elements/dist/define/file-upload.js
V(customElements, {
	tagName: "en-file-upload",
	elementClass: class extends O {
		static properties = {
			files: {
				attribute: !1,
				noAccessor: !0
			},
			name: {},
			accept: {},
			multiple: { type: Boolean },
			disabled: {
				type: Boolean,
				reflect: !0
			},
			required: { type: Boolean },
			maxFileSize: {
				type: Number,
				attribute: "max-file-size"
			},
			label: {},
			description: {},
			chooseLabel: { attribute: "choose-label" },
			dropLabel: { attribute: "drop-label" },
			validationText: { attribute: "validation-text" },
			constraintsText: { attribute: "constraints-text" },
			removeLabel: { attribute: !1 },
			rejectionText: { attribute: !1 }
		};
		static styles = [
			L,
			I,
			fn,
			Li
		];
		static formAssociated = !0;
		#e = Vi;
		#t = 0;
		#n = !1;
		#r = 0;
		#i = "";
		#a = !1;
		#o = typeof this.attachInternals == "function" ? this.attachInternals() : void 0;
		#s = this.#o ? new Dr(this, {
			internals: this.#o,
			control: () => this.control,
			value: () => this.formValue(),
			disabled: () => this.effectiveDisabled,
			onReset: () => {
				this.files = [], this.#a = !1;
			},
			onRestore: (e) => this.restoreFiles(e),
			validate: () => {
				let e = this.currentValidationMessage;
				return {
					flags: e ? this.required && !this.files.length ? { valueMissing: !0 } : { customError: !0 } : {},
					message: e,
					anchor: this.control ?? void 0
				};
			}
		}) : void 0;
		constructor() {
			super(), this.name = "", this.accept = "", this.multiple = !1, this.disabled = !1, this.required = !1, this.maxFileSize = void 0, this.label = "", this.description = "", this.chooseLabel = "Choose files", this.dropLabel = "or drop files here", this.validationText = "Please choose a file.", this.constraintsText = "The selected files do not meet the file constraints.", this.removeLabel = (e) => `Remove ${e.name}`, this.rejectionText = Hi, this.addEventListener("invalid", () => {
				this.#a = !0, this.requestUpdate();
			});
		}
		get files() {
			return this.#e;
		}
		set files(e) {
			let t = Object.freeze([...new Set(e)]);
			++this.#t, this.#i = "", this.setFiles(t);
		}
		setFiles(e) {
			let t = this.#e;
			this.#e = e, this.requestUpdate("files", t), this.syncNative(), this.#s?.sync();
		}
		get control() {
			return this.renderRoot?.querySelector("input[type=file]") ?? null;
		}
		get effectiveDisabled() {
			return this.disabled || this.#n;
		}
		get currentValidationMessage() {
			return this.effectiveDisabled ? "" : this.required && !this.files.length ? this.validationText || "Please choose a file." : zi(this.files, this).length ? this.constraintsText || "The selected files do not meet the file constraints." : "";
		}
		formValue() {
			if (!this.name || !this.files.length) return null;
			let e = this.ownerDocument?.defaultView?.FormData ?? globalThis.FormData;
			if (!e) return null;
			let t = new e();
			for (let e of this.files) t.append(this.name, e, e.name);
			return t;
		}
		restoreFiles(e) {
			this.files = e && typeof e == "object" && "getAll" in e ? e.getAll(this.name).filter((e) => typeof e != "string") : e && typeof e == "object" && "name" in e ? [e] : [];
		}
		focus(e) {
			this.control?.focus(e);
		}
		blur() {
			this.control?.blur();
		}
		get labels() {
			return this.#o?.labels;
		}
		get willValidate() {
			return this.#o?.willValidate ?? !1;
		}
		get form() {
			return this.#o?.form ?? null;
		}
		get validity() {
			return this.#o?.validity;
		}
		get validationMessage() {
			return this.#o?.validationMessage ?? "";
		}
		checkValidity() {
			return this.#s?.sync(), this.#o?.checkValidity?.() ?? !0;
		}
		reportValidity() {
			return this.#a = !0, this.#s?.sync(), this.requestUpdate(), this.#o?.reportValidity?.() ?? !0;
		}
		formDisabledCallback(e) {
			this.#n = e, e && (this.#r = 0), this.#s?.formDisabled(e), this.requestUpdate();
		}
		formResetCallback() {
			this.#s?.formReset();
		}
		formStateRestoreCallback(e, t = "restore") {
			this.#s?.formStateRestore(e, t);
		}
		connectedCallback() {
			super.connectedCallback(), this.addEventListener("dragenter", this.onDragEnter), this.addEventListener("dragover", this.onDragOver), this.addEventListener("dragleave", this.onDragLeave), this.addEventListener("drop", this.onDrop);
		}
		disconnectedCallback() {
			super.disconnectedCallback(), this.removeEventListener("dragenter", this.onDragEnter), this.removeEventListener("dragover", this.onDragOver), this.removeEventListener("dragleave", this.onDragLeave), this.removeEventListener("drop", this.onDrop), this.#r = 0;
		}
		hasFiles(e) {
			return Array.from(e.dataTransfer?.types ?? []).includes("Files");
		}
		onDragEnter = (e) => {
			this.hasFiles(e) && (e.preventDefault(), this.effectiveDisabled || (++this.#r, this.requestUpdate()));
		};
		onDragOver = (e) => {
			this.hasFiles(e) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = this.effectiveDisabled ? "none" : "copy"));
		};
		onDragLeave = () => {
			this.#r = Math.max(0, this.#r - 1), this.requestUpdate();
		};
		onDrop = (e) => {
			if (!this.hasFiles(e)) return;
			e.preventDefault(), this.#r = 0, this.requestUpdate();
			let t = Array.from(e.dataTransfer?.files ?? []), n = Array.from(e.dataTransfer?.items ?? []).some((e) => e.webkitGetAsEntry?.()?.isDirectory);
			!this.effectiveDisabled && t.length && !n && this.propose(t, "drop");
		};
		propose(e, t) {
			if (this.effectiveDisabled) {
				this.syncNative();
				return;
			}
			let n = Object.freeze([...new Set(e)]), r = zi(n, this);
			if (r.length) {
				this.#i = this.rejectionText(r) || Hi(r), this.requestUpdate(), this.syncNative();
				let e = this.ownerDocument.defaultView?.CustomEvent ?? CustomEvent;
				this.dispatchEvent(new e("en-reject", {
					bubbles: !0,
					composed: !0,
					detail: Object.freeze({
						files: n,
						rejections: r
					})
				}));
				return;
			}
			let i = this.#i;
			U(this, {
				previous: this.files,
				proposed: n,
				reason: t,
				getRevision: () => this.#t,
				stage: (e) => {
					this.#i = "", this.setFiles(e);
				},
				rollback: (e) => {
					this.#i = i, this.setFiles(e);
				},
				canCommit: (e) => !this.effectiveDisabled && !zi(e, this).length
			});
		}
		select = (e) => {
			e.stopPropagation(), this.propose(Array.from(this.control?.files ?? []), "select");
		};
		removeFile = (e) => {
			let t = this.files.indexOf(e);
			if (t < 0 || this.effectiveDisabled) return;
			let n = this.renderRoot.querySelectorAll(".en-file-remove")[t], r = this.shadowRoot?.activeElement === n;
			this.propose(this.files.filter((t) => t !== e), "remove"), r && this.shadowRoot?.activeElement === n && !this.files.includes(e) && this.updateComplete.then(() => {
				let e = this.ownerDocument.activeElement;
				if (e !== this && e !== this.ownerDocument.body || this.shadowRoot?.activeElement && this.shadowRoot.activeElement !== n) return;
				let r = this.renderRoot.querySelectorAll(".en-file-remove");
				(r[Math.min(t, r.length - 1)] ?? this.control)?.focus({ preventScroll: !0 });
			});
		};
		syncNative() {
			let e = this.control;
			if (!e) return;
			let t = this.ownerDocument.defaultView?.DataTransfer;
			if (t) try {
				let n = new t();
				for (let e of this.files) n.items.add(e);
				e.files = n.files;
				return;
			} catch {}
			e.value = "";
		}
		firstUpdated() {
			let e = Array.from(this.control?.files ?? []);
			if (!this.#t && e.length) {
				let t = zi(e, this);
				t.length ? (this.#i = this.rejectionText(t) || Hi(t), this.requestUpdate()) : this.setFiles(Object.freeze(e));
			}
		}
		updated(e) {
			this.syncNative(), this.#s?.sync();
		}
		render() {
			return Bi({
				files: this.files,
				label: this.label,
				description: this.description,
				accept: this.accept,
				multiple: this.multiple,
				disabled: this.effectiveDisabled,
				required: this.required,
				dragging: this.#r > 0,
				error: this.#i || (this.#a ? this.currentValidationMessage : ""),
				invalid: !!(this.#i || this.currentValidationMessage && this.#a),
				chooseLabel: this.chooseLabel,
				dropLabel: this.dropLabel,
				removeLabel: this.removeLabel,
				select: this.select,
				preparePicker: () => {
					this.control && !this.effectiveDisabled && (this.control.value = "");
				},
				cancelPicker: () => this.syncNative(),
				remove: this.removeFile
			});
		}
	},
	dependencies: [{
		tagName: "en-button",
		elementClass: Dt
	}, {
		tagName: "en-icon",
		elementClass: Lt
	}]
});
//#endregion

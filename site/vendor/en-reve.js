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
var se = globalThis, ce = (e) => e, le = se.trustedTypes, ue = le ? le.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, de = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, fe = "?" + _, pe = `<${fe}>`, v = document, me = () => v.createComment(""), y = (e) => e === null || typeof e != "object" && typeof e != "function", he = Array.isArray, ge = (e) => he(e) || typeof e?.[Symbol.iterator] == "function", _e = "[ 	\n\f\r]", b = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ve = /-->/g, ye = />/g, x = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), be = /'/g, xe = /"/g, Se = /^(?:script|style|textarea|title)$/i, Ce = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), S = Ce(1), C = Ce(2), w = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), we = /* @__PURE__ */ new WeakMap(), E = v.createTreeWalker(v, 129);
function Te(e, t) {
	if (!he(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return ue === void 0 ? t : ue.createHTML(t);
}
var Ee = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = b;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === b ? c[1] === "!--" ? o = ve : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = x) : (Se.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = x) : o = ye : o === x ? c[0] === ">" ? (o = i ?? b, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? x : c[3] === "\"" ? xe : be) : o === xe || o === be ? o = x : o === ve || o === ye ? o = b : (o = x, i = void 0);
		let d = o === x && e[t + 1].startsWith("/>") ? " " : "";
		a += o === b ? n + pe : l >= 0 ? (r.push(s), n.slice(0, l) + de + n.slice(l) + _ + d) : n + _ + (l === -2 ? t : d);
	}
	return [Te(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, De = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Ee(t, n);
		if (this.el = e.createElement(l, r), E.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = E.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(de)) {
					let t = u[o++], n = i.getAttribute(e).split(_), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Ae : r[1] === "?" ? je : r[1] === "@" ? Me : O
					}), i.removeAttribute(e);
				} else e.startsWith(_) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Se.test(i.tagName)) {
					let e = i.textContent.split(_), t = e.length - 1;
					if (t > 0) {
						i.textContent = le ? le.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], me()), E.nextNode(), c.push({
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
function D(e, t, n = e, r) {
	if (t === w) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = y(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = D(e, i._$AS(e, t.values), i, r)), t;
}
var Oe = class {
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
		E.currentNode = r;
		let i = E.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new ke(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Ne(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = E.nextNode(), a++);
		}
		return E.currentNode = v, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, ke = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = D(this, e, t), y(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== w && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ge(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== T && y(this._$AH) ? this._$AA.nextSibling.data = e : this.T(v.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = De.createElement(Te(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Oe(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = we.get(e.strings);
		return t === void 0 && we.set(e.strings, t = new De(e)), t;
	}
	k(t) {
		he(this._$AH) || (this._$AH = [], this._$AR());
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
}, O = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = T;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = D(this, e, t, 0), a = !y(e) || e !== this._$AH && e !== w, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = D(this, r[n + o], t, o), s === w && (s = this._$AH[o]), a ||= !y(s) || s !== this._$AH[o], s === T ? e = T : e !== T && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Ae = class extends O {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === T ? void 0 : e;
	}
}, je = class extends O {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== T);
	}
}, Me = class extends O {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = D(this, e, t, 0) ?? T) === w) return;
		let n = this._$AH, r = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== T && (n === T || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Ne = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		D(this, e);
	}
}, Pe = {
	M: de,
	P: _,
	A: fe,
	C: 1,
	L: Ee,
	R: Oe,
	D: ge,
	V: D,
	I: ke,
	H: O,
	N: je,
	U: Me,
	B: Ae,
	F: Ne
}, Fe = se.litHtmlPolyfillSupport;
Fe?.(De, ke), (se.litHtmlVersions ??= []).push("3.3.3");
var Ie = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new ke(t.insertBefore(me(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Le = globalThis, k = class extends g {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ie(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return w;
	}
};
k._$litElement$ = !0, k.finalized = !0, Le.litElementHydrateSupport?.({ LitElement: k });
var Re = Le.litElementPolyfillSupport;
Re?.({ LitElement: k }), (Le.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/static-styles.js
var ze = "data-en-static-styles", Be = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap();
function He(e) {
	let t = e.constructor;
	if (Be.has(t)) return Be.get(t);
	let n = t.elementStyles, r = n.length > 0 && n.every((e) => "cssText" in e && typeof e.cssText == "string" && !/@(?:import|namespace)\b/i.test(e.cssText)) ? n : null;
	return Be.set(t, r), r;
}
var Ue = class {
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
		let r = He(this.#e);
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
		let n = Ve.get(t);
		n === void 0 && (n = t.map((e) => e.cssText).join(""), Ve.set(t, n));
		let r = this.#e.ownerDocument.createElement("style");
		r.setAttribute(ze, "v1"), this.#s && (r.nonce = this.#s), r.textContent = n, e.insertBefore(r, e.firstChild);
		try {
			e.adoptedStyleSheets = e.adoptedStyleSheets.filter((e) => !this.#o.includes(e));
		} catch {}
		this.#i = void 0, this.#a = void 0, this.#o = [];
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/internal/en-element.js
function We(e) {
	return e === "inherit" || e === "small" || e === "large" ? e : "medium";
}
var A = class extends k {
	staticStyles = new Ue(this);
	static properties = { size: {
		reflect: !0,
		useDefault: !0,
		noAccessor: !0,
		converter: {
			fromAttribute: We,
			toAttribute: We
		}
	} };
	#e = "medium";
	get size() {
		return this.#e;
	}
	set size(e) {
		let t = this.#e, n = We(e);
		this.#e = n;
		let r = this.getAttribute("size") === n ? void 0 : Object.assign(Object.create(this.constructor.getPropertyOptions("size")), { hasChanged: () => !0 });
		this.requestUpdate("size", t, r);
	}
}, Ge = Object.freeze({
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
function Ke(e) {
	if (!Object.hasOwn(Ge, e)) throw RangeError("Unknown token " + e);
	return Ge[e];
}
//#endregion
//#region ../design-system/packages/tokens/dist/sizing.js
var qe = Object.freeze([
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
var Je = Object.freeze({
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
}), Ye = Object.freeze(Object.entries(Je).map(([e, t]) => Object.freeze({
	role: `--en-${e.replaceAll(".", "-")}`,
	base: `--en-${t.replaceAll(".", "-")}`,
	variants: Object.freeze(Object.fromEntries(qe.map((t) => [t, `--en-${e.replaceAll(".", "-")}-${t}`])))
})));
//#endregion
//#region ../design-system/packages/styles/dist/internal/values.js
function Xe(e) {
	let t = Ke(e);
	if (!t) throw Error(`Missing stylesheet token default: ${e}`);
	return o`var(${a(e)}, ${a(t)})`;
}
var Ze = new Map(Ye.map(({ base: e, role: t }) => [e, `--_en-sized-${t.slice(5)}`]));
function j(e) {
	let t = Xe(e), n = Ze.get(e);
	return n ? o`var(${a(n)}, ${t})` : t;
}
function M(e, t) {
	return o`var(${a(e)}, ${t})`;
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/focus-core.js
function N(e, t, n) {
	return e ? M(`--en-${e}-focus-${t}`, n) : n;
}
function Qe(e) {
	let t = N(e.family, "width", j("--en-focus-width"));
	return {
		width: t,
		offset: N(e.family, "offset", e.inset ? o`calc(0px - ${t})` : j("--en-focus-offset")),
		color: N(e.family, "color", j("--en-color-focus")),
		haloWidth: e.halo === !1 ? o`0px` : N(e.family, "halo-width", j("--en-focus-halo-width")),
		haloColor: N(e.family, "halo-color", j("--en-color-focus-halo"))
	};
}
function P(e = {}) {
	let t = Qe(e);
	return o`max(0px, calc(${t.width} + ${t.offset}), ${t.haloWidth})`;
}
var $e = o`max(${P()}, ${P({ family: "button" })}, ${P({ family: "input" })}, ${P({
	family: "option",
	inset: !0
})}, ${P({ family: "overlay" })})`;
function et(e, t = {}) {
	return o`${e} {
    scroll-margin-block: max(${j("--en-focus-scroll-margin-block")}, ${P(t)});
    scroll-margin-inline: max(${j("--en-focus-scroll-margin-inline")}, ${P(t)});
  }`;
}
function F(e, t = {}) {
	return I(o`${e}:focus-visible`, {
		...t,
		restSelector: t.restSelector ?? e
	});
}
function I(e, t = {}) {
	let n = Qe(t), r = t.restSelector, i = r && t.halo !== !1, a = t.baseShadow ?? o`0 0 0 0 transparent`, s = t.baseTransitions ? o`${t.baseTransitions},` : o``;
	return o`
    ${r ? et(r, t) : o``}
    ${i ? o`${r} {
      box-shadow: 0 0 0 0 ${n.haloColor}, ${a};
      transition: ${s} box-shadow ${j("--en-duration-focus-exit")} ${j("--en-ease-focus-exit")};
    }` : o``}
    ${e} {
      outline: ${n.width} solid ${n.color};
      outline-offset: ${n.offset};
      box-shadow: 0 0 0 ${n.haloWidth} ${n.haloColor}, ${a};
      ${i ? o`transition: ${s} box-shadow ${j("--en-duration-focus-enter")} ${j("--en-ease-focus-enter")};` : o``}
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
	let t = Ye.filter(({ role: t }) => e.cssText.includes(`var(--_en-sized-${t.slice(5)},`)).map(({ role: e, variants: t }) => `--_en-sized-${e.slice(5)}: calc(${Xe(t.small).cssText} * var(--_en-size-small, 0) + ${Xe(t.medium).cssText} * var(--_en-size-medium, 1) + ${Xe(t.large).cssText} * var(--_en-size-large, 0));`).join("\n");
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
    color: ${j("--en-color-text")};
    font: ${j("--en-font-body-weight")} ${j("--en-font-body-size")} / ${j("--en-font-body-line-height")} ${j("--en-font-body-family")};
  }
  .en-prose {
    max-inline-size: ${M("--en-prose-max-inline-size", j("--en-layout-prose-max"))};
  }
  .en-prose :where(p, ul, ol, dl, blockquote) { margin-block: 0 ${j("--en-space-4")}; }
  .en-prose :where(ul, ol) { padding-inline-start: ${j("--en-space-6")}; }
  .en-heading-small {
    font: ${j("--en-font-heading-small-weight")} ${j("--en-font-heading-small-size")} / ${j("--en-font-heading-small-line-height")} ${j("--en-font-heading-small-family")};
  }
  .en-heading-medium {
    font: ${j("--en-font-heading-medium-weight")} ${j("--en-font-heading-medium-size")} / ${j("--en-font-heading-medium-line-height")} ${j("--en-font-heading-medium-family")};
  }
  .en-heading-large {
    font: ${j("--en-font-heading-large-weight")} ${j("--en-font-heading-large-size")} / ${j("--en-font-heading-large-line-height")} ${j("--en-font-heading-large-family")};
  }
  .en-metadata {
    color: ${j("--en-color-text-muted")};
    font: ${j("--en-font-metadata-weight")} ${j("--en-font-metadata-size")} / ${j("--en-font-metadata-line-height")} ${j("--en-font-metadata-family")};
  }
  .en-data {
    font: ${j("--en-font-data-weight")} ${j("--en-font-data-size")} / ${j("--en-font-data-line-height")} ${j("--en-font-data-family")};
    font-variant-numeric: tabular-nums;
  }
`), R = o`:host { display: block; min-inline-size: 0; }`, nt = o`:host { display: inline-block; vertical-align: middle; max-inline-size: 100%; }`, rt = o`:host { display: inline-flex; align-items: center; justify-content: center; color: inherit; line-height: 0; vertical-align: middle; }`, z = L(o`
  ${o`
  :host, .en-foundation { --_en-size-small: 0; --_en-size-medium: 1; --_en-size-large: 0; }
  :host([size='inherit']), .en-foundation[data-size='inherit'] { --_en-size-small: inherit; --_en-size-medium: inherit; --_en-size-large: inherit; }
  :host([size='small']), .en-foundation[data-size='small'] { --_en-size-small: 1; --_en-size-medium: 0; --_en-size-large: 0; }
  :host([size='medium']), .en-foundation[data-size='medium'] { --_en-size-small: 0; --_en-size-medium: 1; --_en-size-large: 0; }
  :host([size='large']), .en-foundation[data-size='large'] { --_en-size-small: 0; --_en-size-medium: 0; --_en-size-large: 1; }
`}
  :host, .en-foundation {
    box-sizing: border-box;
    color: ${j("--en-color-text")};
    font-family: ${j("--en-font-ui-family")};
    font-size: ${j("--en-font-ui-size")};
    font-weight: ${j("--en-font-ui-weight")};
    line-height: ${j("--en-font-ui-line-height")};
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
  ${et(o`:where(:host([tabindex]), .en-foundation[tabindex]),
    :where(:host, .en-foundation) :where(button, input, textarea, select, a[href], [tabindex])`)}
  :host(:focus-visible), .en-foundation:focus-visible {
    outline: ${j("--en-focus-width")} solid ${j("--en-color-focus")};
    outline-offset: ${j("--en-focus-offset")};
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
`), it = o`
  .en-button {
    padding-inline: ${M("--en-control-inline-padding", M("--en-button-inline-padding", j("--en-space-control-inline")))};
    display: inline-flex;
    min-inline-size: ${j("--en-size-target-min")};
    align-items: center;
    justify-content: center;
    gap: ${j("--en-space-icon-label")};
    border-color: ${M("--en-button-border-color", j("--en-color-action"))};
    border-radius: ${M("--en-button-radius", j("--en-radius-control"))};
    background: ${M("--en-button-background", j("--en-color-action"))};
    color: ${M("--en-button-color", j("--en-color-on-action"))};
    font-weight: ${j("--en-font-label-strong-weight")};
    text-align: center;
    text-decoration: none;
    white-space: normal;
    overflow-wrap: break-word;
    cursor: pointer;
    transition: background-color ${j("--en-duration-fast")} ${j("--en-ease-standard")},
      border-color ${j("--en-duration-fast")} ${j("--en-ease-standard")};
  }
  @media (hover: hover) { .en-button:where(:not(:disabled):not([aria-disabled='true']):hover) { background: ${M("--en-button-background", j("--en-color-action-hover"))}; } }
  .en-button:where(:not(:disabled):not([aria-disabled='true']):active) { background: ${M("--en-button-background", j("--en-color-action-pressed"))}; }
  .en-button--secondary, .en-button[data-variant='secondary'] {
    background: ${M("--en-button-background", j("--en-color-surface-subtle"))};
    color: ${M("--en-button-color", j("--en-color-text"))};
    border-color: ${M("--en-button-border-color", j("--en-color-boundary"))};
  }
  .en-button--quiet, .en-button[data-variant='ghost'] {
    background: none;
    color: ${M("--en-button-color", j("--en-color-action-text"))};
    border-color: ${M("--en-button-border-color", j("--en-color-line"))};
  }
  @media (hover: hover) { :is(.en-button--secondary, .en-button--quiet, .en-button[data-variant='secondary'], .en-button[data-variant='ghost']):not(:disabled):not([aria-disabled='true']):hover {
    background: ${M("--en-button-background", j("--en-color-selected"))};
  } }
  .en-button--danger, .en-button[data-variant='danger'] {
    background: ${M("--en-button-background", j("--en-color-surface"))};
    color: ${M("--en-button-color", j("--en-color-danger-text"))};
    border-color: ${M("--en-button-border-color", j("--en-color-danger-text"))};
  }
  @media (hover: hover) { :is(.en-button--danger, .en-button[data-variant='danger']):not(:disabled):not([aria-disabled='true']):hover {
    background: ${M("--en-button-background", j("--en-color-surface-subtle"))};
  } }
  .en-button__prefix, .en-button__suffix { display: contents; }
  .en-button__label { min-inline-size: 0; }
  .en-icon-button { padding-inline: ${j("--en-space-2")}; min-inline-size: max(${M("--en-control-min-size", j("--en-size-control-min"))}, ${j("--en-size-target-min")}); }
  /* Explicit button mode; existing stepper/overlay icon recipes retain their layout. */
  .en-button[data-icon-only] {
    --_en-icon-button-side: max(var(--_en-text-control-block-size), calc(max(${M("--en-icon-size", j("--en-size-icon"))}, ${j("--en-size-spinner")}) + 2 * ${j("--en-space-control-block")} + 2 * ${j("--en-border-width")}));
    min-inline-size: var(--_en-icon-button-side);
    min-block-size: var(--_en-icon-button-side);
    inline-size: max-content;
    aspect-ratio: 1;
    padding: ${j("--en-space-control-block")};
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

`, at = o`background-color ${j("--en-duration-fast")} ${j("--en-ease-standard")}, border-color ${j("--en-duration-fast")} ${j("--en-ease-standard")}`, ot = F(o`.en-button`, {
	family: "button",
	baseTransitions: at
}), st = o`@media (hover: hover) { .en-button:not(:disabled):not([aria-disabled='true']):hover { background: Highlight !important; color: HighlightText !important; } }`, ct = o`max(0px, ${M("--en-segmented-control-frame-inset", j("--en-space-1"))})`, B = o`calc(${ct} + ${j("--en-border-width")})`;
function lt(e = !1) {
	let t = j(e ? "--en-size-target-touch" : "--en-size-target-min"), n = j("--en-space-control-block"), r = j("--en-border-width"), i = o`max(calc(${j("--en-space-1")} + ${r}), ${B})`;
	return o`max(
    ${M("--en-control-min-size", j("--en-size-control-min"))},
    calc(${t} + 2 * ${i}),
    calc(${j("--en-font-input-size")} * ${j("--en-font-input-line-height")} + 2 * ${n} + 2 * ${r}),
    calc(${j("--en-font-ui-size")} * ${j("--en-font-ui-line-height")} + 2 * max(${n}, ${i}) + 2 * ${r})
  )`;
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/control-shared.js
function ut(e, t = !1) {
	return o`${e} { --_en-text-control-block-size: ${lt(t)}; }`;
}
function dt(e) {
	return o`${e} {
    box-sizing: border-box;
    min-inline-size: 0;
    min-block-size: max(${M("--en-control-min-size", j("--en-size-control-min"))}, ${j("--en-size-target-min")});
    max-inline-size: 100%;
    padding-block: ${j("--en-space-control-block")};
    padding-inline: ${M("--en-control-inline-padding", j("--en-space-control-inline"))};
    border: ${j("--en-border-width")} solid ${M("--en-control-border-color", j("--en-color-boundary"))};
    border-radius: ${M("--en-control-radius", j("--en-radius-control"))};
    background: ${M("--en-control-background", j("--en-color-surface"))};
    color: ${M("--en-control-color", j("--en-color-text"))};
    font: inherit;
    text-align: start;
  }`;
}
function ft(e) {
	return o`${e} { min-block-size: var(--_en-text-control-block-size); }`;
}
function pt(e) {
	return o`${e} {
    color: ${j("--en-color-text-muted")};
    background: ${j("--en-color-surface-subtle")};
    border-color: ${j("--en-color-boundary")};
    cursor: default;
  }`;
}
function mt(e) {
	return o`${e} { min-block-size: max(${M("--en-control-min-size", j("--en-size-control-min"))}, ${j("--en-size-target-touch")}); }`;
}
function ht(e) {
	return o`${e} { min-inline-size: max(${M("--en-control-min-size", j("--en-size-control-min"))}, ${j("--en-size-target-touch")}); }`;
}
function gt(e) {
	return o`${e} { transition: none; }`;
}
function _t(e) {
	return o`${e} { color: CanvasText !important; background: Canvas !important; border-color: ButtonText !important; }`;
}
function vt(e) {
	return o`${e} { color: GrayText !important; border-color: GrayText !important; }`;
}
//#endregion
//#region ../design-system/packages/styles/dist/buttons.js
var yt = L(o`
  ${ut(o`.en-button:not(.en-icon-button), .en-button[data-icon-only]`)}
  ${dt(o`.en-button`)}
  ${ft(o`.en-button:not(.en-icon-button)`)}
  ${it}
  ${pt(o`:is(.en-button):is(:disabled, [aria-disabled='true'])`)}
  ${ot}
  @media (any-pointer: coarse) {
    ${ut(o`.en-button:not(.en-icon-button), .en-button[data-icon-only]`, !0)}
    ${mt(o`.en-button`)}
    ${ft(o`.en-button:not(.en-icon-button)`)}
    ${ht(o`.en-icon-button`)}
  }
  @media (prefers-reduced-motion: reduce) { ${gt(o`.en-button`)} }
  @media (forced-colors: active) {
    ${_t(o`.en-button`)}
    ${vt(o`:is(.en-button):is(:disabled, [aria-disabled='true'])`)}
    ${st}
  }
`), bt = L(o`
  .en-spinner {
    display: inline-block;
    flex: none;
    inline-size: ${j("--en-size-spinner")};
    block-size: ${j("--en-size-spinner")};
    border: ${j("--en-size-spinner-stroke")} solid currentColor;
    border-inline-end-color: ${j("--en-color-line")};
    border-radius: ${j("--en-radius-pill")};
    animation: en-style-spin ${j("--en-duration-spin")} linear infinite;
  }
  @keyframes en-style-spin { to { transform: rotate(1turn); } }
  .en-skeleton { display: block; inline-size: 100%; block-size: ${M("--en-skeleton-size", j("--en-size-skeleton-line"))}; background: ${M("--en-skeleton-color", j("--en-color-surface-subtle"))}; border-radius: ${j("--en-radius-control")}; }
  .en-skeleton[data-shape='circle'] { inline-size: ${M("--en-skeleton-size", j("--en-size-avatar"))}; block-size: ${M("--en-skeleton-size", j("--en-size-avatar"))}; border-radius: ${j("--en-radius-pill")}; }
  .en-skeleton[data-shape='rectangle'] { block-size: ${M("--en-skeleton-size", j("--en-space-16"))}; }
  @media (prefers-reduced-motion: reduce) { .en-spinner { animation: none; } }
  @media (forced-colors: active) { .en-spinner { border-color: CanvasText; border-inline-end-color: GrayText; } .en-skeleton { background: Canvas; border: ${j("--en-border-width")} solid GrayText; } }
`), V = (e) => e ?? T, xt = (e) => S`
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
    aria-haspopup=${V(e.popupRole ?? void 0)}
    aria-expanded=${V(e.popupExpanded ?? void 0)}
    aria-disabled=${V(e.ariaDisabled ?? void 0)}
  >
    ${e.loading ? S`<span class="en-spinner" part="indicator" aria-hidden="true"></span>` : null}
    <slot class="en-button__prefix" name="prefix"></slot>
    <span class="en-button__label" part="label"><slot name="label"><slot></slot></slot></span>
    <slot class="en-button__suffix" name="suffix"></slot>
  </button>
`, St = /* @__PURE__ */ new WeakMap();
function Ct(e, t) {
	St.set(e, { write: t });
}
//#endregion
//#region ../design-system/packages/elements/dist/button/element.js
var wt = class extends A {
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
		z,
		nt,
		yt,
		bt
	];
	tabStop = 0;
	constructor() {
		super(), this.variant = "primary", this.disabled = !1, this.loading = !1, this.iconOnly = !1, this.popupRole = null, this.popupExpanded = null, this.disabledSemantics = null, this.addEventListener("click", (e) => {
			this.getAttribute("aria-disabled") === "true" && (e.preventDefault(), e.stopImmediatePropagation());
		}, { capture: !0 }), this.descriptionIds = null, Ct(this, (e) => {
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
		return xt({
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
function Tt(e) {
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
function Et(e, t) {
	let n = Tt(t), r = /* @__PURE__ */ new Map();
	for (let t of n) {
		let n = r.get(t.elementClass);
		if (n && n !== t.tagName) throw Error(`One constructor cannot define both ${n} and ${t.tagName}.`);
		r.set(t.elementClass, t.tagName);
		let i = e.get(t.tagName);
		if (i && i !== t.elementClass) throw Error(`A different version of ${t.tagName} is already registered.`);
	}
	for (let t of n) e.get(t.tagName) || e.define(t.tagName, t.elementClass);
}
function H(e, t) {
	Et(e, [t]);
}
//#endregion
//#region ../design-system/packages/elements/dist/define/button.js
H(customElements, {
	tagName: "en-button",
	elementClass: wt
});
//#endregion
//#region ../design-system/packages/styles/dist/internal/focus.js
var Dt = o`
  ${ot}
  ${F(o`.en-accordion-trigger`, { family: "button" })}
  ${F(o`:where(.en-input, .en-textarea, .en-select, .en-color-control)`, { family: "input" })}
  ${F(o`.en-option`, { family: "option" })}
  ${F(o`:where(.en-link, .en-control:not(.en-color-control), .en-checkbox, .en-radio, .en-switch,
    .en-range, .en-tab, .en-split-separator, .en-rating-item)`)}
`, Ot = Qe({ family: "input" }), kt = o`
  .en-field-focus-frame {
    position: relative;
    min-inline-size: 0;
    --_en-field-focus-accent-width: ${M("--en-input-focus-accent-width", j("--en-focus-accent-width"))};
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
    block-size: max(var(--_en-field-focus-accent-width), ${M("--en-control-radius", j("--en-radius-control"))});
    border-end-start-radius: ${M("--en-control-radius", j("--en-radius-control"))};
    border-end-end-radius: ${M("--en-control-radius", j("--en-radius-control"))};
    border-block-end: var(--_en-field-focus-accent-width) solid ${M("--en-input-focus-accent-color", j("--en-color-focus"))};
    clip-path: inset(calc(100% - var(--_en-field-focus-accent-width)) 0 0 0);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform ${j("--en-duration-focus-exit")} ${j("--en-ease-focus-exit")};
  }
  .en-number-group.en-field-focus-frame {
    box-shadow: 0 0 0 0 ${Ot.haloColor};
    transition: box-shadow ${j("--en-duration-focus-exit")} ${j("--en-ease-focus-exit")};
  }
  .en-number-group.en-field-focus-frame:focus-within {
    box-shadow: 0 0 0 ${Ot.haloWidth} ${Ot.haloColor};
    transition-duration: ${j("--en-duration-focus-enter")};
    transition-timing-function: ${j("--en-ease-focus-enter")};
  }
  .en-field-focus-frame:focus-within::after {
    transform: scaleX(1);
    transition-duration: ${j("--en-duration-focus-enter")};
    transition-timing-function: ${j("--en-ease-focus-enter")};
  }
  @media (prefers-reduced-motion: reduce) {
    .en-field-focus-frame::after, .en-field-focus-frame:focus-within::after,
    .en-number-group.en-field-focus-frame, .en-number-group.en-field-focus-frame:focus-within { transition: none; }
  }
  @media (forced-colors: active) {
    .en-field-focus-frame::after, .en-field-focus-frame:focus-within::after { border-block-end-color: Highlight; transition: none; }
    .en-number-group.en-field-focus-frame, .en-number-group.en-field-focus-frame:focus-within { box-shadow: none; transition: none; }
  }
`, At = L(o`
  .en-alert { display: flex; align-items: flex-start; gap: ${j("--en-space-3")}; min-inline-size: 0; padding: ${j("--en-space-4")}; border: ${j("--en-border-width")} solid ${M("--en-alert-border-color", j("--en-color-accent-border"))}; border-radius: ${j("--en-radius-container")}; background: ${M("--en-alert-background", j("--en-color-surface"))}; color: ${M("--en-alert-color", j("--en-color-text"))}; }
  .en-alert__icon { flex: none; color: ${j("--en-color-action")}; }
  .en-alert__content { min-inline-size: 0; flex: 1 1 auto; overflow-wrap: break-word; }
  .en-alert__close { flex: none; margin-inline-start: auto; }
  .en-alert[data-variant='success'] { border-color: ${M("--en-alert-border-color", j("--en-color-success-text"))}; }
  .en-alert[data-variant='warning'] { border-color: ${M("--en-alert-border-color", j("--en-color-warning-text"))}; }
  .en-alert[data-variant='danger'] { border-color: ${M("--en-alert-border-color", j("--en-color-danger-text"))}; }
  .en-alert[data-variant='success'] .en-alert__icon { color: ${j("--en-color-success-text")}; }
  .en-alert[data-variant='warning'] .en-alert__icon { color: ${j("--en-color-warning-text")}; }
  .en-alert[data-variant='danger'] .en-alert__icon { color: ${j("--en-color-danger-text")}; }
  .en-badge { display: inline-flex; align-items: center; gap: ${j("--en-space-icon-label")}; max-inline-size: 100%; padding-block: ${j("--en-space-badge-block")}; padding-inline: ${j("--en-space-badge-inline")}; border: ${j("--en-border-width")} solid ${j("--en-color-line")}; border-radius: ${M("--en-badge-radius", j("--en-radius-control"))}; background: ${M("--en-badge-background", j("--en-color-surface-subtle"))}; color: ${M("--en-badge-color", j("--en-color-text"))}; font-size: ${j("--en-font-metadata-size")}; line-height: ${j("--en-font-metadata-line-height")}; overflow-wrap: break-word; }
  .en-badge__prefix { display: contents; }
  .en-badge__label { min-inline-size: 0; }
  .en-badge[data-variant='accent'] { background: ${M("--en-badge-background", j("--en-color-accent-subtle"))}; color: ${M("--en-badge-color", j("--en-color-action-text"))}; }
  .en-badge[data-variant='success'] { color: ${M("--en-badge-color", j("--en-color-success-text"))}; }
  .en-badge[data-variant='warning'] { color: ${M("--en-badge-color", j("--en-color-warning-text"))}; }
  .en-badge[data-variant='danger'] { color: ${M("--en-badge-color", j("--en-color-danger-text"))}; }
  .en-progress, .en-progress-track { display: block; inline-size: 100%; block-size: ${M("--en-progress-size", j("--en-size-progress"))}; overflow: hidden; border: 0; border-radius: ${j("--en-radius-pill")}; background: ${M("--en-progress-track-color", j("--en-color-surface-subtle"))}; }
  .en-progress { appearance: none; accent-color: ${M("--en-progress-color", j("--en-color-action"))}; }
  .en-progress-fill { display: block; inline-size: clamp(0%, var(--en-progress-value, 0%), 100%); block-size: 100%; border-radius: inherit; background: ${M("--en-progress-color", j("--en-color-action"))}; }
  .en-progress::-webkit-progress-bar { background: ${M("--en-progress-track-color", j("--en-color-surface-subtle"))}; border-radius: inherit; }
  .en-progress::-webkit-progress-value { background: ${M("--en-progress-color", j("--en-color-action"))}; border-radius: inherit; }
  .en-progress::-moz-progress-bar { background: ${M("--en-progress-color", j("--en-color-action"))}; border-radius: inherit; }
  ${bt}
  @media (forced-colors: active) {
    .en-alert, .en-alert[data-variant], .en-badge, .en-badge[data-variant] { color: CanvasText; background: Canvas; border-color: CanvasText; }
    .en-alert__icon, .en-alert[data-variant] .en-alert__icon { color: CanvasText; }
    .en-progress, .en-progress-track { background: Canvas; border: ${j("--en-border-width")} solid CanvasText; }
    .en-progress-fill { background: Highlight; }
    .en-progress::-webkit-progress-bar { background: Canvas; }
    .en-progress::-webkit-progress-value { background: Highlight; }
    .en-progress::-moz-progress-bar { background: Highlight; }
  }
`), jt = L(o`
  .en-icon { display: inline-flex; align-items: center; justify-content: center; flex: none; inline-size: ${M("--en-icon-size", j("--en-size-icon"))}; block-size: ${M("--en-icon-size", j("--en-size-icon"))}; vertical-align: middle; color: inherit; }
  .en-icon > :where(svg, img), .en-icon ::slotted(svg), .en-icon ::slotted(img) { display: block; inline-size: 100%; block-size: 100%; }
  svg.en-icon, .en-icon > svg, .en-icon ::slotted(svg) { display: block; stroke-width: ${j("--en-size-icon-stroke")}; }
  .en-avatar { display: inline-grid; place-items: center; vertical-align: middle; flex: none; inline-size: ${M("--en-avatar-size", j("--en-size-avatar"))}; block-size: ${M("--en-avatar-size", j("--en-size-avatar"))}; overflow: hidden; border-radius: ${M("--en-avatar-radius", j("--en-radius-pill"))}; background: ${j("--en-color-surface-subtle")}; color: ${j("--en-color-text")}; }
  .en-avatar__image { display: block; inline-size: 100%; block-size: 100%; object-fit: cover; }
  .en-avatar__fallback { font-weight: ${j("--en-font-label-strong-weight")}; }
  .en-media { display: block; max-inline-size: 100%; block-size: auto; border-radius: ${M("--en-media-radius", j("--en-radius-container"))}; aspect-ratio: ${M("--en-media-aspect-ratio", o`auto`)}; }
  @media (forced-colors: active) { .en-avatar { color: CanvasText; background: Canvas; border: ${j("--en-border-width")} solid CanvasText; } }
`);
L(o`
  :host { inline-size: max(${M("--en-swatch-size", j("--en-size-swatch"))}, ${j("--en-size-target-min")}); min-inline-size: ${j("--en-size-target-min")}; }
  .en-swatch__sample { position: relative; display: block; appearance: none; inline-size: 100%; block-size: max(${M("--en-swatch-size", j("--en-size-swatch"))}, ${j("--en-size-target-min")}); min-inline-size: ${j("--en-size-target-min")}; padding: 0; margin: 0; overflow: hidden; border: ${j("--en-border-width")} solid ${j("--en-color-boundary")}; border-radius: ${j("--en-radius-control")}; background: transparent; color: inherit; cursor: pointer; }
  @media (hover: hover) { .en-swatch__sample:not(:disabled):hover { border-color: ${j("--en-color-action")}; } }
  .en-swatch__sample:disabled { cursor: default; }
  .en-swatch__color { display: block; inline-size: 100%; block-size: 100%; }
  ${Dt}
  @media (forced-colors: active) {
    .en-swatch__sample { border-color: ButtonText; background: Canvas; }
  @media (hover: hover) { .en-swatch__sample:not(:disabled):hover { border-color: ButtonText; background: Canvas; } }
    .en-swatch__sample:disabled { border-color: GrayText; }
    .en-swatch__color { forced-color-adjust: none; }
  }
`);
//#endregion
//#region ../design-system/packages/elements/dist/icon/template.js
var Mt = {
	calendar: C`<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M7 3v4m10-4v4M3 11h18"></path>`,
	check: C`<path d="m5 12 4 4L19 6" />`,
	plus: C`<path d="M12 5v14M5 12h14" />`,
	close: C`<path d="m6 6 12 12M18 6 6 18" />`,
	"chevron-left": C`<path d="m15 6-6 6 6 6" />`,
	"chevron-right": C`<path d="m9 6 6 6-6 6" />`,
	"chevron-down": C`<path d="m6 9 6 6 6-6" />`,
	"arrow-right": C`<path d="M4 12h16m-6-6 6 6-6 6" />`,
	search: C`<circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" />`,
	info: C`<circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10v1" />`,
	warning: C`<path d="m12 3 10 18H2L12 3Zm0 6v5m0 3v1" />`,
	sparkles: C`<path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3ZM20 2v4m-2-2h4" />`
}, Nt = (e, t) => S`
  <svg
    class="en-icon"
    part="base"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    focusable="false"
    role=${t ? "img" : T}
    aria-label=${t || T}
    aria-hidden=${t ? T : "true"}
  >${Mt[e] ?? T}</svg>
`, Pt = class extends A {
	static properties = {
		name: { type: String },
		label: { type: String }
	};
	static styles = [
		z,
		rt,
		jt
	];
	constructor() {
		super(), this.name = "info", this.label = "";
	}
	render() {
		return Nt(this.name, this.label);
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/icon.js
H(customElements, {
	tagName: "en-icon",
	elementClass: Pt
});
//#endregion
//#region ../design-system/packages/elements/dist/badge/template.js
var Ft = (e) => S`
  <span class="en-badge" part="base" data-variant=${e}>
    <slot class="en-badge__prefix" name="prefix"></slot><span class="en-badge__label" part="label"><slot name="label"><slot></slot></slot></span>
  </span>
`;
//#endregion
//#region ../design-system/packages/elements/dist/define/badge.js
H(customElements, {
	tagName: "en-badge",
	elementClass: class extends A {
		static properties = { variant: { reflect: !0 } };
		static styles = [
			z,
			nt,
			At
		];
		constructor() {
			super(), this.variant = "neutral";
		}
		render() {
			return Ft(this.variant);
		}
	}
});
//#endregion
//#region ../design-system/packages/elements/dist/internal/native-surface.js
function U(e, t) {
	e.inert === t && (e.inert = !t);
}
function It(e) {
	let t = e.currentTarget;
	e.target === t && (e.newState === "open" && U(t, !0), queueMicrotask(() => {
		if (!t.isConnected) return;
		let e = t.localName === "dialog" ? t.open : t.matches(":popover-open");
		U(t, e);
	}));
}
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/events.js
var Lt = /* @__PURE__ */ new WeakMap();
function Rt(e, t, n, r) {
	return new ((e.ownerDocument?.defaultView?.CustomEvent) ?? globalThis.CustomEvent)(t, {
		detail: n,
		bubbles: !0,
		composed: !0,
		cancelable: r
	});
}
function W(e, t) {
	if (Object.is(t.previous, t.proposed)) return "unchanged";
	let n = Rt(e, "en-change", Object.freeze({
		previous: t.previous,
		proposed: t.proposed,
		reason: t.reason
	}), !0), r = {
		authorRevision: t.getRevision(),
		acceptedEpoch: Lt.get(e)?.acceptedEpoch ?? 0
	}, i = Lt.get(e);
	i || (i = {
		acceptedEpoch: 0,
		frames: []
	}, Lt.set(e, i));
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
		a.frames.pop(), a.frames.length === 0 && Lt.delete(e);
	}
}
function zt(e, t) {
	e.dispatchEvent(Rt(e, "en-input", Object.freeze({ ...t }), !1));
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/surface-motion.js
var G = o`clamp(0ms, ${j("--en-duration-enter")}, 500ms)`, Bt = o`clamp(0ms, ${j("--en-duration-exit")}, 500ms)`, K = o`clamp(0px, ${j("--en-motion-surface-offset")}, 8px)`, Vt = o`clamp(.95, ${j("--en-motion-surface-scale")}, 1)`, Ht = o`var(--_en-surface-duration, 0ms) var(--_en-surface-ease, linear)`, Ut = o`opacity var(--_en-surface-opacity-duration, 0ms) var(--_en-surface-ease, linear), translate ${Ht}, scale ${Ht}, display ${Ht} allow-discrete, overlay ${Ht} allow-discrete`;
function Wt(e, t, n, r, i = o``) {
	let a = o`:where(${e})${i}`, s = o`${t}${i}`, c = o`${n}${i}`;
	return o`
    @supports (transition-behavior: allow-discrete) and (overlay: auto) {
      ${a} {
        --_en-surface-duration: ${Bt};
        --_en-surface-opacity-duration: ${Bt};
        --_en-surface-ease: ${j("--en-ease-exit")};
        opacity: 0;
        transition: ${Ut};
      }
      ${s} {
        --_en-surface-duration: ${G};
        /* Modal and menu entry keep content opaque. Fade surfaces reverse
           from their current opacity when reopened during exit. */
        --_en-surface-opacity-duration: ${r === "fade" ? G : o`0ms`};
        --_en-surface-ease: ${j("--en-ease-enter")};
        opacity: 1;
      }
      ${c} { pointer-events: none; }
      ${r === "elevation" ? o`
        /* Opaque command content and its primary focus contour are immediate.
           Elevation adds entry paint without corrupting measured iPhone geometry. */
        @keyframes en-surface-elevation { from { box-shadow: none; } }
        ${s} { animation: en-surface-elevation ${G} ${j("--en-ease-enter")}; }
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
var Gt = o`
  ${Wt(o`dialog:is(.en-dialog, .en-drawer)`, o`dialog:is(.en-dialog, .en-drawer)[open]`, o`dialog:is(.en-dialog, .en-drawer):not([open])`, "move")}
  @supports (transition-behavior: allow-discrete) and (overlay: auto) {
    dialog:is(.en-dialog, .en-drawer) {
      --_en-surface-x: 0px;
      --_en-surface-y: ${K};
      translate: var(--_en-surface-x) var(--_en-surface-y);
      scale: ${Vt};
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
        scale: ${Vt};
      }
      dialog.en-drawer[open] { scale: 1; }
    }
    dialog:is(.en-dialog, .en-drawer)::backdrop {
      opacity: 0;
      transition: opacity ${Bt} ${j("--en-ease-exit")}, display ${Bt} allow-discrete, overlay ${Bt} allow-discrete;
    }
    dialog:is(.en-dialog, .en-drawer)[open]::backdrop {
      opacity: 1;
      transition: opacity ${G} ${j("--en-ease-enter")}, display ${G} allow-discrete, overlay ${G} allow-discrete;
    }
    dialog:is(.en-dialog, .en-drawer):not([open])::backdrop { pointer-events: none; }
    @starting-style { dialog:is(.en-dialog, .en-drawer)[open]::backdrop { opacity: 0; } }
  }
  @media (prefers-reduced-motion: reduce) {
    dialog:is(.en-dialog, .en-drawer) { translate: none !important; scale: none !important; }
    dialog:is(.en-dialog, .en-drawer)::backdrop { transition: none !important; }
  }
`, Kt = o`
  .en-radio {
    flex: none;
    inline-size: ${j("--en-size-icon")};
    block-size: ${j("--en-size-icon")};
    margin: 0;
    accent-color: ${j("--en-color-action")};
    appearance: none;
    display: inline-grid;
    /* Keep the inline baseline independent of the checked-state grid dot. */
    vertical-align: middle;
    place-items: center;
    box-sizing: border-box;
    border: ${j("--en-border-width")} solid ${j("--en-color-boundary")};
    border-radius: ${j("--en-radius-pill")};
    background: ${j("--en-color-surface")};
    cursor: pointer;
  }
  .en-radio:checked { border-color: ${M("--en-radio-selected-color", j("--en-color-action"))}; }
  .en-radio:checked::before { content: ''; inline-size: ${j("--en-size-choice-dot")}; block-size: ${j("--en-size-choice-dot")}; border-radius: ${j("--en-radius-pill")}; background: ${M("--en-radio-selected-color", j("--en-color-action"))}; }
  .en-radio:disabled { cursor: default; background: ${j("--en-color-surface-subtle")}; border-color: ${j("--en-color-boundary")}; }
  .en-radio:disabled::before { background: ${j("--en-color-text-muted")}; }
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
function qt(e) {
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
      font-weight: ${M("--en-option-font-weight", o`inherit`)};
    }
    ${e.selected ? o`${e.selected} {
      --_en-option-selected-background: ${M("--en-option-selected-background", M("--en-option-background", j("--en-color-selected")))};
      --_en-option-selected-color: ${M("--en-option-selected-color", M("--en-option-color", e.selectedColor ?? e.restColor))};
      font-weight: ${M("--en-option-selected-font-weight", M("--en-option-font-weight", j("--en-font-label-strong-weight")))};
    }` : o``}
    @media (hover: hover) { ${e.hover} {
      --_en-option-hover-background: ${M("--en-option-hover-background", M("--en-option-background", e.hoverBackground))};
      /* With neither override set, the state slot is invalid and falls through
         to active/selected/rest paint, rather than resetting it. */
      --_en-option-hover-color: var(--en-option-hover-color, var(--en-option-color));
    } }
    ${e.focus ? o`${e.focus} {
      --_en-option-hover-background: ${M("--en-option-hover-background", M("--en-option-background", e.hoverBackground))};
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
      --_en-option-disabled-color: ${M("--en-option-disabled-color", M("--en-option-color", j("--en-color-text-muted")))};
    }
  `;
}
//#endregion
//#region ../design-system/packages/styles/dist/internal/range.js
var Jt = o`
  block-size: ${j("--en-size-range-track")};
  border: 0;
  border-radius: ${j("--en-radius-pill")};
  background: ${j("--en-color-boundary")};
`, Yt = o`
  box-sizing: border-box;
  inline-size: ${j("--en-size-icon")};
  block-size: ${j("--en-size-icon")};
  border: ${j("--en-border-width")} solid ${j("--en-color-action")};
  border-radius: ${j("--en-radius-pill")};
  background: ${j("--en-color-action")};
`, Xt = o`outline: ${j("--en-focus-width")} solid ${j("--en-color-focus")}; outline-offset: ${j("--en-focus-offset")};`, Zt = o`
  @supports selector(input::-webkit-slider-thumb) {
    .en-range { appearance: none; background: none; cursor: pointer; }
    .en-range::-webkit-slider-runnable-track { ${Jt} }
    .en-range::-webkit-slider-thumb { appearance: none; ${Yt} margin-block-start: calc((${j("--en-size-range-track")} - ${j("--en-size-icon")}) / 2); }
    /* Exposed native thumbs own focus. A global halo must not reintroduce a
       rectangular range-host ring; native unsupported fallbacks keep that route. */
    .en-range, .en-range:focus-visible { box-shadow: none; }
    .en-range:focus-visible { outline: none; }
    .en-range:focus-visible::-webkit-slider-thumb { ${Xt} }
    .en-range:disabled::-webkit-slider-thumb { background: ${j("--en-color-text-muted")}; border-color: ${j("--en-color-text-muted")}; }
    @media (forced-colors: active) {
      .en-range::-webkit-slider-runnable-track { background: ButtonText; }
      .en-range::-webkit-slider-thumb { background: Highlight; border-color: Highlight; }
      .en-range:disabled::-webkit-slider-thumb { background: GrayText; border-color: GrayText; }
      .en-range:focus-visible::-webkit-slider-thumb { outline-color: CanvasText; }
    }
  }
  @supports selector(input::-moz-range-thumb) {
    .en-range { appearance: none; background: none; cursor: pointer; }
    .en-range::-moz-range-track { ${Jt} }
    .en-range::-moz-range-thumb { ${Yt} }
    /* Exposed native thumbs own focus. A global halo must not reintroduce a
       rectangular range-host ring; native unsupported fallbacks keep that route. */
    .en-range, .en-range:focus-visible { box-shadow: none; }
    .en-range:focus-visible { outline: none; }
    .en-range:focus-visible::-moz-range-thumb { ${Xt} }
    .en-range:disabled::-moz-range-thumb { background: ${j("--en-color-text-muted")}; border-color: ${j("--en-color-text-muted")}; }
    @media (forced-colors: active) {
      .en-range::-moz-range-track { background: ButtonText; }
      .en-range::-moz-range-thumb { background: Highlight; border-color: Highlight; }
      .en-range:disabled::-moz-range-thumb { background: GrayText; border-color: GrayText; }
      .en-range:focus-visible::-moz-range-thumb { outline-color: CanvasText; }
    }
  }
  .en-range:disabled { cursor: default; }
`, Qt = o`
  .en-link {
    color: ${j("--en-color-link")};
    text-decoration: underline;
    text-underline-offset: ${j("--en-space-0-5")};
    overflow-wrap: break-word;
  }
  .en-link:visited { color: ${j("--en-color-link")}; }
`, $t = o`.en-link[aria-disabled='true'] { color: ${j("--en-color-text-muted")}; cursor: default; }`, en = o`.en-link, .en-link:visited { color: LinkText; }`, tn = M("--en-control-inline-padding", M("--en-input-inline-padding", j("--en-space-control-inline"))), nn = M("--en-control-radius", j("--en-radius-control")), rn = o`max(0px, ${nn} - ${j("--en-border-width")})`, an = o`max(
  ${j("--en-space-control-block")},
  calc((var(--_en-text-control-block-size) - ${j("--en-font-input-size")} * ${j("--en-font-input-line-height")}) / 2 - ${j("--en-border-width")})
)`, on = L(o`
  /* Compute on each consumer so local token/part overrides retain their scope. */
  ${ut(o`.en-button:not(.en-icon-button), .en-button[data-icon-only], .en-input, .en-textarea, .en-select, .en-number-input, .en-number-step, .en-color-control`)}
  ${dt(o`.en-control, .en-button, .en-input, .en-textarea, .en-select`)}
  ${ft(o`.en-button:not(.en-icon-button), .en-input, .en-textarea, .en-select`)}
  /* Field tokens customize inputs without changing action and choice surfaces.
     Existing direct control overrides retain their higher precedence. */
  .en-input, .en-textarea, .en-select {
    padding-inline: ${tn};
    background: ${M("--en-control-background", M("--en-input-background", j("--en-color-surface")))};
    color: ${M("--en-control-color", M("--en-input-color", j("--en-color-text")))};
  }
  ${it}
  ${Qt}
  ${pt(o`:is(.en-button, .en-input, .en-textarea, .en-select, .en-control):is(:disabled, [aria-disabled='true'])`)}
  ${$t}
  .en-input, .en-textarea, .en-select {
    inline-size: 100%;
    font: ${j("--en-font-input-weight")} ${j("--en-font-input-size")} / ${j("--en-font-input-line-height")} ${j("--en-font-input-family")};
  }
  /* Use the shared text-field surface and target envelope around the native
     date editor. Keep its fields, separators and calendar-picker activation. */
  .en-input[type='date'] {
    -webkit-appearance: none;
    appearance: none;
    padding-block: ${an};
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
  .en-input::placeholder, .en-textarea::placeholder { color: ${j("--en-color-text-muted")}; opacity: 1; }
  .en-text-input, .en-textarea { padding-block: ${an}; }
  .en-textarea { resize: block; }
  .en-input[aria-invalid='true'], .en-textarea[aria-invalid='true'], .en-select[aria-invalid='true'], .en-control[data-invalid] {
    border-color: ${j("--en-color-danger-text")};
  }
  .en-input:user-invalid, .en-textarea:user-invalid, .en-select:user-invalid { border-color: ${j("--en-color-danger-text")}; }
  /* The text-field marker keeps stronger invalid geometry out of other native controls.
     Preserve border + padding on each edge, including scoped padding/base-border tokens. */
  .en-text-input:is([aria-invalid='true'], :user-invalid) {
    border-width: ${j("--en-border-invalid-width")};
    padding-block: max(0px, calc(${an} + ${j("--en-border-width")} - ${j("--en-border-invalid-width")}));
    padding-inline: max(0px, calc(${tn} + ${j("--en-border-width")} - ${j("--en-border-invalid-width")}));
  }
  .en-input-group { display: flex; align-items: stretch; gap: ${j("--en-space-1")}; min-inline-size: 0; }
  .en-input-group > .en-input { flex: 1 1 auto; inline-size: 0; min-inline-size: 0; }
  .en-number-group {
    gap: 0;
    padding: 0;
    border: ${j("--en-border-width")} solid ${M("--en-control-border-color", j("--en-color-boundary"))};
    border-radius: ${nn};
    background: ${M("--en-control-background", M("--en-input-background", j("--en-color-surface")))};
  }
  .en-number-group[data-invalid] { border-color: ${j("--en-color-danger-text")}; }
  .en-number-group > :is(.en-number-input, .en-number-step) { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${j("--en-border-width")}), ${j("--en-size-target-min")}); }
  .en-number-group > .en-number-input { border: 0; border-radius: 0; background: none; appearance: textfield; }
  .en-number-input::-webkit-inner-spin-button, .en-number-input::-webkit-outer-spin-button { appearance: none; margin: 0; }
  .en-number-step {
    flex: none;
    min-inline-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-min")});
    padding-inline: ${j("--en-space-control-block")};
    border: 0;
    border-inline-start: ${j("--en-border-width")} solid ${j("--en-color-line")};
    border-radius: 0;
    background: ${j("--en-color-surface-subtle")};
    color: ${j("--en-color-text")};
  }
  /* Match the frame's override as well as its token. Keep overflow visible so
     consumer-defined outward focus contours remain intact. */
  .en-number-step:last-child { border-start-end-radius: ${rn}; border-end-end-radius: ${rn}; }
  .en-number-step:first-child { border-inline-start: 0; border-inline-end: ${j("--en-border-width")} solid ${j("--en-color-line")}; border-start-start-radius: ${rn}; border-end-start-radius: ${rn}; }

  .en-color-control { cursor: pointer; padding: ${j("--en-space-control-block")}; block-size: var(--_en-text-control-block-size); }
  .en-color-control::-webkit-color-swatch-wrapper { padding: 0; }
  .en-color-control::-webkit-color-swatch { border: ${j("--en-border-width")} solid ${j("--en-color-boundary")}; border-radius: max(0px, ${j("--en-radius-control")} - ${j("--en-space-control-block")}); }
  .en-color-control::-moz-color-swatch { border: ${j("--en-border-width")} solid ${j("--en-color-boundary")}; border-radius: max(0px, ${j("--en-radius-control")} - ${j("--en-space-control-block")}); }
  ${Kt}
  .en-checkbox, .en-switch {
    flex: none;
    inline-size: ${j("--en-size-icon")};
    block-size: ${j("--en-size-icon")};
    margin: 0;
    accent-color: ${j("--en-color-action")};
  }
  .en-checkbox {
    appearance: none;
    display: inline-grid;
    place-items: center;
    box-sizing: border-box;
    border: ${j("--en-border-width")} solid ${j("--en-color-boundary")};
    background: ${j("--en-color-surface")};
    cursor: pointer;
  }
  .en-checkbox { border-radius: ${j("--en-radius-choice")}; }
  .en-checkbox:checked, .en-checkbox:indeterminate { background: ${j("--en-color-action")}; border-color: ${j("--en-color-action")}; }
  .en-checkbox:checked::before {
    content: '';
    box-sizing: border-box;
    inline-size: ${j("--en-size-choice-mark-inline")};
    block-size: ${j("--en-size-choice-mark-block")};
    /* The check is directional artwork, not an inline-layout edge; never mirror it in RTL. */
    border-right: ${j("--en-size-choice-mark-stroke")} solid ${j("--en-color-on-action")};
    border-bottom: ${j("--en-size-choice-mark-stroke")} solid ${j("--en-color-on-action")};
    transform: rotate(45deg);
  }
  .en-checkbox:indeterminate::before { content: ''; inline-size: ${j("--en-size-choice-mark-block")}; block-size: 0; border: 0; border-block-end: ${j("--en-size-choice-mark-stroke")} solid ${j("--en-color-on-action")}; transform: none; }
  .en-checkbox:disabled { cursor: default; background: ${j("--en-color-surface-subtle")}; border-color: ${j("--en-color-boundary")}; }
  .en-checkbox:disabled::before { border-color: ${j("--en-color-text-muted")}; }
  .en-switch {
    position: relative;
    appearance: none;
    box-sizing: border-box;
    inline-size: ${j("--en-size-switch-inline")};
    block-size: ${j("--en-size-switch-block")};
    border: ${j("--en-border-width")} solid ${j("--en-color-boundary")};
    border-radius: ${j("--en-radius-pill")};
    background: ${j("--en-color-surface-subtle")};
    cursor: pointer;
  }
  .en-switch::before {
    content: '';
    position: absolute;
    inset-block-start: ${j("--en-space-switch-inset")};
    inset-inline-start: ${j("--en-space-switch-inset")};
    inline-size: ${j("--en-size-switch-thumb")};
    block-size: ${j("--en-size-switch-thumb")};
    border-radius: ${j("--en-radius-pill")};
    background: ${j("--en-color-text-muted")};
    transition: inset-inline-start ${j("--en-duration-fast")} ${j("--en-ease-standard")};
  }
  .en-switch:checked { background: ${j("--en-color-action")}; border-color: ${j("--en-color-action")}; }
  .en-switch:checked::before { inset-inline-start: calc(100% - ${j("--en-size-switch-thumb")} - ${j("--en-space-switch-inset")}); background: ${j("--en-color-on-action")}; }
  .en-switch:disabled { cursor: default; border-color: ${j("--en-color-boundary")}; background: ${j("--en-color-surface-subtle")}; }
  .en-switch:disabled::before { background: ${j("--en-color-text-muted")}; }
  .en-range { inline-size: 100%; min-inline-size: ${j("--en-size-target-min")}; min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-min")}); margin: 0; accent-color: ${j("--en-color-action")}; }
  .en-range-row { display: flex; align-items: center; gap: ${j("--en-space-3")}; min-inline-size: 0; }
  .en-range-row > .en-range { flex: 1 1 auto; inline-size: 0; }
  .en-range-row[data-editable] { flex-wrap: wrap; }
  .en-range-row > .en-range-editor {
    flex: 0 1 calc(3 * ${j("--en-size-control-min")});
    inline-size: calc(3 * ${j("--en-size-control-min")});
    min-inline-size: min(100%, ${j("--en-size-target-min")});
    font-variant-numeric: tabular-nums;
  }
  /* The value axis alone becomes vertical. Labels, output and number editing
     retain the surrounding writing direction and normal text layout. */
  .en-range-row[data-orientation='vertical'] { flex-direction: column; flex-wrap: nowrap; }
  .en-range-row[data-orientation='vertical'] > .en-range {
    writing-mode: vertical-lr;
    direction: rtl;
    flex: none;
    inline-size: ${M("--en-slider-length", j("--en-size-range-length"))};
    min-inline-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-min")});
    block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-min")});
  }
  .en-range-row[data-orientation='vertical'] > .en-range-editor {
    flex: none;
    inline-size: min(100%, calc(3 * ${j("--en-size-control-min")}));
  }
  .en-range-error[data-pending] { visibility: hidden; }
  .en-range-row > output { flex: none; font-variant-numeric: tabular-nums; color: ${j("--en-color-text")}; }
  ${Dt}
  ${kt}
  ${F(o`.en-number-group > .en-number-input`, {
	family: "input",
	inset: !0,
	halo: !1
})}
  ${F(o`.en-number-group > .en-number-step`, {
	family: "button",
	inset: !0,
	halo: !1
})}
  ${Zt}
  @media (any-pointer: coarse) {
    ${ut(o`.en-button:not(.en-icon-button), .en-button[data-icon-only], .en-input, .en-textarea, .en-select, .en-number-input, .en-number-step, .en-color-control`, !0)}
    ${mt(o`.en-button, .en-control, .en-input, .en-textarea, .en-select, .en-range`)}
    .en-range-row[data-orientation='vertical'] > .en-range { min-inline-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-touch")}); }
    ${ft(o`.en-button:not(.en-icon-button), .en-input, .en-textarea, .en-select`)}
    .en-color-control { block-size: var(--_en-text-control-block-size); }
    ${ht(o`.en-icon-button, .en-number-step`)}
    .en-number-group > :is(.en-number-input, .en-number-step) { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${j("--en-border-width")}), ${j("--en-size-target-touch")}); }
  }
  @media (prefers-reduced-motion: reduce) { ${gt(o`.en-button, .en-switch::before`)} }
  @media (forced-colors: active) {
    ${_t(o`.en-button, .en-control, .en-input, .en-textarea, .en-select, .en-number-group`)}
    ${en}
    ${vt(o`:is(.en-button, .en-control, .en-input, .en-textarea, .en-select):is(:disabled, [aria-disabled='true']), .en-link[aria-disabled='true']`)}
    ${st}
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
`), sn = M("--en-option-list-radius", M("--en-overlay-radius", j("--en-radius-container"))), cn = o`max(${M("--en-option-list-padding", M("--en-overlay-padding", j("--en-space-1")))}, ${P({
	family: "option",
	inset: !0
})})`, ln = o`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, un = L(o`
  /* Styling the closed control does not replace its OS picker. Keep this
     fallback outside base-select; ordinary select pseudos are not portable. */
  @supports selector(:has(> .en-select)) {
    @supports not ((appearance: base-select) and selector(::picker(select))) {
      .en-select {
        -webkit-appearance: none;
        appearance: none;
        padding-inline-end: calc(${tn} + ${j("--en-size-icon")} + ${j("--en-space-icon-label")});
        min-block-size: max(var(--_en-text-control-block-size), calc(${j("--en-size-icon")} + 2 * ${j("--en-space-control-block")} + 2 * ${j("--en-border-width")}));
      }
      .en-field-focus-frame:has(> .en-select)::before {
        content: '';
        position: absolute;
        z-index: 1;
        inset-inline-end: calc(${tn} + ${j("--en-border-width")});
        inset-block-start: 50%;
        translate: 0 -50%;
        inline-size: ${j("--en-size-icon")};
        block-size: ${j("--en-size-icon")};
        color: ${j("--en-color-text-muted")};
        background-color: currentColor;
        mask: ${ln} center / contain no-repeat;
        pointer-events: none;
      }
      @media (forced-colors: active) {
        .en-field-focus-frame:has(> .en-select)::before { forced-color-adjust: none; color: ButtonText; }
        .en-field-focus-frame:has(> .en-select:disabled)::before { color: GrayText; }
      }
    }
  }
  @supports (appearance: base-select) and selector(::picker(select)) {
    .en-select, .en-select::picker(select) { appearance: ${M("--en-select-appearance", o`base-select`)}; }
    .en-select { align-items: center; gap: ${j("--en-space-icon-label")}; }
    .en-select::picker(select) {
      padding: ${cn};
      border: ${j("--en-border-width")} solid ${M("--en-option-list-border-color", M("--en-overlay-border-color", j("--en-color-boundary")))};
      border-radius: ${sn};
      background: ${M("--en-option-list-background", M("--en-overlay-background", j("--en-color-surface-raised")))};
      color: ${M("--en-option-list-color", M("--en-overlay-color", j("--en-color-text")))};
      box-shadow: ${M("--en-option-list-shadow", j("--en-shadow-overlay"))};
      max-block-size: min(${M("--en-option-list-max-block-size", M("--en-overlay-max-block-size", j("--en-layout-panel-preferred")))}, calc(100dvh - ${j("--en-space-8")}));
      overflow: auto;
    }
    ${Wt(o`.en-select`, o`.en-select:open`, o`.en-select:not(:open)`, "fade", o`::picker(select)`)}
    .en-select option {
      position: relative;
      min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-min")});
      padding: ${M("--en-option-block-padding", j("--en-space-control-block"))} ${M("--en-option-inline-padding", j("--en-space-control-inline"))};
      border-radius: ${M("--en-option-radius", o`max(0px, ${sn} - ${cn} - ${j("--en-border-width")})`)};
    }
    .en-select option + option { margin-block-start: ${M("--en-option-list-gap", o`0px`)}; }
    ${qt({
	base: o`.en-select option`,
	selected: o`.en-select option:checked`,
	hover: o`.en-select option:not(:disabled):hover`,
	focus: o`.en-select option:not(:disabled):focus-visible`,
	pressed: o`.en-select option:not(:disabled):active`,
	disabled: o`.en-select option:disabled`,
	restBackground: o`transparent`,
	restColor: M("--en-option-list-color", M("--en-overlay-color", o`inherit`)),
	selectedColor: M("--en-option-list-color", M("--en-overlay-color", j("--en-color-action-text"))),
	hoverBackground: j("--en-color-selected")
})}
    .en-select option:not(:disabled):focus-visible { z-index: 1; }
    @media (hover: hover) { .en-select option:not(:disabled):hover { z-index: 1; } }
    /* Native :active is pressed activation, not the combobox's keyboard candidate. */
    ${I(o`.en-select option:not(:disabled):focus-visible`, {
	family: "option",
	inset: !0,
	restSelector: o`.en-select option`
})}
    @media (hover: hover) { ${I(o`.en-select option:not(:disabled):hover`, {
	family: "option",
	inset: !0,
	restSelector: o`.en-select option`
})} }
    .en-select::picker-icon {
      content: '';
      inline-size: ${j("--en-size-icon")};
      block-size: ${j("--en-size-icon")};
      flex: none;
      color: ${j("--en-color-text-muted")};
      background-color: currentColor;
      mask: ${ln} center / contain no-repeat;
    }
    @media (any-pointer: coarse) { .en-select option { min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-touch")}); } }
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
`), dn = L(o`
  .en-field, .en-rating-field { --_en-field-gap: ${M("--en-field-gap", j("--en-space-label-control"))}; }
  .en-field { display: flex; flex-direction: column; min-inline-size: 0; gap: 0; }
  .en-field > :not(:first-child):not(.en-description),
  .en-choice-content > :not(:first-child):not(.en-description) { margin-block-start: var(--_en-field-gap); }
  /* A fieldset legend already separates its first content through its margin. */
  .en-field > .en-legend + :not(.en-description) { margin-block-start: 0; }
  .en-label { display: block; color: ${j("--en-color-text")}; font-weight: ${j("--en-font-label-strong-weight")}; overflow-wrap: break-word; }
  .en-description, .en-error { margin: 0; font-size: ${j("--en-font-ui-size")}; line-height: ${j("--en-font-body-line-height")}; overflow-wrap: break-word; }
  /* No box or gap is created by the empty fallback. An assigned root remains
     present even when its light DOM is empty: it may render its own shadow. */
  .en-description { display: flow-root; color: ${j("--en-color-text-muted")}; }
  .en-description-fallback,
  .en-description > slot::slotted(:not([hidden])) { display: block; margin-block-start: var(--_en-field-gap); }
  .en-description-fallback:empty { display: none; }
  .en-error { color: ${j("--en-color-danger-text")}; }
  .en-choice { display: flex; align-items: center; gap: ${j("--en-space-icon-label")}; min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-min")}); min-inline-size: ${j("--en-size-target-min")}; cursor: pointer; }
  .en-choice > :where(.en-label, .en-choice-content) { min-inline-size: 0; }
  .en-choice-content { --_en-field-gap: ${M("--en-field-gap", j("--en-space-control-description"))}; display: flex; flex-direction: column; gap: 0; }
  .en-fieldset { margin: 0; padding: 0; min-inline-size: 0; border: 0; }
  .en-legend { padding: 0; margin-block-end: ${j("--en-space-label-control")}; font-weight: ${j("--en-font-label-strong-weight")}; }
  .en-form-stack { display: flex; flex-direction: column; gap: ${j("--en-space-fields")}; }
  .en-validation-summary { padding: ${j("--en-space-panel")}; border: ${j("--en-border-width")} solid ${j("--en-color-danger-text")}; border-radius: ${j("--en-radius-container")}; }
  .en-validation-summary :where(ul, ol) { padding-inline-start: ${j("--en-space-6")}; }
  @media (any-pointer: coarse) { .en-choice { min-block-size: ${j("--en-size-target-touch")}; } }
  @media (forced-colors: active) { .en-label, .en-description, .en-error { color: CanvasText; } .en-validation-summary { border-color: CanvasText; } }
`), fn = `(width < ${Ke("--en-layout-dialog-collapse")})`, pn = L(o`
  .en-dialog, .en-drawer, .en-popover, .en-tooltip {
    box-sizing: border-box;
    min-inline-size: 0;
    max-inline-size: min(${M("--en-overlay-max-inline-size", j("--en-layout-form-max"))}, calc(100% - ${j("--en-space-8")}));
    max-block-size: ${M("--en-overlay-max-block-size", o`calc(100dvh - ${j("--en-space-8")})`)};
    padding: ${M("--en-overlay-padding", j("--en-space-panel"))};
    border: ${j("--en-border-width")} solid ${M("--en-overlay-border-color", j("--en-color-boundary"))};
    border-radius: ${M("--en-overlay-radius", j("--en-radius-dialog"))};
    background: ${M("--en-overlay-background", j("--en-color-surface-raised"))};
    color: ${M("--en-overlay-color", j("--en-color-text"))};
    font: inherit;
    text-align: start;
    overflow: auto;
    box-shadow: ${j("--en-shadow-overlay")};
  }
  ${Wt(o`.en-popover[popover]`, o`.en-popover:popover-open`, o`.en-popover[popover]:not(:popover-open)`, "fade")}
  ${Wt(o`.en-tooltip[popover]`, o`.en-tooltip:popover-open`, o`.en-tooltip[popover]:not(:popover-open)`, "fade")}
  ${Gt}
  .en-dialog { position: fixed; inset: 0; margin: auto; box-shadow: ${j("--en-shadow-dialog")}; }
  dialog.en-dialog, dialog.en-drawer { flex-direction: column; gap: ${j("--en-space-4")}; }
  dialog.en-dialog[open], dialog.en-drawer[open] { display: flex; }
  dialog.en-dialog:not([open]), dialog.en-drawer:not([open]) { display: none; }
  .en-dialog::backdrop, .en-drawer::backdrop { background: ${j("--en-color-scrim")}; }
  .en-overlay-header, .en-overlay-footer { display: flex; align-items: center; flex-wrap: wrap; gap: ${j("--en-space-3")}; min-inline-size: 0; }
  .en-overlay-header { justify-content: space-between; }
  .en-overlay-footer { justify-content: flex-end; gap: ${j("--en-space-actions")}; }
  .en-overlay-header > slot, .en-overlay-footer > slot { display: contents; }
  .en-overlay-body {
    --_en-overlay-focus-clearance: ${$e};
    min-inline-size: 0;
    min-block-size: 0;
    /* Expand the scrollport without moving content or changing the surrounding gaps. */
    margin: calc(0px - var(--_en-overlay-focus-clearance));
    padding: var(--_en-overlay-focus-clearance);
    scroll-padding: var(--_en-overlay-focus-clearance);
    overflow: auto;
  }
  .en-overlay-close { margin-inline-start: auto; }
  .en-popover { position: fixed; display: flex; flex-direction: column; margin: 0; row-gap: ${j("--en-space-4")}; border-radius: ${M("--en-overlay-radius", j("--en-radius-container"))}; }
  [popover].en-popover:not(:popover-open), [popover].en-tooltip:not(:popover-open) { display: none; }
  .en-tooltip { position: fixed; margin: 0; row-gap: ${j("--en-space-2")}; padding: ${M("--en-overlay-padding", j("--en-space-2"))}; border-radius: ${M("--en-overlay-radius", j("--en-radius-control"))}; overflow-wrap: break-word; }
  /* An outside separator is clipped at viewport-flush edges, even for a drawer
     that fills the whole viewport. Keep it separate from the immediate focus cue. */
  :where(.en-drawer) { outline: ${j("--en-border-width")} solid ${M("--en-overlay-border-color", j("--en-color-boundary"))}; outline-offset: 0; }
  ${F(o`:where(.en-dialog, .en-drawer)`, {
	family: "overlay",
	baseShadow: j("--en-shadow-dialog"),
	baseTransitions: Ut
})}
  ${F(o`.en-popover`, {
	family: "overlay",
	baseShadow: j("--en-shadow-overlay"),
	baseTransitions: Ut
})}
  .en-drawer {
    position: fixed;
    margin: 0;
    inset: auto;
    inset-block: 0;
    inset-inline-end: 0;
    inline-size: min(${M("--en-overlay-max-inline-size", j("--en-layout-form-max"))}, 100%);
    max-inline-size: 100%;
    block-size: 100%;
    max-block-size: 100%;
    border-radius: 0;
    border-width: 0;
    box-shadow: ${j("--en-shadow-dialog")};
  }
  .en-drawer[data-placement='start'] { inset-inline-end: auto; inset-inline-start: 0; }
  .en-drawer[data-placement='left'] { inset-inline: auto; left: 0; right: auto; }
  .en-drawer[data-placement='right'] { inset-inline: auto; left: auto; right: 0; }
  .en-drawer[data-placement='top'], .en-drawer[data-placement='bottom'] { inset-inline: 0; inline-size: 100%; block-size: auto; max-block-size: ${M("--en-overlay-max-block-size", o`calc(100dvh - ${j("--en-space-8")})`)}; }
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
function mn(e) {
	return S`
    <dialog class=${e.surfaceClass} part=${e.surfacePart ?? "surface"} data-placement=${e.placement}
      aria-labelledby="en-overlay-heading" closedby=${e.closedBy}
      inert @beforetoggle=${It} @cancel=${e.cancel} @close=${e.close}
      @pointerdown=${e.pointerDown} @pointerup=${e.pointerUp}
      @pointercancel=${e.pointerCancel} @keydown=${e.keyDown}>
      <div class="en-overlay-header" part="header">
        <h2 class="en-heading-small" id="en-overlay-heading" part="heading"><slot name="label">${e.label}</slot></h2>
        ${e.dismissible ? S`
          <en-button class="en-overlay-close" variant="ghost" icon-only size="inherit"
            exportparts="control:close" @click=${e.dismiss}>
            <en-icon slot="prefix" name="close" size="inherit"></en-icon>
            <span slot="label">${e.closeLabel}</span>
          </en-button>
        ` : null}
      </div>
      <div class="en-overlay-body" part="body">${e.body ?? S`<slot></slot>`}</div>
      ${e.footer === T ? T : S`<div class="en-overlay-footer" part="footer">${e.footer ?? S`<slot name="footer"></slot>`}</div>`}
    </dialog>`;
}
//#endregion
//#region ../design-system/packages/elements/dist/internal/id-reference.js
function hn(e) {
	let t = e.getRootNode();
	return (t.nodeType === 9 || t.nodeType === 11 && "host" in t) && "getElementById" in t ? t : null;
}
var gn = /* @__PURE__ */ new WeakMap(), _n = class {
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
			i || (i = !0, n.delete(t), !n.size && this.subscribers.get(e) === n && (this.subscribers.delete(e), this.resolved.delete(e)), this.subscribers.size || (this.observer?.disconnect(), gn.get(this.root) === this && gn.delete(this.root)));
		};
	}
};
function vn(e, t, n) {
	if (!e || !t) return n(null), () => {};
	if (!(e.nodeType === 9 ? e : e.ownerDocument)?.defaultView?.MutationObserver) return n(e.getElementById(t)), () => {};
	let r = gn.get(e);
	return r || gn.set(e, r = new _n(e)), r.subscribe(t, n);
}
//#endregion
//#region ../design-system/packages/elements/dist/dialog/trigger-controller.js
var yn = class {
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
		let e = hn(this.host), t = typeof this.options.id() == "string" ? this.options.id() : "";
		(!this.#n || e !== this.#e || t !== this.#t) && (this.#n?.(), this.#n = void 0, this.#e = e, this.#t = t, this.#n = vn(e, t, this.accept)), this.sync();
	}
	hostDisconnected() {
		this.#n?.(), this.#n = void 0, this.#e = null, this.#t = "", this.detach();
	}
	accept = (e) => {
		let t = this.host.isConnected && e?.namespaceURI === "http://www.w3.org/1999/xhtml" && (e.localName === "button" || e.localName === "en-button") ? e : null;
		t !== this.#r && (this.detach(), this.#r = t, t && (this.#i = Object.fromEntries(["aria-haspopup", "aria-expanded"].map((e) => [e, t.getAttribute(e)])), t.addEventListener("click", this.click), this.sync()));
	};
	click = (e) => {
		let t = this.#r, n = () => !(!this.host.isConnected || !t?.isConnected || t !== this.#r || this.options.id() !== this.#t || hn(this.host) !== this.#e || this.#e?.getElementById(this.#t) !== t || t.disabled || t.loading || t.matches(":disabled,[aria-disabled=\"true\"]"));
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
function bn(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
	return t;
}
function xn(e) {
	if (!e?.isConnected || e.matches(":disabled, [hidden], [aria-disabled=\"true\"]")) return;
	let t = e;
	for (; t;) {
		if ("inert" in t && (t.inert || t.hidden)) return;
		t = t.parentNode ?? ("host" in t ? t.host : null);
	}
	e.getClientRects().length && e.focus({ preventScroll: !0 });
}
function Sn(e, t) {
	for (; t;) {
		if (t === e) return !0;
		t = "assignedSlot" in t && t.assignedSlot || t.parentNode || ("host" in t ? t.host : null);
	}
	return !1;
}
//#endregion
//#region ../design-system/packages/elements/dist/define/dialog.js
H(customElements, {
	tagName: "en-dialog",
	elementClass: class extends A {
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
			z,
			tt,
			on,
			pn
		];
		#e = !1;
		#t = 0;
		#n = 0;
		#r = 0;
		#i = !1;
		#a = null;
		#o = null;
		#s = null;
		#c = new yn(this, {
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
			super(), this.for = "", this.label = "", this.closeLabel = "Close", this.dismissible = !0, this.presentation = "dialog", this.responsiveQuery = fn;
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
				return W(this, {
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
			let t = this.responsiveQuery.trim() || fn;
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
					let t = bn(this.ownerDocument);
					this.#o = t && "focus" in t ? t : null;
					let n = this.#s;
					this.#s = null, this.#a = n?.revision === this.#n && n.element.isConnected ? n.element : this.#o, U(e, !0), e.showModal(), this.#i = !0;
				} else if (!this.open && e.open) {
					let t = bn(this.ownerDocument), n = t === this || Sn(e, t);
					this.#i = !1, e.close(), U(e, !1), n && xn(this.#a), this.#a = null, this.#o = null;
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
			this.#i = !1, this.dialog && U(this.dialog, !1), this.open = !1;
			let e = bn(this.ownerDocument);
			(e === this.#o || e === this.ownerDocument.body || e === this.dialog) && xn(this.#a), this.#a = null, this.#o = null;
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
			return mn(this.dialogView);
		}
	},
	dependencies: [{
		tagName: "en-button",
		elementClass: wt
	}, {
		tagName: "en-icon",
		elementClass: Pt
	}]
});
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/selection-children.js
var Cn = "data-en-selection-children", wn = "en-selection-", Tn = {
	select: "en-select-option",
	segmented: "en-segmented-item"
}, En = (e) => e.replace(/[\t\n\f\r ]+/g, " ").replace(/^ | $/g, "");
function Dn(e) {
	return /^en-selection-(?:ssr|client)-(?:0|[1-9]\d*)$/.test(e);
}
function On(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
	return Object.freeze(t.map((t) => {
		let i = t.attributes, a = (e) => Object.prototype.hasOwnProperty.call(i, e);
		if (t.tagName !== Tn[e]) throw TypeError(`Expected direct ${Tn[e]} children.`);
		if (!t.key || r.has(t.key)) throw TypeError("Repeated or missing selection child key.");
		if (r.add(t.key), !a("value") || e === "segmented" && i.value === "") throw TypeError(`${Tn[e]} requires an explicit ${e === "segmented" ? "nonempty " : ""}value.`);
		if (n.has(i.value)) throw TypeError("Selection child values must be unique.");
		if (n.add(i.value), a("selected") || a("checked")) throw TypeError("Selection children do not own selected or checked state; set the parent value instead.");
		if (a("slot") && !(e === "segmented" && Dn(i.slot))) throw TypeError("Selection child slot attributes are reserved for internal label projection.");
		if (i.hidden?.toLowerCase() === "until-found") throw TypeError("Selection children do not support hidden=until-found.");
		if (e === "segmented" && (t.interactive || kn(t.tagName, i))) throw TypeError("Segmented labels must contain noninteractive content only.");
		if (e === "segmented" && (a("inert") || i["aria-hidden"]?.toLowerCase() === "true")) throw TypeError("Segmented label roots must not be inert or aria-hidden; use hidden to make a choice unavailable.");
		return Object.freeze({
			key: t.key,
			value: i.value,
			label: e === "select" ? En(t.text) || En(i.label ?? "") : "",
			disabled: a("disabled"),
			hidden: a("hidden")
		});
	}));
}
function kn(e, t) {
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
var An = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Mn = class {
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
		if (this.#e = e, this.#t = t, An.has(e)) throw TypeError("Only one selection child controller can own a host.");
		An.set(e, this), e.addController(this);
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
		let e = this.#e.getAttribute(Cn);
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
		this.#s && (this.#s = !1, this.#e.removeAttribute(Cn)), this.refresh();
	}
	hostDisconnected() {
		this.#a?.disconnect();
		for (let [e, t] of this.#r) this.#d(e, t);
	}
	#u(e, t) {
		jn.set(e, this), this.#r.set(e, t), e.getAttribute("slot") !== t && e.setAttribute("slot", t);
	}
	#d(e, t) {
		jn.get(e) === this && (e.getAttribute("slot") === t && e.removeAttribute("slot"), jn.delete(e)), this.#r.delete(e);
	}
	#f() {
		return [...this.#e.children ?? []].filter((e) => e.localName === Tn[this.#t]);
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
				if (r !== void 0 && jn.get(e) === this) {
					if (n.slot !== r) throw TypeError("Do not replace or remove an internally owned selection child slot.");
					delete n.slot;
				}
				let i = this.#t === "segmented" && [...e.querySelectorAll("*")].some((e) => kn(e.localName, Object.fromEntries([...e.attributes].map((e) => [e.name, e.value]))));
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
				items: On(this.#t, t),
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
			let r = `${wn}${e.items[n].key}`;
			this.#u(t, r);
		}), JSON.stringify(e) !== JSON.stringify(this.#o) && (this.#o = e, this.#e.requestUpdate());
	}
}, Nn = Object.defineProperty, Pn = (e, t, n) => t in e ? Nn(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Fn = (e, t, n) => (Pn(e, typeof t == "symbol" ? t : t + "", n), n), In = (e, t, n) => {
	if (!t.has(e)) throw TypeError("Cannot " + n);
}, Ln = (e, t) => {
	if (Object(t) !== t) throw TypeError("Cannot use the \"in\" operator on this value");
	return e.has(t);
}, Rn = (e, t, n) => {
	if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, zn = (e, t, n) => (In(e, t, "access private method"), n);
function Bn(e, t) {
	return Object.is(e, t);
}
var q = null, J = !1, Vn = 1, Hn = /* @__PURE__ */ Symbol("SIGNAL");
function Y(e) {
	let t = q;
	return q = e, t;
}
function Un() {
	return q;
}
function Wn() {
	return J;
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
	if (J) throw Error(typeof ngDevMode < "u" && ngDevMode ? "Assertion error: signal read during notification phase" : "");
	if (q === null) return;
	q.consumerOnSignalRead(e);
	let t = q.nextProducerIndex++;
	if (X(q), t < q.producerNode.length && q.producerNode[t] !== e && rr(q)) {
		let e = q.producerNode[t];
		nr(e, q.producerIndexOfThis[t]);
	}
	q.producerNode[t] !== e && (q.producerNode[t] = e, q.producerIndexOfThis[t] = rr(q) ? tr(e, q, t) : 0), q.producerLastReadVersion[t] = e.version;
}
function qn() {
	Vn++;
}
function Jn(e) {
	if (e.dirty || e.lastCleanEpoch !== Vn) {
		if (!e.producerMustRecompute(e) && !er(e)) {
			e.dirty = !1, e.lastCleanEpoch = Vn;
			return;
		}
		e.producerRecomputeValue(e), e.dirty = !1, e.lastCleanEpoch = Vn;
	}
}
function Yn(e) {
	if (e.liveConsumerNode === void 0) return;
	let t = J;
	J = !0;
	try {
		for (let t of e.liveConsumerNode) t.dirty || Zn(t);
	} finally {
		J = t;
	}
}
function Xn() {
	return q?.consumerAllowSignalWrites !== !1;
}
function Zn(e) {
	var t;
	e.dirty = !0, Yn(e), (t = e.consumerMarkedDirty) == null || t.call(e.wrapper ?? e);
}
function Qn(e) {
	return e && (e.nextProducerIndex = 0), Y(e);
}
function $n(e, t) {
	if (Y(t), e && e.producerNode !== void 0 && e.producerIndexOfThis !== void 0 && e.producerLastReadVersion !== void 0) {
		if (rr(e)) for (let t = e.nextProducerIndex; t < e.producerNode.length; t++) nr(e.producerNode[t], e.producerIndexOfThis[t]);
		for (; e.producerNode.length > e.nextProducerIndex;) e.producerNode.pop(), e.producerLastReadVersion.pop(), e.producerIndexOfThis.pop();
	}
}
function er(e) {
	X(e);
	for (let t = 0; t < e.producerNode.length; t++) {
		let n = e.producerNode[t], r = e.producerLastReadVersion[t];
		if (r !== n.version || (Jn(n), r !== n.version)) return !0;
	}
	return !1;
}
function tr(e, t, n) {
	var r;
	if (ir(e), X(e), e.liveConsumerNode.length === 0) {
		(r = e.watched) == null || r.call(e.wrapper);
		for (let t = 0; t < e.producerNode.length; t++) e.producerIndexOfThis[t] = tr(e.producerNode[t], e, t);
	}
	return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function nr(e, t) {
	var n;
	if (ir(e), X(e), typeof ngDevMode < "u" && ngDevMode && t >= e.liveConsumerNode.length) throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);
	if (e.liveConsumerNode.length === 1) {
		(n = e.unwatched) == null || n.call(e.wrapper);
		for (let t = 0; t < e.producerNode.length; t++) nr(e.producerNode[t], e.producerIndexOfThis[t]);
	}
	let r = e.liveConsumerNode.length - 1;
	if (e.liveConsumerNode[t] = e.liveConsumerNode[r], e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[r], e.liveConsumerNode.length--, e.liveConsumerIndexOfThis.length--, t < e.liveConsumerNode.length) {
		let n = e.liveConsumerIndexOfThis[t], r = e.liveConsumerNode[t];
		X(r), r.producerIndexOfThis[n] = t;
	}
}
function rr(e) {
	return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function X(e) {
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
	return n[Hn] = t, n;
}
var sr = /* @__PURE__ */ Symbol("UNSET"), cr = /* @__PURE__ */ Symbol("COMPUTING"), lr = /* @__PURE__ */ Symbol("ERRORED"), ur = {
	...Gn,
	value: sr,
	dirty: !0,
	error: null,
	equal: Bn,
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
	return n[Hn] = t, n;
}
function hr() {
	return Kn(this), this.value;
}
function gr(e, t) {
	Xn() || pr(), e.equal.call(e.wrapper, e.value, t) || (e.value = t, vr(e));
}
var _r = {
	...Gn,
	equal: Bn,
	value: void 0
};
function vr(e) {
	e.version++, qn(), Yn(e);
}
var Z = Symbol("node"), Q;
((e) => {
	var t, n, r, i;
	class a {
		constructor(r, i = {}) {
			Rn(this, n), Fn(this, t);
			let a = mr(r)[Hn];
			if (this[Z] = a, a.wrapper = this, i) {
				let t = i.equals;
				t && (a.equal = t), a.watched = i[e.subtle.watched], a.unwatched = i[e.subtle.unwatched];
			}
		}
		get() {
			if (!(0, e.isState)(this)) throw TypeError("Wrong receiver type for Signal.State.prototype.get");
			return hr.call(this[Z]);
		}
		set(t) {
			if (!(0, e.isState)(this)) throw TypeError("Wrong receiver type for Signal.State.prototype.set");
			if (Wn()) throw Error("Writes to signals not permitted during Watcher callback");
			let n = this[Z];
			gr(n, t);
		}
	}
	t = Z, n = /* @__PURE__ */ new WeakSet(), e.isState = (e) => typeof e == "object" && Ln(n, e), e.State = a;
	class o {
		constructor(t, n) {
			Rn(this, i), Fn(this, r);
			let a = or(t)[Hn];
			if (a.consumerAllowSignalWrites = !0, this[Z] = a, a.wrapper = this, n) {
				let t = n.equals;
				t && (a.equal = t), a.watched = n[e.subtle.watched], a.unwatched = n[e.subtle.unwatched];
			}
		}
		get() {
			if (!(0, e.isComputed)(this)) throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");
			return ar(this[Z]);
		}
	}
	r = Z, i = /* @__PURE__ */ new WeakSet(), e.isComputed = (e) => typeof e == "object" && Ln(i, e), e.Computed = o, ((t) => {
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
				Rn(this, r), Rn(this, i), Fn(this, n);
				let t = Object.create(Gn);
				t.wrapper = this, t.consumerMarkedDirty = e, t.consumerIsAlwaysLive = !0, t.consumerAllowSignalWrites = !1, t.producerNode = [], this[Z] = t;
			}
			watch(...t) {
				if (!(0, e.isWatcher)(this)) throw TypeError("Called unwatch without Watcher receiver");
				zn(this, i, a).call(this, t);
				let n = this[Z];
				n.dirty = !1;
				let r = Y(n);
				for (let e of t) Kn(e[Z]);
				Y(r);
			}
			unwatch(...t) {
				if (!(0, e.isWatcher)(this)) throw TypeError("Called unwatch without Watcher receiver");
				zn(this, i, a).call(this, t);
				let n = this[Z];
				X(n);
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
				return this[Z].producerNode.filter((e) => e.dirty).map((e) => e.wrapper);
			}
		}
		n = Z, r = /* @__PURE__ */ new WeakSet(), i = /* @__PURE__ */ new WeakSet(), a = function(t) {
			for (let n of t) if (!(0, e.isComputed)(n) && !(0, e.isState)(n)) throw TypeError("Called watch/unwatch without a Computed or State argument");
		}, e.isWatcher = (e) => Ln(r, e), t.Watcher = d;
		function f() {
			return Un()?.wrapper;
		}
		t.currentComputed = f, t.watched = Symbol("watched"), t.unwatched = Symbol("unwatched");
	})(e.subtle ||= {});
})(Q ||= {});
//#endregion
//#region ../design-system/packages/primitives/dist/state/value.js
function yr(e, t = {}) {
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
	let r = new Q.Computed(e, { equals: n }), i = r.get(), a = async () => {
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
	}, o = new Q.subtle.Watcher(() => a?.());
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
    --_en-text-control-block-size: ${lt()};
  }
  .en-option, .en-tab, .en-accordion-trigger {
    min-inline-size: ${j("--en-size-target-min")};
    min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-min")});
    padding-block: ${j("--en-space-control-block")};
    padding-inline: ${j("--en-space-control-inline")};
    color: ${M("--en-option-color", j("--en-color-text"))};
    font: inherit;
    text-align: start;
    overflow-wrap: break-word;
    cursor: pointer;
  }
  .en-option {
    display: flex;
    align-items: center;
    gap: ${j("--en-space-icon-label")};
    border-radius: ${M("--en-option-radius", j("--en-radius-control"))};
    background: ${M("--en-option-background", j("--en-color-surface"))};
  }
  .en-option[data-active] { background: ${M("--en-option-background", j("--en-color-surface-subtle"))}; }
  @media (hover: hover) { .en-option:hover { background: ${M("--en-option-background", j("--en-color-surface-subtle"))}; } }
  .en-option[aria-selected='true'], .en-option[aria-checked='true'], .en-option[data-selected] {
    background: ${M("--en-option-background", j("--en-color-selected"))};
    font-weight: ${j("--en-font-label-strong-weight")};
  }
  .en-option[aria-disabled='true'] { color: ${j("--en-color-text-muted")}; cursor: default; }
  .en-listbox, .en-tree { display: flex; flex-direction: column; gap: ${j("--en-space-1")}; min-inline-size: 0; }
  .en-tree-group { padding-inline-start: ${j("--en-space-4")}; }
  .en-choice-group, .en-rating, .en-toolbar, .en-segmented { display: flex; align-items: center; flex-wrap: wrap; gap: ${j("--en-space-actions")}; min-inline-size: 0; }
  .en-choice-group[data-orientation='vertical'], .en-choice-group[aria-orientation='vertical'] { flex-direction: column; align-items: stretch; }
  .en-choice-group > slot, .en-rating > slot, .en-toolbar > slot, .en-segmented > slot { display: contents; }
  .en-rating-item, .en-rating-clear, .en-segmented-item {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-inline-size: ${j("--en-size-target-min")};
    min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-min")});
    border: ${j("--en-border-width")} solid transparent;
    border-radius: ${j("--en-radius-control")};
    color: ${j("--en-color-text")};
    cursor: pointer;
    overflow-wrap: break-word;
  }
  .en-rating-values {
    display: flex;
    flex-wrap: wrap;
    gap: ${j("--en-space-0-5")};
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  /* Preserve each target instead of squeezing stars to keep a row on one line. */
  .en-rating-item {
    --_en-rating-target-min: ${j("--en-size-target-min")};
    --_en-rating-target-size: max(${j("--en-size-control-min")}, var(--_en-rating-target-min), calc(${j("--en-size-icon")} + 2 * ${j("--en-space-control-block")} + 2 * ${j("--en-border-width")}));
    flex: 0 0 auto;
    inline-size: var(--_en-rating-target-size);
    block-size: var(--_en-rating-target-size);
    padding: ${j("--en-space-control-block")};
    border-radius: ${M("--en-rating-star-radius", j("--en-radius-control"))};
  }
  .en-rating-clear { max-inline-size: 100%; }
  .en-rating-clear, .en-segmented-item { padding: ${j("--en-space-control-block")} ${j("--en-space-control-inline")}; }
  .en-rating-clear { color: ${j("--en-color-text-muted")}; }
  .en-rating-clear:has(:checked) { background: ${j("--en-color-selected")}; color: ${j("--en-color-action-text")}; border-color: ${j("--en-color-accent-border")}; }
  .en-rating-star { font-size: ${j("--en-size-icon")}; line-height: 1; color: ${j("--en-color-text-muted")}; }
  .en-rating-star[data-filled] { color: ${j("--en-color-action-text")}; }
  .en-rating-item:has(:disabled), .en-rating-clear:has(:disabled), .en-segmented-item[data-disabled] { cursor: default; color: ${j("--en-color-text-muted")}; }
  .en-rating-item:has(:disabled) .en-rating-star { color: ${j("--en-color-text-muted")}; }
  ${I(o`.en-rating-item:has(:focus-visible), .en-rating-clear:has(:focus-visible), .en-segmented-item:has(:focus-visible)`)}
  .en-segmented-control { display: flex; align-items: stretch; flex-wrap: wrap; gap: ${j("--en-space-0-5")}; min-inline-size: 0; min-block-size: var(--_en-text-control-block-size); padding: ${ct}; border: ${j("--en-border-width")} solid ${j("--en-color-line")}; border-radius: ${M("--en-control-radius", j("--en-radius-control"))}; background: ${j("--en-color-surface-subtle")}; }
  .en-segmented-item {
    flex: 1 1 auto;
    /* The shared control height includes the frame; each label keeps its target floor. */
    min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${B}), ${j("--en-size-target-min")});
    padding-block: max(0px, calc(${j("--en-space-control-block")} - ${B}));
    border-radius: max(0px, ${M("--en-control-radius", j("--en-radius-control"))} - ${B});
    text-align: center;
  }
  .en-segmented-item[data-selected] { background: ${j("--en-color-surface")}; border-color: ${j("--en-color-boundary")}; color: ${j("--en-color-action-text")}; font-weight: ${j("--en-font-label-strong-weight")}; }
  @media (hover: hover) { .en-segmented-item:not([data-disabled]):hover { background: ${j("--en-color-selected")}; } }
  .en-segmented-item[data-disabled] { color: ${j("--en-color-text-muted")}; }
  .en-segmented-label { min-inline-size: 0; }
  .en-tabs { min-inline-size: 0; isolation: isolate; }
  .en-tab-list { position: relative; display: flex; flex-wrap: wrap; gap: ${j("--en-space-1")}; min-inline-size: 0; border-block-end: ${j("--en-border-width")} solid ${j("--en-color-line")}; }
  .en-tab-list > slot { display: contents; }
  /* Raise focus paint within the tabs, including over following rows and panels.
     Slotted hosts and native tabs are flex items; their z-index needs no positioning. */
  .en-tab-list:focus-within { z-index: 1; }
  .en-tab-list > slot::slotted(:focus-within), .en-tab-list > .en-tab:focus-within { z-index: 1; }
  .en-tab-list[aria-orientation='vertical'], .en-tab-list[data-orientation='vertical'] { flex-direction: column; border-block-end: 0; border-inline-end: ${j("--en-border-width")} solid ${j("--en-color-line")}; }
  .en-tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${j("--en-space-icon-label")};
    border: 0;
    border-block-end: ${j("--en-size-tab-indicator")} solid ${j("--en-color-line")};
    background: ${M("--en-tab-background", j("--en-color-surface"))};
    color: ${M("--en-tab-color", j("--en-color-text"))};
  }
  @media (hover: hover) { .en-tab:hover { background: ${M("--en-tab-background", j("--en-color-surface-subtle"))}; } }
  .en-tab[aria-selected='true'], :host([role='tab'][aria-selected='true']) .en-tab {
    color: ${M("--en-tab-color", j("--en-color-action-text"))};
    border-block-end-color: ${j("--en-color-action")};
    background: ${M("--en-tab-background", j("--en-color-selected"))};
    font-weight: ${j("--en-font-label-strong-weight")};
  }
  .en-tab[aria-disabled='true'], :host([role='tab'][aria-disabled='true']) .en-tab { color: ${j("--en-color-text-muted")}; cursor: default; }
  .en-tab-panel { min-inline-size: 0; padding-block: ${j("--en-space-4")}; }
  .en-accordion { display: flex; flex-direction: column; min-inline-size: 0; isolation: isolate; }
  .en-accordion > slot { display: contents; }
  /* Keep the focused item's outline above adjacent surfaces within this group.
     Slotted hosts are flex items, so no positioned containing block is needed. */
  .en-accordion > slot::slotted(:focus-within) { z-index: 1; }
  .en-accordion-item { border-block-end: ${j("--en-border-width")} solid ${j("--en-color-line")}; min-inline-size: 0; }
  .en-accordion-trigger { display: flex; align-items: center; justify-content: space-between; gap: ${j("--en-space-icon-label")}; inline-size: 100%; border: 0; background: ${j("--en-color-surface")}; font-weight: ${j("--en-font-label-strong-weight")}; }
  @media (hover: hover) { .en-accordion-trigger:hover { background: ${j("--en-color-surface-subtle")}; } }
  .en-accordion-trigger[aria-disabled='true'], .en-accordion-trigger:disabled { color: ${j("--en-color-text-muted")}; cursor: default; }
  .en-accordion-panel { padding-block: ${j("--en-space-3")} ${j("--en-space-4")}; padding-inline: ${j("--en-space-control-inline")}; }
  ${Dt}
  @media (any-pointer: coarse) {
    .en-option, .en-tab, .en-accordion-trigger, .en-rating-item, .en-rating-clear { min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-touch")}); }
    .en-segmented-control, .en-segmented-item { --_en-text-control-block-size: ${lt(!0)}; }
    .en-segmented-item { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${B}), ${j("--en-size-target-touch")}); }
    .en-rating-item { --_en-rating-target-min: ${j("--en-size-target-touch")}; min-inline-size: ${j("--en-size-target-touch")}; }
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
	return S`<div id="description" part="description" class="en-description"><slot name="description"><span class="en-description-fallback">${e || T}</span></slot></div>`;
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
}, { I: Mr } = Pe, Nr = (e) => e, Pr = () => document.createComment(""), Fr = (e, t, n) => {
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
}, $ = (e, t, n = e) => (e._$AI(t, n), e), Ir = {}, Lr = (e, t = Ir) => e._$AH = t, Rr = (e) => e._$AH, zr = (e) => {
	e._$AR(), e._$AA.remove();
}, Br = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	for (let i = t; i <= n; i++) r.set(e[i], i);
	return r;
}, Vr = Ar(class extends jr {
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
		let i = Rr(e), { values: a, keys: o } = this.dt(t, n, r);
		if (!Array.isArray(i)) return this.ut = o, a;
		let s = this.ut ??= [], c = [], l, u, d = 0, f = i.length - 1, p = 0, m = a.length - 1;
		for (; d <= f && p <= m;) if (i[d] === null) d++;
		else if (i[f] === null) f--;
		else if (s[d] === o[p]) c[p] = $(i[d], a[p]), d++, p++;
		else if (s[f] === o[m]) c[m] = $(i[f], a[m]), f--, m--;
		else if (s[d] === o[m]) c[m] = $(i[d], a[m]), Fr(e, c[m + 1], i[d]), d++, m--;
		else if (s[f] === o[p]) c[p] = $(i[f], a[p]), Fr(e, i[d], i[f]), f--, p++;
		else if (l === void 0 && (l = Br(o, p, m), u = Br(s, d, f)), l.has(s[d])) {
			if (l.has(s[f])) {
				let t = u.get(o[p]), n = t === void 0 ? null : i[t];
				if (n === null) {
					let t = Fr(e, i[d]);
					$(t, a[p]), c[p] = t;
				} else c[p] = $(n, a[p]), Fr(e, i[d], n), i[t] = null;
				p++;
			} else zr(i[f]), f--;
		} else zr(i[d]), d++;
		for (; p <= m;) {
			let t = Fr(e, c[m + 1]);
			$(t, a[p]), c[p++] = t;
		}
		for (; d <= f;) {
			let e = i[d++];
			e !== null && zr(e);
		}
		return this.ut = o, Lr(e, c), w;
	}
});
//#endregion
//#region ../design-system/packages/elements/dist/segmented-control/template.js
function Hr(e, t, n, r, i, a) {
	return S`<fieldset class="en-fieldset en-field" part="field" ?disabled=${e.disabled}
      aria-describedby=${e.error ? "description child-error" : "description"}>
    <legend class="en-legend en-label" part="label"><slot name="label">${e.label}</slot></legend>
    <div class="en-segmented-control" part="options" @click=${a} @keydown=${n} @focusin=${r} @focusout=${i}>
      ${Vr(e.items, (e) => e.key ?? e.value, (n) => S`
        <label class="en-segmented-item" part="option" data-selected=${n.value === e.value ? "" : T}
          data-disabled=${e.disabled || n.disabled ? "" : T} ?hidden=${n.hidden}>
          <input class="en-segmented-input en-sr-only" part="control" type="radio" name=${n.disabled || n.hidden ? T : "choice"}
            value=${n.value} ?checked=${n.value === e.value} ?disabled=${e.disabled || n.disabled || n.hidden}
            ?required=${e.required} tabindex=${!e.disabled && !n.disabled && !n.hidden && n.value === e.tabValue ? 0 : -1}
            @change=${t}>
          <span class="en-segmented-label" part="option-label" ?data-rich=${n.projected}>${n.projected ? S`<slot name=${`${wn}${n.key}`}></slot>` : n.label || T}</span>
        </label>`)}
    </div>
    ${Or(e.description)}
    ${e.error ? S`<p id="child-error" class="en-error" part="error" role="status">${e.error}</p>` : T}
  </fieldset>`;
}
//#endregion
//#region ../design-system/packages/elements/dist/segmented-control/pointer.js
function Ur(e, t, n) {
	let r, i = Infinity;
	for (let a = 0; a < n.length; a++) {
		let o = n[a], s = Math.max(o.left - e, 0, e - o.right), c = Math.max(o.top - t, 0, t - o.bottom), l = s * s + c * c;
		l < i && (i = l, r = a);
	}
	return r;
}
//#endregion
//#region ../design-system/packages/elements/dist/segmented-control/element.js
var Wr = class extends A {
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
		z,
		R,
		dn,
		Er
	];
	static formAssociated = !0;
	model = yr("");
	childOptions = new Mn(this, "segmented");
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
		!this.effectiveDisabled && n && !n.disabled && !n.hidden && W(this, {
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
		}), n = Ur(e.clientX, e.clientY, t.map(({ rect: e }) => e)), r = n === void 0 ? void 0 : t[n]?.control;
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
		return Hr({
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
}, Gr = class extends k {
	staticStyles = new Ue(this);
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
}, Kr = class extends Gr {
	static styles = o`:host { display: contents; } :host([hidden]) { display: none !important; }`;
	render() {
		return S`<slot>${this.label || T}</slot>`;
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/segmented-control.js
H(customElements, {
	tagName: "en-segmented-control",
	elementClass: Wr,
	dependencies: [{
		tagName: "en-segmented-item",
		elementClass: Kr
	}]
});
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/editing-controller.js
var qr = class {
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
		return zt(this.#e, i), this.#t.onInput?.(i), this.#t.model.view.get().revision === r;
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
function Jr(e = "") {
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
var Yr = class extends A {
	static formAssociated = !0;
	static styles = [
		z,
		dn,
		on,
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
	model = Jr();
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
		return this.visibleError ? "true" : T;
	}
	renderControlFrame() {
		return S`<div class="en-field-focus-frame" part="focus-frame">${this.renderControl()}</div>`;
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
		this.isDisabled || W(this, {
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
		return S`<div class="en-field" part="field" data-invalid=${this.visibleError ? "" : T}>
      <label class="en-label" part="label" for="control"><slot name="label">${this.label}</slot></label>
      ${this.renderControlFrame()}
      ${Or(this.description)}
      ${this.visibleError ? S`<div class="en-error" part="error" id="error">${this.visibleError}</div>` : T}
    </div>`;
	}
}, Xr = class extends Yr {
	static properties = {
		...Yr.properties,
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
	editing = new qr(this, {
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
H(customElements, {
	tagName: "en-search-input",
	elementClass: class extends Xr {
		renderControl() {
			return S`<input id="control" class="en-input" part="control" type="search"
      name=${this.name} value=${this.defaultControlValue} placeholder=${this.placeholder || T}
      autocomplete=${this.autocomplete || T} inputmode=${this.inputMode || T}
      ?disabled=${this.isDisabled} ?readonly=${this.readOnly} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}>`;
		}
	}
});
//#endregion
//#region ../design-system/packages/styles/dist/links.js
var Zr = L(o`
  ${Qt}
  ${$t}
  ${F(o`:where(.en-link)`)}
  @media (forced-colors: active) {
    ${en}
    ${vt(o`.en-link[aria-disabled='true']`)}
  }
`), Qr = (e) => S`
  <a
    class="en-link"
    part="control"
    href=${V(e.href)}
    target=${V(e.target)}
    rel=${V(e.rel || (e.target === "_blank" ? "noopener" : void 0))}
    download=${V(e.download)}
  ><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></a>
`;
//#endregion
//#region ../design-system/packages/elements/dist/define/link.js
H(customElements, {
	tagName: "en-link",
	elementClass: class extends A {
		static properties = {
			href: { type: String },
			target: { type: String },
			rel: { type: String },
			download: { type: String }
		};
		static styles = [
			z,
			nt,
			Zr
		];
		constructor() {
			super(), this.href = void 0, this.target = void 0, this.rel = "", this.download = void 0;
		}
		focus(e) {
			this.renderRoot.querySelector("a")?.focus(e);
		}
		render() {
			return Qr(this);
		}
	}
});
//#endregion
//#region ../design-system/packages/styles/dist/internal/breadcrumbs.js
var $r = o`
  .en-breadcrumbs__list, .en-recipe-breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${j("--en-space-2")};
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .en-breadcrumbs__item, .en-recipe-breadcrumbs li {
    display: inline-flex;
    align-items: center;
    gap: ${j("--en-space-2")};
    min-inline-size: 0;
  }
`, ei = L(o`
  .en-section-nav, .en-breadcrumbs, .en-navigation-link, .en-breadcrumbs__label, .en-skip-link {
    box-sizing: border-box;
    min-inline-size: 0;
    max-inline-size: 100%;
    font: ${j("--en-font-ui-weight")} ${j("--en-font-ui-size")} / ${j("--en-font-ui-line-height")} ${j("--en-font-ui-family")};
    text-align: start;
    overflow-wrap: anywhere;
  }
  .en-section-nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${M("--en-navigation-gap", j("--en-space-1"))};
    margin-block: ${j("--en-space-6")};
    padding-block: ${j("--en-space-2")};
    background: ${M("--en-navigation-background", j("--en-color-canvas"))};
    border-block-end: ${j("--en-border-width")} solid ${M("--en-navigation-border-color", j("--en-color-line"))};
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
    min-inline-size: ${j("--en-size-target-min")};
    min-block-size: ${j("--en-size-target-min")};
    color: ${M("--en-navigation-color", j("--en-color-text-muted"))};
    text-decoration: underline;
    text-underline-offset: ${j("--en-border-width")};
  }
  .en-navigation-link[aria-current]:not([aria-current='false']) {
    color: ${M("--en-navigation-active-color", j("--en-color-text"))};
  }
  @media (hover: hover) { .en-navigation-link:hover {
    color: ${M("--en-navigation-active-color", j("--en-color-text"))};
  } }
  .en-navigation-link[aria-current]:not([aria-current='false']), .en-breadcrumbs__label[aria-current]:not([aria-current='false']) {
    font-weight: ${j("--en-font-label-strong-weight")};
  }
  .en-section-nav .en-navigation-link {
    min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-min")});
    padding-block: ${j("--en-space-2")};
    padding-inline: ${j("--en-space-control-inline")};
    border-radius: ${M("--en-navigation-link-radius", j("--en-radius-pill"))};
    text-decoration: none;
  }
  .en-section-nav .en-navigation-link[aria-current]:not([aria-current='false']) {
    background: ${M("--en-navigation-active-background", j("--en-color-surface-subtle"))};
  }
  @media (hover: hover) { .en-section-nav .en-navigation-link:hover {
    background: ${M("--en-navigation-active-background", j("--en-color-surface-subtle"))};
  } }
  ${$r}
  .en-breadcrumbs { color: ${M("--en-navigation-color", j("--en-color-text-muted"))}; }
  .en-breadcrumbs__list { gap: ${M("--en-navigation-gap", j("--en-space-2"))}; }
  .en-breadcrumbs__item { max-inline-size: 100%; gap: ${M("--en-navigation-gap", j("--en-space-2"))}; }
  .en-breadcrumbs__label { color: ${M("--en-navigation-active-color", j("--en-color-text"))}; }
  .en-breadcrumbs__separator { flex: none; color: ${j("--en-color-text-muted")}; }
  .en-navigation-target {
    scroll-margin-block-start: calc(var(--en-navigation-height, 0px) + var(--en-navigation-offset, 0px) + ${j("--en-space-6")});
  }
  .en-skip-link {
    position: fixed;
    inset-block-start: ${j("--en-space-3")};
    inset-inline-start: ${j("--en-space-3")};
    z-index: calc(var(--en-navigation-z-index, 20) + 1);
    max-inline-size: calc(100% - 2 * ${j("--en-space-3")});
    min-inline-size: ${j("--en-size-target-min")};
    min-block-size: ${j("--en-size-target-min")};
    padding: ${j("--en-space-3")};
    border: ${j("--en-border-width")} solid ${j("--en-color-boundary")};
    border-radius: ${j("--en-radius-control")};
    background: ${j("--en-color-surface")};
    color: ${j("--en-color-text")};
    text-decoration: underline;
    text-underline-offset: ${j("--en-border-width")};
    transform: translateY(calc(-100% - 2 * ${j("--en-space-3")}));
    transition: none;
  }
  .en-skip-link:focus { transform: none; }
  ${F(o`:where(.en-navigation-link, .en-skip-link)`)}
  @media (any-pointer: coarse) {
    .en-navigation-link, .en-skip-link {
      min-inline-size: ${j("--en-size-target-touch")};
      min-block-size: ${j("--en-size-target-touch")};
    }
    .en-section-nav .en-navigation-link { min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-touch")}); }
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
`), ti = o`
  :host { margin-block: ${j("--en-space-6")}; }
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
    color: ${M("--en-navigation-color", j("--en-color-text-muted"))};
  }
  ::slotted(a[href]:not([hidden])) {
    /* Preserve authored inline phrasing and spaces while centering a single line. */
    display: inline-block;
    min-inline-size: ${j("--en-size-target-min")};
    min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-min")});
    padding-block: max(${j("--en-space-2")}, calc((max(${j("--en-size-control-min")}, ${j("--en-size-target-min")}) - 1lh) / 2));
    padding-inline: ${j("--en-space-control-inline")};
    border-radius: ${M("--en-navigation-link-radius", j("--en-radius-pill"))};
    text-decoration: none;
  }
  ::slotted(a:not([href])), ::slotted(a[href][aria-current]:not([aria-current='false'])) {
    color: ${M("--en-navigation-active-color", j("--en-color-text"))};
  }
  @media (hover: hover) { ::slotted(a[href]:hover) {
    color: ${M("--en-navigation-active-color", j("--en-color-text"))};
  } }
  ::slotted(a[href][aria-current]:not([aria-current='false'])) {
    background: ${M("--en-navigation-active-background", j("--en-color-surface-subtle"))};
  }
  @media (hover: hover) { ::slotted(a[href]:hover) {
    background: ${M("--en-navigation-active-background", j("--en-color-surface-subtle"))};
  } }
  ::slotted(a[aria-current]:not([aria-current='false'])) {
    font-weight: ${j("--en-font-label-strong-weight")};
  }
  ${et(o`::slotted(a[href])`)}
  ${I(o`::slotted(a[href]:focus-visible)`)}
  @media (any-pointer: coarse) {
    ::slotted(a[href]:not([hidden])) {
      min-inline-size: ${j("--en-size-target-touch")};
      min-block-size: max(${j("--en-size-control-min")}, ${j("--en-size-target-touch")});
      padding-block: max(${j("--en-space-2")}, calc((max(${j("--en-size-control-min")}, ${j("--en-size-target-touch")}) - 1lh) / 2));
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
    min-inline-size: ${j("--en-size-target-min")};
    min-block-size: ${j("--en-size-target-min")};
    padding-block: max(0px, calc((${j("--en-size-target-min")} - 1lh) / 2));
    color: ${M("--en-navigation-color", j("--en-color-text-muted"))};
    text-decoration: underline;
    text-underline-offset: ${j("--en-border-width")};
  }
  ::slotted(span), ::slotted(a:not([href])), ::slotted(a[href][aria-current]:not([aria-current='false'])) {
    color: ${M("--en-navigation-active-color", j("--en-color-text"))};
  }
  @media (hover: hover) { ::slotted(a[href]:hover) {
    color: ${M("--en-navigation-active-color", j("--en-color-text"))};
  } }
  ::slotted(a[aria-current]:not([aria-current='false'])),
  ::slotted(span[aria-current]:not([aria-current='false'])) {
    font-weight: ${j("--en-font-label-strong-weight")};
  }
  ::slotted([hidden]:not([hidden='until-found' i])),
  .en-breadcrumbs__item[hidden], .en-breadcrumbs__diagnostic[hidden] {
    display: none !important;
  }
  ${et(o`::slotted(a[href])`)}
  ${I(o`::slotted(a[href]:focus-visible)`)}
  @media (any-pointer: coarse) {
    ::slotted(a[href]:not([hidden])) {
      min-inline-size: ${j("--en-size-target-touch")};
      min-block-size: ${j("--en-size-target-touch")};
      padding-block: max(0px, calc((${j("--en-size-target-touch")} - 1lh) / 2));
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
function ni({ label: e }) {
	return S`
		<nav class="en-section-nav" part="base" aria-label=${e}>
			<slot></slot>
		</nav>
	`;
}
//#endregion
//#region ../design-system/packages/elements/dist/define/navigation.js
H(customElements, {
	tagName: "en-navigation",
	elementClass: class extends A {
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
			z,
			R,
			ei,
			ti
		];
		constructor() {
			super(), this.label = "Navigation", this.sticky = !1;
		}
		render() {
			return ni({ label: this.label });
		}
	}
});
//#endregion
//#region ../design-system/packages/styles/dist/surfaces.js
var ri = L(o`
  .en-panel, .en-card {
    min-inline-size: 0;
    padding: ${M("--en-surface-padding", j("--en-space-panel"))};
    border: ${j("--en-border-width")} solid ${M("--en-surface-border-color", j("--en-color-line"))};
    border-radius: ${M("--en-surface-radius", j("--en-radius-container"))};
    background: ${M("--en-surface-background", j("--en-color-surface"))};
    color: ${M("--en-surface-color", j("--en-color-text"))};
  }
  .en-card {
    display: flex;
    flex-direction: column;
    gap: ${j("--en-space-4")};
    background: ${M("--en-surface-background", M("--en-card-background", j("--en-color-surface")))};
  }
  .en-card__header, .en-card__body, .en-card__footer { min-inline-size: 0; }
  .en-card__header { font-weight: ${j("--en-font-label-strong-weight")}; }
  .en-card__footer { display: flex; align-items: center; flex-wrap: wrap; gap: ${j("--en-space-actions")}; }
  .en-card__footer > slot { display: contents; }
  .en-inset-surface {
    border-radius: ${M("--en-inset-child-radius", o`max(0px, ${M("--en-inset-outer-radius", j("--en-radius-container"))} - ${M("--en-inset-distance", j("--en-space-2"))})`)};
  }
  .en-divider { margin: 0; border: 0; border-block-start: ${j("--en-border-width")} solid ${M("--en-divider-color", j("--en-color-line"))}; }
  .en-divider[aria-orientation='vertical'] { align-self: stretch; border-block-start: 0; border-inline-start: ${j("--en-border-width")} solid ${M("--en-divider-color", j("--en-color-line"))}; }
  @media (forced-colors: active) {
    .en-panel, .en-card { color: CanvasText; background: Canvas; border-color: CanvasText; }
    .en-divider { border-color: CanvasText; }
  }
`);
L(o`
  .en-stack { display: flex; flex-direction: column; gap: ${M("--en-stack-gap", j("--en-space-rows"))}; min-inline-size: 0; }
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
  .en-stack[data-gap='small'] { gap: ${M("--en-stack-gap", j("--en-space-2"))}; }
  .en-stack[data-gap='medium'] { gap: ${M("--en-stack-gap", j("--en-space-4"))}; }
  .en-stack[data-gap='large'] { gap: ${M("--en-stack-gap", j("--en-space-6"))}; }
  .en-cluster { display: flex; align-items: center; flex-wrap: wrap; gap: ${M("--en-cluster-gap", j("--en-space-actions"))}; min-inline-size: 0; }
  .en-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, ${M("--en-grid-item-min", j("--en-layout-form-max"))}), 1fr)); gap: ${M("--en-grid-gap", j("--en-space-4"))}; min-inline-size: 0; }
  .en-stack > slot, .en-cluster > slot, .en-grid > slot { display: contents; }
  .en-stack > *, .en-cluster > *, .en-grid > * { min-inline-size: 0; }
  .en-scroll-region { min-inline-size: 0; min-block-size: 0; overflow: auto; scrollbar-gutter: stable; }
  .en-query-region { container-type: inline-size; container-name: en-layout; }
  .en-split-view {
    display: grid;
    isolation: isolate;
    grid-template-columns: minmax(0, calc((100% - max(${j("--en-size-splitter")}, ${j("--en-size-target-min")})) * var(--en-split-ratio, 0.5))) max(${j("--en-size-splitter")}, ${j("--en-size-target-min")}) minmax(0, 1fr);
    min-inline-size: 0;
    min-block-size: 0;
  }
  .en-split-view[data-orientation='vertical'] { grid-template-columns: minmax(0, 1fr); grid-template-rows: minmax(0, calc((100% - max(${j("--en-size-splitter")}, ${j("--en-size-target-min")})) * var(--en-split-ratio, 0.5))) max(${j("--en-size-splitter")}, ${j("--en-size-target-min")}) minmax(0, 1fr); }
  .en-split-pane { min-inline-size: 0; min-block-size: 0; overflow: auto; }
  .en-split-handle { display: block; min-inline-size: 0; min-block-size: 0; }
  /* Raise only the focused grid item above adjacent pane surfaces, locally. */
  .en-split-view > .en-split-handle:focus-visible { z-index: 1; }
  .en-split-separator { display: grid; place-items: center; inline-size: 100%; block-size: 100%; min-inline-size: 0; min-block-size: 0; cursor: col-resize; }
  .en-split-grip { inline-size: ${j("--en-border-width")}; block-size: 100%; background: ${j("--en-color-boundary")}; }
  .en-split-separator[data-orientation='horizontal'], :host([role='separator'][aria-orientation='horizontal']) .en-split-separator { cursor: row-resize; }
  .en-split-separator[data-orientation='horizontal'] .en-split-grip, :host([role='separator'][aria-orientation='horizontal']) .en-split-grip { inline-size: 100%; block-size: ${j("--en-border-width")}; }
  ${Dt}
  @media (forced-colors: active) { .en-split-grip { background: ButtonText; } }
`);
//#endregion
//#region ../design-system/packages/primitives/dist/interactions/optional-slot-presence.js
var ii = "data-en-optional-slots";
function ai(e, t) {
	let n = e.getAttribute(ii);
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
var oi = (e) => S`
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
H(customElements, {
	tagName: "en-card",
	elementClass: class extends A {
		static properties = {
			hasHeader: { state: !0 },
			hasFooter: { state: !0 }
		};
		static styles = [
			z,
			R,
			ri
		];
		constructor() {
			super(), this.hasHeader = !0, this.hasFooter = !0;
		}
		willUpdate() {
			if (this.hasUpdated) return;
			let e = ai(this, ["header", "footer"]);
			e && (this.hasHeader = e.header, this.hasFooter = e.footer);
		}
		firstUpdated() {
			this.removeAttribute(ii);
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
			return oi({
				hasHeader: this.hasHeader,
				hasFooter: this.hasFooter,
				onSlotChange: this.onSlotChange
			});
		}
	}
});
//#endregion
//#region ../design-system/packages/elements/dist/select/element.js
var si = class extends Yr {
	static styles = [...Yr.styles, un];
	static properties = {
		...Yr.properties,
		items: { attribute: !1 }
	};
	childOptions = new Mn(this, "select");
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
		this.model.setDraft(t), zt(this, {
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
		let e = this.effectiveItems, t = !this.hasUpdated && this.childOptions.initialValue !== void 0 ? this.childOptions.initialValue : this.defaultControlValue, n = !this.placeholder && e.length > 0 && !e.some((e) => e.value === t);
		return S`<select id="control" class="en-select" part="control" name=${this.name}
      ?disabled=${this.isDisabled} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}
      @input=${this.onInput} @change=${this.onChange}>
      ${this.placeholder ? S`<option part="option" value="" ?selected=${t === ""}>${this.placeholder}</option>` : n ? S`<option value="" selected disabled hidden></option>` : T}
      ${Vr(e, (e) => e.key ?? e.value, (e) => S`<option part="option" value=${e.value} ?selected=${e.value === t}
        ?disabled=${e.disabled} ?hidden=${e.hidden}>${e.label || T}</option>`)}
    </select>`;
	}
};
//#endregion
//#region ../design-system/packages/elements/dist/define/select.js
H(customElements, {
	tagName: "en-select",
	elementClass: si,
	dependencies: [{
		tagName: "en-select-option",
		elementClass: class extends Gr {
			render() {
				return T;
			}
		}
	}]
});
//#endregion
//#region ../design-system/packages/elements/dist/checkbox/template.js
function ci(e, t) {
	return S`<div part="field" class="en-field">
    <label class="en-choice" part="label">
      <input part="control" class=${`en-${e.kind}`} type=${e.kind === "radio" ? "radio" : "checkbox"}
        role=${e.kind === "switch" ? "switch" : T}
        ?checked=${e.checked} aria-checked=${e.kind === "checkbox" && e.indeterminate ? "mixed" : T}
        .value=${e.value} ?disabled=${e.disabled} ?required=${e.required}
        tabindex=${e.tabIndex} aria-labelledby="label-text" aria-describedby="description"
        @change=${t}>
      <span class="en-label" id="label-text" part="label-text"><slot name="label"><slot>${e.label}</slot></slot></span>
    </label>
    ${Or(e.description)}
  </div>`;
}
//#endregion
//#region ../design-system/packages/elements/dist/checkbox/choice-base.js
var li = class extends A {
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
		z,
		R,
		on,
		dn,
		Er
	];
	static formAssociated = !0;
	checkedModel = yr(!1);
	signalController = new Cr(this, () => this.checkedModel.view.get());
	authorRevision = 0;
	formDisabled = !1;
	internals = typeof this.attachInternals == "function" ? this.attachInternals() : void 0;
	formController = this.internals ? new Tr(this, {
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
		W(this, {
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
		return ci({
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
}, ui = class extends li {
	static properties = {
		...li.properties,
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
H(customElements, {
	tagName: "en-checkbox",
	elementClass: ui
});
//#endregion
//#region ../design-system/packages/elements/dist/accordion-item/template.js
function di(e, t) {
	return S`
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
function fi(e = !1) {
	let t = yr(e);
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
H(customElements, {
	tagName: "en-accordion-item",
	elementClass: class extends A {
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
			z,
			R,
			Er
		];
		model = fi(!1);
		authorRevision = 0;
		presentedOpen = !1;
		owner;
		constructor() {
			super(), this.value = "", this.label = "", this.disabled = !1, this.headingLevel = 3, new Cr(this, () => this.model.view.get());
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
				W(this, {
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
			return di({
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
var pi = (e) => S`
  <div class="en-alert" part="base" data-variant=${e.variant} ?hidden=${!e.open}>
    <span class="en-alert__icon" part="icon" aria-hidden="true" ?hidden=${!e.hasIcon}><slot name="icon" @slotchange=${e.onIconChange}></slot></span>
    <div class="en-alert__content" part="content" role="status" aria-atomic="true"><slot></slot></div>
    ${e.dismissible ? S`
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
H(customElements, {
	tagName: "en-alert",
	elementClass: class extends A {
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
			z,
			R,
			on,
			At,
			jt
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
				W(this, {
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
			let e = ai(this, ["icon"]);
			e && (this.hasIcon = e.icon);
		}
		firstUpdated() {
			this.removeAttribute(ii);
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
			return pi({
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

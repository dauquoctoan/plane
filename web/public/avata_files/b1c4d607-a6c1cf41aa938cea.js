(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6337],
  {
    34309: function (t, e, r) {
      var i = r(30816).Buffer,
        n = r(14284);
      !(function () {
        var e,
          a,
          o,
          f,
          s,
          h,
          d,
          c = {
            7160: function (t, e, r) {
              (e.bignum = r(711)),
                (e.define = r(495).define),
                (e.base = r(853)),
                (e.constants = r(7335)),
                (e.decoders = r(6701)),
                (e.encoders = r(3418));
            },
            495: function (t, e, r) {
              var i = r(7160),
                n = r(3782);
              function a(t, e) {
                (this.name = t),
                  (this.body = e),
                  (this.decoders = {}),
                  (this.encoders = {});
              }
              (e.define = function (t, e) {
                return new a(t, e);
              }),
                (a.prototype._createNamed = function (t) {
                  var e;
                  try {
                    e = r(6144).runInThisContext(
                      '(function ' +
                        this.name +
                        '(entity) {\n  this._initNamed(entity);\n})'
                    );
                  } catch (t) {
                    e = function (t) {
                      this._initNamed(t);
                    };
                  }
                  return (
                    n(e, t),
                    (e.prototype._initNamed = function (e) {
                      t.call(this, e);
                    }),
                    new e(this)
                  );
                }),
                (a.prototype._getDecoder = function (t) {
                  return (
                    (t = t || 'der'),
                    this.decoders.hasOwnProperty(t) ||
                      (this.decoders[t] = this._createNamed(i.decoders[t])),
                    this.decoders[t]
                  );
                }),
                (a.prototype.decode = function (t, e, r) {
                  return this._getDecoder(e).decode(t, r);
                }),
                (a.prototype._getEncoder = function (t) {
                  return (
                    (t = t || 'der'),
                    this.encoders.hasOwnProperty(t) ||
                      (this.encoders[t] = this._createNamed(i.encoders[t])),
                    this.encoders[t]
                  );
                }),
                (a.prototype.encode = function (t, e, r) {
                  return this._getEncoder(e).encode(t, r);
                });
            },
            6483: function (t, e, r) {
              var i = r(3782),
                n = r(853).Reporter,
                a = r(4300).Buffer;
              function o(t, e) {
                if ((n.call(this, e), !a.isBuffer(t))) {
                  this.error('Input not Buffer');
                  return;
                }
                (this.base = t), (this.offset = 0), (this.length = t.length);
              }
              function f(t, e) {
                if (Array.isArray(t))
                  (this.length = 0),
                    (this.value = t.map(function (t) {
                      return (
                        t instanceof f || (t = new f(t, e)),
                        (this.length += t.length),
                        t
                      );
                    }, this));
                else if ('number' == typeof t) {
                  if (!(0 <= t && t <= 255))
                    return e.error('non-byte EncoderBuffer value');
                  (this.value = t), (this.length = 1);
                } else if ('string' == typeof t)
                  (this.value = t), (this.length = a.byteLength(t));
                else {
                  if (!a.isBuffer(t))
                    return e.error('Unsupported type: ' + typeof t);
                  (this.value = t), (this.length = t.length);
                }
              }
              i(o, n),
                (e.C = o),
                (o.prototype.save = function () {
                  return {
                    offset: this.offset,
                    reporter: n.prototype.save.call(this),
                  };
                }),
                (o.prototype.restore = function (t) {
                  var e = new o(this.base);
                  return (
                    (e.offset = t.offset),
                    (e.length = this.offset),
                    (this.offset = t.offset),
                    n.prototype.restore.call(this, t.reporter),
                    e
                  );
                }),
                (o.prototype.isEmpty = function () {
                  return this.offset === this.length;
                }),
                (o.prototype.readUInt8 = function (t) {
                  return this.offset + 1 <= this.length
                    ? this.base.readUInt8(this.offset++, !0)
                    : this.error(t || 'DecoderBuffer overrun');
                }),
                (o.prototype.skip = function (t, e) {
                  if (!(this.offset + t <= this.length))
                    return this.error(e || 'DecoderBuffer overrun');
                  var r = new o(this.base);
                  return (
                    (r._reporterState = this._reporterState),
                    (r.offset = this.offset),
                    (r.length = this.offset + t),
                    (this.offset += t),
                    r
                  );
                }),
                (o.prototype.raw = function (t) {
                  return this.base.slice(
                    t ? t.offset : this.offset,
                    this.length
                  );
                }),
                (e.R = f),
                (f.prototype.join = function (t, e) {
                  return (
                    t || (t = new a(this.length)),
                    e || (e = 0),
                    0 === this.length ||
                      (Array.isArray(this.value)
                        ? this.value.forEach(function (r) {
                            r.join(t, e), (e += r.length);
                          })
                        : ('number' == typeof this.value
                            ? (t[e] = this.value)
                            : 'string' == typeof this.value
                              ? t.write(this.value, e)
                              : a.isBuffer(this.value) && this.value.copy(t, e),
                          (e += this.length))),
                    t
                  );
                });
            },
            853: function (t, e, r) {
              (e.Reporter = r(1293).b),
                (e.DecoderBuffer = r(6483).C),
                (e.EncoderBuffer = r(6483).R),
                (e.Node = r(9374));
            },
            9374: function (t, e, r) {
              var i = r(853).Reporter,
                n = r(853).EncoderBuffer,
                a = r(853).DecoderBuffer,
                o = r(3523),
                f = [
                  'seq',
                  'seqof',
                  'set',
                  'setof',
                  'objid',
                  'bool',
                  'gentime',
                  'utctime',
                  'null_',
                  'enum',
                  'int',
                  'objDesc',
                  'bitstr',
                  'bmpstr',
                  'charstr',
                  'genstr',
                  'graphstr',
                  'ia5str',
                  'iso646str',
                  'numstr',
                  'octstr',
                  'printstr',
                  't61str',
                  'unistr',
                  'utf8str',
                  'videostr',
                ],
                s = [
                  'key',
                  'obj',
                  'use',
                  'optional',
                  'explicit',
                  'implicit',
                  'def',
                  'choice',
                  'any',
                  'contains',
                ].concat(f);
              function h(t, e) {
                var r = {};
                (this._baseState = r),
                  (r.enc = t),
                  (r.parent = e || null),
                  (r.children = null),
                  (r.tag = null),
                  (r.args = null),
                  (r.reverseArgs = null),
                  (r.choice = null),
                  (r.optional = !1),
                  (r.any = !1),
                  (r.obj = !1),
                  (r.use = null),
                  (r.useDecoder = null),
                  (r.key = null),
                  (r.default = null),
                  (r.explicit = null),
                  (r.implicit = null),
                  (r.contains = null),
                  r.parent || ((r.children = []), this._wrap());
              }
              t.exports = h;
              var d = [
                'enc',
                'parent',
                'children',
                'tag',
                'args',
                'reverseArgs',
                'choice',
                'optional',
                'any',
                'obj',
                'use',
                'alteredUse',
                'key',
                'default',
                'explicit',
                'implicit',
                'contains',
              ];
              (h.prototype.clone = function () {
                var t = this._baseState,
                  e = {};
                d.forEach(function (r) {
                  e[r] = t[r];
                });
                var r = new this.constructor(e.parent);
                return (r._baseState = e), r;
              }),
                (h.prototype._wrap = function () {
                  var t = this._baseState;
                  s.forEach(function (e) {
                    this[e] = function () {
                      var r = new this.constructor(this);
                      return t.children.push(r), r[e].apply(r, arguments);
                    };
                  }, this);
                }),
                (h.prototype._init = function (t) {
                  var e = this._baseState;
                  o(null === e.parent),
                    t.call(this),
                    (e.children = e.children.filter(function (t) {
                      return t._baseState.parent === this;
                    }, this)),
                    o.equal(
                      e.children.length,
                      1,
                      'Root node can have only one child'
                    );
                }),
                (h.prototype._useArgs = function (t) {
                  var e = this._baseState,
                    r = t.filter(function (t) {
                      return t instanceof this.constructor;
                    }, this);
                  (t = t.filter(function (t) {
                    return !(t instanceof this.constructor);
                  }, this)),
                    0 !== r.length &&
                      (o(null === e.children),
                      (e.children = r),
                      r.forEach(function (t) {
                        t._baseState.parent = this;
                      }, this)),
                    0 !== t.length &&
                      (o(null === e.args),
                      (e.args = t),
                      (e.reverseArgs = t.map(function (t) {
                        if ('object' != typeof t || t.constructor !== Object)
                          return t;
                        var e = {};
                        return (
                          Object.keys(t).forEach(function (r) {
                            r == (0 | r) && (r |= 0), (e[t[r]] = r);
                          }),
                          e
                        );
                      })));
                }),
                [
                  '_peekTag',
                  '_decodeTag',
                  '_use',
                  '_decodeStr',
                  '_decodeObjid',
                  '_decodeTime',
                  '_decodeNull',
                  '_decodeInt',
                  '_decodeBool',
                  '_decodeList',
                  '_encodeComposite',
                  '_encodeStr',
                  '_encodeObjid',
                  '_encodeTime',
                  '_encodeNull',
                  '_encodeInt',
                  '_encodeBool',
                ].forEach(function (t) {
                  h.prototype[t] = function () {
                    throw Error(
                      t +
                        ' not implemented for encoding: ' +
                        this._baseState.enc
                    );
                  };
                }),
                f.forEach(function (t) {
                  h.prototype[t] = function () {
                    var e = this._baseState,
                      r = Array.prototype.slice.call(arguments);
                    return (
                      o(null === e.tag), (e.tag = t), this._useArgs(r), this
                    );
                  };
                }),
                (h.prototype.use = function (t) {
                  o(t);
                  var e = this._baseState;
                  return o(null === e.use), (e.use = t), this;
                }),
                (h.prototype.optional = function () {
                  return (this._baseState.optional = !0), this;
                }),
                (h.prototype.def = function (t) {
                  var e = this._baseState;
                  return (
                    o(null === e.default),
                    (e.default = t),
                    (e.optional = !0),
                    this
                  );
                }),
                (h.prototype.explicit = function (t) {
                  var e = this._baseState;
                  return (
                    o(null === e.explicit && null === e.implicit),
                    (e.explicit = t),
                    this
                  );
                }),
                (h.prototype.implicit = function (t) {
                  var e = this._baseState;
                  return (
                    o(null === e.explicit && null === e.implicit),
                    (e.implicit = t),
                    this
                  );
                }),
                (h.prototype.obj = function () {
                  var t = this._baseState,
                    e = Array.prototype.slice.call(arguments);
                  return (t.obj = !0), 0 !== e.length && this._useArgs(e), this;
                }),
                (h.prototype.key = function (t) {
                  var e = this._baseState;
                  return o(null === e.key), (e.key = t), this;
                }),
                (h.prototype.any = function () {
                  return (this._baseState.any = !0), this;
                }),
                (h.prototype.choice = function (t) {
                  var e = this._baseState;
                  return (
                    o(null === e.choice),
                    (e.choice = t),
                    this._useArgs(
                      Object.keys(t).map(function (e) {
                        return t[e];
                      })
                    ),
                    this
                  );
                }),
                (h.prototype.contains = function (t) {
                  var e = this._baseState;
                  return o(null === e.use), (e.contains = t), this;
                }),
                (h.prototype._decode = function (t, e) {
                  var r,
                    i = this._baseState;
                  if (null === i.parent)
                    return t.wrapResult(i.children[0]._decode(t, e));
                  var n = i.default,
                    o = !0,
                    f = null;
                  if ((null !== i.key && (f = t.enterKey(i.key)), i.optional)) {
                    var s = null;
                    if (
                      (null !== i.explicit
                        ? (s = i.explicit)
                        : null !== i.implicit
                          ? (s = i.implicit)
                          : null !== i.tag && (s = i.tag),
                      null !== s || i.any)
                    ) {
                      if (((o = this._peekTag(t, s, i.any)), t.isError(o)))
                        return o;
                    } else {
                      var h = t.save();
                      try {
                        null === i.choice
                          ? this._decodeGeneric(i.tag, t, e)
                          : this._decodeChoice(t, e),
                          (o = !0);
                      } catch (t) {
                        o = !1;
                      }
                      t.restore(h);
                    }
                  }
                  if ((i.obj && o && (r = t.enterObject()), o)) {
                    if (null !== i.explicit) {
                      var d = this._decodeTag(t, i.explicit);
                      if (t.isError(d)) return d;
                      t = d;
                    }
                    var c = t.offset;
                    if (null === i.use && null === i.choice) {
                      if (i.any) var h = t.save();
                      var u = this._decodeTag(
                        t,
                        null !== i.implicit ? i.implicit : i.tag,
                        i.any
                      );
                      if (t.isError(u)) return u;
                      i.any ? (n = t.raw(h)) : (t = u);
                    }
                    if (
                      (e &&
                        e.track &&
                        null !== i.tag &&
                        e.track(t.path(), c, t.length, 'tagged'),
                      e &&
                        e.track &&
                        null !== i.tag &&
                        e.track(t.path(), t.offset, t.length, 'content'),
                      i.any ||
                        (n =
                          null === i.choice
                            ? this._decodeGeneric(i.tag, t, e)
                            : this._decodeChoice(t, e)),
                      t.isError(n))
                    )
                      return n;
                    if (
                      (i.any ||
                        null !== i.choice ||
                        null === i.children ||
                        i.children.forEach(function (r) {
                          r._decode(t, e);
                        }),
                      i.contains && ('octstr' === i.tag || 'bitstr' === i.tag))
                    ) {
                      var l = new a(n);
                      n = this._getUse(
                        i.contains,
                        t._reporterState.obj
                      )._decode(l, e);
                    }
                  }
                  return (
                    i.obj && o && (n = t.leaveObject(r)),
                    null !== i.key && (null !== n || !0 === o)
                      ? t.leaveKey(f, i.key, n)
                      : null !== f && t.exitKey(f),
                    n
                  );
                }),
                (h.prototype._decodeGeneric = function (t, e, r) {
                  var i = this._baseState;
                  if ('seq' === t || 'set' === t) return null;
                  if ('seqof' === t || 'setof' === t)
                    return this._decodeList(e, t, i.args[0], r);
                  if (/str$/.test(t)) return this._decodeStr(e, t, r);
                  if ('objid' === t && i.args)
                    return this._decodeObjid(e, i.args[0], i.args[1], r);
                  if ('objid' === t) return this._decodeObjid(e, null, null, r);
                  if ('gentime' === t || 'utctime' === t)
                    return this._decodeTime(e, t, r);
                  if ('null_' === t) return this._decodeNull(e, r);
                  if ('bool' === t) return this._decodeBool(e, r);
                  else if ('objDesc' === t) return this._decodeStr(e, t, r);
                  else if ('int' === t || 'enum' === t)
                    return this._decodeInt(e, i.args && i.args[0], r);
                  return null !== i.use
                    ? this._getUse(i.use, e._reporterState.obj)._decode(e, r)
                    : e.error('unknown tag: ' + t);
                }),
                (h.prototype._getUse = function (t, e) {
                  var r = this._baseState;
                  return (
                    (r.useDecoder = this._use(t, e)),
                    o(null === r.useDecoder._baseState.parent),
                    (r.useDecoder = r.useDecoder._baseState.children[0]),
                    r.implicit !== r.useDecoder._baseState.implicit &&
                      ((r.useDecoder = r.useDecoder.clone()),
                      (r.useDecoder._baseState.implicit = r.implicit)),
                    r.useDecoder
                  );
                }),
                (h.prototype._decodeChoice = function (t, e) {
                  var r = this._baseState,
                    i = null,
                    n = !1;
                  return (Object.keys(r.choice).some(function (a) {
                    var o = t.save(),
                      f = r.choice[a];
                    try {
                      var s = f._decode(t, e);
                      if (t.isError(s)) return !1;
                      (i = { type: a, value: s }), (n = !0);
                    } catch (e) {
                      return t.restore(o), !1;
                    }
                    return !0;
                  }, this),
                  n)
                    ? i
                    : t.error('Choice not matched');
                }),
                (h.prototype._createEncoderBuffer = function (t) {
                  return new n(t, this.reporter);
                }),
                (h.prototype._encode = function (t, e, r) {
                  var i = this._baseState;
                  if (null === i.default || i.default !== t) {
                    var n = this._encodeValue(t, e, r);
                    if (void 0 !== n && !this._skipDefault(n, e, r)) return n;
                  }
                }),
                (h.prototype._encodeValue = function (t, e, r) {
                  var n,
                    a = this._baseState;
                  if (null === a.parent)
                    return a.children[0]._encode(t, e || new i());
                  var n = null;
                  if (((this.reporter = e), a.optional && void 0 === t)) {
                    if (null === a.default) return;
                    t = a.default;
                  }
                  var o = null,
                    f = !1;
                  if (a.any) n = this._createEncoderBuffer(t);
                  else if (a.choice) n = this._encodeChoice(t, e);
                  else if (a.contains)
                    (o = this._getUse(a.contains, r)._encode(t, e)), (f = !0);
                  else if (a.children)
                    (o = a.children
                      .map(function (r) {
                        if ('null_' === r._baseState.tag)
                          return r._encode(null, e, t);
                        if (null === r._baseState.key)
                          return e.error('Child should have a key');
                        var i = e.enterKey(r._baseState.key);
                        if ('object' != typeof t)
                          return e.error(
                            'Child expected, but input is not object'
                          );
                        var n = r._encode(t[r._baseState.key], e, t);
                        return e.leaveKey(i), n;
                      }, this)
                      .filter(function (t) {
                        return t;
                      })),
                      (o = this._createEncoderBuffer(o));
                  else if ('seqof' === a.tag || 'setof' === a.tag) {
                    if (!(a.args && 1 === a.args.length))
                      return e.error('Too many args for : ' + a.tag);
                    if (!Array.isArray(t))
                      return e.error('seqof/setof, but data is not Array');
                    var s = this.clone();
                    (s._baseState.implicit = null),
                      (o = this._createEncoderBuffer(
                        t.map(function (r) {
                          var i = this._baseState;
                          return this._getUse(i.args[0], t)._encode(r, e);
                        }, s)
                      ));
                  } else
                    null !== a.use
                      ? (n = this._getUse(a.use, r)._encode(t, e))
                      : ((o = this._encodePrimitive(a.tag, t)), (f = !0));
                  if (!a.any && null === a.choice) {
                    var h = null !== a.implicit ? a.implicit : a.tag,
                      d = null === a.implicit ? 'universal' : 'context';
                    null === h
                      ? null === a.use &&
                        e.error('Tag could be omitted only for .use()')
                      : null === a.use &&
                        (n = this._encodeComposite(h, f, d, o));
                  }
                  return (
                    null !== a.explicit &&
                      (n = this._encodeComposite(a.explicit, !1, 'context', n)),
                    n
                  );
                }),
                (h.prototype._encodeChoice = function (t, e) {
                  var r = this._baseState,
                    i = r.choice[t.type];
                  return (
                    i ||
                      o(
                        !1,
                        t.type +
                          ' not found in ' +
                          JSON.stringify(Object.keys(r.choice))
                      ),
                    i._encode(t.value, e)
                  );
                }),
                (h.prototype._encodePrimitive = function (t, e) {
                  var r = this._baseState;
                  if (/str$/.test(t)) return this._encodeStr(e, t);
                  if ('objid' === t && r.args)
                    return this._encodeObjid(e, r.reverseArgs[0], r.args[1]);
                  if ('objid' === t) return this._encodeObjid(e, null, null);
                  if ('gentime' === t || 'utctime' === t)
                    return this._encodeTime(e, t);
                  if ('null_' === t) return this._encodeNull();
                  if ('int' === t || 'enum' === t)
                    return this._encodeInt(e, r.args && r.reverseArgs[0]);
                  if ('bool' === t) return this._encodeBool(e);
                  else if ('objDesc' === t) return this._encodeStr(e, t);
                  else throw Error('Unsupported tag: ' + t);
                }),
                (h.prototype._isNumstr = function (t) {
                  return /^[0-9 ]*$/.test(t);
                }),
                (h.prototype._isPrintstr = function (t) {
                  return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t);
                });
            },
            1293: function (t, e, r) {
              var i = r(3782);
              function n(t) {
                this._reporterState = {
                  obj: null,
                  path: [],
                  options: t || {},
                  errors: [],
                };
              }
              function a(t, e) {
                (this.path = t), this.rethrow(e);
              }
              (e.b = n),
                (n.prototype.isError = function (t) {
                  return t instanceof a;
                }),
                (n.prototype.save = function () {
                  var t = this._reporterState;
                  return { obj: t.obj, pathLen: t.path.length };
                }),
                (n.prototype.restore = function (t) {
                  var e = this._reporterState;
                  (e.obj = t.obj), (e.path = e.path.slice(0, t.pathLen));
                }),
                (n.prototype.enterKey = function (t) {
                  return this._reporterState.path.push(t);
                }),
                (n.prototype.exitKey = function (t) {
                  var e = this._reporterState;
                  e.path = e.path.slice(0, t - 1);
                }),
                (n.prototype.leaveKey = function (t, e, r) {
                  var i = this._reporterState;
                  this.exitKey(t), null !== i.obj && (i.obj[e] = r);
                }),
                (n.prototype.path = function () {
                  return this._reporterState.path.join('/');
                }),
                (n.prototype.enterObject = function () {
                  var t = this._reporterState,
                    e = t.obj;
                  return (t.obj = {}), e;
                }),
                (n.prototype.leaveObject = function (t) {
                  var e = this._reporterState,
                    r = e.obj;
                  return (e.obj = t), r;
                }),
                (n.prototype.error = function (t) {
                  var e,
                    r = this._reporterState,
                    i = t instanceof a;
                  if (
                    ((e = i
                      ? t
                      : new a(
                          r.path
                            .map(function (t) {
                              return '[' + JSON.stringify(t) + ']';
                            })
                            .join(''),
                          t.message || t,
                          t.stack
                        )),
                    !r.options.partial)
                  )
                    throw e;
                  return i || r.errors.push(e), e;
                }),
                (n.prototype.wrapResult = function (t) {
                  var e = this._reporterState;
                  return e.options.partial
                    ? { result: this.isError(t) ? null : t, errors: e.errors }
                    : t;
                }),
                i(a, Error),
                (a.prototype.rethrow = function (t) {
                  if (
                    ((this.message = t + ' at: ' + (this.path || '(shallow)')),
                    Error.captureStackTrace && Error.captureStackTrace(this, a),
                    !this.stack)
                  )
                    try {
                      throw Error(this.message);
                    } catch (t) {
                      this.stack = t.stack;
                    }
                  return this;
                });
            },
            9791: function (t, e, r) {
              var i = r(7335);
              (e.tagClass = {
                0: 'universal',
                1: 'application',
                2: 'context',
                3: 'private',
              }),
                (e.tagClassByName = i._reverse(e.tagClass)),
                (e.tag = {
                  0: 'end',
                  1: 'bool',
                  2: 'int',
                  3: 'bitstr',
                  4: 'octstr',
                  5: 'null_',
                  6: 'objid',
                  7: 'objDesc',
                  8: 'external',
                  9: 'real',
                  10: 'enum',
                  11: 'embed',
                  12: 'utf8str',
                  13: 'relativeOid',
                  16: 'seq',
                  17: 'set',
                  18: 'numstr',
                  19: 'printstr',
                  20: 't61str',
                  21: 'videostr',
                  22: 'ia5str',
                  23: 'utctime',
                  24: 'gentime',
                  25: 'graphstr',
                  26: 'iso646str',
                  27: 'genstr',
                  28: 'unistr',
                  29: 'charstr',
                  30: 'bmpstr',
                }),
                (e.tagByName = i._reverse(e.tag));
            },
            7335: function (t, e, r) {
              (e._reverse = function (t) {
                var e = {};
                return (
                  Object.keys(t).forEach(function (r) {
                    (0 | r) == r && (r |= 0), (e[t[r]] = r);
                  }),
                  e
                );
              }),
                (e.der = r(9791));
            },
            2259: function (t, e, r) {
              var i = r(3782),
                n = r(7160),
                a = n.base,
                o = n.bignum,
                f = n.constants.der;
              function s(t) {
                (this.enc = 'der'),
                  (this.name = t.name),
                  (this.entity = t),
                  (this.tree = new h()),
                  this.tree._init(t.body);
              }
              function h(t) {
                a.Node.call(this, 'der', t);
              }
              function d(t, e) {
                var r = t.readUInt8(e);
                if (t.isError(r)) return r;
                var i = f.tagClass[r >> 6],
                  n = (32 & r) == 0;
                if ((31 & r) == 31) {
                  var a = r;
                  for (r = 0; (128 & a) == 128; ) {
                    if (((a = t.readUInt8(e)), t.isError(a))) return a;
                    (r <<= 7), (r |= 127 & a);
                  }
                } else r &= 31;
                var o = f.tag[r];
                return { cls: i, primitive: n, tag: r, tagStr: o };
              }
              function c(t, e, r) {
                var i = t.readUInt8(r);
                if (t.isError(i)) return i;
                if (!e && 128 === i) return null;
                if ((128 & i) == 0) return i;
                var n = 127 & i;
                if (n > 4) return t.error('length octect is too long');
                i = 0;
                for (var a = 0; a < n; a++) {
                  i <<= 8;
                  var o = t.readUInt8(r);
                  if (t.isError(o)) return o;
                  i |= o;
                }
                return i;
              }
              (t.exports = s),
                (s.prototype.decode = function (t, e) {
                  return (
                    t instanceof a.DecoderBuffer ||
                      (t = new a.DecoderBuffer(t, e)),
                    this.tree._decode(t, e)
                  );
                }),
                i(h, a.Node),
                (h.prototype._peekTag = function (t, e, r) {
                  if (t.isEmpty()) return !1;
                  var i = t.save(),
                    n = d(t, 'Failed to peek tag: "' + e + '"');
                  return t.isError(n)
                    ? n
                    : (t.restore(i),
                      n.tag === e ||
                        n.tagStr === e ||
                        n.tagStr + 'of' === e ||
                        r);
                }),
                (h.prototype._decodeTag = function (t, e, r) {
                  var i = d(t, 'Failed to decode tag of "' + e + '"');
                  if (t.isError(i)) return i;
                  var n = c(
                    t,
                    i.primitive,
                    'Failed to get length of "' + e + '"'
                  );
                  if (t.isError(n)) return n;
                  if (
                    !r &&
                    i.tag !== e &&
                    i.tagStr !== e &&
                    i.tagStr + 'of' !== e
                  )
                    return t.error('Failed to match tag: "' + e + '"');
                  if (i.primitive || null !== n)
                    return t.skip(n, 'Failed to match body of: "' + e + '"');
                  var a = t.save(),
                    o = this._skipUntilEnd(
                      t,
                      'Failed to skip indefinite length body: "' +
                        this.tag +
                        '"'
                    );
                  return t.isError(o)
                    ? o
                    : ((n = t.offset - a.offset),
                      t.restore(a),
                      t.skip(n, 'Failed to match body of: "' + e + '"'));
                }),
                (h.prototype._skipUntilEnd = function (t, e) {
                  for (;;) {
                    var r,
                      i = d(t, e);
                    if (t.isError(i)) return i;
                    var n = c(t, i.primitive, e);
                    if (t.isError(n)) return n;
                    if (
                      ((r =
                        i.primitive || null !== n
                          ? t.skip(n)
                          : this._skipUntilEnd(t, e)),
                      t.isError(r))
                    )
                      return r;
                    if ('end' === i.tagStr) break;
                  }
                }),
                (h.prototype._decodeList = function (t, e, r, i) {
                  for (var n = []; !t.isEmpty(); ) {
                    var a = this._peekTag(t, 'end');
                    if (t.isError(a)) return a;
                    var o = r.decode(t, 'der', i);
                    if (t.isError(o) && a) break;
                    n.push(o);
                  }
                  return n;
                }),
                (h.prototype._decodeStr = function (t, e) {
                  if ('bitstr' === e) {
                    var r = t.readUInt8();
                    return t.isError(r) ? r : { unused: r, data: t.raw() };
                  }
                  if ('bmpstr' === e) {
                    var i = t.raw();
                    if (i.length % 2 == 1)
                      return t.error(
                        'Decoding of string type: bmpstr length mismatch'
                      );
                    for (var n = '', a = 0; a < i.length / 2; a++)
                      n += String.fromCharCode(i.readUInt16BE(2 * a));
                    return n;
                  }
                  if ('numstr' === e) {
                    var o = t.raw().toString('ascii');
                    return this._isNumstr(o)
                      ? o
                      : t.error(
                          'Decoding of string type: numstr unsupported characters'
                        );
                  }
                  if ('octstr' === e) return t.raw();
                  if ('objDesc' === e) return t.raw();
                  if ('printstr' === e) {
                    var f = t.raw().toString('ascii');
                    return this._isPrintstr(f)
                      ? f
                      : t.error(
                          'Decoding of string type: printstr unsupported characters'
                        );
                  }
                  if (/str$/.test(e)) return t.raw().toString();
                  else
                    return t.error(
                      'Decoding of string type: ' + e + ' unsupported'
                    );
                }),
                (h.prototype._decodeObjid = function (t, e, r) {
                  for (var i, n = [], a = 0; !t.isEmpty(); ) {
                    var o = t.readUInt8();
                    (a <<= 7),
                      (a |= 127 & o),
                      (128 & o) == 0 && (n.push(a), (a = 0));
                  }
                  128 & o && n.push(a);
                  var f = (n[0] / 40) | 0,
                    s = n[0] % 40;
                  if (((i = r ? n : [f, s].concat(n.slice(1))), e)) {
                    var h = e[i.join(' ')];
                    void 0 === h && (h = e[i.join('.')]),
                      void 0 !== h && (i = h);
                  }
                  return i;
                }),
                (h.prototype._decodeTime = function (t, e) {
                  var r = t.raw().toString();
                  if ('gentime' === e)
                    var i = 0 | r.slice(0, 4),
                      n = 0 | r.slice(4, 6),
                      a = 0 | r.slice(6, 8),
                      o = 0 | r.slice(8, 10),
                      f = 0 | r.slice(10, 12),
                      s = 0 | r.slice(12, 14);
                  else {
                    if ('utctime' !== e)
                      return t.error(
                        'Decoding ' + e + ' time is not supported yet'
                      );
                    var i = 0 | r.slice(0, 2),
                      n = 0 | r.slice(2, 4),
                      a = 0 | r.slice(4, 6),
                      o = 0 | r.slice(6, 8),
                      f = 0 | r.slice(8, 10),
                      s = 0 | r.slice(10, 12);
                    i = i < 70 ? 2e3 + i : 1900 + i;
                  }
                  return Date.UTC(i, n - 1, a, o, f, s, 0);
                }),
                (h.prototype._decodeNull = function (t) {
                  return null;
                }),
                (h.prototype._decodeBool = function (t) {
                  var e = t.readUInt8();
                  return t.isError(e) ? e : 0 !== e;
                }),
                (h.prototype._decodeInt = function (t, e) {
                  var r = new o(t.raw());
                  return e && (r = e[r.toString(10)] || r), r;
                }),
                (h.prototype._use = function (t, e) {
                  return (
                    'function' == typeof t && (t = t(e)),
                    t._getDecoder('der').tree
                  );
                });
            },
            6701: function (t, e, r) {
              (e.der = r(2259)), (e.pem = r(8527));
            },
            8527: function (t, e, r) {
              var i = r(3782),
                n = r(4300).Buffer,
                a = r(2259);
              function o(t) {
                a.call(this, t), (this.enc = 'pem');
              }
              i(o, a),
                (t.exports = o),
                (o.prototype.decode = function (t, e) {
                  for (
                    var r = t.toString().split(/[\r\n]+/g),
                      i = e.label.toUpperCase(),
                      o = /^-----(BEGIN|END) ([^-]+)-----$/,
                      f = -1,
                      s = -1,
                      h = 0;
                    h < r.length;
                    h++
                  ) {
                    var d = r[h].match(o);
                    if (null !== d && d[2] === i) {
                      if (-1 === f) {
                        if ('BEGIN' !== d[1]) break;
                        f = h;
                      } else {
                        if ('END' !== d[1]) break;
                        s = h;
                        break;
                      }
                    }
                  }
                  if (-1 === f || -1 === s)
                    throw Error('PEM section not found for: ' + i);
                  var c = r.slice(f + 1, s).join('');
                  c.replace(/[^a-z0-9\+\/=]+/gi, '');
                  var u = new n(c, 'base64');
                  return a.prototype.decode.call(this, u, e);
                });
            },
            7804: function (t, e, r) {
              var i = r(3782),
                n = r(4300).Buffer,
                a = r(7160),
                o = a.base,
                f = a.constants.der;
              function s(t) {
                (this.enc = 'der'),
                  (this.name = t.name),
                  (this.entity = t),
                  (this.tree = new h()),
                  this.tree._init(t.body);
              }
              function h(t) {
                o.Node.call(this, 'der', t);
              }
              function d(t) {
                return t < 10 ? '0' + t : t;
              }
              (t.exports = s),
                (s.prototype.encode = function (t, e) {
                  return this.tree._encode(t, e).join();
                }),
                i(h, o.Node),
                (h.prototype._encodeComposite = function (t, e, r, i) {
                  var a = (function (t, e, r, i) {
                    var n;
                    if (
                      ('seqof' === t
                        ? (t = 'seq')
                        : 'setof' === t && (t = 'set'),
                      f.tagByName.hasOwnProperty(t))
                    )
                      n = f.tagByName[t];
                    else {
                      if ('number' != typeof t || (0 | t) !== t)
                        return i.error('Unknown tag: ' + t);
                      n = t;
                    }
                    return n >= 31
                      ? i.error('Multi-octet tag encoding unsupported')
                      : (e || (n |= 32),
                        (n |= f.tagClassByName[r || 'universal'] << 6));
                  })(t, e, r, this.reporter);
                  if (i.length < 128) {
                    var o = new n(2);
                    return (
                      (o[0] = a),
                      (o[1] = i.length),
                      this._createEncoderBuffer([o, i])
                    );
                  }
                  for (var s = 1, h = i.length; h >= 256; h >>= 8) s++;
                  var o = new n(2 + s);
                  (o[0] = a), (o[1] = 128 | s);
                  for (var h = 1 + s, d = i.length; d > 0; h--, d >>= 8)
                    o[h] = 255 & d;
                  return this._createEncoderBuffer([o, i]);
                }),
                (h.prototype._encodeStr = function (t, e) {
                  if ('bitstr' === e)
                    return this._createEncoderBuffer([0 | t.unused, t.data]);
                  if ('bmpstr' === e) {
                    for (var r = new n(2 * t.length), i = 0; i < t.length; i++)
                      r.writeUInt16BE(t.charCodeAt(i), 2 * i);
                    return this._createEncoderBuffer(r);
                  }
                  return 'numstr' === e
                    ? this._isNumstr(t)
                      ? this._createEncoderBuffer(t)
                      : this.reporter.error(
                          'Encoding of string type: numstr supports only digits and space'
                        )
                    : 'printstr' === e
                      ? this._isPrintstr(t)
                        ? this._createEncoderBuffer(t)
                        : this.reporter.error(
                            'Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark'
                          )
                      : /str$/.test(e)
                        ? this._createEncoderBuffer(t)
                        : 'objDesc' === e
                          ? this._createEncoderBuffer(t)
                          : this.reporter.error(
                              'Encoding of string type: ' + e + ' unsupported'
                            );
                }),
                (h.prototype._encodeObjid = function (t, e, r) {
                  if ('string' == typeof t) {
                    if (!e)
                      return this.reporter.error(
                        'string objid given, but no values map found'
                      );
                    if (!e.hasOwnProperty(t))
                      return this.reporter.error(
                        'objid not found in values map'
                      );
                    t = e[t].split(/[\s\.]+/g);
                    for (var i = 0; i < t.length; i++) t[i] |= 0;
                  } else if (Array.isArray(t)) {
                    t = t.slice();
                    for (var i = 0; i < t.length; i++) t[i] |= 0;
                  }
                  if (!Array.isArray(t))
                    return this.reporter.error(
                      'objid() should be either array or string, got: ' +
                        JSON.stringify(t)
                    );
                  if (!r) {
                    if (t[1] >= 40)
                      return this.reporter.error('Second objid identifier OOB');
                    t.splice(0, 2, 40 * t[0] + t[1]);
                  }
                  for (var a = 0, i = 0; i < t.length; i++) {
                    var o = t[i];
                    for (a++; o >= 128; o >>= 7) a++;
                  }
                  for (
                    var f = new n(a), s = f.length - 1, i = t.length - 1;
                    i >= 0;
                    i--
                  ) {
                    var o = t[i];
                    for (f[s--] = 127 & o; (o >>= 7) > 0; )
                      f[s--] = 128 | (127 & o);
                  }
                  return this._createEncoderBuffer(f);
                }),
                (h.prototype._encodeTime = function (t, e) {
                  var r,
                    i = new Date(t);
                  return (
                    'gentime' === e
                      ? (r = [
                          d(i.getFullYear()),
                          d(i.getUTCMonth() + 1),
                          d(i.getUTCDate()),
                          d(i.getUTCHours()),
                          d(i.getUTCMinutes()),
                          d(i.getUTCSeconds()),
                          'Z',
                        ].join(''))
                      : 'utctime' === e
                        ? (r = [
                            d(i.getFullYear() % 100),
                            d(i.getUTCMonth() + 1),
                            d(i.getUTCDate()),
                            d(i.getUTCHours()),
                            d(i.getUTCMinutes()),
                            d(i.getUTCSeconds()),
                            'Z',
                          ].join(''))
                        : this.reporter.error(
                            'Encoding ' + e + ' time is not supported yet'
                          ),
                    this._encodeStr(r, 'octstr')
                  );
                }),
                (h.prototype._encodeNull = function () {
                  return this._createEncoderBuffer('');
                }),
                (h.prototype._encodeInt = function (t, e) {
                  if ('string' == typeof t) {
                    if (!e)
                      return this.reporter.error(
                        'String int or enum given, but no values map'
                      );
                    if (!e.hasOwnProperty(t))
                      return this.reporter.error(
                        "Values map doesn't contain: " + JSON.stringify(t)
                      );
                    t = e[t];
                  }
                  if ('number' != typeof t && !n.isBuffer(t)) {
                    var r = t.toArray();
                    !t.sign && 128 & r[0] && r.unshift(0), (t = new n(r));
                  }
                  if (n.isBuffer(t)) {
                    var i = t.length;
                    0 === t.length && i++;
                    var a = new n(i);
                    return (
                      t.copy(a),
                      0 === t.length && (a[0] = 0),
                      this._createEncoderBuffer(a)
                    );
                  }
                  if (t < 128) return this._createEncoderBuffer(t);
                  if (t < 256) return this._createEncoderBuffer([0, t]);
                  for (var i = 1, o = t; o >= 256; o >>= 8) i++;
                  for (var a = Array(i), o = a.length - 1; o >= 0; o--)
                    (a[o] = 255 & t), (t >>= 8);
                  return (
                    128 & a[0] && a.unshift(0),
                    this._createEncoderBuffer(new n(a))
                  );
                }),
                (h.prototype._encodeBool = function (t) {
                  return this._createEncoderBuffer(t ? 255 : 0);
                }),
                (h.prototype._use = function (t, e) {
                  return (
                    'function' == typeof t && (t = t(e)),
                    t._getEncoder('der').tree
                  );
                }),
                (h.prototype._skipDefault = function (t, e, r) {
                  var i,
                    n = this._baseState;
                  if (null === n.default) return !1;
                  var a = t.join();
                  if (
                    (void 0 === n.defaultBuffer &&
                      (n.defaultBuffer = this._encodeValue(
                        n.default,
                        e,
                        r
                      ).join()),
                    a.length !== n.defaultBuffer.length)
                  )
                    return !1;
                  for (i = 0; i < a.length; i++)
                    if (a[i] !== n.defaultBuffer[i]) return !1;
                  return !0;
                });
            },
            3418: function (t, e, r) {
              (e.der = r(7804)), (e.pem = r(1564));
            },
            1564: function (t, e, r) {
              var i = r(3782),
                n = r(7804);
              function a(t) {
                n.call(this, t), (this.enc = 'pem');
              }
              i(a, n),
                (t.exports = a),
                (a.prototype.encode = function (t, e) {
                  for (
                    var r = n.prototype.encode.call(this, t).toString('base64'),
                      i = ['-----BEGIN ' + e.label + '-----'],
                      a = 0;
                    a < r.length;
                    a += 64
                  )
                    i.push(r.slice(a, a + 64));
                  return i.push('-----END ' + e.label + '-----'), i.join('\n');
                });
            },
            711: function (t, e, r) {
              !(function (t, e) {
                'use strict';
                function i(t, e) {
                  if (!t) throw Error(e || 'Assertion failed');
                }
                function n(t, e) {
                  t.super_ = e;
                  var r = function () {};
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t);
                }
                function a(t, e, r) {
                  if (a.isBN(t)) return t;
                  (this.negative = 0),
                    (this.words = null),
                    (this.length = 0),
                    (this.red = null),
                    null !== t &&
                      (('le' === e || 'be' === e) && ((r = e), (e = 10)),
                      this._init(t || 0, e || 10, r || 'be'));
                }
                'object' == typeof t ? (t.exports = a) : (e.BN = a),
                  (a.BN = a),
                  (a.wordSize = 26);
                try {
                  s = r(4300).Buffer;
                } catch (t) {}
                function o(t, e, r) {
                  for (
                    var i = 0, n = Math.min(t.length, r), a = e;
                    a < n;
                    a++
                  ) {
                    var o = t.charCodeAt(a) - 48;
                    (i <<= 4),
                      o >= 49 && o <= 54
                        ? (i |= o - 49 + 10)
                        : o >= 17 && o <= 22
                          ? (i |= o - 17 + 10)
                          : (i |= 15 & o);
                  }
                  return i;
                }
                function f(t, e, r, i) {
                  for (
                    var n = 0, a = Math.min(t.length, r), o = e;
                    o < a;
                    o++
                  ) {
                    var f = t.charCodeAt(o) - 48;
                    (n *= i),
                      f >= 49
                        ? (n += f - 49 + 10)
                        : f >= 17
                          ? (n += f - 17 + 10)
                          : (n += f);
                  }
                  return n;
                }
                (a.isBN = function (t) {
                  return (
                    t instanceof a ||
                    (null !== t &&
                      'object' == typeof t &&
                      t.constructor.wordSize === a.wordSize &&
                      Array.isArray(t.words))
                  );
                }),
                  (a.max = function (t, e) {
                    return t.cmp(e) > 0 ? t : e;
                  }),
                  (a.min = function (t, e) {
                    return 0 > t.cmp(e) ? t : e;
                  }),
                  (a.prototype._init = function (t, e, r) {
                    if ('number' == typeof t) return this._initNumber(t, e, r);
                    if ('object' == typeof t) return this._initArray(t, e, r);
                    'hex' === e && (e = 16),
                      i(e === (0 | e) && e >= 2 && e <= 36);
                    var n = 0;
                    '-' === (t = t.toString().replace(/\s+/g, ''))[0] && n++,
                      16 === e
                        ? this._parseHex(t, n)
                        : this._parseBase(t, e, n),
                      '-' === t[0] && (this.negative = 1),
                      this.strip(),
                      'le' === r && this._initArray(this.toArray(), e, r);
                  }),
                  (a.prototype._initNumber = function (t, e, r) {
                    t < 0 && ((this.negative = 1), (t = -t)),
                      t < 67108864
                        ? ((this.words = [67108863 & t]), (this.length = 1))
                        : t < 4503599627370496
                          ? ((this.words = [
                              67108863 & t,
                              (t / 67108864) & 67108863,
                            ]),
                            (this.length = 2))
                          : (i(t < 9007199254740992),
                            (this.words = [
                              67108863 & t,
                              (t / 67108864) & 67108863,
                              1,
                            ]),
                            (this.length = 3)),
                      'le' === r && this._initArray(this.toArray(), e, r);
                  }),
                  (a.prototype._initArray = function (t, e, r) {
                    if ((i('number' == typeof t.length), t.length <= 0))
                      return (this.words = [0]), (this.length = 1), this;
                    (this.length = Math.ceil(t.length / 3)),
                      (this.words = Array(this.length));
                    for (var n, a, o = 0; o < this.length; o++)
                      this.words[o] = 0;
                    var f = 0;
                    if ('be' === r)
                      for (o = t.length - 1, n = 0; o >= 0; o -= 3)
                        (a = t[o] | (t[o - 1] << 8) | (t[o - 2] << 16)),
                          (this.words[n] |= (a << f) & 67108863),
                          (this.words[n + 1] = (a >>> (26 - f)) & 67108863),
                          (f += 24) >= 26 && ((f -= 26), n++);
                    else if ('le' === r)
                      for (o = 0, n = 0; o < t.length; o += 3)
                        (a = t[o] | (t[o + 1] << 8) | (t[o + 2] << 16)),
                          (this.words[n] |= (a << f) & 67108863),
                          (this.words[n + 1] = (a >>> (26 - f)) & 67108863),
                          (f += 24) >= 26 && ((f -= 26), n++);
                    return this.strip();
                  }),
                  (a.prototype._parseHex = function (t, e) {
                    (this.length = Math.ceil((t.length - e) / 6)),
                      (this.words = Array(this.length));
                    for (var r, i, n = 0; n < this.length; n++)
                      this.words[n] = 0;
                    var a = 0;
                    for (n = t.length - 6, r = 0; n >= e; n -= 6)
                      (i = o(t, n, n + 6)),
                        (this.words[r] |= (i << a) & 67108863),
                        (this.words[r + 1] |= (i >>> (26 - a)) & 4194303),
                        (a += 24) >= 26 && ((a -= 26), r++);
                    n + 6 !== e &&
                      ((i = o(t, e, n + 6)),
                      (this.words[r] |= (i << a) & 67108863),
                      (this.words[r + 1] |= (i >>> (26 - a)) & 4194303)),
                      this.strip();
                  }),
                  (a.prototype._parseBase = function (t, e, r) {
                    (this.words = [0]), (this.length = 1);
                    for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
                    i--, (n = (n / e) | 0);
                    for (
                      var a = t.length - r,
                        o = a % i,
                        s = Math.min(a, a - o) + r,
                        h = 0,
                        d = r;
                      d < s;
                      d += i
                    )
                      (h = f(t, d, d + i, e)),
                        this.imuln(n),
                        this.words[0] + h < 67108864
                          ? (this.words[0] += h)
                          : this._iaddn(h);
                    if (0 !== o) {
                      var c = 1;
                      for (h = f(t, d, t.length, e), d = 0; d < o; d++) c *= e;
                      this.imuln(c),
                        this.words[0] + h < 67108864
                          ? (this.words[0] += h)
                          : this._iaddn(h);
                    }
                  }),
                  (a.prototype.copy = function (t) {
                    t.words = Array(this.length);
                    for (var e = 0; e < this.length; e++)
                      t.words[e] = this.words[e];
                    (t.length = this.length),
                      (t.negative = this.negative),
                      (t.red = this.red);
                  }),
                  (a.prototype.clone = function () {
                    var t = new a(null);
                    return this.copy(t), t;
                  }),
                  (a.prototype._expand = function (t) {
                    for (; this.length < t; ) this.words[this.length++] = 0;
                    return this;
                  }),
                  (a.prototype.strip = function () {
                    for (
                      ;
                      this.length > 1 && 0 === this.words[this.length - 1];

                    )
                      this.length--;
                    return this._normSign();
                  }),
                  (a.prototype._normSign = function () {
                    return (
                      1 === this.length &&
                        0 === this.words[0] &&
                        (this.negative = 0),
                      this
                    );
                  }),
                  (a.prototype.inspect = function () {
                    return (
                      (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
                    );
                  });
                var s,
                  h = [
                    '',
                    '0',
                    '00',
                    '000',
                    '0000',
                    '00000',
                    '000000',
                    '0000000',
                    '00000000',
                    '000000000',
                    '0000000000',
                    '00000000000',
                    '000000000000',
                    '0000000000000',
                    '00000000000000',
                    '000000000000000',
                    '0000000000000000',
                    '00000000000000000',
                    '000000000000000000',
                    '0000000000000000000',
                    '00000000000000000000',
                    '000000000000000000000',
                    '0000000000000000000000',
                    '00000000000000000000000',
                    '000000000000000000000000',
                    '0000000000000000000000000',
                  ],
                  d = [
                    0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6,
                    6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                  ],
                  c = [
                    0, 0, 33554432, 43046721, 16777216, 48828125, 60466176,
                    40353607, 16777216, 43046721, 1e7, 19487171, 35831808,
                    62748517, 7529536, 11390625, 16777216, 24137569, 34012224,
                    47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625,
                    11881376, 14348907, 17210368, 20511149, 243e5, 28629151,
                    33554432, 39135393, 45435424, 52521875, 60466176,
                  ];
                function u(t, e, r) {
                  r.negative = e.negative ^ t.negative;
                  var i = (t.length + e.length) | 0;
                  (r.length = i), (i = (i - 1) | 0);
                  var n = 0 | t.words[0],
                    a = 0 | e.words[0],
                    o = n * a,
                    f = 67108863 & o,
                    s = (o / 67108864) | 0;
                  r.words[0] = f;
                  for (var h = 1; h < i; h++) {
                    for (
                      var d = s >>> 26,
                        c = 67108863 & s,
                        u = Math.min(h, e.length - 1),
                        l = Math.max(0, h - t.length + 1);
                      l <= u;
                      l++
                    ) {
                      var p = (h - l) | 0;
                      (d +=
                        ((o = (n = 0 | t.words[p]) * (a = 0 | e.words[l]) + c) /
                          67108864) |
                        0),
                        (c = 67108863 & o);
                    }
                    (r.words[h] = 0 | c), (s = 0 | d);
                  }
                  return 0 !== s ? (r.words[h] = 0 | s) : r.length--, r.strip();
                }
                (a.prototype.toString = function (t, e) {
                  if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
                    r = '';
                    for (var r, n = 0, a = 0, o = 0; o < this.length; o++) {
                      var f = this.words[o],
                        s = (((f << n) | a) & 16777215).toString(16);
                      (r =
                        0 != (a = (f >>> (24 - n)) & 16777215) ||
                        o !== this.length - 1
                          ? h[6 - s.length] + s + r
                          : s + r),
                        (n += 2) >= 26 && ((n -= 26), o--);
                    }
                    for (
                      0 !== a && (r = a.toString(16) + r);
                      r.length % e != 0;

                    )
                      r = '0' + r;
                    return 0 !== this.negative && (r = '-' + r), r;
                  }
                  if (t === (0 | t) && t >= 2 && t <= 36) {
                    var u = d[t],
                      l = c[t];
                    r = '';
                    var p = this.clone();
                    for (p.negative = 0; !p.isZero(); ) {
                      var b = p.modn(l).toString(t);
                      r = (p = p.idivn(l)).isZero()
                        ? b + r
                        : h[u - b.length] + b + r;
                    }
                    for (this.isZero() && (r = '0' + r); r.length % e != 0; )
                      r = '0' + r;
                    return 0 !== this.negative && (r = '-' + r), r;
                  }
                  i(!1, 'Base should be between 2 and 36');
                }),
                  (a.prototype.toNumber = function () {
                    var t = this.words[0];
                    return (
                      2 === this.length
                        ? (t += 67108864 * this.words[1])
                        : 3 === this.length && 1 === this.words[2]
                          ? (t += 4503599627370496 + 67108864 * this.words[1])
                          : this.length > 2 &&
                            i(!1, 'Number can only safely store up to 53 bits'),
                      0 !== this.negative ? -t : t
                    );
                  }),
                  (a.prototype.toJSON = function () {
                    return this.toString(16);
                  }),
                  (a.prototype.toBuffer = function (t, e) {
                    return i(void 0 !== s), this.toArrayLike(s, t, e);
                  }),
                  (a.prototype.toArray = function (t, e) {
                    return this.toArrayLike(Array, t, e);
                  }),
                  (a.prototype.toArrayLike = function (t, e, r) {
                    var n,
                      a,
                      o = this.byteLength(),
                      f = r || Math.max(1, o);
                    i(o <= f, 'byte array longer than desired length'),
                      i(f > 0, 'Requested array length <= 0'),
                      this.strip();
                    var s = new t(f),
                      h = this.clone();
                    if ('le' === e) {
                      for (a = 0; !h.isZero(); a++)
                        (n = h.andln(255)), h.iushrn(8), (s[a] = n);
                      for (; a < f; a++) s[a] = 0;
                    } else {
                      for (a = 0; a < f - o; a++) s[a] = 0;
                      for (a = 0; !h.isZero(); a++)
                        (n = h.andln(255)), h.iushrn(8), (s[f - a - 1] = n);
                    }
                    return s;
                  }),
                  Math.clz32
                    ? (a.prototype._countBits = function (t) {
                        return 32 - Math.clz32(t);
                      })
                    : (a.prototype._countBits = function (t) {
                        var e = t,
                          r = 0;
                        return (
                          e >= 4096 && ((r += 13), (e >>>= 13)),
                          e >= 64 && ((r += 7), (e >>>= 7)),
                          e >= 8 && ((r += 4), (e >>>= 4)),
                          e >= 2 && ((r += 2), (e >>>= 2)),
                          r + e
                        );
                      }),
                  (a.prototype._zeroBits = function (t) {
                    if (0 === t) return 26;
                    var e = t,
                      r = 0;
                    return (
                      (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
                      (127 & e) == 0 && ((r += 7), (e >>>= 7)),
                      (15 & e) == 0 && ((r += 4), (e >>>= 4)),
                      (3 & e) == 0 && ((r += 2), (e >>>= 2)),
                      (1 & e) == 0 && r++,
                      r
                    );
                  }),
                  (a.prototype.bitLength = function () {
                    var t = this.words[this.length - 1],
                      e = this._countBits(t);
                    return (this.length - 1) * 26 + e;
                  }),
                  (a.prototype.zeroBits = function () {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                      var r = this._zeroBits(this.words[e]);
                      if (((t += r), 26 !== r)) break;
                    }
                    return t;
                  }),
                  (a.prototype.byteLength = function () {
                    return Math.ceil(this.bitLength() / 8);
                  }),
                  (a.prototype.toTwos = function (t) {
                    return 0 !== this.negative
                      ? this.abs().inotn(t).iaddn(1)
                      : this.clone();
                  }),
                  (a.prototype.fromTwos = function (t) {
                    return this.testn(t - 1)
                      ? this.notn(t).iaddn(1).ineg()
                      : this.clone();
                  }),
                  (a.prototype.isNeg = function () {
                    return 0 !== this.negative;
                  }),
                  (a.prototype.neg = function () {
                    return this.clone().ineg();
                  }),
                  (a.prototype.ineg = function () {
                    return this.isZero() || (this.negative ^= 1), this;
                  }),
                  (a.prototype.iuor = function (t) {
                    for (; this.length < t.length; )
                      this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++)
                      this.words[e] = this.words[e] | t.words[e];
                    return this.strip();
                  }),
                  (a.prototype.ior = function (t) {
                    return i((this.negative | t.negative) == 0), this.iuor(t);
                  }),
                  (a.prototype.or = function (t) {
                    return this.length > t.length
                      ? this.clone().ior(t)
                      : t.clone().ior(this);
                  }),
                  (a.prototype.uor = function (t) {
                    return this.length > t.length
                      ? this.clone().iuor(t)
                      : t.clone().iuor(this);
                  }),
                  (a.prototype.iuand = function (t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++)
                      this.words[r] = this.words[r] & t.words[r];
                    return (this.length = e.length), this.strip();
                  }),
                  (a.prototype.iand = function (t) {
                    return i((this.negative | t.negative) == 0), this.iuand(t);
                  }),
                  (a.prototype.and = function (t) {
                    return this.length > t.length
                      ? this.clone().iand(t)
                      : t.clone().iand(this);
                  }),
                  (a.prototype.uand = function (t) {
                    return this.length > t.length
                      ? this.clone().iuand(t)
                      : t.clone().iuand(this);
                  }),
                  (a.prototype.iuxor = function (t) {
                    this.length > t.length
                      ? ((e = this), (r = t))
                      : ((e = t), (r = this));
                    for (var e, r, i = 0; i < r.length; i++)
                      this.words[i] = e.words[i] ^ r.words[i];
                    if (this !== e)
                      for (; i < e.length; i++) this.words[i] = e.words[i];
                    return (this.length = e.length), this.strip();
                  }),
                  (a.prototype.ixor = function (t) {
                    return i((this.negative | t.negative) == 0), this.iuxor(t);
                  }),
                  (a.prototype.xor = function (t) {
                    return this.length > t.length
                      ? this.clone().ixor(t)
                      : t.clone().ixor(this);
                  }),
                  (a.prototype.uxor = function (t) {
                    return this.length > t.length
                      ? this.clone().iuxor(t)
                      : t.clone().iuxor(this);
                  }),
                  (a.prototype.inotn = function (t) {
                    i('number' == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                      r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var n = 0; n < e; n++)
                      this.words[n] = 67108863 & ~this.words[n];
                    return (
                      r > 0 &&
                        (this.words[n] =
                          ~this.words[n] & (67108863 >> (26 - r))),
                      this.strip()
                    );
                  }),
                  (a.prototype.notn = function (t) {
                    return this.clone().inotn(t);
                  }),
                  (a.prototype.setn = function (t, e) {
                    i('number' == typeof t && t >= 0);
                    var r = (t / 26) | 0,
                      n = t % 26;
                    return (
                      this._expand(r + 1),
                      e
                        ? (this.words[r] = this.words[r] | (1 << n))
                        : (this.words[r] = this.words[r] & ~(1 << n)),
                      this.strip()
                    );
                  }),
                  (a.prototype.iadd = function (t) {
                    if (0 !== this.negative && 0 === t.negative)
                      return (
                        (this.negative = 0),
                        (e = this.isub(t)),
                        (this.negative ^= 1),
                        this._normSign()
                      );
                    if (0 === this.negative && 0 !== t.negative)
                      return (
                        (t.negative = 0),
                        (e = this.isub(t)),
                        (t.negative = 1),
                        e._normSign()
                      );
                    this.length > t.length
                      ? ((r = this), (i = t))
                      : ((r = t), (i = this));
                    for (var e, r, i, n = 0, a = 0; a < i.length; a++)
                      (e = (0 | r.words[a]) + (0 | i.words[a]) + n),
                        (this.words[a] = 67108863 & e),
                        (n = e >>> 26);
                    for (; 0 !== n && a < r.length; a++)
                      (e = (0 | r.words[a]) + n),
                        (this.words[a] = 67108863 & e),
                        (n = e >>> 26);
                    if (((this.length = r.length), 0 !== n))
                      (this.words[this.length] = n), this.length++;
                    else if (r !== this)
                      for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this;
                  }),
                  (a.prototype.add = function (t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative
                      ? ((t.negative = 0),
                        (e = this.sub(t)),
                        (t.negative ^= 1),
                        e)
                      : 0 === t.negative && 0 !== this.negative
                        ? ((this.negative = 0),
                          (e = t.sub(this)),
                          (this.negative = 1),
                          e)
                        : this.length > t.length
                          ? this.clone().iadd(t)
                          : t.clone().iadd(this);
                  }),
                  (a.prototype.isub = function (t) {
                    if (0 !== t.negative) {
                      t.negative = 0;
                      var e,
                        r,
                        i = this.iadd(t);
                      return (t.negative = 1), i._normSign();
                    }
                    if (0 !== this.negative)
                      return (
                        (this.negative = 0),
                        this.iadd(t),
                        (this.negative = 1),
                        this._normSign()
                      );
                    var n = this.cmp(t);
                    if (0 === n)
                      return (
                        (this.negative = 0),
                        (this.length = 1),
                        (this.words[0] = 0),
                        this
                      );
                    n > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
                    for (var a = 0, o = 0; o < r.length; o++)
                      (a = (i = (0 | e.words[o]) - (0 | r.words[o]) + a) >> 26),
                        (this.words[o] = 67108863 & i);
                    for (; 0 !== a && o < e.length; o++)
                      (a = (i = (0 | e.words[o]) + a) >> 26),
                        (this.words[o] = 67108863 & i);
                    if (0 === a && o < e.length && e !== this)
                      for (; o < e.length; o++) this.words[o] = e.words[o];
                    return (
                      (this.length = Math.max(this.length, o)),
                      e !== this && (this.negative = 1),
                      this.strip()
                    );
                  }),
                  (a.prototype.sub = function (t) {
                    return this.clone().isub(t);
                  });
                var l = function (t, e, r) {
                  var i,
                    n,
                    a,
                    o = t.words,
                    f = e.words,
                    s = r.words,
                    h = 0,
                    d = 0 | o[0],
                    c = 8191 & d,
                    u = d >>> 13,
                    l = 0 | o[1],
                    p = 8191 & l,
                    b = l >>> 13,
                    m = 0 | o[2],
                    v = 8191 & m,
                    y = m >>> 13,
                    g = 0 | o[3],
                    _ = 8191 & g,
                    w = g >>> 13,
                    M = 0 | o[4],
                    S = 8191 & M,
                    k = M >>> 13,
                    E = 0 | o[5],
                    A = 8191 & E,
                    x = E >>> 13,
                    R = 0 | o[6],
                    I = 8191 & R,
                    B = R >>> 13,
                    P = 0 | o[7],
                    T = 8191 & P,
                    C = P >>> 13,
                    j = 0 | o[8],
                    O = 8191 & j,
                    D = j >>> 13,
                    N = 0 | o[9],
                    q = 8191 & N,
                    L = N >>> 13,
                    z = 0 | f[0],
                    U = 8191 & z,
                    K = z >>> 13,
                    H = 0 | f[1],
                    F = 8191 & H,
                    V = H >>> 13,
                    W = 0 | f[2],
                    Z = 8191 & W,
                    X = W >>> 13,
                    G = 0 | f[3],
                    J = 8191 & G,
                    Y = G >>> 13,
                    $ = 0 | f[4],
                    Q = 8191 & $,
                    tt = $ >>> 13,
                    te = 0 | f[5],
                    tr = 8191 & te,
                    ti = te >>> 13,
                    tn = 0 | f[6],
                    ta = 8191 & tn,
                    to = tn >>> 13,
                    tf = 0 | f[7],
                    ts = 8191 & tf,
                    th = tf >>> 13,
                    td = 0 | f[8],
                    tc = 8191 & td,
                    tu = td >>> 13,
                    tl = 0 | f[9],
                    tp = 8191 & tl,
                    tb = tl >>> 13;
                  (r.negative = t.negative ^ e.negative), (r.length = 19);
                  var tm =
                    (((h + (i = Math.imul(c, U))) | 0) +
                      ((8191 &
                        (n = ((n = Math.imul(c, K)) + Math.imul(u, U)) | 0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = Math.imul(u, K)) + (n >>> 13)) | 0) + (tm >>> 26)) |
                    0),
                    (tm &= 67108863),
                    (i = Math.imul(p, U)),
                    (n = ((n = Math.imul(p, K)) + Math.imul(b, U)) | 0),
                    (a = Math.imul(b, K));
                  var tv =
                    (((h + (i = (i + Math.imul(c, F)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, V)) | 0) + Math.imul(u, F)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, V)) | 0) + (n >>> 13)) | 0) +
                      (tv >>> 26)) |
                    0),
                    (tv &= 67108863),
                    (i = Math.imul(v, U)),
                    (n = ((n = Math.imul(v, K)) + Math.imul(y, U)) | 0),
                    (a = Math.imul(y, K)),
                    (i = (i + Math.imul(p, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, V)) | 0) + Math.imul(b, F)) | 0),
                    (a = (a + Math.imul(b, V)) | 0);
                  var ty =
                    (((h + (i = (i + Math.imul(c, Z)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, X)) | 0) + Math.imul(u, Z)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, X)) | 0) + (n >>> 13)) | 0) +
                      (ty >>> 26)) |
                    0),
                    (ty &= 67108863),
                    (i = Math.imul(_, U)),
                    (n = ((n = Math.imul(_, K)) + Math.imul(w, U)) | 0),
                    (a = Math.imul(w, K)),
                    (i = (i + Math.imul(v, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, V)) | 0) + Math.imul(y, F)) | 0),
                    (a = (a + Math.imul(y, V)) | 0),
                    (i = (i + Math.imul(p, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, X)) | 0) + Math.imul(b, Z)) | 0),
                    (a = (a + Math.imul(b, X)) | 0);
                  var tg =
                    (((h + (i = (i + Math.imul(c, J)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, Y)) | 0) + Math.imul(u, J)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, Y)) | 0) + (n >>> 13)) | 0) +
                      (tg >>> 26)) |
                    0),
                    (tg &= 67108863),
                    (i = Math.imul(S, U)),
                    (n = ((n = Math.imul(S, K)) + Math.imul(k, U)) | 0),
                    (a = Math.imul(k, K)),
                    (i = (i + Math.imul(_, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, V)) | 0) + Math.imul(w, F)) | 0),
                    (a = (a + Math.imul(w, V)) | 0),
                    (i = (i + Math.imul(v, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, X)) | 0) + Math.imul(y, Z)) | 0),
                    (a = (a + Math.imul(y, X)) | 0),
                    (i = (i + Math.imul(p, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, Y)) | 0) + Math.imul(b, J)) | 0),
                    (a = (a + Math.imul(b, Y)) | 0);
                  var t_ =
                    (((h + (i = (i + Math.imul(c, Q)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, tt)) | 0) + Math.imul(u, Q)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, tt)) | 0) + (n >>> 13)) | 0) +
                      (t_ >>> 26)) |
                    0),
                    (t_ &= 67108863),
                    (i = Math.imul(A, U)),
                    (n = ((n = Math.imul(A, K)) + Math.imul(x, U)) | 0),
                    (a = Math.imul(x, K)),
                    (i = (i + Math.imul(S, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, V)) | 0) + Math.imul(k, F)) | 0),
                    (a = (a + Math.imul(k, V)) | 0),
                    (i = (i + Math.imul(_, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, X)) | 0) + Math.imul(w, Z)) | 0),
                    (a = (a + Math.imul(w, X)) | 0),
                    (i = (i + Math.imul(v, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, Y)) | 0) + Math.imul(y, J)) | 0),
                    (a = (a + Math.imul(y, Y)) | 0),
                    (i = (i + Math.imul(p, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
                    (a = (a + Math.imul(b, tt)) | 0);
                  var tw =
                    (((h + (i = (i + Math.imul(c, tr)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, ti)) | 0) +
                            Math.imul(u, tr)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, ti)) | 0) + (n >>> 13)) | 0) +
                      (tw >>> 26)) |
                    0),
                    (tw &= 67108863),
                    (i = Math.imul(I, U)),
                    (n = ((n = Math.imul(I, K)) + Math.imul(B, U)) | 0),
                    (a = Math.imul(B, K)),
                    (i = (i + Math.imul(A, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, V)) | 0) + Math.imul(x, F)) | 0),
                    (a = (a + Math.imul(x, V)) | 0),
                    (i = (i + Math.imul(S, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, X)) | 0) + Math.imul(k, Z)) | 0),
                    (a = (a + Math.imul(k, X)) | 0),
                    (i = (i + Math.imul(_, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, Y)) | 0) + Math.imul(w, J)) | 0),
                    (a = (a + Math.imul(w, Y)) | 0),
                    (i = (i + Math.imul(v, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, tt)) | 0) + Math.imul(y, Q)) | 0),
                    (a = (a + Math.imul(y, tt)) | 0),
                    (i = (i + Math.imul(p, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, ti)) | 0) + Math.imul(b, tr)) |
                      0),
                    (a = (a + Math.imul(b, ti)) | 0);
                  var tM =
                    (((h + (i = (i + Math.imul(c, ta)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, to)) | 0) +
                            Math.imul(u, ta)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, to)) | 0) + (n >>> 13)) | 0) +
                      (tM >>> 26)) |
                    0),
                    (tM &= 67108863),
                    (i = Math.imul(T, U)),
                    (n = ((n = Math.imul(T, K)) + Math.imul(C, U)) | 0),
                    (a = Math.imul(C, K)),
                    (i = (i + Math.imul(I, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, V)) | 0) + Math.imul(B, F)) | 0),
                    (a = (a + Math.imul(B, V)) | 0),
                    (i = (i + Math.imul(A, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, X)) | 0) + Math.imul(x, Z)) | 0),
                    (a = (a + Math.imul(x, X)) | 0),
                    (i = (i + Math.imul(S, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, Y)) | 0) + Math.imul(k, J)) | 0),
                    (a = (a + Math.imul(k, Y)) | 0),
                    (i = (i + Math.imul(_, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, tt)) | 0) + Math.imul(w, Q)) | 0),
                    (a = (a + Math.imul(w, tt)) | 0),
                    (i = (i + Math.imul(v, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, ti)) | 0) + Math.imul(y, tr)) |
                      0),
                    (a = (a + Math.imul(y, ti)) | 0),
                    (i = (i + Math.imul(p, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, to)) | 0) + Math.imul(b, ta)) |
                      0),
                    (a = (a + Math.imul(b, to)) | 0);
                  var tS =
                    (((h + (i = (i + Math.imul(c, ts)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, th)) | 0) +
                            Math.imul(u, ts)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, th)) | 0) + (n >>> 13)) | 0) +
                      (tS >>> 26)) |
                    0),
                    (tS &= 67108863),
                    (i = Math.imul(O, U)),
                    (n = ((n = Math.imul(O, K)) + Math.imul(D, U)) | 0),
                    (a = Math.imul(D, K)),
                    (i = (i + Math.imul(T, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, V)) | 0) + Math.imul(C, F)) | 0),
                    (a = (a + Math.imul(C, V)) | 0),
                    (i = (i + Math.imul(I, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, X)) | 0) + Math.imul(B, Z)) | 0),
                    (a = (a + Math.imul(B, X)) | 0),
                    (i = (i + Math.imul(A, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, Y)) | 0) + Math.imul(x, J)) | 0),
                    (a = (a + Math.imul(x, Y)) | 0),
                    (i = (i + Math.imul(S, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, tt)) | 0) + Math.imul(k, Q)) | 0),
                    (a = (a + Math.imul(k, tt)) | 0),
                    (i = (i + Math.imul(_, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, ti)) | 0) + Math.imul(w, tr)) |
                      0),
                    (a = (a + Math.imul(w, ti)) | 0),
                    (i = (i + Math.imul(v, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, to)) | 0) + Math.imul(y, ta)) |
                      0),
                    (a = (a + Math.imul(y, to)) | 0),
                    (i = (i + Math.imul(p, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, th)) | 0) + Math.imul(b, ts)) |
                      0),
                    (a = (a + Math.imul(b, th)) | 0);
                  var tk =
                    (((h + (i = (i + Math.imul(c, tc)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, tu)) | 0) +
                            Math.imul(u, tc)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, tu)) | 0) + (n >>> 13)) | 0) +
                      (tk >>> 26)) |
                    0),
                    (tk &= 67108863),
                    (i = Math.imul(q, U)),
                    (n = ((n = Math.imul(q, K)) + Math.imul(L, U)) | 0),
                    (a = Math.imul(L, K)),
                    (i = (i + Math.imul(O, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, V)) | 0) + Math.imul(D, F)) | 0),
                    (a = (a + Math.imul(D, V)) | 0),
                    (i = (i + Math.imul(T, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, X)) | 0) + Math.imul(C, Z)) | 0),
                    (a = (a + Math.imul(C, X)) | 0),
                    (i = (i + Math.imul(I, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, Y)) | 0) + Math.imul(B, J)) | 0),
                    (a = (a + Math.imul(B, Y)) | 0),
                    (i = (i + Math.imul(A, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(x, Q)) | 0),
                    (a = (a + Math.imul(x, tt)) | 0),
                    (i = (i + Math.imul(S, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, ti)) | 0) + Math.imul(k, tr)) |
                      0),
                    (a = (a + Math.imul(k, ti)) | 0),
                    (i = (i + Math.imul(_, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, to)) | 0) + Math.imul(w, ta)) |
                      0),
                    (a = (a + Math.imul(w, to)) | 0),
                    (i = (i + Math.imul(v, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, th)) | 0) + Math.imul(y, ts)) |
                      0),
                    (a = (a + Math.imul(y, th)) | 0),
                    (i = (i + Math.imul(p, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, tu)) | 0) + Math.imul(b, tc)) |
                      0),
                    (a = (a + Math.imul(b, tu)) | 0);
                  var tE =
                    (((h + (i = (i + Math.imul(c, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, tb)) | 0) +
                            Math.imul(u, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, tb)) | 0) + (n >>> 13)) | 0) +
                      (tE >>> 26)) |
                    0),
                    (tE &= 67108863),
                    (i = Math.imul(q, F)),
                    (n = ((n = Math.imul(q, V)) + Math.imul(L, F)) | 0),
                    (a = Math.imul(L, V)),
                    (i = (i + Math.imul(O, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, X)) | 0) + Math.imul(D, Z)) | 0),
                    (a = (a + Math.imul(D, X)) | 0),
                    (i = (i + Math.imul(T, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, Y)) | 0) + Math.imul(C, J)) | 0),
                    (a = (a + Math.imul(C, Y)) | 0),
                    (i = (i + Math.imul(I, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, tt)) | 0) + Math.imul(B, Q)) | 0),
                    (a = (a + Math.imul(B, tt)) | 0),
                    (i = (i + Math.imul(A, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, ti)) | 0) + Math.imul(x, tr)) |
                      0),
                    (a = (a + Math.imul(x, ti)) | 0),
                    (i = (i + Math.imul(S, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, to)) | 0) + Math.imul(k, ta)) |
                      0),
                    (a = (a + Math.imul(k, to)) | 0),
                    (i = (i + Math.imul(_, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, th)) | 0) + Math.imul(w, ts)) |
                      0),
                    (a = (a + Math.imul(w, th)) | 0),
                    (i = (i + Math.imul(v, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, tu)) | 0) + Math.imul(y, tc)) |
                      0),
                    (a = (a + Math.imul(y, tu)) | 0);
                  var tA =
                    (((h + (i = (i + Math.imul(p, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(p, tb)) | 0) +
                            Math.imul(b, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(b, tb)) | 0) + (n >>> 13)) | 0) +
                      (tA >>> 26)) |
                    0),
                    (tA &= 67108863),
                    (i = Math.imul(q, Z)),
                    (n = ((n = Math.imul(q, X)) + Math.imul(L, Z)) | 0),
                    (a = Math.imul(L, X)),
                    (i = (i + Math.imul(O, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, Y)) | 0) + Math.imul(D, J)) | 0),
                    (a = (a + Math.imul(D, Y)) | 0),
                    (i = (i + Math.imul(T, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, tt)) | 0) + Math.imul(C, Q)) | 0),
                    (a = (a + Math.imul(C, tt)) | 0),
                    (i = (i + Math.imul(I, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, ti)) | 0) + Math.imul(B, tr)) |
                      0),
                    (a = (a + Math.imul(B, ti)) | 0),
                    (i = (i + Math.imul(A, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, to)) | 0) + Math.imul(x, ta)) |
                      0),
                    (a = (a + Math.imul(x, to)) | 0),
                    (i = (i + Math.imul(S, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, th)) | 0) + Math.imul(k, ts)) |
                      0),
                    (a = (a + Math.imul(k, th)) | 0),
                    (i = (i + Math.imul(_, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, tu)) | 0) + Math.imul(w, tc)) |
                      0),
                    (a = (a + Math.imul(w, tu)) | 0);
                  var tx =
                    (((h + (i = (i + Math.imul(v, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(v, tb)) | 0) +
                            Math.imul(y, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(y, tb)) | 0) + (n >>> 13)) | 0) +
                      (tx >>> 26)) |
                    0),
                    (tx &= 67108863),
                    (i = Math.imul(q, J)),
                    (n = ((n = Math.imul(q, Y)) + Math.imul(L, J)) | 0),
                    (a = Math.imul(L, Y)),
                    (i = (i + Math.imul(O, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, tt)) | 0) + Math.imul(D, Q)) | 0),
                    (a = (a + Math.imul(D, tt)) | 0),
                    (i = (i + Math.imul(T, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, ti)) | 0) + Math.imul(C, tr)) |
                      0),
                    (a = (a + Math.imul(C, ti)) | 0),
                    (i = (i + Math.imul(I, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, to)) | 0) + Math.imul(B, ta)) |
                      0),
                    (a = (a + Math.imul(B, to)) | 0),
                    (i = (i + Math.imul(A, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, th)) | 0) + Math.imul(x, ts)) |
                      0),
                    (a = (a + Math.imul(x, th)) | 0),
                    (i = (i + Math.imul(S, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, tu)) | 0) + Math.imul(k, tc)) |
                      0),
                    (a = (a + Math.imul(k, tu)) | 0);
                  var tR =
                    (((h + (i = (i + Math.imul(_, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(_, tb)) | 0) +
                            Math.imul(w, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(w, tb)) | 0) + (n >>> 13)) | 0) +
                      (tR >>> 26)) |
                    0),
                    (tR &= 67108863),
                    (i = Math.imul(q, Q)),
                    (n = ((n = Math.imul(q, tt)) + Math.imul(L, Q)) | 0),
                    (a = Math.imul(L, tt)),
                    (i = (i + Math.imul(O, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, ti)) | 0) + Math.imul(D, tr)) |
                      0),
                    (a = (a + Math.imul(D, ti)) | 0),
                    (i = (i + Math.imul(T, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, to)) | 0) + Math.imul(C, ta)) |
                      0),
                    (a = (a + Math.imul(C, to)) | 0),
                    (i = (i + Math.imul(I, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, th)) | 0) + Math.imul(B, ts)) |
                      0),
                    (a = (a + Math.imul(B, th)) | 0),
                    (i = (i + Math.imul(A, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, tu)) | 0) + Math.imul(x, tc)) |
                      0),
                    (a = (a + Math.imul(x, tu)) | 0);
                  var tI =
                    (((h + (i = (i + Math.imul(S, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(S, tb)) | 0) +
                            Math.imul(k, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(k, tb)) | 0) + (n >>> 13)) | 0) +
                      (tI >>> 26)) |
                    0),
                    (tI &= 67108863),
                    (i = Math.imul(q, tr)),
                    (n = ((n = Math.imul(q, ti)) + Math.imul(L, tr)) | 0),
                    (a = Math.imul(L, ti)),
                    (i = (i + Math.imul(O, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, to)) | 0) + Math.imul(D, ta)) |
                      0),
                    (a = (a + Math.imul(D, to)) | 0),
                    (i = (i + Math.imul(T, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, th)) | 0) + Math.imul(C, ts)) |
                      0),
                    (a = (a + Math.imul(C, th)) | 0),
                    (i = (i + Math.imul(I, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, tu)) | 0) + Math.imul(B, tc)) |
                      0),
                    (a = (a + Math.imul(B, tu)) | 0);
                  var tB =
                    (((h + (i = (i + Math.imul(A, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(A, tb)) | 0) +
                            Math.imul(x, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(x, tb)) | 0) + (n >>> 13)) | 0) +
                      (tB >>> 26)) |
                    0),
                    (tB &= 67108863),
                    (i = Math.imul(q, ta)),
                    (n = ((n = Math.imul(q, to)) + Math.imul(L, ta)) | 0),
                    (a = Math.imul(L, to)),
                    (i = (i + Math.imul(O, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, th)) | 0) + Math.imul(D, ts)) |
                      0),
                    (a = (a + Math.imul(D, th)) | 0),
                    (i = (i + Math.imul(T, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, tu)) | 0) + Math.imul(C, tc)) |
                      0),
                    (a = (a + Math.imul(C, tu)) | 0);
                  var tP =
                    (((h + (i = (i + Math.imul(I, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(I, tb)) | 0) +
                            Math.imul(B, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(B, tb)) | 0) + (n >>> 13)) | 0) +
                      (tP >>> 26)) |
                    0),
                    (tP &= 67108863),
                    (i = Math.imul(q, ts)),
                    (n = ((n = Math.imul(q, th)) + Math.imul(L, ts)) | 0),
                    (a = Math.imul(L, th)),
                    (i = (i + Math.imul(O, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, tu)) | 0) + Math.imul(D, tc)) |
                      0),
                    (a = (a + Math.imul(D, tu)) | 0);
                  var tT =
                    (((h + (i = (i + Math.imul(T, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(T, tb)) | 0) +
                            Math.imul(C, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(C, tb)) | 0) + (n >>> 13)) | 0) +
                      (tT >>> 26)) |
                    0),
                    (tT &= 67108863),
                    (i = Math.imul(q, tc)),
                    (n = ((n = Math.imul(q, tu)) + Math.imul(L, tc)) | 0),
                    (a = Math.imul(L, tu));
                  var tC =
                    (((h + (i = (i + Math.imul(O, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(O, tb)) | 0) +
                            Math.imul(D, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(D, tb)) | 0) + (n >>> 13)) | 0) +
                      (tC >>> 26)) |
                    0),
                    (tC &= 67108863);
                  var tj =
                    (((h + (i = Math.imul(q, tp))) | 0) +
                      ((8191 &
                        (n =
                          ((n = Math.imul(q, tb)) + Math.imul(L, tp)) | 0)) <<
                        13)) |
                    0;
                  return (
                    (h =
                      ((((a = Math.imul(L, tb)) + (n >>> 13)) | 0) +
                        (tj >>> 26)) |
                      0),
                    (tj &= 67108863),
                    (s[0] = tm),
                    (s[1] = tv),
                    (s[2] = ty),
                    (s[3] = tg),
                    (s[4] = t_),
                    (s[5] = tw),
                    (s[6] = tM),
                    (s[7] = tS),
                    (s[8] = tk),
                    (s[9] = tE),
                    (s[10] = tA),
                    (s[11] = tx),
                    (s[12] = tR),
                    (s[13] = tI),
                    (s[14] = tB),
                    (s[15] = tP),
                    (s[16] = tT),
                    (s[17] = tC),
                    (s[18] = tj),
                    0 !== h && ((s[19] = h), r.length++),
                    r
                  );
                };
                function p(t, e, r) {
                  return new b().mulp(t, e, r);
                }
                function b(t, e) {
                  (this.x = t), (this.y = e);
                }
                Math.imul || (l = u),
                  (a.prototype.mulTo = function (t, e) {
                    var r = this.length + t.length;
                    return 10 === this.length && 10 === t.length
                      ? l(this, t, e)
                      : r < 63
                        ? u(this, t, e)
                        : r < 1024
                          ? (function (t, e, r) {
                              (r.negative = e.negative ^ t.negative),
                                (r.length = t.length + e.length);
                              for (
                                var i = 0, n = 0, a = 0;
                                a < r.length - 1;
                                a++
                              ) {
                                var o = n;
                                n = 0;
                                for (
                                  var f = 67108863 & i,
                                    s = Math.min(a, e.length - 1),
                                    h = Math.max(0, a - t.length + 1);
                                  h <= s;
                                  h++
                                ) {
                                  var d = a - h,
                                    c = (0 | t.words[d]) * (0 | e.words[h]),
                                    u = 67108863 & c;
                                  (o = (o + ((c / 67108864) | 0)) | 0),
                                    (f = 67108863 & (u = (u + f) | 0)),
                                    (n += (o = (o + (u >>> 26)) | 0) >>> 26),
                                    (o &= 67108863);
                                }
                                (r.words[a] = f), (i = o), (o = n);
                              }
                              return (
                                0 !== i ? (r.words[a] = i) : r.length--,
                                r.strip()
                              );
                            })(this, t, e)
                          : p(this, t, e);
                  }),
                  (b.prototype.makeRBT = function (t) {
                    for (
                      var e = Array(t),
                        r = a.prototype._countBits(t) - 1,
                        i = 0;
                      i < t;
                      i++
                    )
                      e[i] = this.revBin(i, r, t);
                    return e;
                  }),
                  (b.prototype.revBin = function (t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var i = 0, n = 0; n < e; n++)
                      (i |= (1 & t) << (e - n - 1)), (t >>= 1);
                    return i;
                  }),
                  (b.prototype.permute = function (t, e, r, i, n, a) {
                    for (var o = 0; o < a; o++)
                      (i[o] = e[t[o]]), (n[o] = r[t[o]]);
                  }),
                  (b.prototype.transform = function (t, e, r, i, n, a) {
                    this.permute(a, t, e, r, i, n);
                    for (var o = 1; o < n; o <<= 1)
                      for (
                        var f = o << 1,
                          s = Math.cos((2 * Math.PI) / f),
                          h = Math.sin((2 * Math.PI) / f),
                          d = 0;
                        d < n;
                        d += f
                      )
                        for (var c = s, u = h, l = 0; l < o; l++) {
                          var p = r[d + l],
                            b = i[d + l],
                            m = r[d + l + o],
                            v = i[d + l + o],
                            y = c * m - u * v;
                          (v = c * v + u * m),
                            (m = y),
                            (r[d + l] = p + m),
                            (i[d + l] = b + v),
                            (r[d + l + o] = p - m),
                            (i[d + l + o] = b - v),
                            l !== f &&
                              ((y = s * c - h * u),
                              (u = s * u + h * c),
                              (c = y));
                        }
                  }),
                  (b.prototype.guessLen13b = function (t, e) {
                    var r = 1 | Math.max(e, t),
                      i = 1 & r,
                      n = 0;
                    for (r = (r / 2) | 0; r; r >>>= 1) n++;
                    return 1 << (n + 1 + i);
                  }),
                  (b.prototype.conjugate = function (t, e, r) {
                    if (!(r <= 1))
                      for (var i = 0; i < r / 2; i++) {
                        var n = t[i];
                        (t[i] = t[r - i - 1]),
                          (t[r - i - 1] = n),
                          (n = e[i]),
                          (e[i] = -e[r - i - 1]),
                          (e[r - i - 1] = -n);
                      }
                  }),
                  (b.prototype.normalize13b = function (t, e) {
                    for (var r = 0, i = 0; i < e / 2; i++) {
                      var n =
                        8192 * Math.round(t[2 * i + 1] / e) +
                        Math.round(t[2 * i] / e) +
                        r;
                      (t[i] = 67108863 & n),
                        (r = n < 67108864 ? 0 : (n / 67108864) | 0);
                    }
                    return t;
                  }),
                  (b.prototype.convert13b = function (t, e, r, n) {
                    for (var a = 0, o = 0; o < e; o++)
                      (a += 0 | t[o]),
                        (r[2 * o] = 8191 & a),
                        (a >>>= 13),
                        (r[2 * o + 1] = 8191 & a),
                        (a >>>= 13);
                    for (o = 2 * e; o < n; ++o) r[o] = 0;
                    i(0 === a), i((-8192 & a) == 0);
                  }),
                  (b.prototype.stub = function (t) {
                    for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e;
                  }),
                  (b.prototype.mulp = function (t, e, r) {
                    var i = 2 * this.guessLen13b(t.length, e.length),
                      n = this.makeRBT(i),
                      a = this.stub(i),
                      o = Array(i),
                      f = Array(i),
                      s = Array(i),
                      h = Array(i),
                      d = Array(i),
                      c = Array(i),
                      u = r.words;
                    (u.length = i),
                      this.convert13b(t.words, t.length, o, i),
                      this.convert13b(e.words, e.length, h, i),
                      this.transform(o, a, f, s, i, n),
                      this.transform(h, a, d, c, i, n);
                    for (var l = 0; l < i; l++) {
                      var p = f[l] * d[l] - s[l] * c[l];
                      (s[l] = f[l] * c[l] + s[l] * d[l]), (f[l] = p);
                    }
                    return (
                      this.conjugate(f, s, i),
                      this.transform(f, s, u, a, i, n),
                      this.conjugate(u, a, i),
                      this.normalize13b(u, i),
                      (r.negative = t.negative ^ e.negative),
                      (r.length = t.length + e.length),
                      r.strip()
                    );
                  }),
                  (a.prototype.mul = function (t) {
                    var e = new a(null);
                    return (
                      (e.words = Array(this.length + t.length)),
                      this.mulTo(t, e)
                    );
                  }),
                  (a.prototype.mulf = function (t) {
                    var e = new a(null);
                    return (
                      (e.words = Array(this.length + t.length)), p(this, t, e)
                    );
                  }),
                  (a.prototype.imul = function (t) {
                    return this.clone().mulTo(t, this);
                  }),
                  (a.prototype.imuln = function (t) {
                    i('number' == typeof t), i(t < 67108864);
                    for (var e = 0, r = 0; r < this.length; r++) {
                      var n = (0 | this.words[r]) * t,
                        a = (67108863 & n) + (67108863 & e);
                      (e >>= 26),
                        (e += ((n / 67108864) | 0) + (a >>> 26)),
                        (this.words[r] = 67108863 & a);
                    }
                    return (
                      0 !== e && ((this.words[r] = e), this.length++), this
                    );
                  }),
                  (a.prototype.muln = function (t) {
                    return this.clone().imuln(t);
                  }),
                  (a.prototype.sqr = function () {
                    return this.mul(this);
                  }),
                  (a.prototype.isqr = function () {
                    return this.imul(this.clone());
                  }),
                  (a.prototype.pow = function (t) {
                    var e = (function (t) {
                      for (
                        var e = Array(t.bitLength()), r = 0;
                        r < e.length;
                        r++
                      ) {
                        var i = (r / 26) | 0,
                          n = r % 26;
                        e[r] = (t.words[i] & (1 << n)) >>> n;
                      }
                      return e;
                    })(t);
                    if (0 === e.length) return new a(1);
                    for (
                      var r = this, i = 0;
                      i < e.length && 0 === e[i];
                      i++, r = r.sqr()
                    );
                    if (++i < e.length)
                      for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                        0 !== e[i] && (r = r.mul(n));
                    return r;
                  }),
                  (a.prototype.iushln = function (t) {
                    i('number' == typeof t && t >= 0);
                    var e,
                      r = t % 26,
                      n = (t - r) / 26,
                      a = (67108863 >>> (26 - r)) << (26 - r);
                    if (0 !== r) {
                      var o = 0;
                      for (e = 0; e < this.length; e++) {
                        var f = this.words[e] & a,
                          s = ((0 | this.words[e]) - f) << r;
                        (this.words[e] = s | o), (o = f >>> (26 - r));
                      }
                      o && ((this.words[e] = o), this.length++);
                    }
                    if (0 !== n) {
                      for (e = this.length - 1; e >= 0; e--)
                        this.words[e + n] = this.words[e];
                      for (e = 0; e < n; e++) this.words[e] = 0;
                      this.length += n;
                    }
                    return this.strip();
                  }),
                  (a.prototype.ishln = function (t) {
                    return i(0 === this.negative), this.iushln(t);
                  }),
                  (a.prototype.iushrn = function (t, e, r) {
                    i('number' == typeof t && t >= 0),
                      (n = e ? (e - (e % 26)) / 26 : 0);
                    var n,
                      a = t % 26,
                      o = Math.min((t - a) / 26, this.length),
                      f = 67108863 ^ ((67108863 >>> a) << a);
                    if (((n -= o), (n = Math.max(0, n)), r)) {
                      for (var s = 0; s < o; s++) r.words[s] = this.words[s];
                      r.length = o;
                    }
                    if (0 === o);
                    else if (this.length > o)
                      for (this.length -= o, s = 0; s < this.length; s++)
                        this.words[s] = this.words[s + o];
                    else (this.words[0] = 0), (this.length = 1);
                    var h = 0;
                    for (
                      s = this.length - 1;
                      s >= 0 && (0 !== h || s >= n);
                      s--
                    ) {
                      var d = 0 | this.words[s];
                      (this.words[s] = (h << (26 - a)) | (d >>> a)),
                        (h = d & f);
                    }
                    return (
                      r && 0 !== h && (r.words[r.length++] = h),
                      0 === this.length &&
                        ((this.words[0] = 0), (this.length = 1)),
                      this.strip()
                    );
                  }),
                  (a.prototype.ishrn = function (t, e, r) {
                    return i(0 === this.negative), this.iushrn(t, e, r);
                  }),
                  (a.prototype.shln = function (t) {
                    return this.clone().ishln(t);
                  }),
                  (a.prototype.ushln = function (t) {
                    return this.clone().iushln(t);
                  }),
                  (a.prototype.shrn = function (t) {
                    return this.clone().ishrn(t);
                  }),
                  (a.prototype.ushrn = function (t) {
                    return this.clone().iushrn(t);
                  }),
                  (a.prototype.testn = function (t) {
                    i('number' == typeof t && t >= 0);
                    var e = t % 26,
                      r = (t - e) / 26;
                    return !(this.length <= r) && !!(this.words[r] & (1 << e));
                  }),
                  (a.prototype.imaskn = function (t) {
                    i('number' == typeof t && t >= 0);
                    var e = t % 26,
                      r = (t - e) / 26;
                    return (i(
                      0 === this.negative,
                      'imaskn works only with positive numbers'
                    ),
                    this.length <= r)
                      ? this
                      : (0 !== e && r++,
                        (this.length = Math.min(r, this.length)),
                        0 !== e &&
                          (this.words[this.length - 1] &=
                            67108863 ^ ((67108863 >>> e) << e)),
                        this.strip());
                  }),
                  (a.prototype.maskn = function (t) {
                    return this.clone().imaskn(t);
                  }),
                  (a.prototype.iaddn = function (t) {
                    return (i('number' == typeof t), i(t < 67108864), t < 0)
                      ? this.isubn(-t)
                      : 0 !== this.negative
                        ? (1 === this.length && (0 | this.words[0]) < t
                            ? ((this.words[0] = t - (0 | this.words[0])),
                              (this.negative = 0))
                            : ((this.negative = 0),
                              this.isubn(t),
                              (this.negative = 1)),
                          this)
                        : this._iaddn(t);
                  }),
                  (a.prototype._iaddn = function (t) {
                    this.words[0] += t;
                    for (
                      var e = 0;
                      e < this.length && this.words[e] >= 67108864;
                      e++
                    )
                      (this.words[e] -= 67108864),
                        e === this.length - 1
                          ? (this.words[e + 1] = 1)
                          : this.words[e + 1]++;
                    return (this.length = Math.max(this.length, e + 1)), this;
                  }),
                  (a.prototype.isubn = function (t) {
                    if ((i('number' == typeof t), i(t < 67108864), t < 0))
                      return this.iaddn(-t);
                    if (0 !== this.negative)
                      return (
                        (this.negative = 0),
                        this.iaddn(t),
                        (this.negative = 1),
                        this
                      );
                    if (
                      ((this.words[0] -= t),
                      1 === this.length && this.words[0] < 0)
                    )
                      (this.words[0] = -this.words[0]), (this.negative = 1);
                    else
                      for (var e = 0; e < this.length && this.words[e] < 0; e++)
                        (this.words[e] += 67108864), (this.words[e + 1] -= 1);
                    return this.strip();
                  }),
                  (a.prototype.addn = function (t) {
                    return this.clone().iaddn(t);
                  }),
                  (a.prototype.subn = function (t) {
                    return this.clone().isubn(t);
                  }),
                  (a.prototype.iabs = function () {
                    return (this.negative = 0), this;
                  }),
                  (a.prototype.abs = function () {
                    return this.clone().iabs();
                  }),
                  (a.prototype._ishlnsubmul = function (t, e, r) {
                    var n,
                      a,
                      o = t.length + r;
                    this._expand(o);
                    var f = 0;
                    for (n = 0; n < t.length; n++) {
                      a = (0 | this.words[n + r]) + f;
                      var s = (0 | t.words[n]) * e;
                      (a -= 67108863 & s),
                        (f = (a >> 26) - ((s / 67108864) | 0)),
                        (this.words[n + r] = 67108863 & a);
                    }
                    for (; n < this.length - r; n++)
                      (f = (a = (0 | this.words[n + r]) + f) >> 26),
                        (this.words[n + r] = 67108863 & a);
                    if (0 === f) return this.strip();
                    for (i(-1 === f), f = 0, n = 0; n < this.length; n++)
                      (f = (a = -(0 | this.words[n]) + f) >> 26),
                        (this.words[n] = 67108863 & a);
                    return (this.negative = 1), this.strip();
                  }),
                  (a.prototype._wordDiv = function (t, e) {
                    var r,
                      i = this.length - t.length,
                      n = this.clone(),
                      o = t,
                      f = 0 | o.words[o.length - 1];
                    0 != (i = 26 - this._countBits(f)) &&
                      ((o = o.ushln(i)),
                      n.iushln(i),
                      (f = 0 | o.words[o.length - 1]));
                    var s = n.length - o.length;
                    if ('mod' !== e) {
                      ((r = new a(null)).length = s + 1),
                        (r.words = Array(r.length));
                      for (var h = 0; h < r.length; h++) r.words[h] = 0;
                    }
                    var d = n.clone()._ishlnsubmul(o, 1, s);
                    0 === d.negative && ((n = d), r && (r.words[s] = 1));
                    for (var c = s - 1; c >= 0; c--) {
                      var u =
                        (0 | n.words[o.length + c]) * 67108864 +
                        (0 | n.words[o.length + c - 1]);
                      for (
                        u = Math.min((u / f) | 0, 67108863),
                          n._ishlnsubmul(o, u, c);
                        0 !== n.negative;

                      )
                        u--,
                          (n.negative = 0),
                          n._ishlnsubmul(o, 1, c),
                          n.isZero() || (n.negative ^= 1);
                      r && (r.words[c] = u);
                    }
                    return (
                      r && r.strip(),
                      n.strip(),
                      'div' !== e && 0 !== i && n.iushrn(i),
                      { div: r || null, mod: n }
                    );
                  }),
                  (a.prototype.divmod = function (t, e, r) {
                    var n, o, f;
                    return (i(!t.isZero()), this.isZero())
                      ? { div: new a(0), mod: new a(0) }
                      : 0 !== this.negative && 0 === t.negative
                        ? ((f = this.neg().divmod(t, e)),
                          'mod' !== e && (n = f.div.neg()),
                          'div' !== e &&
                            ((o = f.mod.neg()),
                            r && 0 !== o.negative && o.iadd(t)),
                          { div: n, mod: o })
                        : 0 === this.negative && 0 !== t.negative
                          ? ((f = this.divmod(t.neg(), e)),
                            'mod' !== e && (n = f.div.neg()),
                            { div: n, mod: f.mod })
                          : (this.negative & t.negative) != 0
                            ? ((f = this.neg().divmod(t.neg(), e)),
                              'div' !== e &&
                                ((o = f.mod.neg()),
                                r && 0 !== o.negative && o.isub(t)),
                              { div: f.div, mod: o })
                            : t.length > this.length || 0 > this.cmp(t)
                              ? { div: new a(0), mod: this }
                              : 1 === t.length
                                ? 'div' === e
                                  ? { div: this.divn(t.words[0]), mod: null }
                                  : 'mod' === e
                                    ? {
                                        div: null,
                                        mod: new a(this.modn(t.words[0])),
                                      }
                                    : {
                                        div: this.divn(t.words[0]),
                                        mod: new a(this.modn(t.words[0])),
                                      }
                                : this._wordDiv(t, e);
                  }),
                  (a.prototype.div = function (t) {
                    return this.divmod(t, 'div', !1).div;
                  }),
                  (a.prototype.mod = function (t) {
                    return this.divmod(t, 'mod', !1).mod;
                  }),
                  (a.prototype.umod = function (t) {
                    return this.divmod(t, 'mod', !0).mod;
                  }),
                  (a.prototype.divRound = function (t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                      i = t.ushrn(1),
                      n = t.andln(1),
                      a = r.cmp(i);
                    return a < 0 || (1 === n && 0 === a)
                      ? e.div
                      : 0 !== e.div.negative
                        ? e.div.isubn(1)
                        : e.div.iaddn(1);
                  }),
                  (a.prototype.modn = function (t) {
                    i(t <= 67108863);
                    for (
                      var e = 67108864 % t, r = 0, n = this.length - 1;
                      n >= 0;
                      n--
                    )
                      r = (e * r + (0 | this.words[n])) % t;
                    return r;
                  }),
                  (a.prototype.idivn = function (t) {
                    i(t <= 67108863);
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                      var n = (0 | this.words[r]) + 67108864 * e;
                      (this.words[r] = (n / t) | 0), (e = n % t);
                    }
                    return this.strip();
                  }),
                  (a.prototype.divn = function (t) {
                    return this.clone().idivn(t);
                  }),
                  (a.prototype.egcd = function (t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e = this,
                      r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (
                      var n = new a(1),
                        o = new a(0),
                        f = new a(0),
                        s = new a(1),
                        h = 0;
                      e.isEven() && r.isEven();

                    )
                      e.iushrn(1), r.iushrn(1), ++h;
                    for (var d = r.clone(), c = e.clone(); !e.isZero(); ) {
                      for (
                        var u = 0, l = 1;
                        (e.words[0] & l) == 0 && u < 26;
                        ++u, l <<= 1
                      );
                      if (u > 0)
                        for (e.iushrn(u); u-- > 0; )
                          (n.isOdd() || o.isOdd()) && (n.iadd(d), o.isub(c)),
                            n.iushrn(1),
                            o.iushrn(1);
                      for (
                        var p = 0, b = 1;
                        (r.words[0] & b) == 0 && p < 26;
                        ++p, b <<= 1
                      );
                      if (p > 0)
                        for (r.iushrn(p); p-- > 0; )
                          (f.isOdd() || s.isOdd()) && (f.iadd(d), s.isub(c)),
                            f.iushrn(1),
                            s.iushrn(1);
                      e.cmp(r) >= 0
                        ? (e.isub(r), n.isub(f), o.isub(s))
                        : (r.isub(e), f.isub(n), s.isub(o));
                    }
                    return { a: f, b: s, gcd: r.iushln(h) };
                  }),
                  (a.prototype._invmp = function (t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e,
                      r = this,
                      n = t.clone();
                    r = 0 !== r.negative ? r.umod(t) : r.clone();
                    for (
                      var o = new a(1), f = new a(0), s = n.clone();
                      r.cmpn(1) > 0 && n.cmpn(1) > 0;

                    ) {
                      for (
                        var h = 0, d = 1;
                        (r.words[0] & d) == 0 && h < 26;
                        ++h, d <<= 1
                      );
                      if (h > 0)
                        for (r.iushrn(h); h-- > 0; )
                          o.isOdd() && o.iadd(s), o.iushrn(1);
                      for (
                        var c = 0, u = 1;
                        (n.words[0] & u) == 0 && c < 26;
                        ++c, u <<= 1
                      );
                      if (c > 0)
                        for (n.iushrn(c); c-- > 0; )
                          f.isOdd() && f.iadd(s), f.iushrn(1);
                      r.cmp(n) >= 0
                        ? (r.isub(n), o.isub(f))
                        : (n.isub(r), f.isub(o));
                    }
                    return (
                      0 > (e = 0 === r.cmpn(1) ? o : f).cmpn(0) && e.iadd(t), e
                    );
                  }),
                  (a.prototype.gcd = function (t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                      r = t.clone();
                    (e.negative = 0), (r.negative = 0);
                    for (var i = 0; e.isEven() && r.isEven(); i++)
                      e.iushrn(1), r.iushrn(1);
                    for (;;) {
                      for (; e.isEven(); ) e.iushrn(1);
                      for (; r.isEven(); ) r.iushrn(1);
                      var n = e.cmp(r);
                      if (n < 0) {
                        var a = e;
                        (e = r), (r = a);
                      } else if (0 === n || 0 === r.cmpn(1)) break;
                      e.isub(r);
                    }
                    return r.iushln(i);
                  }),
                  (a.prototype.invm = function (t) {
                    return this.egcd(t).a.umod(t);
                  }),
                  (a.prototype.isEven = function () {
                    return (1 & this.words[0]) == 0;
                  }),
                  (a.prototype.isOdd = function () {
                    return (1 & this.words[0]) == 1;
                  }),
                  (a.prototype.andln = function (t) {
                    return this.words[0] & t;
                  }),
                  (a.prototype.bincn = function (t) {
                    i('number' == typeof t);
                    var e = t % 26,
                      r = (t - e) / 26,
                      n = 1 << e;
                    if (this.length <= r)
                      return this._expand(r + 1), (this.words[r] |= n), this;
                    for (var a = n, o = r; 0 !== a && o < this.length; o++) {
                      var f = 0 | this.words[o];
                      (f += a),
                        (a = f >>> 26),
                        (f &= 67108863),
                        (this.words[o] = f);
                    }
                    return (
                      0 !== a && ((this.words[o] = a), this.length++), this
                    );
                  }),
                  (a.prototype.isZero = function () {
                    return 1 === this.length && 0 === this.words[0];
                  }),
                  (a.prototype.cmpn = function (t) {
                    var e,
                      r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if ((this.strip(), this.length > 1)) e = 1;
                    else {
                      r && (t = -t), i(t <= 67108863, 'Number is too big');
                      var n = 0 | this.words[0];
                      e = n === t ? 0 : n < t ? -1 : 1;
                    }
                    return 0 !== this.negative ? 0 | -e : e;
                  }),
                  (a.prototype.cmp = function (t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e;
                  }),
                  (a.prototype.ucmp = function (t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                      var i = 0 | this.words[r],
                        n = 0 | t.words[r];
                      if (i !== n) {
                        i < n ? (e = -1) : i > n && (e = 1);
                        break;
                      }
                    }
                    return e;
                  }),
                  (a.prototype.gtn = function (t) {
                    return 1 === this.cmpn(t);
                  }),
                  (a.prototype.gt = function (t) {
                    return 1 === this.cmp(t);
                  }),
                  (a.prototype.gten = function (t) {
                    return this.cmpn(t) >= 0;
                  }),
                  (a.prototype.gte = function (t) {
                    return this.cmp(t) >= 0;
                  }),
                  (a.prototype.ltn = function (t) {
                    return -1 === this.cmpn(t);
                  }),
                  (a.prototype.lt = function (t) {
                    return -1 === this.cmp(t);
                  }),
                  (a.prototype.lten = function (t) {
                    return 0 >= this.cmpn(t);
                  }),
                  (a.prototype.lte = function (t) {
                    return 0 >= this.cmp(t);
                  }),
                  (a.prototype.eqn = function (t) {
                    return 0 === this.cmpn(t);
                  }),
                  (a.prototype.eq = function (t) {
                    return 0 === this.cmp(t);
                  }),
                  (a.red = function (t) {
                    return new M(t);
                  }),
                  (a.prototype.toRed = function (t) {
                    return (
                      i(!this.red, 'Already a number in reduction context'),
                      i(0 === this.negative, 'red works only with positives'),
                      t.convertTo(this)._forceRed(t)
                    );
                  }),
                  (a.prototype.fromRed = function () {
                    return (
                      i(
                        this.red,
                        'fromRed works only with numbers in reduction context'
                      ),
                      this.red.convertFrom(this)
                    );
                  }),
                  (a.prototype._forceRed = function (t) {
                    return (this.red = t), this;
                  }),
                  (a.prototype.forceRed = function (t) {
                    return (
                      i(!this.red, 'Already a number in reduction context'),
                      this._forceRed(t)
                    );
                  }),
                  (a.prototype.redAdd = function (t) {
                    return (
                      i(this.red, 'redAdd works only with red numbers'),
                      this.red.add(this, t)
                    );
                  }),
                  (a.prototype.redIAdd = function (t) {
                    return (
                      i(this.red, 'redIAdd works only with red numbers'),
                      this.red.iadd(this, t)
                    );
                  }),
                  (a.prototype.redSub = function (t) {
                    return (
                      i(this.red, 'redSub works only with red numbers'),
                      this.red.sub(this, t)
                    );
                  }),
                  (a.prototype.redISub = function (t) {
                    return (
                      i(this.red, 'redISub works only with red numbers'),
                      this.red.isub(this, t)
                    );
                  }),
                  (a.prototype.redShl = function (t) {
                    return (
                      i(this.red, 'redShl works only with red numbers'),
                      this.red.shl(this, t)
                    );
                  }),
                  (a.prototype.redMul = function (t) {
                    return (
                      i(this.red, 'redMul works only with red numbers'),
                      this.red._verify2(this, t),
                      this.red.mul(this, t)
                    );
                  }),
                  (a.prototype.redIMul = function (t) {
                    return (
                      i(this.red, 'redMul works only with red numbers'),
                      this.red._verify2(this, t),
                      this.red.imul(this, t)
                    );
                  }),
                  (a.prototype.redSqr = function () {
                    return (
                      i(this.red, 'redSqr works only with red numbers'),
                      this.red._verify1(this),
                      this.red.sqr(this)
                    );
                  }),
                  (a.prototype.redISqr = function () {
                    return (
                      i(this.red, 'redISqr works only with red numbers'),
                      this.red._verify1(this),
                      this.red.isqr(this)
                    );
                  }),
                  (a.prototype.redSqrt = function () {
                    return (
                      i(this.red, 'redSqrt works only with red numbers'),
                      this.red._verify1(this),
                      this.red.sqrt(this)
                    );
                  }),
                  (a.prototype.redInvm = function () {
                    return (
                      i(this.red, 'redInvm works only with red numbers'),
                      this.red._verify1(this),
                      this.red.invm(this)
                    );
                  }),
                  (a.prototype.redNeg = function () {
                    return (
                      i(this.red, 'redNeg works only with red numbers'),
                      this.red._verify1(this),
                      this.red.neg(this)
                    );
                  }),
                  (a.prototype.redPow = function (t) {
                    return (
                      i(this.red && !t.red, 'redPow(normalNum)'),
                      this.red._verify1(this),
                      this.red.pow(this, t)
                    );
                  });
                var m = { k256: null, p224: null, p192: null, p25519: null };
                function v(t, e) {
                  (this.name = t),
                    (this.p = new a(e, 16)),
                    (this.n = this.p.bitLength()),
                    (this.k = new a(1).iushln(this.n).isub(this.p)),
                    (this.tmp = this._tmp());
                }
                function y() {
                  v.call(
                    this,
                    'k256',
                    'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
                  );
                }
                function g() {
                  v.call(
                    this,
                    'p224',
                    'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
                  );
                }
                function _() {
                  v.call(
                    this,
                    'p192',
                    'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
                  );
                }
                function w() {
                  v.call(
                    this,
                    '25519',
                    '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
                  );
                }
                function M(t) {
                  if ('string' == typeof t) {
                    var e = a._prime(t);
                    (this.m = e.p), (this.prime = e);
                  } else
                    i(t.gtn(1), 'modulus must be greater than 1'),
                      (this.m = t),
                      (this.prime = null);
                }
                function S(t) {
                  M.call(this, t),
                    (this.shift = this.m.bitLength()),
                    this.shift % 26 != 0 &&
                      (this.shift += 26 - (this.shift % 26)),
                    (this.r = new a(1).iushln(this.shift)),
                    (this.r2 = this.imod(this.r.sqr())),
                    (this.rinv = this.r._invmp(this.m)),
                    (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
                    (this.minv = this.minv.umod(this.r)),
                    (this.minv = this.r.sub(this.minv));
                }
                (v.prototype._tmp = function () {
                  var t = new a(null);
                  return (t.words = Array(Math.ceil(this.n / 13))), t;
                }),
                  (v.prototype.ireduce = function (t) {
                    var e,
                      r = t;
                    do
                      this.split(r, this.tmp),
                        (e = (r = (r = this.imulK(r)).iadd(
                          this.tmp
                        )).bitLength());
                    while (e > this.n);
                    var i = e < this.n ? -1 : r.ucmp(this.p);
                    return (
                      0 === i
                        ? ((r.words[0] = 0), (r.length = 1))
                        : i > 0
                          ? r.isub(this.p)
                          : void 0 !== r.strip
                            ? r.strip()
                            : r._strip(),
                      r
                    );
                  }),
                  (v.prototype.split = function (t, e) {
                    t.iushrn(this.n, 0, e);
                  }),
                  (v.prototype.imulK = function (t) {
                    return t.imul(this.k);
                  }),
                  n(y, v),
                  (y.prototype.split = function (t, e) {
                    for (var r = Math.min(t.length, 9), i = 0; i < r; i++)
                      e.words[i] = t.words[i];
                    if (((e.length = r), t.length <= 9)) {
                      (t.words[0] = 0), (t.length = 1);
                      return;
                    }
                    var n = t.words[9];
                    for (
                      i = 10, e.words[e.length++] = 4194303 & n;
                      i < t.length;
                      i++
                    ) {
                      var a = 0 | t.words[i];
                      (t.words[i - 10] = ((4194303 & a) << 4) | (n >>> 22)),
                        (n = a);
                    }
                    (n >>>= 22),
                      (t.words[i - 10] = n),
                      0 === n && t.length > 10
                        ? (t.length -= 10)
                        : (t.length -= 9);
                  }),
                  (y.prototype.imulK = function (t) {
                    (t.words[t.length] = 0),
                      (t.words[t.length + 1] = 0),
                      (t.length += 2);
                    for (var e = 0, r = 0; r < t.length; r++) {
                      var i = 0 | t.words[r];
                      (e += 977 * i),
                        (t.words[r] = 67108863 & e),
                        (e = 64 * i + ((e / 67108864) | 0));
                    }
                    return (
                      0 === t.words[t.length - 1] &&
                        (t.length--, 0 === t.words[t.length - 1] && t.length--),
                      t
                    );
                  }),
                  n(g, v),
                  n(_, v),
                  n(w, v),
                  (w.prototype.imulK = function (t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                      var i = (0 | t.words[r]) * 19 + e,
                        n = 67108863 & i;
                      (i >>>= 26), (t.words[r] = n), (e = i);
                    }
                    return 0 !== e && (t.words[t.length++] = e), t;
                  }),
                  (a._prime = function (t) {
                    var e;
                    if (m[t]) return m[t];
                    if ('k256' === t) e = new y();
                    else if ('p224' === t) e = new g();
                    else if ('p192' === t) e = new _();
                    else if ('p25519' === t) e = new w();
                    else throw Error('Unknown prime ' + t);
                    return (m[t] = e), e;
                  }),
                  (M.prototype._verify1 = function (t) {
                    i(0 === t.negative, 'red works only with positives'),
                      i(t.red, 'red works only with red numbers');
                  }),
                  (M.prototype._verify2 = function (t, e) {
                    i(
                      (t.negative | e.negative) == 0,
                      'red works only with positives'
                    ),
                      i(
                        t.red && t.red === e.red,
                        'red works only with red numbers'
                      );
                  }),
                  (M.prototype.imod = function (t) {
                    return this.prime
                      ? this.prime.ireduce(t)._forceRed(this)
                      : t.umod(this.m)._forceRed(this);
                  }),
                  (M.prototype.neg = function (t) {
                    return t.isZero()
                      ? t.clone()
                      : this.m.sub(t)._forceRed(this);
                  }),
                  (M.prototype.add = function (t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return (
                      r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    );
                  }),
                  (M.prototype.iadd = function (t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r;
                  }),
                  (M.prototype.sub = function (t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
                  }),
                  (M.prototype.isub = function (t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r;
                  }),
                  (M.prototype.shl = function (t, e) {
                    return this._verify1(t), this.imod(t.ushln(e));
                  }),
                  (M.prototype.imul = function (t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e));
                  }),
                  (M.prototype.mul = function (t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e));
                  }),
                  (M.prototype.isqr = function (t) {
                    return this.imul(t, t.clone());
                  }),
                  (M.prototype.sqr = function (t) {
                    return this.mul(t, t);
                  }),
                  (M.prototype.sqrt = function (t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if ((i(e % 2 == 1), 3 === e)) {
                      var r = this.m.add(new a(1)).iushrn(2);
                      return this.pow(t, r);
                    }
                    for (
                      var n = this.m.subn(1), o = 0;
                      !n.isZero() && 0 === n.andln(1);

                    )
                      o++, n.iushrn(1);
                    i(!n.isZero());
                    var f = new a(1).toRed(this),
                      s = f.redNeg(),
                      h = this.m.subn(1).iushrn(1),
                      d = this.m.bitLength();
                    for (
                      d = new a(2 * d * d).toRed(this);
                      0 !== this.pow(d, h).cmp(s);

                    )
                      d.redIAdd(s);
                    for (
                      var c = this.pow(d, n),
                        u = this.pow(t, n.addn(1).iushrn(1)),
                        l = this.pow(t, n),
                        p = o;
                      0 !== l.cmp(f);

                    ) {
                      for (var b = l, m = 0; 0 !== b.cmp(f); m++)
                        b = b.redSqr();
                      i(m < p);
                      var v = this.pow(c, new a(1).iushln(p - m - 1));
                      (u = u.redMul(v)),
                        (c = v.redSqr()),
                        (l = l.redMul(c)),
                        (p = m);
                    }
                    return u;
                  }),
                  (M.prototype.invm = function (t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative
                      ? ((e.negative = 0), this.imod(e).redNeg())
                      : this.imod(e);
                  }),
                  (M.prototype.pow = function (t, e) {
                    if (e.isZero()) return new a(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = Array(16);
                    (r[0] = new a(1).toRed(this)), (r[1] = t);
                    for (var i = 2; i < r.length; i++)
                      r[i] = this.mul(r[i - 1], t);
                    var n = r[0],
                      o = 0,
                      f = 0,
                      s = e.bitLength() % 26;
                    for (0 === s && (s = 26), i = e.length - 1; i >= 0; i--) {
                      for (var h = e.words[i], d = s - 1; d >= 0; d--) {
                        var c = (h >> d) & 1;
                        if (
                          (n !== r[0] && (n = this.sqr(n)), 0 === c && 0 === o)
                        ) {
                          f = 0;
                          continue;
                        }
                        (o <<= 1),
                          (o |= c),
                          (4 == ++f || (0 === i && 0 === d)) &&
                            ((n = this.mul(n, r[o])), (f = 0), (o = 0));
                      }
                      s = 26;
                    }
                    return n;
                  }),
                  (M.prototype.convertTo = function (t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e;
                  }),
                  (M.prototype.convertFrom = function (t) {
                    var e = t.clone();
                    return (e.red = null), e;
                  }),
                  (a.mont = function (t) {
                    return new S(t);
                  }),
                  n(S, M),
                  (S.prototype.convertTo = function (t) {
                    return this.imod(t.ushln(this.shift));
                  }),
                  (S.prototype.convertFrom = function (t) {
                    var e = this.imod(t.mul(this.rinv));
                    return (e.red = null), e;
                  }),
                  (S.prototype.imul = function (t, e) {
                    if (t.isZero() || e.isZero())
                      return (t.words[0] = 0), (t.length = 1), t;
                    var r = t.imul(e),
                      i = r
                        .maskn(this.shift)
                        .mul(this.minv)
                        .imaskn(this.shift)
                        .mul(this.m),
                      n = r.isub(i).iushrn(this.shift),
                      a = n;
                    return (
                      n.cmp(this.m) >= 0
                        ? (a = n.isub(this.m))
                        : 0 > n.cmpn(0) && (a = n.iadd(this.m)),
                      a._forceRed(this)
                    );
                  }),
                  (S.prototype.mul = function (t, e) {
                    if (t.isZero() || e.isZero())
                      return new a(0)._forceRed(this);
                    var r = t.mul(e),
                      i = r
                        .maskn(this.shift)
                        .mul(this.minv)
                        .imaskn(this.shift)
                        .mul(this.m),
                      n = r.isub(i).iushrn(this.shift),
                      o = n;
                    return (
                      n.cmp(this.m) >= 0
                        ? (o = n.isub(this.m))
                        : 0 > n.cmpn(0) && (o = n.iadd(this.m)),
                      o._forceRed(this)
                    );
                  }),
                  (S.prototype.invm = function (t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(
                      this
                    );
                  });
              })((t = r.nmd(t)), this);
            },
            1670: function (t, e, r) {
              !(function (t, e) {
                'use strict';
                function i(t, e) {
                  if (!t) throw Error(e || 'Assertion failed');
                }
                function n(t, e) {
                  t.super_ = e;
                  var r = function () {};
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t);
                }
                function a(t, e, r) {
                  if (a.isBN(t)) return t;
                  (this.negative = 0),
                    (this.words = null),
                    (this.length = 0),
                    (this.red = null),
                    null !== t &&
                      (('le' === e || 'be' === e) && ((r = e), (e = 10)),
                      this._init(t || 0, e || 10, r || 'be'));
                }
                'object' == typeof t ? (t.exports = a) : (e.BN = a),
                  (a.BN = a),
                  (a.wordSize = 26);
                try {
                  d = r(4300).Buffer;
                } catch (t) {}
                function o(t, e, r) {
                  for (
                    var n = 0, a = Math.min(t.length, r), o = 0, f = e;
                    f < a;
                    f++
                  ) {
                    var s,
                      h = t.charCodeAt(f) - 48;
                    (n <<= 4),
                      (n |= s =
                        h >= 49 && h <= 54
                          ? h - 49 + 10
                          : h >= 17 && h <= 22
                            ? h - 17 + 10
                            : h),
                      (o |= s);
                  }
                  return i(!(240 & o), 'Invalid character in ' + t), n;
                }
                function f(t, e, r, n) {
                  for (
                    var a = 0, o = 0, f = Math.min(t.length, r), s = e;
                    s < f;
                    s++
                  ) {
                    var h = t.charCodeAt(s) - 48;
                    (a *= n),
                      (o = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
                      i(h >= 0 && o < n, 'Invalid character'),
                      (a += o);
                  }
                  return a;
                }
                function s(t, e) {
                  (t.words = e.words),
                    (t.length = e.length),
                    (t.negative = e.negative),
                    (t.red = e.red);
                }
                function h() {
                  return (
                    (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
                  );
                }
                (a.isBN = function (t) {
                  return (
                    t instanceof a ||
                    (null !== t &&
                      'object' == typeof t &&
                      t.constructor.wordSize === a.wordSize &&
                      Array.isArray(t.words))
                  );
                }),
                  (a.max = function (t, e) {
                    return t.cmp(e) > 0 ? t : e;
                  }),
                  (a.min = function (t, e) {
                    return 0 > t.cmp(e) ? t : e;
                  }),
                  (a.prototype._init = function (t, e, r) {
                    if ('number' == typeof t) return this._initNumber(t, e, r);
                    if ('object' == typeof t) return this._initArray(t, e, r);
                    'hex' === e && (e = 16),
                      i(e === (0 | e) && e >= 2 && e <= 36);
                    var n = 0;
                    '-' === (t = t.toString().replace(/\s+/g, ''))[0] && n++,
                      16 === e
                        ? this._parseHex(t, n)
                        : this._parseBase(t, e, n),
                      '-' === t[0] && (this.negative = 1),
                      this._strip(),
                      'le' === r && this._initArray(this.toArray(), e, r);
                  }),
                  (a.prototype._initNumber = function (t, e, r) {
                    t < 0 && ((this.negative = 1), (t = -t)),
                      t < 67108864
                        ? ((this.words = [67108863 & t]), (this.length = 1))
                        : t < 4503599627370496
                          ? ((this.words = [
                              67108863 & t,
                              (t / 67108864) & 67108863,
                            ]),
                            (this.length = 2))
                          : (i(t < 9007199254740992),
                            (this.words = [
                              67108863 & t,
                              (t / 67108864) & 67108863,
                              1,
                            ]),
                            (this.length = 3)),
                      'le' === r && this._initArray(this.toArray(), e, r);
                  }),
                  (a.prototype._initArray = function (t, e, r) {
                    if ((i('number' == typeof t.length), t.length <= 0))
                      return (this.words = [0]), (this.length = 1), this;
                    (this.length = Math.ceil(t.length / 3)),
                      (this.words = Array(this.length));
                    for (var n, a, o = 0; o < this.length; o++)
                      this.words[o] = 0;
                    var f = 0;
                    if ('be' === r)
                      for (o = t.length - 1, n = 0; o >= 0; o -= 3)
                        (a = t[o] | (t[o - 1] << 8) | (t[o - 2] << 16)),
                          (this.words[n] |= (a << f) & 67108863),
                          (this.words[n + 1] = (a >>> (26 - f)) & 67108863),
                          (f += 24) >= 26 && ((f -= 26), n++);
                    else if ('le' === r)
                      for (o = 0, n = 0; o < t.length; o += 3)
                        (a = t[o] | (t[o + 1] << 8) | (t[o + 2] << 16)),
                          (this.words[n] |= (a << f) & 67108863),
                          (this.words[n + 1] = (a >>> (26 - f)) & 67108863),
                          (f += 24) >= 26 && ((f -= 26), n++);
                    return this._strip();
                  }),
                  (a.prototype._parseHex = function (t, e) {
                    (this.length = Math.ceil((t.length - e) / 6)),
                      (this.words = Array(this.length));
                    for (var r, i, n = 0; n < this.length; n++)
                      this.words[n] = 0;
                    var a = 0;
                    for (n = t.length - 6, r = 0; n >= e; n -= 6)
                      (i = o(t, n, n + 6)),
                        (this.words[r] |= (i << a) & 67108863),
                        (this.words[r + 1] |= (i >>> (26 - a)) & 4194303),
                        (a += 24) >= 26 && ((a -= 26), r++);
                    n + 6 !== e &&
                      ((i = o(t, e, n + 6)),
                      (this.words[r] |= (i << a) & 67108863),
                      (this.words[r + 1] |= (i >>> (26 - a)) & 4194303)),
                      this._strip();
                  }),
                  (a.prototype._parseBase = function (t, e, r) {
                    (this.words = [0]), (this.length = 1);
                    for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
                    i--, (n = (n / e) | 0);
                    for (
                      var a = t.length - r,
                        o = a % i,
                        s = Math.min(a, a - o) + r,
                        h = 0,
                        d = r;
                      d < s;
                      d += i
                    )
                      (h = f(t, d, d + i, e)),
                        this.imuln(n),
                        this.words[0] + h < 67108864
                          ? (this.words[0] += h)
                          : this._iaddn(h);
                    if (0 !== o) {
                      var c = 1;
                      for (h = f(t, d, t.length, e), d = 0; d < o; d++) c *= e;
                      this.imuln(c),
                        this.words[0] + h < 67108864
                          ? (this.words[0] += h)
                          : this._iaddn(h);
                    }
                  }),
                  (a.prototype.copy = function (t) {
                    t.words = Array(this.length);
                    for (var e = 0; e < this.length; e++)
                      t.words[e] = this.words[e];
                    (t.length = this.length),
                      (t.negative = this.negative),
                      (t.red = this.red);
                  }),
                  (a.prototype._move = function (t) {
                    s(t, this);
                  }),
                  (a.prototype.clone = function () {
                    var t = new a(null);
                    return this.copy(t), t;
                  }),
                  (a.prototype._expand = function (t) {
                    for (; this.length < t; ) this.words[this.length++] = 0;
                    return this;
                  }),
                  (a.prototype._strip = function () {
                    for (
                      ;
                      this.length > 1 && 0 === this.words[this.length - 1];

                    )
                      this.length--;
                    return this._normSign();
                  }),
                  (a.prototype._normSign = function () {
                    return (
                      1 === this.length &&
                        0 === this.words[0] &&
                        (this.negative = 0),
                      this
                    );
                  }),
                  'undefined' != typeof Symbol &&
                  'function' == typeof Symbol.for
                    ? (a.prototype[Symbol.for('nodejs.util.inspect.custom')] =
                        h)
                    : (a.prototype.inspect = h);
                var d,
                  c = [
                    '',
                    '0',
                    '00',
                    '000',
                    '0000',
                    '00000',
                    '000000',
                    '0000000',
                    '00000000',
                    '000000000',
                    '0000000000',
                    '00000000000',
                    '000000000000',
                    '0000000000000',
                    '00000000000000',
                    '000000000000000',
                    '0000000000000000',
                    '00000000000000000',
                    '000000000000000000',
                    '0000000000000000000',
                    '00000000000000000000',
                    '000000000000000000000',
                    '0000000000000000000000',
                    '00000000000000000000000',
                    '000000000000000000000000',
                    '0000000000000000000000000',
                  ],
                  u = [
                    0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6,
                    6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                  ],
                  l = [
                    0, 0, 33554432, 43046721, 16777216, 48828125, 60466176,
                    40353607, 16777216, 43046721, 1e7, 19487171, 35831808,
                    62748517, 7529536, 11390625, 16777216, 24137569, 34012224,
                    47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625,
                    11881376, 14348907, 17210368, 20511149, 243e5, 28629151,
                    33554432, 39135393, 45435424, 52521875, 60466176,
                  ];
                function p(t, e, r) {
                  r.negative = e.negative ^ t.negative;
                  var i = (t.length + e.length) | 0;
                  (r.length = i), (i = (i - 1) | 0);
                  var n = 0 | t.words[0],
                    a = 0 | e.words[0],
                    o = n * a,
                    f = 67108863 & o,
                    s = (o / 67108864) | 0;
                  r.words[0] = f;
                  for (var h = 1; h < i; h++) {
                    for (
                      var d = s >>> 26,
                        c = 67108863 & s,
                        u = Math.min(h, e.length - 1),
                        l = Math.max(0, h - t.length + 1);
                      l <= u;
                      l++
                    ) {
                      var p = (h - l) | 0;
                      (d +=
                        ((o = (n = 0 | t.words[p]) * (a = 0 | e.words[l]) + c) /
                          67108864) |
                        0),
                        (c = 67108863 & o);
                    }
                    (r.words[h] = 0 | c), (s = 0 | d);
                  }
                  return (
                    0 !== s ? (r.words[h] = 0 | s) : r.length--, r._strip()
                  );
                }
                (a.prototype.toString = function (t, e) {
                  if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
                    r = '';
                    for (var r, n = 0, a = 0, o = 0; o < this.length; o++) {
                      var f = this.words[o],
                        s = (((f << n) | a) & 16777215).toString(16);
                      (r =
                        0 != (a = (f >>> (24 - n)) & 16777215) ||
                        o !== this.length - 1
                          ? c[6 - s.length] + s + r
                          : s + r),
                        (n += 2) >= 26 && ((n -= 26), o--);
                    }
                    for (
                      0 !== a && (r = a.toString(16) + r);
                      r.length % e != 0;

                    )
                      r = '0' + r;
                    return 0 !== this.negative && (r = '-' + r), r;
                  }
                  if (t === (0 | t) && t >= 2 && t <= 36) {
                    var h = u[t],
                      d = l[t];
                    r = '';
                    var p = this.clone();
                    for (p.negative = 0; !p.isZero(); ) {
                      var b = p.modrn(d).toString(t);
                      r = (p = p.idivn(d)).isZero()
                        ? b + r
                        : c[h - b.length] + b + r;
                    }
                    for (this.isZero() && (r = '0' + r); r.length % e != 0; )
                      r = '0' + r;
                    return 0 !== this.negative && (r = '-' + r), r;
                  }
                  i(!1, 'Base should be between 2 and 36');
                }),
                  (a.prototype.toNumber = function () {
                    var t = this.words[0];
                    return (
                      2 === this.length
                        ? (t += 67108864 * this.words[1])
                        : 3 === this.length && 1 === this.words[2]
                          ? (t += 4503599627370496 + 67108864 * this.words[1])
                          : this.length > 2 &&
                            i(!1, 'Number can only safely store up to 53 bits'),
                      0 !== this.negative ? -t : t
                    );
                  }),
                  (a.prototype.toJSON = function () {
                    return this.toString(16, 2);
                  }),
                  d &&
                    (a.prototype.toBuffer = function (t, e) {
                      return this.toArrayLike(d, t, e);
                    }),
                  (a.prototype.toArray = function (t, e) {
                    return this.toArrayLike(Array, t, e);
                  }),
                  (a.prototype.toArrayLike = function (t, e, r) {
                    this._strip();
                    var n = this.byteLength(),
                      a = r || Math.max(1, n);
                    i(n <= a, 'byte array longer than desired length'),
                      i(a > 0, 'Requested array length <= 0');
                    var o = t.allocUnsafe ? t.allocUnsafe(a) : new t(a);
                    return (
                      this['_toArrayLike' + ('le' === e ? 'LE' : 'BE')](o, n), o
                    );
                  }),
                  (a.prototype._toArrayLikeLE = function (t, e) {
                    for (var r = 0, i = 0, n = 0, a = 0; n < this.length; n++) {
                      var o = (this.words[n] << a) | i;
                      (t[r++] = 255 & o),
                        r < t.length && (t[r++] = (o >> 8) & 255),
                        r < t.length && (t[r++] = (o >> 16) & 255),
                        6 === a
                          ? (r < t.length && (t[r++] = (o >> 24) & 255),
                            (i = 0),
                            (a = 0))
                          : ((i = o >>> 24), (a += 2));
                    }
                    if (r < t.length)
                      for (t[r++] = i; r < t.length; ) t[r++] = 0;
                  }),
                  (a.prototype._toArrayLikeBE = function (t, e) {
                    for (
                      var r = t.length - 1, i = 0, n = 0, a = 0;
                      n < this.length;
                      n++
                    ) {
                      var o = (this.words[n] << a) | i;
                      (t[r--] = 255 & o),
                        r >= 0 && (t[r--] = (o >> 8) & 255),
                        r >= 0 && (t[r--] = (o >> 16) & 255),
                        6 === a
                          ? (r >= 0 && (t[r--] = (o >> 24) & 255),
                            (i = 0),
                            (a = 0))
                          : ((i = o >>> 24), (a += 2));
                    }
                    if (r >= 0) for (t[r--] = i; r >= 0; ) t[r--] = 0;
                  }),
                  Math.clz32
                    ? (a.prototype._countBits = function (t) {
                        return 32 - Math.clz32(t);
                      })
                    : (a.prototype._countBits = function (t) {
                        var e = t,
                          r = 0;
                        return (
                          e >= 4096 && ((r += 13), (e >>>= 13)),
                          e >= 64 && ((r += 7), (e >>>= 7)),
                          e >= 8 && ((r += 4), (e >>>= 4)),
                          e >= 2 && ((r += 2), (e >>>= 2)),
                          r + e
                        );
                      }),
                  (a.prototype._zeroBits = function (t) {
                    if (0 === t) return 26;
                    var e = t,
                      r = 0;
                    return (
                      (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
                      (127 & e) == 0 && ((r += 7), (e >>>= 7)),
                      (15 & e) == 0 && ((r += 4), (e >>>= 4)),
                      (3 & e) == 0 && ((r += 2), (e >>>= 2)),
                      (1 & e) == 0 && r++,
                      r
                    );
                  }),
                  (a.prototype.bitLength = function () {
                    var t = this.words[this.length - 1],
                      e = this._countBits(t);
                    return (this.length - 1) * 26 + e;
                  }),
                  (a.prototype.zeroBits = function () {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                      var r = this._zeroBits(this.words[e]);
                      if (((t += r), 26 !== r)) break;
                    }
                    return t;
                  }),
                  (a.prototype.byteLength = function () {
                    return Math.ceil(this.bitLength() / 8);
                  }),
                  (a.prototype.toTwos = function (t) {
                    return 0 !== this.negative
                      ? this.abs().inotn(t).iaddn(1)
                      : this.clone();
                  }),
                  (a.prototype.fromTwos = function (t) {
                    return this.testn(t - 1)
                      ? this.notn(t).iaddn(1).ineg()
                      : this.clone();
                  }),
                  (a.prototype.isNeg = function () {
                    return 0 !== this.negative;
                  }),
                  (a.prototype.neg = function () {
                    return this.clone().ineg();
                  }),
                  (a.prototype.ineg = function () {
                    return this.isZero() || (this.negative ^= 1), this;
                  }),
                  (a.prototype.iuor = function (t) {
                    for (; this.length < t.length; )
                      this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++)
                      this.words[e] = this.words[e] | t.words[e];
                    return this._strip();
                  }),
                  (a.prototype.ior = function (t) {
                    return i((this.negative | t.negative) == 0), this.iuor(t);
                  }),
                  (a.prototype.or = function (t) {
                    return this.length > t.length
                      ? this.clone().ior(t)
                      : t.clone().ior(this);
                  }),
                  (a.prototype.uor = function (t) {
                    return this.length > t.length
                      ? this.clone().iuor(t)
                      : t.clone().iuor(this);
                  }),
                  (a.prototype.iuand = function (t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++)
                      this.words[r] = this.words[r] & t.words[r];
                    return (this.length = e.length), this._strip();
                  }),
                  (a.prototype.iand = function (t) {
                    return i((this.negative | t.negative) == 0), this.iuand(t);
                  }),
                  (a.prototype.and = function (t) {
                    return this.length > t.length
                      ? this.clone().iand(t)
                      : t.clone().iand(this);
                  }),
                  (a.prototype.uand = function (t) {
                    return this.length > t.length
                      ? this.clone().iuand(t)
                      : t.clone().iuand(this);
                  }),
                  (a.prototype.iuxor = function (t) {
                    this.length > t.length
                      ? ((e = this), (r = t))
                      : ((e = t), (r = this));
                    for (var e, r, i = 0; i < r.length; i++)
                      this.words[i] = e.words[i] ^ r.words[i];
                    if (this !== e)
                      for (; i < e.length; i++) this.words[i] = e.words[i];
                    return (this.length = e.length), this._strip();
                  }),
                  (a.prototype.ixor = function (t) {
                    return i((this.negative | t.negative) == 0), this.iuxor(t);
                  }),
                  (a.prototype.xor = function (t) {
                    return this.length > t.length
                      ? this.clone().ixor(t)
                      : t.clone().ixor(this);
                  }),
                  (a.prototype.uxor = function (t) {
                    return this.length > t.length
                      ? this.clone().iuxor(t)
                      : t.clone().iuxor(this);
                  }),
                  (a.prototype.inotn = function (t) {
                    i('number' == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                      r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var n = 0; n < e; n++)
                      this.words[n] = 67108863 & ~this.words[n];
                    return (
                      r > 0 &&
                        (this.words[n] =
                          ~this.words[n] & (67108863 >> (26 - r))),
                      this._strip()
                    );
                  }),
                  (a.prototype.notn = function (t) {
                    return this.clone().inotn(t);
                  }),
                  (a.prototype.setn = function (t, e) {
                    i('number' == typeof t && t >= 0);
                    var r = (t / 26) | 0,
                      n = t % 26;
                    return (
                      this._expand(r + 1),
                      e
                        ? (this.words[r] = this.words[r] | (1 << n))
                        : (this.words[r] = this.words[r] & ~(1 << n)),
                      this._strip()
                    );
                  }),
                  (a.prototype.iadd = function (t) {
                    if (0 !== this.negative && 0 === t.negative)
                      return (
                        (this.negative = 0),
                        (e = this.isub(t)),
                        (this.negative ^= 1),
                        this._normSign()
                      );
                    if (0 === this.negative && 0 !== t.negative)
                      return (
                        (t.negative = 0),
                        (e = this.isub(t)),
                        (t.negative = 1),
                        e._normSign()
                      );
                    this.length > t.length
                      ? ((r = this), (i = t))
                      : ((r = t), (i = this));
                    for (var e, r, i, n = 0, a = 0; a < i.length; a++)
                      (e = (0 | r.words[a]) + (0 | i.words[a]) + n),
                        (this.words[a] = 67108863 & e),
                        (n = e >>> 26);
                    for (; 0 !== n && a < r.length; a++)
                      (e = (0 | r.words[a]) + n),
                        (this.words[a] = 67108863 & e),
                        (n = e >>> 26);
                    if (((this.length = r.length), 0 !== n))
                      (this.words[this.length] = n), this.length++;
                    else if (r !== this)
                      for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this;
                  }),
                  (a.prototype.add = function (t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative
                      ? ((t.negative = 0),
                        (e = this.sub(t)),
                        (t.negative ^= 1),
                        e)
                      : 0 === t.negative && 0 !== this.negative
                        ? ((this.negative = 0),
                          (e = t.sub(this)),
                          (this.negative = 1),
                          e)
                        : this.length > t.length
                          ? this.clone().iadd(t)
                          : t.clone().iadd(this);
                  }),
                  (a.prototype.isub = function (t) {
                    if (0 !== t.negative) {
                      t.negative = 0;
                      var e,
                        r,
                        i = this.iadd(t);
                      return (t.negative = 1), i._normSign();
                    }
                    if (0 !== this.negative)
                      return (
                        (this.negative = 0),
                        this.iadd(t),
                        (this.negative = 1),
                        this._normSign()
                      );
                    var n = this.cmp(t);
                    if (0 === n)
                      return (
                        (this.negative = 0),
                        (this.length = 1),
                        (this.words[0] = 0),
                        this
                      );
                    n > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
                    for (var a = 0, o = 0; o < r.length; o++)
                      (a = (i = (0 | e.words[o]) - (0 | r.words[o]) + a) >> 26),
                        (this.words[o] = 67108863 & i);
                    for (; 0 !== a && o < e.length; o++)
                      (a = (i = (0 | e.words[o]) + a) >> 26),
                        (this.words[o] = 67108863 & i);
                    if (0 === a && o < e.length && e !== this)
                      for (; o < e.length; o++) this.words[o] = e.words[o];
                    return (
                      (this.length = Math.max(this.length, o)),
                      e !== this && (this.negative = 1),
                      this._strip()
                    );
                  }),
                  (a.prototype.sub = function (t) {
                    return this.clone().isub(t);
                  });
                var b = function (t, e, r) {
                  var i,
                    n,
                    a,
                    o = t.words,
                    f = e.words,
                    s = r.words,
                    h = 0,
                    d = 0 | o[0],
                    c = 8191 & d,
                    u = d >>> 13,
                    l = 0 | o[1],
                    p = 8191 & l,
                    b = l >>> 13,
                    m = 0 | o[2],
                    v = 8191 & m,
                    y = m >>> 13,
                    g = 0 | o[3],
                    _ = 8191 & g,
                    w = g >>> 13,
                    M = 0 | o[4],
                    S = 8191 & M,
                    k = M >>> 13,
                    E = 0 | o[5],
                    A = 8191 & E,
                    x = E >>> 13,
                    R = 0 | o[6],
                    I = 8191 & R,
                    B = R >>> 13,
                    P = 0 | o[7],
                    T = 8191 & P,
                    C = P >>> 13,
                    j = 0 | o[8],
                    O = 8191 & j,
                    D = j >>> 13,
                    N = 0 | o[9],
                    q = 8191 & N,
                    L = N >>> 13,
                    z = 0 | f[0],
                    U = 8191 & z,
                    K = z >>> 13,
                    H = 0 | f[1],
                    F = 8191 & H,
                    V = H >>> 13,
                    W = 0 | f[2],
                    Z = 8191 & W,
                    X = W >>> 13,
                    G = 0 | f[3],
                    J = 8191 & G,
                    Y = G >>> 13,
                    $ = 0 | f[4],
                    Q = 8191 & $,
                    tt = $ >>> 13,
                    te = 0 | f[5],
                    tr = 8191 & te,
                    ti = te >>> 13,
                    tn = 0 | f[6],
                    ta = 8191 & tn,
                    to = tn >>> 13,
                    tf = 0 | f[7],
                    ts = 8191 & tf,
                    th = tf >>> 13,
                    td = 0 | f[8],
                    tc = 8191 & td,
                    tu = td >>> 13,
                    tl = 0 | f[9],
                    tp = 8191 & tl,
                    tb = tl >>> 13;
                  (r.negative = t.negative ^ e.negative), (r.length = 19);
                  var tm =
                    (((h + (i = Math.imul(c, U))) | 0) +
                      ((8191 &
                        (n = ((n = Math.imul(c, K)) + Math.imul(u, U)) | 0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = Math.imul(u, K)) + (n >>> 13)) | 0) + (tm >>> 26)) |
                    0),
                    (tm &= 67108863),
                    (i = Math.imul(p, U)),
                    (n = ((n = Math.imul(p, K)) + Math.imul(b, U)) | 0),
                    (a = Math.imul(b, K));
                  var tv =
                    (((h + (i = (i + Math.imul(c, F)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, V)) | 0) + Math.imul(u, F)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, V)) | 0) + (n >>> 13)) | 0) +
                      (tv >>> 26)) |
                    0),
                    (tv &= 67108863),
                    (i = Math.imul(v, U)),
                    (n = ((n = Math.imul(v, K)) + Math.imul(y, U)) | 0),
                    (a = Math.imul(y, K)),
                    (i = (i + Math.imul(p, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, V)) | 0) + Math.imul(b, F)) | 0),
                    (a = (a + Math.imul(b, V)) | 0);
                  var ty =
                    (((h + (i = (i + Math.imul(c, Z)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, X)) | 0) + Math.imul(u, Z)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, X)) | 0) + (n >>> 13)) | 0) +
                      (ty >>> 26)) |
                    0),
                    (ty &= 67108863),
                    (i = Math.imul(_, U)),
                    (n = ((n = Math.imul(_, K)) + Math.imul(w, U)) | 0),
                    (a = Math.imul(w, K)),
                    (i = (i + Math.imul(v, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, V)) | 0) + Math.imul(y, F)) | 0),
                    (a = (a + Math.imul(y, V)) | 0),
                    (i = (i + Math.imul(p, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, X)) | 0) + Math.imul(b, Z)) | 0),
                    (a = (a + Math.imul(b, X)) | 0);
                  var tg =
                    (((h + (i = (i + Math.imul(c, J)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, Y)) | 0) + Math.imul(u, J)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, Y)) | 0) + (n >>> 13)) | 0) +
                      (tg >>> 26)) |
                    0),
                    (tg &= 67108863),
                    (i = Math.imul(S, U)),
                    (n = ((n = Math.imul(S, K)) + Math.imul(k, U)) | 0),
                    (a = Math.imul(k, K)),
                    (i = (i + Math.imul(_, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, V)) | 0) + Math.imul(w, F)) | 0),
                    (a = (a + Math.imul(w, V)) | 0),
                    (i = (i + Math.imul(v, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, X)) | 0) + Math.imul(y, Z)) | 0),
                    (a = (a + Math.imul(y, X)) | 0),
                    (i = (i + Math.imul(p, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, Y)) | 0) + Math.imul(b, J)) | 0),
                    (a = (a + Math.imul(b, Y)) | 0);
                  var t_ =
                    (((h + (i = (i + Math.imul(c, Q)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, tt)) | 0) + Math.imul(u, Q)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, tt)) | 0) + (n >>> 13)) | 0) +
                      (t_ >>> 26)) |
                    0),
                    (t_ &= 67108863),
                    (i = Math.imul(A, U)),
                    (n = ((n = Math.imul(A, K)) + Math.imul(x, U)) | 0),
                    (a = Math.imul(x, K)),
                    (i = (i + Math.imul(S, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, V)) | 0) + Math.imul(k, F)) | 0),
                    (a = (a + Math.imul(k, V)) | 0),
                    (i = (i + Math.imul(_, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, X)) | 0) + Math.imul(w, Z)) | 0),
                    (a = (a + Math.imul(w, X)) | 0),
                    (i = (i + Math.imul(v, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, Y)) | 0) + Math.imul(y, J)) | 0),
                    (a = (a + Math.imul(y, Y)) | 0),
                    (i = (i + Math.imul(p, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
                    (a = (a + Math.imul(b, tt)) | 0);
                  var tw =
                    (((h + (i = (i + Math.imul(c, tr)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, ti)) | 0) +
                            Math.imul(u, tr)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, ti)) | 0) + (n >>> 13)) | 0) +
                      (tw >>> 26)) |
                    0),
                    (tw &= 67108863),
                    (i = Math.imul(I, U)),
                    (n = ((n = Math.imul(I, K)) + Math.imul(B, U)) | 0),
                    (a = Math.imul(B, K)),
                    (i = (i + Math.imul(A, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, V)) | 0) + Math.imul(x, F)) | 0),
                    (a = (a + Math.imul(x, V)) | 0),
                    (i = (i + Math.imul(S, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, X)) | 0) + Math.imul(k, Z)) | 0),
                    (a = (a + Math.imul(k, X)) | 0),
                    (i = (i + Math.imul(_, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, Y)) | 0) + Math.imul(w, J)) | 0),
                    (a = (a + Math.imul(w, Y)) | 0),
                    (i = (i + Math.imul(v, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, tt)) | 0) + Math.imul(y, Q)) | 0),
                    (a = (a + Math.imul(y, tt)) | 0),
                    (i = (i + Math.imul(p, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, ti)) | 0) + Math.imul(b, tr)) |
                      0),
                    (a = (a + Math.imul(b, ti)) | 0);
                  var tM =
                    (((h + (i = (i + Math.imul(c, ta)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, to)) | 0) +
                            Math.imul(u, ta)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, to)) | 0) + (n >>> 13)) | 0) +
                      (tM >>> 26)) |
                    0),
                    (tM &= 67108863),
                    (i = Math.imul(T, U)),
                    (n = ((n = Math.imul(T, K)) + Math.imul(C, U)) | 0),
                    (a = Math.imul(C, K)),
                    (i = (i + Math.imul(I, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, V)) | 0) + Math.imul(B, F)) | 0),
                    (a = (a + Math.imul(B, V)) | 0),
                    (i = (i + Math.imul(A, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, X)) | 0) + Math.imul(x, Z)) | 0),
                    (a = (a + Math.imul(x, X)) | 0),
                    (i = (i + Math.imul(S, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, Y)) | 0) + Math.imul(k, J)) | 0),
                    (a = (a + Math.imul(k, Y)) | 0),
                    (i = (i + Math.imul(_, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, tt)) | 0) + Math.imul(w, Q)) | 0),
                    (a = (a + Math.imul(w, tt)) | 0),
                    (i = (i + Math.imul(v, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, ti)) | 0) + Math.imul(y, tr)) |
                      0),
                    (a = (a + Math.imul(y, ti)) | 0),
                    (i = (i + Math.imul(p, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, to)) | 0) + Math.imul(b, ta)) |
                      0),
                    (a = (a + Math.imul(b, to)) | 0);
                  var tS =
                    (((h + (i = (i + Math.imul(c, ts)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, th)) | 0) +
                            Math.imul(u, ts)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, th)) | 0) + (n >>> 13)) | 0) +
                      (tS >>> 26)) |
                    0),
                    (tS &= 67108863),
                    (i = Math.imul(O, U)),
                    (n = ((n = Math.imul(O, K)) + Math.imul(D, U)) | 0),
                    (a = Math.imul(D, K)),
                    (i = (i + Math.imul(T, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, V)) | 0) + Math.imul(C, F)) | 0),
                    (a = (a + Math.imul(C, V)) | 0),
                    (i = (i + Math.imul(I, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, X)) | 0) + Math.imul(B, Z)) | 0),
                    (a = (a + Math.imul(B, X)) | 0),
                    (i = (i + Math.imul(A, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, Y)) | 0) + Math.imul(x, J)) | 0),
                    (a = (a + Math.imul(x, Y)) | 0),
                    (i = (i + Math.imul(S, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, tt)) | 0) + Math.imul(k, Q)) | 0),
                    (a = (a + Math.imul(k, tt)) | 0),
                    (i = (i + Math.imul(_, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, ti)) | 0) + Math.imul(w, tr)) |
                      0),
                    (a = (a + Math.imul(w, ti)) | 0),
                    (i = (i + Math.imul(v, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, to)) | 0) + Math.imul(y, ta)) |
                      0),
                    (a = (a + Math.imul(y, to)) | 0),
                    (i = (i + Math.imul(p, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, th)) | 0) + Math.imul(b, ts)) |
                      0),
                    (a = (a + Math.imul(b, th)) | 0);
                  var tk =
                    (((h + (i = (i + Math.imul(c, tc)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, tu)) | 0) +
                            Math.imul(u, tc)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, tu)) | 0) + (n >>> 13)) | 0) +
                      (tk >>> 26)) |
                    0),
                    (tk &= 67108863),
                    (i = Math.imul(q, U)),
                    (n = ((n = Math.imul(q, K)) + Math.imul(L, U)) | 0),
                    (a = Math.imul(L, K)),
                    (i = (i + Math.imul(O, F)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, V)) | 0) + Math.imul(D, F)) | 0),
                    (a = (a + Math.imul(D, V)) | 0),
                    (i = (i + Math.imul(T, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, X)) | 0) + Math.imul(C, Z)) | 0),
                    (a = (a + Math.imul(C, X)) | 0),
                    (i = (i + Math.imul(I, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, Y)) | 0) + Math.imul(B, J)) | 0),
                    (a = (a + Math.imul(B, Y)) | 0),
                    (i = (i + Math.imul(A, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(x, Q)) | 0),
                    (a = (a + Math.imul(x, tt)) | 0),
                    (i = (i + Math.imul(S, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, ti)) | 0) + Math.imul(k, tr)) |
                      0),
                    (a = (a + Math.imul(k, ti)) | 0),
                    (i = (i + Math.imul(_, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, to)) | 0) + Math.imul(w, ta)) |
                      0),
                    (a = (a + Math.imul(w, to)) | 0),
                    (i = (i + Math.imul(v, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, th)) | 0) + Math.imul(y, ts)) |
                      0),
                    (a = (a + Math.imul(y, th)) | 0),
                    (i = (i + Math.imul(p, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(p, tu)) | 0) + Math.imul(b, tc)) |
                      0),
                    (a = (a + Math.imul(b, tu)) | 0);
                  var tE =
                    (((h + (i = (i + Math.imul(c, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(c, tb)) | 0) +
                            Math.imul(u, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(u, tb)) | 0) + (n >>> 13)) | 0) +
                      (tE >>> 26)) |
                    0),
                    (tE &= 67108863),
                    (i = Math.imul(q, F)),
                    (n = ((n = Math.imul(q, V)) + Math.imul(L, F)) | 0),
                    (a = Math.imul(L, V)),
                    (i = (i + Math.imul(O, Z)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, X)) | 0) + Math.imul(D, Z)) | 0),
                    (a = (a + Math.imul(D, X)) | 0),
                    (i = (i + Math.imul(T, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, Y)) | 0) + Math.imul(C, J)) | 0),
                    (a = (a + Math.imul(C, Y)) | 0),
                    (i = (i + Math.imul(I, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, tt)) | 0) + Math.imul(B, Q)) | 0),
                    (a = (a + Math.imul(B, tt)) | 0),
                    (i = (i + Math.imul(A, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, ti)) | 0) + Math.imul(x, tr)) |
                      0),
                    (a = (a + Math.imul(x, ti)) | 0),
                    (i = (i + Math.imul(S, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, to)) | 0) + Math.imul(k, ta)) |
                      0),
                    (a = (a + Math.imul(k, to)) | 0),
                    (i = (i + Math.imul(_, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, th)) | 0) + Math.imul(w, ts)) |
                      0),
                    (a = (a + Math.imul(w, th)) | 0),
                    (i = (i + Math.imul(v, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(v, tu)) | 0) + Math.imul(y, tc)) |
                      0),
                    (a = (a + Math.imul(y, tu)) | 0);
                  var tA =
                    (((h + (i = (i + Math.imul(p, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(p, tb)) | 0) +
                            Math.imul(b, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(b, tb)) | 0) + (n >>> 13)) | 0) +
                      (tA >>> 26)) |
                    0),
                    (tA &= 67108863),
                    (i = Math.imul(q, Z)),
                    (n = ((n = Math.imul(q, X)) + Math.imul(L, Z)) | 0),
                    (a = Math.imul(L, X)),
                    (i = (i + Math.imul(O, J)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, Y)) | 0) + Math.imul(D, J)) | 0),
                    (a = (a + Math.imul(D, Y)) | 0),
                    (i = (i + Math.imul(T, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, tt)) | 0) + Math.imul(C, Q)) | 0),
                    (a = (a + Math.imul(C, tt)) | 0),
                    (i = (i + Math.imul(I, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, ti)) | 0) + Math.imul(B, tr)) |
                      0),
                    (a = (a + Math.imul(B, ti)) | 0),
                    (i = (i + Math.imul(A, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, to)) | 0) + Math.imul(x, ta)) |
                      0),
                    (a = (a + Math.imul(x, to)) | 0),
                    (i = (i + Math.imul(S, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, th)) | 0) + Math.imul(k, ts)) |
                      0),
                    (a = (a + Math.imul(k, th)) | 0),
                    (i = (i + Math.imul(_, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(_, tu)) | 0) + Math.imul(w, tc)) |
                      0),
                    (a = (a + Math.imul(w, tu)) | 0);
                  var tx =
                    (((h + (i = (i + Math.imul(v, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(v, tb)) | 0) +
                            Math.imul(y, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(y, tb)) | 0) + (n >>> 13)) | 0) +
                      (tx >>> 26)) |
                    0),
                    (tx &= 67108863),
                    (i = Math.imul(q, J)),
                    (n = ((n = Math.imul(q, Y)) + Math.imul(L, J)) | 0),
                    (a = Math.imul(L, Y)),
                    (i = (i + Math.imul(O, Q)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, tt)) | 0) + Math.imul(D, Q)) | 0),
                    (a = (a + Math.imul(D, tt)) | 0),
                    (i = (i + Math.imul(T, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, ti)) | 0) + Math.imul(C, tr)) |
                      0),
                    (a = (a + Math.imul(C, ti)) | 0),
                    (i = (i + Math.imul(I, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, to)) | 0) + Math.imul(B, ta)) |
                      0),
                    (a = (a + Math.imul(B, to)) | 0),
                    (i = (i + Math.imul(A, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, th)) | 0) + Math.imul(x, ts)) |
                      0),
                    (a = (a + Math.imul(x, th)) | 0),
                    (i = (i + Math.imul(S, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(S, tu)) | 0) + Math.imul(k, tc)) |
                      0),
                    (a = (a + Math.imul(k, tu)) | 0);
                  var tR =
                    (((h + (i = (i + Math.imul(_, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(_, tb)) | 0) +
                            Math.imul(w, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(w, tb)) | 0) + (n >>> 13)) | 0) +
                      (tR >>> 26)) |
                    0),
                    (tR &= 67108863),
                    (i = Math.imul(q, Q)),
                    (n = ((n = Math.imul(q, tt)) + Math.imul(L, Q)) | 0),
                    (a = Math.imul(L, tt)),
                    (i = (i + Math.imul(O, tr)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, ti)) | 0) + Math.imul(D, tr)) |
                      0),
                    (a = (a + Math.imul(D, ti)) | 0),
                    (i = (i + Math.imul(T, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, to)) | 0) + Math.imul(C, ta)) |
                      0),
                    (a = (a + Math.imul(C, to)) | 0),
                    (i = (i + Math.imul(I, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, th)) | 0) + Math.imul(B, ts)) |
                      0),
                    (a = (a + Math.imul(B, th)) | 0),
                    (i = (i + Math.imul(A, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(A, tu)) | 0) + Math.imul(x, tc)) |
                      0),
                    (a = (a + Math.imul(x, tu)) | 0);
                  var tI =
                    (((h + (i = (i + Math.imul(S, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(S, tb)) | 0) +
                            Math.imul(k, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(k, tb)) | 0) + (n >>> 13)) | 0) +
                      (tI >>> 26)) |
                    0),
                    (tI &= 67108863),
                    (i = Math.imul(q, tr)),
                    (n = ((n = Math.imul(q, ti)) + Math.imul(L, tr)) | 0),
                    (a = Math.imul(L, ti)),
                    (i = (i + Math.imul(O, ta)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, to)) | 0) + Math.imul(D, ta)) |
                      0),
                    (a = (a + Math.imul(D, to)) | 0),
                    (i = (i + Math.imul(T, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, th)) | 0) + Math.imul(C, ts)) |
                      0),
                    (a = (a + Math.imul(C, th)) | 0),
                    (i = (i + Math.imul(I, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(I, tu)) | 0) + Math.imul(B, tc)) |
                      0),
                    (a = (a + Math.imul(B, tu)) | 0);
                  var tB =
                    (((h + (i = (i + Math.imul(A, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(A, tb)) | 0) +
                            Math.imul(x, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(x, tb)) | 0) + (n >>> 13)) | 0) +
                      (tB >>> 26)) |
                    0),
                    (tB &= 67108863),
                    (i = Math.imul(q, ta)),
                    (n = ((n = Math.imul(q, to)) + Math.imul(L, ta)) | 0),
                    (a = Math.imul(L, to)),
                    (i = (i + Math.imul(O, ts)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, th)) | 0) + Math.imul(D, ts)) |
                      0),
                    (a = (a + Math.imul(D, th)) | 0),
                    (i = (i + Math.imul(T, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(T, tu)) | 0) + Math.imul(C, tc)) |
                      0),
                    (a = (a + Math.imul(C, tu)) | 0);
                  var tP =
                    (((h + (i = (i + Math.imul(I, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(I, tb)) | 0) +
                            Math.imul(B, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(B, tb)) | 0) + (n >>> 13)) | 0) +
                      (tP >>> 26)) |
                    0),
                    (tP &= 67108863),
                    (i = Math.imul(q, ts)),
                    (n = ((n = Math.imul(q, th)) + Math.imul(L, ts)) | 0),
                    (a = Math.imul(L, th)),
                    (i = (i + Math.imul(O, tc)) | 0),
                    (n =
                      ((n = (n + Math.imul(O, tu)) | 0) + Math.imul(D, tc)) |
                      0),
                    (a = (a + Math.imul(D, tu)) | 0);
                  var tT =
                    (((h + (i = (i + Math.imul(T, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(T, tb)) | 0) +
                            Math.imul(C, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(C, tb)) | 0) + (n >>> 13)) | 0) +
                      (tT >>> 26)) |
                    0),
                    (tT &= 67108863),
                    (i = Math.imul(q, tc)),
                    (n = ((n = Math.imul(q, tu)) + Math.imul(L, tc)) | 0),
                    (a = Math.imul(L, tu));
                  var tC =
                    (((h + (i = (i + Math.imul(O, tp)) | 0)) | 0) +
                      ((8191 &
                        (n =
                          ((n = (n + Math.imul(O, tb)) | 0) +
                            Math.imul(D, tp)) |
                          0)) <<
                        13)) |
                    0;
                  (h =
                    ((((a = (a + Math.imul(D, tb)) | 0) + (n >>> 13)) | 0) +
                      (tC >>> 26)) |
                    0),
                    (tC &= 67108863);
                  var tj =
                    (((h + (i = Math.imul(q, tp))) | 0) +
                      ((8191 &
                        (n =
                          ((n = Math.imul(q, tb)) + Math.imul(L, tp)) | 0)) <<
                        13)) |
                    0;
                  return (
                    (h =
                      ((((a = Math.imul(L, tb)) + (n >>> 13)) | 0) +
                        (tj >>> 26)) |
                      0),
                    (tj &= 67108863),
                    (s[0] = tm),
                    (s[1] = tv),
                    (s[2] = ty),
                    (s[3] = tg),
                    (s[4] = t_),
                    (s[5] = tw),
                    (s[6] = tM),
                    (s[7] = tS),
                    (s[8] = tk),
                    (s[9] = tE),
                    (s[10] = tA),
                    (s[11] = tx),
                    (s[12] = tR),
                    (s[13] = tI),
                    (s[14] = tB),
                    (s[15] = tP),
                    (s[16] = tT),
                    (s[17] = tC),
                    (s[18] = tj),
                    0 !== h && ((s[19] = h), r.length++),
                    r
                  );
                };
                function m(t, e, r) {
                  (r.negative = e.negative ^ t.negative),
                    (r.length = t.length + e.length);
                  for (var i = 0, n = 0, a = 0; a < r.length - 1; a++) {
                    var o = n;
                    n = 0;
                    for (
                      var f = 67108863 & i,
                        s = Math.min(a, e.length - 1),
                        h = Math.max(0, a - t.length + 1);
                      h <= s;
                      h++
                    ) {
                      var d = a - h,
                        c = (0 | t.words[d]) * (0 | e.words[h]),
                        u = 67108863 & c;
                      (o = (o + ((c / 67108864) | 0)) | 0),
                        (f = 67108863 & (u = (u + f) | 0)),
                        (n += (o = (o + (u >>> 26)) | 0) >>> 26),
                        (o &= 67108863);
                    }
                    (r.words[a] = f), (i = o), (o = n);
                  }
                  return 0 !== i ? (r.words[a] = i) : r.length--, r._strip();
                }
                function v(t, e) {
                  (this.x = t), (this.y = e);
                }
                Math.imul || (b = p),
                  (a.prototype.mulTo = function (t, e) {
                    var r,
                      i = this.length + t.length;
                    return 10 === this.length && 10 === t.length
                      ? b(this, t, e)
                      : i < 63
                        ? p(this, t, e)
                        : m(this, t, e);
                  }),
                  (v.prototype.makeRBT = function (t) {
                    for (
                      var e = Array(t),
                        r = a.prototype._countBits(t) - 1,
                        i = 0;
                      i < t;
                      i++
                    )
                      e[i] = this.revBin(i, r, t);
                    return e;
                  }),
                  (v.prototype.revBin = function (t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var i = 0, n = 0; n < e; n++)
                      (i |= (1 & t) << (e - n - 1)), (t >>= 1);
                    return i;
                  }),
                  (v.prototype.permute = function (t, e, r, i, n, a) {
                    for (var o = 0; o < a; o++)
                      (i[o] = e[t[o]]), (n[o] = r[t[o]]);
                  }),
                  (v.prototype.transform = function (t, e, r, i, n, a) {
                    this.permute(a, t, e, r, i, n);
                    for (var o = 1; o < n; o <<= 1)
                      for (
                        var f = o << 1,
                          s = Math.cos((2 * Math.PI) / f),
                          h = Math.sin((2 * Math.PI) / f),
                          d = 0;
                        d < n;
                        d += f
                      )
                        for (var c = s, u = h, l = 0; l < o; l++) {
                          var p = r[d + l],
                            b = i[d + l],
                            m = r[d + l + o],
                            v = i[d + l + o],
                            y = c * m - u * v;
                          (v = c * v + u * m),
                            (m = y),
                            (r[d + l] = p + m),
                            (i[d + l] = b + v),
                            (r[d + l + o] = p - m),
                            (i[d + l + o] = b - v),
                            l !== f &&
                              ((y = s * c - h * u),
                              (u = s * u + h * c),
                              (c = y));
                        }
                  }),
                  (v.prototype.guessLen13b = function (t, e) {
                    var r = 1 | Math.max(e, t),
                      i = 1 & r,
                      n = 0;
                    for (r = (r / 2) | 0; r; r >>>= 1) n++;
                    return 1 << (n + 1 + i);
                  }),
                  (v.prototype.conjugate = function (t, e, r) {
                    if (!(r <= 1))
                      for (var i = 0; i < r / 2; i++) {
                        var n = t[i];
                        (t[i] = t[r - i - 1]),
                          (t[r - i - 1] = n),
                          (n = e[i]),
                          (e[i] = -e[r - i - 1]),
                          (e[r - i - 1] = -n);
                      }
                  }),
                  (v.prototype.normalize13b = function (t, e) {
                    for (var r = 0, i = 0; i < e / 2; i++) {
                      var n =
                        8192 * Math.round(t[2 * i + 1] / e) +
                        Math.round(t[2 * i] / e) +
                        r;
                      (t[i] = 67108863 & n),
                        (r = n < 67108864 ? 0 : (n / 67108864) | 0);
                    }
                    return t;
                  }),
                  (v.prototype.convert13b = function (t, e, r, n) {
                    for (var a = 0, o = 0; o < e; o++)
                      (a += 0 | t[o]),
                        (r[2 * o] = 8191 & a),
                        (a >>>= 13),
                        (r[2 * o + 1] = 8191 & a),
                        (a >>>= 13);
                    for (o = 2 * e; o < n; ++o) r[o] = 0;
                    i(0 === a), i((-8192 & a) == 0);
                  }),
                  (v.prototype.stub = function (t) {
                    for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e;
                  }),
                  (v.prototype.mulp = function (t, e, r) {
                    var i = 2 * this.guessLen13b(t.length, e.length),
                      n = this.makeRBT(i),
                      a = this.stub(i),
                      o = Array(i),
                      f = Array(i),
                      s = Array(i),
                      h = Array(i),
                      d = Array(i),
                      c = Array(i),
                      u = r.words;
                    (u.length = i),
                      this.convert13b(t.words, t.length, o, i),
                      this.convert13b(e.words, e.length, h, i),
                      this.transform(o, a, f, s, i, n),
                      this.transform(h, a, d, c, i, n);
                    for (var l = 0; l < i; l++) {
                      var p = f[l] * d[l] - s[l] * c[l];
                      (s[l] = f[l] * c[l] + s[l] * d[l]), (f[l] = p);
                    }
                    return (
                      this.conjugate(f, s, i),
                      this.transform(f, s, u, a, i, n),
                      this.conjugate(u, a, i),
                      this.normalize13b(u, i),
                      (r.negative = t.negative ^ e.negative),
                      (r.length = t.length + e.length),
                      r._strip()
                    );
                  }),
                  (a.prototype.mul = function (t) {
                    var e = new a(null);
                    return (
                      (e.words = Array(this.length + t.length)),
                      this.mulTo(t, e)
                    );
                  }),
                  (a.prototype.mulf = function (t) {
                    var e = new a(null);
                    return (
                      (e.words = Array(this.length + t.length)), m(this, t, e)
                    );
                  }),
                  (a.prototype.imul = function (t) {
                    return this.clone().mulTo(t, this);
                  }),
                  (a.prototype.imuln = function (t) {
                    var e = t < 0;
                    e && (t = -t), i('number' == typeof t), i(t < 67108864);
                    for (var r = 0, n = 0; n < this.length; n++) {
                      var a = (0 | this.words[n]) * t,
                        o = (67108863 & a) + (67108863 & r);
                      (r >>= 26),
                        (r += ((a / 67108864) | 0) + (o >>> 26)),
                        (this.words[n] = 67108863 & o);
                    }
                    return (
                      0 !== r && ((this.words[n] = r), this.length++),
                      e ? this.ineg() : this
                    );
                  }),
                  (a.prototype.muln = function (t) {
                    return this.clone().imuln(t);
                  }),
                  (a.prototype.sqr = function () {
                    return this.mul(this);
                  }),
                  (a.prototype.isqr = function () {
                    return this.imul(this.clone());
                  }),
                  (a.prototype.pow = function (t) {
                    var e = (function (t) {
                      for (
                        var e = Array(t.bitLength()), r = 0;
                        r < e.length;
                        r++
                      ) {
                        var i = (r / 26) | 0,
                          n = r % 26;
                        e[r] = (t.words[i] >>> n) & 1;
                      }
                      return e;
                    })(t);
                    if (0 === e.length) return new a(1);
                    for (
                      var r = this, i = 0;
                      i < e.length && 0 === e[i];
                      i++, r = r.sqr()
                    );
                    if (++i < e.length)
                      for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                        0 !== e[i] && (r = r.mul(n));
                    return r;
                  }),
                  (a.prototype.iushln = function (t) {
                    i('number' == typeof t && t >= 0);
                    var e,
                      r = t % 26,
                      n = (t - r) / 26,
                      a = (67108863 >>> (26 - r)) << (26 - r);
                    if (0 !== r) {
                      var o = 0;
                      for (e = 0; e < this.length; e++) {
                        var f = this.words[e] & a,
                          s = ((0 | this.words[e]) - f) << r;
                        (this.words[e] = s | o), (o = f >>> (26 - r));
                      }
                      o && ((this.words[e] = o), this.length++);
                    }
                    if (0 !== n) {
                      for (e = this.length - 1; e >= 0; e--)
                        this.words[e + n] = this.words[e];
                      for (e = 0; e < n; e++) this.words[e] = 0;
                      this.length += n;
                    }
                    return this._strip();
                  }),
                  (a.prototype.ishln = function (t) {
                    return i(0 === this.negative), this.iushln(t);
                  }),
                  (a.prototype.iushrn = function (t, e, r) {
                    i('number' == typeof t && t >= 0),
                      (n = e ? (e - (e % 26)) / 26 : 0);
                    var n,
                      a = t % 26,
                      o = Math.min((t - a) / 26, this.length),
                      f = 67108863 ^ ((67108863 >>> a) << a);
                    if (((n -= o), (n = Math.max(0, n)), r)) {
                      for (var s = 0; s < o; s++) r.words[s] = this.words[s];
                      r.length = o;
                    }
                    if (0 === o);
                    else if (this.length > o)
                      for (this.length -= o, s = 0; s < this.length; s++)
                        this.words[s] = this.words[s + o];
                    else (this.words[0] = 0), (this.length = 1);
                    var h = 0;
                    for (
                      s = this.length - 1;
                      s >= 0 && (0 !== h || s >= n);
                      s--
                    ) {
                      var d = 0 | this.words[s];
                      (this.words[s] = (h << (26 - a)) | (d >>> a)),
                        (h = d & f);
                    }
                    return (
                      r && 0 !== h && (r.words[r.length++] = h),
                      0 === this.length &&
                        ((this.words[0] = 0), (this.length = 1)),
                      this._strip()
                    );
                  }),
                  (a.prototype.ishrn = function (t, e, r) {
                    return i(0 === this.negative), this.iushrn(t, e, r);
                  }),
                  (a.prototype.shln = function (t) {
                    return this.clone().ishln(t);
                  }),
                  (a.prototype.ushln = function (t) {
                    return this.clone().iushln(t);
                  }),
                  (a.prototype.shrn = function (t) {
                    return this.clone().ishrn(t);
                  }),
                  (a.prototype.ushrn = function (t) {
                    return this.clone().iushrn(t);
                  }),
                  (a.prototype.testn = function (t) {
                    i('number' == typeof t && t >= 0);
                    var e = t % 26,
                      r = (t - e) / 26;
                    return !(this.length <= r) && !!(this.words[r] & (1 << e));
                  }),
                  (a.prototype.imaskn = function (t) {
                    i('number' == typeof t && t >= 0);
                    var e = t % 26,
                      r = (t - e) / 26;
                    return (i(
                      0 === this.negative,
                      'imaskn works only with positive numbers'
                    ),
                    this.length <= r)
                      ? this
                      : (0 !== e && r++,
                        (this.length = Math.min(r, this.length)),
                        0 !== e &&
                          (this.words[this.length - 1] &=
                            67108863 ^ ((67108863 >>> e) << e)),
                        this._strip());
                  }),
                  (a.prototype.maskn = function (t) {
                    return this.clone().imaskn(t);
                  }),
                  (a.prototype.iaddn = function (t) {
                    return (i('number' == typeof t), i(t < 67108864), t < 0)
                      ? this.isubn(-t)
                      : 0 !== this.negative
                        ? (1 === this.length && (0 | this.words[0]) <= t
                            ? ((this.words[0] = t - (0 | this.words[0])),
                              (this.negative = 0))
                            : ((this.negative = 0),
                              this.isubn(t),
                              (this.negative = 1)),
                          this)
                        : this._iaddn(t);
                  }),
                  (a.prototype._iaddn = function (t) {
                    this.words[0] += t;
                    for (
                      var e = 0;
                      e < this.length && this.words[e] >= 67108864;
                      e++
                    )
                      (this.words[e] -= 67108864),
                        e === this.length - 1
                          ? (this.words[e + 1] = 1)
                          : this.words[e + 1]++;
                    return (this.length = Math.max(this.length, e + 1)), this;
                  }),
                  (a.prototype.isubn = function (t) {
                    if ((i('number' == typeof t), i(t < 67108864), t < 0))
                      return this.iaddn(-t);
                    if (0 !== this.negative)
                      return (
                        (this.negative = 0),
                        this.iaddn(t),
                        (this.negative = 1),
                        this
                      );
                    if (
                      ((this.words[0] -= t),
                      1 === this.length && this.words[0] < 0)
                    )
                      (this.words[0] = -this.words[0]), (this.negative = 1);
                    else
                      for (var e = 0; e < this.length && this.words[e] < 0; e++)
                        (this.words[e] += 67108864), (this.words[e + 1] -= 1);
                    return this._strip();
                  }),
                  (a.prototype.addn = function (t) {
                    return this.clone().iaddn(t);
                  }),
                  (a.prototype.subn = function (t) {
                    return this.clone().isubn(t);
                  }),
                  (a.prototype.iabs = function () {
                    return (this.negative = 0), this;
                  }),
                  (a.prototype.abs = function () {
                    return this.clone().iabs();
                  }),
                  (a.prototype._ishlnsubmul = function (t, e, r) {
                    var n,
                      a,
                      o = t.length + r;
                    this._expand(o);
                    var f = 0;
                    for (n = 0; n < t.length; n++) {
                      a = (0 | this.words[n + r]) + f;
                      var s = (0 | t.words[n]) * e;
                      (a -= 67108863 & s),
                        (f = (a >> 26) - ((s / 67108864) | 0)),
                        (this.words[n + r] = 67108863 & a);
                    }
                    for (; n < this.length - r; n++)
                      (f = (a = (0 | this.words[n + r]) + f) >> 26),
                        (this.words[n + r] = 67108863 & a);
                    if (0 === f) return this._strip();
                    for (i(-1 === f), f = 0, n = 0; n < this.length; n++)
                      (f = (a = -(0 | this.words[n]) + f) >> 26),
                        (this.words[n] = 67108863 & a);
                    return (this.negative = 1), this._strip();
                  }),
                  (a.prototype._wordDiv = function (t, e) {
                    var r,
                      i = this.length - t.length,
                      n = this.clone(),
                      o = t,
                      f = 0 | o.words[o.length - 1];
                    0 != (i = 26 - this._countBits(f)) &&
                      ((o = o.ushln(i)),
                      n.iushln(i),
                      (f = 0 | o.words[o.length - 1]));
                    var s = n.length - o.length;
                    if ('mod' !== e) {
                      ((r = new a(null)).length = s + 1),
                        (r.words = Array(r.length));
                      for (var h = 0; h < r.length; h++) r.words[h] = 0;
                    }
                    var d = n.clone()._ishlnsubmul(o, 1, s);
                    0 === d.negative && ((n = d), r && (r.words[s] = 1));
                    for (var c = s - 1; c >= 0; c--) {
                      var u =
                        (0 | n.words[o.length + c]) * 67108864 +
                        (0 | n.words[o.length + c - 1]);
                      for (
                        u = Math.min((u / f) | 0, 67108863),
                          n._ishlnsubmul(o, u, c);
                        0 !== n.negative;

                      )
                        u--,
                          (n.negative = 0),
                          n._ishlnsubmul(o, 1, c),
                          n.isZero() || (n.negative ^= 1);
                      r && (r.words[c] = u);
                    }
                    return (
                      r && r._strip(),
                      n._strip(),
                      'div' !== e && 0 !== i && n.iushrn(i),
                      { div: r || null, mod: n }
                    );
                  }),
                  (a.prototype.divmod = function (t, e, r) {
                    var n, o, f;
                    return (i(!t.isZero()), this.isZero())
                      ? { div: new a(0), mod: new a(0) }
                      : 0 !== this.negative && 0 === t.negative
                        ? ((f = this.neg().divmod(t, e)),
                          'mod' !== e && (n = f.div.neg()),
                          'div' !== e &&
                            ((o = f.mod.neg()),
                            r && 0 !== o.negative && o.iadd(t)),
                          { div: n, mod: o })
                        : 0 === this.negative && 0 !== t.negative
                          ? ((f = this.divmod(t.neg(), e)),
                            'mod' !== e && (n = f.div.neg()),
                            { div: n, mod: f.mod })
                          : (this.negative & t.negative) != 0
                            ? ((f = this.neg().divmod(t.neg(), e)),
                              'div' !== e &&
                                ((o = f.mod.neg()),
                                r && 0 !== o.negative && o.isub(t)),
                              { div: f.div, mod: o })
                            : t.length > this.length || 0 > this.cmp(t)
                              ? { div: new a(0), mod: this }
                              : 1 === t.length
                                ? 'div' === e
                                  ? { div: this.divn(t.words[0]), mod: null }
                                  : 'mod' === e
                                    ? {
                                        div: null,
                                        mod: new a(this.modrn(t.words[0])),
                                      }
                                    : {
                                        div: this.divn(t.words[0]),
                                        mod: new a(this.modrn(t.words[0])),
                                      }
                                : this._wordDiv(t, e);
                  }),
                  (a.prototype.div = function (t) {
                    return this.divmod(t, 'div', !1).div;
                  }),
                  (a.prototype.mod = function (t) {
                    return this.divmod(t, 'mod', !1).mod;
                  }),
                  (a.prototype.umod = function (t) {
                    return this.divmod(t, 'mod', !0).mod;
                  }),
                  (a.prototype.divRound = function (t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                      i = t.ushrn(1),
                      n = t.andln(1),
                      a = r.cmp(i);
                    return a < 0 || (1 === n && 0 === a)
                      ? e.div
                      : 0 !== e.div.negative
                        ? e.div.isubn(1)
                        : e.div.iaddn(1);
                  }),
                  (a.prototype.modrn = function (t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (
                      var r = 67108864 % t, n = 0, a = this.length - 1;
                      a >= 0;
                      a--
                    )
                      n = (r * n + (0 | this.words[a])) % t;
                    return e ? -n : n;
                  }),
                  (a.prototype.modn = function (t) {
                    return this.modrn(t);
                  }),
                  (a.prototype.idivn = function (t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var r = 0, n = this.length - 1; n >= 0; n--) {
                      var a = (0 | this.words[n]) + 67108864 * r;
                      (this.words[n] = (a / t) | 0), (r = a % t);
                    }
                    return this._strip(), e ? this.ineg() : this;
                  }),
                  (a.prototype.divn = function (t) {
                    return this.clone().idivn(t);
                  }),
                  (a.prototype.egcd = function (t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e = this,
                      r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (
                      var n = new a(1),
                        o = new a(0),
                        f = new a(0),
                        s = new a(1),
                        h = 0;
                      e.isEven() && r.isEven();

                    )
                      e.iushrn(1), r.iushrn(1), ++h;
                    for (var d = r.clone(), c = e.clone(); !e.isZero(); ) {
                      for (
                        var u = 0, l = 1;
                        (e.words[0] & l) == 0 && u < 26;
                        ++u, l <<= 1
                      );
                      if (u > 0)
                        for (e.iushrn(u); u-- > 0; )
                          (n.isOdd() || o.isOdd()) && (n.iadd(d), o.isub(c)),
                            n.iushrn(1),
                            o.iushrn(1);
                      for (
                        var p = 0, b = 1;
                        (r.words[0] & b) == 0 && p < 26;
                        ++p, b <<= 1
                      );
                      if (p > 0)
                        for (r.iushrn(p); p-- > 0; )
                          (f.isOdd() || s.isOdd()) && (f.iadd(d), s.isub(c)),
                            f.iushrn(1),
                            s.iushrn(1);
                      e.cmp(r) >= 0
                        ? (e.isub(r), n.isub(f), o.isub(s))
                        : (r.isub(e), f.isub(n), s.isub(o));
                    }
                    return { a: f, b: s, gcd: r.iushln(h) };
                  }),
                  (a.prototype._invmp = function (t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e,
                      r = this,
                      n = t.clone();
                    r = 0 !== r.negative ? r.umod(t) : r.clone();
                    for (
                      var o = new a(1), f = new a(0), s = n.clone();
                      r.cmpn(1) > 0 && n.cmpn(1) > 0;

                    ) {
                      for (
                        var h = 0, d = 1;
                        (r.words[0] & d) == 0 && h < 26;
                        ++h, d <<= 1
                      );
                      if (h > 0)
                        for (r.iushrn(h); h-- > 0; )
                          o.isOdd() && o.iadd(s), o.iushrn(1);
                      for (
                        var c = 0, u = 1;
                        (n.words[0] & u) == 0 && c < 26;
                        ++c, u <<= 1
                      );
                      if (c > 0)
                        for (n.iushrn(c); c-- > 0; )
                          f.isOdd() && f.iadd(s), f.iushrn(1);
                      r.cmp(n) >= 0
                        ? (r.isub(n), o.isub(f))
                        : (n.isub(r), f.isub(o));
                    }
                    return (
                      0 > (e = 0 === r.cmpn(1) ? o : f).cmpn(0) && e.iadd(t), e
                    );
                  }),
                  (a.prototype.gcd = function (t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                      r = t.clone();
                    (e.negative = 0), (r.negative = 0);
                    for (var i = 0; e.isEven() && r.isEven(); i++)
                      e.iushrn(1), r.iushrn(1);
                    for (;;) {
                      for (; e.isEven(); ) e.iushrn(1);
                      for (; r.isEven(); ) r.iushrn(1);
                      var n = e.cmp(r);
                      if (n < 0) {
                        var a = e;
                        (e = r), (r = a);
                      } else if (0 === n || 0 === r.cmpn(1)) break;
                      e.isub(r);
                    }
                    return r.iushln(i);
                  }),
                  (a.prototype.invm = function (t) {
                    return this.egcd(t).a.umod(t);
                  }),
                  (a.prototype.isEven = function () {
                    return (1 & this.words[0]) == 0;
                  }),
                  (a.prototype.isOdd = function () {
                    return (1 & this.words[0]) == 1;
                  }),
                  (a.prototype.andln = function (t) {
                    return this.words[0] & t;
                  }),
                  (a.prototype.bincn = function (t) {
                    i('number' == typeof t);
                    var e = t % 26,
                      r = (t - e) / 26,
                      n = 1 << e;
                    if (this.length <= r)
                      return this._expand(r + 1), (this.words[r] |= n), this;
                    for (var a = n, o = r; 0 !== a && o < this.length; o++) {
                      var f = 0 | this.words[o];
                      (f += a),
                        (a = f >>> 26),
                        (f &= 67108863),
                        (this.words[o] = f);
                    }
                    return (
                      0 !== a && ((this.words[o] = a), this.length++), this
                    );
                  }),
                  (a.prototype.isZero = function () {
                    return 1 === this.length && 0 === this.words[0];
                  }),
                  (a.prototype.cmpn = function (t) {
                    var e,
                      r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if ((this._strip(), this.length > 1)) e = 1;
                    else {
                      r && (t = -t), i(t <= 67108863, 'Number is too big');
                      var n = 0 | this.words[0];
                      e = n === t ? 0 : n < t ? -1 : 1;
                    }
                    return 0 !== this.negative ? 0 | -e : e;
                  }),
                  (a.prototype.cmp = function (t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e;
                  }),
                  (a.prototype.ucmp = function (t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                      var i = 0 | this.words[r],
                        n = 0 | t.words[r];
                      if (i !== n) {
                        i < n ? (e = -1) : i > n && (e = 1);
                        break;
                      }
                    }
                    return e;
                  }),
                  (a.prototype.gtn = function (t) {
                    return 1 === this.cmpn(t);
                  }),
                  (a.prototype.gt = function (t) {
                    return 1 === this.cmp(t);
                  }),
                  (a.prototype.gten = function (t) {
                    return this.cmpn(t) >= 0;
                  }),
                  (a.prototype.gte = function (t) {
                    return this.cmp(t) >= 0;
                  }),
                  (a.prototype.ltn = function (t) {
                    return -1 === this.cmpn(t);
                  }),
                  (a.prototype.lt = function (t) {
                    return -1 === this.cmp(t);
                  }),
                  (a.prototype.lten = function (t) {
                    return 0 >= this.cmpn(t);
                  }),
                  (a.prototype.lte = function (t) {
                    return 0 >= this.cmp(t);
                  }),
                  (a.prototype.eqn = function (t) {
                    return 0 === this.cmpn(t);
                  }),
                  (a.prototype.eq = function (t) {
                    return 0 === this.cmp(t);
                  }),
                  (a.red = function (t) {
                    return new k(t);
                  }),
                  (a.prototype.toRed = function (t) {
                    return (
                      i(!this.red, 'Already a number in reduction context'),
                      i(0 === this.negative, 'red works only with positives'),
                      t.convertTo(this)._forceRed(t)
                    );
                  }),
                  (a.prototype.fromRed = function () {
                    return (
                      i(
                        this.red,
                        'fromRed works only with numbers in reduction context'
                      ),
                      this.red.convertFrom(this)
                    );
                  }),
                  (a.prototype._forceRed = function (t) {
                    return (this.red = t), this;
                  }),
                  (a.prototype.forceRed = function (t) {
                    return (
                      i(!this.red, 'Already a number in reduction context'),
                      this._forceRed(t)
                    );
                  }),
                  (a.prototype.redAdd = function (t) {
                    return (
                      i(this.red, 'redAdd works only with red numbers'),
                      this.red.add(this, t)
                    );
                  }),
                  (a.prototype.redIAdd = function (t) {
                    return (
                      i(this.red, 'redIAdd works only with red numbers'),
                      this.red.iadd(this, t)
                    );
                  }),
                  (a.prototype.redSub = function (t) {
                    return (
                      i(this.red, 'redSub works only with red numbers'),
                      this.red.sub(this, t)
                    );
                  }),
                  (a.prototype.redISub = function (t) {
                    return (
                      i(this.red, 'redISub works only with red numbers'),
                      this.red.isub(this, t)
                    );
                  }),
                  (a.prototype.redShl = function (t) {
                    return (
                      i(this.red, 'redShl works only with red numbers'),
                      this.red.shl(this, t)
                    );
                  }),
                  (a.prototype.redMul = function (t) {
                    return (
                      i(this.red, 'redMul works only with red numbers'),
                      this.red._verify2(this, t),
                      this.red.mul(this, t)
                    );
                  }),
                  (a.prototype.redIMul = function (t) {
                    return (
                      i(this.red, 'redMul works only with red numbers'),
                      this.red._verify2(this, t),
                      this.red.imul(this, t)
                    );
                  }),
                  (a.prototype.redSqr = function () {
                    return (
                      i(this.red, 'redSqr works only with red numbers'),
                      this.red._verify1(this),
                      this.red.sqr(this)
                    );
                  }),
                  (a.prototype.redISqr = function () {
                    return (
                      i(this.red, 'redISqr works only with red numbers'),
                      this.red._verify1(this),
                      this.red.isqr(this)
                    );
                  }),
                  (a.prototype.redSqrt = function () {
                    return (
                      i(this.red, 'redSqrt works only with red numbers'),
                      this.red._verify1(this),
                      this.red.sqrt(this)
                    );
                  }),
                  (a.prototype.redInvm = function () {
                    return (
                      i(this.red, 'redInvm works only with red numbers'),
                      this.red._verify1(this),
                      this.red.invm(this)
                    );
                  }),
                  (a.prototype.redNeg = function () {
                    return (
                      i(this.red, 'redNeg works only with red numbers'),
                      this.red._verify1(this),
                      this.red.neg(this)
                    );
                  }),
                  (a.prototype.redPow = function (t) {
                    return (
                      i(this.red && !t.red, 'redPow(normalNum)'),
                      this.red._verify1(this),
                      this.red.pow(this, t)
                    );
                  });
                var y = { k256: null, p224: null, p192: null, p25519: null };
                function g(t, e) {
                  (this.name = t),
                    (this.p = new a(e, 16)),
                    (this.n = this.p.bitLength()),
                    (this.k = new a(1).iushln(this.n).isub(this.p)),
                    (this.tmp = this._tmp());
                }
                function _() {
                  g.call(
                    this,
                    'k256',
                    'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
                  );
                }
                function w() {
                  g.call(
                    this,
                    'p224',
                    'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
                  );
                }
                function M() {
                  g.call(
                    this,
                    'p192',
                    'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
                  );
                }
                function S() {
                  g.call(
                    this,
                    '25519',
                    '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
                  );
                }
                function k(t) {
                  if ('string' == typeof t) {
                    var e = a._prime(t);
                    (this.m = e.p), (this.prime = e);
                  } else
                    i(t.gtn(1), 'modulus must be greater than 1'),
                      (this.m = t),
                      (this.prime = null);
                }
                function E(t) {
                  k.call(this, t),
                    (this.shift = this.m.bitLength()),
                    this.shift % 26 != 0 &&
                      (this.shift += 26 - (this.shift % 26)),
                    (this.r = new a(1).iushln(this.shift)),
                    (this.r2 = this.imod(this.r.sqr())),
                    (this.rinv = this.r._invmp(this.m)),
                    (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
                    (this.minv = this.minv.umod(this.r)),
                    (this.minv = this.r.sub(this.minv));
                }
                (g.prototype._tmp = function () {
                  var t = new a(null);
                  return (t.words = Array(Math.ceil(this.n / 13))), t;
                }),
                  (g.prototype.ireduce = function (t) {
                    var e,
                      r = t;
                    do
                      this.split(r, this.tmp),
                        (e = (r = (r = this.imulK(r)).iadd(
                          this.tmp
                        )).bitLength());
                    while (e > this.n);
                    var i = e < this.n ? -1 : r.ucmp(this.p);
                    return (
                      0 === i
                        ? ((r.words[0] = 0), (r.length = 1))
                        : i > 0
                          ? r.isub(this.p)
                          : void 0 !== r.strip
                            ? r.strip()
                            : r._strip(),
                      r
                    );
                  }),
                  (g.prototype.split = function (t, e) {
                    t.iushrn(this.n, 0, e);
                  }),
                  (g.prototype.imulK = function (t) {
                    return t.imul(this.k);
                  }),
                  n(_, g),
                  (_.prototype.split = function (t, e) {
                    for (var r = Math.min(t.length, 9), i = 0; i < r; i++)
                      e.words[i] = t.words[i];
                    if (((e.length = r), t.length <= 9)) {
                      (t.words[0] = 0), (t.length = 1);
                      return;
                    }
                    var n = t.words[9];
                    for (
                      i = 10, e.words[e.length++] = 4194303 & n;
                      i < t.length;
                      i++
                    ) {
                      var a = 0 | t.words[i];
                      (t.words[i - 10] = ((4194303 & a) << 4) | (n >>> 22)),
                        (n = a);
                    }
                    (n >>>= 22),
                      (t.words[i - 10] = n),
                      0 === n && t.length > 10
                        ? (t.length -= 10)
                        : (t.length -= 9);
                  }),
                  (_.prototype.imulK = function (t) {
                    (t.words[t.length] = 0),
                      (t.words[t.length + 1] = 0),
                      (t.length += 2);
                    for (var e = 0, r = 0; r < t.length; r++) {
                      var i = 0 | t.words[r];
                      (e += 977 * i),
                        (t.words[r] = 67108863 & e),
                        (e = 64 * i + ((e / 67108864) | 0));
                    }
                    return (
                      0 === t.words[t.length - 1] &&
                        (t.length--, 0 === t.words[t.length - 1] && t.length--),
                      t
                    );
                  }),
                  n(w, g),
                  n(M, g),
                  n(S, g),
                  (S.prototype.imulK = function (t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                      var i = (0 | t.words[r]) * 19 + e,
                        n = 67108863 & i;
                      (i >>>= 26), (t.words[r] = n), (e = i);
                    }
                    return 0 !== e && (t.words[t.length++] = e), t;
                  }),
                  (a._prime = function (t) {
                    var e;
                    if (y[t]) return y[t];
                    if ('k256' === t) e = new _();
                    else if ('p224' === t) e = new w();
                    else if ('p192' === t) e = new M();
                    else if ('p25519' === t) e = new S();
                    else throw Error('Unknown prime ' + t);
                    return (y[t] = e), e;
                  }),
                  (k.prototype._verify1 = function (t) {
                    i(0 === t.negative, 'red works only with positives'),
                      i(t.red, 'red works only with red numbers');
                  }),
                  (k.prototype._verify2 = function (t, e) {
                    i(
                      (t.negative | e.negative) == 0,
                      'red works only with positives'
                    ),
                      i(
                        t.red && t.red === e.red,
                        'red works only with red numbers'
                      );
                  }),
                  (k.prototype.imod = function (t) {
                    return this.prime
                      ? this.prime.ireduce(t)._forceRed(this)
                      : (s(t, t.umod(this.m)._forceRed(this)), t);
                  }),
                  (k.prototype.neg = function (t) {
                    return t.isZero()
                      ? t.clone()
                      : this.m.sub(t)._forceRed(this);
                  }),
                  (k.prototype.add = function (t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return (
                      r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    );
                  }),
                  (k.prototype.iadd = function (t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r;
                  }),
                  (k.prototype.sub = function (t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
                  }),
                  (k.prototype.isub = function (t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r;
                  }),
                  (k.prototype.shl = function (t, e) {
                    return this._verify1(t), this.imod(t.ushln(e));
                  }),
                  (k.prototype.imul = function (t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e));
                  }),
                  (k.prototype.mul = function (t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e));
                  }),
                  (k.prototype.isqr = function (t) {
                    return this.imul(t, t.clone());
                  }),
                  (k.prototype.sqr = function (t) {
                    return this.mul(t, t);
                  }),
                  (k.prototype.sqrt = function (t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if ((i(e % 2 == 1), 3 === e)) {
                      var r = this.m.add(new a(1)).iushrn(2);
                      return this.pow(t, r);
                    }
                    for (
                      var n = this.m.subn(1), o = 0;
                      !n.isZero() && 0 === n.andln(1);

                    )
                      o++, n.iushrn(1);
                    i(!n.isZero());
                    var f = new a(1).toRed(this),
                      s = f.redNeg(),
                      h = this.m.subn(1).iushrn(1),
                      d = this.m.bitLength();
                    for (
                      d = new a(2 * d * d).toRed(this);
                      0 !== this.pow(d, h).cmp(s);

                    )
                      d.redIAdd(s);
                    for (
                      var c = this.pow(d, n),
                        u = this.pow(t, n.addn(1).iushrn(1)),
                        l = this.pow(t, n),
                        p = o;
                      0 !== l.cmp(f);

                    ) {
                      for (var b = l, m = 0; 0 !== b.cmp(f); m++)
                        b = b.redSqr();
                      i(m < p);
                      var v = this.pow(c, new a(1).iushln(p - m - 1));
                      (u = u.redMul(v)),
                        (c = v.redSqr()),
                        (l = l.redMul(c)),
                        (p = m);
                    }
                    return u;
                  }),
                  (k.prototype.invm = function (t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative
                      ? ((e.negative = 0), this.imod(e).redNeg())
                      : this.imod(e);
                  }),
                  (k.prototype.pow = function (t, e) {
                    if (e.isZero()) return new a(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = Array(16);
                    (r[0] = new a(1).toRed(this)), (r[1] = t);
                    for (var i = 2; i < r.length; i++)
                      r[i] = this.mul(r[i - 1], t);
                    var n = r[0],
                      o = 0,
                      f = 0,
                      s = e.bitLength() % 26;
                    for (0 === s && (s = 26), i = e.length - 1; i >= 0; i--) {
                      for (var h = e.words[i], d = s - 1; d >= 0; d--) {
                        var c = (h >> d) & 1;
                        if (
                          (n !== r[0] && (n = this.sqr(n)), 0 === c && 0 === o)
                        ) {
                          f = 0;
                          continue;
                        }
                        (o <<= 1),
                          (o |= c),
                          (4 == ++f || (0 === i && 0 === d)) &&
                            ((n = this.mul(n, r[o])), (f = 0), (o = 0));
                      }
                      s = 26;
                    }
                    return n;
                  }),
                  (k.prototype.convertTo = function (t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e;
                  }),
                  (k.prototype.convertFrom = function (t) {
                    var e = t.clone();
                    return (e.red = null), e;
                  }),
                  (a.mont = function (t) {
                    return new E(t);
                  }),
                  n(E, k),
                  (E.prototype.convertTo = function (t) {
                    return this.imod(t.ushln(this.shift));
                  }),
                  (E.prototype.convertFrom = function (t) {
                    var e = this.imod(t.mul(this.rinv));
                    return (e.red = null), e;
                  }),
                  (E.prototype.imul = function (t, e) {
                    if (t.isZero() || e.isZero())
                      return (t.words[0] = 0), (t.length = 1), t;
                    var r = t.imul(e),
                      i = r
                        .maskn(this.shift)
                        .mul(this.minv)
                        .imaskn(this.shift)
                        .mul(this.m),
                      n = r.isub(i).iushrn(this.shift),
                      a = n;
                    return (
                      n.cmp(this.m) >= 0
                        ? (a = n.isub(this.m))
                        : 0 > n.cmpn(0) && (a = n.iadd(this.m)),
                      a._forceRed(this)
                    );
                  }),
                  (E.prototype.mul = function (t, e) {
                    if (t.isZero() || e.isZero())
                      return new a(0)._forceRed(this);
                    var r = t.mul(e),
                      i = r
                        .maskn(this.shift)
                        .mul(this.minv)
                        .imaskn(this.shift)
                        .mul(this.m),
                      n = r.isub(i).iushrn(this.shift),
                      o = n;
                    return (
                      n.cmp(this.m) >= 0
                        ? (o = n.isub(this.m))
                        : 0 > n.cmpn(0) && (o = n.iadd(this.m)),
                      o._forceRed(this)
                    );
                  }),
                  (E.prototype.invm = function (t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(
                      this
                    );
                  });
              })((t = r.nmd(t)), this);
            },
            3500: function (t, e, r) {
              var i;
              function n(t) {
                this.rand = t;
              }
              if (
                ((t.exports = function (t) {
                  return i || (i = new n(null)), i.generate(t);
                }),
                (t.exports.Rand = n),
                (n.prototype.generate = function (t) {
                  return this._rand(t);
                }),
                (n.prototype._rand = function (t) {
                  if (this.rand.getBytes) return this.rand.getBytes(t);
                  for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
                    e[r] = this.rand.getByte();
                  return e;
                }),
                'object' == typeof self)
              )
                self.crypto && self.crypto.getRandomValues
                  ? (n.prototype._rand = function (t) {
                      var e = new Uint8Array(t);
                      return self.crypto.getRandomValues(e), e;
                    })
                  : self.msCrypto && self.msCrypto.getRandomValues
                    ? (n.prototype._rand = function (t) {
                        var e = new Uint8Array(t);
                        return self.msCrypto.getRandomValues(e), e;
                      })
                    : 'object' == typeof window &&
                      (n.prototype._rand = function () {
                        throw Error('Not implemented yet');
                      });
              else
                try {
                  var a = r(6113);
                  if ('function' != typeof a.randomBytes)
                    throw Error('Not supported');
                  n.prototype._rand = function (t) {
                    return a.randomBytes(t);
                  };
                } catch (t) {}
            },
            1387: function (t, e, r) {
              var i = r(6911).Buffer;
              function n(t) {
                i.isBuffer(t) || (t = i.from(t));
                for (
                  var e = (t.length / 4) | 0, r = Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = t.readUInt32BE(4 * n);
                return r;
              }
              function a(t) {
                for (; 0 < t.length; t++) t[0] = 0;
              }
              function o(t, e, r, i, n) {
                for (
                  var a,
                    o,
                    f,
                    s,
                    h = r[0],
                    d = r[1],
                    c = r[2],
                    u = r[3],
                    l = t[0] ^ e[0],
                    p = t[1] ^ e[1],
                    b = t[2] ^ e[2],
                    m = t[3] ^ e[3],
                    v = 4,
                    y = 1;
                  y < n;
                  y++
                )
                  (a =
                    h[l >>> 24] ^
                    d[(p >>> 16) & 255] ^
                    c[(b >>> 8) & 255] ^
                    u[255 & m] ^
                    e[v++]),
                    (o =
                      h[p >>> 24] ^
                      d[(b >>> 16) & 255] ^
                      c[(m >>> 8) & 255] ^
                      u[255 & l] ^
                      e[v++]),
                    (f =
                      h[b >>> 24] ^
                      d[(m >>> 16) & 255] ^
                      c[(l >>> 8) & 255] ^
                      u[255 & p] ^
                      e[v++]),
                    (s =
                      h[m >>> 24] ^
                      d[(l >>> 16) & 255] ^
                      c[(p >>> 8) & 255] ^
                      u[255 & b] ^
                      e[v++]),
                    (l = a),
                    (p = o),
                    (b = f),
                    (m = s);
                return (
                  (a =
                    ((i[l >>> 24] << 24) |
                      (i[(p >>> 16) & 255] << 16) |
                      (i[(b >>> 8) & 255] << 8) |
                      i[255 & m]) ^
                    e[v++]),
                  (o =
                    ((i[p >>> 24] << 24) |
                      (i[(b >>> 16) & 255] << 16) |
                      (i[(m >>> 8) & 255] << 8) |
                      i[255 & l]) ^
                    e[v++]),
                  [
                    (a >>>= 0),
                    (o >>>= 0),
                    (f =
                      (((i[b >>> 24] << 24) |
                        (i[(m >>> 16) & 255] << 16) |
                        (i[(l >>> 8) & 255] << 8) |
                        i[255 & p]) ^
                        e[v++]) >>>
                      0),
                    (s =
                      (((i[m >>> 24] << 24) |
                        (i[(l >>> 16) & 255] << 16) |
                        (i[(p >>> 8) & 255] << 8) |
                        i[255 & b]) ^
                        e[v++]) >>>
                      0),
                  ]
                );
              }
              var f = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                s = (function () {
                  for (var t = Array(256), e = 0; e < 256; e++)
                    e < 128 ? (t[e] = e << 1) : (t[e] = (e << 1) ^ 283);
                  for (
                    var r = [],
                      i = [],
                      n = [[], [], [], []],
                      a = [[], [], [], []],
                      o = 0,
                      f = 0,
                      s = 0;
                    s < 256;
                    ++s
                  ) {
                    var h = f ^ (f << 1) ^ (f << 2) ^ (f << 3) ^ (f << 4);
                    (h = (h >>> 8) ^ (255 & h) ^ 99), (r[o] = h), (i[h] = o);
                    var d = t[o],
                      c = t[d],
                      u = t[c],
                      l = (257 * t[h]) ^ (16843008 * h);
                    (n[0][o] = (l << 24) | (l >>> 8)),
                      (n[1][o] = (l << 16) | (l >>> 16)),
                      (n[2][o] = (l << 8) | (l >>> 24)),
                      (n[3][o] = l),
                      (l =
                        (16843009 * u) ^
                        (65537 * c) ^
                        (257 * d) ^
                        (16843008 * o)),
                      (a[0][h] = (l << 24) | (l >>> 8)),
                      (a[1][h] = (l << 16) | (l >>> 16)),
                      (a[2][h] = (l << 8) | (l >>> 24)),
                      (a[3][h] = l),
                      0 === o
                        ? (o = f = 1)
                        : ((o = d ^ t[t[t[u ^ d]]]), (f ^= t[t[f]]));
                  }
                  return { SBOX: r, INV_SBOX: i, SUB_MIX: n, INV_SUB_MIX: a };
                })();
              function h(t) {
                (this._key = n(t)), this._reset();
              }
              (h.blockSize = 16),
                (h.keySize = 32),
                (h.prototype.blockSize = h.blockSize),
                (h.prototype.keySize = h.keySize),
                (h.prototype._reset = function () {
                  for (
                    var t = this._key,
                      e = t.length,
                      r = e + 6,
                      i = (r + 1) * 4,
                      n = [],
                      a = 0;
                    a < e;
                    a++
                  )
                    n[a] = t[a];
                  for (a = e; a < i; a++) {
                    var o = n[a - 1];
                    a % e == 0
                      ? ((o = (o << 8) | (o >>> 24)),
                        (o =
                          ((s.SBOX[o >>> 24] << 24) |
                            (s.SBOX[(o >>> 16) & 255] << 16) |
                            (s.SBOX[(o >>> 8) & 255] << 8) |
                            s.SBOX[255 & o]) ^
                          (f[(a / e) | 0] << 24)))
                      : e > 6 &&
                        a % e == 4 &&
                        (o =
                          (s.SBOX[o >>> 24] << 24) |
                          (s.SBOX[(o >>> 16) & 255] << 16) |
                          (s.SBOX[(o >>> 8) & 255] << 8) |
                          s.SBOX[255 & o]),
                      (n[a] = n[a - e] ^ o);
                  }
                  for (var h = [], d = 0; d < i; d++) {
                    var c = i - d,
                      u = n[c - (d % 4 ? 0 : 4)];
                    d < 4 || c <= 4
                      ? (h[d] = u)
                      : (h[d] =
                          s.INV_SUB_MIX[0][s.SBOX[u >>> 24]] ^
                          s.INV_SUB_MIX[1][s.SBOX[(u >>> 16) & 255]] ^
                          s.INV_SUB_MIX[2][s.SBOX[(u >>> 8) & 255]] ^
                          s.INV_SUB_MIX[3][s.SBOX[255 & u]]);
                  }
                  (this._nRounds = r),
                    (this._keySchedule = n),
                    (this._invKeySchedule = h);
                }),
                (h.prototype.encryptBlockRaw = function (t) {
                  return o(
                    (t = n(t)),
                    this._keySchedule,
                    s.SUB_MIX,
                    s.SBOX,
                    this._nRounds
                  );
                }),
                (h.prototype.encryptBlock = function (t) {
                  var e = this.encryptBlockRaw(t),
                    r = i.allocUnsafe(16);
                  return (
                    r.writeUInt32BE(e[0], 0),
                    r.writeUInt32BE(e[1], 4),
                    r.writeUInt32BE(e[2], 8),
                    r.writeUInt32BE(e[3], 12),
                    r
                  );
                }),
                (h.prototype.decryptBlock = function (t) {
                  var e = (t = n(t))[1];
                  (t[1] = t[3]), (t[3] = e);
                  var r = o(
                      t,
                      this._invKeySchedule,
                      s.INV_SUB_MIX,
                      s.INV_SBOX,
                      this._nRounds
                    ),
                    a = i.allocUnsafe(16);
                  return (
                    a.writeUInt32BE(r[0], 0),
                    a.writeUInt32BE(r[3], 4),
                    a.writeUInt32BE(r[2], 8),
                    a.writeUInt32BE(r[1], 12),
                    a
                  );
                }),
                (h.prototype.scrub = function () {
                  a(this._keySchedule), a(this._invKeySchedule), a(this._key);
                }),
                (t.exports.AES = h);
            },
            6624: function (t, e, r) {
              var i = r(1387),
                n = r(6911).Buffer,
                a = r(1043),
                o = r(3782),
                f = r(7225),
                s = r(4734),
                h = r(598);
              function d(t, e, r, o) {
                a.call(this);
                var s = n.alloc(4, 0);
                this._cipher = new i.AES(e);
                var d = this._cipher.encryptBlock(s);
                (this._ghash = new f(d)),
                  (r = (function (t, e, r) {
                    if (12 === e.length)
                      return (
                        (t._finID = n.concat([e, n.from([0, 0, 0, 1])])),
                        n.concat([e, n.from([0, 0, 0, 2])])
                      );
                    var i = new f(r),
                      a = e.length,
                      o = a % 16;
                    i.update(e),
                      o && ((o = 16 - o), i.update(n.alloc(o, 0))),
                      i.update(n.alloc(8, 0));
                    var s = n.alloc(8);
                    s.writeUIntBE(8 * a, 0, 8),
                      i.update(s),
                      (t._finID = i.state);
                    var d = n.from(t._finID);
                    return h(d), d;
                  })(this, r, d)),
                  (this._prev = n.from(r)),
                  (this._cache = n.allocUnsafe(0)),
                  (this._secCache = n.allocUnsafe(0)),
                  (this._decrypt = o),
                  (this._alen = 0),
                  (this._len = 0),
                  (this._mode = t),
                  (this._authTag = null),
                  (this._called = !1);
              }
              o(d, a),
                (d.prototype._update = function (t) {
                  if (!this._called && this._alen) {
                    var e = 16 - (this._alen % 16);
                    e < 16 && ((e = n.alloc(e, 0)), this._ghash.update(e));
                  }
                  this._called = !0;
                  var r = this._mode.encrypt(this, t);
                  return (
                    this._decrypt
                      ? this._ghash.update(t)
                      : this._ghash.update(r),
                    (this._len += t.length),
                    r
                  );
                }),
                (d.prototype._final = function () {
                  if (this._decrypt && !this._authTag)
                    throw Error(
                      'Unsupported state or unable to authenticate data'
                    );
                  var t = s(
                    this._ghash.final(8 * this._alen, 8 * this._len),
                    this._cipher.encryptBlock(this._finID)
                  );
                  if (
                    this._decrypt &&
                    (function (t, e) {
                      var r = 0;
                      t.length !== e.length && r++;
                      for (
                        var i = Math.min(t.length, e.length), n = 0;
                        n < i;
                        ++n
                      )
                        r += t[n] ^ e[n];
                      return r;
                    })(t, this._authTag)
                  )
                    throw Error(
                      'Unsupported state or unable to authenticate data'
                    );
                  (this._authTag = t), this._cipher.scrub();
                }),
                (d.prototype.getAuthTag = function () {
                  if (this._decrypt || !n.isBuffer(this._authTag))
                    throw Error(
                      'Attempting to get auth tag in unsupported state'
                    );
                  return this._authTag;
                }),
                (d.prototype.setAuthTag = function (t) {
                  if (!this._decrypt)
                    throw Error(
                      'Attempting to set auth tag in unsupported state'
                    );
                  this._authTag = t;
                }),
                (d.prototype.setAAD = function (t) {
                  if (this._called)
                    throw Error('Attempting to set AAD in unsupported state');
                  this._ghash.update(t), (this._alen += t.length);
                }),
                (t.exports = d);
            },
            6594: function (t, e, r) {
              var i = r(2),
                n = r(2598),
                a = r(5866);
              (e.createCipher = e.Cipher = i.createCipher),
                (e.createCipheriv = e.Cipheriv = i.createCipheriv),
                (e.createDecipher = e.Decipher = n.createDecipher),
                (e.createDecipheriv = e.Decipheriv = n.createDecipheriv),
                (e.listCiphers = e.getCiphers =
                  function () {
                    return Object.keys(a);
                  });
            },
            2598: function (t, e, r) {
              var i = r(6624),
                n = r(6911).Buffer,
                a = r(6370),
                o = r(126),
                f = r(1043),
                s = r(1387),
                h = r(8368);
              function d(t, e, r) {
                f.call(this),
                  (this._cache = new c()),
                  (this._last = void 0),
                  (this._cipher = new s.AES(e)),
                  (this._prev = n.from(r)),
                  (this._mode = t),
                  (this._autopadding = !0);
              }
              function c() {
                this.cache = n.allocUnsafe(0);
              }
              function u(t, e, r) {
                var f = a[t.toLowerCase()];
                if (!f) throw TypeError('invalid suite type');
                if (
                  ('string' == typeof r && (r = n.from(r)),
                  'GCM' !== f.mode && r.length !== f.iv)
                )
                  throw TypeError('invalid iv length ' + r.length);
                if (
                  ('string' == typeof e && (e = n.from(e)),
                  e.length !== f.key / 8)
                )
                  throw TypeError('invalid key length ' + e.length);
                return 'stream' === f.type
                  ? new o(f.module, e, r, !0)
                  : 'auth' === f.type
                    ? new i(f.module, e, r, !0)
                    : new d(f.module, e, r);
              }
              r(3782)(d, f),
                (d.prototype._update = function (t) {
                  this._cache.add(t);
                  for (
                    var e, r, i = [];
                    (e = this._cache.get(this._autopadding));

                  )
                    (r = this._mode.decrypt(this, e)), i.push(r);
                  return n.concat(i);
                }),
                (d.prototype._final = function () {
                  var t = this._cache.flush();
                  if (this._autopadding)
                    return (function (t) {
                      var e = t[15];
                      if (e < 1 || e > 16)
                        throw Error('unable to decrypt data');
                      for (var r = -1; ++r < e; )
                        if (t[r + (16 - e)] !== e)
                          throw Error('unable to decrypt data');
                      if (16 !== e) return t.slice(0, 16 - e);
                    })(this._mode.decrypt(this, t));
                  if (t) throw Error('data not multiple of block length');
                }),
                (d.prototype.setAutoPadding = function (t) {
                  return (this._autopadding = !!t), this;
                }),
                (c.prototype.add = function (t) {
                  this.cache = n.concat([this.cache, t]);
                }),
                (c.prototype.get = function (t) {
                  var e;
                  if (t) {
                    if (this.cache.length > 16)
                      return (
                        (e = this.cache.slice(0, 16)),
                        (this.cache = this.cache.slice(16)),
                        e
                      );
                  } else if (this.cache.length >= 16)
                    return (
                      (e = this.cache.slice(0, 16)),
                      (this.cache = this.cache.slice(16)),
                      e
                    );
                  return null;
                }),
                (c.prototype.flush = function () {
                  if (this.cache.length) return this.cache;
                }),
                (e.createDecipher = function (t, e) {
                  var r = a[t.toLowerCase()];
                  if (!r) throw TypeError('invalid suite type');
                  var i = h(e, !1, r.key, r.iv);
                  return u(t, i.key, i.iv);
                }),
                (e.createDecipheriv = u);
            },
            2: function (t, e, r) {
              var i = r(6370),
                n = r(6624),
                a = r(6911).Buffer,
                o = r(126),
                f = r(1043),
                s = r(1387),
                h = r(8368);
              function d(t, e, r) {
                f.call(this),
                  (this._cache = new u()),
                  (this._cipher = new s.AES(e)),
                  (this._prev = a.from(r)),
                  (this._mode = t),
                  (this._autopadding = !0);
              }
              r(3782)(d, f),
                (d.prototype._update = function (t) {
                  this._cache.add(t);
                  for (var e, r, i = []; (e = this._cache.get()); )
                    (r = this._mode.encrypt(this, e)), i.push(r);
                  return a.concat(i);
                });
              var c = a.alloc(16, 16);
              function u() {
                this.cache = a.allocUnsafe(0);
              }
              function l(t, e, r) {
                var f = i[t.toLowerCase()];
                if (!f) throw TypeError('invalid suite type');
                if (
                  ('string' == typeof e && (e = a.from(e)),
                  e.length !== f.key / 8)
                )
                  throw TypeError('invalid key length ' + e.length);
                if (
                  ('string' == typeof r && (r = a.from(r)),
                  'GCM' !== f.mode && r.length !== f.iv)
                )
                  throw TypeError('invalid iv length ' + r.length);
                return 'stream' === f.type
                  ? new o(f.module, e, r)
                  : 'auth' === f.type
                    ? new n(f.module, e, r)
                    : new d(f.module, e, r);
              }
              (d.prototype._final = function () {
                var t = this._cache.flush();
                if (this._autopadding)
                  return (
                    (t = this._mode.encrypt(this, t)), this._cipher.scrub(), t
                  );
                if (!t.equals(c))
                  throw (
                    (this._cipher.scrub(),
                    Error('data not multiple of block length'))
                  );
              }),
                (d.prototype.setAutoPadding = function (t) {
                  return (this._autopadding = !!t), this;
                }),
                (u.prototype.add = function (t) {
                  this.cache = a.concat([this.cache, t]);
                }),
                (u.prototype.get = function () {
                  if (this.cache.length > 15) {
                    var t = this.cache.slice(0, 16);
                    return (this.cache = this.cache.slice(16)), t;
                  }
                  return null;
                }),
                (u.prototype.flush = function () {
                  for (
                    var t = 16 - this.cache.length,
                      e = a.allocUnsafe(t),
                      r = -1;
                    ++r < t;

                  )
                    e.writeUInt8(t, r);
                  return a.concat([this.cache, e]);
                }),
                (e.createCipheriv = l),
                (e.createCipher = function (t, e) {
                  var r = i[t.toLowerCase()];
                  if (!r) throw TypeError('invalid suite type');
                  var n = h(e, !1, r.key, r.iv);
                  return l(t, n.key, n.iv);
                });
            },
            7225: function (t, e, r) {
              var i = r(6911).Buffer,
                n = i.alloc(16, 0);
              function a(t) {
                var e = i.allocUnsafe(16);
                return (
                  e.writeUInt32BE(t[0] >>> 0, 0),
                  e.writeUInt32BE(t[1] >>> 0, 4),
                  e.writeUInt32BE(t[2] >>> 0, 8),
                  e.writeUInt32BE(t[3] >>> 0, 12),
                  e
                );
              }
              function o(t) {
                (this.h = t),
                  (this.state = i.alloc(16, 0)),
                  (this.cache = i.allocUnsafe(0));
              }
              (o.prototype.ghash = function (t) {
                for (var e = -1; ++e < t.length; ) this.state[e] ^= t[e];
                this._multiply();
              }),
                (o.prototype._multiply = function () {
                  for (
                    var t,
                      e,
                      r,
                      i = [
                        (t = this.h).readUInt32BE(0),
                        t.readUInt32BE(4),
                        t.readUInt32BE(8),
                        t.readUInt32BE(12),
                      ],
                      n = [0, 0, 0, 0],
                      o = -1;
                    ++o < 128;

                  ) {
                    for (
                      (this.state[~~(o / 8)] & (1 << (7 - (o % 8)))) != 0 &&
                        ((n[0] ^= i[0]),
                        (n[1] ^= i[1]),
                        (n[2] ^= i[2]),
                        (n[3] ^= i[3])),
                        r = (1 & i[3]) != 0,
                        e = 3;
                      e > 0;
                      e--
                    )
                      i[e] = (i[e] >>> 1) | ((1 & i[e - 1]) << 31);
                    (i[0] = i[0] >>> 1), r && (i[0] = -520093696 ^ i[0]);
                  }
                  this.state = a(n);
                }),
                (o.prototype.update = function (t) {
                  var e;
                  for (
                    this.cache = i.concat([this.cache, t]);
                    this.cache.length >= 16;

                  )
                    (e = this.cache.slice(0, 16)),
                      (this.cache = this.cache.slice(16)),
                      this.ghash(e);
                }),
                (o.prototype.final = function (t, e) {
                  return (
                    this.cache.length &&
                      this.ghash(i.concat([this.cache, n], 16)),
                    this.ghash(a([0, t, 0, e])),
                    this.state
                  );
                }),
                (t.exports = o);
            },
            598: function (t) {
              t.exports = function (t) {
                for (var e, r = t.length; r--; )
                  if (255 === (e = t.readUInt8(r))) t.writeUInt8(0, r);
                  else {
                    e++, t.writeUInt8(e, r);
                    break;
                  }
              };
            },
            9825: function (t, e, r) {
              var i = r(4734);
              (e.encrypt = function (t, e) {
                var r = i(e, t._prev);
                return (t._prev = t._cipher.encryptBlock(r)), t._prev;
              }),
                (e.decrypt = function (t, e) {
                  var r = t._prev;
                  return (t._prev = e), i(t._cipher.decryptBlock(e), r);
                });
            },
            321: function (t, e, r) {
              var i = r(6911).Buffer,
                n = r(4734);
              function a(t, e, r) {
                var a = e.length,
                  o = n(e, t._cache);
                return (
                  (t._cache = t._cache.slice(a)),
                  (t._prev = i.concat([t._prev, r ? e : o])),
                  o
                );
              }
              e.encrypt = function (t, e, r) {
                for (var n, o = i.allocUnsafe(0); e.length; )
                  if (
                    (0 === t._cache.length &&
                      ((t._cache = t._cipher.encryptBlock(t._prev)),
                      (t._prev = i.allocUnsafe(0))),
                    t._cache.length <= e.length)
                  )
                    (n = t._cache.length),
                      (o = i.concat([o, a(t, e.slice(0, n), r)])),
                      (e = e.slice(n));
                  else {
                    o = i.concat([o, a(t, e, r)]);
                    break;
                  }
                return o;
              };
            },
            3147: function (t, e, r) {
              var i = r(6911).Buffer;
              e.encrypt = function (t, e, r) {
                for (var n = e.length, a = i.allocUnsafe(n), o = -1; ++o < n; )
                  a[o] = (function (t, e, r) {
                    for (var n, a, o, f = -1, s = 0; ++f < 8; )
                      (n = t._cipher.encryptBlock(t._prev)),
                        (a = e & (1 << (7 - f)) ? 128 : 0),
                        (s += (128 & (o = n[0] ^ a)) >> f % 8),
                        (t._prev = (function (t, e) {
                          var r = t.length,
                            n = -1,
                            a = i.allocUnsafe(t.length);
                          for (t = i.concat([t, i.from([e])]); ++n < r; )
                            a[n] = (t[n] << 1) | (t[n + 1] >> 7);
                          return a;
                        })(t._prev, r ? a : o));
                    return s;
                  })(t, e[o], r);
                return a;
              };
            },
            2430: function (t, e, r) {
              var i = r(6911).Buffer;
              e.encrypt = function (t, e, r) {
                for (var n = e.length, a = i.allocUnsafe(n), o = -1; ++o < n; )
                  a[o] = (function (t, e, r) {
                    var n = t._cipher.encryptBlock(t._prev)[0] ^ e;
                    return (
                      (t._prev = i.concat([
                        t._prev.slice(1),
                        i.from([r ? e : n]),
                      ])),
                      n
                    );
                  })(t, e[o], r);
                return a;
              };
            },
            3361: function (t, e, r) {
              var i = r(4734),
                n = r(6911).Buffer,
                a = r(598);
              e.encrypt = function (t, e) {
                var r = Math.ceil(e.length / 16),
                  o = t._cache.length;
                t._cache = n.concat([t._cache, n.allocUnsafe(16 * r)]);
                for (var f = 0; f < r; f++) {
                  var s = (function (t) {
                      var e = t._cipher.encryptBlockRaw(t._prev);
                      return a(t._prev), e;
                    })(t),
                    h = o + 16 * f;
                  t._cache.writeUInt32BE(s[0], h + 0),
                    t._cache.writeUInt32BE(s[1], h + 4),
                    t._cache.writeUInt32BE(s[2], h + 8),
                    t._cache.writeUInt32BE(s[3], h + 12);
                }
                var d = t._cache.slice(0, e.length);
                return (t._cache = t._cache.slice(e.length)), i(e, d);
              };
            },
            1590: function (t, e) {
              (e.encrypt = function (t, e) {
                return t._cipher.encryptBlock(e);
              }),
                (e.decrypt = function (t, e) {
                  return t._cipher.decryptBlock(e);
                });
            },
            6370: function (t, e, r) {
              var i = {
                  ECB: r(1590),
                  CBC: r(9825),
                  CFB: r(321),
                  CFB8: r(2430),
                  CFB1: r(3147),
                  OFB: r(3412),
                  CTR: r(3361),
                  GCM: r(3361),
                },
                n = r(5866);
              for (var a in n) n[a].module = i[n[a].mode];
              t.exports = n;
            },
            3412: function (t, e, r) {
              var n = r(4734);
              e.encrypt = function (t, e) {
                for (; t._cache.length < e.length; )
                  t._cache = i.concat([
                    t._cache,
                    ((t._prev = t._cipher.encryptBlock(t._prev)), t._prev),
                  ]);
                var r = t._cache.slice(0, e.length);
                return (t._cache = t._cache.slice(e.length)), n(e, r);
              };
            },
            126: function (t, e, r) {
              var i = r(1387),
                n = r(6911).Buffer,
                a = r(1043);
              function o(t, e, r, o) {
                a.call(this),
                  (this._cipher = new i.AES(e)),
                  (this._prev = n.from(r)),
                  (this._cache = n.allocUnsafe(0)),
                  (this._secCache = n.allocUnsafe(0)),
                  (this._decrypt = o),
                  (this._mode = t);
              }
              r(3782)(o, a),
                (o.prototype._update = function (t) {
                  return this._mode.encrypt(this, t, this._decrypt);
                }),
                (o.prototype._final = function () {
                  this._cipher.scrub();
                }),
                (t.exports = o);
            },
            8996: function (t, e, r) {
              var i = r(5238),
                n = r(6594),
                a = r(6370),
                o = r(6280),
                f = r(8368);
              function s(t, e, r) {
                if (a[(t = t.toLowerCase())]) return n.createCipheriv(t, e, r);
                if (o[t]) return new i({ key: e, iv: r, mode: t });
                throw TypeError('invalid suite type');
              }
              function h(t, e, r) {
                if (a[(t = t.toLowerCase())])
                  return n.createDecipheriv(t, e, r);
                if (o[t]) return new i({ key: e, iv: r, mode: t, decrypt: !0 });
                throw TypeError('invalid suite type');
              }
              (e.createCipher = e.Cipher =
                function (t, e) {
                  if (a[(t = t.toLowerCase())]) (r = a[t].key), (i = a[t].iv);
                  else if (o[t]) (r = 8 * o[t].key), (i = o[t].iv);
                  else throw TypeError('invalid suite type');
                  var r,
                    i,
                    n = f(e, !1, r, i);
                  return s(t, n.key, n.iv);
                }),
                (e.createCipheriv = e.Cipheriv = s),
                (e.createDecipher = e.Decipher =
                  function (t, e) {
                    if (a[(t = t.toLowerCase())]) (r = a[t].key), (i = a[t].iv);
                    else if (o[t]) (r = 8 * o[t].key), (i = o[t].iv);
                    else throw TypeError('invalid suite type');
                    var r,
                      i,
                      n = f(e, !1, r, i);
                    return h(t, n.key, n.iv);
                  }),
                (e.createDecipheriv = e.Decipheriv = h),
                (e.listCiphers = e.getCiphers =
                  function () {
                    return Object.keys(o).concat(n.getCiphers());
                  });
            },
            5238: function (t, e, r) {
              var i = r(1043),
                n = r(9536),
                a = r(3782),
                o = r(6911).Buffer,
                f = {
                  'des-ede3-cbc': n.CBC.instantiate(n.EDE),
                  'des-ede3': n.EDE,
                  'des-ede-cbc': n.CBC.instantiate(n.EDE),
                  'des-ede': n.EDE,
                  'des-cbc': n.CBC.instantiate(n.DES),
                  'des-ecb': n.DES,
                };
              function s(t) {
                i.call(this);
                var e,
                  r = t.mode.toLowerCase(),
                  n = f[r];
                e = t.decrypt ? 'decrypt' : 'encrypt';
                var a = t.key;
                o.isBuffer(a) || (a = o.from(a)),
                  ('des-ede' === r || 'des-ede-cbc' === r) &&
                    (a = o.concat([a, a.slice(0, 8)]));
                var s = t.iv;
                o.isBuffer(s) || (s = o.from(s)),
                  (this._des = n.create({ key: a, iv: s, type: e }));
              }
              (f.des = f['des-cbc']),
                (f.des3 = f['des-ede3-cbc']),
                (t.exports = s),
                a(s, i),
                (s.prototype._update = function (t) {
                  return o.from(this._des.update(t));
                }),
                (s.prototype._final = function () {
                  return o.from(this._des.final());
                });
            },
            6280: function (t, e) {
              (e['des-ecb'] = { key: 8, iv: 0 }),
                (e['des-cbc'] = e.des = { key: 8, iv: 8 }),
                (e['des-ede3-cbc'] = e.des3 = { key: 24, iv: 8 }),
                (e['des-ede3'] = { key: 24, iv: 0 }),
                (e['des-ede-cbc'] = { key: 16, iv: 8 }),
                (e['des-ede'] = { key: 16, iv: 0 });
            },
            7166: function (t, e, r) {
              var n = r(711),
                a = r(7223);
              function o(t, e) {
                var r,
                  a = {
                    blinder: (r = f(e))
                      .toRed(n.mont(e.modulus))
                      .redPow(new n(e.publicExponent))
                      .fromRed(),
                    unblinder: r.invm(e.modulus),
                  },
                  o = e.modulus.byteLength();
                n.mont(e.modulus);
                var s = new n(t).mul(a.blinder).umod(e.modulus),
                  h = s.toRed(n.mont(e.prime1)),
                  d = s.toRed(n.mont(e.prime2)),
                  c = e.coefficient,
                  u = e.prime1,
                  l = e.prime2,
                  p = h.redPow(e.exponent1),
                  b = d.redPow(e.exponent2);
                (p = p.fromRed()), (b = b.fromRed());
                var m = p.isub(b).imul(c).umod(u);
                return (
                  m.imul(l),
                  b.iadd(m),
                  new i(b.imul(a.unblinder).umod(e.modulus).toArray(!1, o))
                );
              }
              function f(t) {
                for (
                  var e = t.modulus.byteLength(), r = new n(a(e));
                  r.cmp(t.modulus) >= 0 ||
                  !r.umod(t.prime1) ||
                  !r.umod(t.prime2);

                )
                  r = new n(a(e));
                return r;
              }
              (t.exports = o), (o.getr = f);
            },
            9276: function (t, e, r) {
              t.exports = r(2908);
            },
            4078: function (t, e, r) {
              var i = r(6911).Buffer,
                n = r(9739),
                a = r(3726),
                o = r(3782),
                f = r(9807),
                s = r(4013),
                h = r(2908);
              function d(t) {
                a.Writable.call(this);
                var e = h[t];
                if (!e) throw Error('Unknown message digest');
                (this._hashType = e.hash),
                  (this._hash = n(e.hash)),
                  (this._tag = e.id),
                  (this._signType = e.sign);
              }
              function c(t) {
                a.Writable.call(this);
                var e = h[t];
                if (!e) throw Error('Unknown message digest');
                (this._hash = n(e.hash)),
                  (this._tag = e.id),
                  (this._signType = e.sign);
              }
              function u(t) {
                return new d(t);
              }
              function l(t) {
                return new c(t);
              }
              Object.keys(h).forEach(function (t) {
                (h[t].id = i.from(h[t].id, 'hex')), (h[t.toLowerCase()] = h[t]);
              }),
                o(d, a.Writable),
                (d.prototype._write = function (t, e, r) {
                  this._hash.update(t), r();
                }),
                (d.prototype.update = function (t, e) {
                  return (
                    'string' == typeof t && (t = i.from(t, e)),
                    this._hash.update(t),
                    this
                  );
                }),
                (d.prototype.sign = function (t, e) {
                  this.end();
                  var r = f(
                    this._hash.digest(),
                    t,
                    this._hashType,
                    this._signType,
                    this._tag
                  );
                  return e ? r.toString(e) : r;
                }),
                o(c, a.Writable),
                (c.prototype._write = function (t, e, r) {
                  this._hash.update(t), r();
                }),
                (c.prototype.update = function (t, e) {
                  return (
                    'string' == typeof t && (t = i.from(t, e)),
                    this._hash.update(t),
                    this
                  );
                }),
                (c.prototype.verify = function (t, e, r) {
                  return (
                    'string' == typeof e && (e = i.from(e, r)),
                    this.end(),
                    s(e, this._hash.digest(), t, this._signType, this._tag)
                  );
                }),
                (t.exports = {
                  Sign: u,
                  Verify: l,
                  createSign: u,
                  createVerify: l,
                });
            },
            9807: function (t, e, r) {
              var i = r(6911).Buffer,
                n = r(4873),
                a = r(7166),
                o = r(949).ec,
                f = r(1670),
                s = r(9902),
                h = r(9267);
              function d(t, e, r, a) {
                if ((t = i.from(t.toArray())).length < e.byteLength()) {
                  var o = i.alloc(e.byteLength() - t.length);
                  t = i.concat([o, t]);
                }
                var f = r.length,
                  s = (function (t, e) {
                    t = (t = c(t, e)).mod(e);
                    var r = i.from(t.toArray());
                    if (r.length < e.byteLength()) {
                      var n = i.alloc(e.byteLength() - r.length);
                      r = i.concat([n, r]);
                    }
                    return r;
                  })(r, e),
                  h = i.alloc(f);
                h.fill(1);
                var d = i.alloc(f);
                return (
                  (d = n(a, d)
                    .update(h)
                    .update(i.from([0]))
                    .update(t)
                    .update(s)
                    .digest()),
                  (h = n(a, d).update(h).digest()),
                  (d = n(a, d)
                    .update(h)
                    .update(i.from([1]))
                    .update(t)
                    .update(s)
                    .digest()),
                  (h = n(a, d).update(h).digest()),
                  { k: d, v: h }
                );
              }
              function c(t, e) {
                var r = new f(t),
                  i = (t.length << 3) - e.bitLength();
                return i > 0 && r.ishrn(i), r;
              }
              function u(t, e, r) {
                var a, o;
                do {
                  for (a = i.alloc(0); 8 * a.length < t.bitLength(); )
                    (e.v = n(r, e.k).update(e.v).digest()),
                      (a = i.concat([a, e.v]));
                  (o = c(a, t)),
                    (e.k = n(r, e.k)
                      .update(e.v)
                      .update(i.from([0]))
                      .digest()),
                    (e.v = n(r, e.k).update(e.v).digest());
                } while (-1 !== o.cmp(t));
                return o;
              }
              (t.exports = function (t, e, r, n, l) {
                var p = s(e);
                if (p.curve) {
                  if ('ecdsa' !== n && 'ecdsa/rsa' !== n)
                    throw Error('wrong private key type');
                  return (function (t, e) {
                    var r = h[e.curve.join('.')];
                    if (!r) throw Error('unknown curve ' + e.curve.join('.'));
                    var n = new o(r).keyFromPrivate(e.privateKey).sign(t);
                    return i.from(n.toDER());
                  })(t, p);
                }
                if ('dsa' === p.type) {
                  if ('dsa' !== n) throw Error('wrong private key type');
                  return (function (t, e, r) {
                    for (
                      var n,
                        a,
                        o,
                        s,
                        h,
                        l = e.params.priv_key,
                        p = e.params.p,
                        b = e.params.q,
                        m = e.params.g,
                        v = new f(0),
                        y = c(t, b).mod(b),
                        g = !1,
                        _ = d(l, b, t, r);
                      !1 === g;

                    )
                      (n = h = u(b, _, r)),
                        (v = m.toRed(f.mont(p)).redPow(n).fromRed().mod(b)),
                        0 ===
                          (g = h
                            .invm(b)
                            .imul(y.add(l.mul(v)))
                            .mod(b)).cmpn(0) && ((g = !1), (v = new f(0)));
                    return (
                      (a = v),
                      (o = g),
                      (a = a.toArray()),
                      (o = o.toArray()),
                      128 & a[0] && (a = [0].concat(a)),
                      128 & o[0] && (o = [0].concat(o)),
                      (s = (s = [
                        48,
                        a.length + o.length + 4,
                        2,
                        a.length,
                      ]).concat(a, [2, o.length], o)),
                      i.from(s)
                    );
                  })(t, p, r);
                }
                if ('rsa' !== n && 'ecdsa/rsa' !== n)
                  throw Error('wrong private key type');
                t = i.concat([l, t]);
                for (
                  var b = p.modulus.byteLength(), m = [0, 1];
                  t.length + m.length + 1 < b;

                )
                  m.push(255);
                m.push(0);
                for (var v = -1; ++v < t.length; ) m.push(t[v]);
                return a(m, p);
              }),
                (t.exports.getKey = d),
                (t.exports.makeKey = u);
            },
            4013: function (t, e, r) {
              var i = r(6911).Buffer,
                n = r(1670),
                a = r(949).ec,
                o = r(9902),
                f = r(9267);
              function s(t, e) {
                if (0 >= t.cmpn(0) || t.cmp(e) >= e) throw Error('invalid sig');
              }
              t.exports = function (t, e, r, h, d) {
                var c,
                  u,
                  l,
                  p,
                  b,
                  m,
                  v,
                  y,
                  g,
                  _,
                  w,
                  M = o(r);
                if ('ec' === M.type) {
                  if ('ecdsa' !== h && 'ecdsa/rsa' !== h)
                    throw Error('wrong public key type');
                  return (function (t, e, r) {
                    var i = f[r.data.algorithm.curve.join('.')];
                    if (!i)
                      throw Error(
                        'unknown curve ' + r.data.algorithm.curve.join('.')
                      );
                    var n = new a(i),
                      o = r.data.subjectPrivateKey.data;
                    return n.verify(e, t, o);
                  })(t, e, M);
                }
                if ('dsa' === M.type) {
                  if ('dsa' !== h) throw Error('wrong public key type');
                  return (
                    (c = t),
                    (u = e),
                    (l = M.data.p),
                    (p = M.data.q),
                    (b = M.data.g),
                    (m = M.data.pub_key),
                    (y = (v = o.signature.decode(c, 'der')).s),
                    (g = v.r),
                    s(y, p),
                    s(g, p),
                    (_ = n.mont(l)),
                    (w = y.invm(p)),
                    0 ===
                      b
                        .toRed(_)
                        .redPow(new n(u).mul(w).mod(p))
                        .fromRed()
                        .mul(m.toRed(_).redPow(g.mul(w).mod(p)).fromRed())
                        .mod(l)
                        .mod(p)
                        .cmp(g)
                  );
                }
                if ('rsa' !== h && 'ecdsa/rsa' !== h)
                  throw Error('wrong public key type');
                e = i.concat([d, e]);
                for (
                  var S = M.modulus.byteLength(), k = [1], E = 0;
                  e.length + k.length + 2 < S;

                )
                  k.push(255), E++;
                k.push(0);
                for (var A = -1; ++A < e.length; ) k.push(e[A]);
                k = i.from(k);
                var x = n.mont(M.modulus);
                t = (t = new n(t).toRed(x)).redPow(new n(M.publicExponent));
                var R = E < 8 ? 1 : 0;
                for (
                  S = Math.min(
                    (t = i.from(t.fromRed().toArray())).length,
                    k.length
                  ),
                    t.length !== k.length && (R = 1),
                    A = -1;
                  ++A < S;

                )
                  R |= t[A] ^ k[A];
                return 0 === R;
              };
            },
            4734: function (t) {
              t.exports = function (t, e) {
                for (
                  var r = Math.min(t.length, e.length), n = new i(r), a = 0;
                  a < r;
                  ++a
                )
                  n[a] = t[a] ^ e[a];
                return n;
              };
            },
            1043: function (t, e, r) {
              var i = r(6911).Buffer,
                n = r(2781).Transform,
                a = r(1576).StringDecoder;
              function o(t) {
                n.call(this),
                  (this.hashMode = 'string' == typeof t),
                  this.hashMode
                    ? (this[t] = this._finalOrDigest)
                    : (this.final = this._finalOrDigest),
                  this._final &&
                    ((this.__final = this._final), (this._final = null)),
                  (this._decoder = null),
                  (this._encoding = null);
              }
              r(3782)(o, n),
                (o.prototype.update = function (t, e, r) {
                  'string' == typeof t && (t = i.from(t, e));
                  var n = this._update(t);
                  return this.hashMode
                    ? this
                    : (r && (n = this._toString(n, r)), n);
                }),
                (o.prototype.setAutoPadding = function () {}),
                (o.prototype.getAuthTag = function () {
                  throw Error('trying to get auth tag in unsupported state');
                }),
                (o.prototype.setAuthTag = function () {
                  throw Error('trying to set auth tag in unsupported state');
                }),
                (o.prototype.setAAD = function () {
                  throw Error('trying to set aad in unsupported state');
                }),
                (o.prototype._transform = function (t, e, r) {
                  var i;
                  try {
                    this.hashMode
                      ? this._update(t)
                      : this.push(this._update(t));
                  } catch (t) {
                    i = t;
                  } finally {
                    r(i);
                  }
                }),
                (o.prototype._flush = function (t) {
                  var e;
                  try {
                    this.push(this.__final());
                  } catch (t) {
                    e = t;
                  }
                  t(e);
                }),
                (o.prototype._finalOrDigest = function (t) {
                  var e = this.__final() || i.alloc(0);
                  return t && (e = this._toString(e, t, !0)), e;
                }),
                (o.prototype._toString = function (t, e, r) {
                  if (
                    (this._decoder ||
                      ((this._decoder = new a(e)), (this._encoding = e)),
                    this._encoding !== e)
                  )
                    throw Error("can't switch encodings");
                  var i = this._decoder.write(t);
                  return r && (i += this._decoder.end()), i;
                }),
                (t.exports = o);
            },
            9942: function (t, e, r) {
              var n = r(949),
                a = r(711);
              t.exports = function (t) {
                return new f(t);
              };
              var o = {
                secp256k1: { name: 'secp256k1', byteLength: 32 },
                secp224r1: { name: 'p224', byteLength: 28 },
                prime256v1: { name: 'p256', byteLength: 32 },
                prime192v1: { name: 'p192', byteLength: 24 },
                ed25519: { name: 'ed25519', byteLength: 32 },
                secp384r1: { name: 'p384', byteLength: 48 },
                secp521r1: { name: 'p521', byteLength: 66 },
              };
              function f(t) {
                (this.curveType = o[t]),
                  this.curveType || (this.curveType = { name: t }),
                  (this.curve = new n.ec(this.curveType.name)),
                  (this.keys = void 0);
              }
              function s(t, e, r) {
                Array.isArray(t) || (t = t.toArray());
                var n = new i(t);
                if (r && n.length < r) {
                  var a = new i(r - n.length);
                  a.fill(0), (n = i.concat([a, n]));
                }
                return e ? n.toString(e) : n;
              }
              (o.p224 = o.secp224r1),
                (o.p256 = o.secp256r1 = o.prime256v1),
                (o.p192 = o.secp192r1 = o.prime192v1),
                (o.p384 = o.secp384r1),
                (o.p521 = o.secp521r1),
                (f.prototype.generateKeys = function (t, e) {
                  return (
                    (this.keys = this.curve.genKeyPair()),
                    this.getPublicKey(t, e)
                  );
                }),
                (f.prototype.computeSecret = function (t, e, r) {
                  return (
                    (e = e || 'utf8'),
                    i.isBuffer(t) || (t = new i(t, e)),
                    s(
                      this.curve
                        .keyFromPublic(t)
                        .getPublic()
                        .mul(this.keys.getPrivate())
                        .getX(),
                      r,
                      this.curveType.byteLength
                    )
                  );
                }),
                (f.prototype.getPublicKey = function (t, e) {
                  var r = this.keys.getPublic('compressed' === e, !0);
                  return (
                    'hybrid' === e &&
                      (r[r.length - 1] % 2 ? (r[0] = 7) : (r[0] = 6)),
                    s(r, t)
                  );
                }),
                (f.prototype.getPrivateKey = function (t) {
                  return s(this.keys.getPrivate(), t);
                }),
                (f.prototype.setPublicKey = function (t, e) {
                  return (
                    (e = e || 'utf8'),
                    i.isBuffer(t) || (t = new i(t, e)),
                    this.keys._importPublic(t),
                    this
                  );
                }),
                (f.prototype.setPrivateKey = function (t, e) {
                  (e = e || 'utf8'), i.isBuffer(t) || (t = new i(t, e));
                  var r = new a(t);
                  return (
                    (r = r.toString(16)),
                    (this.keys = this.curve.genKeyPair()),
                    this.keys._importPrivate(r),
                    this
                  );
                });
            },
            9739: function (t, e, r) {
              'use strict';
              var i = r(3782),
                n = r(3533),
                a = r(3225),
                o = r(4371),
                f = r(1043);
              function s(t) {
                f.call(this, 'digest'), (this._hash = t);
              }
              i(s, f),
                (s.prototype._update = function (t) {
                  this._hash.update(t);
                }),
                (s.prototype._final = function () {
                  return this._hash.digest();
                }),
                (t.exports = function (t) {
                  return 'md5' === (t = t.toLowerCase())
                    ? new n()
                    : 'rmd160' === t || 'ripemd160' === t
                      ? new a()
                      : new s(o(t));
                });
            },
            450: function (t, e, r) {
              var i = r(3533);
              t.exports = function (t) {
                return new i().update(t).digest();
              };
            },
            4873: function (t, e, r) {
              'use strict';
              var i = r(3782),
                n = r(8119),
                a = r(1043),
                o = r(6911).Buffer,
                f = r(450),
                s = r(3225),
                h = r(4371),
                d = o.alloc(128);
              function c(t, e) {
                a.call(this, 'digest'), 'string' == typeof e && (e = o.from(e));
                var r = 'sha512' === t || 'sha384' === t ? 128 : 64;
                (this._alg = t),
                  (this._key = e),
                  e.length > r
                    ? (e = ('rmd160' === t ? new s() : h(t)).update(e).digest())
                    : e.length < r && (e = o.concat([e, d], r));
                for (
                  var i = (this._ipad = o.allocUnsafe(r)),
                    n = (this._opad = o.allocUnsafe(r)),
                    f = 0;
                  f < r;
                  f++
                )
                  (i[f] = 54 ^ e[f]), (n[f] = 92 ^ e[f]);
                (this._hash = 'rmd160' === t ? new s() : h(t)),
                  this._hash.update(i);
              }
              i(c, a),
                (c.prototype._update = function (t) {
                  this._hash.update(t);
                }),
                (c.prototype._final = function () {
                  var t = this._hash.digest();
                  return ('rmd160' === this._alg ? new s() : h(this._alg))
                    .update(this._opad)
                    .update(t)
                    .digest();
                }),
                (t.exports = function (t, e) {
                  return 'rmd160' === (t = t.toLowerCase()) || 'ripemd160' === t
                    ? new c('rmd160', e)
                    : 'md5' === t
                      ? new n(f, e)
                      : new c(t, e);
                });
            },
            8119: function (t, e, r) {
              'use strict';
              var i = r(3782),
                n = r(6911).Buffer,
                a = r(1043),
                o = n.alloc(128);
              function f(t, e) {
                a.call(this, 'digest'),
                  'string' == typeof e && (e = n.from(e)),
                  (this._alg = t),
                  (this._key = e),
                  e.length > 64
                    ? (e = t(e))
                    : e.length < 64 && (e = n.concat([e, o], 64));
                for (
                  var r = (this._ipad = n.allocUnsafe(64)),
                    i = (this._opad = n.allocUnsafe(64)),
                    f = 0;
                  f < 64;
                  f++
                )
                  (r[f] = 54 ^ e[f]), (i[f] = 92 ^ e[f]);
                this._hash = [r];
              }
              i(f, a),
                (f.prototype._update = function (t) {
                  this._hash.push(t);
                }),
                (f.prototype._final = function () {
                  var t = this._alg(n.concat(this._hash));
                  return this._alg(n.concat([this._opad, t]));
                }),
                (t.exports = f);
            },
            9536: function (t, e, r) {
              'use strict';
              (e.utils = r(5334)),
                (e.Cipher = r(9876)),
                (e.DES = r(1016)),
                (e.CBC = r(8641)),
                (e.EDE = r(6159));
            },
            8641: function (t, e, r) {
              'use strict';
              var i = r(3523),
                n = r(3782),
                a = {};
              function o(t) {
                i.equal(t.length, 8, 'Invalid IV length'), (this.iv = Array(8));
                for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e];
              }
              (e.instantiate = function (t) {
                function e(e) {
                  t.call(this, e), this._cbcInit();
                }
                n(e, t);
                for (var r = Object.keys(a), i = 0; i < r.length; i++) {
                  var o = r[i];
                  e.prototype[o] = a[o];
                }
                return (
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  e
                );
              }),
                (a._cbcInit = function () {
                  var t = new o(this.options.iv);
                  this._cbcState = t;
                }),
                (a._update = function (t, e, r, i) {
                  var n = this._cbcState,
                    a = this.constructor.super_.prototype,
                    o = n.iv;
                  if ('encrypt' === this.type) {
                    for (var f = 0; f < this.blockSize; f++) o[f] ^= t[e + f];
                    a._update.call(this, o, 0, r, i);
                    for (var f = 0; f < this.blockSize; f++) o[f] = r[i + f];
                  } else {
                    a._update.call(this, t, e, r, i);
                    for (var f = 0; f < this.blockSize; f++) r[i + f] ^= o[f];
                    for (var f = 0; f < this.blockSize; f++) o[f] = t[e + f];
                  }
                });
            },
            9876: function (t, e, r) {
              'use strict';
              var i = r(3523);
              function n(t) {
                (this.options = t),
                  (this.type = this.options.type),
                  (this.blockSize = 8),
                  this._init(),
                  (this.buffer = Array(this.blockSize)),
                  (this.bufferOff = 0);
              }
              (t.exports = n),
                (n.prototype._init = function () {}),
                (n.prototype.update = function (t) {
                  return 0 === t.length
                    ? []
                    : 'decrypt' === this.type
                      ? this._updateDecrypt(t)
                      : this._updateEncrypt(t);
                }),
                (n.prototype._buffer = function (t, e) {
                  for (
                    var r = Math.min(
                        this.buffer.length - this.bufferOff,
                        t.length - e
                      ),
                      i = 0;
                    i < r;
                    i++
                  )
                    this.buffer[this.bufferOff + i] = t[e + i];
                  return (this.bufferOff += r), r;
                }),
                (n.prototype._flushBuffer = function (t, e) {
                  return (
                    this._update(this.buffer, 0, t, e),
                    (this.bufferOff = 0),
                    this.blockSize
                  );
                }),
                (n.prototype._updateEncrypt = function (t) {
                  var e = 0,
                    r = 0,
                    i = Array(
                      (((this.bufferOff + t.length) / this.blockSize) | 0) *
                        this.blockSize
                    );
                  0 !== this.bufferOff &&
                    ((e += this._buffer(t, e)),
                    this.bufferOff === this.buffer.length &&
                      (r += this._flushBuffer(i, r)));
                  for (
                    var n = t.length - ((t.length - e) % this.blockSize);
                    e < n;
                    e += this.blockSize
                  )
                    this._update(t, e, i, r), (r += this.blockSize);
                  for (; e < t.length; e++, this.bufferOff++)
                    this.buffer[this.bufferOff] = t[e];
                  return i;
                }),
                (n.prototype._updateDecrypt = function (t) {
                  for (
                    var e = 0,
                      r = 0,
                      i =
                        Math.ceil(
                          (this.bufferOff + t.length) / this.blockSize
                        ) - 1,
                      n = Array(i * this.blockSize);
                    i > 0;
                    i--
                  )
                    (e += this._buffer(t, e)), (r += this._flushBuffer(n, r));
                  return (e += this._buffer(t, e)), n;
                }),
                (n.prototype.final = function (t) {
                  var e, r;
                  return (t && (e = this.update(t)),
                  (r =
                    'encrypt' === this.type
                      ? this._finalEncrypt()
                      : this._finalDecrypt()),
                  e)
                    ? e.concat(r)
                    : r;
                }),
                (n.prototype._pad = function (t, e) {
                  if (0 === e) return !1;
                  for (; e < t.length; ) t[e++] = 0;
                  return !0;
                }),
                (n.prototype._finalEncrypt = function () {
                  if (!this._pad(this.buffer, this.bufferOff)) return [];
                  var t = Array(this.blockSize);
                  return this._update(this.buffer, 0, t, 0), t;
                }),
                (n.prototype._unpad = function (t) {
                  return t;
                }),
                (n.prototype._finalDecrypt = function () {
                  i.equal(
                    this.bufferOff,
                    this.blockSize,
                    'Not enough data to decrypt'
                  );
                  var t = Array(this.blockSize);
                  return this._flushBuffer(t, 0), this._unpad(t);
                });
            },
            1016: function (t, e, r) {
              'use strict';
              var i = r(3523),
                n = r(3782),
                a = r(5334),
                o = r(9876);
              function f() {
                (this.tmp = [, ,]), (this.keys = null);
              }
              function s(t) {
                o.call(this, t);
                var e = new f();
                (this._desState = e), this.deriveKeys(e, t.key);
              }
              n(s, o),
                (t.exports = s),
                (s.create = function (t) {
                  return new s(t);
                });
              var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
              (s.prototype.deriveKeys = function (t, e) {
                (t.keys = Array(32)),
                  i.equal(e.length, this.blockSize, 'Invalid key length');
                var r = a.readUInt32BE(e, 0),
                  n = a.readUInt32BE(e, 4);
                a.pc1(r, n, t.tmp, 0), (r = t.tmp[0]), (n = t.tmp[1]);
                for (var o = 0; o < t.keys.length; o += 2) {
                  var f = h[o >>> 1];
                  (r = a.r28shl(r, f)),
                    (n = a.r28shl(n, f)),
                    a.pc2(r, n, t.keys, o);
                }
              }),
                (s.prototype._update = function (t, e, r, i) {
                  var n = this._desState,
                    o = a.readUInt32BE(t, e),
                    f = a.readUInt32BE(t, e + 4);
                  a.ip(o, f, n.tmp, 0),
                    (o = n.tmp[0]),
                    (f = n.tmp[1]),
                    'encrypt' === this.type
                      ? this._encrypt(n, o, f, n.tmp, 0)
                      : this._decrypt(n, o, f, n.tmp, 0),
                    (o = n.tmp[0]),
                    (f = n.tmp[1]),
                    a.writeUInt32BE(r, o, i),
                    a.writeUInt32BE(r, f, i + 4);
                }),
                (s.prototype._pad = function (t, e) {
                  for (var r = t.length - e, i = e; i < t.length; i++) t[i] = r;
                  return !0;
                }),
                (s.prototype._unpad = function (t) {
                  for (
                    var e = t[t.length - 1], r = t.length - e;
                    r < t.length;
                    r++
                  )
                    i.equal(t[r], e);
                  return t.slice(0, t.length - e);
                }),
                (s.prototype._encrypt = function (t, e, r, i, n) {
                  for (var o = e, f = r, s = 0; s < t.keys.length; s += 2) {
                    var h = t.keys[s],
                      d = t.keys[s + 1];
                    a.expand(f, t.tmp, 0), (h ^= t.tmp[0]), (d ^= t.tmp[1]);
                    var c = a.substitute(h, d),
                      u = a.permute(c),
                      l = f;
                    (f = (o ^ u) >>> 0), (o = l);
                  }
                  a.rip(f, o, i, n);
                }),
                (s.prototype._decrypt = function (t, e, r, i, n) {
                  for (
                    var o = r, f = e, s = t.keys.length - 2;
                    s >= 0;
                    s -= 2
                  ) {
                    var h = t.keys[s],
                      d = t.keys[s + 1];
                    a.expand(o, t.tmp, 0), (h ^= t.tmp[0]), (d ^= t.tmp[1]);
                    var c = a.substitute(h, d),
                      u = a.permute(c),
                      l = o;
                    (o = (f ^ u) >>> 0), (f = l);
                  }
                  a.rip(o, f, i, n);
                });
            },
            6159: function (t, e, r) {
              'use strict';
              var i = r(3523),
                n = r(3782),
                a = r(9876),
                o = r(1016);
              function f(t, e) {
                i.equal(e.length, 24, 'Invalid key length');
                var r = e.slice(0, 8),
                  n = e.slice(8, 16),
                  a = e.slice(16, 24);
                'encrypt' === t
                  ? (this.ciphers = [
                      o.create({ type: 'encrypt', key: r }),
                      o.create({ type: 'decrypt', key: n }),
                      o.create({ type: 'encrypt', key: a }),
                    ])
                  : (this.ciphers = [
                      o.create({ type: 'decrypt', key: a }),
                      o.create({ type: 'encrypt', key: n }),
                      o.create({ type: 'decrypt', key: r }),
                    ]);
              }
              function s(t) {
                a.call(this, t);
                var e = new f(this.type, this.options.key);
                this._edeState = e;
              }
              n(s, a),
                (t.exports = s),
                (s.create = function (t) {
                  return new s(t);
                }),
                (s.prototype._update = function (t, e, r, i) {
                  var n = this._edeState;
                  n.ciphers[0]._update(t, e, r, i),
                    n.ciphers[1]._update(r, i, r, i),
                    n.ciphers[2]._update(r, i, r, i);
                }),
                (s.prototype._pad = o.prototype._pad),
                (s.prototype._unpad = o.prototype._unpad);
            },
            5334: function (t, e) {
              'use strict';
              (e.readUInt32BE = function (t, e) {
                return (
                  ((t[0 + e] << 24) |
                    (t[1 + e] << 16) |
                    (t[2 + e] << 8) |
                    t[3 + e]) >>>
                  0
                );
              }),
                (e.writeUInt32BE = function (t, e, r) {
                  (t[0 + r] = e >>> 24),
                    (t[1 + r] = (e >>> 16) & 255),
                    (t[2 + r] = (e >>> 8) & 255),
                    (t[3 + r] = 255 & e);
                }),
                (e.ip = function (t, e, r, i) {
                  for (var n = 0, a = 0, o = 6; o >= 0; o -= 2) {
                    for (var f = 0; f <= 24; f += 8)
                      (n <<= 1), (n |= (e >>> (f + o)) & 1);
                    for (var f = 0; f <= 24; f += 8)
                      (n <<= 1), (n |= (t >>> (f + o)) & 1);
                  }
                  for (var o = 6; o >= 0; o -= 2) {
                    for (var f = 1; f <= 25; f += 8)
                      (a <<= 1), (a |= (e >>> (f + o)) & 1);
                    for (var f = 1; f <= 25; f += 8)
                      (a <<= 1), (a |= (t >>> (f + o)) & 1);
                  }
                  (r[i + 0] = n >>> 0), (r[i + 1] = a >>> 0);
                }),
                (e.rip = function (t, e, r, i) {
                  for (var n = 0, a = 0, o = 0; o < 4; o++)
                    for (var f = 24; f >= 0; f -= 8)
                      (n <<= 1),
                        (n |= (e >>> (f + o)) & 1),
                        (n <<= 1),
                        (n |= (t >>> (f + o)) & 1);
                  for (var o = 4; o < 8; o++)
                    for (var f = 24; f >= 0; f -= 8)
                      (a <<= 1),
                        (a |= (e >>> (f + o)) & 1),
                        (a <<= 1),
                        (a |= (t >>> (f + o)) & 1);
                  (r[i + 0] = n >>> 0), (r[i + 1] = a >>> 0);
                }),
                (e.pc1 = function (t, e, r, i) {
                  for (var n = 0, a = 0, o = 7; o >= 5; o--) {
                    for (var f = 0; f <= 24; f += 8)
                      (n <<= 1), (n |= (e >> (f + o)) & 1);
                    for (var f = 0; f <= 24; f += 8)
                      (n <<= 1), (n |= (t >> (f + o)) & 1);
                  }
                  for (var f = 0; f <= 24; f += 8)
                    (n <<= 1), (n |= (e >> (f + o)) & 1);
                  for (var o = 1; o <= 3; o++) {
                    for (var f = 0; f <= 24; f += 8)
                      (a <<= 1), (a |= (e >> (f + o)) & 1);
                    for (var f = 0; f <= 24; f += 8)
                      (a <<= 1), (a |= (t >> (f + o)) & 1);
                  }
                  for (var f = 0; f <= 24; f += 8)
                    (a <<= 1), (a |= (t >> (f + o)) & 1);
                  (r[i + 0] = n >>> 0), (r[i + 1] = a >>> 0);
                }),
                (e.r28shl = function (t, e) {
                  return ((t << e) & 268435455) | (t >>> (28 - e));
                });
              var r = [
                14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2,
                20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11,
                23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24,
              ];
              (e.pc2 = function (t, e, i, n) {
                for (var a = 0, o = 0, f = r.length >>> 1, s = 0; s < f; s++)
                  (a <<= 1), (a |= (t >>> r[s]) & 1);
                for (var s = f; s < r.length; s++)
                  (o <<= 1), (o |= (e >>> r[s]) & 1);
                (i[n + 0] = a >>> 0), (i[n + 1] = o >>> 0);
              }),
                (e.expand = function (t, e, r) {
                  var i = 0,
                    n = 0;
                  i = ((1 & t) << 5) | (t >>> 27);
                  for (var a = 23; a >= 15; a -= 4)
                    (i <<= 6), (i |= (t >>> a) & 63);
                  for (var a = 11; a >= 3; a -= 4)
                    (n |= (t >>> a) & 63), (n <<= 6);
                  (n |= ((31 & t) << 1) | (t >>> 31)),
                    (e[r + 0] = i >>> 0),
                    (e[r + 1] = n >>> 0);
                });
              var i = [
                14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10,
                10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14,
                8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14,
                3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11,
                2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11,
                10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5,
                11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7,
                9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7,
                14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6,
                15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14,
                2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3,
                1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6,
                15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5,
                14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7,
                4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9,
                14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8,
                13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10,
                1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3,
                13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12,
                2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13,
                0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1,
                13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1,
                6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15,
                5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13,
                4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5,
                0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10,
                14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8,
                11,
              ];
              e.substitute = function (t, e) {
                for (var r = 0, n = 0; n < 4; n++) {
                  var a = (t >>> (18 - 6 * n)) & 63,
                    o = i[64 * n + a];
                  (r <<= 4), (r |= o);
                }
                for (var n = 0; n < 4; n++) {
                  var a = (e >>> (18 - 6 * n)) & 63,
                    o = i[256 + 64 * n + a];
                  (r <<= 4), (r |= o);
                }
                return r >>> 0;
              };
              var n = [
                16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30,
                24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7,
              ];
              (e.permute = function (t) {
                for (var e = 0, r = 0; r < n.length; r++)
                  (e <<= 1), (e |= (t >>> n[r]) & 1);
                return e >>> 0;
              }),
                (e.padSplit = function (t, e, r) {
                  for (var i = t.toString(2); i.length < e; ) i = '0' + i;
                  for (var n = [], a = 0; a < e; a += r)
                    n.push(i.slice(a, a + r));
                  return n.join(' ');
                });
            },
            6587: function (t, e, r) {
              var n = r(296),
                a = r(7992),
                o = r(373),
                f = { binary: !0, hex: !0, base64: !0 };
              (e.DiffieHellmanGroup =
                e.createDiffieHellmanGroup =
                e.getDiffieHellman =
                  function (t) {
                    return new o(
                      new i(a[t].prime, 'hex'),
                      new i(a[t].gen, 'hex')
                    );
                  }),
                (e.createDiffieHellman = e.DiffieHellman =
                  function t(e, r, a, s) {
                    return i.isBuffer(r) || void 0 === f[r]
                      ? t(e, 'binary', r, a)
                      : ((r = r || 'binary'),
                          (s = s || 'binary'),
                          (a = a || new i([2])),
                          i.isBuffer(a) || (a = new i(a, s)),
                          'number' == typeof e)
                        ? new o(n(e, a), a, !0)
                        : (i.isBuffer(e) || (e = new i(e, r)), new o(e, a, !0));
                  });
            },
            373: function (t, e, r) {
              var n = r(711),
                a = new (r(1354))(),
                o = new n(24),
                f = new n(11),
                s = new n(10),
                h = new n(3),
                d = new n(7),
                c = r(296),
                u = r(7223);
              function l(t, e) {
                return (
                  (e = e || 'utf8'),
                  i.isBuffer(t) || (t = new i(t, e)),
                  (this._pub = new n(t)),
                  this
                );
              }
              function p(t, e) {
                return (
                  (e = e || 'utf8'),
                  i.isBuffer(t) || (t = new i(t, e)),
                  (this._priv = new n(t)),
                  this
                );
              }
              t.exports = m;
              var b = {};
              function m(t, e, r) {
                this.setGenerator(e),
                  (this.__prime = new n(t)),
                  (this._prime = n.mont(this.__prime)),
                  (this._primeLen = t.length),
                  (this._pub = void 0),
                  (this._priv = void 0),
                  (this._primeCode = void 0),
                  r
                    ? ((this.setPublicKey = l), (this.setPrivateKey = p))
                    : (this._primeCode = 8);
              }
              function v(t, e) {
                var r = new i(t.toArray());
                return e ? r.toString(e) : r;
              }
              Object.defineProperty(m.prototype, 'verifyError', {
                enumerable: !0,
                get: function () {
                  return (
                    'number' != typeof this._primeCode &&
                      (this._primeCode = (function (t, e) {
                        var r,
                          i = e.toString('hex'),
                          n = [i, t.toString(16)].join('_');
                        if (n in b) return b[n];
                        var u = 0;
                        if (
                          t.isEven() ||
                          !c.simpleSieve ||
                          !c.fermatTest(t) ||
                          !a.test(t)
                        )
                          return (
                            (u += 1),
                            '02' === i || '05' === i ? (u += 8) : (u += 4),
                            (b[n] = u),
                            u
                          );
                        switch ((a.test(t.shrn(1)) || (u += 2), i)) {
                          case '02':
                            t.mod(o).cmp(f) && (u += 8);
                            break;
                          case '05':
                            (r = t.mod(s)).cmp(h) && r.cmp(d) && (u += 8);
                            break;
                          default:
                            u += 4;
                        }
                        return (b[n] = u), u;
                      })(this.__prime, this.__gen)),
                    this._primeCode
                  );
                },
              }),
                (m.prototype.generateKeys = function () {
                  return (
                    this._priv || (this._priv = new n(u(this._primeLen))),
                    (this._pub = this._gen
                      .toRed(this._prime)
                      .redPow(this._priv)
                      .fromRed()),
                    this.getPublicKey()
                  );
                }),
                (m.prototype.computeSecret = function (t) {
                  var e = new i(
                      (t = (t = new n(t)).toRed(this._prime))
                        .redPow(this._priv)
                        .fromRed()
                        .toArray()
                    ),
                    r = this.getPrime();
                  if (e.length < r.length) {
                    var a = new i(r.length - e.length);
                    a.fill(0), (e = i.concat([a, e]));
                  }
                  return e;
                }),
                (m.prototype.getPublicKey = function (t) {
                  return v(this._pub, t);
                }),
                (m.prototype.getPrivateKey = function (t) {
                  return v(this._priv, t);
                }),
                (m.prototype.getPrime = function (t) {
                  return v(this.__prime, t);
                }),
                (m.prototype.getGenerator = function (t) {
                  return v(this._gen, t);
                }),
                (m.prototype.setGenerator = function (t, e) {
                  return (
                    (e = e || 'utf8'),
                    i.isBuffer(t) || (t = new i(t, e)),
                    (this.__gen = t),
                    (this._gen = new n(t)),
                    this
                  );
                });
            },
            296: function (t, e, r) {
              var i = r(7223);
              (t.exports = v), (v.simpleSieve = b), (v.fermatTest = m);
              var n = r(711),
                a = new n(24),
                o = new (r(1354))(),
                f = new n(1),
                s = new n(2),
                h = new n(5);
              new n(16), new n(8);
              var d = new n(10),
                c = new n(3);
              new n(7);
              var u = new n(11),
                l = new n(4);
              new n(12);
              var p = null;
              function b(t) {
                for (
                  var e = (function () {
                      if (null !== p) return p;
                      var t = [];
                      t[0] = 2;
                      for (var e = 1, r = 3; r < 1048576; r += 2) {
                        for (
                          var i = Math.ceil(Math.sqrt(r)), n = 0;
                          n < e && t[n] <= i && r % t[n] != 0;
                          n++
                        );
                        (e !== n && t[n] <= i) || (t[e++] = r);
                      }
                      return (p = t), t;
                    })(),
                    r = 0;
                  r < e.length;
                  r++
                )
                  if (0 === t.modn(e[r])) {
                    if (0 !== t.cmpn(e[r])) return !1;
                    break;
                  }
                return !0;
              }
              function m(t) {
                var e = n.mont(t);
                return 0 === s.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1);
              }
              function v(t, e) {
                var r, p;
                if (t < 16)
                  return new n(2 === e || 5 === e ? [140, 123] : [140, 39]);
                for (e = new n(e); ; ) {
                  for (r = new n(i(Math.ceil(t / 8))); r.bitLength() > t; )
                    r.ishrn(1);
                  if (
                    (r.isEven() && r.iadd(f), r.testn(1) || r.iadd(s), e.cmp(s))
                  ) {
                    if (!e.cmp(h)) for (; r.mod(d).cmp(c); ) r.iadd(l);
                  } else for (; r.mod(a).cmp(u); ) r.iadd(l);
                  if (
                    b((p = r.shrn(1))) &&
                    b(r) &&
                    m(p) &&
                    m(r) &&
                    o.test(p) &&
                    o.test(r)
                  )
                    return r;
                }
              }
            },
            949: function (t, e, r) {
              'use strict';
              (e.version = r(2531).i8),
                (e.utils = r(4401)),
                (e.rand = r(3500)),
                (e.curve = r(9359)),
                (e.curves = r(6226)),
                (e.ec = r(4088)),
                (e.eddsa = r(8511));
            },
            2727: function (t, e, r) {
              'use strict';
              var i = r(711),
                n = r(4401),
                a = n.getNAF,
                o = n.getJSF,
                f = n.assert;
              function s(t, e) {
                (this.type = t),
                  (this.p = new i(e.p, 16)),
                  (this.red = e.prime ? i.red(e.prime) : i.mont(this.p)),
                  (this.zero = new i(0).toRed(this.red)),
                  (this.one = new i(1).toRed(this.red)),
                  (this.two = new i(2).toRed(this.red)),
                  (this.n = e.n && new i(e.n, 16)),
                  (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
                  (this._wnafT1 = [, , , ,]),
                  (this._wnafT2 = [, , , ,]),
                  (this._wnafT3 = [, , , ,]),
                  (this._wnafT4 = [, , , ,]),
                  (this._bitLength = this.n ? this.n.bitLength() : 0);
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0
                  ? (this.redN = null)
                  : ((this._maxwellTrick = !0),
                    (this.redN = this.n.toRed(this.red)));
              }
              function h(t, e) {
                (this.curve = t), (this.type = e), (this.precomputed = null);
              }
              (t.exports = s),
                (s.prototype.point = function () {
                  throw Error('Not implemented');
                }),
                (s.prototype.validate = function () {
                  throw Error('Not implemented');
                }),
                (s.prototype._fixedNafMul = function (t, e) {
                  f(t.precomputed);
                  var r = t._getDoubles(),
                    i = a(e, 1, this._bitLength),
                    n = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
                  n /= 3;
                  for (var o = [], s = 0; s < i.length; s += r.step) {
                    for (var h = 0, e = s + r.step - 1; e >= s; e--)
                      h = (h << 1) + i[e];
                    o.push(h);
                  }
                  for (
                    var d = this.jpoint(null, null, null),
                      c = this.jpoint(null, null, null),
                      u = n;
                    u > 0;
                    u--
                  ) {
                    for (var s = 0; s < o.length; s++) {
                      var h = o[s];
                      h === u
                        ? (c = c.mixedAdd(r.points[s]))
                        : h === -u && (c = c.mixedAdd(r.points[s].neg()));
                    }
                    d = d.add(c);
                  }
                  return d.toP();
                }),
                (s.prototype._wnafMul = function (t, e) {
                  var r = 4,
                    i = t._getNAFPoints(r);
                  r = i.wnd;
                  for (
                    var n = i.points,
                      o = a(e, r, this._bitLength),
                      s = this.jpoint(null, null, null),
                      h = o.length - 1;
                    h >= 0;
                    h--
                  ) {
                    for (var e = 0; h >= 0 && 0 === o[h]; h--) e++;
                    if ((h >= 0 && e++, (s = s.dblp(e)), h < 0)) break;
                    var d = o[h];
                    f(0 !== d),
                      (s =
                        'affine' === t.type
                          ? d > 0
                            ? s.mixedAdd(n[(d - 1) >> 1])
                            : s.mixedAdd(n[(-d - 1) >> 1].neg())
                          : d > 0
                            ? s.add(n[(d - 1) >> 1])
                            : s.add(n[(-d - 1) >> 1].neg()));
                  }
                  return 'affine' === t.type ? s.toP() : s;
                }),
                (s.prototype._wnafMulAdd = function (t, e, r, i, n) {
                  for (
                    var f = this._wnafT1,
                      s = this._wnafT2,
                      h = this._wnafT3,
                      d = 0,
                      c = 0;
                    c < i;
                    c++
                  ) {
                    var u = e[c],
                      l = u._getNAFPoints(t);
                    (f[c] = l.wnd), (s[c] = l.points);
                  }
                  for (var c = i - 1; c >= 1; c -= 2) {
                    var p = c - 1,
                      b = c;
                    if (1 !== f[p] || 1 !== f[b]) {
                      (h[p] = a(r[p], f[p], this._bitLength)),
                        (h[b] = a(r[b], f[b], this._bitLength)),
                        (d = Math.max(h[p].length, d)),
                        (d = Math.max(h[b].length, d));
                      continue;
                    }
                    var m = [e[p], null, null, e[b]];
                    0 === e[p].y.cmp(e[b].y)
                      ? ((m[1] = e[p].add(e[b])),
                        (m[2] = e[p].toJ().mixedAdd(e[b].neg())))
                      : 0 === e[p].y.cmp(e[b].y.redNeg())
                        ? ((m[1] = e[p].toJ().mixedAdd(e[b])),
                          (m[2] = e[p].add(e[b].neg())))
                        : ((m[1] = e[p].toJ().mixedAdd(e[b])),
                          (m[2] = e[p].toJ().mixedAdd(e[b].neg())));
                    var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                      y = o(r[p], r[b]);
                    (d = Math.max(y[0].length, d)),
                      (h[p] = Array(d)),
                      (h[b] = Array(d));
                    for (var g = 0; g < d; g++) {
                      var _ = 0 | y[0][g],
                        w = 0 | y[1][g];
                      (h[p][g] = v[(_ + 1) * 3 + (w + 1)]),
                        (h[b][g] = 0),
                        (s[p] = m);
                    }
                  }
                  for (
                    var M = this.jpoint(null, null, null),
                      S = this._wnafT4,
                      c = d;
                    c >= 0;
                    c--
                  ) {
                    for (var k = 0; c >= 0; ) {
                      for (var E = !0, g = 0; g < i; g++)
                        (S[g] = 0 | h[g][c]), 0 !== S[g] && (E = !1);
                      if (!E) break;
                      k++, c--;
                    }
                    if ((c >= 0 && k++, (M = M.dblp(k)), c < 0)) break;
                    for (var g = 0; g < i; g++) {
                      var u,
                        A = S[g];
                      0 !== A &&
                        (A > 0
                          ? (u = s[g][(A - 1) >> 1])
                          : A < 0 && (u = s[g][(-A - 1) >> 1].neg()),
                        (M = 'affine' === u.type ? M.mixedAdd(u) : M.add(u)));
                    }
                  }
                  for (var c = 0; c < i; c++) s[c] = null;
                  return n ? M : M.toP();
                }),
                (s.BasePoint = h),
                (h.prototype.eq = function () {
                  throw Error('Not implemented');
                }),
                (h.prototype.validate = function () {
                  return this.curve.validate(this);
                }),
                (s.prototype.decodePoint = function (t, e) {
                  t = n.toArray(t, e);
                  var r = this.p.byteLength();
                  if (
                    (4 === t[0] || 6 === t[0] || 7 === t[0]) &&
                    t.length - 1 == 2 * r
                  )
                    return (
                      6 === t[0]
                        ? f(t[t.length - 1] % 2 == 0)
                        : 7 === t[0] && f(t[t.length - 1] % 2 == 1),
                      this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
                    );
                  if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
                    return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                  throw Error('Unknown point format');
                }),
                (h.prototype.encodeCompressed = function (t) {
                  return this.encode(t, !0);
                }),
                (h.prototype._encode = function (t) {
                  var e = this.curve.p.byteLength(),
                    r = this.getX().toArray('be', e);
                  return t
                    ? [this.getY().isEven() ? 2 : 3].concat(r)
                    : [4].concat(r, this.getY().toArray('be', e));
                }),
                (h.prototype.encode = function (t, e) {
                  return n.encode(this._encode(e), t);
                }),
                (h.prototype.precompute = function (t) {
                  if (this.precomputed) return this;
                  var e = { doubles: null, naf: null, beta: null };
                  return (
                    (e.naf = this._getNAFPoints(8)),
                    (e.doubles = this._getDoubles(4, t)),
                    (e.beta = this._getBeta()),
                    (this.precomputed = e),
                    this
                  );
                }),
                (h.prototype._hasDoubles = function (t) {
                  if (!this.precomputed) return !1;
                  var e = this.precomputed.doubles;
                  return (
                    !!e &&
                    e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
                  );
                }),
                (h.prototype._getDoubles = function (t, e) {
                  if (this.precomputed && this.precomputed.doubles)
                    return this.precomputed.doubles;
                  for (var r = [this], i = this, n = 0; n < e; n += t) {
                    for (var a = 0; a < t; a++) i = i.dbl();
                    r.push(i);
                  }
                  return { step: t, points: r };
                }),
                (h.prototype._getNAFPoints = function (t) {
                  if (this.precomputed && this.precomputed.naf)
                    return this.precomputed.naf;
                  for (
                    var e = [this],
                      r = (1 << t) - 1,
                      i = 1 === r ? null : this.dbl(),
                      n = 1;
                    n < r;
                    n++
                  )
                    e[n] = e[n - 1].add(i);
                  return { wnd: t, points: e };
                }),
                (h.prototype._getBeta = function () {
                  return null;
                }),
                (h.prototype.dblp = function (t) {
                  for (var e = this, r = 0; r < t; r++) e = e.dbl();
                  return e;
                });
            },
            2705: function (t, e, r) {
              'use strict';
              var i = r(4401),
                n = r(711),
                a = r(3782),
                o = r(2727),
                f = i.assert;
              function s(t) {
                (this.twisted = (0 | t.a) != 1),
                  (this.mOneA = this.twisted && (0 | t.a) == -1),
                  (this.extended = this.mOneA),
                  o.call(this, 'edwards', t),
                  (this.a = new n(t.a, 16).umod(this.red.m)),
                  (this.a = this.a.toRed(this.red)),
                  (this.c = new n(t.c, 16).toRed(this.red)),
                  (this.c2 = this.c.redSqr()),
                  (this.d = new n(t.d, 16).toRed(this.red)),
                  (this.dd = this.d.redAdd(this.d)),
                  f(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
                  (this.oneC = (0 | t.c) == 1);
              }
              function h(t, e, r, i, a) {
                o.BasePoint.call(this, t, 'projective'),
                  null === e && null === r && null === i
                    ? ((this.x = this.curve.zero),
                      (this.y = this.curve.one),
                      (this.z = this.curve.one),
                      (this.t = this.curve.zero),
                      (this.zOne = !0))
                    : ((this.x = new n(e, 16)),
                      (this.y = new n(r, 16)),
                      (this.z = i ? new n(i, 16) : this.curve.one),
                      (this.t = a && new n(a, 16)),
                      this.x.red || (this.x = this.x.toRed(this.curve.red)),
                      this.y.red || (this.y = this.y.toRed(this.curve.red)),
                      this.z.red || (this.z = this.z.toRed(this.curve.red)),
                      this.t &&
                        !this.t.red &&
                        (this.t = this.t.toRed(this.curve.red)),
                      (this.zOne = this.z === this.curve.one),
                      !this.curve.extended ||
                        this.t ||
                        ((this.t = this.x.redMul(this.y)),
                        this.zOne ||
                          (this.t = this.t.redMul(this.z.redInvm()))));
              }
              a(s, o),
                (t.exports = s),
                (s.prototype._mulA = function (t) {
                  return this.mOneA ? t.redNeg() : this.a.redMul(t);
                }),
                (s.prototype._mulC = function (t) {
                  return this.oneC ? t : this.c.redMul(t);
                }),
                (s.prototype.jpoint = function (t, e, r, i) {
                  return this.point(t, e, r, i);
                }),
                (s.prototype.pointFromX = function (t, e) {
                  (t = new n(t, 16)).red || (t = t.toRed(this.red));
                  var r = t.redSqr(),
                    i = this.c2.redSub(this.a.redMul(r)),
                    a = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                    o = i.redMul(a.redInvm()),
                    f = o.redSqrt();
                  if (0 !== f.redSqr().redSub(o).cmp(this.zero))
                    throw Error('invalid point');
                  var s = f.fromRed().isOdd();
                  return (
                    ((e && !s) || (!e && s)) && (f = f.redNeg()),
                    this.point(t, f)
                  );
                }),
                (s.prototype.pointFromY = function (t, e) {
                  (t = new n(t, 16)).red || (t = t.toRed(this.red));
                  var r = t.redSqr(),
                    i = r.redSub(this.c2),
                    a = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                    o = i.redMul(a.redInvm());
                  if (0 === o.cmp(this.zero)) {
                    if (!e) return this.point(this.zero, t);
                    throw Error('invalid point');
                  }
                  var f = o.redSqrt();
                  if (0 !== f.redSqr().redSub(o).cmp(this.zero))
                    throw Error('invalid point');
                  return (
                    f.fromRed().isOdd() !== e && (f = f.redNeg()),
                    this.point(f, t)
                  );
                }),
                (s.prototype.validate = function (t) {
                  if (t.isInfinity()) return !0;
                  t.normalize();
                  var e = t.x.redSqr(),
                    r = t.y.redSqr(),
                    i = e.redMul(this.a).redAdd(r),
                    n = this.c2.redMul(
                      this.one.redAdd(this.d.redMul(e).redMul(r))
                    );
                  return 0 === i.cmp(n);
                }),
                a(h, o.BasePoint),
                (s.prototype.pointFromJSON = function (t) {
                  return h.fromJSON(this, t);
                }),
                (s.prototype.point = function (t, e, r, i) {
                  return new h(this, t, e, r, i);
                }),
                (h.fromJSON = function (t, e) {
                  return new h(t, e[0], e[1], e[2]);
                }),
                (h.prototype.inspect = function () {
                  return this.isInfinity()
                    ? '<EC Point Infinity>'
                    : '<EC Point x: ' +
                        this.x.fromRed().toString(16, 2) +
                        ' y: ' +
                        this.y.fromRed().toString(16, 2) +
                        ' z: ' +
                        this.z.fromRed().toString(16, 2) +
                        '>';
                }),
                (h.prototype.isInfinity = function () {
                  return (
                    0 === this.x.cmpn(0) &&
                    (0 === this.y.cmp(this.z) ||
                      (this.zOne && 0 === this.y.cmp(this.curve.c)))
                  );
                }),
                (h.prototype._extDbl = function () {
                  var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr();
                  r = r.redIAdd(r);
                  var i = this.curve._mulA(t),
                    n = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),
                    a = i.redAdd(e),
                    o = a.redSub(r),
                    f = i.redSub(e),
                    s = n.redMul(o),
                    h = a.redMul(f),
                    d = n.redMul(f),
                    c = o.redMul(a);
                  return this.curve.point(s, h, c, d);
                }),
                (h.prototype._projDbl = function () {
                  var t,
                    e,
                    r,
                    i = this.x.redAdd(this.y).redSqr(),
                    n = this.x.redSqr(),
                    a = this.y.redSqr();
                  if (this.curve.twisted) {
                    var o = this.curve._mulA(n),
                      f = o.redAdd(a);
                    if (this.zOne)
                      (t = i
                        .redSub(n)
                        .redSub(a)
                        .redMul(f.redSub(this.curve.two))),
                        (e = f.redMul(o.redSub(a))),
                        (r = f.redSqr().redSub(f).redSub(f));
                    else {
                      var s = this.z.redSqr(),
                        h = f.redSub(s).redISub(s);
                      (t = i.redSub(n).redISub(a).redMul(h)),
                        (e = f.redMul(o.redSub(a))),
                        (r = f.redMul(h));
                    }
                  } else {
                    var o = n.redAdd(a),
                      s = this.curve._mulC(this.z).redSqr(),
                      h = o.redSub(s).redSub(s);
                    (t = this.curve._mulC(i.redISub(o)).redMul(h)),
                      (e = this.curve._mulC(o).redMul(n.redISub(a))),
                      (r = o.redMul(h));
                  }
                  return this.curve.point(t, e, r);
                }),
                (h.prototype.dbl = function () {
                  return this.isInfinity()
                    ? this
                    : this.curve.extended
                      ? this._extDbl()
                      : this._projDbl();
                }),
                (h.prototype._extAdd = function (t) {
                  var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
                    r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
                    i = this.t.redMul(this.curve.dd).redMul(t.t),
                    n = this.z.redMul(t.z.redAdd(t.z)),
                    a = r.redSub(e),
                    o = n.redSub(i),
                    f = n.redAdd(i),
                    s = r.redAdd(e),
                    h = a.redMul(o),
                    d = f.redMul(s),
                    c = a.redMul(s),
                    u = o.redMul(f);
                  return this.curve.point(h, d, u, c);
                }),
                (h.prototype._projAdd = function (t) {
                  var e,
                    r,
                    i = this.z.redMul(t.z),
                    n = i.redSqr(),
                    a = this.x.redMul(t.x),
                    o = this.y.redMul(t.y),
                    f = this.curve.d.redMul(a).redMul(o),
                    s = n.redSub(f),
                    h = n.redAdd(f),
                    d = this.x
                      .redAdd(this.y)
                      .redMul(t.x.redAdd(t.y))
                      .redISub(a)
                      .redISub(o),
                    c = i.redMul(s).redMul(d);
                  return (
                    this.curve.twisted
                      ? ((e = i
                          .redMul(h)
                          .redMul(o.redSub(this.curve._mulA(a)))),
                        (r = s.redMul(h)))
                      : ((e = i.redMul(h).redMul(o.redSub(a))),
                        (r = this.curve._mulC(s).redMul(h))),
                    this.curve.point(c, e, r)
                  );
                }),
                (h.prototype.add = function (t) {
                  return this.isInfinity()
                    ? t
                    : t.isInfinity()
                      ? this
                      : this.curve.extended
                        ? this._extAdd(t)
                        : this._projAdd(t);
                }),
                (h.prototype.mul = function (t) {
                  return this._hasDoubles(t)
                    ? this.curve._fixedNafMul(this, t)
                    : this.curve._wnafMul(this, t);
                }),
                (h.prototype.mulAdd = function (t, e, r) {
                  return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1);
                }),
                (h.prototype.jmulAdd = function (t, e, r) {
                  return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0);
                }),
                (h.prototype.normalize = function () {
                  if (this.zOne) return this;
                  var t = this.z.redInvm();
                  return (
                    (this.x = this.x.redMul(t)),
                    (this.y = this.y.redMul(t)),
                    this.t && (this.t = this.t.redMul(t)),
                    (this.z = this.curve.one),
                    (this.zOne = !0),
                    this
                  );
                }),
                (h.prototype.neg = function () {
                  return this.curve.point(
                    this.x.redNeg(),
                    this.y,
                    this.z,
                    this.t && this.t.redNeg()
                  );
                }),
                (h.prototype.getX = function () {
                  return this.normalize(), this.x.fromRed();
                }),
                (h.prototype.getY = function () {
                  return this.normalize(), this.y.fromRed();
                }),
                (h.prototype.eq = function (t) {
                  return (
                    this === t ||
                    (0 === this.getX().cmp(t.getX()) &&
                      0 === this.getY().cmp(t.getY()))
                  );
                }),
                (h.prototype.eqXToP = function (t) {
                  var e = t.toRed(this.curve.red).redMul(this.z);
                  if (0 === this.x.cmp(e)) return !0;
                  for (
                    var r = t.clone(), i = this.curve.redN.redMul(this.z);
                    ;

                  ) {
                    if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0))
                      return !1;
                    if ((e.redIAdd(i), 0 === this.x.cmp(e))) return !0;
                  }
                }),
                (h.prototype.toP = h.prototype.normalize),
                (h.prototype.mixedAdd = h.prototype.add);
            },
            9359: function (t, e, r) {
              'use strict';
              (e.base = r(2727)),
                (e.short = r(4720)),
                (e.mont = r(6653)),
                (e.edwards = r(2705));
            },
            6653: function (t, e, r) {
              'use strict';
              var i = r(711),
                n = r(3782),
                a = r(2727),
                o = r(4401);
              function f(t) {
                a.call(this, 'mont', t),
                  (this.a = new i(t.a, 16).toRed(this.red)),
                  (this.b = new i(t.b, 16).toRed(this.red)),
                  (this.i4 = new i(4).toRed(this.red).redInvm()),
                  (this.two = new i(2).toRed(this.red)),
                  (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
              }
              function s(t, e, r) {
                a.BasePoint.call(this, t, 'projective'),
                  null === e && null === r
                    ? ((this.x = this.curve.one), (this.z = this.curve.zero))
                    : ((this.x = new i(e, 16)),
                      (this.z = new i(r, 16)),
                      this.x.red || (this.x = this.x.toRed(this.curve.red)),
                      this.z.red || (this.z = this.z.toRed(this.curve.red)));
              }
              n(f, a),
                (t.exports = f),
                (f.prototype.validate = function (t) {
                  var e = t.normalize().x,
                    r = e.redSqr(),
                    i = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
                  return 0 === i.redSqrt().redSqr().cmp(i);
                }),
                n(s, a.BasePoint),
                (f.prototype.decodePoint = function (t, e) {
                  return this.point(o.toArray(t, e), 1);
                }),
                (f.prototype.point = function (t, e) {
                  return new s(this, t, e);
                }),
                (f.prototype.pointFromJSON = function (t) {
                  return s.fromJSON(this, t);
                }),
                (s.prototype.precompute = function () {}),
                (s.prototype._encode = function () {
                  return this.getX().toArray('be', this.curve.p.byteLength());
                }),
                (s.fromJSON = function (t, e) {
                  return new s(t, e[0], e[1] || t.one);
                }),
                (s.prototype.inspect = function () {
                  return this.isInfinity()
                    ? '<EC Point Infinity>'
                    : '<EC Point x: ' +
                        this.x.fromRed().toString(16, 2) +
                        ' z: ' +
                        this.z.fromRed().toString(16, 2) +
                        '>';
                }),
                (s.prototype.isInfinity = function () {
                  return 0 === this.z.cmpn(0);
                }),
                (s.prototype.dbl = function () {
                  var t = this.x.redAdd(this.z).redSqr(),
                    e = this.x.redSub(this.z).redSqr(),
                    r = t.redSub(e),
                    i = t.redMul(e),
                    n = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
                  return this.curve.point(i, n);
                }),
                (s.prototype.add = function () {
                  throw Error('Not supported on Montgomery curve');
                }),
                (s.prototype.diffAdd = function (t, e) {
                  var r = this.x.redAdd(this.z),
                    i = this.x.redSub(this.z),
                    n = t.x.redAdd(t.z),
                    a = t.x.redSub(t.z).redMul(r),
                    o = n.redMul(i),
                    f = e.z.redMul(a.redAdd(o).redSqr()),
                    s = e.x.redMul(a.redISub(o).redSqr());
                  return this.curve.point(f, s);
                }),
                (s.prototype.mul = function (t) {
                  for (
                    var e = t.clone(),
                      r = this,
                      i = this.curve.point(null, null),
                      n = [];
                    0 !== e.cmpn(0);
                    e.iushrn(1)
                  )
                    n.push(e.andln(1));
                  for (var a = n.length - 1; a >= 0; a--)
                    0 === n[a]
                      ? ((r = r.diffAdd(i, this)), (i = i.dbl()))
                      : ((i = r.diffAdd(i, this)), (r = r.dbl()));
                  return i;
                }),
                (s.prototype.mulAdd = function () {
                  throw Error('Not supported on Montgomery curve');
                }),
                (s.prototype.jumlAdd = function () {
                  throw Error('Not supported on Montgomery curve');
                }),
                (s.prototype.eq = function (t) {
                  return 0 === this.getX().cmp(t.getX());
                }),
                (s.prototype.normalize = function () {
                  return (
                    (this.x = this.x.redMul(this.z.redInvm())),
                    (this.z = this.curve.one),
                    this
                  );
                }),
                (s.prototype.getX = function () {
                  return this.normalize(), this.x.fromRed();
                });
            },
            4720: function (t, e, r) {
              'use strict';
              var i = r(4401),
                n = r(711),
                a = r(3782),
                o = r(2727),
                f = i.assert;
              function s(t) {
                o.call(this, 'short', t),
                  (this.a = new n(t.a, 16).toRed(this.red)),
                  (this.b = new n(t.b, 16).toRed(this.red)),
                  (this.tinv = this.two.redInvm()),
                  (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
                  (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
                  (this.endo = this._getEndomorphism(t)),
                  (this._endoWnafT1 = [, , , ,]),
                  (this._endoWnafT2 = [, , , ,]);
              }
              function h(t, e, r, i) {
                o.BasePoint.call(this, t, 'affine'),
                  null === e && null === r
                    ? ((this.x = null), (this.y = null), (this.inf = !0))
                    : ((this.x = new n(e, 16)),
                      (this.y = new n(r, 16)),
                      i &&
                        (this.x.forceRed(this.curve.red),
                        this.y.forceRed(this.curve.red)),
                      this.x.red || (this.x = this.x.toRed(this.curve.red)),
                      this.y.red || (this.y = this.y.toRed(this.curve.red)),
                      (this.inf = !1));
              }
              function d(t, e, r, i) {
                o.BasePoint.call(this, t, 'jacobian'),
                  null === e && null === r && null === i
                    ? ((this.x = this.curve.one),
                      (this.y = this.curve.one),
                      (this.z = new n(0)))
                    : ((this.x = new n(e, 16)),
                      (this.y = new n(r, 16)),
                      (this.z = new n(i, 16))),
                  this.x.red || (this.x = this.x.toRed(this.curve.red)),
                  this.y.red || (this.y = this.y.toRed(this.curve.red)),
                  this.z.red || (this.z = this.z.toRed(this.curve.red)),
                  (this.zOne = this.z === this.curve.one);
              }
              a(s, o),
                (t.exports = s),
                (s.prototype._getEndomorphism = function (t) {
                  if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    if (t.beta) e = new n(t.beta, 16).toRed(this.red);
                    else {
                      var e,
                        r,
                        i,
                        a = this._getEndoRoots(this.p);
                      e = (e = 0 > a[0].cmp(a[1]) ? a[0] : a[1]).toRed(
                        this.red
                      );
                    }
                    if (t.lambda) r = new n(t.lambda, 16);
                    else {
                      var o = this._getEndoRoots(this.n);
                      0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))
                        ? (r = o[0])
                        : ((r = o[1]),
                          f(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
                    }
                    return (
                      (i = t.basis
                        ? t.basis.map(function (t) {
                            return { a: new n(t.a, 16), b: new n(t.b, 16) };
                          })
                        : this._getEndoBasis(r)),
                      { beta: e, lambda: r, basis: i }
                    );
                  }
                }),
                (s.prototype._getEndoRoots = function (t) {
                  var e = t === this.p ? this.red : n.mont(t),
                    r = new n(2).toRed(e).redInvm(),
                    i = r.redNeg(),
                    a = new n(3).toRed(e).redNeg().redSqrt().redMul(r);
                  return [i.redAdd(a).fromRed(), i.redSub(a).fromRed()];
                }),
                (s.prototype._getEndoBasis = function (t) {
                  for (
                    var e,
                      r,
                      i,
                      a,
                      o,
                      f,
                      s,
                      h,
                      d,
                      c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
                      u = t,
                      l = this.n.clone(),
                      p = new n(1),
                      b = new n(0),
                      m = new n(0),
                      v = new n(1),
                      y = 0;
                    0 !== u.cmpn(0);

                  ) {
                    var g = l.div(u);
                    (h = l.sub(g.mul(u))), (d = m.sub(g.mul(p)));
                    var _ = v.sub(g.mul(b));
                    if (!i && 0 > h.cmp(c))
                      (e = s.neg()), (r = p), (i = h.neg()), (a = d);
                    else if (i && 2 == ++y) break;
                    (s = h),
                      (l = u),
                      (u = h),
                      (m = p),
                      (p = d),
                      (v = b),
                      (b = _);
                  }
                  (o = h.neg()), (f = d);
                  var w = i.sqr().add(a.sqr());
                  return (
                    o.sqr().add(f.sqr()).cmp(w) >= 0 && ((o = e), (f = r)),
                    i.negative && ((i = i.neg()), (a = a.neg())),
                    o.negative && ((o = o.neg()), (f = f.neg())),
                    [
                      { a: i, b: a },
                      { a: o, b: f },
                    ]
                  );
                }),
                (s.prototype._endoSplit = function (t) {
                  var e = this.endo.basis,
                    r = e[0],
                    i = e[1],
                    n = i.b.mul(t).divRound(this.n),
                    a = r.b.neg().mul(t).divRound(this.n),
                    o = n.mul(r.a),
                    f = a.mul(i.a),
                    s = n.mul(r.b),
                    h = a.mul(i.b);
                  return { k1: t.sub(o).sub(f), k2: s.add(h).neg() };
                }),
                (s.prototype.pointFromX = function (t, e) {
                  (t = new n(t, 16)).red || (t = t.toRed(this.red));
                  var r = t
                      .redSqr()
                      .redMul(t)
                      .redIAdd(t.redMul(this.a))
                      .redIAdd(this.b),
                    i = r.redSqrt();
                  if (0 !== i.redSqr().redSub(r).cmp(this.zero))
                    throw Error('invalid point');
                  var a = i.fromRed().isOdd();
                  return (
                    ((e && !a) || (!e && a)) && (i = i.redNeg()),
                    this.point(t, i)
                  );
                }),
                (s.prototype.validate = function (t) {
                  if (t.inf) return !0;
                  var e = t.x,
                    r = t.y,
                    i = this.a.redMul(e),
                    n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
                  return 0 === r.redSqr().redISub(n).cmpn(0);
                }),
                (s.prototype._endoWnafMulAdd = function (t, e, r) {
                  for (
                    var i = this._endoWnafT1, n = this._endoWnafT2, a = 0;
                    a < t.length;
                    a++
                  ) {
                    var o = this._endoSplit(e[a]),
                      f = t[a],
                      s = f._getBeta();
                    o.k1.negative && (o.k1.ineg(), (f = f.neg(!0))),
                      o.k2.negative && (o.k2.ineg(), (s = s.neg(!0))),
                      (i[2 * a] = f),
                      (i[2 * a + 1] = s),
                      (n[2 * a] = o.k1),
                      (n[2 * a + 1] = o.k2);
                  }
                  for (
                    var h = this._wnafMulAdd(1, i, n, 2 * a, r), d = 0;
                    d < 2 * a;
                    d++
                  )
                    (i[d] = null), (n[d] = null);
                  return h;
                }),
                a(h, o.BasePoint),
                (s.prototype.point = function (t, e, r) {
                  return new h(this, t, e, r);
                }),
                (s.prototype.pointFromJSON = function (t, e) {
                  return h.fromJSON(this, t, e);
                }),
                (h.prototype._getBeta = function () {
                  if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(
                      this.x.redMul(this.curve.endo.beta),
                      this.y
                    );
                    if (t) {
                      var r = this.curve,
                        i = function (t) {
                          return r.point(t.x.redMul(r.endo.beta), t.y);
                        };
                      (t.beta = e),
                        (e.precomputed = {
                          beta: null,
                          naf: t.naf && {
                            wnd: t.naf.wnd,
                            points: t.naf.points.map(i),
                          },
                          doubles: t.doubles && {
                            step: t.doubles.step,
                            points: t.doubles.points.map(i),
                          },
                        });
                    }
                    return e;
                  }
                }),
                (h.prototype.toJSON = function () {
                  return this.precomputed
                    ? [
                        this.x,
                        this.y,
                        this.precomputed && {
                          doubles: this.precomputed.doubles && {
                            step: this.precomputed.doubles.step,
                            points: this.precomputed.doubles.points.slice(1),
                          },
                          naf: this.precomputed.naf && {
                            wnd: this.precomputed.naf.wnd,
                            points: this.precomputed.naf.points.slice(1),
                          },
                        },
                      ]
                    : [this.x, this.y];
                }),
                (h.fromJSON = function (t, e, r) {
                  'string' == typeof e && (e = JSON.parse(e));
                  var i = t.point(e[0], e[1], r);
                  if (!e[2]) return i;
                  function n(e) {
                    return t.point(e[0], e[1], r);
                  }
                  var a = e[2];
                  return (
                    (i.precomputed = {
                      beta: null,
                      doubles: a.doubles && {
                        step: a.doubles.step,
                        points: [i].concat(a.doubles.points.map(n)),
                      },
                      naf: a.naf && {
                        wnd: a.naf.wnd,
                        points: [i].concat(a.naf.points.map(n)),
                      },
                    }),
                    i
                  );
                }),
                (h.prototype.inspect = function () {
                  return this.isInfinity()
                    ? '<EC Point Infinity>'
                    : '<EC Point x: ' +
                        this.x.fromRed().toString(16, 2) +
                        ' y: ' +
                        this.y.fromRed().toString(16, 2) +
                        '>';
                }),
                (h.prototype.isInfinity = function () {
                  return this.inf;
                }),
                (h.prototype.add = function (t) {
                  if (this.inf) return t;
                  if (t.inf) return this;
                  if (this.eq(t)) return this.dbl();
                  if (this.neg().eq(t) || 0 === this.x.cmp(t.x))
                    return this.curve.point(null, null);
                  var e = this.y.redSub(t.y);
                  0 !== e.cmpn(0) &&
                    (e = e.redMul(this.x.redSub(t.x).redInvm()));
                  var r = e.redSqr().redISub(this.x).redISub(t.x),
                    i = e.redMul(this.x.redSub(r)).redISub(this.y);
                  return this.curve.point(r, i);
                }),
                (h.prototype.dbl = function () {
                  if (this.inf) return this;
                  var t = this.y.redAdd(this.y);
                  if (0 === t.cmpn(0)) return this.curve.point(null, null);
                  var e = this.curve.a,
                    r = this.x.redSqr(),
                    i = t.redInvm(),
                    n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
                    a = n.redSqr().redISub(this.x.redAdd(this.x)),
                    o = n.redMul(this.x.redSub(a)).redISub(this.y);
                  return this.curve.point(a, o);
                }),
                (h.prototype.getX = function () {
                  return this.x.fromRed();
                }),
                (h.prototype.getY = function () {
                  return this.y.fromRed();
                }),
                (h.prototype.mul = function (t) {
                  return ((t = new n(t, 16)), this.isInfinity())
                    ? this
                    : this._hasDoubles(t)
                      ? this.curve._fixedNafMul(this, t)
                      : this.curve.endo
                        ? this.curve._endoWnafMulAdd([this], [t])
                        : this.curve._wnafMul(this, t);
                }),
                (h.prototype.mulAdd = function (t, e, r) {
                  var i = [this, e],
                    n = [t, r];
                  return this.curve.endo
                    ? this.curve._endoWnafMulAdd(i, n)
                    : this.curve._wnafMulAdd(1, i, n, 2);
                }),
                (h.prototype.jmulAdd = function (t, e, r) {
                  var i = [this, e],
                    n = [t, r];
                  return this.curve.endo
                    ? this.curve._endoWnafMulAdd(i, n, !0)
                    : this.curve._wnafMulAdd(1, i, n, 2, !0);
                }),
                (h.prototype.eq = function (t) {
                  return (
                    this === t ||
                    (this.inf === t.inf &&
                      (this.inf ||
                        (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
                  );
                }),
                (h.prototype.neg = function (t) {
                  if (this.inf) return this;
                  var e = this.curve.point(this.x, this.y.redNeg());
                  if (t && this.precomputed) {
                    var r = this.precomputed,
                      i = function (t) {
                        return t.neg();
                      };
                    e.precomputed = {
                      naf: r.naf && {
                        wnd: r.naf.wnd,
                        points: r.naf.points.map(i),
                      },
                      doubles: r.doubles && {
                        step: r.doubles.step,
                        points: r.doubles.points.map(i),
                      },
                    };
                  }
                  return e;
                }),
                (h.prototype.toJ = function () {
                  return this.inf
                    ? this.curve.jpoint(null, null, null)
                    : this.curve.jpoint(this.x, this.y, this.curve.one);
                }),
                a(d, o.BasePoint),
                (s.prototype.jpoint = function (t, e, r) {
                  return new d(this, t, e, r);
                }),
                (d.prototype.toP = function () {
                  if (this.isInfinity()) return this.curve.point(null, null);
                  var t = this.z.redInvm(),
                    e = t.redSqr(),
                    r = this.x.redMul(e),
                    i = this.y.redMul(e).redMul(t);
                  return this.curve.point(r, i);
                }),
                (d.prototype.neg = function () {
                  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
                }),
                (d.prototype.add = function (t) {
                  if (this.isInfinity()) return t;
                  if (t.isInfinity()) return this;
                  var e = t.z.redSqr(),
                    r = this.z.redSqr(),
                    i = this.x.redMul(e),
                    n = t.x.redMul(r),
                    a = this.y.redMul(e.redMul(t.z)),
                    o = t.y.redMul(r.redMul(this.z)),
                    f = i.redSub(n),
                    s = a.redSub(o);
                  if (0 === f.cmpn(0))
                    return 0 !== s.cmpn(0)
                      ? this.curve.jpoint(null, null, null)
                      : this.dbl();
                  var h = f.redSqr(),
                    d = h.redMul(f),
                    c = i.redMul(h),
                    u = s.redSqr().redIAdd(d).redISub(c).redISub(c),
                    l = s.redMul(c.redISub(u)).redISub(a.redMul(d)),
                    p = this.z.redMul(t.z).redMul(f);
                  return this.curve.jpoint(u, l, p);
                }),
                (d.prototype.mixedAdd = function (t) {
                  if (this.isInfinity()) return t.toJ();
                  if (t.isInfinity()) return this;
                  var e = this.z.redSqr(),
                    r = this.x,
                    i = t.x.redMul(e),
                    n = this.y,
                    a = t.y.redMul(e).redMul(this.z),
                    o = r.redSub(i),
                    f = n.redSub(a);
                  if (0 === o.cmpn(0))
                    return 0 !== f.cmpn(0)
                      ? this.curve.jpoint(null, null, null)
                      : this.dbl();
                  var s = o.redSqr(),
                    h = s.redMul(o),
                    d = r.redMul(s),
                    c = f.redSqr().redIAdd(h).redISub(d).redISub(d),
                    u = f.redMul(d.redISub(c)).redISub(n.redMul(h)),
                    l = this.z.redMul(o);
                  return this.curve.jpoint(c, u, l);
                }),
                (d.prototype.dblp = function (t) {
                  if (0 === t || this.isInfinity()) return this;
                  if (!t) return this.dbl();
                  if (this.curve.zeroA || this.curve.threeA) {
                    for (var e = this, r = 0; r < t; r++) e = e.dbl();
                    return e;
                  }
                  for (
                    var i = this.curve.a,
                      n = this.curve.tinv,
                      a = this.x,
                      o = this.y,
                      f = this.z,
                      s = f.redSqr().redSqr(),
                      h = o.redAdd(o),
                      r = 0;
                    r < t;
                    r++
                  ) {
                    var d = a.redSqr(),
                      c = h.redSqr(),
                      u = c.redSqr(),
                      l = d.redAdd(d).redIAdd(d).redIAdd(i.redMul(s)),
                      p = a.redMul(c),
                      b = l.redSqr().redISub(p.redAdd(p)),
                      m = p.redISub(b),
                      v = l.redMul(m);
                    v = v.redIAdd(v).redISub(u);
                    var y = h.redMul(f);
                    r + 1 < t && (s = s.redMul(u)), (a = b), (f = y), (h = v);
                  }
                  return this.curve.jpoint(a, h.redMul(n), f);
                }),
                (d.prototype.dbl = function () {
                  return this.isInfinity()
                    ? this
                    : this.curve.zeroA
                      ? this._zeroDbl()
                      : this.curve.threeA
                        ? this._threeDbl()
                        : this._dbl();
                }),
                (d.prototype._zeroDbl = function () {
                  if (this.zOne) {
                    var t,
                      e,
                      r,
                      i = this.x.redSqr(),
                      n = this.y.redSqr(),
                      a = n.redSqr(),
                      o = this.x.redAdd(n).redSqr().redISub(i).redISub(a);
                    o = o.redIAdd(o);
                    var f = i.redAdd(i).redIAdd(i),
                      s = f.redSqr().redISub(o).redISub(o),
                      h = a.redIAdd(a);
                    (h = (h = h.redIAdd(h)).redIAdd(h)),
                      (t = s),
                      (e = f.redMul(o.redISub(s)).redISub(h)),
                      (r = this.y.redAdd(this.y));
                  } else {
                    var d = this.x.redSqr(),
                      c = this.y.redSqr(),
                      u = c.redSqr(),
                      l = this.x.redAdd(c).redSqr().redISub(d).redISub(u);
                    l = l.redIAdd(l);
                    var p = d.redAdd(d).redIAdd(d),
                      b = p.redSqr(),
                      m = u.redIAdd(u);
                    (m = (m = m.redIAdd(m)).redIAdd(m)),
                      (t = b.redISub(l).redISub(l)),
                      (e = p.redMul(l.redISub(t)).redISub(m)),
                      (r = (r = this.y.redMul(this.z)).redIAdd(r));
                  }
                  return this.curve.jpoint(t, e, r);
                }),
                (d.prototype._threeDbl = function () {
                  if (this.zOne) {
                    var t,
                      e,
                      r,
                      i = this.x.redSqr(),
                      n = this.y.redSqr(),
                      a = n.redSqr(),
                      o = this.x.redAdd(n).redSqr().redISub(i).redISub(a);
                    o = o.redIAdd(o);
                    var f = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                      s = f.redSqr().redISub(o).redISub(o);
                    t = s;
                    var h = a.redIAdd(a);
                    (h = (h = h.redIAdd(h)).redIAdd(h)),
                      (e = f.redMul(o.redISub(s)).redISub(h)),
                      (r = this.y.redAdd(this.y));
                  } else {
                    var d = this.z.redSqr(),
                      c = this.y.redSqr(),
                      u = this.x.redMul(c),
                      l = this.x.redSub(d).redMul(this.x.redAdd(d));
                    l = l.redAdd(l).redIAdd(l);
                    var p = u.redIAdd(u),
                      b = (p = p.redIAdd(p)).redAdd(p);
                    (t = l.redSqr().redISub(b)),
                      (r = this.y
                        .redAdd(this.z)
                        .redSqr()
                        .redISub(c)
                        .redISub(d));
                    var m = c.redSqr();
                    (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
                      (e = l.redMul(p.redISub(t)).redISub(m));
                  }
                  return this.curve.jpoint(t, e, r);
                }),
                (d.prototype._dbl = function () {
                  var t = this.curve.a,
                    e = this.x,
                    r = this.y,
                    i = this.z,
                    n = i.redSqr().redSqr(),
                    a = e.redSqr(),
                    o = r.redSqr(),
                    f = a.redAdd(a).redIAdd(a).redIAdd(t.redMul(n)),
                    s = e.redAdd(e),
                    h = (s = s.redIAdd(s)).redMul(o),
                    d = f.redSqr().redISub(h.redAdd(h)),
                    c = h.redISub(d),
                    u = o.redSqr();
                  u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                  var l = f.redMul(c).redISub(u),
                    p = r.redAdd(r).redMul(i);
                  return this.curve.jpoint(d, l, p);
                }),
                (d.prototype.trpl = function () {
                  if (!this.curve.zeroA) return this.dbl().add(this);
                  var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr(),
                    i = e.redSqr(),
                    n = t.redAdd(t).redIAdd(t),
                    a = n.redSqr(),
                    o = this.x.redAdd(e).redSqr().redISub(t).redISub(i),
                    f = (o = (o = (o = o.redIAdd(o))
                      .redAdd(o)
                      .redIAdd(o)).redISub(a)).redSqr(),
                    s = i.redIAdd(i);
                  s = (s = (s = s.redIAdd(s)).redIAdd(s)).redIAdd(s);
                  var h = n
                      .redIAdd(o)
                      .redSqr()
                      .redISub(a)
                      .redISub(f)
                      .redISub(s),
                    d = e.redMul(h);
                  d = (d = d.redIAdd(d)).redIAdd(d);
                  var c = this.x.redMul(f).redISub(d);
                  c = (c = c.redIAdd(c)).redIAdd(c);
                  var u = this.y.redMul(
                    h.redMul(s.redISub(h)).redISub(o.redMul(f))
                  );
                  u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                  var l = this.z.redAdd(o).redSqr().redISub(r).redISub(f);
                  return this.curve.jpoint(c, u, l);
                }),
                (d.prototype.mul = function (t, e) {
                  return (t = new n(t, e)), this.curve._wnafMul(this, t);
                }),
                (d.prototype.eq = function (t) {
                  if ('affine' === t.type) return this.eq(t.toJ());
                  if (this === t) return !0;
                  var e = this.z.redSqr(),
                    r = t.z.redSqr();
                  if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0))
                    return !1;
                  var i = e.redMul(this.z),
                    n = r.redMul(t.z);
                  return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0);
                }),
                (d.prototype.eqXToP = function (t) {
                  var e = this.z.redSqr(),
                    r = t.toRed(this.curve.red).redMul(e);
                  if (0 === this.x.cmp(r)) return !0;
                  for (var i = t.clone(), n = this.curve.redN.redMul(e); ; ) {
                    if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0))
                      return !1;
                    if ((r.redIAdd(n), 0 === this.x.cmp(r))) return !0;
                  }
                }),
                (d.prototype.inspect = function () {
                  return this.isInfinity()
                    ? '<EC JPoint Infinity>'
                    : '<EC JPoint x: ' +
                        this.x.toString(16, 2) +
                        ' y: ' +
                        this.y.toString(16, 2) +
                        ' z: ' +
                        this.z.toString(16, 2) +
                        '>';
                }),
                (d.prototype.isInfinity = function () {
                  return 0 === this.z.cmpn(0);
                });
            },
            6226: function (t, e, r) {
              'use strict';
              var i,
                n = r(7028),
                a = r(9359),
                o = r(4401).assert;
              function f(t) {
                'short' === t.type
                  ? (this.curve = new a.short(t))
                  : 'edwards' === t.type
                    ? (this.curve = new a.edwards(t))
                    : (this.curve = new a.mont(t)),
                  (this.g = this.curve.g),
                  (this.n = this.curve.n),
                  (this.hash = t.hash),
                  o(this.g.validate(), 'Invalid curve'),
                  o(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
              }
              function s(t, r) {
                Object.defineProperty(e, t, {
                  configurable: !0,
                  enumerable: !0,
                  get: function () {
                    var i = new f(r);
                    return (
                      Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: i,
                      }),
                      i
                    );
                  },
                });
              }
              (e.PresetCurve = f),
                s('p192', {
                  type: 'short',
                  prime: 'p192',
                  p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
                  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
                  b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
                  n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
                  hash: n.sha256,
                  gRed: !1,
                  g: [
                    '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
                    '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811',
                  ],
                }),
                s('p224', {
                  type: 'short',
                  prime: 'p224',
                  p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
                  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
                  b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
                  n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
                  hash: n.sha256,
                  gRed: !1,
                  g: [
                    'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
                    'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34',
                  ],
                }),
                s('p256', {
                  type: 'short',
                  prime: null,
                  p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
                  a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
                  b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
                  n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
                  hash: n.sha256,
                  gRed: !1,
                  g: [
                    '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
                    '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5',
                  ],
                }),
                s('p384', {
                  type: 'short',
                  prime: null,
                  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
                  a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
                  b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
                  n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
                  hash: n.sha384,
                  gRed: !1,
                  g: [
                    'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
                    '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f',
                  ],
                }),
                s('p521', {
                  type: 'short',
                  prime: null,
                  p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
                  a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
                  b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
                  n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
                  hash: n.sha512,
                  gRed: !1,
                  g: [
                    '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
                    '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650',
                  ],
                }),
                s('curve25519', {
                  type: 'mont',
                  prime: 'p25519',
                  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
                  a: '76d06',
                  b: '1',
                  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
                  hash: n.sha256,
                  gRed: !1,
                  g: ['9'],
                }),
                s('ed25519', {
                  type: 'edwards',
                  prime: 'p25519',
                  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
                  a: '-1',
                  c: '1',
                  d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
                  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
                  hash: n.sha256,
                  gRed: !1,
                  g: [
                    '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
                    '6666666666666666666666666666666666666666666666666666666666666658',
                  ],
                });
              try {
                i = r(9702);
              } catch (t) {
                i = void 0;
              }
              s('secp256k1', {
                type: 'short',
                prime: 'k256',
                p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
                a: '0',
                b: '7',
                n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
                h: '1',
                hash: n.sha256,
                beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
                lambda:
                  '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
                basis: [
                  {
                    a: '3086d221a7d46bcde86c90e49284eb15',
                    b: '-e4437ed6010e88286f547fa90abfe4c3',
                  },
                  {
                    a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
                    b: '3086d221a7d46bcde86c90e49284eb15',
                  },
                ],
                gRed: !1,
                g: [
                  '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
                  '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
                  i,
                ],
              });
            },
            4088: function (t, e, r) {
              'use strict';
              var i = r(711),
                n = r(4910),
                a = r(4401),
                o = r(6226),
                f = r(3500),
                s = a.assert,
                h = r(4724),
                d = r(7526);
              function c(t) {
                if (!(this instanceof c)) return new c(t);
                'string' == typeof t &&
                  (s(o.hasOwnProperty(t), 'Unknown curve ' + t), (t = o[t])),
                  t instanceof o.PresetCurve && (t = { curve: t }),
                  (this.curve = t.curve.curve),
                  (this.n = this.curve.n),
                  (this.nh = this.n.ushrn(1)),
                  (this.g = this.curve.g),
                  (this.g = t.curve.g),
                  this.g.precompute(t.curve.n.bitLength() + 1),
                  (this.hash = t.hash || t.curve.hash);
              }
              (t.exports = c),
                (c.prototype.keyPair = function (t) {
                  return new h(this, t);
                }),
                (c.prototype.keyFromPrivate = function (t, e) {
                  return h.fromPrivate(this, t, e);
                }),
                (c.prototype.keyFromPublic = function (t, e) {
                  return h.fromPublic(this, t, e);
                }),
                (c.prototype.genKeyPair = function (t) {
                  t || (t = {});
                  for (
                    var e = new n({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || 'utf8',
                        entropy: t.entropy || f(this.hash.hmacStrength),
                        entropyEnc: (t.entropy && t.entropyEnc) || 'utf8',
                        nonce: this.n.toArray(),
                      }),
                      r = this.n.byteLength(),
                      a = this.n.sub(new i(2));
                    ;

                  ) {
                    var o = new i(e.generate(r));
                    if (!(o.cmp(a) > 0))
                      return o.iaddn(1), this.keyFromPrivate(o);
                  }
                }),
                (c.prototype._truncateToN = function (t, e) {
                  var r = 8 * t.byteLength() - this.n.bitLength();
                  return (r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0)
                    ? t.sub(this.n)
                    : t;
                }),
                (c.prototype.sign = function (t, e, r, a) {
                  'object' == typeof r && ((a = r), (r = null)),
                    a || (a = {}),
                    (e = this.keyFromPrivate(e, r)),
                    (t = this._truncateToN(new i(t, 16)));
                  for (
                    var o = this.n.byteLength(),
                      f = e.getPrivate().toArray('be', o),
                      s = t.toArray('be', o),
                      h = new n({
                        hash: this.hash,
                        entropy: f,
                        nonce: s,
                        pers: a.pers,
                        persEnc: a.persEnc || 'utf8',
                      }),
                      c = this.n.sub(new i(1)),
                      u = 0;
                    ;
                    u++
                  ) {
                    var l = a.k
                      ? a.k(u)
                      : new i(h.generate(this.n.byteLength()));
                    if (
                      !(
                        0 >= (l = this._truncateToN(l, !0)).cmpn(1) ||
                        l.cmp(c) >= 0
                      )
                    ) {
                      var p = this.g.mul(l);
                      if (!p.isInfinity()) {
                        var b = p.getX(),
                          m = b.umod(this.n);
                        if (0 !== m.cmpn(0)) {
                          var v = l
                            .invm(this.n)
                            .mul(m.mul(e.getPrivate()).iadd(t));
                          if (0 !== (v = v.umod(this.n)).cmpn(0)) {
                            var y =
                              (p.getY().isOdd() ? 1 : 0) |
                              (0 !== b.cmp(m) ? 2 : 0);
                            return (
                              a.canonical &&
                                v.cmp(this.nh) > 0 &&
                                ((v = this.n.sub(v)), (y ^= 1)),
                              new d({ r: m, s: v, recoveryParam: y })
                            );
                          }
                        }
                      }
                    }
                  }
                }),
                (c.prototype.verify = function (t, e, r, n) {
                  (t = this._truncateToN(new i(t, 16))),
                    (r = this.keyFromPublic(r, n));
                  var a = (e = new d(e, 'hex')).r,
                    o = e.s;
                  if (
                    0 > a.cmpn(1) ||
                    a.cmp(this.n) >= 0 ||
                    0 > o.cmpn(1) ||
                    o.cmp(this.n) >= 0
                  )
                    return !1;
                  var f = o.invm(this.n),
                    s = f.mul(t).umod(this.n),
                    h = f.mul(a).umod(this.n);
                  if (!this.curve._maxwellTrick) {
                    var c = this.g.mulAdd(s, r.getPublic(), h);
                    return (
                      !c.isInfinity() && 0 === c.getX().umod(this.n).cmp(a)
                    );
                  }
                  var c = this.g.jmulAdd(s, r.getPublic(), h);
                  return !c.isInfinity() && c.eqXToP(a);
                }),
                (c.prototype.recoverPubKey = function (t, e, r, n) {
                  s((3 & r) === r, 'The recovery param is more than two bits'),
                    (e = new d(e, n));
                  var a = this.n,
                    o = new i(t),
                    f = e.r,
                    h = e.s,
                    c = 1 & r,
                    u = r >> 1;
                  if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
                    throw Error('Unable to find sencond key candinate');
                  f = u
                    ? this.curve.pointFromX(f.add(this.curve.n), c)
                    : this.curve.pointFromX(f, c);
                  var l = e.r.invm(a),
                    p = a.sub(o).mul(l).umod(a),
                    b = h.mul(l).umod(a);
                  return this.g.mulAdd(p, f, b);
                }),
                (c.prototype.getKeyRecoveryParam = function (t, e, r, i) {
                  if (null !== (e = new d(e, i)).recoveryParam)
                    return e.recoveryParam;
                  for (var n, a = 0; a < 4; a++) {
                    try {
                      n = this.recoverPubKey(t, e, a);
                    } catch (t) {
                      continue;
                    }
                    if (n.eq(r)) return a;
                  }
                  throw Error('Unable to find valid recovery factor');
                });
            },
            4724: function (t, e, r) {
              'use strict';
              var i = r(711),
                n = r(4401).assert;
              function a(t, e) {
                (this.ec = t),
                  (this.priv = null),
                  (this.pub = null),
                  e.priv && this._importPrivate(e.priv, e.privEnc),
                  e.pub && this._importPublic(e.pub, e.pubEnc);
              }
              (t.exports = a),
                (a.fromPublic = function (t, e, r) {
                  return e instanceof a ? e : new a(t, { pub: e, pubEnc: r });
                }),
                (a.fromPrivate = function (t, e, r) {
                  return e instanceof a ? e : new a(t, { priv: e, privEnc: r });
                }),
                (a.prototype.validate = function () {
                  var t = this.getPublic();
                  return t.isInfinity()
                    ? { result: !1, reason: 'Invalid public key' }
                    : t.validate()
                      ? t.mul(this.ec.curve.n).isInfinity()
                        ? { result: !0, reason: null }
                        : { result: !1, reason: 'Public key * N != O' }
                      : { result: !1, reason: 'Public key is not a point' };
                }),
                (a.prototype.getPublic = function (t, e) {
                  return ('string' == typeof t && ((e = t), (t = null)),
                  this.pub || (this.pub = this.ec.g.mul(this.priv)),
                  e)
                    ? this.pub.encode(e, t)
                    : this.pub;
                }),
                (a.prototype.getPrivate = function (t) {
                  return 'hex' === t ? this.priv.toString(16, 2) : this.priv;
                }),
                (a.prototype._importPrivate = function (t, e) {
                  (this.priv = new i(t, e || 16)),
                    (this.priv = this.priv.umod(this.ec.curve.n));
                }),
                (a.prototype._importPublic = function (t, e) {
                  if (t.x || t.y) {
                    'mont' === this.ec.curve.type
                      ? n(t.x, 'Need x coordinate')
                      : ('short' === this.ec.curve.type ||
                          'edwards' === this.ec.curve.type) &&
                        n(t.x && t.y, 'Need both x and y coordinate'),
                      (this.pub = this.ec.curve.point(t.x, t.y));
                    return;
                  }
                  this.pub = this.ec.curve.decodePoint(t, e);
                }),
                (a.prototype.derive = function (t) {
                  return t.mul(this.priv).getX();
                }),
                (a.prototype.sign = function (t, e, r) {
                  return this.ec.sign(t, this, e, r);
                }),
                (a.prototype.verify = function (t, e) {
                  return this.ec.verify(t, e, this);
                }),
                (a.prototype.inspect = function () {
                  return (
                    '<Key priv: ' +
                    (this.priv && this.priv.toString(16, 2)) +
                    ' pub: ' +
                    (this.pub && this.pub.inspect()) +
                    ' >'
                  );
                });
            },
            7526: function (t, e, r) {
              'use strict';
              var i = r(711),
                n = r(4401),
                a = n.assert;
              function o(t, e) {
                if (t instanceof o) return t;
                this._importDER(t, e) ||
                  (a(t.r && t.s, 'Signature without r or s'),
                  (this.r = new i(t.r, 16)),
                  (this.s = new i(t.s, 16)),
                  void 0 === t.recoveryParam
                    ? (this.recoveryParam = null)
                    : (this.recoveryParam = t.recoveryParam));
              }
              function f() {
                this.place = 0;
              }
              function s(t, e) {
                var r = t[e.place++];
                if (!(128 & r)) return r;
                var i = 15 & r;
                if (0 === i || i > 4) return !1;
                for (var n = 0, a = 0, o = e.place; a < i; a++, o++)
                  (n <<= 8), (n |= t[o]), (n >>>= 0);
                return !(n <= 127) && ((e.place = o), n);
              }
              function h(t) {
                for (
                  var e = 0, r = t.length - 1;
                  !t[e] && !(128 & t[e + 1]) && e < r;

                )
                  e++;
                return 0 === e ? t : t.slice(e);
              }
              function d(t, e) {
                if (e < 128) {
                  t.push(e);
                  return;
                }
                var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
                for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
                t.push(e);
              }
              (t.exports = o),
                (o.prototype._importDER = function (t, e) {
                  t = n.toArray(t, e);
                  var r = new f();
                  if (48 !== t[r.place++]) return !1;
                  var a = s(t, r);
                  if (
                    !1 === a ||
                    a + r.place !== t.length ||
                    2 !== t[r.place++]
                  )
                    return !1;
                  var o = s(t, r);
                  if (!1 === o) return !1;
                  var h = t.slice(r.place, o + r.place);
                  if (((r.place += o), 2 !== t[r.place++])) return !1;
                  var d = s(t, r);
                  if (!1 === d || t.length !== d + r.place) return !1;
                  var c = t.slice(r.place, d + r.place);
                  if (0 === h[0]) {
                    if (!(128 & h[1])) return !1;
                    h = h.slice(1);
                  }
                  if (0 === c[0]) {
                    if (!(128 & c[1])) return !1;
                    c = c.slice(1);
                  }
                  return (
                    (this.r = new i(h)),
                    (this.s = new i(c)),
                    (this.recoveryParam = null),
                    !0
                  );
                }),
                (o.prototype.toDER = function (t) {
                  var e = this.r.toArray(),
                    r = this.s.toArray();
                  for (
                    128 & e[0] && (e = [0].concat(e)),
                      128 & r[0] && (r = [0].concat(r)),
                      e = h(e),
                      r = h(r);
                    !r[0] && !(128 & r[1]);

                  )
                    r = r.slice(1);
                  var i = [2];
                  d(i, e.length), (i = i.concat(e)).push(2), d(i, r.length);
                  var a = i.concat(r),
                    o = [48];
                  return d(o, a.length), (o = o.concat(a)), n.encode(o, t);
                });
            },
            8511: function (t, e, r) {
              'use strict';
              var i = r(7028),
                n = r(6226),
                a = r(4401),
                o = a.assert,
                f = a.parseBytes,
                s = r(9917),
                h = r(9314);
              function d(t) {
                if (
                  (o('ed25519' === t, 'only tested with ed25519 so far'),
                  !(this instanceof d))
                )
                  return new d(t);
                var t = n[t].curve;
                (this.curve = t),
                  (this.g = t.g),
                  this.g.precompute(t.n.bitLength() + 1),
                  (this.pointClass = t.point().constructor),
                  (this.encodingLength = Math.ceil(t.n.bitLength() / 8)),
                  (this.hash = i.sha512);
              }
              (t.exports = d),
                (d.prototype.sign = function (t, e) {
                  t = f(t);
                  var r = this.keyFromSecret(e),
                    i = this.hashInt(r.messagePrefix(), t),
                    n = this.g.mul(i),
                    a = this.encodePoint(n),
                    o = this.hashInt(a, r.pubBytes(), t).mul(r.priv()),
                    s = i.add(o).umod(this.curve.n);
                  return this.makeSignature({ R: n, S: s, Rencoded: a });
                }),
                (d.prototype.verify = function (t, e, r) {
                  (t = f(t)), (e = this.makeSignature(e));
                  var i = this.keyFromPublic(r),
                    n = this.hashInt(e.Rencoded(), i.pubBytes(), t),
                    a = this.g.mul(e.S());
                  return e.R().add(i.pub().mul(n)).eq(a);
                }),
                (d.prototype.hashInt = function () {
                  for (var t = this.hash(), e = 0; e < arguments.length; e++)
                    t.update(arguments[e]);
                  return a.intFromLE(t.digest()).umod(this.curve.n);
                }),
                (d.prototype.keyFromPublic = function (t) {
                  return s.fromPublic(this, t);
                }),
                (d.prototype.keyFromSecret = function (t) {
                  return s.fromSecret(this, t);
                }),
                (d.prototype.makeSignature = function (t) {
                  return t instanceof h ? t : new h(this, t);
                }),
                (d.prototype.encodePoint = function (t) {
                  var e = t.getY().toArray('le', this.encodingLength);
                  return (
                    (e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0),
                    e
                  );
                }),
                (d.prototype.decodePoint = function (t) {
                  var e = (t = a.parseBytes(t)).length - 1,
                    r = t.slice(0, e).concat(-129 & t[e]),
                    i = (128 & t[e]) != 0,
                    n = a.intFromLE(r);
                  return this.curve.pointFromY(n, i);
                }),
                (d.prototype.encodeInt = function (t) {
                  return t.toArray('le', this.encodingLength);
                }),
                (d.prototype.decodeInt = function (t) {
                  return a.intFromLE(t);
                }),
                (d.prototype.isPoint = function (t) {
                  return t instanceof this.pointClass;
                });
            },
            9917: function (t, e, r) {
              'use strict';
              var i = r(4401),
                n = i.assert,
                a = i.parseBytes,
                o = i.cachedProperty;
              function f(t, e) {
                (this.eddsa = t),
                  (this._secret = a(e.secret)),
                  t.isPoint(e.pub)
                    ? (this._pub = e.pub)
                    : (this._pubBytes = a(e.pub));
              }
              (f.fromPublic = function (t, e) {
                return e instanceof f ? e : new f(t, { pub: e });
              }),
                (f.fromSecret = function (t, e) {
                  return e instanceof f ? e : new f(t, { secret: e });
                }),
                (f.prototype.secret = function () {
                  return this._secret;
                }),
                o(f, 'pubBytes', function () {
                  return this.eddsa.encodePoint(this.pub());
                }),
                o(f, 'pub', function () {
                  return this._pubBytes
                    ? this.eddsa.decodePoint(this._pubBytes)
                    : this.eddsa.g.mul(this.priv());
                }),
                o(f, 'privBytes', function () {
                  var t = this.eddsa,
                    e = this.hash(),
                    r = t.encodingLength - 1,
                    i = e.slice(0, t.encodingLength);
                  return (i[0] &= 248), (i[r] &= 127), (i[r] |= 64), i;
                }),
                o(f, 'priv', function () {
                  return this.eddsa.decodeInt(this.privBytes());
                }),
                o(f, 'hash', function () {
                  return this.eddsa.hash().update(this.secret()).digest();
                }),
                o(f, 'messagePrefix', function () {
                  return this.hash().slice(this.eddsa.encodingLength);
                }),
                (f.prototype.sign = function (t) {
                  return (
                    n(this._secret, 'KeyPair can only verify'),
                    this.eddsa.sign(t, this)
                  );
                }),
                (f.prototype.verify = function (t, e) {
                  return this.eddsa.verify(t, e, this);
                }),
                (f.prototype.getSecret = function (t) {
                  return (
                    n(this._secret, 'KeyPair is public only'),
                    i.encode(this.secret(), t)
                  );
                }),
                (f.prototype.getPublic = function (t) {
                  return i.encode(this.pubBytes(), t);
                }),
                (t.exports = f);
            },
            9314: function (t, e, r) {
              'use strict';
              var i = r(711),
                n = r(4401),
                a = n.assert,
                o = n.cachedProperty,
                f = n.parseBytes;
              function s(t, e) {
                (this.eddsa = t),
                  'object' != typeof e && (e = f(e)),
                  Array.isArray(e) &&
                    (e = {
                      R: e.slice(0, t.encodingLength),
                      S: e.slice(t.encodingLength),
                    }),
                  a(e.R && e.S, 'Signature without R or S'),
                  t.isPoint(e.R) && (this._R = e.R),
                  e.S instanceof i && (this._S = e.S),
                  (this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded),
                  (this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded);
              }
              o(s, 'S', function () {
                return this.eddsa.decodeInt(this.Sencoded());
              }),
                o(s, 'R', function () {
                  return this.eddsa.decodePoint(this.Rencoded());
                }),
                o(s, 'Rencoded', function () {
                  return this.eddsa.encodePoint(this.R());
                }),
                o(s, 'Sencoded', function () {
                  return this.eddsa.encodeInt(this.S());
                }),
                (s.prototype.toBytes = function () {
                  return this.Rencoded().concat(this.Sencoded());
                }),
                (s.prototype.toHex = function () {
                  return n.encode(this.toBytes(), 'hex').toUpperCase();
                }),
                (t.exports = s);
            },
            9702: function (t) {
              t.exports = {
                doubles: {
                  step: 4,
                  points: [
                    [
                      'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
                      'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821',
                    ],
                    [
                      '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
                      '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf',
                    ],
                    [
                      '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
                      'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695',
                    ],
                    [
                      '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
                      '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9',
                    ],
                    [
                      '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
                      '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36',
                    ],
                    [
                      '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
                      '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f',
                    ],
                    [
                      'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
                      '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999',
                    ],
                    [
                      '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
                      'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09',
                    ],
                    [
                      'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
                      '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d',
                    ],
                    [
                      'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
                      'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088',
                    ],
                    [
                      'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
                      '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d',
                    ],
                    [
                      '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
                      '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8',
                    ],
                    [
                      '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
                      '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a',
                    ],
                    [
                      '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
                      '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453',
                    ],
                    [
                      '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
                      '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160',
                    ],
                    [
                      '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
                      '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0',
                    ],
                    [
                      '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
                      '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6',
                    ],
                    [
                      '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
                      '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589',
                    ],
                    [
                      '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
                      'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17',
                    ],
                    [
                      'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
                      '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda',
                    ],
                    [
                      'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
                      '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd',
                    ],
                    [
                      '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
                      '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2',
                    ],
                    [
                      '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
                      '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6',
                    ],
                    [
                      'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
                      '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f',
                    ],
                    [
                      '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
                      'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01',
                    ],
                    [
                      'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
                      '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3',
                    ],
                    [
                      'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
                      'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f',
                    ],
                    [
                      'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
                      '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7',
                    ],
                    [
                      'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
                      'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78',
                    ],
                    [
                      'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
                      '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1',
                    ],
                    [
                      '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
                      'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150',
                    ],
                    [
                      '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
                      '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82',
                    ],
                    [
                      'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
                      '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc',
                    ],
                    [
                      '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
                      'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b',
                    ],
                    [
                      'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
                      '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51',
                    ],
                    [
                      'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
                      '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45',
                    ],
                    [
                      'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
                      'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120',
                    ],
                    [
                      '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
                      '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84',
                    ],
                    [
                      '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
                      '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d',
                    ],
                    [
                      '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
                      'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d',
                    ],
                    [
                      '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
                      '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8',
                    ],
                    [
                      'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
                      '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8',
                    ],
                    [
                      '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
                      '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac',
                    ],
                    [
                      '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
                      'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f',
                    ],
                    [
                      '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
                      '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962',
                    ],
                    [
                      'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
                      '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907',
                    ],
                    [
                      '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
                      'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec',
                    ],
                    [
                      'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
                      'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d',
                    ],
                    [
                      'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
                      '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414',
                    ],
                    [
                      '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
                      'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd',
                    ],
                    [
                      '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
                      'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0',
                    ],
                    [
                      'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
                      '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811',
                    ],
                    [
                      'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
                      '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1',
                    ],
                    [
                      'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
                      '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c',
                    ],
                    [
                      '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
                      'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73',
                    ],
                    [
                      '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
                      '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd',
                    ],
                    [
                      'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
                      'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405',
                    ],
                    [
                      '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
                      'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589',
                    ],
                    [
                      '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
                      '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e',
                    ],
                    [
                      '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
                      '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27',
                    ],
                    [
                      'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
                      'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1',
                    ],
                    [
                      '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
                      '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482',
                    ],
                    [
                      '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
                      '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945',
                    ],
                    [
                      'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
                      '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573',
                    ],
                    [
                      'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
                      'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82',
                    ],
                  ],
                },
                naf: {
                  wnd: 7,
                  points: [
                    [
                      'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
                      '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672',
                    ],
                    [
                      '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
                      'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6',
                    ],
                    [
                      '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
                      '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da',
                    ],
                    [
                      'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
                      'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37',
                    ],
                    [
                      '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
                      'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b',
                    ],
                    [
                      'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
                      'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81',
                    ],
                    [
                      'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
                      '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58',
                    ],
                    [
                      'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
                      '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77',
                    ],
                    [
                      '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
                      '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a',
                    ],
                    [
                      '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
                      '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c',
                    ],
                    [
                      '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
                      '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67',
                    ],
                    [
                      '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
                      '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402',
                    ],
                    [
                      'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
                      'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55',
                    ],
                    [
                      'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
                      '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482',
                    ],
                    [
                      '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
                      'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82',
                    ],
                    [
                      '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
                      'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396',
                    ],
                    [
                      '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
                      '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49',
                    ],
                    [
                      '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
                      '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf',
                    ],
                    [
                      '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
                      '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a',
                    ],
                    [
                      '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
                      'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7',
                    ],
                    [
                      'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
                      'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933',
                    ],
                    [
                      '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
                      '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a',
                    ],
                    [
                      '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
                      '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6',
                    ],
                    [
                      'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
                      'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37',
                    ],
                    [
                      '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
                      '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e',
                    ],
                    [
                      'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
                      'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6',
                    ],
                    [
                      'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
                      'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476',
                    ],
                    [
                      '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
                      '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40',
                    ],
                    [
                      '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
                      '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61',
                    ],
                    [
                      '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
                      '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683',
                    ],
                    [
                      'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
                      '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5',
                    ],
                    [
                      '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
                      '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b',
                    ],
                    [
                      'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
                      '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417',
                    ],
                    [
                      '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
                      'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868',
                    ],
                    [
                      '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
                      'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a',
                    ],
                    [
                      'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
                      'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6',
                    ],
                    [
                      '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
                      '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996',
                    ],
                    [
                      '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
                      'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e',
                    ],
                    [
                      'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
                      'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d',
                    ],
                    [
                      '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
                      '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2',
                    ],
                    [
                      '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
                      'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e',
                    ],
                    [
                      '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
                      '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437',
                    ],
                    [
                      '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
                      'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311',
                    ],
                    [
                      'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
                      '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4',
                    ],
                    [
                      '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
                      '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575',
                    ],
                    [
                      '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
                      'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d',
                    ],
                    [
                      '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
                      'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d',
                    ],
                    [
                      'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
                      'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629',
                    ],
                    [
                      'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
                      'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06',
                    ],
                    [
                      '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
                      '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374',
                    ],
                    [
                      '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
                      '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee',
                    ],
                    [
                      'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
                      '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1',
                    ],
                    [
                      'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
                      'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b',
                    ],
                    [
                      '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
                      '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661',
                    ],
                    [
                      '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
                      '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6',
                    ],
                    [
                      'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
                      '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e',
                    ],
                    [
                      '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
                      '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d',
                    ],
                    [
                      'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
                      'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc',
                    ],
                    [
                      '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
                      'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4',
                    ],
                    [
                      '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
                      '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c',
                    ],
                    [
                      'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
                      '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b',
                    ],
                    [
                      'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
                      '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913',
                    ],
                    [
                      '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
                      '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154',
                    ],
                    [
                      '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
                      '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865',
                    ],
                    [
                      '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
                      'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc',
                    ],
                    [
                      '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
                      'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224',
                    ],
                    [
                      '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
                      '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e',
                    ],
                    [
                      '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
                      '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6',
                    ],
                    [
                      '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
                      '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511',
                    ],
                    [
                      '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
                      'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b',
                    ],
                    [
                      'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
                      'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2',
                    ],
                    [
                      '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
                      'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c',
                    ],
                    [
                      'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
                      '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3',
                    ],
                    [
                      'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
                      '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d',
                    ],
                    [
                      'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
                      '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700',
                    ],
                    [
                      'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
                      '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4',
                    ],
                    [
                      '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
                      'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196',
                    ],
                    [
                      '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
                      '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4',
                    ],
                    [
                      '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
                      'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257',
                    ],
                    [
                      'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
                      'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13',
                    ],
                    [
                      'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
                      '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096',
                    ],
                    [
                      'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
                      'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38',
                    ],
                    [
                      'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
                      '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f',
                    ],
                    [
                      '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
                      '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448',
                    ],
                    [
                      'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
                      '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a',
                    ],
                    [
                      'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
                      '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4',
                    ],
                    [
                      '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
                      '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437',
                    ],
                    [
                      '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
                      'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7',
                    ],
                    [
                      'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
                      '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d',
                    ],
                    [
                      'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
                      '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a',
                    ],
                    [
                      'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
                      '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54',
                    ],
                    [
                      '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
                      '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77',
                    ],
                    [
                      'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
                      'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517',
                    ],
                    [
                      '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
                      'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10',
                    ],
                    [
                      'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
                      'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125',
                    ],
                    [
                      'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
                      '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e',
                    ],
                    [
                      '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
                      'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1',
                    ],
                    [
                      'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
                      '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2',
                    ],
                    [
                      'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
                      '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423',
                    ],
                    [
                      'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
                      '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8',
                    ],
                    [
                      '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
                      'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758',
                    ],
                    [
                      '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
                      'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375',
                    ],
                    [
                      'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
                      '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d',
                    ],
                    [
                      '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
                      'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec',
                    ],
                    [
                      '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
                      '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0',
                    ],
                    [
                      '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
                      'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c',
                    ],
                    [
                      'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
                      'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4',
                    ],
                    [
                      '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
                      'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f',
                    ],
                    [
                      '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
                      '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649',
                    ],
                    [
                      '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
                      'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826',
                    ],
                    [
                      '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
                      '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5',
                    ],
                    [
                      'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
                      'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87',
                    ],
                    [
                      '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
                      '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b',
                    ],
                    [
                      'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
                      '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc',
                    ],
                    [
                      '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
                      '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c',
                    ],
                    [
                      'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
                      'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f',
                    ],
                    [
                      'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
                      '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a',
                    ],
                    [
                      'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
                      'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46',
                    ],
                    [
                      '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
                      'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f',
                    ],
                    [
                      '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
                      '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03',
                    ],
                    [
                      '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
                      'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08',
                    ],
                    [
                      '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
                      '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8',
                    ],
                    [
                      '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
                      '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373',
                    ],
                    [
                      '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
                      'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3',
                    ],
                    [
                      '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
                      '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8',
                    ],
                    [
                      '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
                      '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1',
                    ],
                    [
                      '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
                      '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9',
                    ],
                  ],
                },
              };
            },
            4401: function (t, e, r) {
              'use strict';
              var i = r(711),
                n = r(3523),
                a = r(6545);
              (e.assert = n),
                (e.toArray = a.toArray),
                (e.zero2 = a.zero2),
                (e.toHex = a.toHex),
                (e.encode = a.encode),
                (e.getNAF = function (t, e, r) {
                  var i = Array(Math.max(t.bitLength(), r) + 1);
                  i.fill(0);
                  for (
                    var n = 1 << (e + 1), a = t.clone(), o = 0;
                    o < i.length;
                    o++
                  ) {
                    var f,
                      s = a.andln(n - 1);
                    a.isOdd()
                      ? ((f = s > (n >> 1) - 1 ? (n >> 1) - s : s), a.isubn(f))
                      : (f = 0),
                      (i[o] = f),
                      a.iushrn(1);
                  }
                  return i;
                }),
                (e.getJSF = function (t, e) {
                  var r = [[], []];
                  (t = t.clone()), (e = e.clone());
                  for (var i = 0, n = 0; t.cmpn(-i) > 0 || e.cmpn(-n) > 0; ) {
                    var a,
                      o,
                      f = (t.andln(3) + i) & 3,
                      s = (e.andln(3) + n) & 3;
                    if (
                      (3 === f && (f = -1), 3 === s && (s = -1), (1 & f) == 0)
                    )
                      a = 0;
                    else {
                      var h = (t.andln(7) + i) & 7;
                      a = (3 === h || 5 === h) && 2 === s ? -f : f;
                    }
                    if ((r[0].push(a), (1 & s) == 0)) o = 0;
                    else {
                      var h = (e.andln(7) + n) & 7;
                      o = (3 === h || 5 === h) && 2 === f ? -s : s;
                    }
                    r[1].push(o),
                      2 * i === a + 1 && (i = 1 - i),
                      2 * n === o + 1 && (n = 1 - n),
                      t.iushrn(1),
                      e.iushrn(1);
                  }
                  return r;
                }),
                (e.cachedProperty = function (t, e, r) {
                  var i = '_' + e;
                  t.prototype[e] = function () {
                    return void 0 !== this[i]
                      ? this[i]
                      : (this[i] = r.call(this));
                  };
                }),
                (e.parseBytes = function (t) {
                  return 'string' == typeof t ? e.toArray(t, 'hex') : t;
                }),
                (e.intFromLE = function (t) {
                  return new i(t, 'hex', 'le');
                });
            },
            8368: function (t, e, r) {
              var i = r(6911).Buffer,
                n = r(3533);
              t.exports = function (t, e, r, a) {
                if (
                  (i.isBuffer(t) || (t = i.from(t, 'binary')),
                  e &&
                    (i.isBuffer(e) || (e = i.from(e, 'binary')),
                    8 !== e.length))
                )
                  throw RangeError('salt should be Buffer with 8 byte length');
                for (
                  var o = r / 8,
                    f = i.alloc(o),
                    s = i.alloc(a || 0),
                    h = i.alloc(0);
                  o > 0 || a > 0;

                ) {
                  var d = new n();
                  d.update(h), d.update(t), e && d.update(e), (h = d.digest());
                  var c = 0;
                  if (o > 0) {
                    var u = f.length - o;
                    (c = Math.min(o, h.length)), h.copy(f, u, 0, c), (o -= c);
                  }
                  if (c < h.length && a > 0) {
                    var l = s.length - a,
                      p = Math.min(a, h.length - c);
                    h.copy(s, l, c, c + p), (a -= p);
                  }
                }
                return h.fill(0), { key: f, iv: s };
              };
            },
            9029: function (t, e, r) {
              'use strict';
              var i = r(6911).Buffer,
                n = r(3726).Transform;
              function a(t) {
                n.call(this),
                  (this._block = i.allocUnsafe(t)),
                  (this._blockSize = t),
                  (this._blockOffset = 0),
                  (this._length = [0, 0, 0, 0]),
                  (this._finalized = !1);
              }
              r(3782)(a, n),
                (a.prototype._transform = function (t, e, r) {
                  var i = null;
                  try {
                    this.update(t, e);
                  } catch (t) {
                    i = t;
                  }
                  r(i);
                }),
                (a.prototype._flush = function (t) {
                  var e = null;
                  try {
                    this.push(this.digest());
                  } catch (t) {
                    e = t;
                  }
                  t(e);
                }),
                (a.prototype.update = function (t, e) {
                  if (
                    ((function (t, e) {
                      if (!i.isBuffer(t) && 'string' != typeof t)
                        throw TypeError(e + ' must be a string or a buffer');
                    })(t, 'Data'),
                    this._finalized)
                  )
                    throw Error('Digest already called');
                  i.isBuffer(t) || (t = i.from(t, e));
                  for (
                    var r = this._block, n = 0;
                    this._blockOffset + t.length - n >= this._blockSize;

                  ) {
                    for (var a = this._blockOffset; a < this._blockSize; )
                      r[a++] = t[n++];
                    this._update(), (this._blockOffset = 0);
                  }
                  for (; n < t.length; ) r[this._blockOffset++] = t[n++];
                  for (var o = 0, f = 8 * t.length; f > 0; ++o)
                    (this._length[o] += f),
                      (f = (this._length[o] / 4294967296) | 0) > 0 &&
                        (this._length[o] -= 4294967296 * f);
                  return this;
                }),
                (a.prototype._update = function () {
                  throw Error('_update is not implemented');
                }),
                (a.prototype.digest = function (t) {
                  if (this._finalized) throw Error('Digest already called');
                  this._finalized = !0;
                  var e = this._digest();
                  void 0 !== t && (e = e.toString(t)),
                    this._block.fill(0),
                    (this._blockOffset = 0);
                  for (var r = 0; r < 4; ++r) this._length[r] = 0;
                  return e;
                }),
                (a.prototype._digest = function () {
                  throw Error('_digest is not implemented');
                }),
                (t.exports = a);
            },
            7028: function (t, e, r) {
              (e.utils = r(263)),
                (e.common = r(1330)),
                (e.sha = r(301)),
                (e.ripemd = r(3079)),
                (e.hmac = r(3092)),
                (e.sha1 = e.sha.sha1),
                (e.sha256 = e.sha.sha256),
                (e.sha224 = e.sha.sha224),
                (e.sha384 = e.sha.sha384),
                (e.sha512 = e.sha.sha512),
                (e.ripemd160 = e.ripemd.ripemd160);
            },
            1330: function (t, e, r) {
              'use strict';
              var i = r(263),
                n = r(3523);
              function a() {
                (this.pending = null),
                  (this.pendingTotal = 0),
                  (this.blockSize = this.constructor.blockSize),
                  (this.outSize = this.constructor.outSize),
                  (this.hmacStrength = this.constructor.hmacStrength),
                  (this.padLength = this.constructor.padLength / 8),
                  (this.endian = 'big'),
                  (this._delta8 = this.blockSize / 8),
                  (this._delta32 = this.blockSize / 32);
              }
              (e.BlockHash = a),
                (a.prototype.update = function (t, e) {
                  if (
                    ((t = i.toArray(t, e)),
                    this.pending
                      ? (this.pending = this.pending.concat(t))
                      : (this.pending = t),
                    (this.pendingTotal += t.length),
                    this.pending.length >= this._delta8)
                  ) {
                    var r = (t = this.pending).length % this._delta8;
                    (this.pending = t.slice(t.length - r, t.length)),
                      0 === this.pending.length && (this.pending = null),
                      (t = i.join32(t, 0, t.length - r, this.endian));
                    for (var n = 0; n < t.length; n += this._delta32)
                      this._update(t, n, n + this._delta32);
                  }
                  return this;
                }),
                (a.prototype.digest = function (t) {
                  return (
                    this.update(this._pad()),
                    n(null === this.pending),
                    this._digest(t)
                  );
                }),
                (a.prototype._pad = function () {
                  var t = this.pendingTotal,
                    e = this._delta8,
                    r = e - ((t + this.padLength) % e),
                    i = Array(r + this.padLength);
                  i[0] = 128;
                  for (var n = 1; n < r; n++) i[n] = 0;
                  if (((t <<= 3), 'big' === this.endian)) {
                    for (var a = 8; a < this.padLength; a++) i[n++] = 0;
                    (i[n++] = 0),
                      (i[n++] = 0),
                      (i[n++] = 0),
                      (i[n++] = 0),
                      (i[n++] = (t >>> 24) & 255),
                      (i[n++] = (t >>> 16) & 255),
                      (i[n++] = (t >>> 8) & 255),
                      (i[n++] = 255 & t);
                  } else
                    for (
                      a = 8,
                        i[n++] = 255 & t,
                        i[n++] = (t >>> 8) & 255,
                        i[n++] = (t >>> 16) & 255,
                        i[n++] = (t >>> 24) & 255,
                        i[n++] = 0,
                        i[n++] = 0,
                        i[n++] = 0,
                        i[n++] = 0;
                      a < this.padLength;
                      a++
                    )
                      i[n++] = 0;
                  return i;
                });
            },
            3092: function (t, e, r) {
              'use strict';
              var i = r(263),
                n = r(3523);
              function a(t, e, r) {
                if (!(this instanceof a)) return new a(t, e, r);
                (this.Hash = t),
                  (this.blockSize = t.blockSize / 8),
                  (this.outSize = t.outSize / 8),
                  (this.inner = null),
                  (this.outer = null),
                  this._init(i.toArray(e, r));
              }
              (t.exports = a),
                (a.prototype._init = function (t) {
                  t.length > this.blockSize &&
                    (t = new this.Hash().update(t).digest()),
                    n(t.length <= this.blockSize);
                  for (var e = t.length; e < this.blockSize; e++) t.push(0);
                  for (e = 0; e < t.length; e++) t[e] ^= 54;
                  for (
                    e = 0, this.inner = new this.Hash().update(t);
                    e < t.length;
                    e++
                  )
                    t[e] ^= 106;
                  this.outer = new this.Hash().update(t);
                }),
                (a.prototype.update = function (t, e) {
                  return this.inner.update(t, e), this;
                }),
                (a.prototype.digest = function (t) {
                  return (
                    this.outer.update(this.inner.digest()), this.outer.digest(t)
                  );
                });
            },
            3079: function (t, e, r) {
              'use strict';
              var i = r(263),
                n = r(1330),
                a = i.rotl32,
                o = i.sum32,
                f = i.sum32_3,
                s = i.sum32_4,
                h = n.BlockHash;
              function d() {
                if (!(this instanceof d)) return new d();
                h.call(this),
                  (this.h = [
                    1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                  ]),
                  (this.endian = 'little');
              }
              function c(t, e, r, i) {
                return t <= 15
                  ? e ^ r ^ i
                  : t <= 31
                    ? (e & r) | (~e & i)
                    : t <= 47
                      ? (e | ~r) ^ i
                      : t <= 63
                        ? (e & i) | (r & ~i)
                        : e ^ (r | ~i);
              }
              i.inherits(d, h),
                (e.ripemd160 = d),
                (d.blockSize = 512),
                (d.outSize = 160),
                (d.hmacStrength = 192),
                (d.padLength = 64),
                (d.prototype._update = function (t, e) {
                  for (
                    var r = this.h[0],
                      i = this.h[1],
                      n = this.h[2],
                      h = this.h[3],
                      d = this.h[4],
                      m = r,
                      v = i,
                      y = n,
                      g = h,
                      _ = d,
                      w = 0;
                    w < 80;
                    w++
                  ) {
                    var M,
                      S,
                      k = o(
                        a(
                          s(
                            r,
                            c(w, i, n, h),
                            t[u[w] + e],
                            (M = w) <= 15
                              ? 0
                              : M <= 31
                                ? 1518500249
                                : M <= 47
                                  ? 1859775393
                                  : M <= 63
                                    ? 2400959708
                                    : 2840853838
                          ),
                          p[w]
                        ),
                        d
                      );
                    (r = d),
                      (d = h),
                      (h = a(n, 10)),
                      (n = i),
                      (i = k),
                      (k = o(
                        a(
                          s(
                            m,
                            c(79 - w, v, y, g),
                            t[l[w] + e],
                            (S = w) <= 15
                              ? 1352829926
                              : S <= 31
                                ? 1548603684
                                : S <= 47
                                  ? 1836072691
                                  : S <= 63
                                    ? 2053994217
                                    : 0
                          ),
                          b[w]
                        ),
                        _
                      )),
                      (m = _),
                      (_ = g),
                      (g = a(y, 10)),
                      (y = v),
                      (v = k);
                  }
                  (k = f(this.h[1], n, g)),
                    (this.h[1] = f(this.h[2], h, _)),
                    (this.h[2] = f(this.h[3], d, m)),
                    (this.h[3] = f(this.h[4], r, v)),
                    (this.h[4] = f(this.h[0], i, y)),
                    (this.h[0] = k);
                }),
                (d.prototype._digest = function (t) {
                  return 'hex' === t
                    ? i.toHex32(this.h, 'little')
                    : i.split32(this.h, 'little');
                });
              var u = [
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                  13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4,
                  9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8,
                  12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10,
                  14, 1, 3, 8, 11, 6, 15, 13,
                ],
                l = [
                  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                  3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7,
                  14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15,
                  0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6,
                  2, 13, 14, 0, 3, 9, 11,
                ],
                p = [
                  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6,
                  8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6,
                  7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15,
                  14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8,
                  13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                ],
                b = [
                  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13,
                  15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11,
                  8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14,
                  14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14,
                  6, 8, 13, 6, 5, 15, 13, 11, 11,
                ];
            },
            301: function (t, e, r) {
              'use strict';
              (e.sha1 = r(2742)),
                (e.sha224 = r(7105)),
                (e.sha256 = r(1525)),
                (e.sha384 = r(9948)),
                (e.sha512 = r(1319));
            },
            2742: function (t, e, r) {
              'use strict';
              var i = r(263),
                n = r(1330),
                a = r(2975),
                o = i.rotl32,
                f = i.sum32,
                s = i.sum32_5,
                h = a.ft_1,
                d = n.BlockHash,
                c = [1518500249, 1859775393, 2400959708, 3395469782];
              function u() {
                if (!(this instanceof u)) return new u();
                d.call(this),
                  (this.h = [
                    1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                  ]),
                  (this.W = Array(80));
              }
              i.inherits(u, d),
                (t.exports = u),
                (u.blockSize = 512),
                (u.outSize = 160),
                (u.hmacStrength = 80),
                (u.padLength = 64),
                (u.prototype._update = function (t, e) {
                  for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                  for (; i < r.length; i++)
                    r[i] = o(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
                  var n = this.h[0],
                    a = this.h[1],
                    d = this.h[2],
                    u = this.h[3],
                    l = this.h[4];
                  for (i = 0; i < r.length; i++) {
                    var p = ~~(i / 20),
                      b = s(o(n, 5), h(p, a, d, u), l, r[i], c[p]);
                    (l = u), (u = d), (d = o(a, 30)), (a = n), (n = b);
                  }
                  (this.h[0] = f(this.h[0], n)),
                    (this.h[1] = f(this.h[1], a)),
                    (this.h[2] = f(this.h[2], d)),
                    (this.h[3] = f(this.h[3], u)),
                    (this.h[4] = f(this.h[4], l));
                }),
                (u.prototype._digest = function (t) {
                  return 'hex' === t
                    ? i.toHex32(this.h, 'big')
                    : i.split32(this.h, 'big');
                });
            },
            7105: function (t, e, r) {
              'use strict';
              var i = r(263),
                n = r(1525);
              function a() {
                if (!(this instanceof a)) return new a();
                n.call(this),
                  (this.h = [
                    3238371032, 914150663, 812702999, 4144912697, 4290775857,
                    1750603025, 1694076839, 3204075428,
                  ]);
              }
              i.inherits(a, n),
                (t.exports = a),
                (a.blockSize = 512),
                (a.outSize = 224),
                (a.hmacStrength = 192),
                (a.padLength = 64),
                (a.prototype._digest = function (t) {
                  return 'hex' === t
                    ? i.toHex32(this.h.slice(0, 7), 'big')
                    : i.split32(this.h.slice(0, 7), 'big');
                });
            },
            1525: function (t, e, r) {
              'use strict';
              var i = r(263),
                n = r(1330),
                a = r(2975),
                o = r(3523),
                f = i.sum32,
                s = i.sum32_4,
                h = i.sum32_5,
                d = a.ch32,
                c = a.maj32,
                u = a.s0_256,
                l = a.s1_256,
                p = a.g0_256,
                b = a.g1_256,
                m = n.BlockHash,
                v = [
                  1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                  1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                  607225278, 1426881987, 1925078388, 2162078206, 2614888103,
                  3248222580, 3835390401, 4022224774, 264347078, 604807628,
                  770255983, 1249150122, 1555081692, 1996064986, 2554220882,
                  2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                  113926993, 338241895, 666307205, 773529912, 1294757372,
                  1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                  2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
                  3600352804, 4094571909, 275423344, 430227734, 506948616,
                  659060556, 883997877, 958139571, 1322822218, 1537002063,
                  1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                  2428436474, 2756734187, 3204031479, 3329325298,
                ];
              function y() {
                if (!(this instanceof y)) return new y();
                m.call(this),
                  (this.h = [
                    1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
                    2600822924, 528734635, 1541459225,
                  ]),
                  (this.k = v),
                  (this.W = Array(64));
              }
              i.inherits(y, m),
                (t.exports = y),
                (y.blockSize = 512),
                (y.outSize = 256),
                (y.hmacStrength = 192),
                (y.padLength = 64),
                (y.prototype._update = function (t, e) {
                  for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                  for (; i < r.length; i++)
                    r[i] = s(b(r[i - 2]), r[i - 7], p(r[i - 15]), r[i - 16]);
                  var n = this.h[0],
                    a = this.h[1],
                    m = this.h[2],
                    v = this.h[3],
                    y = this.h[4],
                    g = this.h[5],
                    _ = this.h[6],
                    w = this.h[7];
                  for (
                    o(this.k.length === r.length), i = 0;
                    i < r.length;
                    i++
                  ) {
                    var M = h(w, l(y), d(y, g, _), this.k[i], r[i]),
                      S = f(u(n), c(n, a, m));
                    (w = _),
                      (_ = g),
                      (g = y),
                      (y = f(v, M)),
                      (v = m),
                      (m = a),
                      (a = n),
                      (n = f(M, S));
                  }
                  (this.h[0] = f(this.h[0], n)),
                    (this.h[1] = f(this.h[1], a)),
                    (this.h[2] = f(this.h[2], m)),
                    (this.h[3] = f(this.h[3], v)),
                    (this.h[4] = f(this.h[4], y)),
                    (this.h[5] = f(this.h[5], g)),
                    (this.h[6] = f(this.h[6], _)),
                    (this.h[7] = f(this.h[7], w));
                }),
                (y.prototype._digest = function (t) {
                  return 'hex' === t
                    ? i.toHex32(this.h, 'big')
                    : i.split32(this.h, 'big');
                });
            },
            9948: function (t, e, r) {
              'use strict';
              var i = r(263),
                n = r(1319);
              function a() {
                if (!(this instanceof a)) return new a();
                n.call(this),
                  (this.h = [
                    3418070365, 3238371032, 1654270250, 914150663, 2438529370,
                    812702999, 355462360, 4144912697, 1731405415, 4290775857,
                    2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
                    3204075428,
                  ]);
              }
              i.inherits(a, n),
                (t.exports = a),
                (a.blockSize = 1024),
                (a.outSize = 384),
                (a.hmacStrength = 192),
                (a.padLength = 128),
                (a.prototype._digest = function (t) {
                  return 'hex' === t
                    ? i.toHex32(this.h.slice(0, 12), 'big')
                    : i.split32(this.h.slice(0, 12), 'big');
                });
            },
            1319: function (t, e, r) {
              'use strict';
              var i = r(263),
                n = r(1330),
                a = r(3523),
                o = i.rotr64_hi,
                f = i.rotr64_lo,
                s = i.shr64_hi,
                h = i.shr64_lo,
                d = i.sum64,
                c = i.sum64_hi,
                u = i.sum64_lo,
                l = i.sum64_4_hi,
                p = i.sum64_4_lo,
                b = i.sum64_5_hi,
                m = i.sum64_5_lo,
                v = n.BlockHash,
                y = [
                  1116352408, 3609767458, 1899447441, 602891725, 3049323471,
                  3964484399, 3921009573, 2173295548, 961987163, 4081628472,
                  1508970993, 3053834265, 2453635748, 2937671579, 2870763221,
                  3664609560, 3624381080, 2734883394, 310598401, 1164996542,
                  607225278, 1323610764, 1426881987, 3590304994, 1925078388,
                  4068182383, 2162078206, 991336113, 2614888103, 633803317,
                  3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
                  944711139, 264347078, 2341262773, 604807628, 2007800933,
                  770255983, 1495990901, 1249150122, 1856431235, 1555081692,
                  3175218132, 1996064986, 2198950837, 2554220882, 3999719339,
                  2821834349, 766784016, 2952996808, 2566594879, 3210313671,
                  3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
                  113926993, 3758326383, 338241895, 168717936, 666307205,
                  1188179964, 773529912, 1546045734, 1294757372, 1522805485,
                  1396182291, 2643833823, 1695183700, 2343527390, 1986661051,
                  1014477480, 2177026350, 1206759142, 2456956037, 344077627,
                  2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
                  3505952657, 3345764771, 106217008, 3516065817, 3606008344,
                  3600352804, 1432725776, 4094571909, 1467031594, 275423344,
                  851169720, 430227734, 3100823752, 506948616, 1363258195,
                  659060556, 3750685593, 883997877, 3785050280, 958139571,
                  3318307427, 1322822218, 3812723403, 1537002063, 2003034995,
                  1747873779, 3602036899, 1955562222, 1575990012, 2024104815,
                  1125592928, 2227730452, 2716904306, 2361852424, 442776044,
                  2428436474, 593698344, 2756734187, 3733110249, 3204031479,
                  2999351573, 3329325298, 3815920427, 3391569614, 3928383900,
                  3515267271, 566280711, 3940187606, 3454069534, 4118630271,
                  4000239992, 116418474, 1914138554, 174292421, 2731055270,
                  289380356, 3203993006, 460393269, 320620315, 685471733,
                  587496836, 852142971, 1086792851, 1017036298, 365543100,
                  1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
                  4234509866, 1607167915, 987167468, 1816402316, 1246189591,
                ];
              function g() {
                if (!(this instanceof g)) return new g();
                v.call(this),
                  (this.h = [
                    1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
                    4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
                    2600822924, 725511199, 528734635, 4215389547, 1541459225,
                    327033209,
                  ]),
                  (this.k = y),
                  (this.W = Array(160));
              }
              i.inherits(g, v),
                (t.exports = g),
                (g.blockSize = 1024),
                (g.outSize = 512),
                (g.hmacStrength = 192),
                (g.padLength = 128),
                (g.prototype._prepareBlock = function (t, e) {
                  for (var r = this.W, i = 0; i < 32; i++) r[i] = t[e + i];
                  for (; i < r.length; i += 2) {
                    var n = (function (t, e) {
                        var r = o(t, e, 19) ^ o(e, t, 29) ^ s(t, e, 6);
                        return r < 0 && (r += 4294967296), r;
                      })(r[i - 4], r[i - 3]),
                      a = (function (t, e) {
                        var r = f(t, e, 19) ^ f(e, t, 29) ^ h(t, e, 6);
                        return r < 0 && (r += 4294967296), r;
                      })(r[i - 4], r[i - 3]),
                      d = r[i - 14],
                      c = r[i - 13],
                      u = (function (t, e) {
                        var r = o(t, e, 1) ^ o(t, e, 8) ^ s(t, e, 7);
                        return r < 0 && (r += 4294967296), r;
                      })(r[i - 30], r[i - 29]),
                      b = (function (t, e) {
                        var r = f(t, e, 1) ^ f(t, e, 8) ^ h(t, e, 7);
                        return r < 0 && (r += 4294967296), r;
                      })(r[i - 30], r[i - 29]),
                      m = r[i - 32],
                      v = r[i - 31];
                    (r[i] = l(n, a, d, c, u, b, m, v)),
                      (r[i + 1] = p(n, a, d, c, u, b, m, v));
                  }
                }),
                (g.prototype._update = function (t, e) {
                  this._prepareBlock(t, e);
                  var r = this.W,
                    i = this.h[0],
                    n = this.h[1],
                    s = this.h[2],
                    h = this.h[3],
                    l = this.h[4],
                    p = this.h[5],
                    v = this.h[6],
                    y = this.h[7],
                    g = this.h[8],
                    _ = this.h[9],
                    w = this.h[10],
                    M = this.h[11],
                    S = this.h[12],
                    k = this.h[13],
                    E = this.h[14],
                    A = this.h[15];
                  a(this.k.length === r.length);
                  for (var x = 0; x < r.length; x += 2) {
                    var R = E,
                      I = A,
                      B = (function (t, e) {
                        var r = o(t, e, 14) ^ o(t, e, 18) ^ o(e, t, 9);
                        return r < 0 && (r += 4294967296), r;
                      })(g, _),
                      P = (function (t, e) {
                        var r = f(t, e, 14) ^ f(t, e, 18) ^ f(e, t, 9);
                        return r < 0 && (r += 4294967296), r;
                      })(g, _),
                      T = (function (t, e, r, i, n) {
                        var a = (t & r) ^ (~t & n);
                        return a < 0 && (a += 4294967296), a;
                      })(g, 0, w, 0, S, k),
                      C = (function (t, e, r, i, n, a) {
                        var o = (e & i) ^ (~e & a);
                        return o < 0 && (o += 4294967296), o;
                      })(0, _, 0, M, 0, k),
                      j = this.k[x],
                      O = this.k[x + 1],
                      D = r[x],
                      N = r[x + 1],
                      q = b(R, I, B, P, T, C, j, O, D, N),
                      L = m(R, I, B, P, T, C, j, O, D, N);
                    R = (function (t, e) {
                      var r = o(t, e, 28) ^ o(e, t, 2) ^ o(e, t, 7);
                      return r < 0 && (r += 4294967296), r;
                    })(i, n);
                    var z = c(
                        R,
                        (I = (function (t, e) {
                          var r = f(t, e, 28) ^ f(e, t, 2) ^ f(e, t, 7);
                          return r < 0 && (r += 4294967296), r;
                        })(i, n)),
                        (B = (function (t, e, r, i, n) {
                          var a = (t & r) ^ (t & n) ^ (r & n);
                          return a < 0 && (a += 4294967296), a;
                        })(i, 0, s, 0, l, p)),
                        (P = (function (t, e, r, i, n, a) {
                          var o = (e & i) ^ (e & a) ^ (i & a);
                          return o < 0 && (o += 4294967296), o;
                        })(0, n, 0, h, 0, p))
                      ),
                      U = u(R, I, B, P);
                    (E = S),
                      (A = k),
                      (S = w),
                      (k = M),
                      (w = g),
                      (M = _),
                      (g = c(v, y, q, L)),
                      (_ = u(y, y, q, L)),
                      (v = l),
                      (y = p),
                      (l = s),
                      (p = h),
                      (s = i),
                      (h = n),
                      (i = c(q, L, z, U)),
                      (n = u(q, L, z, U));
                  }
                  d(this.h, 0, i, n),
                    d(this.h, 2, s, h),
                    d(this.h, 4, l, p),
                    d(this.h, 6, v, y),
                    d(this.h, 8, g, _),
                    d(this.h, 10, w, M),
                    d(this.h, 12, S, k),
                    d(this.h, 14, E, A);
                }),
                (g.prototype._digest = function (t) {
                  return 'hex' === t
                    ? i.toHex32(this.h, 'big')
                    : i.split32(this.h, 'big');
                });
            },
            2975: function (t, e, r) {
              'use strict';
              var i = r(263).rotr32;
              function n(t, e, r) {
                return (t & e) ^ (t & r) ^ (e & r);
              }
              (e.ft_1 = function (t, e, r, i) {
                return 0 === t
                  ? (e & r) ^ (~e & i)
                  : 1 === t || 3 === t
                    ? e ^ r ^ i
                    : 2 === t
                      ? n(e, r, i)
                      : void 0;
              }),
                (e.ch32 = function (t, e, r) {
                  return (t & e) ^ (~t & r);
                }),
                (e.maj32 = n),
                (e.p32 = function (t, e, r) {
                  return t ^ e ^ r;
                }),
                (e.s0_256 = function (t) {
                  return i(t, 2) ^ i(t, 13) ^ i(t, 22);
                }),
                (e.s1_256 = function (t) {
                  return i(t, 6) ^ i(t, 11) ^ i(t, 25);
                }),
                (e.g0_256 = function (t) {
                  return i(t, 7) ^ i(t, 18) ^ (t >>> 3);
                }),
                (e.g1_256 = function (t) {
                  return i(t, 17) ^ i(t, 19) ^ (t >>> 10);
                });
            },
            263: function (t, e, r) {
              'use strict';
              var i = r(3523),
                n = r(3782);
              function a(t) {
                return (
                  ((t >>> 24) |
                    ((t >>> 8) & 65280) |
                    ((t << 8) & 16711680) |
                    ((255 & t) << 24)) >>>
                  0
                );
              }
              function o(t) {
                return 1 === t.length ? '0' + t : t;
              }
              function f(t) {
                if (7 === t.length) return '0' + t;
                if (6 === t.length) return '00' + t;
                if (5 === t.length) return '000' + t;
                if (4 === t.length) return '0000' + t;
                if (3 === t.length) return '00000' + t;
                if (2 === t.length) return '000000' + t;
                if (1 === t.length) return '0000000' + t;
                else return t;
              }
              (e.inherits = n),
                (e.toArray = function (t, e) {
                  if (Array.isArray(t)) return t.slice();
                  if (!t) return [];
                  var r = [];
                  if ('string' == typeof t) {
                    if (e) {
                      if ('hex' === e)
                        for (
                          (t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
                            (t = '0' + t),
                            n = 0;
                          n < t.length;
                          n += 2
                        )
                          r.push(parseInt(t[n] + t[n + 1], 16));
                    } else
                      for (var i = 0, n = 0; n < t.length; n++) {
                        var a,
                          o,
                          f = t.charCodeAt(n);
                        f < 128
                          ? (r[i++] = f)
                          : (f < 2048
                              ? (r[i++] = (f >> 6) | 192)
                              : (((a = t),
                                (o = n),
                                (64512 & a.charCodeAt(o)) != 55296 ||
                                o < 0 ||
                                o + 1 >= a.length
                                  ? 1
                                  : (64512 & a.charCodeAt(o + 1)) != 56320)
                                  ? (r[i++] = (f >> 12) | 224)
                                  : ((f =
                                      65536 +
                                      ((1023 & f) << 10) +
                                      (1023 & t.charCodeAt(++n))),
                                    (r[i++] = (f >> 18) | 240),
                                    (r[i++] = ((f >> 12) & 63) | 128)),
                                (r[i++] = ((f >> 6) & 63) | 128)),
                            (r[i++] = (63 & f) | 128));
                      }
                  } else for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
                  return r;
                }),
                (e.toHex = function (t) {
                  for (var e = '', r = 0; r < t.length; r++)
                    e += o(t[r].toString(16));
                  return e;
                }),
                (e.htonl = a),
                (e.toHex32 = function (t, e) {
                  for (var r = '', i = 0; i < t.length; i++) {
                    var n = t[i];
                    'little' === e && (n = a(n)), (r += f(n.toString(16)));
                  }
                  return r;
                }),
                (e.zero2 = o),
                (e.zero8 = f),
                (e.join32 = function (t, e, r, n) {
                  var a,
                    o = r - e;
                  i(o % 4 == 0);
                  for (
                    var f = Array(o / 4), s = 0, h = e;
                    s < f.length;
                    s++, h += 4
                  )
                    (a =
                      'big' === n
                        ? (t[h] << 24) |
                          (t[h + 1] << 16) |
                          (t[h + 2] << 8) |
                          t[h + 3]
                        : (t[h + 3] << 24) |
                          (t[h + 2] << 16) |
                          (t[h + 1] << 8) |
                          t[h]),
                      (f[s] = a >>> 0);
                  return f;
                }),
                (e.split32 = function (t, e) {
                  for (
                    var r = Array(4 * t.length), i = 0, n = 0;
                    i < t.length;
                    i++, n += 4
                  ) {
                    var a = t[i];
                    'big' === e
                      ? ((r[n] = a >>> 24),
                        (r[n + 1] = (a >>> 16) & 255),
                        (r[n + 2] = (a >>> 8) & 255),
                        (r[n + 3] = 255 & a))
                      : ((r[n + 3] = a >>> 24),
                        (r[n + 2] = (a >>> 16) & 255),
                        (r[n + 1] = (a >>> 8) & 255),
                        (r[n] = 255 & a));
                  }
                  return r;
                }),
                (e.rotr32 = function (t, e) {
                  return (t >>> e) | (t << (32 - e));
                }),
                (e.rotl32 = function (t, e) {
                  return (t << e) | (t >>> (32 - e));
                }),
                (e.sum32 = function (t, e) {
                  return (t + e) >>> 0;
                }),
                (e.sum32_3 = function (t, e, r) {
                  return (t + e + r) >>> 0;
                }),
                (e.sum32_4 = function (t, e, r, i) {
                  return (t + e + r + i) >>> 0;
                }),
                (e.sum32_5 = function (t, e, r, i, n) {
                  return (t + e + r + i + n) >>> 0;
                }),
                (e.sum64 = function (t, e, r, i) {
                  var n = t[e],
                    a = (i + t[e + 1]) >>> 0;
                  (t[e] = ((a < i ? 1 : 0) + r + n) >>> 0), (t[e + 1] = a);
                }),
                (e.sum64_hi = function (t, e, r, i) {
                  return (((e + i) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
                }),
                (e.sum64_lo = function (t, e, r, i) {
                  return (e + i) >>> 0;
                }),
                (e.sum64_4_hi = function (t, e, r, i, n, a, o, f) {
                  var s,
                    h = e;
                  return (
                    (t +
                      r +
                      n +
                      o +
                      (0 +
                        ((h = (h + i) >>> 0) < e ? 1 : 0) +
                        ((h = (h + a) >>> 0) < a ? 1 : 0) +
                        ((h = (h + f) >>> 0) < f ? 1 : 0))) >>>
                    0
                  );
                }),
                (e.sum64_4_lo = function (t, e, r, i, n, a, o, f) {
                  return (e + i + a + f) >>> 0;
                }),
                (e.sum64_5_hi = function (t, e, r, i, n, a, o, f, s, h) {
                  var d,
                    c = e;
                  return (
                    (t +
                      r +
                      n +
                      o +
                      s +
                      (0 +
                        ((c = (c + i) >>> 0) < e ? 1 : 0) +
                        ((c = (c + a) >>> 0) < a ? 1 : 0) +
                        ((c = (c + f) >>> 0) < f ? 1 : 0) +
                        ((c = (c + h) >>> 0) < h ? 1 : 0))) >>>
                    0
                  );
                }),
                (e.sum64_5_lo = function (t, e, r, i, n, a, o, f, s, h) {
                  return (e + i + a + f + h) >>> 0;
                }),
                (e.rotr64_hi = function (t, e, r) {
                  return ((e << (32 - r)) | (t >>> r)) >>> 0;
                }),
                (e.rotr64_lo = function (t, e, r) {
                  return ((t << (32 - r)) | (e >>> r)) >>> 0;
                }),
                (e.shr64_hi = function (t, e, r) {
                  return t >>> r;
                }),
                (e.shr64_lo = function (t, e, r) {
                  return ((t << (32 - r)) | (e >>> r)) >>> 0;
                });
            },
            4910: function (t, e, r) {
              'use strict';
              var i = r(7028),
                n = r(6545),
                a = r(3523);
              function o(t) {
                if (!(this instanceof o)) return new o(t);
                (this.hash = t.hash),
                  (this.predResist = !!t.predResist),
                  (this.outLen = this.hash.outSize),
                  (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
                  (this._reseed = null),
                  (this.reseedInterval = null),
                  (this.K = null),
                  (this.V = null);
                var e = n.toArray(t.entropy, t.entropyEnc || 'hex'),
                  r = n.toArray(t.nonce, t.nonceEnc || 'hex'),
                  i = n.toArray(t.pers, t.persEnc || 'hex');
                a(
                  e.length >= this.minEntropy / 8,
                  'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
                ),
                  this._init(e, r, i);
              }
              (t.exports = o),
                (o.prototype._init = function (t, e, r) {
                  var i = t.concat(e).concat(r);
                  (this.K = Array(this.outLen / 8)),
                    (this.V = Array(this.outLen / 8));
                  for (var n = 0; n < this.V.length; n++)
                    (this.K[n] = 0), (this.V[n] = 1);
                  this._update(i),
                    (this._reseed = 1),
                    (this.reseedInterval = 281474976710656);
                }),
                (o.prototype._hmac = function () {
                  return new i.hmac(this.hash, this.K);
                }),
                (o.prototype._update = function (t) {
                  var e = this._hmac().update(this.V).update([0]);
                  t && (e = e.update(t)),
                    (this.K = e.digest()),
                    (this.V = this._hmac().update(this.V).digest()),
                    t &&
                      ((this.K = this._hmac()
                        .update(this.V)
                        .update([1])
                        .update(t)
                        .digest()),
                      (this.V = this._hmac().update(this.V).digest()));
                }),
                (o.prototype.reseed = function (t, e, r, i) {
                  'string' != typeof e && ((i = r), (r = e), (e = null)),
                    (t = n.toArray(t, e)),
                    (r = n.toArray(r, i)),
                    a(
                      t.length >= this.minEntropy / 8,
                      'Not enough entropy. Minimum is: ' +
                        this.minEntropy +
                        ' bits'
                    ),
                    this._update(t.concat(r || [])),
                    (this._reseed = 1);
                }),
                (o.prototype.generate = function (t, e, r, i) {
                  if (this._reseed > this.reseedInterval)
                    throw Error('Reseed is required');
                  'string' != typeof e && ((i = r), (r = e), (e = null)),
                    r && ((r = n.toArray(r, i || 'hex')), this._update(r));
                  for (var a = []; a.length < t; )
                    (this.V = this._hmac().update(this.V).digest()),
                      (a = a.concat(this.V));
                  var o = a.slice(0, t);
                  return this._update(r), this._reseed++, n.encode(o, e);
                });
            },
            3782: function (t) {
              'function' == typeof Object.create
                ? (t.exports = function (t, e) {
                    e &&
                      ((t.super_ = e),
                      (t.prototype = Object.create(e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })));
                  })
                : (t.exports = function (t, e) {
                    if (e) {
                      t.super_ = e;
                      var r = function () {};
                      (r.prototype = e.prototype),
                        (t.prototype = new r()),
                        (t.prototype.constructor = t);
                    }
                  });
            },
            3533: function (t, e, r) {
              'use strict';
              var i = r(3782),
                n = r(9029),
                a = r(6911).Buffer,
                o = Array(16);
              function f() {
                n.call(this, 64),
                  (this._a = 1732584193),
                  (this._b = 4023233417),
                  (this._c = 2562383102),
                  (this._d = 271733878);
              }
              function s(t, e) {
                return (t << e) | (t >>> (32 - e));
              }
              function h(t, e, r, i, n, a, o) {
                return (s((t + ((e & r) | (~e & i)) + n + a) | 0, o) + e) | 0;
              }
              function d(t, e, r, i, n, a, o) {
                return (s((t + ((e & i) | (r & ~i)) + n + a) | 0, o) + e) | 0;
              }
              function c(t, e, r, i, n, a, o) {
                return (s((t + (e ^ r ^ i) + n + a) | 0, o) + e) | 0;
              }
              function u(t, e, r, i, n, a, o) {
                return (s((t + (r ^ (e | ~i)) + n + a) | 0, o) + e) | 0;
              }
              i(f, n),
                (f.prototype._update = function () {
                  for (var t = 0; t < 16; ++t)
                    o[t] = this._block.readInt32LE(4 * t);
                  var e = this._a,
                    r = this._b,
                    i = this._c,
                    n = this._d;
                  (e = h(e, r, i, n, o[0], 3614090360, 7)),
                    (n = h(n, e, r, i, o[1], 3905402710, 12)),
                    (i = h(i, n, e, r, o[2], 606105819, 17)),
                    (r = h(r, i, n, e, o[3], 3250441966, 22)),
                    (e = h(e, r, i, n, o[4], 4118548399, 7)),
                    (n = h(n, e, r, i, o[5], 1200080426, 12)),
                    (i = h(i, n, e, r, o[6], 2821735955, 17)),
                    (r = h(r, i, n, e, o[7], 4249261313, 22)),
                    (e = h(e, r, i, n, o[8], 1770035416, 7)),
                    (n = h(n, e, r, i, o[9], 2336552879, 12)),
                    (i = h(i, n, e, r, o[10], 4294925233, 17)),
                    (r = h(r, i, n, e, o[11], 2304563134, 22)),
                    (e = h(e, r, i, n, o[12], 1804603682, 7)),
                    (n = h(n, e, r, i, o[13], 4254626195, 12)),
                    (i = h(i, n, e, r, o[14], 2792965006, 17)),
                    (r = h(r, i, n, e, o[15], 1236535329, 22)),
                    (e = d(e, r, i, n, o[1], 4129170786, 5)),
                    (n = d(n, e, r, i, o[6], 3225465664, 9)),
                    (i = d(i, n, e, r, o[11], 643717713, 14)),
                    (r = d(r, i, n, e, o[0], 3921069994, 20)),
                    (e = d(e, r, i, n, o[5], 3593408605, 5)),
                    (n = d(n, e, r, i, o[10], 38016083, 9)),
                    (i = d(i, n, e, r, o[15], 3634488961, 14)),
                    (r = d(r, i, n, e, o[4], 3889429448, 20)),
                    (e = d(e, r, i, n, o[9], 568446438, 5)),
                    (n = d(n, e, r, i, o[14], 3275163606, 9)),
                    (i = d(i, n, e, r, o[3], 4107603335, 14)),
                    (r = d(r, i, n, e, o[8], 1163531501, 20)),
                    (e = d(e, r, i, n, o[13], 2850285829, 5)),
                    (n = d(n, e, r, i, o[2], 4243563512, 9)),
                    (i = d(i, n, e, r, o[7], 1735328473, 14)),
                    (r = d(r, i, n, e, o[12], 2368359562, 20)),
                    (e = c(e, r, i, n, o[5], 4294588738, 4)),
                    (n = c(n, e, r, i, o[8], 2272392833, 11)),
                    (i = c(i, n, e, r, o[11], 1839030562, 16)),
                    (r = c(r, i, n, e, o[14], 4259657740, 23)),
                    (e = c(e, r, i, n, o[1], 2763975236, 4)),
                    (n = c(n, e, r, i, o[4], 1272893353, 11)),
                    (i = c(i, n, e, r, o[7], 4139469664, 16)),
                    (r = c(r, i, n, e, o[10], 3200236656, 23)),
                    (e = c(e, r, i, n, o[13], 681279174, 4)),
                    (n = c(n, e, r, i, o[0], 3936430074, 11)),
                    (i = c(i, n, e, r, o[3], 3572445317, 16)),
                    (r = c(r, i, n, e, o[6], 76029189, 23)),
                    (e = c(e, r, i, n, o[9], 3654602809, 4)),
                    (n = c(n, e, r, i, o[12], 3873151461, 11)),
                    (i = c(i, n, e, r, o[15], 530742520, 16)),
                    (r = c(r, i, n, e, o[2], 3299628645, 23)),
                    (e = u(e, r, i, n, o[0], 4096336452, 6)),
                    (n = u(n, e, r, i, o[7], 1126891415, 10)),
                    (i = u(i, n, e, r, o[14], 2878612391, 15)),
                    (r = u(r, i, n, e, o[5], 4237533241, 21)),
                    (e = u(e, r, i, n, o[12], 1700485571, 6)),
                    (n = u(n, e, r, i, o[3], 2399980690, 10)),
                    (i = u(i, n, e, r, o[10], 4293915773, 15)),
                    (r = u(r, i, n, e, o[1], 2240044497, 21)),
                    (e = u(e, r, i, n, o[8], 1873313359, 6)),
                    (n = u(n, e, r, i, o[15], 4264355552, 10)),
                    (i = u(i, n, e, r, o[6], 2734768916, 15)),
                    (r = u(r, i, n, e, o[13], 1309151649, 21)),
                    (e = u(e, r, i, n, o[4], 4149444226, 6)),
                    (n = u(n, e, r, i, o[11], 3174756917, 10)),
                    (i = u(i, n, e, r, o[2], 718787259, 15)),
                    (r = u(r, i, n, e, o[9], 3951481745, 21)),
                    (this._a = (this._a + e) | 0),
                    (this._b = (this._b + r) | 0),
                    (this._c = (this._c + i) | 0),
                    (this._d = (this._d + n) | 0);
                }),
                (f.prototype._digest = function () {
                  (this._block[this._blockOffset++] = 128),
                    this._blockOffset > 56 &&
                      (this._block.fill(0, this._blockOffset, 64),
                      this._update(),
                      (this._blockOffset = 0)),
                    this._block.fill(0, this._blockOffset, 56),
                    this._block.writeUInt32LE(this._length[0], 56),
                    this._block.writeUInt32LE(this._length[1], 60),
                    this._update();
                  var t = a.allocUnsafe(16);
                  return (
                    t.writeInt32LE(this._a, 0),
                    t.writeInt32LE(this._b, 4),
                    t.writeInt32LE(this._c, 8),
                    t.writeInt32LE(this._d, 12),
                    t
                  );
                }),
                (t.exports = f);
            },
            1354: function (t, e, r) {
              var i = r(711),
                n = r(3500);
              function a(t) {
                this.rand = t || new n.Rand();
              }
              (t.exports = a),
                (a.create = function (t) {
                  return new a(t);
                }),
                (a.prototype._randbelow = function (t) {
                  var e = Math.ceil(t.bitLength() / 8);
                  do var r = new i(this.rand.generate(e));
                  while (r.cmp(t) >= 0);
                  return r;
                }),
                (a.prototype._randrange = function (t, e) {
                  var r = e.sub(t);
                  return t.add(this._randbelow(r));
                }),
                (a.prototype.test = function (t, e, r) {
                  var n = t.bitLength(),
                    a = i.mont(t),
                    o = new i(1).toRed(a);
                  e || (e = Math.max(1, (n / 48) | 0));
                  for (var f = t.subn(1), s = 0; !f.testn(s); s++);
                  for (var h = t.shrn(s), d = f.toRed(a); e > 0; e--) {
                    var c = this._randrange(new i(2), f);
                    r && r(c);
                    var u = c.toRed(a).redPow(h);
                    if (0 !== u.cmp(o) && 0 !== u.cmp(d)) {
                      for (var l = 1; l < s; l++) {
                        if (0 === (u = u.redSqr()).cmp(o)) return !1;
                        if (0 === u.cmp(d)) break;
                      }
                      if (l === s) return !1;
                    }
                  }
                  return !0;
                }),
                (a.prototype.getDivisor = function (t, e) {
                  var r = t.bitLength(),
                    n = i.mont(t),
                    a = new i(1).toRed(n);
                  e || (e = Math.max(1, (r / 48) | 0));
                  for (var o = t.subn(1), f = 0; !o.testn(f); f++);
                  for (var s = t.shrn(f), h = o.toRed(n); e > 0; e--) {
                    var d = this._randrange(new i(2), o),
                      c = t.gcd(d);
                    if (0 !== c.cmpn(1)) return c;
                    var u = d.toRed(n).redPow(s);
                    if (0 !== u.cmp(a) && 0 !== u.cmp(h)) {
                      for (var l = 1; l < f; l++) {
                        if (0 === (u = u.redSqr()).cmp(a))
                          return u.fromRed().subn(1).gcd(t);
                        if (0 === u.cmp(h)) break;
                      }
                      if (l === f)
                        return (u = u.redSqr()).fromRed().subn(1).gcd(t);
                    }
                  }
                  return !1;
                });
            },
            3523: function (t) {
              function e(t, e) {
                if (!t) throw Error(e || 'Assertion failed');
              }
              (t.exports = e),
                (e.equal = function (t, e, r) {
                  if (t != e)
                    throw Error(r || 'Assertion failed: ' + t + ' != ' + e);
                });
            },
            6545: function (t, e) {
              'use strict';
              function r(t) {
                return 1 === t.length ? '0' + t : t;
              }
              function i(t) {
                for (var e = '', i = 0; i < t.length; i++)
                  e += r(t[i].toString(16));
                return e;
              }
              (e.toArray = function (t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ('string' != typeof t) {
                  for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
                  return r;
                }
                if ('hex' === e) {
                  (t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
                    (t = '0' + t);
                  for (var i = 0; i < t.length; i += 2)
                    r.push(parseInt(t[i] + t[i + 1], 16));
                } else
                  for (var i = 0; i < t.length; i++) {
                    var n = t.charCodeAt(i),
                      a = n >> 8,
                      o = 255 & n;
                    a ? r.push(a, o) : r.push(o);
                  }
                return r;
              }),
                (e.zero2 = r),
                (e.toHex = i),
                (e.encode = function (t, e) {
                  return 'hex' === e ? i(t) : t;
                });
            },
            8687: function (t, e, r) {
              'use strict';
              var i = r(7160);
              e.certificate = r(8782);
              var n = i.define('RSAPrivateKey', function () {
                this.seq().obj(
                  this.key('version').int(),
                  this.key('modulus').int(),
                  this.key('publicExponent').int(),
                  this.key('privateExponent').int(),
                  this.key('prime1').int(),
                  this.key('prime2').int(),
                  this.key('exponent1').int(),
                  this.key('exponent2').int(),
                  this.key('coefficient').int()
                );
              });
              e.RSAPrivateKey = n;
              var a = i.define('RSAPublicKey', function () {
                this.seq().obj(
                  this.key('modulus').int(),
                  this.key('publicExponent').int()
                );
              });
              e.RSAPublicKey = a;
              var o = i.define('SubjectPublicKeyInfo', function () {
                this.seq().obj(
                  this.key('algorithm').use(f),
                  this.key('subjectPublicKey').bitstr()
                );
              });
              e.PublicKey = o;
              var f = i.define('AlgorithmIdentifier', function () {
                  this.seq().obj(
                    this.key('algorithm').objid(),
                    this.key('none').null_().optional(),
                    this.key('curve').objid().optional(),
                    this.key('params')
                      .seq()
                      .obj(
                        this.key('p').int(),
                        this.key('q').int(),
                        this.key('g').int()
                      )
                      .optional()
                  );
                }),
                s = i.define('PrivateKeyInfo', function () {
                  this.seq().obj(
                    this.key('version').int(),
                    this.key('algorithm').use(f),
                    this.key('subjectPrivateKey').octstr()
                  );
                });
              e.PrivateKey = s;
              var h = i.define('EncryptedPrivateKeyInfo', function () {
                this.seq().obj(
                  this.key('algorithm')
                    .seq()
                    .obj(
                      this.key('id').objid(),
                      this.key('decrypt')
                        .seq()
                        .obj(
                          this.key('kde')
                            .seq()
                            .obj(
                              this.key('id').objid(),
                              this.key('kdeparams')
                                .seq()
                                .obj(
                                  this.key('salt').octstr(),
                                  this.key('iters').int()
                                )
                            ),
                          this.key('cipher')
                            .seq()
                            .obj(
                              this.key('algo').objid(),
                              this.key('iv').octstr()
                            )
                        )
                    ),
                  this.key('subjectPrivateKey').octstr()
                );
              });
              e.EncryptedPrivateKey = h;
              var d = i.define('DSAPrivateKey', function () {
                this.seq().obj(
                  this.key('version').int(),
                  this.key('p').int(),
                  this.key('q').int(),
                  this.key('g').int(),
                  this.key('pub_key').int(),
                  this.key('priv_key').int()
                );
              });
              (e.DSAPrivateKey = d),
                (e.DSAparam = i.define('DSAparam', function () {
                  this.int();
                }));
              var c = i.define('ECPrivateKey', function () {
                this.seq().obj(
                  this.key('version').int(),
                  this.key('privateKey').octstr(),
                  this.key('parameters').optional().explicit(0).use(u),
                  this.key('publicKey').optional().explicit(1).bitstr()
                );
              });
              e.ECPrivateKey = c;
              var u = i.define('ECParameters', function () {
                this.choice({ namedCurve: this.objid() });
              });
              e.signature = i.define('signature', function () {
                this.seq().obj(this.key('r').int(), this.key('s').int());
              });
            },
            8782: function (t, e, r) {
              'use strict';
              var i = r(7160),
                n = i.define('Time', function () {
                  this.choice({
                    utcTime: this.utctime(),
                    generalTime: this.gentime(),
                  });
                }),
                a = i.define('AttributeTypeValue', function () {
                  this.seq().obj(
                    this.key('type').objid(),
                    this.key('value').any()
                  );
                }),
                o = i.define('AlgorithmIdentifier', function () {
                  this.seq().obj(
                    this.key('algorithm').objid(),
                    this.key('parameters').optional(),
                    this.key('curve').objid().optional()
                  );
                }),
                f = i.define('SubjectPublicKeyInfo', function () {
                  this.seq().obj(
                    this.key('algorithm').use(o),
                    this.key('subjectPublicKey').bitstr()
                  );
                }),
                s = i.define('RelativeDistinguishedName', function () {
                  this.setof(a);
                }),
                h = i.define('RDNSequence', function () {
                  this.seqof(s);
                }),
                d = i.define('Name', function () {
                  this.choice({ rdnSequence: this.use(h) });
                }),
                c = i.define('Validity', function () {
                  this.seq().obj(
                    this.key('notBefore').use(n),
                    this.key('notAfter').use(n)
                  );
                }),
                u = i.define('Extension', function () {
                  this.seq().obj(
                    this.key('extnID').objid(),
                    this.key('critical').bool().def(!1),
                    this.key('extnValue').octstr()
                  );
                }),
                l = i.define('TBSCertificate', function () {
                  this.seq().obj(
                    this.key('version').explicit(0).int().optional(),
                    this.key('serialNumber').int(),
                    this.key('signature').use(o),
                    this.key('issuer').use(d),
                    this.key('validity').use(c),
                    this.key('subject').use(d),
                    this.key('subjectPublicKeyInfo').use(f),
                    this.key('issuerUniqueID').implicit(1).bitstr().optional(),
                    this.key('subjectUniqueID').implicit(2).bitstr().optional(),
                    this.key('extensions').explicit(3).seqof(u).optional()
                  );
                }),
                p = i.define('X509Certificate', function () {
                  this.seq().obj(
                    this.key('tbsCertificate').use(l),
                    this.key('signatureAlgorithm').use(o),
                    this.key('signatureValue').bitstr()
                  );
                });
              t.exports = p;
            },
            6501: function (t, e, r) {
              var i =
                  /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,
                n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
                a =
                  /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m,
                o = r(8368),
                f = r(6594),
                s = r(6911).Buffer;
              t.exports = function (t, e) {
                var r,
                  h = t.toString(),
                  d = h.match(i);
                if (d) {
                  var c = 'aes' + d[1],
                    u = s.from(d[2], 'hex'),
                    l = s.from(d[3].replace(/[\r\n]/g, ''), 'base64'),
                    p = o(e, u.slice(0, 8), parseInt(d[1], 10)).key,
                    b = [],
                    m = f.createDecipheriv(c, p, u);
                  b.push(m.update(l)), b.push(m.final()), (r = s.concat(b));
                } else
                  r = new s(h.match(a)[2].replace(/[\r\n]/g, ''), 'base64');
                return { tag: h.match(n)[1], data: r };
              };
            },
            9902: function (t, e, r) {
              var i = r(8687),
                n = r(2510),
                a = r(6501),
                o = r(6594),
                f = r(4978),
                s = r(6911).Buffer;
              function h(t) {
                'object' != typeof t ||
                  s.isBuffer(t) ||
                  ((y = t.passphrase), (t = t.key)),
                  'string' == typeof t && (t = s.from(t));
                var e,
                  r,
                  h,
                  d,
                  c,
                  u,
                  l,
                  p,
                  b,
                  m,
                  v,
                  y,
                  g,
                  _,
                  w = a(t, y),
                  M = w.tag,
                  S = w.data;
                switch (M) {
                  case 'CERTIFICATE':
                    _ = i.certificate.decode(S, 'der').tbsCertificate
                      .subjectPublicKeyInfo;
                  case 'PUBLIC KEY':
                    switch (
                      (_ || (_ = i.PublicKey.decode(S, 'der')),
                      (g = _.algorithm.algorithm.join('.')))
                    ) {
                      case '1.2.840.113549.1.1.1':
                        return i.RSAPublicKey.decode(
                          _.subjectPublicKey.data,
                          'der'
                        );
                      case '1.2.840.10045.2.1':
                        return (
                          (_.subjectPrivateKey = _.subjectPublicKey),
                          { type: 'ec', data: _ }
                        );
                      case '1.2.840.10040.4.1':
                        return (
                          (_.algorithm.params.pub_key = i.DSAparam.decode(
                            _.subjectPublicKey.data,
                            'der'
                          )),
                          { type: 'dsa', data: _.algorithm.params }
                        );
                      default:
                        throw Error('unknown key id ' + g);
                    }
                    throw Error('unknown key type ' + M);
                  case 'ENCRYPTED PRIVATE KEY':
                    (e = S = i.EncryptedPrivateKey.decode(S, 'der')),
                      (r = y),
                      (h = e.algorithm.decrypt.kde.kdeparams.salt),
                      (d = parseInt(
                        e.algorithm.decrypt.kde.kdeparams.iters.toString(),
                        10
                      )),
                      (c = n[e.algorithm.decrypt.cipher.algo.join('.')]),
                      (u = e.algorithm.decrypt.cipher.iv),
                      (l = e.subjectPrivateKey),
                      (p = parseInt(c.split('-')[1], 10) / 8),
                      (b = f.pbkdf2Sync(r, h, d, p, 'sha1')),
                      (m = o.createDecipheriv(c, b, u)),
                      (v = []).push(m.update(l)),
                      v.push(m.final()),
                      (S = s.concat(v));
                  case 'PRIVATE KEY':
                    switch (
                      (g = (_ = i.PrivateKey.decode(
                        S,
                        'der'
                      )).algorithm.algorithm.join('.'))
                    ) {
                      case '1.2.840.113549.1.1.1':
                        return i.RSAPrivateKey.decode(
                          _.subjectPrivateKey,
                          'der'
                        );
                      case '1.2.840.10045.2.1':
                        return {
                          curve: _.algorithm.curve,
                          privateKey: i.ECPrivateKey.decode(
                            _.subjectPrivateKey,
                            'der'
                          ).privateKey,
                        };
                      case '1.2.840.10040.4.1':
                        return (
                          (_.algorithm.params.priv_key = i.DSAparam.decode(
                            _.subjectPrivateKey,
                            'der'
                          )),
                          { type: 'dsa', params: _.algorithm.params }
                        );
                      default:
                        throw Error('unknown key id ' + g);
                    }
                    throw Error('unknown key type ' + M);
                  case 'RSA PUBLIC KEY':
                    return i.RSAPublicKey.decode(S, 'der');
                  case 'RSA PRIVATE KEY':
                    return i.RSAPrivateKey.decode(S, 'der');
                  case 'DSA PRIVATE KEY':
                    return {
                      type: 'dsa',
                      params: i.DSAPrivateKey.decode(S, 'der'),
                    };
                  case 'EC PRIVATE KEY':
                    return {
                      curve: (S = i.ECPrivateKey.decode(S, 'der')).parameters
                        .value,
                      privateKey: S.privateKey,
                    };
                  default:
                    throw Error('unknown key type ' + M);
                }
              }
              (t.exports = h), (h.signature = i.signature);
            },
            4978: function (t, e, r) {
              var i = r(6113),
                n = r(5349),
                a = r(7007),
                o = r(5407);
              i.pbkdf2Sync &&
              -1 !== i.pbkdf2Sync.toString().indexOf('keylen, digest')
                ? ((e.pbkdf2Sync = function (t, e, r, f, s) {
                    return (
                      n(r, f),
                      (t = o(t, a, 'Password')),
                      (e = o(e, a, 'Salt')),
                      (s = s || 'sha1'),
                      i.pbkdf2Sync(t, e, r, f, s)
                    );
                  }),
                  (e.pbkdf2 = function (t, e, r, f, s, h) {
                    if (
                      (n(r, f),
                      (t = o(t, a, 'Password')),
                      (e = o(e, a, 'Salt')),
                      'function' == typeof s && ((h = s), (s = 'sha1')),
                      'function' != typeof h)
                    )
                      throw Error('No callback provided to pbkdf2');
                    return i.pbkdf2(t, e, r, f, s, h);
                  }))
                : ((e.pbkdf2Sync = r(2127)), (e.pbkdf2 = r(9601)));
            },
            9601: function (t, e, i) {
              var a,
                o = i(6911).Buffer,
                f = i(5349),
                s = i(7007),
                h = i(2127),
                d = i(5407),
                c = r.g.crypto && r.g.crypto.subtle,
                u = {
                  sha: 'SHA-1',
                  'sha-1': 'SHA-1',
                  sha1: 'SHA-1',
                  sha256: 'SHA-256',
                  'sha-256': 'SHA-256',
                  sha384: 'SHA-384',
                  'sha-384': 'SHA-384',
                  'sha-512': 'SHA-512',
                  sha512: 'SHA-512',
                },
                l = [];
              function p(t, e, r, i, n) {
                return c
                  .importKey('raw', t, { name: 'PBKDF2' }, !1, ['deriveBits'])
                  .then(function (t) {
                    return c.deriveBits(
                      {
                        name: 'PBKDF2',
                        salt: e,
                        iterations: r,
                        hash: { name: n },
                      },
                      t,
                      i << 3
                    );
                  })
                  .then(function (t) {
                    return o.from(t);
                  });
              }
              t.exports = function (t, e, i, b, m, v) {
                'function' == typeof m && ((v = m), (m = void 0));
                var y = u[(m = m || 'sha1').toLowerCase()];
                if (!y || 'function' != typeof r.g.Promise)
                  return n.nextTick(function () {
                    var r;
                    try {
                      r = h(t, e, i, b, m);
                    } catch (t) {
                      return v(t);
                    }
                    v(null, r);
                  });
                if (
                  (f(i, b),
                  (t = d(t, s, 'Password')),
                  (e = d(e, s, 'Salt')),
                  'function' != typeof v)
                )
                  throw Error('No callback provided to pbkdf2');
                !(function (t, e) {
                  t.then(
                    function (t) {
                      n.nextTick(function () {
                        e(null, t);
                      });
                    },
                    function (t) {
                      n.nextTick(function () {
                        e(t);
                      });
                    }
                  );
                })(
                  (function (t) {
                    if (
                      (r.g.process && !r.g.process.browser) ||
                      !c ||
                      !c.importKey ||
                      !c.deriveBits
                    )
                      return Promise.resolve(!1);
                    if (void 0 !== l[t]) return l[t];
                    var e = p((a = a || o.alloc(8)), a, 10, 128, t)
                      .then(function () {
                        return !0;
                      })
                      .catch(function () {
                        return !1;
                      });
                    return (l[t] = e), e;
                  })(y).then(function (r) {
                    return r ? p(t, e, i, b, y) : h(t, e, i, b, m);
                  }),
                  v
                );
              };
            },
            7007: function (t) {
              t.exports = 'utf-8';
            },
            5349: function (t) {
              t.exports = function (t, e) {
                if ('number' != typeof t)
                  throw TypeError('Iterations not a number');
                if (t < 0) throw TypeError('Bad iterations');
                if ('number' != typeof e)
                  throw TypeError('Key length not a number');
                if (e < 0 || e > 1073741823 || e != e)
                  throw TypeError('Bad key length');
              };
            },
            2127: function (t, e, r) {
              var i = {
                  md5: 16,
                  sha1: 20,
                  sha224: 28,
                  sha256: 32,
                  sha384: 48,
                  sha512: 64,
                  rmd160: 20,
                  ripemd160: 20,
                },
                n = r(4873),
                a = r(6911).Buffer,
                o = r(5349),
                f = r(7007),
                s = r(5407);
              t.exports = function (t, e, r, h, d) {
                o(r, h),
                  (t = s(t, f, 'Password')),
                  (e = s(e, f, 'Salt')),
                  (d = d || 'sha1');
                var c = a.allocUnsafe(h),
                  u = a.allocUnsafe(e.length + 4);
                e.copy(u, 0, 0, e.length);
                for (
                  var l = 0, p = i[d], b = Math.ceil(h / p), m = 1;
                  m <= b;
                  m++
                ) {
                  u.writeUInt32BE(m, e.length);
                  for (
                    var v = n(d, t).update(u).digest(), y = v, g = 1;
                    g < r;
                    g++
                  ) {
                    y = n(d, t).update(y).digest();
                    for (var _ = 0; _ < p; _++) v[_] ^= y[_];
                  }
                  v.copy(c, l), (l += p);
                }
                return c;
              };
            },
            5407: function (t, e, r) {
              var i = r(6911).Buffer;
              t.exports = function (t, e, r) {
                if (i.isBuffer(t)) return t;
                if ('string' == typeof t) return i.from(t, e);
                if (ArrayBuffer.isView(t)) return i.from(t.buffer);
                throw TypeError(
                  r + ' must be a string, a Buffer, a typed array or a DataView'
                );
              };
            },
            9783: function (t, e, r) {
              (e.publicEncrypt = r(3995)),
                (e.privateDecrypt = r(4366)),
                (e.privateEncrypt = function (t, r) {
                  return e.publicEncrypt(t, r, !0);
                }),
                (e.publicDecrypt = function (t, r) {
                  return e.privateDecrypt(t, r, !0);
                });
            },
            5520: function (t, e, r) {
              var i = r(9739),
                n = r(6911).Buffer;
              t.exports = function (t, e) {
                for (var r, a = n.alloc(0), o = 0; a.length < e; )
                  (r = (function (t) {
                    var e = n.allocUnsafe(4);
                    return e.writeUInt32BE(t, 0), e;
                  })(o++)),
                    (a = n.concat([a, i('sha1').update(t).update(r).digest()]));
                return a.slice(0, e);
              };
            },
            4366: function (t, e, r) {
              var i = r(9902),
                n = r(5520),
                a = r(6386),
                o = r(711),
                f = r(7166),
                s = r(9739),
                h = r(1607),
                d = r(6911).Buffer;
              t.exports = function (t, e, r) {
                c = t.padding ? t.padding : r ? 1 : 4;
                var c,
                  u,
                  l = i(t),
                  p = l.modulus.byteLength();
                if (e.length > p || new o(e).cmp(l.modulus) >= 0)
                  throw Error('decryption error');
                u = r ? h(new o(e), l) : f(e, l);
                var b = d.alloc(p - u.length);
                if (((u = d.concat([b, u], p)), 4 === c))
                  return (function (t, e) {
                    var r = t.modulus.byteLength(),
                      i = s('sha1').update(d.alloc(0)).digest(),
                      o = i.length;
                    if (0 !== e[0]) throw Error('decryption error');
                    var f = e.slice(1, o + 1),
                      h = e.slice(o + 1),
                      c = a(f, n(h, o)),
                      u = a(h, n(c, r - o - 1));
                    if (
                      (function (t, e) {
                        (t = d.from(t)), (e = d.from(e));
                        var r = 0,
                          i = t.length;
                        t.length !== e.length &&
                          (r++, (i = Math.min(t.length, e.length)));
                        for (var n = -1; ++n < i; ) r += t[n] ^ e[n];
                        return r;
                      })(i, u.slice(0, o))
                    )
                      throw Error('decryption error');
                    for (var l = o; 0 === u[l]; ) l++;
                    if (1 !== u[l++]) throw Error('decryption error');
                    return u.slice(l);
                  })(l, u);
                if (1 === c)
                  return (function (t, e, r) {
                    for (var i = e.slice(0, 2), n = 2, a = 0; 0 !== e[n++]; )
                      if (n >= e.length) {
                        a++;
                        break;
                      }
                    var o = e.slice(2, n - 1);
                    if (
                      ((('0002' !== i.toString('hex') && !r) ||
                        ('0001' !== i.toString('hex') && r)) &&
                        a++,
                      o.length < 8 && a++,
                      a)
                    )
                      throw Error('decryption error');
                    return e.slice(n);
                  })(0, u, r);
                if (3 === c) return u;
                throw Error('unknown padding');
              };
            },
            3995: function (t, e, r) {
              var i = r(9902),
                n = r(7223),
                a = r(9739),
                o = r(5520),
                f = r(6386),
                s = r(711),
                h = r(1607),
                d = r(7166),
                c = r(6911).Buffer;
              t.exports = function (t, e, r) {
                u = t.padding ? t.padding : r ? 1 : 4;
                var u,
                  l,
                  p = i(t);
                if (4 === u)
                  l = (function (t, e) {
                    var r = t.modulus.byteLength(),
                      i = e.length,
                      h = a('sha1').update(c.alloc(0)).digest(),
                      d = h.length,
                      u = 2 * d;
                    if (i > r - u - 2) throw Error('message too long');
                    var l = c.alloc(r - i - u - 2),
                      p = r - d - 1,
                      b = n(d),
                      m = f(c.concat([h, l, c.alloc(1, 1), e], p), o(b, p)),
                      v = f(b, o(m, d));
                    return new s(c.concat([c.alloc(1), v, m], r));
                  })(p, e);
                else if (1 === u)
                  l = (function (t, e, r) {
                    var i,
                      a = e.length,
                      o = t.modulus.byteLength();
                    if (a > o - 11) throw Error('message too long');
                    return (
                      (i = r
                        ? c.alloc(o - a - 3, 255)
                        : (function (t) {
                            for (
                              var e,
                                r = c.allocUnsafe(t),
                                i = 0,
                                a = n(2 * t),
                                o = 0;
                              i < t;

                            )
                              o === a.length && ((a = n(2 * t)), (o = 0)),
                                (e = a[o++]) && (r[i++] = e);
                            return r;
                          })(o - a - 3)),
                      new s(
                        c.concat([c.from([0, r ? 1 : 2]), i, c.alloc(1), e], o)
                      )
                    );
                  })(p, e, r);
                else if (3 === u) {
                  if ((l = new s(e)).cmp(p.modulus) >= 0)
                    throw Error('data too long for modulus');
                } else throw Error('unknown padding');
                return r ? d(l, p) : h(l, p);
              };
            },
            1607: function (t, e, r) {
              var i = r(711),
                n = r(6911).Buffer;
              t.exports = function (t, e) {
                return n.from(
                  t
                    .toRed(i.mont(e.modulus))
                    .redPow(new i(e.publicExponent))
                    .fromRed()
                    .toArray()
                );
              };
            },
            6386: function (t) {
              t.exports = function (t, e) {
                for (var r = t.length, i = -1; ++i < r; ) t[i] ^= e[i];
                return t;
              };
            },
            7223: function (t, e, i) {
              'use strict';
              var a = i(6911).Buffer,
                o = r.g.crypto || r.g.msCrypto;
              o && o.getRandomValues
                ? (t.exports = function (t, e) {
                    if (t > 4294967295)
                      throw RangeError('requested too many random bytes');
                    var r = a.allocUnsafe(t);
                    if (t > 0) {
                      if (t > 65536)
                        for (var i = 0; i < t; i += 65536)
                          o.getRandomValues(r.slice(i, i + 65536));
                      else o.getRandomValues(r);
                    }
                    return 'function' == typeof e
                      ? n.nextTick(function () {
                          e(null, r);
                        })
                      : r;
                  })
                : (t.exports = function () {
                    throw Error(
                      'Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11'
                    );
                  });
            },
            6445: function (t, e, i) {
              'use strict';
              function a() {
                throw Error(
                  'secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11'
                );
              }
              var o = i(6911);
              i(7223);
              var f = o.Buffer,
                s = o.kMaxLength,
                h = r.g.crypto || r.g.msCrypto;
              function d(t, e) {
                if ('number' != typeof t || t != t)
                  throw TypeError('offset must be a number');
                if (t > 4294967295 || t < 0)
                  throw TypeError('offset must be a uint32');
                if (t > s || t > e) throw RangeError('offset out of range');
              }
              function c(t, e, r) {
                if ('number' != typeof t || t != t)
                  throw TypeError('size must be a number');
                if (t > 4294967295 || t < 0)
                  throw TypeError('size must be a uint32');
                if (t + e > r || t > s) throw RangeError('buffer too small');
              }
              function u(t, e, r, i) {
                var a = t.buffer,
                  o = new Uint8Array(a, e, r);
                if ((h.getRandomValues(o), i)) {
                  n.nextTick(function () {
                    i(null, t);
                  });
                  return;
                }
                return t;
              }
              h && h.getRandomValues
                ? ((e.randomFill = function (t, e, i, n) {
                    if (!f.isBuffer(t) && !(t instanceof r.g.Uint8Array))
                      throw TypeError(
                        '"buf" argument must be a Buffer or Uint8Array'
                      );
                    if ('function' == typeof e)
                      (n = e), (e = 0), (i = t.length);
                    else if ('function' == typeof i)
                      (n = i), (i = t.length - e);
                    else if ('function' != typeof n)
                      throw TypeError('"cb" argument must be a function');
                    return d(e, t.length), c(i, e, t.length), u(t, e, i, n);
                  }),
                  (e.randomFillSync = function (t, e, i) {
                    if (
                      (void 0 === e && (e = 0),
                      !f.isBuffer(t) && !(t instanceof r.g.Uint8Array))
                    )
                      throw TypeError(
                        '"buf" argument must be a Buffer or Uint8Array'
                      );
                    return (
                      d(e, t.length),
                      void 0 === i && (i = t.length - e),
                      c(i, e, t.length),
                      u(t, e, i)
                    );
                  }))
                : ((e.randomFill = a), (e.randomFillSync = a));
            },
            4646: function (t) {
              'use strict';
              let e = {};
              function r(t, r, i) {
                i || (i = Error);
                class n extends i {
                  constructor(t, e, i) {
                    super('string' == typeof r ? r : r(t, e, i));
                  }
                }
                (n.prototype.name = i.name), (n.prototype.code = t), (e[t] = n);
              }
              function i(t, e) {
                if (!Array.isArray(t)) return `of ${e} ${String(t)}`;
                {
                  let r = t.length;
                  return ((t = t.map(t => String(t))), r > 2)
                    ? `one of ${e} ${t.slice(0, r - 1).join(', ')}, or ` +
                        t[r - 1]
                    : 2 === r
                      ? `one of ${e} ${t[0]} or ${t[1]}`
                      : `of ${e} ${t[0]}`;
                }
              }
              r(
                'ERR_INVALID_OPT_VALUE',
                function (t, e) {
                  return (
                    'The value "' + e + '" is invalid for option "' + t + '"'
                  );
                },
                TypeError
              ),
                r(
                  'ERR_INVALID_ARG_TYPE',
                  function (t, e, r) {
                    var n, a, o, f, s;
                    let h, d;
                    if (
                      ('string' == typeof e &&
                      ((n = 'not '),
                      e.substr(!a || a < 0 ? 0 : +a, n.length) === n)
                        ? ((h = 'must not be'), (e = e.replace(/^not /, '')))
                        : (h = 'must be'),
                      (o = ' argument'),
                      (void 0 === f || f > t.length) && (f = t.length),
                      t.substring(f - o.length, f) === o)
                    )
                      d = `The ${t} ${h} ${i(e, 'type')}`;
                    else {
                      let r = ('number' != typeof s && (s = 0),
                      s + 1 > t.length || -1 === t.indexOf('.', s))
                        ? 'argument'
                        : 'property';
                      d = `The "${t}" ${r} ${h} ${i(e, 'type')}`;
                    }
                    return d + `. Received type ${typeof r}`;
                  },
                  TypeError
                ),
                r('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF'),
                r('ERR_METHOD_NOT_IMPLEMENTED', function (t) {
                  return 'The ' + t + ' method is not implemented';
                }),
                r('ERR_STREAM_PREMATURE_CLOSE', 'Premature close'),
                r('ERR_STREAM_DESTROYED', function (t) {
                  return 'Cannot call ' + t + ' after a stream was destroyed';
                }),
                r('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times'),
                r('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable'),
                r('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
                r(
                  'ERR_STREAM_NULL_VALUES',
                  'May not write null values to stream',
                  TypeError
                ),
                r(
                  'ERR_UNKNOWN_ENCODING',
                  function (t) {
                    return 'Unknown encoding: ' + t;
                  },
                  TypeError
                ),
                r(
                  'ERR_STREAM_UNSHIFT_AFTER_END_EVENT',
                  'stream.unshift() after end event'
                ),
                (t.exports.q = e);
            },
            2403: function (t, e, r) {
              'use strict';
              var i =
                Object.keys ||
                function (t) {
                  var e = [];
                  for (var r in t) e.push(r);
                  return e;
                };
              t.exports = d;
              var a = r(1709),
                o = r(7337);
              r(3782)(d, a);
              for (var f = i(o.prototype), s = 0; s < f.length; s++) {
                var h = f[s];
                d.prototype[h] || (d.prototype[h] = o.prototype[h]);
              }
              function d(t) {
                if (!(this instanceof d)) return new d(t);
                a.call(this, t),
                  o.call(this, t),
                  (this.allowHalfOpen = !0),
                  t &&
                    (!1 === t.readable && (this.readable = !1),
                    !1 === t.writable && (this.writable = !1),
                    !1 === t.allowHalfOpen &&
                      ((this.allowHalfOpen = !1), this.once('end', c)));
              }
              function c() {
                this._writableState.ended || n.nextTick(u, this);
              }
              function u(t) {
                t.end();
              }
              Object.defineProperty(d.prototype, 'writableHighWaterMark', {
                enumerable: !1,
                get: function () {
                  return this._writableState.highWaterMark;
                },
              }),
                Object.defineProperty(d.prototype, 'writableBuffer', {
                  enumerable: !1,
                  get: function () {
                    return (
                      this._writableState && this._writableState.getBuffer()
                    );
                  },
                }),
                Object.defineProperty(d.prototype, 'writableLength', {
                  enumerable: !1,
                  get: function () {
                    return this._writableState.length;
                  },
                }),
                Object.defineProperty(d.prototype, 'destroyed', {
                  enumerable: !1,
                  get: function () {
                    return (
                      void 0 !== this._readableState &&
                      void 0 !== this._writableState &&
                      this._readableState.destroyed &&
                      this._writableState.destroyed
                    );
                  },
                  set: function (t) {
                    void 0 !== this._readableState &&
                      void 0 !== this._writableState &&
                      ((this._readableState.destroyed = t),
                      (this._writableState.destroyed = t));
                  },
                });
            },
            7889: function (t, e, r) {
              'use strict';
              t.exports = n;
              var i = r(1170);
              function n(t) {
                if (!(this instanceof n)) return new n(t);
                i.call(this, t);
              }
              r(3782)(n, i),
                (n.prototype._transform = function (t, e, r) {
                  r(null, t);
                });
            },
            1709: function (t, e, i) {
              'use strict';
              (t.exports = A), (A.ReadableState = E), i(2361).EventEmitter;
              var a,
                o,
                f,
                s,
                h,
                d = function (t, e) {
                  return t.listeners(e).length;
                },
                c = i(4678),
                u = i(4300).Buffer,
                l = r.g.Uint8Array || function () {},
                p = i(3837);
              o = p && p.debuglog ? p.debuglog('stream') : function () {};
              var b = i(4379),
                m = i(7025),
                v = i(6776).getHighWaterMark,
                y = i(4646).q,
                g = y.ERR_INVALID_ARG_TYPE,
                _ = y.ERR_STREAM_PUSH_AFTER_EOF,
                w = y.ERR_METHOD_NOT_IMPLEMENTED,
                M = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
              i(3782)(A, c);
              var S = m.errorOrDestroy,
                k = ['error', 'close', 'destroy', 'pause', 'resume'];
              function E(t, e, r) {
                (a = a || i(2403)),
                  (t = t || {}),
                  'boolean' != typeof r && (r = e instanceof a),
                  (this.objectMode = !!t.objectMode),
                  r &&
                    (this.objectMode =
                      this.objectMode || !!t.readableObjectMode),
                  (this.highWaterMark = v(this, t, 'readableHighWaterMark', r)),
                  (this.buffer = new b()),
                  (this.length = 0),
                  (this.pipes = null),
                  (this.pipesCount = 0),
                  (this.flowing = null),
                  (this.ended = !1),
                  (this.endEmitted = !1),
                  (this.reading = !1),
                  (this.sync = !0),
                  (this.needReadable = !1),
                  (this.emittedReadable = !1),
                  (this.readableListening = !1),
                  (this.resumeScheduled = !1),
                  (this.paused = !0),
                  (this.emitClose = !1 !== t.emitClose),
                  (this.autoDestroy = !!t.autoDestroy),
                  (this.destroyed = !1),
                  (this.defaultEncoding = t.defaultEncoding || 'utf8'),
                  (this.awaitDrain = 0),
                  (this.readingMore = !1),
                  (this.decoder = null),
                  (this.encoding = null),
                  t.encoding &&
                    (f || (f = i(3704).s),
                    (this.decoder = new f(t.encoding)),
                    (this.encoding = t.encoding));
              }
              function A(t) {
                if (((a = a || i(2403)), !(this instanceof A))) return new A(t);
                var e = this instanceof a;
                (this._readableState = new E(t, this, e)),
                  (this.readable = !0),
                  t &&
                    ('function' == typeof t.read && (this._read = t.read),
                    'function' == typeof t.destroy &&
                      (this._destroy = t.destroy)),
                  c.call(this);
              }
              function x(t, e, r, i, n) {
                o('readableAddChunk', e);
                var a,
                  f,
                  s,
                  h,
                  d,
                  c = t._readableState;
                if (null === e)
                  (c.reading = !1),
                    (function (t, e) {
                      if ((o('onEofChunk'), !e.ended)) {
                        if (e.decoder) {
                          var r = e.decoder.end();
                          r &&
                            r.length &&
                            (e.buffer.push(r),
                            (e.length += e.objectMode ? 1 : r.length));
                        }
                        (e.ended = !0),
                          e.sync
                            ? B(t)
                            : ((e.needReadable = !1),
                              e.emittedReadable ||
                                ((e.emittedReadable = !0), P(t)));
                      }
                    })(t, c);
                else {
                  if (
                    (n ||
                      ((a = c),
                      (f = e),
                      u.isBuffer(f) ||
                        f instanceof l ||
                        'string' == typeof f ||
                        void 0 === f ||
                        a.objectMode ||
                        (s = new g(
                          'chunk',
                          ['string', 'Buffer', 'Uint8Array'],
                          f
                        )),
                      (d = s)),
                    d)
                  )
                    S(t, d);
                  else if (c.objectMode || (e && e.length > 0)) {
                    if (
                      ('string' == typeof e ||
                        c.objectMode ||
                        Object.getPrototypeOf(e) === u.prototype ||
                        ((h = e), (e = u.from(h))),
                      i)
                    )
                      c.endEmitted ? S(t, new M()) : R(t, c, e, !0);
                    else if (c.ended) S(t, new _());
                    else {
                      if (c.destroyed) return !1;
                      (c.reading = !1),
                        c.decoder && !r
                          ? ((e = c.decoder.write(e)),
                            c.objectMode || 0 !== e.length
                              ? R(t, c, e, !1)
                              : T(t, c))
                          : R(t, c, e, !1);
                    }
                  } else i || ((c.reading = !1), T(t, c));
                }
                return (
                  !c.ended && (c.length < c.highWaterMark || 0 === c.length)
                );
              }
              function R(t, e, r, i) {
                e.flowing && 0 === e.length && !e.sync
                  ? ((e.awaitDrain = 0), t.emit('data', r))
                  : ((e.length += e.objectMode ? 1 : r.length),
                    i ? e.buffer.unshift(r) : e.buffer.push(r),
                    e.needReadable && B(t)),
                  T(t, e);
              }
              function I(t, e) {
                if (t <= 0 || (0 === e.length && e.ended)) return 0;
                if (e.objectMode) return 1;
                if (t != t)
                  return e.flowing && e.length
                    ? e.buffer.head.data.length
                    : e.length;
                if (t > e.highWaterMark) {
                  var r;
                  e.highWaterMark =
                    ((r = t) >= 1073741824
                      ? (r = 1073741824)
                      : (r--,
                        (r |= r >>> 1),
                        (r |= r >>> 2),
                        (r |= r >>> 4),
                        (r |= r >>> 8),
                        (r |= r >>> 16),
                        r++),
                    r);
                }
                return t <= e.length
                  ? t
                  : e.ended
                    ? e.length
                    : ((e.needReadable = !0), 0);
              }
              function B(t) {
                var e = t._readableState;
                o('emitReadable', e.needReadable, e.emittedReadable),
                  (e.needReadable = !1),
                  e.emittedReadable ||
                    (o('emitReadable', e.flowing),
                    (e.emittedReadable = !0),
                    n.nextTick(P, t));
              }
              function P(t) {
                var e = t._readableState;
                o('emitReadable_', e.destroyed, e.length, e.ended),
                  !e.destroyed &&
                    (e.length || e.ended) &&
                    (t.emit('readable'), (e.emittedReadable = !1)),
                  (e.needReadable =
                    !e.flowing && !e.ended && e.length <= e.highWaterMark),
                  N(t);
              }
              function T(t, e) {
                e.readingMore || ((e.readingMore = !0), n.nextTick(C, t, e));
              }
              function C(t, e) {
                for (
                  ;
                  !e.reading &&
                  !e.ended &&
                  (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

                ) {
                  var r = e.length;
                  if ((o('maybeReadMore read 0'), t.read(0), r === e.length))
                    break;
                }
                e.readingMore = !1;
              }
              function j(t) {
                var e = t._readableState;
                (e.readableListening = t.listenerCount('readable') > 0),
                  e.resumeScheduled && !e.paused
                    ? (e.flowing = !0)
                    : t.listenerCount('data') > 0 && t.resume();
              }
              function O(t) {
                o('readable nexttick read 0'), t.read(0);
              }
              function D(t, e) {
                o('resume', e.reading),
                  e.reading || t.read(0),
                  (e.resumeScheduled = !1),
                  t.emit('resume'),
                  N(t),
                  e.flowing && !e.reading && t.read(0);
              }
              function N(t) {
                var e = t._readableState;
                for (o('flow', e.flowing); e.flowing && null !== t.read(); );
              }
              function q(t, e) {
                var r;
                return 0 === e.length
                  ? null
                  : (e.objectMode
                      ? (r = e.buffer.shift())
                      : !t || t >= e.length
                        ? ((r = e.decoder
                            ? e.buffer.join('')
                            : 1 === e.buffer.length
                              ? e.buffer.first()
                              : e.buffer.concat(e.length)),
                          e.buffer.clear())
                        : (r = e.buffer.consume(t, e.decoder)),
                    r);
              }
              function L(t) {
                var e = t._readableState;
                o('endReadable', e.endEmitted),
                  e.endEmitted || ((e.ended = !0), n.nextTick(z, e, t));
              }
              function z(t, e) {
                if (
                  (o('endReadableNT', t.endEmitted, t.length),
                  !t.endEmitted &&
                    0 === t.length &&
                    ((t.endEmitted = !0),
                    (e.readable = !1),
                    e.emit('end'),
                    t.autoDestroy))
                ) {
                  var r = e._writableState;
                  (!r || (r.autoDestroy && r.finished)) && e.destroy();
                }
              }
              function U(t, e) {
                for (var r = 0, i = t.length; r < i; r++)
                  if (t[r] === e) return r;
                return -1;
              }
              Object.defineProperty(A.prototype, 'destroyed', {
                enumerable: !1,
                get: function () {
                  return (
                    void 0 !== this._readableState &&
                    this._readableState.destroyed
                  );
                },
                set: function (t) {
                  this._readableState && (this._readableState.destroyed = t);
                },
              }),
                (A.prototype.destroy = m.destroy),
                (A.prototype._undestroy = m.undestroy),
                (A.prototype._destroy = function (t, e) {
                  e(t);
                }),
                (A.prototype.push = function (t, e) {
                  var r,
                    i = this._readableState;
                  return (
                    i.objectMode
                      ? (r = !0)
                      : 'string' == typeof t &&
                        ((e = e || i.defaultEncoding) !== i.encoding &&
                          ((t = u.from(t, e)), (e = '')),
                        (r = !0)),
                    x(this, t, e, !1, r)
                  );
                }),
                (A.prototype.unshift = function (t) {
                  return x(this, t, null, !0, !1);
                }),
                (A.prototype.isPaused = function () {
                  return !1 === this._readableState.flowing;
                }),
                (A.prototype.setEncoding = function (t) {
                  f || (f = i(3704).s);
                  var e = new f(t);
                  (this._readableState.decoder = e),
                    (this._readableState.encoding =
                      this._readableState.decoder.encoding);
                  for (
                    var r = this._readableState.buffer.head, n = '';
                    null !== r;

                  )
                    (n += e.write(r.data)), (r = r.next);
                  return (
                    this._readableState.buffer.clear(),
                    '' !== n && this._readableState.buffer.push(n),
                    (this._readableState.length = n.length),
                    this
                  );
                }),
                (A.prototype.read = function (t) {
                  o('read', t), (t = parseInt(t, 10));
                  var e,
                    r = this._readableState,
                    i = t;
                  if (
                    (0 !== t && (r.emittedReadable = !1),
                    0 === t &&
                      r.needReadable &&
                      ((0 !== r.highWaterMark
                        ? r.length >= r.highWaterMark
                        : r.length > 0) ||
                        r.ended))
                  )
                    return (
                      o('read: emitReadable', r.length, r.ended),
                      0 === r.length && r.ended ? L(this) : B(this),
                      null
                    );
                  if (0 === (t = I(t, r)) && r.ended)
                    return 0 === r.length && L(this), null;
                  var n = r.needReadable;
                  return (
                    o('need readable', n),
                    (0 === r.length || r.length - t < r.highWaterMark) &&
                      o('length less than watermark', (n = !0)),
                    r.ended || r.reading
                      ? o('reading or ended', (n = !1))
                      : n &&
                        (o('do read'),
                        (r.reading = !0),
                        (r.sync = !0),
                        0 === r.length && (r.needReadable = !0),
                        this._read(r.highWaterMark),
                        (r.sync = !1),
                        r.reading || (t = I(i, r))),
                    null === (e = t > 0 ? q(t, r) : null)
                      ? ((r.needReadable = r.length <= r.highWaterMark),
                        (t = 0))
                      : ((r.length -= t), (r.awaitDrain = 0)),
                    0 === r.length &&
                      (r.ended || (r.needReadable = !0),
                      i !== t && r.ended && L(this)),
                    null !== e && this.emit('data', e),
                    e
                  );
                }),
                (A.prototype._read = function (t) {
                  S(this, new w('_read()'));
                }),
                (A.prototype.pipe = function (t, e) {
                  var r = this,
                    i = this._readableState;
                  switch (i.pipesCount) {
                    case 0:
                      i.pipes = t;
                      break;
                    case 1:
                      i.pipes = [i.pipes, t];
                      break;
                    default:
                      i.pipes.push(t);
                  }
                  (i.pipesCount += 1),
                    o('pipe count=%d opts=%j', i.pipesCount, e);
                  var a =
                    (e && !1 === e.end) || t === n.stdout || t === n.stderr
                      ? b
                      : f;
                  function f() {
                    o('onend'), t.end();
                  }
                  i.endEmitted ? n.nextTick(a) : r.once('end', a),
                    t.on('unpipe', function e(n, a) {
                      o('onunpipe'),
                        n === r &&
                          a &&
                          !1 === a.hasUnpiped &&
                          ((a.hasUnpiped = !0),
                          o('cleanup'),
                          t.removeListener('close', l),
                          t.removeListener('finish', p),
                          t.removeListener('drain', s),
                          t.removeListener('error', u),
                          t.removeListener('unpipe', e),
                          r.removeListener('end', f),
                          r.removeListener('end', b),
                          r.removeListener('data', c),
                          (h = !0),
                          i.awaitDrain &&
                            (!t._writableState || t._writableState.needDrain) &&
                            s());
                    });
                  var s = function () {
                    var t = r._readableState;
                    o('pipeOnDrain', t.awaitDrain),
                      t.awaitDrain && t.awaitDrain--,
                      0 === t.awaitDrain &&
                        d(r, 'data') &&
                        ((t.flowing = !0), N(r));
                  };
                  t.on('drain', s);
                  var h = !1;
                  function c(e) {
                    o('ondata');
                    var n = t.write(e);
                    o('dest.write', n),
                      !1 === n &&
                        (((1 === i.pipesCount && i.pipes === t) ||
                          (i.pipesCount > 1 && -1 !== U(i.pipes, t))) &&
                          !h &&
                          (o('false write response, pause', i.awaitDrain),
                          i.awaitDrain++),
                        r.pause());
                  }
                  function u(e) {
                    o('onerror', e),
                      b(),
                      t.removeListener('error', u),
                      0 === d(t, 'error') && S(t, e);
                  }
                  function l() {
                    t.removeListener('finish', p), b();
                  }
                  function p() {
                    o('onfinish'), t.removeListener('close', l), b();
                  }
                  function b() {
                    o('unpipe'), r.unpipe(t);
                  }
                  return (
                    r.on('data', c),
                    (function (t, e, r) {
                      if ('function' == typeof t.prependListener)
                        return t.prependListener(e, r);
                      t._events && t._events[e]
                        ? Array.isArray(t._events[e])
                          ? t._events[e].unshift(r)
                          : (t._events[e] = [r, t._events[e]])
                        : t.on(e, r);
                    })(t, 'error', u),
                    t.once('close', l),
                    t.once('finish', p),
                    t.emit('pipe', r),
                    i.flowing || (o('pipe resume'), r.resume()),
                    t
                  );
                }),
                (A.prototype.unpipe = function (t) {
                  var e = this._readableState,
                    r = { hasUnpiped: !1 };
                  if (0 === e.pipesCount) return this;
                  if (1 === e.pipesCount)
                    return (
                      (t && t !== e.pipes) ||
                        (t || (t = e.pipes),
                        (e.pipes = null),
                        (e.pipesCount = 0),
                        (e.flowing = !1),
                        t && t.emit('unpipe', this, r)),
                      this
                    );
                  if (!t) {
                    var i = e.pipes,
                      n = e.pipesCount;
                    (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
                    for (var a = 0; a < n; a++)
                      i[a].emit('unpipe', this, { hasUnpiped: !1 });
                    return this;
                  }
                  var o = U(e.pipes, t);
                  return (
                    -1 === o ||
                      (e.pipes.splice(o, 1),
                      (e.pipesCount -= 1),
                      1 === e.pipesCount && (e.pipes = e.pipes[0]),
                      t.emit('unpipe', this, r)),
                    this
                  );
                }),
                (A.prototype.on = function (t, e) {
                  var r = c.prototype.on.call(this, t, e),
                    i = this._readableState;
                  return (
                    'data' === t
                      ? ((i.readableListening =
                          this.listenerCount('readable') > 0),
                        !1 !== i.flowing && this.resume())
                      : 'readable' !== t ||
                        i.endEmitted ||
                        i.readableListening ||
                        ((i.readableListening = i.needReadable = !0),
                        (i.flowing = !1),
                        (i.emittedReadable = !1),
                        o('on readable', i.length, i.reading),
                        i.length ? B(this) : i.reading || n.nextTick(O, this)),
                    r
                  );
                }),
                (A.prototype.addListener = A.prototype.on),
                (A.prototype.removeListener = function (t, e) {
                  var r = c.prototype.removeListener.call(this, t, e);
                  return 'readable' === t && n.nextTick(j, this), r;
                }),
                (A.prototype.removeAllListeners = function (t) {
                  var e = c.prototype.removeAllListeners.apply(this, arguments);
                  return (
                    ('readable' === t || void 0 === t) && n.nextTick(j, this), e
                  );
                }),
                (A.prototype.resume = function () {
                  var t = this._readableState;
                  return (
                    t.flowing ||
                      (o('resume'),
                      (t.flowing = !t.readableListening),
                      t.resumeScheduled ||
                        ((t.resumeScheduled = !0), n.nextTick(D, this, t))),
                    (t.paused = !1),
                    this
                  );
                }),
                (A.prototype.pause = function () {
                  return (
                    o('call pause flowing=%j', this._readableState.flowing),
                    !1 !== this._readableState.flowing &&
                      (o('pause'),
                      (this._readableState.flowing = !1),
                      this.emit('pause')),
                    (this._readableState.paused = !0),
                    this
                  );
                }),
                (A.prototype.wrap = function (t) {
                  var e = this,
                    r = this._readableState,
                    i = !1;
                  for (var n in (t.on('end', function () {
                    if ((o('wrapped end'), r.decoder && !r.ended)) {
                      var t = r.decoder.end();
                      t && t.length && e.push(t);
                    }
                    e.push(null);
                  }),
                  t.on('data', function (n) {
                    o('wrapped data'),
                      r.decoder && (n = r.decoder.write(n)),
                      (!r.objectMode || null != n) &&
                        (r.objectMode || (n && n.length)) &&
                        (e.push(n) || ((i = !0), t.pause()));
                  }),
                  t))
                    void 0 === this[n] &&
                      'function' == typeof t[n] &&
                      (this[n] = (function (e) {
                        return function () {
                          return t[e].apply(t, arguments);
                        };
                      })(n));
                  for (var a = 0; a < k.length; a++)
                    t.on(k[a], this.emit.bind(this, k[a]));
                  return (
                    (this._read = function (e) {
                      o('wrapped _read', e), i && ((i = !1), t.resume());
                    }),
                    this
                  );
                }),
                'function' == typeof Symbol &&
                  (A.prototype[Symbol.asyncIterator] = function () {
                    return void 0 === s && (s = i(6871)), s(this);
                  }),
                Object.defineProperty(A.prototype, 'readableHighWaterMark', {
                  enumerable: !1,
                  get: function () {
                    return this._readableState.highWaterMark;
                  },
                }),
                Object.defineProperty(A.prototype, 'readableBuffer', {
                  enumerable: !1,
                  get: function () {
                    return this._readableState && this._readableState.buffer;
                  },
                }),
                Object.defineProperty(A.prototype, 'readableFlowing', {
                  enumerable: !1,
                  get: function () {
                    return this._readableState.flowing;
                  },
                  set: function (t) {
                    this._readableState && (this._readableState.flowing = t);
                  },
                }),
                (A._fromList = q),
                Object.defineProperty(A.prototype, 'readableLength', {
                  enumerable: !1,
                  get: function () {
                    return this._readableState.length;
                  },
                }),
                'function' == typeof Symbol &&
                  (A.from = function (t, e) {
                    return void 0 === h && (h = i(9727)), h(A, t, e);
                  });
            },
            1170: function (t, e, r) {
              'use strict';
              t.exports = d;
              var i = r(4646).q,
                n = i.ERR_METHOD_NOT_IMPLEMENTED,
                a = i.ERR_MULTIPLE_CALLBACK,
                o = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                f = i.ERR_TRANSFORM_WITH_LENGTH_0,
                s = r(2403);
              function h(t, e) {
                var r = this._transformState;
                r.transforming = !1;
                var i = r.writecb;
                if (null === i) return this.emit('error', new a());
                (r.writechunk = null),
                  (r.writecb = null),
                  null != e && this.push(e),
                  i(t);
                var n = this._readableState;
                (n.reading = !1),
                  (n.needReadable || n.length < n.highWaterMark) &&
                    this._read(n.highWaterMark);
              }
              function d(t) {
                if (!(this instanceof d)) return new d(t);
                s.call(this, t),
                  (this._transformState = {
                    afterTransform: h.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null,
                  }),
                  (this._readableState.needReadable = !0),
                  (this._readableState.sync = !1),
                  t &&
                    ('function' == typeof t.transform &&
                      (this._transform = t.transform),
                    'function' == typeof t.flush && (this._flush = t.flush)),
                  this.on('prefinish', c);
              }
              function c() {
                var t = this;
                'function' != typeof this._flush ||
                this._readableState.destroyed
                  ? u(this, null, null)
                  : this._flush(function (e, r) {
                      u(t, e, r);
                    });
              }
              function u(t, e, r) {
                if (e) return t.emit('error', e);
                if ((null != r && t.push(r), t._writableState.length))
                  throw new f();
                if (t._transformState.transforming) throw new o();
                return t.push(null);
              }
              r(3782)(d, s),
                (d.prototype.push = function (t, e) {
                  return (
                    (this._transformState.needTransform = !1),
                    s.prototype.push.call(this, t, e)
                  );
                }),
                (d.prototype._transform = function (t, e, r) {
                  r(new n('_transform()'));
                }),
                (d.prototype._write = function (t, e, r) {
                  var i = this._transformState;
                  if (
                    ((i.writecb = r),
                    (i.writechunk = t),
                    (i.writeencoding = e),
                    !i.transforming)
                  ) {
                    var n = this._readableState;
                    (i.needTransform ||
                      n.needReadable ||
                      n.length < n.highWaterMark) &&
                      this._read(n.highWaterMark);
                  }
                }),
                (d.prototype._read = function (t) {
                  var e = this._transformState;
                  null === e.writechunk || e.transforming
                    ? (e.needTransform = !0)
                    : ((e.transforming = !0),
                      this._transform(
                        e.writechunk,
                        e.writeencoding,
                        e.afterTransform
                      ));
                }),
                (d.prototype._destroy = function (t, e) {
                  s.prototype._destroy.call(this, t, function (t) {
                    e(t);
                  });
                });
            },
            7337: function (t, e, i) {
              'use strict';
              function a(t) {
                var e = this;
                (this.next = null),
                  (this.entry = null),
                  (this.finish = function () {
                    (function (t, e, r) {
                      var i = t.entry;
                      for (t.entry = null; i; ) {
                        var n = i.callback;
                        e.pendingcb--, n(void 0), (i = i.next);
                      }
                      e.corkedRequestsFree.next = t;
                    })(e, t);
                  });
              }
              (t.exports = A), (A.WritableState = E);
              var o,
                f,
                s = { deprecate: i(6769) },
                h = i(4678),
                d = i(4300).Buffer,
                c = r.g.Uint8Array || function () {},
                u = i(7025),
                l = i(6776).getHighWaterMark,
                p = i(4646).q,
                b = p.ERR_INVALID_ARG_TYPE,
                m = p.ERR_METHOD_NOT_IMPLEMENTED,
                v = p.ERR_MULTIPLE_CALLBACK,
                y = p.ERR_STREAM_CANNOT_PIPE,
                g = p.ERR_STREAM_DESTROYED,
                _ = p.ERR_STREAM_NULL_VALUES,
                w = p.ERR_STREAM_WRITE_AFTER_END,
                M = p.ERR_UNKNOWN_ENCODING,
                S = u.errorOrDestroy;
              function k() {}
              function E(t, e, r) {
                (o = o || i(2403)),
                  (t = t || {}),
                  'boolean' != typeof r && (r = e instanceof o),
                  (this.objectMode = !!t.objectMode),
                  r &&
                    (this.objectMode =
                      this.objectMode || !!t.writableObjectMode),
                  (this.highWaterMark = l(this, t, 'writableHighWaterMark', r)),
                  (this.finalCalled = !1),
                  (this.needDrain = !1),
                  (this.ending = !1),
                  (this.ended = !1),
                  (this.finished = !1),
                  (this.destroyed = !1);
                var f = !1 === t.decodeStrings;
                (this.decodeStrings = !f),
                  (this.defaultEncoding = t.defaultEncoding || 'utf8'),
                  (this.length = 0),
                  (this.writing = !1),
                  (this.corked = 0),
                  (this.sync = !0),
                  (this.bufferProcessing = !1),
                  (this.onwrite = function (t) {
                    (function (t, e) {
                      var r = t._writableState,
                        i = r.sync,
                        a = r.writecb;
                      if ('function' != typeof a) throw new v();
                      if (
                        ((r.writing = !1),
                        (r.writecb = null),
                        (r.length -= r.writelen),
                        (r.writelen = 0),
                        e)
                      )
                        --r.pendingcb,
                          i
                            ? (n.nextTick(a, e),
                              n.nextTick(T, t, r),
                              (t._writableState.errorEmitted = !0),
                              S(t, e))
                            : (a(e),
                              (t._writableState.errorEmitted = !0),
                              S(t, e),
                              T(t, r));
                      else {
                        var o = B(r) || t.destroyed;
                        o ||
                          r.corked ||
                          r.bufferProcessing ||
                          !r.bufferedRequest ||
                          I(t, r),
                          i ? n.nextTick(R, t, r, o, a) : R(t, r, o, a);
                      }
                    })(e, t);
                  }),
                  (this.writecb = null),
                  (this.writelen = 0),
                  (this.bufferedRequest = null),
                  (this.lastBufferedRequest = null),
                  (this.pendingcb = 0),
                  (this.prefinished = !1),
                  (this.errorEmitted = !1),
                  (this.emitClose = !1 !== t.emitClose),
                  (this.autoDestroy = !!t.autoDestroy),
                  (this.bufferedRequestCount = 0),
                  (this.corkedRequestsFree = new a(this));
              }
              function A(t) {
                var e = this instanceof (o = o || i(2403));
                if (!e && !f.call(A, this)) return new A(t);
                (this._writableState = new E(t, this, e)),
                  (this.writable = !0),
                  t &&
                    ('function' == typeof t.write && (this._write = t.write),
                    'function' == typeof t.writev && (this._writev = t.writev),
                    'function' == typeof t.destroy &&
                      (this._destroy = t.destroy),
                    'function' == typeof t.final && (this._final = t.final)),
                  h.call(this);
              }
              function x(t, e, r, i, n, a, o) {
                (e.writelen = i),
                  (e.writecb = o),
                  (e.writing = !0),
                  (e.sync = !0),
                  e.destroyed
                    ? e.onwrite(new g('write'))
                    : r
                      ? t._writev(n, e.onwrite)
                      : t._write(n, a, e.onwrite),
                  (e.sync = !1);
              }
              function R(t, e, r, i) {
                r ||
                  (0 === e.length &&
                    e.needDrain &&
                    ((e.needDrain = !1), t.emit('drain'))),
                  e.pendingcb--,
                  i(),
                  T(t, e);
              }
              function I(t, e) {
                e.bufferProcessing = !0;
                var r = e.bufferedRequest;
                if (t._writev && r && r.next) {
                  var i = Array(e.bufferedRequestCount),
                    n = e.corkedRequestsFree;
                  n.entry = r;
                  for (var o = 0, f = !0; r; )
                    (i[o] = r), r.isBuf || (f = !1), (r = r.next), (o += 1);
                  (i.allBuffers = f),
                    x(t, e, !0, e.length, i, '', n.finish),
                    e.pendingcb++,
                    (e.lastBufferedRequest = null),
                    n.next
                      ? ((e.corkedRequestsFree = n.next), (n.next = null))
                      : (e.corkedRequestsFree = new a(e)),
                    (e.bufferedRequestCount = 0);
                } else {
                  for (; r; ) {
                    var s = r.chunk,
                      h = r.encoding,
                      d = r.callback,
                      c = e.objectMode ? 1 : s.length;
                    if (
                      (x(t, e, !1, c, s, h, d),
                      (r = r.next),
                      e.bufferedRequestCount--,
                      e.writing)
                    )
                      break;
                  }
                  null === r && (e.lastBufferedRequest = null);
                }
                (e.bufferedRequest = r), (e.bufferProcessing = !1);
              }
              function B(t) {
                return (
                  t.ending &&
                  0 === t.length &&
                  null === t.bufferedRequest &&
                  !t.finished &&
                  !t.writing
                );
              }
              function P(t, e) {
                t._final(function (r) {
                  e.pendingcb--,
                    r && S(t, r),
                    (e.prefinished = !0),
                    t.emit('prefinish'),
                    T(t, e);
                });
              }
              function T(t, e) {
                var r = B(e);
                if (
                  r &&
                  (e.prefinished ||
                    e.finalCalled ||
                    ('function' != typeof t._final || e.destroyed
                      ? ((e.prefinished = !0), t.emit('prefinish'))
                      : (e.pendingcb++,
                        (e.finalCalled = !0),
                        n.nextTick(P, t, e))),
                  0 === e.pendingcb &&
                    ((e.finished = !0), t.emit('finish'), e.autoDestroy))
                ) {
                  var i = t._readableState;
                  (!i || (i.autoDestroy && i.endEmitted)) && t.destroy();
                }
                return r;
              }
              i(3782)(A, h),
                (E.prototype.getBuffer = function () {
                  for (var t = this.bufferedRequest, e = []; t; )
                    e.push(t), (t = t.next);
                  return e;
                }),
                (function () {
                  try {
                    Object.defineProperty(E.prototype, 'buffer', {
                      get: s.deprecate(
                        function () {
                          return this.getBuffer();
                        },
                        '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                        'DEP0003'
                      ),
                    });
                  } catch (t) {}
                })(),
                'function' == typeof Symbol &&
                Symbol.hasInstance &&
                'function' == typeof Function.prototype[Symbol.hasInstance]
                  ? ((f = Function.prototype[Symbol.hasInstance]),
                    Object.defineProperty(A, Symbol.hasInstance, {
                      value: function (t) {
                        return (
                          !!f.call(this, t) ||
                          (this === A && t && t._writableState instanceof E)
                        );
                      },
                    }))
                  : (f = function (t) {
                      return t instanceof this;
                    }),
                (A.prototype.pipe = function () {
                  S(this, new y());
                }),
                (A.prototype.write = function (t, e, r) {
                  var i,
                    a,
                    o,
                    f,
                    s,
                    h,
                    u,
                    l = this._writableState,
                    p = !1,
                    m =
                      !l.objectMode &&
                      ((i = t), d.isBuffer(i) || i instanceof c);
                  return (
                    m && !d.isBuffer(t) && ((a = t), (t = d.from(a))),
                    ('function' == typeof e && ((r = e), (e = null)),
                    m ? (e = 'buffer') : e || (e = l.defaultEncoding),
                    'function' != typeof r && (r = k),
                    l.ending)
                      ? ((o = r), S(this, (f = new w())), n.nextTick(o, f))
                      : (m ||
                          ((s = t),
                          (h = r),
                          null === s
                            ? (u = new _())
                            : 'string' == typeof s ||
                              l.objectMode ||
                              (u = new b('chunk', ['string', 'Buffer'], s)),
                          !u || (S(this, u), n.nextTick(h, u), 0))) &&
                        (l.pendingcb++,
                        (p = (function (t, e, r, i, n, a) {
                          if (!r) {
                            var o,
                              f,
                              s =
                                ((o = i),
                                (f = n),
                                e.objectMode ||
                                  !1 === e.decodeStrings ||
                                  'string' != typeof o ||
                                  (o = d.from(o, f)),
                                o);
                            i !== s && ((r = !0), (n = 'buffer'), (i = s));
                          }
                          var h = e.objectMode ? 1 : i.length;
                          e.length += h;
                          var c = e.length < e.highWaterMark;
                          if (
                            (c || (e.needDrain = !0), e.writing || e.corked)
                          ) {
                            var u = e.lastBufferedRequest;
                            (e.lastBufferedRequest = {
                              chunk: i,
                              encoding: n,
                              isBuf: r,
                              callback: a,
                              next: null,
                            }),
                              u
                                ? (u.next = e.lastBufferedRequest)
                                : (e.bufferedRequest = e.lastBufferedRequest),
                              (e.bufferedRequestCount += 1);
                          } else x(t, e, !1, h, i, n, a);
                          return c;
                        })(this, l, m, t, e, r))),
                    p
                  );
                }),
                (A.prototype.cork = function () {
                  this._writableState.corked++;
                }),
                (A.prototype.uncork = function () {
                  var t = this._writableState;
                  !t.corked ||
                    (t.corked--,
                    t.writing ||
                      t.corked ||
                      t.bufferProcessing ||
                      !t.bufferedRequest ||
                      I(this, t));
                }),
                (A.prototype.setDefaultEncoding = function (t) {
                  if (
                    ('string' == typeof t && (t = t.toLowerCase()),
                    !(
                      [
                        'hex',
                        'utf8',
                        'utf-8',
                        'ascii',
                        'binary',
                        'base64',
                        'ucs2',
                        'ucs-2',
                        'utf16le',
                        'utf-16le',
                        'raw',
                      ].indexOf((t + '').toLowerCase()) > -1
                    ))
                  )
                    throw new M(t);
                  return (this._writableState.defaultEncoding = t), this;
                }),
                Object.defineProperty(A.prototype, 'writableBuffer', {
                  enumerable: !1,
                  get: function () {
                    return (
                      this._writableState && this._writableState.getBuffer()
                    );
                  },
                }),
                Object.defineProperty(A.prototype, 'writableHighWaterMark', {
                  enumerable: !1,
                  get: function () {
                    return this._writableState.highWaterMark;
                  },
                }),
                (A.prototype._write = function (t, e, r) {
                  r(new m('_write()'));
                }),
                (A.prototype._writev = null),
                (A.prototype.end = function (t, e, r) {
                  var i,
                    a = this._writableState;
                  return (
                    'function' == typeof t
                      ? ((r = t), (t = null), (e = null))
                      : 'function' == typeof e && ((r = e), (e = null)),
                    null != t && this.write(t, e),
                    a.corked && ((a.corked = 1), this.uncork()),
                    a.ending ||
                      ((i = r),
                      (a.ending = !0),
                      T(this, a),
                      i &&
                        (a.finished ? n.nextTick(i) : this.once('finish', i)),
                      (a.ended = !0),
                      (this.writable = !1)),
                    this
                  );
                }),
                Object.defineProperty(A.prototype, 'writableLength', {
                  enumerable: !1,
                  get: function () {
                    return this._writableState.length;
                  },
                }),
                Object.defineProperty(A.prototype, 'destroyed', {
                  enumerable: !1,
                  get: function () {
                    return (
                      void 0 !== this._writableState &&
                      this._writableState.destroyed
                    );
                  },
                  set: function (t) {
                    this._writableState && (this._writableState.destroyed = t);
                  },
                }),
                (A.prototype.destroy = u.destroy),
                (A.prototype._undestroy = u.undestroy),
                (A.prototype._destroy = function (t, e) {
                  e(t);
                });
            },
            6871: function (t, e, r) {
              'use strict';
              function i(t, e, r) {
                return (
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = r),
                  t
                );
              }
              var a,
                o = r(9698),
                f = Symbol('lastResolve'),
                s = Symbol('lastReject'),
                h = Symbol('error'),
                d = Symbol('ended'),
                c = Symbol('lastPromise'),
                u = Symbol('handlePromise'),
                l = Symbol('stream');
              function p(t, e) {
                return { value: t, done: e };
              }
              function b(t) {
                var e = t[f];
                if (null !== e) {
                  var r = t[l].read();
                  null !== r &&
                    ((t[c] = null), (t[f] = null), (t[s] = null), e(p(r, !1)));
                }
              }
              function m(t) {
                n.nextTick(b, t);
              }
              var v = Object.getPrototypeOf(function () {}),
                y = Object.setPrototypeOf(
                  (i(
                    (a = {
                      get stream() {
                        return this[l];
                      },
                      next: function () {
                        var t,
                          e,
                          r = this,
                          i = this[h];
                        if (null !== i) return Promise.reject(i);
                        if (this[d]) return Promise.resolve(p(void 0, !0));
                        if (this[l].destroyed)
                          return new Promise(function (t, e) {
                            n.nextTick(function () {
                              r[h] ? e(r[h]) : t(p(void 0, !0));
                            });
                          });
                        var a = this[c];
                        if (a)
                          e = new Promise(
                            ((t = this),
                            function (e, r) {
                              a.then(function () {
                                if (t[d]) {
                                  e(p(void 0, !0));
                                  return;
                                }
                                t[u](e, r);
                              }, r);
                            })
                          );
                        else {
                          var o = this[l].read();
                          if (null !== o) return Promise.resolve(p(o, !1));
                          e = new Promise(this[u]);
                        }
                        return (this[c] = e), e;
                      },
                    }),
                    Symbol.asyncIterator,
                    function () {
                      return this;
                    }
                  ),
                  i(a, 'return', function () {
                    var t = this;
                    return new Promise(function (e, r) {
                      t[l].destroy(null, function (t) {
                        if (t) {
                          r(t);
                          return;
                        }
                        e(p(void 0, !0));
                      });
                    });
                  }),
                  a),
                  v
                );
              t.exports = function (t) {
                var e,
                  r = Object.create(
                    y,
                    (i((e = {}), l, { value: t, writable: !0 }),
                    i(e, f, { value: null, writable: !0 }),
                    i(e, s, { value: null, writable: !0 }),
                    i(e, h, { value: null, writable: !0 }),
                    i(e, d, {
                      value: t._readableState.endEmitted,
                      writable: !0,
                    }),
                    i(e, u, {
                      value: function (t, e) {
                        var i = r[l].read();
                        i
                          ? ((r[c] = null),
                            (r[f] = null),
                            (r[s] = null),
                            t(p(i, !1)))
                          : ((r[f] = t), (r[s] = e));
                      },
                      writable: !0,
                    }),
                    e)
                  );
                return (
                  (r[c] = null),
                  o(t, function (t) {
                    if (t && 'ERR_STREAM_PREMATURE_CLOSE' !== t.code) {
                      var e = r[s];
                      null !== e &&
                        ((r[c] = null), (r[f] = null), (r[s] = null), e(t)),
                        (r[h] = t);
                      return;
                    }
                    var i = r[f];
                    null !== i &&
                      ((r[c] = null),
                      (r[f] = null),
                      (r[s] = null),
                      i(p(void 0, !0))),
                      (r[d] = !0);
                  }),
                  t.on('readable', m.bind(null, r)),
                  r
                );
              };
            },
            4379: function (t, e, r) {
              'use strict';
              function i(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(t);
                  e &&
                    (i = i.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    r.push.apply(r, i);
                }
                return r;
              }
              function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                  var i = e[r];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              }
              var a = r(4300).Buffer,
                o = r(3837).inspect,
                f = (o && o.custom) || 'inspect';
              t.exports = (function () {
                var t, e;
                function r() {
                  !(function (t, e) {
                    if (!(t instanceof e))
                      throw TypeError('Cannot call a class as a function');
                  })(this, r),
                    (this.head = null),
                    (this.tail = null),
                    (this.length = 0);
                }
                return (
                  (t = [
                    {
                      key: 'push',
                      value: function (t) {
                        var e = { data: t, next: null };
                        this.length > 0
                          ? (this.tail.next = e)
                          : (this.head = e),
                          (this.tail = e),
                          ++this.length;
                      },
                    },
                    {
                      key: 'unshift',
                      value: function (t) {
                        var e = { data: t, next: this.head };
                        0 === this.length && (this.tail = e),
                          (this.head = e),
                          ++this.length;
                      },
                    },
                    {
                      key: 'shift',
                      value: function () {
                        if (0 !== this.length) {
                          var t = this.head.data;
                          return (
                            1 === this.length
                              ? (this.head = this.tail = null)
                              : (this.head = this.head.next),
                            --this.length,
                            t
                          );
                        }
                      },
                    },
                    {
                      key: 'clear',
                      value: function () {
                        (this.head = this.tail = null), (this.length = 0);
                      },
                    },
                    {
                      key: 'join',
                      value: function (t) {
                        if (0 === this.length) return '';
                        for (var e = this.head, r = '' + e.data; (e = e.next); )
                          r += t + e.data;
                        return r;
                      },
                    },
                    {
                      key: 'concat',
                      value: function (t) {
                        if (0 === this.length) return a.alloc(0);
                        for (
                          var e,
                            r,
                            i = a.allocUnsafe(t >>> 0),
                            n = this.head,
                            o = 0;
                          n;

                        )
                          (e = n.data),
                            (r = o),
                            a.prototype.copy.call(e, i, r),
                            (o += n.data.length),
                            (n = n.next);
                        return i;
                      },
                    },
                    {
                      key: 'consume',
                      value: function (t, e) {
                        var r;
                        return (
                          t < this.head.data.length
                            ? ((r = this.head.data.slice(0, t)),
                              (this.head.data = this.head.data.slice(t)))
                            : (r =
                                t === this.head.data.length
                                  ? this.shift()
                                  : e
                                    ? this._getString(t)
                                    : this._getBuffer(t)),
                          r
                        );
                      },
                    },
                    {
                      key: 'first',
                      value: function () {
                        return this.head.data;
                      },
                    },
                    {
                      key: '_getString',
                      value: function (t) {
                        var e = this.head,
                          r = 1,
                          i = e.data;
                        for (t -= i.length; (e = e.next); ) {
                          var n = e.data,
                            a = t > n.length ? n.length : t;
                          if (
                            (a === n.length ? (i += n) : (i += n.slice(0, t)),
                            0 == (t -= a))
                          ) {
                            a === n.length
                              ? (++r,
                                e.next
                                  ? (this.head = e.next)
                                  : (this.head = this.tail = null))
                              : ((this.head = e), (e.data = n.slice(a)));
                            break;
                          }
                          ++r;
                        }
                        return (this.length -= r), i;
                      },
                    },
                    {
                      key: '_getBuffer',
                      value: function (t) {
                        var e = a.allocUnsafe(t),
                          r = this.head,
                          i = 1;
                        for (
                          r.data.copy(e), t -= r.data.length;
                          (r = r.next);

                        ) {
                          var n = r.data,
                            o = t > n.length ? n.length : t;
                          if ((n.copy(e, e.length - t, 0, o), 0 == (t -= o))) {
                            o === n.length
                              ? (++i,
                                r.next
                                  ? (this.head = r.next)
                                  : (this.head = this.tail = null))
                              : ((this.head = r), (r.data = n.slice(o)));
                            break;
                          }
                          ++i;
                        }
                        return (this.length -= i), e;
                      },
                    },
                    {
                      key: f,
                      value: function (t, e) {
                        return o(
                          this,
                          (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                              var r = null != arguments[e] ? arguments[e] : {};
                              e % 2
                                ? i(Object(r), !0).forEach(function (e) {
                                    var i;
                                    (i = r[e]),
                                      e in t
                                        ? Object.defineProperty(t, e, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                          })
                                        : (t[e] = i);
                                  })
                                : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(
                                      t,
                                      Object.getOwnPropertyDescriptors(r)
                                    )
                                  : i(Object(r)).forEach(function (e) {
                                      Object.defineProperty(
                                        t,
                                        e,
                                        Object.getOwnPropertyDescriptor(r, e)
                                      );
                                    });
                            }
                            return t;
                          })({}, e, { depth: 0, customInspect: !1 })
                        );
                      },
                    },
                  ]),
                  n(r.prototype, t),
                  e && n(r, e),
                  r
                );
              })();
            },
            7025: function (t) {
              'use strict';
              function e(t, e) {
                i(t, e), r(t);
              }
              function r(t) {
                (!t._writableState || t._writableState.emitClose) &&
                  (!t._readableState || t._readableState.emitClose) &&
                  t.emit('close');
              }
              function i(t, e) {
                t.emit('error', e);
              }
              t.exports = {
                destroy: function (t, a) {
                  var o = this,
                    f = this._readableState && this._readableState.destroyed,
                    s = this._writableState && this._writableState.destroyed;
                  return (
                    f || s
                      ? a
                        ? a(t)
                        : t &&
                          (this._writableState
                            ? this._writableState.errorEmitted ||
                              ((this._writableState.errorEmitted = !0),
                              n.nextTick(i, this, t))
                            : n.nextTick(i, this, t))
                      : (this._readableState &&
                          (this._readableState.destroyed = !0),
                        this._writableState &&
                          (this._writableState.destroyed = !0),
                        this._destroy(t || null, function (t) {
                          !a && t
                            ? o._writableState
                              ? o._writableState.errorEmitted
                                ? n.nextTick(r, o)
                                : ((o._writableState.errorEmitted = !0),
                                  n.nextTick(e, o, t))
                              : n.nextTick(e, o, t)
                            : a
                              ? (n.nextTick(r, o), a(t))
                              : n.nextTick(r, o);
                        })),
                    this
                  );
                },
                undestroy: function () {
                  this._readableState &&
                    ((this._readableState.destroyed = !1),
                    (this._readableState.reading = !1),
                    (this._readableState.ended = !1),
                    (this._readableState.endEmitted = !1)),
                    this._writableState &&
                      ((this._writableState.destroyed = !1),
                      (this._writableState.ended = !1),
                      (this._writableState.ending = !1),
                      (this._writableState.finalCalled = !1),
                      (this._writableState.prefinished = !1),
                      (this._writableState.finished = !1),
                      (this._writableState.errorEmitted = !1));
                },
                errorOrDestroy: function (t, e) {
                  var r = t._readableState,
                    i = t._writableState;
                  (r && r.autoDestroy) || (i && i.autoDestroy)
                    ? t.destroy(e)
                    : t.emit('error', e);
                },
              };
            },
            9698: function (t, e, r) {
              'use strict';
              var i = r(4646).q.ERR_STREAM_PREMATURE_CLOSE;
              function n() {}
              t.exports = function t(e, r, a) {
                if ('function' == typeof r) return t(e, null, r);
                r || (r = {}),
                  (o = a || n),
                  (f = !1),
                  (a = function () {
                    if (!f) {
                      f = !0;
                      for (
                        var t = arguments.length, e = Array(t), r = 0;
                        r < t;
                        r++
                      )
                        e[r] = arguments[r];
                      o.apply(this, e);
                    }
                  });
                var o,
                  f,
                  s = r.readable || (!1 !== r.readable && e.readable),
                  h = r.writable || (!1 !== r.writable && e.writable),
                  d = function () {
                    e.writable || u();
                  },
                  c = e._writableState && e._writableState.finished,
                  u = function () {
                    (h = !1), (c = !0), s || a.call(e);
                  },
                  l = e._readableState && e._readableState.endEmitted,
                  p = function () {
                    (s = !1), (l = !0), h || a.call(e);
                  },
                  b = function (t) {
                    a.call(e, t);
                  },
                  m = function () {
                    var t;
                    return s && !l
                      ? ((e._readableState && e._readableState.ended) ||
                          (t = new i()),
                        a.call(e, t))
                      : h && !c
                        ? ((e._writableState && e._writableState.ended) ||
                            (t = new i()),
                          a.call(e, t))
                        : void 0;
                  },
                  v = function () {
                    e.req.on('finish', u);
                  };
                return (
                  e.setHeader && 'function' == typeof e.abort
                    ? (e.on('complete', u),
                      e.on('abort', m),
                      e.req ? v() : e.on('request', v))
                    : h &&
                      !e._writableState &&
                      (e.on('end', d), e.on('close', d)),
                  e.on('end', p),
                  e.on('finish', u),
                  !1 !== r.error && e.on('error', b),
                  e.on('close', m),
                  function () {
                    e.removeListener('complete', u),
                      e.removeListener('abort', m),
                      e.removeListener('request', v),
                      e.req && e.req.removeListener('finish', u),
                      e.removeListener('end', d),
                      e.removeListener('close', d),
                      e.removeListener('finish', u),
                      e.removeListener('end', p),
                      e.removeListener('error', b),
                      e.removeListener('close', m);
                  }
                );
              };
            },
            9727: function (t, e, r) {
              'use strict';
              function i(t, e, r, i, n, a, o) {
                try {
                  var f = t[a](o),
                    s = f.value;
                } catch (t) {
                  r(t);
                  return;
                }
                f.done ? e(s) : Promise.resolve(s).then(i, n);
              }
              function n(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(t);
                  e &&
                    (i = i.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    r.push.apply(r, i);
                }
                return r;
              }
              var a = r(4646).q.ERR_INVALID_ARG_TYPE;
              t.exports = function (t, e, r) {
                if (e && 'function' == typeof e.next) o = e;
                else if (e && e[Symbol.asyncIterator])
                  o = e[Symbol.asyncIterator]();
                else if (e && e[Symbol.iterator]) o = e[Symbol.iterator]();
                else throw new a('iterable', ['Iterable'], e);
                var o,
                  f = new t(
                    (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? n(Object(r), !0).forEach(function (e) {
                              var i;
                              (i = r[e]),
                                e in t
                                  ? Object.defineProperty(t, e, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (t[e] = i);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                t,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : n(Object(r)).forEach(function (e) {
                                Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(r, e)
                                );
                              });
                      }
                      return t;
                    })({ objectMode: !0 }, r)
                  ),
                  s = !1;
                function h() {
                  return d.apply(this, arguments);
                }
                function d() {
                  var t;
                  return (
                    (t = function* () {
                      try {
                        var t = yield o.next(),
                          e = t.value;
                        t.done
                          ? f.push(null)
                          : f.push(yield e)
                            ? h()
                            : (s = !1);
                      } catch (t) {
                        f.destroy(t);
                      }
                    }),
                    (d = function () {
                      var e = this,
                        r = arguments;
                      return new Promise(function (n, a) {
                        var o = t.apply(e, r);
                        function f(t) {
                          i(o, n, a, f, s, 'next', t);
                        }
                        function s(t) {
                          i(o, n, a, f, s, 'throw', t);
                        }
                        f(void 0);
                      });
                    }).apply(this, arguments)
                  );
                }
                return (
                  (f._read = function () {
                    s || ((s = !0), h());
                  }),
                  f
                );
              };
            },
            8442: function (t, e, r) {
              'use strict';
              var i,
                n = r(4646).q,
                a = n.ERR_MISSING_ARGS,
                o = n.ERR_STREAM_DESTROYED;
              function f(t) {
                if (t) throw t;
              }
              function s(t) {
                t();
              }
              function h(t, e) {
                return t.pipe(e);
              }
              t.exports = function () {
                for (
                  var t, e, n = arguments.length, d = Array(n), c = 0;
                  c < n;
                  c++
                )
                  d[c] = arguments[c];
                var u =
                  (t = d).length && 'function' == typeof t[t.length - 1]
                    ? t.pop()
                    : f;
                if ((Array.isArray(d[0]) && (d = d[0]), d.length < 2))
                  throw new a('streams');
                var l = d.map(function (t, n) {
                  var a,
                    f,
                    h,
                    c,
                    p,
                    b = n < d.length - 1;
                  return (
                    (f = a =
                      function (t) {
                        e || (e = t),
                          t && l.forEach(s),
                          b || (l.forEach(s), u(e));
                      }),
                    (h = !1),
                    (a = function () {
                      h || ((h = !0), f.apply(void 0, arguments));
                    }),
                    (c = !1),
                    t.on('close', function () {
                      c = !0;
                    }),
                    void 0 === i && (i = r(9698)),
                    i(t, { readable: b, writable: n > 0 }, function (t) {
                      if (t) return a(t);
                      (c = !0), a();
                    }),
                    (p = !1),
                    function (e) {
                      if (!c && !p) {
                        if (
                          ((p = !0),
                          t.setHeader && 'function' == typeof t.abort)
                        )
                          return t.abort();
                        if ('function' == typeof t.destroy) return t.destroy();
                        a(e || new o('pipe'));
                      }
                    }
                  );
                });
                return d.reduce(h);
              };
            },
            6776: function (t, e, r) {
              'use strict';
              var i = r(4646).q.ERR_INVALID_OPT_VALUE;
              t.exports = {
                getHighWaterMark: function (t, e, r, n) {
                  var a =
                    null != e.highWaterMark ? e.highWaterMark : n ? e[r] : null;
                  if (null != a) {
                    if (!(isFinite(a) && Math.floor(a) === a) || a < 0)
                      throw new i(n ? r : 'highWaterMark', a);
                    return Math.floor(a);
                  }
                  return t.objectMode ? 16 : 16384;
                },
              };
            },
            4678: function (t, e, r) {
              t.exports = r(2781);
            },
            3726: function (t, e, r) {
              var i = r(2781);
              'disable' === n.env.READABLE_STREAM && i
                ? ((t.exports = i.Readable),
                  Object.assign(t.exports, i),
                  (t.exports.Stream = i))
                : (((e = t.exports = r(1709)).Stream = i || e),
                  (e.Readable = e),
                  (e.Writable = r(7337)),
                  (e.Duplex = r(2403)),
                  (e.Transform = r(1170)),
                  (e.PassThrough = r(7889)),
                  (e.finished = r(9698)),
                  (e.pipeline = r(8442)));
            },
            3225: function (t, e, r) {
              'use strict';
              var i = r(4300).Buffer,
                n = r(3782),
                a = r(9029),
                o = Array(16),
                f = [
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                  13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4,
                  9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8,
                  12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10,
                  14, 1, 3, 8, 11, 6, 15, 13,
                ],
                s = [
                  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                  3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7,
                  14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15,
                  0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6,
                  2, 13, 14, 0, 3, 9, 11,
                ],
                h = [
                  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6,
                  8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6,
                  7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15,
                  14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8,
                  13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                ],
                d = [
                  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13,
                  15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11,
                  8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14,
                  14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14,
                  6, 8, 13, 6, 5, 15, 13, 11, 11,
                ];
              function c() {
                a.call(this, 64),
                  (this._a = 1732584193),
                  (this._b = 4023233417),
                  (this._c = 2562383102),
                  (this._d = 271733878),
                  (this._e = 3285377520);
              }
              function u(t, e) {
                return (t << e) | (t >>> (32 - e));
              }
              n(c, a),
                (c.prototype._update = function () {
                  for (
                    var t,
                      e,
                      r,
                      i,
                      n,
                      a,
                      c,
                      l,
                      p,
                      b,
                      m,
                      v,
                      y,
                      g,
                      _,
                      w,
                      M,
                      S,
                      k,
                      E,
                      A,
                      x,
                      R,
                      I,
                      B,
                      P,
                      T,
                      C,
                      j,
                      O,
                      D,
                      N,
                      q,
                      L,
                      z,
                      U,
                      K,
                      H,
                      F,
                      V,
                      W,
                      Z,
                      X,
                      G,
                      J,
                      Y,
                      $,
                      Q,
                      tt,
                      te,
                      tr,
                      ti,
                      tn = 0;
                    tn < 16;
                    ++tn
                  )
                    o[tn] = this._block.readInt32LE(4 * tn);
                  for (
                    var ta = 0 | this._a,
                      to = 0 | this._b,
                      tf = 0 | this._c,
                      ts = 0 | this._d,
                      th = 0 | this._e,
                      td = 0 | this._a,
                      tc = 0 | this._b,
                      tu = 0 | this._c,
                      tl = 0 | this._d,
                      tp = 0 | this._e,
                      tb = 0;
                    tb < 80;
                    tb += 1
                  )
                    tb < 16
                      ? ((t = ta),
                        (e = to),
                        (r = tf),
                        (i = ts),
                        (n = th),
                        (tr =
                          (u((t + (e ^ r ^ i) + o[f[tb]] + 0) | 0, h[tb]) + n) |
                          0),
                        (a = td),
                        (c = tc),
                        (l = tu),
                        (p = tl),
                        (b = tp),
                        (ti =
                          (u(
                            (a + (c ^ (l | ~p)) + o[s[tb]] + 1352829926) | 0,
                            d[tb]
                          ) +
                            b) |
                          0))
                      : tb < 32
                        ? ((m = ta),
                          (v = to),
                          (y = tf),
                          (g = ts),
                          (_ = th),
                          (tr =
                            (u(
                              (m +
                                ((v & y) | (~v & g)) +
                                o[f[tb]] +
                                1518500249) |
                                0,
                              h[tb]
                            ) +
                              _) |
                            0),
                          (w = td),
                          (M = tc),
                          (S = tu),
                          (k = tl),
                          (E = tp),
                          (ti =
                            (u(
                              (w +
                                ((M & k) | (S & ~k)) +
                                o[s[tb]] +
                                1548603684) |
                                0,
                              d[tb]
                            ) +
                              E) |
                            0))
                        : tb < 48
                          ? ((A = ta),
                            (x = to),
                            (R = tf),
                            (I = ts),
                            (B = th),
                            (tr =
                              (u(
                                (A + ((x | ~R) ^ I) + o[f[tb]] + 1859775393) |
                                  0,
                                h[tb]
                              ) +
                                B) |
                              0),
                            (P = td),
                            (T = tc),
                            (C = tu),
                            (j = tl),
                            (O = tp),
                            (ti =
                              (u(
                                (P + ((T | ~C) ^ j) + o[s[tb]] + 1836072691) |
                                  0,
                                d[tb]
                              ) +
                                O) |
                              0))
                          : tb < 64
                            ? ((D = ta),
                              (N = to),
                              (q = tf),
                              (L = ts),
                              (z = th),
                              (tr =
                                (u(
                                  (D +
                                    ((N & L) | (q & ~L)) +
                                    o[f[tb]] +
                                    2400959708) |
                                    0,
                                  h[tb]
                                ) +
                                  z) |
                                0),
                              (U = td),
                              (K = tc),
                              (H = tu),
                              (F = tl),
                              (V = tp),
                              (ti =
                                (u(
                                  (U +
                                    ((K & H) | (~K & F)) +
                                    o[s[tb]] +
                                    2053994217) |
                                    0,
                                  d[tb]
                                ) +
                                  V) |
                                0))
                            : ((W = ta),
                              (Z = to),
                              (X = tf),
                              (G = ts),
                              (J = th),
                              (tr =
                                (u(
                                  (W + (Z ^ (X | ~G)) + o[f[tb]] + 2840853838) |
                                    0,
                                  h[tb]
                                ) +
                                  J) |
                                0),
                              (Y = td),
                              ($ = tc),
                              (Q = tu),
                              (tt = tl),
                              (te = tp),
                              (ti =
                                (u(
                                  (Y + ($ ^ Q ^ tt) + o[s[tb]] + 0) | 0,
                                  d[tb]
                                ) +
                                  te) |
                                0)),
                      (ta = th),
                      (th = ts),
                      (ts = u(tf, 10)),
                      (tf = to),
                      (to = tr),
                      (td = tp),
                      (tp = tl),
                      (tl = u(tu, 10)),
                      (tu = tc),
                      (tc = ti);
                  var tm = (this._b + tf + tl) | 0;
                  (this._b = (this._c + ts + tp) | 0),
                    (this._c = (this._d + th + td) | 0),
                    (this._d = (this._e + ta + tc) | 0),
                    (this._e = (this._a + to + tu) | 0),
                    (this._a = tm);
                }),
                (c.prototype._digest = function () {
                  (this._block[this._blockOffset++] = 128),
                    this._blockOffset > 56 &&
                      (this._block.fill(0, this._blockOffset, 64),
                      this._update(),
                      (this._blockOffset = 0)),
                    this._block.fill(0, this._blockOffset, 56),
                    this._block.writeUInt32LE(this._length[0], 56),
                    this._block.writeUInt32LE(this._length[1], 60),
                    this._update();
                  var t = i.alloc ? i.alloc(20) : new i(20);
                  return (
                    t.writeInt32LE(this._a, 0),
                    t.writeInt32LE(this._b, 4),
                    t.writeInt32LE(this._c, 8),
                    t.writeInt32LE(this._d, 12),
                    t.writeInt32LE(this._e, 16),
                    t
                  );
                }),
                (t.exports = c);
            },
            5055: function (t, e, r) {
              var i = r(4300),
                n = i.Buffer;
              function a(t, e) {
                for (var r in t) e[r] = t[r];
              }
              function o(t, e, r) {
                return n(t, e, r);
              }
              n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
                ? (t.exports = i)
                : (a(i, e), (e.Buffer = o)),
                (o.prototype = Object.create(n.prototype)),
                a(n, o),
                (o.from = function (t, e, r) {
                  if ('number' == typeof t)
                    throw TypeError('Argument must not be a number');
                  return n(t, e, r);
                }),
                (o.alloc = function (t, e, r) {
                  if ('number' != typeof t)
                    throw TypeError('Argument must be a number');
                  var i = n(t);
                  return (
                    void 0 !== e
                      ? 'string' == typeof r
                        ? i.fill(e, r)
                        : i.fill(e)
                      : i.fill(0),
                    i
                  );
                }),
                (o.allocUnsafe = function (t) {
                  if ('number' != typeof t)
                    throw TypeError('Argument must be a number');
                  return n(t);
                }),
                (o.allocUnsafeSlow = function (t) {
                  if ('number' != typeof t)
                    throw TypeError('Argument must be a number');
                  return i.SlowBuffer(t);
                });
            },
            6911: function (t, e, r) {
              /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var i =
                  r(4300),
                n = i.Buffer;
              function a(t, e) {
                for (var r in t) e[r] = t[r];
              }
              function o(t, e, r) {
                return n(t, e, r);
              }
              n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
                ? (t.exports = i)
                : (a(i, e), (e.Buffer = o)),
                (o.prototype = Object.create(n.prototype)),
                a(n, o),
                (o.from = function (t, e, r) {
                  if ('number' == typeof t)
                    throw TypeError('Argument must not be a number');
                  return n(t, e, r);
                }),
                (o.alloc = function (t, e, r) {
                  if ('number' != typeof t)
                    throw TypeError('Argument must be a number');
                  var i = n(t);
                  return (
                    void 0 !== e
                      ? 'string' == typeof r
                        ? i.fill(e, r)
                        : i.fill(e)
                      : i.fill(0),
                    i
                  );
                }),
                (o.allocUnsafe = function (t) {
                  if ('number' != typeof t)
                    throw TypeError('Argument must be a number');
                  return n(t);
                }),
                (o.allocUnsafeSlow = function (t) {
                  if ('number' != typeof t)
                    throw TypeError('Argument must be a number');
                  return i.SlowBuffer(t);
                });
            },
            2858: function (t, e, r) {
              var i = r(6911).Buffer;
              function n(t, e) {
                (this._block = i.alloc(t)),
                  (this._finalSize = e),
                  (this._blockSize = t),
                  (this._len = 0);
              }
              (n.prototype.update = function (t, e) {
                'string' == typeof t && ((e = e || 'utf8'), (t = i.from(t, e)));
                for (
                  var r = this._block,
                    n = this._blockSize,
                    a = t.length,
                    o = this._len,
                    f = 0;
                  f < a;

                ) {
                  for (
                    var s = o % n, h = Math.min(a - f, n - s), d = 0;
                    d < h;
                    d++
                  )
                    r[s + d] = t[f + d];
                  (o += h), (f += h), o % n == 0 && this._update(r);
                }
                return (this._len += a), this;
              }),
                (n.prototype.digest = function (t) {
                  var e = this._len % this._blockSize;
                  (this._block[e] = 128),
                    this._block.fill(0, e + 1),
                    e >= this._finalSize &&
                      (this._update(this._block), this._block.fill(0));
                  var r = 8 * this._len;
                  if (r <= 4294967295)
                    this._block.writeUInt32BE(r, this._blockSize - 4);
                  else {
                    var i = (4294967295 & r) >>> 0;
                    this._block.writeUInt32BE(
                      (r - i) / 4294967296,
                      this._blockSize - 8
                    ),
                      this._block.writeUInt32BE(i, this._blockSize - 4);
                  }
                  this._update(this._block);
                  var n = this._hash();
                  return t ? n.toString(t) : n;
                }),
                (n.prototype._update = function () {
                  throw Error('_update must be implemented by subclass');
                }),
                (t.exports = n);
            },
            4371: function (t, e, r) {
              var i = (t.exports = function (t) {
                var e = i[(t = t.toLowerCase())];
                if (!e)
                  throw Error(
                    t + ' is not supported (we accept pull requests)'
                  );
                return new e();
              });
              (i.sha = r(4018)),
                (i.sha1 = r(4179)),
                (i.sha224 = r(532)),
                (i.sha256 = r(1843)),
                (i.sha384 = r(7455)),
                (i.sha512 = r(9934));
            },
            4018: function (t, e, r) {
              var i = r(3782),
                n = r(2858),
                a = r(6911).Buffer,
                o = [1518500249, 1859775393, -1894007588, -899497514],
                f = Array(80);
              function s() {
                this.init(), (this._w = f), n.call(this, 64, 56);
              }
              i(s, n),
                (s.prototype.init = function () {
                  return (
                    (this._a = 1732584193),
                    (this._b = 4023233417),
                    (this._c = 2562383102),
                    (this._d = 271733878),
                    (this._e = 3285377520),
                    this
                  );
                }),
                (s.prototype._update = function (t) {
                  for (
                    var e = this._w,
                      r = 0 | this._a,
                      i = 0 | this._b,
                      n = 0 | this._c,
                      a = 0 | this._d,
                      f = 0 | this._e,
                      s = 0;
                    s < 16;
                    ++s
                  )
                    e[s] = t.readInt32BE(4 * s);
                  for (; s < 80; ++s)
                    e[s] = e[s - 3] ^ e[s - 8] ^ e[s - 14] ^ e[s - 16];
                  for (var h = 0; h < 80; ++h) {
                    var d,
                      c,
                      u,
                      l,
                      p,
                      b = ~~(h / 20),
                      m =
                        ((((d = r) << 5) | (d >>> 27)) +
                          ((c = i),
                          (u = n),
                          (l = a),
                          0 === b
                            ? (c & u) | (~c & l)
                            : 2 === b
                              ? (c & u) | (c & l) | (u & l)
                              : c ^ u ^ l) +
                          f +
                          e[h] +
                          o[b]) |
                        0;
                    (f = a),
                      (a = n),
                      (n = ((p = i) << 30) | (p >>> 2)),
                      (i = r),
                      (r = m);
                  }
                  (this._a = (r + this._a) | 0),
                    (this._b = (i + this._b) | 0),
                    (this._c = (n + this._c) | 0),
                    (this._d = (a + this._d) | 0),
                    (this._e = (f + this._e) | 0);
                }),
                (s.prototype._hash = function () {
                  var t = a.allocUnsafe(20);
                  return (
                    t.writeInt32BE(0 | this._a, 0),
                    t.writeInt32BE(0 | this._b, 4),
                    t.writeInt32BE(0 | this._c, 8),
                    t.writeInt32BE(0 | this._d, 12),
                    t.writeInt32BE(0 | this._e, 16),
                    t
                  );
                }),
                (t.exports = s);
            },
            4179: function (t, e, r) {
              var i = r(3782),
                n = r(2858),
                a = r(6911).Buffer,
                o = [1518500249, 1859775393, -1894007588, -899497514],
                f = Array(80);
              function s() {
                this.init(), (this._w = f), n.call(this, 64, 56);
              }
              i(s, n),
                (s.prototype.init = function () {
                  return (
                    (this._a = 1732584193),
                    (this._b = 4023233417),
                    (this._c = 2562383102),
                    (this._d = 271733878),
                    (this._e = 3285377520),
                    this
                  );
                }),
                (s.prototype._update = function (t) {
                  for (
                    var e = this._w,
                      r = 0 | this._a,
                      i = 0 | this._b,
                      n = 0 | this._c,
                      a = 0 | this._d,
                      f = 0 | this._e,
                      s = 0;
                    s < 16;
                    ++s
                  )
                    e[s] = t.readInt32BE(4 * s);
                  for (; s < 80; ++s)
                    e[s] =
                      ((d = e[s - 3] ^ e[s - 8] ^ e[s - 14] ^ e[s - 16]) << 1) |
                      (d >>> 31);
                  for (var h = 0; h < 80; ++h) {
                    var d,
                      c,
                      u,
                      l,
                      p,
                      b,
                      m = ~~(h / 20),
                      v =
                        ((((c = r) << 5) | (c >>> 27)) +
                          ((u = i),
                          (l = n),
                          (p = a),
                          0 === m
                            ? (u & l) | (~u & p)
                            : 2 === m
                              ? (u & l) | (u & p) | (l & p)
                              : u ^ l ^ p) +
                          f +
                          e[h] +
                          o[m]) |
                        0;
                    (f = a),
                      (a = n),
                      (n = ((b = i) << 30) | (b >>> 2)),
                      (i = r),
                      (r = v);
                  }
                  (this._a = (r + this._a) | 0),
                    (this._b = (i + this._b) | 0),
                    (this._c = (n + this._c) | 0),
                    (this._d = (a + this._d) | 0),
                    (this._e = (f + this._e) | 0);
                }),
                (s.prototype._hash = function () {
                  var t = a.allocUnsafe(20);
                  return (
                    t.writeInt32BE(0 | this._a, 0),
                    t.writeInt32BE(0 | this._b, 4),
                    t.writeInt32BE(0 | this._c, 8),
                    t.writeInt32BE(0 | this._d, 12),
                    t.writeInt32BE(0 | this._e, 16),
                    t
                  );
                }),
                (t.exports = s);
            },
            532: function (t, e, r) {
              var i = r(3782),
                n = r(1843),
                a = r(2858),
                o = r(6911).Buffer,
                f = Array(64);
              function s() {
                this.init(), (this._w = f), a.call(this, 64, 56);
              }
              i(s, n),
                (s.prototype.init = function () {
                  return (
                    (this._a = 3238371032),
                    (this._b = 914150663),
                    (this._c = 812702999),
                    (this._d = 4144912697),
                    (this._e = 4290775857),
                    (this._f = 1750603025),
                    (this._g = 1694076839),
                    (this._h = 3204075428),
                    this
                  );
                }),
                (s.prototype._hash = function () {
                  var t = o.allocUnsafe(28);
                  return (
                    t.writeInt32BE(this._a, 0),
                    t.writeInt32BE(this._b, 4),
                    t.writeInt32BE(this._c, 8),
                    t.writeInt32BE(this._d, 12),
                    t.writeInt32BE(this._e, 16),
                    t.writeInt32BE(this._f, 20),
                    t.writeInt32BE(this._g, 24),
                    t
                  );
                }),
                (t.exports = s);
            },
            1843: function (t, e, r) {
              var i = r(3782),
                n = r(2858),
                a = r(6911).Buffer,
                o = [
                  1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                  1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                  607225278, 1426881987, 1925078388, 2162078206, 2614888103,
                  3248222580, 3835390401, 4022224774, 264347078, 604807628,
                  770255983, 1249150122, 1555081692, 1996064986, 2554220882,
                  2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                  113926993, 338241895, 666307205, 773529912, 1294757372,
                  1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                  2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
                  3600352804, 4094571909, 275423344, 430227734, 506948616,
                  659060556, 883997877, 958139571, 1322822218, 1537002063,
                  1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                  2428436474, 2756734187, 3204031479, 3329325298,
                ],
                f = Array(64);
              function s() {
                this.init(), (this._w = f), n.call(this, 64, 56);
              }
              i(s, n),
                (s.prototype.init = function () {
                  return (
                    (this._a = 1779033703),
                    (this._b = 3144134277),
                    (this._c = 1013904242),
                    (this._d = 2773480762),
                    (this._e = 1359893119),
                    (this._f = 2600822924),
                    (this._g = 528734635),
                    (this._h = 1541459225),
                    this
                  );
                }),
                (s.prototype._update = function (t) {
                  for (
                    var e = this._w,
                      r = 0 | this._a,
                      i = 0 | this._b,
                      n = 0 | this._c,
                      a = 0 | this._d,
                      f = 0 | this._e,
                      s = 0 | this._f,
                      h = 0 | this._g,
                      d = 0 | this._h,
                      c = 0;
                    c < 16;
                    ++c
                  )
                    e[c] = t.readInt32BE(4 * c);
                  for (; c < 64; ++c)
                    e[c] =
                      (((((l = e[c - 2]) >>> 17) | (l << 15)) ^
                        ((l >>> 19) | (l << 13)) ^
                        (l >>> 10)) +
                        e[c - 7] +
                        ((((p = e[c - 15]) >>> 7) | (p << 25)) ^
                          ((p >>> 18) | (p << 14)) ^
                          (p >>> 3)) +
                        e[c - 16]) |
                      0;
                  for (var u = 0; u < 64; ++u) {
                    var l,
                      p,
                      b,
                      m,
                      v,
                      y,
                      g,
                      _,
                      w,
                      M =
                        (d +
                          ((((b = f) >>> 6) | (b << 26)) ^
                            ((b >>> 11) | (b << 21)) ^
                            ((b >>> 25) | (b << 7))) +
                          ((m = f), (v = s), (y = h) ^ (m & (v ^ y))) +
                          o[u] +
                          e[u]) |
                        0,
                      S =
                        (((((g = r) >>> 2) | (g << 30)) ^
                          ((g >>> 13) | (g << 19)) ^
                          ((g >>> 22) | (g << 10))) +
                          (((_ = r) & (w = i)) | (n & (_ | w)))) |
                        0;
                    (d = h),
                      (h = s),
                      (s = f),
                      (f = (a + M) | 0),
                      (a = n),
                      (n = i),
                      (i = r),
                      (r = (M + S) | 0);
                  }
                  (this._a = (r + this._a) | 0),
                    (this._b = (i + this._b) | 0),
                    (this._c = (n + this._c) | 0),
                    (this._d = (a + this._d) | 0),
                    (this._e = (f + this._e) | 0),
                    (this._f = (s + this._f) | 0),
                    (this._g = (h + this._g) | 0),
                    (this._h = (d + this._h) | 0);
                }),
                (s.prototype._hash = function () {
                  var t = a.allocUnsafe(32);
                  return (
                    t.writeInt32BE(this._a, 0),
                    t.writeInt32BE(this._b, 4),
                    t.writeInt32BE(this._c, 8),
                    t.writeInt32BE(this._d, 12),
                    t.writeInt32BE(this._e, 16),
                    t.writeInt32BE(this._f, 20),
                    t.writeInt32BE(this._g, 24),
                    t.writeInt32BE(this._h, 28),
                    t
                  );
                }),
                (t.exports = s);
            },
            7455: function (t, e, r) {
              var i = r(3782),
                n = r(9934),
                a = r(2858),
                o = r(6911).Buffer,
                f = Array(160);
              function s() {
                this.init(), (this._w = f), a.call(this, 128, 112);
              }
              i(s, n),
                (s.prototype.init = function () {
                  return (
                    (this._ah = 3418070365),
                    (this._bh = 1654270250),
                    (this._ch = 2438529370),
                    (this._dh = 355462360),
                    (this._eh = 1731405415),
                    (this._fh = 2394180231),
                    (this._gh = 3675008525),
                    (this._hh = 1203062813),
                    (this._al = 3238371032),
                    (this._bl = 914150663),
                    (this._cl = 812702999),
                    (this._dl = 4144912697),
                    (this._el = 4290775857),
                    (this._fl = 1750603025),
                    (this._gl = 1694076839),
                    (this._hl = 3204075428),
                    this
                  );
                }),
                (s.prototype._hash = function () {
                  var t = o.allocUnsafe(48);
                  function e(e, r, i) {
                    t.writeInt32BE(e, i), t.writeInt32BE(r, i + 4);
                  }
                  return (
                    e(this._ah, this._al, 0),
                    e(this._bh, this._bl, 8),
                    e(this._ch, this._cl, 16),
                    e(this._dh, this._dl, 24),
                    e(this._eh, this._el, 32),
                    e(this._fh, this._fl, 40),
                    t
                  );
                }),
                (t.exports = s);
            },
            9934: function (t, e, r) {
              var i = r(3782),
                n = r(2858),
                a = r(6911).Buffer,
                o = [
                  1116352408, 3609767458, 1899447441, 602891725, 3049323471,
                  3964484399, 3921009573, 2173295548, 961987163, 4081628472,
                  1508970993, 3053834265, 2453635748, 2937671579, 2870763221,
                  3664609560, 3624381080, 2734883394, 310598401, 1164996542,
                  607225278, 1323610764, 1426881987, 3590304994, 1925078388,
                  4068182383, 2162078206, 991336113, 2614888103, 633803317,
                  3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
                  944711139, 264347078, 2341262773, 604807628, 2007800933,
                  770255983, 1495990901, 1249150122, 1856431235, 1555081692,
                  3175218132, 1996064986, 2198950837, 2554220882, 3999719339,
                  2821834349, 766784016, 2952996808, 2566594879, 3210313671,
                  3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
                  113926993, 3758326383, 338241895, 168717936, 666307205,
                  1188179964, 773529912, 1546045734, 1294757372, 1522805485,
                  1396182291, 2643833823, 1695183700, 2343527390, 1986661051,
                  1014477480, 2177026350, 1206759142, 2456956037, 344077627,
                  2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
                  3505952657, 3345764771, 106217008, 3516065817, 3606008344,
                  3600352804, 1432725776, 4094571909, 1467031594, 275423344,
                  851169720, 430227734, 3100823752, 506948616, 1363258195,
                  659060556, 3750685593, 883997877, 3785050280, 958139571,
                  3318307427, 1322822218, 3812723403, 1537002063, 2003034995,
                  1747873779, 3602036899, 1955562222, 1575990012, 2024104815,
                  1125592928, 2227730452, 2716904306, 2361852424, 442776044,
                  2428436474, 593698344, 2756734187, 3733110249, 3204031479,
                  2999351573, 3329325298, 3815920427, 3391569614, 3928383900,
                  3515267271, 566280711, 3940187606, 3454069534, 4118630271,
                  4000239992, 116418474, 1914138554, 174292421, 2731055270,
                  289380356, 3203993006, 460393269, 320620315, 685471733,
                  587496836, 852142971, 1086792851, 1017036298, 365543100,
                  1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
                  4234509866, 1607167915, 987167468, 1816402316, 1246189591,
                ],
                f = Array(160);
              function s() {
                this.init(), (this._w = f), n.call(this, 128, 112);
              }
              function h(t, e) {
                return (
                  ((t >>> 28) | (e << 4)) ^
                  ((e >>> 2) | (t << 30)) ^
                  ((e >>> 7) | (t << 25))
                );
              }
              function d(t, e) {
                return (
                  ((t >>> 14) | (e << 18)) ^
                  ((t >>> 18) | (e << 14)) ^
                  ((e >>> 9) | (t << 23))
                );
              }
              function c(t, e) {
                return t >>> 0 < e >>> 0 ? 1 : 0;
              }
              i(s, n),
                (s.prototype.init = function () {
                  return (
                    (this._ah = 1779033703),
                    (this._bh = 3144134277),
                    (this._ch = 1013904242),
                    (this._dh = 2773480762),
                    (this._eh = 1359893119),
                    (this._fh = 2600822924),
                    (this._gh = 528734635),
                    (this._hh = 1541459225),
                    (this._al = 4089235720),
                    (this._bl = 2227873595),
                    (this._cl = 4271175723),
                    (this._dl = 1595750129),
                    (this._el = 2917565137),
                    (this._fl = 725511199),
                    (this._gl = 4215389547),
                    (this._hl = 327033209),
                    this
                  );
                }),
                (s.prototype._update = function (t) {
                  for (
                    var e = this._w,
                      r = 0 | this._ah,
                      i = 0 | this._bh,
                      n = 0 | this._ch,
                      a = 0 | this._dh,
                      f = 0 | this._eh,
                      s = 0 | this._fh,
                      u = 0 | this._gh,
                      l = 0 | this._hh,
                      p = 0 | this._al,
                      b = 0 | this._bl,
                      m = 0 | this._cl,
                      v = 0 | this._dl,
                      y = 0 | this._el,
                      g = 0 | this._fl,
                      _ = 0 | this._gl,
                      w = 0 | this._hl,
                      M = 0;
                    M < 32;
                    M += 2
                  )
                    (e[M] = t.readInt32BE(4 * M)),
                      (e[M + 1] = t.readInt32BE(4 * M + 4));
                  for (; M < 160; M += 2) {
                    var S,
                      k,
                      E,
                      A,
                      x,
                      R,
                      I,
                      B,
                      P = e[M - 30],
                      T = e[M - 30 + 1],
                      C =
                        (((S = P) >>> 1) | ((k = T) << 31)) ^
                        ((S >>> 8) | (k << 24)) ^
                        (S >>> 7),
                      j =
                        (((E = T) >>> 1) | ((A = P) << 31)) ^
                        ((E >>> 8) | (A << 24)) ^
                        ((E >>> 7) | (A << 25));
                    (P = e[M - 4]), (T = e[M - 4 + 1]);
                    var O =
                        (((x = P) >>> 19) | ((R = T) << 13)) ^
                        ((R >>> 29) | (x << 3)) ^
                        (x >>> 6),
                      D =
                        (((I = T) >>> 19) | ((B = P) << 13)) ^
                        ((B >>> 29) | (I << 3)) ^
                        ((I >>> 6) | (B << 26)),
                      N = e[M - 14],
                      q = e[M - 14 + 1],
                      L = e[M - 32],
                      z = e[M - 32 + 1],
                      U = (j + q) | 0,
                      K = (C + N + c(U, j)) | 0;
                    (K =
                      ((K = (K + O + c((U = (U + D) | 0), D)) | 0) +
                        L +
                        c((U = (U + z) | 0), z)) |
                      0),
                      (e[M] = K),
                      (e[M + 1] = U);
                  }
                  for (var H = 0; H < 160; H += 2) {
                    (K = e[H]), (U = e[H + 1]);
                    var F,
                      V,
                      W,
                      Z,
                      X,
                      G,
                      J,
                      Y,
                      $,
                      Q,
                      tt = ((F = r) & (V = i)) | (n & (F | V)),
                      te = ((W = p) & (Z = b)) | (m & (W | Z)),
                      tr = h(r, p),
                      ti = h(p, r),
                      tn = d(f, y),
                      ta = d(y, f),
                      to = o[H],
                      tf = o[H + 1],
                      ts = ((X = f), (G = s), (J = u) ^ (X & (G ^ J))),
                      th = ((Y = y), ($ = g), (Q = _) ^ (Y & ($ ^ Q))),
                      td = (w + ta) | 0,
                      tc = (l + tn + c(td, w)) | 0;
                    tc =
                      ((tc =
                        ((tc = (tc + ts + c((td = (td + th) | 0), th)) | 0) +
                          to +
                          c((td = (td + tf) | 0), tf)) |
                        0) +
                        K +
                        c((td = (td + U) | 0), U)) |
                      0;
                    var tu = (ti + te) | 0,
                      tl = (tr + tt + c(tu, ti)) | 0;
                    (l = u),
                      (w = _),
                      (u = s),
                      (_ = g),
                      (s = f),
                      (g = y),
                      (f = (a + tc + c((y = (v + td) | 0), v)) | 0),
                      (a = n),
                      (v = m),
                      (n = i),
                      (m = b),
                      (i = r),
                      (b = p),
                      (r = (tc + tl + c((p = (td + tu) | 0), td)) | 0);
                  }
                  (this._al = (this._al + p) | 0),
                    (this._bl = (this._bl + b) | 0),
                    (this._cl = (this._cl + m) | 0),
                    (this._dl = (this._dl + v) | 0),
                    (this._el = (this._el + y) | 0),
                    (this._fl = (this._fl + g) | 0),
                    (this._gl = (this._gl + _) | 0),
                    (this._hl = (this._hl + w) | 0),
                    (this._ah = (this._ah + r + c(this._al, p)) | 0),
                    (this._bh = (this._bh + i + c(this._bl, b)) | 0),
                    (this._ch = (this._ch + n + c(this._cl, m)) | 0),
                    (this._dh = (this._dh + a + c(this._dl, v)) | 0),
                    (this._eh = (this._eh + f + c(this._el, y)) | 0),
                    (this._fh = (this._fh + s + c(this._fl, g)) | 0),
                    (this._gh = (this._gh + u + c(this._gl, _)) | 0),
                    (this._hh = (this._hh + l + c(this._hl, w)) | 0);
                }),
                (s.prototype._hash = function () {
                  var t = a.allocUnsafe(64);
                  function e(e, r, i) {
                    t.writeInt32BE(e, i), t.writeInt32BE(r, i + 4);
                  }
                  return (
                    e(this._ah, this._al, 0),
                    e(this._bh, this._bl, 8),
                    e(this._ch, this._cl, 16),
                    e(this._dh, this._dl, 24),
                    e(this._eh, this._el, 32),
                    e(this._fh, this._fl, 40),
                    e(this._gh, this._gl, 48),
                    e(this._hh, this._hl, 56),
                    t
                  );
                }),
                (t.exports = s);
            },
            3704: function (t, e, r) {
              'use strict';
              var i = r(5055).Buffer,
                n =
                  i.isEncoding ||
                  function (t) {
                    switch ((t = '' + t) && t.toLowerCase()) {
                      case 'hex':
                      case 'utf8':
                      case 'utf-8':
                      case 'ascii':
                      case 'binary':
                      case 'base64':
                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                      case 'raw':
                        return !0;
                      default:
                        return !1;
                    }
                  };
              function a(t) {
                var e;
                switch (
                  ((this.encoding = (function (t) {
                    var e = (function (t) {
                      var e;
                      if (!t) return 'utf8';
                      for (;;)
                        switch (t) {
                          case 'utf8':
                          case 'utf-8':
                            return 'utf8';
                          case 'ucs2':
                          case 'ucs-2':
                          case 'utf16le':
                          case 'utf-16le':
                            return 'utf16le';
                          case 'latin1':
                          case 'binary':
                            return 'latin1';
                          case 'base64':
                          case 'ascii':
                          case 'hex':
                            return t;
                          default:
                            if (e) return;
                            (t = ('' + t).toLowerCase()), (e = !0);
                        }
                    })(t);
                    if ('string' != typeof e && (i.isEncoding === n || !n(t)))
                      throw Error('Unknown encoding: ' + t);
                    return e || t;
                  })(t)),
                  this.encoding)
                ) {
                  case 'utf16le':
                    (this.text = s), (this.end = h), (e = 4);
                    break;
                  case 'utf8':
                    (this.fillLast = f), (e = 4);
                    break;
                  case 'base64':
                    (this.text = d), (this.end = c), (e = 3);
                    break;
                  default:
                    (this.write = u), (this.end = l);
                    return;
                }
                (this.lastNeed = 0),
                  (this.lastTotal = 0),
                  (this.lastChar = i.allocUnsafe(e));
              }
              function o(t) {
                return t <= 127
                  ? 0
                  : t >> 5 == 6
                    ? 2
                    : t >> 4 == 14
                      ? 3
                      : t >> 3 == 30
                        ? 4
                        : t >> 6 == 2
                          ? -1
                          : -2;
              }
              function f(t) {
                var e = this.lastTotal - this.lastNeed,
                  r = (function (t, e, r) {
                    if ((192 & e[0]) != 128) return (t.lastNeed = 0), '�';
                    if (t.lastNeed > 1 && e.length > 1) {
                      if ((192 & e[1]) != 128) return (t.lastNeed = 1), '�';
                      if (t.lastNeed > 2 && e.length > 2 && (192 & e[2]) != 128)
                        return (t.lastNeed = 2), '�';
                    }
                  })(this, t, 0);
                return void 0 !== r
                  ? r
                  : this.lastNeed <= t.length
                    ? (t.copy(this.lastChar, e, 0, this.lastNeed),
                      this.lastChar.toString(this.encoding, 0, this.lastTotal))
                    : void (t.copy(this.lastChar, e, 0, t.length),
                      (this.lastNeed -= t.length));
              }
              function s(t, e) {
                if ((t.length - e) % 2 == 0) {
                  var r = t.toString('utf16le', e);
                  if (r) {
                    var i = r.charCodeAt(r.length - 1);
                    if (i >= 55296 && i <= 56319)
                      return (
                        (this.lastNeed = 2),
                        (this.lastTotal = 4),
                        (this.lastChar[0] = t[t.length - 2]),
                        (this.lastChar[1] = t[t.length - 1]),
                        r.slice(0, -1)
                      );
                  }
                  return r;
                }
                return (
                  (this.lastNeed = 1),
                  (this.lastTotal = 2),
                  (this.lastChar[0] = t[t.length - 1]),
                  t.toString('utf16le', e, t.length - 1)
                );
              }
              function h(t) {
                var e = t && t.length ? this.write(t) : '';
                if (this.lastNeed) {
                  var r = this.lastTotal - this.lastNeed;
                  return e + this.lastChar.toString('utf16le', 0, r);
                }
                return e;
              }
              function d(t, e) {
                var r = (t.length - e) % 3;
                return 0 === r
                  ? t.toString('base64', e)
                  : ((this.lastNeed = 3 - r),
                    (this.lastTotal = 3),
                    1 === r
                      ? (this.lastChar[0] = t[t.length - 1])
                      : ((this.lastChar[0] = t[t.length - 2]),
                        (this.lastChar[1] = t[t.length - 1])),
                    t.toString('base64', e, t.length - r));
              }
              function c(t) {
                var e = t && t.length ? this.write(t) : '';
                return this.lastNeed
                  ? e + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
                  : e;
              }
              function u(t) {
                return t.toString(this.encoding);
              }
              function l(t) {
                return t && t.length ? this.write(t) : '';
              }
              (e.s = a),
                (a.prototype.write = function (t) {
                  var e, r;
                  if (0 === t.length) return '';
                  if (this.lastNeed) {
                    if (void 0 === (e = this.fillLast(t))) return '';
                    (r = this.lastNeed), (this.lastNeed = 0);
                  } else r = 0;
                  return r < t.length
                    ? e
                      ? e + this.text(t, r)
                      : this.text(t, r)
                    : e || '';
                }),
                (a.prototype.end = function (t) {
                  var e = t && t.length ? this.write(t) : '';
                  return this.lastNeed ? e + '�' : e;
                }),
                (a.prototype.text = function (t, e) {
                  var r = (function (t, e, r) {
                    var i = e.length - 1;
                    if (i < r) return 0;
                    var n = o(e[i]);
                    return n >= 0
                      ? (n > 0 && (t.lastNeed = n - 1), n)
                      : --i < r || -2 === n
                        ? 0
                        : (n = o(e[i])) >= 0
                          ? (n > 0 && (t.lastNeed = n - 2), n)
                          : --i < r || -2 === n
                            ? 0
                            : (n = o(e[i])) >= 0
                              ? (n > 0 &&
                                  (2 === n ? (n = 0) : (t.lastNeed = n - 3)),
                                n)
                              : 0;
                  })(this, t, e);
                  if (!this.lastNeed) return t.toString('utf8', e);
                  this.lastTotal = r;
                  var i = t.length - (r - this.lastNeed);
                  return t.copy(this.lastChar, 0, i), t.toString('utf8', e, i);
                }),
                (a.prototype.fillLast = function (t) {
                  if (this.lastNeed <= t.length)
                    return (
                      t.copy(
                        this.lastChar,
                        this.lastTotal - this.lastNeed,
                        0,
                        this.lastNeed
                      ),
                      this.lastChar.toString(this.encoding, 0, this.lastTotal)
                    );
                  t.copy(
                    this.lastChar,
                    this.lastTotal - this.lastNeed,
                    0,
                    t.length
                  ),
                    (this.lastNeed -= t.length);
                });
            },
            6769: function (t) {
              t.exports = function (t, r) {
                if (e('noDeprecation')) return t;
                var i = !1;
                return function () {
                  if (!i) {
                    if (e('throwDeprecation')) throw Error(r);
                    e('traceDeprecation') ? console.trace(r) : console.warn(r),
                      (i = !0);
                  }
                  return t.apply(this, arguments);
                };
              };
              function e(t) {
                try {
                  if (!r.g.localStorage) return !1;
                } catch (t) {
                  return !1;
                }
                var e = r.g.localStorage[t];
                return null != e && 'true' === String(e).toLowerCase();
              }
            },
            4300: function (t) {
              'use strict';
              t.exports = r(30816);
            },
            6113: function (t) {
              'use strict';
              t.exports = r(34309);
            },
            2361: function (t) {
              'use strict';
              t.exports = r(41339);
            },
            2781: function (t) {
              'use strict';
              t.exports = r(4957);
            },
            1576: function (t) {
              'use strict';
              t.exports = r(34361);
            },
            3837: function (t) {
              'use strict';
              t.exports = r(74822);
            },
            6144: function (t) {
              'use strict';
              t.exports = r(69410);
            },
            5866: function (t) {
              'use strict';
              t.exports = JSON.parse(
                '{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}'
              );
            },
            2908: function (t) {
              'use strict';
              t.exports = JSON.parse(
                '{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}'
              );
            },
            9267: function (t) {
              'use strict';
              t.exports = JSON.parse(
                '{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}'
              );
            },
            7992: function (t) {
              'use strict';
              t.exports = JSON.parse(
                '{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}'
              );
            },
            2531: function (t) {
              'use strict';
              t.exports = { i8: '6.5.3' };
            },
            2510: function (t) {
              'use strict';
              t.exports = JSON.parse(
                '{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}'
              );
            },
          },
          u = {};
        function l(t) {
          var e = u[t];
          if (void 0 !== e) return e.exports;
          var r = (u[t] = { id: t, loaded: !1, exports: {} }),
            i = !0;
          try {
            c[t].call(r.exports, r, r.exports, l), (i = !1);
          } finally {
            i && delete u[t];
          }
          return (r.loaded = !0), r.exports;
        }
        (l.nmd = function (t) {
          return (t.paths = []), t.children || (t.children = []), t;
        }),
          (l.ab = '//');
        var p = {};
        (p.randomBytes = p.rng = p.pseudoRandomBytes = p.prng = l(7223)),
          (p.createHash = p.Hash = l(9739)),
          (p.createHmac = p.Hmac = l(4873)),
          (e = [
            'sha1',
            'sha224',
            'sha256',
            'sha384',
            'sha512',
            'md5',
            'rmd160',
          ].concat(Object.keys(l(9276)))),
          (p.getHashes = function () {
            return e;
          }),
          (a = l(4978)),
          (p.pbkdf2 = a.pbkdf2),
          (p.pbkdf2Sync = a.pbkdf2Sync),
          (o = l(8996)),
          (p.Cipher = o.Cipher),
          (p.createCipher = o.createCipher),
          (p.Cipheriv = o.Cipheriv),
          (p.createCipheriv = o.createCipheriv),
          (p.Decipher = o.Decipher),
          (p.createDecipher = o.createDecipher),
          (p.Decipheriv = o.Decipheriv),
          (p.createDecipheriv = o.createDecipheriv),
          (p.getCiphers = o.getCiphers),
          (p.listCiphers = o.listCiphers),
          (f = l(6587)),
          (p.DiffieHellmanGroup = f.DiffieHellmanGroup),
          (p.createDiffieHellmanGroup = f.createDiffieHellmanGroup),
          (p.getDiffieHellman = f.getDiffieHellman),
          (p.createDiffieHellman = f.createDiffieHellman),
          (p.DiffieHellman = f.DiffieHellman),
          (s = l(4078)),
          (p.createSign = s.createSign),
          (p.Sign = s.Sign),
          (p.createVerify = s.createVerify),
          (p.Verify = s.Verify),
          (p.createECDH = l(9942)),
          (h = l(9783)),
          (p.publicEncrypt = h.publicEncrypt),
          (p.privateEncrypt = h.privateEncrypt),
          (p.publicDecrypt = h.publicDecrypt),
          (p.privateDecrypt = h.privateDecrypt),
          (d = l(6445)),
          (p.randomFill = d.randomFill),
          (p.randomFillSync = d.randomFillSync),
          (p.createCredentials = function () {
            throw Error(
              'sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/crypto-browserify/crypto-browserify'
            );
          }),
          (p.constants = {
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_CHECK_P_NOT_PRIME: 1,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            DH_NOT_SUITABLE_GENERATOR: 8,
            NPN_ENABLED: 1,
            ALPN_ENABLED: 1,
            RSA_PKCS1_PADDING: 1,
            RSA_SSLV23_PADDING: 2,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_X931_PADDING: 5,
            RSA_PKCS1_PSS_PADDING: 6,
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            POINT_CONVERSION_HYBRID: 6,
          }),
          (t.exports = p);
      })();
    },
  },
]);

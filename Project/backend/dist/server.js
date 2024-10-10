"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongodb = require("mongodb");
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
_dotenv["default"].config();

// const port = process.env.PORT || 3005;
var port = process.env.PORT || 3000;

// const port = process.env.PORT || 3005;

// const port =  3001;

//create app
var app = (0, _express["default"])();

//serve static page into public directory

app.use(_express["default"].json());
var client = new _mongodb.MongoClient(process.env.MONGO_URI);
var db;
function connectDatabase() {
  return _connectDatabase.apply(this, arguments);
}
function _connectDatabase() {
  _connectDatabase = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return client.connect();
        case 3:
          db = client.db("SoundSync");
          console.log("Connected to MongoDB");
          _context23.next = 10;
          break;
        case 7:
          _context23.prev = 7;
          _context23.t0 = _context23["catch"](0);
          console.error("Failed to connect to MongoDB", _context23.t0);
        case 10:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 7]]);
  }));
  return _connectDatabase.apply(this, arguments);
}
connectDatabase();
app.listen(port, function () {
  console.log("Listening on port: localhost:".concat(port));
});

//functions
//generate user id
function generateId() {
  return _generateId.apply(this, arguments);
}
function _generateId() {
  _generateId = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
    var users, maxId;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return db.collection("users").find({}).toArray();
        case 2:
          users = _context24.sent;
          if (!(users.length === 0)) {
            _context24.next = 5;
            break;
          }
          return _context24.abrupt("return", 1);
        case 5:
          maxId = Math.max.apply(Math, _toConsumableArray(users.map(function (user) {
            return user.id;
          })));
          return _context24.abrupt("return", maxId + 1);
        case 7:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return _generateId.apply(this, arguments);
}
function generatePlaylistId() {
  return _generatePlaylistId.apply(this, arguments);
}
function _generatePlaylistId() {
  _generatePlaylistId = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
    var playlists, maxId;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return db.collection("playlists").find({}).toArray();
        case 2:
          playlists = _context25.sent;
          if (!(playlists.length === 0)) {
            _context25.next = 5;
            break;
          }
          return _context25.abrupt("return", 1);
        case 5:
          maxId = Math.max.apply(Math, _toConsumableArray(playlists.map(function (playlist) {
            return playlist.id;
          })));
          return _context25.abrupt("return", maxId + 1);
        case 7:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return _generatePlaylistId.apply(this, arguments);
}
function generateCommentId(_x) {
  return _generateCommentId.apply(this, arguments);
}
function _generateCommentId() {
  _generateCommentId = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(id) {
    var playlist, count, existingCommentIds, maxId;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.next = 2;
          return db.collection("playlists").findOne({
            id: parseInt(id)
          });
        case 2:
          playlist = _context26.sent;
          count = playlist.comments ? playlist.comments.length : 0;
          if (!(count === 0)) {
            _context26.next = 8;
            break;
          }
          return _context26.abrupt("return", 1);
        case 8:
          existingCommentIds = playlist.comments.map(function (comment) {
            return comment.id;
          });
          maxId = Math.max.apply(Math, _toConsumableArray(existingCommentIds));
          maxId++;
          return _context26.abrupt("return", maxId);
        case 12:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return _generateCommentId.apply(this, arguments);
}
function generateSongId() {
  return _generateSongId.apply(this, arguments);
}
function _generateSongId() {
  _generateSongId = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
    var songs, maxId;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.next = 2;
          return db.collection("songs").find({}).toArray();
        case 2:
          songs = _context27.sent;
          if (!(songs.length === 0)) {
            _context27.next = 5;
            break;
          }
          return _context27.abrupt("return", 1);
        case 5:
          maxId = Math.max.apply(Math, _toConsumableArray(songs.map(function (song) {
            return song.id;
          })));
          return _context27.abrupt("return", maxId + 1);
        case 7:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return _generateSongId.apply(this, arguments);
}
function existingUser(_x2, _x3) {
  return _existingUser.apply(this, arguments);
}
function _existingUser() {
  _existingUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(flag, delimiter) {
    var _existingUser4, _existingUser5;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          if (!(flag === true)) {
            _context28.next = 9;
            break;
          }
          _context28.next = 3;
          return db.collection("users").findOne({
            email: delimiter
          });
        case 3:
          _existingUser4 = _context28.sent;
          if (!_existingUser4) {
            _context28.next = 6;
            break;
          }
          return _context28.abrupt("return", true);
        case 6:
          return _context28.abrupt("return", false);
        case 9:
          _context28.next = 11;
          return db.collection("users").findOne({
            id: parseInt(delimiter)
          });
        case 11:
          _existingUser5 = _context28.sent;
          if (!_existingUser5) {
            _context28.next = 14;
            break;
          }
          return _context28.abrupt("return", true);
        case 14:
          return _context28.abrupt("return", false);
        case 15:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  }));
  return _existingUser.apply(this, arguments);
}
function existingPlaylist(_x4) {
  return _existingPlaylist.apply(this, arguments);
}
function _existingPlaylist() {
  _existingPlaylist = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(id) {
    var existingPlaylist;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.next = 2;
          return db.collection("playlists").findOne({
            id: parseInt(id)
          });
        case 2:
          existingPlaylist = _context29.sent;
          if (!existingPlaylist) {
            _context29.next = 5;
            break;
          }
          return _context29.abrupt("return", true);
        case 5:
          return _context29.abrupt("return", false);
        case 6:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }));
  return _existingPlaylist.apply(this, arguments);
}
function existingSong(_x5) {
  return _existingSong.apply(this, arguments);
}
function _existingSong() {
  _existingSong = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(id) {
    var existingSong;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.next = 2;
          return db.collection("songs").findOne({
            id: parseInt(id)
          });
        case 2:
          existingSong = _context30.sent;
          if (!existingSong) {
            _context30.next = 5;
            break;
          }
          return _context30.abrupt("return", true);
        case 5:
          return _context30.abrupt("return", false);
        case 6:
        case "end":
          return _context30.stop();
      }
    }, _callee30);
  }));
  return _existingSong.apply(this, arguments);
}
function songInPlaylist(_x6, _x7) {
  return _songInPlaylist.apply(this, arguments);
}
function _songInPlaylist() {
  _songInPlaylist = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(song, playlist) {
    var exists;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _context31.next = 2;
          return db.collection("playlists").findOne({
            id: parseInt(playlist),
            songId: parseInt(song)
          });
        case 2:
          exists = _context31.sent;
          if (!exists) {
            _context31.next = 5;
            break;
          }
          return _context31.abrupt("return", true);
        case 5:
          return _context31.abrupt("return", false);
        case 6:
        case "end":
          return _context31.stop();
      }
    }, _callee31);
  }));
  return _songInPlaylist.apply(this, arguments);
}
function existingComment(_x8, _x9) {
  return _existingComment.apply(this, arguments);
}
function _existingComment() {
  _existingComment = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(comment, playlist) {
    var exists;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.next = 2;
          return db.collection("playlists").findOne({
            id: parseInt(playlist)
          }, {
            projection: {
              comments: {
                $elemMatch: {
                  id: parseInt(comment)
                }
              }
            }
          });
        case 2:
          exists = _context32.sent;
          if (!exists) {
            _context32.next = 5;
            break;
          }
          return _context32.abrupt("return", true);
        case 5:
          return _context32.abrupt("return", false);
        case 6:
        case "end":
          return _context32.stop();
      }
    }, _callee32);
  }));
  return _existingComment.apply(this, arguments);
}
function getDate() {
  var today = new Date();
  var day = String(today.getDate()).padStart(2, '0');
  var month = String(today.getMonth() + 1).padStart(2, '0');
  var year = today.getFullYear();
  return "".concat(day, "/").concat(month, "/").concat(year);
}

//endpoints

//users
//get all users
app.get("/api/users", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return db.collection("users").find({}).toArray();
        case 3:
          users = _context.sent;
          res.status(200).json({
            status: "success",
            data: users
          });
          _context.next = 11;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error getting users: ", _context.t0);
          res.status(500).json({
            status: "failed",
            message: "Could not get all users"
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function (_x10, _x11) {
    return _ref.apply(this, arguments);
  };
}());

//add new user
app.post("/api/users/add-user", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, name, surname, email, password, _existingUser2, id, newUser, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, name = _req$body.name, surname = _req$body.surname, email = _req$body.email, password = _req$body.password; // const newUser = req.body;
          // console.log("req body: ", req.body.id);
          if (!(!name || !surname || !email || !password)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            status: "failed",
            message: "name, surname, email and password are required"
          }));
        case 4:
          _context2.next = 6;
          return db.collection("users").findOne({
            email: email
          });
        case 6:
          _existingUser2 = _context2.sent;
          if (!_existingUser2) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            status: "failed",
            message: "User with email ".concat(email, " already in use")
          }));
        case 9:
          _context2.next = 11;
          return generateId();
        case 11:
          id = _context2.sent;
          newUser = {
            id: id,
            name: name,
            surname: surname,
            email: email,
            password: password,
            profilePicture: '',
            bio: '',
            instagram: '',
            facebook: '',
            tiktok: '',
            twitter: '',
            playlists: [],
            following: [],
            followers: []
          };
          _context2.next = 15;
          return db.collection("users").insertOne(newUser);
        case 15:
          result = _context2.sent;
          res.status(201).json({
            status: "success",
            message: "User created successfully",
            data: newUser
          });
          _context2.next = 23;
          break;
        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);
          console.error("Error while creating new user: ", _context2.t0);
          res.status(500).json({
            status: "failed",
            message: "Could not create new user"
          });
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 19]]);
  }));
  return function (_x12, _x13) {
    return _ref2.apply(this, arguments);
  };
}());
// app.post("/api/users/add-user", async (req, res) => {
//     try
//     {
//         const 
//         {
//             name,
//             surname,
//             email,
//             password,
//             profilePicture,
//             bio,
//             instagram,
//             facebook,
//             tiktok,
//             twitter,
//             playlists,
//             following,
//             followers
//         } = req.body;

//         // const newUser = req.body;
//         // console.log("req body: ", req.body.id);

//         if(!name || !surname || !email || !password)
//         {
//             return res.status(400).json({ status: "failed", message: "name, surname, email and password are required" });
//         }

//         const existingUser = await db.collection("users").findOne({email});

//         if(existingUser)
//         {
//             return res.status(400).json({status: "failed", message: `User with email ${email} already in use`});
//         }

//         const id = await generateId();

//         const newUser = {
//             id,
//             name,
//             surname,
//             email,
//             password,
//             profilePicture: profilePicture || null,
//             bio: bio || null,
//             instagram: instagram || null,
//             facebook: facebook || null,
//             tiktok: tiktok || null,
//             twitter: twitter || null,
//             playlists: playlists || null,
//             following: following || null,
//             followers: followers || null
//         }

//         const result = await db.collection("users").insertOne(newUser);

//         res.status(201).json({
//             status: "success",
//             message: "User created successfully",
//             data: newUser 
//         });
//     }
//     catch(error)
//     {
//         console.error("Error while creating new user: ", error);
//         res.status(500).json({status: "failed", message: "Could not create new user"});
//     }
// });

//delete a user
app["delete"]("/api/users/delete-user/:id", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, exists, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return existingUser(false, id);
        case 4:
          exists = _context3.sent;
          if (!(exists === false)) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User with id ".concat(id, " does not exist")
          }));
        case 7:
          _context3.next = 9;
          return db.collection("users").deleteOne({
            id: parseInt(id)
          });
        case 9:
          result = _context3.sent;
          if (result.deletedCount === 1) {
            res.status(200).json({
              status: "success",
              message: "User with id ".concat(id, " deleted successfully")
            });
          } else {
            res.status(500).json({
              status: "failed",
              message: "Could not delete user with id ".concat(id)
            });
          }
          _context3.next = 17;
          break;
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](1);
          console.error("Error when deleting user: ", _context3.t0);
          res.status(500).json({
            status: "failed",
            message: "Could not delete user"
          });
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 13]]);
  }));
  return function (_x14, _x15) {
    return _ref3.apply(this, arguments);
  };
}());

//update user
app.put("/api/users/update-user/:id", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, _req$body2, name, surname, email, password, profilePicture, bio, instagram, facebook, tiktok, twitter, playlists, following, followers, exists, updated;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, surname = _req$body2.surname, email = _req$body2.email, password = _req$body2.password, profilePicture = _req$body2.profilePicture, bio = _req$body2.bio, instagram = _req$body2.instagram, facebook = _req$body2.facebook, tiktok = _req$body2.tiktok, twitter = _req$body2.twitter, playlists = _req$body2.playlists, following = _req$body2.following, followers = _req$body2.followers;
          _context4.prev = 2;
          _context4.next = 5;
          return existingUser(false, id);
        case 5:
          exists = _context4.sent;
          if (!(exists === false)) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User with id ".concat(id, " does not exist")
          }));
        case 8:
          updated = {};
          if (name) {
            updated.name = name;
          }
          if (surname) {
            updated.surname = surname;
          }
          if (email) {
            updated.email = email;
          }
          if (password) {
            updated.password = password;
          }
          if (profilePicture) {
            updated.profilePicture = profilePicture;
          }
          if (bio) {
            updated.bio = bio;
          }
          if (instagram) {
            updated.instagram = instagram;
          }
          if (facebook) {
            updated.facebook = facebook;
          }
          if (tiktok) {
            updated.tiktok = tiktok;
          }
          if (twitter) {
            updated.twitter = twitter;
          }
          if (playlists) {
            updated.playlists = playlists;
          }
          if (following) {
            updated.following = following;
          }
          if (followers) {
            updated.followers = followers;
          }
          _context4.next = 24;
          return db.collection("users").updateOne({
            id: parseInt(id)
          }, {
            $set: updated
          });
        case 24:
          res.status(200).json({
            status: "success",
            message: "user updated successfully"
          });
          _context4.next = 31;
          break;
        case 27:
          _context4.prev = 27;
          _context4.t0 = _context4["catch"](2);
          console.error("Error when updating user ", _context4.t0);
          res.status(500).json({
            status: "failed",
            message: "Could not update user"
          });
        case 31:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 27]]);
  }));
  return function (_x16, _x17) {
    return _ref4.apply(this, arguments);
  };
}());

//get user by id
app.get("/api/users/:id", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, exists, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return existingUser(false, id);
        case 4:
          exists = _context5.sent;
          if (!(exists === false)) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User with is ".concat(id, " does not exist")
          }));
        case 7:
          _context5.next = 9;
          return db.collection("users").findOne({
            id: parseInt(id)
          });
        case 9:
          user = _context5.sent;
          res.status(200).json({
            status: "success",
            data: user
          });
          _context5.next = 17;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](1);
          console.error("Error when getting user by id", _context5.t0);
          res.status(500).json({
            status: "failed",
            message: "Could not get user by id"
          });
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 13]]);
  }));
  return function (_x18, _x19) {
    return _ref5.apply(this, arguments);
  };
}());

//login
app.post("/api/users/login", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, email, password, user;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;
          _context6.prev = 1;
          if (!(!email || !password)) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            status: "failed",
            message: "email or password missing"
          }));
        case 4:
          _context6.next = 6;
          return db.collection("users").findOne({
            email: email
          });
        case 6:
          user = _context6.sent;
          if (user) {
            _context6.next = 9;
            break;
          }
          return _context6.abrupt("return", res.status(401).json({
            status: "failed",
            message: "email incorrect"
          }));
        case 9:
          if (!(password !== user.password)) {
            _context6.next = 11;
            break;
          }
          return _context6.abrupt("return", res.status(401).json({
            status: "failed",
            message: "password incorrect"
          }));
        case 11:
          res.status(200).json({
            status: "success",
            message: "login successful",
            data: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
          _context6.next = 18;
          break;
        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](1);
          console.error("Error when login ", _context6.t0);
          res.status(500).json({
            status: "failed",
            message: "could not login"
          });
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 14]]);
  }));
  return function (_x20, _x21) {
    return _ref6.apply(this, arguments);
  };
}());

//add follower
app.put("/api/users/add-follower/:id", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, followerId, userExists, followerExists, user, follower, updatedUser, followingUser;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          followerId = req.body.followerId;
          _context7.next = 5;
          return existingUser(false, id);
        case 5:
          userExists = _context7.sent;
          _context7.next = 8;
          return existingUser(false, followerId);
        case 8:
          followerExists = _context7.sent;
          if (!(userExists === false)) {
            _context7.next = 11;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User does not exist"
          }));
        case 11:
          if (!(followerExists === false)) {
            _context7.next = 13;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Follower does not exist"
          }));
        case 13:
          _context7.next = 15;
          return db.collection("users").findOne({
            id: parseInt(id),
            followers: parseInt(followerId)
          });
        case 15:
          user = _context7.sent;
          _context7.next = 18;
          return db.collection("users").findOne({
            id: parseInt(followerId),
            following: parseInt(id)
          });
        case 18:
          follower = _context7.sent;
          if (!user) {
            _context7.next = 21;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            status: "failed",
            message: "Already follows user"
          }));
        case 21:
          if (!follower) {
            _context7.next = 23;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            status: "failed",
            message: "Already follows user"
          }));
        case 23:
          _context7.next = 25;
          return db.collection("users").updateOne({
            id: parseInt(id)
          }, {
            $push: {
              followers: parseInt(followerId)
            }
          });
        case 25:
          updatedUser = _context7.sent;
          _context7.next = 28;
          return db.collection("users").updateOne({
            id: parseInt(followerId)
          }, {
            $push: {
              following: parseInt(id)
            }
          });
        case 28:
          followingUser = _context7.sent;
          return _context7.abrupt("return", res.status(200).json({
            status: "success",
            message: "Followed user"
          }));
        case 32:
          _context7.prev = 32;
          _context7.t0 = _context7["catch"](1);
          console.error("Error following user: ", _context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not follow user"
          }));
        case 36:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 32]]);
  }));
  return function (_x22, _x23) {
    return _ref7.apply(this, arguments);
  };
}());

//unfollow
app.put("/api/users/unfollow/:id", /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, followingId, userExists, followingExists, user, following, updatedUser, followingUser;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          _context8.prev = 1;
          followingId = req.body.followingId;
          _context8.next = 5;
          return existingUser(false, id);
        case 5:
          userExists = _context8.sent;
          _context8.next = 8;
          return existingUser(false, followingId);
        case 8:
          followingExists = _context8.sent;
          if (!(userExists === false)) {
            _context8.next = 11;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User does not exist"
          }));
        case 11:
          if (!(followingExists === false)) {
            _context8.next = 13;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Following does not exist"
          }));
        case 13:
          _context8.next = 15;
          return db.collection("users").findOne({
            id: parseInt(id),
            followers: parseInt(followingId)
          });
        case 15:
          user = _context8.sent;
          _context8.next = 18;
          return db.collection("users").findOne({
            id: parseInt(followingId),
            following: parseInt(id)
          });
        case 18:
          following = _context8.sent;
          if (user) {
            _context8.next = 21;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            status: "failed",
            message: "Not a following of user"
          }));
        case 21:
          if (following) {
            _context8.next = 23;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            status: "failed",
            message: "Not following user"
          }));
        case 23:
          _context8.next = 25;
          return db.collection("users").updateOne({
            id: parseInt(id)
          }, {
            $pull: {
              followers: parseInt(followingId)
            }
          });
        case 25:
          updatedUser = _context8.sent;
          _context8.next = 28;
          return db.collection("users").updateOne({
            id: parseInt(followingId)
          }, {
            $pull: {
              following: parseInt(id)
            }
          });
        case 28:
          followingUser = _context8.sent;
          return _context8.abrupt("return", res.status(200).json({
            status: "success",
            message: "unfollowed user"
          }));
        case 32:
          _context8.prev = 32;
          _context8.t0 = _context8["catch"](1);
          console.error("Error unfollowing user: ", _context8.t0);
          return _context8.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not unfollow user"
          }));
        case 36:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 32]]);
  }));
  return function (_x24, _x25) {
    return _ref8.apply(this, arguments);
  };
}());

//playlists
//create playlists

app.post("/api/playlist/create-playlist", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body4, userId, name, category, description, coverImage, hashTags, songId, comments, _existingUser3, id, newPlaylist, result, updateUsers;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$body4 = req.body, userId = _req$body4.userId, name = _req$body4.name, category = _req$body4.category, description = _req$body4.description, coverImage = _req$body4.coverImage, hashTags = _req$body4.hashTags, songId = _req$body4.songId, comments = _req$body4.comments; // console.log("userId: ", userId, "name: ", name);
          // console.log("req body: ", req.body);
          if (!(!userId || !category)) {
            _context9.next = 4;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            status: "Failed",
            message: "userId and category are required"
          }));
        case 4:
          _context9.next = 6;
          return db.collection("users").findOne({
            id: userId
          });
        case 6:
          _existingUser3 = _context9.sent;
          if (_existingUser3) {
            _context9.next = 9;
            break;
          }
          return _context9.abrupt("return", res.status(404).json({
            status: "failed",
            message: "No user with id ".concat(userId, " found")
          }));
        case 9:
          _context9.next = 11;
          return generatePlaylistId();
        case 11:
          id = _context9.sent;
          newPlaylist = {
            id: id,
            userId: userId,
            name: name || "playlist ".concat(id),
            category: category || '',
            description: description || '',
            coverImage: coverImage || '',
            hashTags: hashTags || '',
            songId: songId || [],
            comments: comments || []
          }; // console.log("newPlaylist: ", newPlaylist)
          _context9.next = 15;
          return db.collection("playlists").insertOne(newPlaylist);
        case 15:
          result = _context9.sent;
          _context9.next = 18;
          return db.collection("users").updateOne({
            id: userId
          }, {
            $push: {
              playlists: id
            }
          });
        case 18:
          updateUsers = _context9.sent;
          if (!(result.acknowledged && updateUsers.modifiedCount === 1)) {
            _context9.next = 23;
            break;
          }
          return _context9.abrupt("return", res.status(201).json({
            status: "success",
            message: "Playlist created and added to users playlists",
            data: newPlaylist
          }));
        case 23:
          return _context9.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Playlist created but could not add playlist to users playlists"
          }));
        case 24:
          _context9.next = 30;
          break;
        case 26:
          _context9.prev = 26;
          _context9.t0 = _context9["catch"](0);
          console.error("Error while creating playlist: ", _context9.t0);
          return _context9.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not create playlist"
          }));
        case 30:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 26]]);
  }));
  return function (_x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}());

//get all playlists
app.get("/api/playlists", /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var playlists;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return db.collection("playlists").find({}).toArray();
        case 3:
          playlists = _context10.sent;
          res.status(200).json({
            status: "success",
            message: "all playlists",
            data: playlists
          });
          _context10.next = 11;
          break;
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          console.error("Error getting all playlists: ", _context10.t0);
          res.status(500).json({
            status: "failed",
            message: "Could not get all playlists"
          });
        case 11:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return function (_x28, _x29) {
    return _ref10.apply(this, arguments);
  };
}());

//update playlist
app.put("/api/playlists/update-playlist/:id", /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var id, _req$body5, userId, name, category, description, coverImage, hashTags, exists, userExists, updated, playlist;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          id = req.params.id;
          _req$body5 = req.body, userId = _req$body5.userId, name = _req$body5.name, category = _req$body5.category, description = _req$body5.description, coverImage = _req$body5.coverImage, hashTags = _req$body5.hashTags;
          _context11.prev = 2;
          _context11.next = 5;
          return existingPlaylist(id);
        case 5:
          exists = _context11.sent;
          _context11.next = 8;
          return existingUser(false, userId);
        case 8:
          userExists = _context11.sent;
          if (!(exists === false)) {
            _context11.next = 11;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Could not find playlist with id ".concat(id)
          }));
        case 11:
          if (!(userExists === false)) {
            _context11.next = 13;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User does not exist"
          }));
        case 13:
          updated = {};
          if (name) {
            updated.name = name;
          }
          if (category) {
            updated.category = category;
          }
          if (description) {
            updated.description = description;
          }
          if (coverImage) {
            updated.coverImage = coverImage;
          }
          if (hashTags) {
            updated.hashTags = hashTags;
          }
          _context11.next = 21;
          return db.collection("playlists").findOne({
            id: parseInt(id)
          });
        case 21:
          playlist = _context11.sent;
          if (!(playlist.userId !== userId)) {
            _context11.next = 24;
            break;
          }
          return _context11.abrupt("return", res.status(401).json({
            status: "failed",
            message: "Only owner can edit playlist"
          }));
        case 24:
          _context11.next = 26;
          return db.collection("playlists").updateOne({
            id: parseInt(id)
          }, {
            $set: updated
          });
        case 26:
          res.status(200).json({
            status: "success",
            message: "Playlist updated"
          });
          _context11.next = 33;
          break;
        case 29:
          _context11.prev = 29;
          _context11.t0 = _context11["catch"](2);
          console.error("Error when updating playlist: ", _context11.t0);
          res.status(500).json({
            status: "failed",
            message: "Could not update playlist"
          });
        case 33:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[2, 29]]);
  }));
  return function (_x30, _x31) {
    return _ref11.apply(this, arguments);
  };
}());

//delete playlist
app["delete"]("/api/playlists/delete-playlist/:id", /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var id, userId, exists, userExists, playlist, result;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          id = req.params.id;
          userId = req.body.userId;
          _context12.prev = 2;
          _context12.next = 5;
          return existingPlaylist(id);
        case 5:
          exists = _context12.sent;
          _context12.next = 8;
          return existingUser(false, userId);
        case 8:
          userExists = _context12.sent;
          if (!(exists === false)) {
            _context12.next = 11;
            break;
          }
          return _context12.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Playlist with id ".concat(id, " does not exist")
          }));
        case 11:
          if (!(userExists === false)) {
            _context12.next = 13;
            break;
          }
          return _context12.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User does not exist"
          }));
        case 13:
          _context12.next = 15;
          return db.collection("playlists").findOne({
            id: parseInt(userId)
          });
        case 15:
          playlist = _context12.sent;
          if (!(playlist.userId !== userId)) {
            _context12.next = 18;
            break;
          }
          return _context12.abrupt("return", res.status(401).json({
            status: "failed",
            message: "Only owner can delete playlist"
          }));
        case 18:
          _context12.next = 20;
          return db.collection("playlists").deleteOne({
            id: parseInt(id)
          });
        case 20:
          result = _context12.sent;
          if (!(result.deletedCount === 1)) {
            _context12.next = 27;
            break;
          }
          _context12.next = 24;
          return db.collection("users").updateMany({}, {
            $pull: {
              playlists: parseInt(id)
            }
          });
        case 24:
          return _context12.abrupt("return", res.status(200).json({
            status: "success",
            message: "Playlist with id ".concat(id, " delete")
          }));
        case 27:
          return _context12.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not delete playlist with id ".concat(id)
          }));
        case 28:
          _context12.next = 34;
          break;
        case 30:
          _context12.prev = 30;
          _context12.t0 = _context12["catch"](2);
          console.error("Error when deleting playlist: ", _context12.t0);
          return _context12.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not delete playlist"
          }));
        case 34:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[2, 30]]);
  }));
  return function (_x32, _x33) {
    return _ref12.apply(this, arguments);
  };
}());

//get playlist by id
app.get("/api/playlists/:id", /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var id, exists, playlist;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          id = req.params.id;
          _context13.prev = 1;
          _context13.next = 4;
          return existingPlaylist(id);
        case 4:
          exists = _context13.sent;
          if (!(exists === false)) {
            _context13.next = 7;
            break;
          }
          return _context13.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Could not find playlist with id ".concat(id)
          }));
        case 7:
          _context13.next = 9;
          return db.collection("playlists").findOne({
            id: parseInt(id)
          });
        case 9:
          playlist = _context13.sent;
          return _context13.abrupt("return", res.status(200).json({
            status: "success",
            data: playlist
          }));
        case 13:
          _context13.prev = 13;
          _context13.t0 = _context13["catch"](1);
          console.error("Error when getting playlist with id: ", _context13.t0);
          return _context13.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not get playlist by id"
          }));
        case 17:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[1, 13]]);
  }));
  return function (_x34, _x35) {
    return _ref13.apply(this, arguments);
  };
}());

//add song
app.put("/api/playlists/add-song/:id", /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var id, _req$body6, songId, userId, playlistExists, songExists, userExists, exists, song, playlist, result;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          id = req.params.id;
          _req$body6 = req.body, songId = _req$body6.songId, userId = _req$body6.userId;
          _context14.prev = 2;
          _context14.next = 5;
          return existingPlaylist(id);
        case 5:
          playlistExists = _context14.sent;
          _context14.next = 8;
          return existingSong(songId);
        case 8:
          songExists = _context14.sent;
          _context14.next = 11;
          return existingUser(false, userId);
        case 11:
          userExists = _context14.sent;
          if (!(songExists === false)) {
            _context14.next = 14;
            break;
          }
          return _context14.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Song with id ".concat(songId, " does not exist")
          }));
        case 14:
          if (!(playlistExists === false)) {
            _context14.next = 16;
            break;
          }
          return _context14.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Playlist with id ".concat(id, " does not exist")
          }));
        case 16:
          if (!(userExists === false)) {
            _context14.next = 18;
            break;
          }
          return _context14.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User does not exist"
          }));
        case 18:
          _context14.next = 20;
          return songInPlaylist(songId, id);
        case 20:
          exists = _context14.sent;
          if (!(exists === true)) {
            _context14.next = 23;
            break;
          }
          return _context14.abrupt("return", res.status(409).json({
            status: "failed",
            message: "Song already in playlist"
          }));
        case 23:
          _context14.next = 25;
          return db.collection("songs").findOne({
            id: parseInt(songId),
            deleted: false
          });
        case 25:
          song = _context14.sent;
          if (song) {
            _context14.next = 28;
            break;
          }
          return _context14.abrupt("return", res.status(400).json({
            status: "failed",
            message: "Song no longer exists can not  add it"
          }));
        case 28:
          _context14.next = 30;
          return db.collection("playlists").findOne({
            id: parseInt(id)
          });
        case 30:
          playlist = _context14.sent;
          if (!(playlist.userId !== userId)) {
            _context14.next = 33;
            break;
          }
          return _context14.abrupt("return", res.status(401).json({
            status: "failed",
            message: "Only the owner can add songs to the playlist"
          }));
        case 33:
          _context14.next = 35;
          return db.collection("playlists").updateOne({
            id: parseInt(id)
          }, {
            $push: {
              songId: parseInt(songId)
            }
          });
        case 35:
          result = _context14.sent;
          if (!(result.modifiedCount === 1)) {
            _context14.next = 40;
            break;
          }
          return _context14.abrupt("return", res.status(200).json({
            status: "success",
            message: "Added song to playlist"
          }));
        case 40:
          return _context14.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not add song to playlist"
          }));
        case 41:
          _context14.next = 47;
          break;
        case 43:
          _context14.prev = 43;
          _context14.t0 = _context14["catch"](2);
          console.error("Error when adding song to playlist: ", _context14.t0);
          return _context14.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not add song to playlist"
          }));
        case 47:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[2, 43]]);
  }));
  return function (_x36, _x37) {
    return _ref14.apply(this, arguments);
  };
}());

//delete song from playlist
app.put("/api/playlists/delete-song/:id", /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var id, _req$body7, songId, userId, playlistExists, songExists, userExists, exists, playlist, result;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          id = req.params.id;
          _req$body7 = req.body, songId = _req$body7.songId, userId = _req$body7.userId;
          _context15.prev = 2;
          _context15.next = 5;
          return existingPlaylist(id);
        case 5:
          playlistExists = _context15.sent;
          _context15.next = 8;
          return existingSong(songId);
        case 8:
          songExists = _context15.sent;
          _context15.next = 11;
          return existingUser(false, userId);
        case 11:
          userExists = _context15.sent;
          if (!(songExists === false)) {
            _context15.next = 14;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Song with id ".concat(songId, " does not exist")
          }));
        case 14:
          if (!(playlistExists === false)) {
            _context15.next = 16;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Playlist with id ".concat(id, " does not exist")
          }));
        case 16:
          if (!(userExists === false)) {
            _context15.next = 18;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User does not exist"
          }));
        case 18:
          _context15.next = 20;
          return songInPlaylist(songId, id);
        case 20:
          exists = _context15.sent;
          if (!(exists === false)) {
            _context15.next = 23;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Song not in playlist"
          }));
        case 23:
          _context15.next = 25;
          return db.collection("playlists").findOne({
            id: parseInt(id)
          });
        case 25:
          playlist = _context15.sent;
          if (!(playlist.userId !== userId)) {
            _context15.next = 28;
            break;
          }
          return _context15.abrupt("return", res.status(401).json({
            status: "failed",
            message: "Only the owner can delete songs form playlist"
          }));
        case 28:
          _context15.next = 30;
          return db.collection("playlists").updateOne({
            id: parseInt(id)
          }, {
            $pull: {
              songId: parseInt(songId)
            }
          });
        case 30:
          result = _context15.sent;
          if (!(result.modifiedCount === 1)) {
            _context15.next = 35;
            break;
          }
          return _context15.abrupt("return", res.status(200).json({
            status: "success",
            message: "removed song from playlist"
          }));
        case 35:
          return _context15.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Song not found in the playlist"
          }));
        case 36:
          _context15.next = 42;
          break;
        case 38:
          _context15.prev = 38;
          _context15.t0 = _context15["catch"](2);
          console.error("Error when removing song from playlist: ", _context15.t0);
          return _context15.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not remove song from playlist"
          }));
        case 42:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[2, 38]]);
  }));
  return function (_x38, _x39) {
    return _ref15.apply(this, arguments);
  };
}());

//add comment to a playlist
app.put("/api/playlists/add-comment/:id", /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var id, _req$body8, userId, text, image, exists, commentId, newComment, result;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          id = req.params.id;
          _req$body8 = req.body, userId = _req$body8.userId, text = _req$body8.text, image = _req$body8.image;
          _context16.prev = 2;
          _context16.next = 5;
          return existingPlaylist(id);
        case 5:
          exists = _context16.sent;
          if (!(exists === false)) {
            _context16.next = 8;
            break;
          }
          return _context16.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Playlist does not exists"
          }));
        case 8:
          _context16.next = 10;
          return generateCommentId(id);
        case 10:
          commentId = _context16.sent;
          newComment = {
            id: commentId,
            userId: userId,
            text: text,
            image: image || null,
            timestamp: new Date()
          };
          _context16.next = 14;
          return db.collection("playlists").updateOne({
            id: parseInt(id)
          }, {
            $push: {
              comments: newComment
            }
          });
        case 14:
          result = _context16.sent;
          if (!(result.modifiedCount === 1)) {
            _context16.next = 19;
            break;
          }
          return _context16.abrupt("return", res.status(201).json({
            status: "success",
            message: "Comment added"
          }));
        case 19:
          return _context16.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not add comment"
          }));
        case 20:
          _context16.next = 26;
          break;
        case 22:
          _context16.prev = 22;
          _context16.t0 = _context16["catch"](2);
          console.error("Error when adding comment: ", _context16.t0);
          return _context16.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not add comment"
          }));
        case 26:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[2, 22]]);
  }));
  return function (_x40, _x41) {
    return _ref16.apply(this, arguments);
  };
}());

//delete comment
app.put("/api/playlists/delete-comment/:id", /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var id, _req$body9, commentId, userId, exists, commentExists, userExist, playlist, comment, result;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          id = req.params.id;
          _req$body9 = req.body, commentId = _req$body9.commentId, userId = _req$body9.userId; // console.log("user: ", userId);
          _context17.prev = 2;
          _context17.next = 5;
          return existingPlaylist(id);
        case 5:
          exists = _context17.sent;
          _context17.next = 8;
          return existingComment(commentId, id);
        case 8:
          commentExists = _context17.sent;
          _context17.next = 11;
          return existingUser(false, userId);
        case 11:
          userExist = _context17.sent;
          if (!(exists === false)) {
            _context17.next = 14;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Playlist does not exist"
          }));
        case 14:
          if (!(commentExists === false)) {
            _context17.next = 16;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Comment does not exist"
          }));
        case 16:
          if (!(userExist === false)) {
            _context17.next = 18;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User does not exist"
          }));
        case 18:
          _context17.next = 20;
          return db.collection("playlists").findOne({
            id: parseInt(id)
          }, {
            projection: {
              comments: {
                $elemMatch: {
                  id: parseInt(commentId)
                }
              }
            }
          });
        case 20:
          playlist = _context17.sent;
          // console.log("comment: ", comment);
          comment = playlist.comments[0];
          if (comment) {
            _context17.next = 24;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Comment does not exist"
          }));
        case 24:
          if (!(comment.userId !== userId)) {
            _context17.next = 26;
            break;
          }
          return _context17.abrupt("return", res.status(401).json({
            status: "failed",
            message: "Only owner of comment can delete comment"
          }));
        case 26:
          _context17.next = 28;
          return db.collection("playlists").updateOne({
            id: parseInt(id)
          }, {
            $pull: {
              comments: {
                id: parseInt(commentId)
              }
            }
          });
        case 28:
          result = _context17.sent;
          if (!(result.modifiedCount === 1)) {
            _context17.next = 33;
            break;
          }
          return _context17.abrupt("return", res.status(200).json({
            status: "success",
            message: "Deleted comment"
          }));
        case 33:
          return _context17.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not delete comment"
          }));
        case 34:
          _context17.next = 40;
          break;
        case 36:
          _context17.prev = 36;
          _context17.t0 = _context17["catch"](2);
          console.error("Error when deleting comment: ", _context17.t0);
          return _context17.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not delete comment"
          }));
        case 40:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[2, 36]]);
  }));
  return function (_x42, _x43) {
    return _ref17.apply(this, arguments);
  };
}());

//get all my playlists
app.get("/api/playlists/my-playlists/:id", /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var id, userExist, playlists;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          id = req.params.id;
          _context18.prev = 1;
          _context18.next = 4;
          return existingUser(false, id);
        case 4:
          userExist = _context18.sent;
          if (!(userExist === false)) {
            _context18.next = 7;
            break;
          }
          return _context18.abrupt("return", res.status(404).json({
            status: "failed",
            message: "User does not exist"
          }));
        case 7:
          _context18.next = 9;
          return db.collection("playlists").find({
            userId: id
          }).toArray();
        case 9:
          playlists = _context18.sent;
          if (!(playlists === 0)) {
            _context18.next = 12;
            break;
          }
          return _context18.abrupt("return", res.status(404).json({
            status: "failed",
            message: "No playlists found"
          }));
        case 12:
          return _context18.abrupt("return", res.status(200).json({
            status: "success",
            data: playlists
          }));
        case 15:
          _context18.prev = 15;
          _context18.t0 = _context18["catch"](1);
          console.error('Error getting all my playlists: ', _context18.t0);
          return _context18.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not get all my playlists"
          }));
        case 19:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[1, 15]]);
  }));
  return function (_x44, _x45) {
    return _ref18.apply(this, arguments);
  };
}());

//songs
//add a song
app.post("/api/songs/add-song", /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var _req$body10, title, artist, link, userId, exists, id, timestamp, spotifyPattern, match, trackId, embedUrl, newSong, result;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _req$body10 = req.body, title = _req$body10.title, artist = _req$body10.artist, link = _req$body10.link, userId = _req$body10.userId;
          if (userId) {
            _context19.next = 4;
            break;
          }
          return _context19.abrupt("return", res.status(400).json({
            status: "failed",
            message: "userId is required"
          }));
        case 4:
          if (!(!title || !artist || !link)) {
            _context19.next = 6;
            break;
          }
          return _context19.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Song title, artist name and link to song is required"
          }));
        case 6:
          _context19.next = 8;
          return existingUser(false, userId);
        case 8:
          exists = _context19.sent;
          if (!(exists === false)) {
            _context19.next = 11;
            break;
          }
          return _context19.abrupt("return", res.status(400).json({
            status: "failed",
            message: "User could not be found"
          }));
        case 11:
          _context19.next = 13;
          return generateSongId();
        case 13:
          id = _context19.sent;
          timestamp = getDate();
          spotifyPattern = /https:\/\/open\.spotify\.com\/track\/([a-zA-Z0-9]+)/;
          match = link.match(spotifyPattern);
          if (match) {
            _context19.next = 19;
            break;
          }
          return _context19.abrupt("return", res.status(400).json({
            status: "failed",
            message: "Invalid Spotify URL"
          }));
        case 19:
          trackId = match[1];
          embedUrl = "https://open.spotify.com/embed/track/".concat(trackId);
          newSong = {
            id: id,
            title: title,
            artist: artist,
            embedUrl: embedUrl,
            timestamp: timestamp,
            deleted: false,
            ownerId: userId
          };
          _context19.next = 24;
          return db.collection("songs").insertOne(newSong);
        case 24:
          result = _context19.sent;
          return _context19.abrupt("return", res.status(201).json({
            status: "success",
            message: "New song added"
          }));
        case 28:
          _context19.prev = 28;
          _context19.t0 = _context19["catch"](0);
          console.error("Error when adding new song: ", _context19.t0);
          return _context19.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not add new song"
          }));
        case 32:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 28]]);
  }));
  return function (_x46, _x47) {
    return _ref19.apply(this, arguments);
  };
}());

//delete a song
app.put("/api/songs/delete-song/:id", /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var id, userId, exists, song, result;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          id = req.params.id;
          _context20.prev = 1;
          userId = req.body.userId;
          _context20.next = 5;
          return existingUser(false, userId);
        case 5:
          exists = _context20.sent;
          if (!(exists === false)) {
            _context20.next = 8;
            break;
          }
          return _context20.abrupt("return", res.status(404).json({
            status: "failed",
            message: "user could not be found"
          }));
        case 8:
          _context20.next = 10;
          return db.collection("songs").findOne({
            id: parseInt(id)
          });
        case 10:
          song = _context20.sent;
          if (song) {
            _context20.next = 13;
            break;
          }
          return _context20.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Song could not be found"
          }));
        case 13:
          if (!(song.ownerId !== userId)) {
            _context20.next = 15;
            break;
          }
          return _context20.abrupt("return", res.status(401).json({
            status: "failed",
            message: "You are not the owner of this song you can not delete it"
          }));
        case 15:
          _context20.next = 17;
          return db.collection("songs").updateOne({
            id: parseInt(id)
          }, {
            $set: {
              deleted: true
            }
          });
        case 17:
          result = _context20.sent;
          if (!(result.modifiedCount === 1)) {
            _context20.next = 22;
            break;
          }
          return _context20.abrupt("return", res.status(200).json({
            status: "success",
            message: "Deleted song"
          }));
        case 22:
          return _context20.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not delete song"
          }));
        case 23:
          _context20.next = 29;
          break;
        case 25:
          _context20.prev = 25;
          _context20.t0 = _context20["catch"](1);
          console.error("Error while deleting song: ", _context20.t0);
          return _context20.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not delete song"
          }));
        case 29:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[1, 25]]);
  }));
  return function (_x48, _x49) {
    return _ref20.apply(this, arguments);
  };
}());

//get all songs
app.get("/api/songs", /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var songs;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return db.collection("songs").find({}).toArray();
        case 3:
          songs = _context21.sent;
          return _context21.abrupt("return", res.status(200).json({
            status: "success",
            data: songs
          }));
        case 7:
          _context21.prev = 7;
          _context21.t0 = _context21["catch"](0);
          console.error("Error getting all songs: ", _context21.t0);
          return _context21.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Could not get all songs"
          }));
        case 11:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 7]]);
  }));
  return function (_x50, _x51) {
    return _ref21.apply(this, arguments);
  };
}());

//get song by id
app.get("/api/songs/:id", /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var id, exists, song;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          id = req.params.id;
          _context22.prev = 1;
          _context22.next = 4;
          return existingSong(id);
        case 4:
          exists = _context22.sent;
          if (!(exists === false)) {
            _context22.next = 7;
            break;
          }
          return _context22.abrupt("return", res.status(404).json({
            status: "failed",
            message: "Song could not be found"
          }));
        case 7:
          _context22.next = 9;
          return db.collection("songs").findOne({
            id: id
          });
        case 9:
          song = _context22.sent;
          return _context22.abrupt("return", res.status(200).json({
            status: 'success',
            data: song
          }));
        case 13:
          _context22.prev = 13;
          _context22.t0 = _context22["catch"](1);
          console.error("Error getting song buy id: ", _context22.t0);
          return _context22.abrupt("return", (res, status(500).json({
            status: "failed",
            message: "Could not find song by id"
          })));
        case 17:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[1, 13]]);
  }));
  return function (_x52, _x53) {
    return _ref22.apply(this, arguments);
  };
}());
app.use(_express["default"]["static"]("frontend/public"));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].resolve('frontend/public/index.html'));
});

//docker build -t image .

//docker run --name express -p 3005:3000 image
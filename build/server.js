module.exports=function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/assets/",r(r.s=3)}([function(module,exports){eval('module.exports = require("mongoose");\n\n//# sourceURL=webpack:///external_%22mongoose%22?')},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(0);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TaskSchema = new _mongoose2.default.Schema({\n  user: {\n    type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: "User"\n  },\n  TaskName: String,\n  IsCompleted: Boolean\n\n});\n\nvar Task = _mongoose2.default.model("Task", TaskSchema);\nexports.default = Task;\n\n//# sourceURL=webpack:///./api/models/Task.js?')},function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _mongoose = __webpack_require__(0);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar Task = _mongoose2.default.model(\"Task\");\nvar User = _mongoose2.default.model('User');\n\nexports.get_all_tasks = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var user, user_id, tasks;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.findOne({ username: req.headers.username });\n\n          case 2:\n            user = _context.sent;\n            user_id = user._id;\n            _context.next = 6;\n            return Task.find({ user: user_id });\n\n          case 6:\n            tasks = _context.sent;\n\n\n            if (tasks) {\n              res.json({ tasks: tasks, user: user });\n            } else {\n              res.json('Failed to fetch all tasks');\n            }\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nexports.create_task = function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var user, task;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return User.findOne({ username: req.headers.username });\n\n          case 2:\n            user = _context2.sent;\n\n            req.headers.username = user.username;\n            req.body.user = user._id;\n\n            _context2.next = 7;\n            return Task.create(req.body);\n\n          case 7:\n            task = _context2.sent;\n\n\n            if (task) {\n              res.json(task);\n            } else {\n              res.json('Failed to create task');\n            }\n\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nexports.read_task = function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    var task;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return Task.findById(req.params.taskId).populate('user', '-_id -__v -password');\n\n          case 2:\n            task = _context3.sent;\n\n\n            if (task) {\n              res.json(task);\n            } else {\n              res.json('Failed to read task');\n            }\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, this);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nexports.update_task = function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n    var task, refetchTask;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return Task.findByIdAndUpdate(req.params.taskId, req.body);\n\n          case 2:\n            task = _context4.sent;\n            _context4.next = 5;\n            return Task.findById(req.params.taskId).populate('user', '-_id -__v -password');\n\n          case 5:\n            refetchTask = _context4.sent;\n\n\n            if (refetchTask) {\n              res.json(refetchTask);\n            } else {\n              res.json('Failed to update task');\n            }\n\n          case 7:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, this);\n  }));\n\n  return function (_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nexports.delete_task = function () {\n  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n    var task;\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return Task.findOneAndRemove(req.params.taskId).populate('user', '-_id -__v -password');\n\n          case 2:\n            task = _context5.sent;\n\n\n            if (task) {\n              res.json(task);\n            } else {\n              res.json('Failed to delete task');\n            }\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, this);\n  }));\n\n  return function (_x9, _x10) {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./api/controllers/TaskController.js?")},function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(4);\n\n\n//# sourceURL=webpack:///multi_./src/server.js?")},function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _mongoose = __webpack_require__(0);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _morgan = __webpack_require__(5);\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _express = __webpack_require__(6);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(7);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _helmet = __webpack_require__(8);\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _hpp = __webpack_require__(9);\n\nvar _hpp2 = _interopRequireDefault(_hpp);\n\nvar _chalk = __webpack_require__(10);\n\nvar _chalk2 = _interopRequireDefault(_chalk);\n\nvar _lodash = __webpack_require__(11);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _bodyParser = __webpack_require__(12);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _compression = __webpack_require__(13);\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cookieParser = __webpack_require__(14);\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction setupAPI() {\n  var app = (0, _express2.default)();\n  var access_port = 3000;\n\n  // Using helmet to secure Express with various HTTP headers\n  app.use((0, _helmet2.default)());\n  // Prevent HTTP parameter pollution.\n  app.use((0, _hpp2.default)());\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({\n    extended: true\n  }));\n  // Compress all requests\n  app.use((0, _compression2.default)());\n\n  // Use morgan for http request debug (only show error)\n  app.use((0, _morgan2.default)('dev'));\n\n  app.use((0, _cookieParser2.default)());\n\n  setupRoutes(app);\n  setupViews(app);\n\n  app.listen(access_port);\n  console.log('tasks manager RESTful API server started on: ' + access_port);\n}\n;\n\nfunction setupDB() {\n  var mongo_db_url = \"mongodb://notadmin:nodejs@167.71.217.118:27017/nodejs\";\n\n  _mongoose2.default.connect(mongo_db_url, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: false\n  }, function (err) {\n    if (!err) {\n      console.log(\"Connected to Mongo DB!\");\n    } else {\n      console.log('Failed to connect Mongo DB ' + err);\n    }\n  });\n\n  console.log(_mongoose2.default.models);\n  __webpack_require__(1);\n  __webpack_require__(15);\n}\n\nfunction setupRoutes(app) {\n  var TaskController = __webpack_require__(2);\n  var UserController = __webpack_require__(16);\n\n  app.route('/users').get(UserController.login);\n\n  app.route('/tasks').get(TaskController.get_all_tasks).post(TaskController.create_task);\n\n  app.route('/tasks/:taskId').get(TaskController.read_task).put(TaskController.update_task).delete(TaskController.delete_task);\n}\n\nfunction setupViews(app) {\n  app.set('views', _path2.default.join('./api/', 'views'));\n  app.set('json spaces', 40);\n  app.set('view engine', 'jade');\n}\n\nsetupDB();\nsetupAPI();\n\n//# sourceURL=webpack:///./src/server.js?")},function(module,exports){eval('module.exports = require("morgan");\n\n//# sourceURL=webpack:///external_%22morgan%22?')},function(module,exports){eval('module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?')},function(module,exports){eval('module.exports = require("path");\n\n//# sourceURL=webpack:///external_%22path%22?')},function(module,exports){eval('module.exports = require("helmet");\n\n//# sourceURL=webpack:///external_%22helmet%22?')},function(module,exports){eval('module.exports = require("hpp");\n\n//# sourceURL=webpack:///external_%22hpp%22?')},function(module,exports){eval('module.exports = require("chalk");\n\n//# sourceURL=webpack:///external_%22chalk%22?')},function(module,exports){eval('module.exports = require("lodash");\n\n//# sourceURL=webpack:///external_%22lodash%22?')},function(module,exports){eval('module.exports = require("body-parser");\n\n//# sourceURL=webpack:///external_%22body-parser%22?')},function(module,exports){eval('module.exports = require("compression");\n\n//# sourceURL=webpack:///external_%22compression%22?')},function(module,exports){eval('module.exports = require("cookie-parser");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?')},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(0);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar UserSchema = new _mongoose2.default.Schema({\n  userId: String,\n  username: String\n});\n\nvar User = _mongoose2.default.model("User", UserSchema);\nexports.default = User;\n\n//# sourceURL=webpack:///./api/models/User.js?')},function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _mongoose = __webpack_require__(0);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _Task = __webpack_require__(1);\n\nvar _Task2 = _interopRequireDefault(_Task);\n\nvar _TaskController = __webpack_require__(2);\n\nvar _TaskController2 = _interopRequireDefault(_TaskController);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }\n\nvar User = _mongoose2.default.model("User");\n\nexports.login = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var user, new_user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.findOne(req.body);\n\n          case 2:\n            user = _context.sent;\n\n            if (!user) {\n              _context.next = 9;\n              break;\n            }\n\n            req.headers.userId = user.userId;\n            req.headers.username = user.username;\n\n            _TaskController2.default.get_all_tasks(req, res);\n            _context.next = 15;\n            break;\n\n          case 9:\n            _context.next = 11;\n            return User.create(req.body);\n\n          case 11:\n            new_user = _context.sent;\n\n\n            req.headers.userId = new_user.userId;\n            req.headers.username = new_user.username;\n\n            _TaskController2.default.get_all_tasks(req, res);\n\n          case 15:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n// exports.login = function(req, res) {\n//   User.findById(req.body.user, (err, user) => {\n//     if (!err && user) {\n//       TaskController.get_all_tasks(req, res);\n//     } else {\n//       res.status(422, err);\n//     }\n//   })\n// }\n\n// exports.create_user = function(req, res) {\n//   User.create(req.body, function(err, doc){\n//     if (!err) {\n//       let return_doc = JSON.parse(JSON.stringify(doc))\n//       delete(return_doc.password)\n\n//       res.json(return_doc)\n//     } else {\n//       res.json(\'Failed to create user!\')\n//     }\n//   })\n// }\n\n//# sourceURL=webpack:///./api/controllers/UserController.js?')}]);
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf2 = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // Retrieve the text value of an array of DOM nodes
          text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i++]) {
                ret += jQuery.text(node);
              }
            }
            if (nodeType === 1 || nodeType === 11) {
              return elem.textContent;
            }
            if (nodeType === 9) {
              return elem.documentElement.textContent;
            }
            if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf2.call(arr2, elem, i);
          },
          isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var pop = arr.pop;
        var sort = arr.sort;
        var splice = arr.splice;
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        jQuery.contains = function(a, b) {
          var bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
          // IE doesn't have `contains` on SVG.
          (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        };
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }
        jQuery.escapeSelector = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        var preferredDoc = document2, pushNative = push;
        (function() {
          var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            if (nonHex) {
              return nonHex;
            }
            return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && nodeName(elem, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
          function safeActiveElement() {
            try {
              return document3.activeElement;
            } catch (err) {
            }
          }
          try {
            push2.apply(
              arr = slice.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: function(target, els) {
                pushNative.apply(target, slice.call(els));
              },
              call: function(target) {
                pushNative.apply(target, slice.call(arguments, 1));
              }
            };
          }
          function find(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          push2.call(results, elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext != context || !support.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = jQuery.escapeSelector(nid);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize2(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache2(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache2[keys.shift()];
              }
              return cache2[key + " "] = value;
            }
            return cache2;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function createInputPseudo(type) {
            return function(elem) {
              return nodeName(elem, "input") && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            documentElement2 = document3.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document3);
            matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
            if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              subWindow.addEventListener("unload", unloadHandler);
            }
            support.getById = assert(function(el) {
              documentElement2.appendChild(el).id = jQuery.expando;
              return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
            });
            support.disconnectedMatch = assert(function(el) {
              return matches.call(el, "*");
            });
            support.scope = assert(function() {
              return document3.querySelectorAll(":scope");
            });
            support.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e) {
                return true;
              }
            });
            if (support.getById) {
              Expr.filter.ID = function(id2) {
                var attrId = id2.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find.ID = function(id2, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id2);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter.ID = function(id2) {
                var attrId = id2.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find.ID = function(id2, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id2);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id2) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id2);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id2) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find.TAG = function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else {
                return context.querySelectorAll(tag);
              }
            };
            Expr.find.CLASS = function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyQSA = [];
            assert(function(el) {
              var input;
              documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              documentElement2.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
            });
            if (!support.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                  return -1;
                }
                if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf2.call(sortInput, a) - indexOf2.call(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            };
            return document3;
          }
          find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
          };
          find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return find(expr, document3, null, [elem]).length > 0;
          };
          find.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return jQuery.contains(context, elem);
          };
          find.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            if (val !== void 0) {
              return val;
            }
            return elem.getAttribute(name);
          };
          find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                splice.call(results, duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
          };
          Expr = jQuery.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              CHILD: function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    find.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  find.error(match[0]);
                }
                return match;
              },
              PSEUDO: function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr.CHILD.test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize2(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              TAG: function(nodeNameSelector) {
                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return nodeName(elem, expectedNodeName);
                };
              },
              CLASS: function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(
                    typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                  );
                });
              },
              ATTR: function(name, operator, check) {
                return function(elem) {
                  var result = find.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  if (operator === "=") {
                    return result === check;
                  }
                  if (operator === "!=") {
                    return result !== check;
                  }
                  if (operator === "^=") {
                    return check && result.indexOf(check) === 0;
                  }
                  if (operator === "*=") {
                    return check && result.indexOf(check) > -1;
                  }
                  if (operator === "$=") {
                    return check && result.slice(-check.length) === check;
                  }
                  if (operator === "~=") {
                    return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                  }
                  if (operator === "|=") {
                    return result === check || result.slice(0, check.length + 1) === check + "-";
                  }
                  return false;
                };
              },
              CHILD: function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context, xml) {
                  var cache2, outerCache, node, nodeIndex, start3, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start3 = dir2 = type === "only" && !start3 && "nextSibling";
                      }
                      return true;
                    }
                    start3 = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando] || (parent[expando] = {});
                      cache2 = outerCache[type] || [];
                      nodeIndex = cache2[0] === dirruns && cache2[1];
                      diff = nodeIndex && cache2[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start3.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          outerCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        cache2 = outerCache[type] || [];
                        nodeIndex = cache2[0] === dirruns && cache2[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start3.pop()) {
                          if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              outerCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              PSEUDO: function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf2.call(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              not: markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              has: markFunction(function(selector) {
                return function(elem) {
                  return find(selector, elem).length > 0;
                };
              }),
              contains: markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // https://www.w3.org/TR/selectors/#lang-pseudo
              lang: markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  find.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              target: function(elem) {
                var hash = window2.location && window2.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              root: function(elem) {
                return elem === documentElement2;
              },
              focus: function(elem) {
                return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function(elem) {
                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
              },
              selected: function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              empty: function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function(elem) {
                return !Expr.pseudos.empty(elem);
              },
              // Element/input types
              header: function(elem) {
                return rheader.test(elem.nodeName);
              },
              input: function(elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function(elem) {
                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
              },
              text: function(elem) {
                var attr;
                return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                // New HTML5 attribute values (e.g., "search") appear
                // with elem.type === "text"
                ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              // Position-in-collection
              first: createPositionalPseudo(function() {
                return [0];
              }),
              last: createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2;
                if (argument < 0) {
                  i2 = argument + length;
                } else if (argument > length) {
                  i2 = length;
                } else {
                  i2 = argument;
                }
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos.nth = Expr.pseudos.eq;
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          function tokenize2(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrimCSS, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            if (parseOnly) {
              return soFar.length;
            }
            return soFar ? find.error(selector) : (
              // Cache the tokens
              tokenCache(selector, groups).slice(0)
            );
          }
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      if (skip && nodeName(elem, skip)) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        outerCache[key] = newCache;
                        if (newCache[2] = matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              find(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
              if (matcher) {
                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                );
                matcher(matcherIn, matcherOut, context, xml);
              } else {
                matcherOut = matcherIn;
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2.call(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i2 > 1 && elementMatcher(matchers),
                    i2 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                    ).replace(rtrimCSS, "$1"),
                    matcher,
                    i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      push2.call(results, elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  jQuery.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          function compile(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize2(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          }
          function select(selector, context, results, seed) {
            var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize2(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find.ID(
                  token.matches[0].replace(runescape, funescape),
                  context
                ) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find2 = Expr.find[type]) {
                  if (seed = find2(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          }
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          setDocument();
          support.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          jQuery.find = find;
          jQuery.expr[":"] = jQuery.expr.pseudos;
          jQuery.unique = jQuery.uniqueSort;
          find.compile = compile;
          find.select = select;
          find.setDocument = setDocument;
          find.tokenize = tokenize2;
          find.escape = jQuery.escapeSelector;
          find.getText = jQuery.text;
          find.isXML = jQuery.isXMLDoc;
          find.selectors = jQuery.expr;
          find.support = jQuery.support;
          find.uniqueSort = jQuery.uniqueSort;
        })();
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf2.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self2 = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery.contains(self2[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery.find(selector, self2[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init2 = jQuery.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : (
              // Execute immediately if ready is not present
              selector(jQuery)
            );
          }
          return jQuery.makeArray(selector, this);
        };
        init2.prototype = jQuery.fn;
        rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to jQuery#find
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf2.call(jQuery(elem), this[0]);
            }
            return indexOf2.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self2 = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add2(args) {
                  jQuery.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self2.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add2(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self2.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self2;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(
                            e,
                            process.error
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery.Deferred.getErrorHook) {
                        process.error = jQuery.Deferred.getErrorHook();
                      } else if (jQuery.Deferred.getStackHook) {
                        process.error = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error2, asyncError) {
          if (window2.console && window2.console.warn && error2 && rerrorNames.test(error2.name)) {
            window2.console.warn(
              "jQuery.Deferred exception: " + error2.message,
              error2.stack,
              asyncError
            );
          }
        };
        jQuery.readyException = function(error2) {
          window2.setTimeout(function() {
            throw error2;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error2) {
            jQuery.readyException(error2);
          });
          return this;
        };
        jQuery.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(
                  elems[i],
                  key,
                  raw ? value : value.call(elems[i], i, fn(elems[i], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache2 = this.cache(owner);
            if (typeof data === "string") {
              cache2[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache2[camelCase(prop)] = data[prop];
              }
            }
            return cache2;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache2 = owner[this.expando];
            if (cache2 === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache2 ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache2[key[i]];
              }
            }
            if (key === void 0 || jQuery.isEmptyObject(cache2)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache2 = owner[this.expando];
            return cache2 !== void 0 && !jQuery.isEmptyObject(cache2);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next2 = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next2, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", true);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, isSetup) {
          if (!isSetup) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  this[type]();
                  result = dataPriv.get(this, type);
                  dataPriv.set(this, type, false);
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved) {
                dataPriv.set(this, type, jQuery.event.trigger(
                  saved[0],
                  saved.slice(1),
                  this
                ));
                event.stopPropagation();
                event.isImmediatePropagationStopped = returnTrue;
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          function focusMappedHandler(nativeEvent) {
            if (document2.documentMode) {
              var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
              event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
              event.isSimulated = true;
              handle(nativeEvent);
              if (event.target === event.currentTarget) {
                handle(event);
              }
            } else {
              jQuery.event.simulate(
                delegateType,
                nativeEvent.target,
                jQuery.event.fix(nativeEvent)
              );
            }
          }
          jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              var attaches;
              leverageNative(this, type, true);
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType);
                if (!attaches) {
                  this.addEventListener(delegateType, focusMappedHandler);
                }
                dataPriv.set(this, delegateType, (attaches || 0) + 1);
              } else {
                return false;
              }
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            teardown: function() {
              var attaches;
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType) - 1;
                if (!attaches) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                  dataPriv.remove(this, delegateType);
                } else {
                  dataPriv.set(this, delegateType, attaches);
                }
              } else {
                return false;
              }
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
          jQuery.event.special[delegateType] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
              if (!attaches) {
                if (document2.documentMode) {
                  this.addEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.addEventListener(type, focusMappedHandler, true);
                }
              }
              dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
              if (!attaches) {
                if (document2.documentMode) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.removeEventListener(type, focusMappedHandler, true);
                }
                dataPriv.remove(dataHolder, delegateType);
              } else {
                dataPriv.set(dataHolder, delegateType, attaches);
              }
            }
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self2 = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self2.html());
              }
              domManip(self2, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "box-sizing:content-box;border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta + marginDelta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent2) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](
                percent2,
                this.options.duration * percent2,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent2;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle2, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle2 = toggle2 || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle2) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent2 = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent2);
            }
            deferred.notifyWith(elem, [animation, percent2, remaining]);
            if (percent2 < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(
            jQuery.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer, i = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next2, hooks) {
            var timeout = window2.setTimeout(next2, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self2 = jQuery(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self2.hasClass(className)) {
                    self2.removeClass(className);
                  } else {
                    self2.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (trac-14686, trac-14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var location2 = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery.event.trigger(e, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add2) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add2(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                  v,
                  traditional,
                  add2
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add2);
            }
          } else {
            add2(prefix, obj);
          }
        }
        jQuery.param = function(a, traditional) {
          var prefix, s = [], add2 = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
              add2(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add2);
            }
          }
          return s.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location2.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location2.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location2.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error2, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error2 = response.error;
                  isSuccess = !error2;
                }
              } else {
                error2 = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error2]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error2]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        });
        jQuery.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self2 = jQuery(this), contents = self2.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self2.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see trac-8605, trac-14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery.globalEval(text);
              return text;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
          var selector, type, response, self2 = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self2.length > 0) {
            jQuery.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self2.html(selector ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status) {
              self2.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
          }
        });
        jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

  // node_modules/@rails/actioncable/src/adapters.js
  var adapters_default;
  var init_adapters = __esm({
    "node_modules/@rails/actioncable/src/adapters.js"() {
      adapters_default = {
        logger: self.console,
        WebSocket: self.WebSocket
      };
    }
  });

  // node_modules/@rails/actioncable/src/logger.js
  var logger_default;
  var init_logger = __esm({
    "node_modules/@rails/actioncable/src/logger.js"() {
      init_adapters();
      logger_default = {
        log(...messages) {
          if (this.enabled) {
            messages.push(Date.now());
            adapters_default.logger.log("[ActionCable]", ...messages);
          }
        }
      };
    }
  });

  // node_modules/@rails/actioncable/src/connection_monitor.js
  var now, secondsSince, ConnectionMonitor, connection_monitor_default;
  var init_connection_monitor = __esm({
    "node_modules/@rails/actioncable/src/connection_monitor.js"() {
      init_logger();
      now = () => (/* @__PURE__ */ new Date()).getTime();
      secondsSince = (time) => (now() - time) / 1e3;
      ConnectionMonitor = class {
        constructor(connection) {
          this.visibilityDidChange = this.visibilityDidChange.bind(this);
          this.connection = connection;
          this.reconnectAttempts = 0;
        }
        start() {
          if (!this.isRunning()) {
            this.startedAt = now();
            delete this.stoppedAt;
            this.startPolling();
            addEventListener("visibilitychange", this.visibilityDidChange);
            logger_default.log(`ConnectionMonitor started. stale threshold = ${this.constructor.staleThreshold} s`);
          }
        }
        stop() {
          if (this.isRunning()) {
            this.stoppedAt = now();
            this.stopPolling();
            removeEventListener("visibilitychange", this.visibilityDidChange);
            logger_default.log("ConnectionMonitor stopped");
          }
        }
        isRunning() {
          return this.startedAt && !this.stoppedAt;
        }
        recordPing() {
          this.pingedAt = now();
        }
        recordConnect() {
          this.reconnectAttempts = 0;
          this.recordPing();
          delete this.disconnectedAt;
          logger_default.log("ConnectionMonitor recorded connect");
        }
        recordDisconnect() {
          this.disconnectedAt = now();
          logger_default.log("ConnectionMonitor recorded disconnect");
        }
        // Private
        startPolling() {
          this.stopPolling();
          this.poll();
        }
        stopPolling() {
          clearTimeout(this.pollTimeout);
        }
        poll() {
          this.pollTimeout = setTimeout(
            () => {
              this.reconnectIfStale();
              this.poll();
            },
            this.getPollInterval()
          );
        }
        getPollInterval() {
          const { staleThreshold, reconnectionBackoffRate } = this.constructor;
          const backoff = Math.pow(1 + reconnectionBackoffRate, Math.min(this.reconnectAttempts, 10));
          const jitterMax = this.reconnectAttempts === 0 ? 1 : reconnectionBackoffRate;
          const jitter = jitterMax * Math.random();
          return staleThreshold * 1e3 * backoff * (1 + jitter);
        }
        reconnectIfStale() {
          if (this.connectionIsStale()) {
            logger_default.log(`ConnectionMonitor detected stale connection. reconnectAttempts = ${this.reconnectAttempts}, time stale = ${secondsSince(this.refreshedAt)} s, stale threshold = ${this.constructor.staleThreshold} s`);
            this.reconnectAttempts++;
            if (this.disconnectedRecently()) {
              logger_default.log(`ConnectionMonitor skipping reopening recent disconnect. time disconnected = ${secondsSince(this.disconnectedAt)} s`);
            } else {
              logger_default.log("ConnectionMonitor reopening");
              this.connection.reopen();
            }
          }
        }
        get refreshedAt() {
          return this.pingedAt ? this.pingedAt : this.startedAt;
        }
        connectionIsStale() {
          return secondsSince(this.refreshedAt) > this.constructor.staleThreshold;
        }
        disconnectedRecently() {
          return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
        }
        visibilityDidChange() {
          if (document.visibilityState === "visible") {
            setTimeout(
              () => {
                if (this.connectionIsStale() || !this.connection.isOpen()) {
                  logger_default.log(`ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = ${document.visibilityState}`);
                  this.connection.reopen();
                }
              },
              200
            );
          }
        }
      };
      ConnectionMonitor.staleThreshold = 6;
      ConnectionMonitor.reconnectionBackoffRate = 0.15;
      connection_monitor_default = ConnectionMonitor;
    }
  });

  // node_modules/@rails/actioncable/src/internal.js
  var internal_default;
  var init_internal = __esm({
    "node_modules/@rails/actioncable/src/internal.js"() {
      internal_default = {
        "message_types": {
          "welcome": "welcome",
          "disconnect": "disconnect",
          "ping": "ping",
          "confirmation": "confirm_subscription",
          "rejection": "reject_subscription"
        },
        "disconnect_reasons": {
          "unauthorized": "unauthorized",
          "invalid_request": "invalid_request",
          "server_restart": "server_restart",
          "remote": "remote"
        },
        "default_mount_path": "/cable",
        "protocols": [
          "actioncable-v1-json",
          "actioncable-unsupported"
        ]
      };
    }
  });

  // node_modules/@rails/actioncable/src/connection.js
  var message_types, protocols, supportedProtocols, indexOf, Connection, connection_default;
  var init_connection = __esm({
    "node_modules/@rails/actioncable/src/connection.js"() {
      init_adapters();
      init_connection_monitor();
      init_internal();
      init_logger();
      ({ message_types, protocols } = internal_default);
      supportedProtocols = protocols.slice(0, protocols.length - 1);
      indexOf = [].indexOf;
      Connection = class {
        constructor(consumer2) {
          this.open = this.open.bind(this);
          this.consumer = consumer2;
          this.subscriptions = this.consumer.subscriptions;
          this.monitor = new connection_monitor_default(this);
          this.disconnected = true;
        }
        send(data) {
          if (this.isOpen()) {
            this.webSocket.send(JSON.stringify(data));
            return true;
          } else {
            return false;
          }
        }
        open() {
          if (this.isActive()) {
            logger_default.log(`Attempted to open WebSocket, but existing socket is ${this.getState()}`);
            return false;
          } else {
            const socketProtocols = [...protocols, ...this.consumer.subprotocols || []];
            logger_default.log(`Opening WebSocket, current state is ${this.getState()}, subprotocols: ${socketProtocols}`);
            if (this.webSocket) {
              this.uninstallEventHandlers();
            }
            this.webSocket = new adapters_default.WebSocket(this.consumer.url, socketProtocols);
            this.installEventHandlers();
            this.monitor.start();
            return true;
          }
        }
        close({ allowReconnect } = { allowReconnect: true }) {
          if (!allowReconnect) {
            this.monitor.stop();
          }
          if (this.isOpen()) {
            return this.webSocket.close();
          }
        }
        reopen() {
          logger_default.log(`Reopening WebSocket, current state is ${this.getState()}`);
          if (this.isActive()) {
            try {
              return this.close();
            } catch (error2) {
              logger_default.log("Failed to reopen WebSocket", error2);
            } finally {
              logger_default.log(`Reopening WebSocket in ${this.constructor.reopenDelay}ms`);
              setTimeout(this.open, this.constructor.reopenDelay);
            }
          } else {
            return this.open();
          }
        }
        getProtocol() {
          if (this.webSocket) {
            return this.webSocket.protocol;
          }
        }
        isOpen() {
          return this.isState("open");
        }
        isActive() {
          return this.isState("open", "connecting");
        }
        triedToReconnect() {
          return this.monitor.reconnectAttempts > 0;
        }
        // Private
        isProtocolSupported() {
          return indexOf.call(supportedProtocols, this.getProtocol()) >= 0;
        }
        isState(...states) {
          return indexOf.call(states, this.getState()) >= 0;
        }
        getState() {
          if (this.webSocket) {
            for (let state in adapters_default.WebSocket) {
              if (adapters_default.WebSocket[state] === this.webSocket.readyState) {
                return state.toLowerCase();
              }
            }
          }
          return null;
        }
        installEventHandlers() {
          for (let eventName in this.events) {
            const handler = this.events[eventName].bind(this);
            this.webSocket[`on${eventName}`] = handler;
          }
        }
        uninstallEventHandlers() {
          for (let eventName in this.events) {
            this.webSocket[`on${eventName}`] = function() {
            };
          }
        }
      };
      Connection.reopenDelay = 500;
      Connection.prototype.events = {
        message(event) {
          if (!this.isProtocolSupported()) {
            return;
          }
          const { identifier, message, reason, reconnect, type } = JSON.parse(event.data);
          switch (type) {
            case message_types.welcome:
              if (this.triedToReconnect()) {
                this.reconnectAttempted = true;
              }
              this.monitor.recordConnect();
              return this.subscriptions.reload();
            case message_types.disconnect:
              logger_default.log(`Disconnecting. Reason: ${reason}`);
              return this.close({ allowReconnect: reconnect });
            case message_types.ping:
              return this.monitor.recordPing();
            case message_types.confirmation:
              this.subscriptions.confirmSubscription(identifier);
              if (this.reconnectAttempted) {
                this.reconnectAttempted = false;
                return this.subscriptions.notify(identifier, "connected", { reconnected: true });
              } else {
                return this.subscriptions.notify(identifier, "connected", { reconnected: false });
              }
            case message_types.rejection:
              return this.subscriptions.reject(identifier);
            default:
              return this.subscriptions.notify(identifier, "received", message);
          }
        },
        open() {
          logger_default.log(`WebSocket onopen event, using '${this.getProtocol()}' subprotocol`);
          this.disconnected = false;
          if (!this.isProtocolSupported()) {
            logger_default.log("Protocol is unsupported. Stopping monitor and disconnecting.");
            return this.close({ allowReconnect: false });
          }
        },
        close(event) {
          logger_default.log("WebSocket onclose event");
          if (this.disconnected) {
            return;
          }
          this.disconnected = true;
          this.monitor.recordDisconnect();
          return this.subscriptions.notifyAll("disconnected", { willAttemptReconnect: this.monitor.isRunning() });
        },
        error() {
          logger_default.log("WebSocket onerror event");
        }
      };
      connection_default = Connection;
    }
  });

  // node_modules/@rails/actioncable/src/subscription.js
  var extend, Subscription;
  var init_subscription = __esm({
    "node_modules/@rails/actioncable/src/subscription.js"() {
      extend = function(object, properties) {
        if (properties != null) {
          for (let key in properties) {
            const value = properties[key];
            object[key] = value;
          }
        }
        return object;
      };
      Subscription = class {
        constructor(consumer2, params = {}, mixin) {
          this.consumer = consumer2;
          this.identifier = JSON.stringify(params);
          extend(this, mixin);
        }
        // Perform a channel action with the optional data passed as an attribute
        perform(action, data = {}) {
          data.action = action;
          return this.send(data);
        }
        send(data) {
          return this.consumer.send({ command: "message", identifier: this.identifier, data: JSON.stringify(data) });
        }
        unsubscribe() {
          return this.consumer.subscriptions.remove(this);
        }
      };
    }
  });

  // node_modules/@rails/actioncable/src/subscription_guarantor.js
  var SubscriptionGuarantor, subscription_guarantor_default;
  var init_subscription_guarantor = __esm({
    "node_modules/@rails/actioncable/src/subscription_guarantor.js"() {
      init_logger();
      SubscriptionGuarantor = class {
        constructor(subscriptions) {
          this.subscriptions = subscriptions;
          this.pendingSubscriptions = [];
        }
        guarantee(subscription) {
          if (this.pendingSubscriptions.indexOf(subscription) == -1) {
            logger_default.log(`SubscriptionGuarantor guaranteeing ${subscription.identifier}`);
            this.pendingSubscriptions.push(subscription);
          } else {
            logger_default.log(`SubscriptionGuarantor already guaranteeing ${subscription.identifier}`);
          }
          this.startGuaranteeing();
        }
        forget(subscription) {
          logger_default.log(`SubscriptionGuarantor forgetting ${subscription.identifier}`);
          this.pendingSubscriptions = this.pendingSubscriptions.filter((s) => s !== subscription);
        }
        startGuaranteeing() {
          this.stopGuaranteeing();
          this.retrySubscribing();
        }
        stopGuaranteeing() {
          clearTimeout(this.retryTimeout);
        }
        retrySubscribing() {
          this.retryTimeout = setTimeout(
            () => {
              if (this.subscriptions && typeof this.subscriptions.subscribe === "function") {
                this.pendingSubscriptions.map((subscription) => {
                  logger_default.log(`SubscriptionGuarantor resubscribing ${subscription.identifier}`);
                  this.subscriptions.subscribe(subscription);
                });
              }
            },
            500
          );
        }
      };
      subscription_guarantor_default = SubscriptionGuarantor;
    }
  });

  // node_modules/@rails/actioncable/src/subscriptions.js
  var Subscriptions;
  var init_subscriptions = __esm({
    "node_modules/@rails/actioncable/src/subscriptions.js"() {
      init_subscription();
      init_subscription_guarantor();
      init_logger();
      Subscriptions = class {
        constructor(consumer2) {
          this.consumer = consumer2;
          this.guarantor = new subscription_guarantor_default(this);
          this.subscriptions = [];
        }
        create(channelName, mixin) {
          const channel = channelName;
          const params = typeof channel === "object" ? channel : { channel };
          const subscription = new Subscription(this.consumer, params, mixin);
          return this.add(subscription);
        }
        // Private
        add(subscription) {
          this.subscriptions.push(subscription);
          this.consumer.ensureActiveConnection();
          this.notify(subscription, "initialized");
          this.subscribe(subscription);
          return subscription;
        }
        remove(subscription) {
          this.forget(subscription);
          if (!this.findAll(subscription.identifier).length) {
            this.sendCommand(subscription, "unsubscribe");
          }
          return subscription;
        }
        reject(identifier) {
          return this.findAll(identifier).map((subscription) => {
            this.forget(subscription);
            this.notify(subscription, "rejected");
            return subscription;
          });
        }
        forget(subscription) {
          this.guarantor.forget(subscription);
          this.subscriptions = this.subscriptions.filter((s) => s !== subscription);
          return subscription;
        }
        findAll(identifier) {
          return this.subscriptions.filter((s) => s.identifier === identifier);
        }
        reload() {
          return this.subscriptions.map((subscription) => this.subscribe(subscription));
        }
        notifyAll(callbackName, ...args) {
          return this.subscriptions.map((subscription) => this.notify(subscription, callbackName, ...args));
        }
        notify(subscription, callbackName, ...args) {
          let subscriptions;
          if (typeof subscription === "string") {
            subscriptions = this.findAll(subscription);
          } else {
            subscriptions = [subscription];
          }
          return subscriptions.map((subscription2) => typeof subscription2[callbackName] === "function" ? subscription2[callbackName](...args) : void 0);
        }
        subscribe(subscription) {
          if (this.sendCommand(subscription, "subscribe")) {
            this.guarantor.guarantee(subscription);
          }
        }
        confirmSubscription(identifier) {
          logger_default.log(`Subscription confirmed ${identifier}`);
          this.findAll(identifier).map((subscription) => this.guarantor.forget(subscription));
        }
        sendCommand(subscription, command) {
          const { identifier } = subscription;
          return this.consumer.send({ command, identifier });
        }
      };
    }
  });

  // node_modules/@rails/actioncable/src/consumer.js
  function createWebSocketURL(url) {
    if (typeof url === "function") {
      url = url();
    }
    if (url && !/^wss?:/i.test(url)) {
      const a = document.createElement("a");
      a.href = url;
      a.href = a.href;
      a.protocol = a.protocol.replace("http", "ws");
      return a.href;
    } else {
      return url;
    }
  }
  var Consumer;
  var init_consumer = __esm({
    "node_modules/@rails/actioncable/src/consumer.js"() {
      init_connection();
      init_subscriptions();
      Consumer = class {
        constructor(url) {
          this._url = url;
          this.subscriptions = new Subscriptions(this);
          this.connection = new connection_default(this);
          this.subprotocols = [];
        }
        get url() {
          return createWebSocketURL(this._url);
        }
        send(data) {
          return this.connection.send(data);
        }
        connect() {
          return this.connection.open();
        }
        disconnect() {
          return this.connection.close({ allowReconnect: false });
        }
        ensureActiveConnection() {
          if (!this.connection.isActive()) {
            return this.connection.open();
          }
        }
        addSubProtocol(subprotocol) {
          this.subprotocols = [...this.subprotocols, subprotocol];
        }
      };
    }
  });

  // node_modules/@rails/actioncable/src/index.js
  var src_exports = {};
  __export(src_exports, {
    Connection: () => connection_default,
    ConnectionMonitor: () => connection_monitor_default,
    Consumer: () => Consumer,
    INTERNAL: () => internal_default,
    Subscription: () => Subscription,
    SubscriptionGuarantor: () => subscription_guarantor_default,
    Subscriptions: () => Subscriptions,
    adapters: () => adapters_default,
    createConsumer: () => createConsumer,
    createWebSocketURL: () => createWebSocketURL,
    getConfig: () => getConfig,
    logger: () => logger_default
  });
  function createConsumer(url = getConfig("url") || internal_default.default_mount_path) {
    return new Consumer(url);
  }
  function getConfig(name) {
    const element = document.head.querySelector(`meta[name='action-cable-${name}']`);
    if (element) {
      return element.getAttribute("content");
    }
  }
  var init_src = __esm({
    "node_modules/@rails/actioncable/src/index.js"() {
      init_connection();
      init_connection_monitor();
      init_consumer();
      init_internal();
      init_subscription();
      init_subscriptions();
      init_subscription_guarantor();
      init_adapters();
      init_logger();
    }
  });

  // app/javascript/application.js
  var import_jquery2 = __toESM(require_jquery());

  // node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js
  (function() {
    if (window.Reflect === void 0 || window.customElements === void 0 || window.customElements.polyfillWrapFlushCallback) {
      return;
    }
    const BuiltInHTMLElement = HTMLElement;
    const wrapperForTheName = {
      HTMLElement: function HTMLElement2() {
        return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
      }
    };
    window.HTMLElement = wrapperForTheName["HTMLElement"];
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
  })();
  (function(prototype) {
    if (typeof prototype.requestSubmit == "function")
      return;
    prototype.requestSubmit = function(submitter) {
      if (submitter) {
        validateSubmitter(submitter, this);
        submitter.click();
      } else {
        submitter = document.createElement("input");
        submitter.type = "submit";
        submitter.hidden = true;
        this.appendChild(submitter);
        submitter.click();
        this.removeChild(submitter);
      }
    };
    function validateSubmitter(submitter, form) {
      submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
      submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
      submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
    }
    function raise(errorConstructor, message, name) {
      throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name);
    }
  })(HTMLFormElement.prototype);
  var submittersByForm = /* @__PURE__ */ new WeakMap();
  function findSubmitterFromClickTarget(target) {
    const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
    const candidate = element ? element.closest("input, button") : null;
    return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
  }
  function clickCaptured(event) {
    const submitter = findSubmitterFromClickTarget(event.target);
    if (submitter && submitter.form) {
      submittersByForm.set(submitter.form, submitter);
    }
  }
  (function() {
    if ("submitter" in Event.prototype)
      return;
    let prototype = window.Event.prototype;
    if ("SubmitEvent" in window && /Apple Computer/.test(navigator.vendor)) {
      prototype = window.SubmitEvent.prototype;
    } else if ("SubmitEvent" in window) {
      return;
    }
    addEventListener("click", clickCaptured, true);
    Object.defineProperty(prototype, "submitter", {
      get() {
        if (this.type == "submit" && this.target instanceof HTMLFormElement) {
          return submittersByForm.get(this.target);
        }
      }
    });
  })();
  var FrameLoadingStyle;
  (function(FrameLoadingStyle2) {
    FrameLoadingStyle2["eager"] = "eager";
    FrameLoadingStyle2["lazy"] = "lazy";
  })(FrameLoadingStyle || (FrameLoadingStyle = {}));
  var FrameElement = class _FrameElement extends HTMLElement {
    static get observedAttributes() {
      return ["disabled", "complete", "loading", "src"];
    }
    constructor() {
      super();
      this.loaded = Promise.resolve();
      this.delegate = new _FrameElement.delegateConstructor(this);
    }
    connectedCallback() {
      this.delegate.connect();
    }
    disconnectedCallback() {
      this.delegate.disconnect();
    }
    reload() {
      return this.delegate.sourceURLReloaded();
    }
    attributeChangedCallback(name) {
      if (name == "loading") {
        this.delegate.loadingStyleChanged();
      } else if (name == "complete") {
        this.delegate.completeChanged();
      } else if (name == "src") {
        this.delegate.sourceURLChanged();
      } else {
        this.delegate.disabledChanged();
      }
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(value) {
      if (value) {
        this.setAttribute("src", value);
      } else {
        this.removeAttribute("src");
      }
    }
    get loading() {
      return frameLoadingStyleFromString(this.getAttribute("loading") || "");
    }
    set loading(value) {
      if (value) {
        this.setAttribute("loading", value);
      } else {
        this.removeAttribute("loading");
      }
    }
    get disabled() {
      return this.hasAttribute("disabled");
    }
    set disabled(value) {
      if (value) {
        this.setAttribute("disabled", "");
      } else {
        this.removeAttribute("disabled");
      }
    }
    get autoscroll() {
      return this.hasAttribute("autoscroll");
    }
    set autoscroll(value) {
      if (value) {
        this.setAttribute("autoscroll", "");
      } else {
        this.removeAttribute("autoscroll");
      }
    }
    get complete() {
      return !this.delegate.isLoading;
    }
    get isActive() {
      return this.ownerDocument === document && !this.isPreview;
    }
    get isPreview() {
      var _a, _b;
      return (_b = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("data-turbo-preview");
    }
  };
  function frameLoadingStyleFromString(style) {
    switch (style.toLowerCase()) {
      case "lazy":
        return FrameLoadingStyle.lazy;
      default:
        return FrameLoadingStyle.eager;
    }
  }
  function expandURL(locatable) {
    return new URL(locatable.toString(), document.baseURI);
  }
  function getAnchor(url) {
    let anchorMatch;
    if (url.hash) {
      return url.hash.slice(1);
    } else if (anchorMatch = url.href.match(/#(.*)$/)) {
      return anchorMatch[1];
    }
  }
  function getAction(form, submitter) {
    const action = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formaction")) || form.getAttribute("action") || form.action;
    return expandURL(action);
  }
  function getExtension(url) {
    return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
  }
  function isHTML(url) {
    return !!getExtension(url).match(/^(?:|\.(?:htm|html|xhtml|php))$/);
  }
  function isPrefixedBy(baseURL, url) {
    const prefix = getPrefix(url);
    return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
  }
  function locationIsVisitable(location2, rootLocation) {
    return isPrefixedBy(location2, rootLocation) && isHTML(location2);
  }
  function getRequestURL(url) {
    const anchor = getAnchor(url);
    return anchor != null ? url.href.slice(0, -(anchor.length + 1)) : url.href;
  }
  function toCacheKey(url) {
    return getRequestURL(url);
  }
  function urlsAreEqual(left, right) {
    return expandURL(left).href == expandURL(right).href;
  }
  function getPathComponents(url) {
    return url.pathname.split("/").slice(1);
  }
  function getLastPathComponent(url) {
    return getPathComponents(url).slice(-1)[0];
  }
  function getPrefix(url) {
    return addTrailingSlash(url.origin + url.pathname);
  }
  function addTrailingSlash(value) {
    return value.endsWith("/") ? value : value + "/";
  }
  var FetchResponse = class {
    constructor(response) {
      this.response = response;
    }
    get succeeded() {
      return this.response.ok;
    }
    get failed() {
      return !this.succeeded;
    }
    get clientError() {
      return this.statusCode >= 400 && this.statusCode <= 499;
    }
    get serverError() {
      return this.statusCode >= 500 && this.statusCode <= 599;
    }
    get redirected() {
      return this.response.redirected;
    }
    get location() {
      return expandURL(this.response.url);
    }
    get isHTML() {
      return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
    }
    get statusCode() {
      return this.response.status;
    }
    get contentType() {
      return this.header("Content-Type");
    }
    get responseText() {
      return this.response.clone().text();
    }
    get responseHTML() {
      if (this.isHTML) {
        return this.response.clone().text();
      } else {
        return Promise.resolve(void 0);
      }
    }
    header(name) {
      return this.response.headers.get(name);
    }
  };
  function activateScriptElement(element) {
    if (element.getAttribute("data-turbo-eval") == "false") {
      return element;
    } else {
      const createdScriptElement = document.createElement("script");
      const cspNonce = getMetaContent("csp-nonce");
      if (cspNonce) {
        createdScriptElement.nonce = cspNonce;
      }
      createdScriptElement.textContent = element.textContent;
      createdScriptElement.async = false;
      copyElementAttributes(createdScriptElement, element);
      return createdScriptElement;
    }
  }
  function copyElementAttributes(destinationElement, sourceElement) {
    for (const { name, value } of sourceElement.attributes) {
      destinationElement.setAttribute(name, value);
    }
  }
  function createDocumentFragment(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
  }
  function dispatch(eventName, { target, cancelable, detail } = {}) {
    const event = new CustomEvent(eventName, {
      cancelable,
      bubbles: true,
      composed: true,
      detail
    });
    if (target && target.isConnected) {
      target.dispatchEvent(event);
    } else {
      document.documentElement.dispatchEvent(event);
    }
    return event;
  }
  function nextAnimationFrame() {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }
  function nextEventLoopTick() {
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }
  function nextMicrotask() {
    return Promise.resolve();
  }
  function parseHTMLDocument(html = "") {
    return new DOMParser().parseFromString(html, "text/html");
  }
  function unindent(strings, ...values) {
    const lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
    const match = lines[0].match(/^\s+/);
    const indent = match ? match[0].length : 0;
    return lines.map((line) => line.slice(indent)).join("\n");
  }
  function interpolate(strings, values) {
    return strings.reduce((result, string, i) => {
      const value = values[i] == void 0 ? "" : values[i];
      return result + string + value;
    }, "");
  }
  function uuid() {
    return Array.from({ length: 36 }).map((_, i) => {
      if (i == 8 || i == 13 || i == 18 || i == 23) {
        return "-";
      } else if (i == 14) {
        return "4";
      } else if (i == 19) {
        return (Math.floor(Math.random() * 4) + 8).toString(16);
      } else {
        return Math.floor(Math.random() * 15).toString(16);
      }
    }).join("");
  }
  function getAttribute(attributeName, ...elements) {
    for (const value of elements.map((element) => element === null || element === void 0 ? void 0 : element.getAttribute(attributeName))) {
      if (typeof value == "string")
        return value;
    }
    return null;
  }
  function hasAttribute(attributeName, ...elements) {
    return elements.some((element) => element && element.hasAttribute(attributeName));
  }
  function markAsBusy(...elements) {
    for (const element of elements) {
      if (element.localName == "turbo-frame") {
        element.setAttribute("busy", "");
      }
      element.setAttribute("aria-busy", "true");
    }
  }
  function clearBusyState(...elements) {
    for (const element of elements) {
      if (element.localName == "turbo-frame") {
        element.removeAttribute("busy");
      }
      element.removeAttribute("aria-busy");
    }
  }
  function waitForLoad(element, timeoutInMilliseconds = 2e3) {
    return new Promise((resolve) => {
      const onComplete = () => {
        element.removeEventListener("error", onComplete);
        element.removeEventListener("load", onComplete);
        resolve();
      };
      element.addEventListener("load", onComplete, { once: true });
      element.addEventListener("error", onComplete, { once: true });
      setTimeout(resolve, timeoutInMilliseconds);
    });
  }
  function getHistoryMethodForAction(action) {
    switch (action) {
      case "replace":
        return history.replaceState;
      case "advance":
      case "restore":
        return history.pushState;
    }
  }
  function isAction(action) {
    return action == "advance" || action == "replace" || action == "restore";
  }
  function getVisitAction(...elements) {
    const action = getAttribute("data-turbo-action", ...elements);
    return isAction(action) ? action : null;
  }
  function getMetaElement(name) {
    return document.querySelector(`meta[name="${name}"]`);
  }
  function getMetaContent(name) {
    const element = getMetaElement(name);
    return element && element.content;
  }
  function setMetaContent(name, content) {
    let element = getMetaElement(name);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("name", name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
    return element;
  }
  function findClosestRecursively(element, selector) {
    var _a;
    if (element instanceof Element) {
      return element.closest(selector) || findClosestRecursively(element.assignedSlot || ((_a = element.getRootNode()) === null || _a === void 0 ? void 0 : _a.host), selector);
    }
  }
  var FetchMethod;
  (function(FetchMethod2) {
    FetchMethod2[FetchMethod2["get"] = 0] = "get";
    FetchMethod2[FetchMethod2["post"] = 1] = "post";
    FetchMethod2[FetchMethod2["put"] = 2] = "put";
    FetchMethod2[FetchMethod2["patch"] = 3] = "patch";
    FetchMethod2[FetchMethod2["delete"] = 4] = "delete";
  })(FetchMethod || (FetchMethod = {}));
  function fetchMethodFromString(method) {
    switch (method.toLowerCase()) {
      case "get":
        return FetchMethod.get;
      case "post":
        return FetchMethod.post;
      case "put":
        return FetchMethod.put;
      case "patch":
        return FetchMethod.patch;
      case "delete":
        return FetchMethod.delete;
    }
  }
  var FetchRequest = class {
    constructor(delegate, method, location2, body = new URLSearchParams(), target = null) {
      this.abortController = new AbortController();
      this.resolveRequestPromise = (_value) => {
      };
      this.delegate = delegate;
      this.method = method;
      this.headers = this.defaultHeaders;
      this.body = body;
      this.url = location2;
      this.target = target;
    }
    get location() {
      return this.url;
    }
    get params() {
      return this.url.searchParams;
    }
    get entries() {
      return this.body ? Array.from(this.body.entries()) : [];
    }
    cancel() {
      this.abortController.abort();
    }
    async perform() {
      const { fetchOptions } = this;
      this.delegate.prepareRequest(this);
      await this.allowRequestToBeIntercepted(fetchOptions);
      try {
        this.delegate.requestStarted(this);
        const response = await fetch(this.url.href, fetchOptions);
        return await this.receive(response);
      } catch (error2) {
        if (error2.name !== "AbortError") {
          if (this.willDelegateErrorHandling(error2)) {
            this.delegate.requestErrored(this, error2);
          }
          throw error2;
        }
      } finally {
        this.delegate.requestFinished(this);
      }
    }
    async receive(response) {
      const fetchResponse = new FetchResponse(response);
      const event = dispatch("turbo:before-fetch-response", {
        cancelable: true,
        detail: { fetchResponse },
        target: this.target
      });
      if (event.defaultPrevented) {
        this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
      } else if (fetchResponse.succeeded) {
        this.delegate.requestSucceededWithResponse(this, fetchResponse);
      } else {
        this.delegate.requestFailedWithResponse(this, fetchResponse);
      }
      return fetchResponse;
    }
    get fetchOptions() {
      var _a;
      return {
        method: FetchMethod[this.method].toUpperCase(),
        credentials: "same-origin",
        headers: this.headers,
        redirect: "follow",
        body: this.isSafe ? null : this.body,
        signal: this.abortSignal,
        referrer: (_a = this.delegate.referrer) === null || _a === void 0 ? void 0 : _a.href
      };
    }
    get defaultHeaders() {
      return {
        Accept: "text/html, application/xhtml+xml"
      };
    }
    get isSafe() {
      return this.method === FetchMethod.get;
    }
    get abortSignal() {
      return this.abortController.signal;
    }
    acceptResponseType(mimeType) {
      this.headers["Accept"] = [mimeType, this.headers["Accept"]].join(", ");
    }
    async allowRequestToBeIntercepted(fetchOptions) {
      const requestInterception = new Promise((resolve) => this.resolveRequestPromise = resolve);
      const event = dispatch("turbo:before-fetch-request", {
        cancelable: true,
        detail: {
          fetchOptions,
          url: this.url,
          resume: this.resolveRequestPromise
        },
        target: this.target
      });
      if (event.defaultPrevented)
        await requestInterception;
    }
    willDelegateErrorHandling(error2) {
      const event = dispatch("turbo:fetch-request-error", {
        target: this.target,
        cancelable: true,
        detail: { request: this, error: error2 }
      });
      return !event.defaultPrevented;
    }
  };
  var AppearanceObserver = class {
    constructor(delegate, element) {
      this.started = false;
      this.intersect = (entries) => {
        const lastEntry = entries.slice(-1)[0];
        if (lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.isIntersecting) {
          this.delegate.elementAppearedInViewport(this.element);
        }
      };
      this.delegate = delegate;
      this.element = element;
      this.intersectionObserver = new IntersectionObserver(this.intersect);
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.intersectionObserver.observe(this.element);
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.intersectionObserver.unobserve(this.element);
      }
    }
  };
  var StreamMessage = class {
    static wrap(message) {
      if (typeof message == "string") {
        return new this(createDocumentFragment(message));
      } else {
        return message;
      }
    }
    constructor(fragment) {
      this.fragment = importStreamElements(fragment);
    }
  };
  StreamMessage.contentType = "text/vnd.turbo-stream.html";
  function importStreamElements(fragment) {
    for (const element of fragment.querySelectorAll("turbo-stream")) {
      const streamElement = document.importNode(element, true);
      for (const inertScriptElement of streamElement.templateElement.content.querySelectorAll("script")) {
        inertScriptElement.replaceWith(activateScriptElement(inertScriptElement));
      }
      element.replaceWith(streamElement);
    }
    return fragment;
  }
  var FormSubmissionState;
  (function(FormSubmissionState2) {
    FormSubmissionState2[FormSubmissionState2["initialized"] = 0] = "initialized";
    FormSubmissionState2[FormSubmissionState2["requesting"] = 1] = "requesting";
    FormSubmissionState2[FormSubmissionState2["waiting"] = 2] = "waiting";
    FormSubmissionState2[FormSubmissionState2["receiving"] = 3] = "receiving";
    FormSubmissionState2[FormSubmissionState2["stopping"] = 4] = "stopping";
    FormSubmissionState2[FormSubmissionState2["stopped"] = 5] = "stopped";
  })(FormSubmissionState || (FormSubmissionState = {}));
  var FormEnctype;
  (function(FormEnctype2) {
    FormEnctype2["urlEncoded"] = "application/x-www-form-urlencoded";
    FormEnctype2["multipart"] = "multipart/form-data";
    FormEnctype2["plain"] = "text/plain";
  })(FormEnctype || (FormEnctype = {}));
  function formEnctypeFromString(encoding) {
    switch (encoding.toLowerCase()) {
      case FormEnctype.multipart:
        return FormEnctype.multipart;
      case FormEnctype.plain:
        return FormEnctype.plain;
      default:
        return FormEnctype.urlEncoded;
    }
  }
  var FormSubmission = class _FormSubmission {
    static confirmMethod(message, _element, _submitter) {
      return Promise.resolve(confirm(message));
    }
    constructor(delegate, formElement, submitter, mustRedirect = false) {
      this.state = FormSubmissionState.initialized;
      this.delegate = delegate;
      this.formElement = formElement;
      this.submitter = submitter;
      this.formData = buildFormData(formElement, submitter);
      this.location = expandURL(this.action);
      if (this.method == FetchMethod.get) {
        mergeFormDataEntries(this.location, [...this.body.entries()]);
      }
      this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body, this.formElement);
      this.mustRedirect = mustRedirect;
    }
    get method() {
      var _a;
      const method = ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "";
      return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
    }
    get action() {
      var _a;
      const formElementAction = typeof this.formElement.action === "string" ? this.formElement.action : null;
      if ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.hasAttribute("formaction")) {
        return this.submitter.getAttribute("formaction") || "";
      } else {
        return this.formElement.getAttribute("action") || formElementAction || "";
      }
    }
    get body() {
      if (this.enctype == FormEnctype.urlEncoded || this.method == FetchMethod.get) {
        return new URLSearchParams(this.stringFormData);
      } else {
        return this.formData;
      }
    }
    get enctype() {
      var _a;
      return formEnctypeFromString(((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formenctype")) || this.formElement.enctype);
    }
    get isSafe() {
      return this.fetchRequest.isSafe;
    }
    get stringFormData() {
      return [...this.formData].reduce((entries, [name, value]) => {
        return entries.concat(typeof value == "string" ? [[name, value]] : []);
      }, []);
    }
    async start() {
      const { initialized, requesting } = FormSubmissionState;
      const confirmationMessage = getAttribute("data-turbo-confirm", this.submitter, this.formElement);
      if (typeof confirmationMessage === "string") {
        const answer = await _FormSubmission.confirmMethod(confirmationMessage, this.formElement, this.submitter);
        if (!answer) {
          return;
        }
      }
      if (this.state == initialized) {
        this.state = requesting;
        return this.fetchRequest.perform();
      }
    }
    stop() {
      const { stopping, stopped } = FormSubmissionState;
      if (this.state != stopping && this.state != stopped) {
        this.state = stopping;
        this.fetchRequest.cancel();
        return true;
      }
    }
    prepareRequest(request) {
      if (!request.isSafe) {
        const token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");
        if (token) {
          request.headers["X-CSRF-Token"] = token;
        }
      }
      if (this.requestAcceptsTurboStreamResponse(request)) {
        request.acceptResponseType(StreamMessage.contentType);
      }
    }
    requestStarted(_request) {
      var _a;
      this.state = FormSubmissionState.waiting;
      (_a = this.submitter) === null || _a === void 0 ? void 0 : _a.setAttribute("disabled", "");
      this.setSubmitsWith();
      dispatch("turbo:submit-start", {
        target: this.formElement,
        detail: { formSubmission: this }
      });
      this.delegate.formSubmissionStarted(this);
    }
    requestPreventedHandlingResponse(request, response) {
      this.result = { success: response.succeeded, fetchResponse: response };
    }
    requestSucceededWithResponse(request, response) {
      if (response.clientError || response.serverError) {
        this.delegate.formSubmissionFailedWithResponse(this, response);
      } else if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
        const error2 = new Error("Form responses must redirect to another location");
        this.delegate.formSubmissionErrored(this, error2);
      } else {
        this.state = FormSubmissionState.receiving;
        this.result = { success: true, fetchResponse: response };
        this.delegate.formSubmissionSucceededWithResponse(this, response);
      }
    }
    requestFailedWithResponse(request, response) {
      this.result = { success: false, fetchResponse: response };
      this.delegate.formSubmissionFailedWithResponse(this, response);
    }
    requestErrored(request, error2) {
      this.result = { success: false, error: error2 };
      this.delegate.formSubmissionErrored(this, error2);
    }
    requestFinished(_request) {
      var _a;
      this.state = FormSubmissionState.stopped;
      (_a = this.submitter) === null || _a === void 0 ? void 0 : _a.removeAttribute("disabled");
      this.resetSubmitterText();
      dispatch("turbo:submit-end", {
        target: this.formElement,
        detail: Object.assign({ formSubmission: this }, this.result)
      });
      this.delegate.formSubmissionFinished(this);
    }
    setSubmitsWith() {
      if (!this.submitter || !this.submitsWith)
        return;
      if (this.submitter.matches("button")) {
        this.originalSubmitText = this.submitter.innerHTML;
        this.submitter.innerHTML = this.submitsWith;
      } else if (this.submitter.matches("input")) {
        const input = this.submitter;
        this.originalSubmitText = input.value;
        input.value = this.submitsWith;
      }
    }
    resetSubmitterText() {
      if (!this.submitter || !this.originalSubmitText)
        return;
      if (this.submitter.matches("button")) {
        this.submitter.innerHTML = this.originalSubmitText;
      } else if (this.submitter.matches("input")) {
        const input = this.submitter;
        input.value = this.originalSubmitText;
      }
    }
    requestMustRedirect(request) {
      return !request.isSafe && this.mustRedirect;
    }
    requestAcceptsTurboStreamResponse(request) {
      return !request.isSafe || hasAttribute("data-turbo-stream", this.submitter, this.formElement);
    }
    get submitsWith() {
      var _a;
      return (_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("data-turbo-submits-with");
    }
  };
  function buildFormData(formElement, submitter) {
    const formData = new FormData(formElement);
    const name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
    const value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");
    if (name) {
      formData.append(name, value || "");
    }
    return formData;
  }
  function getCookieValue(cookieName) {
    if (cookieName != null) {
      const cookies = document.cookie ? document.cookie.split("; ") : [];
      const cookie = cookies.find((cookie2) => cookie2.startsWith(cookieName));
      if (cookie) {
        const value = cookie.split("=").slice(1).join("=");
        return value ? decodeURIComponent(value) : void 0;
      }
    }
  }
  function responseSucceededWithoutRedirect(response) {
    return response.statusCode == 200 && !response.redirected;
  }
  function mergeFormDataEntries(url, entries) {
    const searchParams = new URLSearchParams();
    for (const [name, value] of entries) {
      if (value instanceof File)
        continue;
      searchParams.append(name, value);
    }
    url.search = searchParams.toString();
    return url;
  }
  var Snapshot = class {
    constructor(element) {
      this.element = element;
    }
    get activeElement() {
      return this.element.ownerDocument.activeElement;
    }
    get children() {
      return [...this.element.children];
    }
    hasAnchor(anchor) {
      return this.getElementForAnchor(anchor) != null;
    }
    getElementForAnchor(anchor) {
      return anchor ? this.element.querySelector(`[id='${anchor}'], a[name='${anchor}']`) : null;
    }
    get isConnected() {
      return this.element.isConnected;
    }
    get firstAutofocusableElement() {
      const inertDisabledOrHidden = "[inert], :disabled, [hidden], details:not([open]), dialog:not([open])";
      for (const element of this.element.querySelectorAll("[autofocus]")) {
        if (element.closest(inertDisabledOrHidden) == null)
          return element;
        else
          continue;
      }
      return null;
    }
    get permanentElements() {
      return queryPermanentElementsAll(this.element);
    }
    getPermanentElementById(id2) {
      return getPermanentElementById(this.element, id2);
    }
    getPermanentElementMapForSnapshot(snapshot) {
      const permanentElementMap = {};
      for (const currentPermanentElement of this.permanentElements) {
        const { id: id2 } = currentPermanentElement;
        const newPermanentElement = snapshot.getPermanentElementById(id2);
        if (newPermanentElement) {
          permanentElementMap[id2] = [currentPermanentElement, newPermanentElement];
        }
      }
      return permanentElementMap;
    }
  };
  function getPermanentElementById(node, id2) {
    return node.querySelector(`#${id2}[data-turbo-permanent]`);
  }
  function queryPermanentElementsAll(node) {
    return node.querySelectorAll("[id][data-turbo-permanent]");
  }
  var FormSubmitObserver = class {
    constructor(delegate, eventTarget) {
      this.started = false;
      this.submitCaptured = () => {
        this.eventTarget.removeEventListener("submit", this.submitBubbled, false);
        this.eventTarget.addEventListener("submit", this.submitBubbled, false);
      };
      this.submitBubbled = (event) => {
        if (!event.defaultPrevented) {
          const form = event.target instanceof HTMLFormElement ? event.target : void 0;
          const submitter = event.submitter || void 0;
          if (form && submissionDoesNotDismissDialog(form, submitter) && submissionDoesNotTargetIFrame(form, submitter) && this.delegate.willSubmitForm(form, submitter)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.delegate.formSubmitted(form, submitter);
          }
        }
      };
      this.delegate = delegate;
      this.eventTarget = eventTarget;
    }
    start() {
      if (!this.started) {
        this.eventTarget.addEventListener("submit", this.submitCaptured, true);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        this.eventTarget.removeEventListener("submit", this.submitCaptured, true);
        this.started = false;
      }
    }
  };
  function submissionDoesNotDismissDialog(form, submitter) {
    const method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.getAttribute("method");
    return method != "dialog";
  }
  function submissionDoesNotTargetIFrame(form, submitter) {
    if ((submitter === null || submitter === void 0 ? void 0 : submitter.hasAttribute("formtarget")) || form.hasAttribute("target")) {
      const target = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formtarget")) || form.target;
      for (const element of document.getElementsByName(target)) {
        if (element instanceof HTMLIFrameElement)
          return false;
      }
      return true;
    } else {
      return true;
    }
  }
  var View = class {
    constructor(delegate, element) {
      this.resolveRenderPromise = (_value) => {
      };
      this.resolveInterceptionPromise = (_value) => {
      };
      this.delegate = delegate;
      this.element = element;
    }
    scrollToAnchor(anchor) {
      const element = this.snapshot.getElementForAnchor(anchor);
      if (element) {
        this.scrollToElement(element);
        this.focusElement(element);
      } else {
        this.scrollToPosition({ x: 0, y: 0 });
      }
    }
    scrollToAnchorFromLocation(location2) {
      this.scrollToAnchor(getAnchor(location2));
    }
    scrollToElement(element) {
      element.scrollIntoView();
    }
    focusElement(element) {
      if (element instanceof HTMLElement) {
        if (element.hasAttribute("tabindex")) {
          element.focus();
        } else {
          element.setAttribute("tabindex", "-1");
          element.focus();
          element.removeAttribute("tabindex");
        }
      }
    }
    scrollToPosition({ x, y }) {
      this.scrollRoot.scrollTo(x, y);
    }
    scrollToTop() {
      this.scrollToPosition({ x: 0, y: 0 });
    }
    get scrollRoot() {
      return window;
    }
    async render(renderer) {
      const { isPreview, shouldRender, newSnapshot: snapshot } = renderer;
      if (shouldRender) {
        try {
          this.renderPromise = new Promise((resolve) => this.resolveRenderPromise = resolve);
          this.renderer = renderer;
          await this.prepareToRenderSnapshot(renderer);
          const renderInterception = new Promise((resolve) => this.resolveInterceptionPromise = resolve);
          const options = { resume: this.resolveInterceptionPromise, render: this.renderer.renderElement };
          const immediateRender = this.delegate.allowsImmediateRender(snapshot, options);
          if (!immediateRender)
            await renderInterception;
          await this.renderSnapshot(renderer);
          this.delegate.viewRenderedSnapshot(snapshot, isPreview);
          this.delegate.preloadOnLoadLinksForView(this.element);
          this.finishRenderingSnapshot(renderer);
        } finally {
          delete this.renderer;
          this.resolveRenderPromise(void 0);
          delete this.renderPromise;
        }
      } else {
        this.invalidate(renderer.reloadReason);
      }
    }
    invalidate(reason) {
      this.delegate.viewInvalidated(reason);
    }
    async prepareToRenderSnapshot(renderer) {
      this.markAsPreview(renderer.isPreview);
      await renderer.prepareToRender();
    }
    markAsPreview(isPreview) {
      if (isPreview) {
        this.element.setAttribute("data-turbo-preview", "");
      } else {
        this.element.removeAttribute("data-turbo-preview");
      }
    }
    async renderSnapshot(renderer) {
      await renderer.render();
    }
    finishRenderingSnapshot(renderer) {
      renderer.finishRendering();
    }
  };
  var FrameView = class extends View {
    missing() {
      this.element.innerHTML = `<strong class="turbo-frame-error">Content missing</strong>`;
    }
    get snapshot() {
      return new Snapshot(this.element);
    }
  };
  var LinkInterceptor = class {
    constructor(delegate, element) {
      this.clickBubbled = (event) => {
        if (this.respondsToEventTarget(event.target)) {
          this.clickEvent = event;
        } else {
          delete this.clickEvent;
        }
      };
      this.linkClicked = (event) => {
        if (this.clickEvent && this.respondsToEventTarget(event.target) && event.target instanceof Element) {
          if (this.delegate.shouldInterceptLinkClick(event.target, event.detail.url, event.detail.originalEvent)) {
            this.clickEvent.preventDefault();
            event.preventDefault();
            this.delegate.linkClickIntercepted(event.target, event.detail.url, event.detail.originalEvent);
          }
        }
        delete this.clickEvent;
      };
      this.willVisit = (_event) => {
        delete this.clickEvent;
      };
      this.delegate = delegate;
      this.element = element;
    }
    start() {
      this.element.addEventListener("click", this.clickBubbled);
      document.addEventListener("turbo:click", this.linkClicked);
      document.addEventListener("turbo:before-visit", this.willVisit);
    }
    stop() {
      this.element.removeEventListener("click", this.clickBubbled);
      document.removeEventListener("turbo:click", this.linkClicked);
      document.removeEventListener("turbo:before-visit", this.willVisit);
    }
    respondsToEventTarget(target) {
      const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
      return element && element.closest("turbo-frame, html") == this.element;
    }
  };
  var LinkClickObserver = class {
    constructor(delegate, eventTarget) {
      this.started = false;
      this.clickCaptured = () => {
        this.eventTarget.removeEventListener("click", this.clickBubbled, false);
        this.eventTarget.addEventListener("click", this.clickBubbled, false);
      };
      this.clickBubbled = (event) => {
        if (event instanceof MouseEvent && this.clickEventIsSignificant(event)) {
          const target = event.composedPath && event.composedPath()[0] || event.target;
          const link = this.findLinkFromClickTarget(target);
          if (link && doesNotTargetIFrame(link)) {
            const location2 = this.getLocationForLink(link);
            if (this.delegate.willFollowLinkToLocation(link, location2, event)) {
              event.preventDefault();
              this.delegate.followedLinkToLocation(link, location2);
            }
          }
        }
      };
      this.delegate = delegate;
      this.eventTarget = eventTarget;
    }
    start() {
      if (!this.started) {
        this.eventTarget.addEventListener("click", this.clickCaptured, true);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        this.eventTarget.removeEventListener("click", this.clickCaptured, true);
        this.started = false;
      }
    }
    clickEventIsSignificant(event) {
      return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
    }
    findLinkFromClickTarget(target) {
      return findClosestRecursively(target, "a[href]:not([target^=_]):not([download])");
    }
    getLocationForLink(link) {
      return expandURL(link.getAttribute("href") || "");
    }
  };
  function doesNotTargetIFrame(anchor) {
    if (anchor.hasAttribute("target")) {
      for (const element of document.getElementsByName(anchor.target)) {
        if (element instanceof HTMLIFrameElement)
          return false;
      }
      return true;
    } else {
      return true;
    }
  }
  var FormLinkClickObserver = class {
    constructor(delegate, element) {
      this.delegate = delegate;
      this.linkInterceptor = new LinkClickObserver(this, element);
    }
    start() {
      this.linkInterceptor.start();
    }
    stop() {
      this.linkInterceptor.stop();
    }
    willFollowLinkToLocation(link, location2, originalEvent) {
      return this.delegate.willSubmitFormLinkToLocation(link, location2, originalEvent) && link.hasAttribute("data-turbo-method");
    }
    followedLinkToLocation(link, location2) {
      const form = document.createElement("form");
      const type = "hidden";
      for (const [name, value] of location2.searchParams) {
        form.append(Object.assign(document.createElement("input"), { type, name, value }));
      }
      const action = Object.assign(location2, { search: "" });
      form.setAttribute("data-turbo", "true");
      form.setAttribute("action", action.href);
      form.setAttribute("hidden", "");
      const method = link.getAttribute("data-turbo-method");
      if (method)
        form.setAttribute("method", method);
      const turboFrame = link.getAttribute("data-turbo-frame");
      if (turboFrame)
        form.setAttribute("data-turbo-frame", turboFrame);
      const turboAction = getVisitAction(link);
      if (turboAction)
        form.setAttribute("data-turbo-action", turboAction);
      const turboConfirm = link.getAttribute("data-turbo-confirm");
      if (turboConfirm)
        form.setAttribute("data-turbo-confirm", turboConfirm);
      const turboStream = link.hasAttribute("data-turbo-stream");
      if (turboStream)
        form.setAttribute("data-turbo-stream", "");
      this.delegate.submittedFormLinkToLocation(link, location2, form);
      document.body.appendChild(form);
      form.addEventListener("turbo:submit-end", () => form.remove(), { once: true });
      requestAnimationFrame(() => form.requestSubmit());
    }
  };
  var Bardo = class {
    static async preservingPermanentElements(delegate, permanentElementMap, callback) {
      const bardo = new this(delegate, permanentElementMap);
      bardo.enter();
      await callback();
      bardo.leave();
    }
    constructor(delegate, permanentElementMap) {
      this.delegate = delegate;
      this.permanentElementMap = permanentElementMap;
    }
    enter() {
      for (const id2 in this.permanentElementMap) {
        const [currentPermanentElement, newPermanentElement] = this.permanentElementMap[id2];
        this.delegate.enteringBardo(currentPermanentElement, newPermanentElement);
        this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
      }
    }
    leave() {
      for (const id2 in this.permanentElementMap) {
        const [currentPermanentElement] = this.permanentElementMap[id2];
        this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
        this.replacePlaceholderWithPermanentElement(currentPermanentElement);
        this.delegate.leavingBardo(currentPermanentElement);
      }
    }
    replaceNewPermanentElementWithPlaceholder(permanentElement) {
      const placeholder = createPlaceholderForPermanentElement(permanentElement);
      permanentElement.replaceWith(placeholder);
    }
    replaceCurrentPermanentElementWithClone(permanentElement) {
      const clone = permanentElement.cloneNode(true);
      permanentElement.replaceWith(clone);
    }
    replacePlaceholderWithPermanentElement(permanentElement) {
      const placeholder = this.getPlaceholderById(permanentElement.id);
      placeholder === null || placeholder === void 0 ? void 0 : placeholder.replaceWith(permanentElement);
    }
    getPlaceholderById(id2) {
      return this.placeholders.find((element) => element.content == id2);
    }
    get placeholders() {
      return [...document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]")];
    }
  };
  function createPlaceholderForPermanentElement(permanentElement) {
    const element = document.createElement("meta");
    element.setAttribute("name", "turbo-permanent-placeholder");
    element.setAttribute("content", permanentElement.id);
    return element;
  }
  var Renderer = class {
    constructor(currentSnapshot, newSnapshot, renderElement, isPreview, willRender = true) {
      this.activeElement = null;
      this.currentSnapshot = currentSnapshot;
      this.newSnapshot = newSnapshot;
      this.isPreview = isPreview;
      this.willRender = willRender;
      this.renderElement = renderElement;
      this.promise = new Promise((resolve, reject) => this.resolvingFunctions = { resolve, reject });
    }
    get shouldRender() {
      return true;
    }
    get reloadReason() {
      return;
    }
    prepareToRender() {
      return;
    }
    finishRendering() {
      if (this.resolvingFunctions) {
        this.resolvingFunctions.resolve();
        delete this.resolvingFunctions;
      }
    }
    async preservingPermanentElements(callback) {
      await Bardo.preservingPermanentElements(this, this.permanentElementMap, callback);
    }
    focusFirstAutofocusableElement() {
      const element = this.connectedSnapshot.firstAutofocusableElement;
      if (elementIsFocusable(element)) {
        element.focus();
      }
    }
    enteringBardo(currentPermanentElement) {
      if (this.activeElement)
        return;
      if (currentPermanentElement.contains(this.currentSnapshot.activeElement)) {
        this.activeElement = this.currentSnapshot.activeElement;
      }
    }
    leavingBardo(currentPermanentElement) {
      if (currentPermanentElement.contains(this.activeElement) && this.activeElement instanceof HTMLElement) {
        this.activeElement.focus();
        this.activeElement = null;
      }
    }
    get connectedSnapshot() {
      return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
    }
    get currentElement() {
      return this.currentSnapshot.element;
    }
    get newElement() {
      return this.newSnapshot.element;
    }
    get permanentElementMap() {
      return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
    }
  };
  function elementIsFocusable(element) {
    return element && typeof element.focus == "function";
  }
  var FrameRenderer = class extends Renderer {
    static renderElement(currentElement, newElement) {
      var _a;
      const destinationRange = document.createRange();
      destinationRange.selectNodeContents(currentElement);
      destinationRange.deleteContents();
      const frameElement = newElement;
      const sourceRange = (_a = frameElement.ownerDocument) === null || _a === void 0 ? void 0 : _a.createRange();
      if (sourceRange) {
        sourceRange.selectNodeContents(frameElement);
        currentElement.appendChild(sourceRange.extractContents());
      }
    }
    constructor(delegate, currentSnapshot, newSnapshot, renderElement, isPreview, willRender = true) {
      super(currentSnapshot, newSnapshot, renderElement, isPreview, willRender);
      this.delegate = delegate;
    }
    get shouldRender() {
      return true;
    }
    async render() {
      await nextAnimationFrame();
      this.preservingPermanentElements(() => {
        this.loadFrameElement();
      });
      this.scrollFrameIntoView();
      await nextAnimationFrame();
      this.focusFirstAutofocusableElement();
      await nextAnimationFrame();
      this.activateScriptElements();
    }
    loadFrameElement() {
      this.delegate.willRenderFrame(this.currentElement, this.newElement);
      this.renderElement(this.currentElement, this.newElement);
    }
    scrollFrameIntoView() {
      if (this.currentElement.autoscroll || this.newElement.autoscroll) {
        const element = this.currentElement.firstElementChild;
        const block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");
        const behavior = readScrollBehavior(this.currentElement.getAttribute("data-autoscroll-behavior"), "auto");
        if (element) {
          element.scrollIntoView({ block, behavior });
          return true;
        }
      }
      return false;
    }
    activateScriptElements() {
      for (const inertScriptElement of this.newScriptElements) {
        const activatedScriptElement = activateScriptElement(inertScriptElement);
        inertScriptElement.replaceWith(activatedScriptElement);
      }
    }
    get newScriptElements() {
      return this.currentElement.querySelectorAll("script");
    }
  };
  function readScrollLogicalPosition(value, defaultValue) {
    if (value == "end" || value == "start" || value == "center" || value == "nearest") {
      return value;
    } else {
      return defaultValue;
    }
  }
  function readScrollBehavior(value, defaultValue) {
    if (value == "auto" || value == "smooth") {
      return value;
    } else {
      return defaultValue;
    }
  }
  var ProgressBar = class _ProgressBar {
    static get defaultCSS() {
      return unindent`
      .turbo-progress-bar {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3px;
        background: #0076ff;
        z-index: 2147483647;
        transition:
          width ${_ProgressBar.animationDuration}ms ease-out,
          opacity ${_ProgressBar.animationDuration / 2}ms ${_ProgressBar.animationDuration / 2}ms ease-in;
        transform: translate3d(0, 0, 0);
      }
    `;
    }
    constructor() {
      this.hiding = false;
      this.value = 0;
      this.visible = false;
      this.trickle = () => {
        this.setValue(this.value + Math.random() / 100);
      };
      this.stylesheetElement = this.createStylesheetElement();
      this.progressElement = this.createProgressElement();
      this.installStylesheetElement();
      this.setValue(0);
    }
    show() {
      if (!this.visible) {
        this.visible = true;
        this.installProgressElement();
        this.startTrickling();
      }
    }
    hide() {
      if (this.visible && !this.hiding) {
        this.hiding = true;
        this.fadeProgressElement(() => {
          this.uninstallProgressElement();
          this.stopTrickling();
          this.visible = false;
          this.hiding = false;
        });
      }
    }
    setValue(value) {
      this.value = value;
      this.refresh();
    }
    installStylesheetElement() {
      document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
    }
    installProgressElement() {
      this.progressElement.style.width = "0";
      this.progressElement.style.opacity = "1";
      document.documentElement.insertBefore(this.progressElement, document.body);
      this.refresh();
    }
    fadeProgressElement(callback) {
      this.progressElement.style.opacity = "0";
      setTimeout(callback, _ProgressBar.animationDuration * 1.5);
    }
    uninstallProgressElement() {
      if (this.progressElement.parentNode) {
        document.documentElement.removeChild(this.progressElement);
      }
    }
    startTrickling() {
      if (!this.trickleInterval) {
        this.trickleInterval = window.setInterval(this.trickle, _ProgressBar.animationDuration);
      }
    }
    stopTrickling() {
      window.clearInterval(this.trickleInterval);
      delete this.trickleInterval;
    }
    refresh() {
      requestAnimationFrame(() => {
        this.progressElement.style.width = `${10 + this.value * 90}%`;
      });
    }
    createStylesheetElement() {
      const element = document.createElement("style");
      element.type = "text/css";
      element.textContent = _ProgressBar.defaultCSS;
      if (this.cspNonce) {
        element.nonce = this.cspNonce;
      }
      return element;
    }
    createProgressElement() {
      const element = document.createElement("div");
      element.className = "turbo-progress-bar";
      return element;
    }
    get cspNonce() {
      return getMetaContent("csp-nonce");
    }
  };
  ProgressBar.animationDuration = 300;
  var HeadSnapshot = class extends Snapshot {
    constructor() {
      super(...arguments);
      this.detailsByOuterHTML = this.children.filter((element) => !elementIsNoscript(element)).map((element) => elementWithoutNonce(element)).reduce((result, element) => {
        const { outerHTML } = element;
        const details = outerHTML in result ? result[outerHTML] : {
          type: elementType(element),
          tracked: elementIsTracked(element),
          elements: []
        };
        return Object.assign(Object.assign({}, result), { [outerHTML]: Object.assign(Object.assign({}, details), { elements: [...details.elements, element] }) });
      }, {});
    }
    get trackedElementSignature() {
      return Object.keys(this.detailsByOuterHTML).filter((outerHTML) => this.detailsByOuterHTML[outerHTML].tracked).join("");
    }
    getScriptElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
    }
    getStylesheetElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
    }
    getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
      return Object.keys(this.detailsByOuterHTML).filter((outerHTML) => !(outerHTML in snapshot.detailsByOuterHTML)).map((outerHTML) => this.detailsByOuterHTML[outerHTML]).filter(({ type }) => type == matchedType).map(({ elements: [element] }) => element);
    }
    get provisionalElements() {
      return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML) => {
        const { type, tracked, elements } = this.detailsByOuterHTML[outerHTML];
        if (type == null && !tracked) {
          return [...result, ...elements];
        } else if (elements.length > 1) {
          return [...result, ...elements.slice(1)];
        } else {
          return result;
        }
      }, []);
    }
    getMetaValue(name) {
      const element = this.findMetaElementByName(name);
      return element ? element.getAttribute("content") : null;
    }
    findMetaElementByName(name) {
      return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML) => {
        const { elements: [element] } = this.detailsByOuterHTML[outerHTML];
        return elementIsMetaElementWithName(element, name) ? element : result;
      }, void 0);
    }
  };
  function elementType(element) {
    if (elementIsScript(element)) {
      return "script";
    } else if (elementIsStylesheet(element)) {
      return "stylesheet";
    }
  }
  function elementIsTracked(element) {
    return element.getAttribute("data-turbo-track") == "reload";
  }
  function elementIsScript(element) {
    const tagName = element.localName;
    return tagName == "script";
  }
  function elementIsNoscript(element) {
    const tagName = element.localName;
    return tagName == "noscript";
  }
  function elementIsStylesheet(element) {
    const tagName = element.localName;
    return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
  }
  function elementIsMetaElementWithName(element, name) {
    const tagName = element.localName;
    return tagName == "meta" && element.getAttribute("name") == name;
  }
  function elementWithoutNonce(element) {
    if (element.hasAttribute("nonce")) {
      element.setAttribute("nonce", "");
    }
    return element;
  }
  var PageSnapshot = class _PageSnapshot extends Snapshot {
    static fromHTMLString(html = "") {
      return this.fromDocument(parseHTMLDocument(html));
    }
    static fromElement(element) {
      return this.fromDocument(element.ownerDocument);
    }
    static fromDocument({ head, body }) {
      return new this(body, new HeadSnapshot(head));
    }
    constructor(element, headSnapshot) {
      super(element);
      this.headSnapshot = headSnapshot;
    }
    clone() {
      const clonedElement = this.element.cloneNode(true);
      const selectElements = this.element.querySelectorAll("select");
      const clonedSelectElements = clonedElement.querySelectorAll("select");
      for (const [index, source] of selectElements.entries()) {
        const clone = clonedSelectElements[index];
        for (const option of clone.selectedOptions)
          option.selected = false;
        for (const option of source.selectedOptions)
          clone.options[option.index].selected = true;
      }
      for (const clonedPasswordInput of clonedElement.querySelectorAll('input[type="password"]')) {
        clonedPasswordInput.value = "";
      }
      return new _PageSnapshot(clonedElement, this.headSnapshot);
    }
    get headElement() {
      return this.headSnapshot.element;
    }
    get rootLocation() {
      var _a;
      const root = (_a = this.getSetting("root")) !== null && _a !== void 0 ? _a : "/";
      return expandURL(root);
    }
    get cacheControlValue() {
      return this.getSetting("cache-control");
    }
    get isPreviewable() {
      return this.cacheControlValue != "no-preview";
    }
    get isCacheable() {
      return this.cacheControlValue != "no-cache";
    }
    get isVisitable() {
      return this.getSetting("visit-control") != "reload";
    }
    getSetting(name) {
      return this.headSnapshot.getMetaValue(`turbo-${name}`);
    }
  };
  var TimingMetric;
  (function(TimingMetric2) {
    TimingMetric2["visitStart"] = "visitStart";
    TimingMetric2["requestStart"] = "requestStart";
    TimingMetric2["requestEnd"] = "requestEnd";
    TimingMetric2["visitEnd"] = "visitEnd";
  })(TimingMetric || (TimingMetric = {}));
  var VisitState;
  (function(VisitState2) {
    VisitState2["initialized"] = "initialized";
    VisitState2["started"] = "started";
    VisitState2["canceled"] = "canceled";
    VisitState2["failed"] = "failed";
    VisitState2["completed"] = "completed";
  })(VisitState || (VisitState = {}));
  var defaultOptions = {
    action: "advance",
    historyChanged: false,
    visitCachedSnapshot: () => {
    },
    willRender: true,
    updateHistory: true,
    shouldCacheSnapshot: true,
    acceptsStreamResponse: false
  };
  var SystemStatusCode;
  (function(SystemStatusCode2) {
    SystemStatusCode2[SystemStatusCode2["networkFailure"] = 0] = "networkFailure";
    SystemStatusCode2[SystemStatusCode2["timeoutFailure"] = -1] = "timeoutFailure";
    SystemStatusCode2[SystemStatusCode2["contentTypeMismatch"] = -2] = "contentTypeMismatch";
  })(SystemStatusCode || (SystemStatusCode = {}));
  var Visit = class {
    constructor(delegate, location2, restorationIdentifier, options = {}) {
      this.identifier = uuid();
      this.timingMetrics = {};
      this.followedRedirect = false;
      this.historyChanged = false;
      this.scrolled = false;
      this.shouldCacheSnapshot = true;
      this.acceptsStreamResponse = false;
      this.snapshotCached = false;
      this.state = VisitState.initialized;
      this.delegate = delegate;
      this.location = location2;
      this.restorationIdentifier = restorationIdentifier || uuid();
      const { action, historyChanged, referrer, snapshot, snapshotHTML, response, visitCachedSnapshot, willRender, updateHistory, shouldCacheSnapshot, acceptsStreamResponse } = Object.assign(Object.assign({}, defaultOptions), options);
      this.action = action;
      this.historyChanged = historyChanged;
      this.referrer = referrer;
      this.snapshot = snapshot;
      this.snapshotHTML = snapshotHTML;
      this.response = response;
      this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action);
      this.visitCachedSnapshot = visitCachedSnapshot;
      this.willRender = willRender;
      this.updateHistory = updateHistory;
      this.scrolled = !willRender;
      this.shouldCacheSnapshot = shouldCacheSnapshot;
      this.acceptsStreamResponse = acceptsStreamResponse;
    }
    get adapter() {
      return this.delegate.adapter;
    }
    get view() {
      return this.delegate.view;
    }
    get history() {
      return this.delegate.history;
    }
    get restorationData() {
      return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
    }
    get silent() {
      return this.isSamePage;
    }
    start() {
      if (this.state == VisitState.initialized) {
        this.recordTimingMetric(TimingMetric.visitStart);
        this.state = VisitState.started;
        this.adapter.visitStarted(this);
        this.delegate.visitStarted(this);
      }
    }
    cancel() {
      if (this.state == VisitState.started) {
        if (this.request) {
          this.request.cancel();
        }
        this.cancelRender();
        this.state = VisitState.canceled;
      }
    }
    complete() {
      if (this.state == VisitState.started) {
        this.recordTimingMetric(TimingMetric.visitEnd);
        this.state = VisitState.completed;
        this.followRedirect();
        if (!this.followedRedirect) {
          this.adapter.visitCompleted(this);
          this.delegate.visitCompleted(this);
        }
      }
    }
    fail() {
      if (this.state == VisitState.started) {
        this.state = VisitState.failed;
        this.adapter.visitFailed(this);
      }
    }
    changeHistory() {
      var _a;
      if (!this.historyChanged && this.updateHistory) {
        const actionForHistory = this.location.href === ((_a = this.referrer) === null || _a === void 0 ? void 0 : _a.href) ? "replace" : this.action;
        const method = getHistoryMethodForAction(actionForHistory);
        this.history.update(method, this.location, this.restorationIdentifier);
        this.historyChanged = true;
      }
    }
    issueRequest() {
      if (this.hasPreloadedResponse()) {
        this.simulateRequest();
      } else if (this.shouldIssueRequest() && !this.request) {
        this.request = new FetchRequest(this, FetchMethod.get, this.location);
        this.request.perform();
      }
    }
    simulateRequest() {
      if (this.response) {
        this.startRequest();
        this.recordResponse();
        this.finishRequest();
      }
    }
    startRequest() {
      this.recordTimingMetric(TimingMetric.requestStart);
      this.adapter.visitRequestStarted(this);
    }
    recordResponse(response = this.response) {
      this.response = response;
      if (response) {
        const { statusCode } = response;
        if (isSuccessful(statusCode)) {
          this.adapter.visitRequestCompleted(this);
        } else {
          this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
        }
      }
    }
    finishRequest() {
      this.recordTimingMetric(TimingMetric.requestEnd);
      this.adapter.visitRequestFinished(this);
    }
    loadResponse() {
      if (this.response) {
        const { statusCode, responseHTML } = this.response;
        this.render(async () => {
          if (this.shouldCacheSnapshot)
            this.cacheSnapshot();
          if (this.view.renderPromise)
            await this.view.renderPromise;
          if (isSuccessful(statusCode) && responseHTML != null) {
            await this.view.renderPage(PageSnapshot.fromHTMLString(responseHTML), false, this.willRender, this);
            this.performScroll();
            this.adapter.visitRendered(this);
            this.complete();
          } else {
            await this.view.renderError(PageSnapshot.fromHTMLString(responseHTML), this);
            this.adapter.visitRendered(this);
            this.fail();
          }
        });
      }
    }
    getCachedSnapshot() {
      const snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();
      if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
        if (this.action == "restore" || snapshot.isPreviewable) {
          return snapshot;
        }
      }
    }
    getPreloadedSnapshot() {
      if (this.snapshotHTML) {
        return PageSnapshot.fromHTMLString(this.snapshotHTML);
      }
    }
    hasCachedSnapshot() {
      return this.getCachedSnapshot() != null;
    }
    loadCachedSnapshot() {
      const snapshot = this.getCachedSnapshot();
      if (snapshot) {
        const isPreview = this.shouldIssueRequest();
        this.render(async () => {
          this.cacheSnapshot();
          if (this.isSamePage) {
            this.adapter.visitRendered(this);
          } else {
            if (this.view.renderPromise)
              await this.view.renderPromise;
            await this.view.renderPage(snapshot, isPreview, this.willRender, this);
            this.performScroll();
            this.adapter.visitRendered(this);
            if (!isPreview) {
              this.complete();
            }
          }
        });
      }
    }
    followRedirect() {
      var _a;
      if (this.redirectedToLocation && !this.followedRedirect && ((_a = this.response) === null || _a === void 0 ? void 0 : _a.redirected)) {
        this.adapter.visitProposedToLocation(this.redirectedToLocation, {
          action: "replace",
          response: this.response,
          shouldCacheSnapshot: false,
          willRender: false
        });
        this.followedRedirect = true;
      }
    }
    goToSamePageAnchor() {
      if (this.isSamePage) {
        this.render(async () => {
          this.cacheSnapshot();
          this.performScroll();
          this.changeHistory();
          this.adapter.visitRendered(this);
        });
      }
    }
    prepareRequest(request) {
      if (this.acceptsStreamResponse) {
        request.acceptResponseType(StreamMessage.contentType);
      }
    }
    requestStarted() {
      this.startRequest();
    }
    requestPreventedHandlingResponse(_request, _response) {
    }
    async requestSucceededWithResponse(request, response) {
      const responseHTML = await response.responseHTML;
      const { redirected, statusCode } = response;
      if (responseHTML == void 0) {
        this.recordResponse({
          statusCode: SystemStatusCode.contentTypeMismatch,
          redirected
        });
      } else {
        this.redirectedToLocation = response.redirected ? response.location : void 0;
        this.recordResponse({ statusCode, responseHTML, redirected });
      }
    }
    async requestFailedWithResponse(request, response) {
      const responseHTML = await response.responseHTML;
      const { redirected, statusCode } = response;
      if (responseHTML == void 0) {
        this.recordResponse({
          statusCode: SystemStatusCode.contentTypeMismatch,
          redirected
        });
      } else {
        this.recordResponse({ statusCode, responseHTML, redirected });
      }
    }
    requestErrored(_request, _error) {
      this.recordResponse({
        statusCode: SystemStatusCode.networkFailure,
        redirected: false
      });
    }
    requestFinished() {
      this.finishRequest();
    }
    performScroll() {
      if (!this.scrolled && !this.view.forceReloaded) {
        if (this.action == "restore") {
          this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop();
        } else {
          this.scrollToAnchor() || this.view.scrollToTop();
        }
        if (this.isSamePage) {
          this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location);
        }
        this.scrolled = true;
      }
    }
    scrollToRestoredPosition() {
      const { scrollPosition } = this.restorationData;
      if (scrollPosition) {
        this.view.scrollToPosition(scrollPosition);
        return true;
      }
    }
    scrollToAnchor() {
      const anchor = getAnchor(this.location);
      if (anchor != null) {
        this.view.scrollToAnchor(anchor);
        return true;
      }
    }
    recordTimingMetric(metric) {
      this.timingMetrics[metric] = (/* @__PURE__ */ new Date()).getTime();
    }
    getTimingMetrics() {
      return Object.assign({}, this.timingMetrics);
    }
    getHistoryMethodForAction(action) {
      switch (action) {
        case "replace":
          return history.replaceState;
        case "advance":
        case "restore":
          return history.pushState;
      }
    }
    hasPreloadedResponse() {
      return typeof this.response == "object";
    }
    shouldIssueRequest() {
      if (this.isSamePage) {
        return false;
      } else if (this.action == "restore") {
        return !this.hasCachedSnapshot();
      } else {
        return this.willRender;
      }
    }
    cacheSnapshot() {
      if (!this.snapshotCached) {
        this.view.cacheSnapshot(this.snapshot).then((snapshot) => snapshot && this.visitCachedSnapshot(snapshot));
        this.snapshotCached = true;
      }
    }
    async render(callback) {
      this.cancelRender();
      await new Promise((resolve) => {
        this.frame = requestAnimationFrame(() => resolve());
      });
      await callback();
      delete this.frame;
    }
    cancelRender() {
      if (this.frame) {
        cancelAnimationFrame(this.frame);
        delete this.frame;
      }
    }
  };
  function isSuccessful(statusCode) {
    return statusCode >= 200 && statusCode < 300;
  }
  var BrowserAdapter = class {
    constructor(session2) {
      this.progressBar = new ProgressBar();
      this.showProgressBar = () => {
        this.progressBar.show();
      };
      this.session = session2;
    }
    visitProposedToLocation(location2, options) {
      this.navigator.startVisit(location2, (options === null || options === void 0 ? void 0 : options.restorationIdentifier) || uuid(), options);
    }
    visitStarted(visit2) {
      this.location = visit2.location;
      visit2.loadCachedSnapshot();
      visit2.issueRequest();
      visit2.goToSamePageAnchor();
    }
    visitRequestStarted(visit2) {
      this.progressBar.setValue(0);
      if (visit2.hasCachedSnapshot() || visit2.action != "restore") {
        this.showVisitProgressBarAfterDelay();
      } else {
        this.showProgressBar();
      }
    }
    visitRequestCompleted(visit2) {
      visit2.loadResponse();
    }
    visitRequestFailedWithStatusCode(visit2, statusCode) {
      switch (statusCode) {
        case SystemStatusCode.networkFailure:
        case SystemStatusCode.timeoutFailure:
        case SystemStatusCode.contentTypeMismatch:
          return this.reload({
            reason: "request_failed",
            context: {
              statusCode
            }
          });
        default:
          return visit2.loadResponse();
      }
    }
    visitRequestFinished(_visit) {
      this.progressBar.setValue(1);
      this.hideVisitProgressBar();
    }
    visitCompleted(_visit) {
    }
    pageInvalidated(reason) {
      this.reload(reason);
    }
    visitFailed(_visit) {
    }
    visitRendered(_visit) {
    }
    formSubmissionStarted(_formSubmission) {
      this.progressBar.setValue(0);
      this.showFormProgressBarAfterDelay();
    }
    formSubmissionFinished(_formSubmission) {
      this.progressBar.setValue(1);
      this.hideFormProgressBar();
    }
    showVisitProgressBarAfterDelay() {
      this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
    hideVisitProgressBar() {
      this.progressBar.hide();
      if (this.visitProgressBarTimeout != null) {
        window.clearTimeout(this.visitProgressBarTimeout);
        delete this.visitProgressBarTimeout;
      }
    }
    showFormProgressBarAfterDelay() {
      if (this.formProgressBarTimeout == null) {
        this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
      }
    }
    hideFormProgressBar() {
      this.progressBar.hide();
      if (this.formProgressBarTimeout != null) {
        window.clearTimeout(this.formProgressBarTimeout);
        delete this.formProgressBarTimeout;
      }
    }
    reload(reason) {
      var _a;
      dispatch("turbo:reload", { detail: reason });
      window.location.href = ((_a = this.location) === null || _a === void 0 ? void 0 : _a.toString()) || window.location.href;
    }
    get navigator() {
      return this.session.navigator;
    }
  };
  var CacheObserver = class {
    constructor() {
      this.selector = "[data-turbo-temporary]";
      this.deprecatedSelector = "[data-turbo-cache=false]";
      this.started = false;
      this.removeTemporaryElements = (_event) => {
        for (const element of this.temporaryElements) {
          element.remove();
        }
      };
    }
    start() {
      if (!this.started) {
        this.started = true;
        addEventListener("turbo:before-cache", this.removeTemporaryElements, false);
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        removeEventListener("turbo:before-cache", this.removeTemporaryElements, false);
      }
    }
    get temporaryElements() {
      return [...document.querySelectorAll(this.selector), ...this.temporaryElementsWithDeprecation];
    }
    get temporaryElementsWithDeprecation() {
      const elements = document.querySelectorAll(this.deprecatedSelector);
      if (elements.length) {
        console.warn(`The ${this.deprecatedSelector} selector is deprecated and will be removed in a future version. Use ${this.selector} instead.`);
      }
      return [...elements];
    }
  };
  var FrameRedirector = class {
    constructor(session2, element) {
      this.session = session2;
      this.element = element;
      this.linkInterceptor = new LinkInterceptor(this, element);
      this.formSubmitObserver = new FormSubmitObserver(this, element);
    }
    start() {
      this.linkInterceptor.start();
      this.formSubmitObserver.start();
    }
    stop() {
      this.linkInterceptor.stop();
      this.formSubmitObserver.stop();
    }
    shouldInterceptLinkClick(element, _location, _event) {
      return this.shouldRedirect(element);
    }
    linkClickIntercepted(element, url, event) {
      const frame = this.findFrameElement(element);
      if (frame) {
        frame.delegate.linkClickIntercepted(element, url, event);
      }
    }
    willSubmitForm(element, submitter) {
      return element.closest("turbo-frame") == null && this.shouldSubmit(element, submitter) && this.shouldRedirect(element, submitter);
    }
    formSubmitted(element, submitter) {
      const frame = this.findFrameElement(element, submitter);
      if (frame) {
        frame.delegate.formSubmitted(element, submitter);
      }
    }
    shouldSubmit(form, submitter) {
      var _a;
      const action = getAction(form, submitter);
      const meta = this.element.ownerDocument.querySelector(`meta[name="turbo-root"]`);
      const rootLocation = expandURL((_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/");
      return this.shouldRedirect(form, submitter) && locationIsVisitable(action, rootLocation);
    }
    shouldRedirect(element, submitter) {
      const isNavigatable = element instanceof HTMLFormElement ? this.session.submissionIsNavigatable(element, submitter) : this.session.elementIsNavigatable(element);
      if (isNavigatable) {
        const frame = this.findFrameElement(element, submitter);
        return frame ? frame != element.closest("turbo-frame") : false;
      } else {
        return false;
      }
    }
    findFrameElement(element, submitter) {
      const id2 = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("data-turbo-frame")) || element.getAttribute("data-turbo-frame");
      if (id2 && id2 != "_top") {
        const frame = this.element.querySelector(`#${id2}:not([disabled])`);
        if (frame instanceof FrameElement) {
          return frame;
        }
      }
    }
  };
  var History = class {
    constructor(delegate) {
      this.restorationIdentifier = uuid();
      this.restorationData = {};
      this.started = false;
      this.pageLoaded = false;
      this.onPopState = (event) => {
        if (this.shouldHandlePopState()) {
          const { turbo } = event.state || {};
          if (turbo) {
            this.location = new URL(window.location.href);
            const { restorationIdentifier } = turbo;
            this.restorationIdentifier = restorationIdentifier;
            this.delegate.historyPoppedToLocationWithRestorationIdentifier(this.location, restorationIdentifier);
          }
        }
      };
      this.onPageLoad = async (_event) => {
        await nextMicrotask();
        this.pageLoaded = true;
      };
      this.delegate = delegate;
    }
    start() {
      if (!this.started) {
        addEventListener("popstate", this.onPopState, false);
        addEventListener("load", this.onPageLoad, false);
        this.started = true;
        this.replace(new URL(window.location.href));
      }
    }
    stop() {
      if (this.started) {
        removeEventListener("popstate", this.onPopState, false);
        removeEventListener("load", this.onPageLoad, false);
        this.started = false;
      }
    }
    push(location2, restorationIdentifier) {
      this.update(history.pushState, location2, restorationIdentifier);
    }
    replace(location2, restorationIdentifier) {
      this.update(history.replaceState, location2, restorationIdentifier);
    }
    update(method, location2, restorationIdentifier = uuid()) {
      const state = { turbo: { restorationIdentifier } };
      method.call(history, state, "", location2.href);
      this.location = location2;
      this.restorationIdentifier = restorationIdentifier;
    }
    getRestorationDataForIdentifier(restorationIdentifier) {
      return this.restorationData[restorationIdentifier] || {};
    }
    updateRestorationData(additionalData) {
      const { restorationIdentifier } = this;
      const restorationData = this.restorationData[restorationIdentifier];
      this.restorationData[restorationIdentifier] = Object.assign(Object.assign({}, restorationData), additionalData);
    }
    assumeControlOfScrollRestoration() {
      var _a;
      if (!this.previousScrollRestoration) {
        this.previousScrollRestoration = (_a = history.scrollRestoration) !== null && _a !== void 0 ? _a : "auto";
        history.scrollRestoration = "manual";
      }
    }
    relinquishControlOfScrollRestoration() {
      if (this.previousScrollRestoration) {
        history.scrollRestoration = this.previousScrollRestoration;
        delete this.previousScrollRestoration;
      }
    }
    shouldHandlePopState() {
      return this.pageIsLoaded();
    }
    pageIsLoaded() {
      return this.pageLoaded || document.readyState == "complete";
    }
  };
  var Navigator = class {
    constructor(delegate) {
      this.delegate = delegate;
    }
    proposeVisit(location2, options = {}) {
      if (this.delegate.allowsVisitingLocationWithAction(location2, options.action)) {
        if (locationIsVisitable(location2, this.view.snapshot.rootLocation)) {
          this.delegate.visitProposedToLocation(location2, options);
        } else {
          window.location.href = location2.toString();
        }
      }
    }
    startVisit(locatable, restorationIdentifier, options = {}) {
      this.stop();
      this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, Object.assign({ referrer: this.location }, options));
      this.currentVisit.start();
    }
    submitForm(form, submitter) {
      this.stop();
      this.formSubmission = new FormSubmission(this, form, submitter, true);
      this.formSubmission.start();
    }
    stop() {
      if (this.formSubmission) {
        this.formSubmission.stop();
        delete this.formSubmission;
      }
      if (this.currentVisit) {
        this.currentVisit.cancel();
        delete this.currentVisit;
      }
    }
    get adapter() {
      return this.delegate.adapter;
    }
    get view() {
      return this.delegate.view;
    }
    get history() {
      return this.delegate.history;
    }
    formSubmissionStarted(formSubmission) {
      if (typeof this.adapter.formSubmissionStarted === "function") {
        this.adapter.formSubmissionStarted(formSubmission);
      }
    }
    async formSubmissionSucceededWithResponse(formSubmission, fetchResponse) {
      if (formSubmission == this.formSubmission) {
        const responseHTML = await fetchResponse.responseHTML;
        if (responseHTML) {
          const shouldCacheSnapshot = formSubmission.isSafe;
          if (!shouldCacheSnapshot) {
            this.view.clearSnapshotCache();
          }
          const { statusCode, redirected } = fetchResponse;
          const action = this.getActionForFormSubmission(formSubmission);
          const visitOptions = {
            action,
            shouldCacheSnapshot,
            response: { statusCode, responseHTML, redirected }
          };
          this.proposeVisit(fetchResponse.location, visitOptions);
        }
      }
    }
    async formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
      const responseHTML = await fetchResponse.responseHTML;
      if (responseHTML) {
        const snapshot = PageSnapshot.fromHTMLString(responseHTML);
        if (fetchResponse.serverError) {
          await this.view.renderError(snapshot, this.currentVisit);
        } else {
          await this.view.renderPage(snapshot, false, true, this.currentVisit);
        }
        this.view.scrollToTop();
        this.view.clearSnapshotCache();
      }
    }
    formSubmissionErrored(formSubmission, error2) {
      console.error(error2);
    }
    formSubmissionFinished(formSubmission) {
      if (typeof this.adapter.formSubmissionFinished === "function") {
        this.adapter.formSubmissionFinished(formSubmission);
      }
    }
    visitStarted(visit2) {
      this.delegate.visitStarted(visit2);
    }
    visitCompleted(visit2) {
      this.delegate.visitCompleted(visit2);
    }
    locationWithActionIsSamePage(location2, action) {
      const anchor = getAnchor(location2);
      const currentAnchor = getAnchor(this.view.lastRenderedLocation);
      const isRestorationToTop = action === "restore" && typeof anchor === "undefined";
      return action !== "replace" && getRequestURL(location2) === getRequestURL(this.view.lastRenderedLocation) && (isRestorationToTop || anchor != null && anchor !== currentAnchor);
    }
    visitScrolledToSamePageLocation(oldURL, newURL) {
      this.delegate.visitScrolledToSamePageLocation(oldURL, newURL);
    }
    get location() {
      return this.history.location;
    }
    get restorationIdentifier() {
      return this.history.restorationIdentifier;
    }
    getActionForFormSubmission({ submitter, formElement }) {
      return getVisitAction(submitter, formElement) || "advance";
    }
  };
  var PageStage;
  (function(PageStage2) {
    PageStage2[PageStage2["initial"] = 0] = "initial";
    PageStage2[PageStage2["loading"] = 1] = "loading";
    PageStage2[PageStage2["interactive"] = 2] = "interactive";
    PageStage2[PageStage2["complete"] = 3] = "complete";
  })(PageStage || (PageStage = {}));
  var PageObserver = class {
    constructor(delegate) {
      this.stage = PageStage.initial;
      this.started = false;
      this.interpretReadyState = () => {
        const { readyState } = this;
        if (readyState == "interactive") {
          this.pageIsInteractive();
        } else if (readyState == "complete") {
          this.pageIsComplete();
        }
      };
      this.pageWillUnload = () => {
        this.delegate.pageWillUnload();
      };
      this.delegate = delegate;
    }
    start() {
      if (!this.started) {
        if (this.stage == PageStage.initial) {
          this.stage = PageStage.loading;
        }
        document.addEventListener("readystatechange", this.interpretReadyState, false);
        addEventListener("pagehide", this.pageWillUnload, false);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        document.removeEventListener("readystatechange", this.interpretReadyState, false);
        removeEventListener("pagehide", this.pageWillUnload, false);
        this.started = false;
      }
    }
    pageIsInteractive() {
      if (this.stage == PageStage.loading) {
        this.stage = PageStage.interactive;
        this.delegate.pageBecameInteractive();
      }
    }
    pageIsComplete() {
      this.pageIsInteractive();
      if (this.stage == PageStage.interactive) {
        this.stage = PageStage.complete;
        this.delegate.pageLoaded();
      }
    }
    get readyState() {
      return document.readyState;
    }
  };
  var ScrollObserver = class {
    constructor(delegate) {
      this.started = false;
      this.onScroll = () => {
        this.updatePosition({ x: window.pageXOffset, y: window.pageYOffset });
      };
      this.delegate = delegate;
    }
    start() {
      if (!this.started) {
        addEventListener("scroll", this.onScroll, false);
        this.onScroll();
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        removeEventListener("scroll", this.onScroll, false);
        this.started = false;
      }
    }
    updatePosition(position) {
      this.delegate.scrollPositionChanged(position);
    }
  };
  var StreamMessageRenderer = class {
    render({ fragment }) {
      Bardo.preservingPermanentElements(this, getPermanentElementMapForFragment(fragment), () => document.documentElement.appendChild(fragment));
    }
    enteringBardo(currentPermanentElement, newPermanentElement) {
      newPermanentElement.replaceWith(currentPermanentElement.cloneNode(true));
    }
    leavingBardo() {
    }
  };
  function getPermanentElementMapForFragment(fragment) {
    const permanentElementsInDocument = queryPermanentElementsAll(document.documentElement);
    const permanentElementMap = {};
    for (const permanentElementInDocument of permanentElementsInDocument) {
      const { id: id2 } = permanentElementInDocument;
      for (const streamElement of fragment.querySelectorAll("turbo-stream")) {
        const elementInStream = getPermanentElementById(streamElement.templateElement.content, id2);
        if (elementInStream) {
          permanentElementMap[id2] = [permanentElementInDocument, elementInStream];
        }
      }
    }
    return permanentElementMap;
  }
  var StreamObserver = class {
    constructor(delegate) {
      this.sources = /* @__PURE__ */ new Set();
      this.started = false;
      this.inspectFetchResponse = (event) => {
        const response = fetchResponseFromEvent(event);
        if (response && fetchResponseIsStream(response)) {
          event.preventDefault();
          this.receiveMessageResponse(response);
        }
      };
      this.receiveMessageEvent = (event) => {
        if (this.started && typeof event.data == "string") {
          this.receiveMessageHTML(event.data);
        }
      };
      this.delegate = delegate;
    }
    start() {
      if (!this.started) {
        this.started = true;
        addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
    connectStreamSource(source) {
      if (!this.streamSourceIsConnected(source)) {
        this.sources.add(source);
        source.addEventListener("message", this.receiveMessageEvent, false);
      }
    }
    disconnectStreamSource(source) {
      if (this.streamSourceIsConnected(source)) {
        this.sources.delete(source);
        source.removeEventListener("message", this.receiveMessageEvent, false);
      }
    }
    streamSourceIsConnected(source) {
      return this.sources.has(source);
    }
    async receiveMessageResponse(response) {
      const html = await response.responseHTML;
      if (html) {
        this.receiveMessageHTML(html);
      }
    }
    receiveMessageHTML(html) {
      this.delegate.receivedMessageFromStream(StreamMessage.wrap(html));
    }
  };
  function fetchResponseFromEvent(event) {
    var _a;
    const fetchResponse = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.fetchResponse;
    if (fetchResponse instanceof FetchResponse) {
      return fetchResponse;
    }
  }
  function fetchResponseIsStream(response) {
    var _a;
    const contentType = (_a = response.contentType) !== null && _a !== void 0 ? _a : "";
    return contentType.startsWith(StreamMessage.contentType);
  }
  var ErrorRenderer = class extends Renderer {
    static renderElement(currentElement, newElement) {
      const { documentElement, body } = document;
      documentElement.replaceChild(newElement, body);
    }
    async render() {
      this.replaceHeadAndBody();
      this.activateScriptElements();
    }
    replaceHeadAndBody() {
      const { documentElement, head } = document;
      documentElement.replaceChild(this.newHead, head);
      this.renderElement(this.currentElement, this.newElement);
    }
    activateScriptElements() {
      for (const replaceableElement of this.scriptElements) {
        const parentNode = replaceableElement.parentNode;
        if (parentNode) {
          const element = activateScriptElement(replaceableElement);
          parentNode.replaceChild(element, replaceableElement);
        }
      }
    }
    get newHead() {
      return this.newSnapshot.headSnapshot.element;
    }
    get scriptElements() {
      return document.documentElement.querySelectorAll("script");
    }
  };
  var PageRenderer = class extends Renderer {
    static renderElement(currentElement, newElement) {
      if (document.body && newElement instanceof HTMLBodyElement) {
        document.body.replaceWith(newElement);
      } else {
        document.documentElement.appendChild(newElement);
      }
    }
    get shouldRender() {
      return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
    }
    get reloadReason() {
      if (!this.newSnapshot.isVisitable) {
        return {
          reason: "turbo_visit_control_is_reload"
        };
      }
      if (!this.trackedElementsAreIdentical) {
        return {
          reason: "tracked_element_mismatch"
        };
      }
    }
    async prepareToRender() {
      await this.mergeHead();
    }
    async render() {
      if (this.willRender) {
        await this.replaceBody();
      }
    }
    finishRendering() {
      super.finishRendering();
      if (!this.isPreview) {
        this.focusFirstAutofocusableElement();
      }
    }
    get currentHeadSnapshot() {
      return this.currentSnapshot.headSnapshot;
    }
    get newHeadSnapshot() {
      return this.newSnapshot.headSnapshot;
    }
    get newElement() {
      return this.newSnapshot.element;
    }
    async mergeHead() {
      const mergedHeadElements = this.mergeProvisionalElements();
      const newStylesheetElements = this.copyNewHeadStylesheetElements();
      this.copyNewHeadScriptElements();
      await mergedHeadElements;
      await newStylesheetElements;
    }
    async replaceBody() {
      await this.preservingPermanentElements(async () => {
        this.activateNewBody();
        await this.assignNewBody();
      });
    }
    get trackedElementsAreIdentical() {
      return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
    }
    async copyNewHeadStylesheetElements() {
      const loadingElements = [];
      for (const element of this.newHeadStylesheetElements) {
        loadingElements.push(waitForLoad(element));
        document.head.appendChild(element);
      }
      await Promise.all(loadingElements);
    }
    copyNewHeadScriptElements() {
      for (const element of this.newHeadScriptElements) {
        document.head.appendChild(activateScriptElement(element));
      }
    }
    async mergeProvisionalElements() {
      const newHeadElements = [...this.newHeadProvisionalElements];
      for (const element of this.currentHeadProvisionalElements) {
        if (!this.isCurrentElementInElementList(element, newHeadElements)) {
          document.head.removeChild(element);
        }
      }
      for (const element of newHeadElements) {
        document.head.appendChild(element);
      }
    }
    isCurrentElementInElementList(element, elementList) {
      for (const [index, newElement] of elementList.entries()) {
        if (element.tagName == "TITLE") {
          if (newElement.tagName != "TITLE") {
            continue;
          }
          if (element.innerHTML == newElement.innerHTML) {
            elementList.splice(index, 1);
            return true;
          }
        }
        if (newElement.isEqualNode(element)) {
          elementList.splice(index, 1);
          return true;
        }
      }
      return false;
    }
    removeCurrentHeadProvisionalElements() {
      for (const element of this.currentHeadProvisionalElements) {
        document.head.removeChild(element);
      }
    }
    copyNewHeadProvisionalElements() {
      for (const element of this.newHeadProvisionalElements) {
        document.head.appendChild(element);
      }
    }
    activateNewBody() {
      document.adoptNode(this.newElement);
      this.activateNewBodyScriptElements();
    }
    activateNewBodyScriptElements() {
      for (const inertScriptElement of this.newBodyScriptElements) {
        const activatedScriptElement = activateScriptElement(inertScriptElement);
        inertScriptElement.replaceWith(activatedScriptElement);
      }
    }
    async assignNewBody() {
      await this.renderElement(this.currentElement, this.newElement);
    }
    get newHeadStylesheetElements() {
      return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
    }
    get newHeadScriptElements() {
      return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
    }
    get currentHeadProvisionalElements() {
      return this.currentHeadSnapshot.provisionalElements;
    }
    get newHeadProvisionalElements() {
      return this.newHeadSnapshot.provisionalElements;
    }
    get newBodyScriptElements() {
      return this.newElement.querySelectorAll("script");
    }
  };
  var SnapshotCache = class {
    constructor(size) {
      this.keys = [];
      this.snapshots = {};
      this.size = size;
    }
    has(location2) {
      return toCacheKey(location2) in this.snapshots;
    }
    get(location2) {
      if (this.has(location2)) {
        const snapshot = this.read(location2);
        this.touch(location2);
        return snapshot;
      }
    }
    put(location2, snapshot) {
      this.write(location2, snapshot);
      this.touch(location2);
      return snapshot;
    }
    clear() {
      this.snapshots = {};
    }
    read(location2) {
      return this.snapshots[toCacheKey(location2)];
    }
    write(location2, snapshot) {
      this.snapshots[toCacheKey(location2)] = snapshot;
    }
    touch(location2) {
      const key = toCacheKey(location2);
      const index = this.keys.indexOf(key);
      if (index > -1)
        this.keys.splice(index, 1);
      this.keys.unshift(key);
      this.trim();
    }
    trim() {
      for (const key of this.keys.splice(this.size)) {
        delete this.snapshots[key];
      }
    }
  };
  var PageView = class extends View {
    constructor() {
      super(...arguments);
      this.snapshotCache = new SnapshotCache(10);
      this.lastRenderedLocation = new URL(location.href);
      this.forceReloaded = false;
    }
    renderPage(snapshot, isPreview = false, willRender = true, visit2) {
      const renderer = new PageRenderer(this.snapshot, snapshot, PageRenderer.renderElement, isPreview, willRender);
      if (!renderer.shouldRender) {
        this.forceReloaded = true;
      } else {
        visit2 === null || visit2 === void 0 ? void 0 : visit2.changeHistory();
      }
      return this.render(renderer);
    }
    renderError(snapshot, visit2) {
      visit2 === null || visit2 === void 0 ? void 0 : visit2.changeHistory();
      const renderer = new ErrorRenderer(this.snapshot, snapshot, ErrorRenderer.renderElement, false);
      return this.render(renderer);
    }
    clearSnapshotCache() {
      this.snapshotCache.clear();
    }
    async cacheSnapshot(snapshot = this.snapshot) {
      if (snapshot.isCacheable) {
        this.delegate.viewWillCacheSnapshot();
        const { lastRenderedLocation: location2 } = this;
        await nextEventLoopTick();
        const cachedSnapshot = snapshot.clone();
        this.snapshotCache.put(location2, cachedSnapshot);
        return cachedSnapshot;
      }
    }
    getCachedSnapshotForLocation(location2) {
      return this.snapshotCache.get(location2);
    }
    get snapshot() {
      return PageSnapshot.fromElement(this.element);
    }
  };
  var Preloader = class {
    constructor(delegate) {
      this.selector = "a[data-turbo-preload]";
      this.delegate = delegate;
    }
    get snapshotCache() {
      return this.delegate.navigator.view.snapshotCache;
    }
    start() {
      if (document.readyState === "loading") {
        return document.addEventListener("DOMContentLoaded", () => {
          this.preloadOnLoadLinksForView(document.body);
        });
      } else {
        this.preloadOnLoadLinksForView(document.body);
      }
    }
    preloadOnLoadLinksForView(element) {
      for (const link of element.querySelectorAll(this.selector)) {
        this.preloadURL(link);
      }
    }
    async preloadURL(link) {
      const location2 = new URL(link.href);
      if (this.snapshotCache.has(location2)) {
        return;
      }
      try {
        const response = await fetch(location2.toString(), { headers: { "VND.PREFETCH": "true", Accept: "text/html" } });
        const responseText = await response.text();
        const snapshot = PageSnapshot.fromHTMLString(responseText);
        this.snapshotCache.put(location2, snapshot);
      } catch (_) {
      }
    }
  };
  var Session = class {
    constructor() {
      this.navigator = new Navigator(this);
      this.history = new History(this);
      this.preloader = new Preloader(this);
      this.view = new PageView(this, document.documentElement);
      this.adapter = new BrowserAdapter(this);
      this.pageObserver = new PageObserver(this);
      this.cacheObserver = new CacheObserver();
      this.linkClickObserver = new LinkClickObserver(this, window);
      this.formSubmitObserver = new FormSubmitObserver(this, document);
      this.scrollObserver = new ScrollObserver(this);
      this.streamObserver = new StreamObserver(this);
      this.formLinkClickObserver = new FormLinkClickObserver(this, document.documentElement);
      this.frameRedirector = new FrameRedirector(this, document.documentElement);
      this.streamMessageRenderer = new StreamMessageRenderer();
      this.drive = true;
      this.enabled = true;
      this.progressBarDelay = 500;
      this.started = false;
      this.formMode = "on";
    }
    start() {
      if (!this.started) {
        this.pageObserver.start();
        this.cacheObserver.start();
        this.formLinkClickObserver.start();
        this.linkClickObserver.start();
        this.formSubmitObserver.start();
        this.scrollObserver.start();
        this.streamObserver.start();
        this.frameRedirector.start();
        this.history.start();
        this.preloader.start();
        this.started = true;
        this.enabled = true;
      }
    }
    disable() {
      this.enabled = false;
    }
    stop() {
      if (this.started) {
        this.pageObserver.stop();
        this.cacheObserver.stop();
        this.formLinkClickObserver.stop();
        this.linkClickObserver.stop();
        this.formSubmitObserver.stop();
        this.scrollObserver.stop();
        this.streamObserver.stop();
        this.frameRedirector.stop();
        this.history.stop();
        this.started = false;
      }
    }
    registerAdapter(adapter) {
      this.adapter = adapter;
    }
    visit(location2, options = {}) {
      const frameElement = options.frame ? document.getElementById(options.frame) : null;
      if (frameElement instanceof FrameElement) {
        frameElement.src = location2.toString();
        frameElement.loaded;
      } else {
        this.navigator.proposeVisit(expandURL(location2), options);
      }
    }
    connectStreamSource(source) {
      this.streamObserver.connectStreamSource(source);
    }
    disconnectStreamSource(source) {
      this.streamObserver.disconnectStreamSource(source);
    }
    renderStreamMessage(message) {
      this.streamMessageRenderer.render(StreamMessage.wrap(message));
    }
    clearCache() {
      this.view.clearSnapshotCache();
    }
    setProgressBarDelay(delay) {
      this.progressBarDelay = delay;
    }
    setFormMode(mode) {
      this.formMode = mode;
    }
    get location() {
      return this.history.location;
    }
    get restorationIdentifier() {
      return this.history.restorationIdentifier;
    }
    historyPoppedToLocationWithRestorationIdentifier(location2, restorationIdentifier) {
      if (this.enabled) {
        this.navigator.startVisit(location2, restorationIdentifier, {
          action: "restore",
          historyChanged: true
        });
      } else {
        this.adapter.pageInvalidated({
          reason: "turbo_disabled"
        });
      }
    }
    scrollPositionChanged(position) {
      this.history.updateRestorationData({ scrollPosition: position });
    }
    willSubmitFormLinkToLocation(link, location2) {
      return this.elementIsNavigatable(link) && locationIsVisitable(location2, this.snapshot.rootLocation);
    }
    submittedFormLinkToLocation() {
    }
    willFollowLinkToLocation(link, location2, event) {
      return this.elementIsNavigatable(link) && locationIsVisitable(location2, this.snapshot.rootLocation) && this.applicationAllowsFollowingLinkToLocation(link, location2, event);
    }
    followedLinkToLocation(link, location2) {
      const action = this.getActionForLink(link);
      const acceptsStreamResponse = link.hasAttribute("data-turbo-stream");
      this.visit(location2.href, { action, acceptsStreamResponse });
    }
    allowsVisitingLocationWithAction(location2, action) {
      return this.locationWithActionIsSamePage(location2, action) || this.applicationAllowsVisitingLocation(location2);
    }
    visitProposedToLocation(location2, options) {
      extendURLWithDeprecatedProperties(location2);
      this.adapter.visitProposedToLocation(location2, options);
    }
    visitStarted(visit2) {
      if (!visit2.acceptsStreamResponse) {
        markAsBusy(document.documentElement);
      }
      extendURLWithDeprecatedProperties(visit2.location);
      if (!visit2.silent) {
        this.notifyApplicationAfterVisitingLocation(visit2.location, visit2.action);
      }
    }
    visitCompleted(visit2) {
      clearBusyState(document.documentElement);
      this.notifyApplicationAfterPageLoad(visit2.getTimingMetrics());
    }
    locationWithActionIsSamePage(location2, action) {
      return this.navigator.locationWithActionIsSamePage(location2, action);
    }
    visitScrolledToSamePageLocation(oldURL, newURL) {
      this.notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL);
    }
    willSubmitForm(form, submitter) {
      const action = getAction(form, submitter);
      return this.submissionIsNavigatable(form, submitter) && locationIsVisitable(expandURL(action), this.snapshot.rootLocation);
    }
    formSubmitted(form, submitter) {
      this.navigator.submitForm(form, submitter);
    }
    pageBecameInteractive() {
      this.view.lastRenderedLocation = this.location;
      this.notifyApplicationAfterPageLoad();
    }
    pageLoaded() {
      this.history.assumeControlOfScrollRestoration();
    }
    pageWillUnload() {
      this.history.relinquishControlOfScrollRestoration();
    }
    receivedMessageFromStream(message) {
      this.renderStreamMessage(message);
    }
    viewWillCacheSnapshot() {
      var _a;
      if (!((_a = this.navigator.currentVisit) === null || _a === void 0 ? void 0 : _a.silent)) {
        this.notifyApplicationBeforeCachingSnapshot();
      }
    }
    allowsImmediateRender({ element }, options) {
      const event = this.notifyApplicationBeforeRender(element, options);
      const { defaultPrevented, detail: { render } } = event;
      if (this.view.renderer && render) {
        this.view.renderer.renderElement = render;
      }
      return !defaultPrevented;
    }
    viewRenderedSnapshot(_snapshot, _isPreview) {
      this.view.lastRenderedLocation = this.history.location;
      this.notifyApplicationAfterRender();
    }
    preloadOnLoadLinksForView(element) {
      this.preloader.preloadOnLoadLinksForView(element);
    }
    viewInvalidated(reason) {
      this.adapter.pageInvalidated(reason);
    }
    frameLoaded(frame) {
      this.notifyApplicationAfterFrameLoad(frame);
    }
    frameRendered(fetchResponse, frame) {
      this.notifyApplicationAfterFrameRender(fetchResponse, frame);
    }
    applicationAllowsFollowingLinkToLocation(link, location2, ev) {
      const event = this.notifyApplicationAfterClickingLinkToLocation(link, location2, ev);
      return !event.defaultPrevented;
    }
    applicationAllowsVisitingLocation(location2) {
      const event = this.notifyApplicationBeforeVisitingLocation(location2);
      return !event.defaultPrevented;
    }
    notifyApplicationAfterClickingLinkToLocation(link, location2, event) {
      return dispatch("turbo:click", {
        target: link,
        detail: { url: location2.href, originalEvent: event },
        cancelable: true
      });
    }
    notifyApplicationBeforeVisitingLocation(location2) {
      return dispatch("turbo:before-visit", {
        detail: { url: location2.href },
        cancelable: true
      });
    }
    notifyApplicationAfterVisitingLocation(location2, action) {
      return dispatch("turbo:visit", { detail: { url: location2.href, action } });
    }
    notifyApplicationBeforeCachingSnapshot() {
      return dispatch("turbo:before-cache");
    }
    notifyApplicationBeforeRender(newBody, options) {
      return dispatch("turbo:before-render", {
        detail: Object.assign({ newBody }, options),
        cancelable: true
      });
    }
    notifyApplicationAfterRender() {
      return dispatch("turbo:render");
    }
    notifyApplicationAfterPageLoad(timing = {}) {
      return dispatch("turbo:load", {
        detail: { url: this.location.href, timing }
      });
    }
    notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL) {
      dispatchEvent(new HashChangeEvent("hashchange", {
        oldURL: oldURL.toString(),
        newURL: newURL.toString()
      }));
    }
    notifyApplicationAfterFrameLoad(frame) {
      return dispatch("turbo:frame-load", { target: frame });
    }
    notifyApplicationAfterFrameRender(fetchResponse, frame) {
      return dispatch("turbo:frame-render", {
        detail: { fetchResponse },
        target: frame,
        cancelable: true
      });
    }
    submissionIsNavigatable(form, submitter) {
      if (this.formMode == "off") {
        return false;
      } else {
        const submitterIsNavigatable = submitter ? this.elementIsNavigatable(submitter) : true;
        if (this.formMode == "optin") {
          return submitterIsNavigatable && form.closest('[data-turbo="true"]') != null;
        } else {
          return submitterIsNavigatable && this.elementIsNavigatable(form);
        }
      }
    }
    elementIsNavigatable(element) {
      const container = findClosestRecursively(element, "[data-turbo]");
      const withinFrame = findClosestRecursively(element, "turbo-frame");
      if (this.drive || withinFrame) {
        if (container) {
          return container.getAttribute("data-turbo") != "false";
        } else {
          return true;
        }
      } else {
        if (container) {
          return container.getAttribute("data-turbo") == "true";
        } else {
          return false;
        }
      }
    }
    getActionForLink(link) {
      return getVisitAction(link) || "advance";
    }
    get snapshot() {
      return this.view.snapshot;
    }
  };
  function extendURLWithDeprecatedProperties(url) {
    Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
  }
  var deprecatedLocationPropertyDescriptors = {
    absoluteURL: {
      get() {
        return this.toString();
      }
    }
  };
  var Cache = class {
    constructor(session2) {
      this.session = session2;
    }
    clear() {
      this.session.clearCache();
    }
    resetCacheControl() {
      this.setCacheControl("");
    }
    exemptPageFromCache() {
      this.setCacheControl("no-cache");
    }
    exemptPageFromPreview() {
      this.setCacheControl("no-preview");
    }
    setCacheControl(value) {
      setMetaContent("turbo-cache-control", value);
    }
  };
  var StreamActions = {
    after() {
      this.targetElements.forEach((e) => {
        var _a;
        return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(this.templateContent, e.nextSibling);
      });
    },
    append() {
      this.removeDuplicateTargetChildren();
      this.targetElements.forEach((e) => e.append(this.templateContent));
    },
    before() {
      this.targetElements.forEach((e) => {
        var _a;
        return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(this.templateContent, e);
      });
    },
    prepend() {
      this.removeDuplicateTargetChildren();
      this.targetElements.forEach((e) => e.prepend(this.templateContent));
    },
    remove() {
      this.targetElements.forEach((e) => e.remove());
    },
    replace() {
      this.targetElements.forEach((e) => e.replaceWith(this.templateContent));
    },
    update() {
      this.targetElements.forEach((targetElement) => {
        targetElement.innerHTML = "";
        targetElement.append(this.templateContent);
      });
    }
  };
  var session = new Session();
  var cache = new Cache(session);
  var { navigator: navigator$1 } = session;
  function start() {
    session.start();
  }
  function registerAdapter(adapter) {
    session.registerAdapter(adapter);
  }
  function visit(location2, options) {
    session.visit(location2, options);
  }
  function connectStreamSource(source) {
    session.connectStreamSource(source);
  }
  function disconnectStreamSource(source) {
    session.disconnectStreamSource(source);
  }
  function renderStreamMessage(message) {
    session.renderStreamMessage(message);
  }
  function clearCache() {
    console.warn("Please replace `Turbo.clearCache()` with `Turbo.cache.clear()`. The top-level function is deprecated and will be removed in a future version of Turbo.`");
    session.clearCache();
  }
  function setProgressBarDelay(delay) {
    session.setProgressBarDelay(delay);
  }
  function setConfirmMethod(confirmMethod) {
    FormSubmission.confirmMethod = confirmMethod;
  }
  function setFormMode(mode) {
    session.setFormMode(mode);
  }
  var Turbo = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    navigator: navigator$1,
    session,
    cache,
    PageRenderer,
    PageSnapshot,
    FrameRenderer,
    start,
    registerAdapter,
    visit,
    connectStreamSource,
    disconnectStreamSource,
    renderStreamMessage,
    clearCache,
    setProgressBarDelay,
    setConfirmMethod,
    setFormMode,
    StreamActions
  });
  var TurboFrameMissingError = class extends Error {
  };
  var FrameController = class {
    constructor(element) {
      this.fetchResponseLoaded = (_fetchResponse) => {
      };
      this.currentFetchRequest = null;
      this.resolveVisitPromise = () => {
      };
      this.connected = false;
      this.hasBeenLoaded = false;
      this.ignoredAttributes = /* @__PURE__ */ new Set();
      this.action = null;
      this.visitCachedSnapshot = ({ element: element2 }) => {
        const frame = element2.querySelector("#" + this.element.id);
        if (frame && this.previousFrameElement) {
          frame.replaceChildren(...this.previousFrameElement.children);
        }
        delete this.previousFrameElement;
      };
      this.element = element;
      this.view = new FrameView(this, this.element);
      this.appearanceObserver = new AppearanceObserver(this, this.element);
      this.formLinkClickObserver = new FormLinkClickObserver(this, this.element);
      this.linkInterceptor = new LinkInterceptor(this, this.element);
      this.restorationIdentifier = uuid();
      this.formSubmitObserver = new FormSubmitObserver(this, this.element);
    }
    connect() {
      if (!this.connected) {
        this.connected = true;
        if (this.loadingStyle == FrameLoadingStyle.lazy) {
          this.appearanceObserver.start();
        } else {
          this.loadSourceURL();
        }
        this.formLinkClickObserver.start();
        this.linkInterceptor.start();
        this.formSubmitObserver.start();
      }
    }
    disconnect() {
      if (this.connected) {
        this.connected = false;
        this.appearanceObserver.stop();
        this.formLinkClickObserver.stop();
        this.linkInterceptor.stop();
        this.formSubmitObserver.stop();
      }
    }
    disabledChanged() {
      if (this.loadingStyle == FrameLoadingStyle.eager) {
        this.loadSourceURL();
      }
    }
    sourceURLChanged() {
      if (this.isIgnoringChangesTo("src"))
        return;
      if (this.element.isConnected) {
        this.complete = false;
      }
      if (this.loadingStyle == FrameLoadingStyle.eager || this.hasBeenLoaded) {
        this.loadSourceURL();
      }
    }
    sourceURLReloaded() {
      const { src } = this.element;
      this.ignoringChangesToAttribute("complete", () => {
        this.element.removeAttribute("complete");
      });
      this.element.src = null;
      this.element.src = src;
      return this.element.loaded;
    }
    completeChanged() {
      if (this.isIgnoringChangesTo("complete"))
        return;
      this.loadSourceURL();
    }
    loadingStyleChanged() {
      if (this.loadingStyle == FrameLoadingStyle.lazy) {
        this.appearanceObserver.start();
      } else {
        this.appearanceObserver.stop();
        this.loadSourceURL();
      }
    }
    async loadSourceURL() {
      if (this.enabled && this.isActive && !this.complete && this.sourceURL) {
        this.element.loaded = this.visit(expandURL(this.sourceURL));
        this.appearanceObserver.stop();
        await this.element.loaded;
        this.hasBeenLoaded = true;
      }
    }
    async loadResponse(fetchResponse) {
      if (fetchResponse.redirected || fetchResponse.succeeded && fetchResponse.isHTML) {
        this.sourceURL = fetchResponse.response.url;
      }
      try {
        const html = await fetchResponse.responseHTML;
        if (html) {
          const document2 = parseHTMLDocument(html);
          const pageSnapshot = PageSnapshot.fromDocument(document2);
          if (pageSnapshot.isVisitable) {
            await this.loadFrameResponse(fetchResponse, document2);
          } else {
            await this.handleUnvisitableFrameResponse(fetchResponse);
          }
        }
      } finally {
        this.fetchResponseLoaded = () => {
        };
      }
    }
    elementAppearedInViewport(element) {
      this.proposeVisitIfNavigatedWithAction(element, element);
      this.loadSourceURL();
    }
    willSubmitFormLinkToLocation(link) {
      return this.shouldInterceptNavigation(link);
    }
    submittedFormLinkToLocation(link, _location, form) {
      const frame = this.findFrameElement(link);
      if (frame)
        form.setAttribute("data-turbo-frame", frame.id);
    }
    shouldInterceptLinkClick(element, _location, _event) {
      return this.shouldInterceptNavigation(element);
    }
    linkClickIntercepted(element, location2) {
      this.navigateFrame(element, location2);
    }
    willSubmitForm(element, submitter) {
      return element.closest("turbo-frame") == this.element && this.shouldInterceptNavigation(element, submitter);
    }
    formSubmitted(element, submitter) {
      if (this.formSubmission) {
        this.formSubmission.stop();
      }
      this.formSubmission = new FormSubmission(this, element, submitter);
      const { fetchRequest } = this.formSubmission;
      this.prepareRequest(fetchRequest);
      this.formSubmission.start();
    }
    prepareRequest(request) {
      var _a;
      request.headers["Turbo-Frame"] = this.id;
      if ((_a = this.currentNavigationElement) === null || _a === void 0 ? void 0 : _a.hasAttribute("data-turbo-stream")) {
        request.acceptResponseType(StreamMessage.contentType);
      }
    }
    requestStarted(_request) {
      markAsBusy(this.element);
    }
    requestPreventedHandlingResponse(_request, _response) {
      this.resolveVisitPromise();
    }
    async requestSucceededWithResponse(request, response) {
      await this.loadResponse(response);
      this.resolveVisitPromise();
    }
    async requestFailedWithResponse(request, response) {
      await this.loadResponse(response);
      this.resolveVisitPromise();
    }
    requestErrored(request, error2) {
      console.error(error2);
      this.resolveVisitPromise();
    }
    requestFinished(_request) {
      clearBusyState(this.element);
    }
    formSubmissionStarted({ formElement }) {
      markAsBusy(formElement, this.findFrameElement(formElement));
    }
    formSubmissionSucceededWithResponse(formSubmission, response) {
      const frame = this.findFrameElement(formSubmission.formElement, formSubmission.submitter);
      frame.delegate.proposeVisitIfNavigatedWithAction(frame, formSubmission.formElement, formSubmission.submitter);
      frame.delegate.loadResponse(response);
      if (!formSubmission.isSafe) {
        session.clearCache();
      }
    }
    formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
      this.element.delegate.loadResponse(fetchResponse);
      session.clearCache();
    }
    formSubmissionErrored(formSubmission, error2) {
      console.error(error2);
    }
    formSubmissionFinished({ formElement }) {
      clearBusyState(formElement, this.findFrameElement(formElement));
    }
    allowsImmediateRender({ element: newFrame }, options) {
      const event = dispatch("turbo:before-frame-render", {
        target: this.element,
        detail: Object.assign({ newFrame }, options),
        cancelable: true
      });
      const { defaultPrevented, detail: { render } } = event;
      if (this.view.renderer && render) {
        this.view.renderer.renderElement = render;
      }
      return !defaultPrevented;
    }
    viewRenderedSnapshot(_snapshot, _isPreview) {
    }
    preloadOnLoadLinksForView(element) {
      session.preloadOnLoadLinksForView(element);
    }
    viewInvalidated() {
    }
    willRenderFrame(currentElement, _newElement) {
      this.previousFrameElement = currentElement.cloneNode(true);
    }
    async loadFrameResponse(fetchResponse, document2) {
      const newFrameElement = await this.extractForeignFrameElement(document2.body);
      if (newFrameElement) {
        const snapshot = new Snapshot(newFrameElement);
        const renderer = new FrameRenderer(this, this.view.snapshot, snapshot, FrameRenderer.renderElement, false, false);
        if (this.view.renderPromise)
          await this.view.renderPromise;
        this.changeHistory();
        await this.view.render(renderer);
        this.complete = true;
        session.frameRendered(fetchResponse, this.element);
        session.frameLoaded(this.element);
        this.fetchResponseLoaded(fetchResponse);
      } else if (this.willHandleFrameMissingFromResponse(fetchResponse)) {
        this.handleFrameMissingFromResponse(fetchResponse);
      }
    }
    async visit(url) {
      var _a;
      const request = new FetchRequest(this, FetchMethod.get, url, new URLSearchParams(), this.element);
      (_a = this.currentFetchRequest) === null || _a === void 0 ? void 0 : _a.cancel();
      this.currentFetchRequest = request;
      return new Promise((resolve) => {
        this.resolveVisitPromise = () => {
          this.resolveVisitPromise = () => {
          };
          this.currentFetchRequest = null;
          resolve();
        };
        request.perform();
      });
    }
    navigateFrame(element, url, submitter) {
      const frame = this.findFrameElement(element, submitter);
      frame.delegate.proposeVisitIfNavigatedWithAction(frame, element, submitter);
      this.withCurrentNavigationElement(element, () => {
        frame.src = url;
      });
    }
    proposeVisitIfNavigatedWithAction(frame, element, submitter) {
      this.action = getVisitAction(submitter, element, frame);
      if (this.action) {
        const pageSnapshot = PageSnapshot.fromElement(frame).clone();
        const { visitCachedSnapshot } = frame.delegate;
        frame.delegate.fetchResponseLoaded = (fetchResponse) => {
          if (frame.src) {
            const { statusCode, redirected } = fetchResponse;
            const responseHTML = frame.ownerDocument.documentElement.outerHTML;
            const response = { statusCode, redirected, responseHTML };
            const options = {
              response,
              visitCachedSnapshot,
              willRender: false,
              updateHistory: false,
              restorationIdentifier: this.restorationIdentifier,
              snapshot: pageSnapshot
            };
            if (this.action)
              options.action = this.action;
            session.visit(frame.src, options);
          }
        };
      }
    }
    changeHistory() {
      if (this.action) {
        const method = getHistoryMethodForAction(this.action);
        session.history.update(method, expandURL(this.element.src || ""), this.restorationIdentifier);
      }
    }
    async handleUnvisitableFrameResponse(fetchResponse) {
      console.warn(`The response (${fetchResponse.statusCode}) from <turbo-frame id="${this.element.id}"> is performing a full page visit due to turbo-visit-control.`);
      await this.visitResponse(fetchResponse.response);
    }
    willHandleFrameMissingFromResponse(fetchResponse) {
      this.element.setAttribute("complete", "");
      const response = fetchResponse.response;
      const visit2 = async (url, options = {}) => {
        if (url instanceof Response) {
          this.visitResponse(url);
        } else {
          session.visit(url, options);
        }
      };
      const event = dispatch("turbo:frame-missing", {
        target: this.element,
        detail: { response, visit: visit2 },
        cancelable: true
      });
      return !event.defaultPrevented;
    }
    handleFrameMissingFromResponse(fetchResponse) {
      this.view.missing();
      this.throwFrameMissingError(fetchResponse);
    }
    throwFrameMissingError(fetchResponse) {
      const message = `The response (${fetchResponse.statusCode}) did not contain the expected <turbo-frame id="${this.element.id}"> and will be ignored. To perform a full page visit instead, set turbo-visit-control to reload.`;
      throw new TurboFrameMissingError(message);
    }
    async visitResponse(response) {
      const wrapped = new FetchResponse(response);
      const responseHTML = await wrapped.responseHTML;
      const { location: location2, redirected, statusCode } = wrapped;
      return session.visit(location2, { response: { redirected, statusCode, responseHTML } });
    }
    findFrameElement(element, submitter) {
      var _a;
      const id2 = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
      return (_a = getFrameElementById(id2)) !== null && _a !== void 0 ? _a : this.element;
    }
    async extractForeignFrameElement(container) {
      let element;
      const id2 = CSS.escape(this.id);
      try {
        element = activateElement(container.querySelector(`turbo-frame#${id2}`), this.sourceURL);
        if (element) {
          return element;
        }
        element = activateElement(container.querySelector(`turbo-frame[src][recurse~=${id2}]`), this.sourceURL);
        if (element) {
          await element.loaded;
          return await this.extractForeignFrameElement(element);
        }
      } catch (error2) {
        console.error(error2);
        return new FrameElement();
      }
      return null;
    }
    formActionIsVisitable(form, submitter) {
      const action = getAction(form, submitter);
      return locationIsVisitable(expandURL(action), this.rootLocation);
    }
    shouldInterceptNavigation(element, submitter) {
      const id2 = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
      if (element instanceof HTMLFormElement && !this.formActionIsVisitable(element, submitter)) {
        return false;
      }
      if (!this.enabled || id2 == "_top") {
        return false;
      }
      if (id2) {
        const frameElement = getFrameElementById(id2);
        if (frameElement) {
          return !frameElement.disabled;
        }
      }
      if (!session.elementIsNavigatable(element)) {
        return false;
      }
      if (submitter && !session.elementIsNavigatable(submitter)) {
        return false;
      }
      return true;
    }
    get id() {
      return this.element.id;
    }
    get enabled() {
      return !this.element.disabled;
    }
    get sourceURL() {
      if (this.element.src) {
        return this.element.src;
      }
    }
    set sourceURL(sourceURL) {
      this.ignoringChangesToAttribute("src", () => {
        this.element.src = sourceURL !== null && sourceURL !== void 0 ? sourceURL : null;
      });
    }
    get loadingStyle() {
      return this.element.loading;
    }
    get isLoading() {
      return this.formSubmission !== void 0 || this.resolveVisitPromise() !== void 0;
    }
    get complete() {
      return this.element.hasAttribute("complete");
    }
    set complete(value) {
      this.ignoringChangesToAttribute("complete", () => {
        if (value) {
          this.element.setAttribute("complete", "");
        } else {
          this.element.removeAttribute("complete");
        }
      });
    }
    get isActive() {
      return this.element.isActive && this.connected;
    }
    get rootLocation() {
      var _a;
      const meta = this.element.ownerDocument.querySelector(`meta[name="turbo-root"]`);
      const root = (_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/";
      return expandURL(root);
    }
    isIgnoringChangesTo(attributeName) {
      return this.ignoredAttributes.has(attributeName);
    }
    ignoringChangesToAttribute(attributeName, callback) {
      this.ignoredAttributes.add(attributeName);
      callback();
      this.ignoredAttributes.delete(attributeName);
    }
    withCurrentNavigationElement(element, callback) {
      this.currentNavigationElement = element;
      callback();
      delete this.currentNavigationElement;
    }
  };
  function getFrameElementById(id2) {
    if (id2 != null) {
      const element = document.getElementById(id2);
      if (element instanceof FrameElement) {
        return element;
      }
    }
  }
  function activateElement(element, currentURL) {
    if (element) {
      const src = element.getAttribute("src");
      if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) {
        throw new Error(`Matching <turbo-frame id="${element.id}"> element has a source URL which references itself`);
      }
      if (element.ownerDocument !== document) {
        element = document.importNode(element, true);
      }
      if (element instanceof FrameElement) {
        element.connectedCallback();
        element.disconnectedCallback();
        return element;
      }
    }
  }
  var StreamElement = class _StreamElement extends HTMLElement {
    static async renderElement(newElement) {
      await newElement.performAction();
    }
    async connectedCallback() {
      try {
        await this.render();
      } catch (error2) {
        console.error(error2);
      } finally {
        this.disconnect();
      }
    }
    async render() {
      var _a;
      return (_a = this.renderPromise) !== null && _a !== void 0 ? _a : this.renderPromise = (async () => {
        const event = this.beforeRenderEvent;
        if (this.dispatchEvent(event)) {
          await nextAnimationFrame();
          await event.detail.render(this);
        }
      })();
    }
    disconnect() {
      try {
        this.remove();
      } catch (_a) {
      }
    }
    removeDuplicateTargetChildren() {
      this.duplicateChildren.forEach((c) => c.remove());
    }
    get duplicateChildren() {
      var _a;
      const existingChildren = this.targetElements.flatMap((e) => [...e.children]).filter((c) => !!c.id);
      const newChildrenIds = [...((_a = this.templateContent) === null || _a === void 0 ? void 0 : _a.children) || []].filter((c) => !!c.id).map((c) => c.id);
      return existingChildren.filter((c) => newChildrenIds.includes(c.id));
    }
    get performAction() {
      if (this.action) {
        const actionFunction = StreamActions[this.action];
        if (actionFunction) {
          return actionFunction;
        }
        this.raise("unknown action");
      }
      this.raise("action attribute is missing");
    }
    get targetElements() {
      if (this.target) {
        return this.targetElementsById;
      } else if (this.targets) {
        return this.targetElementsByQuery;
      } else {
        this.raise("target or targets attribute is missing");
      }
    }
    get templateContent() {
      return this.templateElement.content.cloneNode(true);
    }
    get templateElement() {
      if (this.firstElementChild === null) {
        const template = this.ownerDocument.createElement("template");
        this.appendChild(template);
        return template;
      } else if (this.firstElementChild instanceof HTMLTemplateElement) {
        return this.firstElementChild;
      }
      this.raise("first child element must be a <template> element");
    }
    get action() {
      return this.getAttribute("action");
    }
    get target() {
      return this.getAttribute("target");
    }
    get targets() {
      return this.getAttribute("targets");
    }
    raise(message) {
      throw new Error(`${this.description}: ${message}`);
    }
    get description() {
      var _a, _b;
      return (_b = ((_a = this.outerHTML.match(/<[^>]+>/)) !== null && _a !== void 0 ? _a : [])[0]) !== null && _b !== void 0 ? _b : "<turbo-stream>";
    }
    get beforeRenderEvent() {
      return new CustomEvent("turbo:before-stream-render", {
        bubbles: true,
        cancelable: true,
        detail: { newStream: this, render: _StreamElement.renderElement }
      });
    }
    get targetElementsById() {
      var _a;
      const element = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.getElementById(this.target);
      if (element !== null) {
        return [element];
      } else {
        return [];
      }
    }
    get targetElementsByQuery() {
      var _a;
      const elements = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.targets);
      if (elements.length !== 0) {
        return Array.prototype.slice.call(elements);
      } else {
        return [];
      }
    }
  };
  var StreamSourceElement = class extends HTMLElement {
    constructor() {
      super(...arguments);
      this.streamSource = null;
    }
    connectedCallback() {
      this.streamSource = this.src.match(/^ws{1,2}:/) ? new WebSocket(this.src) : new EventSource(this.src);
      connectStreamSource(this.streamSource);
    }
    disconnectedCallback() {
      if (this.streamSource) {
        disconnectStreamSource(this.streamSource);
      }
    }
    get src() {
      return this.getAttribute("src") || "";
    }
  };
  FrameElement.delegateConstructor = FrameController;
  if (customElements.get("turbo-frame") === void 0) {
    customElements.define("turbo-frame", FrameElement);
  }
  if (customElements.get("turbo-stream") === void 0) {
    customElements.define("turbo-stream", StreamElement);
  }
  if (customElements.get("turbo-stream-source") === void 0) {
    customElements.define("turbo-stream-source", StreamSourceElement);
  }
  (() => {
    let element = document.currentScript;
    if (!element)
      return;
    if (element.hasAttribute("data-turbo-suppress-warning"))
      return;
    element = element.parentElement;
    while (element) {
      if (element == document.body) {
        return console.warn(unindent`
        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!

        Load your application’s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements

        ——
        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s
      `, element.outerHTML);
      }
      element = element.parentElement;
    }
  })();
  window.Turbo = Turbo;
  start();

  // node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js
  var consumer;
  async function getConsumer() {
    return consumer || setConsumer(createConsumer2().then(setConsumer));
  }
  function setConsumer(newConsumer) {
    return consumer = newConsumer;
  }
  async function createConsumer2() {
    const { createConsumer: createConsumer3 } = await Promise.resolve().then(() => (init_src(), src_exports));
    return createConsumer3();
  }
  async function subscribeTo(channel, mixin) {
    const { subscriptions } = await getConsumer();
    return subscriptions.create(channel, mixin);
  }

  // node_modules/@hotwired/turbo-rails/app/javascript/turbo/snakeize.js
  function walk(obj) {
    if (!obj || typeof obj !== "object")
      return obj;
    if (obj instanceof Date || obj instanceof RegExp)
      return obj;
    if (Array.isArray(obj))
      return obj.map(walk);
    return Object.keys(obj).reduce(function(acc, key) {
      var camel = key[0].toLowerCase() + key.slice(1).replace(/([A-Z]+)/g, function(m, x) {
        return "_" + x.toLowerCase();
      });
      acc[camel] = walk(obj[key]);
      return acc;
    }, {});
  }

  // node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js
  var TurboCableStreamSourceElement = class extends HTMLElement {
    async connectedCallback() {
      connectStreamSource(this);
      this.subscription = await subscribeTo(this.channel, {
        received: this.dispatchMessageEvent.bind(this),
        connected: this.subscriptionConnected.bind(this),
        disconnected: this.subscriptionDisconnected.bind(this)
      });
    }
    disconnectedCallback() {
      disconnectStreamSource(this);
      if (this.subscription)
        this.subscription.unsubscribe();
    }
    dispatchMessageEvent(data) {
      const event = new MessageEvent("message", { data });
      return this.dispatchEvent(event);
    }
    subscriptionConnected() {
      this.setAttribute("connected", "");
    }
    subscriptionDisconnected() {
      this.removeAttribute("connected");
    }
    get channel() {
      const channel = this.getAttribute("channel");
      const signed_stream_name = this.getAttribute("signed-stream-name");
      return { channel, signed_stream_name, ...walk({ ...this.dataset }) };
    }
  };
  if (customElements.get("turbo-cable-stream-source") === void 0) {
    customElements.define("turbo-cable-stream-source", TurboCableStreamSourceElement);
  }

  // node_modules/@hotwired/turbo-rails/app/javascript/turbo/fetch_requests.js
  function encodeMethodIntoRequestBody(event) {
    if (event.target instanceof HTMLFormElement) {
      const { target: form, detail: { fetchOptions } } = event;
      form.addEventListener("turbo:submit-start", ({ detail: { formSubmission: { submitter } } }) => {
        const body = isBodyInit(fetchOptions.body) ? fetchOptions.body : new URLSearchParams();
        const method = determineFetchMethod(submitter, body, form);
        if (!/get/i.test(method)) {
          if (/post/i.test(method)) {
            body.delete("_method");
          } else {
            body.set("_method", method);
          }
          fetchOptions.method = "post";
        }
      }, { once: true });
    }
  }
  function determineFetchMethod(submitter, body, form) {
    const formMethod = determineFormMethod(submitter);
    const overrideMethod = body.get("_method");
    const method = form.getAttribute("method") || "get";
    if (typeof formMethod == "string") {
      return formMethod;
    } else if (typeof overrideMethod == "string") {
      return overrideMethod;
    } else {
      return method;
    }
  }
  function determineFormMethod(submitter) {
    if (submitter instanceof HTMLButtonElement || submitter instanceof HTMLInputElement) {
      if (submitter.hasAttribute("formmethod")) {
        return submitter.formMethod;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  function isBodyInit(body) {
    return body instanceof FormData || body instanceof URLSearchParams;
  }

  // node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js
  addEventListener("turbo:before-fetch-request", encodeMethodIntoRequestBody);

  // node_modules/@rails/activestorage/app/assets/javascripts/activestorage.esm.js
  var sparkMd5 = {
    exports: {}
  };
  (function(module, exports) {
    (function(factory) {
      {
        module.exports = factory();
      }
    })(function(undefined$1) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592")
        ;
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
            if (to !== undefined$1) {
              end = clamp(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex2) {
        var bytes = [], length = hex2.length, x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex2.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD52() {
        this.reset();
      }
      SparkMD52.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD52.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD52.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD52.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD52.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice()
        };
      };
      SparkMD52.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD52.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD52.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD52.hash = function(str, raw) {
        return SparkMD52.hashBinary(toUtf8(str), raw);
      };
      SparkMD52.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD52.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD52.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD52.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD52.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD52.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD52.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD52.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD52.prototype.setState.call(this, state);
      };
      SparkMD52.ArrayBuffer.prototype.destroy = SparkMD52.prototype.destroy;
      SparkMD52.ArrayBuffer.prototype._finish = SparkMD52.prototype._finish;
      SparkMD52.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD52;
    });
  })(sparkMd5);
  var SparkMD5 = sparkMd5.exports;
  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
  var FileChecksum = class _FileChecksum {
    static create(file, callback) {
      const instance = new _FileChecksum(file);
      instance.create(callback);
    }
    constructor(file) {
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }
    create(callback) {
      this.callback = callback;
      this.md5Buffer = new SparkMD5.ArrayBuffer();
      this.fileReader = new FileReader();
      this.fileReader.addEventListener("load", (event) => this.fileReaderDidLoad(event));
      this.fileReader.addEventListener("error", (event) => this.fileReaderDidError(event));
      this.readNextChunk();
    }
    fileReaderDidLoad(event) {
      this.md5Buffer.append(event.target.result);
      if (!this.readNextChunk()) {
        const binaryDigest = this.md5Buffer.end(true);
        const base64digest = btoa(binaryDigest);
        this.callback(null, base64digest);
      }
    }
    fileReaderDidError(event) {
      this.callback(`Error reading ${this.file.name}`);
    }
    readNextChunk() {
      if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
        const start3 = this.chunkIndex * this.chunkSize;
        const end = Math.min(start3 + this.chunkSize, this.file.size);
        const bytes = fileSlice.call(this.file, start3, end);
        this.fileReader.readAsArrayBuffer(bytes);
        this.chunkIndex++;
        return true;
      } else {
        return false;
      }
    }
  };
  function getMetaValue(name) {
    const element = findElement(document.head, `meta[name="${name}"]`);
    if (element) {
      return element.getAttribute("content");
    }
  }
  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    const elements = root.querySelectorAll(selector);
    return toArray(elements);
  }
  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    return root.querySelector(selector);
  }
  function dispatchEvent2(element, type, eventInit = {}) {
    const { disabled } = element;
    const { bubbles, cancelable, detail } = eventInit;
    const event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};
    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }
    return event;
  }
  function toArray(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }
  var BlobRecord = class {
    constructor(file, checksum, url, customHeaders = {}) {
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      Object.keys(customHeaders).forEach((headerKey) => {
        this.xhr.setRequestHeader(headerKey, customHeaders[headerKey]);
      });
      const csrfToken = getMetaValue("csrf-token");
      if (csrfToken != void 0) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }
      this.xhr.addEventListener("load", (event) => this.requestDidLoad(event));
      this.xhr.addEventListener("error", (event) => this.requestDidError(event));
    }
    get status() {
      return this.xhr.status;
    }
    get response() {
      const { responseType, response } = this.xhr;
      if (responseType == "json") {
        return response;
      } else {
        return JSON.parse(response);
      }
    }
    create(callback) {
      this.callback = callback;
      this.xhr.send(JSON.stringify({
        blob: this.attributes
      }));
    }
    requestDidLoad(event) {
      if (this.status >= 200 && this.status < 300) {
        const { response } = this;
        const { direct_upload } = response;
        delete response.direct_upload;
        this.attributes = response;
        this.directUploadData = direct_upload;
        this.callback(null, this.toJSON());
      } else {
        this.requestDidError(event);
      }
    }
    requestDidError(event) {
      this.callback(`Error creating Blob for "${this.file.name}". Status: ${this.status}`);
    }
    toJSON() {
      const result = {};
      for (const key in this.attributes) {
        result[key] = this.attributes[key];
      }
      return result;
    }
  };
  var BlobUpload = class {
    constructor(blob) {
      this.blob = blob;
      this.file = blob.file;
      const { url, headers } = blob.directUploadData;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";
      for (const key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }
      this.xhr.addEventListener("load", (event) => this.requestDidLoad(event));
      this.xhr.addEventListener("error", (event) => this.requestDidError(event));
    }
    create(callback) {
      this.callback = callback;
      this.xhr.send(this.file.slice());
    }
    requestDidLoad(event) {
      const { status, response } = this.xhr;
      if (status >= 200 && status < 300) {
        this.callback(null, response);
      } else {
        this.requestDidError(event);
      }
    }
    requestDidError(event) {
      this.callback(`Error storing "${this.file.name}". Status: ${this.xhr.status}`);
    }
  };
  var id = 0;
  var DirectUpload = class {
    constructor(file, url, delegate, customHeaders = {}) {
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
      this.customHeaders = customHeaders;
    }
    create(callback) {
      FileChecksum.create(this.file, (error2, checksum) => {
        if (error2) {
          callback(error2);
          return;
        }
        const blob = new BlobRecord(this.file, checksum, this.url, this.customHeaders);
        notify(this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
        blob.create((error3) => {
          if (error3) {
            callback(error3);
          } else {
            const upload = new BlobUpload(blob);
            notify(this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
            upload.create((error4) => {
              if (error4) {
                callback(error4);
              } else {
                callback(null, blob.toJSON());
              }
            });
          }
        });
      });
    }
  };
  function notify(object, methodName, ...messages) {
    if (object && typeof object[methodName] == "function") {
      return object[methodName](...messages);
    }
  }
  var DirectUploadController = class {
    constructor(input, file) {
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }
    start(callback) {
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = this.input.name;
      this.input.insertAdjacentElement("beforebegin", hiddenInput);
      this.dispatch("start");
      this.directUpload.create((error2, attributes) => {
        if (error2) {
          hiddenInput.parentNode.removeChild(hiddenInput);
          this.dispatchError(error2);
        } else {
          hiddenInput.value = attributes.signed_id;
        }
        this.dispatch("end");
        callback(error2);
      });
    }
    uploadRequestDidProgress(event) {
      const progress = event.loaded / event.total * 100;
      if (progress) {
        this.dispatch("progress", {
          progress
        });
      }
    }
    get url() {
      return this.input.getAttribute("data-direct-upload-url");
    }
    dispatch(name, detail = {}) {
      detail.file = this.file;
      detail.id = this.directUpload.id;
      return dispatchEvent2(this.input, `direct-upload:${name}`, {
        detail
      });
    }
    dispatchError(error2) {
      const event = this.dispatch("error", {
        error: error2
      });
      if (!event.defaultPrevented) {
        alert(error2);
      }
    }
    directUploadWillCreateBlobWithXHR(xhr) {
      this.dispatch("before-blob-request", {
        xhr
      });
    }
    directUploadWillStoreFileWithXHR(xhr) {
      this.dispatch("before-storage-request", {
        xhr
      });
      xhr.upload.addEventListener("progress", (event) => this.uploadRequestDidProgress(event));
    }
  };
  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";
  var DirectUploadsController = class {
    constructor(form) {
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter((input) => input.files.length);
    }
    start(callback) {
      const controllers = this.createDirectUploadControllers();
      const startNextController = () => {
        const controller = controllers.shift();
        if (controller) {
          controller.start((error2) => {
            if (error2) {
              callback(error2);
              this.dispatch("end");
            } else {
              startNextController();
            }
          });
        } else {
          callback();
          this.dispatch("end");
        }
      };
      this.dispatch("start");
      startNextController();
    }
    createDirectUploadControllers() {
      const controllers = [];
      this.inputs.forEach((input) => {
        toArray(input.files).forEach((file) => {
          const controller = new DirectUploadController(input, file);
          controllers.push(controller);
        });
      });
      return controllers;
    }
    dispatch(name, detail = {}) {
      return dispatchEvent2(this.form, `direct-uploads:${name}`, {
        detail
      });
    }
  };
  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = /* @__PURE__ */ new WeakMap();
  var started = false;
  function start2() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm, true);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }
  function didClick(event) {
    const { target } = event;
    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }
  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }
  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }
  function handleFormSubmissionEvent(event) {
    const form = event.target;
    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }
    const controller = new DirectUploadsController(form);
    const { inputs } = controller;
    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start((error2) => {
        form.removeAttribute(processingAttribute);
        if (error2) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }
  function submitForm(form) {
    let button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
    if (button) {
      const { disabled } = button;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }
    submitButtonsByForm.delete(form);
  }
  function disable(input) {
    input.disabled = true;
  }
  function enable(input) {
    input.disabled = false;
  }
  function autostart() {
    if (window.ActiveStorage) {
      start2();
    }
  }
  setTimeout(autostart, 1);

  // node_modules/@hotwired/stimulus/dist/stimulus.js
  var EventListener = class {
    constructor(eventTarget, eventName, eventOptions) {
      this.eventTarget = eventTarget;
      this.eventName = eventName;
      this.eventOptions = eventOptions;
      this.unorderedBindings = /* @__PURE__ */ new Set();
    }
    connect() {
      this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
    disconnect() {
      this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
    bindingConnected(binding) {
      this.unorderedBindings.add(binding);
    }
    bindingDisconnected(binding) {
      this.unorderedBindings.delete(binding);
    }
    handleEvent(event) {
      const extendedEvent = extendEvent(event);
      for (const binding of this.bindings) {
        if (extendedEvent.immediatePropagationStopped) {
          break;
        } else {
          binding.handleEvent(extendedEvent);
        }
      }
    }
    hasBindings() {
      return this.unorderedBindings.size > 0;
    }
    get bindings() {
      return Array.from(this.unorderedBindings).sort((left, right) => {
        const leftIndex = left.index, rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    }
  };
  function extendEvent(event) {
    if ("immediatePropagationStopped" in event) {
      return event;
    } else {
      const { stopImmediatePropagation } = event;
      return Object.assign(event, {
        immediatePropagationStopped: false,
        stopImmediatePropagation() {
          this.immediatePropagationStopped = true;
          stopImmediatePropagation.call(this);
        }
      });
    }
  }
  var Dispatcher = class {
    constructor(application2) {
      this.application = application2;
      this.eventListenerMaps = /* @__PURE__ */ new Map();
      this.started = false;
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach((eventListener) => eventListener.connect());
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach((eventListener) => eventListener.disconnect());
      }
    }
    get eventListeners() {
      return Array.from(this.eventListenerMaps.values()).reduce((listeners, map) => listeners.concat(Array.from(map.values())), []);
    }
    bindingConnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
    bindingDisconnected(binding, clearEventListeners = false) {
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
      if (clearEventListeners)
        this.clearEventListenersForBinding(binding);
    }
    handleError(error2, message, detail = {}) {
      this.application.handleError(error2, `Error ${message}`, detail);
    }
    clearEventListenersForBinding(binding) {
      const eventListener = this.fetchEventListenerForBinding(binding);
      if (!eventListener.hasBindings()) {
        eventListener.disconnect();
        this.removeMappedEventListenerFor(binding);
      }
    }
    removeMappedEventListenerFor(binding) {
      const { eventTarget, eventName, eventOptions } = binding;
      const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      const cacheKey = this.cacheKey(eventName, eventOptions);
      eventListenerMap.delete(cacheKey);
      if (eventListenerMap.size == 0)
        this.eventListenerMaps.delete(eventTarget);
    }
    fetchEventListenerForBinding(binding) {
      const { eventTarget, eventName, eventOptions } = binding;
      return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
    fetchEventListener(eventTarget, eventName, eventOptions) {
      const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      const cacheKey = this.cacheKey(eventName, eventOptions);
      let eventListener = eventListenerMap.get(cacheKey);
      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
        eventListenerMap.set(cacheKey, eventListener);
      }
      return eventListener;
    }
    createEventListener(eventTarget, eventName, eventOptions) {
      const eventListener = new EventListener(eventTarget, eventName, eventOptions);
      if (this.started) {
        eventListener.connect();
      }
      return eventListener;
    }
    fetchEventListenerMapForEventTarget(eventTarget) {
      let eventListenerMap = this.eventListenerMaps.get(eventTarget);
      if (!eventListenerMap) {
        eventListenerMap = /* @__PURE__ */ new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }
      return eventListenerMap;
    }
    cacheKey(eventName, eventOptions) {
      const parts = [eventName];
      Object.keys(eventOptions).sort().forEach((key) => {
        parts.push(`${eventOptions[key] ? "" : "!"}${key}`);
      });
      return parts.join(":");
    }
  };
  var defaultActionDescriptorFilters = {
    stop({ event, value }) {
      if (value)
        event.stopPropagation();
      return true;
    },
    prevent({ event, value }) {
      if (value)
        event.preventDefault();
      return true;
    },
    self({ event, value, element }) {
      if (value) {
        return element === event.target;
      } else {
        return true;
      }
    }
  };
  var descriptorPattern = /^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
  function parseActionDescriptorString(descriptorString) {
    const source = descriptorString.trim();
    const matches = source.match(descriptorPattern) || [];
    let eventName = matches[2];
    let keyFilter = matches[3];
    if (keyFilter && !["keydown", "keyup", "keypress"].includes(eventName)) {
      eventName += `.${keyFilter}`;
      keyFilter = "";
    }
    return {
      eventTarget: parseEventTarget(matches[4]),
      eventName,
      eventOptions: matches[7] ? parseEventOptions(matches[7]) : {},
      identifier: matches[5],
      methodName: matches[6],
      keyFilter: matches[1] || keyFilter
    };
  }
  function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
      return window;
    } else if (eventTargetName == "document") {
      return document;
    }
  }
  function parseEventOptions(eventOptions) {
    return eventOptions.split(":").reduce((options, token) => Object.assign(options, { [token.replace(/^!/, "")]: !/^!/.test(token) }), {});
  }
  function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
      return "window";
    } else if (eventTarget == document) {
      return "document";
    }
  }
  function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
  }
  function namespaceCamelize(value) {
    return camelize(value.replace(/--/g, "-").replace(/__/g, "_"));
  }
  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  function dasherize(value) {
    return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
  }
  function tokenize(value) {
    return value.match(/[^\s]+/g) || [];
  }
  function isSomething(object) {
    return object !== null && object !== void 0;
  }
  function hasProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }
  var allModifiers = ["meta", "ctrl", "alt", "shift"];
  var Action = class {
    constructor(element, index, descriptor, schema) {
      this.element = element;
      this.index = index;
      this.eventTarget = descriptor.eventTarget || element;
      this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
      this.eventOptions = descriptor.eventOptions || {};
      this.identifier = descriptor.identifier || error("missing identifier");
      this.methodName = descriptor.methodName || error("missing method name");
      this.keyFilter = descriptor.keyFilter || "";
      this.schema = schema;
    }
    static forToken(token, schema) {
      return new this(token.element, token.index, parseActionDescriptorString(token.content), schema);
    }
    toString() {
      const eventFilter = this.keyFilter ? `.${this.keyFilter}` : "";
      const eventTarget = this.eventTargetName ? `@${this.eventTargetName}` : "";
      return `${this.eventName}${eventFilter}${eventTarget}->${this.identifier}#${this.methodName}`;
    }
    shouldIgnoreKeyboardEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      const filters = this.keyFilter.split("+");
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      const standardFilter = filters.filter((key) => !allModifiers.includes(key))[0];
      if (!standardFilter) {
        return false;
      }
      if (!hasProperty(this.keyMappings, standardFilter)) {
        error(`contains unknown key filter: ${this.keyFilter}`);
      }
      return this.keyMappings[standardFilter].toLowerCase() !== event.key.toLowerCase();
    }
    shouldIgnoreMouseEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      const filters = [this.keyFilter];
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      return false;
    }
    get params() {
      const params = {};
      const pattern = new RegExp(`^data-${this.identifier}-(.+)-param$`, "i");
      for (const { name, value } of Array.from(this.element.attributes)) {
        const match = name.match(pattern);
        const key = match && match[1];
        if (key) {
          params[camelize(key)] = typecast(value);
        }
      }
      return params;
    }
    get eventTargetName() {
      return stringifyEventTarget(this.eventTarget);
    }
    get keyMappings() {
      return this.schema.keyMappings;
    }
    keyFilterDissatisfied(event, filters) {
      const [meta, ctrl, alt, shift] = allModifiers.map((modifier) => filters.includes(modifier));
      return event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift;
    }
  };
  var defaultEventNames = {
    a: () => "click",
    button: () => "click",
    form: () => "submit",
    details: () => "toggle",
    input: (e) => e.getAttribute("type") == "submit" ? "click" : "input",
    select: () => "change",
    textarea: () => "input"
  };
  function getDefaultEventNameForElement(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
      return defaultEventNames[tagName](element);
    }
  }
  function error(message) {
    throw new Error(message);
  }
  function typecast(value) {
    try {
      return JSON.parse(value);
    } catch (o_O) {
      return value;
    }
  }
  var Binding = class {
    constructor(context, action) {
      this.context = context;
      this.action = action;
    }
    get index() {
      return this.action.index;
    }
    get eventTarget() {
      return this.action.eventTarget;
    }
    get eventOptions() {
      return this.action.eventOptions;
    }
    get identifier() {
      return this.context.identifier;
    }
    handleEvent(event) {
      const actionEvent = this.prepareActionEvent(event);
      if (this.willBeInvokedByEvent(event) && this.applyEventModifiers(actionEvent)) {
        this.invokeWithEvent(actionEvent);
      }
    }
    get eventName() {
      return this.action.eventName;
    }
    get method() {
      const method = this.controller[this.methodName];
      if (typeof method == "function") {
        return method;
      }
      throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
    }
    applyEventModifiers(event) {
      const { element } = this.action;
      const { actionDescriptorFilters } = this.context.application;
      const { controller } = this.context;
      let passes = true;
      for (const [name, value] of Object.entries(this.eventOptions)) {
        if (name in actionDescriptorFilters) {
          const filter = actionDescriptorFilters[name];
          passes = passes && filter({ name, value, event, element, controller });
        } else {
          continue;
        }
      }
      return passes;
    }
    prepareActionEvent(event) {
      return Object.assign(event, { params: this.action.params });
    }
    invokeWithEvent(event) {
      const { target, currentTarget } = event;
      try {
        this.method.call(this.controller, event);
        this.context.logDebugActivity(this.methodName, { event, target, currentTarget, action: this.methodName });
      } catch (error2) {
        const { identifier, controller, element, index } = this;
        const detail = { identifier, controller, element, index, event };
        this.context.handleError(error2, `invoking action "${this.action}"`, detail);
      }
    }
    willBeInvokedByEvent(event) {
      const eventTarget = event.target;
      if (event instanceof KeyboardEvent && this.action.shouldIgnoreKeyboardEvent(event)) {
        return false;
      }
      if (event instanceof MouseEvent && this.action.shouldIgnoreMouseEvent(event)) {
        return false;
      }
      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return this.scope.containsElement(this.action.element);
      }
    }
    get controller() {
      return this.context.controller;
    }
    get methodName() {
      return this.action.methodName;
    }
    get element() {
      return this.scope.element;
    }
    get scope() {
      return this.context.scope;
    }
  };
  var ElementObserver = class {
    constructor(element, delegate) {
      this.mutationObserverInit = { attributes: true, childList: true, subtree: true };
      this.element = element;
      this.started = false;
      this.delegate = delegate;
      this.elements = /* @__PURE__ */ new Set();
      this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.refresh();
      }
    }
    pause(callback) {
      if (this.started) {
        this.mutationObserver.disconnect();
        this.started = false;
      }
      callback();
      if (!this.started) {
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
    refresh() {
      if (this.started) {
        const matches = new Set(this.matchElementsInTree());
        for (const element of Array.from(this.elements)) {
          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }
        for (const element of Array.from(matches)) {
          this.addElement(element);
        }
      }
    }
    processMutations(mutations) {
      if (this.started) {
        for (const mutation of mutations) {
          this.processMutation(mutation);
        }
      }
    }
    processMutation(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    }
    processAttributeChange(element, attributeName) {
      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    }
    processRemovedNodes(nodes) {
      for (const node of Array.from(nodes)) {
        const element = this.elementFromNode(node);
        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    }
    processAddedNodes(nodes) {
      for (const node of Array.from(nodes)) {
        const element = this.elementFromNode(node);
        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    }
    matchElement(element) {
      return this.delegate.matchElement(element);
    }
    matchElementsInTree(tree = this.element) {
      return this.delegate.matchElementsInTree(tree);
    }
    processTree(tree, processor) {
      for (const element of this.matchElementsInTree(tree)) {
        processor.call(this, element);
      }
    }
    elementFromNode(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    }
    elementIsActive(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    }
    addElement(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);
          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    }
    removeElement(element) {
      if (this.elements.has(element)) {
        this.elements.delete(element);
        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    }
  };
  var AttributeObserver = class {
    constructor(element, attributeName, delegate) {
      this.attributeName = attributeName;
      this.delegate = delegate;
      this.elementObserver = new ElementObserver(element, this);
    }
    get element() {
      return this.elementObserver.element;
    }
    get selector() {
      return `[${this.attributeName}]`;
    }
    start() {
      this.elementObserver.start();
    }
    pause(callback) {
      this.elementObserver.pause(callback);
    }
    stop() {
      this.elementObserver.stop();
    }
    refresh() {
      this.elementObserver.refresh();
    }
    get started() {
      return this.elementObserver.started;
    }
    matchElement(element) {
      return element.hasAttribute(this.attributeName);
    }
    matchElementsInTree(tree) {
      const match = this.matchElement(tree) ? [tree] : [];
      const matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    }
    elementMatched(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    }
    elementUnmatched(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    }
    elementAttributeChanged(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    }
  };
  function add(map, key, value) {
    fetch2(map, key).add(value);
  }
  function del(map, key, value) {
    fetch2(map, key).delete(value);
    prune(map, key);
  }
  function fetch2(map, key) {
    let values = map.get(key);
    if (!values) {
      values = /* @__PURE__ */ new Set();
      map.set(key, values);
    }
    return values;
  }
  function prune(map, key) {
    const values = map.get(key);
    if (values != null && values.size == 0) {
      map.delete(key);
    }
  }
  var Multimap = class {
    constructor() {
      this.valuesByKey = /* @__PURE__ */ new Map();
    }
    get keys() {
      return Array.from(this.valuesByKey.keys());
    }
    get values() {
      const sets = Array.from(this.valuesByKey.values());
      return sets.reduce((values, set) => values.concat(Array.from(set)), []);
    }
    get size() {
      const sets = Array.from(this.valuesByKey.values());
      return sets.reduce((size, set) => size + set.size, 0);
    }
    add(key, value) {
      add(this.valuesByKey, key, value);
    }
    delete(key, value) {
      del(this.valuesByKey, key, value);
    }
    has(key, value) {
      const values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    }
    hasKey(key) {
      return this.valuesByKey.has(key);
    }
    hasValue(value) {
      const sets = Array.from(this.valuesByKey.values());
      return sets.some((set) => set.has(value));
    }
    getValuesForKey(key) {
      const values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    }
    getKeysForValue(value) {
      return Array.from(this.valuesByKey).filter(([_key, values]) => values.has(value)).map(([key, _values]) => key);
    }
  };
  var SelectorObserver = class {
    constructor(element, selector, delegate, details) {
      this._selector = selector;
      this.details = details;
      this.elementObserver = new ElementObserver(element, this);
      this.delegate = delegate;
      this.matchesByElement = new Multimap();
    }
    get started() {
      return this.elementObserver.started;
    }
    get selector() {
      return this._selector;
    }
    set selector(selector) {
      this._selector = selector;
      this.refresh();
    }
    start() {
      this.elementObserver.start();
    }
    pause(callback) {
      this.elementObserver.pause(callback);
    }
    stop() {
      this.elementObserver.stop();
    }
    refresh() {
      this.elementObserver.refresh();
    }
    get element() {
      return this.elementObserver.element;
    }
    matchElement(element) {
      const { selector } = this;
      if (selector) {
        const matches = element.matches(selector);
        if (this.delegate.selectorMatchElement) {
          return matches && this.delegate.selectorMatchElement(element, this.details);
        }
        return matches;
      } else {
        return false;
      }
    }
    matchElementsInTree(tree) {
      const { selector } = this;
      if (selector) {
        const match = this.matchElement(tree) ? [tree] : [];
        const matches = Array.from(tree.querySelectorAll(selector)).filter((match2) => this.matchElement(match2));
        return match.concat(matches);
      } else {
        return [];
      }
    }
    elementMatched(element) {
      const { selector } = this;
      if (selector) {
        this.selectorMatched(element, selector);
      }
    }
    elementUnmatched(element) {
      const selectors = this.matchesByElement.getKeysForValue(element);
      for (const selector of selectors) {
        this.selectorUnmatched(element, selector);
      }
    }
    elementAttributeChanged(element, _attributeName) {
      const { selector } = this;
      if (selector) {
        const matches = this.matchElement(element);
        const matchedBefore = this.matchesByElement.has(selector, element);
        if (matches && !matchedBefore) {
          this.selectorMatched(element, selector);
        } else if (!matches && matchedBefore) {
          this.selectorUnmatched(element, selector);
        }
      }
    }
    selectorMatched(element, selector) {
      this.delegate.selectorMatched(element, selector, this.details);
      this.matchesByElement.add(selector, element);
    }
    selectorUnmatched(element, selector) {
      this.delegate.selectorUnmatched(element, selector, this.details);
      this.matchesByElement.delete(selector, element);
    }
  };
  var StringMapObserver = class {
    constructor(element, delegate) {
      this.element = element;
      this.delegate = delegate;
      this.started = false;
      this.stringMap = /* @__PURE__ */ new Map();
      this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, { attributes: true, attributeOldValue: true });
        this.refresh();
      }
    }
    stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
    refresh() {
      if (this.started) {
        for (const attributeName of this.knownAttributeNames) {
          this.refreshAttribute(attributeName, null);
        }
      }
    }
    processMutations(mutations) {
      if (this.started) {
        for (const mutation of mutations) {
          this.processMutation(mutation);
        }
      }
    }
    processMutation(mutation) {
      const attributeName = mutation.attributeName;
      if (attributeName) {
        this.refreshAttribute(attributeName, mutation.oldValue);
      }
    }
    refreshAttribute(attributeName, oldValue) {
      const key = this.delegate.getStringMapKeyForAttribute(attributeName);
      if (key != null) {
        if (!this.stringMap.has(attributeName)) {
          this.stringMapKeyAdded(key, attributeName);
        }
        const value = this.element.getAttribute(attributeName);
        if (this.stringMap.get(attributeName) != value) {
          this.stringMapValueChanged(value, key, oldValue);
        }
        if (value == null) {
          const oldValue2 = this.stringMap.get(attributeName);
          this.stringMap.delete(attributeName);
          if (oldValue2)
            this.stringMapKeyRemoved(key, attributeName, oldValue2);
        } else {
          this.stringMap.set(attributeName, value);
        }
      }
    }
    stringMapKeyAdded(key, attributeName) {
      if (this.delegate.stringMapKeyAdded) {
        this.delegate.stringMapKeyAdded(key, attributeName);
      }
    }
    stringMapValueChanged(value, key, oldValue) {
      if (this.delegate.stringMapValueChanged) {
        this.delegate.stringMapValueChanged(value, key, oldValue);
      }
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
      if (this.delegate.stringMapKeyRemoved) {
        this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
      }
    }
    get knownAttributeNames() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
    get currentAttributeNames() {
      return Array.from(this.element.attributes).map((attribute) => attribute.name);
    }
    get recordedAttributeNames() {
      return Array.from(this.stringMap.keys());
    }
  };
  var TokenListObserver = class {
    constructor(element, attributeName, delegate) {
      this.attributeObserver = new AttributeObserver(element, attributeName, this);
      this.delegate = delegate;
      this.tokensByElement = new Multimap();
    }
    get started() {
      return this.attributeObserver.started;
    }
    start() {
      this.attributeObserver.start();
    }
    pause(callback) {
      this.attributeObserver.pause(callback);
    }
    stop() {
      this.attributeObserver.stop();
    }
    refresh() {
      this.attributeObserver.refresh();
    }
    get element() {
      return this.attributeObserver.element;
    }
    get attributeName() {
      return this.attributeObserver.attributeName;
    }
    elementMatchedAttribute(element) {
      this.tokensMatched(this.readTokensForElement(element));
    }
    elementAttributeValueChanged(element) {
      const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    }
    elementUnmatchedAttribute(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
    tokensMatched(tokens) {
      tokens.forEach((token) => this.tokenMatched(token));
    }
    tokensUnmatched(tokens) {
      tokens.forEach((token) => this.tokenUnmatched(token));
    }
    tokenMatched(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    }
    tokenUnmatched(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement.delete(token.element, token);
    }
    refreshTokensForElement(element) {
      const previousTokens = this.tokensByElement.getValuesForKey(element);
      const currentTokens = this.readTokensForElement(element);
      const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(([previousToken, currentToken]) => !tokensAreEqual(previousToken, currentToken));
      if (firstDifferingIndex == -1) {
        return [[], []];
      } else {
        return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
      }
    }
    readTokensForElement(element) {
      const attributeName = this.attributeName;
      const tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    }
  };
  function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter((content) => content.length).map((content, index) => ({ element, attributeName, content, index }));
  }
  function zip(left, right) {
    const length = Math.max(left.length, right.length);
    return Array.from({ length }, (_, index) => [left[index], right[index]]);
  }
  function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
  }
  var ValueListObserver = class {
    constructor(element, attributeName, delegate) {
      this.tokenListObserver = new TokenListObserver(element, attributeName, this);
      this.delegate = delegate;
      this.parseResultsByToken = /* @__PURE__ */ new WeakMap();
      this.valuesByTokenByElement = /* @__PURE__ */ new WeakMap();
    }
    get started() {
      return this.tokenListObserver.started;
    }
    start() {
      this.tokenListObserver.start();
    }
    stop() {
      this.tokenListObserver.stop();
    }
    refresh() {
      this.tokenListObserver.refresh();
    }
    get element() {
      return this.tokenListObserver.element;
    }
    get attributeName() {
      return this.tokenListObserver.attributeName;
    }
    tokenMatched(token) {
      const { element } = token;
      const { value } = this.fetchParseResultForToken(token);
      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      }
    }
    tokenUnmatched(token) {
      const { element } = token;
      const { value } = this.fetchParseResultForToken(token);
      if (value) {
        this.fetchValuesByTokenForElement(element).delete(token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    }
    fetchParseResultForToken(token) {
      let parseResult = this.parseResultsByToken.get(token);
      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }
      return parseResult;
    }
    fetchValuesByTokenForElement(element) {
      let valuesByToken = this.valuesByTokenByElement.get(element);
      if (!valuesByToken) {
        valuesByToken = /* @__PURE__ */ new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }
      return valuesByToken;
    }
    parseToken(token) {
      try {
        const value = this.delegate.parseValueForToken(token);
        return { value };
      } catch (error2) {
        return { error: error2 };
      }
    }
  };
  var BindingObserver = class {
    constructor(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.bindingsByAction = /* @__PURE__ */ new Map();
    }
    start() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    }
    stop() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    }
    get element() {
      return this.context.element;
    }
    get identifier() {
      return this.context.identifier;
    }
    get actionAttribute() {
      return this.schema.actionAttribute;
    }
    get schema() {
      return this.context.schema;
    }
    get bindings() {
      return Array.from(this.bindingsByAction.values());
    }
    connectAction(action) {
      const binding = new Binding(this.context, action);
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);
    }
    disconnectAction(action) {
      const binding = this.bindingsByAction.get(action);
      if (binding) {
        this.bindingsByAction.delete(action);
        this.delegate.bindingDisconnected(binding);
      }
    }
    disconnectAllActions() {
      this.bindings.forEach((binding) => this.delegate.bindingDisconnected(binding, true));
      this.bindingsByAction.clear();
    }
    parseValueForToken(token) {
      const action = Action.forToken(token, this.schema);
      if (action.identifier == this.identifier) {
        return action;
      }
    }
    elementMatchedValue(element, action) {
      this.connectAction(action);
    }
    elementUnmatchedValue(element, action) {
      this.disconnectAction(action);
    }
  };
  var ValueObserver = class {
    constructor(context, receiver) {
      this.context = context;
      this.receiver = receiver;
      this.stringMapObserver = new StringMapObserver(this.element, this);
      this.valueDescriptorMap = this.controller.valueDescriptorMap;
    }
    start() {
      this.stringMapObserver.start();
      this.invokeChangedCallbacksForDefaultValues();
    }
    stop() {
      this.stringMapObserver.stop();
    }
    get element() {
      return this.context.element;
    }
    get controller() {
      return this.context.controller;
    }
    getStringMapKeyForAttribute(attributeName) {
      if (attributeName in this.valueDescriptorMap) {
        return this.valueDescriptorMap[attributeName].name;
      }
    }
    stringMapKeyAdded(key, attributeName) {
      const descriptor = this.valueDescriptorMap[attributeName];
      if (!this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
      }
    }
    stringMapValueChanged(value, name, oldValue) {
      const descriptor = this.valueDescriptorNameMap[name];
      if (value === null)
        return;
      if (oldValue === null) {
        oldValue = descriptor.writer(descriptor.defaultValue);
      }
      this.invokeChangedCallback(name, value, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
      const descriptor = this.valueDescriptorNameMap[key];
      if (this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
      } else {
        this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
      }
    }
    invokeChangedCallbacksForDefaultValues() {
      for (const { key, name, defaultValue, writer } of this.valueDescriptors) {
        if (defaultValue != void 0 && !this.controller.data.has(key)) {
          this.invokeChangedCallback(name, writer(defaultValue), void 0);
        }
      }
    }
    invokeChangedCallback(name, rawValue, rawOldValue) {
      const changedMethodName = `${name}Changed`;
      const changedMethod = this.receiver[changedMethodName];
      if (typeof changedMethod == "function") {
        const descriptor = this.valueDescriptorNameMap[name];
        try {
          const value = descriptor.reader(rawValue);
          let oldValue = rawOldValue;
          if (rawOldValue) {
            oldValue = descriptor.reader(rawOldValue);
          }
          changedMethod.call(this.receiver, value, oldValue);
        } catch (error2) {
          if (error2 instanceof TypeError) {
            error2.message = `Stimulus Value "${this.context.identifier}.${descriptor.name}" - ${error2.message}`;
          }
          throw error2;
        }
      }
    }
    get valueDescriptors() {
      const { valueDescriptorMap } = this;
      return Object.keys(valueDescriptorMap).map((key) => valueDescriptorMap[key]);
    }
    get valueDescriptorNameMap() {
      const descriptors = {};
      Object.keys(this.valueDescriptorMap).forEach((key) => {
        const descriptor = this.valueDescriptorMap[key];
        descriptors[descriptor.name] = descriptor;
      });
      return descriptors;
    }
    hasValue(attributeName) {
      const descriptor = this.valueDescriptorNameMap[attributeName];
      const hasMethodName = `has${capitalize(descriptor.name)}`;
      return this.receiver[hasMethodName];
    }
  };
  var TargetObserver = class {
    constructor(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.targetsByName = new Multimap();
    }
    start() {
      if (!this.tokenListObserver) {
        this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
        this.tokenListObserver.start();
      }
    }
    stop() {
      if (this.tokenListObserver) {
        this.disconnectAllTargets();
        this.tokenListObserver.stop();
        delete this.tokenListObserver;
      }
    }
    tokenMatched({ element, content: name }) {
      if (this.scope.containsElement(element)) {
        this.connectTarget(element, name);
      }
    }
    tokenUnmatched({ element, content: name }) {
      this.disconnectTarget(element, name);
    }
    connectTarget(element, name) {
      var _a;
      if (!this.targetsByName.has(name, element)) {
        this.targetsByName.add(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetConnected(element, name));
      }
    }
    disconnectTarget(element, name) {
      var _a;
      if (this.targetsByName.has(name, element)) {
        this.targetsByName.delete(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetDisconnected(element, name));
      }
    }
    disconnectAllTargets() {
      for (const name of this.targetsByName.keys) {
        for (const element of this.targetsByName.getValuesForKey(name)) {
          this.disconnectTarget(element, name);
        }
      }
    }
    get attributeName() {
      return `data-${this.context.identifier}-target`;
    }
    get element() {
      return this.context.element;
    }
    get scope() {
      return this.context.scope;
    }
  };
  function readInheritableStaticArrayValues(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce((values, constructor2) => {
      getOwnStaticArrayValues(constructor2, propertyName).forEach((name) => values.add(name));
      return values;
    }, /* @__PURE__ */ new Set()));
  }
  function readInheritableStaticObjectPairs(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce((pairs, constructor2) => {
      pairs.push(...getOwnStaticObjectPairs(constructor2, propertyName));
      return pairs;
    }, []);
  }
  function getAncestorsForConstructor(constructor) {
    const ancestors = [];
    while (constructor) {
      ancestors.push(constructor);
      constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
  }
  function getOwnStaticArrayValues(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
  }
  function getOwnStaticObjectPairs(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key) => [key, definition[key]]) : [];
  }
  var OutletObserver = class {
    constructor(context, delegate) {
      this.started = false;
      this.context = context;
      this.delegate = delegate;
      this.outletsByName = new Multimap();
      this.outletElementsByName = new Multimap();
      this.selectorObserverMap = /* @__PURE__ */ new Map();
      this.attributeObserverMap = /* @__PURE__ */ new Map();
    }
    start() {
      if (!this.started) {
        this.outletDefinitions.forEach((outletName) => {
          this.setupSelectorObserverForOutlet(outletName);
          this.setupAttributeObserverForOutlet(outletName);
        });
        this.started = true;
        this.dependentContexts.forEach((context) => context.refresh());
      }
    }
    refresh() {
      this.selectorObserverMap.forEach((observer) => observer.refresh());
      this.attributeObserverMap.forEach((observer) => observer.refresh());
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.disconnectAllOutlets();
        this.stopSelectorObservers();
        this.stopAttributeObservers();
      }
    }
    stopSelectorObservers() {
      if (this.selectorObserverMap.size > 0) {
        this.selectorObserverMap.forEach((observer) => observer.stop());
        this.selectorObserverMap.clear();
      }
    }
    stopAttributeObservers() {
      if (this.attributeObserverMap.size > 0) {
        this.attributeObserverMap.forEach((observer) => observer.stop());
        this.attributeObserverMap.clear();
      }
    }
    selectorMatched(element, _selector, { outletName }) {
      const outlet = this.getOutlet(element, outletName);
      if (outlet) {
        this.connectOutlet(outlet, element, outletName);
      }
    }
    selectorUnmatched(element, _selector, { outletName }) {
      const outlet = this.getOutletFromMap(element, outletName);
      if (outlet) {
        this.disconnectOutlet(outlet, element, outletName);
      }
    }
    selectorMatchElement(element, { outletName }) {
      const selector = this.selector(outletName);
      const hasOutlet = this.hasOutlet(element, outletName);
      const hasOutletController = element.matches(`[${this.schema.controllerAttribute}~=${outletName}]`);
      if (selector) {
        return hasOutlet && hasOutletController && element.matches(selector);
      } else {
        return false;
      }
    }
    elementMatchedAttribute(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    elementAttributeValueChanged(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    elementUnmatchedAttribute(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    connectOutlet(outlet, element, outletName) {
      var _a;
      if (!this.outletElementsByName.has(outletName, element)) {
        this.outletsByName.add(outletName, outlet);
        this.outletElementsByName.add(outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletConnected(outlet, element, outletName));
      }
    }
    disconnectOutlet(outlet, element, outletName) {
      var _a;
      if (this.outletElementsByName.has(outletName, element)) {
        this.outletsByName.delete(outletName, outlet);
        this.outletElementsByName.delete(outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletDisconnected(outlet, element, outletName));
      }
    }
    disconnectAllOutlets() {
      for (const outletName of this.outletElementsByName.keys) {
        for (const element of this.outletElementsByName.getValuesForKey(outletName)) {
          for (const outlet of this.outletsByName.getValuesForKey(outletName)) {
            this.disconnectOutlet(outlet, element, outletName);
          }
        }
      }
    }
    updateSelectorObserverForOutlet(outletName) {
      const observer = this.selectorObserverMap.get(outletName);
      if (observer) {
        observer.selector = this.selector(outletName);
      }
    }
    setupSelectorObserverForOutlet(outletName) {
      const selector = this.selector(outletName);
      const selectorObserver = new SelectorObserver(document.body, selector, this, { outletName });
      this.selectorObserverMap.set(outletName, selectorObserver);
      selectorObserver.start();
    }
    setupAttributeObserverForOutlet(outletName) {
      const attributeName = this.attributeNameForOutletName(outletName);
      const attributeObserver = new AttributeObserver(this.scope.element, attributeName, this);
      this.attributeObserverMap.set(outletName, attributeObserver);
      attributeObserver.start();
    }
    selector(outletName) {
      return this.scope.outlets.getSelectorForOutletName(outletName);
    }
    attributeNameForOutletName(outletName) {
      return this.scope.schema.outletAttributeForScope(this.identifier, outletName);
    }
    getOutletNameFromOutletAttributeName(attributeName) {
      return this.outletDefinitions.find((outletName) => this.attributeNameForOutletName(outletName) === attributeName);
    }
    get outletDependencies() {
      const dependencies = new Multimap();
      this.router.modules.forEach((module) => {
        const constructor = module.definition.controllerConstructor;
        const outlets = readInheritableStaticArrayValues(constructor, "outlets");
        outlets.forEach((outlet) => dependencies.add(outlet, module.identifier));
      });
      return dependencies;
    }
    get outletDefinitions() {
      return this.outletDependencies.getKeysForValue(this.identifier);
    }
    get dependentControllerIdentifiers() {
      return this.outletDependencies.getValuesForKey(this.identifier);
    }
    get dependentContexts() {
      const identifiers = this.dependentControllerIdentifiers;
      return this.router.contexts.filter((context) => identifiers.includes(context.identifier));
    }
    hasOutlet(element, outletName) {
      return !!this.getOutlet(element, outletName) || !!this.getOutletFromMap(element, outletName);
    }
    getOutlet(element, outletName) {
      return this.application.getControllerForElementAndIdentifier(element, outletName);
    }
    getOutletFromMap(element, outletName) {
      return this.outletsByName.getValuesForKey(outletName).find((outlet) => outlet.element === element);
    }
    get scope() {
      return this.context.scope;
    }
    get schema() {
      return this.context.schema;
    }
    get identifier() {
      return this.context.identifier;
    }
    get application() {
      return this.context.application;
    }
    get router() {
      return this.application.router;
    }
  };
  var Context = class {
    constructor(module, scope) {
      this.logDebugActivity = (functionName2, detail = {}) => {
        const { identifier, controller, element } = this;
        detail = Object.assign({ identifier, controller, element }, detail);
        this.application.logDebugActivity(this.identifier, functionName2, detail);
      };
      this.module = module;
      this.scope = scope;
      this.controller = new module.controllerConstructor(this);
      this.bindingObserver = new BindingObserver(this, this.dispatcher);
      this.valueObserver = new ValueObserver(this, this.controller);
      this.targetObserver = new TargetObserver(this, this);
      this.outletObserver = new OutletObserver(this, this);
      try {
        this.controller.initialize();
        this.logDebugActivity("initialize");
      } catch (error2) {
        this.handleError(error2, "initializing controller");
      }
    }
    connect() {
      this.bindingObserver.start();
      this.valueObserver.start();
      this.targetObserver.start();
      this.outletObserver.start();
      try {
        this.controller.connect();
        this.logDebugActivity("connect");
      } catch (error2) {
        this.handleError(error2, "connecting controller");
      }
    }
    refresh() {
      this.outletObserver.refresh();
    }
    disconnect() {
      try {
        this.controller.disconnect();
        this.logDebugActivity("disconnect");
      } catch (error2) {
        this.handleError(error2, "disconnecting controller");
      }
      this.outletObserver.stop();
      this.targetObserver.stop();
      this.valueObserver.stop();
      this.bindingObserver.stop();
    }
    get application() {
      return this.module.application;
    }
    get identifier() {
      return this.module.identifier;
    }
    get schema() {
      return this.application.schema;
    }
    get dispatcher() {
      return this.application.dispatcher;
    }
    get element() {
      return this.scope.element;
    }
    get parentElement() {
      return this.element.parentElement;
    }
    handleError(error2, message, detail = {}) {
      const { identifier, controller, element } = this;
      detail = Object.assign({ identifier, controller, element }, detail);
      this.application.handleError(error2, `Error ${message}`, detail);
    }
    targetConnected(element, name) {
      this.invokeControllerMethod(`${name}TargetConnected`, element);
    }
    targetDisconnected(element, name) {
      this.invokeControllerMethod(`${name}TargetDisconnected`, element);
    }
    outletConnected(outlet, element, name) {
      this.invokeControllerMethod(`${namespaceCamelize(name)}OutletConnected`, outlet, element);
    }
    outletDisconnected(outlet, element, name) {
      this.invokeControllerMethod(`${namespaceCamelize(name)}OutletDisconnected`, outlet, element);
    }
    invokeControllerMethod(methodName, ...args) {
      const controller = this.controller;
      if (typeof controller[methodName] == "function") {
        controller[methodName](...args);
      }
    }
  };
  function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
  }
  function shadow(constructor, properties) {
    const shadowConstructor = extend2(constructor);
    const shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
  }
  function getBlessedProperties(constructor) {
    const blessings = readInheritableStaticArrayValues(constructor, "blessings");
    return blessings.reduce((blessedProperties, blessing) => {
      const properties = blessing(constructor);
      for (const key in properties) {
        const descriptor = blessedProperties[key] || {};
        blessedProperties[key] = Object.assign(descriptor, properties[key]);
      }
      return blessedProperties;
    }, {});
  }
  function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce((shadowProperties, key) => {
      const descriptor = getShadowedDescriptor(prototype, properties, key);
      if (descriptor) {
        Object.assign(shadowProperties, { [key]: descriptor });
      }
      return shadowProperties;
    }, {});
  }
  function getShadowedDescriptor(prototype, properties, key) {
    const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
      const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
      if (shadowingDescriptor) {
        descriptor.get = shadowingDescriptor.get || descriptor.get;
        descriptor.set = shadowingDescriptor.set || descriptor.set;
      }
      return descriptor;
    }
  }
  var getOwnKeys = (() => {
    if (typeof Object.getOwnPropertySymbols == "function") {
      return (object) => [...Object.getOwnPropertyNames(object), ...Object.getOwnPropertySymbols(object)];
    } else {
      return Object.getOwnPropertyNames;
    }
  })();
  var extend2 = (() => {
    function extendWithReflect(constructor) {
      function extended() {
        return Reflect.construct(constructor, arguments, new.target);
      }
      extended.prototype = Object.create(constructor.prototype, {
        constructor: { value: extended }
      });
      Reflect.setPrototypeOf(extended, constructor);
      return extended;
    }
    function testReflectExtension() {
      const a = function() {
        this.a.call(this);
      };
      const b = extendWithReflect(a);
      b.prototype.a = function() {
      };
      return new b();
    }
    try {
      testReflectExtension();
      return extendWithReflect;
    } catch (error2) {
      return (constructor) => class extended extends constructor {
      };
    }
  })();
  function blessDefinition(definition) {
    return {
      identifier: definition.identifier,
      controllerConstructor: bless(definition.controllerConstructor)
    };
  }
  var Module = class {
    constructor(application2, definition) {
      this.application = application2;
      this.definition = blessDefinition(definition);
      this.contextsByScope = /* @__PURE__ */ new WeakMap();
      this.connectedContexts = /* @__PURE__ */ new Set();
    }
    get identifier() {
      return this.definition.identifier;
    }
    get controllerConstructor() {
      return this.definition.controllerConstructor;
    }
    get contexts() {
      return Array.from(this.connectedContexts);
    }
    connectContextForScope(scope) {
      const context = this.fetchContextForScope(scope);
      this.connectedContexts.add(context);
      context.connect();
    }
    disconnectContextForScope(scope) {
      const context = this.contextsByScope.get(scope);
      if (context) {
        this.connectedContexts.delete(context);
        context.disconnect();
      }
    }
    fetchContextForScope(scope) {
      let context = this.contextsByScope.get(scope);
      if (!context) {
        context = new Context(this, scope);
        this.contextsByScope.set(scope, context);
      }
      return context;
    }
  };
  var ClassMap = class {
    constructor(scope) {
      this.scope = scope;
    }
    has(name) {
      return this.data.has(this.getDataKey(name));
    }
    get(name) {
      return this.getAll(name)[0];
    }
    getAll(name) {
      const tokenString = this.data.get(this.getDataKey(name)) || "";
      return tokenize(tokenString);
    }
    getAttributeName(name) {
      return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
    getDataKey(name) {
      return `${name}-class`;
    }
    get data() {
      return this.scope.data;
    }
  };
  var DataMap = class {
    constructor(scope) {
      this.scope = scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get(key) {
      const name = this.getAttributeNameForKey(key);
      return this.element.getAttribute(name);
    }
    set(key, value) {
      const name = this.getAttributeNameForKey(key);
      this.element.setAttribute(name, value);
      return this.get(key);
    }
    has(key) {
      const name = this.getAttributeNameForKey(key);
      return this.element.hasAttribute(name);
    }
    delete(key) {
      if (this.has(key)) {
        const name = this.getAttributeNameForKey(key);
        this.element.removeAttribute(name);
        return true;
      } else {
        return false;
      }
    }
    getAttributeNameForKey(key) {
      return `data-${this.identifier}-${dasherize(key)}`;
    }
  };
  var Guide = class {
    constructor(logger) {
      this.warnedKeysByObject = /* @__PURE__ */ new WeakMap();
      this.logger = logger;
    }
    warn(object, key, message) {
      let warnedKeys = this.warnedKeysByObject.get(object);
      if (!warnedKeys) {
        warnedKeys = /* @__PURE__ */ new Set();
        this.warnedKeysByObject.set(object, warnedKeys);
      }
      if (!warnedKeys.has(key)) {
        warnedKeys.add(key);
        this.logger.warn(message, object);
      }
    }
  };
  function attributeValueContainsToken(attributeName, token) {
    return `[${attributeName}~="${token}"]`;
  }
  var TargetSet = class {
    constructor(scope) {
      this.scope = scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get schema() {
      return this.scope.schema;
    }
    has(targetName) {
      return this.find(targetName) != null;
    }
    find(...targetNames) {
      return targetNames.reduce((target, targetName) => target || this.findTarget(targetName) || this.findLegacyTarget(targetName), void 0);
    }
    findAll(...targetNames) {
      return targetNames.reduce((targets, targetName) => [
        ...targets,
        ...this.findAllTargets(targetName),
        ...this.findAllLegacyTargets(targetName)
      ], []);
    }
    findTarget(targetName) {
      const selector = this.getSelectorForTargetName(targetName);
      return this.scope.findElement(selector);
    }
    findAllTargets(targetName) {
      const selector = this.getSelectorForTargetName(targetName);
      return this.scope.findAllElements(selector);
    }
    getSelectorForTargetName(targetName) {
      const attributeName = this.schema.targetAttributeForScope(this.identifier);
      return attributeValueContainsToken(attributeName, targetName);
    }
    findLegacyTarget(targetName) {
      const selector = this.getLegacySelectorForTargetName(targetName);
      return this.deprecate(this.scope.findElement(selector), targetName);
    }
    findAllLegacyTargets(targetName) {
      const selector = this.getLegacySelectorForTargetName(targetName);
      return this.scope.findAllElements(selector).map((element) => this.deprecate(element, targetName));
    }
    getLegacySelectorForTargetName(targetName) {
      const targetDescriptor = `${this.identifier}.${targetName}`;
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
    deprecate(element, targetName) {
      if (element) {
        const { identifier } = this;
        const attributeName = this.schema.targetAttribute;
        const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
        this.guide.warn(element, `target:${targetName}`, `Please replace ${attributeName}="${identifier}.${targetName}" with ${revisedAttributeName}="${targetName}". The ${attributeName} attribute is deprecated and will be removed in a future version of Stimulus.`);
      }
      return element;
    }
    get guide() {
      return this.scope.guide;
    }
  };
  var OutletSet = class {
    constructor(scope, controllerElement) {
      this.scope = scope;
      this.controllerElement = controllerElement;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get schema() {
      return this.scope.schema;
    }
    has(outletName) {
      return this.find(outletName) != null;
    }
    find(...outletNames) {
      return outletNames.reduce((outlet, outletName) => outlet || this.findOutlet(outletName), void 0);
    }
    findAll(...outletNames) {
      return outletNames.reduce((outlets, outletName) => [...outlets, ...this.findAllOutlets(outletName)], []);
    }
    getSelectorForOutletName(outletName) {
      const attributeName = this.schema.outletAttributeForScope(this.identifier, outletName);
      return this.controllerElement.getAttribute(attributeName);
    }
    findOutlet(outletName) {
      const selector = this.getSelectorForOutletName(outletName);
      if (selector)
        return this.findElement(selector, outletName);
    }
    findAllOutlets(outletName) {
      const selector = this.getSelectorForOutletName(outletName);
      return selector ? this.findAllElements(selector, outletName) : [];
    }
    findElement(selector, outletName) {
      const elements = this.scope.queryElements(selector);
      return elements.filter((element) => this.matchesElement(element, selector, outletName))[0];
    }
    findAllElements(selector, outletName) {
      const elements = this.scope.queryElements(selector);
      return elements.filter((element) => this.matchesElement(element, selector, outletName));
    }
    matchesElement(element, selector, outletName) {
      const controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute) || "";
      return element.matches(selector) && controllerAttribute.split(" ").includes(outletName);
    }
  };
  var Scope = class _Scope {
    constructor(schema, element, identifier, logger) {
      this.targets = new TargetSet(this);
      this.classes = new ClassMap(this);
      this.data = new DataMap(this);
      this.containsElement = (element2) => {
        return element2.closest(this.controllerSelector) === this.element;
      };
      this.schema = schema;
      this.element = element;
      this.identifier = identifier;
      this.guide = new Guide(logger);
      this.outlets = new OutletSet(this.documentScope, element);
    }
    findElement(selector) {
      return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
    findAllElements(selector) {
      return [
        ...this.element.matches(selector) ? [this.element] : [],
        ...this.queryElements(selector).filter(this.containsElement)
      ];
    }
    queryElements(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
    get controllerSelector() {
      return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
    get isDocumentScope() {
      return this.element === document.documentElement;
    }
    get documentScope() {
      return this.isDocumentScope ? this : new _Scope(this.schema, document.documentElement, this.identifier, this.guide.logger);
    }
  };
  var ScopeObserver = class {
    constructor(element, schema, delegate) {
      this.element = element;
      this.schema = schema;
      this.delegate = delegate;
      this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
      this.scopesByIdentifierByElement = /* @__PURE__ */ new WeakMap();
      this.scopeReferenceCounts = /* @__PURE__ */ new WeakMap();
    }
    start() {
      this.valueListObserver.start();
    }
    stop() {
      this.valueListObserver.stop();
    }
    get controllerAttribute() {
      return this.schema.controllerAttribute;
    }
    parseValueForToken(token) {
      const { element, content: identifier } = token;
      return this.parseValueForElementAndIdentifier(element, identifier);
    }
    parseValueForElementAndIdentifier(element, identifier) {
      const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      let scope = scopesByIdentifier.get(identifier);
      if (!scope) {
        scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
        scopesByIdentifier.set(identifier, scope);
      }
      return scope;
    }
    elementMatchedValue(element, value) {
      const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);
      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    }
    elementUnmatchedValue(element, value) {
      const referenceCount = this.scopeReferenceCounts.get(value);
      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);
        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    }
    fetchScopesByIdentifierForElement(element) {
      let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
      if (!scopesByIdentifier) {
        scopesByIdentifier = /* @__PURE__ */ new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }
      return scopesByIdentifier;
    }
  };
  var Router = class {
    constructor(application2) {
      this.application = application2;
      this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
      this.scopesByIdentifier = new Multimap();
      this.modulesByIdentifier = /* @__PURE__ */ new Map();
    }
    get element() {
      return this.application.element;
    }
    get schema() {
      return this.application.schema;
    }
    get logger() {
      return this.application.logger;
    }
    get controllerAttribute() {
      return this.schema.controllerAttribute;
    }
    get modules() {
      return Array.from(this.modulesByIdentifier.values());
    }
    get contexts() {
      return this.modules.reduce((contexts, module) => contexts.concat(module.contexts), []);
    }
    start() {
      this.scopeObserver.start();
    }
    stop() {
      this.scopeObserver.stop();
    }
    loadDefinition(definition) {
      this.unloadIdentifier(definition.identifier);
      const module = new Module(this.application, definition);
      this.connectModule(module);
      const afterLoad = definition.controllerConstructor.afterLoad;
      if (afterLoad) {
        afterLoad.call(definition.controllerConstructor, definition.identifier, this.application);
      }
    }
    unloadIdentifier(identifier) {
      const module = this.modulesByIdentifier.get(identifier);
      if (module) {
        this.disconnectModule(module);
      }
    }
    getContextForElementAndIdentifier(element, identifier) {
      const module = this.modulesByIdentifier.get(identifier);
      if (module) {
        return module.contexts.find((context) => context.element == element);
      }
    }
    proposeToConnectScopeForElementAndIdentifier(element, identifier) {
      const scope = this.scopeObserver.parseValueForElementAndIdentifier(element, identifier);
      if (scope) {
        this.scopeObserver.elementMatchedValue(scope.element, scope);
      } else {
        console.error(`Couldn't find or create scope for identifier: "${identifier}" and element:`, element);
      }
    }
    handleError(error2, message, detail) {
      this.application.handleError(error2, message, detail);
    }
    createScopeForElementAndIdentifier(element, identifier) {
      return new Scope(this.schema, element, identifier, this.logger);
    }
    scopeConnected(scope) {
      this.scopesByIdentifier.add(scope.identifier, scope);
      const module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.connectContextForScope(scope);
      }
    }
    scopeDisconnected(scope) {
      this.scopesByIdentifier.delete(scope.identifier, scope);
      const module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.disconnectContextForScope(scope);
      }
    }
    connectModule(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach((scope) => module.connectContextForScope(scope));
    }
    disconnectModule(module) {
      this.modulesByIdentifier.delete(module.identifier);
      const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach((scope) => module.disconnectContextForScope(scope));
    }
  };
  var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier) => `data-${identifier}-target`,
    outletAttributeForScope: (identifier, outlet) => `data-${identifier}-${outlet}-outlet`,
    keyMappings: Object.assign(Object.assign({ enter: "Enter", tab: "Tab", esc: "Escape", space: " ", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", home: "Home", end: "End", page_up: "PageUp", page_down: "PageDown" }, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map((c) => [c, c]))), objectFromEntries("0123456789".split("").map((n) => [n, n])))
  };
  function objectFromEntries(array) {
    return array.reduce((memo, [k, v]) => Object.assign(Object.assign({}, memo), { [k]: v }), {});
  }
  var Application = class {
    constructor(element = document.documentElement, schema = defaultSchema) {
      this.logger = console;
      this.debug = false;
      this.logDebugActivity = (identifier, functionName2, detail = {}) => {
        if (this.debug) {
          this.logFormattedMessage(identifier, functionName2, detail);
        }
      };
      this.element = element;
      this.schema = schema;
      this.dispatcher = new Dispatcher(this);
      this.router = new Router(this);
      this.actionDescriptorFilters = Object.assign({}, defaultActionDescriptorFilters);
    }
    static start(element, schema) {
      const application2 = new this(element, schema);
      application2.start();
      return application2;
    }
    async start() {
      await domReady();
      this.logDebugActivity("application", "starting");
      this.dispatcher.start();
      this.router.start();
      this.logDebugActivity("application", "start");
    }
    stop() {
      this.logDebugActivity("application", "stopping");
      this.dispatcher.stop();
      this.router.stop();
      this.logDebugActivity("application", "stop");
    }
    register(identifier, controllerConstructor) {
      this.load({ identifier, controllerConstructor });
    }
    registerActionOption(name, filter) {
      this.actionDescriptorFilters[name] = filter;
    }
    load(head, ...rest) {
      const definitions = Array.isArray(head) ? head : [head, ...rest];
      definitions.forEach((definition) => {
        if (definition.controllerConstructor.shouldLoad) {
          this.router.loadDefinition(definition);
        }
      });
    }
    unload(head, ...rest) {
      const identifiers = Array.isArray(head) ? head : [head, ...rest];
      identifiers.forEach((identifier) => this.router.unloadIdentifier(identifier));
    }
    get controllers() {
      return this.router.contexts.map((context) => context.controller);
    }
    getControllerForElementAndIdentifier(element, identifier) {
      const context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    }
    handleError(error2, message, detail) {
      var _a;
      this.logger.error(`%s

%o

%o`, message, error2, detail);
      (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error2);
    }
    logFormattedMessage(identifier, functionName2, detail = {}) {
      detail = Object.assign({ application: this }, detail);
      this.logger.groupCollapsed(`${identifier} #${functionName2}`);
      this.logger.log("details:", Object.assign({}, detail));
      this.logger.groupEnd();
    }
  };
  function domReady() {
    return new Promise((resolve) => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", () => resolve());
      } else {
        resolve();
      }
    });
  }
  function ClassPropertiesBlessing(constructor) {
    const classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce((properties, classDefinition) => {
      return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
  }
  function propertiesForClassDefinition(key) {
    return {
      [`${key}Class`]: {
        get() {
          const { classes } = this;
          if (classes.has(key)) {
            return classes.get(key);
          } else {
            const attribute = classes.getAttributeName(key);
            throw new Error(`Missing attribute "${attribute}"`);
          }
        }
      },
      [`${key}Classes`]: {
        get() {
          return this.classes.getAll(key);
        }
      },
      [`has${capitalize(key)}Class`]: {
        get() {
          return this.classes.has(key);
        }
      }
    };
  }
  function OutletPropertiesBlessing(constructor) {
    const outlets = readInheritableStaticArrayValues(constructor, "outlets");
    return outlets.reduce((properties, outletDefinition) => {
      return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
    }, {});
  }
  function getOutletController(controller, element, identifier) {
    return controller.application.getControllerForElementAndIdentifier(element, identifier);
  }
  function getControllerAndEnsureConnectedScope(controller, element, outletName) {
    let outletController = getOutletController(controller, element, outletName);
    if (outletController)
      return outletController;
    controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
    outletController = getOutletController(controller, element, outletName);
    if (outletController)
      return outletController;
  }
  function propertiesForOutletDefinition(name) {
    const camelizedName = namespaceCamelize(name);
    return {
      [`${camelizedName}Outlet`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
            if (outletController)
              return outletController;
            throw new Error(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`);
          }
          throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
        }
      },
      [`${camelizedName}Outlets`]: {
        get() {
          const outlets = this.outlets.findAll(name);
          if (outlets.length > 0) {
            return outlets.map((outletElement) => {
              const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
              if (outletController)
                return outletController;
              console.warn(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`, outletElement);
            }).filter((controller) => controller);
          }
          return [];
        }
      },
      [`${camelizedName}OutletElement`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            return outletElement;
          } else {
            throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
          }
        }
      },
      [`${camelizedName}OutletElements`]: {
        get() {
          return this.outlets.findAll(name);
        }
      },
      [`has${capitalize(camelizedName)}Outlet`]: {
        get() {
          return this.outlets.has(name);
        }
      }
    };
  }
  function TargetPropertiesBlessing(constructor) {
    const targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce((properties, targetDefinition) => {
      return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
  }
  function propertiesForTargetDefinition(name) {
    return {
      [`${name}Target`]: {
        get() {
          const target = this.targets.find(name);
          if (target) {
            return target;
          } else {
            throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
          }
        }
      },
      [`${name}Targets`]: {
        get() {
          return this.targets.findAll(name);
        }
      },
      [`has${capitalize(name)}Target`]: {
        get() {
          return this.targets.has(name);
        }
      }
    };
  }
  function ValuePropertiesBlessing(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    const propertyDescriptorMap = {
      valueDescriptorMap: {
        get() {
          return valueDefinitionPairs.reduce((result, valueDefinitionPair) => {
            const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier);
            const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
            return Object.assign(result, { [attributeName]: valueDescriptor });
          }, {});
        }
      }
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair) => {
      return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
  }
  function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
    const definition = parseValueDefinitionPair(valueDefinitionPair, controller);
    const { key, name, reader: read, writer: write } = definition;
    return {
      [name]: {
        get() {
          const value = this.data.get(key);
          if (value !== null) {
            return read(value);
          } else {
            return definition.defaultValue;
          }
        },
        set(value) {
          if (value === void 0) {
            this.data.delete(key);
          } else {
            this.data.set(key, write(value));
          }
        }
      },
      [`has${capitalize(name)}`]: {
        get() {
          return this.data.has(key) || definition.hasCustomDefaultValue;
        }
      }
    };
  }
  function parseValueDefinitionPair([token, typeDefinition], controller) {
    return valueDescriptorForTokenAndTypeDefinition({
      controller,
      token,
      typeDefinition
    });
  }
  function parseValueTypeConstant(constant) {
    switch (constant) {
      case Array:
        return "array";
      case Boolean:
        return "boolean";
      case Number:
        return "number";
      case Object:
        return "object";
      case String:
        return "string";
    }
  }
  function parseValueTypeDefault(defaultValue) {
    switch (typeof defaultValue) {
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
    }
    if (Array.isArray(defaultValue))
      return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
      return "object";
  }
  function parseValueTypeObject(payload) {
    const { controller, token, typeObject } = payload;
    const hasType = isSomething(typeObject.type);
    const hasDefault = isSomething(typeObject.default);
    const fullObject = hasType && hasDefault;
    const onlyType = hasType && !hasDefault;
    const onlyDefault = !hasType && hasDefault;
    const typeFromObject = parseValueTypeConstant(typeObject.type);
    const typeFromDefaultValue = parseValueTypeDefault(payload.typeObject.default);
    if (onlyType)
      return typeFromObject;
    if (onlyDefault)
      return typeFromDefaultValue;
    if (typeFromObject !== typeFromDefaultValue) {
      const propertyPath = controller ? `${controller}.${token}` : token;
      throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${typeObject.default}" is of type "${typeFromDefaultValue}".`);
    }
    if (fullObject)
      return typeFromObject;
  }
  function parseValueTypeDefinition(payload) {
    const { controller, token, typeDefinition } = payload;
    const typeObject = { controller, token, typeObject: typeDefinition };
    const typeFromObject = parseValueTypeObject(typeObject);
    const typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
    const typeFromConstant = parseValueTypeConstant(typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type)
      return type;
    const propertyPath = controller ? `${controller}.${typeDefinition}` : token;
    throw new Error(`Unknown value type "${propertyPath}" for "${token}" value`);
  }
  function defaultValueForDefinition(typeDefinition) {
    const constant = parseValueTypeConstant(typeDefinition);
    if (constant)
      return defaultValuesByType[constant];
    const hasDefault = hasProperty(typeDefinition, "default");
    const hasType = hasProperty(typeDefinition, "type");
    const typeObject = typeDefinition;
    if (hasDefault)
      return typeObject.default;
    if (hasType) {
      const { type } = typeObject;
      const constantFromType = parseValueTypeConstant(type);
      if (constantFromType)
        return defaultValuesByType[constantFromType];
    }
    return typeDefinition;
  }
  function valueDescriptorForTokenAndTypeDefinition(payload) {
    const { token, typeDefinition } = payload;
    const key = `${dasherize(token)}-value`;
    const type = parseValueTypeDefinition(payload);
    return {
      type,
      key,
      name: camelize(key),
      get defaultValue() {
        return defaultValueForDefinition(typeDefinition);
      },
      get hasCustomDefaultValue() {
        return parseValueTypeDefault(typeDefinition) !== void 0;
      },
      reader: readers[type],
      writer: writers[type] || writers.default
    };
  }
  var defaultValuesByType = {
    get array() {
      return [];
    },
    boolean: false,
    number: 0,
    get object() {
      return {};
    },
    string: ""
  };
  var readers = {
    array(value) {
      const array = JSON.parse(value);
      if (!Array.isArray(array)) {
        throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault(array)}"`);
      }
      return array;
    },
    boolean(value) {
      return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number(value) {
      return Number(value.replace(/_/g, ""));
    },
    object(value) {
      const object = JSON.parse(value);
      if (object === null || typeof object != "object" || Array.isArray(object)) {
        throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault(object)}"`);
      }
      return object;
    },
    string(value) {
      return value;
    }
  };
  var writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
  };
  function writeJSON(value) {
    return JSON.stringify(value);
  }
  function writeString(value) {
    return `${value}`;
  }
  var Controller = class {
    constructor(context) {
      this.context = context;
    }
    static get shouldLoad() {
      return true;
    }
    static afterLoad(_identifier, _application) {
      return;
    }
    get application() {
      return this.context.application;
    }
    get scope() {
      return this.context.scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get targets() {
      return this.scope.targets;
    }
    get outlets() {
      return this.scope.outlets;
    }
    get classes() {
      return this.scope.classes;
    }
    get data() {
      return this.scope.data;
    }
    initialize() {
    }
    connect() {
    }
    disconnect() {
    }
    dispatch(eventName, { target = this.element, detail = {}, prefix = this.identifier, bubbles = true, cancelable = true } = {}) {
      const type = prefix ? `${prefix}:${eventName}` : eventName;
      const event = new CustomEvent(type, { detail, bubbles, cancelable });
      target.dispatchEvent(event);
      return event;
    }
  };
  Controller.blessings = [
    ClassPropertiesBlessing,
    TargetPropertiesBlessing,
    ValuePropertiesBlessing,
    OutletPropertiesBlessing
  ];
  Controller.targets = [];
  Controller.outlets = [];
  Controller.values = {};

  // app/javascript/controllers/application.js
  var application = Application.start();
  application.debug = false;
  window.Stimulus = application;

  // app/javascript/controllers/hello_controller.js
  var hello_controller_default = class extends Controller {
    connect() {
      this.element.textContent = "Hello World!";
    }
  };

  // app/javascript/controllers/index.js
  application.register("hello", hello_controller_default);

  // node_modules/foundation-sites/dist/js/foundation.esm.js
  var import_jquery = __toESM(require_jquery());
  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i)
            return;
          _n = false;
        } else
          for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
            ;
      } catch (err) {
        _d = true, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
            return;
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get2(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function rtl() {
    return (0, import_jquery.default)("html").attr("dir") === "rtl";
  }
  function GetYoDigits() {
    var length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 6;
    var namespace = arguments.length > 1 ? arguments[1] : void 0;
    var str = "";
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    var charsLength = chars.length;
    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * charsLength)];
    }
    return namespace ? "".concat(str, "-").concat(namespace) : str;
  }
  function RegExpEscape(str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  function transitionend($elem) {
    var transitions = {
      "transition": "transitionend",
      "WebkitTransition": "webkitTransitionEnd",
      "MozTransition": "transitionend",
      "OTransition": "otransitionend"
    };
    var elem = document.createElement("div"), end;
    for (var transition in transitions) {
      if (typeof elem.style[transition] !== "undefined") {
        end = transitions[transition];
      }
    }
    if (end) {
      return end;
    } else {
      setTimeout(function() {
        $elem.triggerHandler("transitionend", [$elem]);
      }, 1);
      return "transitionend";
    }
  }
  function onLoad($elem, handler) {
    var didLoad = document.readyState === "complete";
    var eventType = (didLoad ? "_didLoad" : "load") + ".zf.util.onLoad";
    var cb = function cb2() {
      return $elem.triggerHandler(eventType);
    };
    if ($elem) {
      if (handler)
        $elem.one(eventType, handler);
      if (didLoad)
        setTimeout(cb);
      else
        (0, import_jquery.default)(window).one("load", cb);
    }
    return eventType;
  }
  function ignoreMousedisappear(handler) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow, ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo, _ref$ignoreReappear = _ref.ignoreReappear, ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;
    return function leaveEventHandler(eLeave) {
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      var callback = handler.bind.apply(handler, [this, eLeave].concat(rest));
      if (eLeave.relatedTarget !== null) {
        return callback();
      }
      setTimeout(function leaveEventDebouncer() {
        if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {
          return callback();
        }
        if (!ignoreReappear) {
          (0, import_jquery.default)(document).one("mouseenter", function reenterEventHandler(eReenter) {
            if (!(0, import_jquery.default)(eLeave.currentTarget).has(eReenter.target).length) {
              eLeave.relatedTarget = eReenter.target;
              callback();
            }
          });
        }
      }, 0);
    };
  }
  window.matchMedia || (window.matchMedia = function() {
    var styleMedia = window.styleMedia || window.media;
    if (!styleMedia) {
      var style = document.createElement("style"), script = document.getElementsByTagName("script")[0], info = null;
      style.type = "text/css";
      style.id = "matchmediajs-test";
      if (!script) {
        document.head.appendChild(style);
      } else {
        script.parentNode.insertBefore(style, script);
      }
      info = "getComputedStyle" in window && window.getComputedStyle(style, null) || style.currentStyle;
      styleMedia = {
        matchMedium: function matchMedium(media) {
          var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
          if (style.styleSheet) {
            style.styleSheet.cssText = text;
          } else {
            style.textContent = text;
          }
          return info.width === "1px";
        }
      };
    }
    return function(media) {
      return {
        matches: styleMedia.matchMedium(media || "all"),
        media: media || "all"
      };
    };
  }());
  var MediaQuery = {
    queries: [],
    current: "",
    /**
     * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
     * @function
     * @private
     */
    _init: function _init() {
      if (this.isInitialized === true) {
        return this;
      } else {
        this.isInitialized = true;
      }
      var self2 = this;
      var $meta = (0, import_jquery.default)("meta.foundation-mq");
      if (!$meta.length) {
        (0, import_jquery.default)('<meta class="foundation-mq" name="foundation-mq" content>').appendTo(document.head);
      }
      var extractedStyles = (0, import_jquery.default)(".foundation-mq").css("font-family");
      var namedQueries;
      namedQueries = parseStyleToObject(extractedStyles);
      self2.queries = [];
      for (var key in namedQueries) {
        if (namedQueries.hasOwnProperty(key)) {
          self2.queries.push({
            name: key,
            value: "only screen and (min-width: ".concat(namedQueries[key], ")")
          });
        }
      }
      this.current = this._getCurrentSize();
      this._watcher();
    },
    /**
     * Reinitializes the media query helper.
     * Useful if your CSS breakpoint configuration has just been loaded or has changed since the initialization.
     * @function
     * @private
     */
    _reInit: function _reInit() {
      this.isInitialized = false;
      this._init();
    },
    /**
     * Checks if the screen is at least as wide as a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to check.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
     */
    atLeast: function atLeast(size) {
      var query = this.get(size);
      if (query) {
        return window.matchMedia(query).matches;
      }
      return false;
    },
    /**
     * Checks if the screen is within the given breakpoint.
     * If smaller than the breakpoint of larger than its upper limit it returns false.
     * @function
     * @param {String} size - Name of the breakpoint to check.
     * @returns {Boolean} `true` if the breakpoint matches, `false` otherwise.
     */
    only: function only(size) {
      return size === this._getCurrentSize();
    },
    /**
     * Checks if the screen is within a breakpoint or smaller.
     * @function
     * @param {String} size - Name of the breakpoint to check.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it's larger.
     */
    upTo: function upTo(size) {
      var nextSize = this.next(size);
      if (nextSize) {
        return !this.atLeast(nextSize);
      }
      return true;
    },
    /**
     * Checks if the screen matches to a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
     */
    is: function is(size) {
      var parts = size.trim().split(" ").filter(function(p) {
        return !!p.length;
      });
      var _parts = _slicedToArray(parts, 2), bpSize = _parts[0], _parts$ = _parts[1], bpModifier = _parts$ === void 0 ? "" : _parts$;
      if (bpModifier === "only") {
        return this.only(bpSize);
      }
      if (!bpModifier || bpModifier === "up") {
        return this.atLeast(bpSize);
      }
      if (bpModifier === "down") {
        return this.upTo(bpSize);
      }
      throw new Error('\n      Invalid breakpoint passed to MediaQuery.is().\n      Expected a breakpoint name formatted like "<size> <modifier>", got "'.concat(size, '".\n    '));
    },
    /**
     * Gets the media query of a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to get.
     * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
     */
    get: function get(size) {
      for (var i in this.queries) {
        if (this.queries.hasOwnProperty(i)) {
          var query = this.queries[i];
          if (size === query.name)
            return query.value;
        }
      }
      return null;
    },
    /**
     * Get the breakpoint following the given breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint.
     * @returns {String|null} - The name of the following breakpoint, or `null` if the passed breakpoint was the last one.
     */
    next: function next(size) {
      var _this = this;
      var queryIndex = this.queries.findIndex(function(q) {
        return _this._getQueryName(q) === size;
      });
      if (queryIndex === -1) {
        throw new Error('\n        Unknown breakpoint "'.concat(size, '" passed to MediaQuery.next().\n        Ensure it is present in your Sass "$breakpoints" setting.\n      '));
      }
      var nextQuery = this.queries[queryIndex + 1];
      return nextQuery ? nextQuery.name : null;
    },
    /**
     * Returns the name of the breakpoint related to the given value.
     * @function
     * @private
     * @param {String|Object} value - Breakpoint name or query object.
     * @returns {String} Name of the breakpoint.
     */
    _getQueryName: function _getQueryName(value) {
      if (typeof value === "string")
        return value;
      if (_typeof(value) === "object")
        return value.name;
      throw new TypeError('\n      Invalid value passed to MediaQuery._getQueryName().\n      Expected a breakpoint name (String) or a breakpoint query (Object), got "'.concat(value, '" (').concat(_typeof(value), ")\n    "));
    },
    /**
     * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
     * @function
     * @private
     * @returns {String} Name of the current breakpoint.
     */
    _getCurrentSize: function _getCurrentSize() {
      var matched;
      for (var i = 0; i < this.queries.length; i++) {
        var query = this.queries[i];
        if (window.matchMedia(query.value).matches) {
          matched = query;
        }
      }
      return matched && this._getQueryName(matched);
    },
    /**
     * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
     * @function
     * @private
     */
    _watcher: function _watcher() {
      var _this2 = this;
      (0, import_jquery.default)(window).on("resize.zf.trigger", function() {
        var newSize = _this2._getCurrentSize(), currentSize = _this2.current;
        if (newSize !== currentSize) {
          _this2.current = newSize;
          (0, import_jquery.default)(window).trigger("changed.zf.mediaquery", [newSize, currentSize]);
        }
      });
    }
  };
  function parseStyleToObject(str) {
    var styleObject = {};
    if (typeof str !== "string") {
      return styleObject;
    }
    str = str.trim().slice(1, -1);
    if (!str) {
      return styleObject;
    }
    styleObject = str.split("&").reduce(function(ret, param) {
      var parts = param.replace(/\+/g, " ").split("=");
      var key = parts[0];
      var val = parts[1];
      key = decodeURIComponent(key);
      val = typeof val === "undefined" ? null : decodeURIComponent(val);
      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});
    return styleObject;
  }
  var FOUNDATION_VERSION = "6.8.1";
  var Foundation = {
    version: FOUNDATION_VERSION,
    /**
     * Stores initialized plugins.
     */
    _plugins: {},
    /**
     * Stores generated unique ids for plugin instances
     */
    _uuids: [],
    /**
     * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
     * @param {Object} plugin - The constructor of the plugin.
     */
    plugin: function plugin(_plugin, name) {
      var className = name || functionName(_plugin);
      var attrName = hyphenate(className);
      this._plugins[attrName] = this[className] = _plugin;
    },
    /**
     * @function
     * Populates the _uuids array with pointers to each individual plugin instance.
     * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
     * Also fires the initialization event for each plugin, consolidating repetitive code.
     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
     * @param {String} name - the name of the plugin, passed as a camelCased string.
     * @fires Plugin#init
     */
    registerPlugin: function registerPlugin(plugin2, name) {
      var pluginName = name ? hyphenate(name) : functionName(plugin2.constructor).toLowerCase();
      plugin2.uuid = GetYoDigits(6, pluginName);
      if (!plugin2.$element.attr("data-".concat(pluginName))) {
        plugin2.$element.attr("data-".concat(pluginName), plugin2.uuid);
      }
      if (!plugin2.$element.data("zfPlugin")) {
        plugin2.$element.data("zfPlugin", plugin2);
      }
      plugin2.$element.trigger("init.zf.".concat(pluginName));
      this._uuids.push(plugin2.uuid);
      return;
    },
    /**
     * @function
     * Removes the plugins uuid from the _uuids array.
     * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
     * Also fires the destroyed event for the plugin, consolidating repetitive code.
     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
     * @fires Plugin#destroyed
     */
    unregisterPlugin: function unregisterPlugin(plugin2) {
      var pluginName = hyphenate(functionName(plugin2.$element.data("zfPlugin").constructor));
      this._uuids.splice(this._uuids.indexOf(plugin2.uuid), 1);
      plugin2.$element.removeAttr("data-".concat(pluginName)).removeData("zfPlugin").trigger("destroyed.zf.".concat(pluginName));
      for (var prop in plugin2) {
        if (typeof plugin2[prop] === "function") {
          plugin2[prop] = null;
        }
      }
      return;
    },
    /**
     * @function
     * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
     * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
     * @default If no argument is passed, reflow all currently active plugins.
     */
    reInit: function reInit(plugins) {
      var isJQ = plugins instanceof import_jquery.default;
      try {
        if (isJQ) {
          plugins.each(function() {
            (0, import_jquery.default)(this).data("zfPlugin")._init();
          });
        } else {
          var type = _typeof(plugins), _this = this, fns = {
            "object": function object(plgs) {
              plgs.forEach(function(p) {
                p = hyphenate(p);
                (0, import_jquery.default)("[data-" + p + "]").foundation("_init");
              });
            },
            "string": function string() {
              plugins = hyphenate(plugins);
              (0, import_jquery.default)("[data-" + plugins + "]").foundation("_init");
            },
            "undefined": function undefined$1() {
              this.object(Object.keys(_this._plugins));
            }
          };
          fns[type](plugins);
        }
      } catch (err) {
        console.error(err);
      } finally {
        return plugins;
      }
    },
    /**
     * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
     * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
     * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
     */
    reflow: function reflow(elem, plugins) {
      if (typeof plugins === "undefined") {
        plugins = Object.keys(this._plugins);
      } else if (typeof plugins === "string") {
        plugins = [plugins];
      }
      var _this = this;
      import_jquery.default.each(plugins, function(i, name) {
        var plugin2 = _this._plugins[name];
        var $elem = (0, import_jquery.default)(elem).find("[data-" + name + "]").addBack("[data-" + name + "]").filter(function() {
          return typeof (0, import_jquery.default)(this).data("zfPlugin") === "undefined";
        });
        $elem.each(function() {
          var $el = (0, import_jquery.default)(this), opts = {
            reflow: true
          };
          if ($el.attr("data-options")) {
            $el.attr("data-options").split(";").forEach(function(option) {
              var opt = option.split(":").map(function(el) {
                return el.trim();
              });
              if (opt[0])
                opts[opt[0]] = parseValue(opt[1]);
            });
          }
          try {
            $el.data("zfPlugin", new plugin2((0, import_jquery.default)(this), opts));
          } catch (er) {
            console.error(er);
          } finally {
            return;
          }
        });
      });
    },
    getFnName: functionName,
    addToJquery: function addToJquery() {
      var foundation = function foundation2(method) {
        var type = _typeof(method), $noJS = (0, import_jquery.default)(".no-js");
        if ($noJS.length) {
          $noJS.removeClass("no-js");
        }
        if (type === "undefined") {
          MediaQuery._init();
          Foundation.reflow(this);
        } else if (type === "string") {
          var args = Array.prototype.slice.call(arguments, 1);
          var plugClass = this.data("zfPlugin");
          if (typeof plugClass !== "undefined" && typeof plugClass[method] !== "undefined") {
            if (this.length === 1) {
              plugClass[method].apply(plugClass, args);
            } else {
              this.each(function(i, el) {
                plugClass[method].apply((0, import_jquery.default)(el).data("zfPlugin"), args);
              });
            }
          } else {
            throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : "this element") + ".");
          }
        } else {
          throw new TypeError("We're sorry, ".concat(type, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
        }
        return this;
      };
      import_jquery.default.fn.foundation = foundation;
      return import_jquery.default;
    }
  };
  Foundation.util = {
    /**
     * Function for applying a debounce effect to a function call.
     * @function
     * @param {Function} func - Function to be called at end of timeout.
     * @param {Number} delay - Time in ms to delay the call of `func`.
     * @returns function
     */
    throttle: function throttle(func, delay) {
      var timer = null;
      return function() {
        var context = this, args = arguments;
        if (timer === null) {
          timer = setTimeout(function() {
            func.apply(context, args);
            timer = null;
          }, delay);
        }
      };
    }
  };
  window.Foundation = Foundation;
  (function() {
    if (!Date.now || !window.Date.now)
      window.Date.now = Date.now = function() {
        return (/* @__PURE__ */ new Date()).getTime();
      };
    var vendors = ["webkit", "moz"];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp + "RequestAnimationFrame"];
      window.cancelAnimationFrame = window[vp + "CancelAnimationFrame"] || window[vp + "CancelRequestAnimationFrame"];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var lastTime = 0;
      window.requestAnimationFrame = function(callback) {
        var now2 = Date.now();
        var nextTime = Math.max(lastTime + 16, now2);
        return setTimeout(function() {
          callback(lastTime = nextTime);
        }, nextTime - now2);
      };
      window.cancelAnimationFrame = clearTimeout;
    }
    if (!window.performance || !window.performance.now) {
      window.performance = {
        start: Date.now(),
        now: function now2() {
          return Date.now() - this.start;
        }
      };
    }
  })();
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
      if (typeof this !== "function") {
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      }
      var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function fNOP2() {
      }, fBound = function fBound2() {
        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
      };
      if (this.prototype) {
        fNOP.prototype = this.prototype;
      }
      fBound.prototype = new fNOP();
      return fBound;
    };
  }
  function functionName(fn) {
    if (typeof Function.prototype.name === "undefined") {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = funcNameRegex.exec(fn.toString());
      return results && results.length > 1 ? results[1].trim() : "";
    } else if (typeof fn.prototype === "undefined") {
      return fn.constructor.name;
    } else {
      return fn.prototype.constructor.name;
    }
  }
  function parseValue(str) {
    if ("true" === str)
      return true;
    else if ("false" === str)
      return false;
    else if (!isNaN(str * 1))
      return parseFloat(str);
    return str;
  }
  function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  var Box = {
    ImNotTouchingYou,
    OverlapArea,
    GetDimensions,
    GetExplicitOffsets
  };
  function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
    return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
  }
  function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
    var eleDims = GetDimensions(element), topOver, bottomOver, leftOver, rightOver;
    if (parent) {
      var parDims = GetDimensions(parent);
      bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
      topOver = eleDims.offset.top - parDims.offset.top;
      leftOver = eleDims.offset.left - parDims.offset.left;
      rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
    } else {
      bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
      topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
      leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
      rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
    }
    bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
    topOver = Math.min(topOver, 0);
    leftOver = Math.min(leftOver, 0);
    rightOver = Math.min(rightOver, 0);
    if (lrOnly) {
      return leftOver + rightOver;
    }
    if (tbOnly) {
      return topOver + bottomOver;
    }
    return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
  }
  function GetDimensions(elem) {
    elem = elem.length ? elem[0] : elem;
    if (elem === window || elem === document) {
      throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    var rect = elem.getBoundingClientRect(), parRect = elem.parentNode.getBoundingClientRect(), winRect = document.body.getBoundingClientRect(), winY = window.pageYOffset, winX = window.pageXOffset;
    return {
      width: rect.width,
      height: rect.height,
      offset: {
        top: rect.top + winY,
        left: rect.left + winX
      },
      parentDims: {
        width: parRect.width,
        height: parRect.height,
        offset: {
          top: parRect.top + winY,
          left: parRect.left + winX
        }
      },
      windowDims: {
        width: winRect.width,
        height: winRect.height,
        offset: {
          top: winY,
          left: winX
        }
      }
    };
  }
  function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
    var $eleDims = GetDimensions(element), $anchorDims = anchor ? GetDimensions(anchor) : null;
    var topVal, leftVal;
    if ($anchorDims !== null) {
      switch (position) {
        case "top":
          topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
          break;
        case "bottom":
          topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
          break;
        case "left":
          leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
          break;
        case "right":
          leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
          break;
      }
      switch (position) {
        case "top":
        case "bottom":
          switch (alignment) {
            case "left":
              leftVal = $anchorDims.offset.left + hOffset;
              break;
            case "right":
              leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
              break;
            case "center":
              leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
              break;
          }
          break;
        case "right":
        case "left":
          switch (alignment) {
            case "bottom":
              topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
              break;
            case "top":
              topVal = $anchorDims.offset.top + vOffset;
              break;
            case "center":
              topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
              break;
          }
          break;
      }
    }
    return {
      top: topVal,
      left: leftVal
    };
  }
  function onImagesLoaded(images, callback) {
    var unloaded = images.length;
    if (unloaded === 0) {
      callback();
    }
    images.each(function() {
      if (this.complete && typeof this.naturalWidth !== "undefined") {
        singleImageLoaded();
      } else {
        var image = new Image();
        var events = "load.zf.images error.zf.images";
        (0, import_jquery.default)(image).one(events, function me() {
          (0, import_jquery.default)(this).off(events, me);
          singleImageLoaded();
        });
        image.src = (0, import_jquery.default)(this).attr("src");
      }
    });
    function singleImageLoaded() {
      unloaded--;
      if (unloaded === 0) {
        callback();
      }
    }
  }
  var keyCodes = {
    9: "TAB",
    13: "ENTER",
    27: "ESCAPE",
    32: "SPACE",
    35: "END",
    36: "HOME",
    37: "ARROW_LEFT",
    38: "ARROW_UP",
    39: "ARROW_RIGHT",
    40: "ARROW_DOWN"
  };
  var commands = {};
  function findFocusable($element) {
    if (!$element) {
      return false;
    }
    return $element.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
      if (!(0, import_jquery.default)(this).is(":visible") || (0, import_jquery.default)(this).attr("tabindex") < 0) {
        return false;
      }
      return true;
    }).sort(function(a, b) {
      if ((0, import_jquery.default)(a).attr("tabindex") === (0, import_jquery.default)(b).attr("tabindex")) {
        return 0;
      }
      var aTabIndex = parseInt((0, import_jquery.default)(a).attr("tabindex"), 10), bTabIndex = parseInt((0, import_jquery.default)(b).attr("tabindex"), 10);
      if (typeof (0, import_jquery.default)(a).attr("tabindex") === "undefined" && bTabIndex > 0) {
        return 1;
      }
      if (typeof (0, import_jquery.default)(b).attr("tabindex") === "undefined" && aTabIndex > 0) {
        return -1;
      }
      if (aTabIndex === 0 && bTabIndex > 0) {
        return 1;
      }
      if (bTabIndex === 0 && aTabIndex > 0) {
        return -1;
      }
      if (aTabIndex < bTabIndex) {
        return -1;
      }
      if (aTabIndex > bTabIndex) {
        return 1;
      }
    });
  }
  function parseKey(event) {
    var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
    key = key.replace(/\W+/, "");
    if (event.shiftKey)
      key = "SHIFT_".concat(key);
    if (event.ctrlKey)
      key = "CTRL_".concat(key);
    if (event.altKey)
      key = "ALT_".concat(key);
    key = key.replace(/_$/, "");
    return key;
  }
  var Keyboard = {
    keys: getKeyCodes(keyCodes),
    /**
     * Parses the (keyboard) event and returns a String that represents its key
     * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
     * @param {Event} event - the event generated by the event handler
     * @return String key - String that represents the key pressed
     */
    parseKey,
    /**
     * Handles the given (keyboard) event
     * @param {Event} event - the event generated by the event handler
     * @param {String} component - Foundation component's name, e.g. Slider or Reveal
     * @param {Objects} functions - collection of functions that are to be executed
     */
    handleKey: function handleKey(event, component, functions) {
      var commandList = commands[component], keyCode = this.parseKey(event), cmds, command, fn;
      if (!commandList)
        return console.warn("Component not defined!");
      if (event.zfIsKeyHandled === true)
        return;
      if (typeof commandList.ltr === "undefined") {
        cmds = commandList;
      } else {
        if (rtl())
          cmds = import_jquery.default.extend({}, commandList.ltr, commandList.rtl);
        else
          cmds = import_jquery.default.extend({}, commandList.rtl, commandList.ltr);
      }
      command = cmds[keyCode];
      fn = functions[command];
      if (fn && typeof fn === "function") {
        var returnValue = fn.apply();
        event.zfIsKeyHandled = true;
        if (functions.handled || typeof functions.handled === "function") {
          functions.handled(returnValue);
        }
      } else {
        if (functions.unhandled || typeof functions.unhandled === "function") {
          functions.unhandled();
        }
      }
    },
    /**
     * Finds all focusable elements within the given `$element`
     * @param {jQuery} $element - jQuery object to search within
     * @return {jQuery} $focusable - all focusable elements within `$element`
     */
    findFocusable,
    /**
     * Returns the component name name
     * @param {Object} component - Foundation component, e.g. Slider or Reveal
     * @return String componentName
     */
    register: function register(componentName, cmds) {
      commands[componentName] = cmds;
    },
    // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
    //
    /**
     * Traps the focus in the given element.
     * @param  {jQuery} $element  jQuery object to trap the foucs into.
     */
    trapFocus: function trapFocus($element) {
      var $focusable = findFocusable($element), $firstFocusable = $focusable.eq(0), $lastFocusable = $focusable.eq(-1);
      $element.on("keydown.zf.trapfocus", function(event) {
        if (event.target === $lastFocusable[0] && parseKey(event) === "TAB") {
          event.preventDefault();
          $firstFocusable.focus();
        } else if (event.target === $firstFocusable[0] && parseKey(event) === "SHIFT_TAB") {
          event.preventDefault();
          $lastFocusable.focus();
        }
      });
    },
    /**
     * Releases the trapped focus from the given element.
     * @param  {jQuery} $element  jQuery object to release the focus for.
     */
    releaseFocus: function releaseFocus($element) {
      $element.off("keydown.zf.trapfocus");
    }
  };
  function getKeyCodes(kcs) {
    var k = {};
    for (var kc in kcs) {
      if (kcs.hasOwnProperty(kc))
        k[kcs[kc]] = kcs[kc];
    }
    return k;
  }
  var initClasses = ["mui-enter", "mui-leave"];
  var activeClasses = ["mui-enter-active", "mui-leave-active"];
  var Motion = {
    animateIn: function animateIn(element, animation, cb) {
      animate(true, element, animation, cb);
    },
    animateOut: function animateOut(element, animation, cb) {
      animate(false, element, animation, cb);
    }
  };
  function Move(duration, elem, fn) {
    var anim, prog, start3 = null;
    if (duration === 0) {
      fn.apply(elem);
      elem.trigger("finished.zf.animate", [elem]).triggerHandler("finished.zf.animate", [elem]);
      return;
    }
    function move(ts) {
      if (!start3)
        start3 = ts;
      prog = ts - start3;
      fn.apply(elem);
      if (prog < duration) {
        anim = window.requestAnimationFrame(move, elem);
      } else {
        window.cancelAnimationFrame(anim);
        elem.trigger("finished.zf.animate", [elem]).triggerHandler("finished.zf.animate", [elem]);
      }
    }
    anim = window.requestAnimationFrame(move);
  }
  function animate(isIn, element, animation, cb) {
    element = (0, import_jquery.default)(element).eq(0);
    if (!element.length)
      return;
    var initClass = isIn ? initClasses[0] : initClasses[1];
    var activeClass = isIn ? activeClasses[0] : activeClasses[1];
    reset();
    element.addClass(animation).css("transition", "none");
    requestAnimationFrame(function() {
      element.addClass(initClass);
      if (isIn)
        element.show();
    });
    requestAnimationFrame(function() {
      element[0].offsetWidth;
      element.css("transition", "").addClass(activeClass);
    });
    element.one(transitionend(element), finish);
    function finish() {
      if (!isIn)
        element.hide();
      reset();
      if (cb)
        cb.apply(element);
    }
    function reset() {
      element[0].style.transitionDuration = 0;
      element.removeClass("".concat(initClass, " ").concat(activeClass, " ").concat(animation));
    }
  }
  var Nest = {
    Feather: function Feather(menu) {
      var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "zf";
      menu.attr("role", "menubar");
      menu.find("a").attr({
        "role": "menuitem"
      });
      var items = menu.find("li").attr({
        "role": "none"
      }), subMenuClass = "is-".concat(type, "-submenu"), subItemClass = "".concat(subMenuClass, "-item"), hasSubClass = "is-".concat(type, "-submenu-parent"), applyAria = type !== "accordion";
      items.each(function() {
        var $item = (0, import_jquery.default)(this), $sub = $item.children("ul");
        if ($sub.length) {
          $item.addClass(hasSubClass);
          if (applyAria) {
            var firstItem = $item.children("a:first");
            firstItem.attr({
              "aria-haspopup": true,
              "aria-label": firstItem.attr("aria-label") || firstItem.text()
            });
            if (type === "drilldown") {
              $item.attr({
                "aria-expanded": false
              });
            }
          }
          $sub.addClass("submenu ".concat(subMenuClass)).attr({
            "data-submenu": "",
            "role": "menubar"
          });
          if (type === "drilldown") {
            $sub.attr({
              "aria-hidden": true
            });
          }
        }
        if ($item.parent("[data-submenu]").length) {
          $item.addClass("is-submenu-item ".concat(subItemClass));
        }
      });
      return;
    },
    Burn: function Burn(menu, type) {
      var subMenuClass = "is-".concat(type, "-submenu"), subItemClass = "".concat(subMenuClass, "-item"), hasSubClass = "is-".concat(type, "-submenu-parent");
      menu.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(subMenuClass, " ").concat(subItemClass, " ").concat(hasSubClass, " is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display", "");
    }
  };
  function Timer(elem, options, cb) {
    var _this = this, duration = options.duration, nameSpace = Object.keys(elem.data())[0] || "timer", remain = -1, start3, timer;
    this.isPaused = false;
    this.restart = function() {
      remain = -1;
      clearTimeout(timer);
      this.start();
    };
    this.start = function() {
      this.isPaused = false;
      clearTimeout(timer);
      remain = remain <= 0 ? duration : remain;
      elem.data("paused", false);
      start3 = Date.now();
      timer = setTimeout(function() {
        if (options.infinite) {
          _this.restart();
        }
        if (cb && typeof cb === "function") {
          cb();
        }
      }, remain);
      elem.trigger("timerstart.zf.".concat(nameSpace));
    };
    this.pause = function() {
      this.isPaused = true;
      clearTimeout(timer);
      elem.data("paused", true);
      var end = Date.now();
      remain = remain - (end - start3);
      elem.trigger("timerpaused.zf.".concat(nameSpace));
    };
  }
  var Touch = {};
  var startPosX;
  var startTime;
  var elapsedTime;
  var startEvent;
  var isMoving = false;
  var didMoved = false;
  function onTouchEnd(e) {
    this.removeEventListener("touchmove", onTouchMove);
    this.removeEventListener("touchend", onTouchEnd);
    if (!didMoved) {
      var tapEvent = import_jquery.default.Event("tap", startEvent || e);
      (0, import_jquery.default)(this).trigger(tapEvent);
    }
    startEvent = null;
    isMoving = false;
    didMoved = false;
  }
  function onTouchMove(e) {
    if (true === import_jquery.default.spotSwipe.preventDefault) {
      e.preventDefault();
    }
    if (isMoving) {
      var x = e.touches[0].pageX;
      var dx = startPosX - x;
      var dir;
      didMoved = true;
      elapsedTime = (/* @__PURE__ */ new Date()).getTime() - startTime;
      if (Math.abs(dx) >= import_jquery.default.spotSwipe.moveThreshold && elapsedTime <= import_jquery.default.spotSwipe.timeThreshold) {
        dir = dx > 0 ? "left" : "right";
      }
      if (dir) {
        e.preventDefault();
        onTouchEnd.apply(this, arguments);
        (0, import_jquery.default)(this).trigger(import_jquery.default.Event("swipe", Object.assign({}, e)), dir).trigger(import_jquery.default.Event("swipe".concat(dir), Object.assign({}, e)));
      }
    }
  }
  function onTouchStart(e) {
    if (e.touches.length === 1) {
      startPosX = e.touches[0].pageX;
      startEvent = e;
      isMoving = true;
      didMoved = false;
      startTime = (/* @__PURE__ */ new Date()).getTime();
      this.addEventListener("touchmove", onTouchMove, {
        passive: true === import_jquery.default.spotSwipe.preventDefault
      });
      this.addEventListener("touchend", onTouchEnd, false);
    }
  }
  function init() {
    this.addEventListener && this.addEventListener("touchstart", onTouchStart, {
      passive: true
    });
  }
  var SpotSwipe = /* @__PURE__ */ function() {
    function SpotSwipe2() {
      _classCallCheck(this, SpotSwipe2);
      this.version = "1.0.0";
      this.enabled = "ontouchstart" in document.documentElement;
      this.preventDefault = false;
      this.moveThreshold = 75;
      this.timeThreshold = 200;
      this._init();
    }
    _createClass(SpotSwipe2, [{
      key: "_init",
      value: function _init2() {
        import_jquery.default.event.special.swipe = {
          setup: init
        };
        import_jquery.default.event.special.tap = {
          setup: init
        };
        import_jquery.default.each(["left", "up", "down", "right"], function() {
          import_jquery.default.event.special["swipe".concat(this)] = {
            setup: function setup() {
              (0, import_jquery.default)(this).on("swipe", import_jquery.default.noop);
            }
          };
        });
      }
    }]);
    return SpotSwipe2;
  }();
  Touch.setupSpotSwipe = function() {
    import_jquery.default.spotSwipe = new SpotSwipe(import_jquery.default);
  };
  Touch.setupTouchHandler = function() {
    import_jquery.default.fn.addTouch = function() {
      this.each(function(i, el) {
        (0, import_jquery.default)(el).bind("touchstart touchmove touchend touchcancel", function(event) {
          handleTouch(event);
        });
      });
      var handleTouch = function handleTouch2(event) {
        var touches = event.changedTouches, first = touches[0], eventTypes = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup"
        }, type = eventTypes[event.type], simulatedEvent;
        if ("MouseEvent" in window && typeof window.MouseEvent === "function") {
          simulatedEvent = new window.MouseEvent(type, {
            "bubbles": true,
            "cancelable": true,
            "screenX": first.screenX,
            "screenY": first.screenY,
            "clientX": first.clientX,
            "clientY": first.clientY
          });
        } else {
          simulatedEvent = document.createEvent("MouseEvent");
          simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
        }
        first.target.dispatchEvent(simulatedEvent);
      };
    };
  };
  Touch.init = function() {
    if (typeof import_jquery.default.spotSwipe === "undefined") {
      Touch.setupSpotSwipe(import_jquery.default);
      Touch.setupTouchHandler(import_jquery.default);
    }
  };
  var MutationObserver2 = function() {
    var prefixes = ["WebKit", "Moz", "O", "Ms", ""];
    for (var i = 0; i < prefixes.length; i++) {
      if ("".concat(prefixes[i], "MutationObserver") in window) {
        return window["".concat(prefixes[i], "MutationObserver")];
      }
    }
    return false;
  }();
  var triggers = function triggers2(el, type) {
    el.data(type).split(" ").forEach(function(id2) {
      (0, import_jquery.default)("#".concat(id2))[type === "close" ? "trigger" : "triggerHandler"]("".concat(type, ".zf.trigger"), [el]);
    });
  };
  var Triggers = {
    Listeners: {
      Basic: {},
      Global: {}
    },
    Initializers: {}
  };
  Triggers.Listeners.Basic = {
    openListener: function openListener() {
      triggers((0, import_jquery.default)(this), "open");
    },
    closeListener: function closeListener() {
      var id2 = (0, import_jquery.default)(this).data("close");
      if (id2) {
        triggers((0, import_jquery.default)(this), "close");
      } else {
        (0, import_jquery.default)(this).trigger("close.zf.trigger");
      }
    },
    toggleListener: function toggleListener() {
      var id2 = (0, import_jquery.default)(this).data("toggle");
      if (id2) {
        triggers((0, import_jquery.default)(this), "toggle");
      } else {
        (0, import_jquery.default)(this).trigger("toggle.zf.trigger");
      }
    },
    closeableListener: function closeableListener(e) {
      var animation = (0, import_jquery.default)(this).data("closable");
      e.stopPropagation();
      if (animation !== "") {
        Motion.animateOut((0, import_jquery.default)(this), animation, function() {
          (0, import_jquery.default)(this).trigger("closed.zf");
        });
      } else {
        (0, import_jquery.default)(this).fadeOut().trigger("closed.zf");
      }
    },
    toggleFocusListener: function toggleFocusListener() {
      var id2 = (0, import_jquery.default)(this).data("toggle-focus");
      (0, import_jquery.default)("#".concat(id2)).triggerHandler("toggle.zf.trigger", [(0, import_jquery.default)(this)]);
    }
  };
  Triggers.Initializers.addOpenListener = function($elem) {
    $elem.off("click.zf.trigger", Triggers.Listeners.Basic.openListener);
    $elem.on("click.zf.trigger", "[data-open]", Triggers.Listeners.Basic.openListener);
  };
  Triggers.Initializers.addCloseListener = function($elem) {
    $elem.off("click.zf.trigger", Triggers.Listeners.Basic.closeListener);
    $elem.on("click.zf.trigger", "[data-close]", Triggers.Listeners.Basic.closeListener);
  };
  Triggers.Initializers.addToggleListener = function($elem) {
    $elem.off("click.zf.trigger", Triggers.Listeners.Basic.toggleListener);
    $elem.on("click.zf.trigger", "[data-toggle]", Triggers.Listeners.Basic.toggleListener);
  };
  Triggers.Initializers.addCloseableListener = function($elem) {
    $elem.off("close.zf.trigger", Triggers.Listeners.Basic.closeableListener);
    $elem.on("close.zf.trigger", "[data-closeable], [data-closable]", Triggers.Listeners.Basic.closeableListener);
  };
  Triggers.Initializers.addToggleFocusListener = function($elem) {
    $elem.off("focus.zf.trigger blur.zf.trigger", Triggers.Listeners.Basic.toggleFocusListener);
    $elem.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", Triggers.Listeners.Basic.toggleFocusListener);
  };
  Triggers.Listeners.Global = {
    resizeListener: function resizeListener($nodes) {
      if (!MutationObserver2) {
        $nodes.each(function() {
          (0, import_jquery.default)(this).triggerHandler("resizeme.zf.trigger");
        });
      }
      $nodes.attr("data-events", "resize");
    },
    scrollListener: function scrollListener($nodes) {
      if (!MutationObserver2) {
        $nodes.each(function() {
          (0, import_jquery.default)(this).triggerHandler("scrollme.zf.trigger");
        });
      }
      $nodes.attr("data-events", "scroll");
    },
    closeMeListener: function closeMeListener(e, pluginId) {
      var plugin2 = e.namespace.split(".")[0];
      var plugins = (0, import_jquery.default)("[data-".concat(plugin2, "]")).not('[data-yeti-box="'.concat(pluginId, '"]'));
      plugins.each(function() {
        var _this = (0, import_jquery.default)(this);
        _this.triggerHandler("close.zf.trigger", [_this]);
      });
    }
  };
  Triggers.Initializers.addClosemeListener = function(pluginName) {
    var yetiBoxes = (0, import_jquery.default)("[data-yeti-box]"), plugNames = ["dropdown", "tooltip", "reveal"];
    if (pluginName) {
      if (typeof pluginName === "string") {
        plugNames.push(pluginName);
      } else if (_typeof(pluginName) === "object" && typeof pluginName[0] === "string") {
        plugNames = plugNames.concat(pluginName);
      } else {
        console.error("Plugin names must be strings");
      }
    }
    if (yetiBoxes.length) {
      var listeners = plugNames.map(function(name) {
        return "closeme.zf.".concat(name);
      }).join(" ");
      (0, import_jquery.default)(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
    }
  };
  function debounceGlobalListener(debounce, trigger, listener) {
    var timer, args = Array.prototype.slice.call(arguments, 3);
    (0, import_jquery.default)(window).on(trigger, function() {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        listener.apply(null, args);
      }, debounce || 10);
    });
  }
  Triggers.Initializers.addResizeListener = function(debounce) {
    var $nodes = (0, import_jquery.default)("[data-resize]");
    if ($nodes.length) {
      debounceGlobalListener(debounce, "resize.zf.trigger", Triggers.Listeners.Global.resizeListener, $nodes);
    }
  };
  Triggers.Initializers.addScrollListener = function(debounce) {
    var $nodes = (0, import_jquery.default)("[data-scroll]");
    if ($nodes.length) {
      debounceGlobalListener(debounce, "scroll.zf.trigger", Triggers.Listeners.Global.scrollListener, $nodes);
    }
  };
  Triggers.Initializers.addMutationEventsListener = function($elem) {
    if (!MutationObserver2) {
      return false;
    }
    var $nodes = $elem.find("[data-resize], [data-scroll], [data-mutate]");
    var listeningElementsMutation = function listeningElementsMutation2(mutationRecordsList) {
      var $target = (0, import_jquery.default)(mutationRecordsList[0].target);
      switch (mutationRecordsList[0].type) {
        case "attributes":
          if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
            $target.triggerHandler("scrollme.zf.trigger", [$target, window.pageYOffset]);
          }
          if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
            $target.triggerHandler("resizeme.zf.trigger", [$target]);
          }
          if (mutationRecordsList[0].attributeName === "style") {
            $target.closest("[data-mutate]").attr("data-events", "mutate");
            $target.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [$target.closest("[data-mutate]")]);
          }
          break;
        case "childList":
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [$target.closest("[data-mutate]")]);
          break;
        default:
          return false;
      }
    };
    if ($nodes.length) {
      for (var i = 0; i <= $nodes.length - 1; i++) {
        var elementObserver = new MutationObserver2(listeningElementsMutation);
        elementObserver.observe($nodes[i], {
          attributes: true,
          childList: true,
          characterData: false,
          subtree: true,
          attributeFilter: ["data-events", "style"]
        });
      }
    }
  };
  Triggers.Initializers.addSimpleListeners = function() {
    var $document = (0, import_jquery.default)(document);
    Triggers.Initializers.addOpenListener($document);
    Triggers.Initializers.addCloseListener($document);
    Triggers.Initializers.addToggleListener($document);
    Triggers.Initializers.addCloseableListener($document);
    Triggers.Initializers.addToggleFocusListener($document);
  };
  Triggers.Initializers.addGlobalListeners = function() {
    var $document = (0, import_jquery.default)(document);
    Triggers.Initializers.addMutationEventsListener($document);
    Triggers.Initializers.addResizeListener(250);
    Triggers.Initializers.addScrollListener();
    Triggers.Initializers.addClosemeListener();
  };
  Triggers.init = function(__, Foundation2) {
    onLoad((0, import_jquery.default)(window), function() {
      if (import_jquery.default.triggersInitialized !== true) {
        Triggers.Initializers.addSimpleListeners();
        Triggers.Initializers.addGlobalListeners();
        import_jquery.default.triggersInitialized = true;
      }
    });
    if (Foundation2) {
      Foundation2.Triggers = Triggers;
      Foundation2.IHearYou = Triggers.Initializers.addGlobalListeners;
    }
  };
  var Plugin = /* @__PURE__ */ function() {
    function Plugin2(element, options) {
      _classCallCheck(this, Plugin2);
      this._setup(element, options);
      var pluginName = getPluginName(this);
      this.uuid = GetYoDigits(6, pluginName);
      if (!this.$element.attr("data-".concat(pluginName))) {
        this.$element.attr("data-".concat(pluginName), this.uuid);
      }
      if (!this.$element.data("zfPlugin")) {
        this.$element.data("zfPlugin", this);
      }
      this.$element.trigger("init.zf.".concat(pluginName));
    }
    _createClass(Plugin2, [{
      key: "destroy",
      value: function destroy() {
        this._destroy();
        var pluginName = getPluginName(this);
        this.$element.removeAttr("data-".concat(pluginName)).removeData("zfPlugin").trigger("destroyed.zf.".concat(pluginName));
        for (var prop in this) {
          if (this.hasOwnProperty(prop)) {
            this[prop] = null;
          }
        }
      }
    }]);
    return Plugin2;
  }();
  function hyphenate$1(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function getPluginName(obj) {
    return hyphenate$1(obj.className);
  }
  var Abide = /* @__PURE__ */ function(_Plugin) {
    _inherits(Abide2, _Plugin);
    var _super = _createSuper(Abide2);
    function Abide2() {
      _classCallCheck(this, Abide2);
      return _super.apply(this, arguments);
    }
    _createClass(Abide2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of Abide.
         * @class
         * @name Abide
         * @fires Abide#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.$element = element;
          this.options = import_jquery.default.extend(true, {}, Abide2.defaults, this.$element.data(), options);
          this.isEnabled = true;
          this.formnovalidate = null;
          this.className = "Abide";
          this._init();
        }
      )
      /**
       * Initializes the Abide plugin and calls functions to get Abide functioning on load.
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        var _this2 = this;
        this.$inputs = import_jquery.default.merge(
          // Consider as input to validate:
          this.$element.find("input").not('[type="submit"]'),
          // * all input fields expect submit
          this.$element.find("textarea, select")
          // * all textareas and select fields
        );
        this.$submits = this.$element.find('[type="submit"]');
        var $globalErrors = this.$element.find("[data-abide-error]");
        if (this.options.a11yAttributes) {
          this.$inputs.each(function(i, input) {
            return _this2.addA11yAttributes((0, import_jquery.default)(input));
          });
          $globalErrors.each(function(i, error2) {
            return _this2.addGlobalErrorA11yAttributes((0, import_jquery.default)(error2));
          });
        }
        this._events();
      }
      /**
       * Initializes events for Abide.
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this3 = this;
        this.$element.off(".abide").on("reset.zf.abide", function() {
          _this3.resetForm();
        }).on("submit.zf.abide", function() {
          return _this3.validateForm();
        });
        this.$submits.off("click.zf.abide keydown.zf.abide").on("click.zf.abide keydown.zf.abide", function(e) {
          if (!e.key || e.key === " " || e.key === "Enter") {
            e.preventDefault();
            _this3.formnovalidate = e.target.getAttribute("formnovalidate") !== null;
            _this3.$element.submit();
          }
        });
        if (this.options.validateOn === "fieldChange") {
          this.$inputs.off("change.zf.abide").on("change.zf.abide", function(e) {
            _this3.validateInput((0, import_jquery.default)(e.target));
          });
        }
        if (this.options.liveValidate) {
          this.$inputs.off("input.zf.abide").on("input.zf.abide", function(e) {
            _this3.validateInput((0, import_jquery.default)(e.target));
          });
        }
        if (this.options.validateOnBlur) {
          this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(e) {
            _this3.validateInput((0, import_jquery.default)(e.target));
          });
        }
      }
      /**
       * Calls necessary functions to update Abide upon DOM change
       * @private
       */
    }, {
      key: "_reflow",
      value: function _reflow() {
        this._init();
      }
      /**
       * Checks whether the submitted form should be validated or not, consodering formnovalidate and isEnabled
       * @returns {Boolean}
       * @private
       */
    }, {
      key: "_validationIsDisabled",
      value: function _validationIsDisabled() {
        if (this.isEnabled === false) {
          return true;
        } else if (typeof this.formnovalidate === "boolean") {
          return this.formnovalidate;
        }
        return this.$submits.length ? this.$submits[0].getAttribute("formnovalidate") !== null : false;
      }
      /**
       * Enables the whole validation
       */
    }, {
      key: "enableValidation",
      value: function enableValidation() {
        this.isEnabled = true;
      }
      /**
       * Disables the whole validation
       */
    }, {
      key: "disableValidation",
      value: function disableValidation() {
        this.isEnabled = false;
      }
      /**
       * Checks whether or not a form element has the required attribute and if it's checked or not
       * @param {Object} element - jQuery object to check for required attribute
       * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
       */
    }, {
      key: "requiredCheck",
      value: function requiredCheck($el) {
        if (!$el.attr("required"))
          return true;
        var isGood = true;
        switch ($el[0].type) {
          case "checkbox":
            isGood = $el[0].checked;
            break;
          case "select":
          case "select-one":
          case "select-multiple":
            var opt = $el.find("option:selected");
            if (!opt.length || !opt.val())
              isGood = false;
            break;
          default:
            if (!$el.val() || !$el.val().length)
              isGood = false;
        }
        return isGood;
      }
      /**
       * Get:
       * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
       *   1. The element's direct sibling('s).
       *   2. The element's parent's children.
       * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
       *
       * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
       *
       * @param {Object} $el - jQuery object to use as reference to find the form error selector.
       * @param {String[]} [failedValidators] - List of failed validators.
       * @returns {Object} jQuery object with the selector.
       */
    }, {
      key: "findFormError",
      value: function findFormError($el, failedValidators) {
        var _this4 = this;
        var id2 = $el.length ? $el[0].id : "";
        var $error = $el.siblings(this.options.formErrorSelector);
        if (!$error.length) {
          $error = $el.parent().find(this.options.formErrorSelector);
        }
        if (id2) {
          $error = $error.add(this.$element.find('[data-form-error-for="'.concat(id2, '"]')));
        }
        if (!!failedValidators) {
          $error = $error.not("[data-form-error-on]");
          failedValidators.forEach(function(v) {
            $error = $error.add($el.siblings('[data-form-error-on="'.concat(v, '"]')));
            $error = $error.add(_this4.$element.find('[data-form-error-for="'.concat(id2, '"][data-form-error-on="').concat(v, '"]')));
          });
        }
        return $error;
      }
      /**
       * Get the first element in this order:
       * 2. The <label> with the attribute `[for="someInputId"]`
       * 3. The `.closest()` <label>
       *
       * @param {Object} $el - jQuery object to check for required attribute
       * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
       */
    }, {
      key: "findLabel",
      value: function findLabel($el) {
        var id2 = $el[0].id;
        var $label = this.$element.find('label[for="'.concat(id2, '"]'));
        if (!$label.length) {
          return $el.closest("label");
        }
        return $label;
      }
      /**
       * Get the set of labels associated with a set of radio els in this order
       * 2. The <label> with the attribute `[for="someInputId"]`
       * 3. The `.closest()` <label>
       *
       * @param {Object} $el - jQuery object to check for required attribute
       * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
       */
    }, {
      key: "findRadioLabels",
      value: function findRadioLabels($els) {
        var _this5 = this;
        var labels = $els.map(function(i, el) {
          var id2 = el.id;
          var $label = _this5.$element.find('label[for="'.concat(id2, '"]'));
          if (!$label.length) {
            $label = (0, import_jquery.default)(el).closest("label");
          }
          return $label[0];
        });
        return (0, import_jquery.default)(labels);
      }
      /**
       * Get the set of labels associated with a set of checkbox els in this order
       * 2. The <label> with the attribute `[for="someInputId"]`
       * 3. The `.closest()` <label>
       *
       * @param {Object} $el - jQuery object to check for required attribute
       * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
       */
    }, {
      key: "findCheckboxLabels",
      value: function findCheckboxLabels($els) {
        var _this6 = this;
        var labels = $els.map(function(i, el) {
          var id2 = el.id;
          var $label = _this6.$element.find('label[for="'.concat(id2, '"]'));
          if (!$label.length) {
            $label = (0, import_jquery.default)(el).closest("label");
          }
          return $label[0];
        });
        return (0, import_jquery.default)(labels);
      }
      /**
       * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
       * @param {Object} $el - jQuery object to add the class to
       * @param {String[]} [failedValidators] - List of failed validators.
       */
    }, {
      key: "addErrorClasses",
      value: function addErrorClasses($el, failedValidators) {
        var $label = this.findLabel($el);
        var $formError = this.findFormError($el, failedValidators);
        if ($label.length) {
          $label.addClass(this.options.labelErrorClass);
        }
        if ($formError.length) {
          $formError.addClass(this.options.formErrorClass);
        }
        $el.addClass(this.options.inputErrorClass).attr({
          "data-invalid": "",
          "aria-invalid": true
        });
        if ($formError.filter(":visible").length) {
          this.addA11yErrorDescribe($el, $formError);
        }
      }
      /**
       * Adds [for] and [role=alert] attributes to all form error targetting $el,
       * and [aria-describedby] attribute to $el toward the first form error.
       * @param {Object} $el - jQuery object
       */
    }, {
      key: "addA11yAttributes",
      value: function addA11yAttributes($el) {
        var $errors = this.findFormError($el);
        var $labels = $errors.filter("label");
        if (!$errors.length)
          return;
        var $error = $errors.filter(":visible").first();
        if ($error.length) {
          this.addA11yErrorDescribe($el, $error);
        }
        if ($labels.filter("[for]").length < $labels.length) {
          var elemId = $el.attr("id");
          if (typeof elemId === "undefined") {
            elemId = GetYoDigits(6, "abide-input");
            $el.attr("id", elemId);
          }
          $labels.each(function(i, label) {
            var $label = (0, import_jquery.default)(label);
            if (typeof $label.attr("for") === "undefined")
              $label.attr("for", elemId);
          });
        }
        $errors.each(function(i, label) {
          var $label = (0, import_jquery.default)(label);
          if (typeof $label.attr("role") === "undefined")
            $label.attr("role", "alert");
        }).end();
      }
    }, {
      key: "addA11yErrorDescribe",
      value: function addA11yErrorDescribe($el, $error) {
        if (typeof $el.attr("aria-describedby") !== "undefined")
          return;
        var errorId = $error.attr("id");
        if (typeof errorId === "undefined") {
          errorId = GetYoDigits(6, "abide-error");
          $error.attr("id", errorId);
        }
        $el.attr("aria-describedby", errorId).data("abide-describedby", true);
      }
      /**
       * Adds [aria-live] attribute to the given global form error $el.
       * @param {Object} $el - jQuery object to add the attribute to
       */
    }, {
      key: "addGlobalErrorA11yAttributes",
      value: function addGlobalErrorA11yAttributes($el) {
        if (typeof $el.attr("aria-live") === "undefined")
          $el.attr("aria-live", this.options.a11yErrorLevel);
      }
      /**
       * Remove CSS error classes etc from an entire radio button group
       * @param {String} groupName - A string that specifies the name of a radio button group
       *
       */
    }, {
      key: "removeRadioErrorClasses",
      value: function removeRadioErrorClasses(groupName) {
        var $els = this.$element.find(':radio[name="'.concat(groupName, '"]'));
        var $labels = this.findRadioLabels($els);
        var $formErrors = this.findFormError($els);
        if ($labels.length) {
          $labels.removeClass(this.options.labelErrorClass);
        }
        if ($formErrors.length) {
          $formErrors.removeClass(this.options.formErrorClass);
        }
        $els.removeClass(this.options.inputErrorClass).attr({
          "data-invalid": null,
          "aria-invalid": null
        });
      }
      /**
       * Remove CSS error classes etc from an entire checkbox group
       * @param {String} groupName - A string that specifies the name of a checkbox group
       *
       */
    }, {
      key: "removeCheckboxErrorClasses",
      value: function removeCheckboxErrorClasses(groupName) {
        var $els = this.$element.find(':checkbox[name="'.concat(groupName, '"]'));
        var $labels = this.findCheckboxLabels($els);
        var $formErrors = this.findFormError($els);
        if ($labels.length) {
          $labels.removeClass(this.options.labelErrorClass);
        }
        if ($formErrors.length) {
          $formErrors.removeClass(this.options.formErrorClass);
        }
        $els.removeClass(this.options.inputErrorClass).attr({
          "data-invalid": null,
          "aria-invalid": null
        });
      }
      /**
       * Removes CSS error class as specified by the Abide settings from the label, input, and the form
       * @param {Object} $el - jQuery object to remove the class from
       */
    }, {
      key: "removeErrorClasses",
      value: function removeErrorClasses($el) {
        if ($el[0].type === "radio") {
          return this.removeRadioErrorClasses($el.attr("name"));
        } else if ($el[0].type === "checkbox") {
          return this.removeCheckboxErrorClasses($el.attr("name"));
        }
        var $label = this.findLabel($el);
        var $formError = this.findFormError($el);
        if ($label.length) {
          $label.removeClass(this.options.labelErrorClass);
        }
        if ($formError.length) {
          $formError.removeClass(this.options.formErrorClass);
        }
        $el.removeClass(this.options.inputErrorClass).attr({
          "data-invalid": null,
          "aria-invalid": null
        });
        if ($el.data("abide-describedby")) {
          $el.removeAttr("aria-describedby").removeData("abide-describedby");
        }
      }
      /**
       * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
       * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
       * @fires Abide#invalid
       * @fires Abide#valid
       * @param {Object} element - jQuery object to validate, should be an HTML input
       * @returns {Boolean} goodToGo - If the input is valid or not.
       */
    }, {
      key: "validateInput",
      value: function validateInput($el) {
        var _this7 = this;
        var clearRequire = this.requiredCheck($el), validator = $el.attr("data-validator"), failedValidators = [], manageErrorClasses = true;
        if (this._validationIsDisabled()) {
          return true;
        }
        if ($el.is("[data-abide-ignore]") || $el.is('[type="hidden"]') || $el.is("[disabled]")) {
          return true;
        }
        switch ($el[0].type) {
          case "radio":
            this.validateRadio($el.attr("name")) || failedValidators.push("required");
            break;
          case "checkbox":
            this.validateCheckbox($el.attr("name")) || failedValidators.push("required");
            manageErrorClasses = false;
            break;
          case "select":
          case "select-one":
          case "select-multiple":
            clearRequire || failedValidators.push("required");
            break;
          default:
            clearRequire || failedValidators.push("required");
            this.validateText($el) || failedValidators.push("pattern");
        }
        if (validator) {
          var required = $el.attr("required") ? true : false;
          validator.split(" ").forEach(function(v) {
            _this7.options.validators[v]($el, required, $el.parent()) || failedValidators.push(v);
          });
        }
        if ($el.attr("data-equalto")) {
          this.options.validators.equalTo($el) || failedValidators.push("equalTo");
        }
        var goodToGo = failedValidators.length === 0;
        var message = (goodToGo ? "valid" : "invalid") + ".zf.abide";
        if (goodToGo) {
          var dependentElements = this.$element.find('[data-equalto="'.concat($el.attr("id"), '"]'));
          if (dependentElements.length) {
            var _this = this;
            dependentElements.each(function() {
              if ((0, import_jquery.default)(this).val()) {
                _this.validateInput((0, import_jquery.default)(this));
              }
            });
          }
        }
        if (manageErrorClasses) {
          if (!goodToGo) {
            this.addErrorClasses($el, failedValidators);
          } else {
            this.removeErrorClasses($el);
          }
        }
        $el.trigger(message, [$el]);
        return goodToGo;
      }
      /**
       * Goes through a form and if there are any invalid inputs, it will display the form error element
       * @returns {Boolean} noError - true if no errors were detected...
       * @fires Abide#formvalid
       * @fires Abide#forminvalid
       */
    }, {
      key: "validateForm",
      value: function validateForm() {
        var _this8 = this;
        var acc = [];
        var _this = this;
        var checkboxGroupName;
        if (!this.initialized) {
          this.initialized = true;
        }
        if (this._validationIsDisabled()) {
          this.formnovalidate = null;
          return true;
        }
        this.$inputs.each(function() {
          if ((0, import_jquery.default)(this)[0].type === "checkbox") {
            if ((0, import_jquery.default)(this).attr("name") === checkboxGroupName)
              return true;
            checkboxGroupName = (0, import_jquery.default)(this).attr("name");
          }
          acc.push(_this.validateInput((0, import_jquery.default)(this)));
        });
        var noError = acc.indexOf(false) === -1;
        this.$element.find("[data-abide-error]").each(function(i, elem) {
          var $elem = (0, import_jquery.default)(elem);
          if (_this8.options.a11yAttributes)
            _this8.addGlobalErrorA11yAttributes($elem);
          $elem.css("display", noError ? "none" : "block");
        });
        this.$element.trigger((noError ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]);
        return noError;
      }
      /**
       * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
       * @param {Object} $el - jQuery object to validate, should be a text input HTML element
       * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
       * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
       */
    }, {
      key: "validateText",
      value: function validateText($el, pattern) {
        pattern = pattern || $el.attr("data-pattern") || $el.attr("pattern") || $el.attr("type");
        var inputText = $el.val();
        var valid = true;
        if (inputText.length) {
          if (this.options.patterns.hasOwnProperty(pattern)) {
            valid = this.options.patterns[pattern].test(inputText);
          } else if (pattern !== $el.attr("type")) {
            valid = new RegExp(pattern).test(inputText);
          }
        }
        return valid;
      }
      /**
       * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
       * @param {String} groupName - A string that specifies the name of a radio button group
       * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
       */
    }, {
      key: "validateRadio",
      value: function validateRadio(groupName) {
        var $group = this.$element.find(':radio[name="'.concat(groupName, '"]'));
        var valid = false, required = false;
        $group.each(function(i, e) {
          if ((0, import_jquery.default)(e).attr("required")) {
            required = true;
          }
        });
        if (!required)
          valid = true;
        if (!valid) {
          $group.each(function(i, e) {
            if ((0, import_jquery.default)(e).prop("checked")) {
              valid = true;
            }
          });
        }
        return valid;
      }
      /**
       * Determines whether or a not a checkbox input is valid based on whether or not it is required and checked. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all checkboxes in its group.
       * @param {String} groupName - A string that specifies the name of a checkbox group
       * @returns {Boolean} Boolean value depends on whether or not at least one checkbox input has been checked (if it's required)
       */
    }, {
      key: "validateCheckbox",
      value: function validateCheckbox(groupName) {
        var _this9 = this;
        var $group = this.$element.find(':checkbox[name="'.concat(groupName, '"]'));
        var valid = false, required = false, minRequired = 1, checked = 0;
        $group.each(function(i, e) {
          if ((0, import_jquery.default)(e).attr("required")) {
            required = true;
          }
        });
        if (!required)
          valid = true;
        if (!valid) {
          $group.each(function(i, e) {
            if ((0, import_jquery.default)(e).prop("checked")) {
              checked++;
            }
            if (typeof (0, import_jquery.default)(e).attr("data-min-required") !== "undefined") {
              minRequired = parseInt((0, import_jquery.default)(e).attr("data-min-required"), 10);
            }
          });
          if (checked >= minRequired) {
            valid = true;
          }
        }
        if (this.initialized !== true && minRequired > 1) {
          return true;
        }
        $group.each(function(i, e) {
          if (!valid) {
            _this9.addErrorClasses((0, import_jquery.default)(e), ["required"]);
          } else {
            _this9.removeErrorClasses((0, import_jquery.default)(e));
          }
        });
        return valid;
      }
      /**
       * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
       * @param {Object} $el - jQuery input element.
       * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
       * @param {Boolean} required - self explanatory?
       * @returns {Boolean} - true if validations passed.
       */
    }, {
      key: "matchValidation",
      value: function matchValidation($el, validators, required) {
        var _this10 = this;
        required = required ? true : false;
        var clear = validators.split(" ").map(function(v) {
          return _this10.options.validators[v]($el, required, $el.parent());
        });
        return clear.indexOf(false) === -1;
      }
      /**
       * Resets form inputs and styles
       * @fires Abide#formreset
       */
    }, {
      key: "resetForm",
      value: function resetForm() {
        var $form = this.$element, opts = this.options;
        (0, import_jquery.default)(".".concat(opts.labelErrorClass), $form).not("small").removeClass(opts.labelErrorClass);
        (0, import_jquery.default)(".".concat(opts.inputErrorClass), $form).not("small").removeClass(opts.inputErrorClass);
        (0, import_jquery.default)("".concat(opts.formErrorSelector, ".").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);
        $form.find("[data-abide-error]").css("display", "none");
        (0, import_jquery.default)(":input", $form).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({
          "data-invalid": null,
          "aria-invalid": null
        });
        (0, import_jquery.default)(":input:radio", $form).not("[data-abide-ignore]").prop("checked", false).attr({
          "data-invalid": null,
          "aria-invalid": null
        });
        (0, import_jquery.default)(":input:checkbox", $form).not("[data-abide-ignore]").prop("checked", false).attr({
          "data-invalid": null,
          "aria-invalid": null
        });
        $form.trigger("formreset.zf.abide", [$form]);
      }
      /**
       * Destroys an instance of Abide.
       * Removes error styles and classes from elements, without resetting their values.
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        var _this = this;
        this.$element.off(".abide").find("[data-abide-error]").css("display", "none");
        this.$inputs.off(".abide").each(function() {
          _this.removeErrorClasses((0, import_jquery.default)(this));
        });
        this.$submits.off(".abide");
      }
    }]);
    return Abide2;
  }(Plugin);
  Abide.defaults = {
    /**
     * The default event to validate inputs. Checkboxes and radios validate immediately.
     * Remove or change this value for manual validation.
     * @option
     * @type {?string}
     * @default 'fieldChange'
     */
    validateOn: "fieldChange",
    /**
     * Class to be applied to input labels on failed validation.
     * @option
     * @type {string}
     * @default 'is-invalid-label'
     */
    labelErrorClass: "is-invalid-label",
    /**
     * Class to be applied to inputs on failed validation.
     * @option
     * @type {string}
     * @default 'is-invalid-input'
     */
    inputErrorClass: "is-invalid-input",
    /**
     * Class selector to use to target Form Errors for show/hide.
     * @option
     * @type {string}
     * @default '.form-error'
     */
    formErrorSelector: ".form-error",
    /**
     * Class added to Form Errors on failed validation.
     * @option
     * @type {string}
     * @default 'is-visible'
     */
    formErrorClass: "is-visible",
    /**
     * If true, automatically insert when possible:
     * - `[aria-describedby]` on fields
     * - `[role=alert]` on form errors and `[for]` on form error labels
     * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
     * @option
     * @type {boolean}
     * @default true
     */
    a11yAttributes: true,
    /**
     * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
     * Options are: 'assertive', 'polite' and 'off'/null
     * @option
     * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
     * @type {string}
     * @default 'assertive'
     */
    a11yErrorLevel: "assertive",
    /**
     * Set to true to validate text inputs on any value change.
     * @option
     * @type {boolean}
     * @default false
     */
    liveValidate: false,
    /**
     * Set to true to validate inputs on blur.
     * @option
     * @type {boolean}
     * @default false
     */
    validateOnBlur: false,
    patterns: {
      alpha: /^[a-zA-Z]+$/,
      // eslint-disable-next-line camelcase
      alpha_numeric: /^[a-zA-Z0-9]+$/,
      integer: /^[-+]?\d+$/,
      number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
      // amex, visa, diners
      card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
      cvv: /^([0-9]){3,4}$/,
      // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
      email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
      // From CommonRegexJS (@talyssonoc)
      // https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
      // For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
      url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
      // abc.de
      domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
      datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
      // YYYY-MM-DD
      date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
      // HH:MM:SS
      time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
      dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
      // MM/DD/YYYY
      // eslint-disable-next-line camelcase
      month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
      // DD/MM/YYYY
      // eslint-disable-next-line camelcase
      day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
      // #FFF or #FFFFFF
      color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
      // Domain || URL
      website: {
        test: function test(text) {
          return Abide.defaults.patterns.domain.test(text) || Abide.defaults.patterns.url.test(text);
        }
      }
    },
    /**
     * Optional validation functions to be used. `equalTo` being the only default included function.
     * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
     * el : The jQuery element to validate.
     * @option
     */
    validators: {
      equalTo: function equalTo(el) {
        return (0, import_jquery.default)("#".concat(el.attr("data-equalto"))).val() === el.val();
      }
    }
  };
  var Accordion = /* @__PURE__ */ function(_Plugin) {
    _inherits(Accordion2, _Plugin);
    var _super = _createSuper(Accordion2);
    function Accordion2() {
      _classCallCheck(this, Accordion2);
      return _super.apply(this, arguments);
    }
    _createClass(Accordion2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of an accordion.
         * @class
         * @name Accordion
         * @fires Accordion#init
         * @param {jQuery} element - jQuery object to make into an accordion.
         * @param {Object} options - a plain object with settings to override the default options.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Accordion2.defaults, this.$element.data(), options);
          this.className = "Accordion";
          this._init();
          Keyboard.register("Accordion", {
            "ENTER": "toggle",
            "SPACE": "toggle",
            "ARROW_DOWN": "next",
            "ARROW_UP": "previous",
            "HOME": "first",
            "END": "last"
          });
        }
      )
      /**
       * Initializes the accordion by animating the preset active pane(s).
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        var _this2 = this;
        this._isInitializing = true;
        this.$tabs = this.$element.children("[data-accordion-item]");
        this.$tabs.each(function(idx, el) {
          var $el = (0, import_jquery.default)(el), $content = $el.children("[data-tab-content]"), id2 = $content[0].id || GetYoDigits(6, "accordion"), linkId = el.id ? "".concat(el.id, "-label") : "".concat(id2, "-label");
          $el.find("a:first").attr({
            "aria-controls": id2,
            "id": linkId,
            "aria-expanded": false
          });
          $content.attr({
            "role": "region",
            "aria-labelledby": linkId,
            "aria-hidden": true,
            "id": id2
          });
        });
        var $initActive = this.$element.find(".is-active").children("[data-tab-content]");
        if ($initActive.length) {
          this._initialAnchor = $initActive.prev("a").attr("href");
          this._openSingleTab($initActive);
        }
        this._checkDeepLink = function() {
          var anchor = window.location.hash;
          if (!anchor.length) {
            if (_this2._isInitializing)
              return;
            if (_this2._initialAnchor)
              anchor = _this2._initialAnchor;
          }
          var $anchor = anchor && (0, import_jquery.default)(anchor);
          var $link = anchor && _this2.$element.find('[href$="'.concat(anchor, '"]'));
          var isOwnAnchor = !!($anchor.length && $link.length);
          if (isOwnAnchor) {
            if ($anchor && $link && $link.length) {
              if (!$link.parent("[data-accordion-item]").hasClass("is-active")) {
                _this2._openSingleTab($anchor);
              }
            } else {
              _this2._closeAllTabs();
            }
            if (_this2.options.deepLinkSmudge) {
              onLoad((0, import_jquery.default)(window), function() {
                var offset = _this2.$element.offset();
                (0, import_jquery.default)("html, body").animate({
                  scrollTop: offset.top - _this2.options.deepLinkSmudgeOffset
                }, _this2.options.deepLinkSmudgeDelay);
              });
            }
            _this2.$element.trigger("deeplink.zf.accordion", [$link, $anchor]);
          }
        };
        if (this.options.deepLink) {
          this._checkDeepLink();
        }
        this._events();
        this._isInitializing = false;
      }
      /**
       * Adds event handlers for items within the accordion.
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this = this;
        this.$tabs.each(function() {
          var $elem = (0, import_jquery.default)(this);
          var $tabContent = $elem.children("[data-tab-content]");
          if ($tabContent.length) {
            $elem.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
              e.preventDefault();
              _this.toggle($tabContent);
            }).on("keydown.zf.accordion", function(e) {
              Keyboard.handleKey(e, "Accordion", {
                toggle: function toggle2() {
                  _this.toggle($tabContent);
                },
                next: function next2() {
                  var $a = $elem.next().find("a").focus();
                  if (!_this.options.multiExpand) {
                    $a.trigger("click.zf.accordion");
                  }
                },
                previous: function previous() {
                  var $a = $elem.prev().find("a").focus();
                  if (!_this.options.multiExpand) {
                    $a.trigger("click.zf.accordion");
                  }
                },
                first: function first() {
                  var $a = _this.$tabs.first().find(".accordion-title").focus();
                  if (!_this.options.multiExpand) {
                    $a.trigger("click.zf.accordion");
                  }
                },
                last: function last() {
                  var $a = _this.$tabs.last().find(".accordion-title").focus();
                  if (!_this.options.multiExpand) {
                    $a.trigger("click.zf.accordion");
                  }
                },
                handled: function handled() {
                  e.preventDefault();
                }
              });
            });
          }
        });
        if (this.options.deepLink) {
          (0, import_jquery.default)(window).on("hashchange", this._checkDeepLink);
        }
      }
      /**
       * Toggles the selected content pane's open/close state.
       * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
       * @function
       */
    }, {
      key: "toggle",
      value: function toggle2($target) {
        if ($target.closest("[data-accordion]").is("[disabled]")) {
          console.info("Cannot toggle an accordion that is disabled.");
          return;
        }
        if ($target.parent().hasClass("is-active")) {
          this.up($target);
        } else {
          this.down($target);
        }
        if (this.options.deepLink) {
          var anchor = $target.prev("a").attr("href");
          if (this.options.updateHistory) {
            history.pushState({}, "", anchor);
          } else {
            history.replaceState({}, "", anchor);
          }
        }
      }
      /**
       * Opens the accordion tab defined by `$target`.
       * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
       * @fires Accordion#down
       * @function
       */
    }, {
      key: "down",
      value: function down($target) {
        if ($target.closest("[data-accordion]").is("[disabled]")) {
          console.info("Cannot call down on an accordion that is disabled.");
          return;
        }
        if (this.options.multiExpand)
          this._openTab($target);
        else
          this._openSingleTab($target);
      }
      /**
       * Closes the tab defined by `$target`.
       * It may be ignored if the Accordion options don't allow it.
       *
       * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
       * @fires Accordion#up
       * @function
       */
    }, {
      key: "up",
      value: function up($target) {
        if (this.$element.is("[disabled]")) {
          console.info("Cannot call up on an accordion that is disabled.");
          return;
        }
        var $targetItem = $target.parent();
        if (!$targetItem.hasClass("is-active"))
          return;
        var $othersItems = $targetItem.siblings();
        if (!this.options.allowAllClosed && !$othersItems.hasClass("is-active"))
          return;
        this._closeTab($target);
      }
      /**
       * Make the tab defined by `$target` the only opened tab, closing all others tabs.
       * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
       * @function
       * @private
       */
    }, {
      key: "_openSingleTab",
      value: function _openSingleTab($target) {
        var $activeContents = this.$element.children(".is-active").children("[data-tab-content]");
        if ($activeContents.length) {
          this._closeTab($activeContents.not($target));
        }
        this._openTab($target);
      }
      /**
       * Opens the tab defined by `$target`.
       * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
       * @fires Accordion#down
       * @function
       * @private
       */
    }, {
      key: "_openTab",
      value: function _openTab($target) {
        var _this3 = this;
        var $targetItem = $target.parent();
        var targetContentId = $target.attr("aria-labelledby");
        $target.attr("aria-hidden", false);
        $targetItem.addClass("is-active");
        (0, import_jquery.default)("#".concat(targetContentId)).attr({
          "aria-expanded": true
        });
        $target.finish().slideDown(this.options.slideSpeed, function() {
          _this3.$element.trigger("down.zf.accordion", [$target]);
        });
      }
      /**
       * Closes the tab defined by `$target`.
       * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
       * @fires Accordion#up
       * @function
       * @private
       */
    }, {
      key: "_closeTab",
      value: function _closeTab($target) {
        var _this4 = this;
        var $targetItem = $target.parent();
        var targetContentId = $target.attr("aria-labelledby");
        $target.attr("aria-hidden", true);
        $targetItem.removeClass("is-active");
        (0, import_jquery.default)("#".concat(targetContentId)).attr({
          "aria-expanded": false
        });
        $target.finish().slideUp(this.options.slideSpeed, function() {
          _this4.$element.trigger("up.zf.accordion", [$target]);
        });
      }
      /**
       * Closes all active tabs
       * @fires Accordion#up
       * @function
       * @private
       */
    }, {
      key: "_closeAllTabs",
      value: function _closeAllTabs() {
        var $activeTabs = this.$element.children(".is-active").children("[data-tab-content]");
        if ($activeTabs.length) {
          this._closeTab($activeTabs);
        }
      }
      /**
       * Destroys an instance of an accordion.
       * @fires Accordion#destroyed
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$element.find("[data-tab-content]").stop(true).slideUp(0).css("display", "");
        this.$element.find("a").off(".zf.accordion");
        if (this.options.deepLink) {
          (0, import_jquery.default)(window).off("hashchange", this._checkDeepLink);
        }
      }
    }]);
    return Accordion2;
  }(Plugin);
  Accordion.defaults = {
    /**
     * Amount of time to animate the opening of an accordion pane.
     * @option
     * @type {number}
     * @default 250
     */
    slideSpeed: 250,
    /**
     * Allow the accordion to have multiple open panes.
     * @option
     * @type {boolean}
     * @default false
     */
    multiExpand: false,
    /**
     * Allow the accordion to close all panes.
     * @option
     * @type {boolean}
     * @default false
     */
    allowAllClosed: false,
    /**
     * Link the location hash to the open pane.
     * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
     * @option
     * @type {boolean}
     * @default false
     */
    deepLink: false,
    /**
     * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
     * @option
     * @type {boolean}
     * @default false
     */
    deepLinkSmudge: false,
    /**
     * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
     * @option
     * @type {number}
     * @default 300
     */
    deepLinkSmudgeDelay: 300,
    /**
     * If `deepLinkSmudge` is enabled, the offset for scrollToTtop to prevent overlap by a sticky element at the top of the page
     * @option
     * @type {number}
     * @default 0
     */
    deepLinkSmudgeOffset: 0,
    /**
     * If `deepLink` is enabled, update the browser history with the open accordion
     * @option
     * @type {boolean}
     * @default false
     */
    updateHistory: false
  };
  var AccordionMenu = /* @__PURE__ */ function(_Plugin) {
    _inherits(AccordionMenu2, _Plugin);
    var _super = _createSuper(AccordionMenu2);
    function AccordionMenu2() {
      _classCallCheck(this, AccordionMenu2);
      return _super.apply(this, arguments);
    }
    _createClass(AccordionMenu2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of an accordion menu.
         * @class
         * @name AccordionMenu
         * @fires AccordionMenu#init
         * @param {jQuery} element - jQuery object to make into an accordion menu.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, AccordionMenu2.defaults, this.$element.data(), options);
          this.className = "AccordionMenu";
          this._init();
          Keyboard.register("AccordionMenu", {
            "ENTER": "toggle",
            "SPACE": "toggle",
            "ARROW_RIGHT": "open",
            "ARROW_UP": "up",
            "ARROW_DOWN": "down",
            "ARROW_LEFT": "close",
            "ESCAPE": "closeAll"
          });
        }
      )
      /**
       * Initializes the accordion menu by hiding all nested menus.
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        Nest.Feather(this.$element, "accordion");
        var _this = this;
        this.$element.find("[data-submenu]").not(".is-active").slideUp(0);
        this.$element.attr({
          "aria-multiselectable": this.options.multiOpen
        });
        this.$menuLinks = this.$element.find(".is-accordion-submenu-parent");
        this.$menuLinks.each(function() {
          var linkId = this.id || GetYoDigits(6, "acc-menu-link"), $elem = (0, import_jquery.default)(this), $sub = $elem.children("[data-submenu]"), subId = $sub[0].id || GetYoDigits(6, "acc-menu"), isActive = $sub.hasClass("is-active");
          if (_this.options.parentLink) {
            var $anchor = $elem.children("a");
            $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
          }
          if (_this.options.submenuToggle) {
            $elem.addClass("has-submenu-toggle");
            $elem.children("a").after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + "</span></button>");
          } else {
            $elem.attr({
              "aria-controls": subId,
              "aria-expanded": isActive,
              "id": linkId
            });
          }
          $sub.attr({
            "aria-labelledby": linkId,
            "aria-hidden": !isActive,
            "role": "group",
            "id": subId
          });
        });
        var initPanes = this.$element.find(".is-active");
        if (initPanes.length) {
          initPanes.each(function() {
            _this.down((0, import_jquery.default)(this));
          });
        }
        this._events();
      }
      /**
       * Adds event handlers for items within the menu.
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this = this;
        this.$element.find("li").each(function() {
          var $submenu = (0, import_jquery.default)(this).children("[data-submenu]");
          if ($submenu.length) {
            if (_this.options.submenuToggle) {
              (0, import_jquery.default)(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function() {
                _this.toggle($submenu);
              });
            } else {
              (0, import_jquery.default)(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(e) {
                e.preventDefault();
                _this.toggle($submenu);
              });
            }
          }
        }).on("keydown.zf.accordionMenu", function(e) {
          var $element = (0, import_jquery.default)(this), $elements = $element.parent("ul").children("li"), $prevElement, $nextElement, $target = $element.children("[data-submenu]");
          $elements.each(function(i) {
            if ((0, import_jquery.default)(this).is($element)) {
              $prevElement = $elements.eq(Math.max(0, i - 1)).find("a").first();
              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find("a").first();
              if ((0, import_jquery.default)(this).children("[data-submenu]:visible").length) {
                $nextElement = $element.find("li:first-child").find("a").first();
              }
              if ((0, import_jquery.default)(this).is(":first-child")) {
                $prevElement = $element.parents("li").first().find("a").first();
              } else if ($prevElement.parents("li").first().children("[data-submenu]:visible").length) {
                $prevElement = $prevElement.parents("li").find("li:last-child").find("a").first();
              }
              if ((0, import_jquery.default)(this).is(":last-child")) {
                $nextElement = $element.parents("li").first().next("li").find("a").first();
              }
              return;
            }
          });
          Keyboard.handleKey(e, "AccordionMenu", {
            open: function open3() {
              if ($target.is(":hidden")) {
                _this.down($target);
                $target.find("li").first().find("a").first().focus();
              }
            },
            close: function close2() {
              if ($target.length && !$target.is(":hidden")) {
                _this.up($target);
              } else if ($element.parent("[data-submenu]").length) {
                _this.up($element.parent("[data-submenu]"));
                $element.parents("li").first().find("a").first().focus();
              }
            },
            up: function up() {
              $prevElement.focus();
              return true;
            },
            down: function down() {
              $nextElement.focus();
              return true;
            },
            toggle: function toggle2() {
              if (_this.options.submenuToggle) {
                return false;
              }
              if ($element.children("[data-submenu]").length) {
                _this.toggle($element.children("[data-submenu]"));
                return true;
              }
            },
            closeAll: function closeAll() {
              _this.hideAll();
            },
            handled: function handled(preventDefault) {
              if (preventDefault) {
                e.preventDefault();
              }
            }
          });
        });
      }
      /**
       * Closes all panes of the menu.
       * @function
       */
    }, {
      key: "hideAll",
      value: function hideAll() {
        this.up(this.$element.find("[data-submenu]"));
      }
      /**
       * Opens all panes of the menu.
       * @function
       */
    }, {
      key: "showAll",
      value: function showAll() {
        this.down(this.$element.find("[data-submenu]"));
      }
      /**
       * Toggles the open/close state of a submenu.
       * @function
       * @param {jQuery} $target - the submenu to toggle
       */
    }, {
      key: "toggle",
      value: function toggle2($target) {
        if (!$target.is(":animated")) {
          if (!$target.is(":hidden")) {
            this.up($target);
          } else {
            this.down($target);
          }
        }
      }
      /**
       * Opens the sub-menu defined by `$target`.
       * @param {jQuery} $target - Sub-menu to open.
       * @fires AccordionMenu#down
       */
    }, {
      key: "down",
      value: function down($target) {
        var _this2 = this;
        if (!this.options.multiOpen) {
          var $targetBranch = $target.parentsUntil(this.$element).add($target).add($target.find(".is-active"));
          var $othersActiveSubmenus = this.$element.find(".is-active").not($targetBranch);
          this.up($othersActiveSubmenus);
        }
        $target.addClass("is-active").attr({
          "aria-hidden": false
        });
        if (this.options.submenuToggle) {
          $target.prev(".submenu-toggle").attr({
            "aria-expanded": true
          });
        } else {
          $target.parent(".is-accordion-submenu-parent").attr({
            "aria-expanded": true
          });
        }
        $target.slideDown(this.options.slideSpeed, function() {
          _this2.$element.trigger("down.zf.accordionMenu", [$target]);
        });
      }
      /**
       * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
       * @param {jQuery} $target - Sub-menu to close.
       * @fires AccordionMenu#up
       */
    }, {
      key: "up",
      value: function up($target) {
        var _this3 = this;
        var $submenus = $target.find("[data-submenu]");
        var $allmenus = $target.add($submenus);
        $submenus.slideUp(0);
        $allmenus.removeClass("is-active").attr("aria-hidden", true);
        if (this.options.submenuToggle) {
          $allmenus.prev(".submenu-toggle").attr("aria-expanded", false);
        } else {
          $allmenus.parent(".is-accordion-submenu-parent").attr("aria-expanded", false);
        }
        $target.slideUp(this.options.slideSpeed, function() {
          _this3.$element.trigger("up.zf.accordionMenu", [$target]);
        });
      }
      /**
       * Destroys an instance of accordion menu.
       * @fires AccordionMenu#destroyed
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$element.find("[data-submenu]").slideDown(0).css("display", "");
        this.$element.find("a").off("click.zf.accordionMenu");
        this.$element.find("[data-is-parent-link]").detach();
        if (this.options.submenuToggle) {
          this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle");
          this.$element.find(".submenu-toggle").remove();
        }
        Nest.Burn(this.$element, "accordion");
      }
    }]);
    return AccordionMenu2;
  }(Plugin);
  AccordionMenu.defaults = {
    /**
     * Adds the parent link to the submenu.
     * @option
     * @type {boolean}
     * @default false
     */
    parentLink: false,
    /**
     * Amount of time to animate the opening of a submenu in ms.
     * @option
     * @type {number}
     * @default 250
     */
    slideSpeed: 250,
    /**
     * Adds a separate submenu toggle button. This allows the parent item to have a link.
     * @option
     * @example true
     */
    submenuToggle: false,
    /**
     * The text used for the submenu toggle if enabled. This is used for screen readers only.
     * @option
     * @example true
     */
    submenuToggleText: "Toggle menu",
    /**
     * Allow the menu to have multiple open panes.
     * @option
     * @type {boolean}
     * @default true
     */
    multiOpen: true
  };
  var Drilldown = /* @__PURE__ */ function(_Plugin) {
    _inherits(Drilldown2, _Plugin);
    var _super = _createSuper(Drilldown2);
    function Drilldown2() {
      _classCallCheck(this, Drilldown2);
      return _super.apply(this, arguments);
    }
    _createClass(Drilldown2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of a drilldown menu.
         * @class
         * @name Drilldown
         * @param {jQuery} element - jQuery object to make into an accordion menu.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Drilldown2.defaults, this.$element.data(), options);
          this.className = "Drilldown";
          this._init();
          Keyboard.register("Drilldown", {
            "ENTER": "open",
            "SPACE": "open",
            "ARROW_RIGHT": "next",
            "ARROW_UP": "up",
            "ARROW_DOWN": "down",
            "ARROW_LEFT": "previous",
            "ESCAPE": "close"
          });
        }
      )
      /**
       * Initializes the drilldown by creating jQuery collections of elements
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        Nest.Feather(this.$element, "drilldown");
        if (this.options.autoApplyClass) {
          this.$element.addClass("drilldown");
        }
        this.$element.attr({
          "aria-multiselectable": false
        });
        this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a");
        this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role", "group");
        this.$menuItems = this.$element.find("li").not(".js-drilldown-back").find("a");
        this.$currentMenu = this.$element;
        this.$element.attr("data-mutate", this.$element.attr("data-drilldown") || GetYoDigits(6, "drilldown"));
        this._prepareMenu();
        this._registerEvents();
        this._keyboardEvents();
      }
      /**
       * prepares drilldown menu by setting attributes to links and elements
       * sets a min height to prevent content jumping
       * wraps the element if not already wrapped
       * @private
       * @function
       */
    }, {
      key: "_prepareMenu",
      value: function _prepareMenu() {
        var _this = this;
        this.$submenuAnchors.each(function() {
          var $link = (0, import_jquery.default)(this);
          var $sub = $link.parent();
          if (_this.options.parentLink) {
            $link.clone().prependTo($sub.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="none"></li>');
          }
          $link.data("savedHref", $link.attr("href")).removeAttr("href").attr("tabindex", 0);
          $link.children("[data-submenu]").attr({
            "aria-hidden": true,
            "tabindex": 0,
            "role": "group"
          });
          _this._events($link);
        });
        this.$submenus.each(function() {
          var $menu = (0, import_jquery.default)(this), $back = $menu.find(".js-drilldown-back");
          if (!$back.length) {
            switch (_this.options.backButtonPosition) {
              case "bottom":
                $menu.append(_this.options.backButton);
                break;
              case "top":
                $menu.prepend(_this.options.backButton);
                break;
              default:
                console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
            }
          }
          _this._back($menu);
        });
        this.$submenus.addClass("invisible");
        if (!this.options.autoHeight) {
          this.$submenus.addClass("drilldown-submenu-cover-previous");
        }
        if (!this.$element.parent().hasClass("is-drilldown")) {
          this.$wrapper = (0, import_jquery.default)(this.options.wrapper).addClass("is-drilldown");
          if (this.options.animateHeight)
            this.$wrapper.addClass("animate-height");
          this.$element.wrap(this.$wrapper);
        }
        this.$wrapper = this.$element.parent();
        this.$wrapper.css(this._getMaxDims());
      }
    }, {
      key: "_resize",
      value: function _resize() {
        this.$wrapper.css({
          "max-width": "none",
          "min-height": "none"
        });
        this.$wrapper.css(this._getMaxDims());
      }
      /**
       * Adds event handlers to elements in the menu.
       * @function
       * @private
       * @param {jQuery} $elem - the current menu item to add handlers to.
       */
    }, {
      key: "_events",
      value: function _events($elem) {
        var _this = this;
        $elem.off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
          if ((0, import_jquery.default)(e.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent")) {
            e.preventDefault();
          }
          _this._show($elem.parent("li"));
          if (_this.options.closeOnClick) {
            var $body = (0, import_jquery.default)("body");
            $body.off(".zf.drilldown").on("click.zf.drilldown", function(ev) {
              if (ev.target === _this.$element[0] || import_jquery.default.contains(_this.$element[0], ev.target)) {
                return;
              }
              ev.preventDefault();
              _this._hideAll();
              $body.off(".zf.drilldown");
            });
          }
        });
      }
      /**
       * Adds event handlers to the menu element.
       * @function
       * @private
       */
    }, {
      key: "_registerEvents",
      value: function _registerEvents() {
        if (this.options.scrollTop) {
          this._bindHandler = this._scrollTop.bind(this);
          this.$element.on("open.zf.drilldown hide.zf.drilldown close.zf.drilldown closed.zf.drilldown", this._bindHandler);
        }
        this.$element.on("mutateme.zf.trigger", this._resize.bind(this));
      }
      /**
       * Scroll to Top of Element or data-scroll-top-element
       * @function
       * @fires Drilldown#scrollme
       */
    }, {
      key: "_scrollTop",
      value: function _scrollTop() {
        var _this = this;
        var $scrollTopElement = _this.options.scrollTopElement !== "" ? (0, import_jquery.default)(_this.options.scrollTopElement) : _this.$element, scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
        (0, import_jquery.default)("html, body").stop(true).animate({
          scrollTop: scrollPos
        }, _this.options.animationDuration, _this.options.animationEasing, function() {
          if (this === (0, import_jquery.default)("html")[0])
            _this.$element.trigger("scrollme.zf.drilldown");
        });
      }
      /**
       * Adds keydown event listener to `li`'s in the menu.
       * @private
       */
    }, {
      key: "_keyboardEvents",
      value: function _keyboardEvents() {
        var _this = this;
        this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown", function(e) {
          var $element = (0, import_jquery.default)(this), $elements = $element.parent("li").parent("ul").children("li").children("a"), $prevElement, $nextElement;
          $elements.each(function(i) {
            if ((0, import_jquery.default)(this).is($element)) {
              $prevElement = $elements.eq(Math.max(0, i - 1));
              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
              return;
            }
          });
          Keyboard.handleKey(e, "Drilldown", {
            next: function next2() {
              if ($element.is(_this.$submenuAnchors)) {
                _this._show($element.parent("li"));
                $element.parent("li").one(transitionend($element), function() {
                  $element.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus();
                });
                return true;
              }
            },
            previous: function previous() {
              _this._hide($element.parent("li").parent("ul"));
              $element.parent("li").parent("ul").one(transitionend($element), function() {
                setTimeout(function() {
                  $element.parent("li").parent("ul").parent("li").children("a").first().focus();
                }, 1);
              });
              return true;
            },
            up: function up() {
              $prevElement.focus();
              return !$element.is(_this.$element.find("> li:first-child > a"));
            },
            down: function down() {
              $nextElement.focus();
              return !$element.is(_this.$element.find("> li:last-child > a"));
            },
            close: function close2() {
              if (!$element.is(_this.$element.find("> li > a"))) {
                _this._hide($element.parent().parent());
                $element.parent().parent().siblings("a").focus();
              }
            },
            open: function open3() {
              if (_this.options.parentLink && $element.attr("href")) {
                return false;
              } else if (!$element.is(_this.$menuItems)) {
                _this._hide($element.parent("li").parent("ul"));
                $element.parent("li").parent("ul").one(transitionend($element), function() {
                  setTimeout(function() {
                    $element.parent("li").parent("ul").parent("li").children("a").first().focus();
                  }, 1);
                });
                return true;
              } else if ($element.is(_this.$submenuAnchors)) {
                _this._show($element.parent("li"));
                $element.parent("li").one(transitionend($element), function() {
                  $element.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus();
                });
                return true;
              }
            },
            handled: function handled(preventDefault) {
              if (preventDefault) {
                e.preventDefault();
              }
            }
          });
        });
      }
      /**
       * Closes all open elements, and returns to root menu.
       * @function
       * @fires Drilldown#close
       * @fires Drilldown#closed
       */
    }, {
      key: "_hideAll",
      value: function _hideAll() {
        var _this2 = this;
        var $elem = this.$element.find(".is-drilldown-submenu.is-active");
        $elem.addClass("is-closing");
        $elem.parent().closest("ul").removeClass("invisible");
        if (this.options.autoHeight) {
          var calcHeight = $elem.parent().closest("ul").data("calcHeight");
          this.$wrapper.css({
            height: calcHeight
          });
        }
        this.$element.trigger("close.zf.drilldown");
        $elem.one(transitionend($elem), function() {
          $elem.removeClass("is-active is-closing");
          _this2.$element.trigger("closed.zf.drilldown");
        });
      }
      /**
       * Adds event listener for each `back` button, and closes open menus.
       * @function
       * @fires Drilldown#back
       * @param {jQuery} $elem - the current sub-menu to add `back` event.
       */
    }, {
      key: "_back",
      value: function _back($elem) {
        var _this = this;
        $elem.off("click.zf.drilldown");
        $elem.children(".js-drilldown-back").on("click.zf.drilldown", function() {
          _this._hide($elem);
          var parentSubMenu = $elem.parent("li").parent("ul").parent("li");
          if (parentSubMenu.length) {
            _this._show(parentSubMenu);
          } else {
            _this.$currentMenu = _this.$element;
          }
        });
      }
      /**
       * Adds event listener to menu items w/o submenus to close open menus on click.
       * @function
       * @private
       */
    }, {
      key: "_menuLinkEvents",
      value: function _menuLinkEvents() {
        var _this = this;
        this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function() {
          setTimeout(function() {
            _this._hideAll();
          }, 0);
        });
      }
      /**
       * Sets the CSS classes for submenu to show it.
       * @function
       * @private
       * @param {jQuery} $elem - the target submenu (`ul` tag)
       * @param {boolean} trigger - trigger drilldown event
       */
    }, {
      key: "_setShowSubMenuClasses",
      value: function _setShowSubMenuClasses($elem, trigger) {
        $elem.addClass("is-active").removeClass("invisible").attr("aria-hidden", false);
        $elem.parent("li").attr("aria-expanded", true);
        if (trigger === true) {
          this.$element.trigger("open.zf.drilldown", [$elem]);
        }
      }
      /**
       * Sets the CSS classes for submenu to hide it.
       * @function
       * @private
       * @param {jQuery} $elem - the target submenu (`ul` tag)
       * @param {boolean} trigger - trigger drilldown event
       */
    }, {
      key: "_setHideSubMenuClasses",
      value: function _setHideSubMenuClasses($elem, trigger) {
        $elem.removeClass("is-active").addClass("invisible").attr("aria-hidden", true);
        $elem.parent("li").attr("aria-expanded", false);
        if (trigger === true) {
          $elem.trigger("hide.zf.drilldown", [$elem]);
        }
      }
      /**
       * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
       * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
       * @function
       * @fires Drilldown#open
       * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
       * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
       */
    }, {
      key: "_showMenu",
      value: function _showMenu($elem, autoFocus) {
        var _this = this;
        var $expandedSubmenus = this.$element.find('li[aria-expanded="true"] > ul[data-submenu]');
        $expandedSubmenus.each(function() {
          _this._setHideSubMenuClasses((0, import_jquery.default)(this));
        });
        this.$currentMenu = $elem;
        if ($elem.is("[data-drilldown]")) {
          if (autoFocus === true)
            $elem.find("li > a").first().focus();
          if (this.options.autoHeight)
            this.$wrapper.css("height", $elem.data("calcHeight"));
          return;
        }
        var $submenus = $elem.children().first().parentsUntil("[data-drilldown]", "[data-submenu]");
        $submenus.each(function(index) {
          if (index === 0 && _this.options.autoHeight) {
            _this.$wrapper.css("height", (0, import_jquery.default)(this).data("calcHeight"));
          }
          var isLastChild = index === $submenus.length - 1;
          if (isLastChild === true) {
            (0, import_jquery.default)(this).one(transitionend((0, import_jquery.default)(this)), function() {
              if (autoFocus === true) {
                $elem.find("li > a").first().focus();
              }
            });
          }
          _this._setShowSubMenuClasses((0, import_jquery.default)(this), isLastChild);
        });
      }
      /**
       * Opens a submenu.
       * @function
       * @fires Drilldown#open
       * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
       */
    }, {
      key: "_show",
      value: function _show($elem) {
        var $submenu = $elem.children("[data-submenu]");
        $elem.attr("aria-expanded", true);
        this.$currentMenu = $submenu;
        $elem.parent().closest("ul").addClass("invisible");
        $submenu.addClass("is-active visible").removeClass("invisible").attr("aria-hidden", false);
        if (this.options.autoHeight) {
          this.$wrapper.css({
            height: $submenu.data("calcHeight")
          });
        }
        this.$element.trigger("open.zf.drilldown", [$elem]);
      }
      /**
       * Hides a submenu
       * @function
       * @fires Drilldown#hide
       * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
       */
    }, {
      key: "_hide",
      value: function _hide($elem) {
        if (this.options.autoHeight)
          this.$wrapper.css({
            height: $elem.parent().closest("ul").data("calcHeight")
          });
        $elem.parent().closest("ul").removeClass("invisible");
        $elem.parent("li").attr("aria-expanded", false);
        $elem.attr("aria-hidden", true);
        $elem.addClass("is-closing").one(transitionend($elem), function() {
          $elem.removeClass("is-active is-closing visible");
          $elem.blur().addClass("invisible");
        });
        $elem.trigger("hide.zf.drilldown", [$elem]);
      }
      /**
       * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
       * Prevents content jumping.
       * @function
       * @private
       */
    }, {
      key: "_getMaxDims",
      value: function _getMaxDims() {
        var maxHeight = 0, result = {}, _this = this;
        this.$submenus.add(this.$element).each(function() {
          var height = Box.GetDimensions(this).height;
          maxHeight = height > maxHeight ? height : maxHeight;
          if (_this.options.autoHeight) {
            (0, import_jquery.default)(this).data("calcHeight", height);
          }
        });
        if (this.options.autoHeight)
          result.height = this.$currentMenu.data("calcHeight");
        else
          result["min-height"] = "".concat(maxHeight, "px");
        result["max-width"] = "".concat(this.$element[0].getBoundingClientRect().width, "px");
        return result;
      }
      /**
       * Destroys the Drilldown Menu
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        (0, import_jquery.default)("body").off(".zf.drilldown");
        if (this.options.scrollTop)
          this.$element.off(".zf.drilldown", this._bindHandler);
        this._hideAll();
        this.$element.off("mutateme.zf.trigger");
        Nest.Burn(this.$element, "drilldown");
        this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").off("transitionend otransitionend webkitTransitionEnd").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role");
        this.$submenuAnchors.each(function() {
          (0, import_jquery.default)(this).off(".zf.drilldown");
        });
        this.$element.find("[data-is-parent-link]").detach();
        this.$submenus.removeClass("drilldown-submenu-cover-previous invisible");
        this.$element.find("a").each(function() {
          var $link = (0, import_jquery.default)(this);
          $link.removeAttr("tabindex");
          if ($link.data("savedHref")) {
            $link.attr("href", $link.data("savedHref")).removeData("savedHref");
          } else {
            return;
          }
        });
      }
    }]);
    return Drilldown2;
  }(Plugin);
  Drilldown.defaults = {
    /**
     * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
     * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
     * @option
     * @type {boolean}
     * @default true
     */
    autoApplyClass: true,
    /**
     * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
     * @option
     * @type {string}
     * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
     */
    backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
    /**
     * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
     * @option
     * @type {string}
     * @default top
     */
    backButtonPosition: "top",
    /**
     * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
     * @option
     * @type {string}
     * @default '<div></div>'
     */
    wrapper: "<div></div>",
    /**
     * Adds the parent link to the submenu.
     * @option
     * @type {boolean}
     * @default false
     */
    parentLink: false,
    /**
     * Allow the menu to return to root list on body click.
     * @option
     * @type {boolean}
     * @default false
     */
    closeOnClick: false,
    /**
     * Allow the menu to auto adjust height.
     * @option
     * @type {boolean}
     * @default false
     */
    autoHeight: false,
    /**
     * Animate the auto adjust height.
     * @option
     * @type {boolean}
     * @default false
     */
    animateHeight: false,
    /**
     * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
     * @option
     * @type {boolean}
     * @default false
     */
    scrollTop: false,
    /**
     * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
     * @option
     * @type {string}
     * @default ''
     */
    scrollTopElement: "",
    /**
     * ScrollTop offset
     * @option
     * @type {number}
     * @default 0
     */
    scrollTopOffset: 0,
    /**
     * Scroll animation duration
     * @option
     * @type {number}
     * @default 500
     */
    animationDuration: 500,
    /**
     * Scroll animation easing. Can be `'swing'` or `'linear'`.
     * @option
     * @type {string}
     * @see {@link https://api.jquery.com/animate|JQuery animate}
     * @default 'swing'
     */
    animationEasing: "swing"
    // holdOpen: false
  };
  var POSITIONS = ["left", "right", "top", "bottom"];
  var VERTICAL_ALIGNMENTS = ["top", "bottom", "center"];
  var HORIZONTAL_ALIGNMENTS = ["left", "right", "center"];
  var ALIGNMENTS = {
    "left": VERTICAL_ALIGNMENTS,
    "right": VERTICAL_ALIGNMENTS,
    "top": HORIZONTAL_ALIGNMENTS,
    "bottom": HORIZONTAL_ALIGNMENTS
  };
  function nextItem(item, array) {
    var currentIdx = array.indexOf(item);
    if (currentIdx === array.length - 1) {
      return array[0];
    } else {
      return array[currentIdx + 1];
    }
  }
  var Positionable = /* @__PURE__ */ function(_Plugin) {
    _inherits(Positionable2, _Plugin);
    var _super = _createSuper(Positionable2);
    function Positionable2() {
      _classCallCheck(this, Positionable2);
      return _super.apply(this, arguments);
    }
    _createClass(Positionable2, [{
      key: "_init",
      value: (
        /**
         * Abstract class encapsulating the tether-like explicit positioning logic
         * including repositioning based on overlap.
         * Expects classes to define defaults for vOffset, hOffset, position,
         * alignment, allowOverlap, and allowBottomOverlap. They can do this by
         * extending the defaults, or (for now recommended due to the way docs are
         * generated) by explicitly declaring them.
         *
         **/
        function _init2() {
          this.triedPositions = {};
          this.position = this.options.position === "auto" ? this._getDefaultPosition() : this.options.position;
          this.alignment = this.options.alignment === "auto" ? this._getDefaultAlignment() : this.options.alignment;
          this.originalPosition = this.position;
          this.originalAlignment = this.alignment;
        }
      )
    }, {
      key: "_getDefaultPosition",
      value: function _getDefaultPosition() {
        return "bottom";
      }
    }, {
      key: "_getDefaultAlignment",
      value: function _getDefaultAlignment() {
        switch (this.position) {
          case "bottom":
          case "top":
            return rtl() ? "right" : "left";
          case "left":
          case "right":
            return "bottom";
        }
      }
      /**
       * Adjusts the positionable possible positions by iterating through alignments
       * and positions.
       * @function
       * @private
       */
    }, {
      key: "_reposition",
      value: function _reposition() {
        if (this._alignmentsExhausted(this.position)) {
          this.position = nextItem(this.position, POSITIONS);
          this.alignment = ALIGNMENTS[this.position][0];
        } else {
          this._realign();
        }
      }
      /**
       * Adjusts the dropdown pane possible positions by iterating through alignments
       * on the current position.
       * @function
       * @private
       */
    }, {
      key: "_realign",
      value: function _realign() {
        this._addTriedPosition(this.position, this.alignment);
        this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
      }
    }, {
      key: "_addTriedPosition",
      value: function _addTriedPosition(position, alignment) {
        this.triedPositions[position] = this.triedPositions[position] || [];
        this.triedPositions[position].push(alignment);
      }
    }, {
      key: "_positionsExhausted",
      value: function _positionsExhausted() {
        var isExhausted = true;
        for (var i = 0; i < POSITIONS.length; i++) {
          isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
        }
        return isExhausted;
      }
    }, {
      key: "_alignmentsExhausted",
      value: function _alignmentsExhausted(position) {
        return this.triedPositions[position] && this.triedPositions[position].length === ALIGNMENTS[position].length;
      }
      // When we're trying to center, we don't want to apply offset that's going to
      // take us just off center, so wrap around to return 0 for the appropriate
      // offset in those alignments.  TODO: Figure out if we want to make this
      // configurable behavior... it feels more intuitive, especially for tooltips, but
      // it's possible someone might actually want to start from center and then nudge
      // slightly off.
    }, {
      key: "_getVOffset",
      value: function _getVOffset() {
        return this.options.vOffset;
      }
    }, {
      key: "_getHOffset",
      value: function _getHOffset() {
        return this.options.hOffset;
      }
    }, {
      key: "_setPosition",
      value: function _setPosition($anchor, $element, $parent) {
        if ($anchor.attr("aria-expanded") === "false") {
          return false;
        }
        if (!this.options.allowOverlap) {
          this.position = this.originalPosition;
          this.alignment = this.originalAlignment;
        }
        $element.offset(Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
        if (!this.options.allowOverlap) {
          var minOverlap = 1e8;
          var minCoordinates = {
            position: this.position,
            alignment: this.alignment
          };
          while (!this._positionsExhausted()) {
            var overlap = Box.OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);
            if (overlap === 0) {
              return;
            }
            if (overlap < minOverlap) {
              minOverlap = overlap;
              minCoordinates = {
                position: this.position,
                alignment: this.alignment
              };
            }
            this._reposition();
            $element.offset(Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
          }
          this.position = minCoordinates.position;
          this.alignment = minCoordinates.alignment;
          $element.offset(Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
        }
      }
    }]);
    return Positionable2;
  }(Plugin);
  Positionable.defaults = {
    /**
     * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
     * @option
     * @type {string}
     * @default 'auto'
     */
    position: "auto",
    /**
     * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
     * @option
     * @type {string}
     * @default 'auto'
     */
    alignment: "auto",
    /**
     * Allow overlap of container/window. If false, dropdown positionable first
     * try to position as defined by data-position and data-alignment, but
     * reposition if it would cause an overflow.
     * @option
     * @type {boolean}
     * @default false
     */
    allowOverlap: false,
    /**
     * Allow overlap of only the bottom of the container. This is the most common
     * behavior for dropdowns, allowing the dropdown to extend the bottom of the
     * screen but not otherwise influence or break out of the container.
     * @option
     * @type {boolean}
     * @default true
     */
    allowBottomOverlap: true,
    /**
     * Number of pixels the positionable should be separated vertically from anchor
     * @option
     * @type {number}
     * @default 0
     */
    vOffset: 0,
    /**
     * Number of pixels the positionable should be separated horizontally from anchor
     * @option
     * @type {number}
     * @default 0
     */
    hOffset: 0
  };
  var Dropdown = /* @__PURE__ */ function(_Positionable) {
    _inherits(Dropdown2, _Positionable);
    var _super = _createSuper(Dropdown2);
    function Dropdown2() {
      _classCallCheck(this, Dropdown2);
      return _super.apply(this, arguments);
    }
    _createClass(Dropdown2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of a dropdown.
         * @class
         * @name Dropdown
         * @param {jQuery} element - jQuery object to make into a dropdown.
         *        Object should be of the dropdown panel, rather than its anchor.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Dropdown2.defaults, this.$element.data(), options);
          this.className = "Dropdown";
          Touch.init(import_jquery.default);
          Triggers.init(import_jquery.default);
          this._init();
          Keyboard.register("Dropdown", {
            "ENTER": "toggle",
            "SPACE": "toggle",
            "ESCAPE": "close"
          });
        }
      )
      /**
       * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
       * @function
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        var $id = this.$element.attr("id");
        this.$anchors = (0, import_jquery.default)('[data-toggle="'.concat($id, '"]')).length ? (0, import_jquery.default)('[data-toggle="'.concat($id, '"]')) : (0, import_jquery.default)('[data-open="'.concat($id, '"]'));
        this.$anchors.attr({
          "aria-controls": $id,
          "data-is-focus": false,
          "data-yeti-box": $id,
          "aria-haspopup": true,
          "aria-expanded": false
        });
        this._setCurrentAnchor(this.$anchors.first());
        if (this.options.parentClass) {
          this.$parent = this.$element.parents("." + this.options.parentClass);
        } else {
          this.$parent = null;
        }
        if (typeof this.$element.attr("aria-labelledby") === "undefined") {
          if (typeof this.$currentAnchor.attr("id") === "undefined") {
            this.$currentAnchor.attr("id", GetYoDigits(6, "dd-anchor"));
          }
          this.$element.attr("aria-labelledby", this.$currentAnchor.attr("id"));
        }
        this.$element.attr({
          "aria-hidden": "true",
          "data-yeti-box": $id,
          "data-resize": $id
        });
        _get(_getPrototypeOf(Dropdown2.prototype), "_init", this).call(this);
        this._events();
      }
    }, {
      key: "_getDefaultPosition",
      value: function _getDefaultPosition() {
        var position = this.$element[0].className.match(/(top|left|right|bottom)/g);
        if (position) {
          return position[0];
        } else {
          return "bottom";
        }
      }
    }, {
      key: "_getDefaultAlignment",
      value: function _getDefaultAlignment() {
        var horizontalPosition = /float-(\S+)/.exec(this.$currentAnchor.attr("class"));
        if (horizontalPosition) {
          return horizontalPosition[1];
        }
        return _get(_getPrototypeOf(Dropdown2.prototype), "_getDefaultAlignment", this).call(this);
      }
      /**
       * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
       * Recursively calls itself if a collision is detected, with a new position class.
       * @function
       * @private
       */
    }, {
      key: "_setPosition",
      value: function _setPosition() {
        this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
        _get(_getPrototypeOf(Dropdown2.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent);
        this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
      }
      /**
       * Make it a current anchor.
       * Current anchor as the reference for the position of Dropdown panes.
       * @param {HTML} el - DOM element of the anchor.
       * @function
       * @private
       */
    }, {
      key: "_setCurrentAnchor",
      value: function _setCurrentAnchor(el) {
        this.$currentAnchor = (0, import_jquery.default)(el);
      }
      /**
       * Adds event listeners to the element utilizing the triggers utility library.
       * @function
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this = this, hasTouch = "ontouchstart" in window || typeof window.ontouchstart !== "undefined";
        this.$element.on({
          "open.zf.trigger": this.open.bind(this),
          "close.zf.trigger": this.close.bind(this),
          "toggle.zf.trigger": this.toggle.bind(this),
          "resizeme.zf.trigger": this._setPosition.bind(this)
        });
        this.$anchors.off("click.zf.trigger").on("click.zf.trigger", function(e) {
          _this._setCurrentAnchor(this);
          if (
            // if forceFollow false, always prevent default action
            _this.options.forceFollow === false || // if forceFollow true and hover option true, only prevent default action on 1st click
            // on 2nd click (dropown opened) the default action (e.g. follow a href) gets executed
            hasTouch && _this.options.hover && _this.$element.hasClass("is-open") === false
          ) {
            e.preventDefault();
          }
        });
        if (this.options.hover) {
          this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
            _this._setCurrentAnchor(this);
            var bodyData = (0, import_jquery.default)("body").data();
            if (typeof bodyData.whatinput === "undefined" || bodyData.whatinput === "mouse") {
              clearTimeout(_this.timeout);
              _this.timeout = setTimeout(function() {
                _this.open();
                _this.$anchors.data("hover", true);
              }, _this.options.hoverDelay);
            }
          }).on("mouseleave.zf.dropdown", ignoreMousedisappear(function() {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function() {
              _this.close();
              _this.$anchors.data("hover", false);
            }, _this.options.hoverDelay);
          }));
          if (this.options.hoverPane) {
            this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
              clearTimeout(_this.timeout);
            }).on("mouseleave.zf.dropdown", ignoreMousedisappear(function() {
              clearTimeout(_this.timeout);
              _this.timeout = setTimeout(function() {
                _this.close();
                _this.$anchors.data("hover", false);
              }, _this.options.hoverDelay);
            }));
          }
        }
        this.$anchors.add(this.$element).on("keydown.zf.dropdown", function(e) {
          var $target = (0, import_jquery.default)(this);
          Keyboard.handleKey(e, "Dropdown", {
            open: function open3() {
              if ($target.is(_this.$anchors) && !$target.is("input, textarea")) {
                _this.open();
                _this.$element.attr("tabindex", -1).focus();
                e.preventDefault();
              }
            },
            close: function close2() {
              _this.close();
              _this.$anchors.focus();
            }
          });
        });
      }
      /**
       * Adds an event handler to the body to close any dropdowns on a click.
       * @function
       * @private
       */
    }, {
      key: "_addBodyHandler",
      value: function _addBodyHandler() {
        var $body = (0, import_jquery.default)(document.body).not(this.$element), _this = this;
        $body.off("click.zf.dropdown tap.zf.dropdown").on("click.zf.dropdown tap.zf.dropdown", function(e) {
          if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
            return;
          }
          if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
            return;
          }
          _this.close();
          $body.off("click.zf.dropdown tap.zf.dropdown");
        });
      }
      /**
       * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
       * @function
       * @fires Dropdown#closeme
       * @fires Dropdown#show
       */
    }, {
      key: "open",
      value: function open3() {
        this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id"));
        this.$anchors.addClass("hover").attr({
          "aria-expanded": true
        });
        this.$element.addClass("is-opening");
        this._setPosition();
        this.$element.removeClass("is-opening").addClass("is-open").attr({
          "aria-hidden": false
        });
        if (this.options.autoFocus) {
          var $focusable = Keyboard.findFocusable(this.$element);
          if ($focusable.length) {
            $focusable.eq(0).focus();
          }
        }
        if (this.options.closeOnClick) {
          this._addBodyHandler();
        }
        if (this.options.trapFocus) {
          Keyboard.trapFocus(this.$element);
        }
        this.$element.trigger("show.zf.dropdown", [this.$element]);
      }
      /**
       * Closes the open dropdown pane.
       * @function
       * @fires Dropdown#hide
       */
    }, {
      key: "close",
      value: function close2() {
        if (!this.$element.hasClass("is-open")) {
          return false;
        }
        this.$element.removeClass("is-open").attr({
          "aria-hidden": true
        });
        this.$anchors.removeClass("hover").attr("aria-expanded", false);
        this.$element.trigger("hide.zf.dropdown", [this.$element]);
        if (this.options.trapFocus) {
          Keyboard.releaseFocus(this.$element);
        }
      }
      /**
       * Toggles the dropdown pane's visibility.
       * @function
       */
    }, {
      key: "toggle",
      value: function toggle2() {
        if (this.$element.hasClass("is-open")) {
          if (this.$anchors.data("hover"))
            return;
          this.close();
        } else {
          this.open();
        }
      }
      /**
       * Destroys the dropdown.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$element.off(".zf.trigger").hide();
        this.$anchors.off(".zf.dropdown");
        (0, import_jquery.default)(document.body).off("click.zf.dropdown tap.zf.dropdown");
      }
    }]);
    return Dropdown2;
  }(Positionable);
  Dropdown.defaults = {
    /**
     * Class that designates bounding container of Dropdown (default: window)
     * @option
     * @type {?string}
     * @default null
     */
    parentClass: null,
    /**
     * Amount of time to delay opening a submenu on hover event.
     * @option
     * @type {number}
     * @default 250
     */
    hoverDelay: 250,
    /**
     * Allow submenus to open on hover events
     * @option
     * @type {boolean}
     * @default false
     */
    hover: false,
    /**
     * Don't close dropdown when hovering over dropdown pane
     * @option
     * @type {boolean}
     * @default false
     */
    hoverPane: false,
    /**
     * Number of pixels between the dropdown pane and the triggering element on open.
     * @option
     * @type {number}
     * @default 0
     */
    vOffset: 0,
    /**
     * Number of pixels between the dropdown pane and the triggering element on open.
     * @option
     * @type {number}
     * @default 0
     */
    hOffset: 0,
    /**
     * Position of dropdown. Can be left, right, bottom, top, or auto.
     * @option
     * @type {string}
     * @default 'auto'
     */
    position: "auto",
    /**
     * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
     * @option
     * @type {string}
     * @default 'auto'
     */
    alignment: "auto",
    /**
     * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
     * @option
     * @type {boolean}
     * @default false
     */
    allowOverlap: false,
    /**
     * Allow overlap of only the bottom of the container. This is the most common
     * behavior for dropdowns, allowing the dropdown to extend the bottom of the
     * screen but not otherwise influence or break out of the container.
     * @option
     * @type {boolean}
     * @default true
     */
    allowBottomOverlap: true,
    /**
     * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
     * @option
     * @type {boolean}
     * @default false
     */
    trapFocus: false,
    /**
     * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
     * @option
     * @type {boolean}
     * @default false
     */
    autoFocus: false,
    /**
     * Allows a click on the body to close the dropdown.
     * @option
     * @type {boolean}
     * @default false
     */
    closeOnClick: false,
    /**
     * If true the default action of the toggle (e.g. follow a link with href) gets executed on click. If hover option is also true the default action gets prevented on first click for mobile / touch devices and executed on second click.
     * @option
     * @type {boolean}
     * @default true
     */
    forceFollow: true
  };
  var DropdownMenu = /* @__PURE__ */ function(_Plugin) {
    _inherits(DropdownMenu2, _Plugin);
    var _super = _createSuper(DropdownMenu2);
    function DropdownMenu2() {
      _classCallCheck(this, DropdownMenu2);
      return _super.apply(this, arguments);
    }
    _createClass(DropdownMenu2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of DropdownMenu.
         * @class
         * @name DropdownMenu
         * @fires DropdownMenu#init
         * @param {jQuery} element - jQuery object to make into a dropdown menu.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, DropdownMenu2.defaults, this.$element.data(), options);
          this.className = "DropdownMenu";
          Touch.init(import_jquery.default);
          this._init();
          Keyboard.register("DropdownMenu", {
            "ENTER": "open",
            "SPACE": "open",
            "ARROW_RIGHT": "next",
            "ARROW_UP": "up",
            "ARROW_DOWN": "down",
            "ARROW_LEFT": "previous",
            "ESCAPE": "close"
          });
        }
      )
      /**
       * Initializes the plugin, and calls _prepareMenu
       * @private
       * @function
       */
    }, {
      key: "_init",
      value: function _init2() {
        Nest.Feather(this.$element, "dropdown");
        var subs = this.$element.find("li.is-dropdown-submenu-parent");
        this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub");
        this.$menuItems = this.$element.find('li[role="none"]');
        this.$tabs = this.$element.children('li[role="none"]');
        this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass);
        if (this.options.alignment === "auto") {
          if (this.$element.hasClass(this.options.rightClass) || rtl() || this.$element.parents(".top-bar-right").is("*")) {
            this.options.alignment = "right";
            subs.addClass("opens-left");
          } else {
            this.options.alignment = "left";
            subs.addClass("opens-right");
          }
        } else {
          if (this.options.alignment === "right") {
            subs.addClass("opens-left");
          } else {
            subs.addClass("opens-right");
          }
        }
        this.changed = false;
        this._events();
      }
    }, {
      key: "_isVertical",
      value: function _isVertical() {
        return this.$tabs.css("display") === "block" || this.$element.css("flex-direction") === "column";
      }
    }, {
      key: "_isRtl",
      value: function _isRtl() {
        return this.$element.hasClass("align-right") || rtl() && !this.$element.hasClass("align-left");
      }
      /**
       * Adds event listeners to elements within the menu
       * @private
       * @function
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this = this, hasTouch = "ontouchstart" in window || typeof window.ontouchstart !== "undefined", parClass = "is-dropdown-submenu-parent";
        var handleClickFn = function handleClickFn2(e) {
          var $elem = (0, import_jquery.default)(e.target).parentsUntil("ul", ".".concat(parClass)), hasSub = $elem.hasClass(parClass), hasClicked = $elem.attr("data-is-click") === "true", $sub = $elem.children(".is-dropdown-submenu");
          if (hasSub) {
            if (hasClicked) {
              if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
                return;
              }
              e.stopImmediatePropagation();
              e.preventDefault();
              _this._hide($elem);
            } else {
              e.stopImmediatePropagation();
              e.preventDefault();
              _this._show($sub);
              $elem.add($elem.parentsUntil(_this.$element, ".".concat(parClass))).attr("data-is-click", true);
            }
          }
        };
        if (this.options.clickOpen || hasTouch) {
          this.$menuItems.on("click.zf.dropdownMenu touchstart.zf.dropdownMenu", handleClickFn);
        }
        if (_this.options.closeOnClickInside) {
          this.$menuItems.on("click.zf.dropdownMenu", function() {
            var $elem = (0, import_jquery.default)(this), hasSub = $elem.hasClass(parClass);
            if (!hasSub) {
              _this._hide();
            }
          });
        }
        if (hasTouch && this.options.disableHoverOnTouch)
          this.options.disableHover = true;
        if (!this.options.disableHover) {
          this.$menuItems.on("mouseenter.zf.dropdownMenu", function() {
            var $elem = (0, import_jquery.default)(this), hasSub = $elem.hasClass(parClass);
            if (hasSub) {
              clearTimeout($elem.data("_delay"));
              $elem.data("_delay", setTimeout(function() {
                _this._show($elem.children(".is-dropdown-submenu"));
              }, _this.options.hoverDelay));
            }
          }).on("mouseleave.zf.dropdownMenu", ignoreMousedisappear(function() {
            var $elem = (0, import_jquery.default)(this), hasSub = $elem.hasClass(parClass);
            if (hasSub && _this.options.autoclose) {
              if ($elem.attr("data-is-click") === "true" && _this.options.clickOpen) {
                return false;
              }
              clearTimeout($elem.data("_delay"));
              $elem.data("_delay", setTimeout(function() {
                _this._hide($elem);
              }, _this.options.closingTime));
            }
          }));
        }
        this.$menuItems.on("keydown.zf.dropdownMenu", function(e) {
          var $element = (0, import_jquery.default)(e.target).parentsUntil("ul", '[role="none"]'), isTab = _this.$tabs.index($element) > -1, $elements = isTab ? _this.$tabs : $element.siblings("li").add($element), $prevElement, $nextElement;
          $elements.each(function(i) {
            if ((0, import_jquery.default)(this).is($element)) {
              $prevElement = $elements.eq(i - 1);
              $nextElement = $elements.eq(i + 1);
              return;
            }
          });
          var nextSibling = function nextSibling2() {
            $nextElement.children("a:first").focus();
            e.preventDefault();
          }, prevSibling = function prevSibling2() {
            $prevElement.children("a:first").focus();
            e.preventDefault();
          }, openSub = function openSub2() {
            var $sub = $element.children("ul.is-dropdown-submenu");
            if ($sub.length) {
              _this._show($sub);
              $element.find("li > a:first").focus();
              e.preventDefault();
            } else {
              return;
            }
          }, closeSub = function closeSub2() {
            var close2 = $element.parent("ul").parent("li");
            close2.children("a:first").focus();
            _this._hide(close2);
            e.preventDefault();
          };
          var functions = {
            open: openSub,
            close: function close2() {
              _this._hide(_this.$element);
              _this.$menuItems.eq(0).children("a").focus();
              e.preventDefault();
            }
          };
          if (isTab) {
            if (_this._isVertical()) {
              if (_this._isRtl()) {
                import_jquery.default.extend(functions, {
                  down: nextSibling,
                  up: prevSibling,
                  next: closeSub,
                  previous: openSub
                });
              } else {
                import_jquery.default.extend(functions, {
                  down: nextSibling,
                  up: prevSibling,
                  next: openSub,
                  previous: closeSub
                });
              }
            } else {
              if (_this._isRtl()) {
                import_jquery.default.extend(functions, {
                  next: prevSibling,
                  previous: nextSibling,
                  down: openSub,
                  up: closeSub
                });
              } else {
                import_jquery.default.extend(functions, {
                  next: nextSibling,
                  previous: prevSibling,
                  down: openSub,
                  up: closeSub
                });
              }
            }
          } else {
            if (_this._isRtl()) {
              import_jquery.default.extend(functions, {
                next: closeSub,
                previous: openSub,
                down: nextSibling,
                up: prevSibling
              });
            } else {
              import_jquery.default.extend(functions, {
                next: openSub,
                previous: closeSub,
                down: nextSibling,
                up: prevSibling
              });
            }
          }
          Keyboard.handleKey(e, "DropdownMenu", functions);
        });
      }
      /**
       * Adds an event handler to the body to close any dropdowns on a click.
       * @function
       * @private
       */
    }, {
      key: "_addBodyHandler",
      value: function _addBodyHandler() {
        var _this2 = this;
        var $body = (0, import_jquery.default)(document.body);
        this._removeBodyHandler();
        $body.on("click.zf.dropdownMenu tap.zf.dropdownMenu", function(e) {
          var isItself = !!(0, import_jquery.default)(e.target).closest(_this2.$element).length;
          if (isItself)
            return;
          _this2._hide();
          _this2._removeBodyHandler();
        });
      }
      /**
       * Remove the body event handler. See `_addBodyHandler`.
       * @function
       * @private
       */
    }, {
      key: "_removeBodyHandler",
      value: function _removeBodyHandler() {
        (0, import_jquery.default)(document.body).off("click.zf.dropdownMenu tap.zf.dropdownMenu");
      }
      /**
       * Opens a dropdown pane, and checks for collisions first.
       * @param {jQuery} $sub - ul element that is a submenu to show
       * @function
       * @private
       * @fires DropdownMenu#show
       */
    }, {
      key: "_show",
      value: function _show($sub) {
        var idx = this.$tabs.index(this.$tabs.filter(function(i, el) {
          return (0, import_jquery.default)(el).find($sub).length > 0;
        }));
        var $sibs = $sub.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
        this._hide($sibs, idx);
        $sub.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
        var clear = Box.ImNotTouchingYou($sub, null, true);
        if (!clear) {
          var oldClass = this.options.alignment === "left" ? "-right" : "-left", $parentLi = $sub.parent(".is-dropdown-submenu-parent");
          $parentLi.removeClass("opens".concat(oldClass)).addClass("opens-".concat(this.options.alignment));
          clear = Box.ImNotTouchingYou($sub, null, true);
          if (!clear) {
            $parentLi.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner");
          }
          this.changed = true;
        }
        $sub.css("visibility", "");
        if (this.options.closeOnClick) {
          this._addBodyHandler();
        }
        this.$element.trigger("show.zf.dropdownMenu", [$sub]);
      }
      /**
       * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
       * @function
       * @param {jQuery} $elem - element with a submenu to hide
       * @param {Number} idx - index of the $tabs collection to hide
       * @fires DropdownMenu#hide
       * @private
       */
    }, {
      key: "_hide",
      value: function _hide($elem, idx) {
        var $toClose;
        if ($elem && $elem.length) {
          $toClose = $elem;
        } else if (typeof idx !== "undefined") {
          $toClose = this.$tabs.not(function(i) {
            return i === idx;
          });
        } else {
          $toClose = this.$element;
        }
        var somethingToClose = $toClose.hasClass("is-active") || $toClose.find(".is-active").length > 0;
        if (somethingToClose) {
          var $activeItem = $toClose.find("li.is-active");
          $activeItem.add($toClose).attr({
            "data-is-click": false
          }).removeClass("is-active");
          $toClose.find("ul.js-dropdown-active").removeClass("js-dropdown-active");
          if (this.changed || $toClose.find("opens-inner").length) {
            var oldClass = this.options.alignment === "left" ? "right" : "left";
            $toClose.find("li.is-dropdown-submenu-parent").add($toClose).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(oldClass));
            this.changed = false;
          }
          clearTimeout($activeItem.data("_delay"));
          this._removeBodyHandler();
          this.$element.trigger("hide.zf.dropdownMenu", [$toClose]);
        }
      }
      /**
       * Destroys the plugin.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$menuItems.off(".zf.dropdownMenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner");
        (0, import_jquery.default)(document.body).off(".zf.dropdownMenu");
        Nest.Burn(this.$element, "dropdown");
      }
    }]);
    return DropdownMenu2;
  }(Plugin);
  DropdownMenu.defaults = {
    /**
     * Disallows hover events from opening submenus
     * @option
     * @type {boolean}
     * @default false
     */
    disableHover: false,
    /**
     * Disallows hover on touch devices
     * @option
     * @type {boolean}
     * @default true
     */
    disableHoverOnTouch: true,
    /**
     * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
     * @option
     * @type {boolean}
     * @default true
     */
    autoclose: true,
    /**
     * Amount of time to delay opening a submenu on hover event.
     * @option
     * @type {number}
     * @default 50
     */
    hoverDelay: 50,
    /**
     * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
     * @option
     * @type {boolean}
     * @default false
     */
    clickOpen: false,
    /**
     * Amount of time to delay closing a submenu on a mouseleave event.
     * @option
     * @type {number}
     * @default 500
     */
    closingTime: 500,
    /**
     * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
     * @option
     * @type {string}
     * @default 'auto'
     */
    alignment: "auto",
    /**
     * Allow clicks on the body to close any open submenus.
     * @option
     * @type {boolean}
     * @default true
     */
    closeOnClick: true,
    /**
     * Allow clicks on leaf anchor links to close any open submenus.
     * @option
     * @type {boolean}
     * @default true
     */
    closeOnClickInside: true,
    /**
     * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
     * @option
     * @type {string}
     * @default 'vertical'
     */
    verticalClass: "vertical",
    /**
     * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
     * @option
     * @type {string}
     * @default 'align-right'
     */
    rightClass: "align-right",
    /**
     * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
     * @option
     * @type {boolean}
     * @default true
     */
    forceFollow: true
  };
  var Equalizer = /* @__PURE__ */ function(_Plugin) {
    _inherits(Equalizer2, _Plugin);
    var _super = _createSuper(Equalizer2);
    function Equalizer2() {
      _classCallCheck(this, Equalizer2);
      return _super.apply(this, arguments);
    }
    _createClass(Equalizer2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of Equalizer.
         * @class
         * @name Equalizer
         * @fires Equalizer#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Equalizer2.defaults, this.$element.data(), options);
          this.className = "Equalizer";
          this._init();
        }
      )
      /**
       * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        var eqId = this.$element.attr("data-equalizer") || "";
        var $watched = this.$element.find('[data-equalizer-watch="'.concat(eqId, '"]'));
        MediaQuery._init();
        this.$watched = $watched.length ? $watched : this.$element.find("[data-equalizer-watch]");
        this.$element.attr("data-resize", eqId || GetYoDigits(6, "eq"));
        this.$element.attr("data-mutate", eqId || GetYoDigits(6, "eq"));
        this.hasNested = this.$element.find("[data-equalizer]").length > 0;
        this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0;
        this.isOn = false;
        this._bindHandler = {
          onResizeMeBound: this._onResizeMe.bind(this),
          onPostEqualizedBound: this._onPostEqualized.bind(this)
        };
        var imgs = this.$element.find("img");
        var tooSmall;
        if (this.options.equalizeOn) {
          tooSmall = this._checkMQ();
          (0, import_jquery.default)(window).on("changed.zf.mediaquery", this._checkMQ.bind(this));
        } else {
          this._events();
        }
        if (typeof tooSmall !== "undefined" && tooSmall === false || typeof tooSmall === "undefined") {
          if (imgs.length) {
            onImagesLoaded(imgs, this._reflow.bind(this));
          } else {
            this._reflow();
          }
        }
      }
      /**
       * Removes event listeners if the breakpoint is too small.
       * @private
       */
    }, {
      key: "_pauseEvents",
      value: function _pauseEvents() {
        this.isOn = false;
        this.$element.off({
          ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
          "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
          "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
        });
      }
      /**
       * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
       * @private
       */
    }, {
      key: "_onResizeMe",
      value: function _onResizeMe() {
        this._reflow();
      }
      /**
       * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
       * @private
       */
    }, {
      key: "_onPostEqualized",
      value: function _onPostEqualized(e) {
        if (e.target !== this.$element[0]) {
          this._reflow();
        }
      }
      /**
       * Initializes events for Equalizer.
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        this._pauseEvents();
        if (this.hasNested) {
          this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound);
        } else {
          this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound);
          this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound);
        }
        this.isOn = true;
      }
      /**
       * Checks the current breakpoint to the minimum required size.
       * @private
       */
    }, {
      key: "_checkMQ",
      value: function _checkMQ() {
        var tooSmall = !MediaQuery.is(this.options.equalizeOn);
        if (tooSmall) {
          if (this.isOn) {
            this._pauseEvents();
            this.$watched.css("height", "auto");
          }
        } else {
          if (!this.isOn) {
            this._events();
          }
        }
        return tooSmall;
      }
      /**
       * A noop version for the plugin
       * @private
       */
    }, {
      key: "_killswitch",
      value: function _killswitch() {
        return;
      }
      /**
       * Calls necessary functions to update Equalizer upon DOM change
       * @private
       */
    }, {
      key: "_reflow",
      value: function _reflow() {
        if (!this.options.equalizeOnStack) {
          if (this._isStacked()) {
            this.$watched.css("height", "auto");
            return false;
          }
        }
        if (this.options.equalizeByRow) {
          this.getHeightsByRow(this.applyHeightByRow.bind(this));
        } else {
          this.getHeights(this.applyHeight.bind(this));
        }
      }
      /**
       * Manually determines if the first 2 elements are *NOT* stacked.
       * @private
       */
    }, {
      key: "_isStacked",
      value: function _isStacked() {
        if (!this.$watched[0] || !this.$watched[1]) {
          return true;
        }
        return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
      }
      /**
       * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
       * @param {Function} cb - A non-optional callback to return the heights array to.
       * @returns {Array} heights - An array of heights of children within Equalizer container
       */
    }, {
      key: "getHeights",
      value: function getHeights(cb) {
        var heights = [];
        for (var i = 0, len = this.$watched.length; i < len; i++) {
          this.$watched[i].style.height = "auto";
          heights.push(this.$watched[i].offsetHeight);
        }
        cb(heights);
      }
      /**
       * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
       * @param {Function} cb - A non-optional callback to return the heights array to.
       * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
       */
    }, {
      key: "getHeightsByRow",
      value: function getHeightsByRow(cb) {
        var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0, groups = [], group = 0;
        groups[group] = [];
        for (var i = 0, len = this.$watched.length; i < len; i++) {
          this.$watched[i].style.height = "auto";
          var elOffsetTop = (0, import_jquery.default)(this.$watched[i]).offset().top;
          if (elOffsetTop !== lastElTopOffset) {
            group++;
            groups[group] = [];
            lastElTopOffset = elOffsetTop;
          }
          groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
        }
        for (var j = 0, ln = groups.length; j < ln; j++) {
          var heights = (0, import_jquery.default)(groups[j]).map(function() {
            return this[1];
          }).get();
          var max = Math.max.apply(null, heights);
          groups[j].push(max);
        }
        cb(groups);
      }
      /**
       * Changes the CSS height property of each child in an Equalizer parent to match the tallest
       * @param {array} heights - An array of heights of children within Equalizer container
       * @fires Equalizer#preequalized
       * @fires Equalizer#postequalized
       */
    }, {
      key: "applyHeight",
      value: function applyHeight(heights) {
        var max = Math.max.apply(null, heights);
        this.$element.trigger("preequalized.zf.equalizer");
        this.$watched.css("height", max);
        this.$element.trigger("postequalized.zf.equalizer");
      }
      /**
       * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
       * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
       * @fires Equalizer#preequalized
       * @fires Equalizer#preequalizedrow
       * @fires Equalizer#postequalizedrow
       * @fires Equalizer#postequalized
       */
    }, {
      key: "applyHeightByRow",
      value: function applyHeightByRow(groups) {
        this.$element.trigger("preequalized.zf.equalizer");
        for (var i = 0, len = groups.length; i < len; i++) {
          var groupsILength = groups[i].length, max = groups[i][groupsILength - 1];
          if (groupsILength <= 2) {
            (0, import_jquery.default)(groups[i][0][0]).css({
              "height": "auto"
            });
            continue;
          }
          this.$element.trigger("preequalizedrow.zf.equalizer");
          for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
            (0, import_jquery.default)(groups[i][j][0]).css({
              "height": max
            });
          }
          this.$element.trigger("postequalizedrow.zf.equalizer");
        }
        this.$element.trigger("postequalized.zf.equalizer");
      }
      /**
       * Destroys an instance of Equalizer.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this._pauseEvents();
        this.$watched.css("height", "auto");
      }
    }]);
    return Equalizer2;
  }(Plugin);
  Equalizer.defaults = {
    /**
     * Enable height equalization when stacked on smaller screens.
     * @option
     * @type {boolean}
     * @default false
     */
    equalizeOnStack: false,
    /**
     * Enable height equalization row by row.
     * @option
     * @type {boolean}
     * @default false
     */
    equalizeByRow: false,
    /**
     * String representing the minimum breakpoint size the plugin should equalize heights on.
     * @option
     * @type {string}
     * @default ''
     */
    equalizeOn: ""
  };
  var Interchange = /* @__PURE__ */ function(_Plugin) {
    _inherits(Interchange2, _Plugin);
    var _super = _createSuper(Interchange2);
    function Interchange2() {
      _classCallCheck(this, Interchange2);
      return _super.apply(this, arguments);
    }
    _createClass(Interchange2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of Interchange.
         * @class
         * @name Interchange
         * @fires Interchange#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Interchange2.defaults, this.$element.data(), options);
          this.rules = [];
          this.currentPath = "";
          this.className = "Interchange";
          Triggers.init(import_jquery.default);
          this._init();
          this._events();
        }
      )
      /**
       * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
       * @function
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        MediaQuery._init();
        var id2 = this.$element[0].id || GetYoDigits(6, "interchange");
        this.$element.attr({
          "data-resize": id2,
          "id": id2
        });
        this._parseOptions();
        this._addBreakpoints();
        this._generateRules();
        this._reflow();
      }
      /**
       * Initializes events for Interchange.
       * @function
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this = this;
        this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
          return _this._reflow();
        });
      }
      /**
       * Calls necessary functions to update Interchange upon DOM change
       * @function
       * @private
       */
    }, {
      key: "_reflow",
      value: function _reflow() {
        var match;
        for (var i in this.rules) {
          if (this.rules.hasOwnProperty(i)) {
            var rule = this.rules[i];
            if (window.matchMedia(rule.query).matches) {
              match = rule;
            }
          }
        }
        if (match) {
          this.replace(match.path);
        }
      }
      /**
       * Check options valifity and set defaults for:
       * - `data-interchange-type`: if set, enforce the type of replacement (auto, src, background or html)
       * @function
       * @private
       */
    }, {
      key: "_parseOptions",
      value: function _parseOptions() {
        var types = ["auto", "src", "background", "html"];
        if (typeof this.options.type === "undefined")
          this.options.type = "auto";
        else if (types.indexOf(this.options.type) === -1) {
          console.warn('Warning: invalid value "'.concat(this.options.type, '" for Interchange option "type"'));
          this.options.type = "auto";
        }
      }
      /**
       * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
       * @function
       * @private
       */
    }, {
      key: "_addBreakpoints",
      value: function _addBreakpoints() {
        for (var i in MediaQuery.queries) {
          if (MediaQuery.queries.hasOwnProperty(i)) {
            var query = MediaQuery.queries[i];
            Interchange2.SPECIAL_QUERIES[query.name] = query.value;
          }
        }
      }
      /**
       * Checks the Interchange element for the provided media query + content pairings
       * @function
       * @private
       * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
       */
    }, {
      key: "_generateRules",
      value: function _generateRules() {
        var rulesList = [];
        var rules;
        if (this.options.rules) {
          rules = this.options.rules;
        } else {
          rules = this.$element.data("interchange");
        }
        rules = typeof rules === "string" ? rules.match(/\[.*?, .*?\]/g) : rules;
        for (var i in rules) {
          if (rules.hasOwnProperty(i)) {
            var rule = rules[i].slice(1, -1).split(", ");
            var path = rule.slice(0, -1).join("");
            var query = rule[rule.length - 1];
            if (Interchange2.SPECIAL_QUERIES[query]) {
              query = Interchange2.SPECIAL_QUERIES[query];
            }
            rulesList.push({
              path,
              query
            });
          }
        }
        this.rules = rulesList;
      }
      /**
       * Update the `src` property of an image, or change the HTML of a container, to the specified path.
       * @function
       * @param {String} path - Path to the image or HTML partial.
       * @fires Interchange#replaced
       */
    }, {
      key: "replace",
      value: function replace(path) {
        var _this2 = this;
        if (this.currentPath === path)
          return;
        var trigger = "replaced.zf.interchange";
        var type = this.options.type;
        if (type === "auto") {
          if (this.$element[0].nodeName === "IMG")
            type = "src";
          else if (path.match(/\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i))
            type = "background";
          else
            type = "html";
        }
        if (type === "src") {
          this.$element.attr("src", path).on("load", function() {
            _this2.currentPath = path;
          }).trigger(trigger);
        } else if (type === "background") {
          path = path.replace(/\(/g, "%28").replace(/\)/g, "%29");
          this.$element.css({
            "background-image": "url(" + path + ")"
          }).trigger(trigger);
        } else if (type === "html") {
          import_jquery.default.get(path, function(response) {
            _this2.$element.html(response).trigger(trigger);
            (0, import_jquery.default)(response).foundation();
            _this2.currentPath = path;
          });
        }
      }
      /**
       * Destroys an instance of interchange.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$element.off("resizeme.zf.trigger");
      }
    }]);
    return Interchange2;
  }(Plugin);
  Interchange.defaults = {
    /**
     * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
     * @option
     * @type {?array}
     * @default null
     */
    rules: null,
    /**
     * Type of the responsive ressource to replace. It can take the following options:
     * - `auto` (default): choose the type according to the element tag or the ressource extension,
     * - `src`: replace the `[src]` attribute, recommended for images `<img>`.
     * - `background`: replace the `background-image` CSS property.
     * - `html`: replace the element content.
     * @option
     * @type {string}
     * @default 'auto'
     */
    type: "auto"
  };
  Interchange.SPECIAL_QUERIES = {
    "landscape": "screen and (orientation: landscape)",
    "portrait": "screen and (orientation: portrait)",
    "retina": "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
  };
  var SmoothScroll = /* @__PURE__ */ function(_Plugin) {
    _inherits(SmoothScroll2, _Plugin);
    var _super = _createSuper(SmoothScroll2);
    function SmoothScroll2() {
      _classCallCheck(this, SmoothScroll2);
      return _super.apply(this, arguments);
    }
    _createClass(SmoothScroll2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of SmoothScroll.
         * @class
         * @name SmoothScroll
         * @fires SmoothScroll#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, SmoothScroll2.defaults, this.$element.data(), options);
          this.className = "SmoothScroll";
          this._init();
        }
      )
      /**
       * Initialize the SmoothScroll plugin
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        var id2 = this.$element[0].id || GetYoDigits(6, "smooth-scroll");
        this.$element.attr({
          id: id2
        });
        this._events();
      }
      /**
       * Initializes events for SmoothScroll.
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        this._linkClickListener = this._handleLinkClick.bind(this);
        this.$element.on("click.zf.smoothScroll", this._linkClickListener);
        this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener);
      }
      /**
       * Handle the given event to smoothly scroll to the anchor pointed by the event target.
       * @param {*} e - event
       * @function
       * @private
       */
    }, {
      key: "_handleLinkClick",
      value: function _handleLinkClick(e) {
        var _this = this;
        if (!(0, import_jquery.default)(e.currentTarget).is('a[href^="#"]'))
          return;
        var arrival = e.currentTarget.getAttribute("href");
        this._inTransition = true;
        SmoothScroll2.scrollToLoc(arrival, this.options, function() {
          _this._inTransition = false;
        });
        e.preventDefault();
      }
    }, {
      key: "_destroy",
      value: (
        /**
         * Destroys the SmoothScroll instance.
         * @function
         */
        function _destroy() {
          this.$element.off("click.zf.smoothScroll", this._linkClickListener);
          this.$element.off("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener);
        }
      )
    }], [{
      key: "scrollToLoc",
      value: (
        /**
         * Function to scroll to a given location on the page.
         * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
         * @param {Object} options - The options to use.
         * @param {Function} callback - The callback function.
         * @static
         * @function
         */
        function scrollToLoc(loc) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : SmoothScroll2.defaults;
          var callback = arguments.length > 2 ? arguments[2] : void 0;
          var $loc = (0, import_jquery.default)(loc);
          if (!$loc.length)
            return false;
          var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);
          (0, import_jquery.default)("html, body").stop(true).animate({
            scrollTop: scrollPos
          }, options.animationDuration, options.animationEasing, function() {
            if (typeof callback === "function") {
              callback();
            }
          });
        }
      )
    }]);
    return SmoothScroll2;
  }(Plugin);
  SmoothScroll.defaults = {
    /**
     * Amount of time, in ms, the animated scrolling should take between locations.
     * @option
     * @type {number}
     * @default 500
     */
    animationDuration: 500,
    /**
     * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
     * @option
     * @type {string}
     * @default 'linear'
     * @see {@link https://api.jquery.com/animate|Jquery animate}
     */
    animationEasing: "linear",
    /**
     * Number of pixels to use as a marker for location changes.
     * @option
     * @type {number}
     * @default 50
     */
    threshold: 50,
    /**
     * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
     * @option
     * @type {number}
     * @default 0
     */
    offset: 0
  };
  var Magellan = /* @__PURE__ */ function(_Plugin) {
    _inherits(Magellan2, _Plugin);
    var _super = _createSuper(Magellan2);
    function Magellan2() {
      _classCallCheck(this, Magellan2);
      return _super.apply(this, arguments);
    }
    _createClass(Magellan2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of Magellan.
         * @class
         * @name Magellan
         * @fires Magellan#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Magellan2.defaults, this.$element.data(), options);
          this.className = "Magellan";
          Triggers.init(import_jquery.default);
          this._init();
          this.calcPoints();
        }
      )
      /**
       * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        var id2 = this.$element[0].id || GetYoDigits(6, "magellan");
        this.$targets = (0, import_jquery.default)("[data-magellan-target]");
        this.$links = this.$element.find("a");
        this.$element.attr({
          "data-resize": id2,
          "data-scroll": id2,
          "id": id2
        });
        this.$active = (0, import_jquery.default)();
        this.scrollPos = parseInt(window.pageYOffset, 10);
        this._events();
      }
      /**
       * Calculates an array of pixel values that are the demarcation lines between locations on the page.
       * Can be invoked if new elements are added or the size of a location changes.
       * @function
       */
    }, {
      key: "calcPoints",
      value: function calcPoints() {
        var _this = this, body = document.body, html = document.documentElement;
        this.points = [];
        this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
        this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
        this.$targets.each(function() {
          var $tar = (0, import_jquery.default)(this), pt = Math.round($tar.offset().top - _this.options.threshold);
          $tar.targetPoint = pt;
          _this.points.push(pt);
        });
      }
      /**
       * Initializes events for Magellan.
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this = this;
        (0, import_jquery.default)(window).one("load", function() {
          if (_this.options.deepLinking) {
            if (location.hash) {
              _this.scrollToLoc(location.hash);
            }
          }
          _this.calcPoints();
          _this._updateActive();
        });
        _this.onLoadListener = onLoad((0, import_jquery.default)(window), function() {
          _this.$element.on({
            "resizeme.zf.trigger": _this.reflow.bind(_this),
            "scrollme.zf.trigger": _this._updateActive.bind(_this)
          }).on("click.zf.magellan", 'a[href^="#"]', function(e) {
            e.preventDefault();
            var arrival = this.getAttribute("href");
            _this.scrollToLoc(arrival);
          });
        });
        this._deepLinkScroll = function() {
          if (_this.options.deepLinking) {
            _this.scrollToLoc(window.location.hash);
          }
        };
        (0, import_jquery.default)(window).on("hashchange", this._deepLinkScroll);
      }
      /**
       * Function to scroll to a given location on the page.
       * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
       * @function
       */
    }, {
      key: "scrollToLoc",
      value: function scrollToLoc(loc) {
        this._inTransition = true;
        var _this = this;
        var options = {
          animationEasing: this.options.animationEasing,
          animationDuration: this.options.animationDuration,
          threshold: this.options.threshold,
          offset: this.options.offset
        };
        SmoothScroll.scrollToLoc(loc, options, function() {
          _this._inTransition = false;
        });
      }
      /**
       * Calls necessary functions to update Magellan upon DOM change
       * @function
       */
    }, {
      key: "reflow",
      value: function reflow2() {
        this.calcPoints();
        this._updateActive();
      }
      /**
       * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
       * @private
       * @function
       * @fires Magellan#update
       */
    }, {
      key: "_updateActive",
      value: function _updateActive() {
        var _this2 = this;
        if (this._inTransition)
          return;
        var newScrollPos = parseInt(window.pageYOffset, 10);
        var isScrollingUp = this.scrollPos > newScrollPos;
        this.scrollPos = newScrollPos;
        var activeIdx;
        if (newScrollPos < this.points[0] - this.options.offset - (isScrollingUp ? this.options.threshold : 0))
          ;
        else if (newScrollPos + this.winHeight === this.docHeight) {
          activeIdx = this.points.length - 1;
        } else {
          var visibleLinks = this.points.filter(function(p) {
            return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;
          });
          activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;
        }
        var $oldActive = this.$active;
        var activeHash = "";
        if (typeof activeIdx !== "undefined") {
          this.$active = this.$links.filter('[href="#' + this.$targets.eq(activeIdx).data("magellan-target") + '"]');
          if (this.$active.length)
            activeHash = this.$active[0].getAttribute("href");
        } else {
          this.$active = (0, import_jquery.default)();
        }
        var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);
        var isNewHash = activeHash !== window.location.hash;
        if (isNewActive) {
          $oldActive.removeClass(this.options.activeClass);
          this.$active.addClass(this.options.activeClass);
        }
        if (this.options.deepLinking && isNewHash) {
          if (window.history.pushState) {
            var url = activeHash ? activeHash : window.location.pathname + window.location.search;
            if (this.options.updateHistory) {
              window.history.pushState({}, "", url);
            } else {
              window.history.replaceState({}, "", url);
            }
          } else {
            window.location.hash = activeHash;
          }
        }
        if (isNewActive) {
          this.$element.trigger("update.zf.magellan", [this.$active]);
        }
      }
      /**
       * Destroys an instance of Magellan and resets the url of the window.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);
        if (this.options.deepLinking) {
          var hash = this.$active[0].getAttribute("href");
          window.location.hash.replace(hash, "");
        }
        (0, import_jquery.default)(window).off("hashchange", this._deepLinkScroll);
        if (this.onLoadListener)
          (0, import_jquery.default)(window).off(this.onLoadListener);
      }
    }]);
    return Magellan2;
  }(Plugin);
  Magellan.defaults = {
    /**
     * Amount of time, in ms, the animated scrolling should take between locations.
     * @option
     * @type {number}
     * @default 500
     */
    animationDuration: 500,
    /**
     * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
     * @option
     * @type {string}
     * @default 'linear'
     * @see {@link https://api.jquery.com/animate|Jquery animate}
     */
    animationEasing: "linear",
    /**
     * Number of pixels to use as a marker for location changes.
     * @option
     * @type {number}
     * @default 50
     */
    threshold: 50,
    /**
     * Class applied to the active locations link on the magellan container.
     * @option
     * @type {string}
     * @default 'is-active'
     */
    activeClass: "is-active",
    /**
     * Allows the script to manipulate the url of the current page, and if supported, alter the history.
     * @option
     * @type {boolean}
     * @default false
     */
    deepLinking: false,
    /**
     * Update the browser history with the active link, if deep linking is enabled.
     * @option
     * @type {boolean}
     * @default false
     */
    updateHistory: false,
    /**
     * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
     * @option
     * @type {number}
     * @default 0
     */
    offset: 0
  };
  var OffCanvas = /* @__PURE__ */ function(_Plugin) {
    _inherits(OffCanvas2, _Plugin);
    var _super = _createSuper(OffCanvas2);
    function OffCanvas2() {
      _classCallCheck(this, OffCanvas2);
      return _super.apply(this, arguments);
    }
    _createClass(OffCanvas2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of an off-canvas wrapper.
         * @class
         * @name OffCanvas
         * @fires OffCanvas#init
         * @param {Object} element - jQuery object to initialize.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          var _this2 = this;
          this.className = "OffCanvas";
          this.$element = element;
          this.options = import_jquery.default.extend({}, OffCanvas2.defaults, this.$element.data(), options);
          this.contentClasses = {
            base: [],
            reveal: []
          };
          this.$lastTrigger = (0, import_jquery.default)();
          this.$triggers = (0, import_jquery.default)();
          this.position = "left";
          this.$content = (0, import_jquery.default)();
          this.nested = !!this.options.nested;
          this.$sticky = (0, import_jquery.default)();
          this.isInCanvas = false;
          (0, import_jquery.default)(["push", "overlap"]).each(function(index, val) {
            _this2.contentClasses.base.push("has-transition-" + val);
          });
          (0, import_jquery.default)(["left", "right", "top", "bottom"]).each(function(index, val) {
            _this2.contentClasses.base.push("has-position-" + val);
            _this2.contentClasses.reveal.push("has-reveal-" + val);
          });
          Triggers.init(import_jquery.default);
          MediaQuery._init();
          this._init();
          this._events();
          Keyboard.register("OffCanvas", {
            "ESCAPE": "close"
          });
        }
      )
      /**
       * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
       * @function
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        var id2 = this.$element.attr("id");
        this.$element.attr("aria-hidden", "true");
        if (this.options.contentId) {
          this.$content = (0, import_jquery.default)("#" + this.options.contentId);
        } else if (this.$element.siblings("[data-off-canvas-content]").length) {
          this.$content = this.$element.siblings("[data-off-canvas-content]").first();
        } else {
          this.$content = this.$element.closest("[data-off-canvas-content]").first();
        }
        if (!this.options.contentId) {
          this.nested = this.$element.siblings("[data-off-canvas-content]").length === 0;
        } else if (this.options.contentId && this.options.nested === null) {
          console.warn("Remember to use the nested option if using the content ID option!");
        }
        if (this.nested === true) {
          this.options.transition = "overlap";
          this.$element.removeClass("is-transition-push");
        }
        this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed"));
        this.$triggers = (0, import_jquery.default)(document).find('[data-open="' + id2 + '"], [data-close="' + id2 + '"], [data-toggle="' + id2 + '"]').attr("aria-expanded", "false").attr("aria-controls", id2);
        this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position;
        if (this.options.contentOverlay === true) {
          var overlay = document.createElement("div");
          var overlayPosition = (0, import_jquery.default)(this.$element).css("position") === "fixed" ? "is-overlay-fixed" : "is-overlay-absolute";
          overlay.setAttribute("class", "js-off-canvas-overlay " + overlayPosition);
          this.$overlay = (0, import_jquery.default)(overlay);
          if (overlayPosition === "is-overlay-fixed") {
            (0, import_jquery.default)(this.$overlay).insertAfter(this.$element);
          } else {
            this.$content.append(this.$overlay);
          }
        }
        var revealOnRegExp = new RegExp(RegExpEscape(this.options.revealClass) + "([^\\s]+)", "g");
        var revealOnClass = revealOnRegExp.exec(this.$element[0].className);
        if (revealOnClass) {
          this.options.isRevealed = true;
          this.options.revealOn = this.options.revealOn || revealOnClass[1];
        }
        if (this.options.isRevealed === true && this.options.revealOn) {
          this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));
          this._setMQChecker();
        }
        if (this.options.transitionTime) {
          this.$element.css("transition-duration", this.options.transitionTime);
        }
        this.$sticky = this.$content.find("[data-off-canvas-sticky]");
        if (this.$sticky.length > 0 && this.options.transition === "push") {
          this.options.contentScroll = false;
        }
        var inCanvasFor = this.$element.attr("class").match(/\bin-canvas-for-(\w+)/);
        if (inCanvasFor && inCanvasFor.length === 2) {
          this.options.inCanvasOn = inCanvasFor[1];
        } else if (this.options.inCanvasOn) {
          this.$element.addClass("in-canvas-for-".concat(this.options.inCanvasOn));
        }
        if (this.options.inCanvasOn) {
          this._checkInCanvas();
        }
        this._removeContentClasses();
      }
      /**
       * Adds event handlers to the off-canvas wrapper and the exit overlay.
       * @function
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this3 = this;
        this.$element.off(".zf.trigger .zf.offCanvas").on({
          "open.zf.trigger": this.open.bind(this),
          "close.zf.trigger": this.close.bind(this),
          "toggle.zf.trigger": this.toggle.bind(this),
          "keydown.zf.offCanvas": this._handleKeyboard.bind(this)
        });
        if (this.options.closeOnClick === true) {
          var $target = this.options.contentOverlay ? this.$overlay : this.$content;
          $target.on({
            "click.zf.offCanvas": this.close.bind(this)
          });
        }
        if (this.options.inCanvasOn) {
          (0, import_jquery.default)(window).on("changed.zf.mediaquery", function() {
            _this3._checkInCanvas();
          });
        }
      }
      /**
       * Applies event listener for elements that will reveal at certain breakpoints.
       * @private
       */
    }, {
      key: "_setMQChecker",
      value: function _setMQChecker() {
        var _this = this;
        this.onLoadListener = onLoad((0, import_jquery.default)(window), function() {
          if (MediaQuery.atLeast(_this.options.revealOn)) {
            _this.reveal(true);
          }
        });
        (0, import_jquery.default)(window).on("changed.zf.mediaquery", function() {
          if (MediaQuery.atLeast(_this.options.revealOn)) {
            _this.reveal(true);
          } else {
            _this.reveal(false);
          }
        });
      }
      /**
       * Checks if InCanvas on current breakpoint and adjust off-canvas accordingly
       * @private
       */
    }, {
      key: "_checkInCanvas",
      value: function _checkInCanvas() {
        this.isInCanvas = MediaQuery.atLeast(this.options.inCanvasOn);
        if (this.isInCanvas === true) {
          this.close();
        }
      }
      /**
       * Removes the CSS transition/position classes of the off-canvas content container.
       * Removing the classes is important when another off-canvas gets opened that uses the same content container.
       * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
       * @private
       */
    }, {
      key: "_removeContentClasses",
      value: function _removeContentClasses(hasReveal) {
        if (typeof hasReveal !== "boolean") {
          this.$content.removeClass(this.contentClasses.base.join(" "));
        } else if (hasReveal === false) {
          this.$content.removeClass("has-reveal-".concat(this.position));
        }
      }
      /**
       * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
       * Beforehand any transition/position class gets removed.
       * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
       * @private
       */
    }, {
      key: "_addContentClasses",
      value: function _addContentClasses(hasReveal) {
        this._removeContentClasses(hasReveal);
        if (typeof hasReveal !== "boolean") {
          this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position));
        } else if (hasReveal === true) {
          this.$content.addClass("has-reveal-".concat(this.position));
        }
      }
      /**
       * Preserves the fixed behavior of sticky elements on opening an off-canvas with push transition.
       * Since the off-canvas container has got a transform scope in such a case, it is done by calculating position absolute values.
       * @private
       */
    }, {
      key: "_fixStickyElements",
      value: function _fixStickyElements() {
        this.$sticky.each(function(_, el) {
          var $el = (0, import_jquery.default)(el);
          if ($el.css("position") === "fixed") {
            var topVal = parseInt($el.css("top"), 10);
            $el.data("offCanvasSticky", {
              top: topVal
            });
            var absoluteTopVal = (0, import_jquery.default)(document).scrollTop() + topVal;
            $el.css({
              top: "".concat(absoluteTopVal, "px"),
              width: "100%",
              transition: "none"
            });
          }
        });
      }
      /**
       * Restores the original fixed styling of sticky elements after having closed an off-canvas that got pseudo fixed beforehand.
       * This reverts the changes of _fixStickyElements()
       * @private
       */
    }, {
      key: "_unfixStickyElements",
      value: function _unfixStickyElements() {
        this.$sticky.each(function(_, el) {
          var $el = (0, import_jquery.default)(el);
          var stickyData = $el.data("offCanvasSticky");
          if (_typeof(stickyData) === "object") {
            $el.css({
              top: "".concat(stickyData.top, "px"),
              width: "",
              transition: ""
            });
            $el.data("offCanvasSticky", "");
          }
        });
      }
      /**
       * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
       * @param {Boolean} isRevealed - true if element should be revealed.
       * @function
       */
    }, {
      key: "reveal",
      value: function reveal(isRevealed) {
        if (isRevealed) {
          this.close();
          this.isRevealed = true;
          this.$element.attr("aria-hidden", "false");
          this.$element.off("open.zf.trigger toggle.zf.trigger");
          this.$element.removeClass("is-closed");
        } else {
          this.isRevealed = false;
          this.$element.attr("aria-hidden", "true");
          this.$element.off("open.zf.trigger toggle.zf.trigger").on({
            "open.zf.trigger": this.open.bind(this),
            "toggle.zf.trigger": this.toggle.bind(this)
          });
          this.$element.addClass("is-closed");
        }
        this._addContentClasses(isRevealed);
      }
      /**
       * Stops scrolling of the body when OffCanvas is open on mobile Safari and other troublesome browsers.
       * @function
       * @private
       */
    }, {
      key: "_stopScrolling",
      value: function _stopScrolling() {
        return false;
      }
      /**
       * Save current finger y-position
       * @param event
       * @private
       */
    }, {
      key: "_recordScrollable",
      value: function _recordScrollable(event) {
        var elem = this;
        elem.lastY = event.touches[0].pageY;
      }
      /**
       * Prevent further scrolling when it hits the edges
       * @param event
       * @private
       */
    }, {
      key: "_preventDefaultAtEdges",
      value: function _preventDefaultAtEdges(event) {
        var elem = this;
        var _this = event.data;
        var delta = elem.lastY - event.touches[0].pageY;
        elem.lastY = event.touches[0].pageY;
        if (!_this._canScroll(delta, elem)) {
          event.preventDefault();
        }
      }
      /**
       * Handle continuous scrolling of scrollbox
       * Don't bubble up to _preventDefaultAtEdges
       * @param event
       * @private
       */
    }, {
      key: "_scrollboxTouchMoved",
      value: function _scrollboxTouchMoved(event) {
        var elem = this;
        var _this = event.data;
        var parent = elem.closest("[data-off-canvas], [data-off-canvas-scrollbox-outer]");
        var delta = elem.lastY - event.touches[0].pageY;
        parent.lastY = elem.lastY = event.touches[0].pageY;
        event.stopPropagation();
        if (!_this._canScroll(delta, elem)) {
          if (!_this._canScroll(delta, parent)) {
            event.preventDefault();
          } else {
            parent.scrollTop += delta;
          }
        }
      }
      /**
       * Detect possibility of scrolling
       * @param delta
       * @param elem
       * @returns boolean
       * @private
       */
    }, {
      key: "_canScroll",
      value: function _canScroll(delta, elem) {
        var up = delta < 0;
        var down = delta > 0;
        var allowUp = elem.scrollTop > 0;
        var allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
        return up && allowUp || down && allowDown;
      }
      /**
       * Opens the off-canvas menu.
       * @function
       * @param {Object} event - Event object passed from listener.
       * @param {jQuery} trigger - element that triggered the off-canvas to open.
       * @fires OffCanvas#opened
       * @todo also trigger 'open' event?
       */
    }, {
      key: "open",
      value: function open3(event, trigger) {
        var _this4 = this;
        if (this.$element.hasClass("is-open") || this.isRevealed || this.isInCanvas) {
          return;
        }
        var _this = this;
        if (trigger) {
          this.$lastTrigger = trigger;
        }
        if (this.options.forceTo === "top") {
          window.scrollTo(0, 0);
        } else if (this.options.forceTo === "bottom") {
          window.scrollTo(0, document.body.scrollHeight);
        }
        if (this.options.transitionTime && this.options.transition !== "overlap") {
          this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime);
        } else {
          this.$element.siblings("[data-off-canvas-content]").css("transition-duration", "");
        }
        this.$element.addClass("is-open").removeClass("is-closed");
        this.$triggers.attr("aria-expanded", "true");
        this.$element.attr("aria-hidden", "false");
        this.$content.addClass("is-open-" + this.position);
        if (this.options.contentScroll === false) {
          (0, import_jquery.default)("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling);
          this.$element.on("touchstart", this._recordScrollable);
          this.$element.on("touchmove", this, this._preventDefaultAtEdges);
          this.$element.on("touchstart", "[data-off-canvas-scrollbox]", this._recordScrollable);
          this.$element.on("touchmove", "[data-off-canvas-scrollbox]", this, this._scrollboxTouchMoved);
        }
        if (this.options.contentOverlay === true) {
          this.$overlay.addClass("is-visible");
        }
        if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
          this.$overlay.addClass("is-closable");
        }
        if (this.options.autoFocus === true) {
          this.$element.one(transitionend(this.$element), function() {
            if (!_this.$element.hasClass("is-open")) {
              return;
            }
            var canvasFocus = _this.$element.find("[data-autofocus]");
            if (canvasFocus.length) {
              canvasFocus.eq(0).focus();
            } else {
              _this.$element.find("a, button").eq(0).focus();
            }
          });
        }
        if (this.options.trapFocus === true) {
          this.$content.attr("tabindex", "-1");
          Keyboard.trapFocus(this.$element);
        }
        if (this.options.transition === "push") {
          this._fixStickyElements();
        }
        this._addContentClasses();
        this.$element.trigger("opened.zf.offCanvas");
        this.$element.one(transitionend(this.$element), function() {
          _this4.$element.trigger("openedEnd.zf.offCanvas");
        });
      }
      /**
       * Closes the off-canvas menu.
       * @function
       * @param {Function} cb - optional cb to fire after closure.
       * @fires OffCanvas#close
       * @fires OffCanvas#closed
       */
    }, {
      key: "close",
      value: function close2() {
        var _this5 = this;
        if (!this.$element.hasClass("is-open") || this.isRevealed) {
          return;
        }
        this.$element.trigger("close.zf.offCanvas");
        this.$element.removeClass("is-open");
        this.$element.attr("aria-hidden", "true");
        this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom");
        if (this.options.contentOverlay === true) {
          this.$overlay.removeClass("is-visible");
        }
        if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
          this.$overlay.removeClass("is-closable");
        }
        this.$triggers.attr("aria-expanded", "false");
        this.$element.one(transitionend(this.$element), function() {
          _this5.$element.addClass("is-closed");
          _this5._removeContentClasses();
          if (_this5.options.transition === "push") {
            _this5._unfixStickyElements();
          }
          if (_this5.options.contentScroll === false) {
            (0, import_jquery.default)("body").removeClass("is-off-canvas-open").off("touchmove", _this5._stopScrolling);
            _this5.$element.off("touchstart", _this5._recordScrollable);
            _this5.$element.off("touchmove", _this5._preventDefaultAtEdges);
            _this5.$element.off("touchstart", "[data-off-canvas-scrollbox]", _this5._recordScrollable);
            _this5.$element.off("touchmove", "[data-off-canvas-scrollbox]", _this5._scrollboxTouchMoved);
          }
          if (_this5.options.trapFocus === true) {
            _this5.$content.removeAttr("tabindex");
            Keyboard.releaseFocus(_this5.$element);
          }
          _this5.$element.trigger("closed.zf.offCanvas");
        });
      }
      /**
       * Toggles the off-canvas menu open or closed.
       * @function
       * @param {Object} event - Event object passed from listener.
       * @param {jQuery} trigger - element that triggered the off-canvas to open.
       */
    }, {
      key: "toggle",
      value: function toggle2(event, trigger) {
        if (this.$element.hasClass("is-open")) {
          this.close(event, trigger);
        } else {
          this.open(event, trigger);
        }
      }
      /**
       * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
       * @function
       * @private
       */
    }, {
      key: "_handleKeyboard",
      value: function _handleKeyboard(e) {
        var _this6 = this;
        Keyboard.handleKey(e, "OffCanvas", {
          close: function close2() {
            _this6.close();
            _this6.$lastTrigger.focus();
            return true;
          },
          handled: function handled() {
            e.preventDefault();
          }
        });
      }
      /**
       * Destroys the OffCanvas plugin.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.close();
        this.$element.off(".zf.trigger .zf.offCanvas");
        this.$overlay.off(".zf.offCanvas");
        if (this.onLoadListener)
          (0, import_jquery.default)(window).off(this.onLoadListener);
      }
    }]);
    return OffCanvas2;
  }(Plugin);
  OffCanvas.defaults = {
    /**
     * Allow the user to click outside of the menu to close it.
     * @option
     * @type {boolean}
     * @default true
     */
    closeOnClick: true,
    /**
     * Adds an overlay on top of `[data-off-canvas-content]`.
     * @option
     * @type {boolean}
     * @default true
     */
    contentOverlay: true,
    /**
     * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
     * @option
     * @type {?string}
     * @default null
     */
    contentId: null,
    /**
     * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
     * @option
     * @type {boolean}
     * @default null
     */
    nested: null,
    /**
     * Enable/disable scrolling of the main content when an off canvas panel is open.
     * @option
     * @type {boolean}
     * @default true
     */
    contentScroll: true,
    /**
     * Amount of time the open and close transition requires, including the appropriate milliseconds (`ms`) or seconds (`s`) unit (e.g. `500ms`, `.75s`) If none selected, pulls from body style.
     * @option
     * @type {string}
     * @default null
     */
    transitionTime: null,
    /**
     * Type of transition for the OffCanvas menu. Options are 'push', 'detached' or 'slide'.
     * @option
     * @type {string}
     * @default push
     */
    transition: "push",
    /**
     * Force the page to scroll to top or bottom on open.
     * @option
     * @type {?string}
     * @default null
     */
    forceTo: null,
    /**
     * Allow the OffCanvas to remain open for certain breakpoints.
     * @option
     * @type {boolean}
     * @default false
     */
    isRevealed: false,
    /**
     * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
     * @option
     * @type {?string}
     * @default null
     */
    revealOn: null,
    /**
     * Breakpoint at which the off-canvas gets moved into canvas content and acts as regular page element.
     * @option
     * @type {?string}
     * @default null
     */
    inCanvasOn: null,
    /**
     * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
     * @option
     * @type {boolean}
     * @default true
     */
    autoFocus: true,
    /**
     * Class used to force an OffCanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
     * @option
     * @type {string}
     * @default reveal-for-
     * @todo improve the regex testing for this.
     */
    revealClass: "reveal-for-",
    /**
     * Triggers optional focus trapping when opening an OffCanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
     * @option
     * @type {boolean}
     * @default false
     */
    trapFocus: false
  };
  var Orbit = /* @__PURE__ */ function(_Plugin) {
    _inherits(Orbit2, _Plugin);
    var _super = _createSuper(Orbit2);
    function Orbit2() {
      _classCallCheck(this, Orbit2);
      return _super.apply(this, arguments);
    }
    _createClass(Orbit2, [{
      key: "_setup",
      value: (
        /**
        * Creates a new instance of an orbit carousel.
        * @class
        * @name Orbit
        * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
        * @param {Object} options - Overrides to the default plugin settings.
        */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Orbit2.defaults, this.$element.data(), options);
          this.className = "Orbit";
          Touch.init(import_jquery.default);
          this._init();
          Keyboard.register("Orbit", {
            "ltr": {
              "ARROW_RIGHT": "next",
              "ARROW_LEFT": "previous"
            },
            "rtl": {
              "ARROW_LEFT": "next",
              "ARROW_RIGHT": "previous"
            }
          });
        }
      )
      /**
      * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
      * @function
      * @private
      */
    }, {
      key: "_init",
      value: function _init2() {
        this._reset();
        this.$wrapper = this.$element.find(".".concat(this.options.containerClass));
        this.$slides = this.$element.find(".".concat(this.options.slideClass));
        var $images = this.$element.find("img"), initActive = this.$slides.filter(".is-active"), id2 = this.$element[0].id || GetYoDigits(6, "orbit");
        this.$element.attr({
          "data-resize": id2,
          "id": id2
        });
        if (!initActive.length) {
          this.$slides.eq(0).addClass("is-active");
        }
        if (!this.options.useMUI) {
          this.$slides.addClass("no-motionui");
        }
        if ($images.length) {
          onImagesLoaded($images, this._prepareForOrbit.bind(this));
        } else {
          this._prepareForOrbit();
        }
        if (this.options.bullets) {
          this._loadBullets();
        }
        this._events();
        if (this.options.autoPlay && this.$slides.length > 1) {
          this.geoSync();
        }
        if (this.options.accessible) {
          this.$wrapper.attr("tabindex", 0);
        }
      }
      /**
      * Creates a jQuery collection of bullets, if they are being used.
      * @function
      * @private
      */
    }, {
      key: "_loadBullets",
      value: function _loadBullets() {
        this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find("button");
      }
      /**
      * Sets a `timer` object on the orbit, and starts the counter for the next slide.
      * @function
      */
    }, {
      key: "geoSync",
      value: function geoSync() {
        var _this = this;
        this.timer = new Timer(this.$element, {
          duration: this.options.timerDelay,
          infinite: false
        }, function() {
          _this.changeSlide(true);
        });
        this.timer.start();
      }
      /**
      * Sets wrapper and slide heights for the orbit.
      * @function
      * @private
      */
    }, {
      key: "_prepareForOrbit",
      value: function _prepareForOrbit() {
        this._setWrapperHeight();
      }
      /**
      * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
      * @function
      * @private
      * @param {Function} cb - a callback function to fire when complete.
      */
    }, {
      key: "_setWrapperHeight",
      value: function _setWrapperHeight(cb) {
        var max = 0, temp, counter = 0, _this = this;
        this.$slides.each(function() {
          temp = this.getBoundingClientRect().height;
          (0, import_jquery.default)(this).attr("data-slide", counter);
          if (!/mui/g.test((0, import_jquery.default)(this)[0].className) && _this.$slides.filter(".is-active")[0] !== _this.$slides.eq(counter)[0]) {
            (0, import_jquery.default)(this).css({
              "display": "none"
            });
          }
          max = temp > max ? temp : max;
          counter++;
        });
        if (counter === this.$slides.length) {
          this.$wrapper.css({
            "height": max
          });
          if (cb) {
            cb(max);
          }
        }
      }
      /**
      * Sets the max-height of each slide.
      * @function
      * @private
      */
    }, {
      key: "_setSlideHeight",
      value: function _setSlideHeight(height) {
        this.$slides.each(function() {
          (0, import_jquery.default)(this).css("max-height", height);
        });
      }
      /**
      * Adds event listeners to basically everything within the element.
      * @function
      * @private
      */
    }, {
      key: "_events",
      value: function _events() {
        var _this = this;
        this.$element.off(".resizeme.zf.trigger").on({
          "resizeme.zf.trigger": this._prepareForOrbit.bind(this)
        });
        if (this.$slides.length > 1) {
          if (this.options.swipe) {
            this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(e) {
              e.preventDefault();
              _this.changeSlide(true);
            }).on("swiperight.zf.orbit", function(e) {
              e.preventDefault();
              _this.changeSlide(false);
            });
          }
          if (this.options.autoPlay) {
            this.$slides.on("click.zf.orbit", function() {
              _this.$element.data("clickedOn", _this.$element.data("clickedOn") ? false : true);
              _this.timer[_this.$element.data("clickedOn") ? "pause" : "start"]();
            });
            if (this.options.pauseOnHover) {
              this.$element.on("mouseenter.zf.orbit", function() {
                _this.timer.pause();
              }).on("mouseleave.zf.orbit", function() {
                if (!_this.$element.data("clickedOn")) {
                  _this.timer.start();
                }
              });
            }
          }
          if (this.options.navButtons) {
            var $controls = this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass));
            $controls.attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(e) {
              e.preventDefault();
              _this.changeSlide((0, import_jquery.default)(this).hasClass(_this.options.nextClass));
            });
          }
          if (this.options.bullets) {
            this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
              if (/is-active/g.test(this.className)) {
                return false;
              }
              var idx = (0, import_jquery.default)(this).data("slide"), ltr = idx > _this.$slides.filter(".is-active").data("slide"), $slide = _this.$slides.eq(idx);
              _this.changeSlide(ltr, $slide, idx);
            });
          }
          if (this.options.accessible) {
            this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(e) {
              Keyboard.handleKey(e, "Orbit", {
                next: function next2() {
                  _this.changeSlide(true);
                },
                previous: function previous() {
                  _this.changeSlide(false);
                },
                handled: function handled() {
                  if ((0, import_jquery.default)(e.target).is(_this.$bullets)) {
                    _this.$bullets.filter(".is-active").focus();
                  }
                }
              });
            });
          }
        }
      }
      /**
       * Resets Orbit so it can be reinitialized
       */
    }, {
      key: "_reset",
      value: function _reset() {
        if (typeof this.$slides === "undefined") {
          return;
        }
        if (this.$slides.length > 1) {
          this.$element.off(".zf.orbit").find("*").off(".zf.orbit");
          if (this.options.autoPlay) {
            this.timer.restart();
          }
          this.$slides.each(function(el) {
            (0, import_jquery.default)(el).removeClass("is-active is-active is-in").removeAttr("aria-live").hide();
          });
          this.$slides.first().addClass("is-active").show();
          this.$element.trigger("slidechange.zf.orbit", [this.$slides.first()]);
          if (this.options.bullets) {
            this._updateBullets(0);
          }
        }
      }
      /**
      * Changes the current slide to a new one.
      * @function
      * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
      * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
      * @param {Number} idx - the index of the new slide in its collection, if one chosen.
      * @fires Orbit#slidechange
      */
    }, {
      key: "changeSlide",
      value: function changeSlide(isLTR, chosenSlide, idx) {
        if (!this.$slides) {
          return;
        }
        var $curSlide = this.$slides.filter(".is-active").eq(0);
        if (/mui/g.test($curSlide[0].className)) {
          return false;
        }
        var $firstSlide = this.$slides.first(), $lastSlide = this.$slides.last(), dirIn = isLTR ? "Right" : "Left", dirOut = isLTR ? "Left" : "Right", _this = this, $newSlide;
        if (!chosenSlide) {
          $newSlide = isLTR ? (
            //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
            this.options.infiniteWrap ? $curSlide.next(".".concat(this.options.slideClass)).length ? $curSlide.next(".".concat(this.options.slideClass)) : $firstSlide : $curSlide.next(".".concat(this.options.slideClass))
          ) : this.options.infiniteWrap ? $curSlide.prev(".".concat(this.options.slideClass)).length ? $curSlide.prev(".".concat(this.options.slideClass)) : $lastSlide : $curSlide.prev(".".concat(this.options.slideClass));
        } else {
          $newSlide = chosenSlide;
        }
        if ($newSlide.length) {
          this.$element.trigger("beforeslidechange.zf.orbit", [$curSlide, $newSlide]);
          if (this.options.bullets) {
            idx = idx || this.$slides.index($newSlide);
            this._updateBullets(idx);
          }
          if (this.options.useMUI && !this.$element.is(":hidden")) {
            Motion.animateIn($newSlide.addClass("is-active"), this.options["animInFrom".concat(dirIn)], function() {
              $newSlide.css({
                "display": "block"
              }).attr("aria-live", "polite");
            });
            Motion.animateOut($curSlide.removeClass("is-active"), this.options["animOutTo".concat(dirOut)], function() {
              $curSlide.removeAttr("aria-live");
              if (_this.options.autoPlay && !_this.timer.isPaused) {
                _this.timer.restart();
              }
            });
          } else {
            $curSlide.removeClass("is-active is-in").removeAttr("aria-live").hide();
            $newSlide.addClass("is-active is-in").attr("aria-live", "polite").show();
            if (this.options.autoPlay && !this.timer.isPaused) {
              this.timer.restart();
            }
          }
          this.$element.trigger("slidechange.zf.orbit", [$newSlide]);
        }
      }
      /**
      * Updates the active state of the bullets, if displayed.
      * Move the descriptor of the current slide `[data-slide-active-label]` to the newly active bullet.
      * If no `[data-slide-active-label]` is set, will move the exceeding `span` element.
      *
      * @function
      * @private
      * @param {Number} idx - the index of the current slide.
      */
    }, {
      key: "_updateBullets",
      value: function _updateBullets(idx) {
        var $oldBullet = this.$bullets.filter(".is-active");
        var $othersBullets = this.$bullets.not(".is-active");
        var $newBullet = this.$bullets.eq(idx);
        $oldBullet.removeClass("is-active").blur();
        $newBullet.addClass("is-active");
        var activeStateDescriptor = $oldBullet.children("[data-slide-active-label]").last();
        if (!activeStateDescriptor.length) {
          var spans = $oldBullet.children("span");
          var spanCountInOthersBullets = $othersBullets.toArray().map(function(b) {
            return (0, import_jquery.default)(b).children("span").length;
          });
          if (spanCountInOthersBullets.every(function(count) {
            return count < spans.length;
          })) {
            activeStateDescriptor = spans.last();
            activeStateDescriptor.attr("data-slide-active-label", "");
          }
        }
        if (activeStateDescriptor.length) {
          activeStateDescriptor.detach();
          $newBullet.append(activeStateDescriptor);
        }
      }
      /**
      * Destroys the carousel and hides the element.
      * @function
      */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide();
      }
    }]);
    return Orbit2;
  }(Plugin);
  Orbit.defaults = {
    /**
    * Tells the JS to look for and loadBullets.
    * @option
     * @type {boolean}
    * @default true
    */
    bullets: true,
    /**
    * Tells the JS to apply event listeners to nav buttons
    * @option
     * @type {boolean}
    * @default true
    */
    navButtons: true,
    /**
    * motion-ui animation class to apply
    * @option
     * @type {string}
    * @default 'slide-in-right'
    */
    animInFromRight: "slide-in-right",
    /**
    * motion-ui animation class to apply
    * @option
     * @type {string}
    * @default 'slide-out-right'
    */
    animOutToRight: "slide-out-right",
    /**
    * motion-ui animation class to apply
    * @option
     * @type {string}
    * @default 'slide-in-left'
    *
    */
    animInFromLeft: "slide-in-left",
    /**
    * motion-ui animation class to apply
    * @option
     * @type {string}
    * @default 'slide-out-left'
    */
    animOutToLeft: "slide-out-left",
    /**
    * Allows Orbit to automatically animate on page load.
    * @option
     * @type {boolean}
    * @default true
    */
    autoPlay: true,
    /**
    * Amount of time, in ms, between slide transitions
    * @option
     * @type {number}
    * @default 5000
    */
    timerDelay: 5e3,
    /**
    * Allows Orbit to infinitely loop through the slides
    * @option
     * @type {boolean}
    * @default true
    */
    infiniteWrap: true,
    /**
    * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
    * @option
     * @type {boolean}
    * @default true
    */
    swipe: true,
    /**
    * Allows the timing function to pause animation on hover.
    * @option
     * @type {boolean}
    * @default true
    */
    pauseOnHover: true,
    /**
    * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
    * @option
     * @type {boolean}
    * @default true
    */
    accessible: true,
    /**
    * Class applied to the container of Orbit
    * @option
     * @type {string}
    * @default 'orbit-container'
    */
    containerClass: "orbit-container",
    /**
    * Class applied to individual slides.
    * @option
     * @type {string}
    * @default 'orbit-slide'
    */
    slideClass: "orbit-slide",
    /**
    * Class applied to the bullet container. You're welcome.
    * @option
     * @type {string}
    * @default 'orbit-bullets'
    */
    boxOfBullets: "orbit-bullets",
    /**
    * Class applied to the `next` navigation button.
    * @option
     * @type {string}
    * @default 'orbit-next'
    */
    nextClass: "orbit-next",
    /**
    * Class applied to the `previous` navigation button.
    * @option
     * @type {string}
    * @default 'orbit-previous'
    */
    prevClass: "orbit-previous",
    /**
    * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
    * @option
     * @type {boolean}
    * @default true
    */
    useMUI: true
  };
  var MenuPlugins = {
    dropdown: {
      cssClass: "dropdown",
      plugin: DropdownMenu
    },
    drilldown: {
      cssClass: "drilldown",
      plugin: Drilldown
    },
    accordion: {
      cssClass: "accordion-menu",
      plugin: AccordionMenu
    }
  };
  var ResponsiveMenu = /* @__PURE__ */ function(_Plugin) {
    _inherits(ResponsiveMenu2, _Plugin);
    var _super = _createSuper(ResponsiveMenu2);
    function ResponsiveMenu2() {
      _classCallCheck(this, ResponsiveMenu2);
      return _super.apply(this, arguments);
    }
    _createClass(ResponsiveMenu2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of a responsive menu.
         * @class
         * @name ResponsiveMenu
         * @fires ResponsiveMenu#init
         * @param {jQuery} element - jQuery object to make into a dropdown menu.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element) {
          this.$element = (0, import_jquery.default)(element);
          this.rules = this.$element.data("responsive-menu");
          this.currentMq = null;
          this.currentPlugin = null;
          this.className = "ResponsiveMenu";
          this._init();
          this._events();
        }
      )
      /**
       * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
       * @function
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        MediaQuery._init();
        if (typeof this.rules === "string") {
          var rulesTree = {};
          var rules = this.rules.split(" ");
          for (var i = 0; i < rules.length; i++) {
            var rule = rules[i].split("-");
            var ruleSize = rule.length > 1 ? rule[0] : "small";
            var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
            if (MenuPlugins[rulePlugin] !== null) {
              rulesTree[ruleSize] = MenuPlugins[rulePlugin];
            }
          }
          this.rules = rulesTree;
        }
        if (!import_jquery.default.isEmptyObject(this.rules)) {
          this._checkMediaQueries();
        }
        this.$element.attr("data-mutate", this.$element.attr("data-mutate") || GetYoDigits(6, "responsive-menu"));
      }
      /**
       * Initializes events for the Menu.
       * @function
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this = this;
        (0, import_jquery.default)(window).on("changed.zf.mediaquery", function() {
          _this._checkMediaQueries();
        });
      }
      /**
       * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
       * @function
       * @private
       */
    }, {
      key: "_checkMediaQueries",
      value: function _checkMediaQueries() {
        var matchedMq, _this = this;
        import_jquery.default.each(this.rules, function(key) {
          if (MediaQuery.atLeast(key)) {
            matchedMq = key;
          }
        });
        if (!matchedMq)
          return;
        if (this.currentPlugin instanceof this.rules[matchedMq].plugin)
          return;
        import_jquery.default.each(MenuPlugins, function(key, value) {
          _this.$element.removeClass(value.cssClass);
        });
        this.$element.addClass(this.rules[matchedMq].cssClass);
        if (this.currentPlugin)
          this.currentPlugin.destroy();
        this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
      }
      /**
       * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.currentPlugin.destroy();
        (0, import_jquery.default)(window).off(".zf.ResponsiveMenu");
      }
    }]);
    return ResponsiveMenu2;
  }(Plugin);
  ResponsiveMenu.defaults = {};
  var ResponsiveToggle = /* @__PURE__ */ function(_Plugin) {
    _inherits(ResponsiveToggle2, _Plugin);
    var _super = _createSuper(ResponsiveToggle2);
    function ResponsiveToggle2() {
      _classCallCheck(this, ResponsiveToggle2);
      return _super.apply(this, arguments);
    }
    _createClass(ResponsiveToggle2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of Tab Bar.
         * @class
         * @name ResponsiveToggle
         * @fires ResponsiveToggle#init
         * @param {jQuery} element - jQuery object to attach tab bar functionality to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = (0, import_jquery.default)(element);
          this.options = import_jquery.default.extend({}, ResponsiveToggle2.defaults, this.$element.data(), options);
          this.className = "ResponsiveToggle";
          this._init();
          this._events();
        }
      )
      /**
       * Initializes the tab bar by finding the target element, toggling element, and running update().
       * @function
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        MediaQuery._init();
        var targetID = this.$element.data("responsive-toggle");
        if (!targetID) {
          console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar.");
        }
        this.$targetMenu = (0, import_jquery.default)("#".concat(targetID));
        this.$toggler = this.$element.find("[data-toggle]").filter(function() {
          var target = (0, import_jquery.default)(this).data("toggle");
          return target === targetID || target === "";
        });
        this.options = import_jquery.default.extend({}, this.options, this.$targetMenu.data());
        if (this.options.animate) {
          var input = this.options.animate.split(" ");
          this.animationIn = input[0];
          this.animationOut = input[1] || null;
        }
        this._update();
      }
      /**
       * Adds necessary event handlers for the tab bar to work.
       * @function
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        this._updateMqHandler = this._update.bind(this);
        (0, import_jquery.default)(window).on("changed.zf.mediaquery", this._updateMqHandler);
        this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this));
      }
      /**
       * Checks the current media query to determine if the tab bar should be visible or hidden.
       * @function
       * @private
       */
    }, {
      key: "_update",
      value: function _update() {
        if (!MediaQuery.atLeast(this.options.hideFor)) {
          this.$element.show();
          this.$targetMenu.hide();
        } else {
          this.$element.hide();
          this.$targetMenu.show();
        }
      }
      /**
       * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
       * @function
       * @fires ResponsiveToggle#toggled
       */
    }, {
      key: "toggleMenu",
      value: function toggleMenu() {
        var _this = this;
        if (!MediaQuery.atLeast(this.options.hideFor)) {
          if (this.options.animate) {
            if (this.$targetMenu.is(":hidden")) {
              Motion.animateIn(this.$targetMenu, this.animationIn, function() {
                _this.$element.trigger("toggled.zf.responsiveToggle");
                _this.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger");
              });
            } else {
              Motion.animateOut(this.$targetMenu, this.animationOut, function() {
                _this.$element.trigger("toggled.zf.responsiveToggle");
              });
            }
          } else {
            this.$targetMenu.toggle(0);
            this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger");
            this.$element.trigger("toggled.zf.responsiveToggle");
          }
        }
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$element.off(".zf.responsiveToggle");
        this.$toggler.off(".zf.responsiveToggle");
        (0, import_jquery.default)(window).off("changed.zf.mediaquery", this._updateMqHandler);
      }
    }]);
    return ResponsiveToggle2;
  }(Plugin);
  ResponsiveToggle.defaults = {
    /**
     * The breakpoint after which the menu is always shown, and the tab bar is hidden.
     * @option
     * @type {string}
     * @default 'medium'
     */
    hideFor: "medium",
    /**
     * To decide if the toggle should be animated or not.
     * @option
     * @type {boolean}
     * @default false
     */
    animate: false
  };
  var Reveal = /* @__PURE__ */ function(_Plugin) {
    _inherits(Reveal2, _Plugin);
    var _super = _createSuper(Reveal2);
    function Reveal2() {
      _classCallCheck(this, Reveal2);
      return _super.apply(this, arguments);
    }
    _createClass(Reveal2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of Reveal.
         * @class
         * @name Reveal
         * @param {jQuery} element - jQuery object to use for the modal.
         * @param {Object} options - optional parameters.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Reveal2.defaults, this.$element.data(), options);
          this.className = "Reveal";
          this._init();
          Touch.init(import_jquery.default);
          Triggers.init(import_jquery.default);
          Keyboard.register("Reveal", {
            "ESCAPE": "close"
          });
        }
      )
      /**
       * Initializes the modal by adding the overlay and close buttons, (if selected).
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        var _this2 = this;
        MediaQuery._init();
        this.id = this.$element.attr("id");
        this.isActive = false;
        this.cached = {
          mq: MediaQuery.current
        };
        this.$anchor = (0, import_jquery.default)('[data-open="'.concat(this.id, '"]')).length ? (0, import_jquery.default)('[data-open="'.concat(this.id, '"]')) : (0, import_jquery.default)('[data-toggle="'.concat(this.id, '"]'));
        this.$anchor.attr({
          "aria-controls": this.id,
          "aria-haspopup": "dialog",
          "tabindex": 0
        });
        if (this.options.fullScreen || this.$element.hasClass("full")) {
          this.options.fullScreen = true;
          this.options.overlay = false;
        }
        if (this.options.overlay && !this.$overlay) {
          this.$overlay = this._makeOverlay(this.id);
        }
        this.$element.attr({
          "role": "dialog",
          "aria-hidden": true,
          "data-yeti-box": this.id,
          "data-resize": this.id
        });
        if (this.$overlay) {
          this.$element.detach().appendTo(this.$overlay);
        } else {
          this.$element.detach().appendTo((0, import_jquery.default)(this.options.appendTo));
          this.$element.addClass("without-overlay");
        }
        this._events();
        if (this.options.deepLink && window.location.hash === "#".concat(this.id)) {
          this.onLoadListener = onLoad((0, import_jquery.default)(window), function() {
            return _this2.open();
          });
        }
      }
      /**
       * Creates an overlay div to display behind the modal.
       * @private
       */
    }, {
      key: "_makeOverlay",
      value: function _makeOverlay() {
        var additionalOverlayClasses = "";
        if (this.options.additionalOverlayClasses) {
          additionalOverlayClasses = " " + this.options.additionalOverlayClasses;
        }
        return (0, import_jquery.default)("<div></div>").addClass("reveal-overlay" + additionalOverlayClasses).appendTo(this.options.appendTo);
      }
      /**
       * Updates position of modal
       * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
       * @private
       */
    }, {
      key: "_updatePosition",
      value: function _updatePosition() {
        var width = this.$element.outerWidth();
        var outerWidth = (0, import_jquery.default)(window).width();
        var height = this.$element.outerHeight();
        var outerHeight = (0, import_jquery.default)(window).height();
        var left, top = null;
        if (this.options.hOffset === "auto") {
          left = parseInt((outerWidth - width) / 2, 10);
        } else {
          left = parseInt(this.options.hOffset, 10);
        }
        if (this.options.vOffset === "auto") {
          if (height > outerHeight) {
            top = parseInt(Math.min(100, outerHeight / 10), 10);
          } else {
            top = parseInt((outerHeight - height) / 4, 10);
          }
        } else if (this.options.vOffset !== null) {
          top = parseInt(this.options.vOffset, 10);
        }
        if (top !== null) {
          this.$element.css({
            top: top + "px"
          });
        }
        if (!this.$overlay || this.options.hOffset !== "auto") {
          this.$element.css({
            left: left + "px"
          });
          this.$element.css({
            margin: "0px"
          });
        }
      }
      /**
       * Adds event handlers for the modal.
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this3 = this;
        var _this = this;
        this.$element.on({
          "open.zf.trigger": this.open.bind(this),
          "close.zf.trigger": function closeZfTrigger(event, $element) {
            if (event.target === _this.$element[0] || (0, import_jquery.default)(event.target).parents("[data-closable]")[0] === $element) {
              return _this3.close.apply(_this3);
            }
          },
          "toggle.zf.trigger": this.toggle.bind(this),
          "resizeme.zf.trigger": function resizemeZfTrigger() {
            _this._updatePosition();
          }
        });
        if (this.options.closeOnClick && this.options.overlay) {
          this.$overlay.off(".zf.reveal").on("click.zf.dropdown tap.zf.dropdown", function(e) {
            if (e.target === _this.$element[0] || import_jquery.default.contains(_this.$element[0], e.target) || !import_jquery.default.contains(document, e.target)) {
              return;
            }
            _this.close();
          });
        }
        if (this.options.deepLink) {
          (0, import_jquery.default)(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this));
        }
      }
      /**
       * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
       * @private
       */
    }, {
      key: "_handleState",
      value: function _handleState() {
        if (window.location.hash === "#" + this.id && !this.isActive) {
          this.open();
        } else {
          this.close();
        }
      }
      /**
      * Disables the scroll when Reveal is shown to prevent the background from shifting
      * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
      */
    }, {
      key: "_disableScroll",
      value: function _disableScroll(scrollTop) {
        scrollTop = scrollTop || (0, import_jquery.default)(window).scrollTop();
        if ((0, import_jquery.default)(document).height() > (0, import_jquery.default)(window).height()) {
          (0, import_jquery.default)("html").css("top", -scrollTop);
        }
      }
      /**
      * Reenables the scroll when Reveal closes
      * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
      */
    }, {
      key: "_enableScroll",
      value: function _enableScroll(scrollTop) {
        scrollTop = scrollTop || parseInt((0, import_jquery.default)("html").css("top"), 10);
        if ((0, import_jquery.default)(document).height() > (0, import_jquery.default)(window).height()) {
          (0, import_jquery.default)("html").css("top", "");
          (0, import_jquery.default)(window).scrollTop(-scrollTop);
        }
      }
      /**
       * Opens the modal controlled by `this.$anchor`, and closes all others by default.
       * @function
       * @fires Reveal#closeme
       * @fires Reveal#open
       */
    }, {
      key: "open",
      value: function open3() {
        var _this4 = this;
        var hash = "#".concat(this.id);
        if (this.options.deepLink && window.location.hash !== hash) {
          if (window.history.pushState) {
            if (this.options.updateHistory) {
              window.history.pushState({}, "", hash);
            } else {
              window.history.replaceState({}, "", hash);
            }
          } else {
            window.location.hash = hash;
          }
        }
        this.$activeAnchor = (0, import_jquery.default)(document.activeElement).is(this.$anchor) ? (0, import_jquery.default)(document.activeElement) : this.$anchor;
        this.isActive = true;
        this.$element.css({
          "visibility": "hidden"
        }).show().scrollTop(0);
        if (this.options.overlay) {
          this.$overlay.css({
            "visibility": "hidden"
          }).show();
        }
        this._updatePosition();
        this.$element.hide().css({
          "visibility": ""
        });
        if (this.$overlay) {
          this.$overlay.css({
            "visibility": ""
          }).hide();
          if (this.$element.hasClass("fast")) {
            this.$overlay.addClass("fast");
          } else if (this.$element.hasClass("slow")) {
            this.$overlay.addClass("slow");
          }
        }
        if (!this.options.multipleOpened) {
          this.$element.trigger("closeme.zf.reveal", this.id);
        }
        if ((0, import_jquery.default)(".reveal:visible").length === 0) {
          this._disableScroll();
        }
        var _this = this;
        if (this.options.animationIn) {
          var afterAnimation = function afterAnimation2() {
            _this.$element.attr({
              "aria-hidden": false,
              "tabindex": -1
            }).focus();
            _this._addGlobalClasses();
            Keyboard.trapFocus(_this.$element);
          };
          if (this.options.overlay) {
            Motion.animateIn(this.$overlay, "fade-in");
          }
          Motion.animateIn(this.$element, this.options.animationIn, function() {
            if (_this4.$element) {
              _this4.focusableElements = Keyboard.findFocusable(_this4.$element);
              afterAnimation();
            }
          });
        } else {
          if (this.options.overlay) {
            this.$overlay.show(0);
          }
          this.$element.show(this.options.showDelay);
        }
        this.$element.attr({
          "aria-hidden": false,
          "tabindex": -1
        }).focus();
        Keyboard.trapFocus(this.$element);
        this._addGlobalClasses();
        this._addGlobalListeners();
        this.$element.trigger("open.zf.reveal");
      }
      /**
       * Adds classes and listeners on document required by open modals.
       *
       * The following classes are added and updated:
       * - `.is-reveal-open` - Prevents the scroll on document
       * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
       *                       scroll was not disabled. This prevent a "shift" of the page content due
       *                       the scrollbar disappearing when the modal opens.
       *
       * @private
       */
    }, {
      key: "_addGlobalClasses",
      value: function _addGlobalClasses() {
        var updateScrollbarClass = function updateScrollbarClass2() {
          (0, import_jquery.default)("html").toggleClass("zf-has-scroll", !!((0, import_jquery.default)(document).height() > (0, import_jquery.default)(window).height()));
        };
        this.$element.on("resizeme.zf.trigger.revealScrollbarListener", function() {
          return updateScrollbarClass();
        });
        updateScrollbarClass();
        (0, import_jquery.default)("html").addClass("is-reveal-open");
      }
      /**
       * Removes classes and listeners on document that were required by open modals.
       * @private
       */
    }, {
      key: "_removeGlobalClasses",
      value: function _removeGlobalClasses() {
        this.$element.off("resizeme.zf.trigger.revealScrollbarListener");
        (0, import_jquery.default)("html").removeClass("is-reveal-open");
        (0, import_jquery.default)("html").removeClass("zf-has-scroll");
      }
      /**
       * Adds extra event handlers for the body and window if necessary.
       * @private
       */
    }, {
      key: "_addGlobalListeners",
      value: function _addGlobalListeners() {
        var _this = this;
        if (!this.$element) {
          return;
        }
        this.focusableElements = Keyboard.findFocusable(this.$element);
        if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
          (0, import_jquery.default)("body").on("click.zf.dropdown tap.zf.dropdown", function(e) {
            if (e.target === _this.$element[0] || import_jquery.default.contains(_this.$element[0], e.target) || !import_jquery.default.contains(document, e.target)) {
              return;
            }
            _this.close();
          });
        }
        if (this.options.closeOnEsc) {
          (0, import_jquery.default)(window).on("keydown.zf.reveal", function(e) {
            Keyboard.handleKey(e, "Reveal", {
              close: function close2() {
                if (_this.options.closeOnEsc) {
                  _this.close();
                }
              }
            });
          });
        }
      }
      /**
       * Closes the modal.
       * @function
       * @fires Reveal#closed
       */
    }, {
      key: "close",
      value: function close2() {
        if (!this.isActive || !this.$element.is(":visible")) {
          return false;
        }
        var _this = this;
        if (this.options.animationOut) {
          if (this.options.overlay) {
            Motion.animateOut(this.$overlay, "fade-out");
          }
          Motion.animateOut(this.$element, this.options.animationOut, finishUp);
        } else {
          this.$element.hide(this.options.hideDelay);
          if (this.options.overlay) {
            this.$overlay.hide(0, finishUp);
          } else {
            finishUp();
          }
        }
        if (this.options.closeOnEsc) {
          (0, import_jquery.default)(window).off("keydown.zf.reveal");
        }
        if (!this.options.overlay && this.options.closeOnClick) {
          (0, import_jquery.default)("body").off("click.zf.dropdown tap.zf.dropdown");
        }
        this.$element.off("keydown.zf.reveal");
        function finishUp() {
          var scrollTop = parseInt((0, import_jquery.default)("html").css("top"), 10);
          if ((0, import_jquery.default)(".reveal:visible").length === 0) {
            _this._removeGlobalClasses();
          }
          Keyboard.releaseFocus(_this.$element);
          _this.$element.attr("aria-hidden", true);
          if ((0, import_jquery.default)(".reveal:visible").length === 0) {
            _this._enableScroll(scrollTop);
          }
          _this.$element.trigger("closed.zf.reveal");
        }
        if (this.options.resetOnClose) {
          this.$element.html(this.$element.html());
        }
        this.isActive = false;
        if (_this.options.deepLink && window.location.hash === "#".concat(this.id)) {
          if (window.history.replaceState) {
            var urlWithoutHash = window.location.pathname + window.location.search;
            if (this.options.updateHistory) {
              window.history.pushState({}, "", urlWithoutHash);
            } else {
              window.history.replaceState("", document.title, urlWithoutHash);
            }
          } else {
            window.location.hash = "";
          }
        }
        this.$activeAnchor.focus();
      }
      /**
       * Toggles the open/closed state of a modal.
       * @function
       */
    }, {
      key: "toggle",
      value: function toggle2() {
        if (this.isActive) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "_destroy",
      value: (
        /**
         * Destroys an instance of a modal.
         * @function
         */
        function _destroy() {
          if (this.options.overlay) {
            this.$element.appendTo((0, import_jquery.default)(this.options.appendTo));
            this.$overlay.hide().off().remove();
          }
          this.$element.hide().off();
          this.$anchor.off(".zf");
          (0, import_jquery.default)(window).off(".zf.reveal:".concat(this.id));
          if (this.onLoadListener)
            (0, import_jquery.default)(window).off(this.onLoadListener);
          if ((0, import_jquery.default)(".reveal:visible").length === 0) {
            this._removeGlobalClasses();
          }
        }
      )
    }]);
    return Reveal2;
  }(Plugin);
  Reveal.defaults = {
    /**
     * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
     * @option
     * @type {string}
     * @default ''
     */
    animationIn: "",
    /**
     * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
     * @option
     * @type {string}
     * @default ''
     */
    animationOut: "",
    /**
     * Time, in ms, to delay the opening of a modal after a click if no animation used.
     * @option
     * @type {number}
     * @default 0
     */
    showDelay: 0,
    /**
     * Time, in ms, to delay the closing of a modal after a click if no animation used.
     * @option
     * @type {number}
     * @default 0
     */
    hideDelay: 0,
    /**
     * Allows a click on the body/overlay to close the modal.
     * @option
     * @type {boolean}
     * @default true
     */
    closeOnClick: true,
    /**
     * Allows the modal to close if the user presses the `ESCAPE` key.
     * @option
     * @type {boolean}
     * @default true
     */
    closeOnEsc: true,
    /**
     * If true, allows multiple modals to be displayed at once.
     * @option
     * @type {boolean}
     * @default false
     */
    multipleOpened: false,
    /**
     * Distance, in pixels, the modal should push down from the top of the screen.
     * @option
     * @type {number|string}
     * @default auto
     */
    vOffset: "auto",
    /**
     * Distance, in pixels, the modal should push in from the side of the screen.
     * @option
     * @type {number|string}
     * @default auto
     */
    hOffset: "auto",
    /**
     * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
     * @option
     * @type {boolean}
     * @default false
     */
    fullScreen: false,
    /**
     * Allows the modal to generate an overlay div, which will cover the view when modal opens.
     * @option
     * @type {boolean}
     * @default true
     */
    overlay: true,
    /**
     * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
     * @option
     * @type {boolean}
     * @default false
     */
    resetOnClose: false,
    /**
     * Link the location hash to the modal.
     * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
     * @option
     * @type {boolean}
     * @default false
     */
    deepLink: false,
    /**
     * If `deepLink` is enabled, update the browser history with the open modal
     * @option
     * @default false
     */
    updateHistory: false,
    /**
    * Allows the modal to append to custom div.
    * @option
    * @type {string}
    * @default "body"
    */
    appendTo: "body",
    /**
     * Allows adding additional class names to the reveal overlay.
     * @option
     * @type {string}
     * @default ''
     */
    additionalOverlayClasses: ""
  };
  var Slider = /* @__PURE__ */ function(_Plugin) {
    _inherits(Slider2, _Plugin);
    var _super = _createSuper(Slider2);
    function Slider2() {
      _classCallCheck(this, Slider2);
      return _super.apply(this, arguments);
    }
    _createClass(Slider2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of a slider control.
         * @class
         * @name Slider
         * @param {jQuery} element - jQuery object to make into a slider control.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Slider2.defaults, this.$element.data(), options);
          this.className = "Slider";
          this.initialized = false;
          Touch.init(import_jquery.default);
          Triggers.init(import_jquery.default);
          this._init();
          Keyboard.register("Slider", {
            "ltr": {
              "ARROW_RIGHT": "increase",
              "ARROW_UP": "increase",
              "ARROW_DOWN": "decrease",
              "ARROW_LEFT": "decrease",
              "SHIFT_ARROW_RIGHT": "increaseFast",
              "SHIFT_ARROW_UP": "increaseFast",
              "SHIFT_ARROW_DOWN": "decreaseFast",
              "SHIFT_ARROW_LEFT": "decreaseFast",
              "HOME": "min",
              "END": "max"
            },
            "rtl": {
              "ARROW_LEFT": "increase",
              "ARROW_RIGHT": "decrease",
              "SHIFT_ARROW_LEFT": "increaseFast",
              "SHIFT_ARROW_RIGHT": "decreaseFast"
            }
          });
        }
      )
      /**
       * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
       * @function
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        this.inputs = this.$element.find("input");
        this.handles = this.$element.find("[data-slider-handle]");
        this.$handle = this.handles.eq(0);
        this.$input = this.inputs.length ? this.inputs.eq(0) : (0, import_jquery.default)("#".concat(this.$handle.attr("aria-controls")));
        this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
        if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
          this.options.disabled = true;
          this.$element.addClass(this.options.disabledClass);
        }
        if (!this.inputs.length) {
          this.inputs = (0, import_jquery.default)().add(this.$input);
          this.options.binding = true;
        }
        this._setInitAttr(0);
        if (this.handles[1]) {
          this.options.doubleSided = true;
          this.$handle2 = this.handles.eq(1);
          this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : (0, import_jquery.default)("#".concat(this.$handle2.attr("aria-controls")));
          if (!this.inputs[1]) {
            this.inputs = this.inputs.add(this.$input2);
          }
          this._setInitAttr(1);
        }
        this.setHandles();
        this._events();
        this.initialized = true;
      }
    }, {
      key: "setHandles",
      value: function setHandles() {
        var _this2 = this;
        if (this.handles[1]) {
          this._setHandlePos(this.$handle, this.inputs.eq(0).val(), function() {
            _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val());
          });
        } else {
          this._setHandlePos(this.$handle, this.inputs.eq(0).val());
        }
      }
    }, {
      key: "_reflow",
      value: function _reflow() {
        this.setHandles();
      }
      /**
      * @function
      * @private
      * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
      */
    }, {
      key: "_pctOfBar",
      value: function _pctOfBar(value) {
        var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);
        switch (this.options.positionValueFunction) {
          case "pow":
            pctOfBar = this._logTransform(pctOfBar);
            break;
          case "log":
            pctOfBar = this._powTransform(pctOfBar);
            break;
        }
        return pctOfBar.toFixed(2);
      }
      /**
      * @function
      * @private
      * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
      */
    }, {
      key: "_value",
      value: function _value(pctOfBar) {
        switch (this.options.positionValueFunction) {
          case "pow":
            pctOfBar = this._powTransform(pctOfBar);
            break;
          case "log":
            pctOfBar = this._logTransform(pctOfBar);
            break;
        }
        var value;
        if (this.options.vertical) {
          value = parseFloat(this.options.end) + pctOfBar * (this.options.start - this.options.end);
        } else {
          value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);
        }
        return value;
      }
      /**
      * @function
      * @private
      * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
      */
    }, {
      key: "_logTransform",
      value: function _logTransform(value) {
        return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
      }
      /**
      * @function
      * @private
      * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
      */
    }, {
      key: "_powTransform",
      value: function _powTransform(value) {
        return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
      }
      /**
       * Sets the position of the selected handle and fill bar.
       * @function
       * @private
       * @param {jQuery} $hndl - the selected handle to move.
       * @param {Number} location - floating point between the start and end values of the slider bar.
       * @param {Function} cb - callback function to fire on completion.
       * @fires Slider#moved
       * @fires Slider#changed
       */
    }, {
      key: "_setHandlePos",
      value: function _setHandlePos($hndl, location2, cb) {
        if (this.$element.hasClass(this.options.disabledClass)) {
          return;
        }
        location2 = parseFloat(location2);
        if (location2 < this.options.start) {
          location2 = this.options.start;
        } else if (location2 > this.options.end) {
          location2 = this.options.end;
        }
        var isDbl = this.options.doubleSided;
        if (isDbl) {
          if (this.handles.index($hndl) === 0) {
            var h2Val = parseFloat(this.$handle2.attr("aria-valuenow"));
            location2 = location2 >= h2Val ? h2Val - this.options.step : location2;
          } else {
            var h1Val = parseFloat(this.$handle.attr("aria-valuenow"));
            location2 = location2 <= h1Val ? h1Val + this.options.step : location2;
          }
        }
        var _this = this, vert = this.options.vertical, hOrW = vert ? "height" : "width", lOrT = vert ? "top" : "left", handleDim = $hndl[0].getBoundingClientRect()[hOrW], elemDim = this.$element[0].getBoundingClientRect()[hOrW], pctOfBar = this._pctOfBar(location2), pxToMove = (elemDim - handleDim) * pctOfBar, movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal);
        location2 = parseFloat(location2.toFixed(this.options.decimal));
        var css = {};
        this._setValues($hndl, location2);
        if (isDbl) {
          var isLeftHndl = this.handles.index($hndl) === 0, dim, handlePct = Math.floor(percent(handleDim, elemDim) * 100);
          if (isLeftHndl) {
            css[lOrT] = "".concat(movement, "%");
            dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct;
            if (cb && typeof cb === "function") {
              cb();
            }
          } else {
            var handlePos = parseFloat(this.$handle[0].style[lOrT]);
            dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
          }
          css["min-".concat(hOrW)] = "".concat(dim, "%");
        }
        var moveTime = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
        Move(moveTime, $hndl, function() {
          if (isNaN(movement)) {
            $hndl.css(lOrT, "".concat(pctOfBar * 100, "%"));
          } else {
            $hndl.css(lOrT, "".concat(movement, "%"));
          }
          if (!_this.options.doubleSided) {
            _this.$fill.css(hOrW, "".concat(pctOfBar * 100, "%"));
          } else {
            _this.$fill.css(css);
          }
        });
        if (this.initialized) {
          this.$element.one("finished.zf.animate", function() {
            _this.$element.trigger("moved.zf.slider", [$hndl]);
          });
          clearTimeout(_this.timeout);
          _this.timeout = setTimeout(function() {
            _this.$element.trigger("changed.zf.slider", [$hndl]);
          }, _this.options.changedDelay);
        }
      }
      /**
       * Sets the initial attribute for the slider element.
       * @function
       * @private
       * @param {Number} idx - index of the current handle/input to use.
       */
    }, {
      key: "_setInitAttr",
      value: function _setInitAttr(idx) {
        var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
        var id2 = this.inputs.eq(idx).attr("id") || GetYoDigits(6, "slider");
        this.inputs.eq(idx).attr({
          "id": id2,
          "max": this.options.end,
          "min": this.options.start,
          "step": this.options.step
        });
        this.inputs.eq(idx).val(initVal);
        this.handles.eq(idx).attr({
          "role": "slider",
          "aria-controls": id2,
          "aria-valuemax": this.options.end,
          "aria-valuemin": this.options.start,
          "aria-valuenow": initVal,
          "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
          "tabindex": 0
        });
      }
      /**
       * Sets the input and `aria-valuenow` values for the slider element.
       * @function
       * @private
       * @param {jQuery} $handle - the currently selected handle.
       * @param {Number} val - floating point of the new value.
       */
    }, {
      key: "_setValues",
      value: function _setValues($handle, val) {
        var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
        this.inputs.eq(idx).val(val);
        $handle.attr("aria-valuenow", val);
      }
      /**
       * Handles events on the slider element.
       * Calculates the new location of the current handle.
       * If there are two handles and the bar was clicked, it determines which handle to move.
       * @function
       * @private
       * @param {Object} e - the `event` object passed from the listener.
       * @param {jQuery} $handle - the current handle to calculate for, if selected.
       * @param {Number} val - floating point number for the new value of the slider.
       * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
       */
    }, {
      key: "_handleEvent",
      value: function _handleEvent(e, $handle, val) {
        var value;
        if (!val) {
          e.preventDefault();
          var _this = this, vertical = this.options.vertical, param = vertical ? "height" : "width", direction = vertical ? "top" : "left", eventOffset = vertical ? e.pageY : e.pageX, barDim = this.$element[0].getBoundingClientRect()[param], windowScroll = vertical ? (0, import_jquery.default)(window).scrollTop() : (0, import_jquery.default)(window).scrollLeft();
          var elemOffset = this.$element.offset()[direction];
          if (e.clientY === e.pageY) {
            eventOffset = eventOffset + windowScroll;
          }
          var eventFromBar = eventOffset - elemOffset;
          var barXY;
          if (eventFromBar < 0) {
            barXY = 0;
          } else if (eventFromBar > barDim) {
            barXY = barDim;
          } else {
            barXY = eventFromBar;
          }
          var offsetPct = percent(barXY, barDim);
          value = this._value(offsetPct);
          if (rtl() && !this.options.vertical) {
            value = this.options.end - value;
          }
          value = _this._adjustValue(null, value);
          if (!$handle) {
            var firstHndlPos = absPosition(this.$handle, direction, barXY, param), secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
            $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
          }
        } else {
          value = this._adjustValue(null, val);
        }
        this._setHandlePos($handle, value);
      }
      /**
       * Adjustes value for handle in regard to step value. returns adjusted value
       * @function
       * @private
       * @param {jQuery} $handle - the selected handle.
       * @param {Number} value - value to adjust. used if $handle is falsy
       */
    }, {
      key: "_adjustValue",
      value: function _adjustValue($handle, value) {
        var val, step = this.options.step, div = parseFloat(step / 2), left, previousVal, nextVal;
        if (!!$handle) {
          val = parseFloat($handle.attr("aria-valuenow"));
        } else {
          val = value;
        }
        if (val >= 0) {
          left = val % step;
        } else {
          left = step + val % step;
        }
        previousVal = val - left;
        nextVal = previousVal + step;
        if (left === 0) {
          return val;
        }
        val = val >= previousVal + div ? nextVal : previousVal;
        return val;
      }
      /**
       * Adds event listeners to the slider elements.
       * @function
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        this._eventsForHandle(this.$handle);
        if (this.handles[1]) {
          this._eventsForHandle(this.$handle2);
        }
      }
      /**
       * Adds event listeners a particular handle
       * @function
       * @private
       * @param {jQuery} $handle - the current handle to apply listeners to.
       */
    }, {
      key: "_eventsForHandle",
      value: function _eventsForHandle($handle) {
        var _this = this, curHandle;
        var handleChangeEvent = function handleChangeEvent2(e) {
          var idx = _this.inputs.index((0, import_jquery.default)(this));
          _this._handleEvent(e, _this.handles.eq(idx), (0, import_jquery.default)(this).val());
        };
        this.inputs.off("keyup.zf.slider").on("keyup.zf.slider", function(e) {
          if (e.keyCode === 13)
            handleChangeEvent.call(this, e);
        });
        this.inputs.off("change.zf.slider").on("change.zf.slider", handleChangeEvent);
        if (this.options.clickSelect) {
          this.$element.off("click.zf.slider").on("click.zf.slider", function(e) {
            if (_this.$element.data("dragging")) {
              return false;
            }
            if (!(0, import_jquery.default)(e.target).is("[data-slider-handle]")) {
              if (_this.options.doubleSided) {
                _this._handleEvent(e);
              } else {
                _this._handleEvent(e, _this.$handle);
              }
            }
          });
        }
        if (this.options.draggable) {
          this.handles.addTouch();
          var $body = (0, import_jquery.default)("body");
          $handle.off("mousedown.zf.slider").on("mousedown.zf.slider", function(e) {
            $handle.addClass("is-dragging");
            _this.$fill.addClass("is-dragging");
            _this.$element.data("dragging", true);
            curHandle = (0, import_jquery.default)(e.currentTarget);
            $body.on("mousemove.zf.slider", function(ev) {
              ev.preventDefault();
              _this._handleEvent(ev, curHandle);
            }).on("mouseup.zf.slider", function(ev) {
              _this._handleEvent(ev, curHandle);
              $handle.removeClass("is-dragging");
              _this.$fill.removeClass("is-dragging");
              _this.$element.data("dragging", false);
              $body.off("mousemove.zf.slider mouseup.zf.slider");
            });
          }).on("selectstart.zf.slider touchmove.zf.slider", function(e) {
            e.preventDefault();
          });
        }
        $handle.off("keydown.zf.slider").on("keydown.zf.slider", function(e) {
          var _$handle = (0, import_jquery.default)(this), idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0, oldValue = parseFloat($handle.attr("aria-valuenow")), newValue;
          Keyboard.handleKey(e, "Slider", {
            decrease: function decrease() {
              newValue = oldValue - _this.options.step;
            },
            increase: function increase() {
              newValue = oldValue + _this.options.step;
            },
            decreaseFast: function decreaseFast() {
              newValue = oldValue - _this.options.step * 10;
            },
            increaseFast: function increaseFast() {
              newValue = oldValue + _this.options.step * 10;
            },
            min: function min() {
              newValue = _this.options.start;
            },
            max: function max() {
              newValue = _this.options.end;
            },
            handled: function handled() {
              e.preventDefault();
              _this._setHandlePos(_$handle, newValue);
            }
          });
        });
      }
      /**
       * Destroys the slider plugin.
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.handles.off(".zf.slider");
        this.inputs.off(".zf.slider");
        this.$element.off(".zf.slider");
        clearTimeout(this.timeout);
      }
    }]);
    return Slider2;
  }(Plugin);
  Slider.defaults = {
    /**
     * Minimum value for the slider scale.
     * @option
     * @type {number}
     * @default 0
     */
    start: 0,
    /**
     * Maximum value for the slider scale.
     * @option
     * @type {number}
     * @default 100
     */
    end: 100,
    /**
     * Minimum value change per change event.
     * @option
     * @type {number}
     * @default 1
     */
    step: 1,
    /**
     * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
     * @option
     * @type {number}
     * @default 0
     */
    initialStart: 0,
    /**
     * Value at which the right handle/second input should be set to on initialization.
     * @option
     * @type {number}
     * @default 100
     */
    initialEnd: 100,
    /**
     * Allows the input to be located outside the container and visible. Set to by the JS
     * @option
     * @type {boolean}
     * @default false
     */
    binding: false,
    /**
     * Allows the user to click/tap on the slider bar to select a value.
     * @option
     * @type {boolean}
     * @default true
     */
    clickSelect: true,
    /**
     * Set to true and use the `vertical` class to change alignment to vertical.
     * @option
     * @type {boolean}
     * @default false
     */
    vertical: false,
    /**
     * Allows the user to drag the slider handle(s) to select a value.
     * @option
     * @type {boolean}
     * @default true
     */
    draggable: true,
    /**
     * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
     * @option
     * @type {boolean}
     * @default false
     */
    disabled: false,
    /**
     * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
     * @option
     * @type {boolean}
     * @default false
     */
    doubleSided: false,
    /**
     * Potential future feature.
     */
    // steps: 100,
    /**
     * Number of decimal places the plugin should go to for floating point precision.
     * @option
     * @type {number}
     * @default 2
     */
    decimal: 2,
    /**
     * Time delay for dragged elements.
     */
    // dragDelay: 0,
    /**
     * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
     * @option
     * @type {number}
     * @default 200
     */
    moveTime: 200,
    //update this if changing the transition time in the sass
    /**
     * Class applied to disabled sliders.
     * @option
     * @type {string}
     * @default 'disabled'
     */
    disabledClass: "disabled",
    /**
     * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
     * @option
     * @type {boolean}
     * @default false
     */
    invertVertical: false,
    /**
     * Milliseconds before the `changed.zf-slider` event is triggered after value change.
     * @option
     * @type {number}
     * @default 500
     */
    changedDelay: 500,
    /**
    * Basevalue for non-linear sliders
    * @option
    * @type {number}
    * @default 5
    */
    nonLinearBase: 5,
    /**
    * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
    * @option
    * @type {string}
    * @default 'linear'
    */
    positionValueFunction: "linear"
  };
  function percent(frac, num) {
    return frac / num;
  }
  function absPosition($handle, dir, clickPos, param) {
    return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
  }
  function baseLog(base, value) {
    return Math.log(value) / Math.log(base);
  }
  var Sticky = /* @__PURE__ */ function(_Plugin) {
    _inherits(Sticky2, _Plugin);
    var _super = _createSuper(Sticky2);
    function Sticky2() {
      _classCallCheck(this, Sticky2);
      return _super.apply(this, arguments);
    }
    _createClass(Sticky2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of a sticky thing.
         * @class
         * @name Sticky
         * @param {jQuery} element - jQuery object to make sticky.
         * @param {Object} options - options object passed when creating the element programmatically.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Sticky2.defaults, this.$element.data(), options);
          this.className = "Sticky";
          Triggers.init(import_jquery.default);
          this._init();
        }
      )
      /**
       * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
       * @function
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        MediaQuery._init();
        var $parent = this.$element.parent("[data-sticky-container]"), id2 = this.$element[0].id || GetYoDigits(6, "sticky"), _this = this;
        if ($parent.length) {
          this.$container = $parent;
        } else {
          this.wasWrapped = true;
          this.$element.wrap(this.options.container);
          this.$container = this.$element.parent();
        }
        this.$container.addClass(this.options.containerClass);
        this.$element.addClass(this.options.stickyClass).attr({
          "data-resize": id2,
          "data-mutate": id2
        });
        if (this.options.anchor !== "") {
          (0, import_jquery.default)("#" + _this.options.anchor).attr({
            "data-mutate": id2
          });
        }
        this.scrollCount = this.options.checkEvery;
        this.isStuck = false;
        this.onLoadListener = onLoad((0, import_jquery.default)(window), function() {
          _this.containerHeight = _this.$element.css("display") === "none" ? 0 : _this.$element[0].getBoundingClientRect().height;
          _this.$container.css("height", _this.containerHeight);
          _this.elemHeight = _this.containerHeight;
          if (_this.options.anchor !== "") {
            _this.$anchor = (0, import_jquery.default)("#" + _this.options.anchor);
          } else {
            _this._parsePoints();
          }
          _this._setSizes(function() {
            var scroll = window.pageYOffset;
            _this._calc(false, scroll);
            if (!_this.isStuck) {
              _this._removeSticky(scroll >= _this.topPoint ? false : true);
            }
          });
          _this._events(id2.split("-").reverse().join("-"));
        });
      }
      /**
       * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
       * @function
       * @private
       */
    }, {
      key: "_parsePoints",
      value: function _parsePoints() {
        var top = this.options.topAnchor === "" ? 1 : this.options.topAnchor, btm = this.options.btmAnchor === "" ? document.documentElement.scrollHeight : this.options.btmAnchor, pts = [top, btm], breaks = {};
        for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
          var pt;
          if (typeof pts[i] === "number") {
            pt = pts[i];
          } else {
            var place = pts[i].split(":"), anchor = (0, import_jquery.default)("#".concat(place[0]));
            pt = anchor.offset().top;
            if (place[1] && place[1].toLowerCase() === "bottom") {
              pt += anchor[0].getBoundingClientRect().height;
            }
          }
          breaks[i] = pt;
        }
        this.points = breaks;
        return;
      }
      /**
       * Adds event handlers for the scrolling element.
       * @private
       * @param {String} id - pseudo-random id for unique scroll event listener.
       */
    }, {
      key: "_events",
      value: function _events(id2) {
        var _this = this, scrollListener2 = this.scrollListener = "scroll.zf.".concat(id2);
        if (this.isOn) {
          return;
        }
        if (this.canStick) {
          this.isOn = true;
          (0, import_jquery.default)(window).off(scrollListener2).on(scrollListener2, function() {
            if (_this.scrollCount === 0) {
              _this.scrollCount = _this.options.checkEvery;
              _this._setSizes(function() {
                _this._calc(false, window.pageYOffset);
              });
            } else {
              _this.scrollCount--;
              _this._calc(false, window.pageYOffset);
            }
          });
        }
        this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
          _this._eventsHandler(id2);
        });
        this.$element.on("mutateme.zf.trigger", function() {
          _this._eventsHandler(id2);
        });
        if (this.$anchor) {
          this.$anchor.on("mutateme.zf.trigger", function() {
            _this._eventsHandler(id2);
          });
        }
      }
      /**
       * Handler for events.
       * @private
       * @param {String} id - pseudo-random id for unique scroll event listener.
       */
    }, {
      key: "_eventsHandler",
      value: function _eventsHandler(id2) {
        var _this = this, scrollListener2 = this.scrollListener = "scroll.zf.".concat(id2);
        _this._setSizes(function() {
          _this._calc(false);
          if (_this.canStick) {
            if (!_this.isOn) {
              _this._events(id2);
            }
          } else if (_this.isOn) {
            _this._pauseListeners(scrollListener2);
          }
        });
      }
      /**
       * Removes event handlers for scroll and change events on anchor.
       * @fires Sticky#pause
       * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
       */
    }, {
      key: "_pauseListeners",
      value: function _pauseListeners(scrollListener2) {
        this.isOn = false;
        (0, import_jquery.default)(window).off(scrollListener2);
        this.$element.trigger("pause.zf.sticky");
      }
      /**
       * Called on every `scroll` event and on `_init`
       * fires functions based on booleans and cached values
       * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
       * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
       */
    }, {
      key: "_calc",
      value: function _calc(checkSizes, scroll) {
        if (checkSizes) {
          this._setSizes();
        }
        if (!this.canStick) {
          if (this.isStuck) {
            this._removeSticky(true);
          }
          return false;
        }
        if (!scroll) {
          scroll = window.pageYOffset;
        }
        if (scroll >= this.topPoint) {
          if (scroll <= this.bottomPoint) {
            if (!this.isStuck) {
              this._setSticky();
            }
          } else {
            if (this.isStuck) {
              this._removeSticky(false);
            }
          }
        } else {
          if (this.isStuck) {
            this._removeSticky(true);
          }
        }
      }
      /**
       * Causes the $element to become stuck.
       * Adds `position: fixed;`, and helper classes.
       * @fires Sticky#stuckto
       * @function
       * @private
       */
    }, {
      key: "_setSticky",
      value: function _setSticky() {
        var _this = this, stickTo = this.options.stickTo, mrgn = stickTo === "top" ? "marginTop" : "marginBottom", notStuckTo = stickTo === "top" ? "bottom" : "top", css = {};
        css[mrgn] = "".concat(this.options[mrgn], "em");
        css[stickTo] = 0;
        css[notStuckTo] = "auto";
        this.isStuck = true;
        this.$element.removeClass("is-anchored is-at-".concat(notStuckTo)).addClass("is-stuck is-at-".concat(stickTo)).css(css).trigger("sticky.zf.stuckto:".concat(stickTo));
        this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
          _this._setSizes();
        });
      }
      /**
       * Causes the $element to become unstuck.
       * Removes `position: fixed;`, and helper classes.
       * Adds other helper classes.
       * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
       * @fires Sticky#unstuckfrom
       * @private
       */
    }, {
      key: "_removeSticky",
      value: function _removeSticky(isTop) {
        var stickTo = this.options.stickTo, stickToTop = stickTo === "top", css = {}, anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight, mrgn = stickToTop ? "marginTop" : "marginBottom", topOrBottom = isTop ? "top" : "bottom";
        css[mrgn] = 0;
        css.bottom = "auto";
        if (isTop) {
          css.top = 0;
        } else {
          css.top = anchorPt;
        }
        this.isStuck = false;
        this.$element.removeClass("is-stuck is-at-".concat(stickTo)).addClass("is-anchored is-at-".concat(topOrBottom)).css(css).trigger("sticky.zf.unstuckfrom:".concat(topOrBottom));
      }
      /**
       * Sets the $element and $container sizes for plugin.
       * Calls `_setBreakPoints`.
       * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
       * @private
       */
    }, {
      key: "_setSizes",
      value: function _setSizes(cb) {
        this.canStick = MediaQuery.is(this.options.stickyOn);
        if (!this.canStick) {
          if (cb && typeof cb === "function") {
            cb();
          }
        }
        var newElemWidth = this.$container[0].getBoundingClientRect().width, comp = window.getComputedStyle(this.$container[0]), pdngl = parseInt(comp["padding-left"], 10), pdngr = parseInt(comp["padding-right"], 10);
        if (this.$anchor && this.$anchor.length) {
          this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
        } else {
          this._parsePoints();
        }
        this.$element.css({
          "max-width": "".concat(newElemWidth - pdngl - pdngr, "px")
        });
        if (this.options.dynamicHeight || !this.containerHeight) {
          var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
          newContainerHeight = this.$element.css("display") === "none" ? 0 : newContainerHeight;
          this.$container.css("height", newContainerHeight);
          this.containerHeight = newContainerHeight;
        }
        this.elemHeight = this.containerHeight;
        if (!this.isStuck) {
          if (this.$element.hasClass("is-at-bottom")) {
            var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
            this.$element.css("top", anchorPt);
          }
        }
        this._setBreakPoints(this.containerHeight, function() {
          if (cb && typeof cb === "function") {
            cb();
          }
        });
      }
      /**
       * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
       * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
       * @param {Function} cb - optional callback function to be called on completion.
       * @private
       */
    }, {
      key: "_setBreakPoints",
      value: function _setBreakPoints(elemHeight, cb) {
        if (!this.canStick) {
          if (cb && typeof cb === "function") {
            cb();
          } else {
            return false;
          }
        }
        var mTop = emCalc(this.options.marginTop), mBtm = emCalc(this.options.marginBottom), topPoint = this.points ? this.points[0] : this.$anchor.offset().top, bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight, winHeight = window.innerHeight;
        if (this.options.stickTo === "top") {
          topPoint -= mTop;
          bottomPoint -= elemHeight + mTop;
        } else if (this.options.stickTo === "bottom") {
          topPoint -= winHeight - (elemHeight + mBtm);
          bottomPoint -= winHeight - mBtm;
        }
        this.topPoint = topPoint;
        this.bottomPoint = bottomPoint;
        if (cb && typeof cb === "function") {
          cb();
        }
      }
      /**
       * Destroys the current sticky element.
       * Resets the element to the top position first.
       * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this._removeSticky(true);
        this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
          height: "",
          top: "",
          bottom: "",
          "max-width": ""
        }).off("resizeme.zf.trigger").off("mutateme.zf.trigger");
        if (this.$anchor && this.$anchor.length) {
          this.$anchor.off("change.zf.sticky");
        }
        if (this.scrollListener)
          (0, import_jquery.default)(window).off(this.scrollListener);
        if (this.onLoadListener)
          (0, import_jquery.default)(window).off(this.onLoadListener);
        if (this.wasWrapped) {
          this.$element.unwrap();
        } else {
          this.$container.removeClass(this.options.containerClass).css({
            height: ""
          });
        }
      }
    }]);
    return Sticky2;
  }(Plugin);
  Sticky.defaults = {
    /**
     * Customizable container template. Add your own classes for styling and sizing.
     * @option
     * @type {string}
     * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
     */
    container: "<div data-sticky-container></div>",
    /**
     * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
     * @option
     * @type {string}
     * @default 'top'
     */
    stickTo: "top",
    /**
     * If anchored to a single element, the id of that element.
     * @option
     * @type {string}
     * @default ''
     */
    anchor: "",
    /**
     * If using more than one element as anchor points, the id of the top anchor.
     * @option
     * @type {string}
     * @default ''
     */
    topAnchor: "",
    /**
     * If using more than one element as anchor points, the id of the bottom anchor.
     * @option
     * @type {string}
     * @default ''
     */
    btmAnchor: "",
    /**
     * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
     * @option
     * @type {number}
     * @default 1
     */
    marginTop: 1,
    /**
     * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
     * @option
     * @type {number}
     * @default 1
     */
    marginBottom: 1,
    /**
     * Breakpoint string that is the minimum screen size an element should become sticky.
     * @option
     * @type {string}
     * @default 'medium'
     */
    stickyOn: "medium",
    /**
     * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
     * @option
     * @type {string}
     * @default 'sticky'
     */
    stickyClass: "sticky",
    /**
     * Class applied to sticky container. Foundation defaults to `sticky-container`.
     * @option
     * @type {string}
     * @default 'sticky-container'
     */
    containerClass: "sticky-container",
    /**
     * If true (by default), keep the sticky container the same height as the element. Otherwise, the container height is set once and does not change.
     * @option
     * @type {boolean}
     * @default true
     */
    dynamicHeight: true,
    /**
     * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
     * @option
     * @type {number}
     * @default -1
     */
    checkEvery: -1
  };
  function emCalc(em) {
    return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
  }
  var Tabs = /* @__PURE__ */ function(_Plugin) {
    _inherits(Tabs2, _Plugin);
    var _super = _createSuper(Tabs2);
    function Tabs2() {
      _classCallCheck(this, Tabs2);
      return _super.apply(this, arguments);
    }
    _createClass(Tabs2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of tabs.
         * @class
         * @name Tabs
         * @fires Tabs#init
         * @param {jQuery} element - jQuery object to make into tabs.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Tabs2.defaults, this.$element.data(), options);
          this.className = "Tabs";
          this._init();
          Keyboard.register("Tabs", {
            "ENTER": "open",
            "SPACE": "open",
            "ARROW_RIGHT": "next",
            "ARROW_UP": "previous",
            "ARROW_DOWN": "next",
            "ARROW_LEFT": "previous"
            // 'TAB': 'next',
            // 'SHIFT_TAB': 'previous'
          });
        }
      )
      /**
       * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        var _this2 = this;
        var _this = this;
        this._isInitializing = true;
        this.$element.attr({
          "role": "tablist"
        });
        this.$tabTitles = this.$element.find(".".concat(this.options.linkClass));
        this.$tabContent = (0, import_jquery.default)('[data-tabs-content="'.concat(this.$element[0].id, '"]'));
        this.$tabTitles.each(function() {
          var $elem = (0, import_jquery.default)(this), $link = $elem.find("a"), isActive = $elem.hasClass("".concat(_this.options.linkActiveClass)), hash = $link.attr("data-tabs-target") || $link[0].hash.slice(1), linkId = $link[0].id ? $link[0].id : "".concat(hash, "-label"), $tabContent = (0, import_jquery.default)("#".concat(hash));
          $elem.attr({
            "role": "presentation"
          });
          $link.attr({
            "role": "tab",
            "aria-controls": hash,
            "aria-selected": isActive,
            "id": linkId,
            "tabindex": isActive ? "0" : "-1"
          });
          $tabContent.attr({
            "role": "tabpanel",
            "aria-labelledby": linkId
          });
          if (isActive) {
            _this._initialAnchor = "#".concat(hash);
          }
          if (!isActive) {
            $tabContent.attr("aria-hidden", "true");
          }
          if (isActive && _this.options.autoFocus) {
            _this.onLoadListener = onLoad((0, import_jquery.default)(window), function() {
              (0, import_jquery.default)("html, body").animate({
                scrollTop: $elem.offset().top
              }, _this.options.deepLinkSmudgeDelay, function() {
                $link.focus();
              });
            });
          }
        });
        if (this.options.matchHeight) {
          var $images = this.$tabContent.find("img");
          if ($images.length) {
            onImagesLoaded($images, this._setHeight.bind(this));
          } else {
            this._setHeight();
          }
        }
        this._checkDeepLink = function() {
          var anchor = window.location.hash;
          if (!anchor.length) {
            if (_this2._isInitializing)
              return;
            if (_this2._initialAnchor)
              anchor = _this2._initialAnchor;
          }
          var anchorNoHash = anchor.indexOf("#") >= 0 ? anchor.slice(1) : anchor;
          var $anchor = anchorNoHash && (0, import_jquery.default)("#".concat(anchorNoHash));
          var $link = anchor && _this2.$element.find('[href$="'.concat(anchor, '"],[data-tabs-target="').concat(anchorNoHash, '"]')).first();
          var isOwnAnchor = !!($anchor.length && $link.length);
          if (isOwnAnchor) {
            if ($anchor && $anchor.length && $link && $link.length) {
              _this2.selectTab($anchor, true);
            } else {
              _this2._collapse();
            }
            if (_this2.options.deepLinkSmudge) {
              var offset = _this2.$element.offset();
              (0, import_jquery.default)("html, body").animate({
                scrollTop: offset.top - _this2.options.deepLinkSmudgeOffset
              }, _this2.options.deepLinkSmudgeDelay);
            }
            _this2.$element.trigger("deeplink.zf.tabs", [$link, $anchor]);
          }
        };
        if (this.options.deepLink) {
          this._checkDeepLink();
        }
        this._events();
        this._isInitializing = false;
      }
      /**
       * Adds event handlers for items within the tabs.
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        this._addKeyHandler();
        this._addClickHandler();
        this._setHeightMqHandler = null;
        if (this.options.matchHeight) {
          this._setHeightMqHandler = this._setHeight.bind(this);
          (0, import_jquery.default)(window).on("changed.zf.mediaquery", this._setHeightMqHandler);
        }
        if (this.options.deepLink) {
          (0, import_jquery.default)(window).on("hashchange", this._checkDeepLink);
        }
      }
      /**
       * Adds click handlers for items within the tabs.
       * @private
       */
    }, {
      key: "_addClickHandler",
      value: function _addClickHandler() {
        var _this = this;
        this.$element.off("click.zf.tabs").on("click.zf.tabs", ".".concat(this.options.linkClass), function(e) {
          e.preventDefault();
          _this._handleTabChange((0, import_jquery.default)(this));
        });
      }
      /**
       * Adds keyboard event handlers for items within the tabs.
       * @private
       */
    }, {
      key: "_addKeyHandler",
      value: function _addKeyHandler() {
        var _this = this;
        this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(e) {
          if (e.which === 9)
            return;
          var $element = (0, import_jquery.default)(this), $elements = $element.parent("ul").children("li"), $prevElement, $nextElement;
          $elements.each(function(i) {
            if ((0, import_jquery.default)(this).is($element)) {
              if (_this.options.wrapOnKeys) {
                $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
                $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
              } else {
                $prevElement = $elements.eq(Math.max(0, i - 1));
                $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
              }
              return;
            }
          });
          Keyboard.handleKey(e, "Tabs", {
            open: function open3() {
              $element.find('[role="tab"]').focus();
              _this._handleTabChange($element);
            },
            previous: function previous() {
              $prevElement.find('[role="tab"]').focus();
              _this._handleTabChange($prevElement);
            },
            next: function next2() {
              $nextElement.find('[role="tab"]').focus();
              _this._handleTabChange($nextElement);
            },
            handled: function handled() {
              e.preventDefault();
            }
          });
        });
      }
      /**
       * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
       * @param {jQuery} $target - Tab to open.
       * @param {boolean} historyHandled - browser has already handled a history update
       * @fires Tabs#change
       * @function
       */
    }, {
      key: "_handleTabChange",
      value: function _handleTabChange($target, historyHandled) {
        if ($target.hasClass("".concat(this.options.linkActiveClass))) {
          if (this.options.activeCollapse) {
            this._collapse();
          }
          return;
        }
        var $oldTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)), $tabLink = $target.find('[role="tab"]'), target = $tabLink.attr("data-tabs-target"), anchor = target && target.length ? "#".concat(target) : $tabLink[0].hash, $targetContent = this.$tabContent.find(anchor);
        this._collapseTab($oldTab);
        this._openTab($target);
        if (this.options.deepLink && !historyHandled) {
          if (this.options.updateHistory) {
            history.pushState({}, "", anchor);
          } else {
            history.replaceState({}, "", anchor);
          }
        }
        this.$element.trigger("change.zf.tabs", [$target, $targetContent]);
        $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
      }
      /**
       * Opens the tab `$targetContent` defined by `$target`.
       * @param {jQuery} $target - Tab to open.
       * @function
       */
    }, {
      key: "_openTab",
      value: function _openTab($target) {
        var $tabLink = $target.find('[role="tab"]'), hash = $tabLink.attr("data-tabs-target") || $tabLink[0].hash.slice(1), $targetContent = this.$tabContent.find("#".concat(hash));
        $target.addClass("".concat(this.options.linkActiveClass));
        $tabLink.attr({
          "aria-selected": "true",
          "tabindex": "0"
        });
        $targetContent.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden");
      }
      /**
       * Collapses `$targetContent` defined by `$target`.
       * @param {jQuery} $target - Tab to collapse.
       * @function
       */
    }, {
      key: "_collapseTab",
      value: function _collapseTab($target) {
        var $targetAnchor = $target.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
          "aria-selected": "false",
          "tabindex": -1
        });
        (0, import_jquery.default)("#".concat($targetAnchor.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({
          "aria-hidden": "true"
        });
      }
      /**
       * Collapses the active Tab.
       * @fires Tabs#collapse
       * @function
       */
    }, {
      key: "_collapse",
      value: function _collapse() {
        var $activeTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));
        if ($activeTab.length) {
          this._collapseTab($activeTab);
          this.$element.trigger("collapse.zf.tabs", [$activeTab]);
        }
      }
      /**
       * Public method for selecting a content pane to display.
       * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
       * @param {boolean} historyHandled - browser has already handled a history update
       * @function
       */
    }, {
      key: "selectTab",
      value: function selectTab(elem, historyHandled) {
        var idStr, hashIdStr;
        if (_typeof(elem) === "object") {
          idStr = elem[0].id;
        } else {
          idStr = elem;
        }
        if (idStr.indexOf("#") < 0) {
          hashIdStr = "#".concat(idStr);
        } else {
          hashIdStr = idStr;
          idStr = idStr.slice(1);
        }
        var $target = this.$tabTitles.has('[href$="'.concat(hashIdStr, '"],[data-tabs-target="').concat(idStr, '"]')).first();
        this._handleTabChange($target, historyHandled);
      }
    }, {
      key: "_setHeight",
      value: (
        /**
         * Sets the height of each panel to the height of the tallest panel.
         * If enabled in options, gets called on media query change.
         * If loading content via external source, can be called directly or with _reflow.
         * If enabled with `data-match-height="true"`, tabs sets to equal height
         * @function
         * @private
         */
        function _setHeight() {
          var max = 0, _this = this;
          if (!this.$tabContent) {
            return;
          }
          this.$tabContent.find(".".concat(this.options.panelClass)).css("min-height", "").each(function() {
            var panel = (0, import_jquery.default)(this), isActive = panel.hasClass("".concat(_this.options.panelActiveClass));
            if (!isActive) {
              panel.css({
                "visibility": "hidden",
                "display": "block"
              });
            }
            var temp = this.getBoundingClientRect().height;
            if (!isActive) {
              panel.css({
                "visibility": "",
                "display": ""
              });
            }
            max = temp > max ? temp : max;
          }).css("min-height", "".concat(max, "px"));
        }
      )
      /**
       * Destroys an instance of tabs.
       * @fires Tabs#destroyed
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide();
        if (this.options.matchHeight) {
          if (this._setHeightMqHandler != null) {
            (0, import_jquery.default)(window).off("changed.zf.mediaquery", this._setHeightMqHandler);
          }
        }
        if (this.options.deepLink) {
          (0, import_jquery.default)(window).off("hashchange", this._checkDeepLink);
        }
        if (this.onLoadListener) {
          (0, import_jquery.default)(window).off(this.onLoadListener);
        }
      }
    }]);
    return Tabs2;
  }(Plugin);
  Tabs.defaults = {
    /**
     * Link the location hash to the active pane.
     * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
     * @option
     * @type {boolean}
     * @default false
     */
    deepLink: false,
    /**
     * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
     * @option
     * @type {boolean}
     * @default false
     */
    deepLinkSmudge: false,
    /**
     * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
     * @option
     * @type {number}
     * @default 300
     */
    deepLinkSmudgeDelay: 300,
    /**
     * If `deepLinkSmudge` is enabled, animation offset from the top for the deep link adjustment
     * @option
     * @type {number}
     * @default 0
     */
    deepLinkSmudgeOffset: 0,
    /**
     * If `deepLink` is enabled, update the browser history with the open tab
     * @option
     * @type {boolean}
     * @default false
     */
    updateHistory: false,
    /**
     * Allows the window to scroll to content of active pane on load.
     * Not recommended if more than one tab panel per page.
     * @option
     * @type {boolean}
     * @default false
     */
    autoFocus: false,
    /**
     * Allows keyboard input to 'wrap' around the tab links.
     * @option
     * @type {boolean}
     * @default true
     */
    wrapOnKeys: true,
    /**
     * Allows the tab content panes to match heights if set to true.
     * @option
     * @type {boolean}
     * @default false
     */
    matchHeight: false,
    /**
     * Allows active tabs to collapse when clicked.
     * @option
     * @type {boolean}
     * @default false
     */
    activeCollapse: false,
    /**
     * Class applied to `li`'s in tab link list.
     * @option
     * @type {string}
     * @default 'tabs-title'
     */
    linkClass: "tabs-title",
    /**
     * Class applied to the active `li` in tab link list.
     * @option
     * @type {string}
     * @default 'is-active'
     */
    linkActiveClass: "is-active",
    /**
     * Class applied to the content containers.
     * @option
     * @type {string}
     * @default 'tabs-panel'
     */
    panelClass: "tabs-panel",
    /**
     * Class applied to the active content container.
     * @option
     * @type {string}
     * @default 'is-active'
     */
    panelActiveClass: "is-active"
  };
  var Toggler = /* @__PURE__ */ function(_Plugin) {
    _inherits(Toggler2, _Plugin);
    var _super = _createSuper(Toggler2);
    function Toggler2() {
      _classCallCheck(this, Toggler2);
      return _super.apply(this, arguments);
    }
    _createClass(Toggler2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of Toggler.
         * @class
         * @name Toggler
         * @fires Toggler#init
         * @param {Object} element - jQuery object to add the trigger to.
         * @param {Object} options - Overrides to the default plugin settings.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Toggler2.defaults, element.data(), options);
          this.className = "";
          this.className = "Toggler";
          Triggers.init(import_jquery.default);
          this._init();
          this._events();
        }
      )
      /**
       * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
       * @function
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        var id2 = this.$element[0].id, $triggers = (0, import_jquery.default)('[data-open~="'.concat(id2, '"], [data-close~="').concat(id2, '"], [data-toggle~="').concat(id2, '"]'));
        var input;
        if (this.options.animate) {
          input = this.options.animate.split(" ");
          this.animationIn = input[0];
          this.animationOut = input[1] || null;
          $triggers.attr("aria-expanded", !this.$element.is(":hidden"));
        } else {
          input = this.options.toggler;
          if (typeof input !== "string" || !input.length) {
            throw new Error(`The 'toggler' option containing the target class is required, got "`.concat(input, '"'));
          }
          this.className = input[0] === "." ? input.slice(1) : input;
          $triggers.attr("aria-expanded", this.$element.hasClass(this.className));
        }
        $triggers.each(function(index, trigger) {
          var $trigger = (0, import_jquery.default)(trigger);
          var controls = $trigger.attr("aria-controls") || "";
          var containsId = new RegExp("\\b".concat(RegExpEscape(id2), "\\b")).test(controls);
          if (!containsId)
            $trigger.attr("aria-controls", controls ? "".concat(controls, " ").concat(id2) : id2);
        });
      }
      /**
       * Initializes events for the toggle trigger.
       * @function
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this));
      }
      /**
       * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
       * @function
       * @fires Toggler#on
       * @fires Toggler#off
       */
    }, {
      key: "toggle",
      value: function toggle2() {
        this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]();
      }
    }, {
      key: "_toggleClass",
      value: function _toggleClass() {
        this.$element.toggleClass(this.className);
        var isOn = this.$element.hasClass(this.className);
        if (isOn) {
          this.$element.trigger("on.zf.toggler");
        } else {
          this.$element.trigger("off.zf.toggler");
        }
        this._updateARIA(isOn);
        this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger");
      }
    }, {
      key: "_toggleAnimate",
      value: function _toggleAnimate() {
        var _this = this;
        if (this.$element.is(":hidden")) {
          Motion.animateIn(this.$element, this.animationIn, function() {
            _this._updateARIA(true);
            this.trigger("on.zf.toggler");
            this.find("[data-mutate]").trigger("mutateme.zf.trigger");
          });
        } else {
          Motion.animateOut(this.$element, this.animationOut, function() {
            _this._updateARIA(false);
            this.trigger("off.zf.toggler");
            this.find("[data-mutate]").trigger("mutateme.zf.trigger");
          });
        }
      }
    }, {
      key: "_updateARIA",
      value: function _updateARIA(isOn) {
        var id2 = this.$element[0].id;
        (0, import_jquery.default)('[data-open="'.concat(id2, '"], [data-close="').concat(id2, '"], [data-toggle="').concat(id2, '"]')).attr({
          "aria-expanded": isOn ? true : false
        });
      }
      /**
       * Destroys the instance of Toggler on the element.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$element.off(".zf.toggler");
      }
    }]);
    return Toggler2;
  }(Plugin);
  Toggler.defaults = {
    /**
     * Class of the element to toggle. It can be provided with or without "."
     * @option
     * @type {string}
     */
    toggler: void 0,
    /**
     * Tells the plugin if the element should animated when toggled.
     * @option
     * @type {boolean}
     * @default false
     */
    animate: false
  };
  var Tooltip = /* @__PURE__ */ function(_Positionable) {
    _inherits(Tooltip2, _Positionable);
    var _super = _createSuper(Tooltip2);
    function Tooltip2() {
      _classCallCheck(this, Tooltip2);
      return _super.apply(this, arguments);
    }
    _createClass(Tooltip2, [{
      key: "_setup",
      value: (
        /**
         * Creates a new instance of a Tooltip.
         * @class
         * @name Tooltip
         * @fires Tooltip#init
         * @param {jQuery} element - jQuery object to attach a tooltip to.
         * @param {Object} options - object to extend the default configuration.
         */
        function _setup(element, options) {
          this.$element = element;
          this.options = import_jquery.default.extend({}, Tooltip2.defaults, this.$element.data(), options);
          this.className = "Tooltip";
          this.isActive = false;
          this.isClick = false;
          Triggers.init(import_jquery.default);
          this._init();
        }
      )
      /**
       * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        MediaQuery._init();
        var elemId = this.$element.attr("aria-describedby") || GetYoDigits(6, "tooltip");
        this.options.tipText = this.options.tipText || this.$element.attr("title");
        this.template = this.options.template ? (0, import_jquery.default)(this.options.template) : this._buildTemplate(elemId);
        if (this.options.allowHtml) {
          this.template.appendTo(document.body).html(this.options.tipText).hide();
        } else {
          this.template.appendTo(document.body).text(this.options.tipText).hide();
        }
        this.$element.attr({
          "title": "",
          "aria-describedby": elemId,
          "data-yeti-box": elemId,
          "data-toggle": elemId,
          "data-resize": elemId
        }).addClass(this.options.triggerClass);
        _get(_getPrototypeOf(Tooltip2.prototype), "_init", this).call(this);
        this._events();
      }
    }, {
      key: "_getDefaultPosition",
      value: function _getDefaultPosition() {
        var elementClassName = this.$element[0].className;
        if (this.$element[0] instanceof SVGElement) {
          elementClassName = elementClassName.baseVal;
        }
        var position = elementClassName.match(/\b(top|left|right|bottom)\b/g);
        return position ? position[0] : "top";
      }
    }, {
      key: "_getDefaultAlignment",
      value: function _getDefaultAlignment() {
        return "center";
      }
    }, {
      key: "_getHOffset",
      value: function _getHOffset() {
        if (this.position === "left" || this.position === "right") {
          return this.options.hOffset + this.options.tooltipWidth;
        } else {
          return this.options.hOffset;
        }
      }
    }, {
      key: "_getVOffset",
      value: function _getVOffset() {
        if (this.position === "top" || this.position === "bottom") {
          return this.options.vOffset + this.options.tooltipHeight;
        } else {
          return this.options.vOffset;
        }
      }
      /**
       * builds the tooltip element, adds attributes, and returns the template.
       * @private
       */
    }, {
      key: "_buildTemplate",
      value: function _buildTemplate(id2) {
        var templateClasses = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
        var $template = (0, import_jquery.default)("<div></div>").addClass(templateClasses).attr({
          "role": "tooltip",
          "aria-hidden": true,
          "data-is-active": false,
          "data-is-focus": false,
          "id": id2
        });
        return $template;
      }
      /**
       * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
       * if the tooltip is larger than the screen width, default to full width - any user selected margin
       * @private
       */
    }, {
      key: "_setPosition",
      value: function _setPosition() {
        _get(_getPrototypeOf(Tooltip2.prototype), "_setPosition", this).call(this, this.$element, this.template);
      }
      /**
       * reveals the tooltip, and fires an event to close any other open tooltips on the page
       * @fires Tooltip#closeme
       * @fires Tooltip#show
       * @function
       */
    }, {
      key: "show",
      value: function show() {
        if (this.options.showOn !== "all" && !MediaQuery.is(this.options.showOn)) {
          return false;
        }
        var _this = this;
        this.template.css("visibility", "hidden").show();
        this._setPosition();
        this.template.removeClass("top bottom left right").addClass(this.position);
        this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-" + this.alignment);
        this.$element.trigger("closeme.zf.tooltip", this.template.attr("id"));
        this.template.attr({
          "data-is-active": true,
          "aria-hidden": false
        });
        _this.isActive = true;
        this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {
        });
        this.$element.trigger("show.zf.tooltip");
      }
      /**
       * Hides the current tooltip, and resets the positioning class if it was changed due to collision
       * @fires Tooltip#hide
       * @function
       */
    }, {
      key: "hide",
      value: function hide() {
        var _this = this;
        this.template.stop().attr({
          "aria-hidden": true,
          "data-is-active": false
        }).fadeOut(this.options.fadeOutDuration, function() {
          _this.isActive = false;
          _this.isClick = false;
        });
        this.$element.trigger("hide.zf.tooltip");
      }
      /**
       * adds event listeners for the tooltip and its anchor
       * TODO combine some of the listeners like focus and mouseenter, etc.
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        var _this = this;
        var hasTouch = "ontouchstart" in window || typeof window.ontouchstart !== "undefined";
        var isFocus = false;
        if (hasTouch && this.options.disableForTouch)
          return;
        if (!this.options.disableHover) {
          this.$element.on("mouseenter.zf.tooltip", function() {
            if (!_this.isActive) {
              _this.timeout = setTimeout(function() {
                _this.show();
              }, _this.options.hoverDelay);
            }
          }).on("mouseleave.zf.tooltip", ignoreMousedisappear(function() {
            clearTimeout(_this.timeout);
            if (!isFocus || _this.isClick && !_this.options.clickOpen) {
              _this.hide();
            }
          }));
        }
        if (hasTouch) {
          this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function() {
            _this.isActive ? _this.hide() : _this.show();
          });
        }
        if (this.options.clickOpen) {
          this.$element.on("mousedown.zf.tooltip", function() {
            if (_this.isClick)
              ;
            else {
              _this.isClick = true;
              if ((_this.options.disableHover || !_this.$element.attr("tabindex")) && !_this.isActive) {
                _this.show();
              }
            }
          });
        } else {
          this.$element.on("mousedown.zf.tooltip", function() {
            _this.isClick = true;
          });
        }
        this.$element.on({
          // 'toggle.zf.trigger': this.toggle.bind(this),
          // 'close.zf.trigger': this.hide.bind(this)
          "close.zf.trigger": this.hide.bind(this)
        });
        this.$element.on("focus.zf.tooltip", function() {
          isFocus = true;
          if (_this.isClick) {
            if (!_this.options.clickOpen) {
              isFocus = false;
            }
            return false;
          } else {
            _this.show();
          }
        }).on("focusout.zf.tooltip", function() {
          isFocus = false;
          _this.isClick = false;
          _this.hide();
        }).on("resizeme.zf.trigger", function() {
          if (_this.isActive) {
            _this._setPosition();
          }
        });
      }
      /**
       * adds a toggle method, in addition to the static show() & hide() functions
       * @function
       */
    }, {
      key: "toggle",
      value: function toggle2() {
        if (this.isActive) {
          this.hide();
        } else {
          this.show();
        }
      }
      /**
       * Destroys an instance of tooltip, removes template element from the view.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box");
        this.template.remove();
      }
    }]);
    return Tooltip2;
  }(Positionable);
  Tooltip.defaults = {
    /**
     * Time, in ms, before a tooltip should open on hover.
     * @option
     * @type {number}
     * @default 200
     */
    hoverDelay: 200,
    /**
     * Time, in ms, a tooltip should take to fade into view.
     * @option
     * @type {number}
     * @default 150
     */
    fadeInDuration: 150,
    /**
     * Time, in ms, a tooltip should take to fade out of view.
     * @option
     * @type {number}
     * @default 150
     */
    fadeOutDuration: 150,
    /**
     * Disables hover events from opening the tooltip if set to true
     * @option
     * @type {boolean}
     * @default false
     */
    disableHover: false,
    /**
     * Disable the tooltip for touch devices.
     * This can be useful to make elements with a tooltip on it trigger their
     * action on the first tap instead of displaying the tooltip.
     * @option
     * @type {booelan}
     * @default false
     */
    disableForTouch: false,
    /**
     * Optional addtional classes to apply to the tooltip template on init.
     * @option
     * @type {string}
     * @default ''
     */
    templateClasses: "",
    /**
     * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
     * @option
     * @type {string}
     * @default 'tooltip'
     */
    tooltipClass: "tooltip",
    /**
     * Class applied to the tooltip anchor element.
     * @option
     * @type {string}
     * @default 'has-tip'
     */
    triggerClass: "has-tip",
    /**
     * Minimum breakpoint size at which to open the tooltip.
     * @option
     * @type {string}
     * @default 'small'
     */
    showOn: "small",
    /**
     * Custom template to be used to generate markup for tooltip.
     * @option
     * @type {string}
     * @default ''
     */
    template: "",
    /**
     * Text displayed in the tooltip template on open.
     * @option
     * @type {string}
     * @default ''
     */
    tipText: "",
    touchCloseText: "Tap to close.",
    /**
     * Allows the tooltip to remain open if triggered with a click or touch event.
     * @option
     * @type {boolean}
     * @default true
     */
    clickOpen: true,
    /**
     * Position of tooltip. Can be left, right, bottom, top, or auto.
     * @option
     * @type {string}
     * @default 'auto'
     */
    position: "auto",
    /**
     * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
     * @option
     * @type {string}
     * @default 'auto'
     */
    alignment: "auto",
    /**
     * Allow overlap of container/window. If false, tooltip will first try to
     * position as defined by data-position and data-alignment, but reposition if
     * it would cause an overflow.  @option
     * @type {boolean}
     * @default false
     */
    allowOverlap: false,
    /**
     * Allow overlap of only the bottom of the container. This is the most common
     * behavior for dropdowns, allowing the dropdown to extend the bottom of the
     * screen but not otherwise influence or break out of the container.
     * Less common for tooltips.
     * @option
     * @type {boolean}
     * @default false
     */
    allowBottomOverlap: false,
    /**
     * Distance, in pixels, the template should push away from the anchor on the Y axis.
     * @option
     * @type {number}
     * @default 0
     */
    vOffset: 0,
    /**
     * Distance, in pixels, the template should push away from the anchor on the X axis
     * @option
     * @type {number}
     * @default 0
     */
    hOffset: 0,
    /**
     * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
     * @option
     * @type {number}
     * @default 14
     */
    tooltipHeight: 14,
    /**
     * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
     * @option
     * @type {number}
     * @default 12
     */
    tooltipWidth: 12,
    /**
    * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
    * allowing HTML may open yourself up to XSS attacks.
    * @option
    * @type {boolean}
    * @default false
    */
    allowHtml: false
  };
  var MenuPlugins$1 = {
    tabs: {
      cssClass: "tabs",
      plugin: Tabs,
      open: function open(plugin2, target) {
        return plugin2.selectTab(target);
      },
      close: null,
      toggle: null
      /* not supported */
    },
    accordion: {
      cssClass: "accordion",
      plugin: Accordion,
      open: function open2(plugin2, target) {
        return plugin2.down((0, import_jquery.default)(target));
      },
      close: function close(plugin2, target) {
        return plugin2.up((0, import_jquery.default)(target));
      },
      toggle: function toggle(plugin2, target) {
        return plugin2.toggle((0, import_jquery.default)(target));
      }
    }
  };
  var ResponsiveAccordionTabs = /* @__PURE__ */ function(_Plugin) {
    _inherits(ResponsiveAccordionTabs2, _Plugin);
    var _super = _createSuper(ResponsiveAccordionTabs2);
    function ResponsiveAccordionTabs2(element, options) {
      var _this2;
      _classCallCheck(this, ResponsiveAccordionTabs2);
      _this2 = _super.call(this, element, options);
      return _possibleConstructorReturn(_this2, _this2.options.reflow && _this2.storezfData || _assertThisInitialized(_this2));
    }
    _createClass(ResponsiveAccordionTabs2, [{
      key: "_setup",
      value: function _setup(element, options) {
        this.$element = (0, import_jquery.default)(element);
        this.$element.data("zfPluginBase", this);
        this.options = import_jquery.default.extend({}, ResponsiveAccordionTabs2.defaults, this.$element.data(), options);
        this.rules = this.$element.data("responsive-accordion-tabs");
        this.currentMq = null;
        this.currentRule = null;
        this.currentPlugin = null;
        this.className = "ResponsiveAccordionTabs";
        if (!this.$element.attr("id")) {
          this.$element.attr("id", GetYoDigits(6, "responsiveaccordiontabs"));
        }
        this._init();
        this._events();
      }
      /**
       * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
       * @function
       * @private
       */
    }, {
      key: "_init",
      value: function _init2() {
        MediaQuery._init();
        if (typeof this.rules === "string") {
          var rulesTree = {};
          var rules = this.rules.split(" ");
          for (var i = 0; i < rules.length; i++) {
            var rule = rules[i].split("-");
            var ruleSize = rule.length > 1 ? rule[0] : "small";
            var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
            if (MenuPlugins$1[rulePlugin] !== null) {
              rulesTree[ruleSize] = MenuPlugins$1[rulePlugin];
            }
          }
          this.rules = rulesTree;
        }
        this._getAllOptions();
        if (!import_jquery.default.isEmptyObject(this.rules)) {
          this._checkMediaQueries();
        }
      }
    }, {
      key: "_getAllOptions",
      value: function _getAllOptions() {
        var _this = this;
        _this.allOptions = {};
        for (var key in MenuPlugins$1) {
          if (MenuPlugins$1.hasOwnProperty(key)) {
            var obj = MenuPlugins$1[key];
            try {
              var dummyPlugin = (0, import_jquery.default)("<ul></ul>");
              var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);
              for (var keyKey in tmpPlugin.options) {
                if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== "zfPlugin") {
                  var objObj = tmpPlugin.options[keyKey];
                  _this.allOptions[keyKey] = objObj;
                }
              }
              tmpPlugin.destroy();
            } catch (e) {
              console.warn("Warning: Problems getting Accordion/Tab options: ".concat(e));
            }
          }
        }
      }
      /**
       * Initializes events for the Menu.
       * @function
       * @private
       */
    }, {
      key: "_events",
      value: function _events() {
        this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this);
        (0, import_jquery.default)(window).on("changed.zf.mediaquery", this._changedZfMediaQueryHandler);
      }
      /**
       * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
       * @function
       * @private
       */
    }, {
      key: "_checkMediaQueries",
      value: function _checkMediaQueries() {
        var matchedMq, _this = this;
        import_jquery.default.each(this.rules, function(key) {
          if (MediaQuery.atLeast(key)) {
            matchedMq = key;
          }
        });
        if (!matchedMq)
          return;
        if (this.currentPlugin instanceof this.rules[matchedMq].plugin)
          return;
        import_jquery.default.each(MenuPlugins$1, function(key, value) {
          _this.$element.removeClass(value.cssClass);
        });
        this.$element.addClass(this.rules[matchedMq].cssClass);
        if (this.currentPlugin) {
          if (!this.currentPlugin.$element.data("zfPlugin") && this.storezfData)
            this.currentPlugin.$element.data("zfPlugin", this.storezfData);
          this.currentPlugin.destroy();
        }
        this._handleMarkup(this.rules[matchedMq].cssClass);
        this.currentRule = this.rules[matchedMq];
        this.currentPlugin = new this.currentRule.plugin(this.$element, this.options);
        this.storezfData = this.currentPlugin.$element.data("zfPlugin");
      }
    }, {
      key: "_handleMarkup",
      value: function _handleMarkup(toSet) {
        var _this = this, fromString = "accordion";
        var $panels = (0, import_jquery.default)("[data-tabs-content=" + this.$element.attr("id") + "]");
        if ($panels.length)
          fromString = "tabs";
        if (fromString === toSet) {
          return;
        }
        var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : "tabs-title";
        var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : "tabs-panel";
        this.$element.removeAttr("role");
        var $liHeads = this.$element.children("." + tabsTitle + ",[data-accordion-item]").removeClass(tabsTitle).removeClass("accordion-item").removeAttr("data-accordion-item");
        var $liHeadsA = $liHeads.children("a").removeClass("accordion-title");
        if (fromString === "tabs") {
          $panels = $panels.children("." + tabsPanel).removeClass(tabsPanel).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby");
          $panels.children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected");
        } else {
          $panels = $liHeads.children("[data-tab-content]").removeClass("accordion-content");
        }
        $panels.css({
          display: "",
          visibility: ""
        });
        $liHeads.css({
          display: "",
          visibility: ""
        });
        if (toSet === "accordion") {
          $panels.each(function(key, value) {
            (0, import_jquery.default)(value).appendTo($liHeads.get(key)).addClass("accordion-content").attr("data-tab-content", "").removeClass("is-active").css({
              height: ""
            });
            (0, import_jquery.default)("[data-tabs-content=" + _this.$element.attr("id") + "]").after('<div id="tabs-placeholder-' + _this.$element.attr("id") + '"></div>').detach();
            $liHeads.addClass("accordion-item").attr("data-accordion-item", "");
            $liHeadsA.addClass("accordion-title");
          });
        } else if (toSet === "tabs") {
          var $tabsContent = (0, import_jquery.default)("[data-tabs-content=" + _this.$element.attr("id") + "]");
          var $placeholder = (0, import_jquery.default)("#tabs-placeholder-" + _this.$element.attr("id"));
          if ($placeholder.length) {
            $tabsContent = (0, import_jquery.default)('<div class="tabs-content"></div>').insertAfter($placeholder).attr("data-tabs-content", _this.$element.attr("id"));
            $placeholder.remove();
          } else {
            $tabsContent = (0, import_jquery.default)('<div class="tabs-content"></div>').insertAfter(_this.$element).attr("data-tabs-content", _this.$element.attr("id"));
          }
          $panels.each(function(key, value) {
            var tempValue = (0, import_jquery.default)(value).appendTo($tabsContent).addClass(tabsPanel);
            var hash = $liHeadsA.get(key).hash.slice(1);
            var id2 = (0, import_jquery.default)(value).attr("id") || GetYoDigits(6, "accordion");
            if (hash !== id2) {
              if (hash !== "") {
                (0, import_jquery.default)(value).attr("id", hash);
              } else {
                hash = id2;
                (0, import_jquery.default)(value).attr("id", hash);
                (0, import_jquery.default)($liHeadsA.get(key)).attr("href", (0, import_jquery.default)($liHeadsA.get(key)).attr("href").replace("#", "") + "#" + hash);
              }
            }
            var isActive = (0, import_jquery.default)($liHeads.get(key)).hasClass("is-active");
            if (isActive) {
              tempValue.addClass("is-active");
            }
          });
          $liHeads.addClass(tabsTitle);
        }
      }
      /**
       * Opens the plugin pane defined by `target`.
       * @param {jQuery | String} target - jQuery object or string of the id of the pane to open.
       * @see Accordion.down
       * @see Tabs.selectTab
       * @function
       */
    }, {
      key: "open",
      value: function open3() {
        if (this.currentRule && typeof this.currentRule.open === "function") {
          var _this$currentRule;
          return (_this$currentRule = this.currentRule).open.apply(_this$currentRule, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
        }
      }
      /**
       * Closes the plugin pane defined by `target`. Not availaible for Tabs.
       * @param {jQuery | String} target - jQuery object or string of the id of the pane to close.
       * @see Accordion.up
       * @function
       */
    }, {
      key: "close",
      value: function close2() {
        if (this.currentRule && typeof this.currentRule.close === "function") {
          var _this$currentRule2;
          return (_this$currentRule2 = this.currentRule).close.apply(_this$currentRule2, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
        }
      }
      /**
       * Toggles the plugin pane defined by `target`. Not availaible for Tabs.
       * @param {jQuery | String} target - jQuery object or string of the id of the pane to toggle.
       * @see Accordion.toggle
       * @function
       */
    }, {
      key: "toggle",
      value: function toggle2() {
        if (this.currentRule && typeof this.currentRule.toggle === "function") {
          var _this$currentRule3;
          return (_this$currentRule3 = this.currentRule).toggle.apply(_this$currentRule3, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
        }
      }
      /**
       * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
       * @function
       */
    }, {
      key: "_destroy",
      value: function _destroy() {
        if (this.currentPlugin)
          this.currentPlugin.destroy();
        (0, import_jquery.default)(window).off("changed.zf.mediaquery", this._changedZfMediaQueryHandler);
      }
    }]);
    return ResponsiveAccordionTabs2;
  }(Plugin);
  ResponsiveAccordionTabs.defaults = {};
  Foundation.addToJquery(import_jquery.default);
  Foundation.rtl = rtl;
  Foundation.GetYoDigits = GetYoDigits;
  Foundation.transitionend = transitionend;
  Foundation.RegExpEscape = RegExpEscape;
  Foundation.onLoad = onLoad;
  Foundation.Box = Box;
  Foundation.onImagesLoaded = onImagesLoaded;
  Foundation.Keyboard = Keyboard;
  Foundation.MediaQuery = MediaQuery;
  Foundation.Motion = Motion;
  Foundation.Move = Move;
  Foundation.Nest = Nest;
  Foundation.Timer = Timer;
  Touch.init(import_jquery.default);
  Triggers.init(import_jquery.default, Foundation);
  MediaQuery._init();
  Foundation.plugin(Abide, "Abide");
  Foundation.plugin(Accordion, "Accordion");
  Foundation.plugin(AccordionMenu, "AccordionMenu");
  Foundation.plugin(Drilldown, "Drilldown");
  Foundation.plugin(Dropdown, "Dropdown");
  Foundation.plugin(DropdownMenu, "DropdownMenu");
  Foundation.plugin(Equalizer, "Equalizer");
  Foundation.plugin(Interchange, "Interchange");
  Foundation.plugin(Magellan, "Magellan");
  Foundation.plugin(OffCanvas, "OffCanvas");
  Foundation.plugin(Orbit, "Orbit");
  Foundation.plugin(ResponsiveMenu, "ResponsiveMenu");
  Foundation.plugin(ResponsiveToggle, "ResponsiveToggle");
  Foundation.plugin(Reveal, "Reveal");
  Foundation.plugin(Slider, "Slider");
  Foundation.plugin(SmoothScroll, "SmoothScroll");
  Foundation.plugin(Sticky, "Sticky");
  Foundation.plugin(Tabs, "Tabs");
  Foundation.plugin(Toggler, "Toggler");
  Foundation.plugin(Tooltip, "Tooltip");
  Foundation.plugin(ResponsiveAccordionTabs, "ResponsiveAccordionTabs");

  // app/javascript/custom/direct_upload.js
  addEventListener("direct-upload:initialize", (event) => {
    const { target, detail } = event;
    const { id: id2, file } = detail;
    target.insertAdjacentHTML("beforebegin", `
    <div id="direct-upload-${id2}" class="direct-upload direct-upload--pending">
      <div id="direct-upload-progress-${id2}" class="direct-upload__progress" style="width: 0%"></div>
      <span class="direct-upload__filename">${file.name}</span>
    </div>
  `);
    target.previousElementSibling.querySelector(`.direct-upload__filename`).textContent = file.name;
  });
  addEventListener("direct-upload:start", (event) => {
    const { id: id2 } = event.detail;
    const element = document.getElementById(`direct-upload-${id2}`);
    element.classList.remove("direct-upload--pending");
  });
  addEventListener("direct-upload:progress", (event) => {
    const { id: id2, progress } = event.detail;
    const progressElement = document.getElementById(`direct-upload-progress-${id2}`);
    progressElement.style.width = `${progress}%`;
  });
  addEventListener("direct-upload:error", (event) => {
    event.preventDefault();
    const { id: id2, error: error2 } = event.detail;
    const element = document.getElementById(`direct-upload-${id2}`);
    element.classList.add("direct-upload--error");
    element.setAttribute("title", error2);
  });
  addEventListener("direct-upload:end", (event) => {
    const { id: id2 } = event.detail;
    const element = document.getElementById(`direct-upload-${id2}`);
    element.classList.add("direct-upload--complete");
  });

  // app/javascript/application.js
  window.jQuery = import_jquery2.default;
  window.$ = import_jquery2.default;
  $(document).on("turbo:load", function() {
    $(document).foundation();
  });
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)
*/
//# sourceMappingURL=application.js.map

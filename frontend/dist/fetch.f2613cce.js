!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r=e.parcelRequire726c,n=r.register;n("fYLo6",function(e,t){var n=e.exports&&e.exports.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e.exports,"__esModule",{value:!0});var o=n(r("9BnCn")),i=n(r("6ur3u")),a=n(r("cgKRG")),s=new i.default.Agent({keepAlive:!0}),l=new a.default.Agent({keepAlive:!0});e.exports.default=function(e,t){return(0,o.default)(e,Object.assign({agent:"http:"===new URL(e.toString()).protocol?s:l},t))}}),n("9BnCn",function(t,r){var n=function(){// the only reliable means to get the global object is
// `Function('return this')()`
// However, this causes CSP violations in Chrome apps.
if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw Error("unable to locate global object")}();t.exports=r=n.fetch,n.fetch&&(r.default=n.fetch.bind(n)),r.Headers=n.Headers,r.Request=n.Request,r.Response=n.Response}),n("6ur3u",function(t,n){var o=r("kijN2"),i=r("1Bd0K"),a=r("hYCzS"),s=r("1qFPq"),l=r("3qbdd"),u=t.exports;u.request=function(t,r){t="string"==typeof t?l.parse(t):a(t);// Normally, the page is loaded from http or https, so not specifying a protocol
// will result in a (valid) protocol-relative url. However, this won't work if
// the protocol is something else, like 'file:'
var n=-1===e.location.protocol.search(/^https?:$/)?"http:":"",i=t.protocol||n,s=t.hostname||t.host,u=t.port,f=t.path||"/";s&&-1!==s.indexOf(":")&&(s="["+s+"]"),// This may be a relative url. The browser should always be able to interpret it correctly.
t.url=(s?i+"//"+s:"")+(u?":"+u:"")+f,t.method=(t.method||"GET").toUpperCase(),t.headers=t.headers||{};// Also valid opts.auth, opts.mode
var c=new o(t);return r&&c.on("response",r),c},u.get=function(e,t){var r=u.request(e,t);return r.end(),r},u.ClientRequest=o,u.IncomingMessage=i.IncomingMessage,u.Agent=function(){},u.Agent.defaultMaxSockets=4,u.globalAgent=new u.Agent,u.STATUS_CODES=s,u.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"]}),n("kijN2",function(t,n){var o=r("gzLuY").Buffer,i=r("a8i8g"),a=r("4Mq5Q"),s=r("kvFQ5"),l=r("1Bd0K"),u=r("CyGSj"),f=l.IncomingMessage,c=l.readyStates,h=t.exports=function(e){var t,r,n,i=this;u.Writable.call(i),i._opts=e,i._body=[],i._headers={},e.auth&&i.setHeader("Authorization","Basic "+o.from(e.auth).toString("base64")),Object.keys(e.headers).forEach(function(t){i.setHeader(t,e.headers[t])});var s=!0;if("disable-fetch"===e.mode||"requestTimeout"in e&&!a.abortController)// If the use of XHR should be preferred. Not typically needed.
s=!1,n=!0;else if("prefer-streaming"===e.mode)// the accuracy of the 'content-type' header aren't
n=!1;else if("allow-wrong-content-type"===e.mode)n=!a.overrideMimeType;else if(e.mode&&"default"!==e.mode&&"prefer-fast"!==e.mode)throw Error("Invalid value for opts.mode");else n=!0;i._mode=(t=n,r=s,a.fetch&&r?"fetch":a.mozchunkedarraybuffer?"moz-chunked-arraybuffer":a.msstream?"ms-stream":a.arraybuffer&&t?"arraybuffer":"text"),i._fetchTimer=null,i._socketTimeout=null,i._socketTimer=null,i.on("finish",function(){i._onFinish()})};s(h,u.Writable),h.prototype.setHeader=function(e,t){var r=e.toLowerCase();// This check is not necessary, but it prevents warnings from browsers about setting unsafe
// headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
// http-browserify did it, so I will too.
-1===p.indexOf(r)&&(this._headers[r]={name:e,value:t})},h.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()];return t?t.value:null},h.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},h.prototype._onFinish=function(){var t=this;if(!t._destroyed){var r=t._opts;"timeout"in r&&0!==r.timeout&&t.setTimeout(r.timeout);var n=t._headers,o=null;"GET"!==r.method&&"HEAD"!==r.method&&(o=new Blob(t._body,{type:(n["content-type"]||{}).value||""}));// create flattened list of headers
var s=[];if(Object.keys(n).forEach(function(e){var t=n[e].name,r=n[e].value;Array.isArray(r)?r.forEach(function(e){s.push([t,e])}):s.push([t,r])}),"fetch"===t._mode){var l=null;if(a.abortController){var u=new AbortController;l=u.signal,t._fetchAbortController=u,"requestTimeout"in r&&0!==r.requestTimeout&&(t._fetchTimer=e.setTimeout(function(){t.emit("requestTimeout"),t._fetchAbortController&&t._fetchAbortController.abort()},r.requestTimeout))}e.fetch(t._opts.url,{method:t._opts.method,headers:s,body:o||void 0,mode:"cors",credentials:r.withCredentials?"include":"same-origin",signal:l}).then(function(e){t._fetchResponse=e,t._resetTimers(!1),t._connect()},function(e){t._resetTimers(!0),t._destroyed||t.emit("error",e)})}else{var f=t._xhr=new e.XMLHttpRequest;try{f.open(t._opts.method,t._opts.url,!0)}catch(e){i.nextTick(function(){t.emit("error",e)});return}"responseType"in f&&(f.responseType=t._mode),"withCredentials"in f&&(f.withCredentials=!!r.withCredentials),"text"===t._mode&&"overrideMimeType"in f&&f.overrideMimeType("text/plain; charset=x-user-defined"),"requestTimeout"in r&&(f.timeout=r.requestTimeout,f.ontimeout=function(){t.emit("requestTimeout")}),s.forEach(function(e){f.setRequestHeader(e[0],e[1])}),t._response=null,f.onreadystatechange=function(){switch(f.readyState){case c.LOADING:case c.DONE:t._onXHRProgress()}},"moz-chunked-arraybuffer"===t._mode&&(f.onprogress=function(){t._onXHRProgress()}),f.onerror=function(){t._destroyed||(t._resetTimers(!0),t.emit("error",Error("XHR error")))};try{f.send(o)}catch(e){i.nextTick(function(){t.emit("error",e)});return}}}},h.prototype._onXHRProgress=function(){this._resetTimers(!1),/**
 * Checks if xhr.status is readable and non-zero, indicating no error.
 * Even though the spec says it should be available in readyState 3,
 * accessing it throws an exception in IE8
 */function(e){try{var t=e.status;return null!==t&&0!==t}catch(e){return!1}}(this._xhr)&&!this._destroyed&&(this._response||this._connect(),this._response._onXHRProgress(this._resetTimers.bind(this)))},h.prototype._connect=function(){var e=this;e._destroyed||(e._response=new f(e._xhr,e._fetchResponse,e._mode,e._resetTimers.bind(e)),e._response.on("error",function(t){e.emit("error",t)}),e.emit("response",e._response))},h.prototype._write=function(e,t,r){this._body.push(e),r()},h.prototype._resetTimers=function(t){var r=this;e.clearTimeout(r._socketTimer),r._socketTimer=null,t?(e.clearTimeout(r._fetchTimer),r._fetchTimer=null):r._socketTimeout&&(r._socketTimer=e.setTimeout(function(){r.emit("timeout")},r._socketTimeout))},h.prototype.abort=h.prototype.destroy=function(e){this._destroyed=!0,this._resetTimers(!0),this._response&&(this._response._destroyed=!0),this._xhr?this._xhr.abort():this._fetchAbortController&&this._fetchAbortController.abort(),e&&this.emit("error",e)},h.prototype.end=function(e,t,r){"function"==typeof e&&(r=e,e=void 0),u.Writable.prototype.end.call(this,e,t,r)},h.prototype.setTimeout=function(e,t){t&&this.once("timeout",t),this._socketTimeout=e,this._resetTimers(!1)},h.prototype.flushHeaders=function(){},h.prototype.setNoDelay=function(){},h.prototype.setSocketKeepAlive=function(){};// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var p=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"]}),n("4Mq5Q",function(r,n){var o,i,a,s,l,u,f,c;function h(){// Cache the xhr value
if(void 0!==c)return c;if(e.XMLHttpRequest){c=new e.XMLHttpRequest;// If XDomainRequest is available (ie only, where xhr might not work
// cross domain), use the page location. Otherwise use example.com
// Note: this doesn't actually make an http request.
try{c.open("GET",e.XDomainRequest?"/":"https://example.com")}catch(e){c=null}}else c=null;return c}function p(e){var t=h();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}function d(e){return"function"==typeof e}t(r.exports,"fetch",function(){return o},function(e){return o=e}),t(r.exports,"writableStream",function(){return i},function(e){return i=e}),t(r.exports,"abortController",function(){return a},function(e){return a=e}),t(r.exports,"arraybuffer",function(){return s},function(e){return s=e}),t(r.exports,"msstream",function(){return l},function(e){return l=e}),t(r.exports,"mozchunkedarraybuffer",function(){return u},function(e){return u=e}),t(r.exports,"overrideMimeType",function(){return f},function(e){return f=e}),o=d(e.fetch)&&d(e.ReadableStream),i=d(e.WritableStream),a=d(e.AbortController),s=o||p("arraybuffer"),l=!o&&p("ms-stream"),u=!o&&p("moz-chunked-arraybuffer"),f=o||!!h()&&d(h().overrideMimeType),c=null// Help gc
}),n("1Bd0K",function(n,o){t(n.exports,"readyStates",function(){return i},function(e){return i=e}),t(n.exports,"IncomingMessage",function(){return a},function(e){return a=e});var i,a,s=r("a8i8g"),l=r("gzLuY").Buffer,u=r("4Mq5Q"),f=r("kvFQ5"),c=r("CyGSj"),h=i={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},p=a=function(e,t,r,n){var o=this;if(c.Readable.call(o),o._mode=r,o.headers={},o.rawHeaders=[],o.trailers={},o.rawTrailers=[],// Fake the 'close' event, but only once 'end' fires
o.on("end",function(){// The nextTick is necessary to prevent the 'request' module from causing an infinite loop
s.nextTick(function(){o.emit("close")})}),"fetch"===r){if(o._fetchResponse=t,o.url=t.url,o.statusCode=t.status,o.statusMessage=t.statusText,t.headers.forEach(function(e,t){o.headers[t.toLowerCase()]=e,o.rawHeaders.push(t,e)}),u.writableStream){var i=new WritableStream({write:function(e){return n(!1),new Promise(function(t,r){o._destroyed?r():o.push(l.from(e))?t():o._resumeFetch=t})},close:function(){n(!0),o._destroyed||o.push(null)},abort:function(e){n(!0),o._destroyed||o.emit("error",e)}});try{t.body.pipeTo(i).catch(function(e){n(!0),o._destroyed||o.emit("error",e)});return}catch(e){}// pipeTo method isn't defined. Can't find a better way to feature test this
}// fallback for when writableStream or pipeTo aren't available
var a=t.body.getReader();!function e(){a.read().then(function(t){if(!o._destroyed){if(n(t.done),t.done){o.push(null);return}o.push(l.from(t.value)),e()}}).catch(function(e){n(!0),o._destroyed||o.emit("error",e)})}()}else if(o._xhr=e,o._pos=0,o.url=e.responseURL,o.statusCode=e.status,o.statusMessage=e.statusText,e.getAllResponseHeaders().split(/\r?\n/).forEach(function(e){var t=e.match(/^([^:]+):\s*(.*)/);if(t){var r=t[1].toLowerCase();"set-cookie"===r?(void 0===o.headers[r]&&(o.headers[r]=[]),o.headers[r].push(t[2])):void 0!==o.headers[r]?o.headers[r]+=", "+t[2]:o.headers[r]=t[2],o.rawHeaders.push(t[1],t[2])}}),o._charset="x-user-defined",!u.overrideMimeType){var f=o.rawHeaders["mime-type"];if(f){var h=f.match(/;\s*charset=([^;])(;|$)/);h&&(o._charset=h[1].toLowerCase())}o._charset||(o._charset="utf-8"// best guess
)}};f(p,c.Readable),p.prototype._read=function(){var e=this._resumeFetch;e&&(this._resumeFetch=null,e())},p.prototype._onXHRProgress=function(t){var r=this,n=r._xhr,o=null;switch(r._mode){case"text":if((o=n.responseText).length>r._pos){var i=o.substr(r._pos);if("x-user-defined"===r._charset){for(var a=l.alloc(i.length),s=0;s<i.length;s++)a[s]=255&i.charCodeAt(s);r.push(a)}else r.push(i,r._charset);r._pos=o.length}break;case"arraybuffer":if(n.readyState!==h.DONE||!n.response)break;o=n.response,r.push(l.from(new Uint8Array(o)));break;case"moz-chunked-arraybuffer":if(o=n.response,n.readyState!==h.LOADING||!o)break;r.push(l.from(new Uint8Array(o)));break;case"ms-stream":if(o=n.response,n.readyState!==h.LOADING)break;var u=new e.MSStreamReader;u.onprogress=function(){u.result.byteLength>r._pos&&(r.push(l.from(new Uint8Array(u.result.slice(r._pos)))),r._pos=u.result.byteLength)},u.onload=function(){t(!0),r.push(null)},// reader.onerror = ??? // TODO: this
u.readAsArrayBuffer(o)}// The ms-stream case handles end separately in reader.onload()
r._xhr.readyState===h.DONE&&"ms-stream"!==r._mode&&(t(!0),r.push(null))}}),n("CyGSj",function(e,t){(t=e.exports=r("hJHBh")).Stream=t,t.Readable=t,t.Writable=r("3AY6k"),t.Duplex=r("kTUB1"),t.Transform=r("9wbVx"),t.PassThrough=r("3Frfy"),t.finished=r("i1zMF"),t.pipeline=r("hI05B")}),n("hJHBh",function(t,n){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var o,i,a,s,l,u=r("a8i8g");t.exports=T,/*</replacement>*/T.ReadableState=O,r("wvaTc").EventEmitter;var f=function(e,t){return e.listeners(t).length},c=r("7GgdY"),h=r("gzLuY").Buffer,p=(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},d=r("aqbQf");i=d&&d.debuglog?d.debuglog("stream"):function(){};var y=r("9ZPuZ"),b=r("g2D2d"),g=r("hLWAy").getHighWaterMark,m=r("5qPK0").codes,v=m.ERR_INVALID_ARG_TYPE,w=m.ERR_STREAM_PUSH_AFTER_EOF,_=m.ERR_METHOD_NOT_IMPLEMENTED,S=m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;r("kvFQ5")(T,c);var E=b.errorOrDestroy,R=["error","close","destroy","pause","resume"];function O(e,t,n){o=o||r("kTUB1"),e=e||{},"boolean"!=typeof n&&(n=t instanceof o),// object stream flag. Used to make read(n) ignore n and to
// make all the buffer merging and length checks go away
this.objectMode=!!e.objectMode,n&&(this.objectMode=this.objectMode||!!e.readableObjectMode),// the point at which it stops calling _read() to fill the buffer
// Note: 0 is a valid value, means "don't call _read preemptively ever"
this.highWaterMark=g(this,e,"readableHighWaterMark",n),// A linked list is used to store data chunks instead of an array because the
// linked list can remove elements from the beginning faster than
// array.shift()
this.buffer=new y,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,// a flag to be able to tell if the event 'readable'/'data' is emitted
// immediately, or on a later tick.  We set this to true at first, because
// any actions that shouldn't happen until "later" should generally also
// not happen before the first read call.
this.sync=!0,// whenever we return null, then we set a flag to say
// that we're awaiting a 'readable' event emission.
this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,// Should close be emitted on destroy. Defaults to true.
this.emitClose=!1!==e.emitClose,// Should .destroy() be called after 'end' (and potentially 'finish')
this.autoDestroy=!!e.autoDestroy,// has it been destroyed
this.destroyed=!1,// Crypto is kind of old and crusty.  Historically, its default string
// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=e.defaultEncoding||"utf8",// the number of writers that are awaiting a drain event in .pipe()s
this.awaitDrain=0,// if true, a maybeReadMore has been scheduled
this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(a||(a=r("hXidu").StringDecoder),this.decoder=new a(e.encoding),this.encoding=e.encoding)}function T(e){if(o=o||r("kTUB1"),!(this instanceof T))return new T(e);// Checking for a Stream.Duplex instance is faster here instead of inside
// the ReadableState constructor, at least with V8 6.5
var t=this instanceof o;this._readableState=new O(e,this,t),// legacy
this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),c.call(this)}function A(e,t,r,n,o){i("readableAddChunk",t);var a,s,l,u,f,c=e._readableState;if(null===t)c.reading=!1,function(e,t){if(i("onEofChunk"),!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,t.sync?// Otherwise we risk emitting data in the flow()
// the readable code triggers during a read() call
P(e):(// emit 'readable' now to make sure it gets picked up.
t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,k(e)))}}(e,c);else{if(o||(a=c,s=t,h.isBuffer(s)||s instanceof p||"string"==typeof s||void 0===s||a.objectMode||(l=new v("chunk",["string","Buffer","Uint8Array"],s)),f=l),f)E(e,f);else if(c.objectMode||t&&t.length>0){if("string"==typeof t||c.objectMode||Object.getPrototypeOf(t)===h.prototype||(u=t,t=h.from(u)),n)c.endEmitted?E(e,new S):x(e,c,t,!0);else if(c.ended)E(e,new w);else{if(c.destroyed)return!1;c.reading=!1,c.decoder&&!r?(t=c.decoder.write(t),c.objectMode||0!==t.length?x(e,c,t,!1):M(e,c)):x(e,c,t,!1)}}else n||(c.reading=!1,M(e,c))}// We can push more data if we are below the highWaterMark.
// Also, if we have no data yet, we can stand some more bytes.
// This is to work around cases where hwm=0, such as the repl.
return!c.ended&&(c.length<c.highWaterMark||0===c.length)}function x(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(t.awaitDrain=0,e.emit("data",r)):(// update the buffer info.
t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&P(e)),M(e,t)}// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function j(e,t){if(e<=0||0===t.length&&t.ended)return 0;if(t.objectMode)return 1;if(e!=e)return(// Only flow one buffer at a time
t.flowing&&t.length?t.buffer.head.data.length:t.length);// If we're asking for more than the current hwm, then raise the hwm.
if(e>t.highWaterMark){var r;t.highWaterMark=((r=e)>=1073741824?r=1073741824:(// Get the next highest power of 2 to prevent increasing hwm excessively in
// tiny amounts
r--,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r++),r)}return e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0)}// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function P(e){var t=e._readableState;i("emitReadable",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(i("emitReadable",t.flowing),t.emittedReadable=!0,u.nextTick(k,e))}function k(e){var t=e._readableState;i("emitReadable_",t.destroyed,t.length,t.ended),!t.destroyed&&(t.length||t.ended)&&(e.emit("readable"),t.emittedReadable=!1),// The stream needs another readable event if
// 1. It is not flowing, as the flow mechanism will take
//    care of it.
// 2. It is not ended.
// 3. It is below the highWaterMark, so we can schedule
//    another readable later.
t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,I(e)}// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function M(e,t){t.readingMore||(t.readingMore=!0,u.nextTick(C,e,t))}function C(e,t){// Attempt to read more data if we should.
//
// The conditions for reading more data are (one of):
// - Not enough data buffered (state.length < state.highWaterMark). The loop
//   is responsible for filling the buffer with enough data if such data
//   is available. If highWaterMark is 0 and we are not in the flowing mode
//   we should _not_ attempt to buffer any extra data. We'll get more data
//   when the stream consumer calls read() instead.
// - No data in the buffer, and the stream is in flowing mode. In this mode
//   the loop below is responsible for ensuring read() is called. Failing to
//   call read here would abort the flow and there's no other mechanism for
//   continuing the flow if the stream consumer has just subscribed to the
//   'data' event.
//
// In addition to the above conditions to keep reading data, the following
// conditions prevent the data from being read:
// - The stream has ended (state.ended).
// - There is already a pending 'read' operation (state.reading). This is a
//   case where the the stream has called the implementation defined _read()
//   method, but they are processing the call asynchronously and have _not_
//   called push() with new data. In this case we skip performing more
//   read()s. The execution ends in this method again after the _read() ends
//   up calling push() with more data.
for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&0===t.length);){var r=t.length;if(i("maybeReadMore read 0"),e.read(0),r===t.length)break}t.readingMore=!1}function N(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0,t.resumeScheduled&&!t.paused?// the upcoming resume will not flow.
t.flowing=!0:e.listenerCount("data")>0&&e.resume()}function L(e){i("readable nexttick read 0"),e.read(0)}function D(e,t){i("resume",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit("resume"),I(e),t.flowing&&!t.reading&&e.read(0)}function I(e){var t=e._readableState;for(i("flow",t.flowing);t.flowing&&null!==e.read(););}// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function F(e,t){var r;return(// nothing buffered
0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):r=t.buffer.consume(e,t.decoder),r))}function q(e){var t=e._readableState;i("endReadable",t.endEmitted),t.endEmitted||(t.ended=!0,u.nextTick(U,t,e))}function U(e,t){// Check that we didn't get one last unshift.
if(i("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&0===e.length&&(e.endEmitted=!0,t.readable=!1,t.emit("end"),e.autoDestroy)){// In case of duplex streams we need a way to detect
// if the writable side is ready for autoDestroy as well
var r=t._writableState;(!r||r.autoDestroy&&r.finished)&&t.destroy()}}function B(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return -1}Object.defineProperty(T.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){// we ignore the value if the stream
// has not been initialized yet
this._readableState&&// backward compatibility, the user is explicitly
// managing destroyed
(this._readableState.destroyed=e)}}),T.prototype.destroy=b.destroy,T.prototype._undestroy=b.undestroy,T.prototype._destroy=function(e,t){t(e)},// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
T.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&((t=t||n.defaultEncoding)!==n.encoding&&(e=h.from(e,t),t=""),r=!0),A(this,e,t,!1,r)},// Unshift should *always* be something directly out of read()
T.prototype.unshift=function(e){return A(this,e,null,!0,!1)},T.prototype.isPaused=function(){return!1===this._readableState.flowing},// backwards compatibility.
T.prototype.setEncoding=function(e){a||(a=r("hXidu").StringDecoder);var t=new a(e);this._readableState.decoder=t,// If setEncoding(null), decoder.encoding equals utf8
this._readableState.encoding=this._readableState.decoder.encoding;for(// Iterate over current buffer to convert already stored Buffers:
var n=this._readableState.buffer.head,o="";null!==n;)o+=t.write(n.data),n=n.next;return this._readableState.buffer.clear(),""!==o&&this._readableState.buffer.push(o),this._readableState.length=o.length,this},// you can override either this method, or the async _read(n) below.
T.prototype.read=function(e){i("read",e),e=parseInt(e,10);var t,r=this._readableState,n=e;// if we're doing read(0) to trigger a readable event, but we
// already have a bunch of data in the buffer, then just trigger
// the 'readable' event and move on.
if(0!==e&&(r.emittedReadable=!1),0===e&&r.needReadable&&((0!==r.highWaterMark?r.length>=r.highWaterMark:r.length>0)||r.ended))return i("read: emitReadable",r.length,r.ended),0===r.length&&r.ended?q(this):P(this),null;// if we've ended, and we're now clear, then finish it up.
if(0===(e=j(e,r))&&r.ended)return 0===r.length&&q(this),null;// All the actual chunk generation logic needs to be
// *below* the call to _read.  The reason is that in certain
// synthetic stream cases, such as passthrough streams, _read
// may be a completely synchronous operation which may change
// the state of the read buffer, providing enough data when
// before there was *not* enough.
//
// So, the steps are:
// 1. Figure out what the state of things will be after we do
// a read from the buffer.
//
// 2. If that resulting state will trigger a _read, then call _read.
// Note that this may be asynchronous, or synchronous.  Yes, it is
// deeply ugly to write APIs this way, but that still doesn't mean
// that the Readable class should behave improperly, as streams are
// designed to be sync/async agnostic.
// Take note if the _read call is sync or async (ie, if the read call
// has returned yet), so that we know whether or not it's safe to emit
// 'readable' etc.
//
// 3. Actually pull the requested chunks out of the buffer and return.
// if we need a readable event, then we need to do some reading.
var o=r.needReadable;return i("need readable",o),(0===r.length||r.length-e<r.highWaterMark)&&i("length less than watermark",o=!0),r.ended||r.reading?i("reading or ended",o=!1):o&&(i("do read"),r.reading=!0,r.sync=!0,0===r.length&&(r.needReadable=!0),// call internal read method
this._read(r.highWaterMark),r.sync=!1,r.reading||(e=j(n,r))),null===(t=e>0?F(e,r):null)?(r.needReadable=r.length<=r.highWaterMark,e=0):(r.length-=e,r.awaitDrain=0),0===r.length&&(r.ended||(r.needReadable=!0),n!==e&&r.ended&&q(this)),null!==t&&this.emit("data",t),t},// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
T.prototype._read=function(e){E(this,new _("_read()"))},T.prototype.pipe=function(e,t){var r=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=e;break;case 1:n.pipes=[n.pipes,e];break;default:n.pipes.push(e)}n.pipesCount+=1,i("pipe count=%d opts=%j",n.pipesCount,t);var o=t&&!1===t.end||e===u.stdout||e===u.stderr?y:a;function a(){i("onend"),e.end()}n.endEmitted?u.nextTick(o):r.once("end",o),e.on("unpipe",function t(o,u){i("onunpipe"),o===r&&u&&!1===u.hasUnpiped&&(u.hasUnpiped=!0,i("cleanup"),// cleanup event handlers once the pipe is broken
e.removeListener("close",p),e.removeListener("finish",d),e.removeListener("drain",s),e.removeListener("error",h),e.removeListener("unpipe",t),r.removeListener("end",a),r.removeListener("end",y),r.removeListener("data",c),l=!0,n.awaitDrain&&(!e._writableState||e._writableState.needDrain)&&s())});// when the dest drains, it reduces the awaitDrain counter
// on the source.  This would be more elegant with a .once()
// handler in flow(), but adding and removing repeatedly is
// too slow.
var s=function(){var e=r._readableState;i("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&f(r,"data")&&(e.flowing=!0,I(r))};e.on("drain",s);var l=!1;function c(t){i("ondata");var o=e.write(t);i("dest.write",o),!1===o&&((1===n.pipesCount&&n.pipes===e||n.pipesCount>1&&-1!==B(n.pipes,e))&&!l&&(i("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}// if the dest has an error, then stop piping into it.
// however, don't suppress the throwing behavior for this.
function h(t){i("onerror",t),y(),e.removeListener("error",h),0===f(e,"error")&&E(e,t)}// Both close and finish should trigger unpipe, but only once.
function p(){e.removeListener("finish",d),y()}function d(){i("onfinish"),e.removeListener("close",p),y()}function y(){i("unpipe"),r.unpipe(e)}return r.on("data",c),// Make sure our error handler is attached before userland ones.
function(e,t,r){// Sadly this is not cacheable as some libraries bundle their own
// event emitter implementation with them.
if("function"==typeof e.prependListener)return e.prependListener(t,r);// This is a hack to make sure that our error handler is attached before any
// userland ones.  NEVER DO THIS. This is here only because this code needs
// to continue to work with older versions of Node.js that do not include
// the prependListener() method. The goal is to eventually remove this hack.
e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(e,"error",h),e.once("close",p),e.once("finish",d),// tell the dest that it's being piped to
e.emit("pipe",r),n.flowing||(i("pipe resume"),r.resume()),e},T.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};// if we're not piping anywhere, then do nothing.
if(0===t.pipesCount)return this;// just one destination.  most common case.
if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),// got a match.
t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r)),this;// slow case. multiple pipe destinations.
if(!e){// remove all.
var n=t.pipes,o=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var i=0;i<o;i++)n[i].emit("unpipe",this,{hasUnpiped:!1});return this}// try to find the right one.
var a=B(t.pipes,e);return -1===a||(t.pipes.splice(a,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r)),this},// set up data events if they are asked for
// Ensure readable listeners eventually get something
T.prototype.on=function(e,t){var r=c.prototype.on.call(this,e,t),n=this._readableState;return"data"===e?(// update readableListening so that resume() may be a no-op
// a few lines down. This is needed to support once('readable').
n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"!==e||n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,i("on readable",n.length,n.reading),n.length?P(this):n.reading||u.nextTick(L,this)),r},T.prototype.addListener=T.prototype.on,T.prototype.removeListener=function(e,t){var r=c.prototype.removeListener.call(this,e,t);return"readable"===e&&// readable and reset the state. However this needs to happen
// after readable has been emitted but before I/O (nextTick) to
// support once('readable', fn) cycles. This means that calling
// resume within the same tick will have no
// effect.
u.nextTick(N,this),r},T.prototype.removeAllListeners=function(e){var t=c.prototype.removeAllListeners.apply(this,arguments);return("readable"===e||void 0===e)&&// readable and reset the state. However this needs to happen
// after readable has been emitted but before I/O (nextTick) to
// support once('readable', fn) cycles. This means that calling
// resume within the same tick will have no
// effect.
u.nextTick(N,this),t},// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
T.prototype.resume=function(){var e=this._readableState;return e.flowing||(i("resume"),// we flow only if there is no one listening
// for readable, but we still have to call
// resume()
e.flowing=!e.readableListening,e.resumeScheduled||(e.resumeScheduled=!0,u.nextTick(D,this,e))),e.paused=!1,this},T.prototype.pause=function(){return i("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(i("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
T.prototype.wrap=function(e){var t=this,r=this._readableState,n=!1;// proxy all the other methods.
// important when wrapping filters and duplexes.
for(var o in e.on("end",function(){if(i("wrapped end"),r.decoder&&!r.ended){var e=r.decoder.end();e&&e.length&&t.push(e)}t.push(null)}),e.on("data",function(o){// don't skip over falsy values in objectMode
i("wrapped data"),r.decoder&&(o=r.decoder.write(o)),(!r.objectMode||null!=o)&&(r.objectMode||o&&o.length)&&(t.push(o)||(n=!0,e.pause()))}),e)void 0===this[o]&&"function"==typeof e[o]&&(this[o]=function(t){return function(){return e[t].apply(e,arguments)}}(o));// proxy certain important events.
for(var a=0;a<R.length;a++)e.on(R[a],this.emit.bind(this,R[a]));return(// when we try to consume some more bytes, simply unpause the
// underlying stream.
this._read=function(t){i("wrapped _read",t),n&&(n=!1,e.resume())},this)},"function"==typeof Symbol&&(T.prototype[Symbol.asyncIterator]=function(){return void 0===s&&(s=r("1WvTd")),s(this)}),Object.defineProperty(T.prototype,"readableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(T.prototype,"readableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(T.prototype,"readableFlowing",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e)}}),// exposed for testing purposes only.
T._fromList=F,Object.defineProperty(T.prototype,"readableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(T.from=function(e,t){return void 0===l&&(l=r("1YZki")),l(T,e,t)})}),n("7GgdY",function(e,t){e.exports=r("wvaTc").EventEmitter}),n("9ZPuZ",function(e,t){var n=r("1ObTH");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=s(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return(void 0===t?"undefined":(0,n._)(t))==="symbol"?t:String(t)}var l=r("gzLuY").Buffer,u=r("aqbQf").inspect,f=u&&u.custom||"inspect";e.exports=/*#__PURE__*/function(){var e,t;function r(){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,r),this.head=null,this.tail=null,this.length=0}return e=[{key:"push",value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}},{key:"unshift",value:function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length}},{key:"shift",value:function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r}},{key:"concat",value:function(e){if(0===this.length)return l.alloc(0);for(var t,r,n=l.allocUnsafe(e>>>0),o=this.head,i=0;o;)t=o.data,r=i,l.prototype.copy.call(t,n,r),i+=o.data.length,o=o.next;return n}},{key:"consume",value:function(e,t){var r;return e<this.head.data.length?(// `slice` is the same for buffers and strings.
r=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):r=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(e){var t=this.head,r=1,n=t.data;for(e-=n.length;t=t.next;){var o=t.data,i=e>o.length?o.length:e;if(i===o.length?n+=o:n+=o.slice(0,e),0==(e-=i)){i===o.length?(++r,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=o.slice(i));break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(e){var t=l.allocUnsafe(e),r=this.head,n=1;for(r.data.copy(t),e-=r.data.length;r=r.next;){var o=r.data,i=e>o.length?o.length:e;if(o.copy(t,t.length-e,0,i),0==(e-=i)){i===o.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=o.slice(i));break}++n}return this.length-=n,t}},{key:f,value:function(e,t){return u(this,i(i({},t),{},{// Only inspect one level.
depth:0,// It should not recurse.
customInspect:!1}))}}],a(r.prototype,e),t&&a(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}()}),n("g2D2d",function(e,t){var n=r("a8i8g");function o(e,t){a(e,t),i(e)}function i(e){(!e._writableState||e._writableState.emitClose)&&(!e._readableState||e._readableState.emitClose)&&e.emit("close")}function a(e,t){e.emit("error",t)}e.exports={destroy:// undocumented cb() API, needed for core, not for public API
function(e,t){var r=this,s=this._readableState&&this._readableState.destroyed,l=this._writableState&&this._writableState.destroyed;return s||l?t?t(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,n.nextTick(a,this,e)):n.nextTick(a,this,e)):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?r._writableState?r._writableState.errorEmitted?n.nextTick(i,r):(r._writableState.errorEmitted=!0,n.nextTick(o,r,e)):n.nextTick(o,r,e):t?(n.nextTick(i,r),t(e)):n.nextTick(i,r)})),this},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(e,t){// We have tests that rely on errors being emitted
// in the same tick, so changing this is semver major.
// For now when you opt-in to autoDestroy we allow
// the error to be emitted nextTick. In a future
// semver major update we should change the default to this.
var r=e._readableState,n=e._writableState;r&&r.autoDestroy||n&&n.autoDestroy?e.destroy(t):e.emit("error",t)}}}),n("hLWAy",function(e,t){var n=r("5qPK0").codes.ERR_INVALID_OPT_VALUE;e.exports={getHighWaterMark:function(e,t,r,o){var i=null!=t.highWaterMark?t.highWaterMark:o?t[r]:null;if(null!=i){if(!(isFinite(i)&&Math.floor(i)===i)||i<0){var a=o?r:"highWaterMark";throw new n(a,i)}return Math.floor(i)}// Default value
return e.objectMode?16:16384}}}),n("5qPK0",function(e,n){t(e.exports,"codes",function(){return o},function(e){return o=e});var o,i=r("1ObTH"),a={};function s(e,t,r){r||(r=Error);var n=/*#__PURE__*/function(e){function r(r,n,o){return e.call(this,"string"==typeof t?t:t(r,n,o))||this}return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e,r}(r);n.prototype.name=r.name,n.prototype.code=e,a[e]=n}// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function l(e,t){if(!Array.isArray(e))return"of ".concat(t," ").concat(String(e));var r=e.length;return(e=e.map(function(e){return String(e)}),r>2)?"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]:2===r?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
s("ERR_INVALID_OPT_VALUE",function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'},TypeError),s("ERR_INVALID_ARG_TYPE",function(e,t,r){if("string"==typeof t&&(n="not ",t.substr(!o||o<0?0:+o,n.length)===n)?(f="must not be",t=t.replace(/^not /,"")):f="must be",a=" argument",(void 0===s||s>e.length)&&(s=e.length),e.substring(s-a.length,s)===a)c="The ".concat(e," ").concat(f," ").concat(l(t,"type"));else{var n,o,a,s,u,f,c,h=("number"!=typeof u&&(u=0),u+1>e.length||-1===e.indexOf(".",u))?"argument":"property";c='The "'.concat(e,'" ').concat(h," ").concat(f," ").concat(l(t,"type"))}return c+". Received type ".concat(void 0===r?"undefined":(0,i._)(r))},TypeError),s("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),s("ERR_METHOD_NOT_IMPLEMENTED",function(e){return"The "+e+" method is not implemented"}),s("ERR_STREAM_PREMATURE_CLOSE","Premature close"),s("ERR_STREAM_DESTROYED",function(e){return"Cannot call "+e+" after a stream was destroyed"}),s("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),s("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),s("ERR_STREAM_WRITE_AFTER_END","write after end"),s("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),s("ERR_UNKNOWN_ENCODING",function(e){return"Unknown encoding: "+e},TypeError),s("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),o=a}),n("kTUB1",function(e,t){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
var n=r("a8i8g"),o=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};/*</replacement>*/e.exports=f;var i=r("hJHBh"),a=r("3AY6k");r("kvFQ5")(f,i);for(var s=o(a.prototype),l=0;l<s.length;l++){var u=s[l];f.prototype[u]||(f.prototype[u]=a.prototype[u])}function f(e){if(!(this instanceof f))return new f(e);i.call(this,e),a.call(this,e),this.allowHalfOpen=!0,e&&(!1===e.readable&&(this.readable=!1),!1===e.writable&&(this.writable=!1),!1===e.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",c)))}// the no-half-open enforcer
function c(){// If the writable side ended, then we're ok.
this._writableState.ended||// no more data can be written.
// But allow more writes to happen in this tick.
n.nextTick(h,this)}function h(e){e.end()}Object.defineProperty(f.prototype,"writableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(f.prototype,"writableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(f.prototype,"writableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(f.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(e){// we ignore the value if the stream
// has not been initialized yet
void 0!==this._readableState&&void 0!==this._writableState&&(// backward compatibility, the user is explicitly
// managing destroyed
this._readableState.destroyed=e,this._writableState.destroyed=e)}})}),n("3AY6k",function(t,n){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
var o,i,a=r("a8i8g");// It seems a linked list but it is not
// there will be only 2 of these for each stream
function s(e){var t=this;this.next=null,this.entry=null,this.finish=function(){(function(e,t,r){var n=e.entry;for(e.entry=null;n;){var o=n.callback;t.pendingcb--,o(void 0),n=n.next}// reuse the free corkReq.
t.corkedRequestsFree.next=e})(t,e)}}t.exports=T,/*</replacement>*/T.WritableState=O;/*<replacement>*/var l={deprecate:r("hPIqS")},u=r("7GgdY"),f=r("gzLuY").Buffer,c=(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},h=r("g2D2d"),p=r("hLWAy").getHighWaterMark,d=r("5qPK0").codes,y=d.ERR_INVALID_ARG_TYPE,b=d.ERR_METHOD_NOT_IMPLEMENTED,g=d.ERR_MULTIPLE_CALLBACK,m=d.ERR_STREAM_CANNOT_PIPE,v=d.ERR_STREAM_DESTROYED,w=d.ERR_STREAM_NULL_VALUES,_=d.ERR_STREAM_WRITE_AFTER_END,S=d.ERR_UNKNOWN_ENCODING,E=h.errorOrDestroy;function R(){}function O(e,t,n){o=o||r("kTUB1"),e=e||{},"boolean"!=typeof n&&(n=t instanceof o),// object stream flag to indicate whether or not this stream
// contains buffers or objects.
this.objectMode=!!e.objectMode,n&&(this.objectMode=this.objectMode||!!e.writableObjectMode),// the point at which write() starts returning false
// Note: 0 is a valid value, means that we always return false if
// the entire buffer is not flushed immediately on write()
this.highWaterMark=p(this,e,"writableHighWaterMark",n),// if _final has been called
this.finalCalled=!1,// drain event flag.
this.needDrain=!1,// at the start of calling end()
this.ending=!1,// when end() has been called, and returned
this.ended=!1,// when 'finish' is emitted
this.finished=!1,// has it been destroyed
this.destroyed=!1;// should we decode strings into buffers before passing to _write?
// this is here so that some node-core streams can optimize string
// handling at a lower level.
var i=!1===e.decodeStrings;this.decodeStrings=!i,// Crypto is kind of old and crusty.  Historically, its default string
// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=e.defaultEncoding||"utf8",// not an actual buffer we keep track of, but a measurement
// of how much we're waiting to get pushed to some underlying
// socket or file.
this.length=0,// a flag to see when we're in the middle of a write.
this.writing=!1,// when true all writes will be buffered until .uncork() call
this.corked=0,// a flag to be able to tell if the onwrite cb is called immediately,
// or on a later tick.  We set this to true at first, because any
// actions that shouldn't happen until "later" should generally also
// not happen before the first write call.
this.sync=!0,// a flag to know if we're processing previously buffered items, which
// may call the _write() callback in the same tick, so that we don't
// end up in an overlapped onwrite situation.
this.bufferProcessing=!1,// the callback that's passed to _write(chunk,cb)
this.onwrite=function(e){(function(e,t){var r=e._writableState,n=r.sync,o=r.writecb;if("function"!=typeof o)throw new g;if(r.writing=!1,r.writecb=null,r.length-=r.writelen,r.writelen=0,t)--r.pendingcb,n?(// defer the callback if we are being called synchronously
// to avoid piling up things on the stack
a.nextTick(o,t),// this can emit finish, and it will always happen
// after error
a.nextTick(M,e,r),e._writableState.errorEmitted=!0,E(e,t)):(// the caller expect this to happen before if
// it is async
o(t),e._writableState.errorEmitted=!0,E(e,t),// this can emit finish, but finish must
// always follow error
M(e,r));else{// Check if we're actually ready to finish, but don't emit yet
var i=P(r)||e.destroyed;i||r.corked||r.bufferProcessing||!r.bufferedRequest||j(e,r),n?a.nextTick(x,e,r,i,o):x(e,r,i,o)}})(t,e)},// the callback that the user supplies to write(chunk,encoding,cb)
this.writecb=null,// the amount that is being written when _write is called.
this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,// number of pending user-supplied write callbacks
// this must be 0 before 'finish' can be emitted
this.pendingcb=0,// emit prefinish if the only thing we're waiting for is _write cbs
// This is relevant for synchronous Transform streams
this.prefinished=!1,// True if the error was already emitted and should not be thrown again
this.errorEmitted=!1,// Should close be emitted on destroy. Defaults to true.
this.emitClose=!1!==e.emitClose,// Should .destroy() be called after 'finish' (and potentially 'end')
this.autoDestroy=!!e.autoDestroy,// count buffered requests
this.bufferedRequestCount=0,// allocate the first CorkedRequest, there is always
// one allocated and free to use, and we maintain at most two
this.corkedRequestsFree=new s(this)}function T(e){// Writable ctor is applied to Duplexes, too.
// `realHasInstance` is necessary because using plain `instanceof`
// would return false, as no `_writableState` property is attached.
// Trying to use the custom `instanceof` for Writable here will also break the
// Node.js LazyTransform implementation, which has a non-trivial getter for
// `_writableState` that would lead to infinite recursion.
// Checking for a Stream.Duplex instance is faster here instead of inside
// the WritableState constructor, at least with V8 6.5
var t=this instanceof(o=o||r("kTUB1"));if(!t&&!i.call(T,this))return new T(e);this._writableState=new O(e,this,t),// legacy.
this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),u.call(this)}function A(e,t,r,n,o,i,a){t.writelen=n,t.writecb=a,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new v("write")):r?e._writev(o,t.onwrite):e._write(o,i,t.onwrite),t.sync=!1}function x(e,t,r,n){r||0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain")),t.pendingcb--,n(),M(e,t)}// if there's something in the buffer waiting, then process it
function j(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=Array(t.bufferedRequestCount),o=t.corkedRequestsFree;o.entry=r;for(var i=0,a=!0;r;)n[i]=r,r.isBuf||(a=!1),r=r.next,i+=1;n.allBuffers=a,A(e,t,!0,t.length,n,"",o.finish),// doWrite is almost always async, defer these to save a bit of time
// as the hot path ends with doWrite
t.pendingcb++,t.lastBufferedRequest=null,o.next?(t.corkedRequestsFree=o.next,o.next=null):t.corkedRequestsFree=new s(t),t.bufferedRequestCount=0}else{// Slow case, write chunks one-by-one
for(;r;){var l=r.chunk,u=r.encoding,f=r.callback,c=t.objectMode?1:l.length;// if we didn't call the onwrite immediately, then
// it means that we need to wait until it does.
// also, that means that the chunk and cb are currently
// being processed, so move the buffer counter past them.
if(A(e,t,!1,c,l,u,f),r=r.next,t.bufferedRequestCount--,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequest=r,t.bufferProcessing=!1}function P(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function k(e,t){e._final(function(r){t.pendingcb--,r&&E(e,r),t.prefinished=!0,e.emit("prefinish"),M(e,t)})}function M(e,t){var r=P(t);if(r&&(t.prefinished||t.finalCalled||("function"!=typeof e._final||t.destroyed?(t.prefinished=!0,e.emit("prefinish")):(t.pendingcb++,t.finalCalled=!0,a.nextTick(k,e,t))),0===t.pendingcb&&(t.finished=!0,e.emit("finish"),t.autoDestroy))){// In case of duplex streams we need a way to detect
// if the readable side is ready for autoDestroy as well
var n=e._readableState;(!n||n.autoDestroy&&n.endEmitted)&&e.destroy()}return r}r("kvFQ5")(T,u),O.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(O.prototype,"buffer",{get:l.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(i=Function.prototype[Symbol.hasInstance],Object.defineProperty(T,Symbol.hasInstance,{value:function(e){return!!i.call(this,e)||this===T&&e&&e._writableState instanceof O}})):i=function(e){return e instanceof this},// Otherwise people can pipe Writable streams, which is just wrong.
T.prototype.pipe=function(){E(this,new m)},T.prototype.write=function(e,t,r){var n,o,i,s,l,u,h,p=this._writableState,d=!1,b=!p.objectMode&&(n=e,f.isBuffer(n)||n instanceof c);return b&&!f.isBuffer(e)&&(o=e,e=f.from(o)),("function"==typeof t&&(r=t,t=null),b?t="buffer":t||(t=p.defaultEncoding),"function"!=typeof r&&(r=R),p.ending)?(i=r,// TODO: defer error events consistently everywhere, not just the cb
E(this,s=new _),a.nextTick(i,s)):(b||(l=e,u=r,null===l?h=new w:"string"==typeof l||p.objectMode||(h=new y("chunk",["string","Buffer"],l)),!h||(E(this,h),a.nextTick(u,h),0)))&&(p.pendingcb++,d=// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function(e,t,r,n,o,i){if(!r){var a,s,l=(a=n,s=o,t.objectMode||!1===t.decodeStrings||"string"!=typeof a||(a=f.from(a,s)),a);n!==l&&(r=!0,o="buffer",n=l)}var u=t.objectMode?1:n.length;t.length+=u;var c=t.length<t.highWaterMark;if(c||(t.needDrain=!0),t.writing||t.corked){var h=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:o,isBuf:r,callback:i,next:null},h?h.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else A(e,t,!1,u,n,o,i);return c}(this,p,b,e,t,r)),d},T.prototype.cork=function(){this._writableState.corked++},T.prototype.uncork=function(){var e=this._writableState;!e.corked||(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||j(this,e))},T.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new S(e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(T.prototype,"writableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(T.prototype,"writableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.highWaterMark}}),T.prototype._write=function(e,t,r){r(new b("_write()"))},T.prototype._writev=null,T.prototype.end=function(e,t,r){var n,o=this._writableState;return"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!=e&&this.write(e,t),o.corked&&(o.corked=1,this.uncork()),o.ending||(n=r,o.ending=!0,M(this,o),n&&(o.finished?a.nextTick(n):this.once("finish",n)),o.ended=!0,this.writable=!1),this},Object.defineProperty(T.prototype,"writableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(T.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){// we ignore the value if the stream
// has not been initialized yet
this._writableState&&// backward compatibility, the user is explicitly
// managing destroyed
(this._writableState.destroyed=e)}}),T.prototype.destroy=h.destroy,T.prototype._undestroy=h.undestroy,T.prototype._destroy=function(e,t){t(e)}}),n("hPIqS",function(t,r){/**
 * Module exports.
 */t.exports=/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */function(e,t){if(n("noDeprecation"))return e;var r=!1;return function(){if(!r){if(n("throwDeprecation"))throw Error(t);n("traceDeprecation")?console.trace(t):console.warn(t),r=!0}return e.apply(this,arguments)}};/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */function n(t){// accessing global.localStorage can trigger a DOMException in sandboxed iframes
try{if(!e.localStorage)return!1}catch(e){return!1}var r=e.localStorage[t];return null!=r&&"true"===String(r).toLowerCase()}}),n("hXidu",function(e,n){t(e.exports,"StringDecoder",function(){return o},function(e){return o=e});var o,i=r("eN0t8").Buffer,a=i.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function s(e){var t;switch(this.encoding=// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function(e){var t=function(e){var t;if(!e)return"utf8";for(;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;// undefined
e=(""+e).toLowerCase(),t=!0}}(e);if("string"!=typeof t&&(i.isEncoding===a||!a(e)))throw Error("Unknown encoding: "+e);return t||e}(e),this.encoding){case"utf16le":this.text=f,this.end=c,t=4;break;case"utf8":this.fillLast=u,t=4;break;case"base64":this.text=h,this.end=p,t=3;break;default:this.write=d,this.end=y;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=i.allocUnsafe(t)}// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function l(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function u(e){var t=this.lastTotal-this.lastNeed,r=// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function(e,t,r){if((192&t[0])!=128)return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if((192&t[1])!=128)return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&(192&t[2])!=128)return e.lastNeed=2,"�"}}(this,e,0);return void 0!==r?r:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):void(e.copy(this.lastChar,t,0,e.length),this.lastNeed-=e.length)}// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function f(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function c(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function h(e,t){var r=(e.length-t)%3;return 0===r?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function p(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function d(e){return e.toString(this.encoding)}function y(e){return e&&e.length?this.write(e):""}o=s,s.prototype.write=function(e){var t,r;if(0===e.length)return"";if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""},s.prototype.end=// For UTF-8, a replacement character is added when ending on a partial
// character.
function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},// Returns only complete characters in a Buffer
s.prototype.text=// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function(e,t){var r=// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function(e,t,r){var n=t.length-1;if(n<r)return 0;var o=l(t[n]);return o>=0?(o>0&&(e.lastNeed=o-1),o):--n<r||-2===o?0:(o=l(t[n]))>=0?(o>0&&(e.lastNeed=o-2),o):--n<r||-2===o?0:(o=l(t[n]))>=0?(o>0&&(2===o?o=0:e.lastNeed=o-3),o):0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,n),e.toString("utf8",t,n)},// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
s.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}}),n("1WvTd",function(e,t){var n,o=r("1ObTH"),i=r("a8i8g");function a(e,t,r){var n;return(t=(void 0===(n=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?"undefined":(0,o._)(n))==="symbol"?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=r("i1zMF"),l=Symbol("lastResolve"),u=Symbol("lastReject"),f=Symbol("error"),c=Symbol("ended"),h=Symbol("lastPromise"),p=Symbol("handlePromise"),d=Symbol("stream");function y(e,t){return{value:e,done:t}}function b(e){var t=e[l];if(null!==t){var r=e[d].read();// we defer if data is null
// we can be expecting either 'end' or
// 'error'
null!==r&&(e[h]=null,e[l]=null,e[u]=null,t(y(r,!1)))}}function g(e){// we wait for the next tick, because it might
// emit an error with process.nextTick
i.nextTick(b,e)}var m=Object.getPrototypeOf(function(){}),v=Object.setPrototypeOf((a(n={get stream(){return this[d]},next:function(){var e,t,r=this,n=this[f];if(null!==n)return Promise.reject(n);if(this[c])return Promise.resolve(y(void 0,!0));if(this[d].destroyed)// called, the error will be emitted via nextTick, and
// we cannot guarantee that there is no error lingering around
// waiting to be emitted.
return new Promise(function(e,t){i.nextTick(function(){r[f]?t(r[f]):e(y(void 0,!0))})});// if we have multiple next() calls
// we will wait for the previous Promise to finish
// this logic is optimized to support for await loops,
// where next() is only called once at a time
var o=this[h];if(o)t=new Promise((e=this,function(t,r){o.then(function(){if(e[c]){t(y(void 0,!0));return}e[p](t,r)},r)}));else{// fast path needed to support multiple this.push()
// without triggering the next() queue
var a=this[d].read();if(null!==a)return Promise.resolve(y(a,!1));t=new Promise(this[p])}return this[h]=t,t}},Symbol.asyncIterator,function(){return this}),a(n,"return",function(){var e=this;// destroy(err, cb) is a private API
// we can guarantee we have that here, because we control the
// Readable class this is attached to
return new Promise(function(t,r){e[d].destroy(null,function(e){if(e){r(e);return}t(y(void 0,!0))})})}),n),m);e.exports=function(e){var t,r=Object.create(v,(a(t={},d,{value:e,writable:!0}),a(t,l,{value:null,writable:!0}),a(t,u,{value:null,writable:!0}),a(t,f,{value:null,writable:!0}),a(t,c,{value:e._readableState.endEmitted,writable:!0}),a(t,p,{value:function(e,t){var n=r[d].read();n?(r[h]=null,r[l]=null,r[u]=null,e(y(n,!1))):(r[l]=e,r[u]=t)},writable:!0}),t));return r[h]=null,s(e,function(e){if(e&&"ERR_STREAM_PREMATURE_CLOSE"!==e.code){var t=r[u];null!==t&&(r[h]=null,r[l]=null,r[u]=null,t(e)),r[f]=e;return}var n=r[l];null!==n&&(r[h]=null,r[l]=null,r[u]=null,n(y(void 0,!0))),r[c]=!0}),e.on("readable",g.bind(null,r)),r}}),n("i1zMF",function(e,t){var n=r("5qPK0").codes.ERR_STREAM_PREMATURE_CLOSE;function o(){}e.exports=function e(t,r,i){if("function"==typeof r)return e(t,null,r);r||(r={}),a=i||o,s=!1,i=function(){if(!s){s=!0;for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];a.apply(this,t)}};var a,s,l=r.readable||!1!==r.readable&&t.readable,u=r.writable||!1!==r.writable&&t.writable,f=function(){t.writable||h()},c=t._writableState&&t._writableState.finished,h=function(){u=!1,c=!0,l||i.call(t)},p=t._readableState&&t._readableState.endEmitted,d=function(){l=!1,p=!0,u||i.call(t)},y=function(e){i.call(t,e)},b=function(){var e;return l&&!p?(t._readableState&&t._readableState.ended||(e=new n),i.call(t,e)):u&&!c?(t._writableState&&t._writableState.ended||(e=new n),i.call(t,e)):void 0},g=function(){t.req.on("finish",h)};return t.setHeader&&"function"==typeof t.abort?(t.on("complete",h),t.on("abort",b),t.req?g():t.on("request",g)):u&&!t._writableState&&(// legacy streams
t.on("end",f),t.on("close",f)),t.on("end",d),t.on("finish",h),!1!==r.error&&t.on("error",y),t.on("close",b),function(){t.removeListener("complete",h),t.removeListener("abort",b),t.removeListener("request",g),t.req&&t.req.removeListener("finish",h),t.removeListener("end",f),t.removeListener("close",f),t.removeListener("finish",h),t.removeListener("end",d),t.removeListener("error",y),t.removeListener("close",b)}}}),n("1YZki",function(e,t){e.exports=function(){throw Error("Readable.from is not available in the browser")}}),n("9wbVx",function(e,t){e.exports=f;var n=r("5qPK0").codes,o=n.ERR_METHOD_NOT_IMPLEMENTED,i=n.ERR_MULTIPLE_CALLBACK,a=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=n.ERR_TRANSFORM_WITH_LENGTH_0,l=r("kTUB1");function u(e,t){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(null===n)return this.emit("error",new i);r.writechunk=null,r.writecb=null,null!=t&&this.push(t),n(e);var o=this._readableState;o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}function f(e){if(!(this instanceof f))return new f(e);l.call(this,e),this._transformState={afterTransform:u.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},// start out asking for a readable event once data is transformed.
this._readableState.needReadable=!0,// we have implemented the _read method, and done the other things
// that Readable wants before the first _read call, so unset the
// sync guard flag.
this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),// When the writable side finishes, then flush out anything remaining.
this.on("prefinish",c)}function c(){var e=this;"function"!=typeof this._flush||this._readableState.destroyed?h(this,null,null):this._flush(function(t,r){h(e,t,r)})}function h(e,t,r){if(t)return e.emit("error",t);// TODO(BridgeAR): Write a test for these two error cases
// if there's nothing in the write buffer, then that means
// that nothing more will ever be provided
if(null!=r&&e.push(r),e._writableState.length)throw new s;if(e._transformState.transforming)throw new a;return e.push(null)}r("kvFQ5")(f,l),f.prototype.push=function(e,t){return this._transformState.needTransform=!1,l.prototype.push.call(this,e,t)},// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
f.prototype._transform=function(e,t,r){r(new o("_transform()"))},f.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var o=this._readableState;(n.needTransform||o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}},// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
f.prototype._read=function(e){var t=this._transformState;null===t.writechunk||t.transforming?// will get processed, now that we've asked for it.
t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform))},f.prototype._destroy=function(e,t){l.prototype._destroy.call(this,e,function(e){t(e)})}}),n("3Frfy",function(e,t){e.exports=o;var n=r("9wbVx");function o(e){if(!(this instanceof o))return new o(e);n.call(this,e)}r("kvFQ5")(o,n),o.prototype._transform=function(e,t,r){r(null,e)}}),n("hI05B",function(e,t){var n,o=r("5qPK0").codes,i=o.ERR_MISSING_ARGS,a=o.ERR_STREAM_DESTROYED;function s(e){// Rethrow the error if it exists to avoid swallowing it
if(e)throw e}function l(e){e()}function u(e,t){return e.pipe(t)}e.exports=function(){for(var e,t,o=arguments.length,f=Array(o),c=0;c<o;c++)f[c]=arguments[c];var h=(e=f).length&&"function"==typeof e[e.length-1]?e.pop():s;if(Array.isArray(f[0])&&(f=f[0]),f.length<2)throw new i("streams");var p=f.map(function(e,o){var i,s,u,c,d,y=o<f.length-1;return s=i=function(e){t||(t=e),e&&p.forEach(l),y||(p.forEach(l),h(t))},u=!1,i=function(){u||(u=!0,s.apply(void 0,arguments))},c=!1,e.on("close",function(){c=!0}),void 0===n&&(n=r("i1zMF")),n(e,{readable:y,writable:o>0},function(e){if(e)return i(e);c=!0,i()}),d=!1,function(t){if(!c&&!d){// request.destroy just do .end - .abort is what we want
if(d=!0,e.setHeader&&"function"==typeof e.abort)return e.abort();if("function"==typeof e.destroy)return e.destroy();i(t||new a("pipe"))}}});return f.reduce(u)}}),n("hYCzS",function(e,t){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)r.call(n,o)&&(e[o]=n[o])}return e};var r=Object.prototype.hasOwnProperty}),n("1qFPq",function(e,t){e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}}),n("3qbdd",function(e,n){t(e.exports,"parse",function(){return o},function(e){return o=e});/*
 * Copyright Joyent, Inc. and other Node contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */var o,i=r("1ObTH"),a=r("8gbmd");function s(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}// Reference: RFC 3986, RFC 1808, RFC 2396
/*
 * define these here so at least they only have to be
 * compiled once on the first module load.
 */var l=/^([a-z0-9.+-]+:)/i,u=/:[0-9]*$/,f=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,c=["'"].concat(["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","	"])),/*
   * Characters that are never ever allowed in a hostname.
   * Note that any invalid chars are also handled, but these
   * are the ones that are *expected* to be seen, so we fast-path
   * them.
   */h=["%","/","?",";","#"].concat(c),p=["/","?","#"],d=/^[+a-z0-9A-Z_-]{0,63}$/,y=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,b={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},m={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=r("kpaQ9");function w(e,t,r){if(e&&"object"==typeof e&&e instanceof s)return e;var n=new s;return n.parse(e,t,r),n}s.prototype.parse=function(e,t,r){if("string"!=typeof e)throw TypeError("Parameter 'url' must be a string, not "+(void 0===e?"undefined":(0,i._)(e)));/*
   * Copy chrome, IE, opera backslash-handling behavior.
   * Back slashes before the query string get converted to forward slashes
   * See: https://code.google.com/p/chromium/issues/detail?id=25916
   */var n=e.indexOf("?"),o=-1!==n&&n<e.indexOf("#")?"?":"#",s=e.split(o);s[0]=s[0].replace(/\\/g,"/");var u=e=s.join(o);if(/*
   * trim before proceeding.
   * This is to support parse stuff like "  http://foo.com  \n"
   */u=u.trim(),!r&&1===e.split("#").length){// Try fast path regexp
var w=f.exec(u);if(w)return this.path=u,this.href=u,this.pathname=w[1],w[2]?(this.search=w[2],t?this.query=v.parse(this.search.substr(1)):this.query=this.search.substr(1)):t&&(this.search="",this.query={}),this}var _=l.exec(u);if(_){var S=(_=_[0]).toLowerCase();this.protocol=S,u=u.substr(_.length)}/*
   * figure out if it's got a host
   * user@server is *always* interpreted as a hostname, and url
   * resolution will treat //foo/bar as host=foo,path=bar because that's
   * how the browser resolves relative URLs.
   */if(r||_||u.match(/^\/\/[^@/]+@[^@/]+/)){var E="//"===u.substr(0,2);E&&!(_&&g[_])&&(u=u.substr(2),this.slashes=!0)}if(!g[_]&&(E||_&&!m[_])){for(var R,O,T=-1,A=0;A<p.length;A++){var x=u.indexOf(p[A]);-1!==x&&(-1===T||x<T)&&(T=x)}-1!==(O=-1===T?u.lastIndexOf("@"):u.lastIndexOf("@",T))&&(R=u.slice(0,O),u=u.slice(O+1),this.auth=decodeURIComponent(R)),// the host is the remaining to the left of the first non-host char
T=-1;for(var A=0;A<h.length;A++){var x=u.indexOf(h[A]);-1!==x&&(-1===T||x<T)&&(T=x)}-1===T&&(T=u.length),this.host=u.slice(0,T),u=u.slice(T),// pull out port.
this.parseHost(),/*
     * we've indicated that there is a hostname,
     * so even if it's empty, it has to be present.
     */this.hostname=this.hostname||"";/*
     * if hostname begins with [ and ends with ]
     * assume that it's an IPv6 address.
     */var j="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];// validate a little.
if(!j)for(var P=this.hostname.split(/\./),A=0,k=P.length;A<k;A++){var M=P[A];if(M&&!M.match(d)){for(var C="",N=0,L=M.length;N<L;N++)M.charCodeAt(N)>127?/*
               * we replace non-ASCII char with a temporary placeholder
               * we need this to make sure size of hostname is not
               * broken by replacing non-ASCII by nothing
               */C+="x":C+=M[N];// we test again with ASCII char only
if(!C.match(d)){var D=P.slice(0,A),I=P.slice(A+1),F=M.match(y);F&&(D.push(F[1]),I.unshift(F[2])),I.length&&(u="/"+I.join(".")+u),this.hostname=D.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),j||/*
       * IDNA Support: Returns a punycoded representation of "domain".
       * It only converts parts of the domain name that
       * have non-ASCII characters, i.e. it doesn't matter if
       * you call it with a domain that already is ASCII-only.
       */(this.hostname=a.toASCII(this.hostname));var q=this.port?":"+this.port:"",U=this.hostname||"";this.host=U+q,this.href+=this.host,j&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==u[0]&&(u="/"+u))}/*
   * now rest is set to the post-host stuff.
   * chop off any delim chars.
   */if(!b[S])/*
     * First, make 100% sure that any "autoEscape" chars get
     * escaped, even if encodeURIComponent doesn't think they
     * need to be.
     */for(var A=0,k=c.length;A<k;A++){var B=c[A];if(-1!==u.indexOf(B)){var H=encodeURIComponent(B);H===B&&(H=escape(B)),u=u.split(B).join(H)}}// chop off from the tail first.
var W=u.indexOf("#");-1!==W&&(// got a fragment string.
this.hash=u.substr(W),u=u.slice(0,W));var G=u.indexOf("?");// to support http.request
if(-1!==G?(this.search=u.substr(G),this.query=u.substr(G+1),t&&(this.query=v.parse(this.query)),u=u.slice(0,G)):t&&(// no query string, but parseQueryString still requested
this.search="",this.query={}),u&&(this.pathname=u),m[S]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var q=this.pathname||"",z=this.search||"";this.path=q+z}return(// finally, reconstruct the href based on what has been validated.
this.href=this.format(),this)},s.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":")+"@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,i="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&"object"==typeof this.query&&Object.keys(this.query).length&&(i=v.stringify(this.query));var a=this.search||i&&"?"+i||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||m[t])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),t+o+(r=r.replace(/[?#]/g,function(e){return encodeURIComponent(e)}))+(a=a.replace("#","%23"))+n},s.prototype.resolve=function(e){return this.resolveObject(w(e,!1,!0)).format()},s.prototype.resolveObject=function(e){if("string"==typeof e){var t=new s;t.parse(e,!1,!0),e=t}for(var r=new s,n=Object.keys(this),o=0;o<n.length;o++){var i=n[o];r[i]=this[i]}// if the relative url is empty, then there's nothing left to do here.
if(/*
   * hash is always overridden, no matter what.
   * even href="" will remove it.
   */r.hash=e.hash,""===e.href)return r.href=r.format(),r;// hrefs like //foo/bar always cut to the protocol.
if(e.slashes&&!e.protocol){for(var a=Object.keys(e),l=0;l<a.length;l++){var u=a[l];"protocol"!==u&&(r[u]=e[u])}return m[r.protocol]&&r.hostname&&!r.pathname&&(r.pathname="/",r.path=r.pathname),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){/*
     * if it's a known url protocol, then changing
     * the protocol does weird things
     * first, if it's not file:, then we MUST have a host,
     * and if there was a path
     * to begin with, then we MUST have a path.
     * if it is file:, then the host is dropped,
     * because that's known to be hostless.
     * anything else is assumed to be absolute.
     */if(!m[e.protocol]){for(var f=Object.keys(e),c=0;c<f.length;c++){var h=f[c];r[h]=e[h]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||g[e.protocol])r.pathname=e.pathname;else{for(var p=(e.pathname||"").split("/");p.length&&!(e.host=p.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),r.pathname=p.join("/")}// to support http.request
if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var d=r.pathname||"",y=r.search||"";r.path=d+y}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var b=r.pathname&&"/"===r.pathname.charAt(0),v=e.host||e.pathname&&"/"===e.pathname.charAt(0),w=v||b||r.host&&e.pathname,_=w,S=r.pathname&&r.pathname.split("/")||[],p=e.pathname&&e.pathname.split("/")||[],E=r.protocol&&!m[r.protocol];if(E&&(r.hostname="",r.port=null,r.host&&(""===S[0]?S[0]=r.host:S.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===p[0]?p[0]=e.host:p.unshift(e.host)),e.host=null),w=w&&(""===p[0]||""===S[0])),v)// it's absolute.
r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,S=p;else if(p.length)S||(S=[]),S.pop(),S=S.concat(p),r.search=e.search,r.query=e.query;else if(null!=e.search){/*
     * just pull out the search.
     * like href='?foo'.
     * Put this after the other two cases because it simplifies the booleans
     */if(E){r.host=S.shift(),r.hostname=r.host;/*
       * occationaly the auth can get stuck only in host
       * this especially happens in cases like
       * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
       */var R=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");R&&(r.auth=R.shift(),r.hostname=R.shift(),r.host=r.hostname)}return r.search=e.search,r.query=e.query,(null!==r.pathname||null!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!S.length)return(/*
     * no path at all.  easy.
     * we've already handled the other stuff above.
     */r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r);for(var O=S.slice(-1)[0],T=(r.host||e.host||S.length>1)&&("."===O||".."===O)||""===O,A=0,x=S.length;x>=0;x--)"."===(O=S[x])?S.splice(x,1):".."===O?(S.splice(x,1),A++):A&&(S.splice(x,1),A--);// if the path is allowed to go above the root, restore leading ..s
if(!w&&!_)for(;A--;A)S.unshift("..");w&&""!==S[0]&&(!S[0]||"/"!==S[0].charAt(0))&&S.unshift(""),T&&"/"!==S.join("/").substr(-1)&&S.push("");var j=""===S[0]||S[0]&&"/"===S[0].charAt(0);// put the host back
if(E){r.hostname=j?"":S.length?S.shift():"",r.host=r.hostname;/*
     * occationaly the auth can get stuck only in host
     * this especially happens in cases like
     * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
     */var R=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");R&&(r.auth=R.shift(),r.hostname=R.shift(),r.host=r.hostname)}return(w=w||r.host&&S.length)&&!j&&S.unshift(""),S.length>0?r.pathname=S.join("/"):(r.pathname=null,r.path=null),(null!==r.pathname||null!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},s.prototype.parseHost=function(){var e=this.host,t=u.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)},o=w}),n("8gbmd",function(t,r){!function(n){/** Detect free variables */var o=r&&!r.nodeType&&r,i=t&&!t.nodeType&&t,a="object"==typeof e&&e;(a.global===a||a.window===a||a.self===a)&&(n=a);/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */var s,/** Temporary variable */l,/** Regular expressions */u=/^xn--/,f=/[^\x20-\x7E]/,c=/[\x2E\u3002\uFF0E\uFF61]/g,/** Error messages */h={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,d=String.fromCharCode;/*--------------------------------------------------------------------------*//**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */function y(e){throw RangeError(h[e])}/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */function b(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */function g(e,t){var r=e.split("@"),n="";return r.length>1&&(// In email addresses, only the domain name should be punycoded. Leave
// the local part (i.e. everything up to `@`) intact.
n=r[0]+"@",e=r[1]),n+b(// Avoid `split(regex)` for IE8 compatibility. See #17.
(e=e.replace(c,".")).split("."),t).join(".")}/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */function m(e){for(var t,r,n=[],o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<i?(64512&// high surrogate, and there is a next character
(r=e.charCodeAt(o++)))==56320?n.push(((1023&t)<<10)+(1023&r)+65536):(// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
n.push(t),o--):n.push(t);return n}/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */function v(e){return b(e,function(e){var t="";return e>65535&&(e-=65536,t+=d(e>>>10&1023|55296),e=56320|1023&e),t+=d(e)}).join("")}/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */function w(e,t){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return e+22+75*(e<26)-((0!=t)<<5)}/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */function _(e,t,r){var n=0;for(e=r?p(e/700):e>>1,e+=p(e/t);e>455;n+=36)e=p(e/35);return p(n+36*e/(e+38))}/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */function S(e){// Don't use UCS-2
var t,r,n,o,i,a,s,l,u,f,/** Cached calculation results */c,h=[],d=e.length,b=0,g=128,m=72;for(// Handle the basic code points: let `basic` be the number of input code
// points before the last delimiter, or `0` if there is none, then copy
// the first basic code points to the output.
(n=e.lastIndexOf("-"))<0&&(n=0),o=0;o<n;++o)e.charCodeAt(o)>=128&&y("not-basic"),h.push(e.charCodeAt(o));// Main decoding loop: start just after the last delimiter if any basic code
// points were copied; start at the beginning otherwise.
for(i=n>0?n+1:0;i<d;){// `index` is the index of the next character to be consumed.
// Decode a generalized variable-length integer into `delta`,
// which gets added to `i`. The overflow checking is easier
// if we increase `i` as we go, then subtract off its starting
// value at the end to obtain `delta`.
for(a=b,s=1,l=36;i>=d&&y("invalid-input"),((u=(t=e.charCodeAt(i++))-48<10?t-22:t-65<26?t-65:t-97<26?t-97:36)>=36||u>p((2147483647-b)/s))&&y("overflow"),b+=u*s,!(u<(f=l<=m?1:l>=m+26?26:l-m));l+=36)s>p(2147483647/(c=36-f))&&y("overflow"),s*=c;m=_(b-a,r=h.length+1,0==a),p(b/r)>2147483647-g&&y("overflow"),g+=p(b/r),b%=r,// Insert `n` at position `i` of the output
h.splice(b++,0,g)}return v(h)}/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */function E(e){var t,r,n,o,i,a,s,l,u,f,c,/** `inputLength` will hold the number of code points in `input`. */h,/** Cached calculation results */b,g,v,S=[];// Handle the basic code points
for(a=0,// Cache the length
h=// Convert the input in UCS-2 to Unicode
(e=m(e)).length,// Initialize the state
t=128,r=0,i=72;a<h;++a)(c=e[a])<128&&S.push(d(c));// Main encoding loop:
for(n=o=S.length,o&&S.push("-");n<h;){// All non-basic code points < n have been handled already. Find the next
// larger one:
for(s=2147483647,a=0;a<h;++a)(c=e[a])>=t&&c<s&&(s=c);for(s-t>p((2147483647-r)/// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
// but guard against overflow
(b=n+1))&&y("overflow"),r+=(s-t)*b,t=s,a=0;a<h;++a)if((c=e[a])<t&&++r>2147483647&&y("overflow"),c==t){// Represent delta as a generalized variable-length integer
for(l=r,u=36;!(l<(f=u<=i?1:u>=i+26?26:u-i));u+=36)v=l-f,g=36-f,S.push(d(w(f+v%g,0))),l=p(v/g);S.push(d(w(l,0))),i=_(r,b,n==o),r=0,++n}++r,++t}return S.join("")}/** Expose `punycode` */// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(/*--------------------------------------------------------------------------*//** Define the public API */s={/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */version:"1.4.1",/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */ucs2:{decode:m,encode:v},decode:S,encode:E,toASCII:/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */function(e){return g(e,function(e){return f.test(e)?"xn--"+E(e):e})},toUnicode:/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */function(e){return g(e,function(e){return u.test(e)?S(e.slice(4).toLowerCase()):e})}},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return s});else if(o&&i){if(t.exports==o)i.exports=s;else for(l in s)s.hasOwnProperty(l)&&(o[l]=s[l])}else n.punycode=s}(this)}),n("kpaQ9",function(e,t){var n=r("kMReT"),o=r("gzWeL"),i=r("fuDol");e.exports={formats:i,parse:o,stringify:n}}),n("kMReT",function(e,t){var n=r("1ObTH"),o=r("fnMRP"),i=r("huOjc"),a=r("fuDol"),s=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},u=Array.isArray,f=Array.prototype.push,c=function(e,t){f.apply(e,u(t)?t:[t])},h=Date.prototype.toISOString,p=a.default,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,format:p,formatter:a.formatters[p],// deprecated
indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},y={},b=function e(t,r,a,s,l,f,h,p,b,g,m,v,w,_,S,E){for(var R,O,T=t,A=E,x=0,j=!1;void 0!==(A=A.get(y))&&!j;){// Where object last appeared in the ref tree
var P=A.get(t);if(x+=1,void 0!==P){if(P===x)throw RangeError("Cyclic object value");// Break while
j=!0}void 0===A.get(y)&&(x=0)}if("function"==typeof p?T=p(r,T):T instanceof Date?T=m(T):"comma"===a&&u(T)&&(T=i.maybeMap(T,function(e){return e instanceof Date?m(e):e})),null===T){if(l)return h&&!_?h(r,d.encoder,S,"key",v):r;T=""}if("string"==typeof(R=T)||"number"==typeof R||"boolean"==typeof R||(void 0===R?"undefined":(0,n._)(R))==="symbol"||(void 0===R?"undefined":(0,n._)(R))==="bigint"||i.isBuffer(T))return h?[w(_?r:h(r,d.encoder,S,"key",v))+"="+w(h(T,d.encoder,S,"value",v))]:[w(r)+"="+w(String(T))];var k=[];if(void 0===T)return k;if("comma"===a&&u(T))_&&h&&(T=i.maybeMap(T,h)),O=[{value:T.length>0?T.join(",")||null:void 0}];else if(u(p))O=p;else{var M=Object.keys(T);O=b?M.sort(b):M}for(var C=s&&u(T)&&1===T.length?r+"[]":r,N=0;N<O.length;++N){var L=O[N],D="object"==typeof L&&void 0!==L.value?L.value:T[L];if(!f||null!==D){var I=u(T)?"function"==typeof a?a(C,L):C:C+(g?"."+L:"["+L+"]");E.set(t,x);var F=o();F.set(y,E),c(k,e(D,I,a,s,l,f,"comma"===a&&_&&u(T)?null:h,p,b,g,m,v,w,_,S,F))}}return k},g=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if(void 0!==e.format){if(!s.call(a.formatters,e.format))throw TypeError("Unknown format option provided.");r=e.format}var n=a.formatters[r],o=d.filter;return("function"==typeof e.filter||u(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:void 0===e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:void 0===e.delimiter?d.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:d.encode,encoder:"function"==typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:o,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}};e.exports=function(e,t){var r,n,i=e,a=g(t);"function"==typeof a.filter?i=(0,a.filter)("",i):u(a.filter)&&(r=a.filter);var s=[];if("object"!=typeof i||null===i)return"";n=t&&t.arrayFormat in l?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var f=l[n];if(t&&"commaRoundTrip"in t&&"boolean"!=typeof t.commaRoundTrip)throw TypeError("`commaRoundTrip` must be a boolean, or absent");var h="comma"===f&&t&&t.commaRoundTrip;r||(r=Object.keys(i)),a.sort&&r.sort(a.sort);for(var p=o(),d=0;d<r.length;++d){var y=r[d];a.skipNulls&&null===i[y]||c(s,b(i[y],y,f,h,a.strictNullHandling,a.skipNulls,a.encode?a.encoder:null,a.filter,a.sort,a.allowDots,a.serializeDate,a.format,a.formatter,a.encodeValuesOnly,a.charset,p))}var m=s.join(a.delimiter),v=!0===a.addQueryPrefix?"?":"";return a.charsetSentinel&&("iso-8859-1"===a.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),m.length>0?v+m:""}}),n("fnMRP",function(e,t){var n=r("5KFGy"),o=r("a990d"),i=r("fzaGT"),a=n("%TypeError%"),s=n("%WeakMap%",!0),l=n("%Map%",!0),u=o("WeakMap.prototype.get",!0),f=o("WeakMap.prototype.set",!0),c=o("WeakMap.prototype.has",!0),h=o("Map.prototype.get",!0),p=o("Map.prototype.set",!0),d=o("Map.prototype.has",!0),y=function(e,t){for(var r,n=e;null!==(r=n.next);n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},b=function(e,t){var r=y(e,t);return r&&r.value},g=function(e,t,r){var n=y(e,t);n?n.value=r:e.next={key:t,next:e.next,value:r}};e.exports=function(){var e,t,r,n={assert:function(e){if(!n.has(e))throw new a("Side channel does not contain "+i(e))},get:function(n){if(s&&n&&("object"==typeof n||"function"==typeof n)){if(e)return u(e,n)}else if(l){if(t)return h(t,n)}else if(r)return b(r,n)},has:function(n){if(s&&n&&("object"==typeof n||"function"==typeof n)){if(e)return c(e,n)}else if(l){if(t)return d(t,n)}else if(r)return!!y(r,n);return!1},set:function(n,o){s&&n&&("object"==typeof n||"function"==typeof n)?(e||(e=new s),f(e,n,o)):l?(t||(t=new l),p(t,n,o)):(r||/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */(r={key:{},next:null}),g(r,n,o))}};return n}}),n("5KFGy",function(e,t){var n=SyntaxError,o=Function,i=TypeError,a=function(e){try{return o('"use strict"; return ('+e+").constructor;")()}catch(e){}},s=Object.getOwnPropertyDescriptor;if(s)try{s({},"")}catch(e){s=null;// this is IE 8, which has a broken gOPD
}var l=function(){throw new i},u=s?function(){try{return(// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
arguments.callee,l)}catch(e){try{// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
return s(arguments,"callee").get}catch(e){return l}}}():l,f=r("5r0Q9")(),c=r("bLAfM")(),h=Object.getPrototypeOf||(c?function(e){return e.__proto__}// eslint-disable-line no-proto
:null),p={},d="undefined"!=typeof Uint8Array&&h?h(Uint8Array):void 0,y={"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":f&&h?h([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":p,"%AsyncGenerator%":p,"%AsyncGeneratorFunction%":p,"%AsyncIteratorPrototype%":p,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?void 0:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?void 0:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry,"%Function%":o,"%GeneratorFunction%":p,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f&&h?h(h([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&f&&h?h(new Map()[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&f&&h?h(new Set()[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f&&h?h(""[Symbol.iterator]()):void 0,"%Symbol%":f?Symbol:void 0,"%SyntaxError%":n,"%ThrowTypeError%":u,"%TypedArray%":d,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet};if(h)try{null.error;// eslint-disable-line no-unused-expressions
}catch(e){// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
var b=h(h(e));y["%Error.prototype%"]=b}var g=function e(t){var r;if("%AsyncFunction%"===t)r=a("async function () {}");else if("%GeneratorFunction%"===t)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=a("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&h&&(r=h(o.prototype))}return y[t]=r,r},m={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=r("1F3qt"),w=r("2rT67"),_=v.call(Function.call,Array.prototype.concat),S=v.call(Function.apply,Array.prototype.splice),E=v.call(Function.call,String.prototype.replace),R=v.call(Function.call,String.prototype.slice),O=v.call(Function.call,RegExp.prototype.exec),T=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,A=/\\(\\)?/g,x=function(e){var t=R(e,0,1),r=R(e,-1);if("%"===t&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return E(e,T,function(e,t,r,n){o[o.length]=r?E(n,A,"$1"):t||e}),o},j=function(e,t){var r,o=e;if(w(m,o)&&(o="%"+(r=m[o])[0]+"%"),w(y,o)){var a=y[o];if(a===p&&(a=g(o)),void 0===a&&!t)throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:a}}throw new n("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new i('"allowMissing" argument must be a boolean');if(null===O(/^%?[^%]*%?$/,e))throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=x(e),o=r.length>0?r[0]:"",a=j("%"+o+"%",t),l=a.name,u=a.value,f=!1,c=a.alias;c&&(o=c[0],S(r,_([0,1],c)));for(var h=1,p=!0;h<r.length;h+=1){var d=r[h],b=R(d,0,1),g=R(d,-1);if(('"'===b||"'"===b||"`"===b||'"'===g||"'"===g||"`"===g)&&b!==g)throw new n("property names with quotes must have matching quotes");if("constructor"!==d&&p||(f=!0),o+="."+d,w(y,l="%"+o+"%"))u=y[l];else if(null!=u){if(!(d in u)){if(!t)throw new i("base intrinsic for "+e+" exists, but the property is not available.");return}if(s&&h+1>=r.length){var m=s(u,d);// By convention, when a data property is converted to an accessor
// property to emulate a data property that does not suffer from
// the override mistake, that accessor's getter is marked with
// an `originalValue` property. Here, when we detect this, we
// uphold the illusion by pretending to see that original data
// property, i.e., returning the value rather than the getter
// itself.
u=(p=!!m)&&"get"in m&&!("originalValue"in m.get)?m.get:u[d]}else p=w(u,d),u=u[d];p&&!f&&(y[l]=u)}}return u}}),n("5r0Q9",function(e,t){var n=r("1ObTH"),o="undefined"!=typeof Symbol&&Symbol,i=r("c2gQh");e.exports=function(){return"function"==typeof o&&"function"==typeof Symbol&&"symbol"===(0,n._)(o("foo"))&&"symbol"===(0,n._)(Symbol("bar"))&&i()}}),n("c2gQh",function(e,t){var n=r("1ObTH");/* eslint complexity: [2, 18], max-statements: [2, 33] */e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"===(0,n._)(Symbol.iterator))return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t||"[object Symbol]"!==Object.prototype.toString.call(t)||"[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;// eslint-disable-line no-restricted-syntax, no-unreachable-loop
if("function"==typeof Object.keys&&0!==Object.keys(e).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var o=Object.getOwnPropertySymbols(e);if(1!==o.length||o[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(e,t);if(42!==i.value||!0!==i.enumerable)return!1}return!0}}),n("bLAfM",function(e,t){var r={foo:{}},n=Object;e.exports=function(){return({__proto__:r}).foo===r.foo&&!(({__proto__:null})instanceof n)}}),n("1F3qt",function(e,t){var n=r("eovtQ");e.exports=Function.prototype.bind||n}),n("eovtQ",function(e,t){var r=Object.prototype.toString,n=Math.max,o=function(e,t){for(var r=[],n=0;n<e.length;n+=1)r[n]=e[n];for(var o=0;o<t.length;o+=1)r[o+e.length]=t[o];return r},i=function(e,t){for(var r=[],n=t||0,o=0;n<e.length;n+=1,o+=1)r[o]=e[n];return r},a=function(e,t){for(var r="",n=0;n<e.length;n+=1)r+=e[n],n+1<e.length&&(r+=t);return r};e.exports=function(e){var t,s=this;if("function"!=typeof s||"[object Function]"!==r.apply(s))throw TypeError("Function.prototype.bind called on incompatible "+s);for(var l=i(arguments,1),u=n(0,s.length-l.length),f=[],c=0;c<u;c++)f[c]="$"+c;if(t=Function("binder","return function ("+a(f,",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof t){var r=s.apply(this,o(l,arguments));return Object(r)===r?r:this}return s.apply(e,o(l,arguments))}),s.prototype){var h=function(){};h.prototype=s.prototype,t.prototype=new h,h.prototype=null}return t}}),n("2rT67",function(e,t){var n=Function.prototype.call,o=Object.prototype.hasOwnProperty,i=r("1F3qt");/** @type {(o: {}, p: PropertyKey) => p is keyof o} */e.exports=i.call(n,o)}),n("a990d",function(e,t){var n=r("5KFGy"),o=r("4bBQu"),i=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return"function"==typeof r&&i(e,".prototype.")>-1?o(r):r}}),n("4bBQu",function(e,t){var n=r("1F3qt"),o=r("5KFGy"),i=r("81RT3"),a=o("%TypeError%"),s=o("%Function.prototype.apply%"),l=o("%Function.prototype.call%"),u=o("%Reflect.apply%",!0)||n.call(l,s),f=o("%Object.defineProperty%",!0),c=o("%Math.max%");if(f)try{f({},"a",{value:1})}catch(e){// IE 8 has a broken defineProperty
f=null}e.exports=function(e){if("function"!=typeof e)throw new a("a function is required");var t=u(n,l,arguments);return i(t,1+c(0,e.length-(arguments.length-1)),!0)};var h=function(){return u(n,s,arguments)};f?f(e.exports,"apply",{value:h}):e.exports.apply=h}),n("81RT3",function(e,t){var n=r("5KFGy"),o=r("jTQbZ"),i=r("jvnto")(),a=r("lre78"),s=n("%TypeError%"),l=n("%Math.floor%");e.exports=function(e,t){if("function"!=typeof e)throw new s("`fn` is not a function");if("number"!=typeof t||t<0||t>4294967295||l(t)!==t)throw new s("`length` must be a positive 32-bit integer");var r=arguments.length>2&&!!arguments[2],n=!0,u=!0;if("length"in e&&a){var f=a(e,"length");f&&!f.configurable&&(n=!1),f&&!f.writable&&(u=!1)}return(n||u||!r)&&(i?o(e,"length",t,!0,!0):o(e,"length",t)),e}}),n("jTQbZ",function(e,t){var n=r("1ObTH"),o=r("jvnto")(),i=r("5KFGy"),a=o&&i("%Object.defineProperty%",!0);if(a)try{a({},"a",{value:1})}catch(e){// IE 8 has a broken defineProperty
a=!1}var s=i("%SyntaxError%"),l=i("%TypeError%"),u=r("lre78");/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */e.exports=function(e,t,r){if(!e||"object"!=typeof e&&"function"!=typeof e)throw new l("`obj` must be an object or a function`");if("string"!=typeof t&&(void 0===t?"undefined":(0,n._)(t))!=="symbol")throw new l("`property` must be a string or a symbol`");if(arguments.length>3&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new l("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new l("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new l("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&"boolean"!=typeof arguments[6])throw new l("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,i=arguments.length>4?arguments[4]:null,f=arguments.length>5?arguments[5]:null,c=arguments.length>6&&arguments[6],h=!!u&&u(e,t);if(a)a(e,t,{configurable:null===f&&h?h.configurable:!f,enumerable:null===o&&h?h.enumerable:!o,value:r,writable:null===i&&h?h.writable:!i});else if(!c&&(o||i||f))throw new s("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");else e[t]=r;// eslint-disable-line no-param-reassign
}}),n("jvnto",function(e,t){var n=r("5KFGy")("%Object.defineProperty%",!0),o=function(){if(n)try{return n({},"a",{value:1}),!0}catch(e){}return!1};o.hasArrayLengthDefineBug=function(){// node v0.6 has a bug where array lengths can be Set but not Defined
if(!o())return null;try{return 1!==n([],"length",{value:1}).length}catch(e){// In Firefox 4-22, defining length on an array throws an exception.
return!0}},e.exports=o}),n("lre78",function(e,t){var n=r("5KFGy")("%Object.getOwnPropertyDescriptor%",!0);if(n)try{n([],"length")}catch(e){// IE 8 has a broken gOPD
n=null}e.exports=n}),n("fzaGT",function(e,t){var n=r("1ObTH"),o="function"==typeof Map&&Map.prototype,i=Object.getOwnPropertyDescriptor&&o?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,a=o&&i&&"function"==typeof i.get?i.get:null,s=o&&Map.prototype.forEach,l="function"==typeof Set&&Set.prototype,u=Object.getOwnPropertyDescriptor&&l?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,f=l&&u&&"function"==typeof u.get?u.get:null,c=l&&Set.prototype.forEach,h="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,p="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,d="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,y=Boolean.prototype.valueOf,b=Object.prototype.toString,g=Function.prototype.toString,m=String.prototype.match,v=String.prototype.slice,w=String.prototype.replace,_=String.prototype.toUpperCase,S=String.prototype.toLowerCase,E=RegExp.prototype.test,R=Array.prototype.concat,O=Array.prototype.join,T=Array.prototype.slice,A=Math.floor,x="function"==typeof BigInt?BigInt.prototype.valueOf:null,j=Object.getOwnPropertySymbols,P="function"==typeof Symbol&&"symbol"===(0,n._)(Symbol.iterator)?Symbol.prototype.toString:null,k="function"==typeof Symbol&&"object"==typeof Symbol.iterator,M="function"==typeof Symbol&&Symbol.toStringTag&&((0,n._)(Symbol.toStringTag)===k?"object":"symbol")?Symbol.toStringTag:null,C=Object.prototype.propertyIsEnumerable,N=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype// eslint-disable-line no-proto
?function(e){return e.__proto__;// eslint-disable-line no-proto
}:null);function L(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||E.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var n=e<0?-A(-e):A(e);// trunc(num)
if(n!==e){var o=String(n),i=v.call(t,o.length+1);return w.call(o,r,"$&_")+"."+w.call(w.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return w.call(t,r,"$&_")}var D=r("aqbQf"),I=D.custom,F=H(I)?I:null;function q(e,t,r){var n="double"===(r.quoteStyle||t)?'"':"'";return n+e+n}function U(e){return"[object Array]"===z(e)&&(!M||!("object"==typeof e&&M in e))}function B(e){return"[object RegExp]"===z(e)&&(!M||!("object"==typeof e&&M in e))}// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function H(e){if(k)return e&&"object"==typeof e&&e instanceof Symbol;if((void 0===e?"undefined":(0,n._)(e))==="symbol")return!0;if(!e||"object"!=typeof e||!P)return!1;try{return P.call(e),!0}catch(e){}return!1}e.exports=function e(t,r,o,i){var l=r||{};if(G(l,"quoteStyle")&&"single"!==l.quoteStyle&&"double"!==l.quoteStyle)throw TypeError('option "quoteStyle" must be "single" or "double"');if(G(l,"maxStringLength")&&("number"==typeof l.maxStringLength?l.maxStringLength<0&&l.maxStringLength!==1/0:null!==l.maxStringLength))throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var u=!G(l,"customInspect")||l.customInspect;if("boolean"!=typeof u&&"symbol"!==u)throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(G(l,"indent")&&null!==l.indent&&"	"!==l.indent&&!(parseInt(l.indent,10)===l.indent&&l.indent>0))throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(G(l,"numericSeparator")&&"boolean"!=typeof l.numericSeparator)throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');var b=l.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return function e(t,r){if(t.length>r.maxStringLength){var n=t.length-r.maxStringLength;return e(v.call(t,0,r.maxStringLength),r)+"... "+n+" more character"+(n>1?"s":"")}return q(w.call(w.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,K),"single",r)}(t,l);if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0";var _=String(t);return b?L(t,_):_}if((void 0===t?"undefined":(0,n._)(t))==="bigint"){var E=String(t)+"n";return b?L(t,E):E}var A=void 0===l.depth?5:l.depth;if(void 0===o&&(o=0),o>=A&&A>0&&"object"==typeof t)return U(t)?"[Array]":"[Object]";var j=function(e,t){var r;if("	"===e.indent)r="	";else{if("number"!=typeof e.indent||!(e.indent>0))return null;r=O.call(Array(e.indent+1)," ")}return{base:r,prev:O.call(Array(t+1),r)}}(l,o);if(void 0===i)i=[];else if(Q(i,t)>=0)return"[Circular]";function I(t,r,n){if(r&&(i=T.call(i)).push(r),n){var a={depth:l.depth};return G(l,"quoteStyle")&&(a.quoteStyle=l.quoteStyle),e(t,a,o+1,i)}return e(t,l,o+1,i)}if("function"==typeof t&&!B(t)){var W=function(e){if(e.name)return e.name;var t=m.call(g.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),Z=J(t,I);return"[Function"+(W?": "+W:" (anonymous)")+"]"+(Z.length>0?" { "+O.call(Z,", ")+" }":"")}if(H(t)){var ee=k?w.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):P.call(t);return"object"!=typeof t||k?ee:V(ee)}if(t&&"object"==typeof t&&("undefined"!=typeof HTMLElement&&t instanceof HTMLElement||"string"==typeof t.nodeName&&"function"==typeof t.getAttribute)){for(var et,er="<"+S.call(String(t.nodeName)),en=t.attributes||[],eo=0;eo<en.length;eo++)er+=" "+en[eo].name+"="+q((et=en[eo].value,w.call(String(et),/"/g,"&quot;")),"double",l);return er+=">",t.childNodes&&t.childNodes.length&&(er+="..."),er+="</"+S.call(String(t.nodeName))+">"}if(U(t)){if(0===t.length)return"[]";var ei=J(t,I);return j&&!function(e){for(var t=0;t<e.length;t++)if(Q(e[t],"\n")>=0)return!1;return!0}(ei)?"["+X(ei,j)+"]":"[ "+O.call(ei,", ")+" ]"}if("[object Error]"===z(t)&&(!M||!("object"==typeof t&&M in t))){var ea=J(t,I);return"cause"in Error.prototype||!("cause"in t)||C.call(t,"cause")?0===ea.length?"["+String(t)+"]":"{ ["+String(t)+"] "+O.call(ea,", ")+" }":"{ ["+String(t)+"] "+O.call(R.call("[cause]: "+I(t.cause),ea),", ")+" }"}if("object"==typeof t&&u){if(F&&"function"==typeof t[F]&&D)return D(t,{depth:A-o});if("symbol"!==u&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!a||!e||"object"!=typeof e)return!1;try{a.call(e);try{f.call(e)}catch(e){return!0}return e instanceof Map;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t)){var es=[];return s&&s.call(t,function(e,r){es.push(I(r,t,!0)+" => "+I(e,t))}),$("Map",a.call(t),es,j)}if(function(e){if(!f||!e||"object"!=typeof e)return!1;try{f.call(e);try{a.call(e)}catch(e){return!0}return e instanceof Set;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t)){var el=[];return c&&c.call(t,function(e){el.push(I(e,t))}),$("Set",f.call(t),el,j)}if(function(e){if(!h||!e||"object"!=typeof e)return!1;try{h.call(e,h);try{p.call(e,p)}catch(e){return!0}return e instanceof WeakMap;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t))return Y("WeakMap");if(function(e){if(!p||!e||"object"!=typeof e)return!1;try{p.call(e,p);try{h.call(e,h)}catch(e){return!0}return e instanceof WeakSet;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t))return Y("WeakSet");if(function(e){if(!d||!e||"object"!=typeof e)return!1;try{return d.call(e),!0}catch(e){}return!1}(t))return Y("WeakRef");if("[object Number]"===z(t)&&(!M||!("object"==typeof t&&M in t)))return V(I(Number(t)));if(function(e){if(!e||"object"!=typeof e||!x)return!1;try{return x.call(e),!0}catch(e){}return!1}(t))return V(I(x.call(t)));if("[object Boolean]"===z(t)&&(!M||!("object"==typeof t&&M in t)))return V(y.call(t));if("[object String]"===z(t)&&(!M||!("object"==typeof t&&M in t)))return V(I(String(t)));if(!("[object Date]"===z(t)&&(!M||!("object"==typeof t&&M in t)))&&!B(t)){var eu=J(t,I),ef=N?N(t)===Object.prototype:t instanceof Object||t.constructor===Object,ec=t instanceof Object?"":"null prototype",eh=!ef&&M&&Object(t)===t&&M in t?v.call(z(t),8,-1):ec?"Object":"",ep=(ef||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(eh||ec?"["+O.call(R.call([],eh||[],ec||[]),": ")+"] ":"");return 0===eu.length?ep+"{}":j?ep+"{"+X(eu,j)+"}":ep+"{ "+O.call(eu,", ")+" }"}return String(t)};var W=Object.prototype.hasOwnProperty||function(e){return e in this};function G(e,t){return W.call(e,t)}function z(e){return b.call(e)}function Q(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return -1}function K(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+_.call(t.toString(16))}function V(e){return"Object("+e+")"}function Y(e){return e+" { ? }"}function $(e,t,r,n){return e+" ("+t+") {"+(n?X(r,n):O.call(r,", "))+"}"}function X(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+O.call(e,","+r)+"\n"+t.prev}function J(e,t){var r,n=U(e),o=[];if(n){o.length=e.length;for(var i=0;i<e.length;i++)o[i]=G(e,i)?t(e[i],e):""}var a="function"==typeof j?j(e):[];if(k){r={};for(var s=0;s<a.length;s++)r["$"+a[s]]=a[s]}for(var l in e)if(G(e,l)&&(!n||String(Number(l))!==l||!(l<e.length))){// eslint-disable-line no-restricted-syntax, no-continue
if(k&&r["$"+l]instanceof Symbol)continue;// eslint-disable-line no-restricted-syntax, no-continue
E.call(/[^\w$]/,l)?o.push(t(l,e)+": "+t(e[l],e)):o.push(l+": "+t(e[l],e))}if("function"==typeof j)for(var u=0;u<a.length;u++)C.call(e,a[u])&&o.push("["+t(a[u])+"]: "+t(e[a[u]],e));return o}}),n("huOjc",function(e,t){var n=r("1ObTH"),o=r("fuDol"),i=Object.prototype.hasOwnProperty,a=Array.isArray,s=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),l=function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(a(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}},u=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:u,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],a=Object.keys(i),s=0;s<a.length;++s){var u=a[s],f=i[u];"object"==typeof f&&null!==f&&-1===r.indexOf(f)&&(t.push({obj:i,prop:u}),r.push(f))}return l(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);// utf-8
try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,i,a){// This code was originally written by Brian White (mscdex) for the io.js core querystring library.
// It has been adapted here for stricter adherence to RFC 3986
if(0===e.length)return e;var l=e;if((void 0===e?"undefined":(0,n._)(e))==="symbol"?l=Symbol.prototype.toString.call(e):"string"!=typeof e&&(l=String(e)),"iso-8859-1"===r)return escape(l).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var u="",f=0;f<l.length;++f){var c=l.charCodeAt(f);if(45// -
===c||46// .
===c||95// _
===c||126// ~
===c||c>=48&&c<=57// 0-9
||c>=65&&c<=90// a-z
||c>=97&&c<=122// A-Z
||a===o.RFC1738&&(40===c||41// ( )
===c)){u+=l.charAt(f);continue}if(c<128){u+=s[c];continue}if(c<2048){u+=s[192|c>>6]+s[128|63&c];continue}if(c<55296||c>=57344){u+=s[224|c>>12]+s[128|c>>6&63]+s[128|63&c];continue}f+=1,/* eslint operator-linebreak: [2, "before"] */u+=s[240|(c=65536+((1023&c)<<10|1023&l.charCodeAt(f)))>>18]+s[128|c>>12&63]+s[128|c>>6&63]+s[128|63&c]}return u},isBuffer:function(e){return!!e&&"object"==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(a(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){/* eslint no-param-reassign: 0 */if(!r)return t;if("object"!=typeof r){if(a(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!i.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var o=t;return(a(t)&&!a(r)&&(o=u(t,n)),a(t)&&a(r))?(r.forEach(function(r,o){if(i.call(t,o)){var a=t[o];a&&"object"==typeof a&&r&&"object"==typeof r?t[o]=e(a,r,n):t.push(r)}else t[o]=r}),t):Object.keys(r).reduce(function(t,o){var a=r[o];return i.call(t,o)?t[o]=e(t[o],a,n):t[o]=a,t},o)}}}),n("fuDol",function(e,t){var r=String.prototype.replace,n=/%20/g,o={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports={default:o.RFC3986,formatters:{RFC1738:function(e){return r.call(e,n,"+")},RFC3986:function(e){return String(e)}},RFC1738:o.RFC1738,RFC3986:o.RFC3986}}),n("gzWeL",function(e,t){var n=r("huOjc"),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l=function(e,t){var r={__proto__:null},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,u=t.parameterLimit===1/0?void 0:t.parameterLimit,f=l.split(t.delimiter,u),c=-1,h=t.charset;if(t.charsetSentinel)for(p=0;p<f.length;++p)0===f[p].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[p]?h="utf-8":"utf8=%26%2310003%3B"===f[p]&&(h="iso-8859-1"),c=p,p=f.length);for(p=0;p<f.length;++p)if(p!==c){var p,d,y,b=f[p],g=b.indexOf("]="),m=-1===g?b.indexOf("="):g+1;-1===m?(d=t.decoder(b,a.decoder,h,"key"),y=t.strictNullHandling?null:""):(d=t.decoder(b.slice(0,m),a.decoder,h,"key"),y=n.maybeMap(s(b.slice(m+1),t),function(e){return t.decoder(e,a.decoder,h,"value")})),y&&t.interpretNumericEntities&&"iso-8859-1"===h&&(y=y.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})),b.indexOf("[]=")>-1&&(y=i(y)?[y]:y),o.call(r,d)?r[d]=n.combine(r[d],y):r[d]=y}return r},u=function(e,t,r,n){for(var o=n?t:s(t,r),i=e.length-1;i>=0;--i){var a,l=e[i];if("[]"===l&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var u="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1,-1):l,f=parseInt(u,10);r.parseArrays||""!==u?!isNaN(f)&&l!==u&&String(f)===u&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(a=[])[f]=o:"__proto__"!==u&&(a[u]=o):a={0:o}}o=a}return o},f=function(e,t,r,n){if(e){// Transform dot notation to bracket notation
var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,s=r.depth>0&&/(\[[^[\]]*])/.exec(i),l=s?i.slice(0,s.index):i,f=[];if(l){// If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;f.push(l)}for(// Loop through children appending to the array until we hit depth
var c=0;r.depth>0&&null!==(s=a.exec(i))&&c<r.depth;){if(c+=1,!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(s[1])}return s&&f.push("["+i.slice(s.index)+"]"),u(f,t,r,n)}},c=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:a.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,// eslint-disable-next-line no-implicit-coercion, no-extra-parens
depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}};e.exports=function(e,t){var r=c(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?l(e,r):e,i=r.plainObjects?Object.create(null):{},a=Object.keys(o),s=0;s<a.length;++s){var u=a[s],h=f(u,o[u],r,"string"==typeof e);i=n.merge(i,h,r)}return!0===r.allowSparse?i:n.compact(i)}}),n("cgKRG",function(e,t){var n=r("6ur3u"),o=r("3qbdd"),i=e.exports;for(var a in n)n.hasOwnProperty(a)&&(i[a]=n[a]);function s(e){if("string"==typeof e&&(e=o.parse(e)),e.protocol||(e.protocol="https:"),"https:"!==e.protocol)throw Error('Protocol "'+e.protocol+'" not supported. Expected "https:"');return e}i.request=function(e,t){return e=s(e),n.request.call(this,e,t)},i.get=function(e,t){return e=s(e),n.get.call(this,e,t)}})}();//# sourceMappingURL=fetch.f2613cce.js.map

//# sourceMappingURL=fetch.f2613cce.js.map

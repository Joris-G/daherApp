import {
  RequestStatus,
  RequestType
} from "./chunk-WS32T5JK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-B3DYXOBH.js";

// node_modules/msw/lib/core/utils/internal/isObject.mjs
function isObject(value) {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

// node_modules/msw/lib/core/utils/internal/mergeRight.mjs
function mergeRight(left, right) {
  return Object.entries(right).reduce((result, [key, rightValue]) => {
    const leftValue = result[key];
    if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
      result[key] = leftValue.concat(rightValue);
      return result;
    }
    if (isObject(leftValue) && isObject(rightValue)) {
      result[key] = mergeRight(leftValue, rightValue);
      return result;
    }
    result[key] = rightValue;
    return result;
  }, Object.assign({}, left));
}

// node_modules/outvariant/lib/index.mjs
var POSITIONALS_EXP = /(%?)(%([sdijo]))/g;
function serializePositional(positional, flag) {
  switch (flag) {
    case "s":
      return positional;
    case "d":
    case "i":
      return Number(positional);
    case "j":
      return JSON.stringify(positional);
    case "o": {
      if (typeof positional === "string") {
        return positional;
      }
      const json = JSON.stringify(positional);
      if (json === "{}" || json === "[]" || /^\[object .+?\]$/.test(json)) {
        return positional;
      }
      return json;
    }
  }
}
function format(message4, ...positionals) {
  if (positionals.length === 0) {
    return message4;
  }
  let positionalIndex = 0;
  let formattedMessage = message4.replace(POSITIONALS_EXP, (match2, isEscaped, _, flag) => {
    const positional = positionals[positionalIndex];
    const value = serializePositional(positional, flag);
    if (!isEscaped) {
      positionalIndex++;
      return value;
    }
    return match2;
  });
  if (positionalIndex < positionals.length) {
    formattedMessage += ` ${positionals.slice(positionalIndex).join(" ")}`;
  }
  formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
  return formattedMessage;
}
var STACK_FRAMES_TO_IGNORE = 2;
function cleanErrorStack(error4) {
  if (!error4.stack) {
    return;
  }
  const nextStack = error4.stack.split("\n");
  nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
  error4.stack = nextStack.join("\n");
}
var InvariantError = class extends Error {
  constructor(message4, ...positionals) {
    super(message4);
    this.message = message4;
    this.name = "Invariant Violation";
    this.message = format(message4, ...positionals);
    cleanErrorStack(this);
  }
};
var invariant = (predicate, message4, ...positionals) => {
  if (!predicate) {
    throw new InvariantError(message4, ...positionals);
  }
};
invariant.as = (ErrorConstructor, predicate, message4, ...positionals) => {
  if (!predicate) {
    const formatMessage2 = positionals.length === 0 ? message4 : format(message4, ...positionals);
    let error4;
    try {
      error4 = Reflect.construct(ErrorConstructor, [formatMessage2]);
    } catch (err) {
      error4 = ErrorConstructor(formatMessage2);
    }
    throw error4;
  }
};

// node_modules/msw/lib/core/utils/internal/devUtils.mjs
var LIBRARY_PREFIX = "[MSW]";
function formatMessage(message4, ...positionals) {
  const interpolatedMessage = format(message4, ...positionals);
  return `${LIBRARY_PREFIX} ${interpolatedMessage}`;
}
function warn(message4, ...positionals) {
  console.warn(formatMessage(message4, ...positionals));
}
function error(message4, ...positionals) {
  console.error(formatMessage(message4, ...positionals));
}
var devUtils = {
  formatMessage,
  warn,
  error
};
var InternalError = class extends Error {
  constructor(message4) {
    super(message4);
    this.name = "InternalError";
  }
};

// node_modules/msw/lib/core/utils/internal/getCallFrame.mjs
var SOURCE_FRAME = /[/\\]msw[/\\]src[/\\](.+)/;
var BUILD_FRAME = /(node_modules)?[/\\]lib[/\\](core|browser|node|native|iife)[/\\]|^[^/\\]*$/;
function getCallFrame(error4) {
  const stack = error4.stack;
  if (!stack) {
    return;
  }
  const frames = stack.split("\n").slice(1);
  const declarationFrame = frames.find((frame) => {
    return !(SOURCE_FRAME.test(frame) || BUILD_FRAME.test(frame));
  });
  if (!declarationFrame) {
    return;
  }
  const declarationPath = declarationFrame.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "");
  return declarationPath;
}

// node_modules/msw/lib/core/utils/internal/isIterable.mjs
function isIterable(fn) {
  if (!fn) {
    return false;
  }
  return Reflect.has(fn, Symbol.iterator) || Reflect.has(fn, Symbol.asyncIterator);
}

// node_modules/msw/lib/core/handlers/RequestHandler.mjs
var RequestHandler = class _RequestHandler {
  static cache = /* @__PURE__ */ new WeakMap();
  __kind;
  info;
  /**
   * Indicates whether this request handler has been used
   * (its resolver has successfully executed).
   */
  isUsed;
  resolver;
  resolverIterator;
  resolverIteratorResult;
  options;
  constructor(args) {
    this.resolver = args.resolver;
    this.options = args.options;
    const callFrame = getCallFrame(new Error());
    this.info = __spreadProps(__spreadValues({}, args.info), {
      callFrame
    });
    this.isUsed = false;
    this.__kind = "RequestHandler";
  }
  /**
   * Parse the intercepted request to extract additional information from it.
   * Parsed result is then exposed to other methods of this request handler.
   */
  parse(_args) {
    return __async(this, null, function* () {
      return {};
    });
  }
  /**
   * Test if this handler matches the given request.
   *
   * This method is not used internally but is exposed
   * as a convenience method for consumers writing custom
   * handlers.
   */
  test(args) {
    return __async(this, null, function* () {
      const parsedResult = yield this.parse({
        request: args.request,
        resolutionContext: args.resolutionContext
      });
      return this.predicate({
        request: args.request,
        parsedResult,
        resolutionContext: args.resolutionContext
      });
    });
  }
  extendResolverArgs(_args) {
    return {};
  }
  // Clone the request instance before it's passed to the handler phases
  // and the response resolver so we can always read it for logging.
  // We only clone it once per request to avoid unnecessary overhead.
  cloneRequestOrGetFromCache(request) {
    const existingClone = _RequestHandler.cache.get(request);
    if (typeof existingClone !== "undefined") {
      return existingClone;
    }
    const clonedRequest = request.clone();
    _RequestHandler.cache.set(request, clonedRequest);
    return clonedRequest;
  }
  /**
   * Execute this request handler and produce a mocked response
   * using the given resolver function.
   */
  run(args) {
    return __async(this, null, function* () {
      if (this.isUsed && this.options?.once) {
        return null;
      }
      const requestClone = this.cloneRequestOrGetFromCache(args.request);
      const parsedResult = yield this.parse({
        request: args.request,
        resolutionContext: args.resolutionContext
      });
      const shouldInterceptRequest = yield this.predicate({
        request: args.request,
        parsedResult,
        resolutionContext: args.resolutionContext
      });
      if (!shouldInterceptRequest) {
        return null;
      }
      if (this.isUsed && this.options?.once) {
        return null;
      }
      this.isUsed = true;
      const executeResolver = this.wrapResolver(this.resolver);
      const resolverExtras = this.extendResolverArgs({
        request: args.request,
        parsedResult
      });
      const mockedResponsePromise = executeResolver(__spreadProps(__spreadValues({}, resolverExtras), {
        requestId: args.requestId,
        request: args.request
      })).catch((errorOrResponse) => {
        if (errorOrResponse instanceof Response) {
          return errorOrResponse;
        }
        throw errorOrResponse;
      });
      const mockedResponse = yield mockedResponsePromise;
      const executionResult = this.createExecutionResult({
        // Pass the cloned request to the result so that logging
        // and other consumers could read its body once more.
        request: requestClone,
        requestId: args.requestId,
        response: mockedResponse,
        parsedResult
      });
      return executionResult;
    });
  }
  wrapResolver(resolver) {
    return (info) => __async(this, null, function* () {
      if (!this.resolverIterator) {
        const result = yield resolver(info);
        if (!isIterable(result)) {
          return result;
        }
        this.resolverIterator = Symbol.iterator in result ? result[Symbol.iterator]() : result[Symbol.asyncIterator]();
      }
      this.isUsed = false;
      const {
        done,
        value
      } = yield this.resolverIterator.next();
      const nextResponse = yield value;
      if (nextResponse) {
        this.resolverIteratorResult = nextResponse.clone();
      }
      if (done) {
        this.isUsed = true;
        return this.resolverIteratorResult?.clone();
      }
      return nextResponse;
    });
  }
  createExecutionResult(args) {
    return {
      handler: this,
      request: args.request,
      requestId: args.requestId,
      response: args.response,
      parsedResult: args.parsedResult
    };
  }
};

// node_modules/until-async/lib/index.js
function until(callback) {
  return __async(this, null, function* () {
    try {
      return [null, yield callback().catch((error4) => {
        throw error4;
      })];
    } catch (error4) {
      return [error4, null];
    }
  });
}

// node_modules/msw/lib/core/utils/executeHandlers.mjs
var executeHandlers = (_0) => __async(void 0, [_0], function* ({
  request,
  requestId,
  handlers: handlers2,
  resolutionContext
}) {
  let matchingHandler = null;
  let result = null;
  for (const handler of handlers2) {
    result = yield handler.run({
      request,
      requestId,
      resolutionContext
    });
    if (result !== null) {
      matchingHandler = handler;
    }
    if (result?.response) {
      break;
    }
  }
  if (matchingHandler) {
    return {
      handler: matchingHandler,
      parsedResult: result?.parsedResult,
      response: result?.response
    };
  }
  return null;
});

// node_modules/msw/lib/core/utils/request/toPublicUrl.mjs
function toPublicUrl(url) {
  if (typeof location === "undefined") {
    return url.toString();
  }
  const urlInstance = url instanceof URL ? url : new URL(url);
  return urlInstance.origin === location.origin ? urlInstance.pathname : urlInstance.origin + urlInstance.pathname;
}

// node_modules/msw/lib/core/isCommonAssetRequest.mjs
function isCommonAssetRequest(request) {
  const url = new URL(request.url);
  if (url.protocol === "file:") {
    return true;
  }
  if (/(fonts\.googleapis\.com)/.test(url.hostname)) {
    return true;
  }
  if (/node_modules/.test(url.pathname)) {
    return true;
  }
  if (url.pathname.includes("@vite")) {
    return true;
  }
  return /\.(s?css|less|m?jsx?|m?tsx?|html|ttf|otf|woff|woff2|eot|gif|jpe?g|png|avif|webp|svg|mp4|webm|ogg|mov|mp3|wav|ogg|flac|aac|pdf|txt|csv|json|xml|md|zip|tar|gz|rar|7z)$/i.test(url.pathname);
}

// node_modules/msw/lib/core/utils/request/onUnhandledRequest.mjs
function onUnhandledRequest(request, strategy = "warn") {
  return __async(this, null, function* () {
    const url = new URL(request.url);
    const publicUrl = toPublicUrl(url) + url.search;
    const requestBody = request.method === "HEAD" || request.method === "GET" ? null : yield request.clone().text();
    const messageDetails = `

  \u2022 ${request.method} ${publicUrl}

${requestBody ? `  \u2022 Request body: ${requestBody}

` : ""}`;
    const unhandledRequestMessage = `intercepted a request without a matching request handler:${messageDetails}If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`;
    function applyStrategy(strategy2) {
      switch (strategy2) {
        case "error": {
          devUtils.error("Error: %s", unhandledRequestMessage);
          throw new InternalError(devUtils.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'));
        }
        case "warn": {
          devUtils.warn("Warning: %s", unhandledRequestMessage);
          break;
        }
        case "bypass":
          break;
        default:
          throw new InternalError(devUtils.formatMessage('Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.', strategy2));
      }
    }
    if (typeof strategy === "function") {
      strategy(request, {
        warning: applyStrategy.bind(null, "warn"),
        error: applyStrategy.bind(null, "error")
      });
      return;
    }
    if (!isCommonAssetRequest(request)) {
      applyStrategy(strategy);
    }
  });
}

// node_modules/is-node-process/lib/index.mjs
function isNodeProcess() {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return true;
  }
  if (typeof process !== "undefined") {
    const type = process.type;
    if (type === "renderer" || type === "worker") {
      return false;
    }
    return !!(process.versions && process.versions.node);
  }
  return false;
}

// node_modules/tldts-core/dist/es6/src/domain.js
function shareSameDomainSuffix(hostname, vhost) {
  if (hostname.endsWith(vhost)) {
    return hostname.length === vhost.length || hostname[hostname.length - vhost.length - 1] === ".";
  }
  return false;
}
function extractDomainWithSuffix(hostname, publicSuffix) {
  const publicSuffixIndex = hostname.length - publicSuffix.length - 2;
  const lastDotBeforeSuffixIndex = hostname.lastIndexOf(".", publicSuffixIndex);
  if (lastDotBeforeSuffixIndex === -1) {
    return hostname;
  }
  return hostname.slice(lastDotBeforeSuffixIndex + 1);
}
function getDomain(suffix, hostname, options) {
  if (options.validHosts !== null) {
    const validHosts = options.validHosts;
    for (const vhost of validHosts) {
      if (
        /*@__INLINE__*/
        shareSameDomainSuffix(hostname, vhost)
      ) {
        return vhost;
      }
    }
  }
  let numberOfLeadingDots = 0;
  if (hostname.startsWith(".")) {
    while (numberOfLeadingDots < hostname.length && hostname[numberOfLeadingDots] === ".") {
      numberOfLeadingDots += 1;
    }
  }
  if (suffix.length === hostname.length - numberOfLeadingDots) {
    return null;
  }
  return (
    /*@__INLINE__*/
    extractDomainWithSuffix(hostname, suffix)
  );
}

// node_modules/tldts-core/dist/es6/src/domain-without-suffix.js
function getDomainWithoutSuffix(domain, suffix) {
  return domain.slice(0, -suffix.length - 1);
}

// node_modules/tldts-core/dist/es6/src/extract-hostname.js
function extractHostname(url, urlIsValidHostname) {
  let start = 0;
  let end = url.length;
  let hasUpper = false;
  if (!urlIsValidHostname) {
    if (url.startsWith("data:")) {
      return null;
    }
    while (start < url.length && url.charCodeAt(start) <= 32) {
      start += 1;
    }
    while (end > start + 1 && url.charCodeAt(end - 1) <= 32) {
      end -= 1;
    }
    if (url.charCodeAt(start) === 47 && url.charCodeAt(start + 1) === 47) {
      start += 2;
    } else {
      const indexOfProtocol = url.indexOf(":/", start);
      if (indexOfProtocol !== -1) {
        const protocolSize = indexOfProtocol - start;
        const c0 = url.charCodeAt(start);
        const c1 = url.charCodeAt(start + 1);
        const c2 = url.charCodeAt(start + 2);
        const c3 = url.charCodeAt(start + 3);
        const c4 = url.charCodeAt(start + 4);
        if (protocolSize === 5 && c0 === 104 && c1 === 116 && c2 === 116 && c3 === 112 && c4 === 115) {
        } else if (protocolSize === 4 && c0 === 104 && c1 === 116 && c2 === 116 && c3 === 112) {
        } else if (protocolSize === 3 && c0 === 119 && c1 === 115 && c2 === 115) {
        } else if (protocolSize === 2 && c0 === 119 && c1 === 115) {
        } else {
          for (let i = start; i < indexOfProtocol; i += 1) {
            const lowerCaseCode = url.charCodeAt(i) | 32;
            if (!(lowerCaseCode >= 97 && lowerCaseCode <= 122 || // [a, z]
            lowerCaseCode >= 48 && lowerCaseCode <= 57 || // [0, 9]
            lowerCaseCode === 46 || // '.'
            lowerCaseCode === 45 || // '-'
            lowerCaseCode === 43)) {
              return null;
            }
          }
        }
        start = indexOfProtocol + 2;
        while (url.charCodeAt(start) === 47) {
          start += 1;
        }
      }
    }
    let indexOfIdentifier = -1;
    let indexOfClosingBracket = -1;
    let indexOfPort = -1;
    for (let i = start; i < end; i += 1) {
      const code = url.charCodeAt(i);
      if (code === 35 || // '#'
      code === 47 || // '/'
      code === 63) {
        end = i;
        break;
      } else if (code === 64) {
        indexOfIdentifier = i;
      } else if (code === 93) {
        indexOfClosingBracket = i;
      } else if (code === 58) {
        indexOfPort = i;
      } else if (code >= 65 && code <= 90) {
        hasUpper = true;
      }
    }
    if (indexOfIdentifier !== -1 && indexOfIdentifier > start && indexOfIdentifier < end) {
      start = indexOfIdentifier + 1;
    }
    if (url.charCodeAt(start) === 91) {
      if (indexOfClosingBracket !== -1) {
        return url.slice(start + 1, indexOfClosingBracket).toLowerCase();
      }
      return null;
    } else if (indexOfPort !== -1 && indexOfPort > start && indexOfPort < end) {
      end = indexOfPort;
    }
  }
  while (end > start + 1 && url.charCodeAt(end - 1) === 46) {
    end -= 1;
  }
  const hostname = start !== 0 || end !== url.length ? url.slice(start, end) : url;
  if (hasUpper) {
    return hostname.toLowerCase();
  }
  return hostname;
}

// node_modules/tldts-core/dist/es6/src/is-ip.js
function isProbablyIpv4(hostname) {
  if (hostname.length < 7) {
    return false;
  }
  if (hostname.length > 15) {
    return false;
  }
  let numberOfDots = 0;
  for (let i = 0; i < hostname.length; i += 1) {
    const code = hostname.charCodeAt(i);
    if (code === 46) {
      numberOfDots += 1;
    } else if (code < 48 || code > 57) {
      return false;
    }
  }
  return numberOfDots === 3 && hostname.charCodeAt(0) !== 46 && hostname.charCodeAt(hostname.length - 1) !== 46;
}
function isProbablyIpv6(hostname) {
  if (hostname.length < 3) {
    return false;
  }
  let start = hostname.startsWith("[") ? 1 : 0;
  let end = hostname.length;
  if (hostname[end - 1] === "]") {
    end -= 1;
  }
  if (end - start > 39) {
    return false;
  }
  let hasColon = false;
  for (; start < end; start += 1) {
    const code = hostname.charCodeAt(start);
    if (code === 58) {
      hasColon = true;
    } else if (!(code >= 48 && code <= 57 || // 0-9
    code >= 97 && code <= 102 || // a-f
    code >= 65 && code <= 90)) {
      return false;
    }
  }
  return hasColon;
}
function isIp(hostname) {
  return isProbablyIpv6(hostname) || isProbablyIpv4(hostname);
}

// node_modules/tldts-core/dist/es6/src/is-valid.js
function isValidAscii(code) {
  return code >= 97 && code <= 122 || code >= 48 && code <= 57 || code > 127;
}
function is_valid_default(hostname) {
  if (hostname.length > 255) {
    return false;
  }
  if (hostname.length === 0) {
    return false;
  }
  if (
    /*@__INLINE__*/
    !isValidAscii(hostname.charCodeAt(0)) && hostname.charCodeAt(0) !== 46 && // '.' (dot)
    hostname.charCodeAt(0) !== 95
  ) {
    return false;
  }
  let lastDotIndex = -1;
  let lastCharCode = -1;
  const len = hostname.length;
  for (let i = 0; i < len; i += 1) {
    const code = hostname.charCodeAt(i);
    if (code === 46) {
      if (
        // Check that previous label is < 63 bytes long (64 = 63 + '.')
        i - lastDotIndex > 64 || // Check that previous character was not already a '.'
        lastCharCode === 46 || // Check that the previous label does not end with a '-' (dash)
        lastCharCode === 45 || // Check that the previous label does not end with a '_' (underscore)
        lastCharCode === 95
      ) {
        return false;
      }
      lastDotIndex = i;
    } else if (!/*@__INLINE__*/
    (isValidAscii(code) || code === 45 || code === 95)) {
      return false;
    }
    lastCharCode = code;
  }
  return (
    // Check that last label is shorter than 63 chars
    len - lastDotIndex - 1 <= 63 && // Check that the last character is an allowed trailing label character.
    // Since we already checked that the char is a valid hostname character,
    // we only need to check that it's different from '-'.
    lastCharCode !== 45
  );
}

// node_modules/tldts-core/dist/es6/src/options.js
function setDefaultsImpl({
  allowIcannDomains = true,
  allowPrivateDomains = false,
  detectIp = true,
  extractHostname: extractHostname2 = true,
  mixedInputs = true,
  validHosts = null,
  validateHostname = true
}) {
  return {
    allowIcannDomains,
    allowPrivateDomains,
    detectIp,
    extractHostname: extractHostname2,
    mixedInputs,
    validHosts,
    validateHostname
  };
}
var DEFAULT_OPTIONS = (
  /*@__INLINE__*/
  setDefaultsImpl({})
);
function setDefaults(options) {
  if (options === void 0) {
    return DEFAULT_OPTIONS;
  }
  return (
    /*@__INLINE__*/
    setDefaultsImpl(options)
  );
}

// node_modules/tldts-core/dist/es6/src/subdomain.js
function getSubdomain(hostname, domain) {
  if (domain.length === hostname.length) {
    return "";
  }
  return hostname.slice(0, -domain.length - 1);
}

// node_modules/tldts-core/dist/es6/src/factory.js
function getEmptyResult() {
  return {
    domain: null,
    domainWithoutSuffix: null,
    hostname: null,
    isIcann: null,
    isIp: null,
    isPrivate: null,
    publicSuffix: null,
    subdomain: null
  };
}
function resetResult(result) {
  result.domain = null;
  result.domainWithoutSuffix = null;
  result.hostname = null;
  result.isIcann = null;
  result.isIp = null;
  result.isPrivate = null;
  result.publicSuffix = null;
  result.subdomain = null;
}
function parseImpl(url, step, suffixLookup2, partialOptions, result) {
  const options = (
    /*@__INLINE__*/
    setDefaults(partialOptions)
  );
  if (typeof url !== "string") {
    return result;
  }
  if (!options.extractHostname) {
    result.hostname = url;
  } else if (options.mixedInputs) {
    result.hostname = extractHostname(url, is_valid_default(url));
  } else {
    result.hostname = extractHostname(url, false);
  }
  if (options.detectIp && result.hostname !== null) {
    result.isIp = isIp(result.hostname);
    if (result.isIp) {
      return result;
    }
  }
  if (options.validateHostname && options.extractHostname && result.hostname !== null && !is_valid_default(result.hostname)) {
    result.hostname = null;
    return result;
  }
  if (step === 0 || result.hostname === null) {
    return result;
  }
  suffixLookup2(result.hostname, options, result);
  if (step === 2 || result.publicSuffix === null) {
    return result;
  }
  result.domain = getDomain(result.publicSuffix, result.hostname, options);
  if (step === 3 || result.domain === null) {
    return result;
  }
  result.subdomain = getSubdomain(result.hostname, result.domain);
  if (step === 4) {
    return result;
  }
  result.domainWithoutSuffix = getDomainWithoutSuffix(result.domain, result.publicSuffix);
  return result;
}

// node_modules/tldts-core/dist/es6/src/lookup/fast-path.js
function fast_path_default(hostname, options, out) {
  if (!options.allowPrivateDomains && hostname.length > 3) {
    const last = hostname.length - 1;
    const c3 = hostname.charCodeAt(last);
    const c2 = hostname.charCodeAt(last - 1);
    const c1 = hostname.charCodeAt(last - 2);
    const c0 = hostname.charCodeAt(last - 3);
    if (c3 === 109 && c2 === 111 && c1 === 99 && c0 === 46) {
      out.isIcann = true;
      out.isPrivate = false;
      out.publicSuffix = "com";
      return true;
    } else if (c3 === 103 && c2 === 114 && c1 === 111 && c0 === 46) {
      out.isIcann = true;
      out.isPrivate = false;
      out.publicSuffix = "org";
      return true;
    } else if (c3 === 117 && c2 === 100 && c1 === 101 && c0 === 46) {
      out.isIcann = true;
      out.isPrivate = false;
      out.publicSuffix = "edu";
      return true;
    } else if (c3 === 118 && c2 === 111 && c1 === 103 && c0 === 46) {
      out.isIcann = true;
      out.isPrivate = false;
      out.publicSuffix = "gov";
      return true;
    } else if (c3 === 116 && c2 === 101 && c1 === 110 && c0 === 46) {
      out.isIcann = true;
      out.isPrivate = false;
      out.publicSuffix = "net";
      return true;
    } else if (c3 === 101 && c2 === 100 && c1 === 46) {
      out.isIcann = true;
      out.isPrivate = false;
      out.publicSuffix = "de";
      return true;
    }
  }
  return false;
}

// node_modules/tldts/dist/es6/src/data/trie.js
var exceptions = /* @__PURE__ */ function() {
  const _0 = [1, {}], _1 = [0, {
    "city": _0
  }];
  const exceptions2 = [0, {
    "ck": [0, {
      "www": _0
    }],
    "jp": [0, {
      "kawasaki": _1,
      "kitakyushu": _1,
      "kobe": _1,
      "nagoya": _1,
      "sapporo": _1,
      "sendai": _1,
      "yokohama": _1
    }]
  }];
  return exceptions2;
}();
var rules = /* @__PURE__ */ function() {
  const _2 = [1, {}], _3 = [2, {}], _4 = [1, {
    "com": _2,
    "edu": _2,
    "gov": _2,
    "net": _2,
    "org": _2
  }], _5 = [1, {
    "com": _2,
    "edu": _2,
    "gov": _2,
    "mil": _2,
    "net": _2,
    "org": _2
  }], _6 = [0, {
    "*": _3
  }], _7 = [2, {
    "s": _6
  }], _8 = [0, {
    "relay": _3
  }], _9 = [2, {
    "id": _3
  }], _10 = [1, {
    "gov": _2
  }], _11 = [2, {
    "vps": _3
  }], _12 = [0, {
    "airflow": _6,
    "transfer-webapp": _3
  }], _13 = [0, {
    "transfer-webapp": _3,
    "transfer-webapp-fips": _3
  }], _14 = [0, {
    "notebook": _3,
    "studio": _3
  }], _15 = [0, {
    "labeling": _3,
    "notebook": _3,
    "studio": _3
  }], _16 = [0, {
    "notebook": _3
  }], _17 = [0, {
    "labeling": _3,
    "notebook": _3,
    "notebook-fips": _3,
    "studio": _3
  }], _18 = [0, {
    "notebook": _3,
    "notebook-fips": _3,
    "studio": _3,
    "studio-fips": _3
  }], _19 = [0, {
    "shop": _3
  }], _20 = [0, {
    "*": _2
  }], _21 = [1, {
    "co": _3
  }], _22 = [0, {
    "objects": _3
  }], _23 = [2, {
    "nodes": _3
  }], _24 = [0, {
    "my": _3
  }], _25 = [0, {
    "s3": _3,
    "s3-accesspoint": _3,
    "s3-website": _3
  }], _26 = [0, {
    "s3": _3,
    "s3-accesspoint": _3
  }], _27 = [0, {
    "direct": _3
  }], _28 = [0, {
    "webview-assets": _3
  }], _29 = [0, {
    "vfs": _3,
    "webview-assets": _3
  }], _30 = [0, {
    "execute-api": _3,
    "emrappui-prod": _3,
    "emrnotebooks-prod": _3,
    "emrstudio-prod": _3,
    "dualstack": _25,
    "s3": _3,
    "s3-accesspoint": _3,
    "s3-object-lambda": _3,
    "s3-website": _3,
    "aws-cloud9": _28,
    "cloud9": _29
  }], _31 = [0, {
    "execute-api": _3,
    "emrappui-prod": _3,
    "emrnotebooks-prod": _3,
    "emrstudio-prod": _3,
    "dualstack": _26,
    "s3": _3,
    "s3-accesspoint": _3,
    "s3-object-lambda": _3,
    "s3-website": _3,
    "aws-cloud9": _28,
    "cloud9": _29
  }], _32 = [0, {
    "execute-api": _3,
    "emrappui-prod": _3,
    "emrnotebooks-prod": _3,
    "emrstudio-prod": _3,
    "dualstack": _25,
    "s3": _3,
    "s3-accesspoint": _3,
    "s3-object-lambda": _3,
    "s3-website": _3,
    "analytics-gateway": _3,
    "aws-cloud9": _28,
    "cloud9": _29
  }], _33 = [0, {
    "execute-api": _3,
    "emrappui-prod": _3,
    "emrnotebooks-prod": _3,
    "emrstudio-prod": _3,
    "dualstack": _25,
    "s3": _3,
    "s3-accesspoint": _3,
    "s3-object-lambda": _3,
    "s3-website": _3
  }], _34 = [0, {
    "s3": _3,
    "s3-accesspoint": _3,
    "s3-accesspoint-fips": _3,
    "s3-fips": _3,
    "s3-website": _3
  }], _35 = [0, {
    "execute-api": _3,
    "emrappui-prod": _3,
    "emrnotebooks-prod": _3,
    "emrstudio-prod": _3,
    "dualstack": _34,
    "s3": _3,
    "s3-accesspoint": _3,
    "s3-accesspoint-fips": _3,
    "s3-fips": _3,
    "s3-object-lambda": _3,
    "s3-website": _3,
    "aws-cloud9": _28,
    "cloud9": _29
  }], _36 = [0, {
    "execute-api": _3,
    "emrappui-prod": _3,
    "emrnotebooks-prod": _3,
    "emrstudio-prod": _3,
    "dualstack": _34,
    "s3": _3,
    "s3-accesspoint": _3,
    "s3-accesspoint-fips": _3,
    "s3-deprecated": _3,
    "s3-fips": _3,
    "s3-object-lambda": _3,
    "s3-website": _3,
    "analytics-gateway": _3,
    "aws-cloud9": _28,
    "cloud9": _29
  }], _37 = [0, {
    "s3": _3,
    "s3-accesspoint": _3,
    "s3-accesspoint-fips": _3,
    "s3-fips": _3
  }], _38 = [0, {
    "execute-api": _3,
    "emrappui-prod": _3,
    "emrnotebooks-prod": _3,
    "emrstudio-prod": _3,
    "dualstack": _37,
    "s3": _3,
    "s3-accesspoint": _3,
    "s3-accesspoint-fips": _3,
    "s3-fips": _3,
    "s3-object-lambda": _3,
    "s3-website": _3
  }], _39 = [0, {
    "auth": _3
  }], _40 = [0, {
    "auth": _3,
    "auth-fips": _3
  }], _41 = [0, {
    "auth-fips": _3
  }], _42 = [0, {
    "apps": _3
  }], _43 = [0, {
    "paas": _3
  }], _44 = [2, {
    "eu": _3
  }], _45 = [0, {
    "app": _3
  }], _46 = [0, {
    "site": _3
  }], _47 = [1, {
    "com": _2,
    "edu": _2,
    "net": _2,
    "org": _2
  }], _48 = [0, {
    "j": _3
  }], _49 = [0, {
    "dyn": _3
  }], _50 = [2, {
    "web": _3
  }], _51 = [1, {
    "co": _2,
    "com": _2,
    "edu": _2,
    "gov": _2,
    "net": _2,
    "org": _2
  }], _52 = [0, {
    "p": _3
  }], _53 = [0, {
    "user": _3
  }], _54 = [0, {
    "cdn": _3
  }], _55 = [2, {
    "raw": _6
  }], _56 = [0, {
    "cust": _3,
    "reservd": _3
  }], _57 = [0, {
    "cust": _3
  }], _58 = [0, {
    "s3": _3
  }], _59 = [1, {
    "biz": _2,
    "com": _2,
    "edu": _2,
    "gov": _2,
    "info": _2,
    "net": _2,
    "org": _2
  }], _60 = [0, {
    "ipfs": _3
  }], _61 = [1, {
    "framer": _3
  }], _62 = [0, {
    "forgot": _3
  }], _63 = [1, {
    "gs": _2
  }], _64 = [0, {
    "nes": _2
  }], _65 = [1, {
    "k12": _2,
    "cc": _2,
    "lib": _2
  }], _66 = [1, {
    "cc": _2
  }], _67 = [1, {
    "cc": _2,
    "lib": _2
  }];
  const rules2 = [0, {
    "ac": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "drr": _3,
      "feedback": _3,
      "forms": _3
    }],
    "ad": _2,
    "ae": [1, {
      "ac": _2,
      "co": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "sch": _2
    }],
    "aero": [1, {
      "airline": _2,
      "airport": _2,
      "accident-investigation": _2,
      "accident-prevention": _2,
      "aerobatic": _2,
      "aeroclub": _2,
      "aerodrome": _2,
      "agents": _2,
      "air-surveillance": _2,
      "air-traffic-control": _2,
      "aircraft": _2,
      "airtraffic": _2,
      "ambulance": _2,
      "association": _2,
      "author": _2,
      "ballooning": _2,
      "broker": _2,
      "caa": _2,
      "cargo": _2,
      "catering": _2,
      "certification": _2,
      "championship": _2,
      "charter": _2,
      "civilaviation": _2,
      "club": _2,
      "conference": _2,
      "consultant": _2,
      "consulting": _2,
      "control": _2,
      "council": _2,
      "crew": _2,
      "design": _2,
      "dgca": _2,
      "educator": _2,
      "emergency": _2,
      "engine": _2,
      "engineer": _2,
      "entertainment": _2,
      "equipment": _2,
      "exchange": _2,
      "express": _2,
      "federation": _2,
      "flight": _2,
      "freight": _2,
      "fuel": _2,
      "gliding": _2,
      "government": _2,
      "groundhandling": _2,
      "group": _2,
      "hanggliding": _2,
      "homebuilt": _2,
      "insurance": _2,
      "journal": _2,
      "journalist": _2,
      "leasing": _2,
      "logistics": _2,
      "magazine": _2,
      "maintenance": _2,
      "marketplace": _2,
      "media": _2,
      "microlight": _2,
      "modelling": _2,
      "navigation": _2,
      "parachuting": _2,
      "paragliding": _2,
      "passenger-association": _2,
      "pilot": _2,
      "press": _2,
      "production": _2,
      "recreation": _2,
      "repbody": _2,
      "res": _2,
      "research": _2,
      "rotorcraft": _2,
      "safety": _2,
      "scientist": _2,
      "services": _2,
      "show": _2,
      "skydiving": _2,
      "software": _2,
      "student": _2,
      "taxi": _2,
      "trader": _2,
      "trading": _2,
      "trainer": _2,
      "union": _2,
      "workinggroup": _2,
      "works": _2
    }],
    "af": _4,
    "ag": [1, {
      "co": _2,
      "com": _2,
      "net": _2,
      "nom": _2,
      "org": _2,
      "obj": _3
    }],
    "ai": [1, {
      "com": _2,
      "net": _2,
      "off": _2,
      "org": _2,
      "uwu": _3,
      "framer": _3
    }],
    "al": _5,
    "am": [1, {
      "co": _2,
      "com": _2,
      "commune": _2,
      "net": _2,
      "org": _2,
      "radio": _3
    }],
    "ao": [1, {
      "co": _2,
      "ed": _2,
      "edu": _2,
      "gov": _2,
      "gv": _2,
      "it": _2,
      "og": _2,
      "org": _2,
      "pb": _2
    }],
    "aq": _2,
    "ar": [1, {
      "bet": _2,
      "com": _2,
      "coop": _2,
      "edu": _2,
      "gob": _2,
      "gov": _2,
      "int": _2,
      "mil": _2,
      "musica": _2,
      "mutual": _2,
      "net": _2,
      "org": _2,
      "seg": _2,
      "senasa": _2,
      "tur": _2
    }],
    "arpa": [1, {
      "e164": _2,
      "home": _2,
      "in-addr": _2,
      "ip6": _2,
      "iris": _2,
      "uri": _2,
      "urn": _2
    }],
    "as": _10,
    "asia": [1, {
      "cloudns": _3,
      "daemon": _3,
      "dix": _3
    }],
    "at": [1, {
      "4": _3,
      "ac": [1, {
        "sth": _2
      }],
      "co": _2,
      "gv": _2,
      "or": _2,
      "funkfeuer": [0, {
        "wien": _3
      }],
      "futurecms": [0, {
        "*": _3,
        "ex": _6,
        "in": _6
      }],
      "futurehosting": _3,
      "futuremailing": _3,
      "ortsinfo": [0, {
        "ex": _6,
        "kunden": _6
      }],
      "biz": _3,
      "info": _3,
      "123webseite": _3,
      "priv": _3,
      "my": _3,
      "myspreadshop": _3,
      "12hp": _3,
      "2ix": _3,
      "4lima": _3,
      "lima-city": _3
    }],
    "au": [1, {
      "asn": _2,
      "com": [1, {
        "cloudlets": [0, {
          "mel": _3
        }],
        "myspreadshop": _3
      }],
      "edu": [1, {
        "act": _2,
        "catholic": _2,
        "nsw": _2,
        "nt": _2,
        "qld": _2,
        "sa": _2,
        "tas": _2,
        "vic": _2,
        "wa": _2
      }],
      "gov": [1, {
        "qld": _2,
        "sa": _2,
        "tas": _2,
        "vic": _2,
        "wa": _2
      }],
      "id": _2,
      "net": _2,
      "org": _2,
      "conf": _2,
      "oz": _2,
      "act": _2,
      "nsw": _2,
      "nt": _2,
      "qld": _2,
      "sa": _2,
      "tas": _2,
      "vic": _2,
      "wa": _2,
      "hrsn": _11
    }],
    "aw": [1, {
      "com": _2
    }],
    "ax": _2,
    "az": [1, {
      "biz": _2,
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "info": _2,
      "int": _2,
      "mil": _2,
      "name": _2,
      "net": _2,
      "org": _2,
      "pp": _2,
      "pro": _2
    }],
    "ba": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "brendly": _19,
      "rs": _3
    }],
    "bb": [1, {
      "biz": _2,
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "info": _2,
      "net": _2,
      "org": _2,
      "store": _2,
      "tv": _2
    }],
    "bd": _20,
    "be": [1, {
      "ac": _2,
      "cloudns": _3,
      "webhosting": _3,
      "interhostsolutions": [0, {
        "cloud": _3
      }],
      "kuleuven": [0, {
        "ezproxy": _3
      }],
      "123website": _3,
      "myspreadshop": _3,
      "transurl": _6
    }],
    "bf": _10,
    "bg": [1, {
      "0": _2,
      "1": _2,
      "2": _2,
      "3": _2,
      "4": _2,
      "5": _2,
      "6": _2,
      "7": _2,
      "8": _2,
      "9": _2,
      "a": _2,
      "b": _2,
      "c": _2,
      "d": _2,
      "e": _2,
      "f": _2,
      "g": _2,
      "h": _2,
      "i": _2,
      "j": _2,
      "k": _2,
      "l": _2,
      "m": _2,
      "n": _2,
      "o": _2,
      "p": _2,
      "q": _2,
      "r": _2,
      "s": _2,
      "t": _2,
      "u": _2,
      "v": _2,
      "w": _2,
      "x": _2,
      "y": _2,
      "z": _2,
      "barsy": _3
    }],
    "bh": _4,
    "bi": [1, {
      "co": _2,
      "com": _2,
      "edu": _2,
      "or": _2,
      "org": _2
    }],
    "biz": [1, {
      "activetrail": _3,
      "cloud-ip": _3,
      "cloudns": _3,
      "jozi": _3,
      "dyndns": _3,
      "for-better": _3,
      "for-more": _3,
      "for-some": _3,
      "for-the": _3,
      "selfip": _3,
      "webhop": _3,
      "orx": _3,
      "mmafan": _3,
      "myftp": _3,
      "no-ip": _3,
      "dscloud": _3
    }],
    "bj": [1, {
      "africa": _2,
      "agro": _2,
      "architectes": _2,
      "assur": _2,
      "avocats": _2,
      "co": _2,
      "com": _2,
      "eco": _2,
      "econo": _2,
      "edu": _2,
      "info": _2,
      "loisirs": _2,
      "money": _2,
      "net": _2,
      "org": _2,
      "ote": _2,
      "restaurant": _2,
      "resto": _2,
      "tourism": _2,
      "univ": _2
    }],
    "bm": _4,
    "bn": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "co": _3
    }],
    "bo": [1, {
      "com": _2,
      "edu": _2,
      "gob": _2,
      "int": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "tv": _2,
      "web": _2,
      "academia": _2,
      "agro": _2,
      "arte": _2,
      "blog": _2,
      "bolivia": _2,
      "ciencia": _2,
      "cooperativa": _2,
      "democracia": _2,
      "deporte": _2,
      "ecologia": _2,
      "economia": _2,
      "empresa": _2,
      "indigena": _2,
      "industria": _2,
      "info": _2,
      "medicina": _2,
      "movimiento": _2,
      "musica": _2,
      "natural": _2,
      "nombre": _2,
      "noticias": _2,
      "patria": _2,
      "plurinacional": _2,
      "politica": _2,
      "profesional": _2,
      "pueblo": _2,
      "revista": _2,
      "salud": _2,
      "tecnologia": _2,
      "tksat": _2,
      "transporte": _2,
      "wiki": _2
    }],
    "br": [1, {
      "9guacu": _2,
      "abc": _2,
      "adm": _2,
      "adv": _2,
      "agr": _2,
      "aju": _2,
      "am": _2,
      "anani": _2,
      "aparecida": _2,
      "api": _2,
      "app": _2,
      "arq": _2,
      "art": _2,
      "ato": _2,
      "b": _2,
      "barueri": _2,
      "belem": _2,
      "bet": _2,
      "bhz": _2,
      "bib": _2,
      "bio": _2,
      "blog": _2,
      "bmd": _2,
      "boavista": _2,
      "bsb": _2,
      "campinagrande": _2,
      "campinas": _2,
      "caxias": _2,
      "cim": _2,
      "cng": _2,
      "cnt": _2,
      "com": [1, {
        "simplesite": _3
      }],
      "contagem": _2,
      "coop": _2,
      "coz": _2,
      "cri": _2,
      "cuiaba": _2,
      "curitiba": _2,
      "def": _2,
      "des": _2,
      "det": _2,
      "dev": _2,
      "ecn": _2,
      "eco": _2,
      "edu": _2,
      "emp": _2,
      "enf": _2,
      "eng": _2,
      "esp": _2,
      "etc": _2,
      "eti": _2,
      "far": _2,
      "feira": _2,
      "flog": _2,
      "floripa": _2,
      "fm": _2,
      "fnd": _2,
      "fortal": _2,
      "fot": _2,
      "foz": _2,
      "fst": _2,
      "g12": _2,
      "geo": _2,
      "ggf": _2,
      "goiania": _2,
      "gov": [1, {
        "ac": _2,
        "al": _2,
        "am": _2,
        "ap": _2,
        "ba": _2,
        "ce": _2,
        "df": _2,
        "es": _2,
        "go": _2,
        "ma": _2,
        "mg": _2,
        "ms": _2,
        "mt": _2,
        "pa": _2,
        "pb": _2,
        "pe": _2,
        "pi": _2,
        "pr": _2,
        "rj": _2,
        "rn": _2,
        "ro": _2,
        "rr": _2,
        "rs": _2,
        "sc": _2,
        "se": _2,
        "sp": _2,
        "to": _2
      }],
      "gru": _2,
      "ia": _2,
      "imb": _2,
      "ind": _2,
      "inf": _2,
      "jab": _2,
      "jampa": _2,
      "jdf": _2,
      "joinville": _2,
      "jor": _2,
      "jus": _2,
      "leg": [1, {
        "ac": _3,
        "al": _3,
        "am": _3,
        "ap": _3,
        "ba": _3,
        "ce": _3,
        "df": _3,
        "es": _3,
        "go": _3,
        "ma": _3,
        "mg": _3,
        "ms": _3,
        "mt": _3,
        "pa": _3,
        "pb": _3,
        "pe": _3,
        "pi": _3,
        "pr": _3,
        "rj": _3,
        "rn": _3,
        "ro": _3,
        "rr": _3,
        "rs": _3,
        "sc": _3,
        "se": _3,
        "sp": _3,
        "to": _3
      }],
      "leilao": _2,
      "lel": _2,
      "log": _2,
      "londrina": _2,
      "macapa": _2,
      "maceio": _2,
      "manaus": _2,
      "maringa": _2,
      "mat": _2,
      "med": _2,
      "mil": _2,
      "morena": _2,
      "mp": _2,
      "mus": _2,
      "natal": _2,
      "net": _2,
      "niteroi": _2,
      "nom": _20,
      "not": _2,
      "ntr": _2,
      "odo": _2,
      "ong": _2,
      "org": _2,
      "osasco": _2,
      "palmas": _2,
      "poa": _2,
      "ppg": _2,
      "pro": _2,
      "psc": _2,
      "psi": _2,
      "pvh": _2,
      "qsl": _2,
      "radio": _2,
      "rec": _2,
      "recife": _2,
      "rep": _2,
      "ribeirao": _2,
      "rio": _2,
      "riobranco": _2,
      "riopreto": _2,
      "salvador": _2,
      "sampa": _2,
      "santamaria": _2,
      "santoandre": _2,
      "saobernardo": _2,
      "saogonca": _2,
      "seg": _2,
      "sjc": _2,
      "slg": _2,
      "slz": _2,
      "social": _2,
      "sorocaba": _2,
      "srv": _2,
      "taxi": _2,
      "tc": _2,
      "tec": _2,
      "teo": _2,
      "the": _2,
      "tmp": _2,
      "trd": _2,
      "tur": _2,
      "tv": _2,
      "udi": _2,
      "vet": _2,
      "vix": _2,
      "vlog": _2,
      "wiki": _2,
      "xyz": _2,
      "zlg": _2,
      "tche": _3
    }],
    "bs": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "we": _3
    }],
    "bt": _4,
    "bv": _2,
    "bw": [1, {
      "ac": _2,
      "co": _2,
      "gov": _2,
      "net": _2,
      "org": _2
    }],
    "by": [1, {
      "gov": _2,
      "mil": _2,
      "com": _2,
      "of": _2,
      "mediatech": _3
    }],
    "bz": [1, {
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "za": _3,
      "mydns": _3,
      "gsj": _3
    }],
    "ca": [1, {
      "ab": _2,
      "bc": _2,
      "mb": _2,
      "nb": _2,
      "nf": _2,
      "nl": _2,
      "ns": _2,
      "nt": _2,
      "nu": _2,
      "on": _2,
      "pe": _2,
      "qc": _2,
      "sk": _2,
      "yk": _2,
      "gc": _2,
      "barsy": _3,
      "awdev": _6,
      "co": _3,
      "no-ip": _3,
      "onid": _3,
      "myspreadshop": _3,
      "box": _3
    }],
    "cat": _2,
    "cc": [1, {
      "cleverapps": _3,
      "cloud-ip": _3,
      "cloudns": _3,
      "ftpaccess": _3,
      "game-server": _3,
      "myphotos": _3,
      "scrapping": _3,
      "twmail": _3,
      "csx": _3,
      "fantasyleague": _3,
      "spawn": [0, {
        "instances": _3
      }]
    }],
    "cd": _10,
    "cf": _2,
    "cg": _2,
    "ch": [1, {
      "square7": _3,
      "cloudns": _3,
      "cloudscale": [0, {
        "cust": _3,
        "lpg": _22,
        "rma": _22
      }],
      "objectstorage": [0, {
        "lpg": _3,
        "rma": _3
      }],
      "flow": [0, {
        "ae": [0, {
          "alp1": _3
        }],
        "appengine": _3
      }],
      "linkyard-cloud": _3,
      "gotdns": _3,
      "dnsking": _3,
      "123website": _3,
      "myspreadshop": _3,
      "firenet": [0, {
        "*": _3,
        "svc": _6
      }],
      "12hp": _3,
      "2ix": _3,
      "4lima": _3,
      "lima-city": _3
    }],
    "ci": [1, {
      "ac": _2,
      "xn--aroport-bya": _2,
      "a\xE9roport": _2,
      "asso": _2,
      "co": _2,
      "com": _2,
      "ed": _2,
      "edu": _2,
      "go": _2,
      "gouv": _2,
      "int": _2,
      "net": _2,
      "or": _2,
      "org": _2
    }],
    "ck": _20,
    "cl": [1, {
      "co": _2,
      "gob": _2,
      "gov": _2,
      "mil": _2,
      "cloudns": _3
    }],
    "cm": [1, {
      "co": _2,
      "com": _2,
      "gov": _2,
      "net": _2
    }],
    "cn": [1, {
      "ac": _2,
      "com": [1, {
        "amazonaws": [0, {
          "cn-north-1": [0, {
            "execute-api": _3,
            "emrappui-prod": _3,
            "emrnotebooks-prod": _3,
            "emrstudio-prod": _3,
            "dualstack": _25,
            "s3": _3,
            "s3-accesspoint": _3,
            "s3-deprecated": _3,
            "s3-object-lambda": _3,
            "s3-website": _3
          }],
          "cn-northwest-1": [0, {
            "execute-api": _3,
            "emrappui-prod": _3,
            "emrnotebooks-prod": _3,
            "emrstudio-prod": _3,
            "dualstack": _26,
            "s3": _3,
            "s3-accesspoint": _3,
            "s3-object-lambda": _3,
            "s3-website": _3
          }],
          "compute": _6,
          "airflow": [0, {
            "cn-north-1": _6,
            "cn-northwest-1": _6
          }],
          "eb": [0, {
            "cn-north-1": _3,
            "cn-northwest-1": _3
          }],
          "elb": _6
        }],
        "amazonwebservices": [0, {
          "on": [0, {
            "cn-north-1": _12,
            "cn-northwest-1": _12
          }]
        }],
        "sagemaker": [0, {
          "cn-north-1": _14,
          "cn-northwest-1": _14
        }]
      }],
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "xn--55qx5d": _2,
      "\u516C\u53F8": _2,
      "xn--od0alg": _2,
      "\u7DB2\u7D61": _2,
      "xn--io0a7i": _2,
      "\u7F51\u7EDC": _2,
      "ah": _2,
      "bj": _2,
      "cq": _2,
      "fj": _2,
      "gd": _2,
      "gs": _2,
      "gx": _2,
      "gz": _2,
      "ha": _2,
      "hb": _2,
      "he": _2,
      "hi": _2,
      "hk": _2,
      "hl": _2,
      "hn": _2,
      "jl": _2,
      "js": _2,
      "jx": _2,
      "ln": _2,
      "mo": _2,
      "nm": _2,
      "nx": _2,
      "qh": _2,
      "sc": _2,
      "sd": _2,
      "sh": [1, {
        "as": _3
      }],
      "sn": _2,
      "sx": _2,
      "tj": _2,
      "tw": _2,
      "xj": _2,
      "xz": _2,
      "yn": _2,
      "zj": _2,
      "canva-apps": _3,
      "canvasite": _24,
      "myqnapcloud": _3,
      "quickconnect": _27
    }],
    "co": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "nom": _2,
      "org": _2,
      "carrd": _3,
      "crd": _3,
      "otap": _6,
      "hidns": _3,
      "leadpages": _3,
      "lpages": _3,
      "mypi": _3,
      "xmit": _6,
      "firewalledreplit": _9,
      "repl": _9,
      "supabase": [2, {
        "realtime": _3,
        "storage": _3
      }]
    }],
    "com": [1, {
      "a2hosted": _3,
      "cpserver": _3,
      "adobeaemcloud": [2, {
        "dev": _6
      }],
      "africa": _3,
      "aivencloud": _3,
      "alibabacloudcs": _3,
      "kasserver": _3,
      "amazonaws": [0, {
        "af-south-1": _30,
        "ap-east-1": _31,
        "ap-northeast-1": _32,
        "ap-northeast-2": _32,
        "ap-northeast-3": _30,
        "ap-south-1": _32,
        "ap-south-2": _33,
        "ap-southeast-1": _32,
        "ap-southeast-2": _32,
        "ap-southeast-3": _33,
        "ap-southeast-4": _33,
        "ap-southeast-5": [0, {
          "execute-api": _3,
          "dualstack": _25,
          "s3": _3,
          "s3-accesspoint": _3,
          "s3-deprecated": _3,
          "s3-object-lambda": _3,
          "s3-website": _3
        }],
        "ca-central-1": _35,
        "ca-west-1": [0, {
          "execute-api": _3,
          "emrappui-prod": _3,
          "emrnotebooks-prod": _3,
          "emrstudio-prod": _3,
          "dualstack": _34,
          "s3": _3,
          "s3-accesspoint": _3,
          "s3-accesspoint-fips": _3,
          "s3-fips": _3,
          "s3-object-lambda": _3,
          "s3-website": _3
        }],
        "eu-central-1": _32,
        "eu-central-2": _33,
        "eu-north-1": _31,
        "eu-south-1": _30,
        "eu-south-2": _33,
        "eu-west-1": [0, {
          "execute-api": _3,
          "emrappui-prod": _3,
          "emrnotebooks-prod": _3,
          "emrstudio-prod": _3,
          "dualstack": _25,
          "s3": _3,
          "s3-accesspoint": _3,
          "s3-deprecated": _3,
          "s3-object-lambda": _3,
          "s3-website": _3,
          "analytics-gateway": _3,
          "aws-cloud9": _28,
          "cloud9": _29
        }],
        "eu-west-2": _31,
        "eu-west-3": _30,
        "il-central-1": [0, {
          "execute-api": _3,
          "emrappui-prod": _3,
          "emrnotebooks-prod": _3,
          "emrstudio-prod": _3,
          "dualstack": _25,
          "s3": _3,
          "s3-accesspoint": _3,
          "s3-object-lambda": _3,
          "s3-website": _3,
          "aws-cloud9": _28,
          "cloud9": [0, {
            "vfs": _3
          }]
        }],
        "me-central-1": _33,
        "me-south-1": _31,
        "sa-east-1": _30,
        "us-east-1": [2, {
          "execute-api": _3,
          "emrappui-prod": _3,
          "emrnotebooks-prod": _3,
          "emrstudio-prod": _3,
          "dualstack": _34,
          "s3": _3,
          "s3-accesspoint": _3,
          "s3-accesspoint-fips": _3,
          "s3-deprecated": _3,
          "s3-fips": _3,
          "s3-object-lambda": _3,
          "s3-website": _3,
          "analytics-gateway": _3,
          "aws-cloud9": _28,
          "cloud9": _29
        }],
        "us-east-2": _36,
        "us-gov-east-1": _38,
        "us-gov-west-1": _38,
        "us-west-1": _35,
        "us-west-2": _36,
        "compute": _6,
        "compute-1": _6,
        "airflow": [0, {
          "af-south-1": _6,
          "ap-east-1": _6,
          "ap-northeast-1": _6,
          "ap-northeast-2": _6,
          "ap-northeast-3": _6,
          "ap-south-1": _6,
          "ap-south-2": _6,
          "ap-southeast-1": _6,
          "ap-southeast-2": _6,
          "ap-southeast-3": _6,
          "ap-southeast-4": _6,
          "ap-southeast-5": _6,
          "ca-central-1": _6,
          "ca-west-1": _6,
          "eu-central-1": _6,
          "eu-central-2": _6,
          "eu-north-1": _6,
          "eu-south-1": _6,
          "eu-south-2": _6,
          "eu-west-1": _6,
          "eu-west-2": _6,
          "eu-west-3": _6,
          "il-central-1": _6,
          "me-central-1": _6,
          "me-south-1": _6,
          "sa-east-1": _6,
          "us-east-1": _6,
          "us-east-2": _6,
          "us-west-1": _6,
          "us-west-2": _6
        }],
        "s3": _3,
        "s3-1": _3,
        "s3-ap-east-1": _3,
        "s3-ap-northeast-1": _3,
        "s3-ap-northeast-2": _3,
        "s3-ap-northeast-3": _3,
        "s3-ap-south-1": _3,
        "s3-ap-southeast-1": _3,
        "s3-ap-southeast-2": _3,
        "s3-ca-central-1": _3,
        "s3-eu-central-1": _3,
        "s3-eu-north-1": _3,
        "s3-eu-west-1": _3,
        "s3-eu-west-2": _3,
        "s3-eu-west-3": _3,
        "s3-external-1": _3,
        "s3-fips-us-gov-east-1": _3,
        "s3-fips-us-gov-west-1": _3,
        "s3-global": [0, {
          "accesspoint": [0, {
            "mrap": _3
          }]
        }],
        "s3-me-south-1": _3,
        "s3-sa-east-1": _3,
        "s3-us-east-2": _3,
        "s3-us-gov-east-1": _3,
        "s3-us-gov-west-1": _3,
        "s3-us-west-1": _3,
        "s3-us-west-2": _3,
        "s3-website-ap-northeast-1": _3,
        "s3-website-ap-southeast-1": _3,
        "s3-website-ap-southeast-2": _3,
        "s3-website-eu-west-1": _3,
        "s3-website-sa-east-1": _3,
        "s3-website-us-east-1": _3,
        "s3-website-us-gov-west-1": _3,
        "s3-website-us-west-1": _3,
        "s3-website-us-west-2": _3,
        "elb": _6
      }],
      "amazoncognito": [0, {
        "af-south-1": _39,
        "ap-east-1": _39,
        "ap-northeast-1": _39,
        "ap-northeast-2": _39,
        "ap-northeast-3": _39,
        "ap-south-1": _39,
        "ap-south-2": _39,
        "ap-southeast-1": _39,
        "ap-southeast-2": _39,
        "ap-southeast-3": _39,
        "ap-southeast-4": _39,
        "ap-southeast-5": _39,
        "ap-southeast-7": _39,
        "ca-central-1": _39,
        "ca-west-1": _39,
        "eu-central-1": _39,
        "eu-central-2": _39,
        "eu-north-1": _39,
        "eu-south-1": _39,
        "eu-south-2": _39,
        "eu-west-1": _39,
        "eu-west-2": _39,
        "eu-west-3": _39,
        "il-central-1": _39,
        "me-central-1": _39,
        "me-south-1": _39,
        "mx-central-1": _39,
        "sa-east-1": _39,
        "us-east-1": _40,
        "us-east-2": _40,
        "us-gov-east-1": _41,
        "us-gov-west-1": _41,
        "us-west-1": _40,
        "us-west-2": _40
      }],
      "amplifyapp": _3,
      "awsapprunner": _6,
      "awsapps": _3,
      "elasticbeanstalk": [2, {
        "af-south-1": _3,
        "ap-east-1": _3,
        "ap-northeast-1": _3,
        "ap-northeast-2": _3,
        "ap-northeast-3": _3,
        "ap-south-1": _3,
        "ap-southeast-1": _3,
        "ap-southeast-2": _3,
        "ap-southeast-3": _3,
        "ca-central-1": _3,
        "eu-central-1": _3,
        "eu-north-1": _3,
        "eu-south-1": _3,
        "eu-west-1": _3,
        "eu-west-2": _3,
        "eu-west-3": _3,
        "il-central-1": _3,
        "me-south-1": _3,
        "sa-east-1": _3,
        "us-east-1": _3,
        "us-east-2": _3,
        "us-gov-east-1": _3,
        "us-gov-west-1": _3,
        "us-west-1": _3,
        "us-west-2": _3
      }],
      "awsglobalaccelerator": _3,
      "siiites": _3,
      "appspacehosted": _3,
      "appspaceusercontent": _3,
      "on-aptible": _3,
      "myasustor": _3,
      "balena-devices": _3,
      "boutir": _3,
      "bplaced": _3,
      "cafjs": _3,
      "canva-apps": _3,
      "rice-labs": _3,
      "cdn77-storage": _3,
      "br": _3,
      "cn": _3,
      "de": _3,
      "eu": _3,
      "jpn": _3,
      "mex": _3,
      "ru": _3,
      "sa": _3,
      "uk": _3,
      "us": _3,
      "za": _3,
      "clever-cloud": [0, {
        "services": _6
      }],
      "abrdns": _3,
      "dnsabr": _3,
      "ip-ddns": _3,
      "jdevcloud": _3,
      "wpdevcloud": _3,
      "cf-ipfs": _3,
      "cloudflare-ipfs": _3,
      "trycloudflare": _3,
      "co": _3,
      "devinapps": _6,
      "builtwithdark": _3,
      "datadetect": [0, {
        "demo": _3,
        "instance": _3
      }],
      "dattolocal": _3,
      "dattorelay": _3,
      "dattoweb": _3,
      "mydatto": _3,
      "digitaloceanspaces": _6,
      "discordsays": _3,
      "discordsez": _3,
      "drayddns": _3,
      "dreamhosters": _3,
      "durumis": _3,
      "blogdns": _3,
      "cechire": _3,
      "dnsalias": _3,
      "dnsdojo": _3,
      "doesntexist": _3,
      "dontexist": _3,
      "doomdns": _3,
      "dyn-o-saur": _3,
      "dynalias": _3,
      "dyndns-at-home": _3,
      "dyndns-at-work": _3,
      "dyndns-blog": _3,
      "dyndns-free": _3,
      "dyndns-home": _3,
      "dyndns-ip": _3,
      "dyndns-mail": _3,
      "dyndns-office": _3,
      "dyndns-pics": _3,
      "dyndns-remote": _3,
      "dyndns-server": _3,
      "dyndns-web": _3,
      "dyndns-wiki": _3,
      "dyndns-work": _3,
      "est-a-la-maison": _3,
      "est-a-la-masion": _3,
      "est-le-patron": _3,
      "est-mon-blogueur": _3,
      "from-ak": _3,
      "from-al": _3,
      "from-ar": _3,
      "from-ca": _3,
      "from-ct": _3,
      "from-dc": _3,
      "from-de": _3,
      "from-fl": _3,
      "from-ga": _3,
      "from-hi": _3,
      "from-ia": _3,
      "from-id": _3,
      "from-il": _3,
      "from-in": _3,
      "from-ks": _3,
      "from-ky": _3,
      "from-ma": _3,
      "from-md": _3,
      "from-mi": _3,
      "from-mn": _3,
      "from-mo": _3,
      "from-ms": _3,
      "from-mt": _3,
      "from-nc": _3,
      "from-nd": _3,
      "from-ne": _3,
      "from-nh": _3,
      "from-nj": _3,
      "from-nm": _3,
      "from-nv": _3,
      "from-oh": _3,
      "from-ok": _3,
      "from-or": _3,
      "from-pa": _3,
      "from-pr": _3,
      "from-ri": _3,
      "from-sc": _3,
      "from-sd": _3,
      "from-tn": _3,
      "from-tx": _3,
      "from-ut": _3,
      "from-va": _3,
      "from-vt": _3,
      "from-wa": _3,
      "from-wi": _3,
      "from-wv": _3,
      "from-wy": _3,
      "getmyip": _3,
      "gotdns": _3,
      "hobby-site": _3,
      "homelinux": _3,
      "homeunix": _3,
      "iamallama": _3,
      "is-a-anarchist": _3,
      "is-a-blogger": _3,
      "is-a-bookkeeper": _3,
      "is-a-bulls-fan": _3,
      "is-a-caterer": _3,
      "is-a-chef": _3,
      "is-a-conservative": _3,
      "is-a-cpa": _3,
      "is-a-cubicle-slave": _3,
      "is-a-democrat": _3,
      "is-a-designer": _3,
      "is-a-doctor": _3,
      "is-a-financialadvisor": _3,
      "is-a-geek": _3,
      "is-a-green": _3,
      "is-a-guru": _3,
      "is-a-hard-worker": _3,
      "is-a-hunter": _3,
      "is-a-landscaper": _3,
      "is-a-lawyer": _3,
      "is-a-liberal": _3,
      "is-a-libertarian": _3,
      "is-a-llama": _3,
      "is-a-musician": _3,
      "is-a-nascarfan": _3,
      "is-a-nurse": _3,
      "is-a-painter": _3,
      "is-a-personaltrainer": _3,
      "is-a-photographer": _3,
      "is-a-player": _3,
      "is-a-republican": _3,
      "is-a-rockstar": _3,
      "is-a-socialist": _3,
      "is-a-student": _3,
      "is-a-teacher": _3,
      "is-a-techie": _3,
      "is-a-therapist": _3,
      "is-an-accountant": _3,
      "is-an-actor": _3,
      "is-an-actress": _3,
      "is-an-anarchist": _3,
      "is-an-artist": _3,
      "is-an-engineer": _3,
      "is-an-entertainer": _3,
      "is-certified": _3,
      "is-gone": _3,
      "is-into-anime": _3,
      "is-into-cars": _3,
      "is-into-cartoons": _3,
      "is-into-games": _3,
      "is-leet": _3,
      "is-not-certified": _3,
      "is-slick": _3,
      "is-uberleet": _3,
      "is-with-theband": _3,
      "isa-geek": _3,
      "isa-hockeynut": _3,
      "issmarterthanyou": _3,
      "likes-pie": _3,
      "likescandy": _3,
      "neat-url": _3,
      "saves-the-whales": _3,
      "selfip": _3,
      "sells-for-less": _3,
      "sells-for-u": _3,
      "servebbs": _3,
      "simple-url": _3,
      "space-to-rent": _3,
      "teaches-yoga": _3,
      "writesthisblog": _3,
      "ddnsfree": _3,
      "ddnsgeek": _3,
      "giize": _3,
      "gleeze": _3,
      "kozow": _3,
      "loseyourip": _3,
      "ooguy": _3,
      "theworkpc": _3,
      "mytuleap": _3,
      "tuleap-partners": _3,
      "encoreapi": _3,
      "evennode": [0, {
        "eu-1": _3,
        "eu-2": _3,
        "eu-3": _3,
        "eu-4": _3,
        "us-1": _3,
        "us-2": _3,
        "us-3": _3,
        "us-4": _3
      }],
      "onfabrica": _3,
      "fastly-edge": _3,
      "fastly-terrarium": _3,
      "fastvps-server": _3,
      "mydobiss": _3,
      "firebaseapp": _3,
      "fldrv": _3,
      "forgeblocks": _3,
      "framercanvas": _3,
      "freebox-os": _3,
      "freeboxos": _3,
      "freemyip": _3,
      "aliases121": _3,
      "gentapps": _3,
      "gentlentapis": _3,
      "githubusercontent": _3,
      "0emm": _6,
      "appspot": [2, {
        "r": _6
      }],
      "blogspot": _3,
      "codespot": _3,
      "googleapis": _3,
      "googlecode": _3,
      "pagespeedmobilizer": _3,
      "withgoogle": _3,
      "withyoutube": _3,
      "grayjayleagues": _3,
      "hatenablog": _3,
      "hatenadiary": _3,
      "herokuapp": _3,
      "gr": _3,
      "smushcdn": _3,
      "wphostedmail": _3,
      "wpmucdn": _3,
      "pixolino": _3,
      "apps-1and1": _3,
      "live-website": _3,
      "webspace-host": _3,
      "dopaas": _3,
      "hosted-by-previder": _43,
      "hosteur": [0, {
        "rag-cloud": _3,
        "rag-cloud-ch": _3
      }],
      "ik-server": [0, {
        "jcloud": _3,
        "jcloud-ver-jpc": _3
      }],
      "jelastic": [0, {
        "demo": _3
      }],
      "massivegrid": _43,
      "wafaicloud": [0, {
        "jed": _3,
        "ryd": _3
      }],
      "jote-dr-lt1": _3,
      "jote-rd-lt1": _3,
      "webadorsite": _3,
      "joyent": [0, {
        "cns": _6
      }],
      "on-forge": _3,
      "on-vapor": _3,
      "lpusercontent": _3,
      "linode": [0, {
        "members": _3,
        "nodebalancer": _6
      }],
      "linodeobjects": _6,
      "linodeusercontent": [0, {
        "ip": _3
      }],
      "localtonet": _3,
      "lovableproject": _3,
      "barsycenter": _3,
      "barsyonline": _3,
      "lutrausercontent": _6,
      "modelscape": _3,
      "mwcloudnonprod": _3,
      "polyspace": _3,
      "mazeplay": _3,
      "miniserver": _3,
      "atmeta": _3,
      "fbsbx": _42,
      "meteorapp": _44,
      "routingthecloud": _3,
      "same-app": _3,
      "same-preview": _3,
      "mydbserver": _3,
      "hostedpi": _3,
      "mythic-beasts": [0, {
        "caracal": _3,
        "customer": _3,
        "fentiger": _3,
        "lynx": _3,
        "ocelot": _3,
        "oncilla": _3,
        "onza": _3,
        "sphinx": _3,
        "vs": _3,
        "x": _3,
        "yali": _3
      }],
      "nospamproxy": [0, {
        "cloud": [2, {
          "o365": _3
        }]
      }],
      "4u": _3,
      "nfshost": _3,
      "3utilities": _3,
      "blogsyte": _3,
      "ciscofreak": _3,
      "damnserver": _3,
      "ddnsking": _3,
      "ditchyourip": _3,
      "dnsiskinky": _3,
      "dynns": _3,
      "geekgalaxy": _3,
      "health-carereform": _3,
      "homesecuritymac": _3,
      "homesecuritypc": _3,
      "myactivedirectory": _3,
      "mysecuritycamera": _3,
      "myvnc": _3,
      "net-freaks": _3,
      "onthewifi": _3,
      "point2this": _3,
      "quicksytes": _3,
      "securitytactics": _3,
      "servebeer": _3,
      "servecounterstrike": _3,
      "serveexchange": _3,
      "serveftp": _3,
      "servegame": _3,
      "servehalflife": _3,
      "servehttp": _3,
      "servehumour": _3,
      "serveirc": _3,
      "servemp3": _3,
      "servep2p": _3,
      "servepics": _3,
      "servequake": _3,
      "servesarcasm": _3,
      "stufftoread": _3,
      "unusualperson": _3,
      "workisboring": _3,
      "myiphost": _3,
      "observableusercontent": [0, {
        "static": _3
      }],
      "simplesite": _3,
      "oaiusercontent": _6,
      "orsites": _3,
      "operaunite": _3,
      "customer-oci": [0, {
        "*": _3,
        "oci": _6,
        "ocp": _6,
        "ocs": _6
      }],
      "oraclecloudapps": _6,
      "oraclegovcloudapps": _6,
      "authgear-staging": _3,
      "authgearapps": _3,
      "skygearapp": _3,
      "outsystemscloud": _3,
      "ownprovider": _3,
      "pgfog": _3,
      "pagexl": _3,
      "gotpantheon": _3,
      "paywhirl": _6,
      "upsunapp": _3,
      "postman-echo": _3,
      "prgmr": [0, {
        "xen": _3
      }],
      "project-study": [0, {
        "dev": _3
      }],
      "pythonanywhere": _44,
      "qa2": _3,
      "alpha-myqnapcloud": _3,
      "dev-myqnapcloud": _3,
      "mycloudnas": _3,
      "mynascloud": _3,
      "myqnapcloud": _3,
      "qualifioapp": _3,
      "ladesk": _3,
      "qualyhqpartner": _6,
      "qualyhqportal": _6,
      "qbuser": _3,
      "quipelements": _6,
      "rackmaze": _3,
      "readthedocs-hosted": _3,
      "rhcloud": _3,
      "onrender": _3,
      "render": _45,
      "subsc-pay": _3,
      "180r": _3,
      "dojin": _3,
      "sakuratan": _3,
      "sakuraweb": _3,
      "x0": _3,
      "code": [0, {
        "builder": _6,
        "dev-builder": _6,
        "stg-builder": _6
      }],
      "salesforce": [0, {
        "platform": [0, {
          "code-builder-stg": [0, {
            "test": [0, {
              "001": _6
            }]
          }]
        }]
      }],
      "logoip": _3,
      "scrysec": _3,
      "firewall-gateway": _3,
      "myshopblocks": _3,
      "myshopify": _3,
      "shopitsite": _3,
      "1kapp": _3,
      "appchizi": _3,
      "applinzi": _3,
      "sinaapp": _3,
      "vipsinaapp": _3,
      "streamlitapp": _3,
      "try-snowplow": _3,
      "playstation-cloud": _3,
      "myspreadshop": _3,
      "w-corp-staticblitz": _3,
      "w-credentialless-staticblitz": _3,
      "w-staticblitz": _3,
      "stackhero-network": _3,
      "stdlib": [0, {
        "api": _3
      }],
      "strapiapp": [2, {
        "media": _3
      }],
      "streak-link": _3,
      "streaklinks": _3,
      "streakusercontent": _3,
      "temp-dns": _3,
      "dsmynas": _3,
      "familyds": _3,
      "mytabit": _3,
      "taveusercontent": _3,
      "tb-hosting": _46,
      "reservd": _3,
      "thingdustdata": _3,
      "townnews-staging": _3,
      "typeform": [0, {
        "pro": _3
      }],
      "hk": _3,
      "it": _3,
      "deus-canvas": _3,
      "vultrobjects": _6,
      "wafflecell": _3,
      "hotelwithflight": _3,
      "reserve-online": _3,
      "cprapid": _3,
      "pleskns": _3,
      "remotewd": _3,
      "wiardweb": [0, {
        "pages": _3
      }],
      "wixsite": _3,
      "wixstudio": _3,
      "messwithdns": _3,
      "woltlab-demo": _3,
      "wpenginepowered": [2, {
        "js": _3
      }],
      "xnbay": [2, {
        "u2": _3,
        "u2-local": _3
      }],
      "yolasite": _3
    }],
    "coop": _2,
    "cr": [1, {
      "ac": _2,
      "co": _2,
      "ed": _2,
      "fi": _2,
      "go": _2,
      "or": _2,
      "sa": _2
    }],
    "cu": [1, {
      "com": _2,
      "edu": _2,
      "gob": _2,
      "inf": _2,
      "nat": _2,
      "net": _2,
      "org": _2
    }],
    "cv": [1, {
      "com": _2,
      "edu": _2,
      "id": _2,
      "int": _2,
      "net": _2,
      "nome": _2,
      "org": _2,
      "publ": _2
    }],
    "cw": _47,
    "cx": [1, {
      "gov": _2,
      "cloudns": _3,
      "ath": _3,
      "info": _3,
      "assessments": _3,
      "calculators": _3,
      "funnels": _3,
      "paynow": _3,
      "quizzes": _3,
      "researched": _3,
      "tests": _3
    }],
    "cy": [1, {
      "ac": _2,
      "biz": _2,
      "com": [1, {
        "scaleforce": _48
      }],
      "ekloges": _2,
      "gov": _2,
      "ltd": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "press": _2,
      "pro": _2,
      "tm": _2
    }],
    "cz": [1, {
      "gov": _2,
      "contentproxy9": [0, {
        "rsc": _3
      }],
      "realm": _3,
      "e4": _3,
      "co": _3,
      "metacentrum": [0, {
        "cloud": _6,
        "custom": _3
      }],
      "muni": [0, {
        "cloud": [0, {
          "flt": _3,
          "usr": _3
        }]
      }]
    }],
    "de": [1, {
      "bplaced": _3,
      "square7": _3,
      "com": _3,
      "cosidns": _49,
      "dnsupdater": _3,
      "dynamisches-dns": _3,
      "internet-dns": _3,
      "l-o-g-i-n": _3,
      "ddnss": [2, {
        "dyn": _3,
        "dyndns": _3
      }],
      "dyn-ip24": _3,
      "dyndns1": _3,
      "home-webserver": [2, {
        "dyn": _3
      }],
      "myhome-server": _3,
      "dnshome": _3,
      "fuettertdasnetz": _3,
      "isteingeek": _3,
      "istmein": _3,
      "lebtimnetz": _3,
      "leitungsen": _3,
      "traeumtgerade": _3,
      "frusky": _6,
      "goip": _3,
      "xn--gnstigbestellen-zvb": _3,
      "g\xFCnstigbestellen": _3,
      "xn--gnstigliefern-wob": _3,
      "g\xFCnstigliefern": _3,
      "hs-heilbronn": [0, {
        "it": [0, {
          "pages": _3,
          "pages-research": _3
        }]
      }],
      "dyn-berlin": _3,
      "in-berlin": _3,
      "in-brb": _3,
      "in-butter": _3,
      "in-dsl": _3,
      "in-vpn": _3,
      "iservschule": _3,
      "mein-iserv": _3,
      "schuldock": _3,
      "schulplattform": _3,
      "schulserver": _3,
      "test-iserv": _3,
      "keymachine": _3,
      "co": _3,
      "git-repos": _3,
      "lcube-server": _3,
      "svn-repos": _3,
      "barsy": _3,
      "webspaceconfig": _3,
      "123webseite": _3,
      "rub": _3,
      "ruhr-uni-bochum": [2, {
        "noc": [0, {
          "io": _3
        }]
      }],
      "logoip": _3,
      "firewall-gateway": _3,
      "my-gateway": _3,
      "my-router": _3,
      "spdns": _3,
      "my": _3,
      "speedpartner": [0, {
        "customer": _3
      }],
      "myspreadshop": _3,
      "taifun-dns": _3,
      "12hp": _3,
      "2ix": _3,
      "4lima": _3,
      "lima-city": _3,
      "dd-dns": _3,
      "dray-dns": _3,
      "draydns": _3,
      "dyn-vpn": _3,
      "dynvpn": _3,
      "mein-vigor": _3,
      "my-vigor": _3,
      "my-wan": _3,
      "syno-ds": _3,
      "synology-diskstation": _3,
      "synology-ds": _3,
      "virtual-user": _3,
      "virtualuser": _3,
      "community-pro": _3,
      "diskussionsbereich": _3,
      "xenonconnect": _6
    }],
    "dj": _2,
    "dk": [1, {
      "biz": _3,
      "co": _3,
      "firm": _3,
      "reg": _3,
      "store": _3,
      "123hjemmeside": _3,
      "myspreadshop": _3
    }],
    "dm": _51,
    "do": [1, {
      "art": _2,
      "com": _2,
      "edu": _2,
      "gob": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "sld": _2,
      "web": _2
    }],
    "dz": [1, {
      "art": _2,
      "asso": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "pol": _2,
      "soc": _2,
      "tm": _2
    }],
    "ec": [1, {
      "abg": _2,
      "adm": _2,
      "agron": _2,
      "arqt": _2,
      "art": _2,
      "bar": _2,
      "chef": _2,
      "com": _2,
      "cont": _2,
      "cpa": _2,
      "cue": _2,
      "dent": _2,
      "dgn": _2,
      "disco": _2,
      "doc": _2,
      "edu": _2,
      "eng": _2,
      "esm": _2,
      "fin": _2,
      "fot": _2,
      "gal": _2,
      "gob": _2,
      "gov": _2,
      "gye": _2,
      "ibr": _2,
      "info": _2,
      "k12": _2,
      "lat": _2,
      "loj": _2,
      "med": _2,
      "mil": _2,
      "mktg": _2,
      "mon": _2,
      "net": _2,
      "ntr": _2,
      "odont": _2,
      "org": _2,
      "pro": _2,
      "prof": _2,
      "psic": _2,
      "psiq": _2,
      "pub": _2,
      "rio": _2,
      "rrpp": _2,
      "sal": _2,
      "tech": _2,
      "tul": _2,
      "tur": _2,
      "uio": _2,
      "vet": _2,
      "xxx": _2,
      "base": _3,
      "official": _3
    }],
    "edu": [1, {
      "rit": [0, {
        "git-pages": _3
      }]
    }],
    "ee": [1, {
      "aip": _2,
      "com": _2,
      "edu": _2,
      "fie": _2,
      "gov": _2,
      "lib": _2,
      "med": _2,
      "org": _2,
      "pri": _2,
      "riik": _2
    }],
    "eg": [1, {
      "ac": _2,
      "com": _2,
      "edu": _2,
      "eun": _2,
      "gov": _2,
      "info": _2,
      "me": _2,
      "mil": _2,
      "name": _2,
      "net": _2,
      "org": _2,
      "sci": _2,
      "sport": _2,
      "tv": _2
    }],
    "er": _20,
    "es": [1, {
      "com": _2,
      "edu": _2,
      "gob": _2,
      "nom": _2,
      "org": _2,
      "123miweb": _3,
      "myspreadshop": _3
    }],
    "et": [1, {
      "biz": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "info": _2,
      "name": _2,
      "net": _2,
      "org": _2
    }],
    "eu": [1, {
      "cloudns": _3,
      "dogado": [0, {
        "jelastic": _3
      }],
      "barsy": _3,
      "spdns": _3,
      "nxa": _6,
      "transurl": _6,
      "diskstation": _3
    }],
    "fi": [1, {
      "aland": _2,
      "dy": _3,
      "xn--hkkinen-5wa": _3,
      "h\xE4kkinen": _3,
      "iki": _3,
      "cloudplatform": [0, {
        "fi": _3
      }],
      "datacenter": [0, {
        "demo": _3,
        "paas": _3
      }],
      "kapsi": _3,
      "123kotisivu": _3,
      "myspreadshop": _3
    }],
    "fj": [1, {
      "ac": _2,
      "biz": _2,
      "com": _2,
      "gov": _2,
      "info": _2,
      "mil": _2,
      "name": _2,
      "net": _2,
      "org": _2,
      "pro": _2
    }],
    "fk": _20,
    "fm": [1, {
      "com": _2,
      "edu": _2,
      "net": _2,
      "org": _2,
      "radio": _3,
      "user": _6
    }],
    "fo": _2,
    "fr": [1, {
      "asso": _2,
      "com": _2,
      "gouv": _2,
      "nom": _2,
      "prd": _2,
      "tm": _2,
      "avoues": _2,
      "cci": _2,
      "greta": _2,
      "huissier-justice": _2,
      "en-root": _3,
      "fbx-os": _3,
      "fbxos": _3,
      "freebox-os": _3,
      "freeboxos": _3,
      "goupile": _3,
      "123siteweb": _3,
      "on-web": _3,
      "chirurgiens-dentistes-en-france": _3,
      "dedibox": _3,
      "aeroport": _3,
      "avocat": _3,
      "chambagri": _3,
      "chirurgiens-dentistes": _3,
      "experts-comptables": _3,
      "medecin": _3,
      "notaires": _3,
      "pharmacien": _3,
      "port": _3,
      "veterinaire": _3,
      "myspreadshop": _3,
      "ynh": _3
    }],
    "ga": _2,
    "gb": _2,
    "gd": [1, {
      "edu": _2,
      "gov": _2
    }],
    "ge": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "pvt": _2,
      "school": _2
    }],
    "gf": _2,
    "gg": [1, {
      "co": _2,
      "net": _2,
      "org": _2,
      "botdash": _3,
      "kaas": _3,
      "stackit": _3,
      "panel": [2, {
        "daemon": _3
      }]
    }],
    "gh": [1, {
      "biz": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2
    }],
    "gi": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "ltd": _2,
      "mod": _2,
      "org": _2
    }],
    "gl": [1, {
      "co": _2,
      "com": _2,
      "edu": _2,
      "net": _2,
      "org": _2
    }],
    "gm": _2,
    "gn": [1, {
      "ac": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2
    }],
    "gov": _2,
    "gp": [1, {
      "asso": _2,
      "com": _2,
      "edu": _2,
      "mobi": _2,
      "net": _2,
      "org": _2
    }],
    "gq": _2,
    "gr": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "barsy": _3,
      "simplesite": _3
    }],
    "gs": _2,
    "gt": [1, {
      "com": _2,
      "edu": _2,
      "gob": _2,
      "ind": _2,
      "mil": _2,
      "net": _2,
      "org": _2
    }],
    "gu": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "guam": _2,
      "info": _2,
      "net": _2,
      "org": _2,
      "web": _2
    }],
    "gw": [1, {
      "nx": _3
    }],
    "gy": _51,
    "hk": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "idv": _2,
      "net": _2,
      "org": _2,
      "xn--ciqpn": _2,
      "\u4E2A\u4EBA": _2,
      "xn--gmqw5a": _2,
      "\u500B\u4EBA": _2,
      "xn--55qx5d": _2,
      "\u516C\u53F8": _2,
      "xn--mxtq1m": _2,
      "\u653F\u5E9C": _2,
      "xn--lcvr32d": _2,
      "\u654E\u80B2": _2,
      "xn--wcvs22d": _2,
      "\u6559\u80B2": _2,
      "xn--gmq050i": _2,
      "\u7B87\u4EBA": _2,
      "xn--uc0atv": _2,
      "\u7D44\u7E54": _2,
      "xn--uc0ay4a": _2,
      "\u7D44\u7EC7": _2,
      "xn--od0alg": _2,
      "\u7DB2\u7D61": _2,
      "xn--zf0avx": _2,
      "\u7DB2\u7EDC": _2,
      "xn--mk0axi": _2,
      "\u7EC4\u7E54": _2,
      "xn--tn0ag": _2,
      "\u7EC4\u7EC7": _2,
      "xn--od0aq3b": _2,
      "\u7F51\u7D61": _2,
      "xn--io0a7i": _2,
      "\u7F51\u7EDC": _2,
      "inc": _3,
      "ltd": _3
    }],
    "hm": _2,
    "hn": [1, {
      "com": _2,
      "edu": _2,
      "gob": _2,
      "mil": _2,
      "net": _2,
      "org": _2
    }],
    "hr": [1, {
      "com": _2,
      "from": _2,
      "iz": _2,
      "name": _2,
      "brendly": _19
    }],
    "ht": [1, {
      "adult": _2,
      "art": _2,
      "asso": _2,
      "com": _2,
      "coop": _2,
      "edu": _2,
      "firm": _2,
      "gouv": _2,
      "info": _2,
      "med": _2,
      "net": _2,
      "org": _2,
      "perso": _2,
      "pol": _2,
      "pro": _2,
      "rel": _2,
      "shop": _2,
      "rt": _3
    }],
    "hu": [1, {
      "2000": _2,
      "agrar": _2,
      "bolt": _2,
      "casino": _2,
      "city": _2,
      "co": _2,
      "erotica": _2,
      "erotika": _2,
      "film": _2,
      "forum": _2,
      "games": _2,
      "hotel": _2,
      "info": _2,
      "ingatlan": _2,
      "jogasz": _2,
      "konyvelo": _2,
      "lakas": _2,
      "media": _2,
      "news": _2,
      "org": _2,
      "priv": _2,
      "reklam": _2,
      "sex": _2,
      "shop": _2,
      "sport": _2,
      "suli": _2,
      "szex": _2,
      "tm": _2,
      "tozsde": _2,
      "utazas": _2,
      "video": _2
    }],
    "id": [1, {
      "ac": _2,
      "biz": _2,
      "co": _2,
      "desa": _2,
      "go": _2,
      "kop": _2,
      "mil": _2,
      "my": _2,
      "net": _2,
      "or": _2,
      "ponpes": _2,
      "sch": _2,
      "web": _2,
      "e": _3,
      "zone": _3
    }],
    "ie": [1, {
      "gov": _2,
      "myspreadshop": _3
    }],
    "il": [1, {
      "ac": _2,
      "co": [1, {
        "ravpage": _3,
        "mytabit": _3,
        "tabitorder": _3
      }],
      "gov": _2,
      "idf": _2,
      "k12": _2,
      "muni": _2,
      "net": _2,
      "org": _2
    }],
    "xn--4dbrk0ce": [1, {
      "xn--4dbgdty6c": _2,
      "xn--5dbhl8d": _2,
      "xn--8dbq2a": _2,
      "xn--hebda8b": _2
    }],
    "\u05D9\u05E9\u05E8\u05D0\u05DC": [1, {
      "\u05D0\u05E7\u05D3\u05DE\u05D9\u05D4": _2,
      "\u05D9\u05E9\u05D5\u05D1": _2,
      "\u05E6\u05D4\u05DC": _2,
      "\u05DE\u05DE\u05E9\u05DC": _2
    }],
    "im": [1, {
      "ac": _2,
      "co": [1, {
        "ltd": _2,
        "plc": _2
      }],
      "com": _2,
      "net": _2,
      "org": _2,
      "tt": _2,
      "tv": _2
    }],
    "in": [1, {
      "5g": _2,
      "6g": _2,
      "ac": _2,
      "ai": _2,
      "am": _2,
      "bihar": _2,
      "biz": _2,
      "business": _2,
      "ca": _2,
      "cn": _2,
      "co": _2,
      "com": _2,
      "coop": _2,
      "cs": _2,
      "delhi": _2,
      "dr": _2,
      "edu": _2,
      "er": _2,
      "firm": _2,
      "gen": _2,
      "gov": _2,
      "gujarat": _2,
      "ind": _2,
      "info": _2,
      "int": _2,
      "internet": _2,
      "io": _2,
      "me": _2,
      "mil": _2,
      "net": _2,
      "nic": _2,
      "org": _2,
      "pg": _2,
      "post": _2,
      "pro": _2,
      "res": _2,
      "travel": _2,
      "tv": _2,
      "uk": _2,
      "up": _2,
      "us": _2,
      "cloudns": _3,
      "barsy": _3,
      "web": _3,
      "supabase": _3
    }],
    "info": [1, {
      "cloudns": _3,
      "dynamic-dns": _3,
      "barrel-of-knowledge": _3,
      "barrell-of-knowledge": _3,
      "dyndns": _3,
      "for-our": _3,
      "groks-the": _3,
      "groks-this": _3,
      "here-for-more": _3,
      "knowsitall": _3,
      "selfip": _3,
      "webhop": _3,
      "barsy": _3,
      "mayfirst": _3,
      "mittwald": _3,
      "mittwaldserver": _3,
      "typo3server": _3,
      "dvrcam": _3,
      "ilovecollege": _3,
      "no-ip": _3,
      "forumz": _3,
      "nsupdate": _3,
      "dnsupdate": _3,
      "v-info": _3
    }],
    "int": [1, {
      "eu": _2
    }],
    "io": [1, {
      "2038": _3,
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "nom": _2,
      "org": _2,
      "on-acorn": _6,
      "myaddr": _3,
      "apigee": _3,
      "b-data": _3,
      "beagleboard": _3,
      "bitbucket": _3,
      "bluebite": _3,
      "boxfuse": _3,
      "brave": _7,
      "browsersafetymark": _3,
      "bubble": _54,
      "bubbleapps": _3,
      "bigv": [0, {
        "uk0": _3
      }],
      "cleverapps": _3,
      "cloudbeesusercontent": _3,
      "dappnode": [0, {
        "dyndns": _3
      }],
      "darklang": _3,
      "definima": _3,
      "dedyn": _3,
      "icp0": _55,
      "icp1": _55,
      "qzz": _3,
      "fh-muenster": _3,
      "shw": _3,
      "forgerock": [0, {
        "id": _3
      }],
      "github": _3,
      "gitlab": _3,
      "lolipop": _3,
      "hasura-app": _3,
      "hostyhosting": _3,
      "hypernode": _3,
      "moonscale": _6,
      "beebyte": _43,
      "beebyteapp": [0, {
        "sekd1": _3
      }],
      "jele": _3,
      "webthings": _3,
      "loginline": _3,
      "barsy": _3,
      "azurecontainer": _6,
      "ngrok": [2, {
        "ap": _3,
        "au": _3,
        "eu": _3,
        "in": _3,
        "jp": _3,
        "sa": _3,
        "us": _3
      }],
      "nodeart": [0, {
        "stage": _3
      }],
      "pantheonsite": _3,
      "pstmn": [2, {
        "mock": _3
      }],
      "protonet": _3,
      "qcx": [2, {
        "sys": _6
      }],
      "qoto": _3,
      "vaporcloud": _3,
      "myrdbx": _3,
      "rb-hosting": _46,
      "on-k3s": _6,
      "on-rio": _6,
      "readthedocs": _3,
      "resindevice": _3,
      "resinstaging": [0, {
        "devices": _3
      }],
      "hzc": _3,
      "sandcats": _3,
      "scrypted": [0, {
        "client": _3
      }],
      "mo-siemens": _3,
      "lair": _42,
      "stolos": _6,
      "musician": _3,
      "utwente": _3,
      "edugit": _3,
      "telebit": _3,
      "thingdust": [0, {
        "dev": _56,
        "disrec": _56,
        "prod": _57,
        "testing": _56
      }],
      "tickets": _3,
      "webflow": _3,
      "webflowtest": _3,
      "editorx": _3,
      "wixstudio": _3,
      "basicserver": _3,
      "virtualserver": _3
    }],
    "iq": _5,
    "ir": [1, {
      "ac": _2,
      "co": _2,
      "gov": _2,
      "id": _2,
      "net": _2,
      "org": _2,
      "sch": _2,
      "xn--mgba3a4f16a": _2,
      "\u0627\u06CC\u0631\u0627\u0646": _2,
      "xn--mgba3a4fra": _2,
      "\u0627\u064A\u0631\u0627\u0646": _2,
      "arvanedge": _3,
      "vistablog": _3
    }],
    "is": _2,
    "it": [1, {
      "edu": _2,
      "gov": _2,
      "abr": _2,
      "abruzzo": _2,
      "aosta-valley": _2,
      "aostavalley": _2,
      "bas": _2,
      "basilicata": _2,
      "cal": _2,
      "calabria": _2,
      "cam": _2,
      "campania": _2,
      "emilia-romagna": _2,
      "emiliaromagna": _2,
      "emr": _2,
      "friuli-v-giulia": _2,
      "friuli-ve-giulia": _2,
      "friuli-vegiulia": _2,
      "friuli-venezia-giulia": _2,
      "friuli-veneziagiulia": _2,
      "friuli-vgiulia": _2,
      "friuliv-giulia": _2,
      "friulive-giulia": _2,
      "friulivegiulia": _2,
      "friulivenezia-giulia": _2,
      "friuliveneziagiulia": _2,
      "friulivgiulia": _2,
      "fvg": _2,
      "laz": _2,
      "lazio": _2,
      "lig": _2,
      "liguria": _2,
      "lom": _2,
      "lombardia": _2,
      "lombardy": _2,
      "lucania": _2,
      "mar": _2,
      "marche": _2,
      "mol": _2,
      "molise": _2,
      "piedmont": _2,
      "piemonte": _2,
      "pmn": _2,
      "pug": _2,
      "puglia": _2,
      "sar": _2,
      "sardegna": _2,
      "sardinia": _2,
      "sic": _2,
      "sicilia": _2,
      "sicily": _2,
      "taa": _2,
      "tos": _2,
      "toscana": _2,
      "trentin-sud-tirol": _2,
      "xn--trentin-sd-tirol-rzb": _2,
      "trentin-s\xFCd-tirol": _2,
      "trentin-sudtirol": _2,
      "xn--trentin-sdtirol-7vb": _2,
      "trentin-s\xFCdtirol": _2,
      "trentin-sued-tirol": _2,
      "trentin-suedtirol": _2,
      "trentino": _2,
      "trentino-a-adige": _2,
      "trentino-aadige": _2,
      "trentino-alto-adige": _2,
      "trentino-altoadige": _2,
      "trentino-s-tirol": _2,
      "trentino-stirol": _2,
      "trentino-sud-tirol": _2,
      "xn--trentino-sd-tirol-c3b": _2,
      "trentino-s\xFCd-tirol": _2,
      "trentino-sudtirol": _2,
      "xn--trentino-sdtirol-szb": _2,
      "trentino-s\xFCdtirol": _2,
      "trentino-sued-tirol": _2,
      "trentino-suedtirol": _2,
      "trentinoa-adige": _2,
      "trentinoaadige": _2,
      "trentinoalto-adige": _2,
      "trentinoaltoadige": _2,
      "trentinos-tirol": _2,
      "trentinostirol": _2,
      "trentinosud-tirol": _2,
      "xn--trentinosd-tirol-rzb": _2,
      "trentinos\xFCd-tirol": _2,
      "trentinosudtirol": _2,
      "xn--trentinosdtirol-7vb": _2,
      "trentinos\xFCdtirol": _2,
      "trentinosued-tirol": _2,
      "trentinosuedtirol": _2,
      "trentinsud-tirol": _2,
      "xn--trentinsd-tirol-6vb": _2,
      "trentins\xFCd-tirol": _2,
      "trentinsudtirol": _2,
      "xn--trentinsdtirol-nsb": _2,
      "trentins\xFCdtirol": _2,
      "trentinsued-tirol": _2,
      "trentinsuedtirol": _2,
      "tuscany": _2,
      "umb": _2,
      "umbria": _2,
      "val-d-aosta": _2,
      "val-daosta": _2,
      "vald-aosta": _2,
      "valdaosta": _2,
      "valle-aosta": _2,
      "valle-d-aosta": _2,
      "valle-daosta": _2,
      "valleaosta": _2,
      "valled-aosta": _2,
      "valledaosta": _2,
      "vallee-aoste": _2,
      "xn--valle-aoste-ebb": _2,
      "vall\xE9e-aoste": _2,
      "vallee-d-aoste": _2,
      "xn--valle-d-aoste-ehb": _2,
      "vall\xE9e-d-aoste": _2,
      "valleeaoste": _2,
      "xn--valleaoste-e7a": _2,
      "vall\xE9eaoste": _2,
      "valleedaoste": _2,
      "xn--valledaoste-ebb": _2,
      "vall\xE9edaoste": _2,
      "vao": _2,
      "vda": _2,
      "ven": _2,
      "veneto": _2,
      "ag": _2,
      "agrigento": _2,
      "al": _2,
      "alessandria": _2,
      "alto-adige": _2,
      "altoadige": _2,
      "an": _2,
      "ancona": _2,
      "andria-barletta-trani": _2,
      "andria-trani-barletta": _2,
      "andriabarlettatrani": _2,
      "andriatranibarletta": _2,
      "ao": _2,
      "aosta": _2,
      "aoste": _2,
      "ap": _2,
      "aq": _2,
      "aquila": _2,
      "ar": _2,
      "arezzo": _2,
      "ascoli-piceno": _2,
      "ascolipiceno": _2,
      "asti": _2,
      "at": _2,
      "av": _2,
      "avellino": _2,
      "ba": _2,
      "balsan": _2,
      "balsan-sudtirol": _2,
      "xn--balsan-sdtirol-nsb": _2,
      "balsan-s\xFCdtirol": _2,
      "balsan-suedtirol": _2,
      "bari": _2,
      "barletta-trani-andria": _2,
      "barlettatraniandria": _2,
      "belluno": _2,
      "benevento": _2,
      "bergamo": _2,
      "bg": _2,
      "bi": _2,
      "biella": _2,
      "bl": _2,
      "bn": _2,
      "bo": _2,
      "bologna": _2,
      "bolzano": _2,
      "bolzano-altoadige": _2,
      "bozen": _2,
      "bozen-sudtirol": _2,
      "xn--bozen-sdtirol-2ob": _2,
      "bozen-s\xFCdtirol": _2,
      "bozen-suedtirol": _2,
      "br": _2,
      "brescia": _2,
      "brindisi": _2,
      "bs": _2,
      "bt": _2,
      "bulsan": _2,
      "bulsan-sudtirol": _2,
      "xn--bulsan-sdtirol-nsb": _2,
      "bulsan-s\xFCdtirol": _2,
      "bulsan-suedtirol": _2,
      "bz": _2,
      "ca": _2,
      "cagliari": _2,
      "caltanissetta": _2,
      "campidano-medio": _2,
      "campidanomedio": _2,
      "campobasso": _2,
      "carbonia-iglesias": _2,
      "carboniaiglesias": _2,
      "carrara-massa": _2,
      "carraramassa": _2,
      "caserta": _2,
      "catania": _2,
      "catanzaro": _2,
      "cb": _2,
      "ce": _2,
      "cesena-forli": _2,
      "xn--cesena-forl-mcb": _2,
      "cesena-forl\xEC": _2,
      "cesenaforli": _2,
      "xn--cesenaforl-i8a": _2,
      "cesenaforl\xEC": _2,
      "ch": _2,
      "chieti": _2,
      "ci": _2,
      "cl": _2,
      "cn": _2,
      "co": _2,
      "como": _2,
      "cosenza": _2,
      "cr": _2,
      "cremona": _2,
      "crotone": _2,
      "cs": _2,
      "ct": _2,
      "cuneo": _2,
      "cz": _2,
      "dell-ogliastra": _2,
      "dellogliastra": _2,
      "en": _2,
      "enna": _2,
      "fc": _2,
      "fe": _2,
      "fermo": _2,
      "ferrara": _2,
      "fg": _2,
      "fi": _2,
      "firenze": _2,
      "florence": _2,
      "fm": _2,
      "foggia": _2,
      "forli-cesena": _2,
      "xn--forl-cesena-fcb": _2,
      "forl\xEC-cesena": _2,
      "forlicesena": _2,
      "xn--forlcesena-c8a": _2,
      "forl\xECcesena": _2,
      "fr": _2,
      "frosinone": _2,
      "ge": _2,
      "genoa": _2,
      "genova": _2,
      "go": _2,
      "gorizia": _2,
      "gr": _2,
      "grosseto": _2,
      "iglesias-carbonia": _2,
      "iglesiascarbonia": _2,
      "im": _2,
      "imperia": _2,
      "is": _2,
      "isernia": _2,
      "kr": _2,
      "la-spezia": _2,
      "laquila": _2,
      "laspezia": _2,
      "latina": _2,
      "lc": _2,
      "le": _2,
      "lecce": _2,
      "lecco": _2,
      "li": _2,
      "livorno": _2,
      "lo": _2,
      "lodi": _2,
      "lt": _2,
      "lu": _2,
      "lucca": _2,
      "macerata": _2,
      "mantova": _2,
      "massa-carrara": _2,
      "massacarrara": _2,
      "matera": _2,
      "mb": _2,
      "mc": _2,
      "me": _2,
      "medio-campidano": _2,
      "mediocampidano": _2,
      "messina": _2,
      "mi": _2,
      "milan": _2,
      "milano": _2,
      "mn": _2,
      "mo": _2,
      "modena": _2,
      "monza": _2,
      "monza-brianza": _2,
      "monza-e-della-brianza": _2,
      "monzabrianza": _2,
      "monzaebrianza": _2,
      "monzaedellabrianza": _2,
      "ms": _2,
      "mt": _2,
      "na": _2,
      "naples": _2,
      "napoli": _2,
      "no": _2,
      "novara": _2,
      "nu": _2,
      "nuoro": _2,
      "og": _2,
      "ogliastra": _2,
      "olbia-tempio": _2,
      "olbiatempio": _2,
      "or": _2,
      "oristano": _2,
      "ot": _2,
      "pa": _2,
      "padova": _2,
      "padua": _2,
      "palermo": _2,
      "parma": _2,
      "pavia": _2,
      "pc": _2,
      "pd": _2,
      "pe": _2,
      "perugia": _2,
      "pesaro-urbino": _2,
      "pesarourbino": _2,
      "pescara": _2,
      "pg": _2,
      "pi": _2,
      "piacenza": _2,
      "pisa": _2,
      "pistoia": _2,
      "pn": _2,
      "po": _2,
      "pordenone": _2,
      "potenza": _2,
      "pr": _2,
      "prato": _2,
      "pt": _2,
      "pu": _2,
      "pv": _2,
      "pz": _2,
      "ra": _2,
      "ragusa": _2,
      "ravenna": _2,
      "rc": _2,
      "re": _2,
      "reggio-calabria": _2,
      "reggio-emilia": _2,
      "reggiocalabria": _2,
      "reggioemilia": _2,
      "rg": _2,
      "ri": _2,
      "rieti": _2,
      "rimini": _2,
      "rm": _2,
      "rn": _2,
      "ro": _2,
      "roma": _2,
      "rome": _2,
      "rovigo": _2,
      "sa": _2,
      "salerno": _2,
      "sassari": _2,
      "savona": _2,
      "si": _2,
      "siena": _2,
      "siracusa": _2,
      "so": _2,
      "sondrio": _2,
      "sp": _2,
      "sr": _2,
      "ss": _2,
      "xn--sdtirol-n2a": _2,
      "s\xFCdtirol": _2,
      "suedtirol": _2,
      "sv": _2,
      "ta": _2,
      "taranto": _2,
      "te": _2,
      "tempio-olbia": _2,
      "tempioolbia": _2,
      "teramo": _2,
      "terni": _2,
      "tn": _2,
      "to": _2,
      "torino": _2,
      "tp": _2,
      "tr": _2,
      "trani-andria-barletta": _2,
      "trani-barletta-andria": _2,
      "traniandriabarletta": _2,
      "tranibarlettaandria": _2,
      "trapani": _2,
      "trento": _2,
      "treviso": _2,
      "trieste": _2,
      "ts": _2,
      "turin": _2,
      "tv": _2,
      "ud": _2,
      "udine": _2,
      "urbino-pesaro": _2,
      "urbinopesaro": _2,
      "va": _2,
      "varese": _2,
      "vb": _2,
      "vc": _2,
      "ve": _2,
      "venezia": _2,
      "venice": _2,
      "verbania": _2,
      "vercelli": _2,
      "verona": _2,
      "vi": _2,
      "vibo-valentia": _2,
      "vibovalentia": _2,
      "vicenza": _2,
      "viterbo": _2,
      "vr": _2,
      "vs": _2,
      "vt": _2,
      "vv": _2,
      "12chars": _3,
      "ibxos": _3,
      "iliadboxos": _3,
      "neen": [0, {
        "jc": _3
      }],
      "123homepage": _3,
      "16-b": _3,
      "32-b": _3,
      "64-b": _3,
      "myspreadshop": _3,
      "syncloud": _3
    }],
    "je": [1, {
      "co": _2,
      "net": _2,
      "org": _2,
      "of": _3
    }],
    "jm": _20,
    "jo": [1, {
      "agri": _2,
      "ai": _2,
      "com": _2,
      "edu": _2,
      "eng": _2,
      "fm": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "per": _2,
      "phd": _2,
      "sch": _2,
      "tv": _2
    }],
    "jobs": _2,
    "jp": [1, {
      "ac": _2,
      "ad": _2,
      "co": _2,
      "ed": _2,
      "go": _2,
      "gr": _2,
      "lg": _2,
      "ne": [1, {
        "aseinet": _53,
        "gehirn": _3,
        "ivory": _3,
        "mail-box": _3,
        "mints": _3,
        "mokuren": _3,
        "opal": _3,
        "sakura": _3,
        "sumomo": _3,
        "topaz": _3
      }],
      "or": _2,
      "aichi": [1, {
        "aisai": _2,
        "ama": _2,
        "anjo": _2,
        "asuke": _2,
        "chiryu": _2,
        "chita": _2,
        "fuso": _2,
        "gamagori": _2,
        "handa": _2,
        "hazu": _2,
        "hekinan": _2,
        "higashiura": _2,
        "ichinomiya": _2,
        "inazawa": _2,
        "inuyama": _2,
        "isshiki": _2,
        "iwakura": _2,
        "kanie": _2,
        "kariya": _2,
        "kasugai": _2,
        "kira": _2,
        "kiyosu": _2,
        "komaki": _2,
        "konan": _2,
        "kota": _2,
        "mihama": _2,
        "miyoshi": _2,
        "nishio": _2,
        "nisshin": _2,
        "obu": _2,
        "oguchi": _2,
        "oharu": _2,
        "okazaki": _2,
        "owariasahi": _2,
        "seto": _2,
        "shikatsu": _2,
        "shinshiro": _2,
        "shitara": _2,
        "tahara": _2,
        "takahama": _2,
        "tobishima": _2,
        "toei": _2,
        "togo": _2,
        "tokai": _2,
        "tokoname": _2,
        "toyoake": _2,
        "toyohashi": _2,
        "toyokawa": _2,
        "toyone": _2,
        "toyota": _2,
        "tsushima": _2,
        "yatomi": _2
      }],
      "akita": [1, {
        "akita": _2,
        "daisen": _2,
        "fujisato": _2,
        "gojome": _2,
        "hachirogata": _2,
        "happou": _2,
        "higashinaruse": _2,
        "honjo": _2,
        "honjyo": _2,
        "ikawa": _2,
        "kamikoani": _2,
        "kamioka": _2,
        "katagami": _2,
        "kazuno": _2,
        "kitaakita": _2,
        "kosaka": _2,
        "kyowa": _2,
        "misato": _2,
        "mitane": _2,
        "moriyoshi": _2,
        "nikaho": _2,
        "noshiro": _2,
        "odate": _2,
        "oga": _2,
        "ogata": _2,
        "semboku": _2,
        "yokote": _2,
        "yurihonjo": _2
      }],
      "aomori": [1, {
        "aomori": _2,
        "gonohe": _2,
        "hachinohe": _2,
        "hashikami": _2,
        "hiranai": _2,
        "hirosaki": _2,
        "itayanagi": _2,
        "kuroishi": _2,
        "misawa": _2,
        "mutsu": _2,
        "nakadomari": _2,
        "noheji": _2,
        "oirase": _2,
        "owani": _2,
        "rokunohe": _2,
        "sannohe": _2,
        "shichinohe": _2,
        "shingo": _2,
        "takko": _2,
        "towada": _2,
        "tsugaru": _2,
        "tsuruta": _2
      }],
      "chiba": [1, {
        "abiko": _2,
        "asahi": _2,
        "chonan": _2,
        "chosei": _2,
        "choshi": _2,
        "chuo": _2,
        "funabashi": _2,
        "futtsu": _2,
        "hanamigawa": _2,
        "ichihara": _2,
        "ichikawa": _2,
        "ichinomiya": _2,
        "inzai": _2,
        "isumi": _2,
        "kamagaya": _2,
        "kamogawa": _2,
        "kashiwa": _2,
        "katori": _2,
        "katsuura": _2,
        "kimitsu": _2,
        "kisarazu": _2,
        "kozaki": _2,
        "kujukuri": _2,
        "kyonan": _2,
        "matsudo": _2,
        "midori": _2,
        "mihama": _2,
        "minamiboso": _2,
        "mobara": _2,
        "mutsuzawa": _2,
        "nagara": _2,
        "nagareyama": _2,
        "narashino": _2,
        "narita": _2,
        "noda": _2,
        "oamishirasato": _2,
        "omigawa": _2,
        "onjuku": _2,
        "otaki": _2,
        "sakae": _2,
        "sakura": _2,
        "shimofusa": _2,
        "shirako": _2,
        "shiroi": _2,
        "shisui": _2,
        "sodegaura": _2,
        "sosa": _2,
        "tako": _2,
        "tateyama": _2,
        "togane": _2,
        "tohnosho": _2,
        "tomisato": _2,
        "urayasu": _2,
        "yachimata": _2,
        "yachiyo": _2,
        "yokaichiba": _2,
        "yokoshibahikari": _2,
        "yotsukaido": _2
      }],
      "ehime": [1, {
        "ainan": _2,
        "honai": _2,
        "ikata": _2,
        "imabari": _2,
        "iyo": _2,
        "kamijima": _2,
        "kihoku": _2,
        "kumakogen": _2,
        "masaki": _2,
        "matsuno": _2,
        "matsuyama": _2,
        "namikata": _2,
        "niihama": _2,
        "ozu": _2,
        "saijo": _2,
        "seiyo": _2,
        "shikokuchuo": _2,
        "tobe": _2,
        "toon": _2,
        "uchiko": _2,
        "uwajima": _2,
        "yawatahama": _2
      }],
      "fukui": [1, {
        "echizen": _2,
        "eiheiji": _2,
        "fukui": _2,
        "ikeda": _2,
        "katsuyama": _2,
        "mihama": _2,
        "minamiechizen": _2,
        "obama": _2,
        "ohi": _2,
        "ono": _2,
        "sabae": _2,
        "sakai": _2,
        "takahama": _2,
        "tsuruga": _2,
        "wakasa": _2
      }],
      "fukuoka": [1, {
        "ashiya": _2,
        "buzen": _2,
        "chikugo": _2,
        "chikuho": _2,
        "chikujo": _2,
        "chikushino": _2,
        "chikuzen": _2,
        "chuo": _2,
        "dazaifu": _2,
        "fukuchi": _2,
        "hakata": _2,
        "higashi": _2,
        "hirokawa": _2,
        "hisayama": _2,
        "iizuka": _2,
        "inatsuki": _2,
        "kaho": _2,
        "kasuga": _2,
        "kasuya": _2,
        "kawara": _2,
        "keisen": _2,
        "koga": _2,
        "kurate": _2,
        "kurogi": _2,
        "kurume": _2,
        "minami": _2,
        "miyako": _2,
        "miyama": _2,
        "miyawaka": _2,
        "mizumaki": _2,
        "munakata": _2,
        "nakagawa": _2,
        "nakama": _2,
        "nishi": _2,
        "nogata": _2,
        "ogori": _2,
        "okagaki": _2,
        "okawa": _2,
        "oki": _2,
        "omuta": _2,
        "onga": _2,
        "onojo": _2,
        "oto": _2,
        "saigawa": _2,
        "sasaguri": _2,
        "shingu": _2,
        "shinyoshitomi": _2,
        "shonai": _2,
        "soeda": _2,
        "sue": _2,
        "tachiarai": _2,
        "tagawa": _2,
        "takata": _2,
        "toho": _2,
        "toyotsu": _2,
        "tsuiki": _2,
        "ukiha": _2,
        "umi": _2,
        "usui": _2,
        "yamada": _2,
        "yame": _2,
        "yanagawa": _2,
        "yukuhashi": _2
      }],
      "fukushima": [1, {
        "aizubange": _2,
        "aizumisato": _2,
        "aizuwakamatsu": _2,
        "asakawa": _2,
        "bandai": _2,
        "date": _2,
        "fukushima": _2,
        "furudono": _2,
        "futaba": _2,
        "hanawa": _2,
        "higashi": _2,
        "hirata": _2,
        "hirono": _2,
        "iitate": _2,
        "inawashiro": _2,
        "ishikawa": _2,
        "iwaki": _2,
        "izumizaki": _2,
        "kagamiishi": _2,
        "kaneyama": _2,
        "kawamata": _2,
        "kitakata": _2,
        "kitashiobara": _2,
        "koori": _2,
        "koriyama": _2,
        "kunimi": _2,
        "miharu": _2,
        "mishima": _2,
        "namie": _2,
        "nango": _2,
        "nishiaizu": _2,
        "nishigo": _2,
        "okuma": _2,
        "omotego": _2,
        "ono": _2,
        "otama": _2,
        "samegawa": _2,
        "shimogo": _2,
        "shirakawa": _2,
        "showa": _2,
        "soma": _2,
        "sukagawa": _2,
        "taishin": _2,
        "tamakawa": _2,
        "tanagura": _2,
        "tenei": _2,
        "yabuki": _2,
        "yamato": _2,
        "yamatsuri": _2,
        "yanaizu": _2,
        "yugawa": _2
      }],
      "gifu": [1, {
        "anpachi": _2,
        "ena": _2,
        "gifu": _2,
        "ginan": _2,
        "godo": _2,
        "gujo": _2,
        "hashima": _2,
        "hichiso": _2,
        "hida": _2,
        "higashishirakawa": _2,
        "ibigawa": _2,
        "ikeda": _2,
        "kakamigahara": _2,
        "kani": _2,
        "kasahara": _2,
        "kasamatsu": _2,
        "kawaue": _2,
        "kitagata": _2,
        "mino": _2,
        "minokamo": _2,
        "mitake": _2,
        "mizunami": _2,
        "motosu": _2,
        "nakatsugawa": _2,
        "ogaki": _2,
        "sakahogi": _2,
        "seki": _2,
        "sekigahara": _2,
        "shirakawa": _2,
        "tajimi": _2,
        "takayama": _2,
        "tarui": _2,
        "toki": _2,
        "tomika": _2,
        "wanouchi": _2,
        "yamagata": _2,
        "yaotsu": _2,
        "yoro": _2
      }],
      "gunma": [1, {
        "annaka": _2,
        "chiyoda": _2,
        "fujioka": _2,
        "higashiagatsuma": _2,
        "isesaki": _2,
        "itakura": _2,
        "kanna": _2,
        "kanra": _2,
        "katashina": _2,
        "kawaba": _2,
        "kiryu": _2,
        "kusatsu": _2,
        "maebashi": _2,
        "meiwa": _2,
        "midori": _2,
        "minakami": _2,
        "naganohara": _2,
        "nakanojo": _2,
        "nanmoku": _2,
        "numata": _2,
        "oizumi": _2,
        "ora": _2,
        "ota": _2,
        "shibukawa": _2,
        "shimonita": _2,
        "shinto": _2,
        "showa": _2,
        "takasaki": _2,
        "takayama": _2,
        "tamamura": _2,
        "tatebayashi": _2,
        "tomioka": _2,
        "tsukiyono": _2,
        "tsumagoi": _2,
        "ueno": _2,
        "yoshioka": _2
      }],
      "hiroshima": [1, {
        "asaminami": _2,
        "daiwa": _2,
        "etajima": _2,
        "fuchu": _2,
        "fukuyama": _2,
        "hatsukaichi": _2,
        "higashihiroshima": _2,
        "hongo": _2,
        "jinsekikogen": _2,
        "kaita": _2,
        "kui": _2,
        "kumano": _2,
        "kure": _2,
        "mihara": _2,
        "miyoshi": _2,
        "naka": _2,
        "onomichi": _2,
        "osakikamijima": _2,
        "otake": _2,
        "saka": _2,
        "sera": _2,
        "seranishi": _2,
        "shinichi": _2,
        "shobara": _2,
        "takehara": _2
      }],
      "hokkaido": [1, {
        "abashiri": _2,
        "abira": _2,
        "aibetsu": _2,
        "akabira": _2,
        "akkeshi": _2,
        "asahikawa": _2,
        "ashibetsu": _2,
        "ashoro": _2,
        "assabu": _2,
        "atsuma": _2,
        "bibai": _2,
        "biei": _2,
        "bifuka": _2,
        "bihoro": _2,
        "biratori": _2,
        "chippubetsu": _2,
        "chitose": _2,
        "date": _2,
        "ebetsu": _2,
        "embetsu": _2,
        "eniwa": _2,
        "erimo": _2,
        "esan": _2,
        "esashi": _2,
        "fukagawa": _2,
        "fukushima": _2,
        "furano": _2,
        "furubira": _2,
        "haboro": _2,
        "hakodate": _2,
        "hamatonbetsu": _2,
        "hidaka": _2,
        "higashikagura": _2,
        "higashikawa": _2,
        "hiroo": _2,
        "hokuryu": _2,
        "hokuto": _2,
        "honbetsu": _2,
        "horokanai": _2,
        "horonobe": _2,
        "ikeda": _2,
        "imakane": _2,
        "ishikari": _2,
        "iwamizawa": _2,
        "iwanai": _2,
        "kamifurano": _2,
        "kamikawa": _2,
        "kamishihoro": _2,
        "kamisunagawa": _2,
        "kamoenai": _2,
        "kayabe": _2,
        "kembuchi": _2,
        "kikonai": _2,
        "kimobetsu": _2,
        "kitahiroshima": _2,
        "kitami": _2,
        "kiyosato": _2,
        "koshimizu": _2,
        "kunneppu": _2,
        "kuriyama": _2,
        "kuromatsunai": _2,
        "kushiro": _2,
        "kutchan": _2,
        "kyowa": _2,
        "mashike": _2,
        "matsumae": _2,
        "mikasa": _2,
        "minamifurano": _2,
        "mombetsu": _2,
        "moseushi": _2,
        "mukawa": _2,
        "muroran": _2,
        "naie": _2,
        "nakagawa": _2,
        "nakasatsunai": _2,
        "nakatombetsu": _2,
        "nanae": _2,
        "nanporo": _2,
        "nayoro": _2,
        "nemuro": _2,
        "niikappu": _2,
        "niki": _2,
        "nishiokoppe": _2,
        "noboribetsu": _2,
        "numata": _2,
        "obihiro": _2,
        "obira": _2,
        "oketo": _2,
        "okoppe": _2,
        "otaru": _2,
        "otobe": _2,
        "otofuke": _2,
        "otoineppu": _2,
        "oumu": _2,
        "ozora": _2,
        "pippu": _2,
        "rankoshi": _2,
        "rebun": _2,
        "rikubetsu": _2,
        "rishiri": _2,
        "rishirifuji": _2,
        "saroma": _2,
        "sarufutsu": _2,
        "shakotan": _2,
        "shari": _2,
        "shibecha": _2,
        "shibetsu": _2,
        "shikabe": _2,
        "shikaoi": _2,
        "shimamaki": _2,
        "shimizu": _2,
        "shimokawa": _2,
        "shinshinotsu": _2,
        "shintoku": _2,
        "shiranuka": _2,
        "shiraoi": _2,
        "shiriuchi": _2,
        "sobetsu": _2,
        "sunagawa": _2,
        "taiki": _2,
        "takasu": _2,
        "takikawa": _2,
        "takinoue": _2,
        "teshikaga": _2,
        "tobetsu": _2,
        "tohma": _2,
        "tomakomai": _2,
        "tomari": _2,
        "toya": _2,
        "toyako": _2,
        "toyotomi": _2,
        "toyoura": _2,
        "tsubetsu": _2,
        "tsukigata": _2,
        "urakawa": _2,
        "urausu": _2,
        "uryu": _2,
        "utashinai": _2,
        "wakkanai": _2,
        "wassamu": _2,
        "yakumo": _2,
        "yoichi": _2
      }],
      "hyogo": [1, {
        "aioi": _2,
        "akashi": _2,
        "ako": _2,
        "amagasaki": _2,
        "aogaki": _2,
        "asago": _2,
        "ashiya": _2,
        "awaji": _2,
        "fukusaki": _2,
        "goshiki": _2,
        "harima": _2,
        "himeji": _2,
        "ichikawa": _2,
        "inagawa": _2,
        "itami": _2,
        "kakogawa": _2,
        "kamigori": _2,
        "kamikawa": _2,
        "kasai": _2,
        "kasuga": _2,
        "kawanishi": _2,
        "miki": _2,
        "minamiawaji": _2,
        "nishinomiya": _2,
        "nishiwaki": _2,
        "ono": _2,
        "sanda": _2,
        "sannan": _2,
        "sasayama": _2,
        "sayo": _2,
        "shingu": _2,
        "shinonsen": _2,
        "shiso": _2,
        "sumoto": _2,
        "taishi": _2,
        "taka": _2,
        "takarazuka": _2,
        "takasago": _2,
        "takino": _2,
        "tamba": _2,
        "tatsuno": _2,
        "toyooka": _2,
        "yabu": _2,
        "yashiro": _2,
        "yoka": _2,
        "yokawa": _2
      }],
      "ibaraki": [1, {
        "ami": _2,
        "asahi": _2,
        "bando": _2,
        "chikusei": _2,
        "daigo": _2,
        "fujishiro": _2,
        "hitachi": _2,
        "hitachinaka": _2,
        "hitachiomiya": _2,
        "hitachiota": _2,
        "ibaraki": _2,
        "ina": _2,
        "inashiki": _2,
        "itako": _2,
        "iwama": _2,
        "joso": _2,
        "kamisu": _2,
        "kasama": _2,
        "kashima": _2,
        "kasumigaura": _2,
        "koga": _2,
        "miho": _2,
        "mito": _2,
        "moriya": _2,
        "naka": _2,
        "namegata": _2,
        "oarai": _2,
        "ogawa": _2,
        "omitama": _2,
        "ryugasaki": _2,
        "sakai": _2,
        "sakuragawa": _2,
        "shimodate": _2,
        "shimotsuma": _2,
        "shirosato": _2,
        "sowa": _2,
        "suifu": _2,
        "takahagi": _2,
        "tamatsukuri": _2,
        "tokai": _2,
        "tomobe": _2,
        "tone": _2,
        "toride": _2,
        "tsuchiura": _2,
        "tsukuba": _2,
        "uchihara": _2,
        "ushiku": _2,
        "yachiyo": _2,
        "yamagata": _2,
        "yawara": _2,
        "yuki": _2
      }],
      "ishikawa": [1, {
        "anamizu": _2,
        "hakui": _2,
        "hakusan": _2,
        "kaga": _2,
        "kahoku": _2,
        "kanazawa": _2,
        "kawakita": _2,
        "komatsu": _2,
        "nakanoto": _2,
        "nanao": _2,
        "nomi": _2,
        "nonoichi": _2,
        "noto": _2,
        "shika": _2,
        "suzu": _2,
        "tsubata": _2,
        "tsurugi": _2,
        "uchinada": _2,
        "wajima": _2
      }],
      "iwate": [1, {
        "fudai": _2,
        "fujisawa": _2,
        "hanamaki": _2,
        "hiraizumi": _2,
        "hirono": _2,
        "ichinohe": _2,
        "ichinoseki": _2,
        "iwaizumi": _2,
        "iwate": _2,
        "joboji": _2,
        "kamaishi": _2,
        "kanegasaki": _2,
        "karumai": _2,
        "kawai": _2,
        "kitakami": _2,
        "kuji": _2,
        "kunohe": _2,
        "kuzumaki": _2,
        "miyako": _2,
        "mizusawa": _2,
        "morioka": _2,
        "ninohe": _2,
        "noda": _2,
        "ofunato": _2,
        "oshu": _2,
        "otsuchi": _2,
        "rikuzentakata": _2,
        "shiwa": _2,
        "shizukuishi": _2,
        "sumita": _2,
        "tanohata": _2,
        "tono": _2,
        "yahaba": _2,
        "yamada": _2
      }],
      "kagawa": [1, {
        "ayagawa": _2,
        "higashikagawa": _2,
        "kanonji": _2,
        "kotohira": _2,
        "manno": _2,
        "marugame": _2,
        "mitoyo": _2,
        "naoshima": _2,
        "sanuki": _2,
        "tadotsu": _2,
        "takamatsu": _2,
        "tonosho": _2,
        "uchinomi": _2,
        "utazu": _2,
        "zentsuji": _2
      }],
      "kagoshima": [1, {
        "akune": _2,
        "amami": _2,
        "hioki": _2,
        "isa": _2,
        "isen": _2,
        "izumi": _2,
        "kagoshima": _2,
        "kanoya": _2,
        "kawanabe": _2,
        "kinko": _2,
        "kouyama": _2,
        "makurazaki": _2,
        "matsumoto": _2,
        "minamitane": _2,
        "nakatane": _2,
        "nishinoomote": _2,
        "satsumasendai": _2,
        "soo": _2,
        "tarumizu": _2,
        "yusui": _2
      }],
      "kanagawa": [1, {
        "aikawa": _2,
        "atsugi": _2,
        "ayase": _2,
        "chigasaki": _2,
        "ebina": _2,
        "fujisawa": _2,
        "hadano": _2,
        "hakone": _2,
        "hiratsuka": _2,
        "isehara": _2,
        "kaisei": _2,
        "kamakura": _2,
        "kiyokawa": _2,
        "matsuda": _2,
        "minamiashigara": _2,
        "miura": _2,
        "nakai": _2,
        "ninomiya": _2,
        "odawara": _2,
        "oi": _2,
        "oiso": _2,
        "sagamihara": _2,
        "samukawa": _2,
        "tsukui": _2,
        "yamakita": _2,
        "yamato": _2,
        "yokosuka": _2,
        "yugawara": _2,
        "zama": _2,
        "zushi": _2
      }],
      "kochi": [1, {
        "aki": _2,
        "geisei": _2,
        "hidaka": _2,
        "higashitsuno": _2,
        "ino": _2,
        "kagami": _2,
        "kami": _2,
        "kitagawa": _2,
        "kochi": _2,
        "mihara": _2,
        "motoyama": _2,
        "muroto": _2,
        "nahari": _2,
        "nakamura": _2,
        "nankoku": _2,
        "nishitosa": _2,
        "niyodogawa": _2,
        "ochi": _2,
        "okawa": _2,
        "otoyo": _2,
        "otsuki": _2,
        "sakawa": _2,
        "sukumo": _2,
        "susaki": _2,
        "tosa": _2,
        "tosashimizu": _2,
        "toyo": _2,
        "tsuno": _2,
        "umaji": _2,
        "yasuda": _2,
        "yusuhara": _2
      }],
      "kumamoto": [1, {
        "amakusa": _2,
        "arao": _2,
        "aso": _2,
        "choyo": _2,
        "gyokuto": _2,
        "kamiamakusa": _2,
        "kikuchi": _2,
        "kumamoto": _2,
        "mashiki": _2,
        "mifune": _2,
        "minamata": _2,
        "minamioguni": _2,
        "nagasu": _2,
        "nishihara": _2,
        "oguni": _2,
        "ozu": _2,
        "sumoto": _2,
        "takamori": _2,
        "uki": _2,
        "uto": _2,
        "yamaga": _2,
        "yamato": _2,
        "yatsushiro": _2
      }],
      "kyoto": [1, {
        "ayabe": _2,
        "fukuchiyama": _2,
        "higashiyama": _2,
        "ide": _2,
        "ine": _2,
        "joyo": _2,
        "kameoka": _2,
        "kamo": _2,
        "kita": _2,
        "kizu": _2,
        "kumiyama": _2,
        "kyotamba": _2,
        "kyotanabe": _2,
        "kyotango": _2,
        "maizuru": _2,
        "minami": _2,
        "minamiyamashiro": _2,
        "miyazu": _2,
        "muko": _2,
        "nagaokakyo": _2,
        "nakagyo": _2,
        "nantan": _2,
        "oyamazaki": _2,
        "sakyo": _2,
        "seika": _2,
        "tanabe": _2,
        "uji": _2,
        "ujitawara": _2,
        "wazuka": _2,
        "yamashina": _2,
        "yawata": _2
      }],
      "mie": [1, {
        "asahi": _2,
        "inabe": _2,
        "ise": _2,
        "kameyama": _2,
        "kawagoe": _2,
        "kiho": _2,
        "kisosaki": _2,
        "kiwa": _2,
        "komono": _2,
        "kumano": _2,
        "kuwana": _2,
        "matsusaka": _2,
        "meiwa": _2,
        "mihama": _2,
        "minamiise": _2,
        "misugi": _2,
        "miyama": _2,
        "nabari": _2,
        "shima": _2,
        "suzuka": _2,
        "tado": _2,
        "taiki": _2,
        "taki": _2,
        "tamaki": _2,
        "toba": _2,
        "tsu": _2,
        "udono": _2,
        "ureshino": _2,
        "watarai": _2,
        "yokkaichi": _2
      }],
      "miyagi": [1, {
        "furukawa": _2,
        "higashimatsushima": _2,
        "ishinomaki": _2,
        "iwanuma": _2,
        "kakuda": _2,
        "kami": _2,
        "kawasaki": _2,
        "marumori": _2,
        "matsushima": _2,
        "minamisanriku": _2,
        "misato": _2,
        "murata": _2,
        "natori": _2,
        "ogawara": _2,
        "ohira": _2,
        "onagawa": _2,
        "osaki": _2,
        "rifu": _2,
        "semine": _2,
        "shibata": _2,
        "shichikashuku": _2,
        "shikama": _2,
        "shiogama": _2,
        "shiroishi": _2,
        "tagajo": _2,
        "taiwa": _2,
        "tome": _2,
        "tomiya": _2,
        "wakuya": _2,
        "watari": _2,
        "yamamoto": _2,
        "zao": _2
      }],
      "miyazaki": [1, {
        "aya": _2,
        "ebino": _2,
        "gokase": _2,
        "hyuga": _2,
        "kadogawa": _2,
        "kawaminami": _2,
        "kijo": _2,
        "kitagawa": _2,
        "kitakata": _2,
        "kitaura": _2,
        "kobayashi": _2,
        "kunitomi": _2,
        "kushima": _2,
        "mimata": _2,
        "miyakonojo": _2,
        "miyazaki": _2,
        "morotsuka": _2,
        "nichinan": _2,
        "nishimera": _2,
        "nobeoka": _2,
        "saito": _2,
        "shiiba": _2,
        "shintomi": _2,
        "takaharu": _2,
        "takanabe": _2,
        "takazaki": _2,
        "tsuno": _2
      }],
      "nagano": [1, {
        "achi": _2,
        "agematsu": _2,
        "anan": _2,
        "aoki": _2,
        "asahi": _2,
        "azumino": _2,
        "chikuhoku": _2,
        "chikuma": _2,
        "chino": _2,
        "fujimi": _2,
        "hakuba": _2,
        "hara": _2,
        "hiraya": _2,
        "iida": _2,
        "iijima": _2,
        "iiyama": _2,
        "iizuna": _2,
        "ikeda": _2,
        "ikusaka": _2,
        "ina": _2,
        "karuizawa": _2,
        "kawakami": _2,
        "kiso": _2,
        "kisofukushima": _2,
        "kitaaiki": _2,
        "komagane": _2,
        "komoro": _2,
        "matsukawa": _2,
        "matsumoto": _2,
        "miasa": _2,
        "minamiaiki": _2,
        "minamimaki": _2,
        "minamiminowa": _2,
        "minowa": _2,
        "miyada": _2,
        "miyota": _2,
        "mochizuki": _2,
        "nagano": _2,
        "nagawa": _2,
        "nagiso": _2,
        "nakagawa": _2,
        "nakano": _2,
        "nozawaonsen": _2,
        "obuse": _2,
        "ogawa": _2,
        "okaya": _2,
        "omachi": _2,
        "omi": _2,
        "ookuwa": _2,
        "ooshika": _2,
        "otaki": _2,
        "otari": _2,
        "sakae": _2,
        "sakaki": _2,
        "saku": _2,
        "sakuho": _2,
        "shimosuwa": _2,
        "shinanomachi": _2,
        "shiojiri": _2,
        "suwa": _2,
        "suzaka": _2,
        "takagi": _2,
        "takamori": _2,
        "takayama": _2,
        "tateshina": _2,
        "tatsuno": _2,
        "togakushi": _2,
        "togura": _2,
        "tomi": _2,
        "ueda": _2,
        "wada": _2,
        "yamagata": _2,
        "yamanouchi": _2,
        "yasaka": _2,
        "yasuoka": _2
      }],
      "nagasaki": [1, {
        "chijiwa": _2,
        "futsu": _2,
        "goto": _2,
        "hasami": _2,
        "hirado": _2,
        "iki": _2,
        "isahaya": _2,
        "kawatana": _2,
        "kuchinotsu": _2,
        "matsuura": _2,
        "nagasaki": _2,
        "obama": _2,
        "omura": _2,
        "oseto": _2,
        "saikai": _2,
        "sasebo": _2,
        "seihi": _2,
        "shimabara": _2,
        "shinkamigoto": _2,
        "togitsu": _2,
        "tsushima": _2,
        "unzen": _2
      }],
      "nara": [1, {
        "ando": _2,
        "gose": _2,
        "heguri": _2,
        "higashiyoshino": _2,
        "ikaruga": _2,
        "ikoma": _2,
        "kamikitayama": _2,
        "kanmaki": _2,
        "kashiba": _2,
        "kashihara": _2,
        "katsuragi": _2,
        "kawai": _2,
        "kawakami": _2,
        "kawanishi": _2,
        "koryo": _2,
        "kurotaki": _2,
        "mitsue": _2,
        "miyake": _2,
        "nara": _2,
        "nosegawa": _2,
        "oji": _2,
        "ouda": _2,
        "oyodo": _2,
        "sakurai": _2,
        "sango": _2,
        "shimoichi": _2,
        "shimokitayama": _2,
        "shinjo": _2,
        "soni": _2,
        "takatori": _2,
        "tawaramoto": _2,
        "tenkawa": _2,
        "tenri": _2,
        "uda": _2,
        "yamatokoriyama": _2,
        "yamatotakada": _2,
        "yamazoe": _2,
        "yoshino": _2
      }],
      "niigata": [1, {
        "aga": _2,
        "agano": _2,
        "gosen": _2,
        "itoigawa": _2,
        "izumozaki": _2,
        "joetsu": _2,
        "kamo": _2,
        "kariwa": _2,
        "kashiwazaki": _2,
        "minamiuonuma": _2,
        "mitsuke": _2,
        "muika": _2,
        "murakami": _2,
        "myoko": _2,
        "nagaoka": _2,
        "niigata": _2,
        "ojiya": _2,
        "omi": _2,
        "sado": _2,
        "sanjo": _2,
        "seiro": _2,
        "seirou": _2,
        "sekikawa": _2,
        "shibata": _2,
        "tagami": _2,
        "tainai": _2,
        "tochio": _2,
        "tokamachi": _2,
        "tsubame": _2,
        "tsunan": _2,
        "uonuma": _2,
        "yahiko": _2,
        "yoita": _2,
        "yuzawa": _2
      }],
      "oita": [1, {
        "beppu": _2,
        "bungoono": _2,
        "bungotakada": _2,
        "hasama": _2,
        "hiji": _2,
        "himeshima": _2,
        "hita": _2,
        "kamitsue": _2,
        "kokonoe": _2,
        "kuju": _2,
        "kunisaki": _2,
        "kusu": _2,
        "oita": _2,
        "saiki": _2,
        "taketa": _2,
        "tsukumi": _2,
        "usa": _2,
        "usuki": _2,
        "yufu": _2
      }],
      "okayama": [1, {
        "akaiwa": _2,
        "asakuchi": _2,
        "bizen": _2,
        "hayashima": _2,
        "ibara": _2,
        "kagamino": _2,
        "kasaoka": _2,
        "kibichuo": _2,
        "kumenan": _2,
        "kurashiki": _2,
        "maniwa": _2,
        "misaki": _2,
        "nagi": _2,
        "niimi": _2,
        "nishiawakura": _2,
        "okayama": _2,
        "satosho": _2,
        "setouchi": _2,
        "shinjo": _2,
        "shoo": _2,
        "soja": _2,
        "takahashi": _2,
        "tamano": _2,
        "tsuyama": _2,
        "wake": _2,
        "yakage": _2
      }],
      "okinawa": [1, {
        "aguni": _2,
        "ginowan": _2,
        "ginoza": _2,
        "gushikami": _2,
        "haebaru": _2,
        "higashi": _2,
        "hirara": _2,
        "iheya": _2,
        "ishigaki": _2,
        "ishikawa": _2,
        "itoman": _2,
        "izena": _2,
        "kadena": _2,
        "kin": _2,
        "kitadaito": _2,
        "kitanakagusuku": _2,
        "kumejima": _2,
        "kunigami": _2,
        "minamidaito": _2,
        "motobu": _2,
        "nago": _2,
        "naha": _2,
        "nakagusuku": _2,
        "nakijin": _2,
        "nanjo": _2,
        "nishihara": _2,
        "ogimi": _2,
        "okinawa": _2,
        "onna": _2,
        "shimoji": _2,
        "taketomi": _2,
        "tarama": _2,
        "tokashiki": _2,
        "tomigusuku": _2,
        "tonaki": _2,
        "urasoe": _2,
        "uruma": _2,
        "yaese": _2,
        "yomitan": _2,
        "yonabaru": _2,
        "yonaguni": _2,
        "zamami": _2
      }],
      "osaka": [1, {
        "abeno": _2,
        "chihayaakasaka": _2,
        "chuo": _2,
        "daito": _2,
        "fujiidera": _2,
        "habikino": _2,
        "hannan": _2,
        "higashiosaka": _2,
        "higashisumiyoshi": _2,
        "higashiyodogawa": _2,
        "hirakata": _2,
        "ibaraki": _2,
        "ikeda": _2,
        "izumi": _2,
        "izumiotsu": _2,
        "izumisano": _2,
        "kadoma": _2,
        "kaizuka": _2,
        "kanan": _2,
        "kashiwara": _2,
        "katano": _2,
        "kawachinagano": _2,
        "kishiwada": _2,
        "kita": _2,
        "kumatori": _2,
        "matsubara": _2,
        "minato": _2,
        "minoh": _2,
        "misaki": _2,
        "moriguchi": _2,
        "neyagawa": _2,
        "nishi": _2,
        "nose": _2,
        "osakasayama": _2,
        "sakai": _2,
        "sayama": _2,
        "sennan": _2,
        "settsu": _2,
        "shijonawate": _2,
        "shimamoto": _2,
        "suita": _2,
        "tadaoka": _2,
        "taishi": _2,
        "tajiri": _2,
        "takaishi": _2,
        "takatsuki": _2,
        "tondabayashi": _2,
        "toyonaka": _2,
        "toyono": _2,
        "yao": _2
      }],
      "saga": [1, {
        "ariake": _2,
        "arita": _2,
        "fukudomi": _2,
        "genkai": _2,
        "hamatama": _2,
        "hizen": _2,
        "imari": _2,
        "kamimine": _2,
        "kanzaki": _2,
        "karatsu": _2,
        "kashima": _2,
        "kitagata": _2,
        "kitahata": _2,
        "kiyama": _2,
        "kouhoku": _2,
        "kyuragi": _2,
        "nishiarita": _2,
        "ogi": _2,
        "omachi": _2,
        "ouchi": _2,
        "saga": _2,
        "shiroishi": _2,
        "taku": _2,
        "tara": _2,
        "tosu": _2,
        "yoshinogari": _2
      }],
      "saitama": [1, {
        "arakawa": _2,
        "asaka": _2,
        "chichibu": _2,
        "fujimi": _2,
        "fujimino": _2,
        "fukaya": _2,
        "hanno": _2,
        "hanyu": _2,
        "hasuda": _2,
        "hatogaya": _2,
        "hatoyama": _2,
        "hidaka": _2,
        "higashichichibu": _2,
        "higashimatsuyama": _2,
        "honjo": _2,
        "ina": _2,
        "iruma": _2,
        "iwatsuki": _2,
        "kamiizumi": _2,
        "kamikawa": _2,
        "kamisato": _2,
        "kasukabe": _2,
        "kawagoe": _2,
        "kawaguchi": _2,
        "kawajima": _2,
        "kazo": _2,
        "kitamoto": _2,
        "koshigaya": _2,
        "kounosu": _2,
        "kuki": _2,
        "kumagaya": _2,
        "matsubushi": _2,
        "minano": _2,
        "misato": _2,
        "miyashiro": _2,
        "miyoshi": _2,
        "moroyama": _2,
        "nagatoro": _2,
        "namegawa": _2,
        "niiza": _2,
        "ogano": _2,
        "ogawa": _2,
        "ogose": _2,
        "okegawa": _2,
        "omiya": _2,
        "otaki": _2,
        "ranzan": _2,
        "ryokami": _2,
        "saitama": _2,
        "sakado": _2,
        "satte": _2,
        "sayama": _2,
        "shiki": _2,
        "shiraoka": _2,
        "soka": _2,
        "sugito": _2,
        "toda": _2,
        "tokigawa": _2,
        "tokorozawa": _2,
        "tsurugashima": _2,
        "urawa": _2,
        "warabi": _2,
        "yashio": _2,
        "yokoze": _2,
        "yono": _2,
        "yorii": _2,
        "yoshida": _2,
        "yoshikawa": _2,
        "yoshimi": _2
      }],
      "shiga": [1, {
        "aisho": _2,
        "gamo": _2,
        "higashiomi": _2,
        "hikone": _2,
        "koka": _2,
        "konan": _2,
        "kosei": _2,
        "koto": _2,
        "kusatsu": _2,
        "maibara": _2,
        "moriyama": _2,
        "nagahama": _2,
        "nishiazai": _2,
        "notogawa": _2,
        "omihachiman": _2,
        "otsu": _2,
        "ritto": _2,
        "ryuoh": _2,
        "takashima": _2,
        "takatsuki": _2,
        "torahime": _2,
        "toyosato": _2,
        "yasu": _2
      }],
      "shimane": [1, {
        "akagi": _2,
        "ama": _2,
        "gotsu": _2,
        "hamada": _2,
        "higashiizumo": _2,
        "hikawa": _2,
        "hikimi": _2,
        "izumo": _2,
        "kakinoki": _2,
        "masuda": _2,
        "matsue": _2,
        "misato": _2,
        "nishinoshima": _2,
        "ohda": _2,
        "okinoshima": _2,
        "okuizumo": _2,
        "shimane": _2,
        "tamayu": _2,
        "tsuwano": _2,
        "unnan": _2,
        "yakumo": _2,
        "yasugi": _2,
        "yatsuka": _2
      }],
      "shizuoka": [1, {
        "arai": _2,
        "atami": _2,
        "fuji": _2,
        "fujieda": _2,
        "fujikawa": _2,
        "fujinomiya": _2,
        "fukuroi": _2,
        "gotemba": _2,
        "haibara": _2,
        "hamamatsu": _2,
        "higashiizu": _2,
        "ito": _2,
        "iwata": _2,
        "izu": _2,
        "izunokuni": _2,
        "kakegawa": _2,
        "kannami": _2,
        "kawanehon": _2,
        "kawazu": _2,
        "kikugawa": _2,
        "kosai": _2,
        "makinohara": _2,
        "matsuzaki": _2,
        "minamiizu": _2,
        "mishima": _2,
        "morimachi": _2,
        "nishiizu": _2,
        "numazu": _2,
        "omaezaki": _2,
        "shimada": _2,
        "shimizu": _2,
        "shimoda": _2,
        "shizuoka": _2,
        "susono": _2,
        "yaizu": _2,
        "yoshida": _2
      }],
      "tochigi": [1, {
        "ashikaga": _2,
        "bato": _2,
        "haga": _2,
        "ichikai": _2,
        "iwafune": _2,
        "kaminokawa": _2,
        "kanuma": _2,
        "karasuyama": _2,
        "kuroiso": _2,
        "mashiko": _2,
        "mibu": _2,
        "moka": _2,
        "motegi": _2,
        "nasu": _2,
        "nasushiobara": _2,
        "nikko": _2,
        "nishikata": _2,
        "nogi": _2,
        "ohira": _2,
        "ohtawara": _2,
        "oyama": _2,
        "sakura": _2,
        "sano": _2,
        "shimotsuke": _2,
        "shioya": _2,
        "takanezawa": _2,
        "tochigi": _2,
        "tsuga": _2,
        "ujiie": _2,
        "utsunomiya": _2,
        "yaita": _2
      }],
      "tokushima": [1, {
        "aizumi": _2,
        "anan": _2,
        "ichiba": _2,
        "itano": _2,
        "kainan": _2,
        "komatsushima": _2,
        "matsushige": _2,
        "mima": _2,
        "minami": _2,
        "miyoshi": _2,
        "mugi": _2,
        "nakagawa": _2,
        "naruto": _2,
        "sanagochi": _2,
        "shishikui": _2,
        "tokushima": _2,
        "wajiki": _2
      }],
      "tokyo": [1, {
        "adachi": _2,
        "akiruno": _2,
        "akishima": _2,
        "aogashima": _2,
        "arakawa": _2,
        "bunkyo": _2,
        "chiyoda": _2,
        "chofu": _2,
        "chuo": _2,
        "edogawa": _2,
        "fuchu": _2,
        "fussa": _2,
        "hachijo": _2,
        "hachioji": _2,
        "hamura": _2,
        "higashikurume": _2,
        "higashimurayama": _2,
        "higashiyamato": _2,
        "hino": _2,
        "hinode": _2,
        "hinohara": _2,
        "inagi": _2,
        "itabashi": _2,
        "katsushika": _2,
        "kita": _2,
        "kiyose": _2,
        "kodaira": _2,
        "koganei": _2,
        "kokubunji": _2,
        "komae": _2,
        "koto": _2,
        "kouzushima": _2,
        "kunitachi": _2,
        "machida": _2,
        "meguro": _2,
        "minato": _2,
        "mitaka": _2,
        "mizuho": _2,
        "musashimurayama": _2,
        "musashino": _2,
        "nakano": _2,
        "nerima": _2,
        "ogasawara": _2,
        "okutama": _2,
        "ome": _2,
        "oshima": _2,
        "ota": _2,
        "setagaya": _2,
        "shibuya": _2,
        "shinagawa": _2,
        "shinjuku": _2,
        "suginami": _2,
        "sumida": _2,
        "tachikawa": _2,
        "taito": _2,
        "tama": _2,
        "toshima": _2
      }],
      "tottori": [1, {
        "chizu": _2,
        "hino": _2,
        "kawahara": _2,
        "koge": _2,
        "kotoura": _2,
        "misasa": _2,
        "nanbu": _2,
        "nichinan": _2,
        "sakaiminato": _2,
        "tottori": _2,
        "wakasa": _2,
        "yazu": _2,
        "yonago": _2
      }],
      "toyama": [1, {
        "asahi": _2,
        "fuchu": _2,
        "fukumitsu": _2,
        "funahashi": _2,
        "himi": _2,
        "imizu": _2,
        "inami": _2,
        "johana": _2,
        "kamiichi": _2,
        "kurobe": _2,
        "nakaniikawa": _2,
        "namerikawa": _2,
        "nanto": _2,
        "nyuzen": _2,
        "oyabe": _2,
        "taira": _2,
        "takaoka": _2,
        "tateyama": _2,
        "toga": _2,
        "tonami": _2,
        "toyama": _2,
        "unazuki": _2,
        "uozu": _2,
        "yamada": _2
      }],
      "wakayama": [1, {
        "arida": _2,
        "aridagawa": _2,
        "gobo": _2,
        "hashimoto": _2,
        "hidaka": _2,
        "hirogawa": _2,
        "inami": _2,
        "iwade": _2,
        "kainan": _2,
        "kamitonda": _2,
        "katsuragi": _2,
        "kimino": _2,
        "kinokawa": _2,
        "kitayama": _2,
        "koya": _2,
        "koza": _2,
        "kozagawa": _2,
        "kudoyama": _2,
        "kushimoto": _2,
        "mihama": _2,
        "misato": _2,
        "nachikatsuura": _2,
        "shingu": _2,
        "shirahama": _2,
        "taiji": _2,
        "tanabe": _2,
        "wakayama": _2,
        "yuasa": _2,
        "yura": _2
      }],
      "yamagata": [1, {
        "asahi": _2,
        "funagata": _2,
        "higashine": _2,
        "iide": _2,
        "kahoku": _2,
        "kaminoyama": _2,
        "kaneyama": _2,
        "kawanishi": _2,
        "mamurogawa": _2,
        "mikawa": _2,
        "murayama": _2,
        "nagai": _2,
        "nakayama": _2,
        "nanyo": _2,
        "nishikawa": _2,
        "obanazawa": _2,
        "oe": _2,
        "oguni": _2,
        "ohkura": _2,
        "oishida": _2,
        "sagae": _2,
        "sakata": _2,
        "sakegawa": _2,
        "shinjo": _2,
        "shirataka": _2,
        "shonai": _2,
        "takahata": _2,
        "tendo": _2,
        "tozawa": _2,
        "tsuruoka": _2,
        "yamagata": _2,
        "yamanobe": _2,
        "yonezawa": _2,
        "yuza": _2
      }],
      "yamaguchi": [1, {
        "abu": _2,
        "hagi": _2,
        "hikari": _2,
        "hofu": _2,
        "iwakuni": _2,
        "kudamatsu": _2,
        "mitou": _2,
        "nagato": _2,
        "oshima": _2,
        "shimonoseki": _2,
        "shunan": _2,
        "tabuse": _2,
        "tokuyama": _2,
        "toyota": _2,
        "ube": _2,
        "yuu": _2
      }],
      "yamanashi": [1, {
        "chuo": _2,
        "doshi": _2,
        "fuefuki": _2,
        "fujikawa": _2,
        "fujikawaguchiko": _2,
        "fujiyoshida": _2,
        "hayakawa": _2,
        "hokuto": _2,
        "ichikawamisato": _2,
        "kai": _2,
        "kofu": _2,
        "koshu": _2,
        "kosuge": _2,
        "minami-alps": _2,
        "minobu": _2,
        "nakamichi": _2,
        "nanbu": _2,
        "narusawa": _2,
        "nirasaki": _2,
        "nishikatsura": _2,
        "oshino": _2,
        "otsuki": _2,
        "showa": _2,
        "tabayama": _2,
        "tsuru": _2,
        "uenohara": _2,
        "yamanakako": _2,
        "yamanashi": _2
      }],
      "xn--ehqz56n": _2,
      "\u4E09\u91CD": _2,
      "xn--1lqs03n": _2,
      "\u4EAC\u90FD": _2,
      "xn--qqqt11m": _2,
      "\u4F50\u8CC0": _2,
      "xn--f6qx53a": _2,
      "\u5175\u5EAB": _2,
      "xn--djrs72d6uy": _2,
      "\u5317\u6D77\u9053": _2,
      "xn--mkru45i": _2,
      "\u5343\u8449": _2,
      "xn--0trq7p7nn": _2,
      "\u548C\u6B4C\u5C71": _2,
      "xn--5js045d": _2,
      "\u57FC\u7389": _2,
      "xn--kbrq7o": _2,
      "\u5927\u5206": _2,
      "xn--pssu33l": _2,
      "\u5927\u962A": _2,
      "xn--ntsq17g": _2,
      "\u5948\u826F": _2,
      "xn--uisz3g": _2,
      "\u5BAE\u57CE": _2,
      "xn--6btw5a": _2,
      "\u5BAE\u5D0E": _2,
      "xn--1ctwo": _2,
      "\u5BCC\u5C71": _2,
      "xn--6orx2r": _2,
      "\u5C71\u53E3": _2,
      "xn--rht61e": _2,
      "\u5C71\u5F62": _2,
      "xn--rht27z": _2,
      "\u5C71\u68A8": _2,
      "xn--nit225k": _2,
      "\u5C90\u961C": _2,
      "xn--rht3d": _2,
      "\u5CA1\u5C71": _2,
      "xn--djty4k": _2,
      "\u5CA9\u624B": _2,
      "xn--klty5x": _2,
      "\u5CF6\u6839": _2,
      "xn--kltx9a": _2,
      "\u5E83\u5CF6": _2,
      "xn--kltp7d": _2,
      "\u5FB3\u5CF6": _2,
      "xn--c3s14m": _2,
      "\u611B\u5A9B": _2,
      "xn--vgu402c": _2,
      "\u611B\u77E5": _2,
      "xn--efvn9s": _2,
      "\u65B0\u6F5F": _2,
      "xn--1lqs71d": _2,
      "\u6771\u4EAC": _2,
      "xn--4pvxs": _2,
      "\u6803\u6728": _2,
      "xn--uuwu58a": _2,
      "\u6C96\u7E04": _2,
      "xn--zbx025d": _2,
      "\u6ECB\u8CC0": _2,
      "xn--8pvr4u": _2,
      "\u718A\u672C": _2,
      "xn--5rtp49c": _2,
      "\u77F3\u5DDD": _2,
      "xn--ntso0iqx3a": _2,
      "\u795E\u5948\u5DDD": _2,
      "xn--elqq16h": _2,
      "\u798F\u4E95": _2,
      "xn--4it168d": _2,
      "\u798F\u5CA1": _2,
      "xn--klt787d": _2,
      "\u798F\u5CF6": _2,
      "xn--rny31h": _2,
      "\u79CB\u7530": _2,
      "xn--7t0a264c": _2,
      "\u7FA4\u99AC": _2,
      "xn--uist22h": _2,
      "\u8328\u57CE": _2,
      "xn--8ltr62k": _2,
      "\u9577\u5D0E": _2,
      "xn--2m4a15e": _2,
      "\u9577\u91CE": _2,
      "xn--32vp30h": _2,
      "\u9752\u68EE": _2,
      "xn--4it797k": _2,
      "\u9759\u5CA1": _2,
      "xn--5rtq34k": _2,
      "\u9999\u5DDD": _2,
      "xn--k7yn95e": _2,
      "\u9AD8\u77E5": _2,
      "xn--tor131o": _2,
      "\u9CE5\u53D6": _2,
      "xn--d5qv7z876c": _2,
      "\u9E7F\u5150\u5CF6": _2,
      "kawasaki": _20,
      "kitakyushu": _20,
      "kobe": _20,
      "nagoya": _20,
      "sapporo": _20,
      "sendai": _20,
      "yokohama": _20,
      "buyshop": _3,
      "fashionstore": _3,
      "handcrafted": _3,
      "kawaiishop": _3,
      "supersale": _3,
      "theshop": _3,
      "0am": _3,
      "0g0": _3,
      "0j0": _3,
      "0t0": _3,
      "mydns": _3,
      "pgw": _3,
      "wjg": _3,
      "usercontent": _3,
      "angry": _3,
      "babyblue": _3,
      "babymilk": _3,
      "backdrop": _3,
      "bambina": _3,
      "bitter": _3,
      "blush": _3,
      "boo": _3,
      "boy": _3,
      "boyfriend": _3,
      "but": _3,
      "candypop": _3,
      "capoo": _3,
      "catfood": _3,
      "cheap": _3,
      "chicappa": _3,
      "chillout": _3,
      "chips": _3,
      "chowder": _3,
      "chu": _3,
      "ciao": _3,
      "cocotte": _3,
      "coolblog": _3,
      "cranky": _3,
      "cutegirl": _3,
      "daa": _3,
      "deca": _3,
      "deci": _3,
      "digick": _3,
      "egoism": _3,
      "fakefur": _3,
      "fem": _3,
      "flier": _3,
      "floppy": _3,
      "fool": _3,
      "frenchkiss": _3,
      "girlfriend": _3,
      "girly": _3,
      "gloomy": _3,
      "gonna": _3,
      "greater": _3,
      "hacca": _3,
      "heavy": _3,
      "her": _3,
      "hiho": _3,
      "hippy": _3,
      "holy": _3,
      "hungry": _3,
      "icurus": _3,
      "itigo": _3,
      "jellybean": _3,
      "kikirara": _3,
      "kill": _3,
      "kilo": _3,
      "kuron": _3,
      "littlestar": _3,
      "lolipopmc": _3,
      "lolitapunk": _3,
      "lomo": _3,
      "lovepop": _3,
      "lovesick": _3,
      "main": _3,
      "mods": _3,
      "mond": _3,
      "mongolian": _3,
      "moo": _3,
      "namaste": _3,
      "nikita": _3,
      "nobushi": _3,
      "noor": _3,
      "oops": _3,
      "parallel": _3,
      "parasite": _3,
      "pecori": _3,
      "peewee": _3,
      "penne": _3,
      "pepper": _3,
      "perma": _3,
      "pigboat": _3,
      "pinoko": _3,
      "punyu": _3,
      "pupu": _3,
      "pussycat": _3,
      "pya": _3,
      "raindrop": _3,
      "readymade": _3,
      "sadist": _3,
      "schoolbus": _3,
      "secret": _3,
      "staba": _3,
      "stripper": _3,
      "sub": _3,
      "sunnyday": _3,
      "thick": _3,
      "tonkotsu": _3,
      "under": _3,
      "upper": _3,
      "velvet": _3,
      "verse": _3,
      "versus": _3,
      "vivian": _3,
      "watson": _3,
      "weblike": _3,
      "whitesnow": _3,
      "zombie": _3,
      "hateblo": _3,
      "hatenablog": _3,
      "hatenadiary": _3,
      "2-d": _3,
      "bona": _3,
      "crap": _3,
      "daynight": _3,
      "eek": _3,
      "flop": _3,
      "halfmoon": _3,
      "jeez": _3,
      "matrix": _3,
      "mimoza": _3,
      "netgamers": _3,
      "nyanta": _3,
      "o0o0": _3,
      "rdy": _3,
      "rgr": _3,
      "rulez": _3,
      "sakurastorage": [0, {
        "isk01": _58,
        "isk02": _58
      }],
      "saloon": _3,
      "sblo": _3,
      "skr": _3,
      "tank": _3,
      "uh-oh": _3,
      "undo": _3,
      "webaccel": [0, {
        "rs": _3,
        "user": _3
      }],
      "websozai": _3,
      "xii": _3
    }],
    "ke": [1, {
      "ac": _2,
      "co": _2,
      "go": _2,
      "info": _2,
      "me": _2,
      "mobi": _2,
      "ne": _2,
      "or": _2,
      "sc": _2
    }],
    "kg": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "us": _3,
      "xx": _3
    }],
    "kh": _20,
    "ki": _59,
    "km": [1, {
      "ass": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "nom": _2,
      "org": _2,
      "prd": _2,
      "tm": _2,
      "asso": _2,
      "coop": _2,
      "gouv": _2,
      "medecin": _2,
      "notaires": _2,
      "pharmaciens": _2,
      "presse": _2,
      "veterinaire": _2
    }],
    "kn": [1, {
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2
    }],
    "kp": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "org": _2,
      "rep": _2,
      "tra": _2
    }],
    "kr": [1, {
      "ac": _2,
      "ai": _2,
      "co": _2,
      "es": _2,
      "go": _2,
      "hs": _2,
      "io": _2,
      "it": _2,
      "kg": _2,
      "me": _2,
      "mil": _2,
      "ms": _2,
      "ne": _2,
      "or": _2,
      "pe": _2,
      "re": _2,
      "sc": _2,
      "busan": _2,
      "chungbuk": _2,
      "chungnam": _2,
      "daegu": _2,
      "daejeon": _2,
      "gangwon": _2,
      "gwangju": _2,
      "gyeongbuk": _2,
      "gyeonggi": _2,
      "gyeongnam": _2,
      "incheon": _2,
      "jeju": _2,
      "jeonbuk": _2,
      "jeonnam": _2,
      "seoul": _2,
      "ulsan": _2,
      "c01": _3,
      "eliv-cdn": _3,
      "eliv-dns": _3,
      "mmv": _3,
      "vki": _3
    }],
    "kw": [1, {
      "com": _2,
      "edu": _2,
      "emb": _2,
      "gov": _2,
      "ind": _2,
      "net": _2,
      "org": _2
    }],
    "ky": _47,
    "kz": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "jcloud": _3
    }],
    "la": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "info": _2,
      "int": _2,
      "net": _2,
      "org": _2,
      "per": _2,
      "bnr": _3
    }],
    "lb": _4,
    "lc": [1, {
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "oy": _3
    }],
    "li": _2,
    "lk": [1, {
      "ac": _2,
      "assn": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "grp": _2,
      "hotel": _2,
      "int": _2,
      "ltd": _2,
      "net": _2,
      "ngo": _2,
      "org": _2,
      "sch": _2,
      "soc": _2,
      "web": _2
    }],
    "lr": _4,
    "ls": [1, {
      "ac": _2,
      "biz": _2,
      "co": _2,
      "edu": _2,
      "gov": _2,
      "info": _2,
      "net": _2,
      "org": _2,
      "sc": _2
    }],
    "lt": _10,
    "lu": [1, {
      "123website": _3
    }],
    "lv": [1, {
      "asn": _2,
      "com": _2,
      "conf": _2,
      "edu": _2,
      "gov": _2,
      "id": _2,
      "mil": _2,
      "net": _2,
      "org": _2
    }],
    "ly": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "id": _2,
      "med": _2,
      "net": _2,
      "org": _2,
      "plc": _2,
      "sch": _2
    }],
    "ma": [1, {
      "ac": _2,
      "co": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "press": _2
    }],
    "mc": [1, {
      "asso": _2,
      "tm": _2
    }],
    "md": [1, {
      "ir": _3
    }],
    "me": [1, {
      "ac": _2,
      "co": _2,
      "edu": _2,
      "gov": _2,
      "its": _2,
      "net": _2,
      "org": _2,
      "priv": _2,
      "c66": _3,
      "craft": _3,
      "edgestack": _3,
      "filegear": _3,
      "filegear-sg": _3,
      "lohmus": _3,
      "barsy": _3,
      "mcdir": _3,
      "brasilia": _3,
      "ddns": _3,
      "dnsfor": _3,
      "hopto": _3,
      "loginto": _3,
      "noip": _3,
      "webhop": _3,
      "soundcast": _3,
      "tcp4": _3,
      "vp4": _3,
      "diskstation": _3,
      "dscloud": _3,
      "i234": _3,
      "myds": _3,
      "synology": _3,
      "transip": _46,
      "nohost": _3
    }],
    "mg": [1, {
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "nom": _2,
      "org": _2,
      "prd": _2
    }],
    "mh": _2,
    "mil": _2,
    "mk": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "inf": _2,
      "name": _2,
      "net": _2,
      "org": _2
    }],
    "ml": [1, {
      "ac": _2,
      "art": _2,
      "asso": _2,
      "com": _2,
      "edu": _2,
      "gouv": _2,
      "gov": _2,
      "info": _2,
      "inst": _2,
      "net": _2,
      "org": _2,
      "pr": _2,
      "presse": _2
    }],
    "mm": _20,
    "mn": [1, {
      "edu": _2,
      "gov": _2,
      "org": _2,
      "nyc": _3
    }],
    "mo": _4,
    "mobi": [1, {
      "barsy": _3,
      "dscloud": _3
    }],
    "mp": [1, {
      "ju": _3
    }],
    "mq": _2,
    "mr": _10,
    "ms": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "minisite": _3
    }],
    "mt": _47,
    "mu": [1, {
      "ac": _2,
      "co": _2,
      "com": _2,
      "gov": _2,
      "net": _2,
      "or": _2,
      "org": _2
    }],
    "museum": _2,
    "mv": [1, {
      "aero": _2,
      "biz": _2,
      "com": _2,
      "coop": _2,
      "edu": _2,
      "gov": _2,
      "info": _2,
      "int": _2,
      "mil": _2,
      "museum": _2,
      "name": _2,
      "net": _2,
      "org": _2,
      "pro": _2
    }],
    "mw": [1, {
      "ac": _2,
      "biz": _2,
      "co": _2,
      "com": _2,
      "coop": _2,
      "edu": _2,
      "gov": _2,
      "int": _2,
      "net": _2,
      "org": _2
    }],
    "mx": [1, {
      "com": _2,
      "edu": _2,
      "gob": _2,
      "net": _2,
      "org": _2
    }],
    "my": [1, {
      "biz": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "name": _2,
      "net": _2,
      "org": _2
    }],
    "mz": [1, {
      "ac": _2,
      "adv": _2,
      "co": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2
    }],
    "na": [1, {
      "alt": _2,
      "co": _2,
      "com": _2,
      "gov": _2,
      "net": _2,
      "org": _2
    }],
    "name": [1, {
      "her": _62,
      "his": _62
    }],
    "nc": [1, {
      "asso": _2,
      "nom": _2
    }],
    "ne": _2,
    "net": [1, {
      "adobeaemcloud": _3,
      "adobeio-static": _3,
      "adobeioruntime": _3,
      "akadns": _3,
      "akamai": _3,
      "akamai-staging": _3,
      "akamaiedge": _3,
      "akamaiedge-staging": _3,
      "akamaihd": _3,
      "akamaihd-staging": _3,
      "akamaiorigin": _3,
      "akamaiorigin-staging": _3,
      "akamaized": _3,
      "akamaized-staging": _3,
      "edgekey": _3,
      "edgekey-staging": _3,
      "edgesuite": _3,
      "edgesuite-staging": _3,
      "alwaysdata": _3,
      "myamaze": _3,
      "cloudfront": _3,
      "appudo": _3,
      "atlassian-dev": [0, {
        "prod": _54
      }],
      "myfritz": _3,
      "onavstack": _3,
      "shopselect": _3,
      "blackbaudcdn": _3,
      "boomla": _3,
      "bplaced": _3,
      "square7": _3,
      "cdn77": [0, {
        "r": _3
      }],
      "cdn77-ssl": _3,
      "gb": _3,
      "hu": _3,
      "jp": _3,
      "se": _3,
      "uk": _3,
      "clickrising": _3,
      "ddns-ip": _3,
      "dns-cloud": _3,
      "dns-dynamic": _3,
      "cloudaccess": _3,
      "cloudflare": [2, {
        "cdn": _3
      }],
      "cloudflareanycast": _54,
      "cloudflarecn": _54,
      "cloudflareglobal": _54,
      "ctfcloud": _3,
      "feste-ip": _3,
      "knx-server": _3,
      "static-access": _3,
      "cryptonomic": _6,
      "dattolocal": _3,
      "mydatto": _3,
      "debian": _3,
      "definima": _3,
      "deno": _3,
      "icp": _6,
      "at-band-camp": _3,
      "blogdns": _3,
      "broke-it": _3,
      "buyshouses": _3,
      "dnsalias": _3,
      "dnsdojo": _3,
      "does-it": _3,
      "dontexist": _3,
      "dynalias": _3,
      "dynathome": _3,
      "endofinternet": _3,
      "from-az": _3,
      "from-co": _3,
      "from-la": _3,
      "from-ny": _3,
      "gets-it": _3,
      "ham-radio-op": _3,
      "homeftp": _3,
      "homeip": _3,
      "homelinux": _3,
      "homeunix": _3,
      "in-the-band": _3,
      "is-a-chef": _3,
      "is-a-geek": _3,
      "isa-geek": _3,
      "kicks-ass": _3,
      "office-on-the": _3,
      "podzone": _3,
      "scrapper-site": _3,
      "selfip": _3,
      "sells-it": _3,
      "servebbs": _3,
      "serveftp": _3,
      "thruhere": _3,
      "webhop": _3,
      "casacam": _3,
      "dynu": _3,
      "dynv6": _3,
      "twmail": _3,
      "ru": _3,
      "channelsdvr": [2, {
        "u": _3
      }],
      "fastly": [0, {
        "freetls": _3,
        "map": _3,
        "prod": [0, {
          "a": _3,
          "global": _3
        }],
        "ssl": [0, {
          "a": _3,
          "b": _3,
          "global": _3
        }]
      }],
      "fastlylb": [2, {
        "map": _3
      }],
      "edgeapp": _3,
      "keyword-on": _3,
      "live-on": _3,
      "server-on": _3,
      "cdn-edges": _3,
      "heteml": _3,
      "cloudfunctions": _3,
      "grafana-dev": _3,
      "iobb": _3,
      "moonscale": _3,
      "in-dsl": _3,
      "in-vpn": _3,
      "oninferno": _3,
      "botdash": _3,
      "apps-1and1": _3,
      "ipifony": _3,
      "cloudjiffy": [2, {
        "fra1-de": _3,
        "west1-us": _3
      }],
      "elastx": [0, {
        "jls-sto1": _3,
        "jls-sto2": _3,
        "jls-sto3": _3
      }],
      "massivegrid": [0, {
        "paas": [0, {
          "fr-1": _3,
          "lon-1": _3,
          "lon-2": _3,
          "ny-1": _3,
          "ny-2": _3,
          "sg-1": _3
        }]
      }],
      "saveincloud": [0, {
        "jelastic": _3,
        "nordeste-idc": _3
      }],
      "scaleforce": _48,
      "kinghost": _3,
      "uni5": _3,
      "krellian": _3,
      "ggff": _3,
      "localto": _6,
      "barsy": _3,
      "luyani": _3,
      "memset": _3,
      "azure-api": _3,
      "azure-mobile": _3,
      "azureedge": _3,
      "azurefd": _3,
      "azurestaticapps": [2, {
        "1": _3,
        "2": _3,
        "3": _3,
        "4": _3,
        "5": _3,
        "6": _3,
        "7": _3,
        "centralus": _3,
        "eastasia": _3,
        "eastus2": _3,
        "westeurope": _3,
        "westus2": _3
      }],
      "azurewebsites": _3,
      "cloudapp": _3,
      "trafficmanager": _3,
      "windows": [0, {
        "core": [0, {
          "blob": _3
        }],
        "servicebus": _3
      }],
      "mynetname": [0, {
        "sn": _3
      }],
      "routingthecloud": _3,
      "bounceme": _3,
      "ddns": _3,
      "eating-organic": _3,
      "mydissent": _3,
      "myeffect": _3,
      "mymediapc": _3,
      "mypsx": _3,
      "mysecuritycamera": _3,
      "nhlfan": _3,
      "no-ip": _3,
      "pgafan": _3,
      "privatizehealthinsurance": _3,
      "redirectme": _3,
      "serveblog": _3,
      "serveminecraft": _3,
      "sytes": _3,
      "dnsup": _3,
      "hicam": _3,
      "now-dns": _3,
      "ownip": _3,
      "vpndns": _3,
      "cloudycluster": _3,
      "ovh": [0, {
        "hosting": _6,
        "webpaas": _6
      }],
      "rackmaze": _3,
      "myradweb": _3,
      "in": _3,
      "subsc-pay": _3,
      "squares": _3,
      "schokokeks": _3,
      "firewall-gateway": _3,
      "seidat": _3,
      "senseering": _3,
      "siteleaf": _3,
      "mafelo": _3,
      "myspreadshop": _3,
      "vps-host": [2, {
        "jelastic": [0, {
          "atl": _3,
          "njs": _3,
          "ric": _3
        }]
      }],
      "srcf": [0, {
        "soc": _3,
        "user": _3
      }],
      "supabase": _3,
      "dsmynas": _3,
      "familyds": _3,
      "ts": [2, {
        "c": _6
      }],
      "torproject": [2, {
        "pages": _3
      }],
      "vusercontent": _3,
      "reserve-online": _3,
      "localcert": _3,
      "community-pro": _3,
      "meinforum": _3,
      "yandexcloud": [2, {
        "storage": _3,
        "website": _3
      }],
      "za": _3,
      "zabc": _3
    }],
    "nf": [1, {
      "arts": _2,
      "com": _2,
      "firm": _2,
      "info": _2,
      "net": _2,
      "other": _2,
      "per": _2,
      "rec": _2,
      "store": _2,
      "web": _2
    }],
    "ng": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "i": _2,
      "mil": _2,
      "mobi": _2,
      "name": _2,
      "net": _2,
      "org": _2,
      "sch": _2,
      "biz": [2, {
        "co": _3,
        "dl": _3,
        "go": _3,
        "lg": _3,
        "on": _3
      }],
      "col": _3,
      "firm": _3,
      "gen": _3,
      "ltd": _3,
      "ngo": _3,
      "plc": _3
    }],
    "ni": [1, {
      "ac": _2,
      "biz": _2,
      "co": _2,
      "com": _2,
      "edu": _2,
      "gob": _2,
      "in": _2,
      "info": _2,
      "int": _2,
      "mil": _2,
      "net": _2,
      "nom": _2,
      "org": _2,
      "web": _2
    }],
    "nl": [1, {
      "co": _3,
      "hosting-cluster": _3,
      "gov": _3,
      "khplay": _3,
      "123website": _3,
      "myspreadshop": _3,
      "transurl": _6,
      "cistron": _3,
      "demon": _3
    }],
    "no": [1, {
      "fhs": _2,
      "folkebibl": _2,
      "fylkesbibl": _2,
      "idrett": _2,
      "museum": _2,
      "priv": _2,
      "vgs": _2,
      "dep": _2,
      "herad": _2,
      "kommune": _2,
      "mil": _2,
      "stat": _2,
      "aa": _63,
      "ah": _63,
      "bu": _63,
      "fm": _63,
      "hl": _63,
      "hm": _63,
      "jan-mayen": _63,
      "mr": _63,
      "nl": _63,
      "nt": _63,
      "of": _63,
      "ol": _63,
      "oslo": _63,
      "rl": _63,
      "sf": _63,
      "st": _63,
      "svalbard": _63,
      "tm": _63,
      "tr": _63,
      "va": _63,
      "vf": _63,
      "akrehamn": _2,
      "xn--krehamn-dxa": _2,
      "\xE5krehamn": _2,
      "algard": _2,
      "xn--lgrd-poac": _2,
      "\xE5lg\xE5rd": _2,
      "arna": _2,
      "bronnoysund": _2,
      "xn--brnnysund-m8ac": _2,
      "br\xF8nn\xF8ysund": _2,
      "brumunddal": _2,
      "bryne": _2,
      "drobak": _2,
      "xn--drbak-wua": _2,
      "dr\xF8bak": _2,
      "egersund": _2,
      "fetsund": _2,
      "floro": _2,
      "xn--flor-jra": _2,
      "flor\xF8": _2,
      "fredrikstad": _2,
      "hokksund": _2,
      "honefoss": _2,
      "xn--hnefoss-q1a": _2,
      "h\xF8nefoss": _2,
      "jessheim": _2,
      "jorpeland": _2,
      "xn--jrpeland-54a": _2,
      "j\xF8rpeland": _2,
      "kirkenes": _2,
      "kopervik": _2,
      "krokstadelva": _2,
      "langevag": _2,
      "xn--langevg-jxa": _2,
      "langev\xE5g": _2,
      "leirvik": _2,
      "mjondalen": _2,
      "xn--mjndalen-64a": _2,
      "mj\xF8ndalen": _2,
      "mo-i-rana": _2,
      "mosjoen": _2,
      "xn--mosjen-eya": _2,
      "mosj\xF8en": _2,
      "nesoddtangen": _2,
      "orkanger": _2,
      "osoyro": _2,
      "xn--osyro-wua": _2,
      "os\xF8yro": _2,
      "raholt": _2,
      "xn--rholt-mra": _2,
      "r\xE5holt": _2,
      "sandnessjoen": _2,
      "xn--sandnessjen-ogb": _2,
      "sandnessj\xF8en": _2,
      "skedsmokorset": _2,
      "slattum": _2,
      "spjelkavik": _2,
      "stathelle": _2,
      "stavern": _2,
      "stjordalshalsen": _2,
      "xn--stjrdalshalsen-sqb": _2,
      "stj\xF8rdalshalsen": _2,
      "tananger": _2,
      "tranby": _2,
      "vossevangen": _2,
      "aarborte": _2,
      "aejrie": _2,
      "afjord": _2,
      "xn--fjord-lra": _2,
      "\xE5fjord": _2,
      "agdenes": _2,
      "akershus": _64,
      "aknoluokta": _2,
      "xn--koluokta-7ya57h": _2,
      "\xE1k\u014Boluokta": _2,
      "al": _2,
      "xn--l-1fa": _2,
      "\xE5l": _2,
      "alaheadju": _2,
      "xn--laheadju-7ya": _2,
      "\xE1laheadju": _2,
      "alesund": _2,
      "xn--lesund-hua": _2,
      "\xE5lesund": _2,
      "alstahaug": _2,
      "alta": _2,
      "xn--lt-liac": _2,
      "\xE1lt\xE1": _2,
      "alvdal": _2,
      "amli": _2,
      "xn--mli-tla": _2,
      "\xE5mli": _2,
      "amot": _2,
      "xn--mot-tla": _2,
      "\xE5mot": _2,
      "andasuolo": _2,
      "andebu": _2,
      "andoy": _2,
      "xn--andy-ira": _2,
      "and\xF8y": _2,
      "ardal": _2,
      "xn--rdal-poa": _2,
      "\xE5rdal": _2,
      "aremark": _2,
      "arendal": _2,
      "xn--s-1fa": _2,
      "\xE5s": _2,
      "aseral": _2,
      "xn--seral-lra": _2,
      "\xE5seral": _2,
      "asker": _2,
      "askim": _2,
      "askoy": _2,
      "xn--asky-ira": _2,
      "ask\xF8y": _2,
      "askvoll": _2,
      "asnes": _2,
      "xn--snes-poa": _2,
      "\xE5snes": _2,
      "audnedaln": _2,
      "aukra": _2,
      "aure": _2,
      "aurland": _2,
      "aurskog-holand": _2,
      "xn--aurskog-hland-jnb": _2,
      "aurskog-h\xF8land": _2,
      "austevoll": _2,
      "austrheim": _2,
      "averoy": _2,
      "xn--avery-yua": _2,
      "aver\xF8y": _2,
      "badaddja": _2,
      "xn--bdddj-mrabd": _2,
      "b\xE5d\xE5ddj\xE5": _2,
      "xn--brum-voa": _2,
      "b\xE6rum": _2,
      "bahcavuotna": _2,
      "xn--bhcavuotna-s4a": _2,
      "b\xE1hcavuotna": _2,
      "bahccavuotna": _2,
      "xn--bhccavuotna-k7a": _2,
      "b\xE1hccavuotna": _2,
      "baidar": _2,
      "xn--bidr-5nac": _2,
      "b\xE1id\xE1r": _2,
      "bajddar": _2,
      "xn--bjddar-pta": _2,
      "b\xE1jddar": _2,
      "balat": _2,
      "xn--blt-elab": _2,
      "b\xE1l\xE1t": _2,
      "balestrand": _2,
      "ballangen": _2,
      "balsfjord": _2,
      "bamble": _2,
      "bardu": _2,
      "barum": _2,
      "batsfjord": _2,
      "xn--btsfjord-9za": _2,
      "b\xE5tsfjord": _2,
      "bearalvahki": _2,
      "xn--bearalvhki-y4a": _2,
      "bearalv\xE1hki": _2,
      "beardu": _2,
      "beiarn": _2,
      "berg": _2,
      "bergen": _2,
      "berlevag": _2,
      "xn--berlevg-jxa": _2,
      "berlev\xE5g": _2,
      "bievat": _2,
      "xn--bievt-0qa": _2,
      "biev\xE1t": _2,
      "bindal": _2,
      "birkenes": _2,
      "bjarkoy": _2,
      "xn--bjarky-fya": _2,
      "bjark\xF8y": _2,
      "bjerkreim": _2,
      "bjugn": _2,
      "bodo": _2,
      "xn--bod-2na": _2,
      "bod\xF8": _2,
      "bokn": _2,
      "bomlo": _2,
      "xn--bmlo-gra": _2,
      "b\xF8mlo": _2,
      "bremanger": _2,
      "bronnoy": _2,
      "xn--brnny-wuac": _2,
      "br\xF8nn\xF8y": _2,
      "budejju": _2,
      "buskerud": _64,
      "bygland": _2,
      "bykle": _2,
      "cahcesuolo": _2,
      "xn--hcesuolo-7ya35b": _2,
      "\u010D\xE1hcesuolo": _2,
      "davvenjarga": _2,
      "xn--davvenjrga-y4a": _2,
      "davvenj\xE1rga": _2,
      "davvesiida": _2,
      "deatnu": _2,
      "dielddanuorri": _2,
      "divtasvuodna": _2,
      "divttasvuotna": _2,
      "donna": _2,
      "xn--dnna-gra": _2,
      "d\xF8nna": _2,
      "dovre": _2,
      "drammen": _2,
      "drangedal": _2,
      "dyroy": _2,
      "xn--dyry-ira": _2,
      "dyr\xF8y": _2,
      "eid": _2,
      "eidfjord": _2,
      "eidsberg": _2,
      "eidskog": _2,
      "eidsvoll": _2,
      "eigersund": _2,
      "elverum": _2,
      "enebakk": _2,
      "engerdal": _2,
      "etne": _2,
      "etnedal": _2,
      "evenassi": _2,
      "xn--eveni-0qa01ga": _2,
      "even\xE1\u0161\u0161i": _2,
      "evenes": _2,
      "evje-og-hornnes": _2,
      "farsund": _2,
      "fauske": _2,
      "fedje": _2,
      "fet": _2,
      "finnoy": _2,
      "xn--finny-yua": _2,
      "finn\xF8y": _2,
      "fitjar": _2,
      "fjaler": _2,
      "fjell": _2,
      "fla": _2,
      "xn--fl-zia": _2,
      "fl\xE5": _2,
      "flakstad": _2,
      "flatanger": _2,
      "flekkefjord": _2,
      "flesberg": _2,
      "flora": _2,
      "folldal": _2,
      "forde": _2,
      "xn--frde-gra": _2,
      "f\xF8rde": _2,
      "forsand": _2,
      "fosnes": _2,
      "xn--frna-woa": _2,
      "fr\xE6na": _2,
      "frana": _2,
      "frei": _2,
      "frogn": _2,
      "froland": _2,
      "frosta": _2,
      "froya": _2,
      "xn--frya-hra": _2,
      "fr\xF8ya": _2,
      "fuoisku": _2,
      "fuossko": _2,
      "fusa": _2,
      "fyresdal": _2,
      "gaivuotna": _2,
      "xn--givuotna-8ya": _2,
      "g\xE1ivuotna": _2,
      "galsa": _2,
      "xn--gls-elac": _2,
      "g\xE1ls\xE1": _2,
      "gamvik": _2,
      "gangaviika": _2,
      "xn--ggaviika-8ya47h": _2,
      "g\xE1\u014Bgaviika": _2,
      "gaular": _2,
      "gausdal": _2,
      "giehtavuoatna": _2,
      "gildeskal": _2,
      "xn--gildeskl-g0a": _2,
      "gildesk\xE5l": _2,
      "giske": _2,
      "gjemnes": _2,
      "gjerdrum": _2,
      "gjerstad": _2,
      "gjesdal": _2,
      "gjovik": _2,
      "xn--gjvik-wua": _2,
      "gj\xF8vik": _2,
      "gloppen": _2,
      "gol": _2,
      "gran": _2,
      "grane": _2,
      "granvin": _2,
      "gratangen": _2,
      "grimstad": _2,
      "grong": _2,
      "grue": _2,
      "gulen": _2,
      "guovdageaidnu": _2,
      "ha": _2,
      "xn--h-2fa": _2,
      "h\xE5": _2,
      "habmer": _2,
      "xn--hbmer-xqa": _2,
      "h\xE1bmer": _2,
      "hadsel": _2,
      "xn--hgebostad-g3a": _2,
      "h\xE6gebostad": _2,
      "hagebostad": _2,
      "halden": _2,
      "halsa": _2,
      "hamar": _2,
      "hamaroy": _2,
      "hammarfeasta": _2,
      "xn--hmmrfeasta-s4ac": _2,
      "h\xE1mm\xE1rfeasta": _2,
      "hammerfest": _2,
      "hapmir": _2,
      "xn--hpmir-xqa": _2,
      "h\xE1pmir": _2,
      "haram": _2,
      "hareid": _2,
      "harstad": _2,
      "hasvik": _2,
      "hattfjelldal": _2,
      "haugesund": _2,
      "hedmark": [0, {
        "os": _2,
        "valer": _2,
        "xn--vler-qoa": _2,
        "v\xE5ler": _2
      }],
      "hemne": _2,
      "hemnes": _2,
      "hemsedal": _2,
      "hitra": _2,
      "hjartdal": _2,
      "hjelmeland": _2,
      "hobol": _2,
      "xn--hobl-ira": _2,
      "hob\xF8l": _2,
      "hof": _2,
      "hol": _2,
      "hole": _2,
      "holmestrand": _2,
      "holtalen": _2,
      "xn--holtlen-hxa": _2,
      "holt\xE5len": _2,
      "hordaland": [0, {
        "os": _2
      }],
      "hornindal": _2,
      "horten": _2,
      "hoyanger": _2,
      "xn--hyanger-q1a": _2,
      "h\xF8yanger": _2,
      "hoylandet": _2,
      "xn--hylandet-54a": _2,
      "h\xF8ylandet": _2,
      "hurdal": _2,
      "hurum": _2,
      "hvaler": _2,
      "hyllestad": _2,
      "ibestad": _2,
      "inderoy": _2,
      "xn--indery-fya": _2,
      "inder\xF8y": _2,
      "iveland": _2,
      "ivgu": _2,
      "jevnaker": _2,
      "jolster": _2,
      "xn--jlster-bya": _2,
      "j\xF8lster": _2,
      "jondal": _2,
      "kafjord": _2,
      "xn--kfjord-iua": _2,
      "k\xE5fjord": _2,
      "karasjohka": _2,
      "xn--krjohka-hwab49j": _2,
      "k\xE1r\xE1\u0161johka": _2,
      "karasjok": _2,
      "karlsoy": _2,
      "karmoy": _2,
      "xn--karmy-yua": _2,
      "karm\xF8y": _2,
      "kautokeino": _2,
      "klabu": _2,
      "xn--klbu-woa": _2,
      "kl\xE6bu": _2,
      "klepp": _2,
      "kongsberg": _2,
      "kongsvinger": _2,
      "kraanghke": _2,
      "xn--kranghke-b0a": _2,
      "kr\xE5anghke": _2,
      "kragero": _2,
      "xn--krager-gya": _2,
      "krager\xF8": _2,
      "kristiansand": _2,
      "kristiansund": _2,
      "krodsherad": _2,
      "xn--krdsherad-m8a": _2,
      "kr\xF8dsherad": _2,
      "xn--kvfjord-nxa": _2,
      "kv\xE6fjord": _2,
      "xn--kvnangen-k0a": _2,
      "kv\xE6nangen": _2,
      "kvafjord": _2,
      "kvalsund": _2,
      "kvam": _2,
      "kvanangen": _2,
      "kvinesdal": _2,
      "kvinnherad": _2,
      "kviteseid": _2,
      "kvitsoy": _2,
      "xn--kvitsy-fya": _2,
      "kvits\xF8y": _2,
      "laakesvuemie": _2,
      "xn--lrdal-sra": _2,
      "l\xE6rdal": _2,
      "lahppi": _2,
      "xn--lhppi-xqa": _2,
      "l\xE1hppi": _2,
      "lardal": _2,
      "larvik": _2,
      "lavagis": _2,
      "lavangen": _2,
      "leangaviika": _2,
      "xn--leagaviika-52b": _2,
      "lea\u014Bgaviika": _2,
      "lebesby": _2,
      "leikanger": _2,
      "leirfjord": _2,
      "leka": _2,
      "leksvik": _2,
      "lenvik": _2,
      "lerdal": _2,
      "lesja": _2,
      "levanger": _2,
      "lier": _2,
      "lierne": _2,
      "lillehammer": _2,
      "lillesand": _2,
      "lindas": _2,
      "xn--linds-pra": _2,
      "lind\xE5s": _2,
      "lindesnes": _2,
      "loabat": _2,
      "xn--loabt-0qa": _2,
      "loab\xE1t": _2,
      "lodingen": _2,
      "xn--ldingen-q1a": _2,
      "l\xF8dingen": _2,
      "lom": _2,
      "loppa": _2,
      "lorenskog": _2,
      "xn--lrenskog-54a": _2,
      "l\xF8renskog": _2,
      "loten": _2,
      "xn--lten-gra": _2,
      "l\xF8ten": _2,
      "lund": _2,
      "lunner": _2,
      "luroy": _2,
      "xn--lury-ira": _2,
      "lur\xF8y": _2,
      "luster": _2,
      "lyngdal": _2,
      "lyngen": _2,
      "malatvuopmi": _2,
      "xn--mlatvuopmi-s4a": _2,
      "m\xE1latvuopmi": _2,
      "malselv": _2,
      "xn--mlselv-iua": _2,
      "m\xE5lselv": _2,
      "malvik": _2,
      "mandal": _2,
      "marker": _2,
      "marnardal": _2,
      "masfjorden": _2,
      "masoy": _2,
      "xn--msy-ula0h": _2,
      "m\xE5s\xF8y": _2,
      "matta-varjjat": _2,
      "xn--mtta-vrjjat-k7af": _2,
      "m\xE1tta-v\xE1rjjat": _2,
      "meland": _2,
      "meldal": _2,
      "melhus": _2,
      "meloy": _2,
      "xn--mely-ira": _2,
      "mel\xF8y": _2,
      "meraker": _2,
      "xn--merker-kua": _2,
      "mer\xE5ker": _2,
      "midsund": _2,
      "midtre-gauldal": _2,
      "moareke": _2,
      "xn--moreke-jua": _2,
      "mo\xE5reke": _2,
      "modalen": _2,
      "modum": _2,
      "molde": _2,
      "more-og-romsdal": [0, {
        "heroy": _2,
        "sande": _2
      }],
      "xn--mre-og-romsdal-qqb": [0, {
        "xn--hery-ira": _2,
        "sande": _2
      }],
      "m\xF8re-og-romsdal": [0, {
        "her\xF8y": _2,
        "sande": _2
      }],
      "moskenes": _2,
      "moss": _2,
      "mosvik": _2,
      "muosat": _2,
      "xn--muost-0qa": _2,
      "muos\xE1t": _2,
      "naamesjevuemie": _2,
      "xn--nmesjevuemie-tcba": _2,
      "n\xE5\xE5mesjevuemie": _2,
      "xn--nry-yla5g": _2,
      "n\xE6r\xF8y": _2,
      "namdalseid": _2,
      "namsos": _2,
      "namsskogan": _2,
      "nannestad": _2,
      "naroy": _2,
      "narviika": _2,
      "narvik": _2,
      "naustdal": _2,
      "navuotna": _2,
      "xn--nvuotna-hwa": _2,
      "n\xE1vuotna": _2,
      "nedre-eiker": _2,
      "nesna": _2,
      "nesodden": _2,
      "nesseby": _2,
      "nesset": _2,
      "nissedal": _2,
      "nittedal": _2,
      "nord-aurdal": _2,
      "nord-fron": _2,
      "nord-odal": _2,
      "norddal": _2,
      "nordkapp": _2,
      "nordland": [0, {
        "bo": _2,
        "xn--b-5ga": _2,
        "b\xF8": _2,
        "heroy": _2,
        "xn--hery-ira": _2,
        "her\xF8y": _2
      }],
      "nordre-land": _2,
      "nordreisa": _2,
      "nore-og-uvdal": _2,
      "notodden": _2,
      "notteroy": _2,
      "xn--nttery-byae": _2,
      "n\xF8tter\xF8y": _2,
      "odda": _2,
      "oksnes": _2,
      "xn--ksnes-uua": _2,
      "\xF8ksnes": _2,
      "omasvuotna": _2,
      "oppdal": _2,
      "oppegard": _2,
      "xn--oppegrd-ixa": _2,
      "oppeg\xE5rd": _2,
      "orkdal": _2,
      "orland": _2,
      "xn--rland-uua": _2,
      "\xF8rland": _2,
      "orskog": _2,
      "xn--rskog-uua": _2,
      "\xF8rskog": _2,
      "orsta": _2,
      "xn--rsta-fra": _2,
      "\xF8rsta": _2,
      "osen": _2,
      "osteroy": _2,
      "xn--ostery-fya": _2,
      "oster\xF8y": _2,
      "ostfold": [0, {
        "valer": _2
      }],
      "xn--stfold-9xa": [0, {
        "xn--vler-qoa": _2
      }],
      "\xF8stfold": [0, {
        "v\xE5ler": _2
      }],
      "ostre-toten": _2,
      "xn--stre-toten-zcb": _2,
      "\xF8stre-toten": _2,
      "overhalla": _2,
      "ovre-eiker": _2,
      "xn--vre-eiker-k8a": _2,
      "\xF8vre-eiker": _2,
      "oyer": _2,
      "xn--yer-zna": _2,
      "\xF8yer": _2,
      "oygarden": _2,
      "xn--ygarden-p1a": _2,
      "\xF8ygarden": _2,
      "oystre-slidre": _2,
      "xn--ystre-slidre-ujb": _2,
      "\xF8ystre-slidre": _2,
      "porsanger": _2,
      "porsangu": _2,
      "xn--porsgu-sta26f": _2,
      "pors\xE1\u014Bgu": _2,
      "porsgrunn": _2,
      "rade": _2,
      "xn--rde-ula": _2,
      "r\xE5de": _2,
      "radoy": _2,
      "xn--rady-ira": _2,
      "rad\xF8y": _2,
      "xn--rlingen-mxa": _2,
      "r\xE6lingen": _2,
      "rahkkeravju": _2,
      "xn--rhkkervju-01af": _2,
      "r\xE1hkker\xE1vju": _2,
      "raisa": _2,
      "xn--risa-5na": _2,
      "r\xE1isa": _2,
      "rakkestad": _2,
      "ralingen": _2,
      "rana": _2,
      "randaberg": _2,
      "rauma": _2,
      "rendalen": _2,
      "rennebu": _2,
      "rennesoy": _2,
      "xn--rennesy-v1a": _2,
      "rennes\xF8y": _2,
      "rindal": _2,
      "ringebu": _2,
      "ringerike": _2,
      "ringsaker": _2,
      "risor": _2,
      "xn--risr-ira": _2,
      "ris\xF8r": _2,
      "rissa": _2,
      "roan": _2,
      "rodoy": _2,
      "xn--rdy-0nab": _2,
      "r\xF8d\xF8y": _2,
      "rollag": _2,
      "romsa": _2,
      "romskog": _2,
      "xn--rmskog-bya": _2,
      "r\xF8mskog": _2,
      "roros": _2,
      "xn--rros-gra": _2,
      "r\xF8ros": _2,
      "rost": _2,
      "xn--rst-0na": _2,
      "r\xF8st": _2,
      "royken": _2,
      "xn--ryken-vua": _2,
      "r\xF8yken": _2,
      "royrvik": _2,
      "xn--ryrvik-bya": _2,
      "r\xF8yrvik": _2,
      "ruovat": _2,
      "rygge": _2,
      "salangen": _2,
      "salat": _2,
      "xn--slat-5na": _2,
      "s\xE1lat": _2,
      "xn--slt-elab": _2,
      "s\xE1l\xE1t": _2,
      "saltdal": _2,
      "samnanger": _2,
      "sandefjord": _2,
      "sandnes": _2,
      "sandoy": _2,
      "xn--sandy-yua": _2,
      "sand\xF8y": _2,
      "sarpsborg": _2,
      "sauda": _2,
      "sauherad": _2,
      "sel": _2,
      "selbu": _2,
      "selje": _2,
      "seljord": _2,
      "siellak": _2,
      "sigdal": _2,
      "siljan": _2,
      "sirdal": _2,
      "skanit": _2,
      "xn--sknit-yqa": _2,
      "sk\xE1nit": _2,
      "skanland": _2,
      "xn--sknland-fxa": _2,
      "sk\xE5nland": _2,
      "skaun": _2,
      "skedsmo": _2,
      "ski": _2,
      "skien": _2,
      "skierva": _2,
      "xn--skierv-uta": _2,
      "skierv\xE1": _2,
      "skiptvet": _2,
      "skjak": _2,
      "xn--skjk-soa": _2,
      "skj\xE5k": _2,
      "skjervoy": _2,
      "xn--skjervy-v1a": _2,
      "skjerv\xF8y": _2,
      "skodje": _2,
      "smola": _2,
      "xn--smla-hra": _2,
      "sm\xF8la": _2,
      "snaase": _2,
      "xn--snase-nra": _2,
      "sn\xE5ase": _2,
      "snasa": _2,
      "xn--snsa-roa": _2,
      "sn\xE5sa": _2,
      "snillfjord": _2,
      "snoasa": _2,
      "sogndal": _2,
      "sogne": _2,
      "xn--sgne-gra": _2,
      "s\xF8gne": _2,
      "sokndal": _2,
      "sola": _2,
      "solund": _2,
      "somna": _2,
      "xn--smna-gra": _2,
      "s\xF8mna": _2,
      "sondre-land": _2,
      "xn--sndre-land-0cb": _2,
      "s\xF8ndre-land": _2,
      "songdalen": _2,
      "sor-aurdal": _2,
      "xn--sr-aurdal-l8a": _2,
      "s\xF8r-aurdal": _2,
      "sor-fron": _2,
      "xn--sr-fron-q1a": _2,
      "s\xF8r-fron": _2,
      "sor-odal": _2,
      "xn--sr-odal-q1a": _2,
      "s\xF8r-odal": _2,
      "sor-varanger": _2,
      "xn--sr-varanger-ggb": _2,
      "s\xF8r-varanger": _2,
      "sorfold": _2,
      "xn--srfold-bya": _2,
      "s\xF8rfold": _2,
      "sorreisa": _2,
      "xn--srreisa-q1a": _2,
      "s\xF8rreisa": _2,
      "sortland": _2,
      "sorum": _2,
      "xn--srum-gra": _2,
      "s\xF8rum": _2,
      "spydeberg": _2,
      "stange": _2,
      "stavanger": _2,
      "steigen": _2,
      "steinkjer": _2,
      "stjordal": _2,
      "xn--stjrdal-s1a": _2,
      "stj\xF8rdal": _2,
      "stokke": _2,
      "stor-elvdal": _2,
      "stord": _2,
      "stordal": _2,
      "storfjord": _2,
      "strand": _2,
      "stranda": _2,
      "stryn": _2,
      "sula": _2,
      "suldal": _2,
      "sund": _2,
      "sunndal": _2,
      "surnadal": _2,
      "sveio": _2,
      "svelvik": _2,
      "sykkylven": _2,
      "tana": _2,
      "telemark": [0, {
        "bo": _2,
        "xn--b-5ga": _2,
        "b\xF8": _2
      }],
      "time": _2,
      "tingvoll": _2,
      "tinn": _2,
      "tjeldsund": _2,
      "tjome": _2,
      "xn--tjme-hra": _2,
      "tj\xF8me": _2,
      "tokke": _2,
      "tolga": _2,
      "tonsberg": _2,
      "xn--tnsberg-q1a": _2,
      "t\xF8nsberg": _2,
      "torsken": _2,
      "xn--trna-woa": _2,
      "tr\xE6na": _2,
      "trana": _2,
      "tranoy": _2,
      "xn--trany-yua": _2,
      "tran\xF8y": _2,
      "troandin": _2,
      "trogstad": _2,
      "xn--trgstad-r1a": _2,
      "tr\xF8gstad": _2,
      "tromsa": _2,
      "tromso": _2,
      "xn--troms-zua": _2,
      "troms\xF8": _2,
      "trondheim": _2,
      "trysil": _2,
      "tvedestrand": _2,
      "tydal": _2,
      "tynset": _2,
      "tysfjord": _2,
      "tysnes": _2,
      "xn--tysvr-vra": _2,
      "tysv\xE6r": _2,
      "tysvar": _2,
      "ullensaker": _2,
      "ullensvang": _2,
      "ulvik": _2,
      "unjarga": _2,
      "xn--unjrga-rta": _2,
      "unj\xE1rga": _2,
      "utsira": _2,
      "vaapste": _2,
      "vadso": _2,
      "xn--vads-jra": _2,
      "vads\xF8": _2,
      "xn--vry-yla5g": _2,
      "v\xE6r\xF8y": _2,
      "vaga": _2,
      "xn--vg-yiab": _2,
      "v\xE5g\xE5": _2,
      "vagan": _2,
      "xn--vgan-qoa": _2,
      "v\xE5gan": _2,
      "vagsoy": _2,
      "xn--vgsy-qoa0j": _2,
      "v\xE5gs\xF8y": _2,
      "vaksdal": _2,
      "valle": _2,
      "vang": _2,
      "vanylven": _2,
      "vardo": _2,
      "xn--vard-jra": _2,
      "vard\xF8": _2,
      "varggat": _2,
      "xn--vrggt-xqad": _2,
      "v\xE1rgg\xE1t": _2,
      "varoy": _2,
      "vefsn": _2,
      "vega": _2,
      "vegarshei": _2,
      "xn--vegrshei-c0a": _2,
      "veg\xE5rshei": _2,
      "vennesla": _2,
      "verdal": _2,
      "verran": _2,
      "vestby": _2,
      "vestfold": [0, {
        "sande": _2
      }],
      "vestnes": _2,
      "vestre-slidre": _2,
      "vestre-toten": _2,
      "vestvagoy": _2,
      "xn--vestvgy-ixa6o": _2,
      "vestv\xE5g\xF8y": _2,
      "vevelstad": _2,
      "vik": _2,
      "vikna": _2,
      "vindafjord": _2,
      "voagat": _2,
      "volda": _2,
      "voss": _2,
      "co": _3,
      "123hjemmeside": _3,
      "myspreadshop": _3
    }],
    "np": _20,
    "nr": _59,
    "nu": [1, {
      "merseine": _3,
      "mine": _3,
      "shacknet": _3,
      "enterprisecloud": _3
    }],
    "nz": [1, {
      "ac": _2,
      "co": _2,
      "cri": _2,
      "geek": _2,
      "gen": _2,
      "govt": _2,
      "health": _2,
      "iwi": _2,
      "kiwi": _2,
      "maori": _2,
      "xn--mori-qsa": _2,
      "m\u0101ori": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "parliament": _2,
      "school": _2,
      "cloudns": _3
    }],
    "om": [1, {
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "med": _2,
      "museum": _2,
      "net": _2,
      "org": _2,
      "pro": _2
    }],
    "onion": _2,
    "org": [1, {
      "altervista": _3,
      "pimienta": _3,
      "poivron": _3,
      "potager": _3,
      "sweetpepper": _3,
      "cdn77": [0, {
        "c": _3,
        "rsc": _3
      }],
      "cdn77-secure": [0, {
        "origin": [0, {
          "ssl": _3
        }]
      }],
      "ae": _3,
      "cloudns": _3,
      "ip-dynamic": _3,
      "ddnss": _3,
      "dpdns": _3,
      "duckdns": _3,
      "tunk": _3,
      "blogdns": _3,
      "blogsite": _3,
      "boldlygoingnowhere": _3,
      "dnsalias": _3,
      "dnsdojo": _3,
      "doesntexist": _3,
      "dontexist": _3,
      "doomdns": _3,
      "dvrdns": _3,
      "dynalias": _3,
      "dyndns": [2, {
        "go": _3,
        "home": _3
      }],
      "endofinternet": _3,
      "endoftheinternet": _3,
      "from-me": _3,
      "game-host": _3,
      "gotdns": _3,
      "hobby-site": _3,
      "homedns": _3,
      "homeftp": _3,
      "homelinux": _3,
      "homeunix": _3,
      "is-a-bruinsfan": _3,
      "is-a-candidate": _3,
      "is-a-celticsfan": _3,
      "is-a-chef": _3,
      "is-a-geek": _3,
      "is-a-knight": _3,
      "is-a-linux-user": _3,
      "is-a-patsfan": _3,
      "is-a-soxfan": _3,
      "is-found": _3,
      "is-lost": _3,
      "is-saved": _3,
      "is-very-bad": _3,
      "is-very-evil": _3,
      "is-very-good": _3,
      "is-very-nice": _3,
      "is-very-sweet": _3,
      "isa-geek": _3,
      "kicks-ass": _3,
      "misconfused": _3,
      "podzone": _3,
      "readmyblog": _3,
      "selfip": _3,
      "sellsyourhome": _3,
      "servebbs": _3,
      "serveftp": _3,
      "servegame": _3,
      "stuff-4-sale": _3,
      "webhop": _3,
      "accesscam": _3,
      "camdvr": _3,
      "freeddns": _3,
      "mywire": _3,
      "webredirect": _3,
      "twmail": _3,
      "eu": [2, {
        "al": _3,
        "asso": _3,
        "at": _3,
        "au": _3,
        "be": _3,
        "bg": _3,
        "ca": _3,
        "cd": _3,
        "ch": _3,
        "cn": _3,
        "cy": _3,
        "cz": _3,
        "de": _3,
        "dk": _3,
        "edu": _3,
        "ee": _3,
        "es": _3,
        "fi": _3,
        "fr": _3,
        "gr": _3,
        "hr": _3,
        "hu": _3,
        "ie": _3,
        "il": _3,
        "in": _3,
        "int": _3,
        "is": _3,
        "it": _3,
        "jp": _3,
        "kr": _3,
        "lt": _3,
        "lu": _3,
        "lv": _3,
        "me": _3,
        "mk": _3,
        "mt": _3,
        "my": _3,
        "net": _3,
        "ng": _3,
        "nl": _3,
        "no": _3,
        "nz": _3,
        "pl": _3,
        "pt": _3,
        "ro": _3,
        "ru": _3,
        "se": _3,
        "si": _3,
        "sk": _3,
        "tr": _3,
        "uk": _3,
        "us": _3
      }],
      "fedorainfracloud": _3,
      "fedorapeople": _3,
      "fedoraproject": [0, {
        "cloud": _3,
        "os": _45,
        "stg": [0, {
          "os": _45
        }]
      }],
      "freedesktop": _3,
      "hatenadiary": _3,
      "hepforge": _3,
      "in-dsl": _3,
      "in-vpn": _3,
      "js": _3,
      "barsy": _3,
      "mayfirst": _3,
      "routingthecloud": _3,
      "bmoattachments": _3,
      "cable-modem": _3,
      "collegefan": _3,
      "couchpotatofries": _3,
      "hopto": _3,
      "mlbfan": _3,
      "myftp": _3,
      "mysecuritycamera": _3,
      "nflfan": _3,
      "no-ip": _3,
      "read-books": _3,
      "ufcfan": _3,
      "zapto": _3,
      "dynserv": _3,
      "now-dns": _3,
      "is-local": _3,
      "httpbin": _3,
      "pubtls": _3,
      "jpn": _3,
      "my-firewall": _3,
      "myfirewall": _3,
      "spdns": _3,
      "small-web": _3,
      "dsmynas": _3,
      "familyds": _3,
      "teckids": _58,
      "tuxfamily": _3,
      "diskstation": _3,
      "hk": _3,
      "us": _3,
      "toolforge": _3,
      "wmcloud": [2, {
        "beta": _3
      }],
      "wmflabs": _3,
      "za": _3
    }],
    "pa": [1, {
      "abo": _2,
      "ac": _2,
      "com": _2,
      "edu": _2,
      "gob": _2,
      "ing": _2,
      "med": _2,
      "net": _2,
      "nom": _2,
      "org": _2,
      "sld": _2
    }],
    "pe": [1, {
      "com": _2,
      "edu": _2,
      "gob": _2,
      "mil": _2,
      "net": _2,
      "nom": _2,
      "org": _2
    }],
    "pf": [1, {
      "com": _2,
      "edu": _2,
      "org": _2
    }],
    "pg": _20,
    "ph": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "i": _2,
      "mil": _2,
      "net": _2,
      "ngo": _2,
      "org": _2,
      "cloudns": _3
    }],
    "pk": [1, {
      "ac": _2,
      "biz": _2,
      "com": _2,
      "edu": _2,
      "fam": _2,
      "gkp": _2,
      "gob": _2,
      "gog": _2,
      "gok": _2,
      "gop": _2,
      "gos": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "web": _2
    }],
    "pl": [1, {
      "com": _2,
      "net": _2,
      "org": _2,
      "agro": _2,
      "aid": _2,
      "atm": _2,
      "auto": _2,
      "biz": _2,
      "edu": _2,
      "gmina": _2,
      "gsm": _2,
      "info": _2,
      "mail": _2,
      "media": _2,
      "miasta": _2,
      "mil": _2,
      "nieruchomosci": _2,
      "nom": _2,
      "pc": _2,
      "powiat": _2,
      "priv": _2,
      "realestate": _2,
      "rel": _2,
      "sex": _2,
      "shop": _2,
      "sklep": _2,
      "sos": _2,
      "szkola": _2,
      "targi": _2,
      "tm": _2,
      "tourism": _2,
      "travel": _2,
      "turystyka": _2,
      "gov": [1, {
        "ap": _2,
        "griw": _2,
        "ic": _2,
        "is": _2,
        "kmpsp": _2,
        "konsulat": _2,
        "kppsp": _2,
        "kwp": _2,
        "kwpsp": _2,
        "mup": _2,
        "mw": _2,
        "oia": _2,
        "oirm": _2,
        "oke": _2,
        "oow": _2,
        "oschr": _2,
        "oum": _2,
        "pa": _2,
        "pinb": _2,
        "piw": _2,
        "po": _2,
        "pr": _2,
        "psp": _2,
        "psse": _2,
        "pup": _2,
        "rzgw": _2,
        "sa": _2,
        "sdn": _2,
        "sko": _2,
        "so": _2,
        "sr": _2,
        "starostwo": _2,
        "ug": _2,
        "ugim": _2,
        "um": _2,
        "umig": _2,
        "upow": _2,
        "uppo": _2,
        "us": _2,
        "uw": _2,
        "uzs": _2,
        "wif": _2,
        "wiih": _2,
        "winb": _2,
        "wios": _2,
        "witd": _2,
        "wiw": _2,
        "wkz": _2,
        "wsa": _2,
        "wskr": _2,
        "wsse": _2,
        "wuoz": _2,
        "wzmiuw": _2,
        "zp": _2,
        "zpisdn": _2
      }],
      "augustow": _2,
      "babia-gora": _2,
      "bedzin": _2,
      "beskidy": _2,
      "bialowieza": _2,
      "bialystok": _2,
      "bielawa": _2,
      "bieszczady": _2,
      "boleslawiec": _2,
      "bydgoszcz": _2,
      "bytom": _2,
      "cieszyn": _2,
      "czeladz": _2,
      "czest": _2,
      "dlugoleka": _2,
      "elblag": _2,
      "elk": _2,
      "glogow": _2,
      "gniezno": _2,
      "gorlice": _2,
      "grajewo": _2,
      "ilawa": _2,
      "jaworzno": _2,
      "jelenia-gora": _2,
      "jgora": _2,
      "kalisz": _2,
      "karpacz": _2,
      "kartuzy": _2,
      "kaszuby": _2,
      "katowice": _2,
      "kazimierz-dolny": _2,
      "kepno": _2,
      "ketrzyn": _2,
      "klodzko": _2,
      "kobierzyce": _2,
      "kolobrzeg": _2,
      "konin": _2,
      "konskowola": _2,
      "kutno": _2,
      "lapy": _2,
      "lebork": _2,
      "legnica": _2,
      "lezajsk": _2,
      "limanowa": _2,
      "lomza": _2,
      "lowicz": _2,
      "lubin": _2,
      "lukow": _2,
      "malbork": _2,
      "malopolska": _2,
      "mazowsze": _2,
      "mazury": _2,
      "mielec": _2,
      "mielno": _2,
      "mragowo": _2,
      "naklo": _2,
      "nowaruda": _2,
      "nysa": _2,
      "olawa": _2,
      "olecko": _2,
      "olkusz": _2,
      "olsztyn": _2,
      "opoczno": _2,
      "opole": _2,
      "ostroda": _2,
      "ostroleka": _2,
      "ostrowiec": _2,
      "ostrowwlkp": _2,
      "pila": _2,
      "pisz": _2,
      "podhale": _2,
      "podlasie": _2,
      "polkowice": _2,
      "pomorskie": _2,
      "pomorze": _2,
      "prochowice": _2,
      "pruszkow": _2,
      "przeworsk": _2,
      "pulawy": _2,
      "radom": _2,
      "rawa-maz": _2,
      "rybnik": _2,
      "rzeszow": _2,
      "sanok": _2,
      "sejny": _2,
      "skoczow": _2,
      "slask": _2,
      "slupsk": _2,
      "sosnowiec": _2,
      "stalowa-wola": _2,
      "starachowice": _2,
      "stargard": _2,
      "suwalki": _2,
      "swidnica": _2,
      "swiebodzin": _2,
      "swinoujscie": _2,
      "szczecin": _2,
      "szczytno": _2,
      "tarnobrzeg": _2,
      "tgory": _2,
      "turek": _2,
      "tychy": _2,
      "ustka": _2,
      "walbrzych": _2,
      "warmia": _2,
      "warszawa": _2,
      "waw": _2,
      "wegrow": _2,
      "wielun": _2,
      "wlocl": _2,
      "wloclawek": _2,
      "wodzislaw": _2,
      "wolomin": _2,
      "wroclaw": _2,
      "zachpomor": _2,
      "zagan": _2,
      "zarow": _2,
      "zgora": _2,
      "zgorzelec": _2,
      "art": _3,
      "gliwice": _3,
      "krakow": _3,
      "poznan": _3,
      "wroc": _3,
      "zakopane": _3,
      "beep": _3,
      "ecommerce-shop": _3,
      "cfolks": _3,
      "dfirma": _3,
      "dkonto": _3,
      "you2": _3,
      "shoparena": _3,
      "homesklep": _3,
      "sdscloud": _3,
      "unicloud": _3,
      "lodz": _3,
      "pabianice": _3,
      "plock": _3,
      "sieradz": _3,
      "skierniewice": _3,
      "zgierz": _3,
      "krasnik": _3,
      "leczna": _3,
      "lubartow": _3,
      "lublin": _3,
      "poniatowa": _3,
      "swidnik": _3,
      "co": _3,
      "torun": _3,
      "simplesite": _3,
      "myspreadshop": _3,
      "gda": _3,
      "gdansk": _3,
      "gdynia": _3,
      "med": _3,
      "sopot": _3,
      "bielsko": _3
    }],
    "pm": [1, {
      "own": _3,
      "name": _3
    }],
    "pn": [1, {
      "co": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2
    }],
    "post": _2,
    "pr": [1, {
      "biz": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "info": _2,
      "isla": _2,
      "name": _2,
      "net": _2,
      "org": _2,
      "pro": _2,
      "ac": _2,
      "est": _2,
      "prof": _2
    }],
    "pro": [1, {
      "aaa": _2,
      "aca": _2,
      "acct": _2,
      "avocat": _2,
      "bar": _2,
      "cpa": _2,
      "eng": _2,
      "jur": _2,
      "law": _2,
      "med": _2,
      "recht": _2,
      "12chars": _3,
      "cloudns": _3,
      "barsy": _3,
      "ngrok": _3
    }],
    "ps": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "plo": _2,
      "sec": _2
    }],
    "pt": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "int": _2,
      "net": _2,
      "nome": _2,
      "org": _2,
      "publ": _2,
      "123paginaweb": _3
    }],
    "pw": [1, {
      "gov": _2,
      "cloudns": _3,
      "x443": _3
    }],
    "py": [1, {
      "com": _2,
      "coop": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2
    }],
    "qa": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "name": _2,
      "net": _2,
      "org": _2,
      "sch": _2
    }],
    "re": [1, {
      "asso": _2,
      "com": _2,
      "netlib": _3,
      "can": _3
    }],
    "ro": [1, {
      "arts": _2,
      "com": _2,
      "firm": _2,
      "info": _2,
      "nom": _2,
      "nt": _2,
      "org": _2,
      "rec": _2,
      "store": _2,
      "tm": _2,
      "www": _2,
      "co": _3,
      "shop": _3,
      "barsy": _3
    }],
    "rs": [1, {
      "ac": _2,
      "co": _2,
      "edu": _2,
      "gov": _2,
      "in": _2,
      "org": _2,
      "brendly": _19,
      "barsy": _3,
      "ox": _3
    }],
    "ru": [1, {
      "ac": _3,
      "edu": _3,
      "gov": _3,
      "int": _3,
      "mil": _3,
      "eurodir": _3,
      "adygeya": _3,
      "bashkiria": _3,
      "bir": _3,
      "cbg": _3,
      "com": _3,
      "dagestan": _3,
      "grozny": _3,
      "kalmykia": _3,
      "kustanai": _3,
      "marine": _3,
      "mordovia": _3,
      "msk": _3,
      "mytis": _3,
      "nalchik": _3,
      "nov": _3,
      "pyatigorsk": _3,
      "spb": _3,
      "vladikavkaz": _3,
      "vladimir": _3,
      "na4u": _3,
      "mircloud": _3,
      "myjino": [2, {
        "hosting": _6,
        "landing": _6,
        "spectrum": _6,
        "vps": _6
      }],
      "cldmail": [0, {
        "hb": _3
      }],
      "mcdir": _11,
      "mcpre": _3,
      "net": _3,
      "org": _3,
      "pp": _3,
      "lk3": _3,
      "ras": _3
    }],
    "rw": [1, {
      "ac": _2,
      "co": _2,
      "coop": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2
    }],
    "sa": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "med": _2,
      "net": _2,
      "org": _2,
      "pub": _2,
      "sch": _2
    }],
    "sb": _4,
    "sc": _4,
    "sd": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "info": _2,
      "med": _2,
      "net": _2,
      "org": _2,
      "tv": _2
    }],
    "se": [1, {
      "a": _2,
      "ac": _2,
      "b": _2,
      "bd": _2,
      "brand": _2,
      "c": _2,
      "d": _2,
      "e": _2,
      "f": _2,
      "fh": _2,
      "fhsk": _2,
      "fhv": _2,
      "g": _2,
      "h": _2,
      "i": _2,
      "k": _2,
      "komforb": _2,
      "kommunalforbund": _2,
      "komvux": _2,
      "l": _2,
      "lanbib": _2,
      "m": _2,
      "n": _2,
      "naturbruksgymn": _2,
      "o": _2,
      "org": _2,
      "p": _2,
      "parti": _2,
      "pp": _2,
      "press": _2,
      "r": _2,
      "s": _2,
      "t": _2,
      "tm": _2,
      "u": _2,
      "w": _2,
      "x": _2,
      "y": _2,
      "z": _2,
      "com": _3,
      "iopsys": _3,
      "123minsida": _3,
      "itcouldbewor": _3,
      "myspreadshop": _3
    }],
    "sg": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "enscaled": _3
    }],
    "sh": [1, {
      "com": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "hashbang": _3,
      "botda": _3,
      "lovable": _3,
      "platform": [0, {
        "ent": _3,
        "eu": _3,
        "us": _3
      }],
      "teleport": _3,
      "now": _3
    }],
    "si": [1, {
      "f5": _3,
      "gitapp": _3,
      "gitpage": _3
    }],
    "sj": _2,
    "sk": _2,
    "sl": _4,
    "sm": _2,
    "sn": [1, {
      "art": _2,
      "com": _2,
      "edu": _2,
      "gouv": _2,
      "org": _2,
      "perso": _2,
      "univ": _2
    }],
    "so": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "me": _2,
      "net": _2,
      "org": _2,
      "surveys": _3
    }],
    "sr": _2,
    "ss": [1, {
      "biz": _2,
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "me": _2,
      "net": _2,
      "org": _2,
      "sch": _2
    }],
    "st": [1, {
      "co": _2,
      "com": _2,
      "consulado": _2,
      "edu": _2,
      "embaixada": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "principe": _2,
      "saotome": _2,
      "store": _2,
      "helioho": _3,
      "kirara": _3,
      "noho": _3
    }],
    "su": [1, {
      "abkhazia": _3,
      "adygeya": _3,
      "aktyubinsk": _3,
      "arkhangelsk": _3,
      "armenia": _3,
      "ashgabad": _3,
      "azerbaijan": _3,
      "balashov": _3,
      "bashkiria": _3,
      "bryansk": _3,
      "bukhara": _3,
      "chimkent": _3,
      "dagestan": _3,
      "east-kazakhstan": _3,
      "exnet": _3,
      "georgia": _3,
      "grozny": _3,
      "ivanovo": _3,
      "jambyl": _3,
      "kalmykia": _3,
      "kaluga": _3,
      "karacol": _3,
      "karaganda": _3,
      "karelia": _3,
      "khakassia": _3,
      "krasnodar": _3,
      "kurgan": _3,
      "kustanai": _3,
      "lenug": _3,
      "mangyshlak": _3,
      "mordovia": _3,
      "msk": _3,
      "murmansk": _3,
      "nalchik": _3,
      "navoi": _3,
      "north-kazakhstan": _3,
      "nov": _3,
      "obninsk": _3,
      "penza": _3,
      "pokrovsk": _3,
      "sochi": _3,
      "spb": _3,
      "tashkent": _3,
      "termez": _3,
      "togliatti": _3,
      "troitsk": _3,
      "tselinograd": _3,
      "tula": _3,
      "tuva": _3,
      "vladikavkaz": _3,
      "vladimir": _3,
      "vologda": _3
    }],
    "sv": [1, {
      "com": _2,
      "edu": _2,
      "gob": _2,
      "org": _2,
      "red": _2
    }],
    "sx": _10,
    "sy": _5,
    "sz": [1, {
      "ac": _2,
      "co": _2,
      "org": _2
    }],
    "tc": _2,
    "td": _2,
    "tel": _2,
    "tf": [1, {
      "sch": _3
    }],
    "tg": _2,
    "th": [1, {
      "ac": _2,
      "co": _2,
      "go": _2,
      "in": _2,
      "mi": _2,
      "net": _2,
      "or": _2,
      "online": _3,
      "shop": _3
    }],
    "tj": [1, {
      "ac": _2,
      "biz": _2,
      "co": _2,
      "com": _2,
      "edu": _2,
      "go": _2,
      "gov": _2,
      "int": _2,
      "mil": _2,
      "name": _2,
      "net": _2,
      "nic": _2,
      "org": _2,
      "test": _2,
      "web": _2
    }],
    "tk": _2,
    "tl": _10,
    "tm": [1, {
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "nom": _2,
      "org": _2
    }],
    "tn": [1, {
      "com": _2,
      "ens": _2,
      "fin": _2,
      "gov": _2,
      "ind": _2,
      "info": _2,
      "intl": _2,
      "mincom": _2,
      "nat": _2,
      "net": _2,
      "org": _2,
      "perso": _2,
      "tourism": _2,
      "orangecloud": _3
    }],
    "to": [1, {
      "611": _3,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "oya": _3,
      "x0": _3,
      "quickconnect": _27,
      "vpnplus": _3
    }],
    "tr": [1, {
      "av": _2,
      "bbs": _2,
      "bel": _2,
      "biz": _2,
      "com": _2,
      "dr": _2,
      "edu": _2,
      "gen": _2,
      "gov": _2,
      "info": _2,
      "k12": _2,
      "kep": _2,
      "mil": _2,
      "name": _2,
      "net": _2,
      "org": _2,
      "pol": _2,
      "tel": _2,
      "tsk": _2,
      "tv": _2,
      "web": _2,
      "nc": _10
    }],
    "tt": [1, {
      "biz": _2,
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "info": _2,
      "mil": _2,
      "name": _2,
      "net": _2,
      "org": _2,
      "pro": _2
    }],
    "tv": [1, {
      "better-than": _3,
      "dyndns": _3,
      "on-the-web": _3,
      "worse-than": _3,
      "from": _3,
      "sakura": _3
    }],
    "tw": [1, {
      "club": _2,
      "com": [1, {
        "mymailer": _3
      }],
      "ebiz": _2,
      "edu": _2,
      "game": _2,
      "gov": _2,
      "idv": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "url": _3,
      "mydns": _3
    }],
    "tz": [1, {
      "ac": _2,
      "co": _2,
      "go": _2,
      "hotel": _2,
      "info": _2,
      "me": _2,
      "mil": _2,
      "mobi": _2,
      "ne": _2,
      "or": _2,
      "sc": _2,
      "tv": _2
    }],
    "ua": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "in": _2,
      "net": _2,
      "org": _2,
      "cherkassy": _2,
      "cherkasy": _2,
      "chernigov": _2,
      "chernihiv": _2,
      "chernivtsi": _2,
      "chernovtsy": _2,
      "ck": _2,
      "cn": _2,
      "cr": _2,
      "crimea": _2,
      "cv": _2,
      "dn": _2,
      "dnepropetrovsk": _2,
      "dnipropetrovsk": _2,
      "donetsk": _2,
      "dp": _2,
      "if": _2,
      "ivano-frankivsk": _2,
      "kh": _2,
      "kharkiv": _2,
      "kharkov": _2,
      "kherson": _2,
      "khmelnitskiy": _2,
      "khmelnytskyi": _2,
      "kiev": _2,
      "kirovograd": _2,
      "km": _2,
      "kr": _2,
      "kropyvnytskyi": _2,
      "krym": _2,
      "ks": _2,
      "kv": _2,
      "kyiv": _2,
      "lg": _2,
      "lt": _2,
      "lugansk": _2,
      "luhansk": _2,
      "lutsk": _2,
      "lv": _2,
      "lviv": _2,
      "mk": _2,
      "mykolaiv": _2,
      "nikolaev": _2,
      "od": _2,
      "odesa": _2,
      "odessa": _2,
      "pl": _2,
      "poltava": _2,
      "rivne": _2,
      "rovno": _2,
      "rv": _2,
      "sb": _2,
      "sebastopol": _2,
      "sevastopol": _2,
      "sm": _2,
      "sumy": _2,
      "te": _2,
      "ternopil": _2,
      "uz": _2,
      "uzhgorod": _2,
      "uzhhorod": _2,
      "vinnica": _2,
      "vinnytsia": _2,
      "vn": _2,
      "volyn": _2,
      "yalta": _2,
      "zakarpattia": _2,
      "zaporizhzhe": _2,
      "zaporizhzhia": _2,
      "zhitomir": _2,
      "zhytomyr": _2,
      "zp": _2,
      "zt": _2,
      "cc": _3,
      "inf": _3,
      "ltd": _3,
      "cx": _3,
      "biz": _3,
      "co": _3,
      "pp": _3,
      "v": _3
    }],
    "ug": [1, {
      "ac": _2,
      "co": _2,
      "com": _2,
      "edu": _2,
      "go": _2,
      "gov": _2,
      "mil": _2,
      "ne": _2,
      "or": _2,
      "org": _2,
      "sc": _2,
      "us": _2
    }],
    "uk": [1, {
      "ac": _2,
      "co": [1, {
        "bytemark": [0, {
          "dh": _3,
          "vm": _3
        }],
        "layershift": _48,
        "barsy": _3,
        "barsyonline": _3,
        "retrosnub": _57,
        "nh-serv": _3,
        "no-ip": _3,
        "adimo": _3,
        "myspreadshop": _3
      }],
      "gov": [1, {
        "api": _3,
        "campaign": _3,
        "service": _3
      }],
      "ltd": _2,
      "me": _2,
      "net": _2,
      "nhs": _2,
      "org": [1, {
        "glug": _3,
        "lug": _3,
        "lugs": _3,
        "affinitylottery": _3,
        "raffleentry": _3,
        "weeklylottery": _3
      }],
      "plc": _2,
      "police": _2,
      "sch": _20,
      "conn": _3,
      "copro": _3,
      "hosp": _3,
      "independent-commission": _3,
      "independent-inquest": _3,
      "independent-inquiry": _3,
      "independent-panel": _3,
      "independent-review": _3,
      "public-inquiry": _3,
      "royal-commission": _3,
      "pymnt": _3,
      "barsy": _3,
      "nimsite": _3,
      "oraclegovcloudapps": _6
    }],
    "us": [1, {
      "dni": _2,
      "isa": _2,
      "nsn": _2,
      "ak": _65,
      "al": _65,
      "ar": _65,
      "as": _65,
      "az": _65,
      "ca": _65,
      "co": _65,
      "ct": _65,
      "dc": _65,
      "de": _66,
      "fl": _65,
      "ga": _65,
      "gu": _65,
      "hi": _67,
      "ia": _65,
      "id": _65,
      "il": _65,
      "in": _65,
      "ks": _65,
      "ky": _65,
      "la": _65,
      "ma": [1, {
        "k12": [1, {
          "chtr": _2,
          "paroch": _2,
          "pvt": _2
        }],
        "cc": _2,
        "lib": _2
      }],
      "md": _65,
      "me": _65,
      "mi": [1, {
        "k12": _2,
        "cc": _2,
        "lib": _2,
        "ann-arbor": _2,
        "cog": _2,
        "dst": _2,
        "eaton": _2,
        "gen": _2,
        "mus": _2,
        "tec": _2,
        "washtenaw": _2
      }],
      "mn": _65,
      "mo": _65,
      "ms": [1, {
        "k12": _2,
        "cc": _2
      }],
      "mt": _65,
      "nc": _65,
      "nd": _67,
      "ne": _65,
      "nh": _65,
      "nj": _65,
      "nm": _65,
      "nv": _65,
      "ny": _65,
      "oh": _65,
      "ok": _65,
      "or": _65,
      "pa": _65,
      "pr": _65,
      "ri": _67,
      "sc": _65,
      "sd": _67,
      "tn": _65,
      "tx": _65,
      "ut": _65,
      "va": _65,
      "vi": _65,
      "vt": _65,
      "wa": _65,
      "wi": _65,
      "wv": _66,
      "wy": _65,
      "cloudns": _3,
      "is-by": _3,
      "land-4-sale": _3,
      "stuff-4-sale": _3,
      "heliohost": _3,
      "enscaled": [0, {
        "phx": _3
      }],
      "mircloud": _3,
      "ngo": _3,
      "golffan": _3,
      "noip": _3,
      "pointto": _3,
      "freeddns": _3,
      "srv": [2, {
        "gh": _3,
        "gl": _3
      }],
      "platterp": _3,
      "servername": _3
    }],
    "uy": [1, {
      "com": _2,
      "edu": _2,
      "gub": _2,
      "mil": _2,
      "net": _2,
      "org": _2
    }],
    "uz": [1, {
      "co": _2,
      "com": _2,
      "net": _2,
      "org": _2
    }],
    "va": _2,
    "vc": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "gv": [2, {
        "d": _3
      }],
      "0e": _6,
      "mydns": _3
    }],
    "ve": [1, {
      "arts": _2,
      "bib": _2,
      "co": _2,
      "com": _2,
      "e12": _2,
      "edu": _2,
      "emprende": _2,
      "firm": _2,
      "gob": _2,
      "gov": _2,
      "info": _2,
      "int": _2,
      "mil": _2,
      "net": _2,
      "nom": _2,
      "org": _2,
      "rar": _2,
      "rec": _2,
      "store": _2,
      "tec": _2,
      "web": _2
    }],
    "vg": [1, {
      "edu": _2
    }],
    "vi": [1, {
      "co": _2,
      "com": _2,
      "k12": _2,
      "net": _2,
      "org": _2
    }],
    "vn": [1, {
      "ac": _2,
      "ai": _2,
      "biz": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "health": _2,
      "id": _2,
      "info": _2,
      "int": _2,
      "io": _2,
      "name": _2,
      "net": _2,
      "org": _2,
      "pro": _2,
      "angiang": _2,
      "bacgiang": _2,
      "backan": _2,
      "baclieu": _2,
      "bacninh": _2,
      "baria-vungtau": _2,
      "bentre": _2,
      "binhdinh": _2,
      "binhduong": _2,
      "binhphuoc": _2,
      "binhthuan": _2,
      "camau": _2,
      "cantho": _2,
      "caobang": _2,
      "daklak": _2,
      "daknong": _2,
      "danang": _2,
      "dienbien": _2,
      "dongnai": _2,
      "dongthap": _2,
      "gialai": _2,
      "hagiang": _2,
      "haiduong": _2,
      "haiphong": _2,
      "hanam": _2,
      "hanoi": _2,
      "hatinh": _2,
      "haugiang": _2,
      "hoabinh": _2,
      "hungyen": _2,
      "khanhhoa": _2,
      "kiengiang": _2,
      "kontum": _2,
      "laichau": _2,
      "lamdong": _2,
      "langson": _2,
      "laocai": _2,
      "longan": _2,
      "namdinh": _2,
      "nghean": _2,
      "ninhbinh": _2,
      "ninhthuan": _2,
      "phutho": _2,
      "phuyen": _2,
      "quangbinh": _2,
      "quangnam": _2,
      "quangngai": _2,
      "quangninh": _2,
      "quangtri": _2,
      "soctrang": _2,
      "sonla": _2,
      "tayninh": _2,
      "thaibinh": _2,
      "thainguyen": _2,
      "thanhhoa": _2,
      "thanhphohochiminh": _2,
      "thuathienhue": _2,
      "tiengiang": _2,
      "travinh": _2,
      "tuyenquang": _2,
      "vinhlong": _2,
      "vinhphuc": _2,
      "yenbai": _2
    }],
    "vu": _47,
    "wf": [1, {
      "biz": _3,
      "sch": _3
    }],
    "ws": [1, {
      "com": _2,
      "edu": _2,
      "gov": _2,
      "net": _2,
      "org": _2,
      "advisor": _6,
      "cloud66": _3,
      "dyndns": _3,
      "mypets": _3
    }],
    "yt": [1, {
      "org": _3
    }],
    "xn--mgbaam7a8h": _2,
    "\u0627\u0645\u0627\u0631\u0627\u062A": _2,
    "xn--y9a3aq": _2,
    "\u0570\u0561\u0575": _2,
    "xn--54b7fta0cc": _2,
    "\u09AC\u09BE\u0982\u09B2\u09BE": _2,
    "xn--90ae": _2,
    "\u0431\u0433": _2,
    "xn--mgbcpq6gpa1a": _2,
    "\u0627\u0644\u0628\u062D\u0631\u064A\u0646": _2,
    "xn--90ais": _2,
    "\u0431\u0435\u043B": _2,
    "xn--fiqs8s": _2,
    "\u4E2D\u56FD": _2,
    "xn--fiqz9s": _2,
    "\u4E2D\u570B": _2,
    "xn--lgbbat1ad8j": _2,
    "\u0627\u0644\u062C\u0632\u0627\u0626\u0631": _2,
    "xn--wgbh1c": _2,
    "\u0645\u0635\u0631": _2,
    "xn--e1a4c": _2,
    "\u0435\u044E": _2,
    "xn--qxa6a": _2,
    "\u03B5\u03C5": _2,
    "xn--mgbah1a3hjkrd": _2,
    "\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627": _2,
    "xn--node": _2,
    "\u10D2\u10D4": _2,
    "xn--qxam": _2,
    "\u03B5\u03BB": _2,
    "xn--j6w193g": [1, {
      "xn--gmqw5a": _2,
      "xn--55qx5d": _2,
      "xn--mxtq1m": _2,
      "xn--wcvs22d": _2,
      "xn--uc0atv": _2,
      "xn--od0alg": _2
    }],
    "\u9999\u6E2F": [1, {
      "\u500B\u4EBA": _2,
      "\u516C\u53F8": _2,
      "\u653F\u5E9C": _2,
      "\u6559\u80B2": _2,
      "\u7D44\u7E54": _2,
      "\u7DB2\u7D61": _2
    }],
    "xn--2scrj9c": _2,
    "\u0CAD\u0CBE\u0CB0\u0CA4": _2,
    "xn--3hcrj9c": _2,
    "\u0B2D\u0B3E\u0B30\u0B24": _2,
    "xn--45br5cyl": _2,
    "\u09AD\u09BE\u09F0\u09A4": _2,
    "xn--h2breg3eve": _2,
    "\u092D\u093E\u0930\u0924\u092E\u094D": _2,
    "xn--h2brj9c8c": _2,
    "\u092D\u093E\u0930\u094B\u0924": _2,
    "xn--mgbgu82a": _2,
    "\u0680\u0627\u0631\u062A": _2,
    "xn--rvc1e0am3e": _2,
    "\u0D2D\u0D3E\u0D30\u0D24\u0D02": _2,
    "xn--h2brj9c": _2,
    "\u092D\u093E\u0930\u0924": _2,
    "xn--mgbbh1a": _2,
    "\u0628\u0627\u0631\u062A": _2,
    "xn--mgbbh1a71e": _2,
    "\u0628\u06BE\u0627\u0631\u062A": _2,
    "xn--fpcrj9c3d": _2,
    "\u0C2D\u0C3E\u0C30\u0C24\u0C4D": _2,
    "xn--gecrj9c": _2,
    "\u0AAD\u0ABE\u0AB0\u0AA4": _2,
    "xn--s9brj9c": _2,
    "\u0A2D\u0A3E\u0A30\u0A24": _2,
    "xn--45brj9c": _2,
    "\u09AD\u09BE\u09B0\u09A4": _2,
    "xn--xkc2dl3a5ee0h": _2,
    "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE": _2,
    "xn--mgba3a4f16a": _2,
    "\u0627\u06CC\u0631\u0627\u0646": _2,
    "xn--mgba3a4fra": _2,
    "\u0627\u064A\u0631\u0627\u0646": _2,
    "xn--mgbtx2b": _2,
    "\u0639\u0631\u0627\u0642": _2,
    "xn--mgbayh7gpa": _2,
    "\u0627\u0644\u0627\u0631\u062F\u0646": _2,
    "xn--3e0b707e": _2,
    "\uD55C\uAD6D": _2,
    "xn--80ao21a": _2,
    "\u049B\u0430\u0437": _2,
    "xn--q7ce6a": _2,
    "\u0EA5\u0EB2\u0EA7": _2,
    "xn--fzc2c9e2c": _2,
    "\u0DBD\u0D82\u0D9A\u0DCF": _2,
    "xn--xkc2al3hye2a": _2,
    "\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8": _2,
    "xn--mgbc0a9azcg": _2,
    "\u0627\u0644\u0645\u063A\u0631\u0628": _2,
    "xn--d1alf": _2,
    "\u043C\u043A\u0434": _2,
    "xn--l1acc": _2,
    "\u043C\u043E\u043D": _2,
    "xn--mix891f": _2,
    "\u6FB3\u9580": _2,
    "xn--mix082f": _2,
    "\u6FB3\u95E8": _2,
    "xn--mgbx4cd0ab": _2,
    "\u0645\u0644\u064A\u0633\u064A\u0627": _2,
    "xn--mgb9awbf": _2,
    "\u0639\u0645\u0627\u0646": _2,
    "xn--mgbai9azgqp6j": _2,
    "\u067E\u0627\u06A9\u0633\u062A\u0627\u0646": _2,
    "xn--mgbai9a5eva00b": _2,
    "\u067E\u0627\u0643\u0633\u062A\u0627\u0646": _2,
    "xn--ygbi2ammx": _2,
    "\u0641\u0644\u0633\u0637\u064A\u0646": _2,
    "xn--90a3ac": [1, {
      "xn--80au": _2,
      "xn--90azh": _2,
      "xn--d1at": _2,
      "xn--c1avg": _2,
      "xn--o1ac": _2,
      "xn--o1ach": _2
    }],
    "\u0441\u0440\u0431": [1, {
      "\u0430\u043A": _2,
      "\u043E\u0431\u0440": _2,
      "\u043E\u0434": _2,
      "\u043E\u0440\u0433": _2,
      "\u043F\u0440": _2,
      "\u0443\u043F\u0440": _2
    }],
    "xn--p1ai": _2,
    "\u0440\u0444": _2,
    "xn--wgbl6a": _2,
    "\u0642\u0637\u0631": _2,
    "xn--mgberp4a5d4ar": _2,
    "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629": _2,
    "xn--mgberp4a5d4a87g": _2,
    "\u0627\u0644\u0633\u0639\u0648\u062F\u06CC\u0629": _2,
    "xn--mgbqly7c0a67fbc": _2,
    "\u0627\u0644\u0633\u0639\u0648\u062F\u06CC\u06C3": _2,
    "xn--mgbqly7cvafr": _2,
    "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0647": _2,
    "xn--mgbpl2fh": _2,
    "\u0633\u0648\u062F\u0627\u0646": _2,
    "xn--yfro4i67o": _2,
    "\u65B0\u52A0\u5761": _2,
    "xn--clchc0ea0b2g2a9gcd": _2,
    "\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD": _2,
    "xn--ogbpf8fl": _2,
    "\u0633\u0648\u0631\u064A\u0629": _2,
    "xn--mgbtf8fl": _2,
    "\u0633\u0648\u0631\u064A\u0627": _2,
    "xn--o3cw4h": [1, {
      "xn--o3cyx2a": _2,
      "xn--12co0c3b4eva": _2,
      "xn--m3ch0j3a": _2,
      "xn--h3cuzk1di": _2,
      "xn--12c1fe0br": _2,
      "xn--12cfi8ixb8l": _2
    }],
    "\u0E44\u0E17\u0E22": [1, {
      "\u0E17\u0E2B\u0E32\u0E23": _2,
      "\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08": _2,
      "\u0E40\u0E19\u0E47\u0E15": _2,
      "\u0E23\u0E31\u0E10\u0E1A\u0E32\u0E25": _2,
      "\u0E28\u0E36\u0E01\u0E29\u0E32": _2,
      "\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23": _2
    }],
    "xn--pgbs0dh": _2,
    "\u062A\u0648\u0646\u0633": _2,
    "xn--kpry57d": _2,
    "\u53F0\u7063": _2,
    "xn--kprw13d": _2,
    "\u53F0\u6E7E": _2,
    "xn--nnx388a": _2,
    "\u81FA\u7063": _2,
    "xn--j1amh": _2,
    "\u0443\u043A\u0440": _2,
    "xn--mgb2ddes": _2,
    "\u0627\u0644\u064A\u0645\u0646": _2,
    "xxx": _2,
    "ye": _5,
    "za": [0, {
      "ac": _2,
      "agric": _2,
      "alt": _2,
      "co": _2,
      "edu": _2,
      "gov": _2,
      "grondar": _2,
      "law": _2,
      "mil": _2,
      "net": _2,
      "ngo": _2,
      "nic": _2,
      "nis": _2,
      "nom": _2,
      "org": _2,
      "school": _2,
      "tm": _2,
      "web": _2
    }],
    "zm": [1, {
      "ac": _2,
      "biz": _2,
      "co": _2,
      "com": _2,
      "edu": _2,
      "gov": _2,
      "info": _2,
      "mil": _2,
      "net": _2,
      "org": _2,
      "sch": _2
    }],
    "zw": [1, {
      "ac": _2,
      "co": _2,
      "gov": _2,
      "mil": _2,
      "org": _2
    }],
    "aaa": _2,
    "aarp": _2,
    "abb": _2,
    "abbott": _2,
    "abbvie": _2,
    "abc": _2,
    "able": _2,
    "abogado": _2,
    "abudhabi": _2,
    "academy": [1, {
      "official": _3
    }],
    "accenture": _2,
    "accountant": _2,
    "accountants": _2,
    "aco": _2,
    "actor": _2,
    "ads": _2,
    "adult": _2,
    "aeg": _2,
    "aetna": _2,
    "afl": _2,
    "africa": _2,
    "agakhan": _2,
    "agency": _2,
    "aig": _2,
    "airbus": _2,
    "airforce": _2,
    "airtel": _2,
    "akdn": _2,
    "alibaba": _2,
    "alipay": _2,
    "allfinanz": _2,
    "allstate": _2,
    "ally": _2,
    "alsace": _2,
    "alstom": _2,
    "amazon": _2,
    "americanexpress": _2,
    "americanfamily": _2,
    "amex": _2,
    "amfam": _2,
    "amica": _2,
    "amsterdam": _2,
    "analytics": _2,
    "android": _2,
    "anquan": _2,
    "anz": _2,
    "aol": _2,
    "apartments": _2,
    "app": [1, {
      "adaptable": _3,
      "aiven": _3,
      "beget": _6,
      "brave": _7,
      "clerk": _3,
      "clerkstage": _3,
      "wnext": _3,
      "csb": [2, {
        "preview": _3
      }],
      "convex": _3,
      "deta": _3,
      "ondigitalocean": _3,
      "easypanel": _3,
      "encr": [2, {
        "frontend": _3
      }],
      "evervault": _8,
      "expo": [2, {
        "staging": _3
      }],
      "edgecompute": _3,
      "on-fleek": _3,
      "flutterflow": _3,
      "e2b": _3,
      "framer": _3,
      "github": _3,
      "hosted": _6,
      "run": [0, {
        "*": _3,
        "mtls": _6
      }],
      "web": _3,
      "hackclub": _3,
      "hasura": _3,
      "botdash": _3,
      "leapcell": _3,
      "loginline": _3,
      "lovable": _3,
      "luyani": _3,
      "medusajs": _3,
      "messerli": _3,
      "netfy": _3,
      "netlify": _3,
      "ngrok": _3,
      "ngrok-free": _3,
      "developer": _6,
      "noop": _3,
      "northflank": _6,
      "upsun": _6,
      "railway": [0, {
        "up": _3
      }],
      "replit": _9,
      "nyat": _3,
      "snowflake": [0, {
        "*": _3,
        "privatelink": _6
      }],
      "streamlit": _3,
      "storipress": _3,
      "telebit": _3,
      "typedream": _3,
      "vercel": _3,
      "wal": _3,
      "bookonline": _3,
      "wdh": _3,
      "windsurf": _3,
      "zeabur": _3,
      "zerops": _6
    }],
    "apple": _2,
    "aquarelle": _2,
    "arab": _2,
    "aramco": _2,
    "archi": _2,
    "army": _2,
    "art": _2,
    "arte": _2,
    "asda": _2,
    "associates": _2,
    "athleta": _2,
    "attorney": _2,
    "auction": _2,
    "audi": _2,
    "audible": _2,
    "audio": _2,
    "auspost": _2,
    "author": _2,
    "auto": _2,
    "autos": _2,
    "aws": [1, {
      "on": [0, {
        "af-south-1": _12,
        "ap-east-1": _12,
        "ap-northeast-1": _12,
        "ap-northeast-2": _12,
        "ap-northeast-3": _12,
        "ap-south-1": _12,
        "ap-south-2": _12,
        "ap-southeast-1": _12,
        "ap-southeast-2": _12,
        "ap-southeast-3": _12,
        "ap-southeast-4": _12,
        "ap-southeast-5": _12,
        "ca-central-1": _12,
        "ca-west-1": _12,
        "eu-central-1": _12,
        "eu-central-2": _12,
        "eu-north-1": _12,
        "eu-south-1": _12,
        "eu-south-2": _12,
        "eu-west-1": _12,
        "eu-west-2": _12,
        "eu-west-3": _12,
        "il-central-1": _12,
        "me-central-1": _12,
        "me-south-1": _12,
        "sa-east-1": _12,
        "us-east-1": _12,
        "us-east-2": _12,
        "us-west-1": _12,
        "us-west-2": _12,
        "us-gov-east-1": _13,
        "us-gov-west-1": _13
      }],
      "sagemaker": [0, {
        "ap-northeast-1": _15,
        "ap-northeast-2": _15,
        "ap-south-1": _15,
        "ap-southeast-1": _15,
        "ap-southeast-2": _15,
        "ca-central-1": _17,
        "eu-central-1": _15,
        "eu-west-1": _15,
        "eu-west-2": _15,
        "us-east-1": _17,
        "us-east-2": _17,
        "us-west-2": _17,
        "af-south-1": _14,
        "ap-east-1": _14,
        "ap-northeast-3": _14,
        "ap-south-2": _16,
        "ap-southeast-3": _14,
        "ap-southeast-4": _16,
        "ca-west-1": [0, {
          "notebook": _3,
          "notebook-fips": _3
        }],
        "eu-central-2": _14,
        "eu-north-1": _14,
        "eu-south-1": _14,
        "eu-south-2": _14,
        "eu-west-3": _14,
        "il-central-1": _14,
        "me-central-1": _14,
        "me-south-1": _14,
        "sa-east-1": _14,
        "us-gov-east-1": _18,
        "us-gov-west-1": _18,
        "us-west-1": [0, {
          "notebook": _3,
          "notebook-fips": _3,
          "studio": _3
        }],
        "experiments": _6
      }],
      "repost": [0, {
        "private": _6
      }]
    }],
    "axa": _2,
    "azure": _2,
    "baby": _2,
    "baidu": _2,
    "banamex": _2,
    "band": _2,
    "bank": _2,
    "bar": _2,
    "barcelona": _2,
    "barclaycard": _2,
    "barclays": _2,
    "barefoot": _2,
    "bargains": _2,
    "baseball": _2,
    "basketball": [1, {
      "aus": _3,
      "nz": _3
    }],
    "bauhaus": _2,
    "bayern": _2,
    "bbc": _2,
    "bbt": _2,
    "bbva": _2,
    "bcg": _2,
    "bcn": _2,
    "beats": _2,
    "beauty": _2,
    "beer": _2,
    "berlin": _2,
    "best": _2,
    "bestbuy": _2,
    "bet": _2,
    "bharti": _2,
    "bible": _2,
    "bid": _2,
    "bike": _2,
    "bing": _2,
    "bingo": _2,
    "bio": _2,
    "black": _2,
    "blackfriday": _2,
    "blockbuster": _2,
    "blog": _2,
    "bloomberg": _2,
    "blue": _2,
    "bms": _2,
    "bmw": _2,
    "bnpparibas": _2,
    "boats": _2,
    "boehringer": _2,
    "bofa": _2,
    "bom": _2,
    "bond": _2,
    "boo": _2,
    "book": _2,
    "booking": _2,
    "bosch": _2,
    "bostik": _2,
    "boston": _2,
    "bot": _2,
    "boutique": _2,
    "box": _2,
    "bradesco": _2,
    "bridgestone": _2,
    "broadway": _2,
    "broker": _2,
    "brother": _2,
    "brussels": _2,
    "build": [1, {
      "v0": _3,
      "windsurf": _3
    }],
    "builders": [1, {
      "cloudsite": _3
    }],
    "business": _21,
    "buy": _2,
    "buzz": _2,
    "bzh": _2,
    "cab": _2,
    "cafe": _2,
    "cal": _2,
    "call": _2,
    "calvinklein": _2,
    "cam": _2,
    "camera": _2,
    "camp": [1, {
      "emf": [0, {
        "at": _3
      }]
    }],
    "canon": _2,
    "capetown": _2,
    "capital": _2,
    "capitalone": _2,
    "car": _2,
    "caravan": _2,
    "cards": _2,
    "care": _2,
    "career": _2,
    "careers": _2,
    "cars": _2,
    "casa": [1, {
      "nabu": [0, {
        "ui": _3
      }]
    }],
    "case": _2,
    "cash": _2,
    "casino": _2,
    "catering": _2,
    "catholic": _2,
    "cba": _2,
    "cbn": _2,
    "cbre": _2,
    "center": _2,
    "ceo": _2,
    "cern": _2,
    "cfa": _2,
    "cfd": _2,
    "chanel": _2,
    "channel": _2,
    "charity": _2,
    "chase": _2,
    "chat": _2,
    "cheap": _2,
    "chintai": _2,
    "christmas": _2,
    "chrome": _2,
    "church": _2,
    "cipriani": _2,
    "circle": _2,
    "cisco": _2,
    "citadel": _2,
    "citi": _2,
    "citic": _2,
    "city": _2,
    "claims": _2,
    "cleaning": _2,
    "click": _2,
    "clinic": _2,
    "clinique": _2,
    "clothing": _2,
    "cloud": [1, {
      "convex": _3,
      "elementor": _3,
      "encoway": [0, {
        "eu": _3
      }],
      "statics": _6,
      "ravendb": _3,
      "axarnet": [0, {
        "es-1": _3
      }],
      "diadem": _3,
      "jelastic": [0, {
        "vip": _3
      }],
      "jele": _3,
      "jenv-aruba": [0, {
        "aruba": [0, {
          "eur": [0, {
            "it1": _3
          }]
        }],
        "it1": _3
      }],
      "keliweb": [2, {
        "cs": _3
      }],
      "oxa": [2, {
        "tn": _3,
        "uk": _3
      }],
      "primetel": [2, {
        "uk": _3
      }],
      "reclaim": [0, {
        "ca": _3,
        "uk": _3,
        "us": _3
      }],
      "trendhosting": [0, {
        "ch": _3,
        "de": _3
      }],
      "jote": _3,
      "jotelulu": _3,
      "kuleuven": _3,
      "laravel": _3,
      "linkyard": _3,
      "magentosite": _6,
      "matlab": _3,
      "observablehq": _3,
      "perspecta": _3,
      "vapor": _3,
      "on-rancher": _6,
      "scw": [0, {
        "baremetal": [0, {
          "fr-par-1": _3,
          "fr-par-2": _3,
          "nl-ams-1": _3
        }],
        "fr-par": [0, {
          "cockpit": _3,
          "ddl": _3,
          "dtwh": _3,
          "fnc": [2, {
            "functions": _3
          }],
          "ifr": _3,
          "k8s": _23,
          "kafk": _3,
          "mgdb": _3,
          "rdb": _3,
          "s3": _3,
          "s3-website": _3,
          "scbl": _3,
          "whm": _3
        }],
        "instances": [0, {
          "priv": _3,
          "pub": _3
        }],
        "k8s": _3,
        "nl-ams": [0, {
          "cockpit": _3,
          "ddl": _3,
          "dtwh": _3,
          "ifr": _3,
          "k8s": _23,
          "kafk": _3,
          "mgdb": _3,
          "rdb": _3,
          "s3": _3,
          "s3-website": _3,
          "scbl": _3,
          "whm": _3
        }],
        "pl-waw": [0, {
          "cockpit": _3,
          "ddl": _3,
          "dtwh": _3,
          "ifr": _3,
          "k8s": _23,
          "kafk": _3,
          "mgdb": _3,
          "rdb": _3,
          "s3": _3,
          "s3-website": _3,
          "scbl": _3
        }],
        "scalebook": _3,
        "smartlabeling": _3
      }],
      "servebolt": _3,
      "onstackit": [0, {
        "runs": _3
      }],
      "trafficplex": _3,
      "unison-services": _3,
      "urown": _3,
      "voorloper": _3,
      "zap": _3
    }],
    "club": [1, {
      "cloudns": _3,
      "jele": _3,
      "barsy": _3
    }],
    "clubmed": _2,
    "coach": _2,
    "codes": [1, {
      "owo": _6
    }],
    "coffee": _2,
    "college": _2,
    "cologne": _2,
    "commbank": _2,
    "community": [1, {
      "nog": _3,
      "ravendb": _3,
      "myforum": _3
    }],
    "company": _2,
    "compare": _2,
    "computer": _2,
    "comsec": _2,
    "condos": _2,
    "construction": _2,
    "consulting": _2,
    "contact": _2,
    "contractors": _2,
    "cooking": _2,
    "cool": [1, {
      "elementor": _3,
      "de": _3
    }],
    "corsica": _2,
    "country": _2,
    "coupon": _2,
    "coupons": _2,
    "courses": _2,
    "cpa": _2,
    "credit": _2,
    "creditcard": _2,
    "creditunion": _2,
    "cricket": _2,
    "crown": _2,
    "crs": _2,
    "cruise": _2,
    "cruises": _2,
    "cuisinella": _2,
    "cymru": _2,
    "cyou": _2,
    "dad": _2,
    "dance": _2,
    "data": _2,
    "date": _2,
    "dating": _2,
    "datsun": _2,
    "day": _2,
    "dclk": _2,
    "dds": _2,
    "deal": _2,
    "dealer": _2,
    "deals": _2,
    "degree": _2,
    "delivery": _2,
    "dell": _2,
    "deloitte": _2,
    "delta": _2,
    "democrat": _2,
    "dental": _2,
    "dentist": _2,
    "desi": _2,
    "design": [1, {
      "graphic": _3,
      "bss": _3
    }],
    "dev": [1, {
      "12chars": _3,
      "myaddr": _3,
      "panel": _3,
      "lcl": _6,
      "lclstage": _6,
      "stg": _6,
      "stgstage": _6,
      "pages": _3,
      "r2": _3,
      "workers": _3,
      "deno": _3,
      "deno-staging": _3,
      "deta": _3,
      "lp": [2, {
        "api": _3,
        "objects": _3
      }],
      "evervault": _8,
      "fly": _3,
      "githubpreview": _3,
      "gateway": _6,
      "botdash": _3,
      "inbrowser": _6,
      "is-a-good": _3,
      "iserv": _3,
      "leapcell": _3,
      "runcontainers": _3,
      "localcert": [0, {
        "user": _6
      }],
      "loginline": _3,
      "barsy": _3,
      "mediatech": _3,
      "modx": _3,
      "ngrok": _3,
      "ngrok-free": _3,
      "is-a-fullstack": _3,
      "is-cool": _3,
      "is-not-a": _3,
      "localplayer": _3,
      "xmit": _3,
      "platter-app": _3,
      "replit": [2, {
        "archer": _3,
        "bones": _3,
        "canary": _3,
        "global": _3,
        "hacker": _3,
        "id": _3,
        "janeway": _3,
        "kim": _3,
        "kira": _3,
        "kirk": _3,
        "odo": _3,
        "paris": _3,
        "picard": _3,
        "pike": _3,
        "prerelease": _3,
        "reed": _3,
        "riker": _3,
        "sisko": _3,
        "spock": _3,
        "staging": _3,
        "sulu": _3,
        "tarpit": _3,
        "teams": _3,
        "tucker": _3,
        "wesley": _3,
        "worf": _3
      }],
      "crm": [0, {
        "d": _6,
        "w": _6,
        "wa": _6,
        "wb": _6,
        "wc": _6,
        "wd": _6,
        "we": _6,
        "wf": _6
      }],
      "erp": _50,
      "vercel": _3,
      "webhare": _6,
      "hrsn": _3,
      "is-a": _3
    }],
    "dhl": _2,
    "diamonds": _2,
    "diet": _2,
    "digital": [1, {
      "cloudapps": [2, {
        "london": _3
      }]
    }],
    "direct": [1, {
      "libp2p": _3
    }],
    "directory": _2,
    "discount": _2,
    "discover": _2,
    "dish": _2,
    "diy": _2,
    "dnp": _2,
    "docs": _2,
    "doctor": _2,
    "dog": _2,
    "domains": _2,
    "dot": _2,
    "download": _2,
    "drive": _2,
    "dtv": _2,
    "dubai": _2,
    "dunlop": _2,
    "dupont": _2,
    "durban": _2,
    "dvag": _2,
    "dvr": _2,
    "earth": _2,
    "eat": _2,
    "eco": _2,
    "edeka": _2,
    "education": _21,
    "email": [1, {
      "crisp": [0, {
        "on": _3
      }],
      "tawk": _52,
      "tawkto": _52
    }],
    "emerck": _2,
    "energy": _2,
    "engineer": _2,
    "engineering": _2,
    "enterprises": _2,
    "epson": _2,
    "equipment": _2,
    "ericsson": _2,
    "erni": _2,
    "esq": _2,
    "estate": [1, {
      "compute": _6
    }],
    "eurovision": _2,
    "eus": [1, {
      "party": _53
    }],
    "events": [1, {
      "koobin": _3,
      "co": _3
    }],
    "exchange": _2,
    "expert": _2,
    "exposed": _2,
    "express": _2,
    "extraspace": _2,
    "fage": _2,
    "fail": _2,
    "fairwinds": _2,
    "faith": _2,
    "family": _2,
    "fan": _2,
    "fans": _2,
    "farm": [1, {
      "storj": _3
    }],
    "farmers": _2,
    "fashion": _2,
    "fast": _2,
    "fedex": _2,
    "feedback": _2,
    "ferrari": _2,
    "ferrero": _2,
    "fidelity": _2,
    "fido": _2,
    "film": _2,
    "final": _2,
    "finance": _2,
    "financial": _21,
    "fire": _2,
    "firestone": _2,
    "firmdale": _2,
    "fish": _2,
    "fishing": _2,
    "fit": _2,
    "fitness": _2,
    "flickr": _2,
    "flights": _2,
    "flir": _2,
    "florist": _2,
    "flowers": _2,
    "fly": _2,
    "foo": _2,
    "food": _2,
    "football": _2,
    "ford": _2,
    "forex": _2,
    "forsale": _2,
    "forum": _2,
    "foundation": _2,
    "fox": _2,
    "free": _2,
    "fresenius": _2,
    "frl": _2,
    "frogans": _2,
    "frontier": _2,
    "ftr": _2,
    "fujitsu": _2,
    "fun": _2,
    "fund": _2,
    "furniture": _2,
    "futbol": _2,
    "fyi": _2,
    "gal": _2,
    "gallery": _2,
    "gallo": _2,
    "gallup": _2,
    "game": _2,
    "games": [1, {
      "pley": _3,
      "sheezy": _3
    }],
    "gap": _2,
    "garden": _2,
    "gay": [1, {
      "pages": _3
    }],
    "gbiz": _2,
    "gdn": [1, {
      "cnpy": _3
    }],
    "gea": _2,
    "gent": _2,
    "genting": _2,
    "george": _2,
    "ggee": _2,
    "gift": _2,
    "gifts": _2,
    "gives": _2,
    "giving": _2,
    "glass": _2,
    "gle": _2,
    "global": [1, {
      "appwrite": _3
    }],
    "globo": _2,
    "gmail": _2,
    "gmbh": _2,
    "gmo": _2,
    "gmx": _2,
    "godaddy": _2,
    "gold": _2,
    "goldpoint": _2,
    "golf": _2,
    "goo": _2,
    "goodyear": _2,
    "goog": [1, {
      "cloud": _3,
      "translate": _3,
      "usercontent": _6
    }],
    "google": _2,
    "gop": _2,
    "got": _2,
    "grainger": _2,
    "graphics": _2,
    "gratis": _2,
    "green": _2,
    "gripe": _2,
    "grocery": _2,
    "group": [1, {
      "discourse": _3
    }],
    "gucci": _2,
    "guge": _2,
    "guide": _2,
    "guitars": _2,
    "guru": _2,
    "hair": _2,
    "hamburg": _2,
    "hangout": _2,
    "haus": _2,
    "hbo": _2,
    "hdfc": _2,
    "hdfcbank": _2,
    "health": [1, {
      "hra": _3
    }],
    "healthcare": _2,
    "help": _2,
    "helsinki": _2,
    "here": _2,
    "hermes": _2,
    "hiphop": _2,
    "hisamitsu": _2,
    "hitachi": _2,
    "hiv": _2,
    "hkt": _2,
    "hockey": _2,
    "holdings": _2,
    "holiday": _2,
    "homedepot": _2,
    "homegoods": _2,
    "homes": _2,
    "homesense": _2,
    "honda": _2,
    "horse": _2,
    "hospital": _2,
    "host": [1, {
      "cloudaccess": _3,
      "freesite": _3,
      "easypanel": _3,
      "fastvps": _3,
      "myfast": _3,
      "tempurl": _3,
      "wpmudev": _3,
      "iserv": _3,
      "jele": _3,
      "mircloud": _3,
      "bolt": _3,
      "wp2": _3,
      "half": _3
    }],
    "hosting": [1, {
      "opencraft": _3
    }],
    "hot": _2,
    "hotel": _2,
    "hotels": _2,
    "hotmail": _2,
    "house": _2,
    "how": _2,
    "hsbc": _2,
    "hughes": _2,
    "hyatt": _2,
    "hyundai": _2,
    "ibm": _2,
    "icbc": _2,
    "ice": _2,
    "icu": _2,
    "ieee": _2,
    "ifm": _2,
    "ikano": _2,
    "imamat": _2,
    "imdb": _2,
    "immo": _2,
    "immobilien": _2,
    "inc": _2,
    "industries": _2,
    "infiniti": _2,
    "ing": _2,
    "ink": _2,
    "institute": _2,
    "insurance": _2,
    "insure": _2,
    "international": _2,
    "intuit": _2,
    "investments": _2,
    "ipiranga": _2,
    "irish": _2,
    "ismaili": _2,
    "ist": _2,
    "istanbul": _2,
    "itau": _2,
    "itv": _2,
    "jaguar": _2,
    "java": _2,
    "jcb": _2,
    "jeep": _2,
    "jetzt": _2,
    "jewelry": _2,
    "jio": _2,
    "jll": _2,
    "jmp": _2,
    "jnj": _2,
    "joburg": _2,
    "jot": _2,
    "joy": _2,
    "jpmorgan": _2,
    "jprs": _2,
    "juegos": _2,
    "juniper": _2,
    "kaufen": _2,
    "kddi": _2,
    "kerryhotels": _2,
    "kerryproperties": _2,
    "kfh": _2,
    "kia": _2,
    "kids": _2,
    "kim": _2,
    "kindle": _2,
    "kitchen": _2,
    "kiwi": _2,
    "koeln": _2,
    "komatsu": _2,
    "kosher": _2,
    "kpmg": _2,
    "kpn": _2,
    "krd": [1, {
      "co": _3,
      "edu": _3
    }],
    "kred": _2,
    "kuokgroup": _2,
    "kyoto": _2,
    "lacaixa": _2,
    "lamborghini": _2,
    "lamer": _2,
    "land": _2,
    "landrover": _2,
    "lanxess": _2,
    "lasalle": _2,
    "lat": _2,
    "latino": _2,
    "latrobe": _2,
    "law": _2,
    "lawyer": _2,
    "lds": _2,
    "lease": _2,
    "leclerc": _2,
    "lefrak": _2,
    "legal": _2,
    "lego": _2,
    "lexus": _2,
    "lgbt": _2,
    "lidl": _2,
    "life": _2,
    "lifeinsurance": _2,
    "lifestyle": _2,
    "lighting": _2,
    "like": _2,
    "lilly": _2,
    "limited": _2,
    "limo": _2,
    "lincoln": _2,
    "link": [1, {
      "myfritz": _3,
      "cyon": _3,
      "dweb": _6,
      "inbrowser": _6,
      "nftstorage": _60,
      "mypep": _3,
      "storacha": _60,
      "w3s": _60
    }],
    "live": [1, {
      "aem": _3,
      "hlx": _3,
      "ewp": _6
    }],
    "living": _2,
    "llc": _2,
    "llp": _2,
    "loan": _2,
    "loans": _2,
    "locker": _2,
    "locus": _2,
    "lol": [1, {
      "omg": _3
    }],
    "london": _2,
    "lotte": _2,
    "lotto": _2,
    "love": _2,
    "lpl": _2,
    "lplfinancial": _2,
    "ltd": _2,
    "ltda": _2,
    "lundbeck": _2,
    "luxe": _2,
    "luxury": _2,
    "madrid": _2,
    "maif": _2,
    "maison": _2,
    "makeup": _2,
    "man": _2,
    "management": _2,
    "mango": _2,
    "map": _2,
    "market": _2,
    "marketing": _2,
    "markets": _2,
    "marriott": _2,
    "marshalls": _2,
    "mattel": _2,
    "mba": _2,
    "mckinsey": _2,
    "med": _2,
    "media": _61,
    "meet": _2,
    "melbourne": _2,
    "meme": _2,
    "memorial": _2,
    "men": _2,
    "menu": [1, {
      "barsy": _3,
      "barsyonline": _3
    }],
    "merck": _2,
    "merckmsd": _2,
    "miami": _2,
    "microsoft": _2,
    "mini": _2,
    "mint": _2,
    "mit": _2,
    "mitsubishi": _2,
    "mlb": _2,
    "mls": _2,
    "mma": _2,
    "mobile": _2,
    "moda": _2,
    "moe": _2,
    "moi": _2,
    "mom": _2,
    "monash": _2,
    "money": _2,
    "monster": _2,
    "mormon": _2,
    "mortgage": _2,
    "moscow": _2,
    "moto": _2,
    "motorcycles": _2,
    "mov": _2,
    "movie": _2,
    "msd": _2,
    "mtn": _2,
    "mtr": _2,
    "music": _2,
    "nab": _2,
    "nagoya": _2,
    "navy": _2,
    "nba": _2,
    "nec": _2,
    "netbank": _2,
    "netflix": _2,
    "network": [1, {
      "aem": _3,
      "alces": _6,
      "co": _3,
      "arvo": _3,
      "azimuth": _3,
      "tlon": _3
    }],
    "neustar": _2,
    "new": _2,
    "news": [1, {
      "noticeable": _3
    }],
    "next": _2,
    "nextdirect": _2,
    "nexus": _2,
    "nfl": _2,
    "ngo": _2,
    "nhk": _2,
    "nico": _2,
    "nike": _2,
    "nikon": _2,
    "ninja": _2,
    "nissan": _2,
    "nissay": _2,
    "nokia": _2,
    "norton": _2,
    "now": _2,
    "nowruz": _2,
    "nowtv": _2,
    "nra": _2,
    "nrw": _2,
    "ntt": _2,
    "nyc": _2,
    "obi": _2,
    "observer": _2,
    "office": _2,
    "okinawa": _2,
    "olayan": _2,
    "olayangroup": _2,
    "ollo": _2,
    "omega": _2,
    "one": [1, {
      "kin": _6,
      "service": _3
    }],
    "ong": [1, {
      "obl": _3
    }],
    "onl": _2,
    "online": [1, {
      "eero": _3,
      "eero-stage": _3,
      "websitebuilder": _3,
      "leapcell": _3,
      "barsy": _3
    }],
    "ooo": _2,
    "open": _2,
    "oracle": _2,
    "orange": [1, {
      "tech": _3
    }],
    "organic": _2,
    "origins": _2,
    "osaka": _2,
    "otsuka": _2,
    "ott": _2,
    "ovh": [1, {
      "nerdpol": _3
    }],
    "page": [1, {
      "aem": _3,
      "hlx": _3,
      "translated": _3,
      "codeberg": _3,
      "heyflow": _3,
      "prvcy": _3,
      "rocky": _3,
      "pdns": _3,
      "plesk": _3
    }],
    "panasonic": _2,
    "paris": _2,
    "pars": _2,
    "partners": _2,
    "parts": _2,
    "party": _2,
    "pay": _2,
    "pccw": _2,
    "pet": _2,
    "pfizer": _2,
    "pharmacy": _2,
    "phd": _2,
    "philips": _2,
    "phone": _2,
    "photo": _2,
    "photography": _2,
    "photos": _61,
    "physio": _2,
    "pics": _2,
    "pictet": _2,
    "pictures": [1, {
      "1337": _3
    }],
    "pid": _2,
    "pin": _2,
    "ping": _2,
    "pink": _2,
    "pioneer": _2,
    "pizza": [1, {
      "ngrok": _3
    }],
    "place": _21,
    "play": _2,
    "playstation": _2,
    "plumbing": _2,
    "plus": _2,
    "pnc": _2,
    "pohl": _2,
    "poker": _2,
    "politie": _2,
    "porn": _2,
    "praxi": _2,
    "press": _2,
    "prime": _2,
    "prod": _2,
    "productions": _2,
    "prof": _2,
    "progressive": _2,
    "promo": _2,
    "properties": _2,
    "property": _2,
    "protection": _2,
    "pru": _2,
    "prudential": _2,
    "pub": [1, {
      "id": _6,
      "kin": _6,
      "barsy": _3
    }],
    "pwc": _2,
    "qpon": _2,
    "quebec": _2,
    "quest": _2,
    "racing": _2,
    "radio": _2,
    "read": _2,
    "realestate": _2,
    "realtor": _2,
    "realty": _2,
    "recipes": _2,
    "red": _2,
    "redumbrella": _2,
    "rehab": _2,
    "reise": _2,
    "reisen": _2,
    "reit": _2,
    "reliance": _2,
    "ren": _2,
    "rent": _2,
    "rentals": _2,
    "repair": _2,
    "report": _2,
    "republican": _2,
    "rest": _2,
    "restaurant": _2,
    "review": _2,
    "reviews": [1, {
      "aem": _3
    }],
    "rexroth": _2,
    "rich": _2,
    "richardli": _2,
    "ricoh": _2,
    "ril": _2,
    "rio": _2,
    "rip": [1, {
      "clan": _3
    }],
    "rocks": [1, {
      "myddns": _3,
      "stackit": _3,
      "lima-city": _3,
      "webspace": _3
    }],
    "rodeo": _2,
    "rogers": _2,
    "room": _2,
    "rsvp": _2,
    "rugby": _2,
    "ruhr": _2,
    "run": [1, {
      "appwrite": _6,
      "canva": _3,
      "development": _3,
      "ravendb": _3,
      "liara": [2, {
        "iran": _3
      }],
      "lovable": _3,
      "build": _6,
      "code": _6,
      "database": _6,
      "migration": _6,
      "onporter": _3,
      "repl": _3,
      "stackit": _3,
      "val": _50,
      "vercel": _3,
      "wix": _3
    }],
    "rwe": _2,
    "ryukyu": _2,
    "saarland": _2,
    "safe": _2,
    "safety": _2,
    "sakura": _2,
    "sale": _2,
    "salon": _2,
    "samsclub": _2,
    "samsung": _2,
    "sandvik": _2,
    "sandvikcoromant": _2,
    "sanofi": _2,
    "sap": _2,
    "sarl": _2,
    "sas": _2,
    "save": _2,
    "saxo": _2,
    "sbi": _2,
    "sbs": _2,
    "scb": _2,
    "schaeffler": _2,
    "schmidt": _2,
    "scholarships": _2,
    "school": _2,
    "schule": _2,
    "schwarz": _2,
    "science": _2,
    "scot": [1, {
      "gov": [2, {
        "service": _3
      }]
    }],
    "search": _2,
    "seat": _2,
    "secure": _2,
    "security": _2,
    "seek": _2,
    "select": _2,
    "sener": _2,
    "services": [1, {
      "loginline": _3
    }],
    "seven": _2,
    "sew": _2,
    "sex": _2,
    "sexy": _2,
    "sfr": _2,
    "shangrila": _2,
    "sharp": _2,
    "shell": _2,
    "shia": _2,
    "shiksha": _2,
    "shoes": _2,
    "shop": [1, {
      "base": _3,
      "hoplix": _3,
      "barsy": _3,
      "barsyonline": _3,
      "shopware": _3
    }],
    "shopping": _2,
    "shouji": _2,
    "show": _2,
    "silk": _2,
    "sina": _2,
    "singles": _2,
    "site": [1, {
      "square": _3,
      "canva": _24,
      "cloudera": _6,
      "convex": _3,
      "cyon": _3,
      "caffeine": _3,
      "fastvps": _3,
      "figma": _3,
      "preview": _3,
      "heyflow": _3,
      "jele": _3,
      "jouwweb": _3,
      "loginline": _3,
      "barsy": _3,
      "notion": _3,
      "omniwe": _3,
      "opensocial": _3,
      "madethis": _3,
      "support": _3,
      "platformsh": _6,
      "tst": _6,
      "byen": _3,
      "srht": _3,
      "novecore": _3,
      "cpanel": _3,
      "wpsquared": _3,
      "sourcecraft": _3
    }],
    "ski": _2,
    "skin": _2,
    "sky": _2,
    "skype": _2,
    "sling": _2,
    "smart": _2,
    "smile": _2,
    "sncf": _2,
    "soccer": _2,
    "social": _2,
    "softbank": _2,
    "software": _2,
    "sohu": _2,
    "solar": _2,
    "solutions": _2,
    "song": _2,
    "sony": _2,
    "soy": _2,
    "spa": _2,
    "space": [1, {
      "myfast": _3,
      "heiyu": _3,
      "hf": [2, {
        "static": _3
      }],
      "app-ionos": _3,
      "project": _3,
      "uber": _3,
      "xs4all": _3
    }],
    "sport": _2,
    "spot": _2,
    "srl": _2,
    "stada": _2,
    "staples": _2,
    "star": _2,
    "statebank": _2,
    "statefarm": _2,
    "stc": _2,
    "stcgroup": _2,
    "stockholm": _2,
    "storage": _2,
    "store": [1, {
      "barsy": _3,
      "sellfy": _3,
      "shopware": _3,
      "storebase": _3
    }],
    "stream": _2,
    "studio": _2,
    "study": _2,
    "style": _2,
    "sucks": _2,
    "supplies": _2,
    "supply": _2,
    "support": [1, {
      "barsy": _3
    }],
    "surf": _2,
    "surgery": _2,
    "suzuki": _2,
    "swatch": _2,
    "swiss": _2,
    "sydney": _2,
    "systems": [1, {
      "knightpoint": _3
    }],
    "tab": _2,
    "taipei": _2,
    "talk": _2,
    "taobao": _2,
    "target": _2,
    "tatamotors": _2,
    "tatar": _2,
    "tattoo": _2,
    "tax": _2,
    "taxi": _2,
    "tci": _2,
    "tdk": _2,
    "team": [1, {
      "discourse": _3,
      "jelastic": _3
    }],
    "tech": [1, {
      "cleverapps": _3
    }],
    "technology": _21,
    "temasek": _2,
    "tennis": _2,
    "teva": _2,
    "thd": _2,
    "theater": _2,
    "theatre": _2,
    "tiaa": _2,
    "tickets": _2,
    "tienda": _2,
    "tips": _2,
    "tires": _2,
    "tirol": _2,
    "tjmaxx": _2,
    "tjx": _2,
    "tkmaxx": _2,
    "tmall": _2,
    "today": [1, {
      "prequalifyme": _3
    }],
    "tokyo": _2,
    "tools": [1, {
      "addr": _49,
      "myaddr": _3
    }],
    "top": [1, {
      "ntdll": _3,
      "wadl": _6
    }],
    "toray": _2,
    "toshiba": _2,
    "total": _2,
    "tours": _2,
    "town": _2,
    "toyota": _2,
    "toys": _2,
    "trade": _2,
    "trading": _2,
    "training": _2,
    "travel": _2,
    "travelers": _2,
    "travelersinsurance": _2,
    "trust": _2,
    "trv": _2,
    "tube": _2,
    "tui": _2,
    "tunes": _2,
    "tushu": _2,
    "tvs": _2,
    "ubank": _2,
    "ubs": _2,
    "unicom": _2,
    "university": _2,
    "uno": _2,
    "uol": _2,
    "ups": _2,
    "vacations": _2,
    "vana": _2,
    "vanguard": _2,
    "vegas": _2,
    "ventures": _2,
    "verisign": _2,
    "versicherung": _2,
    "vet": _2,
    "viajes": _2,
    "video": _2,
    "vig": _2,
    "viking": _2,
    "villas": _2,
    "vin": _2,
    "vip": [1, {
      "hidns": _3
    }],
    "virgin": _2,
    "visa": _2,
    "vision": _2,
    "viva": _2,
    "vivo": _2,
    "vlaanderen": _2,
    "vodka": _2,
    "volvo": _2,
    "vote": _2,
    "voting": _2,
    "voto": _2,
    "voyage": _2,
    "wales": _2,
    "walmart": _2,
    "walter": _2,
    "wang": _2,
    "wanggou": _2,
    "watch": _2,
    "watches": _2,
    "weather": _2,
    "weatherchannel": _2,
    "webcam": _2,
    "weber": _2,
    "website": _61,
    "wed": _2,
    "wedding": _2,
    "weibo": _2,
    "weir": _2,
    "whoswho": _2,
    "wien": _2,
    "wiki": _61,
    "williamhill": _2,
    "win": _2,
    "windows": _2,
    "wine": _2,
    "winners": _2,
    "wme": _2,
    "wolterskluwer": _2,
    "woodside": _2,
    "work": _2,
    "works": _2,
    "world": _2,
    "wow": _2,
    "wtc": _2,
    "wtf": _2,
    "xbox": _2,
    "xerox": _2,
    "xihuan": _2,
    "xin": _2,
    "xn--11b4c3d": _2,
    "\u0915\u0949\u092E": _2,
    "xn--1ck2e1b": _2,
    "\u30BB\u30FC\u30EB": _2,
    "xn--1qqw23a": _2,
    "\u4F5B\u5C71": _2,
    "xn--30rr7y": _2,
    "\u6148\u5584": _2,
    "xn--3bst00m": _2,
    "\u96C6\u56E2": _2,
    "xn--3ds443g": _2,
    "\u5728\u7EBF": _2,
    "xn--3pxu8k": _2,
    "\u70B9\u770B": _2,
    "xn--42c2d9a": _2,
    "\u0E04\u0E2D\u0E21": _2,
    "xn--45q11c": _2,
    "\u516B\u5366": _2,
    "xn--4gbrim": _2,
    "\u0645\u0648\u0642\u0639": _2,
    "xn--55qw42g": _2,
    "\u516C\u76CA": _2,
    "xn--55qx5d": _2,
    "\u516C\u53F8": _2,
    "xn--5su34j936bgsg": _2,
    "\u9999\u683C\u91CC\u62C9": _2,
    "xn--5tzm5g": _2,
    "\u7F51\u7AD9": _2,
    "xn--6frz82g": _2,
    "\u79FB\u52A8": _2,
    "xn--6qq986b3xl": _2,
    "\u6211\u7231\u4F60": _2,
    "xn--80adxhks": _2,
    "\u043C\u043E\u0441\u043A\u0432\u0430": _2,
    "xn--80aqecdr1a": _2,
    "\u043A\u0430\u0442\u043E\u043B\u0438\u043A": _2,
    "xn--80asehdb": _2,
    "\u043E\u043D\u043B\u0430\u0439\u043D": _2,
    "xn--80aswg": _2,
    "\u0441\u0430\u0439\u0442": _2,
    "xn--8y0a063a": _2,
    "\u8054\u901A": _2,
    "xn--9dbq2a": _2,
    "\u05E7\u05D5\u05DD": _2,
    "xn--9et52u": _2,
    "\u65F6\u5C1A": _2,
    "xn--9krt00a": _2,
    "\u5FAE\u535A": _2,
    "xn--b4w605ferd": _2,
    "\u6DE1\u9A6C\u9521": _2,
    "xn--bck1b9a5dre4c": _2,
    "\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3": _2,
    "xn--c1avg": _2,
    "\u043E\u0440\u0433": _2,
    "xn--c2br7g": _2,
    "\u0928\u0947\u091F": _2,
    "xn--cck2b3b": _2,
    "\u30B9\u30C8\u30A2": _2,
    "xn--cckwcxetd": _2,
    "\u30A2\u30DE\u30BE\u30F3": _2,
    "xn--cg4bki": _2,
    "\uC0BC\uC131": _2,
    "xn--czr694b": _2,
    "\u5546\u6807": _2,
    "xn--czrs0t": _2,
    "\u5546\u5E97": _2,
    "xn--czru2d": _2,
    "\u5546\u57CE": _2,
    "xn--d1acj3b": _2,
    "\u0434\u0435\u0442\u0438": _2,
    "xn--eckvdtc9d": _2,
    "\u30DD\u30A4\u30F3\u30C8": _2,
    "xn--efvy88h": _2,
    "\u65B0\u95FB": _2,
    "xn--fct429k": _2,
    "\u5BB6\u96FB": _2,
    "xn--fhbei": _2,
    "\u0643\u0648\u0645": _2,
    "xn--fiq228c5hs": _2,
    "\u4E2D\u6587\u7F51": _2,
    "xn--fiq64b": _2,
    "\u4E2D\u4FE1": _2,
    "xn--fjq720a": _2,
    "\u5A31\u4E50": _2,
    "xn--flw351e": _2,
    "\u8C37\u6B4C": _2,
    "xn--fzys8d69uvgm": _2,
    "\u96FB\u8A0A\u76C8\u79D1": _2,
    "xn--g2xx48c": _2,
    "\u8D2D\u7269": _2,
    "xn--gckr3f0f": _2,
    "\u30AF\u30E9\u30A6\u30C9": _2,
    "xn--gk3at1e": _2,
    "\u901A\u8CA9": _2,
    "xn--hxt814e": _2,
    "\u7F51\u5E97": _2,
    "xn--i1b6b1a6a2e": _2,
    "\u0938\u0902\u0917\u0920\u0928": _2,
    "xn--imr513n": _2,
    "\u9910\u5385": _2,
    "xn--io0a7i": _2,
    "\u7F51\u7EDC": _2,
    "xn--j1aef": _2,
    "\u043A\u043E\u043C": _2,
    "xn--jlq480n2rg": _2,
    "\u4E9A\u9A6C\u900A": _2,
    "xn--jvr189m": _2,
    "\u98DF\u54C1": _2,
    "xn--kcrx77d1x4a": _2,
    "\u98DE\u5229\u6D66": _2,
    "xn--kput3i": _2,
    "\u624B\u673A": _2,
    "xn--mgba3a3ejt": _2,
    "\u0627\u0631\u0627\u0645\u0643\u0648": _2,
    "xn--mgba7c0bbn0a": _2,
    "\u0627\u0644\u0639\u0644\u064A\u0627\u0646": _2,
    "xn--mgbab2bd": _2,
    "\u0628\u0627\u0632\u0627\u0631": _2,
    "xn--mgbca7dzdo": _2,
    "\u0627\u0628\u0648\u0638\u0628\u064A": _2,
    "xn--mgbi4ecexp": _2,
    "\u0643\u0627\u062B\u0648\u0644\u064A\u0643": _2,
    "xn--mgbt3dhd": _2,
    "\u0647\u0645\u0631\u0627\u0647": _2,
    "xn--mk1bu44c": _2,
    "\uB2F7\uCEF4": _2,
    "xn--mxtq1m": _2,
    "\u653F\u5E9C": _2,
    "xn--ngbc5azd": _2,
    "\u0634\u0628\u0643\u0629": _2,
    "xn--ngbe9e0a": _2,
    "\u0628\u064A\u062A\u0643": _2,
    "xn--ngbrx": _2,
    "\u0639\u0631\u0628": _2,
    "xn--nqv7f": _2,
    "\u673A\u6784": _2,
    "xn--nqv7fs00ema": _2,
    "\u7EC4\u7EC7\u673A\u6784": _2,
    "xn--nyqy26a": _2,
    "\u5065\u5EB7": _2,
    "xn--otu796d": _2,
    "\u62DB\u8058": _2,
    "xn--p1acf": [1, {
      "xn--90amc": _3,
      "xn--j1aef": _3,
      "xn--j1ael8b": _3,
      "xn--h1ahn": _3,
      "xn--j1adp": _3,
      "xn--c1avg": _3,
      "xn--80aaa0cvac": _3,
      "xn--h1aliz": _3,
      "xn--90a1af": _3,
      "xn--41a": _3
    }],
    "\u0440\u0443\u0441": [1, {
      "\u0431\u0438\u0437": _3,
      "\u043A\u043E\u043C": _3,
      "\u043A\u0440\u044B\u043C": _3,
      "\u043C\u0438\u0440": _3,
      "\u043C\u0441\u043A": _3,
      "\u043E\u0440\u0433": _3,
      "\u0441\u0430\u043C\u0430\u0440\u0430": _3,
      "\u0441\u043E\u0447\u0438": _3,
      "\u0441\u043F\u0431": _3,
      "\u044F": _3
    }],
    "xn--pssy2u": _2,
    "\u5927\u62FF": _2,
    "xn--q9jyb4c": _2,
    "\u307F\u3093\u306A": _2,
    "xn--qcka1pmc": _2,
    "\u30B0\u30FC\u30B0\u30EB": _2,
    "xn--rhqv96g": _2,
    "\u4E16\u754C": _2,
    "xn--rovu88b": _2,
    "\u66F8\u7C4D": _2,
    "xn--ses554g": _2,
    "\u7F51\u5740": _2,
    "xn--t60b56a": _2,
    "\uB2F7\uB137": _2,
    "xn--tckwe": _2,
    "\u30B3\u30E0": _2,
    "xn--tiq49xqyj": _2,
    "\u5929\u4E3B\u6559": _2,
    "xn--unup4y": _2,
    "\u6E38\u620F": _2,
    "xn--vermgensberater-ctb": _2,
    "verm\xF6gensberater": _2,
    "xn--vermgensberatung-pwb": _2,
    "verm\xF6gensberatung": _2,
    "xn--vhquv": _2,
    "\u4F01\u4E1A": _2,
    "xn--vuq861b": _2,
    "\u4FE1\u606F": _2,
    "xn--w4r85el8fhu5dnra": _2,
    "\u5609\u91CC\u5927\u9152\u5E97": _2,
    "xn--w4rs40l": _2,
    "\u5609\u91CC": _2,
    "xn--xhq521b": _2,
    "\u5E7F\u4E1C": _2,
    "xn--zfr164b": _2,
    "\u653F\u52A1": _2,
    "xyz": [1, {
      "botdash": _3,
      "telebit": _6
    }],
    "yachts": _2,
    "yahoo": _2,
    "yamaxun": _2,
    "yandex": _2,
    "yodobashi": _2,
    "yoga": _2,
    "yokohama": _2,
    "you": _2,
    "youtube": _2,
    "yun": _2,
    "zappos": _2,
    "zara": _2,
    "zero": _2,
    "zip": _2,
    "zone": [1, {
      "triton": _6,
      "stackit": _3,
      "lima": _3
    }],
    "zuerich": _2
  }];
  return rules2;
}();

// node_modules/tldts/dist/es6/src/suffix-trie.js
function lookupInTrie(parts, trie, index, allowedMask) {
  let result = null;
  let node = trie;
  while (node !== void 0) {
    if ((node[0] & allowedMask) !== 0) {
      result = {
        index: index + 1,
        isIcann: node[0] === 1,
        isPrivate: node[0] === 2
        /* RULE_TYPE.PRIVATE */
      };
    }
    if (index === -1) {
      break;
    }
    const succ = node[1];
    node = Object.prototype.hasOwnProperty.call(succ, parts[index]) ? succ[parts[index]] : succ["*"];
    index -= 1;
  }
  return result;
}
function suffixLookup(hostname, options, out) {
  var _a2;
  if (fast_path_default(hostname, options, out)) {
    return;
  }
  const hostnameParts = hostname.split(".");
  const allowedMask = (options.allowPrivateDomains ? 2 : 0) | (options.allowIcannDomains ? 1 : 0);
  const exceptionMatch = lookupInTrie(hostnameParts, exceptions, hostnameParts.length - 1, allowedMask);
  if (exceptionMatch !== null) {
    out.isIcann = exceptionMatch.isIcann;
    out.isPrivate = exceptionMatch.isPrivate;
    out.publicSuffix = hostnameParts.slice(exceptionMatch.index + 1).join(".");
    return;
  }
  const rulesMatch = lookupInTrie(hostnameParts, rules, hostnameParts.length - 1, allowedMask);
  if (rulesMatch !== null) {
    out.isIcann = rulesMatch.isIcann;
    out.isPrivate = rulesMatch.isPrivate;
    out.publicSuffix = hostnameParts.slice(rulesMatch.index).join(".");
    return;
  }
  out.isIcann = false;
  out.isPrivate = false;
  out.publicSuffix = (_a2 = hostnameParts[hostnameParts.length - 1]) !== null && _a2 !== void 0 ? _a2 : null;
}

// node_modules/tldts/dist/es6/index.js
var RESULT = getEmptyResult();
function getDomain2(url, options = {}) {
  resetResult(RESULT);
  return parseImpl(url, 3, suffixLookup, options, RESULT).domain;
}

// node_modules/msw/node_modules/tough-cookie/dist/index.js
function pathMatch(reqPath, cookiePath) {
  if (cookiePath === reqPath) {
    return true;
  }
  const idx = reqPath.indexOf(cookiePath);
  if (idx === 0) {
    if (cookiePath[cookiePath.length - 1] === "/") {
      return true;
    }
    if (reqPath.startsWith(cookiePath) && reqPath[cookiePath.length] === "/") {
      return true;
    }
  }
  return false;
}
var SPECIAL_USE_DOMAINS = ["local", "example", "invalid", "localhost", "test"];
var SPECIAL_TREATMENT_DOMAINS = ["localhost", "invalid"];
var defaultGetPublicSuffixOptions = {
  allowSpecialUseDomain: false,
  ignoreError: false
};
function getPublicSuffix(domain, options = {}) {
  options = __spreadValues(__spreadValues({}, defaultGetPublicSuffixOptions), options);
  const domainParts = domain.split(".");
  const topLevelDomain = domainParts[domainParts.length - 1];
  const allowSpecialUseDomain = !!options.allowSpecialUseDomain;
  const ignoreError = !!options.ignoreError;
  if (allowSpecialUseDomain && topLevelDomain !== void 0 && SPECIAL_USE_DOMAINS.includes(topLevelDomain)) {
    if (domainParts.length > 1) {
      const secondLevelDomain = domainParts[domainParts.length - 2];
      return `${secondLevelDomain}.${topLevelDomain}`;
    } else if (SPECIAL_TREATMENT_DOMAINS.includes(topLevelDomain)) {
      return topLevelDomain;
    }
  }
  if (!ignoreError && topLevelDomain !== void 0 && SPECIAL_USE_DOMAINS.includes(topLevelDomain)) {
    throw new Error(`Cookie has domain set to the public suffix "${topLevelDomain}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`);
  }
  const publicSuffix = getDomain2(domain, {
    allowIcannDomains: true,
    allowPrivateDomains: true
  });
  if (publicSuffix) return publicSuffix;
}
function permuteDomain(domain, allowSpecialUseDomain) {
  const pubSuf = getPublicSuffix(domain, {
    allowSpecialUseDomain
  });
  if (!pubSuf) {
    return void 0;
  }
  if (pubSuf == domain) {
    return [domain];
  }
  if (domain.slice(-1) == ".") {
    domain = domain.slice(0, -1);
  }
  const prefix = domain.slice(0, -(pubSuf.length + 1));
  const parts = prefix.split(".").reverse();
  let cur = pubSuf;
  const permutations = [cur];
  while (parts.length) {
    const part = parts.shift();
    cur = `${part}.${cur}`;
    permutations.push(cur);
  }
  return permutations;
}
var Store = class {
  constructor() {
    this.synchronous = false;
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookie(_domain, _path, _key, _callback) {
    throw new Error("findCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookies(_domain, _path, _allowSpecialUseDomain = false, _callback) {
    throw new Error("findCookies is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  putCookie(_cookie, _callback) {
    throw new Error("putCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  updateCookie(_oldCookie, _newCookie, _callback) {
    throw new Error("updateCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookie(_domain, _path, _key, _callback) {
    throw new Error("removeCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookies(_domain, _path, _callback) {
    throw new Error("removeCookies is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeAllCookies(_callback) {
    throw new Error("removeAllCookies is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  getAllCookies(_callback) {
    throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
  }
};
var objectToString = (obj) => Object.prototype.toString.call(obj);
var safeArrayToString = (arr, seenArrays) => {
  if (typeof arr.join !== "function") return objectToString(arr);
  seenArrays.add(arr);
  const mapped = arr.map((val) => val === null || val === void 0 || seenArrays.has(val) ? "" : safeToStringImpl(val, seenArrays));
  return mapped.join();
};
var safeToStringImpl = (val, seenArrays = /* @__PURE__ */ new WeakSet()) => {
  if (typeof val !== "object" || val === null) {
    return String(val);
  } else if (typeof val.toString === "function") {
    return Array.isArray(val) ? (
      // Arrays have a weird custom toString that we need to replicate
      safeArrayToString(val, seenArrays)
    ) : (
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      String(val)
    );
  } else {
    return objectToString(val);
  }
};
var safeToString = (val) => safeToStringImpl(val);
function createPromiseCallback(cb) {
  let callback;
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  if (typeof cb === "function") {
    callback = (err, result) => {
      try {
        if (err) cb(err);
        else cb(null, result);
      } catch (e) {
        reject(e instanceof Error ? e : new Error());
      }
    };
  } else {
    callback = (err, result) => {
      try {
        if (err) reject(err);
        else resolve(result);
      } catch (e) {
        reject(e instanceof Error ? e : new Error());
      }
    };
  }
  return {
    promise,
    callback,
    resolve: (value) => {
      callback(null, value);
      return promise;
    },
    reject: (error4) => {
      callback(error4);
      return promise;
    }
  };
}
function inOperator(k, o) {
  return k in o;
}
var MemoryCookieStore = class extends Store {
  /**
   * Create a new {@link MemoryCookieStore}.
   */
  constructor() {
    super();
    this.synchronous = true;
    this.idx = /* @__PURE__ */ Object.create(null);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookie(domain, path, key, callback) {
    const promiseCallback = createPromiseCallback(callback);
    if (domain == null || path == null || key == null) {
      return promiseCallback.resolve(void 0);
    }
    const result = this.idx[domain]?.[path]?.[key];
    return promiseCallback.resolve(result);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookies(domain, path, allowSpecialUseDomain = false, callback) {
    if (typeof allowSpecialUseDomain === "function") {
      callback = allowSpecialUseDomain;
      allowSpecialUseDomain = true;
    }
    const results = [];
    const promiseCallback = createPromiseCallback(callback);
    if (!domain) {
      return promiseCallback.resolve([]);
    }
    let pathMatcher;
    if (!path) {
      pathMatcher = function matchAll(domainIndex) {
        for (const curPath in domainIndex) {
          const pathIndex = domainIndex[curPath];
          for (const key in pathIndex) {
            const value = pathIndex[key];
            if (value) {
              results.push(value);
            }
          }
        }
      };
    } else {
      pathMatcher = function matchRFC(domainIndex) {
        for (const cookiePath in domainIndex) {
          if (pathMatch(path, cookiePath)) {
            const pathIndex = domainIndex[cookiePath];
            for (const key in pathIndex) {
              const value = pathIndex[key];
              if (value) {
                results.push(value);
              }
            }
          }
        }
      };
    }
    const domains = permuteDomain(domain, allowSpecialUseDomain) || [domain];
    const idx = this.idx;
    domains.forEach((curDomain) => {
      const domainIndex = idx[curDomain];
      if (!domainIndex) {
        return;
      }
      pathMatcher(domainIndex);
    });
    return promiseCallback.resolve(results);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  putCookie(cookie2, callback) {
    const promiseCallback = createPromiseCallback(callback);
    const {
      domain,
      path,
      key
    } = cookie2;
    if (domain == null || path == null || key == null) {
      return promiseCallback.resolve(void 0);
    }
    const domainEntry = this.idx[domain] ?? /* @__PURE__ */ Object.create(null);
    this.idx[domain] = domainEntry;
    const pathEntry = domainEntry[path] ?? /* @__PURE__ */ Object.create(null);
    domainEntry[path] = pathEntry;
    pathEntry[key] = cookie2;
    return promiseCallback.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  updateCookie(_oldCookie, newCookie, callback) {
    if (callback) this.putCookie(newCookie, callback);
    else return this.putCookie(newCookie);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookie(domain, path, key, callback) {
    const promiseCallback = createPromiseCallback(callback);
    delete this.idx[domain]?.[path]?.[key];
    return promiseCallback.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookies(domain, path, callback) {
    const promiseCallback = createPromiseCallback(callback);
    const domainEntry = this.idx[domain];
    if (domainEntry) {
      if (path) {
        delete domainEntry[path];
      } else {
        delete this.idx[domain];
      }
    }
    return promiseCallback.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeAllCookies(callback) {
    const promiseCallback = createPromiseCallback(callback);
    this.idx = /* @__PURE__ */ Object.create(null);
    return promiseCallback.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  getAllCookies(callback) {
    const promiseCallback = createPromiseCallback(callback);
    const cookies = [];
    const idx = this.idx;
    const domains = Object.keys(idx);
    domains.forEach((domain) => {
      const domainEntry = idx[domain] ?? {};
      const paths = Object.keys(domainEntry);
      paths.forEach((path) => {
        const pathEntry = domainEntry[path] ?? {};
        const keys = Object.keys(pathEntry);
        keys.forEach((key) => {
          const keyEntry = pathEntry[key];
          if (keyEntry != null) {
            cookies.push(keyEntry);
          }
        });
      });
    });
    cookies.sort((a, b) => {
      return (a.creationIndex || 0) - (b.creationIndex || 0);
    });
    return promiseCallback.resolve(cookies);
  }
};
function isNonEmptyString(data) {
  return isString(data) && data !== "";
}
function isEmptyString(data) {
  return data === "" || data instanceof String && data.toString() === "";
}
function isString(data) {
  return typeof data === "string" || data instanceof String;
}
function isObject2(data) {
  return objectToString(data) === "[object Object]";
}
function validate(bool, cbOrMessage, message4) {
  if (bool) return;
  const cb = typeof cbOrMessage === "function" ? cbOrMessage : void 0;
  let options = typeof cbOrMessage === "function" ? message4 : cbOrMessage;
  if (!isObject2(options)) options = "[object Object]";
  const err = new ParameterError(safeToString(options));
  if (cb) cb(err);
  else throw err;
}
var ParameterError = class extends Error {
};
var version = "6.0.0";
var PrefixSecurityEnum = {
  SILENT: "silent",
  STRICT: "strict",
  DISABLED: "unsafe-disabled"
};
Object.freeze(PrefixSecurityEnum);
var IP_V6_REGEX = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
var IP_V6_REGEX_OBJECT = new RegExp(`^${IP_V6_REGEX}$`);
var IP_V4_REGEX = `(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])`;
var IP_V4_REGEX_OBJECT = new RegExp(`^${IP_V4_REGEX}$`);
function domainToASCII(domain) {
  return new URL(`http://${domain}`).hostname;
}
function canonicalDomain(domainName) {
  if (domainName == null) {
    return void 0;
  }
  let str = domainName.trim().replace(/^\./, "");
  if (IP_V6_REGEX_OBJECT.test(str)) {
    if (!str.startsWith("[")) {
      str = "[" + str;
    }
    if (!str.endsWith("]")) {
      str = str + "]";
    }
    return domainToASCII(str).slice(1, -1);
  }
  if (/[^\u0001-\u007f]/.test(str)) {
    return domainToASCII(str);
  }
  return str.toLowerCase();
}
function formatDate(date) {
  return date.toUTCString();
}
var DATE_DELIM = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/;
var MONTH_TO_NUM = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11
};
function parseDigits(token, minDigits, maxDigits, trailingOK) {
  let count = 0;
  while (count < token.length) {
    const c = token.charCodeAt(count);
    if (c <= 47 || c >= 58) {
      break;
    }
    count++;
  }
  if (count < minDigits || count > maxDigits) {
    return;
  }
  if (!trailingOK && count != token.length) {
    return;
  }
  return parseInt(token.slice(0, count), 10);
}
function parseTime(token) {
  const parts = token.split(":");
  const result = [0, 0, 0];
  if (parts.length !== 3) {
    return;
  }
  for (let i = 0; i < 3; i++) {
    const trailingOK = i == 2;
    const numPart = parts[i];
    if (numPart === void 0) {
      return;
    }
    const num = parseDigits(numPart, 1, 2, trailingOK);
    if (num === void 0) {
      return;
    }
    result[i] = num;
  }
  return result;
}
function parseMonth(token) {
  token = String(token).slice(0, 3).toLowerCase();
  switch (token) {
    case "jan":
      return MONTH_TO_NUM.jan;
    case "feb":
      return MONTH_TO_NUM.feb;
    case "mar":
      return MONTH_TO_NUM.mar;
    case "apr":
      return MONTH_TO_NUM.apr;
    case "may":
      return MONTH_TO_NUM.may;
    case "jun":
      return MONTH_TO_NUM.jun;
    case "jul":
      return MONTH_TO_NUM.jul;
    case "aug":
      return MONTH_TO_NUM.aug;
    case "sep":
      return MONTH_TO_NUM.sep;
    case "oct":
      return MONTH_TO_NUM.oct;
    case "nov":
      return MONTH_TO_NUM.nov;
    case "dec":
      return MONTH_TO_NUM.dec;
    default:
      return;
  }
}
function parseDate(cookieDate) {
  if (!cookieDate) {
    return;
  }
  const tokens = cookieDate.split(DATE_DELIM);
  let hour;
  let minute;
  let second;
  let dayOfMonth;
  let month;
  let year;
  for (let i = 0; i < tokens.length; i++) {
    const token = (tokens[i] ?? "").trim();
    if (!token.length) {
      continue;
    }
    if (second === void 0) {
      const result = parseTime(token);
      if (result) {
        hour = result[0];
        minute = result[1];
        second = result[2];
        continue;
      }
    }
    if (dayOfMonth === void 0) {
      const result = parseDigits(token, 1, 2, true);
      if (result !== void 0) {
        dayOfMonth = result;
        continue;
      }
    }
    if (month === void 0) {
      const result = parseMonth(token);
      if (result !== void 0) {
        month = result;
        continue;
      }
    }
    if (year === void 0) {
      const result = parseDigits(token, 2, 4, true);
      if (result !== void 0) {
        year = result;
        if (year >= 70 && year <= 99) {
          year += 1900;
        } else if (year >= 0 && year <= 69) {
          year += 2e3;
        }
      }
    }
  }
  if (dayOfMonth === void 0 || month === void 0 || year === void 0 || hour === void 0 || minute === void 0 || second === void 0 || dayOfMonth < 1 || dayOfMonth > 31 || year < 1601 || hour > 23 || minute > 59 || second > 59) {
    return;
  }
  return new Date(Date.UTC(year, month, dayOfMonth, hour, minute, second));
}
var COOKIE_OCTETS = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/;
var PATH_VALUE = /[\x20-\x3A\x3C-\x7E]+/;
var CONTROL_CHARS = /[\x00-\x1F]/;
var TERMINATORS = ["\n", "\r", "\0"];
function trimTerminator(str) {
  if (isEmptyString(str)) return str;
  for (let t = 0; t < TERMINATORS.length; t++) {
    const terminator = TERMINATORS[t];
    const terminatorIdx = terminator ? str.indexOf(terminator) : -1;
    if (terminatorIdx !== -1) {
      str = str.slice(0, terminatorIdx);
    }
  }
  return str;
}
function parseCookiePair(cookiePair, looseMode) {
  cookiePair = trimTerminator(cookiePair);
  let firstEq = cookiePair.indexOf("=");
  if (looseMode) {
    if (firstEq === 0) {
      cookiePair = cookiePair.substring(1);
      firstEq = cookiePair.indexOf("=");
    }
  } else {
    if (firstEq <= 0) {
      return void 0;
    }
  }
  let cookieName, cookieValue;
  if (firstEq <= 0) {
    cookieName = "";
    cookieValue = cookiePair.trim();
  } else {
    cookieName = cookiePair.slice(0, firstEq).trim();
    cookieValue = cookiePair.slice(firstEq + 1).trim();
  }
  if (CONTROL_CHARS.test(cookieName) || CONTROL_CHARS.test(cookieValue)) {
    return void 0;
  }
  const c = new Cookie();
  c.key = cookieName;
  c.value = cookieValue;
  return c;
}
function parse(str, options) {
  if (isEmptyString(str) || !isString(str)) {
    return void 0;
  }
  str = str.trim();
  const firstSemi = str.indexOf(";");
  const cookiePair = firstSemi === -1 ? str : str.slice(0, firstSemi);
  const c = parseCookiePair(cookiePair, options?.loose ?? false);
  if (!c) {
    return void 0;
  }
  if (firstSemi === -1) {
    return c;
  }
  const unparsed = str.slice(firstSemi + 1).trim();
  if (unparsed.length === 0) {
    return c;
  }
  const cookie_avs = unparsed.split(";");
  while (cookie_avs.length) {
    const av = (cookie_avs.shift() ?? "").trim();
    if (av.length === 0) {
      continue;
    }
    const av_sep = av.indexOf("=");
    let av_key, av_value;
    if (av_sep === -1) {
      av_key = av;
      av_value = null;
    } else {
      av_key = av.slice(0, av_sep);
      av_value = av.slice(av_sep + 1);
    }
    av_key = av_key.trim().toLowerCase();
    if (av_value) {
      av_value = av_value.trim();
    }
    switch (av_key) {
      case "expires":
        if (av_value) {
          const exp = parseDate(av_value);
          if (exp) {
            c.expires = exp;
          }
        }
        break;
      case "max-age":
        if (av_value) {
          if (/^-?[0-9]+$/.test(av_value)) {
            const delta = parseInt(av_value, 10);
            c.setMaxAge(delta);
          }
        }
        break;
      case "domain":
        if (av_value) {
          const domain = av_value.trim().replace(/^\./, "");
          if (domain) {
            c.domain = domain.toLowerCase();
          }
        }
        break;
      case "path":
        c.path = av_value && av_value[0] === "/" ? av_value : null;
        break;
      case "secure":
        c.secure = true;
        break;
      case "httponly":
        c.httpOnly = true;
        break;
      case "samesite":
        switch (av_value ? av_value.toLowerCase() : "") {
          case "strict":
            c.sameSite = "strict";
            break;
          case "lax":
            c.sameSite = "lax";
            break;
          case "none":
            c.sameSite = "none";
            break;
          default:
            c.sameSite = void 0;
            break;
        }
        break;
      default:
        c.extensions = c.extensions || [];
        c.extensions.push(av);
        break;
    }
  }
  return c;
}
function fromJSON(str) {
  if (!str || isEmptyString(str)) {
    return void 0;
  }
  let obj;
  if (typeof str === "string") {
    try {
      obj = JSON.parse(str);
    } catch {
      return void 0;
    }
  } else {
    obj = str;
  }
  const c = new Cookie();
  Cookie.serializableProperties.forEach((prop) => {
    if (obj && typeof obj === "object" && inOperator(prop, obj)) {
      const val = obj[prop];
      if (val === void 0) {
        return;
      }
      if (inOperator(prop, cookieDefaults) && val === cookieDefaults[prop]) {
        return;
      }
      switch (prop) {
        case "key":
        case "value":
        case "sameSite":
          if (typeof val === "string") {
            c[prop] = val;
          }
          break;
        case "expires":
        case "creation":
        case "lastAccessed":
          if (typeof val === "number" || typeof val === "string" || val instanceof Date) {
            c[prop] = obj[prop] == "Infinity" ? "Infinity" : new Date(val);
          } else if (val === null) {
            c[prop] = null;
          }
          break;
        case "maxAge":
          if (typeof val === "number" || val === "Infinity" || val === "-Infinity") {
            c[prop] = val;
          }
          break;
        case "domain":
        case "path":
          if (typeof val === "string" || val === null) {
            c[prop] = val;
          }
          break;
        case "secure":
        case "httpOnly":
          if (typeof val === "boolean") {
            c[prop] = val;
          }
          break;
        case "extensions":
          if (Array.isArray(val) && val.every((item) => typeof item === "string")) {
            c[prop] = val;
          }
          break;
        case "hostOnly":
        case "pathIsDefault":
          if (typeof val === "boolean" || val === null) {
            c[prop] = val;
          }
          break;
      }
    }
  });
  return c;
}
var cookieDefaults = {
  // the order in which the RFC has them:
  key: "",
  value: "",
  expires: "Infinity",
  maxAge: null,
  domain: null,
  path: null,
  secure: false,
  httpOnly: false,
  extensions: null,
  // set by the CookieJar:
  hostOnly: null,
  pathIsDefault: null,
  creation: null,
  lastAccessed: null,
  sameSite: void 0
};
var _Cookie = class _Cookie2 {
  /**
   * Create a new Cookie instance.
   * @public
   * @param options - The attributes to set on the cookie
   */
  constructor(options = {}) {
    this.key = options.key ?? cookieDefaults.key;
    this.value = options.value ?? cookieDefaults.value;
    this.expires = options.expires ?? cookieDefaults.expires;
    this.maxAge = options.maxAge ?? cookieDefaults.maxAge;
    this.domain = options.domain ?? cookieDefaults.domain;
    this.path = options.path ?? cookieDefaults.path;
    this.secure = options.secure ?? cookieDefaults.secure;
    this.httpOnly = options.httpOnly ?? cookieDefaults.httpOnly;
    this.extensions = options.extensions ?? cookieDefaults.extensions;
    this.creation = options.creation ?? cookieDefaults.creation;
    this.hostOnly = options.hostOnly ?? cookieDefaults.hostOnly;
    this.pathIsDefault = options.pathIsDefault ?? cookieDefaults.pathIsDefault;
    this.lastAccessed = options.lastAccessed ?? cookieDefaults.lastAccessed;
    this.sameSite = options.sameSite ?? cookieDefaults.sameSite;
    this.creation = options.creation ?? /* @__PURE__ */ new Date();
    Object.defineProperty(this, "creationIndex", {
      configurable: false,
      enumerable: false,
      // important for assert.deepEqual checks
      writable: true,
      value: ++_Cookie2.cookiesCreated
    });
    this.creationIndex = _Cookie2.cookiesCreated;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    const now = Date.now();
    const hostOnly = this.hostOnly != null ? this.hostOnly.toString() : "?";
    const createAge = this.creation && this.creation !== "Infinity" ? `${String(now - this.creation.getTime())}ms` : "?";
    const accessAge = this.lastAccessed && this.lastAccessed !== "Infinity" ? `${String(now - this.lastAccessed.getTime())}ms` : "?";
    return `Cookie="${this.toString()}; hostOnly=${hostOnly}; aAge=${accessAge}; cAge=${createAge}"`;
  }
  /**
   * For convenience in using `JSON.stringify(cookie)`. Returns a plain-old Object that can be JSON-serialized.
   *
   * @remarks
   * - Any `Date` properties (such as {@link Cookie.expires}, {@link Cookie.creation}, and {@link Cookie.lastAccessed}) are exported in ISO format (`Date.toISOString()`).
   *
   *  - Custom Cookie properties are discarded. In tough-cookie 1.x, since there was no {@link Cookie.toJSON} method explicitly defined, all enumerable properties were captured.
   *      If you want a property to be serialized, add the property name to {@link Cookie.serializableProperties}.
   */
  toJSON() {
    const obj = {};
    for (const prop of _Cookie2.serializableProperties) {
      const val = this[prop];
      if (val === cookieDefaults[prop]) {
        continue;
      }
      switch (prop) {
        case "key":
        case "value":
        case "sameSite":
          if (typeof val === "string") {
            obj[prop] = val;
          }
          break;
        case "expires":
        case "creation":
        case "lastAccessed":
          if (typeof val === "number" || typeof val === "string" || val instanceof Date) {
            obj[prop] = val == "Infinity" ? "Infinity" : new Date(val).toISOString();
          } else if (val === null) {
            obj[prop] = null;
          }
          break;
        case "maxAge":
          if (typeof val === "number" || val === "Infinity" || val === "-Infinity") {
            obj[prop] = val;
          }
          break;
        case "domain":
        case "path":
          if (typeof val === "string" || val === null) {
            obj[prop] = val;
          }
          break;
        case "secure":
        case "httpOnly":
          if (typeof val === "boolean") {
            obj[prop] = val;
          }
          break;
        case "extensions":
          if (Array.isArray(val)) {
            obj[prop] = val;
          }
          break;
        case "hostOnly":
        case "pathIsDefault":
          if (typeof val === "boolean" || val === null) {
            obj[prop] = val;
          }
          break;
      }
    }
    return obj;
  }
  /**
   * Does a deep clone of this cookie, implemented exactly as `Cookie.fromJSON(cookie.toJSON())`.
   * @public
   */
  clone() {
    return fromJSON(this.toJSON());
  }
  /**
   * Validates cookie attributes for semantic correctness. Useful for "lint" checking any `Set-Cookie` headers you generate.
   * For now, it returns a boolean, but eventually could return a reason string.
   *
   * @remarks
   * Works for a few things, but is by no means comprehensive.
   *
   * @beta
   */
  validate() {
    if (!this.value || !COOKIE_OCTETS.test(this.value)) {
      return false;
    }
    if (this.expires != "Infinity" && !(this.expires instanceof Date) && !parseDate(this.expires)) {
      return false;
    }
    if (this.maxAge != null && this.maxAge !== "Infinity" && (this.maxAge === "-Infinity" || this.maxAge <= 0)) {
      return false;
    }
    if (this.path != null && !PATH_VALUE.test(this.path)) {
      return false;
    }
    const cdomain = this.cdomain();
    if (cdomain) {
      if (cdomain.match(/\.$/)) {
        return false;
      }
      const suffix = getPublicSuffix(cdomain);
      if (suffix == null) {
        return false;
      }
    }
    return true;
  }
  /**
   * Sets the 'Expires' attribute on a cookie.
   *
   * @remarks
   * When given a `string` value it will be parsed with {@link parseDate}. If the value can't be parsed as a cookie date
   * then the 'Expires' attribute will be set to `"Infinity"`.
   *
   * @param exp - the new value for the 'Expires' attribute of the cookie.
   */
  setExpires(exp) {
    if (exp instanceof Date) {
      this.expires = exp;
    } else {
      this.expires = parseDate(exp) || "Infinity";
    }
  }
  /**
   * Sets the 'Max-Age' attribute (in seconds) on a cookie.
   *
   * @remarks
   * Coerces `-Infinity` to `"-Infinity"` and `Infinity` to `"Infinity"` so it can be serialized to JSON.
   *
   * @param age - the new value for the 'Max-Age' attribute (in seconds).
   */
  setMaxAge(age) {
    if (age === Infinity) {
      this.maxAge = "Infinity";
    } else if (age === -Infinity) {
      this.maxAge = "-Infinity";
    } else {
      this.maxAge = age;
    }
  }
  /**
   * Encodes to a `Cookie` header value (specifically, the {@link Cookie.key} and {@link Cookie.value} properties joined with "=").
   * @public
   */
  cookieString() {
    const val = this.value || "";
    if (this.key) {
      return `${this.key}=${val}`;
    }
    return val;
  }
  /**
   * Encodes to a `Set-Cookie header` value.
   * @public
   */
  toString() {
    let str = this.cookieString();
    if (this.expires != "Infinity") {
      if (this.expires instanceof Date) {
        str += `; Expires=${formatDate(this.expires)}`;
      }
    }
    if (this.maxAge != null && this.maxAge != Infinity) {
      str += `; Max-Age=${String(this.maxAge)}`;
    }
    if (this.domain && !this.hostOnly) {
      str += `; Domain=${this.domain}`;
    }
    if (this.path) {
      str += `; Path=${this.path}`;
    }
    if (this.secure) {
      str += "; Secure";
    }
    if (this.httpOnly) {
      str += "; HttpOnly";
    }
    if (this.sameSite && this.sameSite !== "none") {
      if (this.sameSite.toLowerCase() === _Cookie2.sameSiteCanonical.lax.toLowerCase()) {
        str += `; SameSite=${_Cookie2.sameSiteCanonical.lax}`;
      } else if (this.sameSite.toLowerCase() === _Cookie2.sameSiteCanonical.strict.toLowerCase()) {
        str += `; SameSite=${_Cookie2.sameSiteCanonical.strict}`;
      } else {
        str += `; SameSite=${this.sameSite}`;
      }
    }
    if (this.extensions) {
      this.extensions.forEach((ext) => {
        str += `; ${ext}`;
      });
    }
    return str;
  }
  /**
   * Computes the TTL relative to now (milliseconds).
   *
   * @remarks
   * - `Infinity` is returned for cookies without an explicit expiry
   *
   * - `0` is returned if the cookie is expired.
   *
   * - Otherwise a time-to-live in milliseconds is returned.
   *
   * @param now - passing an explicit value is mostly used for testing purposes since this defaults to the `Date.now()`
   * @public
   */
  TTL(now = Date.now()) {
    if (this.maxAge != null && typeof this.maxAge === "number") {
      return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
    }
    const expires = this.expires;
    if (expires === "Infinity") {
      return Infinity;
    }
    return (expires?.getTime() ?? now) - (now || Date.now());
  }
  /**
   * Computes the absolute unix-epoch milliseconds that this cookie expires.
   *
   * The "Max-Age" attribute takes precedence over "Expires" (as per the RFC). The {@link Cookie.lastAccessed} attribute
   * (or the `now` parameter if given) is used to offset the {@link Cookie.maxAge} attribute.
   *
   * If Expires ({@link Cookie.expires}) is set, that's returned.
   *
   * @param now - can be used to provide a time offset (instead of {@link Cookie.lastAccessed}) to use when calculating the "Max-Age" value
   */
  expiryTime(now) {
    if (this.maxAge != null) {
      const relativeTo = now || this.lastAccessed || /* @__PURE__ */ new Date();
      const maxAge = typeof this.maxAge === "number" ? this.maxAge : -Infinity;
      const age = maxAge <= 0 ? -Infinity : maxAge * 1e3;
      if (relativeTo === "Infinity") {
        return Infinity;
      }
      return relativeTo.getTime() + age;
    }
    if (this.expires == "Infinity") {
      return Infinity;
    }
    return this.expires ? this.expires.getTime() : void 0;
  }
  /**
   * Similar to {@link Cookie.expiryTime}, computes the absolute unix-epoch milliseconds that this cookie expires and returns it as a Date.
   *
   * The "Max-Age" attribute takes precedence over "Expires" (as per the RFC). The {@link Cookie.lastAccessed} attribute
   * (or the `now` parameter if given) is used to offset the {@link Cookie.maxAge} attribute.
   *
   * If Expires ({@link Cookie.expires}) is set, that's returned.
   *
   * @param now - can be used to provide a time offset (instead of {@link Cookie.lastAccessed}) to use when calculating the "Max-Age" value
   */
  expiryDate(now) {
    const millisec = this.expiryTime(now);
    if (millisec == Infinity) {
      return /* @__PURE__ */ new Date(2147483647e3);
    } else if (millisec == -Infinity) {
      return /* @__PURE__ */ new Date(0);
    } else {
      return millisec == void 0 ? void 0 : new Date(millisec);
    }
  }
  /**
   * Indicates if the cookie has been persisted to a store or not.
   * @public
   */
  isPersistent() {
    return this.maxAge != null || this.expires != "Infinity";
  }
  /**
   * Calls {@link canonicalDomain} with the {@link Cookie.domain} property.
   * @public
   */
  canonicalizedDomain() {
    return canonicalDomain(this.domain);
  }
  /**
   * Alias for {@link Cookie.canonicalizedDomain}
   * @public
   */
  cdomain() {
    return canonicalDomain(this.domain);
  }
  /**
   * Parses a string into a Cookie object.
   *
   * @remarks
   * Note: when parsing a `Cookie` header it must be split by ';' before each Cookie string can be parsed.
   *
   * @example
   * ```
   * // parse a `Set-Cookie` header
   * const setCookieHeader = 'a=bcd; Expires=Tue, 18 Oct 2011 07:05:03 GMT'
   * const cookie = Cookie.parse(setCookieHeader)
   * cookie.key === 'a'
   * cookie.value === 'bcd'
   * cookie.expires === new Date(Date.parse('Tue, 18 Oct 2011 07:05:03 GMT'))
   * ```
   *
   * @example
   * ```
   * // parse a `Cookie` header
   * const cookieHeader = 'name=value; name2=value2; name3=value3'
   * const cookies = cookieHeader.split(';').map(Cookie.parse)
   * cookies[0].name === 'name'
   * cookies[0].value === 'value'
   * cookies[1].name === 'name2'
   * cookies[1].value === 'value2'
   * cookies[2].name === 'name3'
   * cookies[2].value === 'value3'
   * ```
   *
   * @param str - The `Set-Cookie` header or a Cookie string to parse.
   * @param options - Configures `strict` or `loose` mode for cookie parsing
   */
  static parse(str, options) {
    return parse(str, options);
  }
  /**
   * Does the reverse of {@link Cookie.toJSON}.
   *
   * @remarks
   * Any Date properties (such as .expires, .creation, and .lastAccessed) are parsed via Date.parse, not tough-cookie's parseDate, since ISO timestamps are being handled at this layer.
   *
   * @example
   * ```
   * const json = JSON.stringify({
   *   key: 'alpha',
   *   value: 'beta',
   *   domain: 'example.com',
   *   path: '/foo',
   *   expires: '2038-01-19T03:14:07.000Z',
   * })
   * const cookie = Cookie.fromJSON(json)
   * cookie.key === 'alpha'
   * cookie.value === 'beta'
   * cookie.domain === 'example.com'
   * cookie.path === '/foo'
   * cookie.expires === new Date(Date.parse('2038-01-19T03:14:07.000Z'))
   * ```
   *
   * @param str - An unparsed JSON string or a value that has already been parsed as JSON
   */
  static fromJSON(str) {
    return fromJSON(str);
  }
};
_Cookie.cookiesCreated = 0;
_Cookie.sameSiteLevel = {
  strict: 3,
  lax: 2,
  none: 1
};
_Cookie.sameSiteCanonical = {
  strict: "Strict",
  lax: "Lax"
};
_Cookie.serializableProperties = ["key", "value", "expires", "maxAge", "domain", "path", "secure", "httpOnly", "extensions", "hostOnly", "pathIsDefault", "creation", "lastAccessed", "sameSite"];
var Cookie = _Cookie;
var MAX_TIME = 2147483647e3;
function cookieCompare(a, b) {
  let cmp;
  const aPathLen = a.path ? a.path.length : 0;
  const bPathLen = b.path ? b.path.length : 0;
  cmp = bPathLen - aPathLen;
  if (cmp !== 0) {
    return cmp;
  }
  const aTime = a.creation && a.creation instanceof Date ? a.creation.getTime() : MAX_TIME;
  const bTime = b.creation && b.creation instanceof Date ? b.creation.getTime() : MAX_TIME;
  cmp = aTime - bTime;
  if (cmp !== 0) {
    return cmp;
  }
  cmp = (a.creationIndex || 0) - (b.creationIndex || 0);
  return cmp;
}
function defaultPath(path) {
  if (!path || path.slice(0, 1) !== "/") {
    return "/";
  }
  if (path === "/") {
    return path;
  }
  const rightSlash = path.lastIndexOf("/");
  if (rightSlash === 0) {
    return "/";
  }
  return path.slice(0, rightSlash);
}
var IP_REGEX_LOWERCASE = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
function domainMatch(domain, cookieDomain, canonicalize) {
  if (domain == null || cookieDomain == null) {
    return void 0;
  }
  let _str;
  let _domStr;
  if (canonicalize !== false) {
    _str = canonicalDomain(domain);
    _domStr = canonicalDomain(cookieDomain);
  } else {
    _str = domain;
    _domStr = cookieDomain;
  }
  if (_str == null || _domStr == null) {
    return void 0;
  }
  if (_str == _domStr) {
    return true;
  }
  const idx = _str.lastIndexOf(_domStr);
  if (idx <= 0) {
    return false;
  }
  if (_str.length !== _domStr.length + idx) {
    return false;
  }
  if (_str.substring(idx - 1, idx) !== ".") {
    return false;
  }
  return !IP_REGEX_LOWERCASE.test(_str);
}
function isLoopbackV4(address) {
  const octets = address.split(".");
  return octets.length === 4 && octets[0] !== void 0 && parseInt(octets[0], 10) === 127;
}
function isLoopbackV6(address) {
  return address === "::1";
}
function isNormalizedLocalhostTLD(lowerHost) {
  return lowerHost.endsWith(".localhost");
}
function isLocalHostname(host) {
  const lowerHost = host.toLowerCase();
  return lowerHost === "localhost" || isNormalizedLocalhostTLD(lowerHost);
}
function hostNoBrackets(host) {
  if (host.length >= 2 && host.startsWith("[") && host.endsWith("]")) {
    return host.substring(1, host.length - 1);
  }
  return host;
}
function isPotentiallyTrustworthy(inputUrl, allowSecureOnLocal = true) {
  let url;
  if (typeof inputUrl === "string") {
    try {
      url = new URL(inputUrl);
    } catch {
      return false;
    }
  } else {
    url = inputUrl;
  }
  const scheme = url.protocol.replace(":", "").toLowerCase();
  const hostname = hostNoBrackets(url.hostname).replace(/\.+$/, "");
  if (scheme === "https" || scheme === "wss") {
    return true;
  }
  if (!allowSecureOnLocal) {
    return false;
  }
  if (IP_V4_REGEX_OBJECT.test(hostname)) {
    return isLoopbackV4(hostname);
  }
  if (IP_V6_REGEX_OBJECT.test(hostname)) {
    return isLoopbackV6(hostname);
  }
  return isLocalHostname(hostname);
}
var defaultSetCookieOptions = {
  loose: false,
  sameSiteContext: void 0,
  ignoreError: false,
  http: true
};
var defaultGetCookieOptions = {
  http: true,
  expire: true,
  allPaths: false,
  sameSiteContext: void 0,
  sort: void 0
};
var SAME_SITE_CONTEXT_VAL_ERR = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function getCookieContext(url) {
  if (url && typeof url === "object" && "hostname" in url && typeof url.hostname === "string" && "pathname" in url && typeof url.pathname === "string" && "protocol" in url && typeof url.protocol === "string") {
    return {
      hostname: url.hostname,
      pathname: url.pathname,
      protocol: url.protocol
    };
  } else if (typeof url === "string") {
    try {
      return new URL(decodeURI(url));
    } catch {
      return new URL(url);
    }
  } else {
    throw new ParameterError("`url` argument is not a string or URL.");
  }
}
function checkSameSiteContext(value) {
  const context = String(value).toLowerCase();
  if (context === "none" || context === "lax" || context === "strict") {
    return context;
  } else {
    return void 0;
  }
}
function isSecurePrefixConditionMet(cookie2) {
  const startsWithSecurePrefix = typeof cookie2.key === "string" && cookie2.key.startsWith("__Secure-");
  return !startsWithSecurePrefix || cookie2.secure;
}
function isHostPrefixConditionMet(cookie2) {
  const startsWithHostPrefix = typeof cookie2.key === "string" && cookie2.key.startsWith("__Host-");
  return !startsWithHostPrefix || Boolean(cookie2.secure && cookie2.hostOnly && cookie2.path != null && cookie2.path === "/");
}
function getNormalizedPrefixSecurity(prefixSecurity) {
  const normalizedPrefixSecurity = prefixSecurity.toLowerCase();
  switch (normalizedPrefixSecurity) {
    case PrefixSecurityEnum.STRICT:
    case PrefixSecurityEnum.SILENT:
    case PrefixSecurityEnum.DISABLED:
      return normalizedPrefixSecurity;
    default:
      return PrefixSecurityEnum.SILENT;
  }
}
var CookieJar = class _CookieJar {
  /**
   * Creates a new `CookieJar` instance.
   *
   * @remarks
   * - If a custom store is not passed to the constructor, an in-memory store ({@link MemoryCookieStore} will be created and used.
   * - If a boolean value is passed as the `options` parameter, this is equivalent to passing `{ rejectPublicSuffixes: <value> }`
   *
   * @param store - a custom {@link Store} implementation (defaults to {@link MemoryCookieStore})
   * @param options - configures how cookies are processed by the cookie jar
   */
  constructor(store, options) {
    if (typeof options === "boolean") {
      options = {
        rejectPublicSuffixes: options
      };
    }
    this.rejectPublicSuffixes = options?.rejectPublicSuffixes ?? true;
    this.enableLooseMode = options?.looseMode ?? false;
    this.allowSpecialUseDomain = options?.allowSpecialUseDomain ?? true;
    this.allowSecureOnLocal = options?.allowSecureOnLocal ?? true;
    this.prefixSecurity = getNormalizedPrefixSecurity(options?.prefixSecurity ?? "silent");
    this.store = store ?? new MemoryCookieStore();
  }
  callSync(fn) {
    if (!this.store.synchronous) {
      throw new Error("CookieJar store is not synchronous; use async API instead.");
    }
    let syncErr = null;
    let syncResult = void 0;
    try {
      fn.call(this, (error4, result) => {
        syncErr = error4;
        syncResult = result;
      });
    } catch (err) {
      syncErr = err;
    }
    if (syncErr) throw syncErr;
    return syncResult;
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  setCookie(cookie2, url, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = void 0;
    }
    const promiseCallback = createPromiseCallback(callback);
    const cb = promiseCallback.callback;
    let context;
    try {
      if (typeof url === "string") {
        validate(isNonEmptyString(url), callback, safeToString(options));
      }
      context = getCookieContext(url);
      if (typeof url === "function") {
        return promiseCallback.reject(new Error("No URL was specified"));
      }
      if (typeof options === "function") {
        options = defaultSetCookieOptions;
      }
      validate(typeof cb === "function", cb);
      if (!isNonEmptyString(cookie2) && !isObject2(cookie2) && cookie2 instanceof String && cookie2.length == 0) {
        return promiseCallback.resolve(void 0);
      }
    } catch (err) {
      return promiseCallback.reject(err);
    }
    const host = canonicalDomain(context.hostname) ?? null;
    const loose = options?.loose || this.enableLooseMode;
    let sameSiteContext = null;
    if (options?.sameSiteContext) {
      sameSiteContext = checkSameSiteContext(options.sameSiteContext);
      if (!sameSiteContext) {
        return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
      }
    }
    if (typeof cookie2 === "string" || cookie2 instanceof String) {
      const parsedCookie = Cookie.parse(cookie2.toString(), {
        loose
      });
      if (!parsedCookie) {
        const err = new Error("Cookie failed to parse");
        return options?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
      }
      cookie2 = parsedCookie;
    } else if (!(cookie2 instanceof Cookie)) {
      const err = new Error("First argument to setCookie must be a Cookie object or string");
      return options?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
    }
    const now = options?.now || /* @__PURE__ */ new Date();
    if (this.rejectPublicSuffixes && cookie2.domain) {
      try {
        const cdomain = cookie2.cdomain();
        const suffix = typeof cdomain === "string" ? getPublicSuffix(cdomain, {
          allowSpecialUseDomain: this.allowSpecialUseDomain,
          ignoreError: options?.ignoreError
        }) : null;
        if (suffix == null && !IP_V6_REGEX_OBJECT.test(cookie2.domain)) {
          const err = new Error("Cookie has domain set to a public suffix");
          return options?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
        }
      } catch (err) {
        return options?.ignoreError ? promiseCallback.resolve(void 0) : (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          promiseCallback.reject(err)
        );
      }
    }
    if (cookie2.domain) {
      if (!domainMatch(host ?? void 0, cookie2.cdomain() ?? void 0, false)) {
        const err = new Error(`Cookie not in this host's domain. Cookie:${cookie2.cdomain() ?? "null"} Request:${host ?? "null"}`);
        return options?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
      }
      if (cookie2.hostOnly == null) {
        cookie2.hostOnly = false;
      }
    } else {
      cookie2.hostOnly = true;
      cookie2.domain = host;
    }
    if (!cookie2.path || cookie2.path[0] !== "/") {
      cookie2.path = defaultPath(context.pathname);
      cookie2.pathIsDefault = true;
    }
    if (options?.http === false && cookie2.httpOnly) {
      const err = new Error("Cookie is HttpOnly and this isn't an HTTP API");
      return options.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
    }
    if (cookie2.sameSite !== "none" && cookie2.sameSite !== void 0 && sameSiteContext) {
      if (sameSiteContext === "none") {
        const err = new Error("Cookie is SameSite but this is a cross-origin request");
        return options?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
      }
    }
    const ignoreErrorForPrefixSecurity = this.prefixSecurity === PrefixSecurityEnum.SILENT;
    const prefixSecurityDisabled = this.prefixSecurity === PrefixSecurityEnum.DISABLED;
    if (!prefixSecurityDisabled) {
      let errorFound = false;
      let errorMsg;
      if (!isSecurePrefixConditionMet(cookie2)) {
        errorFound = true;
        errorMsg = "Cookie has __Secure prefix but Secure attribute is not set";
      } else if (!isHostPrefixConditionMet(cookie2)) {
        errorFound = true;
        errorMsg = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'";
      }
      if (errorFound) {
        return options?.ignoreError || ignoreErrorForPrefixSecurity ? promiseCallback.resolve(void 0) : promiseCallback.reject(new Error(errorMsg));
      }
    }
    const store = this.store;
    if (!store.updateCookie) {
      store.updateCookie = function(_oldCookie, newCookie, cb2) {
        return __async(this, null, function* () {
          return this.putCookie(newCookie).then(() => cb2?.(null), (error4) => cb2?.(error4));
        });
      };
    }
    const withCookie = function withCookie2(err, oldCookie) {
      if (err) {
        cb(err);
        return;
      }
      const next = function(err2) {
        if (err2) {
          cb(err2);
        } else if (typeof cookie2 === "string") {
          cb(null, void 0);
        } else {
          cb(null, cookie2);
        }
      };
      if (oldCookie) {
        if (options && "http" in options && options.http === false && oldCookie.httpOnly) {
          err = new Error("old Cookie is HttpOnly and this isn't an HTTP API");
          if (options.ignoreError) cb(null, void 0);
          else cb(err);
          return;
        }
        if (cookie2 instanceof Cookie) {
          cookie2.creation = oldCookie.creation;
          cookie2.creationIndex = oldCookie.creationIndex;
          cookie2.lastAccessed = now;
          store.updateCookie(oldCookie, cookie2, next);
        }
      } else {
        if (cookie2 instanceof Cookie) {
          cookie2.creation = cookie2.lastAccessed = now;
          store.putCookie(cookie2, next);
        }
      }
    };
    store.findCookie(cookie2.domain, cookie2.path, cookie2.key, withCookie);
    return promiseCallback.promise;
  }
  /**
   * Synchronously attempt to set the {@link Cookie} in the {@link CookieJar}.
   *
   * <strong>Note:</strong> Only works if the configured {@link Store} is also synchronous.
   *
   * @remarks
   * - If successfully persisted, the {@link Cookie} will have updated
   *     {@link Cookie.creation}, {@link Cookie.lastAccessed} and {@link Cookie.hostOnly}
   *     properties.
   *
   * - As per the RFC, the {@link Cookie.hostOnly} flag is set if there was no `Domain={value}`
   *     attribute on the cookie string. The {@link Cookie.domain} property is set to the
   *     fully-qualified hostname of `currentUrl` in this case. Matching this cookie requires an
   *     exact hostname match (not a {@link domainMatch} as per usual)
   *
   * @param cookie - The cookie object or cookie string to store. A string value will be parsed into a cookie using {@link Cookie.parse}.
   * @param url - The domain to store the cookie with.
   * @param options - Configuration settings to use when storing the cookie.
   * @public
   */
  setCookieSync(cookie2, url, options) {
    const setCookieFn = options ? this.setCookie.bind(this, cookie2, url, options) : this.setCookie.bind(this, cookie2, url);
    return this.callSync(setCookieFn);
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  getCookies(url, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = defaultGetCookieOptions;
    } else if (options === void 0) {
      options = defaultGetCookieOptions;
    }
    const promiseCallback = createPromiseCallback(callback);
    const cb = promiseCallback.callback;
    let context;
    try {
      if (typeof url === "string") {
        validate(isNonEmptyString(url), cb, url);
      }
      context = getCookieContext(url);
      validate(isObject2(options), cb, safeToString(options));
      validate(typeof cb === "function", cb);
    } catch (parameterError) {
      return promiseCallback.reject(parameterError);
    }
    const host = canonicalDomain(context.hostname);
    const path = context.pathname || "/";
    const potentiallyTrustworthy = isPotentiallyTrustworthy(url, this.allowSecureOnLocal);
    let sameSiteLevel = 0;
    if (options.sameSiteContext) {
      const sameSiteContext = checkSameSiteContext(options.sameSiteContext);
      if (sameSiteContext == null) {
        return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
      }
      sameSiteLevel = Cookie.sameSiteLevel[sameSiteContext];
      if (!sameSiteLevel) {
        return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
      }
    }
    const http2 = options.http ?? true;
    const now = Date.now();
    const expireCheck = options.expire ?? true;
    const allPaths = options.allPaths ?? false;
    const store = this.store;
    function matchingCookie(c) {
      if (c.hostOnly) {
        if (c.domain != host) {
          return false;
        }
      } else {
        if (!domainMatch(host ?? void 0, c.domain ?? void 0, false)) {
          return false;
        }
      }
      if (!allPaths && typeof c.path === "string" && !pathMatch(path, c.path)) {
        return false;
      }
      if (c.secure && !potentiallyTrustworthy) {
        return false;
      }
      if (c.httpOnly && !http2) {
        return false;
      }
      if (sameSiteLevel) {
        let cookieLevel;
        if (c.sameSite === "lax") {
          cookieLevel = Cookie.sameSiteLevel.lax;
        } else if (c.sameSite === "strict") {
          cookieLevel = Cookie.sameSiteLevel.strict;
        } else {
          cookieLevel = Cookie.sameSiteLevel.none;
        }
        if (cookieLevel > sameSiteLevel) {
          return false;
        }
      }
      const expiryTime = c.expiryTime();
      if (expireCheck && expiryTime != void 0 && expiryTime <= now) {
        store.removeCookie(c.domain, c.path, c.key, () => {
        });
        return false;
      }
      return true;
    }
    store.findCookies(host, allPaths ? null : path, this.allowSpecialUseDomain, (err, cookies) => {
      if (err) {
        cb(err);
        return;
      }
      if (cookies == null) {
        cb(null, []);
        return;
      }
      cookies = cookies.filter(matchingCookie);
      if ("sort" in options && options.sort !== false) {
        cookies = cookies.sort(cookieCompare);
      }
      const now2 = /* @__PURE__ */ new Date();
      for (const cookie2 of cookies) {
        cookie2.lastAccessed = now2;
      }
      cb(null, cookies);
    });
    return promiseCallback.promise;
  }
  /**
   * Synchronously retrieve the list of cookies that can be sent in a Cookie header for the
   * current URL.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   *
   * @remarks
   * - The array of cookies returned will be sorted according to {@link cookieCompare}.
   *
   * - The {@link Cookie.lastAccessed} property will be updated on all returned cookies.
   *
   * @param url - The domain to store the cookie with.
   * @param options - Configuration settings to use when retrieving the cookies.
   */
  getCookiesSync(url, options) {
    return this.callSync(this.getCookies.bind(this, url, options)) ?? [];
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  getCookieString(url, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = void 0;
    }
    const promiseCallback = createPromiseCallback(callback);
    const next = function(err, cookies) {
      if (err) {
        promiseCallback.callback(err);
      } else {
        promiseCallback.callback(null, cookies?.sort(cookieCompare).map((c) => c.cookieString()).join("; "));
      }
    };
    this.getCookies(url, options, next);
    return promiseCallback.promise;
  }
  /**
   * Synchronous version of `.getCookieString()`. Accepts the same options as `.getCookies()` but returns a string suitable for a
   * `Cookie` header rather than an Array.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   *
   * @param url - The domain to store the cookie with.
   * @param options - Configuration settings to use when retrieving the cookies.
   */
  getCookieStringSync(url, options) {
    return this.callSync(options ? this.getCookieString.bind(this, url, options) : this.getCookieString.bind(this, url)) ?? "";
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  getSetCookieStrings(url, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = void 0;
    }
    const promiseCallback = createPromiseCallback(callback);
    const next = function(err, cookies) {
      if (err) {
        promiseCallback.callback(err);
      } else {
        promiseCallback.callback(null, cookies?.map((c) => {
          return c.toString();
        }));
      }
    };
    this.getCookies(url, options, next);
    return promiseCallback.promise;
  }
  /**
   * Synchronous version of `.getSetCookieStrings()`. Returns an array of strings suitable for `Set-Cookie` headers.
   * Accepts the same options as `.getCookies()`.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   *
   * @param url - The domain to store the cookie with.
   * @param options - Configuration settings to use when retrieving the cookies.
   */
  getSetCookieStringsSync(url, options = {}) {
    return this.callSync(this.getSetCookieStrings.bind(this, url, options)) ?? [];
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  serialize(callback) {
    const promiseCallback = createPromiseCallback(callback);
    let type = this.store.constructor.name;
    if (isObject2(type)) {
      type = null;
    }
    const serialized = {
      // The version of tough-cookie that serialized this jar. Generally a good
      // practice since future versions can make data import decisions based on
      // known past behavior. When/if this matters, use `semver`.
      version: `tough-cookie@${version}`,
      // add the store type, to make humans happy:
      storeType: type,
      // CookieJar configuration:
      rejectPublicSuffixes: this.rejectPublicSuffixes,
      enableLooseMode: this.enableLooseMode,
      allowSpecialUseDomain: this.allowSpecialUseDomain,
      prefixSecurity: getNormalizedPrefixSecurity(this.prefixSecurity),
      // this gets filled from getAllCookies:
      cookies: []
    };
    if (typeof this.store.getAllCookies !== "function") {
      return promiseCallback.reject(new Error("store does not support getAllCookies and cannot be serialized"));
    }
    this.store.getAllCookies((err, cookies) => {
      if (err) {
        promiseCallback.callback(err);
        return;
      }
      if (cookies == null) {
        promiseCallback.callback(null, serialized);
        return;
      }
      serialized.cookies = cookies.map((cookie2) => {
        const serializedCookie = cookie2.toJSON();
        delete serializedCookie.creationIndex;
        return serializedCookie;
      });
      promiseCallback.callback(null, serialized);
    });
    return promiseCallback.promise;
  }
  /**
   * Serialize the CookieJar if the underlying store supports `.getAllCookies`.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   */
  serializeSync() {
    return this.callSync((callback) => {
      this.serialize(callback);
    });
  }
  /**
   * Alias of {@link CookieJar.serializeSync}. Allows the cookie to be serialized
   * with `JSON.stringify(cookieJar)`.
   */
  toJSON() {
    return this.serializeSync();
  }
  /**
   * Use the class method CookieJar.deserialize instead of calling this directly
   * @internal
   */
  _importCookies(serialized, callback) {
    let cookies = void 0;
    if (serialized && typeof serialized === "object" && inOperator("cookies", serialized) && Array.isArray(serialized.cookies)) {
      cookies = serialized.cookies;
    }
    if (!cookies) {
      callback(new Error("serialized jar has no cookies array"), void 0);
      return;
    }
    cookies = cookies.slice();
    const putNext = (err) => {
      if (err) {
        callback(err, void 0);
        return;
      }
      if (Array.isArray(cookies)) {
        if (!cookies.length) {
          callback(err, this);
          return;
        }
        let cookie2;
        try {
          cookie2 = Cookie.fromJSON(cookies.shift());
        } catch (e) {
          callback(e instanceof Error ? e : new Error(), void 0);
          return;
        }
        if (cookie2 === void 0) {
          putNext(null);
          return;
        }
        this.store.putCookie(cookie2, putNext);
      }
    };
    putNext(null);
  }
  /**
   * @internal
   */
  _importCookiesSync(serialized) {
    this.callSync(this._importCookies.bind(this, serialized));
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  clone(newStore, callback) {
    if (typeof newStore === "function") {
      callback = newStore;
      newStore = void 0;
    }
    const promiseCallback = createPromiseCallback(callback);
    const cb = promiseCallback.callback;
    this.serialize((err, serialized) => {
      if (err) {
        return promiseCallback.reject(err);
      }
      return _CookieJar.deserialize(serialized ?? "", newStore, cb);
    });
    return promiseCallback.promise;
  }
  /**
   * @internal
   */
  _cloneSync(newStore) {
    const cloneFn = newStore && typeof newStore !== "function" ? this.clone.bind(this, newStore) : this.clone.bind(this);
    return this.callSync((callback) => {
      cloneFn(callback);
    });
  }
  /**
   * Produces a deep clone of this CookieJar. Modifications to the original do
   * not affect the clone, and vice versa.
   *
   * <strong>Note</strong>: Only works if both the configured Store and destination
   * Store are synchronous.
   *
   * @remarks
   * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
   *
   * - Transferring between store types is supported so long as the source
   *     implements `.getAllCookies()` and the destination implements `.putCookie()`.
   *
   * @param newStore - The target {@link Store} to clone cookies into.
   */
  cloneSync(newStore) {
    if (!newStore) {
      return this._cloneSync();
    }
    if (!newStore.synchronous) {
      throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
    }
    return this._cloneSync(newStore);
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  removeAllCookies(callback) {
    const promiseCallback = createPromiseCallback(callback);
    const cb = promiseCallback.callback;
    const store = this.store;
    if (typeof store.removeAllCookies === "function" && store.removeAllCookies !== Store.prototype.removeAllCookies) {
      store.removeAllCookies(cb);
      return promiseCallback.promise;
    }
    store.getAllCookies((err, cookies) => {
      if (err) {
        cb(err);
        return;
      }
      if (!cookies) {
        cookies = [];
      }
      if (cookies.length === 0) {
        cb(null, void 0);
        return;
      }
      let completedCount = 0;
      const removeErrors = [];
      const removeCookieCb = function removeCookieCb2(removeErr) {
        if (removeErr) {
          removeErrors.push(removeErr);
        }
        completedCount++;
        if (completedCount === cookies.length) {
          if (removeErrors[0]) cb(removeErrors[0]);
          else cb(null, void 0);
          return;
        }
      };
      cookies.forEach((cookie2) => {
        store.removeCookie(cookie2.domain, cookie2.path, cookie2.key, removeCookieCb);
      });
    });
    return promiseCallback.promise;
  }
  /**
   * Removes all cookies from the CookieJar.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   *
   * @remarks
   * - This is a new backwards-compatible feature of tough-cookie version 2.5,
   *     so not all Stores will implement it efficiently. For Stores that do not
   *     implement `removeAllCookies`, the fallback is to call `removeCookie` after
   *     `getAllCookies`.
   *
   * - If `getAllCookies` fails or isn't implemented in the Store, an error is returned.
   *
   * - If one or more of the `removeCookie` calls fail, only the first error is returned.
   */
  removeAllCookiesSync() {
    this.callSync((callback) => {
      this.removeAllCookies(callback);
    });
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  static deserialize(strOrObj, store, callback) {
    if (typeof store === "function") {
      callback = store;
      store = void 0;
    }
    const promiseCallback = createPromiseCallback(callback);
    let serialized;
    if (typeof strOrObj === "string") {
      try {
        serialized = JSON.parse(strOrObj);
      } catch (e) {
        return promiseCallback.reject(e instanceof Error ? e : new Error());
      }
    } else {
      serialized = strOrObj;
    }
    const readSerializedProperty = (property) => {
      return serialized && typeof serialized === "object" && inOperator(property, serialized) ? serialized[property] : void 0;
    };
    const readSerializedBoolean = (property) => {
      const value = readSerializedProperty(property);
      return typeof value === "boolean" ? value : void 0;
    };
    const readSerializedString = (property) => {
      const value = readSerializedProperty(property);
      return typeof value === "string" ? value : void 0;
    };
    const jar = new _CookieJar(store, {
      rejectPublicSuffixes: readSerializedBoolean("rejectPublicSuffixes"),
      looseMode: readSerializedBoolean("enableLooseMode"),
      allowSpecialUseDomain: readSerializedBoolean("allowSpecialUseDomain"),
      prefixSecurity: getNormalizedPrefixSecurity(readSerializedString("prefixSecurity") ?? "silent")
    });
    jar._importCookies(serialized, (err) => {
      if (err) {
        promiseCallback.callback(err);
        return;
      }
      promiseCallback.callback(null, jar);
    });
    return promiseCallback.promise;
  }
  /**
   * A new CookieJar is created and the serialized {@link Cookie} values are added to
   * the underlying store. Each {@link Cookie} is added via `store.putCookie(...)` in
   * the order in which they appear in the serialization.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   *
   * @remarks
   * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
   *
   * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
   *
   * @param strOrObj - A JSON string or object representing the deserialized cookies.
   * @param store - The underlying store to persist the deserialized cookies into.
   */
  static deserializeSync(strOrObj, store) {
    const serialized = typeof strOrObj === "string" ? JSON.parse(strOrObj) : strOrObj;
    const readSerializedProperty = (property) => {
      return serialized && typeof serialized === "object" && inOperator(property, serialized) ? serialized[property] : void 0;
    };
    const readSerializedBoolean = (property) => {
      const value = readSerializedProperty(property);
      return typeof value === "boolean" ? value : void 0;
    };
    const readSerializedString = (property) => {
      const value = readSerializedProperty(property);
      return typeof value === "string" ? value : void 0;
    };
    const jar = new _CookieJar(store, {
      rejectPublicSuffixes: readSerializedBoolean("rejectPublicSuffixes"),
      looseMode: readSerializedBoolean("enableLooseMode"),
      allowSpecialUseDomain: readSerializedBoolean("allowSpecialUseDomain"),
      prefixSecurity: getNormalizedPrefixSecurity(readSerializedString("prefixSecurity") ?? "silent")
    });
    if (!jar.store.synchronous) {
      throw new Error("CookieJar store is not synchronous; use async API instead.");
    }
    jar._importCookiesSync(serialized);
    return jar;
  }
  /**
   * Alias of {@link CookieJar.deserializeSync}.
   *
   * @remarks
   * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
   *
   * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
   *
   * @param jsonString - A JSON string or object representing the deserialized cookies.
   * @param store - The underlying store to persist the deserialized cookies into.
   */
  static fromJSON(jsonString, store) {
    return _CookieJar.deserializeSync(jsonString, store);
  }
};

// node_modules/msw/lib/core/utils/internal/jsonParse.mjs
function jsonParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return void 0;
  }
}

// node_modules/msw/lib/core/utils/cookieStore.mjs
var CookieStore = class {
  #storageKey = "__msw-cookie-store__";
  #jar;
  #memoryStore;
  constructor() {
    if (!isNodeProcess()) {
      invariant(typeof localStorage !== "undefined", "Failed to create a CookieStore: `localStorage` is not available in this environment. This is likely an issue with your environment, which has been detected as browser (or browser-like) environment and must implement global browser APIs correctly.");
    }
    this.#memoryStore = new MemoryCookieStore();
    this.#memoryStore.idx = this.getCookieStoreIndex();
    this.#jar = new CookieJar(this.#memoryStore);
  }
  getCookies(url) {
    return this.#jar.getCookiesSync(url);
  }
  setCookie(cookieName, url) {
    return __async(this, null, function* () {
      yield this.#jar.setCookie(cookieName, url);
      this.persist();
    });
  }
  getCookieStoreIndex() {
    if (typeof localStorage === "undefined") {
      return {};
    }
    const cookiesString = localStorage.getItem(this.#storageKey);
    if (cookiesString == null) {
      return {};
    }
    const rawCookies = jsonParse(cookiesString);
    if (rawCookies == null) {
      return {};
    }
    const cookies = {};
    for (const rawCookie of rawCookies) {
      const cookie2 = Cookie.fromJSON(rawCookie);
      if (cookie2 != null && cookie2.domain != null && cookie2.path != null) {
        cookies[cookie2.domain] ||= {};
        cookies[cookie2.domain][cookie2.path] ||= {};
        cookies[cookie2.domain][cookie2.path][cookie2.key] = cookie2;
      }
    }
    return cookies;
  }
  persist() {
    if (typeof localStorage === "undefined") {
      return;
    }
    const data = [];
    const {
      idx
    } = this.#memoryStore;
    for (const domain in idx) {
      for (const path in idx[domain]) {
        for (const key in idx[domain][path]) {
          data.push(idx[domain][path][key].toJSON());
        }
      }
    }
    localStorage.setItem(this.#storageKey, JSON.stringify(data));
  }
};
var cookieStore = new CookieStore();

// node_modules/msw/lib/shims/statuses.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
var require_codes = __commonJS({
  "node_modules/.pnpm/statuses@2.0.2/node_modules/statuses/codes.json"(exports, module) {
    module.exports = {
      "100": "Continue",
      "101": "Switching Protocols",
      "102": "Processing",
      "103": "Early Hints",
      "200": "OK",
      "201": "Created",
      "202": "Accepted",
      "203": "Non-Authoritative Information",
      "204": "No Content",
      "205": "Reset Content",
      "206": "Partial Content",
      "207": "Multi-Status",
      "208": "Already Reported",
      "226": "IM Used",
      "300": "Multiple Choices",
      "301": "Moved Permanently",
      "302": "Found",
      "303": "See Other",
      "304": "Not Modified",
      "305": "Use Proxy",
      "307": "Temporary Redirect",
      "308": "Permanent Redirect",
      "400": "Bad Request",
      "401": "Unauthorized",
      "402": "Payment Required",
      "403": "Forbidden",
      "404": "Not Found",
      "405": "Method Not Allowed",
      "406": "Not Acceptable",
      "407": "Proxy Authentication Required",
      "408": "Request Timeout",
      "409": "Conflict",
      "410": "Gone",
      "411": "Length Required",
      "412": "Precondition Failed",
      "413": "Payload Too Large",
      "414": "URI Too Long",
      "415": "Unsupported Media Type",
      "416": "Range Not Satisfiable",
      "417": "Expectation Failed",
      "418": "I'm a Teapot",
      "421": "Misdirected Request",
      "422": "Unprocessable Entity",
      "423": "Locked",
      "424": "Failed Dependency",
      "425": "Too Early",
      "426": "Upgrade Required",
      "428": "Precondition Required",
      "429": "Too Many Requests",
      "431": "Request Header Fields Too Large",
      "451": "Unavailable For Legal Reasons",
      "500": "Internal Server Error",
      "501": "Not Implemented",
      "502": "Bad Gateway",
      "503": "Service Unavailable",
      "504": "Gateway Timeout",
      "505": "HTTP Version Not Supported",
      "506": "Variant Also Negotiates",
      "507": "Insufficient Storage",
      "508": "Loop Detected",
      "509": "Bandwidth Limit Exceeded",
      "510": "Not Extended",
      "511": "Network Authentication Required"
    };
  }
});
var require_statuses = __commonJS({
  "node_modules/.pnpm/statuses@2.0.2/node_modules/statuses/index.js"(exports, module) {
    "use strict";
    var codes = require_codes();
    module.exports = status;
    status.message = codes;
    status.code = createMessageToStatusCodeMap(codes);
    status.codes = createStatusCodeList(codes);
    status.redirect = {
      300: true,
      301: true,
      302: true,
      303: true,
      305: true,
      307: true,
      308: true
    };
    status.empty = {
      204: true,
      205: true,
      304: true
    };
    status.retry = {
      502: true,
      503: true,
      504: true
    };
    function createMessageToStatusCodeMap(codes2) {
      var map = {};
      Object.keys(codes2).forEach(function forEachCode(code) {
        var message22 = codes2[code];
        var status2 = Number(code);
        map[message22.toLowerCase()] = status2;
      });
      return map;
    }
    function createStatusCodeList(codes2) {
      return Object.keys(codes2).map(function mapCode(code) {
        return Number(code);
      });
    }
    function getStatusCode(message22) {
      var msg = message22.toLowerCase();
      if (!Object.prototype.hasOwnProperty.call(status.code, msg)) {
        throw new Error('invalid status message: "' + message22 + '"');
      }
      return status.code[msg];
    }
    function getStatusMessage(code) {
      if (!Object.prototype.hasOwnProperty.call(status.message, code)) {
        throw new Error("invalid status code: " + code);
      }
      return status.message[code];
    }
    function status(code) {
      if (typeof code === "number") {
        return getStatusMessage(code);
      }
      if (typeof code !== "string") {
        throw new TypeError("code must be a number or string");
      }
      var n = parseInt(code, 10);
      if (!isNaN(n)) {
        return getStatusMessage(n);
      }
      return getStatusCode(code);
    }
  }
});
var allStatuses = __toESM(require_statuses(), 1);
var statuses = allStatuses.default || allStatuses;
var message = statuses.message;
var statuses_default = statuses;

// node_modules/headers-polyfill/lib/index.mjs
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJS2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames2(from)) if (!__hasOwnProp2.call(to, key) && key !== except) __defProp2(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
var require_set_cookie = __commonJS2({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString2(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString2);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e);
      }
      var cookie2 = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie2.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie2.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie2.secure = true;
        } else if (key === "httponly") {
          cookie2.httpOnly = true;
        } else if (key === "samesite") {
          cookie2.sameSite = value2;
        } else {
          cookie2[key] = value2;
        }
      });
      return cookie2;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return {
        name,
        value
      };
    }
    function parse4(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key) {
            return key.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options.silent) {
            console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString2).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString2).reduce(function(cookies2, str) {
          var cookie2 = parseString(str, options);
          cookies2[cookie2.name] = cookie2;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse4;
    module.exports.parse = parse4;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});
var import_set_cookie_parser = __toESM2(require_set_cookie());
var HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function normalizeHeaderName(name) {
  if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === "") {
    throw new TypeError("Invalid character in header field name");
  }
  return name.trim().toLowerCase();
}
var charCodesToRemove = [String.fromCharCode(10), String.fromCharCode(13), String.fromCharCode(9), String.fromCharCode(32)];
var HEADER_VALUE_REMOVE_REGEXP = new RegExp(`(^[${charCodesToRemove.join("")}]|$[${charCodesToRemove.join("")}])`, "g");
function normalizeHeaderValue(value) {
  const nextValue = value.replace(HEADER_VALUE_REMOVE_REGEXP, "");
  return nextValue;
}
function isValidHeaderName(value) {
  if (typeof value !== "string") {
    return false;
  }
  if (value.length === 0) {
    return false;
  }
  for (let i = 0; i < value.length; i++) {
    const character = value.charCodeAt(i);
    if (character > 127 || !isToken(character)) {
      return false;
    }
  }
  return true;
}
function isToken(value) {
  return ![127, 32, "(", ")", "<", ">", "@", ",", ";", ":", "\\", '"', "/", "[", "]", "?", "=", "{", "}"].includes(value);
}
function isValidHeaderValue(value) {
  if (typeof value !== "string") {
    return false;
  }
  if (value.trim() !== value) {
    return false;
  }
  for (let i = 0; i < value.length; i++) {
    const character = value.charCodeAt(i);
    if (
      // NUL.
      character === 0 || // HTTP newline bytes.
      character === 10 || character === 13
    ) {
      return false;
    }
  }
  return true;
}
var NORMALIZED_HEADERS = Symbol("normalizedHeaders");
var RAW_HEADER_NAMES = Symbol("rawHeaderNames");
var HEADER_VALUE_DELIMITER = ", ";
var _a;
var _b;
var _c;
var Headers2 = class _Headers {
  constructor(init) {
    this[_a] = {};
    this[_b] = /* @__PURE__ */ new Map();
    this[_c] = "Headers";
    if (["Headers", "HeadersPolyfill"].includes(init?.constructor.name) || init instanceof _Headers || typeof globalThis.Headers !== "undefined" && init instanceof globalThis.Headers) {
      const initialHeaders = init;
      initialHeaders.forEach((value, name) => {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(init)) {
      init.forEach(([name, value]) => {
        this.append(name, Array.isArray(value) ? value.join(HEADER_VALUE_DELIMITER) : value);
      });
    } else if (init) {
      Object.getOwnPropertyNames(init).forEach((name) => {
        const value = init[name];
        this.append(name, Array.isArray(value) ? value.join(HEADER_VALUE_DELIMITER) : value);
      });
    }
  }
  [(_a = NORMALIZED_HEADERS, _b = RAW_HEADER_NAMES, _c = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  *keys() {
    for (const [name] of this.entries()) {
      yield name;
    }
  }
  *values() {
    for (const [, value] of this.entries()) {
      yield value;
    }
  }
  *entries() {
    let sortedKeys = Object.keys(this[NORMALIZED_HEADERS]).sort((a, b) => a.localeCompare(b));
    for (const name of sortedKeys) {
      if (name === "set-cookie") {
        for (const value of this.getSetCookie()) {
          yield [name, value];
        }
      } else {
        yield [name, this.get(name)];
      }
    }
  }
  /**
   * Returns a boolean stating whether a `Headers` object contains a certain header.
   */
  has(name) {
    if (!isValidHeaderName(name)) {
      throw new TypeError(`Invalid header name "${name}"`);
    }
    return this[NORMALIZED_HEADERS].hasOwnProperty(normalizeHeaderName(name));
  }
  /**
   * Returns a `ByteString` sequence of all the values of a header with a given name.
   */
  get(name) {
    if (!isValidHeaderName(name)) {
      throw TypeError(`Invalid header name "${name}"`);
    }
    return this[NORMALIZED_HEADERS][normalizeHeaderName(name)] ?? null;
  }
  /**
   * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
   */
  set(name, value) {
    if (!isValidHeaderName(name) || !isValidHeaderValue(value)) {
      return;
    }
    const normalizedName = normalizeHeaderName(name);
    const normalizedValue = normalizeHeaderValue(value);
    this[NORMALIZED_HEADERS][normalizedName] = normalizeHeaderValue(normalizedValue);
    this[RAW_HEADER_NAMES].set(normalizedName, name);
  }
  /**
   * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
   */
  append(name, value) {
    if (!isValidHeaderName(name) || !isValidHeaderValue(value)) {
      return;
    }
    const normalizedName = normalizeHeaderName(name);
    const normalizedValue = normalizeHeaderValue(value);
    let resolvedValue = this.has(normalizedName) ? `${this.get(normalizedName)}, ${normalizedValue}` : normalizedValue;
    this.set(name, resolvedValue);
  }
  /**
   * Deletes a header from the `Headers` object.
   */
  delete(name) {
    if (!isValidHeaderName(name)) {
      return;
    }
    if (!this.has(name)) {
      return;
    }
    const normalizedName = normalizeHeaderName(name);
    delete this[NORMALIZED_HEADERS][normalizedName];
    this[RAW_HEADER_NAMES].delete(normalizedName);
  }
  /**
   * Traverses the `Headers` object,
   * calling the given callback for each header.
   */
  forEach(callback, thisArg) {
    for (const [name, value] of this.entries()) {
      callback.call(thisArg, value, name, this);
    }
  }
  /**
   * Returns an array containing the values
   * of all Set-Cookie headers associated
   * with a response
   */
  getSetCookie() {
    const setCookieHeader = this.get("set-cookie");
    if (setCookieHeader === null) {
      return [];
    }
    if (setCookieHeader === "") {
      return [""];
    }
    return (0, import_set_cookie_parser.splitCookiesString)(setCookieHeader);
  }
};

// node_modules/msw/lib/core/utils/HttpResponse/decorators.mjs
var {
  message: message2
} = statuses_default;
var kSetCookie = Symbol("kSetCookie");
function normalizeResponseInit(init = {}) {
  const status = init?.status || 200;
  const statusText = init?.statusText || message2[status] || "";
  const headers = new Headers(init?.headers);
  return __spreadProps(__spreadValues({}, init), {
    headers,
    status,
    statusText
  });
}
function decorateResponse(response, init) {
  if (init.type) {
    Object.defineProperty(response, "type", {
      value: init.type,
      enumerable: true,
      writable: false
    });
  }
  const responseCookies = init.headers.get("set-cookie");
  if (responseCookies) {
    Object.defineProperty(response, kSetCookie, {
      value: responseCookies,
      enumerable: false,
      writable: false
    });
    if (typeof document !== "undefined") {
      const responseCookiePairs = Headers2.prototype.getSetCookie.call(init.headers);
      for (const cookieString of responseCookiePairs) {
        document.cookie = cookieString;
      }
    }
  }
  return response;
}

// node_modules/msw/lib/core/utils/request/storeResponseCookies.mjs
function storeResponseCookies(request, response) {
  return __async(this, null, function* () {
    const responseCookies = Reflect.get(response, kSetCookie);
    if (responseCookies) {
      yield cookieStore.setCookie(responseCookies, request.url);
    }
  });
}

// node_modules/msw/lib/core/utils/handleRequest.mjs
function handleRequest(request, requestId, handlers2, options, emitter, handleRequestOptions) {
  return __async(this, null, function* () {
    emitter.emit("request:start", {
      request,
      requestId
    });
    if (request.headers.get("accept")?.includes("msw/passthrough")) {
      emitter.emit("request:end", {
        request,
        requestId
      });
      handleRequestOptions?.onPassthroughResponse?.(request);
      return;
    }
    const [lookupError, lookupResult] = yield until(() => {
      return executeHandlers({
        request,
        requestId,
        handlers: handlers2,
        resolutionContext: handleRequestOptions?.resolutionContext
      });
    });
    if (lookupError) {
      emitter.emit("unhandledException", {
        error: lookupError,
        request,
        requestId
      });
      throw lookupError;
    }
    if (!lookupResult) {
      yield onUnhandledRequest(request, options.onUnhandledRequest);
      emitter.emit("request:unhandled", {
        request,
        requestId
      });
      emitter.emit("request:end", {
        request,
        requestId
      });
      handleRequestOptions?.onPassthroughResponse?.(request);
      return;
    }
    const {
      response
    } = lookupResult;
    if (!response) {
      emitter.emit("request:end", {
        request,
        requestId
      });
      handleRequestOptions?.onPassthroughResponse?.(request);
      return;
    }
    if (response.status === 302 && response.headers.get("x-msw-intention") === "passthrough") {
      emitter.emit("request:end", {
        request,
        requestId
      });
      handleRequestOptions?.onPassthroughResponse?.(request);
      return;
    }
    yield storeResponseCookies(request, response);
    emitter.emit("request:match", {
      request,
      requestId
    });
    const requiredLookupResult = lookupResult;
    handleRequestOptions?.onMockedResponse?.(response, requiredLookupResult);
    emitter.emit("request:end", {
      request,
      requestId
    });
    return response;
  });
}

// node_modules/msw/lib/core/utils/toResponseInit.mjs
function toResponseInit(response) {
  return {
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries())
  };
}

// node_modules/msw/lib/core/utils/internal/isHandlerKind.mjs
function isHandlerKind(kind) {
  return (input) => {
    return input != null && typeof input === "object" && "__kind" in input && input.__kind === kind;
  };
}

// node_modules/strict-event-emitter/lib/index.mjs
var MemoryLeakError = class extends Error {
  constructor(emitter, type, count) {
    super(`Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`);
    this.emitter = emitter;
    this.type = type;
    this.count = count;
    this.name = "MaxListenersExceededWarning";
  }
};
var _Emitter = class {
  static listenerCount(emitter, eventName) {
    return emitter.listenerCount(eventName);
  }
  constructor() {
    this.events = /* @__PURE__ */ new Map();
    this.maxListeners = _Emitter.defaultMaxListeners;
    this.hasWarnedAboutPotentialMemoryLeak = false;
  }
  _emitInternalEvent(internalEventName, eventName, listener) {
    this.emit(internalEventName, ...[eventName, listener]);
  }
  _getListeners(eventName) {
    return Array.prototype.concat.apply([], this.events.get(eventName)) || [];
  }
  _removeListener(listeners, listener) {
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
    return [];
  }
  _wrapOnceListener(eventName, listener) {
    const onceListener = (...data) => {
      this.removeListener(eventName, onceListener);
      return listener.apply(this, data);
    };
    Object.defineProperty(onceListener, "name", {
      value: listener.name
    });
    return onceListener;
  }
  setMaxListeners(maxListeners) {
    this.maxListeners = maxListeners;
    return this;
  }
  /**
   * Returns the current max listener value for the `Emitter` which is
   * either set by `emitter.setMaxListeners(n)` or defaults to
   * `Emitter.defaultMaxListeners`.
   */
  getMaxListeners() {
    return this.maxListeners;
  }
  /**
   * Returns an array listing the events for which the emitter has registered listeners.
   * The values in the array will be strings or Symbols.
   */
  eventNames() {
    return Array.from(this.events.keys());
  }
  /**
   * Synchronously calls each of the listeners registered for the event named `eventName`,
   * in the order they were registered, passing the supplied arguments to each.
   * Returns `true` if the event has listeners, `false` otherwise.
   *
   * @example
   * const emitter = new Emitter<{ hello: [string] }>()
   * emitter.emit('hello', 'John')
   */
  emit(eventName, ...data) {
    const listeners = this._getListeners(eventName);
    listeners.forEach((listener) => {
      listener.apply(this, data);
    });
    return listeners.length > 0;
  }
  addListener(eventName, listener) {
    this._emitInternalEvent("newListener", eventName, listener);
    const nextListeners = this._getListeners(eventName).concat(listener);
    this.events.set(eventName, nextListeners);
    if (this.maxListeners > 0 && this.listenerCount(eventName) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
      this.hasWarnedAboutPotentialMemoryLeak = true;
      const memoryLeakWarning = new MemoryLeakError(this, eventName, this.listenerCount(eventName));
      console.warn(memoryLeakWarning);
    }
    return this;
  }
  on(eventName, listener) {
    return this.addListener(eventName, listener);
  }
  once(eventName, listener) {
    return this.addListener(eventName, this._wrapOnceListener(eventName, listener));
  }
  prependListener(eventName, listener) {
    const listeners = this._getListeners(eventName);
    if (listeners.length > 0) {
      const nextListeners = [listener].concat(listeners);
      this.events.set(eventName, nextListeners);
    } else {
      this.events.set(eventName, listeners.concat(listener));
    }
    return this;
  }
  prependOnceListener(eventName, listener) {
    return this.prependListener(eventName, this._wrapOnceListener(eventName, listener));
  }
  removeListener(eventName, listener) {
    const listeners = this._getListeners(eventName);
    if (listeners.length > 0) {
      this._removeListener(listeners, listener);
      this.events.set(eventName, listeners);
      this._emitInternalEvent("removeListener", eventName, listener);
    }
    return this;
  }
  /**
   * Alias for `emitter.removeListener()`.
   *
   * @example
   * emitter.off('hello', listener)
   */
  off(eventName, listener) {
    return this.removeListener(eventName, listener);
  }
  removeAllListeners(eventName) {
    if (eventName) {
      this.events.delete(eventName);
    } else {
      this.events.clear();
    }
    return this;
  }
  /**
   * Returns a copy of the array of listeners for the event named `eventName`.
   */
  listeners(eventName) {
    return Array.from(this._getListeners(eventName));
  }
  /**
   * Returns the number of listeners listening to the event named `eventName`.
   */
  listenerCount(eventName) {
    return this._getListeners(eventName).length;
  }
  rawListeners(eventName) {
    return this.listeners(eventName);
  }
};
var Emitter = _Emitter;
Emitter.defaultMaxListeners = 10;

// node_modules/msw/lib/core/utils/internal/pipeEvents.mjs
function pipeEvents(source, destination) {
  const rawEmit = source.emit;
  if (rawEmit._isPiped) {
    return;
  }
  const sourceEmit = function sourceEmit2(event, ...data) {
    destination.emit(event, ...data);
    return rawEmit.call(this, event, ...data);
  };
  sourceEmit._isPiped = true;
  source.emit = sourceEmit;
}

// node_modules/msw/lib/core/utils/internal/toReadonlyArray.mjs
function toReadonlyArray(source) {
  const clone = [...source];
  Object.freeze(clone);
  return clone;
}

// node_modules/msw/lib/core/utils/internal/Disposable.mjs
var Disposable = class {
  subscriptions = [];
  dispose() {
    let subscription;
    while (subscription = this.subscriptions.shift()) {
      subscription();
    }
  }
};

// node_modules/msw/lib/core/SetupApi.mjs
var InMemoryHandlersController = class {
  constructor(initialHandlers) {
    this.initialHandlers = initialHandlers;
    this.handlers = [...initialHandlers];
  }
  handlers;
  prepend(runtimeHandles) {
    this.handlers.unshift(...runtimeHandles);
  }
  reset(nextHandlers) {
    this.handlers = nextHandlers.length > 0 ? [...nextHandlers] : [...this.initialHandlers];
  }
  currentHandlers() {
    return this.handlers;
  }
};
var SetupApi = class extends Disposable {
  handlersController;
  emitter;
  publicEmitter;
  events;
  constructor(...initialHandlers) {
    super();
    invariant(this.validateHandlers(initialHandlers), devUtils.formatMessage(`Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?`));
    this.handlersController = new InMemoryHandlersController(initialHandlers);
    this.emitter = new Emitter();
    this.publicEmitter = new Emitter();
    pipeEvents(this.emitter, this.publicEmitter);
    this.events = this.createLifeCycleEvents();
    this.subscriptions.push(() => {
      this.emitter.removeAllListeners();
      this.publicEmitter.removeAllListeners();
    });
  }
  validateHandlers(handlers2) {
    return handlers2.every((handler) => !Array.isArray(handler));
  }
  use(...runtimeHandlers) {
    invariant(this.validateHandlers(runtimeHandlers), devUtils.formatMessage(`Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?`));
    this.handlersController.prepend(runtimeHandlers);
  }
  restoreHandlers() {
    this.handlersController.currentHandlers().forEach((handler) => {
      if ("isUsed" in handler) {
        handler.isUsed = false;
      }
    });
  }
  resetHandlers(...nextHandlers) {
    this.handlersController.reset(nextHandlers);
  }
  listHandlers() {
    return toReadonlyArray(this.handlersController.currentHandlers());
  }
  createLifeCycleEvents() {
    return {
      on: (...args) => {
        return this.publicEmitter.on(...args);
      },
      removeListener: (...args) => {
        return this.publicEmitter.removeListener(...args);
      },
      removeAllListeners: (...args) => {
        return this.publicEmitter.removeAllListeners(...args);
      }
    };
  }
};

// node_modules/@mswjs/interceptors/lib/browser/chunk-VYSDLBSS.mjs
function emitAsync(emitter, eventName, ...data) {
  return __async(this, null, function* () {
    const listeners = emitter.listeners(eventName);
    if (listeners.length === 0) {
      return;
    }
    for (const listener of listeners) {
      yield listener.apply(emitter, data);
    }
  });
}
function hasConfigurableGlobal(propertyName) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, propertyName);
  if (typeof descriptor === "undefined") {
    return false;
  }
  if (typeof descriptor.get === "function" && typeof descriptor.get() === "undefined") {
    return false;
  }
  if (typeof descriptor.get === "undefined" && descriptor.value == null) {
    return false;
  }
  if (typeof descriptor.set === "undefined" && !descriptor.configurable) {
    console.error(`[MSW] Failed to apply interceptor: the global \`${propertyName}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`);
    return false;
  }
  return true;
}

// node_modules/@open-draft/logger/lib/index.mjs
var __defProp3 = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp3(target, name, {
    get: all[name],
    enumerable: true
  });
};
var colors_exports = {};
__export(colors_exports, {
  blue: () => blue,
  gray: () => gray,
  green: () => green,
  red: () => red,
  yellow: () => yellow
});
function yellow(text) {
  return `\x1B[33m${text}\x1B[0m`;
}
function blue(text) {
  return `\x1B[34m${text}\x1B[0m`;
}
function gray(text) {
  return `\x1B[90m${text}\x1B[0m`;
}
function red(text) {
  return `\x1B[31m${text}\x1B[0m`;
}
function green(text) {
  return `\x1B[32m${text}\x1B[0m`;
}
var IS_NODE = isNodeProcess();
var Logger = class {
  constructor(name) {
    this.name = name;
    this.prefix = `[${this.name}]`;
    const LOGGER_NAME = getVariable("DEBUG");
    const LOGGER_LEVEL = getVariable("LOG_LEVEL");
    const isLoggingEnabled = LOGGER_NAME === "1" || LOGGER_NAME === "true" || typeof LOGGER_NAME !== "undefined" && this.name.startsWith(LOGGER_NAME);
    if (isLoggingEnabled) {
      this.debug = isDefinedAndNotEquals(LOGGER_LEVEL, "debug") ? noop : this.debug;
      this.info = isDefinedAndNotEquals(LOGGER_LEVEL, "info") ? noop : this.info;
      this.success = isDefinedAndNotEquals(LOGGER_LEVEL, "success") ? noop : this.success;
      this.warning = isDefinedAndNotEquals(LOGGER_LEVEL, "warning") ? noop : this.warning;
      this.error = isDefinedAndNotEquals(LOGGER_LEVEL, "error") ? noop : this.error;
    } else {
      this.info = noop;
      this.success = noop;
      this.warning = noop;
      this.error = noop;
      this.only = noop;
    }
  }
  prefix;
  extend(domain) {
    return new Logger(`${this.name}:${domain}`);
  }
  /**
   * Print a debug message.
   * @example
   * logger.debug('no duplicates found, creating a document...')
   */
  debug(message4, ...positionals) {
    this.logEntry({
      level: "debug",
      message: gray(message4),
      positionals,
      prefix: this.prefix,
      colors: {
        prefix: "gray"
      }
    });
  }
  /**
   * Print an info message.
   * @example
   * logger.info('start parsing...')
   */
  info(message4, ...positionals) {
    this.logEntry({
      level: "info",
      message: message4,
      positionals,
      prefix: this.prefix,
      colors: {
        prefix: "blue"
      }
    });
    const performance2 = new PerformanceEntry();
    return (message22, ...positionals2) => {
      performance2.measure();
      this.logEntry({
        level: "info",
        message: `${message22} ${gray(`${performance2.deltaTime}ms`)}`,
        positionals: positionals2,
        prefix: this.prefix,
        colors: {
          prefix: "blue"
        }
      });
    };
  }
  /**
   * Print a success message.
   * @example
   * logger.success('successfully created document')
   */
  success(message4, ...positionals) {
    this.logEntry({
      level: "info",
      message: message4,
      positionals,
      prefix: `\u2714 ${this.prefix}`,
      colors: {
        timestamp: "green",
        prefix: "green"
      }
    });
  }
  /**
   * Print a warning.
   * @example
   * logger.warning('found legacy document format')
   */
  warning(message4, ...positionals) {
    this.logEntry({
      level: "warning",
      message: message4,
      positionals,
      prefix: `\u26A0 ${this.prefix}`,
      colors: {
        timestamp: "yellow",
        prefix: "yellow"
      }
    });
  }
  /**
   * Print an error message.
   * @example
   * logger.error('something went wrong')
   */
  error(message4, ...positionals) {
    this.logEntry({
      level: "error",
      message: message4,
      positionals,
      prefix: `\u2716 ${this.prefix}`,
      colors: {
        timestamp: "red",
        prefix: "red"
      }
    });
  }
  /**
   * Execute the given callback only when the logging is enabled.
   * This is skipped in its entirety and has no runtime cost otherwise.
   * This executes regardless of the log level.
   * @example
   * logger.only(() => {
   *   logger.info('additional info')
   * })
   */
  only(callback) {
    callback();
  }
  createEntry(level, message4) {
    return {
      timestamp: /* @__PURE__ */ new Date(),
      level,
      message: message4
    };
  }
  logEntry(args) {
    const {
      level,
      message: message4,
      prefix,
      colors: customColors,
      positionals = []
    } = args;
    const entry = this.createEntry(level, message4);
    const timestampColor = customColors?.timestamp || "gray";
    const prefixColor = customColors?.prefix || "gray";
    const colorize = {
      timestamp: colors_exports[timestampColor],
      prefix: colors_exports[prefixColor]
    };
    const write = this.getWriter(level);
    write([colorize.timestamp(this.formatTimestamp(entry.timestamp))].concat(prefix != null ? colorize.prefix(prefix) : []).concat(serializeInput(message4)).join(" "), ...positionals.map(serializeInput));
  }
  formatTimestamp(timestamp) {
    return `${timestamp.toLocaleTimeString("en-GB")}:${timestamp.getMilliseconds()}`;
  }
  getWriter(level) {
    switch (level) {
      case "debug":
      case "success":
      case "info": {
        return log;
      }
      case "warning": {
        return warn2;
      }
      case "error": {
        return error2;
      }
    }
  }
};
var PerformanceEntry = class {
  startTime;
  endTime;
  deltaTime;
  constructor() {
    this.startTime = performance.now();
  }
  measure() {
    this.endTime = performance.now();
    const deltaTime = this.endTime - this.startTime;
    this.deltaTime = deltaTime.toFixed(2);
  }
};
var noop = () => void 0;
function log(message4, ...positionals) {
  if (IS_NODE) {
    process.stdout.write(format(message4, ...positionals) + "\n");
    return;
  }
  console.log(message4, ...positionals);
}
function warn2(message4, ...positionals) {
  if (IS_NODE) {
    process.stderr.write(format(message4, ...positionals) + "\n");
    return;
  }
  console.warn(message4, ...positionals);
}
function error2(message4, ...positionals) {
  if (IS_NODE) {
    process.stderr.write(format(message4, ...positionals) + "\n");
    return;
  }
  console.error(message4, ...positionals);
}
function getVariable(variableName) {
  if (IS_NODE) {
    return process.env[variableName];
  }
  return globalThis[variableName]?.toString();
}
function isDefinedAndNotEquals(value, expected) {
  return value !== void 0 && value !== expected;
}
function serializeInput(message4) {
  if (typeof message4 === "undefined") {
    return "undefined";
  }
  if (message4 === null) {
    return "null";
  }
  if (typeof message4 === "string") {
    return message4;
  }
  if (typeof message4 === "object") {
    return JSON.stringify(message4);
  }
  return message4.toString();
}

// node_modules/@mswjs/interceptors/lib/browser/chunk-Z5TSB3T6.mjs
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
function getGlobalSymbol(symbol) {
  return (
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/24587
    globalThis[symbol] || void 0
  );
}
function setGlobalSymbol(symbol, value) {
  globalThis[symbol] = value;
}
function deleteGlobalSymbol(symbol) {
  delete globalThis[symbol];
}
var Interceptor = class {
  constructor(symbol) {
    this.symbol = symbol;
    this.readyState = "INACTIVE";
    this.emitter = new Emitter();
    this.subscriptions = [];
    this.logger = new Logger(symbol.description);
    this.emitter.setMaxListeners(0);
    this.logger.info("constructing the interceptor...");
  }
  /**
   * Determine if this interceptor can be applied
   * in the current environment.
   */
  checkEnvironment() {
    return true;
  }
  /**
   * Apply this interceptor to the current process.
   * Returns an already running interceptor instance if it's present.
   */
  apply() {
    const logger = this.logger.extend("apply");
    logger.info("applying the interceptor...");
    if (this.readyState === "APPLIED") {
      logger.info("intercepted already applied!");
      return;
    }
    const shouldApply = this.checkEnvironment();
    if (!shouldApply) {
      logger.info("the interceptor cannot be applied in this environment!");
      return;
    }
    this.readyState = "APPLYING";
    const runningInstance = this.getInstance();
    if (runningInstance) {
      logger.info("found a running instance, reusing...");
      this.on = (event, listener) => {
        logger.info('proxying the "%s" listener', event);
        runningInstance.emitter.addListener(event, listener);
        this.subscriptions.push(() => {
          runningInstance.emitter.removeListener(event, listener);
          logger.info('removed proxied "%s" listener!', event);
        });
        return this;
      };
      this.readyState = "APPLIED";
      return;
    }
    logger.info("no running instance found, setting up a new instance...");
    this.setup();
    this.setInstance();
    this.readyState = "APPLIED";
  }
  /**
   * Setup the module augments and stubs necessary for this interceptor.
   * This method is not run if there's a running interceptor instance
   * to prevent instantiating an interceptor multiple times.
   */
  setup() {
  }
  /**
   * Listen to the interceptor's public events.
   */
  on(event, listener) {
    const logger = this.logger.extend("on");
    if (this.readyState === "DISPOSING" || this.readyState === "DISPOSED") {
      logger.info("cannot listen to events, already disposed!");
      return this;
    }
    logger.info('adding "%s" event listener:', event, listener);
    this.emitter.on(event, listener);
    return this;
  }
  once(event, listener) {
    this.emitter.once(event, listener);
    return this;
  }
  off(event, listener) {
    this.emitter.off(event, listener);
    return this;
  }
  removeAllListeners(event) {
    this.emitter.removeAllListeners(event);
    return this;
  }
  /**
   * Disposes of any side-effects this interceptor has introduced.
   */
  dispose() {
    const logger = this.logger.extend("dispose");
    if (this.readyState === "DISPOSED") {
      logger.info("cannot dispose, already disposed!");
      return;
    }
    logger.info("disposing the interceptor...");
    this.readyState = "DISPOSING";
    if (!this.getInstance()) {
      logger.info("no interceptors running, skipping dispose...");
      return;
    }
    this.clearInstance();
    logger.info("global symbol deleted:", getGlobalSymbol(this.symbol));
    if (this.subscriptions.length > 0) {
      logger.info("disposing of %d subscriptions...", this.subscriptions.length);
      for (const dispose of this.subscriptions) {
        dispose();
      }
      this.subscriptions = [];
      logger.info("disposed of all subscriptions!", this.subscriptions.length);
    }
    this.emitter.removeAllListeners();
    logger.info("destroyed the listener!");
    this.readyState = "DISPOSED";
  }
  getInstance() {
    var _a2;
    const instance = getGlobalSymbol(this.symbol);
    this.logger.info("retrieved global instance:", (_a2 = instance == null ? void 0 : instance.constructor) == null ? void 0 : _a2.name);
    return instance;
  }
  setInstance() {
    setGlobalSymbol(this.symbol, this);
    this.logger.info("set global instance!", this.symbol.description);
  }
  clearInstance() {
    deleteGlobalSymbol(this.symbol);
    this.logger.info("cleared global instance!", this.symbol.description);
  }
};
function createRequestId() {
  return Math.random().toString(16).slice(2);
}

// node_modules/@open-draft/deferred-promise/build/index.mjs
function createDeferredExecutor() {
  const executor = (resolve, reject) => {
    executor.state = "pending";
    executor.resolve = (data) => {
      if (executor.state !== "pending") {
        return;
      }
      executor.result = data;
      const onFulfilled = (value) => {
        executor.state = "fulfilled";
        return value;
      };
      return resolve(data instanceof Promise ? data : Promise.resolve(data).then(onFulfilled));
    };
    executor.reject = (reason) => {
      if (executor.state !== "pending") {
        return;
      }
      queueMicrotask(() => {
        executor.state = "rejected";
      });
      return reject(executor.rejectionReason = reason);
    };
  };
  return executor;
}
var DeferredPromise = class extends Promise {
  #executor;
  resolve;
  reject;
  constructor(executor = null) {
    const deferredExecutor = createDeferredExecutor();
    super((originalResolve, originalReject) => {
      deferredExecutor(originalResolve, originalReject);
      executor?.(deferredExecutor.resolve, deferredExecutor.reject);
    });
    this.#executor = deferredExecutor;
    this.resolve = this.#executor.resolve;
    this.reject = this.#executor.reject;
  }
  get state() {
    return this.#executor.state;
  }
  get rejectionReason() {
    return this.#executor.rejectionReason;
  }
  then(onFulfilled, onRejected) {
    return this.#decorate(super.then(onFulfilled, onRejected));
  }
  catch(onRejected) {
    return this.#decorate(super.catch(onRejected));
  }
  finally(onfinally) {
    return this.#decorate(super.finally(onfinally));
  }
  #decorate(promise) {
    return Object.defineProperties(promise, {
      resolve: {
        configurable: true,
        value: this.resolve
      },
      reject: {
        configurable: true,
        value: this.reject
      }
    });
  }
};

// node_modules/@mswjs/interceptors/lib/browser/interceptors/WebSocket/index.mjs
function bindEvent(target, event) {
  Object.defineProperties(event, {
    target: {
      value: target,
      enumerable: true,
      writable: true
    },
    currentTarget: {
      value: target,
      enumerable: true,
      writable: true
    }
  });
  return event;
}
var kCancelable = Symbol("kCancelable");
var kDefaultPrevented = Symbol("kDefaultPrevented");
var CancelableMessageEvent = class extends MessageEvent {
  constructor(type, init) {
    super(type, init);
    this[kCancelable] = !!init.cancelable;
    this[kDefaultPrevented] = false;
  }
  get cancelable() {
    return this[kCancelable];
  }
  set cancelable(nextCancelable) {
    this[kCancelable] = nextCancelable;
  }
  get defaultPrevented() {
    return this[kDefaultPrevented];
  }
  set defaultPrevented(nextDefaultPrevented) {
    this[kDefaultPrevented] = nextDefaultPrevented;
  }
  preventDefault() {
    if (this.cancelable && !this[kDefaultPrevented]) {
      this[kDefaultPrevented] = true;
    }
  }
};
var CloseEvent = class extends Event {
  constructor(type, init = {}) {
    super(type, init);
    this.code = init.code === void 0 ? 0 : init.code;
    this.reason = init.reason === void 0 ? "" : init.reason;
    this.wasClean = init.wasClean === void 0 ? false : init.wasClean;
  }
};
var CancelableCloseEvent = class extends CloseEvent {
  constructor(type, init = {}) {
    super(type, init);
    this[kCancelable] = !!init.cancelable;
    this[kDefaultPrevented] = false;
  }
  get cancelable() {
    return this[kCancelable];
  }
  set cancelable(nextCancelable) {
    this[kCancelable] = nextCancelable;
  }
  get defaultPrevented() {
    return this[kDefaultPrevented];
  }
  set defaultPrevented(nextDefaultPrevented) {
    this[kDefaultPrevented] = nextDefaultPrevented;
  }
  preventDefault() {
    if (this.cancelable && !this[kDefaultPrevented]) {
      this[kDefaultPrevented] = true;
    }
  }
};
var kEmitter = Symbol("kEmitter");
var kBoundListener = Symbol("kBoundListener");
var WebSocketClientConnection = class {
  constructor(socket, transport) {
    this.socket = socket;
    this.transport = transport;
    this.id = createRequestId();
    this.url = new URL(socket.url);
    this[kEmitter] = new EventTarget();
    this.transport.addEventListener("outgoing", (event) => {
      const message4 = bindEvent(this.socket, new CancelableMessageEvent("message", {
        data: event.data,
        origin: event.origin,
        cancelable: true
      }));
      this[kEmitter].dispatchEvent(message4);
      if (message4.defaultPrevented) {
        event.preventDefault();
      }
    });
    this.transport.addEventListener("close", (event) => {
      this[kEmitter].dispatchEvent(bindEvent(this.socket, new CloseEvent("close", event)));
    });
  }
  /**
   * Listen for the outgoing events from the connected WebSocket client.
   */
  addEventListener(type, listener, options) {
    if (!Reflect.has(listener, kBoundListener)) {
      const boundListener = listener.bind(this.socket);
      Object.defineProperty(listener, kBoundListener, {
        value: boundListener,
        enumerable: false,
        configurable: false
      });
    }
    this[kEmitter].addEventListener(type, Reflect.get(listener, kBoundListener), options);
  }
  /**
   * Removes the listener for the given event.
   */
  removeEventListener(event, listener, options) {
    this[kEmitter].removeEventListener(event, Reflect.get(listener, kBoundListener), options);
  }
  /**
   * Send data to the connected client.
   */
  send(data) {
    this.transport.send(data);
  }
  /**
   * Close the WebSocket connection.
   * @param {number} code A status code (see https://www.rfc-editor.org/rfc/rfc6455#section-7.4.1).
   * @param {string} reason A custom connection close reason.
   */
  close(code, reason) {
    this.transport.close(code, reason);
  }
};
var WEBSOCKET_CLOSE_CODE_RANGE_ERROR = "InvalidAccessError: close code out of user configurable range";
var kPassthroughPromise = Symbol("kPassthroughPromise");
var kOnSend = Symbol("kOnSend");
var kClose = Symbol("kClose");
var WebSocketOverride = class extends EventTarget {
  constructor(url, protocols) {
    super();
    this.CONNECTING = 0;
    this.OPEN = 1;
    this.CLOSING = 2;
    this.CLOSED = 3;
    this._onopen = null;
    this._onmessage = null;
    this._onerror = null;
    this._onclose = null;
    this.url = url.toString();
    this.protocol = "";
    this.extensions = "";
    this.binaryType = "blob";
    this.readyState = this.CONNECTING;
    this.bufferedAmount = 0;
    this[kPassthroughPromise] = new DeferredPromise();
    queueMicrotask(() => __async(this, null, function* () {
      if (yield this[kPassthroughPromise]) {
        return;
      }
      this.protocol = typeof protocols === "string" ? protocols : Array.isArray(protocols) && protocols.length > 0 ? protocols[0] : "";
      if (this.readyState === this.CONNECTING) {
        this.readyState = this.OPEN;
        this.dispatchEvent(bindEvent(this, new Event("open")));
      }
    }));
  }
  set onopen(listener) {
    this.removeEventListener("open", this._onopen);
    this._onopen = listener;
    if (listener !== null) {
      this.addEventListener("open", listener);
    }
  }
  get onopen() {
    return this._onopen;
  }
  set onmessage(listener) {
    this.removeEventListener("message", this._onmessage);
    this._onmessage = listener;
    if (listener !== null) {
      this.addEventListener("message", listener);
    }
  }
  get onmessage() {
    return this._onmessage;
  }
  set onerror(listener) {
    this.removeEventListener("error", this._onerror);
    this._onerror = listener;
    if (listener !== null) {
      this.addEventListener("error", listener);
    }
  }
  get onerror() {
    return this._onerror;
  }
  set onclose(listener) {
    this.removeEventListener("close", this._onclose);
    this._onclose = listener;
    if (listener !== null) {
      this.addEventListener("close", listener);
    }
  }
  get onclose() {
    return this._onclose;
  }
  /**
   * @see https://websockets.spec.whatwg.org/#ref-for-dom-websocket-send%E2%91%A0
   */
  send(data) {
    if (this.readyState === this.CONNECTING) {
      this.close();
      throw new DOMException("InvalidStateError");
    }
    if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) {
      return;
    }
    this.bufferedAmount += getDataSize(data);
    queueMicrotask(() => {
      var _a2;
      this.bufferedAmount = 0;
      (_a2 = this[kOnSend]) == null ? void 0 : _a2.call(this, data);
    });
  }
  close(code = 1e3, reason) {
    invariant(code, WEBSOCKET_CLOSE_CODE_RANGE_ERROR);
    invariant(code === 1e3 || code >= 3e3 && code <= 4999, WEBSOCKET_CLOSE_CODE_RANGE_ERROR);
    this[kClose](code, reason);
  }
  [(kPassthroughPromise, kOnSend, kClose)](code = 1e3, reason, wasClean = true) {
    if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) {
      return;
    }
    this.readyState = this.CLOSING;
    queueMicrotask(() => {
      this.readyState = this.CLOSED;
      this.dispatchEvent(bindEvent(this, new CloseEvent("close", {
        code,
        reason,
        wasClean
      })));
      this._onopen = null;
      this._onmessage = null;
      this._onerror = null;
      this._onclose = null;
    });
  }
  addEventListener(type, listener, options) {
    return super.addEventListener(type, listener, options);
  }
  removeEventListener(type, callback, options) {
    return super.removeEventListener(type, callback, options);
  }
};
WebSocketOverride.CONNECTING = 0;
WebSocketOverride.OPEN = 1;
WebSocketOverride.CLOSING = 2;
WebSocketOverride.CLOSED = 3;
function getDataSize(data) {
  if (typeof data === "string") {
    return data.length;
  }
  if (data instanceof Blob) {
    return data.size;
  }
  return data.byteLength;
}
var kEmitter2 = Symbol("kEmitter");
var kBoundListener2 = Symbol("kBoundListener");
var kSend = Symbol("kSend");
var WebSocketServerConnection = class {
  constructor(client, transport, createConnection) {
    this.client = client;
    this.transport = transport;
    this.createConnection = createConnection;
    this[kEmitter2] = new EventTarget();
    this.mockCloseController = new AbortController();
    this.realCloseController = new AbortController();
    this.transport.addEventListener("outgoing", (event) => {
      if (typeof this.realWebSocket === "undefined") {
        return;
      }
      queueMicrotask(() => {
        if (!event.defaultPrevented) {
          this[kSend](event.data);
        }
      });
    });
    this.transport.addEventListener("incoming", this.handleIncomingMessage.bind(this));
  }
  /**
   * The `WebSocket` instance connected to the original server.
   * Accessing this before calling `server.connect()` will throw.
   */
  get socket() {
    invariant(this.realWebSocket, 'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?');
    return this.realWebSocket;
  }
  /**
   * Open connection to the original WebSocket server.
   */
  connect() {
    invariant(!this.realWebSocket || this.realWebSocket.readyState !== WebSocket.OPEN, 'Failed to call "connect()" on the original WebSocket instance: the connection already open');
    const realWebSocket = this.createConnection();
    realWebSocket.binaryType = this.client.binaryType;
    realWebSocket.addEventListener("open", (event) => {
      this[kEmitter2].dispatchEvent(bindEvent(this.realWebSocket, new Event("open", event)));
    }, {
      once: true
    });
    realWebSocket.addEventListener("message", (event) => {
      this.transport.dispatchEvent(bindEvent(this.realWebSocket, new MessageEvent("incoming", {
        data: event.data,
        origin: event.origin
      })));
    });
    this.client.addEventListener("close", (event) => {
      this.handleMockClose(event);
    }, {
      signal: this.mockCloseController.signal
    });
    realWebSocket.addEventListener("close", (event) => {
      this.handleRealClose(event);
    }, {
      signal: this.realCloseController.signal
    });
    realWebSocket.addEventListener("error", () => {
      const errorEvent = bindEvent(realWebSocket, new Event("error", {
        cancelable: true
      }));
      this[kEmitter2].dispatchEvent(errorEvent);
      if (!errorEvent.defaultPrevented) {
        this.client.dispatchEvent(bindEvent(this.client, new Event("error")));
      }
    });
    this.realWebSocket = realWebSocket;
  }
  /**
   * Listen for the incoming events from the original WebSocket server.
   */
  addEventListener(event, listener, options) {
    if (!Reflect.has(listener, kBoundListener2)) {
      const boundListener = listener.bind(this.client);
      Object.defineProperty(listener, kBoundListener2, {
        value: boundListener,
        enumerable: false
      });
    }
    this[kEmitter2].addEventListener(event, Reflect.get(listener, kBoundListener2), options);
  }
  /**
   * Remove the listener for the given event.
   */
  removeEventListener(event, listener, options) {
    this[kEmitter2].removeEventListener(event, Reflect.get(listener, kBoundListener2), options);
  }
  /**
   * Send data to the original WebSocket server.
   * @example
   * server.send('hello')
   * server.send(new Blob(['hello']))
   * server.send(new TextEncoder().encode('hello'))
   */
  send(data) {
    this[kSend](data);
  }
  [(kEmitter2, kSend)](data) {
    const {
      realWebSocket
    } = this;
    invariant(realWebSocket, 'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?', this.client.url);
    if (realWebSocket.readyState === WebSocket.CLOSING || realWebSocket.readyState === WebSocket.CLOSED) {
      return;
    }
    if (realWebSocket.readyState === WebSocket.CONNECTING) {
      realWebSocket.addEventListener("open", () => {
        realWebSocket.send(data);
      }, {
        once: true
      });
      return;
    }
    realWebSocket.send(data);
  }
  /**
   * Close the actual server connection.
   */
  close() {
    const {
      realWebSocket
    } = this;
    invariant(realWebSocket, 'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?', this.client.url);
    this.realCloseController.abort();
    if (realWebSocket.readyState === WebSocket.CLOSING || realWebSocket.readyState === WebSocket.CLOSED) {
      return;
    }
    realWebSocket.close();
    queueMicrotask(() => {
      this[kEmitter2].dispatchEvent(bindEvent(this.realWebSocket, new CancelableCloseEvent("close", {
        /**
         * @note `server.close()` in the interceptor
         * always results in clean closures.
         */
        code: 1e3,
        cancelable: true
      })));
    });
  }
  handleIncomingMessage(event) {
    const messageEvent = bindEvent(event.target, new CancelableMessageEvent("message", {
      data: event.data,
      origin: event.origin,
      cancelable: true
    }));
    this[kEmitter2].dispatchEvent(messageEvent);
    if (!messageEvent.defaultPrevented) {
      this.client.dispatchEvent(bindEvent(
        /**
         * @note Bind the forwarded original server events
         * to the mock WebSocket instance so it would
         * dispatch them straight away.
         */
        this.client,
        // Clone the message event again to prevent
        // the "already being dispatched" exception.
        new MessageEvent("message", {
          data: event.data,
          origin: event.origin
        })
      ));
    }
  }
  handleMockClose(_event) {
    if (this.realWebSocket) {
      this.realWebSocket.close();
    }
  }
  handleRealClose(event) {
    this.mockCloseController.abort();
    const closeEvent = bindEvent(this.realWebSocket, new CancelableCloseEvent("close", {
      code: event.code,
      reason: event.reason,
      wasClean: event.wasClean,
      cancelable: true
    }));
    this[kEmitter2].dispatchEvent(closeEvent);
    if (!closeEvent.defaultPrevented) {
      this.client[kClose](event.code, event.reason);
    }
  }
};
var WebSocketClassTransport = class extends EventTarget {
  constructor(socket) {
    super();
    this.socket = socket;
    this.socket.addEventListener("close", (event) => {
      this.dispatchEvent(bindEvent(this.socket, new CloseEvent("close", event)));
    });
    this.socket[kOnSend] = (data) => {
      this.dispatchEvent(bindEvent(
        this.socket,
        // Dispatch this as cancelable because "client" connection
        // re-creates this message event (cannot dispatch the same event).
        new CancelableMessageEvent("outgoing", {
          data,
          origin: this.socket.url,
          cancelable: true
        })
      ));
    };
  }
  addEventListener(type, callback, options) {
    return super.addEventListener(type, callback, options);
  }
  dispatchEvent(event) {
    return super.dispatchEvent(event);
  }
  send(data) {
    queueMicrotask(() => {
      if (this.socket.readyState === this.socket.CLOSING || this.socket.readyState === this.socket.CLOSED) {
        return;
      }
      const dispatchEvent = () => {
        this.socket.dispatchEvent(bindEvent(
          /**
           * @note Setting this event's "target" to the
           * WebSocket override instance is important.
           * This way it can tell apart original incoming events
           * (must be forwarded to the transport) from the
           * mocked message events like the one below
           * (must be dispatched on the client instance).
           */
          this.socket,
          new MessageEvent("message", {
            data,
            origin: this.socket.url
          })
        ));
      };
      if (this.socket.readyState === this.socket.CONNECTING) {
        this.socket.addEventListener("open", () => {
          dispatchEvent();
        }, {
          once: true
        });
      } else {
        dispatchEvent();
      }
    });
  }
  close(code, reason) {
    this.socket[kClose](code, reason);
  }
};
var _WebSocketInterceptor = class extends Interceptor {
  constructor() {
    super(_WebSocketInterceptor.symbol);
  }
  checkEnvironment() {
    return hasConfigurableGlobal("WebSocket");
  }
  setup() {
    const originalWebSocketDescriptor = Object.getOwnPropertyDescriptor(globalThis, "WebSocket");
    const WebSocketProxy = new Proxy(globalThis.WebSocket, {
      construct: (target, args, newTarget) => {
        const [url, protocols] = args;
        const createConnection = () => {
          return Reflect.construct(target, args, newTarget);
        };
        const socket = new WebSocketOverride(url, protocols);
        const transport = new WebSocketClassTransport(socket);
        queueMicrotask(() => __async(this, null, function* () {
          try {
            const server = new WebSocketServerConnection(socket, transport, createConnection);
            const hasConnectionListeners = this.emitter.listenerCount("connection") > 0;
            yield emitAsync(this.emitter, "connection", {
              client: new WebSocketClientConnection(socket, transport),
              server,
              info: {
                protocols
              }
            });
            if (hasConnectionListeners) {
              socket[kPassthroughPromise].resolve(false);
            } else {
              socket[kPassthroughPromise].resolve(true);
              server.connect();
              server.addEventListener("open", () => {
                socket.dispatchEvent(bindEvent(socket, new Event("open")));
                if (server["realWebSocket"]) {
                  socket.protocol = server["realWebSocket"].protocol;
                }
              });
            }
          } catch (error4) {
            if (error4 instanceof Error) {
              socket.dispatchEvent(new Event("error"));
              if (socket.readyState !== WebSocket.CLOSING && socket.readyState !== WebSocket.CLOSED) {
                socket[kClose](1011, error4.message, false);
              }
              console.error(error4);
            }
          }
        }));
        return socket;
      }
    });
    Object.defineProperty(globalThis, "WebSocket", {
      value: WebSocketProxy,
      configurable: true
    });
    this.subscriptions.push(() => {
      Object.defineProperty(globalThis, "WebSocket", originalWebSocketDescriptor);
    });
  }
};
var WebSocketInterceptor = _WebSocketInterceptor;
WebSocketInterceptor.symbol = Symbol("websocket");

// node_modules/msw/lib/core/ws/webSocketInterceptor.mjs
var webSocketInterceptor = new WebSocketInterceptor();

// node_modules/msw/lib/core/ws/handleWebSocketEvent.mjs
function handleWebSocketEvent(options) {
  webSocketInterceptor.on("connection", (connection) => __async(this, null, function* () {
    const handlers2 = options.getHandlers().filter(isHandlerKind("EventHandler"));
    if (handlers2.length > 0) {
      options?.onMockedConnection(connection);
      yield Promise.all(handlers2.map((handler) => {
        return handler.run(connection);
      }));
      return;
    }
    const request = new Request(connection.client.url, {
      headers: {
        upgrade: "websocket",
        connection: "upgrade"
      }
    });
    yield onUnhandledRequest(request, options.getUnhandledRequestStrategy()).catch((error4) => {
      const errorEvent = new Event("error");
      Object.defineProperty(errorEvent, "cause", {
        enumerable: true,
        configurable: false,
        value: error4
      });
      connection.client.socket.dispatchEvent(errorEvent);
    });
    options?.onPassthroughConnection(connection);
    connection.server.connect();
  }));
}

// node_modules/msw/lib/core/utils/logging/getTimestamp.mjs
function getTimestamp(options) {
  const now = /* @__PURE__ */ new Date();
  const timestamp = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
  if (options?.milliseconds) {
    return `${timestamp}.${now.getMilliseconds().toString().padStart(3, "0")}`;
  }
  return timestamp;
}

// node_modules/msw/lib/core/ws/utils/getMessageLength.mjs
function getMessageLength(data) {
  if (data instanceof Blob) {
    return data.size;
  }
  if (isObject(data) && "byteLength" in data) {
    return data.byteLength;
  }
  return new Blob([data]).size;
}

// node_modules/msw/lib/core/ws/utils/truncateMessage.mjs
var MAX_LENGTH = 24;
function truncateMessage(message4) {
  if (message4.length <= MAX_LENGTH) {
    return message4;
  }
  return `${message4.slice(0, MAX_LENGTH)}\u2026`;
}

// node_modules/msw/lib/core/ws/utils/getPublicData.mjs
function getPublicData(data) {
  return __async(this, null, function* () {
    if (data instanceof Blob) {
      const text = yield data.text();
      return `Blob(${truncateMessage(text)})`;
    }
    if (isObject(data)) {
      const text = new TextDecoder().decode(data);
      return `ArrayBuffer(${truncateMessage(text)})`;
    }
    return truncateMessage(data);
  });
}

// node_modules/msw/lib/core/ws/utils/attachWebSocketLogger.mjs
var colors = {
  system: "#3b82f6",
  outgoing: "#22c55e",
  incoming: "#ef4444",
  mocked: "#ff6a33"
};
function attachWebSocketLogger(connection) {
  const {
    client,
    server
  } = connection;
  logConnectionOpen(client);
  client.addEventListener("message", (event) => {
    logOutgoingClientMessage(event);
  });
  client.addEventListener("close", (event) => {
    logConnectionClose(event);
  });
  client.socket.addEventListener("error", (event) => {
    logClientError(event);
  });
  client.send = new Proxy(client.send, {
    apply(target, thisArg, args) {
      const [data] = args;
      const messageEvent = new MessageEvent("message", {
        data
      });
      Object.defineProperties(messageEvent, {
        currentTarget: {
          enumerable: true,
          writable: false,
          value: client.socket
        },
        target: {
          enumerable: true,
          writable: false,
          value: client.socket
        }
      });
      queueMicrotask(() => {
        logIncomingMockedClientMessage(messageEvent);
      });
      return Reflect.apply(target, thisArg, args);
    }
  });
  server.addEventListener("open", () => {
    server.addEventListener("message", (event) => {
      logIncomingServerMessage(event);
    });
  }, {
    once: true
  });
  server.send = new Proxy(server.send, {
    apply(target, thisArg, args) {
      const [data] = args;
      const messageEvent = new MessageEvent("message", {
        data
      });
      Object.defineProperties(messageEvent, {
        currentTarget: {
          enumerable: true,
          writable: false,
          value: server.socket
        },
        target: {
          enumerable: true,
          writable: false,
          value: server.socket
        }
      });
      logOutgoingMockedClientMessage(messageEvent);
      return Reflect.apply(target, thisArg, args);
    }
  });
}
function logConnectionOpen(client) {
  const publicUrl = toPublicUrl(client.url);
  console.groupCollapsed(devUtils.formatMessage(`${getTimestamp()} %c\u25B6%c ${publicUrl}`), `color:${colors.system}`, "color:inherit");
  console.log("Client:", client.socket);
  console.groupEnd();
}
function logConnectionClose(event) {
  const target = event.target;
  const publicUrl = toPublicUrl(target.url);
  console.groupCollapsed(devUtils.formatMessage(`${getTimestamp({
    milliseconds: true
  })} %c\u25A0%c ${publicUrl}`), `color:${colors.system}`, "color:inherit");
  console.log(event);
  console.groupEnd();
}
function logClientError(event) {
  const socket = event.target;
  const publicUrl = toPublicUrl(socket.url);
  console.groupCollapsed(devUtils.formatMessage(`${getTimestamp({
    milliseconds: true
  })} %c\xD7%c ${publicUrl}`), `color:${colors.system}`, "color:inherit");
  console.log(event);
  console.groupEnd();
}
function logOutgoingClientMessage(event) {
  return __async(this, null, function* () {
    const byteLength = getMessageLength(event.data);
    const publicData = yield getPublicData(event.data);
    const arrow = event.defaultPrevented ? "\u21E1" : "\u2B06";
    console.groupCollapsed(devUtils.formatMessage(`${getTimestamp({
      milliseconds: true
    })} %c${arrow}%c ${publicData} %c${byteLength}%c`), `color:${colors.outgoing}`, "color:inherit", "color:gray;font-weight:normal", "color:inherit;font-weight:inherit");
    console.log(event);
    console.groupEnd();
  });
}
function logOutgoingMockedClientMessage(event) {
  return __async(this, null, function* () {
    const byteLength = getMessageLength(event.data);
    const publicData = yield getPublicData(event.data);
    console.groupCollapsed(devUtils.formatMessage(`${getTimestamp({
      milliseconds: true
    })} %c\u2B06%c ${publicData} %c${byteLength}%c`), `color:${colors.mocked}`, "color:inherit", "color:gray;font-weight:normal", "color:inherit;font-weight:inherit");
    console.log(event);
    console.groupEnd();
  });
}
function logIncomingMockedClientMessage(event) {
  return __async(this, null, function* () {
    const byteLength = getMessageLength(event.data);
    const publicData = yield getPublicData(event.data);
    console.groupCollapsed(devUtils.formatMessage(`${getTimestamp({
      milliseconds: true
    })} %c\u2B07%c ${publicData} %c${byteLength}%c`), `color:${colors.mocked}`, "color:inherit", "color:gray;font-weight:normal", "color:inherit;font-weight:inherit");
    console.log(event);
    console.groupEnd();
  });
}
function logIncomingServerMessage(event) {
  return __async(this, null, function* () {
    const byteLength = getMessageLength(event.data);
    const publicData = yield getPublicData(event.data);
    const arrow = event.defaultPrevented ? "\u21E3" : "\u2B07";
    console.groupCollapsed(devUtils.formatMessage(`${getTimestamp({
      milliseconds: true
    })} %c${arrow}%c ${publicData} %c${byteLength}%c`), `color:${colors.incoming}`, "color:inherit", "color:gray;font-weight:normal", "color:inherit;font-weight:inherit");
    console.log(event);
    console.groupEnd();
  });
}

// node_modules/msw/lib/browser/index.mjs
var POSITIONALS_EXP2 = /(%?)(%([sdijo]))/g;
function serializePositional2(positional, flag) {
  switch (flag) {
    case "s":
      return positional;
    case "d":
    case "i":
      return Number(positional);
    case "j":
      return JSON.stringify(positional);
    case "o": {
      if (typeof positional === "string") {
        return positional;
      }
      const json = JSON.stringify(positional);
      if (json === "{}" || json === "[]" || /^\[object .+?\]$/.test(json)) {
        return positional;
      }
      return json;
    }
  }
}
function format2(message4, ...positionals) {
  if (positionals.length === 0) {
    return message4;
  }
  let positionalIndex = 0;
  let formattedMessage = message4.replace(POSITIONALS_EXP2, (match2, isEscaped, _, flag) => {
    const positional = positionals[positionalIndex];
    const value = serializePositional2(positional, flag);
    if (!isEscaped) {
      positionalIndex++;
      return value;
    }
    return match2;
  });
  if (positionalIndex < positionals.length) {
    formattedMessage += ` ${positionals.slice(positionalIndex).join(" ")}`;
  }
  formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
  return formattedMessage;
}
var STACK_FRAMES_TO_IGNORE2 = 2;
function cleanErrorStack2(error22) {
  if (!error22.stack) {
    return;
  }
  const nextStack = error22.stack.split("\n");
  nextStack.splice(1, STACK_FRAMES_TO_IGNORE2);
  error22.stack = nextStack.join("\n");
}
var InvariantError2 = class extends Error {
  constructor(message4, ...positionals) {
    super(message4);
    this.message = message4;
    this.name = "Invariant Violation";
    this.message = format2(message4, ...positionals);
    cleanErrorStack2(this);
  }
};
var invariant2 = (predicate, message4, ...positionals) => {
  if (!predicate) {
    throw new InvariantError2(message4, ...positionals);
  }
};
invariant2.as = (ErrorConstructor, predicate, message4, ...positionals) => {
  if (!predicate) {
    const formatMessage2 = positionals.length === 0 ? message4 : format2(message4, ...positionals);
    let error22;
    try {
      error22 = Reflect.construct(ErrorConstructor, [formatMessage2]);
    } catch (err) {
      error22 = ErrorConstructor(formatMessage2);
    }
    throw error22;
  }
};
function isNodeProcess2() {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return true;
  }
  if (typeof process !== "undefined") {
    const type = process.type;
    if (type === "renderer" || type === "worker") {
      return false;
    }
    return !!(process.versions && process.versions.node);
  }
  return false;
}
function createDeferredExecutor2() {
  const executor = (resolve, reject) => {
    executor.state = "pending";
    executor.resolve = (data) => {
      if (executor.state !== "pending") {
        return;
      }
      executor.result = data;
      const onFulfilled = (value) => {
        executor.state = "fulfilled";
        return value;
      };
      return resolve(data instanceof Promise ? data : Promise.resolve(data).then(onFulfilled));
    };
    executor.reject = (reason) => {
      if (executor.state !== "pending") {
        return;
      }
      queueMicrotask(() => {
        executor.state = "rejected";
      });
      return reject(executor.rejectionReason = reason);
    };
  };
  return executor;
}
var DeferredPromise2 = class extends Promise {
  #executor;
  resolve;
  reject;
  constructor(executor = null) {
    const deferredExecutor = createDeferredExecutor2();
    super((originalResolve, originalReject) => {
      deferredExecutor(originalResolve, originalReject);
      executor?.(deferredExecutor.resolve, deferredExecutor.reject);
    });
    this.#executor = deferredExecutor;
    this.resolve = this.#executor.resolve;
    this.reject = this.#executor.reject;
  }
  get state() {
    return this.#executor.state;
  }
  get rejectionReason() {
    return this.#executor.rejectionReason;
  }
  then(onFulfilled, onRejected) {
    return this.#decorate(super.then(onFulfilled, onRejected));
  }
  catch(onRejected) {
    return this.#decorate(super.catch(onRejected));
  }
  finally(onfinally) {
    return this.#decorate(super.finally(onfinally));
  }
  #decorate(promise) {
    return Object.defineProperties(promise, {
      resolve: {
        configurable: true,
        value: this.resolve
      },
      reject: {
        configurable: true,
        value: this.reject
      }
    });
  }
};
var DEFAULT_START_OPTIONS = {
  serviceWorker: {
    url: "/mockServiceWorker.js",
    options: null
  },
  quiet: false,
  waitUntilReady: true,
  onUnhandledRequest: "warn",
  findWorker(scriptURL, mockServiceWorkerUrl) {
    return scriptURL === mockServiceWorkerUrl;
  }
};
function until2(callback) {
  return __async(this, null, function* () {
    try {
      return [null, yield callback().catch((error22) => {
        throw error22;
      })];
    } catch (error22) {
      return [error22, null];
    }
  });
}
function getAbsoluteWorkerUrl(workerUrl) {
  return new URL(workerUrl, location.href).href;
}
function getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker) {
  const allStates = [registration.active, registration.installing, registration.waiting];
  const relevantStates = allStates.filter((state) => {
    return state != null;
  });
  const worker2 = relevantStates.find((worker22) => {
    return findWorker(worker22.scriptURL, absoluteWorkerUrl);
  });
  return worker2 || null;
}
var getWorkerInstance = (_0, ..._1) => __async(void 0, [_0, ..._1], function* (url, options = {}, findWorker) {
  const absoluteWorkerUrl = getAbsoluteWorkerUrl(url);
  const mockRegistrations = yield navigator.serviceWorker.getRegistrations().then((registrations) => registrations.filter((registration) => getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker)));
  if (!navigator.serviceWorker.controller && mockRegistrations.length > 0) {
    location.reload();
  }
  const [existingRegistration] = mockRegistrations;
  if (existingRegistration) {
    existingRegistration.update();
    return [getWorkerByRegistration(existingRegistration, absoluteWorkerUrl, findWorker), existingRegistration];
  }
  const [registrationError, registrationResult] = yield until2(() => __async(void 0, null, function* () {
    const registration = yield navigator.serviceWorker.register(url, options);
    return [
      // Compare existing worker registration by its worker URL,
      // to prevent irrelevant workers to resolve here (such as Codesandbox worker).
      getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker),
      registration
    ];
  }));
  if (registrationError) {
    const isWorkerMissing = registrationError.message.includes("(404)");
    if (isWorkerMissing) {
      const scopeUrl = new URL(options?.scope || "/", location.href);
      throw new Error(devUtils.formatMessage(`Failed to register a Service Worker for scope ('${scopeUrl.href}') with script ('${absoluteWorkerUrl}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`));
    }
    throw new Error(devUtils.formatMessage("Failed to register the Service Worker:\n\n%s", registrationError.message));
  }
  return registrationResult;
});
function printStartMessage(args = {}) {
  if (args.quiet) {
    return;
  }
  const message4 = args.message || "Mocking enabled.";
  console.groupCollapsed(`%c${devUtils.formatMessage(message4)}`, "color:orangered;font-weight:bold;");
  console.log("%cDocumentation: %chttps://mswjs.io/docs", "font-weight:bold", "font-weight:normal");
  console.log("Found an issue? https://github.com/mswjs/msw/issues");
  if (args.workerUrl) {
    console.log("Worker script URL:", args.workerUrl);
  }
  if (args.workerScope) {
    console.log("Worker scope:", args.workerScope);
  }
  if (args.client) {
    console.log("Client ID: %s (%s)", args.client.id, args.client.frameType);
  }
  console.groupEnd();
}
function enableMocking(context, options) {
  const mockingEnabledPromise = new DeferredPromise2();
  context.workerChannel.postMessage("MOCK_ACTIVATE");
  context.workerChannel.once("MOCKING_ENABLED", (event) => __async(this, null, function* () {
    context.isMockingEnabled = true;
    const worker2 = yield context.workerPromise;
    printStartMessage({
      quiet: options.quiet,
      workerScope: context.registration?.scope,
      workerUrl: worker2.scriptURL,
      client: event.data.client
    });
    mockingEnabledPromise.resolve(true);
  }));
  return mockingEnabledPromise;
}
function pruneGetRequestBody(request) {
  if (["HEAD", "GET"].includes(request.method)) {
    return void 0;
  }
  return request.body;
}
function deserializeRequest(serializedRequest) {
  return new Request(serializedRequest.url, __spreadProps(__spreadValues({}, serializedRequest), {
    body: pruneGetRequestBody(serializedRequest)
  }));
}
function supportsServiceWorker() {
  return typeof navigator !== "undefined" && "serviceWorker" in navigator && typeof location !== "undefined" && location.protocol !== "file:";
}
function supportsReadableStreamTransfer() {
  try {
    const stream = new ReadableStream({
      start: (controller) => controller.close()
    });
    const message4 = new MessageChannel();
    message4.port1.postMessage(stream, [stream]);
    return true;
  } catch {
    return false;
  }
}
var SUPPORTS_READABLE_STREAM_TRANSFER = supportsReadableStreamTransfer();
var createRequestListener = (context, options) => {
  return (event) => __async(void 0, null, function* () {
    if (!context.isMockingEnabled && context.workerStoppedAt && event.data.interceptedAt > context.workerStoppedAt) {
      event.postMessage("PASSTHROUGH");
      return;
    }
    const requestId = event.data.id;
    const request = deserializeRequest(event.data);
    const requestCloneForLogs = request.clone();
    const requestClone = request.clone();
    RequestHandler.cache.set(request, requestClone);
    try {
      let _a2;
      yield handleRequest(request, requestId, context.getRequestHandlers().filter(isHandlerKind("RequestHandler")), options, context.emitter, {
        onPassthroughResponse() {
          event.postMessage("PASSTHROUGH");
        },
        onMockedResponse(_0, _1) {
          return __async(this, arguments, function* (response, {
            handler,
            parsedResult
          }) {
            const responseClone = response.clone();
            const responseCloneForLogs = response.clone();
            const responseInit = toResponseInit(response);
            if (SUPPORTS_READABLE_STREAM_TRANSFER) {
              const responseStreamOrNull = response.body;
              event.postMessage("MOCK_RESPONSE", __spreadProps(__spreadValues({}, responseInit), {
                body: responseStreamOrNull
              }), responseStreamOrNull ? [responseStreamOrNull] : void 0);
            } else {
              const responseBufferOrNull = response.body === null ? null : yield responseClone.arrayBuffer();
              event.postMessage("MOCK_RESPONSE", __spreadProps(__spreadValues({}, responseInit), {
                body: responseBufferOrNull
              }));
            }
            if (!options.quiet) {
              context.emitter.once("response:mocked", () => {
                handler.log({
                  request: requestCloneForLogs,
                  response: responseCloneForLogs,
                  parsedResult
                });
              });
            }
          });
        }
      });
    } catch (error22) {
      if (error22 instanceof Error) {
        devUtils.error(`Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/http/mocking-responses/error-responses`, request.method, request.url, error22.stack ?? error22);
        event.postMessage("MOCK_RESPONSE", {
          status: 500,
          statusText: "Request Handler Error",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: error22.name,
            message: error22.message,
            stack: error22.stack
          })
        });
      }
    }
  });
};
function checkWorkerIntegrity(context) {
  const integrityCheckPromise = new DeferredPromise2();
  context.workerChannel.postMessage("INTEGRITY_CHECK_REQUEST");
  context.workerChannel.once("INTEGRITY_CHECK_RESPONSE", (event) => {
    const {
      checksum,
      packageVersion
    } = event.data;
    if (checksum !== "4db4a41e972cec1b64cc569c66952d82") {
      devUtils.warn(`The currently registered Service Worker has been generated by a different version of MSW (${packageVersion}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  \u2022 npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`);
    }
    integrityCheckPromise.resolve();
  });
  return integrityCheckPromise;
}
var encoder = new TextEncoder();
function encodeBuffer(text) {
  return encoder.encode(text);
}
function decodeBuffer(buffer, encoding) {
  const decoder = new TextDecoder(encoding);
  return decoder.decode(buffer);
}
function toArrayBuffer(array) {
  return array.buffer.slice(array.byteOffset, array.byteOffset + array.byteLength);
}
var __defProp4 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all) __defProp4(target, name, {
    get: all[name],
    enumerable: true
  });
};
var colors_exports2 = {};
__export2(colors_exports2, {
  blue: () => blue2,
  gray: () => gray2,
  green: () => green2,
  red: () => red2,
  yellow: () => yellow2
});
function yellow2(text) {
  return `\x1B[33m${text}\x1B[0m`;
}
function blue2(text) {
  return `\x1B[34m${text}\x1B[0m`;
}
function gray2(text) {
  return `\x1B[90m${text}\x1B[0m`;
}
function red2(text) {
  return `\x1B[31m${text}\x1B[0m`;
}
function green2(text) {
  return `\x1B[32m${text}\x1B[0m`;
}
var IS_NODE2 = isNodeProcess2();
var Logger2 = class {
  constructor(name) {
    this.name = name;
    this.prefix = `[${this.name}]`;
    const LOGGER_NAME = getVariable2("DEBUG");
    const LOGGER_LEVEL = getVariable2("LOG_LEVEL");
    const isLoggingEnabled = LOGGER_NAME === "1" || LOGGER_NAME === "true" || typeof LOGGER_NAME !== "undefined" && this.name.startsWith(LOGGER_NAME);
    if (isLoggingEnabled) {
      this.debug = isDefinedAndNotEquals2(LOGGER_LEVEL, "debug") ? noop2 : this.debug;
      this.info = isDefinedAndNotEquals2(LOGGER_LEVEL, "info") ? noop2 : this.info;
      this.success = isDefinedAndNotEquals2(LOGGER_LEVEL, "success") ? noop2 : this.success;
      this.warning = isDefinedAndNotEquals2(LOGGER_LEVEL, "warning") ? noop2 : this.warning;
      this.error = isDefinedAndNotEquals2(LOGGER_LEVEL, "error") ? noop2 : this.error;
    } else {
      this.info = noop2;
      this.success = noop2;
      this.warning = noop2;
      this.error = noop2;
      this.only = noop2;
    }
  }
  prefix;
  extend(domain) {
    return new Logger2(`${this.name}:${domain}`);
  }
  /**
   * Print a debug message.
   * @example
   * logger.debug('no duplicates found, creating a document...')
   */
  debug(message4, ...positionals) {
    this.logEntry({
      level: "debug",
      message: gray2(message4),
      positionals,
      prefix: this.prefix,
      colors: {
        prefix: "gray"
      }
    });
  }
  /**
   * Print an info message.
   * @example
   * logger.info('start parsing...')
   */
  info(message4, ...positionals) {
    this.logEntry({
      level: "info",
      message: message4,
      positionals,
      prefix: this.prefix,
      colors: {
        prefix: "blue"
      }
    });
    const performance2 = new PerformanceEntry2();
    return (message22, ...positionals2) => {
      performance2.measure();
      this.logEntry({
        level: "info",
        message: `${message22} ${gray2(`${performance2.deltaTime}ms`)}`,
        positionals: positionals2,
        prefix: this.prefix,
        colors: {
          prefix: "blue"
        }
      });
    };
  }
  /**
   * Print a success message.
   * @example
   * logger.success('successfully created document')
   */
  success(message4, ...positionals) {
    this.logEntry({
      level: "info",
      message: message4,
      positionals,
      prefix: `\u2714 ${this.prefix}`,
      colors: {
        timestamp: "green",
        prefix: "green"
      }
    });
  }
  /**
   * Print a warning.
   * @example
   * logger.warning('found legacy document format')
   */
  warning(message4, ...positionals) {
    this.logEntry({
      level: "warning",
      message: message4,
      positionals,
      prefix: `\u26A0 ${this.prefix}`,
      colors: {
        timestamp: "yellow",
        prefix: "yellow"
      }
    });
  }
  /**
   * Print an error message.
   * @example
   * logger.error('something went wrong')
   */
  error(message4, ...positionals) {
    this.logEntry({
      level: "error",
      message: message4,
      positionals,
      prefix: `\u2716 ${this.prefix}`,
      colors: {
        timestamp: "red",
        prefix: "red"
      }
    });
  }
  /**
   * Execute the given callback only when the logging is enabled.
   * This is skipped in its entirety and has no runtime cost otherwise.
   * This executes regardless of the log level.
   * @example
   * logger.only(() => {
   *   logger.info('additional info')
   * })
   */
  only(callback) {
    callback();
  }
  createEntry(level, message4) {
    return {
      timestamp: /* @__PURE__ */ new Date(),
      level,
      message: message4
    };
  }
  logEntry(args) {
    const {
      level,
      message: message4,
      prefix,
      colors: customColors,
      positionals = []
    } = args;
    const entry = this.createEntry(level, message4);
    const timestampColor = customColors?.timestamp || "gray";
    const prefixColor = customColors?.prefix || "gray";
    const colorize = {
      timestamp: colors_exports2[timestampColor],
      prefix: colors_exports2[prefixColor]
    };
    const write = this.getWriter(level);
    write([colorize.timestamp(this.formatTimestamp(entry.timestamp))].concat(prefix != null ? colorize.prefix(prefix) : []).concat(serializeInput2(message4)).join(" "), ...positionals.map(serializeInput2));
  }
  formatTimestamp(timestamp) {
    return `${timestamp.toLocaleTimeString("en-GB")}:${timestamp.getMilliseconds()}`;
  }
  getWriter(level) {
    switch (level) {
      case "debug":
      case "success":
      case "info": {
        return log2;
      }
      case "warning": {
        return warn3;
      }
      case "error": {
        return error3;
      }
    }
  }
};
var PerformanceEntry2 = class {
  startTime;
  endTime;
  deltaTime;
  constructor() {
    this.startTime = performance.now();
  }
  measure() {
    this.endTime = performance.now();
    const deltaTime = this.endTime - this.startTime;
    this.deltaTime = deltaTime.toFixed(2);
  }
};
var noop2 = () => void 0;
function log2(message4, ...positionals) {
  if (IS_NODE2) {
    process.stdout.write(format2(message4, ...positionals) + "\n");
    return;
  }
  console.log(message4, ...positionals);
}
function warn3(message4, ...positionals) {
  if (IS_NODE2) {
    process.stderr.write(format2(message4, ...positionals) + "\n");
    return;
  }
  console.warn(message4, ...positionals);
}
function error3(message4, ...positionals) {
  if (IS_NODE2) {
    process.stderr.write(format2(message4, ...positionals) + "\n");
    return;
  }
  console.error(message4, ...positionals);
}
function getVariable2(variableName) {
  if (IS_NODE2) {
    return process.env[variableName];
  }
  return globalThis[variableName]?.toString();
}
function isDefinedAndNotEquals2(value, expected) {
  return value !== void 0 && value !== expected;
}
function serializeInput2(message4) {
  if (typeof message4 === "undefined") {
    return "undefined";
  }
  if (message4 === null) {
    return "null";
  }
  if (typeof message4 === "string") {
    return message4;
  }
  if (typeof message4 === "object") {
    return JSON.stringify(message4);
  }
  return message4.toString();
}
var MemoryLeakError2 = class extends Error {
  constructor(emitter, type, count) {
    super(`Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`);
    this.emitter = emitter;
    this.type = type;
    this.count = count;
    this.name = "MaxListenersExceededWarning";
  }
};
var _Emitter2 = class {
  static listenerCount(emitter, eventName) {
    return emitter.listenerCount(eventName);
  }
  constructor() {
    this.events = /* @__PURE__ */ new Map();
    this.maxListeners = _Emitter2.defaultMaxListeners;
    this.hasWarnedAboutPotentialMemoryLeak = false;
  }
  _emitInternalEvent(internalEventName, eventName, listener) {
    this.emit(internalEventName, ...[eventName, listener]);
  }
  _getListeners(eventName) {
    return Array.prototype.concat.apply([], this.events.get(eventName)) || [];
  }
  _removeListener(listeners, listener) {
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
    return [];
  }
  _wrapOnceListener(eventName, listener) {
    const onceListener = (...data) => {
      this.removeListener(eventName, onceListener);
      return listener.apply(this, data);
    };
    Object.defineProperty(onceListener, "name", {
      value: listener.name
    });
    return onceListener;
  }
  setMaxListeners(maxListeners) {
    this.maxListeners = maxListeners;
    return this;
  }
  /**
   * Returns the current max listener value for the `Emitter` which is
   * either set by `emitter.setMaxListeners(n)` or defaults to
   * `Emitter.defaultMaxListeners`.
   */
  getMaxListeners() {
    return this.maxListeners;
  }
  /**
   * Returns an array listing the events for which the emitter has registered listeners.
   * The values in the array will be strings or Symbols.
   */
  eventNames() {
    return Array.from(this.events.keys());
  }
  /**
   * Synchronously calls each of the listeners registered for the event named `eventName`,
   * in the order they were registered, passing the supplied arguments to each.
   * Returns `true` if the event has listeners, `false` otherwise.
   *
   * @example
   * const emitter = new Emitter<{ hello: [string] }>()
   * emitter.emit('hello', 'John')
   */
  emit(eventName, ...data) {
    const listeners = this._getListeners(eventName);
    listeners.forEach((listener) => {
      listener.apply(this, data);
    });
    return listeners.length > 0;
  }
  addListener(eventName, listener) {
    this._emitInternalEvent("newListener", eventName, listener);
    const nextListeners = this._getListeners(eventName).concat(listener);
    this.events.set(eventName, nextListeners);
    if (this.maxListeners > 0 && this.listenerCount(eventName) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
      this.hasWarnedAboutPotentialMemoryLeak = true;
      const memoryLeakWarning = new MemoryLeakError2(this, eventName, this.listenerCount(eventName));
      console.warn(memoryLeakWarning);
    }
    return this;
  }
  on(eventName, listener) {
    return this.addListener(eventName, listener);
  }
  once(eventName, listener) {
    return this.addListener(eventName, this._wrapOnceListener(eventName, listener));
  }
  prependListener(eventName, listener) {
    const listeners = this._getListeners(eventName);
    if (listeners.length > 0) {
      const nextListeners = [listener].concat(listeners);
      this.events.set(eventName, nextListeners);
    } else {
      this.events.set(eventName, listeners.concat(listener));
    }
    return this;
  }
  prependOnceListener(eventName, listener) {
    return this.prependListener(eventName, this._wrapOnceListener(eventName, listener));
  }
  removeListener(eventName, listener) {
    const listeners = this._getListeners(eventName);
    if (listeners.length > 0) {
      this._removeListener(listeners, listener);
      this.events.set(eventName, listeners);
      this._emitInternalEvent("removeListener", eventName, listener);
    }
    return this;
  }
  /**
   * Alias for `emitter.removeListener()`.
   *
   * @example
   * emitter.off('hello', listener)
   */
  off(eventName, listener) {
    return this.removeListener(eventName, listener);
  }
  removeAllListeners(eventName) {
    if (eventName) {
      this.events.delete(eventName);
    } else {
      this.events.clear();
    }
    return this;
  }
  /**
   * Returns a copy of the array of listeners for the event named `eventName`.
   */
  listeners(eventName) {
    return Array.from(this._getListeners(eventName));
  }
  /**
   * Returns the number of listeners listening to the event named `eventName`.
   */
  listenerCount(eventName) {
    return this._getListeners(eventName).length;
  }
  rawListeners(eventName) {
    return this.listeners(eventName);
  }
};
var Emitter2 = _Emitter2;
Emitter2.defaultMaxListeners = 10;
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var INTERNAL_REQUEST_ID_HEADER_NAME = "x-interceptors-internal-request-id";
function getGlobalSymbol2(symbol) {
  return (
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/24587
    globalThis[symbol] || void 0
  );
}
function setGlobalSymbol2(symbol, value) {
  globalThis[symbol] = value;
}
function deleteGlobalSymbol2(symbol) {
  delete globalThis[symbol];
}
var Interceptor2 = class {
  constructor(symbol) {
    this.symbol = symbol;
    this.readyState = "INACTIVE";
    this.emitter = new Emitter2();
    this.subscriptions = [];
    this.logger = new Logger2(symbol.description);
    this.emitter.setMaxListeners(0);
    this.logger.info("constructing the interceptor...");
  }
  /**
   * Determine if this interceptor can be applied
   * in the current environment.
   */
  checkEnvironment() {
    return true;
  }
  /**
   * Apply this interceptor to the current process.
   * Returns an already running interceptor instance if it's present.
   */
  apply() {
    const logger = this.logger.extend("apply");
    logger.info("applying the interceptor...");
    if (this.readyState === "APPLIED") {
      logger.info("intercepted already applied!");
      return;
    }
    const shouldApply = this.checkEnvironment();
    if (!shouldApply) {
      logger.info("the interceptor cannot be applied in this environment!");
      return;
    }
    this.readyState = "APPLYING";
    const runningInstance = this.getInstance();
    if (runningInstance) {
      logger.info("found a running instance, reusing...");
      this.on = (event, listener) => {
        logger.info('proxying the "%s" listener', event);
        runningInstance.emitter.addListener(event, listener);
        this.subscriptions.push(() => {
          runningInstance.emitter.removeListener(event, listener);
          logger.info('removed proxied "%s" listener!', event);
        });
        return this;
      };
      this.readyState = "APPLIED";
      return;
    }
    logger.info("no running instance found, setting up a new instance...");
    this.setup();
    this.setInstance();
    this.readyState = "APPLIED";
  }
  /**
   * Setup the module augments and stubs necessary for this interceptor.
   * This method is not run if there's a running interceptor instance
   * to prevent instantiating an interceptor multiple times.
   */
  setup() {
  }
  /**
   * Listen to the interceptor's public events.
   */
  on(event, listener) {
    const logger = this.logger.extend("on");
    if (this.readyState === "DISPOSING" || this.readyState === "DISPOSED") {
      logger.info("cannot listen to events, already disposed!");
      return this;
    }
    logger.info('adding "%s" event listener:', event, listener);
    this.emitter.on(event, listener);
    return this;
  }
  once(event, listener) {
    this.emitter.once(event, listener);
    return this;
  }
  off(event, listener) {
    this.emitter.off(event, listener);
    return this;
  }
  removeAllListeners(event) {
    this.emitter.removeAllListeners(event);
    return this;
  }
  /**
   * Disposes of any side-effects this interceptor has introduced.
   */
  dispose() {
    const logger = this.logger.extend("dispose");
    if (this.readyState === "DISPOSED") {
      logger.info("cannot dispose, already disposed!");
      return;
    }
    logger.info("disposing the interceptor...");
    this.readyState = "DISPOSING";
    if (!this.getInstance()) {
      logger.info("no interceptors running, skipping dispose...");
      return;
    }
    this.clearInstance();
    logger.info("global symbol deleted:", getGlobalSymbol2(this.symbol));
    if (this.subscriptions.length > 0) {
      logger.info("disposing of %d subscriptions...", this.subscriptions.length);
      for (const dispose of this.subscriptions) {
        dispose();
      }
      this.subscriptions = [];
      logger.info("disposed of all subscriptions!", this.subscriptions.length);
    }
    this.emitter.removeAllListeners();
    logger.info("destroyed the listener!");
    this.readyState = "DISPOSED";
  }
  getInstance() {
    var _a2;
    const instance = getGlobalSymbol2(this.symbol);
    this.logger.info("retrieved global instance:", (_a2 = instance == null ? void 0 : instance.constructor) == null ? void 0 : _a2.name);
    return instance;
  }
  setInstance() {
    setGlobalSymbol2(this.symbol, this);
    this.logger.info("set global instance!", this.symbol.description);
  }
  clearInstance() {
    deleteGlobalSymbol2(this.symbol);
    this.logger.info("cleared global instance!", this.symbol.description);
  }
};
function createRequestId2() {
  return Math.random().toString(16).slice(2);
}
var IS_PATCHED_MODULE = Symbol("isPatchedModule");
var InterceptorError = class extends Error {
  constructor(message4) {
    super(message4);
    this.name = "InterceptorError";
    Object.setPrototypeOf(this, InterceptorError.prototype);
  }
};
var _handled;
var handled_get;
var _RequestController = class {
  constructor(request, source) {
    this.request = request;
    this.source = source;
    __privateAdd2(this, _handled);
    this.readyState = _RequestController.PENDING;
    this.handled = new DeferredPromise2();
  }
  /**
   * Perform this request as-is.
   */
  passthrough() {
    return __async(this, null, function* () {
      invariant2.as(InterceptorError, this.readyState === _RequestController.PENDING, 'Failed to passthrough the "%s %s" request: the request has already been handled', this.request.method, this.request.url);
      this.readyState = _RequestController.PASSTHROUGH;
      yield this.source.passthrough();
      __privateGet2(this, _handled, handled_get).resolve();
    });
  }
  /**
   * Respond to this request with the given `Response` instance.
   *
   * @example
   * controller.respondWith(new Response())
   * controller.respondWith(Response.json({ id }))
   * controller.respondWith(Response.error())
   */
  respondWith(response) {
    invariant2.as(InterceptorError, this.readyState === _RequestController.PENDING, 'Failed to respond to the "%s %s" request with "%d %s": the request has already been handled (%d)', this.request.method, this.request.url, response.status, response.statusText || "OK", this.readyState);
    this.readyState = _RequestController.RESPONSE;
    __privateGet2(this, _handled, handled_get).resolve();
    this.source.respondWith(response);
  }
  /**
   * Error this request with the given reason.
   *
   * @example
   * controller.errorWith()
   * controller.errorWith(new Error('Oops!'))
   * controller.errorWith({ message: 'Oops!'})
   */
  errorWith(reason) {
    invariant2.as(InterceptorError, this.readyState === _RequestController.PENDING, 'Failed to error the "%s %s" request with "%s": the request has already been handled (%d)', this.request.method, this.request.url, reason == null ? void 0 : reason.toString(), this.readyState);
    this.readyState = _RequestController.ERROR;
    this.source.errorWith(reason);
    __privateGet2(this, _handled, handled_get).resolve();
  }
};
var RequestController = _RequestController;
_handled = /* @__PURE__ */ new WeakSet();
handled_get = function() {
  return this.handled;
};
RequestController.PENDING = 0;
RequestController.PASSTHROUGH = 1;
RequestController.RESPONSE = 2;
RequestController.ERROR = 3;
function canParseUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_error) {
    return false;
  }
}
function getValueBySymbol(symbolName, source) {
  const ownSymbols = Object.getOwnPropertySymbols(source);
  const symbol = ownSymbols.find((symbol2) => {
    return symbol2.description === symbolName;
  });
  if (symbol) {
    return Reflect.get(source, symbol);
  }
  return;
}
var _FetchResponse = class extends Response {
  static isConfigurableStatusCode(status) {
    return status >= 200 && status <= 599;
  }
  static isRedirectResponse(status) {
    return _FetchResponse.STATUS_CODES_WITH_REDIRECT.includes(status);
  }
  /**
   * Returns a boolean indicating whether the given response status
   * code represents a response that can have a body.
   */
  static isResponseWithBody(status) {
    return !_FetchResponse.STATUS_CODES_WITHOUT_BODY.includes(status);
  }
  static setUrl(url, response) {
    if (!url || url === "about:" || !canParseUrl(url)) {
      return;
    }
    const state = getValueBySymbol("state", response);
    if (state) {
      state.urlList.push(new URL(url));
    } else {
      Object.defineProperty(response, "url", {
        value: url,
        enumerable: true,
        configurable: true,
        writable: false
      });
    }
  }
  /**
   * Parses the given raw HTTP headers into a Fetch API `Headers` instance.
   */
  static parseRawHeaders(rawHeaders) {
    const headers = new Headers();
    for (let line = 0; line < rawHeaders.length; line += 2) {
      headers.append(rawHeaders[line], rawHeaders[line + 1]);
    }
    return headers;
  }
  constructor(body, init = {}) {
    var _a2;
    const status = (_a2 = init.status) != null ? _a2 : 200;
    const safeStatus = _FetchResponse.isConfigurableStatusCode(status) ? status : 200;
    const finalBody = _FetchResponse.isResponseWithBody(status) ? body : null;
    super(finalBody, {
      status: safeStatus,
      statusText: init.statusText,
      headers: init.headers
    });
    if (status !== safeStatus) {
      const state = getValueBySymbol("state", this);
      if (state) {
        state.status = status;
      } else {
        Object.defineProperty(this, "status", {
          value: status,
          enumerable: true,
          configurable: true,
          writable: false
        });
      }
    }
    _FetchResponse.setUrl(init.url, this);
  }
};
var FetchResponse = _FetchResponse;
FetchResponse.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304];
FetchResponse.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308];
var kRawRequest = Symbol("kRawRequest");
function setRawRequest(request, rawRequest) {
  Reflect.set(request, kRawRequest, rawRequest);
}
var BatchInterceptor = class extends Interceptor2 {
  constructor(options) {
    BatchInterceptor.symbol = Symbol(options.name);
    super(BatchInterceptor.symbol);
    this.interceptors = options.interceptors;
  }
  setup() {
    const logger = this.logger.extend("setup");
    logger.info("applying all %d interceptors...", this.interceptors.length);
    for (const interceptor of this.interceptors) {
      logger.info('applying "%s" interceptor...', interceptor.constructor.name);
      interceptor.apply();
      logger.info("adding interceptor dispose subscription");
      this.subscriptions.push(() => interceptor.dispose());
    }
  }
  on(event, listener) {
    for (const interceptor of this.interceptors) {
      interceptor.on(event, listener);
    }
    return this;
  }
  once(event, listener) {
    for (const interceptor of this.interceptors) {
      interceptor.once(event, listener);
    }
    return this;
  }
  off(event, listener) {
    for (const interceptor of this.interceptors) {
      interceptor.off(event, listener);
    }
    return this;
  }
  removeAllListeners(event) {
    for (const interceptors of this.interceptors) {
      interceptors.removeAllListeners(event);
    }
    return this;
  }
};
function createResponseListener(context) {
  return (event) => {
    const responseMessage = event.data;
    const request = deserializeRequest(responseMessage.request);
    if (responseMessage.response.type?.includes("opaque")) {
      return;
    }
    const response = responseMessage.response.status === 0 ? Response.error() : new FetchResponse(
      /**
       * Responses may be streams here, but when we create a response object
       * with null-body status codes, like 204, 205, 304 Response will
       * throw when passed a non-null body, so ensure it's null here
       * for those codes
       */
      FetchResponse.isResponseWithBody(responseMessage.response.status) ? responseMessage.response.body : null,
      __spreadProps(__spreadValues({}, responseMessage.response), {
        /**
         * Set response URL if it's not set already.
         * @see https://github.com/mswjs/msw/issues/2030
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Response/url
         */
        url: request.url
      })
    );
    context.emitter.emit(responseMessage.isMockedResponse ? "response:mocked" : "response:bypass", {
      requestId: responseMessage.request.id,
      request,
      response
    });
  };
}
function validateWorkerScope(registration, options) {
  if (!options?.quiet && !location.href.startsWith(registration.scope)) {
    devUtils.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${registration.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`);
  }
}
var createStartHandler = (context) => {
  return function start(options, customOptions) {
    const startWorkerInstance = () => __async(this, null, function* () {
      context.workerChannel.removeAllListeners();
      context.workerChannel.on("REQUEST", createRequestListener(context, options));
      context.workerChannel.on("RESPONSE", createResponseListener(context));
      const instance = yield getWorkerInstance(options.serviceWorker.url, options.serviceWorker.options, options.findWorker);
      const [worker2, registration] = instance;
      if (!worker2) {
        const missingWorkerMessage = customOptions?.findWorker ? devUtils.formatMessage(`Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`, options.serviceWorker.url) : devUtils.formatMessage(`Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`, options.serviceWorker.url, location.host);
        throw new Error(missingWorkerMessage);
      }
      context.workerPromise.resolve(worker2);
      context.registration = registration;
      window.addEventListener("beforeunload", () => {
        if (worker2.state !== "redundant") {
          context.workerChannel.postMessage("CLIENT_CLOSED");
        }
        window.clearInterval(context.keepAliveInterval);
        window.postMessage({
          type: "msw/worker:stop"
        });
      });
      yield checkWorkerIntegrity(context).catch((error22) => {
        devUtils.error("Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues) and include the original error below.");
        console.error(error22);
      });
      context.keepAliveInterval = window.setInterval(() => context.workerChannel.postMessage("KEEPALIVE_REQUEST"), 5e3);
      validateWorkerScope(registration, context.startOptions);
      return registration;
    });
    const workerRegistration = startWorkerInstance().then((registration) => __async(this, null, function* () {
      const pendingInstance = registration.installing || registration.waiting;
      if (pendingInstance) {
        const activationPromise = new DeferredPromise2();
        pendingInstance.addEventListener("statechange", () => {
          if (pendingInstance.state === "activated") {
            activationPromise.resolve();
          }
        });
        yield activationPromise;
      }
      yield enableMocking(context, options).catch((error22) => {
        devUtils.error("Failed to enable mocking. Please report this on GitHub (https://github.com/mswjs/msw/issues) and include the original error below.");
        throw error22;
      });
      return registration;
    }));
    return workerRegistration;
  };
};
var kDefaultPrevented2 = Symbol("kDefaultPrevented");
var kPropagationStopped = Symbol("kPropagationStopped");
var kImmediatePropagationStopped = Symbol("kImmediatePropagationStopped");
var TypedEvent = class extends MessageEvent {
  /**
   * @note Keep a placeholder property with the return type
   * because the type must be set somewhere in order to be
   * correctly associated and inferred from the event.
   */
  #returnType;
  [kDefaultPrevented2];
  [kPropagationStopped];
  [kImmediatePropagationStopped];
  constructor(...args) {
    super(args[0], args[1]);
    this[kDefaultPrevented2] = false;
  }
  get defaultPrevented() {
    return this[kDefaultPrevented2];
  }
  preventDefault() {
    super.preventDefault();
    this[kDefaultPrevented2] = true;
  }
  stopImmediatePropagation() {
    super.stopImmediatePropagation();
    this[kImmediatePropagationStopped] = true;
  }
};
var kListenerOptions = Symbol("kListenerOptions");
var Emitter22 = class {
  #listeners;
  constructor() {
    this.#listeners = {};
  }
  /**
   * Adds a listener for the given event type.
   *
   * @returns {AbortController} An `AbortController` that can be used to remove the listener.
   */
  on(type, listener, options) {
    return this.#addListener(type, listener, options);
  }
  /**
   * Adds a one-time listener for the given event type.
   *
   * @returns {AbortController} An `AbortController` that can be used to remove the listener.
   */
  once(type, listener, options) {
    return this.on(type, listener, __spreadProps(__spreadValues({}, options || {}), {
      once: true
    }));
  }
  /**
   * Prepends a listener for the given event type.
   *
   * @returns {AbortController} An `AbortController` that can be used to remove the listener.
   */
  earlyOn(type, listener, options) {
    return this.#addListener(type, listener, options, "prepend");
  }
  /**
   * Prepends a one-time listener for the given event type.
   */
  earlyOnce(type, listener, options) {
    return this.earlyOn(type, listener, __spreadProps(__spreadValues({}, options || {}), {
      once: true
    }));
  }
  /**
   * Emits the given typed event.
   *
   * @returns {boolean} Returns `true` if the event had any listeners, `false` otherwise.
   */
  emit(event) {
    if (this.listenerCount(event.type) === 0) {
      return false;
    }
    const proxiedEvent = this.#proxyEvent(event);
    for (const listener of this.#listeners[event.type]) {
      if (proxiedEvent.event[kPropagationStopped] != null && proxiedEvent.event[kPropagationStopped] !== this) {
        return false;
      }
      if (proxiedEvent.event[kImmediatePropagationStopped]) {
        break;
      }
      this.#callListener(proxiedEvent.event, listener);
    }
    proxiedEvent.revoke();
    return true;
  }
  /**
   * Emits the given typed event and returns a promise that resolves
   * when all the listeners for that event have settled.
   *
   * @returns {Promise<Array<Emitter.ListenerReturnType>>} A promise that resolves
   * with the return values of all listeners.
   */
  emitAsPromise(event) {
    return __async(this, null, function* () {
      if (this.listenerCount(event.type) === 0) {
        return [];
      }
      const pendingListeners = [];
      const proxiedEvent = this.#proxyEvent(event);
      for (const listener of this.#listeners[event.type]) {
        if (proxiedEvent.event[kPropagationStopped] != null && proxiedEvent.event[kPropagationStopped] !== this) {
          return [];
        }
        if (proxiedEvent.event[kImmediatePropagationStopped]) {
          break;
        }
        pendingListeners.push(
          // Awaiting individual listeners guarantees their call order.
          yield Promise.resolve(this.#callListener(proxiedEvent.event, listener))
        );
      }
      proxiedEvent.revoke();
      return Promise.allSettled(pendingListeners).then((results) => {
        return results.map((result) => result.status === "fulfilled" ? result.value : result.reason);
      });
    });
  }
  /**
   * Emits the given event and returns a generator that yields
   * the result of each listener in the order of their registration.
   * This way, you stop exhausting the listeners once you get the expected value.
   */
  *emitAsGenerator(event) {
    if (this.listenerCount(event.type) === 0) {
      return;
    }
    const proxiedEvent = this.#proxyEvent(event);
    for (const listener of this.#listeners[event.type]) {
      if (proxiedEvent.event[kPropagationStopped] != null && proxiedEvent.event[kPropagationStopped] !== this) {
        return;
      }
      if (proxiedEvent.event[kImmediatePropagationStopped]) {
        break;
      }
      yield this.#callListener(proxiedEvent.event, listener);
    }
    proxiedEvent.revoke();
  }
  /**
   * Removes a listener for the given event type.
   */
  removeListener(type, listener) {
    if (this.listenerCount(type) === 0) {
      return;
    }
    const nextListeners = [];
    for (const existingListener of this.#listeners[type]) {
      if (existingListener !== listener) {
        nextListeners.push(existingListener);
      }
    }
    this.#listeners[type] = nextListeners;
  }
  /**
   * Removes all listeners for the given event type.
   * If no event type is provided, removes all existing listeners.
   */
  removeAllListeners(type) {
    if (type == null) {
      this.#listeners = {};
      return;
    }
    this.#listeners[type] = [];
  }
  /**
   * Returns the list of listeners for the given event type.
   * If no even type is provided, returns all listeners.
   */
  listeners(type) {
    if (type == null) {
      return Object.values(this.#listeners).flat();
    }
    return this.#listeners[type] || [];
  }
  /**
   * Returns the number of listeners for the given event type.
   * If no even type is provided, returns the total number of listeners.
   */
  listenerCount(type) {
    return this.listeners(type).length;
  }
  #addListener(type, listener, options, insertMode = "append") {
    this.#listeners[type] ??= [];
    if (insertMode === "prepend") {
      this.#listeners[type].unshift(listener);
    } else {
      this.#listeners[type].push(listener);
    }
    if (options) {
      Object.defineProperty(listener, kListenerOptions, {
        value: options,
        enumerable: false,
        writable: false
      });
      if (options.signal) {
        options.signal.addEventListener("abort", () => {
          this.removeListener(type, listener);
        }, {
          once: true
        });
      }
    }
    return this;
  }
  #proxyEvent(event) {
    const {
      stopPropagation
    } = event;
    event.stopPropagation = new Proxy(event.stopPropagation, {
      apply: (target, thisArg, argArray) => {
        event[kPropagationStopped] = this;
        return Reflect.apply(target, thisArg, argArray);
      }
    });
    return {
      event,
      revoke() {
        event.stopPropagation = stopPropagation;
      }
    };
  }
  #callListener(event, listener) {
    const returnValue = listener.call(this, event);
    if (listener[kListenerOptions]?.once) {
      this.removeListener(event.type, listener);
    }
    return returnValue;
  }
};
var SUPPORTS_SERVICE_WORKER = supportsServiceWorker();
var WorkerEvent = class extends TypedEvent {
  #workerEvent;
  constructor(workerEvent) {
    const type = workerEvent.data.type;
    const data = workerEvent.data.payload;
    super(
      // @ts-expect-error Troublesome `TypedEvent` extension.
      type,
      {
        data
      }
    );
    this.#workerEvent = workerEvent;
  }
  get ports() {
    return this.#workerEvent.ports;
  }
  /**
   * Reply directly to this event using its `MessagePort`.
   */
  postMessage(type, ...rest) {
    this.#workerEvent.ports[0].postMessage({
      type,
      data: rest[0]
    }, {
      transfer: rest[1]
    });
  }
};
var WorkerChannel = class extends Emitter22 {
  constructor(options) {
    super();
    this.options = options;
    if (!SUPPORTS_SERVICE_WORKER) {
      return;
    }
    navigator.serviceWorker.addEventListener("message", (event) => __async(this, null, function* () {
      const worker2 = yield this.options.worker;
      if (event.source != null && event.source !== worker2) {
        return;
      }
      if (event.data && isObject(event.data) && "type" in event.data) {
        this.emit(new WorkerEvent(event));
      }
    }));
  }
  /**
   * Send data to the Service Worker controlling this client.
   * This triggers the `message` event listener on ServiceWorkerGlobalScope.
   */
  postMessage(type) {
    invariant2(SUPPORTS_SERVICE_WORKER, "Failed to post message on a WorkerChannel: the Service Worker API is unavailable in this context. This is likely an issue with MSW. Please report it on GitHub: https://github.com/mswjs/msw/issues");
    this.options.worker.then((worker2) => {
      worker2.postMessage(type);
    });
  }
};
function emitAsync2(emitter, eventName, ...data) {
  return __async(this, null, function* () {
    const listeners = emitter.listeners(eventName);
    if (listeners.length === 0) {
      return;
    }
    for (const listener of listeners) {
      yield listener.apply(emitter, data);
    }
  });
}
function hasConfigurableGlobal2(propertyName) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, propertyName);
  if (typeof descriptor === "undefined") {
    return false;
  }
  if (typeof descriptor.get === "function" && typeof descriptor.get() === "undefined") {
    return false;
  }
  if (typeof descriptor.get === "undefined" && descriptor.value == null) {
    return false;
  }
  if (typeof descriptor.set === "undefined" && !descriptor.configurable) {
    console.error(`[MSW] Failed to apply interceptor: the global \`${propertyName}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`);
    return false;
  }
  return true;
}
var until22 = (promise) => __async(void 0, null, function* () {
  try {
    const data = yield promise().catch((error22) => {
      throw error22;
    });
    return {
      error: null,
      data
    };
  } catch (error22) {
    return {
      error: error22,
      data: null
    };
  }
});
function isObject22(value, loose = false) {
  return loose ? Object.prototype.toString.call(value).startsWith("[object ") : Object.prototype.toString.call(value) === "[object Object]";
}
function isPropertyAccessible(obj, key) {
  try {
    obj[key];
    return true;
  } catch (e) {
    return false;
  }
}
function createServerErrorResponse(body) {
  return new Response(JSON.stringify(body instanceof Error ? {
    name: body.name,
    message: body.message,
    stack: body.stack
  } : body), {
    status: 500,
    statusText: "Unhandled Exception",
    headers: {
      "Content-Type": "application/json"
    }
  });
}
function isResponseError(response) {
  return response != null && response instanceof Response && isPropertyAccessible(response, "type") && response.type === "error";
}
function isResponseLike(value) {
  return isObject22(value, true) && isPropertyAccessible(value, "status") && isPropertyAccessible(value, "statusText") && isPropertyAccessible(value, "bodyUsed");
}
function isNodeLikeError(error22) {
  if (error22 == null) {
    return false;
  }
  if (!(error22 instanceof Error)) {
    return false;
  }
  return "code" in error22 && "errno" in error22;
}
function handleRequest2(options) {
  return __async(this, null, function* () {
    const handleResponse = (response) => __async(this, null, function* () {
      if (response instanceof Error) {
        yield options.controller.errorWith(response);
        return true;
      }
      if (isResponseError(response)) {
        yield options.controller.respondWith(response);
        return true;
      }
      if (isResponseLike(response)) {
        yield options.controller.respondWith(response);
        return true;
      }
      if (isObject22(response)) {
        yield options.controller.errorWith(response);
        return true;
      }
      return false;
    });
    const handleResponseError = (error22) => __async(this, null, function* () {
      if (error22 instanceof InterceptorError) {
        throw result.error;
      }
      if (isNodeLikeError(error22)) {
        yield options.controller.errorWith(error22);
        return true;
      }
      if (error22 instanceof Response) {
        return yield handleResponse(error22);
      }
      return false;
    });
    const requestAbortPromise = new DeferredPromise2();
    if (options.request.signal) {
      if (options.request.signal.aborted) {
        yield options.controller.errorWith(options.request.signal.reason);
        return;
      }
      options.request.signal.addEventListener("abort", () => {
        requestAbortPromise.reject(options.request.signal.reason);
      }, {
        once: true
      });
    }
    const result = yield until22(() => __async(this, null, function* () {
      const requestListenersPromise = emitAsync2(options.emitter, "request", {
        requestId: options.requestId,
        request: options.request,
        controller: options.controller
      });
      yield Promise.race([
        // Short-circuit the request handling promise if the request gets aborted.
        requestAbortPromise,
        requestListenersPromise,
        options.controller.handled
      ]);
    }));
    if (requestAbortPromise.state === "rejected") {
      yield options.controller.errorWith(requestAbortPromise.rejectionReason);
      return;
    }
    if (result.error) {
      if (yield handleResponseError(result.error)) {
        return;
      }
      if (options.emitter.listenerCount("unhandledException") > 0) {
        let _a2;
        const unhandledExceptionController = new RequestController(options.request, {
          /**
           * @note Intentionally empty passthrough handle.
           * This controller is created within another controller and we only need
           * to know if `unhandledException` listeners handled the request.
           */
          passthrough() {
          },
          respondWith(response) {
            return __async(this, null, function* () {
              yield handleResponse(response);
            });
          },
          errorWith(reason) {
            return __async(this, null, function* () {
              yield options.controller.errorWith(reason);
            });
          }
        });
        yield emitAsync2(options.emitter, "unhandledException", {
          error: result.error,
          request: options.request,
          requestId: options.requestId,
          controller: unhandledExceptionController
        });
        if (unhandledExceptionController.readyState !== RequestController.PENDING) {
          return;
        }
      }
      yield options.controller.respondWith(createServerErrorResponse(result.error));
      return;
    }
    if (options.controller.readyState === RequestController.PENDING) {
      return yield options.controller.passthrough();
    }
    return options.controller.handled;
  });
}
function createNetworkError(cause) {
  return Object.assign(new TypeError("Failed to fetch"), {
    cause
  });
}
var REQUEST_BODY_HEADERS = ["content-encoding", "content-language", "content-location", "content-type", "content-length"];
var kRedirectCount = Symbol("kRedirectCount");
function followFetchRedirect(request, response) {
  return __async(this, null, function* () {
    if (response.status !== 303 && request.body != null) {
      return Promise.reject(createNetworkError());
    }
    const requestUrl = new URL(request.url);
    let locationUrl;
    try {
      locationUrl = new URL(response.headers.get("location"), request.url);
    } catch (error22) {
      return Promise.reject(createNetworkError(error22));
    }
    if (!(locationUrl.protocol === "http:" || locationUrl.protocol === "https:")) {
      return Promise.reject(createNetworkError("URL scheme must be a HTTP(S) scheme"));
    }
    if (Reflect.get(request, kRedirectCount) > 20) {
      return Promise.reject(createNetworkError("redirect count exceeded"));
    }
    Object.defineProperty(request, kRedirectCount, {
      value: (Reflect.get(request, kRedirectCount) || 0) + 1
    });
    if (request.mode === "cors" && (locationUrl.username || locationUrl.password) && !sameOrigin(requestUrl, locationUrl)) {
      return Promise.reject(createNetworkError('cross origin not allowed for request mode "cors"'));
    }
    const requestInit = {};
    if ([301, 302].includes(response.status) && request.method === "POST" || response.status === 303 && !["HEAD", "GET"].includes(request.method)) {
      requestInit.method = "GET";
      requestInit.body = null;
      REQUEST_BODY_HEADERS.forEach((headerName) => {
        request.headers.delete(headerName);
      });
    }
    if (!sameOrigin(requestUrl, locationUrl)) {
      request.headers.delete("authorization");
      request.headers.delete("proxy-authorization");
      request.headers.delete("cookie");
      request.headers.delete("host");
    }
    requestInit.headers = request.headers;
    const finalResponse = yield fetch(new Request(locationUrl, requestInit));
    Object.defineProperty(finalResponse, "redirected", {
      value: true,
      configurable: true
    });
    return finalResponse;
  });
}
function sameOrigin(left, right) {
  if (left.origin === right.origin && left.origin === "null") {
    return true;
  }
  if (left.protocol === right.protocol && left.hostname === right.hostname && left.port === right.port) {
    return true;
  }
  return false;
}
var BrotliDecompressionStream = class extends TransformStream {
  constructor() {
    console.warn("[Interceptors]: Brotli decompression of response streams is not supported in the browser");
    super({
      transform(chunk, controller) {
        controller.enqueue(chunk);
      }
    });
  }
};
var PipelineStream = class extends TransformStream {
  constructor(transformStreams, ...strategies) {
    super({}, ...strategies);
    const readable = [super.readable, ...transformStreams].reduce((readable2, transform) => readable2.pipeThrough(transform));
    Object.defineProperty(this, "readable", {
      get() {
        return readable;
      }
    });
  }
};
function parseContentEncoding(contentEncoding) {
  return contentEncoding.toLowerCase().split(",").map((coding) => coding.trim());
}
function createDecompressionStream(contentEncoding) {
  if (contentEncoding === "") {
    return null;
  }
  const codings = parseContentEncoding(contentEncoding);
  if (codings.length === 0) {
    return null;
  }
  const transformers = codings.reduceRight((transformers2, coding) => {
    if (coding === "gzip" || coding === "x-gzip") {
      return transformers2.concat(new DecompressionStream("gzip"));
    } else if (coding === "deflate") {
      return transformers2.concat(new DecompressionStream("deflate"));
    } else if (coding === "br") {
      return transformers2.concat(new BrotliDecompressionStream());
    } else {
      transformers2.length = 0;
    }
    return transformers2;
  }, []);
  return new PipelineStream(transformers);
}
function decompressResponse(response) {
  if (response.body === null) {
    return null;
  }
  const decompressionStream = createDecompressionStream(response.headers.get("content-encoding") || "");
  if (!decompressionStream) {
    return null;
  }
  response.body.pipeTo(decompressionStream.writable);
  return decompressionStream.readable;
}
var _FetchInterceptor = class extends Interceptor2 {
  constructor() {
    super(_FetchInterceptor.symbol);
  }
  checkEnvironment() {
    return hasConfigurableGlobal2("fetch");
  }
  setup() {
    return __async(this, null, function* () {
      const pureFetch = globalThis.fetch;
      invariant2(!pureFetch[IS_PATCHED_MODULE], 'Failed to patch the "fetch" module: already patched.');
      globalThis.fetch = (input, init) => __async(this, null, function* () {
        const requestId = createRequestId2();
        const resolvedInput = typeof input === "string" && typeof location !== "undefined" && !canParseUrl(input) ? new URL(input, location.href) : input;
        const request = new Request(resolvedInput, init);
        if (input instanceof Request) {
          setRawRequest(request, input);
        }
        const responsePromise = new DeferredPromise2();
        const controller = new RequestController(request, {
          passthrough: () => __async(this, null, function* () {
            this.logger.info("request has not been handled, passthrough...");
            const requestCloneForResponseEvent = request.clone();
            const {
              error: responseError,
              data: originalResponse
            } = yield until22(() => pureFetch(request));
            if (responseError) {
              return responsePromise.reject(responseError);
            }
            this.logger.info("original fetch performed", originalResponse);
            if (this.emitter.listenerCount("response") > 0) {
              this.logger.info('emitting the "response" event...');
              const responseClone = originalResponse.clone();
              yield emitAsync2(this.emitter, "response", {
                response: responseClone,
                isMockedResponse: false,
                request: requestCloneForResponseEvent,
                requestId
              });
            }
            responsePromise.resolve(originalResponse);
          }),
          respondWith: (rawResponse) => __async(this, null, function* () {
            if (isResponseError(rawResponse)) {
              this.logger.info("request has errored!", {
                response: rawResponse
              });
              responsePromise.reject(createNetworkError(rawResponse));
              return;
            }
            this.logger.info("received mocked response!", {
              rawResponse
            });
            const decompressedStream = decompressResponse(rawResponse);
            const response = decompressedStream === null ? rawResponse : new FetchResponse(decompressedStream, rawResponse);
            FetchResponse.setUrl(request.url, response);
            if (FetchResponse.isRedirectResponse(response.status)) {
              if (request.redirect === "error") {
                responsePromise.reject(createNetworkError("unexpected redirect"));
                return;
              }
              if (request.redirect === "follow") {
                followFetchRedirect(request, response).then((response2) => {
                  responsePromise.resolve(response2);
                }, (reason) => {
                  responsePromise.reject(reason);
                });
                return;
              }
            }
            if (this.emitter.listenerCount("response") > 0) {
              this.logger.info('emitting the "response" event...');
              yield emitAsync2(this.emitter, "response", {
                // Clone the mocked response for the "response" event listener.
                // This way, the listener can read the response and not lock its body
                // for the actual fetch consumer.
                response: response.clone(),
                isMockedResponse: true,
                request,
                requestId
              });
            }
            responsePromise.resolve(response);
          }),
          errorWith: (reason) => {
            this.logger.info("request has been aborted!", {
              reason
            });
            responsePromise.reject(reason);
          }
        });
        this.logger.info("[%s] %s", request.method, request.url);
        this.logger.info("awaiting for the mocked response...");
        this.logger.info('emitting the "request" event for %s listener(s)...', this.emitter.listenerCount("request"));
        yield handleRequest2({
          request,
          requestId,
          emitter: this.emitter,
          controller
        });
        return responsePromise;
      });
      Object.defineProperty(globalThis.fetch, IS_PATCHED_MODULE, {
        enumerable: true,
        configurable: true,
        value: true
      });
      this.subscriptions.push(() => {
        Object.defineProperty(globalThis.fetch, IS_PATCHED_MODULE, {
          value: void 0
        });
        globalThis.fetch = pureFetch;
        this.logger.info('restored native "globalThis.fetch"!', globalThis.fetch.name);
      });
    });
  }
};
var FetchInterceptor = _FetchInterceptor;
FetchInterceptor.symbol = Symbol("fetch");
function concatArrayBuffer(left, right) {
  const result = new Uint8Array(left.byteLength + right.byteLength);
  result.set(left, 0);
  result.set(right, left.byteLength);
  return result;
}
var EventPolyfill = class {
  constructor(type, options) {
    this.NONE = 0;
    this.CAPTURING_PHASE = 1;
    this.AT_TARGET = 2;
    this.BUBBLING_PHASE = 3;
    this.type = "";
    this.srcElement = null;
    this.currentTarget = null;
    this.eventPhase = 0;
    this.isTrusted = true;
    this.composed = false;
    this.cancelable = true;
    this.defaultPrevented = false;
    this.bubbles = true;
    this.lengthComputable = true;
    this.loaded = 0;
    this.total = 0;
    this.cancelBubble = false;
    this.returnValue = true;
    this.type = type;
    this.target = (options == null ? void 0 : options.target) || null;
    this.currentTarget = (options == null ? void 0 : options.currentTarget) || null;
    this.timeStamp = Date.now();
  }
  composedPath() {
    return [];
  }
  initEvent(type, bubbles, cancelable) {
    this.type = type;
    this.bubbles = !!bubbles;
    this.cancelable = !!cancelable;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  stopPropagation() {
  }
  stopImmediatePropagation() {
  }
};
var ProgressEventPolyfill = class extends EventPolyfill {
  constructor(type, init) {
    super(type);
    this.lengthComputable = (init == null ? void 0 : init.lengthComputable) || false;
    this.composed = (init == null ? void 0 : init.composed) || false;
    this.loaded = (init == null ? void 0 : init.loaded) || 0;
    this.total = (init == null ? void 0 : init.total) || 0;
  }
};
var SUPPORTS_PROGRESS_EVENT = typeof ProgressEvent !== "undefined";
function createEvent(target, type, init) {
  const progressEvents = ["error", "progress", "loadstart", "loadend", "load", "timeout", "abort"];
  const ProgressEventClass = SUPPORTS_PROGRESS_EVENT ? ProgressEvent : ProgressEventPolyfill;
  const event = progressEvents.includes(type) ? new ProgressEventClass(type, {
    lengthComputable: true,
    loaded: (init == null ? void 0 : init.loaded) || 0,
    total: (init == null ? void 0 : init.total) || 0
  }) : new EventPolyfill(type, {
    target,
    currentTarget: target
  });
  return event;
}
function findPropertySource(target, propertyName) {
  if (!(propertyName in target)) {
    return null;
  }
  const hasProperty = Object.prototype.hasOwnProperty.call(target, propertyName);
  if (hasProperty) {
    return target;
  }
  const prototype = Reflect.getPrototypeOf(target);
  return prototype ? findPropertySource(prototype, propertyName) : null;
}
function createProxy(target, options) {
  const proxy = new Proxy(target, optionsToProxyHandler(options));
  return proxy;
}
function optionsToProxyHandler(options) {
  const {
    constructorCall,
    methodCall,
    getProperty,
    setProperty
  } = options;
  const handler = {};
  if (typeof constructorCall !== "undefined") {
    handler.construct = function(target, args, newTarget) {
      const next = Reflect.construct.bind(null, target, args, newTarget);
      return constructorCall.call(newTarget, args, next);
    };
  }
  handler.set = function(target, propertyName, nextValue) {
    const next = () => {
      const propertySource = findPropertySource(target, propertyName) || target;
      const ownDescriptors = Reflect.getOwnPropertyDescriptor(propertySource, propertyName);
      if (typeof (ownDescriptors == null ? void 0 : ownDescriptors.set) !== "undefined") {
        ownDescriptors.set.apply(target, [nextValue]);
        return true;
      }
      return Reflect.defineProperty(propertySource, propertyName, {
        writable: true,
        enumerable: true,
        configurable: true,
        value: nextValue
      });
    };
    if (typeof setProperty !== "undefined") {
      return setProperty.call(target, [propertyName, nextValue], next);
    }
    return next();
  };
  handler.get = function(target, propertyName, receiver) {
    const next = () => target[propertyName];
    const value = typeof getProperty !== "undefined" ? getProperty.call(target, [propertyName, receiver], next) : next();
    if (typeof value === "function") {
      return (...args) => {
        const next2 = value.bind(target, ...args);
        if (typeof methodCall !== "undefined") {
          return methodCall.call(target, [propertyName, args], next2);
        }
        return next2();
      };
    }
    return value;
  };
  return handler;
}
function isDomParserSupportedType(type) {
  const supportedTypes = ["application/xhtml+xml", "application/xml", "image/svg+xml", "text/html", "text/xml"];
  return supportedTypes.some((supportedType) => {
    return type.startsWith(supportedType);
  });
}
function parseJson(data) {
  try {
    const json = JSON.parse(data);
    return json;
  } catch (_) {
    return null;
  }
}
function createResponse(request, body) {
  const responseBodyOrNull = FetchResponse.isResponseWithBody(request.status) ? body : null;
  return new FetchResponse(responseBodyOrNull, {
    url: request.responseURL,
    status: request.status,
    statusText: request.statusText,
    headers: createHeadersFromXMLHttpRequestHeaders(request.getAllResponseHeaders())
  });
}
function createHeadersFromXMLHttpRequestHeaders(headersString) {
  const headers = new Headers();
  const lines = headersString.split(/[\r\n]+/);
  for (const line of lines) {
    if (line.trim() === "") {
      continue;
    }
    const [name, ...parts] = line.split(": ");
    const value = parts.join(": ");
    headers.append(name, value);
  }
  return headers;
}
function getBodyByteLength(input) {
  return __async(this, null, function* () {
    const explicitContentLength = input.headers.get("content-length");
    if (explicitContentLength != null && explicitContentLength !== "") {
      return Number(explicitContentLength);
    }
    const buffer = yield input.arrayBuffer();
    return buffer.byteLength;
  });
}
var kIsRequestHandled = Symbol("kIsRequestHandled");
var IS_NODE22 = isNodeProcess2();
var kFetchRequest = Symbol("kFetchRequest");
var XMLHttpRequestController = class {
  constructor(initialRequest, logger) {
    this.initialRequest = initialRequest;
    this.logger = logger;
    this.method = "GET";
    this.url = null;
    this[kIsRequestHandled] = false;
    this.events = /* @__PURE__ */ new Map();
    this.uploadEvents = /* @__PURE__ */ new Map();
    this.requestId = createRequestId2();
    this.requestHeaders = new Headers();
    this.responseBuffer = new Uint8Array();
    this.request = createProxy(initialRequest, {
      setProperty: ([propertyName, nextValue], invoke) => {
        switch (propertyName) {
          case "ontimeout": {
            const eventName = propertyName.slice(2);
            this.request.addEventListener(eventName, nextValue);
            return invoke();
          }
          default: {
            return invoke();
          }
        }
      },
      methodCall: ([methodName, args], invoke) => {
        switch (methodName) {
          case "open": {
            const [method, url] = args;
            if (typeof url === "undefined") {
              this.method = "GET";
              this.url = toAbsoluteUrl(method);
            } else {
              this.method = method;
              this.url = toAbsoluteUrl(url);
            }
            this.logger = this.logger.extend(`${this.method} ${this.url.href}`);
            this.logger.info("open", this.method, this.url.href);
            return invoke();
          }
          case "addEventListener": {
            const [eventName, listener] = args;
            this.registerEvent(eventName, listener);
            this.logger.info("addEventListener", eventName, listener);
            return invoke();
          }
          case "setRequestHeader": {
            const [name, value] = args;
            this.requestHeaders.set(name, value);
            this.logger.info("setRequestHeader", name, value);
            return invoke();
          }
          case "send": {
            const [body] = args;
            this.request.addEventListener("load", () => {
              if (typeof this.onResponse !== "undefined") {
                const fetchResponse = createResponse(
                  this.request,
                  /**
                   * The `response` property is the right way to read
                   * the ambiguous response body, as the request's "responseType" may differ.
                   * @see https://xhr.spec.whatwg.org/#the-response-attribute
                   */
                  this.request.response
                );
                this.onResponse.call(this, {
                  response: fetchResponse,
                  isMockedResponse: this[kIsRequestHandled],
                  request: fetchRequest,
                  requestId: this.requestId
                });
              }
            });
            const requestBody = typeof body === "string" ? encodeBuffer(body) : body;
            const fetchRequest = this.toFetchApiRequest(requestBody);
            this[kFetchRequest] = fetchRequest.clone();
            queueMicrotask(() => {
              var _a2;
              const onceRequestSettled = ((_a2 = this.onRequest) == null ? void 0 : _a2.call(this, {
                request: fetchRequest,
                requestId: this.requestId
              })) || Promise.resolve();
              onceRequestSettled.finally(() => {
                if (!this[kIsRequestHandled]) {
                  this.logger.info("request callback settled but request has not been handled (readystate %d), performing as-is...", this.request.readyState);
                  if (IS_NODE22) {
                    this.request.setRequestHeader(INTERNAL_REQUEST_ID_HEADER_NAME, this.requestId);
                  }
                  return invoke();
                }
              });
            });
            break;
          }
          default: {
            return invoke();
          }
        }
      }
    });
    define(this.request, "upload", createProxy(this.request.upload, {
      setProperty: ([propertyName, nextValue], invoke) => {
        switch (propertyName) {
          case "onloadstart":
          case "onprogress":
          case "onaboart":
          case "onerror":
          case "onload":
          case "ontimeout":
          case "onloadend": {
            const eventName = propertyName.slice(2);
            this.registerUploadEvent(eventName, nextValue);
          }
        }
        return invoke();
      },
      methodCall: ([methodName, args], invoke) => {
        switch (methodName) {
          case "addEventListener": {
            const [eventName, listener] = args;
            this.registerUploadEvent(eventName, listener);
            this.logger.info("upload.addEventListener", eventName, listener);
            return invoke();
          }
        }
      }
    }));
  }
  registerEvent(eventName, listener) {
    const prevEvents = this.events.get(eventName) || [];
    const nextEvents = prevEvents.concat(listener);
    this.events.set(eventName, nextEvents);
    this.logger.info('registered event "%s"', eventName, listener);
  }
  registerUploadEvent(eventName, listener) {
    const prevEvents = this.uploadEvents.get(eventName) || [];
    const nextEvents = prevEvents.concat(listener);
    this.uploadEvents.set(eventName, nextEvents);
    this.logger.info('registered upload event "%s"', eventName, listener);
  }
  /**
   * Responds to the current request with the given
   * Fetch API `Response` instance.
   */
  respondWith(response) {
    return __async(this, null, function* () {
      this[kIsRequestHandled] = true;
      if (this[kFetchRequest]) {
        const totalRequestBodyLength = yield getBodyByteLength(this[kFetchRequest]);
        this.trigger("loadstart", this.request.upload, {
          loaded: 0,
          total: totalRequestBodyLength
        });
        this.trigger("progress", this.request.upload, {
          loaded: totalRequestBodyLength,
          total: totalRequestBodyLength
        });
        this.trigger("load", this.request.upload, {
          loaded: totalRequestBodyLength,
          total: totalRequestBodyLength
        });
        this.trigger("loadend", this.request.upload, {
          loaded: totalRequestBodyLength,
          total: totalRequestBodyLength
        });
      }
      this.logger.info("responding with a mocked response: %d %s", response.status, response.statusText);
      define(this.request, "status", response.status);
      define(this.request, "statusText", response.statusText);
      define(this.request, "responseURL", this.url.href);
      this.request.getResponseHeader = new Proxy(this.request.getResponseHeader, {
        apply: (_, __, args) => {
          this.logger.info("getResponseHeader", args[0]);
          if (this.request.readyState < this.request.HEADERS_RECEIVED) {
            this.logger.info("headers not received yet, returning null");
            return null;
          }
          const headerValue = response.headers.get(args[0]);
          this.logger.info('resolved response header "%s" to', args[0], headerValue);
          return headerValue;
        }
      });
      this.request.getAllResponseHeaders = new Proxy(this.request.getAllResponseHeaders, {
        apply: () => {
          this.logger.info("getAllResponseHeaders");
          if (this.request.readyState < this.request.HEADERS_RECEIVED) {
            this.logger.info("headers not received yet, returning empty string");
            return "";
          }
          const headersList = Array.from(response.headers.entries());
          const allHeaders = headersList.map(([headerName, headerValue]) => {
            return `${headerName}: ${headerValue}`;
          }).join("\r\n");
          this.logger.info("resolved all response headers to", allHeaders);
          return allHeaders;
        }
      });
      Object.defineProperties(this.request, {
        response: {
          enumerable: true,
          configurable: false,
          get: () => this.response
        },
        responseText: {
          enumerable: true,
          configurable: false,
          get: () => this.responseText
        },
        responseXML: {
          enumerable: true,
          configurable: false,
          get: () => this.responseXML
        }
      });
      const totalResponseBodyLength = yield getBodyByteLength(response.clone());
      this.logger.info("calculated response body length", totalResponseBodyLength);
      this.trigger("loadstart", this.request, {
        loaded: 0,
        total: totalResponseBodyLength
      });
      this.setReadyState(this.request.HEADERS_RECEIVED);
      this.setReadyState(this.request.LOADING);
      const finalizeResponse = () => {
        this.logger.info("finalizing the mocked response...");
        this.setReadyState(this.request.DONE);
        this.trigger("load", this.request, {
          loaded: this.responseBuffer.byteLength,
          total: totalResponseBodyLength
        });
        this.trigger("loadend", this.request, {
          loaded: this.responseBuffer.byteLength,
          total: totalResponseBodyLength
        });
      };
      if (response.body) {
        this.logger.info("mocked response has body, streaming...");
        const reader = response.body.getReader();
        const readNextResponseBodyChunk = () => __async(this, null, function* () {
          const {
            value,
            done
          } = yield reader.read();
          if (done) {
            this.logger.info("response body stream done!");
            finalizeResponse();
            return;
          }
          if (value) {
            this.logger.info("read response body chunk:", value);
            this.responseBuffer = concatArrayBuffer(this.responseBuffer, value);
            this.trigger("progress", this.request, {
              loaded: this.responseBuffer.byteLength,
              total: totalResponseBodyLength
            });
          }
          readNextResponseBodyChunk();
        });
        readNextResponseBodyChunk();
      } else {
        finalizeResponse();
      }
    });
  }
  responseBufferToText() {
    return decodeBuffer(this.responseBuffer);
  }
  get response() {
    this.logger.info("getResponse (responseType: %s)", this.request.responseType);
    if (this.request.readyState !== this.request.DONE) {
      return null;
    }
    switch (this.request.responseType) {
      case "json": {
        const responseJson = parseJson(this.responseBufferToText());
        this.logger.info("resolved response JSON", responseJson);
        return responseJson;
      }
      case "arraybuffer": {
        const arrayBuffer = toArrayBuffer(this.responseBuffer);
        this.logger.info("resolved response ArrayBuffer", arrayBuffer);
        return arrayBuffer;
      }
      case "blob": {
        const mimeType = this.request.getResponseHeader("Content-Type") || "text/plain";
        const responseBlob = new Blob([this.responseBufferToText()], {
          type: mimeType
        });
        this.logger.info("resolved response Blob (mime type: %s)", responseBlob, mimeType);
        return responseBlob;
      }
      default: {
        const responseText = this.responseBufferToText();
        this.logger.info('resolving "%s" response type as text', this.request.responseType, responseText);
        return responseText;
      }
    }
  }
  get responseText() {
    invariant2(this.request.responseType === "" || this.request.responseType === "text", "InvalidStateError: The object is in invalid state.");
    if (this.request.readyState !== this.request.LOADING && this.request.readyState !== this.request.DONE) {
      return "";
    }
    const responseText = this.responseBufferToText();
    this.logger.info('getResponseText: "%s"', responseText);
    return responseText;
  }
  get responseXML() {
    invariant2(this.request.responseType === "" || this.request.responseType === "document", "InvalidStateError: The object is in invalid state.");
    if (this.request.readyState !== this.request.DONE) {
      return null;
    }
    const contentType = this.request.getResponseHeader("Content-Type") || "";
    if (typeof DOMParser === "undefined") {
      console.warn("Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly.");
      return null;
    }
    if (isDomParserSupportedType(contentType)) {
      return new DOMParser().parseFromString(this.responseBufferToText(), contentType);
    }
    return null;
  }
  errorWith(error22) {
    this[kIsRequestHandled] = true;
    this.logger.info("responding with an error");
    this.setReadyState(this.request.DONE);
    this.trigger("error", this.request);
    this.trigger("loadend", this.request);
  }
  /**
   * Transitions this request's `readyState` to the given one.
   */
  setReadyState(nextReadyState) {
    this.logger.info("setReadyState: %d -> %d", this.request.readyState, nextReadyState);
    if (this.request.readyState === nextReadyState) {
      this.logger.info("ready state identical, skipping transition...");
      return;
    }
    define(this.request, "readyState", nextReadyState);
    this.logger.info("set readyState to: %d", nextReadyState);
    if (nextReadyState !== this.request.UNSENT) {
      this.logger.info('triggering "readystatechange" event...');
      this.trigger("readystatechange", this.request);
    }
  }
  /**
   * Triggers given event on the `XMLHttpRequest` instance.
   */
  trigger(eventName, target, options) {
    const callback = target[`on${eventName}`];
    const event = createEvent(target, eventName, options);
    this.logger.info('trigger "%s"', eventName, options || "");
    if (typeof callback === "function") {
      this.logger.info('found a direct "%s" callback, calling...', eventName);
      callback.call(target, event);
    }
    const events = target instanceof XMLHttpRequestUpload ? this.uploadEvents : this.events;
    for (const [registeredEventName, listeners] of events) {
      if (registeredEventName === eventName) {
        this.logger.info('found %d listener(s) for "%s" event, calling...', listeners.length, eventName);
        listeners.forEach((listener) => listener.call(target, event));
      }
    }
  }
  /**
   * Converts this `XMLHttpRequest` instance into a Fetch API `Request` instance.
   */
  toFetchApiRequest(body) {
    this.logger.info("converting request to a Fetch API Request...");
    const resolvedBody = body instanceof Document ? body.documentElement.innerText : body;
    const fetchRequest = new Request(this.url.href, {
      method: this.method,
      headers: this.requestHeaders,
      /**
       * @see https://xhr.spec.whatwg.org/#cross-origin-credentials
       */
      credentials: this.request.withCredentials ? "include" : "same-origin",
      body: ["GET", "HEAD"].includes(this.method.toUpperCase()) ? null : resolvedBody
    });
    const proxyHeaders = createProxy(fetchRequest.headers, {
      methodCall: ([methodName, args], invoke) => {
        switch (methodName) {
          case "append":
          case "set": {
            const [headerName, headerValue] = args;
            this.request.setRequestHeader(headerName, headerValue);
            break;
          }
          case "delete": {
            const [headerName] = args;
            console.warn(`XMLHttpRequest: Cannot remove a "${headerName}" header from the Fetch API representation of the "${fetchRequest.method} ${fetchRequest.url}" request. XMLHttpRequest headers cannot be removed.`);
            break;
          }
        }
        return invoke();
      }
    });
    define(fetchRequest, "headers", proxyHeaders);
    setRawRequest(fetchRequest, this.request);
    this.logger.info("converted request to a Fetch API Request!", fetchRequest);
    return fetchRequest;
  }
};
function toAbsoluteUrl(url) {
  if (typeof location === "undefined") {
    return new URL(url);
  }
  return new URL(url.toString(), location.href);
}
function define(target, property, value) {
  Reflect.defineProperty(target, property, {
    // Ensure writable properties to allow redefining readonly properties.
    writable: true,
    enumerable: true,
    value
  });
}
function createXMLHttpRequestProxy({
  emitter,
  logger
}) {
  const XMLHttpRequestProxy = new Proxy(globalThis.XMLHttpRequest, {
    construct(target, args, newTarget) {
      logger.info("constructed new XMLHttpRequest");
      const originalRequest = Reflect.construct(target, args, newTarget);
      const prototypeDescriptors = Object.getOwnPropertyDescriptors(target.prototype);
      for (const propertyName in prototypeDescriptors) {
        Reflect.defineProperty(originalRequest, propertyName, prototypeDescriptors[propertyName]);
      }
      const xhrRequestController = new XMLHttpRequestController(originalRequest, logger);
      xhrRequestController.onRequest = function(_0) {
        return __async(this, arguments, function* ({
          request,
          requestId
        }) {
          const controller = new RequestController(request, {
            passthrough: () => {
              this.logger.info("no mocked response received, performing request as-is...");
            },
            respondWith: (response) => __async(this, null, function* () {
              if (isResponseError(response)) {
                this.errorWith(new TypeError("Network error"));
                return;
              }
              yield this.respondWith(response);
            }),
            errorWith: (reason) => {
              this.logger.info("request errored!", {
                error: reason
              });
              if (reason instanceof Error) {
                this.errorWith(reason);
              }
            }
          });
          this.logger.info("awaiting mocked response...");
          this.logger.info('emitting the "request" event for %s listener(s)...', emitter.listenerCount("request"));
          yield handleRequest2({
            request,
            requestId,
            controller,
            emitter
          });
        });
      };
      xhrRequestController.onResponse = function(_0) {
        return __async(this, arguments, function* ({
          response,
          isMockedResponse,
          request,
          requestId
        }) {
          this.logger.info('emitting the "response" event for %s listener(s)...', emitter.listenerCount("response"));
          emitter.emit("response", {
            response,
            isMockedResponse,
            request,
            requestId
          });
        });
      };
      return xhrRequestController.request;
    }
  });
  return XMLHttpRequestProxy;
}
var _XMLHttpRequestInterceptor = class extends Interceptor2 {
  constructor() {
    super(_XMLHttpRequestInterceptor.interceptorSymbol);
  }
  checkEnvironment() {
    return hasConfigurableGlobal2("XMLHttpRequest");
  }
  setup() {
    const logger = this.logger.extend("setup");
    logger.info('patching "XMLHttpRequest" module...');
    const PureXMLHttpRequest = globalThis.XMLHttpRequest;
    invariant2(!PureXMLHttpRequest[IS_PATCHED_MODULE], 'Failed to patch the "XMLHttpRequest" module: already patched.');
    globalThis.XMLHttpRequest = createXMLHttpRequestProxy({
      emitter: this.emitter,
      logger: this.logger
    });
    logger.info('native "XMLHttpRequest" module patched!', globalThis.XMLHttpRequest.name);
    Object.defineProperty(globalThis.XMLHttpRequest, IS_PATCHED_MODULE, {
      enumerable: true,
      configurable: true,
      value: true
    });
    this.subscriptions.push(() => {
      Object.defineProperty(globalThis.XMLHttpRequest, IS_PATCHED_MODULE, {
        value: void 0
      });
      globalThis.XMLHttpRequest = PureXMLHttpRequest;
      logger.info('native "XMLHttpRequest" module restored!', globalThis.XMLHttpRequest.name);
    });
  }
};
var XMLHttpRequestInterceptor = _XMLHttpRequestInterceptor;
XMLHttpRequestInterceptor.interceptorSymbol = Symbol("xhr");
function createFallbackRequestListener(context, options) {
  const interceptor = new BatchInterceptor({
    name: "fallback",
    interceptors: [new FetchInterceptor(), new XMLHttpRequestInterceptor()]
  });
  interceptor.on("request", (_0) => __async(this, [_0], function* ({
    request,
    requestId,
    controller
  }) {
    const requestCloneForLogs = request.clone();
    const response = yield handleRequest(request, requestId, context.getRequestHandlers().filter(isHandlerKind("RequestHandler")), options, context.emitter, {
      onMockedResponse(_, {
        handler,
        parsedResult
      }) {
        if (!options.quiet) {
          context.emitter.once("response:mocked", ({
            response: response2
          }) => {
            handler.log({
              request: requestCloneForLogs,
              response: response2,
              parsedResult
            });
          });
        }
      }
    });
    if (response) {
      controller.respondWith(response);
    }
  }));
  interceptor.on("response", ({
    response,
    isMockedResponse,
    request,
    requestId
  }) => {
    context.emitter.emit(isMockedResponse ? "response:mocked" : "response:bypass", {
      response,
      request,
      requestId
    });
  });
  interceptor.apply();
  return interceptor;
}
function printStopMessage(args = {}) {
  if (args.quiet) {
    return;
  }
  console.log(`%c${devUtils.formatMessage("Mocking disabled.")}`, "color:orangered;font-weight:bold;");
}
var SetupWorkerApi = class extends SetupApi {
  context;
  constructor(...handlers2) {
    super(...handlers2);
    invariant2(!isNodeProcess2(), devUtils.formatMessage("Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead."));
    this.context = this.createWorkerContext();
  }
  createWorkerContext() {
    const workerPromise = new DeferredPromise2();
    return {
      // Mocking is not considered enabled until the worker
      // signals back the successful activation event.
      isMockingEnabled: false,
      startOptions: null,
      workerPromise,
      registration: void 0,
      getRequestHandlers: () => {
        return this.handlersController.currentHandlers();
      },
      emitter: this.emitter,
      workerChannel: new WorkerChannel({
        worker: workerPromise
      })
    };
  }
  start() {
    return __async(this, arguments, function* (options = {}) {
      if ("waitUntilReady" in options) {
        devUtils.warn('The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.');
      }
      if (this.context.isMockingEnabled) {
        devUtils.warn(`Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.`);
        return this.context.registration;
      }
      this.context.workerStoppedAt = void 0;
      this.context.startOptions = mergeRight(DEFAULT_START_OPTIONS, options);
      handleWebSocketEvent({
        getUnhandledRequestStrategy: () => {
          return this.context.startOptions.onUnhandledRequest;
        },
        getHandlers: () => {
          return this.handlersController.currentHandlers();
        },
        onMockedConnection: (connection) => {
          if (!this.context.startOptions.quiet) {
            attachWebSocketLogger(connection);
          }
        },
        onPassthroughConnection() {
        }
      });
      webSocketInterceptor.apply();
      this.subscriptions.push(() => {
        webSocketInterceptor.dispose();
      });
      if (!supportsServiceWorker()) {
        const fallbackInterceptor = createFallbackRequestListener(this.context, this.context.startOptions);
        this.subscriptions.push(() => {
          fallbackInterceptor.dispose();
        });
        this.context.isMockingEnabled = true;
        printStartMessage({
          message: "Mocking enabled (fallback mode).",
          quiet: this.context.startOptions.quiet
        });
        return void 0;
      }
      const startHandler = createStartHandler(this.context);
      const registration = yield startHandler(this.context.startOptions, options);
      this.context.isMockingEnabled = true;
      return registration;
    });
  }
  stop() {
    super.dispose();
    if (!this.context.isMockingEnabled) {
      devUtils.warn('Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.');
      return;
    }
    this.context.isMockingEnabled = false;
    this.context.workerStoppedAt = Date.now();
    this.context.emitter.removeAllListeners();
    if (supportsServiceWorker()) {
      this.context.workerChannel.removeAllListeners("RESPONSE");
      window.clearInterval(this.context.keepAliveInterval);
    }
    window.postMessage({
      type: "msw/worker:stop"
    });
    printStopMessage({
      quiet: this.context.startOptions?.quiet
    });
  }
};
function setupWorker(...handlers2) {
  return new SetupWorkerApi(...handlers2);
}

// node_modules/msw/lib/core/utils/internal/checkGlobals.mjs
function checkGlobals() {
  invariant(typeof URL !== "undefined", devUtils.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`));
}

// node_modules/msw/lib/core/utils/internal/isStringEqual.mjs
function isStringEqual(actual, expected) {
  return actual.toLowerCase() === expected.toLowerCase();
}

// node_modules/msw/lib/core/utils/logging/getStatusCodeColor.mjs
function getStatusCodeColor(status) {
  if (status < 300) {
    return "#69AB32";
  }
  if (status < 400) {
    return "#F0BB4B";
  }
  return "#E95F5D";
}

// node_modules/msw/lib/core/utils/logging/serializeRequest.mjs
function serializeRequest(request) {
  return __async(this, null, function* () {
    const requestClone = request.clone();
    const requestText = yield requestClone.text();
    return {
      url: new URL(request.url),
      method: request.method,
      headers: Object.fromEntries(request.headers.entries()),
      body: requestText
    };
  });
}

// node_modules/msw/lib/core/utils/logging/serializeResponse.mjs
var {
  message: message3
} = statuses_default;
function serializeResponse(response) {
  return __async(this, null, function* () {
    const responseClone = response.clone();
    const responseText = yield responseClone.text();
    const responseStatus = responseClone.status || 200;
    const responseStatusText = responseClone.statusText || message3[responseStatus] || "OK";
    return {
      status: responseStatus,
      statusText: responseStatusText,
      headers: Object.fromEntries(responseClone.headers.entries()),
      body: responseText
    };
  });
}

// node_modules/msw/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({
        type: "MODIFIER",
        index: i,
        value: str[i++]
      });
      continue;
    }
    if (char === "\\") {
      tokens.push({
        type: "ESCAPED_CHAR",
        index: i++,
        value: str[i++]
      });
      continue;
    }
    if (char === "{") {
      tokens.push({
        type: "OPEN",
        index: i,
        value: str[i++]
      });
      continue;
    }
    if (char === "}") {
      tokens.push({
        type: "CLOSE",
        index: i,
        value: str[i++]
      });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name) throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({
        type: "NAME",
        index: i,
        value: name
      });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count) throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern) throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({
        type: "PATTERN",
        index: i,
        value: pattern
      });
      i = j;
      continue;
    }
    tokens.push({
      type: "CHAR",
      index: i,
      value: str[i++]
    });
  }
  tokens.push({
    type: "END",
    index: i,
    value: ""
  });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a2 = options.prefixes, prefixes = _a2 === void 0 ? "./" : _a2, _b2 = options.delimiter, delimiter = _b2 === void 0 ? "/#?" : _b2;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0) return value2;
    var _a3 = tokens[i], nextType = _a3.type, index = _a3.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  var isSafe = function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1) return true;
    }
    return false;
  };
  var safePattern = function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText)) return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a2 = options.decode, decode = _a2 === void 0 ? function(x) {
    return x;
  } : _a2;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m) return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0) return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return {
      path,
      index,
      params
    };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  if (!keys) return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse2(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a2 = options.strict, strict = _a2 === void 0 ? false : _a2, _b2 = options.start, start = _b2 === void 0 ? true : _b2, _c2 = options.end, end = _c2 === void 0 ? true : _c2, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys) keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict) route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) return regexpToRegexp(path, keys);
  if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}

// node_modules/@mswjs/interceptors/lib/browser/chunk-6HYIRFX2.mjs
var encoder2 = new TextEncoder();

// node_modules/@mswjs/interceptors/lib/browser/chunk-LIKZF2VU.mjs
var IS_PATCHED_MODULE2 = Symbol("isPatchedModule");
var InterceptorError2 = class extends Error {
  constructor(message4) {
    super(message4);
    this.name = "InterceptorError";
    Object.setPrototypeOf(this, InterceptorError2.prototype);
  }
};
var _handled2;
var handled_get2;
var _RequestController2 = class {
  constructor(request, source) {
    this.request = request;
    this.source = source;
    __privateAdd(this, _handled2);
    this.readyState = _RequestController2.PENDING;
    this.handled = new DeferredPromise();
  }
  /**
   * Perform this request as-is.
   */
  passthrough() {
    return __async(this, null, function* () {
      invariant.as(InterceptorError2, this.readyState === _RequestController2.PENDING, 'Failed to passthrough the "%s %s" request: the request has already been handled', this.request.method, this.request.url);
      this.readyState = _RequestController2.PASSTHROUGH;
      yield this.source.passthrough();
      __privateGet(this, _handled2, handled_get2).resolve();
    });
  }
  /**
   * Respond to this request with the given `Response` instance.
   *
   * @example
   * controller.respondWith(new Response())
   * controller.respondWith(Response.json({ id }))
   * controller.respondWith(Response.error())
   */
  respondWith(response) {
    invariant.as(InterceptorError2, this.readyState === _RequestController2.PENDING, 'Failed to respond to the "%s %s" request with "%d %s": the request has already been handled (%d)', this.request.method, this.request.url, response.status, response.statusText || "OK", this.readyState);
    this.readyState = _RequestController2.RESPONSE;
    __privateGet(this, _handled2, handled_get2).resolve();
    this.source.respondWith(response);
  }
  /**
   * Error this request with the given reason.
   *
   * @example
   * controller.errorWith()
   * controller.errorWith(new Error('Oops!'))
   * controller.errorWith({ message: 'Oops!'})
   */
  errorWith(reason) {
    invariant.as(InterceptorError2, this.readyState === _RequestController2.PENDING, 'Failed to error the "%s %s" request with "%s": the request has already been handled (%d)', this.request.method, this.request.url, reason == null ? void 0 : reason.toString(), this.readyState);
    this.readyState = _RequestController2.ERROR;
    this.source.errorWith(reason);
    __privateGet(this, _handled2, handled_get2).resolve();
  }
};
var RequestController2 = _RequestController2;
_handled2 = /* @__PURE__ */ new WeakSet();
handled_get2 = function() {
  return this.handled;
};
RequestController2.PENDING = 0;
RequestController2.PASSTHROUGH = 1;
RequestController2.RESPONSE = 2;
RequestController2.ERROR = 3;
function canParseUrl2(url) {
  try {
    new URL(url);
    return true;
  } catch (_error) {
    return false;
  }
}
function getValueBySymbol2(symbolName, source) {
  const ownSymbols = Object.getOwnPropertySymbols(source);
  const symbol = ownSymbols.find((symbol2) => {
    return symbol2.description === symbolName;
  });
  if (symbol) {
    return Reflect.get(source, symbol);
  }
  return;
}
var _FetchResponse2 = class extends Response {
  static isConfigurableStatusCode(status) {
    return status >= 200 && status <= 599;
  }
  static isRedirectResponse(status) {
    return _FetchResponse2.STATUS_CODES_WITH_REDIRECT.includes(status);
  }
  /**
   * Returns a boolean indicating whether the given response status
   * code represents a response that can have a body.
   */
  static isResponseWithBody(status) {
    return !_FetchResponse2.STATUS_CODES_WITHOUT_BODY.includes(status);
  }
  static setUrl(url, response) {
    if (!url || url === "about:" || !canParseUrl2(url)) {
      return;
    }
    const state = getValueBySymbol2("state", response);
    if (state) {
      state.urlList.push(new URL(url));
    } else {
      Object.defineProperty(response, "url", {
        value: url,
        enumerable: true,
        configurable: true,
        writable: false
      });
    }
  }
  /**
   * Parses the given raw HTTP headers into a Fetch API `Headers` instance.
   */
  static parseRawHeaders(rawHeaders) {
    const headers = new Headers();
    for (let line = 0; line < rawHeaders.length; line += 2) {
      headers.append(rawHeaders[line], rawHeaders[line + 1]);
    }
    return headers;
  }
  constructor(body, init = {}) {
    var _a2;
    const status = (_a2 = init.status) != null ? _a2 : 200;
    const safeStatus = _FetchResponse2.isConfigurableStatusCode(status) ? status : 200;
    const finalBody = _FetchResponse2.isResponseWithBody(status) ? body : null;
    super(finalBody, {
      status: safeStatus,
      statusText: init.statusText,
      headers: init.headers
    });
    if (status !== safeStatus) {
      const state = getValueBySymbol2("state", this);
      if (state) {
        state.status = status;
      } else {
        Object.defineProperty(this, "status", {
          value: status,
          enumerable: true,
          configurable: true,
          writable: false
        });
      }
    }
    _FetchResponse2.setUrl(init.url, this);
  }
};
var FetchResponse2 = _FetchResponse2;
FetchResponse2.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304];
FetchResponse2.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308];
var kRawRequest2 = Symbol("kRawRequest");

// node_modules/@mswjs/interceptors/lib/browser/index.mjs
function getCleanUrl(url, isAbsolute = true) {
  return [isAbsolute && url.origin, url.pathname].filter(Boolean).join("");
}

// node_modules/msw/lib/core/utils/url/cleanUrl.mjs
var REDUNDANT_CHARACTERS_EXP = /[?|#].*$/g;
function cleanUrl(path) {
  if (path.endsWith("?")) {
    return path;
  }
  return path.replace(REDUNDANT_CHARACTERS_EXP, "");
}

// node_modules/msw/lib/core/utils/url/isAbsoluteUrl.mjs
function isAbsoluteUrl(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

// node_modules/msw/lib/core/utils/url/getAbsoluteUrl.mjs
function getAbsoluteUrl(path, baseUrl) {
  if (isAbsoluteUrl(path)) {
    return path;
  }
  if (path.startsWith("*")) {
    return path;
  }
  const origin = baseUrl || typeof location !== "undefined" && location.href;
  return origin ? (
    // Encode and decode the path to preserve escaped characters.
    decodeURI(new URL(encodeURI(path), origin).href)
  ) : path;
}

// node_modules/msw/lib/core/utils/matching/normalizePath.mjs
function normalizePath(path, baseUrl) {
  if (path instanceof RegExp) {
    return path;
  }
  const maybeAbsoluteUrl = getAbsoluteUrl(path, baseUrl);
  return cleanUrl(maybeAbsoluteUrl);
}

// node_modules/msw/lib/core/utils/matching/matchRequestUrl.mjs
function coercePath(path) {
  return path.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g, (_, parameterName, wildcard) => {
    const expression = "(.*)";
    if (!parameterName) {
      return expression;
    }
    return parameterName.startsWith(":") ? `${parameterName}${wildcard}` : `${parameterName}${expression}`;
  }).replace(/([^/])(:)(?=\d+)/, "$1\\$2").replace(/^([^/]+)(:)(?=\/\/)/, "$1\\$2");
}
function matchRequestUrl(url, path, baseUrl) {
  const normalizedPath = normalizePath(path, baseUrl);
  const cleanPath = typeof normalizedPath === "string" ? coercePath(normalizedPath) : normalizedPath;
  const cleanUrl2 = getCleanUrl(url);
  const result = match(cleanPath, {
    decode: decodeURIComponent
  })(cleanUrl2);
  const params = result && result.params || {};
  return {
    matches: result !== false,
    params
  };
}

// node_modules/msw/lib/shims/cookie.mjs
var __create3 = Object.create;
var __defProp5 = Object.defineProperty;
var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames3 = Object.getOwnPropertyNames;
var __getProtoOf3 = Object.getPrototypeOf;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __commonJS3 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames3(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __copyProps3 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames3(from)) if (!__hasOwnProp3.call(to, key) && key !== except) __defProp5(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM3 = (mod, isNodeMode, target) => (target = mod != null ? __create3(__getProtoOf3(mod)) : {}, __copyProps3(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp5(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
var require_dist = __commonJS3({
  "node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parse = parse22;
    exports.serialize = serialize2;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = function() {
      };
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parse22(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2) return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) break;
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        if (obj[key] === void 0) {
          let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          let valEndIdx = endIndex(str, endIdx, valStartIdx);
          const value = dec(str.slice(valStartIdx, valEndIdx));
          obj[key] = value;
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function startIndex(str, index, max) {
      do {
        const code = str.charCodeAt(index);
        if (code !== 32 && code !== 9) return index;
      } while (++index < max);
      return max;
    }
    function endIndex(str, index, min) {
      while (index > min) {
        const code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9) return index + 1;
      }
      return min;
    }
    function serialize2(name, val, options) {
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
      }
      const value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
      }
      let str = name + "=" + value;
      if (!options) return str;
      if (options.maxAge !== void 0) {
        if (!Number.isInteger(options.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
      }
      if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
          throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
      }
      if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
          throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
      }
      if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
      }
      if (options.httpOnly) {
        str += "; HttpOnly";
      }
      if (options.secure) {
        str += "; Secure";
      }
      if (options.partitioned) {
        str += "; Partitioned";
      }
      if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
      }
      if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
      }
      return str;
    }
    function decode(str) {
      if (str.indexOf("%") === -1) return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});
var allCookie = __toESM3(require_dist(), 1);
var cookie = allCookie.default || allCookie;
var parse3 = cookie.parse;
var serialize = cookie.serialize;

// node_modules/msw/lib/core/utils/request/getRequestCookies.mjs
function parseCookies(input) {
  const parsedCookies = parse3(input);
  const cookies = {};
  for (const cookieName in parsedCookies) {
    if (typeof parsedCookies[cookieName] !== "undefined") {
      cookies[cookieName] = parsedCookies[cookieName];
    }
  }
  return cookies;
}
function getAllDocumentCookies() {
  return parseCookies(document.cookie);
}
function getDocumentCookies(request) {
  if (typeof document === "undefined" || typeof location === "undefined") {
    return {};
  }
  switch (request.credentials) {
    case "same-origin": {
      const requestUrl = new URL(request.url);
      return location.origin === requestUrl.origin ? getAllDocumentCookies() : {};
    }
    case "include": {
      return getAllDocumentCookies();
    }
    default: {
      return {};
    }
  }
}
function getAllRequestCookies(request) {
  const requestCookieHeader = request.headers.get("cookie");
  const cookiesFromHeaders = requestCookieHeader ? parseCookies(requestCookieHeader) : {};
  const cookiesFromDocument = getDocumentCookies(request);
  for (const name in cookiesFromDocument) {
    request.headers.append("cookie", serialize(name, cookiesFromDocument[name]));
  }
  const cookiesFromStore = cookieStore.getCookies(request.url);
  const storedCookiesObject = Object.fromEntries(cookiesFromStore.map((cookie2) => [cookie2.key, cookie2.value]));
  for (const cookie2 of cookiesFromStore) {
    request.headers.append("cookie", cookie2.toString());
  }
  return __spreadValues(__spreadValues(__spreadValues({}, cookiesFromDocument), storedCookiesObject), cookiesFromHeaders);
}

// node_modules/msw/lib/core/handlers/HttpHandler.mjs
var HttpMethods = /* @__PURE__ */ ((HttpMethods2) => {
  HttpMethods2["HEAD"] = "HEAD";
  HttpMethods2["GET"] = "GET";
  HttpMethods2["POST"] = "POST";
  HttpMethods2["PUT"] = "PUT";
  HttpMethods2["PATCH"] = "PATCH";
  HttpMethods2["OPTIONS"] = "OPTIONS";
  HttpMethods2["DELETE"] = "DELETE";
  return HttpMethods2;
})(HttpMethods || {});
var HttpHandler = class extends RequestHandler {
  constructor(method, predicate, resolver, options) {
    const displayPath = typeof predicate === "function" ? "[custom predicate]" : predicate;
    super({
      info: {
        header: `${method}${displayPath ? ` ${displayPath}` : ""}`,
        path: predicate,
        method
      },
      resolver,
      options
    });
    this.checkRedundantQueryParameters();
  }
  checkRedundantQueryParameters() {
    const {
      method,
      path
    } = this.info;
    if (!path || path instanceof RegExp || typeof path === "function") {
      return;
    }
    const url = cleanUrl(path);
    if (url === path) {
      return;
    }
    devUtils.warn(`Found a redundant usage of query parameters in the request handler URL for "${method} ${path}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/http/intercepting-requests#querysearch-parameters`);
  }
  parse(args) {
    return __async(this, null, function* () {
      const url = new URL(args.request.url);
      const cookies = getAllRequestCookies(args.request);
      if (typeof this.info.path === "function") {
        const customPredicateResult = yield this.info.path({
          request: args.request,
          cookies
        });
        const match22 = typeof customPredicateResult === "boolean" ? {
          matches: customPredicateResult,
          params: {}
        } : customPredicateResult;
        return {
          match: match22,
          cookies
        };
      }
      const match2 = this.info.path ? matchRequestUrl(url, this.info.path, args.resolutionContext?.baseUrl) : {
        matches: false,
        params: {}
      };
      return {
        match: match2,
        cookies
      };
    });
  }
  predicate(args) {
    return __async(this, null, function* () {
      const hasMatchingMethod = this.matchMethod(args.request.method);
      const hasMatchingUrl = args.parsedResult.match.matches;
      return hasMatchingMethod && hasMatchingUrl;
    });
  }
  matchMethod(actualMethod) {
    return this.info.method instanceof RegExp ? this.info.method.test(actualMethod) : isStringEqual(this.info.method, actualMethod);
  }
  extendResolverArgs(args) {
    return {
      params: args.parsedResult.match?.params || {},
      cookies: args.parsedResult.cookies
    };
  }
  log(args) {
    return __async(this, null, function* () {
      const publicUrl = toPublicUrl(args.request.url);
      const loggedRequest = yield serializeRequest(args.request);
      const loggedResponse = yield serializeResponse(args.response);
      const statusColor = getStatusCodeColor(loggedResponse.status);
      console.groupCollapsed(devUtils.formatMessage(`${getTimestamp()} ${args.request.method} ${publicUrl} (%c${loggedResponse.status} ${loggedResponse.statusText}%c)`), `color:${statusColor}`, "color:inherit");
      console.log("Request", loggedRequest);
      console.log("Handler:", this);
      console.log("Response", loggedResponse);
      console.groupEnd();
    });
  }
};

// node_modules/msw/lib/core/http.mjs
function createHttpHandler(method) {
  return (predicate, resolver, options = {}) => {
    return new HttpHandler(method, predicate, resolver, options);
  };
}
var http = {
  all: createHttpHandler(/.+/),
  head: createHttpHandler(HttpMethods.HEAD),
  get: createHttpHandler(HttpMethods.GET),
  post: createHttpHandler(HttpMethods.POST),
  put: createHttpHandler(HttpMethods.PUT),
  delete: createHttpHandler(HttpMethods.DELETE),
  patch: createHttpHandler(HttpMethods.PATCH),
  options: createHttpHandler(HttpMethods.OPTIONS)
};

// node_modules/msw/lib/core/HttpResponse.mjs
var bodyType = Symbol("bodyType");
var HttpResponse = class _HttpResponse extends FetchResponse2 {
  [bodyType] = null;
  constructor(body, init) {
    const responseInit = normalizeResponseInit(init);
    super(body, responseInit);
    decorateResponse(this, responseInit);
  }
  static error() {
    return super.error();
  }
  /**
   * Create a `Response` with a `Content-Type: "text/plain"` body.
   * @example
   * HttpResponse.text('hello world')
   * HttpResponse.text('Error', { status: 500 })
   */
  static text(body, init) {
    const responseInit = normalizeResponseInit(init);
    if (!responseInit.headers.has("Content-Type")) {
      responseInit.headers.set("Content-Type", "text/plain");
    }
    if (!responseInit.headers.has("Content-Length")) {
      responseInit.headers.set("Content-Length", body ? new Blob([body]).size.toString() : "0");
    }
    return new _HttpResponse(body, responseInit);
  }
  /**
   * Create a `Response` with a `Content-Type: "application/json"` body.
   * @example
   * HttpResponse.json({ firstName: 'John' })
   * HttpResponse.json({ error: 'Not Authorized' }, { status: 401 })
   */
  static json(body, init) {
    const responseInit = normalizeResponseInit(init);
    if (!responseInit.headers.has("Content-Type")) {
      responseInit.headers.set("Content-Type", "application/json");
    }
    const responseText = JSON.stringify(body);
    if (!responseInit.headers.has("Content-Length")) {
      responseInit.headers.set("Content-Length", responseText ? new Blob([responseText]).size.toString() : "0");
    }
    return new _HttpResponse(responseText, responseInit);
  }
  /**
   * Create a `Response` with a `Content-Type: "application/xml"` body.
   * @example
   * HttpResponse.xml(`<user name="John" />`)
   * HttpResponse.xml(`<article id="abc-123" />`, { status: 201 })
   */
  static xml(body, init) {
    const responseInit = normalizeResponseInit(init);
    if (!responseInit.headers.has("Content-Type")) {
      responseInit.headers.set("Content-Type", "text/xml");
    }
    return new _HttpResponse(body, responseInit);
  }
  /**
   * Create a `Response` with a `Content-Type: "text/html"` body.
   * @example
   * HttpResponse.html(`<p class="author">Jane Doe</p>`)
   * HttpResponse.html(`<main id="abc-123">Main text</main>`, { status: 201 })
   */
  static html(body, init) {
    const responseInit = normalizeResponseInit(init);
    if (!responseInit.headers.has("Content-Type")) {
      responseInit.headers.set("Content-Type", "text/html");
    }
    return new _HttpResponse(body, responseInit);
  }
  /**
   * Create a `Response` with an `ArrayBuffer` body.
   * @example
   * const buffer = new ArrayBuffer(3)
   * const view = new Uint8Array(buffer)
   * view.set([1, 2, 3])
   *
   * HttpResponse.arrayBuffer(buffer)
   */
  static arrayBuffer(body, init) {
    const responseInit = normalizeResponseInit(init);
    if (!responseInit.headers.has("Content-Type")) {
      responseInit.headers.set("Content-Type", "application/octet-stream");
    }
    if (body && !responseInit.headers.has("Content-Length")) {
      responseInit.headers.set("Content-Length", body.byteLength.toString());
    }
    return new _HttpResponse(body, responseInit);
  }
  /**
   * Create a `Response` with a `FormData` body.
   * @example
   * const data = new FormData()
   * data.set('name', 'Alice')
   *
   * HttpResponse.formData(data)
   */
  static formData(body, init) {
    return new _HttpResponse(body, normalizeResponseInit(init));
  }
};

// node_modules/msw/lib/core/index.mjs
checkGlobals();

// src/mocks/mockData/mockUser.mock.ts
var mockUsers = [
  { id: 1, nom: "Dupont", prenom: "Jean", matricule: 123456, mail: "jean@example.com" },
  { id: 2, nom: "Martin", prenom: "Marie", matricule: 123456, mail: "marie@example.com" },
  { id: 3, nom: "Grangier", prenom: "Joris", matricule: 123456, mail: "gr.jo@example.com" },
  { id: 4, nom: "Charles", prenom: "Prince", matricule: 123456, mail: "king.charles@jack.uk" }
];

// src/mocks/mockData/mockTools.mock.ts
var mockTools = [
  {
    id: 1,
    sapToolNumber: "OT099123",
    description: "Drapage Elevator LH",
    identification: "TB17904-Z01-F46C575656465",
    designation: "Drapage Elevator LH",
    programme: "F8X"
  },
  {
    id: 2,
    sapToolNumber: "OT098000",
    description: "Drapage Elevator RH",
    identification: "TB17904-Z01-F46C575656465",
    designation: "Drapage Elevator RH",
    programme: "F8X"
  },
  {
    id: 3,
    sapToolNumber: "OT100145",
    description: "Assemblage H160",
    identification: "TB17904-Z01-F46C575656465",
    designation: "Assemblage H160",
    programme: "F8X"
  },
  {
    id: 4,
    sapToolNumber: "OT101258",
    description: "Test d\xE9moulage A350",
    identification: "TB17904-Z01-F46C575656465",
    designation: "Test d\xE9moulage A350",
    programme: "F8X"
  },
  {
    id: 5,
    sapToolNumber: "OT099123",
    description: "Hot Forming Omega 3 LH",
    identification: "TB17904-Z01-F46C575656465",
    designation: "Hot Forming Omega 3 LH",
    programme: "F8X"
  },
  {
    id: 6,
    sapToolNumber: "OT099123",
    description: "Hot Forming Omega 3 LH",
    identification: "TB17904-Z01-F46C575656465",
    designation: "Hot Forming Omega 3 LH",
    programme: "F8X"
  }
];

// src/mocks/mockData/mockToolRequest.mock.ts
var mockToolRequests = [
  {
    id: 1,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.SUBMITTED
  },
  {
    id: 2,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[1],
    outillage: mockTools[2],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 3,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[2],
    outillage: mockTools[2],
    statut: RequestStatus.DRAFT
  },
  {
    id: 4,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[3],
    outillage: mockTools[0],
    statut: RequestStatus.COMPLETED
  },
  {
    id: 5,
    bloquantProd: true,
    type: RequestType.CONTROLE,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[1],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 6,
    bloquantProd: true,
    type: RequestType.CONTROLE,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[5],
    statut: RequestStatus.RETURNED
  },
  {
    id: 7,
    bloquantProd: false,
    type: RequestType.MAINTENANCE,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[1],
    outillage: mockTools[4],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 8,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[1],
    outillage: mockTools[3],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 9,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[2],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 10,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[3],
    outillage: mockTools[1],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 11,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[3],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 12,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[3],
    outillage: mockTools[1],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 13,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[2],
    outillage: mockTools[2],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 14,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[2],
    outillage: mockTools[3],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 15,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[1],
    outillage: mockTools[4],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 16,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: /* @__PURE__ */ new Date(),
    demandeur: mockUsers[2],
    outillage: mockTools[5],
    statut: RequestStatus.IN_PROGRESS
  }
];

// src/mocks/handlers.ts
var mockProgrammesAvion = [
  { client: "AIRBUS", designation: "MLGD-900", id: 1 },
  { client: "AIRBUS", designation: "MLGD-1000", id: 2 },
  { client: "AIRBUS", designation: "A330", id: 3 },
  { client: "GULFSTREAM", designation: "G600 ELEVATOR", id: 4 }
];
var mockSBO = [
  {
    id: 1,
    title: "Titre Test",
    description: "Description Test",
    aircraftProgram: "1",
    dateBesoin: /* @__PURE__ */ new Date()
  }
];
var handlers = [
  // GET - Liste des utilisateurs
  http.get("/api/users", () => {
    return HttpResponse.json(mockUsers);
  }),
  // GET - Utilisateur par ID
  http.get("/api/users/:id", ({ params }) => {
    const { id } = params;
    const user = mockUsers.find((u) => u.id === Number(id));
    if (!user) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(user);
  }),
  // POST - Créer un utilisateur
  http.post("/api/users", (_0) => __async(void 0, [_0], function* ({ request }) {
    const newUser = yield request.json();
    const user = __spreadValues({
      id: mockUsers.length + 1
    }, newUser);
    mockUsers.push(user);
    return HttpResponse.json(user, { status: 201 });
  })),
  // PUT - Mettre à jour un utilisateur
  http.put("/api/users/:id", (_0) => __async(void 0, [_0], function* ({ params, request }) {
    const { id } = params;
    const updates = yield request.json();
    const userIndex = mockUsers.findIndex((u) => u.id === Number(id));
    if (userIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }
    mockUsers[userIndex] = __spreadValues(__spreadValues({}, mockUsers[userIndex]), updates);
    return HttpResponse.json(mockUsers[userIndex]);
  })),
  // DELETE - Supprimer un utilisateur
  http.delete("/api/users/:id", ({ params }) => {
    const { id } = params;
    const userIndex = mockUsers.findIndex((u) => u.id === Number(id));
    if (userIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }
    mockUsers.splice(userIndex, 1);
    return new HttpResponse(null, { status: 204 });
  }),
  // GET - Liste des produits avec pagination
  http.get("/usine-api-dev/public/index.php/api/programme_avions", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const limit = Number(url.searchParams.get("limit")) || 10;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedProducts = mockProgrammesAvion.slice(start, end);
    return HttpResponse.json({
      data: paginatedProducts,
      total: mockProgrammesAvion.length,
      page,
      limit
    });
  }),
  // POST - Créer un outillage
  http.post("/api/tools", (_0) => __async(void 0, [_0], function* ({ request }) {
    const newTool = yield request.json();
    const tool = __spreadValues({
      id: mockTools.length + 1
    }, newTool);
    mockTools.push(tool);
    return HttpResponse.json(tool, { status: 201 });
  })),
  // POST - Créer une request
  http.post("/api/tools/request", (_0) => __async(void 0, [_0], function* ({ request }) {
    const newToolRequest = yield request.json();
    const toolRequest = __spreadValues({
      id: mockToolRequests.length + 1
    }, newToolRequest);
    mockToolRequests.push(toolRequest);
    console.log(mockToolRequests, RequestType.SBO);
    switch (toolRequest.type) {
      case RequestType.SBO:
        const newSpecSBO = newToolRequest.typeData;
        const newSBO = __spreadValues({
          id: mockSBO.length + 1
        }, newSpecSBO);
        mockSBO.push(newSBO);
        break;
      default:
        break;
    }
    console.log(mockSBO);
    return HttpResponse.json(toolRequest, { status: 201 });
  })),
  http.get("/api/tools/request", (_0) => __async(void 0, [_0], function* ({ request }) {
    return HttpResponse.json(mockToolRequests, { status: 201 });
  })),
  http.get("/api/tools/request/:id", (_0) => __async(void 0, [_0], function* ({ request, params }) {
    const { id } = params;
    return HttpResponse.json(mockToolRequests[+id - 1], { status: 201 });
  })),
  // // POST - Créer une demande outillage SBO
  // http.post('api/tools/request/SBO', async ({ request }) => {
  //   return HttpResponse.json(newSBO, { status: 201 });
  // }),
  // Simuler un délai réseau (optionnel)
  http.get("/api/slow-endpoint", () => __async(void 0, null, function* () {
    yield new Promise((resolve) => setTimeout(resolve, 2e3));
    return HttpResponse.json({ message: "R\xE9ponse apr\xE8s 2 secondes" });
  })),
  // Simuler une erreur
  http.get("/api/error", () => {
    return HttpResponse.json({ error: "Une erreur est survenue" }, { status: 500 });
  })
];

// src/mocks/browser.ts
var worker = setupWorker(...handlers);
function startMockWorker() {
  return __async(this, null, function* () {
    if (typeof window === "undefined") {
      return;
    }
    try {
      yield worker.start({
        onUnhandledRequest: "warn",
        serviceWorker: {
          url: "/mockServiceWorker.js",
          options: {
            // Scope pour capturer toutes les requêtes
            scope: "/"
          }
        },
        // Attendre que le Service Worker soit ready
        waitUntilReady: true
      });
      console.log("\u2705 MSW Started Successfully");
      console.log("\u{1F536} Mocking API:", window.location.origin);
      return worker;
    } catch (error4) {
      console.error("\u274C Failed to start MSW:", error4);
      throw error4;
    }
  });
}
export {
  startMockWorker,
  worker
};
/*! Bundled license information:

tough-cookie/dist/index.js:
  (*!
   * Copyright (c) 2015-2020, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *)

msw/lib/shims/statuses.mjs:
  (*! Bundled license information:
  
  statuses/index.js:
    (*!
     * statuses
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2016 Douglas Christopher Wilson
     * MIT Licensed
     *)
  *)
*/
//# sourceMappingURL=browser-PA7M3EXV.js.map

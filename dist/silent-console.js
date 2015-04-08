(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require, exports, module);
    }
    else if(typeof define === 'function' && define.amd) {
        define(['require', 'exports', 'module'], factory);
    }
    else {
        var req = function(id) {return root[id];},
            exp = root,
            mod = {exports: exp};
        root['silentConsole'] = factory(req, exp, mod);
    }
}(this, function(require, exports, module) {
/*
  # Silent Console
  
  Lifted almost verbatim from Console-polyfill (MIT license.)
  https://github.com/paulmillr/console-polyfill

  ## Key differences:

  * Silent console doesn't care about the existing window.console.
  * Silent console has the same interface but no actual operations.
  * Equivalent to polyfilling console in an environment without a console.

*/

function silentConsole() {
    var dummy = function() {};
    var console = {};
    var empty = {};
    var properties = 'memory'.split(',');
    var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
       'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
       'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');

    var prop, method;
    while (prop = properties.pop()) console[prop] = empty;
    while (method = methods.pop()) console[method] = dummy;

    return console;
}

return silentConsole;
}));

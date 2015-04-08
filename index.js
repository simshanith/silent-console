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

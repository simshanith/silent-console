# Silent Console

Lifted almost verbatim from Console-polyfill (MIT license.)
https://github.com/paulmillr/console-polyfill

## Key differences:

* Silent console doesn't care about the existing `window.console`.
* Silent console has the same interface but no actual operations.
* Equivalent to polyfilling console in an environment without a console.

// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.compareexchange
description: >
  Test Atomics.compareExchange on non-shared integer TypedArrays
includes: [testTypedArray.js]
---*/

var ab = new ArrayBuffer(16);

var int_views = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array];

testWithTypedArrayConstructors(function(View) {
    var view = new View(ab);

    assert.throws(TypeError, (() => Atomics.compareExchange(view, 0, 0, 0)));
}, int_views);

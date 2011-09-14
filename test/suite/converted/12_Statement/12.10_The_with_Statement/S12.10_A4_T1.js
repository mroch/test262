// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Changing property using "eval" statement containing "with" statement
 *
 * @section 12.10
 * @path 12_Statement/12.10_The_with_Statement/S12.10_A4_T1.js
 * @description Changing string property
 * @strict_only
 * @negative
 */

this.p1 = 1;
var myObj = {
  p1: 'a', 
}
eval("with(myObj){p1='b'}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1 !== 'b'){
  $ERROR('#1: myObj.p1 === "b". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 === 1){
  $ERROR('#2: myObj.p1 !== 1');
}
//
//////////////////////////////////////////////////////////////////////////////

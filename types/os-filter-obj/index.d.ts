// Type definitions for os-filter-obj
// Project: [~THE PROJECT NAME~]
// Definitions by: Tyler Butler <https://tylerbutler.com>

// Note that ES6 modules cannot directly export class objects.
// This file should be imported using the CommonJS-style:
//   import x = require('[~THE MODULE~]');
//
// Alternatively, if --allowSyntheticDefaultImports or
// --esModuleInterop is turned on, this file can also be
// imported as a default import:
//   import x from '[~THE MODULE~]';
//
// Refer to the TypeScript documentation at
// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
// to understand common workarounds for this limitation of ES6 modules.

/*~ If this module is a UMD module that exposes a global variable 'myFuncLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
// export as namespace myFuncLib;

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */

import { BinSource } from "bin-wrapper";

export = osFilterObject;

/*~ This example shows how to have multiple overloads for your function */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare function osFilterObject<T extends BinSource>(objects: T | T[]): T[];

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block. Often you will want to describe the
 *~ shape of the return type of the function; that type should
 *~ be declared in here, as this example shows.
 *~
 *~ Note that if you decide to include this namespace, the module can be
 *~ incorrectly imported as a namespace object, unless
 *~ --esModuleInterop is turned on:
 *~   import * as x from '[~THE MODULE~]'; // WRONG! DO NOT DO THIS!
 */
// declare namespace Greeter {
//     export interface LengthReturnType {
//         width: number;
//         height: number;
//     }
//     export interface NamedReturnType {
//         firstName: string;
//         lastName: string;
//     }

//     /*~ If the module also has properties, declare them here. For example,
//      *~ this declaration says that this code is legal:
//      *~   import f = require('super-greeter');
//      *~   console.log(f.defaultName);
//      */
//     export const defaultName: string;
//     export let defaultLength: number;
// }

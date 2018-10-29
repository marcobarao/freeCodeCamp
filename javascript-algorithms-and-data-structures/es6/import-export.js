// Import a function from another file
"use strict";
import { capitalizeString } from "string_functions";
capitalizeString("hello!");

// Export inline
"use strict";
export const foo = "bar";
export const bar = "foo";

// Import everithing from file
"use strict";
import * as str from "capitalize_strings";

// Export fallback with export default
"use strict";
export default function subtract(x, y) {
  return x - y;
}

// Import a default export
"use strict";
import subtract from "math_functions";
subtract(7,4);

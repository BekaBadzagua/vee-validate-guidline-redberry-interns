// ===============================================================================================
// ===============================================================================================
// strategy #1                    Vee-Validate & @vee-validate/rules
// ===============================================================================================
// ===============================================================================================
import { defineRule } from "vee-validate"; // npm install vee-validate --save
import { required, email, min } from "@vee-validate/rules"; // npm install @vee-validate/rules

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

// ===============================================================================================
// ===============================================================================================
//  strategy #2        Or you can also globally define all the available rules
//                              in the @vee-validate/rules package:
// ===============================================================================================
// ===============================================================================================
//
//        import { defineRule } from 'vee-validate';
//        import AllRules from '@vee-validate/rules';
//
//        Object.keys(AllRules).forEach(rule => {
//            defineRule(rule, AllRules[rule]);
//        });
//
//
//
// ===============================================================================================
// ===============================================================================================
//   strategy #3                You can also declare your custom rules:
// ===============================================================================================
// ===============================================================================================
//
//
//      defineRule('required', value => {
//          if (!value || !value.length) {
//              return 'This field is required';
//          }
//          return true;
//      });
//
//      defineRule('min-length', (value, [limit]) => {
//          // The field is empty so it should pass
//          if (!value || !value.length) {
//              return true;
//          }
//
//          if (value.length < limit) {
//              return `This field must be at least ${limit} characters`;
//          }
//
//          return true;
//      });
//
// ===============================================================================================
// ===============================================================================================

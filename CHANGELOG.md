# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.1](https://github.com/bigcommerce/checkout-js/compare/v1.0.0...v1.0.1) (2019-08-23)


### Bug Fixes

* **billing:** CHECKOUT-4352 Display special message in billing section when using Amazon Pay ([424b9c0](https://github.com/bigcommerce/checkout-js/commit/424b9c0))
* **billing:** CHECKOUT-4352 Fix billing address not displaying properly when it is partially complete ([7ac4b42](https://github.com/bigcommerce/checkout-js/commit/7ac4b42))
* **billing:** CHECKOUT-4352 Keep the loading spinner spinning when updating order comment and billing address ([f1f161e](https://github.com/bigcommerce/checkout-js/commit/f1f161e))
* **checkout:** CHECKOUT-4344 Fix checkout steps not collapsing in mobile view ([a81a67a](https://github.com/bigcommerce/checkout-js/commit/a81a67a))
* **payment:** INT-1837 Fix conflicting styles injected by Klarna causing modal to be cropped in Firefox ([4b4b1fc](https://github.com/bigcommerce/checkout-js/commit/4b4b1fc))


### Code Refactoring

* **checkout:** CHECKOUT-4338 Use media query component to conditionally render checkout step ([d352673](https://github.com/bigcommerce/checkout-js/commit/d352673))
* **checkout:** CHECKOUT-4344 Remove temporary code required for transition period ([99388b3](https://github.com/bigcommerce/checkout-js/commit/99388b3))
* **common:** CHECKOUT-4338 Fix circular dependencies of ES modules ([e28f98d](https://github.com/bigcommerce/checkout-js/commit/e28f98d))
* **common:** CHECKOUT-4338 Include hash in file name so we can determine public path for IE11 more reliably ([e5a9c57](https://github.com/bigcommerce/checkout-js/commit/e5a9c57))
* **common:** CHECKOUT-4338 Move `BuildHooks` Webpack plugin to `scripts` folder ([54de46c](https://github.com/bigcommerce/checkout-js/commit/54de46c))
* **common:** CHECKOUT-4338 Re-enable modules concatenation ([1b79f2b](https://github.com/bigcommerce/checkout-js/commit/1b79f2b))
* **common:** CHECKOUT-4338 Stop importing internal modules ([ef9d34c](https://github.com/bigcommerce/checkout-js/commit/ef9d34c))
* **common:** CHECKOUT-4338 Use ESLint to help fix import / export issues ([a27769e](https://github.com/bigcommerce/checkout-js/commit/a27769e))
* **common:** CHECKOUT-4351 Enable React-specific ESLint rules ([ce56dd1](https://github.com/bigcommerce/checkout-js/commit/ce56dd1))


### Performance Improvements

* **billing:** CHECKOUT-4352 Optimize rendering of static address ([dab9d1c](https://github.com/bigcommerce/checkout-js/commit/dab9d1c))
* **checkout:** CHECKOUT-4338 Lazy load checkout steps using dynamic imports ([42522ab](https://github.com/bigcommerce/checkout-js/commit/42522ab))
* **checkout:** CHECKOUT-4338 Only load cart and order summary drawer when in mobile view ([35a0560](https://github.com/bigcommerce/checkout-js/commit/35a0560))

## 1.0.0 (2019-08-14)


### Bug Fixes

* **checkout:** CHECKOUT-4321 Bump checkout-sdk version to v1.32.1 ([2737c71](https://github.com/bigcommerce/checkout-js/commit/2737c71))
* **common:** CHECKOUT-4307 Include polyfills for 3rd party dependencies ([7e103d6](https://github.com/bigcommerce/checkout-js/commit/7e103d6))


### Features

* **billing:** CHECKOUT-4223 Add Billing components ([f55addd](https://github.com/bigcommerce/checkout-js/commit/f55addd))
* **cart:** CHECKOUT-4223 Add Cart summary component ([46fbca2](https://github.com/bigcommerce/checkout-js/commit/46fbca2))
* **cart:** CHECKOUT-4223 Add coupon component ([748898e](https://github.com/bigcommerce/checkout-js/commit/748898e))
* **checkout:** CHECKOUT-4223 Add `CheckoutSupport` interface, to be implemented by classes used to check if feature is supported by certain type of checkout ([8115957](https://github.com/bigcommerce/checkout-js/commit/8115957))
* **checkout:** CHECKOUT-4223 Add `withCheckout` HOC for connecting to `CheckoutContext` ([e2b10d5](https://github.com/bigcommerce/checkout-js/commit/e2b10d5))
* **checkout:** CHECKOUT-4223 Add checkout component ([44b8944](https://github.com/bigcommerce/checkout-js/commit/44b8944))
* **checkout:** CHECKOUT-4223 Add checkout steps ([15cecb5](https://github.com/bigcommerce/checkout-js/commit/15cecb5))
* **checkout:** CHECKOUT-4223 Add component for providing checkout context ([8adfae9](https://github.com/bigcommerce/checkout-js/commit/8adfae9))
* **checkout:** CHECKOUT-4223 Add component for rendering list of promotion banners ([8256063](https://github.com/bigcommerce/checkout-js/commit/8256063))
* **checkout:** INT-1608 INT-1811 Bump `checkout-sdk` version ([cdf6fd7](https://github.com/bigcommerce/checkout-js/commit/cdf6fd7))
* **common:** CHECKOUT-4223 Add address components ([fd6ad47](https://github.com/bigcommerce/checkout-js/commit/fd6ad47))
* **common:** CHECKOUT-4223 Add AddressForm ([5091c13](https://github.com/bigcommerce/checkout-js/commit/5091c13))
* **common:** CHECKOUT-4223 Add analytics module ([e00ee0a](https://github.com/bigcommerce/checkout-js/commit/e00ee0a))
* **common:** CHECKOUT-4223 Add base class for creating custom error objects ([cc06eff](https://github.com/bigcommerce/checkout-js/commit/cc06eff))
* **common:** CHECKOUT-4223 Add component for retrieving translated text from locale context ([d84403d](https://github.com/bigcommerce/checkout-js/commit/d84403d))
* **common:** CHECKOUT-4223 Add config mock ([bf0f1b5](https://github.com/bigcommerce/checkout-js/commit/bf0f1b5))
* **common:** CHECKOUT-4223 Add currency UI components ([330cfcb](https://github.com/bigcommerce/checkout-js/commit/330cfcb))
* **common:** CHECKOUT-4223 Add DOM module ([bc0f58e](https://github.com/bigcommerce/checkout-js/commit/bc0f58e))
* **common:** CHECKOUT-4223 Add empty array and object ([3e07d7a](https://github.com/bigcommerce/checkout-js/commit/3e07d7a))
* **common:** CHECKOUT-4223 Add Error logger ([83947ec](https://github.com/bigcommerce/checkout-js/commit/83947ec))
* **common:** CHECKOUT-4223 Add ErrorModal component ([58a2bdf](https://github.com/bigcommerce/checkout-js/commit/58a2bdf))
* **common:** CHECKOUT-4223 Add foundational UI components ([a97d8bc](https://github.com/bigcommerce/checkout-js/commit/a97d8bc))
* **common:** CHECKOUT-4223 Add geography mocks ([8fed0f8](https://github.com/bigcommerce/checkout-js/commit/8fed0f8))
* **common:** CHECKOUT-4223 Add GoogleAddressAutocomplete component ([931ba93](https://github.com/bigcommerce/checkout-js/commit/931ba93))
* **common:** CHECKOUT-4223 Add GoogleAddressAutocomplete component ([49633b2](https://github.com/bigcommerce/checkout-js/commit/49633b2))
* **common:** CHECKOUT-4223 Add HOC factories ([5bd3c89](https://github.com/bigcommerce/checkout-js/commit/5bd3c89))
* **common:** CHECKOUT-4223 Add i18n ([20c4787](https://github.com/bigcommerce/checkout-js/commit/20c4787))
* **common:** CHECKOUT-4223 Add images and SVGs ([ba0e9cf](https://github.com/bigcommerce/checkout-js/commit/ba0e9cf))
* **common:** CHECKOUT-4223 Add locale context provider ([9511bcd](https://github.com/bigcommerce/checkout-js/commit/9511bcd))
* **common:** CHECKOUT-4223 Add memoize function for caching results of pure functions ([322ca72](https://github.com/bigcommerce/checkout-js/commit/322ca72))
* **common:** CHECKOUT-4223 Add polyfills ([109cb24](https://github.com/bigcommerce/checkout-js/commit/109cb24))
* **common:** CHECKOUT-4223 Move existing stylesheets over ([5a8ad74](https://github.com/bigcommerce/checkout-js/commit/5a8ad74))
* **customer:** CHECKOUT-4223 Add customer information component ([f0fe892](https://github.com/bigcommerce/checkout-js/commit/f0fe892))
* **customer:** CHECKOUT-4223 Add customer step component ([70cb6c6](https://github.com/bigcommerce/checkout-js/commit/70cb6c6))
* **customer:** CHECKOUT-4223 Add guest customer form ([b6b9e26](https://github.com/bigcommerce/checkout-js/commit/b6b9e26))
* **customer:** CHECKOUT-4223 Add GuestSignup component ([cf5f37d](https://github.com/bigcommerce/checkout-js/commit/cf5f37d))
* **customer:** CHECKOUT-4223 Add returning customer form ([1767ec7](https://github.com/bigcommerce/checkout-js/commit/1767ec7))
* **embedded-checkout:** CHECKOUT-4223 Add support for Embedded Checkout ([a5b6cf8](https://github.com/bigcommerce/checkout-js/commit/a5b6cf8))
* **order:** CHECKOUT-4223 Add order confirmation page ([8194118](https://github.com/bigcommerce/checkout-js/commit/8194118))
* **order:** CHECKOUT-4223 Add OrderComments component ([63a7a78](https://github.com/bigcommerce/checkout-js/commit/63a7a78))
* **payment:** CHECKOUT-4223 Add common payment form fields ([f21f9eb](https://github.com/bigcommerce/checkout-js/commit/f21f9eb))
* **payment:** CHECKOUT-4223 Add credit card payment form ([b7807fa](https://github.com/bigcommerce/checkout-js/commit/b7807fa))
* **payment:** CHECKOUT-4223 Add dropdown for selecting stored payment instrument ([6fcc576](https://github.com/bigcommerce/checkout-js/commit/6fcc576))
* **payment:** CHECKOUT-4223 Add generic payment method components ([6a882c5](https://github.com/bigcommerce/checkout-js/commit/6a882c5))
* **payment:** CHECKOUT-4223 Add GiftCertificate components ([35d3214](https://github.com/bigcommerce/checkout-js/commit/35d3214))
* **payment:** CHECKOUT-4223 Add instrument fieldset, to be used inside credit card payment form ([8fd3370](https://github.com/bigcommerce/checkout-js/commit/8fd3370))
* **payment:** CHECKOUT-4223 Add modal UI for managing stored instruments ([79f1bdc](https://github.com/bigcommerce/checkout-js/commit/79f1bdc))
* **payment:** CHECKOUT-4223 Add payment form component ([34fd528](https://github.com/bigcommerce/checkout-js/commit/34fd528))
* **payment:** CHECKOUT-4223 Add provider-specific payment method components ([8672952](https://github.com/bigcommerce/checkout-js/commit/8672952))
* **shipping:** CHECKOUT-4223 Add function for determining whether shopper is using multi-shipping ([fed94b3](https://github.com/bigcommerce/checkout-js/commit/fed94b3))
* **shipping:** CHECKOUT-4223 Add Shipping form ([601a939](https://github.com/bigcommerce/checkout-js/commit/601a939))
* **shipping:** CHECKOUT-4223 Add shipping util functions ([ef1655e](https://github.com/bigcommerce/checkout-js/commit/ef1655e))
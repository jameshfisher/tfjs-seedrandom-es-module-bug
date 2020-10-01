# TensorFlow.js doesn't work with ES module bundler because seedrandom package does not provide an ES module

To repro:

```
npm install
npm run build
open index.html
```
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
export default {
  input: 'main.es.js',
  output: { file: 'bundle.js', format: 'iife' },
  plugins: [ 
    commonjs(), 
    nodePolyfills(),
    resolve()
  ]
};

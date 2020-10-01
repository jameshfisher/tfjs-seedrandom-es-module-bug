import resolve from '@rollup/plugin-node-resolve';
export default {
  input: 'main.es.js',
  output: { file: 'bundle.js', format: 'iife' },
  plugins: [ resolve() ]
};

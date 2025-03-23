import image from '@rollup/plugin-image'; // For handling images
import resolve from '@rollup/plugin-node-resolve'; // For resolving dependencies
import commonjs from '@rollup/plugin-commonjs'; // For converting CommonJS to ES modules

export default {
  input: 'src/main.js', // Path to your entry file (adjust as needed)
  output: {
    file: 'dist/bundle.js', // Output file
    format: 'cjs', // Output format (e.g., cjs, esm, iife)
  },
  plugins: [
    image(), // Handles image imports
    resolve(), // Resolves third-party modules
    commonjs(), // Converts CommonJS modules to ES modules
  ],
};
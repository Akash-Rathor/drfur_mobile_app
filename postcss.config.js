module.exports = {
  plugins: {
    // Example: adding an async plugin (like autoprefixer or postcss-preset-env)
    'postcss-import': {},
    'autoprefixer': {}, // This may require async handling
    'cssnano': {}, // CSS minification (might also be async)
  }
}

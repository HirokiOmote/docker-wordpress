const mix = require('laravel-mix');
const path = require('path');
const styleLintPlugin = require('stylelint-webpack-plugin');

const autoprefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');

require('laravel-mix-eslint');

const sourcesPath = path.resolve('src');
const outputPath = mix.inProduction() ? 'dist' : 'public';

mix.autoload({
  jquery: ['$', 'jQuery']
});

mix
  .setPublicPath(outputPath)
  .sass(`${sourcesPath}/scss/style.scss`, outputPath)
  .js(`${sourcesPath}/js/main.js`, `${outputPath}/js`)
  .eslint({
    fix: false,
    cache: false
  });

mix.webpackConfig({
  plugins: [
    new styleLintPlugin({
      configFile: path.resolve('.stylelintrc'),
      files: ['**/*.scss'],
      syntax: 'scss'
    })
  ]
});

mix.options({
  cache: true,
  keepalive: true,
  processCssUrls: false,
  postCss: [
    autoprefixer,
    cssMqpacker({
      sort: true
    })
  ],
  clearConsole: true
});

if (mix.inProduction()) {
  mix.options({
    cache: false,
    postCss: [
      require('csswring')({
        removeAllComments: true
      })
    ]
  });
} else {
  mix.webpackConfig({ devtool: 'inline-source-map' });
}

module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          targets: {
            browsers: [
              'last 2 versions'
            ],
          },
          // 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill
          useBuiltIns: "entry",
          corejs: "3.9.1"
        },
      ],
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true,
        },
      ],
    ]
  }
  
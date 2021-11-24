const CONFIG = {
  //开发环境配置
  development: {
    assetsPath: '/static/images/', // 静态资源路径
    baseUrl: "http://test.com'",
  },

  //生产环境配置
  production: {
    assetsPath: '/static/images/', // 静态资源路径
    baseUrl: "http://test.com'",
  },
}

export default CONFIG[process.env.NODE_ENV]

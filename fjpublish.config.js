// 项目根目录下fjpublish.config.js
module.exports = {
  modules: [{
      name: '测试环境',
      env: 'sit',
      ssh: {
          host: '192.168.0.110',
          port:"8090",
          username: 'root',
          //rc版本的user选项和userName选项请在未来统一配置为username
          password: '',
      },
    //   buildCommand: 'prod',
      localPath: 'dist',
      remotePath: '/Test/dist',
  }]
}

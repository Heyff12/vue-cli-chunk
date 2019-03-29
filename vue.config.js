const glob = require("glob");
const appConfig = require("./appConfig");
//多页面入口
const pages = (function () {
    var entry = {};
    glob.sync("./src/pages/*").forEach(function (name) {
        // console.log(name)
        // var n = name.slice(12, name.length - 3);
        var n = name.slice(12, name.length - 0);
        // n = n.slice(0, n.lastIndexOf('/'));
        //接着我对路径字符串进行了一些裁剪成想要的路径
        // entry[n] = name;
        // console.log(n);
        appConfig.pages.forEach(function (page) {
            if (page.filename === n) {
                // entry[n] = name + "/main.js";
                entry[n] = {
                    entry: name + "/main.js",
                    template: './public/index.html',
                    chunks: ['chunk-vendors', 'chunk-common', n]
                }
                // console.log(entry);
            }
        });
    });
    return entry;
})();

module.exports = {
    pages,
    // pages: {
    //     index: {
    //         // page 的入口
    //         entry: './src/index/main.js',
    //         // 模板来源
    //         template: './public/index.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'index.html',
    //         // 当使用 title 选项时，
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: 'Index Page',
    //         // 在这个页面中包含的块，默认情况下会包含
    //         // 提取出来的通用 chunk 和 vendor chunk。
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']
    //     },
    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    //     // subpage: 'src/subpage/main.js'
    // },
    // 去掉文件名中的 hash
    filenameHashing: false,
    // 删除 HTML 相关的 webpack 插件
    chainWebpack: config => {
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    }
}
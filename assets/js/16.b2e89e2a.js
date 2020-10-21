(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{423:function(t,e,a){"use strict";a.r(e);var s=a(23),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("本项目内置了两种"),a("code",[t._v("自动部署")]),t._v("脚本，用于一键部署到 GitHub Pages 或 国内访问速度更快的Coding Pages")]),t._v(" "),a("h2",{attrs:{id:"_1-使用deploy-sh脚本部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用deploy-sh脚本部署"}},[t._v("#")]),t._v(" 1.使用deploy.sh脚本部署")]),t._v(" "),a("p",[t._v("第一步，修改"),a("code",[t._v("deploy.sh")]),t._v("脚本内的仓库地址为你的仓库，如有自定义域名则一并修改，没有则注释")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xugaoyi.com'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CNAME\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("第二步，一键部署命令")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run deploy\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("windows系统下使用bash命令窗")])]),t._v(" "),a("p",[t._v("第三步，设置仓库的GitHub Pages。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("deploy.sh")]),t._v("文件看 "),a("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/deploy.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("\n看不懂shell代码？ 参考："),a("a",{attrs:{href:"https://ipcmen.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("shell教程"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_2-使用github-action自动持续集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用github-action自动持续集成"}},[t._v("#")]),t._v(" 2. 使用GitHub Action自动持续集成")]),t._v(" "),a("p",[t._v("第一步，按照"),a("a",{attrs:{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("，生成一个github token (令牌)。")]),t._v(" "),a("p",[t._v("第二步，将这个密钥储存到当前仓库的"),a("code",[t._v("Settings/Secrets")]),t._v("里面。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Settings/Secrets")]),t._v("是储存秘密的环境变量的地方。环境变量的名字可以随便起，这里用的是"),a("code",[t._v("ACCESS_TOKEN")]),t._v("。如果你不用这个名字，"),a("code",[t._v(".github/workflows/ci.yml")]),t._v("脚本里的变量名也要跟着改。")])]),t._v(" "),a("p",[t._v("第三步，push提交代码到GitHub仓库master分支。")]),t._v(" "),a("p",[t._v("第四步，设置仓库的GitHub Pages")]),t._v(" "),a("blockquote",[a("p",[t._v("参考 "),a("a",{attrs:{href:"http://xugaoyi.com/pages/6b9d359ec5aa5019/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Action实现自动部署静态博客"),a("OutboundLink")],1),t._v(" "),a("code",[t._v("ci.yml")]),t._v("文件看 "),a("a",{attrs:{href:"https://github.com/xugaoyi/blog/blob/master/.github/workflows/ci.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("\n看不懂yaml代码？ 参考："),a("a",{attrs:{href:"https://xugaoyi.com/pages/4e8444e2d534d14f/",target:"_blank",rel:"noopener noreferrer"}},[t._v("yaml教程"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"部署升级-同时部署到github和coding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署升级-同时部署到github和coding"}},[t._v("#")]),t._v(" 部署升级：同时部署到github和coding")]),t._v(" "),a("p",[t._v("为了让博客站能够让百度收录，因此我把博客部署到了coding。相关"),a("a",{attrs:{href:"https://xugaoyi.com/pages/41f87d890d0a02af/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("在原有部署方式上做了升级，主要修改代码文件有下面这两个：")]),t._v(" "),a("p",[t._v("使用前先将"),a("a",{attrs:{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[t._v("github token (令牌) "),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://dev.tencent.com/help/doc/account/access-token",target:"_blank",rel:"noopener noreferrer"}},[t._v("coding token (令牌)"),a("OutboundLink")],1),t._v(" 同时设置到github仓库的"),a("code",[t._v("Settings/Secrets")]),t._v("位置。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/token.jpg",alt:"token设置"}})]),t._v(" "),a("h3",{attrs:{id:"部署方式有两种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署方式有两种"}},[t._v("#")]),t._v(" 部署方式有两种：")]),t._v(" "),a("h4",{attrs:{id:"_1-、使用如下命令一键部署到github和coding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-、使用如下命令一键部署到github和coding"}},[t._v("#")]),t._v(" 1) 、使用如下命令一键部署到github和coding")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run deploy\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-、使用github-action自动部署到github和coding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-、使用github-action自动部署到github和coding"}},[t._v("#")]),t._v(" 2）、使用GitHub Action自动部署到github和coding")]),t._v(" "),a("p",[t._v("只需要push提交代码到github仓库master分支即可。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考 "),a("a",{attrs:{href:"http://xugaoyi.com/pages/6b9d359ec5aa5019/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《GitHub Action实现自动部署静态博客》"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);
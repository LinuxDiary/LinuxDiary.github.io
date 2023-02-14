(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{274:function(r,e,t){"use strict";t.r(e);var a=t(6),n=Object(a.a)({},(function(){var r=this,e=r._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"首页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首页"}},[r._v("#")]),r._v(" 首页")]),r._v(" "),e("p",[r._v("常用的参考资料和文档")]),r._v(" "),e("h2",{attrs:{id:"开源镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开源镜像"}},[r._v("#")]),r._v(" 开源镜像")]),r._v(" "),e("p",[e("strong",[r._v("Linux")])]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://mirrors.163.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("网易"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://opsx.alibaba.com/mirror",target:"_blank",rel:"noopener noreferrer"}},[r._v("阿里云"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[r._v("清华大学"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://mirror.webtatic.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("webtatic"),e("OutboundLink")],1),r._v(" (包含 PHP 各个版本的 yum 源)")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[r._v("中国科学技术大学"),e("OutboundLink")],1)])]),r._v(" "),e("p",[r._v("使用阿里云的开源镜像 "),e("code",[r._v("yum")]),r._v(" 源和 "),e("code",[r._v("epel")]),r._v(" 源(CentOS7)")]),r._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[r._v("mv")]),r._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n"),e("span",{pre:!0,attrs:{class:"token function"}},[r._v("wget")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[r._v("-O")]),r._v(" /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\n"),e("span",{pre:!0,attrs:{class:"token function"}},[r._v("wget")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[r._v("-O")]),r._v(" /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo\nyum clean all\n"),e("span",{pre:!0,attrs:{class:"token function"}},[r._v("rm")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[r._v("-rf")]),r._v(" /var/cache/yum\nyum makecache\n")])])]),e("p",[e("strong",[r._v("pypi")])]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://pypi.doubanio.com/simple/",target:"_blank",rel:"noopener noreferrer"}},[r._v("豆瓣"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://mirrors.aliyun.com/pypi/simple/",target:"_blank",rel:"noopener noreferrer"}},[r._v("阿里云"),e("OutboundLink")],1)])]),r._v(" "),e("p",[r._v("临时使用")]),r._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[r._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[r._v("install")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[r._v("-i")]),r._v(" https://pypi.doubanio.com/simple some-package\n")])])]),e("p",[r._v("设置全局源")]),r._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[r._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[r._v("install")]),r._v(" pip "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[r._v("-U")]),r._v("\npip config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[r._v("set")]),r._v(" global.index-url https://pypi.doubanio.com/simple\n")])])]),e("h3",{attrs:{id:"官方文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[r._v("#")]),r._v(" 官方文档")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/",target:"_blank",rel:"noopener noreferrer"}},[r._v("MySQL 5.7"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://docs.djangoproject.com/en/2.1/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Django 2.1"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"http://nginx.org/en/docs/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Nginx"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Vue 2.x"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[r._v("VuePress"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://getbootstrap.com/docs/4.1/getting-started/introduction/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Bootstrap 4"),e("OutboundLink")],1),r._v(" (非官方中文参考文档："),e("a",{attrs:{href:"http://code.z01.com/v4/docs/",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://code.z01.com/v4/docs/"),e("OutboundLink")],1),r._v(")")])]),r._v(" "),e("h3",{attrs:{id:"javascript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[r._v("#")]),r._v(" JavaScript")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://wangdoc.com/javascript",target:"_blank",rel:"noopener noreferrer"}},[r._v("JavaScript 教程 -- 阮一峰"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("ES6 标准入门 -- 阮一峰"),e("OutboundLink")],1)])]),r._v(" "),e("h3",{attrs:{id:"在线教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在线教程"}},[r._v("#")]),r._v(" 在线教程")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://jamielinux.com/docs/libvirt-networking-handbook/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Libvirt Networking Handbook"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://wiki.libvirt.org/page/VirtualNetworking",target:"_blank",rel:"noopener noreferrer"}},[r._v("Libvirt VirtualNetworking"),e("OutboundLink")],1)])]),r._v(" "),e("h2",{attrs:{id:"快捷键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[r._v("#")]),r._v(" 快捷键")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/6185dc5eb507",target:"_blank",rel:"noopener noreferrer"}},[r._v("Sublime快捷键"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/e33f864981bb",target:"_blank",rel:"noopener noreferrer"}},[r._v("Atom快捷键"),e("OutboundLink")],1)])]),r._v(" "),e("h2",{attrs:{id:"工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[r._v("#")]),r._v(" 工具")]),r._v(" "),e("h3",{attrs:{id:"terminal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terminal"}},[r._v("#")]),r._v(" Terminal")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://hyper.is",target:"_blank",rel:"noopener noreferrer"}},[r._v("Hyper"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://www.iterm2.com",target:"_blank",rel:"noopener noreferrer"}},[r._v("iTerm2"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);
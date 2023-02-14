(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{230:function(t,v,_){"use strict";_.r(v);var r=_(6),d=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"yum命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#yum命令"}},[t._v("#")]),t._v(" yum命令")]),t._v(" "),v("h2",{attrs:{id:"列举"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#列举"}},[t._v("#")]),t._v(" 列举")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("yum list")]),t._v(" "),v("td",[t._v("列出资源库中所有可以安装或更新的rpm包")])]),t._v(" "),v("tr",[v("td",[t._v("yum list updates")]),t._v(" "),v("td",[t._v("列出资源库中所有可以更新的rpm包")])]),t._v(" "),v("tr",[v("td",[t._v("yum list installed")]),t._v(" "),v("td",[t._v("列出已经安装的所有的rpm包")])])])]),t._v(" "),v("h2",{attrs:{id:"信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信息"}},[t._v("#")]),t._v(" 信息")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("yum info")]),t._v(" "),v("td",[t._v("列出资源库中所有可以安装或更新的rpm包的信息")])]),t._v(" "),v("tr",[v("td",[t._v("yum info perl")]),t._v(" "),v("td",[t._v("列出perl包信息")])]),t._v(" "),v("tr",[v("td",[t._v("yum info perl*")]),t._v(" "),v("td",[t._v("列出perl开头的所有包的信息")])]),t._v(" "),v("tr",[v("td",[t._v("yum info updates")]),t._v(" "),v("td",[t._v("列出资源库中所有可以更新的rpm包的信息")])]),t._v(" "),v("tr",[v("td",[t._v("yum info installed")]),t._v(" "),v("td",[t._v("列出已经安装的所有的rpm包的信息")])])])]),t._v(" "),v("h2",{attrs:{id:"搜索"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#搜索"}},[t._v("#")]),t._v(" 搜索")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("yum search perl")]),t._v(" "),v("td",[t._v("搜索匹配特定字符的rpm包，返回rpm包名称和描述。搜索时也常用")])]),t._v(" "),v("tr",[v("td",[t._v("yum provides libstdc++.so.6")]),t._v(" "),v("td",[t._v("#反查包含某文件的rpm包")])])])]),t._v(" "),v("h2",{attrs:{id:"安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("yum install perl")]),t._v(" "),v("td",[t._v("安装perl包")])]),t._v(" "),v("tr",[v("td",[t._v("yum install perl*")]),t._v(" "),v("td",[t._v("安装perl开头的包")])]),t._v(" "),v("tr",[v("td",[t._v("yum remove perl*")]),t._v(" "),v("td",[t._v("会删除perl* 所有包，以及相关依赖的包")])])])]),t._v(" "),v("h2",{attrs:{id:"组包管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组包管理"}},[t._v("#")]),t._v(" 组包管理")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v('yum groupinstall "X Window System"')]),t._v(" "),v("td",[t._v("安装组包")])]),t._v(" "),v("tr",[v("td",[t._v('yum groupupdate "X Window System"')]),t._v(" "),v("td",[t._v("组包更新")])]),t._v(" "),v("tr",[v("td",[t._v("yum grouplist")]),t._v(" "),v("td",[t._v("列出可安装和已安装的组包")])]),t._v(" "),v("tr",[v("td",[t._v("yum grouplist hidden")]),t._v(" "),v("td",[t._v("列出所有的组包，CentOS7下默认隐藏了很多组包，例如X Window System")])]),t._v(" "),v("tr",[v("td",[t._v('yum groupremove "X Window System"')]),t._v(" "),v("td",[t._v("删除指定的组")])]),t._v(" "),v("tr",[v("td",[t._v('yum groupinfo "X Window System"')]),t._v(" "),v("td",[t._v("输出组包的信息")])])])]),t._v(" "),v("h2",{attrs:{id:"更新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("yum check-update")]),t._v(" "),v("td",[t._v("检查可更新的rpm包")])]),t._v(" "),v("tr",[v("td",[t._v("yum update")]),t._v(" "),v("td",[t._v("更新系统内所有的包，相当于系统升级到最新版")])]),t._v(" "),v("tr",[v("td",[t._v("yum update kernel kernel-source")]),t._v(" "),v("td",[t._v("更新指定的rpm包,如更新kernel和kernel-source")])]),t._v(" "),v("tr",[v("td",[t._v("yum upgrade")]),t._v(" "),v("td",[t._v("与update功能一样")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[v("code",[t._v("update")]),t._v(" 和 "),v("code",[t._v("upgrade")]),t._v(" 的区别是， "),v("code",[t._v("upgrade")]),t._v(" 在升级的过程中会删除旧版本的包，而 "),v("code",[t._v("update")]),t._v(" 不会。因此相比之下， "),v("code",[t._v("update")]),t._v(" 升级会保留一些旧的包依赖，更加安全一些。")])]),t._v(" "),v("h2",{attrs:{id:"清理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#清理"}},[t._v("#")]),t._v(" 清理")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("yum clean packages")]),t._v(" "),v("td",[t._v("清除暂存中rpm包文件")])]),t._v(" "),v("tr",[v("td",[t._v("yum clean headers")]),t._v(" "),v("td",[t._v("清除暂存中rpm头文件")])]),t._v(" "),v("tr",[v("td",[t._v("yum clean oldheaders")]),t._v(" "),v("td",[t._v("清除暂存中旧的rpm头文件")])]),t._v(" "),v("tr",[v("td",[t._v("yum clean all")]),t._v(" "),v("td",[t._v("清除暂存中旧的rpm头文件和包文件")])])])])])}),[],!1,null,null,null);v.default=d.exports}}]);
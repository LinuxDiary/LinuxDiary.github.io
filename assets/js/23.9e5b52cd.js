(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{223:function(t,_,v){"use strict";v.r(_);var r=v(6),a=Object(r.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"rpm命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rpm命令"}},[t._v("#")]),t._v(" rpm命令")]),t._v(" "),_("h2",{attrs:{id:"安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("rpm -ivh PACKAGE_NAME.rpm")]),t._v(" "),_("td",[t._v("其中i表示安装，v表示显示安装过程，h表示显示进度")])]),t._v(" "),_("tr",[_("td",[t._v("rpm -Uvh PACKAGE_NAME.rpm")]),t._v(" "),_("td",[t._v("U表示升级安装")])])])]),t._v(" "),_("h2",{attrs:{id:"删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("rpm -e PACKAGE_NAME")]),t._v(" "),_("td",[t._v("相关依赖会一起被卸载")])]),t._v(" "),_("tr",[_("td",[t._v("rpm -e –nodeps PACKAGE_NAME")]),t._v(" "),_("td",[t._v("不会卸载相关依赖")])]),t._v(" "),_("tr",[_("td",[t._v("rpm -e –allmatches PACKAGE_NAME")]),t._v(" "),_("td",[t._v("删除所有跟PACKAGE_NAME匹配的所有版本的包")])])])]),t._v(" "),_("h2",{attrs:{id:"查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[t._v("#")]),t._v(" 查询")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("rpm -q PACKAGE_NAME")]),t._v(" "),_("td",[t._v("查看包是否已安装")])]),t._v(" "),_("tr",[_("td",[t._v("rpm -qp PACKAGE_NAME.rpm")]),t._v(" "),_("td",[t._v("获取当前目录下的rpm包相关信息")])]),t._v(" "),_("tr",[_("td",[t._v("rpm -qa")]),t._v(" "),_("td",[t._v("列出所有已安装的软件包，可使用grep过滤结果")])]),t._v(" "),_("tr",[_("td",[t._v("rpm -qf /usr/sbin/httpd")]),t._v(" "),_("td",[t._v("查看某个文件属于哪个软件包，可以是普通文件或可执行文件，跟文件的绝对路径")])]),t._v(" "),_("tr",[_("td",[t._v("rpm -qi PACKAGE_NAME")]),t._v(" "),_("td",[t._v("列出已安装的这个包的标准详细信息")])]),t._v(" "),_("tr",[_("td",[t._v("rpm -ql PACKAGE_NAME")]),t._v(" "),_("td",[t._v("列出rpm包安装后包含的所有文件")])]),t._v(" "),_("tr",[_("td",[t._v("rpm -qc PACKAGE_NAME")]),t._v(" "),_("td",[t._v("列出rpm包安装后包含的配置文件")])]),t._v(" "),_("tr",[_("td",[t._v("rpm -q –scripts kernel")]),t._v(" "),_("td",[t._v("列出已安装rpm包自带的安装前和安装后脚本")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{224:function(s,t,a){"use strict";a.r(t);var r=a(6),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ntp-sever"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ntp-sever"}},[s._v("#")]),s._v(" NTP Sever")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("CentOS 7")]),s._v(" 下分别使用 "),t("code",[s._v("chrony")]),s._v(" 和 "),t("code",[s._v("ntp")]),s._v(" 作为时间服务器")]),s._v(" "),t("h2",{attrs:{id:"ntpd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ntpd"}},[s._v("#")]),s._v(" NTPd")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntp\n")])])]),t("h3",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),t("p",[s._v("编辑配置文件 "),t("code",[s._v("/etc/ntp.conf")]),s._v(" 更新以下内容")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("restrict default nomodify notrap nopeer noquery\nrestrict "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 系统若启用了ipv6，该项必须保留，否则会报错")]),s._v("\nrestrict ::1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加允许查询的网络范围")]),s._v("\nrestrict "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.0 mask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0 nomodify notrap\nrestrict "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.20")]),s._v(".20.0 mask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0 nomodify notrap\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改或保持默认的时间服务器列表")]),s._v("\nserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".centos.pool.ntp.org iburst\nserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".centos.pool.ntp.org iburst\nserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".centos.pool.ntp.org iburst\nserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".centos.pool.ntp.org iburst\n")])])]),t("p",[t("code",[s._v("restrict")]),s._v(" 参数说明")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ignore")]),s._v(" "),t("td",[s._v("拒绝连接到NTP服务器")])]),s._v(" "),t("tr",[t("td",[s._v("nomodiy")]),s._v(" "),t("td",[s._v("忽略所有改变NTP服务器配置的报文，但可以查询配置信息")])]),s._v(" "),t("tr",[t("td",[s._v("noquery")]),s._v(" "),t("td",[s._v("忽略所有mode字段为6或7的报文，客户端不能改变NTP服务器配置，也不能查询配置信息")])]),s._v(" "),t("tr",[t("td",[s._v("notrap")]),s._v(" "),t("td",[s._v("不提供trap远程登录功能，trap服务是一种远程时间日志服务。")])]),s._v(" "),t("tr",[t("td",[s._v("notrust")]),s._v(" "),t("td",[s._v("不作为同步的时钟源。")])]),s._v(" "),t("tr",[t("td",[s._v("nopeer")]),s._v(" "),t("td",[s._v("提供时间服务，但不作为对等体。")])]),s._v(" "),t("tr",[t("td",[s._v("kod")]),s._v(" "),t("td",[s._v("向不安全的访问者发送Kiss-Of-Death报文")])])])]),s._v(" "),t("h3",{attrs:{id:"启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),t("p",[s._v("配置防火墙规则并启动服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("iptables "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" udp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dport")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j")]),s._v(" ACCEPT\niptables-save "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/sysconfig/iptables\nsystemctl start ntpd.service\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" ntpd.service\n")])])]),t("h3",{attrs:{id:"查看服务运行情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看服务运行情况"}},[s._v("#")]),s._v(" 查看服务运行情况")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("ntpq -p")]),s._v(" 命令查看，会输出类似如下内容")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("remote refid st t when poll reach delay offset jitter\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n+biisoni.miuku.n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("207.224")]),s._v(".49.219 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" u "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("125")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("272")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("188.586")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-5.387")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.552")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("61")]),s._v("-216-153-105. "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("211.22")]),s._v(".103.157 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" u "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44.326")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-6.224")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.534")]),s._v("\n*85.199.214.100 .GPS. "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" u "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("377")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224.549")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.580")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.672")]),s._v("\n+ntp8.flashdance "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("194.58")]),s._v(".202.148 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" u "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("377")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("241.409")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-18.026")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30.000")]),s._v("\n")])])]),t("h2",{attrs:{id:"chrony"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrony"}},[s._v("#")]),s._v(" chrony")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" chrony\n")])])]),t("h3",{attrs:{id:"配置文件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-2"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),t("p",[s._v("编辑配置文件 "),t("code",[s._v("/etc/chrony.conf")]),s._v(" ，更新以下内容")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用默认的时间服务器或指定其他服务器")]),s._v("\nserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".centos.pool.ntp.org iburst\nserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".centos.pool.ntp.org iburst\nserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".centos.pool.ntp.org iburst\nserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".centos.pool.ntp.org iburst\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许查询的客户端范围")]),s._v("\nallow "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.0/24\nallow "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.20")]),s._v(".20.0/24\n")])])]),t("p",[t("code",[s._v("iburst")]),s._v(" 选项表示在一个标准的轮询间隔内没有应答，客户端会发送 "),t("code",[s._v("4")]),s._v(" 个包给 "),t("code",[s._v("NTP")]),s._v(" 服务器，以便在客户端首次快速同步时间")]),s._v(" "),t("h3",{attrs:{id:"启动服务-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动服务-2"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),t("p",[s._v("配置防火墙规则并启动服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("iptables "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" udp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dport")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j")]),s._v(" ACCEPT\niptables-save "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/sysconfig/iptables\nsystemctl start chrony.service\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" chrony.service\n")])])]),t("h3",{attrs:{id:"查看服务运行情况-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看服务运行情况-2"}},[s._v("#")]),s._v(" 查看服务运行情况")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("chronyc sources")]),s._v(" 命令查看，会输出类似以下内容")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("210")]),s._v(" Number of sources "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nMS Name/IP address Stratum Poll Reach LastRx Last sample\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n^+ ntp1.ams1.nl.leaseweb.net "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("377")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),s._v(" +17ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" +17ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" +/- 241ms\n^+ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("61")]),s._v("-216-153-105.HINET-IP."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" 38m +8127us"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" +14ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" +/- 93ms\n^? "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("61")]),s._v("-216-153-107.HINET-IP."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" 36m +12ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" +20ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" +/- 84ms\n^* makaki.miuku.net "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("377")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("236")]),s._v(" +7939us"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" +11ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" +/- 242ms\n")])])]),t("h2",{attrs:{id:"ntp客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ntp客户端"}},[s._v("#")]),s._v(" NTP客户端")]),s._v(" "),t("p",[t("strong",[s._v("使用NTP服务器软件")])]),s._v(" "),t("p",[s._v("把上面配置中的 "),t("code",[s._v("server")]),s._v(" 替换成内部 "),t("code",[s._v("NTP")]),s._v(" 服务器即可，使用 "),t("code",[s._v("prefer")]),s._v(" 参数将优先使用该服务器")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.20")]),s._v(".20.2 prefer\nserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.20")]),s._v(".20.3 iburst\n")])])]),t("p",[t("strong",[s._v("使用ntpdate")])]),s._v(" "),t("p",[s._v("安装 "),t("code",[s._v("ntpdate")]),s._v(" ，并修改 "),t("code",[s._v("/etc/ntp/step-tickers")]),s._v(" 。当然也可以使用默认的公共时间服务器，这里同样支持 "),t("code",[s._v("iburst")]),s._v(" 或 "),t("code",[s._v("prefer")]),s._v(" 等参数")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/ntp/step-tickers")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#0.centos.pool.ntp.org")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.20")]),s._v(".20.2\n")])])]),t("p",[s._v("启动服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start ntpdate.service\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" ntpdate.service\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("需要注意的是， "),t("code",[s._v("CentOS7")]),s._v(" 中的 "),t("code",[s._v("ntpdate.service")]),s._v(" 服务只在系统启动时运行一次，不是定时运行。")])]),s._v(" "),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.server-world.info/en/note?os=CentOS_7&p=ntp&f=1",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.server-world.info/en/note?os=CentOS_7&p=ntp&f=1"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/ch-configuring_ntp_using_the_chrony_suite",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/ch-configuring_ntp_using_the_chrony_suite"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);
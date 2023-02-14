(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{222:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"nfs-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nfs-server"}},[a._v("#")]),a._v(" NFS Server")]),a._v(" "),s("p",[s("code",[a._v("CentOS7")]),a._v(" 下 "),s("code",[a._v("NFS")]),a._v(" 服务中的 "),s("code",[a._v("rpcbind")]),a._v(" 服务监听在 "),s("code",[a._v("111")]),a._v(" 端口， "),s("code",[a._v("NFS")]),a._v(" 主程序监听在 "),s("code",[a._v("2049")]),a._v(" 端口。"),s("code",[a._v("NFS")]),a._v(" 包安装时会自动创建 "),s("code",[a._v("nfsnobody")]),a._v(" 用户和组， "),s("code",[a._v("uid")]),a._v(" 和 "),s("code",[a._v("gid")]),a._v(" 都是 "),s("code",[a._v("65534")]),a._v(" 。")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("安装 "),s("code",[a._v("nfs-utils")]),a._v(" 的同时会自动安装 "),s("code",[a._v("nfs-server")]),a._v(" 、 "),s("code",[a._v("rpcbind")]),a._v(" 等包")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nfs-utils\n")])])]),s("h2",{attrs:{id:"端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端口"}},[a._v("#")]),a._v(" 端口")]),a._v(" "),s("p",[a._v("默认 "),s("code",[a._v("NFS")]),a._v(" 在挂载时会随机分配 "),s("code",[a._v("1024")]),a._v(" 以上端口，因此固定 "),s("code",[a._v("NFS")]),a._v(" 服务的端口，便于配置防火墙规则。编辑 "),s("code",[a._v("/etc/sysconfig/nfs")]),a._v(" 文件追加以下配置")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MOUNTD_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4001")]),a._v("　　\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("STATD_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4002")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LOCKD_TCPPORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4003")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LOCKD_UDPPORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4003")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RQUOTAD_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4004")]),a._v("\n")])])]),s("h2",{attrs:{id:"共享目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共享目录"}},[a._v("#")]),a._v(" 共享目录")]),a._v(" "),s("p",[a._v("服务端和客户端均使用非 "),s("code",[a._v("root")]),a._v(" 用户来管理共享目录(但挂载操作需要 "),s("code",[a._v("root")]),a._v(" 权限)，要求两端使用具有相同 "),s("code",[a._v("uid")]),a._v(" 的用户，例如 "),s("code",[a._v("uid")]),a._v(" 都为 "),s("code",[a._v("1111")])]),a._v(" "),s("h3",{attrs:{id:"创建nfs用户和共享目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建nfs用户和共享目录"}},[a._v("#")]),a._v(" 创建NFS用户和共享目录")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1111")]),a._v(" nfsuser\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v(" nfsuser\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - nfsuser\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" nfs_share_dir\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("如果挂载时发现 "),s("code",[a._v("NFS")]),a._v(" 共享目录只能挂载为 "),s("code",[a._v("nobody")]),a._v(" 用户，可以分别修改服务端和客户端 "),s("code",[a._v("/etc/idmapd.conf")]),a._v(" 中的 "),s("code",[a._v("Domain")]),a._v(" 选项为一致，例如 "),s("code",[a._v("Domain = nfs.io")])])]),a._v(" "),s("h3",{attrs:{id:"定义共享目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义共享目录"}},[a._v("#")]),a._v(" 定义共享目录")]),a._v(" "),s("p",[a._v("配置要共享的目录，注意目录的用户组和权限。在共享参数里面设置匿名访问用户的本地用户 "),s("code",[a._v("UID")]),a._v(" ，也就是客户端映射到服务端的用户 "),s("code",[a._v("UID")]),a._v(" ，共享目录中的文件在两端都将以 "),s("code",[a._v("UID=1111")]),a._v(" 和 "),s("code",[a._v("GID=1111")]),a._v(" 为用户组保存。编辑 "),s("code",[a._v("/etc/exports")]),a._v(" ，添加以下内容")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("/home/nfsuser/nfs_share_dir "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.20")]),a._v(".20.0/24"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("rw,anonuid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1111")]),a._v(",anongid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1111")]),a._v(",all_squash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("配置完成之后，重载并查看目录列表")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("exportfs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rv")]),a._v("\n")])])]),s("h3",{attrs:{id:"共享参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共享参数"}},[a._v("#")]),a._v(" 共享参数")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("选项")]),a._v(" "),s("th",[a._v("描述")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("rw")]),a._v(" "),s("td",[a._v("允许读写权限")])]),a._v(" "),s("tr",[s("td",[a._v("ro")]),a._v(" "),s("td",[a._v("只读权限")])]),a._v(" "),s("tr",[s("td",[a._v("sync")]),a._v(" "),s("td",[a._v("同步模式(Default)，所有数据在写入后可以请求")])]),a._v(" "),s("tr",[s("td",[a._v("async")]),a._v(" "),s("td",[a._v("异步模式，数据在写入过程中可以写入")])]),a._v(" "),s("tr",[s("td",[a._v("secure")]),a._v(" "),s("td",[a._v("NFS通过1024以下的安全TCP/IP端口发送(Default)")])]),a._v(" "),s("tr",[s("td",[a._v("insecure")]),a._v(" "),s("td",[a._v("NFS可以通过所有端口发送")])]),a._v(" "),s("tr",[s("td",[a._v("wdelay")]),a._v(" "),s("td",[a._v("如果多个用户要写入NFS目录，则归组写入 (Default)")])]),a._v(" "),s("tr",[s("td",[a._v("no_wdelay")]),a._v(" "),s("td",[a._v("如果多个用户要写入NFS目录，则立即写入，当使用async时，无需此设置。")])]),a._v(" "),s("tr",[s("td",[a._v("subtree_check")]),a._v(" "),s("td",[a._v("如果共享/usr/bin之类的子目录时，强制NFS检查父目录的权限 (Default)")])]),a._v(" "),s("tr",[s("td",[a._v("no_subtree_check")]),a._v(" "),s("td",[a._v("与subtree_check对应")])]),a._v(" "),s("tr",[s("td",[a._v("root_squash")]),a._v(" "),s("td",[a._v("将root用户映射为服务端NFS指定的匿名uid/gid")])]),a._v(" "),s("tr",[s("td",[a._v("no_root_squash")]),a._v(" "),s("td",[a._v("root用户具有根目录的完全管理访问权限。")])]),a._v(" "),s("tr",[s("td",[a._v("all_squash")]),a._v(" "),s("td",[a._v("Map all uids and gids to the anonymous user. 对公共目录访问时较有用。")])]),a._v(" "),s("tr",[s("td",[a._v("no_all_squash")]),a._v(" "),s("td",[a._v("保留共享文件的UID和GID (Default)")])]),a._v(" "),s("tr",[s("td",[a._v("anonuid=UID")]),a._v(" "),s("td",[a._v("指定匿名用户访问时映射机的用户uid")])]),a._v(" "),s("tr",[s("td",[a._v("anongid=GID")]),a._v(" "),s("td",[a._v("指定匿名用户访问时映射机的用户gid")])])])]),a._v(" "),s("h2",{attrs:{id:"防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[a._v("#")]),a._v(" 防火墙")]),a._v(" "),s("p",[a._v("按照先前配置的端口配置防火墙规则")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("111")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\niptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" udp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("111")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\niptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2049")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\niptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" udp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2049")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\niptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4001")]),a._v(":4004 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\niptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" udp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4001")]),a._v(":4004 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\niptables-save "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/etc/sysconfig/iptables\n")])])]),s("h2",{attrs:{id:"启动服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[a._v("#")]),a._v(" 启动服务")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl start rpcbind.service\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rpcbind.service\nsystemctl start nfs.service\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" nfs.service\n")])])]),s("h2",{attrs:{id:"挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[a._v("#")]),a._v(" 挂载")]),a._v(" "),s("p",[s("code",[a._v("uid")]),a._v(" 和 "),s("code",[a._v("gid")]),a._v(" 与服务端保持一致，使用非 "),s("code",[a._v("root")]),a._v(" 用户管理挂载目录。客户端同样需要事先安装 "),s("code",[a._v("nfs-utils")]),a._v(" ，安装之后创建用于挂载的用户，这里与服务端用户保持相同的 "),s("code",[a._v("uid")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nfs-utils\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1111")]),a._v(" nfsuser\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v(" nfsuser\n")])])]),s("p",[a._v("切换到挂载用户，创建挂载目录")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - nfsuser\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" nfs_share\n")])])]),s("p",[a._v("与服务端一样，修改 "),s("code",[a._v("idmapd.conf")]),a._v(" 中 "),s("code",[a._v("Domain")]),a._v(" 选项，保持一致")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/idmapd.conf\nDomain "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" nfs.io\n")])])]),s("p",[a._v("挂载 "),s("code",[a._v("nfs")]),a._v(" 类型需要 "),s("code",[a._v("root")]),a._v(" 权限")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" nfs "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.20")]),a._v(".20.136:/home/nfsuser/nfs_share_dir /home/mysql/nfs_share\n")])])]),s("p",[a._v("挂载成功之后，可以使用 "),s("code",[a._v("showmount -e IP/DOMAIN")]),a._v(" 查看 "),s("code",[a._v("NFS")]),a._v(" 服务端目录输出列表，例如 "),s("code",[a._v("showmount -e 10.20.20.136")])]),a._v(" "),s("h2",{attrs:{id:"autofs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autofs"}},[a._v("#")]),a._v(" autofs")]),a._v(" "),s("p",[s("code",[a._v("autofs")]),a._v(" 是一个自动按需挂载 "),s("code",[a._v("NFS")]),a._v(" 的应用，需要在 "),s("code",[a._v("nfs-utils")]),a._v(" 已安装的前提下运行")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nfs-utils autofs\n")])])]),s("h3",{attrs:{id:"挂载参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挂载参数"}},[a._v("#")]),a._v(" 挂载参数")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/auto.master\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加挂载点")]),a._v("\n/-    /etc/auto.mount\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/auto.mount\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在挂载选项中设置挂载目录的用户 UID ，与服务端配置的 UID 保持一致，以保证非 root 用户权限挂载")]),a._v("\n/home/nfsuser/nfs_share    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fstype")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nfs,rw,uid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1111")]),a._v(",gid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1111")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.20")]),a._v(".20.136:/home/nfsuser/nfs_share_dir\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("autofs")]),a._v(" 时，本地挂载目录需使用完整的绝对路径，而不是包含软链接的路径，否则可能因无法挂载而报错 "),s("code",[a._v("automount[7510]: do_mount_autofs_direct: failed to create mount directory")]),a._v(" ，并且本地挂载目录不能事先创建，这一点不同于手动 "),s("code",[a._v("mount")]),a._v(" 挂载， "),s("code",[a._v("autofs")]),a._v(" 启动后会自动创建本地目录然后挂载，例如这里需要定义的本地挂载目录 "),s("code",[a._v("/home/nfsuser/nfs_share")]),a._v(" 但无须创建 "),s("code",[a._v("nfs_share")]),a._v(" 目录。挂载成功时目录用户和组显示为 "),s("code",[a._v("root")]),a._v(" ，对目录执行过动作之后会变为设定的 "),s("code",[a._v("UID")])])]),a._v(" "),s("p",[a._v("与前面一样，修改 "),s("code",[a._v("/etc/idmapd.conf")]),a._v(" 中 "),s("code",[a._v("Domain")]),a._v(" 选项，保持一致")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# /etc/idmapd.conf")]),a._v("\nDomain "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" nfs.io\n")])])]),s("h3",{attrs:{id:"重启服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启服务"}},[a._v("#")]),a._v(" 重启服务")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl restart autofs.service\n")])])]),s("h2",{attrs:{id:"其他自动挂载方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他自动挂载方法"}},[a._v("#")]),a._v(" 其他自动挂载方法")]),a._v(" "),s("p",[a._v("除了 "),s("code",[a._v("autofs")]),a._v(" 以外，也可以直接在 "),s("code",[a._v("/etc/fstab")]),a._v(" 里添加一条挂载记录，为了防止因无法挂载导致的不能进入系统，可以加入 "),s("code",[a._v("_rnetdev")]),a._v(" 参数，表示无法挂载就跳过。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.20")]),a._v(".20.136:/home/nfsuser/nfs_share_dir    /home/mysql/nfs_share    nfs  defaults,_rnetdev  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://help.ubuntu.com/community/Autofs",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://help.ubuntu.com/community/Autofs"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://yq.aliyun.com/articles/241287",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://yq.aliyun.com/articles/241287"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"http://www.361way.com/nfs-mount-nobody/2616.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.361way.com/nfs-mount-nobody/2616.html"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);
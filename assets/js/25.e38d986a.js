(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{226:function(s,t,a){"use strict";a.r(t);var e=a(6),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"输入输出重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入输出重定向"}},[s._v("#")]),s._v(" 输入输出重定向")]),s._v(" "),t("h2",{attrs:{id:"linux命令的执行过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux命令的执行过程"}},[s._v("#")]),s._v(" Linux命令的执行过程")]),s._v(" "),t("ul",[t("li",[s._v("首先是输入， "),t("code",[s._v("stdin")]),s._v(" 输入可以从键盘，也可以从文件得到")]),s._v(" "),t("li",[s._v("命令执行完成，把成功结果输出到屏幕， "),t("code",[s._v("stout")]),s._v(" 默认是屏幕")]),s._v(" "),t("li",[s._v("命令执行有错误，把错误也输出到屏幕上面， "),t("code",[s._v("stderr")]),s._v(" 默认也是屏幕")])]),s._v(" "),t("h2",{attrs:{id:"文件描述符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件描述符"}},[s._v("#")]),s._v(" 文件描述符")]),s._v(" "),t("ul",[t("li",[s._v("标准输入stdin：对应的文件描述符是 0 ，符号是 "),t("code",[s._v("<")]),s._v("和 "),t("code",[s._v("<<")]),s._v(" ， "),t("code",[s._v("/dev/stdin -> /proc/self/fd/0")])]),s._v(" "),t("li",[s._v("标准输出stdout：对应的文件描述符是 1 ，符号是 "),t("code",[s._v(">")]),s._v("和 "),t("code",[s._v(">>")]),s._v(" ， "),t("code",[s._v("/dev/stdout -> /proc/self/fd/1")])]),s._v(" "),t("li",[s._v("标准错误stderr：对应的文件描述符是 2 ，符号是 "),t("code",[s._v("2>")]),s._v(" 和 "),t("code",[s._v("2>>")]),s._v(" ， "),t("code",[s._v("/dev/stderr -> /proc/self/fd/2")])])]),s._v(" "),t("h2",{attrs:{id:"输出重定向实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出重定向实例"}},[s._v("#")]),s._v(" 输出重定向实例")]),s._v(" "),t("p",[s._v("默认情况下， "),t("code",[s._v("stdout")]),s._v(" 和 "),t("code",[s._v("stderr")]),s._v(" 默认输出到屏幕")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ks.cfg wrongfile\nls: cannot access wrongfile: No such "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nks.cfg\n")])])]),t("p",[s._v("标准输出重定向到 "),t("code",[s._v("stdout.txt")]),s._v(" 文件中，错误输出默认到屏幕。 "),t("code",[s._v("1>")]),s._v(" 与"),t("code",[s._v(">")]),s._v(" 等价")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ks.cfg wrongfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("stdout.txt\nls: cannot access wrongfile: No such "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" stdout.txt\nks.cfg\n")])])]),t("p",[s._v("标准输出重定向到 "),t("code",[s._v("stdout.txt")]),s._v(" ，错误输出到 "),t("code",[s._v("err.txt")]),s._v(" 。也可以使用追加 "),t("code",[s._v(">>")]),s._v(" 模式。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ks.cfg wrongfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("stdout.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("err.txt\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" stdout.txt err.txt\nks.cfg\nls: cannot access wrongfile: No such "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n")])])]),t("p",[s._v("将错误输出关闭，输出到 "),t("code",[s._v("null")]),s._v(" 。同样也可以将 "),t("code",[s._v("stdout")]),s._v(" 重定向到 "),t("code",[s._v("null")]),s._v(" 或关闭\n"),t("code",[s._v("&1")]),s._v(" 代表标准输出， "),t("code",[s._v("&2")]),s._v(" 代表标准错误， "),t("code",[s._v("&-")]),s._v(" 代表关闭与它绑定的描述符")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ks.cfg wrongfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">&")]),s._v("-\nks.cfg\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ks.cfg wrongfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null\nks.cfg\n")])])]),t("p",[s._v("将错误输出传递给 "),t("code",[s._v("stdout")]),s._v(" ，然后 "),t("code",[s._v("stdout")]),s._v(" 重定向给 "),t("code",[s._v("xx.txt")]),s._v(" ，也可以重定向给 "),t("code",[s._v("null")]),s._v(" 。顺序为 "),t("code",[s._v("stderr")]),s._v(" 的内容先到 "),t("code",[s._v("xx.txt")]),s._v(" ， "),t("code",[s._v("stdout")]),s._v(" 后到。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ks.cfg wrongfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("xx.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n")])])]),t("p",[s._v("将 "),t("code",[s._v("stdout")]),s._v(" 和 "),t("code",[s._v("stderr")]),s._v(" 重定向到 "),t("code",[s._v("null")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ks.cfg wrongfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null\n")])])]),t("h2",{attrs:{id:"输入重定向实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入重定向实例"}},[s._v("#")]),s._v(" 输入重定向实例")]),s._v(" "),t("p",[s._v("从 "),t("code",[s._v("stdin")]),s._v(" （键盘）获取数据，然后输出到 "),t("code",[s._v("catfile")]),s._v(" 文件，按 "),t("code",[s._v("Ctrl+d")]),s._v(" 结束")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" catfile\nthis\nis\ncatfile\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" catfile\nthis\nis\ncatfile\n")])])]),t("p",[s._v("输入特定字符 "),t("code",[s._v("eof")]),s._v(" ，自动结束 "),t("code",[s._v("stdin")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("catfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" eof\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" this\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" is\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" catfile\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" eof\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" catfile\nthis\nis\ncatfile\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
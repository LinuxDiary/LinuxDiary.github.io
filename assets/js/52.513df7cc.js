(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{252:function(t,e,s){"use strict";s.r(e);var a=s(6),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"常见错误处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见错误处理"}},[t._v("#")]),t._v(" 常见错误处理")]),t._v(" "),e("h2",{attrs:{id:"_104-connection-reset-by-peer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_104-connection-reset-by-peer"}},[t._v("#")]),t._v(" 104 Connection reset by peer")]),t._v(" "),e("p",[t._v("错误日志里出现大量"),e("code",[t._v("104 Connection reset by peer")]),t._v("错误：")]),t._v(" "),e("blockquote",[e("p",[t._v('2021/09/15 10:45:43 [error] 3027#3027: *15 readv() failed (104: Connection reset by peer) while reading upstream, client: 192.168.1.105, server: _, request: "POST /hotelreceive/dataReceiver/receiveHotelMessage.do HTTP/1.1", upstream: "http://192.168.1.11:8091/dataReceiver/receiveHotelMessage.do", host: "192.168.1.5"')])]),t._v(" "),e("p",[t._v("原因是后端程序执行时间过长，超过了Nginx等待后端响应和回传的时间(也就是"),e("code",[t._v("proxy_send_timeout")]),t._v("和"),e("code",[t._v("proxy_read_timeout")]),t._v("选项)，导致后端程序连接没关闭，Nginx已经重置连接，出现以上错误。")]),t._v(" "),e("p",[t._v("处理办法，把这两个选项设置高一些(默认60s)")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" data_receiver")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" 192.168.1.11:8091 weight=5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" 192.168.1.12:8091 weight=5 backup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加连接存活时间")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keepalive")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /hotelreceive/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://data_receiver/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   Host             "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X-Real-IP        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X-Forwarded-For  "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \t    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新增配置")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_connect_timeout")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_send_timeout")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_read_timeout")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_http_version")]),t._v(" 1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
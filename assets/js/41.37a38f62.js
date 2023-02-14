(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{242:function(s,a,t){"use strict";t.r(a);var r=t(6),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"日志分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志分类"}},[s._v("#")]),s._v(" 日志分类")]),s._v(" "),a("h2",{attrs:{id:"查询日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询日志"}},[s._v("#")]),s._v(" 查询日志")]),s._v(" "),a("p",[s._v("查询日志(general_log)记录了所有对 "),a("code",[s._v("MySQL")]),s._v(" 数据库请求的信息，例如登陆数据库的信息、执行增删改查语句的信息、执行出错的信息等，无论这些请求的执行结果如何，都会一一记录。因此如果开启了查询日志就会产生大量的日志，非常消耗存储和 "),a("code",[s._v("IO")]),s._v(" 资源。 "),a("code",[s._v("MySQL")]),s._v(" 默认不启用查询日志，即 "),a("code",[s._v("general_log=OFF")]),s._v(" 。查询日志会详细记录所有的请求，因此可以通过临时开启 "),a("code",[s._v("general_log")]),s._v(" 来了解客户端的请求细节，例如分析 "),a("code",[s._v("mysqldump")]),s._v(" 备份数据库的细节。")]),s._v(" "),a("h3",{attrs:{id:"相关变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关变量"}},[s._v("#")]),s._v(" 相关变量")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%general%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------------+-------------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v("                                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------------+-------------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" general_log      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFF")]),s._v("                                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" general_log_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql56_master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------------+-------------------------------------------+")]),s._v("\n")])])]),a("h2",{attrs:{id:"错误日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误日志"}},[s._v("#")]),s._v(" 错误日志")]),s._v(" "),a("p",[s._v("错误日志(log_error)记录了 "),a("code",[s._v("MySQL")]),s._v(" 启动、运行、关闭的过程(Note)，如果这些过程中出现了错误(Error)，就会在这个日志文件中进行记录，还会记录一些警告信息(Warning)。")]),s._v(" "),a("h3",{attrs:{id:"相关变量-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关变量-2"}},[s._v("#")]),s._v(" 相关变量")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log_error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+---------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+---------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_error     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+---------------------------------+")]),s._v("\n")])])]),a("h2",{attrs:{id:"慢查询日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#慢查询日志"}},[s._v("#")]),s._v(" 慢查询日志")]),s._v(" "),a("p",[s._v("慢查询日志(slow_query_log)可以记录可能查询很慢和没有使用索引的 "),a("code",[s._v("SQL")]),s._v(" 语句。通过 "),a("code",[s._v("long_query_time")]),s._v(" 设置一个阈值(毫秒级)，超过阈值的就记录慢查询；通过 "),a("code",[s._v("log_queries_not_using_indexes")]),s._v(" 设置不使用索引就记录慢查询。在生产环境中，可能出现频繁的写慢查询日志，消耗系统 "),a("code",[s._v("IO")]),s._v(" 和存储资源，从 "),a("code",[s._v("MySQL5.6.5")]),s._v(" 版本以后还可以通过 "),a("code",[s._v("log_throttle_queries_not_using_indexes")]),s._v(" 设置每分钟记录没有使用索引的慢查询的次数。")]),s._v(" "),a("h3",{attrs:{id:"相关变量-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关变量-3"}},[s._v("#")]),s._v(" 相关变量")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%long_query%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------+----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------+----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" long_query_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.000000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------+----------+")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%slow_query%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------+--------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v("                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------+--------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" slow_query_log      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" slow_query_log_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------+--------------------------------+")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%log%not_using_indexes%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------------------------------+-------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------------------------------+-------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_queries_not_using_indexes          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_throttle_queries_not_using_indexes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------------------------------+-------+")]),s._v("\n")])])]),a("h3",{attrs:{id:"慢查询分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#慢查询分析"}},[s._v("#")]),s._v(" 慢查询分析")]),s._v(" "),a("p",[s._v("查看查询结果(Rows)最多的 "),a("code",[s._v("10")]),s._v(" 个查询：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqldumpslow "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" ar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" /u01/mysql-5.6.39/log/slow.log\n")])])]),a("p",[s._v("查看锁的时间(Lock)最多的 "),a("code",[s._v("10")]),s._v(" 个查询：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqldumpslow "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" al "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" /u01/mysql-5.6.39/log/slow.log\n")])])]),a("p",[s._v("查看查询时间最长的10个查询：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqldumpslow "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" at "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" /u01/mysql-5.6.39/log/slow.log\n")])])]),a("p",[s._v("过滤关键字查询，可以过滤SQL语句和索引相关的关键字，例如index、select、update等：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqldumpslow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n")])])]),a("h2",{attrs:{id:"二进制日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制日志"}},[s._v("#")]),s._v(" 二进制日志")]),s._v(" "),a("p",[s._v("二进制日志(log_bin)用于记录对数据库更改的所有操作。 "),a("code",[s._v("binlog")]),s._v(" 主要用于数据库备份恢复，主从复制。 "),a("code",[s._v("MySQL")]),s._v(" 默认没有开启 "),a("code",[s._v("log_bin")]),s._v(" ，可以在 "),a("code",[s._v("my.cnf")]),s._v(" 中配置永久开启，即 "),a("code",[s._v("log_bin = /u01/mysql-5.6.39/binlog/binlog")])]),s._v(" "),a("h3",{attrs:{id:"相关变量-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关变量-4"}},[s._v("#")]),s._v(" 相关变量")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%log_bin%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------------+---------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v("                                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------------+---------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_bin                         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("                                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_bin_basename                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("binlog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("binlog       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_bin_index                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("binlog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("binlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_bin_trust_function_creators "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFF")]),s._v("                                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_bin_use_v1_row_events       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFF")]),s._v("                                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sql_log_bin                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("                                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------------+---------------------------------------+")]),s._v("\n")])])]),a("h3",{attrs:{id:"查看-导出binlog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-导出binlog"}},[s._v("#")]),s._v(" 查看/导出binlog")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("mysqlbinlog")]),s._v(" 命令可以查看 "),a("code",[s._v("binlog")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqlbinlog mysqld-bin.000001 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test.sql\nmysqlbinlog mysqld-bin.000035 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看row模式的binlog加-v参数")]),s._v("\n")])])]),a("h2",{attrs:{id:"中继日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中继日志"}},[s._v("#")]),s._v(" 中继日志")]),s._v(" "),a("p",[s._v("中继日志是配置在 "),a("code",[s._v("Slave")]),s._v(" 上的，用于主从复制。 "),a("code",[s._v("Slave")]),s._v(" 从 "),a("code",[s._v("Master")]),s._v(" 上获取 "),a("code",[s._v("binlog")]),s._v(" ，存储到 "),a("code",[s._v("relay-log")]),s._v(" 中，然后执行 "),a("code",[s._v("relay-log")]),s._v(" 中的内容实现复制。")]),s._v(" "),a("h3",{attrs:{id:"相关变量-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关变量-5"}},[s._v("#")]),s._v(" 相关变量")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%relay%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------+-----------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v("                                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------+-----------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" max_relay_log_size        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" relay_log                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("binlog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("relaylog       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" relay_log_basename        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("binlog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("relaylog       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" relay_log_index           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("binlog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("relay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" relay_log_info_file       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("binlog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("relay"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("info "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" relay_log_info_repository "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v("                                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" relay_log_purge           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("                                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" relay_log_recovery        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFF")]),s._v("                                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" relay_log_space_limit     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sync_relay_log            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("                                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sync_relay_log_info       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("                                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------+-----------------------------------------+")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
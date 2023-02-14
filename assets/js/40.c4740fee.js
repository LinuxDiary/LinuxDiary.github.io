(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{241:function(t,e,v){"use strict";v.r(e);var _=v(6),a=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"innodb特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb特性"}},[t._v("#")]),t._v(" InnoDB特性")]),t._v(" "),e("h2",{attrs:{id:"acid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#acid"}},[t._v("#")]),t._v(" ACID")]),t._v(" "),e("p",[e("code",[t._v("ACID")]),t._v(" 是事务四要素：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。是事务型数据库必须支持的四个特性， "),e("code",[t._v("InnoDB")]),t._v(" 是典型的事务型存储引擎。")]),t._v(" "),e("p",[e("strong",[t._v("原子性")])]),t._v(" "),e("p",[t._v("一个事务中的所有操作，要么全部执行成功，要么全部失败。事务中只要有一个操作执行失败，整个事务就会回滚到事务开始前的状态。")]),t._v(" "),e("p",[e("strong",[t._v("一致性")])]),t._v(" "),e("p",[t._v("事务执行前后，数据库总体保持一致，写入的数据符合预设规则，例如银行转账，从一个账户转到另一个账户的情况下，两个账户的总金额保持不变。")]),t._v(" "),e("p",[e("strong",[t._v("隔离性")])]),t._v(" "),e("p",[t._v("允许多个并发事务对数据进行读写操作，根据不同的隔离级别，呈现不同的效果。 InnoDB 中事务隔离级别有四种：读未提交（Read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（Serializable）")]),t._v(" "),e("p",[e("strong",[t._v("持久性")])]),t._v(" "),e("p",[t._v("事务执行成功并提交之后，对数据的修改是永久性的，永久的保存在数据文件中。")]),t._v(" "),e("h2",{attrs:{id:"事务隔离级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离级别"}},[t._v("#")]),t._v(" 事务隔离级别")]),t._v(" "),e("p",[e("strong",[t._v("READ-UNCOMMITTED")])]),t._v(" "),e("p",[t._v("非提交读。例如事务 "),e("code",[t._v("A")]),t._v(" 和 "),e("code",[t._v("B")]),t._v(" ，在事务 "),e("code",[t._v("B")]),t._v(" 中修改了一条数据，在事务 "),e("code",[t._v("A")]),t._v(" 中可以 "),e("code",[t._v("select")]),t._v(" 查询到事务 "),e("code",[t._v("B")]),t._v(" 中修改后但未提交的数据。该级别允许脏读、非重复读、幻读。")]),t._v(" "),e("p",[e("strong",[t._v("READ-COMMITTED")])]),t._v(" "),e("p",[t._v("提交读。在事务 "),e("code",[t._v("B")]),t._v(" 中修改了一条数据，在事务 "),e("code",[t._v("A")]),t._v(" 中可以查询到事务 "),e("code",[t._v("B")]),t._v(" 中修改并提交后的数据。该级别允许非重复读、幻读。")]),t._v(" "),e("p",[e("strong",[t._v("REPEATABLE-READ")])]),t._v(" "),e("p",[t._v("重复读。在事务B中修改了数据并提交之后，事务 "),e("code",[t._v("A")]),t._v(" 中仍然查询到的是修改前的数据(就是重复读)。这就保证了在同一个事务中数据的一致性， "),e("code",[t._v("A")]),t._v(" 事务不受 "),e("code",[t._v("B")]),t._v(" 事务的影响。该级别默认情况下是只允许幻读，但是在 "),e("code",[t._v("InnoDB")]),t._v(" 的标准中，脏读、非重复读、幻读都不允许。")]),t._v(" "),e("p",[e("strong",[t._v("SERIALIZABLE")])]),t._v(" "),e("p",[t._v("与 "),e("code",[t._v("REPEATABLE-READ")]),t._v(" 类似，都不允许脏读、非重复读、幻读，但是性能相对较差。")]),t._v(" "),e("h2",{attrs:{id:"mvcc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvcc"}},[t._v("#")]),t._v(" MVCC")]),t._v(" "),e("p",[e("code",[t._v("MVCC (Multiversion Concurrency Control)")]),t._v(" ，多版本并发控制，在 "),e("code",[t._v("InnoDB")]),t._v(" 表中实现于事务隔离级别 "),e("code",[t._v("REPEATABLE-READ")]),t._v(" 中，在某个事务中，存储某行记录的多个快照，不同的事务之间相互没有读写干扰。可重复读的隔离级别下，就算其他事务对同一行记录执行的 "),e("code",[t._v("update")]),t._v(" 操作，在当前事务中查看该行记录的结果始终一致，也就是查看了该行记录早期的一个快照版本。")]),t._v(" "),e("h2",{attrs:{id:"锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#锁"}},[t._v("#")]),t._v(" 锁")]),t._v(" "),e("p",[e("code",[t._v("InnoDB")]),t._v(" 在读数据时，实际上读到的是行记录的快照，不同的隔离级别下，读取的快照有所不同，这种特性称为一致性非锁定读，发生在 "),e("code",[t._v("READ-UNCOMMITTED")]),t._v(" 和 "),e("code",[t._v("REPEATABLE-READ")]),t._v(" 两种级别之下。在 "),e("code",[t._v("READ-UNCOMMITTED")]),t._v(" 级别下，读取的数据是最新的快照，而在 "),e("code",[t._v("REPEATABLE-READ")]),t._v(" 级别下，读取的数据则是事务开始时，最开始生成的快照，这就符合了对应隔离级别所产生的效果。")]),t._v(" "),e("p",[t._v("与之对应的是一致性锁定读，用于用户显式的对数据库的读取操作进行加锁，例如 "),e("code",[t._v("InnoDB")]),t._v(" 对 "),e("code",[t._v("SELECT")]),t._v(" 语句支持两种锁定读操作")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHARE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MODE")]),t._v("\n")])])]),e("p",[e("code",[t._v("FOR UPDATE")]),t._v(" 表示加 "),e("code",[t._v("X")]),t._v(" 锁， "),e("code",[t._v("LOCK IN SHARE MODE")]),t._v(" 表示加 "),e("code",[t._v("S")]),t._v(" 锁，这两种显式加锁的方式只能在一个启动的事务中执行，事务提交或退出后锁自动失效。")]),t._v(" "),e("h3",{attrs:{id:"锁的类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#锁的类型"}},[t._v("#")]),t._v(" 锁的类型")]),t._v(" "),e("ul",[e("li",[t._v("共享锁：就是 "),e("code",[t._v("S")]),t._v(" 锁，也叫读锁，事务在读取数据时可能存在的锁")]),t._v(" "),e("li",[t._v("排他锁：就是 "),e("code",[t._v("X")]),t._v(" 锁，也叫写锁，事务在删除或更新一行数据时的锁")])]),t._v(" "),e("p",[t._v("两种锁的兼容性列表")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}}),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("S")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")])])])]),t._v(" "),e("h3",{attrs:{id:"死锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[t._v("#")]),t._v(" 死锁")]),t._v(" "),e("p",[t._v("死锁的产生是由于多个事务争用锁资源导致，如下是一个典型死锁示例")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("时间")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("事务A")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("事务B")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BEGIN;")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SELECT * FROM T WHERE a=1 FOR UPDATE;")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BEGIN;")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SELECT * FROM T WHERE a=2 FOR UPDATE;")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SELECT * FROM T WHERE a=2 FOR UPDATE;")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SELECT * FROM T WHERE a=1 FOR UPDATE;")])])])]),t._v(" "),e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/chenpingzhao/p/5065316.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/chenpingzhao/p/5065316.html"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);
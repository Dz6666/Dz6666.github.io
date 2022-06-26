(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{618:function(t,a,s){t.exports=s.p+"assets/img/image-20220320224957051.f786adce.png"},619:function(t,a,s){t.exports=s.p+"assets/img/image-20220320224941965.3bb4a298.png"},620:function(t,a,s){t.exports=s.p+"assets/img/image-20220320225017225.3a475fab.png"},645:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#一、golang-中包的介绍和定义"}},[t._v("一、Golang 中包的介绍和定义")])]),n("li",[n("a",{attrs:{href:"#二、golang包管理工具go-mod"}},[t._v("二、Golang包管理工具go mod")]),n("ul",[n("li",[n("a",{attrs:{href:"#_2-1、go-mod-init-初始化项目"}},[t._v("2.1、go mod init 初始化项目")])]),n("li",[n("a",{attrs:{href:"#_2-2、go-mod常用命令"}},[t._v("2.2、go mod常用命令")])])])]),n("li",[n("a",{attrs:{href:"#三、golang-中自定义包"}},[t._v("三、Golang 中自定义包")]),n("ul",[n("li",[n("a",{attrs:{href:"#_3-1、初始化项目"}},[t._v("3.1、初始化项目")])]),n("li",[n("a",{attrs:{href:"#_3-2、demo-calc-calc-go"}},[t._v("3.2、Demo/calc/calc.go")])]),n("li",[n("a",{attrs:{href:"#_3-3、demo-main-go"}},[t._v("3.3、Demo/main.go")])])])]),n("li",[n("a",{attrs:{href:"#四、init-初始化函数"}},[t._v("四、init()初始化函数")]),n("ul",[n("li",[n("a",{attrs:{href:"#_4-1、init-函数介绍"}},[t._v("4.1、init()函数介绍")])]),n("li",[n("a",{attrs:{href:"#_4-2、init-函数执行顺序"}},[t._v("4.2、init()函数执行顺序")])])])]),n("li",[n("a",{attrs:{href:"#五、golang中使用第三方包"}},[t._v("五、Golang中使用第三方包")]),n("ul",[n("li",[n("a",{attrs:{href:"#_5-1、查找golang的第三方包"}},[t._v("5.1、查找golang的第三方包")])]),n("li",[n("a",{attrs:{href:"#_5-2、安装这个包"}},[t._v("5.2、安装这个包")])])])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"一、golang-中包的介绍和定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、golang-中包的介绍和定义"}},[t._v("#")]),t._v(" 一、Golang 中包的介绍和定义")]),t._v(" "),n("ul",[n("li",[t._v("包（package）是多个 Go 源码的集合，是一种高级的代码复用方案")]),t._v(" "),n("li",[t._v("Go 语言为我们提供了很多内置包，如 fmt、strconv、strings、sort、errors、time、encoding/json、os、io 等。")]),t._v(" "),n("li",[t._v("Golang 中的包可以分为三种：1、系统内置包 2、自定义包 3、第三方包\n"),n("ul",[n("li",[t._v("1、系统内置包\n"),n("ul",[n("li",[t._v("fmt、strconv、strings、sort、errors、time、encoding/json、os、io 等")])])]),t._v(" "),n("li",[t._v("2、自定义包\n"),n("ul",[n("li",[t._v("开发者自己写的包")])])]),t._v(" "),n("li",[t._v("3、第三方包\n"),n("ul",[n("li",[t._v("属于自定义包的一种，需要下载安装到本地后才可以使用；")]),t._v(" "),n("li",[t._v('如前面给大家介绍的"github.com/shopspring/decimal"包解决 float 精度丢失问题；')])])])])])]),t._v(" "),n("h2",{attrs:{id:"二、golang包管理工具go-mod"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、golang包管理工具go-mod"}},[t._v("#")]),t._v(" 二、Golang包管理工具go mod")]),t._v(" "),n("ul",[n("li",[t._v("在 Golang1.11 版本之前如果我们要自定义包的话必须把项目放在 GOPATH 目录。")]),t._v(" "),n("li",[t._v("Go1.11 版本之后无需手动配置环境变量，使用 go mod 管理项目")]),t._v(" "),n("li",[t._v("也不需要非得把项目放到。 GOPATH指定目录下，你可以在你磁盘的任何位置新建一个项目")]),t._v(" "),n("li",[t._v("Go1.13 以后可以彻底不要 GOPATH了。")])]),t._v(" "),n("h3",{attrs:{id:"_2-1、go-mod-init-初始化项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、go-mod-init-初始化项目"}},[t._v("#")]),t._v(" 2.1、go mod init 初始化项目")]),t._v(" "),n("ul",[n("li",[t._v("实际项目开发中我们首先要在我们项目目录中用 go mod 命令生成一个 go.mod 文件管理我们项目的依赖。")]),t._v(" "),n("li",[t._v("比如我们的 golang 项目文件要放在了 itying 这个文件夹，这个时候我们需要在 itying 文件夹")]),t._v(" "),n("li",[t._v("里面使用 go mod 命令生成一个 go.mod 文件。")]),t._v(" "),n("li",[t._v("go.mod文件一旦创建后，它的内容将会被go toolchain全面掌控。")]),t._v(" "),n("li",[t._v("go toolchain会在各类命令执行时，比如go get、go build、go mod等修改和维护go.mod文件。")]),t._v(" "),n("li",[t._v("go.mod 提供了module, require、replace和exclude 四个命令\n"),n("ul",[n("li",[n("code",[t._v("module")]),t._v(" 语句指定包的名字（路径）")]),t._v(" "),n("li",[n("code",[t._v("require")]),t._v(" 语句指定的依赖项模块")]),t._v(" "),n("li",[n("code",[t._v("replace")]),t._v(" 语句可以替换依赖项模块")]),t._v(" "),n("li",[n("code",[t._v("exclude")]),t._v(" 语句可以忽略依赖项模块")])])])]),t._v(" "),n("h3",{attrs:{id:"_2-2、go-mod常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、go-mod常用命令"}},[t._v("#")]),t._v(" 2.2、go mod常用命令")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("命令")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("download")]),t._v(" "),n("td",[t._v("download modules to local cache(下载依赖包)")])]),t._v(" "),n("tr",[n("td",[t._v("edit")]),t._v(" "),n("td",[t._v("edit go.mod from tools or scripts（编辑go.mod)")])]),t._v(" "),n("tr",[n("td",[t._v("graph")]),t._v(" "),n("td",[t._v("print module requirement graph (打印模块依赖图)")])]),t._v(" "),n("tr",[n("td",[t._v("verify")]),t._v(" "),n("td",[t._v("initialize new module in current directory（在当前目录初始化mod")])]),t._v(" "),n("tr",[n("td",[t._v("tidy")]),t._v(" "),n("td",[t._v("add missing and remove unused modules(拉取缺少的模块，移除不用的模块)")])]),t._v(" "),n("tr",[n("td",[t._v("vendor")]),t._v(" "),n("td",[t._v("make vendored copy of dependencies(将依赖复制到vendor下)")])]),t._v(" "),n("tr",[n("td",[t._v("verify")]),t._v(" "),n("td",[t._v("verify dependencies have expected content (验证依赖是否正确）")])]),t._v(" "),n("tr",[n("td",[t._v("why")]),t._v(" "),n("td",[t._v("explain why packages or modules are needed(解释为什么需要依赖)")])])])]),t._v(" "),n("h2",{attrs:{id:"三、golang-中自定义包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、golang-中自定义包"}},[t._v("#")]),t._v(" 三、Golang 中自定义包")]),t._v(" "),n("ul",[n("li",[t._v("包（package）是多个 Go 源码的集合，一个包可以简单理解为一个存放多个.go 文件的文件夹。")]),t._v(" "),n("li",[t._v("该文件夹下面的所有 go 文件都要在代码的第一行添加如下代码，声明该文件归属的包。")])]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" 包名\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"_3-1、初始化项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、初始化项目"}},[t._v("#")]),t._v(" 3.1、初始化项目")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" Demo\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Demo\ngo mod init Demo\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:s(618),alt:"image-20220320224957051"}})]),t._v(" "),n("h3",{attrs:{id:"_3-2、demo-calc-calc-go"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、demo-calc-calc-go"}},[t._v("#")]),t._v(" 3.2、Demo/calc/calc.go")]),t._v(" "),n("ul",[n("li",[t._v("如果想在一个包中引用另外一个包里的标识符（如变量、常量、类型、函数等）时，该标识符必须是对外可见的（public）。")]),t._v(" "),n("li",[t._v("在 Go 语言中只需要将标识符的首字母大写就可以让标识符对外可见了。")])]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" calc\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" aaa "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"私有变量"')]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//首字母小写表示私有")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Age "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//首字母大写表示 公有方法")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sub")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//公有方法")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" y\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("h3",{attrs:{id:"_3-3、demo-main-go"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、demo-main-go"}},[t._v("#")]),t._v(" 3.3、Demo/main.go")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tc "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Demo/calc"')]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// c是取的别名")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//12")]),t._v("\n\tsub "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sub")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sub"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//main包中init函数 优先于 main函数")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main init..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nmain init...\n12\n8\n */")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])]),n("h2",{attrs:{id:"四、init-初始化函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、init-初始化函数"}},[t._v("#")]),t._v(" 四、init()初始化函数")]),t._v(" "),n("h3",{attrs:{id:"_4-1、init-函数介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、init-函数介绍"}},[t._v("#")]),t._v(" 4.1、init()函数介绍")]),t._v(" "),n("ul",[n("li",[t._v("在Go语言程序执行时导入包语句会自动触发包内部 init()函数的调用。")]),t._v(" "),n("li",[t._v("需要注意的是：init()函数没有参数也没有返回值。")]),t._v(" "),n("li",[t._v("init()函数在程序运行时自动被调用执行，不能在代码中主动调用它。")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(619),alt:"image-20220320224941965"}})]),t._v(" "),n("h3",{attrs:{id:"_4-2、init-函数执行顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、init-函数执行顺序"}},[t._v("#")]),t._v(" 4.2、init()函数执行顺序")]),t._v(" "),n("ul",[n("li",[t._v("Go 语言包会从 main 包开始检查其导入的所有包，每个包中又可能导入了其他的包。")]),t._v(" "),n("li",[t._v("Go 编译器由此构建出一个树状的包引用关系，再根据引用顺序决定编译顺序，依次编译这些包的代码。")]),t._v(" "),n("li",[t._v("在运行时，被最后导入的包会最先初始化并调用其 init()函数， 如下图示 :")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(620),alt:"image-20220320225017225"}})]),t._v(" "),n("h2",{attrs:{id:"五、golang中使用第三方包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、golang中使用第三方包"}},[t._v("#")]),t._v(" 五、Golang中使用第三方包")]),t._v(" "),n("h3",{attrs:{id:"_5-1、查找golang的第三方包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1、查找golang的第三方包"}},[t._v("#")]),t._v(" 5.1、查找golang的第三方包")]),t._v(" "),n("ul",[n("li",[t._v("https://pkg.go.dev/ : 查找看常见的 golang 第三方包;")])]),t._v(" "),n("h3",{attrs:{id:"_5-2、安装这个包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2、安装这个包"}},[t._v("#")]),t._v(" 5.2、安装这个包")]),t._v(" "),n("ul",[n("li",[t._v("第一种方法：go get 包名称 （全局）")])]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("go get github.com/shopspring/decimal\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("ul",[n("li",[t._v("第二种方法：go mod download （全局）\n"),n("ul",[n("li",[t._v("依赖包会自动下载到$GOPATH/pkg/mod，多个项目可以共享缓存的 mod ;")]),t._v(" "),n("li",[t._v("注意使用 go mod download 的时候首先需要在你的项目里面引入第三方包;")])])])]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("go mod download\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("ul",[n("li",[t._v("第三种方法：go mod vendor 将依赖复制到当前项目的 vendor 下 （本项目）\n"),n("ul",[n("li",[t._v("将依赖复制到当前项目的 vendor 下;")]),t._v(" "),n("li",[t._v("注意：使用 go mod vendor 的时候首先需要在你的项目里面引入第三方包;")])])])]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" mod vendor\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{652:function(v,_,l){"use strict";l.r(_);var i=l(7),a=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"title"}),l("p",[l("img",{attrs:{src:"https://atlas.pingcode.com/files/public/623162bb628df6b38b6f14b5",alt:"image.png"}})])]),v._v(" "),l("p"),l("div",{staticClass:"table-of-contents"},[l("ul",[l("li",[l("a",{attrs:{href:"#一、程序架构概念"}},[v._v("一、程序架构概念")])]),l("li",[l("a",{attrs:{href:"#三、架构风格"}},[v._v("三、架构风格")]),l("ul",[l("li",[l("a",{attrs:{href:"#_3-1、分布式架构-soa"}},[v._v("3.1、分布式架构 ：SOA")])]),l("li",[l("a",{attrs:{href:"#_3-2、分布式架构-msa"}},[v._v("3.2、分布式架构 ：MSA")])]),l("li",[l("a",{attrs:{href:"#_3-3、微服务架构"}},[v._v("3.3、微服务架构")])]),l("li",[l("a",{attrs:{href:"#_3-4、微服务治理面临的挑战"}},[v._v("3.4、微服务治理面临的挑战")])])])]),l("li",[l("a",{attrs:{href:"#四、分布式服务治理"}},[v._v("四、分布式服务治理")])]),l("li",[l("a",{attrs:{href:"#五、服务网格"}},[v._v("五、服务网格")]),l("ul",[l("li",[l("a",{attrs:{href:"#_5-1、服务网格介绍"}},[v._v("5.1、服务网格介绍")])]),l("li",[l("a",{attrs:{href:"#_5-2、sidcar"}},[v._v("5.2、Sidcar")])]),l("li",[l("a",{attrs:{href:"#_5-3、控制平面-control-plane"}},[v._v("5.3、控制平面（Control Plane）")])]),l("li",[l("a",{attrs:{href:"#_5-4、service-mesh"}},[v._v("5.4、Service Mesh")])])])]),l("li",[l("a",{attrs:{href:"#六、服务网格的实现方案"}},[v._v("六、服务网格的实现方案")]),l("ul",[l("li",[l("a",{attrs:{href:"#_6-1、服务网格的部署模式"}},[v._v("6.1、服务网格的部署模式")])])])])])]),l("p"),v._v(" "),l("h2",{attrs:{id:"一、程序架构概念"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#一、程序架构概念"}},[v._v("#")]),v._v(" 一、程序架构概念")]),v._v(" "),l("ul",[l("li",[v._v("架构 （Architecture）一词源于建筑领域，用于指规划、设计和建造建筑物的过程及产物；引入计算机领域后，软件架构就成为描述软件规划设计的专有名词；")]),v._v(" "),l("li",[v._v("简言之，软件架构是有关软件整体解构与组件的抽象描述，用于指导大型软件系统各个方面的设计。")]),v._v(" "),l("li",[v._v("架构的形式与特点 ：\n"),l("ul",[l("li",[v._v("1、以文档和代码呈现 ：架构概括包含设计过程，也包括设计的产物，可以是各类设计文档、设计图，也可以是一些技术验证代码、Demo或者相关的程序；文档是设计的载体，而代码是系统功能实现的载体；")]),v._v(" "),l("li",[v._v("2、架构服务于业务 ：即架构的首要功能是服务于业务功能，因此，架构设计需要一定的前瞻性来容纳业务变动；")]),v._v(" "),l("li",[v._v("3、架构影响团队的组织形式 ：业务的拆分方法和技术框架的选择必然会影响研发团队的组织形式，反过来，研发组织架构和成熟度也会最终所采取的技术架构的产生重要的影响。")]),v._v(" "),l("li",[v._v("4、架构存在于每一个系统 ：每一个已经实现并运行的系统，必然是特定架构设计的载体；")]),v._v(" "),l("li",[v._v("5、每个架构都有特定的架构风格；")]),v._v(" "),l("li",[v._v("6、架构需要不断地发展演进；")])])])]),v._v(" "),l("h2",{attrs:{id:"三、架构风格"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#三、架构风格"}},[v._v("#")]),v._v(" 三、架构风格")]),v._v(" "),l("ul",[l("li",[v._v("典型的企业级应用系统或互联网应用大多都是通过WEB提供一组业务能力，它通常包括：\n"),l("ul",[l("li",[v._v("运行于服务器端，以后端编程语言构建的业务处理部分。")]),v._v(" "),l("li",[v._v("用于存储业务数据的关系数据库或其他类型的存储系统。")]),v._v(" "),l("li",[v._v("提供给操作系统的、运行于浏览器或APP中具有UI的业务逻辑展示和输入部分。")])])]),v._v(" "),l("li",[v._v("根据软件系统在运行期的表现风格和部署结构，大体可以将其粗略地划分为两类 ：\n"),l("ul",[l("li",[v._v("单体架构 ：整个系统的所有功能单元整体部署到同一进程（所有代码可以打包称一个或多个文件）\n"),l("ul",[l("li",[v._v("进一步细分 ：简单单体模式、MVC模式、前端后分离模式、组件模式和类型模式等；")])])]),v._v(" "),l("li",[v._v("分布式架构 ：整个系统的功能单元分散到不同的进行，然后由多个进程功能提供不同的业务能力；\n"),l("ul",[l("li",[v._v("面向服务的架构 （SOA）")]),v._v(" "),l("li",[v._v("分布式服务架构 （DSA）")]),v._v(" "),l("li",[v._v("微服务架构 （MSA）")])])])])])]),v._v(" "),l("h3",{attrs:{id:"_3-1、分布式架构-soa"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、分布式架构-soa"}},[v._v("#")]),v._v(" 3.1、分布式架构 ：SOA")]),v._v(" "),l("ul",[l("li",[v._v("SOA 是建设企业IT生态系统的架构指导思想中的一种，它把服务视作基本的业务功能单元，由平台中立性的接口契约定义；SOA目前的实现方式有两种 ：分布式服务化和集中式管理\n"),l("ul",[l("li",[v._v("分布式服务化 ：常见的实现有 Dubbo 、Finagle 和 ICE等；")]),v._v(" "),l("li",[v._v("集中式管理 ：以ESB为基础支撑技术，较流行的商业实现由 WMB（IBM）、OSB（Oracle），开源实现有Mule、ServiceMix和OpenESB等；")])])]),v._v(" "),l("li",[v._v("SOA的两大基石\n"),l("ul",[l("li",[v._v("PRC ：远程过程调用，是一种通用目的系统通信手段，它把被调用者称为服务提供者（Provider），把调用者称为服务消费者（Consumer），并将对象转换为便于网络传输的二进制或文本数据的过程称为序列化（Serialization）。\n"),l("ul",[l("li",[v._v("常见的RPC技术有 Cobra、RMI、WebServer、JSON-RPC、XML-RPC、Thrift、Protocol Buffer和gRPC等；")]),v._v(" "),l("li",[v._v("按照调用方式，可分为四种模式 ：\n"),l("ul",[l("li",[v._v("RR （Request-Response）")]),v._v(" "),l("li",[v._v("Oneway （单项调用）")]),v._v(" "),l("li",[v._v("Futrue （异步）")]),v._v(" "),l("li",[v._v("Callback（回调）")])])])])]),v._v(" "),l("li",[v._v("MQ ：N个系统之间互相通讯时，利用MQ可以进行系统间解耦，并借助于失败策略、重试等机制完成错误处理；\n"),l("ul",[l("li",[v._v("点对点模式")]),v._v(" "),l("li",[v._v("发布订阅模式")])])])])])]),v._v(" "),l("h3",{attrs:{id:"_3-2、分布式架构-msa"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、分布式架构-msa"}},[v._v("#")]),v._v(" 3.2、分布式架构 ：MSA")]),v._v(" "),l("ul",[l("li",[v._v("实践中，通常大型项目的设计开发和维护在扩容、部署、发布回滚、适配新技术、快速开发和测试等方面存在着多种不同的难点，其结果便是催生了称为微服务架构的新技术。")]),v._v(" "),l("li",[v._v("什么是微服务 ？\n"),l("ul",[l("li",[v._v("抽象关键点 ：\n"),l("ul",[l("li",[v._v("1、由一些独立的共同组成应用系统")]),v._v(" "),l("li",[v._v("2、每个服务单独部署、独立运行在自己的进程中")]),v._v(" "),l("li",[v._v("3、每个服务都是独立的业务")]),v._v(" "),l("li",[v._v("4、分布式管理")])])]),v._v(" "),l("li",[v._v("遵循底耦合、高内聚的原则")])])]),v._v(" "),l("li",[v._v("微服务中调用链路较之传统的分布式系统长了很多，于链路上发生了故障的概率也必然随之增大，且存在性能消耗，于是，系统规划时必须考虑如何进行雪崩防御、功能降级、超时、重试、熔断、服务隔离等服务管理。")])]),v._v(" "),l("hr"),v._v(" "),l("ul",[l("li",[v._v("微服务如何体现 “微”的特点 ？\n"),l("ul",[l("li",[v._v("体积小 ：微小的不超过100行代码？")]),v._v(" "),l("li",[v._v("开发周期短 ：必须在两周完成开发或迭代？")])])])]),v._v(" "),l("hr"),v._v(" "),l("ul",[l("li",[v._v("而世界上知名大师Chirs Richradson 在 “Microservies Patterns”一书中通过一种三维可扩展模型 “扩展立方体”给出了不一样的定义\n"),l("ul",[l("li",[v._v("把应用程序功能性分解为一组服务的架构风格，每一个服务都是由一组专注的、内聚的功能职责组成。")]),v._v(" "),l("li",[v._v("微服务的大小并不重要，更好的目标是将精心设计的服务定义为能够由小团队开发的服务，并且将会时间最短，与其它团队协作2最少。")]),v._v(" "),l("li",[v._v("微服务架构的应用程序通过一些小的，松藕合的服务组织在一起，从而提升开发效率、可维护性、可测试性、和可部署性。")])])])]),v._v(" "),l("h3",{attrs:{id:"_3-3、微服务架构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、微服务架构"}},[v._v("#")]),v._v(" 3.3、微服务架构")]),v._v(" "),l("p",[l("img",{attrs:{src:"https://files.mdnice.com/user/16545/6696ec96-fe16-4b08-a29d-29075ec4f25d.png",alt:""}})]),v._v(" "),l("h4",{attrs:{id:"_3-3-1、微服务的特性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1、微服务的特性"}},[v._v("#")]),v._v(" 3.3.1、微服务的特性")]),v._v(" "),l("ul",[l("li",[v._v("微服务的特性\n"),l("ul",[l("li",[v._v("在微服务架构中，服务很小、独立且松散耦合；")]),v._v(" "),l("li",[v._v("每个服务都是一个单独的代码库，可由小型开发团队管理；")]),v._v(" "),l("li",[v._v("服务可以独立部署，团队可以更新现有服务而无需重建和重新部署整个应用程序；")]),v._v(" "),l("li",[v._v("每个服务负责持久保存自己的数据或外部状态，这与传统模型中使用单独的数据层处理数据持久化有所不同；")]),v._v(" "),l("li",[v._v("各服务间使用规范定义的API进行相互通信，每个服务隐藏了自身内部实施细节；")]),v._v(" "),l("li",[v._v("各个服务不需要共享相同的技术堆栈、库或框架，各维护团队完全可以使用熟悉的技术栈进行程序开发；")])])])]),v._v(" "),l("hr"),v._v(" "),l("ul",[l("li",[v._v("一个完整的管理系统，以应该有一些其他的服务\n"),l("ul",[l("li",[v._v("Managemant ：管理系统\n"),l("ul",[l("li",[v._v("负责在节点上放置服务、识别故障、跨节点重新平衡服务等；")])])]),v._v(" "),l("li",[v._v("Service Discovery ：服务发现")]),v._v(" "),l("li",[v._v("API Gateway ：API网关\n"),l("ul",[l("li",[v._v("客户端不能直接调用目标服务，而是调用API网关，并由API网关将调用转发到后端相应服务；")]),v._v(" "),l("li",[v._v("API网关可能聚合来自多个服务的响应并返回聚合响应；")])])])])])]),v._v(" "),l("h4",{attrs:{id:"_3-3-2、微服务架构的优劣"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2、微服务架构的优劣"}},[v._v("#")]),v._v(" 3.3.2、微服务架构的优劣")]),v._v(" "),l("ul",[l("li",[v._v("微服务架构的好处\n"),l("ul",[l("li",[v._v("使大型的复杂应用程序可以支持交付和持续部署")]),v._v(" "),l("li",[v._v("每个服务都相对较小且容易维护")]),v._v(" "),l("li",[v._v("服务可以独立部署、独立扩展")]),v._v(" "),l("li",[v._v("微服务架构可以实现团队的自治")]),v._v(" "),l("li",[v._v("更容易实验和采纳新技术")]),v._v(" "),l("li",[v._v("更好的容错机制")])])])]),v._v(" "),l("hr"),v._v(" "),l("ul",[l("li",[v._v("微服务架构的弊端\n"),l("ul",[l("li",[v._v("服务的拆分是一项挑战；")]),v._v(" "),l("li",[v._v("分布式系统带来的各种复杂性，使开发、测试和部署变得更加困难；\n"),l("ul",[l("li",[v._v("跨服务的事物可能需要Saga带来维护服务间数据的数据一致性，同时还要使用API组合成CORS视图实现跨服务查询")])])]),v._v(" "),l("li",[v._v("依赖更高度自动化的基础设施\n"),l("ul",[l("li",[v._v("自动化部署工具 ：例如 Netfix Spinnaker")]),v._v(" "),l("li",[v._v("产品化的PaaS平台，例如 OpenShift")]),v._v(" "),l("li",[v._v("Docker容器编排平台，例如 Kubernetes或Docker Swarm")])])]),v._v(" "),l("li",[v._v("当部署跨多个服务的功能时需要谨慎地协调更多团队；")]),v._v(" "),l("li",[v._v("开发者需要考虑到底在应用中什么阶段使用微服务框架；")])])])]),v._v(" "),l("h4",{attrs:{id:"_3-3-3、微服务架构中进程间通信"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3、微服务架构中进程间通信"}},[v._v("#")]),v._v(" 3.3.3、微服务架构中进程间通信")]),v._v(" "),l("ul",[l("li",[v._v("微服务架构将应用程序建为一组服务，这些服务必须经常协作才能处理各种外部请求；而服务实例通常是运行于多台机器上的不同进程，因此必须使用进程间通讯进行交互；")]),v._v(" "),l("li",[v._v("客户端于服务端的交互方式\n"),l("ul",[l("li",[v._v("一对一\n"),l("ul",[l("li",[v._v("同步模式 ：请求/响应")]),v._v(" "),l("li",[v._v("异步模式 ：异步请求/响应、单向通知（客户端发出请求但不期望响应）")])])])])]),v._v(" "),l("li",[v._v("一对多\n"),l("ul",[l("li",[v._v("异步模式\n"),l("ul",[l("li",[v._v("发布/订阅 ：客户端发布通知消息，被零个或多个感兴趣者订阅")]),v._v(" "),l("li",[v._v("发布/异步响应 ：客户端发布请求信息，然后等待从感兴趣的服务发回的响应")])])])])])]),v._v(" "),l("h4",{attrs:{id:"_3-3-4、基于同步远程过程调用的通信"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4、基于同步远程过程调用的通信"}},[v._v("#")]),v._v(" 3.3.4、基于同步远程过程调用的通信")]),v._v(" "),l("ul",[l("li",[v._v("基于同步模式的远程过程调用的通信模型中，无论工作与 “阻塞”模式或者是 “响应式的非阻塞”模式，客户端都假定响应将及时到达；\n"),l("ul",[l("li",[v._v("REST ：基于HTTP协议的进程间通信机制\n"),l("ul",[l("li",[v._v("优点 ：简单、支持请求/响应式通信、易于穿透防火墙等；")]),v._v(" "),l("li",[v._v("缺点 ：仅支持请求/响应、客户端必须指导服务实例的位置（URL），难以在单个请求中获取多个资源等；")])])])])]),v._v(" "),l("li",[v._v("gRPC ：二进制的消息协议，客户端于服务端之间使用HTTP/2以protocol buffer的格式交互二进制消息；\n"),l("ul",[l("li",[v._v("优势：\n"),l("ul",[l("li",[v._v("具有高效、紧凑的进程间通信机制；")]),v._v(" "),l("li",[v._v("设计具有复杂更新操作的API非常简单；")]),v._v(" "),l("li",[v._v("支持在远程过程调用和消息传递过程中使用双向流式消息交互；")]),v._v(" "),l("li",[v._v("实现了客户端和各种语言编写的服务之间的互操作性；")])])]),v._v(" "),l("li",[v._v("弊端 ：\n"),l("ul",[l("li",[v._v("与基于REST/JSON的API机制相比，javaScripts客户端使用基于gRPC的API需要做更多的工作；")]),v._v(" "),l("li",[v._v("同步通信机制，存在局部故障问题；")])])])])]),v._v(" "),l("li",[v._v("局部故障风险 ：分布式系统中，客户端与服务端是独立的进程，服务端很有可能无法在有限的时间对客户端的请求做出响应，进而很有可能触发多级客户端的连锁反应导致大面积故障或系统雪崩；\n"),l("ul",[l("li",[v._v("客户端调用服务端时，应该使用Netflix描述自己的方法保护自己\n"),l("ul",[l("li",[v._v("网络超时 ：不要无期限阻塞")]),v._v(" "),l("li",[v._v("限制客户端向服务端发出的请求的数量 ：充分考虑服务端的承载能力")]),v._v(" "),l("li",[v._v("使用熔断器 ：监控客户端发出请求的成功和失败数量，失败比例超过阈值即启用断路机制，从而让后续请求立即失效；经过一定的时长后再继续尝试，并在调用成功后解除熔断器；")])])])])]),v._v(" "),l("li",[v._v("使用服务发现\n"),l("ul",[l("li",[v._v("微服务实例具有动态分配的网络位置，而且由于动态扩展、故障和升级，服务实例集也可能会动态修改；\n"),l("ul",[l("li",[v._v("应用层服务发现 ：客户端与服务端直接通过服务注册表交互；")]),v._v(" "),l("li",[v._v("平台层服务发现 ：通过部署基础设施来处理服务发现，例如kubernetes等；")])])])])])]),v._v(" "),l("h4",{attrs:{id:"_3-3-5、基于异步消息模式的通信"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-5、基于异步消息模式的通信"}},[v._v("#")]),v._v(" 3.3.5、基于异步消息模式的通信")]),v._v(" "),l("ul",[l("li",[v._v("消息由描述正在发送的数据的元数据的消息头，以及数据部分的消息正文组成，并通过消息通道进行交换；\n"),l("ul",[l("li",[v._v("消息类型 ：文档（仅包含数据）、命令和事件")]),v._v(" "),l("li",[v._v("消息通道 ：点对点、发布/订阅")])])]),v._v(" "),l("li",[v._v("消息代理\n"),l("ul",[l("li",[v._v("无代理架构 ：服务间直接交换消息，ZeroMQ;")]),v._v(" "),l("li",[v._v("基于代理的消息\n"),l("ul",[l("li",[v._v("Apache ActiveMQ;")]),v._v(" "),l("li",[v._v("RabbitMQ;")]),v._v(" "),l("li",[v._v("Apache Kafka;")]),v._v(" "),l("li",[v._v("Apache Pulsar；")])])])])]),v._v(" "),l("li",[v._v("优势 ：松解耦、消息缓存、通信灵活；")]),v._v(" "),l("li",[v._v("劣势 ：潜在的性能瓶颈、单点故障、操作复杂等；")])]),v._v(" "),l("h3",{attrs:{id:"_3-4、微服务治理面临的挑战"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、微服务治理面临的挑战"}},[v._v("#")]),v._v(" 3.4、微服务治理面临的挑战")]),v._v(" "),l("ul",[l("li",[v._v("Kubernetes提供了强大的应用部署、升级和弹性伸缩等管理机制，并借助Service等实现了服务注册、发现有负载均衡；")]),v._v(" "),l("li",[v._v("但是，强分布式环境中，网络的不可靠性无法忽略，这显然带来了新的挑战\n"),l("ul",[l("li",[v._v("服务注册和服务发现")]),v._v(" "),l("li",[v._v("客户端重试")]),v._v(" "),l("li",[v._v("可配置的超时机制")]),v._v(" "),l("li",[v._v("负载均衡")]),v._v(" "),l("li",[v._v("限速")]),v._v(" "),l("li",[v._v("熔断")]),v._v(" "),l("li",[v._v("服务间路由")]),v._v(" "),l("li",[v._v("异常点检测")]),v._v(" "),l("li",[v._v("健康状态检查")]),v._v(" "),l("li",[v._v("流量整型")]),v._v(" "),l("li",[v._v("流量镜像")]),v._v(" "),l("li",[v._v("边缘路由")]),v._v(" "),l("li",[v._v("按需路由")]),v._v(" "),l("li",[v._v("A/B测试")]),v._v(" "),l("li",[v._v("内部发布")]),v._v(" "),l("li",[v._v("故障注入")]),v._v(" "),l("li",[v._v("统计和度量")]),v._v(" "),l("li",[v._v("日志")]),v._v(" "),l("li",[v._v("分布式跟踪")])])])]),v._v(" "),l("h2",{attrs:{id:"四、分布式服务治理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#四、分布式服务治理"}},[v._v("#")]),v._v(" 四、分布式服务治理")]),v._v(" "),l("ul",[l("li",[v._v("服务治理就是对服务不断增长的复杂度的管控及管理\n"),l("ul",[l("li",[v._v("网络拓扑变动、网络延迟、通信安全....")]),v._v(" "),l("li",[v._v("API网关、服务发现、服务容错、服务部署、数据调用、分布式调用链追踪.....")]),v._v(" "),l("li",[v._v("第一代微服务框架 ：Dubbo和Spring Cloud等；")]),v._v(" "),l("li",[v._v("第一代服务网格 ：Linkerd、Envoy和Istio等；")])])])]),v._v(" "),l("h2",{attrs:{id:"五、服务网格"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#五、服务网格"}},[v._v("#")]),v._v(" 五、服务网格")]),v._v(" "),l("h3",{attrs:{id:"_5-1、服务网格介绍"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-1、服务网格介绍"}},[v._v("#")]),v._v(" 5.1、服务网格介绍")]),v._v(" "),l("ul",[l("li",[v._v("服务网格\n"),l("ul",[l("li",[v._v("概念源于 Buoyant 公司的CEO Willain Morgan 的文章 “What's a service mesh ? And do i need one?”")]),v._v(" "),l("li",[v._v("是指专注于处理服务间通讯的基础设施，它负责在现代云原生应用组成的复杂拓扑中可靠传递请求；")]),v._v(" "),l("li",[v._v("专治模式 ：\n"),l("ul",[l("li",[v._v("除了处理业务逻辑的相关功能外，每个微服务还必须实现此前单体应用模型中用于网络间通信的基础功能，甚至还包括分布式应用程序之间的通信环境中应该实现的其他网络功能看，；例如熔断、限流、应用跟踪、指标采集、服务发现和负载均衡等。\n"),l("ul",[l("li",[v._v("实现模型经过演进三代 ：\n"),l("ul",[l("li",[v._v("内嵌于应用程序 → SDK → Sidecar")])])])])])])])])])]),v._v(" "),l("p",[l("img",{attrs:{src:"https://files.mdnice.com/user/16545/1c142d92-dd29-4596-8b7b-065eab70d240.png",alt:""}})]),v._v(" "),l("h3",{attrs:{id:"_5-2、sidcar"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-2、sidcar"}},[v._v("#")]),v._v(" 5.2、Sidcar")]),v._v(" "),l("ul",[l("li",[v._v("新一代的解决方案 ：让服务集中解决业务逻辑问题，网络相关的功能则于业务逻辑剥离，并封装为独立的运行单元并作为服务的反向透明代理，从而不再与业务紧密关联")]),v._v(" "),l("li",[v._v("换句话说 ，微服务的业务程序独立运行，而网络功能则以独立的代理层工作于客户端于服务之间，专门为代理的服务提供熔断、限流、追踪、指标采集和服务发现等功能；而这些由各个服务的专门代理层联合组成的服务通讯网络则称之为服务网格（Service Mesh）")])]),v._v(" "),l("h3",{attrs:{id:"_5-3、控制平面-control-plane"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-3、控制平面-control-plane"}},[v._v("#")]),v._v(" 5.3、控制平面（Control Plane）")]),v._v(" "),l("ul",[l("li",[v._v("数据平面于控制平面\n"),l("ul",[l("li",[v._v("数据平面 ：触及系统中每个数据包或请求；负责服务发现、监控检查、路由、负载均衡、身份验证/授权和可观测性等；")]),v._v(" "),l("li",[v._v("控制平面 ：为网格中的所有正在运行的数据平面提供策略和配置，从而将所有数据平面联合构建为分布式系统，它不接触系统中的任何数据包或请求；\n"),l("ul",[l("li",[v._v("负责的任务包括例如 确定两个服务 Service X 到 Service Y 之间的路由，Service Y 相关集群的负载均衡机制、断路策略、流量转移机制等，并将决策下发给 Service X 和 Service Y 的Sidercar；")])])])])]),v._v(" "),l("li",[v._v("控制平面组件\n"),l("ul",[l("li",[v._v("工作负载调度程序 ：借助于底层的基础设施 （例如Kubernetes）完成服务及其 Sidecar运行位置的调度决策；")]),v._v(" "),l("li",[v._v("服务发现 ：服务网格中的服务发现；")]),v._v(" "),l("li",[v._v("Sidcar代理配置API ：各Sidcar代理以最终一致的方式从各个系统组件获取配置；")]),v._v(" "),l("li",[v._v("控制平面 UI ：管理人员的操作接口，用于配置全局级别的设置，例如部署、身份认证和授权、路由及负载均衡等；")])])])]),v._v(" "),l("h3",{attrs:{id:"_5-4、service-mesh"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-4、service-mesh"}},[v._v("#")]),v._v(" 5.4、Service Mesh")]),v._v(" "),l("ul",[l("li",[v._v("Service Mesh 解决方案极大降低了业务逻辑于网络功能之间的耦合度，能够快捷、方便地集成到现有的业务环境中，并提供了多语言、多协作，运维和管理成本被大大压缩，且开发人员能够精力集中于业务逻辑本身，而无需关注业务代码以外的其他功能；")]),v._v(" "),l("li",[v._v("一旦启动 Service Mesh ，服务间通信将遵循以下通信逻辑 :\n"),l("ul",[l("li",[v._v("微服务彼此间不会直接进行通信，而是由各服务前端的称为 Service Mesh的代理程序进行；")]),v._v(" "),l("li",[v._v("Service Mesh 内置支持服务发现、熔断、负载均衡等网络相关的用于控制服务间通信的各种高级功能；")]),v._v(" "),l("li",[v._v("Service Mesh于编程语言无关，开发人员可以使用任何编程语言编写微服务的业务逻辑，各服务之间也可以使用不同的编程语言开发；")]),v._v(" "),l("li",[v._v("服务间的通信的局部故障可由 Service Mesh自动处理；")]),v._v(" "),l("li",[v._v("Service Mesh中的各服务的代理程序由控制平面（Control Plane）集中管理；各代理程序之间的通信网络也称为数据平面（Data Plane）;")]),v._v(" "),l("li",[v._v("部署于容器编排平台是，各代理程序会以微服务容器的Sidecar模式运行；")])])])]),v._v(" "),l("h2",{attrs:{id:"六、服务网格的实现方案"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#六、服务网格的实现方案"}},[v._v("#")]),v._v(" 六、服务网格的实现方案")]),v._v(" "),l("ul",[l("li",[v._v("在实现上，数据平面的主流解决方案由 Linkerd 、Nginx、Envoy、Haproxy和Traefix等，而控制平面的主要实现有 Istio、Nelson和SmartStack等几种\n"),l("ul",[l("li",[v._v("Linkerd\n"),l("ul",[l("li",[v._v("由Buoyant 公司于2016年率先创建的开源高性能网络代理程序（数据平面），是业界第一款 Service Mesh产品，引领并促进了相关技术的快速发展")]),v._v(" "),l("li",[v._v("Linkerd使用Namerd提供的控制平面，实现中心化管理和存储路由规则、服务发现配置、支持运行时动态的路由等功能。")])])]),v._v(" "),l("li",[v._v("Envoy\n"),l("ul",[l("li",[v._v("核心功能于数据平面，与2016年由Lyft公司创建并开源，目标是成为通用的数据平面")]),v._v(" "),l("li",[v._v("云原生应用，既可以作为前端代理，也可以实现Service Mesh中的服务间通信")]),v._v(" "),l("li",[v._v("Envoy 常被用于实现 API Gateway （如Ambassador）以及Kubernetes的Ingress Controller （例如 gloo等），不过，基于Envoy实现的 Service Mesh产品 Istio有着更广泛的用户基础。")])])]),v._v(" "),l("li",[v._v("Istio\n"),l("ul",[l("li",[v._v("相比前两者来说，Istio发布事件稍晚，它与2017年5月面世，但却是目前最火热的Service Mesh解决方案，得到了Google 、IBM、Lyft、Redhat等公司的大力推广及支持。")]),v._v(" "),l("li",[v._v("目前仅支持部署在Kubernetes之上，其数据平面由Envoy实现。")])])])])])]),v._v(" "),l("h3",{attrs:{id:"_6-1、服务网格的部署模式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_6-1、服务网格的部署模式"}},[v._v("#")]),v._v(" 6.1、服务网格的部署模式")]),v._v(" "),l("p",[l("img",{attrs:{src:"https://files.mdnice.com/user/16545/aa1a970b-6a49-47f4-a1ba-2a870f9681e4.png",alt:""}})]),v._v(" "),l("ul",[l("li",[v._v("服务网络的部署模式有两种 ：主机共享代理及Sidecar容器\n"),l("ul",[l("li",[v._v("主机共享代理\n"),l("ul",[l("li",[v._v("适用于同一主机上存在许多容器场景，并且还可以利用连接池来提高吞吐量")]),v._v(" "),l("li",[v._v("但一个代理进程故障将终止其所在主机上的整个容器队列，受影响的不仅仅是单个服务")]),v._v(" "),l("li",[v._v("实现方式中，常见的是运行为 Kubernetes 之上的 DaemonSet")])])])])]),v._v(" "),l("li",[v._v("Sidecar容器\n"),l("ul",[l("li",[v._v("代理进程注入每一个Pod定义以于主容器一同运行")]),v._v(" "),l("li",[v._v("Sidcar进程应该尽可能轻量且功能完善")]),v._v(" "),l("li",[v._v("实现方案 ：Linkerd、Envoy和Conduit")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);
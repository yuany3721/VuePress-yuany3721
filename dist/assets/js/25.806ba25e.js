(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{583:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:""}}),s._v(" "),a("blockquote",[a("p",[s._v("frp由客户端(frpc)和服务端(frps)组成，服务端通常部署在具有公网 IP 的机器上，客户端通常部署在需要穿透的内网服务所在的机器上。 内网服务由于没有公网IP，不能被非局域网内的其他用户访问。用户通过访问服务端的 frps，由frp负责根据请求的端口或其他信息将请求路由到对应的内网机器，从而实现通信。 在 frp 中一个代理对应一个需要暴露的内网服务。一个客户端支持同时配置多个代理。 "),a("br"),s._v(" "),a("a",{attrs:{href:"https://gofrp.org/docs",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"代理类型"}},[s._v("代理类型")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("tcp")]),s._v(" "),a("td",[s._v("单纯的 TCP 端口映射，服务端会根据不同的端口路由到不同的内网服务。")])]),s._v(" "),a("tr",[a("td",[s._v("udp")]),s._v(" "),a("td",[s._v("单纯的 UDP 端口映射，服务端会根据不同的端口路由到不同的内网服务。")])]),s._v(" "),a("tr",[a("td",[s._v("http")]),s._v(" "),a("td",[s._v("针对 HTTP 应用定制了一些额外的功能，例如修改 Host Header，增加鉴权。")])]),s._v(" "),a("tr",[a("td",[s._v("https")]),s._v(" "),a("td",[s._v("针对 HTTPS 应用定制了一些额外的功能。")])]),s._v(" "),a("tr",[a("td",[s._v("stcp")]),s._v(" "),a("td",[s._v("安全的 TCP 内网代理，需要在被访问者和访问者的机器上都部署 frpc，不需要在服务端暴露端口。")])]),s._v(" "),a("tr",[a("td",[s._v("sudp")]),s._v(" "),a("td",[s._v("安全的 UDP 内网代理，需要在被访问者和访问者的机器上都部署 frpc，不需要在服务端暴露端口。")])]),s._v(" "),a("tr",[a("td",[s._v("xtcp")]),s._v(" "),a("td",[s._v("点对点内网穿透代理，功能同 stcp，但是流量不需要经过服务器中转。")])]),s._v(" "),a("tr",[a("td",[s._v("tcpmux")]),s._v(" "),a("td",[s._v("支持服务端 TCP 端口的多路复用，通过同一个端口访问不同的内网服务。")])])])]),s._v(" "),a("h2",{attrs:{id:"配置centos服务端"}},[s._v("配置Centos服务端")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载Latest Release")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/fatedier/frp/releases/LatestRelease/frp.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxf frp.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入解压后的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" frp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置服务端配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" frps.ini\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; 配置基本内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("common")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("bind_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("7000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; frp自带的frps控制台")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dashboard_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("7001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dashboard_user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxxx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dashboard_pwd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxxx")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动frps ")]),s._v("\n./frps -c frps.ini\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"配置windows客户端"}},[s._v("配置Windows客户端")]),s._v(" "),a("p",[s._v("下载Latest Release for Windows amd64并解压 编辑frpc.ini")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("common")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server_addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1.2.3.4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("7000  ; frpc中的")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("remote_desktop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("tcp")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("local_ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("127.0.0.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("local_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3389 ; Windows远程桌面的默认端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("remote_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("8011")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("进入cmd，"),a("code",[s._v("./frpc.exe -c frpc.ini")]),s._v("这时使用另一台电脑运行"),a("code",[s._v("mstsc")]),s._v("，连接"),a("code",[s._v("1.2.3.4:8011")]),s._v("并输入凭据即可顺利登录到Windows远程桌面")]),s._v(" "),a("h3",{attrs:{id:"检查可能的问题"}},[s._v("检查可能的问题：")]),s._v(" "),a("ol",[a("li",[s._v("Windows未开启远程桌面")]),s._v(" "),a("li",[s._v("Windows未开启远程访问权限（系统--远程设置--允许远程连接至此电脑）")]),s._v(" "),a("li",[s._v("远程桌面的其他设置（系统--远程桌面）")]),s._v(" "),a("li",[s._v("查看设置的端口是否被占用，对应端口防火墙是否打开，frpc是否与frps端口对应（bind_port是frp提供服务的端口，local_port是客户端需要访问的服务所在端口，remote_port是访问客户端服务的服务端端口）")])]),s._v(" "),a("h2",{attrs:{id:"设置window10的frpc开机自启"}},[s._v("设置Window10的frpc开机自启")]),s._v(" "),a("p",[s._v("新建"),a("code",[s._v("run.bat")])]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用绝对路径")]),s._v("\nD:\\frp_0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("37"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("frpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exe "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c D:\\frp_0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("37"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0\\frpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ini > D:\\frp_0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("37"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0\\frpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("新建"),a("code",[s._v("frpc.vbs")])]),s._v(" "),a("div",{staticClass:"language-vb line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("WScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CreateObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("WScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Shell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Run run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("' 这里的run.bat也需要用绝对路径")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("将"),a("code",[s._v("frpc.vbs")]),s._v("放到"),a("code",[s._v("C:\\Users\\用户名\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup")]),s._v("里即可")]),s._v(" "),a("h2",{attrs:{id:"关于xtcp"}},[s._v("关于xtcp")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("开防火墙udp")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("firewall-cmd --permanent --add-port=7002/udp --zone=public\nfirewall-cmd --reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("修改"),a("code",[s._v("frps.ini")])])])]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("common")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("bind_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("7000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("bind_udp_port ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v(" 7001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dashboard_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("7001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dashboard_user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxxx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dashboard_pwd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxxx")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("配置frpc1（需要被访问的服务所在主机）的"),a("code",[s._v("frpc.ini")])])]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("common")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server_addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1.2.3.4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("7000")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("remote_desktop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("tcp")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("local_ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("127.0.0.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("local_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3389")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("remote_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("8011")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("xtcp_remote_desktop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xtcp")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("sk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("abcdefg")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("local_ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("127.0.0.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("local_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3389")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("配置frpc2（访问服务的主机）的"),a("code",[s._v("frpc.ini")])])]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("common")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server_addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1.2.3.4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("7000")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("xtcp_visitor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xtcp")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("role")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("visitor")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server_name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xtcp_remote_desktop  ; 与上面的对应")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("sk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("abcdefg")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("bind_addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("127.0.0.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("bind_port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1234")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("启动两个frpc，都正常注册，访问127.0.0.1:1234进行连接时两个frpc同时报错：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("xtcp_remote_desktop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" get sid from visitor error: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" udp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.101:57484: i/o "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("xtcp_visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" get sid from visitor error: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" udp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.104:60475-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("103.98")]),s._v(".240.96:42221: i/o "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("截至Aug 30 2021 GMT+08，"),a("a",{attrs:{href:"https://github.com/fatedier/frp/issues",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub issue"),a("OutboundLink")],1),s._v("中对此问题的回答仍然是与运营商NAT机制有关，无法稳定穿透，请尝试stcp_\\")]),s._v(" "),a("h2",{attrs:{id:"用nginx伪装端口"}},[s._v("用nginx伪装端口")]),s._v(" "),a("p",[s._v("nginx的stream没有"),a("code",[s._v("server_name")]),s._v("选项，所以即使拿域名伪装后面也会带一个端口号")]),s._v(" "),a("p",[a("s",[s._v("以及安装nginx的时候并没有"),a("code",[s._v("--with-stream")]),s._v("，所以懒得弄了= =")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
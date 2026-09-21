---
title: 圈地
lang: zh-CN
---

# 领地插件（res）

> [!NOTE]
> 圈地工具为木锄头，左击选择第一个位置，右击选择第二个位置。

## 总指令

`/res ?`查看帮助

## 领地创建与删除

`/res create [领地名]`创建一个领地

`/res remove <领地名>`删除一个领地

`/res subzone [子领地名]`在所处的领地中创建一个子领地

`/res auto [领地名] [范围]`自动以你站着的位置为中心，创建你能创建的最大领地

`/res select [x] [y] [z]`选取以你为中心需要被保护的区域（Z=高度，X/Y=横轴）

`/res select size`显示所选区域大小

`/res select cost`显示已选择区域价格

`/res select auto [玩家]`打开自动选择区域

`/res select expand [数值]`选区向面对的方向扩展数值大小

`/res contract <领地> [缩小单位]`从你面对的方向缩小领地

`/res select shift [数值]`选区向面对的方向平移

`/res select vert`高度从天空扩展到基岩

`/res select sky`高度扩展到天框

`/res select bedrock`高度扩展到基岩

`/res select chunk`选择目前所在区块

`/res select worldedit`使用 WorldEdit 的选区作为领地选区

`/res area add [领地] [区域ID]`为领地添加物理区域

`/res area remove [领地] [区域ID]`移除领地的物理区域

`/res area replace [领地] [区域ID]`替换领地的物理区域

> 物理区域可以与其他领地区域重叠。

`/res setmain <领地>`设置主领地

`/resadmin server [领地]`创建一个属于服务器所有的领地

## 领地权限与名称

`/res padd <领地名> [玩家]`向玩家添加基本权限

`/res pdel <领地名> [玩家]`删除玩家的基本权限

`/res pset <领地名> [玩家] [权限] [true/false/remove]`给不同的玩家设置权限

`/res set <领地名> [权限] [true/false/remove]`在不同的领地内设置权限

> 以上两条指令，不输入标志及其后面的内容可打开 GUI 面板。

`/res pset <领地> [玩家] removeall`删除一个玩家所有权限

`/res rename [旧名称] [新名称]`重命名领地

> 如果需要重命名子领地，必须使用全名称（主领地.子领地），而新名称不用全名称。

`/res mirror [原领地名] [目标领地名]`从原领地复制权限到目标领地（前提是你为两个领地的所有者）

`/res gset <领地名> [组名] [标志] [true/false/remove]`在不同的权限组里设置标志

`/res reset <领地>`将领地的所有权限重置

`/res lset <领地> [blacklist/ignorelist] [材料]`将某物品加入黑名单，以阻止这种物品被放置在领地中

`/res lset <领地> info`查看忽略名单选项

## 领地信息

`/res message <领地名> [enter/leave] [信息]`自定义玩家进入或离开领地的消息

> enter=进入，leave=离开；信息可以是彩色（& 颜色代码）。

`/res info`显示目前所处的领地信息；如果在领地外使用，则显示自己的领地信息

`/res list [玩家]`列出玩家拥有的领地信息

`/res listall <页码>`列出玩家所有领地

`/res area list [领地] <页码>`列出领地的物理区域

`/res area listall [领地] <页码>`列出所有区域的坐标和详细信息

`/res lists`预定义的权限列表可以应用到领地上

`/res lists add <列表名>`添加一个列表

`/res lists remove <列表名>`删除一个列表

`/res lists apply <列表名> <领地>`将列表应用于领地

`/res lists set <列表名> <权限> <值>`设置列表全局权限

`/res lists pset <列表名> <玩家> <权限> <值>`设置列表玩家权限

`/res lists view <列表名>`查看列表

`/res listhidden <玩家> <页码>`列出指定玩家拥有的隐藏领地

## 传送相关

`/res tp [领地名]`传送到指定领地

`/res tpset`设置领地中的传送位置（设置后输入 `/res tp [领地名]` 将传送至该位置）

`/res unstuck`将你移动到你所在的领地外

`/res rt`将你传送到世界上的随机位置

## 领地使用

`/res show <领地>`显示领地的边界

`/res bank [deposit/withdraw] <领地> [数额]`管理领地银行

> deposit=存款，withdraw=取款。

`/res resbank [deposit/withdraw] [数量]`从领地银行借贷

`/res give [领地名] [玩家]`将所选领地给予另外一名玩家（该玩家须在线，且你是领地所有者）

`/res compass <领地名字>`设置指南针指向领地

`/res shop`管理领地商店

`/res shop list`显示所有作为商店的领地

`/res shop vote <领地> [分数]`为领地商店评分

`/res shop like <领地>`为领地商店点赞

`/res shop votes <领地> <页码>`显示当前或指定领地商店的评分列表

`/res shop likes <领地> <页码>`显示当前或指定领地商店的赞列表

`/res shop setdesc [描述文字]`设置领地商店描述，支持颜色代码，用 /n 表示换行

`/res shop createboard [位置]`在选区位置建立商店宣传板，[位置] 表示宣传板的起始位置

`/res shop deleteboard`右击宣传板的告示牌以删除宣传板

## 领地聊天频道

`/res rc <领地>`加入当前领地或者指定领地的聊天频道

`/res rc leave`如果你在一个领地频道内，你将会离开此频道

`/res rc setcolor [颜色代码]`设置领地频道文字颜色

`/res rc setprefix [新前缀]`设置领地频道前缀

`/res rc kick [玩家]`从频道中踢出玩家

## 领地租赁相关

`/res market info [领地]`显示领地是否正在出租或出售，以及领地的花费

`/res market list`显示可出租与可出售的领地

`/res market list rent`列举可以租用的领地

`/res market list sell`列举可以出售的领地

`/res market sell [领地] [售价]`出售一个领地

`/res market sign [领地]`将看向的木牌设置为领地市场木牌

`/res market buy [领地]`如果该领地正在出售，则购买这个领地

`/res market unsell [领地]`取消出售领地

`/res market rent [领地] <true/false>`租用一个领地

> true 是开启自动续租；在领地所有者允许的情况下，领地将会在租约到期之前自动续租。

`/res market rentable [领地] [价格] [天数] <true/false>`以 [价格] 出租领地 [天数] 天

> 如果为 true，领地将会在租约结束后自动出租。

`/res market autopay <领地> [true/false]`开关领地自动支付

`/res market payrent <领地>`支付租用的领地

`/res market confirm`领地市场的确认操作

`/res market unrent [领地]`删除可出租领地

## 插件相关

`/res version`显示领地插件的版本

`/res tool`显示领地圈地和查看信息的工具类型

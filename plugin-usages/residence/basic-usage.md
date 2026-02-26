---
title: 如何使用圈地插件
lang: zh-CN
---
# 什么是圈地?

圈地是可以让玩家自行创建领地并用来保护自己的家，而不用去劳烦服务器内的OP（管理员）们。而且圈地还支持更多不同的保护类型，比如不
让其他玩家踏足于您的领地中。而且这些保护类型都可以由服务器的所有者来配置，并由服务器中的OP(管理员)们共同管理！

# 常见使用方式

`/res ? [页数]`显示帮助页，在?的后方输入页数来换页，默认从第一页开始！

`/res expand [数值]`按照您的朝向来扩展数值大小

`/res contract [数值]`向您的朝向来合并指定数值的领地

`/res default [领地名]`将所选领地的标志(flags)重置为默认。

`/res give [领地名] [玩家]`将所选领地给予给另外一名玩家！但是该玩家必须在线，而您必须是当前领地的所有者。

`/res lists`预先定义的领地权限列表，您可以使用`/res list`来获取详细信息。

`/res message [领地名] [enter/leave]（对应 进入/离开） [信息]`来自定义玩家进入或者离开领地的消息，当您处于一个领地当中时，
您可以不用输入领地名。

`/res mirror [原] [目标]`从一个领地(原)复制权限到另外一个领地(目标)，但前提是您必须是两个领地的所有者。

`/res rename [旧名称] [新名称]`重命名您的领地。如果你需要重命名子领地，必须使用全名称(主领地.子领地),而新名称不用使用全名
称。[举个栗子,我想要把我的子领地改个名字，我的主领地叫Japerz,我的子领地叫Cool，我想把我的子领地名称改成666但不想改变主领地的
名称。我可以使用指令`/res rename Japerz.Cool 666`。]

`/res renamearea [领地名] [旧名称] [新名称]`重命名附属与领地的物理区域

`/res tp [领地名]`传送到指定领地

`/res tpset`设置领地中的传送位置（当玩家输入/res tp [领地名]时，将会传送至您在领地内设置的传送位置）

`/res unstuck` 将您移动到你所在的领地外

## 选取指令

`/res select [x y z]`选取一个需要被保护的长方体区域，使用选择工具(默认为木斧)来选定两点(x与y点)或者指定X和Y点以你为中心点的
距离。(如输入 "10 5 10"为xyz点，那么将会选择一个宽21、高11、长21的长方形区域作为领地)

`/res select chunk` 选择整个块进行保护。

`/res select expand [数值]`按照您的朝向来选择扩展数值大小

`/res select size`显示您目前所选区域的大小

`/res select shift [数值]`按照您的朝向来选择移动数值大小

`/res select vert`高度从天空扩展到基岩

## 领地创建指令

`/res area [add/remove/replace]`(对应 添加/移除/替换)`[领地ID]`添加或者移除领地`区域`，可以与其他领地`区域`重叠。

`/res create [领地名称]`创建一个领地

`/res remove [领地名称]`移除一个领地

`/res removeall`移除所有您拥有的领地

## 领地信息指令

`/res area list [领地名]`列出所有的领地**区域**

`/res area listall [领地名]` 列出所有的领地**区域**以及其所处坐标

`/res current`显示您目前所处的领地名称

`/res info` 显示您目前所处的领地所有信息，如果您在领地外使用该指令，将会显示您领地的信息

`/res limits` 列出所有重要的限制

`/res version` 列出当前插件版本信息

## 领地标志指令

`/res gset [组名] [标志] [true/false/remove]`**(对应 允许/不允许/移除)** 在不同的权限组里设置标志

`/res lset [blacklist/ignorelist] [material]`添加或删除领地的黑名单或者白名单中的资料

`/res lset info` 列出所有领地的黑名单以及白名单列表的设置

`/res pset [PlayerName] [flag] [true/false/remove]` 给不同的玩家上设置标志

`/res set [标志] [true/false/remove]` 在不同的领地内设置标志 *(比如说我想让其他人在我的领地里使用箱子什么的，就可以使用**/
res set use t**←改指令表示设置use（使用权限）为允许(t)或者(true)[同样，(false)可以简写为(f)]）*

`/res setall [标志] [true/false/remove]` 将标志设置应用到所有世界的所有您所有的领地当中。

## 市场与经济指令

`/res lease [renew/cost]（对应 续租/成本） [领地名]`续租及显示续租领地的费用，成本选项目前只适用于iCononmy插件。

`/res market list`列出目前正在出售的领地列表

`/res market info [领地名]`查看正在出售的领地信息

`/res market sell [领地名] [售价]` 将领地出售.

`/res market unsell [领地名]` 停止出售领地.

`/res market buy [领地名]` 购买一个领地

`/res market rentable [领地名] [费用] [天数] repeat:t/f（对应 重复:是/否）` 在缴费[费用]后的时间段内，可以租下一个领地x天
[天数]。如果将repeat项写t (即重复设置为“是”)，领地将会在租房客到期时自动再次出租。

`/res market rent [领地名] repeat:t/f` 租用一个领地，如果将repeat项写t (即重复设置为“是”)，租房者将在到期时自动续租。

`/res market release [领地名]` 将您的领地从正在出租或可出租状态中移除。
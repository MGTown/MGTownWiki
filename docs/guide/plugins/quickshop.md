# QuickShop商店

## 如何创建商店

第一步，放置一个箱子，手持需要出售/收购的物品左键箱子,随后按照提示在聊天栏中输入价格

第二步，输入价格后打开箱子往里面放置出售的物品即可完成创建

## 如何创建收购商店

第一步，方法和上面一样，但是不需要往里面放入物品

创建好后右键告示牌

第二步，打开聊天栏用鼠标点击出售后面的更改即可创建收购商店

## 商店助手

`/qs staff`

`/qs staff add <玩家名>`添加指定玩家为此商店的商店助手成员

`/qs staff del <玩家名>`移除指定玩家为此商店的商店助手成员

`/qs staff clear`清空此商店的所有商店助手

`/qs staff list`查看此商店的商店助手成员列表

助手可以帮你管理商店，有权限打开您的商店箱子，设置价格，设置出售与收购，但是不能移除您的商店，不能从您的商店的交易中获得钱

## 指令清单

`/quickshop unlimited`使您的店铺能够购买/出售无限量或有限量的商品

`/quickshop setowner <player>`更换店主

`/quickshop buy`将商店更改为购买物品

`/quickshop sell`将商店更改为出售物品

`/quickshop price <price>`调整商品的买入/卖出价格

`/quickshop clean`移除所有已加载但无库存商品的店铺

`/quickshop find <item>`找到最近的出售以所提供文本开头的商品的商店。例如，使用“/quickshop find dia”将找到最近的购买/出售钻石的商店。

`/quickshop fetchmessage`从数据库中手动获取店铺信息

`/quickshop info`显示QuickShop信息

`/quickshop debug`启用/禁用调试模式

`/quickshop create <price> [item]`使用手头或指定的物品来创建商店的指令

`/quickshop currency <currency name>`指定商店所使用货币的指令。

经济插件必须支持多币种功能，并且需要得到QuickShop的支持。目前我们支持GemsEconomy和TNE

`/quickshop supercreate`在绕过所有保护检查的情况下开设一家店铺

`/quickshop paste`收集有用信息并将其粘贴到Pastebin上

Collects useful information and pastes it on Pastebin.

`/quickshop staff`管理您店铺的员工

`/quickshop staff add <player>`添加您店铺的员工

`/quickshop staff del <player>`优化您店铺的员工

`/quickshop staff clear`清除您店铺所有的员工

`/quickshop staff list`展示员工列表

`/quickshop cleanghost`拆除所有破旧的商店

`/quickshop export`将所有店铺数据导出到压缩文件中（仅控制台可用）

`/quickshop recovery`从TXT文件或粘贴内容中恢复所有店铺信息。

此命令仅限控制台使用，可能会删除/覆盖您服务器上现有的任何商店！请先进行备份，并在干净的数据库上尝试！

`/quickshop size`

Change the bulk size.

Requires the "allow-stacks" option in the config to be enabled for the command to work.

`/quickshop purge`

Purge the old shops, for more information please check the purge option in config.yml

Requires the "purge" option in the config to be enabled for the command to work.

`/quickshop transfer`将所有店铺从一个玩家转移到另一个玩家

`/quickshop item`更换店铺的商品

`/quickshop removeworld`移除特定世界中的所有商店

`/quickshop name`为店铺命名或取消特定名称

`/quickshop permission`调整每个店铺的权限，或将玩家添加到特定组中或从特定组中移除

`/quickshop database`查看并管理QuickShop-Hikari的状态

`/quickshop benefit`查看并管理您的店铺优惠

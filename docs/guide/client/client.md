---
title: 客户端详情
lang: zh-CN
---

## 下载

<https://api-client.mgtown.cn/latest>

## 使用

下载后你可以获得以下压缩包文件

![zip文件](/imgs/client/zip.png)

- #### 如果你有PCL

  > 将这个压缩包拖入PCL中即可自动安装

- #### 如果你没有PCL

  > 将这个文件解压，你可以获得以下文件![](/imgs/client/files.png)
  >
  > 双击打开Plain Craft Launcher.exe，将这个zip文件拖入即可

#### 模组相关

> [!WARNING]
>
> 请勿自行删改标注【重要】的模组，会无法进入服务器！！！
>
> 请勿自行更新模组，有概率无法进入游戏！！！

客户端内置优化模组和部分功能模组，部分模组默认为关闭状态，可自行在PCL->版本设置->Mod管理  中启用

#### 模组相关

> [!WARNING]
>
> 请勿自行删改标注【重要】的模组，会无法进入服务器！！！
>
> 请勿自行更新模组，有概率无法进入游戏！！！

客户端内置优化模组和部分功能模组，部分模组默认为关闭状态，可自行在 PCL->版本设置->Mod管理 中启用

::: details 具体模组列表
::: details 优化
| 模组名 | 作用 | 启用状态 | 备注 |
|:------:|:----:|:--------:|:----:|
| ImmediatelyFast | 优化 | 启用 | |
| Ixeris | 优化 | 关闭 | 默认禁用 |
| Jasione | 优化 | 启用 | |
| MoreCulling | 优化 | 启用 | |
| Optimised Block Entities (OBE) | 优化 | 启用 | |
| ScalableLux | 优化 | 启用 | |
| zFastNoise | 优化 | 启用 | |
| BadOptimizations | 优化 | 启用 | |
| C2ME (C^2M 引擎) | 优化 | 启用 | |
| Gnetum (HUD优化) | 优化 | 启用 | |
| EntityCulling (实体渲染机制优化) | 优化 | 启用 | |
| AsyncLogger (异步日志) | 优化 | 启用 | |
| AsyncParticles (异步粒子) | 优化 | 启用 | |
| Faster Shadow Mapper (快速阴影渲染) | 优化 | 启用 | |
| ModernFix (现代化修复) | 优化 | 启用 | |
| 钠 · 扩展 (Sodium Extra) | 优化 | 启用 | |
| 钠 (Sodium) | 优化 | 启用 | |
| 锂 (Lithium) | 优化 | 启用 | |
:::

::: details 功能
| 模组名 | 作用 | 启用状态 | 备注 |
|:------:|:----:|:--------:|:----:|
| I18nAutoUpdateMod | 功能 | 启用 | |
| mezz_config_gui | 功能 | 启用 | |
| Tweakeroo | 功能 | 启用 | |
| JEI物品管理器 | 功能 | 启用 | |
| Xaero的世界地图 | 功能 | 启用 | |
| Xaero的小地图 | 功能 | 启用 | |
| 一键背包整理Next | 功能 | 启用 | |
| Iris 光影 | 功能 | 启用 | |
| Litematica 投影 | 功能 | 启用 | |
| 游戏内账号切换 (IAS) | 功能 | 启用 | |
| 玉 🔍 (Jade) | 功能 | 启用 | |
| 表情工艺 (Emotecraft) | 功能 | 启用 | |
| 迷你HUD (MiniHUD) | 功能 | 启用 | |
| 键位冲突显示 (Controlling) | 功能 | 启用 | |
| 鼠标手势 (MouseTweaks) | 功能 | 启用 | |
| IMBlocker | 输入法冲突修复 | 启用 | |
| CE JEI支持 (ceclientmod) | 功能 | 启用 | 【重要】 |
| 自定义图片 (ImageFrameClient) | 功能 | 启用 | 【重要】 |
:::

::: details 支持库
| 模组名 | 作用 | 启用状态 | 备注 |
|:------:|:----:|:--------:|:----:|
| Architectury API | 支持库 | 启用 | |
| Cloth Config | 支持库 | 启用 | |
| Fabric API | 支持库 | 启用 | |
| Fabric Language Kotlin | 支持库 | 启用 | |
| Konkrete | 支持库 | 启用 | |
| libIPN | 支持库 | 启用 | |
| MaLiLib | 支持库 | 启用 | |
| Melody | 支持库 | 启用 | |
| mezz_config | 支持库 | 启用 | |
| PlayerAnimationLibMerged | 支持库 | 启用 | |
| Searchables | 支持库 | 启用 | |
| zconfig | 支持库 | 启用 | |
:::

::: details 美化
| 模组名 | 作用 | 启用状态 | 备注 |
|:------:|:----:|:--------:|:----:|
| 3D 皮肤层 (Skin Layers 3D) | 美化 | 启用 | |
| 万用皮肤补丁 (CustomSkinLoader) | 美化 | 启用 | |
| 模组菜单 (Mod Menu) | 美化 | 启用 | |
| 聊天头像 (Chat Heads) | 美化 | 启用 | |
| 自定义UI (FancyMenu) | 美化 | 启用 | |
| 自定义游戏加载界面 (Drippy Loading Screen) | 美化 | 启用 | |
:::
|
:::
:::



#### 模组问题

**注意：**如果想要将此整合包模组用于其他整合包请根据 [教程](https://www.mcmod.cn/post/5642.html) 来操作。

1. 在一些设备中，[ImmediatelyFast](https://www.mcmod.cn/class/7948.html "ImmediatelyFast") 模组可能会造成严重负优化（罕见）。    **解决：**在配置文件将 "fast_buffer_upload" 改为 false **或** 禁用此模组。

2. 在部分版本中，[Optimised Block Entities](https://www.mcmod.cn/class/27930.html "Optimised Block Entities") 模组可能会导致部分其他的模组添加的箱子贴图错误。    **解决：**在 OBE 的配置界面将 Optimize Chests 选项关闭。

3. 在 1.20.1 版本，[星光](https://www.mcmod.cn/class/3303.html "星光")模组不兼容[机械动力](https://www.mcmod.cn/class/2021.html "机械动力") 0.5.1j 以上的版本。    **解决：**禁用此模组。

4. 在 1.20.1 以上版本中，[Ixeris](https://www.mcmod.cn/class/20435.html "Ixeris") 模组在手机运行可能会导致一些问题，比如方块不渲染、HUD 消失等。    **解决：**更新渲染器版本 **或** 禁用此模组。

5. 在 1.20.1、1.21.1 版本中

   [加速渲染](https://www.mcmod.cn/class/21060.html "加速渲染")模组会导致在使用部分光影（例 Derivative、photon v1.2a）时第三人称玩家模型渲染异常。    **解决：**在模组设置 - 加速渲染 - 核心设置里将合批层储存类型改 SORTED。

   [加速渲染](https://www.mcmod.cn/class/21060.html "加速渲染")模组可能会导致旗帜渲染错误。    **解决：**在加速渲染模组设置中将 minecraft:banner 加入 “过滤器设置” 的 “方块实体过滤器列表” 中并开启方块实体过滤器、将 “方块实体过滤器类型” 设置为 BLACKLIST 后保存配置重启游戏。  

6. 在部分版本中，[Better Block Entities](https://www.mcmod.cn/class/23120.html "Better Block Entities") 模组可能会和 [实体模型特性](https://www.mcmod.cn/class/9909.html "实体模型特性")/[实体纹理特性](https://www.mcmod.cn/class/5862.html "实体纹理特性") 模组发生冲突。    **解决：**在 BBE 的配置界面关闭对应方块实体的优化。

7. 在 1.20.1Forge 版本中，[镭](https://www.mcmod.cn/class/5580.html "镭")和 [C2meF](https://www.mcmod.cn/class/21774.html) 冲突，表现为部分区块不加载。    **解决：**禁用 C2meF 或镭。

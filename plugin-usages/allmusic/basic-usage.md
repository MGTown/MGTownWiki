# 点歌插件（Allmusic3）

## 基础点歌与搜索指令

`/music search <关键词>`搜索歌曲（支持歌曲名、歌手名）

`/music search <平台>:<关键词>`指定平台搜索（如 netease:晴天）

`/music nextpage`查看搜索结果下一页

`/music lastpage`查看搜索结果上一页

`/music select <序号>`选择搜索结果中的歌曲（按序号）

`/music id <歌曲ID>`直接通过歌曲 ID 点歌（如网易云歌曲 ID）

`/music url <音频URL>`播放网络音频（如 MP3 链接）

## 播放队列与控制指令

`/music play`播放当前队列中的歌曲

`/music pause`暂停播放

`/music resume`恢复播放（从暂停状态）

`/music stop`停止播放并清空队列

`/music next`切换到下一首歌曲

`/music prev`切换到上一首歌曲

`/music list`查看当前播放队列

`/music clear`清空播放队列

`/music remove <队列序号>`从队列中移除指定歌曲（按序号）

## 歌词与 HUD 显示指令

`/music hud enable <类型>`开启 HUD 显示（Lyric= 歌词，Info= 歌曲信息）

`/music hud disable <类型>`关闭 HUD 显示

`/music hud <类型> x <坐标>`调整 HUD 横向位置（如 /music hud Lyric x 100）

`/music hud <类型> y <坐标>`调整 HUD 纵向位置（如 /music hud Info y 200）

`/music hud reset <类型>`重置 HUD 位置为默认值

`/music hud enable`启用/关闭全部界面；

`/music hud reset`重置全部界面；

`/music hud [位置] enable`启用关闭单一界面；

`/music hud [位置] pos[x][y]`设置某个界面的位置；

`/music hud [位置] dir[对齐方式]`设置某个界面的对齐方式；

`/music hud [位置] color[颜色HEX]`设置某个界面的颜色；

`/music hud [位置] reset`重置单一界面；

`/music hud pic size [尺寸]`设置图片尺寸;

`/music hud pic rotate [开关]`设置图片旋转模式；

`/music hud pic speed [数值]`设置图片旋转速度。

`/music lyric`手动刷新歌词显示（解决卡顿问题）

## 投票与互动指令

`/music vote`发起或参与切歌投票（达到阈值自动切歌）

`/music like`点赞当前播放的歌曲（增加热度）

`/music dislike`点踩当前播放的歌曲（可能触发投票）

## 歌单管理指令

`/music playlist list`查看服务器预设歌单列表

`/music playlist add <歌单名>`将预设歌单加入播放队列（需在 config.yml 中定义）

## 相关网站：https://www.mcmod.cn/class/14959.html

# 1269-Serve

## 项目简介

`1269-Serve` 是一个基于 uni-app 的前端应用，面向“1269服务专区”场景，提供企业上链申请、上链企业展示、企业查询、工信专区事项展示等移动端页面能力。

项目当前以静态页面和本地模拟数据为主，页面入口、路由和跨端配置由 uni-app 管理，业务 UI 由 Vue 单文件组件拆分实现。

## 技术栈

- **uni-app**：负责跨端应用结构、页面路由、生命周期和平台配置。
- **Vue 2**：项目在 `manifest.json` 中配置 `"vueVersion": "2"`，入口文件 `main.js` 使用 Vue 2 创建应用实例。
- **uView UI 2.0.38**：项目通过 `uni_modules/uview-ui` 引入 uView 组件库，并在 `main.js` 中执行 `Vue.use(uView)`。
- **SCSS / CSS / rpx**：页面和组件大量使用 `rpx`、Flex、Grid、渐变背景、圆角卡片等移动端样式。
- **uni-app API**：使用 `uni.navigateTo`、`uni.navigateBack`、`uni.uploadFile`、`uni.hideKeyboard` 等 API 处理页面跳转、文件上传和键盘行为。

## 项目结构

```text
1269-serve/
├── App.vue                         # 应用根组件，导入 uView 全局样式
├── main.js                         # 应用入口，注册 Vue 2 和 uView
├── manifest.json                   # uni-app 应用配置、跨端配置、Vue 版本配置
├── pages.json                      # 页面路由与导航栏配置
├── uni.scss                        # 全局样式变量/公共样式入口
├── uni.promisify.adaptor.js        # uni-app Promise 适配文件
├── index.html                      # H5 入口模板
├── pages/                          # 页面级组件
│   ├── Start/                      # 首页：1269服务专区
│   ├── OneNet/                     # 工信专区/一网通办页面
│   ├── EnterpriseChain/            # 上链企业与行业分类页面
│   ├── ApplyChain/                 # 企业上链申请表单
│   ├── Success/                    # 提交成功反馈页
│   ├── EnterpriseSearch/           # 企业搜索与筛选页
│   └── EnterpriseDetail/           # 企业详情页
├── components/                     # 业务组件
│   ├── Start/                      # 首页菜单、产业链动态
│   ├── OneNet/                     # 主题分类、热门事项
│   ├── EnterpriseChain/            # 企业列表
│   ├── EnterpriseSearch/           # 企业搜索结果列表
│   └── ApplyChain/                 # 上链申请产业链动态表单项
├── static/                         # 页面图片、图标等静态资源
├── utils/                          # 工具函数
├── uni_modules/uview-ui/           # uView UI 组件库
├── migrations/                     # 历史迁移/备份页面与组件
└── unpackage/                      # uni-app 构建输出目录
```

## 页面路由

页面路由定义在 `pages.json` 中，当前包含以下页面：

| 页面路径 | 页面说明 | 导航配置 |
| --- | --- | --- |
| `pages/Start/Start` | 首页，展示 1269 服务专区入口、企业上链入口、产业链动态 | 自定义导航栏 |
| `pages/OneNet/OneNet` | 工信专区/一网通办页面，展示事项办理、主题分类和热门事项 | 自定义导航栏 |
| `pages/EnterpriseChain/EnterpriseChain` | 上链企业页面，展示企业上链入口、行业分类和企业列表 | 自定义导航栏 |
| `pages/ApplyChain/ApplyChain` | 企业上链申请表单页面 | 原生导航栏，标题为“上链申请” |
| `pages/Success/Success` | 表单提交成功页 | 原生导航栏，标题为“上链申请” |
| `pages/EnterpriseSearch/EnterpriseSearch` | 企业列表搜索页，支持分类和关键字筛选 | 原生导航栏，标题为“企业列表” |
| `pages/EnterpriseDetail/EnterpriseDetail` | 企业详情页，展示企业基本信息、企业概况和企业简介 | 原生导航栏，标题为“企业详情” |

## 功能模块

### 首页：1269服务专区

首页位于 `pages/Start/Start.vue`，主要包含：

- “申请企业上链”入口，点击后进入 `pages/ApplyChain/ApplyChain`。
- “上链企业数”卡片，点击后进入 `pages/EnterpriseChain/EnterpriseChain`。
- “产业链图谱”展示卡片。
- 中央菜单组件 `MiddleMenu`，展示“一网通办”“产业链介绍”“产业链政策”等入口。
- 产业链动态组件 `ChainActivity`，展示新闻标题、内容摘要、日期和图片。

### 一网通办 / 工信专区

页面位于 `pages/OneNet/OneNet.vue`，主要包含：

- 事项在线办理、事项办件查询等入口样式区块。
- “我的办件”卡片。
- 主题分类组件 `ThemesList`，展示“行政许可”“行政确认”“公共服务”。
- 热门事项组件 `HotEvents`，展示事项标题、窗口地址和联系电话。

### 上链企业展示

页面位于 `pages/EnterpriseChain/EnterpriseChain.vue`，主要包含：

- 企业上链展示区和“立即申请”按钮样式。
- 行业分类宫格，包含电子信息、有色金属、装备制造、新能源、石油化工、建材、钢铁、航空、食品、纺织服装、医药、现代家具等分类。
- 企业列表组件 `EnterpriseList`，展示企业名称、简介、地址、企业类型和标签。
- 点击行业分类或“查看更多”可进入企业搜索页。
- 点击企业列表项可进入企业详情页。

### 企业搜索与筛选

页面位于 `pages/EnterpriseSearch/EnterpriseSearch.vue`，主要包含：

- 分类下拉筛选，目前包含“现代家具”“规上企业”。
- 关键字输入框，通过企业名称进行本地筛选。
- 搜索结果组件 `SearchList`，展示企业列表卡片。
- 点击搜索结果可进入企业详情页。

### 企业详情

页面位于 `pages/EnterpriseDetail/EnterpriseDetail.vue`，主要包含：

- 企业基本信息：企业名称、所在地、联系人、联系电话、详细地址。
- 企业概况：主营产品/服务、所属产业链、产业链类型、企业实力。
- 企业简介：多段文本介绍和企业图片展示。

### 企业上链申请

页面位于 `pages/ApplyChain/ApplyChain.vue`，主要包含：

- 企业名称、所属地区、社会信用代码、联系人、联系电话等基础信息。
- 详细地址、主营产品/服务、企业简介等多行文本输入。
- 社会信用代码输入与失焦掩码展示。
- 产业链申请列表组件 `ChainList`，支持动态增加、删除申请项。
- 所属产业链选择、主营方向填写和表单校验。
- 是否规上企业、是否链主龙头企业、是否专精特新中小企业、是否专精特新“小巨人”企业等单选项。
- 企业照片上传组件。
- 提交时同时校验主表单和产业链子表单，校验通过后跳转到提交成功页。

### 提交成功反馈

页面位于 `pages/Success/Success.vue`，展示提交成功图片、提示文案和“返回首页”按钮。

## 主要组件说明

| 组件 | 位置 | 主要职责 |
| --- | --- | --- |
| `MiddleMenu` | `components/Start/MiddleMenu.vue` | 接收 `middleList`，渲染首页中央菜单并处理页面跳转 |
| `ChainActivity` | `components/Start/ChainActivity.vue` | 接收 `newsList`，渲染产业链动态列表 |
| `ThemesList` | `components/OneNet/ThemesList.vue` | 接收 `themes`，渲染一网通办主题分类 |
| `HotEvents` | `components/OneNet/HotEvents.vue` | 接收 `hotEvents`，渲染热门事项列表 |
| `EnterpriseList` | `components/EnterpriseChain/EnterpriseList.vue` | 渲染上链企业列表，并跳转企业详情或企业搜索 |
| `SearchList` | `components/EnterpriseSearch/SearchList.vue` | 接收 `searchList`，渲染筛选后的企业搜索结果 |
| `ChainList` | `components/ApplyChain/ChainList.vue` | 接收 `chainApplyList` 和 `total`，维护动态产业链申请项并提供校验能力 |

## 静态资源说明

图片和图标统一放在 `static/` 目录下，并按页面或模块拆分：

- `static/Start/`：首页卡片、菜单、产业链动态相关图片。
- `static/OneNet/`：工信专区、一网通办、主题分类、热门事项相关图片。
- `static/EnterpriseChain/`：行业分类、企业列表、企业地址和类型图标。
- `static/EnterpriseSearch/`：企业搜索列表相关图片和图标。
- `static/EnterpriseDetail/`：企业详情图片。
- `static/ApplyChain/`：增加、删除产业链申请项按钮图标。
- `static/Success/`：提交成功页图片。

## 运行方式

当前项目根目录未包含 `package.json` 或 npm scripts，建议使用 HBuilderX 打开并运行：

1. 使用 HBuilderX 打开项目目录 `1269-serve`。
2. 在 HBuilderX 中安装或确认 uni-app 相关运行环境。
3. 选择运行目标：
   - 运行到浏览器，用于 H5 预览。
   - 运行到微信开发者工具，用于微信小程序预览。
   - 运行到 App 基座，用于 App 端调试。
4. 如需发布对应平台，使用 HBuilderX 的发行功能，并根据目标平台补充 `manifest.json` 中的应用配置。

## 开发说明

- 新增页面时，需要同时创建 `pages/` 下的页面文件，并在 `pages.json` 中注册路由。
- 业务组件建议继续放在 `components/` 下，并按业务页面或功能模块分目录管理。
- 静态图片建议继续按页面模块放入 `static/` 对应子目录。
- uView 组件库已在 `main.js` 中全局注册，公共样式已在 `App.vue` 中导入。
- 表单相关交互主要依赖 uView 的 `u--form`、`u-form-item`、`u--input`、`u--textarea`、`u-radio-group`、`u-upload`、`u-action-sheet` 等组件。
- `migrations/` 目录当前作为历史迁移/备份代码保留，不是主页面入口。

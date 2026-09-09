# BeijingSauce

可继续开发的英文城市指南骨架。现有 React 19 / Vinext / Sites 架构，保留锁文件和自托管字体。

## 启动

使用 Node.js 22.13 或以上版本。

```sh
npm ci
npm run dev
```

打开终端打印的本地地址。`/preview` 是页面模板索引。

```sh
npm run check
# 开发服务器运行时：
npm run test:smoke
```

## 哪里改什么

- `app/`：页面、详情模板、元数据、404 和错误页面。
- `components/site/`：共用导航、页脚、卡片、酒吧筛选。
- `lib/content/types.ts`：文章、酒吧和读取接口的类型约定。
- `lib/content/repository.ts`：数据来源入口；未来数据库从这里接入。
- `lib/content/fixtures.ts`：明确标注的虚构演示内容，可整批替换。
- `app/globals.css`：字体、色彩、响应式和页面排版。
- `docs/architecture.md`：内容、数据库、采集与协作边界。

## 当前范围

已实现 Home、Blog、Bars 目录、About Us、文章详情、酒吧详情、相互关联、名称/风格搜索、区域筛选、无结果状态、404、错误边界、健康检查、robots 和 sitemap。

数据库、Notion 自动发布、爬虫、登录、生产内容、共享 GitHub 仓库和远程测试站尚未接入。页面上的演示酒吧与文章不代表真实店铺或体验。

默认禁止搜索收录，演示详情始终 noindex 且不进入 sitemap。`SITE_ENV=production` 仅在真实内容、发布验证及域名配置完成后开启。该开关不是访问控制，不要把秘密放入演示数据。

## 协作

两人都可改代码；建议一人一个分支，提交前跑检查，再合并。修改内容结构时先更新 types，再更新适配器和使用该字段的页面。秘密放环境配置，不提交到仓库。

此目录本身是独立 Git 仓库，可打包交接；Sites 的内部源码存储不等于两人已共享的 GitHub 仓库。

Lint 范围为业务页面、站点组件和内容模块；未使用的生成式 shadcn 组件保留在 components/ui，不纳入当前业务 lint。全工程仍执行 TypeScript 检查。使用这些预置组件时应补充其可访问性检查。

## GitHub 协作

私有仓库：https://github.com/1021ju/beijingsauce

```sh
git clone https://github.com/1021ju/beijingsauce.git
cd beijingsauce
npm ci
npm run dev
```

使用自己的 GitHub 账号访问；协作者需要由仓库所有者邀请。主分支保存可运行版本，修改建议走分支与 Pull Request。本地 npm run check 与 npm run test:smoke 执行类型、代码、构建及页面检查。GitHub Actions 模板在 docs/github-actions-check.yml；当前 GitHub 授权没有 workflow 权限，因此尚未启用自动运行。

当前视觉为极简预览版：近白底、黑色文字、统一间距、文本卡片与单张首页图片。以后调整品牌时优先修改公共样式，不改变内容接口。

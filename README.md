# 李佳瑶个人网站

一个使用 React + TypeScript + Vite 构建的个人专业档案型单页网站，面向 GitHub Pages 部署。

## 安装依赖

```bash
npm install
```

## 本地运行

```bash
npm run dev
```

## 构建

```bash
npm run build
```

构建产物会输出到 `dist` 目录。

## GitHub Pages 部署

项目已包含 `.github/workflows/deploy.yml`。推送到 `main` 分支后，GitHub Actions 会执行 `npm run build`，并把 `dist` 部署到 GitHub Pages。

在仓库的 GitHub Pages 设置中，选择 `GitHub Actions` 作为部署来源。

## 修改 Vite base

`vite.config.ts` 中当前配置为：

```ts
base: "/",
```

如果仓库是根域名仓库，例如 `username.github.io`，保持 `base: "/"`。

如果仓库不是根域名仓库，例如仓库名是 `li-jiayao-profile`，需要改为：

```ts
base: "/li-jiayao-profile/",
```

修改后重新运行：

```bash
npm run build
```

## 替换个人照片

首页照片路径在 `src/data/profile.ts` 的 `photo.src` 中配置。当前使用 `public/profile-photo.svg` 作为占位图。

如果要换成真实照片，可以把图片放到 `public/profile-photo.jpg`，然后把 `photo.src` 改成：

```ts
src: "/profile-photo.jpg",
```

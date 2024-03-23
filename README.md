# React Airbnb Clone

## 项目介绍

React Airbnb Clone 是一个复刻 Airbnb 的全栈项目，主要用于练习和演示 React 及相关技术栈的使用。本项目致力于复现 Airbnb 的优雅 UI 设计，并在此基础上探索前后端整合、性能优化以及现代化部署实践。

## 项目演示

本项目已成功部署并上线。当前域名 `cicivibes.site` 正在备案中。欢迎通过 IP 地址访问：[120.25.231.132](http://120.25.231.132) 体验。

### 主要功能

- **首页浏览**: 用户可以浏览首页推荐的房源，包括精选图片和基本信息。
- **模块查看**: 从首页点击模块下方的“查看更多”，用户可以浏览所有房源信息。
- **房源详情**: 点击房源，用户可以查看房源的详细信息，如图片、价格、评价和须知等。
- **图片预览**: 在房源详情页，用户可以点击图片进入全屏模式，以更好地查看房源照片。

### 技术亮点

- **组件封装**: 实现了带指示器的轮播图、滚动条和图片预览等可复用组件。
- **性能优化**: 通过 `memo` 和 `useCallback` 减少不必要的渲染，使用 `React.lazy` 和 `Suspense` 进行组件懒加载，并通过骨架屏优化加载体验。
- **样式共享**: 利用 `ThemeProvider` 管理主题颜色、字体及混合样式，简化跨组件样式共享。
- **数据抓取**: 使用 Node.js 脚本从接口抓取数据，并存储至 MySQL 数据库。
- **现代化部署**: 通过 Docker 多阶段构建完成项目的部署上线，同时使用 Redis 提升数据处理效率。

## 技术栈

### 前端

- React 18
- Redux
- Styled-components
- Material UI
- Axios

### 后端

- Nest.js
- MySQL
- Docker
- Redis

## 项目地址

- 前端: [react-airbnb-clone](https://github.com/Cicici-Shi/react-airbnb-clone)
- 后端: [airbnb_clone_backend](https://github.com/Cicici-Shi/airbnb_clone_backend)

## 快速开始

1. 克隆仓库:

   ```bash
   git clone https://github.com/Cicici-Shi/react-airbnb-clone.git
   cd react-airbnb-clone
   ```

2. 安装依赖:

   ```bash
   npm install
   ```

3. 启动项目:
   ```bash
   npm start
   ```

## 贡献

本项目欢迎任何形式的贡献，无论是新功能、bug 修复或是文档改进。如果您有任何问题，欢迎通过 Issues 提出。

## 许可证

[MIT](LICENSE)

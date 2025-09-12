# HNUSEC

湖南大学信息安全协会

Just for Fun✨

## 如何提交文章

### 文章结构

所有文档都位于 `content/docs/` 目录下，使用 MDX 格式编写。

### 提交步骤

1. **Fork 本仓库**

   ```bash
   git clone https://github.com/HnuInformationSec/HNUSEC
   cd HNUSEC
   ```

2. **创建新的模块目录**（如果需要）

   ```bash
   # 复制现有的 guide 模块作为模板
   cp -r content/docs/guide content/docs/your-module-name
   ```

3. **编写文章**
   - 在对应模块目录下创建 `.mdx` 文件
   - 文件顶部添加 frontmatter：

     ```yaml
     ---
     title: 文章标题
     description: 文章描述
     ---
     ```

4. **更新目录结构**
   - 编辑模块下的 `meta.json` 文件，添加新文章的配置：

     ```json
     {
       "title": "模块名称",
       "your-article": {
         "display": "显示标题",
         "order": 1
       }
     }
     ```

5. **提交 Pull Request**

   ```bash
   git add .
   git commit -m "feat: 添加新文章 - 文章标题"
   git push origin main
   ```

   可选：在提交前使用markdownlint格式化文档

   ```bash
   # 检查格式问题
   npm run lint:md
   
   # 自动修复格式问题
   npm run fix:md
   ```

### 文章规范

- 使用 MDX 格式，支持 React 组件
- 文件名使用小写字母和连字符（kebab-case）
- 图片放在 `public/` 目录下

## 如何添加友链

友链现在通过配置文件管理，支持年级分组、标签分类等丰富功能。

### 数据结构

```typescript
interface Friend {
  name: string;           // 姓名
  url: string;            // 博客链接
  avatar?: string;        // 头像图片（可选）
  description: string;    // 描述
  grade: "2025级" | "2024级" | "2023级" | "2022级" | "2021级" | "Veteran";
  tags: string[];         // 技术标签
  bio?: string;          // 个人简介（可选）
}
```

### 添加步骤

1. **编辑配置文件** `config/friends.ts`：

   ```typescript
   export const friends: Friend[] = [
     // 现有链接...
     {
       name: "博客名称",
       url: "https://your-blog.com",
       avatar: "/avatars/your-avatar.jpg", // 可选
       description: "你的个性签名",
       grade: "2024级",
       tags: ["Web", "AI", "Security"], // 你的技术方向
       bio: "简短的个人介绍" // 可选
     }
   ];
   ```

2. **添加头像图片**（可选）：
   - 将头像图片放在 `public/avatars/` 目录
   - 推荐尺寸：48×48 像素
   - 支持格式：jpg, png, webp

3. **提交 Pull Request**：

   ```bash
   git add config/friends.ts public/avatars/your-avatar.jpg
   git commit -m "feat: 添加友情链接 - 博客名称"
   git push origin main
   ```

### 注意事项

- 如果不提供 `avatar`，会自动生成首字母头像
- `description` 建议控制在 30 字以内
- 确保链接有效且内容健康

## 本地测试

在提交任何更改之前，建议在本地测试您的更改：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 <http://localhost:3000> 查看效果。

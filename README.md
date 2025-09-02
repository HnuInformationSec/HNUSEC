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

### 文章规范
- 使用 MDX 格式，支持 React 组件
- 文件名使用小写字母和连字符（kebab-case）
- 图片放在 `public/` 目录下
- 代码块请注明语言类型

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000 查看效果。
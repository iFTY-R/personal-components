
## 引入样式模块
如果您只想在项目中单独引入my-shared-styles包中的一部分样式，可以将样式文件拆分为多个文件，每个文件包含一个特定的样式集合，并将其作为my-shared-styles包中的多个模块进行导出。

假设您想单独引入my-shared-styles包中的滚动条样式，您可以按照以下步骤进行操作：

在my-shared-styles包中创建一个名为scrollbar.css的文件，该文件包含滚动条样式的定义。

在my-shared-styles包的package.json文件中，添加一个style字段，该字段包含一个对象，指定每个样式模块对应的入口文件。例如：

```json
{
  "name": "my-shared-styles",
  "version": "1.0.0",
  "style": {
    "scrollbar": "./scrollbar.css",
    "other-styles": "./other-styles.css"
  }
}
```

在需要使用滚动条样式的文件中，使用import语句导入my-shared-styles包的scrollbar模块，例如：
```javascript
import 'my-shared-styles/scrollbar';
```

或者，在Vue组件中：
```vue
<style>
  @import 'my-shared-styles/scrollbar';
</style>
```
请注意，my-shared-styles包的名称后跟斜杠和模块名称，即my-shared-styles/scrollbar。这将告诉pnpm只导入scrollbar模块，而不是整个my-shared-styles包。

通过这种方式，您可以根据需要单独引入my-shared-styles包中的各个样式模块，而无需将整个包导入项目中。您可以为每个模块指定不同的名称，并在package.json文件的style字段中进行配置，以便轻松管理每个模块的入口文件。

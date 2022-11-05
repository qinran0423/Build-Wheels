## webpack核心构建流程

- 创建compiler对象
- 使用compiler对象开始编译整个项目
- 从入口文件开始， 解析模块依赖，形成依赖关系树
- 递归依赖树，将每个模块交给对应的Loader处理
- 合并loader处理完的结果，讲打包结果输出到dist目录

### Tasking
- [ ] 创建Compiler对象
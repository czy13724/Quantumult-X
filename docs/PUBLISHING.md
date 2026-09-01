# 发布策略说明

本仓库发布流程依赖 GitHub Actions 自动化，统一处理脚本头部说明生成和索引维护。

## 自动化触发

当有提交推送到 `main` 且变更包含 `scripts/**` 时，会触发工作流：

- [`../.github/workflows/build_outputs.yml`](../.github/workflows/build_outputs.yml)

该工作流会自动执行：
- 规范化头部引用说明
- 生成与更新 `docs/SCRIPTS.md` 索引

如果检测到生成物有变化，会由工作流自动提交并推送到 `main`。

## 新增/更新脚本流程

1. 在 [`../scripts/`](../scripts/) 中新增或修改脚本（`.js`/`.conf`/`.snippet`）。
2. 按照 [STYLE.md](STYLE.md) 补全头部字段。
3. 提交并推送到 `main`。
4. 等待 Actions 完成索引自动更新与提交。

## 生成物位置

- 索引表：[SCRIPTS.md](SCRIPTS.md)

## 注意事项

- [SCRIPTS.md](SCRIPTS.md) 为自动生成，请勿手动编辑。
- 如需保持本地同步，建议先 `git pull` 再开始新提交。

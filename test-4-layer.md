# 4层关系测试用例

## 核心测试：爸爸的爸爸的弟弟的儿子
- **路径数组**：['father', 'father', 'youngerBrother', 'son']
- **层数**：4层
- **预期结果**：堂叔
- **实际结果**：亲戚 ❌

### 关系分析
1. 我 → 爸爸（father）
2. 爸爸 → 爷爷（father）
3. 爷爷 → 叔公/叔爷爷（youngerBrother）
4. 叔公 → 叔公的儿子（son）= **堂叔**

### 为什么是堂叔？
- 爷爷的儿子们（包括我爸爸和叔公）是同辈
- 叔公的儿子和我爸爸是堂兄弟关系
- 叔公的儿子比我爸爸晚一辈，所以对我来说是"叔"辈
- 因为是父系堂亲，所以是"堂叔"

---

## 完整4层测试用例

### 父系-父系路径（father-father-X-Y）

| 编号 | 称呼 | 路径 | 预期结果 |
|------|------|------|----------|
| 1 | 爸爸的爸爸的哥哥的儿子 | ['father', 'father', 'olderBrother', 'son'] | 堂伯 |
| 2 | 爸爸的爸爸的弟弟的儿子 | ['father', 'father', 'youngerBrother', 'son'] | 堂叔 |
| 3 | 爸爸的爸爸的哥哥的女儿 | ['father', 'father', 'olderBrother', 'daughter'] | 堂姑 |
| 4 | 爸爸的爸爸的弟弟的女儿 | ['father', 'father', 'youngerBrother', 'daughter'] | 堂姑 |
| 5 | 爸爸的爸爸的姐姐的儿子 | ['father', 'father', 'olderSister', 'son'] | 表叔 |
| 6 | 爸爸的爸爸的妹妹的女儿 | ['father', 'father', 'youngerSister', 'daughter'] | 姑婆 |

### 父系-母系路径（father-mother-X-Y）

| 编号 | 称呼 | 路径 | 预期结果 |
|------|------|------|----------|
| 7 | 爸爸的妈妈的哥哥的儿子 | ['father', 'mother', 'olderBrother', 'son'] | 表叔 |
| 8 | 爸爸的妈妈的弟弟的女儿 | ['father', 'mother', 'youngerBrother', 'daughter'] | 表姨 |

### 母系-母系路径（mother-mother-X-Y）

| 编号 | 称呼 | 路径 | 预期结果 |
|------|------|------|----------|
| 9 | 妈妈的妈妈的哥哥的儿子 | ['mother', 'mother', 'olderBrother', 'son'] | 表舅 |
| 10 | 妈妈的妈妈的姐姐的女儿 | ['mother', 'mother', 'olderSister', 'daughter'] | 表姨 |

### 母系-父系路径（mother-father-X-Y）

| 编号 | 称呼 | 路径 | 预期结果 |
|------|------|------|----------|
| 11 | 妈妈的爸爸的弟弟的儿子 | ['mother', 'father', 'youngerBrother', 'son'] | 表舅 |
| 12 | 妈妈的爸爸的姐姐的女儿 | ['mother', 'father', 'olderSister', 'daughter'] | 姨婆 |

---

## 测试步骤

1. 在计算器页面依次选择：爸爸 → 爸爸 → 弟弟 → 儿子
2. 输入姓名：张三
3. 点击计算
4. 查看控制台日志输出
5. 验证显示的称呼是否为"堂叔"

---

## 调试信息

已在 `relationshipCalculator.uts` 的 `getFourLayerRelation` 函数中添加调试日志：
- 输出完整路径数组
- 输出每个路径元素
- 输出匹配到的条件分支
- 输出最终返回值

请运行测试并查看控制台输出。

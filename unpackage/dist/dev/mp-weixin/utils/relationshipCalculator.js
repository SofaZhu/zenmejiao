"use strict";
const common_vendor = require("../common/vendor.js");
const config_relationshipTitles = require("../config/relationshipTitles.js");
require("../types/family.js");
function calculateRelationshipTitle(relationPath, gender, isOlder = null) {
  const config = config_relationshipTitles.getRelationshipConfig();
  common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:14", "=== 开始计算关系 ===");
  common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:15", "路径长度:", relationPath.length);
  common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:16", "完整路径:", UTS.JSON.stringify(relationPath));
  common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:17", "性别:", gender);
  if (relationPath.length === 0) {
    return "未知";
  }
  if (relationPath.length === 1) {
    common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:25", "进入1层关系处理");
    return getOneLayerRelation(relationPath[0], config);
  }
  if (relationPath.length === 2) {
    common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:31", "进入2层关系处理");
    return getTwoLayerRelation(relationPath, gender, config);
  }
  if (relationPath.length === 3) {
    common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:37", "进入3层关系处理");
    return getThreeLayerRelation(relationPath, gender, config);
  }
  if (relationPath.length === 4) {
    common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:43", "进入4层关系处理");
    return getFourLayerRelation(relationPath, gender, config);
  }
  if (relationPath.length === 5) {
    return getFiveLayerRelation(relationPath, gender, config);
  }
  if (relationPath.length >= 6) {
    return getSixPlusLayerRelation(relationPath, gender, config);
  }
  return getGenericRelation(relationPath, gender);
}
function getOneLayerRelation(relation, config = null) {
  const map = {
    "father": config.father.title,
    "mother": config.mother.title,
    "son": config.son.title,
    "daughter": config.daughter.title,
    "olderBrother": config.olderBrother.title,
    "youngerBrother": config.youngerBrother.title,
    "olderSister": config.olderSister.title,
    "youngerSister": config.youngerSister.title,
    "grandfather": config.grandfather.title,
    "grandmother": config.grandmother.title,
    "maternalGrandfather": config.maternalGrandfather.title,
    "maternalGrandmother": config.maternalGrandmother.title
  };
  return map[relation] || "未知";
}
function getTwoLayerRelation(path, gender, config = null) {
  const _a = common_vendor.__read(path, 2), first = _a[0], second = _a[1];
  if (first === "father") {
    if (second === "olderBrother")
      return config.fatherOlderBrother.title;
    if (second === "youngerBrother")
      return config.fatherYoungerBrother.title;
    if (second === "olderSister" || second === "youngerSister")
      return config.fatherSister.title;
    if (second === "father")
      return config.grandfather.title;
    if (second === "mother")
      return config.grandmother.title;
  }
  if (first === "mother") {
    if (second === "olderBrother" || second === "youngerBrother")
      return config.motherBrother.title;
    if (second === "olderSister" || second === "youngerSister")
      return config.motherSister.title;
    if (second === "father")
      return config.maternalGrandfather.title;
    if (second === "mother")
      return config.maternalGrandmother.title;
  }
  if (first === "olderBrother" || first === "youngerBrother") {
    if (second === "son")
      return config.nephew.title;
    if (second === "daughter")
      return config.niece.title;
  }
  if (first === "olderSister" || first === "youngerSister") {
    if (second === "son")
      return config.nephewFromSister.title;
    if (second === "daughter")
      return config.nieceFromSister.title;
  }
  if (first === "son") {
    if (second === "son")
      return config.grandson.title;
    if (second === "daughter")
      return config.granddaughter.title;
  }
  if (first === "daughter") {
    if (second === "son")
      return config.maternalGrandson.title;
    if (second === "daughter")
      return config.maternalGranddaughter.title;
  }
  return "亲戚";
}
function getThreeLayerRelation(path, gender, config = null) {
  const _a = common_vendor.__read(path, 3), first = _a[0], second = _a[1], third = _a[2];
  if (first === "father" && (second === "olderBrother" || second === "youngerBrother")) {
    if (third === "son" && gender === "male") {
      return config.youngerCousinBrotherPaternal.title;
    }
    if (third === "daughter" && gender === "female") {
      return config.youngerCousinSisterPaternal.title;
    }
  }
  if (first === "mother" && (second === "olderBrother" || second === "youngerBrother" || second === "olderSister" || second === "youngerSister")) {
    if (third === "son" && gender === "male") {
      return config.youngerCousinBrotherMaternal.title;
    }
    if (third === "daughter" && gender === "female") {
      return config.youngerCousinSisterMaternal.title;
    }
  }
  if (first === "father" && (second === "olderSister" || second === "youngerSister")) {
    if (third === "son" && gender === "male") {
      return config.youngerCousinBrotherMaternal.title;
    }
    if (third === "daughter" && gender === "female") {
      return config.youngerCousinSisterMaternal.title;
    }
  }
  return "亲戚";
}
function getFourLayerRelation(path, gender, config = null) {
  const _a = common_vendor.__read(path, 4), first = _a[0], second = _a[1], third = _a[2], fourth = _a[3];
  common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:169", "=== 4层关系调试 ===");
  common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:170", "路径:", path);
  common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:171", "first:", first, "second:", second, "third:", third, "fourth:", fourth);
  if (first === "father" && second === "father") {
    common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:175", "匹配到: father-father 路径");
    if (third === "olderBrother" || third === "youngerBrother") {
      common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:178", "匹配到: 兄弟关系, third =", third);
      if (fourth === "son") {
        common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:180", "返回: 堂叔");
        return "堂叔";
      }
      if (fourth === "daughter") {
        common_vendor.index.__f__("log", "at utils/relationshipCalculator.uts:184", "返回: 堂姑");
        return "堂姑";
      }
    }
    if (third === "olderSister" || third === "youngerSister") {
      if (fourth === "son")
        return "表叔";
      if (fourth === "daughter")
        return "姑婆";
    }
  }
  if (first === "father" && second === "mother") {
    if (third === "olderBrother" || third === "youngerBrother") {
      if (fourth === "son")
        return "表叔";
      if (fourth === "daughter")
        return "表姨";
    }
    if (third === "olderSister" || third === "youngerSister") {
      if (fourth === "son")
        return "表舅";
      if (fourth === "daughter")
        return "表姨";
    }
  }
  if (first === "mother" && second === "mother") {
    if (third === "olderBrother" || third === "youngerBrother") {
      if (fourth === "son")
        return "表舅";
      if (fourth === "daughter")
        return "表姨";
    }
    if (third === "olderSister" || third === "youngerSister") {
      if (fourth === "son")
        return "表舅";
      if (fourth === "daughter")
        return "表姨";
    }
  }
  if (first === "mother" && second === "father") {
    if (third === "olderBrother" || third === "youngerBrother") {
      if (fourth === "son")
        return "表舅";
      if (fourth === "daughter")
        return "表姨";
    }
    if (third === "olderSister" || third === "youngerSister") {
      if (fourth === "son")
        return "表舅";
      if (fourth === "daughter")
        return "姨婆";
    }
  }
  return "亲戚";
}
function getFiveLayerRelation(path, gender, config = null) {
  const _a = common_vendor.__read(path, 5), first = _a[0], second = _a[1], third = _a[2], fourth = _a[3], fifth = _a[4];
  if (first === "father" && second === "father" && third === "father") {
    if (fourth === "olderBrother" || fourth === "youngerBrother") {
      if (fifth === "son")
        return "堂伯";
      if (fifth === "daughter")
        return "堂姑";
    }
  }
  if (first === "father" && second === "father") {
    if (third === "olderBrother" || third === "youngerBrother") {
      if (fourth === "son") {
        if (fifth === "son")
          return "堂侄";
        if (fifth === "daughter")
          return "堂侄女";
      }
    }
  }
  return "远房亲戚";
}
function getSixPlusLayerRelation(path, gender, config = null) {
  return "远房亲戚";
}
function getGenericRelation(path, gender) {
  const lastRelation = path[path.length - 1];
  if (lastRelation === "son")
    return "远房侄子";
  if (lastRelation === "daughter")
    return "远房侄女";
  if (lastRelation === "olderBrother" || lastRelation === "youngerBrother") {
    return gender === "male" ? "远房兄弟" : "远房兄弟";
  }
  if (lastRelation === "olderSister" || lastRelation === "youngerSister") {
    return gender === "female" ? "远房姐妹" : "远房姐妹";
  }
  return "远房亲戚";
}
function generateId() {
  return "member_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
}
exports.calculateRelationshipTitle = calculateRelationshipTitle;
exports.generateId = generateId;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/relationshipCalculator.js.map

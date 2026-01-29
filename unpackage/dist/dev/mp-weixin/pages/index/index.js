"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_relationshipCalculator = require("../../utils/relationshipCalculator.js");
const utils_storage = require("../../utils/storage.js");
const types_family = require("../../types/family.js");
const __default__ = new UTSJSONObject({
  onShareAppMessage() {
    return new UTSJSONObject({
      title: "过年怎么叫 - 亲戚称呼计算器",
      path: "/pages/index/index",
      imageUrl: "/static/fenxiang.png"
    });
  }
});
const _sfc_defineComponent = common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "index", setup(__props) {
  const targetName = common_vendor.ref("");
  const targetPhoto = common_vendor.ref("");
  const relationPath = common_vendor.ref([]);
  const calculatedTitle = common_vendor.ref("");
  function getGenderFromPath(path) {
    if (path.length === 0)
      return "male";
    const lastRelation = path[path.length - 1];
    if (["father", "olderBrother", "youngerBrother", "son", "grandfather"].includes(lastRelation)) {
      return "male";
    }
    if (["mother", "olderSister", "youngerSister", "daughter", "grandmother"].includes(lastRelation)) {
      return "female";
    }
    return "male";
  }
  function choosePhoto() {
    common_vendor.index.chooseImage(new UTSJSONObject({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        targetPhoto.value = res.tempFilePaths[0];
      }
    }));
  }
  const canAddParent = common_vendor.computed(() => {
    const len = relationPath.value.length;
    if (len === 0)
      return true;
    const lastRelation = relationPath.value[len - 1];
    return lastRelation === "father" || lastRelation === "mother" || lastRelation === "olderBrother" || lastRelation === "youngerBrother" || lastRelation === "olderSister" || lastRelation === "youngerSister" || lastRelation === "son" || lastRelation === "daughter";
  });
  const canAddSibling = common_vendor.computed(() => {
    const len = relationPath.value.length;
    if (len === 0)
      return true;
    const lastRelation = relationPath.value[len - 1];
    return lastRelation === "father" || lastRelation === "mother" || lastRelation === "olderBrother" || lastRelation === "youngerBrother" || lastRelation === "olderSister" || lastRelation === "youngerSister" || lastRelation === "son" || lastRelation === "daughter";
  });
  const canAddChild = common_vendor.computed(() => {
    const len = relationPath.value.length;
    if (len === 0)
      return true;
    const lastRelation = relationPath.value[len - 1];
    return lastRelation === "father" || lastRelation === "mother" || lastRelation === "olderBrother" || lastRelation === "youngerBrother" || lastRelation === "olderSister" || lastRelation === "youngerSister" || lastRelation === "son" || lastRelation === "daughter";
  });
  function getRelationLabel(relation) {
    const labels = {
      "father": "爸爸",
      "mother": "妈妈",
      "olderBrother": "哥哥",
      "youngerBrother": "弟弟",
      "olderSister": "姐姐",
      "youngerSister": "妹妹",
      "son": "儿子",
      "daughter": "女儿"
    };
    return labels[relation] || relation;
  }
  function addRelation(relation) {
    relationPath.value.push(relation);
  }
  function clearLastRelation() {
    if (relationPath.value.length > 0) {
      UTS.arrayPop(relationPath.value);
    }
  }
  function resetForm() {
    targetName.value = "";
    targetPhoto.value = "";
    relationPath.value = [];
    calculatedTitle.value = "";
  }
  function calculate() {
    if (!targetName.value) {
      common_vendor.index.showToast({ title: "请输入姓名", icon: "none" });
      return null;
    }
    if (relationPath.value.length === 0) {
      common_vendor.index.showToast({ title: "请选择关系", icon: "none" });
      return null;
    }
    const gender = getGenderFromPath(relationPath.value);
    const title = utils_relationshipCalculator.calculateRelationshipTitle(relationPath.value, gender, null);
    calculatedTitle.value = title;
    const member = new types_family.FamilyMember({
      id: utils_relationshipCalculator.generateId(),
      name: targetName.value,
      photo: targetPhoto.value,
      gender,
      relationType: "custom",
      relationTitle: title,
      relationPath: relationPath.value,
      isOlder: null,
      parentId: null,
      spouseId: null,
      children: [],
      isPlaceholder: false
    });
    utils_storage.addFamilyMember(member);
    common_vendor.index.showToast({
      title: "已添加到家庭网络",
      icon: "success",
      duration: 2e3
    });
    relationPath.value = [];
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: targetName.value,
      b: common_vendor.o(($event) => {
        return targetName.value = $event.detail.value;
      }),
      c: targetPhoto.value
    }, targetPhoto.value ? {
      d: targetPhoto.value
    } : {}, {
      e: common_vendor.o(choosePhoto),
      f: relationPath.value.length > 0
    }, relationPath.value.length > 0 ? {
      g: common_vendor.f(relationPath.value, (item, index, i0) => {
        return common_vendor.e({
          a: common_vendor.t(getRelationLabel(item)),
          b: index < relationPath.value.length - 1
        }, index < relationPath.value.length - 1 ? {} : {}, {
          c: index
        });
      }),
      h: common_vendor.o(clearLastRelation)
    } : {}, {
      i: canAddParent.value
    }, canAddParent.value ? {
      j: common_vendor.o(($event) => {
        return addRelation("father");
      }),
      k: common_vendor.o(($event) => {
        return addRelation("mother");
      })
    } : {}, {
      l: canAddSibling.value
    }, canAddSibling.value ? {
      m: common_vendor.o(($event) => {
        return addRelation("olderBrother");
      }),
      n: common_vendor.o(($event) => {
        return addRelation("youngerBrother");
      }),
      o: common_vendor.o(($event) => {
        return addRelation("olderSister");
      }),
      p: common_vendor.o(($event) => {
        return addRelation("youngerSister");
      })
    } : {}, {
      q: canAddChild.value
    }, canAddChild.value ? {
      r: common_vendor.o(($event) => {
        return addRelation("son");
      }),
      s: common_vendor.o(($event) => {
        return addRelation("daughter");
      })
    } : {}, {
      t: common_vendor.o(resetForm),
      v: common_vendor.o(calculate),
      w: calculatedTitle.value
    }, calculatedTitle.value ? {
      x: common_vendor.t(calculatedTitle.value)
    } : {}, {
      y: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
    });
    return __returned__;
  };
} }));
_sfc_defineComponent.__runtimeHooks = 2;
wx.createPage(_sfc_defineComponent);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map

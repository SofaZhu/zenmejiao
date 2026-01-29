"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_storage = require("../../utils/storage.js");
require("../../types/family.js");
const __default__ = new UTSJSONObject({
  onShareAppMessage() {
    return new UTSJSONObject({
      title: "过年怎么叫 - 我的亲戚关系网",
      path: "/pages/index/index",
      imageUrl: "/static/fenxiang.png"
    });
  }
});
const _sfc_defineComponent = common_vendor.defineComponent(Object.assign(Object.assign({}, __default__), { __name: "network", setup(__props) {
  const userProfile = common_vendor.ref(null);
  const familyMembers = common_vendor.ref([]);
  const searchKeyword = common_vendor.ref("");
  const filteredMembers = common_vendor.computed(() => {
    if (!searchKeyword.value) {
      return familyMembers.value;
    }
    const keyword = searchKeyword.value.toLowerCase();
    return familyMembers.value.filter((m) => {
      return m.name.toLowerCase().includes(keyword) || m.relationTitle.toLowerCase().includes(keyword);
    });
  });
  function getGeneration(member) {
    var e_1, _a;
    const path = member.relationPath;
    if (path.length === 0)
      return 0;
    let generation = 0;
    try {
      for (var path_1 = common_vendor.__values(path), path_1_1 = path_1.next(); !path_1_1.done; path_1_1 = path_1.next()) {
        var relation = path_1_1.value;
        if (relation === "father" || relation === "mother" || relation === "grandfather" || relation === "grandmother" || relation === "maternalGrandfather" || relation === "maternalGrandmother") {
          generation++;
        } else if (relation === "son" || relation === "daughter") {
          generation--;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (path_1_1 && !path_1_1.done && (_a = path_1.return))
          _a.call(path_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return generation;
  }
  const grandparentGeneration = common_vendor.computed(() => {
    return filteredMembers.value.filter((m) => {
      const gen = getGeneration(m);
      return gen === 2 && m.relationTitle !== "亲戚" && m.relationTitle !== "远房亲戚";
    });
  });
  const parentGeneration = common_vendor.computed(() => {
    return filteredMembers.value.filter((m) => {
      const gen = getGeneration(m);
      return gen === 1 && m.relationTitle !== "亲戚" && m.relationTitle !== "远房亲戚";
    });
  });
  const sameGeneration = common_vendor.computed(() => {
    return filteredMembers.value.filter((m) => {
      const gen = getGeneration(m);
      return gen === 0 && m.relationTitle !== "亲戚" && m.relationTitle !== "远房亲戚";
    });
  });
  const childGeneration = common_vendor.computed(() => {
    return filteredMembers.value.filter((m) => {
      const gen = getGeneration(m);
      return gen === -1 && m.relationTitle !== "亲戚" && m.relationTitle !== "远房亲戚";
    });
  });
  const otherRelatives = common_vendor.computed(() => {
    return filteredMembers.value.filter((m) => {
      const gen = getGeneration(m);
      return gen >= 3 || gen <= -2 || m.relationTitle === "亲戚" || m.relationTitle === "远房亲戚";
    });
  });
  common_vendor.onMounted(() => {
    loadData();
  });
  function loadData() {
    userProfile.value = utils_storage.getUserProfile();
    familyMembers.value = utils_storage.getFamilyMembers();
  }
  function handleMemberClick(member) {
    common_vendor.index.showToast({
      title: member.name + " - " + member.relationTitle,
      icon: "none"
    });
  }
  function showMemberActions(member) {
    common_vendor.index.showActionSheet({
      itemList: ["编辑", "删除"],
      success: (res) => {
        if (res.tapIndex === 0) {
          editMember(member);
        } else if (res.tapIndex === 1) {
          confirmDelete(member);
        }
      }
    });
  }
  function editMember(member) {
    common_vendor.index.showModal(new UTSJSONObject({
      title: "编辑姓名",
      editable: true,
      placeholderText: member.name,
      success: (res) => {
        if (res.confirm && res.content) {
          utils_storage.updateFamilyMember(member.id, new UTSJSONObject({ name: res.content }));
          loadData();
          common_vendor.index.showModal(new UTSJSONObject({
            title: "更新照片",
            content: "是否要更新照片？",
            success: (photoRes) => {
              if (photoRes.confirm) {
                choosePhotoForMember(member);
              }
            }
          }));
        }
      }
    }));
  }
  function choosePhotoForMember(member) {
    common_vendor.index.chooseImage(new UTSJSONObject({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        utils_storage.updateFamilyMember(member.id, new UTSJSONObject({ photo: tempFilePath }));
        loadData();
        common_vendor.index.showToast({
          title: "照片已更新",
          icon: "success"
        });
      }
    }));
  }
  function confirmDelete(member) {
    common_vendor.index.showModal(new UTSJSONObject({
      title: "确认删除",
      content: "确定要删除 " + member.name + " 吗？",
      success: (res) => {
        if (res.confirm) {
          utils_storage.deleteFamilyMember(member.id);
          loadData();
          common_vendor.index.showToast({
            title: "已删除",
            icon: "success"
          });
        }
      }
    }));
  }
  return (_ctx, _cache) => {
    "raw js";
    var _a, _b, _c;
    const __returned__ = common_vendor.e({
      a: searchKeyword.value,
      b: common_vendor.o(($event) => {
        return searchKeyword.value = $event.detail.value;
      }),
      c: (_a = userProfile.value) == null ? void 0 : _a.photo
    }, ((_b = userProfile.value) == null ? void 0 : _b.photo) ? {
      d: userProfile.value.photo
    } : {}, {
      e: common_vendor.t(((_c = userProfile.value) == null ? void 0 : _c.name) || "我"),
      f: filteredMembers.value.length > 0
    }, filteredMembers.value.length > 0 ? common_vendor.e({
      g: grandparentGeneration.value.length > 0
    }, grandparentGeneration.value.length > 0 ? {
      h: common_vendor.f(grandparentGeneration.value, (member, k0, i0) => {
        return common_vendor.e({
          a: member.photo
        }, member.photo ? {
          b: member.photo
        } : {
          c: common_vendor.t(member.name.substring(0, 1))
        }, {
          d: common_vendor.t(member.name),
          e: common_vendor.t(member.relationTitle),
          f: member.id,
          g: common_vendor.o(($event) => {
            return handleMemberClick(member);
          }, member.id),
          h: common_vendor.o(($event) => {
            return showMemberActions(member);
          }, member.id)
        });
      })
    } : {}, {
      i: parentGeneration.value.length > 0
    }, parentGeneration.value.length > 0 ? {
      j: common_vendor.f(parentGeneration.value, (member, k0, i0) => {
        return common_vendor.e({
          a: member.photo
        }, member.photo ? {
          b: member.photo
        } : {
          c: common_vendor.t(member.name.substring(0, 1))
        }, {
          d: common_vendor.t(member.name),
          e: common_vendor.t(member.relationTitle),
          f: member.id,
          g: common_vendor.o(($event) => {
            return handleMemberClick(member);
          }, member.id),
          h: common_vendor.o(($event) => {
            return showMemberActions(member);
          }, member.id)
        });
      })
    } : {}, {
      k: sameGeneration.value.length > 0
    }, sameGeneration.value.length > 0 ? {
      l: common_vendor.f(sameGeneration.value, (member, k0, i0) => {
        return common_vendor.e({
          a: member.photo
        }, member.photo ? {
          b: member.photo
        } : {
          c: common_vendor.t(member.name.substring(0, 1))
        }, {
          d: common_vendor.t(member.name),
          e: common_vendor.t(member.relationTitle),
          f: member.id,
          g: common_vendor.o(($event) => {
            return handleMemberClick(member);
          }, member.id),
          h: common_vendor.o(($event) => {
            return showMemberActions(member);
          }, member.id)
        });
      })
    } : {}, {
      m: childGeneration.value.length > 0
    }, childGeneration.value.length > 0 ? {
      n: common_vendor.f(childGeneration.value, (member, k0, i0) => {
        return common_vendor.e({
          a: member.photo
        }, member.photo ? {
          b: member.photo
        } : {
          c: common_vendor.t(member.name.substring(0, 1))
        }, {
          d: common_vendor.t(member.name),
          e: common_vendor.t(member.relationTitle),
          f: member.id,
          g: common_vendor.o(($event) => {
            return handleMemberClick(member);
          }, member.id),
          h: common_vendor.o(($event) => {
            return showMemberActions(member);
          }, member.id)
        });
      })
    } : {}, {
      o: otherRelatives.value.length > 0
    }, otherRelatives.value.length > 0 ? {
      p: common_vendor.f(otherRelatives.value, (member, k0, i0) => {
        return common_vendor.e({
          a: member.photo
        }, member.photo ? {
          b: member.photo
        } : {
          c: common_vendor.t(member.name.substring(0, 1))
        }, {
          d: common_vendor.t(member.name),
          e: common_vendor.t(member.relationTitle),
          f: member.id,
          g: common_vendor.o(($event) => {
            return handleMemberClick(member);
          }, member.id),
          h: common_vendor.o(($event) => {
            return showMemberActions(member);
          }, member.id)
        });
      })
    } : {}) : {}, {
      q: filteredMembers.value.length === 0
    }, filteredMembers.value.length === 0 ? {} : {}, {
      r: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
    });
    return __returned__;
  };
} }));
_sfc_defineComponent.__runtimeHooks = 2;
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_defineComponent, [["__scopeId", "data-v-f7aabc74"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/network/network.js.map

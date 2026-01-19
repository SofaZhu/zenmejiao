"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_storage = require("../../utils/storage.js");
const utils_relationshipCalculator = require("../../utils/relationshipCalculator.js");
const types_family = require("../../types/family.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "profile",
  setup(__props) {
    const userName = common_vendor.ref("");
    const userPhoto = common_vendor.ref("");
    const userGender = common_vendor.ref("male");
    common_vendor.onMounted(() => {
      loadProfile();
    });
    function loadProfile() {
      const profile = utils_storage.getUserProfile();
      if (profile) {
        userName.value = profile.name;
        userPhoto.value = profile.photo;
        userGender.value = profile.gender;
      }
    }
    function choosePhoto() {
      common_vendor.index.chooseImage(new UTSJSONObject({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          userPhoto.value = res.tempFilePaths[0];
        }
      }));
    }
    function saveProfile() {
      if (!userName.value) {
        common_vendor.index.showToast({
          title: "请输入姓名",
          icon: "none"
        });
        return null;
      }
      const profile = new types_family.UserProfile({
        id: utils_relationshipCalculator.generateId(),
        name: userName.value,
        photo: userPhoto.value,
        gender: userGender.value
      });
      utils_storage.saveUserProfile(profile);
      common_vendor.index.showToast({
        title: "保存成功",
        icon: "success"
      });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 1500);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: userPhoto.value
      }, userPhoto.value ? {
        b: userPhoto.value
      } : {
        c: common_vendor.t(userName.value ? userName.value.substring(0, 1) : "我")
      }, {
        d: common_vendor.t(userPhoto.value ? "更换照片" : "上传照片"),
        e: common_vendor.o(choosePhoto),
        f: userName.value,
        g: common_vendor.o(($event) => {
          return userName.value = $event.detail.value;
        }),
        h: common_vendor.n(userGender.value === "male" ? "active" : ""),
        i: common_vendor.o(($event) => {
          return userGender.value = "male";
        }),
        j: common_vendor.n(userGender.value === "female" ? "active" : ""),
        k: common_vendor.o(($event) => {
          return userGender.value = "female";
        }),
        l: common_vendor.o(saveProfile),
        m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      });
      return __returned__;
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/profile/profile.js.map

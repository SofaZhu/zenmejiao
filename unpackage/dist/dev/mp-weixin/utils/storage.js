"use strict";
const common_vendor = require("../common/vendor.js");
const types_family = require("../types/family.js");
const USER_PROFILE_KEY = "user_profile";
const FAMILY_MEMBERS_KEY = "family_members";
function saveUserProfile(profile) {
  common_vendor.index.setStorageSync(USER_PROFILE_KEY, UTS.JSON.stringify(profile));
}
function getUserProfile() {
  try {
    const data = common_vendor.index.getStorageSync(USER_PROFILE_KEY);
    if (data) {
      return UTS.JSON.parse(data);
    }
  } catch (e) {
    common_vendor.index.__f__("error", "at utils/storage.uts:21", "获取用户信息失败", e);
  }
  return null;
}
function saveFamilyMembers(members) {
  common_vendor.index.setStorageSync(FAMILY_MEMBERS_KEY, UTS.JSON.stringify(members));
}
function getFamilyMembers() {
  try {
    const data = common_vendor.index.getStorageSync(FAMILY_MEMBERS_KEY);
    if (data) {
      return UTS.JSON.parse(data);
    }
  } catch (e) {
    common_vendor.index.__f__("error", "at utils/storage.uts:39", "获取家庭成员失败", e);
  }
  return [];
}
function addFamilyMember(member) {
  const members = getFamilyMembers();
  members.push(member);
  saveFamilyMembers(members);
}
function updateFamilyMember(memberId, updates) {
  const members = getFamilyMembers();
  const index = members.findIndex((m) => {
    return m.id === memberId;
  });
  if (index !== -1) {
    members[index] = new types_family.FamilyMember(Object.assign(Object.assign({}, members[index]), updates));
    saveFamilyMembers(members);
  }
}
function deleteFamilyMember(memberId) {
  const members = getFamilyMembers();
  const filtered = members.filter((m) => {
    return m.id !== memberId;
  });
  saveFamilyMembers(filtered);
}
exports.addFamilyMember = addFamilyMember;
exports.deleteFamilyMember = deleteFamilyMember;
exports.getFamilyMembers = getFamilyMembers;
exports.getUserProfile = getUserProfile;
exports.saveUserProfile = saveUserProfile;
exports.updateFamilyMember = updateFamilyMember;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/storage.js.map

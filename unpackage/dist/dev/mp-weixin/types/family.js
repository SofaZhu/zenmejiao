"use strict";
class FamilyMember extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: String, optional: false },
          name: { type: String, optional: false },
          photo: { type: String, optional: false },
          gender: { type: "Unknown", optional: false },
          relationType: { type: "Unknown", optional: false },
          relationTitle: { type: String, optional: false },
          relationPath: { type: UTS.UTSType.withGenerics(Array, [String]), optional: false },
          isOlder: { type: Boolean, optional: true },
          parentId: { type: String, optional: true },
          spouseId: { type: String, optional: true },
          children: { type: UTS.UTSType.withGenerics(Array, [String]), optional: false },
          isPlaceholder: { type: Boolean, optional: false }
        };
      },
      name: "FamilyMember"
    };
  }
  constructor(options, metadata = FamilyMember.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.name = this.__props__.name;
    this.photo = this.__props__.photo;
    this.gender = this.__props__.gender;
    this.relationType = this.__props__.relationType;
    this.relationTitle = this.__props__.relationTitle;
    this.relationPath = this.__props__.relationPath;
    this.isOlder = this.__props__.isOlder;
    this.parentId = this.__props__.parentId;
    this.spouseId = this.__props__.spouseId;
    this.children = this.__props__.children;
    this.isPlaceholder = this.__props__.isPlaceholder;
    delete this.__props__;
  }
}
class UserProfile extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: String, optional: false },
          name: { type: String, optional: false },
          photo: { type: String, optional: false },
          gender: { type: "Unknown", optional: false }
        };
      },
      name: "UserProfile"
    };
  }
  constructor(options, metadata = UserProfile.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.name = this.__props__.name;
    this.photo = this.__props__.photo;
    this.gender = this.__props__.gender;
    delete this.__props__;
  }
}
class RelationshipInput extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          targetName: { type: String, optional: false },
          targetPhoto: { type: String, optional: false },
          targetGender: { type: "Unknown", optional: false },
          relationPath: { type: UTS.UTSType.withGenerics(Array, [String]), optional: false },
          isOlder: { type: Boolean, optional: true }
        };
      },
      name: "RelationshipInput"
    };
  }
  constructor(options, metadata = RelationshipInput.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.targetName = this.__props__.targetName;
    this.targetPhoto = this.__props__.targetPhoto;
    this.targetGender = this.__props__.targetGender;
    this.relationPath = this.__props__.relationPath;
    this.isOlder = this.__props__.isOlder;
    delete this.__props__;
  }
}
class FamilyNetwork extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          user: { type: UserProfile, optional: false },
          members: { type: "Unknown", optional: false }
        };
      },
      name: "FamilyNetwork"
    };
  }
  constructor(options, metadata = FamilyNetwork.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.user = this.__props__.user;
    this.members = this.__props__.members;
    delete this.__props__;
  }
}
exports.FamilyMember = FamilyMember;
exports.UserProfile = UserProfile;
//# sourceMappingURL=../../.sourcemap/mp-weixin/types/family.js.map

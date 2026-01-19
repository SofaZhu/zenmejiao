"use strict";
class RelationshipTitle extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: String, optional: false },
          description: { type: String, optional: false }
        };
      },
      name: "RelationshipTitle"
    };
  }
  constructor(options, metadata = RelationshipTitle.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    this.description = this.__props__.description;
    delete this.__props__;
  }
}
class RelationshipConfig extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          grandfather: { type: RelationshipTitle, optional: false },
          grandmother: { type: RelationshipTitle, optional: false },
          grandfatherOlderBrother: { type: RelationshipTitle, optional: false },
          grandfatherYoungerBrother: { type: RelationshipTitle, optional: false },
          grandfatherSister: { type: RelationshipTitle, optional: false },
          grandmotherBrother: { type: RelationshipTitle, optional: false },
          grandmotherSister: { type: RelationshipTitle, optional: false },
          maternalGrandfather: { type: RelationshipTitle, optional: false },
          maternalGrandmother: { type: RelationshipTitle, optional: false },
          maternalGrandfatherBrother: { type: RelationshipTitle, optional: false },
          maternalGrandfatherSister: { type: RelationshipTitle, optional: false },
          maternalGrandmotherBrother: { type: RelationshipTitle, optional: false },
          maternalGrandmotherSister: { type: RelationshipTitle, optional: false },
          father: { type: RelationshipTitle, optional: false },
          fatherOlderBrother: { type: RelationshipTitle, optional: false },
          fatherYoungerBrother: { type: RelationshipTitle, optional: false },
          fatherSister: { type: RelationshipTitle, optional: false },
          mother: { type: RelationshipTitle, optional: false },
          motherBrother: { type: RelationshipTitle, optional: false },
          motherSister: { type: RelationshipTitle, optional: false },
          olderBrother: { type: RelationshipTitle, optional: false },
          youngerBrother: { type: RelationshipTitle, optional: false },
          olderSister: { type: RelationshipTitle, optional: false },
          youngerSister: { type: RelationshipTitle, optional: false },
          olderCousinBrotherPaternal: { type: RelationshipTitle, optional: false },
          youngerCousinBrotherPaternal: { type: RelationshipTitle, optional: false },
          olderCousinSisterPaternal: { type: RelationshipTitle, optional: false },
          youngerCousinSisterPaternal: { type: RelationshipTitle, optional: false },
          olderCousinBrotherMaternal: { type: RelationshipTitle, optional: false },
          youngerCousinBrotherMaternal: { type: RelationshipTitle, optional: false },
          olderCousinSisterMaternal: { type: RelationshipTitle, optional: false },
          youngerCousinSisterMaternal: { type: RelationshipTitle, optional: false },
          son: { type: RelationshipTitle, optional: false },
          daughter: { type: RelationshipTitle, optional: false },
          nephew: { type: RelationshipTitle, optional: false },
          niece: { type: RelationshipTitle, optional: false },
          nephewFromSister: { type: RelationshipTitle, optional: false },
          nieceFromSister: { type: RelationshipTitle, optional: false },
          grandson: { type: RelationshipTitle, optional: false },
          granddaughter: { type: RelationshipTitle, optional: false },
          maternalGrandson: { type: RelationshipTitle, optional: false },
          maternalGranddaughter: { type: RelationshipTitle, optional: false }
        };
      },
      name: "RelationshipConfig"
    };
  }
  constructor(options, metadata = RelationshipConfig.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.grandfather = this.__props__.grandfather;
    this.grandmother = this.__props__.grandmother;
    this.grandfatherOlderBrother = this.__props__.grandfatherOlderBrother;
    this.grandfatherYoungerBrother = this.__props__.grandfatherYoungerBrother;
    this.grandfatherSister = this.__props__.grandfatherSister;
    this.grandmotherBrother = this.__props__.grandmotherBrother;
    this.grandmotherSister = this.__props__.grandmotherSister;
    this.maternalGrandfather = this.__props__.maternalGrandfather;
    this.maternalGrandmother = this.__props__.maternalGrandmother;
    this.maternalGrandfatherBrother = this.__props__.maternalGrandfatherBrother;
    this.maternalGrandfatherSister = this.__props__.maternalGrandfatherSister;
    this.maternalGrandmotherBrother = this.__props__.maternalGrandmotherBrother;
    this.maternalGrandmotherSister = this.__props__.maternalGrandmotherSister;
    this.father = this.__props__.father;
    this.fatherOlderBrother = this.__props__.fatherOlderBrother;
    this.fatherYoungerBrother = this.__props__.fatherYoungerBrother;
    this.fatherSister = this.__props__.fatherSister;
    this.mother = this.__props__.mother;
    this.motherBrother = this.__props__.motherBrother;
    this.motherSister = this.__props__.motherSister;
    this.olderBrother = this.__props__.olderBrother;
    this.youngerBrother = this.__props__.youngerBrother;
    this.olderSister = this.__props__.olderSister;
    this.youngerSister = this.__props__.youngerSister;
    this.olderCousinBrotherPaternal = this.__props__.olderCousinBrotherPaternal;
    this.youngerCousinBrotherPaternal = this.__props__.youngerCousinBrotherPaternal;
    this.olderCousinSisterPaternal = this.__props__.olderCousinSisterPaternal;
    this.youngerCousinSisterPaternal = this.__props__.youngerCousinSisterPaternal;
    this.olderCousinBrotherMaternal = this.__props__.olderCousinBrotherMaternal;
    this.youngerCousinBrotherMaternal = this.__props__.youngerCousinBrotherMaternal;
    this.olderCousinSisterMaternal = this.__props__.olderCousinSisterMaternal;
    this.youngerCousinSisterMaternal = this.__props__.youngerCousinSisterMaternal;
    this.son = this.__props__.son;
    this.daughter = this.__props__.daughter;
    this.nephew = this.__props__.nephew;
    this.niece = this.__props__.niece;
    this.nephewFromSister = this.__props__.nephewFromSister;
    this.nieceFromSister = this.__props__.nieceFromSister;
    this.grandson = this.__props__.grandson;
    this.granddaughter = this.__props__.granddaughter;
    this.maternalGrandson = this.__props__.maternalGrandson;
    this.maternalGranddaughter = this.__props__.maternalGranddaughter;
    delete this.__props__;
  }
}
const standardChinese = new RelationshipConfig(
  {
    // 祖辈 - 父系
    grandfather: new RelationshipTitle({ title: "爷爷", description: "祖父" }),
    grandmother: new RelationshipTitle({ title: "奶奶", description: "祖母" }),
    grandfatherOlderBrother: new RelationshipTitle({ title: "伯祖父", description: "爷爷的哥哥" }),
    grandfatherYoungerBrother: new RelationshipTitle({ title: "叔祖父", description: "爷爷的弟弟" }),
    grandfatherSister: new RelationshipTitle({ title: "姑婆", description: "爷爷的姐妹" }),
    grandmotherBrother: new RelationshipTitle({ title: "舅公", description: "奶奶的兄弟" }),
    grandmotherSister: new RelationshipTitle({ title: "姨婆", description: "奶奶的姐妹" }),
    // 祖辈 - 母系
    maternalGrandfather: new RelationshipTitle({ title: "外公", description: "外祖父" }),
    maternalGrandmother: new RelationshipTitle({ title: "外婆", description: "外祖母" }),
    maternalGrandfatherBrother: new RelationshipTitle({ title: "舅公", description: "外公的兄弟" }),
    maternalGrandfatherSister: new RelationshipTitle({ title: "姑婆", description: "外公的姐妹" }),
    maternalGrandmotherBrother: new RelationshipTitle({ title: "舅公", description: "外婆的兄弟" }),
    maternalGrandmotherSister: new RelationshipTitle({ title: "姨婆", description: "外婆的姐妹" }),
    // 父辈 - 父系
    father: new RelationshipTitle({ title: "爸爸", description: "父亲" }),
    fatherOlderBrother: new RelationshipTitle({ title: "伯父", description: "爸爸的哥哥" }),
    fatherYoungerBrother: new RelationshipTitle({ title: "叔父", description: "爸爸的弟弟" }),
    fatherSister: new RelationshipTitle({ title: "姑妈", description: "爸爸的姐妹" }),
    // 父辈 - 母系
    mother: new RelationshipTitle({ title: "妈妈", description: "母亲" }),
    motherBrother: new RelationshipTitle({ title: "舅舅", description: "妈妈的兄弟" }),
    motherSister: new RelationshipTitle({ title: "姨妈", description: "妈妈的姐妹" }),
    // 同辈
    olderBrother: new RelationshipTitle({ title: "哥哥", description: "兄" }),
    youngerBrother: new RelationshipTitle({ title: "弟弟", description: "弟" }),
    olderSister: new RelationshipTitle({ title: "姐姐", description: "姐" }),
    youngerSister: new RelationshipTitle({ title: "妹妹", description: "妹" }),
    // 堂表兄弟姐妹
    olderCousinBrotherPaternal: new RelationshipTitle({ title: "堂哥", description: "伯父/叔父的儿子(比我大)" }),
    youngerCousinBrotherPaternal: new RelationshipTitle({ title: "堂弟", description: "伯父/叔父的儿子(比我小)" }),
    olderCousinSisterPaternal: new RelationshipTitle({ title: "堂姐", description: "伯父/叔父的女儿(比我大)" }),
    youngerCousinSisterPaternal: new RelationshipTitle({ title: "堂妹", description: "伯父/叔父的女儿(比我小)" }),
    olderCousinBrotherMaternal: new RelationshipTitle({ title: "表哥", description: "舅舅/姨妈/姑妈的儿子(比我大)" }),
    youngerCousinBrotherMaternal: new RelationshipTitle({ title: "表弟", description: "舅舅/姨妈/姑妈的儿子(比我小)" }),
    olderCousinSisterMaternal: new RelationshipTitle({ title: "表姐", description: "舅舅/姨妈/姑妈的女儿(比我大)" }),
    youngerCousinSisterMaternal: new RelationshipTitle({ title: "表妹", description: "舅舅/姨妈/姑妈的女儿(比我小)" }),
    // 子辈
    son: new RelationshipTitle({ title: "儿子", description: "子" }),
    daughter: new RelationshipTitle({ title: "女儿", description: "女" }),
    nephew: new RelationshipTitle({ title: "侄子", description: "兄弟的儿子" }),
    niece: new RelationshipTitle({ title: "侄女", description: "兄弟的女儿" }),
    nephewFromSister: new RelationshipTitle({ title: "外甥", description: "姐妹的儿子" }),
    nieceFromSister: new RelationshipTitle({ title: "外甥女", description: "姐妹的女儿" }),
    // 孙辈
    grandson: new RelationshipTitle({ title: "孙子", description: "儿子的儿子" }),
    granddaughter: new RelationshipTitle({ title: "孙女", description: "儿子的女儿" }),
    maternalGrandson: new RelationshipTitle({ title: "外孙", description: "女儿的儿子" }),
    maternalGranddaughter: new RelationshipTitle({ title: "外孙女", description: "女儿的女儿" })
  }
  // 北方方言（姥姥、姥爷）
);
new RelationshipConfig(Object.assign(Object.assign({}, standardChinese), { maternalGrandfather: new RelationshipTitle({ title: "姥爷", description: "外祖父" }), maternalGrandmother: new RelationshipTitle({ title: "姥姥", description: "外祖母" }) }));
let currentConfig = standardChinese;
function getRelationshipConfig() {
  return currentConfig;
}
exports.getRelationshipConfig = getRelationshipConfig;
//# sourceMappingURL=../../.sourcemap/mp-weixin/config/relationshipTitles.js.map

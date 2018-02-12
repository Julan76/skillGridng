export class Skill {
  text: string;
  grade:number;
  _tabs: Tab[]=[];
  suggested:number;

  set tabs(theTab) {
    this._tabs=theTab;
  }
}
export class Tab {
  key: number;
  val: boolean;
  _skill: String;

  constructor({key,val,skill}) {
    this.key=key;
    this.val=val;
    this.skill=skill;
  }

  set skill(theSkill) {
    this._skill=theSkill;
  }
}

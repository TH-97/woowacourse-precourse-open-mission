export const outputView = {
  fristGuideMessege(classNameToIdMap) {
    const classNames = [...classNameToIdMap.keys()];

    console.log(`${classNames} 표시된 직업중 하나를 입력하여 주십시오`);
  },

  secondGuideMessege(spec) {
    const specNames = [...spec.keys()];

    console.log(`${specNames} 표시된 영웅특성중 하나를 입력하여 주십시오`);
  },
};

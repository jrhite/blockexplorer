export default class BidirectionalMap {
  fwdMap = {};
  revMap = {};

  constructor(map) {
    this.fwdMap = { ...map };
    this.revMap = Object.keys(map).reduce(
      (acc, cur) => ({
        ...acc,
        [map[cur]]: cur,
      }),
      {}
    );
  }

  get(key) {
    return this.fwdMap[key] || this.revMap[key];
  }

  entries() {
    const entries = Object.entries(this.fwdMap);

    return Object.entries(this.fwdMap);
  }
}

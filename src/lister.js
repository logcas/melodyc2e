export const LIST_TYPE = {
  ALL: 'all',
  LIKE: 'like'
}

export class SongLister {
  
  constructor(types = []) {
    this.currentType = LIST_TYPE.ALL;
    this.listTypes = [LIST_TYPE.ALL, LIST_TYPE.LIKE, ...types];
    this.lists = new Map();
    this.currentIndex = 0;
  }

  _getOrDefault(key, defaultValue) {
    if (this.lists.has(key)) {
      return this.lists.get(key);
    }
    this.lists.set(key, defaultValue);
    return this.lists.get(key);
  }

  _getCurrentList() {
    return this.lists.get(this.currentType);
  }

  addList(key, values) {
    this.lists.set(key, values);
  }

  getList(type) {
    return this._getOrDefault(type, []);
  }

  setCurrentSong(index, type) {
    type = type || this.currentType;
    this.currentIndex = index;
    this.setType(type, index);
    return this.getCurrentSong();
  }

  getCurrentSong() {
    const list = this._getCurrentList();
    return list[this.currentIndex];
  }

  setType(type) {
    if (!this.listTypes.includes(type)) {
      throw new Error('Invalid List Type');
    }
    this.currentType = type;
  }

  nextSong() {
    const list = this._getCurrentList();
    const len = list.length;
    let nextIndex = this.currentIndex + 1;
    nextIndex = nextIndex < len ? nextIndex : 0;
    this.currentIndex = nextIndex;
    return list[nextIndex];
  }

  lastSong() {
    const list = this._getCurrentList();
    const len = list.length;
    let nextIndex = this.currentIndex - 1;
    nextIndex = nextIndex >= 0 ? nextIndex : len - 1;
    this.currentIndex = nextIndex;
    return list[nextIndex];
  }

  getIndex() {
    return this.currentIndex;
  }

  storeInLocal(listType) {
    const list = this._getOrDefault(listType, []);
    localStorage.setItem(listType, JSON.stringify(list));
  }

  getFromLocal(listType) {
    try {
      const list = JSON.parse(localStorage.getItem(listType));
      return list || [];
    } catch(err) {
      console.error(err);
      return [];
    }
  }

}
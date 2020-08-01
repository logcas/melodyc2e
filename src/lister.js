import { Toast } from 'vant';

export const LIST_TYPE = {
  ALL: 'all',
  LIKE: 'like'
}

export const PLAY_MODE = {
  SEQ: 'seq',
  RANDOM: 'random'
}

export const getNextIndexStragy = {
  [PLAY_MODE.SEQ]: (len, currentIndex) => {
    let nextIndex = currentIndex + 1;
    nextIndex = nextIndex < len ? nextIndex : 0;
    return nextIndex;
  },
  [PLAY_MODE.RANDOM]: (len, currentIndex) => {
    function getIndex(max) {
      return Math.floor(Math.random() * max);
    }
    let nextIndex;
    while((nextIndex = getIndex(len)) === currentIndex);
    return nextIndex;
  }
}

export const getLastIndexStragy = {
  [PLAY_MODE.SEQ]: (len, currentIndex) => {
    let nextIndex = currentIndex - 1;
    nextIndex = nextIndex >= 0 ? nextIndex : len - 1;
    return nextIndex;
  },
  [PLAY_MODE.RANDOM]: (len, currentIndex) => {
    function getIndex(max) {
      return Math.floor(Math.random() * max);
    }
    let nextIndex;
    while((nextIndex = getIndex(len)) === currentIndex);
    return nextIndex;
  }
}

export class SongLister {
  
  constructor(types = []) {
    this.currentType = LIST_TYPE.ALL;
    this.listTypes = [LIST_TYPE.ALL, LIST_TYPE.LIKE, ...types];
    this.lists = new Map();
    this.currentIndex = 0;
    let defaultMode = localStorage.getItem('playMode');
    if (!defaultMode) {
      defaultMode = PLAY_MODE.RANDOM;
    }
    this.playMode = defaultMode;
    Toast(`当前模式：${ this.playMode === PLAY_MODE.RANDOM ? '随机播放' : '顺序播放' }`);
  }

  get mode() {
    return this.playMode;
  }

  setMode(mode) {
    if (![PLAY_MODE.RANDOM, PLAY_MODE.SEQ].includes(mode)) {
      return;
    }
    localStorage.setItem('playMode', mode);
    this.playMode = mode;
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
    const nextIndex = getNextIndexStragy[this.playMode](len, this.currentIndex);
    this.currentIndex = nextIndex;
    return list[nextIndex];
  }

  lastSong() {
    const list = this._getCurrentList();
    const len = list.length;
    const nextIndex = getLastIndexStragy[this.playMode](len, this.currentIndex);
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
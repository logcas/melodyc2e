<template>
  <div id="app">
    <van-tabs v-model="active" type="card" swipeable animated>
      <van-tab title="全部">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell
            v-for="(item, index) in list"
            :key="item._id"
            is-link
            @click="onChangeSong(item, index, 'all')"
          >
            <div class="like" @click="onLike(item, $event)">
              <van-icon v-show="isMyLike(item)" name="star" />
              <van-icon v-show="!isMyLike(item)" name="star-o" />
            </div>
            <div
              class="cell-content"
              :class="{
              playing: index === currentIndex && currentType === 'all'
            }"
            >
              <span class="seq" v-show="index !== currentIndex">{{ index + 1 }}</span>
              <van-icon
                v-show="index === currentIndex"
                name="play-circle-o"
                style="margin-right: 5px"
              />
              {{ item.name }}
            </div>
          </van-cell>
        </van-list>
      </van-tab>
      <van-tab title="我喜欢">
          <van-cell
            v-for="(item, index) in likeList"
            :key="item._id"
            is-link
            @click="onChangeSong(item, index, 'like')"
          >
            <div class="like" @click="onLike(item, $event)">
              <van-icon v-show="isMyLike(item)" name="star" />
              <van-icon v-show="!isMyLike(item)" name="star-o" />
            </div>
            <div
              class="cell-content"
              :class="{
              playing: index === currentIndex && currentType === 'like'
            }"
            >
              <span class="seq" v-show="index !== currentIndex">{{ index + 1 }}</span>
              <van-icon
                v-show="index === currentIndex"
                name="play-circle-o"
                style="margin-right: 5px"
              />
              {{ item.name }}
            </div>
          </van-cell>
      </van-tab>
    </van-tabs>
    <div class="player">
      <audio ref="player" style="display: none;" type="audio/mpeg"></audio>
      <div class="player-current">
        {{ loadingSource ? 'Loading...' : currentSongName }}
      </div>
      <div class="player-feat">
        <div class="button second-button" @click="lastSong">
          <van-icon name="arrow-left" />
        </div>
        <div class="button main-button">
          <van-icon v-show="!playing" name="play-circle-o" @click="onPlay"/>
          <van-icon v-show="playing" name="pause-circle-o" @click="onPause"/>
        </div>
        <div class="button second-button" @click="nextSong">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="player-progress" :style="{
        width: progress + '%'
      }"></div>
    </div>
  </div>
</template>

<script>
import { SongLister, LIST_TYPE } from './lister';
const songLister = new SongLister();

export default {
  name: "App",
  data() {
    return {
      active: "2",
      list: [],
      loading: false,
      finished: false,
      page: 0,
      q: "",
      currentIndex: -1,
      playing: false,
      currentSongName: '选一首吧！',
      currentSongUrl: '',
      currentType: LIST_TYPE.ALL,
      likeList: [],
      progress: 0,
      progressTimer: null,
      loadingSource: false
    };
  },
  watch: {
    currentSongUrl(val) {
      const player = this.$refs.player;
      player.src = val;
      this.onReplay();
    },
    playing(val) {
      if (val) {
        this.progressTimer = setInterval(this.onPlayingProgress.bind(this), 1000);
      } else {
        clearInterval(this.progressTimer);
      }
    }
  },
  methods: {
    onPlayingProgress() {
      const all = this.$refs.player.duration;
      const current = this.$refs.player.currentTime;
      this.progress = current / all * 100;
      console.log(this.progress);
    },
    isMyLike(item) {
      const _id = item._id;
      let idx = -1;
      for(let i = 0;i < this.likeList.length; ++i) {
        if (this.likeList[i]._id === _id) {
          idx = i;
          break;
        }
      }
      return idx !== -1;
    },
    onReplay() {
      this.$refs.player.pause();
      this.$refs.player.play();
      this.playing = true;
    },
    onPause() {
      this.$refs.player.pause();
      this.playing = false;
    },
    onPlay() {
      this.$refs.player.play();
      this.playing = true;
    },
    onLike(item, e) {
      let idx = -1;
      for(let i = 0;i < this.likeList.length; ++i) {
        if (this.likeList[i]._id === item._id) {
          idx = i;
          break;
        }
      }
      if (idx === -1) {
        this.likeList.push(item);
      } else {
        this.likeList.splice(idx, 1);
      }
      songLister.addList(LIST_TYPE.LIKE, this.likeList);
      songLister.storeInLocal(LIST_TYPE.LIKE);
      e.stopPropagation();
    },
    onChangeSong(item, index, listType) {
      console.log("change song");
      const song = songLister.setCurrentSong(index, listType);
      console.log(song);
      this.currentSongName = song.name;
      this.currentSongUrl = song.url;
      this.currentIndex = index;
      this.currentType = listType;
    },
    onLoad() {
      this.$api
        .getMelodies(this.page, this.q)
        .then(res => {
          console.log(res);
          this.list.push(...res.list.map(item => {
            return {
              ...item,
              name: decodeURIComponent(item.name)
            };
          }));
          this.page++;
          this.finished = !res.has_more;
          songLister.addList(LIST_TYPE.ALL, this.list);
        })
        .catch(() => {
          this.finished = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    nextSong() {
      const nextSong = songLister.nextSong();
      const nextIndex = songLister.getIndex();
      console.log('next:', nextSong);
      if (nextSong) {
        this.currentIndex = nextIndex;
        this.currentSongName = nextSong.name;
        this.currentSongUrl = nextSong.url;
      }
    },
    lastSong() {
      const nextSong = songLister.lastSong();
      const nextIndex = songLister.getIndex();
      console.log('next:', nextSong);
      if (nextSong) {
        this.currentIndex = nextIndex;
        this.currentSongName = nextSong.name;
        this.currentSongUrl = nextSong.url;
      }
    }
  },
  created() {
    songLister.addList(LIST_TYPE.ALL, this.list);
    this.likeList = songLister.getFromLocal(LIST_TYPE.LIKE);
    songLister.addList(LIST_TYPE.LIKE, this.likeList);
  },
  mounted() {
    const player = this.$refs.player;
    player.onended = () => {
      console.log('onend');
      this.nextSong();
    };
    player.onloadstart = () => {
      console.log('loadStart');
      this.loadingSource = true;
    };
    player.onerror = () => {
      console.log('error');
      this.$toast.fail('连接失败，请检查网络');
    };
    player.oncanplay = () => {
      console.log('can play');
      this.loadingSource = false;
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss">
#app {
  padding-top: 10px;
  padding-bottom: 100px;
}

.seq {
  font-weight: bold;
  margin-right: 10px;
}

.like {
  float: left;
  font-size: 18px;
  color: red;
}

.cell-content {
  margin-left: 30px;
  color: gray;
  transition: all 0.5s;

  &.playing {
    color: #000;
    font-weight: bold;
    font-size: 16px;
  }
}

.player {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  color: rgb(94, 94, 94);
  height: 100px;
  box-shadow: 0 -1px 3px rgba(26, 26, 26, 0.1);

  &-current {
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  &-feat {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    height: 60px;
    z-index: 2;

    .button {
      &:active {
        opacity: 0.5;
      }
    }

    .main-button {
      font-size: 40px;
    }

    .second-button {
      padding: 20px;
    }
  }

  &-progress {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: red;
    opacity: 0.1;
    z-index: 1;
  }
}
</style>

import {action, observable} from 'mobx';

class PlayerStore {

  @action setInitialState(options) {
    for (let key in options) {
      if (this[key]) {
        this[key] = options[key];
      }
    }
  }

  @action assignVideoPlayerRef(ref) {
    this.videoPlayer = ref;
  }

  @action playVideo() {
    this.videoPlayer.video.play(true);
    this.isPlaying = true;
  }

  @action pauseVideo() {
    this.videoPlayer.video.pause(true);
    this.isPlaying = false;
  }

  @action seekTo(newTime) {

    //TODO: What does seeking do?
    this.seeking = true;
    //TODO: What does liveUpdatePending do?
    this.liveUpdatePending = true;

    //TODO: How is player type assigned?
    if (this.player === 'html5') {
      this.startTime = newTime;
      // Check HTML5 media "seekable" property to be sure media is seekable to startTime
      const seekable = this.videoPlayer.video.seekable;
      if (seekable.length > 0 && this.startTime >= seekable.start(0) && this.startTime <= seekable.end(0)) {
        // ok to seek to startTime
        // canplaythrough will be triggered when seeking is complete
        // this.seeking will be set to false at that point
        this.videoPlayer.video.currentTime = this.startTime;
        //TODO: Implement signLanguage;
        // if (this.hasSignLanguage && this.signVideo) {
        //   // keep sign languge video in sync
        //   this.signVideo.currentTime = this.startTime;
        // }
      }
    }
    //TODO: All this shit;
    // else if (this.player === 'jw' && this.jwPlayer) {
    //   // pause JW Player temporarily.
    //   // When seek has successfully reached newTime,
    //   // onSeek event will be called, and playback will be resumed
    //   this.jwSeekPause = true;
    //   this.jwPlayer.seek(newTime);
    // }
    // else if (this.player === 'youtube') {
    //   this.youTubePlayer.seekTo(newTime,true);
    //   if (newTime > 0) {
    //     if (typeof this.$posterImg !== 'undefined') {
    //       this.$posterImg.hide();
    //     }
    //   }
    // }
  };

  @observable seeking = false;
  @observable liveUpdatePending = false;
  @observable startTime = 0;

  @observable player = 'html5'
  @observable videoPlayer = [];
  @observable isPlaying = false;


  @observable lastCreated = undefined;

  //player state
  @observable autoplay = false;
  @observable loop = false
  @observable startTime = 0;
  @observable volume = 7;
}

export const playerStore = new PlayerStore();

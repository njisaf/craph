import MasterStore from './master.store';

class PlayerStore extends MasterStore {

  setInitialState(options) {
    for (let key in options) {
      if (this[key]) {
        this[key] = options[key];
      }
    }
  }

  assignVideoPlayerRef(ref) {
    this.videoPlayer = ref;
  }

  playVideo() {
    this.videoPlayer.video.play(true);
    this.isPlaying = true;
  }

  pauseVideo() {
    this.videoPlayer.video.pause(true);
    this.isPlaying = false;
  }

  seekTo(newTime) {

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
  }

  handleRewind() {
    const elapsed = this.getElapsed();
    let targetTime = elapsed - this.seekInterval;
    //TODO: All this chapters stuff;
    // if (this.useChapterTimes) {
    //   if (targetTime < this.currentChapter.start) {
    //     targetTime = this.currentChapter.start;
    //   }
    // }
    // else {
    //   if (targetTime < 0) {
    //     targetTime = 0;
    //   }
    // }
    if (targetTime < 0) {
      targetTime = 0;
    }
    this.seekTo(targetTime);
  }

  getElapsed() {
    let position;
    if (this.player === 'html5') {
      position = this.videoPlayer.video.currentTime;
    }
    // else if (this.player === 'jw' && this.jwPlayer) {
    //   if (this.jwPlayer.getState() === 'IDLE') {
    //     return 0;
    //   }
    //   position = this.jwPlayer.getPosition();
    // }
    // else if (this.player === 'youtube') {
    //   if (this.youTubePlayer) {
    //     position = this.youTubePlayer.getCurrentTime();
    //   }
    // }

    if (position === undefined || isNaN(position) || position === -1) {
      return 0;
    }
    return position;
  }

  handleFastForward() {

    const elapsed = this.getElapsed();
    const duration = this.getDuration();
    // const lastChapterIndex = this.chapters.length-1;
    let targetTime = elapsed + this.seekInterval;
    //TODO: CHAPTERS my God they're everywhere.
    // if (this.useChapterTimes) {
    //   if (this.chapters[lastChapterIndex] == this.currentChapter) {
    //     // this is the last chapter
    //     if (targetTime > duration || targetTime > this.currentChapter.end) {
    //       // targetTime would exceed the end of the video (or chapter)
    //       // scrub to end of whichever is earliest
    //       targetTime = Math.min(duration, this.currentChapter.end);
    //     }
    //     else if (duration % targetTime < this.seekInterval) {
    //       // nothing left but pocket change after seeking to targetTime
    //       // go ahead and seek to end of video (or chapter), whichever is earliest
    //       targetTime = Math.min(duration, this.currentChapter.end);
    //     }
    //   }
    //   else {
    //     // this is not the last chapter
    //     if (targetTime > this.currentChapter.end) {
    //       // targetTime would exceed the end of the chapter
    //       // scrub exactly to end of chapter
    //       targetTime = this.currentChapter.end;
    //     }
    //   }
    // }
    // else {
    //   // not using chapter times
    //   if (targetTime > duration) {
    //     targetTime = duration;
    //   }
    // }
    if (targetTime > duration) {
      targetTime = duration;
    }
    this.seekTo(targetTime);
  }

  getDuration() {

    let duration;
    if (this.player === 'html5') {
      duration = this.videoPlayer.video.duration;
    }
    // else if (this.player === 'jw' && this.jwPlayer) {
    //   duration = this.jwPlayer.getDuration();
    // }
    // else if (this.player === 'youtube' && this.youTubePlayer) {
    //   duration = this.youTubePlayer.getDuration();
    // }
    // if (duration === undefined || isNaN(duration) || duration === -1) {
    //   return 0;
    // }
    return duration;
  }

  seeking = false;
  liveUpdatePending = false;
  startTime = 0;

  player = 'html5'
  videoPlayer = [];
  isPlaying = false;

  //TODO: This is a test number. seekInterval should be set off the props using AblePlayer's setSeekInterval function, but that has a ton of extra functionality that needs to be parsed.
  seekInterval = 5;

  lastCreated = undefined;

  //optional player state
  autoplay = false;
  loop = false
  startTime = 0;
  volume = 7;
}

export const playerStore = new PlayerStore();

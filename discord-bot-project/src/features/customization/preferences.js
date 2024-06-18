const preferences = {
  videoContent: [],
  playbackControl: {
    play: true,
    pause: false,
    skip: false,
    volume: 50,
  },
  customizeSettings: {
    darkMode: false,
    language: 'English',
    autoPlay: true,
  },
  favoriteVideos: [],
  userProfile: {
    username: '',
    age: 18,
    location: '',
    preferences: {
      darkMode: false,
      language: 'English',
      autoPlay: true,
    },
    viewingHistory: [],
  },
  moderationTools: {
    reportUser: false,
    reportContent: false,
    banUser: false,
  },
  
  setVideoContent: function(videos) {
    this.videoContent = videos;
  },
  
  controlPlayback: function(action) {
    switch (action) {
      case 'play':
        this.playbackControl.play = true;
        this.playbackControl.pause = false;
        this.playbackControl.skip = false;
        break;
      case 'pause':
        this.playbackControl.play = false;
        this.playbackControl.pause = true;
        this.playbackControl.skip = false;
        break;
      case 'skip':
        this.playbackControl.play = false;
        this.playbackControl.pause = false;
        this.playbackControl.skip = true;
        break;
      default:
        break;
    }
  },
  
  setVolume: function(volumeLevel) {
    this.playbackControl.volume = volumeLevel;
  },
  
  updateSettings: function(setting, value) {
    this.customizeSettings[setting] = value;
  },
  
  addFavoriteVideo: function(video) {
    this.favoriteVideos.push(video);
  },
  
  updateUserProfile: function(username, age, location, preferences, history) {
    this.userProfile.username = username;
    this.userProfile.age = age;
    this.userProfile.location = location;
    this.userProfile.preferences = preferences;
    this.userProfile.viewingHistory = history;
  },
  
  toggleModerationTool: function(tool) {
    this.moderationTools[tool] = !this.moderationTools[tool];
  }
};

module.exports = preferences;
const settings = {
  customizableSettings: {
    videoQuality: ['1080p', '720p', '480p'],
    subtitles: true,
    autoPlay: false,
    volumeControl: true,
  },
  userPreferences: {
    languageFilter: true,
    consentFeature: true,
  },
  controlSettings: {
    playbackSpeed: ['0.5x', '1x', '1.5x', '2x'],
    playbackQuality: ['Auto', 'High', 'Medium', 'Low'],
  },
  handleSettingsChange: (setting, value) => {
    if (settings.customizableSettings.hasOwnProperty(setting)) {
      settings.customizableSettings[setting] = value;
      console.log(`Setting ${setting} has been updated to ${value}.`);
    } else {
      console.log(`Setting ${setting} does not exist.`);
    }
  },
  getUserPreferences: () => {
    return settings.userPreferences;
  },
  getControlSettings: () => {
    return settings.controlSettings;
  },
};

module.exports = settings;
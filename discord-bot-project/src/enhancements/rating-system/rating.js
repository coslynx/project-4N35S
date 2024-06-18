const ratingSystem = {
  videos: [],
  ratings: {},

  addVideo: function(video) {
    this.videos.push(video);
    this.ratings[video] = 0;
  },

  rateVideo: function(video, rating) {
    if (this.videos.includes(video)) {
      if (rating >= 1 && rating <= 5) {
        this.ratings[video] = rating;
      } else {
        console.log("Please provide a rating between 1 and 5.");
      }
    } else {
      console.log("Video not found in the system.");
    }
  },

  getTopRatedVideos: function() {
    const topRatedVideos = Object.keys(this.ratings).sort((a, b) => this.ratings[b] - this.ratings[a]);
    return topRatedVideos.slice(0, 5);
  }
};

module.exports = ratingSystem;
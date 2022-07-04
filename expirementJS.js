var player=videojs("video_1");
	player.nuevo({ // plugin options here 
	   playlistUI: false, // set to disable playlist UI completely
	   playlistShow: false, // set to hide playlist UI on start
	   playlistAutoHide: false, // Disable playlist UI autohide on video play event
	   playlistNavigation: true , // set to show playlist navigation arrows
	   playlistRepeat: false, // set to repeat playlist playback
	});

    player.playlist([{
        sources: [{
          src: 'http://domain.com/video1.mp4',
          type: 'video/mp4'
        }],
        title: 'video 1 title',
        thumb: 'http://domain.com/video1_thumb.jpg', // Suggested size 80x45 px
        duration: '03:40',
      }, {
        // Multiple resolutions mp4 video
        sources: [{
          src: '//domain.com/video2_720p.mp4',
          type: 'video/mp4', res: '720', label: '720p'
        }, {
          src: '//domain.com/video2_360p.mp4',
          type: 'video/mp4', res: '360', label: '360p', default:true
        }, {
          src: '//domain.com/video2_240p.mp4',
          type: 'video/mp4', res: '240', label: '240p'
        }],
        tracks: [{
          src: '//domain.com/captions_en.vtt',
          kind: 'captions', srclang:"en", label:"English", default:true
        }, {
          src: '//domain.com/captions_de.vtt',
          kind: 'captions', srclang:"de", label:"German"
        }, {
          src: '//domain.com/captions_es.vtt',
          kind: 'captions', srclang:"es", label:"Spanish"
        }],
        title: 'video 2 title',
        thumb: 'http://domain.com/video2_thumb.jpg', // Suggested size 80x45 px
        duration: '05:20',
        slideImage: 'http://domain.com/video2_slide.jpg', // Optional progressbar thumbs slide image
      }, {
        // HLS m3u8 playlist file
        sources: [{
          src: 'http://domain.com/playlist.m3u8',
          type: 'application/x-mpegURL'
        }],
        title: 'video 3 title',
        thumb: 'http://domain.com/video4_thumb.jpg',
        duration: '03:40',
      }
      ]);
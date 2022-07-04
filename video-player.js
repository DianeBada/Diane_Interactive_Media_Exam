var player = videojs('videoPlayer', {
autoplay: 'muted',
controls: true,
poster: 'fps.png',
fluid: true,
width: "50px",
height: "50px",
playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5, 3.5, 4 ],
userActions:{
hotkeys: true,
plugins: {

hotkeys:{

}

}
}

});

player.zoomrotate({
    rotate: 180,
    zoom: 1.5
})

player.watermark({
    file: 'https://picsum.photos/50/50',
    xpos: 0, 
    ypos: 0,
    opacity:0.6,
    clickable:true,
    url: 'https://dianebada.github.io/Interactive-Media-Assignment-2/'



})

player.thumbnails({

})

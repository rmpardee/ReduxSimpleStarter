import React from 'react';

// ES6: passing in {video} is equivalent to passing in props and then having a line: const video = props.video
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const imageTitle = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className = "list-group-item">

      <div className="video-list media">

        <div className ="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className ="media-body">
          <div className="media-heading">
            {imageTitle}
          </div>
        </div>

      </div>

    </li>
  );
};

// when using bootstrap classes as above, make sure to use className not class

export default VideoListItem;
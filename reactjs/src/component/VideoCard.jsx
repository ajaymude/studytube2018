import { Link } from 'react-router-dom';

const VideoCard = ({
  youtubeId,
  thumbnail,
  title,
  channel,
  views,
  time
}) => (
  <Link
    to={youtubeId} // Pass the ID as ayou route param
    className="w-full max-w-xs bg-white rounded-lg shadow hover:shadow-lg transition p-2"
  >
    <div className="w-full h-44 bg-gray-200 rounded-lg overflow-hidden">
      <img
        src={thumbnail || `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={title}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="mt-3">
      <h3 className="text-md font-semibold text-gray-900 leading-tight line-clamp-2">
        {title}
      </h3>
      <div className="text-sm text-gray-700">{channel}</div>
      <div className="text-xs text-gray-500">{views} • {time}</div>
    </div>
  </Link>
);

export default VideoCard;
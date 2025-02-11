import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = (props = {}) => {
    const { news } = props || {};
    const {
        title,
        author,
        total_view,
        rating,
        image_url,
        thumbnail_url,
        details,
    } = news;

    return (
        <div className="card w-full bg-base-100 border border-gray-200 mb-5">
            <figure>
                <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-96 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-semibold">{title}</h2>
                <div className="flex items-center gap-3 mt-2">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-medium">{author.name}</p>
                        <p className="text-sm text-gray-500">{author.published_date}</p>
                    </div>
                </div>
                <p className="text-gray-600 mt-2">{details.slice(0, 150)}...</p>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2 text-yellow-500">
                        <FaStar /> <span className="font-semibold">{rating.number} ({rating.badge})</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaEye /> <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

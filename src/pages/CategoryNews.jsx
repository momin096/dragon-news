import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    
    return (
        <div>
            <p className="text-gray-400 font-medium pt-2">{news.length} News Found On This Category</p>
            <div>
                {
                    news.map((singleNews) => <NewsCard key={singleNews._id} news={singleNews} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;
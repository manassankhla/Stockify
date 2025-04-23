import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=10&apiKey=NEWS_API_KEY`
      );
      const shuffled = response.data.articles.sort(() => 0.5 - Math.random());
      setArticles(shuffled.slice(0, 4));
    } catch (error) {
      console.error("Failed to fetch news", error);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 300000); // refresh every 5 mins
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#121212] rounded-lg mt-18 p-4 shadow-md max-w-md space-y-4">
      <h2 className="text-xl font-semibold text-white mb-2">Latest News</h2>
      {articles.map((article, index) => (
        <a
          key={index}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-700 rounded-md p-3 hover:bg-[#2a2a2a] transition"
        >
          <div className="flex items-start gap-3">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-16 h-16 object-cover rounded-md"
              />
            )}
            <div>
              <h3 className="text-sm font-semibold text-white">{article.title}</h3>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(article.publishedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default News;

import { NavLink } from 'react-router-dom';

import { Button } from '../ui/button';

import { PostInterface } from '../../@types/dataTypes';

interface ArticleInterface {
  article: PostInterface;
}

function LatestArticleCard({ article }: ArticleInterface) {
  return (
    <div className="latest-article-container flex flex-col h-[250px] w-full lg:max-w-[400px] p-3 border-solid border-2 border-cadet-blue-400  mx-3 rounded-md shadow-lg shadow-cadet-blue-500/70 bg-cadet-blue-200 space-y-3">
      <div className="latest-article-header flex flex-col h-[35%] border-solid border-b-[1px] border-cadet-blue-300">
        <p className="text-lg">{article.title}</p>
        <p className="text-sm">By {article.author}</p>
      </div>
      <div className="latest-article-body flex h-[45%]">
        <p className="text-md">{article.excerpt}</p>
      </div>
      <div className="latest-article-btn-container flex h-[20%] align-middle justify-end">
        <NavLink to="/articles/">
          <Button variant="ghost">Read more...</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default LatestArticleCard;

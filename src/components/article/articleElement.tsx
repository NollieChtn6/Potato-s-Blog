import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

import { PostInterface } from '../../@types/dataTypes';
import convertToDate from '../../utils/convertToDate';

interface ArticleInterface {
  article: PostInterface;
}

function ArticleElement({ article }: ArticleInterface) {
  const publicationDate = convertToDate(article.created_at);

  return (
    <main className="article-element-container flex flex-col w-full space-y-3 border-solid border-b-2 border-cadet-blue-100 py-3">
      <div className="article-header flex-col">
        <h3 className="article-title text-2xl font-serif">{article.title}</h3>
        <p className="article-author">By {article.author}</p>
        <p className="article-meta text-sm">
          Published on: {publicationDate} | In: {article.categoryname}
        </p>
      </div>
      <div className="article-excerpt flex-col">
        <p>{article.excerpt}</p>
      </div>
      <div className="article-btn-container flex-col">
        <NavLink to="/articles/">
          <Button variant="ghost">Read more...</Button>
        </NavLink>
      </div>
    </main>
  );
}

export default ArticleElement;

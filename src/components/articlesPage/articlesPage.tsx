import { usePosts } from '../../contexts/postsContext';

import ArticleElement from '../article/ArticleElement';

function ArticlesPage() {
  const { posts } = usePosts();

  return (
    <main className="articles-page-container flex flex-col overflow-y-hidden h-full w-full text-pewter-900 p-3 space-y-6">
      <div className="breadcrumbs-container flex bg-slate-400 w-full h-[30px] items-center">
        Page • Page • Page
      </div>
      <div className="articles-page-header">
        <h2 className="text-4xl font-serif text-pewter-900">All Articles</h2>
        <p className="page-description text-sm">
          Read all articles by your beloved Patate.
        </p>
      </div>
      <div className="articles-container flex flex-col w-full overflow-y-scroll space-y-6">
        {posts.map((article) => (
          <ArticleElement key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}

export default ArticlesPage;

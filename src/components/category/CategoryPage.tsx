import ArticleElement from '../article/articleElement';

function CategoryPage() {
  return (
    <main className="articles-page-container flex flex-col overflow-y-hidden h-full w-full text-pewter-900 p-3 space-y-6">
      <div className="breadcrumbs-container flex bg-slate-400 w-full h-[30px] items-center">
        Page • Page • Page
      </div>
      <div className="articles-page-header">
        <h2 className="text-4xl font-serif text-pewter-900">
          Category: Category
        </h2>
        <p className="category-description text-sm">
          Ever wondered what it’s like to see the world through the eyes of a
          cat? Join Patate as she navigates through daring feats of courage,
          from high-flying leaps off the couch to the treacherous tree climbing
          escapades.
        </p>
      </div>
      <div className="articles-container flex flex-col w-full overflow-y-scroll space-y-6">
        <ArticleElement />
        <ArticleElement />
        <ArticleElement />
        <ArticleElement />
        <ArticleElement />
      </div>
    </main>
  );
}

export default CategoryPage;

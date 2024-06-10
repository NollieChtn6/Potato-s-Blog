import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useCategories } from '../../contexts/categoriesContext';
import { usePosts } from '../../contexts/postsContext';

import ArticleElement from '../article/ArticleElement';

function SelectedCategory() {
  // get category where slug === :slug
  const { slug } = useParams();
  const { categories } = useCategories();
  const selectedCategory = categories.find(
    (category) => category.slug === slug
  );

  const { posts } = usePosts();
  const articlesByCategory = posts.filter(
    (article) => article.categoryslug === slug
  );

  return (
    <main className="articles-page-container flex flex-col overflow-y-hidden h-full w-full text-pewter-900 p-3 space-y-6">
      <div className="breadcrumbs-container flex bg-slate-400 w-full h-[30px] items-center">
        Page • Page • Page
      </div>
      <div className="articles-page-header">
        <h2 className="text-4xl font-serif text-pewter-900">
          Category: {selectedCategory?.name}
        </h2>
        <p className="category-description text-sm">
          {selectedCategory?.description}
        </p>
      </div>
      <div className="articles-container flex flex-col w-full overflow-y-scroll space-y-6">
        {articlesByCategory.map((article) => (
          <ArticleElement key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}

export default SelectedCategory;

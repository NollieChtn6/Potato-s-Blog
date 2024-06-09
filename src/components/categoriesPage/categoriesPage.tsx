import CategoryCard from './categoryCard';

function Categories() {
  return (
    <main className="articles-page-container flex flex-col overflow-y-hidden h-full w-full text-pewter-900 p-3 space-y-6">
      <div className="breadcrumbs-container flex bg-slate-400 w-full h-[30px] items-center">
        Page • Page • Page
      </div>
      <div className="ategories-page-header">
        <h2 className="text-4xl font-serif text-pewter-900">Categories</h2>
      </div>
      <div className="categories-page-content flex flex-col w-full overflow-y-scroll space-y-6 lg:flex-row lg:flex-wrap">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </main>
  );
}

export default Categories;

import { useParams } from 'react-router';
import { useNavigate, NavLink } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react';
import { usePosts } from '../../contexts/postsContext';

import { Button } from '../ui/button';

import convertToDate from '../../utils/convertToDate';

function SelectedArticle() {
  // Useful resource: https://njirumwai.hashnode.dev/react-router-6-go-back-how-to-go-back-using-react-router-v6
  const navigate = useNavigate();
  // get category where slug === :slug
  const { slug } = useParams();
  const { posts } = usePosts();
  const selectedArticle = posts.find((article) => article.slug === slug);
  const publicationDate = convertToDate(selectedArticle?.created_at);

  return (
    <main className="articles-page-container flex flex-col overflow-y-hidden h-full w-full text-pewter-900 p-3 space-y-6">
      <div className="article-header">
        <h2 className="text-4xl font-serif text-pewter-900">
          {selectedArticle?.title}
        </h2>
        <p className="article-author">By: {selectedArticle?.author}</p>
        <p className="article-author">
          Publication date: {publicationDate} | In:{` `}
          <NavLink
            to={`/categories/${selectedArticle?.categoryslug}`}
            title={`To ${selectedArticle?.categoryname} Category`}
            className="hover:text-oyster-pink-700"
          >
            {selectedArticle?.categoryname}
          </NavLink>
        </p>
      </div>
      <div className="article-content flex flex-col w-full overflow-y-scroll space-y-6 lg:flex-row lg:flex-wrap">
        {selectedArticle?.content}
      </div>
      <Button onClick={() => navigate(-1)} variant="ghost">
        <ArrowLeft />
        Go back
      </Button>
    </main>
  );
}

export default SelectedArticle;

import React from 'react';
import { useRouter } from 'next/router';
import { Categories, PostWidget, Loader } from '../../components';
import PostDetailE from '../../components/PostDetail copy';
import AuthorE from '../../components/Author copy';

const PostDetailsE = () => {
    
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetailE />
            <AuthorE />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetailsE;

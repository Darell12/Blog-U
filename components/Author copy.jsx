import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const AuthorE = () => {
   let imgP = "https://media.graphassets.com/f4zVx4AZTJiviRIcUJBV";
  let slugP = "technical-seo-with-hygraph";
  let title= "POST ESTATICO";
  let categories =[{
                "name": "Neurologia",
                "slug": "neurologia"
  }];
  let author = {
    "bio": "",
              "name": "Ronak Ganatra",
              "id": "ckadqdbhk00go0148zzxh4bbq",
              "photo": {
                "url": "https://media.graphassets.com/JV8sqKPoR6e7C6onDD4N"
              }
  }
  let createdAt = "2020-05-19T10:11:58.792576+00:00";
  let excerpt = "Get started with your SEO implementation when using a Headless CMS"
 let post = {
  "data": {
    "postsConnection": {
      "edges": [
        {
          "cursor": "ckadrcx4g00pw01525c5d2e56",
          "node": {
          }
        },
      ]
    }
  }
 }
  return(
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
)};

export default AuthorE;

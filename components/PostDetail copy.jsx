import React from 'react';

import moment from 'moment';

const PostDetailE = () => {

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

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }



  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={imgP} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{title}</h1>
  <table summary="Los grupos de música punk más famosos del Reino Unido">
  <caption>Un resumen de los grupos de música punk más famosos del Reino Unido</caption>
  <thead>
    <tr>
      <th scope="col">Grupo</th>
      <th scope="col">Año de formación</th>
      <th scope="col">Número de álbumes</th>
      <th scope="col">Canción más conocida</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>

      ... se han eliminado algunas filas por abreviar

    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Número total de álbumes</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
        </div>


      </div>

    </>
  );
};

export default PostDetailE;

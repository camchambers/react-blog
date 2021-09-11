import React from "react";
import { Link } from 'react-router-dom';
import articleContent from './article-content';

const ArticlesList = () => (
  <React.Fragment>
    <h1>Articles</h1>
    {articleContent.map((article, key) => (
      <Link key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
      </Link>
    ))}
  </React.Fragment>
);

export default ArticlesList;

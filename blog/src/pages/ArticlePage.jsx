import { useState, useEffect } from 'react';
import 'whatwg-fetch';
import React from "react";
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from "./NotFoundPage";
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    setArticleInfo({ upvotes: 3 })
  })

  if (!article) return <NotFoundPage />

  // Filter article content so that we list other articles except the one 
  // that we are currently viewing.
  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <React.Fragment>
      <h1>{article.title}</h1>
      <p>This post has been upvoted {articleInfo.upvotes} times.</p>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </React.Fragment>
  );
}

export default ArticlePage;

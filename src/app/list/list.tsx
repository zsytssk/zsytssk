import React from "react";
import { connect } from "react-redux";
import type { Article } from "../../redux/reducers";

const mapStateToProps = (state: any) => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }: { articles: Article[] }) => (
  <ul>
    {articles.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;

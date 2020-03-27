import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, Article } from "../../redux/reducers";
import { genId } from "../../utils/utils";
import style from "./form.module.css";

console.log(`test:>`, style.input);
function mapDispatchToProps(dispatch: any) {
  return {
    addArticle: (article: Article) => dispatch(addArticle(article))
  };
}

type Props = {
  addArticle: ReturnType<typeof mapDispatchToProps>["addArticle"];
};
type State = {
  [key: string]: string;
};
class ConnectedForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    this.setState({ [target.id]: target.value });
  }

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title, id: genId() });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className={style.input}
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;

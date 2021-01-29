import React from 'react';
import {connect} from 'react-redux';
import {sendNewsAction} from './../../redux/newsPageReducer';
import { Field, reduxForm } from 'redux-form';
import {requaredField, maxLength} from './../../utilites/validators/formvalidator';
import {Textarea} from './../common/FormsControls/FormsControls';

const maxLength10 = maxLength(10);

const NewsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={Textarea}
                   name="newsText"
                   placeholder="Your News"
                   validate={[requaredField, maxLength10]}/>
          </div>
          <div>
            <button>Send My News</button>
          </div>
    </form>
  );
}

const NewsReduxForm = reduxForm({form: 'news'})(NewsForm);

class NewsContainer extends React.Component {

  onSubmitNews = (formData) => {
    this.props.onSendNews(formData.newsText)
  }

  render() {
    return (
      <div>
          <div>{this.props.news.map( (element) => <div>{element.text}</div> )}</div>
          <NewsReduxForm onSubmit={this.onSubmitNews}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    news: state.newsPage.news
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onSendNews: (text) => {dispatch(sendNewsAction(text));}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);

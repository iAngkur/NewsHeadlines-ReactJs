import React from "react";
import News, { newsCategory } from "./news";

import Header from "./components/header";
import NewsList from "./components/newsList";
import Pagination from "./components/pagination";
import Loading from "./components/loading";

const news = new News(newsCategory.technology);

class App extends React.Component {
  state = {
    data: {},
    isLoading: true,
  };

  componentDidMount() {
    news
      .getNews()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  }

  next = () => {
    if (this.state.data.isNext) {
      this.setState({ isLoading: true });
    }
    news
      .next()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };

  prev = () => {
    if (this.state.data.isPrevious) {
      this.setState({ isLoading: true });
    }
    news
      .prev()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        alert("Something went wrong");
        this.setState({ isLoading: false });
      });
  };
  render() {
    const {
      article,
      isPrevious,
      isNext,
      category,
      totalResults,
      currentPage,
      totalPage,
    } = this.state.data;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-md-2">
            <Header
              category={this.state.category}
              changeCategory={this.changeCategory}
            />
            <div className="d-flex">
              <p className="text-black-50">About {0} result found</p>
              <p className="text-black-50 ml-auto">
                {1} page of {100}
              </p>
            </div>
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <div>
                <NewsList news={this.state.data.article} />
                <Pagination
                  next={this.next}
                  prev={this.prev}
                  isPrevious={isPrevious}
                  isNext={isNext}
                  totalPage={totalPage}
                  currentPage={currentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

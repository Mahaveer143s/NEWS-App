import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      articlesLength: 0,
    };
  }

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchNews();
    });
  };

  onNextFunc = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchNews();
      }
    );
  };

  onPrevFunc = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page - 1,
      }),
      () => {
        this.fetchNews();
      }
    );
  };

  async componentDidMount() {
    this.fetchNews();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.Category !== this.props.Category) {
      // Category prop has changed, fetch news again
      await this.setState({ page: 1, articles: [] });
      this.fetchNews();
    }
  }

  async fetchNews() {
    const { Category } = this.props;
    const encodedCategory = encodeURIComponent(Category);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${encodedCategory}&apiKey=9b0012d882b34e0a98e9bcbb3c7c0dd7&page=${this.state.page}&pageSize=5`;

    try {
      this.setState({ loading: true });
      const data = await fetch(url);
      const parseData = await data.json();
      this.setState((prevState) => ({
        loading: false,
        articles: [...prevState.articles, ...parseData.articles],
        articlesLength: parseData.totalResults,
      }));
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  render() {
    const { Category } = this.props;

    return (
      <div className="text-center">
        <h4 className="my-4">Latest NEWS - Top NEWS of {Category} at NEWS CODE</h4>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.articlesLength}
          loader={this.state.loading && <Loader />}
        >
          <div className="d-flex justify-content-around flex-wrap">
            {this.state.articles.map((element, index) => (
              <div key={`${element.url}-${index}`}>
                <NewsItem
                  url={element.url}
                  title={element.title ? element.title.slice(0, 80) : 'The biggest News title'}
                  desc={
                    element.description
                      ? element.description.slice(0, 100)
                      : 'This is the biggest breaking news of India'
                  }
                  imgUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : 'https://th.bing.com/th/id/OIP.Fv3QKG4OmyHat9R5jYs9JwAAAA?rs=1&pid=ImgDetMain'
                  }
                  date={element.publishedAt.slice(0, 10)}
                  author={element.author ? element.author : 'Unknown'}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>

        <div>
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.onPrevFunc}
            className="btn btn-outline-primary position-fixed bottom-0 start-0"
            style={{ zIndex: 3, margin: '5vh' }}
          >
            &lt; Previous
          </button>

          <button
            disabled={this.state.articlesLength < 5}
            type="button"
            onClick={this.onNextFunc}
            className="btn btn-outline-primary position-fixed bottom-0 end-0"
            style={{ zIndex: 3, margin: '5vh' }}
          >
            Next &gt;
          </button>
        </div>

        {this.state.loading && <Loader />}
      </div>
    );
  }
}

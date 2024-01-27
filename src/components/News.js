import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
import Spinner from './Spinner';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 8

    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    back = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6570f3ae44f94438969179433adfc821&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
        this.setState({ loading: true })

        let data = await fetch(url)
        let parsedData = await data.json()

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    next = async () => {
        if (!(this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pagesize)))) {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6570f3ae44f94438969179433adfc821&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            }

            )

        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6570f3ae44f94438969179433adfc821&page=1&pageSize=${this.props.pagesize}`
        this.setState({ loading: true })

        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles, totalResults: parsedData.totalResults,
            loading: false
        })
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='my-4 text-center'>News App  -Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row my-2" >
                    {!this.state.loading && this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <Newsitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} />

                        </div>

                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-danger " onClick={this.back}>&larr;Previous</button>
                    <button type="button" disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pagesize))} className="btn btn-danger " onClick={this.next}>Next&rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
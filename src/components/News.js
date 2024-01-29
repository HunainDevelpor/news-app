import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'
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
            loading: true,
            page: 1,
            totalResults:0
        }
    }
    Capitilize=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    async update (){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6570f3ae44f94438969179433adfc821&page=${this.state.page}&pageSize=${this.props.pagesize}`
        this.setState({ loading: true })

        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles, totalResults: parsedData.totalResults,
            loading: false
        })
        document.title=`${this.Capitilize(this.props.category) } | News-app`
            }

    
    // back = async () => {
    //    this.setState({page:this.state.page-1})
    //    this.update()
    // }
    // next = async () => {
    //     this.setState({page:this.state.page+1})
    //     this.update()
    // }
fetchuppdate=async()=>{
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6570f3ae44f94438969179433adfc821&page=${this.state.page}&pageSize=${this.props.pagesize}`

    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
         totalResults: parsedData.totalResults
    
    })

}
    async componentDidMount(){
        this.update()
    }
    render() {
        return (<>
                <h1 className='my-4 text-center'>News App  -Top Headlines</h1>
                {this.state.loading && <Spinner />}
               
                <InfiniteScroll
                dataLength={this.state.articles.length}
                hasMore={this.state.articles.length!==this.state.totalResults}
                next={this.fetchuppdate}
                loader={<Spinner/>}
                >
                    <div className="container">
                <div className="row my-2" >
                    {this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <Newsitems  author={element.author} date={element.publishedAt} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} />

                        </div>

                    })}

                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-danger " onClick={this.back}>&larr;Previous</button>
                    <button type="button" disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pagesize))} className="btn btn-danger " onClick={this.next}>Next&rarr;</button>
                </div> */}

</>
        )
    }
}

export default News
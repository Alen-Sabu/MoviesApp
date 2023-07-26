import React, {useState, useEffect} from 'react';
import "./SearchResult.scss";
import {useParams} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchDataFromApi } from "../../utils/api";
import noResults from "../../assets/no-results.png";
import Spinner from '../../components/spinner/Spinner';
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from '../../components/movieCard/MovieCard';

const SearchResult = () => {
  const [data, setdata] = useState(null)
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false)
  const {query} = useParams()

  const fetchInitialData = () =>{
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setdata(res)
      setPageNum((prev) => prev + 1)
      setLoading(false)
    })
  }

  const fetchNextPageData = () =>{
   
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      if(data?.results){
         setdata({...data, results: [...data.results, ...res.results]})
      }else{
        setdata(res)
      }
      setPageNum((prev) => prev + 1)
    })
  }

  useEffect(() =>{
    setPageNum(1)
    fetchInitialData()
  }, [query])

  return (
    <div className='searchResultsPage'>
      {loading && <Spinner initial={true}/>}
      {!loading &&(
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${data?.total_results > 1 ? "results": "result"} of '${query}'`}
              </div>
              <InfiniteScroll 
                className='content'
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages }
                loader={<Spinner />}
              >
                {data.results.map((item, index) => {
                  if(item.media_type === "person") return;
                  return(
                    <MovieCard key={index} data={item} fromSearch={true}/>
                  )
                })}
              </InfiniteScroll>
            </>
          ): (
            <span className="resultNotFound">
              Sorry, Results not found
            </span>
          )}
        </ContentWrapper>
      )}
    </div>
  )
}

export default SearchResult

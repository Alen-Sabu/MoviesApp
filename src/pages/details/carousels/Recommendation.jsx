import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Recommendation = ({mediaType, id}) => {
    const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`)
    console.log( data?.results, "HHHHHHH");
  return (
    <Carousel data={data} title="Recommendation" loading={loading} endpoint={mediaType} />
  )
}

export default Recommendation;

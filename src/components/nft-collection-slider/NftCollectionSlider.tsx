import React, { useEffect, useState } from 'react'
import Slider from '../slider/Slider'
import NftCard, { NftCardProps } from '../nft-card/NftCard'
import { DataSource } from '../../types'
import Service from '../service'
import { RaribleItemInCollectionType } from '../../types/Rarible'

const nftsds: NftCardProps[] = [
  {
    title:'nft title here', 
    bid: 30.3,
    variant: 'Yellow',
    creatorAddress:'321dsa...3123dsa',
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fadvisor%2Finvesting%2Fcryptocurrency%2Fbored-ape-nfts%2F&psig=AOvVaw2ngq1kCUKoBIFbbpyfrIlQ&ust=1685617484086000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPidpc-0n_8CFQAAAAAdAAAAABAE',
    number: 321
  },{
    title:'nft title here', 
    bid: 30.3,
    variant: 'Yellow',
    creatorAddress:'321dsa...3123dsa',
    image:'https://lh3.googleusercontent.com/dmEAwcJEiyhliQCaUSwW9fV0_DhTsn6maTRrDUj-YTU0ekSyJbOfUEFp91cyR3nAVAlIZirc7-d5U4AuxmGQKL9yZ22Hl8E4Bg=s400',
    number: 321
  },{
    title:'nft title here', 
    bid: 30.3,
    variant: 'Yellow',
    creatorAddress:'321dsa...3123dsa',
    image:'https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400',
    number: 321
  },{
    title:'nft title here', 
    bid: 30.3,
    variant: 'Yellow',
    creatorAddress:'321dsa...3123dsa',
    image:'https://lh3.googleusercontent.com/QOvp4TyxNIUYYGNzZ6UfKU_XkAsc8MoG-qQvIaKR-Z1byacK_1ZSimda1JuNxWAQY3RSTn0qojRklVYR09YU7l7DotRfaQHG8kk=s400',
    number: 321
  },{
    title:'nft title here', 
    bid: 30.3,
    variant: 'Yellow',
    creatorAddress:'321dsa...3123dsa',
    image:'https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1TZThISmdaRUo3amNkOXhxMnE4S2hVakFDUkFaRUVjUkJXNFNacXN3ZTJocg==',
    number: 321
  }
]

type Props = {
  dataSource: DataSource,
  size: number,// number of items to load in each request
  apiKey?: string
}

function NftCollectionSlider({dataSource = DataSource.RARIBLE, size = 25, apiKey}: Props) {
  
  const [nfts, setNfts] = useState<NftCardProps[]>([])
  const fetchData = async () => {
    
    const dataSource = await Service.createDataSourceInstance(DataSource.RARIBLE);
    const res = await dataSource.getCollectionByContract('0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', 'ETHEREUM', null)
    const mapedNfts: NftCardProps[] = res.nfts
    .map(item => ({
      image: item.meta.content[0].url,
      title: item.meta.name
    }))
    setNfts(mapedNfts);
  }
  useEffect(() => {
    fetchData();
  }, [dataSource])

  return (
    <Slider>
      {nfts.map((item: NftCardProps) => <NftCard {...item} />)} 
    </Slider>
  )
}

export default NftCollectionSlider
// slider component that does only slideing

// default slide component that being used slide not passed 
    //  video slide
    //  audio slide
    //  image slide


// sliderWarper that fetchest nfts and data
    // accept token_id, contract_address 
    // has option to choose between opensea and rarible api


// === > publish first version
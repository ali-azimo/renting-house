import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItems from './ListingItems';



export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentlistings, setRentListings] = useState([]);
  SwiperCore.use([Navigation])

  console.log(saleListings);

  useEffect(()=>{
    const fetchOfferListings = async () =>{
      try{
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      }catch(error){
        console.log(error)
      }
    }
  
    const fetchRentListings = async () =>{
      try{
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      }catch(error){
        console.log(error)
      }
    }
    const fetchSaleListings = async () =>{
      try{
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
       }catch(error){
        console.log(error)
      }
    }
    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Top */}

      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>Find your next <span className='text-slate-500'>perfect</span>
        <br />
        place with ease
        </h1>
        <div className="text-gray-500 text-xs sm:text-sm">
          BGS is the best place to find your next perfect pforeffinal building house.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link to={'/search'} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
        Let's get started ...
        </Link>
      </div>

      
    {/* Swiper */}

   <Swiper navigation>
    {offerListings && 
      offerListings.length > 0 && 
      offerListings.map((listing) => (
        <SwiperSlide>
          <div 
            style={{
              background: `url(${listing.imageUrls[0]}) 
              center no-repeat`, 
              backgroundSize:'cover', backgroundPosition: 'center center'
            }}
          className="h-[500px]" 
          key={listing._id}></div>
        </SwiperSlide>
      ))}
   </Swiper>

      {/* Lisnting product */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">

        {
          offerListings && offerListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className='text-2xl font-semibold text-slate-600'>Recent Offer</h2>
                <Link to={'/search?offer=true'} className='text-sm text-blue-800 hover:underline'>
                Show more offers
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {
                  offerListings.map((listing) => (
                    <ListingItems listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
        {
         rentlistings &&rentlistings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
                <Link to={'/search?type=rent'} className='text-sm text-blue-800 hover:underline'>
                Show more rents
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {
                  rentlistings.map((listing) => (
                    <ListingItems listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
        {
          saleListings && saleListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className='text-2xl font-semibold text-slate-600'>Recent place for Sale</h2>
                <Link to={'/search?type=sale'} className='text-sm text-blue-800 hover:underline'>
                Show more sales
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {
                  saleListings.map((listing) => (
                    <ListingItems listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

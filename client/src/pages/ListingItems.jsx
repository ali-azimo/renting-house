import {Link} from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md';
import { list } from 'postcss';

export default function ListingItems({listing}) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[270px]'>

        <Link to={`/listing/${listing._id}`}>
            <img src={listing.imageUrls[0]} alt='' 
            className='h-[180px] sm:h-[220] w-[270px] object-cover hover:scale-110 transition-scale duration-300'
            />
            <div className='p-3 flex flex-col gap-2 w-full'>
                <p className='truncate text-lg font-semibold text-slate-700'>{listing.name}</p>

                <div className='flex items-center gap-1'>
                    <MdLocationOn className='h-4 w-4 text-green-700'/>
                    <p className='text-sm text-gray-600 truncate w-full'>{listing.address}</p>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                    {listing.description}
                </p>
                <p className='text-slate-500 mt-2 font-semibold'>
                    $
                    {
                    listing.offer ? listing.discountPrice.toLocaleString('en-Us') : listing.regularPrice.toLocaleString('en-Us')
                    }
                    {listing.type === 'rent' && ' / month'}
                </p>
                <div className="text-slate-700 flex gap-4">
                    <div className="font-bold text-xs">
                        {listing.bedroom > 1 ? `${listing.bedroom} beds ` : `${listing.bedroom} bed`}
                        
                    </div>
                    <div className="font-bold text-xs">
                        {listing.bathroom > 1 ? `${listing.bathroom} baths ` : `${listing.bathroom} bath`}
                        
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

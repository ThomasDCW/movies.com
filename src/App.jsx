import 'tailwindcss/tailwind.css';
import { getMovies, getMoviesWithQuery } from '../redux/movies/movies.actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const movies = useSelector((state) => state.movies.allMovies);
  const query = useSelector((state) => state.movies.query);

  let moviesArray = movies.results;

  return (
    <>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
        <div className='relative flex-grid grid-cols-12 gap-3'>
          <div className='col-start-4 col-span-6'>
            <div className='flex items-center py-4'>
              <div className='w-full'>
                <label htmlFor='search' className='sr-only'>
                  Search
                </label>
                <div className='relative'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'></div>
                  <input
                    id='search'
                    name='search'
                    className='block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm'
                    placeholder='Search'
                    type='text'
                    value={query}
                    onChange={(e) =>
                      dispatch(
                        getMoviesWithQuery({
                          query: 'avatar',
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white h-1/3 sm:h-2/3' />
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='mt-5 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {moviesArray?.map((movie) => {
              return (
                <div
                  key={movie.id}
                  className='flex flex-col rounded-lg shadow-lg overflow-hidden'
                >
                  <div className='flex-shrink-0'>
                    <img
                      className='h-48 w-full object-cover'
                      src={
                        `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                          ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                          : null
                      }
                      alt=''
                    />
                  </div>
                  <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                    <div className='flex-1'>
                      <a href='' className='block mt-2'>
                        <p className='text-xl font-semibold text-gray-900'>
                          {movie.original_title}
                        </p>
                        <p className='mt-3 text-base text-gray-500'>
                          {movie.overview}
                        </p>
                      </a>
                    </div>
                    <div className='mt-6 flex items-center'>
                      <div className='ml-3'>
                        <p className='text-sm font-medium text-gray-900'>
                          <a href='' className='hover:underline'></a>
                        </p>
                        <div className='flex space-x-1 text-sm text-gray-500'>
                          <p>{movie.release_date}</p>
                          <span aria-hidden='true'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

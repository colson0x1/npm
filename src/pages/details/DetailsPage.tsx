/* https://registry.npmjs.com/json-server */
import type { DetailsLoaderResult } from './detailsLoader';
import { useLoaderData } from 'react-router-dom';

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  const url = details.repository.url;
  // Remove 'git+' from the beginning
  const extractedUrl = url.replace(/^git\+/, '');
  // console.log(extractedUrl);

  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold my-4'>{details.name}</h1>

      <div>
        <h3 className='text-lg font-bold'>Description</h3>
        <div className='p-3 bg-gray-200 rounded'>{details.description}</div>
      </div>

      <div>
        <h3 className='text-lg font-bold'>License</h3>
        <div className='p-3 bg-gray-200 rounded'>{details.license}</div>
      </div>

      <div>
        <h3 className='text-lg font-bold'>Author</h3>
        <div className='p-3 bg-gray-200 rounded'>{details.author?.name}</div>
      </div>

      <div>
        <h3 className='text-lg font-bold'>Maintainers</h3>
        <div className='p-3  rounded'>
          <div className='flex gap-1'>
            {details.maintainers?.map((maintainer) => (
              <div
                key={maintainer?.name}
                className='border py-0.5 px-1 text-lg bg-slate-200 text-gray-800 rounded'
              >
                <a
                  href={`https://www.npmjs.com/~${maintainer?.name}`}
                  target='_blank'
                >
                  @{maintainer?.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-bold'>Repository</h3>
        <div className='p-3 bg-gray-200 rounded'>
          <a className='text-blue-600' href={`${extractedUrl}`} target='_blank'>
            {extractedUrl}
          </a>
        </div>
      </div>
    </div>
  );
}

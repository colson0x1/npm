import type { PackageDetails } from '../../api/types/packageDetails';
import type { Params } from 'react-router-dom';
import { getPackage } from '../../api/queries/getPackage';

interface LoaderArgs {
  // Params is an object and its going to have some keys and the values are
  // going to be strings
  params: Params;
}

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export async function detailsLoader({
  params,
}: LoaderArgs): Promise<DetailsLoaderResult> {
  // console.log('details loader executed :)');

  const { name } = params;

  if (!name) {
    throw new Error('Name must be provided');
  }

  const details = await getPackage(name);

  return {
    details,
  };
}

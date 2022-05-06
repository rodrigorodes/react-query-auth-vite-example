import { useQuery } from 'react-query';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Competencia } from '../types';

export const getCompetencias = (): Promise<Competencia> => {
  return axios.get(`/competencias`);
};

type QueryFnType = typeof getCompetencias;

type UseDiscussionOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const getCompetenciasQuery = ({ config }: UseDiscussionOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['competencias'],
    queryFn: () => getCompetencias(),
  });
};

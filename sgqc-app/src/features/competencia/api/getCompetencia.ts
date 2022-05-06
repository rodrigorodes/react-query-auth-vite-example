import { useQuery } from "react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

import { Competencia } from "../types";

export type CompetenciaDTO = {
  competenciaId: string;
};

export const getCompetencia = ({ competenciaId }: { competenciaId: string }): Promise<Competencia> => {
  return axios.get(`/competencias/${competenciaId}`);
};

type QueryFnType = typeof getCompetencia;

type CompetenciaOptions = {
  competenciaId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useCompetencia = ({
  competenciaId,
  config,
}: CompetenciaOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["competencias", competenciaId],
    queryFn: () => getCompetencia({ competenciaId }),
  });
};

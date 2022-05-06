import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from "@/lib/react-query";
import { useNotificationStore } from "@/stores/notifications";
import { useMutation } from "react-query";
import { Competencia } from "../types";

export type CreateCompetenciaDTO = {
  data: {
    body: string;
    competenciaId: string;
  };
};

type Options = {
  competenciaId: string;
  config?: MutationConfig<typeof createComment>;
};

export const createComment = (data: CreateCompetenciaDTO): Promise<void> => {
  return axios.post("/competencias", data);
};

export const competenciaCreateComment = ({ config, competenciaId: competenciaId }: Options) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (newCompetencia: CreateCompetenciaDTO) => {
      await queryClient.cancelQueries(['competencias', competenciaId]);

      const previousCompetencia = queryClient.getQueryData<Competencia[]>(['competencias', competenciaId]);

      queryClient.setQueryData(
        ['competencias', competenciaId],
        [...(previousCompetencia || []), newCompetencia.data]
      );

      return { previousCompetencia: previousCompetencia };
    },
    onError: (_, __, context: any) => {
      if (context?.previousComments) {
        queryClient.setQueryData(['competencias', competenciaId], context.previousComments);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['competencias', competenciaId]);
      addNotification({
        type: 'success',
        title: 'Competencia Criada com Sucesso.',
      });
    },
    ...config,
    mutationFn: createComment,
  });
};

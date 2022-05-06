import { axios } from "@/lib/axios";
import { MutationConfig, queryClient } from "@/lib/react-query";
import { useNotificationStore } from "@/stores/notifications";
import { useMutation } from "react-query";
import { Competencia } from "../types";

export type UpdateCompetenciaDTO = {
  data: {
    body: string;
  };
  competenciaId: string;
};

type Options = {
  config?: MutationConfig<typeof updateCompetencia>;
};

export const updateCompetencia = ({
  data,
  competenciaId,
}: UpdateCompetenciaDTO): Promise<void> => {
  return axios.patch(`/competencias/${competenciaId}`, data);
};

export const useUpdateCompetencia = ({ config }: Options = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (updateCompetencia: UpdateCompetenciaDTO) => {
      await queryClient.cancelQueries([
        "competencias",
        updateCompetencia?.competenciaId,
      ]);

      const previousCompetencia = queryClient.getQueryData<Competencia[]>([
        "competencias",
      ]);

      queryClient.setQueryData(
        ["competencias", updateCompetencia?.competenciaId],
        {
          ...previousCompetencia,
          ...updateCompetencia.data,
          id: updateCompetencia.competenciaId,
        }
      );

      return { previousCompetencia: previousCompetencia };
    },
    onError: (_, __, context: any) => {
      if (context?.previousComments) {
        queryClient.setQueryData(
          ["competencias", context.previousComments.id],
          context.previousComments
        );
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["competencias", data.id]);
      addNotification({
        type: "success",
        title: "Competência Alterada com Sucesso.",
      });
    },
    ...config,
    mutationFn: updateCompetencia,
  });
};

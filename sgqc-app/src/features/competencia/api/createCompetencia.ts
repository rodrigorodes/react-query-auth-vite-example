import { axios } from "@/lib/axios";
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
  config?: MutationConfig<typeof createComment>;
};

export const createComment = (data: CreateCompetenciaDTO): Promise<void> => {
  return axios.post("/competencias", data);
};

export const competenciaCreate = ({ config }: Options = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (newCompetencia: CreateCompetenciaDTO) => {
      await queryClient.cancelQueries(["competencias"]);

      const previousCompetencia = queryClient.getQueryData<Competencia[]>([
        "competencias",
      ]);

      queryClient.setQueryData(
        ["competencias"],
        [...(previousCompetencia || []), newCompetencia.data]
      );

      return { previousCompetencia: previousCompetencia };
    },
    onError: (_, __, context: any) => {
      if (context?.previousComments) {
        queryClient.setQueryData(
          ["competencias"],
          context.previousComments
        );
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["competencias"]);
      addNotification({
        type: "success",
        title: "Competencia Criada com Sucesso.",
      });
    },
    ...config,
    mutationFn: createComment,
  });
};

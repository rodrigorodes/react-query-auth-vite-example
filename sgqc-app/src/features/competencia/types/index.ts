import { BaseEntity } from '@/types';

export type Competencia = {
  competenciaId: string;
  name: string;
  description: string;
  dateCreate: string;
} & BaseEntity;

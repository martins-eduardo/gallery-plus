import { z } from 'zod'

export const photoNewFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .max(25, { message: 'Limite de 255 caracteres atingido' }),
  file: z.instanceof(FileList).refine((file) => file.length > 0, {
    message: 'Campo obrigatório',
  }),
  albumsIds: z.array(z.string().uuid()).optional(),
})

export type PhotoNewFormSchema = z.infer<typeof photoNewFormSchema>

import { z } from "zod";

export const apiDtoSchema = z.object({
  data: z.unknown(),
  meta: z.unknown().optional(),
});

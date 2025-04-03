import {z} from "zod"

export type DescriptionType = z.infer<typeof DescriptionObject>;
export const DescriptionObject = z.object({
    id: z.string(),
    title: z.string(),
    desc: z.string(),
});
import {z} from "zod";

export type SkillType = z.infer<typeof SkillObject>;
export const SkillObject = z.object({
    id: z.string(),
    name: z.string(),
    max_level: z.number(),
    element: z.string(),
    type: z.string(),
    type_text: z.string(),
    effect: z.string(),
    effect_text: z.string(),
    simple_desc: z.string(),
    desc: z.string(),
    params: z.array(z.array(z.number())),
    icon: z.string(),
});

export type RankType = z.infer<typeof RankObject>;
export const RankObject = z.object({
    id: z.string(),
    name: z.string(),
    rank: z.number(),
    desc: z.string(),
    materials: z.array(z.object({
        id: z.string(),
        num: z.number(),
    })),
    level_up_skills: z.array(z.object({
        id: z.string(),
        num: z.number(),
    })),
    icon: z.string()
});

export type SkillTreeType = z.infer<typeof SkillTreeObject>;
export const SkillTreeObject = z.object({
    id: z.string(),
    name: z.string(),
    max_level: z.number(),
    desc: z.string(),
    params: z.array(z.array(z.number())),
    anchor: z.string(),
    pre_points: z.array(z.string()),
    level_up_skills: z.array(z.object({
        id: z.string(),
        num: z.number(),
    })),
    levels: z.array(z.object({
        promotion: z.number(),
        level: z.number(),
        properties: z.array(z.object({
            type: z.string(),
            value: z.number(),
        })),
        materials: z.array(z.object({
            id: z.string(),
            num: z.number(),
        }))
    })),
    icon: z.string(),
});
import {z} from "zod"

import {CharacterObject, ElementObject, PathObject} from "@/utils/types/game";
import {RankObject, SkillObject, SkillTreeObject} from "@/utils/types/skill";

export const CharacterDataObject = z.object({
    character: CharacterObject,
    element: ElementObject,
    path: PathObject,
    ranks: z.array(RankObject),
    skills: z.array(SkillObject),
    skill_trees: z.array(SkillTreeObject),
});

export type CharacterDataType = z.infer<typeof CharacterDataObject>;


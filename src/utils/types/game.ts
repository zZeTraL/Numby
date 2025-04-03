import {z} from "zod";

import {SkillObject, SkillTreeObject, RankObject} from "@/utils/types/skill";
import {DescriptionObject} from "@/utils/types/description";

/*
 * This file contains all the types that are used in the game
 * - AchievementObject
 * - AvatarObject
 * - DescriptionObject
 * - ElementObject
 * - ItemObject
 * - NicknameObject
 * - PathObject
 * - PropertyObject
 */

export type ElementType = z.infer<typeof ElementObject>;
export const ElementObject = z.object({
    id: z.string(),
    name: z.string(),
    desc: z.string(),
    color: z.string(),
    icon: z.string()
});

export type PathType = z.infer<typeof PathObject>;
export const PathObject = z.object({
    id: z.string(),
    text: z.string(),
    name: z.string(),
    desc: z.string(),
    icon: z.string(),
    icon_middle: z.string(),
    icon_small: z.string(),
});

export type CharacterType = z.infer<typeof CharacterObject>;
export const CharacterObject = z.object({
    id: z.string(),
    name: z.string(),
    tag: z.string(),
    rarity: z.number().min(4).max(5),
    path: z.string(),
    element: z.string(),
    max_sp: z.number(),
    ranks: z.array(z.string()),
    skills: z.array(z.string()),
    skill_trees: z.array(z.string()),
    icon: z.string(),
    preview: z.string(),
    portrait: z.string(),
});

// Object that will contain all the data such as ElementObject[], ArtifactObject[] and so on
export type DataType = z.infer<typeof DataObject>;
export const DataObject = z.object({
    elements: z.array(ElementObject).optional(),
    paths: z.array(PathObject).optional(),
    characters: z.array(CharacterObject).optional(),
    character_ranks: z.array(RankObject).optional(),
    character_skills: z.array(SkillObject).optional(),
    character_skill_trees: z.array(SkillTreeObject).optional(),
    descriptions: z.array(DescriptionObject).optional(),
});
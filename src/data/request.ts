import {CharacterType, DataObject, DataType} from "@/utils/types/game";
import {CharacterDataObject, CharacterDataType} from "@/utils/types/character";


/**
 * <p>Fetch a resource from the server based on the locale and file name</p>
 * <p>Result will be cached using <strong>use cache</strong> from NextJS</p>
 * @param locale
 * @param fileName
 */
export async function getResource(locale: string, fileName : string) {
    "use cache"
    return await fetch(`http://localhost:3000/data/index_min/${locale}/${fileName}.json`, {
        method: "GET",
        next: {
            revalidate: 9999999999
        }
    }).then((res => res.json()));
}

/**
 * Fetch files from the server based on the locale
 * @param locale - In which language to fetch the data
 * @param files - array of file names to fetch
 * @param asArray - if true, each object will be converted to an array of values (for map purposes)
 */
export async function getGameData(locale: string, files: string[], asArray?: boolean): Promise<DataType> {
    let result : any = {};
    await Promise.all(
        files.map(async (fileName: string) => {
            result[fileName] = asArray ? Object.values(await getResource(locale, fileName)) : await getResource(locale, fileName);
        })
    );
    // zod validation
    if (asArray) DataObject.parse(result);
    return result;
}

export async function getCharacterDataByTag(locale: string, tag: string) : Promise<CharacterDataType | null> {
    "use cache"
    const data = await getGameData(locale, ["characters", "elements", "paths", "character_skill_trees", "character_skills", "character_ranks"]);
    if (!data.characters || !data.paths || !data.elements || !data.character_ranks || !data.character_skills || !data.character_skill_trees) return null;

    const character = Object.values(data.characters).find((character: CharacterType) => character.tag === tag);
    const element = Object.values(data.elements).find((element) => element.id === character?.element);
    const path = Object.values(data.paths).find((path) => path.id === character?.path);
    const ranks = Object.values(data.character_ranks).filter((rank) => character?.ranks.includes(rank.id));
    const skills = Object.values(data.character_skills).filter((skill) => character?.skills.includes(skill.id));
    const skill_trees = Object.values(data.character_skill_trees).filter((skill_tree) => character?.skill_trees.includes(skill_tree.id));

    if (!character || !element || !path || !ranks || !skills || !skill_trees) return null;
    return {character, element, path, ranks, skills, skill_trees};
}
import {z} from "zod";

export const SidebarLinkObject = z.object({
    tl: z.string().nonempty(),
    path: z.string(),
    icon: z.string(),
    default: z.string()
});

export type SidebarLinkType = z.infer<typeof SidebarLinkObject>;

export const sidebarLinks = z.array(SidebarLinkObject).parse([
    {
        tl: "home",
        path: "/",
        icon: "QuestMainIcon.png",
        default: "home"
    },
    {
        tl: "characters",
        path: "/characters",
        icon: "AvatarIcon.png",
        default: "characters"
    },
    {
        tl: "warp_counter",
        path: "/warp_counter",
        icon: "DrawcardIcon.png",
        default: "warp_counter"
    },
    {
        tl: "calculator",
        path: "/calculator",
        icon: "Maze03Icon.png",
        default: "warp_counter"
    },
    {
        tl: "timeline",
        path: "/timeline",
        icon: "ActivityIcon.png",
        default: "timeline"
    },
    {
        tl: "settings",
        path: "/settings",
        icon: "SettingsIcon.png",
        default: "settings"
    },
    {
        tl: "items",
        path: "/items",
        icon: "InventoryFosterIcon.png",
        default: "items"
    },
    {
        tl: "artifacts",
        path: "/artifacts",
        icon: "NovicePrestigeIcon.png",
        default: "artifacts"
    },
    {
        tl: "light_cones",
        path: "/light_cones",
        icon: "MazeSkillIcon.png",
        default: "light cones"
    },
    {
        tl: "success",
        path: "/success",
        icon: "AchievementIcon.png",
        default: "success"
    }
]);
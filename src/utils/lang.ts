export const displayLocaleLabel = (locale: string) => {
    switch (locale) {
        case "en":
            return "English";
        case "fr":
            return "Français";
        case "kr":
            return "한국어";
        default:
            return locale;
    }
}
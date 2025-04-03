export const descFormatByTitle = (title: string | undefined) => {
    if (!title) return
    switch (title) {
        case "Tribbie":
            return "Tribbie, Trianne, and Trinnon";
        default:
            return title;
    }
}
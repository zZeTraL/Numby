// Components
import WelcomeCard from "@/components/cards/WelcomeCard";
import ImportWarpCard from "@/components/cards/ImportWarpCard";

export default function Home() {
    return (
        <div className="flex gap-4 max-lg:flex-col flex-row">
            <div className="flex flex-col gap-4">
                <WelcomeCard/>
                <ImportWarpCard/>
            </div>
            <div className="flex flex-col gap-4">
                <ImportWarpCard/>
            </div>
            <div className="flex flex-col gap-4">
                <ImportWarpCard/>
            </div>
        </div>
    );
}

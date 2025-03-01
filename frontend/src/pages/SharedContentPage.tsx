import { useShare } from "../hooks/useShare";
import { Card } from "../components/dashboardComponents/Card";

export function SharedContentPage() {
    const { shareContent } = useShare();

    return (
        <div className="p-4 min-h-screen bg-gray-100 flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Shared Content</h1>
            <div className="flex flex-wrap gap-4">
                {shareContent.length > 0 ? (
                    shareContent.map(({ _id, title, type, link }) => (
                        <Card 
                            key={_id} 
                            title={title} 
                            link={link} 
                            type={type} 
                            onClick={() => console.log("Clicked on shared content")} 
                        />
                    ))
                ) : (
                    <p className="text-gray-600">No content found.</p>
                )}
            </div>
        </div>
    );
}

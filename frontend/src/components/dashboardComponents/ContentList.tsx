import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import { CreateContentModal } from "./CreateContentModal";
import { PlusIcon } from "../../icons/PlusIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { Sidebar } from "./Sidebar";
import { useContent } from "../../hooks/useContent";
import axios from "axios";

export function ContentList({ filterType}: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  const handleShare = async () => {
    const response = await axios.post("http://localhost:3000/api/v1/brain/share", {
      share: true,
    }, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const shareURL = `http://localhost:5173/share/${response.data.hash}`;
    navigator.clipboard.writeText(shareURL);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-200">
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

        <div className="flex justify-end pr-4 gap-4">
          <Button onClick={handleShare} variant="secondary" text="Share Brain" startIcon={<ShareIcon />} />
          <Button onClick={() => setModalOpen(true)} variant="primary" text="Add Content" startIcon={<PlusIcon />} />
        </div>

        <div className="flex gap-4 pt-4 flex-wrap">
          {contents
            .filter(({ type }) => !filterType || type === filterType)
            .map(({ _id, title, type, link }) => (
              <Card onClick={() => {
                console.log("Deleting ID:", _id);
                axios.delete("http://localhost:3000/api/v1/dashboard/content/", {
                  data: {
                    contentId: _id
                  },
                  headers: {
                    Authorization: localStorage.getItem("token")
                  },
                });
              }} key={_id} type={type} link={link} title={title} />
            ))}
        </div>

        {showPopup && (
          <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
            URL copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}

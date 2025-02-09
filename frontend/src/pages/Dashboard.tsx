import { useEffect, useState } from "react"
import { Button } from "../components/dashboardComponents/Button"
import { Card } from "../components/dashboardComponents/Card"
import { CreateContentModal } from "../components/dashboardComponents/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/dashboardComponents/Sidebar"
import { useContent } from "../hooks/useContent"
import axios from "axios"

export function Dashboard() {
  const[modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    refresh();
  }, [modalOpen])

  return <div>
    <Sidebar />

    <div className="p-4 ml-72 min-h-screen bg-gray-200">
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />

      <div className="flex justify-end pr-4 gap-4">
        <Button onClick={async() => {
          const response = await axios.post("http://localhost:3000/api/v1/brain/share", {
             share: true
          }, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          });
          const shareURL = `http://localhost:5173/share/${response.data.hash}`;
          // to copy URL to the clipboard
          navigator.clipboard.writeText(shareURL);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);                                    // Hide the popup after 3 seconds
        }} variant="secondary" text="Share Brain" startIcon={ <ShareIcon /> } />

        <Button onClick={()=> {
          setModalOpen(true);
        }} variant="primary" text="Add Content" startIcon={ <PlusIcon/> } />
      </div>

      <div className="flex gap-4 pt-4 flex-wrap">
        {contents.map(({title, type, link}) => <Card 
          type={type}
          link={link}
          title={title}
        />)}
      </div>
      {/* // popup message */}
      {showPopup && (
          <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
            URL copied to clipboard!
          </div>
      )}
    </div>
  </div>
}
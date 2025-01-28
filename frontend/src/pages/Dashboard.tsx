import { useState } from "react"
import { Button } from "../components/dashboardComponents/Button"
import { Card } from "../components/dashboardComponents/Card"
import { CreateContentModal } from "../components/dashboardComponents/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/dashboardComponents/Sidebar"
import { useContent } from "../hooks/useContent"

export function Dashboard() {
  const[modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  return <div>
    <Sidebar />

    <div className="p-4 ml-72 min-h-screen bg-gray-200">
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />
      <div className="flex justify-end pr-4 gap-4">
        <Button variant="secondary" text="Share Brain" startIcon={ <ShareIcon /> } />
        <Button onClick={()=> {
          setModalOpen(true);
        }} variant="primary" text="Add Content" startIcon={ <PlusIcon/> } />
      </div>
      <div className="flex gap-4">
        {contents.map(({title, type, link}) => <Card 
          type={type}
          link={link}
          title={title}
        />)}
      </div>
    </div>
  </div>
}
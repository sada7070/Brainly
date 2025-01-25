import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {
  return <div className="p-4">
    <div className="flex justify-end pr-4 gap-4">
      <Button variant="secondary" text="Share Brain" startIcon={ <ShareIcon /> } />
      <Button variant="primary" text="Add Content" startIcon={ <PlusIcon/> } />
    </div>
    <div className="flex gap-4">
      <Card type="twitter" link="https://x.com/sada_7070/status/1874317217250332784" title="new year resolution" />
      <Card type="youtube" link="https://www.youtube.com/watch?v=mvhuyAuJOjY" title="Building meme coin trading bot" />
    </div>
  </div>
}

export default App;
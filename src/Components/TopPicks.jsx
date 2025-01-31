import DisplayProduct from "./DisplayProduct"
import { topPicksData } from "../utils/HomePageData"
const TopPicks = () => {
  return (
    <div>
        <DisplayProduct data={topPicksData}/>
    </div>
  )
}

export default TopPicks
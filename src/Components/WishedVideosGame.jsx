import DisplayProduct from "./DisplayProduct"
import { WishedVideosGameData } from "../utils/HomePageData"
const WishedVideosGame = () => {
  return (
    <div>
        <DisplayProduct data={WishedVideosGameData}/>
    </div>
  )
}

export default WishedVideosGame
import coffe from "../asserts/images/coffe.jpg"

import sunset from "../asserts/images/sunset.jpg"
import constandData from "../shared/constant/constantData"

const MyImagesCom = () => {
    return(
        <div>
            <h2>MyImage Component</h2>
            <img src={coffe} alt="coffe" height="200px" width="200px" />
            <img src={sunset} alt="sunset" height="200px" width="200px" />
            <img src={constandData.EmojiRocket} alt="sunset" height="200px" width="200px" />

            <video src={constandData.video1} height="200px" width="200px" controls autoplay muted />

            
        </div>
    );
}
export default MyImagesCom;
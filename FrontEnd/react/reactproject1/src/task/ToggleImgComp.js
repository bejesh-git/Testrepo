import {Component} from 'react';
import taskImage from './TaskImages';
import cssFile from "./ToggleImgComp.module.css";

class ToggleImgComp extends Component {


    constructor(props) {
        super(props);
        this.state = {
            currentImage: 'sunset',
            bgImage : 'sunsetblur'
        };
    }


    cycleimage = () => {
        const {currentImage, bgImage} = this.state;
        currentImage == "bird" && this.setState({currentImage:"sunset", bgImage:"sunsetblur"}) 
        currentImage == "sunset" && this.setState({currentImage:"bird", bgImage:"birdblur"})
    }
    
    render(){
        const {currentImage, bgImage} = this.state;
        const displayImage = taskImage[currentImage];
        const backgroundImage = `url(${taskImage[bgImage]})`;
        
        return(
            <div className={`${cssFile.outercontainer1} mt-5`} id="outercontainer1" style={{backgroundImage:backgroundImage}}>
                <div className={cssFile.container1}>

                    <img src={displayImage} alt={currentImage} id={cssFile.cycleimage} />

                    <button type="button" className="btn btn-danger" id={cssFile.cyclebutton} onClick={this.cycleimage}>Cycle</button>

                </div>
            </div>
        );
    }
}
    
export default ToggleImgComp;
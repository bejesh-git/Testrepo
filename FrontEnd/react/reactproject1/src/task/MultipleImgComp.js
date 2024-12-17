import React, { Component } from 'react';
import taskImage from './TaskImages';
import cssFile from "./MultipleImgComp.module.css";

class MultipleImgComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActor: 'Vijay',
        };
    }

    setActor = (act_name) => {
        this.setState({ currentActor: act_name });
    };

    render() {
        const { currentActor } = this.state;
        const actorImage = taskImage[currentActor.toLowerCase()];
        const actorName = currentActor;

        return (
            <div className={`${cssFile.container} mt-5`}>
                <div className="row">
                    <div className={`col-12 ${cssFile.centerrow}`}>
                        <img className={`${cssFile.con2Img}`} src={actorImage} alt={actorName} id="actor-image" />
                    </div>
                </div>
                <div className="row">
                    <div className={`col-12 ${cssFile.center_row}`}>
                        <p className="text-danger-emphasis" id="actor-name">{actorName}</p>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-3">
                        <button className={`${cssFile.btn} btn btn-warning`} type="button" onClick={() => this.setActor("Samantha")}>Samantha</button>
                    </div>
                    <div className="col-3">
                        <button className={`${cssFile.btn} btn btn-warning`} type="button" onClick={() => this.setActor("Prabhas")}>Prabhas</button>
                    </div>
                    <div className="col-3">
                        <button className={`${cssFile.btn} btn btn-warning`} type="button" onClick={() => this.setActor("Rajni")}>Rajni</button>
                    </div>
                    <div className="col-3">
                        <button className={`${cssFile.btn} btn btn-warning`} type="button" onClick={() => this.setActor("Vijay")}>Vijay</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MultipleImgComp;

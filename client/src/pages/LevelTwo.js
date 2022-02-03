import React from "react";
import { Link, withRouter } from "react-router-dom";
import LevelHeader from "../components/LevelHeader";
import MergeSort from "../algorithms/mergeSort.mjs";

class LevelTwo extends React.Component {

    render() {

        let split = [];
        let merge = [];
        var sorting = new MergeSort(1, 20, 10);
        let sorted = sorting.sort(sorting.getArray(), split, merge);

        let storageSplit = [];
        let storageMerge = [];
        let allElements = [];

        let temp = [];

        console.log(storageSplit);

        for (let i = 0; i < split.length; i++) {
        let index = split[i].charAt(0);
        let data = split[i].slice(2);

        if (!temp.includes(index)) {
            storageSplit.push([[data]]);
            temp.push(index);
        } else {
            storageSplit[index].push([data]);
        }
        }

        for (let i = 0; i < storageSplit[0][0][0].split(",").length; i++) {
            allElements.push(storageSplit[0][0][0].split(",")[i]);
        }

        temp = [];

        for (let i = merge.length - 1; i >= 0; i--) {
            let index = merge[i].charAt(0);
            let data = merge[i].slice(2);

            if (!temp.includes(index)) {
                storageMerge.push([[data]]);
                temp.push(index);
            } else {
                storageMerge[index].push([data]);
            }
        }

        storageMerge.reverse();
        for (let i = 0; i < storageMerge.length; i++) storageMerge[i].reverse();

        function choosePivot(e) {
            let pivot = this;
            console.log(pivot);
        }

        return (
            <div>
                {/* header */}
                <LevelHeader />
                <div className="header"></div>
                <div className="body">
                    <div className="alg-steps">
                        <div>
                            <div className="columns mx-6">
                                {allElements.map((element) => {
                                    return (
                                        <button className="column box"
                                                onClick={choosePivot.bind(this)}
                                                //onClick={console.log(element)}
                                                >
                                            <div id="">{element}</div>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="columns mx-6">
                                {storageSplit[1].map((element) => {
                                return (
                                    <button className="column">
                                    {element.map((innerElement) => {
                                    return <div className="column box">{innerElement}</div>;
                                    })}
                                    </button>
                                );
                                })}
                            </div>

                            <div className="columns mx-6">
                                {storageSplit[2].map((element) => {
                                return (
                                    <button className="column">
                                    {element.map((innerElement) => {
                                    return <div className="column box">{innerElement}</div>;
                                    })}
                                    </button>
                                );
                                })}
                            </div>

                            <div className="columns mx-6">
                                {storageSplit[3].map((element) => {
                                return (
                                    <button className="column">
                                    {element.map((innerElement) => {
                                    return <div className="column box">{innerElement}</div>;
                                    })}
                                    </button>
                                );
                                })}
                            </div>

                            <div className="columns mx-6">
                                    <button className="column">
                                        <div className="column box">{sorted}</div>;
                                    </button>
                            </div>

                            <div className="columns mx-6">
                                {storageMerge[1].map((element) => {
                                return (
                                    <button className="column">
                                    {element.map((innerElement) => {
                                    return <div className="column box">{innerElement}</div>;
                                    })}
                                    </button>
                                );
                                })}
                            </div>

                            <div className="columns mx-6">
                                {storageMerge[2].map((element) => {
                                return (
                                    <button className="column">
                                    {element.map((innerElement) => {
                                    return <div className="column box">{innerElement}</div>;
                                    })}
                                    </button>
                                );
                                })}
                            </div>
                                
                        <div className="columns mx-6">
                            <div className="column box">
                                {sorted}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LevelTwo);
import React from "react";
import { Link, withRouter } from "react-router-dom";
import LevelHeader from "../components/LevelHeader";

class LevelTwo extends React.Component {
    render() {
        return (
            <div>
                {/* header */}
                <LevelHeader/>
                <div className="">
                    <div class="columns is-vcentered">
                        <column class="column is-one-tenth">#</column>
                        <column class="column is-one-tenth">#</column>
                        <column class="column is-one-tenth">#</column>
                        <column class="column is-one-tenth">#</column>
                        <column class="column is-one-tenth">#</column>
                    </div>
                </div>

            </div>
        );
    }
}
export default withRouter(LevelTwo);
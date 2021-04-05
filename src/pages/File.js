import React from "react";
import { Link } from "react-router-dom";

export default function File() {

    console.log(global.world);

    const goToActivityIcon = () => {
        console.log("EEE");
    }

    return (
        <div>
            <Link to="/">
                Home
            </Link>

            <Link to="/list">
                <button disabled={false} onClick={goToActivityIcon}>Activity Icon</button>
            </Link>
            <button disabled={true} onClick={goToActivityIcon}>stuff 1</button>
            <button disabled={true} onClick={goToActivityIcon}>stuff 2</button>
            <button disabled={true} onClick={goToActivityIcon}>stuff 3</button>


        </div>
    );
}
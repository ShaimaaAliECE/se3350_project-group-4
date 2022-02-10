import { useState, useRef } from "react";
import MergeSort from "../utils/sorting/MergeSort.js";
import ArrayGroup from "./ArrayGroup.jsx";
import WalkThrough from "./WalkThrough.jsx";

import {
    Grid,
    TextField,
    Button,
    AppBar,
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormLabel,
    Toolbar
} from '@mui/material'

/**
 * Navigation bar at top of screen, add elements to the toolbar part like drop downs etc
 *
 */

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <div>Array Sorting Game</div>
            </Toolbar>
        </AppBar>
    )
}

/**
 * React component containing all functionality related to the sorting game (renders the game)
 * @param props 
 */
export default function Game(props) {
    // State initialization
    const isRunning = useRef(false); // Game is not running by default (give users a chance to set game parameters)
    const [gameArray, setGameArray] = useState([]); // Multi-dimensional array that stores each "layer" of the merge sort
    const [mergedArray, setMergedArray] = useState([]);

    const [gameType, setGameType] = useState("Merge Sort") //for picking between the different sorting
    const [gameMode, setGameMode] = useState("playable") //for picking between walkthrough or playable

    //size, range state -> array params
    const [range, setRange] = useState(10);
    const [size, setSize] = useState(10);

    function setMerged(value) {
        // Add value to merged array
    }

    function startGame(mode) {
        //pass in game mode for determining which button was pushed, start game or walkthough
        if (!isRunning.current) {
            let numArray = MergeSort(new Number(size), new Number(range));
            setGameArray(numArray);
            setGameMode(mode)
            isRunning.current = true;
        }
    }

    return (
        <div id="sorting-game">
            <NavBar />
            <div id="game-menu" style={{ marginTop: 15, marginLeft: 20, display: 'flex', flexDirection: 'row' }}>
                <FormControl style={{ width: 200 }}>
                    <FormLabel id="demo-controlled-radio-buttons-group">Algorithim Type</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={gameType}
                        onChange={(event) => setGameType(event.target.value)}
                    >
                        <FormControlLabel
                            style={{ marginTop: 10 }}
                            value="Merge Sort"
                            control={<Radio />}
                            label="Merge Sort"
                        />
                        <FormControlLabel
                            style={{ marginTop: 10 }}
                            value="Quick Sort"
                            control={<Radio />}
                            label="Quick Sort"
                        />
                    </RadioGroup>
                </FormControl>
                <Grid container style={{ marginLeft: 60 }}>
                    <Grid item xs={4} xs={{ display: 'flex', flexDirection: 'row' }}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Array content</FormLabel>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField
                                style={{ marginTop: 10 }}
                                value={range}
                                onChange={(event) => setRange(event.target.value)}
                                label="Range"
                                id="outlined-size-small"
                                defaultValue="Small"
                                size="small"
                            ></TextField>
                            <TextField
                                style={{ marginTop: 20 }}
                                value={size}
                                onChange={(event) => setSize(event.target.value)}
                                label="Size"
                                id="outlined-size-small"
                                defaultValue="Small"
                                size="small"
                            ></TextField>
                        </div>
                    </Grid>
                    <div style={{ marginLeft: 70, marginTop: 50 }}>
                        {/* this section is for button display, either clear game or the start game options are shown*/}
                        {(!isRunning.current) ? (
                            //buttons for starting or doing the walkthough, need to be styled
                            <>
                                <Button
                                    onClick={() => startGame("playable")}
                                    variant="contained"
                                    style={{ width: 140, height: 50 }}
                                >Start Game</Button>
                                <Button
                                    onClick={() => startGame("walkthrough")}
                                    variant="contained"
                                    style={{ width: 140, height: 50 }}
                                >WalkThrough</Button>
                            </>
                        ) : (
                            <Button
                                onClick={() => {
                                    setGameArray([]);
                                    isRunning.current = false;
                                }}
                                style={{ width: 140, height: 50 }}
                                variant="contained"
                            >Clear Game</Button>
                        )}
                    </div>
                </Grid>
            </div>
            <div>
                {(isRunning.current) ? (
                    //for loading the game, if game is running then...
                    (gameMode === "playable") ? (
                        //if gamemode is playable then load the array group
                        <ArrayGroup
                            gameRunning={isRunning}
                            label="Root Array"
                            depth={0}
                            key={1}
                            index={1}
                            mergedArray={mergedArray}
                            pushToMerged={setMerged}
                            numArray={gameArray[0][1]}
                        />
                    ) : (
                        //if gamemode is anything else load the walkthrough
                        <WalkThrough
                            numArray={gameArray}
                        />
                    )

                ) : (
                    //else for nothing if game isnt running
                    <></>
                )}
            </div>
        </div>
    )
}

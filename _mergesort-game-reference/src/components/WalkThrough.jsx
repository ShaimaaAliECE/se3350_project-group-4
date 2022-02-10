import { Button, Grid } from '@mui/material'


export default function WalkThrough(props) {
    //only thing i changed is the num array is already created so i passed it as a prop

    let walkThrough = []
    let numArray = props.numArray

    for (let i = 0; i < numArray.length; i++) {
        let row = []
        row.push(<strong>{numArray[i][0]}</strong>)
        for (let j = 0; j < numArray[i][1].length; j++) {
            console.log(numArray[i][1][j])
            row.push(<Button disabled="true"> {numArray[i][1][j]}</Button>)
        }
        walkThrough.push(<Grid>{row}</Grid>);
    }

    return (
        <div>
            {walkThrough}
        </div>
    )
}
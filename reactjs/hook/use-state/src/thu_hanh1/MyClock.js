import useClock from "../hooks/useClock";

export default function MyClock(){
    const [time,ampm]=useClock()
    return(
        <div>
            {time}
            <span>{ampm}</span>
        </div>
    )
}
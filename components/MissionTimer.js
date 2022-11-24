import styles from "../styles/MissionTimer.module.css";
import GetData from '../components/GetData'

function msToHMS( duration ) {

    var milliseconds = parseInt((duration % 1000) / 100),
       seconds = parseInt((duration / 1000) % 60),
       minutes = parseInt((duration / (1000 * 60)) % 60),
       hours = parseInt((duration / (1000 * 60 * 60)) % 24);

     hours = (hours < 10) ? "0" + hours : hours;
     minutes = (minutes < 10) ? "0" + minutes : minutes;
     seconds = (seconds < 10) ? "0" + seconds : seconds;

     return hours + ":" + minutes + ":" + seconds ;
}

function GetTimer() {
    // Data get and assertions
    let { returndata, isLoading, isError } = GetData('missiontime');
    
    if (isError) {
        console.warn('MissionTimer> Invalid data');
        return ("T + (TIMER ERROR [0])")
    } else if (isLoading) {
        return ("T + (TIMER LOADING)");
    } else if (returndata == null) {
        return ("T + (TIMER ERROR [1])");
    }

    // Conditioning
    returndata = returndata.message

    let final;
    if (returndata < 0) {
        returndata = msToHMS(returndata)
        final = "T - " + returndata.toString()
    } else {
        returndata = msToHMS(returndata)
        final = "T + " + returndata.toString()
    }

    return final
}

function MissionTimer() {
    return (
        <div className={styles.missiontimer}>
            <p>{GetTimer()}</p>
        </div>
    );
}

export default MissionTimer
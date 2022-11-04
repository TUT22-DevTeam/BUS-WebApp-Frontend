
import styles from '../styles/components/TimeTable.module.css'
const crowdImg = ["icons/few.png", "icons/little.png", "icons/medium.png", "icons/many.png"]

/*
crowdData: 人数データ
currentTime: 現在の時間(hours)
timeAry: 今から6時間後の時刻を格納した配列
userSel: ユーザーが選択した時刻
*/

const getBusTime = (crowdData, timeAry) => {
    var lists = []; // 初期化
    crowdData.map((val, key) => {
        lists.push(
            <div className={`columns ${styles.timeBox}`} key={key} >
                <div className={`column col-6 ${styles.middle}`}>
                    <span className={styles.crwtext}>
                        {timeAry[key]}
                        <span className={styles.smallPeople}>分</span>～</span>
                    <span className={styles.crwtext}>
                        {timeAry[key + 1]}
                        <span className={styles.smallPeople}>分</span>
                    </span>
                </div>
                <div className="column col-2">
                    <img className={`${styles.crowicon} ${styles.crowicon}`} src={val >= 100 ? crowdImg[3] : val >= 50 ? crowdImg[2] : val >= 20 ? crowdImg[1] : crowdImg[0]}></img>
                </div>
                <div className={`column col-4 ${styles.middleR}`}><span className={styles.crwtext}>{val} <span className={styles.smallPeople}>人</span></span>
                </div>
            </div >
        )
    }); // 配列の要素を順に処理
    return lists;
}

export default function timeTable(props) {
    return (
        <>
            <div className="container">
                {!(props.crowdData.length == 0) ?
                    getBusTime(props.crowdData, props.busTimeAry) :
                    <div className="columns error-box m-2">
                        <div className={`column col-auto ${styles.middle}`}><i className="gg-smile-sad"></i></div>
                        <div className="column">データの取得に失敗しました (E1000)</div>
                    </div>}
            </div>
        </>
    )
}
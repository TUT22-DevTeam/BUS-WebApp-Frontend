import Image from 'next/image'
import styles from '../styles/components/TimeTable.module.css'
const crowdImg = ["/icons/few.png", "/icons/little.png", "/icons/medium.png", "/icons/many.png"]

/*
currentData: すべての人数データ
timeAry: 今から6時間後の時刻を格納した配列
currentStaId: ユーザが指定した駅 (0:八王子駅, 1:八王子みなみ野駅)
selectUserNum: ユーザーが選択した時刻
*/

const getBusTime = (currentData, timeAry, currentStaId, selectUserNum) => {
    var lists = []; // 初期化
    currentData[currentStaId][selectUserNum].map((val, key) => {
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
                    <Image
                        className={`${styles.crowicon} ${styles.crowicon}`}
                        width={127}
                        height={127}
                        src={val >= 100 ? crowdImg[3] : val >= 50 ? crowdImg[2] : val >= 20 ? crowdImg[1] : crowdImg[0]} // 人数のしきい値によって画像を変更
                        alt='混雑表示アイコン' />
                </div>
                <div className={`column col-4 ${styles.middleR}`}><span className={styles.crwtext}>{val} <span className={styles.smallPeople}>人</span></span>
                </div>
            </div >
        )
    }); // 配列の要素を順に処理
    return lists;
}

export default function TimeTable(props) {
    if (props.currentData) {
        if (props.currentData.length == 2) { // データが2つ存在する場合(空配列エラーを回避)
            return (
                getBusTime(props.currentData, props.busTimeAry, props.currentStaId, props.selectUserNum) //テーブル生成関数
            )
        } else {
            return (
                <div className={`columns ${styles.errorBox}`}>
                    <div className="column text-center"><div className="loading loading-lg m-2"></div> しばらくお待ち下さい...</div>
                </div>
            )
        }
    } else {
        return (
            <div className={`columns m-2 ${styles.errorBox}`}>
                <div className={`column col-auto ${styles.middle}`}><i class="gg-close-o"></i></div>
                <div className="column">データの取得に失敗しました。ページの再リロードをお試しください。</div>
            </div>
        )
    }
}
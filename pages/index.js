import { useState, useEffect } from "react";
import TimeTable from "../components/TimeTable";
import styles from '../styles/pages/index.module.css'
import SelectTimeBox from "../components/SelectTimeBox";
import SelectStaBox from "../components/SelectStaBox";

const getTime = (num) => { // 今からn時間後の時刻を取得する
  const date = new Date();
  date.setHours(date.getHours() + num);
  return date.getHours();
}

const busTimeAry = ["0", "10", "20", "30", "40", "50", "60"];
const timeAry = [...Array(6).keys()].map((d) => { return getTime(d) }); // 現在時刻から6時間後の時刻を配列に格納
const data1 = [ // 駅-大学
  [
    [100, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ],
  [
    [10000, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 10, 0, 0, 0, 0],
    [0, 0, 0, 900, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]
];

const data2 = [ // 大学-駅
  [
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ],
  [
    [40, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 30, 0, 0, 0, 0],
    [0, 0, 0, 40, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]
];

export default function Index() {
  const [currentData, setCurrentData] = useState([]); // 現在の混雑状況のデータ
  const [currentStaId, setCurrentStaId] = useState(0); // 0:八王子駅, 1:八王子みなみ野駅
  const [selectUserNum, setUserNum] = useState(0); // ユーザーが選択した時刻のインデックス番号
  const [isSta, setIsSta] = useState(true); // ユーザーが選択した時刻のインデックス番号

  useEffect(() => {
    isSta ? setCurrentData(data1) : setCurrentData(data2); // 発着切り替え
  }, [isSta]);

  return (
    <div className={`container grid-lg ${styles.boxMain}`}>
      <div className={`col-ms-12 ${styles.mainBox}`}>
        <div className={`container ${styles.CMargin}`}>
          <span className={`${styles.renew} ${styles.renewMsg}`}><i class="gg-check-o icon"></i>最新のデータに更新されました(3秒前)</span>
          <div className="form-group">
            <label className={`form-switch ${styles.swichM}`}>
              <span>発着 切り替えボタン</span>
              <input type="checkbox" onChange={() => { setIsSta(!isSta) }} /> {/* 駅発着切り替え */}
              <i className="form-icon"></i>
            </label>
          </div>
          <SelectStaBox
            currentStaId={currentStaId}
            setCurrentStaId={setCurrentStaId}
            isSta={isSta} />
          <SelectTimeBox
            timeAry={timeAry}
            selectUserNum={selectUserNum}
            setUserNum={setUserNum} />
        </div>
        <div className="container">
          <TimeTable
            currentData={currentData}
            busTimeAry={busTimeAry}
            currentStaId={currentStaId}
            selectUserNum={selectUserNum} />
        </div>
      </div>
    </div>
  )
}
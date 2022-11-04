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

const busTimeAry = ["00", "10", "20", "30", "40", "50", "60"];
const timeAry = [...Array(6).keys()].map((d) => { return getTime(d) }); // 今から6時間後の時刻を配列に格納
const data = [
  [
    [100, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ],
  [
    [100000, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]
];

console.log(timeAry)

export default function Index() {
  const [currentData, setCurrentData] = useState([]); // 現在の混雑状況のデータ
  const [currentStaId, setCurrentStaId] = useState(0); // 0:八王子駅, 1:八王子みなみ野駅
  const [crowdData, setcrowdData] = useState(data[0][0]); // 混雑状況のデータ時間別データが入るところ
  const [selectUserNum, setUserNum] = useState(0); // ユーザーが選択した時刻のインデックス番号

  useEffect(() => {
    setCurrentData(data); // データをセット
  }, []);

  return (
    <div className={`container grid-lg ${styles.boxMain}`}>
      <div className={`col-ms-12 ${styles.mainBox}`}>
        <div className={`container ${styles.CMargin}`}>
          <SelectStaBox currentStaId={currentStaId} setCurrentStaId={setCurrentStaId} setcrowdData={setcrowdData} currentData={currentData} selectUserNum={selectUserNum} />
          <SelectTimeBox setcrowdData={setcrowdData} currentStaData={currentData} timeAry={timeAry} selectUserNum={selectUserNum} setUserNum={setUserNum} currentStaId={currentStaId} />
        </div>
        <div className="container">
          <TimeTable busTimeAry={busTimeAry} crowdData={crowdData} />
        </div>
      </div >
    </div>
  )
}
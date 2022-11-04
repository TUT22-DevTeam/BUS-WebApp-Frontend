import { useState, useEffect } from "react";
import TimeTable from "../components/TimeTable";
import styles from '../styles/index.module.css'
import SelectTimeBox from "../components/SelectTimeBox";

const getTime = (num) => { // 今からn時間後の時刻を取得する
  const date = new Date();
  date.setHours(date.getHours() + num);
  return date.getHours();
}

const busTimeAry = ["00", "10", "20", "30", "40", "50", "60"];
const timeAry = [...Array(6).keys()].map((d) => { return getTime(d) }); // 今から6時間後の時刻を配列に格納
const minamino = [
  [100, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]

const hachi = [
  [100, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]

console.log(timeAry)

export default function index() {
  const [currentStaData, setCurrentStaData] = useState([]);
  const [crowdData, setcrowdData] = useState([]);
  const [selectUserNum, setUserNum] = useState(0);

  useEffect(() => {
    setCurrentStaData(hachi);
    setcrowdData(hachi[0]); // 現在時刻の人数データを挿入
  }, []);

  return (
    <div className={`container grid-lg ${styles.boxMain}`}>
      <div className={`col-ms-12 ${styles.mainBox}`}>
        <div className={`container ${styles.CMargin}`}>
          <SelectTimeBox setcrowdData={setcrowdData} currentStaData={currentStaData} timeAry={timeAry} selectUserNum={selectUserNum} setUserNum={setUserNum} />
          <TimeTable busTimeAry={busTimeAry} crowdData={crowdData} />
        </div>
      </div >
    </div>
  )
}
export default function timeTable(props) {
    return (
        <>
            <ul className="tab tab-block timetable">
                {Object.keys(props.timeAry).map((key) => {
                    return (
                        <li
                            key={key}
                            className={
                                key == 0 // 現在時刻のインデックス番号の場合
                                    ? "tab-item active" :
                                    props.selectUserNum == key // ユーザーが選択した時刻と一致したら
                                        ? "tab-item celected"
                                        : "tab-item"
                            }>
                            <a onClick={() => {
                                props.setUserNum(key)
                                props.setcrowdData(props.currentStaData[key])
                            }}>
                                {props.timeAry[key]} <span className="small">時台</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}
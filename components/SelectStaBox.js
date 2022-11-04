const staBox = (props) => {
    return (
        <ul className="tab tab-block">
            <li className={props.currentStaId == 0 ? "tab-item active" : "tab-item"}>
                <a className="staName" onClick={() => {
                    props.setCurrentStaId(0)
                    props.setcrowdData(props.currentData[0][props.selectUserNum]) // 八王子駅のデータをセット
                }}>
                    八王子<span className="small">駅</span>
                </a>
            </li>
            <li className={!(props.currentStaId == 0) ? "tab-item active" : "tab-item"}>
                <a className="staName" onClick={() => {
                    props.setCurrentStaId(1)
                    props.setcrowdData(props.currentData[1][props.selectUserNum]) // 八王子駅のデータをセット
                }}>
                    八王子みなみ野<span className="small">駅</span>
                </a>
            </li>
        </ul>
    )
}

export default function SelectStaBox(props) {
    return (
        !(props.currentData.length == 0) ? staBox(props) : <p>エラーが発生しました</p>
    )
}
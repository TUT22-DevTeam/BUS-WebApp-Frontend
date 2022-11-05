const staBox = (props) => {
    return (
        <ul className="tab tab-block">
            <li className={props.currentStaId == 0 ? "tab-item active" : "tab-item"}>
                <a className="staName" onClick={() => {
                    props.setCurrentStaId(0)
                }}>
                    八王子<span className="small">駅 {props.isSta ? "着" : "発"}</span>
                </a>
            </li>
            <li className={!(props.currentStaId == 0) ? "tab-item active" : "tab-item"}>
                <a className="staName" onClick={() => {
                    props.setCurrentStaId(1)
                }}>
                    八王子みなみ野<span className="small">駅 {props.isSta ? "着" : "発"}</span>
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
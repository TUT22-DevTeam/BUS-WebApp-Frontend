import styles from '../styles/components/SelectTimeBox.module.css'

export default function SelectTimeBox(props) {
    return (
        <>
            <ul className={`tab tab-block ${styles.timeTable}`}>
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
                            }}>
                                {props.timeAry[key]} <span className={styles.small}>時台</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}
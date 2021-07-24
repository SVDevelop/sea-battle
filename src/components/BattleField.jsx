import styles from './styles.module.css'


const BattleFild = ({children, style = {}}) => {
    return (
        <div className={styles.battlefild} style={style}>
            {children}
        </div>
    );
};

export default BattleFild
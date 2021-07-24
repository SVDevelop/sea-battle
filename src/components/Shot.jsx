import className from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react';
import { useSeaBattle } from '../hooks';
import styles from './styles.module.css'

const Shot = (props) => {
    const {x, y, status} = props
    const {cellSize} = useSeaBattle()

    const style = useMemo(() => {
        const style = {
            width: `${cellSize}px`,
            heigth: `${cellSize}px`
        }

         const offsetX = x * (cellSize + 1)
        const offsetY = y * (cellSize + 1)

        style.left = `${offsetX}px`
        style.top = `${offsetY}px`

        return style
    }, [cellSize, x, y])

    return (
        <div
            style={style} 
            className={className({
            [styles.shot]: true,
            [styles['shot-missed']]: status === 'missed',
            [styles['shot-hitted']]: status === 'hitted',
        })} />
    );
};

export default Shot

Shot.protoTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    status: PropTypes.oneOf(['hitted','missed']).isRequired,
}
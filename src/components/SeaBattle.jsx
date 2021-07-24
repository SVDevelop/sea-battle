import {createContext, useMemo} from 'react'
import PropTypes from 'prop-types'
 
export const SeaBattleContext = createContext()

const SeaBattle = (props) => {
    const {cellSize, children} = props
    const value = useMemo(()=> ({cellSize}), [cellSize])
    
    return (
        <SeaBattleContext.Provider value={value}>
            {children}
        </SeaBattleContext.Provider>
    );
};

export default SeaBattle

SeaBattle.protoTypes = {
    cellSize: PropTypes.number.isRequired,
}
SeaBattle.defaultTypes = {
    cellSize: 30
}
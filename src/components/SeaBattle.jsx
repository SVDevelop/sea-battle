import { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import Configure from './Configure'



export const SeaBattleContext = createContext();

const SeaBattle = (props) => {
	const { cellSize, children } = props;
    const {setup, setSetup} = Configure()

    console.log(setup);

	const value = useMemo(() => ({ cellSize: setup.cellSize }), [cellSize, setup]);

	return (
		<SeaBattleContext.Provider value={value}>
			{children}
		</SeaBattleContext.Provider>
	);
};

export default SeaBattle;

SeaBattle.propTypes = {
	cellSize: PropTypes.number.isRequired,
};

SeaBattle.defaultProps = {
	cellSize: 30,
};
import { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import Configure from './Configure'



export const SeaBattleContext = createContext();

const SeaBattle = (props) => {
	const { children } = props;
    const {setup, setSetup} = Configure()
	const { cellSize } = setup
    console.log(setup);

	const value = useMemo(() => ({ cellSize }), [cellSize]);

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
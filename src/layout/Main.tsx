import React from 'react'

const Main: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<div>
			{children}
		</div>
	)
}

export default Main;

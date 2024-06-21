import React from 'react';

export type SpacerProps =
	| {
			width: string | number;
			height?: string | number;
	  }
	| {
			width?: string | number;
			height: string | number;
	  };

/**
 * Spacer
 *
 * Create Horizontal and/or Vertical Spacer
 *
 * @param {string | number | undefined} width - Horizontal Spacer Size.
 * @param {string | number | undefined} height - Vertical Spacer Size.
 * @returns {React.FC} The Spacer
 */
export const Spacer: React.FC<SpacerProps> = ({ width, height }) => {
	return <div style={{ width: width, height: height }} />;
};

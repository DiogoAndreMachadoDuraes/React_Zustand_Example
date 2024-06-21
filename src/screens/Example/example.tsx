import React, { useState } from 'react';
import { useExampleStore } from '../../store';
import { Spacer } from '@components';

export const Example: React.FC = () => {
	// Invoke StoreValue and setValue from ExampleStore
	const storeValue = useExampleStore(state => state.value);
	const setValue = useExampleStore(state => state.setValue);

	// Create State named localValue
	const [localValue, setLocalValue] = useState(storeValue);

	// Changed State localValue to InputValue
	const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => setLocalValue(event.target.value);

	// Changed Value in Store
	const saveChanges = (): void => setValue(localValue);
	// Delete Value in Store
	const deleteStoreValue = (): void => setValue('');

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<p>Local Value: </p>
				<Spacer width="5px" />
				<p>{localValue}</p>
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<p>Value in redux-store: </p>
				<Spacer width="5px" />
				<p>{storeValue}</p>
			</div>
			<input onChange={onChangeValue} value={localValue} />
			<Spacer height={10} />
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<button onClick={saveChanges}>Save Store Value</button>
				<Spacer width="5px" />
				<button onClick={deleteStoreValue}>Delete Store Value</button>
			</div>
		</div>
	);
};

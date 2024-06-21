import { Draft } from 'immer';
import { create, Mutate, StoreApi, UseBoundStore } from 'zustand';
import { DevtoolsOptions, persist, PersistOptions } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const resetters: (() => void)[] = [];

const createStore = <TState extends object>(config: {
	initialData: TState | Partial<TState> | ((state: Draft<TState>) => void);
	storeData: any;
	identifier: DevtoolsOptions | undefined;
	persistedData: PersistOptions<TState, TState> | undefined;
}) => {
	type CreateStoreProps = {
		initialData: TState | Partial<TState> | ((state: Draft<TState>) => void);
		storeData: any;
		identifier: DevtoolsOptions | undefined;
		persistedData: PersistOptions<TState, TState> | undefined;
	};

	type Store = Mutate<StoreApi<TState>, [['zustand/devtools', never], ['zustand/immer', never]]>;

	const configParameters: CreateStoreProps = config;

	const { initialData, storeData, persistedData } = configParameters;

	const isPersistedDataActive =
		process.env.REACT_APP_PERSIST_STORE === 'true' &&
		typeof persistedData?.name === 'string' &&
		typeof persistedData?.storage === 'function';

	const slice: UseBoundStore<Store> = create<TState>()(
		immer(isPersistedDataActive ? persist(storeData, persistedData) : storeData)
	);

	resetters.push(() => {
		slice.setState({ ...slice.getState(), ...initialData }, true);
	});

	return slice;
};

const resetAllStores = () => {
	for (const resetter of resetters) {
		resetter();
	}
};

export { createStore, resetAllStores };

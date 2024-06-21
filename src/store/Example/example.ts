import { createStore } from "./../store";
import {
  ExampleStore,
  ExampleStoreActions,
  ExampleStoreState,
} from "./example.types";

const storeIdentifier = "example-store";
const initialData: ExampleStoreState = {
  value: "",
};

const actions = (set: any): ExampleStoreActions => {
  const setValue = (changedValue: string) =>
    set(
      (state: ExampleStoreState) => {
        state.value = changedValue;
      },
      false,
      `${storeIdentifier}/set-value`
    );

  return {
    setValue,
  };
};

const storeData: (set: any) => ExampleStore = (set) => ({
  ...initialData,
  ...actions(set),
});

const storeConfig = {
  initialData,
  storeData,
  identifier: { name: "Example" },
  persistedData: { name: "Example" },
};

export const useExampleStore = createStore<ExampleStore>(storeConfig);

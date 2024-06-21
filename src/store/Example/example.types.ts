export interface ExampleStoreActions {
  setValue(changedValue: string): void;
}

export interface ExampleStoreState {
  value: string;
}

export interface ExampleStore extends ExampleStoreState, ExampleStoreActions {}

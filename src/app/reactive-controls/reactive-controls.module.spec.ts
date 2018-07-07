import { ReactiveControlsModule } from './reactive-controls.module';

describe('ReactiveControlsModule', () => {
  let reactiveControlsModule: ReactiveControlsModule;

  beforeEach(() => {
    reactiveControlsModule = new ReactiveControlsModule();
  });

  it('should create an instance', () => {
    expect(reactiveControlsModule).toBeTruthy();
  });
});

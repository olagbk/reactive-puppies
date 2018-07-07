import { FollowDirective } from './follow.directive';

fdescribe('FollowDirective', () => {

  it('should create an instance', () => {
    const directive = new FollowDirective(null, null, null, null);
    expect(directive).toBeTruthy();
  });

  it('should move an element with static background', () => {
    const directive = new FollowDirective(null, null, null, null);
    directive.source = undefined;

  })
});

import { NgStructuralPage } from './app.po';

describe('ng-structural App', () => {
  let page: NgStructuralPage;

  beforeEach(() => {
    page = new NgStructuralPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

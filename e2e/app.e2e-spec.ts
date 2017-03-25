import { Angular2TestProjectPage } from './app.po';

describe('angular2-test-project App', () => {
  let page: Angular2TestProjectPage;

  beforeEach(() => {
    page = new Angular2TestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

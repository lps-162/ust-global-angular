import { AfternoonPage } from './app.po';

describe('afternoon App', () => {
  let page: AfternoonPage;

  beforeEach(() => {
    page = new AfternoonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

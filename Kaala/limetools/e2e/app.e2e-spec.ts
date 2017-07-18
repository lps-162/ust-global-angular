import { MorningPage } from './app.po';

describe('morning App', () => {
  let page: MorningPage;

  beforeEach(() => {
    page = new MorningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

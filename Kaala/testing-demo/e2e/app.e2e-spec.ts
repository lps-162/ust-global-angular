import { TestingDemoPage } from './app.po';

describe('testing-demo App', () => {
  let page: TestingDemoPage;

  beforeEach(() => {
    page = new TestingDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

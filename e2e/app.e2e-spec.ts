import { TraductionPage } from './app.po';

describe('traduction App', () => {
  let page: TraductionPage;

  beforeEach(() => {
    page = new TraductionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

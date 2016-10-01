import { StitchAppPage } from './app.po';

describe('stitch-app App', function() {
  let page: StitchAppPage;

  beforeEach(() => {
    page = new StitchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

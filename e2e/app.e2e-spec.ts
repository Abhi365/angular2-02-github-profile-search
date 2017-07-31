import { Angular02GithubProfileSearchPage } from './app.po';

describe('angular02-github-profile-search App', () => {
  let page: Angular02GithubProfileSearchPage;

  beforeEach(() => {
    page = new Angular02GithubProfileSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

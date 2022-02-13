import { newE2EPage } from '@stencil/core/testing';

describe('mdb-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mdb-button></mdb-button>');

    const element = await page.find('mdb-button');
    expect(element).toHaveClass('hydrated');
  });
});

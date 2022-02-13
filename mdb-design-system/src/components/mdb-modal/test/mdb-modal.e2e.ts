import { newE2EPage } from '@stencil/core/testing';

describe('mdb-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mdb-modal></mdb-modal>');

    const element = await page.find('mdb-modal');
    expect(element).toHaveClass('hydrated');
  });
});

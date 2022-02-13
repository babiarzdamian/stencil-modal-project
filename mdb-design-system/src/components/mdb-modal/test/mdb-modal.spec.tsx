import { newSpecPage } from '@stencil/core/testing';
import { MdbModal } from '../mdb-modal';

describe('mdb-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MdbModal],
      html: `<mdb-modal></mdb-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <mdb-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mdb-modal>
    `);
  });
});

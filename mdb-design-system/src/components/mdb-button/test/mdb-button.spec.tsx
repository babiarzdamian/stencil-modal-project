import { newSpecPage } from '@stencil/core/testing';
import { MdbButton } from '../mdb-button';

describe('mdb-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MdbButton],
      html: `<mdb-button></mdb-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mdb-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mdb-button>
    `);
  });
});

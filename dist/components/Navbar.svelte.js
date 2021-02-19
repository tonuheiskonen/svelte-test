/* src\components\Navbar.svelte generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let nav;

	return {
		c() {
			nav = element("nav");

			nav.innerHTML = `<a href="/">home</a> 
  <a href="/help">help</a>`;
		},
		m(target, anchor) {
			insert(target, nav, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(nav);
		}
	};
}

class Navbar extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Navbar;
/* src\App.svelte generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	check_outros,
	component_subscribe,
	create_component,
	destroy_component,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import router from "../_snowpack/pkg/page.js";
import { user } from "./store.js";
import Login from "./components/Login.svelte.js";
import Navbar from "./components/Navbar.svelte.js";
import Home from "./views/Home.svelte.js";
import Help from "./views/Help.svelte.js";

function create_else_block(ctx) {
	let navbar;
	let t0;
	let h2;
	let t1_value = /*$user*/ ctx[1].name + "";
	let t1;
	let t2;
	let switch_instance;
	let switch_instance_anchor;
	let current;
	navbar = new Navbar({});
	var switch_value = /*component*/ ctx[0];

	function switch_props(ctx) {
		return {};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			create_component(navbar.$$.fragment);
			t0 = space();
			h2 = element("h2");
			t1 = text(t1_value);
			t2 = space();
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			mount_component(navbar, target, anchor);
			insert(target, t0, anchor);
			insert(target, h2, anchor);
			append(h2, t1);
			insert(target, t2, anchor);

			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*$user*/ 2) && t1_value !== (t1_value = /*$user*/ ctx[1].name + "")) set_data(t1, t1_value);

			if (switch_value !== (switch_value = /*component*/ ctx[0])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				
			}
		},
		i(local) {
			if (current) return;
			transition_in(navbar.$$.fragment, local);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navbar.$$.fragment, local);
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(navbar, detaching);
			if (detaching) detach(t0);
			if (detaching) detach(h2);
			if (detaching) detach(t2);
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

// (19:0) {#if !$user}
function create_if_block(ctx) {
	let login;
	let current;
	login = new Login({});

	return {
		c() {
			create_component(login.$$.fragment);
		},
		m(target, anchor) {
			mount_component(login, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(login.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(login.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(login, detaching);
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (!/*$user*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $user;
	component_subscribe($$self, user, $$value => $$invalidate(1, $user = $$value));
	let component;
	router("/", () => $$invalidate(0, component = Home));
	router("/help", () => $$invalidate(0, component = Help));
	router.start();
	return [component, $user];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;
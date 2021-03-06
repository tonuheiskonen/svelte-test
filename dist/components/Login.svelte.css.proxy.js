// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "main.svelte-rk3sva{height:100vh;display:grid;place-items:center;background-color:#080808}form.svelte-rk3sva{display:grid;border:1px solid rgba(255, 255, 255, 0.15);border-radius:0.25rem;padding:2rem;background-color:rgba(255, 255, 255, 0.05)}fieldset.svelte-rk3sva{display:grid;grid-template-columns:1fr 2fr;margin:0.125rem;align-items:center;border:none}label.svelte-rk3sva{font-weight:300;color:#aaa}input.svelte-rk3sva,button.svelte-rk3sva{padding:0.5rem 1rem;background-color:#080808;border:1px solid rgba(255, 255, 255, 0.15);border-radius:0.25rem;color:#aaa;font-weight:300;font-size:inherit;font-family:inherit}button.svelte-rk3sva{grid-column:1/3;text-transform:uppercase;font-weight:bold;color:rgb(23, 93, 23)}button[disabled].svelte-rk3sva{color:rgba(255, 255, 255, 0.15)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
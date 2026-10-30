// Flat config with no plugins, so it runs with the globally installed eslint.
const browser = Object.fromEntries([
  'window', 'self', 'document', 'navigator', 'location', 'history', 'console', 'fetch', 'Request', 'Response', 'Headers',
  'URL', 'URLSearchParams', 'Blob', 'File', 'FileReader', 'FileList', 'FormData', 'TextEncoder', 'TextDecoder',
  'TextDecoderStream', 'ReadableStream', 'WritableStream', 'TransformStream', 'AbortController', 'AbortSignal',
  'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'requestAnimationFrame', 'cancelAnimationFrame',
  'queueMicrotask', 'structuredClone', 'crypto', 'performance', 'indexedDB', 'IDBKeyRange', 'localStorage',
  'sessionStorage', 'Worker', 'MessageChannel', 'Image', 'ImageBitmap', 'createImageBitmap', 'OffscreenCanvas',
  'HTMLElement', 'HTMLInputElement', 'HTMLTextAreaElement', 'Element', 'Node', 'NodeFilter', 'Event', 'CustomEvent',
  'EventTarget', 'KeyboardEvent', 'MutationObserver', 'ResizeObserver', 'IntersectionObserver', 'DOMParser',
  'getComputedStyle', 'matchMedia', 'alert', 'confirm', 'prompt', 'atob', 'btoa', 'DataTransfer', 'ClipboardItem',
  'showDirectoryPicker', 'FileSystemHandle', 'FileSystemFileHandle', 'FileSystemDirectoryHandle', 'CSS', 'Intl',
  'globalThis', 'DOMException', 'DocumentFragment', 'HTMLIFrameElement', 'HTMLCanvasElement', 'scrollTo', 'open',
].map((n) => [n, 'readonly']));
const node = Object.fromEntries(['process', 'Buffer', '__dirname', 'setImmediate'].map((n) => [n, 'readonly']));

export default [
  { ignores: ['vendor/**', 'tools/entry-*.mjs'] },
  {
    files: ['js/**/*.js', 'test/**/*.js'],
    languageOptions: { ecmaVersion: 2024, sourceType: 'module', globals: browser },
    rules: { 'no-undef': 'error', 'no-unused-vars': ['warn', { args: 'none' }], 'no-unreachable': 'error', 'no-dupe-keys': 'error', 'no-redeclare': 'error' },
  },
  {
    files: ['test/**/*.mjs', 'proxy/**/*.mjs', 'proxy/**/*.js', 'eslint.config.mjs'],
    languageOptions: { ecmaVersion: 2024, sourceType: 'module', globals: { ...browser, ...node } },
    rules: { 'no-undef': 'error', 'no-unused-vars': ['warn', { args: 'none' }] },
  },
];

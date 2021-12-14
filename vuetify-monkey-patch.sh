#!/usr/bin/env bash
echo "WARNING: This monkey patch should be removed once the issue is fixed."
echo "See: https://github.com/nuxt/framework/discussions/1183"

cat > node_modules/vuetify/lib/util/globals.mjs << EOF
export const IS_NODE = typeof process !== 'undefined';
export const IN_BROWSER = typeof window !== 'undefined';
export const IS_DEBUG = false; // IS_NODE && process.?env.DEBUG === 'true';
export const IS_PROD = false; // IS_NODE && process.?env.NODE_ENV === 'production';
export const SUPPORTS_INTERSECTION = IN_BROWSER && 'IntersectionObserver' in window;
export const SUPPORTS_TOUCH  = false; // NOT DEFINED
//# sourceMappingURL=globals.mjs.map
EOF

# TODO: Add SUPPORTS_FOCUS_VISIBLE because it was not defined!
cat > node_modules/vuetify/lib/util/index.mjs << EOF
export * from "./animation.mjs";
export * from "./colorUtils.mjs";
export * from "./console.mjs";
export * from "./createSimpleFunctional.mjs";
export * from "./defineComponent.mjs";
export * from "./dom.mjs";
export * from "./easing.mjs";
export * from "./getCurrentInstance.mjs";
export * from "./getScrollParent.mjs";
export * from "./globals.mjs";
export * from "./helpers.mjs";
export * from "./isFixedPosition.mjs";
export * from "./propsFactory.mjs";
export * from "./useRender.mjs";
export const SUPPORTS_FOCUS_VISIBLE = false;
//# sourceMappingURL=index.mjs.map
EOF

# TODO: Add IntersectionObserver to fix errors with v-text-field!
cat > node_modules/vuetify/lib/composables/intersectionObserver.mjs << EOF
// Utilities
import { onBeforeUnmount, ref, watch } from 'vue';
class IntersectionObserver {
  constructor (callback) {
    this.callback = callback
  }
  observe () {
    this.callback?.([], this)
    return null
  }
  unobserve () {
    this.callback = undefined
    return null
  }
}
export function useIntersectionObserver(callback) {
  const intersectionRef = ref();
  const isIntersecting = ref(false);
  const observer = new IntersectionObserver(entries => {
    callback == null ? void 0 : callback(entries, observer);
    isIntersecting.value = !!entries.find(entry => entry.isIntersecting);
  });
  onBeforeUnmount(() => {
    observer.disconnect();
  });
  watch(intersectionRef, (newValue, oldValue) => {
    if (oldValue) {
      observer.unobserve(oldValue);
      isIntersecting.value = false;
    }

    if (newValue) observer.observe(newValue);
  }, {
    flush: 'post'
  });
  return {
    intersectionRef,
    isIntersecting
  };
}
//# sourceMappingURL=intersectionObserver.mjs.map
EOF
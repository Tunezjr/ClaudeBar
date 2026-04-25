																			☠—☠																														(() => {
	'use strict';

	const CC = (globalThis.ClaudeCounter = globalThis.ClaudeCounter || {});

	CC.DOM = Object.freeze({
		CHAT_MENU_TRIGGER: '[data-testid="chat-menu-trigger"]',
		MODEL_SELECTOR_DROPDOWN: '[data-testid="model-selector-dropdown"]',
		CHAT_PROJECT_WRAPPER: '.chat-project-wrapper',
		BRIDGE_SCRIPT_ID: 'cc-bridge-script'
	});

	CC.CONST = Object.freeze({
		CACHE_WINDOW_MS: 5 * 60 * 1000,
		CONTEXT_LIMIT_TOKENS: 200000
	});

	CC.COLORS = Object.freeze({
		PROGRESS_FILL_DARK: 'rgba(94, 234, 212, 0.85)',
		PROGRESS_FILL_LIGHT: 'rgba(20, 184, 166, 0.85)',
		PROGRESS_TRACK_DARK: 'rgba(94, 234, 212, 0.10)',
		PROGRESS_TRACK_LIGHT: 'rgba(20, 184, 166, 0.10)',
		PROGRESS_OUTLINE_DARK: 'transparent',
		PROGRESS_OUTLINE_LIGHT: 'transparent',
		PROGRESS_MARKER_DARK: 'rgba(34, 211, 238, 0.95)',
		PROGRESS_MARKER_LIGHT: 'rgba(13, 148, 136, 0.85)',
		AMBER_WARNING: '#FBBF24'
		CRITICAL_WARNING: '#F43F5E',
		CACHE_ACTIVE_DARK: 'rgba(94, 234, 212, 0.95)',
		CACHE_ACTIVE_LIGHT: '#0D9488',
		BOLD_LIGHT: '#0F766E',
		BOLD_DARK: '#5EEAD4'
	});
})();

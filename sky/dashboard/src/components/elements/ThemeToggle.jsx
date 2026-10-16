import React from 'react';
import PropTypes from 'prop-types';
import { Monitor, Moon, Sun } from 'lucide-react';
import { SegmentedToggle } from '@/components/elements/SegmentedToggle';
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_SYSTEM,
  useTheme,
} from '@/hooks/useTheme';

const OPTIONS = [
  { value: THEME_LIGHT, label: 'Light', Icon: Sun },
  { value: THEME_DARK, label: 'Dark', Icon: Moon },
  { value: THEME_SYSTEM, label: 'System', Icon: Monitor },
];

/**
 * Light / Dark / System switch. With `showLabels` false (top bar) only the
 * icons are drawn; the text stays available to screen readers and as a
 * tooltip.
 */
export function ThemeToggle({ showLabels = false }) {
  const { theme, setTheme } = useTheme();
  return (
    <SegmentedToggle
      ariaLabel="Color theme"
      value={theme}
      onChange={setTheme}
      options={OPTIONS.map(({ value, label, Icon }) => ({
        value,
        label: (
          <span className="inline-flex items-center gap-1.5" title={label}>
            <Icon className="w-3.5 h-3.5" aria-hidden="true" />
            <span className={showLabels ? undefined : 'sr-only'}>{label}</span>
          </span>
        ),
      }))}
    />
  );
}

ThemeToggle.propTypes = {
  showLabels: PropTypes.bool,
};

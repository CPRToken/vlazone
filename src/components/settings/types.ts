// ----------------------------------------------------------------------

export type SettingsValueProps = {
  themeMode: 'light' | 'dark';
  themeDirection: 'rtl' | 'ltr';
  themeColorPresets: 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05';
};

export type SettingsContextProps = SettingsValueProps & {
  // Update
  onUpdate: (name: string, value: string | boolean) => void;
  // Reset
  canReset: boolean;
  onReset: VoidFunction;
  // Drawer
  open: boolean;
  onToggle: VoidFunction;
  onClose: VoidFunction;
};

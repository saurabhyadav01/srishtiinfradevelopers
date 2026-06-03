// Real estate color palette — navy, gold accent, warm cream backgrounds
export const theme = {
  primary: '#1A365D',
  primaryDark: '#0F2440',
  primaryLight: '#2C5282',
  accent: '#C8A951',
  accentDark: '#A8893A',
  accentLight: '#E8D5A3',
  bg: '#FAF8F5',
  bgSoft: '#F5F1EB',
  bgWarm: '#EDE8DF',
  text: '#2D3748',
  textDark: '#1A202C',
  textMuted: '#718096',
  success: '#276749',
  white: '#FFFFFF',
  gradientPrimary: 'linear-gradient(135deg, #0F2440 0%, #1A365D 50%, #2C5282 100%)',
  gradientAccent: 'linear-gradient(135deg, #1A365D 0%, #234E70 100%)',
  gradientHero: 'linear-gradient(135deg, #0F2440 0%, #1A365D 100%)',
  shadow: '0 12px 40px rgba(26, 54, 93, 0.12)',
  shadowHover: '0 20px 50px rgba(26, 54, 93, 0.18)'
} as const;

export default theme;

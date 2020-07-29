interface CnsFn {
  (...args: string[]): void;
}

declare global {
  interface Console {
    oldInfo: CnsFn;
    oldWarn: CnsFn;
    oldError: CnsFn;
  }
}

interface BaseLog {
  icon: string;
  whiteFg: string;
  reset: string;
  reverse: string;
}

interface Info extends BaseLog {
  blueBg: string;
  blueFg: string;
}
const info: Info = {
  icon: '\u2139',
  blueBg: '\x1b[44m',
  blueFg: '\x1b[34m',
  whiteFg: '\x1b[37m',
  reset: '\x1b[0m',
  reverse: '\x1b[7m',
};

console.oldInfo = console.info;
console.info = function (...args: string[]): void {
  const infoIcon = [info.blueBg + info.whiteFg, info.icon, info.reset];
  const msg: string[] = [info.blueFg, ...args, info.reset];
  console.oldInfo(...infoIcon, ...msg);
};

interface Warn extends BaseLog {
  yellowBg: string;
  yellowFg: string;
}
const warn: Warn = {
  icon: '\u26A0',
  yellowBg: '\x1b[43m',
  yellowFg: '\x1b[33m',
  whiteFg: '\x1b[37m',
  reset: '\x1b[0m',
  reverse: '\x1b[7m',
};

console.oldWarn = console.warn;
console.warn = function (...args: string[]): void {
  const warnIcon: string[] = [warn.yellowBg + warn.whiteFg, warn.icon, warn.reset];
  const msg: string[] = [warn.yellowFg, ...args, warn.reset];
  console.oldWarn(...warnIcon, ...msg);
};

interface Error extends BaseLog {
  redBg: string;
  redFg: string;
}
const error: Error = {
  icon: '✘',
  redBg: '\x1b[41m',
  redFg: '\x1b[31m',
  whiteFg: '\x1b[37m',
  reset: '\x1b[0m',
  reverse: '\x1b[7m',
};

console.oldError = console.error;
console.error = function (...args: string[]): void {
  const errorIcon: string[] = [error.redBg + error.whiteFg, error.icon, error.reset];
  const msg: string[] = [error.redFg, ...args, error.reset];
  console.oldError(...errorIcon, ...msg);
};

export default console;

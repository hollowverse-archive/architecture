import { ArchitectureComponent } from 'app/types';
import browsermd from './browser.md';
import usermd from './user.md';

export const browser: ArchitectureComponent = {
  id: 'browser',
  name: 'Browser',
  documentation: browsermd,
};

export const user: ArchitectureComponent = {
  id: 'user',
  name: 'User',
  documentation: usermd,
};

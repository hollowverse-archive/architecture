import { ArchitectureComponent } from 'app/types';
import browsermd from './browser.md';
import usermd from './user.md';
import awsRoute53md from './awsRoute53.md';
import hollowverseDotComCloudFrontmd from './hollowverseDotComCloudFront.md';

export const user: ArchitectureComponent = {
  id: 'user',
  name: 'User',
  documentation: usermd,
};

export const browser: ArchitectureComponent = {
  id: 'browser',
  name: 'Browser',
  documentation: browsermd,
};

export const awsRoute53: ArchitectureComponent = {
  id: 'awsRoute53',
  name: 'AWS Route 53',
  documentation: awsRoute53md,
};

export const hollowverseDotComCloudFront: ArchitectureComponent = {
  id: 'hollowverseDotComCloudFront',
  name: 'hollowverse.com CloudFront',
  documentation: hollowverseDotComCloudFrontmd,
};

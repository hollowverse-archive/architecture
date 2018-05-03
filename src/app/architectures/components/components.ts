import { ArchitectureComponent } from 'app/types';
import browserMd from './browser.md';
import userMd from './user.md';
import awsRoute53Md from './awsRoute53.md';
import hollowverseComCloudFrontMd from './hollowverseComCloudFront.md';
import requestSourceMd from './requestSource.md';
import assignEnvironmentToViewerRequestMd from './assignEnvironmentToViewerRequest.md';
import cloudFrontCacheMd from './cloudFrontCache.md';

export const user: ArchitectureComponent = {
  id: 'user',
  name: 'User',
  documentation: userMd,
};

export const browser: ArchitectureComponent = {
  id: 'browser',
  name: 'Browser',
  documentation: browserMd,
};

export const awsRoute53: ArchitectureComponent = {
  id: 'awsRoute53',
  name: 'AWS Route 53',
  documentation: awsRoute53Md,
};

export const hollowverseComCloudFront: ArchitectureComponent = {
  id: 'hollowverseComCloudFront',
  name: 'hollowverse.com CloudFront',
  documentation: hollowverseComCloudFrontMd,
};

export const requestSource: ArchitectureComponent = {
  id: 'requestSource',
  name: 'Arbitrary source of request',
  documentation: requestSourceMd,
};

export const assignEnvironmentToViewerRequest: ArchitectureComponent = {
  id: 'assignEnvironmentToViewerRequest',
  name: 'assignEnvironmentToViewerRequest (AWS Lambda)',
  documentation: assignEnvironmentToViewerRequestMd,
};

export const cloudFrontEdgeServer: ArchitectureComponent = {
  id: 'cloudFrontEdgeServer',
  name: 'CloudFront Edge Server',
  documentation: cloudFrontCacheMd,
};

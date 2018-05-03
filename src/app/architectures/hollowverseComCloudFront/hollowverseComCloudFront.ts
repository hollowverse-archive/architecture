import {
  requestSource,
  assignEnvironmentToViewerRequest,
  cloudFrontEdgeServer,
  routeRequestToOrigin,
  hollowverseEnvironments,
  setHeadersOnOriginResponse,
} from 'architectures/components/components';
import { Architecture } from 'types';

import cloudFrontEdgeServerMd from './cloudFrontEdgeServer.md';

export const hollowverseComCloudFront: Architecture = {
  name: 'hollowverse.com CloudFront Distribution',
  components: [
    requestSource,
    assignEnvironmentToViewerRequest,
    {
      ...cloudFrontEdgeServer,
      additionalDocumentation: cloudFrontEdgeServerMd,
    },
    routeRequestToOrigin,
    hollowverseEnvironments,
    setHeadersOnOriginResponse,
  ],
  links: {},
};

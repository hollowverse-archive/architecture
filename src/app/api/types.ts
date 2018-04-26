/* tslint:disable */
//  This file was automatically generated and should not be edited.

export enum EditorialSummaryNodeType {
  quote = 'quote',
  heading = 'heading',
  paragraph = 'paragraph',
  text = 'text',
  emphasis = 'emphasis',
  link = 'link',
}

export type NotablePersonQueryVariables = {
  slug: string;
};

export type NotablePersonQuery = {
  notablePerson: {
    name: string;
    // The part of the URL to that notable person's page, e.g. Tom_Hanks
    slug: string;
    mainPhoto: {
      url: string;
      sourceUrl: string;
      colorPalette: {
        vibrant: string | null;
        darkVibrant: string | null;
        muted: string | null;
        darkMuted: string | null;
      } | null;
    } | null;
    summary: string | null;
    // This is used to load Facebook comments on the client.
    //
    // This should be treated as an opaque value because the protocol and path parts
    // of this URL might be different depending on whether the notable person
    // was imported from the old Hollowverse website or not. The trailing slash may
    // also be included or removed.
    //
    // Example: http://hollowverse.com/tom-hanks/ or https://hollowverse.com/Bill_Gates
    commentsUrl: string;
    relatedPeople: Array<{
      // The part of the URL to that notable person's page, e.g. Tom_Hanks
      slug: string;
      name: string;
      mainPhoto: {
        url: string;
      } | null;
    }>;
    // The content from the old Hollowverse
    editorialSummary: {
      author: string;
      lastUpdatedOn: string | null;
      nodes: Array<{
        id: string;
        parentId: string | null;
        text: string | null;
        type: EditorialSummaryNodeType;
        sourceUrl: string | null;
        sourceTitle: string | null;
      }>;
    } | null;
  } | null;
};
